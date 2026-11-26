(()=>{var Km=0,Ku=1,$m=2;var yn=1,Jm=2,ds=3,oa=0,Ni=1,Pi=2,Er=0,ms=1,ba=2,$u=3,Ju=4,Qm=5;var fn=100,eg=101,tg=102,ig=103,rg=104,ag=200,ng=201,sg=202,og=203,xp=204,yp=205,lg=206,cg=207,hg=208,ug=209,dg=210,pg=211,fg=212,mg=213,gg=214,pc=0,fc=1,mc=2,ys=3,gc=4,vc=5,Ms=6,_c=7,Mp=0,vg=1,_g=2,Fr=0,ko=1,Go=2,Vo=3,Fn=4,Wo=5,Xo=6,jo=7,Qu="attached",xg="detached",bp=300,Fa=301,Cn=302,Cl=303,Il=304,qo=306,la=1e3,Sr=1001,bs=1002,gi=1003,th=1004;var _n=1005;var Kt=1006,gs=1007;var lr=1008;var Xi=1009,Sp=1010,Tp=1011,Ss=1012,ih=1013,Br=1014,cr=1015,_i=1016,rh=1017,ah=1018,Ts=1020,Ep=35902,wp=35899,Ap=1021,Rp=1022,qi=1023,ca=1026,Da=1027,Ps=1028,nh=1029,Ba=1030,sh=1031;var oh=1033,Eo=33776,wo=33777,Ao=33778,Ro=33779,xc=35840,yc=35841,Mc=35842,bc=35843,Sc=36196,Tc=37492,Ec=37496,wc=37488,Ac=37489,Do=37490,Rc=37491,Cc=37808,Ic=37809,Pc=37810,Lc=37811,Dc=37812,Nc=37813,Uc=37814,Oc=37815,Fc=37816,Bc=37817,zc=37818,Hc=37819,kc=37820,Gc=37821,Vc=36492,Wc=36494,Xc=36495,jc=36283,qc=36284,No=36285,Yc=36286;var In=2300,Pn=2301,Pl=2302,ed=2303,td=2400,id=2401,rd=2402,yg=2500;var Cp=0,Yo=1,Ls=2,Mg=3200;var Zc=0,bg=1,Ma="",Yt="srgb",Yi="srgb-linear",Uo="linear",kt="srgb";var Ua=7680,Ip=7681;var Pp=517;var lh=519,Sg=512,Tg=513,Eg=514,ch=515,wg=516,Ag=517,hh=518,Rg=519,Lp=35044,ha=35048;var ad="300 es",Tr=2e3,Es=2001;function Cg(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ig(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function ws(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function Pg(){let e=ws("canvas");return e.style.display="block",e}var nd={},Ln=null;function Oo(...e){let t="THREE."+e.shift();Ln?Ln("log",t,...e):console.log(t,...e)}function Dp(e){let t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){let i=e[1];i&&i.isStackTrace?e[0]+=" "+i.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Qe(...e){e=Dp(e);let t="THREE."+e.shift();if(Ln)Ln("warn",t,...e);else{let i=e[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...e)}}function pt(...e){e=Dp(e);let t="THREE."+e.shift();if(Ln)Ln("error",t,...e);else{let i=e[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...e)}}function Mn(...e){let t=e.join(" ");t in nd||(nd[t]=!0,Qe(...e))}function Lg(e,t,i){return new Promise(function(r,a){function n(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:a();break;case e.TIMEOUT_EXPIRED:setTimeout(n,i);break;default:r()}}setTimeout(n,i)})}var Dg={[pc]:fc,[mc]:Ms,[gc]:_c,[ys]:vc,[fc]:pc,[Ms]:mc,[_c]:gc,[vc]:ys},Ha=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let r=i[e];if(r!==void 0){let a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let a=0,n=r.length;a<n;a++)r[a].call(this,e);e.target=null}}},Bi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sd=1234567,bn=Math.PI/180,Dn=180/Math.PI;function hr(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Bi[e&255]+Bi[e>>8&255]+Bi[e>>16&255]+Bi[e>>24&255]+"-"+Bi[t&255]+Bi[t>>8&255]+"-"+Bi[t>>16&15|64]+Bi[t>>24&255]+"-"+Bi[i&63|128]+Bi[i>>8&255]+"-"+Bi[i>>16&255]+Bi[i>>24&255]+Bi[r&255]+Bi[r>>8&255]+Bi[r>>16&255]+Bi[r>>24&255]).toLowerCase()}function Mt(e,t,i){return Math.max(t,Math.min(i,e))}function uh(e,t){return(e%t+t)%t}function Ng(e,t,i,r,a){return r+(e-t)*(a-r)/(i-t)}function Ug(e,t,i){return e!==t?(i-e)/(t-e):0}function vs(e,t,i){return(1-i)*e+i*t}function Og(e,t,i,r){return vs(e,t,1-Math.exp(-i*r))}function Fg(e,t=1){return t-Math.abs(uh(e,t*2)-t)}function Bg(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*(3-2*e))}function zg(e,t,i){return e<=t?0:e>=i?1:(e=(e-t)/(i-t),e*e*e*(e*(e*6-15)+10))}function Hg(e,t){return e+Math.floor(Math.random()*(t-e+1))}function kg(e,t){return e+Math.random()*(t-e)}function Gg(e){return e*(.5-Math.random())}function Vg(e){e!==void 0&&(sd=e);let t=sd+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Wg(e){return e*bn}function Xg(e){return e*Dn}function jg(e){return e>0&&Number.isInteger(e)&&2**Math.round(Math.log2(e))===e}function qg(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Yg(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Zg(e,t,i,r,a){let n=Math.cos,s=Math.sin,o=n(i/2),l=s(i/2),c=n((t+r)/2),h=s((t+r)/2),d=n((t-r)/2),u=s((t-r)/2),p=n((r-t)/2),g=s((r-t)/2);switch(a){case"XYX":e.set(o*h,l*d,l*u,o*c);break;case"YZY":e.set(l*u,o*h,l*d,o*c);break;case"ZXZ":e.set(l*d,l*u,o*h,o*c);break;case"XZX":e.set(o*h,l*g,l*p,o*c);break;case"YXY":e.set(l*p,o*h,l*g,o*c);break;case"ZYZ":e.set(l*g,l*p,o*h,o*c);break;default:Qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function br(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:case Uint8ClampedArray:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Np={DEG2RAD:bn,RAD2DEG:Dn,generateUUID:hr,clamp:Mt,euclideanModulo:uh,mapLinear:Ng,inverseLerp:Ug,lerp:vs,damp:Og,pingpong:Fg,smoothstep:Bg,smootherstep:zg,randInt:Hg,randFloat:kg,randFloatSpread:Gg,seededRandom:Vg,degToRad:Wg,radToDeg:Xg,isPowerOfTwo:jg,ceilPowerOfTwo:qg,floorPowerOfTwo:Yg,setQuaternionFromProperEuler:Zg,normalize:qt,denormalize:br},Tn,de=(Tn=class{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let i=this.x,r=this.y,a=t.elements;return this.x=a[0]*i+a[3]*r+a[6],this.y=a[1]*i+a[4]*r+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){let r=Math.cos(i),a=Math.sin(i),n=this.x-t.x,s=this.y-t.y;return this.x=n*r-s*a+t.x,this.y=n*a+s*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Tn.prototype.isVector2=!0,Tn),hi=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,n,s){let o=i[r+0],l=i[r+1],c=i[r+2],h=i[r+3],d=a[n+0],u=a[n+1],p=a[n+2],g=a[n+3];if(h!==g||o!==d||l!==u||c!==p){let x=o*d+l*u+c*p+h*g;x<0&&(d=-d,u=-u,p=-p,g=-g,x=-x);let m=1-s;if(x<.9995){let f=Math.acos(x),M=Math.sin(f);m=Math.sin(m*f)/M,s=Math.sin(s*f)/M,o=o*m+d*s,l=l*m+u*s,c=c*m+p*s,h=h*m+g*s}else{o=o*m+d*s,l=l*m+u*s,c=c*m+p*s,h=h*m+g*s;let f=1/Math.sqrt(o*o+l*l+c*c+h*h);o*=f,l*=f,c*=f,h*=f}}e[t]=o,e[t+1]=l,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,a,n){let s=i[r],o=i[r+1],l=i[r+2],c=i[r+3],h=a[n],d=a[n+1],u=a[n+2],p=a[n+3];return e[t]=s*p+c*h+o*u-l*d,e[t+1]=o*p+c*d+l*h-s*u,e[t+2]=l*p+c*u+s*d-o*h,e[t+3]=c*p-s*h-o*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,a=e._z,n=e._order,s=Math.cos,o=Math.sin,l=s(i/2),c=s(r/2),h=s(a/2),d=o(i/2),u=o(r/2),p=o(a/2);switch(n){case"XYZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"YXZ":this._x=d*c*h+l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"ZXY":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h-d*u*p;break;case"ZYX":this._x=d*c*h-l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h+d*u*p;break;case"YZX":this._x=d*c*h+l*u*p,this._y=l*u*h+d*c*p,this._z=l*c*p-d*u*h,this._w=l*c*h-d*u*p;break;case"XZY":this._x=d*c*h-l*u*p,this._y=l*u*h-d*c*p,this._z=l*c*p+d*u*h,this._w=l*c*h+d*u*p;break;default:Qe("Quaternion: .setFromEuler() encountered an unknown order: "+n)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10],d=i+s+h;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(c-o)*u,this._y=(a-l)*u,this._z=(n-r)*u}else if(i>s&&i>h){let u=2*Math.sqrt(1+i-s-h);this._w=(c-o)/u,this._x=.25*u,this._y=(r+n)/u,this._z=(a+l)/u}else if(s>h){let u=2*Math.sqrt(1+s-i-h);this._w=(a-l)/u,this._x=(r+n)/u,this._y=.25*u,this._z=(o+c)/u}else{let u=2*Math.sqrt(1+h-i-s);this._w=(n-r)/u,this._x=(a+l)/u,this._y=(o+c)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=t._x,o=t._y,l=t._z,c=t._w;return this._x=i*c+n*s+r*l-a*o,this._y=r*c+n*o+a*s-i*l,this._z=a*c+n*l+i*o-r*s,this._w=n*c-i*s-r*o-a*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,a=e._z,n=e._w,s=this.dot(e);s<0&&(i=-i,r=-r,a=-a,n=-n,s=-s);let o=1-t;if(s<.9995){let l=Math.acos(s),c=Math.sin(l);o=Math.sin(o*l)/c,t=Math.sin(t*l)/c,this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this._onChangeCallback()}else this._x=this._x*o+i*t,this._y=this._y*o+r*t,this._z=this._z*o+a*t,this._w=this._w*o+n*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},En,R=(En=class{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(od.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(od.setFromAxisAngle(t,i))}applyMatrix3(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[3]*r+n[6]*a,this.y=n[1]*i+n[4]*r+n[7]*a,this.z=n[2]*i+n[5]*r+n[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=t.elements,s=1/(n[3]*i+n[7]*r+n[11]*a+n[15]);return this.x=(n[0]*i+n[4]*r+n[8]*a+n[12])*s,this.y=(n[1]*i+n[5]*r+n[9]*a+n[13])*s,this.z=(n[2]*i+n[6]*r+n[10]*a+n[14])*s,this}applyQuaternion(t){let i=this.x,r=this.y,a=this.z,n=t.x,s=t.y,o=t.z,l=t.w,c=2*(s*a-o*r),h=2*(o*i-n*a),d=2*(n*r-s*i);return this.x=i+l*c+s*d-o*h,this.y=r+l*h+o*c-n*d,this.z=a+l*d+n*h-s*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let i=this.x,r=this.y,a=this.z,n=t.elements;return this.x=n[0]*i+n[4]*r+n[8]*a,this.y=n[1]*i+n[5]*r+n[9]*a,this.z=n[2]*i+n[6]*r+n[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){let r=t.x,a=t.y,n=t.z,s=i.x,o=i.y,l=i.z;return this.x=a*l-n*o,this.y=n*s-r*l,this.z=r*o-a*s,this}projectOnVector(t){let i=t.lengthSq();if(i===0)return this.set(0,0,0);let r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Ll.copy(this).projectOnVector(t),this.sub(Ll)}reflect(t){return this.sub(Ll.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let i=this.x-t.x,r=this.y-t.y,a=this.z-t.z;return i*i+r*r+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){let a=Math.sin(i)*t;return this.x=a*Math.sin(r),this.y=Math.cos(i)*t,this.z=a*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){let i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=a,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},En.prototype.isVector3=!0,En),Ll=new R,od=new hi,wn,xt=(wn=class{constructor(t,i,r,a,n,s,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c)}set(t,i,r,a,n,s,o,l,c){let h=this.elements;return h[0]=t,h[1]=a,h[2]=o,h[3]=i,h[4]=n,h[5]=l,h[6]=r,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[3],l=r[6],c=r[1],h=r[4],d=r[7],u=r[2],p=r[5],g=r[8],x=a[0],m=a[3],f=a[6],M=a[1],y=a[4],v=a[7],S=a[2],A=a[5],w=a[8];return n[0]=s*x+o*M+l*S,n[3]=s*m+o*y+l*A,n[6]=s*f+o*v+l*w,n[1]=c*x+h*M+d*S,n[4]=c*m+h*y+d*A,n[7]=c*f+h*v+d*w,n[2]=u*x+p*M+g*S,n[5]=u*m+p*y+g*A,n[8]=u*f+p*v+g*w,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return i*s*h-i*o*c-r*n*h+r*o*l+a*n*c-a*s*l}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*s-o*c,u=o*l-h*n,p=c*n-s*l,g=i*d+r*u+a*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(a*c-h*r)*x,t[2]=(o*r-a*s)*x,t[3]=u*x,t[4]=(h*i-a*l)*x,t[5]=(a*n-o*i)*x,t[6]=p*x,t[7]=(r*l-c*i)*x,t[8]=(s*i-r*n)*x,this}transpose(){let t,i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,a,n,s,o){let l=Math.cos(n),c=Math.sin(n);return this.set(r*l,r*c,-r*(l*s+c*o)+s+t,-a*c,a*l,-a*(-c*s+l*o)+o+i,0,0,1),this}scale(t,i){return Mn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dl.makeScale(t,i)),this}rotate(t){return Mn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dl.makeRotation(-t)),this}translate(t,i){return Mn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dl.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<9;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}},wn.prototype.isMatrix3=!0,wn),Dl=new xt,ld=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cd=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Kg(){let e={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(a,n,s){return this.enabled===!1||n===s||!n||!s||(this.spaces[n].transfer===kt&&(a.r=sa(a.r),a.g=sa(a.g),a.b=sa(a.b)),this.spaces[n].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[n].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===kt&&(a.r=Sn(a.r),a.g=Sn(a.g),a.b=Sn(a.b))),a},workingToColorSpace:function(a,n){return this.convert(a,this.workingColorSpace,n)},colorSpaceToWorking:function(a,n){return this.convert(a,n,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ma?Uo:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,n=this.workingColorSpace){return a.fromArray(this.spaces[n].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,n,s){return a.copy(this.spaces[n].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,n){return Mn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(a,n)},toWorkingColorSpace:function(a,n){return Mn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(a,n)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[Yi]:{primaries:t,whitePoint:r,transfer:Uo,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Yt},outputColorSpaceConfig:{drawingBufferColorSpace:Yt}},[Yt]:{primaries:t,whitePoint:r,transfer:kt,toXYZ:ld,fromXYZ:cd,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Yt}}}),e}var wt=Kg();function sa(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function Sn(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}var Ja,$g=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ja===void 0&&(Ja=ws("canvas")),Ja.width=e.width,Ja.height=e.height;let r=Ja.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ja}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ws("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let n=0;n<a.length;n++)a[n]=sa(a[n]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(sa(t[i]/255)*255):t[i]=sa(t[i]);return{data:t,width:e.width,height:e.height}}else return Qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Jg=0,dh=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let n=0,s=r.length;n<s;n++)r[n].isDataTexture?a.push(Nl(r[n].image)):a.push(Nl(r[n]))}else a=Nl(r);i.url=a}return t||(e.images[this.uuid]=i),i}};function Nl(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?$g.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Qe("Texture: Unable to serialize Texture."),{})}var Qg=0,Ul=new R,Hi=class Co extends Ha{constructor(t=Co.DEFAULT_IMAGE,i=Co.DEFAULT_MAPPING,r=Sr,a=Sr,n=Kt,s=lr,o=qi,l=Xi,c=Co.DEFAULT_ANISOTROPY,h=Ma){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=hr(),this.name="",this.source=new dh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=n,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let i in t){let r=t[i];if(r===void 0){Qe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let a=this[i];if(a===void 0){Qe(`Texture.setValues(): property '${i}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[i]=r}}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case la:t.x=t.x-Math.floor(t.x);break;case Sr:t.x=t.x<0?0:1;break;case bs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case la:t.y=t.y-Math.floor(t.y);break;case Sr:t.y=t.y<0?0:1;break;case bs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hi.DEFAULT_IMAGE=null;Hi.DEFAULT_MAPPING=bp;Hi.DEFAULT_ANISOTROPY=1;var An,Vt=(An=class{constructor(t=0,i=0,r=0,a=1){this.x=t,this.y=i,this.z=r,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,a){return this.x=t,this.y=i,this.z=r,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let i=this.x,r=this.y,a=this.z,n=this.w,s=t.elements;return this.x=s[0]*i+s[4]*r+s[8]*a+s[12]*n,this.y=s[1]*i+s[5]*r+s[9]*a+s[13]*n,this.z=s[2]*i+s[6]*r+s[10]*a+s[14]*n,this.w=s[3]*i+s[7]*r+s[11]*a+s[15]*n,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,a,n,s=t.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],u=s[9],p=s[2],g=s[6],x=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+x-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,M=(d+1)/2,y=(x+1)/2,v=(l+h)/4,S=(c+p)/4,A=(u+g)/4;return f>M&&f>y?f<.01?(r=0,a=.707106781,n=.707106781):(r=Math.sqrt(f),a=v/r,n=S/r):M>y?M<.01?(r=.707106781,a=0,n=.707106781):(a=Math.sqrt(M),r=v/a,n=A/a):y<.01?(r=.707106781,a=.707106781,n=0):(n=Math.sqrt(y),r=S/n,a=A/n),this.set(r,a,n,i),this}let m=Math.sqrt((g-u)*(g-u)+(c-p)*(c-p)+(h-l)*(h-l));return Math.abs(m)<.001&&(m=1),this.x=(g-u)/m,this.y=(c-p)/m,this.z=(h-l)/m,this.w=Math.acos((o+d+x-1)/2),this}setFromMatrixPosition(t){let i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this.w=Mt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this.w=Mt(this.w,t,i),this}clampLength(t,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},An.prototype.isVector4=!0,An),e0=class extends Ha{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let r={width:e,height:t,depth:i.depth},a=new Hi(r),n=i.count;for(let s=0;s<n;s++)this.textures[s]=a.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let r=Object.assign({},e.textures[t].image);this.textures[t].source=new dh(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ti=class extends e0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Zo=class extends Hi{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var t0=class extends Hi{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=gi,this.minFilter=gi,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Oa,et=(Oa=class{constructor(t,i,r,a,n,s,o,l,c,h,d,u,p,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,a,n,s,o,l,c,h,d,u,p,g,x,m)}set(t,i,r,a,n,s,o,l,c,h,d,u,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=i,f[8]=r,f[12]=a,f[1]=n,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oa().fromArray(this.elements)}copy(t){let i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){let i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){let i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let i=this.elements,r=t.elements,a=1/Qa.setFromMatrixColumn(t,0).length(),n=1/Qa.setFromMatrixColumn(t,1).length(),s=1/Qa.setFromMatrixColumn(t,2).length();return i[0]=r[0]*a,i[1]=r[1]*a,i[2]=r[2]*a,i[3]=0,i[4]=r[4]*n,i[5]=r[5]*n,i[6]=r[6]*n,i[7]=0,i[8]=r[8]*s,i[9]=r[9]*s,i[10]=r[10]*s,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){let i=this.elements,r=t.x,a=t.y,n=t.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(a),c=Math.sin(a),h=Math.cos(n),d=Math.sin(n);if(t.order==="XYZ"){let u=s*h,p=s*d,g=o*h,x=o*d;i[0]=l*h,i[4]=-l*d,i[8]=c,i[1]=p+g*c,i[5]=u-x*c,i[9]=-o*l,i[2]=x-u*c,i[6]=g+p*c,i[10]=s*l}else if(t.order==="YXZ"){let u=l*h,p=l*d,g=c*h,x=c*d;i[0]=u+x*o,i[4]=g*o-p,i[8]=s*c,i[1]=s*d,i[5]=s*h,i[9]=-o,i[2]=p*o-g,i[6]=x+u*o,i[10]=s*l}else if(t.order==="ZXY"){let u=l*h,p=l*d,g=c*h,x=c*d;i[0]=u-x*o,i[4]=-s*d,i[8]=g+p*o,i[1]=p+g*o,i[5]=s*h,i[9]=x-u*o,i[2]=-s*c,i[6]=o,i[10]=s*l}else if(t.order==="ZYX"){let u=s*h,p=s*d,g=o*h,x=o*d;i[0]=l*h,i[4]=g*c-p,i[8]=u*c+x,i[1]=l*d,i[5]=x*c+u,i[9]=p*c-g,i[2]=-c,i[6]=o*l,i[10]=s*l}else if(t.order==="YZX"){let u=s*l,p=s*c,g=o*l,x=o*c;i[0]=l*h,i[4]=x-u*d,i[8]=g*d+p,i[1]=d,i[5]=s*h,i[9]=-o*h,i[2]=-c*h,i[6]=p*d+g,i[10]=u-x*d}else if(t.order==="XZY"){let u=s*l,p=s*c,g=o*l,x=o*c;i[0]=l*h,i[4]=-d,i[8]=c*h,i[1]=u*d+x,i[5]=s*h,i[9]=p*d-g,i[2]=g*d-p,i[6]=o*h,i[10]=x*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(i0,t,r0)}lookAt(t,i,r){let a=this.elements;return Qi.subVectors(t,i),Qi.lengthSq()===0&&(Qi.z=1),Qi.normalize(),fa.crossVectors(r,Qi),fa.lengthSq()===0&&(Math.abs(r.z)===1?Qi.x+=1e-4:Qi.z+=1e-4,Qi.normalize(),fa.crossVectors(r,Qi)),fa.normalize(),js.crossVectors(Qi,fa),a[0]=fa.x,a[4]=js.x,a[8]=Qi.x,a[1]=fa.y,a[5]=js.y,a[9]=Qi.y,a[2]=fa.z,a[6]=js.z,a[10]=Qi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){let r=t.elements,a=i.elements,n=this.elements,s=r[0],o=r[4],l=r[8],c=r[12],h=r[1],d=r[5],u=r[9],p=r[13],g=r[2],x=r[6],m=r[10],f=r[14],M=r[3],y=r[7],v=r[11],S=r[15],A=a[0],w=a[4],_=a[8],b=a[12],L=a[1],P=a[5],B=a[9],j=a[13],U=a[2],I=a[6],k=a[10],F=a[14],ee=a[3],X=a[7],K=a[11],$=a[15];return n[0]=s*A+o*L+l*U+c*ee,n[4]=s*w+o*P+l*I+c*X,n[8]=s*_+o*B+l*k+c*K,n[12]=s*b+o*j+l*F+c*$,n[1]=h*A+d*L+u*U+p*ee,n[5]=h*w+d*P+u*I+p*X,n[9]=h*_+d*B+u*k+p*K,n[13]=h*b+d*j+u*F+p*$,n[2]=g*A+x*L+m*U+f*ee,n[6]=g*w+x*P+m*I+f*X,n[10]=g*_+x*B+m*k+f*K,n[14]=g*b+x*j+m*F+f*$,n[3]=M*A+y*L+v*U+S*ee,n[7]=M*w+y*P+v*I+S*X,n[11]=M*_+y*B+v*k+S*K,n[15]=M*b+y*j+v*F+S*$,this}multiplyScalar(t){let i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[12],s=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15],M=l*p-c*u,y=o*p-c*d,v=o*u-l*d,S=s*p-c*h,A=s*u-l*h,w=s*d-o*h;return i*(x*M-m*y+f*v)-r*(g*M-m*S+f*A)+a*(g*y-x*S+f*w)-n*(g*v-x*A+m*w)}determinantAffine(){let t=this.elements,i=t[0],r=t[4],a=t[8],n=t[1],s=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return i*(s*h-o*c)-r*(n*h-o*l)+a*(n*c-s*l)}transpose(){let t=this.elements,i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){let a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=i,a[14]=r),this}invert(){let t=this.elements,i=t[0],r=t[1],a=t[2],n=t[3],s=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],M=i*o-r*s,y=i*l-a*s,v=i*c-n*s,S=r*l-a*o,A=r*c-n*o,w=a*c-n*l,_=h*x-d*g,b=h*m-u*g,L=h*f-p*g,P=d*m-u*x,B=d*f-p*x,j=u*f-p*m,U=M*j-y*B+v*P+S*L-A*b+w*_;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/U;return t[0]=(o*j-l*B+c*P)*I,t[1]=(a*B-r*j-n*P)*I,t[2]=(x*w-m*A+f*S)*I,t[3]=(u*A-d*w-p*S)*I,t[4]=(l*L-s*j-c*b)*I,t[5]=(i*j-a*L+n*b)*I,t[6]=(m*v-g*w-f*y)*I,t[7]=(h*w-u*v+p*y)*I,t[8]=(s*B-o*L+c*_)*I,t[9]=(r*L-i*B-n*_)*I,t[10]=(g*A-x*v+f*M)*I,t[11]=(d*v-h*A-p*M)*I,t[12]=(o*b-s*P-l*_)*I,t[13]=(i*P-r*b+a*_)*I,t[14]=(x*y-g*S-m*M)*I,t[15]=(h*S-d*y+u*M)*I,this}scale(t){let i=this.elements,r=t.x,a=t.y,n=t.z;return i[0]*=r,i[4]*=a,i[8]*=n,i[1]*=r,i[5]*=a,i[9]*=n,i[2]*=r,i[6]*=a,i[10]*=n,i[3]*=r,i[7]*=a,i[11]*=n,this}getMaxScaleOnAxis(){let t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,a))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){let i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){let i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){let r=Math.cos(i),a=Math.sin(i),n=1-r,s=t.x,o=t.y,l=t.z,c=n*s,h=n*o;return this.set(c*s+r,c*o-a*l,c*l+a*o,0,c*o+a*l,h*o+r,h*l-a*s,0,c*l-a*o,h*l+a*s,n*l*l+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,a,n,s){return this.set(1,r,n,0,t,1,s,0,i,a,1,0,0,0,0,1),this}compose(t,i,r){let a=this.elements,n=i._x,s=i._y,o=i._z,l=i._w,c=n+n,h=s+s,d=o+o,u=n*c,p=n*h,g=n*d,x=s*h,m=s*d,f=o*d,M=l*c,y=l*h,v=l*d,S=r.x,A=r.y,w=r.z;return a[0]=(1-(x+f))*S,a[1]=(p+v)*S,a[2]=(g-y)*S,a[3]=0,a[4]=(p-v)*A,a[5]=(1-(u+f))*A,a[6]=(m+M)*A,a[7]=0,a[8]=(g+y)*w,a[9]=(m-M)*w,a[10]=(1-(u+x))*w,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,i,r){let a=this.elements;t.x=a[12],t.y=a[13],t.z=a[14];let n=this.determinantAffine();if(n===0)return r.set(1,1,1),i.identity(),this;let s=Qa.set(a[0],a[1],a[2]).length(),o=Qa.set(a[4],a[5],a[6]).length(),l=Qa.set(a[8],a[9],a[10]).length();n<0&&(s=-s),xr.copy(this);let c=1/s,h=1/o,d=1/l;return xr.elements[0]*=c,xr.elements[1]*=c,xr.elements[2]*=c,xr.elements[4]*=h,xr.elements[5]*=h,xr.elements[6]*=h,xr.elements[8]*=d,xr.elements[9]*=d,xr.elements[10]*=d,i.setFromRotationMatrix(xr),r.x=s,r.y=o,r.z=l,this}makePerspective(t,i,r,a,n,s,o=Tr,l=!1){let c=this.elements,h=2*n/(i-t),d=2*n/(r-a),u=(i+t)/(i-t),p=(r+a)/(r-a),g,x;if(l)g=n/(s-n),x=s*n/(s-n);else if(o===Tr)g=-(s+n)/(s-n),x=-2*s*n/(s-n);else if(o===Es)g=-s/(s-n),x=-s*n/(s-n);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,i,r,a,n,s,o=Tr,l=!1){let c=this.elements,h=2/(i-t),d=2/(r-a),u=-(i+t)/(i-t),p=-(r+a)/(r-a),g,x;if(l)g=1/(s-n),x=s/(s-n);else if(o===Tr)g=-2/(s-n),x=-(s+n)/(s-n);else if(o===Es)g=-1/(s-n),x=-n/(s-n);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let i=this.elements,r=t.elements;for(let a=0;a<16;a++)if(i[a]!==r[a])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){let r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}},Oa.prototype.isMatrix4=!0,Oa),Qa=new R,xr=new et,i0=new R(0,0,0),r0=new R(1,1,1),fa=new R,js=new R,Qi=new R,hd=new et,ud=new hi,zr=class Up{constructor(t=0,i=0,r=0,a=Up.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,a=this._order){return this._x=t,this._y=i,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let a=t.elements,n=a[0],s=a[4],o=a[8],l=a[1],c=a[5],h=a[9],d=a[2],u=a[6],p=a[10];switch(i){case"XYZ":this._y=Math.asin(Mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,n)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,n),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,n));break;case"ZYX":this._y=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,n)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(Mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,n)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,n)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return hd.makeRotationFromQuaternion(t),this.setFromRotationMatrix(hd,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ud.setFromEuler(this),this.setFromQuaternion(ud,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zr.DEFAULT_ORDER="XYZ";var Op=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},a0=0,dd=new R,en=new hi,Jr=new et,qs=new R,is=new R,n0=new R,s0=new hi,pd=new R(1,0,0),fd=new R(0,1,0),md=new R(0,0,1),gd={type:"added"},o0={type:"removed"},tn={type:"childadded",child:null},Ol={type:"childremoved",child:null},ci=class Io extends Ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:a0++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Io.DEFAULT_UP.clone();let t=new R,i=new zr,r=new hi,a=new R(1,1,1);function n(){r.setFromEuler(i,!1)}function s(){i.setFromQuaternion(r,void 0,!1)}i._onChange(n),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new et},normalMatrix:{value:new xt}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=Io.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Io.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return en.setFromAxisAngle(t,i),this.quaternion.multiply(en),this}rotateOnWorldAxis(t,i){return en.setFromAxisAngle(t,i),this.quaternion.premultiply(en),this}rotateX(t){return this.rotateOnAxis(pd,t)}rotateY(t){return this.rotateOnAxis(fd,t)}rotateZ(t){return this.rotateOnAxis(md,t)}translateOnAxis(t,i){return dd.copy(t).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(pd,t)}translateY(t){return this.translateOnAxis(fd,t)}translateZ(t){return this.translateOnAxis(md,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Jr.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?qs.copy(t):qs.set(t,i,r);let a=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jr.lookAt(is,qs,this.up):Jr.lookAt(qs,is,this.up),this.quaternion.setFromRotationMatrix(Jr),a&&(Jr.extractRotation(a.matrixWorld),en.setFromRotationMatrix(Jr),this.quaternion.premultiply(en.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(pt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(gd),tn.child=t,this.dispatchEvent(tn),tn.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(o0),Ol.child=t,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Jr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Jr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Jr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(gd),tn.child=t,this.dispatchEvent(tn),tn.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,a=this.children.length;r<a;r++){let n=this.children[r].getObjectByProperty(t,i);if(n!==void 0)return n}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let a=this.children;for(let n=0,s=a.length;n<s;n++)a[n].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,n0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,s0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let i=t.x,r=t.y,a=t.z,n=this.matrix.elements;n[12]+=i-n[0]*i-n[4]*r-n[8]*a,n[13]+=r-n[1]*i-n[5]*r-n[9]*a,n[14]+=a-n[2]*i-n[6]*r-n[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){let a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateWorldMatrix(!1,!0,r)}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function n(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=n(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];n(t.shapes,d)}else n(t.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(n(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(n(t.materials,this.material[l]));a.material=o}else a.material=n(t.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];a.animations.push(n(t.animations,l))}}if(i){let o=s(t.geometries),l=s(t.materials),c=s(t.textures),h=s(t.images),d=s(t.shapes),u=s(t.skeletons),p=s(t.animations),g=s(t.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=a,r;function s(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let a=t.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ci.DEFAULT_UP=new R(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vi=class extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}},l0={type:"move"},Fl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,n=null,s=this._targetRay,o=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){n=!0;for(let g of e.hand.values()){let x=t.getJointPose(g,i),m=this._getHandJoint(l,g);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}let c=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=c.position.distanceTo(h.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else o!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:e,target:this})));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(l0)))}return s!==null&&(s.visible=r!==null),o!==null&&(o.visible=a!==null),l!==null&&(l.visible=n!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new vi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Fp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ma={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function Bl(e,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?e+(t-e)*6*i:i<1/2?t:i<2/3?e+(t-e)*6*(2/3-i):e}var Te=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=i,wt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=wt.workingColorSpace){if(e=uh(e,1),t=Mt(t,0,1),i=Mt(i,0,1),t===0)this.r=this.g=this.b=i;else{let a=i<=.5?i*(1+t):i+t-i*t,n=2*i-a;this.r=Bl(n,a,e+1/3),this.g=Bl(n,a,e),this.b=Bl(n,a,e-1/3)}return wt.colorSpaceToWorking(this,r),this}setStyle(e,t=Yt){function i(a){a!==void 0&&parseFloat(a)<1&&Qe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a,n=r[1],s=r[2];switch(n){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:Qe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let a=r[1],n=a.length;if(n===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(n===6)return this.setHex(parseInt(a,16),t);Qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){let i=Fp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}copyLinearToSRGB(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return wt.workingToColorSpace(zi.copy(this),e),Math.round(Mt(zi.r*255,0,255))*65536+Math.round(Mt(zi.g*255,0,255))*256+Math.round(Mt(zi.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(zi.copy(this),t);let i=zi.r,r=zi.g,a=zi.b,n=Math.max(i,r,a),s=Math.min(i,r,a),o,l,c=(s+n)/2;if(s===n)o=0,l=0;else{let h=n-s;switch(l=c<=.5?h/(n+s):h/(2-n-s),n){case i:o=(r-a)/h+(r<a?6:0);break;case r:o=(a-i)/h+2;break;case a:o=(i-r)/h+4;break}o/=6}return e.h=o,e.s=l,e.l=c,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(zi.copy(this),t),e.r=zi.r,e.g=zi.g,e.b=zi.b,e}getStyle(e=Yt){wt.workingToColorSpace(zi.copy(this),e);let t=zi.r,i=zi.g,r=zi.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ma),this.setHSL(ma.h+e,ma.s+t,ma.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ma),e.getHSL(Ys);let i=vs(ma.h,Ys.h,t),r=vs(ma.s,Ys.s,t),a=vs(ma.l,Ys.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zi=new Te;Te.NAMES=Fp;var Bp=class zp{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new Te(t),this.density=i}clone(){return new zp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var ph=class extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zr,this.environmentIntensity=1,this.environmentRotation=new zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yr=new R,Qr=new R,zl=new R,ea=new R,rn=new R,an=new R,vd=new R,Hl=new R,kl=new R,Gl=new R,Vl=new Vt,Wl=new Vt,Xl=new Vt,mn=class gn{constructor(t=new R,i=new R,r=new R){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,a){a.subVectors(r,i),yr.subVectors(t,i),a.cross(yr);let n=a.lengthSq();return n>0?a.multiplyScalar(1/Math.sqrt(n)):a.set(0,0,0)}static getBarycoord(t,i,r,a,n){yr.subVectors(a,i),Qr.subVectors(r,i),zl.subVectors(t,i);let s=yr.dot(yr),o=yr.dot(Qr),l=yr.dot(zl),c=Qr.dot(Qr),h=Qr.dot(zl),d=s*c-o*o;if(d===0)return n.set(0,0,0),null;let u=1/d,p=(c*l-o*h)*u,g=(s*h-o*l)*u;return n.set(1-p-g,g,p)}static containsPoint(t,i,r,a){return this.getBarycoord(t,i,r,a,ea)===null?!1:ea.x>=0&&ea.y>=0&&ea.x+ea.y<=1}static getInterpolation(t,i,r,a,n,s,o,l){return this.getBarycoord(t,i,r,a,ea)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(n,ea.x),l.addScaledVector(s,ea.y),l.addScaledVector(o,ea.z),l)}static getInterpolatedAttribute(t,i,r,a,n,s){return Vl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Vl.fromBufferAttribute(t,i),Wl.fromBufferAttribute(t,r),Xl.fromBufferAttribute(t,a),s.setScalar(0),s.addScaledVector(Vl,n.x),s.addScaledVector(Wl,n.y),s.addScaledVector(Xl,n.z),s}static isFrontFacing(t,i,r,a){return yr.subVectors(r,i),Qr.subVectors(t,i),yr.cross(Qr).dot(a)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,a){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,i,r,a){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yr.subVectors(this.c,this.b),Qr.subVectors(this.a,this.b),yr.cross(Qr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gn.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,a,n){return gn.getInterpolation(t,this.a,this.b,this.c,i,r,a,n)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){let r=this.a,a=this.b,n=this.c,s,o;rn.subVectors(a,r),an.subVectors(n,r),Hl.subVectors(t,r);let l=rn.dot(Hl),c=an.dot(Hl);if(l<=0&&c<=0)return i.copy(r);kl.subVectors(t,a);let h=rn.dot(kl),d=an.dot(kl);if(h>=0&&d<=h)return i.copy(a);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),i.copy(r).addScaledVector(rn,s);Gl.subVectors(t,n);let p=rn.dot(Gl),g=an.dot(Gl);if(g>=0&&p<=g)return i.copy(n);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),i.copy(r).addScaledVector(an,o);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return vd.subVectors(n,a),o=(d-h)/(d-h+(p-g)),i.copy(a).addScaledVector(vd,o);let f=1/(m+x+u);return s=x*f,o=u*f,i.copy(r).addScaledVector(rn,s).addScaledVector(an,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Zi=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Mr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Mr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Mr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let n=0,s=a.count;n<s;n++)e.isMesh===!0?e.getVertexPosition(n,Mr):Mr.fromBufferAttribute(a,n),Mr.applyMatrix4(e.matrixWorld),this.expandByPoint(Mr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zs.copy(i.boundingBox)),Zs.applyMatrix4(e.matrixWorld),this.union(Zs)}let r=e.children;for(let a=0,n=r.length;a<n;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Mr),Mr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),Ks.subVectors(this.max,rs),nn.subVectors(e.a,rs),sn.subVectors(e.b,rs),on.subVectors(e.c,rs),ga.subVectors(sn,nn),va.subVectors(on,sn),Ra.subVectors(nn,on);let t=[0,-ga.z,ga.y,0,-va.z,va.y,0,-Ra.z,Ra.y,ga.z,0,-ga.x,va.z,0,-va.x,Ra.z,0,-Ra.x,-ga.y,ga.x,0,-va.y,va.x,0,-Ra.y,Ra.x,0];return!jl(t,nn,sn,on,Ks)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,nn,sn,on,Ks))?!1:($s.crossVectors(ga,va),t=[$s.x,$s.y,$s.z],jl(t,nn,sn,on,Ks))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ta[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ta[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ta[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ta[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ta[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ta[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ta[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ta[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ta),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ta=[new R,new R,new R,new R,new R,new R,new R,new R],Mr=new R,Zs=new Zi,nn=new R,sn=new R,on=new R,ga=new R,va=new R,Ra=new R,rs=new R,Ks=new R,$s=new R,Ca=new R;function jl(e,t,i,r,a){for(let n=0,s=e.length-3;n<=s;n+=3){Ca.fromArray(e,n);let o=a.x*Math.abs(Ca.x)+a.y*Math.abs(Ca.y)+a.z*Math.abs(Ca.z),l=t.dot(Ca),c=i.dot(Ca),h=r.dot(Ca);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var aa=c0();function c0(){let e=new ArrayBuffer(4),t=new Float32Array(e),i=new Uint32Array(e),r=new Uint32Array(512),a=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(r[l]=0,r[l|256]=32768,a[l]=24,a[l|256]=24):c<-14?(r[l]=1024>>-c-14,r[l|256]=1024>>-c-14|32768,a[l]=-c-1,a[l|256]=-c-1):c<=15?(r[l]=c+15<<10,r[l|256]=c+15<<10|32768,a[l]=13,a[l|256]=13):c<128?(r[l]=31744,r[l|256]=64512,a[l]=24,a[l|256]=24):(r[l]=31744,r[l|256]=64512,a[l]=13,a[l|256]=13)}let n=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,n[l]=c|h}for(let l=1024;l<2048;++l)n[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)s[l]=l<<23;s[31]=1199570944,s[32]=2147483648;for(let l=33;l<63;++l)s[l]=2147483648+(l-32<<23);s[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:i,baseTable:r,shiftTable:a,mantissaTable:n,exponentTable:s,offsetTable:o}}function h0(e){Math.abs(e)>65504&&Qe("DataUtils.toHalfFloat(): Value out of range."),e=Mt(e,-65504,65504),aa.floatView[0]=e;let t=aa.uint32View[0],i=t>>23&511;return aa.baseTable[i]+((t&8388607)>>aa.shiftTable[i])}function u0(e){let t=e>>10;return aa.uint32View[0]=aa.mantissaTable[aa.offsetTable[t]+(e&1023)]+aa.exponentTable[t],aa.floatView[0]}var Hp=class{static toHalfFloat(e){return h0(e)}static fromHalfFloat(e){return u0(e)}},mi=new R,Js=new de,d0=0,Bt=class extends Ha{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:d0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lp,this.updateRanges=[],this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Js.fromBufferAttribute(this,t),Js.applyMatrix3(e),this.setXY(t,Js.x,Js.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)mi.fromBufferAttribute(this,t),mi.applyMatrix3(e),this.setXYZ(t,mi.x,mi.y,mi.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)mi.fromBufferAttribute(this,t),mi.applyMatrix4(e),this.setXYZ(t,mi.x,mi.y,mi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)mi.fromBufferAttribute(this,t),mi.applyNormalMatrix(e),this.setXYZ(t,mi.x,mi.y,mi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)mi.fromBufferAttribute(this,t),mi.transformDirection(e),this.setXYZ(t,mi.x,mi.y,mi.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=br(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=qt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=br(t,this.array)),t}setX(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=br(t,this.array)),t}setY(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=br(t,this.array)),t}setW(e,t){return this.normalized&&(t=qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=qt(t,this.array),i=qt(i,this.array),r=qt(r,this.array),a=qt(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var kp=class extends Bt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Gp=class extends Bt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var nt=class extends Bt{constructor(e,t,i){super(new Float32Array(e),t,i)}},p0=new Zi,as=new R,ql=new R,ur=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):p0.setFromPoints(e).getCenter(i);let r=0;for(let a=0,n=e.length;a<n;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;as.subVectors(e,this.center);let t=as.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(as,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(as.copy(e.center).add(ql)),this.expandByPoint(as.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},f0=0,or=new et,Yl=new ci,ln=new R,er=new Zi,ns=new Zi,Ii=new R,At=class Vp extends Ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cg(t)?Gp:kp)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let n=new xt().getNormalMatrix(t);r.applyNormalMatrix(n),r.needsUpdate=!0}let a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return or.makeRotationFromQuaternion(t),this.applyMatrix4(or),this}rotateX(t){return or.makeRotationX(t),this.applyMatrix4(or),this}rotateY(t){return or.makeRotationY(t),this.applyMatrix4(or),this}rotateZ(t){return or.makeRotationZ(t),this.applyMatrix4(or),this}translate(t,i,r){return or.makeTranslation(t,i,r),this.applyMatrix4(or),this}scale(t,i,r){return or.makeScale(t,i,r),this.applyMatrix4(or),this}lookAt(t){return Yl.lookAt(t),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ln).negate(),this.translate(ln.x,ln.y,ln.z),this}setFromPoints(t){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let a=0,n=t.length;a<n;a++){let s=t[a];r.push(s.x,s.y,s.z||0)}this.setAttribute("position",new nt(r,3))}else{let r=Math.min(t.length,i.count);for(let a=0;a<r;a++){let n=t[a];i.setXYZ(a,n.x,n.y,n.z||0)}t.length>i.count&&Qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zi);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,a=i.length;r<a;r++){let n=i[r];er.setFromBufferAttribute(n),this.morphTargetsRelative?(Ii.addVectors(this.boundingBox.min,er.min),this.boundingBox.expandByPoint(Ii),Ii.addVectors(this.boundingBox.max,er.max),this.boundingBox.expandByPoint(Ii)):(this.boundingBox.expandByPoint(er.min),this.boundingBox.expandByPoint(er.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ur);let t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(t){let r=this.boundingSphere.center;if(er.setFromBufferAttribute(t),i)for(let n=0,s=i.length;n<s;n++){let o=i[n];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Ii.addVectors(er.min,ns.min),er.expandByPoint(Ii),Ii.addVectors(er.max,ns.max),er.expandByPoint(Ii)):(er.expandByPoint(ns.min),er.expandByPoint(ns.max))}er.getCenter(r);let a=0;for(let n=0,s=t.count;n<s;n++)Ii.fromBufferAttribute(t,n),a=Math.max(a,r.distanceToSquared(Ii));if(i)for(let n=0,s=i.length;n<s;n++){let o=i[n],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ii.fromBufferAttribute(o,c),l&&(ln.fromBufferAttribute(t,c),Ii.add(ln)),a=Math.max(a,r.distanceToSquared(Ii))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,a=i.normal,n=i.uv,s=this.getAttribute("tangent");(s===void 0||s.count!==r.count)&&(s=new Bt(new Float32Array(4*r.count),4),this.setAttribute("tangent",s));let o=[],l=[];for(let _=0;_<r.count;_++)o[_]=new R,l[_]=new R;let c=new R,h=new R,d=new R,u=new de,p=new de,g=new de,x=new R,m=new R;function f(_,b,L){c.fromBufferAttribute(r,_),h.fromBufferAttribute(r,b),d.fromBufferAttribute(r,L),u.fromBufferAttribute(n,_),p.fromBufferAttribute(n,b),g.fromBufferAttribute(n,L),h.sub(c),d.sub(c),p.sub(u),g.sub(u);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[_].add(x),o[b].add(x),o[L].add(x),l[_].add(m),l[b].add(m),l[L].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let _=0,b=M.length;_<b;++_){let L=M[_],P=L.start,B=L.count;for(let j=P,U=P+B;j<U;j+=3)f(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let y=new R,v=new R,S=new R,A=new R;function w(_){S.fromBufferAttribute(a,_),A.copy(S);let b=o[_];y.copy(b),y.sub(S.multiplyScalar(S.dot(b))).normalize(),v.crossVectors(A,b);let L=v.dot(l[_])<0?-1:1;s.setXYZW(_,y.x,y.y,y.z,L)}for(let _=0,b=M.length;_<b;++_){let L=M[_],P=L.start,B=L.count;for(let j=P,U=P+B;j<U;j+=3)w(t.getX(j+0)),w(t.getX(j+1)),w(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Bt(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,p=r.count;u<p;u++)r.setXYZ(u,0,0,0);let a=new R,n=new R,s=new R,o=new R,l=new R,c=new R,h=new R,d=new R;if(t)for(let u=0,p=t.count;u<p;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);a.fromBufferAttribute(i,g),n.fromBufferAttribute(i,x),s.fromBufferAttribute(i,m),h.subVectors(s,n),d.subVectors(a,n),h.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,x),c.fromBufferAttribute(r,m),o.add(h),l.add(h),c.add(h),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(x,l.x,l.y,l.z),r.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,p=i.count;u<p;u+=3)a.fromBufferAttribute(i,u+0),n.fromBufferAttribute(i,u+1),s.fromBufferAttribute(i,u+2),h.subVectors(s,n),d.subVectors(a,n),h.cross(d),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Ii.fromBufferAttribute(t,i),Ii.normalize(),t.setXYZ(i,Ii.x,Ii.y,Ii.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)u[g++]=c[p++]}return new Bt(u,h,d)}if(this.index===null)return Qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Vp,r=this.index.array,a=this.attributes;for(let o in a){let l=a[o],c=t(l,r);i.setAttribute(o,c)}let n=this.morphAttributes;for(let o in n){let l=[],c=n[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],p=t(u,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let s=this.groups;for(let o=0,l=s.length;o<l;o++){let c=s[o];i.addGroup(c.start,c.count,c.materialIndex)}return i}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let c=r[l];t.data.attributes[l]=c.toJSON(t.data)}let a={},n=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(a[l]=h,n=!0)}n&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);let s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=t.name;let r=t.index;r!==null&&this.setIndex(r.clone());let a=t.attributes;for(let c in a){let h=a[c];this.setAttribute(c,h.clone(i))}let n=t.morphAttributes;for(let c in n){let h=[],d=n[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(i));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let s=t.groups;for(let c=0,h=s.length;c<h;c++){let d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Lp,this.updateRanges=[],this.version=0,this.uuid=hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},Vi=new R,mh=class Wp{constructor(t,i,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=i,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let i=0,r=this.data.count;i<r;i++)Vi.fromBufferAttribute(this,i),Vi.applyMatrix4(t),this.setXYZ(i,Vi.x,Vi.y,Vi.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)Vi.fromBufferAttribute(this,i),Vi.applyNormalMatrix(t),this.setXYZ(i,Vi.x,Vi.y,Vi.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)Vi.fromBufferAttribute(this,i),Vi.transformDirection(t),this.setXYZ(i,Vi.x,Vi.y,Vi.z);return this}getComponent(t,i){let r=this.array[t*this.data.stride+this.offset+i];return this.normalized&&(r=br(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=qt(r,this.array)),this.data.array[t*this.data.stride+this.offset+i]=r,this}setX(t,i){return this.normalized&&(i=qt(i,this.array)),this.data.array[t*this.data.stride+this.offset]=i,this}setY(t,i){return this.normalized&&(i=qt(i,this.array)),this.data.array[t*this.data.stride+this.offset+1]=i,this}setZ(t,i){return this.normalized&&(i=qt(i,this.array)),this.data.array[t*this.data.stride+this.offset+2]=i,this}setW(t,i){return this.normalized&&(i=qt(i,this.array)),this.data.array[t*this.data.stride+this.offset+3]=i,this}getX(t){let i=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(i=br(i,this.array)),i}getY(t){let i=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(i=br(i,this.array)),i}getZ(t){let i=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(i=br(i,this.array)),i}getW(t){let i=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(i=br(i,this.array)),i}setXY(t,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(i=qt(i,this.array),r=qt(r,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this}setXYZ(t,i,r,a){return t=t*this.data.stride+this.offset,this.normalized&&(i=qt(i,this.array),r=qt(r,this.array),a=qt(a,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this}setXYZW(t,i,r,a,n){return t=t*this.data.stride+this.offset,this.normalized&&(i=qt(i,this.array),r=qt(r,this.array),a=qt(a,this.array),n=qt(n,this.array)),this.data.array[t+0]=i,this.data.array[t+1]=r,this.data.array[t+2]=a,this.data.array[t+3]=n,this}clone(t){if(t===void 0){Oo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return new Bt(new this.array.constructor(i),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wp(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Oo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let i=[];for(let r=0;r<this.count;r++){let a=r*this.data.stride+this.offset;for(let n=0;n<this.itemSize;n++)i.push(this.data.array[a+n])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:i,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Zl=new R,m0=new R,g0=new xt,xa=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=Zl.subVectors(i,t).cross(m0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let r=e.delta(Zl),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let n=-(e.start.dot(this.normal)+this.constant)/a;return i===!0&&(n<0||n>1)?null:t.copy(e.start).addScaledVector(r,n)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||g0.getNormalMatrix(e),r=this.coplanarPoint(Zl).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},v0=0,wr=class extends Ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=ms,this.side=oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xp,this.blendDst=yp,this.blendEquation=fn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ua,this.stencilZFail=Ua,this.stencilZPass=Ua,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Qe(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){Qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(a=>a.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){let n=[];for(let s in a){let o=a[s];delete o.metadata,n.push(o)}return n}if(t){let a=r(e.textures),n=r(e.images);a.length>0&&(i.textures=a),n.length>0&&(i.images=n)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Te().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new xa().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new de().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Nb=new R,Ub=new R,Ob=new R,Fb=new de,Bb=new de,zb=new et,Hb=new R,kb=new R,Gb=new R,Vb=new de,Wb=new de,Xb=new de;var jb=new R,qb=new R;var ia=new R,Kl=new R,Qs=new R,eo=new R,Ko=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ia)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ia.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ia.copy(this.origin).addScaledVector(this.direction,t),ia.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Kl.copy(e).add(t).multiplyScalar(.5),Qs.copy(t).sub(e).normalize(),eo.copy(this.origin).sub(Kl);let a=e.distanceTo(t)*.5,n=-this.direction.dot(Qs),s=eo.dot(this.direction),o=-eo.dot(Qs),l=eo.lengthSq(),c=Math.abs(1-n*n),h,d,u,p;if(c>0)if(h=n*o-s,d=n*s-o,p=a*c,h>=0)if(d>=-p)if(d<=p){let g=1/c;h*=g,d*=g,u=h*(h+n*d+2*s)+d*(n*h+d+2*o)+l}else d=a,h=Math.max(0,-(n*d+s)),u=-h*h+d*(d+2*o)+l;else d=-a,h=Math.max(0,-(n*d+s)),u=-h*h+d*(d+2*o)+l;else d<=-p?(h=Math.max(0,-(-n*a+s)),d=h>0?-a:Math.min(Math.max(-a,-o),a),u=-h*h+d*(d+2*o)+l):d<=p?(h=0,d=Math.min(Math.max(-a,-o),a),u=d*(d+2*o)+l):(h=Math.max(0,-(n*a+s)),d=h>0?a:Math.min(Math.max(-a,-o),a),u=-h*h+d*(d+2*o)+l);else d=n>0?-a:a,h=Math.max(0,-(n*d+s)),u=-h*h+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Kl).addScaledVector(Qs,d),u}intersectSphere(e,t){if(e.radius<0)return null;ia.subVectors(e.center,this.origin);let i=ia.dot(this.direction),r=ia.dot(ia)-i*i,a=e.radius*e.radius;if(r>a)return null;let n=Math.sqrt(a-r),s=i-n,o=i+n;return o<0?null:s<0?this.at(o,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,n,s,o,l=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),c>=0?(a=(e.min.y-d.y)*c,n=(e.max.y-d.y)*c):(a=(e.max.y-d.y)*c,n=(e.min.y-d.y)*c),i>n||a>r||((a>i||isNaN(i))&&(i=a),(n<r||isNaN(r))&&(r=n),h>=0?(s=(e.min.z-d.z)*h,o=(e.max.z-d.z)*h):(s=(e.max.z-d.z)*h,o=(e.min.z-d.z)*h),i>o||s>r)||((s>i||i!==i)&&(i=s),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,ia)!==null}intersectTriangle(e,t,i,r,a){let n=this.origin,s=this.direction,o=s.x,l=s.y,c=s.z,h=e.x-n.x,d=e.y-n.y,u=e.z-n.z,p=t.x-n.x,g=t.y-n.y,x=t.z-n.z,m=i.x-n.x,f=i.y-n.y,M=i.z-n.z,y=Math.abs(o),v=Math.abs(l),S=Math.abs(c),A,w,_,b,L,P,B,j,U,I,k,F;if(y>=v&&y>=S?(_=o,P=h,U=p,F=m,o>=0?(A=l,w=c,b=d,L=u,B=g,j=x,I=f,k=M):(A=c,w=l,b=u,L=d,B=x,j=g,I=M,k=f)):v>=S?(_=l,P=d,U=g,F=f,l>=0?(A=c,w=o,b=u,L=h,B=x,j=p,I=M,k=m):(A=o,w=c,b=h,L=u,B=p,j=x,I=m,k=M)):(_=c,P=u,U=x,F=M,c>=0?(A=o,w=l,b=h,L=d,B=p,j=g,I=m,k=f):(A=l,w=o,b=d,L=h,B=g,j=p,I=f,k=m)),_===0)return null;let ee=A/_,X=w/_,K=1/_,$=b-ee*P,xe=L-X*P,be=B-ee*U,qe=j-X*U,De=I-ee*F,te=k-X*F,ae=De*qe-te*be,oe=$*te-xe*De,Be=be*xe-qe*$;if(r){if(ae<0||oe<0||Be<0)return null}else if((ae<0||oe<0||Be<0)&&(ae>0||oe>0||Be>0))return null;let Ye=ae+oe+Be;if(Ye===0)return null;let ce=K*(ae*P+oe*U+Be*F);return(Ye>0?ce<0:ce>0)?null:this.at(ce/Ye,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},xi=class extends wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.combine=Mp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},_d=new et,Ia=new Ko,to=new ur,xd=new R,io=new R,ro=new R,ao=new R,$l=new R,no=new R,yd=new R,so=new R,dt=class extends ci{constructor(e=new At,t=new xi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,n=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let s=this.morphTargetInfluences;if(a&&s){no.set(0,0,0);for(let o=0,l=a.length;o<l;o++){let c=s[o],h=a[o];c!==0&&($l.fromBufferAttribute(h,e),n?no.addScaledVector($l,c):no.addScaledVector($l.sub(t),c))}t.add(no)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),to.copy(i.boundingSphere),to.applyMatrix4(a),Ia.copy(e.ray).recast(e.near),!(to.containsPoint(Ia.origin)===!1&&(Ia.intersectSphere(to,xd)===null||Ia.origin.distanceToSquared(xd)>(e.far-e.near)**2))&&(_d.copy(a).invert(),Ia.copy(e.ray).applyMatrix4(_d),!(i.boundingBox!==null&&Ia.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ia)))}_computeIntersections(e,t,i){let r,a=this.geometry,n=this.material,s=a.index,o=a.attributes.position,l=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,d=a.groups,u=a.drawRange;if(s!==null)if(Array.isArray(n))for(let p=0,g=d.length;p<g;p++){let x=d[p],m=n[x.materialIndex],f=Math.max(x.start,u.start),M=Math.min(s.count,Math.min(x.start+x.count,u.start+u.count));for(let y=f,v=M;y<v;y+=3){let S=s.getX(y),A=s.getX(y+1),w=s.getX(y+2);r=oo(this,m,e,i,l,c,h,S,A,w),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(s.count,u.start+u.count);for(let x=p,m=g;x<m;x+=3){let f=s.getX(x),M=s.getX(x+1),y=s.getX(x+2);r=oo(this,n,e,i,l,c,h,f,M,y),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(o!==void 0)if(Array.isArray(n))for(let p=0,g=d.length;p<g;p++){let x=d[p],m=n[x.materialIndex],f=Math.max(x.start,u.start),M=Math.min(o.count,Math.min(x.start+x.count,u.start+u.count));for(let y=f,v=M;y<v;y+=3){let S=y,A=y+1,w=y+2;r=oo(this,m,e,i,l,c,h,S,A,w),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let x=p,m=g;x<m;x+=3){let f=x,M=x+1,y=x+2;r=oo(this,n,e,i,l,c,h,f,M,y),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}};function _0(e,t,i,r,a,n,s,o){let l;if(t.side===Ni?l=r.intersectTriangle(s,n,a,!0,o):l=r.intersectTriangle(a,n,s,t.side===oa,o),l===null)return null;so.copy(o),so.applyMatrix4(e.matrixWorld);let c=i.ray.origin.distanceTo(so);return c<i.near||c>i.far?null:{distance:c,point:so.clone(),object:e}}function oo(e,t,i,r,a,n,s,o,l,c){e.getVertexPosition(o,io),e.getVertexPosition(l,ro),e.getVertexPosition(c,ao);let h=_0(e,t,i,r,io,ro,ao,yd);if(h){let d=new R;mn.getBarycoord(yd,io,ro,ao,d),a&&(h.uv=mn.getInterpolatedAttribute(a,o,l,c,d,new de)),n&&(h.uv1=mn.getInterpolatedAttribute(n,o,l,c,d,new de)),s&&(h.normal=mn.getInterpolatedAttribute(s,o,l,c,d,new R),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new R,materialIndex:0};mn.getNormal(io,ro,ao,u.normal),h.face=u,h.barycoord=d}return h}var ss=new Vt,Md=new Vt,bd=new Vt,x0=new Vt,Sd=new et,lo=new R,Jl=new ur,Td=new et,Ql=new Ko,Xp=class extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qu,this.bindMatrix=new et,this.bindMatrixInverse=new et,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zi),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,lo),this.boundingBox.expandByPoint(lo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ur),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,lo),this.boundingSphere.expandByPoint(lo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jl.copy(this.boundingSphere),Jl.applyMatrix4(r),e.ray.intersectsSphere(Jl)!==!1&&(Td.copy(r).invert(),Ql.copy(e.ray).applyMatrix4(Td),!(this.boundingBox!==null&&Ql.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ql)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Vt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);let a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===xg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Qe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,r=this.geometry;Md.fromBufferAttribute(r.attributes.skinIndex,e),bd.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(ss.copy(t),t.set(0,0,0,0)):(ss.set(...t,1),t.set(0,0,0)),ss.applyMatrix4(this.bindMatrix);for(let a=0;a<4;a++){let n=bd.getComponent(a);if(n!==0){let s=Md.getComponent(a);Sd.multiplyMatrices(i.bones[s].matrixWorld,i.boneInverses[s]),t.addScaledVector(x0.copy(ss).applyMatrix4(Sd),n)}}return t.isVector4&&(t.w=ss.w),t.applyMatrix4(this.bindMatrixInverse)}},gh=class extends ci{constructor(){super(),this.isBone=!0,this.type="Bone"}},Sa=class extends Hi{constructor(e=null,t=1,i=1,r,a,n,s,o,l=gi,c=gi,h,d){super(null,n,s,o,l,c,r,a,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Ed=new et,y0=new et,jp=class qp{constructor(t=[],i=[]){this.uuid=hr(),this.bones=t.slice(0),this.boneInverses=i,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,i=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),i.length===0)this.calculateInverses();else if(t.length!==i.length){Qe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let r=0,a=this.bones.length;r<a;r++)this.boneInverses.push(new et)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,i=this.bones.length;t<i;t++){let r=new et;this.bones[t]&&r.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(r)}}pose(){for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&r.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,i=this.bones.length;t<i;t++){let r=this.bones[t];r&&(r.parent&&r.parent.isBone?(r.matrix.copy(r.parent.matrixWorld).invert(),r.matrix.multiply(r.matrixWorld)):r.matrix.copy(r.matrixWorld),r.matrix.decompose(r.position,r.quaternion,r.scale))}}update(){let t=this.bones,i=this.boneInverses,r=this.boneMatrices,a=this.boneTexture;for(let n=0,s=t.length;n<s;n++){let o=t[n]?t[n].matrixWorld:y0;Ed.multiplyMatrices(o,i[n]),Ed.toArray(r,n*16)}a!==null&&(a.needsUpdate=!0)}clone(){return new qp(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let i=new Float32Array(t*t*4);i.set(this.boneMatrices);let r=new Sa(i,t,t,qi,cr);return r.needsUpdate=!0,this.boneMatrices=i,this.boneTexture=r,this}getBoneByName(t){for(let i=0,r=this.bones.length;i<r;i++){let a=this.bones[i];if(a.name===t)return a}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,i){this.uuid=t.uuid;for(let r=0,a=t.bones.length;r<a;r++){let n=t.bones[r],s=i[n];s===void 0&&(Qe("Skeleton: No bone found with UUID:",n),s=new gh),this.bones.push(s),this.boneInverses.push(new et().fromArray(t.boneInverses[r]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let i=this.bones,r=this.boneInverses;for(let a=0,n=i.length;a<n;a++){let s=i[a];t.bones.push(s.uuid);let o=r[a];t.boneInverses.push(o.toArray())}return t}},tr=class extends Bt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cn=new et,wd=new et,co=[],Ad=new Zi,M0=new et,os=new dt,ls=new ur,ji=class extends dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,M0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,cn),Ad.copy(e.boundingBox).applyMatrix4(cn),this.boundingBox.union(Ad)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ur),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,cn),ls.copy(e.boundingSphere).applyMatrix4(cn),this.boundingSphere.union(ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,a=i.length+1,n=e*a+1;for(let s=0;s<i.length;s++)i[s]=r[n+s]}raycast(e,t){let i=this.matrixWorld,r=this.count;if(os.geometry=this.geometry,os.material=this.material,os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(i),e.ray.intersectsSphere(ls)!==!1))for(let a=0;a<r;a++){this.getMatrixAt(a,cn),wd.multiplyMatrices(i,cn),os.matrixWorld=wd,os.raycast(e,co);for(let n=0,s=co.length;n<s;n++){let o=co[n];o.instanceId=a,o.object=this,t.push(o)}co.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Sa(new Float32Array(r*this.count),r,this.count,Ps,cr));let a=this.morphTexture.source.data.data,n=0;for(let l=0;l<i.length;l++)n+=i[l];let s=this.geometry.morphTargetsRelative?1:1-n,o=r*e;return a[o]=s,a.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Pa=new ur,b0=new de(.5,.5),ho=new R,Nn=class{constructor(e=new xa,t=new xa,i=new xa,r=new xa,a=new xa,n=new xa){this.planes=[e,t,i,r,a,n]}set(e,t,i,r,a,n){let s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(n),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tr,i=!1){let r=this.planes,a=e.elements,n=a[0],s=a[1],o=a[2],l=a[3],c=a[4],h=a[5],d=a[6],u=a[7],p=a[8],g=a[9],x=a[10],m=a[11],f=a[12],M=a[13],y=a[14],v=a[15];if(r[0].setComponents(l-n,u-c,m-p,v-f).normalize(),r[1].setComponents(l+n,u+c,m+p,v+f).normalize(),r[2].setComponents(l+s,u+h,m+g,v+M).normalize(),r[3].setComponents(l-s,u-h,m-g,v-M).normalize(),i)r[4].setComponents(o,d,x,y).normalize(),r[5].setComponents(l-o,u-d,m-x,v-y).normalize();else if(r[4].setComponents(l-o,u-d,m-x,v-y).normalize(),t===Tr)r[5].setComponents(l+o,u+d,m+x,v+y).normalize();else if(t===Es)r[5].setComponents(o,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pa)}intersectsSprite(e){Pa.center.set(0,0,0);let t=b0.distanceTo(e.center);return Pa.radius=.7071067811865476+t,Pa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pa)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ho.x=r.normal.x>0?e.max.x:e.min.x,ho.y=r.normal.y>0?e.max.y:e.min.y,ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Rd=new et,S0=class Yp{constructor(){this.coordinateSystem=Tr,this._frustums=[],this._count=0}setFromArrayCamera(t){let i=t.cameras,r=this._frustums;for(let a=0;a<i.length;a++){let n=i[a];Rd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),r[a]===void 0&&(r[a]=new Nn),r[a].setFromProjectionMatrix(Rd,n.coordinateSystem,n.reversedDepth)}return this._count=i.length,this}intersectsObject(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let i=this._frustums,r=t._frustums;for(let a=0;a<t._count;a++)i[a]===void 0&&(i[a]=new Nn),i[a].copy(r[a]);return this._count=t._count,this}clone(){return new Yp().copy(this)}};var T0=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,r){let a=this.pool,n=this.list;this.index>=a.length&&a.push({start:-1,count:-1,z:-1,index:-1});let s=a[this.index];n.push(s),this.index++,s.start=e,s.count=t,s.z=i,s.index=r}reset(){this.list.length=0,this.index=0}},Yb=new et,Zb=new Te(1,1,1),Kb=new Nn,$b=new S0,Jb=new Zi,Qb=new ur,eS=new R,tS=new R,iS=new R,rS=new T0,aS=new dt;var vh=class extends wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fo=new R,Bo=new R,Cd=new et,cs=new Ko,uo=new ur,ec=new R,Id=new R,$o=class extends ci{constructor(e=new At,t=new vh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)Fo.fromBufferAttribute(t,r-1),Bo.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Fo.distanceTo(Bo);e.setAttribute("lineDistance",new nt(i,1))}else Qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),uo.radius+=a,e.ray.intersectsSphere(uo)===!1)return;Cd.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Cd);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){let d=Math.max(0,n.start),u=Math.min(c.count,n.start+n.count);for(let p=d,g=u-1;p<g;p+=l){let x=c.getX(p),m=c.getX(p+1),f=po(this,e,cs,o,x,m,p);f&&t.push(f)}if(this.isLineLoop){let p=c.getX(u-1),g=c.getX(d),x=po(this,e,cs,o,p,g,u-1);x&&t.push(x)}}else{let d=Math.max(0,n.start),u=Math.min(h.count,n.start+n.count);for(let p=d,g=u-1;p<g;p+=l){let x=po(this,e,cs,o,p,p+1,p);x&&t.push(x)}if(this.isLineLoop){let p=po(this,e,cs,o,u-1,d,u-1);p&&t.push(p)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function po(e,t,i,r,a,n,s){let o=e.geometry.attributes.position;if(Fo.fromBufferAttribute(o,a),Bo.fromBufferAttribute(o,n),i.distanceSqToSegment(Fo,Bo,ec,Id)>r)return;ec.applyMatrix4(e.matrixWorld);let l=t.ray.origin.distanceTo(ec);if(!(l<t.near||l>t.far))return{distance:l,point:Id.clone().applyMatrix4(e.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:e}}var Pd=new R,Ld=new R,Jo=class extends $o{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)Pd.fromBufferAttribute(t,r),Ld.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Pd.distanceTo(Ld);e.setAttribute("lineDistance",new nt(i,1))}else Qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zp=class extends $o{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Ds=class extends wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Dd=new et,Kc=new Ko,fo=new ur,mo=new R,Bn=class extends ci{constructor(e=new At,t=new Ds){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,n=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(r),fo.radius+=a,e.ray.intersectsSphere(fo)===!1)return;Dd.copy(r).invert(),Kc.copy(e.ray).applyMatrix4(Dd);let s=a/((this.scale.x+this.scale.y+this.scale.z)/3),o=s*s,l=i.index,c=i.attributes.position;if(l!==null){let h=Math.max(0,n.start),d=Math.min(l.count,n.start+n.count);for(let u=h,p=d;u<p;u++){let g=l.getX(u);mo.fromBufferAttribute(c,g),Nd(mo,g,o,r,e,t,this)}}else{let h=Math.max(0,n.start),d=Math.min(c.count,n.start+n.count);for(let u=h,p=d;u<p;u++)mo.fromBufferAttribute(c,u),Nd(mo,u,o,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){let n=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[n]=r}}}}};function Nd(e,t,i,r,a,n,s){let o=Kc.distanceSqToPoint(e);if(o<i){let l=new R;Kc.closestPointToPoint(e,l),l.applyMatrix4(r);let c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;n.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}var Kp=class extends Hi{constructor(e=[],t=Fa,i,r,a,n,s,o,l,c){super(e,t,i,r,a,n,s,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hr=class extends Hi{constructor(e,t,i,r,a,n,s,o,l){super(e,t,i,r,a,n,s,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var As=class extends Hi{constructor(e,t,i=Br,r,a,n,s=gi,o=gi,l,c=ca,h=1){if(c!==ca&&c!==Da)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,r,a,n,s,o,c,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},E0=class extends As{constructor(e,t=Br,i=Fa,r,a,n=gi,s=gi,o,l=ca){let c={width:e,height:e,depth:1},h=[c,c,c,c,c,c];super(e,e,t,i,r,a,n,s,o,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$p=class extends Hi{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},kr=class Jp extends At{constructor(t=1,i=1,r=1,a=1,n=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:a,heightSegments:n,depthSegments:s};let o=this;a=Math.floor(a),n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=0,p=0;g("z","y","x",-1,-1,r,i,t,s,n,0),g("z","y","x",1,-1,r,i,-t,s,n,1),g("x","z","y",1,1,t,r,i,a,s,2),g("x","z","y",1,-1,t,r,-i,a,s,3),g("x","y","z",1,-1,t,i,r,a,n,4),g("x","y","z",-1,-1,t,i,-r,a,n,5),this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2));function g(x,m,f,M,y,v,S,A,w,_,b){let L=v/w,P=S/_,B=v/2,j=S/2,U=A/2,I=w+1,k=_+1,F=0,ee=0,X=new R;for(let K=0;K<k;K++){let $=K*P-j;for(let xe=0;xe<I;xe++){let be=xe*L-B;X[x]=be*M,X[m]=$*y,X[f]=U,c.push(X.x,X.y,X.z),X[x]=0,X[m]=0,X[f]=A>0?1:-1,h.push(X.x,X.y,X.z),d.push(xe/w),d.push(1-K/_),F+=1}}for(let K=0;K<_;K++)for(let $=0;$<w;$++){let xe=u+$+I*K,be=u+$+I*(K+1),qe=u+($+1)+I*(K+1),De=u+($+1)+I*K;l.push(xe,be,De),l.push(be,qe,De),ee+=6}o.addGroup(p,ee,b),p+=ee,u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jp(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},w0=class Qp extends At{constructor(t=1,i=1,r=4,a=8,n=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:i,capSegments:r,radialSegments:a,heightSegments:n},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),n=Math.max(1,Math.floor(n));let s=[],o=[],l=[],c=[],h=i/2,d=Math.PI/2*t,u=i,p=2*d+u,g=r*2+n,x=a+1,m=new R,f=new R;for(let M=0;M<=g;M++){let y=0,v=0,S=0,A=0;if(M<=r){let b=M/r,L=b*Math.PI/2;v=-h-t*Math.cos(L),S=t*Math.sin(L),A=-t*Math.cos(L),y=b*d}else if(M<=r+n){let b=(M-r)/n;v=-h+b*i,S=t,A=0,y=d+b*u}else{let b=(M-r-n)/r,L=b*Math.PI/2;v=h+t*Math.sin(L),S=t*Math.cos(L),A=t*Math.sin(L),y=d+u+b*d}let w=Math.max(0,Math.min(1,y/p)),_=0;M===0?_=.5/a:M===g&&(_=-.5/a);for(let b=0;b<=a;b++){let L=b/a,P=L*Math.PI*2,B=Math.sin(P),j=Math.cos(P);f.x=-S*j,f.y=v,f.z=S*B,o.push(f.x,f.y,f.z),m.set(-S*j,A,S*B),m.normalize(),l.push(m.x,m.y,m.z),c.push(L+_,w)}if(M>0){let b=(M-1)*x;for(let L=0;L<a;L++){let P=b+L,B=b+L+1,j=M*x+L,U=M*x+L+1;s.push(P,B,j),s.push(B,U,j)}}}this.setIndex(s),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qp(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},_h=class ef extends At{constructor(t=1,i=32,r=0,a=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:r,thetaLength:a},i=Math.max(3,i);let n=[],s=[],o=[],l=[],c=new R,h=new de;s.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){let p=r+d/i*a;c.x=t*Math.cos(p),c.y=t*Math.sin(p),s.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(s[u]/t+1)/2,h.y=(s[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=i;d++)n.push(d,d+1,0);this.setIndex(n),this.setAttribute("position",new nt(s,3)),this.setAttribute("normal",new nt(o,3)),this.setAttribute("uv",new nt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ef(t.radius,t.segments,t.thetaStart,t.thetaLength)}},tf=class rf extends At{constructor(t=1,i=1,r=1,a=32,n=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:r,radialSegments:a,heightSegments:n,openEnded:s,thetaStart:o,thetaLength:l};let c=this;a=Math.floor(a),n=Math.floor(n);let h=[],d=[],u=[],p=[],g=0,x=[],m=r/2,f=0;M(),s===!1&&(t>0&&y(!0),i>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(p,2));function M(){let v=new R,S=new R,A=0,w=(i-t)/r;for(let _=0;_<=n;_++){let b=[],L=_/n,P=L*(i-t)+t;for(let B=0;B<=a;B++){let j=B/a,U=j*l+o,I=Math.sin(U),k=Math.cos(U);S.x=P*I,S.y=-L*r+m,S.z=P*k,d.push(S.x,S.y,S.z),v.set(I,w,k).normalize(),u.push(v.x,v.y,v.z),p.push(j,1-L),b.push(g++)}x.push(b)}for(let _=0;_<a;_++)for(let b=0;b<n;b++){let L=x[b][_],P=x[b+1][_],B=x[b+1][_+1],j=x[b][_+1];(t>0||b!==0)&&(h.push(L,P,j),A+=3),(i>0||b!==n-1)&&(h.push(P,B,j),A+=3)}c.addGroup(f,A,0),f+=A}function y(v){let S=g,A=new de,w=new R,_=0,b=v===!0?t:i,L=v===!0?1:-1;for(let B=1;B<=a;B++)d.push(0,m*L,0),u.push(0,L,0),p.push(.5,.5),g++;let P=g;for(let B=0;B<=a;B++){let j=B/a*l+o,U=Math.cos(j),I=Math.sin(j);w.x=b*I,w.y=m*L,w.z=b*U,d.push(w.x,w.y,w.z),u.push(0,L,0),A.x=U*.5+.5,A.y=I*.5*L+.5,p.push(A.x,A.y),g++}for(let B=0;B<a;B++){let j=S+B,U=P+B;v===!0?h.push(U,U+1,j):h.push(U+1,U,j),_+=3}c.addGroup(f,_,v===!0?1:2),f+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rf(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},A0=class af extends tf{constructor(t=1,i=1,r=32,a=1,n=!1,s=0,o=Math.PI*2){super(0,t,i,r,a,n,s,o),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:r,heightSegments:a,openEnded:n,thetaStart:s,thetaLength:o}}static fromJSON(t){return new af(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ns=class nf extends At{constructor(t=[],i=[],r=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:r,detail:a};let n=[],s=[];o(a),c(r),h(),this.setAttribute("position",new nt(n,3)),this.setAttribute("normal",new nt(n.slice(),3)),this.setAttribute("uv",new nt(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(M){let y=new R,v=new R,S=new R;for(let A=0;A<i.length;A+=3)p(i[A+0],y),p(i[A+1],v),p(i[A+2],S),l(y,v,S,M)}function l(M,y,v,S){let A=S+1,w=[];for(let _=0;_<=A;_++){w[_]=[];let b=M.clone().lerp(v,_/A),L=y.clone().lerp(v,_/A),P=A-_;for(let B=0;B<=P;B++)B===0&&_===A?w[_][B]=b:w[_][B]=b.clone().lerp(L,B/P)}for(let _=0;_<A;_++)for(let b=0;b<2*(A-_)-1;b++){let L=Math.floor(b/2);b%2===0?(u(w[_][L+1]),u(w[_+1][L]),u(w[_][L])):(u(w[_][L+1]),u(w[_+1][L+1]),u(w[_+1][L]))}}function c(M){let y=new R;for(let v=0;v<n.length;v+=3)y.x=n[v+0],y.y=n[v+1],y.z=n[v+2],y.normalize().multiplyScalar(M),n[v+0]=y.x,n[v+1]=y.y,n[v+2]=y.z}function h(){let M=new R;for(let y=0;y<n.length;y+=3){M.x=n[y+0],M.y=n[y+1],M.z=n[y+2];let v=m(M)/2/Math.PI+.5,S=f(M)/Math.PI+.5;s.push(v,1-S)}g(),d()}function d(){for(let M=0;M<s.length;M+=6){let y=s[M+0],v=s[M+2],S=s[M+4],A=Math.max(y,v,S),w=Math.min(y,v,S);A>.9&&w<.1&&(y<.2&&(s[M+0]+=1),v<.2&&(s[M+2]+=1),S<.2&&(s[M+4]+=1))}}function u(M){n.push(M.x,M.y,M.z)}function p(M,y){let v=M*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function g(){let M=new R,y=new R,v=new R,S=new R,A=new de,w=new de,_=new de;for(let b=0,L=0;b<n.length;b+=9,L+=6){M.set(n[b+0],n[b+1],n[b+2]),y.set(n[b+3],n[b+4],n[b+5]),v.set(n[b+6],n[b+7],n[b+8]),A.set(s[L+0],s[L+1]),w.set(s[L+2],s[L+3]),_.set(s[L+4],s[L+5]),S.copy(M).add(y).add(v).divideScalar(3);let P=m(S);x(A,L+0,M,P),x(w,L+2,y,P),x(_,L+4,v,P)}}function x(M,y,v,S){S<0&&M.x===1&&(s[y]=M.x-1),v.x===0&&v.z===0&&(s[y]=S/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nf(t.vertices,t.indices,t.radius,t.detail)}},R0=class sf extends Ns{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=1/r,n=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-a,-r,0,-a,r,0,a,-r,0,a,r,-a,-r,0,-a,r,0,a,-r,0,a,r,0,-r,0,-a,r,0,-a,-r,0,a,r,0,a],s=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(n,s,t,i),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new sf(t.radius,t.detail)}},go=new R,vo=new R,tc=new R,_o=new mn,C0=class extends At{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let i=Math.pow(10,4),r=Math.cos(bn*t),a=e.getIndex(),n=e.getAttribute("position"),s=a?a.count:n.count,o=[0,0,0],l=["a","b","c"],c=new Array(3),h={},d=[];for(let u=0;u<s;u+=3){a?(o[0]=a.getX(u),o[1]=a.getX(u+1),o[2]=a.getX(u+2)):(o[0]=u,o[1]=u+1,o[2]=u+2);let{a:p,b:g,c:x}=_o;if(p.fromBufferAttribute(n,o[0]),g.fromBufferAttribute(n,o[1]),x.fromBufferAttribute(n,o[2]),_o.getNormal(tc),c[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,c[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,c[2]=`${Math.round(x.x*i)},${Math.round(x.y*i)},${Math.round(x.z*i)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let m=0;m<3;m++){let f=(m+1)%3,M=c[m],y=c[f],v=_o[l[m]],S=_o[l[f]],A=`${M}_${y}`,w=`${y}_${M}`;w in h&&h[w]?(tc.dot(h[w].normal)<=r&&(d.push(v.x,v.y,v.z),d.push(S.x,S.y,S.z)),h[w]=null):A in h||(h[A]={index0:o[m],index1:o[f],normal:tc.clone()})}}for(let u in h)if(h[u]){let{index0:p,index1:g}=h[u];go.fromBufferAttribute(n,p),vo.fromBufferAttribute(n,g),d.push(go.x,go.y,go.z),d.push(vo.x,vo.y,vo.z)}this.setAttribute("position",new nt(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},Gr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),a=0;t.push(0);for(let n=1;n<=e;n++)i=this.getPoint(n/e),a+=i.distanceTo(r),t.push(a),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),r=0,a=i.length,n;t?n=t:n=e*i[a-1];let s=0,o=a-1,l;for(;s<=o;)if(r=Math.floor(s+(o-s)/2),l=i[r]-n,l<0)s=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===n)return r/(a-1);let c=i[r],h=i[r+1]-c,d=(n-c)/h;return(r+d)/(a-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let a=this.getPoint(i),n=this.getPoint(r),s=t||(a.isVector2?new de:new R);return s.copy(n).sub(a).normalize(),s}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,r=[],a=[],n=[],s=new R,o=new et;for(let u=0;u<=e;u++){let p=u/e;r[u]=this.getTangentAt(p,new R)}a[0]=new R,n[0]=new R;let l=Number.MAX_VALUE,c=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=l&&(l=c,i.set(1,0,0)),h<=l&&(l=h,i.set(0,1,0)),d<=l&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),a[0].crossVectors(r[0],s),n[0].crossVectors(r[0],a[0]);for(let u=1;u<=e;u++){if(a[u]=a[u-1].clone(),n[u]=n[u-1].clone(),s.crossVectors(r[u-1],r[u]),s.length()>Number.EPSILON){s.normalize();let p=Math.acos(Mt(r[u-1].dot(r[u]),-1,1));a[u].applyMatrix4(o.makeRotationAxis(s,p))}n[u].crossVectors(r[u],a[u])}if(t===!0){let u=Math.acos(Mt(a[0].dot(a[e]),-1,1));u/=e,r[0].dot(s.crossVectors(a[0],a[e]))>0&&(u=-u);for(let p=1;p<=e;p++)a[p].applyMatrix4(o.makeRotationAxis(r[p],u*p)),n[p].crossVectors(r[p],a[p])}return{tangents:r,normals:a,binormals:n}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},xh=class extends Gr{constructor(e=0,t=0,i=1,r=1,a=0,n=Math.PI*2,s=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=a,this.aEndAngle=n,this.aClockwise=s,this.aRotation=o}getPoint(e,t=new de){let i=t,r=Math.PI*2,a=this.aEndAngle-this.aStartAngle,n=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=r;for(;a>r;)a-=r;a<Number.EPSILON&&(n?a=0:a=r),this.aClockwise===!0&&!n&&(a===r?a=-r:a=a-r);let s=this.aStartAngle+e*a,o=this.aX+this.xRadius*Math.cos(s),l=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){let c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*c-u*h+this.aX,l=d*h+u*c+this.aY}return i.set(o,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},I0=class extends xh{constructor(e,t,i,r,a,n){super(e,t,i,i,r,a,n),this.isArcCurve=!0,this.type="ArcCurve"}};function yh(){let e=0,t=0,i=0,r=0;function a(n,s,o,l){e=n,t=o,i=-3*n+3*s-2*o-l,r=2*n-2*s+o+l}return{initCatmullRom:function(n,s,o,l,c){a(s,o,c*(o-n),c*(l-s))},initNonuniformCatmullRom:function(n,s,o,l,c,h,d){let u=(s-n)/c-(o-n)/(c+h)+(o-s)/h,p=(o-s)/h-(l-s)/(h+d)+(l-o)/d;u*=h,p*=h,a(s,o,u,p)},calc:function(n){let s=n*n,o=s*n;return e+t*n+i*s+r*o}}}var Ud=new R,Od=new R,ic=new yh,rc=new yh,ac=new yh,P0=class extends Gr{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new R){let i=t,r=this.points,a=r.length,n=(a-(this.closed?0:1))*e,s=Math.floor(n),o=n-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/a)+1)*a:o===0&&s===a-1&&(s=a-2,o=1);let l,c;this.closed||s>0?l=r[(s-1)%a]:(Od.subVectors(r[0],r[1]).add(r[0]),l=Od);let h=r[s%a],d=r[(s+1)%a];if(this.closed||s+2<a?c=r[(s+2)%a]:(Ud.subVectors(r[a-1],r[a-2]).add(r[a-1]),c=Ud),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(h),u),g=Math.pow(h.distanceToSquared(d),u),x=Math.pow(d.distanceToSquared(c),u);g<1e-4&&(g=1),p<1e-4&&(p=g),x<1e-4&&(x=g),ic.initNonuniformCatmullRom(l.x,h.x,d.x,c.x,p,g,x),rc.initNonuniformCatmullRom(l.y,h.y,d.y,c.y,p,g,x),ac.initNonuniformCatmullRom(l.z,h.z,d.z,c.z,p,g,x)}else this.curveType==="catmullrom"&&(ic.initCatmullRom(l.x,h.x,d.x,c.x,this.tension),rc.initCatmullRom(l.y,h.y,d.y,c.y,this.tension),ac.initCatmullRom(l.z,h.z,d.z,c.z,this.tension));return i.set(ic.calc(o),rc.calc(o),ac.calc(o)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new R().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fd(e,t,i,r,a){let n=(r-t)*.5,s=(a-i)*.5,o=e*e,l=e*o;return(2*i-2*r+n+s)*l+(-3*i+3*r-2*n-s)*o+n*e+i}function L0(e,t){let i=1-e;return i*i*t}function D0(e,t){return 2*(1-e)*e*t}function N0(e,t){return e*e*t}function _s(e,t,i,r){return L0(e,t)+D0(e,i)+N0(e,r)}function U0(e,t){let i=1-e;return i*i*i*t}function O0(e,t){let i=1-e;return 3*i*i*e*t}function F0(e,t){return 3*(1-e)*e*e*t}function B0(e,t){return e*e*e*t}function xs(e,t,i,r,a){return U0(e,t)+O0(e,i)+F0(e,r)+B0(e,a)}var of=class extends Gr{constructor(e=new de,t=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new de){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(xs(e,r.x,a.x,n.x,s.x),xs(e,r.y,a.y,n.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},z0=class extends Gr{constructor(e=new R,t=new R,i=new R,r=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new R){let i=t,r=this.v0,a=this.v1,n=this.v2,s=this.v3;return i.set(xs(e,r.x,a.x,n.x,s.x),xs(e,r.y,a.y,n.y,s.y),xs(e,r.z,a.z,n.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lf=class extends Gr{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},H0=class extends Gr{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cf=class extends Gr{constructor(e=new de,t=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new de){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(_s(e,r.x,a.x,n.x),_s(e,r.y,a.y,n.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hf=class extends Gr{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,r=this.v0,a=this.v1,n=this.v2;return i.set(_s(e,r.x,a.x,n.x),_s(e,r.y,a.y,n.y),_s(e,r.z,a.z,n.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uf=class extends Gr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let i=t,r=this.points,a=(r.length-1)*e,n=Math.floor(a),s=a-n,o=r[n===0?n:n-1],l=r[n],c=r[n>r.length-2?r.length-1:n+1],h=r[n>r.length-3?r.length-1:n+2];return i.set(Fd(s,o.x,l.x,c.x,h.x),Fd(s,o.y,l.y,c.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new de().fromArray(r))}return this}},zo=Object.freeze({__proto__:null,ArcCurve:I0,CatmullRomCurve3:P0,CubicBezierCurve:of,CubicBezierCurve3:z0,EllipseCurve:xh,LineCurve:lf,LineCurve3:H0,QuadraticBezierCurve:cf,QuadraticBezierCurve3:hf,SplineCurve:uf}),k0=class extends Gr{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new zo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),a=0;for(;a<r.length;){if(r[a]>=i){let n=r[a]-i,s=this.curves[a],o=s.getLength(),l=o===0?0:1-n/o;return s.getPointAt(l,t)}a++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,a=this.curves;r<a.length;r++){let n=a[r],s=n.isEllipseCurve?e*2:n.isLineCurve||n.isLineCurve3?1:n.isSplineCurve?e*n.points.length:e,o=n.getPoints(s);for(let l=0;l<o.length;l++){let c=o[l];i&&i.equals(c)||(t.push(c),i=c)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new zo[r.type]().fromJSON(r))}return this}},Bd=class extends k0{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new lf(this.currentPoint.clone(),new de(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let a=new cf(this.currentPoint.clone(),new de(e,t),new de(i,r));return this.curves.push(a),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,a,n){let s=new of(this.currentPoint.clone(),new de(e,t),new de(i,r),new de(a,n));return this.curves.push(s),this.currentPoint.set(a,n),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new uf(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,a,n){let s=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(e+s,t+o,i,r,a,n),this}absarc(e,t,i,r,a,n){return this.absellipse(e,t,i,i,r,a,n),this}ellipse(e,t,i,r,a,n,s,o){let l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+l,t+c,i,r,a,n,s,o),this}absellipse(e,t,i,r,a,n,s,o){let l=new xh(e,t,i,r,a,n,s,o);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},df=class extends Bd{constructor(e){super(e),this.uuid=hr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new Bd().fromJSON(r))}return this}};function G0(e,t,i=2){let r=t&&t.length,a=r?t[0]*i:e.length,n=pf(e,0,a,i,!0),s=[];if(!n||n.next===n.prev)return s;let o,l,c;if(r&&(n=q0(e,t,n,i)),e.length>80*i){o=e[0],l=e[1];let h=o,d=l;for(let u=i;u<a;u+=i){let p=e[u],g=e[u+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Rs(n,s,i,o,l,c,0),s}function pf(e,t,i,r,a){let n;if(a===av(e,t,i,r)>0)for(let s=t;s<i;s+=r)n=zd(s/r|0,e[s],e[s+1],n);else for(let s=i-r;s>=t;s-=r)n=zd(s/r|0,e[s],e[s+1],n);return n&&Un(n,n.next)&&(Is(n),n=n.next),n}function za(e,t){if(!e)return e;t||(t=e);let i=e,r;do if(r=!1,!i.steiner&&(Un(i,i.next)||ni(i.prev,i,i.next)===0)){if(Is(i),i=t=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==t);return t}function Rs(e,t,i,r,a,n,s){if(!e)return;!s&&n&&J0(e,r,a,n);let o=e;for(;e.prev!==e.next;){let l=e.prev,c=e.next;if(n?W0(e,r,a,n):V0(e)){t.push(l.i,e.i,c.i),Is(e),e=c.next,o=c.next;continue}if(e=c,e===o){s?s===1?(e=X0(za(e),t),Rs(e,t,i,r,a,n,2)):s===2&&j0(e,t,i,r,a,n):Rs(za(e),t,i,r,a,n,1);break}}}function V0(e){let t=e.prev,i=e,r=e.next;if(ni(t,i,r)>=0)return!1;let a=t.x,n=i.x,s=r.x,o=t.y,l=i.y,c=r.y,h=Math.min(a,n,s),d=Math.min(o,l,c),u=Math.max(a,n,s),p=Math.max(o,l,c),g=r.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=p&&ps(a,o,n,l,s,c,g.x,g.y)&&ni(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function W0(e,t,i,r){let a=e.prev,n=e,s=e.next;if(ni(a,n,s)>=0)return!1;let o=a.x,l=n.x,c=s.x,h=a.y,d=n.y,u=s.y,p=Math.min(o,l,c),g=Math.min(h,d,u),x=Math.max(o,l,c),m=Math.max(h,d,u),f=$c(p,g,t,i,r),M=$c(x,m,t,i,r),y=e.prevZ,v=e.nextZ;for(;y&&y.z>=f&&v&&v.z<=M;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==a&&y!==s&&ps(o,h,l,d,c,u,y.x,y.y)&&ni(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==a&&v!==s&&ps(o,h,l,d,c,u,v.x,v.y)&&ni(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=f;){if(y.x>=p&&y.x<=x&&y.y>=g&&y.y<=m&&y!==a&&y!==s&&ps(o,h,l,d,c,u,y.x,y.y)&&ni(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=M;){if(v.x>=p&&v.x<=x&&v.y>=g&&v.y<=m&&v!==a&&v!==s&&ps(o,h,l,d,c,u,v.x,v.y)&&ni(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function X0(e,t){let i=e;do{let r=i.prev,a=i.next.next;!Un(r,a)&&mf(r,i,i.next,a)&&Cs(r,a)&&Cs(a,r)&&(t.push(r.i,i.i,a.i),Is(i),Is(i.next),i=e=a),i=i.next}while(i!==e);return za(i)}function j0(e,t,i,r,a,n){let s=e;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&tv(s,o)){let l=gf(s,o);s=za(s,s.next),l=za(l,l.next),Rs(s,t,i,r,a,n,0),Rs(l,t,i,r,a,n,0);return}o=o.next}s=s.next}while(s!==e)}function q0(e,t,i,r){let a=[];for(let n=0,s=t.length;n<s;n++){let o=t[n]*r,l=n<s-1?t[n+1]*r:e.length,c=pf(e,o,l,r,!1);c===c.next&&(c.steiner=!0),a.push(ev(c))}a.sort(Y0);for(let n=0;n<a.length;n++)i=Z0(a[n],i);return i}function Y0(e,t){let i=e.x-t.x;if(i===0&&(i=e.y-t.y,i===0)){let r=(e.next.y-e.y)/(e.next.x-e.x),a=(t.next.y-t.y)/(t.next.x-t.x);i=r-a}return i}function Z0(e,t){let i=K0(e,t);if(!i)return t;let r=gf(i,e);return za(r,r.next),za(i,i.next)}function K0(e,t){let i=t,r=e.x,a=e.y,n=-1/0,s;if(Un(e,i))return i;do{if(Un(e,i.next))return i.next;if(a<=i.y&&a>=i.next.y&&i.next.y!==i.y){let d=i.x+(a-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>n&&(n=d,s=i.x<i.next.x?i:i.next,d===r))return s}i=i.next}while(i!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0;i=s;do{if(r>=i.x&&i.x>=l&&r!==i.x&&ff(a<c?r:n,a,l,c,a<c?n:r,a,i.x,i.y)){let d=Math.abs(a-i.y)/(r-i.x);Cs(i,e)&&(d<h||d===h&&(i.x>s.x||i.x===s.x&&$0(s,i)))&&(s=i,h=d)}i=i.next}while(i!==o);return s}function $0(e,t){return ni(e.prev,e,t.prev)<0&&ni(t.next,e,e.next)<0}function J0(e,t,i,r){let a=e;do a.z===0&&(a.z=$c(a.x,a.y,t,i,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==e);a.prevZ.nextZ=null,a.prevZ=null,Q0(a)}function Q0(e){let t,i=1;do{let r=e,a;e=null;let n=null;for(t=0;r;){t++;let s=r,o=0;for(let c=0;c<i&&(o++,s=s.nextZ,!!s);c++);let l=i;for(;o>0||l>0&&s;)o!==0&&(l===0||!s||r.z<=s.z)?(a=r,r=r.nextZ,o--):(a=s,s=s.nextZ,l--),n?n.nextZ=a:e=a,a.prevZ=n,n=a;r=s}n.nextZ=null,i*=2}while(t>1);return e}function $c(e,t,i,r,a){return e=(e-i)*a|0,t=(t-r)*a|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ev(e){let t=e,i=e;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==e);return i}function ff(e,t,i,r,a,n,s,o){return(a-s)*(t-o)>=(e-s)*(n-o)&&(e-s)*(r-o)>=(i-s)*(t-o)&&(i-s)*(n-o)>=(a-s)*(r-o)}function ps(e,t,i,r,a,n,s,o){return!(e===s&&t===o)&&ff(e,t,i,r,a,n,s,o)}function tv(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!iv(e,t)&&(Cs(e,t)&&Cs(t,e)&&rv(e,t)&&(ni(e.prev,e,t.prev)||ni(e,t.prev,t))||Un(e,t)&&ni(e.prev,e,e.next)>0&&ni(t.prev,t,t.next)>0)}function ni(e,t,i){return(t.y-e.y)*(i.x-t.x)-(t.x-e.x)*(i.y-t.y)}function Un(e,t){return e.x===t.x&&e.y===t.y}function mf(e,t,i,r){let a=yo(ni(e,t,i)),n=yo(ni(e,t,r)),s=yo(ni(i,r,e)),o=yo(ni(i,r,t));return!!(a!==n&&s!==o||a===0&&xo(e,i,t)||n===0&&xo(e,r,t)||s===0&&xo(i,e,r)||o===0&&xo(i,t,r))}function xo(e,t,i){return t.x<=Math.max(e.x,i.x)&&t.x>=Math.min(e.x,i.x)&&t.y<=Math.max(e.y,i.y)&&t.y>=Math.min(e.y,i.y)}function yo(e){return e>0?1:e<0?-1:0}function iv(e,t){let i=e;do{if(i.i!==e.i&&i.next.i!==e.i&&i.i!==t.i&&i.next.i!==t.i&&mf(i,i.next,e,t))return!0;i=i.next}while(i!==e);return!1}function Cs(e,t){return ni(e.prev,e,e.next)<0?ni(e,t,e.next)>=0&&ni(e,e.prev,t)>=0:ni(e,t,e.prev)<0||ni(e,e.next,t)<0}function rv(e,t){let i=e,r=!1,a=(e.x+t.x)/2,n=(e.y+t.y)/2;do i.y>n!=i.next.y>n&&i.next.y!==i.y&&a<(i.next.x-i.x)*(n-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==e);return r}function gf(e,t){let i=Jc(e.i,e.x,e.y),r=Jc(t.i,t.x,t.y),a=e.next,n=t.prev;return e.next=t,t.prev=e,i.next=a,a.prev=i,r.next=i,i.prev=r,n.next=r,r.prev=n,r}function zd(e,t,i,r){let a=Jc(e,t,i);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function Is(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Jc(e,t,i){return{i:e,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function av(e,t,i,r){let a=0;for(let n=t,s=i-r;n<i;n+=r)a+=(e[s]-e[n])*(e[n+1]+e[s+1]),s=n;return a}var nv=class{static triangulate(e,t,i=2){return G0(e,t,i)}},Na=class vf{static area(t){let i=t.length,r=0;for(let a=i-1,n=0;n<i;a=n++)r+=t[a].x*t[n].y-t[n].x*t[a].y;return r*.5}static isClockWise(t){return vf.area(t)<0}static triangulateShape(t,i){let r=[],a=[],n=[];Hd(t),kd(r,t);let s=t.length;i.forEach(Hd);for(let l=0;l<i.length;l++)a.push(s),s+=i[l].length,kd(r,i[l]);let o=nv.triangulate(r,a);for(let l=0;l<o.length;l+=3)n.push(o.slice(l,l+3));return n}};function Hd(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function kd(e,t){for(let i=0;i<t.length;i++)e.push(t[i].x),e.push(t[i].y)}var sv=class _f extends At{constructor(t=new df([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];let r=this,a=[],n=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];s(c)}this.setAttribute("position",new nt(a,3)),this.setAttribute("uv",new nt(n,2)),this.computeVertexNormals();function s(o){let l=[],c=i.curveSegments!==void 0?i.curveSegments:12,h=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,x=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,M=i.UVGenerator!==void 0?i.UVGenerator:ov,y,v=!1,S,A,w,_;if(f){y=f.getSpacedPoints(h),v=!0,u=!1;let he=f.isCatmullRomCurve3?f.closed:!1;S=f.computeFrenetFrames(h,he),A=new R,w=new R,_=new R}u||(m=0,p=0,g=0,x=0);let b=o.extractPoints(c),L=b.shape,P=b.holes;if(!Na.isClockWise(L)){L=L.reverse();for(let he=0,se=P.length;he<se;he++){let fe=P[he];Na.isClockWise(fe)&&(P[he]=fe.reverse())}}function B(he){let se=10000000000000001e-36,fe=he[0];for(let Re=1;Re<=he.length;Re++){let Se=Re%he.length,Ge=he[Se],Ve=Ge.x-fe.x,tt=Ge.y-fe.y,st=Ve*Ve+tt*tt,O=Math.max(Math.abs(Ge.x),Math.abs(Ge.y),Math.abs(fe.x),Math.abs(fe.y)),bt=se*O*O;if(st<=bt){he.splice(Se,1),Re--;continue}fe=Ge}}B(L),P.forEach(B);let j=P.length,U=L;for(let he=0;he<j;he++){let se=P[he];L=L.concat(se)}function I(he,se,fe){return se||pt("ExtrudeGeometry: vec does not exist"),he.clone().addScaledVector(se,fe)}let k=L.length;function F(he,se,fe){let Re,Se,Ge,Ve=he.x-se.x,tt=he.y-se.y,st=fe.x-he.x,O=fe.y-he.y,bt=Ve*Ve+tt*tt,mt=Ve*O-tt*st;if(Math.abs(mt)>Number.EPSILON){let vt=Math.sqrt(bt),C=Math.sqrt(st*st+O*O),T=se.x-tt/vt,G=se.y+Ve/vt,re=fe.x-O/C,le=fe.y+st/C,ye=((re-T)*O-(le-G)*st)/(Ve*O-tt*st);Re=T+Ve*ye-he.x,Se=G+tt*ye-he.y;let Ie=Re*Re+Se*Se;if(Ie<=2)return new de(Re,Se);Ge=Math.sqrt(Ie/2)}else{let vt=!1;Ve>Number.EPSILON?st>Number.EPSILON&&(vt=!0):Ve<-Number.EPSILON?st<-Number.EPSILON&&(vt=!0):Math.sign(tt)===Math.sign(O)&&(vt=!0),vt?(Re=-tt,Se=Ve,Ge=Math.sqrt(bt)):(Re=Ve,Se=tt,Ge=Math.sqrt(bt/2))}return new de(Re/Ge,Se/Ge)}let ee=[];for(let he=0,se=U.length,fe=se-1,Re=he+1;he<se;he++,fe++,Re++)fe===se&&(fe=0),Re===se&&(Re=0),ee[he]=F(U[he],U[fe],U[Re]);let X=[],K,$=ee.concat();for(let he=0,se=j;he<se;he++){let fe=P[he];K=[];for(let Re=0,Se=fe.length,Ge=Se-1,Ve=Re+1;Re<Se;Re++,Ge++,Ve++)Ge===Se&&(Ge=0),Ve===Se&&(Ve=0),K[Re]=F(fe[Re],fe[Ge],fe[Ve]);X.push(K),$=$.concat(K)}let xe;if(m===0)xe=Na.triangulateShape(U,P);else{let he=[],se=[];for(let fe=0;fe<m;fe++){let Re=fe/m,Se=p*Math.cos(Re*Math.PI/2),Ge=g*Math.sin(Re*Math.PI/2)+x;for(let Ve=0,tt=U.length;Ve<tt;Ve++){let st=I(U[Ve],ee[Ve],Ge);oe(st.x,st.y,-Se),Re===0&&he.push(st)}for(let Ve=0,tt=j;Ve<tt;Ve++){let st=P[Ve];K=X[Ve];let O=[];for(let bt=0,mt=st.length;bt<mt;bt++){let vt=I(st[bt],K[bt],Ge);oe(vt.x,vt.y,-Se),Re===0&&O.push(vt)}Re===0&&se.push(O)}}xe=Na.triangulateShape(he,se)}let be=xe.length,qe=g+x;for(let he=0;he<k;he++){let se=u?I(L[he],$[he],qe):L[he];v?(w.copy(S.normals[0]).multiplyScalar(se.x),A.copy(S.binormals[0]).multiplyScalar(se.y),_.copy(y[0]).add(w).add(A),oe(_.x,_.y,_.z)):oe(se.x,se.y,0)}for(let he=1;he<=h;he++)for(let se=0;se<k;se++){let fe=u?I(L[se],$[se],qe):L[se];v?(w.copy(S.normals[he]).multiplyScalar(fe.x),A.copy(S.binormals[he]).multiplyScalar(fe.y),_.copy(y[he]).add(w).add(A),oe(_.x,_.y,_.z)):oe(fe.x,fe.y,d/h*he)}for(let he=m-1;he>=0;he--){let se=he/m,fe=p*Math.cos(se*Math.PI/2),Re=g*Math.sin(se*Math.PI/2)+x;for(let Se=0,Ge=U.length;Se<Ge;Se++){let Ve=I(U[Se],ee[Se],Re);oe(Ve.x,Ve.y,d+fe)}for(let Se=0,Ge=P.length;Se<Ge;Se++){let Ve=P[Se];K=X[Se];for(let tt=0,st=Ve.length;tt<st;tt++){let O=I(Ve[tt],K[tt],Re);v?oe(O.x,O.y+y[h-1].y,y[h-1].x+fe):oe(O.x,O.y,d+fe)}}}De(),te();function De(){let he=a.length/3;if(u){let se=0,fe=k*se;for(let Re=0;Re<be;Re++){let Se=xe[Re];Be(Se[2]+fe,Se[1]+fe,Se[0]+fe)}se=h+m*2,fe=k*se;for(let Re=0;Re<be;Re++){let Se=xe[Re];Be(Se[0]+fe,Se[1]+fe,Se[2]+fe)}}else{for(let se=0;se<be;se++){let fe=xe[se];Be(fe[2],fe[1],fe[0])}for(let se=0;se<be;se++){let fe=xe[se];Be(fe[0]+k*h,fe[1]+k*h,fe[2]+k*h)}}r.addGroup(he,a.length/3-he,0)}function te(){let he=a.length/3,se=0;ae(U,se),se+=U.length;for(let fe=0,Re=P.length;fe<Re;fe++){let Se=P[fe];ae(Se,se),se+=Se.length}r.addGroup(he,a.length/3-he,1)}function ae(he,se){let fe=he.length;for(;--fe>=0;){let Re=fe,Se=fe-1;Se<0&&(Se=he.length-1);for(let Ge=0,Ve=h+m*2;Ge<Ve;Ge++){let tt=k*Ge,st=k*(Ge+1),O=se+Re+tt,bt=se+Se+tt,mt=se+Se+st,vt=se+Re+st;Ye(O,bt,mt,vt)}}}function oe(he,se,fe){l.push(he),l.push(se),l.push(fe)}function Be(he,se,fe){ce(he),ce(se),ce(fe);let Re=a.length/3,Se=M.generateTopUV(r,a,Re-3,Re-2,Re-1);$e(Se[0]),$e(Se[1]),$e(Se[2])}function Ye(he,se,fe,Re){ce(he),ce(se),ce(Re),ce(se),ce(fe),ce(Re);let Se=a.length/3,Ge=M.generateSideWallUV(r,a,Se-6,Se-3,Se-2,Se-1);$e(Ge[0]),$e(Ge[1]),$e(Ge[3]),$e(Ge[1]),$e(Ge[2]),$e(Ge[3])}function ce(he){a.push(l[he*3+0]),a.push(l[he*3+1]),a.push(l[he*3+2])}function $e(he){n.push(he.x),n.push(he.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return lv(i,r,t)}static fromJSON(t,i){let r=[];for(let n=0,s=t.shapes.length;n<s;n++){let o=i[t.shapes[n]];r.push(o)}let a=t.options.extrudePath;return a!==void 0&&(t.options.extrudePath=new zo[a.type]().fromJSON(a)),new _f(r,t.options)}},ov={generateTopUV:function(e,t,i,r,a){let n=t[i*3],s=t[i*3+1],o=t[r*3],l=t[r*3+1],c=t[a*3],h=t[a*3+1];return[new de(n,s),new de(o,l),new de(c,h)]},generateSideWallUV:function(e,t,i,r,a,n){let s=t[i*3],o=t[i*3+1],l=t[i*3+2],c=t[r*3],h=t[r*3+1],d=t[r*3+2],u=t[a*3],p=t[a*3+1],g=t[a*3+2],x=t[n*3],m=t[n*3+1],f=t[n*3+2];return Math.abs(o-h)<Math.abs(s-c)?[new de(s,1-l),new de(c,1-d),new de(u,1-g),new de(x,1-f)]:[new de(o,1-l),new de(h,1-d),new de(p,1-g),new de(m,1-f)]}};function lv(e,t,i){if(i.shapes=[],Array.isArray(e))for(let r=0,a=e.length;r<a;r++){let n=e[r];i.shapes.push(n.uuid)}else i.shapes.push(e.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}var Mh=class xf extends Ns{constructor(t=1,i=0){let r=(1+Math.sqrt(5))/2,a=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],n=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,n,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new xf(t.radius,t.detail)}},cv=class yf extends At{constructor(t=[new de(0,-.5),new de(.5,0),new de(0,.5)],i=12,r=0,a=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:i,phiStart:r,phiLength:a},i=Math.floor(i),a=Mt(a,0,Math.PI*2);let n=[],s=[],o=[],l=[],c=[],h=1/i,d=new R,u=new de,p=new R,g=new R,x=new R,m=0,f=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(x.x,x.y,x.z);break;default:m=t[M+1].x-t[M].x,f=t[M+1].y-t[M].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let M=0;M<=i;M++){let y=r+M*h*a,v=Math.sin(y),S=Math.cos(y);for(let A=0;A<=t.length-1;A++){d.x=t[A].x*v,d.y=t[A].y,d.z=t[A].x*S,s.push(d.x,d.y,d.z),u.x=M/i,u.y=A/(t.length-1),o.push(u.x,u.y);let w=l[3*A+0]*v,_=l[3*A+1],b=l[3*A+0]*S;c.push(w,_,b)}}for(let M=0;M<i;M++)for(let y=0;y<t.length-1;y++){let v=y+M*t.length,S=v,A=v+t.length,w=v+t.length+1,_=v+1;n.push(S,A,_),n.push(w,_,A)}this.setIndex(n),this.setAttribute("position",new nt(s,3)),this.setAttribute("uv",new nt(o,2)),this.setAttribute("normal",new nt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yf(t.points,t.segments,t.phiStart,t.phiLength)}},bh=class Mf extends Ns{constructor(t=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,a,t,i),this.type="OctahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Mf(t.radius,t.detail)}},ui=class bf extends At{constructor(t=1,i=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:a};let n=t/2,s=i/2,o=Math.floor(r),l=Math.floor(a),c=o+1,h=l+1,d=t/o,u=i/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let M=f*u-s;for(let y=0;y<c;y++){let v=y*d-n;g.push(v,-M,0),x.push(0,0,1),m.push(y/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let M=0;M<o;M++){let y=M+c*f,v=M+c*(f+1),S=M+1+c*(f+1),A=M+1+c*f;p.push(y,v,A),p.push(v,S,A)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bf(t.width,t.height,t.widthSegments,t.heightSegments)}},Sh=class Sf extends At{constructor(t=.5,i=1,r=32,a=1,n=0,s=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:r,phiSegments:a,thetaStart:n,thetaLength:s},r=Math.max(3,r),a=Math.max(1,a);let o=[],l=[],c=[],h=[],d=t,u=(i-t)/a,p=new R,g=new de;for(let x=0;x<=a;x++){for(let m=0;m<=r;m++){let f=n+m/r*s;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/i+1)/2,g.y=(p.y/i+1)/2,h.push(g.x,g.y)}d+=u}for(let x=0;x<a;x++){let m=x*(r+1);for(let f=0;f<r;f++){let M=f+m,y=M,v=M+r+1,S=M+r+2,A=M+1;o.push(y,v,A),o.push(v,S,A)}}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sf(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},hv=class Tf extends At{constructor(t=new df([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};let r=[],a=[],n=[],s=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new nt(a,3)),this.setAttribute("normal",new nt(n,3)),this.setAttribute("uv",new nt(s,2));function c(h){let d=a.length/3,u=h.extractPoints(i),p=u.shape,g=u.holes;Na.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let M=g[m];Na.isClockWise(M)===!0&&(g[m]=M.reverse())}let x=Na.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let M=g[m];p=p.concat(M)}for(let m=0,f=p.length;m<f;m++){let M=p[m];a.push(M.x,M.y,0),n.push(0,0,1),s.push(M.x,M.y)}for(let m=0,f=x.length;m<f;m++){let M=x[m],y=M[0]+d,v=M[1]+d,S=M[2]+d;r.push(y,v,S),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),i=this.parameters.shapes;return uv(i,t)}static fromJSON(t,i){let r=[];for(let a=0,n=t.shapes.length;a<n;a++){let s=i[t.shapes[a]];r.push(s)}return new Tf(r,t.curveSegments)}};function uv(e,t){if(t.shapes=[],Array.isArray(e))for(let i=0,r=e.length;i<r;i++){let a=e[i];t.shapes.push(a.uuid)}else t.shapes.push(e.uuid);return t}var Qo=class Ef extends At{constructor(t=1,i=32,r=16,a=0,n=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:r,phiStart:a,phiLength:n,thetaStart:s,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(s+o,Math.PI),c=0,h=[],d=new R,u=new R,p=[],g=[],x=[],m=[];for(let f=0;f<=r;f++){let M=[],y=f/r,v=s+y*o,S=t*Math.cos(v),A=Math.sqrt(t*t-S*S),w=0;f===0&&s===0?w=.5/i:f===r&&l===Math.PI&&(w=-.5/i);for(let _=0;_<=i;_++){let b=_/i,L=a+b*n;d.x=-A*Math.cos(L),d.y=S,d.z=A*Math.sin(L),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(b+w,1-y),M.push(c++)}h.push(M)}for(let f=0;f<r;f++)for(let M=0;M<i;M++){let y=h[f][M+1],v=h[f][M],S=h[f+1][M],A=h[f+1][M+1];(f!==0||s>0)&&p.push(y,v,A),(f!==r-1||l<Math.PI)&&p.push(v,S,A)}this.setIndex(p),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(x,3)),this.setAttribute("uv",new nt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ef(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},dv=class wf extends Ns{constructor(t=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],a=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,a,t,i),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new wf(t.radius,t.detail)}},Th=class Af extends At{constructor(t=1,i=.4,r=12,a=48,n=Math.PI*2,s=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:a,arc:n,thetaStart:s,thetaLength:o},r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=new R,p=new R,g=new R;for(let x=0;x<=r;x++){let m=s+x/r*o;for(let f=0;f<=a;f++){let M=f/a*n;p.x=(t+i*Math.cos(m))*Math.cos(M),p.y=(t+i*Math.cos(m))*Math.sin(M),p.z=i*Math.sin(m),c.push(p.x,p.y,p.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(p,u).normalize(),h.push(g.x,g.y,g.z),d.push(f/a),d.push(x/r)}}for(let x=1;x<=r;x++)for(let m=1;m<=a;m++){let f=(a+1)*x+m-1,M=(a+1)*(x-1)+m-1,y=(a+1)*(x-1)+m,v=(a+1)*x+m;l.push(f,M,v),l.push(M,y,v)}this.setIndex(l),this.setAttribute("position",new nt(c,3)),this.setAttribute("normal",new nt(h,3)),this.setAttribute("uv",new nt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Af(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},pv=class Rf extends At{constructor(t=1,i=.4,r=64,a=8,n=2,s=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:i,tubularSegments:r,radialSegments:a,p:n,q:s},r=Math.floor(r),a=Math.floor(a);let o=[],l=[],c=[],h=[],d=new R,u=new R,p=new R,g=new R,x=new R,m=new R,f=new R;for(let y=0;y<=r;++y){let v=y/r*n*Math.PI*2;M(v,n,s,t,p),M(v+.01,n,s,t,g),m.subVectors(g,p),f.addVectors(g,p),x.crossVectors(m,f),f.crossVectors(x,m),x.normalize(),f.normalize();for(let S=0;S<=a;++S){let A=S/a*Math.PI*2,w=-i*Math.cos(A),_=i*Math.sin(A);d.x=p.x+(w*f.x+_*x.x),d.y=p.y+(w*f.y+_*x.y),d.z=p.z+(w*f.z+_*x.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),c.push(u.x,u.y,u.z),h.push(y/r),h.push(S/a)}}for(let y=1;y<=r;y++)for(let v=1;v<=a;v++){let S=(a+1)*(y-1)+(v-1),A=(a+1)*y+(v-1),w=(a+1)*y+v,_=(a+1)*(y-1)+v;o.push(S,A,_),o.push(A,w,_)}this.setIndex(o),this.setAttribute("position",new nt(l,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2));function M(y,v,S,A,w){let _=Math.cos(y),b=Math.sin(y),L=S/v*y,P=Math.cos(L);w.x=A*(2+P)*.5*_,w.y=A*(2+P)*b*.5,w.z=A*Math.sin(L)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rf(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},fv=class Cf extends At{constructor(t=new hf(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),i=64,r=1,a=8,n=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:r,radialSegments:a,closed:n};let s=t.computeFrenetFrames(i,n);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;let o=new R,l=new R,c=new de,h=new R,d=[],u=[],p=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new nt(d,3)),this.setAttribute("normal",new nt(u,3)),this.setAttribute("uv",new nt(p,2));function x(){for(let y=0;y<i;y++)m(y);m(n===!1?i:0),M(),f()}function m(y){h=t.getPointAt(y/i,h);let v=s.normals[y],S=s.binormals[y];for(let A=0;A<=a;A++){let w=A/a*Math.PI*2,_=Math.sin(w),b=-Math.cos(w);l.x=b*v.x+_*S.x,l.y=b*v.y+_*S.y,l.z=b*v.z+_*S.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+r*l.x,o.y=h.y+r*l.y,o.z=h.z+r*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let y=1;y<=i;y++)for(let v=1;v<=a;v++){let S=(a+1)*(y-1)+(v-1),A=(a+1)*y+(v-1),w=(a+1)*y+v,_=(a+1)*(y-1)+v;g.push(S,A,_),g.push(A,w,_)}}function M(){for(let y=0;y<=i;y++)for(let v=0;v<=a;v++)c.x=y/i,c.y=v/a,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Cf(new zo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}},mv=class extends At{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],i=new Set,r=new R,a=new R;if(e.index!==null){let n=e.attributes.position,s=e.index,o=e.groups;o.length===0&&(o=[{start:0,count:s.count,materialIndex:0}]);for(let l=0,c=o.length;l<c;++l){let h=o[l],d=h.start,u=h.count;for(let p=d,g=d+u;p<g;p+=3)for(let x=0;x<3;x++){let m=s.getX(p+x),f=s.getX(p+(x+1)%3);r.fromBufferAttribute(n,m),a.fromBufferAttribute(n,f),Gd(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}}else{let n=e.attributes.position;for(let s=0,o=n.count/3;s<o;s++)for(let l=0;l<3;l++){let c=3*s+l,h=3*s+(l+1)%3;r.fromBufferAttribute(n,c),a.fromBufferAttribute(n,h),Gd(r,a,i)===!0&&(t.push(r.x,r.y,r.z),t.push(a.x,a.y,a.z))}}this.setAttribute("position",new nt(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Gd(e,t,i){let r=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`,a=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`;return i.has(r)===!0||i.has(a)===!0?!1:(i.add(r),i.add(a),!0)}var nS=Object.freeze({__proto__:null,BoxGeometry:kr,CapsuleGeometry:w0,CircleGeometry:_h,ConeGeometry:A0,CylinderGeometry:tf,DodecahedronGeometry:R0,EdgesGeometry:C0,ExtrudeGeometry:sv,IcosahedronGeometry:Mh,LatheGeometry:cv,OctahedronGeometry:bh,PlaneGeometry:ui,PolyhedronGeometry:Ns,RingGeometry:Sh,ShapeGeometry:hv,SphereGeometry:Qo,TetrahedronGeometry:dv,TorusGeometry:Th,TorusKnotGeometry:pv,TubeGeometry:fv,WireframeGeometry:mv});function On(e){let t={};for(let i in e){t[i]={};for(let r in e[i]){let a=e[i][r];if(Vd(a))a.isRenderTargetTexture?(Qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=a.clone();else if(Array.isArray(a))if(Vd(a[0])){let n=[];for(let s=0,o=a.length;s<o;s++)n[s]=a[s].clone();t[i][r]=n}else t[i][r]=a.slice();else t[i][r]=a}}return t}function Wi(e){let t={};for(let i=0;i<e.length;i++){let r=On(e[i]);for(let a in r)t[a]=r[a]}return t}function Vd(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function gv(e){let t=[];for(let i=0;i<e.length;i++)t.push(e[i].clone());return t}function If(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:wt.workingColorSpace}var dr={clone:On,merge:Wi},vv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_v=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Wt=class extends wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vv,this.fragmentShader=_v,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=On(e.uniforms),this.uniformsGroups=gv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=t[r.value]||null;break;case"c":this.uniforms[i].value=new Te().setHex(r.value);break;case"v2":this.uniforms[i].value=new de().fromArray(r.value);break;case"v3":this.uniforms[i].value=new R().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new xt().fromArray(r.value);break;case"m4":this.uniforms[i].value=new et().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Eh=class extends Wt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},si=class extends wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zc,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ar=class extends si{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var xv=class extends wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},yv=class extends wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ya(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT=="number"?new t(e):Array.prototype.slice.call(e)}function Po(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}function Mv(e){function t(a,n){return e[a]-e[n]}let i=e.length,r=new Array(i);for(let a=0;a!==i;++a)r[a]=a;return r.sort(t),r}function Wd(e,t,i){let r=e.length,a=new e.constructor(r);for(let n=0,s=0;s!==r;++n){let o=i[n]*t;for(let l=0;l!==t;++l)a[s++]=e[o+l]}return a}function bv(e,t,i,r){let a=1,n=e[0];for(;n!==void 0&&n[r]===void 0;)n=e[a++];if(n===void 0)return;let s=n[r];if(s!==void 0)if(Array.isArray(s))do s=n[r],s!==void 0&&(t.push(n.time),i.push(...s)),n=e[a++];while(n!==void 0);else if(s.toArray!==void 0)do s=n[r],s!==void 0&&(t.push(n.time),s.toArray(i,i.length)),n=e[a++];while(n!==void 0);else do s=n[r],s!==void 0&&(t.push(n.time),i.push(s)),n=e[a++];while(n!==void 0)}var ka=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],a=t[i-1];e:{t:{let n;i:{r:if(!(e<r)){for(let s=i+2;;){if(r===void 0){if(e<a)break r;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===s)break;if(a=r,r=t[++i],e<r)break t}n=t.length;break i}if(!(e>=a)){let s=t[1];e<s&&(i=2,a=s);for(let o=i-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=a,a=t[--i-1],e>=a)break t}n=i,i=0;break i}break e}for(;i<n;){let s=i+n>>>1;e<t[s]?n=s:i=s+1}if(r=t[i],a=t[i-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,a,r)}return this.interpolate_(i,a,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,a=e*r;for(let n=0;n!==r;++n)t[n]=i[a+n];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sv=class extends ka{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:td,endingEnd:td}}intervalChanged_(e,t,i){let r=this.parameterPositions,a=e-2,n=e+1,s=r[a],o=r[n];if(s===void 0)switch(this.getSettings_().endingStart){case id:a=e,s=2*t-i;break;case rd:a=r.length-2,s=t+r[a]-r[a+1];break;default:a=e,s=i}if(o===void 0)switch(this.getSettings_().endingEnd){case id:n=e,o=2*i-t;break;case rd:n=1,o=i+r[1]-r[0];break;default:n=e-1,o=t}let l=(i-t)*.5,c=this.valueSize;this._weightPrev=l/(t-s),this._weightNext=l/(o-i),this._offsetPrev=a*c,this._offsetNext=n*c}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-t)/(r-t),g=p*p,x=g*p,m=-d*x+2*d*g-d*p,f=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*p+1,M=(-1-u)*x+(1.5+u)*g+.5*p,y=u*x-u*g;for(let v=0;v!==s;++v)a[v]=m*n[c+v]+f*n[l+v]+M*n[o+v]+y*n[h+v];return a}},Tv=class extends ka{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=(i-t)/(r-t),h=1-c;for(let d=0;d!==s;++d)a[d]=n[l+d]*h+n[o+d]*c;return a}},Ev=class extends ka{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},wv=class extends ka{interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=e*s,l=o-s,c=this.inTangents,h=this.outTangents;if(!c||!h){let p=(i-t)/(r-t),g=1-p;for(let x=0;x!==s;++x)a[x]=n[l+x]*g+n[o+x]*p;return a}let d=s*2,u=e-1;for(let p=0;p!==s;++p){let g=n[l+p],x=n[o+p],m=u*d+p*2,f=h[m],M=h[m+1],y=e*d+p*2,v=c[y],S=c[y+1],A=Rv(i,t,f,v,r);a[p]=Pf(A,g,M,S,x)}return a}};function Pf(e,t,i,r,a){let n=1-e;return n*n*n*t+3*n*n*e*i+3*n*e*e*r+e*e*e*a}function Av(e,t,i,r,a){let n=1-e;return 3*n*n*(i-t)+6*n*e*(r-i)+3*e*e*(a-r)}function Rv(e,t,i,r,a){let n=(e-t)/(a-t);for(let s=0;s<8;s++){let o=Pf(n,t,i,r,a)-e;if(Math.abs(o)<1e-10)break;let l=Av(n,t,i,r,a);if(Math.abs(l)<1e-10)break;n=Math.max(0,Math.min(1,n-o/l))}return n}var Rr=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r),Po(e.settings)&&(i.settings={inTangents:ya(e.settings.inTangents,Array),outTangents:ya(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ev(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wv(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case In:t=this.InterpolantFactoryMethodDiscrete;break;case Pn:t=this.InterpolantFactoryMethodLinear;break;case Pl:t=this.InterpolantFactoryMethodSmooth;break;case ed:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Qe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return In;case this.InterpolantFactoryMethodLinear:return Pn;case this.InterpolantFactoryMethodSmooth:return Pl;case this.InterpolantFactoryMethodBezier:return ed}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e;Po(this.settings)&&(Xd(this.settings.inTangents,e),Xd(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,r=i.length,a=0,n=r-1;for(;a!==r&&i[a]<e;)++a;for(;n!==-1&&i[n]>t;)--n;if(++n,a!==0||n!==r){a>=n&&(n=Math.max(n,1),a=n-1);let s=this.getValueSize();this.times=i.slice(a,n),this.values=this.values.slice(a*s,n*s)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(pt("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,a=i.length;a===0&&(pt("KeyframeTrack: Track is empty.",this),e=!1);let n=null;for(let s=0;s!==a;s++){let o=i[s];if(typeof o=="number"&&isNaN(o)){pt("KeyframeTrack: Time is not a valid number.",this,s,o),e=!1;break}if(n!==null&&n>o){pt("KeyframeTrack: Out of order keys.",this,s,o,n),e=!1;break}n=o}if(r!==void 0&&Ig(r))for(let s=0,o=r.length;s!==o;++s){let l=r[s];if(isNaN(l)){pt("KeyframeTrack: Value is not a valid number.",this,s,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Pl,a=e.length-1,n=1;for(let s=1;s<a;++s){let o=!1,l=e[s],c=e[s+1];if(l!==c&&(s!==1||l!==e[0]))if(r)o=!0;else{let h=s*i,d=h-i,u=h+i;for(let p=0;p!==i;++p){let g=t[h+p];if(g!==t[d+p]||g!==t[u+p]){o=!0;break}}}if(o){if(s!==n){e[n]=e[s];let h=s*i,d=n*i;for(let u=0;u!==i;++u)t[d+u]=t[h+u]}++n}}if(a>0){e[n]=e[a];for(let s=a*i,o=n*i,l=0;l!==i;++l)t[o+l]=t[s+l];++n}return n!==e.length?(this.times=e.slice(0,n),this.values=t.slice(0,n*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,Po(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Xd(e,t){for(let i=0,r=e.length;i!==r;i+=2)e[i]*=t}Rr.prototype.ValueTypeName="";Rr.prototype.TimeBufferType=Float32Array;Rr.prototype.ValueBufferType=Float32Array;Rr.prototype.DefaultInterpolation=Pn;var zn=class extends Rr{constructor(e,t,i){super(e,t,i)}};zn.prototype.ValueTypeName="bool";zn.prototype.ValueBufferType=Array;zn.prototype.DefaultInterpolation=In;zn.prototype.InterpolantFactoryMethodLinear=void 0;zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Lf=class extends Rr{constructor(e,t,i,r){super(e,t,i,r)}};Lf.prototype.ValueTypeName="color";var Hn=class extends Rr{constructor(e,t,i,r){super(e,t,i,r)}};Hn.prototype.ValueTypeName="number";var Cv=class extends ka{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let a=this.resultBuffer,n=this.sampleValues,s=this.valueSize,o=(i-t)/(r-t),l=e*s;for(let c=l+s;l!==c;l+=4)hi.slerpFlat(a,0,n,l-s,n,l,o);return a}},Ga=class extends Rr{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new Cv(this.times,this.values,this.getValueSize(),e)}};Ga.prototype.ValueTypeName="quaternion";Ga.prototype.InterpolantFactoryMethodSmooth=void 0;var kn=class extends Rr{constructor(e,t,i){super(e,t,i)}};kn.prototype.ValueTypeName="string";kn.prototype.ValueBufferType=Array;kn.prototype.DefaultInterpolation=In;kn.prototype.InterpolantFactoryMethodLinear=void 0;kn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Rr{constructor(e,t,i,r){super(e,t,i,r)}};Gn.prototype.ValueTypeName="vector";var wh=class{constructor(e="",t=-1,i=[],r=yg){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=hr(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,r=1/(e.fps||1);for(let n=0,s=i.length;n!==s;++n)t.push(Pv(i[n]).scale(r));let a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a.userData=JSON.parse(e.userData||"{}"),a}static toJSON(e){let t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let a=0,n=i.length;a!==n;++a)t.push(Rr.toJSON(i[a]));return r}static CreateFromMorphTargetSequence(e,t,i,r){let a=t.length,n=[];for(let s=0;s<a;s++){let o=[],l=[];o.push((s+a-1)%a,s,(s+1)%a),l.push(0,1,0);let c=Mv(o);o=Wd(o,1,c),l=Wd(l,1,c),!r&&o[0]===0&&(o.push(a),l.push(l[0])),n.push(new Hn(".morphTargetInfluences["+t[s].name+"]",o,l).scale(1/i))}return new this(e,-1,n)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let r={},a=/^([\w-]*?)([\d]+)$/;for(let s=0,o=e.length;s<o;s++){let l=e[s],c=l.name.match(a);if(c&&c.length>1){let h=c[1],d=r[h];d||(r[h]=d=[]),d.push(l)}}let n=[];for(let s in r)n.push(this.CreateFromMorphTargetSequence(s,r[s],t,i));return n}resetDuration(){let e=this.tracks,t=0;for(let i=0,r=e.length;i!==r;++i){let a=this.tracks[i];t=Math.max(t,a.times[a.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Iv(e){switch(e.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Hn;case"vector":case"vector2":case"vector3":case"vector4":return Gn;case"color":return Lf;case"quaternion":return Ga;case"bool":case"boolean":return zn;case"string":return kn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+e)}function Pv(e){if(e.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Iv(e.type);if(e.times===void 0){let r=[],a=[];bv(e.keys,r,a,"value"),e.times=r,e.values=a}let i;return t.parse!==void 0?i=t.parse(e):i=new t(e.name,e.times,e.values,e.interpolation),Po(e.settings)&&(i.settings={inTangents:ya(e.settings.inTangents,Float32Array),outTangents:ya(e.settings.outTangents,Float32Array)}),i}var na={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(jd(e)||(this.files[e]=t))},get:function(e){if(this.enabled!==!1&&!jd(e))return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};function jd(e){try{let t=e.slice(e.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Lv=class{constructor(e,t,i){let r=this,a=!1,n=0,s=0,o,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(c){s++,a===!1&&r.onStart!==void 0&&r.onStart(c,n,s),a=!0},this.itemEnd=function(c){n++,r.onProgress!==void 0&&r.onProgress(c,n,s),n===s&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,h){return l.push(c,h),this},this.removeHandler=function(c){let h=l.indexOf(c);return h!==-1&&l.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=l.length;h<d;h+=2){let u=l[h],p=l[h+1];if(u.global&&(u.lastIndex=0),u.test(c))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Dv=new Lv,Va=class{constructor(e){this.manager=e!==void 0?e:Dv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,a){i.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Va.DEFAULT_MATERIAL_NAME="__DEFAULT";var ra={},Nv=class extends Error{constructor(e,t){super(e),this.response=t}},Ah=class extends Va{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=na.get(`file:${e}`);if(a!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0);return}if(ra[e]!==void 0){ra[e].push({onLoad:t,onProgress:i,onError:r});return}ra[e]=[],ra[e].push({onLoad:t,onProgress:i,onError:r});let n=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),s=this.mimeType,o=this.responseType;fetch(n).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let c=ra[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,p=u!==0,g=0,x=new ReadableStream({start(m){f();function f(){h.read().then(({done:M,value:y})=>{if(M)m.close();else{g+=y.byteLength;let v=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:u});for(let S=0,A=c.length;S<A;S++){let w=c[S];w.onProgress&&w.onProgress(v)}m.enqueue(y),f()}},M=>{m.error(M)})}}});return new Response(x)}else throw new Nv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(o){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(c=>new DOMParser().parseFromString(c,s));case"json":return l.json();default:if(s==="")return l.text();{let c=/charset="?([^;"\s]*)"?/i.exec(s),h=c&&c[1]?c[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(u=>d.decode(u))}}}).then(l=>{na.add(`file:${e}`,l);let c=ra[e];delete ra[e];for(let h=0,d=c.length;h<d;h++){let u=c[h];u.onLoad&&u.onLoad(l)}}).catch(l=>{let c=ra[e];if(c===void 0)throw this.manager.itemError(e),l;delete ra[e];for(let h=0,d=c.length;h<d;h++){let u=c[h];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hn=new WeakMap,Uv=class extends Va{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=na.get(`image:${e}`);if(n!==void 0){if(n.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);else{let h=hn.get(n);h===void 0&&(h=[],hn.set(n,h)),h.push({onLoad:t,onError:r})}return n}let s=ws("img");function o(){c(),t&&t(this);let h=hn.get(this)||[];for(let d=0;d<h.length;d++){let u=h[d];u.onLoad&&u.onLoad(this)}hn.delete(this),a.manager.itemEnd(e)}function l(h){c(),r&&r(h),na.remove(`image:${e}`);let d=hn.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(h)}hn.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function c(){s.removeEventListener("load",o,!1),s.removeEventListener("error",l,!1)}return s.addEventListener("load",o,!1),s.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),na.add(`image:${e}`,s),a.manager.itemStart(e),s.src=e,s}};var Vn=class extends Va{constructor(e){super(e)}load(e,t,i,r){let a=new Hi,n=new Uv(this.manager);return n.setCrossOrigin(this.crossOrigin),n.setPath(this.path),n.load(e,function(s){a.image=s,a.needsUpdate=!0,t!==void 0&&t(a)},i,r),a}},el=class extends ci{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Df=class extends el{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ci.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nc=new et,qd=new R,Yd=new R,Rh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Xi,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nn,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;qd.setFromMatrixPosition(e.matrixWorld),t.position.copy(qd),Yd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Yd),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,r){nc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(nc,e.coordinateSystem,e.reversedDepth);let a=this._frameExtents,n=r?r.z/a.x:1,s=r?r.w/a.y:1,o=r?r.x/a.x:0,l=r?r.y/a.y:0;e.coordinateSystem===Es||e.reversedDepth?t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,1,0,0,0,0,1):t.set(.5*n,0,0,.5*n+o,0,.5*s,0,.5*s+l,0,0,.5,.5,0,0,0,1),t.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Mo=new R,bo=new hi,Nr=new R,Ch=class extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=Tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Mo,bo,Nr),Nr.x===1&&Nr.y===1&&Nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,bo,Nr.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Mo,bo,Nr),Nr.x===1&&Nr.y===1&&Nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Mo,bo,Nr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_a=new R,Zd=new de,Kd=new de,Di=class extends Ch{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Dn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bn*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dn*2*Math.atan(Math.tan(bn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_a.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_a.x,_a.y).multiplyScalar(-e/_a.z),_a.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_a.x,_a.y).multiplyScalar(-e/_a.z)}getViewSize(e,t){return this.getViewBounds(e,Zd,Kd),t.subVectors(Kd,Zd)}setViewOffset(e,t,i,r,a,n){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bn*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r,n=this.view;if(this.view!==null&&this.view.enabled){let o=n.fullWidth,l=n.fullHeight;a+=n.offsetX*r/o,t-=n.offsetY*i/l,r*=n.width/o,i*=n.height/l}let s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ov=class extends Rh{constructor(){super(new Di(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Dn*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,a=e.distance||t.far;(i!==t.fov||r!==t.aspect||a!==t.far)&&(t.fov=i,t.aspect=r,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},tl=class extends el{constructor(e,t,i=0,r=Math.PI/3,a=0,n=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ci.DEFAULT_UP),this.updateMatrix(),this.target=new ci,this.distance=i,this.angle=r,this.penumbra=a,this.decay=n,this.map=null,this.shadow=new Ov}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Fv=class extends Rh{constructor(){super(new Di(90,1,.5,500)),this.isPointLightShadow=!0}},Nf=class extends el{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Fv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Wa=class extends Ch{constructor(e=-1,t=1,i=1,r=-1,a=.1,n=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=n,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,n){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=n,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,a=i-e,n=i+e,s=r+t,o=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,n=a+l*this.view.width,s-=c*this.view.offsetY,o=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,n,s,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Bv=class extends Rh{constructor(){super(new Wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Us=class extends el{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ci.DEFAULT_UP),this.updateMatrix(),this.target=new ci,this.shadow=new Bv}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Wn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Uf=class extends At{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var sc=new WeakMap,Of=class extends Va{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Qe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Qe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let a=this,n=na.get(`image-bitmap:${e}`);if(n!==void 0){if(a.manager.itemStart(e),n.then){n.then(l=>{sc.has(n)===!0?(r&&r(sc.get(n)),a.manager.itemError(e),a.manager.itemEnd(e)):(t&&t(l),a.manager.itemEnd(e))});return}setTimeout(function(){t&&t(n),a.manager.itemEnd(e)},0);return}let s={};s.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",s.headers=this.requestHeader,s.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let o=fetch(e,s).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},a.options,{colorSpaceConversion:"none"}))}).then(function(l){return na.add(`image-bitmap:${e}`,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){r&&r(l),sc.set(o,l),na.remove(`image-bitmap:${e}`),a.manager.itemError(e),a.manager.itemEnd(e)});na.add(`image-bitmap:${e}`,o),a.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var sS=new et,oS=new et,lS=new et;var un=-90,dn=1,zv=class extends ci{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Di(un,dn,e,t);r.layers=this.layers,this.add(r);let a=new Di(un,dn,e,t);a.layers=this.layers,this.add(a);let n=new Di(un,dn,e,t);n.layers=this.layers,this.add(n);let s=new Di(un,dn,e,t);s.layers=this.layers,this.add(s);let o=new Di(un,dn,e,t);o.layers=this.layers,this.add(o);let l=new Di(un,dn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,a,n,s,o]=t;for(let l of t)this.remove(l);if(e===Tr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),n.up.set(0,0,1),n.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(e===Es)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),n.up.set(0,0,-1),n.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[a,n,s,o,l,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,n),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(h,d,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Hv=class extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ff=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=kv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function kv(){this._document.hidden===!1&&this.reset()}var cS=new R,hS=new hi,uS=new R,dS=new R,pS=new R;var fS=new R,mS=new hi,gS=new R,vS=new R;var Ih="\\[\\]\\.:\\/",Gv=new RegExp("["+Ih+"]","g"),Ph="[^"+Ih+"]",Vv="[^"+Ih.replace("\\.","")+"]",Wv=/((?:WC+[\/:])*)/.source.replace("WC",Ph),Xv=/(WCOD+)?/.source.replace("WCOD",Vv),jv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),qv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),Yv=new RegExp("^"+Wv+Xv+jv+qv+"$"),Zv=["material","materials","bones","map"],Kv=class{constructor(e,t,i){let r=i||ai.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,a=i.length;r!==a;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},ai=class vn{constructor(t,i,r){this.path=i,this.parsedPath=r||vn.parseTrackName(i),this.node=vn.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new vn.Composite(t,i,r):new vn(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gv,"")}static parseTrackName(t){let i=Yv.exec(t);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},a=r.nodeName&&r.nodeName.lastIndexOf(".");if(a!==void 0&&a!==-1){let n=r.nodeName.substring(a+1);Zv.indexOf(n)!==-1&&(r.nodeName=r.nodeName.substring(0,a),r.objectName=n)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(n){for(let s=0;s<n.length;s++){let o=n[s];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},a=r(t.children);if(a)return a}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)t[i++]=r[a]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let a=0,n=r.length;a!==n;++a)r[a]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,a=i.propertyName,n=i.propertyIndex;if(t||(t=vn.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=i.objectIndex;switch(r){case"materials":if(!t.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){pt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){pt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){pt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){pt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){pt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(c!==void 0){if(t[c]===void 0){pt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let s=t[a];if(s===void 0){let c=i.nodeName;pt("PropertyBinding: Trying to update property for track: "+c+"."+a+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(n!==void 0){if(a==="morphTargetInfluences"){if(!t.geometry){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){pt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[n]!==void 0&&(n=t.morphTargetDictionary[n])}l=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=n}else s.fromArray!==void 0&&s.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(l=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=a;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ai.Composite=Kv;ai.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ai.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ai.prototype.GetterByBindingType=[ai.prototype._getValue_direct,ai.prototype._getValue_array,ai.prototype._getValue_arrayElement,ai.prototype._getValue_toArray];ai.prototype.SetterByBindingTypeAndVersioning=[[ai.prototype._setValue_direct,ai.prototype._setValue_direct_setNeedsUpdate,ai.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ai.prototype._setValue_array,ai.prototype._setValue_array_setNeedsUpdate,ai.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ai.prototype._setValue_arrayElement,ai.prototype._setValue_arrayElement_setNeedsUpdate,ai.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ai.prototype._setValue_fromArray,ai.prototype._setValue_fromArray_setNeedsUpdate,ai.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _S=new Float32Array(1);var xS=new et;var Rn,yS=(Rn=class{constructor(t,i,r,a){this.elements=[1,0,0,1],t!==void 0&&this.set(t,i,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(t,i=0){for(let r=0;r<4;r++)this.elements[r]=t[r+i];return this}set(t,i,r,a){let n=this.elements;return n[0]=t,n[2]=i,n[1]=r,n[3]=a,this}},Rn.prototype.isMatrix2=!0,Rn),MS=new de;var bS=new R,SS=new R,TS=new R,ES=new R,wS=new R,AS=new R,RS=new R;var CS=new R;var IS=new R,PS=new et,LS=new et;var DS=new R,NS=new Te,US=new Te;var OS=new R,FS=new R,BS=new R;var zS=new R,HS=new Ch;var kS=new Zi;var GS=new R;function $d(e,t,i,r){let a=$v(r);switch(i){case Ap:return e*t;case Ps:return e*t/a.components*a.byteLength;case nh:return e*t/a.components*a.byteLength;case Ba:return e*t*2/a.components*a.byteLength;case sh:return e*t*2/a.components*a.byteLength;case Rp:return e*t*3/a.components*a.byteLength;case qi:return e*t*4/a.components*a.byteLength;case oh:return e*t*4/a.components*a.byteLength;case Eo:case wo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Ro:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yc:case bc:return Math.max(e,16)*Math.max(t,8)/4;case xc:case Mc:return Math.max(e,8)*Math.max(t,8)/2;case Sc:case Tc:case wc:case Ac:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ec:case Do:case Rc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Ic:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Nc:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Bc:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case zc:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Hc:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case kc:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Gc:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Vc:case Wc:case Xc:return Math.ceil(e/4)*Math.ceil(t/4)*16;case jc:case qc:return Math.ceil(e/4)*Math.ceil(t/4)*8;case No:case Yc:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function $v(e){switch(e){case Xi:case Sp:return{byteLength:1,components:1};case Ss:case Tp:case _i:return{byteLength:2,components:1};case rh:case ah:return{byteLength:2,components:4};case Br:case ih:case cr:return{byteLength:4,components:1};case Ep:case wp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Bf(){let e=null,t=!1,i=null,r=null;function a(n,s){r=e.requestAnimationFrame(a),i(n,s)}return{start:function(){t!==!0&&i!==null&&e!==null&&(r=e.requestAnimationFrame(a),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(n){i=n},setContext:function(n){e=n}}}function Jv(e){let t=new WeakMap;function i(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=e.createBuffer();e.bindBuffer(l,u),e.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=e.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=e.SHORT;else if(c instanceof Uint32Array)p=e.UNSIGNED_INT;else if(c instanceof Int32Array)p=e.INT;else if(c instanceof Int8Array)p=e.BYTE;else if(c instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,c){let h=l.array,d=l.updateRanges;if(e.bindBuffer(c,o),d.length===0)e.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let x=d[p];e.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function n(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(e.deleteBuffer(l.buffer),t.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,i(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:a,remove:n,update:s}}var Qv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e_=`#ifdef USE_ALPHAHASH
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
#endif`,t_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n_=`#ifdef USE_AOMAP
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
#endif`,s_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,o_=`#ifdef USE_BATCHING
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
#endif`,l_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,c_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,u_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,d_=`#ifdef USE_IRIDESCENCE
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
#endif`,p_=`#ifdef USE_BUMPMAP
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
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,__=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,x_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,y_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,M_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,b_=`#define PI 3.141592653589793
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
} // validated`,S_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,T_=`vec3 transformedNormal = objectNormal;
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
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,R_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,C_="gl_FragColor = linearToOutputTexel( gl_FragColor );",I_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,P_=`#ifdef USE_ENVMAP
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
#endif`,L_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
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
#endif`,N_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U_=`#ifdef USE_ENVMAP
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
#endif`,O_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H_=`#ifdef USE_GRADIENTMAP
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
}`,k_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,W_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,X_=`#ifdef USE_ENVMAP
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
#endif`,j_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,q_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Y_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K_=`PhysicalMaterial material;
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
#endif`,$_=`uniform sampler2D dfgLUT;
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
}`,J_=`
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
#endif`,Q_=`#if defined( RE_IndirectDiffuse )
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
#endif`,ex=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cx=`#if defined( USE_POINTS_UV )
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
#endif`,hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ux=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,px=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mx=`#ifdef USE_MORPHTARGETS
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
#endif`,gx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_x=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
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
#endif`,Sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ex=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ax=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Rx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Cx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Px=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ux=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bx=`float getShadowMask() {
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
}`,zx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hx=`#ifdef USE_SKINNING
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
#endif`,kx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,Zx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$x=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Qx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ey=`uniform sampler2D t2D;
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
}`,ty=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ny=`#include <common>
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
}`,sy=`#if DEPTH_PACKING == 3200
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
}`,oy=`#define DISTANCE
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
}`,ly=`#define DISTANCE
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
}`,cy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`uniform float scale;
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
}`,dy=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,fy=`uniform vec3 diffuse;
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
}`,my=`#define LAMBERT
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
}`,gy=`#define LAMBERT
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
}`,vy=`#define MATCAP
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
}`,_y=`#define MATCAP
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
}`,xy=`#define NORMAL
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
}`,yy=`#define NORMAL
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
}`,My=`#define PHONG
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
}`,by=`#define PHONG
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
}`,Sy=`#define STANDARD
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
}`,Ty=`#define STANDARD
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
}`,Ey=`#define TOON
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
}`,wy=`#define TOON
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
}`,Ay=`uniform float size;
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
}`,Ry=`uniform vec3 diffuse;
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
}`,Cy=`#include <common>
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
}`,Iy=`uniform vec3 color;
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
}`,Py=`uniform float rotation;
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
}`,Ly=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:Qv,alphahash_pars_fragment:e_,alphamap_fragment:t_,alphamap_pars_fragment:i_,alphatest_fragment:r_,alphatest_pars_fragment:a_,aomap_fragment:n_,aomap_pars_fragment:s_,batching_pars_vertex:o_,batching_vertex:l_,begin_vertex:c_,beginnormal_vertex:h_,bsdfs:u_,iridescence_fragment:d_,bumpmap_pars_fragment:p_,clipping_planes_fragment:f_,clipping_planes_pars_fragment:m_,clipping_planes_pars_vertex:g_,clipping_planes_vertex:v_,color_fragment:__,color_pars_fragment:x_,color_pars_vertex:y_,color_vertex:M_,common:b_,cube_uv_reflection_fragment:S_,defaultnormal_vertex:T_,displacementmap_pars_vertex:E_,displacementmap_vertex:w_,emissivemap_fragment:A_,emissivemap_pars_fragment:R_,colorspace_fragment:C_,colorspace_pars_fragment:I_,envmap_fragment:P_,envmap_common_pars_fragment:L_,envmap_pars_fragment:D_,envmap_pars_vertex:N_,envmap_physical_pars_fragment:X_,envmap_vertex:U_,fog_vertex:O_,fog_pars_vertex:F_,fog_fragment:B_,fog_pars_fragment:z_,gradientmap_pars_fragment:H_,lightmap_pars_fragment:k_,lights_lambert_fragment:G_,lights_lambert_pars_fragment:V_,lights_pars_begin:W_,lights_toon_fragment:j_,lights_toon_pars_fragment:q_,lights_phong_fragment:Y_,lights_phong_pars_fragment:Z_,lights_physical_fragment:K_,lights_physical_pars_fragment:$_,lights_fragment_begin:J_,lights_fragment_maps:Q_,lights_fragment_end:ex,lightprobes_pars_fragment:tx,logdepthbuf_fragment:ix,logdepthbuf_pars_fragment:rx,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:nx,map_fragment:sx,map_pars_fragment:ox,map_particle_fragment:lx,map_particle_pars_fragment:cx,metalnessmap_fragment:hx,metalnessmap_pars_fragment:ux,morphinstance_vertex:dx,morphcolor_vertex:px,morphnormal_vertex:fx,morphtarget_pars_vertex:mx,morphtarget_vertex:gx,normal_fragment_begin:vx,normal_fragment_maps:_x,normal_pars_fragment:xx,normal_pars_vertex:yx,normal_vertex:Mx,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:Sx,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:Ex,iridescence_pars_fragment:wx,opaque_fragment:Ax,packing:Rx,premultiplied_alpha_fragment:Cx,project_vertex:Ix,dithering_fragment:Px,dithering_pars_fragment:Lx,roughnessmap_fragment:Dx,roughnessmap_pars_fragment:Nx,shadowmap_pars_fragment:Ux,shadowmap_pars_vertex:Ox,shadowmap_vertex:Fx,shadowmask_pars_fragment:Bx,skinbase_vertex:zx,skinning_pars_vertex:Hx,skinning_vertex:kx,skinnormal_vertex:Gx,specularmap_fragment:Vx,specularmap_pars_fragment:Wx,tonemapping_fragment:Xx,tonemapping_pars_fragment:jx,transmission_fragment:qx,transmission_pars_fragment:Yx,uv_pars_fragment:Zx,uv_pars_vertex:Kx,uv_vertex:$x,worldpos_vertex:Jx,background_vert:Qx,background_frag:ey,backgroundCube_vert:ty,backgroundCube_frag:iy,cube_vert:ry,cube_frag:ay,depth_vert:ny,depth_frag:sy,distance_vert:oy,distance_frag:ly,equirect_vert:cy,equirect_frag:hy,linedashed_vert:uy,linedashed_frag:dy,meshbasic_vert:py,meshbasic_frag:fy,meshlambert_vert:my,meshlambert_frag:gy,meshmatcap_vert:vy,meshmatcap_frag:_y,meshnormal_vert:xy,meshnormal_frag:yy,meshphong_vert:My,meshphong_frag:by,meshphysical_vert:Sy,meshphysical_frag:Ty,meshtoon_vert:Ey,meshtoon_frag:wy,points_vert:Ay,points_frag:Ry,shadow_vert:Cy,shadow_frag:Iy,sprite_vert:Py,sprite_frag:Ly},Le={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Or={basic:{uniforms:Wi([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Wi([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Te(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Wi([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Wi([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Wi([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Te(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Wi([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Wi([Le.points,Le.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Wi([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Wi([Le.common,Le.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Wi([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Wi([Le.sprite,Le.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:Wi([Le.common,Le.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:Wi([Le.lights,Le.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Or.physical={uniforms:Wi([Or.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var So={r:0,b:0,g:0},Dy=new et,zf=new xt;zf.set(-1,0,0,0,1,0,0,0,1);function Ny(e,t,i,r,a,n){let s=new Te(0),o=a===!0?0:1,l,c,h=null,d=0,u=null;function p(M){let y=M.isScene===!0?M.background:null;if(y&&y.isTexture){let v=M.backgroundBlurriness>0;y=t.get(y,v)}return y}function g(M){let y=!1,v=p(M);v===null?m(s,o):v&&v.isColor&&(m(v,1),y=!0);let S=e.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,n):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,n),(e.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function x(M,y){let v=p(y);v&&(v.isCubeTexture||v.mapping===qo)?(c===void 0&&(c=new dt(new kr(1,1,1),new Wt({name:"BackgroundCubeMaterial",uniforms:On(Or.backgroundCube.uniforms),vertexShader:Or.backgroundCube.vertexShader,fragmentShader:Or.backgroundCube.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zf),c.material.toneMapped=wt.getTransfer(v.colorSpace)!==kt,(h!==v||d!==v.version||u!==e.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new dt(new ui(2,2),new Wt({name:"BackgroundMaterial",uniforms:On(Or.background.uniforms),vertexShader:Or.background.vertexShader,fragmentShader:Or.background.fragmentShader,side:oa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=wt.getTransfer(v.colorSpace)!==kt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==e.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=e.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,y){M.getRGB(So,If(e)),i.buffers.color.setClear(So.r,So.g,So.b,y,n)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return s},setClearColor:function(M,y=1){s.set(M),o=y,m(s,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(s,o)},render:g,addToRenderList:x,dispose:f}}function Uy(e,t){let i=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},a=u(null),n=a,s=!1;function o(P,B,j,U,I){let k=!1,F=d(P,U,j,B);n!==F&&(n=F,c(n.object)),k=p(P,U,j,I),k&&g(P,U,j,I),I!==null&&t.update(I,e.ELEMENT_ARRAY_BUFFER),(k||s)&&(s=!1,v(P,B,j,U),I!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return e.createVertexArray()}function c(P){return e.bindVertexArray(P)}function h(P){return e.deleteVertexArray(P)}function d(P,B,j,U){let I=U.wireframe===!0,k=r[B.id];k===void 0&&(k={},r[B.id]=k);let F=P.isInstancedMesh===!0?P.id:0,ee=k[F];ee===void 0&&(ee={},k[F]=ee);let X=ee[j.id];X===void 0&&(X={},ee[j.id]=X);let K=X[I];return K===void 0&&(K=u(l()),X[I]=K),K}function u(P){let B=[],j=[],U=[];for(let I=0;I<i;I++)B[I]=0,j[I]=0,U[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:j,attributeDivisors:U,object:P,attributes:{},index:null}}function p(P,B,j,U){let I=n.attributes,k=B.attributes,F=0,ee=j.getAttributes();for(let X in ee)if(ee[X].location>=0){let K=I[X],$=k[X];if($===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),K===void 0||K.attribute!==$||$&&K.data!==$.data)return!0;F++}return n.attributesNum!==F||n.index!==U}function g(P,B,j,U){let I={},k=B.attributes,F=0,ee=j.getAttributes();for(let X in ee)if(ee[X].location>=0){let K=k[X];K===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(K=P.instanceColor));let $={};$.attribute=K,K&&K.data&&($.data=K.data),I[X]=$,F++}n.attributes=I,n.attributesNum=F,n.index=U}function x(){let P=n.newAttributes;for(let B=0,j=P.length;B<j;B++)P[B]=0}function m(P){f(P,0)}function f(P,B){let j=n.newAttributes,U=n.enabledAttributes,I=n.attributeDivisors;j[P]=1,U[P]===0&&(e.enableVertexAttribArray(P),U[P]=1),I[P]!==B&&(e.vertexAttribDivisor(P,B),I[P]=B)}function M(){let P=n.newAttributes,B=n.enabledAttributes;for(let j=0,U=B.length;j<U;j++)B[j]!==P[j]&&(e.disableVertexAttribArray(j),B[j]=0)}function y(P,B,j,U,I,k,F){F===!0?e.vertexAttribIPointer(P,B,j,I,k):e.vertexAttribPointer(P,B,j,U,I,k)}function v(P,B,j,U){x();let I=U.attributes,k=j.getAttributes(),F=B.defaultAttributeValues;for(let ee in k){let X=k[ee];if(X.location>=0){let K=I[ee];if(K===void 0&&(ee==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),ee==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){let $=K.normalized,xe=K.itemSize,be=t.get(K);if(be===void 0)continue;let qe=be.buffer,De=be.type,te=be.bytesPerElement,ae=De===e.INT||De===e.UNSIGNED_INT||K.gpuType===ih;if(K.isInterleavedBufferAttribute){let oe=K.data,Be=oe.stride,Ye=K.offset;if(oe.isInstancedInterleavedBuffer){for(let ce=0;ce<X.locationSize;ce++)f(X.location+ce,oe.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ce=0;ce<X.locationSize;ce++)m(X.location+ce);e.bindBuffer(e.ARRAY_BUFFER,qe);for(let ce=0;ce<X.locationSize;ce++)y(X.location+ce,xe/X.locationSize,De,$,Be*te,(Ye+xe/X.locationSize*ce)*te,ae)}else{if(K.isInstancedBufferAttribute){for(let oe=0;oe<X.locationSize;oe++)f(X.location+oe,K.meshPerAttribute);P.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let oe=0;oe<X.locationSize;oe++)m(X.location+oe);e.bindBuffer(e.ARRAY_BUFFER,qe);for(let oe=0;oe<X.locationSize;oe++)y(X.location+oe,xe/X.locationSize,De,$,xe*te,xe/X.locationSize*oe*te,ae)}}else if(F!==void 0){let $=F[ee];if($!==void 0)switch($.length){case 2:e.vertexAttrib2fv(X.location,$);break;case 3:e.vertexAttrib3fv(X.location,$);break;case 4:e.vertexAttrib4fv(X.location,$);break;default:e.vertexAttrib1fv(X.location,$)}}}}M()}function S(){b();for(let P in r){let B=r[P];for(let j in B){let U=B[j];for(let I in U){let k=U[I];for(let F in k)h(k[F].object),delete k[F];delete U[I]}}delete r[P]}}function A(P){if(r[P.id]===void 0)return;let B=r[P.id];for(let j in B){let U=B[j];for(let I in U){let k=U[I];for(let F in k)h(k[F].object),delete k[F];delete U[I]}}delete r[P.id]}function w(P){for(let B in r){let j=r[B];for(let U in j){let I=j[U];if(I[P.id]===void 0)continue;let k=I[P.id];for(let F in k)h(k[F].object),delete k[F];delete I[P.id]}}}function _(P){for(let B in r){let j=r[B],U=P.isInstancedMesh===!0?P.id:0,I=j[U];if(I!==void 0){for(let k in I){let F=I[k];for(let ee in F)h(F[ee].object),delete F[ee];delete I[k]}delete j[U],Object.keys(j).length===0&&delete r[B]}}}function b(){L(),s=!0,n!==a&&(n=a,c(n.object))}function L(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:b,resetDefaultState:L,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Oy(e,t,i){let r;function a(l){r=l}function n(l,c){e.drawArrays(r,l,c),i.update(c,r,1)}function s(l,c,h){h!==0&&(e.drawArraysInstanced(r,l,c,h),i.update(c,r,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];i.update(d,r,1)}this.setMode=a,this.render=n,this.renderInstances=s,this.renderMultiDraw=o}function Fy(e,t,i,r){let a;function n(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");a=e.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(w){return!(w!==qi&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let _=w===_i&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Xi&&w!==cr&&!_&&r.convert(w)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function l(w){if(w==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=i.precision!==void 0?i.precision:"highp",h=l(c);h!==c&&(Qe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&Qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),f=e.getParameter(e.MAX_VERTEX_ATTRIBS),M=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),v=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),S=e.getParameter(e.MAX_SAMPLES),A=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:n,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,maxSamples:S,samples:A}}function By(e){let t=this,i=null,r=0,a=!1,n=!1,s=new xa,o=new xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||r!==0||a;return a=u,r=d.length,p},this.beginShadows=function(){n=!0,h(null)},this.endShadows=function(){n=!1},this.setGlobalState=function(d,u){i=h(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,f=e.get(d);if(!a||g===null||g.length===0||n&&!m)n?h(null):c();else{let M=n?0:r,y=M*4,v=f.clippingState||null;l.value=v,v=h(g,u,y,p);for(let S=0;S!==y;++S)v[S]=i[S];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function h(d,u,p,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,v=p;y!==x;++y,v+=4)s.copy(d[y]).applyMatrix4(M,o),s.normal.toArray(m,v),m[v+3]=s.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var xn=4,zy=6,Hy=20,ky=256,hs=new Wa,Jd=new Te,oc=null,lc=0,cc=0,hc=!1,Gy=new R,La=new R,Ho=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,a={}){let{size:n=256,position:s=Gy}=a;oc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(n);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o,s),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ep(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(oc,lc,cc),this._renderer.xr.enabled=hc,e.scissorTest=!1,pn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fa||e.mapping===Cn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),oc=this._renderer.getRenderTarget(),lc=this._renderer.getActiveCubeFace(),cc=this._renderer.getActiveMipmapLevel(),hc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:_i,format:qi,colorSpace:Yi,depthBuffer:!1},r=Qd(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qd(e,t,i);let{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Vy(a)),this._blurMaterial=Xy(a,e,t),this._ggxMaterial=Wy(a,e,t)}return r}_compileMaterial(e){let t=new dt(new At,e);this._renderer.compile(t,hs)}_sceneToCubeUV(e,t,i,r,a){let n=new Di(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(Jd),l.toneMapping=Fr,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new dt(new kr,new xi({name:"PMREM.Background",side:Ni,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,p=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(Jd),p=!0);for(let x=0;x<6;x++){let m=x%3;m===0?(n.up.set(0,s[x],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x+o[x],a.y,a.z)):m===1?(n.up.set(0,0,s[x]),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y+o[x],a.z)):(n.up.set(0,s[x],0),n.position.set(a.x,a.y,a.z),n.lookAt(a.x,a.y,a.z+o[x]));let f=this._cubeSize;pn(r,m*f,x>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,n),l.render(e,n)}l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===Fa||e.mapping===Cn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=tp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ep());let a=r?this._cubemapMaterial:this._equirectMaterial,n=this._lodMeshes[0];n.material=a;let s=a.uniforms;s.envMap.value=e;let o=this._cubeSize;pn(t,0,0,3*o,2*o),i.setRenderTarget(t),i.render(n,hs)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let a=1;a<r;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=i}_applyGGXFilter(e,t,i){let r=this._renderer,a=this._pingPongRenderTarget,n=this._ggxMaterial,s=this._lodMeshes[i];s.material=n;let o=n.uniforms,l=i/(this._lodMeshes.length-1),c=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-c*c),d=l*1.25,u=h*d,{_lodMax:p}=this,g=this._sizeLods[i],x=3*g*(i>p-xn?i-p+xn:0),m=4*(this._cubeSize-g);o.envMap.value=e.texture,o.roughness.value=u,o.mipInt.value=p-t,pn(a,x,m,3*g,2*g),r.setRenderTarget(a),r.render(s,hs),o.envMap.value=a.texture,o.roughness.value=0,o.mipInt.value=p-i,pn(e,x,m,3*g,2*g),r.setRenderTarget(e),r.render(s,hs)}_blur(e,t,i,r){let a=this._pingPongRenderTarget,n=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,a,t,i,n),this._blurPass(a,e,i,i,n)}_blurPass(e,t,i,r,a){let n=this._renderer,s=this._blurMaterial,o=this._lodMeshes[r];o.material=s;let l=s.uniforms;l.envMap.value=e.texture,l.sigma.value=a,l.mipInt.value=this._lodMax-i;let c=this._sizeLods[r],h=3*c*(r>this._lodMax-xn?r-this._lodMax+xn:0),d=4*(this._cubeSize-c);pn(t,h,d,3*c,2*c),n.setRenderTarget(t),n.render(o,hs)}};function Vy(e){let t=[],i=[],r=e,a=e-xn+1+zy;for(let n=0;n<a;n++){let s=Math.pow(2,r);t.push(s);let o=1/(s-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,p=3,g=new Float32Array(p*u*d),x=new Float32Array(p*u*d);for(let f=0;f<d;f++){let M=f%3*2/3-1,y=f>2?0:-1,v=[M,y,0,M+2/3,y,0,M+2/3,y+1,0,M,y,0,M+2/3,y+1,0,M,y+1,0];g.set(v,p*u*f);for(let S=0;S<u;S++){let A=h[S*2]*2-1,w=h[S*2+1]*2-1;f===0?La.set(1,w,A):f===1?La.set(-A,1,-w):f===2?La.set(-A,w,1):f===3?La.set(-1,w,-A):f===4?La.set(-A,-1,w):La.set(A,w,-1),La.toArray(x,(f*u+S)*p)}}let m=new At;m.setAttribute("position",new Bt(g,p)),m.setAttribute("outputDirection",new Bt(x,p)),i.push(new dt(m,null)),r>xn&&r--}return{lodMeshes:i,sizeLods:t}}function Qd(e,t,i){let r=new Ti(e,t,i);return r.texture.mapping=qo,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pn(e,t,i,r,a){e.viewport.set(t,i,r,a),e.scissor.set(t,i,r,a)}function Wy(e,t,i){return new Wt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ky,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function Xy(e,t,i){return new Wt({name:"SphericalGaussianBlur",defines:{SAMPLES:Hy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:il(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function ep(){return new Wt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:il(),fragmentShader:`

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
		`,blending:Er,depthTest:!1,depthWrite:!1})}function tp(){return new Wt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Er,depthTest:!1,depthWrite:!1})}function il(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Hf=class extends Ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Kp(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new kr(5,5,5),a=new Wt({name:"CubemapFromEquirect",uniforms:On(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ni,blending:Er});a.uniforms.tEquirect.value=t;let n=new dt(r,a),s=t.minFilter;return t.minFilter===lr&&(t.minFilter=Kt),new zv(1,10,this).update(e,n),t.minFilter=s,n.geometry.dispose(),n.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){let a=e.getRenderTarget();for(let n=0;n<6;n++)e.setRenderTarget(this,n),e.clear(t,i,r);e.setRenderTarget(a)}};function jy(e){let t=new WeakMap,i=new WeakMap,r=null;function a(u,p=!1){return u==null?null:p?s(u):n(u)}function n(u){if(u&&u.isTexture){let p=u.mapping;if(p===Cl||p===Il)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new Hf(g.height);return x.fromEquirectangularTexture(e,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function s(u){if(u&&u.isTexture){let p=u.mapping,g=p===Cl||p===Il,x=p===Fa||p===Cn;if(g||x){let m=i.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return r===null&&(r=new Ho(e)),m=g?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||x&&M&&l(M)?(r===null&&(r=new Ho(e)),m=g?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===Cl?u.mapping=Fa:p===Il&&(u.mapping=Cn),u}function l(u){let p=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&p++;return p===g}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=i.get(p);g!==void 0&&(i.delete(p),g.dispose())}function d(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:d}}function qy(e){let t={};function i(r){if(t[r]!==void 0)return t[r];let a=e.getExtension(r);return t[r]=a,a}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let a=i(r);return a===null&&Mn("WebGLRenderer: "+r+" extension not supported."),a}}}function Yy(e,t,i,r){let a={},n=new WeakMap;function s(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",s),delete a[u.id];let p=n.get(u);p&&(t.remove(p),n.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return a[u.id]===!0||(u.addEventListener("dispose",s),a[u.id]=!0,i.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)t.update(u[p],e.ARRAY_BUFFER)}function c(d){let u=[],p=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(p!==null){let M=p.array;x=p.version;for(let y=0,v=M.length;y<v;y+=3){let S=M[y+0],A=M[y+1],w=M[y+2];u.push(S,A,A,w,w,S)}}else{let M=g.array;x=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){let S=y+0,A=y+1,w=y+2;u.push(S,A,A,w,w,S)}}let m=new(g.count>=65535?Gp:kp)(u,1);m.version=x;let f=n.get(d);f&&t.remove(f),n.set(d,m)}function h(d){let u=n.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return n.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Zy(e,t,i){let r;function a(d){r=d}let n,s;function o(d){n=d.type,s=d.bytesPerElement}function l(d,u){e.drawElements(r,u,n,d*s),i.update(u,r,1)}function c(d,u,p){p!==0&&(e.drawElementsInstanced(r,u,n,d*s,p),i.update(u,r,p))}function h(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,n,d,0,p);let g=0;for(let x=0;x<p;x++)g+=u[x];i.update(g,r,1)}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Ky(e){let t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(n,s,o){switch(i.calls++,s){case e.TRIANGLES:i.triangles+=o*(n/3);break;case e.LINES:i.lines+=o*(n/2);break;case e.LINE_STRIP:i.lines+=o*(n-1);break;case e.LINE_LOOP:i.lines+=o*n;break;case e.POINTS:i.points+=o*n;break;default:pt("WebGLInfo: Unknown draw mode:",s);break}}function a(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:a,update:r}}function $y(e,t,i){let r=new WeakMap,a=new Vt;function n(s,o,l){let c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=r.get(o);if(u===void 0||u.count!==d){let p=function(){_.dispose(),r.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],v=0;g===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let S=o.attributes.position.count*v,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*A*4*d),_=new Zo(w,S,A,d);_.type=cr,_.needsUpdate=!0;let b=v*4;for(let L=0;L<d;L++){let P=f[L],B=M[L],j=y[L],U=S*A*4*L;for(let I=0;I<P.count;I++){let k=I*b;g===!0&&(a.fromBufferAttribute(P,I),w[U+k+0]=a.x,w[U+k+1]=a.y,w[U+k+2]=a.z,w[U+k+3]=0),x===!0&&(a.fromBufferAttribute(B,I),w[U+k+4]=a.x,w[U+k+5]=a.y,w[U+k+6]=a.z,w[U+k+7]=0),m===!0&&(a.fromBufferAttribute(j,I),w[U+k+8]=a.x,w[U+k+9]=a.y,w[U+k+10]=a.z,w[U+k+11]=j.itemSize===4?a.w:1)}}u={count:d,texture:_,size:new de(S,A)},r.set(o,u),o.addEventListener("dispose",p)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",s.morphTexture,i);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(e,"morphTargetsTextureSize",u.size)}return{update:n}}function Jy(e,t,i,r,a){let n=new WeakMap;function s(c){let h=a.render.frame,d=c.geometry,u=t.get(c,d);if(n.get(u)!==h&&(t.update(u),n.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),n.get(c)!==h&&(i.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&i.update(c.instanceColor,e.ARRAY_BUFFER),n.set(c,h))),c.isSkinnedMesh){let p=c.skeleton;n.get(p)!==h&&(p.update(),n.set(p,h))}return u}function o(){n=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),i.remove(h.instanceMatrix),h.instanceColor!==null&&i.remove(h.instanceColor)}return{update:s,dispose:o}}var Qy={[ko]:"LINEAR_TONE_MAPPING",[Go]:"REINHARD_TONE_MAPPING",[Vo]:"CINEON_TONE_MAPPING",[Fn]:"ACES_FILMIC_TONE_MAPPING",[Xo]:"AGX_TONE_MAPPING",[jo]:"NEUTRAL_TONE_MAPPING",[Wo]:"CUSTOM_TONE_MAPPING"};function e1(e,t,i,r,a,n){let s=new Ti(t,i,{type:e,depthBuffer:a,stencilBuffer:n,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new At;c.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new nt([0,2,0,0,2,0],2));let h=new Eh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new dt(c,h),u=new Wa(-1,1,1,-1,0,1),p=null,g=null,x=!1,m,f=null,M=[],y=!1;this.setSize=function(v,S){s.setSize(v,S),o!==null&&o.setSize(v,S),l!==null&&l.setSize(v,S);for(let A=0;A<M.length;A++){let w=M[A];w.setSize&&w.setSize(v,S)}},this.setEffects=function(v){M=v,y=M.length>0&&M[0].isRenderPass===!0;let S=s.width,A=s.height;M.length>0&&o===null&&(o=new Ti(S,A,{type:_i,depthBuffer:!1,stencilBuffer:!1}),l=new Ti(S,A,{type:_i,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<M.length;w++){let _=M[w];_.setSize&&_.setSize(S,A)}},this.begin=function(v,S){if(x||v.toneMapping===Fr&&M.length===0)return!1;if(f=S,S!==null){let A=S.width,w=S.height;(s.width!==A||s.height!==w)&&this.setSize(A,w)}return y===!1&&v.setRenderTarget(s),m=v.toneMapping,v.toneMapping=Fr,!0},this.hasRenderPass=function(){return y},this.end=function(v,S){v.toneMapping=m,x=!0;let A=s,w=o;for(let _=0;_<M.length;_++){let b=M[_];b.enabled!==!1&&(b.render(v,w,A,S),b.needsSwap!==!1&&(A=w,w=w===o?l:o))}if(p!==v.outputColorSpace||g!==v.toneMapping){p=v.outputColorSpace,g=v.toneMapping,h.defines={},wt.getTransfer(p)===kt&&(h.defines.SRGB_TRANSFER="");let _=Qy[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,v.setRenderTarget(f),v.render(d,u),f=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){s.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var kf=new Hi,Qc=new As(1,1),Gf=new Zo,Vf=new t0,Wf=new Kp,ip=[],rp=[],ap=new Float32Array(16),np=new Float32Array(9),sp=new Float32Array(4);function Xn(e,t,i){let r=e[0];if(r<=0||r>0)return e;let a=t*i,n=ip[a];if(n===void 0&&(n=new Float32Array(a),ip[a]=n),t!==0){r.toArray(n,0);for(let s=1,o=0;s!==t;++s)o+=i,e[s].toArray(n,o)}return n}function Ei(e,t){if(e.length!==t.length)return!1;for(let i=0,r=e.length;i<r;i++)if(e[i]!==t[i])return!1;return!0}function wi(e,t){for(let i=0,r=t.length;i<r;i++)e[i]=t[i]}function rl(e,t){let i=rp[t];i===void 0&&(i=new Int32Array(t),rp[t]=i);for(let r=0;r!==t;++r)i[r]=e.allocateTextureUnit();return i}function t1(e,t){let i=this.cache;i[0]!==t&&(e.uniform1f(this.addr,t),i[0]=t)}function i1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ei(i,t))return;e.uniform2fv(this.addr,t),wi(i,t)}}function r1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(Ei(i,t))return;e.uniform3fv(this.addr,t),wi(i,t)}}function a1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ei(i,t))return;e.uniform4fv(this.addr,t),wi(i,t)}}function n1(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ei(i,t))return;e.uniformMatrix2fv(this.addr,!1,t),wi(i,t)}else{if(Ei(i,r))return;sp.set(r),e.uniformMatrix2fv(this.addr,!1,sp),wi(i,r)}}function s1(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ei(i,t))return;e.uniformMatrix3fv(this.addr,!1,t),wi(i,t)}else{if(Ei(i,r))return;np.set(r),e.uniformMatrix3fv(this.addr,!1,np),wi(i,r)}}function o1(e,t){let i=this.cache,r=t.elements;if(r===void 0){if(Ei(i,t))return;e.uniformMatrix4fv(this.addr,!1,t),wi(i,t)}else{if(Ei(i,r))return;ap.set(r),e.uniformMatrix4fv(this.addr,!1,ap),wi(i,r)}}function l1(e,t){let i=this.cache;i[0]!==t&&(e.uniform1i(this.addr,t),i[0]=t)}function c1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ei(i,t))return;e.uniform2iv(this.addr,t),wi(i,t)}}function h1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ei(i,t))return;e.uniform3iv(this.addr,t),wi(i,t)}}function u1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ei(i,t))return;e.uniform4iv(this.addr,t),wi(i,t)}}function d1(e,t){let i=this.cache;i[0]!==t&&(e.uniform1ui(this.addr,t),i[0]=t)}function p1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(Ei(i,t))return;e.uniform2uiv(this.addr,t),wi(i,t)}}function f1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(Ei(i,t))return;e.uniform3uiv(this.addr,t),wi(i,t)}}function m1(e,t){let i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(Ei(i,t))return;e.uniform4uiv(this.addr,t),wi(i,t)}}function g1(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a);let n;this.type===e.SAMPLER_2D_SHADOW?(Qc.compareFunction=i.isReversedDepthBuffer()?hh:ch,n=Qc):n=kf,i.setTexture2D(t||n,a)}function v1(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture3D(t||Vf,a)}function _1(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTextureCube(t||Wf,a)}function x1(e,t,i){let r=this.cache,a=i.allocateTextureUnit();r[0]!==a&&(e.uniform1i(this.addr,a),r[0]=a),i.setTexture2DArray(t||Gf,a)}function y1(e){switch(e){case 5126:return t1;case 35664:return i1;case 35665:return r1;case 35666:return a1;case 35674:return n1;case 35675:return s1;case 35676:return o1;case 5124:case 35670:return l1;case 35667:case 35671:return c1;case 35668:case 35672:return h1;case 35669:case 35673:return u1;case 5125:return d1;case 36294:return p1;case 36295:return f1;case 36296:return m1;case 35678:case 36198:case 36298:case 36306:case 35682:return g1;case 35679:case 36299:case 36307:return v1;case 35680:case 36300:case 36308:case 36293:return _1;case 36289:case 36303:case 36311:case 36292:return x1}}function M1(e,t){e.uniform1fv(this.addr,t)}function b1(e,t){let i=Xn(t,this.size,2);e.uniform2fv(this.addr,i)}function S1(e,t){let i=Xn(t,this.size,3);e.uniform3fv(this.addr,i)}function T1(e,t){let i=Xn(t,this.size,4);e.uniform4fv(this.addr,i)}function E1(e,t){let i=Xn(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,i)}function w1(e,t){let i=Xn(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,i)}function A1(e,t){let i=Xn(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,i)}function R1(e,t){e.uniform1iv(this.addr,t)}function C1(e,t){e.uniform2iv(this.addr,t)}function I1(e,t){e.uniform3iv(this.addr,t)}function P1(e,t){e.uniform4iv(this.addr,t)}function L1(e,t){e.uniform1uiv(this.addr,t)}function D1(e,t){e.uniform2uiv(this.addr,t)}function N1(e,t){e.uniform3uiv(this.addr,t)}function U1(e,t){e.uniform4uiv(this.addr,t)}function O1(e,t,i){let r=this.cache,a=t.length,n=rl(i,a);Ei(r,n)||(e.uniform1iv(this.addr,n),wi(r,n));let s;this.type===e.SAMPLER_2D_SHADOW?s=Qc:s=kf;for(let o=0;o!==a;++o)i.setTexture2D(t[o]||s,n[o])}function F1(e,t,i){let r=this.cache,a=t.length,n=rl(i,a);Ei(r,n)||(e.uniform1iv(this.addr,n),wi(r,n));for(let s=0;s!==a;++s)i.setTexture3D(t[s]||Vf,n[s])}function B1(e,t,i){let r=this.cache,a=t.length,n=rl(i,a);Ei(r,n)||(e.uniform1iv(this.addr,n),wi(r,n));for(let s=0;s!==a;++s)i.setTextureCube(t[s]||Wf,n[s])}function z1(e,t,i){let r=this.cache,a=t.length,n=rl(i,a);Ei(r,n)||(e.uniform1iv(this.addr,n),wi(r,n));for(let s=0;s!==a;++s)i.setTexture2DArray(t[s]||Gf,n[s])}function H1(e){switch(e){case 5126:return M1;case 35664:return b1;case 35665:return S1;case 35666:return T1;case 35674:return E1;case 35675:return w1;case 35676:return A1;case 5124:case 35670:return R1;case 35667:case 35671:return C1;case 35668:case 35672:return I1;case 35669:case 35673:return P1;case 5125:return L1;case 36294:return D1;case 36295:return N1;case 36296:return U1;case 35678:case 36198:case 36298:case 36306:case 35682:return O1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return z1}}var k1=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=y1(t.type)}},G1=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=H1(t.type)}},V1=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let a=0,n=r.length;a!==n;++a){let s=r[a];s.setValue(e,t[s.id],i)}}},uc=/(\w+)(\])?(\[|\.)?/g;function op(e,t){e.seq.push(t),e.map[t.id]=t}function W1(e,t,i){let r=e.name,a=r.length;for(uc.lastIndex=0;;){let n=uc.exec(r),s=uc.lastIndex,o=n[1],l=n[2]==="]",c=n[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===a){op(i,c===void 0?new k1(o,e,t):new G1(o,e,t));break}else{let h=i.map[o];h===void 0&&(h=new V1(o),op(i,h)),i=h}}}var Lo=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){let s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);W1(s,o,this)}let r=[],a=[];for(let n of this.seq)n.type===e.SAMPLER_2D_SHADOW||n.type===e.SAMPLER_CUBE_SHADOW||n.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(n):a.push(n);r.length>0&&(this.seq=r.concat(a))}setValue(e,t,i,r){let a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,n=t.length;a!==n;++a){let s=t[a],o=i[s.id];o.needsUpdate!==!1&&s.setValue(e,o.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,a=e.length;r!==a;++r){let n=e[r];n.id in t&&i.push(n)}return i}};function lp(e,t,i){let r=e.createShader(t);return e.shaderSource(r,i),e.compileShader(r),r}var X1=37297,j1=0;function q1(e,t){let i=e.split(`
`),r=[],a=Math.max(t-6,0),n=Math.min(t+6,i.length);for(let s=a;s<n;s++){let o=s+1;r.push(`${o===t?">":" "} ${o}: ${i[s]}`)}return r.join(`
`)}var cp=new xt;function Y1(e){wt._getMatrix(cp,wt.workingColorSpace,e);let t=`mat3( ${cp.elements.map(i=>i.toFixed(4))} )`;switch(wt.getTransfer(e)){case Uo:return[t,"LinearTransferOETF"];case kt:return[t,"sRGBTransferOETF"];default:return Qe("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function hp(e,t,i){let r=e.getShaderParameter(t,e.COMPILE_STATUS),a=(e.getShaderInfoLog(t)||"").trim();if(r&&a==="")return"";let n=/ERROR: 0:(\d+)/.exec(a);if(n){let s=parseInt(n[1]);return i.toUpperCase()+`

`+a+`

`+q1(e.getShaderSource(t),s)}else return a}function Z1(e,t){let i=Y1(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var K1={[ko]:"Linear",[Go]:"Reinhard",[Vo]:"Cineon",[Fn]:"ACESFilmic",[Xo]:"AgX",[jo]:"Neutral",[Wo]:"Custom"};function $1(e,t){let i=K1[t];return i===void 0?(Qe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var To=new R;function J1(){wt.getLuminanceCoefficients(To);let e=To.x.toFixed(4),t=To.y.toFixed(4),i=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q1(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function eM(e){let t=[];for(let i in e){let r=e[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function tM(e,t){let i={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){let n=e.getActiveAttrib(t,a),s=n.name,o=1;n.type===e.FLOAT_MAT2&&(o=2),n.type===e.FLOAT_MAT3&&(o=3),n.type===e.FLOAT_MAT4&&(o=4),i[s]={type:n.type,location:e.getAttribLocation(t,s),locationSize:o}}return i}function fs(e){return e!==""}function up(e,t){let i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function dp(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(e){return e.replace(iM,aM)}var rM=new Map;function aM(e,t){let i=Et[t];if(i===void 0){let r=rM.get(t);if(r!==void 0)i=Et[r],Qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return eh(i)}var nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pp(e){return e.replace(nM,sM)}function sM(e,t,i,r){let a="";for(let n=parseInt(t);n<parseInt(i);n++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+n+" ]").replace(/UNROLLED_LOOP_INDEX/g,n);return a}function fp(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}var oM={[yn]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function lM(e){return oM[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var cM={[Fa]:"ENVMAP_TYPE_CUBE",[Cn]:"ENVMAP_TYPE_CUBE",[qo]:"ENVMAP_TYPE_CUBE_UV"};function hM(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":cM[e.envMapMode]||"ENVMAP_TYPE_CUBE"}var uM={[Cn]:"ENVMAP_MODE_REFRACTION"};function dM(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":uM[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}var pM={[Mp]:"ENVMAP_BLENDING_MULTIPLY",[vg]:"ENVMAP_BLENDING_MIX",[_g]:"ENVMAP_BLENDING_ADD"};function fM(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":pM[e.combine]||"ENVMAP_BLENDING_NONE"}function mM(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function gM(e,t,i,r){let a=e.getContext(),n=i.defines,s=i.vertexShader,o=i.fragmentShader,l=lM(i),c=hM(i),h=dM(i),d=fM(i),u=mM(i),p=Q1(i),g=eM(n),x=a.createProgram(),m,f,M=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(fs).join(`
`),f.length>0&&(f+=`
`)):(m=[fp(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),f=[fp(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.envMap?"#define "+h:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fr?"#define TONE_MAPPING":"",i.toneMapping!==Fr?Et.tonemapping_pars_fragment:"",i.toneMapping!==Fr?$1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,Z1("linearToOutputTexel",i.outputColorSpace),J1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(fs).join(`
`)),s=eh(s),s=up(s,i),s=dp(s,i),o=eh(o),o=up(o,i),o=dp(o,i),s=pp(s),o=pp(o),i.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===ad?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===ad?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let y=M+m+s,v=M+f+o,S=lp(a,a.VERTEX_SHADER,y),A=lp(a,a.FRAGMENT_SHADER,v);a.attachShader(x,S),a.attachShader(x,A),i.index0AttributeName!==void 0?a.bindAttribLocation(x,0,i.index0AttributeName):i.hasPositionAttribute===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function w(P){if(e.debug.checkShaderErrors){let B=a.getProgramInfoLog(x)||"",j=a.getShaderInfoLog(S)||"",U=a.getShaderInfoLog(A)||"",I=B.trim(),k=j.trim(),F=U.trim(),ee=!0,X=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(ee=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(a,x,S,A);else{let K=hp(a,S,"vertex"),$=hp(a,A,"fragment");pt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+K+`
`+$)}else I!==""?Qe("WebGLProgram: Program Info Log:",I):(k===""||F==="")&&(X=!1);X&&(P.diagnostics={runnable:ee,programLog:I,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:f}})}a.deleteShader(S),a.deleteShader(A),_=new Lo(a,x),b=tM(a,x)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=a.getProgramParameter(x,X1)),L},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=j1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=A,this}var vM=0,_M=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new xM(e),t.set(e,i)),i}},xM=class{constructor(e){this.id=vM++,this.code=e,this.usedTimes=0}};function yM(e){return e===Ba||e===Do||e===No}function MM(e,t,i,r,a,n){let s=new Op,o=new _M,l=new Set,c=[],h=new Map,d=r.logarithmicDepthBuffer,u=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,b,L,P,B,j){let U=P.fog,I=B.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ee=t.get(_.envMap||k,F),X=ee&&ee.mapping===qo?ee.image.height:null,K=p[_.type];_.precision!==null&&(u=r.getMaxPrecision(_.precision),u!==_.precision&&Qe("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let $=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,xe=$!==void 0?$.length:0,be=0;I.morphAttributes.position!==void 0&&(be=1),I.morphAttributes.normal!==void 0&&(be=2),I.morphAttributes.color!==void 0&&(be=3);let qe,De,te,ae;if(K){let D=Or[K];qe=D.vertexShader,De=D.fragmentShader}else{qe=_.vertexShader,De=_.fragmentShader;let D=o.getVertexShaderStage(_),z=o.getFragmentShaderStage(_);o.update(_,D,z),te=D.id,ae=z.id}let oe=e.getRenderTarget(),Be=e.state.buffers.depth.getReversed(),Ye=B.isInstancedMesh===!0,ce=B.isBatchedMesh===!0,$e=!!_.map,he=!!_.matcap,se=!!ee,fe=!!_.aoMap,Re=!!_.lightMap,Se=!!_.bumpMap&&_.wireframe===!1,Ge=!!_.normalMap,Ve=!!_.displacementMap,tt=!!_.emissiveMap,st=!!_.metalnessMap,O=!!_.roughnessMap,bt=_.anisotropy>0,mt=_.clearcoat>0,vt=_.dispersion>0,C=_.retroreflectivity>0,T=_.iridescence>0,G=_.sheen>0,re=_.transmission>0,le=bt&&!!_.anisotropyMap,ye=mt&&!!_.clearcoatMap,Ie=mt&&!!_.clearcoatNormalMap,q=mt&&!!_.clearcoatRoughnessMap,Ee=T&&!!_.iridescenceMap,Ce=T&&!!_.iridescenceThicknessMap,Oe=G&&!!_.sheenColorMap,_e=G&&!!_.sheenRoughnessMap,Ke=!!_.specularMap,it=!!_.specularColorMap,ut=!!_.specularIntensityMap,St=re&&!!_.transmissionMap,V=re&&!!_.thicknessMap,ue=!!_.gradientMap,me=!!_.alphaMap,Fe=_.alphaTest>0,We=!!_.alphaHash,ge=!!_.extensions,Ne=Fr;_.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ne=e.toneMapping);let N={shaderID:K,shaderType:_.type,shaderName:_.name,vertexShader:qe,fragmentShader:De,defines:_.defines,customVertexShaderID:te,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:ce,batchingColor:ce&&B._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&B.instanceColor!==null,instancingMorph:Ye&&B.morphTexture!==null,outputColorSpace:oe===null?e.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:$e,matcap:he,envMap:se,envMapMode:se&&ee.mapping,envMapCubeUVHeight:X,aoMap:fe,lightMap:Re,bumpMap:Se,normalMap:Ge,displacementMap:Ve,emissiveMap:tt,normalMapObjectSpace:Ge&&_.normalMapType===bg,normalMapTangentSpace:Ge&&_.normalMapType===Zc,packedNormalMap:Ge&&_.normalMapType===Zc&&yM(_.normalMap.format),metalnessMap:st,roughnessMap:O,anisotropy:bt,anisotropyMap:le,clearcoat:mt,clearcoatMap:ye,clearcoatNormalMap:Ie,clearcoatRoughnessMap:q,dispersion:vt,retroreflection:C,iridescence:T,iridescenceMap:Ee,iridescenceThicknessMap:Ce,sheen:G,sheenColorMap:Oe,sheenRoughnessMap:_e,specularMap:Ke,specularColorMap:it,specularIntensityMap:ut,transmission:re,transmissionMap:St,thicknessMap:V,gradientMap:ue,opaque:_.transparent===!1&&_.blending===ms&&_.alphaToCoverage===!1,alphaMap:me,alphaTest:Fe,alphaHash:We,combine:_.combine,mapUv:$e&&g(_.map.channel),aoMapUv:fe&&g(_.aoMap.channel),lightMapUv:Re&&g(_.lightMap.channel),bumpMapUv:Se&&g(_.bumpMap.channel),normalMapUv:Ge&&g(_.normalMap.channel),displacementMapUv:Ve&&g(_.displacementMap.channel),emissiveMapUv:tt&&g(_.emissiveMap.channel),metalnessMapUv:st&&g(_.metalnessMap.channel),roughnessMapUv:O&&g(_.roughnessMap.channel),anisotropyMapUv:le&&g(_.anisotropyMap.channel),clearcoatMapUv:ye&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:q&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:_e&&g(_.sheenRoughnessMap.channel),specularMapUv:Ke&&g(_.specularMap.channel),specularColorMapUv:it&&g(_.specularColorMap.channel),specularIntensityMapUv:ut&&g(_.specularIntensityMap.channel),transmissionMapUv:St&&g(_.transmissionMap.channel),thicknessMapUv:V&&g(_.thicknessMap.channel),alphaMapUv:me&&g(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Ge||bt),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!I.attributes.uv&&($e||me),fog:!!U,useFog:_.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&Ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Be,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:be,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:n.numPlanes,numClipIntersection:n.numIntersection,dithering:_.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ne,decodeVideoTexture:$e&&_.map.isVideoTexture===!0&&wt.getTransfer(_.map.colorSpace)===kt,decodeVideoTextureEmissive:tt&&_.emissiveMap.isVideoTexture===!0&&wt.getTransfer(_.emissiveMap.colorSpace)===kt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pi,flipSided:_.side===Ni,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ge&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&_.extensions.multiDraw===!0||ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return N.vertexUv1s=l.has(1),N.vertexUv2s=l.has(2),N.vertexUv3s=l.has(3),l.clear(),N}function m(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let L in _.defines)b.push(L),b.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(f(b,_),M(b,_),b.push(e.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function f(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function M(_,b){s.disableAll(),b.instancing&&s.enable(0),b.instancingColor&&s.enable(1),b.instancingMorph&&s.enable(2),b.matcap&&s.enable(3),b.envMap&&s.enable(4),b.normalMapObjectSpace&&s.enable(5),b.normalMapTangentSpace&&s.enable(6),b.clearcoat&&s.enable(7),b.iridescence&&s.enable(8),b.alphaTest&&s.enable(9),b.vertexColors&&s.enable(10),b.vertexAlphas&&s.enable(11),b.vertexUv1s&&s.enable(12),b.vertexUv2s&&s.enable(13),b.vertexUv3s&&s.enable(14),b.vertexTangents&&s.enable(15),b.anisotropy&&s.enable(16),b.alphaHash&&s.enable(17),b.batching&&s.enable(18),b.dispersion&&s.enable(19),b.retroreflection&&s.enable(24),b.batchingColor&&s.enable(20),b.gradientMap&&s.enable(21),b.packedNormalMap&&s.enable(22),b.vertexNormals&&s.enable(23),_.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),b.numLightProbeGrids>0&&s.enable(22),b.hasPositionAttribute&&s.enable(23),_.push(s.mask)}function y(_){let b=p[_.type],L;if(b){let P=Or[b];L=dr.clone(P.uniforms)}else L=_.uniforms;return L}function v(_,b){let L=h.get(b);return L!==void 0?++L.usedTimes:(L=new gM(e,b,_,a),c.push(L),h.set(b,L)),L}function S(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function w(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:w}}function bM(){let e=new WeakMap;function t(s){return e.has(s)}function i(s){let o=e.get(s);return o===void 0&&(o={},e.set(s,o)),o}function r(s){e.delete(s)}function a(s,o,l){e.get(s)[o]=l}function n(){e=new WeakMap}return{has:t,get:i,remove:r,update:a,dispose:n}}function SM(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function mp(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function gp(){let e=[],t=0,i=[],r=[],a=[];function n(){t=0,i.length=0,r.length=0,a.length=0}function s(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,x,m,f){let M=e[t];return M===void 0?(M={id:u.id,object:u,geometry:p,material:g,materialVariant:s(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:f},e[t]=M):(M.id=u.id,M.object=u,M.geometry=p,M.material=g,M.materialVariant=s(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=f),t++,M}function l(u,p,g,x,m,f,M){M.reversedDepth===!0&&(m=-m);let y=o(u,p,g,x,m,f);g.transmission>0?r.push(y):g.transparent===!0?a.push(y):i.push(y)}function c(u,p,g,x,m,f){let M=o(u,p,g,x,m,f);g.transmission>0?r.unshift(M):g.transparent===!0?a.unshift(M):i.unshift(M)}function h(u,p){i.length>1&&i.sort(u||SM),r.length>1&&r.sort(p||mp),a.length>1&&a.sort(p||mp)}function d(){for(let u=t,p=e.length;u<p;u++){let g=e[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:r,transparent:a,init:n,push:l,unshift:c,finish:d,sort:h}}function TM(){let e=new WeakMap;function t(r,a){let n=e.get(r),s;return n===void 0?(s=new gp,e.set(r,[s])):a>=n.length?(s=new gp,n.push(s)):s=n[a],s}function i(){e=new WeakMap}return{get:t,dispose:i}}function EM(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new R,color:new Te};break;case"SpotLight":i={position:new R,direction:new R,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new R,color:new Te,distance:0,decay:0};break;case"HemisphereLight":i={direction:new R,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":i={color:new Te,position:new R,halfWidth:new R,halfHeight:new R};break}return e[t.id]=i,i}}}function wM(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=i,i}}}var AM=0;function RM(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function CM(e){let t=new EM,i=wM(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new R);let a=new R,n=new et,s=new et;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,M=0,y=0,v=0,S=0,A=0,w=0,_=0,b=0,L=0;c.sort(RM);for(let B=0,j=c.length;B<j;B++){let U=c[B],I=U.color,k=U.intensity,F=U.distance,ee=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Ba?ee=U.shadow.map.texture:ee=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)h+=I.r*k,d+=I.g*k,u+=I.b*k;else if(U.isLightProbe){for(let X=0;X<9;X++)r.probe[X].addScaledVector(U.sh.coefficients[X],k);L++}else if(U.isSunLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let K=U.shadow,$=i.get(U);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),r.sunShadow[g]=$,r.sunShadowMap[g]=ee;let xe=K.getViewportCount();for(let be=0;be<xe;be++)r.sunShadowMatrix[x+be]=K.getMatrix(be),r.sunShadowCascade[x+be]=K._cascadeData[be];x+=xe,g++}r.sun[p]=X,p++}else if(U.isDirectionalLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let K=U.shadow,$=i.get(U);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,r.directionalShadow[m]=$,r.directionalShadowMap[m]=ee,r.directionalShadowMatrix[m]=U.shadow.matrix,S++}r.directional[m]=X,m++}else if(U.isSpotLight){let X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(I).multiplyScalar(k),X.distance=F,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,r.spot[M]=X;let K=U.shadow;if(U.map&&(r.spotLightMap[_]=U.map,_++,K.updateMatrices(U),U.castShadow&&b++),r.spotLightMatrix[M]=K.matrix,U.castShadow){let $=i.get(U);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,r.spotShadow[M]=$,r.spotShadowMap[M]=ee,w++}M++}else if(U.isRectAreaLight){let X=t.get(U);X.color.copy(I).multiplyScalar(k),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=X,y++}else if(U.isPointLight){let X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity),X.distance=U.distance,X.decay=U.decay,U.castShadow){let K=U.shadow,$=i.get(U);$.shadowIntensity=K.intensity,$.shadowBias=K.bias,$.shadowNormalBias=K.normalBias,$.shadowRadius=K.radius,$.shadowMapSize=K.mapSize,$.shadowCameraNear=K.camera.near,$.shadowCameraFar=K.camera.far,r.pointShadow[f]=$,r.pointShadowMap[f]=ee,r.pointShadowMatrix[f]=U.shadow.matrix,A++}r.point[f]=X,f++}else if(U.isHemisphereLight){let X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(k),X.groundColor.copy(U.groundColor).multiplyScalar(k),r.hemi[v]=X,v++}}y>0&&(e.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=u;let P=r.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==M||P.rectAreaLength!==y||P.hemiLength!==v||P.numSunShadows!==g||P.numDirectionalShadows!==S||P.numPointShadows!==A||P.numSpotShadows!==w||P.numSpotMaps!==_||P.numLightProbes!==L)&&(r.sun.length=p,r.directional.length=m,r.spot.length=M,r.rectArea.length=y,r.point.length=f,r.hemi.length=v,r.sunShadow.length=g,r.sunShadowMap.length=g,r.sunShadowMatrix.length=x,r.sunShadowCascade.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.directionalShadowMatrix.length=S,r.pointShadow.length=A,r.pointShadowMap.length=A,r.pointShadowMatrix.length=A,r.spotShadow.length=w,r.spotShadowMap.length=w,r.spotLightMatrix.length=w+_-b,r.spotLightMap.length=_,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=L,P.sunLength=p,P.directionalLength=m,P.pointLength=f,P.spotLength=M,P.rectAreaLength=y,P.hemiLength=v,P.numSunShadows=g,P.numDirectionalShadows=S,P.numPointShadows=A,P.numSpotShadows=w,P.numSpotMaps=_,P.numLightProbes=L,r.version=AM++)}function l(c,h){let d=0,u=0,p=0,g=0,x=0,m=0,f=h.matrixWorldInverse;for(let M=0,y=c.length;M<y;M++){let v=c[M];if(v.isSunLight){let S=r.sun[d];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(f),d++}else if(v.isDirectionalLight){let S=r.directional[u];S.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(f),u++}else if(v.isSpotLight){let S=r.spot[g];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(v.matrixWorld),a.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(f),g++}else if(v.isRectAreaLight){let S=r.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),s.identity(),n.copy(v.matrixWorld),n.premultiply(f),s.extractRotation(n),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),x++}else if(v.isPointLight){let S=r.point[p];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(f),p++}else if(v.isHemisphereLight){let S=r.hemi[m];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:r}}function vp(e){let t=new CM(e),i=[],r=[],a=[];function n(u){d.camera=u,i.length=0,r.length=0,a.length=0}function s(u){i.push(u)}function o(u){r.push(u)}function l(u){a.push(u)}function c(){t.setup(i)}function h(u){t.setupView(i,u)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:n,state:d,setupLights:c,setupLightsView:h,pushLight:s,pushShadow:o,pushLightProbeGrid:l}}function IM(e){let t=new WeakMap;function i(a,n=0){let s=t.get(a),o;return s===void 0?(o=new vp(e),t.set(a,[o])):n>=s.length?(o=new vp(e),s.push(o)):o=s[n],o}function r(){t=new WeakMap}return{get:i,dispose:r}}var PM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LM=`uniform sampler2D shadow_pass;
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
}`,DM=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],NM=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],_p=new et,us=new R,dc=new R;function UM(e,t,i){let r=new Nn,a=new de,n=new de,s=new Vt,o=new xv,l=new yv,c={},h=i.maxTextureSize,d={[oa]:Ni,[Ni]:oa,[Pi]:Pi},u=new Wt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:PM,fragmentShader:LM}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new dt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yn;let f=this.type;this.render=function(A,w,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===Jm&&(Qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=yn);let b=e.getRenderTarget(),L=e.getActiveCubeFace(),P=e.getActiveMipmapLevel(),B=e.state;B.setBlending(Er),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let j=f!==this.type;j&&w.traverse(function(U){U.material&&(Array.isArray(U.material)?U.material.forEach(I=>I.needsUpdate=!0):U.material.needsUpdate=!0)});for(let U=0,I=A.length;U<I;U++){let k=A[U],F=k.shadow;if(F===void 0){Qe("WebGLShadowMap:",k,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;a.copy(F.mapSize);let ee=F.getFrameExtents();a.multiply(ee),n.copy(F.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(n.x=Math.floor(h/ee.x),a.x=n.x*ee.x,F.mapSize.x=n.x),a.y>h&&(n.y=Math.floor(h/ee.y),a.y=n.y*ee.y,F.mapSize.y=n.y));let X=e.state.buffers.depth.getReversed();if(F.camera._reversedDepth=X,F.map===null||j===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ds){if(k.isPointLight){Qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Ti(a.x,a.y,{format:Ba,type:_i,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),F.map.texture.name=k.name+".shadowMap",F.map.depthTexture=new As(a.x,a.y,cr),F.map.depthTexture.name=k.name+".shadowMapDepth",F.map.depthTexture.format=ca,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=gi,F.map.depthTexture.magFilter=gi}else k.isPointLight?(F.map=new Hf(a.x),F.map.depthTexture=new E0(a.x,Br)):(F.map=new Ti(a.x,a.y),F.map.depthTexture=new As(a.x,a.y,Br)),F.map.depthTexture.name=k.name+".shadowMap",F.map.depthTexture.format=ca,this.type===yn?(F.map.depthTexture.compareFunction=X?hh:ch,F.map.depthTexture.minFilter=Kt,F.map.depthTexture.magFilter=Kt):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=gi,F.map.depthTexture.magFilter=gi);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==a.x||F.map.height!==a.y)&&F.map.setSize(a.x,a.y);let K=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();k.isPointLight!==!0&&F.updateMatrices(k,_);for(let $=0;$<K;$++){let xe=F.getCamera($);if(k.isPointLight){let be=F.camera,qe=F.matrix,De=k.distance||be.far;De!==be.far&&(be.far=De,be.updateProjectionMatrix()),us.setFromMatrixPosition(k.matrixWorld),be.position.copy(us),dc.copy(be.position),dc.add(DM[$]),be.up.copy(NM[$]),be.lookAt(dc),be.updateMatrixWorld(),qe.makeTranslation(-us.x,-us.y,-us.z),_p.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),F._frustum.setFromProjectionMatrix(_p,be.coordinateSystem,be.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)e.setRenderTarget(F.map,$),e.clear();else{$===0&&(e.setRenderTarget(F.map),e.clear());let be=F.getViewport($);s.set(n.x*be.x,n.y*be.y,n.x*be.z,n.y*be.w),B.viewport(s)}r=F.getFrustum($),v(w,_,xe,k,this.type)}F.isPointLightShadow!==!0&&this.type===ds&&M(F,_),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,e.setRenderTarget(b,L,P)};function M(A,w){let _=t.update(x);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ti(a.x,a.y,{format:Ba,type:_i}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,e.setRenderTarget(A.mapPass),e.clear(),e.renderBufferDirect(w,null,_,u,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value.set(A.map.width,A.map.height),p.uniforms.radius.value=A.radius,e.setRenderTarget(A.map),e.clear(),e.renderBufferDirect(w,null,_,p,x,null)}function y(A,w,_,b){let L=null,P=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)L=P;else if(L=_.isPointLight===!0?l:o,e.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let B=L.uuid,j=w.uuid,U=c[B];U===void 0&&(U={},c[B]=U);let I=U[j];I===void 0&&(I=L.clone(),U[j]=I,w.addEventListener("dispose",S)),L=I}if(L.visible=w.visible,L.wireframe=w.wireframe,b===ds?L.side=w.shadowSide!==null?w.shadowSide:w.side:L.side=w.shadowSide!==null?w.shadowSide:d[w.side],L.alphaMap=w.alphaMap,L.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,L.map=w.map,L.clipShadows=w.clipShadows,L.clippingPlanes=w.clippingPlanes,L.clipIntersection=w.clipIntersection,L.displacementMap=w.displacementMap,L.displacementScale=w.displacementScale,L.displacementBias=w.displacementBias,L.wireframeLinewidth=w.wireframeLinewidth,L.linewidth=w.linewidth,_.isPointLight===!0&&L.isMeshDistanceMaterial===!0){let B=e.properties.get(L);B.light=_}return L}function v(A,w,_,b,L){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&L===ds)&&(!A.frustumCulled||A.intersectsFrustum(r))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);let B=t.update(A),j=A.material;if(Array.isArray(j)){let U=B.groups;for(let I=0,k=U.length;I<k;I++){let F=U[I],ee=j[F.materialIndex];if(ee&&ee.visible){let X=y(A,ee,b,L);A.onBeforeShadow(e,A,w,_,B,X,F),e.renderBufferDirect(_,null,B,X,A,F),A.onAfterShadow(e,A,w,_,B,X,F)}}}else if(j.visible){let U=y(A,j,b,L);A.onBeforeShadow(e,A,w,_,B,U,null),e.renderBufferDirect(_,null,B,U,A,null),A.onAfterShadow(e,A,w,_,B,U,null)}}let P=A.children;for(let B=0,j=P.length;B<j;B++)v(P[B],w,_,b,L)}function S(A){A.target.removeEventListener("dispose",S);for(let w in c){let _=c[w],b=A.target.uuid;b in _&&(_[b].dispose(),delete _[b])}}}function OM(e,t){function i(){let V=!1,ue=new Vt,me=null,Fe=new Vt(0,0,0,0);return{setMask:function(We){me!==We&&!V&&(e.colorMask(We,We,We,We),me=We)},setLocked:function(We){V=We},setClear:function(We,ge,Ne,N,D){D===!0&&(We*=N,ge*=N,Ne*=N),ue.set(We,ge,Ne,N),Fe.equals(ue)===!1&&(e.clearColor(We,ge,Ne,N),Fe.copy(ue))},reset:function(){V=!1,me=null,Fe.set(-1,0,0,0)}}}function r(){let V=!1,ue=!1,me=null,Fe=null,We=null;return{setReversed:function(ge){if(ue!==ge){let Ne=t.get("EXT_clip_control");ge?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ue=ge;let N=We;We=null,this.setClear(N)}},getReversed:function(){return ue},setTest:function(ge){ge?oe(e.DEPTH_TEST):Be(e.DEPTH_TEST)},setMask:function(ge){me!==ge&&!V&&(e.depthMask(ge),me=ge)},setFunc:function(ge){if(ue&&(ge=Dg[ge]),Fe!==ge){switch(ge){case pc:e.depthFunc(e.NEVER);break;case fc:e.depthFunc(e.ALWAYS);break;case mc:e.depthFunc(e.LESS);break;case ys:e.depthFunc(e.LEQUAL);break;case gc:e.depthFunc(e.EQUAL);break;case vc:e.depthFunc(e.GEQUAL);break;case Ms:e.depthFunc(e.GREATER);break;case _c:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Fe=ge}},setLocked:function(ge){V=ge},setClear:function(ge){We!==ge&&(We=ge,ue&&(ge=1-ge),e.clearDepth(ge))},reset:function(){V=!1,me=null,Fe=null,We=null,ue=!1}}}function a(){let V=!1,ue=null,me=null,Fe=null,We=null,ge=null,Ne=null,N=null,D=null;return{setTest:function(z){V||(z?oe(e.STENCIL_TEST):Be(e.STENCIL_TEST))},setMask:function(z){ue!==z&&!V&&(e.stencilMask(z),ue=z)},setFunc:function(z,ie,ne){(me!==z||Fe!==ie||We!==ne)&&(e.stencilFunc(z,ie,ne),me=z,Fe=ie,We=ne)},setOp:function(z,ie,ne){(ge!==z||Ne!==ie||N!==ne)&&(e.stencilOp(z,ie,ne),ge=z,Ne=ie,N=ne)},setLocked:function(z){V=z},setClear:function(z){D!==z&&(e.clearStencil(z),D=z)},reset:function(){V=!1,ue=null,me=null,Fe=null,We=null,ge=null,Ne=null,N=null,D=null}}}let n=new i,s=new r,o=new a,l=new WeakMap,c=new WeakMap,h={},d={},u={},p=new WeakMap,g=[],x=null,m=!1,f=null,M=null,y=null,v=null,S=null,A=null,w=null,_=new Te(0,0,0),b=0,L=!1,P=null,B=null,j=null,U=null,I=null,k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,ee=0,X=e.getParameter(e.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),F=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),F=ee>=2);let K=null,$={},xe=e.getParameter(e.SCISSOR_BOX),be=e.getParameter(e.VIEWPORT),qe=new Vt().fromArray(xe),De=new Vt().fromArray(be);function te(V,ue,me,Fe){let We=new Uint8Array(4),ge=e.createTexture();e.bindTexture(V,ge),e.texParameteri(V,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(V,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Ne=0;Ne<me;Ne++)V===e.TEXTURE_3D||V===e.TEXTURE_2D_ARRAY?e.texImage3D(ue,0,e.RGBA,1,1,Fe,0,e.RGBA,e.UNSIGNED_BYTE,We):e.texImage2D(ue+Ne,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,We);return ge}let ae={};ae[e.TEXTURE_2D]=te(e.TEXTURE_2D,e.TEXTURE_2D,1),ae[e.TEXTURE_CUBE_MAP]=te(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[e.TEXTURE_2D_ARRAY]=te(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),ae[e.TEXTURE_3D]=te(e.TEXTURE_3D,e.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(e.DEPTH_TEST),s.setFunc(ys),Se(!1),Ge(Ku),oe(e.CULL_FACE),fe(Er);function oe(V){h[V]!==!0&&(e.enable(V),h[V]=!0)}function Be(V){h[V]!==!1&&(e.disable(V),h[V]=!1)}function Ye(V,ue){return u[V]!==ue?(e.bindFramebuffer(V,ue),u[V]=ue,V===e.DRAW_FRAMEBUFFER&&(u[e.FRAMEBUFFER]=ue),V===e.FRAMEBUFFER&&(u[e.DRAW_FRAMEBUFFER]=ue),!0):!1}function ce(V,ue){let me=g,Fe=!1;if(V){me=p.get(ue),me===void 0&&(me=[],p.set(ue,me));let We=V.textures;if(me.length!==We.length||me[0]!==e.COLOR_ATTACHMENT0){for(let ge=0,Ne=We.length;ge<Ne;ge++)me[ge]=e.COLOR_ATTACHMENT0+ge;me.length=We.length,Fe=!0}}else me[0]!==e.BACK&&(me[0]=e.BACK,Fe=!0);Fe&&e.drawBuffers(me)}function $e(V){return x!==V?(e.useProgram(V),x=V,!0):!1}let he={[fn]:e.FUNC_ADD,[eg]:e.FUNC_SUBTRACT,[tg]:e.FUNC_REVERSE_SUBTRACT};he[ig]=e.MIN,he[rg]=e.MAX;let se={[ag]:e.ZERO,[ng]:e.ONE,[sg]:e.SRC_COLOR,[xp]:e.SRC_ALPHA,[dg]:e.SRC_ALPHA_SATURATE,[hg]:e.DST_COLOR,[lg]:e.DST_ALPHA,[og]:e.ONE_MINUS_SRC_COLOR,[yp]:e.ONE_MINUS_SRC_ALPHA,[ug]:e.ONE_MINUS_DST_COLOR,[cg]:e.ONE_MINUS_DST_ALPHA,[pg]:e.CONSTANT_COLOR,[fg]:e.ONE_MINUS_CONSTANT_COLOR,[mg]:e.CONSTANT_ALPHA,[gg]:e.ONE_MINUS_CONSTANT_ALPHA};function fe(V,ue,me,Fe,We,ge,Ne,N,D,z){if(V===Er){m===!0&&(Be(e.BLEND),m=!1);return}if(m===!1&&(oe(e.BLEND),m=!0),V!==Qm){if(V!==f||z!==L){if((M!==fn||S!==fn)&&(e.blendEquation(e.FUNC_ADD),M=fn,S=fn),z)switch(V){case ms:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ba:e.blendFunc(e.ONE,e.ONE);break;case $u:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case Ju:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:pt("WebGLState: Invalid blending: ",V);break}else switch(V){case ms:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case ba:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case $u:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ju:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",V);break}y=null,v=null,A=null,w=null,_.set(0,0,0),b=0,f=V,L=z}return}We=We||ue,ge=ge||me,Ne=Ne||Fe,(ue!==M||We!==S)&&(e.blendEquationSeparate(he[ue],he[We]),M=ue,S=We),(me!==y||Fe!==v||ge!==A||Ne!==w)&&(e.blendFuncSeparate(se[me],se[Fe],se[ge],se[Ne]),y=me,v=Fe,A=ge,w=Ne),(N.equals(_)===!1||D!==b)&&(e.blendColor(N.r,N.g,N.b,D),_.copy(N),b=D),f=V,L=!1}function Re(V,ue){V.side===Pi?Be(e.CULL_FACE):oe(e.CULL_FACE);let me=V.side===Ni;ue&&(me=!me),Se(me),V.blending===ms&&V.transparent===!1?fe(Er):fe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),s.setFunc(V.depthFunc),s.setTest(V.depthTest),s.setMask(V.depthWrite),n.setMask(V.colorWrite);let Fe=V.stencilWrite;o.setTest(Fe),Fe&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),tt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?oe(e.SAMPLE_ALPHA_TO_COVERAGE):Be(e.SAMPLE_ALPHA_TO_COVERAGE)}function Se(V){P!==V&&(V?e.frontFace(e.CW):e.frontFace(e.CCW),P=V)}function Ge(V){V!==Km?(oe(e.CULL_FACE),V!==B&&(V===Ku?e.cullFace(e.BACK):V===$m?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Be(e.CULL_FACE),B=V}function Ve(V){V!==j&&(F&&e.lineWidth(V),j=V)}function tt(V,ue,me){V?(oe(e.POLYGON_OFFSET_FILL),(U!==ue||I!==me)&&(U=ue,I=me,s.getReversed()&&(ue=-ue),e.polygonOffset(ue,me))):Be(e.POLYGON_OFFSET_FILL)}function st(V){V?oe(e.SCISSOR_TEST):Be(e.SCISSOR_TEST)}function O(V){V===void 0&&(V=e.TEXTURE0+k-1),K!==V&&(e.activeTexture(V),K=V)}function bt(V,ue,me){me===void 0&&(K===null?me=e.TEXTURE0+k-1:me=K);let Fe=$[me];Fe===void 0&&(Fe={type:void 0,texture:void 0},$[me]=Fe),(Fe.type!==V||Fe.texture!==ue)&&(K!==me&&(e.activeTexture(me),K=me),e.bindTexture(V,ue||ae[V]),Fe.type=V,Fe.texture=ue)}function mt(){let V=$[K];V!==void 0&&V.type!==void 0&&(e.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function vt(){try{e.compressedTexImage2D(...arguments)}catch(V){pt("WebGLState:",V)}}function C(){try{e.compressedTexImage3D(...arguments)}catch(V){pt("WebGLState:",V)}}function T(){try{e.texSubImage2D(...arguments)}catch(V){pt("WebGLState:",V)}}function G(){try{e.texSubImage3D(...arguments)}catch(V){pt("WebGLState:",V)}}function re(){try{e.compressedTexSubImage2D(...arguments)}catch(V){pt("WebGLState:",V)}}function le(){try{e.compressedTexSubImage3D(...arguments)}catch(V){pt("WebGLState:",V)}}function ye(){try{e.texStorage2D(...arguments)}catch(V){pt("WebGLState:",V)}}function Ie(){try{e.texStorage3D(...arguments)}catch(V){pt("WebGLState:",V)}}function q(){try{e.texImage2D(...arguments)}catch(V){pt("WebGLState:",V)}}function Ee(){try{e.texImage3D(...arguments)}catch(V){pt("WebGLState:",V)}}function Ce(V){return d[V]!==void 0?d[V]:e.getParameter(V)}function Oe(V,ue){d[V]!==ue&&(e.pixelStorei(V,ue),d[V]=ue)}function _e(V){qe.equals(V)===!1&&(e.scissor(V.x,V.y,V.z,V.w),qe.copy(V))}function Ke(V){De.equals(V)===!1&&(e.viewport(V.x,V.y,V.z,V.w),De.copy(V))}function it(V,ue){let me=c.get(ue);me===void 0&&(me=new WeakMap,c.set(ue,me));let Fe=me.get(V);Fe===void 0&&(Fe=e.getUniformBlockIndex(ue,V.name),me.set(V,Fe))}function ut(V,ue){let me=c.get(ue).get(V);l.get(ue)!==me&&(e.uniformBlockBinding(ue,me,V.__bindingPointIndex),l.set(ue,me))}function St(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),s.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},K=null,$={},u={},p=new WeakMap,g=[],x=null,m=!1,f=null,M=null,y=null,v=null,S=null,A=null,w=null,_=new Te(0,0,0),b=0,L=!1,P=null,B=null,j=null,U=null,I=null,qe.set(0,0,e.canvas.width,e.canvas.height),De.set(0,0,e.canvas.width,e.canvas.height),n.reset(),s.reset(),o.reset()}return{buffers:{color:n,depth:s,stencil:o},enable:oe,disable:Be,bindFramebuffer:Ye,drawBuffers:ce,useProgram:$e,setBlending:fe,setMaterial:Re,setFlipSided:Se,setCullFace:Ge,setLineWidth:Ve,setPolygonOffset:tt,setScissorTest:st,activeTexture:O,bindTexture:bt,unbindTexture:mt,compressedTexImage2D:vt,compressedTexImage3D:C,texImage2D:q,texImage3D:Ee,pixelStorei:Oe,getParameter:Ce,updateUBOMapping:it,uniformBlockBinding:ut,texStorage2D:ye,texStorage3D:Ie,texSubImage2D:T,texSubImage3D:G,compressedTexSubImage2D:re,compressedTexSubImage3D:le,scissor:_e,viewport:Ke,reset:St}}function FM(e,t,i,r,a,n,s){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new de,h=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,T){return g?new OffscreenCanvas(C,T):ws("canvas")}function m(C,T,G){let re=1,le=vt(C);if((le.width>G||le.height>G)&&(re=G/Math.max(le.width,le.height)),re<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ye=Math.floor(re*le.width),Ie=Math.floor(re*le.height);u===void 0&&(u=x(ye,Ie));let q=T?x(ye,Ie):u;return q.width=ye,q.height=Ie,q.getContext("2d").drawImage(C,0,0,ye,Ie),Qe("WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+ye+"x"+Ie+")."),q}else return"data"in C&&Qe("WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),C;return C}function f(C){return C.generateMipmaps}function M(C){e.generateMipmap(C)}function y(C){return C.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?e.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function v(C,T,G,re,le,ye=!1){if(C!==null){if(e[C]!==void 0)return e[C];Qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Ie;re&&(Ie=t.get("EXT_texture_norm16"),Ie||Qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=T;if(T===e.RED&&(G===e.FLOAT&&(q=e.R32F),G===e.HALF_FLOAT&&(q=e.R16F),G===e.UNSIGNED_BYTE&&(q=e.R8),G===e.UNSIGNED_SHORT&&Ie&&(q=Ie.R16_EXT),G===e.SHORT&&Ie&&(q=Ie.R16_SNORM_EXT)),T===e.RED_INTEGER&&(G===e.UNSIGNED_BYTE&&(q=e.R8UI),G===e.UNSIGNED_SHORT&&(q=e.R16UI),G===e.UNSIGNED_INT&&(q=e.R32UI),G===e.BYTE&&(q=e.R8I),G===e.SHORT&&(q=e.R16I),G===e.INT&&(q=e.R32I)),T===e.RG&&(G===e.FLOAT&&(q=e.RG32F),G===e.HALF_FLOAT&&(q=e.RG16F),G===e.UNSIGNED_BYTE&&(q=e.RG8),G===e.UNSIGNED_SHORT&&Ie&&(q=Ie.RG16_EXT),G===e.SHORT&&Ie&&(q=Ie.RG16_SNORM_EXT)),T===e.RG_INTEGER&&(G===e.UNSIGNED_BYTE&&(q=e.RG8UI),G===e.UNSIGNED_SHORT&&(q=e.RG16UI),G===e.UNSIGNED_INT&&(q=e.RG32UI),G===e.BYTE&&(q=e.RG8I),G===e.SHORT&&(q=e.RG16I),G===e.INT&&(q=e.RG32I)),T===e.RGB_INTEGER&&(G===e.UNSIGNED_BYTE&&(q=e.RGB8UI),G===e.UNSIGNED_SHORT&&(q=e.RGB16UI),G===e.UNSIGNED_INT&&(q=e.RGB32UI),G===e.BYTE&&(q=e.RGB8I),G===e.SHORT&&(q=e.RGB16I),G===e.INT&&(q=e.RGB32I)),T===e.RGBA_INTEGER&&(G===e.UNSIGNED_BYTE&&(q=e.RGBA8UI),G===e.UNSIGNED_SHORT&&(q=e.RGBA16UI),G===e.UNSIGNED_INT&&(q=e.RGBA32UI),G===e.BYTE&&(q=e.RGBA8I),G===e.SHORT&&(q=e.RGBA16I),G===e.INT&&(q=e.RGBA32I)),T===e.RGB&&(G===e.UNSIGNED_SHORT&&Ie&&(q=Ie.RGB16_EXT),G===e.SHORT&&Ie&&(q=Ie.RGB16_SNORM_EXT),G===e.UNSIGNED_INT_5_9_9_9_REV&&(q=e.RGB9_E5),G===e.UNSIGNED_INT_10F_11F_11F_REV&&(q=e.R11F_G11F_B10F)),T===e.RGBA){let Ee=ye?Uo:wt.getTransfer(le);G===e.FLOAT&&(q=e.RGBA32F),G===e.HALF_FLOAT&&(q=e.RGBA16F),G===e.UNSIGNED_BYTE&&(q=Ee===kt?e.SRGB8_ALPHA8:e.RGBA8),G===e.UNSIGNED_SHORT&&Ie&&(q=Ie.RGBA16_EXT),G===e.SHORT&&Ie&&(q=Ie.RGBA16_SNORM_EXT),G===e.UNSIGNED_SHORT_4_4_4_4&&(q=e.RGBA4),G===e.UNSIGNED_SHORT_5_5_5_1&&(q=e.RGB5_A1)}return(q===e.R16F||q===e.R32F||q===e.RG16F||q===e.RG32F||q===e.RGBA16F||q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),q}function S(C,T){let G;return C?T===null||T===Br||T===Ts?G=e.DEPTH24_STENCIL8:T===cr?G=e.DEPTH32F_STENCIL8:T===Ss&&(G=e.DEPTH24_STENCIL8,Qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Br||T===Ts?G=e.DEPTH_COMPONENT24:T===cr?G=e.DEPTH_COMPONENT32F:T===Ss&&(G=e.DEPTH_COMPONENT16),G}function A(C,T){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==gi&&C.minFilter!==Kt?Math.log2(Math.max(T.width,T.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?T.mipmaps.length:1}function w(C){let T=C.target;T.removeEventListener("dispose",w),b(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function _(C){let T=C.target;T.removeEventListener("dispose",_),P(T)}function b(C){let T=r.get(C);if(T.__webglInit===void 0)return;let G=C.source,re=p.get(G);if(re){let le=re[T.__cacheKey];le.usedTimes--,le.usedTimes===0&&L(C),Object.keys(re).length===0&&p.delete(G)}r.remove(C)}function L(C){let T=r.get(C);e.deleteTexture(T.__webglTexture);let G=C.source,re=p.get(G);delete re[T.__cacheKey],s.memory.textures--}function P(C){let T=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(T.__webglFramebuffer[re]))for(let le=0;le<T.__webglFramebuffer[re].length;le++)e.deleteFramebuffer(T.__webglFramebuffer[re][le]);else e.deleteFramebuffer(T.__webglFramebuffer[re]);T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer[re])}else{if(Array.isArray(T.__webglFramebuffer))for(let re=0;re<T.__webglFramebuffer.length;re++)e.deleteFramebuffer(T.__webglFramebuffer[re]);else e.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&e.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&e.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let re=0;re<T.__webglColorRenderbuffer.length;re++)T.__webglColorRenderbuffer[re]&&e.deleteRenderbuffer(T.__webglColorRenderbuffer[re]);T.__webglDepthRenderbuffer&&e.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let G=C.textures;for(let re=0,le=G.length;re<le;re++){let ye=r.get(G[re]);ye.__webglTexture&&(e.deleteTexture(ye.__webglTexture),s.memory.textures--),r.remove(G[re])}r.remove(C)}let B=0;function j(){B=0}function U(){return B}function I(C){B=C}function k(){let C=B;return C>=a.maxTextures&&Qe("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+a.maxTextures),B+=1,C}function F(C){let T=[];return T.push(C.wrapS),T.push(C.wrapT),T.push(C.wrapR||0),T.push(C.magFilter),T.push(C.minFilter),T.push(C.anisotropy),T.push(C.internalFormat),T.push(C.format),T.push(C.type),T.push(C.generateMipmaps),T.push(C.premultiplyAlpha),T.push(C.flipY),T.push(C.unpackAlignment),T.push(C.colorSpace),T.join()}function ee(C,T){let G=r.get(C);if(C.isVideoTexture&&bt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){let re=C.image;if(re===null)Qe("WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)Qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Be(G,C,T);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(e.TEXTURE_2D,G.__webglTexture,e.TEXTURE0+T)}function X(C,T){let G=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Be(G,C,T);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);i.bindTexture(e.TEXTURE_2D_ARRAY,G.__webglTexture,e.TEXTURE0+T)}function K(C,T){let G=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Be(G,C,T);return}i.bindTexture(e.TEXTURE_3D,G.__webglTexture,e.TEXTURE0+T)}function $(C,T){let G=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){Ye(G,C,T);return}i.bindTexture(e.TEXTURE_CUBE_MAP,G.__webglTexture,e.TEXTURE0+T)}let xe={[la]:e.REPEAT,[Sr]:e.CLAMP_TO_EDGE,[bs]:e.MIRRORED_REPEAT},be={[gi]:e.NEAREST,[th]:e.NEAREST_MIPMAP_NEAREST,[_n]:e.NEAREST_MIPMAP_LINEAR,[Kt]:e.LINEAR,[gs]:e.LINEAR_MIPMAP_NEAREST,[lr]:e.LINEAR_MIPMAP_LINEAR},qe={[Sg]:e.NEVER,[Rg]:e.ALWAYS,[Tg]:e.LESS,[ch]:e.LEQUAL,[Eg]:e.EQUAL,[hh]:e.GEQUAL,[wg]:e.GREATER,[Ag]:e.NOTEQUAL};function De(C,T){if(T.type===cr&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Kt||T.magFilter===gs||T.magFilter===_n||T.magFilter===lr||T.minFilter===Kt||T.minFilter===gs||T.minFilter===_n||T.minFilter===lr)&&Qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(C,e.TEXTURE_WRAP_S,xe[T.wrapS]),e.texParameteri(C,e.TEXTURE_WRAP_T,xe[T.wrapT]),(C===e.TEXTURE_3D||C===e.TEXTURE_2D_ARRAY)&&e.texParameteri(C,e.TEXTURE_WRAP_R,xe[T.wrapR]),e.texParameteri(C,e.TEXTURE_MAG_FILTER,be[T.magFilter]),e.texParameteri(C,e.TEXTURE_MIN_FILTER,be[T.minFilter]),T.compareFunction&&(e.texParameteri(C,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(C,e.TEXTURE_COMPARE_FUNC,qe[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===gi||T.minFilter!==_n&&T.minFilter!==lr||T.type===cr&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");e.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function te(C,T){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,T.addEventListener("dispose",w));let re=T.source,le=p.get(re);le===void 0&&(le={},p.set(re,le));let ye=F(T);if(ye!==C.__cacheKey){le[ye]===void 0&&(le[ye]={texture:e.createTexture(),usedTimes:0},s.memory.textures++,G=!0),le[ye].usedTimes++;let Ie=le[C.__cacheKey];Ie!==void 0&&(le[C.__cacheKey].usedTimes--,Ie.usedTimes===0&&L(T)),C.__cacheKey=ye,C.__webglTexture=le[ye].texture}return G}function ae(C,T,G){return Math.floor(Math.floor(C/G)/T)}function oe(C,T,G,re){let le=C.updateRanges;if(le.length===0)i.texSubImage2D(e.TEXTURE_2D,0,0,0,T.width,T.height,G,re,T.data);else{le.sort((Ce,Oe)=>Ce.start-Oe.start);let ye=0;for(let Ce=1;Ce<le.length;Ce++){let Oe=le[ye],_e=le[Ce],Ke=Oe.start+Oe.count,it=ae(_e.start,T.width,4),ut=ae(Oe.start,T.width,4);_e.start<=Ke+1&&it===ut&&ae(_e.start+_e.count-1,T.width,4)===it?Oe.count=Math.max(Oe.count,_e.start+_e.count-Oe.start):(++ye,le[ye]=_e)}le.length=ye+1;let Ie=i.getParameter(e.UNPACK_ROW_LENGTH),q=i.getParameter(e.UNPACK_SKIP_PIXELS),Ee=i.getParameter(e.UNPACK_SKIP_ROWS);i.pixelStorei(e.UNPACK_ROW_LENGTH,T.width);for(let Ce=0,Oe=le.length;Ce<Oe;Ce++){let _e=le[Ce],Ke=Math.floor(_e.start/4),it=Math.ceil(_e.count/4),ut=Ke%T.width,St=Math.floor(Ke/T.width),V=it;i.pixelStorei(e.UNPACK_SKIP_PIXELS,ut),i.pixelStorei(e.UNPACK_SKIP_ROWS,St),i.texSubImage2D(e.TEXTURE_2D,0,ut,St,V,1,G,re,T.data)}C.clearUpdateRanges(),i.pixelStorei(e.UNPACK_ROW_LENGTH,Ie),i.pixelStorei(e.UNPACK_SKIP_PIXELS,q),i.pixelStorei(e.UNPACK_SKIP_ROWS,Ee)}}function Be(C,T,G){let re=e.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(re=e.TEXTURE_2D_ARRAY),T.isData3DTexture&&(re=e.TEXTURE_3D);let le=te(C,T),ye=T.source;i.bindTexture(re,C.__webglTexture,e.TEXTURE0+G);let Ie=r.get(ye);if(ye.version!==Ie.__version||le===!0){if(i.activeTexture(e.TEXTURE0+G),!(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)){let ue=wt.getPrimaries(wt.workingColorSpace),me=T.colorSpace===Ma?null:wt.getPrimaries(T.colorSpace),Fe=T.colorSpace===Ma||ue===me?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe)}i.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment);let q=m(T.image,!1,a.maxTextureSize);q=mt(T,q);let Ee=n.convert(T.format,T.colorSpace),Ce=n.convert(T.type),Oe=v(T.internalFormat,Ee,Ce,T.normalized,T.colorSpace,T.isVideoTexture);De(re,T);let _e,Ke=T.mipmaps,it=T.isVideoTexture!==!0,ut=Ie.__version===void 0||le===!0,St=ye.dataReady,V=A(T,q);if(T.isDepthTexture)Oe=S(T.format===Da,T.type),ut&&(it?i.texStorage2D(e.TEXTURE_2D,1,Oe,q.width,q.height):i.texImage2D(e.TEXTURE_2D,0,Oe,q.width,q.height,0,Ee,Ce,null));else if(T.isDataTexture)if(Ke.length>0){it&&ut&&i.texStorage2D(e.TEXTURE_2D,V,Oe,Ke[0].width,Ke[0].height);for(let ue=0,me=Ke.length;ue<me;ue++)_e=Ke[ue],it?St&&i.texSubImage2D(e.TEXTURE_2D,ue,0,0,_e.width,_e.height,Ee,Ce,_e.data):i.texImage2D(e.TEXTURE_2D,ue,Oe,_e.width,_e.height,0,Ee,Ce,_e.data);T.generateMipmaps=!1}else it?(ut&&i.texStorage2D(e.TEXTURE_2D,V,Oe,q.width,q.height),St&&oe(T,q,Ee,Ce)):i.texImage2D(e.TEXTURE_2D,0,Oe,q.width,q.height,0,Ee,Ce,q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){it&&ut&&i.texStorage3D(e.TEXTURE_2D_ARRAY,V,Oe,Ke[0].width,Ke[0].height,q.depth);for(let ue=0,me=Ke.length;ue<me;ue++)if(_e=Ke[ue],T.format!==qi)if(Ee!==null)if(it){if(St)if(T.layerUpdates.size>0){let Fe=$d(_e.width,_e.height,T.format,T.type);for(let We of T.layerUpdates){let ge=_e.data.subarray(We*Fe/_e.data.BYTES_PER_ELEMENT,(We+1)*Fe/_e.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ue,0,0,We,_e.width,_e.height,1,Ee,ge)}}else i.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,ue,0,0,0,_e.width,_e.height,q.depth,Ee,_e.data)}else i.compressedTexImage3D(e.TEXTURE_2D_ARRAY,ue,Oe,_e.width,_e.height,q.depth,0,_e.data,0,0);else Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?St&&i.texSubImage3D(e.TEXTURE_2D_ARRAY,ue,0,0,0,_e.width,_e.height,q.depth,Ee,Ce,_e.data):i.texImage3D(e.TEXTURE_2D_ARRAY,ue,Oe,_e.width,_e.height,q.depth,0,Ee,Ce,_e.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{it&&ut&&i.texStorage2D(e.TEXTURE_2D,V,Oe,Ke[0].width,Ke[0].height);for(let ue=0,me=Ke.length;ue<me;ue++)_e=Ke[ue],T.format!==qi?Ee!==null?it?St&&i.compressedTexSubImage2D(e.TEXTURE_2D,ue,0,0,_e.width,_e.height,Ee,_e.data):i.compressedTexImage2D(e.TEXTURE_2D,ue,Oe,_e.width,_e.height,0,_e.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?St&&i.texSubImage2D(e.TEXTURE_2D,ue,0,0,_e.width,_e.height,Ee,Ce,_e.data):i.texImage2D(e.TEXTURE_2D,ue,Oe,_e.width,_e.height,0,Ee,Ce,_e.data)}else if(T.isDataArrayTexture)if(it){if(ut&&i.texStorage3D(e.TEXTURE_2D_ARRAY,V,Oe,q.width,q.height,q.depth),St)if(T.layerUpdates.size>0){let ue=$d(q.width,q.height,T.format,T.type);for(let me of T.layerUpdates){let Fe=q.data.subarray(me*ue/q.data.BYTES_PER_ELEMENT,(me+1)*ue/q.data.BYTES_PER_ELEMENT);i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,me,q.width,q.height,1,Ee,Ce,Fe)}T.clearLayerUpdates()}else i.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Ee,Ce,q.data)}else i.texImage3D(e.TEXTURE_2D_ARRAY,0,Oe,q.width,q.height,q.depth,0,Ee,Ce,q.data);else if(T.isData3DTexture)it?(ut&&i.texStorage3D(e.TEXTURE_3D,V,Oe,q.width,q.height,q.depth),St&&i.texSubImage3D(e.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Ee,Ce,q.data)):i.texImage3D(e.TEXTURE_3D,0,Oe,q.width,q.height,q.depth,0,Ee,Ce,q.data);else if(T.isFramebufferTexture){if(ut)if(it)i.texStorage2D(e.TEXTURE_2D,V,Oe,q.width,q.height);else{let ue=q.width,me=q.height;for(let Fe=0;Fe<V;Fe++)i.texImage2D(e.TEXTURE_2D,Fe,Oe,ue,me,0,Ee,Ce,null),ue>>=1,me>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in e){let ue=e.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),q.parentNode!==ue){ue.appendChild(q),d.add(T),ue.onpaint=me=>{let Fe=me.changedElements;for(let We of d)Fe.includes(We.image)&&(We.needsUpdate=!0)},ue.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,q);else{let me=e.RGBA,Fe=e.RGBA,We=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,me,Fe,We,q)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(it&&ut){let ue=vt(Ke[0]);i.texStorage2D(e.TEXTURE_2D,V,Oe,ue.width,ue.height)}for(let ue=0,me=Ke.length;ue<me;ue++)_e=Ke[ue],it?St&&i.texSubImage2D(e.TEXTURE_2D,ue,0,0,Ee,Ce,_e):i.texImage2D(e.TEXTURE_2D,ue,Oe,Ee,Ce,_e);T.generateMipmaps=!1}else if(it){if(ut){let ue=vt(q);i.texStorage2D(e.TEXTURE_2D,V,Oe,ue.width,ue.height)}St&&i.texSubImage2D(e.TEXTURE_2D,0,0,0,Ee,Ce,q)}else i.texImage2D(e.TEXTURE_2D,0,Oe,Ee,Ce,q);f(T)&&M(re),Ie.__version=ye.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function Ye(C,T,G){if(T.image.length!==6)return;let re=te(C,T),le=T.source;i.bindTexture(e.TEXTURE_CUBE_MAP,C.__webglTexture,e.TEXTURE0+G);let ye=r.get(le);if(le.version!==ye.__version||re===!0){i.activeTexture(e.TEXTURE0+G);let Ie=wt.getPrimaries(wt.workingColorSpace),q=T.colorSpace===Ma?null:wt.getPrimaries(T.colorSpace),Ee=T.colorSpace===Ma||Ie===q?e.NONE:e.BROWSER_DEFAULT_WEBGL;i.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(e.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Ce=T.isCompressedTexture||T.image[0].isCompressedTexture,Oe=T.image[0]&&T.image[0].isDataTexture,_e=[];for(let ge=0;ge<6;ge++)!Ce&&!Oe?_e[ge]=m(T.image[ge],!0,a.maxCubemapSize):_e[ge]=Oe?T.image[ge].image:T.image[ge],_e[ge]=mt(T,_e[ge]);let Ke=_e[0],it=n.convert(T.format,T.colorSpace),ut=n.convert(T.type),St=v(T.internalFormat,it,ut,T.normalized,T.colorSpace),V=T.isVideoTexture!==!0,ue=ye.__version===void 0||re===!0,me=le.dataReady,Fe=A(T,Ke);De(e.TEXTURE_CUBE_MAP,T);let We;if(Ce){V&&ue&&i.texStorage2D(e.TEXTURE_CUBE_MAP,Fe,St,Ke.width,Ke.height);for(let ge=0;ge<6;ge++){We=_e[ge].mipmaps;for(let Ne=0;Ne<We.length;Ne++){let N=We[Ne];T.format!==qi?it!==null?V?me&&i.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,N.width,N.height,it,N.data):i.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,St,N.width,N.height,0,N.data):Qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?me&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,0,0,N.width,N.height,it,ut,N.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne,St,N.width,N.height,0,it,ut,N.data)}}}else{if(We=T.mipmaps,V&&ue){We.length>0&&Fe++;let ge=vt(_e[0]);i.texStorage2D(e.TEXTURE_CUBE_MAP,Fe,St,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(Oe){V?me&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,_e[ge].width,_e[ge].height,it,ut,_e[ge].data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,St,_e[ge].width,_e[ge].height,0,it,ut,_e[ge].data);for(let Ne=0;Ne<We.length;Ne++){let N=We[Ne].image[ge].image;V?me&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,N.width,N.height,it,ut,N.data):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,St,N.width,N.height,0,it,ut,N.data)}}else{V?me&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,it,ut,_e[ge]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,St,it,ut,_e[ge]);for(let Ne=0;Ne<We.length;Ne++){let N=We[Ne];V?me&&i.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,0,0,it,ut,N.image[ge]):i.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ne+1,St,it,ut,N.image[ge])}}}f(T)&&M(e.TEXTURE_CUBE_MAP),ye.__version=le.version,T.onUpdate&&T.onUpdate(T)}C.__version=T.version}function ce(C,T,G,re,le,ye){let Ie=n.convert(G.format,G.colorSpace),q=n.convert(G.type),Ee=v(G.internalFormat,Ie,q,G.normalized,G.colorSpace),Ce=r.get(T),Oe=r.get(G);if(Oe.__renderTarget=T,!Ce.__hasExternalTextures){let _e=Math.max(1,T.width>>ye),Ke=Math.max(1,T.height>>ye);le===e.TEXTURE_3D||le===e.TEXTURE_2D_ARRAY?i.texImage3D(le,ye,Ee,_e,Ke,T.depth,0,Ie,q,null):i.texImage2D(le,ye,Ee,_e,Ke,0,Ie,q,null)}i.bindFramebuffer(e.FRAMEBUFFER,C),O(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,re,le,Oe.__webglTexture,0,st(T)):(le===e.TEXTURE_2D||le>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,re,le,Oe.__webglTexture,ye),i.bindFramebuffer(e.FRAMEBUFFER,null)}function $e(C,T,G){if(e.bindRenderbuffer(e.RENDERBUFFER,C),T.depthBuffer){let re=T.depthTexture,le=re&&re.isDepthTexture?re.type:null,ye=S(T.stencilBuffer,le),Ie=T.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;O(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st(T),ye,T.width,T.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,st(T),ye,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,ye,T.width,T.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,Ie,e.RENDERBUFFER,C)}else{let re=T.textures;for(let le=0;le<re.length;le++){let ye=re[le],Ie=n.convert(ye.format,ye.colorSpace),q=n.convert(ye.type),Ee=v(ye.internalFormat,Ie,q,ye.normalized,ye.colorSpace);O(T)?o.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,st(T),Ee,T.width,T.height):G?e.renderbufferStorageMultisample(e.RENDERBUFFER,st(T),Ee,T.width,T.height):e.renderbufferStorage(e.RENDERBUFFER,Ee,T.width,T.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function he(C,T,G){let re=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(e.FRAMEBUFFER,C),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let le=r.get(T.depthTexture);if(le.__renderTarget=T,(!le.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),re){if(le.__webglInit===void 0&&(le.__webglInit=!0,T.depthTexture.addEventListener("dispose",w)),le.__webglTexture===void 0){le.__webglTexture=e.createTexture(),i.bindTexture(e.TEXTURE_CUBE_MAP,le.__webglTexture),De(e.TEXTURE_CUBE_MAP,T.depthTexture);let Ce=n.convert(T.depthTexture.format),Oe=n.convert(T.depthTexture.type),_e;T.depthTexture.format===ca?_e=e.DEPTH_COMPONENT24:T.depthTexture.format===Da&&(_e=e.DEPTH24_STENCIL8);for(let Ke=0;Ke<6;Ke++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,_e,T.width,T.height,0,Ce,Oe,null)}}else ee(T.depthTexture,0);let ye=le.__webglTexture,Ie=st(T),q=re?e.TEXTURE_CUBE_MAP_POSITIVE_X+G:e.TEXTURE_2D,Ee=T.depthTexture.format===Da?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(T.depthTexture.format===ca)O(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Ee,q,ye,0,Ie):e.framebufferTexture2D(e.FRAMEBUFFER,Ee,q,ye,0);else if(T.depthTexture.format===Da)O(T)?o.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,Ee,q,ye,0,Ie):e.framebufferTexture2D(e.FRAMEBUFFER,Ee,q,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function se(C){let T=r.get(C),G=C.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==C.depthTexture){let re=C.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),re){let le=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,re.removeEventListener("dispose",le)};re.addEventListener("dispose",le),T.__depthDisposeCallback=le}T.__boundDepthTexture=re}if(C.depthTexture&&!T.__autoAllocateDepthBuffer)if(G)for(let re=0;re<6;re++)he(T.__webglFramebuffer[re],C,re);else{let re=C.texture.mipmaps;re&&re.length>0?he(T.__webglFramebuffer[0],C,0):he(T.__webglFramebuffer,C,0)}else if(G){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]===void 0)T.__webglDepthbuffer[re]=e.createRenderbuffer(),$e(T.__webglDepthbuffer[re],C,!1);else{let le=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer[re];e.bindRenderbuffer(e.RENDERBUFFER,ye),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,ye)}}else{let re=C.texture.mipmaps;if(re&&re.length>0?i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(e.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=e.createRenderbuffer(),$e(T.__webglDepthbuffer,C,!1);else{let le=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,ye),e.framebufferRenderbuffer(e.FRAMEBUFFER,le,e.RENDERBUFFER,ye)}}i.bindFramebuffer(e.FRAMEBUFFER,null)}function fe(C,T,G){let re=r.get(C);T!==void 0&&ce(re.__webglFramebuffer,C,C.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),G!==void 0&&se(C)}function Re(C){let T=C.texture,G=r.get(C),re=r.get(T);C.addEventListener("dispose",_);let le=C.textures,ye=C.isWebGLCubeRenderTarget===!0,Ie=le.length>1;if(Ie||(re.__webglTexture===void 0&&(re.__webglTexture=e.createTexture()),re.__version=T.version,s.memory.textures++),ye){G.__webglFramebuffer=[];for(let q=0;q<6;q++)if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[q]=[];for(let Ee=0;Ee<T.mipmaps.length;Ee++)G.__webglFramebuffer[q][Ee]=e.createFramebuffer()}else G.__webglFramebuffer[q]=e.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let q=0;q<T.mipmaps.length;q++)G.__webglFramebuffer[q]=e.createFramebuffer()}else G.__webglFramebuffer=e.createFramebuffer();if(Ie)for(let q=0,Ee=le.length;q<Ee;q++){let Ce=r.get(le[q]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=e.createTexture(),s.memory.textures++)}if(C.samples>0&&O(C)===!1){G.__webglMultisampledFramebuffer=e.createFramebuffer(),G.__webglColorRenderbuffer=[],i.bindFramebuffer(e.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let q=0;q<le.length;q++){let Ee=le[q];G.__webglColorRenderbuffer[q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,G.__webglColorRenderbuffer[q]);let Ce=n.convert(Ee.format,Ee.colorSpace),Oe=n.convert(Ee.type),_e=v(Ee.internalFormat,Ce,Oe,Ee.normalized,Ee.colorSpace,C.isXRRenderTarget===!0),Ke=st(C);e.renderbufferStorageMultisample(e.RENDERBUFFER,Ke,_e,C.width,C.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+q,e.RENDERBUFFER,G.__webglColorRenderbuffer[q])}e.bindRenderbuffer(e.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=e.createRenderbuffer(),$e(G.__webglDepthRenderbuffer,C,!0)),i.bindFramebuffer(e.FRAMEBUFFER,null)}}if(ye){i.bindTexture(e.TEXTURE_CUBE_MAP,re.__webglTexture),De(e.TEXTURE_CUBE_MAP,T);for(let q=0;q<6;q++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)ce(G.__webglFramebuffer[q][Ee],C,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ee);else ce(G.__webglFramebuffer[q],C,T,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);f(T)&&M(e.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ie){for(let q=0,Ee=le.length;q<Ee;q++){let Ce=le[q],Oe=r.get(Ce),_e=e.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(_e=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(_e,Oe.__webglTexture),De(_e,Ce),ce(G.__webglFramebuffer,C,Ce,e.COLOR_ATTACHMENT0+q,_e,0),f(Ce)&&M(_e)}i.unbindTexture()}else{let q=e.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(q=C.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),i.bindTexture(q,re.__webglTexture),De(q,T),T.mipmaps&&T.mipmaps.length>0)for(let Ee=0;Ee<T.mipmaps.length;Ee++)ce(G.__webglFramebuffer[Ee],C,T,e.COLOR_ATTACHMENT0,q,Ee);else ce(G.__webglFramebuffer,C,T,e.COLOR_ATTACHMENT0,q,0);f(T)&&M(q),i.unbindTexture()}C.depthBuffer&&se(C)}function Se(C){let T=C.textures;for(let G=0,re=T.length;G<re;G++){let le=T[G];if(f(le)){let ye=y(C),Ie=r.get(le).__webglTexture;i.bindTexture(ye,Ie),M(ye),i.unbindTexture()}}}let Ge=[],Ve=[];function tt(C){if(C.samples>0){if(O(C)===!1){let T=C.textures,G=C.width,re=C.height,le=e.COLOR_BUFFER_BIT,ye=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,Ie=r.get(C),q=T.length>1;if(q)for(let Ce=0;Ce<T.length;Ce++)i.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ce,e.RENDERBUFFER,null),i.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ce,e.TEXTURE_2D,null,0);i.bindFramebuffer(e.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Ee=C.texture.mipmaps;Ee&&Ee.length>0?i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ce=0;Ce<T.length;Ce++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(le|=e.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(le|=e.STENCIL_BUFFER_BIT)),q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ce]);let Oe=r.get(T[Ce]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Oe,0)}e.blitFramebuffer(0,0,G,re,0,0,G,re,le,e.NEAREST),l===!0&&(Ge.length=0,Ve.length=0,Ge.push(e.COLOR_ATTACHMENT0+Ce),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(Ge.push(ye),Ve.push(ye),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ve)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ge))}if(i.bindFramebuffer(e.READ_FRAMEBUFFER,null),i.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),q)for(let Ce=0;Ce<T.length;Ce++){i.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ce,e.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ce]);let Oe=r.get(T[Ce]).__webglTexture;i.bindFramebuffer(e.FRAMEBUFFER,Ie.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+Ce,e.TEXTURE_2D,Oe,0)}i.bindFramebuffer(e.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&l){let T=C.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[T])}}}function st(C){return Math.min(a.maxSamples,C.samples)}function O(C){let T=r.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function bt(C){let T=s.render.frame;h.get(C)!==T&&(h.set(C,T),C.update())}function mt(C,T){let G=C.colorSpace,re=C.format,le=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Yi&&G!==Ma&&(wt.getTransfer(G)===kt?(re!==qi||le!==Xi)&&Qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",G)),T}function vt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=j,this.getTextureUnits=U,this.setTextureUnits=I,this.setTexture2D=ee,this.setTexture2DArray=X,this.setTexture3D=K,this.setTextureCube=$,this.rebindTextures=fe,this.setupRenderTarget=Re,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=tt,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=O,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function BM(e,t){function i(r,a=Ma){let n,s=wt.getTransfer(a);if(r===Xi)return e.UNSIGNED_BYTE;if(r===rh)return e.UNSIGNED_SHORT_4_4_4_4;if(r===ah)return e.UNSIGNED_SHORT_5_5_5_1;if(r===Ep)return e.UNSIGNED_INT_5_9_9_9_REV;if(r===wp)return e.UNSIGNED_INT_10F_11F_11F_REV;if(r===Sp)return e.BYTE;if(r===Tp)return e.SHORT;if(r===Ss)return e.UNSIGNED_SHORT;if(r===ih)return e.INT;if(r===Br)return e.UNSIGNED_INT;if(r===cr)return e.FLOAT;if(r===_i)return e.HALF_FLOAT;if(r===Ap)return e.ALPHA;if(r===Rp)return e.RGB;if(r===qi)return e.RGBA;if(r===ca)return e.DEPTH_COMPONENT;if(r===Da)return e.DEPTH_STENCIL;if(r===Ps)return e.RED;if(r===nh)return e.RED_INTEGER;if(r===Ba)return e.RG;if(r===sh)return e.RG_INTEGER;if(r===oh)return e.RGBA_INTEGER;if(r===Eo||r===wo||r===Ao||r===Ro)if(s===kt)if(n=t.get("WEBGL_compressed_texture_s3tc_srgb"),n!==null){if(r===Eo)return n.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===wo)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ao)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ro)return n.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(n=t.get("WEBGL_compressed_texture_s3tc"),n!==null){if(r===Eo)return n.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===wo)return n.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ao)return n.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ro)return n.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xc||r===yc||r===Mc||r===bc)if(n=t.get("WEBGL_compressed_texture_pvrtc"),n!==null){if(r===xc)return n.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yc)return n.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Mc)return n.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===bc)return n.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sc||r===Tc||r===Ec||r===wc||r===Ac||r===Do||r===Rc)if(n=t.get("WEBGL_compressed_texture_etc"),n!==null){if(r===Sc||r===Tc)return s===kt?n.COMPRESSED_SRGB8_ETC2:n.COMPRESSED_RGB8_ETC2;if(r===Ec)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:n.COMPRESSED_RGBA8_ETC2_EAC;if(r===wc)return n.COMPRESSED_R11_EAC;if(r===Ac)return n.COMPRESSED_SIGNED_R11_EAC;if(r===Do)return n.COMPRESSED_RG11_EAC;if(r===Rc)return n.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Cc||r===Ic||r===Pc||r===Lc||r===Dc||r===Nc||r===Uc||r===Oc||r===Fc||r===Bc||r===zc||r===Hc||r===kc||r===Gc)if(n=t.get("WEBGL_compressed_texture_astc"),n!==null){if(r===Cc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:n.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ic)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:n.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:n.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Lc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:n.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Dc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:n.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:n.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Uc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:n.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Oc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:n.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Fc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:n.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Bc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:n.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===zc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:n.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Hc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:n.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===kc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:n.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Gc)return s===kt?n.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:n.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Vc||r===Wc||r===Xc)if(n=t.get("EXT_texture_compression_bptc"),n!==null){if(r===Vc)return s===kt?n.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:n.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Wc)return n.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Xc)return n.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jc||r===qc||r===No||r===Yc)if(n=t.get("EXT_texture_compression_rgtc"),n!==null){if(r===jc)return n.COMPRESSED_RED_RGTC1_EXT;if(r===qc)return n.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===No)return n.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Yc)return n.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ts?e.UNSIGNED_INT_24_8:e[r]!==void 0?e[r]:null}return{convert:i}}var zM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,HM=`
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

}`,kM=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new $p(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Wt({vertexShader:zM,fragmentShader:HM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new ui(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},GM=class extends Ha{constructor(e,t){super();let i=this,r=null,a=1,n=null,s="local-floor",o=1,l=null,c=null,h=null,d=null,u=null,p=null,g=typeof XRWebGLBinding<"u",x=new kM,m={},f=t.getContextAttributes(),M=null,y=null,v=[],S=[],A=new de,w=null,_=null,b=new Di;b.viewport=new Vt;let L=new Di;L.viewport=new Vt;let P=[b,L],B=new Hv,j=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ae=v[te];return ae===void 0&&(ae=new Fl,v[te]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(te){let ae=v[te];return ae===void 0&&(ae=new Fl,v[te]=ae),ae.getGripSpace()},this.getHand=function(te){let ae=v[te];return ae===void 0&&(ae=new Fl,v[te]=ae),ae.getHandSpace()};function I(te){let ae=S.indexOf(te.inputSource);if(ae===-1)return;let oe=v[ae];oe!==void 0&&(oe.update(te.inputSource,te.frame,l||n),oe.dispatchEvent({type:te.type,data:te.inputSource}))}function k(){r.removeEventListener("select",I),r.removeEventListener("selectstart",I),r.removeEventListener("selectend",I),r.removeEventListener("squeeze",I),r.removeEventListener("squeezestart",I),r.removeEventListener("squeezeend",I),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",F);for(let te=0;te<v.length;te++){let ae=S[te];ae!==null&&(S[te]=null,v[te].disconnect(ae))}j=null,U=null,x.reset();for(let te in m)delete m[te];if(e.setRenderTarget(M),u=null,d=null,h=null,r=null,y=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),_!==null){let te=_.camera;te.fov=_.fov,te.zoom=_.zoom,te.updateProjectionMatrix(),_=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,i.isPresenting===!0&&Qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){s=te,i.isPresenting===!0&&Qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||n},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",I),r.addEventListener("selectstart",I),r.addEventListener("selectend",I),r.addEventListener("squeeze",I),r.addEventListener("squeezestart",I),r.addEventListener("squeezeend",I),r.addEventListener("end",k),r.addEventListener("inputsourceschange",F),f.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,oe=null,Be=null;f.depth&&(Be=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=f.stencil?Da:ca,oe=f.stencil?Ts:Br);let Ye={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:a};h=this.getBinding(),d=h.createProjectionLayer(Ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Ti(d.textureWidth,d.textureHeight,{format:qi,type:Xi,depthTexture:new As(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ae={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};u=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Ti(u.framebufferWidth,u.framebufferHeight,{format:qi,type:Xi,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(o),l=null,n=await r.requestReferenceSpace(s),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function F(te){for(let ae=0;ae<te.removed.length;ae++){let oe=te.removed[ae],Be=S.indexOf(oe);Be>=0&&(S[Be]=null,v[Be].disconnect(oe))}for(let ae=0;ae<te.added.length;ae++){let oe=te.added[ae],Be=S.indexOf(oe);if(Be===-1){for(let ce=0;ce<v.length;ce++)if(ce>=S.length){S.push(oe),Be=ce;break}else if(S[ce]===null){S[ce]=oe,Be=ce;break}if(Be===-1)break}let Ye=v[Be];Ye&&Ye.connect(oe)}}let ee=new R,X=new R;function K(te,ae,oe){ee.setFromMatrixPosition(ae.matrixWorld),X.setFromMatrixPosition(oe.matrixWorld);let Be=ee.distanceTo(X),Ye=ae.projectionMatrix.elements,ce=oe.projectionMatrix.elements,$e=Ye[14]/(Ye[10]-1),he=Ye[14]/(Ye[10]+1),se=(Ye[9]+1)/Ye[5],fe=(Ye[9]-1)/Ye[5],Re=(Ye[8]-1)/Ye[0],Se=(ce[8]+1)/ce[0],Ge=$e*Re,Ve=$e*Se,tt=Be/(-Re+Se),st=tt*-Re;if(ae.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(st),te.translateZ(tt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ye[10]===-1)te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let O=$e+tt,bt=he+tt,mt=Ge-st,vt=Ve+(Be-st),C=se*he/bt*O,T=fe*he/bt*O;te.projectionMatrix.makePerspective(mt,vt,C,T,O,bt),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function $(te,ae){ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ae=te.near,oe=te.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(oe=x.depthFar)),B.near=L.near=b.near=ae,B.far=L.far=b.far=oe,(j!==B.near||U!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),j=B.near,U=B.far),B.layers.mask=te.layers.mask|6,b.layers.mask=B.layers.mask&-5,L.layers.mask=B.layers.mask&-3;let Be=te.parent,Ye=B.cameras;$(B,Be);for(let ce=0;ce<Ye.length;ce++)$(Ye[ce],Be);Ye.length===2?K(B,b,L):B.projectionMatrix.copy(b.projectionMatrix),_===null&&te.isPerspectiveCamera&&(_={camera:te,fov:te.fov,zoom:te.zoom}),xe(te,B,Be)};function xe(te,ae,oe){oe===null?te.matrix.copy(ae.matrixWorld):(te.matrix.copy(oe.matrixWorld),te.matrix.invert(),te.matrix.multiply(ae.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Dn*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(te){o=te,d!==null&&(d.fixedFoveation=te),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=te)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(B)},this.getCameraTexture=function(te){return m[te]};let be=null;function qe(te,ae){if(c=ae.getViewerPose(l||n),p=ae,c!==null){let oe=c.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Be=!1;oe.length!==B.cameras.length&&(B.cameras.length=0,Be=!0);for(let ce=0;ce<oe.length;ce++){let $e=oe[ce],he=null;if(u!==null)he=u.getViewport($e);else{let fe=h.getViewSubImage(d,$e);he=fe.viewport,ce===0&&(e.setRenderTargetTextures(y,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(y))}let se=P[ce];se===void 0&&(se=new Di,se.layers.enable(ce),se.viewport=new Vt,P[ce]=se),se.matrix.fromArray($e.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray($e.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(he.x,he.y,he.width,he.height),ce===0&&(B.matrix.copy(se.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Be===!0&&B.cameras.push(se)}let Ye=r.enabledFeatures;if(Ye&&Ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){h=i.getBinding();let ce=h.getDepthInformation(oe[0]);ce&&ce.isValid&&ce.texture&&x.init(ce,r.renderState)}if(Ye&&Ye.includes("camera-access")&&g){e.state.unbindTexture(),h=i.getBinding();for(let ce=0;ce<oe.length;ce++){let $e=oe[ce].camera;if($e){let he=m[$e];he||(he=new $p,m[$e]=he);let se=h.getCameraImage($e);he.sourceTexture=se}}}}for(let oe=0;oe<v.length;oe++){let Be=S[oe],Ye=v[oe];Be!==null&&Ye!==void 0&&Ye.update(Be,ae,l||n)}be&&be(te,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),p=null}let De=new Bf;De.setAnimationLoop(qe),this.setAnimationLoop=function(te){be=te},this.dispose=function(){}}},VM=new et,Xf=new xt;Xf.set(-1,0,0,0,1,0,0,0,1);function WM(e,t){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,If(e)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,M,y,v){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?n(m,f):f.isMeshLambertMaterial?(n(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(n(m,f),d(m,f)):f.isMeshPhongMaterial?(n(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(n(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(n(m,f),g(m,f)):f.isMeshDepthMaterial?n(m,f):f.isMeshDistanceMaterial?(n(m,f),x(m,f)):f.isMeshNormalMaterial?n(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,M,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function n(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ni&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ni&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let M=t.get(f),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(VM.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Xf),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,M,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*M,m.scale.value=y*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,M){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ni&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let M=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function XM(e,t,i,r){let a={},n={},s=[],o=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,S){let A=S.program;r.uniformBlockBinding(v,A)}function c(v,S){let A=a[v.id];A===void 0&&(m(v),A=h(v),a[v.id]=A,v.addEventListener("dispose",M));let w=S.program;r.updateUBOMapping(v,w);let _=t.render.frame;n[v.id]!==_&&(u(v),n[v.id]=_)}function h(v){let S=d();v.__bindingPointIndex=S;let A=e.createBuffer(),w=v.__size,_=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,A),e.bufferData(e.UNIFORM_BUFFER,w,_),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,S,A),A}function d(){for(let v=0;v<o;v++)if(s.indexOf(v)===-1)return s.push(v),v;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let S=a[v.id],A=v.uniforms,w=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,S);for(let _=0,b=A.length;_<b;_++){let L=A[_];if(Array.isArray(L))for(let P=0,B=L.length;P<B;P++)p(L[P],_,P,w);else p(L,_,0,w)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(v,S,A,w){if(x(v,S,A,w)===!0){let _=v.__offset,b=v.value;if(Array.isArray(b)){let L=0;for(let P=0;P<b.length;P++){let B=b[P],j=f(B);g(B,v.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,v.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,_,v.__data)}}function g(v,S,A){typeof v=="number"||typeof v=="boolean"?S[0]=v:v.isMatrix3?(S[0]=v.elements[0],S[1]=v.elements[1],S[2]=v.elements[2],S[3]=0,S[4]=v.elements[3],S[5]=v.elements[4],S[6]=v.elements[5],S[7]=0,S[8]=v.elements[6],S[9]=v.elements[7],S[10]=v.elements[8],S[11]=0):ArrayBuffer.isView(v)?S.set(new v.constructor(v.buffer,v.byteOffset,S.length)):v.toArray(S,A)}function x(v,S,A,w){let _=v.value,b=S+"_"+A;if(w[b]===void 0)return typeof _=="number"||typeof _=="boolean"?w[b]=_:ArrayBuffer.isView(_)?w[b]=_.slice():w[b]=_.clone(),!0;{let L=w[b];if(typeof _=="number"||typeof _=="boolean"){if(L!==_)return w[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(L.equals(_)===!1)return L.copy(_),!0}}return!1}function m(v){let S=v.uniforms,A=0,w=16;for(let b=0,L=S.length;b<L;b++){let P=Array.isArray(S[b])?S[b]:[S[b]];for(let B=0,j=P.length;B<j;B++){let U=P[B],I=Array.isArray(U.value)?U.value:[U.value];for(let k=0,F=I.length;k<F;k++){let ee=I[k],X=f(ee),K=A%w,$=K%X.boundary,xe=K+$;A+=$,xe!==0&&w-xe<X.storage&&(A+=w-xe),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=A,A+=X.storage}}}let _=A%w;return _>0&&(A+=w-_),v.__size=A,v.__cache={},this}function f(v){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=48,S.storage=48):v.isMatrix4?(S.boundary=64,S.storage=64):v.isTexture?Qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):Qe("WebGLRenderer: Unsupported uniform value type.",v),S}function M(v){let S=v.target;S.removeEventListener("dispose",M);let A=s.indexOf(S.__bindingPointIndex);s.splice(A,1),e.deleteBuffer(a[S.id]),delete a[S.id],delete n[S.id]}function y(){for(let v in a)e.deleteBuffer(a[v]);s=[],a={},n={}}return{bind:l,update:c,dispose:y}}var jM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ur=null;function qM(){return Ur===null&&(Ur=new Sa(jM,16,16,Ba,_i),Ur.name="DFG_LUT",Ur.minFilter=Kt,Ur.magFilter=Kt,Ur.wrapS=Sr,Ur.wrapT=Sr,Ur.generateMipmaps=!1,Ur.needsUpdate=!0),Ur}var jf=class{constructor(e={}){let{canvas:t=Pg(),context:i=null,depth:r=!0,stencil:a=!1,alpha:n=!1,antialias:s=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Xi}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=n;let g=u,x=new Set([oh,sh,nh]),m=new Set([Xi,Br,Ss,Ts,rh,ah]),f=new Uint32Array(4),M=new Int32Array(4),y=new R,v=null,S=null,A=[],w=[],_=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,L=!1,P=null,B=null,j=null,U=null;this._outputColorSpace=Yt;let I=0,k=0,F=null,ee=-1,X=null,K=new Vt,$=new Vt,xe=null,be=new Te(0),qe=0,De=t.width,te=t.height,ae=1,oe=null,Be=null,Ye=new Vt(0,0,De,te),ce=new Vt(0,0,De,te),$e=!1,he=new Nn,se=!1,fe=!1,Re=new et,Se=new R,Ge=new Vt,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function st(){return F===null?ae:1}let O=i;function bt(E,H){return t.getContext(E,H)}let mt,vt,C,T,G,re,le,ye,Ie,q,Ee,Ce,Oe,_e,Ke,it,ut,St,V,ue,me,Fe,We;try{let E={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r186"),t.addEventListener("webglcontextlost",N,!1),t.addEventListener("webglcontextrestored",D,!1),t.addEventListener("webglcontextcreationerror",z,!1),O===null){let H="webgl2";if(O=bt(H,E),O===null)throw bt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ge()}catch(E){throw t.removeEventListener("webglcontextlost",N,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",z,!1),pt("WebGLRenderer: "+E.message),E}function ge(){mt=new qy(O),mt.init(),me=new BM(O,mt),vt=new Fy(O,mt,e,me),C=new OM(O,mt),vt.reversedDepthBuffer&&d&&C.buffers.depth.setReversed(!0),B=O.createFramebuffer(),j=O.createFramebuffer(),U=O.createFramebuffer(),T=new Ky(O),G=new bM,re=new FM(O,mt,C,G,vt,me,T),le=new jy(b),ye=new Jv(O),Fe=new Uy(O,ye),Ie=new Yy(O,ye,T,Fe),q=new Jy(O,Ie,ye,Fe,T),St=new $y(O,vt,re),Ke=new By(G),Ee=new MM(b,le,mt,vt,Fe,Ke),Ce=new WM(b,G),Oe=new TM,_e=new IM(mt),ut=new Ny(b,le,C,q,p,o),it=new UM(b,q,vt),We=new XM(O,T,vt,C),V=new Oy(O,mt,T),ue=new Zy(O,mt,T),T.programs=Ee.programs,b.capabilities=vt,b.extensions=mt,b.properties=G,b.renderLists=Oe,b.shadowMap=it,b.state=C,b.info=T}g!==Xi&&(_=new e1(g,t.width,t.height,s,r,a));let Ne=new GM(b,O);this.xr=Ne,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let E=mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(E){E!==void 0&&(ae=E,this.setSize(De,te,!1))},this.getSize=function(E){return E.set(De,te)},this.setSize=function(E,H,Q=!0){if(Ne.isPresenting){Qe("WebGLRenderer: Can't change size while VR device is presenting.");return}De=E,te=H,t.width=Math.floor(E*ae),t.height=Math.floor(H*ae),Q===!0&&(t.style.width=E+"px",t.style.height=H+"px"),_!==null&&_.setSize(t.width,t.height),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(De*ae,te*ae).floor()},this.setDrawingBufferSize=function(E,H,Q){De=E,te=H,ae=Q,t.width=Math.floor(E*Q),t.height=Math.floor(H*Q),this.setViewport(0,0,E,H)},this.setEffects=function(E){if(g===Xi){pt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let H=0;H<E.length;H++)if(E[H].isOutputPass===!0){Qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(K)},this.getViewport=function(E){return E.copy(Ye)},this.setViewport=function(E,H,Q,Z){E.isVector4?Ye.set(E.x,E.y,E.z,E.w):Ye.set(E,H,Q,Z),C.viewport(K.copy(Ye).multiplyScalar(ae).round())},this.getScissor=function(E){return E.copy(ce)},this.setScissor=function(E,H,Q,Z){E.isVector4?ce.set(E.x,E.y,E.z,E.w):ce.set(E,H,Q,Z),C.scissor($.copy(ce).multiplyScalar(ae).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(E){C.setScissorTest($e=E)},this.setOpaqueSort=function(E){oe=E},this.setTransparentSort=function(E){Be=E},this.getClearColor=function(E){return E.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(E=!0,H=!0,Q=!0){let Z=0;if(E){let J=!1;if(F!==null){let Ae=F.texture.format;J=x.has(Ae)}if(J){let Ae=F.texture.type,Ue=m.has(Ae),ke=ut.getClearColor(),ze=ut.getClearAlpha(),at=ke.r,gt=ke.g,Tt=ke.b;Ue?(f[0]=at,f[1]=gt,f[2]=Tt,f[3]=ze,O.clearBufferuiv(O.COLOR,0,f)):(M[0]=at,M[1]=gt,M[2]=Tt,M[3]=ze,O.clearBufferiv(O.COLOR,0,M))}else Z|=O.COLOR_BUFFER_BIT}H&&(Z|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Z|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&O.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),P=E},this.dispose=function(){t.removeEventListener("webglcontextlost",N,!1),t.removeEventListener("webglcontextrestored",D,!1),t.removeEventListener("webglcontextcreationerror",z,!1),ut.dispose(),Oe.dispose(),_e.dispose(),G.dispose(),le.dispose(),q.dispose(),Fe.dispose(),We.dispose(),Ee.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Dt),Ne.removeEventListener("sessionend",Nt),He.stop()};function N(E){E.preventDefault(),Oo("WebGLRenderer: Context Lost."),L=!0}function D(){Oo("WebGLRenderer: Context Restored."),L=!1;let E=T.autoReset,H=it.enabled,Q=it.autoUpdate,Z=it.needsUpdate,J=it.type;ge(),T.autoReset=E,it.enabled=H,it.autoUpdate=Q,it.needsUpdate=Z,it.type=J}function z(E){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ie(E){let H=E.target;H.removeEventListener("dispose",ie),ne(H)}function ne(E){Me(E),G.remove(E)}function Me(E){let H=G.get(E).programs;H!==void 0&&(H.forEach(function(Q){Ee.releaseProgram(Q)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Q,Z,J,Ae){H===null&&(H=Ve);let Ue=J.isMesh&&J.matrixWorld.determinantAffine()<0,ke=Ji(E,H,Q,Z,J);C.setMaterial(Z,Ue);let ze=Q.index,at=1;if(Z.wireframe===!0){if(ze=Ie.getWireframeAttribute(Q),ze===void 0)return;at=2}let gt=Q.drawRange,Tt=Q.attributes.position,Ze=gt.start*at,It=(gt.start+gt.count)*at;Ae!==null&&(Ze=Math.max(Ze,Ae.start*at),It=Math.min(It,(Ae.start+Ae.count)*at)),ze!==null?(Ze=Math.max(Ze,0),It=Math.min(It,ze.count)):Tt!=null&&(Ze=Math.max(Ze,0),It=Math.min(It,Tt.count));let Pt=It-Ze;if(Pt<0||Pt===1/0)return;Fe.setup(J,Z,ke,Q,ze);let Ut,Lt=V;if(ze!==null&&(Ut=ye.get(ze),Lt=ue,Lt.setIndex(Ut)),J.isMesh)Z.wireframe===!0?(C.setLineWidth(Z.wireframeLinewidth*st()),Lt.setMode(O.LINES)):Lt.setMode(O.TRIANGLES);else if(J.isLine){let Qt=Z.linewidth;Qt===void 0&&(Qt=1),C.setLineWidth(Qt*st()),J.isLineSegments?Lt.setMode(O.LINES):J.isLineLoop?Lt.setMode(O.LINE_LOOP):Lt.setMode(O.LINE_STRIP)}else J.isPoints?Lt.setMode(O.POINTS):J.isSprite&&Lt.setMode(O.TRIANGLES);if(J.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))Lt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Qt=J._multiDrawStarts,je=J._multiDrawCounts,Zt=J._multiDrawCount,Oi=ze?ye.get(ze).bytesPerElement:1,Gi=G.get(Z).currentProgram.getUniforms();for(let Fi=0;Fi<Zt;Fi++)Gi.setValue(O,"_gl_DrawID",Fi),Lt.render(Qt[Fi]/Oi,je[Fi])}else if(J.isInstancedMesh)Lt.renderInstances(Ze,Pt,J.count);else if(Q.isInstancedBufferGeometry){let Qt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,je=Math.min(Q.instanceCount,Qt);Lt.renderInstances(Ze,Pt,je)}else Lt.render(Ze,Pt)};function pe(E,H,Q,Z){P!==null&&E.isNodeMaterial&&P.setObject(Z,E),se===!0&&Ke.setState(E,Q,!1),E.transparent===!0&&E.side===Pi&&E.forceSinglePass===!1?(E.side=Ni,E.needsUpdate=!0,ht(E,H,Z),E.side=oa,E.needsUpdate=!0,ht(E,H,Z),E.side=Pi):ht(E,H,Z)}this.compile=function(E,H,Q=null){Q===null&&(Q=E),P!==null&&P.renderStart(E,H,Q),S=_e.get(Q),S.init(H),w.push(S),Q.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),E!==Q&&E.traverseVisible(function(J){J.isLight&&J.layers.test(H.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights(),P!==null&&P.updateLights(S.state.lightsArray),fe=this.localClippingEnabled,se=Ke.init(this.clippingPlanes,fe),se===!0&&Ke.setGlobalState(this.clippingPlanes,H),P!==null&&it.render(S.state.shadowsArray,Q,H);let Z=new Set;return E.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Ae=J.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){let ke=Ae[Ue];pe(ke,Q,H,J),Z.add(ke)}else pe(Ae,Q,H,J),Z.add(Ae)}),S=w.pop(),P!==null&&P.renderEnd(),Z},this.compileAsync=function(E,H,Q=null){let Z=this.compile(E,H,Q);return new Promise(J=>{function Ae(){if(Z.forEach(function(Ue){let ke=G.get(Ue).currentProgram;(ke===void 0||ke.isReady())&&Z.delete(Ue)}),Z.size===0){J(E);return}setTimeout(Ae,10)}mt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Xe=null;function ot(E){Xe&&Xe(E)}function Dt(){He.stop()}function Nt(){He.start()}let He=new Bf;He.setAnimationLoop(ot),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(E){Xe=E,Ne.setAnimationLoop(E),E===null?He.stop():He.start()},Ne.addEventListener("sessionstart",Dt),Ne.addEventListener("sessionend",Nt),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P!==null&&P.renderStart(E,H);let Q=Ne.enabled===!0&&Ne.isPresenting===!0,Z=_!==null&&(F===null||Q)&&_.begin(b,F);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(H),H=Ne.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,H,F),S=_e.get(E,w.length),S.init(H),S.state.textureUnits=re.getTextureUnits(),w.push(S),Re.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),he.setFromProjectionMatrix(Re,Tr,H.reversedDepth),fe=this.localClippingEnabled,se=Ke.init(this.clippingPlanes,fe),v=Oe.get(E,A.length),v.init(),A.push(v),Ne.enabled===!0&&Ne.isPresenting===!0){let Ae=b.xr.getDepthSensingMesh();Ae!==null&&ii(Ae,H,-1/0,b.sortObjects)}ii(E,H,0,b.sortObjects),v.finish(),P!==null&&P.updateLights(S.state.lightsArray),b.sortObjects===!0&&v.sort(oe,Be),tt=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,tt&&ut.addToRenderList(v,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),se===!0&&Ke.beginShadows();let J=S.state.shadowsArray;if(it.render(J,E,H),se===!0&&Ke.endShadows(),(Z&&_.hasRenderPass())===!1){let Ae=v.opaque,Ue=v.transmissive;if(S.setupLights(),H.isArrayCamera){let ke=H.cameras;if(Ue.length>0)for(let ze=0,at=ke.length;ze<at;ze++){let gt=ke[ze];rt(Ae,Ue,E,gt)}tt&&ut.render(E);for(let ze=0,at=ke.length;ze<at;ze++){let gt=ke[ze];Jt(v,E,gt,gt.viewport)}}else Ue.length>0&&rt(Ae,Ue,E,H),tt&&ut.render(E),Jt(v,E,H)}F!==null&&k===0&&(re.updateMultisampleRenderTarget(F),re.updateRenderTargetMipmap(F)),Z&&_.end(b),E.isScene===!0&&E.onAfterRender(b,E,H),Fe.resetDefaultState(),ee=-1,X=null,w.pop(),w.length>0?(S=w[w.length-1],re.setTextureUnits(S.state.textureUnits),se===!0&&Ke.setGlobalState(b.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?v=A[A.length-1]:v=null,P!==null&&P.renderEnd()};function ii(E,H,Q,Z){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLightProbeGrid)S.pushLightProbeGrid(E);else if(E.isLight)S.pushLight(E),E.castShadow&&S.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(he)){Z&&Ge.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);let Ae=q.update(E),Ue=E.material;Ue.visible&&v.push(E,Ae,Ue,Q,Ge.z,null,H)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(he))){let Ae=q.update(E),Ue=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ge.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ge.copy(Ae.boundingSphere.center)),Ge.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(Ue)){let ke=Ae.groups;for(let ze=0,at=ke.length;ze<at;ze++){let gt=ke[ze],Tt=Ue[gt.materialIndex];Tt&&Tt.visible&&v.push(E,Ae,Tt,Q,Ge.z,gt,H)}}else Ue.visible&&v.push(E,Ae,Ue,Q,Ge.z,null,H)}}let J=E.children;for(let Ae=0,Ue=J.length;Ae<Ue;Ae++)ii(J[Ae],H,Q,Z)}function Jt(E,H,Q,Z){let{opaque:J,transmissive:Ae,transparent:Ue}=E;S.setupLightsView(Q),se===!0&&Ke.setGlobalState(b.clippingPlanes,Q),Z&&C.viewport(K.copy(Z)),J.length>0&&ft(J,H,Q),Ae.length>0&&ft(Ae,H,Q),Ue.length>0&&ft(Ue,H,Q),C.buffers.depth.setTest(!0),C.buffers.depth.setMask(!0),C.buffers.color.setMask(!0),C.setPolygonOffset(!1)}function rt(E,H,Q,Z){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Z.id]===void 0){let Tt=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Z.id]=new Ti(1,1,{generateMipmaps:!0,type:Tt?_i:Xi,minFilter:lr,samples:Math.max(4,vt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}let J=S.state.transmissionRenderTarget[Z.id],Ae=Z.viewport||K;J.setSize(Ae.z*b.transmissionResolutionScale,Ae.w*b.transmissionResolutionScale);let Ue=b.getRenderTarget(),ke=b.getActiveCubeFace(),ze=b.getActiveMipmapLevel();b.setRenderTarget(J),b.getClearColor(be),qe=b.getClearAlpha(),qe<1&&b.setClearColor(16777215,.5),b.clear(),tt&&ut.render(Q);let at=b.toneMapping;b.toneMapping=Fr;let gt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),S.setupLightsView(Z),se===!0&&Ke.setGlobalState(b.clippingPlanes,Z),ft(E,Q,Z),re.updateMultisampleRenderTarget(J),re.updateRenderTargetMipmap(J),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Tt=!1;for(let Ze=0,It=H.length;Ze<It;Ze++){let Pt=H[Ze],{object:Ut,geometry:Lt,material:Qt,group:je}=Pt;if(Qt.side===Pi&&Ut.layers.test(Z.layers)){let Zt=Qt.side;Qt.side=Ni,Qt.needsUpdate=!0,oi(Ut,Q,Z,Lt,Qt,je),Qt.side=Zt,Qt.needsUpdate=!0,Tt=!0}}Tt===!0&&(re.updateMultisampleRenderTarget(J),re.updateRenderTargetMipmap(J))}b.setRenderTarget(Ue,ke,ze),b.setClearColor(be,qe),gt!==void 0&&(Z.viewport=gt),b.toneMapping=at}function ft(E,H,Q){let Z=H.isScene===!0?H.overrideMaterial:null;for(let J=0,Ae=E.length;J<Ae;J++){let Ue=E[J],{object:ke,geometry:ze,group:at}=Ue,gt=Ue.material;gt.allowOverride===!0&&Z!==null&&(gt=Z),ke.layers.test(Q.layers)&&oi(ke,H,Q,ze,gt,at)}}function oi(E,H,Q,Z,J,Ae){P!==null&&J.isNodeMaterial&&P.setObject(E,J),E.onBeforeRender(b,H,Q,Z,J,Ae),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),J.onBeforeRender(b,H,Q,Z,E,Ae),J.transparent===!0&&J.side===Pi&&J.forceSinglePass===!1?(J.side=Ni,J.needsUpdate=!0,b.renderBufferDirect(Q,H,Z,J,E,Ae),J.side=oa,J.needsUpdate=!0,b.renderBufferDirect(Q,H,Z,J,E,Ae),J.side=Pi):b.renderBufferDirect(Q,H,Z,J,E,Ae),E.onAfterRender(b,H,Q,Z,J,Ae)}function ht(E,H,Q){H.isScene!==!0&&(H=Ve);let Z=G.get(E),J=S.state.lights,Ae=S.state.shadowsArray,Ue=J.state.version,ke=Ee.getParameters(E,J.state,Ae,H,Q,S.state.lightProbeGridArray),ze=Ee.getProgramCacheKey(ke),at=Z.programs;Z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,Z.fog=H.fog;let gt=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;Z.envMap=le.get(E.envMap||Z.environment,gt),Z.envMapRotation=Z.environment!==null&&E.envMap===null?H.environmentRotation:E.envMapRotation,at===void 0&&(E.addEventListener("dispose",ie),at=new Map,Z.programs=at);let Tt=at.get(ze);if(Tt!==void 0){if(Z.currentProgram===Tt&&Z.lightsStateVersion===Ue)return qr(E,ke),Tt}else ke.uniforms=Ee.getUniforms(E),P!==null&&E.isNodeMaterial&&P.build(E,Q,ke),E.onBeforeCompile(ke,b),Tt=Ee.acquireProgram(ke,ze),at.set(ze,Tt),Z.uniforms=ke.uniforms;let Ze=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ze.clippingPlanes=Ke.uniform),qr(E,ke),Z.needsLights=Ri(E),Z.lightsStateVersion=Ue,Z.needsLights&&(Ze.ambientLightColor.value=J.state.ambient,Ze.lightProbe.value=J.state.probe,Ze.sunLights.value=J.state.sun,Ze.sunLightShadows.value=J.state.sunShadow,Ze.directionalLights.value=J.state.directional,Ze.directionalLightShadows.value=J.state.directionalShadow,Ze.spotLights.value=J.state.spot,Ze.spotLightShadows.value=J.state.spotShadow,Ze.rectAreaLights.value=J.state.rectArea,Ze.ltc_1.value=J.state.rectAreaLTC1,Ze.ltc_2.value=J.state.rectAreaLTC2,Ze.pointLights.value=J.state.point,Ze.pointLightShadows.value=J.state.pointShadow,Ze.hemisphereLights.value=J.state.hemi,Ze.sunShadowMatrix.value=J.state.sunShadowMatrix,Ze.sunShadowCascade.value=J.state.sunShadowCascade,Ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Ze.spotLightMatrix.value=J.state.spotLightMatrix,Ze.spotLightMap.value=J.state.spotLightMap,Ze.pointShadowMatrix.value=J.state.pointShadowMatrix),Z.lightProbeGrid=S.state.lightProbeGridArray.length>0,Z.currentProgram=Tt,Z.uniformsList=null,Tt}function Gt(E){if(E.uniformsList===null){let H=E.currentProgram.getUniforms();E.uniformsList=Lo.seqWithValue(H.seq,E.uniforms)}return E.uniformsList}function qr(E,H){let Q=G.get(E);Q.outputColorSpace=H.outputColorSpace,Q.batching=H.batching,Q.batchingColor=H.batchingColor,Q.instancing=H.instancing,Q.instancingColor=H.instancingColor,Q.instancingMorph=H.instancingMorph,Q.skinning=H.skinning,Q.morphTargets=H.morphTargets,Q.morphNormals=H.morphNormals,Q.morphColors=H.morphColors,Q.morphTargetsCount=H.morphTargetsCount,Q.numClippingPlanes=H.numClippingPlanes,Q.numIntersection=H.numClipIntersection,Q.vertexAlphas=H.vertexAlphas,Q.vertexTangents=H.vertexTangents,Q.toneMapping=H.toneMapping}function Ai(E,H){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(H.matrixWorld);for(let Q=0,Z=E.length;Q<Z;Q++){let J=E[Q];if(J.texture!==null&&J.boundingBox.containsPoint(y))return J}return null}function Ji(E,H,Q,Z,J){H.isScene!==!0&&(H=Ve),re.resetTextureUnits();let Ae=H.fog,Ue=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?H.environment:null,ke=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:wt.workingColorSpace,ze=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,at=le.get(Z.envMap||Ue,ze),gt=Z.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Tt=!!Q.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ze=!!Q.morphAttributes.position,It=!!Q.morphAttributes.normal,Pt=!!Q.morphAttributes.color,Ut=Fr;Z.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ut=b.toneMapping);let Lt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Qt=Lt!==void 0?Lt.length:0,je=G.get(Z),Zt=S.state.lights;if(se===!0&&(fe===!0||E!==X)){let zt=E===X&&Z.id===ee;Ke.setState(Z,E,zt)}let Oi=!1;Z.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Zt.state.version||je.outputColorSpace!==ke||J.isBatchedMesh&&je.batching===!1||!J.isBatchedMesh&&je.batching===!0||J.isBatchedMesh&&je.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&je.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&je.instancing===!1||!J.isInstancedMesh&&je.instancing===!0||J.isSkinnedMesh&&je.skinning===!1||!J.isSkinnedMesh&&je.skinning===!0||J.isInstancedMesh&&je.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&je.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&je.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&je.instancingMorph===!1&&J.morphTexture!==null||je.envMap!==at||Z.fog===!0&&je.fog!==Ae||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==Ke.numPlanes||je.numIntersection!==Ke.numIntersection)||je.vertexAlphas!==gt||je.vertexTangents!==Tt||je.morphTargets!==Ze||je.morphNormals!==It||je.morphColors!==Pt||je.toneMapping!==Ut||je.morphTargetsCount!==Qt||!!je.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Oi=!0):(Oi=!0,je.__version=Z.version);let Gi=je.currentProgram;Oi===!0&&(Gi=ht(Z,H,J),P&&Z.isNodeMaterial&&P.onUpdateProgram(Z,Gi,je));let Fi=!1,sr=!1,Yr=!1,Ft=Gi.getUniforms(),Xt=je.uniforms;if(C.useProgram(Gi.program)&&(Fi=!0,sr=!0,Yr=!0),Z.id!==ee&&(ee=Z.id,sr=!0),je.needsLights){let zt=Ai(S.state.lightProbeGridArray,J);je.lightProbeGrid!==zt&&(je.lightProbeGrid=zt,sr=!0)}if(Fi||X!==E){C.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),Ft.setValue(O,"projectionMatrix",E.projectionMatrix),Ft.setValue(O,"viewMatrix",E.matrixWorldInverse);let zt=Ft.map.cameraPosition;zt!==void 0&&zt.setValue(O,Se.setFromMatrixPosition(E.matrixWorld)),vt.logarithmicDepthBuffer&&Ft.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Ft.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),X!==E&&(X=E,sr=!0,Yr=!0)}if(je.needsLights&&(Zt.state.sunShadowMap.length>0&&Ft.setValue(O,"sunShadowMap",Zt.state.sunShadowMap,re),Zt.state.directionalShadowMap.length>0&&Ft.setValue(O,"directionalShadowMap",Zt.state.directionalShadowMap,re),Zt.state.spotShadowMap.length>0&&Ft.setValue(O,"spotShadowMap",Zt.state.spotShadowMap,re),Zt.state.pointShadowMap.length>0&&Ft.setValue(O,"pointShadowMap",Zt.state.pointShadowMap,re)),J.isSkinnedMesh){Ft.setOptional(O,J,"bindMatrix"),Ft.setOptional(O,J,"bindMatrixInverse");let zt=J.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Ft.setValue(O,"boneTexture",zt.boneTexture,re))}J.isBatchedMesh&&(Ft.setOptional(O,J,"batchingTexture"),Ft.setValue(O,"batchingTexture",J._matricesTexture,re),Ft.setOptional(O,J,"batchingIdTexture"),Ft.setValue(O,"batchingIdTexture",J._indirectTexture,re),Ft.setOptional(O,J,"batchingColorTexture"),J._colorsTexture!==null&&Ft.setValue(O,"batchingColorTexture",J._colorsTexture,re));let vr=Q.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&St.update(J,Q,Gi),(sr||je.receiveShadow!==J.receiveShadow)&&(je.receiveShadow=J.receiveShadow,Ft.setValue(O,"receiveShadow",J.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&H.environment!==null&&(Xt.envMapIntensity.value=H.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=qM()),sr){if(Ft.setValue(O,"toneMappingExposure",b.toneMappingExposure),je.needsLights&&Ui(Xt,Yr),Ae&&Z.fog===!0&&Ce.refreshFogUniforms(Xt,Ae),Ce.refreshMaterialUniforms(Xt,Z,ae,te,S.state.transmissionRenderTarget[E.id]),je.needsLights&&je.lightProbeGrid){let zt=je.lightProbeGrid;Xt.probesSH.value=zt.texture,Xt.probesMin.value.copy(zt.boundingBox.min),Xt.probesMax.value.copy(zt.boundingBox.max),Xt.probesResolution.value.copy(zt.resolution)}Lo.upload(O,Gt(je),Xt,re)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Lo.upload(O,Gt(je),Xt,re),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Ft.setValue(O,"center",J.center),Ft.setValue(O,"modelViewMatrix",J.modelViewMatrix),Ft.setValue(O,"normalMatrix",J.normalMatrix),Ft.setValue(O,"modelMatrix",J.matrixWorld),Z.uniformsGroups!==void 0){let zt=Z.uniformsGroups;for(let Zr=0,_r=zt.length;Zr<_r;Zr++){let Jn=zt[Zr];We.update(Jn,Gi),We.bind(Jn,Gi)}}return Gi}function Ui(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.sunLights.needsUpdate=H,E.sunLightShadows.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function Ri(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(E,H,Q){let Z=G.get(E);Z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=H,G.get(E.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Q,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,H){let Q=G.get(E);Q.__webglFramebuffer=H,Q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,Q=0){F=E,I=H,k=Q;let Z=null,J=!1,Ae=!1;if(E){let Ue=G.get(E);if(Ue.__useDefaultFramebuffer!==void 0){C.bindFramebuffer(O.FRAMEBUFFER,Ue.__webglFramebuffer),K.copy(E.viewport),$.copy(E.scissor),xe=E.scissorTest,C.viewport(K),C.scissor($),C.setScissorTest(xe),ee=-1;return}else if(Ue.__webglFramebuffer===void 0)re.setupRenderTarget(E);else if(Ue.__hasExternalTextures)re.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let at=E.depthTexture;if(Ue.__boundDepthTexture!==at){if(at!==null&&G.has(at)&&(E.width!==at.image.width||E.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(E)}}let ke=E.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ae=!0);let ze=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ze[H])?Z=ze[H][Q]:Z=ze[H],J=!0):E.samples>0&&re.useMultisampledRTT(E)===!1?Z=G.get(E).__webglMultisampledFramebuffer:Array.isArray(ze)?Z=ze[Q]:Z=ze,K.copy(E.viewport),$.copy(E.scissor),xe=E.scissorTest}else K.copy(Ye).multiplyScalar(ae).floor(),$.copy(ce).multiplyScalar(ae).floor(),xe=$e;if(Q!==0&&(Z=B),C.bindFramebuffer(O.FRAMEBUFFER,Z)&&C.drawBuffers(E,Z),C.viewport(K),C.scissor($),C.setScissorTest(xe),J){let Ue=G.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ue.__webglTexture,Q)}else if(Ae){let Ue=H;for(let ke=0;ke<E.textures.length;ke++){let ze=G.get(E.textures[ke]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ke,ze.__webglTexture,Q,Ue)}}else if(E!==null&&Q!==0){let Ue=G.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ue.__webglTexture,Q)}ee=-1};function da(E){let H=G.get(E);return(H.__readFormat!==E.format||H.__readType!==E.type)&&(H.__readFormat=E.format,H.__readType=E.type,H.__formatReadable=vt.textureFormatReadable(E.format),H.__typeReadable=vt.textureTypeReadable(E.type)),H}this.readRenderTargetPixels=function(E,H,Q,Z,J,Ae,Ue,ke=0){if(!(E&&E.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze){C.bindFramebuffer(O.FRAMEBUFFER,ze);try{let at=E.textures[ke],gt=at.format,Tt=at.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ke);let Ze=da(at);if(Ze.__formatReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ze.__typeReadable===!1){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-Z&&Q>=0&&Q<=E.height-J&&O.readPixels(H,Q,Z,J,me.convert(gt),me.convert(Tt),Ae)}finally{let at=F!==null?G.get(F).__webglFramebuffer:null;C.bindFramebuffer(O.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(E,H,Q,Z,J,Ae,Ue,ke=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(ze=ze[Ue]),ze)if(H>=0&&H<=E.width-Z&&Q>=0&&Q<=E.height-J){C.bindFramebuffer(O.FRAMEBUFFER,ze);let at=E.textures[ke],gt=at.format,Tt=at.type;E.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+ke);let Ze=da(at);if(Ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let It=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,It),O.bufferData(O.PIXEL_PACK_BUFFER,Ae.byteLength,O.STREAM_READ),O.readPixels(H,Q,Z,J,me.convert(gt),me.convert(Tt),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Pt=F!==null?G.get(F).__webglFramebuffer:null;C.bindFramebuffer(O.FRAMEBUFFER,Pt);let Ut=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Lg(O,Ut,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,It),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,Ae),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(It),O.deleteSync(Ut),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,H=null,Q=0){let Z=Math.pow(2,-Q),J=Math.floor(E.image.width*Z),Ae=Math.floor(E.image.height*Z),Ue=H!==null?H.x:0,ke=H!==null?H.y:0;re.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,Q,0,0,Ue,ke,J,Ae),C.unbindTexture()},this.copyTextureToTexture=function(E,H,Q=null,Z=null,J=0,Ae=0){let Ue,ke,ze,at,gt,Tt,Ze,It,Pt,Ut=E.isCompressedTexture?E.mipmaps[Ae]:E.image;if(Q!==null)Ue=Q.max.x-Q.min.x,ke=Q.max.y-Q.min.y,ze=Q.isBox3?Q.max.z-Q.min.z:1,at=Q.min.x,gt=Q.min.y,Tt=Q.isBox3?Q.min.z:0;else{let Xt=Math.pow(2,-J);Ue=Math.floor(Ut.width*Xt),ke=Math.floor(Ut.height*Xt),E.isDataArrayTexture?ze=Ut.depth:E.isData3DTexture?ze=Math.floor(Ut.depth*Xt):ze=1,at=0,gt=0,Tt=0}Z!==null?(Ze=Z.x,It=Z.y,Pt=Z.z):(Ze=0,It=0,Pt=0);let Lt=me.convert(H.format),Qt=me.convert(H.type),je;H.isData3DTexture?(re.setTexture3D(H,0),je=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(re.setTexture2DArray(H,0),je=O.TEXTURE_2D_ARRAY):(re.setTexture2D(H,0),je=O.TEXTURE_2D),C.activeTexture(O.TEXTURE0),C.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let Zt=C.getParameter(O.UNPACK_ROW_LENGTH),Oi=C.getParameter(O.UNPACK_IMAGE_HEIGHT),Gi=C.getParameter(O.UNPACK_SKIP_PIXELS),Fi=C.getParameter(O.UNPACK_SKIP_ROWS),sr=C.getParameter(O.UNPACK_SKIP_IMAGES);C.pixelStorei(O.UNPACK_ROW_LENGTH,Ut.width),C.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ut.height),C.pixelStorei(O.UNPACK_SKIP_PIXELS,at),C.pixelStorei(O.UNPACK_SKIP_ROWS,gt),C.pixelStorei(O.UNPACK_SKIP_IMAGES,Tt);let Yr=E.isDataArrayTexture||E.isData3DTexture,Ft=H.isDataArrayTexture||H.isData3DTexture;if(E.isDepthTexture){let Xt=G.get(E),vr=G.get(H),zt=G.get(Xt.__renderTarget),Zr=G.get(vr.__renderTarget);C.bindFramebuffer(O.READ_FRAMEBUFFER,zt.__webglFramebuffer),C.bindFramebuffer(O.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let _r=0;_r<ze;_r++)Yr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(E).__webglTexture,J,Tt+_r),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,G.get(H).__webglTexture,Ae,Pt+_r)),O.blitFramebuffer(at,gt,Ue,ke,Ze,It,Ue,ke,O.DEPTH_BUFFER_BIT,O.NEAREST);C.bindFramebuffer(O.READ_FRAMEBUFFER,null),C.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(J!==0||E.isRenderTargetTexture||G.has(E)){let Xt=G.get(E),vr=G.get(H);C.bindFramebuffer(O.READ_FRAMEBUFFER,j),C.bindFramebuffer(O.DRAW_FRAMEBUFFER,U);for(let zt=0;zt<ze;zt++)Yr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Xt.__webglTexture,J,Tt+zt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Xt.__webglTexture,J),Ft?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,vr.__webglTexture,Ae,Pt+zt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,vr.__webglTexture,Ae),J!==0?O.blitFramebuffer(at,gt,Ue,ke,Ze,It,Ue,ke,O.COLOR_BUFFER_BIT,O.NEAREST):Ft?O.copyTexSubImage3D(je,Ae,Ze,It,Pt+zt,at,gt,Ue,ke):O.copyTexSubImage2D(je,Ae,Ze,It,at,gt,Ue,ke);C.bindFramebuffer(O.READ_FRAMEBUFFER,null),C.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ft?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(je,Ae,Ze,It,Pt,Ue,ke,ze,Lt,Qt,Ut.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(je,Ae,Ze,It,Pt,Ue,ke,ze,Lt,Ut.data):O.texSubImage3D(je,Ae,Ze,It,Pt,Ue,ke,ze,Lt,Qt,Ut):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,Ae,Ze,It,Ue,ke,Lt,Qt,Ut.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,Ae,Ze,It,Ut.width,Ut.height,Lt,Ut.data):O.texSubImage2D(O.TEXTURE_2D,Ae,Ze,It,Ue,ke,Lt,Qt,Ut);C.pixelStorei(O.UNPACK_ROW_LENGTH,Zt),C.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Oi),C.pixelStorei(O.UNPACK_SKIP_PIXELS,Gi),C.pixelStorei(O.UNPACK_SKIP_ROWS,Fi),C.pixelStorei(O.UNPACK_SKIP_IMAGES,sr),Ae===0&&H.generateMipmaps&&O.generateMipmap(je),C.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&re.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?re.setTextureCube(E,0):E.isData3DTexture?re.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?re.setTexture2DArray(E,0):re.setTexture2D(E,0),C.unbindTexture()},this.resetState=function(){I=0,k=0,F=null,C.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var VS=new R;var jn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var ir=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},YM=new Wa(-1,1,1,-1,0,1),Lh=class extends At{constructor(){super(),this.setAttribute("position",new nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new nt([0,2,0,0,2,0],2))}},ZM=new Lh,Ea=class{constructor(t){this._mesh=new dt(ZM,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,YM)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Xa=class extends ir{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof Wt?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=dr.clone(t.uniforms),this.material=new Wt({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ea(this.material)}render(t,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Os=class extends ir{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,r){let a=t.getContext(),n=t.state;n.buffers.color.setMask(!1),n.buffers.depth.setMask(!1),n.buffers.color.setLocked(!0),n.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),n.buffers.stencil.setTest(!0),n.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),n.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),n.buffers.stencil.setClear(o),n.buffers.stencil.setLocked(!0),t.setRenderTarget(r),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),n.buffers.color.setLocked(!1),n.buffers.depth.setLocked(!1),n.buffers.color.setMask(!0),n.buffers.depth.setMask(!0),n.buffers.stencil.setLocked(!1),n.buffers.stencil.setFunc(a.EQUAL,1,4294967295),n.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),n.buffers.stencil.setLocked(!0)}},al=class extends ir{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var nl=class{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){let r=t.getSize(new de);this._width=r.width,this._height=r.height,i=new Ti(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_i}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Xa(jn),this.copyPass.material.blending=Er,this.timer=new Ff}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let i=this.renderer.getRenderTarget(),r=!1;for(let a=0,n=this.passes.length;a<n;a++){let s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,t,r),s.needsSwap){if(r){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Os!==void 0&&(s instanceof Os?r=!0:s instanceof al&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){let i=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;let r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let n=0;n<this.passes.length;n++)this.passes[n].setSize(r,a)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var sl=class extends ir{constructor(t,i,r=null,a=null,n=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=n,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Te}render(t,i,r){let a=t.autoClear;t.autoClear=!1;let n,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(n=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(n),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),t.autoClear=a}};var qf={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var qn=class e extends ir{constructor(t,i=1,r,a){super(),this.strength=i,this.radius=r,this.threshold=a,this.resolution=t!==void 0?new de(t.x,t.y):new de(256,256),this.clearColor=new Te(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Ti(n,s,{type:_i,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Ti(n,s,{type:_i,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Ti(n,s,{type:_i,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),n=Math.round(n/2),s=Math.round(s/2)}let o=qf;this.highPassUniforms=dr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Wt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];n=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new de(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1),new R(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=dr.clone(jn.uniforms),this.blendMaterial=new Wt({uniforms:this.copyUniforms,vertexShader:jn.vertexShader,fragmentShader:jn.fragmentShader,premultipliedAlpha:!0,blending:ba,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Te,this._oldClearAlpha=1,this._basic=new xi,this._fsQuad=new Ea(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let r=Math.round(t/2),a=Math.round(i/2);this.renderTargetBright.setSize(r,a);for(let n=0;n<this.nMips;n++)this.renderTargetsHorizontal[n].setSize(r,a),this.renderTargetsVertical[n].setSize(r,a),this.separableBlurMaterials[n].uniforms.invSize.value=new de(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(t,i,r,a,n){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let s=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),n&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,n&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=s}_getSeparableBlurMaterial(t){let i=[],r=t/3;for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(r*r))/r);let a=[],n=[];for(let s=1;s<t;s+=2){let o=i[s],l=s+1<t?i[s+1]:0,c=o+l;a.push((s*o+(s+1)*l)/c),n.push(c)}return new Wt({defines:{KERNEL_PAIRS:a.length},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},centerWeight:{value:i[0]},gaussianOffsets:{value:a},gaussianWeights:{value:n}},vertexShader:`

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

				}`})}};qn.BlurDirectionX=new de(1,0);qn.BlurDirectionY=new de(0,1);var Fs={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ol=class extends ir{constructor(){super(),this.isOutputPass=!0,this.uniforms=dr.clone(Fs.uniforms),this.material=new Eh({name:Fs.name,uniforms:this.uniforms,vertexShader:Fs.vertexShader,fragmentShader:Fs.fragmentShader}),this._fsQuad=new Ea(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},wt.getTransfer(this._outputColorSpace)===kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ko?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Go?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fn?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Wo&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ti={giza:{x:-84,z:-12,biome:"desert",lat:"29.98\xB0N",lon:"31.13\xB0E"},cairo:{x:-58,z:-32,biome:"desert",lat:"30.03\xB0N",lon:"31.26\xB0E"},luxor:{x:-54,z:26,biome:"desert",lat:"25.69\xB0N",lon:"32.64\xB0E"},qinggan:{x:-26,z:-50,biome:"danxia",lat:"40.09\xB0N",lon:"94.67\xB0E"},yunnan:{x:-4,z:30,biome:"meadow",lat:"27.83\xB0N",lon:"99.71\xB0E"},beijing:{x:26,z:-38,biome:"autumn",lat:"39.92\xB0N",lon:"116.39\xB0E"},nanjing:{x:50,z:0,biome:"plane",lat:"32.06\xB0N",lon:"118.80\xB0E"},shanghai:{x:84,z:26,biome:"coast",lat:"31.24\xB0N",lon:"121.50\xB0E"},road:{x:38,z:44,biome:"field",lat:"\u2014",lon:"\u2014"}},Cr={x:8,z:4},Bs=e=>-70-Math.sin(e*.06)*4,Nh=e=>6+Math.sin(e*.08)*3,KM=[[-30,4,13,9],[-22,-6,11,8],[-36,16,12,9],[-16,-16,9,7],[-40,30,10,8],[-18,54,13,9],[0,62,15,10],[16,58,11,8],[-64,-58,8,9],[62,-62,9,10],[60,-32,6,8]],yi=(e,t,i)=>{let r=Math.min(1,Math.max(0,(i-e)/(t-e)));return r*r*(3-2*r)};function ll(e,t){let i=Math.sin(e*127.1+t*311.7)*43758.5453;return i-Math.floor(i)}function Dh(e,t){let i=Math.floor(e),r=Math.floor(t),a=e-i,n=t-r,s=a*a*(3-2*a),o=n*n*(3-2*n),l=ll(i,r),c=ll(i+1,r),h=ll(i,r+1),d=ll(i+1,r+1);return l+(c-l)*s+(h-l)*o+(l-c-h+d)*s*o}var pr=(e,t)=>Dh(e,t)*.55+Dh(e*2.1,t*2.1)*.3+Dh(e*4.3,t*4.3)*.15;function fr(e,t){let i={},r=0;for(let a in ti){let n=ti[a],s=(e-n.x)**2+(t-n.z)**2,o=Math.exp(-s/676);i[n.biome]=(i[n.biome]||0)+o,r+=o}for(let a in i)i[a]/=r||1;return i}function ja(e,t){let i=null,r=1/0;for(let a in ti){let n=ti[a],s=Math.hypot(e-n.x,t-n.z);s<r&&(r=s,i=a)}return{key:i,d:r}}var zs=(e,t)=>Math.pow(Math.pow(Math.abs(e)/112,4)+Math.pow(Math.abs(t)/72,4),.25),$M=[[[8,4],[4,16],[-4,30]],[[-4,30],[-18,42],[-30,46],[-44,38],[-54,26]],[[-54,26],[-62,18],[-72,8],[-80,-2],[-84,-12]],[[-84,-12],[-74,-24],[-58,-32]],[[-58,-32],[-44,-42],[-26,-50]],[[-26,-50],[-12,-36],[-6,-24],[2,-8],[8,4]],[[8,4],[18,-14],[26,-38]],[[8,4],[28,2],[50,0]],[[26,-38],[40,-26],[50,-18],[50,0]],[[50,0],[64,18],[84,26]],[[50,0],[46,22],[38,44]],[[38,44],[16,40],[-4,30]]];function JM(e,t,i,r,a,n){let s=a-i,o=n-r,l=Math.max(0,Math.min(1,((e-i)*s+(t-r)*o)/(s*s+o*o)));return Math.hypot(e-i-s*l,t-r-o*l)}function QM(e,t){let i=1/0;for(let r of $M)for(let a=0;a<r.length-1;a++)i=Math.min(i,JM(e,t,r[a][0],r[a][1],r[a+1][0],r[a+1][1]));return i}var Uh=[];function eb(e,t){let i=.15+(pr(e*.05,t*.05)-.5)*.7,r=fr(e,t),a=.5+.5*Math.sin(e*.18+Math.sin(t*.11)*2);i+=((r.desert||0)*.9+(r.danxia||0)*1.2)*(a*a*1.1+pr(e*.09,t*.09)*.9);for(let[l,c,h,d]of KM){let u=(e-l)**2+(t-c)**2;i+=h*Math.exp(-u/(d*d))*(.85+.3*pr(e*.2,t*.2))}let n=Math.abs(e-Bs(t));i-=1.3*(1-yi(2.4,4.8,n))*(1-yi(60,70,Math.abs(t))),i-=1.4*(1-yi(5,11,Math.hypot(e-14,t-38))),i-=1.2*(1-yi(2.5,5,Math.hypot((e+6)*.6,t+52))),e>66&&(i-=1.4*(1-yi(2.6,5,Math.abs(t-Nh(e))))*yi(66,72,e));for(let l in ti){let c=ti[l],h=Math.hypot(e-c.x,t-c.z),d=yi(6.5,12,h);i=i*d+.12*(1-d)}for(let[l,c,h,d]of Uh){let u=Math.hypot(e-l,t-c),p=yi(h,h+4,u);i=i*p+d*(1-p)}let s=Math.hypot(e-Cr.x,t-Cr.z),o=yi(7,13,s);return i=i*o+.12*(1-o),i-=1.75*yi(.86,1.02,zs(e,t)),i}function Yf(){let e=new Float32Array(38801);for(let s=0;s<=160;s++)for(let o=0;o<=240;o++)e[s*241+o]=eb(-120+o*1,-80+s*1);let t=(s,o)=>e[Math.min(160,Math.max(0,o))*241+Math.min(240,Math.max(0,s))],i=(s,o)=>{let l=(s- -120)/1,c=(o- -80)/1,h=Math.floor(l),d=Math.floor(c),u=l-h,p=c-d;return t(h,d)*(1-u)*(1-p)+t(h+1,d)*u*(1-p)+t(h,d+1)*(1-u)*p+t(h+1,d+1)*u*p},r=new Float32Array((240/2+1)*(160/2+1));for(let s=0;s<=160/2;s++)for(let o=0;o<=240/2;o++)r[s*(240/2+1)+o]=QM(-120+o*2,-80+s*2);return{H:e,at:t,sample:i,slope:(s,o)=>Math.hypot(i(s+1,o)-i(s-1,o),i(s,o+1)-i(s,o-1))/2,road:(s,o)=>{let l=Math.round((s- -120)/2),c=Math.round((o- -80)/2);return r[Math.min(160/2,Math.max(0,c))*(240/2+1)+Math.min(240/2,Math.max(0,l))]}}}var di={half:{x:1.05,y:.34,z:.66},wheel:{x:.78,y:-.08,z:.7,r:.42,rest:.34},mass:1,com:{x:0,y:-.8,z:0},engine:7.5,boost:12.5,reverse:4.6,brake:.55,idleBrake:.03,handbrake:1.1,top:14,topBoost:21,topReverse:6,steer:.55,steerFast:.22,jump:6.4},Vr=1/60,qa=(e,t,i)=>Math.min(i,Math.max(t,e)),Zf=(e,t,i)=>{let r=qa((i-e)/(t-e),0,1);return r*r*(3-2*r)};function Kf(e,t){let i=new e.World({x:0,y:-18,z:0});i.timestep=Vr;let r=new e.EventQueue(!0),a=new Map,n=new Float32Array(38801);for(let I=0;I<=240;I++)for(let k=0;k<=160;k++)n[I*161+k]=t.at(I,k);let s=i.createRigidBody(e.RigidBodyDesc.fixed().setTranslation(-120+240/2,0,-80+160/2)),o=i.createCollider(e.ColliderDesc.heightfield(160,240,n,{x:240,y:1,z:160}).setFriction(.9),s);a.set(o.handle,"ground");let l=i.createRigidBody(e.RigidBodyDesc.fixed()),c=I=>({x:0,y:Math.sin(I/2),z:0,w:Math.cos(I/2)}),h=(I,k)=>(I&&a.set(I.handle,k),I),d={box(I,k,F,ee,X,K,$=0,xe="stone"){return h(i.createCollider(e.ColliderDesc.cuboid(ee,X,K).setTranslation(I,k,F).setRotation(c($)).setFriction(.5),l),xe)},cyl(I,k,F,ee,X,K="stone"){return h(i.createCollider(e.ColliderDesc.cylinder(ee,X).setTranslation(I,k,F).setFriction(.5),l),K)},hull(I,k,F,ee,X=0,K="stone"){let $=e.ColliderDesc.convexHull(new Float32Array(I));return $&&h(i.createCollider($.setTranslation(k,F,ee).setRotation(c(X)).setFriction(.5),l),K)}},u=[];function p(I,{x:k,y:F,z:ee,ry:X=0,mass:K=1,friction:$=.6,restitution:xe=.15,kind:be="wood",linDamp:qe=.1,angDamp:De=.3}){var oe;let te=i.createRigidBody(e.RigidBodyDesc.dynamic().setTranslation(k,F,ee).setRotation(c(X)).setCanSleep(!0).setLinearDamping(qe).setAngularDamping(De)),ae;return I.type==="box"?ae=e.ColliderDesc.cuboid(I.hx,I.hy,I.hz):I.type==="roundcyl"?ae=e.ColliderDesc.roundCylinder(I.hh,I.r,(oe=I.b)!=null?oe:.05):I.type==="cone"?ae=e.ColliderDesc.cone(I.hh,I.r):I.type==="cyl"?ae=e.ColliderDesc.cylinder(I.hh,I.r):ae=e.ColliderDesc.ball(I.r),I.rot&&ae.setRotation(I.rot),ae.setMass(K).setFriction($).setRestitution(xe),h(i.createCollider(ae,te),be),te.sleep(),u.push(te),te}let g=i.createRigidBody(e.RigidBodyDesc.dynamic().setTranslation(0,3,0).setCanSleep(!1).setCcdEnabled(!0).setAngularDamping(.6).setLinearDamping(.08)),x=di.half,m=i.createCollider(e.ColliderDesc.cuboid(x.x,x.y,x.z).setMassProperties(di.mass,di.com,{x:.3,y:.45,z:.32},{x:0,y:0,z:0,w:1}).setFriction(.3).setRestitution(.1).setActiveEvents(e.ActiveEvents.COLLISION_EVENTS),g),f=i.createCollider(e.ColliderDesc.cuboid(.62,.26,.6).setTranslation(-.12,.58,0).setMass(0).setFriction(.3).setActiveEvents(e.ActiveEvents.COLLISION_EVENTS),g),M=new Set([m.handle,f.handle]),y=i.createVehicleController(g),v=di.wheel,S=[[v.x,v.y,v.z],[v.x,v.y,-v.z],[-v.x,v.y,v.z],[-v.x,v.y,-v.z]];S.forEach(([I,k,F],ee)=>{y.addWheel({x:I,y:k,z:F},{x:0,y:-1,z:0},{x:0,y:0,z:1},v.rest,v.r),y.setWheelSuspensionStiffness(ee,34),y.setWheelSuspensionCompression(ee,3.4),y.setWheelSuspensionRelaxation(ee,2.8),y.setWheelMaxSuspensionTravel(ee,.32),y.setWheelMaxSuspensionForce(ee,200),y.setWheelFrictionSlip(ee,1.5),y.setWheelSideFrictionStiffness(ee,1.6)});let A=(I,k)=>{let{x:F,y:ee,z:X,w:K}=I,[$,xe,be]=k,qe=K*$+ee*be-X*xe,De=K*xe+X*$-F*be,te=K*be+F*xe-ee*$,ae=-F*$-ee*xe-X*be;return[qe*K+ae*-F+De*-X-te*-ee,De*K+ae*-ee+te*-F-qe*-X,te*K+ae*-X+qe*-ee-De*-F]},w=I=>{let k=g.translation(),[F,ee,X]=A(g.rotation(),S[I]);return{x:k.x+F,y:k.y+ee,z:k.z+X}},_=()=>({p:{x:0,y:0,z:0},q:{x:0,y:0,z:0,w:1},travel:[v.rest,v.rest,v.rest,v.rest],steer:[0,0,0,0],spin:[0,0,0,0]}),b=_(),L=_(),P=I=>{var ee,X,K;let k=g.translation(),F=g.rotation();I.p.x=k.x,I.p.y=k.y,I.p.z=k.z,I.q.x=F.x,I.q.y=F.y,I.q.z=F.z,I.q.w=F.w;for(let $=0;$<4;$++)I.travel[$]=(ee=y.wheelSuspensionLength($))!=null?ee:v.rest,I.steer[$]=(X=y.wheelSteering($))!=null?X:0,I.spin[$]=(K=y.wheelRotation($))!=null?K:0},B={body:g,vehicle:y,handles:M,steer:0,upsideT:0,waterDepth:0,contacts:0,rescued:!1,forward(){return A(g.rotation(),[1,0,0])},up(){return A(g.rotation(),[0,1,0])},speed(){let I=g.linvel(),k=B.forward();return I.x*k[0]+I.y*k[1]+I.z*k[2]},yaw(){let I=B.forward();return Math.atan2(-I[2],I[0])},place(I,k,F,ee){g.setTranslation({x:I,y:k,z:F},!0),g.setRotation(c(ee),!0),g.setLinvel({x:0,y:0,z:0},!0),g.setAngvel({x:0,y:0,z:0},!0),B.steer=0,P(b),P(L)},control(I,k={}){let F=B.speed(),ee=Math.abs(F),X=I.boost?di.topBoost:di.top,K=I.gas&&F<-.8||I.brake&&F>.8,$=0,xe=I.gas||I.brake?0:di.idleBrake;I.gas&&!K&&($=(I.boost?di.boost:di.engine)*qa((X-F)/3,0,1)),I.brake&&!K&&($=-di.reverse*qa((di.topReverse+F)/2,0,1)),K&&(xe=di.brake);let be=1-Math.max((k.wet||0)*.25,(k.snow||0)*.3),qe=di.steer+(di.steerFast-di.steer)*Zf(3.5,20,ee);B.steer+=((I.left-I.right)*qe-B.steer)*Math.min(1,Vr*12);let De=(1.7-.35*Zf(6,22,ee))*be;for(let ce=0;ce<4;ce++){let $e=ce>=2;y.setWheelEngineForce(ce,$*($e?.55:.45)),y.setWheelBrake(ce,I.hand&&$e?di.handbrake:xe),y.setWheelSteering(ce,$e?0:B.steer),y.setWheelFrictionSlip(ce,1.5*be),y.setWheelSideFrictionStiffness(ce,I.hand&&$e?.45:De)}let te=0;for(let ce=0;ce<4;ce++)y.wheelIsInContact(ce)&&te++;B.contacts=te,I.jump&&te>=2&&g.linvel().y<1.5&&g.applyImpulse({x:0,y:di.mass*di.jump,z:0},!0),g.setAngularDamping(.6+te*.35);let ae=B.up();if(ae[1]>.3)for(let ce of[0,2]){let $e=ce+1;if(!y.wheelIsInContact(ce)||!y.wheelIsInContact($e))continue;let he=y.wheelSuspensionLength(ce),se=y.wheelSuspensionLength($e);if(he==null||se==null)continue;let fe=qa((se-he)*.9,-.08,.08);g.applyImpulseAtPoint({x:ae[0]*fe,y:ae[1]*fe,z:ae[2]*fe},w(ce),!0),g.applyImpulseAtPoint({x:-ae[0]*fe,y:-ae[1]*fe,z:-ae[2]*fe},w($e),!0)}let oe=g.translation(),Be=g.linvel();if(B.waterDepth=qa(-.45-(oe.y-.55),0,1.6),B.waterDepth>.03){let ce=B.waterDepth,$e=Math.min(.22,Vr*ce*(.9+Math.hypot(Be.x,Be.z)*.25));g.applyImpulse({x:-Be.x*di.mass*$e,y:di.mass*Vr*(ce*9-Be.y*1.4*ce),z:-Be.z*di.mass*$e},!0)}let Ye=Math.acos(qa(ae[1],-1,1));if(Ye>.6&&te<2){let ce=(Ye-.6)*.02;g.applyTorqueImpulse({x:ae[2]*ce,y:0,z:-ae[0]*ce},!0)}B.upsideT=ae[1]<.25?B.upsideT+Vr:0,B.upsideT>1.6&&(B.place(oe.x,oe.y+1.6,oe.z,B.yaw()),B.upsideT=0,B.rescued=!0)},pose(I){let k=qa(I,0,1);return{p:{x:b.p.x+(L.p.x-b.p.x)*k,y:b.p.y+(L.p.y-b.p.y)*k,z:b.p.z+(L.p.z-b.p.z)*k},q0:b.q,q1:L.q,a:k,travel:L.travel.map((F,ee)=>b.travel[ee]+(F-b.travel[ee])*k),steer:L.steer.map((F,ee)=>b.steer[ee]+(F-b.steer[ee])*k),spin:L.spin.map((F,ee)=>{let X=F-b.spin[ee];return b.spin[ee]+Math.atan2(Math.sin(X),Math.cos(X))*k})}},wheels(){let I=[];for(let k=0;k<4;k++)I.push({contact:y.wheelIsInContact(k),point:y.wheelContactPoint(k)});return I},WHEELS:S},j=0;function U(I,k,F,ee){j+=Math.min(I,.1);let X=0;for(;j>=Vr&&X<5;){let K=g.linvel();B.control(k,F),k.jump=0,y.updateVehicle(Vr,e.QueryFilterFlags.EXCLUDE_SENSORS),i.step(r),[b,L]=[L,b],P(L),r.drainCollisionEvents(($,xe,be)=>{if(!be||!ee)return;let qe=M.has($)?xe:M.has(xe)?$:null;if(qe===null)return;let De=a.get(qe)||"stone";if(De==="ground")return;let te=Math.hypot(K.x,K.z);if(te<1.2)return;let ae=i.getCollider(qe),oe=ae?ae.translation():g.translation();ee(De,te,oe)}),j-=Vr,X++}return X===5&&(j=0),j/Vr}return P(b),P(L),{R:e,world:i,statics:d,dynamic:p,dynamics:u,car:B,step:U,quatY:c,kinds:a,STEP:Vr}}function Oh(e,t=!1){let i=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),a=new Set(Object.keys(e[0].morphAttributes)),n={},s={},o=e[0].morphTargetsRelative,l=new At,c=0;for(let h=0;h<e.length;++h){let d=e[h],u=0;if(i!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;n[p]===void 0&&(n[p]=[]),n[p].push(d.attributes[p]),u++}if(u!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!a.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.morphAttributes[p])}if(t){let p;if(i)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(i){let h=0,d=[];for(let u=0;u<e.length;++u){let p=e[u].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=e[u].attributes.position.count}l.setIndex(d)}for(let h in n){let d=$f(n[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in s){let d=s[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let p=[];for(let x=0;x<s[h].length;++x)p.push(s[h][x][u]);let g=$f(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function $f(e){let t,i,r,a=-1,n=0;for(let c=0;c<e.length;++c){let h=e[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=h.itemSize),i!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=h.normalized),r!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(a===-1&&(a=h.gpuType),a!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;n+=h.count*i}let s=new t(n),o=new Bt(s,i,r),l=0;for(let c=0;c<e.length;++c){let h=e[c];if(h.isInterleavedBufferAttribute){let d=l/i;for(let u=0,p=h.count;u<p;u++)for(let g=0;g<i;g++){let x=h.getComponent(u,g);o.setComponent(u+d,g,x)}}else s.set(h.array,l);l+=h.count*i}return a!==void 0&&(o.gpuType=a),o}function Fh(e,t){if(t===Cp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),e;if(t===Ls||t===Yo){let i=e.getIndex();if(i===null){let n=[],s=e.getAttribute("position");if(s!==void 0){for(let o=0;o<s.count;o++)n.push(o);e.setIndex(n),i=e.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),e}let r=i.count-2,a=[];if(t===Ls)for(let n=1;n<=r;n++)a.push(i.getX(0)),a.push(i.getX(n)),a.push(i.getX(n+1));else for(let n=0;n<r;n++)n%2===0?(a.push(i.getX(n)),a.push(i.getX(n+1)),a.push(i.getX(n+2))):(a.push(i.getX(n+2)),a.push(i.getX(n+1)),a.push(i.getX(n)));return a.length/3!==r&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),e.setIndex(a),e.clearGroups(),e}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),e}function Jf(e){let t=new Map,i=new Map,r=e.clone();return Qf(e,r,function(a,n){t.set(n,a),i.set(a,n)}),r.traverse(function(a){if(!a.isSkinnedMesh)return;let n=a,s=t.get(a),o=s.skeleton.bones;n.skeleton=s.skeleton.clone(),n.bindMatrix.copy(s.bindMatrix),n.skeleton.bones=o.map(function(l){return i.get(l)}),n.bind(n.skeleton,n.bindMatrix)}),r}function Qf(e,t,i){i(e,t);for(let r=0;r<e.children.length;r++)Qf(e.children[r],t.children[r],i)}var cl=class extends Va{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(i){return new Wh(i)}),this.register(function(i){return new Xh(i)}),this.register(function(i){return new eu(i)}),this.register(function(i){return new tu(i)}),this.register(function(i){return new iu(i)}),this.register(function(i){return new qh(i)}),this.register(function(i){return new Yh(i)}),this.register(function(i){return new Zh(i)}),this.register(function(i){return new Kh(i)}),this.register(function(i){return new Vh(i)}),this.register(function(i){return new $h(i)}),this.register(function(i){return new jh(i)}),this.register(function(i){return new Qh(i)}),this.register(function(i){return new Jh(i)}),this.register(function(i){return new kh(i)}),this.register(function(i){return new hl(i,Rt.EXT_MESHOPT_COMPRESSION)}),this.register(function(i){return new hl(i,Rt.KHR_MESHOPT_COMPRESSION)}),this.register(function(i){return new ru(i)})}load(t,i,r,a){let n=this,s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){let c=Wn.extractUrlBase(t);s=Wn.resolveURL(c,this.path)}else s=Wn.extractUrlBase(t);this.manager.itemStart(t);let o=function(c){a?a(c):console.error(c),n.manager.itemError(t),n.manager.itemEnd(t)},l=new Ah(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(t,function(c){try{n.parse(c,s,function(h){i(h),n.manager.itemEnd(t)},o)}catch(h){o(h)}},r,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,i,r,a){let n,s={},o={},l=new TextDecoder;if(typeof t=="string")n=JSON.parse(t);else if(t instanceof ArrayBuffer)if(l.decode(new Uint8Array(t,0,4))===am){try{s[Rt.KHR_BINARY_GLTF]=new au(t)}catch(d){a&&a(d);return}n=JSON.parse(s[Rt.KHR_BINARY_GLTF].content)}else n=JSON.parse(l.decode(t));else n=t;if(n.asset===void 0||n.asset.version[0]<2){a&&a(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new uu(n,{path:i||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](c);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,s[d.name]=!0}if(n.extensionsUsed)for(let h=0;h<n.extensionsUsed.length;++h){let d=n.extensionsUsed[h],u=n.extensionsRequired||[];switch(d){case Rt.KHR_MATERIALS_UNLIT:s[d]=new Gh;break;case Rt.KHR_DRACO_MESH_COMPRESSION:s[d]=new nu(n,this.dracoLoader);break;case Rt.KHR_TEXTURE_TRANSFORM:s[d]=new su;break;case Rt.KHR_MESH_QUANTIZATION:s[d]=new ou;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(s),c.setPlugins(o),c.parse(r,a)}parseAsync(t,i){let r=this;return new Promise(function(a,n){r.parse(t,i,a,n)})}};function tb(){let e={};return{get:function(t){return e[t]},add:function(t,i){e[t]=i},remove:function(t){delete e[t]},removeAll:function(){e={}}}}function fi(e,t,i){let r=e.json.materials[t];return r.extensions&&r.extensions[i]?r.extensions[i]:null}var Rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},kh=class{constructor(t){this.parser=t,this.name=Rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,i=this.parser.json.nodes||[];for(let r=0,a=i.length;r<a;r++){let n=i[r];n.extensions&&n.extensions[this.name]&&n.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,n.extensions[this.name].light)}}_loadLight(t){let i=this.parser,r="light:"+t,a=i.cache.get(r);if(a)return a;let n=i.json,l=((n.extensions&&n.extensions[this.name]||{}).lights||[])[t],c,h=new Te(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Yi);let d=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Us(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Nf(h),c.distance=d;break;case"spot":c=new tl(h),c.distance=d,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),jr(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=i.createUniqueName(l.name||"light_"+t),a=Promise.resolve(c),i.cache.add(r,a),a}getDependency(t,i){if(t==="light")return this._loadLight(i)}createNodeAttachment(t){let i=this,r=this.parser,n=r.json.nodes[t],o=(n.extensions&&n.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return r._getNodeRef(i.cache,o,l)})}},Gh=class{constructor(){this.name=Rt.KHR_MATERIALS_UNLIT}getMaterialType(){return xi}extendParams(t,i,r){let a=[];t.color=new Te(1,1,1),t.opacity=1;let n=i.pbrMetallicRoughness;if(n){if(Array.isArray(n.baseColorFactor)){let s=n.baseColorFactor;t.color.setRGB(s[0],s[1],s[2],Yi),t.opacity=s[3]}n.baseColorTexture!==void 0&&a.push(r.assignTexture(t,"map",n.baseColorTexture,Yt))}return Promise.all(a)}},Vh=class{constructor(t){this.parser=t,this.name=Rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,i){let r=fi(this.parser,t,this.name);return r===null||r.emissiveStrength!==void 0&&(i.emissiveIntensity=r.emissiveStrength),Promise.resolve()}},Wh=class{constructor(t){this.parser=t,this.name=Rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return fi(this.parser,t,this.name)!==null?Ar:null}extendMaterialParams(t,i){let r=fi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];if(r.clearcoatFactor!==void 0&&(i.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&a.push(this.parser.assignTexture(i,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(i.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(i,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(a.push(this.parser.assignTexture(i,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){let n=r.clearcoatNormalTexture.scale;i.clearcoatNormalScale=new de(n,n)}return Promise.all(a)}},Xh=class{constructor(t){this.parser=t,this.name=Rt.KHR_MATERIALS_DISPERSION}getMaterialType(t){return fi(this.parser,t,this.name)!==null?Ar:null}extendMaterialParams(t,i){let r=fi(this.parser,t,this.name);return r===null||(i.dispersion=r.dispersion!==void 0?r.dispersion:0),Promise.resolve()}},jh=class{constructor(t){this.parser=t,this.name=Rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return fi(this.parser,t,this.name)!==null?Ar:null}extendMaterialParams(t,i){let r=fi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return r.iridescenceFactor!==void 0&&(i.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&a.push(this.parser.assignTexture(i,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(i.iridescenceIOR=r.iridescenceIor),i.iridescenceThicknessRange===void 0&&(i.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&a.push(this.parser.assignTexture(i,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(a)}},qh=class{constructor(t){this.parser=t,this.name=Rt.KHR_MATERIALS_SHEEN}getMaterialType(t){return fi(this.parser,t,this.name)!==null?Ar:null}extendMaterialParams(t,i){let r=fi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];if(i.sheenColor=new Te(0,0,0),i.sheenRoughness=0,i.sheen=1,r.sheenColorFactor!==void 0){let n=r.sheenColorFactor;i.sheenColor.setRGB(n[0],n[1],n[2],Yi)}return r.sheenRoughnessFactor!==void 0&&(i.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&a.push(this.parser.assignTexture(i,"sheenColorMap",r.sheenColorTexture,Yt)),r.sheenRoughnessTexture!==void 0&&a.push(this.parser.assignTexture(i,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(a)}},Yh=class{constructor(t){this.parser=t,this.name=Rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return fi(this.parser,t,this.name)!==null?Ar:null}extendMaterialParams(t,i){let r=fi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return r.transmissionFactor!==void 0&&(i.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&a.push(this.parser.assignTexture(i,"transmissionMap",r.transmissionTexture)),Promise.all(a)}},Zh=class{constructor(t){this.parser=t,this.name=Rt.KHR_MATERIALS_VOLUME}getMaterialType(t){return fi(this.parser,t,this.name)!==null?Ar:null}extendMaterialParams(t,i){let r=fi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];i.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&a.push(this.parser.assignTexture(i,"thicknessMap",r.thicknessTexture)),i.attenuationDistance=r.attenuationDistance||1/0;let n=r.attenuationColor||[1,1,1];return i.attenuationColor=new Te().setRGB(n[0],n[1],n[2],Yi),Promise.all(a)}},Kh=class{constructor(t){this.parser=t,this.name=Rt.KHR_MATERIALS_IOR}getMaterialType(t){return fi(this.parser,t,this.name)!==null?Ar:null}extendMaterialParams(t,i){let r=fi(this.parser,t,this.name);return r===null||(i.ior=r.ior!==void 0?r.ior:1.5,i.ior===0&&(i.ior=1e3)),Promise.resolve()}},$h=class{constructor(t){this.parser=t,this.name=Rt.KHR_MATERIALS_SPECULAR}getMaterialType(t){return fi(this.parser,t,this.name)!==null?Ar:null}extendMaterialParams(t,i){let r=fi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];i.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&a.push(this.parser.assignTexture(i,"specularIntensityMap",r.specularTexture));let n=r.specularColorFactor||[1,1,1];return i.specularColor=new Te().setRGB(n[0],n[1],n[2],Yi),r.specularColorTexture!==void 0&&a.push(this.parser.assignTexture(i,"specularColorMap",r.specularColorTexture,Yt)),Promise.all(a)}},Jh=class{constructor(t){this.parser=t,this.name=Rt.EXT_MATERIALS_BUMP}getMaterialType(t){return fi(this.parser,t,this.name)!==null?Ar:null}extendMaterialParams(t,i){let r=fi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return i.bumpScale=r.bumpFactor!==void 0?r.bumpFactor:1,r.bumpTexture!==void 0&&a.push(this.parser.assignTexture(i,"bumpMap",r.bumpTexture)),Promise.all(a)}},Qh=class{constructor(t){this.parser=t,this.name=Rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return fi(this.parser,t,this.name)!==null?Ar:null}extendMaterialParams(t,i){let r=fi(this.parser,t,this.name);if(r===null)return Promise.resolve();let a=[];return r.anisotropyStrength!==void 0&&(i.anisotropy=r.anisotropyStrength),r.anisotropyRotation!==void 0&&(i.anisotropyRotation=r.anisotropyRotation),r.anisotropyTexture!==void 0&&a.push(this.parser.assignTexture(i,"anisotropyMap",r.anisotropyTexture)),Promise.all(a)}},eu=class{constructor(t){this.parser=t,this.name=Rt.KHR_TEXTURE_BASISU}loadTexture(t){let i=this.parser,r=i.json,a=r.textures[t];if(!a.extensions||!a.extensions[this.name])return null;let n=a.extensions[this.name],s=i.options.ktx2Loader;if(!s){if(r.extensionsRequired&&r.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return i.loadTextureImage(t,n.source,s)}},tu=class{constructor(t){this.parser=t,this.name=Rt.EXT_TEXTURE_WEBP}loadTexture(t){let i=this.name,r=this.parser,a=r.json,n=a.textures[t];if(!n.extensions||!n.extensions[i])return null;let s=n.extensions[i],o=a.images[s.source],l=r.textureLoader;if(o.uri){let c=r.options.manager.getHandler(o.uri);c!==null&&(l=c)}return r.loadTextureImage(t,s.source,l)}},iu=class{constructor(t){this.parser=t,this.name=Rt.EXT_TEXTURE_AVIF}loadTexture(t){let i=this.name,r=this.parser,a=r.json,n=a.textures[t];if(!n.extensions||!n.extensions[i])return null;let s=n.extensions[i],o=a.images[s.source],l=r.textureLoader;if(o.uri){let c=r.options.manager.getHandler(o.uri);c!==null&&(l=c)}return r.loadTextureImage(t,s.source,l)}},hl=class{constructor(t,i){this.name=i,this.parser=t}loadBufferView(t){let i=this.parser.json,r=i.bufferViews[t];if(r.extensions&&r.extensions[this.name]){let a=r.extensions[this.name],n=this.parser.getDependency("buffer",a.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return n.then(function(o){let l=a.byteOffset||0,c=a.byteLength||0,h=a.count,d=a.byteStride,u=new Uint8Array(o,l,c);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,d,u,a.mode,a.filter).then(function(p){return p.buffer}):s.ready.then(function(){let p=new ArrayBuffer(h*d);return s.decodeGltfBuffer(new Uint8Array(p),h,d,u,a.mode,a.filter),p})})}else return null}},ru=class{constructor(t){this.name=Rt.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let i=this.parser.json,r=i.nodes[t];if(!r.extensions||!r.extensions[this.name]||r.mesh===void 0)return null;let a=i.meshes[r.mesh];for(let c of a.primitives)if(c.mode!==mr.TRIANGLES&&c.mode!==mr.TRIANGLE_STRIP&&c.mode!==mr.TRIANGLE_FAN&&c.mode!==void 0)return null;let s=r.extensions[this.name].attributes,o=[],l={};for(let c in s)o.push(this.parser.getDependency("accessor",s[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(c=>{let h=c.pop(),d=h.isGroup?h.children:[h],u=c[0].count,p=[];for(let g of d){let x=new et,m=new R,f=new hi,M=new R(1,1,1),y=new ji(g.geometry,g.material,u);for(let S=0;S<u;S++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,S),l.SCALE&&M.fromBufferAttribute(l.SCALE,S),y.setMatrixAt(S,x.compose(m,f,M));let v=null;for(let S in l)if(S==="_COLOR_0"){let A=l[S];y.instanceColor=new tr(A.array,A.itemSize,A.normalized)}else if(S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"){if(v===null){let w=y.geometry;v=new At,v.name=w.name;for(let _ in w.attributes)v.setAttribute(_,w.attributes[_]);for(let _ in w.morphAttributes)v.morphAttributes[_]=w.morphAttributes[_];w.index!==null&&v.setIndex(w.index),v.morphTargetsRelative=w.morphTargetsRelative;for(let _ of w.groups)v.addGroup(_.start,_.count,_.materialIndex);w.boundingBox!==null&&(v.boundingBox=w.boundingBox.clone()),w.boundingSphere!==null&&(v.boundingSphere=w.boundingSphere.clone()),v.drawRange.start=w.drawRange.start,v.drawRange.count=w.drawRange.count,v.userData=Object.assign({},w.userData),y.geometry=v}let A=l[S];v.setAttribute(S,new tr(A.array,A.itemSize,A.normalized))}ci.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},am="glTF",Hs=12,em={JSON:1313821514,BIN:5130562},au=class{constructor(t){this.name=Rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let i=new DataView(t,0,Hs),r=new TextDecoder;if(this.header={magic:r.decode(new Uint8Array(t.slice(0,4))),version:i.getUint32(4,!0),length:i.getUint32(8,!0)},this.header.magic!==am)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let a=this.header.length-Hs,n=new DataView(t,Hs),s=0;for(;s<a;){let o=n.getUint32(s,!0);s+=4;let l=n.getUint32(s,!0);if(s+=4,l===em.JSON){let c=new Uint8Array(t,Hs+s,o);this.content=r.decode(c)}else if(l===em.BIN){let c=Hs+s;this.body=t.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},nu=class{constructor(t,i){if(!i)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Rt.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=i,this.dracoLoader.preload()}decodePrimitive(t,i){let r=this.json,a=this.dracoLoader,n=t.extensions[this.name].bufferView,s=t.extensions[this.name].attributes,o={},l={},c={};for(let h in s){let d=cu[h]||h.toLowerCase();o[d]=s[h]}for(let h in t.attributes){let d=cu[h]||h.toLowerCase();if(s[h]!==void 0){let u=r.accessors[t.attributes[h]],p=Yn[u.componentType];c[d]=p.name,l[d]=u.normalized===!0}}return i.getDependency("bufferView",n).then(function(h){return new Promise(function(d,u){a.decodeDracoFile(h,function(p){for(let g in p.attributes){let x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}d(p)},o,c,Yi,u)})})}},su=class{constructor(){this.name=Rt.KHR_TEXTURE_TRANSFORM}extendTexture(t,i){if((i.texCoord===void 0||i.texCoord===t.channel)&&i.offset===void 0&&i.rotation===void 0&&i.scale===void 0)return t;if(t=t.clone(),i.texCoord!==void 0&&(t.channel=i.texCoord),i.offset!==void 0&&t.offset.fromArray(i.offset),i.rotation!==void 0&&(t.rotation=i.rotation),i.scale!==void 0&&t.repeat.fromArray(i.scale),i.rotation!==void 0){let r=Math.cos(t.rotation),a=Math.sin(t.rotation);t.matrix.set(t.repeat.x*r,t.repeat.y*a,t.offset.x,-t.repeat.x*a,t.repeat.y*r,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},ou=class{constructor(){this.name=Rt.KHR_MESH_QUANTIZATION}},ul=class extends ka{constructor(t,i,r,a){super(t,i,r,a)}copySampleValue_(t){let i=this.resultBuffer,r=this.sampleValues,a=this.valueSize,n=t*a*3+a;for(let s=0;s!==a;s++)i[s]=r[n+s];return i}interpolate_(t,i,r,a){let n=this.resultBuffer,s=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=a-i,d=(r-i)/h,u=d*d,p=u*d,g=t*c,x=g-c,m=-2*p+3*u,f=p-u,M=1-m,y=f-u+d;for(let v=0;v!==o;v++){let S=s[x+v+o],A=s[x+v+l]*h,w=s[g+v+o],_=s[g+v]*h;n[v]=M*S+y*A+m*w+f*_}return n}},ib=new hi,lu=class extends ul{interpolate_(t,i,r,a){let n=super.interpolate_(t,i,r,a);return ib.fromArray(n).normalize().toArray(n),n}},mr={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Yn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},tm={9728:gi,9729:Kt,9984:th,9985:gs,9986:_n,9987:lr},im={33071:Sr,33648:bs,10497:la},Bh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},cu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wa={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},rb={CUBICSPLINE:void 0,LINEAR:Pn,STEP:In},zh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ab(e){return e.DefaultMaterial===void 0&&(e.DefaultMaterial=new si({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:oa})),e.DefaultMaterial}function Ya(e,t,i){for(let r in i.extensions)e[r]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[r]=i.extensions[r])}function jr(e,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(e.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function nb(e,t,i){let r=!1,a=!1,n=!1;for(let c=0,h=t.length;c<h;c++){let d=t[c];if(d.POSITION!==void 0&&(r=!0),d.NORMAL!==void 0&&(a=!0),d.COLOR_0!==void 0&&(n=!0),r&&a&&n)break}if(!r&&!a&&!n)return Promise.resolve(e);let s=[],o=[],l=[];for(let c=0,h=t.length;c<h;c++){let d=t[c];if(r){let u=d.POSITION!==void 0?i.getDependency("accessor",d.POSITION):e.attributes.position;s.push(u)}if(a){let u=d.NORMAL!==void 0?i.getDependency("accessor",d.NORMAL):e.attributes.normal;o.push(u)}if(n){let u=d.COLOR_0!==void 0?i.getDependency("accessor",d.COLOR_0):e.attributes.color;l.push(u)}}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],d=c[1],u=c[2];return r&&(e.morphAttributes.position=h),a&&(e.morphAttributes.normal=d),n&&(e.morphAttributes.color=u),e.morphTargetsRelative=!0,e})}function sb(e,t){if(e.updateMorphTargets(),t.weights!==void 0)for(let i=0,r=t.weights.length;i<r;i++)e.morphTargetInfluences[i]=t.weights[i];if(t.extras&&Array.isArray(t.extras.targetNames)){let i=t.extras.targetNames;if(e.morphTargetInfluences.length===i.length){e.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++)e.morphTargetDictionary[i[r]]=r}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ob(e){let t,i=e.extensions&&e.extensions[Rt.KHR_DRACO_MESH_COMPRESSION];if(i?t="draco:"+i.bufferView+":"+i.indices+":"+Hh(i.attributes):t=e.indices+":"+Hh(e.attributes)+":"+e.mode,e.targets!==void 0)for(let r=0,a=e.targets.length;r<a;r++)t+=":"+Hh(e.targets[r]);return t}function Hh(e){let t="",i=Object.keys(e).sort();for(let r=0,a=i.length;r<a;r++)t+=i[r]+":"+e[i[r]]+";";return t}function hu(e){switch(e){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lb(e){return e.search(/\.jpe?g($|\?)/i)>0||e.search(/^data\:image\/jpeg/)===0?"image/jpeg":e.search(/\.webp($|\?)/i)>0||e.search(/^data\:image\/webp/)===0?"image/webp":e.search(/\.ktx2($|\?)/i)>0||e.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var cb=new et,uu=class{constructor(t={},i={}){this.json=t,this.extensions={},this.plugins={},this.options=i,this.cache=new tb,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let r=!1,a=-1,n=!1,s=-1;if(typeof navigator!="undefined"&&typeof navigator.userAgent!="undefined"){let o=navigator.userAgent;r=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);a=r&&l?parseInt(l[1],10):-1,n=o.indexOf("Firefox")>-1,s=n?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap=="undefined"||r&&a<17||n&&s<98?this.textureLoader=new Vn(this.options.manager):this.textureLoader=new Of(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ah(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,i){let r=this,a=this.json,n=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([r.getDependencies("scene"),r.getDependencies("animation"),r.getDependencies("camera")])}).then(function(s){let o={scene:s[0][a.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:a.asset,parser:r,userData:{}};return Ya(n,o,a),jr(o,a),Promise.all(r._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();t(o)})}).catch(i)}_markDefs(){let t=this.json.nodes||[],i=this.json.skins||[],r=this.json.meshes||[];for(let a=0,n=i.length;a<n;a++){let s=i[a].joints;for(let o=0,l=s.length;o<l;o++)t[s[o]].isBone=!0}for(let a=0,n=t.length;a<n;a++){let s=t[a];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(r[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(t,i){i!==void 0&&(t.refs[i]===void 0&&(t.refs[i]=t.uses[i]=0),t.refs[i]++)}_getNodeRef(t,i,r){if(t.refs[i]<=1)return r;let a=r.clone(),n=(s,o)=>{let l=this.associations.get(s);l!=null&&this.associations.set(o,l);for(let[c,h]of s.children.entries())n(h,o.children[c])};return n(r,a),a.name+="_instance_"+t.uses[i]++,a}_invokeOne(t){let i=Object.values(this.plugins);i.push(this);for(let r=0;r<i.length;r++){let a=t(i[r]);if(a)return a}return null}_invokeAll(t){let i=Object.values(this.plugins);i.unshift(this);let r=[];for(let a=0;a<i.length;a++){let n=t(i[a]);n&&r.push(n)}return r}getDependency(t,i){let r=t+":"+i,a=this.cache.get(r);if(!a){switch(t){case"scene":a=this.loadScene(i);break;case"node":a=this._invokeOne(function(n){return n.loadNode&&n.loadNode(i)});break;case"mesh":a=this._invokeOne(function(n){return n.loadMesh&&n.loadMesh(i)});break;case"accessor":a=this.loadAccessor(i);break;case"bufferView":a=this._invokeOne(function(n){return n.loadBufferView&&n.loadBufferView(i)});break;case"buffer":a=this.loadBuffer(i);break;case"material":a=this._invokeOne(function(n){return n.loadMaterial&&n.loadMaterial(i)});break;case"texture":a=this._invokeOne(function(n){return n.loadTexture&&n.loadTexture(i)});break;case"skin":a=this.loadSkin(i);break;case"animation":a=this._invokeOne(function(n){return n.loadAnimation&&n.loadAnimation(i)});break;case"camera":a=this.loadCamera(i);break;default:if(a=this._invokeOne(function(n){return n!=this&&n.getDependency&&n.getDependency(t,i)}),!a)throw new Error("Unknown type: "+t);break}this.cache.add(r,a)}return a}getDependencies(t){let i=this.cache.get(t);if(!i){let r=this,a=this.json[t+(t==="mesh"?"es":"s")]||[];i=Promise.all(a.map(function(n,s){return r.getDependency(t,s)})),this.cache.add(t,i)}return i}loadBuffer(t){let i=this.json.buffers[t],r=this.fileLoader;if(i.type&&i.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+i.type+" buffer type is not supported.");if(i.uri===void 0&&t===0)return Promise.resolve(this.extensions[Rt.KHR_BINARY_GLTF].body);let a=this.options;return new Promise(function(n,s){r.load(Wn.resolveURL(i.uri,a.path),n,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+i.uri+'".'))})})}loadBufferView(t){let i=this.json.bufferViews[t];return this.getDependency("buffer",i.buffer).then(function(r){let a=i.byteLength||0,n=i.byteOffset||0;return r.slice(n,n+a)})}loadAccessor(t){let i=this,r=this.json,a=this.json.accessors[t];if(a.bufferView===void 0&&a.sparse===void 0){let s=Bh[a.type],o=Yn[a.componentType],l=a.normalized===!0,c=new o(a.count*s);return Promise.resolve(new Bt(c,s,l))}let n=[];return a.bufferView!==void 0?n.push(this.getDependency("bufferView",a.bufferView)):n.push(null),a.sparse!==void 0&&(n.push(this.getDependency("bufferView",a.sparse.indices.bufferView)),n.push(this.getDependency("bufferView",a.sparse.values.bufferView))),Promise.all(n).then(function(s){let o=s[0],l=Bh[a.type],c=Yn[a.componentType],h=c.BYTES_PER_ELEMENT,d=h*l,u=a.byteOffset||0,p=a.bufferView!==void 0?r.bufferViews[a.bufferView].byteStride:void 0,g=a.normalized===!0,x,m;if(p&&p!==d){let f=Math.floor(u/p),M="InterleavedBuffer:"+a.bufferView+":"+a.componentType+":"+f+":"+a.count,y=i.cache.get(M);y||(x=new c(o,f*p,a.count*p/h),y=new fh(x,p/h),i.cache.add(M,y)),m=new mh(y,l,u%p/h,g)}else o===null?x=new c(a.count*l):x=new c(o,u,a.count*l),m=new Bt(x,l,g);if(a.sparse!==void 0){let f=Bh.SCALAR,M=Yn[a.sparse.indices.componentType],y=a.sparse.indices.byteOffset||0,v=a.sparse.values.byteOffset||0,S=new M(s[1],y,a.sparse.count*f),A=new c(s[2],v,a.sparse.count*l);o!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,_=S.length;w<_;w++){let b=S[w];if(m.setX(b,A[w*l]),l>=2&&m.setY(b,A[w*l+1]),l>=3&&m.setZ(b,A[w*l+2]),l>=4&&m.setW(b,A[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(t){let i=this.json,r=this.options,n=i.textures[t].source,s=i.images[n],o=this.textureLoader;if(s.uri){let l=r.manager.getHandler(s.uri);l!==null&&(o=l)}return this.loadTextureImage(t,n,o)}loadTextureImage(t,i,r){let a=this,n=this.json,s=n.textures[t],o=n.images[i],l=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(i,r).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(n.samplers||{})[s.sampler]||{};return h.magFilter=tm[u.magFilter]||Kt,h.minFilter=tm[u.minFilter]||lr,h.wrapS=im[u.wrapS]||la,h.wrapT=im[u.wrapT]||la,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==gi&&h.minFilter!==Kt,a.associations.set(h,{textures:t}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(t,i){let r=this,a=this.json,n=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(d=>d.clone());let s=a.images[t],o=self.URL||self.webkitURL,l=s.uri||"",c=!1;if(s.bufferView!==void 0)l=r.getDependency("bufferView",s.bufferView).then(function(d){c=!0;let u=new Blob([d],{type:s.mimeType});return l=o.createObjectURL(u),l});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(d){return new Promise(function(u,p){let g=u;i.isImageBitmapLoader===!0&&(g=function(x){let m=new Hi(x);m.needsUpdate=!0,u(m)}),i.load(Wn.resolveURL(d,n.path),g,void 0,p)})}).then(function(d){return c===!0&&o.revokeObjectURL(l),jr(d,s),d.userData.mimeType=s.mimeType||lb(s.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),d});return this.sourceCache[t]=h,h}assignTexture(t,i,r,a){let n=this;return this.getDependency("texture",r.index).then(function(s){if(!s)return null;if(r.texCoord!==void 0&&r.texCoord>0&&(s=s.clone(),s.channel=r.texCoord),n.extensions[Rt.KHR_TEXTURE_TRANSFORM]){let o=r.extensions!==void 0?r.extensions[Rt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=n.associations.get(s);s=n.extensions[Rt.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),n.associations.set(s,l)}}return a!==void 0&&(s.colorSpace=a),t[i]=s,s})}assignFinalMaterial(t){let i=t.geometry,r=t.material,a=i.attributes.tangent===void 0,n=i.attributes.color!==void 0,s=i.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+r.uuid,l=this.cache.get(o);l||(l=new Ds,wr.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,l.sizeAttenuation=!1,this.cache.add(o,l)),r=l}else if(t.isLine){let o="LineBasicMaterial:"+r.uuid,l=this.cache.get(o);l||(l=new vh,wr.prototype.copy.call(l,r),l.color.copy(r.color),l.map=r.map,this.cache.add(o,l)),r=l}if(a||n||s){let o="ClonedMaterial:"+r.uuid+":";a&&(o+="derivative-tangents:"),n&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=r.clone(),n&&(l.vertexColors=!0),s&&(l.flatShading=!0),a&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(r))),r=l}t.material=r}getMaterialType(){return si}loadMaterial(t){let i=this,r=this.json,a=this.extensions,n=r.materials[t],s,o={},l=n.extensions||{},c=[];if(l[Rt.KHR_MATERIALS_UNLIT]){let d=a[Rt.KHR_MATERIALS_UNLIT];s=d.getMaterialType(),c.push(d.extendParams(o,n,i))}else{let d=n.pbrMetallicRoughness||{};if(o.color=new Te(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Yi),o.opacity=u[3]}d.baseColorTexture!==void 0&&c.push(i.assignTexture(o,"map",d.baseColorTexture,Yt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(i.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),c.push(i.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),s=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(t)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(t,o)})))}n.doubleSided===!0&&(o.side=Pi);let h=n.alphaMode||zh.OPAQUE;if(h===zh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===zh.MASK&&(o.alphaTest=n.alphaCutoff!==void 0?n.alphaCutoff:.5)),n.normalTexture!==void 0&&s!==xi&&(c.push(i.assignTexture(o,"normalMap",n.normalTexture)),o.normalScale=new de(1,1),n.normalTexture.scale!==void 0)){let d=n.normalTexture.scale;o.normalScale.set(d,d)}if(n.occlusionTexture!==void 0&&s!==xi&&(c.push(i.assignTexture(o,"aoMap",n.occlusionTexture)),n.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=n.occlusionTexture.strength)),n.emissiveFactor!==void 0&&s!==xi){let d=n.emissiveFactor;o.emissive=new Te().setRGB(d[0],d[1],d[2],Yi)}return n.emissiveTexture!==void 0&&s!==xi&&c.push(i.assignTexture(o,"emissiveMap",n.emissiveTexture,Yt)),Promise.all(c).then(function(){let d=new s(o);return n.name&&(d.name=n.name),jr(d,n),i.associations.set(d,{materials:t}),n.extensions&&Ya(a,d,n),d})}createUniqueName(t){let i=ai.sanitizeNodeName(t||"");return i in this.nodeNamesUsed?i+"_"+ ++this.nodeNamesUsed[i]:(this.nodeNamesUsed[i]=0,i)}loadGeometries(t){let i=this,r=this.extensions,a=this.primitiveCache;function n(o){return r[Rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,i).then(function(l){return rm(l,o,i)})}let s=[];for(let o=0,l=t.length;o<l;o++){let c=t[o],h=ob(c),d=a[h];if(d)s.push(d.promise);else{let u;c.extensions&&c.extensions[Rt.KHR_DRACO_MESH_COMPRESSION]?u=n(c):u=rm(new At,c,i),c.mode===mr.TRIANGLE_STRIP?u=u.then(p=>Fh(p,Yo)):c.mode===mr.TRIANGLE_FAN&&(u=u.then(p=>Fh(p,Ls))),a[h]={primitive:c,promise:u},s.push(u)}}return Promise.all(s)}loadMesh(t){let i=this,r=this.json,a=this.extensions,n=r.meshes[t],s=n.primitives,o=[];for(let l=0,c=s.length;l<c;l++){let h=s[l].material===void 0?ab(this.cache):this.getDependency("material",s[l].material);o.push(h)}return o.push(i.loadGeometries(s)),Promise.all(o).then(async function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],d=[];for(let p=0,g=h.length;p<g;p++){let x=h[p],m=s[p],f,M=c[p];if(m.mode===mr.TRIANGLES||m.mode===mr.TRIANGLE_STRIP||m.mode===mr.TRIANGLE_FAN||m.mode===void 0){let y=n.isSkinnedMesh===!0,v=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");y&&v===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),f=y&&v?new Xp(x,M):new dt(x,M),f.isSkinnedMesh===!0&&f.normalizeSkinWeights()}else if(m.mode===mr.LINES)f=new Jo(x,M);else if(m.mode===mr.LINE_STRIP)f=new $o(x,M);else if(m.mode===mr.LINE_LOOP)f=new Zp(x,M);else if(m.mode===mr.POINTS)f=new Bn(x,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&sb(f,n),f.name=i.createUniqueName(n.name||"mesh_"+t),jr(f,n),m.extensions&&Ya(a,f,m),i.assignFinalMaterial(f),d.push(f)}for(let p=0,g=d.length;p<g;p++)i.associations.set(d[p],{meshes:t,primitives:p});if(d.length===1)return n.extensions&&Ya(a,d[0],n),d[0];let u=new vi;n.extensions&&Ya(a,u,n),i.associations.set(u,{meshes:t});for(let p=0,g=d.length;p<g;p++)u.add(d[p]);return u})}loadCamera(t){let i,r=this.json.cameras[t],a=r[r.type];if(!a){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return r.type==="perspective"?i=new Di(Np.radToDeg(a.yfov),a.aspectRatio||1,a.znear||1,a.zfar||2e6):r.type==="orthographic"&&(i=new Wa(-a.xmag,a.xmag,a.ymag,-a.ymag,a.znear,a.zfar)),r.name&&(i.name=this.createUniqueName(r.name)),jr(i,r),Promise.resolve(i)}loadSkin(t){let i=this.json.skins[t],r=[];for(let a=0,n=i.joints.length;a<n;a++)r.push(this._loadNodeShallow(i.joints[a]));return i.inverseBindMatrices!==void 0?r.push(this.getDependency("accessor",i.inverseBindMatrices)):r.push(null),Promise.all(r).then(function(a){let n=a.pop(),s=a,o=[],l=[];for(let c=0,h=s.length;c<h;c++){let d=s[c];if(d){o.push(d);let u=new et;n!==null&&u.fromArray(n.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',i.joints[c])}return new jp(o,l)})}loadAnimation(t){let i=this.json,r=this,a=i.animations[t],n=a.name?a.name:"animation_"+t,s=[],o=[],l=[],c=[],h=[];for(let d=0,u=a.channels.length;d<u;d++){let p=a.channels[d],g=a.samplers[p.sampler],x=p.target,m=x.node,f=a.parameters!==void 0?a.parameters[g.input]:g.input,M=a.parameters!==void 0?a.parameters[g.output]:g.output;x.node!==void 0&&(s.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",M)),c.push(g),h.push(x))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(d){let u=d[0],p=d[1],g=d[2],x=d[3],m=d[4],f=[];for(let y=0,v=u.length;y<v;y++){let S=u[y],A=p[y],w=g[y],_=x[y],b=m[y];if(S===void 0)continue;S.updateMatrix&&S.updateMatrix();let L=r._createAnimationTracks(S,A,w,_,b);if(L)for(let P=0;P<L.length;P++)f.push(L[P])}let M=new wh(n,void 0,f);return jr(M,a),M})}createNodeMesh(t){let i=this.json,r=this,a=i.nodes[t];return a.mesh===void 0?null:r.getDependency("mesh",a.mesh).then(function(n){let s=r._getNodeRef(r.meshCache,a.mesh,n);return a.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let l=0,c=a.weights.length;l<c;l++)o.morphTargetInfluences[l]=a.weights[l]}),s})}loadNode(t){let i=this.json,r=this,a=i.nodes[t],n=r._loadNodeShallow(t),s=[],o=a.children||[];for(let c=0,h=o.length;c<h;c++)s.push(r.getDependency("node",o[c]));let l=a.skin===void 0?Promise.resolve(null):r.getDependency("skin",a.skin);return Promise.all([n,Promise.all(s),l]).then(function(c){let h=c[0],d=c[1],u=c[2];u!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(u,cb)});for(let p=0,g=d.length;p<g;p++)h.add(d[p]);if(h.userData.pivot!==void 0&&d.length>0){let p=h.userData.pivot,g=d[0];h.pivot=new R().fromArray(p),h.position.x-=p[0],h.position.y-=p[1],h.position.z-=p[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(t){let i=this.json,r=this.extensions,a=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let n=i.nodes[t],s=n.name?a.createUniqueName(n.name):"",o=[],l=a._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(t)});return l&&o.push(l),n.camera!==void 0&&o.push(a.getDependency("camera",n.camera).then(function(c){return a._getNodeRef(a.cameraCache,n.camera,c)})),a._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(t)}).forEach(function(c){o.push(c)}),this.nodeCache[t]=Promise.all(o).then(function(c){let h;if(n.isBone===!0?h=new gh:c.length>1?h=new vi:c.length===1?h=c[0]:h=new ci,h!==c[0])for(let d=0,u=c.length;d<u;d++)h.add(c[d]);if(n.name&&(h.userData.name=n.name,h.name=s),jr(h,n),n.extensions&&Ya(r,h,n),n.matrix!==void 0){let d=new et;d.fromArray(n.matrix),h.applyMatrix4(d)}else n.translation!==void 0&&h.position.fromArray(n.translation),n.rotation!==void 0&&h.quaternion.fromArray(n.rotation),n.scale!==void 0&&h.scale.fromArray(n.scale);if(!a.associations.has(h))a.associations.set(h,{});else if(n.mesh!==void 0&&a.meshCache.refs[n.mesh]>1){let d=a.associations.get(h);a.associations.set(h,{...d})}return a.associations.get(h).nodes=t,h}),this.nodeCache[t]}loadScene(t){let i=this.extensions,r=this.json.scenes[t],a=this,n=new vi;r.name&&(n.name=a.createUniqueName(r.name)),jr(n,r),r.extensions&&Ya(i,n,r);let s=r.nodes||[],o=[];for(let l=0,c=s.length;l<c;l++)o.push(a.getDependency("node",s[l]));return Promise.all(o).then(function(l){for(let h=0,d=l.length;h<d;h++){let u=l[h];u.parent!==null?n.add(Jf(u)):n.add(u)}let c=h=>{let d=new Map;for(let[u,p]of a.associations)(u instanceof wr||u instanceof Hi)&&d.set(u,p);return h.traverse(u=>{let p=a.associations.get(u);p!=null&&d.set(u,p)}),d};return a.associations=c(n),n})}_createAnimationTracks(t,i,r,a,n){let s=[],o=t.name?t.name:t.uuid,l=[];function c(p){p.morphTargetInfluences&&l.push(p.name?p.name:p.uuid)}wa[n.path]===wa.weights?(c(t),t.isGroup&&t.children.forEach(c)):l.push(o);let h;switch(wa[n.path]){case wa.weights:h=Hn;break;case wa.rotation:h=Ga;break;case wa.translation:case wa.scale:h=Gn;break;default:switch(r.itemSize){case 1:h=Hn;break;case 2:case 3:default:h=Gn;break}break}let d=a.interpolation!==void 0?rb[a.interpolation]:Pn,u=this._getArrayFromAccessor(r);for(let p=0,g=l.length;p<g;p++){let x=new h(l[p]+"."+wa[n.path],i.array,u,d);a.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),s.push(x)}return s}_getArrayFromAccessor(t){let i=t.array;if(t.normalized){let r=hu(i.constructor),a=new Float32Array(i.length);for(let n=0,s=i.length;n<s;n++)a[n]=i[n]*r;i=a}return i}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(r){let a=this instanceof Ga?lu:ul;return new a(this.times,this.values,this.getValueSize()/3,r)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function hb(e,t,i){let r=t.attributes,a=new Zi;if(r.POSITION!==void 0){let o=i.json.accessors[r.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(a.set(new R(l[0],l[1],l[2]),new R(c[0],c[1],c[2])),o.normalized){let h=hu(Yn[o.componentType]);a.min.multiplyScalar(h),a.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let n=t.targets;if(n!==void 0){let o=new R,l=new R;for(let c=0,h=n.length;c<h;c++){let d=n[c];if(d.POSITION!==void 0){let u=i.json.accessors[d.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){let x=hu(Yn[u.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}a.expandByVector(o)}e.boundingBox=a;let s=new ur;a.getCenter(s.center),s.radius=a.min.distanceTo(a.max)/2,e.boundingSphere=s}function rm(e,t,i){let r=t.attributes,a=[];function n(s,o){return i.getDependency("accessor",s).then(function(l){e.setAttribute(o,l)})}for(let s in r){let o=cu[s]||s.toLowerCase();o in e.attributes||a.push(n(r[s],o))}if(t.indices!==void 0&&!e.index){let s=i.getDependency("accessor",t.indices).then(function(o){e.setIndex(o)});a.push(s)}return wt.workingColorSpace!==Yi&&"COLOR_0"in r&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),jr(e,t),hb(e,t,i),Promise.all(a).then(function(){return t.targets!==void 0?nb(e,t.targets,i):e})}var nm=["car","trees","props","landmarks"];async function sm(e,t){let i=new cl,r={},a=0;await Promise.all(nm.map(s=>new Promise((o,l)=>i.load(`${e}${s}.glb`,c=>{c.scene.updateMatrixWorld(!0),c.scene.traverse(h=>{if(!h.isMesh)return;let d=(h.parent&&h.parent!==c.scene?h.parent.name:h.name).replace(/_\d+$/,""),[u,p]=d.split("__"),g=r[u]||(r[u]={parts:[],roles:{},hulls:[]}),x=h.geometry.clone();if(x.applyMatrix4(h.matrixWorld),p&&p.startsWith("col")){g.hulls.push(new Float32Array(x.attributes.position.array));return}let m=h.material;if(m.map&&(m.map.colorSpace=Yt),m.metalness>.85&&(m.metalness=.85),p){g.roles[p]=g.roles[p]||[],g.roles[p].push({geometry:x,material:m});return}g.parts.push({name:m.name,geometry:x,material:m})}),t==null||t(++a/nm.length),o()},void 0,l))));let n={};for(let s in r)for(let o of r[s].parts){let l=o.material.name;n[l]||(n[l]=o.material),o.material=n[l]}return r.__materials=n,r}function Aa(e,t,{shadow:i=!0}={}){let r=e[t],a=new vi;if(a.name=t,!r)return console.warn("missing asset",t),a;for(let n of r.parts){let s=new dt(n.geometry,n.material);s.castShadow=i,s.receiveShadow=!0,a.add(s)}return a}function om(e,t,i,{shadow:r=!0,patch:a}={}){let n=e[t],s=new vi;if(s.name=t,!n||!i.length)return{group:s,meshes:[]};let o=n.parts.map(l=>{let c=a?a(l.material,l.name):l.material,h=new ji(l.geometry,c,i.length);return i.forEach((d,u)=>h.setMatrixAt(u,d)),h.castShadow=r,h.receiveShadow=!0,h.computeBoundingSphere(),s.add(h),h});return{group:s,meshes:o}}var du=20,pu=5,$i={alb:{value:null},nor:{value:null},mean:[],ready:!1},fu=new Float32Array(256).map((e,t)=>{let i=t/255;return i<=.04045?i/12.92:((i+.055)/1.055)**2.4}),mu={},lm=e=>new Promise((t,i)=>{let r=new Image;r.crossOrigin="anonymous",r.onload=()=>t(r),r.onerror=i,r.src=e});function cm(e,t,i,r){let a=e.width/pu,n=document.createElement("canvas");n.width=t,n.height=t;let s=n.getContext("2d",{willReadFrequently:!0}),o=new Uint8Array(t*t*4*du);for(let c=0;c<du;c++){s.clearRect(0,0,t,t),s.drawImage(e,c%pu*a,Math.floor(c/pu)*a,a,a,0,0,t,t);let h=s.getImageData(0,0,t,t).data;if(o.set(h,c*t*t*4),i){let d=[0,0,0];for(let u=0;u<h.length;u+=16)d[0]+=fu[h[u]],d[1]+=fu[h[u+1]],d[2]+=fu[h[u+2]];$i.mean[c]=d.map(u=>u/(h.length/16))}}let l=new Zo(o,t,t,du);return l.format=qi,l.type=Xi,l.wrapS=l.wrapT=la,l.minFilter=lr,l.magFilter=Kt,l.generateMipmaps=!0,l.anisotropy=r,i&&(l.colorSpace=Yt),l.needsUpdate=!0,l}async function hm(e,{coarse:t=!1,anisotropy:i=8}={}){let r=t?256:512,[a,n]=await Promise.all([lm(`${e}albedo.webp`),lm(`${e}normal.webp`)]);$i.alb.value=cm(a,r,!0,i),$i.nor.value=cm(n,r,!1,i);let s=new Vn;return await Promise.all(["ginkgo","plane","broad","poplar","fir","blossom","palm"].map(o=>new Promise(l=>s.load(`${e}leaf_${o}.webp`,c=>{c.colorSpace=Yt,c.anisotropy=i,mu[o]=c,l()},void 0,l)))),$i.ready=!0,$i}var ki=-Math.PI/2,gu=[["pyramid_big",-90,-30,.08,1],["pyramid_mid",-77,-37,.08,1],["pyramid_small",-98,-12,.08,1],["sphinx",-78,-22,0,1],["mosque",-56,-46,ki,1],["cairo_house0",-46,-40,ki,1],["cairo_house1",-48,-50,ki,1],["cairo_house2",-50,-24,ki,1],["cairo_house0",-64,-50,ki,.9],["cairo_house2",-44,-28,0,.9],["luxor_pylon",-54,10,ki,1],["luxor_colonnade",-54,-1,ki,1],["obelisk",-49.5,14.5,0,1],["ram",-57.5,16.5,0,1],["ram",-57.5,19,0,1],["ram",-57.5,21.5,0,1],["ram",-50.5,16.5,Math.PI,1],["ram",-50.5,19,Math.PI,1],["ram",-50.5,21.5,Math.PI,1],["pavilion",-6,-59.5,0,1,.45],["yardang",-40,-44,.5,1.2],["yardang",-45,-55,.35,1],["yardang",-36,-60,.6,.85],["yardang",-49,-39,.55,.8],["yardang",-15,-43,.3,.7],["yardang",-33,-38,.45,.6],["stupa",-9,17,0,1.25],["temple",13,18,ki,1],["naxi_house",-19,24,ki,1],["naxi_house",-18,36,ki+.3,1],["naxi_house",-22,30,ki-.2,.9],["beijing_gate",26,-55,0,1],["corner_tower",6,-48,0,1],["egg",46,-47,0,.9,-.55],["hutong",11,-30,0,1],["hutong",11,-24,0,1],["hutong",40,-31,Math.PI,1],["nanjing_gate",50,-14,0,1],["city_wall",35.5,-14,0,1],["city_wall",64.5,-14,0,1],["zifeng",67,4,0,1],["pearl_tower",78,-5,0,1],["shanghai_tower",90,-7,.3,1],["jinmao",94,0,.2,1],["swfc",85,-13,.4,1],["tower0",71,-8,.1,1],["tower1",80,-16,.2,1],["tower2",68,-14,0,1],["bund_customs",80,16,ki,1],["bund_bank",73,16.5,ki,1],["bund_bank",87,16.5,ki,1],["bund_customs",93,16.5,ki,.9],["barn",26,55,ki,1]];Uh.push([-90,-30,10,.3],[-77,-37,8,.3],[-98,-12,5.5,.3],[-78,-22,4,.2],[-56,-46,6,.2],[-54,6,9,.15],[-6,-59.5,4,.45],[-9,17,3.5,.2],[13,18,5,.2],[26,-55,10,.12],[6,-48,5,.12],[46,-47,9,-1.1],[11,-27,5,.12],[50,-14,22,.12],[67,4,3,.12],[82,-8,16,.15],[83,16,14,.15],[26,55,4,.12]);var vu=[...[-6,-3,0,3,6].map(e=>["lantern",26+e,-52.2,0,1,7.1]),...[-4.5,-1.5,1.5,4.5].map(e=>["lantern",26+e,-52.1,0,.9,3.3]),...[70,75,80,85,90,95].map(e=>["lamp_bund",e,12.6,0,1,0]),...[34,40,46].map(e=>["lamp_modern",e,4.6,Math.PI/2,1,0])],um=[["camel",-74,-8,2.2,1],["camel",-72,-10,1.6,1],["camel",-12,-54,.4,1],["yak",8,42,.5,1],["yak",11,45,2.4,1],["yak",4,46,1.2,.9],["yak",-12,44,3,1]],dm=[[-46,8,11],[-40,16,14],[-62,6,9],[-44,28,12.5],[-36,4,16],[-58,-2,13]],pm=[{asset:"felucca",axis:"nile",z0:-50,z1:50,speed:1.4,phase:0},{asset:"felucca",axis:"nile",z0:-50,z1:50,speed:1.1,phase:.55},{asset:"ferry",axis:"huangpu",x0:70,x1:104,speed:2.2,phase:.2}],fm=[[[-9,4.6,17],[-15,4.6,12]],[[-9,4.6,17],[-2,4.6,11]],[[-9,4.6,17],[-15,4.6,22]],[[-9,4.6,17],[-3,4.6,23]]],mm=[[-15,12],[-2,11],[-15,22],[-3,23]];function gm(){let e=[];for(let t of[40.5,47.5]){for(let i=0;i<11;i++)e.push(["haybale",48+i*1.28,t,0,0]);for(let i=0;i<10;i++)e.push(["haybale",48.64+i*1.28,t,0,1])}for(let[t,i,r]of[[30,38,.3],[33,36,1.2],[44,54,.8],[47,56,2],[32,48,.1]])e.push(["haybale_sq",t,i,r,0]);for(let[t,i]of[[14,6],[15.2,7.4],[16.4,8.8],[12,12],[13,13.2]])e.push(["cone",t,i,0,0]);for(let[t,i]of[[2,8],[2.9,8.2],[2.45,8.1]])e.push(["crate",t,i,.3,0]);return e.push(["crate",2.45,8.1,.6,1]),e}var _u={giza:{plat:"#d9bd8a",accent:"#c8902f",line:"Old Kingdom \xB7 c. 2560 BC"},cairo:{plat:"#d8c7a6",accent:"#2f8f9d",line:"City of a thousand minarets"},luxor:{plat:"#d6b077",accent:"#c8902f",line:"Thebes \xB7 balloons at dawn"},qinggan:{plat:"#c98a64",accent:"#b4482c",line:"Dunhuang \xB7 Zhangye \xB7 Qinghai Lake"},yunnan:{plat:"#eeeae0",accent:"#b8862e",line:"Lijiang \xB7 Shangri-La \xB7 Meili"},beijing:{plat:"#e7e2d6",accent:"#a9322a",line:"The old city"},nanjing:{plat:"#a8aaa5",accent:"#53704a",line:"Plane trees \xB7 Zijin Mountain"},shanghai:{plat:"#c9c6bf",accent:"#c43f78",line:"The Bund \xB7 Lujiazui"},road:{plat:"#cbb07a",accent:"#d9b45c",line:"Everywhere in between"}};var Ct={time:{value:0},snow:{value:0},wet:{value:0},sand:{value:0},night:{value:0},windS:{value:.6},sun:{value:new R(0,1,0)},car:{value:new R(0,-99,0)},carR:{value:1.7}},xu={sandstone:"stone",limestone:"stone",granite:"stone",hieroglyph:"stone",bund:"stone",bund_dark:"stone",brick_grey:"brick",brick_dark:"brick",plaster:"plaster",stupa:"plaster",marble:"plaster",white:"plaster",paint_ochre:"plaster",red:"plaster",red_dark:"plaster",concrete:"plaster",sand:"plaster",tile_yellow:"tile",tile_grey:"tile",green_tile:"tile",gold:"tile",glass_city:"glass",glass_dark:"glass",wood:"wood",wood_dark:"wood",crate:"wood",rope:"wood",bark:"bark",bark_light:"bark",bark_white:"birch",fir:"leaf",fir2:"leaf",palm:"leaf",palm_dark:"leaf",ginkgo:"leaf",ginkgo2:"leaf",plane:"leaf",plane2:"leaf",poplar:"leaf",bush:"leaf",shrub:"leaf",blossom:"leaf",reed:"leaf",tuft:"leaf",snow:"snowcap",hay:"hay",hay_end:"hay",wrap:"plaster",steel:"metal",titanium:"metal",iron:"metal",chrome:"metal",verdigris:"metal",stand:"metal",yak:"fur",camel:"fur",cloth_red:"fur",terrazzo:"terrazzo",card_fir:"card",card_firsnow:"card",card_ginkgo:"card",card_plane:"card",card_poplar:"card",card_blossom:"card",card_palm:"card",card_bush:"card",card_shrub:"card"},ub={sandstone:[8,3.3,2.75],limestone:[8,3.9,3],granite:[17,1.8,2],hieroglyph:[17,1.2,1.2],bund:[17,1.8,1.8],bund_dark:[17,1.8,1.8],brick_grey:[9,2.76,2.8],brick_dark:[9,2.76,2.8],plaster:[10,4,4],white:[10,4,4],wrap:[10,2,2],red:[19,3,3],red_dark:[19,3,3],paint_ochre:[19,3,3],stupa:[19,3,3],sand:[19,3,3],marble:[13,3,3],concrete:[14,4,4],tile_yellow:[11,2.1,2.04],tile_grey:[11,2.1,2.04],green_tile:[11,2.1,2.04],glass_city:[15,4.8,6],glass_dark:[15,4.8,6],wood:[12,1.2,1.2],wood_dark:[12,1.2,1.2],crate:[12,.8,.8],bark:[16,.9,1.6],bark_light:[16,.9,1.6],hay:[18,1.2,1.2],hay_end:[18,.8,.8]},db={sandstone:[1.1,.55],limestone:[1.3,.6],granite:[.9,.5],hieroglyph:[.5,.35],bund:[.9,.45],bund_dark:[.9,.45],brick_grey:[.46,.2],brick_dark:[.46,.2]},pb=`
  uniform float dTime, dSnow, dWet, dSand, dNight; uniform vec3 dSun;
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
  float dHt = 0.0; float dLit = 0.0; float dRough = -1.0; vec3 dTN = vec3(0.0, 0.0, 1.0); float dUseTN = 0.0;
  uniform highp sampler2DArray tAlb, tNor; varying vec2 vTU;
`,fb=e=>`vec3(${e.map(t=>t.toFixed(4)).join(", ")})`;function mb(e,t,i){let[r,a,n]=i,s=$i.mean[r];return`{
    vec2 tu = vTU / vec2(${a.toFixed(2)}, ${n.toFixed(2)});
    vec3 ta = texture(tAlb, vec3(tu, ${r}.0)).rgb;
    // a second, larger and rotated sample breaks up the repeat on big walls
    vec3 tb = texture(tAlb, vec3(mat2(0.8, -0.6, 0.6, 0.8) * tu * 0.29 + 0.37, ${r}.0)).rgb;
    vec3 detail = ta / ${fb(s)};
    float macro = 0.88 + 0.24 * dF(vDW * 0.21) + (dot(tb, vec3(0.333)) / ${(s.reduce((o,l)=>o+l)/3).toFixed(4)} - 1.0) * 0.18;
    col *= clamp(detail, 0.0, 2.2) * macro;
    dTN = texture(tNor, vec3(tu, ${r}.0)).xyz * 2.0 - 1.0; dUseTN = 1.0;
    ${e==="glass"?`{ vec2 cell = floor(tu * vec2(4.0, 5.0)); float frame = step(0.8, dot(ta, vec3(0.333)));
      dLit = (1.0 - frame) * step(0.5, dH(vec3(cell, ${r}.0 + floor(vDW.x * 0.1)))); dRough = mix(0.06, 0.45, frame); }`:""}
    ${e==="tile"?"dRough = 0.5;":""}
  }`}function gb(e,t){let[i,r]=db[t]||[1,.5];switch(e){case"stone":case"brick":return`{
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
    }`;case"card":return`{
      float r = dH(floor(vDR * 3.7));
      col *= vec3(1.0 + (r - 0.5) * 0.16, 1.0 + (r - 0.5) * 0.06, 1.0 - (r - 0.5) * 0.12);
      ${t==="card_firsnow"?"col = mix(col, vec3(0.93, 0.95, 0.99), smoothstep(0.15, 0.6, vDN.y + (dF(vDW * 2.5) - 0.5) * 0.5) * 0.9);":""}
      dHt = 0.0;
    }`;case"snowcap":return"{ col *= 0.95 + dF(vDW * 3.0) * 0.08; dHt = dF(vDW * 4.0) * 0.4; }";case"hay":return`{
      float s = dN(vec3(vDW.x * 22.0, vDW.y * 22.0, vDW.z * 3.0)) * 0.5 + dN(vec3(vDW.x * 3.0, vDW.y * 22.0, vDW.z * 22.0)) * 0.5;
      col *= 0.8 + s * 0.35; dHt = s * 0.8;
    }`;case"metal":return"{ col *= 0.9 + dN(vec3(vDW.x * 40.0, vDW.y * 1.2, vDW.z * 40.0)) * 0.14; dHt = 0.0; }";case"fur":return"{ float s = dF(vDW * 14.0); col *= 0.78 + s * 0.35; dHt = s * 0.8; }";default:return"{ col *= 0.94 + dF(vDW * 2.0) * 0.1; }"}}function Zn(e,{kind:t,name:i=e.name,bump:r=.5,wind:a=null,fade:n=!1,tex:s=!0}={}){let o=t||xu[i],l=s&&$i.ready?ub[i]:null;if(!o&&!a)return e;let c=e.onBeforeCompile;e.onBeforeCompile=(d,u)=>{c==null||c.call(e,d,u),Object.assign(d.uniforms,{tAlb:$i.alb,tNor:$i.nor,dSun:Ct.sun,dTime:Ct.time,dSnow:Ct.snow,dWet:Ct.wet,dSand:Ct.sand,dNight:Ct.night,wS:Ct.windS,wCar:Ct.car,wCarR:Ct.carR});let p=d.vertexShader,g=d.fragmentShader;p=p.replace("#include <common>",`#include <common>
      uniform float dTime, wS, wCarR; uniform vec3 wCar;
      varying vec3 vDW; varying vec3 vDN; varying vec3 vDL; varying vec3 vDR; varying vec2 vTU;
      ${n?"attribute float aFade; varying float vFade;":""}`),a&&(p=p.replace("#include <begin_vertex>",`#include <begin_vertex>
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
        ${a.flutter?`{ float fl = sin(dTime * 7.3 + dot(transformed, vec3(3.1, 2.3, 4.7)) + wPh) * ${a.flutter.toFixed(3)} * wS * (0.4 + wGust);
          transformed += normal * fl * smoothstep(0.0, 0.5, transformed.y); }`:""}
        ${a.push?`{ vec2 wd = wRoot.xz - wCar.xz; float wl = length(wd);
          float wk = (1.0 - smoothstep(wCarR * 0.4, wCarR, wl)) * step(abs(wRoot.y - wCar.y), 2.5);
          vec2 wdir = wl > 0.001 ? wd / wl : vec2(1.0, 0.0);
          transformed.xz += wdir * wk * ${a.push.toFixed(2)} * transformed.y; transformed.y *= 1.0 - wk * 0.45; }`:""}`)),p=p.replace("#include <project_vertex>",`#include <project_vertex>
      { vec4 dw = vec4(transformed, 1.0); vec3 dn = objectNormal; vec3 dr = vec3(0.0);
        #ifdef USE_INSTANCING
          dw = instanceMatrix * dw; dn = mat3(instanceMatrix) * dn; dr = instanceMatrix[3].xyz;
        #endif
        vTU = uv; dw = modelMatrix * dw; vDW = dw.xyz; vDN = normalize(mat3(modelMatrix) * dn); vDL = transformed; vDR = (modelMatrix * vec4(dr, 1.0)).xyz;
        ${n?"vFade = aFade;":""} }`),g=g.replace("#include <common>",`#include <common>
      ${pb}
      ${n?"varying float vFade;":""}`),g=g.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
      ${n?"if (vFade > 0.001) { float ign = fract(52.9829189 * fract(dot(gl_FragCoord.xy, vec2(0.06711056, 0.00583715)))); if (ign < vFade) discard; }":""}`),g=g.replace("#include <color_fragment>",`#include <color_fragment>
      { vec3 col = diffuseColor.rgb;
        ${l?mb(o,i,l):o?gb(o,i):""}
        // weather on every surface
        float up = smoothstep(0.35, 0.85, vDN.y + (dF(vDW * 1.3) - 0.5) * 0.45);
        col = mix(col, vec3(0.93, 0.95, 1.0), dSnow * up);
        col *= 1.0 - dWet * 0.26;
        col = mix(col, vec3(0.78, 0.6, 0.4), dSand * 0.22 * smoothstep(-0.2, 0.7, vDN.y));
        diffuseColor.rgb = col; }`),g=g.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      if (dRough >= 0.0) roughnessFactor = dRough;
      roughnessFactor = mix(roughnessFactor, 0.22, dWet * smoothstep(0.4, 0.95, vDN.y));`),g=g.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      if (dUseTN > 0.5) {
        // tangent frame from the metre-scale UVs (as three does for normal maps); green flipped for glTF UVs
        vec3 q0 = dFdx(-vViewPosition), q1 = dFdy(-vViewPosition); vec2 st0 = dFdx(vTU), st1 = dFdy(vTU);
        vec3 q1p = cross(q1, normal), q0p = cross(normal, q0);
        vec3 T = q1p * st0.x + q0p * st1.x, B = q1p * st0.y + q0p * st1.y;
        float det = max(dot(T, T), dot(B, B)); float sc = det == 0.0 ? 0.0 : faceDirection * inversesqrt(det);
        vec3 tn = vec3(dTN.xy * ${(r*2).toFixed(2)} * vec2(1.0, -1.0), dTN.z);
        normal = normalize(T * (tn.x * sc) + B * (tn.y * sc) + normal * tn.z);
      } else normal = dPerturb(-vViewPosition, normal, vec2(dFdx(dHt), dFdy(dHt)) * ${r.toFixed(2)}, faceDirection);`),(o==="glass"||(l==null?void 0:l[0])===15)&&(g=g.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
 totalEmissiveRadiance *= dLit;`)),o==="card"&&(g=g.replace("#include <alphatest_fragment>",`
      #ifdef USE_MAP
      { // keep the leaves solid as the card shrinks: mip levels average the alpha down, so scale it back up with the level
        vec2 dx = dFdx(vMapUv * 512.0), dy = dFdy(vMapUv * 512.0);
        float lod = max(0.0, 0.5 * log2(max(dot(dx, dx), dot(dy, dy))));
        diffuseColor.a = clamp(diffuseColor.a * (1.0 + lod * 0.32), 0.0, 1.0); }
      #endif
      #include <alphatest_fragment>`)),(o==="leaf"||o==="card")&&(g=g.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      { vec3 vd = normalize(vViewPosition); float rim = pow(1.0 - abs(dot(normal, vd)), 3.0);
        // light through the leaves when looking toward the sun
        float tr = pow(max(0.0, dot(normalize(vDW - cameraPosition), dSun)), 5.0);
        totalEmissiveRadiance += diffuseColor.rgb * (rim * ${o==="card"?"0.12":"0.22"} + tr * ${o==="card"?"0.9":"0.35"} + ${o==="card"?"0.07":"0.0"}) * (1.0 - dNight); }`)),d.vertexShader=p,d.fragmentShader=g};let h=`${o}|${i}|${l?"t":""}|${r}|${a?`${a.bend}${a.rigid}${a.push||0}${a.flutter||0}`:""}|${n}`;return e.customProgramCacheKey=()=>h,e.needsUpdate=!0,e}var vb={meadow:[.25,.45,.38,1],autumn:[.13,.42,.45,.85],plane:[.24,.42,.36,.9],coast:[.26,.38,.4,.55],field:[.12,.5,.55,.7],danxia:[.1,.3,.5,.45],desert:[.12,.25,.55,.35]};function vm(e,t,{coarse:i=!1,free:r=()=>!0}={}){let a=i?20:27,n=i?3e4:78e3,s=48,o=480,l=320,c=new Uint8Array(o*l*4),h=new Te;for(let w=0;w<l;w++)for(let _=0;_<o;_++){let b=-120+(_+.5)/2,L=-80+(w+.5)/2,P=(w*o+_)*4,B=t.sample(b,L);if(B<.05||B>6.2||t.road(b,L)<2.3||t.slope(b,L)>.6||!r(b,L))continue;let j=!1;for(let $ in ti)Math.hypot(b-ti[$].x,L-ti[$].z)<7.2&&(j=!0);if(j||Math.hypot(b-Cr.x,L-Cr.z)<4)continue;let U=fr(b,L),I=0,k=0,F=0,ee=0,X=0;for(let $ in U){let xe=vb[$];xe&&(I+=xe[0]*U[$],k+=xe[1]*U[$],F+=xe[2]*U[$],ee+=xe[3]*U[$])}X=(U.meadow||0)+(U.autumn||0)*.9+(U.plane||0)*.85+(U.coast||0)*.7+(U.field||0)*.95+(U.danxia||0)*.12+(U.desert||0)*.05;let K=yi(.3,.6,pr(b*.08,L*.08));X*=.35+.65*K,X*=yi(2.3,3.6,t.road(b,L)),c[P]=Math.round(Math.min(1,X)*255),c[P+1]=Math.round(Math.min(1,I/.4)*255),c[P+2]=Math.round(Math.min(1,F)*255),c[P+3]=Math.round(Math.min(1,ee*(.75+pr(b*.2+7,L*.2)*.5))*255)}let d=new Sa(c,o,l);d.magFilter=d.minFilter=Kt,d.needsUpdate=!0;let u=new Uint16Array(38801);for(let w=0;w<t.H.length;w++)u[w]=Hp.toHalfFloat(t.H[w]);let p=new Sa(u,241,161,Ps,_i);p.magFilter=p.minFilter=Kt,p.needsUpdate=!0;let g=[[0,.045],[.35,.04],[.7,.026],[1,0]],x=[],m=[];g.forEach(([w,_],b)=>{_>0?x.push(-_,w,0,_,w,.012):x.push(0,w,.01)});for(let w=0;w<2;w++){let _=w*2;m.push(_,_+1,_+2,_+2,_+1,_+3)}m.push(4,5,6);let f=new Uf;f.setAttribute("position",new nt(x,3)),f.setIndex(m);let M=new Float32Array(n*4);for(let w=0;w<n;w++)M[w*4]=(Math.random()*2-1)*a,M[w*4+1]=(Math.random()*2-1)*a,M[w*4+2]=Math.random(),M[w*4+3]=Math.random()*Math.PI*2;f.setAttribute("aOff",new tr(M,4)),f.instanceCount=n;let y={center:{value:new R},R:{value:a},maskTex:{value:d},hTex:{value:p},t:Ct.time,wind:Ct.windS,car:Ct.car,snow:Ct.snow,wet:Ct.wet,trail:{value:Array.from({length:s},()=>new Vt(0,-99,0,1))},light:{value:new Te(1,1,1)},sunDir:{value:new R(0,1,0)},sunCol:{value:new Te(1,1,1)}},v=new Wt({uniforms:Object.assign(dr.clone(Le.fog),y),side:Pi,fog:!0,vertexShader:`#include <fog_pars_vertex>
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
      }`}),S=new dt(f,v);S.frustumCulled=!1,e.add(S);let A=0;return{U:y,press(w,_,b){y.trail.value[A=(A+1)%s].set(w,b,_,0)},update(w,_){y.center.value.set(_.x,0,_.z);for(let b=0;b<s;b++){let L=y.trail.value[b];L.w=Math.min(1,Math.max(0,(w-L.y)/7))}}}}var ei=e=>new Te(e),_b={desert:ei("#e7c890"),danxia:ei("#cf7b52"),meadow:ei("#86a85a"),autumn:ei("#b5a65f"),plane:ei("#8ba45c"),coast:ei("#a4b37c"),field:ei("#d3b66c")},xb={desert:ei("#d2ab72"),danxia:ei("#b7744f"),meadow:ei("#a48a62"),autumn:ei("#a59a86"),plane:ei("#9b978e"),coast:ei("#a19d94"),field:ei("#b49763")},yb=ei("#7b6a5c"),Mb=ei("#f4f6fb"),bb=ei("#b9a57a"),Sb=ei("#cfc8b8"),_m=(e,{bend:t=.06,push:i=0,rigid:r=.6,fade:a=!1,flutter:n=0}={},s)=>Zn(e.clone(),{name:s||e.name,wind:{bend:t,push:i,rigid:r,flutter:n},fade:a});function xm(e,t,i,r,{coarse:a=!1}={}){let{sample:n,slope:s,road:o,at:l}=r,c=(()=>{let N=1234567;return()=>(N=N*16807%2147483647)/2147483647})(),h=[],d=new et,u=new hi,p=new R,g=new R,x=new R(0,1,0),m=(N,D,z,ie=0,ne=1)=>new et().compose(new R(N,D,z),new hi().setFromAxisAngle(x,ie),new R(ne,ne,ne)),f=(N,D,z)=>{for(let ie in ti)if(Math.hypot(N-ti[ie].x,D-ti[ie].z)<z)return!0;return Math.hypot(N-Cr.x,D-Cr.z)<z},M=new Te,y={desert:[0,0,1,0,0,0,0,0],danxia:[0,0,.3,.7,0,0,0,0],meadow:[1,0,0,0,0,0,0,0],autumn:[.4,.6,0,0,0,0,0,0],plane:[.75,0,0,0,0,0,.25,0],coast:[.8,0,.2,0,0,0,0,0],field:[.15,.85,0,0,0,0,0,0]},v={plane:1,coast:1},S=new ui(240,160,240,160);S.rotateX(-Math.PI/2);let A=S.attributes.position,w=new Float32Array(A.count*3),_=new Float32Array(A.count*3),b=new Te,L=new Te,P=new Float32Array(A.count*4),B=new Float32Array(A.count*4),j=new Float32Array(8),U=(N,D)=>{for(let z=0;z<8;z++)j[z]*=1-D;j[N]+=D};for(let N=0;N<A.count;N++){let D=A.getX(N),z=A.getZ(N),ie=Math.round(D- -120),ne=Math.round(z- -80),Me=l(ie,ne);A.setY(N,Me);let pe=fr(D,z);b.setRGB(0,0,0);for(let ft in pe)b.add(M.copy(_b[ft]).multiplyScalar(pe[ft]));j.fill(0);for(let ft in pe)for(let oi=0;oi<8;oi++)j[oi]+=y[ft][oi]*pe[ft];if(pe.danxia>.1){let ft=.5+.5*Math.sin(Me*3.4+pr(D*.1,z*.1)*3);b.lerp(M.set(ft>.55?"#e39a62":ft<.3?"#a9533a":"#c86f4a"),pe.danxia*.6)}let Xe=o(D,z),ot=0;for(let ft in pe)v[ft]&&(ot+=pe[ft]);if(Xe<2.8){L.setRGB(0,0,0);for(let oi in pe)L.add(M.copy(xb[oi]).multiplyScalar(pe[oi]));let ft=1-yi(1.4,2.8,Xe);b.lerp(L,ft),U(ot>.5?7:6,ft)}for(let ft in ti){let oi=ti[ft],ht=Math.hypot(D-oi.x,z-oi.z);if(ht<8.5){let Gt=1-yi(6.5,8.5,ht);b.lerp(Sb,Gt*.45),U(7,Gt*.8)}}let Dt=Math.hypot(l(ie+1,ne)-l(ie-1,ne),l(ie,ne+1)-l(ie,ne-1))/2,Nt=yi(.5,1.15,Dt);b.lerp(yb,Nt*.8),U((pe.danxia||0)>.4?3:4,Nt);let He=yi(6,9,Me+pr(D*.3,z*.3)*2);b.lerp(Mb,He),U(5,He);let ii=(1-yi(-.25,.2,Me))*.85;b.lerp(bb,ii),U(ot>.5?6:2,ii*.8);let Jt=(pr(D*.7,z*.7)-.5)*.07;w[N*3]=b.r+Jt,w[N*3+1]=b.g+Jt,w[N*3+2]=b.b+Jt,_[N*3]=(pe.desert||0)+(pe.danxia||0)*.6,_[N*3+1]=He,_[N*3+2]=1-yi(1.4,2.8,Xe);let rt=0;for(let ft=0;ft<8;ft++)rt+=j[ft];rt=rt||1;for(let ft=0;ft<4;ft++)P[N*4+ft]=j[ft]/rt,B[N*4+ft]=j[ft+4]/rt}S.setAttribute("color",new Bt(w,3)),S.setAttribute("aux",new Bt(_,3)),S.setAttribute("sw0",new Bt(P,4)),S.setAttribute("sw1",new Bt(B,4)),S.computeVertexNormals();let I=new si({vertexColors:!0,roughness:.96}),k=[[0,2.4],[1,2.6],[2,5],[3,7],[4,6],[5,5],[6,3.6],[7,3.2]];I.onBeforeCompile=N=>{Object.assign(N.uniforms,{dTime:Ct.time,dSnow:Ct.snow,dWet:Ct.wet,dSand:Ct.sand,tAlb:$i.alb,tNor:$i.nor});let D=ie=>`vec3(${$i.mean[ie].map(ne=>ne.toFixed(4)).join(", ")})`,z=ie=>ie===3||ie===4;N.vertexShader=N.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aux; attribute vec4 sw0, sw1; varying vec3 vAux; varying vec3 vWp; varying vec3 vWn; varying vec4 vS0, vS1;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAux = aux; vS0 = sw0; vS1 = sw1; vWp = (modelMatrix * vec4(transformed, 1.0)).xyz; vWn = normal;`),N.fragmentShader=N.fragmentShader.replace("#include <common>",`#include <common>
      uniform float dTime, dSnow, dWet, dSand;
      uniform highp sampler2DArray tAlb, tNor;
      varying vec3 vAux; varying vec3 vWp; varying vec3 vWn; varying vec4 vS0, vS1;
      float gH(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gN(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.-2.*f); return mix(mix(gH(i), gH(i+vec2(1,0)), f.x), mix(gH(i+vec2(0,1)), gH(i+vec2(1,1)), f.x), f.y); }
      float gF(vec2 p){ return gN(p) * 0.5 + gN(p * 2.1) * 0.25 + gN(p * 4.3) * 0.125 + gN(p * 8.7) * 0.0625; }
      vec3 gTN = vec3(0.0); float puddle = 0.0;
      // one layer: albedo and a world-space normal offset; triplanar where asked
      void gLayer(float L, float S, bool tri, vec3 wn, out vec3 a, out vec3 nOff){
        if (!tri || wn.y > 0.85) {
          vec2 uv = vWp.xz / S;
          a = texture(tAlb, vec3(uv, L)).rgb; vec3 t = texture(tNor, vec3(uv, L)).xyz * 2.0 - 1.0;
          nOff = vec3(t.x, 0.0, -t.y);
        } else {
          vec3 bw = pow(abs(wn), vec3(4.0)); bw /= bw.x + bw.y + bw.z;
          vec2 ux = vWp.zy / S, uy = vWp.xz / S, uz = vWp.xy / S;
          a = texture(tAlb, vec3(ux, L)).rgb * bw.x + texture(tAlb, vec3(uy, L)).rgb * bw.y + texture(tAlb, vec3(uz, L)).rgb * bw.z;
          vec3 tx = texture(tNor, vec3(ux, L)).xyz * 2.0 - 1.0, ty = texture(tNor, vec3(uy, L)).xyz * 2.0 - 1.0, tz = texture(tNor, vec3(uz, L)).xyz * 2.0 - 1.0;
          nOff = vec3(0.0, -tx.y, tx.x) * bw.x + vec3(ty.x, 0.0, -ty.y) * bw.y + vec3(tz.x, -tz.y, 0.0) * bw.z;
        }
      }`).replace("#include <color_fragment>",`#include <color_fragment>
      {
        vec3 wn = normalize(vWn);
        float W[8]; W[0] = vS0.x; W[1] = vS0.y; W[2] = vS0.z; W[3] = vS0.w; W[4] = vS1.x; W[5] = vS1.y; W[6] = vS1.z; W[7] = vS1.w;
        vec3 A[8]; vec3 NO[8]; float Hh[8]; float ma = 0.0;
        ${k.map(([ie,ne])=>`A[${ie}] = vec3(0.0); NO[${ie}] = vec3(0.0); Hh[${ie}] = 0.0;
        if (W[${ie}] > 0.004) { gLayer(${ie}.0, ${ne.toFixed(1)}, ${z(ie)}, wn, A[${ie}], NO[${ie}]); Hh[${ie}] = W[${ie}] + dot(A[${ie}] / ${D(ie)}, vec3(0.333)) * 0.35; ma = max(ma, Hh[${ie}]); }`).join(`
        `)}
        // height blend: the bumpier layer wins where two meet (pebbles through sand, grass through dirt)
        vec3 alb = vec3(0.0), meanC = vec3(0.0), no = vec3(0.0); float tw = 0.0;
        ${k.map(([ie])=>`{ float b = max(Hh[${ie}] - ma + 0.22, 0.0) * step(0.004, W[${ie}]); alb += A[${ie}] * b; meanC += ${D(ie)} * b; no += NO[${ie}] * b; tw += b; }`).join(`
        `)}
        alb /= max(tw, 1e-4); meanC /= max(tw, 1e-4); no /= max(tw, 1e-4);
        diffuseColor.rgb *= clamp(alb / max(meanC, vec3(0.02)), 0.0, 2.4);
        gTN = no;
      }
      // patches of darker and lighter ground
      diffuseColor.rgb *= 0.9 + gF(vWp.xz * 0.12) * 0.2;
      // sand ripples, and in a sandstorm they stream across in the wind
      float rip = sin(vWp.x * 2.2 + sin(vWp.z * 0.35) * 2.5 + gN(vWp.xz * 0.4) * 3.0);
      diffuseColor.rgb *= 1.0 - vAux.x * smoothstep(0.55, 1.0, rip) * 0.06;
      gTN.x += vAux.x * cos(vWp.x * 2.2 + sin(vWp.z * 0.35) * 2.5 + gN(vWp.xz * 0.4) * 3.0) * 0.12;
      float drift = smoothstep(0.6, 1.0, gN(vec2(vWp.x * 0.6 - dTime * 6.0, vWp.z * 4.0))) * dSand;
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.78, 0.55), drift * 0.45 * (0.4 + vAux.x));
      // snow: the cap on the peaks, and snowfall settling on everything that faces up
      float settle = dSnow * smoothstep(0.55, 0.85, vWn.y) * smoothstep(0.2, 0.7, gF(vWp.xz * 0.5) + dSnow * 0.5);
      diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.93, 0.95, 1.0), settle);
      gTN *= 1.0 - settle * 0.7;
      // rain: darker ground and puddles in the low spots
      puddle = smoothstep(0.62, 0.7, gF(vWp.xz * 0.18)) * dWet * (0.4 + vAux.z * 0.6);
      diffuseColor.rgb *= 1.0 - dWet * 0.3 - puddle * 0.25;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
      roughnessFactor = mix(roughnessFactor, 0.35, dWet * 0.6); roughnessFactor = mix(roughnessFactor, 0.04, puddle);`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
      { vec3 wn = normalize(vWn); vec3 o = gTN * 0.9 * (1.0 - puddle); o -= wn * dot(o, wn);
        normal = normalize((viewMatrix * vec4(normalize(wn + o), 0.0)).xyz); }`)};let F=new dt(S,I);F.receiveShadow=!0,e.add(F);let ee=new Uint8Array(38801*4);for(let N=0;N<r.H.length;N++)ee[N*4]=Math.max(0,Math.min(255,Math.round((r.H[N]+4)*32))),ee[N*4+3]=255;let X=new Sa(ee,241,161);X.needsUpdate=!0,X.magFilter=X.minFilter=Kt;let K=new Wt({transparent:!0,fog:!0,uniforms:{...dr.clone(Le.fog),t:{value:0},htex:{value:X},deep:{value:ei("#1e6a8f")},shallow:{value:ei("#63c6c8")},foam:{value:ei("#ffffff")},night:{value:0},sky:{value:ei("#bfe3ff")},car:{value:new R}},vertexShader:`#include <fog_pars_vertex>
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
      }`}),$=new dt(new ui(900,900),K);$.rotation.x=-Math.PI/2,$.position.y=-.45,$.renderOrder=2,e.add($);let xe={},be=(N,D)=>{for(let z of N.hulls){let ie=new Float32Array(z.length),ne=new R;for(let Me=0;Me<z.length;Me+=3)ne.set(z[Me],z[Me+1],z[Me+2]).applyMatrix4(D),ie[Me]=ne.x,ie[Me+1]=ne.y,ie[Me+2]=ne.z;t.statics.hull(ie,0,0,0)}},qe=(N,D,z)=>{var ne;let ie=i[N];if(!ie){console.warn("missing asset",N);return}for(let Me of ie.parts){let pe=Me.geometry.clone().applyMatrix4(D);for(let ot of Object.keys(pe.attributes))ot!=="position"&&ot!=="normal"&&ot!=="uv"&&pe.deleteAttribute(ot);pe.attributes.uv||pe.setAttribute("uv",new Bt(new Float32Array(pe.attributes.position.count*2),2)),pe.index&&(pe=pe.toNonIndexed());let Xe=xe[z]||(xe[z]={});(Xe[ne=Me.material.name]||(Xe[ne]={mat:Me.material,geos:[]})).geos.push(pe)}};for(let[N,D,z,ie,ne,Me=0]of gu){let pe=m(D,n(D,z)+Me,z,ie,ne);qe(N,pe,ja(D,z).key),i[N]&&be(i[N],pe)}for(let[N,D,z,ie,ne,Me]of vu)qe(N,m(D,n(D,z)+Me,z,ie,ne),ja(D,z).key);for(let N in xe)for(let D in xe[N]){let{mat:z,geos:ie}=xe[N][D],ne=new dt(Oh(ie,!1),z);ne.castShadow=!0,ne.receiveShadow=!0,e.add(ne)}let De=i.__materials;for(let N in De)xu[N]&&Zn(De[N]);De.lantern&&h.push({m:De.lantern,day:0,night:1.6});for(let[N,D,z,ie,ne,Me]of vu){let pe=i[N];if(!(!pe||!pe.roles.lamp))for(let Xe of pe.roles.lamp){let ot=new dt(Xe.geometry,Xe.material);ot.applyMatrix4(m(D,n(D,z)+Me,z,ie,ne)),e.add(ot),h.push({m:Xe.material,day:0,night:2.4})}}for(let N of["glass_city","glass_dark"])De[N]&&(De[N].envMapIntensity=2.2,De[N].emissive=ei("#ffcf8a"),h.push({m:De[N],day:0,night:.22}));De.pearl&&(De.pearl.emissive=ei("#ff4fa3"),h.push({m:De.pearl,day:0,night:.9}));let te={fir:"fir",firsnow:"fir",ginkgo:"ginkgo",plane:"plane",poplar:"poplar",blossom:"blossom",palm:"palm",bush:"broad",shrub:"broad"};for(let N in De)if(N.startsWith("card_")){let D=De[N];D.map=mu[te[N.slice(5)]]||null,D.alphaTest=.42,D.alphaToCoverage=!a,D.side=Pi,D.roughness=.72,D.metalness=0,D.needsUpdate=!0}for(let N in i){let D=i[N];if(!D.parts)continue;let z=D.parts.filter(Xe=>Xe.material.name.startsWith("card_"));if(!z.length)continue;let ie=new Zi;for(let Xe of z)Xe.geometry.computeBoundingBox(),ie.union(Xe.geometry.boundingBox);let ne=ie.getCenter(new R),Me=ie.getSize(new R).length()*.5,pe=new R;for(let Xe of z){let ot=Xe.geometry.attributes.position,Dt=Xe.geometry.attributes.normal;for(let Nt=0;Nt<ot.count;Nt++)pe.set(ot.getX(Nt)-ne.x,(ot.getY(Nt)-ne.y)*.8,ot.getZ(Nt)-ne.z).normalize(),pe.y+=.45,pe.normalize(),Dt.setXYZ(Nt,pe.x,pe.y,pe.z);Dt.needsUpdate=!0}}let ae={},oe=(N,D,z,ie=1,ne=c()*Math.PI*2)=>{(ae[N]||(ae[N]=[])).push({x:D,y:n(D,z)-.05,z,ry:ne,s:ie,wob:0,v:0,ax:0,az:0})},Be=(N,D,z=2.8)=>o(N,D)>z&&!f(N,D,9)&&n(N,D)>.05&&s(N,D)<.5&&zs(N,D)<.9,Ye=[];for(let[N,D,z,,ie]of gu)Ye.push([D,z,(N.startsWith("pyramid")?12:N==="city_wall"?9:6.5)*(ie||1)]);let ce=(N,D)=>Ye.every(([z,ie,ne])=>Math.hypot(N-z,D-ie)>ne),$e={autumn:"ginkgo",plane:"plane",coast:"plane",danxia:"poplar",field:"poplar"};for(let N=-120;N<120;N+=1)for(let D=-80;D<80;D+=1){let z=o(N,D);if(z<4.6||z>5.6)continue;let ie=fr(N,D),ne=null,Me=.5;for(let pe in $e)(ie[pe]||0)>Me&&(Me=ie[pe],ne=pe);!ne||((N*7+D*13)%5+5)%5!==0||c()>.6||!Be(N,D,4.4)||!ce(N,D)||oe($e[ne],N,D,($e[ne]==="plane"?.72:.9)+c()*.2)}let he=a?9e3:16e3;for(let N=0;N<he;N++){let D=-120+c()*240,z=-80+c()*160,ie=fr(D,z),ne=n(D,z);if(ne<.3&&ne>-.45-.1&&o(D,z)>2.5&&!f(D,z,8)&&c()<.6&&Math.min(n(D+2.5,z),n(D-2.5,z),n(D,z+2.5),n(D,z-2.5))<-.45&&oe("reeds",D,z,.8+c()*.5),!Be(D,z)||!ce(D,z))continue;let Me=pr(D*.06+3,z*.06),pe=Math.abs(D-Bs(z));if(ne>2.5&&ne<9&&c()<.12){oe(ne>5?"fir_snow":"fir",D,z,.7+c()*.5);continue}(ie.desert||0)>.5?pe>5&&pe<10.5&&c()<.22?oe("palm",D,z,.85+c()*.4):c()<.03&&oe("shrub",D,z,.8+c()*.6):(ie.danxia||0)>.5?c()<.08?oe("tuft",D,z,1+c()):c()<.01&&oe("shrub",D,z,.7+c()*.5):(ie.meadow||0)>.45?Me>.5&&c()<.3?oe(ne>3.5?"fir_snow":"fir",D,z,.8+c()*.7):c()<.03?oe("blossom",D,z,.8+c()*.5):c()<.04&&oe("bush",D,z,.6+c()*.6):(ie.autumn||0)>.45?Me>.52&&c()<.12?oe("ginkgo",D,z,.8+c()*.4):c()<.03&&oe("bush",D,z,.6+c()*.4):(ie.plane||0)>.45||(ie.coast||0)>.45?Me>.56&&c()<.1?oe("plane",D,z,.7+c()*.3):c()<.04&&oe("bush",D,z,.6+c()*.5):(ie.field||0)>.45&&(Me>.62&&c()<.08?oe("poplar",D,z,.9+c()*.3):c()<.02&&oe("bush",D,z,.5+c()*.4))}let se={fir:.3,fir_snow:.3,palm:.24,ginkgo:.28,plane:.34,poplar:.24,blossom:.2},fe={shrub:1,tuft:1,reeds:1,bush:1},Re={};for(let N in ae){let D=ae[N],{group:z,meshes:ie}=om(i,N,D.map(ne=>m(ne.x,ne.y,ne.z,ne.ry,ne.s)),{shadow:!fe[N],patch:(ne,Me)=>_m(ne,fe[N]?{bend:.05,push:.9,rigid:.05,flutter:Me.startsWith("card")?.03:0}:{bend:Me.startsWith("bark")?.004:.008,rigid:1.2,fade:!0,flutter:Me.startsWith("card")?.035:0},Me)});if(!fe[N])for(let ne of ie){let Me=new tr(new Float32Array(D.length),1);Me.setUsage(ha),ne.geometry=ne.geometry.clone(),ne.geometry.setAttribute("aFade",Me)}if(D.forEach(ne=>{ne.fade=0}),e.add(z),Re[N]=ie,se[N])for(let ne of D)t.statics.cyl(ne.x,ne.y+1.5,ne.z,1.5,se[N]*ne.s,"tree")}let Se=new Set;function Ge(N,D,z){if(!(D<1.5))for(let ie in se){let ne=ae[ie];if(ne)for(let Me=0;Me<ne.length;Me++){let pe=ne[Me],Xe=pe.x-N.x,ot=pe.z-N.z,Dt=Xe*Xe+ot*ot;if(Dt>2.2*2.2||Math.abs(pe.wob)>.3)continue;let Nt=Math.sqrt(Dt)||1;pe.wob=Math.min(1,.3+D/10),pe.v=0,pe.ax=ot/Nt,pe.az=-Xe/Nt,pe.type=ie,pe.i=Me,pe.phase=0,Se.add(pe),z==null||z(pe)}}}function Ve(N){for(let D of Se){D.v+=(-D.wob*70-D.v*3.5)*N,D.wob+=D.v*N,D.phase+=N,u.setFromAxisAngle(g.set(D.ax,0,D.az),D.wob*.2).multiply(new hi().setFromAxisAngle(x,D.ry)),d.compose(g.set(D.x,D.y,D.z),u,p.set(D.s,D.s,D.s));for(let z of Re[D.type])z.setMatrixAt(D.i,d),z.instanceMatrix.needsUpdate=!0;Math.abs(D.wob)<.004&&Math.abs(D.v)<.03&&D.phase>.4&&(D.wob=0,Se.delete(D))}}let tt=vm(e,r,{coarse:a,free:ce}),st=a?1500:3500,O=new ji(new bh(.08,0).translate(0,.4,0),_m(new si({roughness:.8,name:"flower"}),{bend:.15,push:1.1,rigid:0}),st),bt=0,mt=["#f4f1e6","#f2c94c","#e88aa8","#a78bd8","#f4f1e6"].map(ei);for(let N=0;N<st*30&&bt<st;N++){let D=-120+c()*240,z=-80+c()*160;if((fr(D,z).meadow||0)<.55||pr(D*.08,z*.08)<.4)continue;let ne=n(D,z);ne<.05||ne>6||o(D,z)<2.4||f(D,z,7.5)||s(D,z)>.5||!ce(D,z)||(O.setMatrixAt(bt,d.compose(g.set(D,ne,z),u.identity(),p.set(1,.8+c()*.6,1))),O.setColorAt(bt,mt[Math.floor(c()*5)]),bt++)}O.count=bt,O.frustumCulled=!1,e.add(O);let vt=(()=>{let N=document.createElement("canvas");N.width=N.height=64;let D=N.getContext("2d"),z=D.createRadialGradient(32,32,0,32,32,32);return z.addColorStop(0,"rgba(0,0,0,.55)"),z.addColorStop(1,"rgba(0,0,0,0)"),D.fillStyle=z,D.fillRect(0,0,64,64),new Hr(N)})(),C=[];for(let N in ae)if(se[N])for(let D of ae[N])C.push([D.x,D.y+.06,D.z,2.2*D.s]);let T=new ji(new ui(1,1).rotateX(-Math.PI/2),new xi({map:vt,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,opacity:.6}),Math.max(1,C.length));C.forEach(([N,D,z,ie],ne)=>T.setMatrixAt(ne,d.compose(g.set(N,D,z),u.identity(),p.set(ie*2,1,ie*2)))),T.count=C.length,T.renderOrder=1,e.add(T);let G=(()=>{let N=document.createElement("canvas");N.width=N.height=64;let D=N.getContext("2d");return D.fillStyle="#fff",D.beginPath(),D.moveTo(32,60),D.bezierCurveTo(4,40,4,8,32,4),D.bezierCurveTo(60,8,60,40,32,60),D.fill(),new Hr(N)})(),re=a?900:1800,le=new ji(new ui(.26,.26).rotateX(-Math.PI/2),new si({map:G,alphaTest:.5,side:Pi,roughness:.9}),re),ye=[];for(let N=0;N<re*30&&ye.length<re;N++){let D=c()<.5,z=D?ae.ginkgo:ae.plane;if(!z||!z.length)continue;let ie=z[Math.floor(c()*z.length)],ne=c()*6.28,Me=c()*4.5,pe=ie.x+Math.cos(ne)*Me,Xe=ie.z+Math.sin(ne)*Me,ot=n(pe,Xe);ot<.05||(ye.push({p:new R(pe,ot+.03,Xe),v:new R,rot:c()*6.28,spin:0,tilt:0,air:!1}),le.setColorAt(ye.length-1,M.setHSL(D?.12+c()*.03:.07+c()*.04,D?.8:.55,D?.55+c()*.1:.38+c()*.12)))}le.count=ye.length,le.frustumCulled=!1,le.instanceMatrix.setUsage(ha),le.receiveShadow=!0;let Ie=new zr,q=N=>{let D=ye[N];d.compose(D.p,u.setFromEuler(Ie.set(D.tilt,D.rot,D.tilt*.6)),p.set(1,1,1)),le.setMatrixAt(N,d)};ye.forEach((N,D)=>q(D)),e.add(le);function Ee(N,D,z,ie){let ne=!1;for(let Me=0;Me<ye.length;Me++){let pe=ye[Me];if(!pe.air){if(z<2.5)continue;let ot=pe.p.x-N.x,Dt=pe.p.z-N.z;if(ot*ot+Dt*Dt>2.6||Math.abs(pe.p.y-N.y)>2)continue;pe.air=!0;let He=.25+Math.random()*.4;pe.v.set(D.x*He+ot*1.5,2+Math.random()*z*.35,D.z*He+Dt*1.5),pe.spin=(Math.random()-.5)*12}pe.v.y-=6*ie,pe.v.multiplyScalar(1-ie*2.2),pe.p.addScaledVector(pe.v,ie),pe.rot+=pe.spin*ie,pe.tilt=Math.sin(pe.rot*2)*.8;let Xe=n(pe.p.x,pe.p.z)+.03;pe.p.y<=Xe&&(pe.p.y=Xe,pe.air=!1,pe.tilt=0),q(Me),ne=!0}ne&&(le.instanceMatrix.needsUpdate=!0)}let Ce=240,Oe=new ji(new ui(.2,.2),new si({map:G,alphaTest:.5,side:Pi}),Ce);Oe.frustumCulled=!1,Oe.instanceMatrix.setUsage(ha);for(let N=0;N<Ce;N++)Oe.setColorAt(N,M.set("#e8b93a"));let _e=Array.from({length:Ce},()=>({p:new R(0,-99,0),ph:Math.random()*6,life:0}));e.add(Oe);let Ke={autumn:[.12,.8,.55],plane:[.08,.55,.42],meadow:[.95,.6,.82]};function it(N,D,z){let ie=ja(z.x,z.z),ne=ti[ie.key].biome,Me=Ke[ne],pe=Me&&ie.d<34,Xe=ne==="autumn"?ae.ginkgo:ne==="plane"?ae.plane:ae.blossom,ot=pe&&Xe?Xe.filter(Nt=>Math.abs(Nt.x-z.x)<24&&Math.abs(Nt.z-z.z)<18):[],Dt=!1;for(let Nt=0;Nt<Ce;Nt++){let He=_e[Nt];if(He.life<=0){if(He.p.y=-99,ot.length&&Math.random()<.03){let ii=ot[Math.floor(Math.random()*ot.length)];He.p.set(ii.x+(Math.random()-.5)*3,ii.y+2.5+Math.random()*2*ii.s,ii.z+(Math.random()-.5)*3),He.life=1,Oe.setColorAt(Nt,M.setHSL(Me[0]+Math.random()*.04,Me[1],Me[2]+Math.random()*.1)),Dt=!0}}else He.p.x+=(Math.sin(D*1.3+He.ph)*.6+Ct.windS.value*.6)*N,He.p.z+=Math.cos(D*1.1+He.ph)*.4*N,He.p.y-=.7*N,He.p.y<n(He.p.x,He.p.z)&&(He.life=0);d.compose(He.p,u.setFromEuler(Ie.set(Math.sin(D*3+He.ph)*1.2,D*2+He.ph,Math.cos(D*2.6+He.ph))),p.set(1,1,1)),Oe.setMatrixAt(Nt,d)}Oe.instanceMatrix.needsUpdate=!0,Dt&&(Oe.instanceColor.needsUpdate=!0)}let ut=["#2f6fd0","#f4f1e6","#d4392e","#3f9a52","#f2c230"].map(ei),St=[];for(let[[N,D,z],[ie,ne,Me]]of fm){let pe=n(N,z)+D,Xe=n(ie,Me)+ne,ot=Math.hypot(ie-N,Me-z),Dt=Math.floor(ot/.5);for(let Nt=1;Nt<Dt;Nt++){let He=Nt/Dt,ii=N+(ie-N)*He,Jt=z+(Me-z)*He,rt=pe+(Xe-pe)*He-Math.sin(He*Math.PI)*.9,ft=new ui(.34,.42,3,1).translate(0,-.21,0).rotateY(-Math.atan2(Me-z,ie-N)).translate(ii,rt,Jt),oi=ut[Nt%5],ht=new Float32Array(ft.attributes.position.count*3);for(let Gt=0;Gt<ht.length;Gt+=3)ht[Gt]=oi.r,ht[Gt+1]=oi.g,ht[Gt+2]=oi.b;ft.setAttribute("color",new Bt(ht,3)),ft.deleteAttribute("uv"),St.push(ft)}}if(St.length){let N=new si({vertexColors:!0,side:Pi,roughness:.9});N.onBeforeCompile=z=>{z.uniforms.wT=Ct.time,z.uniforms.wS=Ct.windS,z.vertexShader=z.vertexShader.replace("#include <common>",`#include <common>
uniform float wT, wS;`).replace("#include <begin_vertex>",`#include <begin_vertex>
        transformed.x += sin(wT * 6.0 + position.x * 3.0 + position.z * 2.0) * 0.08 * (0.6 + wS);
        transformed.z += cos(wT * 5.0 + position.x * 2.0) * 0.08 * (0.6 + wS);`)};let D=new dt(Oh(St),N);D.castShadow=!0,e.add(D)}for(let[N,D]of mm){let z=Aa(i,"flagpole");z.position.set(N,n(N,D),D),e.add(z),t.statics.cyl(N,n(N,D)+2.5,D,2.5,.12)}let V=um.map(([N,D,z,ie,ne])=>{let Me=Aa(i,N);return Me.scale.setScalar(ne),Me.position.set(D,n(D,z),z),Me.rotation.y=ie,e.add(Me),{g:Me,home:new de(D,z),tgt:new de(D,z),bob:Math.random()*6,speed:0}});function ue(N,D,z){for(let ie of V){let ne=ie.g.position,Me=Math.hypot(ne.x-z.x,ne.z-z.z);Me<5?(ie.tgt.set(ne.x+(ne.x-z.x)/Me*6,ne.z+(ne.z-z.z)/Me*6),ie.speed=3.2):Math.random()<N*.08&&(ie.tgt.set(ie.home.x+(Math.random()-.5)*8,ie.home.y+(Math.random()-.5)*8),ie.speed=.7);let pe=ie.tgt.x-ne.x,Xe=ie.tgt.y-ne.z,ot=Math.hypot(pe,Xe);if(ot>.3&&n(ie.tgt.x,ie.tgt.y)>.05){let Dt=Math.atan2(-Xe,pe)-ie.g.rotation.y;Dt=Math.atan2(Math.sin(Dt),Math.cos(Dt)),ie.g.rotation.y+=Dt*Math.min(1,N*4),ne.x+=pe/ot*ie.speed*N,ne.z+=Xe/ot*ie.speed*N,ie.g.rotation.z=Math.sin(D*ie.speed*4)*.04}else ie.speed=0,ie.g.rotation.z=Math.sin(D*.8+ie.bob)*.02;ne.y=n(ne.x,ne.z)+(ie.speed>1?Math.abs(Math.sin(D*ie.speed*4))*.06:0)}}let me=dm.map(([N,D,z],ie)=>{var Xe,ot;let ne=Aa(i,"balloon");ne.position.set(N,z,D),ne.scale.setScalar(1.3),e.add(ne);let Me=(ot=(Xe=i.balloon)==null?void 0:Xe.roles.glow)==null?void 0:ot[0],pe=null;return Me&&(pe=new dt(Me.geometry,new xi({color:"#ffb347"})),ne.add(pe)),{g:ne,x:N,z:D,y:z,ph:ie*1.7,flame:pe}}),Fe=pm.map(N=>{let D=Aa(i,N.asset);return e.add(D),{...N,g:D}});function We(N,D){for(let z of me)z.g.position.y=z.y+Math.sin(D*.3+z.ph)*1.4,z.g.position.x=z.x+Math.sin(D*.04+z.ph)*6,z.g.rotation.y=D*.05+z.ph,z.flame&&(z.flame.visible=Math.sin(D*2.3+z.ph*3)>.4);for(let z of Fe){let ie=D*z.speed*.012+z.phase*Math.PI*2,ne=(Math.sin(ie)+1)/2,Me=Math.cos(ie)>0?1:-1;if(z.axis==="nile"){let pe=z.z0+(z.z1-z.z0)*ne,Xe=Bs(pe),ot=Bs(pe+.5);z.g.position.set(Xe,-.45-.12+Math.sin(D*1.4+z.phase*9)*.05,pe),z.g.rotation.y=Math.atan2(-.5*Me,(ot-Xe)*Me),z.g.rotation.z=Math.sin(D*1.1+z.phase*5)*.03}else{let pe=z.x0+(z.x1-z.x0)*ne;z.g.position.set(pe,-.45-.2+Math.sin(D*1.2)*.04,Nh(pe)),z.g.rotation.y=Me>0?0:Math.PI}}}let ge=[];for(let[N,D,z,ie,ne]of gm()){let Me=Aa(i,N);e.add(Me);let pe=n(D,z),Xe;N==="haybale"?Xe=t.dynamic({type:"roundcyl",hh:.49,r:.56,b:.06,rot:{x:Math.SQRT1_2,y:0,z:0,w:Math.SQRT1_2}},{x:D,y:pe+.64+ne*1.07,z,ry:ie,mass:1.2,friction:.8,restitution:.05,kind:"hay"}):N==="haybale_sq"?Xe=t.dynamic({type:"box",hx:.55,hy:.23,hz:.28},{x:D,y:pe+.25,z,ry:ie,mass:.8,friction:.8,kind:"hay"}):N==="cone"?(Xe=t.dynamic({type:"cone",hh:.37,r:.3},{x:D,y:pe+.39,z,ry:ie,mass:.15,restitution:.3,kind:"rubber"}),Me.children.forEach(ot=>{ot.position.y=-.37})):Xe=t.dynamic({type:"box",hx:.4,hy:.4,hz:.4},{x:D,y:pe+.41+ne*.81,z,ry:ie,mass:.5}),ge.push({g:Me,body:Xe})}let Ne=N=>{let D=N.body.translation(),z=N.body.rotation();N.g.position.set(D.x,D.y,D.z),N.g.quaternion.set(z.x,z.y,z.z,z.w)};return ge.forEach(Ne),{terrain:F,water:$,waterMat:K,grassU:tt.U,glow:h,trees:ae,htex:X,pressGrass(N,D,z){tt.press(N,D,z)},occlude(N,D,z){let ie=D.x-N.x,ne=D.y-N.y,Me=D.z-N.z,pe=ie*ie+ne*ne+Me*Me||1;for(let Xe in se){let ot=ae[Xe];if(!ot)continue;let Dt=!1,Nt=Xe==="plane"?2.6:Xe==="palm"?2.2:Xe==="poplar"?1.4:2,He=Xe==="poplar"?3.6:Xe==="palm"?3.4:2.8;for(let ii=0;ii<ot.length;ii++){let Jt=ot[ii],rt=Jt.x,ft=Jt.y+He*Jt.s,oi=Jt.z;if(Math.abs(rt-N.x)>40&&Math.abs(rt-D.x)>40){Jt.fade>0&&(Jt.fade=0,Dt=!0);continue}let ht=((rt-N.x)*ie+(ft-N.y)*ne+(oi-N.z)*Me)/pe;ht=Math.max(0,Math.min(1,ht));let Gt=N.x+ie*ht-rt,qr=N.y+ne*ht-ft,Ai=N.z+Me*ht-oi,Ji=Math.sqrt(Gt*Gt+qr*qr*.6+Ai*Ai),Ui=ht<.97&&Ji<Nt*Jt.s+.4?1:0,Ri=Jt.fade+(Ui-Jt.fade)*Math.min(1,z*(Ui?7:3));(Math.abs(Ri-Jt.fade)>.002||Ui===0&&Jt.fade>0&&Ri<.01)&&(Jt.fade=Ri<.01&&!Ui?0:Ri,Dt=!0)}if(Dt)for(let ii of Re[Xe]){let Jt=ii.geometry.attributes.aFade;for(let rt=0;rt<ot.length;rt++)Jt.array[rt]=ot[rt].fade;Jt.needsUpdate=!0}}},update(N,D,z){Ct.time.value=D,Ct.car.value.copy(z.carPos),tt.update(D,z.camPos||z.focus),K.uniforms.t.value=D,K.uniforms.car.value.copy(z.carPos),Ge(z.carPos,z.speed,z.onShake),Ve(N),Ee(z.carPos,z.vel,z.speed,N),it(N,D,z.focus),ue(N,D,z.carPos),We(N,D);for(let ie of ge)ie.body.isSleeping()||Ne(ie)}}}var Tb=(e,t,i)=>Math.min(i,Math.max(t,e));function ym(e,{coarse:t=!1,sample:i}={}){let r=new R(56,24,56),a=t?3500:8e3,n=new Float32Array(a*3),s=new Float32Array(a);for(let j=0;j<a;j++)n[j*3]=Math.random(),n[j*3+1]=Math.random(),n[j*3+2]=Math.random(),s[j]=Math.random();let o=new At;o.setAttribute("position",new Bt(n,3)),o.setAttribute("rnd",new Bt(s,1));let l={t:{value:0},center:{value:new R},box:{value:r},kind:{value:1},amount:{value:0},wind:{value:new de},scale:{value:400},tint:{value:new Te(1,1,1)}},c=new Bn(o,new Wt({uniforms:l,transparent:!0,depthWrite:!1,vertexShader:`
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
      }`}));c.frustumCulled=!1,c.renderOrder=6,e.add(c);let h=t?2200:5e3,d=new Float32Array(h*6),u=new Float32Array(h*2),p=new Float32Array(h*2);for(let j=0;j<h;j++){let U=Math.random(),I=Math.random(),k=Math.random(),F=Math.random();for(let ee=0;ee<2;ee++)d[j*6+ee*3]=U,d[j*6+ee*3+1]=I,d[j*6+ee*3+2]=k,u[j*2+ee]=ee,p[j*2+ee]=F}let g=new At;g.setAttribute("position",new Bt(d,3)),g.setAttribute("end",new Bt(u,1)),g.setAttribute("rnd",new Bt(p,1));let x={t:l.t,center:l.center,box:l.box,amount:{value:0},wind:l.wind,tint:{value:new Te(1,1,1)}},m=new Jo(g,new Wt({uniforms:x,transparent:!0,depthWrite:!1,vertexShader:`
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
      }`,fragmentShader:"uniform vec3 tint; varying float vA; varying float vE; void main(){ if (vA < 0.01) discard; gl_FragColor = vec4(vec3(0.78, 0.84, 0.95) * tint, vA * (0.12 + vE * 0.32)); }"}));m.frustumCulled=!1,m.renderOrder=6,e.add(m);let f=t?90:220,M=new Sh(.6,1,20).rotateX(-Math.PI/2),y=new Wt({uniforms:{t:l.t,amount:{value:0}},transparent:!0,depthWrite:!1,vertexShader:`uniform float t; attribute float phase; varying float vK;
      void main(){ float k = fract(t * 1.6 + phase); vK = k; vec3 p = position * (0.03 + k * 0.13);
        gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(p, 1.0); }`,fragmentShader:"uniform float amount; varying float vK; void main(){ gl_FragColor = vec4(0.85, 0.9, 1.0, (1.0 - vK) * (1.0 - vK) * 0.3 * amount); }"}),v=new ji(M,y,f),S=new Float32Array(f);for(let j=0;j<f;j++)S[j]=Math.random();v.geometry=M.clone(),v.geometry.setAttribute("phase",new tr(S,1)),v.frustumCulled=!1,v.instanceMatrix.setUsage(ha),v.renderOrder=3,e.add(v);let A=Array.from({length:f},()=>({x:0,z:0,ph:Math.random(),last:-1})),w=(()=>{let j=document.createElement("canvas");j.width=j.height=256;let U=j.getContext("2d");for(let k=0;k<26;k++){let F=60+Math.random()*136,ee=70+Math.random()*116,X=30+Math.random()*60,K=U.createRadialGradient(F,ee,0,F,ee,X);K.addColorStop(0,"rgba(255,255,255,.22)"),K.addColorStop(1,"rgba(255,255,255,0)"),U.fillStyle=K,U.fillRect(0,0,256,256)}return new Hr(j)})(),_=t?22:46,b={t:l.t,center:l.center,wind:l.wind,amount:{value:0},col:{value:new Te("#d6a86a")},map:{value:w}},L=new ji(new ui(1,1),new Wt({uniforms:b,transparent:!0,depthWrite:!1,vertexShader:`uniform float t; uniform vec3 center; uniform vec2 wind; attribute vec4 cl; varying vec2 vUv; varying float vA;
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
      void main(){ float a = texture2D(map, vUv).r * vA * amount; if (a < 0.003) discard; gl_FragColor = vec4(col, a); }`}),_),P=new Float32Array(_*4);for(let j=0;j<_*4;j++)P[j]=Math.random();L.geometry.setAttribute("cl",new tr(P,4)),L.frustumCulled=!1,L.renderOrder=7,e.add(L);let B=new et;return{resize(j,U){l.scale.value=j*U*.9},update(j,U,I,k,F,ee,X,K,$){l.t.value=U,l.center.value.copy(F),l.wind.value.copy(X);let xe=1-K*.55;if(l.kind.value=I==="sand"?2:1,l.amount.value=I==="snow"?k:I==="sand"?k*.8:0,l.tint.value.setScalar(xe),x.amount.value=I==="rain"?k:0,x.tint.value.setScalar(xe),y.uniforms.amount.value=I==="rain"?k:0,v.visible=I==="rain"&&k>.02,v.visible){for(let be=0;be<f;be++){let qe=A[be],De=(U*1.6+qe.ph)%1;if(De<qe.last||qe.last<0){let te=Math.random()*Math.PI*2,ae=1.5+Math.random()*13;qe.x=ee.x+Math.cos(te)*ae,qe.z=ee.z+Math.sin(te)*ae}qe.last=De,B.makeTranslation(qe.x,i(qe.x,qe.z)+.04,qe.z),v.setMatrixAt(be,B)}v.instanceMatrix.needsUpdate=!0}b.amount.value=I==="sand"?k:0,L.visible=b.amount.value>.01,b.col.value.copy($).lerp(new Te("#d9ab6c"),.4)}}}var Mm={uniforms:{tDiffuse:{value:null},tint:{value:new R(1,1,1)},sat:{value:1},contrast:{value:1},lift:{value:0},vig:{value:.25},grain:{value:.02},t:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};function bm(e,t,i){let r={clear:[1,1,1,1.06,1.04,0,.22],rain:[.9,.96,1.05,.72,.94,.004,.32],snow:[.98,1.02,1.08,.82,.9,.02,.2],sand:[1.1,.96,.78,.78,.86,.012,.34]},a=r.clear,n=r[e]||a,s=Tb(t,0,1),o=a.map((l,c)=>l+(n[c]-l)*s);return o[3]*=1-i*.18,o[6]+=i*.12,o}var Eb=e=>e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2,Sm=(e,t,i)=>Math.min(i,Math.max(t,e)),Za=5,yu=5.24,Mu=3.1,Ir=.18,Kn=-1.32,ks=1.32,$t=(e,t,i=0)=>new R(Math.sin(e)*t,i,-Math.cos(e)*t);function bu(e,t,i,r,a,n,s=64){let o=[],l=[],c=[],h=(g,x,m,f,M)=>{let y=o.length/3;[g,x,m,f].forEach((v,S)=>{o.push(v.x,v.y,v.z);let A=M[S];l.push(A.x,A.y,A.z)}),c.push(y,y+1,y+2,y,y+2,y+3)},d=new R(0,1,0);for(let g=0;g<s;g++){let x=i+(r-i)*g/s,m=i+(r-i)*(g+1)/s,f=$t(x,-1),M=$t(m,-1),y=$t(x,1),v=$t(m,1);h($t(x,e,a),$t(x,e,n),$t(m,e,n),$t(m,e,a),[f,f,M,M]),h($t(m,t,a),$t(m,t,n),$t(x,t,n),$t(x,t,a),[v,v,y,y]),h($t(x,e,n),$t(x,t,n),$t(m,t,n),$t(m,e,n),[d,d,d,d])}let u=(g,x)=>{let m=new R(Math.cos(g)*x,0,Math.sin(g)*x);return[m,m,m,m]};h($t(i,t,a),$t(i,t,n),$t(i,e,n),$t(i,e,a),u(i,-1)),h($t(r,e,a),$t(r,e,n),$t(r,t,n),$t(r,t,a),u(r,1));let p=new At;return p.setAttribute("position",new nt(o,3)),p.setAttribute("normal",new nt(l,3)),p.setIndex(c),p}function wb(e,t,i,r){let s=document.createElement("canvas");s.width=1100,s.height=1300;let o=s.getContext("2d"),l=ti[e.key];o.fillStyle="#16171c",o.textBaseline="top",o.font='500 40px "Geist Mono", monospace',o.fillText(`${String(t+1).padStart(2,"0")} \u2014 ${String(i).padStart(2,"0")}`,40,40),o.fillStyle=r.accent,o.fillRect(40,110,90,10),o.fillStyle="#16171c",o.font="600 172px Geist, sans-serif";let c=e.en.split(/\s+/),h=[],d="";for(let g of c){let x=d?`${d} ${g}`:g;o.measureText(x).width>1020&&d?(h.push(d),d=g):d=x}h.push(d);let u=170;for(let g of h.slice(0,2))o.fillText(g,34,u,1030),u+=170;o.font='500 110px "PingFang SC", "Noto Sans SC", "Microsoft YaHei", sans-serif',o.fillStyle="#2a2b31",o.fillText(e.zh,40,u+20),u+=190,o.font='500 38px "Geist Mono", monospace',o.fillStyle="#5b5c63",o.fillText(l.lat!=="\u2014"?`${l.lat}   ${l.lon}`:"ON THE ROAD",40,u),o.font="400 46px Geist, sans-serif",o.fillStyle="#2a2b31",o.fillText(r.line,40,u+70,1020),o.font='500 38px "Geist Mono", monospace',o.fillStyle="#5b5c63",o.fillText(`${e.photos.length} PHOTOGRAPHS \xB7 ENTER \u770B\u7167\u7247`,40,u+150,1020);let p=new Hr(s);return p.colorSpace=Yt,p.anisotropy=8,p}function Ab(e,t){let i=document.createElement("canvas");i.width=512,i.height=120;let r=i.getContext("2d");r.fillStyle="#f6f4ef",r.fillRect(0,0,512,120),r.fillStyle="#16171c",r.font='500 26px "Geist Mono", monospace',r.fillText(String(e+1).padStart(2,"0"),22,46),r.font="600 30px Geist, sans-serif",r.fillText(t.title||"",80,46,410),r.fillStyle="#5b5c63",r.font='400 26px "PingFang SC", "Noto Sans SC", sans-serif',r.fillText(t.zh||"",80,90,410);let a=new Hr(i);return a.colorSpace=Yt,a.anisotropy=4,a}var Rb=(()=>{let e=document.createElement("canvas");e.width=128,e.height=256;let t=e.getContext("2d"),i=t.createRadialGradient(64,40,4,64,110,130);return i.addColorStop(0,"rgba(255,236,200,1)"),i.addColorStop(.45,"rgba(255,225,180,.45)"),i.addColorStop(1,"rgba(255,220,170,0)"),t.fillStyle=i,t.fillRect(0,0,128,256),new Hr(e)})();function Cb(e){let i=document.createElement("canvas");i.width=i.height=1024;let r=i.getContext("2d");r.strokeStyle="rgba(0,0,0,.14)",r.lineWidth=3,r.beginPath(),r.arc(1024/2,1024/2,1024*.47,0,Math.PI*2),r.stroke();for(let n=0;n<96;n++){let s=n/96*Math.PI*2,o=1024*.47,l=1024*(n%8?.458:.44);r.beginPath(),r.moveTo(1024/2+Math.cos(s)*o,1024/2+Math.sin(s)*o),r.lineTo(1024/2+Math.cos(s)*l,1024/2+Math.sin(s)*l),r.stroke()}r.fillStyle="rgba(0,0,0,.07)",r.font="600 280px Geist, sans-serif",r.textAlign="center",r.textBaseline="middle",r.fillText(String(e+1).padStart(2,"0"),1024/2,1024*.64);let a=new Hr(i);return a.colorSpace=Yt,a.anisotropy=8,a}function Tm(e,t,i,r,a){let n=new Vn,s=[],o=a.filter(g=>ti[g.key]),l=Zn(new si({color:"#f1eee7",roughness:.92,name:"plaster"}),{kind:"plaster",bump:.25}),c=new si({color:"#1b1d24",roughness:.6}),h=new si({color:"#141519",roughness:.45}),d=new si({color:"#f7f5f0",roughness:.95}),u=new si({color:"#16171c",roughness:.4,metalness:.3});o.forEach((g,x)=>{let m=ti[g.key],f=_u[g.key]||_u.road,M=r.sample(m.x,m.z),y=new vi;y.position.set(m.x,M,m.z),e.add(y);let v=Aa(i,"platform");v.children.forEach(F=>{F.material=Zn(F.material.clone(),{kind:"terrazzo",name:"terrazzo"}),F.material.color.set(f.plat),F.castShadow=!1}),y.add(v),t.statics.cyl(m.x,M+.05,m.z,.12,6,"stone");let S=new dt(new _h(5.9,64),new si({map:Cb(x),transparent:!0,roughness:.6,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));S.rotation.x=-Math.PI/2,S.position.y=Ir+.004,S.receiveShadow=!0,y.add(S);let A=new si({color:f.accent,emissive:f.accent,emissiveIntensity:.25,roughness:.35,metalness:.3}),w=new dt(new Th(4.15,.05,6,140),A);w.rotation.x=-Math.PI/2,w.position.y=Ir+.01,y.add(w);let _=new dt(bu(Za,yu,Kn,ks,Ir,Ir+Mu),l);_.castShadow=!0,_.receiveShadow=!0,y.add(_),y.add(new dt(bu(Za-.012,yu+.012,Kn-.002,ks+.002,Ir,Ir+.16),c)),y.add(new dt(bu(Za-.01,Za-.002,Kn,ks,Ir+Mu-.09,Ir+Mu-.05),new si({color:f.accent,roughness:.5})));for(let F=0;F<10;F++){let ee=Kn+(ks-Kn)*(F+.5)/10,X=(Za+yu)/2,K=$t(ee,X);t.statics.box(m.x+K.x,M+Ir+1.4,m.z+K.z,X*(ks-Kn)/20+.05,1.4,.2,-ee,"stone")}let b=-1.02,L=2.3,P=2.72,B=wb(g,x,o.length,f),j=new si({map:B,transparent:!0,roughness:.9,emissive:"#ffffff",emissiveMap:B,emissiveIntensity:0,polygonOffset:!0,polygonOffsetFactor:-2}),U=new dt(new ui(L,P),j);U.position.copy($t(b,Za-.12,Ir+1.62)),U.rotation.y=-b,y.add(U);let I=Math.min(5,g.photos.length),k=[];for(let F=0;F<I;F++){let ee=g.photos[F],X=I===1?.15:-.42+(1.12+.42)*F/(I-1),K=ee.ratio||1.5,$=K>=1?1.05:1.4,xe=$*K;xe>1.5&&(xe=1.5,$=xe/K);let be=new vi;be.position.copy($t(X,Za-.07,Ir+1.62)),be.rotation.y=-X,y.add(be);let qe=new vi;be.add(qe);let De=new dt(new kr(xe+.26,$+.26,.045),h);De.castShadow=!0,qe.add(De);let te=new dt(new ui(xe+.2,$+.2),d);te.position.z=.024,qe.add(te);let ae=new xi({color:"#333"});n.load(ee.s,Se=>{Se.colorSpace=Yt,Se.anisotropy=8,ae.map=Se,ae.color.set("#fff"),ae.needsUpdate=!0});let oe=new dt(new ui(xe,$),ae);oe.position.z=.026,qe.add(oe);let Be=new dt(new ui(.86,.2),new si({map:Ab(F,ee),roughness:.9}));Be.position.set(-(xe+.26)/2+.43,-($+.26)/2-.22,.012),be.add(Be);let Ye=($+.26)/2,ce=new dt(new kr(.03,.03,.34),u);ce.position.set(0,Ye+.3,.14),be.add(ce);let $e=new dt(new kr(Math.min(.9,xe*.55),.05,.07),u);$e.position.set(0,Ye+.3,.32),be.add($e);let he=new xi({color:"#fff1d8"}),se=new dt(new ui(Math.min(.86,xe*.53),.025),he);se.rotation.x=Math.PI/2,se.position.set(0,Ye+.274,.32),be.add(se);let fe=new xi({map:Rb,transparent:!0,opacity:0,blending:ba,depthWrite:!1,color:"#ffd9a6"}),Re=new dt(new ui(xe+1.1,$+1.5),fe);Re.position.set(0,.05,-.02),be.add(Re),k.push({inner:qe,poolMat:fe,bulbMat:he,delay:.12+F*.11,photoMat:ae})}s.push({...g,x:m.x,z:m.z,gy:M,root:y,ring:w,ringMat:A,frames:k,textMat:j,lift:0,style:f,focus:new R(m.x+.2,M+2.1,m.z-2.8)})});function p(g,x,m,f){let M=null;for(let y of s){let v=Math.hypot(m.x-y.x,m.z-y.z),S=v<4.9;if(S&&(M=y),y.lift=Sm(y.lift+(S?g*.7:-g*.9),0,1),!(v>40&&y.lift===0&&!y.dirty)){y.dirty=v<40,y.ringMat.emissiveIntensity=.2+y.lift*1.6+f*.6,y.textMat.emissiveIntensity=f*.5*(.4+y.lift*.6);for(let A of y.frames){let w=Eb(Sm((y.lift-A.delay)/.35,0,1)),_=Math.max(w,f*.45);A.inner.position.z=w*.05,A.poolMat.opacity=_*(.16+f*.55),A.bulbMat.color.setScalar(.45+_*.55),A.photoMat.map&&A.photoMat.color.setScalar(.8+.2*Math.max(_,1-f))}}}return M}return{stops:s,update:p}}var dl=(e,t=0,i=1)=>Math.min(i,Math.max(t,e)),$n=(e,t,i)=>{let r=dl((i-e)/(t-e));return r*r*(3-2*r)},Gs=[0,7,12,17,23];function Em(){let e,t,i,r=!1,a=null,n=!1,s={},o=900,l=1,c=0,h=0;function d(){let x=e.createBuffer(1,e.sampleRate*3,e.sampleRate),m=x.getChannelData(0),f=1234567,M=0;for(let y=0;y<m.length;y++){f=Math.imul(f,1664525)+1013904223>>>0;let v=f/2147483648-1;M=M*.92+v*.08,m[y]=v*.35+M*2.2}return x}function u(x,m,f=.7){let M=e.createBufferSource();M.buffer=i,M.loop=!0;let y=e.createBiquadFilter();y.type=x,y.frequency.value=m,y.Q.value=f;let v=e.createGain();return v.gain.value=0,M.connect(y).connect(v).connect(t),M.start(e.currentTime+Math.random()),{f:y,g:v}}let p=(x,m,f=.08)=>x.setTargetAtTime(m,e.currentTime,f);async function g(){e=new(window.AudioContext||window.webkitAudioContext);let x=e.createDynamicsCompressor();x.threshold.value=-14,x.ratio.value=4,t=e.createGain(),t.gain.value=0,t.connect(x).connect(e.destination),i=d();let m=e.createWaveShaper(),f=new Float32Array(1024);for(let P=0;P<1024;P++){let B=P/512-1;f[P]=Math.tanh(B*2.4)}m.curve=f;let M=e.createBiquadFilter();M.type="lowpass",M.Q.value=2.2;let y=e.createGain();y.gain.value=0;let v=e.createOscillator(),S=e.createOscillator(),A=e.createOscillator();v.type="sawtooth",S.type="sawtooth",A.type="square";let w=e.createGain(),_=e.createGain(),b=e.createGain();w.gain.value=.5,_.gain.value=.35,b.gain.value=.22,v.connect(w).connect(m),S.connect(_).connect(m),A.connect(b).connect(m),m.connect(M).connect(y).connect(t),[v,S,A].forEach(P=>P.start());let L=u("bandpass",900,1.2);s.engine={o1:v,o2:S,o3:A,ef:M,eg:y,rasp:L},s.gravel=u("lowpass",3200,.5),s.grass=u("bandpass",500,.8),s.water=u("bandpass",1300,.6),s.skid=u("bandpass",1100,3.5),s.wind=u("lowpass",520,.4),s.rain=u("highpass",2600,.5)}return{get on(){return r},async toggle(){return a||(a=g()),await a,r=!r,r&&await e.resume(),p(t.gain,r&&!n?.8:0,.05),r},pause(x){n=x,e&&p(t.gain,r&&!n?.8:0,.15)},drive({speed:x,throttle:m,boost:f,surface:M,wading:y,skid:v,grounded:S,wind:A,rain:w,dt:_}){if(!r||!e)return;c=Math.max(0,c-_);let b=m<0&&x<6;!b&&c===0&&(l<Gs.length-1&&x>Gs[l+1]*(f?1.15:1)&&m>0?(l++,c=.25):l>1&&x<Gs[l]-2&&(l--,c=.2)),(b||x<1)&&(l=1);let L=Gs[l-1]||0,P=Gs[l]||7,B=dl((x-L)/Math.max(4,P-L+4));h+=((Math.abs(m)>0?1:0)-h)*Math.min(1,_*(m?8:4));let j=850+B*3400+h*(S?250:1400)+(f&&m>0?500:0);o+=(j-o)*Math.min(1,_*(c>0?14:7)),c>.12&&(o-=900*_*8);let U=o/60*2,I=s.engine;p(I.o1.frequency,U*.5,.03),p(I.o2.frequency,U*.503,.03),p(I.o3.frequency,U*.25,.03),p(I.ef.frequency,380+o*.32+h*900,.06),p(I.eg.gain,.07+h*.08+$n(800,4500,o)*.05-(c>.12?.05:0),.05),p(I.rasp.f.frequency,400+o*.25,.08),p(I.rasp.g.gain,h*.05,.08);let k=S?$n(.6,16,x):0,F=dl(y*1.5);p(s.gravel.g.gain,k*(M==="gravel"||M==="sand"?.32:M==="snow"?.18:.05)*(1-F),.1),p(s.gravel.f.frequency,M==="sand"?1700:M==="snow"?2400:3600,.2),p(s.grass.g.gain,k*(M==="grass"?.26:.02)*(1-F),.1),p(s.water.g.gain,k*F*.55+F*.05,.1),p(s.skid.g.gain,S?$n(.2,.9,v)*$n(2,10,x)*(M==="gravel"?.18:.1):0,.05),p(s.wind.g.gain,.03+$n(3,22,x)*.16+A*.08,.2),p(s.wind.f.frequency,420+x*30,.2),p(s.rain.g.gain,w*.12,.3)},bump(x,m="stone",f=0){if(!r||!e)return;let M=e.currentTime,y=$n(1,16,x),v=e.createStereoPanner();v.pan.value=dl(f,-.8,.8),v.connect(t);let S=m==="wood"||m==="tree"||m==="crate",A=m==="hay"||m==="rubber",w=m==="metal",_=e.createOscillator(),b=e.createGain();_.type=w||S?"triangle":"sine",_.frequency.setValueAtTime(w?240:S?120:A?70:85,M),_.frequency.exponentialRampToValueAtTime(w?140:45,M+.18),b.gain.setValueAtTime(1e-4,M),b.gain.exponentialRampToValueAtTime((.12+y*.4)*(A?.5:1),M+.006),b.gain.exponentialRampToValueAtTime(1e-4,M+(w?.3:.2)),_.connect(b).connect(v),_.start(M),_.stop(M+.35);let L=e.createBufferSource();L.buffer=i;let P=e.createBiquadFilter();P.type="bandpass",P.frequency.value=w?2600:S?1200:A?380:650,P.Q.value=w?3:.8;let B=e.createGain();B.gain.setValueAtTime(1e-4,M),B.gain.exponentialRampToValueAtTime((.1+y*.35)*(A?.6:1),M+.004),B.gain.exponentialRampToValueAtTime(1e-4,M+(A?.3:.18)),L.connect(P).connect(B).connect(v),L.start(M,Math.random()*2,.4),setTimeout(()=>{v.disconnect()},800)}}}var nr=e=>String(e!=null?e:"").replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),ua=(e,t,i)=>Math.min(i,Math.max(t,e)),Ka=(e,t,i)=>{let r=ua((i-e)/(t-e),0,1);return r*r*(3-2*r)},gr=(e,t,i)=>e+(t-e)*i,Pr=(e,t,i,r)=>e+(t-e)*(1-Math.exp(-i*r)),Ib=(e,t,i,r)=>e+Math.atan2(Math.sin(t-e),Math.cos(t-e))*(1-Math.exp(-i*r)),Su=[{tod:.44,en:"Day",zh:"\u767D\u5929"},{tod:.705,en:"Golden hour",zh:"\u9EC4\u660F"},{tod:.93,en:"Night",zh:"\u591C"},{tod:.255,en:"Dawn",zh:"\u6E05\u6668"}],pl=["auto","clear","rain","snow","sand"],wm={clear:"\u6674 Clear",rain:"\u96E8 Rain",snow:"\u96EA Snow",sand:"\u6C99\u5C18\u66B4 Sandstorm"},Pb={giza:"sand",cairo:"clear",luxor:"clear",qinggan:"sand",yunnan:"snow",beijing:"clear",nanjing:"rain",shanghai:"rain",road:"clear"},Lb={uniforms:{tDiffuse:{value:null},power:{value:0},rect:{value:new Vt(.4,.4,.6,.6)},aspect:{value:1.6}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
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
    }`};async function Db(e,{stops:t=[],onClose:i}={}){var Bu;let r=matchMedia("(pointer: coarse)").matches,a=matchMedia("(prefers-reduced-motion: reduce)").matches,n=new URLSearchParams(location.search);e.innerHTML=`
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
    <div class="drive__load mono"><span>Building the island \xB7 \u6B63\u5728\u9020\u5C9B</span><i><b></b></i></div>`;let s=W=>e.querySelector(W),o=s(".drive__canvas"),l=s(".drive__card"),c=s(".drive__region"),h=s(".drive__viewer"),d=h.querySelector("figure img"),u=h.querySelector("figcaption"),p=s(".drive__flash"),g=s(".dv-place"),x=s(".dv-speed output"),m=s('[data-act="time"]'),f=s('[data-act="weather"]'),M=s('[data-act="sound"]'),y=s(".dv-mapdlg"),v=s(".dv-fullmap"),S=s(".dv-visited"),A=s(".drive__load b"),w=!0,_={rapier:0,assets:0,world:0},b=()=>{A.style.transform=`scaleX(${(_.rapier*.35+_.assets*.5+_.world*.15).toFixed(3)})`},L=()=>{w=!1,i==null||i()};e.addEventListener("click",W=>{W.target.closest('[data-act="close"]')&&L()});let P=new URL(".",document.baseURI).href,B=`${P}assets/vendor/rapier/rapier.mjs`,[j,U]=await Promise.all([import(B).then(async W=>{let Y=W.default||W;return await Y.init(),_.rapier=1,b(),Y}),sm(`${P}media/drive/`,W=>{_.assets=W,b()}),hm(`${P}media/drive/tex/`,{coarse:r})]);if(!w)return{close(){}};await new Promise(W=>setTimeout(W,30));let I=new jf({canvas:o,antialias:!0,stencil:!0,powerPreference:"high-performance"});I.setPixelRatio(Math.min(devicePixelRatio,r?1.25:1.7)),I.shadowMap.enabled=!0,I.shadowMap.type=yn,I.toneMapping=Fn;let k=new ph;k.fog=new Bp(12376554,.0085);let F=new Di(50,1,.12,900),ee=new Df(14478591,9073752,1.1),X=new Us(16777215,2.4);X.castShadow=!0,X.shadow.mapSize.set(r?1024:2048,r?1024:2048),Object.assign(X.shadow.camera,{left:-38,right:38,top:38,bottom:-38,near:1,far:180}),X.shadow.bias=-5e-4,X.shadow.normalBias=.05;let K=new Us(9085695,0);k.add(ee,X,X.target,K,K.target);let $={top:{value:new Te},horizon:{value:new Te},sunDir:{value:new R(0,1,0)},sunCol:{value:new Te},night:{value:0},haze:{value:0}},xe=new dt(new Qo(420,32,16),new Wt({uniforms:$,side:Ni,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); vec4 p = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * p; gl_Position.z = gl_Position.w; }",fragmentShader:`
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
      }`}));xe.renderOrder=-1,xe.frustumCulled=!1,k.add(xe);let be=new Ho(I),qe=new ph,De={value:new Te("#8a7458")};qe.add(new dt(new Qo(50,32,16),new Wt({uniforms:{...$,ground:De},side:Ni,depthWrite:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
      uniform vec3 top, horizon, sunDir, sunCol, ground; uniform float night, haze; varying vec3 vD;
      void main(){
        vec3 d = normalize(vD); float h = d.y;
        vec3 c = mix(horizon, top, smoothstep(-0.02, 0.45, h) * (1.0 - haze));
        float s = max(dot(d, normalize(sunDir)), 0.0);
        c += sunCol * (pow(s, 64.0) * 3.0 + pow(s, 6.0) * 0.3) * (1.0 - haze * 0.8) * step(0.0, h + 0.05);
        c = mix(c, ground, smoothstep(0.02, -0.12, h));
        gl_FragColor = vec4(c, 1.0);
      }`})));let te=null,ae="",oe=0,Be=()=>{let W=[$.horizon.value.getHexString(),$.top.value.getHexString(),$.sunDir.value.toArray().map(ve=>ve.toFixed(2)).join(),$.haze.value.toFixed(2)].join("|");if(W===ae)return;ae=W;let Y=be.fromScene(qe,0,.1,100,{size:128});te==null||te.dispose(),te=Y,k.environment=te.texture};k.environmentIntensity=.55;let Ye=new Ti(2,2,{type:_i,stencilBuffer:!0,samples:r?0:4}),ce=new nl(I,Ye);ce.addPass(new sl(k,F));let $e=new qn(new de(256,256),.3,.55,.85);r||ce.addPass($e);let he=new Xa(Lb);a||ce.addPass(he);let se=new Xa(Mm);ce.addPass(se),ce.addPass(new ol);let fe=Yf(),Re=Kf(j,fe),Se=xm(k,Re,U,fe,{coarse:r}),Ge=Tm(k,Re,U,fe,t),Ve=Ge.stops,{sample:tt}=fe;{let W=new j.Ball(.45),Y={x:0,y:0,z:0,w:1},ve=new R,Pe=new R,Je=[];for(let lt in Se.trees)for(let jt of Se.trees[lt])["shrub","tuft","reeds","bush"].includes(lt)||Je.push([jt.x,jt.y+2.8*jt.s,jt.z,2.4*jt.s]);let _t=(lt,jt)=>{ve.subVectors(jt,lt);let Ot=ve.length();if(ve.divideScalar(Ot),Re.world.castShape(lt,Y,ve,W,0,Ot,!1,j.QueryFilterFlags.EXCLUDE_DYNAMIC))return!1;for(let Ht=1;Ht<=12;Ht++)if(Pe.copy(lt).addScaledVector(ve,Ot*Ht/12),tt(Pe.x,Pe.z)>Pe.y-.8)return!1;for(let[Ht,yt,bi,Si]of Je){let Ci=Math.max(0,Math.min(1,((Ht-lt.x)*ve.x+(yt-lt.y)*ve.y+(bi-lt.z)*ve.z)/Ot));if(Math.hypot(lt.x+ve.x*Ot*Ci-Ht,lt.y+ve.y*Ot*Ci-yt,lt.z+ve.z*Ot*Ci-bi)<Si)return!1}return!0};for(let lt of Ge.stops){let jt=null;e:for(let Ot of[10.5,9,12,7.5])for(let ri of[0,-.3,.3,-.55,.55,-.8,.8])for(let Ht of[4.6,3.4]){let yt=new R(lt.x+Math.sin(ri)*Ot,lt.gy+Ht,lt.z+Math.cos(ri)*Ot);if(_t(lt.focus,yt)){jt=yt;break e}}lt.cam=jt||new R(lt.x,lt.gy+9,lt.z+6)}}_.world=1,b();let st=Em(),O=Re.car,bt=new vi,mt=new vi;bt.add(mt),k.add(bt);let vt=W=>Object.assign(W,{stencilWrite:!0,stencilRef:1,stencilFunc:lh,stencilZPass:Ip});for(let W of U.car_body.parts){let Y=new dt(W.geometry,vt(W.material.clone()));Y.castShadow=!0,Y.receiveShadow=!0,mt.add(Y)}let C={};for(let W of["head","tail","reverse","indL","indR"])for(let Y of((Bu=U.car)==null?void 0:Bu.roles[W])||[]){let ve=C[W]||(C[W]=vt(Y.material.clone()));ve.emissive&&(ve.emissiveIntensity=0),mt.add(new dt(Y.geometry,ve))}let T=(W,Y)=>{C[W]&&(C[W].emissiveIntensity=Y)},G=O.WHEELS.map(([W,Y,ve],Pe)=>{var lt;let Je=new vi,_t=new vi;Je.position.set(W,Y,ve),Je.add(_t),bt.add(Je);for(let jt of((lt=U.car)==null?void 0:lt.roles.wheel)||[]){let Ot=new dt(jt.geometry,vt(jt.material.clone()));Ot.castShadow=!0,_t.add(Ot)}return ve<0&&(_t.scale.z=-1),{pivot:Je,spin:_t,y:Y}}),re=[-.48,.48].map(W=>{let Y=new tl(16773328,0,46,.5,.6,1);return Y.position.set(1.2,.1,W),Y.target.position.set(9,-1.4,W*2.2),mt.add(Y,Y.target),Y}),le=new dt(new kr(2.4,1.3,1.4),new xi({color:5926143,transparent:!0,opacity:.35,depthFunc:Ms,depthWrite:!1,stencilWrite:!0,stencilRef:1,stencilFunc:Pp,stencilFail:Ua,stencilZFail:Ua,stencilZPass:Ua}));le.position.y=.3,le.renderOrder=10,mt.add(le);let ye=[];for(let W of[-1.25,1.25])for(let Y of[-.8,1.25])for(let ve of[-.8,.8])ye.push(new R(W,Y,ve));let Ie=(W,Y,ve)=>{let Pe=new ji(new ui(.34,.3).rotateX(-Math.PI/2),new xi({color:Y,transparent:!0,opacity:ve,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),W);Pe.frustumCulled=!1,Pe.instanceMatrix.setUsage(ha);for(let Je=0;Je<W;Je++)Pe.setMatrixAt(Je,new et().makeScale(0,0,0));return Pe.renderOrder=1,k.add(Pe),{m:Pe,i:0,n:W}},q=Ie(1e3,3812386,.22),Ee=Ie(500,1446415,.42),Ce=[new R(1e9,0,0),new R(1e9,0,0),new R(1e9,0,0),new R(1e9,0,0)],Oe=new et,_e=new R,Ke=new R(0,1,0),it=new R,ut=(W,Y,ve)=>{_e.set(ve[0],0,ve[2]).normalize(),it.crossVectors(_e,Ke),Oe.makeBasis(_e,Ke,it).setPosition(Y.x,Y.y+.03,Y.z),W.m.setMatrixAt(W.i=(W.i+1)%W.n,Oe),W.m.instanceMatrix.needsUpdate=!0},St=200,V=new ji(new Mh(.16,0),new si({color:16777215,roughness:1}),St);V.instanceMatrix.setUsage(ha),V.frustumCulled=!1,k.add(V);for(let W=0;W<St;W++)V.setColorAt(W,new Te(15326404));let ue=Array.from({length:St},()=>({life:0,p:new R,v:new R,s:1,g:1.5,debris:!1})),me=0,Fe=new et,We=new hi,ge=new R,Ne=new Te,N=new zr,D=(W,Y,ve,Pe,Je=1.5,_t=!1)=>{let lt=ue[me=(me+1)%St];Object.assign(lt,{life:1,s:ve,g:Je,debris:_t}),lt.p.copy(W),lt.v.copy(Y),V.setColorAt(me,Pe),V.instanceColor.needsUpdate=!0},z=ym(k,{coarse:r,sample:tt}),ie=260,ne=new Float32Array(ie*3),Me=[];for(let W=0;W<ie;W++){let Y,ve,Pe=0;do Y=(Math.random()-.5)*240*.8,ve=(Math.random()-.5)*160*.8,Pe++;while(((fr(Y,ve).meadow||0)<.5||tt(Y,ve)<.1)&&Pe<40);Me.push([Y,tt(Y,ve)+.6+Math.random()*1.4,ve,Math.random()*6])}let pe=new At;pe.setAttribute("position",new Bt(ne,3));let Xe=new Ds({color:14221178,size:.32,transparent:!0,opacity:0,depthWrite:!1,blending:ba}),ot=new Bn(pe,Xe);ot.frustumCulled=!1,k.add(ot);let Dt=document.createElement("canvas");Dt.width=480,Dt.height=320;{let W=Dt.getContext("2d"),Y=W.createImageData(240,160),ve=Se.terrain.geometry.attributes.color,Pe=Se.terrain.geometry.attributes.position;for(let _t=0;_t<Pe.count;_t++){let lt=Math.floor((Pe.getX(_t)+240/2)/240*239.99),Ot=(Math.floor((Pe.getZ(_t)+160/2)/160*159.99)*240+lt)*4,ri=Pe.getY(_t)<-.45;Y.data[Ot]=ri?88:Math.pow(Math.max(0,ve.getX(_t)),1/2.2)*255,Y.data[Ot+1]=ri?158:Math.pow(Math.max(0,ve.getY(_t)),1/2.2)*255,Y.data[Ot+2]=ri?190:Math.pow(Math.max(0,ve.getZ(_t)),1/2.2)*255,Y.data[Ot+3]=255}let Je=document.createElement("canvas");Je.width=240,Je.height=160,Je.getContext("2d").putImageData(Y,0,0),W.imageSmoothingEnabled=!0,W.drawImage(Je,0,0,480,320)}let Nt=s(".dv-radar"),He=Nt.getContext("2d"),ii=new Set;function Jt(W,Y){let ve=Nt.width,Pe=ve/2,Je=2.2;He.clearRect(0,0,ve,ve),He.save(),He.beginPath(),He.arc(Pe,Pe,Pe-2,0,Math.PI*2),He.clip(),He.fillStyle="#4a8ba3",He.fillRect(0,0,ve,ve),He.translate(Pe,Pe),He.rotate(Y),He.drawImage(Dt,(-240/2-W.x)*Je,(-160/2-W.z)*Je,240*Je,160*Je);for(let _t of Ve)He.fillStyle=ii.has(_t.key)?"#fff":"#2233ff",He.beginPath(),He.arc((_t.x-W.x)*Je,(_t.z-W.z)*Je,5,0,Math.PI*2),He.fill(),He.strokeStyle="#0b0c10",He.lineWidth=1.5,He.stroke();He.restore(),He.fillStyle="#0b0c10",He.strokeStyle="#fff",He.lineWidth=2,He.beginPath(),He.moveTo(Pe,Pe-9),He.lineTo(Pe+7,Pe+7),He.lineTo(Pe,Pe+3),He.lineTo(Pe-7,Pe+7),He.closePath(),He.fill(),He.stroke()}let rt=v.getContext("2d"),ft=v.width/240;function oi(W,Y){let ve=v.width,Pe=v.height;rt.clearRect(0,0,ve,Pe),rt.fillStyle="#4a8ba3",rt.fillRect(0,0,ve,Pe),rt.drawImage(Dt,0,0,ve,Pe),rt.font="600 15px Geist, sans-serif",rt.textBaseline="middle",Ve.forEach((lt,jt)=>{let Ot=(lt.x+240/2)*ft,ri=(lt.z+160/2)*ft,Ht=ii.has(lt.key);rt.fillStyle=Ht?"#fff":"#2233ff",rt.beginPath(),rt.arc(Ot,ri,9,0,Math.PI*2),rt.fill(),rt.strokeStyle="#0b0c10",rt.lineWidth=2,rt.stroke(),rt.fillStyle=Ht?"#0b0c10":"#fff",rt.textAlign="center",rt.font='600 11px "Geist Mono", monospace',rt.fillText(String(jt+1),Ot,ri+.5),rt.textAlign="left",rt.font="600 15px Geist, sans-serif",rt.fillStyle="#0b0c10",rt.fillText(`${lt.en} ${lt.zh}`,Ot+14,ri)});let Je=(W.x+240/2)*ft,_t=(W.z+160/2)*ft;rt.save(),rt.translate(Je,_t),rt.rotate(Math.atan2(Y[0],-Y[2])),rt.fillStyle="#ff5a2a",rt.strokeStyle="#fff",rt.lineWidth=2,rt.beginPath(),rt.moveTo(0,-12),rt.lineTo(9,9),rt.lineTo(0,4),rt.lineTo(-9,9),rt.closePath(),rt.fill(),rt.stroke(),rt.restore(),S.textContent=`\u5DF2\u5230\u8BBF ${ii.size} / ${Ve.length} \xB7 visited`}v.addEventListener("click",W=>{let Y=v.getBoundingClientRect(),ve=(W.clientX-Y.left)/Y.width*v.width,Pe=(W.clientY-Y.top)/Y.height*v.height,Je=-1,_t=40;Ve.forEach((lt,jt)=>{let Ot=Math.hypot((lt.x+240/2)*ft-ve,(lt.z+160/2)*ft-Pe);Ot<_t&&(_t=Ot,Je=jt)}),Je>=0&&(y.close(),Ft(Je))});let ht={gas:0,brake:0,left:0,right:0,hand:0,boost:0,jump:0},Gt=null,qr=0,Ai=null,Ji=0,Ui=n.has("tod")?parseFloat(n.get("tod")):.42,Ri=null,da=null,E=pl.includes(n.get("wx"))?n.get("wx"):"auto",H="clear",Q=0,Z=0,J=null,Ae=0,Ue=Su[0],ke=new de,ze=n.get("view")==="map"?"map":"chase",at=0,gt=0,Tt=.34,Ze=9.5,It=0,Pt=null,Ut=0,Lt=ze==="map"?1:0,Qt=new R,je=new R,Zt=new R,Oi=new R,Gi=Math.PI/2,Fi=(W,Y,ve=Gi)=>O.place(W,tt(W,Y)+1.3,Y,ve),sr=Ve.find(W=>W.key===n.get("at"));sr?Fi(sr.x,sr.z+9):Fi(Cr.x,Cr.z+2);let Yr=()=>{let W=O.body.translation();Fi(W.x,W.z,O.yaw())};function Ft(W){let Y=Ve[W];Y&&(p.classList.remove("is-on"),p.offsetWidth,p.classList.add("is-on"),setTimeout(()=>{Fi(Y.x,Y.z+10),Xt=!0},180))}let Xt=!0,vr=h.querySelector(".dv-vbg"),zt=h.querySelector(".dv-strip");function Zr(){let W=Ai.photos[Ji];d.classList.remove("is-in");let Y=new Image;Y.src=W.m,Y.decode().catch(()=>{}).then(()=>{Ai&&Ai.photos[Ji]===W&&(d.src=W.m,requestAnimationFrame(()=>d.classList.add("is-in")))}),vr.style.backgroundImage=`url("${W.s}")`,u.innerHTML=`<div class="dv-vplace"><span class="mono">${String(Ji+1).padStart(2,"0")} / ${String(Ai.photos.length).padStart(2,"0")}</span><strong>${nr(Ai.en)}</strong><span class="zh">${nr(Ai.zh)}</span></div>
      <div class="dv-vtitle"><strong>${nr(W.title)}</strong><span class="zh">${nr(W.zh)}</span></div>`,zt.querySelectorAll("button").forEach((ve,Pe)=>{ve.classList.toggle("is-on",Pe===Ji),Pe===Ji&&ve.scrollIntoView({block:"nearest",inline:"center",behavior:"smooth"})})}function _r(W){zt.innerHTML=W.photos.map((Y,ve)=>`<button type="button" data-i="${ve}" aria-label="${nr(Y.title)}"><img src="${nr(Y.s)}" alt="" loading="lazy"></button>`).join(""),Ai=W,Ji=0,h.hidden=!1,e.classList.add("is-viewing"),Object.keys(ht).forEach(Y=>{ht[Y]=0}),st.pause(!0),Zr()}function Jn(){Ai=null,h.hidden=!0,e.classList.remove("is-viewing"),st.pause(!1)}let Qn=W=>{Ji=(Ji+W+Ai.photos.length)%Ai.photos.length,Zr()};h.addEventListener("click",W=>{var Pe;let Y=(Pe=W.target.closest("[data-v]"))==null?void 0:Pe.dataset.v;Y==="prev"&&Qn(-1),Y==="next"&&Qn(1);let ve=W.target.closest("[data-i]");ve&&(Ji=+ve.dataset.i,Zr()),(Y==="close"||W.target===h||W.target===vr)&&Jn()});{let W=null;h.addEventListener("pointerdown",Y=>{Y.target.closest("button")||(W=Y.clientX)}),h.addEventListener("pointerup",Y=>{W!==null&&Math.abs(Y.clientX-W)>50&&Qn(Y.clientX<W?1:-1),W=null})}let Tu={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyB:"hand",ShiftLeft:"boost",ShiftRight:"boost"},Eu=()=>{if(y.open){y.close();return}Object.keys(ht).forEach(Y=>{ht[Y]=0});let W=O.body.translation();oi(W,O.forward()),y.showModal(),st.pause(!0)};y.addEventListener("close",()=>st.pause(!1));let wu=()=>{ze=ze==="chase"?"map":"chase"},Au=()=>{E=pl[(pl.indexOf(E)+1)%pl.length]},Ru=W=>Y=>{if(!(Y.metaKey||Y.ctrlKey||Y.altKey)&&!y.open){if(Ai){if(!W)return;(Y.code==="ArrowRight"||Y.code==="KeyD")&&Qn(1),(Y.code==="ArrowLeft"||Y.code==="KeyA")&&Qn(-1),(Y.code==="Escape"||Y.code==="Enter"||Y.code==="Backspace")&&Jn(),Y.preventDefault();return}Tu[Y.code]&&(ht[Tu[Y.code]]=W?1:0,Y.preventDefault()),Y.code==="Space"&&(W&&!Y.repeat&&(ht.jump=1),Y.preventDefault()),!(!W||Y.repeat)&&(Y.code==="KeyR"&&Yr(),(Y.code==="Enter"||Y.code==="KeyE")&&Gt&&_r(Gt),Y.code==="Escape"&&L(),Y.code==="KeyN"&&fl(),Y.code==="KeyT"&&Au(),Y.code==="KeyM"&&Eu(),Y.code==="KeyV"&&wu(),Y.code==="KeyL"&&(da=da===null?!(Z>.45):da?!1:null),/^Digit[1-9]$/.test(Y.code)&&Ft(+Y.code.slice(5)-1))}},Cu=Ru(!0),Iu=Ru(!1),Pu=()=>Object.keys(ht).forEach(W=>{ht[W]=0});addEventListener("keydown",Cu),addEventListener("keyup",Iu),addEventListener("blur",Pu),e.querySelectorAll(".drive__pad [data-k]").forEach(W=>{let Y=W.dataset.k;if(Y==="enter"){W.addEventListener("click",()=>{Gt&&_r(Gt)});return}let ve=Je=>{var _t;Je.preventDefault(),(_t=W.setPointerCapture)==null||_t.call(W,Je.pointerId),ht[Y]=1},Pe=()=>{Y!=="jump"&&(ht[Y]=0)};W.addEventListener("pointerdown",ve),W.addEventListener("pointerup",Pe),W.addEventListener("pointercancel",Pe),W.addEventListener("lostpointercapture",Pe)}),e.addEventListener("click",async W=>{var ve;let Y=(ve=W.target.closest("[data-act]"))==null?void 0:ve.dataset.act;if(Y&&(Y==="map"&&Eu(),Y==="mapclose"&&y.close(),Y==="view"&&wu(),Y==="reset"&&Yr(),Y==="time"&&fl(),Y==="weather"&&Au(),Y==="sound")){M.disabled=!0;try{let Pe=await st.toggle();M.setAttribute("aria-pressed",String(Pe)),M.querySelector("span").textContent=Pe?"\u5F00":"\u5173"}finally{M.disabled=!1}}}),l.addEventListener("click",W=>{W.target.closest("[data-open]")&&(W.preventDefault(),Gt&&_r(Gt))}),o.addEventListener("pointerdown",W=>{W.button!==0||Pt||(o.setPointerCapture(W.pointerId),Pt={id:W.pointerId,x:W.clientX,y:W.clientY})}),o.addEventListener("pointermove",W=>{(Pt==null?void 0:Pt.id)===W.pointerId&&(gt-=.007*(W.clientX-Pt.x),Tt=ua(Tt+.004*(W.clientY-Pt.y),.12,1.1),Pt.x=W.clientX,Pt.y=W.clientY)});for(let W of["pointerup","pointercancel","lostpointercapture"])o.addEventListener(W,Y=>{(Pt==null?void 0:Pt.id)===Y.pointerId&&(Pt=null)});o.addEventListener("wheel",W=>{W.preventDefault(),Ze=ua(Ze+W.deltaY*.01,6,18)},{passive:!1});function fl(){let W=[...Su].sort((ve,Pe)=>ve.tod-Pe.tod),Y=W.find(ve=>ve.tod>Ui%1+.02)||W[0];Ri={from:Ui,to:Y.tod>Ui%1?Math.floor(Ui)+Y.tod:Math.floor(Ui)+1+Y.tod,t:0}}let Am=new Te("#0c1330"),Rm=new Te("#c4dfee"),Cm=new Te("#eaa27a"),Im=new Te("#e7b9c6"),Pm=new Te("#5f9fd6"),Lm=new Te("#050816"),Dm=new Te("#6b6fa8"),Nm=new Te("#d2a466"),Um=new Te("#dfe6ee"),Om=new Te("#7f8c9c"),pa=new Te,Kr=new Te;function Fm(W){let Y=(Ui%1+1)%1,ve=(Y-.25)*Math.PI*2,Pe=Math.sin(ve),Je=Ka(-.1,.22,Pe);Z=1-Je;let _t=Math.exp(-Math.pow(Pe/.2,2));pa.copy(Am).lerp(Rm,Je).lerp(Y<.5?Im:Cm,_t*.75);let lt=Q,jt=0;H==="sand"&&(pa.lerp(Kr.copy(Nm).multiplyScalar(gr(.35,1,Je)),lt*.85),jt=lt*.9),H==="snow"&&(pa.lerp(Kr.copy(Um).multiplyScalar(gr(.3,1,Je)),lt*.55),jt=lt*.6),H==="rain"&&(pa.lerp(Kr.copy(Om).multiplyScalar(gr(.3,1,Je)),lt*.6),jt=lt*.7),k.fog.color.copy(pa),k.fog.density=(ze==="map"?.005:.0105)+(H==="sand"?.042:H==="snow"?.016:H==="rain"?.011:0)*lt,$.horizon.value.copy(pa),$.top.value.copy(Lm).lerp(Pm,Je).lerp(Dm,_t*.5),$.night.value=Z,$.haze.value=jt;let Ot=new R(-Math.cos(ve),Math.sin(ve)*.9+.05,.45).normalize();$.sunDir.value.copy(Ot),$.sunCol.value.set("#ffd9a8").multiplyScalar(Je);let ri=1-(H==="clear"?0:lt*.35);return X.color.set("#ffb27a").lerp(Kr.set("#fff8ee"),Ka(.02,.45,Pe)),X.intensity=2.6*Je*ri,X.position.set(W.x+Ot.x*50,W.y+Math.max(12,Ot.y*60),W.z+Ot.z*50),X.target.position.copy(W),K.intensity=.9*Z,K.position.set(W.x+20,W.y+40,W.z-10),K.target.position.copy(W),ee.intensity=(.32+.4*Je)*ri,De.value.set("#7d6b55").lerp(Kr.set("#0d1020"),Z).multiplyScalar(.9),k.environmentIntensity=gr(.85,.35,Z)*ri,Ct.sun.value.copy(Ot),ee.color.copy(pa).lerp(Kr.set("#ffffff"),.35),ee.groundColor.set("#8a7458").lerp(Kr.set("#1a1f33"),Z),I.toneMappingExposure=gr(1.05,1.28,Z),$e.strength=.22+Z*.45,Se.glow.forEach(Ht=>{Ht.m.emissiveIntensity=gr(Ht.day,Ht.night,Ka(.25,.75,Z))}),Se.grassU.light.value.setRGB(gr(.13,1,Je)*ri,gr(.17,1,Je)*ri,gr(.3,1,Je)*ri),Se.waterMat.uniforms.night.value=Z,Se.waterMat.uniforms.sky.value.copy(pa),Ct.night.value=Z,Se.grassU.sunCol.value.copy(X.color).multiplyScalar(X.intensity/2.6),Xe.opacity=Ka(.5,.9,Z)*(H==="clear"?1:1-lt),Ue=[...Su].sort((Ht,yt)=>Math.abs((Y-Ht.tod+1.5)%1-.5)-Math.abs((Y-yt.tod+1.5)%1-.5))[0],Y}let Lu={tree:"#6f9a3c",hay:"#d9b45c",wood:"#c89a62",stone:"#cdbb9c",metal:"#c9ccd4"};function Bm(W,Y,ve){It=Math.max(It,Math.min(.5,Y*(W==="hay"?.012:W==="tree"?.03:.045)));let Pe=O.body.translation(),Je=O.forward(),_t=ua(((ve.x-Pe.x)*-Je[2]+(ve.z-Pe.z)*Je[0])*.3,-1,1);st.bump(Y,W,_t);let lt=Math.min(10,Math.ceil(Y*.7));for(let jt=0;jt<lt;jt++)D(new R(gr(Pe.x,ve.x,.6),Pe.y+.4,gr(Pe.z,ve.z,.6)),new R((Math.random()-.5)*6,2+Math.random()*3,(Math.random()-.5)*6),.35+Math.random()*.3,Kr.set(Lu[W]||Lu.stone),10,!0)}let Mi=new R,Du=new R,Nu=new hi,Uu=new hi,ml=()=>{let W=e.clientWidth,Y=e.clientHeight;I.setSize(W,Y,!1),ce.setSize(W,Y),F.aspect=W/Y,F.updateProjectionMatrix(),z==null||z.resize(Y,I.getPixelRatio()),he.uniforms.aspect.value=W/Y};ml(),addEventListener("resize",ml);let Ou=performance.now(),gl=0,vl=0,_l=0,xl=0,Vs=0,yl=0,Ml=new R,zm=performance.now();s(".drive__load").classList.add("is-done"),setTimeout(()=>{var W;return(W=s(".drive__load"))==null?void 0:W.remove()},700),e.classList.add("is-intro"),requestAnimationFrame(()=>requestAnimationFrame(()=>e.classList.add("is-in")));let Hm=new j.Ball(.35),km={x:0,y:0,z:0,w:1},Gm=W=>Re.kinds.get(W.handle)!=="tree";function Fu(W){if(!w)return;qr=requestAnimationFrame(Fu);let Y=Math.min(.08,(W-Ou)/1e3);Ou=W;let ve=(W-zm)/1e3;if(y.open)return;if(Ri){Ri.t=Math.min(1,Ri.t+Y/2.4);let we=Ri.t*Ri.t*(3-2*Ri.t);Ui=gr(Ri.from,Ri.to,we),Ri.t>=1&&(Ri=null)}else n.has("tod")||(Ui+=Y/420);let Pe=O.body.translation(),Je=fr(Pe.x,Pe.z),_t={wet:H==="rain"?Q:0,snow:(H==="snow"?Q*.6:0)+(tt(Pe.x,Pe.z)>5.5?.5:0)},lt=Ai?{gas:0,brake:0,left:0,right:0,hand:1,boost:0,jump:0}:ht,jt=zs(Pe.x,Pe.z);if(jt>.95){let we=(jt-.95)*60*Y,ct=Math.hypot(Pe.x,Pe.z)||1;O.body.applyImpulse({x:-Pe.x/ct*we,y:0,z:-Pe.z/ct*we},!0)}let Ot=Re.step(Y,lt,_t,Bm);ht.jump=0;let ri=O.body.translation();if(ri.y<-.45-4||Math.abs(ri.x)>240/2+4||Math.abs(ri.z)>160/2+4){let we=ja(ri.x,ri.z);Fi(ti[we.key].x,ti[we.key].z+10),Xt=!0}O.rescued&&(O.rescued=!1,Xt=!0);let Ht=O.pose(Ot),yt=Ht.p;bt.position.set(yt.x,yt.y,yt.z),Nu.set(Ht.q0.x,Ht.q0.y,Ht.q0.z,Ht.q0.w),Uu.set(Ht.q1.x,Ht.q1.y,Ht.q1.z,Ht.q1.w),bt.quaternion.copy(Nu).slerp(Uu,Ht.a);let bi=O.body.linvel(),Si=Math.hypot(bi.x,bi.z),Ci=O.forward(),Ws=O.speed();Mi.set(bi.x-Ml.x,0,bi.z-Ml.z).divideScalar(Math.max(Y,.001)),Ml.set(bi.x,bi.y,bi.z);let Vm=Mi.x*Ci[0]+Mi.z*Ci[2],Wm=Mi.x*Ci[2]-Mi.z*Ci[0];_l=Pr(_l,ua(-Vm*.006,-.06,.06),6,Y),xl=Pr(xl,ua(Wm*.008,-.07,.07),6,Y),mt.rotation.set(xl,0,_l),G.forEach((we,ct)=>{we.pivot.position.y=we.y-Ht.travel[ct],we.pivot.rotation.y=Ht.steer[ct],we.spin.rotation.z=-Ht.spin[ct]});let zu=ht.brake&&Ws>.6||ht.gas&&Ws<-.6||ht.hand,bl=da!==null?da:Z>.45||H!=="clear"&&Q>.5;T("head",bl?2.2:.3),re.forEach(we=>{we.intensity=bl?12:0}),T("tail",zu?5:bl?1.4:.15),T("reverse",ht.brake&&Ws<-.3?3.5:0);let Hu=Math.sin(ve*Math.PI*3.2)>0?4:0;T("indL",ht.left&&!ht.right?Hu:0),T("indR",ht.right&&!ht.left?Hu:0),gl+=Y;let Sl=O.wheels(),Tl=tt(yt.x,yt.z)>5.5,es=O.waterDepth,El=Math.abs(bi.x*Ci[2]-bi.z*Ci[0]),ts=O.contacts>0&&Si>3&&(ht.hand||El>3.5||zu&&Si>6);if(Sl.forEach((we,ct)=>{!we.contact||!we.point||we.point.y<-.45+.05||(Mi.set(we.point.x,we.point.y,we.point.z),Mi.distanceTo(Ce[ct])>.3&&(Ce[ct].copy(Mi),ct>=2&&Si>.5&&ut(q,we.point,Ci),ts&&(ct>=2||El>5)&&ut(Ee,we.point,Ci)))}),gl>.08&&(gl=0,Si>.8))for(let we of Sl)we.contact&&we.point&&Se.pressGrass(we.point.x,we.point.z,ve);let Xs=fr(yt.x,yt.z);if(Si>3&&O.contacts>0||es>.05&&Si>1.2||ts){Ne.set(es>.05?"#f4fbff":Tl?"#ffffff":(Xs.meadow||0)+(Xs.autumn||0)+(Xs.plane||0)>.5?"#8a7a5a":(Xs.danxia||0)>.4?"#c88b66":"#e9dcc4");for(let we of[2,3]){let ct=Sl[we].point;!ct||Math.random()>Math.min(.9,Si/16+(ts?.4:0))||D(Mi.set(ct.x,Math.max(ct.y,-.45)+.1,ct.z),Du.set(-bi.x*.1+(Math.random()-.5),(es>.05?2.6:.6)+Math.random()*.9,-bi.z*.1+(Math.random()-.5)),(es>.05?1.1:ts?1:.6)+Math.random()*.9,Ne)}}for(let we=0;we<St;we++){let ct=ue[we];if(ct.life>0&&(ct.life-=Y*(ct.debris?1.6:1.1),ct.p.addScaledVector(ct.v,Y),ct.debris||ct.v.multiplyScalar(.95),ct.v.y-=Y*ct.g,ct.debris)){let Dr=tt(ct.p.x,ct.p.z);ct.p.y<Dr&&(ct.p.y=Dr,ct.v.multiplyScalar(.3))}let Li=Math.max(0,ct.life);ge.setScalar(Li>0?ct.debris?ct.s*Math.min(1,Li*2):ct.s*(1.6-Li)*Math.min(1,Li*3):1e-4),Fe.compose(ct.p,ct.debris?We.setFromEuler(N.set(ve*6+we,we,ve*4)):We.identity(),ge),V.setMatrixAt(we,Fe)}V.instanceMatrix.needsUpdate=!0;let Xm=Gt;if(Ai||(Gt=Ge.update(Y,ve,yt,Z)),Gt!==Xm)if(Gt){let we=Gt;l.innerHTML=`<p class="mono">${nr(we.region||"")}${we.region?" \xB7 ":""}${we.photos.length} frames</p><h3>${nr(we.en)}<span class="zh">${nr(we.zh)}</span></h3>
          <div class="drive__btns"><a class="pill pill--light" href="#" data-open><span class="dot"></span>View photos \xB7 Enter</a>${we.href?`<a class="pill pill--ghost" href="${nr(we.href)}"><span class="dot"></span>${nr(we.hrefLabel||"Chapter")} \u2192</a>`:""}</div>`,l.classList.add("is-on")}else l.classList.remove("is-on");for(let we of Ve)Math.hypot(yt.x-we.x,yt.z-we.z)<14&&ii.add(we.key);Lt=Pr(Lt,ze==="map"?1:0,3,Y),Ut=Pr(Ut,Gt&&Si<3.5?1:0,1.6,Y);let ku=Math.atan2(Ci[0],Ci[2]);Ci[0]*Ci[0]+Ci[2]*Ci[2]>.2&&(at=Xt?ku:Ib(at,ku,Ws<-1?1.2:4.6,Y)),!Pt&&(ht.gas||ht.brake)&&Math.abs(gt)>.001&&(gt=Pr(gt,0,1.1,Y));let Gu=at+gt,wl=Ze+(F.aspect<1?2:0),Vu=Math.cos(Tt),jm=Math.sin(Tt),Wu=Ka(2,11,Si)*2.2;if(Oi.set(yt.x+Math.sin(at)*Wu,yt.y+.85,yt.z+Math.cos(at)*Wu),Zt.set(yt.x-Math.sin(Gu)*wl*Vu,yt.y+.9+wl*jm,yt.z-Math.cos(Gu)*wl*Vu),Lt>.001){let we=1+Math.min(.35,Si*.016);Mi.set(yt.x+9*we,yt.y+14*we,yt.z+15*we),Zt.lerp(Mi,Lt),Oi.lerp(Du.set(yt.x+bi.x*.35,yt.y*.5,yt.z+bi.z*.35),Lt)}Gt&&Ut>.001&&(Zt.lerp(Gt.cam,Ut),Oi.lerp(Gt.focus,Ut));let Xu=tt(Zt.x,Zt.z);Zt.y<Xu+1.3&&(Zt.y=Xu+1.3),Mi.subVectors(Zt,Oi);let Al=Mi.length();if(Al>.5&&Lt<.5){Mi.divideScalar(Al);let we=Re.world.castShape(Oi,km,Mi,Hm,0,Al,!1,j.QueryFilterFlags.EXCLUDE_DYNAMIC|j.QueryFilterFlags.EXCLUDE_SENSORS,void 0,void 0,O.body,Gm);we&&Zt.copy(Oi).addScaledVector(Mi,Math.max(1.2,we.time_of_impact-.15))}Xt&&(Qt.copy(Zt),je.copy(Oi),Xt=!1),Qt.lerp(Zt,1-Math.exp(-(Pt?14:7)*Y)),je.lerp(Oi,1-Math.exp(-9*Y)),It=Pr(It,0,7,Y),F.position.copy(Qt),!a&&It>.002&&(F.position.x+=Math.sin(ve*63)*It*.5,F.position.y+=Math.cos(ve*82)*It*.35),F.lookAt(je),yl=Pr(yl,ht.boost&&ht.gas&&Si>8?7:0,3,Y);let ju=(F.aspect<1?62:50)*(1-Lt)+(F.aspect<1?50:36)*Lt+yl*(1-Lt);Math.abs(F.fov-ju)>.01&&(F.fov=ju,F.updateProjectionMatrix()),F.updateMatrixWorld(),xe.position.copy(F.position),$r&&(F.position.set($r[0],$r[1],$r[2]),F.lookAt($r[3],$r[4],$r[5])),Se.occlude(F.position,je,Y);{let we=1,ct=1,Li=0,Dr=0;for(let Zm of ye){Mi.copy(Zm).applyMatrix4(bt.matrixWorld).project(F);let Yu=Mi.x*.5+.5,Zu=Mi.y*.5+.5;we=Math.min(we,Yu),ct=Math.min(ct,Zu),Li=Math.max(Li,Yu),Dr=Math.max(Dr,Zu)}he.uniforms.rect.value.set(we-.02,ct-.02,Li+.02,Dr+.02);let $a=(Ka(9,17,Si)*.25+Ka(11,22,Si)*(ht.boost?.8:.5))*(1-Lt)*(1-Ut)*(Pt?0:1)*(1-ua(It*2,0,.8));Vs=Pr(Vs,$a,$a>Vs?5:10,Y),he.uniforms.power.value=Vs}let Lr=ja(yt.x,yt.z);if(Lr.d<24&&Lr.key!==J){J=Lr.key,Ae=ve;let we=Ve.find(Li=>Li.key===Lr.key),ct=ti[Lr.key];we&&(c.innerHTML=`<span class="mono">${ct.lat!=="\u2014"?`${ct.lat} \xB7 ${ct.lon}`:"On the road"}</span><strong>${nr(we.en)}</strong><span class="zh">${nr(we.zh)}</span>`,c.classList.add("is-on"))}Lr.d>34&&(J=null),c.classList.contains("is-on")&&ve-Ae>3.4&&c.classList.remove("is-on");let qu=E==="auto"?Tl?"snow":Lr.d<26&&Pb[Lr.key]||"clear":E;qu===H?Q=Math.min(1,Q+Y*.5):(Q=Math.max(0,Q-Y*.7),Q===0&&(H=qu));let qm=.5+.5*Math.sin(ve*.7)*Math.sin(ve*.31),Rl=H==="sand"?4+qm*6:H==="rain"?2:H==="snow"?1.2:.6;ke.set(Rl*1.4*Q+.3,Rl*.5*Q),Ct.windS.value=.6+(H==="clear"?0:Q*Rl*.3),Ct.snow.value=Pr(Ct.snow.value,H==="snow"?Q*.85:0,H==="snow"?.18:.08,Y),Ct.wet.value=Pr(Ct.wet.value,H==="rain"?Q:0,H==="rain"?.35:.06,Y),Ct.sand.value=Pr(Ct.sand.value,H==="sand"?Q:0,.6,Y);let Ym=Fm(yt);oe-=Y,oe<=0&&(oe=.5,Be()),z.update(Y,ve,H,Q,F.position,yt,ke,Z,k.fog.color);{let we=bm(H,Q,Z);se.uniforms.tint.value.set(we[0],we[1],we[2]),se.uniforms.sat.value=we[3],se.uniforms.contrast.value=we[4],se.uniforms.lift.value=we[5],se.uniforms.vig.value=we[6],se.uniforms.t.value=ve%10}if(Se.update(Y,ve,{carPos:new R(yt.x,yt.y-.5,yt.z),vel:new R(bi.x,bi.y,bi.z),speed:Si,focus:yt,camPos:F.position,onShake:we=>{let ct=Kr.set(we.type==="ginkgo"?"#efbd2c":we.type==="blossom"?"#f2b6c6":we.type==="palm"?"#6f9a3c":we.type.startsWith("fir")?"#3b6b47":"#86a24a");for(let Li=0;Li<7;Li++)D(new R(we.x+(Math.random()-.5)*2,we.y+2.2+Math.random()*2*we.s,we.z+(Math.random()-.5)*2),new R((Math.random()-.5)*1.5,.3,(Math.random()-.5)*1.5),.45,ct,2.5);st.bump(Math.max(2,Si*.6),"tree",0)}}),Xe.opacity>.01&&(Me.forEach(([we,ct,Li,Dr],$a)=>{ne[$a*3]=we+Math.sin(ve*.6+Dr)*1.2,ne[$a*3+1]=ct+Math.sin(ve*1.1+Dr*2)*.4,ne[$a*3+2]=Li+Math.cos(ve*.5+Dr)*1.2}),pe.attributes.position.needsUpdate=!0),st.drive({speed:Si,throttle:ht.gas-ht.brake,boost:ht.boost,dt:Y,grounded:O.contacts>0,wading:ua(es,0,1),surface:Tl?"snow":(Je.desert||0)+(Je.danxia||0)>.5?"sand":Se.grassU&&(Je.meadow||0)+(Je.autumn||0)+(Je.plane||0)+(Je.field||0)>.55&&fe.road(yt.x,yt.z)>2.4?"grass":"gravel",skid:ts?ua(El/7+(ht.hand?.5:0),0,1):0,wind:H==="sand"?Q:Q*.3,rain:H==="rain"?Q:0}),vl-=Y,vl<=0){vl=.08,x.value=String(Math.round(Si*3.6)).padStart(2,"0");let we=Ve.find(Li=>Li.key===Lr.key);g.textContent=we?Lr.d<26?`${we.zh} \xB7 ${we.en}`:`\u53BB\u5F80 ${we.zh} \xB7 toward ${we.en}`:"\u2014";let ct=Math.floor(Ym*24*60);m.textContent=`${Ue.zh} ${String(Math.floor(ct/60)).padStart(2,"0")}:${String(ct%60).padStart(2,"0")}`,f.textContent=`${H==="clear"||Q<.2?wm.clear:wm[H]}${E==="auto"?"":" \xB7T"}`,e.querySelector('[data-act="view"]').firstChild.textContent=ze==="chase"?"\u4FEF\u89C6 ":"\u8DDF\u8F66 "}Jt(yt,at+Math.PI),ce.render()}qr=requestAnimationFrame(Fu),L=()=>{var W;w&&(w=!1,cancelAnimationFrame(qr),removeEventListener("keydown",Cu),removeEventListener("keyup",Iu),removeEventListener("resize",ml),removeEventListener("blur",Pu),st.pause(!0),(W=ce.dispose)==null||W.call(ce),I.dispose(),e.innerHTML="",i==null||i())};let $r=null;return window.__drive={look:W=>{$r=W},trees:Se.trees,lookAt:(W,Y,ve=6,Pe=2.5,Je=.8)=>{let _t=Se.trees[W][Y];$r=[_t.x+Math.cos(Je)*ve,_t.y+Pe,_t.z+Math.sin(Je)*ve,_t.x,_t.y+Pe*.8,_t.z]},park:W=>{let Y=Ve[W];O.place(Y.x,Y.gy+1.2,Y.z+1.5,Gi),Xt=!0},stops:Ve,get car(){return O.body.translation()},carApi:O,jumpTo:Ft,nextPhase:fl,open:W=>_r(Ve[W]),keys:ht,setTod:W=>{Ui=W},setWx:W=>{E=W,H=W==="auto"?H:W,Q=1,Ct.snow.value=W==="snow"?.85:0,Ct.wet.value=W==="rain"?1:0,Ct.sand.value=W==="sand"?1:0},setView:W=>{ze=W},setOrbit:(W,Y,ve)=>{gt=W,Y!=null&&(Tt=Y),ve!=null&&(Ze=ve)}},{close:()=>L()}}window.X1NG_DRIVE={mount(e,t){let i=Db(e,t);return i.catch(r=>{console.error(r),e.innerHTML='<p class="drive__load mono">Drive mode could not load \xB7 \u52A0\u8F7D\u5931\u8D25</p>',setTimeout(()=>{var a;return(a=t==null?void 0:t.onClose)==null?void 0:a.call(t)},2e3)}),i}};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
