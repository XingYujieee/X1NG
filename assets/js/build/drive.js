(()=>{var Ap=0,mc=1,Cp=2;var za=1,mh=2,Ts=3,cn=0,xi=1,Ui=2,ji=0,Rs=1,un=2,gc=3,vc=4,Rp=5;var Hn=100,Ip=101,Pp=102,Lp=103,Np=104,Dp=200,Bp=201,Up=202,Fp=203,Cu=204,Ru=205,Op=206,zp=207,Vp=208,Hp=209,Gp=210,kp=211,Wp=212,qp=213,Xp=214,El=0,Tl=1,Al=2,Ls=3,Cl=4,Rl=5,Ns=6,Il=7,Iu=0,jp=1,Yp=2,rr=0,io=1,ro=2,no=3,ns=4,so=5,ao=6,oo=7;var Pu=300,dn=301,Qn=302,Vo=303,Ho=304,lo=306,Ds=1e3,_r=1001,Pl=1002,ti=1003,Zp=1004;var ha=1005;var Xt=1006,Go=1007;var an=1008;var Ri=1009,Lu=1010,Nu=1011,Bs=1012,gh=1013,nr=1014,Wi=1015,hi=1016,vh=1017,_h=1018,Us=1020,Du=35902,Bu=35899,Uu=1021,Fu=1022,qi=1023,xr=1026,on=1027,yh=1028,xh=1029,pn=1030,Mh=1031;var bh=1033,Va=33776,Ha=33777,Ga=33778,ka=33779,Ll=35840,Nl=35841,Dl=35842,Bl=35843,Ul=36196,Fl=37492,Ol=37496,zl=37488,Vl=37489,Ya=37490,Hl=37491,Gl=37808,kl=37809,Wl=37810,ql=37811,Xl=37812,jl=37813,Yl=37814,Zl=37815,Kl=37816,$l=37817,Jl=37818,Ql=37819,eh=37820,th=37821,ih=36492,rh=36494,nh=36495,sh=36283,ah=36284,Za=36285,oh=36286;var Ka=2300,lh=2301,ko=2302,_c=2303,yc=2400,xc=2401,Mc=2402;var Kp=3200;var hh=0,$p=1,Gr="",li="srgb",$a="srgb-linear",Ja="linear",St="srgb";var Wo=7680;var Jp=519,Qp=512,ef=513,tf=514,Sh=515,rf=516,nf=517,wh=518,sf=519,af=35044,Eh=35048;var bc="300 es",Xi=2e3,Fs=2001;function of(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function lf(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Os(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hf(){let t=Os("canvas");return t.style.display="block",t}var Sc={},es=null;function wc(...t){let e="THREE."+t.shift();es?es("log",e,...t):console.log(e,...t)}function Ou(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let i=t[1];i&&i.isStackTrace?t[0]+=" "+i.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function et(...t){t=Ou(t);let e="THREE."+t.shift();if(es)es("warn",e,...t);else{let i=t[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...t)}}function tt(...t){t=Ou(t);let e="THREE."+t.shift();if(es)es("error",e,...t);else{let i=t[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...t)}}function Xn(...t){let e=t.join(" ");e in Sc||(Sc[e]=!0,et(...t))}function cf(t,e,i){return new Promise(function(r,n){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}var uf={[El]:Tl,[Al]:Ns,[Cl]:Il,[Ls]:Rl,[Tl]:El,[Ns]:Al,[Il]:Cl,[Rl]:Ls},mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let n=r.indexOf(e);n!==-1&&r.splice(n,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let n=0,s=r.length;n<s;n++)r[n].call(this,t);t.target=null}}},ai=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Wa=Math.PI/180,Qa=180/Math.PI;function ss(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ai[t&255]+ai[t>>8&255]+ai[t>>16&255]+ai[t>>24&255]+"-"+ai[e&255]+ai[e>>8&255]+"-"+ai[e>>16&15|64]+ai[e>>24&255]+"-"+ai[i&63|128]+ai[i>>8&255]+"-"+ai[i>>16&255]+ai[i>>24&255]+ai[r&255]+ai[r>>8&255]+ai[r>>16&255]+ai[r>>24&255]).toLowerCase()}function gt(t,e,i){return Math.max(e,Math.min(i,t))}function df(t,e){return(t%e+e)%e}function qo(t,e,i){return(1-i)*t+i*e}function vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _i(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Yn,ue=(Yn=class{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let i=this.x,r=this.y,n=e.elements;return this.x=n[0]*i+n[3]*r+n[6],this.y=n[1]*i+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(e)/i;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){let r=Math.cos(i),n=Math.sin(i),s=this.x-e.x,a=this.y-e.y;return this.x=s*r-a*n+e.x,this.y=s*n+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yn.prototype.isVector2=!0,Yn),Ii=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,n,s,a){let o=i[r+0],l=i[r+1],h=i[r+2],c=i[r+3],d=n[s+0],u=n[s+1],p=n[s+2],g=n[s+3];if(c!==g||o!==d||l!==u||h!==p){let v=o*d+l*u+h*p+c*g;v<0&&(d=-d,u=-u,p=-p,g=-g,v=-v);let m=1-a;if(v<.9995){let f=Math.acos(v),_=Math.sin(f);m=Math.sin(m*f)/_,a=Math.sin(a*f)/_,o=o*m+d*a,l=l*m+u*a,h=h*m+p*a,c=c*m+g*a}else{o=o*m+d*a,l=l*m+u*a,h=h*m+p*a,c=c*m+g*a;let f=1/Math.sqrt(o*o+l*l+h*h+c*c);o*=f,l*=f,h*=f,c*=f}}t[e]=o,t[e+1]=l,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,r,n,s){let a=i[r],o=i[r+1],l=i[r+2],h=i[r+3],c=n[s],d=n[s+1],u=n[s+2],p=n[s+3];return t[e]=a*p+h*c+o*u-l*d,t[e+1]=o*p+h*d+l*c-a*u,t[e+2]=l*p+h*u+a*d-o*c,t[e+3]=h*p-a*c-o*d-l*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,n=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(i/2),h=a(r/2),c=a(n/2),d=o(i/2),u=o(r/2),p=o(n/2);switch(s){case"XYZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"YXZ":this._x=d*h*c+l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"ZXY":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c-d*u*p;break;case"ZYX":this._x=d*h*c-l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c+d*u*p;break;case"YZX":this._x=d*h*c+l*u*p,this._y=l*u*c+d*h*p,this._z=l*h*p-d*u*c,this._w=l*h*c-d*u*p;break;case"XZY":this._x=d*h*c-l*u*p,this._y=l*u*c-d*h*p,this._z=l*h*p+d*u*c,this._w=l*h*c+d*u*p;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],n=e[8],s=e[1],a=e[5],o=e[9],l=e[2],h=e[6],c=e[10],d=i+a+c;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-o)*u,this._y=(n-l)*u,this._z=(s-r)*u}else if(i>a&&i>c){let u=2*Math.sqrt(1+i-a-c);this._w=(h-o)/u,this._x=.25*u,this._y=(r+s)/u,this._z=(n+l)/u}else if(a>c){let u=2*Math.sqrt(1+a-i-c);this._w=(n-l)/u,this._x=(r+s)/u,this._y=.25*u,this._z=(o+h)/u}else{let u=2*Math.sqrt(1+c-i-a);this._w=(s-r)/u,this._x=(n+l)/u,this._y=(o+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(gt(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,n=t._z,s=t._w,a=e._x,o=e._y,l=e._z,h=e._w;return this._x=i*h+s*a+r*l-n*o,this._y=r*h+s*o+n*a-i*l,this._z=n*h+s*l+i*o-r*a,this._w=s*h-i*a-r*o-n*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,n=t._z,s=t._w,a=this.dot(t);a<0&&(i=-i,r=-r,n=-n,s=-s,a=-a);let o=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);o=Math.sin(o*l)/h,e=Math.sin(e*l)/h,this._x=this._x*o+i*e,this._y=this._y*o+r*e,this._z=this._z*o+n*e,this._w=this._w*o+s*e,this._onChangeCallback()}else this._x=this._x*o+i*e,this._y=this._y*o+r*e,this._z=this._z*o+n*e,this._w=this._w*o+s*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),n*Math.sin(e),n*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zn,P=(Zn=class{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ec.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ec.setFromAxisAngle(e,i))}applyMatrix3(e){let i=this.x,r=this.y,n=this.z,s=e.elements;return this.x=s[0]*i+s[3]*r+s[6]*n,this.y=s[1]*i+s[4]*r+s[7]*n,this.z=s[2]*i+s[5]*r+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let i=this.x,r=this.y,n=this.z,s=e.elements,a=1/(s[3]*i+s[7]*r+s[11]*n+s[15]);return this.x=(s[0]*i+s[4]*r+s[8]*n+s[12])*a,this.y=(s[1]*i+s[5]*r+s[9]*n+s[13])*a,this.z=(s[2]*i+s[6]*r+s[10]*n+s[14])*a,this}applyQuaternion(e){let i=this.x,r=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*n-o*r),c=2*(o*i-s*n),d=2*(s*r-a*i);return this.x=i+l*h+a*d-o*c,this.y=r+l*c+o*h-s*d,this.z=n+l*d+s*c-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let i=this.x,r=this.y,n=this.z,s=e.elements;return this.x=s[0]*i+s[4]*r+s[8]*n,this.y=s[1]*i+s[5]*r+s[9]*n,this.z=s[2]*i+s[6]*r+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this.z=gt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this.z=gt(this.z,e,i),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){let r=e.x,n=e.y,s=e.z,a=i.x,o=i.y,l=i.z;return this.x=n*l-s*o,this.y=s*a-r*l,this.z=r*o-n*a,this}projectOnVector(e){let i=e.lengthSq();if(i===0)return this.set(0,0,0);let r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Xo.copy(this).projectOnVector(e),this.sub(Xo)}reflect(e){return this.sub(Xo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(e)/i;return Math.acos(gt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return i*i+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){let n=Math.sin(i)*e;return this.x=n*Math.sin(r),this.y=Math.cos(i)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){let i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=n,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zn.prototype.isVector3=!0,Zn),Xo=new P,Ec=new Ii,Kn,ut=(Kn=class{constructor(e,i,r,n,s,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,n,s,a,o,l,h)}set(e,i,r,n,s,a,o,l,h){let c=this.elements;return c[0]=e,c[1]=n,c[2]=o,c[3]=i,c[4]=s,c[5]=l,c[6]=r,c[7]=a,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let r=e.elements,n=i.elements,s=this.elements,a=r[0],o=r[3],l=r[6],h=r[1],c=r[4],d=r[7],u=r[2],p=r[5],g=r[8],v=n[0],m=n[3],f=n[6],_=n[1],M=n[4],y=n[7],b=n[2],E=n[5],C=n[8];return s[0]=a*v+o*_+l*b,s[3]=a*m+o*M+l*E,s[6]=a*f+o*y+l*C,s[1]=h*v+c*_+d*b,s[4]=h*m+c*M+d*E,s[7]=h*f+c*y+d*C,s[2]=u*v+p*_+g*b,s[5]=u*m+p*M+g*E,s[8]=u*f+p*y+g*C,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){let e=this.elements,i=e[0],r=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8];return i*a*c-i*o*h-r*s*c+r*o*l+n*s*h-n*a*l}invert(){let e=this.elements,i=e[0],r=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=c*a-o*h,u=o*l-c*s,p=h*s-a*l,g=i*d+r*u+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(n*h-c*r)*v,e[2]=(o*r-n*a)*v,e[3]=u*v,e[4]=(c*i-n*l)*v,e[5]=(n*s-o*i)*v,e[6]=p*v,e[7]=(r*l-h*i)*v,e[8]=(a*i-r*s)*v,this}transpose(){let e,i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,n,s,a,o){let l=Math.cos(s),h=Math.sin(s);return this.set(r*l,r*h,-r*(l*a+h*o)+a+e,-n*h,n*l,-n*(-h*a+l*o)+o+i,0,0,1),this}scale(e,i){return Xn("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jo.makeScale(e,i)),this}rotate(e){return Xn("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jo.makeRotation(-e)),this}translate(e,i){return Xn("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jo.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){let i=this.elements,r=e.elements;for(let n=0;n<9;n++)if(i[n]!==r[n])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){let r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Kn.prototype.isMatrix3=!0,Kn),jo=new ut,Tc=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ac=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pf(){let t={enabled:!0,workingColorSpace:$a,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===St&&(n.r=yr(n.r),n.g=yr(n.g),n.b=yr(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===St&&(n.r=jn(n.r),n.g=jn(n.g),n.b=jn(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Gr?Ja:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Xn("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Xn("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[$a]:{primaries:e,whitePoint:r,transfer:Ja,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:St,toXYZ:Tc,fromXYZ:Ac,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),t}var _t=pf();function yr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jn(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var En,ff=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{En===void 0&&(En=Os("canvas")),En.width=t.width,En.height=t.height;let r=En.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=En}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Os("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),n=r.data;for(let s=0;s<n.length;s++)n[s]=yr(n[s]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(yr(e[i]/255)*255):e[i]=yr(e[i]);return{data:e,width:t.width,height:t.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},mf=0,Th=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=ss(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?n.push(Yo(r[s].image)):n.push(Yo(r[s]))}else n=Yo(r);i.url=n}return e||(t.images[this.uuid]=i),i}};function Yo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ff.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var gf=0,Zo=new P,Pi=class qa extends mn{constructor(e=qa.DEFAULT_IMAGE,i=qa.DEFAULT_MAPPING,r=_r,n=_r,s=Xt,a=an,o=qi,l=Ri,h=qa.DEFAULT_ANISOTROPY,c=Gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=ss(),this.name="",this.source=new Th(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zo).x}get height(){return this.source.getSize(Zo).y}get depth(){return this.source.getSize(Zo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let i in e){let r=e[i];if(r===void 0){et(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let n=this[i];if(n===void 0){et(`Texture.setValues(): property '${i}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[i]=r}}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ds:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Pl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ds:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Pl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pi.DEFAULT_IMAGE=null;Pi.DEFAULT_MAPPING=Pu;Pi.DEFAULT_ANISOTROPY=1;var $n,It=($n=class{constructor(e=0,i=0,r=0,n=1){this.x=e,this.y=i,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,n){return this.x=e,this.y=i,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let i=this.x,r=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*i+a[4]*r+a[8]*n+a[12]*s,this.y=a[1]*i+a[5]*r+a[9]*n+a[13]*s,this.z=a[2]*i+a[6]*r+a[10]*n+a[14]*s,this.w=a[3]*i+a[7]*r+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,n,s,a=e.elements,o=a[0],l=a[4],h=a[8],c=a[1],d=a[5],u=a[9],p=a[2],g=a[6],v=a[10];if(Math.abs(l-c)<.01&&Math.abs(h-p)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+c)<.1&&Math.abs(h+p)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,_=(d+1)/2,M=(v+1)/2,y=(l+c)/4,b=(h+p)/4,E=(u+g)/4;return f>_&&f>M?f<.01?(r=0,n=.707106781,s=.707106781):(r=Math.sqrt(f),n=y/r,s=b/r):_>M?_<.01?(r=.707106781,n=0,s=.707106781):(n=Math.sqrt(_),r=y/n,s=E/n):M<.01?(r=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),r=b/s,n=E/s),this.set(r,n,s,i),this}let m=Math.sqrt((g-u)*(g-u)+(h-p)*(h-p)+(c-l)*(c-l));return Math.abs(m)<.001&&(m=1),this.x=(g-u)/m,this.y=(h-p)/m,this.z=(c-l)/m,this.w=Math.acos((o+d+v-1)/2),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=gt(this.x,e.x,i.x),this.y=gt(this.y,e.y,i.y),this.z=gt(this.z,e.z,i.z),this.w=gt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=gt(this.x,e,i),this.y=gt(this.y,e,i),this.z=gt(this.z,e,i),this.w=gt(this.w,e,i),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(gt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},$n.prototype.isVector4=!0,$n),vf=class extends mn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new It(0,0,t,e),this.scissorTest=!1,this.viewport=new It(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},n=new Pi(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=n.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Th(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends vf{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},zu=class extends Pi{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var _f=class extends Pi{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ti,this.minFilter=ti,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var hn,lt=(hn=class{constructor(e,i,r,n,s,a,o,l,h,c,d,u,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,n,s,a,o,l,h,c,d,u,p,g,v,m)}set(e,i,r,n,s,a,o,l,h,c,d,u,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=i,f[8]=r,f[12]=n,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=h,f[6]=c,f[10]=d,f[14]=u,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new hn().fromArray(this.elements)}copy(e){let i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){let i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){let i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let i=this.elements,r=e.elements,n=1/Tn.setFromMatrixColumn(e,0).length(),s=1/Tn.setFromMatrixColumn(e,1).length(),a=1/Tn.setFromMatrixColumn(e,2).length();return i[0]=r[0]*n,i[1]=r[1]*n,i[2]=r[2]*n,i[3]=0,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[7]=0,i[8]=r[8]*a,i[9]=r[9]*a,i[10]=r[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){let i=this.elements,r=e.x,n=e.y,s=e.z,a=Math.cos(r),o=Math.sin(r),l=Math.cos(n),h=Math.sin(n),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*c,p=a*d,g=o*c,v=o*d;i[0]=l*c,i[4]=-l*d,i[8]=h,i[1]=p+g*h,i[5]=u-v*h,i[9]=-o*l,i[2]=v-u*h,i[6]=g+p*h,i[10]=a*l}else if(e.order==="YXZ"){let u=l*c,p=l*d,g=h*c,v=h*d;i[0]=u+v*o,i[4]=g*o-p,i[8]=a*h,i[1]=a*d,i[5]=a*c,i[9]=-o,i[2]=p*o-g,i[6]=v+u*o,i[10]=a*l}else if(e.order==="ZXY"){let u=l*c,p=l*d,g=h*c,v=h*d;i[0]=u-v*o,i[4]=-a*d,i[8]=g+p*o,i[1]=p+g*o,i[5]=a*c,i[9]=v-u*o,i[2]=-a*h,i[6]=o,i[10]=a*l}else if(e.order==="ZYX"){let u=a*c,p=a*d,g=o*c,v=o*d;i[0]=l*c,i[4]=g*h-p,i[8]=u*h+v,i[1]=l*d,i[5]=v*h+u,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=a*l}else if(e.order==="YZX"){let u=a*l,p=a*h,g=o*l,v=o*h;i[0]=l*c,i[4]=v-u*d,i[8]=g*d+p,i[1]=d,i[5]=a*c,i[9]=-o*c,i[2]=-h*c,i[6]=p*d+g,i[10]=u-v*d}else if(e.order==="XZY"){let u=a*l,p=a*h,g=o*l,v=o*h;i[0]=l*c,i[4]=-d,i[8]=h*c,i[1]=u*d+v,i[5]=a*c,i[9]=p*d-g,i[2]=g*d-p,i[6]=o*c,i[10]=v*d+u}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yf,e,xf)}lookAt(e,i,r){let n=this.elements;return Ai.subVectors(e,i),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),Ur.crossVectors(r,Ai),Ur.lengthSq()===0&&(Math.abs(r.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),Ur.crossVectors(r,Ai)),Ur.normalize(),ca.crossVectors(Ai,Ur),n[0]=Ur.x,n[4]=ca.x,n[8]=Ai.x,n[1]=Ur.y,n[5]=ca.y,n[9]=Ai.y,n[2]=Ur.z,n[6]=ca.z,n[10]=Ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let r=e.elements,n=i.elements,s=this.elements,a=r[0],o=r[4],l=r[8],h=r[12],c=r[1],d=r[5],u=r[9],p=r[13],g=r[2],v=r[6],m=r[10],f=r[14],_=r[3],M=r[7],y=r[11],b=r[15],E=n[0],C=n[4],x=n[8],S=n[12],N=n[1],L=n[5],B=n[9],U=n[13],R=n[2],D=n[6],F=n[10],W=n[14],te=n[3],q=n[7],K=n[11],re=n[15];return s[0]=a*E+o*N+l*R+h*te,s[4]=a*C+o*L+l*D+h*q,s[8]=a*x+o*B+l*F+h*K,s[12]=a*S+o*U+l*W+h*re,s[1]=c*E+d*N+u*R+p*te,s[5]=c*C+d*L+u*D+p*q,s[9]=c*x+d*B+u*F+p*K,s[13]=c*S+d*U+u*W+p*re,s[2]=g*E+v*N+m*R+f*te,s[6]=g*C+v*L+m*D+f*q,s[10]=g*x+v*B+m*F+f*K,s[14]=g*S+v*U+m*W+f*re,s[3]=_*E+M*N+y*R+b*te,s[7]=_*C+M*L+y*D+b*q,s[11]=_*x+M*B+y*F+b*K,s[15]=_*S+M*U+y*W+b*re,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){let e=this.elements,i=e[0],r=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],c=e[2],d=e[6],u=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15],_=l*p-h*u,M=o*p-h*d,y=o*u-l*d,b=a*p-h*c,E=a*u-l*c,C=a*d-o*c;return i*(v*_-m*M+f*y)-r*(g*_-m*b+f*E)+n*(g*M-v*b+f*C)-s*(g*y-v*E+m*C)}determinantAffine(){let e=this.elements,i=e[0],r=e[4],n=e[8],s=e[1],a=e[5],o=e[9],l=e[2],h=e[6],c=e[10];return i*(a*c-o*h)-r*(s*c-o*l)+n*(s*h-a*l)}transpose(){let e=this.elements,i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=i,n[14]=r),this}invert(){let e=this.elements,i=e[0],r=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],c=e[8],d=e[9],u=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],_=i*o-r*a,M=i*l-n*a,y=i*h-s*a,b=r*l-n*o,E=r*h-s*o,C=n*h-s*l,x=c*v-d*g,S=c*m-u*g,N=c*f-p*g,L=d*m-u*v,B=d*f-p*v,U=u*f-p*m,R=_*U-M*B+y*L+b*N-E*S+C*x;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/R;return e[0]=(o*U-l*B+h*L)*D,e[1]=(n*B-r*U-s*L)*D,e[2]=(v*C-m*E+f*b)*D,e[3]=(u*E-d*C-p*b)*D,e[4]=(l*N-a*U-h*S)*D,e[5]=(i*U-n*N+s*S)*D,e[6]=(m*y-g*C-f*M)*D,e[7]=(c*C-u*y+p*M)*D,e[8]=(a*B-o*N+h*x)*D,e[9]=(r*N-i*B-s*x)*D,e[10]=(g*E-v*y+f*_)*D,e[11]=(d*y-c*E-p*_)*D,e[12]=(o*S-a*L-l*x)*D,e[13]=(i*L-r*S+n*x)*D,e[14]=(v*M-g*b-m*_)*D,e[15]=(c*b-d*M+u*_)*D,this}scale(e){let i=this.elements,r=e.x,n=e.y,s=e.z;return i[0]*=r,i[4]*=n,i[8]*=s,i[1]*=r,i[5]*=n,i[9]*=s,i[2]*=r,i[6]*=n,i[10]*=s,i[3]*=r,i[7]*=n,i[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,n))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){let i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){let r=Math.cos(i),n=Math.sin(i),s=1-r,a=e.x,o=e.y,l=e.z,h=s*a,c=s*o;return this.set(h*a+r,h*o-n*l,h*l+n*o,0,h*o+n*l,c*o+r,c*l-n*a,0,h*l-n*o,c*l+n*a,s*l*l+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,n,s,a){return this.set(1,r,s,0,e,1,a,0,i,n,1,0,0,0,0,1),this}compose(e,i,r){let n=this.elements,s=i._x,a=i._y,o=i._z,l=i._w,h=s+s,c=a+a,d=o+o,u=s*h,p=s*c,g=s*d,v=a*c,m=a*d,f=o*d,_=l*h,M=l*c,y=l*d,b=r.x,E=r.y,C=r.z;return n[0]=(1-(v+f))*b,n[1]=(p+y)*b,n[2]=(g-M)*b,n[3]=0,n[4]=(p-y)*E,n[5]=(1-(u+f))*E,n[6]=(m+_)*E,n[7]=0,n[8]=(g+M)*C,n[9]=(m-_)*C,n[10]=(1-(u+v))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,i,r){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinantAffine();if(s===0)return r.set(1,1,1),i.identity(),this;let a=Tn.set(n[0],n[1],n[2]).length(),o=Tn.set(n[4],n[5],n[6]).length(),l=Tn.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Hi.copy(this);let h=1/a,c=1/o,d=1/l;return Hi.elements[0]*=h,Hi.elements[1]*=h,Hi.elements[2]*=h,Hi.elements[4]*=c,Hi.elements[5]*=c,Hi.elements[6]*=c,Hi.elements[8]*=d,Hi.elements[9]*=d,Hi.elements[10]*=d,i.setFromRotationMatrix(Hi),r.x=a,r.y=o,r.z=l,this}makePerspective(e,i,r,n,s,a,o=Xi,l=!1){let h=this.elements,c=2*s/(i-e),d=2*s/(r-n),u=(i+e)/(i-e),p=(r+n)/(r-n),g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===Xi)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Fs)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,n,s,a,o=Xi,l=!1){let h=this.elements,c=2/(i-e),d=2/(r-n),u=-(i+e)/(i-e),p=-(r+n)/(r-n),g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===Xi)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Fs)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let i=this.elements,r=e.elements;for(let n=0;n<16;n++)if(i[n]!==r[n])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){let r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}},hn.prototype.isMatrix4=!0,hn),Tn=new P,Hi=new lt,yf=new P(0,0,0),xf=new P(1,1,1),Ur=new P,ca=new P,Ai=new P,Cc=new lt,Rc=new Ii,kr=class Vu{constructor(e=0,i=0,r=0,n=Vu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,n=this._order){return this._x=e,this._y=i,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],h=n[5],c=n[9],d=n[2],u=n[6],p=n[10];switch(i){case"XYZ":this._y=Math.asin(gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(gt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Rc.setFromEuler(this),this.setFromQuaternion(Rc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};kr.DEFAULT_ORDER="XYZ";var Hu=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Mf=0,Ic=new P,An=new Ii,pr=new lt,ua=new P,_s=new P,bf=new P,Sf=new Ii,Pc=new P(1,0,0),Lc=new P(0,1,0),Nc=new P(0,0,1),Dc={type:"added"},wf={type:"removed"},Cn={type:"childadded",child:null},Ko={type:"childremoved",child:null},ci=class Xa extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Xa.DEFAULT_UP.clone();let e=new P,i=new kr,r=new Ii,n=new P(1,1,1);function s(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new lt},normalMatrix:{value:new ut}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=Xa.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Xa.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return An.setFromAxisAngle(e,i),this.quaternion.multiply(An),this}rotateOnWorldAxis(e,i){return An.setFromAxisAngle(e,i),this.quaternion.premultiply(An),this}rotateX(e){return this.rotateOnAxis(Pc,e)}rotateY(e){return this.rotateOnAxis(Lc,e)}rotateZ(e){return this.rotateOnAxis(Nc,e)}translateOnAxis(e,i){return Ic.copy(e).applyQuaternion(this.quaternion),this.position.add(Ic.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Pc,e)}translateY(e){return this.translateOnAxis(Lc,e)}translateZ(e){return this.translateOnAxis(Nc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pr.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?ua.copy(e):ua.set(e,i,r);let n=this.parent;this.updateWorldMatrix(!0,!1),_s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pr.lookAt(_s,ua,this.up):pr.lookAt(ua,_s,this.up),this.quaternion.setFromRotationMatrix(pr),n&&(pr.extractRotation(n.matrixWorld),An.setFromRotationMatrix(pr),this.quaternion.premultiply(An.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(tt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null):tt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(wf),Ko.child=e,this.dispatchEvent(Ko),Ko.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pr.multiply(e.parent.matrixWorld)),e.applyMatrix4(pr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),Cn.child=e,this.dispatchEvent(Cn),Cn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,n=this.children.length;r<n;r++){let s=this.children[r].getObjectByProperty(e,i);if(s!==void 0)return s}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,e,bf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_s,Sf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let i=e.x,r=e.y,n=e.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*r-s[8]*n,s[13]+=r-s[1]*i-s[5]*r-s[9]*n,s[14]+=n-s[2]*i-s[6]*r-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,r)}}toJSON(e){let i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(i){let o=a(e.geometries),l=a(e.materials),h=a(e.textures),c=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),c.length>0&&(r.images=c),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=n,r;function a(o){let l=[];for(let h in o){let c=o[h];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){let n=e.children[r];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};ci.DEFAULT_UP=new P(0,1,0);ci.DEFAULT_MATRIX_AUTO_UPDATE=!0;ci.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ir=class extends ci{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ef={type:"move"},$o=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ir,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ir,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ir,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,n=null,s=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(let g of t.hand.values()){let v=e.getJointPose(g,i),m=this._getHandJoint(l,g);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let h=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],d=h.position.distanceTo(c.position),u=.02,p=.005;l.inputState.pinching&&d>u+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=u-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(n=e.getPose(t.gripSpace,i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ef)))}return a!==null&&(a.visible=r!==null),o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new ir;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},da={h:0,s:0,l:0};function Jo(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}var Ae=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_t.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=_t.workingColorSpace){return this.r=t,this.g=e,this.b=i,_t.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=_t.workingColorSpace){if(t=df(t,1),e=gt(e,0,1),i=gt(i,0,1),e===0)this.r=this.g=this.b=i;else{let n=i<=.5?i*(1+e):i+e-i*e,s=2*i-n;this.r=Jo(s,n,t+1/3),this.g=Jo(s,n,t),this.b=Jo(s,n,t-1/3)}return _t.colorSpaceToWorking(this,r),this}setStyle(t,e=li){function i(n){n!==void 0&&parseFloat(n)<1&&et("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let n,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,e);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,e);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,e);break;default:et("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let n=r[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(n,16),e);et("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=li){let i=Gu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):et("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}copyLinearToSRGB(t){return this.r=jn(t.r),this.g=jn(t.g),this.b=jn(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return _t.workingToColorSpace(oi.copy(this),t),Math.round(gt(oi.r*255,0,255))*65536+Math.round(gt(oi.g*255,0,255))*256+Math.round(gt(oi.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=_t.workingColorSpace){_t.workingToColorSpace(oi.copy(this),e);let i=oi.r,r=oi.g,n=oi.b,s=Math.max(i,r,n),a=Math.min(i,r,n),o,l,h=(a+s)/2;if(a===s)o=0,l=0;else{let c=s-a;switch(l=h<=.5?c/(s+a):c/(2-s-a),s){case i:o=(r-n)/c+(r<n?6:0);break;case r:o=(n-i)/c+2;break;case n:o=(i-r)/c+4;break}o/=6}return t.h=o,t.s=l,t.l=h,t}getRGB(t,e=_t.workingColorSpace){return _t.workingToColorSpace(oi.copy(this),e),t.r=oi.r,t.g=oi.g,t.b=oi.b,t}getStyle(t=li){_t.workingToColorSpace(oi.copy(this),t);let e=oi.r,i=oi.g,r=oi.b;return t!==li?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Fr),this.setHSL(Fr.h+t,Fr.s+e,Fr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fr),t.getHSL(da);let i=qo(Fr.h,da.h,e),r=qo(Fr.s,da.s,e),n=qo(Fr.l,da.l,e);return this.setHSL(i,r,n),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,n=t.elements;return this.r=n[0]*e+n[3]*i+n[6]*r,this.g=n[1]*e+n[4]*i+n[7]*r,this.b=n[2]*e+n[5]*i+n[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},oi=new Ae;Ae.NAMES=Gu;var ku=class Wu{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Ae(e),this.near=i,this.far=r}clone(){return new Wu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qu=class extends ci{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kr,this.environmentIntensity=1,this.environmentRotation=new kr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Gi=new P,fr=new P,Qo=new P,mr=new P,Rn=new P,In=new P,Bc=new P,el=new P,tl=new P,il=new P,rl=new It,nl=new It,sl=new It,Gn=class kn{constructor(e=new P,i=new P,r=new P){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,n){n.subVectors(r,i),Gi.subVectors(e,i),n.cross(Gi);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,i,r,n,s){Gi.subVectors(n,i),fr.subVectors(r,i),Qo.subVectors(e,i);let a=Gi.dot(Gi),o=Gi.dot(fr),l=Gi.dot(Qo),h=fr.dot(fr),c=fr.dot(Qo),d=a*h-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,p=(h*l-o*c)*u,g=(a*c-o*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,i,r,n){return this.getBarycoord(e,i,r,n,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,i,r,n,s,a,o,l){return this.getBarycoord(e,i,r,n,mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mr.x),l.addScaledVector(a,mr.y),l.addScaledVector(o,mr.z),l)}static getInterpolatedAttribute(e,i,r,n,s,a){return rl.setScalar(0),nl.setScalar(0),sl.setScalar(0),rl.fromBufferAttribute(e,i),nl.fromBufferAttribute(e,r),sl.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(rl,s.x),a.addScaledVector(nl,s.y),a.addScaledVector(sl,s.z),a}static isFrontFacing(e,i,r,n){return Gi.subVectors(r,i),fr.subVectors(e,i),Gi.cross(fr).dot(n)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,n){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,i,r,n){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Gi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return kn.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,n,s){return kn.getInterpolation(e,this.a,this.b,this.c,i,r,n,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){let r=this.a,n=this.b,s=this.c,a,o;Rn.subVectors(n,r),In.subVectors(s,r),el.subVectors(e,r);let l=Rn.dot(el),h=In.dot(el);if(l<=0&&h<=0)return i.copy(r);tl.subVectors(e,n);let c=Rn.dot(tl),d=In.dot(tl);if(c>=0&&d<=c)return i.copy(n);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return a=l/(l-c),i.copy(r).addScaledVector(Rn,a);il.subVectors(e,s);let p=Rn.dot(il),g=In.dot(il);if(g>=0&&p<=g)return i.copy(s);let v=p*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(In,o);let m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return Bc.subVectors(s,n),o=(d-c)/(d-c+(p-g)),i.copy(n).addScaledVector(Bc,o);let f=1/(m+v+u);return a=v*f,o=u*f,i.copy(r).addScaledVector(Rn,a).addScaledVector(In,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mr=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ki.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ki.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=ki.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let n=i.getAttribute("position");if(e===!0&&n!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=n.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,ki):ki.fromBufferAttribute(n,s),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pa.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pa.copy(i.boundingBox)),pa.applyMatrix4(t.matrixWorld),this.union(pa)}let r=t.children;for(let n=0,s=r.length;n<s;n++)this.expandByObject(r[n],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ys),fa.subVectors(this.max,ys),Pn.subVectors(t.a,ys),Ln.subVectors(t.b,ys),Nn.subVectors(t.c,ys),Or.subVectors(Ln,Pn),zr.subVectors(Nn,Ln),en.subVectors(Pn,Nn);let e=[0,-Or.z,Or.y,0,-zr.z,zr.y,0,-en.z,en.y,Or.z,0,-Or.x,zr.z,0,-zr.x,en.z,0,-en.x,-Or.y,Or.x,0,-zr.y,zr.x,0,-en.y,en.x,0];return!al(e,Pn,Ln,Nn,fa)||(e=[1,0,0,0,1,0,0,0,1],!al(e,Pn,Ln,Nn,fa))?!1:(ma.crossVectors(Or,zr),e=[ma.x,ma.y,ma.z],al(e,Pn,Ln,Nn,fa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},gr=[new P,new P,new P,new P,new P,new P,new P,new P],ki=new P,pa=new Mr,Pn=new P,Ln=new P,Nn=new P,Or=new P,zr=new P,en=new P,ys=new P,fa=new P,ma=new P,tn=new P;function al(t,e,i,r,n){for(let s=0,a=t.length-3;s<=a;s+=3){tn.fromArray(t,s);let o=n.x*Math.abs(tn.x)+n.y*Math.abs(tn.y)+n.z*Math.abs(tn.z),l=e.dot(tn),h=i.dot(tn),c=r.dot(tn);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>o)return!1}return!0}var db=Tf();function Tf(){let t=new ArrayBuffer(4),e=new Float32Array(t),i=new Uint32Array(t),r=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,n[l]=24,n[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,n[l]=-h-1,n[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,n[l]=13,n[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,n[l]=24,n[l|256]=24):(r[l]=31744,r[l|256]=64512,n[l]=13,n[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,c=0;for(;(h&8388608)===0;)h<<=1,c-=8388608;h&=-8388609,c+=947912704,s[l]=h|c}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:i,baseTable:r,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var Wt=new P,ga=new ue,Af=0,fi=class extends mn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Af++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=af,this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ga.fromBufferAttribute(this,e),ga.applyMatrix3(t),this.setXY(e,ga.x,ga.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Wt.fromBufferAttribute(this,e),Wt.applyMatrix3(t),this.setXYZ(e,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Wt.fromBufferAttribute(this,e),Wt.applyMatrix4(t),this.setXYZ(e,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Wt.fromBufferAttribute(this,e),Wt.applyNormalMatrix(t),this.setXYZ(e,Wt.x,Wt.y,Wt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Wt.fromBufferAttribute(this,e),Wt.transformDirection(t),this.setXYZ(e,Wt.x,Wt.y,Wt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=_i(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=_i(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=_i(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=_i(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=_i(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=_i(e,this.array),i=_i(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=_i(e,this.array),i=_i(i,this.array),r=_i(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,n){return t*=this.itemSize,this.normalized&&(e=_i(e,this.array),i=_i(i,this.array),r=_i(r,this.array),n=_i(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=n,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Xu=class extends fi{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ju=class extends fi{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Qe=class extends fi{constructor(t,e,i){super(new Float32Array(t),e,i)}},Cf=new Mr,xs=new P,ol=new P,br=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Cf.setFromPoints(t).getCenter(i);let r=0;for(let n=0,s=t.length;n<s;n++)r=Math.max(r,i.distanceToSquared(t[n]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xs.subVectors(t,this.center);let e=xs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(xs,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xs.copy(t.center).add(ol)),this.expandByPoint(xs.copy(t.center).sub(ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Rf=0,Bi=new lt,ll=new ci,Dn=new P,Ci=new Mr,Ms=new Mr,$t=new P,Ct=class Yu extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?ju:Xu)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let s=new ut().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,i,r){return Bi.makeTranslation(e,i,r),this.applyMatrix4(Bi),this}scale(e,i,r){return Bi.makeScale(e,i,r),this.applyMatrix4(Bi),this}lookAt(e){return ll.lookAt(e),ll.updateMatrix(),this.applyMatrix4(ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dn).negate(),this.translate(Dn.x,Dn.y,Dn.z),this}setFromPoints(e){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];r.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Qe(r,3))}else{let r=Math.min(e.length,i.count);for(let n=0;n<r;n++){let s=e[n];i.setXYZ(n,s.x,s.y,s.z||0)}e.length>i.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mr);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,n=i.length;r<n;r++){let s=i[r];Ci.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&tt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new br);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){tt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let r=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),i)for(let s=0,a=i.length;s<a;s++){let o=i[s];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Ci.min,Ms.min),Ci.expandByPoint($t),$t.addVectors(Ci.max,Ms.max),Ci.expandByPoint($t)):(Ci.expandByPoint(Ms.min),Ci.expandByPoint(Ms.max))}Ci.getCenter(r);let n=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),n=Math.max(n,r.distanceToSquared($t));if(i)for(let s=0,a=i.length;s<a;s++){let o=i[s],l=this.morphTargetsRelative;for(let h=0,c=o.count;h<c;h++)$t.fromBufferAttribute(o,h),l&&(Dn.fromBufferAttribute(e,h),$t.add(Dn)),n=Math.max(n,r.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&tt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){tt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,n=i.normal,s=i.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==r.count)&&(a=new fi(new Float32Array(4*r.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<r.count;x++)o[x]=new P,l[x]=new P;let h=new P,c=new P,d=new P,u=new ue,p=new ue,g=new ue,v=new P,m=new P;function f(x,S,N){h.fromBufferAttribute(r,x),c.fromBufferAttribute(r,S),d.fromBufferAttribute(r,N),u.fromBufferAttribute(s,x),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,N),c.sub(h),d.sub(h),p.sub(u),g.sub(u);let L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(L),o[x].add(v),o[S].add(v),o[N].add(v),l[x].add(m),l[S].add(m),l[N].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let x=0,S=_.length;x<S;++x){let N=_[x],L=N.start,B=N.count;for(let U=L,R=L+B;U<R;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let M=new P,y=new P,b=new P,E=new P;function C(x){b.fromBufferAttribute(n,x),E.copy(b);let S=o[x];M.copy(S),M.sub(b.multiplyScalar(b.dot(S))).normalize(),y.crossVectors(E,S);let N=y.dot(l[x])<0?-1:1;a.setXYZW(x,M.x,M.y,M.z,N)}for(let x=0,S=_.length;x<S;++x){let N=_[x],L=N.start,B=N.count;for(let U=L,R=L+B;U<R;U+=3)C(e.getX(U+0)),C(e.getX(U+1)),C(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new fi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let u=0,p=r.count;u<p;u++)r.setXYZ(u,0,0,0);let n=new P,s=new P,a=new P,o=new P,l=new P,h=new P,c=new P,d=new P;if(e)for(let u=0,p=e.count;u<p;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);n.fromBufferAttribute(i,g),s.fromBufferAttribute(i,v),a.fromBufferAttribute(i,m),c.subVectors(a,s),d.subVectors(n,s),c.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),h.fromBufferAttribute(r,m),o.add(c),l.add(c),h.add(c),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let u=0,p=i.count;u<p;u+=3)n.fromBufferAttribute(i,u+0),s.fromBufferAttribute(i,u+1),a.fromBufferAttribute(i,u+2),c.subVectors(a,s),d.subVectors(n,s),c.cross(d),r.setXYZ(u+0,c.x,c.y,c.z),r.setXYZ(u+1,c.x,c.y,c.z),r.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)$t.fromBufferAttribute(e,i),$t.normalize(),e.setXYZ(i,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let h=o.array,c=o.itemSize,d=o.normalized,u=new h.constructor(l.length*c),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let f=0;f<c;f++)u[g++]=h[p++]}return new fi(u,c,d)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new Yu,r=this.index.array,n=this.attributes;for(let o in n){let l=n[o],h=e(l,r);i.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let l=[],h=s[o];for(let c=0,d=h.length;c<d;c++){let u=h[c],p=e(u,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];e.data.attributes[l]=h.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let p=h[d];c.push(p.toJSON(e.data))}c.length>0&&(n[l]=c,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=e.name;let r=e.index;r!==null&&this.setIndex(r.clone());let n=e.attributes;for(let h in n){let c=n[h];this.setAttribute(h,c.clone(i))}let s=e.morphAttributes;for(let h in s){let c=[],d=s[h];for(let u=0,p=d.length;u<p;u++)c.push(d[u].clone(i));this.morphAttributes[h]=c}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,c=a.length;h<c;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var pb=new P;var hl=new P,If=new P,Pf=new ut,Hr=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=hl.subVectors(i,e).cross(If.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(hl),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return i===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(r,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Pf.getNormalMatrix(t),r=this.coplanarPoint(hl).applyMatrix4(t),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Lf=0,as=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Rs,this.side=cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cu,this.blendDst=Ru,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ae(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wo,this.stencilZFail=Wo,this.stencilZPass=Wo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){et(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){et(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(n=>n.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){let s=[];for(let a in n){let o=n[a];delete o.metadata,s.push(o)}return s}if(e){let n=r(t.textures),s=r(t.images);n.length>0&&(i.textures=n),s.length>0&&(i.images=s)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ae().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Hr().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ue().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ue().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=e[n].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var fb=new P,mb=new P,gb=new P,vb=new ue,_b=new ue,yb=new lt,xb=new P,Mb=new P,bb=new P,Sb=new ue,wb=new ue,Eb=new ue;var Tb=new P,Ab=new P;var vr=new P,cl=new P,va=new P,_a=new P,ho=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vr.copy(this.origin).addScaledVector(this.direction,e),vr.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){cl.copy(t).add(e).multiplyScalar(.5),va.copy(e).sub(t).normalize(),_a.copy(this.origin).sub(cl);let n=t.distanceTo(e)*.5,s=-this.direction.dot(va),a=_a.dot(this.direction),o=-_a.dot(va),l=_a.lengthSq(),h=Math.abs(1-s*s),c,d,u,p;if(h>0)if(c=s*o-a,d=s*a-o,p=n*h,c>=0)if(d>=-p)if(d<=p){let g=1/h;c*=g,d*=g,u=c*(c+s*d+2*a)+d*(s*c+d+2*o)+l}else d=n,c=Math.max(0,-(s*d+a)),u=-c*c+d*(d+2*o)+l;else d=-n,c=Math.max(0,-(s*d+a)),u=-c*c+d*(d+2*o)+l;else d<=-p?(c=Math.max(0,-(-s*n+a)),d=c>0?-n:Math.min(Math.max(-n,-o),n),u=-c*c+d*(d+2*o)+l):d<=p?(c=0,d=Math.min(Math.max(-n,-o),n),u=d*(d+2*o)+l):(c=Math.max(0,-(s*n+a)),d=c>0?n:Math.min(Math.max(-n,-o),n),u=-c*c+d*(d+2*o)+l);else d=s>0?-n:n,c=Math.max(0,-(s*d+a)),u=-c*c+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(cl).addScaledVector(va,d),u}intersectSphere(t,e){if(t.radius<0)return null;vr.subVectors(t.center,this.origin);let i=vr.dot(this.direction),r=vr.dot(vr)-i*i,n=t.radius*t.radius;if(r>n)return null;let s=Math.sqrt(n-r),a=i-s,o=i+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,n,s,a,o,l=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(n=(t.min.y-d.y)*h,s=(t.max.y-d.y)*h):(n=(t.max.y-d.y)*h,s=(t.min.y-d.y)*h),i>s||n>r||((n>i||isNaN(i))&&(i=n),(s<r||isNaN(r))&&(r=s),c>=0?(a=(t.min.z-d.z)*c,o=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,o=(t.min.z-d.z)*c),i>o||a>r)||((a>i||i!==i)&&(i=a),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,vr)!==null}intersectTriangle(t,e,i,r,n){let s=this.origin,a=this.direction,o=a.x,l=a.y,h=a.z,c=t.x-s.x,d=t.y-s.y,u=t.z-s.z,p=e.x-s.x,g=e.y-s.y,v=e.z-s.z,m=i.x-s.x,f=i.y-s.y,_=i.z-s.z,M=Math.abs(o),y=Math.abs(l),b=Math.abs(h),E,C,x,S,N,L,B,U,R,D,F,W;if(M>=y&&M>=b?(x=o,L=c,R=p,W=m,o>=0?(E=l,C=h,S=d,N=u,B=g,U=v,D=f,F=_):(E=h,C=l,S=u,N=d,B=v,U=g,D=_,F=f)):y>=b?(x=l,L=d,R=g,W=f,l>=0?(E=h,C=o,S=u,N=c,B=v,U=p,D=_,F=m):(E=o,C=h,S=c,N=u,B=p,U=v,D=m,F=_)):(x=h,L=u,R=v,W=_,h>=0?(E=o,C=l,S=c,N=d,B=p,U=g,D=m,F=f):(E=l,C=o,S=d,N=c,B=g,U=p,D=f,F=m)),x===0)return null;let te=E/x,q=C/x,K=1/x,re=S-te*L,ce=N-q*L,Re=B-te*R,dt=U-q*R,qe=D-te*W,ee=F-q*W,de=qe*dt-ee*Re,le=re*ee-ce*qe,Fe=Re*ce-dt*re;if(r){if(de<0||le<0||Fe<0)return null}else if((de<0||le<0||Fe<0)&&(de>0||le>0||Fe>0))return null;let je=de+le+Fe;if(je===0)return null;let Me=K*(de*L+le*R+Fe*W);return(je>0?Me<0:Me>0)?null:this.at(Me/je,n)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},sr=class extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ae(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.combine=Iu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Uc=new lt,rn=new ho,ya=new br,Fc=new P,xa=new P,Ma=new P,ba=new P,ul=new P,Sa=new P,Oc=new P,wa=new P,Ze=class extends ci{constructor(t=new Ct,e=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(n&&a){Sa.set(0,0,0);for(let o=0,l=n.length;o<l;o++){let h=a[o],c=n[o];h!==0&&(ul.fromBufferAttribute(c,t),s?Sa.addScaledVector(ul,h):Sa.addScaledVector(ul.sub(e),h))}e.add(Sa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,n=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ya.copy(i.boundingSphere),ya.applyMatrix4(n),rn.copy(t.ray).recast(t.near),!(ya.containsPoint(rn.origin)===!1&&(rn.intersectSphere(ya,Fc)===null||rn.origin.distanceToSquared(Fc)>(t.far-t.near)**2))&&(Uc.copy(n).invert(),rn.copy(t.ray).applyMatrix4(Uc),!(i.boundingBox!==null&&rn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,rn)))}_computeIntersections(t,e,i){let r,n=this.geometry,s=this.material,a=n.index,o=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv1,c=n.attributes.normal,d=n.groups,u=n.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){let v=d[p],m=s[v.materialIndex],f=Math.max(v.start,u.start),_=Math.min(a.count,Math.min(v.start+v.count,u.start+u.count));for(let M=f,y=_;M<y;M+=3){let b=a.getX(M),E=a.getX(M+1),C=a.getX(M+2);r=Ea(this,m,t,i,l,h,c,b,E,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let v=p,m=g;v<m;v+=3){let f=a.getX(v),_=a.getX(v+1),M=a.getX(v+2);r=Ea(this,s,t,i,l,h,c,f,_,M),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){let v=d[p],m=s[v.materialIndex],f=Math.max(v.start,u.start),_=Math.min(o.count,Math.min(v.start+v.count,u.start+u.count));for(let M=f,y=_;M<y;M+=3){let b=M,E=M+1,C=M+2;r=Ea(this,m,t,i,l,h,c,b,E,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{let p=Math.max(0,u.start),g=Math.min(o.count,u.start+u.count);for(let v=p,m=g;v<m;v+=3){let f=v,_=v+1,M=v+2;r=Ea(this,s,t,i,l,h,c,f,_,M),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}};function Nf(t,e,i,r,n,s,a,o){let l;if(e.side===xi?l=r.intersectTriangle(a,s,n,!0,o):l=r.intersectTriangle(n,s,a,e.side===cn,o),l===null)return null;wa.copy(o),wa.applyMatrix4(t.matrixWorld);let h=i.ray.origin.distanceTo(wa);return h<i.near||h>i.far?null:{distance:h,point:wa.clone(),object:t}}function Ea(t,e,i,r,n,s,a,o,l,h){t.getVertexPosition(o,xa),t.getVertexPosition(l,Ma),t.getVertexPosition(h,ba);let c=Nf(t,e,i,r,xa,Ma,ba,Oc);if(c){let d=new P;Gn.getBarycoord(Oc,xa,Ma,ba,d),n&&(c.uv=Gn.getInterpolatedAttribute(n,o,l,h,d,new ue)),s&&(c.uv1=Gn.getInterpolatedAttribute(s,o,l,h,d,new ue)),a&&(c.normal=Gn.getInterpolatedAttribute(a,o,l,h,d,new P),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));let u={a:o,b:l,c:h,normal:new P,materialIndex:0};Gn.getNormal(xa,Ma,ba,u.normal),c.face=u,c.barycoord=d}return c}var Cb=new It,Rb=new It,Ib=new It,Pb=new It,Lb=new lt,Nb=new P,Db=new br,Bb=new lt,Ub=new ho;var co=class extends Pi{constructor(t=null,e=1,i=1,r,n,s,a,o,l=ti,h=ti,c,d){super(null,s,a,o,l,h,r,n,c,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Fb=new lt,Ob=new lt;var eo=class extends fi{constructor(t,e,i,r=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bn=new lt,zc=new lt,Ta=[],Vc=new Mr,Df=new lt,bs=new Ze,Ss=new br,Sr=class extends Ze{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new eo(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Df)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Bn),Vc.copy(t.boundingBox).applyMatrix4(Bn),this.boundingBox.union(Vc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new br),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Bn),Ss.copy(t.boundingSphere).applyMatrix4(Bn),this.boundingSphere.union(Ss)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,r=this.morphTexture.source.data.data,n=i.length+1,s=t*n+1;for(let a=0;a<i.length;a++)i[a]=r[s+a]}raycast(t,e){let i=this.matrixWorld,r=this.count;if(bs.geometry=this.geometry,bs.material=this.material,bs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(i),t.ray.intersectsSphere(Ss)!==!1))for(let n=0;n<r;n++){this.getMatrixAt(n,Bn),zc.multiplyMatrices(i,Bn),bs.matrixWorld=zc,bs.raycast(t,Ta);for(let s=0,a=Ta.length;s<a;s++){let o=Ta[s];o.instanceId=n,o.object=this,e.push(o)}Ta.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new eo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new co(new Float32Array(r*this.count),r,this.count,yh,Wi));let n=this.morphTexture.source.data.data,s=0;for(let l=0;l<i.length;l++)s+=i[l];let a=this.geometry.morphTargetsRelative?1:1-s,o=r*t;return n[o]=a,n.set(i,o+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},nn=new br,Bf=new ue(.5,.5),Aa=new P,ts=class{constructor(t=new Hr,e=new Hr,i=new Hr,r=new Hr,n=new Hr,s=new Hr){this.planes=[t,e,i,r,n,s]}set(t,e,i,r,n,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(n),a[5].copy(s),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Xi,i=!1){let r=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],h=n[4],c=n[5],d=n[6],u=n[7],p=n[8],g=n[9],v=n[10],m=n[11],f=n[12],_=n[13],M=n[14],y=n[15];if(r[0].setComponents(l-s,u-h,m-p,y-f).normalize(),r[1].setComponents(l+s,u+h,m+p,y+f).normalize(),r[2].setComponents(l+a,u+c,m+g,y+_).normalize(),r[3].setComponents(l-a,u-c,m-g,y-_).normalize(),i)r[4].setComponents(o,d,v,M).normalize(),r[5].setComponents(l-o,u-d,m-v,y-M).normalize();else if(r[4].setComponents(l-o,u-d,m-v,y-M).normalize(),e===Xi)r[5].setComponents(l+o,u+d,m+v,y+M).normalize();else if(e===Fs)r[5].setComponents(o,d,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),nn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),nn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(nn)}intersectsSprite(t){nn.center.set(0,0,0);let e=Bf.distanceTo(t.center);return nn.radius=.7071067811865476+e,nn.applyMatrix4(t.matrixWorld),this.intersectsSphere(nn)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let n=0;n<6;n++)if(e[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(Aa.x=r.normal.x>0?t.max.x:t.min.x,Aa.y=r.normal.y>0?t.max.y:t.min.y,Aa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Aa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Hc=new lt,Uf=class Zu{constructor(){this.coordinateSystem=Xi,this._frustums=[],this._count=0}setFromArrayCamera(e){let i=e.cameras,r=this._frustums;for(let n=0;n<i.length;n++){let s=i[n];Hc.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),r[n]===void 0&&(r[n]=new ts),r[n].setFromProjectionMatrix(Hc,s.coordinateSystem,s.reversedDepth)}return this._count=i.length,this}intersectsObject(e){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(e))return!0;return!1}containsPoint(e){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let i=this._frustums,r=e._frustums;for(let n=0;n<e._count;n++)i[n]===void 0&&(i[n]=new ts),i[n].copy(r[n]);return this._count=e._count,this}clone(){return new Zu().copy(this)}};var Ff=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,i,r){let n=this.pool,s=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1,index:-1});let a=n[this.index];s.push(a),this.index++,a.start=t,a.count=e,a.z=i,a.index=r}reset(){this.list.length=0,this.index=0}},zb=new lt,Vb=new Ae(1,1,1),Hb=new ts,Gb=new Uf,kb=new Mr,Wb=new br,qb=new P,Xb=new P,jb=new P,Yb=new Ff,Zb=new Ze;var Kb=new P,$b=new P,Jb=new lt,Qb=new ho,eS=new br,tS=new P,iS=new P;var rS=new P,nS=new P;var Ah=class extends as{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ae(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gc=new lt,ch=new ho,Ca=new br,Ra=new P,Ch=class extends ci{constructor(t=new Ct,e=new Ah){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.matrixWorld,n=t.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(r),Ca.radius+=n,t.ray.intersectsSphere(Ca)===!1)return;Gc.copy(r).invert(),ch.copy(t.ray).applyMatrix4(Gc);let a=n/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=i.index,h=i.attributes.position;if(l!==null){let c=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let u=c,p=d;u<p;u++){let g=l.getX(u);Ra.fromBufferAttribute(h,g),kc(Ra,g,o,r,t,e,this)}}else{let c=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);for(let u=c,p=d;u<p;u++)Ra.fromBufferAttribute(h,u),kc(Ra,u,o,r,t,e,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}};function kc(t,e,i,r,n,s,a){let o=ch.distanceSqToPoint(t);if(o<i){let l=new P;ch.closestPointToPoint(t,l),l.applyMatrix4(r);let h=n.ray.origin.distanceTo(l);if(h<n.near||h>n.far)return;s.push({distance:h,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ku=class extends Pi{constructor(t=[],e=dn,i,r,n,s,a,o,l,h){super(t,e,i,r,n,s,a,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ks=class extends Pi{constructor(t,e,i,r,n,s,a,o,l){super(t,e,i,r,n,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zs=class extends Pi{constructor(t,e,i=nr,r,n,s,a=ti,o=ti,l,h=xr,c=1){if(h!==xr&&h!==on)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:c};super(d,r,n,s,a,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Th(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Of=class extends zs{constructor(t,e=nr,i=dn,r,n,s=ti,a=ti,o,l=xr){let h={width:t,height:t,depth:1},c=[h,h,h,h,h,h];super(t,t,e,i,r,n,s,a,o,l),this.image=c,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},$u=class extends Pi{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Zt=class Ju extends Ct{constructor(e=1,i=1,r=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],h=[],c=[],d=[],u=0,p=0;g("z","y","x",-1,-1,r,i,e,a,s,0),g("z","y","x",1,-1,r,i,-e,a,s,1),g("x","z","y",1,1,e,r,i,n,a,2),g("x","z","y",1,-1,e,r,-i,n,a,3),g("x","y","z",1,-1,e,i,r,n,s,4),g("x","y","z",-1,-1,e,i,-r,n,s,5),this.setIndex(l),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(d,2));function g(v,m,f,_,M,y,b,E,C,x,S){let N=y/C,L=b/x,B=y/2,U=b/2,R=E/2,D=C+1,F=x+1,W=0,te=0,q=new P;for(let K=0;K<F;K++){let re=K*L-U;for(let ce=0;ce<D;ce++){let Re=ce*N-B;q[v]=Re*_,q[m]=re*M,q[f]=R,h.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[f]=E>0?1:-1,c.push(q.x,q.y,q.z),d.push(ce/C),d.push(1-K/x),W+=1}}for(let K=0;K<x;K++)for(let re=0;re<C;re++){let ce=u+re+D*K,Re=u+re+D*(K+1),dt=u+(re+1)+D*(K+1),qe=u+(re+1)+D*K;l.push(ce,Re,qe),l.push(Re,dt,qe),te+=6}o.addGroup(p,te,S),p+=te,u+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},zf=class Qu extends Ct{constructor(e=1,i=1,r=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:i,capSegments:r,radialSegments:n,heightSegments:s},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],h=[],c=i/2,d=Math.PI/2*e,u=i,p=2*d+u,g=r*2+s,v=n+1,m=new P,f=new P;for(let _=0;_<=g;_++){let M=0,y=0,b=0,E=0;if(_<=r){let S=_/r,N=S*Math.PI/2;y=-c-e*Math.cos(N),b=e*Math.sin(N),E=-e*Math.cos(N),M=S*d}else if(_<=r+s){let S=(_-r)/s;y=-c+S*i,b=e,E=0,M=d+S*u}else{let S=(_-r-s)/r,N=S*Math.PI/2;y=c+e*Math.sin(N),b=e*Math.cos(N),E=e*Math.sin(N),M=d+u+S*d}let C=Math.max(0,Math.min(1,M/p)),x=0;_===0?x=.5/n:_===g&&(x=-.5/n);for(let S=0;S<=n;S++){let N=S/n,L=N*Math.PI*2,B=Math.sin(L),U=Math.cos(L);f.x=-b*U,f.y=y,f.z=b*B,o.push(f.x,f.y,f.z),m.set(-b*U,E,b*B),m.normalize(),l.push(m.x,m.y,m.z),h.push(N+x,C)}if(_>0){let S=(_-1)*v;for(let N=0;N<n;N++){let L=S+N,B=S+N+1,U=_*v+N,R=_*v+N+1;a.push(L,B,U),a.push(B,R,U)}}}this.setIndex(a),this.setAttribute("position",new Qe(o,3)),this.setAttribute("normal",new Qe(l,3)),this.setAttribute("uv",new Qe(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Rh=class ed extends Ct{constructor(e=1,i=32,r=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:r,thetaLength:n},i=Math.max(3,i);let s=[],a=[],o=[],l=[],h=new P,c=new ue;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=i;d++,u+=3){let p=r+d/i*n;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),c.x=(a[u]/e+1)/2,c.y=(a[u+1]/e+1)/2,l.push(c.x,c.y)}for(let d=1;d<=i;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Qe(a,3)),this.setAttribute("normal",new Qe(o,3)),this.setAttribute("uv",new Qe(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ed(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ui=class td extends Ct{constructor(e=1,i=1,r=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let h=this;n=Math.floor(n),s=Math.floor(s);let c=[],d=[],u=[],p=[],g=0,v=[],m=r/2,f=0;_(),a===!1&&(e>0&&M(!0),i>0&&M(!1)),this.setIndex(c),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(p,2));function _(){let y=new P,b=new P,E=0,C=(i-e)/r;for(let x=0;x<=s;x++){let S=[],N=x/s,L=N*(i-e)+e;for(let B=0;B<=n;B++){let U=B/n,R=U*l+o,D=Math.sin(R),F=Math.cos(R);b.x=L*D,b.y=-N*r+m,b.z=L*F,d.push(b.x,b.y,b.z),y.set(D,C,F).normalize(),u.push(y.x,y.y,y.z),p.push(U,1-N),S.push(g++)}v.push(S)}for(let x=0;x<n;x++)for(let S=0;S<s;S++){let N=v[S][x],L=v[S+1][x],B=v[S+1][x+1],U=v[S][x+1];(e>0||S!==0)&&(c.push(N,L,U),E+=3),(i>0||S!==s-1)&&(c.push(L,B,U),E+=3)}h.addGroup(f,E,0),f+=E}function M(y){let b=g,E=new ue,C=new P,x=0,S=y===!0?e:i,N=y===!0?1:-1;for(let B=1;B<=n;B++)d.push(0,m*N,0),u.push(0,N,0),p.push(.5,.5),g++;let L=g;for(let B=0;B<=n;B++){let U=B/n*l+o,R=Math.cos(U),D=Math.sin(U);C.x=S*D,C.y=m*N,C.z=S*R,d.push(C.x,C.y,C.z),u.push(0,N,0),E.x=R*.5+.5,E.y=D*.5*N+.5,p.push(E.x,E.y),g++}for(let B=0;B<n;B++){let U=b+B,R=L+B;y===!0?c.push(R,R+1,U):c.push(R+1,R,U),x+=3}h.addGroup(f,x,y===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new td(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},gn=class id extends ui{constructor(e=1,i=1,r=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,e,i,r,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new id(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ws=class rd extends Ct{constructor(e=[],i=[],r=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:n};let s=[],a=[];o(n),h(r),c(),this.setAttribute("position",new Qe(s,3)),this.setAttribute("normal",new Qe(s.slice(),3)),this.setAttribute("uv",new Qe(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(_){let M=new P,y=new P,b=new P;for(let E=0;E<i.length;E+=3)p(i[E+0],M),p(i[E+1],y),p(i[E+2],b),l(M,y,b,_)}function l(_,M,y,b){let E=b+1,C=[];for(let x=0;x<=E;x++){C[x]=[];let S=_.clone().lerp(y,x/E),N=M.clone().lerp(y,x/E),L=E-x;for(let B=0;B<=L;B++)B===0&&x===E?C[x][B]=S:C[x][B]=S.clone().lerp(N,B/L)}for(let x=0;x<E;x++)for(let S=0;S<2*(E-x)-1;S++){let N=Math.floor(S/2);S%2===0?(u(C[x][N+1]),u(C[x+1][N]),u(C[x][N])):(u(C[x][N+1]),u(C[x+1][N+1]),u(C[x+1][N]))}}function h(_){let M=new P;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(_),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function c(){let _=new P;for(let M=0;M<s.length;M+=3){_.x=s[M+0],_.y=s[M+1],_.z=s[M+2];let y=m(_)/2/Math.PI+.5,b=f(_)/Math.PI+.5;a.push(y,1-b)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){let M=a[_+0],y=a[_+2],b=a[_+4],E=Math.max(M,y,b),C=Math.min(M,y,b);E>.9&&C<.1&&(M<.2&&(a[_+0]+=1),y<.2&&(a[_+2]+=1),b<.2&&(a[_+4]+=1))}}function u(_){s.push(_.x,_.y,_.z)}function p(_,M){let y=_*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function g(){let _=new P,M=new P,y=new P,b=new P,E=new ue,C=new ue,x=new ue;for(let S=0,N=0;S<s.length;S+=9,N+=6){_.set(s[S+0],s[S+1],s[S+2]),M.set(s[S+3],s[S+4],s[S+5]),y.set(s[S+6],s[S+7],s[S+8]),E.set(a[N+0],a[N+1]),C.set(a[N+2],a[N+3]),x.set(a[N+4],a[N+5]),b.copy(_).add(M).add(y).divideScalar(3);let L=m(b);v(E,N+0,_,L),v(C,N+2,M,L),v(x,N+4,y,L)}}function v(_,M,y,b){b<0&&_.x===1&&(a[M]=_.x-1),y.x===0&&y.z===0&&(a[M]=b/2/Math.PI+.5)}function m(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rd(e.vertices,e.indices,e.radius,e.detail)}},Vf=class nd extends Ws{constructor(e=1,i=0){let r=(1+Math.sqrt(5))/2,n=1/r,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-r,0,-n,r,0,n,-r,0,n,r,-n,-r,0,-n,r,0,n,-r,0,n,r,0,-r,0,-n,r,0,-n,-r,0,n,r,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,i),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new nd(e.radius,e.detail)}},Ia=new P,Pa=new P,dl=new P,La=new Gn,Hf=class extends Ct{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Wa*e),n=t.getIndex(),s=t.getAttribute("position"),a=n?n.count:s.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),c={},d=[];for(let u=0;u<a;u+=3){n?(o[0]=n.getX(u),o[1]=n.getX(u+1),o[2]=n.getX(u+2)):(o[0]=u,o[1]=u+1,o[2]=u+2);let{a:p,b:g,c:v}=La;if(p.fromBufferAttribute(s,o[0]),g.fromBufferAttribute(s,o[1]),v.fromBufferAttribute(s,o[2]),La.getNormal(dl),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let f=(m+1)%3,_=h[m],M=h[f],y=La[l[m]],b=La[l[f]],E=`${_}_${M}`,C=`${M}_${_}`;C in c&&c[C]?(dl.dot(c[C].normal)<=r&&(d.push(y.x,y.y,y.z),d.push(b.x,b.y,b.z)),c[C]=null):E in c||(c[E]={index0:o[m],index1:o[f],normal:dl.clone()})}}for(let u in c)if(c[u]){let{index0:p,index1:g}=c[u];Ia.fromBufferAttribute(s,p),Pa.fromBufferAttribute(s,g),d.push(Ia.x,Ia.y,Ia.z),d.push(Pa.x,Pa.y,Pa.z)}this.setAttribute("position",new Qe(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},ar=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,r=this.getPoint(0),n=0;e.push(0);for(let s=1;s<=t;s++)i=this.getPoint(s/t),n+=i.distanceTo(r),e.push(n),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),r=0,n=i.length,s;e?s=e:s=t*i[n-1];let a=0,o=n-1,l;for(;a<=o;)if(r=Math.floor(a+(o-a)/2),l=i[r]-s,l<0)a=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===s)return r/(n-1);let h=i[r],c=i[r+1]-h,d=(s-h)/c;return(r+d)/(n-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let n=this.getPoint(i),s=this.getPoint(r),a=e||(n.isVector2?new ue:new P);return a.copy(s).sub(n).normalize(),a}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new P,r=[],n=[],s=[],a=new P,o=new lt;for(let u=0;u<=t;u++){let p=u/t;r[u]=this.getTangentAt(p,new P)}n[0]=new P,s[0]=new P;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),c=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],a),s[0].crossVectors(r[0],n[0]);for(let u=1;u<=t;u++){if(n[u]=n[u-1].clone(),s[u]=s[u-1].clone(),a.crossVectors(r[u-1],r[u]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(gt(r[u-1].dot(r[u]),-1,1));n[u].applyMatrix4(o.makeRotationAxis(a,p))}s[u].crossVectors(r[u],n[u])}if(e===!0){let u=Math.acos(gt(n[0].dot(n[t]),-1,1));u/=t,r[0].dot(a.crossVectors(n[0],n[t]))>0&&(u=-u);for(let p=1;p<=t;p++)n[p].applyMatrix4(o.makeRotationAxis(r[p],u*p)),s[p].crossVectors(r[p],n[p])}return{tangents:r,normals:n,binormals:s}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ih=class extends ar{constructor(t=0,e=0,i=1,r=1,n=0,s=Math.PI*2,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new ue){let i=e,r=Math.PI*2,n=this.aEndAngle-this.aStartAngle,s=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=r;for(;n>r;)n-=r;n<Number.EPSILON&&(s?n=0:n=r),this.aClockwise===!0&&!s&&(n===r?n=-r:n=n-r);let a=this.aStartAngle+t*n,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=o-this.aX,u=l-this.aY;o=d*h-u*c+this.aX,l=d*c+u*h+this.aY}return i.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Gf=class extends Ih{constructor(t,e,i,r,n,s){super(t,e,i,i,r,n,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Ph(){let t=0,e=0,i=0,r=0;function n(s,a,o,l){t=s,e=o,i=-3*s+3*a-2*o-l,r=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,h){n(a,o,h*(o-s),h*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,h,c,d){let u=(a-s)/h-(o-s)/(h+c)+(o-a)/c,p=(o-a)/c-(l-a)/(c+d)+(l-o)/d;u*=c,p*=c,n(a,o,u,p)},calc:function(s){let a=s*s,o=a*s;return t+e*s+i*a+r*o}}}var Wc=new P,qc=new P,pl=new Ph,fl=new Ph,ml=new Ph,kf=class extends ar{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new P){let i=e,r=this.points,n=r.length,s=(n-(this.closed?0:1))*t,a=Math.floor(s),o=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/n)+1)*n:o===0&&a===n-1&&(a=n-2,o=1);let l,h;this.closed||a>0?l=r[(a-1)%n]:(qc.subVectors(r[0],r[1]).add(r[0]),l=qc);let c=r[a%n],d=r[(a+1)%n];if(this.closed||a+2<n?h=r[(a+2)%n]:(Wc.subVectors(r[n-1],r[n-2]).add(r[n-1]),h=Wc),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(c),u),g=Math.pow(c.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(h),u);g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),pl.initNonuniformCatmullRom(l.x,c.x,d.x,h.x,p,g,v),fl.initNonuniformCatmullRom(l.y,c.y,d.y,h.y,p,g,v),ml.initNonuniformCatmullRom(l.z,c.z,d.z,h.z,p,g,v)}else this.curveType==="catmullrom"&&(pl.initCatmullRom(l.x,c.x,d.x,h.x,this.tension),fl.initCatmullRom(l.y,c.y,d.y,h.y,this.tension),ml.initCatmullRom(l.z,c.z,d.z,h.z,this.tension));return i.set(pl.calc(o),fl.calc(o),ml.calc(o)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new P().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Xc(t,e,i,r,n){let s=(r-e)*.5,a=(n-i)*.5,o=t*t,l=t*o;return(2*i-2*r+s+a)*l+(-3*i+3*r-2*s-a)*o+s*t+i}function Wf(t,e){let i=1-t;return i*i*e}function qf(t,e){return 2*(1-t)*t*e}function Xf(t,e){return t*t*e}function Is(t,e,i,r){return Wf(t,e)+qf(t,i)+Xf(t,r)}function jf(t,e){let i=1-t;return i*i*i*e}function Yf(t,e){let i=1-t;return 3*i*i*t*e}function Zf(t,e){return 3*(1-t)*t*t*e}function Kf(t,e){return t*t*t*e}function Ps(t,e,i,r,n){return jf(t,e)+Yf(t,i)+Zf(t,r)+Kf(t,n)}var sd=class extends ar{constructor(t=new ue,e=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new ue){let i=e,r=this.v0,n=this.v1,s=this.v2,a=this.v3;return i.set(Ps(t,r.x,n.x,s.x,a.x),Ps(t,r.y,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$f=class extends ar{constructor(t=new P,e=new P,i=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new P){let i=e,r=this.v0,n=this.v1,s=this.v2,a=this.v3;return i.set(Ps(t,r.x,n.x,s.x,a.x),Ps(t,r.y,n.y,s.y,a.y),Ps(t,r.z,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ad=class extends ar{constructor(t=new ue,e=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ue){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ue){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jf=class extends ar{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},od=class extends ar{constructor(t=new ue,e=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ue){let i=e,r=this.v0,n=this.v1,s=this.v2;return i.set(Is(t,r.x,n.x,s.x),Is(t,r.y,n.y,s.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ld=class extends ar{constructor(t=new P,e=new P,i=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new P){let i=e,r=this.v0,n=this.v1,s=this.v2;return i.set(Is(t,r.x,n.x,s.x),Is(t,r.y,n.y,s.y),Is(t,r.z,n.z,s.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hd=class extends ar{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ue){let i=e,r=this.points,n=(r.length-1)*t,s=Math.floor(n),a=n-s,o=r[s===0?s:s-1],l=r[s],h=r[s>r.length-2?r.length-1:s+1],c=r[s>r.length-3?r.length-1:s+2];return i.set(Xc(a,o.x,l.x,h.x,c.x),Xc(a,o.y,l.y,h.y,c.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new ue().fromArray(r))}return this}},to=Object.freeze({__proto__:null,ArcCurve:Gf,CatmullRomCurve3:kf,CubicBezierCurve:sd,CubicBezierCurve3:$f,EllipseCurve:Ih,LineCurve:ad,LineCurve3:Jf,QuadraticBezierCurve:od,QuadraticBezierCurve3:ld,SplineCurve:hd}),Qf=class extends ar{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new to[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),r=this.getCurveLengths(),n=0;for(;n<r.length;){if(r[n]>=i){let s=r[n]-i,a=this.curves[n],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l,e)}n++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let r=0,n=this.curves;r<n.length;r++){let s=n[r],a=s.isEllipseCurve?t*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,o=s.getPoints(a);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(new to[r.type]().fromJSON(r))}return this}},jc=class extends Qf{constructor(t){super(),this.type="Path",this.currentPoint=new ue,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new ad(this.currentPoint.clone(),new ue(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){let n=new od(this.currentPoint.clone(),new ue(t,e),new ue(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,n,s){let a=new sd(this.currentPoint.clone(),new ue(t,e),new ue(i,r),new ue(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new hd(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,n,s){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,i,r,n,s),this}absarc(t,e,i,r,n,s){return this.absellipse(t,e,i,i,r,n,s),this}ellipse(t,e,i,r,n,s,a,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,r,n,s,a,o),this}absellipse(t,e,i,r,n,s,a,o){let l=new Ih(t,e,i,r,n,s,a,o);if(this.curves.length>0){let c=l.getPoint(0);c.equals(this.currentPoint)||this.lineTo(c.x,c.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},cd=class extends jc{constructor(t){super(t),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(new jc().fromJSON(r))}return this}};function em(t,e,i=2){let r=e&&e.length,n=r?e[0]*i:t.length,s=ud(t,0,n,i,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,h;if(r&&(s=sm(t,e,s,i)),t.length>80*i){o=t[0],l=t[1];let c=o,d=l;for(let u=i;u<n;u+=i){let p=t[u],g=t[u+1];p<o&&(o=p),g<l&&(l=g),p>c&&(c=p),g>d&&(d=g)}h=Math.max(c-o,d-l),h=h!==0?32767/h:0}return Vs(s,a,i,o,l,h,0),a}function ud(t,e,i,r,n){let s;if(n===gm(t,e,i,r)>0)for(let a=e;a<i;a+=r)s=Yc(a/r|0,t[a],t[a+1],s);else for(let a=i-r;a>=e;a-=r)s=Yc(a/r|0,t[a],t[a+1],s);return s&&is(s,s.next)&&(Gs(s),s=s.next),s}function fn(t,e){if(!t)return t;e||(e=t);let i=t,r;do if(r=!1,!i.steiner&&(is(i,i.next)||Ot(i.prev,i,i.next)===0)){if(Gs(i),i=e=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==e);return e}function Vs(t,e,i,r,n,s,a){if(!t)return;!a&&s&&cm(t,r,n,s);let o=t;for(;t.prev!==t.next;){let l=t.prev,h=t.next;if(s?im(t,r,n,s):tm(t)){e.push(l.i,t.i,h.i),Gs(t),t=h.next,o=h.next;continue}if(t=h,t===o){a?a===1?(t=rm(fn(t),e),Vs(t,e,i,r,n,s,2)):a===2&&nm(t,e,i,r,n,s):Vs(fn(t),e,i,r,n,s,1);break}}}function tm(t){let e=t.prev,i=t,r=t.next;if(Ot(e,i,r)>=0)return!1;let n=e.x,s=i.x,a=r.x,o=e.y,l=i.y,h=r.y,c=Math.min(n,s,a),d=Math.min(o,l,h),u=Math.max(n,s,a),p=Math.max(o,l,h),g=r.next;for(;g!==e;){if(g.x>=c&&g.x<=u&&g.y>=d&&g.y<=p&&As(n,o,s,l,a,h,g.x,g.y)&&Ot(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function im(t,e,i,r){let n=t.prev,s=t,a=t.next;if(Ot(n,s,a)>=0)return!1;let o=n.x,l=s.x,h=a.x,c=n.y,d=s.y,u=a.y,p=Math.min(o,l,h),g=Math.min(c,d,u),v=Math.max(o,l,h),m=Math.max(c,d,u),f=uh(p,g,e,i,r),_=uh(v,m,e,i,r),M=t.prevZ,y=t.nextZ;for(;M&&M.z>=f&&y&&y.z<=_;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==n&&M!==a&&As(o,c,l,d,h,u,M.x,M.y)&&Ot(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==n&&y!==a&&As(o,c,l,d,h,u,y.x,y.y)&&Ot(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=f;){if(M.x>=p&&M.x<=v&&M.y>=g&&M.y<=m&&M!==n&&M!==a&&As(o,c,l,d,h,u,M.x,M.y)&&Ot(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=_;){if(y.x>=p&&y.x<=v&&y.y>=g&&y.y<=m&&y!==n&&y!==a&&As(o,c,l,d,h,u,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function rm(t,e){let i=t;do{let r=i.prev,n=i.next.next;!is(r,n)&&pd(r,i,i.next,n)&&Hs(r,n)&&Hs(n,r)&&(e.push(r.i,i.i,n.i),Gs(i),Gs(i.next),i=t=n),i=i.next}while(i!==t);return fn(i)}function nm(t,e,i,r,n,s){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&pm(a,o)){let l=fd(a,o);a=fn(a,a.next),l=fn(l,l.next),Vs(a,e,i,r,n,s,0),Vs(l,e,i,r,n,s,0);return}o=o.next}a=a.next}while(a!==t)}function sm(t,e,i,r){let n=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*r,l=s<a-1?e[s+1]*r:t.length,h=ud(t,o,l,r,!1);h===h.next&&(h.steiner=!0),n.push(dm(h))}n.sort(am);for(let s=0;s<n.length;s++)i=om(n[s],i);return i}function am(t,e){let i=t.x-e.x;if(i===0&&(i=t.y-e.y,i===0)){let r=(t.next.y-t.y)/(t.next.x-t.x),n=(e.next.y-e.y)/(e.next.x-e.x);i=r-n}return i}function om(t,e){let i=lm(t,e);if(!i)return e;let r=fd(i,t);return fn(r,r.next),fn(i,i.next)}function lm(t,e){let i=e,r=t.x,n=t.y,s=-1/0,a;if(is(t,i))return i;do{if(is(t,i.next))return i.next;if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let d=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>s&&(s=d,a=i.x<i.next.x?i:i.next,d===r))return a}i=i.next}while(i!==e);if(!a)return null;let o=a,l=a.x,h=a.y,c=1/0;i=a;do{if(r>=i.x&&i.x>=l&&r!==i.x&&dd(n<h?r:s,n,l,h,n<h?s:r,n,i.x,i.y)){let d=Math.abs(n-i.y)/(r-i.x);Hs(i,t)&&(d<c||d===c&&(i.x>a.x||i.x===a.x&&hm(a,i)))&&(a=i,c=d)}i=i.next}while(i!==o);return a}function hm(t,e){return Ot(t.prev,t,e.prev)<0&&Ot(e.next,t,t.next)<0}function cm(t,e,i,r){let n=t;do n.z===0&&(n.z=uh(n.x,n.y,e,i,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,um(n)}function um(t){let e,i=1;do{let r=t,n;t=null;let s=null;for(e=0;r;){e++;let a=r,o=0;for(let h=0;h<i&&(o++,a=a.nextZ,!!a);h++);let l=i;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||r.z<=a.z)?(n=r,r=r.nextZ,o--):(n=a,a=a.nextZ,l--),s?s.nextZ=n:t=n,n.prevZ=s,s=n;r=a}s.nextZ=null,i*=2}while(e>1);return t}function uh(t,e,i,r,n){return t=(t-i)*n|0,e=(e-r)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function dm(t){let e=t,i=t;do(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next;while(e!==t);return i}function dd(t,e,i,r,n,s,a,o){return(n-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(r-o)>=(i-a)*(e-o)&&(i-a)*(s-o)>=(n-a)*(r-o)}function As(t,e,i,r,n,s,a,o){return!(t===a&&e===o)&&dd(t,e,i,r,n,s,a,o)}function pm(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!fm(t,e)&&(Hs(t,e)&&Hs(e,t)&&mm(t,e)&&(Ot(t.prev,t,e.prev)||Ot(t,e.prev,e))||is(t,e)&&Ot(t.prev,t,t.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)}function is(t,e){return t.x===e.x&&t.y===e.y}function pd(t,e,i,r){let n=Da(Ot(t,e,i)),s=Da(Ot(t,e,r)),a=Da(Ot(i,r,t)),o=Da(Ot(i,r,e));return!!(n!==s&&a!==o||n===0&&Na(t,i,e)||s===0&&Na(t,r,e)||a===0&&Na(i,t,r)||o===0&&Na(i,e,r))}function Na(t,e,i){return e.x<=Math.max(t.x,i.x)&&e.x>=Math.min(t.x,i.x)&&e.y<=Math.max(t.y,i.y)&&e.y>=Math.min(t.y,i.y)}function Da(t){return t>0?1:t<0?-1:0}function fm(t,e){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&pd(i,i.next,t,e))return!0;i=i.next}while(i!==t);return!1}function Hs(t,e){return Ot(t.prev,t,t.next)<0?Ot(t,e,t.next)>=0&&Ot(t,t.prev,e)>=0:Ot(t,e,t.prev)<0||Ot(t,t.next,e)<0}function mm(t,e){let i=t,r=!1,n=(t.x+e.x)/2,s=(t.y+e.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&n<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==t);return r}function fd(t,e){let i=dh(t.i,t.x,t.y),r=dh(e.i,e.x,e.y),n=t.next,s=e.prev;return t.next=e,e.prev=t,i.next=n,n.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function Yc(t,e,i,r){let n=dh(t,e,i);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function Gs(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function dh(t,e,i){return{i:t,x:e,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gm(t,e,i,r){let n=0;for(let s=e,a=i-r;s<i;s+=r)n+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s;return n}var vm=class{static triangulate(t,e,i=2){return em(t,e,i)}},ln=class md{static area(e){let i=e.length,r=0;for(let n=i-1,s=0;s<i;n=s++)r+=e[n].x*e[s].y-e[s].x*e[n].y;return r*.5}static isClockWise(e){return md.area(e)<0}static triangulateShape(e,i){let r=[],n=[],s=[];Zc(e),Kc(r,e);let a=e.length;i.forEach(Zc);for(let l=0;l<i.length;l++)n.push(a),a+=i[l].length,Kc(r,i[l]);let o=vm.triangulate(r,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Zc(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Kc(t,e){for(let i=0;i<e.length;i++)t.push(e[i].x),t.push(e[i].y)}var _m=class gd extends Ct{constructor(e=new cd([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:i},e=Array.isArray(e)?e:[e];let r=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++){let h=e[o];a(h)}this.setAttribute("position",new Qe(n,3)),this.setAttribute("uv",new Qe(s,2)),this.computeVertexNormals();function a(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,c=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,u=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,v=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,_=i.UVGenerator!==void 0?i.UVGenerator:ym,M,y=!1,b,E,C,x;if(f){M=f.getSpacedPoints(c),y=!0,u=!1;let oe=f.isCatmullRomCurve3?f.closed:!1;b=f.computeFrenetFrames(c,oe),E=new P,C=new P,x=new P}u||(m=0,p=0,g=0,v=0);let S=o.extractPoints(h),N=S.shape,L=S.holes;if(!ln.isClockWise(N)){N=N.reverse();for(let oe=0,ae=L.length;oe<ae;oe++){let he=L[oe];ln.isClockWise(he)&&(L[oe]=he.reverse())}}function B(oe){let ae=10000000000000001e-36,he=oe[0];for(let _e=1;_e<=oe.length;_e++){let Ce=_e%oe.length,Ne=oe[Ce],De=Ne.x-he.x,Xe=Ne.y-he.y,it=De*De+Xe*Xe,O=Math.max(Math.abs(Ne.x),Math.abs(Ne.y),Math.abs(he.x),Math.abs(he.y)),xt=ae*O*O;if(it<=xt){oe.splice(Ce,1),_e--;continue}he=Ne}}B(N),L.forEach(B);let U=L.length,R=N;for(let oe=0;oe<U;oe++){let ae=L[oe];N=N.concat(ae)}function D(oe,ae,he){return ae||tt("ExtrudeGeometry: vec does not exist"),oe.clone().addScaledVector(ae,he)}let F=N.length;function W(oe,ae,he){let _e,Ce,Ne,De=oe.x-ae.x,Xe=oe.y-ae.y,it=he.x-oe.x,O=he.y-oe.y,xt=De*De+Xe*Xe,pt=De*O-Xe*it;if(Math.abs(pt)>Number.EPSILON){let Ye=Math.sqrt(xt),I=Math.sqrt(it*it+O*O),T=ae.x-Xe/Ye,V=ae.y+De/Ye,Z=he.x-O/I,ie=he.y+it/I,ye=((Z-T)*O-(ie-V)*it)/(De*O-Xe*it);_e=T+De*ye-oe.x,Ce=V+Xe*ye-oe.y;let Se=_e*_e+Ce*Ce;if(Se<=2)return new ue(_e,Ce);Ne=Math.sqrt(Se/2)}else{let Ye=!1;De>Number.EPSILON?it>Number.EPSILON&&(Ye=!0):De<-Number.EPSILON?it<-Number.EPSILON&&(Ye=!0):Math.sign(Xe)===Math.sign(O)&&(Ye=!0),Ye?(_e=-Xe,Ce=De,Ne=Math.sqrt(xt)):(_e=De,Ce=Xe,Ne=Math.sqrt(xt/2))}return new ue(_e/Ne,Ce/Ne)}let te=[];for(let oe=0,ae=R.length,he=ae-1,_e=oe+1;oe<ae;oe++,he++,_e++)he===ae&&(he=0),_e===ae&&(_e=0),te[oe]=W(R[oe],R[he],R[_e]);let q=[],K,re=te.concat();for(let oe=0,ae=U;oe<ae;oe++){let he=L[oe];K=[];for(let _e=0,Ce=he.length,Ne=Ce-1,De=_e+1;_e<Ce;_e++,Ne++,De++)Ne===Ce&&(Ne=0),De===Ce&&(De=0),K[_e]=W(he[_e],he[Ne],he[De]);q.push(K),re=re.concat(K)}let ce;if(m===0)ce=ln.triangulateShape(R,L);else{let oe=[],ae=[];for(let he=0;he<m;he++){let _e=he/m,Ce=p*Math.cos(_e*Math.PI/2),Ne=g*Math.sin(_e*Math.PI/2)+v;for(let De=0,Xe=R.length;De<Xe;De++){let it=D(R[De],te[De],Ne);le(it.x,it.y,-Ce),_e===0&&oe.push(it)}for(let De=0,Xe=U;De<Xe;De++){let it=L[De];K=q[De];let O=[];for(let xt=0,pt=it.length;xt<pt;xt++){let Ye=D(it[xt],K[xt],Ne);le(Ye.x,Ye.y,-Ce),_e===0&&O.push(Ye)}_e===0&&ae.push(O)}}ce=ln.triangulateShape(oe,ae)}let Re=ce.length,dt=g+v;for(let oe=0;oe<F;oe++){let ae=u?D(N[oe],re[oe],dt):N[oe];y?(C.copy(b.normals[0]).multiplyScalar(ae.x),E.copy(b.binormals[0]).multiplyScalar(ae.y),x.copy(M[0]).add(C).add(E),le(x.x,x.y,x.z)):le(ae.x,ae.y,0)}for(let oe=1;oe<=c;oe++)for(let ae=0;ae<F;ae++){let he=u?D(N[ae],re[ae],dt):N[ae];y?(C.copy(b.normals[oe]).multiplyScalar(he.x),E.copy(b.binormals[oe]).multiplyScalar(he.y),x.copy(M[oe]).add(C).add(E),le(x.x,x.y,x.z)):le(he.x,he.y,d/c*oe)}for(let oe=m-1;oe>=0;oe--){let ae=oe/m,he=p*Math.cos(ae*Math.PI/2),_e=g*Math.sin(ae*Math.PI/2)+v;for(let Ce=0,Ne=R.length;Ce<Ne;Ce++){let De=D(R[Ce],te[Ce],_e);le(De.x,De.y,d+he)}for(let Ce=0,Ne=L.length;Ce<Ne;Ce++){let De=L[Ce];K=q[Ce];for(let Xe=0,it=De.length;Xe<it;Xe++){let O=D(De[Xe],K[Xe],_e);y?le(O.x,O.y+M[c-1].y,M[c-1].x+he):le(O.x,O.y,d+he)}}}qe(),ee();function qe(){let oe=n.length/3;if(u){let ae=0,he=F*ae;for(let _e=0;_e<Re;_e++){let Ce=ce[_e];Fe(Ce[2]+he,Ce[1]+he,Ce[0]+he)}ae=c+m*2,he=F*ae;for(let _e=0;_e<Re;_e++){let Ce=ce[_e];Fe(Ce[0]+he,Ce[1]+he,Ce[2]+he)}}else{for(let ae=0;ae<Re;ae++){let he=ce[ae];Fe(he[2],he[1],he[0])}for(let ae=0;ae<Re;ae++){let he=ce[ae];Fe(he[0]+F*c,he[1]+F*c,he[2]+F*c)}}r.addGroup(oe,n.length/3-oe,0)}function ee(){let oe=n.length/3,ae=0;de(R,ae),ae+=R.length;for(let he=0,_e=L.length;he<_e;he++){let Ce=L[he];de(Ce,ae),ae+=Ce.length}r.addGroup(oe,n.length/3-oe,1)}function de(oe,ae){let he=oe.length;for(;--he>=0;){let _e=he,Ce=he-1;Ce<0&&(Ce=oe.length-1);for(let Ne=0,De=c+m*2;Ne<De;Ne++){let Xe=F*Ne,it=F*(Ne+1),O=ae+_e+Xe,xt=ae+Ce+Xe,pt=ae+Ce+it,Ye=ae+_e+it;je(O,xt,pt,Ye)}}}function le(oe,ae,he){l.push(oe),l.push(ae),l.push(he)}function Fe(oe,ae,he){Me(oe),Me(ae),Me(he);let _e=n.length/3,Ce=_.generateTopUV(r,n,_e-3,_e-2,_e-1);st(Ce[0]),st(Ce[1]),st(Ce[2])}function je(oe,ae,he,_e){Me(oe),Me(ae),Me(_e),Me(ae),Me(he),Me(_e);let Ce=n.length/3,Ne=_.generateSideWallUV(r,n,Ce-6,Ce-3,Ce-2,Ce-1);st(Ne[0]),st(Ne[1]),st(Ne[3]),st(Ne[1]),st(Ne[2]),st(Ne[3])}function Me(oe){n.push(l[oe*3+0]),n.push(l[oe*3+1]),n.push(l[oe*3+2])}function st(oe){s.push(oe.x),s.push(oe.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return xm(i,r,e)}static fromJSON(e,i){let r=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=i[e.shapes[s]];r.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new to[n.type]().fromJSON(n)),new gd(r,e.options)}},ym={generateTopUV:function(t,e,i,r,n){let s=e[i*3],a=e[i*3+1],o=e[r*3],l=e[r*3+1],h=e[n*3],c=e[n*3+1];return[new ue(s,a),new ue(o,l),new ue(h,c)]},generateSideWallUV:function(t,e,i,r,n,s){let a=e[i*3],o=e[i*3+1],l=e[i*3+2],h=e[r*3],c=e[r*3+1],d=e[r*3+2],u=e[n*3],p=e[n*3+1],g=e[n*3+2],v=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(o-c)<Math.abs(a-h)?[new ue(a,1-l),new ue(h,1-d),new ue(u,1-g),new ue(v,1-f)]:[new ue(o,1-l),new ue(c,1-d),new ue(p,1-g),new ue(m,1-f)]}};function xm(t,e,i){if(i.shapes=[],Array.isArray(t))for(let r=0,n=t.length;r<n;r++){let s=t[r];i.shapes.push(s.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},e),e.extrudePath!==void 0&&(i.options.extrudePath=e.extrudePath.toJSON()),i}var qs=class vd extends Ws{constructor(e=1,i=0){let r=(1+Math.sqrt(5))/2,n=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new vd(e.radius,e.detail)}},Mm=class _d extends Ct{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],i=12,r=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:i,phiStart:r,phiLength:n},i=Math.floor(i),n=gt(n,0,Math.PI*2);let s=[],a=[],o=[],l=[],h=[],c=1/i,d=new P,u=new ue,p=new P,g=new P,v=new P,m=0,f=0;for(let _=0;_<=e.length-1;_++)switch(_){case 0:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[_+1].x-e[_].x,f=e[_+1].y-e[_].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let _=0;_<=i;_++){let M=r+_*c*n,y=Math.sin(M),b=Math.cos(M);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*y,d.y=e[E].y,d.z=e[E].x*b,a.push(d.x,d.y,d.z),u.x=_/i,u.y=E/(e.length-1),o.push(u.x,u.y);let C=l[3*E+0]*y,x=l[3*E+1],S=l[3*E+0]*b;h.push(C,x,S)}}for(let _=0;_<i;_++)for(let M=0;M<e.length-1;M++){let y=M+_*e.length,b=y,E=y+e.length,C=y+e.length+1,x=y+1;s.push(b,E,x),s.push(C,x,E)}this.setIndex(s),this.setAttribute("position",new Qe(a,3)),this.setAttribute("uv",new Qe(o,2)),this.setAttribute("normal",new Qe(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _d(e.points,e.segments,e.phiStart,e.phiLength)}},bm=class yd extends Ws{constructor(e=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,n,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new yd(e.radius,e.detail)}},wr=class xd extends Ct{constructor(e=1,i=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:n};let s=e/2,a=i/2,o=Math.floor(r),l=Math.floor(n),h=o+1,c=l+1,d=e/o,u=i/l,p=[],g=[],v=[],m=[];for(let f=0;f<c;f++){let _=f*u-a;for(let M=0;M<h;M++){let y=M*d-s;g.push(y,-_,0),v.push(0,0,1),m.push(M/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<o;_++){let M=_+h*f,y=_+h*(f+1),b=_+1+h*(f+1),E=_+1+h*f;p.push(M,y,E),p.push(y,b,E)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xd(e.width,e.height,e.widthSegments,e.heightSegments)}},Sm=class Md extends Ct{constructor(e=.5,i=1,r=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:n,thetaStart:s,thetaLength:a},r=Math.max(3,r),n=Math.max(1,n);let o=[],l=[],h=[],c=[],d=e,u=(i-e)/n,p=new P,g=new ue;for(let v=0;v<=n;v++){for(let m=0;m<=r;m++){let f=s+m/r*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/i+1)/2,g.y=(p.y/i+1)/2,c.push(g.x,g.y)}d+=u}for(let v=0;v<n;v++){let m=v*(r+1);for(let f=0;f<r;f++){let _=f+m,M=_,y=_+r+1,b=_+r+2,E=_+1;o.push(M,y,E),o.push(y,b,E)}}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Md(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},wm=class bd extends Ct{constructor(e=new cd([new ue(0,.5),new ue(-.5,-.5),new ue(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:i};let r=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let c=0;c<e.length;c++)h(e[c]),this.addGroup(o,l,c),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new Qe(n,3)),this.setAttribute("normal",new Qe(s,3)),this.setAttribute("uv",new Qe(a,2));function h(c){let d=n.length/3,u=c.extractPoints(i),p=u.shape,g=u.holes;ln.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let _=g[m];ln.isClockWise(_)===!0&&(g[m]=_.reverse())}let v=ln.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let _=g[m];p=p.concat(_)}for(let m=0,f=p.length;m<f;m++){let _=p[m];n.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let m=0,f=v.length;m<f;m++){let _=v[m],M=_[0]+d,y=_[1]+d,b=_[2]+d;r.push(M,y,b),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),i=this.parameters.shapes;return Em(i,e)}static fromJSON(e,i){let r=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=i[e.shapes[n]];r.push(a)}return new bd(r,e.curveSegments)}};function Em(t,e){if(e.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let n=t[i];e.shapes.push(n.uuid)}else e.shapes.push(t.uuid);return e}var Er=class Sd extends Ct{constructor(e=1,i=32,r=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(a+o,Math.PI),h=0,c=[],d=new P,u=new P,p=[],g=[],v=[],m=[];for(let f=0;f<=r;f++){let _=[],M=f/r,y=a+M*o,b=e*Math.cos(y),E=Math.sqrt(e*e-b*b),C=0;f===0&&a===0?C=.5/i:f===r&&l===Math.PI&&(C=-.5/i);for(let x=0;x<=i;x++){let S=x/i,N=n+S*s;d.x=-E*Math.cos(N),d.y=b,d.z=E*Math.sin(N),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(S+C,1-M),_.push(h++)}c.push(_)}for(let f=0;f<r;f++)for(let _=0;_<i;_++){let M=c[f][_+1],y=c[f][_],b=c[f+1][_],E=c[f+1][_+1];(f!==0||a>0)&&p.push(M,y,E),(f!==r-1||l<Math.PI)&&p.push(y,b,E)}this.setIndex(p),this.setAttribute("position",new Qe(g,3)),this.setAttribute("normal",new Qe(v,3)),this.setAttribute("uv",new Qe(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Tm=class wd extends Ws{constructor(e=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,n,e,i),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new wd(e.radius,e.detail)}},Lh=class Ed extends Ct{constructor(e=1,i=.4,r=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},r=Math.floor(r),n=Math.floor(n);let l=[],h=[],c=[],d=[],u=new P,p=new P,g=new P;for(let v=0;v<=r;v++){let m=a+v/r*o;for(let f=0;f<=n;f++){let _=f/n*s;p.x=(e+i*Math.cos(m))*Math.cos(_),p.y=(e+i*Math.cos(m))*Math.sin(_),p.z=i*Math.sin(m),h.push(p.x,p.y,p.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),g.subVectors(p,u).normalize(),c.push(g.x,g.y,g.z),d.push(f/n),d.push(v/r)}}for(let v=1;v<=r;v++)for(let m=1;m<=n;m++){let f=(n+1)*v+m-1,_=(n+1)*(v-1)+m-1,M=(n+1)*(v-1)+m,y=(n+1)*v+m;l.push(f,_,y),l.push(_,M,y)}this.setIndex(l),this.setAttribute("position",new Qe(h,3)),this.setAttribute("normal",new Qe(c,3)),this.setAttribute("uv",new Qe(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ed(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Am=class Td extends Ct{constructor(e=1,i=.4,r=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:i,tubularSegments:r,radialSegments:n,p:s,q:a},r=Math.floor(r),n=Math.floor(n);let o=[],l=[],h=[],c=[],d=new P,u=new P,p=new P,g=new P,v=new P,m=new P,f=new P;for(let M=0;M<=r;++M){let y=M/r*s*Math.PI*2;_(y,s,a,e,p),_(y+.01,s,a,e,g),m.subVectors(g,p),f.addVectors(g,p),v.crossVectors(m,f),f.crossVectors(v,m),v.normalize(),f.normalize();for(let b=0;b<=n;++b){let E=b/n*Math.PI*2,C=-i*Math.cos(E),x=i*Math.sin(E);d.x=p.x+(C*f.x+x*v.x),d.y=p.y+(C*f.y+x*v.y),d.z=p.z+(C*f.z+x*v.z),l.push(d.x,d.y,d.z),u.subVectors(d,p).normalize(),h.push(u.x,u.y,u.z),c.push(M/r),c.push(b/n)}}for(let M=1;M<=r;M++)for(let y=1;y<=n;y++){let b=(n+1)*(M-1)+(y-1),E=(n+1)*M+(y-1),C=(n+1)*M+y,x=(n+1)*(M-1)+y;o.push(b,E,x),o.push(E,C,x)}this.setIndex(o),this.setAttribute("position",new Qe(l,3)),this.setAttribute("normal",new Qe(h,3)),this.setAttribute("uv",new Qe(c,2));function _(M,y,b,E,C){let x=Math.cos(M),S=Math.sin(M),N=b/y*M,L=Math.cos(N);C.x=E*(2+L)*.5*x,C.y=E*(2+L)*S*.5,C.z=E*Math.sin(N)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Td(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Cm=class Ad extends Ct{constructor(e=new ld(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),i=64,r=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:i,radius:r,radialSegments:n,closed:s};let a=e.computeFrenetFrames(i,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new P,l=new P,h=new ue,c=new P,d=[],u=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new Qe(d,3)),this.setAttribute("normal",new Qe(u,3)),this.setAttribute("uv",new Qe(p,2));function v(){for(let M=0;M<i;M++)m(M);m(s===!1?i:0),_(),f()}function m(M){c=e.getPointAt(M/i,c);let y=a.normals[M],b=a.binormals[M];for(let E=0;E<=n;E++){let C=E/n*Math.PI*2,x=Math.sin(C),S=-Math.cos(C);l.x=S*y.x+x*b.x,l.y=S*y.y+x*b.y,l.z=S*y.z+x*b.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=c.x+r*l.x,o.y=c.y+r*l.y,o.z=c.z+r*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let M=1;M<=i;M++)for(let y=1;y<=n;y++){let b=(n+1)*(M-1)+(y-1),E=(n+1)*M+(y-1),C=(n+1)*M+y,x=(n+1)*(M-1)+y;g.push(b,E,x),g.push(E,C,x)}}function _(){for(let M=0;M<=i;M++)for(let y=0;y<=n;y++)h.x=M/i,h.y=y/n,p.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Ad(new to[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},Rm=class extends Ct{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,r=new P,n=new P;if(t.index!==null){let s=t.attributes.position,a=t.index,o=t.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let c=o[l],d=c.start,u=c.count;for(let p=d,g=d+u;p<g;p+=3)for(let v=0;v<3;v++){let m=a.getX(p+v),f=a.getX(p+(v+1)%3);r.fromBufferAttribute(s,m),n.fromBufferAttribute(s,f),$c(r,n,i)===!0&&(e.push(r.x,r.y,r.z),e.push(n.x,n.y,n.z))}}}else{let s=t.attributes.position;for(let a=0,o=s.count/3;a<o;a++)for(let l=0;l<3;l++){let h=3*a+l,c=3*a+(l+1)%3;r.fromBufferAttribute(s,h),n.fromBufferAttribute(s,c),$c(r,n,i)===!0&&(e.push(r.x,r.y,r.z),e.push(n.x,n.y,n.z))}}this.setAttribute("position",new Qe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function $c(t,e,i){let r=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return i.has(r)===!0||i.has(n)===!0?!1:(i.add(r),i.add(n),!0)}var sS=Object.freeze({__proto__:null,BoxGeometry:Zt,CapsuleGeometry:zf,CircleGeometry:Rh,ConeGeometry:gn,CylinderGeometry:ui,DodecahedronGeometry:Vf,EdgesGeometry:Hf,ExtrudeGeometry:_m,IcosahedronGeometry:qs,LatheGeometry:Mm,OctahedronGeometry:bm,PlaneGeometry:wr,PolyhedronGeometry:Ws,RingGeometry:Sm,ShapeGeometry:wm,SphereGeometry:Er,TetrahedronGeometry:Tm,TorusGeometry:Lh,TorusKnotGeometry:Am,TubeGeometry:Cm,WireframeGeometry:Rm});function rs(t){let e={};for(let i in t){e[i]={};for(let r in t[i]){let n=t[i][r];if(Jc(n))n.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=n.clone();else if(Array.isArray(n))if(Jc(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[i][r]=s}else e[i][r]=n.slice();else e[i][r]=n}}return e}function pi(t){let e={};for(let i=0;i<t.length;i++){let r=rs(t[i]);for(let n in r)e[n]=r[n]}return e}function Jc(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Im(t){let e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function Cd(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var Yi={clone:rs,merge:pi},Pm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zt=class extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pm,this.fragmentShader=Lm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Im(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let n=this.uniforms[r].value;n&&n.isTexture?e.uniforms[r]={type:"t",value:n.toJSON(t).uuid}:n&&n.isColor?e.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?e.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?e.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?e.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?e.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?e.uniforms[r]={type:"m4",value:n.toArray()}:e.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Ae().setHex(r.value);break;case"v2":this.uniforms[i].value=new ue().fromArray(r.value);break;case"v3":this.uniforms[i].value=new P().fromArray(r.value);break;case"v4":this.uniforms[i].value=new It().fromArray(r.value);break;case"m3":this.uniforms[i].value=new ut().fromArray(r.value);break;case"m4":this.uniforms[i].value=new lt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Nh=class extends zt{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Pt=class extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ae(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ae(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hh,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Nm=class extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Dm=class extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Un(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function gl(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Xs=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],n=e[i-1];i:{e:{let s;t:{r:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<n)break r;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(n=r,r=e[++i],t<r)break e}s=e.length;break t}if(!(t>=n)){let a=e[1];t<a&&(i=2,n=a);for(let o=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=n,n=e[--i-1],t>=n)break e}s=i,i=0;break t}break i}for(;i<s;){let a=i+s>>>1;t<e[a]?s=a:i=a+1}if(r=e[i],n=e[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=t*r;for(let s=0;s!==r;++s)e[s]=i[n+s];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Bm=class extends Xs{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yc,endingEnd:yc}}intervalChanged_(t,e,i){let r=this.parameterPositions,n=t-2,s=t+1,a=r[n],o=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case xc:n=t,a=2*e-i;break;case Mc:n=r.length-2,a=e+r[n]-r[n+1];break;default:n=t,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case xc:s=t,o=2*i-e;break;case Mc:s=1,o=i+r[1]-r[0];break;default:s=t-1,o=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-i),this._offsetPrev=n*h,this._offsetNext=s*h}interpolate_(t,e,i,r){let n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,h=this._offsetPrev,c=this._offsetNext,d=this._weightPrev,u=this._weightNext,p=(i-e)/(r-e),g=p*p,v=g*p,m=-d*v+2*d*g-d*p,f=(1+d)*v+(-1.5-2*d)*g+(-.5+d)*p+1,_=(-1-u)*v+(1.5+u)*g+.5*p,M=u*v-u*g;for(let y=0;y!==a;++y)n[y]=m*s[h+y]+f*s[l+y]+_*s[o+y]+M*s[c+y];return n}},Um=class extends Xs{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,h=(i-e)/(r-e),c=1-h;for(let d=0;d!==a;++d)n[d]=s[l+d]*c+s[o+d]*h;return n}},Fm=class extends Xs{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Om=class extends Xs{interpolate_(t,e,i,r){let n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,h=this.inTangents,c=this.outTangents;if(!h||!c){let p=(i-e)/(r-e),g=1-p;for(let v=0;v!==a;++v)n[v]=s[l+v]*g+s[o+v]*p;return n}let d=a*2,u=t-1;for(let p=0;p!==a;++p){let g=s[l+p],v=s[o+p],m=u*d+p*2,f=c[m],_=c[m+1],M=t*d+p*2,y=h[M],b=h[M+1],E=Vm(i,e,f,y,r);n[p]=Rd(E,g,_,b,v)}return n}};function Rd(t,e,i,r,n){let s=1-t;return s*s*s*e+3*s*s*t*i+3*s*t*t*r+t*t*t*n}function zm(t,e,i,r,n){let s=1-t;return 3*s*s*(i-e)+6*s*t*(r-i)+3*t*t*(n-r)}function Vm(t,e,i,r,n){let s=(t-e)/(n-e);for(let a=0;a<8;a++){let o=Rd(s,e,i,r,n)-t;if(Math.abs(o)<1e-10)break;let l=zm(s,e,i,r,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var or=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Un(e,this.TimeBufferType),this.values=Un(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Un(t.times,Array),values:Un(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),gl(t.settings)&&(i.settings={inTangents:Un(t.settings.inTangents,Array),outTangents:Un(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Fm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Um(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bm(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Om(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ka:e=this.InterpolantFactoryMethodDiscrete;break;case lh:e=this.InterpolantFactoryMethodLinear;break;case ko:e=this.InterpolantFactoryMethodSmooth;break;case _c:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return et("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ka;case this.InterpolantFactoryMethodLinear:return lh;case this.InterpolantFactoryMethodSmooth:return ko;case this.InterpolantFactoryMethodBezier:return _c}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;gl(this.settings)&&(Qc(this.settings.inTangents,t),Qc(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,n=0,s=r-1;for(;n!==r&&i[n]<t;)++n;for(;s!==-1&&i[s]>e;)--s;if(++s,n!==0||s!==r){n>=s&&(s=Math.max(s,1),n=s-1);let a=this.getValueSize();this.times=i.slice(n,s),this.values=this.values.slice(n*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(tt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,n=i.length;n===0&&(tt("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==n;a++){let o=i[a];if(typeof o=="number"&&isNaN(o)){tt("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){tt("KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(r!==void 0&&lf(r))for(let a=0,o=r.length;a!==o;++a){let l=r[a];if(isNaN(l)){tt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===ko,n=t.length-1,s=1;for(let a=1;a<n;++a){let o=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)o=!0;else{let c=a*i,d=c-i,u=c+i;for(let p=0;p!==i;++p){let g=e[c+p];if(g!==e[d+p]||g!==e[u+p]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];let c=a*i,d=s*i;for(let u=0;u!==i;++u)e[d+u]=e[c+u]}++s}}if(n>0){t[s]=t[n];for(let a=n*i,o=s*i,l=0;l!==i;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,gl(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function Qc(t,e){for(let i=0,r=t.length;i!==r;i+=2)t[i]*=e}or.prototype.ValueTypeName="";or.prototype.TimeBufferType=Float32Array;or.prototype.ValueBufferType=Float32Array;or.prototype.DefaultInterpolation=lh;var js=class extends or{constructor(t,e,i){super(t,e,i)}};js.prototype.ValueTypeName="bool";js.prototype.ValueBufferType=Array;js.prototype.DefaultInterpolation=Ka;js.prototype.InterpolantFactoryMethodLinear=void 0;js.prototype.InterpolantFactoryMethodSmooth=void 0;var Hm=class extends or{constructor(t,e,i,r){super(t,e,i,r)}};Hm.prototype.ValueTypeName="color";var Gm=class extends or{constructor(t,e,i,r){super(t,e,i,r)}};Gm.prototype.ValueTypeName="number";var km=class extends Xs{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(i-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ii.slerpFlat(n,0,s,l-a,s,l,o);return n}},Id=class extends or{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new km(this.times,this.values,this.getValueSize(),t)}};Id.prototype.ValueTypeName="quaternion";Id.prototype.InterpolantFactoryMethodSmooth=void 0;var Ys=class extends or{constructor(t,e,i){super(t,e,i)}};Ys.prototype.ValueTypeName="string";Ys.prototype.ValueBufferType=Array;Ys.prototype.DefaultInterpolation=Ka;Ys.prototype.InterpolantFactoryMethodLinear=void 0;Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var Wm=class extends or{constructor(t,e,i,r){super(t,e,i,r)}};Wm.prototype.ValueTypeName="vector";var vl={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(eu(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!eu(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function eu(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var qm=class{constructor(t,e,i){let r=this,n=!1,s=0,a=0,o,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,n===!1&&r.onStart!==void 0&&r.onStart(h,s,a),n=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,c){return l.push(h,c),this},this.removeHandler=function(h){let c=l.indexOf(h);return c!==-1&&l.splice(c,2),this},this.getHandler=function(h){for(let c=0,d=l.length;c<d;c+=2){let u=l[c],p=l[c+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xm=new qm,Dh=class{constructor(t){this.manager=t!==void 0?t:Xm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,n){i.load(t,r,e,n)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Dh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fn=new WeakMap,jm=class extends Dh{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let n=this,s=vl.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)n.manager.itemStart(t),setTimeout(function(){e&&e(s),n.manager.itemEnd(t)},0);else{let c=Fn.get(s);c===void 0&&(c=[],Fn.set(s,c)),c.push({onLoad:e,onError:r})}return s}let a=Os("img");function o(){h(),e&&e(this);let c=Fn.get(this)||[];for(let d=0;d<c.length;d++){let u=c[d];u.onLoad&&u.onLoad(this)}Fn.delete(this),n.manager.itemEnd(t)}function l(c){h(),r&&r(c),vl.remove(`image:${t}`);let d=Fn.get(this)||[];for(let u=0;u<d.length;u++){let p=d[u];p.onError&&p.onError(c)}Fn.delete(this),n.manager.itemError(t),n.manager.itemEnd(t)}function h(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),vl.add(`image:${t}`,a),n.manager.itemStart(t),a.src=t,a}};var Pd=class extends Dh{constructor(t){super(t)}load(t,e,i,r){let n=new Pi,s=new jm(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){n.image=a,n.needsUpdate=!0,e!==void 0&&e(n)},i,r),n}},Bh=class extends ci{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ae(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ld=class extends Bh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ci.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ae(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},_l=new lt,tu=new P,iu=new P,Nd=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.mapType=Ri,this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ts,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;tu.setFromMatrixPosition(t.matrixWorld),e.position.copy(tu),iu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(iu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){_l.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(_l,t.coordinateSystem,t.reversedDepth);let n=this._frameExtents,s=r?r.z/n.x:1,a=r?r.w/n.y:1,o=r?r.x/n.x:0,l=r?r.y/n.y:0;t.coordinateSystem===Fs||t.reversedDepth?e.set(.5*s,0,0,.5*s+o,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*s,0,0,.5*s+o,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(_l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ba=new P,Ua=new Ii,Qi=new P,Uh=class extends ci{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ba,Ua,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,Ua,Qi.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ba,Ua,Qi),Qi.x===1&&Qi.y===1&&Qi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ba,Ua,Qi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Vr=new P,ru=new ue,nu=new ue,yi=class extends Uh{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qa*2*Math.atan(Math.tan(Wa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Vr.x,Vr.y).multiplyScalar(-t/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vr.x,Vr.y).multiplyScalar(-t/Vr.z)}getViewSize(t,e){return this.getViewBounds(t,ru,nu),e.subVectors(nu,ru)}setViewOffset(t,e,i,r,n,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wa*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,n=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let o=s.fullWidth,l=s.fullHeight;n+=s.offsetX*r/o,e-=s.offsetY*i/l,r*=s.width/o,i*=s.height/l}let a=this.filmOffset;a!==0&&(n+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ym=class extends Nd{constructor(){super(new yi(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,i=Qa*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,n=t.distance||e.far;(i!==e.fov||r!==e.aspect||n!==e.far)&&(e.fov=i,e.aspect=r,e.far=n,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Dd=class extends Bh{constructor(t,e,i=0,r=Math.PI/3,n=0,s=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ci.DEFAULT_UP),this.updateMatrix(),this.target=new ci,this.distance=i,this.angle=r,this.penumbra=n,this.decay=s,this.map=null,this.shadow=new Ym}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var Zs=class extends Uh{constructor(t=-1,e=1,i=1,r=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,n=i-t,s=i+t,a=r+e,o=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,a-=h*this.view.offsetY,o=a-h*this.view.height}this.projectionMatrix.makeOrthographic(n,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Zm=class extends Nd{constructor(){super(new Zs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fh=class extends Bh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ci.DEFAULT_UP),this.updateMatrix(),this.target=new ci,this.shadow=new Zm}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var aS=new lt,oS=new lt,lS=new lt;var On=-90,zn=1,Km=class extends ci{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new yi(On,zn,t,e);r.layers=this.layers,this.add(r);let n=new yi(On,zn,t,e);n.layers=this.layers,this.add(n);let s=new yi(On,zn,t,e);s.layers=this.layers,this.add(s);let a=new yi(On,zn,t,e);a.layers=this.layers,this.add(a);let o=new yi(On,zn,t,e);o.layers=this.layers,this.add(o);let l=new yi(On,zn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,n,s,a,o]=e;for(let l of e)this.remove(l);if(t===Xi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Fs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[n,s,a,o,l,h]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;t.isWebGLRenderer===!0?v=t.state.buffers.depth.getReversed():v=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,n),t.setRenderTarget(i,1,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,2,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,4,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(c,d,u),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},$m=class extends yi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Bd=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Jm.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Jm(){this._document.hidden===!1&&this.reset()}var hS=new P,cS=new Ii,uS=new P,dS=new P,pS=new P;var fS=new P,mS=new Ii,gS=new P,vS=new P;var Oh="\\[\\]\\.:\\/",Qm=new RegExp("["+Oh+"]","g"),zh="[^"+Oh+"]",eg="[^"+Oh.replace("\\.","")+"]",tg=/((?:WC+[\/:])*)/.source.replace("WC",zh),ig=/(WCOD+)?/.source.replace("WCOD",eg),rg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zh),ng=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zh),sg=new RegExp("^"+tg+ig+rg+ng+"$"),ag=["material","materials","bones","map"],og=class{constructor(t,e,i){let r=i||Gt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Gt=class Wn{constructor(e,i,r){this.path=i,this.parsedPath=r||Wn.parseTrackName(i),this.node=Wn.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,r){return e&&e.isAnimationObjectGroup?new Wn.Composite(e,i,r):new Wn(e,i,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qm,"")}static parseTrackName(e){let i=sg.exec(e);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},n=r.nodeName&&r.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=r.nodeName.substring(n+1);ag.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,n),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){let r=e.skeleton.getBoneByName(i);if(r!==void 0)return r}if(e.children){let r=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},n=r(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){let r=this.resolvedProperty;for(let n=0,s=r.length;n!==s;++n)e[i++]=r[n]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){let r=this.resolvedProperty;for(let n=0,s=r.length;n!==s;++n)r[n]=e[i++]}_setValue_array_setNeedsUpdate(e,i){let r=this.resolvedProperty;for(let n=0,s=r.length;n!==s;++n)r[n]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){let r=this.resolvedProperty;for(let n=0,s=r.length;n!==s;++n)r[n]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node,i=this.parsedPath,r=i.objectName,n=i.propertyName,s=i.propertyIndex;if(e||(e=Wn.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){tt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){tt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let c=0;c<e.length;c++)if(e[c].name===h){h=c;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){tt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){tt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){tt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(h!==void 0){if(e[h]===void 0){tt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[n];if(a===void 0){let h=i.nodeName;tt("PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){tt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Gt.Composite=og;Gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Gt.prototype.GetterByBindingType=[Gt.prototype._getValue_direct,Gt.prototype._getValue_array,Gt.prototype._getValue_arrayElement,Gt.prototype._getValue_toArray];Gt.prototype.SetterByBindingTypeAndVersioning=[[Gt.prototype._setValue_direct,Gt.prototype._setValue_direct_setNeedsUpdate,Gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_array,Gt.prototype._setValue_array_setNeedsUpdate,Gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_arrayElement,Gt.prototype._setValue_arrayElement_setNeedsUpdate,Gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Gt.prototype._setValue_fromArray,Gt.prototype._setValue_fromArray_setNeedsUpdate,Gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _S=new Float32Array(1);var yS=new lt;var Jn,xS=(Jn=class{constructor(e,i,r,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,n){let s=this.elements;return s[0]=e,s[2]=i,s[1]=r,s[3]=n,this}},Jn.prototype.isMatrix2=!0,Jn),MS=new ue;var bS=new P,SS=new P,wS=new P,ES=new P,TS=new P,AS=new P,CS=new P;var RS=new P;var IS=new P,PS=new lt,LS=new lt;var NS=new P,DS=new Ae,BS=new Ae;var US=new P,FS=new P,OS=new P;var zS=new P,VS=new Uh;var HS=new Mr;var GS=new P;function su(t,e,i,r){let n=lg(r);switch(i){case Uu:return t*e;case yh:return t*e/n.components*n.byteLength;case xh:return t*e/n.components*n.byteLength;case pn:return t*e*2/n.components*n.byteLength;case Mh:return t*e*2/n.components*n.byteLength;case Fu:return t*e*3/n.components*n.byteLength;case qi:return t*e*4/n.components*n.byteLength;case bh:return t*e*4/n.components*n.byteLength;case Va:case Ha:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ga:case ka:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nl:case Bl:return Math.max(t,16)*Math.max(e,8)/4;case Ll:case Dl:return Math.max(t,8)*Math.max(e,8)/2;case Ul:case Fl:case zl:case Vl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Ya:case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wl:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ql:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Xl:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Zl:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Kl:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case $l:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Jl:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ql:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case th:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ih:case rh:case nh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case sh:case ah:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Za:case oh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function lg(t){switch(t){case Ri:case Lu:return{byteLength:1,components:1};case Bs:case Nu:case hi:return{byteLength:2,components:1};case vh:case _h:return{byteLength:2,components:4};case nr:case gh:case Wi:return{byteLength:4,components:1};case Du:case Bu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Ud(){let t=null,e=!1,i=null,r=null;function n(s,a){r=t.requestAnimationFrame(n),i(s,a)}return{start:function(){e!==!0&&i!==null&&t!==null&&(r=t.requestAnimationFrame(n),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){i=s},setContext:function(s){t=s}}}function hg(t){let e=new WeakMap;function i(o,l){let h=o.array,c=o.usage,d=h.byteLength,u=t.createBuffer();t.bindBuffer(l,u),t.bufferData(l,h,c),o.onUploadCallback();let p;if(h instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=t.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=t.SHORT;else if(h instanceof Uint32Array)p=t.UNSIGNED_INT;else if(h instanceof Int32Array)p=t.INT;else if(h instanceof Int8Array)p=t.BYTE;else if(h instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let c=l.array,d=l.updateRanges;if(t.bindBuffer(h,o),d.length===0)t.bufferSubData(h,0,c);else{d.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<d.length;p++){let g=d[u],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let p=0,g=d.length;p<g;p++){let v=d[p];t.bufferSubData(h,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=e.get(o);if(h===void 0)e.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:n,remove:s,update:a}}var cg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ug=`#ifdef USE_ALPHAHASH
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
#endif`,dg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
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
#endif`,vg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_g=`#ifdef USE_BATCHING
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
#endif`,yg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sg=`#ifdef USE_IRIDESCENCE
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
#endif`,wg=`#ifdef USE_BUMPMAP
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
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ng=`#define PI 3.141592653589793
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
} // validated`,Dg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bg=`vec3 transformedNormal = objectNormal;
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
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Og=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gg=`#ifdef USE_ENVMAP
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
#endif`,kg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xg=`#ifdef USE_ENVMAP
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
#endif`,jg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$g=`#ifdef USE_GRADIENTMAP
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
}`,Jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,e0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,i0=`#ifdef USE_ENVMAP
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
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,n0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,s0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,o0=`PhysicalMaterial material;
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
#endif`,l0=`uniform sampler2D dfgLUT;
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
}`,h0=`
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
#endif`,c0=`#if defined( RE_IndirectDiffuse )
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
#endif`,u0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,d0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,f0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,x0=`#if defined( USE_POINTS_UV )
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
#endif`,M0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
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
#endif`,A0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
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
#endif`,D0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,F0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,O0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,k0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Z0=`float getShadowMask() {
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
}`,K0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$0=`#ifdef USE_SKINNING
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
#endif`,J0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q0=`#ifdef USE_SKINNING
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nv=`#ifdef USE_TRANSMISSION
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
#endif`,sv=`#ifdef USE_TRANSMISSION
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
#endif`,av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,vv=`#if DEPTH_PACKING == 3200
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
}`,_v=`#define DISTANCE
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
}`,yv=`#define DISTANCE
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
}`,xv=`varying vec3 vWorldDirection;
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
}`,bv=`uniform float scale;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Tv=`#define LAMBERT
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
}`,Cv=`#define MATCAP
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
}`,Rv=`#define MATCAP
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
}`,Bv=`#define STANDARD
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
}`,Uv=`#define TOON
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
}`,Ov=`uniform float size;
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
}`,Vv=`#include <common>
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
}`,Hv=`uniform vec3 color;
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
}`,kv=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:cg,alphahash_pars_fragment:ug,alphamap_fragment:dg,alphamap_pars_fragment:pg,alphatest_fragment:fg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:vg,batching_pars_vertex:_g,batching_vertex:yg,begin_vertex:xg,beginnormal_vertex:Mg,bsdfs:bg,iridescence_fragment:Sg,bumpmap_pars_fragment:wg,clipping_planes_fragment:Eg,clipping_planes_pars_fragment:Tg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:Cg,color_fragment:Rg,color_pars_fragment:Ig,color_pars_vertex:Pg,color_vertex:Lg,common:Ng,cube_uv_reflection_fragment:Dg,defaultnormal_vertex:Bg,displacementmap_pars_vertex:Ug,displacementmap_vertex:Fg,emissivemap_fragment:Og,emissivemap_pars_fragment:zg,colorspace_fragment:Vg,colorspace_pars_fragment:Hg,envmap_fragment:Gg,envmap_common_pars_fragment:kg,envmap_pars_fragment:Wg,envmap_pars_vertex:qg,envmap_physical_pars_fragment:i0,envmap_vertex:Xg,fog_vertex:jg,fog_pars_vertex:Yg,fog_fragment:Zg,fog_pars_fragment:Kg,gradientmap_pars_fragment:$g,lightmap_pars_fragment:Jg,lights_lambert_fragment:Qg,lights_lambert_pars_fragment:e0,lights_pars_begin:t0,lights_toon_fragment:r0,lights_toon_pars_fragment:n0,lights_phong_fragment:s0,lights_phong_pars_fragment:a0,lights_physical_fragment:o0,lights_physical_pars_fragment:l0,lights_fragment_begin:h0,lights_fragment_maps:c0,lights_fragment_end:u0,lightprobes_pars_fragment:d0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:f0,logdepthbuf_pars_vertex:m0,logdepthbuf_vertex:g0,map_fragment:v0,map_pars_fragment:_0,map_particle_fragment:y0,map_particle_pars_fragment:x0,metalnessmap_fragment:M0,metalnessmap_pars_fragment:b0,morphinstance_vertex:S0,morphcolor_vertex:w0,morphnormal_vertex:E0,morphtarget_pars_vertex:T0,morphtarget_vertex:A0,normal_fragment_begin:C0,normal_fragment_maps:R0,normal_pars_fragment:I0,normal_pars_vertex:P0,normal_vertex:L0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:D0,clearcoat_normal_fragment_maps:B0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:F0,opaque_fragment:O0,packing:z0,premultiplied_alpha_fragment:V0,project_vertex:H0,dithering_fragment:G0,dithering_pars_fragment:k0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:q0,shadowmap_pars_fragment:X0,shadowmap_pars_vertex:j0,shadowmap_vertex:Y0,shadowmask_pars_fragment:Z0,skinbase_vertex:K0,skinning_pars_vertex:$0,skinning_vertex:J0,skinnormal_vertex:Q0,specularmap_fragment:ev,specularmap_pars_fragment:tv,tonemapping_fragment:iv,tonemapping_pars_fragment:rv,transmission_fragment:nv,transmission_pars_fragment:sv,uv_pars_fragment:av,uv_pars_vertex:ov,uv_vertex:lv,worldpos_vertex:hv,background_vert:cv,background_frag:uv,backgroundCube_vert:dv,backgroundCube_frag:pv,cube_vert:fv,cube_frag:mv,depth_vert:gv,depth_frag:vv,distance_vert:_v,distance_frag:yv,equirect_vert:xv,equirect_frag:Mv,linedashed_vert:bv,linedashed_frag:Sv,meshbasic_vert:wv,meshbasic_frag:Ev,meshlambert_vert:Tv,meshlambert_frag:Av,meshmatcap_vert:Cv,meshmatcap_frag:Rv,meshnormal_vert:Iv,meshnormal_frag:Pv,meshphong_vert:Lv,meshphong_frag:Nv,meshphysical_vert:Dv,meshphysical_frag:Bv,meshtoon_vert:Uv,meshtoon_frag:Fv,points_vert:Ov,points_frag:zv,shadow_vert:Vv,shadow_frag:Hv,sprite_vert:Gv,sprite_frag:kv},Ee={common:{diffuse:{value:new Ae(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ae(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new P},probesMax:{value:new P},probesResolution:{value:new P}},points:{diffuse:{value:new Ae(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Ae(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},tr={basic:{uniforms:pi([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:pi([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ae(0)},envMapIntensity:{value:1}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:pi([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ae(0)},specular:{value:new Ae(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:pi([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ae(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:pi([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ae(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:pi([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:pi([Ee.points,Ee.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:pi([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:pi([Ee.common,Ee.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:pi([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:pi([Ee.sprite,Ee.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:pi([Ee.common,Ee.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:pi([Ee.lights,Ee.fog,{color:{value:new Ae(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};tr.physical={uniforms:pi([tr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Ae(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Ae(0)},specularColor:{value:new Ae(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};var Fa={r:0,b:0,g:0},Wv=new lt,Fd=new ut;Fd.set(-1,0,0,0,1,0,0,0,1);function qv(t,e,i,r,n,s){let a=new Ae(0),o=n===!0?0:1,l,h,c=null,d=0,u=null;function p(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){let y=_.backgroundBlurriness>0;M=e.get(M,y)}return M}function g(_){let M=!1,y=p(_);y===null?m(a,o):y&&y.isColor&&(m(y,1),M=!0);let b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(_,M){let y=p(M);y&&(y.isCubeTexture||y.mapping===lo)?(h===void 0&&(h=new Ze(new Zt(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:rs(tr.backgroundCube.uniforms),vertexShader:tr.backgroundCube.vertexShader,fragmentShader:tr.backgroundCube.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=y,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Wv.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(Fd),h.material.toneMapped=_t.getTransfer(y.colorSpace)!==St,(c!==y||d!==y.version||u!==t.toneMapping)&&(h.material.needsUpdate=!0,c=y,d=y.version,u=t.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ze(new wr(2,2),new zt({name:"BackgroundMaterial",uniforms:rs(tr.background.uniforms),vertexShader:tr.background.vertexShader,fragmentShader:tr.background.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=_t.getTransfer(y.colorSpace)!==St,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(c!==y||d!==y.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,c=y,d=y.version,u=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,M){_.getRGB(Fa,Cd(t)),i.buffers.color.setClear(Fa.r,Fa.g,Fa.b,M,s)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:v,dispose:f}}function Xv(t,e){let i=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},n=u(null),s=n,a=!1;function o(L,B,U,R,D){let F=!1,W=d(L,R,U,B);s!==W&&(s=W,h(s.object)),F=p(L,R,U,D),F&&g(L,R,U,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,y(L,B,U,R),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return t.createVertexArray()}function h(L){return t.bindVertexArray(L)}function c(L){return t.deleteVertexArray(L)}function d(L,B,U,R){let D=R.wireframe===!0,F=r[B.id];F===void 0&&(F={},r[B.id]=F);let W=L.isInstancedMesh===!0?L.id:0,te=F[W];te===void 0&&(te={},F[W]=te);let q=te[U.id];q===void 0&&(q={},te[U.id]=q);let K=q[D];return K===void 0&&(K=u(l()),q[D]=K),K}function u(L){let B=[],U=[],R=[];for(let D=0;D<i;D++)B[D]=0,U[D]=0,R[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:U,attributeDivisors:R,object:L,attributes:{},index:null}}function p(L,B,U,R){let D=s.attributes,F=B.attributes,W=0,te=U.getAttributes();for(let q in te)if(te[q].location>=0){let K=D[q],re=F[q];if(re===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;W++}return s.attributesNum!==W||s.index!==R}function g(L,B,U,R){let D={},F=B.attributes,W=0,te=U.getAttributes();for(let q in te)if(te[q].location>=0){let K=F[q];K===void 0&&(q==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),q==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));let re={};re.attribute=K,K&&K.data&&(re.data=K.data),D[q]=re,W++}s.attributes=D,s.attributesNum=W,s.index=R}function v(){let L=s.newAttributes;for(let B=0,U=L.length;B<U;B++)L[B]=0}function m(L){f(L,0)}function f(L,B){let U=s.newAttributes,R=s.enabledAttributes,D=s.attributeDivisors;U[L]=1,R[L]===0&&(t.enableVertexAttribArray(L),R[L]=1),D[L]!==B&&(t.vertexAttribDivisor(L,B),D[L]=B)}function _(){let L=s.newAttributes,B=s.enabledAttributes;for(let U=0,R=B.length;U<R;U++)B[U]!==L[U]&&(t.disableVertexAttribArray(U),B[U]=0)}function M(L,B,U,R,D,F,W){W===!0?t.vertexAttribIPointer(L,B,U,D,F):t.vertexAttribPointer(L,B,U,R,D,F)}function y(L,B,U,R){v();let D=R.attributes,F=U.getAttributes(),W=B.defaultAttributeValues;for(let te in F){let q=F[te];if(q.location>=0){let K=D[te];if(K===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(K=L.instanceColor)),K!==void 0){let re=K.normalized,ce=K.itemSize,Re=e.get(K);if(Re===void 0)continue;let dt=Re.buffer,qe=Re.type,ee=Re.bytesPerElement,de=qe===t.INT||qe===t.UNSIGNED_INT||K.gpuType===gh;if(K.isInterleavedBufferAttribute){let le=K.data,Fe=le.stride,je=K.offset;if(le.isInstancedInterleavedBuffer){for(let Me=0;Me<q.locationSize;Me++)f(q.location+Me,le.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Me=0;Me<q.locationSize;Me++)m(q.location+Me);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let Me=0;Me<q.locationSize;Me++)M(q.location+Me,ce/q.locationSize,qe,re,Fe*ee,(je+ce/q.locationSize*Me)*ee,de)}else{if(K.isInstancedBufferAttribute){for(let le=0;le<q.locationSize;le++)f(q.location+le,K.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let le=0;le<q.locationSize;le++)m(q.location+le);t.bindBuffer(t.ARRAY_BUFFER,dt);for(let le=0;le<q.locationSize;le++)M(q.location+le,ce/q.locationSize,qe,re,ce*ee,ce/q.locationSize*le*ee,de)}}else if(W!==void 0){let re=W[te];if(re!==void 0)switch(re.length){case 2:t.vertexAttrib2fv(q.location,re);break;case 3:t.vertexAttrib3fv(q.location,re);break;case 4:t.vertexAttrib4fv(q.location,re);break;default:t.vertexAttrib1fv(q.location,re)}}}}_()}function b(){S();for(let L in r){let B=r[L];for(let U in B){let R=B[U];for(let D in R){let F=R[D];for(let W in F)c(F[W].object),delete F[W];delete R[D]}}delete r[L]}}function E(L){if(r[L.id]===void 0)return;let B=r[L.id];for(let U in B){let R=B[U];for(let D in R){let F=R[D];for(let W in F)c(F[W].object),delete F[W];delete R[D]}}delete r[L.id]}function C(L){for(let B in r){let U=r[B];for(let R in U){let D=U[R];if(D[L.id]===void 0)continue;let F=D[L.id];for(let W in F)c(F[W].object),delete F[W];delete D[L.id]}}}function x(L){for(let B in r){let U=r[B],R=L.isInstancedMesh===!0?L.id:0,D=U[R];if(D!==void 0){for(let F in D){let W=D[F];for(let te in W)c(W[te].object),delete W[te];delete D[F]}delete U[R],Object.keys(U).length===0&&delete r[B]}}}function S(){N(),a=!0,s!==n&&(s=n,h(s.object))}function N(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:S,resetDefaultState:N,dispose:b,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function jv(t,e,i){let r;function n(l){r=l}function s(l,h){t.drawArrays(r,l,h),i.update(h,r,1)}function a(l,h,c){c!==0&&(t.drawArraysInstanced(r,l,h,c),i.update(h,r,c))}function o(l,h,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,c);let d=0;for(let u=0;u<c;u++)d+=h[u];i.update(d,r,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Yv(t,e,i,r){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){return!(C!==qi&&r.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===hi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Ri&&C!==Wi&&!x&&r.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",c=l(h);c!==h&&(et("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=i.logarithmicDepthBuffer===!0,u=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&u===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:y,maxSamples:b,samples:E}}function Zv(t){let e=this,i=null,r=0,n=!1,s=!1,a=new Hr,o=new ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let p=d.length!==0||u||r!==0||n;return n=u,r=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){i=c(d,u,0)},this.setState=function(d,u,p){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!n||g===null||g.length===0||s&&!m)s?c(null):h();else{let _=s?0:r,M=_*4,y=f.clippingState||null;l.value=y,y=c(g,u,M,p);for(let b=0;b!==M;++b)y[b]=i[b];f.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function c(d,u,p,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,_=u.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,y=p;M!==v;++M,y+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var qn=4,Kv=6,$v=20,Jv=256,ws=new Zs,au=new Ae,yl=null,xl=0,Ml=0,bl=!1,Qv=new P,sn=new P,ou=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,n={}){let{size:s=256,position:a=Qv}=n;yl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,r,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(yl,xl,Ml),this._renderer.xr.enabled=bl,t.scissorTest=!1,Vn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===dn||t.mapping===Qn?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),yl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:hi,format:qi,colorSpace:$a,depthBuffer:!1},r=lu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lu(t,e,i);let{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=e_(n)),this._blurMaterial=i_(n,t,e),this._ggxMaterial=t_(n,t,e)}return r}_compileMaterial(t){let e=new Ze(new Ct,t);this._renderer.compile(e,ws)}_sceneToCubeUV(t,e,i,r,n){let s=new yi(90,1,e,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,c=l.toneMapping;l.getClearColor(au),l.toneMapping=rr,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ze(new Zt,new sr({name:"PMREM.Background",side:xi,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,u=d.material,p=!1,g=t.background;g?g.isColor&&(u.color.copy(g),t.background=null,p=!0):(u.color.copy(au),p=!0);for(let v=0;v<6;v++){let m=v%3;m===0?(s.up.set(0,a[v],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x+o[v],n.y,n.z)):m===1?(s.up.set(0,0,a[v]),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y+o[v],n.z)):(s.up.set(0,a[v],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y,n.z+o[v]));let f=this._cubeSize;Vn(r,m*f,v>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,s),l.render(t,s)}l.toneMapping=c,l.autoClear=h,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===dn||t.mapping===Qn;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hu());let n=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=n;let a=n.uniforms;a.envMap.value=t;let o=this._cubeSize;Vn(e,0,0,3*o,2*o),i.setRenderTarget(e),i.render(s,ws)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let n=1;n<r;n++)this._applyGGXFilter(t,n-1,n);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,n=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;let o=s.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),c=Math.sqrt(l*l-h*h),d=l*1.25,u=c*d,{_lodMax:p}=this,g=this._sizeLods[i],v=3*g*(i>p-qn?i-p+qn:0),m=4*(this._cubeSize-g);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=p-e,Vn(n,v,m,3*g,2*g),r.setRenderTarget(n),r.render(a,ws),o.envMap.value=n.texture,o.roughness.value=0,o.mipInt.value=p-i,Vn(t,v,m,3*g,2*g),r.setRenderTarget(t),r.render(a,ws)}_blur(t,e,i,r){let n=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,n,e,i,s),this._blurPass(n,t,i,i,s)}_blurPass(t,e,i,r,n){let s=this._renderer,a=this._blurMaterial,o=this._lodMeshes[r];o.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=n,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],c=3*h*(r>this._lodMax-qn?r-this._lodMax+qn:0),d=4*(this._cubeSize-h);Vn(e,c,d,3*h,2*h),s.setRenderTarget(e),s.render(o,ws)}};function e_(t){let e=[],i=[],r=t,n=t-qn+1+Kv;for(let s=0;s<n;s++){let a=Math.pow(2,r);e.push(a);let o=1/(a-2),l=-o,h=1+o,c=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,u=6,p=3,g=new Float32Array(p*u*d),v=new Float32Array(p*u*d);for(let f=0;f<d;f++){let _=f%3*2/3-1,M=f>2?0:-1,y=[_,M,0,_+2/3,M,0,_+2/3,M+1,0,_,M,0,_+2/3,M+1,0,_,M+1,0];g.set(y,p*u*f);for(let b=0;b<u;b++){let E=c[b*2]*2-1,C=c[b*2+1]*2-1;f===0?sn.set(1,C,E):f===1?sn.set(-E,1,-C):f===2?sn.set(-E,C,1):f===3?sn.set(-1,C,-E):f===4?sn.set(-E,-1,C):sn.set(E,C,-1),sn.toArray(v,(f*u+b)*p)}}let m=new Ct;m.setAttribute("position",new fi(g,p)),m.setAttribute("outputDirection",new fi(v,p)),i.push(new Ze(m,null)),r>qn&&r--}return{lodMeshes:i,sizeLods:e}}function lu(t,e,i){let r=new ii(t,e,i);return r.texture.mapping=lo,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Vn(t,e,i,r,n){t.viewport.set(e,i,r,n),t.scissor.set(e,i,r,n)}function t_(t,e,i){return new zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Jv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uo(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function i_(t,e,i){return new zt({name:"SphericalGaussianBlur",defines:{SAMPLES:$v,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:uo(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function hu(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

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
		`,blending:ji,depthTest:!1,depthWrite:!1})}function cu(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function uo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Od=class extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new Ku(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Zt(5,5,5),n=new zt({name:"CubemapFromEquirect",uniforms:rs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xi,blending:ji});n.uniforms.tEquirect.value=e;let s=new Ze(r,n),a=e.minFilter;return e.minFilter===an&&(e.minFilter=Xt),new Km(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let n=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,i,r);t.setRenderTarget(n)}};function r_(t){let e=new WeakMap,i=new WeakMap,r=null;function n(u,p=!1){return u==null?null:p?a(u):s(u)}function s(u){if(u&&u.isTexture){let p=u.mapping;if(p===Vo||p===Ho)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new Od(g.height);return v.fromEquirectangularTexture(t,u),e.set(u,v),u.addEventListener("dispose",h),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let p=u.mapping,g=p===Vo||p===Ho,v=p===dn||p===Qn;if(g||v){let m=i.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return r===null&&(r=new ou(t)),m=g?r.fromEquirectangular(u,m):r.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),m.texture;if(m!==void 0)return m.texture;{let _=u.image;return g&&_&&_.height>0||v&&_&&l(_)?(r===null&&(r=new ou(t)),m=g?r.fromEquirectangular(u):r.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,i.set(u,m),u.addEventListener("dispose",c),m.texture):null}}}return u}function o(u,p){return p===Vo?u.mapping=dn:p===Ho&&(u.mapping=Qn),u}function l(u){let p=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&p++;return p===g}function h(u){let p=u.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function c(u){let p=u.target;p.removeEventListener("dispose",c);let g=i.get(p);g!==void 0&&(i.delete(p),g.dispose())}function d(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:d}}function n_(t){let e={};function i(r){if(e[r]!==void 0)return e[r];let n=t.getExtension(r);return e[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);return n===null&&Xn("WebGLRenderer: "+r+" extension not supported."),n}}}function s_(t,e,i,r){let n={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete n[u.id];let p=s.get(u);p&&(e.remove(p),s.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,i.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,i.memory.geometries++),u}function l(d){let u=d.attributes;for(let p in u)e.update(u[p],t.ARRAY_BUFFER)}function h(d){let u=[],p=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(p!==null){let _=p.array;v=p.version;for(let M=0,y=_.length;M<y;M+=3){let b=_[M+0],E=_[M+1],C=_[M+2];u.push(b,E,E,C,C,b)}}else{let _=g.array;v=g.version;for(let M=0,y=_.length/3-1;M<y;M+=3){let b=M+0,E=M+1,C=M+2;u.push(b,E,E,C,C,b)}}let m=new(g.count>=65535?ju:Xu)(u,1);m.version=v;let f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){let u=s.get(d);if(u){let p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:c}}function a_(t,e,i){let r;function n(d){r=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,u){t.drawElements(r,u,s,d*a),i.update(u,r,1)}function h(d,u,p){p!==0&&(t.drawElementsInstanced(r,u,s,d*a,p),i.update(u,r,p))}function c(d,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,s,d,0,p);let g=0;for(let v=0;v<p;v++)g+=u[v];i.update(g,r,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function o_(t){let e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,a,o){switch(i.calls++,a){case t.TRIANGLES:i.triangles+=o*(s/3);break;case t.LINES:i.lines+=o*(s/2);break;case t.LINE_STRIP:i.lines+=o*(s-1);break;case t.LINE_LOOP:i.lines+=o*s;break;case t.POINTS:i.points+=o*s;break;default:tt("WebGLInfo: Unknown draw mode:",a);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:n,update:r}}function l_(t,e,i){let r=new WeakMap,n=new It;function s(a,o,l){let h=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=c!==void 0?c.length:0,u=r.get(o);if(u===void 0||u.count!==d){let p=function(){x.dispose(),r.delete(o),o.removeEventListener("dispose",p)};u!==void 0&&u.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],y=0;g===!0&&(y=1),v===!0&&(y=2),m===!0&&(y=3);let b=o.attributes.position.count*y,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let C=new Float32Array(b*E*4*d),x=new zu(C,b,E,d);x.type=Wi,x.needsUpdate=!0;let S=y*4;for(let N=0;N<d;N++){let L=f[N],B=_[N],U=M[N],R=b*E*4*N;for(let D=0;D<L.count;D++){let F=D*S;g===!0&&(n.fromBufferAttribute(L,D),C[R+F+0]=n.x,C[R+F+1]=n.y,C[R+F+2]=n.z,C[R+F+3]=0),v===!0&&(n.fromBufferAttribute(B,D),C[R+F+4]=n.x,C[R+F+5]=n.y,C[R+F+6]=n.z,C[R+F+7]=0),m===!0&&(n.fromBufferAttribute(U,D),C[R+F+8]=n.x,C[R+F+9]=n.y,C[R+F+10]=n.z,C[R+F+11]=U.itemSize===4?n.w:1)}}u={count:d,texture:x,size:new ue(b,E)},r.set(o,u),o.addEventListener("dispose",p)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,i);else{let p=0;for(let v=0;v<h.length;v++)p+=h[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",h)}l.getUniforms().setValue(t,"morphTargetsTexture",u.texture,i),l.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:s}}function h_(t,e,i,r,n){let s=new WeakMap;function a(h){let c=n.render.frame,d=h.geometry,u=e.get(h,d);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==c&&(i.update(h.instanceMatrix,t.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,t.ARRAY_BUFFER),s.set(h,c))),h.isSkinnedMesh){let p=h.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),r.releaseStatesOfObject(c),i.remove(c.instanceMatrix),c.instanceColor!==null&&i.remove(c.instanceColor)}return{update:a,dispose:o}}var c_={[io]:"LINEAR_TONE_MAPPING",[ro]:"REINHARD_TONE_MAPPING",[no]:"CINEON_TONE_MAPPING",[ns]:"ACES_FILMIC_TONE_MAPPING",[ao]:"AGX_TONE_MAPPING",[oo]:"NEUTRAL_TONE_MAPPING",[so]:"CUSTOM_TONE_MAPPING"};function u_(t,e,i,r,n,s){let a=new ii(e,i,{type:t,depthBuffer:n,stencilBuffer:s,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new Ct;h.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Qe([0,2,0,0,2,0],2));let c=new Nh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Ze(h,c),u=new Zs(-1,1,1,-1,0,1),p=null,g=null,v=!1,m,f=null,_=[],M=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let E=0;E<_.length;E++){let C=_[E];C.setSize&&C.setSize(y,b)}},this.setEffects=function(y){_=y,M=_.length>0&&_[0].isRenderPass===!0;let b=a.width,E=a.height;_.length>0&&o===null&&(o=new ii(b,E,{type:hi,depthBuffer:!1,stencilBuffer:!1}),l=new ii(b,E,{type:hi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let x=_[C];x.setSize&&x.setSize(b,E)}},this.begin=function(y,b){if(v||y.toneMapping===rr&&_.length===0)return!1;if(f=b,b!==null){let E=b.width,C=b.height;(a.width!==E||a.height!==C)&&this.setSize(E,C)}return M===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=rr,!0},this.hasRenderPass=function(){return M},this.end=function(y,b){y.toneMapping=m,v=!0;let E=a,C=o;for(let x=0;x<_.length;x++){let S=_[x];S.enabled!==!1&&(S.render(y,C,E,b),S.needsSwap!==!1&&(E=C,C=C===o?l:o))}if(p!==y.outputColorSpace||g!==y.toneMapping){p=y.outputColorSpace,g=y.toneMapping,c.defines={},_t.getTransfer(p)===St&&(c.defines.SRGB_TRANSFER="");let x=c_[g];x&&(c.defines[x]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(f),y.render(d,u),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}var zd=new Pi,ph=new zs(1,1),Vd=new zu,Hd=new _f,Gd=new Ku,uu=[],du=[],pu=new Float32Array(16),fu=new Float32Array(9),mu=new Float32Array(4);function os(t,e,i){let r=t[0];if(r<=0||r>0)return t;let n=e*i,s=uu[n];if(s===void 0&&(s=new Float32Array(n),uu[n]=s),e!==0){r.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=i,t[a].toArray(s,o)}return s}function jt(t,e){if(t.length!==e.length)return!1;for(let i=0,r=t.length;i<r;i++)if(t[i]!==e[i])return!1;return!0}function Yt(t,e){for(let i=0,r=e.length;i<r;i++)t[i]=e[i]}function po(t,e){let i=du[e];i===void 0&&(i=new Int32Array(e),du[e]=i);for(let r=0;r!==e;++r)i[r]=t.allocateTextureUnit();return i}function d_(t,e){let i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function p_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(jt(i,e))return;t.uniform2fv(this.addr,e),Yt(i,e)}}function f_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(jt(i,e))return;t.uniform3fv(this.addr,e),Yt(i,e)}}function m_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(jt(i,e))return;t.uniform4fv(this.addr,e),Yt(i,e)}}function g_(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(jt(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(i,e)}else{if(jt(i,r))return;mu.set(r),t.uniformMatrix2fv(this.addr,!1,mu),Yt(i,r)}}function v_(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(jt(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(i,e)}else{if(jt(i,r))return;fu.set(r),t.uniformMatrix3fv(this.addr,!1,fu),Yt(i,r)}}function __(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(jt(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(i,e)}else{if(jt(i,r))return;pu.set(r),t.uniformMatrix4fv(this.addr,!1,pu),Yt(i,r)}}function y_(t,e){let i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function x_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(jt(i,e))return;t.uniform2iv(this.addr,e),Yt(i,e)}}function M_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(jt(i,e))return;t.uniform3iv(this.addr,e),Yt(i,e)}}function b_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(jt(i,e))return;t.uniform4iv(this.addr,e),Yt(i,e)}}function S_(t,e){let i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function w_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(jt(i,e))return;t.uniform2uiv(this.addr,e),Yt(i,e)}}function E_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(jt(i,e))return;t.uniform3uiv(this.addr,e),Yt(i,e)}}function T_(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(jt(i,e))return;t.uniform4uiv(this.addr,e),Yt(i,e)}}function A_(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n);let s;this.type===t.SAMPLER_2D_SHADOW?(ph.compareFunction=i.isReversedDepthBuffer()?wh:Sh,s=ph):s=zd,i.setTexture2D(e||s,n)}function C_(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTexture3D(e||Hd,n)}function R_(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTextureCube(e||Gd,n)}function I_(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTexture2DArray(e||Vd,n)}function P_(t){switch(t){case 5126:return d_;case 35664:return p_;case 35665:return f_;case 35666:return m_;case 35674:return g_;case 35675:return v_;case 35676:return __;case 5124:case 35670:return y_;case 35667:case 35671:return x_;case 35668:case 35672:return M_;case 35669:case 35673:return b_;case 5125:return S_;case 36294:return w_;case 36295:return E_;case 36296:return T_;case 35678:case 36198:case 36298:case 36306:case 35682:return A_;case 35679:case 36299:case 36307:return C_;case 35680:case 36300:case 36308:case 36293:return R_;case 36289:case 36303:case 36311:case 36292:return I_}}function L_(t,e){t.uniform1fv(this.addr,e)}function N_(t,e){let i=os(e,this.size,2);t.uniform2fv(this.addr,i)}function D_(t,e){let i=os(e,this.size,3);t.uniform3fv(this.addr,i)}function B_(t,e){let i=os(e,this.size,4);t.uniform4fv(this.addr,i)}function U_(t,e){let i=os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function F_(t,e){let i=os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function O_(t,e){let i=os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function z_(t,e){t.uniform1iv(this.addr,e)}function V_(t,e){t.uniform2iv(this.addr,e)}function H_(t,e){t.uniform3iv(this.addr,e)}function G_(t,e){t.uniform4iv(this.addr,e)}function k_(t,e){t.uniform1uiv(this.addr,e)}function W_(t,e){t.uniform2uiv(this.addr,e)}function q_(t,e){t.uniform3uiv(this.addr,e)}function X_(t,e){t.uniform4uiv(this.addr,e)}function j_(t,e,i){let r=this.cache,n=e.length,s=po(i,n);jt(r,s)||(t.uniform1iv(this.addr,s),Yt(r,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=ph:a=zd;for(let o=0;o!==n;++o)i.setTexture2D(e[o]||a,s[o])}function Y_(t,e,i){let r=this.cache,n=e.length,s=po(i,n);jt(r,s)||(t.uniform1iv(this.addr,s),Yt(r,s));for(let a=0;a!==n;++a)i.setTexture3D(e[a]||Hd,s[a])}function Z_(t,e,i){let r=this.cache,n=e.length,s=po(i,n);jt(r,s)||(t.uniform1iv(this.addr,s),Yt(r,s));for(let a=0;a!==n;++a)i.setTextureCube(e[a]||Gd,s[a])}function K_(t,e,i){let r=this.cache,n=e.length,s=po(i,n);jt(r,s)||(t.uniform1iv(this.addr,s),Yt(r,s));for(let a=0;a!==n;++a)i.setTexture2DArray(e[a]||Vd,s[a])}function $_(t){switch(t){case 5126:return L_;case 35664:return N_;case 35665:return D_;case 35666:return B_;case 35674:return U_;case 35675:return F_;case 35676:return O_;case 5124:case 35670:return z_;case 35667:case 35671:return V_;case 35668:case 35672:return H_;case 35669:case 35673:return G_;case 5125:return k_;case 36294:return W_;case 36295:return q_;case 36296:return X_;case 35678:case 36198:case 36298:case 36306:case 35682:return j_;case 35679:case 36299:case 36307:return Y_;case 35680:case 36300:case 36308:case 36293:return Z_;case 36289:case 36303:case 36311:case 36292:return K_}}var J_=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=P_(e.type)}},Q_=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$_(e.type)}},ey=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let n=0,s=r.length;n!==s;++n){let a=r[n];a.setValue(t,e[a.id],i)}}},Sl=/(\w+)(\])?(\[|\.)?/g;function gu(t,e){t.seq.push(e),t.map[e.id]=e}function ty(t,e,i){let r=t.name,n=r.length;for(Sl.lastIndex=0;;){let s=Sl.exec(r),a=Sl.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===n){gu(i,h===void 0?new J_(o,t,e):new Q_(o,t,e));break}else{let c=i.map[o];c===void 0&&(c=new ey(o),gu(i,c)),i=c}}}var ja=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);ty(a,o,this)}let r=[],n=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(s):n.push(s);r.length>0&&(this.seq=r.concat(n))}setValue(t,e,i,r){let n=this.map[e];n!==void 0&&n.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let n=0,s=e.length;n!==s;++n){let a=e[n],o=i[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,n=t.length;r!==n;++r){let s=t[r];s.id in e&&i.push(s)}return i}};function vu(t,e,i){let r=t.createShader(e);return t.shaderSource(r,i),t.compileShader(r),r}var iy=37297,ry=0;function ny(t,e){let i=t.split(`
`),r=[],n=Math.max(e-6,0),s=Math.min(e+6,i.length);for(let a=n;a<s;a++){let o=a+1;r.push(`${o===e?">":" "} ${o}: ${i[a]}`)}return r.join(`
`)}var _u=new ut;function sy(t){_t._getMatrix(_u,_t.workingColorSpace,t);let e=`mat3( ${_u.elements.map(i=>i.toFixed(4))} )`;switch(_t.getTransfer(t)){case Ja:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function yu(t,e,i){let r=t.getShaderParameter(e,t.COMPILE_STATUS),n=(t.getShaderInfoLog(e)||"").trim();if(r&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return i.toUpperCase()+`

`+n+`

`+ny(t.getShaderSource(e),a)}else return n}function ay(t,e){let i=sy(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var oy={[io]:"Linear",[ro]:"Reinhard",[no]:"Cineon",[ns]:"ACESFilmic",[ao]:"AgX",[oo]:"Neutral",[so]:"Custom"};function ly(t,e){let i=oy[e];return i===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var Oa=new P;function hy(){_t.getLuminanceCoefficients(Oa);let t=Oa.x.toFixed(4),e=Oa.y.toFixed(4),i=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cy(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function uy(t){let e=[];for(let i in t){let r=t[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function dy(t,e){let i={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let s=t.getActiveAttrib(e,n),a=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),i[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return i}function Cs(t){return t!==""}function xu(t,e){let i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mu(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var py=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(t){return t.replace(py,my)}var fy=new Map;function my(t,e){let i=ft[e];if(i===void 0){let r=fy.get(e);if(r!==void 0)i=ft[r],et('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return fh(i)}var gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(t){return t.replace(gy,vy)}function vy(t,e,i,r){let n="";for(let s=parseInt(e);s<parseInt(i);s++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Su(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var _y={[za]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function yy(t){return _y[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var xy={[dn]:"ENVMAP_TYPE_CUBE",[Qn]:"ENVMAP_TYPE_CUBE",[lo]:"ENVMAP_TYPE_CUBE_UV"};function My(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":xy[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var by={[Qn]:"ENVMAP_MODE_REFRACTION"};function Sy(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":by[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wy={[Iu]:"ENVMAP_BLENDING_MULTIPLY",[jp]:"ENVMAP_BLENDING_MIX",[Yp]:"ENVMAP_BLENDING_ADD"};function Ey(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":wy[t.combine]||"ENVMAP_BLENDING_NONE"}function Ty(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function Ay(t,e,i,r){let n=t.getContext(),s=i.defines,a=i.vertexShader,o=i.fragmentShader,l=yy(i),h=My(i),c=Sy(i),d=Ey(i),u=Ty(i),p=cy(i),g=uy(s),v=n.createProgram(),m,f,_=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Cs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(Cs).join(`
`),f.length>0&&(f+=`
`)):(m=[Su(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+c:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),f=[Su(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+c:"",i.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==rr?"#define TONE_MAPPING":"",i.toneMapping!==rr?ft.tonemapping_pars_fragment:"",i.toneMapping!==rr?ly("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,ay("linearToOutputTexel",i.outputColorSpace),hy(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Cs).join(`
`)),a=fh(a),a=xu(a,i),a=Mu(a,i),o=fh(o),o=xu(o,i),o=Mu(o,i),a=bu(a),o=bu(o),i.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let M=_+m+a,y=_+f+o,b=vu(n,n.VERTEX_SHADER,M),E=vu(n,n.FRAGMENT_SHADER,y);n.attachShader(v,b),n.attachShader(v,E),i.index0AttributeName!==void 0?n.bindAttribLocation(v,0,i.index0AttributeName):i.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function C(L){if(t.debug.checkShaderErrors){let B=n.getProgramInfoLog(v)||"",U=n.getShaderInfoLog(b)||"",R=n.getShaderInfoLog(E)||"",D=B.trim(),F=U.trim(),W=R.trim(),te=!0,q=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(te=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,v,b,E);else{let K=yu(n,b,"vertex"),re=yu(n,E,"fragment");tt("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+K+`
`+re)}else D!==""?et("WebGLProgram: Program Info Log:",D):(F===""||W==="")&&(q=!1);q&&(L.diagnostics={runnable:te,programLog:D,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:f}})}n.deleteShader(b),n.deleteShader(E),x=new ja(n,v),S=dy(n,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(v,iy)),N},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=ry++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=E,this}var Cy=0,Ry=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Iy(t),e.set(t,i)),i}},Iy=class{constructor(t){this.id=Cy++,this.code=t,this.usedTimes=0}};function Py(t){return t===pn||t===Ya||t===Za}function Ly(t,e,i,r,n,s){let a=new Hu,o=new Ry,l=new Set,h=[],c=new Map,d=r.logarithmicDepthBuffer,u=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,S,N,L,B,U){let R=L.fog,D=B.geometry,F=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,te=e.get(x.envMap||F,W),q=te&&te.mapping===lo?te.image.height:null,K=p[x.type];x.precision!==null&&(u=r.getMaxPrecision(x.precision),u!==x.precision&&et("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let re=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ce=re!==void 0?re.length:0,Re=0;D.morphAttributes.position!==void 0&&(Re=1),D.morphAttributes.normal!==void 0&&(Re=2),D.morphAttributes.color!==void 0&&(Re=3);let dt,qe,ee,de;if(K){let ve=tr[K];dt=ve.vertexShader,qe=ve.fragmentShader}else{dt=x.vertexShader,qe=x.fragmentShader;let ve=o.getVertexShaderStage(x),pe=o.getFragmentShaderStage(x);o.update(x,ve,pe),ee=ve.id,de=pe.id}let le=t.getRenderTarget(),Fe=t.state.buffers.depth.getReversed(),je=B.isInstancedMesh===!0,Me=B.isBatchedMesh===!0,st=!!x.map,oe=!!x.matcap,ae=!!te,he=!!x.aoMap,_e=!!x.lightMap,Ce=!!x.bumpMap&&x.wireframe===!1,Ne=!!x.normalMap,De=!!x.displacementMap,Xe=!!x.emissiveMap,it=!!x.metalnessMap,O=!!x.roughnessMap,xt=x.anisotropy>0,pt=x.clearcoat>0,Ye=x.dispersion>0,I=x.retroreflectivity>0,T=x.iridescence>0,V=x.sheen>0,Z=x.transmission>0,ie=xt&&!!x.anisotropyMap,ye=pt&&!!x.clearcoatMap,Se=pt&&!!x.clearcoatNormalMap,k=pt&&!!x.clearcoatRoughnessMap,ge=T&&!!x.iridescenceMap,we=T&&!!x.iridescenceThicknessMap,Te=V&&!!x.sheenColorMap,me=V&&!!x.sheenRoughnessMap,Ge=!!x.specularMap,ke=!!x.specularColorMap,Ve=!!x.specularIntensityMap,ot=Z&&!!x.transmissionMap,G=Z&&!!x.thicknessMap,se=!!x.gradientMap,fe=!!x.alphaMap,Le=x.alphaTest>0,xe=!!x.alphaHash,z=!!x.extensions,X=rr;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(X=t.toneMapping);let ne={shaderID:K,shaderType:x.type,shaderName:x.name,vertexShader:dt,fragmentShader:qe,defines:x.defines,customVertexShaderID:ee,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Me,batchingColor:Me&&B._colorsTexture!==null,instancing:je,instancingColor:je&&B.instanceColor!==null,instancingMorph:je&&B.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:st,matcap:oe,envMap:ae,envMapMode:ae&&te.mapping,envMapCubeUVHeight:q,aoMap:he,lightMap:_e,bumpMap:Ce,normalMap:Ne,displacementMap:De,emissiveMap:Xe,normalMapObjectSpace:Ne&&x.normalMapType===$p,normalMapTangentSpace:Ne&&x.normalMapType===hh,packedNormalMap:Ne&&x.normalMapType===hh&&Py(x.normalMap.format),metalnessMap:it,roughnessMap:O,anisotropy:xt,anisotropyMap:ie,clearcoat:pt,clearcoatMap:ye,clearcoatNormalMap:Se,clearcoatRoughnessMap:k,dispersion:Ye,retroreflection:I,iridescence:T,iridescenceMap:ge,iridescenceThicknessMap:we,sheen:V,sheenColorMap:Te,sheenRoughnessMap:me,specularMap:Ge,specularColorMap:ke,specularIntensityMap:Ve,transmission:Z,transmissionMap:ot,thicknessMap:G,gradientMap:se,opaque:x.transparent===!1&&x.blending===Rs&&x.alphaToCoverage===!1,alphaMap:fe,alphaTest:Le,alphaHash:xe,combine:x.combine,mapUv:st&&g(x.map.channel),aoMapUv:he&&g(x.aoMap.channel),lightMapUv:_e&&g(x.lightMap.channel),bumpMapUv:Ce&&g(x.bumpMap.channel),normalMapUv:Ne&&g(x.normalMap.channel),displacementMapUv:De&&g(x.displacementMap.channel),emissiveMapUv:Xe&&g(x.emissiveMap.channel),metalnessMapUv:it&&g(x.metalnessMap.channel),roughnessMapUv:O&&g(x.roughnessMap.channel),anisotropyMapUv:ie&&g(x.anisotropyMap.channel),clearcoatMapUv:ye&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Se&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:we&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:me&&g(x.sheenRoughnessMap.channel),specularMapUv:Ge&&g(x.specularMap.channel),specularColorMapUv:ke&&g(x.specularColorMap.channel),specularIntensityMapUv:Ve&&g(x.specularIntensityMap.channel),transmissionMapUv:ot&&g(x.transmissionMap.channel),thicknessMapUv:G&&g(x.thicknessMap.channel),alphaMapUv:fe&&g(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Ne||xt),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!D.attributes.uv&&(st||fe),fog:!!R,useFog:x.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&Ne===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Fe,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Re,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:X,decodeVideoTexture:st&&x.map.isVideoTexture===!0&&_t.getTransfer(x.map.colorSpace)===St,decodeVideoTextureEmissive:Xe&&x.emissiveMap.isVideoTexture===!0&&_t.getTransfer(x.emissiveMap.colorSpace)===St,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ui,flipSided:x.side===xi,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:z&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(z&&x.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ne.vertexUv1s=l.has(1),ne.vertexUv2s=l.has(2),ne.vertexUv3s=l.has(3),l.clear(),ne}function m(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)S.push(N),S.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(f(S,x),_(S,x),S.push(t.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function f(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function _(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function M(x){let S=p[x.type],N;if(S){let L=tr[S];N=Yi.clone(L.uniforms)}else N=x.uniforms;return N}function y(x,S){let N=c.get(S);return N!==void 0?++N.usedTimes:(N=new Ay(t,S,x,n),h.push(N),c.set(S,N)),N}function b(x){if(--x.usedTimes===0){let S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),c.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:M,acquireProgram:y,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:C}}function Ny(){let t=new WeakMap;function e(a){return t.has(a)}function i(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function r(a){t.delete(a)}function n(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:i,remove:r,update:n,dispose:s}}function Dy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function wu(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Eu(){let t=[],e=0,i=[],r=[],n=[];function s(){e=0,i.length=0,r.length=0,n.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,g,v,m,f){let _=t[e];return _===void 0?(_={id:u.id,object:u,geometry:p,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:f},t[e]=_):(_.id=u.id,_.object=u,_.geometry=p,_.material=g,_.materialVariant=a(u),_.groupOrder=v,_.renderOrder=u.renderOrder,_.z=m,_.group=f),e++,_}function l(u,p,g,v,m,f,_){_.reversedDepth===!0&&(m=-m);let M=o(u,p,g,v,m,f);g.transmission>0?r.push(M):g.transparent===!0?n.push(M):i.push(M)}function h(u,p,g,v,m,f){let _=o(u,p,g,v,m,f);g.transmission>0?r.unshift(_):g.transparent===!0?n.unshift(_):i.unshift(_)}function c(u,p){i.length>1&&i.sort(u||Dy),r.length>1&&r.sort(p||wu),n.length>1&&n.sort(p||wu)}function d(){for(let u=e,p=t.length;u<p;u++){let g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:r,transparent:n,init:s,push:l,unshift:h,finish:d,sort:c}}function By(){let t=new WeakMap;function e(r,n){let s=t.get(r),a;return s===void 0?(a=new Eu,t.set(r,[a])):n>=s.length?(a=new Eu,s.push(a)):a=s[n],a}function i(){t=new WeakMap}return{get:e,dispose:i}}function Uy(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new P,color:new Ae};break;case"SpotLight":i={position:new P,direction:new P,color:new Ae,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new P,color:new Ae,distance:0,decay:0};break;case"HemisphereLight":i={direction:new P,skyColor:new Ae,groundColor:new Ae};break;case"RectAreaLight":i={color:new Ae,position:new P,halfWidth:new P,halfHeight:new P};break}return t[e.id]=i,i}}}function Fy(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}var Oy=0;function zy(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Vy(t){let e=new Uy,i=Fy(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new P);let n=new P,s=new lt,a=new lt;function o(h){let c=0,d=0,u=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,_=0,M=0,y=0,b=0,E=0,C=0,x=0,S=0,N=0;h.sort(zy);for(let B=0,U=h.length;B<U;B++){let R=h[B],D=R.color,F=R.intensity,W=R.distance,te=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===pn?te=R.shadow.map.texture:te=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)c+=D.r*F,d+=D.g*F,u+=D.b*F;else if(R.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(R.sh.coefficients[q],F);N++}else if(R.isSunLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,re=i.get(R);re.shadowIntensity=K.intensity,re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),r.sunShadow[g]=re,r.sunShadowMap[g]=te;let ce=K.getViewportCount();for(let Re=0;Re<ce;Re++)r.sunShadowMatrix[v+Re]=K.getMatrix(Re),r.sunShadowCascade[v+Re]=K._cascadeData[Re];v+=ce,g++}r.sun[p]=q,p++}else if(R.isDirectionalLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let K=R.shadow,re=i.get(R);re.shadowIntensity=K.intensity,re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize=K.mapSize,r.directionalShadow[m]=re,r.directionalShadowMap[m]=te,r.directionalShadowMatrix[m]=R.shadow.matrix,b++}r.directional[m]=q,m++}else if(R.isSpotLight){let q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(D).multiplyScalar(F),q.distance=W,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,r.spot[_]=q;let K=R.shadow;if(R.map&&(r.spotLightMap[x]=R.map,x++,K.updateMatrices(R),R.castShadow&&S++),r.spotLightMatrix[_]=K.matrix,R.castShadow){let re=i.get(R);re.shadowIntensity=K.intensity,re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize=K.mapSize,r.spotShadow[_]=re,r.spotShadowMap[_]=te,C++}_++}else if(R.isRectAreaLight){let q=e.get(R);q.color.copy(D).multiplyScalar(F),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),r.rectArea[M]=q,M++}else if(R.isPointLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let K=R.shadow,re=i.get(R);re.shadowIntensity=K.intensity,re.shadowBias=K.bias,re.shadowNormalBias=K.normalBias,re.shadowRadius=K.radius,re.shadowMapSize=K.mapSize,re.shadowCameraNear=K.camera.near,re.shadowCameraFar=K.camera.far,r.pointShadow[f]=re,r.pointShadowMap[f]=te,r.pointShadowMatrix[f]=R.shadow.matrix,E++}r.point[f]=q,f++}else if(R.isHemisphereLight){let q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(F),q.groundColor.copy(R.groundColor).multiplyScalar(F),r.hemi[y]=q,y++}}M>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ee.LTC_FLOAT_1,r.rectAreaLTC2=Ee.LTC_FLOAT_2):(r.rectAreaLTC1=Ee.LTC_HALF_1,r.rectAreaLTC2=Ee.LTC_HALF_2)),r.ambient[0]=c,r.ambient[1]=d,r.ambient[2]=u;let L=r.hash;(L.sunLength!==p||L.directionalLength!==m||L.pointLength!==f||L.spotLength!==_||L.rectAreaLength!==M||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==b||L.numPointShadows!==E||L.numSpotShadows!==C||L.numSpotMaps!==x||L.numLightProbes!==N)&&(r.sun.length=p,r.directional.length=m,r.spot.length=_,r.rectArea.length=M,r.point.length=f,r.hemi.length=y,r.sunShadow.length=g,r.sunShadowMap.length=g,r.sunShadowMatrix.length=v,r.sunShadowCascade.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.directionalShadowMatrix.length=b,r.pointShadow.length=E,r.pointShadowMap.length=E,r.pointShadowMatrix.length=E,r.spotShadow.length=C,r.spotShadowMap.length=C,r.spotLightMatrix.length=C+x-S,r.spotLightMap.length=x,r.numSpotLightShadowsWithMaps=S,r.numLightProbes=N,L.sunLength=p,L.directionalLength=m,L.pointLength=f,L.spotLength=_,L.rectAreaLength=M,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=b,L.numPointShadows=E,L.numSpotShadows=C,L.numSpotMaps=x,L.numLightProbes=N,r.version=Oy++)}function l(h,c){let d=0,u=0,p=0,g=0,v=0,m=0,f=c.matrixWorldInverse;for(let _=0,M=h.length;_<M;_++){let y=h[_];if(y.isSunLight){let b=r.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),d++}else if(y.isDirectionalLight){let b=r.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(f),u++}else if(y.isSpotLight){let b=r.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(f),g++}else if(y.isRectAreaLight){let b=r.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){let b=r.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){let b=r.hemi[m];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:r}}function Tu(t){let e=new Vy(t),i=[],r=[],n=[];function s(u){d.camera=u,i.length=0,r.length=0,n.length=0}function a(u){i.push(u)}function o(u){r.push(u)}function l(u){n.push(u)}function h(){e.setup(i)}function c(u){e.setupView(i,u)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:h,setupLightsView:c,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Hy(t){let e=new WeakMap;function i(n,s=0){let a=e.get(n),o;return a===void 0?(o=new Tu(t),e.set(n,[o])):s>=a.length?(o=new Tu(t),a.push(o)):o=a[s],o}function r(){e=new WeakMap}return{get:i,dispose:r}}var Gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ky=`uniform sampler2D shadow_pass;
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
}`,Wy=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],qy=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],Au=new lt,Es=new P,wl=new P;function Xy(t,e,i){let r=new ts,n=new ue,s=new ue,a=new It,o=new Nm,l=new Dm,h={},c=i.maxTextureSize,d={[cn]:xi,[xi]:cn,[Ui]:Ui},u=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:Gy,fragmentShader:ky}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ct;g.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Ze(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let f=this.type;this.render=function(E,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===mh&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=za);let S=t.getRenderTarget(),N=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),B=t.state;B.setBlending(ji),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let U=f!==this.type;U&&C.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(D=>D.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,D=E.length;R<D;R++){let F=E[R],W=F.shadow;if(W===void 0){et("WebGLShadowMap:",F,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;n.copy(W.mapSize);let te=W.getFrameExtents();n.multiply(te),s.copy(W.mapSize),(n.x>c||n.y>c)&&(n.x>c&&(s.x=Math.floor(c/te.x),n.x=s.x*te.x,W.mapSize.x=s.x),n.y>c&&(s.y=Math.floor(c/te.y),n.y=s.y*te.y,W.mapSize.y=s.y));let q=t.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||U===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Ts){if(F.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ii(n.x,n.y,{format:pn,type:hi,minFilter:Xt,magFilter:Xt,generateMipmaps:!1}),W.map.texture.name=F.name+".shadowMap",W.map.depthTexture=new zs(n.x,n.y,Wi),W.map.depthTexture.name=F.name+".shadowMapDepth",W.map.depthTexture.format=xr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ti,W.map.depthTexture.magFilter=ti}else F.isPointLight?(W.map=new Od(n.x),W.map.depthTexture=new Of(n.x,nr)):(W.map=new ii(n.x,n.y),W.map.depthTexture=new zs(n.x,n.y,nr)),W.map.depthTexture.name=F.name+".shadowMap",W.map.depthTexture.format=xr,this.type===za?(W.map.depthTexture.compareFunction=q?wh:Sh,W.map.depthTexture.minFilter=Xt,W.map.depthTexture.magFilter=Xt):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=ti,W.map.depthTexture.magFilter=ti);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==n.x||W.map.height!==n.y)&&W.map.setSize(n.x,n.y);let K=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();F.isPointLight!==!0&&W.updateMatrices(F,x);for(let re=0;re<K;re++){let ce=W.getCamera(re);if(F.isPointLight){let Re=W.camera,dt=W.matrix,qe=F.distance||Re.far;qe!==Re.far&&(Re.far=qe,Re.updateProjectionMatrix()),Es.setFromMatrixPosition(F.matrixWorld),Re.position.copy(Es),wl.copy(Re.position),wl.add(Wy[re]),Re.up.copy(qy[re]),Re.lookAt(wl),Re.updateMatrixWorld(),dt.makeTranslation(-Es.x,-Es.y,-Es.z),Au.multiplyMatrices(Re.projectionMatrix,Re.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Au,Re.coordinateSystem,Re.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,re),t.clear();else{re===0&&(t.setRenderTarget(W.map),t.clear());let Re=W.getViewport(re);a.set(s.x*Re.x,s.y*Re.y,s.x*Re.z,s.y*Re.w),B.viewport(a)}r=W.getFrustum(re),y(C,x,ce,F,this.type)}W.isPointLightShadow!==!0&&this.type===Ts&&_(W,x),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(S,N,L)};function _(E,C){let x=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null?E.mapPass=new ii(n.x,n.y,{format:pn,type:hi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,x,u,v,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value.set(E.map.width,E.map.height),p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,x,p,v,null)}function M(E,C,x,S){let N=null,L=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)N=L;else if(N=x.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=N.uuid,U=C.uuid,R=h[B];R===void 0&&(R={},h[B]=R);let D=R[U];D===void 0&&(D=N.clone(),R[U]=D,C.addEventListener("dispose",b)),N=D}if(N.visible=C.visible,N.wireframe=C.wireframe,S===Ts?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:d[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let B=t.properties.get(N);B.light=x}return N}function y(E,C,x,S,N){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Ts)&&(!E.frustumCulled||E.intersectsFrustum(r))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let B=e.update(E),U=E.material;if(Array.isArray(U)){let R=B.groups;for(let D=0,F=R.length;D<F;D++){let W=R[D],te=U[W.materialIndex];if(te&&te.visible){let q=M(E,te,S,N);E.onBeforeShadow(t,E,C,x,B,q,W),t.renderBufferDirect(x,null,B,q,E,W),E.onAfterShadow(t,E,C,x,B,q,W)}}}else if(U.visible){let R=M(E,U,S,N);E.onBeforeShadow(t,E,C,x,B,R,null),t.renderBufferDirect(x,null,B,R,E,null),E.onAfterShadow(t,E,C,x,B,R,null)}}let L=E.children;for(let B=0,U=L.length;B<U;B++)y(L[B],C,x,S,N)}function b(E){E.target.removeEventListener("dispose",b);for(let C in h){let x=h[C],S=E.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}function jy(t,e){function i(){let G=!1,se=new It,fe=null,Le=new It(0,0,0,0);return{setMask:function(xe){fe!==xe&&!G&&(t.colorMask(xe,xe,xe,xe),fe=xe)},setLocked:function(xe){G=xe},setClear:function(xe,z,X,ne,ve){ve===!0&&(xe*=ne,z*=ne,X*=ne),se.set(xe,z,X,ne),Le.equals(se)===!1&&(t.clearColor(xe,z,X,ne),Le.copy(se))},reset:function(){G=!1,fe=null,Le.set(-1,0,0,0)}}}function r(){let G=!1,se=!1,fe=null,Le=null,xe=null;return{setReversed:function(z){if(se!==z){let X=e.get("EXT_clip_control");z?X.clipControlEXT(X.LOWER_LEFT_EXT,X.ZERO_TO_ONE_EXT):X.clipControlEXT(X.LOWER_LEFT_EXT,X.NEGATIVE_ONE_TO_ONE_EXT),se=z;let ne=xe;xe=null,this.setClear(ne)}},getReversed:function(){return se},setTest:function(z){z?le(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(z){fe!==z&&!G&&(t.depthMask(z),fe=z)},setFunc:function(z){if(se&&(z=uf[z]),Le!==z){switch(z){case El:t.depthFunc(t.NEVER);break;case Tl:t.depthFunc(t.ALWAYS);break;case Al:t.depthFunc(t.LESS);break;case Ls:t.depthFunc(t.LEQUAL);break;case Cl:t.depthFunc(t.EQUAL);break;case Rl:t.depthFunc(t.GEQUAL);break;case Ns:t.depthFunc(t.GREATER);break;case Il:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=z}},setLocked:function(z){G=z},setClear:function(z){xe!==z&&(xe=z,se&&(z=1-z),t.clearDepth(z))},reset:function(){G=!1,fe=null,Le=null,xe=null,se=!1}}}function n(){let G=!1,se=null,fe=null,Le=null,xe=null,z=null,X=null,ne=null,ve=null;return{setTest:function(pe){G||(pe?le(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(pe){se!==pe&&!G&&(t.stencilMask(pe),se=pe)},setFunc:function(pe,Ke,vt){(fe!==pe||Le!==Ke||xe!==vt)&&(t.stencilFunc(pe,Ke,vt),fe=pe,Le=Ke,xe=vt)},setOp:function(pe,Ke,vt){(z!==pe||X!==Ke||ne!==vt)&&(t.stencilOp(pe,Ke,vt),z=pe,X=Ke,ne=vt)},setLocked:function(pe){G=pe},setClear:function(pe){ve!==pe&&(t.clearStencil(pe),ve=pe)},reset:function(){G=!1,se=null,fe=null,Le=null,xe=null,z=null,X=null,ne=null,ve=null}}}let s=new i,a=new r,o=new n,l=new WeakMap,h=new WeakMap,c={},d={},u={},p=new WeakMap,g=[],v=null,m=!1,f=null,_=null,M=null,y=null,b=null,E=null,C=null,x=new Ae(0,0,0),S=0,N=!1,L=null,B=null,U=null,R=null,D=null,F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,te=0,q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=te>=2);let K=null,re={},ce=t.getParameter(t.SCISSOR_BOX),Re=t.getParameter(t.VIEWPORT),dt=new It().fromArray(ce),qe=new It().fromArray(Re);function ee(G,se,fe,Le){let xe=new Uint8Array(4),z=t.createTexture();t.bindTexture(G,z),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let X=0;X<fe;X++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(se+X,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return z}let de={};de[t.TEXTURE_2D]=ee(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=ee(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=ee(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=ee(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(t.DEPTH_TEST),a.setFunc(Ls),Ce(!1),Ne(mc),le(t.CULL_FACE),he(ji);function le(G){c[G]!==!0&&(t.enable(G),c[G]=!0)}function Fe(G){c[G]!==!1&&(t.disable(G),c[G]=!1)}function je(G,se){return u[G]!==se?(t.bindFramebuffer(G,se),u[G]=se,G===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=se),G===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=se),!0):!1}function Me(G,se){let fe=g,Le=!1;if(G){fe=p.get(se),fe===void 0&&(fe=[],p.set(se,fe));let xe=G.textures;if(fe.length!==xe.length||fe[0]!==t.COLOR_ATTACHMENT0){for(let z=0,X=xe.length;z<X;z++)fe[z]=t.COLOR_ATTACHMENT0+z;fe.length=xe.length,Le=!0}}else fe[0]!==t.BACK&&(fe[0]=t.BACK,Le=!0);Le&&t.drawBuffers(fe)}function st(G){return v!==G?(t.useProgram(G),v=G,!0):!1}let oe={[Hn]:t.FUNC_ADD,[Ip]:t.FUNC_SUBTRACT,[Pp]:t.FUNC_REVERSE_SUBTRACT};oe[Lp]=t.MIN,oe[Np]=t.MAX;let ae={[Dp]:t.ZERO,[Bp]:t.ONE,[Up]:t.SRC_COLOR,[Cu]:t.SRC_ALPHA,[Gp]:t.SRC_ALPHA_SATURATE,[Vp]:t.DST_COLOR,[Op]:t.DST_ALPHA,[Fp]:t.ONE_MINUS_SRC_COLOR,[Ru]:t.ONE_MINUS_SRC_ALPHA,[Hp]:t.ONE_MINUS_DST_COLOR,[zp]:t.ONE_MINUS_DST_ALPHA,[kp]:t.CONSTANT_COLOR,[Wp]:t.ONE_MINUS_CONSTANT_COLOR,[qp]:t.CONSTANT_ALPHA,[Xp]:t.ONE_MINUS_CONSTANT_ALPHA};function he(G,se,fe,Le,xe,z,X,ne,ve,pe){if(G===ji){m===!0&&(Fe(t.BLEND),m=!1);return}if(m===!1&&(le(t.BLEND),m=!0),G!==Rp){if(G!==f||pe!==N){if((_!==Hn||b!==Hn)&&(t.blendEquation(t.FUNC_ADD),_=Hn,b=Hn),pe)switch(G){case Rs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case un:t.blendFunc(t.ONE,t.ONE);break;case gc:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case vc:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:tt("WebGLState: Invalid blending: ",G);break}else switch(G){case Rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case un:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case gc:tt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vc:tt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:tt("WebGLState: Invalid blending: ",G);break}M=null,y=null,E=null,C=null,x.set(0,0,0),S=0,f=G,N=pe}return}xe=xe||se,z=z||fe,X=X||Le,(se!==_||xe!==b)&&(t.blendEquationSeparate(oe[se],oe[xe]),_=se,b=xe),(fe!==M||Le!==y||z!==E||X!==C)&&(t.blendFuncSeparate(ae[fe],ae[Le],ae[z],ae[X]),M=fe,y=Le,E=z,C=X),(ne.equals(x)===!1||ve!==S)&&(t.blendColor(ne.r,ne.g,ne.b,ve),x.copy(ne),S=ve),f=G,N=!1}function _e(G,se){G.side===Ui?Fe(t.CULL_FACE):le(t.CULL_FACE);let fe=G.side===xi;se&&(fe=!fe),Ce(fe),G.blending===Rs&&G.transparent===!1?he(ji):he(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);let Le=G.stencilWrite;o.setTest(Le),Le&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Xe(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(G){L!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),L=G)}function Ne(G){G!==Ap?(le(t.CULL_FACE),G!==B&&(G===mc?t.cullFace(t.BACK):G===Cp?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),B=G}function De(G){G!==U&&(W&&t.lineWidth(G),U=G)}function Xe(G,se,fe){G?(le(t.POLYGON_OFFSET_FILL),(R!==se||D!==fe)&&(R=se,D=fe,a.getReversed()&&(se=-se),t.polygonOffset(se,fe))):Fe(t.POLYGON_OFFSET_FILL)}function it(G){G?le(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function O(G){G===void 0&&(G=t.TEXTURE0+F-1),K!==G&&(t.activeTexture(G),K=G)}function xt(G,se,fe){fe===void 0&&(K===null?fe=t.TEXTURE0+F-1:fe=K);let Le=re[fe];Le===void 0&&(Le={type:void 0,texture:void 0},re[fe]=Le),(Le.type!==G||Le.texture!==se)&&(K!==fe&&(t.activeTexture(fe),K=fe),t.bindTexture(G,se||de[G]),Le.type=G,Le.texture=se)}function pt(){let G=re[K];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ye(){try{t.compressedTexImage2D(...arguments)}catch(G){tt("WebGLState:",G)}}function I(){try{t.compressedTexImage3D(...arguments)}catch(G){tt("WebGLState:",G)}}function T(){try{t.texSubImage2D(...arguments)}catch(G){tt("WebGLState:",G)}}function V(){try{t.texSubImage3D(...arguments)}catch(G){tt("WebGLState:",G)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(G){tt("WebGLState:",G)}}function ie(){try{t.compressedTexSubImage3D(...arguments)}catch(G){tt("WebGLState:",G)}}function ye(){try{t.texStorage2D(...arguments)}catch(G){tt("WebGLState:",G)}}function Se(){try{t.texStorage3D(...arguments)}catch(G){tt("WebGLState:",G)}}function k(){try{t.texImage2D(...arguments)}catch(G){tt("WebGLState:",G)}}function ge(){try{t.texImage3D(...arguments)}catch(G){tt("WebGLState:",G)}}function we(G){return d[G]!==void 0?d[G]:t.getParameter(G)}function Te(G,se){d[G]!==se&&(t.pixelStorei(G,se),d[G]=se)}function me(G){dt.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),dt.copy(G))}function Ge(G){qe.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),qe.copy(G))}function ke(G,se){let fe=h.get(se);fe===void 0&&(fe=new WeakMap,h.set(se,fe));let Le=fe.get(G);Le===void 0&&(Le=t.getUniformBlockIndex(se,G.name),fe.set(G,Le))}function Ve(G,se){let fe=h.get(se).get(G);l.get(se)!==fe&&(t.uniformBlockBinding(se,fe,G.__bindingPointIndex),l.set(se,fe))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),c={},d={},K=null,re={},u={},p=new WeakMap,g=[],v=null,m=!1,f=null,_=null,M=null,y=null,b=null,E=null,C=null,x=new Ae(0,0,0),S=0,N=!1,L=null,B=null,U=null,R=null,D=null,dt.set(0,0,t.canvas.width,t.canvas.height),qe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Fe,bindFramebuffer:je,drawBuffers:Me,useProgram:st,setBlending:he,setMaterial:_e,setFlipSided:Ce,setCullFace:Ne,setLineWidth:De,setPolygonOffset:Xe,setScissorTest:it,activeTexture:O,bindTexture:xt,unbindTexture:pt,compressedTexImage2D:Ye,compressedTexImage3D:I,texImage2D:k,texImage3D:ge,pixelStorei:Te,getParameter:we,updateUBOMapping:ke,uniformBlockBinding:Ve,texStorage2D:ye,texStorage3D:Se,texSubImage2D:T,texSubImage3D:V,compressedTexSubImage2D:Z,compressedTexSubImage3D:ie,scissor:me,viewport:Ge,reset:ot}}function Yy(t,e,i,r,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ue,c=new WeakMap,d=new Set,u,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,T){return g?new OffscreenCanvas(I,T):Os("canvas")}function m(I,T,V){let Z=1,ie=Ye(I);if((ie.width>V||ie.height>V)&&(Z=V/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ye=Math.floor(Z*ie.width),Se=Math.floor(Z*ie.height);u===void 0&&(u=v(ye,Se));let k=T?v(ye,Se):u;return k.width=ye,k.height=Se,k.getContext("2d").drawImage(I,0,0,ye,Se),et("WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+ye+"x"+Se+")."),k}else return"data"in I&&et("WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),I;return I}function f(I){return I.generateMipmaps}function _(I){t.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?t.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(I,T,V,Z,ie,ye=!1){if(I!==null){if(t[I]!==void 0)return t[I];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Se;Z&&(Se=e.get("EXT_texture_norm16"),Se||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=T;if(T===t.RED&&(V===t.FLOAT&&(k=t.R32F),V===t.HALF_FLOAT&&(k=t.R16F),V===t.UNSIGNED_BYTE&&(k=t.R8),V===t.UNSIGNED_SHORT&&Se&&(k=Se.R16_EXT),V===t.SHORT&&Se&&(k=Se.R16_SNORM_EXT)),T===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(k=t.R8UI),V===t.UNSIGNED_SHORT&&(k=t.R16UI),V===t.UNSIGNED_INT&&(k=t.R32UI),V===t.BYTE&&(k=t.R8I),V===t.SHORT&&(k=t.R16I),V===t.INT&&(k=t.R32I)),T===t.RG&&(V===t.FLOAT&&(k=t.RG32F),V===t.HALF_FLOAT&&(k=t.RG16F),V===t.UNSIGNED_BYTE&&(k=t.RG8),V===t.UNSIGNED_SHORT&&Se&&(k=Se.RG16_EXT),V===t.SHORT&&Se&&(k=Se.RG16_SNORM_EXT)),T===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(k=t.RG8UI),V===t.UNSIGNED_SHORT&&(k=t.RG16UI),V===t.UNSIGNED_INT&&(k=t.RG32UI),V===t.BYTE&&(k=t.RG8I),V===t.SHORT&&(k=t.RG16I),V===t.INT&&(k=t.RG32I)),T===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(k=t.RGB8UI),V===t.UNSIGNED_SHORT&&(k=t.RGB16UI),V===t.UNSIGNED_INT&&(k=t.RGB32UI),V===t.BYTE&&(k=t.RGB8I),V===t.SHORT&&(k=t.RGB16I),V===t.INT&&(k=t.RGB32I)),T===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(k=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(k=t.RGBA16UI),V===t.UNSIGNED_INT&&(k=t.RGBA32UI),V===t.BYTE&&(k=t.RGBA8I),V===t.SHORT&&(k=t.RGBA16I),V===t.INT&&(k=t.RGBA32I)),T===t.RGB&&(V===t.UNSIGNED_SHORT&&Se&&(k=Se.RGB16_EXT),V===t.SHORT&&Se&&(k=Se.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(k=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(k=t.R11F_G11F_B10F)),T===t.RGBA){let ge=ye?Ja:_t.getTransfer(ie);V===t.FLOAT&&(k=t.RGBA32F),V===t.HALF_FLOAT&&(k=t.RGBA16F),V===t.UNSIGNED_BYTE&&(k=ge===St?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&Se&&(k=Se.RGBA16_EXT),V===t.SHORT&&Se&&(k=Se.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(k=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(k=t.RGB5_A1)}return(k===t.R16F||k===t.R32F||k===t.RG16F||k===t.RG32F||k===t.RGBA16F||k===t.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function b(I,T){let V;return I?T===null||T===nr||T===Us?V=t.DEPTH24_STENCIL8:T===Wi?V=t.DEPTH32F_STENCIL8:T===Bs&&(V=t.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===nr||T===Us?V=t.DEPTH_COMPONENT24:T===Wi?V=t.DEPTH_COMPONENT32F:T===Bs&&(V=t.DEPTH_COMPONENT16),V}function E(I,T){return f(I)===!0||I.isFramebufferTexture&&I.minFilter!==ti&&I.minFilter!==Xt?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function C(I){let T=I.target;T.removeEventListener("dispose",C),S(T),T.isVideoTexture&&c.delete(T),T.isHTMLTexture&&d.delete(T)}function x(I){let T=I.target;T.removeEventListener("dispose",x),L(T)}function S(I){let T=r.get(I);if(T.__webglInit===void 0)return;let V=I.source,Z=p.get(V);if(Z){let ie=Z[T.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&N(I),Object.keys(Z).length===0&&p.delete(V)}r.remove(I)}function N(I){let T=r.get(I);t.deleteTexture(T.__webglTexture);let V=I.source,Z=p.get(V);delete Z[T.__cacheKey],a.memory.textures--}function L(I){let T=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(T.__webglFramebuffer[Z]))for(let ie=0;ie<T.__webglFramebuffer[Z].length;ie++)t.deleteFramebuffer(T.__webglFramebuffer[Z][ie]);else t.deleteFramebuffer(T.__webglFramebuffer[Z]);T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer[Z])}else{if(Array.isArray(T.__webglFramebuffer))for(let Z=0;Z<T.__webglFramebuffer.length;Z++)t.deleteFramebuffer(T.__webglFramebuffer[Z]);else t.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&t.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&t.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let Z=0;Z<T.__webglColorRenderbuffer.length;Z++)T.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(T.__webglColorRenderbuffer[Z]);T.__webglDepthRenderbuffer&&t.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let V=I.textures;for(let Z=0,ie=V.length;Z<ie;Z++){let ye=r.get(V[Z]);ye.__webglTexture&&(t.deleteTexture(ye.__webglTexture),a.memory.textures--),r.remove(V[Z])}r.remove(I)}let B=0;function U(){B=0}function R(){return B}function D(I){B=I}function F(){let I=B;return I>=n.maxTextures&&et("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+n.maxTextures),B+=1,I}function W(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function te(I,T){let V=r.get(I);if(I.isVideoTexture&&xt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&V.__version!==I.version){let Z=I.image;if(Z===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(V,I,T);return}}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+T)}function q(I,T){let V=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){Fe(V,I,T);return}else I.isExternalTexture&&(V.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+T)}function K(I,T){let V=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&V.__version!==I.version){Fe(V,I,T);return}i.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+T)}function re(I,T){let V=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&V.__version!==I.version){je(V,I,T);return}i.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+T)}let ce={[Ds]:t.REPEAT,[_r]:t.CLAMP_TO_EDGE,[Pl]:t.MIRRORED_REPEAT},Re={[ti]:t.NEAREST,[Zp]:t.NEAREST_MIPMAP_NEAREST,[ha]:t.NEAREST_MIPMAP_LINEAR,[Xt]:t.LINEAR,[Go]:t.LINEAR_MIPMAP_NEAREST,[an]:t.LINEAR_MIPMAP_LINEAR},dt={[Qp]:t.NEVER,[sf]:t.ALWAYS,[ef]:t.LESS,[Sh]:t.LEQUAL,[tf]:t.EQUAL,[wh]:t.GEQUAL,[rf]:t.GREATER,[nf]:t.NOTEQUAL};function qe(I,T){if(T.type===Wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Xt||T.magFilter===Go||T.magFilter===ha||T.magFilter===an||T.minFilter===Xt||T.minFilter===Go||T.minFilter===ha||T.minFilter===an)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(I,t.TEXTURE_WRAP_S,ce[T.wrapS]),t.texParameteri(I,t.TEXTURE_WRAP_T,ce[T.wrapT]),(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)&&t.texParameteri(I,t.TEXTURE_WRAP_R,ce[T.wrapR]),t.texParameteri(I,t.TEXTURE_MAG_FILTER,Re[T.magFilter]),t.texParameteri(I,t.TEXTURE_MIN_FILTER,Re[T.minFilter]),T.compareFunction&&(t.texParameteri(I,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(I,t.TEXTURE_COMPARE_FUNC,dt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ti||T.minFilter!==ha&&T.minFilter!==an||T.type===Wi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(I,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,n.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ee(I,T){let V=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",C));let Z=T.source,ie=p.get(Z);ie===void 0&&(ie={},p.set(Z,ie));let ye=W(T);if(ye!==I.__cacheKey){ie[ye]===void 0&&(ie[ye]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ie[ye].usedTimes++;let Se=ie[I.__cacheKey];Se!==void 0&&(ie[I.__cacheKey].usedTimes--,Se.usedTimes===0&&N(T)),I.__cacheKey=ye,I.__webglTexture=ie[ye].texture}return V}function de(I,T,V){return Math.floor(Math.floor(I/V)/T)}function le(I,T,V,Z){let ie=I.updateRanges;if(ie.length===0)i.texSubImage2D(t.TEXTURE_2D,0,0,0,T.width,T.height,V,Z,T.data);else{ie.sort((we,Te)=>we.start-Te.start);let ye=0;for(let we=1;we<ie.length;we++){let Te=ie[ye],me=ie[we],Ge=Te.start+Te.count,ke=de(me.start,T.width,4),Ve=de(Te.start,T.width,4);me.start<=Ge+1&&ke===Ve&&de(me.start+me.count-1,T.width,4)===ke?Te.count=Math.max(Te.count,me.start+me.count-Te.start):(++ye,ie[ye]=me)}ie.length=ye+1;let Se=i.getParameter(t.UNPACK_ROW_LENGTH),k=i.getParameter(t.UNPACK_SKIP_PIXELS),ge=i.getParameter(t.UNPACK_SKIP_ROWS);i.pixelStorei(t.UNPACK_ROW_LENGTH,T.width);for(let we=0,Te=ie.length;we<Te;we++){let me=ie[we],Ge=Math.floor(me.start/4),ke=Math.ceil(me.count/4),Ve=Ge%T.width,ot=Math.floor(Ge/T.width),G=ke;i.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(t.UNPACK_SKIP_ROWS,ot),i.texSubImage2D(t.TEXTURE_2D,0,Ve,ot,G,1,V,Z,T.data)}I.clearUpdateRanges(),i.pixelStorei(t.UNPACK_ROW_LENGTH,Se),i.pixelStorei(t.UNPACK_SKIP_PIXELS,k),i.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function Fe(I,T,V){let Z=t.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),T.isData3DTexture&&(Z=t.TEXTURE_3D);let ie=ee(I,T),ye=T.source;i.bindTexture(Z,I.__webglTexture,t.TEXTURE0+V);let Se=r.get(ye);if(ye.version!==Se.__version||ie===!0){if(i.activeTexture(t.TEXTURE0+V),!(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)){let se=_t.getPrimaries(_t.workingColorSpace),fe=T.colorSpace===Gr?null:_t.getPrimaries(T.colorSpace),Le=T.colorSpace===Gr||se===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le)}i.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment);let k=m(T.image,!1,n.maxTextureSize);k=pt(T,k);let ge=s.convert(T.format,T.colorSpace),we=s.convert(T.type),Te=y(T.internalFormat,ge,we,T.normalized,T.colorSpace,T.isVideoTexture);qe(Z,T);let me,Ge=T.mipmaps,ke=T.isVideoTexture!==!0,Ve=Se.__version===void 0||ie===!0,ot=ye.dataReady,G=E(T,k);if(T.isDepthTexture)Te=b(T.format===on,T.type),Ve&&(ke?i.texStorage2D(t.TEXTURE_2D,1,Te,k.width,k.height):i.texImage2D(t.TEXTURE_2D,0,Te,k.width,k.height,0,ge,we,null));else if(T.isDataTexture)if(Ge.length>0){ke&&Ve&&i.texStorage2D(t.TEXTURE_2D,G,Te,Ge[0].width,Ge[0].height);for(let se=0,fe=Ge.length;se<fe;se++)me=Ge[se],ke?ot&&i.texSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,ge,we,me.data):i.texImage2D(t.TEXTURE_2D,se,Te,me.width,me.height,0,ge,we,me.data);T.generateMipmaps=!1}else ke?(Ve&&i.texStorage2D(t.TEXTURE_2D,G,Te,k.width,k.height),ot&&le(T,k,ge,we)):i.texImage2D(t.TEXTURE_2D,0,Te,k.width,k.height,0,ge,we,k.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ke&&Ve&&i.texStorage3D(t.TEXTURE_2D_ARRAY,G,Te,Ge[0].width,Ge[0].height,k.depth);for(let se=0,fe=Ge.length;se<fe;se++)if(me=Ge[se],T.format!==qi)if(ge!==null)if(ke){if(ot)if(T.layerUpdates.size>0){let Le=su(me.width,me.height,T.format,T.type);for(let xe of T.layerUpdates){let z=me.data.subarray(xe*Le/me.data.BYTES_PER_ELEMENT,(xe+1)*Le/me.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,xe,me.width,me.height,1,ge,z)}}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,k.depth,ge,me.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Te,me.width,me.height,k.depth,0,me.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?ot&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,me.width,me.height,k.depth,ge,we,me.data):i.texImage3D(t.TEXTURE_2D_ARRAY,se,Te,me.width,me.height,k.depth,0,ge,we,me.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{ke&&Ve&&i.texStorage2D(t.TEXTURE_2D,G,Te,Ge[0].width,Ge[0].height);for(let se=0,fe=Ge.length;se<fe;se++)me=Ge[se],T.format!==qi?ge!==null?ke?ot&&i.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,ge,me.data):i.compressedTexImage2D(t.TEXTURE_2D,se,Te,me.width,me.height,0,me.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?ot&&i.texSubImage2D(t.TEXTURE_2D,se,0,0,me.width,me.height,ge,we,me.data):i.texImage2D(t.TEXTURE_2D,se,Te,me.width,me.height,0,ge,we,me.data)}else if(T.isDataArrayTexture)if(ke){if(Ve&&i.texStorage3D(t.TEXTURE_2D_ARRAY,G,Te,k.width,k.height,k.depth),ot)if(T.layerUpdates.size>0){let se=su(k.width,k.height,T.format,T.type);for(let fe of T.layerUpdates){let Le=k.data.subarray(fe*se/k.data.BYTES_PER_ELEMENT,(fe+1)*se/k.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,k.width,k.height,1,ge,we,Le)}T.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,ge,we,k.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,k.width,k.height,k.depth,0,ge,we,k.data);else if(T.isData3DTexture)ke?(Ve&&i.texStorage3D(t.TEXTURE_3D,G,Te,k.width,k.height,k.depth),ot&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,ge,we,k.data)):i.texImage3D(t.TEXTURE_3D,0,Te,k.width,k.height,k.depth,0,ge,we,k.data);else if(T.isFramebufferTexture){if(Ve)if(ke)i.texStorage2D(t.TEXTURE_2D,G,Te,k.width,k.height);else{let se=k.width,fe=k.height;for(let Le=0;Le<G;Le++)i.texImage2D(t.TEXTURE_2D,Le,Te,se,fe,0,ge,we,null),se>>=1,fe>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in t){let se=t.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),k.parentNode!==se){se.appendChild(k),d.add(T),se.onpaint=fe=>{let Le=fe.changedElements;for(let xe of d)Le.includes(xe.image)&&(xe.needsUpdate=!0)},se.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,k);else{let fe=t.RGBA,Le=t.RGBA,xe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,fe,Le,xe,k)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ge.length>0){if(ke&&Ve){let se=Ye(Ge[0]);i.texStorage2D(t.TEXTURE_2D,G,Te,se.width,se.height)}for(let se=0,fe=Ge.length;se<fe;se++)me=Ge[se],ke?ot&&i.texSubImage2D(t.TEXTURE_2D,se,0,0,ge,we,me):i.texImage2D(t.TEXTURE_2D,se,Te,ge,we,me);T.generateMipmaps=!1}else if(ke){if(Ve){let se=Ye(k);i.texStorage2D(t.TEXTURE_2D,G,Te,se.width,se.height)}ot&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,we,k)}else i.texImage2D(t.TEXTURE_2D,0,Te,ge,we,k);f(T)&&_(Z),Se.__version=ye.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function je(I,T,V){if(T.image.length!==6)return;let Z=ee(I,T),ie=T.source;i.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+V);let ye=r.get(ie);if(ie.version!==ye.__version||Z===!0){i.activeTexture(t.TEXTURE0+V);let Se=_t.getPrimaries(_t.workingColorSpace),k=T.colorSpace===Gr?null:_t.getPrimaries(T.colorSpace),ge=T.colorSpace===Gr||Se===k?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(t.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let we=T.isCompressedTexture||T.image[0].isCompressedTexture,Te=T.image[0]&&T.image[0].isDataTexture,me=[];for(let z=0;z<6;z++)!we&&!Te?me[z]=m(T.image[z],!0,n.maxCubemapSize):me[z]=Te?T.image[z].image:T.image[z],me[z]=pt(T,me[z]);let Ge=me[0],ke=s.convert(T.format,T.colorSpace),Ve=s.convert(T.type),ot=y(T.internalFormat,ke,Ve,T.normalized,T.colorSpace),G=T.isVideoTexture!==!0,se=ye.__version===void 0||Z===!0,fe=ie.dataReady,Le=E(T,Ge);qe(t.TEXTURE_CUBE_MAP,T);let xe;if(we){G&&se&&i.texStorage2D(t.TEXTURE_CUBE_MAP,Le,ot,Ge.width,Ge.height);for(let z=0;z<6;z++){xe=me[z].mipmaps;for(let X=0;X<xe.length;X++){let ne=xe[X];T.format!==qi?ke!==null?G?fe&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,X,0,0,ne.width,ne.height,ke,ne.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,X,ot,ne.width,ne.height,0,ne.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?fe&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,X,0,0,ne.width,ne.height,ke,Ve,ne.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,X,ot,ne.width,ne.height,0,ke,Ve,ne.data)}}}else{if(xe=T.mipmaps,G&&se){xe.length>0&&Le++;let z=Ye(me[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,Le,ot,z.width,z.height)}for(let z=0;z<6;z++)if(Te){G?fe&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,me[z].width,me[z].height,ke,Ve,me[z].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ot,me[z].width,me[z].height,0,ke,Ve,me[z].data);for(let X=0;X<xe.length;X++){let ne=xe[X].image[z].image;G?fe&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,X+1,0,0,ne.width,ne.height,ke,Ve,ne.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,X+1,ot,ne.width,ne.height,0,ke,Ve,ne.data)}}else{G?fe&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ke,Ve,me[z]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,ot,ke,Ve,me[z]);for(let X=0;X<xe.length;X++){let ne=xe[X];G?fe&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,X+1,0,0,ke,Ve,ne.image[z]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,X+1,ot,ke,Ve,ne.image[z])}}}f(T)&&_(t.TEXTURE_CUBE_MAP),ye.__version=ie.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function Me(I,T,V,Z,ie,ye){let Se=s.convert(V.format,V.colorSpace),k=s.convert(V.type),ge=y(V.internalFormat,Se,k,V.normalized,V.colorSpace),we=r.get(T),Te=r.get(V);if(Te.__renderTarget=T,!we.__hasExternalTextures){let me=Math.max(1,T.width>>ye),Ge=Math.max(1,T.height>>ye);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?i.texImage3D(ie,ye,ge,me,Ge,T.depth,0,Se,k,null):i.texImage2D(ie,ye,ge,me,Ge,0,Se,k,null)}i.bindFramebuffer(t.FRAMEBUFFER,I),O(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ie,Te.__webglTexture,0,it(T)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ie,Te.__webglTexture,ye),i.bindFramebuffer(t.FRAMEBUFFER,null)}function st(I,T,V){if(t.bindRenderbuffer(t.RENDERBUFFER,I),T.depthBuffer){let Z=T.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,ye=b(T.stencilBuffer,ie),Se=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;O(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,it(T),ye,T.width,T.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,it(T),ye,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ye,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Se,t.RENDERBUFFER,I)}else{let Z=T.textures;for(let ie=0;ie<Z.length;ie++){let ye=Z[ie],Se=s.convert(ye.format,ye.colorSpace),k=s.convert(ye.type),ge=y(ye.internalFormat,Se,k,ye.normalized,ye.colorSpace);O(T)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,it(T),ge,T.width,T.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,it(T),ge,T.width,T.height):t.renderbufferStorage(t.RENDERBUFFER,ge,T.width,T.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(I,T,V){let Z=T.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(t.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ie=r.get(T.depthTexture);if(ie.__renderTarget=T,(!ie.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),Z){if(ie.__webglInit===void 0&&(ie.__webglInit=!0,T.depthTexture.addEventListener("dispose",C)),ie.__webglTexture===void 0){ie.__webglTexture=t.createTexture(),i.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),qe(t.TEXTURE_CUBE_MAP,T.depthTexture);let we=s.convert(T.depthTexture.format),Te=s.convert(T.depthTexture.type),me;T.depthTexture.format===xr?me=t.DEPTH_COMPONENT24:T.depthTexture.format===on&&(me=t.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,me,T.width,T.height,0,we,Te,null)}}else te(T.depthTexture,0);let ye=ie.__webglTexture,Se=it(T),k=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,ge=T.depthTexture.format===on?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(T.depthTexture.format===xr)O(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ge,k,ye,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,ge,k,ye,0);else if(T.depthTexture.format===on)O(T)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ge,k,ye,0,Se):t.framebufferTexture2D(t.FRAMEBUFFER,ge,k,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(I){let T=r.get(I),V=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let Z=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),Z){let ie=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),T.__depthDisposeCallback=ie}T.__boundDepthTexture=Z}if(I.depthTexture&&!T.__autoAllocateDepthBuffer)if(V)for(let Z=0;Z<6;Z++)oe(T.__webglFramebuffer[Z],I,Z);else{let Z=I.texture.mipmaps;Z&&Z.length>0?oe(T.__webglFramebuffer[0],I,0):oe(T.__webglFramebuffer,I,0)}else if(V){T.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(i.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[Z]),T.__webglDepthbuffer[Z]===void 0)T.__webglDepthbuffer[Z]=t.createRenderbuffer(),st(T.__webglDepthbuffer[Z],I,!1);else{let ie=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,ye),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ye)}}else{let Z=I.texture.mipmaps;if(Z&&Z.length>0?i.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(t.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=t.createRenderbuffer(),st(T.__webglDepthbuffer,I,!1);else{let ie=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=T.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ye),t.framebufferRenderbuffer(t.FRAMEBUFFER,ie,t.RENDERBUFFER,ye)}}i.bindFramebuffer(t.FRAMEBUFFER,null)}function he(I,T,V){let Z=r.get(I);T!==void 0&&Me(Z.__webglFramebuffer,I,I.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&ae(I)}function _e(I){let T=I.texture,V=r.get(I),Z=r.get(T);I.addEventListener("dispose",x);let ie=I.textures,ye=I.isWebGLCubeRenderTarget===!0,Se=ie.length>1;if(Se||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=T.version,a.memory.textures++),ye){V.__webglFramebuffer=[];for(let k=0;k<6;k++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[k]=[];for(let ge=0;ge<T.mipmaps.length;ge++)V.__webglFramebuffer[k][ge]=t.createFramebuffer()}else V.__webglFramebuffer[k]=t.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let k=0;k<T.mipmaps.length;k++)V.__webglFramebuffer[k]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(Se)for(let k=0,ge=ie.length;k<ge;k++){let we=r.get(ie[k]);we.__webglTexture===void 0&&(we.__webglTexture=t.createTexture(),a.memory.textures++)}if(I.samples>0&&O(I)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let k=0;k<ie.length;k++){let ge=ie[k];V.__webglColorRenderbuffer[k]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[k]);let we=s.convert(ge.format,ge.colorSpace),Te=s.convert(ge.type),me=y(ge.internalFormat,we,Te,ge.normalized,ge.colorSpace,I.isXRRenderTarget===!0),Ge=it(I);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ge,me,I.width,I.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,V.__webglColorRenderbuffer[k])}t.bindRenderbuffer(t.RENDERBUFFER,null),I.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),st(V.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ye){i.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),qe(t.TEXTURE_CUBE_MAP,T);for(let k=0;k<6;k++)if(T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)Me(V.__webglFramebuffer[k][ge],I,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+k,ge);else Me(V.__webglFramebuffer[k],I,T,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);f(T)&&_(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Se){for(let k=0,ge=ie.length;k<ge;k++){let we=ie[k],Te=r.get(we),me=t.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(me,Te.__webglTexture),qe(me,we),Me(V.__webglFramebuffer,I,we,t.COLOR_ATTACHMENT0+k,me,0),f(we)&&_(me)}i.unbindTexture()}else{let k=t.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(k=I.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(k,Z.__webglTexture),qe(k,T),T.mipmaps&&T.mipmaps.length>0)for(let ge=0;ge<T.mipmaps.length;ge++)Me(V.__webglFramebuffer[ge],I,T,t.COLOR_ATTACHMENT0,k,ge);else Me(V.__webglFramebuffer,I,T,t.COLOR_ATTACHMENT0,k,0);f(T)&&_(k),i.unbindTexture()}I.depthBuffer&&ae(I)}function Ce(I){let T=I.textures;for(let V=0,Z=T.length;V<Z;V++){let ie=T[V];if(f(ie)){let ye=M(I),Se=r.get(ie).__webglTexture;i.bindTexture(ye,Se),_(ye),i.unbindTexture()}}}let Ne=[],De=[];function Xe(I){if(I.samples>0){if(O(I)===!1){let T=I.textures,V=I.width,Z=I.height,ie=t.COLOR_BUFFER_BIT,ye=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Se=r.get(I),k=T.length>1;if(k)for(let we=0;we<T.length;we++)i.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);let ge=I.texture.mipmaps;ge&&ge.length>0?i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let we=0;we<T.length;we++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),k){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let Te=r.get(T[we]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,V,Z,0,0,V,Z,ie,t.NEAREST),l===!0&&(Ne.length=0,De.length=0,Ne.push(t.COLOR_ATTACHMENT0+we),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(Ne.push(ye),De.push(ye),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,De)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ne))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),k)for(let we=0;we<T.length;we++){i.bindFramebuffer(t.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.RENDERBUFFER,Se.__webglColorRenderbuffer[we]);let Te=r.get(T[we]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,Se.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+we,t.TEXTURE_2D,Te,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let T=I.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[T])}}}function it(I){return Math.min(n.maxSamples,I.samples)}function O(I){let T=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function xt(I){let T=a.render.frame;c.get(I)!==T&&(c.set(I,T),I.update())}function pt(I,T){let V=I.colorSpace,Z=I.format,ie=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||V!==$a&&V!==Gr&&(_t.getTransfer(V)===St?(Z!==qi||ie!==Ri)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):tt("WebGLTextures: Unsupported texture color space:",V)),T}function Ye(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.getTextureUnits=R,this.setTextureUnits=D,this.setTexture2D=te,this.setTexture2DArray=q,this.setTexture3D=K,this.setTextureCube=re,this.rebindTextures=he,this.setupRenderTarget=_e,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=O,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function Zy(t,e){function i(r,n=Gr){let s,a=_t.getTransfer(n);if(r===Ri)return t.UNSIGNED_BYTE;if(r===vh)return t.UNSIGNED_SHORT_4_4_4_4;if(r===_h)return t.UNSIGNED_SHORT_5_5_5_1;if(r===Du)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===Bu)return t.UNSIGNED_INT_10F_11F_11F_REV;if(r===Lu)return t.BYTE;if(r===Nu)return t.SHORT;if(r===Bs)return t.UNSIGNED_SHORT;if(r===gh)return t.INT;if(r===nr)return t.UNSIGNED_INT;if(r===Wi)return t.FLOAT;if(r===hi)return t.HALF_FLOAT;if(r===Uu)return t.ALPHA;if(r===Fu)return t.RGB;if(r===qi)return t.RGBA;if(r===xr)return t.DEPTH_COMPONENT;if(r===on)return t.DEPTH_STENCIL;if(r===yh)return t.RED;if(r===xh)return t.RED_INTEGER;if(r===pn)return t.RG;if(r===Mh)return t.RG_INTEGER;if(r===bh)return t.RGBA_INTEGER;if(r===Va||r===Ha||r===Ga||r===ka)if(a===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ka)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ha)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ga)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ka)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ll||r===Nl||r===Dl||r===Bl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Ll)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Dl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ul||r===Fl||r===Ol||r===zl||r===Vl||r===Ya||r===Hl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Ul||r===Fl)return a===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===Ol)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(r===zl)return s.COMPRESSED_R11_EAC;if(r===Vl)return s.COMPRESSED_SIGNED_R11_EAC;if(r===Ya)return s.COMPRESSED_RG11_EAC;if(r===Hl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Gl||r===kl||r===Wl||r===ql||r===Xl||r===jl||r===Yl||r===Zl||r===Kl||r===$l||r===Jl||r===Ql||r===eh||r===th)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===Gl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===kl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ql)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Yl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Zl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Kl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$l)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Jl)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ql)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eh)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===th)return a===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ih||r===rh||r===nh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===ih)return a===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===rh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sh||r===ah||r===Za||r===oh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===sh)return s.COMPRESSED_RED_RGTC1_EXT;if(r===ah)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Za)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===oh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Us?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:i}}var Ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$y=`
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

}`,Jy=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new $u(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new zt({vertexShader:Ky,fragmentShader:$y,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ze(new wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Qy=class extends mn{constructor(t,e){super();let i=this,r=null,n=1,s=null,a="local-floor",o=1,l=null,h=null,c=null,d=null,u=null,p=null,g=typeof XRWebGLBinding<"u",v=new Jy,m={},f=e.getContextAttributes(),_=null,M=null,y=[],b=[],E=new ue,C=null,x=null,S=new yi;S.viewport=new It;let N=new yi;N.viewport=new It;let L=[S,N],B=new $m,U=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let de=y[ee];return de===void 0&&(de=new $o,y[ee]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ee){let de=y[ee];return de===void 0&&(de=new $o,y[ee]=de),de.getGripSpace()},this.getHand=function(ee){let de=y[ee];return de===void 0&&(de=new $o,y[ee]=de),de.getHandSpace()};function D(ee){let de=b.indexOf(ee.inputSource);if(de===-1)return;let le=y[de];le!==void 0&&(le.update(ee.inputSource,ee.frame,l||s),le.dispatchEvent({type:ee.type,data:ee.inputSource}))}function F(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",W);for(let ee=0;ee<y.length;ee++){let de=b[ee];de!==null&&(b[ee]=null,y[ee].disconnect(de))}U=null,R=null,v.reset();for(let ee in m)delete m[ee];if(t.setRenderTarget(_),u=null,d=null,c=null,r=null,M=null,qe.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),x!==null){let ee=x.camera;ee.fov=x.fov,ee.zoom=x.zoom,ee.updateProjectionMatrix(),x=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){n=ee,i.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){a=ee,i.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c===null&&g&&(c=new XRWebGLBinding(r,e)),c},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(ee){if(r=ee,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",F),r.addEventListener("inputsourceschange",W),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,le=null,Fe=null;f.depth&&(Fe=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,de=f.stencil?on:xr,le=f.stencil?Us:nr);let je={colorFormat:e.RGBA8,depthFormat:Fe,scaleFactor:n};c=this.getBinding(),d=c.createProjectionLayer(je),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ii(d.textureWidth,d.textureHeight,{format:qi,type:Ri,depthTexture:new zs(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let de={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:n};u=new XRWebGLLayer(r,e,de),r.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new ii(u.framebufferWidth,u.framebufferHeight,{format:qi,type:Ri,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function W(ee){for(let de=0;de<ee.removed.length;de++){let le=ee.removed[de],Fe=b.indexOf(le);Fe>=0&&(b[Fe]=null,y[Fe].disconnect(le))}for(let de=0;de<ee.added.length;de++){let le=ee.added[de],Fe=b.indexOf(le);if(Fe===-1){for(let Me=0;Me<y.length;Me++)if(Me>=b.length){b.push(le),Fe=Me;break}else if(b[Me]===null){b[Me]=le,Fe=Me;break}if(Fe===-1)break}let je=y[Fe];je&&je.connect(le)}}let te=new P,q=new P;function K(ee,de,le){te.setFromMatrixPosition(de.matrixWorld),q.setFromMatrixPosition(le.matrixWorld);let Fe=te.distanceTo(q),je=de.projectionMatrix.elements,Me=le.projectionMatrix.elements,st=je[14]/(je[10]-1),oe=je[14]/(je[10]+1),ae=(je[9]+1)/je[5],he=(je[9]-1)/je[5],_e=(je[8]-1)/je[0],Ce=(Me[8]+1)/Me[0],Ne=st*_e,De=st*Ce,Xe=Fe/(-_e+Ce),it=Xe*-_e;if(de.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(it),ee.translateZ(Xe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),je[10]===-1)ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let O=st+Xe,xt=oe+Xe,pt=Ne-it,Ye=De+(Fe-it),I=ae*oe/xt*O,T=he*oe/xt*O;ee.projectionMatrix.makePerspective(pt,Ye,I,T,O,xt),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function re(ee,de){de===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(de.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(r===null)return;let de=ee.near,le=ee.far;v.texture!==null&&(v.depthNear>0&&(de=v.depthNear),v.depthFar>0&&(le=v.depthFar)),B.near=N.near=S.near=de,B.far=N.far=S.far=le,(U!==B.near||R!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),U=B.near,R=B.far),B.layers.mask=ee.layers.mask|6,S.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let Fe=ee.parent,je=B.cameras;re(B,Fe);for(let Me=0;Me<je.length;Me++)re(je[Me],Fe);je.length===2?K(B,S,N):B.projectionMatrix.copy(S.projectionMatrix),x===null&&ee.isPerspectiveCamera&&(x={camera:ee,fov:ee.fov,zoom:ee.zoom}),ce(ee,B,Fe)};function ce(ee,de,le){le===null?ee.matrix.copy(de.matrixWorld):(ee.matrix.copy(le.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(de.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(de.projectionMatrix),ee.projectionMatrixInverse.copy(de.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Qa*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&u===null))return o},this.setFoveation=function(ee){o=ee,d!==null&&(d.fixedFoveation=ee),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ee)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(B)},this.getCameraTexture=function(ee){return m[ee]};let Re=null;function dt(ee,de){if(h=de.getViewerPose(l||s),p=de,h!==null){let le=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let Fe=!1;le.length!==B.cameras.length&&(B.cameras.length=0,Fe=!0);for(let Me=0;Me<le.length;Me++){let st=le[Me],oe=null;if(u!==null)oe=u.getViewport(st);else{let he=c.getViewSubImage(d,st);oe=he.viewport,Me===0&&(t.setRenderTargetTextures(M,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(M))}let ae=L[Me];ae===void 0&&(ae=new yi,ae.layers.enable(Me),ae.viewport=new It,L[Me]=ae),ae.matrix.fromArray(st.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(st.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(oe.x,oe.y,oe.width,oe.height),Me===0&&(B.matrix.copy(ae.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Fe===!0&&B.cameras.push(ae)}let je=r.enabledFeatures;if(je&&je.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){c=i.getBinding();let Me=c.getDepthInformation(le[0]);Me&&Me.isValid&&Me.texture&&v.init(Me,r.renderState)}if(je&&je.includes("camera-access")&&g){t.state.unbindTexture(),c=i.getBinding();for(let Me=0;Me<le.length;Me++){let st=le[Me].camera;if(st){let oe=m[st];oe||(oe=new $u,m[st]=oe);let ae=c.getCameraImage(st);oe.sourceTexture=ae}}}}for(let le=0;le<y.length;le++){let Fe=b[le],je=y[le];Fe!==null&&je!==void 0&&je.update(Fe,de,l||s)}Re&&Re(ee,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),p=null}let qe=new Ud;qe.setAnimationLoop(dt),this.setAnimationLoop=function(ee){Re=ee},this.dispose=function(){}}},ex=new lt,kd=new ut;kd.set(-1,0,0,0,1,0,0,0,1);function tx(t,e){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,Cd(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,_,M,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),u(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,_,M):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===xi&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===xi&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let _=e.get(f),M=_.envMap,y=_.envMapRotation;M&&(m.envMap.value=M,m.envMapRotation.value.setFromMatrix4(ex.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(kd),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=M*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xi&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function ix(t,e,i,r){let n={},s={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let E=b.program;r.uniformBlockBinding(y,E)}function h(y,b){let E=n[y.id];E===void 0&&(m(y),E=c(y),n[y.id]=E,y.addEventListener("dispose",_));let C=b.program;r.updateUBOMapping(y,C);let x=e.render.frame;s[y.id]!==x&&(u(y),s[y.id]=x)}function c(y){let b=d();y.__bindingPointIndex=b;let E=t.createBuffer(),C=y.__size,x=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,E),E}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return tt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=n[y.id],E=y.uniforms,C=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let x=0,S=E.length;x<S;x++){let N=E[x];if(Array.isArray(N))for(let L=0,B=N.length;L<B;L++)p(N[L],x,L,C);else p(N,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,b,E,C){if(v(y,b,E,C)===!0){let x=y.__offset,S=y.value;if(Array.isArray(S)){let N=0;for(let L=0;L<S.length;L++){let B=S[L],U=f(B);g(B,y.__data,N),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(N+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,y.__data)}}function g(y,b,E){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,E)}function v(y,b,E,C){let x=y.value,S=b+"_"+E;if(C[S]===void 0)return typeof x=="number"||typeof x=="boolean"?C[S]=x:ArrayBuffer.isView(x)?C[S]=x.slice():C[S]=x.clone(),!0;{let N=C[S];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return C[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function m(y){let b=y.uniforms,E=0,C=16;for(let S=0,N=b.length;S<N;S++){let L=Array.isArray(b[S])?b[S]:[b[S]];for(let B=0,U=L.length;B<U;B++){let R=L[B],D=Array.isArray(R.value)?R.value:[R.value];for(let F=0,W=D.length;F<W;F++){let te=D[F],q=f(te),K=E%C,re=K%q.boundary,ce=K+re;E+=re,ce!==0&&C-ce<q.storage&&(E+=C-ce),R.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=E,E+=q.storage}}}let x=E%C;return x>0&&(E+=C-x),y.__size=E,y.__cache={},this}function f(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):et("WebGLRenderer: Unsupported uniform value type.",y),b}function _(y){let b=y.target;b.removeEventListener("dispose",_);let E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(n[b.id]),delete n[b.id],delete s[b.id]}function M(){for(let y in n)t.deleteBuffer(n[y]);a=[],n={},s={}}return{bind:l,update:h,dispose:M}}var rx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),er=null;function nx(){return er===null&&(er=new co(rx,16,16,pn,hi),er.name="DFG_LUT",er.minFilter=Xt,er.magFilter=Xt,er.wrapS=_r,er.wrapT=_r,er.generateMipmaps=!1,er.needsUpdate=!0),er}var Wd=class{constructor(t={}){let{canvas:e=hf(),context:i=null,depth:r=!0,stencil:n=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1,outputBufferType:u=Ri}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;let g=u,v=new Set([bh,Mh,xh]),m=new Set([Ri,nr,Bs,Us,vh,_h]),f=new Uint32Array(4),_=new Int32Array(4),M=new P,y=null,b=null,E=[],C=[],x=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,N=!1,L=null,B=null,U=null,R=null;this._outputColorSpace=li;let D=0,F=0,W=null,te=-1,q=null,K=new It,re=new It,ce=null,Re=new Ae(0),dt=0,qe=e.width,ee=e.height,de=1,le=null,Fe=null,je=new It(0,0,qe,ee),Me=new It(0,0,qe,ee),st=!1,oe=new ts,ae=!1,he=!1,_e=new lt,Ce=new P,Ne=new It,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function it(){return W===null?de:1}let O=i;function xt(A,H){return e.getContext(A,H)}let pt,Ye,I,T,V,Z,ie,ye,Se,k,ge,we,Te,me,Ge,ke,Ve,ot,G,se,fe,Le,xe;try{let A={alpha:!0,depth:r,stencil:n,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r186"),e.addEventListener("webglcontextlost",ne,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",pe,!1),O===null){let H="webgl2";if(O=xt(H,A),O===null)throw xt(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}z()}catch(A){throw e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),tt("WebGLRenderer: "+A.message),A}function z(){pt=new n_(O),pt.init(),fe=new Zy(O,pt),Ye=new Yv(O,pt,t,fe),I=new jy(O,pt),Ye.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),B=O.createFramebuffer(),U=O.createFramebuffer(),R=O.createFramebuffer(),T=new o_(O),V=new Ny,Z=new Yy(O,pt,I,V,Ye,fe,T),ie=new r_(S),ye=new hg(O),Le=new Xv(O,ye),Se=new s_(O,ye,T,Le),k=new h_(O,Se,ye,Le,T),ot=new l_(O,Ye,Z),Ge=new Zv(V),ge=new Ly(S,ie,pt,Ye,Le,Ge),we=new tx(S,V),Te=new By,me=new Hy(pt),Ve=new qv(S,ie,I,k,p,o),ke=new Xy(S,k,Ye),xe=new ix(O,T,Ye,I),G=new jv(O,pt,T),se=new a_(O,pt,T),T.programs=ge.programs,S.capabilities=Ye,S.extensions=pt,S.properties=V,S.renderLists=Te,S.shadowMap=ke,S.state=I,S.info=T}g!==Ri&&(x=new u_(g,e.width,e.height,a,r,n));let X=new Qy(S,O);this.xr=X,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=pt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=pt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(A){A!==void 0&&(de=A,this.setSize(qe,ee,!1))},this.getSize=function(A){return A.set(qe,ee)},this.setSize=function(A,H,$=!0){if(X.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=A,ee=H,e.width=Math.floor(A*de),e.height=Math.floor(H*de),$===!0&&(e.style.width=A+"px",e.style.height=H+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(qe*de,ee*de).floor()},this.setDrawingBufferSize=function(A,H,$){qe=A,ee=H,de=$,e.width=Math.floor(A*$),e.height=Math.floor(H*$),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(g===Ri){tt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(K)},this.getViewport=function(A){return A.copy(je)},this.setViewport=function(A,H,$,Y){A.isVector4?je.set(A.x,A.y,A.z,A.w):je.set(A,H,$,Y),I.viewport(K.copy(je).multiplyScalar(de).round())},this.getScissor=function(A){return A.copy(Me)},this.setScissor=function(A,H,$,Y){A.isVector4?Me.set(A.x,A.y,A.z,A.w):Me.set(A,H,$,Y),I.scissor(re.copy(Me).multiplyScalar(de).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(A){I.setScissorTest(st=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){Fe=A},this.getClearColor=function(A){return A.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,$=!0){let Y=0;if(A){let j=!1;if(W!==null){let be=W.texture.format;j=v.has(be)}if(j){let be=W.texture.type,Ie=m.has(be),Be=Ve.getClearColor(),Oe=Ve.getClearAlpha(),$e=Be.r,mt=Be.g,ht=Be.b;Ie?(f[0]=$e,f[1]=mt,f[2]=ht,f[3]=Oe,O.clearBufferuiv(O.COLOR,0,f)):(_[0]=$e,_[1]=mt,_[2]=ht,_[3]=Oe,O.clearBufferiv(O.COLOR,0,_))}else Y|=O.COLOR_BUFFER_BIT}H&&(Y|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(Y|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&O.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),L=A},this.dispose=function(){e.removeEventListener("webglcontextlost",ne,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),Ve.dispose(),Te.dispose(),me.dispose(),V.dispose(),ie.dispose(),k.dispose(),Le.dispose(),xe.dispose(),ge.dispose(),X.dispose(),X.removeEventListener("sessionstart",Qt),X.removeEventListener("sessionend",Pr),gi.stop()};function ne(A){A.preventDefault(),wc("WebGLRenderer: Context Lost."),N=!0}function ve(){wc("WebGLRenderer: Context Restored."),N=!1;let A=T.autoReset,H=ke.enabled,$=ke.autoUpdate,Y=ke.needsUpdate,j=ke.type;z(),T.autoReset=A,ke.enabled=H,ke.autoUpdate=$,ke.needsUpdate=Y,ke.type=j}function pe(A){tt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ke(A){let H=A.target;H.removeEventListener("dispose",Ke),vt(H)}function vt(A){Jt(A),V.remove(A)}function Jt(A){let H=V.get(A).programs;H!==void 0&&(H.forEach(function($){ge.releaseProgram($)}),A.isShaderMaterial&&ge.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,$,Y,j,be){H===null&&(H=De);let Ie=j.isMesh&&j.matrixWorld.determinantAffine()<0,Be=Kr(A,H,$,Y,j);I.setMaterial(Y,Ie);let Oe=$.index,$e=1;if(Y.wireframe===!0){if(Oe=Se.getWireframeAttribute($),Oe===void 0)return;$e=2}let mt=$.drawRange,ht=$.attributes.position,He=mt.start*$e,ct=(mt.start+mt.count)*$e;be!==null&&(He=Math.max(He,be.start*$e),ct=Math.min(ct,(be.start+be.count)*$e)),Oe!==null?(He=Math.max(He,0),ct=Math.min(ct,Oe.count)):ht!=null&&(He=Math.max(He,0),ct=Math.min(ct,ht.count));let Ht=ct-He;if(Ht<0||Ht===1/0)return;Le.setup(j,Y,Be,$,Oe);let At,yt=G;if(Oe!==null&&(At=ye.get(Oe),yt=se,yt.setIndex(At)),j.isMesh)Y.wireframe===!0?(I.setLineWidth(Y.wireframeLinewidth*it()),yt.setMode(O.LINES)):yt.setMode(O.TRIANGLES);else if(j.isLine){let Tt=Y.linewidth;Tt===void 0&&(Tt=1),I.setLineWidth(Tt*it()),j.isLineSegments?yt.setMode(O.LINES):j.isLineLoop?yt.setMode(O.LINE_LOOP):yt.setMode(O.LINE_STRIP)}else j.isPoints?yt.setMode(O.POINTS):j.isSprite&&yt.setMode(O.TRIANGLES);if(j.isBatchedMesh)if(pt.get("WEBGL_multi_draw"))yt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let Tt=j._multiDrawStarts,We=j._multiDrawCounts,qt=j._multiDrawCount,$i=Oe?ye.get(Oe).bytesPerElement:1,si=V.get(Y).currentProgram.getUniforms();for(let wi=0;wi<qt;wi++)si.setValue(O,"_gl_DrawID",wi),yt.render(Tt[wi]/$i,We[wi])}else if(j.isInstancedMesh)yt.renderInstances(He,Ht,j.count);else if($.isInstancedBufferGeometry){let Tt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,We=Math.min($.instanceCount,Tt);yt.renderInstances(He,Ht,We)}else yt.render(He,Ht)};function Ut(A,H,$,Y){L!==null&&A.isNodeMaterial&&L.setObject(Y,A),ae===!0&&Ge.setState(A,$,!1),A.transparent===!0&&A.side===Ui&&A.forceSinglePass===!1?(A.side=xi,A.needsUpdate=!0,Lr(A,H,Y),A.side=cn,A.needsUpdate=!0,Lr(A,H,Y),A.side=Ui):Lr(A,H,Y)}this.compile=function(A,H,$=null){$===null&&($=A),L!==null&&L.renderStart(A,H,$),b=me.get($),b.init(H),C.push(b),$.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),A!==$&&A.traverseVisible(function(j){j.isLight&&j.layers.test(H.layers)&&(b.pushLight(j),j.castShadow&&b.pushShadow(j))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),he=this.localClippingEnabled,ae=Ge.init(this.clippingPlanes,he),ae===!0&&Ge.setGlobalState(this.clippingPlanes,H),L!==null&&ke.render(b.state.shadowsArray,$,H);let Y=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let be=j.material;if(be)if(Array.isArray(be))for(let Ie=0;Ie<be.length;Ie++){let Be=be[Ie];Ut(Be,$,H,j),Y.add(Be)}else Ut(be,$,H,j),Y.add(be)}),b=C.pop(),L!==null&&L.renderEnd(),Y},this.compileAsync=function(A,H,$=null){let Y=this.compile(A,H,$);return new Promise(j=>{function be(){if(Y.forEach(function(Ie){let Be=V.get(Ie).currentProgram;(Be===void 0||Be.isReady())&&Y.delete(Ie)}),Y.size===0){j(A);return}setTimeout(be,10)}pt.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Vt=null;function mi(A){Vt&&Vt(A)}function Qt(){gi.stop()}function Pr(){gi.start()}let gi=new Ud;gi.setAnimationLoop(mi),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(A){Vt=A,X.setAnimationLoop(A),A===null?gi.stop():gi.start()},X.addEventListener("sessionstart",Qt),X.addEventListener("sessionend",Pr),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){tt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;L!==null&&L.renderStart(A,H);let $=X.enabled===!0&&X.isPresenting===!0,Y=x!==null&&(W===null||$)&&x.begin(S,W);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(X.cameraAutoUpdate===!0&&X.updateCamera(H),H=X.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,H,W),b=me.get(A,C.length),b.init(H),b.state.textureUnits=Z.getTextureUnits(),C.push(b),_e.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),oe.setFromProjectionMatrix(_e,Xi,H.reversedDepth),he=this.localClippingEnabled,ae=Ge.init(this.clippingPlanes,he),y=Te.get(A,E.length),y.init(),E.push(y),X.enabled===!0&&X.isPresenting===!0){let be=S.xr.getDepthSensingMesh();be!==null&&Et(be,H,-1/0,S.sortObjects)}Et(A,H,0,S.sortObjects),y.finish(),L!==null&&L.updateLights(b.state.lightsArray),S.sortObjects===!0&&y.sort(le,Fe),Xe=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Xe&&Ve.addToRenderList(y,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Ge.beginShadows();let j=b.state.shadowsArray;if(ke.render(j,A,H),ae===!0&&Ge.endShadows(),(Y&&x.hasRenderPass())===!1){let be=y.opaque,Ie=y.transmissive;if(b.setupLights(),H.isArrayCamera){let Be=H.cameras;if(Ie.length>0)for(let Oe=0,$e=Be.length;Oe<$e;Oe++){let mt=Be[Oe];fs(be,Ie,A,mt)}Xe&&Ve.render(A);for(let Oe=0,$e=Be.length;Oe<$e;Oe++){let mt=Be[Oe];ni(y,A,mt,mt.viewport)}}else Ie.length>0&&fs(be,Ie,A,H),Xe&&Ve.render(A),ni(y,A,H)}W!==null&&F===0&&(Z.updateMultisampleRenderTarget(W),Z.updateRenderTargetMipmap(W)),Y&&x.end(S),A.isScene===!0&&A.onAfterRender(S,A,H),Le.resetDefaultState(),te=-1,q=null,C.pop(),C.length>0?(b=C[C.length-1],Z.setTextureUnits(b.state.textureUnits),ae===!0&&Ge.setGlobalState(S.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?y=E[E.length-1]:y=null,L!==null&&L.renderEnd()};function Et(A,H,$,Y){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(oe)){Y&&Ne.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);let be=k.update(A),Ie=A.material;Ie.visible&&y.push(A,be,Ie,$,Ne.z,null,H)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(oe))){let be=k.update(A),Ie=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ne.copy(A.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ne.copy(be.boundingSphere.center)),Ne.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(Ie)){let Be=be.groups;for(let Oe=0,$e=Be.length;Oe<$e;Oe++){let mt=Be[Oe],ht=Ie[mt.materialIndex];ht&&ht.visible&&y.push(A,be,ht,$,Ne.z,mt,H)}}else Ie.visible&&y.push(A,be,Ie,$,Ne.z,null,H)}}let j=A.children;for(let be=0,Ie=j.length;be<Ie;be++)Et(j[be],H,$,Y)}function ni(A,H,$,Y){let{opaque:j,transmissive:be,transparent:Ie}=A;b.setupLightsView($),ae===!0&&Ge.setGlobalState(S.clippingPlanes,$),Y&&I.viewport(K.copy(Y)),j.length>0&&Ki(j,H,$),be.length>0&&Ki(be,H,$),Ie.length>0&&Ki(Ie,H,$),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function fs(A,H,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[Y.id]===void 0){let ht=pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[Y.id]=new ii(1,1,{generateMipmaps:!0,type:ht?hi:Ri,minFilter:an,samples:Math.max(4,Ye.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let j=b.state.transmissionRenderTarget[Y.id],be=Y.viewport||K;j.setSize(be.z*S.transmissionResolutionScale,be.w*S.transmissionResolutionScale);let Ie=S.getRenderTarget(),Be=S.getActiveCubeFace(),Oe=S.getActiveMipmapLevel();S.setRenderTarget(j),S.getClearColor(Re),dt=S.getClearAlpha(),dt<1&&S.setClearColor(16777215,.5),S.clear(),Xe&&Ve.render($);let $e=S.toneMapping;S.toneMapping=rr;let mt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),b.setupLightsView(Y),ae===!0&&Ge.setGlobalState(S.clippingPlanes,Y),Ki(A,$,Y),Z.updateMultisampleRenderTarget(j),Z.updateRenderTargetMipmap(j),pt.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let He=0,ct=H.length;He<ct;He++){let Ht=H[He],{object:At,geometry:yt,material:Tt,group:We}=Ht;if(Tt.side===Ui&&At.layers.test(Y.layers)){let qt=Tt.side;Tt.side=xi,Tt.needsUpdate=!0,Zr(At,$,Y,yt,Tt,We),Tt.side=qt,Tt.needsUpdate=!0,ht=!0}}ht===!0&&(Z.updateMultisampleRenderTarget(j),Z.updateRenderTargetMipmap(j))}S.setRenderTarget(Ie,Be,Oe),S.setClearColor(Re,dt),mt!==void 0&&(Y.viewport=mt),S.toneMapping=$e}function Ki(A,H,$){let Y=H.isScene===!0?H.overrideMaterial:null;for(let j=0,be=A.length;j<be;j++){let Ie=A[j],{object:Be,geometry:Oe,group:$e}=Ie,mt=Ie.material;mt.allowOverride===!0&&Y!==null&&(mt=Y),Be.layers.test($.layers)&&Zr(Be,H,$,Oe,mt,$e)}}function Zr(A,H,$,Y,j,be){L!==null&&j.isNodeMaterial&&L.setObject(A,j),A.onBeforeRender(S,H,$,Y,j,be),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(S,H,$,Y,A,be),j.transparent===!0&&j.side===Ui&&j.forceSinglePass===!1?(j.side=xi,j.needsUpdate=!0,S.renderBufferDirect($,H,Y,j,A,be),j.side=cn,j.needsUpdate=!0,S.renderBufferDirect($,H,Y,j,A,be),j.side=Ui):S.renderBufferDirect($,H,Y,j,A,be),A.onAfterRender(S,H,$,Y,j,be)}function Lr(A,H,$){H.isScene!==!0&&(H=De);let Y=V.get(A),j=b.state.lights,be=b.state.shadowsArray,Ie=j.state.version,Be=ge.getParameters(A,j.state,be,H,$,b.state.lightProbeGridArray),Oe=ge.getProgramCacheKey(Be),$e=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;let mt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=ie.get(A.envMap||Y.environment,mt),Y.envMapRotation=Y.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,$e===void 0&&(A.addEventListener("dispose",Ke),$e=new Map,Y.programs=$e);let ht=$e.get(Oe);if(ht!==void 0){if(Y.currentProgram===ht&&Y.lightsStateVersion===Ie)return ra(A,Be),ht}else Be.uniforms=ge.getUniforms(A),L!==null&&A.isNodeMaterial&&L.build(A,$,Be),A.onBeforeCompile(Be,S),ht=ge.acquireProgram(Be,Oe),$e.set(Oe,ht),Y.uniforms=Be.uniforms;let He=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Ge.uniform),ra(A,Be),Y.needsLights=sa(A),Y.lightsStateVersion=Ie,Y.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.sunLights.value=j.state.sun,He.sunLightShadows.value=j.state.sunShadow,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.sunShadowMatrix.value=j.state.sunShadowMatrix,He.sunShadowCascade.value=j.state.sunShadowCascade,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),Y.lightProbeGrid=b.state.lightProbeGridArray.length>0,Y.currentProgram=ht,Y.uniformsList=null,ht}function ms(A){if(A.uniformsList===null){let H=A.currentProgram.getUniforms();A.uniformsList=ja.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function ra(A,H){let $=V.get(A);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function na(A,H){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;M.setFromMatrixPosition(H.matrixWorld);for(let $=0,Y=A.length;$<Y;$++){let j=A[$];if(j.texture!==null&&j.boundingBox.containsPoint(M))return j}return null}function Kr(A,H,$,Y,j){H.isScene!==!0&&(H=De),Z.resetTextureUnits();let be=H.fog,Ie=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,Be=W===null?S.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:_t.workingColorSpace,Oe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,$e=ie.get(Y.envMap||Ie,Oe),mt=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ht=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),He=!!$.morphAttributes.position,ct=!!$.morphAttributes.normal,Ht=!!$.morphAttributes.color,At=rr;Y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(At=S.toneMapping);let yt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Tt=yt!==void 0?yt.length:0,We=V.get(Y),qt=b.state.lights;if(ae===!0&&(he===!0||A!==q)){let J=A===q&&Y.id===te;Ge.setState(Y,A,J)}let $i=!1;Y.version===We.__version?(We.needsLights&&We.lightsStateVersion!==qt.state.version||We.outputColorSpace!==Be||j.isBatchedMesh&&We.batching===!1||!j.isBatchedMesh&&We.batching===!0||j.isBatchedMesh&&We.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&We.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&We.instancing===!1||!j.isInstancedMesh&&We.instancing===!0||j.isSkinnedMesh&&We.skinning===!1||!j.isSkinnedMesh&&We.skinning===!0||j.isInstancedMesh&&We.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&We.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&We.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&We.instancingMorph===!1&&j.morphTexture!==null||We.envMap!==$e||Y.fog===!0&&We.fog!==be||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ge.numPlanes||We.numIntersection!==Ge.numIntersection)||We.vertexAlphas!==mt||We.vertexTangents!==ht||We.morphTargets!==He||We.morphNormals!==ct||We.morphColors!==Ht||We.toneMapping!==At||We.morphTargetsCount!==Tt||!!We.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&($i=!0):($i=!0,We.__version=Y.version);let si=We.currentProgram;$i===!0&&(si=Lr(Y,H,j),L&&Y.isNodeMaterial&&L.onUpdateProgram(Y,si,We));let wi=!1,Vi=!1,Nr=!1,bt=si.getUniforms(),Dt=We.uniforms;if(I.useProgram(si.program)&&(wi=!0,Vi=!0,Nr=!0),Y.id!==te&&(te=Y.id,Vi=!0),We.needsLights){let J=na(b.state.lightProbeGridArray,j);We.lightProbeGrid!==J&&(We.lightProbeGrid=J,Vi=!0)}if(wi||q!==A){I.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),bt.setValue(O,"projectionMatrix",A.projectionMatrix),bt.setValue(O,"viewMatrix",A.matrixWorldInverse);let J=bt.map.cameraPosition;J!==void 0&&J.setValue(O,Ce.setFromMatrixPosition(A.matrixWorld)),Ye.logarithmicDepthBuffer&&bt.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&bt.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,Vi=!0,Nr=!0)}if(We.needsLights&&(qt.state.sunShadowMap.length>0&&bt.setValue(O,"sunShadowMap",qt.state.sunShadowMap,Z),qt.state.directionalShadowMap.length>0&&bt.setValue(O,"directionalShadowMap",qt.state.directionalShadowMap,Z),qt.state.spotShadowMap.length>0&&bt.setValue(O,"spotShadowMap",qt.state.spotShadowMap,Z),qt.state.pointShadowMap.length>0&&bt.setValue(O,"pointShadowMap",qt.state.pointShadowMap,Z)),j.isSkinnedMesh){bt.setOptional(O,j,"bindMatrix"),bt.setOptional(O,j,"bindMatrixInverse");let J=j.skeleton;J&&(J.boneTexture===null&&J.computeBoneTexture(),bt.setValue(O,"boneTexture",J.boneTexture,Z))}j.isBatchedMesh&&(bt.setOptional(O,j,"batchingTexture"),bt.setValue(O,"batchingTexture",j._matricesTexture,Z),bt.setOptional(O,j,"batchingIdTexture"),bt.setValue(O,"batchingIdTexture",j._indirectTexture,Z),bt.setOptional(O,j,"batchingColorTexture"),j._colorsTexture!==null&&bt.setValue(O,"batchingColorTexture",j._colorsTexture,Z));let Q=$.morphAttributes;if((Q.position!==void 0||Q.normal!==void 0||Q.color!==void 0)&&ot.update(j,$,si),(Vi||We.receiveShadow!==j.receiveShadow)&&(We.receiveShadow=j.receiveShadow,bt.setValue(O,"receiveShadow",j.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(Dt.envMapIntensity.value=H.environmentIntensity),Dt.dfgLUT!==void 0&&(Dt.dfgLUT.value=nx()),Vi){if(bt.setValue(O,"toneMappingExposure",S.toneMappingExposure),We.needsLights&&Sn(Dt,Nr),be&&Y.fog===!0&&we.refreshFogUniforms(Dt,be),we.refreshMaterialUniforms(Dt,Y,de,ee,b.state.transmissionRenderTarget[A.id]),We.needsLights&&We.lightProbeGrid){let J=We.lightProbeGrid;Dt.probesSH.value=J.texture,Dt.probesMin.value.copy(J.boundingBox.min),Dt.probesMax.value.copy(J.boundingBox.max),Dt.probesResolution.value.copy(J.resolution)}ja.upload(O,ms(We),Dt,Z)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ja.upload(O,ms(We),Dt,Z),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&bt.setValue(O,"center",j.center),bt.setValue(O,"modelViewMatrix",j.modelViewMatrix),bt.setValue(O,"normalMatrix",j.normalMatrix),bt.setValue(O,"modelMatrix",j.matrixWorld),Y.uniformsGroups!==void 0){let J=Y.uniformsGroups;for(let Pe=0,Je=J.length;Pe<Je;Pe++){let rt=J[Pe];xe.update(rt,si),xe.bind(rt,si)}}return si}function Sn(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.sunLights.needsUpdate=H,A.sunLightShadows.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function sa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(A,H,$){let Y=V.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),V.get(A.texture).__webglTexture=H,V.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){let $=V.get(A);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(A,H=0,$=0){W=A,D=H,F=$;let Y=null,j=!1,be=!1;if(A){let Ie=V.get(A);if(Ie.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(O.FRAMEBUFFER,Ie.__webglFramebuffer),K.copy(A.viewport),re.copy(A.scissor),ce=A.scissorTest,I.viewport(K),I.scissor(re),I.setScissorTest(ce),te=-1;return}else if(Ie.__webglFramebuffer===void 0)Z.setupRenderTarget(A);else if(Ie.__hasExternalTextures)Z.rebindTextures(A,V.get(A.texture).__webglTexture,V.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let $e=A.depthTexture;if(Ie.__boundDepthTexture!==$e){if($e!==null&&V.has($e)&&(A.width!==$e.image.width||A.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(A)}}let Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(be=!0);let Oe=V.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[H])?Y=Oe[H][$]:Y=Oe[H],j=!0):A.samples>0&&Z.useMultisampledRTT(A)===!1?Y=V.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?Y=Oe[$]:Y=Oe,K.copy(A.viewport),re.copy(A.scissor),ce=A.scissorTest}else K.copy(je).multiplyScalar(de).floor(),re.copy(Me).multiplyScalar(de).floor(),ce=st;if($!==0&&(Y=B),I.bindFramebuffer(O.FRAMEBUFFER,Y)&&I.drawBuffers(A,Y),I.viewport(K),I.scissor(re),I.setScissorTest(ce),j){let Ie=V.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ie.__webglTexture,$)}else if(be){let Ie=H;for(let Be=0;Be<A.textures.length;Be++){let Oe=V.get(A.textures[Be]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Be,Oe.__webglTexture,$,Ie)}}else if(A!==null&&$!==0){let Ie=V.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ie.__webglTexture,$)}te=-1};function gs(A){let H=V.get(A);return(H.__readFormat!==A.format||H.__readType!==A.type)&&(H.__readFormat=A.format,H.__readType=A.type,H.__formatReadable=Ye.textureFormatReadable(A.format),H.__typeReadable=Ye.textureTypeReadable(A.type)),H}this.readRenderTargetPixels=function(A,H,$,Y,j,be,Ie,Be=0){if(!(A&&A.isWebGLRenderTarget)){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=V.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){I.bindFramebuffer(O.FRAMEBUFFER,Oe);try{let $e=A.textures[Be],mt=$e.format,ht=$e.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Be);let He=gs($e);if(He.__formatReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(He.__typeReadable===!1){tt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Y&&$>=0&&$<=A.height-j&&O.readPixels(H,$,Y,j,fe.convert(mt),fe.convert(ht),be)}finally{let $e=W!==null?V.get(W).__webglFramebuffer:null;I.bindFramebuffer(O.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(A,H,$,Y,j,be,Ie,Be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=V.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe)if(H>=0&&H<=A.width-Y&&$>=0&&$<=A.height-j){I.bindFramebuffer(O.FRAMEBUFFER,Oe);let $e=A.textures[Be],mt=$e.format,ht=$e.type;A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Be);let He=gs($e);if(He.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(He.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.bufferData(O.PIXEL_PACK_BUFFER,be.byteLength,O.STREAM_READ),O.readPixels(H,$,Y,j,fe.convert(mt),fe.convert(ht),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let Ht=W!==null?V.get(W).__webglFramebuffer:null;I.bindFramebuffer(O.FRAMEBUFFER,Ht);let At=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await cf(O,At,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,ct),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,be),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(ct),O.deleteSync(At),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,$=0){let Y=Math.pow(2,-$),j=Math.floor(A.image.width*Y),be=Math.floor(A.image.height*Y),Ie=H!==null?H.x:0,Be=H!==null?H.y:0;Z.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,$,0,0,Ie,Be,j,be),I.unbindTexture()},this.copyTextureToTexture=function(A,H,$=null,Y=null,j=0,be=0){let Ie,Be,Oe,$e,mt,ht,He,ct,Ht,At=A.isCompressedTexture?A.mipmaps[be]:A.image;if($!==null)Ie=$.max.x-$.min.x,Be=$.max.y-$.min.y,Oe=$.isBox3?$.max.z-$.min.z:1,$e=$.min.x,mt=$.min.y,ht=$.isBox3?$.min.z:0;else{let Dt=Math.pow(2,-j);Ie=Math.floor(At.width*Dt),Be=Math.floor(At.height*Dt),A.isDataArrayTexture?Oe=At.depth:A.isData3DTexture?Oe=Math.floor(At.depth*Dt):Oe=1,$e=0,mt=0,ht=0}Y!==null?(He=Y.x,ct=Y.y,Ht=Y.z):(He=0,ct=0,Ht=0);let yt=fe.convert(H.format),Tt=fe.convert(H.type),We;H.isData3DTexture?(Z.setTexture3D(H,0),We=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(Z.setTexture2DArray(H,0),We=O.TEXTURE_2D_ARRAY):(Z.setTexture2D(H,0),We=O.TEXTURE_2D),I.activeTexture(O.TEXTURE0),I.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let qt=I.getParameter(O.UNPACK_ROW_LENGTH),$i=I.getParameter(O.UNPACK_IMAGE_HEIGHT),si=I.getParameter(O.UNPACK_SKIP_PIXELS),wi=I.getParameter(O.UNPACK_SKIP_ROWS),Vi=I.getParameter(O.UNPACK_SKIP_IMAGES);I.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),I.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),I.pixelStorei(O.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(O.UNPACK_SKIP_ROWS,mt),I.pixelStorei(O.UNPACK_SKIP_IMAGES,ht);let Nr=A.isDataArrayTexture||A.isData3DTexture,bt=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){let Dt=V.get(A),Q=V.get(H),J=V.get(Dt.__renderTarget),Pe=V.get(Q.__renderTarget);I.bindFramebuffer(O.READ_FRAMEBUFFER,J.__webglFramebuffer),I.bindFramebuffer(O.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Je=0;Je<Oe;Je++)Nr&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,V.get(A).__webglTexture,j,ht+Je),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,V.get(H).__webglTexture,be,Ht+Je)),O.blitFramebuffer($e,mt,Ie,Be,He,ct,Ie,Be,O.DEPTH_BUFFER_BIT,O.NEAREST);I.bindFramebuffer(O.READ_FRAMEBUFFER,null),I.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||V.has(A)){let Dt=V.get(A),Q=V.get(H);I.bindFramebuffer(O.READ_FRAMEBUFFER,U),I.bindFramebuffer(O.DRAW_FRAMEBUFFER,R);for(let J=0;J<Oe;J++)Nr?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Dt.__webglTexture,j,ht+J):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Dt.__webglTexture,j),bt?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Q.__webglTexture,be,Ht+J):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Q.__webglTexture,be),j!==0?O.blitFramebuffer($e,mt,Ie,Be,He,ct,Ie,Be,O.COLOR_BUFFER_BIT,O.NEAREST):bt?O.copyTexSubImage3D(We,be,He,ct,Ht+J,$e,mt,Ie,Be):O.copyTexSubImage2D(We,be,He,ct,$e,mt,Ie,Be);I.bindFramebuffer(O.READ_FRAMEBUFFER,null),I.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else bt?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(We,be,He,ct,Ht,Ie,Be,Oe,yt,Tt,At.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(We,be,He,ct,Ht,Ie,Be,Oe,yt,At.data):O.texSubImage3D(We,be,He,ct,Ht,Ie,Be,Oe,yt,Tt,At):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,be,He,ct,Ie,Be,yt,Tt,At.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,be,He,ct,At.width,At.height,yt,At.data):O.texSubImage2D(O.TEXTURE_2D,be,He,ct,Ie,Be,yt,Tt,At);I.pixelStorei(O.UNPACK_ROW_LENGTH,qt),I.pixelStorei(O.UNPACK_IMAGE_HEIGHT,$i),I.pixelStorei(O.UNPACK_SKIP_PIXELS,si),I.pixelStorei(O.UNPACK_SKIP_ROWS,wi),I.pixelStorei(O.UNPACK_SKIP_IMAGES,Vi),be===0&&H.generateMipmaps&&O.generateMipmap(We),I.unbindTexture()},this.initRenderTarget=function(A){V.get(A).__webglFramebuffer===void 0&&Z.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Z.setTextureCube(A,0):A.isData3DTexture?Z.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Z.setTexture2DArray(A,0):Z.setTexture2D(A,0),I.unbindTexture()},this.resetState=function(){D=0,F=0,W=null,I.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(t),e.unpackColorSpace=_t._getUnpackColorSpace()}};var kS=new P;var qr=class t{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let i=this.elements;i[0]=e.x,i[4]=e.y,i[8]=e.z}getTrace(e){e===void 0&&(e=new w);let i=this.elements;return e.x=i[0],e.y=i[4],e.z=i[8],e}vmult(e,i){i===void 0&&(i=new w);let r=this.elements,n=e.x,s=e.y,a=e.z;return i.x=r[0]*n+r[1]*s+r[2]*a,i.y=r[3]*n+r[4]*s+r[5]*a,i.z=r[6]*n+r[7]*s+r[8]*a,i}smult(e){for(let i=0;i<this.elements.length;i++)this.elements[i]*=e}mmult(e,i){i===void 0&&(i=new t);let r=this.elements,n=e.elements,s=i.elements,a=r[0],o=r[1],l=r[2],h=r[3],c=r[4],d=r[5],u=r[6],p=r[7],g=r[8],v=n[0],m=n[1],f=n[2],_=n[3],M=n[4],y=n[5],b=n[6],E=n[7],C=n[8];return s[0]=a*v+o*_+l*b,s[1]=a*m+o*M+l*E,s[2]=a*f+o*y+l*C,s[3]=h*v+c*_+d*b,s[4]=h*m+c*M+d*E,s[5]=h*f+c*y+d*C,s[6]=u*v+p*_+g*b,s[7]=u*m+p*M+g*E,s[8]=u*f+p*y+g*C,i}scale(e,i){i===void 0&&(i=new t);let r=this.elements,n=i.elements;for(let s=0;s!==3;s++)n[3*s+0]=e.x*r[3*s+0],n[3*s+1]=e.y*r[3*s+1],n[3*s+2]=e.z*r[3*s+2];return i}solve(e,i){i===void 0&&(i=new w);let r=3,n=4,s=[],a,o;for(a=0;a<r*n;a++)s.push(0);for(a=0;a<3;a++)for(o=0;o<3;o++)s[a+n*o]=this.elements[a+3*o];s[3]=e.x,s[7]=e.y,s[11]=e.z;let l=3,h=l,c,d=4,u;do{if(a=h-l,s[a+n*a]===0){for(o=a+1;o<h;o++)if(s[a+n*o]!==0){c=d;do u=d-c,s[u+n*a]+=s[u+n*o];while(--c);break}}if(s[a+n*a]!==0)for(o=a+1;o<h;o++){let p=s[a+n*o]/s[a+n*a];c=d;do u=d-c,s[u+n*o]=u<=a?0:s[u+n*o]-s[u+n*a]*p;while(--c)}}while(--l);if(i.z=s[2*n+3]/s[2*n+2],i.y=(s[1*n+3]-s[1*n+2]*i.z)/s[1*n+1],i.x=(s[0*n+3]-s[0*n+2]*i.z-s[0*n+1]*i.y)/s[0*n+0],isNaN(i.x)||isNaN(i.y)||isNaN(i.z)||i.x===1/0||i.y===1/0||i.z===1/0)throw`Could not solve equation! Got x=[${i.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return i}e(e,i,r){if(r===void 0)return this.elements[i+3*e];this.elements[i+3*e]=r}copy(e){for(let i=0;i<e.elements.length;i++)this.elements[i]=e.elements[i];return this}toString(){let e="";for(let r=0;r<9;r++)e+=this.elements[r]+",";return e}reverse(e){e===void 0&&(e=new t);let i=3,r=6,n=sx,s,a;for(s=0;s<3;s++)for(a=0;a<3;a++)n[s+r*a]=this.elements[s+3*a];n[3]=1,n[9]=0,n[15]=0,n[4]=0,n[10]=1,n[16]=0,n[5]=0,n[11]=0,n[17]=1;let o=3,l=o,h,c=r,d;do{if(s=l-o,n[s+r*s]===0){for(a=s+1;a<l;a++)if(n[s+r*a]!==0){h=c;do d=c-h,n[d+r*s]+=n[d+r*a];while(--h);break}}if(n[s+r*s]!==0)for(a=s+1;a<l;a++){let u=n[s+r*a]/n[s+r*s];h=c;do d=c-h,n[d+r*a]=d<=s?0:n[d+r*a]-n[d+r*s]*u;while(--h)}}while(--o);s=2;do{a=s-1;do{let u=n[s+r*a]/n[s+r*s];h=r;do d=r-h,n[d+r*a]=n[d+r*a]-n[d+r*s]*u;while(--h)}while(a--)}while(--s);s=2;do{let u=1/n[s+r*s];h=r;do d=r-h,n[d+r*s]=n[d+r*s]*u;while(--h)}while(s--);s=2;do{a=2;do{if(d=n[i+a+r*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,a,d)}while(a--)}while(s--);return e}setRotationFromQuaternion(e){let i=e.x,r=e.y,n=e.z,s=e.w,a=i+i,o=r+r,l=n+n,h=i*a,c=i*o,d=i*l,u=r*o,p=r*l,g=n*l,v=s*a,m=s*o,f=s*l,_=this.elements;return _[0]=1-(u+g),_[1]=c-f,_[2]=d+m,_[3]=c+f,_[4]=1-(h+g),_[5]=p-v,_[6]=d-m,_[7]=p+v,_[8]=1-(h+u),this}transpose(e){e===void 0&&(e=new t);let i=this.elements,r=e.elements,n;return r[0]=i[0],r[4]=i[4],r[8]=i[8],n=i[1],r[1]=i[3],r[3]=n,n=i[2],r[2]=i[6],r[6]=n,n=i[5],r[5]=i[7],r[7]=n,e}},sx=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],w=class t{constructor(e,i,r){e===void 0&&(e=0),i===void 0&&(i=0),r===void 0&&(r=0),this.x=e,this.y=i,this.z=r}cross(e,i){i===void 0&&(i=new t);let r=e.x,n=e.y,s=e.z,a=this.x,o=this.y,l=this.z;return i.x=o*s-l*n,i.y=l*r-a*s,i.z=a*n-o*r,i}set(e,i,r){return this.x=e,this.y=i,this.z=r,this}setZero(){this.x=this.y=this.z=0}vadd(e,i){if(i)i.x=e.x+this.x,i.y=e.y+this.y,i.z=e.z+this.z;else return new t(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,i){if(i)i.x=this.x-e.x,i.y=this.y-e.y,i.z=this.z-e.z;else return new t(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new qr([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,i=this.y,r=this.z,n=Math.sqrt(e*e+i*i+r*r);if(n>0){let s=1/n;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return n}unit(e){e===void 0&&(e=new t);let i=this.x,r=this.y,n=this.z,s=Math.sqrt(i*i+r*r+n*n);return s>0?(s=1/s,e.x=i*s,e.y=r*s,e.z=n*s):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,i=this.y,r=this.z;return Math.sqrt(e*e+i*i+r*r)}lengthSquared(){return this.dot(this)}distanceTo(e){let i=this.x,r=this.y,n=this.z,s=e.x,a=e.y,o=e.z;return Math.sqrt((s-i)*(s-i)+(a-r)*(a-r)+(o-n)*(o-n))}distanceSquared(e){let i=this.x,r=this.y,n=this.z,s=e.x,a=e.y,o=e.z;return(s-i)*(s-i)+(a-r)*(a-r)+(o-n)*(o-n)}scale(e,i){i===void 0&&(i=new t);let r=this.x,n=this.y,s=this.z;return i.x=e*r,i.y=e*n,i.z=e*s,i}vmul(e,i){return i===void 0&&(i=new t),i.x=e.x*this.x,i.y=e.y*this.y,i.z=e.z*this.z,i}addScaledVector(e,i,r){return r===void 0&&(r=new t),r.x=this.x+e*i.x,r.y=this.y+e*i.y,r.z=this.z+e*i.z,r}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new t),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,i){let r=this.length();if(r>0){let n=ax,s=1/r;n.set(this.x*s,this.y*s,this.z*s);let a=ox;Math.abs(n.x)<.9?(a.set(1,0,0),n.cross(a,e)):(a.set(0,1,0),n.cross(a,e)),n.cross(e,i)}else e.set(1,0,0),i.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,i,r){let n=this.x,s=this.y,a=this.z;r.x=n+(e.x-n)*i,r.y=s+(e.y-s)*i,r.z=a+(e.z-a)*i}almostEquals(e,i){return i===void 0&&(i=1e-6),!(Math.abs(this.x-e.x)>i||Math.abs(this.y-e.y)>i||Math.abs(this.z-e.z)>i)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,i){return this.negate(Xd),Xd.almostEquals(e,i)}clone(){return new t(this.x,this.y,this.z)}};w.ZERO=new w(0,0,0);w.UNIT_X=new w(1,0,0);w.UNIT_Y=new w(0,1,0);w.UNIT_Z=new w(0,0,1);var ax=new w,ox=new w,Xd=new w,Li=class t{constructor(e){e===void 0&&(e={}),this.lowerBound=new w,this.upperBound=new w,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,i,r,n){let s=this.lowerBound,a=this.upperBound,o=r;s.copy(e[0]),o&&o.vmult(s,s),a.copy(s);for(let l=1;l<e.length;l++){let h=e[l];o&&(o.vmult(h,jd),h=jd),h.x>a.x&&(a.x=h.x),h.x<s.x&&(s.x=h.x),h.y>a.y&&(a.y=h.y),h.y<s.y&&(s.y=h.y),h.z>a.z&&(a.z=h.z),h.z<s.z&&(s.z=h.z)}return i&&(i.vadd(s,s),i.vadd(a,a)),n&&(s.x-=n,s.y-=n,s.z-=n,a.x+=n,a.y+=n,a.z+=n),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new t().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let i=this.lowerBound,r=this.upperBound,n=e.lowerBound,s=e.upperBound,a=n.x<=r.x&&r.x<=s.x||i.x<=s.x&&s.x<=r.x,o=n.y<=r.y&&r.y<=s.y||i.y<=s.y&&s.y<=r.y,l=n.z<=r.z&&r.z<=s.z||i.z<=s.z&&s.z<=r.z;return a&&o&&l}volume(){let e=this.lowerBound,i=this.upperBound;return(i.x-e.x)*(i.y-e.y)*(i.z-e.z)}contains(e){let i=this.lowerBound,r=this.upperBound,n=e.lowerBound,s=e.upperBound;return i.x<=n.x&&r.x>=s.x&&i.y<=n.y&&r.y>=s.y&&i.z<=n.z&&r.z>=s.z}getCorners(e,i,r,n,s,a,o,l){let h=this.lowerBound,c=this.upperBound;e.copy(h),i.set(c.x,h.y,h.z),r.set(c.x,c.y,h.z),n.set(h.x,c.y,c.z),s.set(c.x,h.y,c.z),a.set(h.x,c.y,h.z),o.set(h.x,h.y,c.z),l.copy(c)}toLocalFrame(e,i){let r=Yd,n=r[0],s=r[1],a=r[2],o=r[3],l=r[4],h=r[5],c=r[6],d=r[7];this.getCorners(n,s,a,o,l,h,c,d);for(let u=0;u!==8;u++){let p=r[u];e.pointToLocal(p,p)}return i.setFromPoints(r)}toWorldFrame(e,i){let r=Yd,n=r[0],s=r[1],a=r[2],o=r[3],l=r[4],h=r[5],c=r[6],d=r[7];this.getCorners(n,s,a,o,l,h,c,d);for(let u=0;u!==8;u++){let p=r[u];e.pointToWorld(p,p)}return i.setFromPoints(r)}overlapsRay(e){let{direction:i,from:r}=e,n=1/i.x,s=1/i.y,a=1/i.z,o=(this.lowerBound.x-r.x)*n,l=(this.upperBound.x-r.x)*n,h=(this.lowerBound.y-r.y)*s,c=(this.upperBound.y-r.y)*s,d=(this.lowerBound.z-r.z)*a,u=(this.upperBound.z-r.z)*a,p=Math.max(Math.max(Math.min(o,l),Math.min(h,c)),Math.min(d,u)),g=Math.min(Math.min(Math.max(o,l),Math.max(h,c)),Math.max(d,u));return!(g<0||p>g)}},jd=new w,Yd=[new w,new w,new w,new w,new w,new w,new w,new w],yo=class{constructor(){this.matrix=[]}get(e,i){let{index:r}=e,{index:n}=i;if(n>r){let s=n;n=r,r=s}return this.matrix[(r*(r+1)>>1)+n-1]}set(e,i,r){let{index:n}=e,{index:s}=i;if(s>n){let a=s;s=n,n=a}this.matrix[(n*(n+1)>>1)+s-1]=r?1:0}reset(){for(let e=0,i=this.matrix.length;e!==i;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},xo=class{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});let r=this._listeners;return r[e]===void 0&&(r[e]=[]),r[e].includes(i)||r[e].push(i),this}hasEventListener(e,i){if(this._listeners===void 0)return!1;let r=this._listeners;return!!(r[e]!==void 0&&r[e].includes(i))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,i){if(this._listeners===void 0)return this;let r=this._listeners;if(r[e]===void 0)return this;let n=r[e].indexOf(i);return n!==-1&&r[e].splice(n,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let r=this._listeners[e.type];if(r!==void 0){e.target=this;for(let n=0,s=r.length;n<s;n++)r[n].call(this,e)}return this}},kt=class t{constructor(e,i,r,n){e===void 0&&(e=0),i===void 0&&(i=0),r===void 0&&(r=0),n===void 0&&(n=1),this.x=e,this.y=i,this.z=r,this.w=n}set(e,i,r,n){return this.x=e,this.y=i,this.z=r,this.w=n,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,i){let r=Math.sin(i*.5);return this.x=e.x*r,this.y=e.y*r,this.z=e.z*r,this.w=Math.cos(i*.5),this}toAxisAngle(e){e===void 0&&(e=new w),this.normalize();let i=2*Math.acos(this.w),r=Math.sqrt(1-this.w*this.w);return r<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/r,e.y=this.y/r,e.z=this.z/r),[e,i]}setFromVectors(e,i){if(e.isAntiparallelTo(i)){let r=lx,n=hx;e.tangents(r,n),this.setFromAxisAngle(r,Math.PI)}else{let r=e.cross(i);this.x=r.x,this.y=r.y,this.z=r.z,this.w=Math.sqrt(e.length()**2*i.length()**2)+e.dot(i),this.normalize()}return this}mult(e,i){i===void 0&&(i=new t);let r=this.x,n=this.y,s=this.z,a=this.w,o=e.x,l=e.y,h=e.z,c=e.w;return i.x=r*c+a*o+n*h-s*l,i.y=n*c+a*l+s*o-r*h,i.z=s*c+a*h+r*l-n*o,i.w=a*c-r*o-n*l-s*h,i}inverse(e){e===void 0&&(e=new t);let i=this.x,r=this.y,n=this.z,s=this.w;this.conjugate(e);let a=1/(i*i+r*r+n*n+s*s);return e.x*=a,e.y*=a,e.z*=a,e.w*=a,e}conjugate(e){return e===void 0&&(e=new t),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,i){i===void 0&&(i=new w);let r=e.x,n=e.y,s=e.z,a=this.x,o=this.y,l=this.z,h=this.w,c=h*r+o*s-l*n,d=h*n+l*r-a*s,u=h*s+a*n-o*r,p=-a*r-o*n-l*s;return i.x=c*h+p*-a+d*-l-u*-o,i.y=d*h+p*-o+u*-a-c*-l,i.z=u*h+p*-l+c*-o-d*-a,i}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,i){i===void 0&&(i="YZX");let r,n,s,a=this.x,o=this.y,l=this.z,h=this.w;switch(i){case"YZX":let c=a*o+l*h;if(c>.499&&(r=2*Math.atan2(a,h),n=Math.PI/2,s=0),c<-.499&&(r=-2*Math.atan2(a,h),n=-Math.PI/2,s=0),r===void 0){let d=a*a,u=o*o,p=l*l;r=Math.atan2(2*o*h-2*a*l,1-2*u-2*p),n=Math.asin(2*c),s=Math.atan2(2*a*h-2*o*l,1-2*d-2*p)}break;default:throw new Error(`Euler order ${i} not supported yet.`)}e.y=r,e.z=n,e.x=s}setFromEuler(e,i,r,n){n===void 0&&(n="XYZ");let s=Math.cos(e/2),a=Math.cos(i/2),o=Math.cos(r/2),l=Math.sin(e/2),h=Math.sin(i/2),c=Math.sin(r/2);return n==="XYZ"?(this.x=l*a*o+s*h*c,this.y=s*h*o-l*a*c,this.z=s*a*c+l*h*o,this.w=s*a*o-l*h*c):n==="YXZ"?(this.x=l*a*o+s*h*c,this.y=s*h*o-l*a*c,this.z=s*a*c-l*h*o,this.w=s*a*o+l*h*c):n==="ZXY"?(this.x=l*a*o-s*h*c,this.y=s*h*o+l*a*c,this.z=s*a*c+l*h*o,this.w=s*a*o-l*h*c):n==="ZYX"?(this.x=l*a*o-s*h*c,this.y=s*h*o+l*a*c,this.z=s*a*c-l*h*o,this.w=s*a*o+l*h*c):n==="YZX"?(this.x=l*a*o+s*h*c,this.y=s*h*o+l*a*c,this.z=s*a*c-l*h*o,this.w=s*a*o-l*h*c):n==="XZY"&&(this.x=l*a*o-s*h*c,this.y=s*h*o-l*a*c,this.z=s*a*c+l*h*o,this.w=s*a*o+l*h*c),this}clone(){return new t(this.x,this.y,this.z,this.w)}slerp(e,i,r){r===void 0&&(r=new t);let n=this.x,s=this.y,a=this.z,o=this.w,l=e.x,h=e.y,c=e.z,d=e.w,u,p,g,v,m;return p=n*l+s*h+a*c+o*d,p<0&&(p=-p,l=-l,h=-h,c=-c,d=-d),1-p>1e-6?(u=Math.acos(p),g=Math.sin(u),v=Math.sin((1-i)*u)/g,m=Math.sin(i*u)/g):(v=1-i,m=i),r.x=v*n+m*l,r.y=v*s+m*h,r.z=v*a+m*c,r.w=v*o+m*d,r}integrate(e,i,r,n){n===void 0&&(n=new t);let s=e.x*r.x,a=e.y*r.y,o=e.z*r.z,l=this.x,h=this.y,c=this.z,d=this.w,u=i*.5;return n.x+=u*(s*d+a*c-o*h),n.y+=u*(a*d+o*l-s*c),n.z+=u*(o*d+s*h-a*l),n.w+=u*(-s*l-a*h-o*c),n}},lx=new w,hx=new w,cx={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},ze=class t{constructor(e){e===void 0&&(e={}),this.id=t.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,i){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,i,r,n){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};ze.idCounter=0;ze.types=cx;var wt=class t{constructor(e){e===void 0&&(e={}),this.position=new w,this.quaternion=new kt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,i){return t.pointToLocalFrame(this.position,this.quaternion,e,i)}pointToWorld(e,i){return t.pointToWorldFrame(this.position,this.quaternion,e,i)}vectorToWorldFrame(e,i){return i===void 0&&(i=new w),this.quaternion.vmult(e,i),i}static pointToLocalFrame(e,i,r,n){return n===void 0&&(n=new w),r.vsub(e,n),i.conjugate(Zd),Zd.vmult(n,n),n}static pointToWorldFrame(e,i,r,n){return n===void 0&&(n=new w),i.vmult(r,n),n.vadd(e,n),n}static vectorToWorldFrame(e,i,r){return r===void 0&&(r=new w),e.vmult(i,r),r}static vectorToLocalFrame(e,i,r,n){return n===void 0&&(n=new w),i.w*=-1,i.vmult(r,n),i.w*=-1,n}},Zd=new kt,cs=class t extends ze{constructor(e){e===void 0&&(e={});let{vertices:i=[],faces:r=[],normals:n=[],axes:s,boundingSphereRadius:a}=e;super({type:ze.types.CONVEXPOLYHEDRON}),this.vertices=i,this.faces=r,this.faceNormals=n,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,i=this.vertices,r=this.uniqueEdges;r.length=0;let n=new w;for(let s=0;s!==e.length;s++){let a=e[s],o=a.length;for(let l=0;l!==o;l++){let h=(l+1)%o;i[a[l]].vsub(i[a[h]],n),n.normalize();let c=!1;for(let d=0;d!==r.length;d++)if(r[d].almostEquals(n)||r[d].almostEquals(n)){c=!0;break}c||r.push(n.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let n=0;n<this.faces[e].length;n++)if(!this.vertices[this.faces[e][n]])throw new Error(`Vertex ${this.faces[e][n]} not found!`);let i=this.faceNormals[e]||new w;this.getFaceNormal(e,i),i.negate(i),this.faceNormals[e]=i;let r=this.vertices[this.faces[e][0]];if(i.dot(r)<0){console.error(`.faceNormals[${e}] = Vec3(${i.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let n=0;n<this.faces[e].length;n++)console.warn(`.vertices[${this.faces[e][n]}] = Vec3(${this.vertices[this.faces[e][n]].toString()})`)}}}getFaceNormal(e,i){let r=this.faces[e],n=this.vertices[r[0]],s=this.vertices[r[1]],a=this.vertices[r[2]];t.computeNormal(n,s,a,i)}static computeNormal(e,i,r,n){let s=new w,a=new w;i.vsub(e,a),r.vsub(i,s),s.cross(a,n),n.isZero()||n.normalize()}clipAgainstHull(e,i,r,n,s,a,o,l,h){let c=new w,d=-1,u=-Number.MAX_VALUE;for(let g=0;g<r.faces.length;g++){c.copy(r.faceNormals[g]),s.vmult(c,c);let v=c.dot(a);v>u&&(u=v,d=g)}let p=[];for(let g=0;g<r.faces[d].length;g++){let v=r.vertices[r.faces[d][g]],m=new w;m.copy(v),s.vmult(m,m),n.vadd(m,m),p.push(m)}d>=0&&this.clipFaceAgainstHull(a,e,i,p,o,l,h)}findSeparatingAxis(e,i,r,n,s,a,o,l){let h=new w,c=new w,d=new w,u=new w,p=new w,g=new w,v=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){r.vmult(m.uniqueAxes[f],h);let _=m.testSepAxis(h,e,i,r,n,s);if(_===!1)return!1;_<v&&(v=_,a.copy(h))}else{let f=o?o.length:m.faces.length;for(let _=0;_<f;_++){let M=o?o[_]:_;h.copy(m.faceNormals[M]),r.vmult(h,h);let y=m.testSepAxis(h,e,i,r,n,s);if(y===!1)return!1;y<v&&(v=y,a.copy(h))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){s.vmult(e.uniqueAxes[f],c);let _=m.testSepAxis(c,e,i,r,n,s);if(_===!1)return!1;_<v&&(v=_,a.copy(c))}else{let f=l?l.length:e.faces.length;for(let _=0;_<f;_++){let M=l?l[_]:_;c.copy(e.faceNormals[M]),s.vmult(c,c);let y=m.testSepAxis(c,e,i,r,n,s);if(y===!1)return!1;y<v&&(v=y,a.copy(c))}}for(let f=0;f!==m.uniqueEdges.length;f++){r.vmult(m.uniqueEdges[f],u);for(let _=0;_!==e.uniqueEdges.length;_++)if(s.vmult(e.uniqueEdges[_],p),u.cross(p,g),!g.almostZero()){g.normalize();let M=m.testSepAxis(g,e,i,r,n,s);if(M===!1)return!1;M<v&&(v=M,a.copy(g))}}return n.vsub(i,d),d.dot(a)>0&&a.negate(a),!0}testSepAxis(e,i,r,n,s,a){let o=this;t.project(o,e,r,n,Vh),t.project(i,e,s,a,Hh);let l=Vh[0],h=Vh[1],c=Hh[0],d=Hh[1];if(l<d||c<h)return!1;let u=l-d,p=c-h;return u<p?u:p}calculateLocalInertia(e,i){let r=new w,n=new w;this.computeLocalAABB(n,r);let s=r.x-n.x,a=r.y-n.y,o=r.z-n.z;i.x=1/12*e*(2*a*2*a+2*o*2*o),i.y=1/12*e*(2*s*2*s+2*o*2*o),i.z=1/12*e*(2*a*2*a+2*s*2*s)}getPlaneConstantOfFace(e){let i=this.faces[e],r=this.faceNormals[e],n=this.vertices[i[0]];return-r.dot(n)}clipFaceAgainstHull(e,i,r,n,s,a,o){let l=new w,h=new w,c=new w,d=new w,u=new w,p=new w,g=new w,v=new w,m=this,f=[],_=n,M=f,y=-1,b=Number.MAX_VALUE;for(let N=0;N<m.faces.length;N++){l.copy(m.faceNormals[N]),r.vmult(l,l);let L=l.dot(e);L<b&&(b=L,y=N)}if(y<0)return;let E=m.faces[y];E.connectedFaces=[];for(let N=0;N<m.faces.length;N++)for(let L=0;L<m.faces[N].length;L++)E.indexOf(m.faces[N][L])!==-1&&N!==y&&E.connectedFaces.indexOf(N)===-1&&E.connectedFaces.push(N);let C=E.length;for(let N=0;N<C;N++){let L=m.vertices[E[N]],B=m.vertices[E[(N+1)%C]];L.vsub(B,h),c.copy(h),r.vmult(c,c),i.vadd(c,c),d.copy(this.faceNormals[y]),r.vmult(d,d),i.vadd(d,d),c.cross(d,u),u.negate(u),p.copy(L),r.vmult(p,p),i.vadd(p,p);let U=E.connectedFaces[N];g.copy(this.faceNormals[U]);let R=this.getPlaneConstantOfFace(U);v.copy(g),r.vmult(v,v);let D=R-v.dot(i);for(this.clipFaceAgainstPlane(_,M,v,D);_.length;)_.shift();for(;M.length;)_.push(M.shift())}g.copy(this.faceNormals[y]);let x=this.getPlaneConstantOfFace(y);v.copy(g),r.vmult(v,v);let S=x-v.dot(i);for(let N=0;N<_.length;N++){let L=v.dot(_[N])+S;if(L<=s&&(console.log(`clamped: depth=${L} to minDist=${s}`),L=s),L<=a){let B=_[N];if(L<=1e-6){let U={point:B,normal:v,depth:L};o.push(U)}}}}clipFaceAgainstPlane(e,i,r,n){let s,a,o=e.length;if(o<2)return i;let l=e[e.length-1],h=e[0];s=r.dot(l)+n;for(let c=0;c<o;c++){if(h=e[c],a=r.dot(h)+n,s<0)if(a<0){let d=new w;d.copy(h),i.push(d)}else{let d=new w;l.lerp(h,s/(s-a),d),i.push(d)}else if(a<0){let d=new w;l.lerp(h,s/(s-a),d),i.push(d),i.push(h)}l=h,s=a}return i}computeWorldVertices(e,i){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new w);let r=this.vertices,n=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)i.vmult(r[s],n[s]),e.vadd(n[s],n[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,i){let r=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),i.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let n=0;n<this.vertices.length;n++){let s=r[n];s.x<e.x?e.x=s.x:s.x>i.x&&(i.x=s.x),s.y<e.y?e.y=s.y:s.y>i.y&&(i.y=s.y),s.z<e.z?e.z=s.z:s.z>i.z&&(i.z=s.z)}}computeWorldFaceNormals(e){let i=this.faceNormals.length;for(;this.worldFaceNormals.length<i;)this.worldFaceNormals.push(new w);let r=this.faceNormals,n=this.worldFaceNormals;for(let s=0;s!==i;s++)e.vmult(r[s],n[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,i=this.vertices;for(let r=0;r!==i.length;r++){let n=i[r].lengthSquared();n>e&&(e=n)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,i,r,n){let s=this.vertices,a,o,l,h,c,d,u=new w;for(let p=0;p<s.length;p++){u.copy(s[p]),i.vmult(u,u),e.vadd(u,u);let g=u;(a===void 0||g.x<a)&&(a=g.x),(h===void 0||g.x>h)&&(h=g.x),(o===void 0||g.y<o)&&(o=g.y),(c===void 0||g.y>c)&&(c=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}r.set(a,o,l),n.set(h,c,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new w);let i=this.vertices;for(let r=0;r<i.length;r++)e.vadd(i[r],e);return e.scale(1/i.length,e),e}transformAllPoints(e,i){let r=this.vertices.length,n=this.vertices;if(i){for(let s=0;s<r;s++){let a=n[s];i.vmult(a,a)}for(let s=0;s<this.faceNormals.length;s++){let a=this.faceNormals[s];i.vmult(a,a)}}if(e)for(let s=0;s<r;s++){let a=n[s];a.vadd(e,a)}}pointIsInside(e){let i=this.vertices,r=this.faces,n=this.faceNormals,s=null,a=new w;this.getAveragePointLocal(a);for(let o=0;o<this.faces.length;o++){let l=n[o],h=i[r[o][0]],c=new w;e.vsub(h,c);let d=l.dot(c),u=new w;a.vsub(h,u);let p=l.dot(u);if(d<0&&p>0||d>0&&p<0)return!1}return s?1:-1}static project(e,i,r,n,s){let a=e.vertices.length,o=dx,l=0,h=0,c=px,d=e.vertices;c.setZero(),wt.vectorToLocalFrame(r,n,i,o),wt.pointToLocalFrame(r,n,c,c);let u=c.dot(o);h=l=d[0].dot(o);for(let p=1;p<a;p++){let g=d[p].dot(o);g>l&&(l=g),g<h&&(h=g)}if(h-=u,l-=u,h>l){let p=h;h=l,l=p}s[0]=l,s[1]=h}},Vh=[],Hh=[],ux=new w,dx=new w,px=new w,Oi=class t extends ze{constructor(e){super({type:ze.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,i=this.halfExtents.y,r=this.halfExtents.z,n=w,s=[new n(-e,-i,-r),new n(e,-i,-r),new n(e,i,-r),new n(-e,i,-r),new n(-e,-i,r),new n(e,-i,r),new n(e,i,r),new n(-e,i,r)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new n(0,0,1),new n(0,1,0),new n(1,0,0)],l=new cs({vertices:s,faces:a,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,i){return i===void 0&&(i=new w),t.calculateInertia(this.halfExtents,e,i),i}static calculateInertia(e,i,r){let n=e;r.x=1/12*i*(2*n.y*2*n.y+2*n.z*2*n.z),r.y=1/12*i*(2*n.x*2*n.x+2*n.z*2*n.z),r.z=1/12*i*(2*n.y*2*n.y+2*n.x*2*n.x)}getSideNormals(e,i){let r=e,n=this.halfExtents;if(r[0].set(n.x,0,0),r[1].set(0,n.y,0),r[2].set(0,0,n.z),r[3].set(-n.x,0,0),r[4].set(0,-n.y,0),r[5].set(0,0,-n.z),i!==void 0)for(let s=0;s!==r.length;s++)i.vmult(r[s],r[s]);return r}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,i,r){let n=this.halfExtents,s=[[n.x,n.y,n.z],[-n.x,n.y,n.z],[-n.x,-n.y,n.z],[-n.x,-n.y,-n.z],[n.x,-n.y,-n.z],[n.x,n.y,-n.z],[-n.x,n.y,-n.z],[n.x,-n.y,n.z]];for(let a=0;a<s.length;a++)Wr.set(s[a][0],s[a][1],s[a][2]),i.vmult(Wr,Wr),e.vadd(Wr,Wr),r(Wr.x,Wr.y,Wr.z)}calculateWorldAABB(e,i,r,n){let s=this.halfExtents;lr[0].set(s.x,s.y,s.z),lr[1].set(-s.x,s.y,s.z),lr[2].set(-s.x,-s.y,s.z),lr[3].set(-s.x,-s.y,-s.z),lr[4].set(s.x,-s.y,-s.z),lr[5].set(s.x,s.y,-s.z),lr[6].set(-s.x,s.y,-s.z),lr[7].set(s.x,-s.y,s.z);let a=lr[0];i.vmult(a,a),e.vadd(a,a),n.copy(a),r.copy(a);for(let o=1;o<8;o++){let l=lr[o];i.vmult(l,l),e.vadd(l,l);let h=l.x,c=l.y,d=l.z;h>n.x&&(n.x=h),c>n.y&&(n.y=c),d>n.z&&(n.z=d),h<r.x&&(r.x=h),c<r.y&&(r.y=c),d<r.z&&(r.z=d)}}},Wr=new w,lr=[new w,new w,new w,new w,new w,new w,new w,new w],rc={DYNAMIC:1,STATIC:2,KINEMATIC:4},nc={AWAKE:0,SLEEPY:1,SLEEPING:2},nt=class t extends xo{constructor(e){e===void 0&&(e={}),super(),this.id=t.idCounter++,this.index=-1,this.world=null,this.vlambda=new w,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new w,this.previousPosition=new w,this.interpolatedPosition=new w,this.initPosition=new w,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new w,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new w,this.force=new w;let i=typeof e.mass=="number"?e.mass:0;this.mass=i,this.invMass=i>0?1/i:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=i<=0?t.STATIC:t.DYNAMIC,typeof e.type==typeof t.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep!="undefined"?e.allowSleep:!0,this.sleepState=t.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit!="undefined"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit!="undefined"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new w,this.quaternion=new kt,this.initQuaternion=new kt,this.previousQuaternion=new kt,this.interpolatedQuaternion=new kt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new w,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new w,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new w,this.invInertia=new w,this.invInertiaWorld=new qr,this.invMassSolve=0,this.invInertiaSolve=new w,this.invInertiaWorldSolve=new qr,this.fixedRotation=typeof e.fixedRotation!="undefined"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping!="undefined"?e.angularDamping:.01,this.linearFactor=new w(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new w(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new Li,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new w,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=t.AWAKE,this.wakeUpAfterNarrowphase=!1,e===t.SLEEPING&&this.dispatchEvent(t.wakeupEvent)}sleep(){this.sleepState=t.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let i=this.sleepState,r=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),n=this.sleepSpeedLimit**2;i===t.AWAKE&&r<n?(this.sleepState=t.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(t.sleepyEvent)):i===t.SLEEPY&&r>n?this.wakeUp():i===t.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(t.sleepEvent))}}updateSolveMassProperties(){this.sleepState===t.SLEEPING||this.type===t.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,i){return i===void 0&&(i=new w),e.vsub(this.position,i),this.quaternion.conjugate().vmult(i,i),i}vectorToLocalFrame(e,i){return i===void 0&&(i=new w),this.quaternion.conjugate().vmult(e,i),i}pointToWorldFrame(e,i){return i===void 0&&(i=new w),this.quaternion.vmult(e,i),i.vadd(this.position,i),i}vectorToWorldFrame(e,i){return i===void 0&&(i=new w),this.quaternion.vmult(e,i),i}addShape(e,i,r){let n=new w,s=new kt;return i&&n.copy(i),r&&s.copy(r),this.shapes.push(e),this.shapeOffsets.push(n),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let i=this.shapes.indexOf(e);return i===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(i,1),this.shapeOffsets.splice(i,1),this.shapeOrientations.splice(i,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,i=this.shapeOffsets,r=e.length,n=0;for(let s=0;s!==r;s++){let a=e[s];a.updateBoundingSphereRadius();let o=i[s].length(),l=a.boundingSphereRadius;o+l>n&&(n=o+l)}this.boundingRadius=n}updateAABB(){let e=this.shapes,i=this.shapeOffsets,r=this.shapeOrientations,n=e.length,s=fx,a=mx,o=this.quaternion,l=this.aabb,h=gx;for(let c=0;c!==n;c++){let d=e[c];o.vmult(i[c],s),s.vadd(this.position,s),o.mult(r[c],a),d.calculateWorldAABB(s,a,h.lowerBound,h.upperBound),c===0?l.copy(h):l.extend(h)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let i=this.invInertia;if(!(i.x===i.y&&i.y===i.z&&!e)){let r=vx,n=_x;r.setRotationFromQuaternion(this.quaternion),r.transpose(n),r.scale(i,r),r.mmult(n,this.invInertiaWorld)}}applyForce(e,i){if(i===void 0&&(i=new w),this.type!==t.DYNAMIC)return;this.sleepState===t.SLEEPING&&this.wakeUp();let r=xx;i.cross(e,r),this.force.vadd(e,this.force),this.torque.vadd(r,this.torque)}applyLocalForce(e,i){if(i===void 0&&(i=new w),this.type!==t.DYNAMIC)return;let r=Mx,n=bx;this.vectorToWorldFrame(e,r),this.vectorToWorldFrame(i,n),this.applyForce(r,n)}applyTorque(e){this.type===t.DYNAMIC&&(this.sleepState===t.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,i){if(i===void 0&&(i=new w),this.type!==t.DYNAMIC)return;this.sleepState===t.SLEEPING&&this.wakeUp();let r=i,n=Sx;n.copy(e),n.scale(this.invMass,n),this.velocity.vadd(n,this.velocity);let s=wx;r.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,i){if(i===void 0&&(i=new w),this.type!==t.DYNAMIC)return;let r=Ex,n=Tx;this.vectorToWorldFrame(e,r),this.vectorToWorldFrame(i,n),this.applyImpulse(r,n)}updateMassProperties(){let e=Ax;this.invMass=this.mass>0?1/this.mass:0;let i=this.inertia,r=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Oi.calculateInertia(e,this.mass,i),this.invInertia.set(i.x>0&&!r?1/i.x:0,i.y>0&&!r?1/i.y:0,i.z>0&&!r?1/i.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,i){let r=new w;return e.vsub(this.position,r),this.angularVelocity.cross(r,i),this.velocity.vadd(i,i),i}integrate(e,i,r){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===t.DYNAMIC||this.type===t.KINEMATIC)||this.sleepState===t.SLEEPING)return;let n=this.velocity,s=this.angularVelocity,a=this.position,o=this.force,l=this.torque,h=this.quaternion,c=this.invMass,d=this.invInertiaWorld,u=this.linearFactor,p=c*e;n.x+=o.x*p*u.x,n.y+=o.y*p*u.y,n.z+=o.z*p*u.z;let g=d.elements,v=this.angularFactor,m=l.x*v.x,f=l.y*v.y,_=l.z*v.z;s.x+=e*(g[0]*m+g[1]*f+g[2]*_),s.y+=e*(g[3]*m+g[4]*f+g[5]*_),s.z+=e*(g[6]*m+g[7]*f+g[8]*_),a.x+=n.x*e,a.y+=n.y*e,a.z+=n.z*e,h.integrate(this.angularVelocity,e,this.angularFactor,h),i&&(r?h.normalizeFast():h.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};nt.idCounter=0;nt.COLLIDE_EVENT_NAME="collide";nt.DYNAMIC=rc.DYNAMIC;nt.STATIC=rc.STATIC;nt.KINEMATIC=rc.KINEMATIC;nt.AWAKE=nc.AWAKE;nt.SLEEPY=nc.SLEEPY;nt.SLEEPING=nc.SLEEPING;nt.wakeupEvent={type:"wakeup"};nt.sleepyEvent={type:"sleepy"};nt.sleepEvent={type:"sleep"};var fx=new w,mx=new kt,gx=new Li,vx=new qr,_x=new qr,yx=new qr,xx=new w,Mx=new w,bx=new w,Sx=new w,wx=new w,Ex=new w,Tx=new w,Ax=new w,Xh=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,i,r){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,i){return!((e.collisionFilterGroup&i.collisionFilterMask)===0||(i.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&nt.STATIC)!==0||e.sleepState===nt.SLEEPING)&&((i.type&nt.STATIC)!==0||i.sleepState===nt.SLEEPING))}intersectionTest(e,i,r,n){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,i,r,n):this.doBoundingSphereBroadphase(e,i,r,n)}doBoundingSphereBroadphase(e,i,r,n){let s=Cx;i.position.vsub(e.position,s);let a=(e.boundingRadius+i.boundingRadius)**2;s.lengthSquared()<a&&(r.push(e),n.push(i))}doBoundingBoxBroadphase(e,i,r,n){e.aabbNeedsUpdate&&e.updateAABB(),i.aabbNeedsUpdate&&i.updateAABB(),e.aabb.overlaps(i.aabb)&&(r.push(e),n.push(i))}makePairsUnique(e,i){let r=Rx,n=Ix,s=Px,a=e.length;for(let o=0;o!==a;o++)n[o]=e[o],s[o]=i[o];e.length=0,i.length=0;for(let o=0;o!==a;o++){let l=n[o].id,h=s[o].id,c=l<h?`${l},${h}`:`${h},${l}`;r[c]=o,r.keys.push(c)}for(let o=0;o!==r.keys.length;o++){let l=r.keys.pop(),h=r[l];e.push(n[h]),i.push(s[h]),delete r[l]}}setWorld(e){}static boundingSphereCheck(e,i){let r=new w;e.position.vsub(i.position,r);let n=e.shapes[0],s=i.shapes[0];return Math.pow(n.boundingSphereRadius+s.boundingSphereRadius,2)>r.lengthSquared()}aabbQuery(e,i,r){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},Cx=new w;new w;new kt;new w;var Rx={keys:[]},Ix=[],Px=[];new w;var UE=new w;new w;var jh=class extends Xh{constructor(){super()}collisionPairs(e,i,r){let n=e.bodies,s=n.length,a,o;for(let l=0;l!==s;l++)for(let h=0;h!==l;h++)a=n[l],o=n[h],this.needBroadphaseCollision(a,o)&&this.intersectionTest(a,o,i,r)}aabbQuery(e,i,r){r===void 0&&(r=[]);for(let n=0;n<e.bodies.length;n++){let s=e.bodies[n];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(i)&&r.push(s)}return r}},yn=class{constructor(){this.rayFromWorld=new w,this.rayToWorld=new w,this.hitNormalWorld=new w,this.hitPointWorld=new w,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,i,r,n,s,a,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(i),this.hitNormalWorld.copy(r),this.hitPointWorld.copy(n),this.shape=s,this.body=a,this.distance=o}},dp,pp,fp,mp,gp,vp,_p,sc={CLOSEST:1,ANY:2,ALL:4};dp=ze.types.SPHERE;pp=ze.types.PLANE;fp=ze.types.BOX;mp=ze.types.CYLINDER;gp=ze.types.CONVEXPOLYHEDRON;vp=ze.types.HEIGHTFIELD;_p=ze.types.TRIMESH;var Fi=class t{get[dp](){return this._intersectSphere}get[pp](){return this._intersectPlane}get[fp](){return this._intersectBox}get[mp](){return this._intersectConvex}get[gp](){return this._intersectConvex}get[vp](){return this._intersectHeightfield}get[_p](){return this._intersectTrimesh}constructor(e,i){e===void 0&&(e=new w),i===void 0&&(i=new w),this.from=e.clone(),this.to=i.clone(),this.direction=new w,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=t.ANY,this.result=new yn,this.hasHit=!1,this.callback=r=>{}}intersectWorld(e,i){return this.mode=i.mode||t.ANY,this.result=i.result||new yn,this.skipBackfaces=!!i.skipBackfaces,this.collisionFilterMask=typeof i.collisionFilterMask!="undefined"?i.collisionFilterMask:-1,this.collisionFilterGroup=typeof i.collisionFilterGroup!="undefined"?i.collisionFilterGroup:-1,this.checkCollisionResponse=typeof i.checkCollisionResponse!="undefined"?i.checkCollisionResponse:!0,i.from&&this.from.copy(i.from),i.to&&this.to.copy(i.to),this.callback=i.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Kd),Gh.length=0,e.broadphase.aabbQuery(e,Kd,Gh),this.intersectBodies(Gh),this.hasHit}intersectBody(e,i){i&&(this.result=i,this.updateDirection());let r=this.checkCollisionResponse;if(r&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let n=Lx,s=Nx;for(let a=0,o=e.shapes.length;a<o;a++){let l=e.shapes[a];if(!(r&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[a],s),e.quaternion.vmult(e.shapeOffsets[a],n),n.vadd(e.position,n),this.intersectShape(l,s,n,e),this.result.shouldStop))break}}intersectBodies(e,i){i&&(this.result=i,this.updateDirection());for(let r=0,n=e.length;!this.result.shouldStop&&r<n;r++)this.intersectBody(e[r])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,i,r,n){let s=this.from;if(Zx(s,this.direction,r)>e.boundingSphereRadius)return;let o=this[e.type];o&&o.call(this,e,i,r,n,e)}_intersectBox(e,i,r,n,s){return this._intersectConvex(e.convexPolyhedronRepresentation,i,r,n,s)}_intersectPlane(e,i,r,n,s){let a=this.from,o=this.to,l=this.direction,h=new w(0,0,1);i.vmult(h,h);let c=new w;a.vsub(r,c);let d=c.dot(h);o.vsub(r,c);let u=c.dot(h);if(d*u>0||a.distanceTo(o)<d)return;let p=h.dot(l);if(Math.abs(p)<this.precision)return;let g=new w,v=new w,m=new w;a.vsub(r,g);let f=-h.dot(g)/p;l.scale(f,v),a.vadd(v,m),this.reportIntersection(h,m,s,n,-1)}getAABB(e){let{lowerBound:i,upperBound:r}=e,n=this.to,s=this.from;i.x=Math.min(n.x,s.x),i.y=Math.min(n.y,s.y),i.z=Math.min(n.z,s.z),r.x=Math.max(n.x,s.x),r.y=Math.max(n.y,s.y),r.z=Math.max(n.z,s.z)}_intersectHeightfield(e,i,r,n,s){e.data,e.elementSize;let a=Dx;a.from.copy(this.from),a.to.copy(this.to),wt.pointToLocalFrame(r,i,a.from,a.from),wt.pointToLocalFrame(r,i,a.to,a.to),a.updateDirection();let o=Bx,l,h,c,d;l=h=0,c=d=e.data.length-1;let u=new Li;a.getAABB(u),e.getIndexOfPosition(u.lowerBound.x,u.lowerBound.y,o,!0),l=Math.max(l,o[0]),h=Math.max(h,o[1]),e.getIndexOfPosition(u.upperBound.x,u.upperBound.y,o,!0),c=Math.min(c,o[0]+1),d=Math.min(d,o[1]+1);for(let p=l;p<c;p++)for(let g=h;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,g,u),!!u.overlapsRay(a)){if(e.getConvexTrianglePillar(p,g,!1),wt.pointToWorldFrame(r,i,e.pillarOffset,fo),this._intersectConvex(e.pillarConvex,i,fo,n,s,$d),this.result.shouldStop)return;e.getConvexTrianglePillar(p,g,!0),wt.pointToWorldFrame(r,i,e.pillarOffset,fo),this._intersectConvex(e.pillarConvex,i,fo,n,s,$d)}}}_intersectSphere(e,i,r,n,s){let a=this.from,o=this.to,l=e.radius,h=(o.x-a.x)**2+(o.y-a.y)**2+(o.z-a.z)**2,c=2*((o.x-a.x)*(a.x-r.x)+(o.y-a.y)*(a.y-r.y)+(o.z-a.z)*(a.z-r.z)),d=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2-l**2,u=c**2-4*h*d,p=Ux,g=Fx;if(!(u<0))if(u===0)a.lerp(o,u,p),p.vsub(r,g),g.normalize(),this.reportIntersection(g,p,s,n,-1);else{let v=(-c-Math.sqrt(u))/(2*h),m=(-c+Math.sqrt(u))/(2*h);if(v>=0&&v<=1&&(a.lerp(o,v,p),p.vsub(r,g),g.normalize(),this.reportIntersection(g,p,s,n,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(a.lerp(o,m,p),p.vsub(r,g),g.normalize(),this.reportIntersection(g,p,s,n,-1))}}_intersectConvex(e,i,r,n,s,a){let o=Ox,l=Jd,h=a&&a.faceList||null,c=e.faces,d=e.vertices,u=e.faceNormals,p=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),f=h?h.length:c.length,_=this.result;for(let M=0;!_.shouldStop&&M<f;M++){let y=h?h[M]:M,b=c[y],E=u[y],C=i,x=r;l.copy(d[b[0]]),C.vmult(l,l),l.vadd(x,l),l.vsub(g,l),C.vmult(E,o);let S=p.dot(o);if(Math.abs(S)<this.precision)continue;let N=o.dot(l)/S;if(!(N<0)){p.scale(N,Mi),Mi.vadd(g,Mi),Zi.copy(d[b[0]]),C.vmult(Zi,Zi),x.vadd(Zi,Zi);for(let L=1;!_.shouldStop&&L<b.length-1;L++){hr.copy(d[b[L]]),cr.copy(d[b[L+1]]),C.vmult(hr,hr),C.vmult(cr,cr),x.vadd(hr,hr),x.vadd(cr,cr);let B=Mi.distanceTo(g);!(t.pointInTriangle(Mi,Zi,hr,cr)||t.pointInTriangle(Mi,hr,Zi,cr))||B>m||this.reportIntersection(o,Mi,s,n,y)}}}}_intersectTrimesh(e,i,r,n,s,a){let o=Hx,l=jx,h=Yx,c=Jd,d=Gx,u=kx,p=Wx,g=Xx,v=qx,m=e.indices;e.vertices;let f=this.from,_=this.to,M=this.direction;h.position.copy(r),h.quaternion.copy(i),wt.vectorToLocalFrame(r,i,M,d),wt.pointToLocalFrame(r,i,f,u),wt.pointToLocalFrame(r,i,_,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,u.x*=e.scale.x,u.y*=e.scale.y,u.z*=e.scale.z,p.vsub(u,d),d.normalize();let y=u.distanceSquared(p);e.tree.rayQuery(this,h,l);for(let b=0,E=l.length;!this.result.shouldStop&&b!==E;b++){let C=l[b];e.getNormal(C,o),e.getVertex(m[C*3],Zi),Zi.vsub(u,c);let x=d.dot(o),S=o.dot(c)/x;if(S<0)continue;d.scale(S,Mi),Mi.vadd(u,Mi),e.getVertex(m[C*3+1],hr),e.getVertex(m[C*3+2],cr);let N=Mi.distanceSquared(u);!(t.pointInTriangle(Mi,hr,Zi,cr)||t.pointInTriangle(Mi,Zi,hr,cr))||N>y||(wt.vectorToWorldFrame(i,o,v),wt.pointToWorldFrame(r,i,Mi,g),this.reportIntersection(v,g,s,n,C))}l.length=0}reportIntersection(e,i,r,n,s){let a=this.from,o=this.to,l=a.distanceTo(i),h=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(h.hitFaceIndex=typeof s!="undefined"?s:-1,this.mode){case t.ALL:this.hasHit=!0,h.set(a,o,e,i,r,n,l),h.hasHit=!0,this.callback(h);break;case t.CLOSEST:(l<h.distance||!h.hasHit)&&(this.hasHit=!0,h.hasHit=!0,h.set(a,o,e,i,r,n,l));break;case t.ANY:this.hasHit=!0,h.hasHit=!0,h.set(a,o,e,i,r,n,l),h.shouldStop=!0;break}}static pointInTriangle(e,i,r,n){n.vsub(i,_n),r.vsub(i,Ks),e.vsub(i,kh);let s=_n.dot(_n),a=_n.dot(Ks),o=_n.dot(kh),l=Ks.dot(Ks),h=Ks.dot(kh),c,d;return(c=l*o-a*h)>=0&&(d=s*h-a*o)>=0&&c+d<s*l-a*a}};Fi.CLOSEST=sc.CLOSEST;Fi.ANY=sc.ANY;Fi.ALL=sc.ALL;var Kd=new Li,Gh=[],Ks=new w,kh=new w,Lx=new w,Nx=new kt,Mi=new w,Zi=new w,hr=new w,cr=new w;new w;new yn;var $d={faceList:[0]},fo=new w,Dx=new Fi,Bx=[],Ux=new w,Fx=new w,Ox=new w,zx=new w,Vx=new w,Jd=new w,Hx=new w,Gx=new w,kx=new w,Wx=new w,qx=new w,Xx=new w;new Li;var jx=[],Yx=new wt,_n=new w,mo=new w;function Zx(t,e,i){i.vsub(t,_n);let r=_n.dot(e);return e.scale(r,mo),mo.vadd(t,mo),i.distanceTo(mo)}var us=class{static defaults(e,i){e===void 0&&(e={});for(let r in i)r in e||(e[r]=i[r]);return e}},Yh=class t{constructor(e,i,r){r===void 0&&(r={}),r=us.defaults(r,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=i,this.id=t.idCounter++,this.collideConnected=r.collideConnected,r.wakeUpBodies&&(e&&e.wakeUp(),i&&i.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let i=0;i<e.length;i++)e[i].enabled=!0}disable(){let e=this.equations;for(let i=0;i<e.length;i++)e[i].enabled=!1}};Yh.idCounter=0;var Mo=class{constructor(){this.spatial=new w,this.rotational=new w}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,i){return e.dot(this.spatial)+i.dot(this.rotational)}},ea=class t{constructor(e,i,r,n){r===void 0&&(r=-1e6),n===void 0&&(n=1e6),this.id=t.idCounter++,this.minForce=r,this.maxForce=n,this.bi=e,this.bj=i,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Mo,this.jacobianElementB=new Mo,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,i,r){let n=i,s=e,a=r;this.a=4/(a*(1+4*n)),this.b=4*n/(1+4*n),this.eps=4/(a*a*s*(1+4*n))}computeB(e,i,r){let n=this.computeGW(),s=this.computeGq(),a=this.computeGiMf();return-s*e-n*i-a*r}computeGq(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,s=r.position,a=n.position;return e.spatial.dot(s)+i.spatial.dot(a)}computeGW(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,s=r.velocity,a=n.velocity,o=r.angularVelocity,l=n.angularVelocity;return e.multiplyVectors(s,o)+i.multiplyVectors(a,l)}computeGWlambda(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,s=r.vlambda,a=n.vlambda,o=r.wlambda,l=n.wlambda;return e.multiplyVectors(s,o)+i.multiplyVectors(a,l)}computeGiMf(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,s=r.force,a=r.torque,o=n.force,l=n.torque,h=r.invMassSolve,c=n.invMassSolve;return s.scale(h,Qd),o.scale(c,ep),r.invInertiaWorldSolve.vmult(a,tp),n.invInertiaWorldSolve.vmult(l,ip),e.multiplyVectors(Qd,tp)+i.multiplyVectors(ep,ip)}computeGiMGt(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,s=r.invMassSolve,a=n.invMassSolve,o=r.invInertiaWorldSolve,l=n.invInertiaWorldSolve,h=s+a;return o.vmult(e.rotational,go),h+=go.dot(e.rotational),l.vmult(i.rotational,go),h+=go.dot(i.rotational),h}addToWlambda(e){let i=this.jacobianElementA,r=this.jacobianElementB,n=this.bi,s=this.bj,a=Kx;n.vlambda.addScaledVector(n.invMassSolve*e,i.spatial,n.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,r.spatial,s.vlambda),n.invInertiaWorldSolve.vmult(i.rotational,a),n.wlambda.addScaledVector(e,a,n.wlambda),s.invInertiaWorldSolve.vmult(r.rotational,a),s.wlambda.addScaledVector(e,a,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};ea.idCounter=0;var Qd=new w,ep=new w,tp=new w,ip=new w,go=new w,Kx=new w,Zh=class extends ea{constructor(e,i,r){r===void 0&&(r=1e6),super(e,i,0,r),this.restitution=0,this.ri=new w,this.rj=new w,this.ni=new w}computeB(e){let i=this.a,r=this.b,n=this.bi,s=this.bj,a=this.ri,o=this.rj,l=$x,h=Jx,c=n.velocity,d=n.angularVelocity;n.force,n.torque;let u=s.velocity,p=s.angularVelocity;s.force,s.torque;let g=Qx,v=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;a.cross(f,l),o.cross(f,h),f.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(f),m.rotational.copy(h),g.copy(s.position),g.vadd(o,g),g.vsub(n.position,g),g.vsub(a,g);let _=f.dot(g),M=this.restitution+1,y=M*u.dot(f)-M*c.dot(f)+p.dot(h)-d.dot(l),b=this.computeGiMf();return-_*i-y*r-e*b}getImpactVelocityAlongNormal(){let e=e1,i=t1,r=i1,n=r1,s=n1;return this.bi.position.vadd(this.ri,r),this.bj.position.vadd(this.rj,n),this.bi.getVelocityAtWorldPoint(r,e),this.bj.getVelocityAtWorldPoint(n,i),e.vsub(i,s),this.ni.dot(s)}},$x=new w,Jx=new w,Qx=new w,e1=new w,t1=new w,i1=new w,r1=new w,n1=new w;var FE=new w,OE=new w;var zE=new w,VE=new w;new w;new w;var HE=new w,GE=new w;var kE=new w,WE=new w,bo=class extends ea{constructor(e,i,r){super(e,i,-r,r),this.ri=new w,this.rj=new w,this.t=new w}computeB(e){this.a;let i=this.b;this.bi,this.bj;let r=this.ri,n=this.rj,s=s1,a=a1,o=this.t;r.cross(o,s),n.cross(o,a);let l=this.jacobianElementA,h=this.jacobianElementB;o.negate(l.spatial),s.negate(l.rotational),h.spatial.copy(o),h.rotational.copy(a);let c=this.computeGW(),d=this.computeGiMf();return-c*i-e*d}},s1=new w,a1=new w,So=class t{constructor(e,i,r){r=us.defaults(r,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=t.idCounter++,this.materials=[e,i],this.friction=r.friction,this.restitution=r.restitution,this.contactEquationStiffness=r.contactEquationStiffness,this.contactEquationRelaxation=r.contactEquationRelaxation,this.frictionEquationStiffness=r.frictionEquationStiffness,this.frictionEquationRelaxation=r.frictionEquationRelaxation}};So.idCounter=0;var Xr=class t{constructor(e){e===void 0&&(e={});let i="";typeof e=="string"&&(i=e,e={}),this.name=i,this.id=t.idCounter++,this.friction=typeof e.friction!="undefined"?e.friction:-1,this.restitution=typeof e.restitution!="undefined"?e.restitution:-1}};Xr.idCounter=0;var qE=new w,XE=new w,jE=new w,YE=new w,ZE=new w,KE=new w,$E=new w,JE=new w,QE=new w,eT=new w,tT=new w,Kh=class{constructor(e){e===void 0&&(e={}),e=us.defaults(e,{chassisConnectionPointLocal:new w,chassisConnectionPointWorld:new w,directionLocal:new w,directionWorld:new w,axleLocal:new w,axleWorld:new w,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:10.5,forwardAcceleration:1,sideAcceleration:1,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,slipInfo:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=e.maxSuspensionTravel,this.customSlidingRotationalSpeed=e.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=e.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=e.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=e.chassisConnectionPointWorld.clone(),this.directionLocal=e.directionLocal.clone(),this.directionWorld=e.directionWorld.clone(),this.axleLocal=e.axleLocal.clone(),this.axleWorld=e.axleWorld.clone(),this.suspensionRestLength=e.suspensionRestLength,this.suspensionMaxLength=e.suspensionMaxLength,this.radius=e.radius,this.suspensionStiffness=e.suspensionStiffness,this.dampingCompression=e.dampingCompression,this.dampingRelaxation=e.dampingRelaxation,this.frictionSlip=e.frictionSlip,this.forwardAcceleration=e.forwardAcceleration,this.sideAcceleration=e.sideAcceleration,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=e.rollInfluence,this.maxSuspensionForce=e.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=e.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.slipInfo=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new yn,this.worldTransform=new wt,this.isInContact=!1}updateWheel(e){let i=this.raycastResult;if(this.isInContact){let r=i.hitNormalWorld.dot(i.directionWorld);i.hitPointWorld.vsub(e.position,np),e.getVelocityAtWorldPoint(np,rp);let n=i.hitNormalWorld.dot(rp);if(r>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{let s=-1/r;this.suspensionRelativeVelocity=n*s,this.clippedInvContactDotSuspension=s}}else i.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,i.directionWorld.scale(-1,i.hitNormalWorld),this.clippedInvContactDotSuspension=1}},rp=new w,np=new w,wo=class{constructor(e){this.chassisBody=e.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof e.indexRightAxis!="undefined"?e.indexRightAxis:2,this.indexForwardAxis=typeof e.indexForwardAxis!="undefined"?e.indexForwardAxis:0,this.indexUpAxis=typeof e.indexUpAxis!="undefined"?e.indexUpAxis:1,this.constraints=[],this.preStepCallback=()=>{},this.currentVehicleSpeedKmHour=0,this.numWheelsOnGround=0}addWheel(e){e===void 0&&(e={});let i=new Kh(e),r=this.wheelInfos.length;return this.wheelInfos.push(i),r}setSteeringValue(e,i){let r=this.wheelInfos[i];r.steering=e}applyEngineForce(e,i){this.wheelInfos[i].engineForce=e}setBrake(e,i){this.wheelInfos[i].brake=e}addToWorld(e){e.addBody(this.chassisBody);let i=this;this.preStepCallback=()=>{i.updateVehicle(e.dt)},e.addEventListener("preStep",this.preStepCallback),this.world=e}getVehicleAxisWorld(e,i){i.set(e===0?1:0,e===1?1:0,e===2?1:0),this.chassisBody.vectorToWorldFrame(i,i)}updateVehicle(e){let i=this.wheelInfos,r=i.length,n=this.chassisBody;for(let d=0;d<r;d++)this.updateWheelTransform(d);this.currentVehicleSpeedKmHour=3.6*n.velocity.length();let s=new w;this.getVehicleAxisWorld(this.indexForwardAxis,s),s.dot(n.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(let d=0;d<r;d++)this.castRay(i[d]);this.updateSuspension(e);let a=new w,o=new w;for(let d=0;d<r;d++){let u=i[d],p=u.suspensionForce;p>u.maxSuspensionForce&&(p=u.maxSuspensionForce),u.raycastResult.hitNormalWorld.scale(p*e,a),u.raycastResult.hitPointWorld.vsub(n.position,o),n.applyImpulse(a,o)}this.updateFriction(e);let l=new w,h=new w,c=new w;for(let d=0;d<r;d++){let u=i[d];n.getVelocityAtWorldPoint(u.chassisConnectionPointWorld,c);let p=1;switch(this.indexUpAxis){case 1:p=-1;break}if(u.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,h);let g=h.dot(u.raycastResult.hitNormalWorld);u.raycastResult.hitNormalWorld.scale(g,l),h.vsub(l,h);let v=h.dot(c);u.deltaRotation=p*v*e/u.radius}(u.sliding||!u.isInContact)&&u.engineForce!==0&&u.useCustomSlidingRotationalSpeed&&(u.deltaRotation=(u.engineForce>0?1:-1)*u.customSlidingRotationalSpeed*e),Math.abs(u.brake)>Math.abs(u.engineForce)&&(u.deltaRotation=0),u.rotation+=u.deltaRotation,u.deltaRotation*=.99}}updateSuspension(e){let r=this.chassisBody.mass,n=this.wheelInfos,s=n.length;for(let a=0;a<s;a++){let o=n[a];if(o.isInContact){let l,h=o.suspensionRestLength,c=o.suspensionLength,d=h-c;l=o.suspensionStiffness*d*o.clippedInvContactDotSuspension;let u=o.suspensionRelativeVelocity,p;u<0?p=o.dampingCompression:p=o.dampingRelaxation,l-=p*u,o.suspensionForce=l*r,o.suspensionForce<0&&(o.suspensionForce=0)}else o.suspensionForce=0}}removeFromWorld(e){this.constraints,e.removeBody(this.chassisBody),e.removeEventListener("preStep",this.preStepCallback),this.world=null}castRay(e){let i=c1,r=u1;this.updateWheelTransformWorld(e);let n=this.chassisBody,s=-1,a=e.suspensionRestLength+e.radius;e.directionWorld.scale(a,i);let o=e.chassisConnectionPointWorld;o.vadd(i,r);let l=e.raycastResult;l.reset();let h=n.collisionResponse;n.collisionResponse=!1,this.world.rayTest(o,r,l),n.collisionResponse=h;let c=l.body;if(e.raycastResult.groundObject=0,c){s=l.distance,e.raycastResult.hitNormalWorld=l.hitNormalWorld,e.isInContact=!0;let d=l.distance;e.suspensionLength=d-e.radius;let u=e.suspensionRestLength-e.maxSuspensionTravel,p=e.suspensionRestLength+e.maxSuspensionTravel;e.suspensionLength<u&&(e.suspensionLength=u),e.suspensionLength>p&&(e.suspensionLength=p,e.raycastResult.reset());let g=e.raycastResult.hitNormalWorld.dot(e.directionWorld),v=new w;n.getVelocityAtWorldPoint(e.raycastResult.hitPointWorld,v);let m=e.raycastResult.hitNormalWorld.dot(v);if(g>=-.1)e.suspensionRelativeVelocity=0,e.clippedInvContactDotSuspension=1/.1;else{let f=-1/g;e.suspensionRelativeVelocity=m*f,e.clippedInvContactDotSuspension=f}}else e.suspensionLength=e.suspensionRestLength+0*e.maxSuspensionTravel,e.suspensionRelativeVelocity=0,e.directionWorld.scale(-1,e.raycastResult.hitNormalWorld),e.clippedInvContactDotSuspension=1;return s}updateWheelTransformWorld(e){e.isInContact=!1;let i=this.chassisBody;i.pointToWorldFrame(e.chassisConnectionPointLocal,e.chassisConnectionPointWorld),i.vectorToWorldFrame(e.directionLocal,e.directionWorld),i.vectorToWorldFrame(e.axleLocal,e.axleWorld)}updateWheelTransform(e){let i=o1,r=l1,n=h1,s=this.wheelInfos[e];this.updateWheelTransformWorld(s),s.directionLocal.scale(-1,i),r.copy(s.axleLocal),i.cross(r,n),n.normalize(),r.normalize();let a=s.steering,o=new kt;o.setFromAxisAngle(i,a);let l=new kt;l.setFromAxisAngle(r,s.rotation);let h=s.worldTransform.quaternion;this.chassisBody.quaternion.mult(o,h),h.mult(l,h),h.normalize();let c=s.worldTransform.position;c.copy(s.directionWorld),c.scale(s.suspensionLength,c),c.vadd(s.chassisConnectionPointWorld,c)}getWheelTransformWorld(e){return this.wheelInfos[e].worldTransform}updateFriction(e){let i=p1,r=this.wheelInfos,n=r.length,s=this.chassisBody,a=m1,o=f1;this.numWheelsOnGround=0;for(let c=0;c<n;c++){let d=r[c];d.raycastResult.body&&this.numWheelsOnGround++,d.sideImpulse=0,d.forwardImpulse=0,a[c]||(a[c]=new w),o[c]||(o[c]=new w)}for(let c=0;c<n;c++){let d=r[c],u=d.raycastResult.body;if(u){let p=o[c];this.getWheelTransformWorld(c).vectorToWorldFrame(d1[this.indexRightAxis],p);let v=d.raycastResult.hitNormalWorld,m=p.dot(v);v.scale(m,i),p.vsub(i,p),p.normalize(),v.cross(p,a[c]),a[c].normalize(),d.sideImpulse=C1(s,d.raycastResult.hitPointWorld,u,d.raycastResult.hitPointWorld,p),d.sideImpulse*=g1}}let l=1,h=.5;this.sliding=!1;for(let c=0;c<n;c++){let d=r[c],u=d.raycastResult.body,p=0;if(d.slipInfo=1,u){let v=d.brake?d.brake:0;p=x1(s,u,d.raycastResult.hitPointWorld,a[c],v),p+=d.engineForce*e;let m=v/p;d.slipInfo*=m}if(d.forwardImpulse=0,d.skidInfo=1,u){d.skidInfo=1;let g=d.suspensionForce*e*d.frictionSlip,m=g*g;d.forwardImpulse=p;let f=d.forwardImpulse*h/d.forwardAcceleration,_=d.sideImpulse*l/d.sideAcceleration,M=f*f+_*_;if(d.sliding=!1,M>m){this.sliding=!0,d.sliding=!0;let y=g/Math.sqrt(M);d.skidInfo*=y}}}if(this.sliding)for(let c=0;c<n;c++){let d=r[c];d.sideImpulse!==0&&d.skidInfo<1&&(d.forwardImpulse*=d.skidInfo,d.sideImpulse*=d.skidInfo)}for(let c=0;c<n;c++){let d=r[c],u=new w;if(d.raycastResult.hitPointWorld.vsub(s.position,u),d.forwardImpulse!==0){let p=new w;a[c].scale(d.forwardImpulse,p),s.applyImpulse(p,u)}if(d.sideImpulse!==0){let p=d.raycastResult.body,g=new w;d.raycastResult.hitPointWorld.vsub(p.position,g);let v=new w;o[c].scale(d.sideImpulse,v),s.vectorToLocalFrame(u,u),u["xyz"[this.indexUpAxis]]*=d.rollInfluence,s.vectorToWorldFrame(u,u),s.applyImpulse(v,u),v.scale(-1,v),p.applyImpulse(v,g)}}}};new w;new w;new w;var o1=new w,l1=new w,h1=new w;new Fi;new w;var c1=new w,u1=new w,d1=[new w(1,0,0),new w(0,1,0),new w(0,0,1)],p1=new w,f1=[],m1=[],g1=1,v1=new w,_1=new w,y1=new w;function x1(t,e,i,r,n){let s=0,a=i,o=v1,l=_1,h=y1;t.getVelocityAtWorldPoint(a,o),e.getVelocityAtWorldPoint(a,l),o.vsub(l,h);let c=r.dot(h),d=sp(t,i,r),u=sp(e,i,r),g=1/(d+u);return s=-c*g,n<s&&(s=n),s<-n&&(s=-n),s}var M1=new w,b1=new w,S1=new w,w1=new w;function sp(t,e,i){let r=M1,n=b1,s=S1,a=w1;return e.vsub(t.position,r),r.cross(i,n),t.invInertiaWorld.vmult(n,a),a.cross(r,s),t.invMass+i.dot(s)}var E1=new w,T1=new w,A1=new w;function C1(t,e,i,r,n){if(n.lengthSquared()>1.1)return 0;let a=E1,o=T1,l=A1;t.getVelocityAtWorldPoint(e,a),i.getVelocityAtWorldPoint(r,o),a.vsub(o,l);let h=n.dot(l),c=.2,d=1/(t.invMass+i.invMass);return-c*h*d}var iT=new w,rT=new w;var nT=new w,sT=new w,aT=new w,oT=new w,lT=new w,hT=new w,cT=new w,Ni=class extends cs{constructor(e,i,r,n){if(e===void 0&&(e=1),i===void 0&&(i=1),r===void 0&&(r=1),n===void 0&&(n=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(i<0)throw new Error("The cylinder radiusBottom cannot be negative.");let s=n,a=[],o=[],l=[],h=[],c=[],d=Math.cos,u=Math.sin;a.push(new w(-i*u(0),-r*.5,i*d(0))),h.push(0),a.push(new w(-e*u(0),r*.5,e*d(0))),c.push(1);for(let g=0;g<s;g++){let v=2*Math.PI/s*(g+1),m=2*Math.PI/s*(g+.5);g<s-1?(a.push(new w(-i*u(v),-r*.5,i*d(v))),h.push(2*g+2),a.push(new w(-e*u(v),r*.5,e*d(v))),c.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&o.push(new w(-u(m),0,d(m)))}l.push(h),o.push(new w(0,1,0));let p=[];for(let g=0;g<c.length;g++)p.push(c[c.length-g-1]);l.push(p),super({vertices:a,faces:l,axes:o}),this.type=ze.types.CYLINDER,this.radiusTop=e,this.radiusBottom=i,this.height=r,this.numSegments=n}};var uT=new w,Eo=class extends ze{constructor(e,i){i===void 0&&(i={}),i=us.defaults(i,{maxValue:null,minValue:null,elementSize:1}),super({type:ze.types.HEIGHTFIELD}),this.data=e,this.maxValue=i.maxValue,this.minValue=i.minValue,this.elementSize=i.elementSize,i.minValue===null&&this.updateMinValue(),i.maxValue===null&&this.updateMaxValue(),this.cacheEnabled=!0,this.pillarConvex=new cs,this.pillarOffset=new w,this.updateBoundingSphereRadius(),this._cachedPillars={}}update(){this._cachedPillars={}}updateMinValue(){let e=this.data,i=e[0][0];for(let r=0;r!==e.length;r++)for(let n=0;n!==e[r].length;n++){let s=e[r][n];s<i&&(i=s)}this.minValue=i}updateMaxValue(){let e=this.data,i=e[0][0];for(let r=0;r!==e.length;r++)for(let n=0;n!==e[r].length;n++){let s=e[r][n];s>i&&(i=s)}this.maxValue=i}setHeightValueAtIndex(e,i,r){let n=this.data;n[e][i]=r,this.clearCachedConvexTrianglePillar(e,i,!1),e>0&&(this.clearCachedConvexTrianglePillar(e-1,i,!0),this.clearCachedConvexTrianglePillar(e-1,i,!1)),i>0&&(this.clearCachedConvexTrianglePillar(e,i-1,!0),this.clearCachedConvexTrianglePillar(e,i-1,!1)),i>0&&e>0&&this.clearCachedConvexTrianglePillar(e-1,i-1,!0)}getRectMinMax(e,i,r,n,s){s===void 0&&(s=[]);let a=this.data,o=this.minValue;for(let l=e;l<=r;l++)for(let h=i;h<=n;h++){let c=a[l][h];c>o&&(o=c)}s[0]=this.minValue,s[1]=o}getIndexOfPosition(e,i,r,n){let s=this.elementSize,a=this.data,o=Math.floor(e/s),l=Math.floor(i/s);return r[0]=o,r[1]=l,n&&(o<0&&(o=0),l<0&&(l=0),o>=a.length-1&&(o=a.length-1),l>=a[0].length-1&&(l=a[0].length-1)),!(o<0||l<0||o>=a.length-1||l>=a[0].length-1)}getTriangleAt(e,i,r,n,s,a){let o=ap;this.getIndexOfPosition(e,i,o,r);let l=o[0],h=o[1],c=this.data;r&&(l=Math.min(c.length-2,Math.max(0,l)),h=Math.min(c[0].length-2,Math.max(0,h)));let d=this.elementSize,u=(e/d-l)**2+(i/d-h)**2,p=(e/d-(l+1))**2+(i/d-(h+1))**2,g=u>p;return this.getTriangle(l,h,g,n,s,a),g}getNormalAt(e,i,r,n){let s=L1,a=N1,o=D1,l=B1,h=U1;this.getTriangleAt(e,i,r,s,a,o),a.vsub(s,l),o.vsub(s,h),l.cross(h,n),n.normalize()}getAabbAtIndex(e,i,r){let{lowerBound:n,upperBound:s}=r,a=this.data,o=this.elementSize;n.set(e*o,i*o,a[e][i]),s.set((e+1)*o,(i+1)*o,a[e+1][i+1])}getHeightAt(e,i,r){let n=this.data,s=R1,a=I1,o=P1,l=ap;this.getIndexOfPosition(e,i,l,r);let h=l[0],c=l[1];r&&(h=Math.min(n.length-2,Math.max(0,h)),c=Math.min(n[0].length-2,Math.max(0,c)));let d=this.getTriangleAt(e,i,r,s,a,o);F1(e,i,s.x,s.y,a.x,a.y,o.x,o.y,op);let u=op;return d?n[h+1][c+1]*u.x+n[h][c+1]*u.y+n[h+1][c]*u.z:n[h][c]*u.x+n[h+1][c]*u.y+n[h][c+1]*u.z}getCacheConvexTrianglePillarKey(e,i,r){return`${e}_${i}_${r?1:0}`}getCachedConvexTrianglePillar(e,i,r){return this._cachedPillars[this.getCacheConvexTrianglePillarKey(e,i,r)]}setCachedConvexTrianglePillar(e,i,r,n,s){this._cachedPillars[this.getCacheConvexTrianglePillarKey(e,i,r)]={convex:n,offset:s}}clearCachedConvexTrianglePillar(e,i,r){delete this._cachedPillars[this.getCacheConvexTrianglePillarKey(e,i,r)]}getTriangle(e,i,r,n,s,a){let o=this.data,l=this.elementSize;r?(n.set((e+1)*l,(i+1)*l,o[e+1][i+1]),s.set(e*l,(i+1)*l,o[e][i+1]),a.set((e+1)*l,i*l,o[e+1][i])):(n.set(e*l,i*l,o[e][i]),s.set((e+1)*l,i*l,o[e+1][i]),a.set(e*l,(i+1)*l,o[e][i+1]))}getConvexTrianglePillar(e,i,r){let n=this.pillarConvex,s=this.pillarOffset;if(this.cacheEnabled){let d=this.getCachedConvexTrianglePillar(e,i,r);if(d){this.pillarConvex=d.convex,this.pillarOffset=d.offset;return}n=new cs,s=new w,this.pillarConvex=n,this.pillarOffset=s}let a=this.data,o=this.elementSize,l=n.faces;n.vertices.length=6;for(let d=0;d<6;d++)n.vertices[d]||(n.vertices[d]=new w);l.length=5;for(let d=0;d<5;d++)l[d]||(l[d]=[]);let h=n.vertices,c=(Math.min(a[e][i],a[e+1][i],a[e][i+1],a[e+1][i+1])-this.minValue)/2+this.minValue;r?(s.set((e+.75)*o,(i+.75)*o,c),h[0].set(.25*o,.25*o,a[e+1][i+1]-c),h[1].set(-.75*o,.25*o,a[e][i+1]-c),h[2].set(.25*o,-.75*o,a[e+1][i]-c),h[3].set(.25*o,.25*o,-Math.abs(c)-1),h[4].set(-.75*o,.25*o,-Math.abs(c)-1),h[5].set(.25*o,-.75*o,-Math.abs(c)-1),l[0][0]=0,l[0][1]=1,l[0][2]=2,l[1][0]=5,l[1][1]=4,l[1][2]=3,l[2][0]=2,l[2][1]=5,l[2][2]=3,l[2][3]=0,l[3][0]=3,l[3][1]=4,l[3][2]=1,l[3][3]=0,l[4][0]=1,l[4][1]=4,l[4][2]=5,l[4][3]=2):(s.set((e+.25)*o,(i+.25)*o,c),h[0].set(-.25*o,-.25*o,a[e][i]-c),h[1].set(.75*o,-.25*o,a[e+1][i]-c),h[2].set(-.25*o,.75*o,a[e][i+1]-c),h[3].set(-.25*o,-.25*o,-Math.abs(c)-1),h[4].set(.75*o,-.25*o,-Math.abs(c)-1),h[5].set(-.25*o,.75*o,-Math.abs(c)-1),l[0][0]=0,l[0][1]=1,l[0][2]=2,l[1][0]=5,l[1][1]=4,l[1][2]=3,l[2][0]=0,l[2][1]=2,l[2][2]=5,l[2][3]=3,l[3][0]=1,l[3][1]=0,l[3][2]=3,l[3][3]=4,l[4][0]=4,l[4][1]=5,l[4][2]=2,l[4][3]=1),n.computeNormals(),n.computeEdges(),n.updateBoundingSphereRadius(),this.setCachedConvexTrianglePillar(e,i,r,n,s)}calculateLocalInertia(e,i){return i===void 0&&(i=new w),i.set(0,0,0),i}volume(){return Number.MAX_VALUE}calculateWorldAABB(e,i,r,n){r.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE),n.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE)}updateBoundingSphereRadius(){let e=this.data,i=this.elementSize;this.boundingSphereRadius=new w(e.length*i,e[0].length*i,Math.max(Math.abs(this.maxValue),Math.abs(this.minValue))).length()}setHeightsFromImage(e,i){let{x:r,z:n,y:s}=i,a=document.createElement("canvas");a.width=e.width,a.height=e.height;let o=a.getContext("2d");o.drawImage(e,0,0);let l=o.getImageData(0,0,e.width,e.height),h=this.data;h.length=0,this.elementSize=Math.abs(r)/l.width;for(let c=0;c<l.height;c++){let d=[];for(let u=0;u<l.width;u++){let p=l.data[(c*l.height+u)*4],g=l.data[(c*l.height+u)*4+1],v=l.data[(c*l.height+u)*4+2],m=(p+g+v)/4/255*n;r<0?d.push(m):d.unshift(m)}s<0?h.unshift(d):h.push(d)}this.updateMaxValue(),this.updateMinValue(),this.update()}},ap=[],op=new w,R1=new w,I1=new w,P1=new w,L1=new w,N1=new w,D1=new w,B1=new w,U1=new w;function F1(t,e,i,r,n,s,a,o,l){l.x=((s-o)*(t-a)+(a-n)*(e-o))/((s-o)*(i-a)+(a-n)*(r-o)),l.y=((o-r)*(t-a)+(i-a)*(e-o))/((s-o)*(i-a)+(a-n)*(r-o)),l.z=1-l.x-l.y}var dT=new w,pT=new Li;var fT=new w,mT=new Li,gT=new w,vT=new w,_T=new w,yT=new w,xT=new w,MT=new w,bT=new w,ST=new Li,wT=new w,ET=new wt,TT=new Li,$h=class{constructor(){this.equations=[]}solve(e,i){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let i=this.equations,r=i.indexOf(e);r!==-1&&i.splice(r,1)}removeAllEquations(){this.equations.length=0}},Jh=class extends $h{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,i){let r=0,n=this.iterations,s=this.tolerance*this.tolerance,a=this.equations,o=a.length,l=i.bodies,h=l.length,c=e,d,u,p,g,v,m;if(o!==0)for(let y=0;y!==h;y++)l[y].updateSolveMassProperties();let f=z1,_=V1,M=O1;f.length=o,_.length=o,M.length=o;for(let y=0;y!==o;y++){let b=a[y];M[y]=0,_[y]=b.computeB(c),f[y]=1/b.computeC()}if(o!==0){for(let E=0;E!==h;E++){let C=l[E],x=C.vlambda,S=C.wlambda;x.set(0,0,0),S.set(0,0,0)}for(r=0;r!==n;r++){g=0;for(let E=0;E!==o;E++){let C=a[E];d=_[E],u=f[E],m=M[E],v=C.computeGWlambda(),p=u*(d-v-C.eps*m),m+p<C.minForce?p=C.minForce-m:m+p>C.maxForce&&(p=C.maxForce-m),M[E]+=p,g+=p>0?p:-p,C.addToWlambda(p)}if(g*g<s)break}for(let E=0;E!==h;E++){let C=l[E],x=C.velocity,S=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),x.vadd(C.vlambda,x),C.wlambda.vmul(C.angularFactor,C.wlambda),S.vadd(C.wlambda,S)}let y=a.length,b=1/c;for(;y--;)a[y].multiplier=M[y]*b}return r}},O1=[],z1=[],V1=[];var AT=nt.STATIC;var Qh=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let i=0;i!==e;i++)this.objects.push(i<0||arguments.length<=i?void 0:arguments[i]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){let i=this.objects;for(;i.length>e;)i.pop();for(;i.length<e;)i.push(this.constructObject());return this}},ec=class extends Qh{constructor(){super(...arguments),this.type=w}constructObject(){return new w}},Bt={sphereSphere:ze.types.SPHERE,spherePlane:ze.types.SPHERE|ze.types.PLANE,boxBox:ze.types.BOX|ze.types.BOX,sphereBox:ze.types.SPHERE|ze.types.BOX,planeBox:ze.types.PLANE|ze.types.BOX,convexConvex:ze.types.CONVEXPOLYHEDRON,sphereConvex:ze.types.SPHERE|ze.types.CONVEXPOLYHEDRON,planeConvex:ze.types.PLANE|ze.types.CONVEXPOLYHEDRON,boxConvex:ze.types.BOX|ze.types.CONVEXPOLYHEDRON,sphereHeightfield:ze.types.SPHERE|ze.types.HEIGHTFIELD,boxHeightfield:ze.types.BOX|ze.types.HEIGHTFIELD,convexHeightfield:ze.types.CONVEXPOLYHEDRON|ze.types.HEIGHTFIELD,sphereParticle:ze.types.PARTICLE|ze.types.SPHERE,planeParticle:ze.types.PLANE|ze.types.PARTICLE,boxParticle:ze.types.BOX|ze.types.PARTICLE,convexParticle:ze.types.PARTICLE|ze.types.CONVEXPOLYHEDRON,cylinderCylinder:ze.types.CYLINDER,sphereCylinder:ze.types.SPHERE|ze.types.CYLINDER,planeCylinder:ze.types.PLANE|ze.types.CYLINDER,boxCylinder:ze.types.BOX|ze.types.CYLINDER,convexCylinder:ze.types.CONVEXPOLYHEDRON|ze.types.CYLINDER,heightfieldCylinder:ze.types.HEIGHTFIELD|ze.types.CYLINDER,particleCylinder:ze.types.PARTICLE|ze.types.CYLINDER,sphereTrimesh:ze.types.SPHERE|ze.types.TRIMESH,planeTrimesh:ze.types.PLANE|ze.types.TRIMESH},tc=class{get[Bt.sphereSphere](){return this.sphereSphere}get[Bt.spherePlane](){return this.spherePlane}get[Bt.boxBox](){return this.boxBox}get[Bt.sphereBox](){return this.sphereBox}get[Bt.planeBox](){return this.planeBox}get[Bt.convexConvex](){return this.convexConvex}get[Bt.sphereConvex](){return this.sphereConvex}get[Bt.planeConvex](){return this.planeConvex}get[Bt.boxConvex](){return this.boxConvex}get[Bt.sphereHeightfield](){return this.sphereHeightfield}get[Bt.boxHeightfield](){return this.boxHeightfield}get[Bt.convexHeightfield](){return this.convexHeightfield}get[Bt.sphereParticle](){return this.sphereParticle}get[Bt.planeParticle](){return this.planeParticle}get[Bt.boxParticle](){return this.boxParticle}get[Bt.convexParticle](){return this.convexParticle}get[Bt.cylinderCylinder](){return this.convexConvex}get[Bt.sphereCylinder](){return this.sphereConvex}get[Bt.planeCylinder](){return this.planeConvex}get[Bt.boxCylinder](){return this.boxConvex}get[Bt.convexCylinder](){return this.convexConvex}get[Bt.heightfieldCylinder](){return this.heightfieldCylinder}get[Bt.particleCylinder](){return this.particleCylinder}get[Bt.sphereTrimesh](){return this.sphereTrimesh}get[Bt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new ec,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,i,r,n,s,a){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=i):o=new Zh(e,i),o.enabled=e.collisionResponse&&i.collisionResponse&&r.collisionResponse&&n.collisionResponse;let l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let h=r.material||e.material,c=n.material||i.material;return h&&c&&h.restitution>=0&&c.restitution>=0&&(o.restitution=h.restitution*c.restitution),o.si=s||r,o.sj=a||n,o}createFrictionEquationsFromContact(e,i){let r=e.bi,n=e.bj,s=e.si,a=e.sj,o=this.world,l=this.currentContactMaterial,h=l.friction,c=s.material||r.material,d=a.material||n.material;if(c&&d&&c.friction>=0&&d.friction>=0&&(h=c.friction*d.friction),h>0){let u=h*(o.frictionGravity||o.gravity).length(),p=r.invMass+n.invMass;p>0&&(p=1/p);let g=this.frictionEquationPool,v=g.length?g.pop():new bo(r,n,u*p),m=g.length?g.pop():new bo(r,n,u*p);return v.bi=m.bi=r,v.bj=m.bj=n,v.minForce=m.minForce=-u*p,v.maxForce=m.maxForce=u*p,v.ri.copy(e.ri),v.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),v.enabled=m.enabled=e.enabled,i.push(v,m),!0}return!1}createFrictionFromAverage(e){let i=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(i,this.frictionResult)||e===1)return;let r=this.frictionResult[this.frictionResult.length-2],n=this.frictionResult[this.frictionResult.length-1];vn.setZero(),ls.setZero(),hs.setZero();let s=i.bi;i.bj;for(let o=0;o!==e;o++)i=this.result[this.result.length-1-o],i.bi!==s?(vn.vadd(i.ni,vn),ls.vadd(i.ri,ls),hs.vadd(i.rj,hs)):(vn.vsub(i.ni,vn),ls.vadd(i.rj,ls),hs.vadd(i.ri,hs));let a=1/e;ls.scale(a,r.ri),hs.scale(a,r.rj),n.ri.copy(r.ri),n.rj.copy(r.rj),vn.normalize(),vn.tangents(r.t,n.t)}getContacts(e,i,r,n,s,a,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=n,this.frictionResult=a;let l=k1,h=W1,c=H1,d=G1;for(let u=0,p=e.length;u!==p;u++){let g=e[u],v=i[u],m=null;g.material&&v.material&&(m=r.getContactMaterial(g.material,v.material)||null);let f=g.type&nt.KINEMATIC&&v.type&nt.STATIC||g.type&nt.STATIC&&v.type&nt.KINEMATIC||g.type&nt.KINEMATIC&&v.type&nt.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],l),g.quaternion.vmult(g.shapeOffsets[_],c),c.vadd(g.position,c);let M=g.shapes[_];for(let y=0;y<v.shapes.length;y++){v.quaternion.mult(v.shapeOrientations[y],h),v.quaternion.vmult(v.shapeOffsets[y],d),d.vadd(v.position,d);let b=v.shapes[y];if(!(M.collisionFilterMask&b.collisionFilterGroup&&b.collisionFilterMask&M.collisionFilterGroup)||c.distanceTo(d)>M.boundingSphereRadius+b.boundingSphereRadius)continue;let E=null;M.material&&b.material&&(E=r.getContactMaterial(M.material,b.material)||null),this.currentContactMaterial=E||m||r.defaultContactMaterial;let C=M.type|b.type,x=this[C];if(x){let S=!1;M.type<b.type?S=x.call(this,M,b,c,d,l,h,g,v,M,b,f):S=x.call(this,b,M,d,c,h,l,v,g,M,b,f),S&&f&&(r.shapeOverlapKeeper.set(M.id,b.id),r.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(e,i,r,n,s,a,o,l,h,c,d){if(d)return r.distanceSquared(n)<(e.radius+i.radius)**2;let u=this.createContactEquation(o,l,e,i,h,c);n.vsub(r,u.ni),u.ni.normalize(),u.ri.copy(u.ni),u.rj.copy(u.ni),u.ri.scale(e.radius,u.ri),u.rj.scale(-i.radius,u.rj),u.ri.vadd(r,u.ri),u.ri.vsub(o.position,u.ri),u.rj.vadd(n,u.rj),u.rj.vsub(l.position,u.rj),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}spherePlane(e,i,r,n,s,a,o,l,h,c,d){let u=this.createContactEquation(o,l,e,i,h,c);if(u.ni.set(0,0,1),a.vmult(u.ni,u.ni),u.ni.negate(u.ni),u.ni.normalize(),u.ni.scale(e.radius,u.ri),r.vsub(n,vo),u.ni.scale(u.ni.dot(vo),lp),vo.vsub(lp,u.rj),-vo.dot(u.ni)<=e.radius){if(d)return!0;let p=u.ri,g=u.rj;p.vadd(r,p),p.vsub(o.position,p),g.vadd(n,g),g.vsub(l.position,g),this.result.push(u),this.createFrictionEquationsFromContact(u,this.frictionResult)}}boxBox(e,i,r,n,s,a,o,l,h,c,d){return e.convexPolyhedronRepresentation.material=e.material,i.convexPolyhedronRepresentation.material=i.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,i.convexPolyhedronRepresentation.collisionResponse=i.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,i.convexPolyhedronRepresentation,r,n,s,a,o,l,e,i,d)}sphereBox(e,i,r,n,s,a,o,l,h,c,d){let u=this.v3pool,p=gM;r.vsub(n,_o),i.getSideNormals(p,a);let g=e.radius,v=!1,m=_M,f=yM,_=xM,M=null,y=0,b=0,E=0,C=null;for(let F=0,W=p.length;F!==W&&v===!1;F++){let te=pM;te.copy(p[F]);let q=te.length();te.normalize();let K=_o.dot(te);if(K<q+g&&K>0){let re=fM,ce=mM;re.copy(p[(F+1)%3]),ce.copy(p[(F+2)%3]);let Re=re.length(),dt=ce.length();re.normalize(),ce.normalize();let qe=_o.dot(re),ee=_o.dot(ce);if(qe<Re&&qe>-Re&&ee<dt&&ee>-dt){let de=Math.abs(K-q-g);if((C===null||de<C)&&(C=de,b=qe,E=ee,M=q,m.copy(te),f.copy(re),_.copy(ce),y++,d))return!0}}}if(y){v=!0;let F=this.createContactEquation(o,l,e,i,h,c);m.scale(-g,F.ri),F.ni.copy(m),F.ni.negate(F.ni),m.scale(M,m),f.scale(b,f),m.vadd(f,m),_.scale(E,_),m.vadd(_,F.rj),F.ri.vadd(r,F.ri),F.ri.vsub(o.position,F.ri),F.rj.vadd(n,F.rj),F.rj.vsub(l.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let x=u.get(),S=vM;for(let F=0;F!==2&&!v;F++)for(let W=0;W!==2&&!v;W++)for(let te=0;te!==2&&!v;te++)if(x.set(0,0,0),F?x.vadd(p[0],x):x.vsub(p[0],x),W?x.vadd(p[1],x):x.vsub(p[1],x),te?x.vadd(p[2],x):x.vsub(p[2],x),n.vadd(x,S),S.vsub(r,S),S.lengthSquared()<g*g){if(d)return!0;v=!0;let q=this.createContactEquation(o,l,e,i,h,c);q.ri.copy(S),q.ri.normalize(),q.ni.copy(q.ri),q.ri.scale(g,q.ri),q.rj.copy(x),q.ri.vadd(r,q.ri),q.ri.vsub(o.position,q.ri),q.rj.vadd(n,q.rj),q.rj.vsub(l.position,q.rj),this.result.push(q),this.createFrictionEquationsFromContact(q,this.frictionResult)}u.release(x),x=null;let N=u.get(),L=u.get(),B=u.get(),U=u.get(),R=u.get(),D=p.length;for(let F=0;F!==D&&!v;F++)for(let W=0;W!==D&&!v;W++)if(F%3!==W%3){p[W].cross(p[F],N),N.normalize(),p[F].vadd(p[W],L),B.copy(r),B.vsub(L,B),B.vsub(n,B);let te=B.dot(N);N.scale(te,U);let q=0;for(;q===F%3||q===W%3;)q++;R.copy(r),R.vsub(U,R),R.vsub(L,R),R.vsub(n,R);let K=Math.abs(te),re=R.length();if(K<p[q].length()&&re<g){if(d)return!0;v=!0;let ce=this.createContactEquation(o,l,e,i,h,c);L.vadd(U,ce.rj),ce.rj.copy(ce.rj),R.negate(ce.ni),ce.ni.normalize(),ce.ri.copy(ce.rj),ce.ri.vadd(n,ce.ri),ce.ri.vsub(r,ce.ri),ce.ri.normalize(),ce.ri.scale(g,ce.ri),ce.ri.vadd(r,ce.ri),ce.ri.vsub(o.position,ce.ri),ce.rj.vadd(n,ce.rj),ce.rj.vsub(l.position,ce.rj),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult)}}u.release(N,L,B,U,R)}planeBox(e,i,r,n,s,a,o,l,h,c,d){return i.convexPolyhedronRepresentation.material=i.material,i.convexPolyhedronRepresentation.collisionResponse=i.collisionResponse,i.convexPolyhedronRepresentation.id=i.id,this.planeConvex(e,i.convexPolyhedronRepresentation,r,n,s,a,o,l,e,i,d)}convexConvex(e,i,r,n,s,a,o,l,h,c,d,u,p){let g=BM;if(!(r.distanceTo(n)>e.boundingSphereRadius+i.boundingSphereRadius)&&e.findSeparatingAxis(i,r,s,n,a,g,u,p)){let v=[],m=UM;e.clipAgainstHull(r,s,i,n,a,g,-100,100,v);let f=0;for(let _=0;_!==v.length;_++){if(d)return!0;let M=this.createContactEquation(o,l,e,i,h,c),y=M.ri,b=M.rj;g.negate(M.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,y),b.copy(v[_].point),y.vsub(r,y),b.vsub(n,b),y.vadd(r,y),y.vsub(o.position,y),b.vadd(n,b),b.vsub(l.position,b),this.result.push(M),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(M,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(e,i,r,n,s,a,o,l,h,c,d){let u=this.v3pool;r.vsub(n,MM);let p=i.faceNormals,g=i.faces,v=i.vertices,m=e.radius,f=!1;for(let _=0;_!==v.length;_++){let M=v[_],y=EM;a.vmult(M,y),n.vadd(y,y);let b=wM;if(y.vsub(r,b),b.lengthSquared()<m*m){if(d)return!0;f=!0;let E=this.createContactEquation(o,l,e,i,h,c);E.ri.copy(b),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(m,E.ri),y.vsub(n,E.rj),E.ri.vadd(r,E.ri),E.ri.vsub(o.position,E.ri),E.rj.vadd(n,E.rj),E.rj.vsub(l.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let _=0,M=g.length;_!==M&&f===!1;_++){let y=p[_],b=g[_],E=TM;a.vmult(y,E);let C=AM;a.vmult(v[b[0]],C),C.vadd(n,C);let x=CM;E.scale(-m,x),r.vadd(x,x);let S=RM;x.vsub(C,S);let N=S.dot(E),L=IM;if(r.vsub(C,L),N<0&&L.dot(E)>0){let B=[];for(let U=0,R=b.length;U!==R;U++){let D=u.get();a.vmult(v[b[U]],D),n.vadd(D,D),B.push(D)}if(dM(B,E,r)){if(d)return!0;f=!0;let U=this.createContactEquation(o,l,e,i,h,c);E.scale(-m,U.ri),E.negate(U.ni);let R=u.get();E.scale(-N,R);let D=u.get();E.scale(-m,D),r.vsub(n,U.rj),U.rj.vadd(D,U.rj),U.rj.vadd(R,U.rj),U.rj.vadd(n,U.rj),U.rj.vsub(l.position,U.rj),U.ri.vadd(r,U.ri),U.ri.vsub(o.position,U.ri),u.release(R),u.release(D),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult);for(let F=0,W=B.length;F!==W;F++)u.release(B[F]);return}else for(let U=0;U!==b.length;U++){let R=u.get(),D=u.get();a.vmult(v[b[(U+1)%b.length]],R),a.vmult(v[b[(U+2)%b.length]],D),n.vadd(R,R),n.vadd(D,D);let F=bM;D.vsub(R,F);let W=SM;F.unit(W);let te=u.get(),q=u.get();r.vsub(R,q);let K=q.dot(W);W.scale(K,te),te.vadd(R,te);let re=u.get();if(te.vsub(r,re),K>0&&K*K<F.lengthSquared()&&re.lengthSquared()<m*m){if(d)return!0;let ce=this.createContactEquation(o,l,e,i,h,c);te.vsub(n,ce.rj),te.vsub(r,ce.ni),ce.ni.normalize(),ce.ni.scale(m,ce.ri),ce.rj.vadd(n,ce.rj),ce.rj.vsub(l.position,ce.rj),ce.ri.vadd(r,ce.ri),ce.ri.vsub(o.position,ce.ri),this.result.push(ce),this.createFrictionEquationsFromContact(ce,this.frictionResult);for(let Re=0,dt=B.length;Re!==dt;Re++)u.release(B[Re]);u.release(R),u.release(D),u.release(te),u.release(re),u.release(q);return}u.release(R),u.release(D),u.release(te),u.release(re),u.release(q)}for(let U=0,R=B.length;U!==R;U++)u.release(B[U])}}}planeConvex(e,i,r,n,s,a,o,l,h,c,d){let u=PM,p=LM;p.set(0,0,1),s.vmult(p,p);let g=0,v=NM;for(let m=0;m!==i.vertices.length;m++)if(u.copy(i.vertices[m]),a.vmult(u,u),n.vadd(u,u),u.vsub(r,v),p.dot(v)<=0){if(d)return!0;let _=this.createContactEquation(o,l,e,i,h,c),M=DM;p.scale(p.dot(v),M),u.vsub(M,M),M.vsub(r,_.ri),_.ni.copy(p),u.vsub(n,_.rj),_.ri.vadd(r,_.ri),_.ri.vsub(o.position,_.ri),_.rj.vadd(n,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,i,r,n,s,a,o,l,h,c,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,i,r,n,s,a,o,l,e,i,d)}sphereHeightfield(e,i,r,n,s,a,o,l,h,c,d){let u=i.data,p=e.radius,g=i.elementSize,v=YM,m=jM;wt.pointToLocalFrame(n,a,r,m);let f=Math.floor((m.x-p)/g)-1,_=Math.ceil((m.x+p)/g)+1,M=Math.floor((m.y-p)/g)-1,y=Math.ceil((m.y+p)/g)+1;if(_<0||y<0||f>u.length||M>u[0].length)return;f<0&&(f=0),_<0&&(_=0),M<0&&(M=0),y<0&&(y=0),f>=u.length&&(f=u.length-1),_>=u.length&&(_=u.length-1),y>=u[0].length&&(y=u[0].length-1),M>=u[0].length&&(M=u[0].length-1);let b=[];i.getRectMinMax(f,M,_,y,b);let E=b[0],C=b[1];if(m.z-p>C||m.z+p<E)return;let x=this.result;for(let S=f;S<_;S++)for(let N=M;N<y;N++){let L=x.length,B=!1;if(i.getConvexTrianglePillar(S,N,!1),wt.pointToWorldFrame(n,a,i.pillarOffset,v),r.distanceTo(v)<i.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.sphereConvex(e,i.pillarConvex,r,v,s,a,o,l,e,i,d)),d&&B||(i.getConvexTrianglePillar(S,N,!0),wt.pointToWorldFrame(n,a,i.pillarOffset,v),r.distanceTo(v)<i.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.sphereConvex(e,i.pillarConvex,r,v,s,a,o,l,e,i,d)),d&&B))return!0;if(x.length-L>2)return}}boxHeightfield(e,i,r,n,s,a,o,l,h,c,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,i,r,n,s,a,o,l,e,i,d)}convexHeightfield(e,i,r,n,s,a,o,l,h,c,d){let u=i.data,p=i.elementSize,g=e.boundingSphereRadius,v=qM,m=XM,f=WM;wt.pointToLocalFrame(n,a,r,f);let _=Math.floor((f.x-g)/p)-1,M=Math.ceil((f.x+g)/p)+1,y=Math.floor((f.y-g)/p)-1,b=Math.ceil((f.y+g)/p)+1;if(M<0||b<0||_>u.length||y>u[0].length)return;_<0&&(_=0),M<0&&(M=0),y<0&&(y=0),b<0&&(b=0),_>=u.length&&(_=u.length-1),M>=u.length&&(M=u.length-1),b>=u[0].length&&(b=u[0].length-1),y>=u[0].length&&(y=u[0].length-1);let E=[];i.getRectMinMax(_,y,M,b,E);let C=E[0],x=E[1];if(!(f.z-g>x||f.z+g<C))for(let S=_;S<M;S++)for(let N=y;N<b;N++){let L=!1;if(i.getConvexTrianglePillar(S,N,!1),wt.pointToWorldFrame(n,a,i.pillarOffset,v),r.distanceTo(v)<i.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(L=this.convexConvex(e,i.pillarConvex,r,v,s,a,o,l,null,null,d,m,null)),d&&L||(i.getConvexTrianglePillar(S,N,!0),wt.pointToWorldFrame(n,a,i.pillarOffset,v),r.distanceTo(v)<i.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(L=this.convexConvex(e,i.pillarConvex,r,v,s,a,o,l,null,null,d,m,null)),d&&L))return!0}}sphereParticle(e,i,r,n,s,a,o,l,h,c,d){let u=VM;if(u.set(0,0,1),n.vsub(r,u),u.lengthSquared()<=e.radius*e.radius){if(d)return!0;let g=this.createContactEquation(l,o,i,e,h,c);u.normalize(),g.rj.copy(u),g.rj.scale(e.radius,g.rj),g.ni.copy(u),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,i,r,n,s,a,o,l,h,c,d){let u=FM;u.set(0,0,1),o.quaternion.vmult(u,u);let p=OM;if(n.vsub(o.position,p),u.dot(p)<=0){if(d)return!0;let v=this.createContactEquation(l,o,i,e,h,c);v.ni.copy(u),v.ni.negate(v.ni),v.ri.set(0,0,0);let m=zM;u.scale(u.dot(n),m),n.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,i,r,n,s,a,o,l,h,c,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,i,r,n,s,a,o,l,e,i,d)}convexParticle(e,i,r,n,s,a,o,l,h,c,d){let u=-1,p=GM,g=kM,v=null,m=HM;if(m.copy(n),m.vsub(r,m),s.conjugate(hp),hp.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(r,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let f=0,_=e.faces.length;f!==_;f++){let M=[e.worldVertices[e.faces[f][0]]],y=e.worldFaceNormals[f];n.vsub(M[0],cp);let b=-y.dot(cp);if(v===null||Math.abs(b)<Math.abs(v)){if(d)return!0;v=b,u=f,p.copy(y)}}if(u!==-1){let f=this.createContactEquation(l,o,i,e,h,c);p.scale(v,g),g.vadd(n,g),g.vsub(r,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);let _=f.ri,M=f.rj;_.vadd(n,_),_.vsub(l.position,_),M.vadd(r,M),M.vsub(o.position,M),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,i,r,n,s,a,o,l,h,c,d){return this.convexHeightfield(i,e,n,r,a,s,l,o,h,c,d)}particleCylinder(e,i,r,n,s,a,o,l,h,c,d){return this.convexParticle(i,e,n,r,a,s,l,o,h,c,d)}sphereTrimesh(e,i,r,n,s,a,o,l,h,c,d){let u=J1,p=Q1,g=eM,v=tM,m=iM,f=rM,_=oM,M=$1,y=Z1,b=lM;wt.pointToLocalFrame(n,a,r,m);let E=e.radius;_.lowerBound.set(m.x-E,m.y-E,m.z-E),_.upperBound.set(m.x+E,m.y+E,m.z+E),i.getTrianglesInAABB(_,b);let C=K1,x=e.radius*e.radius;for(let U=0;U<b.length;U++)for(let R=0;R<3;R++)if(i.getVertex(i.indices[b[U]*3+R],C),C.vsub(m,y),y.lengthSquared()<=x){if(M.copy(C),wt.pointToWorldFrame(n,a,M,C),C.vsub(r,y),d)return!0;let D=this.createContactEquation(o,l,e,i,h,c);D.ni.copy(y),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(e.radius,D.ri),D.ri.vadd(r,D.ri),D.ri.vsub(o.position,D.ri),D.rj.copy(C),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let U=0;U<b.length;U++)for(let R=0;R<3;R++){i.getVertex(i.indices[b[U]*3+R],u),i.getVertex(i.indices[b[U]*3+(R+1)%3],p),p.vsub(u,g),m.vsub(p,f);let D=f.dot(g);m.vsub(u,f);let F=f.dot(g);if(F>0&&D<0&&(m.vsub(u,f),v.copy(g),v.normalize(),F=f.dot(v),v.scale(F,f),f.vadd(u,f),f.distanceTo(m)<e.radius)){if(d)return!0;let te=this.createContactEquation(o,l,e,i,h,c);f.vsub(m,te.ni),te.ni.normalize(),te.ni.scale(e.radius,te.ri),te.ri.vadd(r,te.ri),te.ri.vsub(o.position,te.ri),wt.pointToWorldFrame(n,a,f,f),f.vsub(l.position,te.rj),wt.vectorToWorldFrame(a,te.ni,te.ni),wt.vectorToWorldFrame(a,te.ri,te.ri),this.result.push(te),this.createFrictionEquationsFromContact(te,this.frictionResult)}}let S=nM,N=sM,L=aM,B=Y1;for(let U=0,R=b.length;U!==R;U++){i.getTriangleVertices(b[U],S,N,L),i.getNormal(b[U],B),m.vsub(S,f);let D=f.dot(B);if(B.scale(D,f),m.vsub(f,f),D=f.distanceTo(m),Fi.pointInTriangle(f,S,N,L)&&D<e.radius){if(d)return!0;let F=this.createContactEquation(o,l,e,i,h,c);f.vsub(m,F.ni),F.ni.normalize(),F.ni.scale(e.radius,F.ri),F.ri.vadd(r,F.ri),F.ri.vsub(o.position,F.ri),wt.pointToWorldFrame(n,a,f,f),f.vsub(l.position,F.rj),wt.vectorToWorldFrame(a,F.ni,F.ni),wt.vectorToWorldFrame(a,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}b.length=0}planeTrimesh(e,i,r,n,s,a,o,l,h,c,d){let u=new w,p=q1;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<i.vertices.length/3;g++){i.getVertex(g,u);let v=new w;v.copy(u),wt.pointToWorldFrame(n,a,v,u);let m=X1;if(u.vsub(r,m),p.dot(m)<=0){if(d)return!0;let _=this.createContactEquation(o,l,e,i,h,c);_.ni.copy(p);let M=j1;p.scale(m.dot(p),M),u.vsub(M,M),_.ri.copy(M),_.ri.vsub(o.position,_.ri),_.rj.copy(u),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}},vn=new w,ls=new w,hs=new w,H1=new w,G1=new w,k1=new kt,W1=new kt,q1=new w,X1=new w,j1=new w,Y1=new w,Z1=new w;new w;var K1=new w,$1=new w,J1=new w,Q1=new w,eM=new w,tM=new w,iM=new w,rM=new w,nM=new w,sM=new w,aM=new w,oM=new Li,lM=[],vo=new w,lp=new w,hM=new w,cM=new w,uM=new w;function dM(t,e,i){let r=null,n=t.length;for(let s=0;s!==n;s++){let a=t[s],o=hM;t[(s+1)%n].vsub(a,o);let l=cM;o.cross(e,l);let h=uM;i.vsub(a,h);let c=l.dot(h);if(r===null||c>0&&r===!0||c<=0&&r===!1){r===null&&(r=c>0);continue}else return!1}return!0}var _o=new w,pM=new w,fM=new w,mM=new w,gM=[new w,new w,new w,new w,new w,new w],vM=new w,_M=new w,yM=new w,xM=new w,MM=new w,bM=new w,SM=new w,wM=new w,EM=new w,TM=new w,AM=new w,CM=new w,RM=new w,IM=new w;new w;new w;var PM=new w,LM=new w,NM=new w,DM=new w,BM=new w,UM=new w,FM=new w,OM=new w,zM=new w,VM=new w,hp=new kt,HM=new w;new w;var GM=new w,cp=new w,kM=new w,WM=new w,qM=new w,XM=[0],jM=new w,YM=new w,To=class{constructor(){this.current=[],this.previous=[]}getKey(e,i){if(i<e){let r=i;i=e,e=r}return e<<16|i}set(e,i){let r=this.getKey(e,i),n=this.current,s=0;for(;r>n[s];)s++;if(r!==n[s]){for(let a=n.length-1;a>=s;a--)n[a+1]=n[a];n[s]=r}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,i){let r=this.current,n=this.previous,s=r.length,a=n.length,o=0;for(let l=0;l<s;l++){let h=!1,c=r[l];for(;c>n[o];)o++;h=c===n[o],h||up(e,c)}o=0;for(let l=0;l<a;l++){let h=!1,c=n[l];for(;c>r[o];)o++;h=r[o]===c,h||up(i,c)}}};function up(t,e){t.push((e&4294901760)>>16,e&65535)}var Wh=(t,e)=>t<e?`${t}-${e}`:`${e}-${t}`,ic=class{constructor(){this.data={keys:[]}}get(e,i){let r=Wh(e,i);return this.data[r]}set(e,i,r){let n=Wh(e,i);this.get(e,i)||this.data.keys.push(n),this.data[n]=r}delete(e,i){let r=Wh(e,i),n=this.data.keys.indexOf(r);n!==-1&&this.data.keys.splice(n,1),delete this.data[r]}reset(){let e=this.data,i=e.keys;for(;i.length>0;){let r=i.pop();delete e[r]}}},Ao=class extends xo{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new w,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new w,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new jh,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new Jh,this.constraints=[],this.narrowphase=new tc(this),this.collisionMatrix=new yo,this.collisionMatrixPrevious=new yo,this.bodyOverlapKeeper=new To,this.shapeOverlapKeeper=new To,this.contactmaterials=[],this.contactMaterialTable=new ic,this.defaultMaterial=new Xr("default"),this.defaultContactMaterial=new So(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,i){return this.contactMaterialTable.get(e.id,i.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let i=this.constraints.indexOf(e);i!==-1&&this.constraints.splice(i,1)}rayTest(e,i,r){r instanceof yn?this.raycastClosest(e,i,{skipBackfaces:!0},r):this.raycastAll(e,i,{skipBackfaces:!0},r)}raycastAll(e,i,r,n){return r===void 0&&(r={}),r.mode=Fi.ALL,r.from=e,r.to=i,r.callback=n,qh.intersectWorld(this,r)}raycastAny(e,i,r,n){return r===void 0&&(r={}),r.mode=Fi.ANY,r.from=e,r.to=i,r.result=n,qh.intersectWorld(this,r)}raycastClosest(e,i,r,n){return r===void 0&&(r={}),r.mode=Fi.CLOSEST,r.from=e,r.to=i,r.result=n,qh.intersectWorld(this,r)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof nt&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let i=this.bodies.length-1,r=this.bodies,n=r.indexOf(e);if(n!==-1){r.splice(n,1);for(let s=0;s!==r.length;s++)r[s].index=s;this.collisionMatrix.setNumObjects(i),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let i=this.bodies;for(let r=0;r<i.length;r++){let n=i[r].shapes;for(let s=0;s<n.length;s++){let a=n[s];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let i=this.contactmaterials.indexOf(e);i!==-1&&(this.contactmaterials.splice(i,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,i){e===void 0&&(e=1/60),i===void 0&&(i=10);let r=Kt.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,i);else{let n=r-this.lastCallTime;this.step(e,n,i)}this.lastCallTime=r}step(e,i,r){if(r===void 0&&(r=10),i===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=i;let n=Kt.now(),s=0;for(;this.accumulator>=e&&s<r&&(this.internalStep(e),this.accumulator-=e,s++,!(Kt.now()-n>e*1e3)););this.accumulator=this.accumulator%e;let a=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){let l=this.bodies[o];l.previousPosition.lerp(l.position,a,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,a,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=i}}internalStep(e){this.dt=e;let i=this.contacts,r=QM,n=eb,s=this.bodies.length,a=this.bodies,o=this.solver,l=this.gravity,h=this.doProfiling,c=this.profile,d=nt.DYNAMIC,u=-1/0,p=this.constraints,g=JM;l.length();let v=l.x,m=l.y,f=l.z,_=0;for(h&&(u=Kt.now()),_=0;_!==s;_++){let U=a[_];if(U.type===d){let R=U.force,D=U.mass;R.x+=D*v,R.y+=D*m,R.z+=D*f}}for(let U=0,R=this.subsystems.length;U!==R;U++)this.subsystems[U].update();h&&(u=Kt.now()),r.length=0,n.length=0,this.broadphase.collisionPairs(this,r,n),h&&(c.broadphase=Kt.now()-u);let M=p.length;for(_=0;_!==M;_++){let U=p[_];if(!U.collideConnected)for(let R=r.length-1;R>=0;R-=1)(U.bodyA===r[R]&&U.bodyB===n[R]||U.bodyB===r[R]&&U.bodyA===n[R])&&(r.splice(R,1),n.splice(R,1))}this.collisionMatrixTick(),h&&(u=Kt.now());let y=$M,b=i.length;for(_=0;_!==b;_++)y.push(i[_]);i.length=0;let E=this.frictionEquations.length;for(_=0;_!==E;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(r,n,this,i,y,this.frictionEquations,g),h&&(c.narrowphase=Kt.now()-u),h&&(u=Kt.now()),_=0;_<this.frictionEquations.length;_++)o.addEquation(this.frictionEquations[_]);let C=i.length;for(let U=0;U!==C;U++){let R=i[U],D=R.bi,F=R.bj,W=R.si,te=R.sj,q;if(D.material&&F.material?q=this.getContactMaterial(D.material,F.material)||this.defaultContactMaterial:q=this.defaultContactMaterial,q.friction,D.material&&F.material&&(D.material.friction>=0&&F.material.friction>=0&&D.material.friction*F.material.friction,D.material.restitution>=0&&F.material.restitution>=0&&(R.restitution=D.material.restitution*F.material.restitution)),o.addEquation(R),D.allowSleep&&D.type===nt.DYNAMIC&&D.sleepState===nt.SLEEPING&&F.sleepState===nt.AWAKE&&F.type!==nt.STATIC){let K=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),re=F.sleepSpeedLimit**2;K>=re*2&&(D.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===nt.DYNAMIC&&F.sleepState===nt.SLEEPING&&D.sleepState===nt.AWAKE&&D.type!==nt.STATIC){let K=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),re=D.sleepSpeedLimit**2;K>=re*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,F,!0),this.collisionMatrixPrevious.get(D,F)||($s.body=F,$s.contact=R,D.dispatchEvent($s),$s.body=D,F.dispatchEvent($s)),this.bodyOverlapKeeper.set(D.id,F.id),this.shapeOverlapKeeper.set(W.id,te.id)}for(this.emitContactEvents(),h&&(c.makeContactConstraints=Kt.now()-u,u=Kt.now()),_=0;_!==s;_++){let U=a[_];U.wakeUpAfterNarrowphase&&(U.wakeUp(),U.wakeUpAfterNarrowphase=!1)}for(M=p.length,_=0;_!==M;_++){let U=p[_];U.update();for(let R=0,D=U.equations.length;R!==D;R++){let F=U.equations[R];o.addEquation(F)}}o.solve(e,this),h&&(c.solve=Kt.now()-u),o.removeAllEquations();let x=Math.pow;for(_=0;_!==s;_++){let U=a[_];if(U.type&d){let R=x(1-U.linearDamping,e),D=U.velocity;D.scale(R,D);let F=U.angularVelocity;if(F){let W=x(1-U.angularDamping,e);F.scale(W,F)}}}this.dispatchEvent(KM),h&&(u=Kt.now());let N=this.stepnumber%(this.quatNormalizeSkip+1)===0,L=this.quatNormalizeFast;for(_=0;_!==s;_++)a[_].integrate(e,N,L);this.clearForces(),this.broadphase.dirty=!0,h&&(c.integrate=Kt.now()-u),this.stepnumber+=1,this.dispatchEvent(ZM);let B=!0;if(this.allowSleep)for(B=!1,_=0;_!==s;_++){let U=a[_];U.sleepTick(this.time),U.sleepState!==nt.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),i=this.hasAnyEventListener("endContact");if((e||i)&&this.bodyOverlapKeeper.getDiff(Tr,Ar),e){for(let s=0,a=Tr.length;s<a;s+=2)Js.bodyA=this.getBodyById(Tr[s]),Js.bodyB=this.getBodyById(Tr[s+1]),this.dispatchEvent(Js);Js.bodyA=Js.bodyB=null}if(i){for(let s=0,a=Ar.length;s<a;s+=2)Qs.bodyA=this.getBodyById(Ar[s]),Qs.bodyB=this.getBodyById(Ar[s+1]),this.dispatchEvent(Qs);Qs.bodyA=Qs.bodyB=null}Tr.length=Ar.length=0;let r=this.hasAnyEventListener("beginShapeContact"),n=this.hasAnyEventListener("endShapeContact");if((r||n)&&this.shapeOverlapKeeper.getDiff(Tr,Ar),r){for(let s=0,a=Tr.length;s<a;s+=2){let o=this.getShapeById(Tr[s]),l=this.getShapeById(Tr[s+1]);Cr.shapeA=o,Cr.shapeB=l,o&&(Cr.bodyA=o.body),l&&(Cr.bodyB=l.body),this.dispatchEvent(Cr)}Cr.bodyA=Cr.bodyB=Cr.shapeA=Cr.shapeB=null}if(n){for(let s=0,a=Ar.length;s<a;s+=2){let o=this.getShapeById(Ar[s]),l=this.getShapeById(Ar[s+1]);Rr.shapeA=o,Rr.shapeB=l,o&&(Rr.bodyA=o.body),l&&(Rr.bodyB=l.body),this.dispatchEvent(Rr)}Rr.bodyA=Rr.bodyB=Rr.shapeA=Rr.shapeB=null}}clearForces(){let e=this.bodies,i=e.length;for(let r=0;r!==i;r++){let n=e[r];n.force,n.torque,n.force.set(0,0,0),n.torque.set(0,0,0)}}};new Li;var qh=new Fi,Kt=globalThis.performance||{};if(!Kt.now){let t=Date.now();Kt.timing&&Kt.timing.navigationStart&&(t=Kt.timing.navigationStart),Kt.now=()=>Date.now()-t}new w;var ZM={type:"postStep"},KM={type:"preStep"},$s={type:nt.COLLIDE_EVENT_NAME,body:null,contact:null},$M=[],JM=[],QM=[],eb=[],Tr=[],Ar=[],Js={type:"beginContact",bodyA:null,bodyB:null},Qs={type:"endContact",bodyA:null,bodyB:null},Cr={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Rr={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var ds={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Di=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},tb=new Zs(-1,1,1,-1,0,1),ac=class extends Ct{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}},ib=new ac,jr=class{constructor(e){this._mesh=new Ze(ib,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tb)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Co=class extends Di{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Yi.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new jr(this.material)}render(e,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ta=class extends Di{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,r){let n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}},Ro=class extends Di{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Io=class{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){let r=e.getSize(new ue);this._width=r.width,this._height=r.height,i=new ii(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Co(ds),this.copyPass.material.blending=ji,this.timer=new Bd}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let i=this.renderer.getRenderTarget(),r=!1;for(let n=0,s=this.passes.length;n<s;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ta!==void 0&&(a instanceof ta?r=!0:a instanceof Ro&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){let i=this.renderer.getSize(new ue);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;let r=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(r,n),this.renderTarget2.setSize(r,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(r,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Po=class extends Di{constructor(e,i,r=null,n=null,s=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=r,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Ae}render(e,i,r){let n=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var xp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ae(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var ps=class t extends Di{constructor(e,i=1,r,n){super(),this.strength=i,this.radius=r,this.threshold=n,this.resolution=e!==void 0?new ue(e.x,e.y):new ue(256,256),this.clearColor=new Ae(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ii(s,a,{type:hi,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let d=new ii(s,a,{type:hi,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new ii(s,a,{type:hi,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),s=Math.round(s/2),a=Math.round(a/2)}let o=xp;this.highPassUniforms=Yi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ue(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Yi.clone(ds.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:ds.vertexShader,fragmentShader:ds.fragmentShader,premultipliedAlpha:!0,blending:un,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ae,this._oldClearAlpha=1,this._basic=new sr,this._fsQuad=new jr(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let r=Math.round(e/2),n=Math.round(i/2);this.renderTargetBright.setSize(r,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(r,n),this.renderTargetsVertical[s].setSize(r,n),this.separableBlurMaterials[s].uniforms.invSize.value=new ue(1/r,1/n),r=Math.round(r/2),n=Math.round(n/2)}render(e,i,r,n,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=t.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=t.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let i=[],r=e/3;for(let a=0;a<e;a++)i.push(.39894*Math.exp(-.5*a*a/(r*r))/r);let n=[],s=[];for(let a=1;a<e;a+=2){let o=i[a],l=a+1<e?i[a+1]:0,h=o+l;n.push((a*o+(a+1)*l)/h),s.push(h)}return new zt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new ue(.5,.5)},direction:{value:new ue(.5,.5)},centerWeight:{value:i[0]},gaussianOffsets:{value:n},gaussianWeights:{value:s}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};ps.BlurDirectionX=new ue(1,0);ps.BlurDirectionY=new ue(0,1);var ia={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Lo=class extends Di{constructor(){super(),this.isOutputPass=!0,this.uniforms=Yi.clone(ia.uniforms),this.material=new Nh({name:ia.name,uniforms:this.uniforms,vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader}),this._fsQuad=new jr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,i,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},_t.getTransfer(this._outputColorSpace)===St&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===io?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ro?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===no?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ns?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===so&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Mn=-.45,bi=240,Si=160,ur=1,Nt={giza:{x:-82,z:-10,biome:"desert"},cairo:{x:-60,z:-30,biome:"desert"},luxor:{x:-54,z:28,biome:"desert"},qinggan:{x:-28,z:-50,biome:"danxia"},yunnan:{x:-6,z:30,biome:"meadow"},beijing:{x:26,z:-38,biome:"city"},nanjing:{x:48,z:0,biome:"city"},shanghai:{x:82,z:20,biome:"coast"},road:{x:36,z:44,biome:"meadow"}},bp=t=>-68-Math.sin(t*.06)*4,ri={x:6,z:2},Mp={desert:new Ae("#e3c58f"),danxia:new Ae("#c8714a"),meadow:new Ae("#7da155"),city:new Ae("#9caf7f"),coast:new Ae("#d9cfa6"),plaza:new Ae("#c9c3b6")},rb=new Ae("#7b6a5c"),nb=new Ae("#f4f6fb"),sb=new Ae("#b9a57a"),ab=[[-30,4,13,9],[-22,-6,11,8],[-36,16,12,9],[-16,-16,9,7],[-40,30,10,8],[-18,54,13,9],[0,62,15,10],[16,58,11,8],[-64,-58,8,9],[62,-62,9,10]],zi=(t,e,i)=>{let r=Math.min(1,Math.max(0,(i-t)/(e-t)));return r*r*(3-2*r)};function No(t,e){let i=Math.sin(t*127.1+e*311.7)*43758.5453;return i-Math.floor(i)}function oc(t,e){let i=Math.floor(t),r=Math.floor(e),n=t-i,s=e-r,a=n*n*(3-2*n),o=s*s*(3-2*s),l=No(i,r),h=No(i+1,r),c=No(i,r+1),d=No(i+1,r+1);return l+(h-l)*a+(c-l)*o+(l-h-c+d)*a*o}var Yr=(t,e)=>oc(t,e)*.55+oc(t*2.1,e*2.1)*.3+oc(t*4.3,e*4.3)*.15;function xn(t,e){let i={},r=0;for(let n in Nt){let s=Nt[n],a=(t-s.x)**2+(e-s.z)**2,o=Math.exp(-a/784);i[s.biome]=(i[s.biome]||0)+o,r+=o}for(let n in i)i[n]/=r||1;return i}function lc(t,e){let i=null,r=1/0;for(let n in Nt){let s=Nt[n],a=Math.hypot(t-s.x,e-s.z);a<r&&(r=a,i=n)}return{key:i,d:r}}var hc=(t,e)=>Math.pow(Math.pow(Math.abs(t)/112,4)+Math.pow(Math.abs(e)/72,4),.25);function ob(t,e){let i=.15+(Yr(t*.05,e*.05)-.5)*.7,r=xn(t,e),n=.5+.5*Math.sin(t*.18+Math.sin(e*.11)*2);i+=((r.desert||0)+(r.danxia||0)*.6)*(n*n*1.1+Yr(t*.09,e*.09)*.9);for(let[h,c,d,u]of ab){let p=(t-h)**2+(e-c)**2;i+=d*Math.exp(-p/(u*u))*(.85+.3*Yr(t*.2,e*.2))}let s=Math.abs(t-bp(e));i-=1.25*(1-zi(2.2,4.5,s))*(1-zi(60,70,Math.abs(e)));let a=Math.hypot(t-12,e-36);i-=1.4*(1-zi(5,11,a));for(let h in Nt){let c=Nt[h],d=Math.hypot(t-c.x,e-c.z);i=i*zi(5,10,d)+.12*(1-zi(5,10,d))}let o=Math.hypot(t-ri.x,e-ri.z);i=i*zi(6,12,o)+.12*(1-zi(6,12,o));let l=hc(t,e);return i-=1.75*zi(.86,1.02,l),i}function Sp(t,e,{coarse:i=!1}={}){let r=Math.round(bi/ur),n=Math.round(Si/ur),s=-bi/2,a=-Si/2,o=new Float32Array((r+1)*(n+1));for(let z=0;z<=n;z++)for(let X=0;X<=r;X++)o[z*(r+1)+X]=ob(s+X*ur,a+z*ur);let l=(z,X)=>o[Math.min(n,Math.max(0,X))*(r+1)+Math.min(r,Math.max(0,z))],h=(z,X)=>{let ne=(z-s)/ur,ve=(X-a)/ur,pe=Math.floor(ne),Ke=Math.floor(ve),vt=ne-pe,Jt=ve-Ke;return l(pe,Ke)*(1-vt)*(1-Jt)+l(pe+1,Ke)*vt*(1-Jt)+l(pe,Ke+1)*(1-vt)*Jt+l(pe+1,Ke+1)*vt*Jt},c=new wr(bi,Si,r,n);c.rotateX(-Math.PI/2);let d=c.attributes.position,u=new Float32Array(d.count*3),p=new Ae,g=new Ae;for(let z=0;z<d.count;z++){let X=d.getX(z),ne=d.getZ(z),ve=Math.round((X-s)/ur),pe=Math.round((ne-a)/ur),Ke=l(ve,pe);d.setY(z,Ke);let vt=xn(X,ne);p.setRGB(0,0,0);for(let Vt in vt)p.add(g.copy(Mp[Vt]).multiplyScalar(vt[Vt]));if(vt.danxia>.1){let Vt=.5+.5*Math.sin(Ke*3.2+Yr(X*.1,ne*.1)*3);p.lerp(g.set(Vt>.5?"#e0905a":"#a8553a"),vt.danxia*.5)}for(let Vt in Nt){let mi=Nt[Vt],Qt=Math.hypot(X-mi.x,ne-mi.z);Qt<7.5&&p.lerp(Mp.plaza,(1-zi(5.5,7.5,Qt))*.85)}let Jt=Math.hypot(l(ve+1,pe)-l(ve-1,pe),l(ve,pe+1)-l(ve,pe-1))/(2*ur);p.lerp(rb,zi(.45,1.1,Jt)*.85),p.lerp(nb,zi(6.5,10,Ke+Yr(X*.3,ne*.3)*2)),p.lerp(sb,(1-zi(-.2,.25,Ke))*.8);let Ut=(Yr(X*.6,ne*.6)-.5)*.08;u[z*3]=p.r+Ut,u[z*3+1]=p.g+Ut,u[z*3+2]=p.b+Ut}c.setAttribute("color",new fi(u,3)),c.computeVertexNormals();let v=new Ze(c,new Pt({vertexColors:!0,roughness:.95,flatShading:!1}));v.receiveShadow=!0,t.add(v);let m=[];for(let z=0;z<=r;z++){let X=[];for(let ne=0;ne<=n;ne++)X.push(l(z,n-ne));m.push(X)}let f=new nt({mass:0,material:new Xr("ground")});f.addShape(new Eo(m,{elementSize:ur})),f.position.set(s,0,-a),f.quaternion.setFromEuler(-Math.PI/2,0,0),e.addBody(f);let _=new Uint8Array((r+1)*(n+1)*4);for(let z=0;z<o.length;z++){let X=Math.max(0,Math.min(255,Math.round((o[z]+4)*32)));_[z*4]=X,_[z*4+3]=255}let M=new co(_,r+1,n+1);M.needsUpdate=!0,M.magFilter=Xt,M.minFilter=Xt;let y=new zt({transparent:!0,fog:!0,uniforms:{...Yi.clone(Ee.fog),t:{value:0},htex:{value:M},deep:{value:new Ae("#1d5f86")},shallow:{value:new Ae("#5fc1c9")},foam:{value:new Ae("#ffffff")},night:{value:0},sky:{value:new Ae("#bfe3ff")},car:{value:new P}},vertexShader:`#include <fog_pars_vertex>
      varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; vec4 mvPosition = viewMatrix * w; gl_Position = projectionMatrix * mvPosition;
      #include <fog_vertex>
      }`,fragmentShader:`#include <fog_pars_fragment>
      uniform float t, night; uniform sampler2D htex; uniform vec3 deep, shallow, foam, sky, car; varying vec3 vW;
      float hs(vec2 q){ return fract(sin(dot(q, vec2(127.1, 311.7))) * 43758.5453); }
      float vn(vec2 q){ vec2 i = floor(q), f = fract(q); f = f*f*(3.-2.*f); return mix(mix(hs(i), hs(i+vec2(1,0)), f.x), mix(hs(i+vec2(0,1)), hs(i+vec2(1,1)), f.x), f.y); }
      void main(){
        vec2 uv = vec2((vW.x + ${bi/2}.0) / ${bi}.0, (vW.z + ${Si/2}.0) / ${Si}.0);
        float h = (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) ? -4.0 : texture2D(htex, uv).r * 255.0 / 32.0 - 4.0;
        float depth = ${Mn.toFixed(2)} - h;
        float n = vn(vW.xz * 0.35 + t * 0.25) * 0.6 + vn(vW.xz * 1.1 - t * 0.4) * 0.4;
        vec3 c = mix(shallow, deep, smoothstep(0.0, 2.6, depth));
        c += sky * 0.12 * smoothstep(0.6, 1.0, n);
        // foam along the shore, breathing
        float f = smoothstep(0.22, 0.0, depth + (n - 0.5) * 0.12 + sin(t * 1.6 + vW.x * 0.2) * 0.04) * 0.75;
        // a wake where the car is
        float wk = exp(-pow(length(vW.xz - car.xz), 2.0) * 0.35) * step(car.y, 0.4);
        c = mix(c, foam, clamp(f * 0.9 + wk * 0.6, 0.0, 1.0));
        c *= mix(1.0, 0.32, night);
        c += foam * f * night * 0.25;                       // the foam glows a little at night
        float a = clamp(0.55 + depth * 0.25, 0.0, 0.92);
        gl_FragColor = vec4(c, max(a, f * 0.95));
        #include <fog_fragment>
      }`}),b=new Ze(new wr(900,900,1,1),y);b.rotation.x=-Math.PI/2,b.position.y=Mn,b.renderOrder=2,t.add(b);let E=[],C=(z,X,ne,ve,pe)=>{let Ke=new nt({mass:0});return Ke.addShape(z),Ke.position.set(X,ne,ve),pe&&Ke.quaternion.copy(pe),e.addBody(Ke),E.push(Ke),Ke},x=(()=>{let z=1234567;return()=>(z=z*16807%2147483647)/2147483647})(),S=(z,X,ne=.05)=>{if(h(z,X)<ne||Math.hypot(h(z+1,X)-h(z-1,X),h(z,X+1)-h(z,X-1))/2>.35)return!1;for(let Ke in Nt)if(Math.hypot(z-Nt[Ke].x,X-Nt[Ke].z)<9)return!1;return Math.hypot(z-ri.x,X-ri.z)>10},N=64,L={t:{value:0},wind:{value:.6},trail:{value:Array.from({length:N},()=>new It(0,-99,0,1))},light:{value:new Ae(1,1,1)},night:{value:0}},B=new Ct;B.setAttribute("position",new Qe([-.07,0,0,.07,0,0,-.045,.35,0,.045,.35,0,0,.75,0],3)),B.setIndex([0,1,2,2,1,3,2,3,4]);let U=i?9e3:26e3,R=new Sr(B,new zt({uniforms:Object.assign(Yi.clone(Ee.fog),L),side:Ui,fog:!0,vertexShader:`
      #include <fog_pars_vertex>
      uniform float t, wind; uniform vec4 trail[${N}]; varying float vY; varying vec3 vC; attribute vec3 tint;
      void main(){
        vec3 p = position; vY = p.y / 0.75; vC = tint;
        vec4 w = instanceMatrix * vec4(p, 1.0);
        vec3 root = (instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        // wind
        float s = sin(t * 1.8 + root.x * 0.35 + root.z * 0.27) + sin(t * 3.1 + root.x * 0.9) * 0.35;
        w.x += s * 0.12 * wind * vY * vY; w.z += s * 0.06 * wind * vY * vY;
        // pressed by the tyres: lie down away from each recent wheel position, slowly stand back up
        float press = 0.0; vec2 dir = vec2(0.0);
        for (int i = 0; i < ${N}; i++) {
          vec2 d = root.xz - trail[i].xz; float r = length(d);
          float k = (1.0 - smoothstep(0.35, 1.25, r)) * (1.0 - trail[i].w);
          if (k > press) { press = k; dir = r > 0.001 ? d / r : vec2(1.0, 0.0); }
        }
        w.xz += dir * press * vY * 0.55; w.y -= press * vY * 0.55;
        vec4 mvPosition = viewMatrix * w;
        gl_Position = projectionMatrix * mvPosition;
        #include <fog_vertex>
      }`,fragmentShader:`#include <fog_pars_fragment>
      uniform vec3 light; uniform float night; varying float vY; varying vec3 vC;
      void main(){ vec3 c = mix(vC * 0.45, vC * 1.15, vY) * light; gl_FragColor = vec4(c, 1.0);
        #include <fog_fragment>
      }`}),U),D=new Float32Array(U*3),F=new lt,W=new Ii,te=new kr,q=new P,K=new P,re=0,ce=0;for(;re<U&&ce<U*12;){ce++;let z=s+x()*bi,X=a+x()*Si,ne=xn(z,X),ve=(ne.meadow||0)+(ne.city||0)*.6+(ne.coast||0)*.2;if(x()>ve*1.2||Yr(z*.08,X*.08)<.38)continue;let pe=h(z,X);if(pe<.05||pe>6)continue;let Ke=!1;for(let Ut in Nt)Math.hypot(z-Nt[Ut].x,X-Nt[Ut].z)<7&&(Ke=!0);if(Ke||Math.hypot(z-ri.x,X-ri.z)<7)continue;te.set(0,x()*Math.PI*2,(x()-.5)*.3),W.setFromEuler(te);let vt=.7+x()*.8;F.compose(K.set(z,pe-.02,X),W,q.set(vt,vt*(.8+x()*.6),vt)),R.setMatrixAt(re,F);let Jt=new Ae().setHSL(.24+x()*.06,.45+x()*.15,.36+x()*.1);D.set([Jt.r,Jt.g,Jt.b],re*3),re++}R.count=re,R.geometry.setAttribute("tint",new eo(D,3)),R.frustumCulled=!1,t.add(R);let Re=i?120:260,dt=70,qe=new Sr(new gn(1,2.4,7),new Pt({color:"#3f6b45",roughness:.9,flatShading:!0}),Re*2),ee=new Sr(new ui(.14,.2,1,6),new Pt({color:"#5a4031",roughness:1}),Re);qe.castShadow=ee.castShadow=!0;let de=0,le=0;for(ce=0;le<Re&&ce<8e3;){ce++;let z=s+x()*bi,X=a+x()*Si,ne=xn(z,X);if((ne.meadow||0)<.55&&(ne.city||0)<.6||x()>(ne.meadow||0)*.9+(ne.city||0)*.3||!S(z,X,.2)||Yr(z*.05+9,X*.05)<.45)continue;let ve=h(z,X),pe=.8+x()*.9;F.compose(K.set(z,ve+.5*pe,X),W.identity(),q.set(pe,pe,pe)),ee.setMatrixAt(le,F),F.compose(K.set(z,ve+1.7*pe,X),W.identity(),q.set(1.25*pe,pe,1.25*pe)),qe.setMatrixAt(de++,F),F.compose(K.set(z,ve+2.6*pe,X),W.identity(),q.set(.85*pe,.8*pe,.85*pe)),qe.setMatrixAt(de++,F),C(new Ni(.25*pe,.3*pe,2,6),z,ve+1,X),le++}qe.count=de,ee.count=le,t.add(qe,ee);let Fe=new Sr(new ui(.12,.2,1,6),new Pt({color:"#8a6a45",roughness:1}),dt),je=new gn(1.6,.5,7,1,!0);je.translate(0,-.1,0);let Me=new Sr(je,new Pt({color:"#5f8a3c",roughness:.9,flatShading:!0,side:Ui}),dt);Fe.castShadow=Me.castShadow=!0;let st=0;for(ce=0;st<dt&&ce<4e3;){ce++;let z=-60+x()*120,X=x()>.5?1:-1,ne=bp(z)+X*(5+x()*6);if(!S(ne,z,0))continue;let ve=h(ne,z),pe=.9+x()*.6,Ke=3.2*pe;te.set((x()-.5)*.25,0,(x()-.5)*.25),W.setFromEuler(te),F.compose(K.set(ne,ve+Ke/2,z),W,q.set(pe,Ke,pe)),Fe.setMatrixAt(st,F),F.compose(K.set(ne,ve+Ke,z),W,q.set(pe,pe,pe)),Me.setMatrixAt(st,F),C(new Ni(.2*pe,.25*pe,2,6),ne,ve+1,z),st++}Fe.count=Me.count=st,t.add(Fe,Me);let oe=[],ae=(z,X=1.6)=>{let ne=new Pt({color:"#222",emissive:z,emissiveIntensity:.05,roughness:.6});return oe.push({m:ne,night:X,day:.05}),ne},he=(z,X={})=>new Pt({color:z,roughness:.85,...X}),_e=(z,X,ne,ve=0,pe=!0)=>(z.position.set(X,h(X,ne)+ve,ne),z.castShadow=pe,z.receiveShadow=!0,t.add(z),z),Ce=(z,X,ne,ve,pe,Ke=0)=>{let vt=new kt().setFromEuler(0,Ke,0);C(new Oi(new w(ne/2,ve/2,pe/2)),z,h(z,X)+ve/2,X,vt)},Ne=Nt.giza,De=Nt.luxor;[[Ne.x-8,Ne.z-14,9],[Ne.x+5,Ne.z-18,7],[Ne.x-10,Ne.z+10,5]].forEach(([z,X,ne])=>{let ve=new Ze(new gn(ne,ne*1.15,4,1),he("#d9b77a",{flatShading:!0}));ve.rotation.y=Math.PI/4,_e(ve,z,X,ne*.55),C(new Ni(.15,ne*.7,ne*1.1,4),z,h(z,X)+ne*.55,X,new kt().setFromEuler(0,Math.PI/4,0))});let Xe=[],it=["#e8c547","#d9534f","#3e7bd6","#6cbf68","#ef8a3c"];for(let z=0;z<7;z++){let X=new ir,ne=new Ze(new Er(1.5,16,12),he(it[z%5],{roughness:.6}));ne.scale.y=1.2,ne.castShadow=!0;let ve=new Ze(new Zt(.6,.45,.6),he("#6b4a2f"));ve.position.y=-2.3;let pe=new Ze(new Er(.18,8,6),new sr({color:"#ffb347"}));pe.position.y=-1.7,X.add(ne,ve,pe);let Ke=De.x-4+x()*26-13,vt=De.z-4+x()*24-12;X.position.set(Ke,12+x()*10,vt),t.add(X),Xe.push({g:X,y:X.position.y,ph:x()*6,flame:pe})}let O=new Ze(new ui(.25,.6,8,4),he("#cfa96e",{flatShading:!0}));O.rotation.y=Math.PI/4,_e(O,De.x+9,De.z-6,4),C(new Oi(new w(.6,4,.6)),De.x+9,h(De.x+9,De.z-6)+4,De.z-6);let xt=he("#cdb38e");for(let z=0;z<6;z++)[-1,1].forEach(X=>{let ne=De.x-13+X*1.6,ve=De.z-8+z*2.6,pe=new Ze(new ui(.5,.55,3.6,10),xt);_e(pe,ne,ve,1.8),C(new Ni(.55,.55,3.6,8),ne,h(ne,ve)+1.8,ve)});let pt=new Ze(new Zt(4.6,.5,15.6),xt);_e(pt,De.x-13,De.z-1.5,3.85);let Ye=Nt.cairo;[[8,-6,2.2],[-9,-4,1.6],[6,8,1.4]].forEach(([z,X,ne])=>{let ve=new Ze(new Zt(ne*2.6,ne*1.8,ne*2.6),he("#d8c3a0"));_e(ve,Ye.x+z,Ye.z+X,ne*.9),Ce(Ye.x+z,Ye.z+X,ne*2.6,ne*1.8,ne*2.6);let pe=new Ze(new Er(ne,16,10,0,Math.PI*2,0,Math.PI/2),he("#b9a27e"));_e(pe,Ye.x+z,Ye.z+X,ne*1.8)});let I=new Ze(new ui(.3,.45,9,8),he("#e3d2b3"));_e(I,Ye.x+12,Ye.z-1,4.5),C(new Ni(.45,.45,9,8),Ye.x+12,h(Ye.x+12,Ye.z-1)+4.5,Ye.z-1);let T=new Ze(new Er(.4,8,6),ae("#9fe6ff",1.4));_e(T,Ye.x+12,Ye.z-1,9.2,!1);let V=Nt.qinggan;for(let z=0;z<16;z++){let X=V.x+(x()-.5)*40,ne=V.z+(x()-.5)*30;if(Math.hypot(X-V.x,ne-V.z)<9)continue;let ve=new Ze(new qs(1,1),he("#b0603f",{flatShading:!0})),pe=2+x()*3,Ke=1.2+x()*2.2,vt=1+x();ve.scale.set(pe,Ke,vt),ve.rotation.y=.6+(x()-.5)*.3,_e(ve,X,ne,Ke*.4),Ce(X,ne,pe*1.5,Ke*1.4,vt*1.4,ve.rotation.y)}let Z=new Ze(new Rh(9,40),new Pt({color:"#e6edf5",roughness:.12,metalness:.15}));Z.rotation.x=-Math.PI/2,Z.position.set(V.x+17,h(V.x+17,V.z+9)+.06,V.z+9),Z.receiveShadow=!0,t.add(Z);let ie=Nt.beijing,ye=he("#a8302a"),Se=he("#d9a13b",{flatShading:!0});[-8.5,8.5].forEach(z=>{let X=new Ze(new Zt(9,3.4,1.4),ye);_e(X,ie.x+z,ie.z-11,1.7),Ce(ie.x+z,ie.z-11,9,3.4,1.4)}),[-4.4,4.4].forEach(z=>{let X=new Ze(new Zt(.8,4.4,1.6),ye);_e(X,ie.x+z,ie.z-11,2.2),Ce(ie.x+z,ie.z-11,.8,4.4,1.6)});let k=new Ze(new Zt(10,.9,1.8),ye);_e(k,ie.x,ie.z-11,4.6);let ge=new Ze(new ui(.6,7.4,1.8,4),Se);ge.rotation.y=Math.PI/4,ge.scale.z=.4,_e(ge,ie.x,ie.z-11,5.9),[-8.5,8.5].forEach(z=>{let X=new Ze(new Zt(9.4,.35,1.9),Se);_e(X,ie.x+z,ie.z-11,3.55)});let we=[];for(let z=-3;z<=3;z++){if(z===0)continue;let X=new Ze(new Er(.35,12,10),ae("#ff5a3a",2.6));X.scale.y=1.25,_e(X,ie.x+z*3.3,ie.z-10.1,2.6,!1),we.push(X)}let Te=Nt.nanjing,me=(()=>{let z=document.createElement("canvas");z.width=64,z.height=256;let X=z.getContext("2d");X.fillStyle="#000",X.fillRect(0,0,64,256);for(let ve=0;ve<32;ve++)for(let pe=0;pe<6;pe++)Math.random()<.55&&(X.fillStyle=`rgba(255,${200+Math.random()*40|0},140,${.6+Math.random()*.4})`,X.fillRect(pe*10+3,ve*8+2,6,4));let ne=new ks(z);return ne.wrapS=ne.wrapT=Ds,ne})(),Ge=(z,X,ne,ve,pe)=>{let Ke=new Pt({color:pe,roughness:.4,metalness:.3,emissive:"#ffd9a0",emissiveMap:me,emissiveIntensity:0});oe.push({m:Ke,night:1.2,day:0});let vt=new Ze(new Zt(ne,ve,ne),Ke);return _e(vt,z,X,ve/2),Ce(z,X,ne,ve,ne),vt},ke=new Ze(new ui(.9,2.2,22,6),new Pt({color:"#7f8fa3",roughness:.3,metalness:.5,emissive:"#ffd9a0",emissiveMap:me,emissiveIntensity:0}));oe.push({m:ke.material,night:1.1,day:0}),_e(ke,Te.x+8,Te.z-9,11),C(new Ni(1.2,2.2,22,6),Te.x+8,h(Te.x+8,Te.z-9)+11,Te.z-9),Ge(Te.x-9,Te.z-8,3,9,"#9aa6b5"),Ge(Te.x+13,Te.z+6,3.2,7,"#a7b0bd");let Ve=Nt.shanghai,ot=new ir,G=new Ze(new ui(.35,.5,24,8),he("#c9ccd4",{metalness:.4}));G.position.y=12;let se=new Ze(new Er(2.4,20,16),ae("#ff4fa3",1.4));se.material.color.set("#c2507f"),se.position.y=7;let fe=new Ze(new Er(1.5,20,16),ae("#ff4fa3",1.4));fe.material.color.set("#c2507f"),fe.position.y=17,ot.add(G,se,fe),ot.traverse(z=>{z.castShadow=!0}),_e(ot,Ve.x+6,Ve.z-12,0),C(new Ni(2.4,2.4,10,8),Ve.x+6,h(Ve.x+6,Ve.z-12)+5,Ve.z-12),[[Ve.x-10,Ve.z-10,3,14],[Ve.x-5,Ve.z-15,2.6,18],[Ve.x+13,Ve.z-4,3.2,12],[Ve.x-12,Ve.z+3,2.4,9],[Ve.x+14,Ve.z-14,2.8,16]].forEach(([z,X,ne,ve])=>Ge(z,X,ne,ve,"#8796a8"));let Le=Nt.road,xe=new Ze(new ui(.1,.1,3,6),he("#ddd"));return _e(xe,Le.x+6,Le.z-6,1.5),{terrain:v,water:b,waterMat:y,grass:R,grassU:L,TRAIL:N,sample:h,statics:E,glow:oe,balloons:Xe,lanterns:we,htex:M,NX:r,NZ:n,H:o}}var cc=2241535,Ir=t=>String(t!=null?t:"").replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),bn=(t,e,i)=>{let r=Math.min(1,Math.max(0,(i-t)/(e-t)));return r*r*(3-2*r)},di=(t,e,i)=>t+(e-t)*i;function lb(t){let i=document.createElement("canvas");i.width=i.height=1024;let r=i.getContext("2d");r.strokeStyle="rgba(34,51,255,.85)",r.lineWidth=12,r.setLineDash([36,24]),r.beginPath(),r.arc(1024/2,1024/2,1024*.45,0,Math.PI*2),r.stroke(),r.setLineDash([]),r.fillStyle="rgba(11,12,16,.82)",r.textAlign="center",r.textBaseline="middle",r.font="600 150px Geist, sans-serif",r.fillText(t.en,1024/2,1024*.44,1024*.8),r.font="500 64px Geist, sans-serif",r.fillText(`${t.zh} \xB7 ${t.photos.length}`,1024/2,1024*.6),r.font="500 38px Geist Mono, monospace",r.fillText("ENTER \xB7 \u770B\u7167\u7247",1024/2,1024*.71);let n=new ks(i);return n.colorSpace=li,n.anisotropy=8,n}function hb(t){let e=document.createElement("canvas");e.width=e.height=256;let i=e.getContext("2d");i.fillStyle="#f4efe6",i.fillRect(0,0,256,256),i.fillStyle="#2233ff",i.textAlign="center",i.textBaseline="middle",i.font="700 200px Geist, sans-serif",i.fillText(t,128,138);let r=new ks(e);return r.colorSpace=li,r}var wp=[{tod:.44,en:"Day",zh:"\u767D\u5929"},{tod:.705,en:"Golden hour",zh:"\u9EC4\u660F"},{tod:.93,en:"Night",zh:"\u591C"},{tod:.255,en:"Dawn",zh:"\u6E05\u6668"}],Do=["auto","clear","rain","snow","sand"],Ep={clear:"Clear \xB7 \u6674",rain:"Rain \xB7 \u96E8",snow:"Snow \xB7 \u96EA",sand:"Sandstorm \xB7 \u6C99\u5C18\u66B4"},cb={giza:"sand",cairo:"sand",luxor:"clear",qinggan:"sand",yunnan:"snow",beijing:"snow",nanjing:"rain",shanghai:"rain",road:"clear"};function ub(t,{stops:e=[],onOpen:i,onClose:r}={}){let n=matchMedia("(pointer: coarse)").matches,s=new URLSearchParams(location.search);t.innerHTML=`
    <canvas class="drive__canvas"></canvas>
    <div class="drive__hud mono">
      <span class="drive__title">Drive \xB7 \u5F00\u8F66\u901B\u7167\u7247</span>
      <span class="drive__where"></span>
      <span class="drive__status"></span>
      <span class="drive__keys">${n?"Use the pad \xB7 \u6309\u94AE\u9A7E\u9A76":"WASD / arrows drive \xB7 Space brake \xB7 Enter photos \xB7 N day/night \xB7 T weather \xB7 L lights \xB7 1\u20139 jump \xB7 R reset"}</span>
    </div>
    <canvas class="drive__map" width="240" height="160" aria-hidden="true"></canvas>
    <button class="drive__close" type="button" aria-label="Leave drive mode">\u2715</button>
    <div class="drive__card" aria-live="polite"></div>
    <div class="drive__viewer" hidden>
      <figure><img alt=""><figcaption class="mono"></figcaption></figure>
      <button type="button" class="drive__vbtn" data-v="prev" aria-label="Previous">\u2190</button>
      <button type="button" class="drive__vbtn" data-v="next" aria-label="Next">\u2192</button>
      <button type="button" class="drive__vbtn" data-v="close" aria-label="Back to driving">Esc \xB7 \u56DE\u5230\u8F66\u4E0A</button>
    </div>
    <div class="drive__pad" ${n?"":"hidden"}>
      <button type="button" data-k="left" aria-label="Steer left">\u25C0</button><button type="button" data-k="right" aria-label="Steer right">\u25B6</button>
      <button type="button" data-k="enter" aria-label="Open photos">\u25CF</button>
      <button type="button" data-k="brake" aria-label="Reverse">\u25BC</button><button type="button" data-k="gas" aria-label="Accelerate">\u25B2</button>
    </div>
    <div class="drive__flash"></div>
    <div class="drive__load mono">Building the island \xB7 \u6B63\u5728\u9020\u5C9B</div>`;let a=t.querySelector(".drive__canvas"),o=t.querySelector(".drive__card"),l=t.querySelector(".drive__where"),h=t.querySelector(".drive__status"),c=t.querySelector(".drive__viewer"),d=c.querySelector("img"),u=c.querySelector("figcaption"),p=t.querySelector(".drive__flash"),g=new Wd({canvas:a,antialias:!0,powerPreference:"high-performance"});g.setPixelRatio(Math.min(devicePixelRatio,n?1.25:1.75)),g.shadowMap.enabled=!0,g.shadowMap.type=mh,g.toneMapping=ns;let v=new qu;v.background=new Ae,v.fog=new ku(12376554,45,130);let m=new yi(38,1,.5,400),f=new Ld(14478591,9073752,1.1),_=new Fh(16777215,2.4);_.castShadow=!0,_.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(_.shadow.camera,{left:-32,right:32,top:32,bottom:-32,near:1,far:120}),_.shadow.bias=-6e-4,_.shadow.normalBias=.04;let M=new Fh(9085695,0);v.add(f,_,_.target,M,M.target);let y=new Io(g);y.addPass(new Po(v,m));let b=new ps(new ue(256,256),.4,.55,.82);n||y.addPass(b),y.addPass(new Lo);let E=new Ao({gravity:new w(0,-9.82,0)});E.allowSleep=!0,E.defaultContactMaterial.friction=.4;let C=Sp(v,E,{coarse:n}),{sample:x}=C,S=new Xr("wheel"),N=[],L=[],B=(Q,J)=>{Q.userData.pop=J,Q.userData.base=Q.scale.clone(),Q.scale.setScalar(1e-4),L.push(Q)},U=(Q,J,Pe=.6+Math.random()*.8)=>{Q.castShadow=!0,Q.receiveShadow=!0,v.add(Q),E.addBody(J),N.push([Q,J]),B(Q,Pe)},R=new nt({mass:150});R.addShape(new Oi(new w(1.1,.3,.64)),new w(0,.15,0)),R.addShape(new Oi(new w(.55,.24,.56)),new w(.12,.66,0)),R.angularDamping=.5,R.linearDamping=.05,R.allowSleep=!1;let D=new wo({chassisBody:R}),F={radius:.4,directionLocal:new w(0,-1,0),suspensionStiffness:48,suspensionRestLength:.38,frictionSlip:2.2,dampingRelaxation:2.4,dampingCompression:4.6,maxSuspensionForce:1e5,rollInfluence:.03,axleLocal:new w(0,0,1),maxSuspensionTravel:.3,customSlidingRotationalSpeed:-30,useCustomSlidingRotationalSpeed:!0};[[-.76,.05,.66],[-.76,.05,-.66],[.78,.05,.66],[.78,.05,-.66]].forEach(([Q,J,Pe])=>D.addWheel({...F,chassisConnectionPointLocal:new w(Q,J,Pe)})),D.addToWorld(E);let W=D.wheelInfos.map(Q=>{let J=new nt({mass:0,material:S,type:nt.KINEMATIC,collisionFilterGroup:0});return J.addShape(new Ni(Q.radius,Q.radius,Q.radius/2,16),new w,new kt().setFromEuler(-Math.PI/2,0,0)),E.addBody(J),J}),te=new ir,q=new Pt({color:cc,roughness:.32,metalness:.25}),K=new Pt({color:1382174,roughness:.6}),re=new Pt({color:10466536,roughness:.08,metalness:.6}),ce=Q=>new Pt({color:1118481,emissive:Q,emissiveIntensity:0,roughness:.4}),Re=ce(16773576),dt=ce(16718380),qe=ce(16777215),ee=ce(16753178),de=ce(16753178),le=(Q,J,Pe,Je,rt,Ft,Mt)=>{let Rt=new Ze(new Zt(Q,J,Pe),Je);return Rt.position.set(rt,Ft,Mt),Rt.castShadow=!0,te.add(Rt),Rt};le(2.2,.5,1.28,q,0,.12,0),le(2.08,.14,1.32,K,0,-.16,0),le(.16,.2,1.34,K,-1.12,-.04,0),le(.16,.2,1.34,K,1.12,-.04,0),le(1.16,.46,1.1,re,.12,.6,0),le(1.22,.08,1.16,q,.12,.86,0),le(.12,.4,1.16,q,-.42,.6,0).rotation.z=-.35,[-.42,.42].forEach(Q=>{le(.06,.14,.3,Re,-1.11,.2,Q),le(.06,.12,.26,dt,1.11,.22,Q),le(.06,.08,.12,qe,1.115,.06,Q*.6)}),le(.06,.08,.12,ee,-1.11,.2,.6),le(.06,.08,.12,ee,1.11,.22,.6),le(.06,.08,.12,de,-1.11,.2,-.6),le(.06,.08,.12,de,1.11,.22,-.6);let Fe=new Ze(new Zt(2.3,.9,1.34),new sr({color:9412863,transparent:!0,opacity:.32,depthFunc:Ns,depthWrite:!1}));Fe.position.y=.3,Fe.renderOrder=10,te.add(Fe);let je=[-.42,.42].map(Q=>{let J=new Dd(16773328,0,40,.5,.6,1);return J.position.set(-1.15,.2,Q),J.target.position.set(-9,-1.2,Q*2.2),te.add(J,J.target),J});v.add(te);let Me=new Pt({color:1382174,roughness:.85}),st=new Pt({color:14277862,roughness:.35,metalness:.6}),oe=D.wheelInfos.map(Q=>{let J=new ir,Pe=new Ze(new ui(Q.radius,Q.radius,.32,22).rotateX(Math.PI/2),Me);Pe.castShadow=!0;let Je=new Ze(new ui(Q.radius*.55,Q.radius*.55,.34,6).rotateX(Math.PI/2),st);return J.add(Pe,Je),v.add(J),J}),ae=900,he=new Sr(new wr(.42,.26).rotateX(-Math.PI/2),new sr({color:3812386,transparent:!0,opacity:.26,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),ae);he.frustumCulled=!1,he.instanceMatrix.setUsage(Eh);let _e=new lt().makeScale(0,0,0);for(let Q=0;Q<ae;Q++)he.setMatrixAt(Q,_e);he.renderOrder=1,v.add(he);let Ce=0,Ne=[new P(1e9,0,0),new P(1e9,0,0)],De=140,Xe=new Sr(new qs(.16,0),new Pt({color:16777215,roughness:1}),De);Xe.instanceMatrix.setUsage(Eh),Xe.frustumCulled=!1,v.add(Xe);for(let Q=0;Q<De;Q++)Xe.setColorAt(Q,new Ae(15326404));let it=Array.from({length:De},()=>({life:0,p:new P,v:new P,s:1})),O=0,xt=new lt,pt=new Ii,Ye=new P,I=new Ae,T=n?3500:9e3,V=new Float32Array(T*3);for(let Q=0;Q<T*3;Q++)V[Q]=Math.random();let Z=new Ct;Z.setAttribute("position",new fi(V,3));let ie={t:{value:0},center:{value:new P},kind:{value:0},amount:{value:0},wind:{value:new ue(0,0)},scale:{value:400},night:{value:0}},ye=new zt({uniforms:ie,transparent:!0,depthWrite:!1,vertexShader:`
      uniform float t, kind, amount, scale; uniform vec3 center; uniform vec2 wind; varying float vA; varying float vK;
      void main(){
        vec3 box = vec3(74.0, 30.0, 74.0);
        float r = fract(position.x * 7.13 + position.z * 3.7);
        vA = step(r, amount); vK = kind;
        vec3 vel = kind < 0.5 ? vec3(wind.x * 0.4, -26.0, wind.y * 0.4)                  // rain
                 : kind < 1.5 ? vec3(wind.x * 0.25 + sin(t + r * 20.0) * 0.6, -2.2, wind.y * 0.25 + cos(t * 0.8 + r * 13.0) * 0.6)   // snow
                 : vec3(wind.x * 2.6, sin(t * 2.0 + r * 30.0) * 1.2, wind.y * 2.6);       // sand
        vec3 p = position * box + vel * t;
        vec3 o = center - box * 0.5; o.y = center.y - 4.0;
        p = mod(p - o, box) + o;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        float sz = kind < 0.5 ? 0.22 : kind < 1.5 ? 0.16 : 0.16;
        gl_PointSize = sz * scale / -mv.z;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform float night; varying float vA; varying float vK;
      void main(){
        if (vA < 0.5) discard;
        vec2 c = gl_PointCoord - 0.5; float a;
        vec3 col;
        if (vK < 0.5) { a = (1.0 - smoothstep(0.0, 0.05, abs(c.x + c.y * 0.18))) * (1.0 - smoothstep(0.3, 0.5, abs(c.y))); col = vec3(0.78, 0.86, 1.0); a *= 0.55; }
        else if (vK < 1.5) { a = 1.0 - smoothstep(0.15, 0.5, length(c)); col = vec3(1.0); a *= 0.9; }
        else { a = (1.0 - smoothstep(0.0, 0.5, length(c * vec2(0.5, 2.2)))) * 0.75; col = vec3(0.86, 0.66, 0.42); }
        col *= mix(1.0, 0.5, night);
        gl_FragColor = vec4(col, a);
      }`}),Se=new Ch(Z,ye);Se.frustumCulled=!1,Se.renderOrder=5,v.add(Se);let k=260,ge=new Float32Array(k*3),we=[];for(let Q=0;Q<k;Q++){let J,Pe,Je=0;do J=(Math.random()-.5)*bi*.8,Pe=(Math.random()-.5)*Si*.8,Je++;while(((xn(J,Pe).meadow||0)<.5||x(J,Pe)<.1)&&Je<40);we.push([J,x(J,Pe)+.6+Math.random()*1.4,Pe,Math.random()*6])}let Te=new Ct;Te.setAttribute("position",new fi(ge,3));let me=new Ah({color:14221178,size:.32,transparent:!0,opacity:0,depthWrite:!1,blending:un}),Ge=new Ch(Te,me);Ge.frustumCulled=!1,v.add(Ge);let ke=new Pt({color:16052198,roughness:.8});[..."X1NG"].forEach((Q,J)=>{let Ft=new Ze(new Zt(1.2,1.5,.48),[ke,ke,ke,ke,new Pt({map:hb(Q),roughness:.8}),ke]),Mt=new nt({mass:3,shape:new Oi(new w(.6,.75,.24))});Mt.position.set(ri.x+(J-1.5)*1.4,x(ri.x,ri.z-4)+.75+.02,ri.z-4),Mt.sleepSpeedLimit=.2,U(Ft,Mt,.5+J*.1)});let Ve=new Pd,ot=[];e.forEach((Q,J)=>{let Pe=Nt[Q.key];if(!Pe)return;let Je=x(Pe.x,Pe.z),rt=new Ze(new wr(11,11),new Pt({map:lb(Q),transparent:!0,roughness:1,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-3}));rt.rotation.x=-Math.PI/2,rt.position.set(Pe.x,Je+.03,Pe.z),rt.receiveShadow=!0,rt.renderOrder=1,v.add(rt),B(rt,.9+J*.08);let Ft=new Ze(new Lh(5.1,.09,8,96),new Pt({color:cc,emissive:cc,emissiveIntensity:.6,transparent:!0,opacity:.3}));Ft.rotation.x=-Math.PI/2,Ft.position.set(Pe.x,Je+.1,Pe.z),v.add(Ft);let Mt=new Ze(new ui(.06,.06,1,6,1,!0),new sr({color:11187455,transparent:!0,opacity:.35,depthWrite:!1,blending:un}));Mt.scale.y=30,Mt.position.set(Pe.x,Je+15,Pe.z),v.add(Mt),Q.photos.slice(0,5).forEach((Rt,Ei)=>{let ei=Rt.ratio||1.5,dr=ei>=1?1.7:2.3,vi=dr*ei,$r=.08,Dr=new Pt({color:2236962,roughness:.55});Ve.load(Rt.s,Qr=>{Qr.colorSpace=li,Qr.anisotropy=4,Dr.map=Qr,Dr.color.set(16777215),Dr.needsUpdate=!0});let Br=new Pt({color:16184302,roughness:.9}),aa=new Ze(new Zt(vi+.12,dr+.12,$r),[Br,Br,Br,Br,Dr,Br]),Jr=new nt({mass:1.2,shape:new Oi(new w((vi+.12)/2,(dr+.12)/2,$r/2))}),wn=(Ei-2)*.5+Math.PI,oa=7.4;Jr.position.set(Pe.x+Math.sin(wn)*oa,Je+dr/2+.12,Pe.z+Math.cos(wn)*oa),Jr.quaternion.setFromEuler(0,wn+Math.PI,0),Jr.sleepSpeedLimit=.15,U(aa,Jr,1+J*.08+Ei*.05)}),ot.push({...Q,x:Pe.x,z:Pe.z,ring:Ft,beacon:Mt})});let G=new Pt({color:16738859,roughness:.6}),se=new Pt({color:13146722,roughness:.9}),fe=(Q,J,Pe)=>{for(let Je=0;Je<Pe;Je++){let rt=Q+(Math.random()-.5)*6,Ft=J+(Math.random()-.5)*6,Mt=x(rt,Ft);if(!(Mt<0))if(Je%2){let Rt=new Ze(new gn(.28,.75,14),G),Ei=new nt({mass:.4,shape:new Ni(.05,.28,.75,8)});Ei.position.set(rt,Mt+.4,Ft),U(Rt,Ei)}else{let Rt=.35+Math.random()*.2,Ei=new Ze(new Zt(Rt*2,Rt*2,Rt*2),se),ei=new nt({mass:1.5,shape:new Oi(new w(Rt,Rt,Rt))});ei.position.set(rt,Mt+Rt+.05,Ft),U(Ei,ei)}}};fe(ri.x+6,ri.z+2,6),ot.forEach(Q=>fe((Q.x+ri.x)/2+4,(Q.z+ri.z)/2,4));let Le=t.querySelector(".drive__map"),xe=Le.getContext("2d"),z=document.createElement("canvas");z.width=240,z.height=160;{let Q=z.getContext("2d"),J=Q.createImageData(240,160),Pe=C.terrain.geometry.attributes.color,Je=C.terrain.geometry.attributes.position;for(let rt=0;rt<Je.count;rt++){let Ft=Math.floor((Je.getX(rt)+bi/2)/bi*239.99),Rt=(Math.floor((Je.getZ(rt)+Si/2)/Si*159.99)*240+Ft)*4,ei=Je.getY(rt)<Mn;J.data[Rt]=ei?60:Math.min(255,Pe.getX(rt)*255*1.1),J.data[Rt+1]=ei?140:Math.min(255,Pe.getY(rt)*255*1.1),J.data[Rt+2]=ei?180:Math.min(255,Pe.getZ(rt)*255*1.1),J.data[Rt+3]=255}Q.putImageData(J,0,0)}let X=(Q,J)=>[(Q+bi/2)/bi*240,(J+Si/2)/Si*160];function ne(Q){xe.clearRect(0,0,240,160),xe.drawImage(z,0,0),ot.forEach((Je,rt)=>{let[Ft,Mt]=X(Je.x,Je.z);xe.fillStyle=Je===pe?"#fff":"rgba(34,51,255,.95)",xe.beginPath(),xe.arc(Ft,Mt,4.5,0,7),xe.fill(),xe.fillStyle="#fff",xe.font="600 9px Geist Mono, monospace",xe.fillText(String(rt+1),Ft+6,Mt+3)});let[J,Pe]=X(R.position.x,R.position.z);xe.save(),xe.translate(J,Pe),xe.rotate(Q),xe.fillStyle="#0b0c10",xe.beginPath(),xe.moveTo(0,-6),xe.lineTo(4.5,5),xe.lineTo(-4.5,5),xe.closePath(),xe.fill(),xe.strokeStyle="#fff",xe.lineWidth=1.5,xe.stroke(),xe.restore()}let ve={gas:0,brake:0,left:0,right:0,hand:0},pe=null,Ke=0,vt=!0,Jt=0,Ut=null,Vt=0,mi=s.has("tod")?parseFloat(s.get("tod")):.44,Qt=null,Pr=null,gi=Do.includes(s.get("wx"))?s.get("wx"):"auto",Et="clear",ni=0,fs="";function Ki(Q,J,Pe=0){R.position.set(Q,x(Q,J)+1.3,J),R.quaternion.setFromEuler(0,Pe,0),R.velocity.setZero(),R.angularVelocity.setZero()}let Zr=-Math.PI/2,Lr=ot.find(Q=>Q.key===s.get("at"));Lr?Ki(Lr.x,Lr.z+8,Zr):Ki(ri.x,ri.z+2,Zr);function ms(){let Q=new w;return R.quaternion.vmult(new w(-1,0,0),Q),Q}function ra(){let Q=ms();Ki(R.position.x,R.position.z,Math.atan2(Q.z,-Q.x))}function na(Q){let J=ot[Q];J&&(p.classList.remove("is-on"),p.offsetWidth,p.classList.add("is-on"),setTimeout(()=>{Ki(J.x,J.z+9,Zr),m.position.set(J.x+9,30,J.z+24)},180))}function Kr(){let Q=Ut.photos[Vt];d.classList.remove("is-in"),d.src=Q.m,d.onload=()=>d.classList.add("is-in"),u.innerHTML=`<span>${Ir(Ut.en)} \xB7 ${Ir(Ut.zh)}</span><span>${Ir(Q.title)} <span class="zh">${Ir(Q.zh)}</span></span><span>${String(Vt+1).padStart(2,"0")} / ${String(Ut.photos.length).padStart(2,"0")}</span>`}function Sn(Q){Ut=Q,Vt=0,c.hidden=!1,t.classList.add("is-viewing"),Object.keys(ve).forEach(J=>{ve[J]=0}),Kr()}function sa(){Ut=null,c.hidden=!0,t.classList.remove("is-viewing")}c.addEventListener("click",Q=>{var Pe;let J=(Pe=Q.target.closest("[data-v]"))==null?void 0:Pe.dataset.v;J==="prev"&&(Vt=(Vt-1+Ut.photos.length)%Ut.photos.length,Kr()),J==="next"&&(Vt=(Vt+1)%Ut.photos.length,Kr()),(J==="close"||Q.target===c)&&sa()});let gs={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"hand"},A=Q=>J=>{if(Ut){if(!Q)return;(J.code==="ArrowRight"||J.code==="KeyD")&&(Vt=(Vt+1)%Ut.photos.length,Kr()),(J.code==="ArrowLeft"||J.code==="KeyA")&&(Vt=(Vt-1+Ut.photos.length)%Ut.photos.length,Kr()),(J.code==="Escape"||J.code==="Enter"||J.code==="Backspace")&&sa(),J.preventDefault();return}gs[J.code]&&(ve[gs[J.code]]=Q?1:0,J.preventDefault()),Q&&(J.code==="KeyR"&&ra(),J.code==="Enter"&&pe&&Sn(pe),J.code==="Escape"&&Dt(),J.code==="KeyN"&&Y(),J.code==="KeyT"&&(gi=Do[(Do.indexOf(gi)+1)%Do.length]),J.code==="KeyL"&&(Pr=Pr===null?!(ct>.5):Pr?!1:null),/^Digit[1-9]$/.test(J.code)&&na(+J.code.slice(5)-1))},H=A(!0),$=A(!1);addEventListener("keydown",H),addEventListener("keyup",$),t.querySelectorAll(".drive__pad [data-k]").forEach(Q=>{let J=Q.dataset.k;if(J==="enter"){Q.addEventListener("click",()=>{pe&&Sn(pe)});return}let Pe=rt=>{rt.preventDefault(),ve[J]=1},Je=()=>{ve[J]=0};Q.addEventListener("pointerdown",Pe),Q.addEventListener("pointerup",Je),Q.addEventListener("pointerleave",Je),Q.addEventListener("pointercancel",Je)}),t.querySelector(".drive__close").addEventListener("click",()=>Dt()),o.addEventListener("click",Q=>{Q.target.closest("[data-open]")&&(Q.preventDefault(),pe&&Sn(pe))});function Y(){let Q=[...wp].sort((Pe,Je)=>Pe.tod-Je.tod),J=Q.find(Pe=>Pe.tod>mi%1+.02)||Q[0];Qt={from:mi,to:J.tod>mi%1?Math.floor(mi)+J.tod:Math.floor(mi)+1+J.tod,t:0}}let j=new Ae("#0c1330"),be=new Ae("#bcdcee"),Ie=new Ae("#eaa27a"),Be=new Ae("#e7b9c6"),Oe=new Ae("#d2a466"),$e=new Ae("#dfe6ee"),mt=new Ae("#7f8c9c"),ht=new Ae,He=new Ae,ct=0;function Ht(Q){let J=(mi%1+1)%1,Pe=(J-.25)*Math.PI*2,Je=Math.sin(Pe),rt=bn(-.1,.22,Je);ct=1-rt;let Ft=Math.exp(-Math.pow(Je/.2,2));ht.copy(j).lerp(be,rt).lerp(J<.5?Be:Ie,Ft*.75);let Mt=ni;Et==="sand"&&ht.lerp(He.copy(Oe).multiplyScalar(di(.35,1,rt)),Mt*.85),Et==="snow"&&ht.lerp(He.copy($e).multiplyScalar(di(.3,1,rt)),Mt*.55),Et==="rain"&&ht.lerp(He.copy(mt).multiplyScalar(di(.3,1,rt)),Mt*.6),v.background.copy(ht),v.fog.color.copy(ht);let Rt=Et==="sand"?di(45,6,Mt):Et==="snow"?di(45,16,Mt):Et==="rain"?di(45,22,Mt):45,Ei=Et==="sand"?di(130,62,Mt):Et==="snow"?di(130,74,Mt):Et==="rain"?di(130,85,Mt):130;v.fog.near=Rt,v.fog.far=Ei;let ei=1-(Et==="clear"?0:Mt*.35);_.color.set("#ffb27a").lerp(He.set("#fff8ee"),bn(.02,.45,Je)),_.intensity=2.5*rt*ei,_.position.set(Q.x-Math.cos(Pe)*40,12+Math.max(.1,Je)*40,Q.z+18),_.target.position.copy(Q),M.intensity=.9*ct,M.position.set(Q.x+20,40,Q.z-10),M.target.position.copy(Q),f.intensity=(.55+.6*rt)*ei,f.color.copy(ht).lerp(He.set("#ffffff"),.35),f.groundColor.set("#8a7458").lerp(He.set("#1a1f33"),ct),g.toneMappingExposure=di(1,1.25,ct),b.strength=.22+ct*.45,C.glow.forEach(vi=>{vi.m.emissiveIntensity=di(vi.day,vi.night,bn(.25,.75,ct))}),C.grassU.light.value.setRGB(di(.13,1,rt)*ei,di(.17,1,rt)*ei,di(.3,1,rt)*ei),C.waterMat.uniforms.night.value=ct,C.waterMat.uniforms.sky.value.copy(ht),ie.night.value=ct,me.opacity=bn(.5,.9,ct)*(Et==="clear"?1:1-Mt);let dr=[...wp].sort((vi,$r)=>Math.abs((J-vi.tod+1.5)%1-.5)-Math.abs((J-$r.tod+1.5)%1-.5))[0];fs=`${dr.en} \xB7 ${dr.zh}`}let At=new P,yt=new P,Tt=new P,We=new P(0,1,0),qt=()=>{let Q=t.clientWidth,J=t.clientHeight;g.setSize(Q,J,!1),y.setSize(Q,J),m.aspect=Q/J,m.fov=m.aspect<.8?52:38,m.updateProjectionMatrix(),ie.scale.value=J*g.getPixelRatio()*.9};qt(),addEventListener("resize",qt);let $i=performance.now(),si=0,wi=0,Vi="",Nr=performance.now();yt.set(R.position.x,0,R.position.z),m.position.set(yt.x+30,90,yt.z+60),m.lookAt(yt),t.querySelector(".drive__load").remove(),t.classList.add("is-intro"),requestAnimationFrame(()=>requestAnimationFrame(()=>t.classList.add("is-in")));function bt(Q){var pc;if(!vt)return;Ke=requestAnimationFrame(bt);let J=Math.min(.05,(Q-$i)/1e3);$i=Q;let Pe=(Q-Nr)/1e3;if(Qt){Qt.t=Math.min(1,Qt.t+J/2.4);let Ue=Qt.t*Qt.t*(3-2*Qt.t);mi=di(Qt.from,Qt.to,Ue),Qt.t>=1&&(Qt=null)}else s.has("tod")||(mi+=J/420);let Je=R.velocity.length(),rt=ms(),Ft=R.velocity.dot(rt),Mt=780,Rt=Ut?0:ve.gas?Ft>24?0:-Mt:ve.brake?Ft>1?0:Mt*.65:0;D.applyEngineForce(Rt,2),D.applyEngineForce(Rt,3);let Ei=ve.brake&&Ft>1,ei=(Ei?9:0)+(ve.hand?16:0)+(!ve.gas&&!ve.brake?.8:0);for(let Ue=0;Ue<4;Ue++)D.setBrake(ei,Ue);let dr=(ve.left-ve.right)*di(.6,.26,Math.min(1,Je/20));Jt+=(dr-Jt)*Math.min(1,J*9),D.setSteeringValue(Jt,0),D.setSteeringValue(Jt,1);let vi=R.position.y<Mn+.55;vi&&R.velocity.scale(1-Math.min(.5,J*1.6),R.velocity);let $r=hc(R.position.x,R.position.z);if($r>.95){Tt.set(-R.position.x,0,-R.position.z).normalize();let Ue=($r-.95)*9e3;R.applyForce(new w(Tt.x*Ue,0,Tt.z*Ue))}if(E.fixedStep(1/60,J),R.position.y<Mn-4||Math.abs(R.position.x)>bi/2+4||Math.abs(R.position.z)>Si/2+4){let Ue=lc(R.position.x,R.position.z);Ki(Nt[Ue.key].x,Nt[Ue.key].z+9,Zr)}te.position.copy(R.position),te.quaternion.copy(R.quaternion),D.wheelInfos.forEach((Ue,at)=>{D.updateWheelTransform(at);let Lt=Ue.worldTransform;W[at].position.copy(Lt.position),W[at].quaternion.copy(Lt.quaternion),oe[at].position.copy(Lt.position),oe[at].quaternion.copy(Lt.quaternion)}),N.forEach(([Ue,at])=>{Ue.position.copy(at.position),Ue.quaternion.copy(at.quaternion)});let Dr=Pr!==null?Pr:ct>.45||Et!=="clear"&&ni>.5;Re.emissiveIntensity=Dr?2.2:.35,je.forEach(Ue=>{Ue.intensity=Dr?9:0}),dt.emissiveIntensity=Ei||ve.hand?6:Dr?1.6:.25,qe.emissiveIntensity=ve.brake&&Ft<-.3?4:0;let Br=Math.sin(Pe*Math.PI*3.2)>0?5:0;ee.emissiveIntensity=ve.left&&!ve.right?Br:0,de.emissiveIntensity=ve.right&&!ve.left?Br:0;let aa=D.wheelInfos[2].isInContact||D.wheelInfos[3].isInContact;si+=J,[2,3].forEach((Ue,at)=>{let Lt=D.wheelInfos[Ue];if(!Lt.isInContact)return;let Ti=Lt.raycastResult.hitPointWorld,Ji=Lt.raycastResult.hitNormalWorld;if(!(Ti.y<Mn+.05)&&(Tt.set(Ti.x,Ti.y,Ti.z),Tt.distanceTo(Ne[at])>.32)){Ne[at].copy(Tt);let Oo=new P(Ji.x,Ji.y,Ji.z),zo=new P(rt.x,rt.y,rt.z),fc=new P().crossVectors(Oo,zo).normalize();zo.crossVectors(fc,Oo).normalize(),xt.makeBasis(zo,Oo,fc).setPosition(Ti.x+Ji.x*.03,Ti.y+Ji.y*.03,Ti.z+Ji.z*.03),he.setMatrixAt(Ce=(Ce+1)%ae,xt),he.instanceMatrix.needsUpdate=!0}}),si>.09&&Je>.8&&aa&&(si=0,[0,1,2,3].forEach(Ue=>{let at=D.wheelInfos[Ue].worldTransform.position;C.grassU.trail.value[wi=(wi+1)%C.TRAIL].set(at.x,Q/1e3,at.z,0)})),C.grassU.trail.value.forEach(Ue=>{Ue.w=Math.min(1,Math.max(0,(Q/1e3-Ue.y)/7))});let Jr=xn(R.position.x,R.position.z),wn=x(R.position.x,R.position.z)>5.5;if(Je>2.5&&aa||vi&&Je>1.2){I.set(vi?"#f4fbff":wn?"#ffffff":(Jr.meadow||0)>.5?"#8a7a5a":(Jr.danxia||0)>.4?"#c88b66":"#e9dcc4");for(let Ue of[2,3]){if(Math.random()>Math.min(.9,Je/18))continue;let at=it[O=(O+1)%De],Lt=O;at.life=1,at.s=(vi?1.1:.6)+Math.random()*.9,at.p.copy(D.wheelInfos[Ue].worldTransform.position),at.p.y-=.25,at.v.set(-R.velocity.x*.1+(Math.random()-.5),(vi?2.4:.6)+Math.random()*.9,-R.velocity.z*.1+(Math.random()-.5)),Xe.setColorAt(Lt,I)}Xe.instanceColor.needsUpdate=!0}for(let Ue=0;Ue<De;Ue++){let at=it[Ue];at.life>0&&(at.life-=J*1.1,at.p.addScaledVector(at.v,J),at.v.multiplyScalar(.95),at.v.y-=J*1.5);let Lt=Math.max(0,at.life);Ye.setScalar(Lt>0?at.s*(1.6-Lt)*Math.min(1,Lt*3):1e-4),xt.compose(at.p,pt,Ye),Xe.setMatrixAt(Ue,xt)}Xe.instanceMatrix.needsUpdate=!0;for(let Ue=L.length-1;Ue>=0;Ue--){let at=L[Ue],Lt=(Pe-at.userData.pop)/.6;if(Lt<=0)continue;let Ti=Lt>=1?1:1+2.2*Math.pow(Lt-1,3)+1.2*Math.pow(Lt-1,2);at.scale.copy(at.userData.base).multiplyScalar(Math.max(1e-4,Ti)),Lt>=1&&(at.scale.copy(at.userData.base),L.splice(Ue,1))}let oa=Tt.set(R.velocity.x,0,R.velocity.z).multiplyScalar(.35);yt.lerp(new P(te.position.x,te.position.y*.5,te.position.z).add(oa),Math.min(1,J*3));let Qr=1+Math.min(.35,Je*.016);At.copy(yt).add(new P(9*Qr,(14+Math.min(4,Je*.2))*Qr,15*Qr));let uc=bn(0,2.4,Pe);m.position.lerp(At,uc<1?Math.min(1,J*(.8+uc*3)):Math.min(1,J*4)),m.lookAt(yt);let la=lc(R.position.x,R.position.z),dc=gi==="auto"?wn?"snow":la.d<24&&cb[la.key]||"clear":gi;dc===Et?ni=Math.min(1,ni+J*.5):(ni=Math.max(0,ni-J*.7),ni===0&&(Et=dc)),ie.kind.value=Et==="rain"?0:Et==="snow"?1:2,ie.amount.value=Et==="clear"?0:ni*(Et==="sand"?1:.85),ie.t.value=Pe,ie.center.value.copy(yt);let Tp=.5+.5*Math.sin(Pe*.7)*Math.sin(Pe*.31),Bo=Et==="sand"?4+Tp*6:Et==="rain"?2:Et==="snow"?1.2:.6;ie.wind.value.set(Bo*1.4*ni+.3,Bo*.5*ni),C.grassU.wind.value=.6+(Et==="clear"?0:ni*Bo*.35),C.grassU.t.value=Pe,C.waterMat.uniforms.t.value=Pe,C.waterMat.uniforms.car.value.copy(R.position),Ht(yt),C.balloons.forEach((Ue,at)=>{Ue.g.position.y=Ue.y+Math.sin(Pe*.4+Ue.ph)*1.2,Ue.g.position.x+=Math.sin(Pe*.05+at)*J*.3,Ue.flame.visible=Math.sin(Pe*3+Ue.ph*5)>.6}),C.lanterns.forEach((Ue,at)=>{Ue.rotation.z=Math.sin(Pe*1.3+at)*.12}),me.opacity>.01&&(we.forEach(([Ue,at,Lt,Ti],Ji)=>{ge[Ji*3]=Ue+Math.sin(Pe*.6+Ti)*1.2,ge[Ji*3+1]=at+Math.sin(Pe*1.1+Ti*2)*.4,ge[Ji*3+2]=Lt+Math.cos(Pe*.5+Ti)*1.2}),Te.attributes.position.needsUpdate=!0);let Uo=null;if(ot.forEach(Ue=>{let at=Math.hypot(te.position.x-Ue.x,te.position.z-Ue.z),Lt=bn(10,5,at);Ue.ring.material.opacity=.3+Lt*.7,Ue.ring.material.emissiveIntensity=.6+Lt*2.5+ct,Ue.ring.scale.setScalar(1+Math.sin(Q/300)*.02*Lt),Ue.beacon.material.opacity=(.18+ct*.4)*bn(8,26,at),at<5.1&&(Uo=Ue)}),Uo!==pe)if(pe=Uo,pe){let Ue=pe;o.innerHTML=`<p class="mono">${Ir(Ue.region||"")}${Ue.region?" \xB7 ":""}${Ue.photos.length} frames</p><h3>${Ir(Ue.en)}<span class="zh">${Ir(Ue.zh)}</span></h3>
          <div class="drive__btns"><a class="pill pill--light" href="#" data-open><span class="dot"></span>View photos \xB7 Enter</a>${Ue.href?`<a class="pill pill--ghost" href="${Ir(Ue.href)}"><span class="dot"></span>${Ir(Ue.hrefLabel||"Chapter")} \u2192</a>`:""}</div>`,o.classList.add("is-on")}else o.classList.remove("is-on");let Fo=`${la.d<22?`${((pc=ot.find(Ue=>Ue.key===la.key))==null?void 0:pc.en)||""} \xB7 `:""}${fs} \xB7 ${Et==="clear"||ni<.2?Ep.clear:Ep[Et]}${gi==="auto"?"":" (T)"}`;Fo!==Vi&&(h.textContent=Fo,Vi=Fo),l.textContent="",ne(Math.atan2(rt.x,-rt.z)),y.render()}Ke=requestAnimationFrame(bt);function Dt(){var Q;vt&&(vt=!1,cancelAnimationFrame(Ke),removeEventListener("keydown",H),removeEventListener("keyup",$),removeEventListener("resize",qt),(Q=y.dispose)==null||Q.call(y),g.dispose(),t.innerHTML="",r==null||r())}return window.__drive={stops:ot,open:Q=>Sn(ot[Q]),get car(){return R.position},jumpTo:na,nextPhase:Y,setTod:Q=>{mi=Q},setWx:Q=>{gi=Q,Et=Q==="auto"?Et:Q,ni=1}},{close:Dt}}window.X1NG_DRIVE={mount:ub};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
