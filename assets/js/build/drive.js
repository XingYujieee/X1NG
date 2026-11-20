(()=>{var ku=0,Rl=1,Hu=2;var bs=1,Lo=2,gn=3,hr=0,zt=1,Ci=2,Ii=0,yn=1,Il=2,Pl=3,Ll=4,Wu=5;var Ur=100,qu=101,Xu=102,ju=103,Yu=104,Zu=200,Ku=201,Ju=202,$u=203,Vh=204,Gh=205,Qu=206,ed=207,td=208,id=209,rd=210,nd=211,sd=212,ad=213,od=214,Va=0,Ga=1,ka=2,Sn=3,Ha=4,Wa=5,qa=6,Xa=7,kh=0,ld=1,hd=2,di=0,Hh=1,Wh=2,qh=3,Xh=4,jh=5,Yh=6,Zh=7;var Kh=300,cr=301,Jr=302,ia=303,ra=304,Bs=306,ja=1e3,Ri=1001,Ya=1002,Lt=1003,cd=1004;var Yn=1005;var Bt=1006,na=1007;var sr=1008;var Wt=1009,Jh=1010,$h=1011,wn=1012,No=1013,pi=1014,ui=1015,fi=1016,Do=1017,Bo=1018,En=1020,Qh=35902,ec=35899,tc=1021,ic=1022,ei=1023,Ni=1026,ar=1027,rc=1028,Uo=1029,ur=1030,Fo=1031;var Oo=1033,Ms=33776,Ss=33777,ws=33778,Es=33779,Za=35840,Ka=35841,Ja=35842,$a=35843,Qa=36196,eo=37492,to=37496,io=37488,ro=37489,Rs=37490,no=37491,so=37808,ao=37809,oo=37810,lo=37811,ho=37812,co=37813,uo=37814,po=37815,fo=37816,mo=37817,go=37818,vo=37819,_o=37820,yo=37821,xo=36492,bo=36494,Mo=36495,So=36283,wo=36284,Is=36285,Eo=36286;var Ps=2300,To=2301,sa=2302,Nl=2303,Dl=2400,Bl=2401,Ul=2402;var ud=3200;var Ao=0,dd=1,ji="",Pt="srgb",Ls="srgb-linear",Ns="linear",ht="srgb";var aa=7680;var pd=519,fd=512,md=513,gd=514,zo=515,vd=516,_d=517,Vo=518,yd=519,xd=35044;var Fl="300 es",ti=2e3,Tn=2001;function bd(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Md(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function An(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Sd(){let t=An("canvas");return t.style.display="block",t}var Ol={},$r=null;function zl(...t){let e="THREE."+t.shift();$r?$r("log",e,...t):console.log(e,...t)}function nc(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let i=t[1];i&&i.isStackTrace?t[0]+=" "+i.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ge(...t){t=nc(t);let e="THREE."+t.shift();if($r)$r("warn",e,...t);else{let i=t[0];i&&i.isStackTrace?console.warn(i.getError(e)):console.warn(e,...t)}}function He(...t){t=nc(t);let e="THREE."+t.shift();if($r)$r("error",e,...t);else{let i=t[0];i&&i.isStackTrace?console.error(i.getError(e)):console.error(e,...t)}}function Hr(...t){let e=t.join(" ");e in Ol||(Ol[e]=!0,Ge(...t))}function wd(t,e,i){return new Promise(function(r,n){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:n();break;case t.TIMEOUT_EXPIRED:setTimeout(s,i);break;default:r()}}setTimeout(s,i)})}var Ed={[Va]:Ga,[ka]:qa,[Ha]:Xa,[Sn]:Wa,[Ga]:Va,[qa]:ka,[Xa]:Ha,[Wa]:Sn},pr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let r=i[t];if(r!==void 0){let n=r.indexOf(e);n!==-1&&r.splice(n,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let r=i.slice(0);for(let n=0,s=r.length;n<s;n++)r[n].call(this,t);t.target=null}}},Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vl=1234567,Wr=Math.PI/180,Cn=180/Math.PI;function fr(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[i&63|128]+Nt[i>>8&255]+"-"+Nt[i>>16&255]+Nt[i>>24&255]+Nt[r&255]+Nt[r>>8&255]+Nt[r>>16&255]+Nt[r>>24&255]).toLowerCase()}function et(t,e,i){return Math.max(e,Math.min(i,t))}function Go(t,e){return(t%e+e)%e}function Td(t,e,i,r,n){return r+(t-e)*(n-r)/(i-e)}function Ad(t,e,i){return t!==e?(i-t)/(e-t):0}function xn(t,e,i){return(1-i)*t+i*e}function Cd(t,e,i,r){return xn(t,e,1-Math.exp(-i*r))}function Rd(t,e=1){return e-Math.abs(Go(t,e*2)-e)}function Id(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*(3-2*t))}function Pd(t,e,i){return t<=e?0:t>=i?1:(t=(t-e)/(i-e),t*t*t*(t*(t*6-15)+10))}function Ld(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Nd(t,e){return t+Math.random()*(e-t)}function Dd(t){return t*(.5-Math.random())}function Bd(t){t!==void 0&&(Vl=t);let e=Vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ud(t){return t*Wr}function Fd(t){return t*Cn}function Od(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function zd(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Vd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Gd(t,e,i,r,n){let s=Math.cos,a=Math.sin,o=s(i/2),l=a(i/2),h=s((e+r)/2),u=a((e+r)/2),d=s((e-r)/2),c=a((e-r)/2),p=s((r-e)/2),g=a((r-e)/2);switch(n){case"XYX":t.set(o*u,l*d,l*c,o*h);break;case"YZY":t.set(l*c,o*u,l*d,o*h);break;case"ZXZ":t.set(l*d,l*c,o*u,o*h);break;case"XZX":t.set(o*u,l*g,l*p,o*h);break;case"YXY":t.set(l*p,o*u,l*g,o*h);break;case"ZYZ":t.set(l*g,l*p,o*u,o*h);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Fr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Us={DEG2RAD:Wr,RAD2DEG:Cn,generateUUID:fr,clamp:et,euclideanModulo:Go,mapLinear:Td,inverseLerp:Ad,lerp:xn,damp:Cd,pingpong:Rd,smoothstep:Id,smootherstep:Pd,randInt:Ld,randFloat:Nd,randFloatSpread:Dd,seededRandom:Bd,degToRad:Ud,radToDeg:Fd,isPowerOfTwo:Od,ceilPowerOfTwo:zd,floorPowerOfTwo:Vd,setQuaternionFromProperEuler:Gd,normalize:Ft,denormalize:Fr},Xr,de=(Xr=class{constructor(e=0,i=0){this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let i=this.x,r=this.y,n=e.elements;return this.x=n[0]*i+n[3]*r+n[6],this.y=n[1]*i+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=et(this.x,e.x,i.x),this.y=et(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=et(this.x,e,i),this.y=et(this.y,e,i),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(e)/i;return Math.acos(et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){let r=Math.cos(i),n=Math.sin(i),s=this.x-e.x,a=this.y-e.y;return this.x=s*r-a*n+e.x,this.y=s*n+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xr.prototype.isVector2=!0,Xr),Di=class{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,n,s,a){let o=i[r+0],l=i[r+1],h=i[r+2],u=i[r+3],d=n[s+0],c=n[s+1],p=n[s+2],g=n[s+3];if(u!==g||o!==d||l!==c||h!==p){let v=o*d+l*c+h*p+u*g;v<0&&(d=-d,c=-c,p=-p,g=-g,v=-v);let m=1-a;if(v<.9995){let f=Math.acos(v),y=Math.sin(f);m=Math.sin(m*f)/y,a=Math.sin(a*f)/y,o=o*m+d*a,l=l*m+c*a,h=h*m+p*a,u=u*m+g*a}else{o=o*m+d*a,l=l*m+c*a,h=h*m+p*a,u=u*m+g*a;let f=1/Math.sqrt(o*o+l*l+h*h+u*u);o*=f,l*=f,h*=f,u*=f}}t[e]=o,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,n,s){let a=i[r],o=i[r+1],l=i[r+2],h=i[r+3],u=n[s],d=n[s+1],c=n[s+2],p=n[s+3];return t[e]=a*p+h*u+o*c-l*d,t[e+1]=o*p+h*d+l*u-a*c,t[e+2]=l*p+h*c+a*d-o*u,t[e+3]=h*p-a*u-o*d-l*c,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,r=t._y,n=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(i/2),h=a(r/2),u=a(n/2),d=o(i/2),c=o(r/2),p=o(n/2);switch(s){case"XYZ":this._x=d*h*u+l*c*p,this._y=l*c*u-d*h*p,this._z=l*h*p+d*c*u,this._w=l*h*u-d*c*p;break;case"YXZ":this._x=d*h*u+l*c*p,this._y=l*c*u-d*h*p,this._z=l*h*p-d*c*u,this._w=l*h*u+d*c*p;break;case"ZXY":this._x=d*h*u-l*c*p,this._y=l*c*u+d*h*p,this._z=l*h*p+d*c*u,this._w=l*h*u-d*c*p;break;case"ZYX":this._x=d*h*u-l*c*p,this._y=l*c*u+d*h*p,this._z=l*h*p-d*c*u,this._w=l*h*u+d*c*p;break;case"YZX":this._x=d*h*u+l*c*p,this._y=l*c*u+d*h*p,this._z=l*h*p-d*c*u,this._w=l*h*u-d*c*p;break;case"XZY":this._x=d*h*u-l*c*p,this._y=l*c*u-d*h*p,this._z=l*h*p+d*c*u,this._w=l*h*u+d*c*p;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],r=e[4],n=e[8],s=e[1],a=e[5],o=e[9],l=e[2],h=e[6],u=e[10],d=i+a+u;if(d>0){let c=.5/Math.sqrt(d+1);this._w=.25/c,this._x=(h-o)*c,this._y=(n-l)*c,this._z=(s-r)*c}else if(i>a&&i>u){let c=2*Math.sqrt(1+i-a-u);this._w=(h-o)/c,this._x=.25*c,this._y=(r+s)/c,this._z=(n+l)/c}else if(a>u){let c=2*Math.sqrt(1+a-i-u);this._w=(n-l)/c,this._x=(r+s)/c,this._y=.25*c,this._z=(o+h)/c}else{let c=2*Math.sqrt(1+u-i-a);this._w=(s-r)/c,this._x=(n+l)/c,this._y=(o+h)/c,this._z=.25*c}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(et(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,r=t._y,n=t._z,s=t._w,a=e._x,o=e._y,l=e._z,h=e._w;return this._x=i*h+s*a+r*l-n*o,this._y=r*h+s*o+n*a-i*l,this._z=n*h+s*l+i*o-r*a,this._w=s*h-i*a-r*o-n*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,r=t._y,n=t._z,s=t._w,a=this.dot(t);a<0&&(i=-i,r=-r,n=-n,s=-s,a=-a);let o=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);o=Math.sin(o*l)/h,e=Math.sin(e*l)/h,this._x=this._x*o+i*e,this._y=this._y*o+r*e,this._z=this._z*o+n*e,this._w=this._w*o+s*e,this._onChangeCallback()}else this._x=this._x*o+i*e,this._y=this._y*o+r*e,this._z=this._z*o+n*e,this._w=this._w*o+s*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),n=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),n*Math.sin(e),n*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jr,L=(jr=class{constructor(e=0,i=0,r=0){this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Gl.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Gl.setFromAxisAngle(e,i))}applyMatrix3(e){let i=this.x,r=this.y,n=this.z,s=e.elements;return this.x=s[0]*i+s[3]*r+s[6]*n,this.y=s[1]*i+s[4]*r+s[7]*n,this.z=s[2]*i+s[5]*r+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let i=this.x,r=this.y,n=this.z,s=e.elements,a=1/(s[3]*i+s[7]*r+s[11]*n+s[15]);return this.x=(s[0]*i+s[4]*r+s[8]*n+s[12])*a,this.y=(s[1]*i+s[5]*r+s[9]*n+s[13])*a,this.z=(s[2]*i+s[6]*r+s[10]*n+s[14])*a,this}applyQuaternion(e){let i=this.x,r=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,h=2*(a*n-o*r),u=2*(o*i-s*n),d=2*(s*r-a*i);return this.x=i+l*h+a*d-o*u,this.y=r+l*u+o*h-s*d,this.z=n+l*d+s*u-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let i=this.x,r=this.y,n=this.z,s=e.elements;return this.x=s[0]*i+s[4]*r+s[8]*n,this.y=s[1]*i+s[5]*r+s[9]*n,this.z=s[2]*i+s[6]*r+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=et(this.x,e.x,i.x),this.y=et(this.y,e.y,i.y),this.z=et(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=et(this.x,e,i),this.y=et(this.y,e,i),this.z=et(this.z,e,i),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){let r=e.x,n=e.y,s=e.z,a=i.x,o=i.y,l=i.z;return this.x=n*l-s*o,this.y=s*a-r*l,this.z=r*o-n*a,this}projectOnVector(e){let i=e.lengthSq();if(i===0)return this.set(0,0,0);let r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return oa.copy(this).projectOnVector(e),this.sub(oa)}reflect(e){return this.sub(oa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;let r=this.dot(e)/i;return Math.acos(et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let i=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return i*i+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){let n=Math.sin(i)*e;return this.x=n*Math.sin(r),this.y=Math.cos(i)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){let i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=n,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},jr.prototype.isVector3=!0,jr),oa=new L,Gl=new Di,Yr,Ke=(Yr=class{constructor(e,i,r,n,s,a,o,l,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,n,s,a,o,l,h)}set(e,i,r,n,s,a,o,l,h){let u=this.elements;return u[0]=e,u[1]=n,u[2]=o,u[3]=i,u[4]=s,u[5]=l,u[6]=r,u[7]=a,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let r=e.elements,n=i.elements,s=this.elements,a=r[0],o=r[3],l=r[6],h=r[1],u=r[4],d=r[7],c=r[2],p=r[5],g=r[8],v=n[0],m=n[3],f=n[6],y=n[1],b=n[4],_=n[7],M=n[2],T=n[5],C=n[8];return s[0]=a*v+o*y+l*M,s[3]=a*m+o*b+l*T,s[6]=a*f+o*_+l*C,s[1]=h*v+u*y+d*M,s[4]=h*m+u*b+d*T,s[7]=h*f+u*_+d*C,s[2]=c*v+p*y+g*M,s[5]=c*m+p*b+g*T,s[8]=c*f+p*_+g*C,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){let e=this.elements,i=e[0],r=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8];return i*a*u-i*o*h-r*s*u+r*o*l+n*s*h-n*a*l}invert(){let e=this.elements,i=e[0],r=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8],d=u*a-o*h,c=o*l-u*s,p=h*s-a*l,g=i*d+r*c+n*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(n*h-u*r)*v,e[2]=(o*r-n*a)*v,e[3]=c*v,e[4]=(u*i-n*l)*v,e[5]=(n*s-o*i)*v,e[6]=p*v,e[7]=(r*l-h*i)*v,e[8]=(a*i-r*s)*v,this}transpose(){let e,i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,n,s,a,o){let l=Math.cos(s),h=Math.sin(s);return this.set(r*l,r*h,-r*(l*a+h*o)+a+e,-n*h,n*l,-n*(-h*a+l*o)+o+i,0,0,1),this}scale(e,i){return Hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(la.makeScale(e,i)),this}rotate(e){return Hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(la.makeRotation(-e)),this}translate(e,i){return Hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(la.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){let i=this.elements,r=e.elements;for(let n=0;n<9;n++)if(i[n]!==r[n])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){let r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yr.prototype.isMatrix3=!0,Yr),la=new Ke,kl=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hl=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kd(){let t={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(n,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ht&&(n.r=Pi(n.r),n.g=Pi(n.g),n.b=Pi(n.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[s].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(n.r=qr(n.r),n.g=qr(n.g),n.b=qr(n.b))),n},workingToColorSpace:function(n,s){return this.convert(n,this.workingColorSpace,s)},colorSpaceToWorking:function(n,s){return this.convert(n,s,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ji?Ns:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,s=this.workingColorSpace){return n.fromArray(this.spaces[s].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,s,a){return n.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,s){return Hr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(n,s)},toWorkingColorSpace:function(n,s){return Hr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(n,s)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return t.define({[Ls]:{primaries:e,whitePoint:r,transfer:Ns,toXYZ:kl,fromXYZ:Hl,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:r,transfer:ht,toXYZ:kl,fromXYZ:Hl,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),t}var nt=kd();function Pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function qr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var br,Hd=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{br===void 0&&(br=An("canvas")),br.width=t.width,br.height=t.height;let r=br.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=br}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=An("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let r=i.getImageData(0,0,t.width,t.height),n=r.data;for(let s=0;s<n.length;s++)n[s]=Pi(n[s]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Pi(e[i]/255)*255):e[i]=Pi(e[i]);return{data:e,width:t.width,height:t.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Wd=0,ko=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let n;if(Array.isArray(r)){n=[];for(let s=0,a=r.length;s<a;s++)r[s].isDataTexture?n.push(ha(r[s].image)):n.push(ha(r[s]))}else n=ha(r);i.url=n}return e||(t.images[this.uuid]=i),i}};function ha(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Hd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var qd=0,ca=new L,Xt=class Ts extends pr{constructor(e=Ts.DEFAULT_IMAGE,i=Ts.DEFAULT_MAPPING,r=Ri,n=Ri,s=Bt,a=sr,o=ei,l=Wt,h=Ts.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qd++}),this.uuid=fr(),this.name="",this.source=new ko(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=l,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ca).x}get height(){return this.source.getSize(ca).y}get depth(){return this.source.getSize(ca).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let i in e){let r=e[i];if(r===void 0){Ge(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}let n=this[i];if(n===void 0){Ge(`Texture.setValues(): property '${i}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[i]=r}}toJSON(e){let i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ja:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ja:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=Kh;Xt.DEFAULT_ANISOTROPY=1;var Zr,mt=(Zr=class{constructor(e=0,i=0,r=0,n=1){this.x=e,this.y=i,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,n){return this.x=e,this.y=i,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let i=this.x,r=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*i+a[4]*r+a[8]*n+a[12]*s,this.y=a[1]*i+a[5]*r+a[9]*n+a[13]*s,this.z=a[2]*i+a[6]*r+a[10]*n+a[14]*s,this.w=a[3]*i+a[7]*r+a[11]*n+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,n,s,a=e.elements,o=a[0],l=a[4],h=a[8],u=a[1],d=a[5],c=a[9],p=a[2],g=a[6],v=a[10];if(Math.abs(l-u)<.01&&Math.abs(h-p)<.01&&Math.abs(c-g)<.01){if(Math.abs(l+u)<.1&&Math.abs(h+p)<.1&&Math.abs(c+g)<.1&&Math.abs(o+d+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;let f=(o+1)/2,y=(d+1)/2,b=(v+1)/2,_=(l+u)/4,M=(h+p)/4,T=(c+g)/4;return f>y&&f>b?f<.01?(r=0,n=.707106781,s=.707106781):(r=Math.sqrt(f),n=_/r,s=M/r):y>b?y<.01?(r=.707106781,n=0,s=.707106781):(n=Math.sqrt(y),r=_/n,s=T/n):b<.01?(r=.707106781,n=.707106781,s=0):(s=Math.sqrt(b),r=M/s,n=T/s),this.set(r,n,s,i),this}let m=Math.sqrt((g-c)*(g-c)+(h-p)*(h-p)+(u-l)*(u-l));return Math.abs(m)<.001&&(m=1),this.x=(g-c)/m,this.y=(h-p)/m,this.z=(u-l)/m,this.w=Math.acos((o+d+v-1)/2),this}setFromMatrixPosition(e){let i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=et(this.x,e.x,i.x),this.y=et(this.y,e.y,i.y),this.z=et(this.z,e.z,i.z),this.w=et(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=et(this.x,e,i),this.y=et(this.y,e,i),this.z=et(this.z,e,i),this.w=et(this.w,e,i),this}clampLength(e,i){let r=this.length();return this.divideScalar(r||1).multiplyScalar(et(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Zr.prototype.isVector4=!0,Zr),Xd=class extends pr{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new mt(0,0,t,e),this.scissorTest=!1,this.viewport=new mt(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:i.depth},n=new Xt(r),s=i.count;for(let a=0;a<s;a++)this.textures[a]=n.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Bt,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let r=0,n=this.textures.length;r<n;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new ko(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends Xd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},sc=class extends Xt{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var jd=class extends Xt{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var lr,tt=(lr=class{constructor(e,i,r,n,s,a,o,l,h,u,d,c,p,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,n,s,a,o,l,h,u,d,c,p,g,v,m)}set(e,i,r,n,s,a,o,l,h,u,d,c,p,g,v,m){let f=this.elements;return f[0]=e,f[4]=i,f[8]=r,f[12]=n,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=h,f[6]=u,f[10]=d,f[14]=c,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lr().fromArray(this.elements)}copy(e){let i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){let i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){let i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinantAffine()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let i=this.elements,r=e.elements,n=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),a=1/Mr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*n,i[1]=r[1]*n,i[2]=r[2]*n,i[3]=0,i[4]=r[4]*s,i[5]=r[5]*s,i[6]=r[6]*s,i[7]=0,i[8]=r[8]*a,i[9]=r[9]*a,i[10]=r[10]*a,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){let i=this.elements,r=e.x,n=e.y,s=e.z,a=Math.cos(r),o=Math.sin(r),l=Math.cos(n),h=Math.sin(n),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let c=a*u,p=a*d,g=o*u,v=o*d;i[0]=l*u,i[4]=-l*d,i[8]=h,i[1]=p+g*h,i[5]=c-v*h,i[9]=-o*l,i[2]=v-c*h,i[6]=g+p*h,i[10]=a*l}else if(e.order==="YXZ"){let c=l*u,p=l*d,g=h*u,v=h*d;i[0]=c+v*o,i[4]=g*o-p,i[8]=a*h,i[1]=a*d,i[5]=a*u,i[9]=-o,i[2]=p*o-g,i[6]=v+c*o,i[10]=a*l}else if(e.order==="ZXY"){let c=l*u,p=l*d,g=h*u,v=h*d;i[0]=c-v*o,i[4]=-a*d,i[8]=g+p*o,i[1]=p+g*o,i[5]=a*u,i[9]=v-c*o,i[2]=-a*h,i[6]=o,i[10]=a*l}else if(e.order==="ZYX"){let c=a*u,p=a*d,g=o*u,v=o*d;i[0]=l*u,i[4]=g*h-p,i[8]=c*h+v,i[1]=l*d,i[5]=v*h+c,i[9]=p*h-g,i[2]=-h,i[6]=o*l,i[10]=a*l}else if(e.order==="YZX"){let c=a*l,p=a*h,g=o*l,v=o*h;i[0]=l*u,i[4]=v-c*d,i[8]=g*d+p,i[1]=d,i[5]=a*u,i[9]=-o*u,i[2]=-h*u,i[6]=p*d+g,i[10]=c-v*d}else if(e.order==="XZY"){let c=a*l,p=a*h,g=o*l,v=o*h;i[0]=l*u,i[4]=-d,i[8]=h*u,i[1]=c*d+v,i[5]=a*u,i[9]=p*d-g,i[2]=g*d-p,i[6]=o*u,i[10]=v*d+c}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yd,e,Zd)}lookAt(e,i,r){let n=this.elements;return Gt.subVectors(e,i),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Gi.crossVectors(r,Gt),Gi.lengthSq()===0&&(Math.abs(r.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Gi.crossVectors(r,Gt)),Gi.normalize(),Zn.crossVectors(Gt,Gi),n[0]=Gi.x,n[4]=Zn.x,n[8]=Gt.x,n[1]=Gi.y,n[5]=Zn.y,n[9]=Gt.y,n[2]=Gi.z,n[6]=Zn.z,n[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){let r=e.elements,n=i.elements,s=this.elements,a=r[0],o=r[4],l=r[8],h=r[12],u=r[1],d=r[5],c=r[9],p=r[13],g=r[2],v=r[6],m=r[10],f=r[14],y=r[3],b=r[7],_=r[11],M=r[15],T=n[0],C=n[4],x=n[8],S=n[12],N=n[1],P=n[5],B=n[9],F=n[13],I=n[2],D=n[6],z=n[10],H=n[14],$=n[3],W=n[7],Z=n[11],K=n[15];return s[0]=a*T+o*N+l*I+h*$,s[4]=a*C+o*P+l*D+h*W,s[8]=a*x+o*B+l*z+h*Z,s[12]=a*S+o*F+l*H+h*K,s[1]=u*T+d*N+c*I+p*$,s[5]=u*C+d*P+c*D+p*W,s[9]=u*x+d*B+c*z+p*Z,s[13]=u*S+d*F+c*H+p*K,s[2]=g*T+v*N+m*I+f*$,s[6]=g*C+v*P+m*D+f*W,s[10]=g*x+v*B+m*z+f*Z,s[14]=g*S+v*F+m*H+f*K,s[3]=y*T+b*N+_*I+M*$,s[7]=y*C+b*P+_*D+M*W,s[11]=y*x+b*B+_*z+M*Z,s[15]=y*S+b*F+_*H+M*K,this}multiplyScalar(e){let i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){let e=this.elements,i=e[0],r=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],h=e[13],u=e[2],d=e[6],c=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15],y=l*p-h*c,b=o*p-h*d,_=o*c-l*d,M=a*p-h*u,T=a*c-l*u,C=a*d-o*u;return i*(v*y-m*b+f*_)-r*(g*y-m*M+f*T)+n*(g*b-v*M+f*C)-s*(g*_-v*T+m*C)}determinantAffine(){let e=this.elements,i=e[0],r=e[4],n=e[8],s=e[1],a=e[5],o=e[9],l=e[2],h=e[6],u=e[10];return i*(a*u-o*h)-r*(s*u-o*l)+n*(s*h-a*l)}transpose(){let e=this.elements,i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=i,n[14]=r),this}invert(){let e=this.elements,i=e[0],r=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],h=e[7],u=e[8],d=e[9],c=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],y=i*o-r*a,b=i*l-n*a,_=i*h-s*a,M=r*l-n*o,T=r*h-s*o,C=n*h-s*l,x=u*v-d*g,S=u*m-c*g,N=u*f-p*g,P=d*m-c*v,B=d*f-p*v,F=c*f-p*m,I=y*F-b*B+_*P+M*N-T*S+C*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/I;return e[0]=(o*F-l*B+h*P)*D,e[1]=(n*B-r*F-s*P)*D,e[2]=(v*C-m*T+f*M)*D,e[3]=(c*T-d*C-p*M)*D,e[4]=(l*N-a*F-h*S)*D,e[5]=(i*F-n*N+s*S)*D,e[6]=(m*_-g*C-f*b)*D,e[7]=(u*C-c*_+p*b)*D,e[8]=(a*B-o*N+h*x)*D,e[9]=(r*N-i*B-s*x)*D,e[10]=(g*T-v*_+f*y)*D,e[11]=(d*_-u*T-p*y)*D,e[12]=(o*S-a*P-l*x)*D,e[13]=(i*P-r*S+n*x)*D,e[14]=(v*b-g*M-m*y)*D,e[15]=(u*M-d*b+c*y)*D,this}scale(e){let i=this.elements,r=e.x,n=e.y,s=e.z;return i[0]*=r,i[4]*=n,i[8]*=s,i[1]*=r,i[5]*=n,i[9]*=s,i[2]*=r,i[6]*=n,i[10]*=s,i[3]*=r,i[7]*=n,i[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,n))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){let i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){let i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){let r=Math.cos(i),n=Math.sin(i),s=1-r,a=e.x,o=e.y,l=e.z,h=s*a,u=s*o;return this.set(h*a+r,h*o-n*l,h*l+n*o,0,h*o+n*l,u*o+r,u*l-n*a,0,h*l-n*o,u*l+n*a,s*l*l+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,n,s,a){return this.set(1,r,s,0,e,1,a,0,i,n,1,0,0,0,0,1),this}compose(e,i,r){let n=this.elements,s=i._x,a=i._y,o=i._z,l=i._w,h=s+s,u=a+a,d=o+o,c=s*h,p=s*u,g=s*d,v=a*u,m=a*d,f=o*d,y=l*h,b=l*u,_=l*d,M=r.x,T=r.y,C=r.z;return n[0]=(1-(v+f))*M,n[1]=(p+_)*M,n[2]=(g-b)*M,n[3]=0,n[4]=(p-_)*T,n[5]=(1-(c+f))*T,n[6]=(m+y)*T,n[7]=0,n[8]=(g+b)*C,n[9]=(m-y)*C,n[10]=(1-(c+v))*C,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,i,r){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let s=this.determinantAffine();if(s===0)return r.set(1,1,1),i.identity(),this;let a=Mr.set(n[0],n[1],n[2]).length(),o=Mr.set(n[4],n[5],n[6]).length(),l=Mr.set(n[8],n[9],n[10]).length();s<0&&(a=-a),Jt.copy(this);let h=1/a,u=1/o,d=1/l;return Jt.elements[0]*=h,Jt.elements[1]*=h,Jt.elements[2]*=h,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=d,Jt.elements[9]*=d,Jt.elements[10]*=d,i.setFromRotationMatrix(Jt),r.x=a,r.y=o,r.z=l,this}makePerspective(e,i,r,n,s,a,o=ti,l=!1){let h=this.elements,u=2*s/(i-e),d=2*s/(r-n),c=(i+e)/(i-e),p=(r+n)/(r-n),g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===ti)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Tn)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=d,h[9]=p,h[13]=0,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,i,r,n,s,a,o=ti,l=!1){let h=this.elements,u=2/(i-e),d=2/(r-n),c=-(i+e)/(i-e),p=-(r+n)/(r-n),g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===ti)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Tn)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=u,h[4]=0,h[8]=0,h[12]=c,h[1]=0,h[5]=d,h[9]=0,h[13]=p,h[2]=0,h[6]=0,h[10]=g,h[14]=v,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){let i=this.elements,r=e.elements;for(let n=0;n<16;n++)if(i[n]!==r[n])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){let r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}},lr.prototype.isMatrix4=!0,lr),Mr=new L,Jt=new tt,Yd=new L(0,0,0),Zd=new L(1,1,1),Gi=new L,Zn=new L,Gt=new L,Wl=new tt,ql=new Di,Qr=class ac{constructor(e=0,i=0,r=0,n=ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,n=this._order){return this._x=e,this._y=i,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){let n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],h=n[5],u=n[9],d=n[2],c=n[6],p=n[10];switch(i){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,h),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(c,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,h),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Wl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wl,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return ql.setFromEuler(this),this.setFromQuaternion(ql,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Qr.DEFAULT_ORDER="XYZ";var oc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kd=0,Xl=new L,Sr=new Di,Si=new tt,Kn=new L,cn=new L,Jd=new L,$d=new Di,jl=new L(1,0,0),Yl=new L(0,1,0),Zl=new L(0,0,1),Kl={type:"added"},Qd={type:"removed"},wr={type:"childadded",child:null},ua={type:"childremoved",child:null},qt=class As extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=As.DEFAULT_UP.clone();let e=new L,i=new Qr,r=new Di,n=new L(1,1,1);function s(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(s),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ke}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=As.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=As.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,i){return Sr.setFromAxisAngle(e,i),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(jl,e)}rotateY(e){return this.rotateOnAxis(Yl,e)}rotateZ(e){return this.rotateOnAxis(Zl,e)}translateOnAxis(e,i){return Xl.copy(e).applyQuaternion(this.quaternion),this.position.add(Xl.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(jl,e)}translateY(e){return this.translateOnAxis(Yl,e)}translateZ(e){return this.translateOnAxis(Zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Kn.copy(e):Kn.set(e,i,r);let n=this.parent;this.updateWorldMatrix(!0,!1),cn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(cn,Kn,this.up):Si.lookAt(Kn,cn,this.up),this.quaternion.setFromRotationMatrix(Si),n&&(Si.extractRotation(n.matrixWorld),Sr.setFromRotationMatrix(Si),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kl),wr.child=e,this.dispatchEvent(wr),wr.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Qd),ua.child=e,this.dispatchEvent(ua),ua.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kl),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,n=this.children.length;r<n;r++){let s=this.children[r].getObjectByProperty(e,i);if(s!==void 0)return s}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);let n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cn,e,Jd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cn,$d,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].traverseVisible(e)}traverseAncestors(e){let i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let i=e.x,r=e.y,n=e.z,s=this.matrix.elements;s[12]+=i-s[0]*i-s[4]*r-s[8]*n,s[13]+=r-s[1]*i-s[5]*r-s[9]*n,s[14]+=n-s[2]*i-s[6]*r-s[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let i=this.children;for(let r=0,n=i.length;r<n;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i,r=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,r)}}toJSON(e){let i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){let d=l[h];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,h=this.material.length;l<h;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(s(e.animations,l))}}if(i){let o=a(e.geometries),l=a(e.materials),h=a(e.textures),u=a(e.images),d=a(e.shapes),c=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),h.length>0&&(r.textures=h),u.length>0&&(r.images=u),d.length>0&&(r.shapes=d),c.length>0&&(r.skeletons=c),p.length>0&&(r.animations=p),g.length>0&&(r.nodes=g)}return r.object=n,r;function a(o){let l=[];for(let h in o){let u=o[h];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){let n=e.children[r];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};qt.DEFAULT_UP=new L(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gr=class extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}},ep={type:"move"},da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,n=null,s=null,a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(let g of t.hand.values()){let v=e.getJointPose(g,i),m=this._getHandJoint(l,g);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),c=.02,p=.005;l.inputState.pinching&&d>c+p?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=c-p&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(n=e.getPose(t.gripSpace,i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&n!==null&&(r=n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return a!==null&&(a.visible=r!==null),o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Gr;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Jn={h:0,s:0,l:0};function pa(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*6*(2/3-i):t}var Qe=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,nt.colorSpaceToWorking(this,e),this}setRGB(t,e,i,r=nt.workingColorSpace){return this.r=t,this.g=e,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(t,e,i,r=nt.workingColorSpace){if(t=Go(t,1),e=et(e,0,1),i=et(i,0,1),e===0)this.r=this.g=this.b=i;else{let n=i<=.5?i*(1+e):i+e-i*e,s=2*i-n;this.r=pa(s,n,t+1/3),this.g=pa(s,n,t),this.b=pa(s,n,t-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(t,e=Pt){function i(n){n!==void 0&&parseFloat(n)<1&&Ge("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let n,s=r[1],a=r[2];switch(s){case"rgb":case"rgba":if(n=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(255,parseInt(n[1],10))/255,Math.min(255,parseInt(n[2],10))/255,Math.min(255,parseInt(n[3],10))/255,e);if(n=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setRGB(Math.min(100,parseInt(n[1],10))/100,Math.min(100,parseInt(n[2],10))/100,Math.min(100,parseInt(n[3],10))/100,e);break;case"hsl":case"hsla":if(n=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(n[4]),this.setHSL(parseFloat(n[1])/360,parseFloat(n[2])/100,parseFloat(n[3])/100,e);break;default:Ge("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let n=r[1],s=n.length;if(s===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(n,16),e);Ge("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pt){let i=lc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Ge("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pi(t.r),this.g=Pi(t.g),this.b=Pi(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pt){return nt.workingToColorSpace(Dt.copy(this),t),Math.round(et(Dt.r*255,0,255))*65536+Math.round(et(Dt.g*255,0,255))*256+Math.round(et(Dt.b*255,0,255))}getHexString(t=Pt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=nt.workingColorSpace){nt.workingToColorSpace(Dt.copy(this),e);let i=Dt.r,r=Dt.g,n=Dt.b,s=Math.max(i,r,n),a=Math.min(i,r,n),o,l,h=(a+s)/2;if(a===s)o=0,l=0;else{let u=s-a;switch(l=h<=.5?u/(s+a):u/(2-s-a),s){case i:o=(r-n)/u+(r<n?6:0);break;case r:o=(n-i)/u+2;break;case n:o=(i-r)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=h,t}getRGB(t,e=nt.workingColorSpace){return nt.workingToColorSpace(Dt.copy(this),e),t.r=Dt.r,t.g=Dt.g,t.b=Dt.b,t}getStyle(t=Pt){nt.workingToColorSpace(Dt.copy(this),t);let e=Dt.r,i=Dt.g,r=Dt.b;return t!==Pt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(Jn);let i=xn(ki.h,Jn.h,e),r=xn(ki.s,Jn.s,e),n=xn(ki.l,Jn.l,e);return this.setHSL(i,r,n),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,r=this.b,n=t.elements;return this.r=n[0]*e+n[3]*i+n[6]*r,this.g=n[1]*e+n[4]*i+n[7]*r,this.b=n[2]*e+n[5]*i+n[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Qe;Qe.NAMES=lc;var hc=class cc{constructor(e,i=1,r=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=i,this.far=r}clone(){return new cc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},uc=class extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qr,this.environmentIntensity=1,this.environmentRotation=new Qr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},$t=new L,wi=new L,fa=new L,Ei=new L,Er=new L,Tr=new L,Jl=new L,ma=new L,ga=new L,va=new L,_a=new mt,ya=new mt,xa=new mt,Or=class zr{constructor(e=new L,i=new L,r=new L){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,n){n.subVectors(r,i),$t.subVectors(e,i),n.cross($t);let s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,i,r,n,s){$t.subVectors(n,i),wi.subVectors(r,i),fa.subVectors(e,i);let a=$t.dot($t),o=$t.dot(wi),l=$t.dot(fa),h=wi.dot(wi),u=wi.dot(fa),d=a*h-o*o;if(d===0)return s.set(0,0,0),null;let c=1/d,p=(h*l-o*u)*c,g=(a*u-o*l)*c;return s.set(1-p-g,g,p)}static containsPoint(e,i,r,n){return this.getBarycoord(e,i,r,n,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(e,i,r,n,s,a,o,l){return this.getBarycoord(e,i,r,n,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ei.x),l.addScaledVector(a,Ei.y),l.addScaledVector(o,Ei.z),l)}static getInterpolatedAttribute(e,i,r,n,s,a){return _a.setScalar(0),ya.setScalar(0),xa.setScalar(0),_a.fromBufferAttribute(e,i),ya.fromBufferAttribute(e,r),xa.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(_a,s.x),a.addScaledVector(ya,s.y),a.addScaledVector(xa,s.z),a}static isFrontFacing(e,i,r,n){return $t.subVectors(r,i),wi.subVectors(e,i),$t.cross(wi).dot(n)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,n){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,i,r,n){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),$t.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return zr.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,n,s){return zr.getInterpolation(e,this.a,this.b,this.c,i,r,n,s)}containsPoint(e){return zr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){let r=this.a,n=this.b,s=this.c,a,o;Er.subVectors(n,r),Tr.subVectors(s,r),ma.subVectors(e,r);let l=Er.dot(ma),h=Tr.dot(ma);if(l<=0&&h<=0)return i.copy(r);ga.subVectors(e,n);let u=Er.dot(ga),d=Tr.dot(ga);if(u>=0&&d<=u)return i.copy(n);let c=l*d-u*h;if(c<=0&&l>=0&&u<=0)return a=l/(l-u),i.copy(r).addScaledVector(Er,a);va.subVectors(e,s);let p=Er.dot(va),g=Tr.dot(va);if(g>=0&&p<=g)return i.copy(s);let v=p*h-l*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),i.copy(r).addScaledVector(Tr,o);let m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Jl.subVectors(s,n),o=(d-u)/(d-u+(p-g)),i.copy(n).addScaledVector(Jl,o);let f=1/(m+v+c);return a=v*f,o=c*f,i.copy(r).addScaledVector(Er,a).addScaledVector(Tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yi=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Qt.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Qt.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Qt.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let n=i.getAttribute("position");if(e===!0&&n!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=n.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Qt):Qt.fromBufferAttribute(n,s),Qt.applyMatrix4(t.matrixWorld),this.expandByPoint(Qt);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$n.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$n.copy(i.boundingBox)),$n.applyMatrix4(t.matrixWorld),this.union($n)}let r=t.children;for(let n=0,s=r.length;n<s;n++)this.expandByObject(r[n],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qt),Qt.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(un),Qn.subVectors(this.max,un),Ar.subVectors(t.a,un),Cr.subVectors(t.b,un),Rr.subVectors(t.c,un),Hi.subVectors(Cr,Ar),Wi.subVectors(Rr,Cr),er.subVectors(Ar,Rr);let e=[0,-Hi.z,Hi.y,0,-Wi.z,Wi.y,0,-er.z,er.y,Hi.z,0,-Hi.x,Wi.z,0,-Wi.x,er.z,0,-er.x,-Hi.y,Hi.x,0,-Wi.y,Wi.x,0,-er.y,er.x,0];return!ba(e,Ar,Cr,Rr,Qn)||(e=[1,0,0,0,1,0,0,0,1],!ba(e,Ar,Cr,Rr,Qn))?!1:(es.crossVectors(Hi,Wi),e=[es.x,es.y,es.z],ba(e,Ar,Cr,Rr,Qn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qt).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qt).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ti=[new L,new L,new L,new L,new L,new L,new L,new L],Qt=new L,$n=new Yi,Ar=new L,Cr=new L,Rr=new L,Hi=new L,Wi=new L,er=new L,un=new L,Qn=new L,es=new L,tr=new L;function ba(t,e,i,r,n){for(let s=0,a=t.length-3;s<=a;s+=3){tr.fromArray(t,s);let o=n.x*Math.abs(tr.x)+n.y*Math.abs(tr.y)+n.z*Math.abs(tr.z),l=e.dot(tr),h=i.dot(tr),u=r.dot(tr);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>o)return!1}return!0}var N1=tp();function tp(){let t=new ArrayBuffer(4),e=new Float32Array(t),i=new Uint32Array(t),r=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){let h=l-127;h<-27?(r[l]=0,r[l|256]=32768,n[l]=24,n[l|256]=24):h<-14?(r[l]=1024>>-h-14,r[l|256]=1024>>-h-14|32768,n[l]=-h-1,n[l|256]=-h-1):h<=15?(r[l]=h+15<<10,r[l|256]=h+15<<10|32768,n[l]=13,n[l|256]=13):h<128?(r[l]=31744,r[l|256]=64512,n[l]=24,n[l|256]=24):(r[l]=31744,r[l|256]=64512,n[l]=13,n[l|256]=13)}let s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let h=l<<13,u=0;for(;(h&8388608)===0;)h<<=1,u-=8388608;h&=-8388609,u+=947912704,s[l]=h|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:i,baseTable:r,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}var wt=new L,ts=new de,ip=0,Li=class extends pr{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ip++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=xd,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,n=this.itemSize;r<n;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)wt.fromBufferAttribute(this,e),wt.applyMatrix3(t),this.setXYZ(e,wt.x,wt.y,wt.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)wt.fromBufferAttribute(this,e),wt.applyMatrix4(t),this.setXYZ(e,wt.x,wt.y,wt.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)wt.fromBufferAttribute(this,e),wt.applyNormalMatrix(t),this.setXYZ(e,wt.x,wt.y,wt.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)wt.fromBufferAttribute(this,e),wt.transformDirection(t),this.setXYZ(e,wt.x,wt.y,wt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Fr(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ft(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fr(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ft(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fr(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ft(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ft(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fr(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ft(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ft(e,this.array),i=Ft(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=Ft(e,this.array),i=Ft(i,this.array),r=Ft(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,n){return t*=this.itemSize,this.normalized&&(e=Ft(e,this.array),i=Ft(i,this.array),r=Ft(r,this.array),n=Ft(n,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=n,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var dc=class extends Li{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var pc=class extends Li{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var We=class extends Li{constructor(t,e,i){super(new Float32Array(t),e,i)}},rp=new Yi,dn=new L,Ma=new L,Zi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):rp.setFromPoints(t).getCenter(i);let r=0;for(let n=0,s=t.length;n<s;n++)r=Math.max(r,i.distanceToSquared(t[n]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;dn.subVectors(t,this.center);let e=dn.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(dn,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(dn.copy(t.center).add(Ma)),this.expandByPoint(dn.copy(t.center).sub(Ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},np=0,Zt=new tt,Sa=new qt,Ir=new L,kt=new Yi,pn=new Yi,It=new L,Mt=class fc extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bd(e)?pc:dc)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){let i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let s=new Ke().getNormalMatrix(e);r.applyNormalMatrix(s),r.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,i,r){return Zt.makeTranslation(e,i,r),this.applyMatrix4(Zt),this}scale(e,i,r){return Zt.makeScale(e,i,r),this.applyMatrix4(Zt),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let i=this.getAttribute("position");if(i===void 0){let r=[];for(let n=0,s=e.length;n<s;n++){let a=e[n];r.push(a.x,a.y,a.z||0)}this.setAttribute("position",new We(r,3))}else{let r=Math.min(e.length,i.count);for(let n=0;n<r;n++){let s=e[n];i.setXYZ(n,s.x,s.y,s.z||0)}e.length>i.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,n=i.length;r<n;r++){let s=i[r];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let r=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),i)for(let s=0,a=i.length;s<a;s++){let o=i[s];pn.setFromBufferAttribute(o),this.morphTargetsRelative?(It.addVectors(kt.min,pn.min),kt.expandByPoint(It),It.addVectors(kt.max,pn.max),kt.expandByPoint(It)):(kt.expandByPoint(pn.min),kt.expandByPoint(pn.max))}kt.getCenter(r);let n=0;for(let s=0,a=e.count;s<a;s++)It.fromBufferAttribute(e,s),n=Math.max(n,r.distanceToSquared(It));if(i)for(let s=0,a=i.length;s<a;s++){let o=i[s],l=this.morphTargetsRelative;for(let h=0,u=o.count;h<u;h++)It.fromBufferAttribute(o,h),l&&(Ir.fromBufferAttribute(e,h),It.add(Ir)),n=Math.max(n,r.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=i.position,n=i.normal,s=i.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==r.count)&&(a=new Li(new Float32Array(4*r.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<r.count;x++)o[x]=new L,l[x]=new L;let h=new L,u=new L,d=new L,c=new de,p=new de,g=new de,v=new L,m=new L;function f(x,S,N){h.fromBufferAttribute(r,x),u.fromBufferAttribute(r,S),d.fromBufferAttribute(r,N),c.fromBufferAttribute(s,x),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,N),u.sub(h),d.sub(h),p.sub(c),g.sub(c);let P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(P),o[x].add(v),o[S].add(v),o[N].add(v),l[x].add(m),l[S].add(m),l[N].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let x=0,S=y.length;x<S;++x){let N=y[x],P=N.start,B=N.count;for(let F=P,I=P+B;F<I;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let b=new L,_=new L,M=new L,T=new L;function C(x){M.fromBufferAttribute(n,x),T.copy(M);let S=o[x];b.copy(S),b.sub(M.multiplyScalar(M.dot(S))).normalize(),_.crossVectors(T,S);let N=_.dot(l[x])<0?-1:1;a.setXYZW(x,b.x,b.y,b.z,N)}for(let x=0,S=y.length;x<S;++x){let N=y[x],P=N.start,B=N.count;for(let F=P,I=P+B;F<I;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let c=0,p=r.count;c<p;c++)r.setXYZ(c,0,0,0);let n=new L,s=new L,a=new L,o=new L,l=new L,h=new L,u=new L,d=new L;if(e)for(let c=0,p=e.count;c<p;c+=3){let g=e.getX(c+0),v=e.getX(c+1),m=e.getX(c+2);n.fromBufferAttribute(i,g),s.fromBufferAttribute(i,v),a.fromBufferAttribute(i,m),u.subVectors(a,s),d.subVectors(n,s),u.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,v),h.fromBufferAttribute(r,m),o.add(u),l.add(u),h.add(u),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(m,h.x,h.y,h.z)}else for(let c=0,p=i.count;c<p;c+=3)n.fromBufferAttribute(i,c+0),s.fromBufferAttribute(i,c+1),a.fromBufferAttribute(i,c+2),u.subVectors(a,s),d.subVectors(n,s),u.cross(d),r.setXYZ(c+0,u.x,u.y,u.z),r.setXYZ(c+1,u.x,u.y,u.z),r.setXYZ(c+2,u.x,u.y,u.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)It.fromBufferAttribute(e,i),It.normalize(),e.setXYZ(i,It.x,It.y,It.z)}toNonIndexed(){function e(o,l){let h=o.array,u=o.itemSize,d=o.normalized,c=new h.constructor(l.length*u),p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let f=0;f<u;f++)c[g++]=h[p++]}return new Li(c,u,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let i=new fc,r=this.index.array,n=this.attributes;for(let o in n){let l=n[o],h=e(l,r);i.setAttribute(o,h)}let s=this.morphAttributes;for(let o in s){let l=[],h=s[o];for(let u=0,d=h.length;u<d;u++){let c=h[u],p=e(c,r);l.push(p)}i.morphAttributes[o]=l}i.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let h=a[o];i.addGroup(h.start,h.count,h.materialIndex)}return i}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(e[h]=l[h]);return e}e.data={attributes:{}};let i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});let r=this.attributes;for(let l in r){let h=r[l];e.data.attributes[l]=h.toJSON(e.data)}let n={},s=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],u=[];for(let d=0,c=h.length;d<c;d++){let p=h[d];u.push(p.toJSON(e.data))}u.length>0&&(n[l]=u,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let i={};this.name=e.name;let r=e.index;r!==null&&this.setIndex(r.clone());let n=e.attributes;for(let h in n){let u=n[h];this.setAttribute(h,u.clone(i))}let s=e.morphAttributes;for(let h in s){let u=[],d=s[h];for(let c=0,p=d.length;c<p;c++)u.push(d[c].clone(i));this.morphAttributes[h]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let h=0,u=a.length;h<u;h++){let d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var D1=new L;var wa=new L,sp=new L,ap=new Ke,Xi=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let r=wa.subVectors(i,e).cross(sp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let r=t.delta(wa),n=this.normal.dot(r);if(n===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/n;return i===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(r,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ap.getNormalMatrix(t),r=this.coplanarPoint(wa).applyMatrix4(t),n=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(n),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},op=0,Nn=class extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=yn,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vh,this.blendDst=Gh,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Sn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=pd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){Ge(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Ge(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(n=>n.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(n){let s=[];for(let a in n){let o=n[a];delete o.metadata,s.push(o)}return s}if(e){let n=r(t.textures),s=r(t.images);n.length>0&&(i.textures=n),s.length>0&&(i.images=s)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qe().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Xi().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new de().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let r=e.length;i=new Array(r);for(let n=0;n!==r;++n)i[n]=e[n].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var B1=new L,U1=new L,F1=new L,O1=new de,z1=new de,V1=new tt,G1=new L,k1=new L,H1=new L,W1=new de,q1=new de,X1=new de;var j1=new L,Y1=new L;var Ai=new L,Ea=new L,is=new L,rs=new L,Fs=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ai.copy(this.origin).addScaledVector(this.direction,e),Ai.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ea.copy(t).add(e).multiplyScalar(.5),is.copy(e).sub(t).normalize(),rs.copy(this.origin).sub(Ea);let n=t.distanceTo(e)*.5,s=-this.direction.dot(is),a=rs.dot(this.direction),o=-rs.dot(is),l=rs.lengthSq(),h=Math.abs(1-s*s),u,d,c,p;if(h>0)if(u=s*o-a,d=s*a-o,p=n*h,u>=0)if(d>=-p)if(d<=p){let g=1/h;u*=g,d*=g,c=u*(u+s*d+2*a)+d*(s*u+d+2*o)+l}else d=n,u=Math.max(0,-(s*d+a)),c=-u*u+d*(d+2*o)+l;else d=-n,u=Math.max(0,-(s*d+a)),c=-u*u+d*(d+2*o)+l;else d<=-p?(u=Math.max(0,-(-s*n+a)),d=u>0?-n:Math.min(Math.max(-n,-o),n),c=-u*u+d*(d+2*o)+l):d<=p?(u=0,d=Math.min(Math.max(-n,-o),n),c=d*(d+2*o)+l):(u=Math.max(0,-(s*n+a)),d=u>0?n:Math.min(Math.max(-n,-o),n),c=-u*u+d*(d+2*o)+l);else d=s>0?-n:n,u=Math.max(0,-(s*d+a)),c=-u*u+d*(d+2*o)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ea).addScaledVector(is,d),c}intersectSphere(t,e){if(t.radius<0)return null;Ai.subVectors(t.center,this.origin);let i=Ai.dot(this.direction),r=Ai.dot(Ai)-i*i,n=t.radius*t.radius;if(r>n)return null;let s=Math.sqrt(n-r),a=i-s,o=i+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,n,s,a,o,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,r=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,r=(t.min.x-d.x)*l),h>=0?(n=(t.min.y-d.y)*h,s=(t.max.y-d.y)*h):(n=(t.max.y-d.y)*h,s=(t.min.y-d.y)*h),i>s||n>r||((n>i||isNaN(i))&&(i=n),(s<r||isNaN(r))&&(r=s),u>=0?(a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),i>o||a>r)||((a>i||i!==i)&&(i=a),(o<r||r!==r)&&(r=o),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Ai)!==null}intersectTriangle(t,e,i,r,n){let s=this.origin,a=this.direction,o=a.x,l=a.y,h=a.z,u=t.x-s.x,d=t.y-s.y,c=t.z-s.z,p=e.x-s.x,g=e.y-s.y,v=e.z-s.z,m=i.x-s.x,f=i.y-s.y,y=i.z-s.z,b=Math.abs(o),_=Math.abs(l),M=Math.abs(h),T,C,x,S,N,P,B,F,I,D,z,H;if(b>=_&&b>=M?(x=o,P=u,I=p,H=m,o>=0?(T=l,C=h,S=d,N=c,B=g,F=v,D=f,z=y):(T=h,C=l,S=c,N=d,B=v,F=g,D=y,z=f)):_>=M?(x=l,P=d,I=g,H=f,l>=0?(T=h,C=o,S=c,N=u,B=v,F=p,D=y,z=m):(T=o,C=h,S=u,N=c,B=p,F=v,D=m,z=y)):(x=h,P=c,I=v,H=y,h>=0?(T=o,C=l,S=u,N=d,B=p,F=g,D=m,z=f):(T=l,C=o,S=d,N=u,B=g,F=p,D=f,z=m)),x===0)return null;let $=T/x,W=C/x,Z=1/x,K=S-$*P,oe=N-W*P,Se=B-$*I,rt=F-W*I,ze=D-$*H,J=z-W*H,ne=ze*rt-J*Se,le=K*J-oe*ze,Pe=Se*oe-rt*K;if(r){if(ne<0||le<0||Pe<0)return null}else if((ne<0||le<0||Pe<0)&&(ne>0||le>0||Pe>0))return null;let Ue=ne+le+Pe;if(Ue===0)return null;let ge=Z*(ne*P+le*I+Pe*H);return(Ue>0?ge<0:ge>0)?null:this.at(ge/Ue,n)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Dn=class extends Nn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qr,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},$l=new tt,ir=new Fs,ns=new Zi,Ql=new L,ss=new L,as=new L,os=new L,Ta=new L,ls=new L,eh=new L,hs=new L,_t=class extends qt{constructor(t=new Mt,e=new Dn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){let i=t[e[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,n=i.length;r<n;r++){let s=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=r}}}}getVertexPosition(t,e){let i=this.geometry,r=i.attributes.position,n=i.morphAttributes.position,s=i.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(n&&a){ls.set(0,0,0);for(let o=0,l=n.length;o<l;o++){let h=a[o],u=n[o];h!==0&&(Ta.fromBufferAttribute(u,t),s?ls.addScaledVector(Ta,h):ls.addScaledVector(Ta.sub(e),h))}e.add(ls)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,r=this.material,n=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ns.copy(i.boundingSphere),ns.applyMatrix4(n),ir.copy(t.ray).recast(t.near),!(ns.containsPoint(ir.origin)===!1&&(ir.intersectSphere(ns,Ql)===null||ir.origin.distanceToSquared(Ql)>(t.far-t.near)**2))&&($l.copy(n).invert(),ir.copy(t.ray).applyMatrix4($l),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,ir)))}_computeIntersections(t,e,i){let r,n=this.geometry,s=this.material,a=n.index,o=n.attributes.position,l=n.attributes.uv,h=n.attributes.uv1,u=n.attributes.normal,d=n.groups,c=n.drawRange;if(a!==null)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){let v=d[p],m=s[v.materialIndex],f=Math.max(v.start,c.start),y=Math.min(a.count,Math.min(v.start+v.count,c.start+c.count));for(let b=f,_=y;b<_;b+=3){let M=a.getX(b),T=a.getX(b+1),C=a.getX(b+2);r=cs(this,m,t,i,l,h,u,M,T,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{let p=Math.max(0,c.start),g=Math.min(a.count,c.start+c.count);for(let v=p,m=g;v<m;v+=3){let f=a.getX(v),y=a.getX(v+1),b=a.getX(v+2);r=cs(this,s,t,i,l,h,u,f,y,b),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(o!==void 0)if(Array.isArray(s))for(let p=0,g=d.length;p<g;p++){let v=d[p],m=s[v.materialIndex],f=Math.max(v.start,c.start),y=Math.min(o.count,Math.min(v.start+v.count,c.start+c.count));for(let b=f,_=y;b<_;b+=3){let M=b,T=b+1,C=b+2;r=cs(this,m,t,i,l,h,u,M,T,C),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{let p=Math.max(0,c.start),g=Math.min(o.count,c.start+c.count);for(let v=p,m=g;v<m;v+=3){let f=v,y=v+1,b=v+2;r=cs(this,s,t,i,l,h,u,f,y,b),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}};function lp(t,e,i,r,n,s,a,o){let l;if(e.side===zt?l=r.intersectTriangle(a,s,n,!0,o):l=r.intersectTriangle(n,s,a,e.side===hr,o),l===null)return null;hs.copy(o),hs.applyMatrix4(t.matrixWorld);let h=i.ray.origin.distanceTo(hs);return h<i.near||h>i.far?null:{distance:h,point:hs.clone(),object:t}}function cs(t,e,i,r,n,s,a,o,l,h){t.getVertexPosition(o,ss),t.getVertexPosition(l,as),t.getVertexPosition(h,os);let u=lp(t,e,i,r,ss,as,os,eh);if(u){let d=new L;Or.getBarycoord(eh,ss,as,os,d),n&&(u.uv=Or.getInterpolatedAttribute(n,o,l,h,d,new de)),s&&(u.uv1=Or.getInterpolatedAttribute(s,o,l,h,d,new de)),a&&(u.normal=Or.getInterpolatedAttribute(a,o,l,h,d,new L),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let c={a:o,b:l,c:h,normal:new L,materialIndex:0};Or.getNormal(ss,as,os,c.normal),u.face=c,u.barycoord=d}return u}var Z1=new mt,K1=new mt,J1=new mt,$1=new mt,Q1=new tt,eb=new L,tb=new Zi,ib=new tt,rb=new Fs;var hp=class extends Xt{constructor(t=null,e=1,i=1,r,n,s,a,o,l=Lt,h=Lt,u,d){super(null,s,a,o,l,h,r,n,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},nb=new tt,sb=new tt;var ab=new tt,ob=new tt;var lb=new Yi,hb=new tt,cb=new _t,ub=new Zi;var rr=new Zi,cp=new de(.5,.5),us=new L,en=class{constructor(t=new Xi,e=new Xi,i=new Xi,r=new Xi,n=new Xi,s=new Xi){this.planes=[t,e,i,r,n,s]}set(t,e,i,r,n,s){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(n),a[5].copy(s),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=ti,i=!1){let r=this.planes,n=t.elements,s=n[0],a=n[1],o=n[2],l=n[3],h=n[4],u=n[5],d=n[6],c=n[7],p=n[8],g=n[9],v=n[10],m=n[11],f=n[12],y=n[13],b=n[14],_=n[15];if(r[0].setComponents(l-s,c-h,m-p,_-f).normalize(),r[1].setComponents(l+s,c+h,m+p,_+f).normalize(),r[2].setComponents(l+a,c+u,m+g,_+y).normalize(),r[3].setComponents(l-a,c-u,m-g,_-y).normalize(),i)r[4].setComponents(o,d,v,b).normalize(),r[5].setComponents(l-o,c-d,m-v,_-b).normalize();else if(r[4].setComponents(l-o,c-d,m-v,_-b).normalize(),e===ti)r[5].setComponents(l+o,c+d,m+v,_+b).normalize();else if(e===Tn)r[5].setComponents(o,d,v,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(t){rr.center.set(0,0,0);let e=cp.distanceTo(t.center);return rr.radius=.7071067811865476+e,rr.applyMatrix4(t.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(t){let e=this.planes,i=t.center,r=-t.radius;for(let n=0;n<6;n++)if(e[n].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let r=e[i];if(us.x=r.normal.x>0?t.max.x:t.min.x,us.y=r.normal.y>0?t.max.y:t.min.y,us.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(us)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},th=new tt,up=class mc{constructor(){this.coordinateSystem=ti,this._frustums=[],this._count=0}setFromArrayCamera(e){let i=e.cameras,r=this._frustums;for(let n=0;n<i.length;n++){let s=i[n];th.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),r[n]===void 0&&(r[n]=new en),r[n].setFromProjectionMatrix(th,s.coordinateSystem,s.reversedDepth)}return this._count=i.length,this}intersectsObject(e){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(e))return!0;return!1}containsPoint(e){let i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let i=this._frustums,r=e._frustums;for(let n=0;n<e._count;n++)i[n]===void 0&&(i[n]=new en),i[n].copy(r[n]);return this._count=e._count,this}clone(){return new mc().copy(this)}};var dp=class{constructor(){this.index=0,this.pool=[],this.list=[]}push(t,e,i,r){let n=this.pool,s=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1,index:-1});let a=n[this.index];s.push(a),this.index++,a.start=t,a.count=e,a.z=i,a.index=r}reset(){this.list.length=0,this.index=0}},db=new tt,pb=new Qe(1,1,1),fb=new en,mb=new up,gb=new Yi,vb=new Zi,_b=new L,yb=new L,xb=new L,bb=new dp,Mb=new _t;var Sb=new L,wb=new L,Eb=new tt,Tb=new Fs,Ab=new Zi,Cb=new L,Rb=new L;var Ib=new L,Pb=new L;var Lb=new tt,Nb=new Fs,Db=new Zi,Bb=new L;var gc=class extends Xt{constructor(t=[],e=cr,i,r,n,s,a,o,l,h){super(t,e,i,r,n,s,a,o,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ho=class extends Xt{constructor(t,e,i,r,n,s,a,o,l){super(t,e,i,r,n,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Rn=class extends Xt{constructor(t,e,i=pi,r,n,s,a=Lt,o=Lt,l,h=Ni,u=1){if(h!==Ni&&h!==ar)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,r,n,s,a,o,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ko(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},pp=class extends Rn{constructor(t,e=pi,i=cr,r,n,s=Lt,a=Lt,o,l=Ni){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,i,r,n,s,a,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},vc=class extends Xt{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ri=class _c extends Mt{constructor(e=1,i=1,r=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:n,heightSegments:s,depthSegments:a};let o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);let l=[],h=[],u=[],d=[],c=0,p=0;g("z","y","x",-1,-1,r,i,e,a,s,0),g("z","y","x",1,-1,r,i,-e,a,s,1),g("x","z","y",1,1,e,r,i,n,a,2),g("x","z","y",1,-1,e,r,-i,n,a,3),g("x","y","z",1,-1,e,i,r,n,s,4),g("x","y","z",-1,-1,e,i,-r,n,s,5),this.setIndex(l),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(d,2));function g(v,m,f,y,b,_,M,T,C,x,S){let N=_/C,P=M/x,B=_/2,F=M/2,I=T/2,D=C+1,z=x+1,H=0,$=0,W=new L;for(let Z=0;Z<z;Z++){let K=Z*P-F;for(let oe=0;oe<D;oe++){let Se=oe*N-B;W[v]=Se*y,W[m]=K*b,W[f]=I,h.push(W.x,W.y,W.z),W[v]=0,W[m]=0,W[f]=T>0?1:-1,u.push(W.x,W.y,W.z),d.push(oe/C),d.push(1-Z/x),H+=1}}for(let Z=0;Z<x;Z++)for(let K=0;K<C;K++){let oe=c+K+D*Z,Se=c+K+D*(Z+1),rt=c+(K+1)+D*(Z+1),ze=c+(K+1)+D*Z;l.push(oe,Se,ze),l.push(Se,rt,ze),$+=6}o.addGroup(p,$,S),p+=$,c+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},fp=class yc extends Mt{constructor(e=1,i=1,r=4,n=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:i,capSegments:r,radialSegments:n,heightSegments:s},i=Math.max(0,i),r=Math.max(1,Math.floor(r)),n=Math.max(3,Math.floor(n)),s=Math.max(1,Math.floor(s));let a=[],o=[],l=[],h=[],u=i/2,d=Math.PI/2*e,c=i,p=2*d+c,g=r*2+s,v=n+1,m=new L,f=new L;for(let y=0;y<=g;y++){let b=0,_=0,M=0,T=0;if(y<=r){let S=y/r,N=S*Math.PI/2;_=-u-e*Math.cos(N),M=e*Math.sin(N),T=-e*Math.cos(N),b=S*d}else if(y<=r+s){let S=(y-r)/s;_=-u+S*i,M=e,T=0,b=d+S*c}else{let S=(y-r-s)/r,N=S*Math.PI/2;_=u+e*Math.sin(N),M=e*Math.cos(N),T=e*Math.sin(N),b=d+c+S*d}let C=Math.max(0,Math.min(1,b/p)),x=0;y===0?x=.5/n:y===g&&(x=-.5/n);for(let S=0;S<=n;S++){let N=S/n,P=N*Math.PI*2,B=Math.sin(P),F=Math.cos(P);f.x=-M*F,f.y=_,f.z=M*B,o.push(f.x,f.y,f.z),m.set(-M*F,T,M*B),m.normalize(),l.push(m.x,m.y,m.z),h.push(N+x,C)}if(y>0){let S=(y-1)*v;for(let N=0;N<n;N++){let P=S+N,B=S+N+1,F=y*v+N,I=y*v+N+1;a.push(P,B,F),a.push(B,I,F)}}}this.setIndex(a),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(l,3)),this.setAttribute("uv",new We(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yc(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},mp=class xc extends Mt{constructor(e=1,i=32,r=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:i,thetaStart:r,thetaLength:n},i=Math.max(3,i);let s=[],a=[],o=[],l=[],h=new L,u=new de;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,c=3;d<=i;d++,c+=3){let p=r+d/i*n;h.x=e*Math.cos(p),h.y=e*Math.sin(p),a.push(h.x,h.y,h.z),o.push(0,0,1),u.x=(a[c]/e+1)/2,u.y=(a[c+1]/e+1)/2,l.push(u.x,u.y)}for(let d=1;d<=i;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(o,3)),this.setAttribute("uv",new We(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Os=class bc extends Mt{constructor(e=1,i=1,r=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:r,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let h=this;n=Math.floor(n),s=Math.floor(s);let u=[],d=[],c=[],p=[],g=0,v=[],m=r/2,f=0;y(),a===!1&&(e>0&&b(!0),i>0&&b(!1)),this.setIndex(u),this.setAttribute("position",new We(d,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(p,2));function y(){let _=new L,M=new L,T=0,C=(i-e)/r;for(let x=0;x<=s;x++){let S=[],N=x/s,P=N*(i-e)+e;for(let B=0;B<=n;B++){let F=B/n,I=F*l+o,D=Math.sin(I),z=Math.cos(I);M.x=P*D,M.y=-N*r+m,M.z=P*z,d.push(M.x,M.y,M.z),_.set(D,C,z).normalize(),c.push(_.x,_.y,_.z),p.push(F,1-N),S.push(g++)}v.push(S)}for(let x=0;x<n;x++)for(let S=0;S<s;S++){let N=v[S][x],P=v[S+1][x],B=v[S+1][x+1],F=v[S][x+1];(e>0||S!==0)&&(u.push(N,P,F),T+=3),(i>0||S!==s-1)&&(u.push(P,B,F),T+=3)}h.addGroup(f,T,0),f+=T}function b(_){let M=g,T=new de,C=new L,x=0,S=_===!0?e:i,N=_===!0?1:-1;for(let B=1;B<=n;B++)d.push(0,m*N,0),c.push(0,N,0),p.push(.5,.5),g++;let P=g;for(let B=0;B<=n;B++){let F=B/n*l+o,I=Math.cos(F),D=Math.sin(F);C.x=S*D,C.y=m*N,C.z=S*I,d.push(C.x,C.y,C.z),c.push(0,N,0),T.x=I*.5+.5,T.y=D*.5*N+.5,p.push(T.x,T.y),g++}for(let B=0;B<n;B++){let F=M+B,I=P+B;_===!0?u.push(I,I+1,F):u.push(I+1,I,F),x+=3}h.addGroup(f,x,_===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Wo=class Mc extends Os{constructor(e=1,i=1,r=32,n=1,s=!1,a=0,o=Math.PI*2){super(0,e,i,r,n,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:r,heightSegments:n,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Mc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bn=class Sc extends Mt{constructor(e=[],i=[],r=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:n};let s=[],a=[];o(n),h(r),u(),this.setAttribute("position",new We(s,3)),this.setAttribute("normal",new We(s.slice(),3)),this.setAttribute("uv",new We(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let b=new L,_=new L,M=new L;for(let T=0;T<i.length;T+=3)p(i[T+0],b),p(i[T+1],_),p(i[T+2],M),l(b,_,M,y)}function l(y,b,_,M){let T=M+1,C=[];for(let x=0;x<=T;x++){C[x]=[];let S=y.clone().lerp(_,x/T),N=b.clone().lerp(_,x/T),P=T-x;for(let B=0;B<=P;B++)B===0&&x===T?C[x][B]=S:C[x][B]=S.clone().lerp(N,B/P)}for(let x=0;x<T;x++)for(let S=0;S<2*(T-x)-1;S++){let N=Math.floor(S/2);S%2===0?(c(C[x][N+1]),c(C[x+1][N]),c(C[x][N])):(c(C[x][N+1]),c(C[x+1][N+1]),c(C[x+1][N]))}}function h(y){let b=new L;for(let _=0;_<s.length;_+=3)b.x=s[_+0],b.y=s[_+1],b.z=s[_+2],b.normalize().multiplyScalar(y),s[_+0]=b.x,s[_+1]=b.y,s[_+2]=b.z}function u(){let y=new L;for(let b=0;b<s.length;b+=3){y.x=s[b+0],y.y=s[b+1],y.z=s[b+2];let _=m(y)/2/Math.PI+.5,M=f(y)/Math.PI+.5;a.push(_,1-M)}g(),d()}function d(){for(let y=0;y<a.length;y+=6){let b=a[y+0],_=a[y+2],M=a[y+4],T=Math.max(b,_,M),C=Math.min(b,_,M);T>.9&&C<.1&&(b<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),M<.2&&(a[y+4]+=1))}}function c(y){s.push(y.x,y.y,y.z)}function p(y,b){let _=y*3;b.x=e[_+0],b.y=e[_+1],b.z=e[_+2]}function g(){let y=new L,b=new L,_=new L,M=new L,T=new de,C=new de,x=new de;for(let S=0,N=0;S<s.length;S+=9,N+=6){y.set(s[S+0],s[S+1],s[S+2]),b.set(s[S+3],s[S+4],s[S+5]),_.set(s[S+6],s[S+7],s[S+8]),T.set(a[N+0],a[N+1]),C.set(a[N+2],a[N+3]),x.set(a[N+4],a[N+5]),M.copy(y).add(b).add(_).divideScalar(3);let P=m(M);v(T,N+0,y,P),v(C,N+2,b,P),v(x,N+4,_,P)}}function v(y,b,_,M){M<0&&y.x===1&&(a[b]=y.x-1),_.x===0&&_.z===0&&(a[b]=M/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function f(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sc(e.vertices,e.indices,e.radius,e.detail)}},gp=class wc extends Bn{constructor(e=1,i=0){let r=(1+Math.sqrt(5))/2,n=1/r,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-r,0,-n,r,0,n,-r,0,n,r,-n,-r,0,-n,r,0,n,-r,0,n,r,0,-r,0,-n,r,0,-n,-r,0,n,r,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,i),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new wc(e.radius,e.detail)}},ds=new L,ps=new L,Aa=new L,fs=new Or,vp=class extends Mt{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Wr*e),n=t.getIndex(),s=t.getAttribute("position"),a=n?n.count:s.count,o=[0,0,0],l=["a","b","c"],h=new Array(3),u={},d=[];for(let c=0;c<a;c+=3){n?(o[0]=n.getX(c),o[1]=n.getX(c+1),o[2]=n.getX(c+2)):(o[0]=c,o[1]=c+1,o[2]=c+2);let{a:p,b:g,c:v}=fs;if(p.fromBufferAttribute(s,o[0]),g.fromBufferAttribute(s,o[1]),v.fromBufferAttribute(s,o[2]),fs.getNormal(Aa),h[0]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,h[1]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,h[2]=`${Math.round(v.x*i)},${Math.round(v.y*i)},${Math.round(v.z*i)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let m=0;m<3;m++){let f=(m+1)%3,y=h[m],b=h[f],_=fs[l[m]],M=fs[l[f]],T=`${y}_${b}`,C=`${b}_${y}`;C in u&&u[C]?(Aa.dot(u[C].normal)<=r&&(d.push(_.x,_.y,_.z),d.push(M.x,M.y,M.z)),u[C]=null):T in u||(u[T]={index0:o[m],index1:o[f],normal:Aa.clone()})}}for(let c in u)if(u[c]){let{index0:p,index1:g}=u[c];ds.fromBufferAttribute(s,p),ps.fromBufferAttribute(s,g),d.push(ds.x,ds.y,ds.z),d.push(ps.x,ps.y,ps.z)}this.setAttribute("position",new We(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},gi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ge("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,r=this.getPoint(0),n=0;e.push(0);for(let s=1;s<=t;s++)i=this.getPoint(s/t),n+=i.distanceTo(r),e.push(n),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),r=0,n=i.length,s;e?s=e:s=t*i[n-1];let a=0,o=n-1,l;for(;a<=o;)if(r=Math.floor(a+(o-a)/2),l=i[r]-s,l<0)a=r+1;else if(l>0)o=r-1;else{o=r;break}if(r=o,i[r]===s)return r/(n-1);let h=i[r],u=i[r+1]-h,d=(s-h)/u;return(r+d)/(n-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let n=this.getPoint(i),s=this.getPoint(r),a=e||(n.isVector2?new de:new L);return a.copy(s).sub(n).normalize(),a}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new L,r=[],n=[],s=[],a=new L,o=new tt;for(let c=0;c<=t;c++){let p=c/t;r[c]=this.getTangentAt(p,new L)}n[0]=new L,s[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),n[0].crossVectors(r[0],a),s[0].crossVectors(r[0],n[0]);for(let c=1;c<=t;c++){if(n[c]=n[c-1].clone(),s[c]=s[c-1].clone(),a.crossVectors(r[c-1],r[c]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(et(r[c-1].dot(r[c]),-1,1));n[c].applyMatrix4(o.makeRotationAxis(a,p))}s[c].crossVectors(r[c],n[c])}if(e===!0){let c=Math.acos(et(n[0].dot(n[t]),-1,1));c/=t,r[0].dot(a.crossVectors(n[0],n[t]))>0&&(c=-c);for(let p=1;p<=t;p++)n[p].applyMatrix4(o.makeRotationAxis(r[p],c*p)),s[p].crossVectors(r[p],n[p])}return{tangents:r,normals:n,binormals:s}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},qo=class extends gi{constructor(t=0,e=0,i=1,r=1,n=0,s=Math.PI*2,a=!1,o=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=n,this.aEndAngle=s,this.aClockwise=a,this.aRotation=o}getPoint(t,e=new de){let i=e,r=Math.PI*2,n=this.aEndAngle-this.aStartAngle,s=Math.abs(n)<Number.EPSILON;for(;n<0;)n+=r;for(;n>r;)n-=r;n<Number.EPSILON&&(s?n=0:n=r),this.aClockwise===!0&&!s&&(n===r?n=-r:n=n-r);let a=this.aStartAngle+t*n,o=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=o-this.aX,c=l-this.aY;o=d*h-c*u+this.aX,l=d*u+c*h+this.aY}return i.set(o,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_p=class extends qo{constructor(t,e,i,r,n,s){super(t,e,i,i,r,n,s),this.isArcCurve=!0,this.type="ArcCurve"}};function Xo(){let t=0,e=0,i=0,r=0;function n(s,a,o,l){t=s,e=o,i=-3*s+3*a-2*o-l,r=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,h){n(a,o,h*(o-s),h*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,h,u,d){let c=(a-s)/h-(o-s)/(h+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;c*=u,p*=u,n(a,o,c,p)},calc:function(s){let a=s*s,o=a*s;return t+e*s+i*a+r*o}}}var ih=new L,rh=new L,Ca=new Xo,Ra=new Xo,Ia=new Xo,yp=class extends gi{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new L){let i=e,r=this.points,n=r.length,s=(n-(this.closed?0:1))*t,a=Math.floor(s),o=s-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/n)+1)*n:o===0&&a===n-1&&(a=n-2,o=1);let l,h;this.closed||a>0?l=r[(a-1)%n]:(rh.subVectors(r[0],r[1]).add(r[0]),l=rh);let u=r[a%n],d=r[(a+1)%n];if(this.closed||a+2<n?h=r[(a+2)%n]:(ih.subVectors(r[n-1],r[n-2]).add(r[n-1]),h=ih),this.curveType==="centripetal"||this.curveType==="chordal"){let c=this.curveType==="chordal"?.5:.25,p=Math.pow(l.distanceToSquared(u),c),g=Math.pow(u.distanceToSquared(d),c),v=Math.pow(d.distanceToSquared(h),c);g<1e-4&&(g=1),p<1e-4&&(p=g),v<1e-4&&(v=g),Ca.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,p,g,v),Ra.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,p,g,v),Ia.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,p,g,v)}else this.curveType==="catmullrom"&&(Ca.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ra.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ia.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(Ca.calc(o),Ra.calc(o),Ia.calc(o)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function nh(t,e,i,r,n){let s=(r-e)*.5,a=(n-i)*.5,o=t*t,l=t*o;return(2*i-2*r+s+a)*l+(-3*i+3*r-2*s-a)*o+s*t+i}function xp(t,e){let i=1-t;return i*i*e}function bp(t,e){return 2*(1-t)*t*e}function Mp(t,e){return t*t*e}function bn(t,e,i,r){return xp(t,e)+bp(t,i)+Mp(t,r)}function Sp(t,e){let i=1-t;return i*i*i*e}function wp(t,e){let i=1-t;return 3*i*i*t*e}function Ep(t,e){return 3*(1-t)*t*t*e}function Tp(t,e){return t*t*t*e}function Mn(t,e,i,r,n){return Sp(t,e)+wp(t,i)+Ep(t,r)+Tp(t,n)}var Ec=class extends gi{constructor(t=new de,e=new de,i=new de,r=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new de){let i=e,r=this.v0,n=this.v1,s=this.v2,a=this.v3;return i.set(Mn(t,r.x,n.x,s.x,a.x),Mn(t,r.y,n.y,s.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ap=class extends gi{constructor(t=new L,e=new L,i=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new L){let i=e,r=this.v0,n=this.v1,s=this.v2,a=this.v3;return i.set(Mn(t,r.x,n.x,s.x,a.x),Mn(t,r.y,n.y,s.y,a.y),Mn(t,r.z,n.z,s.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Tc=class extends gi{constructor(t=new de,e=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new de){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new de){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cp=class extends gi{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ac=class extends gi{constructor(t=new de,e=new de,i=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new de){let i=e,r=this.v0,n=this.v1,s=this.v2;return i.set(bn(t,r.x,n.x,s.x),bn(t,r.y,n.y,s.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cc=class extends gi{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){let i=e,r=this.v0,n=this.v1,s=this.v2;return i.set(bn(t,r.x,n.x,s.x),bn(t,r.y,n.y,s.y),bn(t,r.z,n.z,s.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rc=class extends gi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new de){let i=e,r=this.points,n=(r.length-1)*t,s=Math.floor(n),a=n-s,o=r[s===0?s:s-1],l=r[s],h=r[s>r.length-2?r.length-1:s+1],u=r[s>r.length-3?r.length-1:s+2];return i.set(nh(a,o.x,l.x,h.x,u.x),nh(a,o.y,l.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let r=t.points[e];this.points.push(new de().fromArray(r))}return this}},Ds=Object.freeze({__proto__:null,ArcCurve:_p,CatmullRomCurve3:yp,CubicBezierCurve:Ec,CubicBezierCurve3:Ap,EllipseCurve:qo,LineCurve:Tc,LineCurve3:Cp,QuadraticBezierCurve:Ac,QuadraticBezierCurve3:Cc,SplineCurve:Rc}),Rp=class extends gi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ds[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),r=this.getCurveLengths(),n=0;for(;n<r.length;){if(r[n]>=i){let s=r[n]-i,a=this.curves[n],o=a.getLength(),l=o===0?0:1-s/o;return a.getPointAt(l,e)}n++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let r=0,n=this.curves;r<n.length;r++){let s=n[r],a=s.isEllipseCurve?t*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?t*s.points.length:t,o=s.getPoints(a);for(let l=0;l<o.length;l++){let h=o[l];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let r=t.curves[e];this.curves.push(new Ds[r.type]().fromJSON(r))}return this}},sh=class extends Rp{constructor(t){super(),this.type="Path",this.currentPoint=new de,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new Tc(this.currentPoint.clone(),new de(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,r){let n=new Ac(this.currentPoint.clone(),new de(t,e),new de(i,r));return this.curves.push(n),this.currentPoint.set(i,r),this}bezierCurveTo(t,e,i,r,n,s){let a=new Ec(this.currentPoint.clone(),new de(t,e),new de(i,r),new de(n,s));return this.curves.push(a),this.currentPoint.set(n,s),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Rc(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,r,n,s){let a=this.currentPoint.x,o=this.currentPoint.y;return this.absarc(t+a,e+o,i,r,n,s),this}absarc(t,e,i,r,n,s){return this.absellipse(t,e,i,i,r,n,s),this}ellipse(t,e,i,r,n,s,a,o){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,i,r,n,s,a,o),this}absellipse(t,e,i,r,n,s,a,o){let l=new qo(t,e,i,r,n,s,a,o);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ic=class extends sh{constructor(t){super(t),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,r=this.holes.length;i<r;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let r=t.holes[e];this.holes.push(new sh().fromJSON(r))}return this}};function Ip(t,e,i=2){let r=e&&e.length,n=r?e[0]*i:t.length,s=Pc(t,0,n,i,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,h;if(r&&(s=Bp(t,e,s,i)),t.length>80*i){o=t[0],l=t[1];let u=o,d=l;for(let c=i;c<n;c+=i){let p=t[c],g=t[c+1];p<o&&(o=p),g<l&&(l=g),p>u&&(u=p),g>d&&(d=g)}h=Math.max(u-o,d-l),h=h!==0?32767/h:0}return In(s,a,i,o,l,h,0),a}function Pc(t,e,i,r,n){let s;if(n===Xp(t,e,i,r)>0)for(let a=e;a<i;a+=r)s=ah(a/r|0,t[a],t[a+1],s);else for(let a=i-r;a>=e;a-=r)s=ah(a/r|0,t[a],t[a+1],s);return s&&tn(s,s.next)&&(Ln(s),s=s.next),s}function dr(t,e){if(!t)return t;e||(e=t);let i=t,r;do if(r=!1,!i.steiner&&(tn(i,i.next)||vt(i.prev,i,i.next)===0)){if(Ln(i),i=e=i.prev,i===i.next)break;r=!0}else i=i.next;while(r||i!==e);return e}function In(t,e,i,r,n,s,a){if(!t)return;!a&&s&&Vp(t,r,n,s);let o=t;for(;t.prev!==t.next;){let l=t.prev,h=t.next;if(s?Lp(t,r,n,s):Pp(t)){e.push(l.i,t.i,h.i),Ln(t),t=h.next,o=h.next;continue}if(t=h,t===o){a?a===1?(t=Np(dr(t),e),In(t,e,i,r,n,s,2)):a===2&&Dp(t,e,i,r,n,s):In(dr(t),e,i,r,n,s,1);break}}}function Pp(t){let e=t.prev,i=t,r=t.next;if(vt(e,i,r)>=0)return!1;let n=e.x,s=i.x,a=r.x,o=e.y,l=i.y,h=r.y,u=Math.min(n,s,a),d=Math.min(o,l,h),c=Math.max(n,s,a),p=Math.max(o,l,h),g=r.next;for(;g!==e;){if(g.x>=u&&g.x<=c&&g.y>=d&&g.y<=p&&vn(n,o,s,l,a,h,g.x,g.y)&&vt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Lp(t,e,i,r){let n=t.prev,s=t,a=t.next;if(vt(n,s,a)>=0)return!1;let o=n.x,l=s.x,h=a.x,u=n.y,d=s.y,c=a.y,p=Math.min(o,l,h),g=Math.min(u,d,c),v=Math.max(o,l,h),m=Math.max(u,d,c),f=Co(p,g,e,i,r),y=Co(v,m,e,i,r),b=t.prevZ,_=t.nextZ;for(;b&&b.z>=f&&_&&_.z<=y;){if(b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==n&&b!==a&&vn(o,u,l,d,h,c,b.x,b.y)&&vt(b.prev,b,b.next)>=0||(b=b.prevZ,_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==a&&vn(o,u,l,d,h,c,_.x,_.y)&&vt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;b&&b.z>=f;){if(b.x>=p&&b.x<=v&&b.y>=g&&b.y<=m&&b!==n&&b!==a&&vn(o,u,l,d,h,c,b.x,b.y)&&vt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;_&&_.z<=y;){if(_.x>=p&&_.x<=v&&_.y>=g&&_.y<=m&&_!==n&&_!==a&&vn(o,u,l,d,h,c,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Np(t,e){let i=t;do{let r=i.prev,n=i.next.next;!tn(r,n)&&Nc(r,i,i.next,n)&&Pn(r,n)&&Pn(n,r)&&(e.push(r.i,i.i,n.i),Ln(i),Ln(i.next),i=t=n),i=i.next}while(i!==t);return dr(i)}function Dp(t,e,i,r,n,s){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Hp(a,o)){let l=Dc(a,o);a=dr(a,a.next),l=dr(l,l.next),In(a,e,i,r,n,s,0),In(l,e,i,r,n,s,0);return}o=o.next}a=a.next}while(a!==t)}function Bp(t,e,i,r){let n=[];for(let s=0,a=e.length;s<a;s++){let o=e[s]*r,l=s<a-1?e[s+1]*r:t.length,h=Pc(t,o,l,r,!1);h===h.next&&(h.steiner=!0),n.push(kp(h))}n.sort(Up);for(let s=0;s<n.length;s++)i=Fp(n[s],i);return i}function Up(t,e){let i=t.x-e.x;if(i===0&&(i=t.y-e.y,i===0)){let r=(t.next.y-t.y)/(t.next.x-t.x),n=(e.next.y-e.y)/(e.next.x-e.x);i=r-n}return i}function Fp(t,e){let i=Op(t,e);if(!i)return e;let r=Dc(i,t);return dr(r,r.next),dr(i,i.next)}function Op(t,e){let i=e,r=t.x,n=t.y,s=-1/0,a;if(tn(t,i))return i;do{if(tn(t,i.next))return i.next;if(n<=i.y&&n>=i.next.y&&i.next.y!==i.y){let d=i.x+(n-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(d<=r&&d>s&&(s=d,a=i.x<i.next.x?i:i.next,d===r))return a}i=i.next}while(i!==e);if(!a)return null;let o=a,l=a.x,h=a.y,u=1/0;i=a;do{if(r>=i.x&&i.x>=l&&r!==i.x&&Lc(n<h?r:s,n,l,h,n<h?s:r,n,i.x,i.y)){let d=Math.abs(n-i.y)/(r-i.x);Pn(i,t)&&(d<u||d===u&&(i.x>a.x||i.x===a.x&&zp(a,i)))&&(a=i,u=d)}i=i.next}while(i!==o);return a}function zp(t,e){return vt(t.prev,t,e.prev)<0&&vt(e.next,t,t.next)<0}function Vp(t,e,i,r){let n=t;do n.z===0&&(n.z=Co(n.x,n.y,e,i,r)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==t);n.prevZ.nextZ=null,n.prevZ=null,Gp(n)}function Gp(t){let e,i=1;do{let r=t,n;t=null;let s=null;for(e=0;r;){e++;let a=r,o=0;for(let h=0;h<i&&(o++,a=a.nextZ,!!a);h++);let l=i;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||r.z<=a.z)?(n=r,r=r.nextZ,o--):(n=a,a=a.nextZ,l--),s?s.nextZ=n:t=n,n.prevZ=s,s=n;r=a}s.nextZ=null,i*=2}while(e>1);return t}function Co(t,e,i,r,n){return t=(t-i)*n|0,e=(e-r)*n|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function kp(t){let e=t,i=t;do(e.x<i.x||e.x===i.x&&e.y<i.y)&&(i=e),e=e.next;while(e!==t);return i}function Lc(t,e,i,r,n,s,a,o){return(n-a)*(e-o)>=(t-a)*(s-o)&&(t-a)*(r-o)>=(i-a)*(e-o)&&(i-a)*(s-o)>=(n-a)*(r-o)}function vn(t,e,i,r,n,s,a,o){return!(t===a&&e===o)&&Lc(t,e,i,r,n,s,a,o)}function Hp(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!Wp(t,e)&&(Pn(t,e)&&Pn(e,t)&&qp(t,e)&&(vt(t.prev,t,e.prev)||vt(t,e.prev,e))||tn(t,e)&&vt(t.prev,t,t.next)>0&&vt(e.prev,e,e.next)>0)}function vt(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)}function tn(t,e){return t.x===e.x&&t.y===e.y}function Nc(t,e,i,r){let n=gs(vt(t,e,i)),s=gs(vt(t,e,r)),a=gs(vt(i,r,t)),o=gs(vt(i,r,e));return!!(n!==s&&a!==o||n===0&&ms(t,i,e)||s===0&&ms(t,r,e)||a===0&&ms(i,t,r)||o===0&&ms(i,e,r))}function ms(t,e,i){return e.x<=Math.max(t.x,i.x)&&e.x>=Math.min(t.x,i.x)&&e.y<=Math.max(t.y,i.y)&&e.y>=Math.min(t.y,i.y)}function gs(t){return t>0?1:t<0?-1:0}function Wp(t,e){let i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&Nc(i,i.next,t,e))return!0;i=i.next}while(i!==t);return!1}function Pn(t,e){return vt(t.prev,t,t.next)<0?vt(t,e,t.next)>=0&&vt(t,t.prev,e)>=0:vt(t,e,t.prev)<0||vt(t,t.next,e)<0}function qp(t,e){let i=t,r=!1,n=(t.x+e.x)/2,s=(t.y+e.y)/2;do i.y>s!=i.next.y>s&&i.next.y!==i.y&&n<(i.next.x-i.x)*(s-i.y)/(i.next.y-i.y)+i.x&&(r=!r),i=i.next;while(i!==t);return r}function Dc(t,e){let i=Ro(t.i,t.x,t.y),r=Ro(e.i,e.x,e.y),n=t.next,s=e.prev;return t.next=e,e.prev=t,i.next=n,n.prev=i,r.next=i,i.prev=r,s.next=r,r.prev=s,r}function ah(t,e,i,r){let n=Ro(t,e,i);return r?(n.next=r.next,n.prev=r,r.next.prev=n,r.next=n):(n.prev=n,n.next=n),n}function Ln(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Ro(t,e,i){return{i:t,x:e,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Xp(t,e,i,r){let n=0;for(let s=e,a=i-r;s<i;s+=r)n+=(t[a]-t[s])*(t[s+1]+t[a+1]),a=s;return n}var jp=class{static triangulate(t,e,i=2){return Ip(t,e,i)}},or=class Bc{static area(e){let i=e.length,r=0;for(let n=i-1,s=0;s<i;n=s++)r+=e[n].x*e[s].y-e[s].x*e[n].y;return r*.5}static isClockWise(e){return Bc.area(e)<0}static triangulateShape(e,i){let r=[],n=[],s=[];oh(e),lh(r,e);let a=e.length;i.forEach(oh);for(let l=0;l<i.length;l++)n.push(a),a+=i[l].length,lh(r,i[l]);let o=jp.triangulate(r,n);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function oh(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function lh(t,e){for(let i=0;i<e.length;i++)t.push(e[i].x),t.push(e[i].y)}var Yp=class Uc extends Mt{constructor(e=new Ic([new de(.5,.5),new de(-.5,.5),new de(-.5,-.5),new de(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:i},e=Array.isArray(e)?e:[e];let r=this,n=[],s=[];for(let o=0,l=e.length;o<l;o++){let h=e[o];a(h)}this.setAttribute("position",new We(n,3)),this.setAttribute("uv",new We(s,2)),this.computeVertexNormals();function a(o){let l=[],h=i.curveSegments!==void 0?i.curveSegments:12,u=i.steps!==void 0?i.steps:1,d=i.depth!==void 0?i.depth:1,c=i.bevelEnabled!==void 0?i.bevelEnabled:!0,p=i.bevelThickness!==void 0?i.bevelThickness:.2,g=i.bevelSize!==void 0?i.bevelSize:p-.1,v=i.bevelOffset!==void 0?i.bevelOffset:0,m=i.bevelSegments!==void 0?i.bevelSegments:3,f=i.extrudePath,y=i.UVGenerator!==void 0?i.UVGenerator:Zp,b,_=!1,M,T,C,x;if(f){b=f.getSpacedPoints(u),_=!0,c=!1;let re=f.isCatmullRomCurve3?f.closed:!1;M=f.computeFrenetFrames(u,re),T=new L,C=new L,x=new L}c||(m=0,p=0,g=0,v=0);let S=o.extractPoints(h),N=S.shape,P=S.holes;if(!or.isClockWise(N)){N=N.reverse();for(let re=0,ie=P.length;re<ie;re++){let ue=P[re];or.isClockWise(ue)&&(P[re]=ue.reverse())}}function B(re){let ie=10000000000000001e-36,ue=re[0];for(let be=1;be<=re.length;be++){let ee=be%re.length,se=re[ee],_e=se.x-ue.x,Te=se.y-ue.y,Fe=_e*_e+Te*Te,U=Math.max(Math.abs(se.x),Math.abs(se.y),Math.abs(ue.x),Math.abs(ue.y)),Je=ie*U*U;if(Fe<=Je){re.splice(ee,1),be--;continue}ue=se}}B(N),P.forEach(B);let F=P.length,I=N;for(let re=0;re<F;re++){let ie=P[re];N=N.concat(ie)}function D(re,ie,ue){return ie||He("ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(ie,ue)}let z=N.length;function H(re,ie,ue){let be,ee,se,_e=re.x-ie.x,Te=re.y-ie.y,Fe=ue.x-re.x,U=ue.y-re.y,Je=_e*_e+Te*Te,Ye=_e*U-Te*Fe;if(Math.abs(Ye)>Number.EPSILON){let Ze=Math.sqrt(Je),R=Math.sqrt(Fe*Fe+U*U),w=ie.x-Te/Ze,O=ie.y+_e/Ze,X=ue.x-U/R,Q=ue.y+Fe/R,pe=((X-w)*U-(Q-O)*Fe)/(_e*U-Te*Fe);be=w+_e*pe-re.x,ee=O+Te*pe-re.y;let ve=be*be+ee*ee;if(ve<=2)return new de(be,ee);se=Math.sqrt(ve/2)}else{let Ze=!1;_e>Number.EPSILON?Fe>Number.EPSILON&&(Ze=!0):_e<-Number.EPSILON?Fe<-Number.EPSILON&&(Ze=!0):Math.sign(Te)===Math.sign(U)&&(Ze=!0),Ze?(be=-Te,ee=_e,se=Math.sqrt(Je)):(be=_e,ee=Te,se=Math.sqrt(Je/2))}return new de(be/se,ee/se)}let $=[];for(let re=0,ie=I.length,ue=ie-1,be=re+1;re<ie;re++,ue++,be++)ue===ie&&(ue=0),be===ie&&(be=0),$[re]=H(I[re],I[ue],I[be]);let W=[],Z,K=$.concat();for(let re=0,ie=F;re<ie;re++){let ue=P[re];Z=[];for(let be=0,ee=ue.length,se=ee-1,_e=be+1;be<ee;be++,se++,_e++)se===ee&&(se=0),_e===ee&&(_e=0),Z[be]=H(ue[be],ue[se],ue[_e]);W.push(Z),K=K.concat(Z)}let oe;if(m===0)oe=or.triangulateShape(I,P);else{let re=[],ie=[];for(let ue=0;ue<m;ue++){let be=ue/m,ee=p*Math.cos(be*Math.PI/2),se=g*Math.sin(be*Math.PI/2)+v;for(let _e=0,Te=I.length;_e<Te;_e++){let Fe=D(I[_e],$[_e],se);le(Fe.x,Fe.y,-ee),be===0&&re.push(Fe)}for(let _e=0,Te=F;_e<Te;_e++){let Fe=P[_e];Z=W[_e];let U=[];for(let Je=0,Ye=Fe.length;Je<Ye;Je++){let Ze=D(Fe[Je],Z[Je],se);le(Ze.x,Ze.y,-ee),be===0&&U.push(Ze)}be===0&&ie.push(U)}}oe=or.triangulateShape(re,ie)}let Se=oe.length,rt=g+v;for(let re=0;re<z;re++){let ie=c?D(N[re],K[re],rt):N[re];_?(C.copy(M.normals[0]).multiplyScalar(ie.x),T.copy(M.binormals[0]).multiplyScalar(ie.y),x.copy(b[0]).add(C).add(T),le(x.x,x.y,x.z)):le(ie.x,ie.y,0)}for(let re=1;re<=u;re++)for(let ie=0;ie<z;ie++){let ue=c?D(N[ie],K[ie],rt):N[ie];_?(C.copy(M.normals[re]).multiplyScalar(ue.x),T.copy(M.binormals[re]).multiplyScalar(ue.y),x.copy(b[re]).add(C).add(T),le(x.x,x.y,x.z)):le(ue.x,ue.y,d/u*re)}for(let re=m-1;re>=0;re--){let ie=re/m,ue=p*Math.cos(ie*Math.PI/2),be=g*Math.sin(ie*Math.PI/2)+v;for(let ee=0,se=I.length;ee<se;ee++){let _e=D(I[ee],$[ee],be);le(_e.x,_e.y,d+ue)}for(let ee=0,se=P.length;ee<se;ee++){let _e=P[ee];Z=W[ee];for(let Te=0,Fe=_e.length;Te<Fe;Te++){let U=D(_e[Te],Z[Te],be);_?le(U.x,U.y+b[u-1].y,b[u-1].x+ue):le(U.x,U.y,d+ue)}}}ze(),J();function ze(){let re=n.length/3;if(c){let ie=0,ue=z*ie;for(let be=0;be<Se;be++){let ee=oe[be];Pe(ee[2]+ue,ee[1]+ue,ee[0]+ue)}ie=u+m*2,ue=z*ie;for(let be=0;be<Se;be++){let ee=oe[be];Pe(ee[0]+ue,ee[1]+ue,ee[2]+ue)}}else{for(let ie=0;ie<Se;ie++){let ue=oe[ie];Pe(ue[2],ue[1],ue[0])}for(let ie=0;ie<Se;ie++){let ue=oe[ie];Pe(ue[0]+z*u,ue[1]+z*u,ue[2]+z*u)}}r.addGroup(re,n.length/3-re,0)}function J(){let re=n.length/3,ie=0;ne(I,ie),ie+=I.length;for(let ue=0,be=P.length;ue<be;ue++){let ee=P[ue];ne(ee,ie),ie+=ee.length}r.addGroup(re,n.length/3-re,1)}function ne(re,ie){let ue=re.length;for(;--ue>=0;){let be=ue,ee=ue-1;ee<0&&(ee=re.length-1);for(let se=0,_e=u+m*2;se<_e;se++){let Te=z*se,Fe=z*(se+1),U=ie+be+Te,Je=ie+ee+Te,Ye=ie+ee+Fe,Ze=ie+be+Fe;Ue(U,Je,Ye,Ze)}}}function le(re,ie,ue){l.push(re),l.push(ie),l.push(ue)}function Pe(re,ie,ue){ge(re),ge(ie),ge(ue);let be=n.length/3,ee=y.generateTopUV(r,n,be-3,be-2,be-1);qe(ee[0]),qe(ee[1]),qe(ee[2])}function Ue(re,ie,ue,be){ge(re),ge(ie),ge(be),ge(ie),ge(ue),ge(be);let ee=n.length/3,se=y.generateSideWallUV(r,n,ee-6,ee-3,ee-2,ee-1);qe(se[0]),qe(se[1]),qe(se[3]),qe(se[1]),qe(se[2]),qe(se[3])}function ge(re){n.push(l[re*3+0]),n.push(l[re*3+1]),n.push(l[re*3+2])}function qe(re){s.push(re.x),s.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),i=this.parameters.shapes,r=this.parameters.options;return Kp(i,r,e)}static fromJSON(e,i){let r=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=i[e.shapes[s]];r.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Ds[n.type]().fromJSON(n)),new Uc(r,e.options)}},Zp={generateTopUV:function(t,e,i,r,n){let s=e[i*3],a=e[i*3+1],o=e[r*3],l=e[r*3+1],h=e[n*3],u=e[n*3+1];return[new de(s,a),new de(o,l),new de(h,u)]},generateSideWallUV:function(t,e,i,r,n,s){let a=e[i*3],o=e[i*3+1],l=e[i*3+2],h=e[r*3],u=e[r*3+1],d=e[r*3+2],c=e[n*3],p=e[n*3+1],g=e[n*3+2],v=e[s*3],m=e[s*3+1],f=e[s*3+2];return Math.abs(o-u)<Math.abs(a-h)?[new de(a,1-l),new de(h,1-d),new de(c,1-g),new de(v,1-f)]:[new de(o,1-l),new de(u,1-d),new de(p,1-g),new de(m,1-f)]}};function Kp(t,e,i){if(i.shapes=[],Array.isArray(t))for(let r=0,n=t.length;r<n;r++){let s=t[r];i.shapes.push(s.uuid)}else i.shapes.push(t.uuid);return i.options=Object.assign({},e),e.extrudePath!==void 0&&(i.options.extrudePath=e.extrudePath.toJSON()),i}var Jp=class Fc extends Bn{constructor(e=1,i=0){let r=(1+Math.sqrt(5))/2,n=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,s,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Fc(e.radius,e.detail)}},$p=class Oc extends Mt{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],i=12,r=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:i,phiStart:r,phiLength:n},i=Math.floor(i),n=et(n,0,Math.PI*2);let s=[],a=[],o=[],l=[],h=[],u=1/i,d=new L,c=new de,p=new L,g=new L,v=new L,m=0,f=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,p.x=f*1,p.y=-m,p.z=f*0,v.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,f=e[y+1].y-e[y].y,p.x=f*1,p.y=-m,p.z=f*0,g.copy(p),p.x+=v.x,p.y+=v.y,p.z+=v.z,p.normalize(),l.push(p.x,p.y,p.z),v.copy(g)}for(let y=0;y<=i;y++){let b=r+y*u*n,_=Math.sin(b),M=Math.cos(b);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*_,d.y=e[T].y,d.z=e[T].x*M,a.push(d.x,d.y,d.z),c.x=y/i,c.y=T/(e.length-1),o.push(c.x,c.y);let C=l[3*T+0]*_,x=l[3*T+1],S=l[3*T+0]*M;h.push(C,x,S)}}for(let y=0;y<i;y++)for(let b=0;b<e.length-1;b++){let _=b+y*e.length,M=_,T=_+e.length,C=_+e.length+1,x=_+1;s.push(M,T,x),s.push(C,x,T)}this.setIndex(s),this.setAttribute("position",new We(a,3)),this.setAttribute("uv",new We(o,2)),this.setAttribute("normal",new We(h,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oc(e.points,e.segments,e.phiStart,e.phiLength)}},Qp=class zc extends Bn{constructor(e=1,i=0){let r=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(r,n,e,i),this.type="OctahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new zc(e.radius,e.detail)}},nn=class Vc extends Mt{constructor(e=1,i=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:n};let s=e/2,a=i/2,o=Math.floor(r),l=Math.floor(n),h=o+1,u=l+1,d=e/o,c=i/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){let y=f*c-a;for(let b=0;b<h;b++){let _=b*d-s;g.push(_,-y,0),v.push(0,0,1),m.push(b/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){let b=y+h*f,_=y+h*(f+1),M=y+1+h*(f+1),T=y+1+h*f;p.push(b,_,T),p.push(_,M,T)}this.setIndex(p),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.width,e.height,e.widthSegments,e.heightSegments)}},ef=class Gc extends Mt{constructor(e=.5,i=1,r=32,n=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:n,thetaStart:s,thetaLength:a},r=Math.max(3,r),n=Math.max(1,n);let o=[],l=[],h=[],u=[],d=e,c=(i-e)/n,p=new L,g=new de;for(let v=0;v<=n;v++){for(let m=0;m<=r;m++){let f=s+m/r*a;p.x=d*Math.cos(f),p.y=d*Math.sin(f),l.push(p.x,p.y,p.z),h.push(0,0,1),g.x=(p.x/i+1)/2,g.y=(p.y/i+1)/2,u.push(g.x,g.y)}d+=c}for(let v=0;v<n;v++){let m=v*(r+1);for(let f=0;f<r;f++){let y=f+m,b=y,_=y+r+1,M=y+r+2,T=y+1;o.push(b,_,T),o.push(_,M,T)}}this.setIndex(o),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},tf=class kc extends Mt{constructor(e=new Ic([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:i};let r=[],n=[],s=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)h(e);else for(let u=0;u<e.length;u++)h(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(r),this.setAttribute("position",new We(n,3)),this.setAttribute("normal",new We(s,3)),this.setAttribute("uv",new We(a,2));function h(u){let d=n.length/3,c=u.extractPoints(i),p=c.shape,g=c.holes;or.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,f=g.length;m<f;m++){let y=g[m];or.isClockWise(y)===!0&&(g[m]=y.reverse())}let v=or.triangulateShape(p,g);for(let m=0,f=g.length;m<f;m++){let y=g[m];p=p.concat(y)}for(let m=0,f=p.length;m<f;m++){let y=p[m];n.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let m=0,f=v.length;m<f;m++){let y=v[m],b=y[0]+d,_=y[1]+d,M=y[2]+d;r.push(b,_,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),i=this.parameters.shapes;return rf(i,e)}static fromJSON(e,i){let r=[];for(let n=0,s=e.shapes.length;n<s;n++){let a=i[e.shapes[n]];r.push(a)}return new kc(r,e.curveSegments)}};function rf(t,e){if(e.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let n=t[i];e.shapes.push(n.uuid)}else e.shapes.push(t.uuid);return e}var nf=class Hc extends Mt{constructor(e=1,i=32,r=16,n=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:n,phiLength:s,thetaStart:a,thetaLength:o},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));let l=Math.min(a+o,Math.PI),h=0,u=[],d=new L,c=new L,p=[],g=[],v=[],m=[];for(let f=0;f<=r;f++){let y=[],b=f/r,_=a+b*o,M=e*Math.cos(_),T=Math.sqrt(e*e-M*M),C=0;f===0&&a===0?C=.5/i:f===r&&l===Math.PI&&(C=-.5/i);for(let x=0;x<=i;x++){let S=x/i,N=n+S*s;d.x=-T*Math.cos(N),d.y=M,d.z=T*Math.sin(N),g.push(d.x,d.y,d.z),c.copy(d).normalize(),v.push(c.x,c.y,c.z),m.push(S+C,1-b),y.push(h++)}u.push(y)}for(let f=0;f<r;f++)for(let y=0;y<i;y++){let b=u[f][y+1],_=u[f][y],M=u[f+1][y],T=u[f+1][y+1];(f!==0||a>0)&&p.push(b,_,T),(f!==r-1||l<Math.PI)&&p.push(_,M,T)}this.setIndex(p),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(v,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},sf=class Wc extends Bn{constructor(e=1,i=0){let r=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(r,n,e,i),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new Wc(e.radius,e.detail)}},jo=class qc extends Mt{constructor(e=1,i=.4,r=12,n=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:r,tubularSegments:n,arc:s,thetaStart:a,thetaLength:o},r=Math.floor(r),n=Math.floor(n);let l=[],h=[],u=[],d=[],c=new L,p=new L,g=new L;for(let v=0;v<=r;v++){let m=a+v/r*o;for(let f=0;f<=n;f++){let y=f/n*s;p.x=(e+i*Math.cos(m))*Math.cos(y),p.y=(e+i*Math.cos(m))*Math.sin(y),p.z=i*Math.sin(m),h.push(p.x,p.y,p.z),c.x=e*Math.cos(y),c.y=e*Math.sin(y),g.subVectors(p,c).normalize(),u.push(g.x,g.y,g.z),d.push(f/n),d.push(v/r)}}for(let v=1;v<=r;v++)for(let m=1;m<=n;m++){let f=(n+1)*v+m-1,y=(n+1)*(v-1)+m-1,b=(n+1)*(v-1)+m,_=(n+1)*v+m;l.push(f,y,_),l.push(y,b,_)}this.setIndex(l),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},af=class Xc extends Mt{constructor(e=1,i=.4,r=64,n=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:i,tubularSegments:r,radialSegments:n,p:s,q:a},r=Math.floor(r),n=Math.floor(n);let o=[],l=[],h=[],u=[],d=new L,c=new L,p=new L,g=new L,v=new L,m=new L,f=new L;for(let b=0;b<=r;++b){let _=b/r*s*Math.PI*2;y(_,s,a,e,p),y(_+.01,s,a,e,g),m.subVectors(g,p),f.addVectors(g,p),v.crossVectors(m,f),f.crossVectors(v,m),v.normalize(),f.normalize();for(let M=0;M<=n;++M){let T=M/n*Math.PI*2,C=-i*Math.cos(T),x=i*Math.sin(T);d.x=p.x+(C*f.x+x*v.x),d.y=p.y+(C*f.y+x*v.y),d.z=p.z+(C*f.z+x*v.z),l.push(d.x,d.y,d.z),c.subVectors(d,p).normalize(),h.push(c.x,c.y,c.z),u.push(b/r),u.push(M/n)}}for(let b=1;b<=r;b++)for(let _=1;_<=n;_++){let M=(n+1)*(b-1)+(_-1),T=(n+1)*b+(_-1),C=(n+1)*b+_,x=(n+1)*(b-1)+_;o.push(M,T,x),o.push(T,C,x)}this.setIndex(o),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(h,3)),this.setAttribute("uv",new We(u,2));function y(b,_,M,T,C){let x=Math.cos(b),S=Math.sin(b),N=M/_*b,P=Math.cos(N);C.x=T*(2+P)*.5*x,C.y=T*(2+P)*S*.5,C.z=T*Math.sin(N)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},of=class jc extends Mt{constructor(e=new Cc(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),i=64,r=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:i,radius:r,radialSegments:n,closed:s};let a=e.computeFrenetFrames(i,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new L,l=new L,h=new de,u=new L,d=[],c=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new We(d,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(p,2));function v(){for(let b=0;b<i;b++)m(b);m(s===!1?i:0),y(),f()}function m(b){u=e.getPointAt(b/i,u);let _=a.normals[b],M=a.binormals[b];for(let T=0;T<=n;T++){let C=T/n*Math.PI*2,x=Math.sin(C),S=-Math.cos(C);l.x=S*_.x+x*M.x,l.y=S*_.y+x*M.y,l.z=S*_.z+x*M.z,l.normalize(),c.push(l.x,l.y,l.z),o.x=u.x+r*l.x,o.y=u.y+r*l.y,o.z=u.z+r*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let b=1;b<=i;b++)for(let _=1;_<=n;_++){let M=(n+1)*(b-1)+(_-1),T=(n+1)*b+(_-1),C=(n+1)*b+_,x=(n+1)*(b-1)+_;g.push(M,T,x),g.push(T,C,x)}}function y(){for(let b=0;b<=i;b++)for(let _=0;_<=n;_++)h.x=b/i,h.y=_/n,p.push(h.x,h.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new jc(new Ds[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}},lf=class extends Mt{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,r=new L,n=new L;if(t.index!==null){let s=t.attributes.position,a=t.index,o=t.groups;o.length===0&&(o=[{start:0,count:a.count,materialIndex:0}]);for(let l=0,h=o.length;l<h;++l){let u=o[l],d=u.start,c=u.count;for(let p=d,g=d+c;p<g;p+=3)for(let v=0;v<3;v++){let m=a.getX(p+v),f=a.getX(p+(v+1)%3);r.fromBufferAttribute(s,m),n.fromBufferAttribute(s,f),hh(r,n,i)===!0&&(e.push(r.x,r.y,r.z),e.push(n.x,n.y,n.z))}}}else{let s=t.attributes.position;for(let a=0,o=s.count/3;a<o;a++)for(let l=0;l<3;l++){let h=3*a+l,u=3*a+(l+1)%3;r.fromBufferAttribute(s,h),n.fromBufferAttribute(s,u),hh(r,n,i)===!0&&(e.push(r.x,r.y,r.z),e.push(n.x,n.y,n.z))}}this.setAttribute("position",new We(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function hh(t,e,i){let r=`${t.x},${t.y},${t.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${t.x},${t.y},${t.z}`;return i.has(r)===!0||i.has(n)===!0?!1:(i.add(r),i.add(n),!0)}var Ub=Object.freeze({__proto__:null,BoxGeometry:ri,CapsuleGeometry:fp,CircleGeometry:mp,ConeGeometry:Wo,CylinderGeometry:Os,DodecahedronGeometry:gp,EdgesGeometry:vp,ExtrudeGeometry:Yp,IcosahedronGeometry:Jp,LatheGeometry:$p,OctahedronGeometry:Qp,PlaneGeometry:nn,PolyhedronGeometry:Bn,RingGeometry:ef,ShapeGeometry:tf,SphereGeometry:nf,TetrahedronGeometry:sf,TorusGeometry:jo,TorusKnotGeometry:af,TubeGeometry:of,WireframeGeometry:lf});function rn(t){let e={};for(let i in t){e[i]={};for(let r in t[i]){let n=t[i][r];if(ch(n))n.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=n.clone();else if(Array.isArray(n))if(ch(n[0])){let s=[];for(let a=0,o=n.length;a<o;a++)s[a]=n[a].clone();e[i][r]=s}else e[i][r]=n.slice();else e[i][r]=n}}return e}function Ot(t){let e={};for(let i=0;i<t.length;i++){let r=rn(t[i]);for(let n in r)e[n]=r[n]}return e}function ch(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function hf(t){let e=[];for(let i=0;i<t.length;i++)e.push(t[i].clone());return e}function Yc(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var cf={clone:rn,merge:Ot},uf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,mi=class extends Nn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uf,this.fragmentShader=df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rn(t.uniforms),this.uniformsGroups=hf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let n=this.uniforms[r].value;n&&n.isTexture?e.uniforms[r]={type:"t",value:n.toJSON(t).uuid}:n&&n.isColor?e.uniforms[r]={type:"c",value:n.getHex()}:n&&n.isVector2?e.uniforms[r]={type:"v2",value:n.toArray()}:n&&n.isVector3?e.uniforms[r]={type:"v3",value:n.toArray()}:n&&n.isVector4?e.uniforms[r]={type:"v4",value:n.toArray()}:n&&n.isMatrix3?e.uniforms[r]={type:"m3",value:n.toArray()}:n&&n.isMatrix4?e.uniforms[r]={type:"m4",value:n.toArray()}:e.uniforms[r]={value:n}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let r=t.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=e[r.value]||null;break;case"c":this.uniforms[i].value=new Qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new de().fromArray(r.value);break;case"v3":this.uniforms[i].value=new L().fromArray(r.value);break;case"v4":this.uniforms[i].value=new mt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ke().fromArray(r.value);break;case"m4":this.uniforms[i].value=new tt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},pf=class extends mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ni=class extends Nn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ao,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ff=class extends Nn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mf=class extends Nn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Pr(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Pa(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}var Un=class{constructor(t,e,i,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,r=e[i],n=e[i-1];i:{e:{let s;t:{r:if(!(t<r)){for(let a=i+2;;){if(r===void 0){if(t<n)break r;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(n=r,r=e[++i],t<r)break e}s=e.length;break t}if(!(t>=n)){let a=e[1];t<a&&(i=2,n=a);for(let o=i-2;;){if(n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===o)break;if(r=n,n=e[--i-1],t>=n)break e}s=i,i=0;break t}break i}for(;i<s;){let a=i+s>>>1;t<e[a]?s=a:i=a+1}if(r=e[i],n=e[i-1],n===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,n,r)}return this.interpolate_(i,n,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,r=this.valueSize,n=t*r;for(let s=0;s!==r;++s)e[s]=i[n+s];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gf=class extends Un{constructor(t,e,i,r){super(t,e,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Dl,endingEnd:Dl}}intervalChanged_(t,e,i){let r=this.parameterPositions,n=t-2,s=t+1,a=r[n],o=r[s];if(a===void 0)switch(this.getSettings_().endingStart){case Bl:n=t,a=2*e-i;break;case Ul:n=r.length-2,a=e+r[n]-r[n+1];break;default:n=t,a=i}if(o===void 0)switch(this.getSettings_().endingEnd){case Bl:s=t,o=2*i-e;break;case Ul:s=1,o=i+r[1]-r[0];break;default:s=t-1,o=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-i),this._offsetPrev=n*h,this._offsetNext=s*h}interpolate_(t,e,i,r){let n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,c=this._weightNext,p=(i-e)/(r-e),g=p*p,v=g*p,m=-d*v+2*d*g-d*p,f=(1+d)*v+(-1.5-2*d)*g+(-.5+d)*p+1,y=(-1-c)*v+(1.5+c)*g+.5*p,b=c*v-c*g;for(let _=0;_!==a;++_)n[_]=m*s[h+_]+f*s[l+_]+y*s[o+_]+b*s[u+_];return n}},vf=class extends Un{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,h=(i-e)/(r-e),u=1-h;for(let d=0;d!==a;++d)n[d]=s[l+d]*u+s[o+d]*h;return n}},_f=class extends Un{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t){return this.copySampleValue_(t-1)}},yf=class extends Un{interpolate_(t,e,i,r){let n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let p=(i-e)/(r-e),g=1-p;for(let v=0;v!==a;++v)n[v]=s[l+v]*g+s[o+v]*p;return n}let d=a*2,c=t-1;for(let p=0;p!==a;++p){let g=s[l+p],v=s[o+p],m=c*d+p*2,f=u[m],y=u[m+1],b=t*d+p*2,_=h[b],M=h[b+1],T=bf(i,e,f,_,r);n[p]=Zc(T,g,y,M,v)}return n}};function Zc(t,e,i,r,n){let s=1-t;return s*s*s*e+3*s*s*t*i+3*s*t*t*r+t*t*t*n}function xf(t,e,i,r,n){let s=1-t;return 3*s*s*(i-e)+6*s*t*(r-i)+3*t*t*(n-r)}function bf(t,e,i,r,n){let s=(t-e)/(n-e);for(let a=0;a<8;a++){let o=Zc(s,e,i,r,n)-t;if(Math.abs(o)<1e-10)break;let l=xf(s,e,i,r,n);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-o/l))}return s}var vi=class{constructor(t,e,i,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Pr(e,this.TimeBufferType),this.values=Pr(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Pr(t.times,Array),values:Pr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(i.interpolation=r),Pa(t.settings)&&(i.settings={inTangents:Pr(t.settings.inTangents,Array),outTangents:Pr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new _f(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new vf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gf(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new yf(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ps:e=this.InterpolantFactoryMethodDiscrete;break;case To:e=this.InterpolantFactoryMethodLinear;break;case sa:e=this.InterpolantFactoryMethodSmooth;break;case Nl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return To;case this.InterpolantFactoryMethodSmooth:return sa;case this.InterpolantFactoryMethodBezier:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,r=e.length;i!==r;++i)e[i]*=t;Pa(this.settings)&&(uh(this.settings.inTangents,t),uh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,r=i.length,n=0,s=r-1;for(;n!==r&&i[n]<t;)++n;for(;s!==-1&&i[s]>e;)--s;if(++s,n!==0||s!==r){n>=s&&(s=Math.max(s,1),n=s-1);let a=this.getValueSize();this.times=i.slice(n,s),this.values=this.values.slice(n*a,s*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,r=this.values,n=i.length;n===0&&(He("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==n;a++){let o=i[a];if(typeof o=="number"&&isNaN(o)){He("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){He("KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(r!==void 0&&Md(r))for(let a=0,o=r.length;a!==o;++a){let l=r[a];if(isNaN(l)){He("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===sa,n=t.length-1,s=1;for(let a=1;a<n;++a){let o=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(r)o=!0;else{let u=a*i,d=u-i,c=u+i;for(let p=0;p!==i;++p){let g=e[u+p];if(g!==e[d+p]||g!==e[c+p]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];let u=a*i,d=s*i;for(let c=0;c!==i;++c)e[d+c]=e[u+c]}++s}}if(n>0){t[s]=t[n];for(let a=n*i,o=s*i,l=0;l!==i;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,r=new i(this.name,t,e);return r.createInterpolant=this.createInterpolant,Pa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function uh(t,e){for(let i=0,r=t.length;i!==r;i+=2)t[i]*=e}vi.prototype.ValueTypeName="";vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=To;var Fn=class extends vi{constructor(t,e,i){super(t,e,i)}};Fn.prototype.ValueTypeName="bool";Fn.prototype.ValueBufferType=Array;Fn.prototype.DefaultInterpolation=Ps;Fn.prototype.InterpolantFactoryMethodLinear=void 0;Fn.prototype.InterpolantFactoryMethodSmooth=void 0;var Mf=class extends vi{constructor(t,e,i,r){super(t,e,i,r)}};Mf.prototype.ValueTypeName="color";var Sf=class extends vi{constructor(t,e,i,r){super(t,e,i,r)}};Sf.prototype.ValueTypeName="number";var wf=class extends Un{constructor(t,e,i,r){super(t,e,i,r)}interpolate_(t,e,i,r){let n=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(i-e)/(r-e),l=t*a;for(let h=l+a;l!==h;l+=4)Di.slerpFlat(n,0,s,l-a,s,l,o);return n}},Kc=class extends vi{constructor(t,e,i,r){super(t,e,i,r)}InterpolantFactoryMethodLinear(t){return new wf(this.times,this.values,this.getValueSize(),t)}};Kc.prototype.ValueTypeName="quaternion";Kc.prototype.InterpolantFactoryMethodSmooth=void 0;var On=class extends vi{constructor(t,e,i){super(t,e,i)}};On.prototype.ValueTypeName="string";On.prototype.ValueBufferType=Array;On.prototype.DefaultInterpolation=Ps;On.prototype.InterpolantFactoryMethodLinear=void 0;On.prototype.InterpolantFactoryMethodSmooth=void 0;var Ef=class extends vi{constructor(t,e,i,r){super(t,e,i,r)}};Ef.prototype.ValueTypeName="vector";var La={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(dh(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!dh(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function dh(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Tf=class{constructor(t,e,i){let r=this,n=!1,s=0,a=0,o,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){a++,n===!1&&r.onStart!==void 0&&r.onStart(h,s,a),n=!0},this.itemEnd=function(h){s++,r.onProgress!==void 0&&r.onProgress(h,s,a),s===a&&(n=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),o?o(h):h},this.setURLModifier=function(h){return o=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let c=l[u],p=l[u+1];if(c.global&&(c.lastIndex=0),c.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Af=new Tf,Yo=class{constructor(t){this.manager=t!==void 0?t:Af,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(r,n){i.load(t,r,e,n)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Yo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Lr=new WeakMap,Cf=class extends Yo{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let n=this,s=La.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)n.manager.itemStart(t),setTimeout(function(){e&&e(s),n.manager.itemEnd(t)},0);else{let u=Lr.get(s);u===void 0&&(u=[],Lr.set(s,u)),u.push({onLoad:e,onError:r})}return s}let a=An("img");function o(){h(),e&&e(this);let u=Lr.get(this)||[];for(let d=0;d<u.length;d++){let c=u[d];c.onLoad&&c.onLoad(this)}Lr.delete(this),n.manager.itemEnd(t)}function l(u){h(),r&&r(u),La.remove(`image:${t}`);let d=Lr.get(this)||[];for(let c=0;c<d.length;c++){let p=d[c];p.onError&&p.onError(u)}Lr.delete(this),n.manager.itemError(t),n.manager.itemEnd(t)}function h(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),La.add(`image:${t}`,a),n.manager.itemStart(t),a.src=t,a}};var Jc=class extends Yo{constructor(t){super(t)}load(t,e,i,r){let n=new Xt,s=new Cf(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){n.image=a,n.needsUpdate=!0,e!==void 0&&e(n)},i,r),n}},$c=class extends qt{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Qc=class extends $c{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Na=new tt,ph=new L,fh=new L,Rf=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Wt,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new en,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(ph),fh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,r){Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Na,t.coordinateSystem,t.reversedDepth);let n=this._frameExtents,s=r?r.z/n.x:1,a=r?r.w/n.y:1,o=r?r.x/n.x:0,l=r?r.y/n.y:0;t.coordinateSystem===Tn||t.reversedDepth?e.set(.5*s,0,0,.5*s+o,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*s,0,0,.5*s+o,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Na)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},vs=new L,_s=new Di,li=new L,Zo=class extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(vs,_s,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vs,_s,li.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(vs,_s,li),li.x===1&&li.y===1&&li.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vs,_s,li.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},qi=new L,mh=new de,gh=new de,Ht=class extends Zo{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Cn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cn*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){qi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qi.x,qi.y).multiplyScalar(-t/qi.z),qi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qi.x,qi.y).multiplyScalar(-t/qi.z)}getViewSize(t,e){return this.getViewBounds(t,mh,gh),e.subVectors(gh,mh)}setViewOffset(t,e,i,r,n,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Wr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,n=-.5*r,s=this.view;if(this.view!==null&&this.view.enabled){let o=s.fullWidth,l=s.fullHeight;n+=s.offsetX*r/o,e-=s.offsetY*i/l,r*=s.width/o,i*=s.height/l}let a=this.filmOffset;a!==0&&(n+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(n,n+r,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ko=class extends Zo{constructor(t=-1,e=1,i=1,r=-1,n=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=n,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,n,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=n,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,n=i-t,s=i+t,a=r+e,o=r-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;n+=l*this.view.offsetX,s=n+l*this.view.width,a-=h*this.view.offsetY,o=a-h*this.view.height}this.projectionMatrix.makeOrthographic(n,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},If=class extends Rf{constructor(){super(new Ko(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},eu=class extends $c{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qt.DEFAULT_UP),this.updateMatrix(),this.target=new qt,this.shadow=new If}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Fb=new tt,Ob=new tt,zb=new tt;var Nr=-90,Dr=1,Pf=class extends qt{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ht(Nr,Dr,t,e);r.layers=this.layers,this.add(r);let n=new Ht(Nr,Dr,t,e);n.layers=this.layers,this.add(n);let s=new Ht(Nr,Dr,t,e);s.layers=this.layers,this.add(s);let a=new Ht(Nr,Dr,t,e);a.layers=this.layers,this.add(a);let o=new Ht(Nr,Dr,t,e);o.layers=this.layers,this.add(o);let l=new Ht(Nr,Dr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,r,n,s,a,o]=e;for(let l of e)this.remove(l);if(t===ti)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),n.up.set(0,0,-1),n.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Tn)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),n.up.set(0,0,1),n.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[n,s,a,o,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),c=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let v=!1;t.isWebGLRenderer===!0?v=t.state.buffers.depth.getReversed():v=t.reversedDepthBuffer,t.setRenderTarget(i,0,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,n),t.setRenderTarget(i,1,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(i,2,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,4,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,r),v&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,d,c),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Lf=class extends Ht{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Vb=new L,Gb=new Di,kb=new L,Hb=new L,Wb=new L;var qb=new L,Xb=new Di,jb=new L,Yb=new L;var Jo="\\[\\]\\.:\\/",Nf=new RegExp("["+Jo+"]","g"),$o="[^"+Jo+"]",Df="[^"+Jo.replace("\\.","")+"]",Bf=/((?:WC+[\/:])*)/.source.replace("WC",$o),Uf=/(WCOD+)?/.source.replace("WCOD",Df),Ff=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$o),Of=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$o),zf=new RegExp("^"+Bf+Uf+Ff+Of+"$"),Vf=["material","materials","bones","map"],Gf=class{constructor(t,e,i){let r=i||xt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,n=i.length;r!==n;++r)i[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},xt=class Vr{constructor(e,i,r){this.path=i,this.parsedPath=r||Vr.parseTrackName(i),this.node=Vr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,i,r){return e&&e.isAnimationObjectGroup?new Vr.Composite(e,i,r):new Vr(e,i,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Nf,"")}static parseTrackName(e){let i=zf.exec(e);if(i===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},n=r.nodeName&&r.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let s=r.nodeName.substring(n+1);Vf.indexOf(s)!==-1&&(r.nodeName=r.nodeName.substring(0,n),r.objectName=s)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,i){if(i===void 0||i===""||i==="."||i===-1||i===e.name||i===e.uuid)return e;if(e.skeleton){let r=e.skeleton.getBoneByName(i);if(r!==void 0)return r}if(e.children){let r=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===i||o.uuid===i)return o;let l=r(o.children);if(l)return l}return null},n=r(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,i){e[i]=this.targetObject[this.propertyName]}_getValue_array(e,i){let r=this.resolvedProperty;for(let n=0,s=r.length;n!==s;++n)e[i++]=r[n]}_getValue_arrayElement(e,i){e[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,i){this.resolvedProperty.toArray(e,i)}_setValue_direct(e,i){this.targetObject[this.propertyName]=e[i]}_setValue_direct_setNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,i){this.targetObject[this.propertyName]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,i){let r=this.resolvedProperty;for(let n=0,s=r.length;n!==s;++n)r[n]=e[i++]}_setValue_array_setNeedsUpdate(e,i){let r=this.resolvedProperty;for(let n=0,s=r.length;n!==s;++n)r[n]=e[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,i){let r=this.resolvedProperty;for(let n=0,s=r.length;n!==s;++n)r[n]=e[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,i){this.resolvedProperty[this.propertyIndex]=e[i]}_setValue_arrayElement_setNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty[this.propertyIndex]=e[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,i){this.resolvedProperty.fromArray(e,i)}_setValue_fromArray_setNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,i){this.resolvedProperty.fromArray(e,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,i){this.bind(),this.getValue(e,i)}_setValue_unbound(e,i){this.bind(),this.setValue(e,i)}bind(){let e=this.node,i=this.parsedPath,r=i.objectName,n=i.propertyName,s=i.propertyIndex;if(e||(e=Vr.findNode(this.rootNode,i.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let h=i.objectIndex;switch(r){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===h){h=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(h!==void 0){if(e[h]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}let a=e[n];if(a===void 0){let h=i.nodeName;He("PropertyBinding: Trying to update property for track: "+h+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=Gf;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zb=new Float32Array(1);var Kb=new tt;var Kr,Jb=(Kr=class{constructor(e,i,r,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,i,r,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,i=0){for(let r=0;r<4;r++)this.elements[r]=e[r+i];return this}set(e,i,r,n){let s=this.elements;return s[0]=e,s[2]=i,s[1]=r,s[3]=n,this}},Kr.prototype.isMatrix2=!0,Kr),$b=new de;var Qb=new L,eM=new L,tM=new L,iM=new L,rM=new L,nM=new L,sM=new L;var aM=new L;var oM=new L,lM=new tt,hM=new tt;var cM=new L,uM=new Qe,dM=new Qe;var pM=new L,fM=new L,mM=new L;var gM=new L,vM=new Zo;var _M=new Yi;var yM=new L;function vh(t,e,i,r){let n=kf(r);switch(i){case tc:return t*e;case rc:return t*e/n.components*n.byteLength;case Uo:return t*e/n.components*n.byteLength;case ur:return t*e*2/n.components*n.byteLength;case Fo:return t*e*2/n.components*n.byteLength;case ic:return t*e*3/n.components*n.byteLength;case ei:return t*e*4/n.components*n.byteLength;case Oo:return t*e*4/n.components*n.byteLength;case Ms:case Ss:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ws:case Es:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ka:case $a:return Math.max(t,16)*Math.max(e,8)/4;case Za:case Ja:return Math.max(t,8)*Math.max(e,8)/2;case Qa:case eo:case io:case ro:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case to:case Rs:case no:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ao:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case oo:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case lo:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case co:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case uo:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case po:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fo:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mo:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case go:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case vo:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case _o:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yo:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case xo:case bo:case Mo:return Math.ceil(t/4)*Math.ceil(e/4)*16;case So:case wo:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Is:case Eo:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kf(t){switch(t){case Wt:case Jh:return{byteLength:1,components:1};case wn:case $h:case fi:return{byteLength:2,components:1};case Do:case Bo:return{byteLength:2,components:4};case pi:case No:case ui:return{byteLength:4,components:1};case Qh:case ec:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function tu(){let t=null,e=!1,i=null,r=null;function n(s,a){r=t.requestAnimationFrame(n),i(s,a)}return{start:function(){e!==!0&&i!==null&&t!==null&&(r=t.requestAnimationFrame(n),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(s){i=s},setContext:function(s){t=s}}}function Hf(t){let e=new WeakMap;function i(o,l){let h=o.array,u=o.usage,d=h.byteLength,c=t.createBuffer();t.bindBuffer(l,c),t.bufferData(l,h,u),o.onUploadCallback();let p;if(h instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)p=t.HALF_FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=t.SHORT;else if(h instanceof Uint32Array)p=t.UNSIGNED_INT;else if(h instanceof Int32Array)p=t.INT;else if(h instanceof Int8Array)p=t.BYTE;else if(h instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:c,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,h){let u=l.array,d=l.updateRanges;if(t.bindBuffer(h,o),d.length===0)t.bufferSubData(h,0,u);else{d.sort((p,g)=>p.start-g.start);let c=0;for(let p=1;p<d.length;p++){let g=d[c],v=d[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++c,d[c]=v)}d.length=c+1;for(let p=0,g=d.length;p<g;p++){let v=d[p];t.bufferSubData(h,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let h=e.get(o);if(h===void 0)e.set(o,i(o,l));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,o,l),h.version=o.version}}return{get:n,remove:s,update:a}}var Wf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qf=`#ifdef USE_ALPHAHASH
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
#endif`,Xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kf=`#ifdef USE_AOMAP
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
#endif`,Jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$f=`#ifdef USE_BATCHING
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
#endif`,Qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rm=`#ifdef USE_IRIDESCENCE
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
#endif`,nm=`#ifdef USE_BUMPMAP
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
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,om=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,um=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,dm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pm=`#define PI 3.141592653589793
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
} // validated`,fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,mm=`vec3 transformedNormal = objectNormal;
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
#endif`,gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_m=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xm="gl_FragColor = linearToOutputTexel( gl_FragColor );",bm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Mm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wm=`#ifdef USE_ENVMAP
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
#endif`,Em=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Rm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Im=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pm=`#ifdef USE_GRADIENTMAP
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
}`,Lm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Um=`#ifdef USE_ENVMAP
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
#endif`,Fm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gm=`PhysicalMaterial material;
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
#endif`,km=`uniform sampler2D dfgLUT;
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
}`,Hm=`
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
#endif`,Wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,qm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ym=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Km=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,eg=`#if defined( USE_POINTS_UV )
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
#endif`,tg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ag=`#ifdef USE_MORPHTARGETS
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
#endif`,og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ug=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
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
#endif`,fg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rg=`float getShadowMask() {
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
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Lg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Dg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Og=`#ifdef USE_TRANSMISSION
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
#endif`,zg=`#ifdef USE_TRANSMISSION
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
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qg=`uniform sampler2D t2D;
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`#include <common>
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
}`,Jg=`#if DEPTH_PACKING == 3200
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
}`,$g=`#define DISTANCE
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
}`,Qg=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,t0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,r0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,s0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,o0=`#define LAMBERT
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
}`,l0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,c0=`#define NORMAL
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
}`,u0=`#define NORMAL
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
}`,d0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,f0=`#define STANDARD
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
}`,m0=`#define STANDARD
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
}`,g0=`#define TOON
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
}`,v0=`#define TOON
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
}`,_0=`uniform float size;
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
}`,y0=`uniform vec3 diffuse;
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
}`,x0=`#include <common>
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
}`,b0=`uniform vec3 color;
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
}`,M0=`uniform float rotation;
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
}`,S0=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Wf,alphahash_pars_fragment:qf,alphamap_fragment:Xf,alphamap_pars_fragment:jf,alphatest_fragment:Yf,alphatest_pars_fragment:Zf,aomap_fragment:Kf,aomap_pars_fragment:Jf,batching_pars_vertex:$f,batching_vertex:Qf,begin_vertex:em,beginnormal_vertex:tm,bsdfs:im,iridescence_fragment:rm,bumpmap_pars_fragment:nm,clipping_planes_fragment:sm,clipping_planes_pars_fragment:am,clipping_planes_pars_vertex:om,clipping_planes_vertex:lm,color_fragment:hm,color_pars_fragment:cm,color_pars_vertex:um,color_vertex:dm,common:pm,cube_uv_reflection_fragment:fm,defaultnormal_vertex:mm,displacementmap_pars_vertex:gm,displacementmap_vertex:vm,emissivemap_fragment:_m,emissivemap_pars_fragment:ym,colorspace_fragment:xm,colorspace_pars_fragment:bm,envmap_fragment:Mm,envmap_common_pars_fragment:Sm,envmap_pars_fragment:wm,envmap_pars_vertex:Em,envmap_physical_pars_fragment:Um,envmap_vertex:Tm,fog_vertex:Am,fog_pars_vertex:Cm,fog_fragment:Rm,fog_pars_fragment:Im,gradientmap_pars_fragment:Pm,lightmap_pars_fragment:Lm,lights_lambert_fragment:Nm,lights_lambert_pars_fragment:Dm,lights_pars_begin:Bm,lights_toon_fragment:Fm,lights_toon_pars_fragment:Om,lights_phong_fragment:zm,lights_phong_pars_fragment:Vm,lights_physical_fragment:Gm,lights_physical_pars_fragment:km,lights_fragment_begin:Hm,lights_fragment_maps:Wm,lights_fragment_end:qm,lightprobes_pars_fragment:Xm,logdepthbuf_fragment:jm,logdepthbuf_pars_fragment:Ym,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Km,map_fragment:Jm,map_pars_fragment:$m,map_particle_fragment:Qm,map_particle_pars_fragment:eg,metalnessmap_fragment:tg,metalnessmap_pars_fragment:ig,morphinstance_vertex:rg,morphcolor_vertex:ng,morphnormal_vertex:sg,morphtarget_pars_vertex:ag,morphtarget_vertex:og,normal_fragment_begin:lg,normal_fragment_maps:hg,normal_pars_fragment:cg,normal_pars_vertex:ug,normal_vertex:dg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:fg,clearcoat_normal_fragment_maps:mg,clearcoat_pars_fragment:gg,iridescence_pars_fragment:vg,opaque_fragment:_g,packing:yg,premultiplied_alpha_fragment:xg,project_vertex:bg,dithering_fragment:Mg,dithering_pars_fragment:Sg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:Tg,shadowmap_pars_vertex:Ag,shadowmap_vertex:Cg,shadowmask_pars_fragment:Rg,skinbase_vertex:Ig,skinning_pars_vertex:Pg,skinning_vertex:Lg,skinnormal_vertex:Ng,specularmap_fragment:Dg,specularmap_pars_fragment:Bg,tonemapping_fragment:Ug,tonemapping_pars_fragment:Fg,transmission_fragment:Og,transmission_pars_fragment:zg,uv_pars_fragment:Vg,uv_pars_vertex:Gg,uv_vertex:kg,worldpos_vertex:Hg,background_vert:Wg,background_frag:qg,backgroundCube_vert:Xg,backgroundCube_frag:jg,cube_vert:Yg,cube_frag:Zg,depth_vert:Kg,depth_frag:Jg,distance_vert:$g,distance_frag:Qg,equirect_vert:e0,equirect_frag:t0,linedashed_vert:i0,linedashed_frag:r0,meshbasic_vert:n0,meshbasic_frag:s0,meshlambert_vert:a0,meshlambert_frag:o0,meshmatcap_vert:l0,meshmatcap_frag:h0,meshnormal_vert:c0,meshnormal_frag:u0,meshphong_vert:d0,meshphong_frag:p0,meshphysical_vert:f0,meshphysical_frag:m0,meshtoon_vert:g0,meshtoon_frag:v0,points_vert:_0,points_frag:y0,shadow_vert:x0,shadow_frag:b0,sprite_vert:M0,sprite_frag:S0},ye={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ci={basic:{uniforms:Ot([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Ot([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Ot([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Ot([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Ot([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Qe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Ot([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Ot([ye.points,ye.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Ot([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Ot([ye.common,ye.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Ot([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Ot([ye.sprite,ye.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:Ot([ye.common,ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:Ot([ye.lights,ye.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ci.physical={uniforms:Ot([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var ys={r:0,b:0,g:0},w0=new tt,iu=new Ke;iu.set(-1,0,0,0,1,0,0,0,1);function E0(t,e,i,r,n,s){let a=new Qe(0),o=n===!0?0:1,l,h,u=null,d=0,c=null;function p(y){let b=y.isScene===!0?y.background:null;if(b&&b.isTexture){let _=y.backgroundBlurriness>0;b=e.get(b,_)}return b}function g(y){let b=!1,_=p(y);_===null?m(a,o):_&&_.isColor&&(m(_,1),b=!0);let M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(t.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(y,b){let _=p(b);_&&(_.isCubeTexture||_.mapping===Bs)?(h===void 0&&(h=new _t(new ri(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:rn(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(b.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(iu),h.material.toneMapped=nt.getTransfer(_.colorSpace)!==ht,(u!==_||d!==_.version||c!==t.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,c=t.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new _t(new nn(2,2),new mi({name:"BackgroundMaterial",uniforms:rn(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=nt.getTransfer(_.colorSpace)!==ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||c!==t.toneMapping)&&(l.material.needsUpdate=!0,u=_,d=_.version,c=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,b){y.getRGB(ys,Yc(t)),i.buffers.color.setClear(ys.r,ys.g,ys.b,b,s)}function f(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,b=1){a.set(y),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:v,dispose:f}}function T0(t,e){let i=t.getParameter(t.MAX_VERTEX_ATTRIBS),r={},n=c(null),s=n,a=!1;function o(P,B,F,I,D){let z=!1,H=d(P,I,F,B);s!==H&&(s=H,h(s.object)),z=p(P,I,F,D),z&&g(P,I,F,D),D!==null&&e.update(D,t.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,_(P,B,F,I),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return t.createVertexArray()}function h(P){return t.bindVertexArray(P)}function u(P){return t.deleteVertexArray(P)}function d(P,B,F,I){let D=I.wireframe===!0,z=r[B.id];z===void 0&&(z={},r[B.id]=z);let H=P.isInstancedMesh===!0?P.id:0,$=z[H];$===void 0&&($={},z[H]=$);let W=$[F.id];W===void 0&&(W={},$[F.id]=W);let Z=W[D];return Z===void 0&&(Z=c(l()),W[D]=Z),Z}function c(P){let B=[],F=[],I=[];for(let D=0;D<i;D++)B[D]=0,F[D]=0,I[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:F,attributeDivisors:I,object:P,attributes:{},index:null}}function p(P,B,F,I){let D=s.attributes,z=B.attributes,H=0,$=F.getAttributes();for(let W in $)if($[W].location>=0){let Z=D[W],K=z[W];if(K===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),Z===void 0||Z.attribute!==K||K&&Z.data!==K.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function g(P,B,F,I){let D={},z=B.attributes,H=0,$=F.getAttributes();for(let W in $)if($[W].location>=0){let Z=z[W];Z===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor));let K={};K.attribute=Z,Z&&Z.data&&(K.data=Z.data),D[W]=K,H++}s.attributes=D,s.attributesNum=H,s.index=I}function v(){let P=s.newAttributes;for(let B=0,F=P.length;B<F;B++)P[B]=0}function m(P){f(P,0)}function f(P,B){let F=s.newAttributes,I=s.enabledAttributes,D=s.attributeDivisors;F[P]=1,I[P]===0&&(t.enableVertexAttribArray(P),I[P]=1),D[P]!==B&&(t.vertexAttribDivisor(P,B),D[P]=B)}function y(){let P=s.newAttributes,B=s.enabledAttributes;for(let F=0,I=B.length;F<I;F++)B[F]!==P[F]&&(t.disableVertexAttribArray(F),B[F]=0)}function b(P,B,F,I,D,z,H){H===!0?t.vertexAttribIPointer(P,B,F,D,z):t.vertexAttribPointer(P,B,F,I,D,z)}function _(P,B,F,I){v();let D=I.attributes,z=F.getAttributes(),H=B.defaultAttributeValues;for(let $ in z){let W=z[$];if(W.location>=0){let Z=D[$];if(Z===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(Z=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(Z=P.instanceColor)),Z!==void 0){let K=Z.normalized,oe=Z.itemSize,Se=e.get(Z);if(Se===void 0)continue;let rt=Se.buffer,ze=Se.type,J=Se.bytesPerElement,ne=ze===t.INT||ze===t.UNSIGNED_INT||Z.gpuType===No;if(Z.isInterleavedBufferAttribute){let le=Z.data,Pe=le.stride,Ue=Z.offset;if(le.isInstancedInterleavedBuffer){for(let ge=0;ge<W.locationSize;ge++)f(W.location+ge,le.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<W.locationSize;ge++)m(W.location+ge);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let ge=0;ge<W.locationSize;ge++)b(W.location+ge,oe/W.locationSize,ze,K,Pe*J,(Ue+oe/W.locationSize*ge)*J,ne)}else{if(Z.isInstancedBufferAttribute){for(let le=0;le<W.locationSize;le++)f(W.location+le,Z.meshPerAttribute);P.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let le=0;le<W.locationSize;le++)m(W.location+le);t.bindBuffer(t.ARRAY_BUFFER,rt);for(let le=0;le<W.locationSize;le++)b(W.location+le,oe/W.locationSize,ze,K,oe*J,oe/W.locationSize*le*J,ne)}}else if(H!==void 0){let K=H[$];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(W.location,K);break;case 3:t.vertexAttrib3fv(W.location,K);break;case 4:t.vertexAttrib4fv(W.location,K);break;default:t.vertexAttrib1fv(W.location,K)}}}}y()}function M(){S();for(let P in r){let B=r[P];for(let F in B){let I=B[F];for(let D in I){let z=I[D];for(let H in z)u(z[H].object),delete z[H];delete I[D]}}delete r[P]}}function T(P){if(r[P.id]===void 0)return;let B=r[P.id];for(let F in B){let I=B[F];for(let D in I){let z=I[D];for(let H in z)u(z[H].object),delete z[H];delete I[D]}}delete r[P.id]}function C(P){for(let B in r){let F=r[B];for(let I in F){let D=F[I];if(D[P.id]===void 0)continue;let z=D[P.id];for(let H in z)u(z[H].object),delete z[H];delete D[P.id]}}}function x(P){for(let B in r){let F=r[B],I=P.isInstancedMesh===!0?P.id:0,D=F[I];if(D!==void 0){for(let z in D){let H=D[z];for(let $ in H)u(H[$].object),delete H[$];delete D[z]}delete F[I],Object.keys(F).length===0&&delete r[B]}}}function S(){N(),a=!0,s!==n&&(s=n,h(s.object))}function N(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:S,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function A0(t,e,i){let r;function n(l){r=l}function s(l,h){t.drawArrays(r,l,h),i.update(h,r,1)}function a(l,h,u){u!==0&&(t.drawArraysInstanced(r,l,h,u),i.update(h,r,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,h,0,u);let d=0;for(let c=0;c<u;c++)d+=h[c];i.update(d,r,1)}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function C0(t,e,i,r){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");n=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(C){return!(C!==ei&&r.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Wt&&C!==ui&&!x&&r.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=i.precision!==void 0?i.precision:"highp",u=l(h);u!==h&&(Ge("WebGLRenderer:",h,"not supported, using",u,"instead."),h=u);let d=i.logarithmicDepthBuffer===!0,c=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control");i.reversedDepthBuffer===!0&&c===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),M=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:c,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:b,maxFragmentUniforms:_,maxSamples:M,samples:T}}function R0(t){let e=this,i=null,r=0,n=!1,s=!1,a=new Xi,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,c){let p=d.length!==0||c||r!==0||n;return n=c,r=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,c){i=u(d,c,0)},this.setState=function(d,c,p){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!n||g===null||g.length===0||s&&!m)s?u(null):h();else{let y=s?0:r,b=y*4,_=f.clippingState||null;l.value=_,_=u(g,c,b,p);for(let M=0;M!==b;++M)_[M]=i[M];f.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function h(){l.value!==i&&(l.value=i,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function u(d,c,p,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let f=p+v*4,y=c.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let b=0,_=p;b!==v;++b,_+=4)a.copy(d[b]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var kr=4,I0=6,P0=20,L0=256,fn=new Ko,_h=new Qe,Da=null,Ba=0,Ua=0,Fa=!1,N0=new L,nr=new L,yh=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,r=100,n={}){let{size:s=256,position:a=N0}=n;Da=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);let o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,r,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Da,Ba,Ua),this._renderer.xr.enabled=Fa,t.scissorTest=!1,Br(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===cr||t.mapping===Jr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Da=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Fa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:fi,format:ei,colorSpace:Ls,depthBuffer:!1},r=xh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(t,e,i);let{_lodMax:n}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=D0(n)),this._blurMaterial=U0(n,t,e),this._ggxMaterial=B0(n,t,e)}return r}_compileMaterial(t){let e=new _t(new Mt,t);this._renderer.compile(e,fn)}_sceneToCubeUV(t,e,i,r,n){let s=new Ht(90,1,e,i),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,h=l.autoClear,u=l.toneMapping;l.getClearColor(_h),l.toneMapping=di,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(r),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new ri,new Dn({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,c=d.material,p=!1,g=t.background;g?g.isColor&&(c.color.copy(g),t.background=null,p=!0):(c.color.copy(_h),p=!0);for(let v=0;v<6;v++){let m=v%3;m===0?(s.up.set(0,a[v],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x+o[v],n.y,n.z)):m===1?(s.up.set(0,0,a[v]),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y+o[v],n.z)):(s.up.set(0,a[v],0),s.position.set(n.x,n.y,n.z),s.lookAt(n.x,n.y,n.z+o[v]));let f=this._cubeSize;Br(r,m*f,v>2?f:0,f,f),l.setRenderTarget(r),p&&l.render(d,s),l.render(t,s)}l.toneMapping=u,l.autoClear=h,t.background=g}_textureToCubeUV(t,e){let i=this._renderer,r=t.mapping===cr||t.mapping===Jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());let n=r?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=n;let a=n.uniforms;a.envMap.value=t;let o=this._cubeSize;Br(e,0,0,3*o,2*o),i.setRenderTarget(e),i.render(s,fn)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let n=1;n<r;n++)this._applyGGXFilter(t,n-1,n);e.autoClear=i}_applyGGXFilter(t,e,i){let r=this._renderer,n=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[i];a.material=s;let o=s.uniforms,l=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,c=u*d,{_lodMax:p}=this,g=this._sizeLods[i],v=3*g*(i>p-kr?i-p+kr:0),m=4*(this._cubeSize-g);o.envMap.value=t.texture,o.roughness.value=c,o.mipInt.value=p-e,Br(n,v,m,3*g,2*g),r.setRenderTarget(n),r.render(a,fn),o.envMap.value=n.texture,o.roughness.value=0,o.mipInt.value=p-i,Br(t,v,m,3*g,2*g),r.setRenderTarget(t),r.render(a,fn)}_blur(t,e,i,r){let n=this._pingPongRenderTarget,s=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,n,e,i,s),this._blurPass(n,t,i,i,s)}_blurPass(t,e,i,r,n){let s=this._renderer,a=this._blurMaterial,o=this._lodMeshes[r];o.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=n,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-kr?r-this._lodMax+kr:0),d=4*(this._cubeSize-h);Br(e,u,d,3*h,2*h),s.setRenderTarget(e),s.render(o,fn)}};function D0(t){let e=[],i=[],r=t,n=t-kr+1+I0;for(let s=0;s<n;s++){let a=Math.pow(2,r);e.push(a);let o=1/(a-2),l=-o,h=1+o,u=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,c=6,p=3,g=new Float32Array(p*c*d),v=new Float32Array(p*c*d);for(let f=0;f<d;f++){let y=f%3*2/3-1,b=f>2?0:-1,_=[y,b,0,y+2/3,b,0,y+2/3,b+1,0,y,b,0,y+2/3,b+1,0,y,b+1,0];g.set(_,p*c*f);for(let M=0;M<c;M++){let T=u[M*2]*2-1,C=u[M*2+1]*2-1;f===0?nr.set(1,C,T):f===1?nr.set(-T,1,-C):f===2?nr.set(-T,C,1):f===3?nr.set(-1,C,-T):f===4?nr.set(-T,-1,C):nr.set(T,C,-1),nr.toArray(v,(f*c+M)*p)}}let m=new Mt;m.setAttribute("position",new Li(g,p)),m.setAttribute("outputDirection",new Li(v,p)),i.push(new _t(m,null)),r>kr&&r--}return{lodMeshes:i,sizeLods:e}}function xh(t,e,i){let r=new ii(t,e,i);return r.texture.mapping=Bs,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Br(t,e,i,r,n){t.viewport.set(e,i,r,n),t.scissor.set(e,i,r,n)}function B0(t,e,i){return new mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:L0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zs(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function U0(t,e,i){return new mi({name:"SphericalGaussianBlur",defines:{SAMPLES:P0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zs(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function bh(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zs(),fragmentShader:`

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
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function Mh(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zs(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ii,depthTest:!1,depthWrite:!1})}function zs(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ru=class extends ii{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new gc(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ri(5,5,5),n=new mi({name:"CubemapFromEquirect",uniforms:rn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zt,blending:Ii});n.uniforms.tEquirect.value=e;let s=new _t(r,n),a=e.minFilter;return e.minFilter===sr&&(e.minFilter=Bt),new Pf(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,i=!0,r=!0){let n=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,i,r);t.setRenderTarget(n)}};function F0(t){let e=new WeakMap,i=new WeakMap,r=null;function n(c,p=!1){return c==null?null:p?a(c):s(c)}function s(c){if(c&&c.isTexture){let p=c.mapping;if(p===ia||p===ra)if(e.has(c)){let g=e.get(c).texture;return o(g,c.mapping)}else{let g=c.image;if(g&&g.height>0){let v=new ru(g.height);return v.fromEquirectangularTexture(t,c),e.set(c,v),c.addEventListener("dispose",h),o(v.texture,c.mapping)}else return null}}return c}function a(c){if(c&&c.isTexture){let p=c.mapping,g=p===ia||p===ra,v=p===cr||p===Jr;if(g||v){let m=i.get(c),f=m!==void 0?m.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==f)return r===null&&(r=new yh(t)),m=g?r.fromEquirectangular(c,m):r.fromCubemap(c,m),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),m.texture;if(m!==void 0)return m.texture;{let y=c.image;return g&&y&&y.height>0||v&&y&&l(y)?(r===null&&(r=new yh(t)),m=g?r.fromEquirectangular(c):r.fromCubemap(c),m.texture.pmremVersion=c.pmremVersion,i.set(c,m),c.addEventListener("dispose",u),m.texture):null}}}return c}function o(c,p){return p===ia?c.mapping=cr:p===ra&&(c.mapping=Jr),c}function l(c){let p=0,g=6;for(let v=0;v<g;v++)c[v]!==void 0&&p++;return p===g}function h(c){let p=c.target;p.removeEventListener("dispose",h);let g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function u(c){let p=c.target;p.removeEventListener("dispose",u);let g=i.get(p);g!==void 0&&(i.delete(p),g.dispose())}function d(){e=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:d}}function O0(t){let e={};function i(r){if(e[r]!==void 0)return e[r];let n=t.getExtension(r);return e[r]=n,n}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){let n=i(r);return n===null&&Hr("WebGLRenderer: "+r+" extension not supported."),n}}}function z0(t,e,i,r){let n={},s=new WeakMap;function a(d){let c=d.target;c.index!==null&&e.remove(c.index);for(let g in c.attributes)e.remove(c.attributes[g]);c.removeEventListener("dispose",a),delete n[c.id];let p=s.get(c);p&&(e.remove(p),s.delete(c)),r.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,i.memory.geometries--}function o(d,c){return n[c.id]===!0||(c.addEventListener("dispose",a),n[c.id]=!0,i.memory.geometries++),c}function l(d){let c=d.attributes;for(let p in c)e.update(c[p],t.ARRAY_BUFFER)}function h(d){let c=[],p=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(p!==null){let y=p.array;v=p.version;for(let b=0,_=y.length;b<_;b+=3){let M=y[b+0],T=y[b+1],C=y[b+2];c.push(M,T,T,C,C,M)}}else{let y=g.array;v=g.version;for(let b=0,_=y.length/3-1;b<_;b+=3){let M=b+0,T=b+1,C=b+2;c.push(M,T,T,C,C,M)}}let m=new(g.count>=65535?pc:dc)(c,1);m.version=v;let f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){let c=s.get(d);if(c){let p=d.index;p!==null&&c.version<p.version&&h(d)}else h(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function V0(t,e,i){let r;function n(d){r=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,c){t.drawElements(r,c,s,d*a),i.update(c,r,1)}function h(d,c,p){p!==0&&(t.drawElementsInstanced(r,c,s,d*a,p),i.update(c,r,p))}function u(d,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,c,0,s,d,0,p);let g=0;for(let v=0;v<p;v++)g+=c[v];i.update(g,r,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u}function G0(t){let e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(s,a,o){switch(i.calls++,a){case t.TRIANGLES:i.triangles+=o*(s/3);break;case t.LINES:i.lines+=o*(s/2);break;case t.LINE_STRIP:i.lines+=o*(s-1);break;case t.LINE_LOOP:i.lines+=o*s;break;case t.POINTS:i.points+=o*s;break;default:He("WebGLInfo: Unknown draw mode:",a);break}}function n(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:n,update:r}}function k0(t,e,i){let r=new WeakMap,n=new mt;function s(a,o,l){let h=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,c=r.get(o);if(c===void 0||c.count!==d){let p=function(){x.dispose(),r.delete(o),o.removeEventListener("dispose",p)};c!==void 0&&c.texture.dispose();let g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],_=0;g===!0&&(_=1),v===!0&&(_=2),m===!0&&(_=3);let M=o.attributes.position.count*_,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let C=new Float32Array(M*T*4*d),x=new sc(C,M,T,d);x.type=ui,x.needsUpdate=!0;let S=_*4;for(let N=0;N<d;N++){let P=f[N],B=y[N],F=b[N],I=M*T*4*N;for(let D=0;D<P.count;D++){let z=D*S;g===!0&&(n.fromBufferAttribute(P,D),C[I+z+0]=n.x,C[I+z+1]=n.y,C[I+z+2]=n.z,C[I+z+3]=0),v===!0&&(n.fromBufferAttribute(B,D),C[I+z+4]=n.x,C[I+z+5]=n.y,C[I+z+6]=n.z,C[I+z+7]=0),m===!0&&(n.fromBufferAttribute(F,D),C[I+z+8]=n.x,C[I+z+9]=n.y,C[I+z+10]=n.z,C[I+z+11]=F.itemSize===4?n.w:1)}}c={count:d,texture:x,size:new de(M,T)},r.set(o,c),o.addEventListener("dispose",p)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,i);else{let p=0;for(let v=0;v<h.length;v++)p+=h[v];let g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",h)}l.getUniforms().setValue(t,"morphTargetsTexture",c.texture,i),l.getUniforms().setValue(t,"morphTargetsTextureSize",c.size)}return{update:s}}function H0(t,e,i,r,n){let s=new WeakMap;function a(h){let u=n.render.frame,d=h.geometry,c=e.get(h,d);if(s.get(c)!==u&&(e.update(c),s.set(c,u)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),s.get(h)!==u&&(i.update(h.instanceMatrix,t.ARRAY_BUFFER),h.instanceColor!==null&&i.update(h.instanceColor,t.ARRAY_BUFFER),s.set(h,u))),h.isSkinnedMesh){let p=h.skeleton;s.get(p)!==u&&(p.update(),s.set(p,u))}return c}function o(){s=new WeakMap}function l(h){let u=h.target;u.removeEventListener("dispose",l),r.releaseStatesOfObject(u),i.remove(u.instanceMatrix),u.instanceColor!==null&&i.remove(u.instanceColor)}return{update:a,dispose:o}}var W0={[Hh]:"LINEAR_TONE_MAPPING",[Wh]:"REINHARD_TONE_MAPPING",[qh]:"CINEON_TONE_MAPPING",[Xh]:"ACES_FILMIC_TONE_MAPPING",[Yh]:"AGX_TONE_MAPPING",[Zh]:"NEUTRAL_TONE_MAPPING",[jh]:"CUSTOM_TONE_MAPPING"};function q0(t,e,i,r,n,s){let a=new ii(e,i,{type:t,depthBuffer:n,stencilBuffer:s,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,h=new Mt;h.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new We([0,2,0,0,2,0],2));let u=new pf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new _t(h,u),c=new Ko(-1,1,1,-1,0,1),p=null,g=null,v=!1,m,f=null,y=[],b=!1;this.setSize=function(_,M){a.setSize(_,M),o!==null&&o.setSize(_,M),l!==null&&l.setSize(_,M);for(let T=0;T<y.length;T++){let C=y[T];C.setSize&&C.setSize(_,M)}},this.setEffects=function(_){y=_,b=y.length>0&&y[0].isRenderPass===!0;let M=a.width,T=a.height;y.length>0&&o===null&&(o=new ii(M,T,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new ii(M,T,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<y.length;C++){let x=y[C];x.setSize&&x.setSize(M,T)}},this.begin=function(_,M){if(v||_.toneMapping===di&&y.length===0)return!1;if(f=M,M!==null){let T=M.width,C=M.height;(a.width!==T||a.height!==C)&&this.setSize(T,C)}return b===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=di,!0},this.hasRenderPass=function(){return b},this.end=function(_,M){_.toneMapping=m,v=!0;let T=a,C=o;for(let x=0;x<y.length;x++){let S=y[x];S.enabled!==!1&&(S.render(_,C,T,M),S.needsSwap!==!1&&(T=C,C=C===o?l:o))}if(p!==_.outputColorSpace||g!==_.toneMapping){p=_.outputColorSpace,g=_.toneMapping,u.defines={},nt.getTransfer(p)===ht&&(u.defines.SRGB_TRANSFER="");let x=W0[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,_.setRenderTarget(f),_.render(d,c),f=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),u.dispose()}}var nu=new Xt,Io=new Rn(1,1),su=new sc,au=new jd,ou=new gc,Sh=[],wh=[],Eh=new Float32Array(16),Th=new Float32Array(9),Ah=new Float32Array(4);function sn(t,e,i){let r=t[0];if(r<=0||r>0)return t;let n=e*i,s=Sh[n];if(s===void 0&&(s=new Float32Array(n),Sh[n]=s),e!==0){r.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=i,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let i=0,r=t.length;i<r;i++)if(t[i]!==e[i])return!1;return!0}function At(t,e){for(let i=0,r=e.length;i<r;i++)t[i]=e[i]}function Vs(t,e){let i=wh[e];i===void 0&&(i=new Int32Array(e),wh[e]=i);for(let r=0;r!==e;++r)i[r]=t.allocateTextureUnit();return i}function X0(t,e){let i=this.cache;i[0]!==e&&(t.uniform1f(this.addr,e),i[0]=e)}function j0(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tt(i,e))return;t.uniform2fv(this.addr,e),At(i,e)}}function Y0(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tt(i,e))return;t.uniform3fv(this.addr,e),At(i,e)}}function Z0(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tt(i,e))return;t.uniform4fv(this.addr,e),At(i,e)}}function K0(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(Tt(i,e))return;t.uniformMatrix2fv(this.addr,!1,e),At(i,e)}else{if(Tt(i,r))return;Ah.set(r),t.uniformMatrix2fv(this.addr,!1,Ah),At(i,r)}}function J0(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(Tt(i,e))return;t.uniformMatrix3fv(this.addr,!1,e),At(i,e)}else{if(Tt(i,r))return;Th.set(r),t.uniformMatrix3fv(this.addr,!1,Th),At(i,r)}}function $0(t,e){let i=this.cache,r=e.elements;if(r===void 0){if(Tt(i,e))return;t.uniformMatrix4fv(this.addr,!1,e),At(i,e)}else{if(Tt(i,r))return;Eh.set(r),t.uniformMatrix4fv(this.addr,!1,Eh),At(i,r)}}function Q0(t,e){let i=this.cache;i[0]!==e&&(t.uniform1i(this.addr,e),i[0]=e)}function ev(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tt(i,e))return;t.uniform2iv(this.addr,e),At(i,e)}}function tv(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tt(i,e))return;t.uniform3iv(this.addr,e),At(i,e)}}function iv(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tt(i,e))return;t.uniform4iv(this.addr,e),At(i,e)}}function rv(t,e){let i=this.cache;i[0]!==e&&(t.uniform1ui(this.addr,e),i[0]=e)}function nv(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tt(i,e))return;t.uniform2uiv(this.addr,e),At(i,e)}}function sv(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tt(i,e))return;t.uniform3uiv(this.addr,e),At(i,e)}}function av(t,e){let i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tt(i,e))return;t.uniform4uiv(this.addr,e),At(i,e)}}function ov(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n);let s;this.type===t.SAMPLER_2D_SHADOW?(Io.compareFunction=i.isReversedDepthBuffer()?Vo:zo,s=Io):s=nu,i.setTexture2D(e||s,n)}function lv(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTexture3D(e||au,n)}function hv(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTextureCube(e||ou,n)}function cv(t,e,i){let r=this.cache,n=i.allocateTextureUnit();r[0]!==n&&(t.uniform1i(this.addr,n),r[0]=n),i.setTexture2DArray(e||su,n)}function uv(t){switch(t){case 5126:return X0;case 35664:return j0;case 35665:return Y0;case 35666:return Z0;case 35674:return K0;case 35675:return J0;case 35676:return $0;case 5124:case 35670:return Q0;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return iv;case 5125:return rv;case 36294:return nv;case 36295:return sv;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return cv}}function dv(t,e){t.uniform1fv(this.addr,e)}function pv(t,e){let i=sn(e,this.size,2);t.uniform2fv(this.addr,i)}function fv(t,e){let i=sn(e,this.size,3);t.uniform3fv(this.addr,i)}function mv(t,e){let i=sn(e,this.size,4);t.uniform4fv(this.addr,i)}function gv(t,e){let i=sn(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,i)}function vv(t,e){let i=sn(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,i)}function _v(t,e){let i=sn(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,i)}function yv(t,e){t.uniform1iv(this.addr,e)}function xv(t,e){t.uniform2iv(this.addr,e)}function bv(t,e){t.uniform3iv(this.addr,e)}function Mv(t,e){t.uniform4iv(this.addr,e)}function Sv(t,e){t.uniform1uiv(this.addr,e)}function wv(t,e){t.uniform2uiv(this.addr,e)}function Ev(t,e){t.uniform3uiv(this.addr,e)}function Tv(t,e){t.uniform4uiv(this.addr,e)}function Av(t,e,i){let r=this.cache,n=e.length,s=Vs(i,n);Tt(r,s)||(t.uniform1iv(this.addr,s),At(r,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Io:a=nu;for(let o=0;o!==n;++o)i.setTexture2D(e[o]||a,s[o])}function Cv(t,e,i){let r=this.cache,n=e.length,s=Vs(i,n);Tt(r,s)||(t.uniform1iv(this.addr,s),At(r,s));for(let a=0;a!==n;++a)i.setTexture3D(e[a]||au,s[a])}function Rv(t,e,i){let r=this.cache,n=e.length,s=Vs(i,n);Tt(r,s)||(t.uniform1iv(this.addr,s),At(r,s));for(let a=0;a!==n;++a)i.setTextureCube(e[a]||ou,s[a])}function Iv(t,e,i){let r=this.cache,n=e.length,s=Vs(i,n);Tt(r,s)||(t.uniform1iv(this.addr,s),At(r,s));for(let a=0;a!==n;++a)i.setTexture2DArray(e[a]||su,s[a])}function Pv(t){switch(t){case 5126:return dv;case 35664:return pv;case 35665:return fv;case 35666:return mv;case 35674:return gv;case 35675:return vv;case 35676:return _v;case 5124:case 35670:return yv;case 35667:case 35671:return xv;case 35668:case 35672:return bv;case 35669:case 35673:return Mv;case 5125:return Sv;case 36294:return wv;case 36295:return Ev;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Cv;case 35680:case 36300:case 36308:case 36293:return Rv;case 36289:case 36303:case 36311:case 36292:return Iv}}var Lv=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=uv(e.type)}},Nv=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Pv(e.type)}},Dv=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let r=this.seq;for(let n=0,s=r.length;n!==s;++n){let a=r[n];a.setValue(t,e[a.id],i)}}},Oa=/(\w+)(\])?(\[|\.)?/g;function Ch(t,e){t.seq.push(e),t.map[e.id]=e}function Bv(t,e,i){let r=t.name,n=r.length;for(Oa.lastIndex=0;;){let s=Oa.exec(r),a=Oa.lastIndex,o=s[1],l=s[2]==="]",h=s[3];if(l&&(o=o|0),h===void 0||h==="["&&a+2===n){Ch(i,h===void 0?new Lv(o,t,e):new Nv(o,t,e));break}else{let u=i.map[o];u===void 0&&(u=new Dv(o),Ch(i,u)),i=u}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);Bv(a,o,this)}let r=[],n=[];for(let s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(s):n.push(s);r.length>0&&(this.seq=r.concat(n))}setValue(t,e,i,r){let n=this.map[e];n!==void 0&&n.setValue(t,i,r)}setOptional(t,e,i){let r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let n=0,s=e.length;n!==s;++n){let a=e[n],o=i[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,r)}}static seqWithValue(t,e){let i=[];for(let r=0,n=t.length;r!==n;++r){let s=t[r];s.id in e&&i.push(s)}return i}};function Rh(t,e,i){let r=t.createShader(e);return t.shaderSource(r,i),t.compileShader(r),r}var Uv=37297,Fv=0;function Ov(t,e){let i=t.split(`
`),r=[],n=Math.max(e-6,0),s=Math.min(e+6,i.length);for(let a=n;a<s;a++){let o=a+1;r.push(`${o===e?">":" "} ${o}: ${i[a]}`)}return r.join(`
`)}var Ih=new Ke;function zv(t){nt._getMatrix(Ih,nt.workingColorSpace,t);let e=`mat3( ${Ih.elements.map(i=>i.toFixed(4))} )`;switch(nt.getTransfer(t)){case Ns:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ph(t,e,i){let r=t.getShaderParameter(e,t.COMPILE_STATUS),n=(t.getShaderInfoLog(e)||"").trim();if(r&&n==="")return"";let s=/ERROR: 0:(\d+)/.exec(n);if(s){let a=parseInt(s[1]);return i.toUpperCase()+`

`+n+`

`+Ov(t.getShaderSource(e),a)}else return n}function Vv(t,e){let i=zv(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}var Gv={[Hh]:"Linear",[Wh]:"Reinhard",[qh]:"Cineon",[Xh]:"ACESFilmic",[Yh]:"AgX",[Zh]:"Neutral",[jh]:"Custom"};function kv(t,e){let i=Gv[e];return i===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}var xs=new L;function Hv(){nt.getLuminanceCoefficients(xs);let t=xs.x.toFixed(4),e=xs.y.toFixed(4),i=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wv(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_n).join(`
`)}function qv(t){let e=[];for(let i in t){let r=t[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function Xv(t,e){let i={},r=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let s=t.getActiveAttrib(e,n),a=s.name,o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),i[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return i}function _n(t){return t!==""}function Lh(t,e){let i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Po(t){return t.replace(jv,Zv)}var Yv=new Map;function Zv(t,e){let i=$e[e];if(i===void 0){let r=Yv.get(e);if(r!==void 0)i=$e[r],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Po(i)}var Kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dh(t){return t.replace(Kv,Jv)}function Jv(t,e,i,r){let n="";for(let s=parseInt(e);s<parseInt(i);s++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Bh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var $v={[bs]:"SHADOWMAP_TYPE_PCF",[gn]:"SHADOWMAP_TYPE_VSM"};function Qv(t){return $v[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var e_={[cr]:"ENVMAP_TYPE_CUBE",[Jr]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE_UV"};function t_(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":e_[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var i_={[Jr]:"ENVMAP_MODE_REFRACTION"};function r_(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":i_[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n_={[kh]:"ENVMAP_BLENDING_MULTIPLY",[ld]:"ENVMAP_BLENDING_MIX",[hd]:"ENVMAP_BLENDING_ADD"};function s_(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":n_[t.combine]||"ENVMAP_BLENDING_NONE"}function a_(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function o_(t,e,i,r){let n=t.getContext(),s=i.defines,a=i.vertexShader,o=i.fragmentShader,l=Qv(i),h=t_(i),u=r_(i),d=s_(i),c=a_(i),p=Wv(i),g=qv(s),v=n.createProgram(),m,f,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(_n).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g].filter(_n).join(`
`),f.length>0&&(f+=`
`)):(m=[Bh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+u:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_n).join(`
`),f=[Bh(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,g,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+h:"",i.envMap?"#define "+u:"",i.envMap?"#define "+d:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+l:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==di?"#define TONE_MAPPING":"",i.toneMapping!==di?$e.tonemapping_pars_fragment:"",i.toneMapping!==di?kv("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,Vv("linearToOutputTexel",i.outputColorSpace),Hv(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(_n).join(`
`)),a=Po(a),a=Lh(a,i),a=Nh(a,i),o=Po(o),o=Lh(o,i),o=Nh(o,i),a=Dh(a),o=Dh(o),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",i.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let b=y+m+a,_=y+f+o,M=Rh(n,n.VERTEX_SHADER,b),T=Rh(n,n.FRAGMENT_SHADER,_);n.attachShader(v,M),n.attachShader(v,T),i.index0AttributeName!==void 0?n.bindAttribLocation(v,0,i.index0AttributeName):i.hasPositionAttribute===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function C(P){if(t.debug.checkShaderErrors){let B=n.getProgramInfoLog(v)||"",F=n.getShaderInfoLog(M)||"",I=n.getShaderInfoLog(T)||"",D=B.trim(),z=F.trim(),H=I.trim(),$=!0,W=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(n,v,M,T);else{let Z=Ph(n,M,"vertex"),K=Ph(n,T,"fragment");He("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+Z+`
`+K)}else D!==""?Ge("WebGLProgram: Program Info Log:",D):(z===""||H==="")&&(W=!1);W&&(P.diagnostics={runnable:$,programLog:D,vertexShader:{log:z,prefix:m},fragmentShader:{log:H,prefix:f}})}n.deleteShader(M),n.deleteShader(T),x=new Cs(n,v),S=Xv(n,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=n.getProgramParameter(v,Uv)),N},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Fv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=M,this.fragmentShader=T,this}var l_=0,h_=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new c_(t),e.set(t,i)),i}},c_=class{constructor(t){this.id=l_++,this.code=t,this.usedTimes=0}};function u_(t){return t===ur||t===Rs||t===Is}function d_(t,e,i,r,n,s){let a=new oc,o=new h_,l=new Set,h=[],u=new Map,d=r.logarithmicDepthBuffer,c=r.precision,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,S,N,P,B,F){let I=P.fog,D=B.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=e.get(x.envMap||z,H),W=$&&$.mapping===Bs?$.image.height:null,Z=p[x.type];x.precision!==null&&(c=r.getMaxPrecision(x.precision),c!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",c,"instead."));let K=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,oe=K!==void 0?K.length:0,Se=0;D.morphAttributes.position!==void 0&&(Se=1),D.morphAttributes.normal!==void 0&&(Se=2),D.morphAttributes.color!==void 0&&(Se=3);let rt,ze,J,ne;if(Z){let Et=ci[Z];rt=Et.vertexShader,ze=Et.fragmentShader}else{rt=x.vertexShader,ze=x.fragmentShader;let Et=o.getVertexShaderStage(x),lt=o.getFragmentShaderStage(x);o.update(x,Et,lt),J=Et.id,ne=lt.id}let le=t.getRenderTarget(),Pe=t.state.buffers.depth.getReversed(),Ue=B.isInstancedMesh===!0,ge=B.isBatchedMesh===!0,qe=!!x.map,re=!!x.matcap,ie=!!$,ue=!!x.aoMap,be=!!x.lightMap,ee=!!x.bumpMap&&x.wireframe===!1,se=!!x.normalMap,_e=!!x.displacementMap,Te=!!x.emissiveMap,Fe=!!x.metalnessMap,U=!!x.roughnessMap,Je=x.anisotropy>0,Ye=x.clearcoat>0,Ze=x.dispersion>0,R=x.retroreflectivity>0,w=x.iridescence>0,O=x.sheen>0,X=x.transmission>0,Q=Je&&!!x.anisotropyMap,pe=Ye&&!!x.clearcoatMap,ve=Ye&&!!x.clearcoatNormalMap,k=Ye&&!!x.clearcoatRoughnessMap,fe=w&&!!x.iridescenceMap,xe=w&&!!x.iridescenceThicknessMap,Ie=O&&!!x.sheenColorMap,ce=O&&!!x.sheenRoughnessMap,Be=!!x.specularMap,Oe=!!x.specularColorMap,Xe=!!x.specularIntensityMap,ot=X&&!!x.transmissionMap,G=X&&!!x.thicknessMap,te=!!x.gradientMap,ae=!!x.alphaMap,Ee=x.alphaTest>0,Le=!!x.alphaHash,he=!!x.extensions,we=di;x.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(we=t.toneMapping);let ke={shaderID:Z,shaderType:x.type,shaderName:x.name,vertexShader:rt,fragmentShader:ze,defines:x.defines,customVertexShaderID:J,customFragmentShaderID:ne,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:c,batching:ge,batchingColor:ge&&B._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&B.instanceColor!==null,instancingMorph:Ue&&B.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:qe,matcap:re,envMap:ie,envMapMode:ie&&$.mapping,envMapCubeUVHeight:W,aoMap:ue,lightMap:be,bumpMap:ee,normalMap:se,displacementMap:_e,emissiveMap:Te,normalMapObjectSpace:se&&x.normalMapType===dd,normalMapTangentSpace:se&&x.normalMapType===Ao,packedNormalMap:se&&x.normalMapType===Ao&&u_(x.normalMap.format),metalnessMap:Fe,roughnessMap:U,anisotropy:Je,anisotropyMap:Q,clearcoat:Ye,clearcoatMap:pe,clearcoatNormalMap:ve,clearcoatRoughnessMap:k,dispersion:Ze,retroreflection:R,iridescence:w,iridescenceMap:fe,iridescenceThicknessMap:xe,sheen:O,sheenColorMap:Ie,sheenRoughnessMap:ce,specularMap:Be,specularColorMap:Oe,specularIntensityMap:Xe,transmission:X,transmissionMap:ot,thicknessMap:G,gradientMap:te,opaque:x.transparent===!1&&x.blending===yn&&x.alphaToCoverage===!1,alphaMap:ae,alphaTest:Ee,alphaHash:Le,combine:x.combine,mapUv:qe&&g(x.map.channel),aoMapUv:ue&&g(x.aoMap.channel),lightMapUv:be&&g(x.lightMap.channel),bumpMapUv:ee&&g(x.bumpMap.channel),normalMapUv:se&&g(x.normalMap.channel),displacementMapUv:_e&&g(x.displacementMap.channel),emissiveMapUv:Te&&g(x.emissiveMap.channel),metalnessMapUv:Fe&&g(x.metalnessMap.channel),roughnessMapUv:U&&g(x.roughnessMap.channel),anisotropyMapUv:Q&&g(x.anisotropyMap.channel),clearcoatMapUv:pe&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ve&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ce&&g(x.sheenRoughnessMap.channel),specularMapUv:Be&&g(x.specularMap.channel),specularColorMapUv:Oe&&g(x.specularColorMap.channel),specularIntensityMapUv:Xe&&g(x.specularIntensityMap.channel),transmissionMapUv:ot&&g(x.transmissionMap.channel),thicknessMapUv:G&&g(x.thicknessMap.channel),alphaMapUv:ae&&g(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(se||Je),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!D.attributes.uv&&(qe||ae),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&se===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Pe,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:we,decodeVideoTexture:qe&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===ht,decodeVideoTextureEmissive:Te&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ci,flipSided:x.side===zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:he&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(he&&x.extensions.multiDraw===!0||ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ke.vertexUv1s=l.has(1),ke.vertexUv2s=l.has(2),ke.vertexUv3s=l.has(3),l.clear(),ke}function m(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let N in x.defines)S.push(N),S.push(x.defines[N]);return x.isRawShaderMaterial===!1&&(f(S,x),y(S,x),S.push(t.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function f(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function y(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function b(x){let S=p[x.type],N;if(S){let P=ci[S];N=cf.clone(P.uniforms)}else N=x.uniforms;return N}function _(x,S){let N=u.get(S);return N!==void 0?++N.usedTimes:(N=new o_(t,S,x,n),h.push(N),u.set(S,N)),N}function M(x){if(--x.usedTimes===0){let S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:b,acquireProgram:_,releaseProgram:M,releaseShaderCache:T,programs:h,dispose:C}}function p_(){let t=new WeakMap;function e(a){return t.has(a)}function i(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function r(a){t.delete(a)}function n(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:i,remove:r,update:n,dispose:s}}function f_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Uh(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Fh(){let t=[],e=0,i=[],r=[],n=[];function s(){e=0,i.length=0,r.length=0,n.length=0}function a(c){let p=0;return c.isInstancedMesh&&(p+=2),c.isSkinnedMesh&&(p+=1),p}function o(c,p,g,v,m,f){let y=t[e];return y===void 0?(y={id:c.id,object:c,geometry:p,material:g,materialVariant:a(c),groupOrder:v,renderOrder:c.renderOrder,z:m,group:f},t[e]=y):(y.id=c.id,y.object=c,y.geometry=p,y.material=g,y.materialVariant=a(c),y.groupOrder=v,y.renderOrder=c.renderOrder,y.z=m,y.group=f),e++,y}function l(c,p,g,v,m,f,y){y.reversedDepth===!0&&(m=-m);let b=o(c,p,g,v,m,f);g.transmission>0?r.push(b):g.transparent===!0?n.push(b):i.push(b)}function h(c,p,g,v,m,f){let y=o(c,p,g,v,m,f);g.transmission>0?r.unshift(y):g.transparent===!0?n.unshift(y):i.unshift(y)}function u(c,p){i.length>1&&i.sort(c||f_),r.length>1&&r.sort(p||Uh),n.length>1&&n.sort(p||Uh)}function d(){for(let c=e,p=t.length;c<p;c++){let g=t[c];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:i,transmissive:r,transparent:n,init:s,push:l,unshift:h,finish:d,sort:u}}function m_(){let t=new WeakMap;function e(r,n){let s=t.get(r),a;return s===void 0?(a=new Fh,t.set(r,[a])):n>=s.length?(a=new Fh,s.push(a)):a=s[n],a}function i(){t=new WeakMap}return{get:e,dispose:i}}function g_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={direction:new L,color:new Qe};break;case"SpotLight":i={position:new L,direction:new L,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new L,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new L,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":i={color:new Qe,position:new L,halfWidth:new L,halfHeight:new L};break}return t[e.id]=i,i}}}function v_(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let i;switch(e.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=i,i}}}var __=0;function y_(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function x_(t){let e=new g_,i=v_(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new L);let n=new L,s=new tt,a=new tt;function o(h){let u=0,d=0,c=0;for(let B=0;B<9;B++)r.probe[B].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,y=0,b=0,_=0,M=0,T=0,C=0,x=0,S=0,N=0;h.sort(y_);for(let B=0,F=h.length;B<F;B++){let I=h[B],D=I.color,z=I.intensity,H=I.distance,$=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===ur?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=D.r*z,d+=D.g*z,c+=D.b*z;else if(I.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(I.sh.coefficients[W],z);N++}else if(I.isSunLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,K=i.get(I);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),r.sunShadow[g]=K,r.sunShadowMap[g]=$;let oe=Z.getViewportCount();for(let Se=0;Se<oe;Se++)r.sunShadowMatrix[v+Se]=Z.getMatrix(Se),r.sunShadowCascade[v+Se]=Z._cascadeData[Se];v+=oe,g++}r.sun[p]=W,p++}else if(I.isDirectionalLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Z=I.shadow,K=i.get(I);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.directionalShadow[m]=K,r.directionalShadowMap[m]=$,r.directionalShadowMatrix[m]=I.shadow.matrix,M++}r.directional[m]=W,m++}else if(I.isSpotLight){let W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(D).multiplyScalar(z),W.distance=H,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,r.spot[y]=W;let Z=I.shadow;if(I.map&&(r.spotLightMap[x]=I.map,x++,Z.updateMatrices(I),I.castShadow&&S++),r.spotLightMatrix[y]=Z.matrix,I.castShadow){let K=i.get(I);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,r.spotShadow[y]=K,r.spotShadowMap[y]=$,C++}y++}else if(I.isRectAreaLight){let W=e.get(I);W.color.copy(D).multiplyScalar(z),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),r.rectArea[b]=W,b++}else if(I.isPointLight){let W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let Z=I.shadow,K=i.get(I);K.shadowIntensity=Z.intensity,K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,r.pointShadow[f]=K,r.pointShadowMap[f]=$,r.pointShadowMatrix[f]=I.shadow.matrix,T++}r.point[f]=W,f++}else if(I.isHemisphereLight){let W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(z),W.groundColor.copy(I.groundColor).multiplyScalar(z),r.hemi[_]=W,_++}}b>0&&(t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2)),r.ambient[0]=u,r.ambient[1]=d,r.ambient[2]=c;let P=r.hash;(P.sunLength!==p||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==y||P.rectAreaLength!==b||P.hemiLength!==_||P.numSunShadows!==g||P.numDirectionalShadows!==M||P.numPointShadows!==T||P.numSpotShadows!==C||P.numSpotMaps!==x||P.numLightProbes!==N)&&(r.sun.length=p,r.directional.length=m,r.spot.length=y,r.rectArea.length=b,r.point.length=f,r.hemi.length=_,r.sunShadow.length=g,r.sunShadowMap.length=g,r.sunShadowMatrix.length=v,r.sunShadowCascade.length=v,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.directionalShadowMatrix.length=M,r.pointShadow.length=T,r.pointShadowMap.length=T,r.pointShadowMatrix.length=T,r.spotShadow.length=C,r.spotShadowMap.length=C,r.spotLightMatrix.length=C+x-S,r.spotLightMap.length=x,r.numSpotLightShadowsWithMaps=S,r.numLightProbes=N,P.sunLength=p,P.directionalLength=m,P.pointLength=f,P.spotLength=y,P.rectAreaLength=b,P.hemiLength=_,P.numSunShadows=g,P.numDirectionalShadows=M,P.numPointShadows=T,P.numSpotShadows=C,P.numSpotMaps=x,P.numLightProbes=N,r.version=__++)}function l(h,u){let d=0,c=0,p=0,g=0,v=0,m=0,f=u.matrixWorldInverse;for(let y=0,b=h.length;y<b;y++){let _=h[y];if(_.isSunLight){let M=r.sun[d];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),d++}else if(_.isDirectionalLight){let M=r.directional[c];M.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(f),c++}else if(_.isSpotLight){let M=r.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),M.direction.setFromMatrixPosition(_.matrixWorld),n.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(f),g++}else if(_.isRectAreaLight){let M=r.rectArea[v];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),a.identity(),s.copy(_.matrixWorld),s.premultiply(f),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let M=r.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(f),p++}else if(_.isHemisphereLight){let M=r.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(f),m++}}}return{setup:o,setupView:l,state:r}}function Oh(t){let e=new x_(t),i=[],r=[],n=[];function s(c){d.camera=c,i.length=0,r.length=0,n.length=0}function a(c){i.push(c)}function o(c){r.push(c)}function l(c){n.push(c)}function h(){e.setup(i)}function u(c){e.setupView(i,c)}let d={lightsArray:i,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:h,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function b_(t){let e=new WeakMap;function i(n,s=0){let a=e.get(n),o;return a===void 0?(o=new Oh(t),e.set(n,[o])):s>=a.length?(o=new Oh(t),a.push(o)):o=a[s],o}function r(){e=new WeakMap}return{get:i,dispose:r}}var M_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,S_=`uniform sampler2D shadow_pass;
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
}`,w_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],E_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],zh=new tt,mn=new L,za=new L;function T_(t,e,i){let r=new en,n=new de,s=new de,a=new mt,o=new ff,l=new mf,h={},u=i.maxTextureSize,d={[hr]:zt,[zt]:hr,[Ci]:Ci},c=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:M_,fragmentShader:S_}),p=c.clone();p.defines.HORIZONTAL_PASS=1;let g=new Mt;g.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new _t(g,c),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bs;let f=this.type;this.render=function(T,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Lo&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=bs);let S=t.getRenderTarget(),N=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Ii),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=f!==this.type;F&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(D=>D.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,D=T.length;I<D;I++){let z=T[I],H=z.shadow;if(H===void 0){Ge("WebGLShadowMap:",z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;n.copy(H.mapSize);let $=H.getFrameExtents();n.multiply($),s.copy(H.mapSize),(n.x>u||n.y>u)&&(n.x>u&&(s.x=Math.floor(u/$.x),n.x=s.x*$.x,H.mapSize.x=s.x),n.y>u&&(s.y=Math.floor(u/$.y),n.y=s.y*$.y,H.mapSize.y=s.y));let W=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=W,H.map===null||F===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===gn){if(z.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ii(n.x,n.y,{format:ur,type:fi,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),H.map.texture.name=z.name+".shadowMap",H.map.depthTexture=new Rn(n.x,n.y,ui),H.map.depthTexture.name=z.name+".shadowMapDepth",H.map.depthTexture.format=Ni,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Lt,H.map.depthTexture.magFilter=Lt}else z.isPointLight?(H.map=new ru(n.x),H.map.depthTexture=new pp(n.x,pi)):(H.map=new ii(n.x,n.y),H.map.depthTexture=new Rn(n.x,n.y,pi)),H.map.depthTexture.name=z.name+".shadowMap",H.map.depthTexture.format=Ni,this.type===bs?(H.map.depthTexture.compareFunction=W?Vo:zo,H.map.depthTexture.minFilter=Bt,H.map.depthTexture.magFilter=Bt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Lt,H.map.depthTexture.magFilter=Lt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==n.x||H.map.height!==n.y)&&H.map.setSize(n.x,n.y);let Z=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();z.isPointLight!==!0&&H.updateMatrices(z,x);for(let K=0;K<Z;K++){let oe=H.getCamera(K);if(z.isPointLight){let Se=H.camera,rt=H.matrix,ze=z.distance||Se.far;ze!==Se.far&&(Se.far=ze,Se.updateProjectionMatrix()),mn.setFromMatrixPosition(z.matrixWorld),Se.position.copy(mn),za.copy(Se.position),za.add(w_[K]),Se.up.copy(E_[K]),Se.lookAt(za),Se.updateMatrixWorld(),rt.makeTranslation(-mn.x,-mn.y,-mn.z),zh.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),H._frustum.setFromProjectionMatrix(zh,Se.coordinateSystem,Se.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,K),t.clear();else{K===0&&(t.setRenderTarget(H.map),t.clear());let Se=H.getViewport(K);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),B.viewport(a)}r=H.getFrustum(K),_(C,x,oe,z,this.type)}H.isPointLightShadow!==!0&&this.type===gn&&y(H,x),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(S,N,P)};function y(T,C){let x=e.update(v);c.defines.VSM_SAMPLES!==T.blurSamples&&(c.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,c.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null?T.mapPass=new ii(n.x,n.y,{format:ur,type:fi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),c.uniforms.shadow_pass.value=T.map.depthTexture,c.uniforms.resolution.value.set(T.map.width,T.map.height),c.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(C,null,x,c,v,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value.set(T.map.width,T.map.height),p.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(C,null,x,p,v,null)}function b(T,C,x,S){let N=null,P=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)N=P;else if(N=x.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let B=N.uuid,F=C.uuid,I=h[B];I===void 0&&(I={},h[B]=I);let D=I[F];D===void 0&&(D=N.clone(),I[F]=D,C.addEventListener("dispose",M)),N=D}if(N.visible=C.visible,N.wireframe=C.wireframe,S===gn?N.side=C.shadowSide!==null?C.shadowSide:C.side:N.side=C.shadowSide!==null?C.shadowSide:d[C.side],N.alphaMap=C.alphaMap,N.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,N.map=C.map,N.clipShadows=C.clipShadows,N.clippingPlanes=C.clippingPlanes,N.clipIntersection=C.clipIntersection,N.displacementMap=C.displacementMap,N.displacementScale=C.displacementScale,N.displacementBias=C.displacementBias,N.wireframeLinewidth=C.wireframeLinewidth,N.linewidth=C.linewidth,x.isPointLight===!0&&N.isMeshDistanceMaterial===!0){let B=t.properties.get(N);B.light=x}return N}function _(T,C,x,S,N){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&N===gn)&&(!T.frustumCulled||T.intersectsFrustum(r))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let B=e.update(T),F=T.material;if(Array.isArray(F)){let I=B.groups;for(let D=0,z=I.length;D<z;D++){let H=I[D],$=F[H.materialIndex];if($&&$.visible){let W=b(T,$,S,N);T.onBeforeShadow(t,T,C,x,B,W,H),t.renderBufferDirect(x,null,B,W,T,H),T.onAfterShadow(t,T,C,x,B,W,H)}}}else if(F.visible){let I=b(T,F,S,N);T.onBeforeShadow(t,T,C,x,B,I,null),t.renderBufferDirect(x,null,B,I,T,null),T.onAfterShadow(t,T,C,x,B,I,null)}}let P=T.children;for(let B=0,F=P.length;B<F;B++)_(P[B],C,x,S,N)}function M(T){T.target.removeEventListener("dispose",M);for(let C in h){let x=h[C],S=T.target.uuid;S in x&&(x[S].dispose(),delete x[S])}}}function A_(t,e){function i(){let G=!1,te=new mt,ae=null,Ee=new mt(0,0,0,0);return{setMask:function(Le){ae!==Le&&!G&&(t.colorMask(Le,Le,Le,Le),ae=Le)},setLocked:function(Le){G=Le},setClear:function(Le,he,we,ke,Et){Et===!0&&(Le*=ke,he*=ke,we*=ke),te.set(Le,he,we,ke),Ee.equals(te)===!1&&(t.clearColor(Le,he,we,ke),Ee.copy(te))},reset:function(){G=!1,ae=null,Ee.set(-1,0,0,0)}}}function r(){let G=!1,te=!1,ae=null,Ee=null,Le=null;return{setReversed:function(he){if(te!==he){let we=e.get("EXT_clip_control");he?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),te=he;let ke=Le;Le=null,this.setClear(ke)}},getReversed:function(){return te},setTest:function(he){he?le(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(he){ae!==he&&!G&&(t.depthMask(he),ae=he)},setFunc:function(he){if(te&&(he=Ed[he]),Ee!==he){switch(he){case Va:t.depthFunc(t.NEVER);break;case Ga:t.depthFunc(t.ALWAYS);break;case ka:t.depthFunc(t.LESS);break;case Sn:t.depthFunc(t.LEQUAL);break;case Ha:t.depthFunc(t.EQUAL);break;case Wa:t.depthFunc(t.GEQUAL);break;case qa:t.depthFunc(t.GREATER);break;case Xa:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Ee=he}},setLocked:function(he){G=he},setClear:function(he){Le!==he&&(Le=he,te&&(he=1-he),t.clearDepth(he))},reset:function(){G=!1,ae=null,Ee=null,Le=null,te=!1}}}function n(){let G=!1,te=null,ae=null,Ee=null,Le=null,he=null,we=null,ke=null,Et=null;return{setTest:function(lt){G||(lt?le(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(lt){te!==lt&&!G&&(t.stencilMask(lt),te=lt)},setFunc:function(lt,ai,Mi){(ae!==lt||Ee!==ai||Le!==Mi)&&(t.stencilFunc(lt,ai,Mi),ae=lt,Ee=ai,Le=Mi)},setOp:function(lt,ai,Mi){(he!==lt||we!==ai||ke!==Mi)&&(t.stencilOp(lt,ai,Mi),he=lt,we=ai,ke=Mi)},setLocked:function(lt){G=lt},setClear:function(lt){Et!==lt&&(t.clearStencil(lt),Et=lt)},reset:function(){G=!1,te=null,ae=null,Ee=null,Le=null,he=null,we=null,ke=null,Et=null}}}let s=new i,a=new r,o=new n,l=new WeakMap,h=new WeakMap,u={},d={},c={},p=new WeakMap,g=[],v=null,m=!1,f=null,y=null,b=null,_=null,M=null,T=null,C=null,x=new Qe(0,0,0),S=0,N=!1,P=null,B=null,F=null,I=null,D=null,z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,$=0,W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=$>=2);let Z=null,K={},oe=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),rt=new mt().fromArray(oe),ze=new mt().fromArray(Se);function J(G,te,ae,Ee){let Le=new Uint8Array(4),he=t.createTexture();t.bindTexture(G,he),t.texParameteri(G,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(G,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<ae;we++)G===t.TEXTURE_3D||G===t.TEXTURE_2D_ARRAY?t.texImage3D(te,0,t.RGBA,1,1,Ee,0,t.RGBA,t.UNSIGNED_BYTE,Le):t.texImage2D(te+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Le);return he}let ne={};ne[t.TEXTURE_2D]=J(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=J(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=J(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=J(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),le(t.DEPTH_TEST),a.setFunc(Sn),ee(!1),se(Rl),le(t.CULL_FACE),ue(Ii);function le(G){u[G]!==!0&&(t.enable(G),u[G]=!0)}function Pe(G){u[G]!==!1&&(t.disable(G),u[G]=!1)}function Ue(G,te){return c[G]!==te?(t.bindFramebuffer(G,te),c[G]=te,G===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=te),G===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=te),!0):!1}function ge(G,te){let ae=g,Ee=!1;if(G){ae=p.get(te),ae===void 0&&(ae=[],p.set(te,ae));let Le=G.textures;if(ae.length!==Le.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let he=0,we=Le.length;he<we;he++)ae[he]=t.COLOR_ATTACHMENT0+he;ae.length=Le.length,Ee=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,Ee=!0);Ee&&t.drawBuffers(ae)}function qe(G){return v!==G?(t.useProgram(G),v=G,!0):!1}let re={[Ur]:t.FUNC_ADD,[qu]:t.FUNC_SUBTRACT,[Xu]:t.FUNC_REVERSE_SUBTRACT};re[ju]=t.MIN,re[Yu]=t.MAX;let ie={[Zu]:t.ZERO,[Ku]:t.ONE,[Ju]:t.SRC_COLOR,[Vh]:t.SRC_ALPHA,[rd]:t.SRC_ALPHA_SATURATE,[td]:t.DST_COLOR,[Qu]:t.DST_ALPHA,[$u]:t.ONE_MINUS_SRC_COLOR,[Gh]:t.ONE_MINUS_SRC_ALPHA,[id]:t.ONE_MINUS_DST_COLOR,[ed]:t.ONE_MINUS_DST_ALPHA,[nd]:t.CONSTANT_COLOR,[sd]:t.ONE_MINUS_CONSTANT_COLOR,[ad]:t.CONSTANT_ALPHA,[od]:t.ONE_MINUS_CONSTANT_ALPHA};function ue(G,te,ae,Ee,Le,he,we,ke,Et,lt){if(G===Ii){m===!0&&(Pe(t.BLEND),m=!1);return}if(m===!1&&(le(t.BLEND),m=!0),G!==Wu){if(G!==f||lt!==N){if((y!==Ur||M!==Ur)&&(t.blendEquation(t.FUNC_ADD),y=Ur,M=Ur),lt)switch(G){case yn:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Il:t.blendFunc(t.ONE,t.ONE);break;case Pl:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Ll:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:He("WebGLState: Invalid blending: ",G);break}else switch(G){case yn:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Il:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Pl:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ll:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",G);break}b=null,_=null,T=null,C=null,x.set(0,0,0),S=0,f=G,N=lt}return}Le=Le||te,he=he||ae,we=we||Ee,(te!==y||Le!==M)&&(t.blendEquationSeparate(re[te],re[Le]),y=te,M=Le),(ae!==b||Ee!==_||he!==T||we!==C)&&(t.blendFuncSeparate(ie[ae],ie[Ee],ie[he],ie[we]),b=ae,_=Ee,T=he,C=we),(ke.equals(x)===!1||Et!==S)&&(t.blendColor(ke.r,ke.g,ke.b,Et),x.copy(ke),S=Et),f=G,N=!1}function be(G,te){G.side===Ci?Pe(t.CULL_FACE):le(t.CULL_FACE);let ae=G.side===zt;te&&(ae=!ae),ee(ae),G.blending===yn&&G.transparent===!1?ue(Ii):ue(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),a.setFunc(G.depthFunc),a.setTest(G.depthTest),a.setMask(G.depthWrite),s.setMask(G.colorWrite);let Ee=G.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Te(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(G){P!==G&&(G?t.frontFace(t.CW):t.frontFace(t.CCW),P=G)}function se(G){G!==ku?(le(t.CULL_FACE),G!==B&&(G===Rl?t.cullFace(t.BACK):G===Hu?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),B=G}function _e(G){G!==F&&(H&&t.lineWidth(G),F=G)}function Te(G,te,ae){G?(le(t.POLYGON_OFFSET_FILL),(I!==te||D!==ae)&&(I=te,D=ae,a.getReversed()&&(te=-te),t.polygonOffset(te,ae))):Pe(t.POLYGON_OFFSET_FILL)}function Fe(G){G?le(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function U(G){G===void 0&&(G=t.TEXTURE0+z-1),Z!==G&&(t.activeTexture(G),Z=G)}function Je(G,te,ae){ae===void 0&&(Z===null?ae=t.TEXTURE0+z-1:ae=Z);let Ee=K[ae];Ee===void 0&&(Ee={type:void 0,texture:void 0},K[ae]=Ee),(Ee.type!==G||Ee.texture!==te)&&(Z!==ae&&(t.activeTexture(ae),Z=ae),t.bindTexture(G,te||ne[G]),Ee.type=G,Ee.texture=te)}function Ye(){let G=K[Z];G!==void 0&&G.type!==void 0&&(t.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Ze(){try{t.compressedTexImage2D(...arguments)}catch(G){He("WebGLState:",G)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(G){He("WebGLState:",G)}}function w(){try{t.texSubImage2D(...arguments)}catch(G){He("WebGLState:",G)}}function O(){try{t.texSubImage3D(...arguments)}catch(G){He("WebGLState:",G)}}function X(){try{t.compressedTexSubImage2D(...arguments)}catch(G){He("WebGLState:",G)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(G){He("WebGLState:",G)}}function pe(){try{t.texStorage2D(...arguments)}catch(G){He("WebGLState:",G)}}function ve(){try{t.texStorage3D(...arguments)}catch(G){He("WebGLState:",G)}}function k(){try{t.texImage2D(...arguments)}catch(G){He("WebGLState:",G)}}function fe(){try{t.texImage3D(...arguments)}catch(G){He("WebGLState:",G)}}function xe(G){return d[G]!==void 0?d[G]:t.getParameter(G)}function Ie(G,te){d[G]!==te&&(t.pixelStorei(G,te),d[G]=te)}function ce(G){rt.equals(G)===!1&&(t.scissor(G.x,G.y,G.z,G.w),rt.copy(G))}function Be(G){ze.equals(G)===!1&&(t.viewport(G.x,G.y,G.z,G.w),ze.copy(G))}function Oe(G,te){let ae=h.get(te);ae===void 0&&(ae=new WeakMap,h.set(te,ae));let Ee=ae.get(G);Ee===void 0&&(Ee=t.getUniformBlockIndex(te,G.name),ae.set(G,Ee))}function Xe(G,te){let ae=h.get(te).get(G);l.get(te)!==ae&&(t.uniformBlockBinding(te,ae,G.__bindingPointIndex),l.set(te,ae))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},Z=null,K={},c={},p=new WeakMap,g=[],v=null,m=!1,f=null,y=null,b=null,_=null,M=null,T=null,C=null,x=new Qe(0,0,0),S=0,N=!1,P=null,B=null,F=null,I=null,D=null,rt.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:le,disable:Pe,bindFramebuffer:Ue,drawBuffers:ge,useProgram:qe,setBlending:ue,setMaterial:be,setFlipSided:ee,setCullFace:se,setLineWidth:_e,setPolygonOffset:Te,setScissorTest:Fe,activeTexture:U,bindTexture:Je,unbindTexture:Ye,compressedTexImage2D:Ze,compressedTexImage3D:R,texImage2D:k,texImage3D:fe,pixelStorei:Ie,getParameter:xe,updateUBOMapping:Oe,uniformBlockBinding:Xe,texStorage2D:pe,texStorage3D:ve,texSubImage2D:w,texSubImage3D:O,compressedTexSubImage2D:X,compressedTexSubImage3D:Q,scissor:ce,viewport:Be,reset:ot}}function C_(t,e,i,r,n,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new de,u=new WeakMap,d=new Set,c,p=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,w){return g?new OffscreenCanvas(R,w):An("canvas")}function m(R,w,O){let X=1,Q=Ze(R);if((Q.width>O||Q.height>O)&&(X=O/Math.max(Q.width,Q.height)),X<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pe=Math.floor(X*Q.width),ve=Math.floor(X*Q.height);c===void 0&&(c=v(pe,ve));let k=w?v(pe,ve):c;return k.width=pe,k.height=ve,k.getContext("2d").drawImage(R,0,0,pe,ve),Ge("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+pe+"x"+ve+")."),k}else return"data"in R&&Ge("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function f(R){return R.generateMipmaps}function y(R){t.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,w,O,X,Q,pe=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ve;X&&(ve=e.get("EXT_texture_norm16"),ve||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let k=w;if(w===t.RED&&(O===t.FLOAT&&(k=t.R32F),O===t.HALF_FLOAT&&(k=t.R16F),O===t.UNSIGNED_BYTE&&(k=t.R8),O===t.UNSIGNED_SHORT&&ve&&(k=ve.R16_EXT),O===t.SHORT&&ve&&(k=ve.R16_SNORM_EXT)),w===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(k=t.R8UI),O===t.UNSIGNED_SHORT&&(k=t.R16UI),O===t.UNSIGNED_INT&&(k=t.R32UI),O===t.BYTE&&(k=t.R8I),O===t.SHORT&&(k=t.R16I),O===t.INT&&(k=t.R32I)),w===t.RG&&(O===t.FLOAT&&(k=t.RG32F),O===t.HALF_FLOAT&&(k=t.RG16F),O===t.UNSIGNED_BYTE&&(k=t.RG8),O===t.UNSIGNED_SHORT&&ve&&(k=ve.RG16_EXT),O===t.SHORT&&ve&&(k=ve.RG16_SNORM_EXT)),w===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(k=t.RG8UI),O===t.UNSIGNED_SHORT&&(k=t.RG16UI),O===t.UNSIGNED_INT&&(k=t.RG32UI),O===t.BYTE&&(k=t.RG8I),O===t.SHORT&&(k=t.RG16I),O===t.INT&&(k=t.RG32I)),w===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(k=t.RGB8UI),O===t.UNSIGNED_SHORT&&(k=t.RGB16UI),O===t.UNSIGNED_INT&&(k=t.RGB32UI),O===t.BYTE&&(k=t.RGB8I),O===t.SHORT&&(k=t.RGB16I),O===t.INT&&(k=t.RGB32I)),w===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(k=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(k=t.RGBA16UI),O===t.UNSIGNED_INT&&(k=t.RGBA32UI),O===t.BYTE&&(k=t.RGBA8I),O===t.SHORT&&(k=t.RGBA16I),O===t.INT&&(k=t.RGBA32I)),w===t.RGB&&(O===t.UNSIGNED_SHORT&&ve&&(k=ve.RGB16_EXT),O===t.SHORT&&ve&&(k=ve.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(k=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(k=t.R11F_G11F_B10F)),w===t.RGBA){let fe=pe?Ns:nt.getTransfer(Q);O===t.FLOAT&&(k=t.RGBA32F),O===t.HALF_FLOAT&&(k=t.RGBA16F),O===t.UNSIGNED_BYTE&&(k=fe===ht?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&ve&&(k=ve.RGBA16_EXT),O===t.SHORT&&ve&&(k=ve.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(k=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(k=t.RGB5_A1)}return(k===t.R16F||k===t.R32F||k===t.RG16F||k===t.RG32F||k===t.RGBA16F||k===t.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function M(R,w){let O;return R?w===null||w===pi||w===En?O=t.DEPTH24_STENCIL8:w===ui?O=t.DEPTH32F_STENCIL8:w===wn&&(O=t.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===pi||w===En?O=t.DEPTH_COMPONENT24:w===ui?O=t.DEPTH_COMPONENT32F:w===wn&&(O=t.DEPTH_COMPONENT16),O}function T(R,w){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Lt&&R.minFilter!==Bt?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function C(R){let w=R.target;w.removeEventListener("dispose",C),S(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&d.delete(w)}function x(R){let w=R.target;w.removeEventListener("dispose",x),P(w)}function S(R){let w=r.get(R);if(w.__webglInit===void 0)return;let O=R.source,X=p.get(O);if(X){let Q=X[w.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&N(R),Object.keys(X).length===0&&p.delete(O)}r.remove(R)}function N(R){let w=r.get(R);t.deleteTexture(w.__webglTexture);let O=R.source,X=p.get(O);delete X[w.__cacheKey],a.memory.textures--}function P(R){let w=r.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),r.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(w.__webglFramebuffer[X]))for(let Q=0;Q<w.__webglFramebuffer[X].length;Q++)t.deleteFramebuffer(w.__webglFramebuffer[X][Q]);else t.deleteFramebuffer(w.__webglFramebuffer[X]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[X])}else{if(Array.isArray(w.__webglFramebuffer))for(let X=0;X<w.__webglFramebuffer.length;X++)t.deleteFramebuffer(w.__webglFramebuffer[X]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let X=0;X<w.__webglColorRenderbuffer.length;X++)w.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[X]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let O=R.textures;for(let X=0,Q=O.length;X<Q;X++){let pe=r.get(O[X]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),a.memory.textures--),r.remove(O[X])}r.remove(R)}let B=0;function F(){B=0}function I(){return B}function D(R){B=R}function z(){let R=B;return R>=n.maxTextures&&Ge("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+n.maxTextures),B+=1,R}function H(R){let w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function $(R,w){let O=r.get(R);if(R.isVideoTexture&&Je(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){let X=R.image;if(X===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(O,R,w);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+w)}function W(R,w){let O=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Pe(O,R,w);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);i.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+w)}function Z(R,w){let O=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Pe(O,R,w);return}i.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+w)}function K(R,w){let O=r.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){Ue(O,R,w);return}i.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+w)}let oe={[ja]:t.REPEAT,[Ri]:t.CLAMP_TO_EDGE,[Ya]:t.MIRRORED_REPEAT},Se={[Lt]:t.NEAREST,[cd]:t.NEAREST_MIPMAP_NEAREST,[Yn]:t.NEAREST_MIPMAP_LINEAR,[Bt]:t.LINEAR,[na]:t.LINEAR_MIPMAP_NEAREST,[sr]:t.LINEAR_MIPMAP_LINEAR},rt={[fd]:t.NEVER,[yd]:t.ALWAYS,[md]:t.LESS,[zo]:t.LEQUAL,[gd]:t.EQUAL,[Vo]:t.GEQUAL,[vd]:t.GREATER,[_d]:t.NOTEQUAL};function ze(R,w){if(w.type===ui&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bt||w.magFilter===na||w.magFilter===Yn||w.magFilter===sr||w.minFilter===Bt||w.minFilter===na||w.minFilter===Yn||w.minFilter===sr)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,oe[w.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,oe[w.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,oe[w.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Se[w.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Se[w.minFilter]),w.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,rt[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Lt||w.minFilter!==Yn&&w.minFilter!==sr||w.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,n.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function J(R,w){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",C));let X=w.source,Q=p.get(X);Q===void 0&&(Q={},p.set(X,Q));let pe=H(w);if(pe!==R.__cacheKey){Q[pe]===void 0&&(Q[pe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),Q[pe].usedTimes++;let ve=Q[R.__cacheKey];ve!==void 0&&(Q[R.__cacheKey].usedTimes--,ve.usedTimes===0&&N(w)),R.__cacheKey=pe,R.__webglTexture=Q[pe].texture}return O}function ne(R,w,O){return Math.floor(Math.floor(R/O)/w)}function le(R,w,O,X){let Q=R.updateRanges;if(Q.length===0)i.texSubImage2D(t.TEXTURE_2D,0,0,0,w.width,w.height,O,X,w.data);else{Q.sort((xe,Ie)=>xe.start-Ie.start);let pe=0;for(let xe=1;xe<Q.length;xe++){let Ie=Q[pe],ce=Q[xe],Be=Ie.start+Ie.count,Oe=ne(ce.start,w.width,4),Xe=ne(Ie.start,w.width,4);ce.start<=Be+1&&Oe===Xe&&ne(ce.start+ce.count-1,w.width,4)===Oe?Ie.count=Math.max(Ie.count,ce.start+ce.count-Ie.start):(++pe,Q[pe]=ce)}Q.length=pe+1;let ve=i.getParameter(t.UNPACK_ROW_LENGTH),k=i.getParameter(t.UNPACK_SKIP_PIXELS),fe=i.getParameter(t.UNPACK_SKIP_ROWS);i.pixelStorei(t.UNPACK_ROW_LENGTH,w.width);for(let xe=0,Ie=Q.length;xe<Ie;xe++){let ce=Q[xe],Be=Math.floor(ce.start/4),Oe=Math.ceil(ce.count/4),Xe=Be%w.width,ot=Math.floor(Be/w.width),G=Oe;i.pixelStorei(t.UNPACK_SKIP_PIXELS,Xe),i.pixelStorei(t.UNPACK_SKIP_ROWS,ot),i.texSubImage2D(t.TEXTURE_2D,0,Xe,ot,G,1,O,X,w.data)}R.clearUpdateRanges(),i.pixelStorei(t.UNPACK_ROW_LENGTH,ve),i.pixelStorei(t.UNPACK_SKIP_PIXELS,k),i.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function Pe(R,w,O){let X=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(X=t.TEXTURE_3D);let Q=J(R,w),pe=w.source;i.bindTexture(X,R.__webglTexture,t.TEXTURE0+O);let ve=r.get(pe);if(pe.version!==ve.__version||Q===!0){if(i.activeTexture(t.TEXTURE0+O),!(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)){let te=nt.getPrimaries(nt.workingColorSpace),ae=w.colorSpace===ji?null:nt.getPrimaries(w.colorSpace),Ee=w.colorSpace===ji||te===ae?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}i.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment);let k=m(w.image,!1,n.maxTextureSize);k=Ye(w,k);let fe=s.convert(w.format,w.colorSpace),xe=s.convert(w.type),Ie=_(w.internalFormat,fe,xe,w.normalized,w.colorSpace,w.isVideoTexture);ze(X,w);let ce,Be=w.mipmaps,Oe=w.isVideoTexture!==!0,Xe=ve.__version===void 0||Q===!0,ot=pe.dataReady,G=T(w,k);if(w.isDepthTexture)Ie=M(w.format===ar,w.type),Xe&&(Oe?i.texStorage2D(t.TEXTURE_2D,1,Ie,k.width,k.height):i.texImage2D(t.TEXTURE_2D,0,Ie,k.width,k.height,0,fe,xe,null));else if(w.isDataTexture)if(Be.length>0){Oe&&Xe&&i.texStorage2D(t.TEXTURE_2D,G,Ie,Be[0].width,Be[0].height);for(let te=0,ae=Be.length;te<ae;te++)ce=Be[te],Oe?ot&&i.texSubImage2D(t.TEXTURE_2D,te,0,0,ce.width,ce.height,fe,xe,ce.data):i.texImage2D(t.TEXTURE_2D,te,Ie,ce.width,ce.height,0,fe,xe,ce.data);w.generateMipmaps=!1}else Oe?(Xe&&i.texStorage2D(t.TEXTURE_2D,G,Ie,k.width,k.height),ot&&le(w,k,fe,xe)):i.texImage2D(t.TEXTURE_2D,0,Ie,k.width,k.height,0,fe,xe,k.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Oe&&Xe&&i.texStorage3D(t.TEXTURE_2D_ARRAY,G,Ie,Be[0].width,Be[0].height,k.depth);for(let te=0,ae=Be.length;te<ae;te++)if(ce=Be[te],w.format!==ei)if(fe!==null)if(Oe){if(ot)if(w.layerUpdates.size>0){let Ee=vh(ce.width,ce.height,w.format,w.type);for(let Le of w.layerUpdates){let he=ce.data.subarray(Le*Ee/ce.data.BYTES_PER_ELEMENT,(Le+1)*Ee/ce.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,Le,ce.width,ce.height,1,fe,he)}}else i.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,k.depth,fe,ce.data)}else i.compressedTexImage3D(t.TEXTURE_2D_ARRAY,te,Ie,ce.width,ce.height,k.depth,0,ce.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?ot&&i.texSubImage3D(t.TEXTURE_2D_ARRAY,te,0,0,0,ce.width,ce.height,k.depth,fe,xe,ce.data):i.texImage3D(t.TEXTURE_2D_ARRAY,te,Ie,ce.width,ce.height,k.depth,0,fe,xe,ce.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Oe&&Xe&&i.texStorage2D(t.TEXTURE_2D,G,Ie,Be[0].width,Be[0].height);for(let te=0,ae=Be.length;te<ae;te++)ce=Be[te],w.format!==ei?fe!==null?Oe?ot&&i.compressedTexSubImage2D(t.TEXTURE_2D,te,0,0,ce.width,ce.height,fe,ce.data):i.compressedTexImage2D(t.TEXTURE_2D,te,Ie,ce.width,ce.height,0,ce.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?ot&&i.texSubImage2D(t.TEXTURE_2D,te,0,0,ce.width,ce.height,fe,xe,ce.data):i.texImage2D(t.TEXTURE_2D,te,Ie,ce.width,ce.height,0,fe,xe,ce.data)}else if(w.isDataArrayTexture)if(Oe){if(Xe&&i.texStorage3D(t.TEXTURE_2D_ARRAY,G,Ie,k.width,k.height,k.depth),ot)if(w.layerUpdates.size>0){let te=vh(k.width,k.height,w.format,w.type);for(let ae of w.layerUpdates){let Ee=k.data.subarray(ae*te/k.data.BYTES_PER_ELEMENT,(ae+1)*te/k.data.BYTES_PER_ELEMENT);i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ae,k.width,k.height,1,fe,xe,Ee)}w.clearLayerUpdates()}else i.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,k.width,k.height,k.depth,fe,xe,k.data)}else i.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,k.width,k.height,k.depth,0,fe,xe,k.data);else if(w.isData3DTexture)Oe?(Xe&&i.texStorage3D(t.TEXTURE_3D,G,Ie,k.width,k.height,k.depth),ot&&i.texSubImage3D(t.TEXTURE_3D,0,0,0,0,k.width,k.height,k.depth,fe,xe,k.data)):i.texImage3D(t.TEXTURE_3D,0,Ie,k.width,k.height,k.depth,0,fe,xe,k.data);else if(w.isFramebufferTexture){if(Xe)if(Oe)i.texStorage2D(t.TEXTURE_2D,G,Ie,k.width,k.height);else{let te=k.width,ae=k.height;for(let Ee=0;Ee<G;Ee++)i.texImage2D(t.TEXTURE_2D,Ee,Ie,te,ae,0,fe,xe,null),te>>=1,ae>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in t){let te=t.canvas;if(te.hasAttribute("layoutsubtree")||te.setAttribute("layoutsubtree","true"),k.parentNode!==te){te.appendChild(k),d.add(w),te.onpaint=ae=>{let Ee=ae.changedElements;for(let Le of d)Ee.includes(Le.image)&&(Le.needsUpdate=!0)},te.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,k);else{let ae=t.RGBA,Ee=t.RGBA,Le=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ae,Ee,Le,k)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Oe&&Xe){let te=Ze(Be[0]);i.texStorage2D(t.TEXTURE_2D,G,Ie,te.width,te.height)}for(let te=0,ae=Be.length;te<ae;te++)ce=Be[te],Oe?ot&&i.texSubImage2D(t.TEXTURE_2D,te,0,0,fe,xe,ce):i.texImage2D(t.TEXTURE_2D,te,Ie,fe,xe,ce);w.generateMipmaps=!1}else if(Oe){if(Xe){let te=Ze(k);i.texStorage2D(t.TEXTURE_2D,G,Ie,te.width,te.height)}ot&&i.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,xe,k)}else i.texImage2D(t.TEXTURE_2D,0,Ie,fe,xe,k);f(w)&&y(X),ve.__version=pe.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function Ue(R,w,O){if(w.image.length!==6)return;let X=J(R,w),Q=w.source;i.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);let pe=r.get(Q);if(Q.version!==pe.__version||X===!0){i.activeTexture(t.TEXTURE0+O);let ve=nt.getPrimaries(nt.workingColorSpace),k=w.colorSpace===ji?null:nt.getPrimaries(w.colorSpace),fe=w.colorSpace===ji||ve===k?t.NONE:t.BROWSER_DEFAULT_WEBGL;i.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);let xe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ie=w.image[0]&&w.image[0].isDataTexture,ce=[];for(let he=0;he<6;he++)!xe&&!Ie?ce[he]=m(w.image[he],!0,n.maxCubemapSize):ce[he]=Ie?w.image[he].image:w.image[he],ce[he]=Ye(w,ce[he]);let Be=ce[0],Oe=s.convert(w.format,w.colorSpace),Xe=s.convert(w.type),ot=_(w.internalFormat,Oe,Xe,w.normalized,w.colorSpace),G=w.isVideoTexture!==!0,te=pe.__version===void 0||X===!0,ae=Q.dataReady,Ee=T(w,Be);ze(t.TEXTURE_CUBE_MAP,w);let Le;if(xe){G&&te&&i.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,ot,Be.width,Be.height);for(let he=0;he<6;he++){Le=ce[he].mipmaps;for(let we=0;we<Le.length;we++){let ke=Le[we];w.format!==ei?Oe!==null?G?ae&&i.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,we,0,0,ke.width,ke.height,Oe,ke.data):i.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,we,ot,ke.width,ke.height,0,ke.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?ae&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,we,0,0,ke.width,ke.height,Oe,Xe,ke.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,we,ot,ke.width,ke.height,0,Oe,Xe,ke.data)}}}else{if(Le=w.mipmaps,G&&te){Le.length>0&&Ee++;let he=Ze(ce[0]);i.texStorage2D(t.TEXTURE_CUBE_MAP,Ee,ot,he.width,he.height)}for(let he=0;he<6;he++)if(Ie){G?ae&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ce[he].width,ce[he].height,Oe,Xe,ce[he].data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ot,ce[he].width,ce[he].height,0,Oe,Xe,ce[he].data);for(let we=0;we<Le.length;we++){let ke=Le[we].image[he].image;G?ae&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,we+1,0,0,ke.width,ke.height,Oe,Xe,ke.data):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,we+1,ot,ke.width,ke.height,0,Oe,Xe,ke.data)}}else{G?ae&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Oe,Xe,ce[he]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ot,Oe,Xe,ce[he]);for(let we=0;we<Le.length;we++){let ke=Le[we];G?ae&&i.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,we+1,0,0,Oe,Xe,ke.image[he]):i.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+he,we+1,ot,Oe,Xe,ke.image[he])}}}f(w)&&y(t.TEXTURE_CUBE_MAP),pe.__version=Q.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function ge(R,w,O,X,Q,pe){let ve=s.convert(O.format,O.colorSpace),k=s.convert(O.type),fe=_(O.internalFormat,ve,k,O.normalized,O.colorSpace),xe=r.get(w),Ie=r.get(O);if(Ie.__renderTarget=w,!xe.__hasExternalTextures){let ce=Math.max(1,w.width>>pe),Be=Math.max(1,w.height>>pe);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?i.texImage3D(Q,pe,fe,ce,Be,w.depth,0,ve,k,null):i.texImage2D(Q,pe,fe,ce,Be,0,ve,k,null)}i.bindFramebuffer(t.FRAMEBUFFER,R),U(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,Q,Ie.__webglTexture,0,Fe(w)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,Q,Ie.__webglTexture,pe),i.bindFramebuffer(t.FRAMEBUFFER,null)}function qe(R,w,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),w.depthBuffer){let X=w.depthTexture,Q=X&&X.isDepthTexture?X.type:null,pe=M(w.stencilBuffer,Q),ve=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;U(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe(w),pe,w.width,w.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe(w),pe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,pe,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,R)}else{let X=w.textures;for(let Q=0;Q<X.length;Q++){let pe=X[Q],ve=s.convert(pe.format,pe.colorSpace),k=s.convert(pe.type),fe=_(pe.internalFormat,ve,k,pe.normalized,pe.colorSpace);U(w)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe(w),fe,w.width,w.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe(w),fe,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,fe,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(R,w,O){let X=w.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(t.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=r.get(w.depthTexture);if(Q.__renderTarget=w,(!Q.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),X){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,w.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=t.createTexture(),i.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ze(t.TEXTURE_CUBE_MAP,w.depthTexture);let xe=s.convert(w.depthTexture.format),Ie=s.convert(w.depthTexture.type),ce;w.depthTexture.format===Ni?ce=t.DEPTH_COMPONENT24:w.depthTexture.format===ar&&(ce=t.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,ce,w.width,w.height,0,xe,Ie,null)}}else $(w.depthTexture,0);let pe=Q.__webglTexture,ve=Fe(w),k=X?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,fe=w.depthTexture.format===ar?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ni)U(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,k,pe,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,fe,k,pe,0);else if(w.depthTexture.format===ar)U(w)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,k,pe,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,fe,k,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(R){let w=r.get(R),O=R.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==R.depthTexture){let X=R.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),X){let Q=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,X.removeEventListener("dispose",Q)};X.addEventListener("dispose",Q),w.__depthDisposeCallback=Q}w.__boundDepthTexture=X}if(R.depthTexture&&!w.__autoAllocateDepthBuffer)if(O)for(let X=0;X<6;X++)re(w.__webglFramebuffer[X],R,X);else{let X=R.texture.mipmaps;X&&X.length>0?re(w.__webglFramebuffer[0],R,0):re(w.__webglFramebuffer,R,0)}else if(O){w.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(i.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[X]),w.__webglDepthbuffer[X]===void 0)w.__webglDepthbuffer[X]=t.createRenderbuffer(),qe(w.__webglDepthbuffer[X],R,!1);else{let Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=w.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,pe)}}else{let X=R.texture.mipmaps;if(X&&X.length>0?i.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[0]):i.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=t.createRenderbuffer(),qe(w.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=w.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,pe)}}i.bindFramebuffer(t.FRAMEBUFFER,null)}function ue(R,w,O){let X=r.get(R);w!==void 0&&ge(X.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&ie(R)}function be(R){let w=R.texture,O=r.get(R),X=r.get(w);R.addEventListener("dispose",x);let Q=R.textures,pe=R.isWebGLCubeRenderTarget===!0,ve=Q.length>1;if(ve||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=w.version,a.memory.textures++),pe){O.__webglFramebuffer=[];for(let k=0;k<6;k++)if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer[k]=[];for(let fe=0;fe<w.mipmaps.length;fe++)O.__webglFramebuffer[k][fe]=t.createFramebuffer()}else O.__webglFramebuffer[k]=t.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){O.__webglFramebuffer=[];for(let k=0;k<w.mipmaps.length;k++)O.__webglFramebuffer[k]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ve)for(let k=0,fe=Q.length;k<fe;k++){let xe=r.get(Q[k]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&U(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],i.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let k=0;k<Q.length;k++){let fe=Q[k];O.__webglColorRenderbuffer[k]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[k]);let xe=s.convert(fe.format,fe.colorSpace),Ie=s.convert(fe.type),ce=_(fe.internalFormat,xe,Ie,fe.normalized,fe.colorSpace,R.isXRRenderTarget===!0),Be=Fe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,ce,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,O.__webglColorRenderbuffer[k])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),qe(O.__webglDepthRenderbuffer,R,!0)),i.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){i.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),ze(t.TEXTURE_CUBE_MAP,w);for(let k=0;k<6;k++)if(w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)ge(O.__webglFramebuffer[k][fe],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+k,fe);else ge(O.__webglFramebuffer[k],R,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+k,0);f(w)&&y(t.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(ve){for(let k=0,fe=Q.length;k<fe;k++){let xe=Q[k],Ie=r.get(xe),ce=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(ce,Ie.__webglTexture),ze(ce,xe),ge(O.__webglFramebuffer,R,xe,t.COLOR_ATTACHMENT0+k,ce,0),f(xe)&&y(ce)}i.unbindTexture()}else{let k=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(k=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),i.bindTexture(k,X.__webglTexture),ze(k,w),w.mipmaps&&w.mipmaps.length>0)for(let fe=0;fe<w.mipmaps.length;fe++)ge(O.__webglFramebuffer[fe],R,w,t.COLOR_ATTACHMENT0,k,fe);else ge(O.__webglFramebuffer,R,w,t.COLOR_ATTACHMENT0,k,0);f(w)&&y(k),i.unbindTexture()}R.depthBuffer&&ie(R)}function ee(R){let w=R.textures;for(let O=0,X=w.length;O<X;O++){let Q=w[O];if(f(Q)){let pe=b(R),ve=r.get(Q).__webglTexture;i.bindTexture(pe,ve),y(pe),i.unbindTexture()}}}let se=[],_e=[];function Te(R){if(R.samples>0){if(U(R)===!1){let w=R.textures,O=R.width,X=R.height,Q=t.COLOR_BUFFER_BIT,pe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=r.get(R),k=w.length>1;if(k)for(let xe=0;xe<w.length;xe++)i.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),i.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);i.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);let fe=R.texture.mipmaps;fe&&fe.length>0?i.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):i.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let xe=0;xe<w.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),k){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);let Ie=r.get(w[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ie,0)}t.blitFramebuffer(0,0,O,X,0,0,O,X,Q,t.NEAREST),l===!0&&(se.length=0,_e.length=0,se.push(t.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(se.push(pe),_e.push(pe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,_e)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,se))}if(i.bindFramebuffer(t.READ_FRAMEBUFFER,null),i.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),k)for(let xe=0;xe<w.length;xe++){i.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,ve.__webglColorRenderbuffer[xe]);let Ie=r.get(w[xe]).__webglTexture;i.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,Ie,0)}i.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let w=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[w])}}}function Fe(R){return Math.min(n.maxSamples,R.samples)}function U(R){let w=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Je(R){let w=a.render.frame;u.get(R)!==w&&(u.set(R,w),R.update())}function Ye(R,w){let O=R.colorSpace,X=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==Ls&&O!==ji&&(nt.getTransfer(O)===ht?(X!==ei||Q!==Wt)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",O)),w}function Ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(h.width=R.naturalWidth||R.width,h.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(h.width=R.displayWidth,h.height=R.displayHeight):(h.width=R.width,h.height=R.height),h}this.allocateTextureUnit=z,this.resetTextureUnits=F,this.getTextureUnits=I,this.setTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=K,this.rebindTextures=ue,this.setupRenderTarget=be,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=U,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function R_(t,e){function i(r,n=ji){let s,a=nt.getTransfer(n);if(r===Wt)return t.UNSIGNED_BYTE;if(r===Do)return t.UNSIGNED_SHORT_4_4_4_4;if(r===Bo)return t.UNSIGNED_SHORT_5_5_5_1;if(r===Qh)return t.UNSIGNED_INT_5_9_9_9_REV;if(r===ec)return t.UNSIGNED_INT_10F_11F_11F_REV;if(r===Jh)return t.BYTE;if(r===$h)return t.SHORT;if(r===wn)return t.UNSIGNED_SHORT;if(r===No)return t.INT;if(r===pi)return t.UNSIGNED_INT;if(r===ui)return t.FLOAT;if(r===fi)return t.HALF_FLOAT;if(r===tc)return t.ALPHA;if(r===ic)return t.RGB;if(r===ei)return t.RGBA;if(r===Ni)return t.DEPTH_COMPONENT;if(r===ar)return t.DEPTH_STENCIL;if(r===rc)return t.RED;if(r===Uo)return t.RED_INTEGER;if(r===ur)return t.RG;if(r===Fo)return t.RG_INTEGER;if(r===Oo)return t.RGBA_INTEGER;if(r===Ms||r===Ss||r===ws||r===Es)if(a===ht)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(r===Ms)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ss)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(r===Ms)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ss)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ws)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Za||r===Ka||r===Ja||r===$a)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(r===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ka)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ja)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qa||r===eo||r===to||r===io||r===ro||r===Rs||r===no)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(r===Qa||r===eo)return a===ht?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(r===to)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(r===io)return s.COMPRESSED_R11_EAC;if(r===ro)return s.COMPRESSED_SIGNED_R11_EAC;if(r===Rs)return s.COMPRESSED_RG11_EAC;if(r===no)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===so||r===ao||r===oo||r===lo||r===ho||r===co||r===uo||r===po||r===fo||r===mo||r===go||r===vo||r===_o||r===yo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(r===so)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ao)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===oo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===lo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ho)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===co)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===uo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===po)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===go)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===vo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_o)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yo)return a===ht?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xo||r===bo||r===Mo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(r===xo)return a===ht?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===So||r===wo||r===Is||r===Eo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(r===So)return s.COMPRESSED_RED_RGTC1_EXT;if(r===wo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Is)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===En?t.UNSIGNED_INT_24_8:t[r]!==void 0?t[r]:null}return{convert:i}}var I_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P_=`
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

}`,L_=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new vc(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new mi({vertexShader:I_,fragmentShader:P_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new nn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},N_=class extends pr{constructor(t,e){super();let i=this,r=null,n=1,s=null,a="local-floor",o=1,l=null,h=null,u=null,d=null,c=null,p=null,g=typeof XRWebGLBinding<"u",v=new L_,m={},f=e.getContextAttributes(),y=null,b=null,_=[],M=[],T=new de,C=null,x=null,S=new Ht;S.viewport=new mt;let N=new Ht;N.viewport=new mt;let P=[S,N],B=new Lf,F=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ne=_[J];return ne===void 0&&(ne=new da,_[J]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(J){let ne=_[J];return ne===void 0&&(ne=new da,_[J]=ne),ne.getGripSpace()},this.getHand=function(J){let ne=_[J];return ne===void 0&&(ne=new da,_[J]=ne),ne.getHandSpace()};function D(J){let ne=M.indexOf(J.inputSource);if(ne===-1)return;let le=_[ne];le!==void 0&&(le.update(J.inputSource,J.frame,l||s),le.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let J=0;J<_.length;J++){let ne=M[J];ne!==null&&(M[J]=null,_[J].disconnect(ne))}F=null,I=null,v.reset();for(let J in m)delete m[J];if(t.setRenderTarget(y),c=null,d=null,u=null,r=null,b=null,ze.stop(),i.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),x!==null){let J=x.camera;J.fov=x.fov,J.zoom=x.zoom,J.updateProjectionMatrix(),x=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){n=J,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:c},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(J){if(r=J,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),f.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,le=null,Pe=null;f.depth&&(Pe=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ne=f.stencil?ar:Ni,le=f.stencil?En:pi);let Ue={colorFormat:e.RGBA8,depthFormat:Pe,scaleFactor:n};u=this.getBinding(),d=u.createProjectionLayer(Ue),r.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new ii(d.textureWidth,d.textureHeight,{format:ei,type:Wt,depthTexture:new Rn(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ne={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:n};c=new XRWebGLLayer(r,e,ne),r.updateRenderState({baseLayer:c}),t.setPixelRatio(1),t.setSize(c.framebufferWidth,c.framebufferHeight,!1),b=new ii(c.framebufferWidth,c.framebufferHeight,{format:ei,type:Wt,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:c.ignoreDepthValues===!1,resolveStencilBuffer:c.ignoreDepthValues===!1,storeMultisampledDepthBuffer:c.ignoreDepthValues===!1,storeMultisampledStencilBuffer:c.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function H(J){for(let ne=0;ne<J.removed.length;ne++){let le=J.removed[ne],Pe=M.indexOf(le);Pe>=0&&(M[Pe]=null,_[Pe].disconnect(le))}for(let ne=0;ne<J.added.length;ne++){let le=J.added[ne],Pe=M.indexOf(le);if(Pe===-1){for(let ge=0;ge<_.length;ge++)if(ge>=M.length){M.push(le),Pe=ge;break}else if(M[ge]===null){M[ge]=le,Pe=ge;break}if(Pe===-1)break}let Ue=_[Pe];Ue&&Ue.connect(le)}}let $=new L,W=new L;function Z(J,ne,le){$.setFromMatrixPosition(ne.matrixWorld),W.setFromMatrixPosition(le.matrixWorld);let Pe=$.distanceTo(W),Ue=ne.projectionMatrix.elements,ge=le.projectionMatrix.elements,qe=Ue[14]/(Ue[10]-1),re=Ue[14]/(Ue[10]+1),ie=(Ue[9]+1)/Ue[5],ue=(Ue[9]-1)/Ue[5],be=(Ue[8]-1)/Ue[0],ee=(ge[8]+1)/ge[0],se=qe*be,_e=qe*ee,Te=Pe/(-be+ee),Fe=Te*-be;if(ne.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Fe),J.translateZ(Te),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Ue[10]===-1)J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{let U=qe+Te,Je=re+Te,Ye=se-Fe,Ze=_e+(Pe-Fe),R=ie*re/Je*U,w=ue*re/Je*U;J.projectionMatrix.makePerspective(Ye,Ze,R,w,U,Je),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function K(J,ne){ne===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ne.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(r===null)return;let ne=J.near,le=J.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(le=v.depthFar)),B.near=N.near=S.near=ne,B.far=N.far=S.far=le,(F!==B.near||I!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),F=B.near,I=B.far),B.layers.mask=J.layers.mask|6,S.layers.mask=B.layers.mask&-5,N.layers.mask=B.layers.mask&-3;let Pe=J.parent,Ue=B.cameras;K(B,Pe);for(let ge=0;ge<Ue.length;ge++)K(Ue[ge],Pe);Ue.length===2?Z(B,S,N):B.projectionMatrix.copy(S.projectionMatrix),x===null&&J.isPerspectiveCamera&&(x={camera:J,fov:J.fov,zoom:J.zoom}),oe(J,B,Pe)};function oe(J,ne,le){le===null?J.matrix.copy(ne.matrixWorld):(J.matrix.copy(le.matrixWorld),J.matrix.invert(),J.matrix.multiply(ne.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ne.projectionMatrix),J.projectionMatrixInverse.copy(ne.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Cn*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&c===null))return o},this.setFoveation=function(J){o=J,d!==null&&(d.fixedFoveation=J),c!==null&&c.fixedFoveation!==void 0&&(c.fixedFoveation=J)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(B)},this.getCameraTexture=function(J){return m[J]};let Se=null;function rt(J,ne){if(h=ne.getViewerPose(l||s),p=ne,h!==null){let le=h.views;c!==null&&(t.setRenderTargetFramebuffer(b,c.framebuffer),t.setRenderTarget(b));let Pe=!1;le.length!==B.cameras.length&&(B.cameras.length=0,Pe=!0);for(let ge=0;ge<le.length;ge++){let qe=le[ge],re=null;if(c!==null)re=c.getViewport(qe);else{let ue=u.getViewSubImage(d,qe);re=ue.viewport,ge===0&&(t.setRenderTargetTextures(b,ue.colorTexture,ue.depthStencilTexture),t.setRenderTarget(b))}let ie=P[ge];ie===void 0&&(ie=new Ht,ie.layers.enable(ge),ie.viewport=new mt,P[ge]=ie),ie.matrix.fromArray(qe.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(qe.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(re.x,re.y,re.width,re.height),ge===0&&(B.matrix.copy(ie.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Pe===!0&&B.cameras.push(ie)}let Ue=r.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){u=i.getBinding();let ge=u.getDepthInformation(le[0]);ge&&ge.isValid&&ge.texture&&v.init(ge,r.renderState)}if(Ue&&Ue.includes("camera-access")&&g){t.state.unbindTexture(),u=i.getBinding();for(let ge=0;ge<le.length;ge++){let qe=le[ge].camera;if(qe){let re=m[qe];re||(re=new vc,m[qe]=re);let ie=u.getCameraImage(qe);re.sourceTexture=ie}}}}for(let le=0;le<_.length;le++){let Pe=M[le],Ue=_[le];Pe!==null&&Ue!==void 0&&Ue.update(Pe,ne,l||s)}Se&&Se(J,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),p=null}let ze=new tu;ze.setAnimationLoop(rt),this.setAnimationLoop=function(J){Se=J},this.dispose=function(){}}},D_=new tt,lu=new Ke;lu.set(-1,0,0,0,1,0,0,0,1);function B_(t,e){function i(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function r(m,f){f.color.getRGB(m.fogColor.value,Yc(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function n(m,f,y,b,_){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(m,f):f.isMeshLambertMaterial?(s(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(m,f),c(m,f),f.isMeshPhysicalMaterial&&p(m,f,_)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),v(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,b):f.isSpriteMaterial?h(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,i(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===zt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,i(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===zt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,i(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,i(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,i(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let y=e.get(f),b=y.envMap,_=y.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(D_.makeRotationFromEuler(_)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,i(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,i(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,b){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=b*.5,f.map&&(m.map.value=f.map,i(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,i(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,i(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function c(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,i(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,i(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,i(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,i(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,i(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,i(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,i(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===zt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,i(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,i(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,i(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,i(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,i(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,i(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,i(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){let y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function U_(t,e,i,r){let n={},s={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let T=M.program;r.uniformBlockBinding(_,T)}function h(_,M){let T=n[_.id];T===void 0&&(m(_),T=u(_),n[_.id]=T,_.addEventListener("dispose",y));let C=M.program;r.updateUBOMapping(_,C);let x=e.render.frame;s[_.id]!==x&&(c(_),s[_.id]=x)}function u(_){let M=d();_.__bindingPointIndex=M;let T=t.createBuffer(),C=_.__size,x=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,M,T),T}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(_){let M=n[_.id],T=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let x=0,S=T.length;x<S;x++){let N=T[x];if(Array.isArray(N))for(let P=0,B=N.length;P<B;P++)p(N[P],x,P,C);else p(N,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,M,T,C){if(v(_,M,T,C)===!0){let x=_.__offset,S=_.value;if(Array.isArray(S)){let N=0;for(let P=0;P<S.length;P++){let B=S[P],F=f(B);g(B,_.__data,N),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(N+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,_.__data)}}function g(_,M,T){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,T)}function v(_,M,T,C){let x=_.value,S=M+"_"+T;if(C[S]===void 0)return typeof x=="number"||typeof x=="boolean"?C[S]=x:ArrayBuffer.isView(x)?C[S]=x.slice():C[S]=x.clone(),!0;{let N=C[S];if(typeof x=="number"||typeof x=="boolean"){if(N!==x)return C[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(N.equals(x)===!1)return N.copy(x),!0}}return!1}function m(_){let M=_.uniforms,T=0,C=16;for(let S=0,N=M.length;S<N;S++){let P=Array.isArray(M[S])?M[S]:[M[S]];for(let B=0,F=P.length;B<F;B++){let I=P[B],D=Array.isArray(I.value)?I.value:[I.value];for(let z=0,H=D.length;z<H;z++){let $=D[z],W=f($),Z=T%C,K=Z%W.boundary,oe=Z+K;T+=K,oe!==0&&C-oe<W.storage&&(T+=C-oe),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=T,T+=W.storage}}}let x=T%C;return x>0&&(T+=C-x),_.__size=T,_.__cache={},this}function f(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",_),M}function y(_){let M=_.target;M.removeEventListener("dispose",y);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(n[M.id]),delete n[M.id],delete s[M.id]}function b(){for(let _ in n)t.deleteBuffer(n[_]);a=[],n={},s={}}return{bind:l,update:h,dispose:b}}var F_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function O_(){return hi===null&&(hi=new hp(F_,16,16,ur,fi),hi.name="DFG_LUT",hi.minFilter=Bt,hi.magFilter=Bt,hi.wrapS=Ri,hi.wrapT=Ri,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var hu=class{constructor(t={}){let{canvas:e=Sd(),context:i=null,depth:r=!0,stencil:n=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:c=Wt}=t;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=s;let g=c,v=new Set([Oo,Fo,Uo]),m=new Set([Wt,pi,wn,En,Do,Bo]),f=new Uint32Array(4),y=new Int32Array(4),b=new L,_=null,M=null,T=[],C=[],x=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,N=!1,P=null,B=null,F=null,I=null;this._outputColorSpace=Pt;let D=0,z=0,H=null,$=-1,W=null,Z=new mt,K=new mt,oe=null,Se=new Qe(0),rt=0,ze=e.width,J=e.height,ne=1,le=null,Pe=null,Ue=new mt(0,0,ze,J),ge=new mt(0,0,ze,J),qe=!1,re=new en,ie=!1,ue=!1,be=new tt,ee=new L,se=new mt,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Te=!1;function Fe(){return H===null?ne:1}let U=i;function Je(A,V){return e.getContext(A,V)}let Ye,Ze,R,w,O,X,Q,pe,ve,k,fe,xe,Ie,ce,Be,Oe,Xe,ot,G,te,ae,Ee,Le;try{let A={alpha:!0,depth:r,stencil:n,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r186"),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",lt,!1),U===null){let V="webgl2";if(U=Je(V,A),U===null)throw Je(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}he()}catch(A){throw e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),He("WebGLRenderer: "+A.message),A}function he(){Ye=new O0(U),Ye.init(),ae=new R_(U,Ye),Ze=new C0(U,Ye,t,ae),R=new A_(U,Ye),Ze.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),B=U.createFramebuffer(),F=U.createFramebuffer(),I=U.createFramebuffer(),w=new G0(U),O=new p_,X=new C_(U,Ye,R,O,Ze,ae,w),Q=new F0(S),pe=new Hf(U),Ee=new T0(U,pe),ve=new z0(U,pe,w,Ee),k=new H0(U,ve,pe,Ee,w),ot=new k0(U,Ze,X),Be=new R0(O),fe=new d_(S,Q,Ye,Ze,Ee,Be),xe=new B_(S,O),Ie=new m_,ce=new b_(Ye),Xe=new E0(S,Q,R,k,p,o),Oe=new T_(S,k,Ze),Le=new U_(U,w,Ze,R),G=new A0(U,Ye,w),te=new V0(U,Ye,w),w.programs=fe.programs,S.capabilities=Ze,S.extensions=Ye,S.properties=O,S.renderLists=Ie,S.shadowMap=Oe,S.state=R,S.info=w}g!==Wt&&(x=new q0(g,e.width,e.height,a,r,n));let we=new N_(S,U);this.xr=we,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(A){A!==void 0&&(ne=A,this.setSize(ze,J,!1))},this.getSize=function(A){return A.set(ze,J)},this.setSize=function(A,V,Y=!0){if(we.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}ze=A,J=V,e.width=Math.floor(A*ne),e.height=Math.floor(V*ne),Y===!0&&(e.style.width=A+"px",e.style.height=V+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(ze*ne,J*ne).floor()},this.setDrawingBufferSize=function(A,V,Y){ze=A,J=V,ne=Y,e.width=Math.floor(A*Y),e.height=Math.floor(V*Y),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(g===Wt){He("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(Ue)},this.setViewport=function(A,V,Y,j){A.isVector4?Ue.set(A.x,A.y,A.z,A.w):Ue.set(A,V,Y,j),R.viewport(Z.copy(Ue).multiplyScalar(ne).round())},this.getScissor=function(A){return A.copy(ge)},this.setScissor=function(A,V,Y,j){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,V,Y,j),R.scissor(K.copy(ge).multiplyScalar(ne).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(A){R.setScissorTest(qe=A)},this.setOpaqueSort=function(A){le=A},this.setTransparentSort=function(A){Pe=A},this.getClearColor=function(A){return A.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor(...arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,Y=!0){let j=0;if(A){let q=!1;if(H!==null){let me=H.texture.format;q=v.has(me)}if(q){let me=H.texture.type,Me=m.has(me),Ae=Xe.getClearColor(),Ce=Xe.getClearAlpha(),Ve=Ae.r,it=Ae.g,st=Ae.b;Me?(f[0]=Ve,f[1]=it,f[2]=st,f[3]=Ce,U.clearBufferuiv(U.COLOR,0,f)):(y[0]=Ve,y[1]=it,y[2]=st,y[3]=Ce,U.clearBufferiv(U.COLOR,0,y))}else j|=U.COLOR_BUFFER_BIT}V&&(j|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),Xe.dispose(),Ie.dispose(),ce.dispose(),O.dispose(),Q.dispose(),k.dispose(),Ee.dispose(),Le.dispose(),fe.dispose(),we.dispose(),we.removeEventListener("sessionstart",xl),we.removeEventListener("sessionend",bl),$i.stop()};function ke(A){A.preventDefault(),zl("WebGLRenderer: Context Lost."),N=!0}function Et(){zl("WebGLRenderer: Context Restored."),N=!1;let A=w.autoReset,V=Oe.enabled,Y=Oe.autoUpdate,j=Oe.needsUpdate,q=Oe.type;he(),w.autoReset=A,Oe.enabled=V,Oe.autoUpdate=Y,Oe.needsUpdate=j,Oe.type=q}function lt(A){He("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ai(A){let V=A.target;V.removeEventListener("dispose",ai),Mi(V)}function Mi(A){Uu(A),O.remove(A)}function Uu(A){let V=O.get(A).programs;V!==void 0&&(V.forEach(function(Y){fe.releaseProgram(Y)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,Y,j,q,me){V===null&&(V=_e);let Me=q.isMesh&&q.matrixWorld.determinantAffine()<0,Ae=zu(A,V,Y,j,q);R.setMaterial(j,Me);let Ce=Y.index,Ve=1;if(j.wireframe===!0){if(Ce=ve.getWireframeAttribute(Y),Ce===void 0)return;Ve=2}let it=Y.drawRange,st=Y.attributes.position,De=it.start*Ve,ct=(it.start+it.count)*Ve;me!==null&&(De=Math.max(De,me.start*Ve),ct=Math.min(ct,(me.start+me.count)*Ve)),Ce!==null?(De=Math.max(De,0),ct=Math.min(ct,Ce.count)):st!=null&&(De=Math.max(De,0),ct=Math.min(ct,st.count));let St=ct-De;if(St<0||St===1/0)return;Ee.setup(q,j,Ae,Y,Ce);let pt,ft=G;if(Ce!==null&&(pt=pe.get(Ce),ft=te,ft.setIndex(pt)),q.isMesh)j.wireframe===!0?(R.setLineWidth(j.wireframeLinewidth*Fe()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(q.isLine){let yt=j.linewidth;yt===void 0&&(yt=1),R.setLineWidth(yt*Fe()),q.isLineSegments?ft.setMode(U.LINES):q.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else q.isPoints?ft.setMode(U.POINTS):q.isSprite&&ft.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(Ye.get("WEBGL_multi_draw"))ft.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let yt=q._multiDrawStarts,Ne=q._multiDrawCounts,Ut=q._multiDrawCount,Qi=Ce?pe.get(Ce).bytesPerElement:1,Yt=O.get(j).currentProgram.getUniforms();for(let oi=0;oi<Ut;oi++)Yt.setValue(U,"_gl_DrawID",oi),ft.render(yt[oi]/Qi,Ne[oi])}else if(q.isInstancedMesh)ft.renderInstances(De,St,q.count);else if(Y.isInstancedBufferGeometry){let yt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ne=Math.min(Y.instanceCount,yt);ft.renderInstances(De,St,Ne)}else ft.render(De,St)};function yl(A,V,Y,j){P!==null&&A.isNodeMaterial&&P.setObject(j,A),ie===!0&&Be.setState(A,Y,!1),A.transparent===!0&&A.side===Ci&&A.forceSinglePass===!1?(A.side=zt,A.needsUpdate=!0,jn(A,V,j),A.side=hr,A.needsUpdate=!0,jn(A,V,j),A.side=Ci):jn(A,V,j)}this.compile=function(A,V,Y=null){Y===null&&(Y=A),P!==null&&P.renderStart(A,V,Y),M=ce.get(Y),M.init(V),C.push(M),Y.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),A!==Y&&A.traverseVisible(function(q){q.isLight&&q.layers.test(V.layers)&&(M.pushLight(q),q.castShadow&&M.pushShadow(q))}),M.setupLights(),P!==null&&P.updateLights(M.state.lightsArray),ue=this.localClippingEnabled,ie=Be.init(this.clippingPlanes,ue),ie===!0&&Be.setGlobalState(this.clippingPlanes,V),P!==null&&Oe.render(M.state.shadowsArray,Y,V);let j=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let me=q.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){let Ae=me[Me];yl(Ae,Y,V,q),j.add(Ae)}else yl(me,Y,V,q),j.add(me)}),M=C.pop(),P!==null&&P.renderEnd(),j},this.compileAsync=function(A,V,Y=null){let j=this.compile(A,V,Y);return new Promise(q=>{function me(){if(j.forEach(function(Me){let Ae=O.get(Me).currentProgram;(Ae===void 0||Ae.isReady())&&j.delete(Me)}),j.size===0){q(A);return}setTimeout(me,10)}Ye.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let ea=null;function Fu(A){ea&&ea(A)}function xl(){$i.stop()}function bl(){$i.start()}let $i=new tu;$i.setAnimationLoop(Fu),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(A){ea=A,we.setAnimationLoop(A),A===null?$i.stop():$i.start()},we.addEventListener("sessionstart",xl),we.addEventListener("sessionend",bl),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;P!==null&&P.renderStart(A,V);let Y=we.enabled===!0&&we.isPresenting===!0,j=x!==null&&(H===null||Y)&&x.begin(S,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(V),V=we.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,V,H),M=ce.get(A,C.length),M.init(V),M.state.textureUnits=X.getTextureUnits(),C.push(M),be.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),re.setFromProjectionMatrix(be,ti,V.reversedDepth),ue=this.localClippingEnabled,ie=Be.init(this.clippingPlanes,ue),_=Ie.get(A,T.length),_.init(),T.push(_),we.enabled===!0&&we.isPresenting===!0){let me=S.xr.getDepthSensingMesh();me!==null&&ta(me,V,-1/0,S.sortObjects)}ta(A,V,0,S.sortObjects),_.finish(),P!==null&&P.updateLights(M.state.lightsArray),S.sortObjects===!0&&_.sort(le,Pe),Te=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,Te&&Xe.addToRenderList(_,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ie===!0&&Be.beginShadows();let q=M.state.shadowsArray;if(Oe.render(q,A,V),ie===!0&&Be.endShadows(),(j&&x.hasRenderPass())===!1){let me=_.opaque,Me=_.transmissive;if(M.setupLights(),V.isArrayCamera){let Ae=V.cameras;if(Me.length>0)for(let Ce=0,Ve=Ae.length;Ce<Ve;Ce++){let it=Ae[Ce];Sl(me,Me,A,it)}Te&&Xe.render(A);for(let Ce=0,Ve=Ae.length;Ce<Ve;Ce++){let it=Ae[Ce];Ml(_,A,it,it.viewport)}}else Me.length>0&&Sl(me,Me,A,V),Te&&Xe.render(A),Ml(_,A,V)}H!==null&&z===0&&(X.updateMultisampleRenderTarget(H),X.updateRenderTargetMipmap(H)),j&&x.end(S),A.isScene===!0&&A.onAfterRender(S,A,V),Ee.resetDefaultState(),$=-1,W=null,C.pop(),C.length>0?(M=C[C.length-1],X.setTextureUnits(M.state.textureUnits),ie===!0&&Be.setGlobalState(S.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?_=T[T.length-1]:_=null,P!==null&&P.renderEnd()};function ta(A,V,Y,j){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)Y=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLightProbeGrid)M.pushLightProbeGrid(A);else if(A.isLight)M.pushLight(A),A.castShadow&&M.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(re)){j&&se.setFromMatrixPosition(A.matrixWorld).applyMatrix4(be);let me=k.update(A),Me=A.material;Me.visible&&_.push(A,me,Me,Y,se.z,null,V)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(re))){let me=k.update(A),Me=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),se.copy(A.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),se.copy(me.boundingSphere.center)),se.applyMatrix4(A.matrixWorld).applyMatrix4(be)),Array.isArray(Me)){let Ae=me.groups;for(let Ce=0,Ve=Ae.length;Ce<Ve;Ce++){let it=Ae[Ce],st=Me[it.materialIndex];st&&st.visible&&_.push(A,me,st,Y,se.z,it,V)}}else Me.visible&&_.push(A,me,Me,Y,se.z,null,V)}}let q=A.children;for(let me=0,Me=q.length;me<Me;me++)ta(q[me],V,Y,j)}function Ml(A,V,Y,j){let{opaque:q,transmissive:me,transparent:Me}=A;M.setupLightsView(Y),ie===!0&&Be.setGlobalState(S.clippingPlanes,Y),j&&R.viewport(Z.copy(j)),q.length>0&&Xn(q,V,Y),me.length>0&&Xn(me,V,Y),Me.length>0&&Xn(Me,V,Y),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Sl(A,V,Y,j){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[j.id]===void 0){let st=Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[j.id]=new ii(1,1,{generateMipmaps:!0,type:st?fi:Wt,minFilter:sr,samples:Math.max(4,Ze.samples),stencilBuffer:n,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let q=M.state.transmissionRenderTarget[j.id],me=j.viewport||Z;q.setSize(me.z*S.transmissionResolutionScale,me.w*S.transmissionResolutionScale);let Me=S.getRenderTarget(),Ae=S.getActiveCubeFace(),Ce=S.getActiveMipmapLevel();S.setRenderTarget(q),S.getClearColor(Se),rt=S.getClearAlpha(),rt<1&&S.setClearColor(16777215,.5),S.clear(),Te&&Xe.render(Y);let Ve=S.toneMapping;S.toneMapping=di;let it=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),M.setupLightsView(j),ie===!0&&Be.setGlobalState(S.clippingPlanes,j),Xn(A,Y,j),X.updateMultisampleRenderTarget(q),X.updateRenderTargetMipmap(q),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let De=0,ct=V.length;De<ct;De++){let St=V[De],{object:pt,geometry:ft,material:yt,group:Ne}=St;if(yt.side===Ci&&pt.layers.test(j.layers)){let Ut=yt.side;yt.side=zt,yt.needsUpdate=!0,wl(pt,Y,j,ft,yt,Ne),yt.side=Ut,yt.needsUpdate=!0,st=!0}}st===!0&&(X.updateMultisampleRenderTarget(q),X.updateRenderTargetMipmap(q))}S.setRenderTarget(Me,Ae,Ce),S.setClearColor(Se,rt),it!==void 0&&(j.viewport=it),S.toneMapping=Ve}function Xn(A,V,Y){let j=V.isScene===!0?V.overrideMaterial:null;for(let q=0,me=A.length;q<me;q++){let Me=A[q],{object:Ae,geometry:Ce,group:Ve}=Me,it=Me.material;it.allowOverride===!0&&j!==null&&(it=j),Ae.layers.test(Y.layers)&&wl(Ae,V,Y,Ce,it,Ve)}}function wl(A,V,Y,j,q,me){P!==null&&q.isNodeMaterial&&P.setObject(A,q),A.onBeforeRender(S,V,Y,j,q,me),A.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(S,V,Y,j,A,me),q.transparent===!0&&q.side===Ci&&q.forceSinglePass===!1?(q.side=zt,q.needsUpdate=!0,S.renderBufferDirect(Y,V,j,q,A,me),q.side=hr,q.needsUpdate=!0,S.renderBufferDirect(Y,V,j,q,A,me),q.side=Ci):S.renderBufferDirect(Y,V,j,q,A,me),A.onAfterRender(S,V,Y,j,q,me)}function jn(A,V,Y){V.isScene!==!0&&(V=_e);let j=O.get(A),q=M.state.lights,me=M.state.shadowsArray,Me=q.state.version,Ae=fe.getParameters(A,q.state,me,V,Y,M.state.lightProbeGridArray),Ce=fe.getProgramCacheKey(Ae),Ve=j.programs;j.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?V.environment:null,j.fog=V.fog;let it=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;j.envMap=Q.get(A.envMap||j.environment,it),j.envMapRotation=j.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,Ve===void 0&&(A.addEventListener("dispose",ai),Ve=new Map,j.programs=Ve);let st=Ve.get(Ce);if(st!==void 0){if(j.currentProgram===st&&j.lightsStateVersion===Me)return Tl(A,Ae),st}else Ae.uniforms=fe.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,Y,Ae),A.onBeforeCompile(Ae,S),st=fe.acquireProgram(Ae,Ce),Ve.set(Ce,st),j.uniforms=Ae.uniforms;let De=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=Be.uniform),Tl(A,Ae),j.needsLights=Gu(A),j.lightsStateVersion=Me,j.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.sunLights.value=q.state.sun,De.sunLightShadows.value=q.state.sunShadow,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.sunShadowMatrix.value=q.state.sunShadowMatrix,De.sunShadowCascade.value=q.state.sunShadowCascade,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix),j.lightProbeGrid=M.state.lightProbeGridArray.length>0,j.currentProgram=st,j.uniformsList=null,st}function El(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Cs.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function Tl(A,V){let Y=O.get(A);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function Ou(A,V){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;b.setFromMatrixPosition(V.matrixWorld);for(let Y=0,j=A.length;Y<j;Y++){let q=A[Y];if(q.texture!==null&&q.boundingBox.containsPoint(b))return q}return null}function zu(A,V,Y,j,q){V.isScene!==!0&&(V=_e),X.resetTextureUnits();let me=V.fog,Me=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?V.environment:null,Ae=H===null?S.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:nt.workingColorSpace,Ce=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ve=Q.get(j.envMap||Me,Ce),it=j.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,st=!!Y.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),De=!!Y.morphAttributes.position,ct=!!Y.morphAttributes.normal,St=!!Y.morphAttributes.color,pt=di;j.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(pt=S.toneMapping);let ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,yt=ft!==void 0?ft.length:0,Ne=O.get(j),Ut=M.state.lights;if(ie===!0&&(ue===!0||A!==W)){let dt=A===W&&j.id===$;Be.setState(j,A,dt)}let Qi=!1;j.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Ut.state.version||Ne.outputColorSpace!==Ae||q.isBatchedMesh&&Ne.batching===!1||!q.isBatchedMesh&&Ne.batching===!0||q.isBatchedMesh&&Ne.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ne.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ne.instancing===!1||!q.isInstancedMesh&&Ne.instancing===!0||q.isSkinnedMesh&&Ne.skinning===!1||!q.isSkinnedMesh&&Ne.skinning===!0||q.isInstancedMesh&&Ne.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ne.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ne.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ne.instancingMorph===!1&&q.morphTexture!==null||Ne.envMap!==Ve||j.fog===!0&&Ne.fog!==me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Be.numPlanes||Ne.numIntersection!==Be.numIntersection)||Ne.vertexAlphas!==it||Ne.vertexTangents!==st||Ne.morphTargets!==De||Ne.morphNormals!==ct||Ne.morphColors!==St||Ne.toneMapping!==pt||Ne.morphTargetsCount!==yt||!!Ne.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Qi=!0):(Qi=!0,Ne.__version=j.version);let Yt=Ne.currentProgram;Qi===!0&&(Yt=jn(j,V,q),P&&j.isNodeMaterial&&P.onUpdateProgram(j,Yt,Ne));let oi=!1,zi=!1,yr=!1,ut=Yt.getUniforms(),bt=Ne.uniforms;if(R.useProgram(Yt.program)&&(oi=!0,zi=!0,yr=!0),j.id!==$&&($=j.id,zi=!0),Ne.needsLights){let dt=Ou(M.state.lightProbeGridArray,q);Ne.lightProbeGrid!==dt&&(Ne.lightProbeGrid=dt,zi=!0)}if(oi||W!==A){R.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ut.setValue(U,"projectionMatrix",A.projectionMatrix),ut.setValue(U,"viewMatrix",A.matrixWorldInverse);let dt=ut.map.cameraPosition;dt!==void 0&&dt.setValue(U,ee.setFromMatrixPosition(A.matrixWorld)),Ze.logarithmicDepthBuffer&&ut.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ut.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),W!==A&&(W=A,zi=!0,yr=!0)}if(Ne.needsLights&&(Ut.state.sunShadowMap.length>0&&ut.setValue(U,"sunShadowMap",Ut.state.sunShadowMap,X),Ut.state.directionalShadowMap.length>0&&ut.setValue(U,"directionalShadowMap",Ut.state.directionalShadowMap,X),Ut.state.spotShadowMap.length>0&&ut.setValue(U,"spotShadowMap",Ut.state.spotShadowMap,X),Ut.state.pointShadowMap.length>0&&ut.setValue(U,"pointShadowMap",Ut.state.pointShadowMap,X)),q.isSkinnedMesh){ut.setOptional(U,q,"bindMatrix"),ut.setOptional(U,q,"bindMatrixInverse");let dt=q.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ut.setValue(U,"boneTexture",dt.boneTexture,X))}q.isBatchedMesh&&(ut.setOptional(U,q,"batchingTexture"),ut.setValue(U,"batchingTexture",q._matricesTexture,X),ut.setOptional(U,q,"batchingIdTexture"),ut.setValue(U,"batchingIdTexture",q._indirectTexture,X),ut.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&ut.setValue(U,"batchingColorTexture",q._colorsTexture,X));let Vi=Y.morphAttributes;if((Vi.position!==void 0||Vi.normal!==void 0||Vi.color!==void 0)&&ot.update(q,Y,Yt),(zi||Ne.receiveShadow!==q.receiveShadow)&&(Ne.receiveShadow=q.receiveShadow,ut.setValue(U,"receiveShadow",q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&V.environment!==null&&(bt.envMapIntensity.value=V.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=O_()),zi){if(ut.setValue(U,"toneMappingExposure",S.toneMappingExposure),Ne.needsLights&&Vu(bt,yr),me&&j.fog===!0&&xe.refreshFogUniforms(bt,me),xe.refreshMaterialUniforms(bt,j,ne,J,M.state.transmissionRenderTarget[A.id]),Ne.needsLights&&Ne.lightProbeGrid){let dt=Ne.lightProbeGrid;bt.probesSH.value=dt.texture,bt.probesMin.value.copy(dt.boundingBox.min),bt.probesMax.value.copy(dt.boundingBox.max),bt.probesResolution.value.copy(dt.resolution)}Cs.upload(U,El(Ne),bt,X)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Cs.upload(U,El(Ne),bt,X),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ut.setValue(U,"center",q.center),ut.setValue(U,"modelViewMatrix",q.modelViewMatrix),ut.setValue(U,"normalMatrix",q.normalMatrix),ut.setValue(U,"modelMatrix",q.matrixWorld),j.uniformsGroups!==void 0){let dt=j.uniformsGroups;for(let hn=0,xr=dt.length;hn<xr;hn++){let Cl=dt[hn];Le.update(Cl,Yt),Le.bind(Cl,Yt)}}return Yt}function Vu(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.sunLights.needsUpdate=V,A.sunLightShadows.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function Gu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,V,Y){let j=O.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),O.get(A.texture).__webglTexture=V,O.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:Y,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let Y=O.get(A);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(A,V=0,Y=0){H=A,D=V,z=Y;let j=null,q=!1,me=!1;if(A){let Me=O.get(A);if(Me.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(U.FRAMEBUFFER,Me.__webglFramebuffer),Z.copy(A.viewport),K.copy(A.scissor),oe=A.scissorTest,R.viewport(Z),R.scissor(K),R.setScissorTest(oe),$=-1;return}else if(Me.__webglFramebuffer===void 0)X.setupRenderTarget(A);else if(Me.__hasExternalTextures)X.rebindTextures(A,O.get(A.texture).__webglTexture,O.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ve=A.depthTexture;if(Me.__boundDepthTexture!==Ve){if(Ve!==null&&O.has(Ve)&&(A.width!==Ve.image.width||A.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(A)}}let Ae=A.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(me=!0);let Ce=O.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ce[V])?j=Ce[V][Y]:j=Ce[V],q=!0):A.samples>0&&X.useMultisampledRTT(A)===!1?j=O.get(A).__webglMultisampledFramebuffer:Array.isArray(Ce)?j=Ce[Y]:j=Ce,Z.copy(A.viewport),K.copy(A.scissor),oe=A.scissorTest}else Z.copy(Ue).multiplyScalar(ne).floor(),K.copy(ge).multiplyScalar(ne).floor(),oe=qe;if(Y!==0&&(j=B),R.bindFramebuffer(U.FRAMEBUFFER,j)&&R.drawBuffers(A,j),R.viewport(Z),R.scissor(K),R.setScissorTest(oe),q){let Me=O.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Me.__webglTexture,Y)}else if(me){let Me=V;for(let Ae=0;Ae<A.textures.length;Ae++){let Ce=O.get(A.textures[Ae]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ae,Ce.__webglTexture,Y,Me)}}else if(A!==null&&Y!==0){let Me=O.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,Y)}$=-1};function Al(A){let V=O.get(A);return(V.__readFormat!==A.format||V.__readType!==A.type)&&(V.__readFormat=A.format,V.__readType=A.type,V.__formatReadable=Ze.textureFormatReadable(A.format),V.__typeReadable=Ze.textureTypeReadable(A.type)),V}this.readRenderTargetPixels=function(A,V,Y,j,q,me,Me,Ae=0){if(!(A&&A.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){R.bindFramebuffer(U.FRAMEBUFFER,Ce);try{let Ve=A.textures[Ae],it=Ve.format,st=Ve.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae);let De=Al(Ve);if(De.__formatReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-j&&Y>=0&&Y<=A.height-q&&U.readPixels(V,Y,j,q,ae.convert(it),ae.convert(st),me)}finally{let Ve=H!==null?O.get(H).__webglFramebuffer:null;R.bindFramebuffer(U.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(A,V,Y,j,q,me,Me,Ae=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=O.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce)if(V>=0&&V<=A.width-j&&Y>=0&&Y<=A.height-q){R.bindFramebuffer(U.FRAMEBUFFER,Ce);let Ve=A.textures[Ae],it=Ve.format,st=Ve.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ae);let De=Al(Ve);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ct),U.bufferData(U.PIXEL_PACK_BUFFER,me.byteLength,U.STREAM_READ),U.readPixels(V,Y,j,q,ae.convert(it),ae.convert(st),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let St=H!==null?O.get(H).__webglFramebuffer:null;R.bindFramebuffer(U.FRAMEBUFFER,St);let pt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await wd(U,pt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ct),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,me),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ct),U.deleteSync(pt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,Y=0){let j=Math.pow(2,-Y),q=Math.floor(A.image.width*j),me=Math.floor(A.image.height*j),Me=V!==null?V.x:0,Ae=V!==null?V.y:0;X.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,Me,Ae,q,me),R.unbindTexture()},this.copyTextureToTexture=function(A,V,Y=null,j=null,q=0,me=0){let Me,Ae,Ce,Ve,it,st,De,ct,St,pt=A.isCompressedTexture?A.mipmaps[me]:A.image;if(Y!==null)Me=Y.max.x-Y.min.x,Ae=Y.max.y-Y.min.y,Ce=Y.isBox3?Y.max.z-Y.min.z:1,Ve=Y.min.x,it=Y.min.y,st=Y.isBox3?Y.min.z:0;else{let bt=Math.pow(2,-q);Me=Math.floor(pt.width*bt),Ae=Math.floor(pt.height*bt),A.isDataArrayTexture?Ce=pt.depth:A.isData3DTexture?Ce=Math.floor(pt.depth*bt):Ce=1,Ve=0,it=0,st=0}j!==null?(De=j.x,ct=j.y,St=j.z):(De=0,ct=0,St=0);let ft=ae.convert(V.format),yt=ae.convert(V.type),Ne;V.isData3DTexture?(X.setTexture3D(V,0),Ne=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(X.setTexture2DArray(V,0),Ne=U.TEXTURE_2D_ARRAY):(X.setTexture2D(V,0),Ne=U.TEXTURE_2D),R.activeTexture(U.TEXTURE0),R.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),R.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),R.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);let Ut=R.getParameter(U.UNPACK_ROW_LENGTH),Qi=R.getParameter(U.UNPACK_IMAGE_HEIGHT),Yt=R.getParameter(U.UNPACK_SKIP_PIXELS),oi=R.getParameter(U.UNPACK_SKIP_ROWS),zi=R.getParameter(U.UNPACK_SKIP_IMAGES);R.pixelStorei(U.UNPACK_ROW_LENGTH,pt.width),R.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt.height),R.pixelStorei(U.UNPACK_SKIP_PIXELS,Ve),R.pixelStorei(U.UNPACK_SKIP_ROWS,it),R.pixelStorei(U.UNPACK_SKIP_IMAGES,st);let yr=A.isDataArrayTexture||A.isData3DTexture,ut=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let bt=O.get(A),Vi=O.get(V),dt=O.get(bt.__renderTarget),hn=O.get(Vi.__renderTarget);R.bindFramebuffer(U.READ_FRAMEBUFFER,dt.__webglFramebuffer),R.bindFramebuffer(U.DRAW_FRAMEBUFFER,hn.__webglFramebuffer);for(let xr=0;xr<Ce;xr++)yr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,O.get(A).__webglTexture,q,st+xr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,O.get(V).__webglTexture,me,St+xr)),U.blitFramebuffer(Ve,it,Me,Ae,De,ct,Me,Ae,U.DEPTH_BUFFER_BIT,U.NEAREST);R.bindFramebuffer(U.READ_FRAMEBUFFER,null),R.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||O.has(A)){let bt=O.get(A),Vi=O.get(V);R.bindFramebuffer(U.READ_FRAMEBUFFER,F),R.bindFramebuffer(U.DRAW_FRAMEBUFFER,I);for(let dt=0;dt<Ce;dt++)yr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,bt.__webglTexture,q,st+dt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,bt.__webglTexture,q),ut?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Vi.__webglTexture,me,St+dt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Vi.__webglTexture,me),q!==0?U.blitFramebuffer(Ve,it,Me,Ae,De,ct,Me,Ae,U.COLOR_BUFFER_BIT,U.NEAREST):ut?U.copyTexSubImage3D(Ne,me,De,ct,St+dt,Ve,it,Me,Ae):U.copyTexSubImage2D(Ne,me,De,ct,Ve,it,Me,Ae);R.bindFramebuffer(U.READ_FRAMEBUFFER,null),R.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ut?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Ne,me,De,ct,St,Me,Ae,Ce,ft,yt,pt.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Ne,me,De,ct,St,Me,Ae,Ce,ft,pt.data):U.texSubImage3D(Ne,me,De,ct,St,Me,Ae,Ce,ft,yt,pt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,me,De,ct,Me,Ae,ft,yt,pt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,me,De,ct,pt.width,pt.height,ft,pt.data):U.texSubImage2D(U.TEXTURE_2D,me,De,ct,Me,Ae,ft,yt,pt);R.pixelStorei(U.UNPACK_ROW_LENGTH,Ut),R.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Qi),R.pixelStorei(U.UNPACK_SKIP_PIXELS,Yt),R.pixelStorei(U.UNPACK_SKIP_ROWS,oi),R.pixelStorei(U.UNPACK_SKIP_IMAGES,zi),me===0&&V.generateMipmaps&&U.generateMipmap(Ne),R.unbindTexture()},this.initRenderTarget=function(A){O.get(A).__webglFramebuffer===void 0&&X.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?X.setTextureCube(A,0):A.isData3DTexture?X.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?X.setTexture2DArray(A,0):X.setTexture2D(A,0),R.unbindTexture()},this.resetState=function(){D=0,z=0,H=null,R.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(t),e.unpackColorSpace=nt._getUnpackColorSpace()}};var xM=new L;var Ji=class t{constructor(e){e===void 0&&(e=[0,0,0,0,0,0,0,0,0]),this.elements=e}identity(){let e=this.elements;e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1}setZero(){let e=this.elements;e[0]=0,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=0,e[6]=0,e[7]=0,e[8]=0}setTrace(e){let i=this.elements;i[0]=e.x,i[4]=e.y,i[8]=e.z}getTrace(e){e===void 0&&(e=new E);let i=this.elements;return e.x=i[0],e.y=i[4],e.z=i[8],e}vmult(e,i){i===void 0&&(i=new E);let r=this.elements,n=e.x,s=e.y,a=e.z;return i.x=r[0]*n+r[1]*s+r[2]*a,i.y=r[3]*n+r[4]*s+r[5]*a,i.z=r[6]*n+r[7]*s+r[8]*a,i}smult(e){for(let i=0;i<this.elements.length;i++)this.elements[i]*=e}mmult(e,i){i===void 0&&(i=new t);let r=this.elements,n=e.elements,s=i.elements,a=r[0],o=r[1],l=r[2],h=r[3],u=r[4],d=r[5],c=r[6],p=r[7],g=r[8],v=n[0],m=n[1],f=n[2],y=n[3],b=n[4],_=n[5],M=n[6],T=n[7],C=n[8];return s[0]=a*v+o*y+l*M,s[1]=a*m+o*b+l*T,s[2]=a*f+o*_+l*C,s[3]=h*v+u*y+d*M,s[4]=h*m+u*b+d*T,s[5]=h*f+u*_+d*C,s[6]=c*v+p*y+g*M,s[7]=c*m+p*b+g*T,s[8]=c*f+p*_+g*C,i}scale(e,i){i===void 0&&(i=new t);let r=this.elements,n=i.elements;for(let s=0;s!==3;s++)n[3*s+0]=e.x*r[3*s+0],n[3*s+1]=e.y*r[3*s+1],n[3*s+2]=e.z*r[3*s+2];return i}solve(e,i){i===void 0&&(i=new E);let r=3,n=4,s=[],a,o;for(a=0;a<r*n;a++)s.push(0);for(a=0;a<3;a++)for(o=0;o<3;o++)s[a+n*o]=this.elements[a+3*o];s[3]=e.x,s[7]=e.y,s[11]=e.z;let l=3,h=l,u,d=4,c;do{if(a=h-l,s[a+n*a]===0){for(o=a+1;o<h;o++)if(s[a+n*o]!==0){u=d;do c=d-u,s[c+n*a]+=s[c+n*o];while(--u);break}}if(s[a+n*a]!==0)for(o=a+1;o<h;o++){let p=s[a+n*o]/s[a+n*a];u=d;do c=d-u,s[c+n*o]=c<=a?0:s[c+n*o]-s[c+n*a]*p;while(--u)}}while(--l);if(i.z=s[2*n+3]/s[2*n+2],i.y=(s[1*n+3]-s[1*n+2]*i.z)/s[1*n+1],i.x=(s[0*n+3]-s[0*n+2]*i.z-s[0*n+1]*i.y)/s[0*n+0],isNaN(i.x)||isNaN(i.y)||isNaN(i.z)||i.x===1/0||i.y===1/0||i.z===1/0)throw`Could not solve equation! Got x=[${i.toString()}], b=[${e.toString()}], A=[${this.toString()}]`;return i}e(e,i,r){if(r===void 0)return this.elements[i+3*e];this.elements[i+3*e]=r}copy(e){for(let i=0;i<e.elements.length;i++)this.elements[i]=e.elements[i];return this}toString(){let e="";for(let r=0;r<9;r++)e+=this.elements[r]+",";return e}reverse(e){e===void 0&&(e=new t);let i=3,r=6,n=V_,s,a;for(s=0;s<3;s++)for(a=0;a<3;a++)n[s+r*a]=this.elements[s+3*a];n[3]=1,n[9]=0,n[15]=0,n[4]=0,n[10]=1,n[16]=0,n[5]=0,n[11]=0,n[17]=1;let o=3,l=o,h,u=r,d;do{if(s=l-o,n[s+r*s]===0){for(a=s+1;a<l;a++)if(n[s+r*a]!==0){h=u;do d=u-h,n[d+r*s]+=n[d+r*a];while(--h);break}}if(n[s+r*s]!==0)for(a=s+1;a<l;a++){let c=n[s+r*a]/n[s+r*s];h=u;do d=u-h,n[d+r*a]=d<=s?0:n[d+r*a]-n[d+r*s]*c;while(--h)}}while(--o);s=2;do{a=s-1;do{let c=n[s+r*a]/n[s+r*s];h=r;do d=r-h,n[d+r*a]=n[d+r*a]-n[d+r*s]*c;while(--h)}while(a--)}while(--s);s=2;do{let c=1/n[s+r*s];h=r;do d=r-h,n[d+r*s]=n[d+r*s]*c;while(--h)}while(s--);s=2;do{a=2;do{if(d=n[i+a+r*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;e.e(s,a,d)}while(a--)}while(s--);return e}setRotationFromQuaternion(e){let i=e.x,r=e.y,n=e.z,s=e.w,a=i+i,o=r+r,l=n+n,h=i*a,u=i*o,d=i*l,c=r*o,p=r*l,g=n*l,v=s*a,m=s*o,f=s*l,y=this.elements;return y[0]=1-(c+g),y[1]=u-f,y[2]=d+m,y[3]=u+f,y[4]=1-(h+g),y[5]=p-v,y[6]=d-m,y[7]=p+v,y[8]=1-(h+c),this}transpose(e){e===void 0&&(e=new t);let i=this.elements,r=e.elements,n;return r[0]=i[0],r[4]=i[4],r[8]=i[8],n=i[1],r[1]=i[3],r[3]=n,n=i[2],r[2]=i[6],r[6]=n,n=i[5],r[5]=i[7],r[7]=n,e}},V_=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],E=class t{constructor(e,i,r){e===void 0&&(e=0),i===void 0&&(i=0),r===void 0&&(r=0),this.x=e,this.y=i,this.z=r}cross(e,i){i===void 0&&(i=new t);let r=e.x,n=e.y,s=e.z,a=this.x,o=this.y,l=this.z;return i.x=o*s-l*n,i.y=l*r-a*s,i.z=a*n-o*r,i}set(e,i,r){return this.x=e,this.y=i,this.z=r,this}setZero(){this.x=this.y=this.z=0}vadd(e,i){if(i)i.x=e.x+this.x,i.y=e.y+this.y,i.z=e.z+this.z;else return new t(this.x+e.x,this.y+e.y,this.z+e.z)}vsub(e,i){if(i)i.x=this.x-e.x,i.y=this.y-e.y,i.z=this.z-e.z;else return new t(this.x-e.x,this.y-e.y,this.z-e.z)}crossmat(){return new Ji([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let e=this.x,i=this.y,r=this.z,n=Math.sqrt(e*e+i*i+r*r);if(n>0){let s=1/n;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return n}unit(e){e===void 0&&(e=new t);let i=this.x,r=this.y,n=this.z,s=Math.sqrt(i*i+r*r+n*n);return s>0?(s=1/s,e.x=i*s,e.y=r*s,e.z=n*s):(e.x=1,e.y=0,e.z=0),e}length(){let e=this.x,i=this.y,r=this.z;return Math.sqrt(e*e+i*i+r*r)}lengthSquared(){return this.dot(this)}distanceTo(e){let i=this.x,r=this.y,n=this.z,s=e.x,a=e.y,o=e.z;return Math.sqrt((s-i)*(s-i)+(a-r)*(a-r)+(o-n)*(o-n))}distanceSquared(e){let i=this.x,r=this.y,n=this.z,s=e.x,a=e.y,o=e.z;return(s-i)*(s-i)+(a-r)*(a-r)+(o-n)*(o-n)}scale(e,i){i===void 0&&(i=new t);let r=this.x,n=this.y,s=this.z;return i.x=e*r,i.y=e*n,i.z=e*s,i}vmul(e,i){return i===void 0&&(i=new t),i.x=e.x*this.x,i.y=e.y*this.y,i.z=e.z*this.z,i}addScaledVector(e,i,r){return r===void 0&&(r=new t),r.x=this.x+e*i.x,r.y=this.y+e*i.y,r.z=this.z+e*i.z,r}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(e){return e===void 0&&(e=new t),e.x=-this.x,e.y=-this.y,e.z=-this.z,e}tangents(e,i){let r=this.length();if(r>0){let n=G_,s=1/r;n.set(this.x*s,this.y*s,this.z*s);let a=k_;Math.abs(n.x)<.9?(a.set(1,0,0),n.cross(a,e)):(a.set(0,1,0),n.cross(a,e)),n.cross(e,i)}else e.set(1,0,0),i.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}lerp(e,i,r){let n=this.x,s=this.y,a=this.z;r.x=n+(e.x-n)*i,r.y=s+(e.y-s)*i,r.z=a+(e.z-a)*i}almostEquals(e,i){return i===void 0&&(i=1e-6),!(Math.abs(this.x-e.x)>i||Math.abs(this.y-e.y)>i||Math.abs(this.z-e.z)>i)}almostZero(e){return e===void 0&&(e=1e-6),!(Math.abs(this.x)>e||Math.abs(this.y)>e||Math.abs(this.z)>e)}isAntiparallelTo(e,i){return this.negate(cu),cu.almostEquals(e,i)}clone(){return new t(this.x,this.y,this.z)}};E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);var G_=new E,k_=new E,cu=new E,jt=class t{constructor(e){e===void 0&&(e={}),this.lowerBound=new E,this.upperBound=new E,e.lowerBound&&this.lowerBound.copy(e.lowerBound),e.upperBound&&this.upperBound.copy(e.upperBound)}setFromPoints(e,i,r,n){let s=this.lowerBound,a=this.upperBound,o=r;s.copy(e[0]),o&&o.vmult(s,s),a.copy(s);for(let l=1;l<e.length;l++){let h=e[l];o&&(o.vmult(h,uu),h=uu),h.x>a.x&&(a.x=h.x),h.x<s.x&&(s.x=h.x),h.y>a.y&&(a.y=h.y),h.y<s.y&&(s.y=h.y),h.z>a.z&&(a.z=h.z),h.z<s.z&&(s.z=h.z)}return i&&(i.vadd(s,s),i.vadd(a,a)),n&&(s.x-=n,s.y-=n,s.z-=n,a.x+=n,a.y+=n,a.z+=n),this}copy(e){return this.lowerBound.copy(e.lowerBound),this.upperBound.copy(e.upperBound),this}clone(){return new t().copy(this)}extend(e){this.lowerBound.x=Math.min(this.lowerBound.x,e.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,e.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,e.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,e.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,e.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,e.upperBound.z)}overlaps(e){let i=this.lowerBound,r=this.upperBound,n=e.lowerBound,s=e.upperBound,a=n.x<=r.x&&r.x<=s.x||i.x<=s.x&&s.x<=r.x,o=n.y<=r.y&&r.y<=s.y||i.y<=s.y&&s.y<=r.y,l=n.z<=r.z&&r.z<=s.z||i.z<=s.z&&s.z<=r.z;return a&&o&&l}volume(){let e=this.lowerBound,i=this.upperBound;return(i.x-e.x)*(i.y-e.y)*(i.z-e.z)}contains(e){let i=this.lowerBound,r=this.upperBound,n=e.lowerBound,s=e.upperBound;return i.x<=n.x&&r.x>=s.x&&i.y<=n.y&&r.y>=s.y&&i.z<=n.z&&r.z>=s.z}getCorners(e,i,r,n,s,a,o,l){let h=this.lowerBound,u=this.upperBound;e.copy(h),i.set(u.x,h.y,h.z),r.set(u.x,u.y,h.z),n.set(h.x,u.y,u.z),s.set(u.x,h.y,u.z),a.set(h.x,u.y,h.z),o.set(h.x,h.y,u.z),l.copy(u)}toLocalFrame(e,i){let r=du,n=r[0],s=r[1],a=r[2],o=r[3],l=r[4],h=r[5],u=r[6],d=r[7];this.getCorners(n,s,a,o,l,h,u,d);for(let c=0;c!==8;c++){let p=r[c];e.pointToLocal(p,p)}return i.setFromPoints(r)}toWorldFrame(e,i){let r=du,n=r[0],s=r[1],a=r[2],o=r[3],l=r[4],h=r[5],u=r[6],d=r[7];this.getCorners(n,s,a,o,l,h,u,d);for(let c=0;c!==8;c++){let p=r[c];e.pointToWorld(p,p)}return i.setFromPoints(r)}overlapsRay(e){let{direction:i,from:r}=e,n=1/i.x,s=1/i.y,a=1/i.z,o=(this.lowerBound.x-r.x)*n,l=(this.upperBound.x-r.x)*n,h=(this.lowerBound.y-r.y)*s,u=(this.upperBound.y-r.y)*s,d=(this.lowerBound.z-r.z)*a,c=(this.upperBound.z-r.z)*a,p=Math.max(Math.max(Math.min(o,l),Math.min(h,u)),Math.min(d,c)),g=Math.min(Math.min(Math.max(o,l),Math.max(h,u)),Math.max(d,c));return!(g<0||p>g)}},uu=new E,du=[new E,new E,new E,new E,new E,new E,new E,new E],Xs=class{constructor(){this.matrix=[]}get(e,i){let{index:r}=e,{index:n}=i;if(n>r){let s=n;n=r,r=s}return this.matrix[(r*(r+1)>>1)+n-1]}set(e,i,r){let{index:n}=e,{index:s}=i;if(s>n){let a=s;s=n,n=a}this.matrix[(n*(n+1)>>1)+s-1]=r?1:0}reset(){for(let e=0,i=this.matrix.length;e!==i;e++)this.matrix[e]=0}setNumObjects(e){this.matrix.length=e*(e-1)>>1}},js=class{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});let r=this._listeners;return r[e]===void 0&&(r[e]=[]),r[e].includes(i)||r[e].push(i),this}hasEventListener(e,i){if(this._listeners===void 0)return!1;let r=this._listeners;return!!(r[e]!==void 0&&r[e].includes(i))}hasAnyEventListener(e){return this._listeners===void 0?!1:this._listeners[e]!==void 0}removeEventListener(e,i){if(this._listeners===void 0)return this;let r=this._listeners;if(r[e]===void 0)return this;let n=r[e].indexOf(i);return n!==-1&&r[e].splice(n,1),this}dispatchEvent(e){if(this._listeners===void 0)return this;let r=this._listeners[e.type];if(r!==void 0){e.target=this;for(let n=0,s=r.length;n<s;n++)r[n].call(this,e)}return this}},Rt=class t{constructor(e,i,r,n){e===void 0&&(e=0),i===void 0&&(i=0),r===void 0&&(r=0),n===void 0&&(n=1),this.x=e,this.y=i,this.z=r,this.w=n}set(e,i,r,n){return this.x=e,this.y=i,this.z=r,this.w=n,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(e,i){let r=Math.sin(i*.5);return this.x=e.x*r,this.y=e.y*r,this.z=e.z*r,this.w=Math.cos(i*.5),this}toAxisAngle(e){e===void 0&&(e=new E),this.normalize();let i=2*Math.acos(this.w),r=Math.sqrt(1-this.w*this.w);return r<.001?(e.x=this.x,e.y=this.y,e.z=this.z):(e.x=this.x/r,e.y=this.y/r,e.z=this.z/r),[e,i]}setFromVectors(e,i){if(e.isAntiparallelTo(i)){let r=H_,n=W_;e.tangents(r,n),this.setFromAxisAngle(r,Math.PI)}else{let r=e.cross(i);this.x=r.x,this.y=r.y,this.z=r.z,this.w=Math.sqrt(e.length()**2*i.length()**2)+e.dot(i),this.normalize()}return this}mult(e,i){i===void 0&&(i=new t);let r=this.x,n=this.y,s=this.z,a=this.w,o=e.x,l=e.y,h=e.z,u=e.w;return i.x=r*u+a*o+n*h-s*l,i.y=n*u+a*l+s*o-r*h,i.z=s*u+a*h+r*l-n*o,i.w=a*u-r*o-n*l-s*h,i}inverse(e){e===void 0&&(e=new t);let i=this.x,r=this.y,n=this.z,s=this.w;this.conjugate(e);let a=1/(i*i+r*r+n*n+s*s);return e.x*=a,e.y*=a,e.z*=a,e.w*=a,e}conjugate(e){return e===void 0&&(e=new t),e.x=-this.x,e.y=-this.y,e.z=-this.z,e.w=this.w,e}normalize(){let e=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(e=1/e,this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}normalizeFast(){let e=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return e===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=e,this.y*=e,this.z*=e,this.w*=e),this}vmult(e,i){i===void 0&&(i=new E);let r=e.x,n=e.y,s=e.z,a=this.x,o=this.y,l=this.z,h=this.w,u=h*r+o*s-l*n,d=h*n+l*r-a*s,c=h*s+a*n-o*r,p=-a*r-o*n-l*s;return i.x=u*h+p*-a+d*-l-c*-o,i.y=d*h+p*-o+c*-a-u*-l,i.z=c*h+p*-l+u*-o-d*-a,i}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w,this}toEuler(e,i){i===void 0&&(i="YZX");let r,n,s,a=this.x,o=this.y,l=this.z,h=this.w;switch(i){case"YZX":let u=a*o+l*h;if(u>.499&&(r=2*Math.atan2(a,h),n=Math.PI/2,s=0),u<-.499&&(r=-2*Math.atan2(a,h),n=-Math.PI/2,s=0),r===void 0){let d=a*a,c=o*o,p=l*l;r=Math.atan2(2*o*h-2*a*l,1-2*c-2*p),n=Math.asin(2*u),s=Math.atan2(2*a*h-2*o*l,1-2*d-2*p)}break;default:throw new Error(`Euler order ${i} not supported yet.`)}e.y=r,e.z=n,e.x=s}setFromEuler(e,i,r,n){n===void 0&&(n="XYZ");let s=Math.cos(e/2),a=Math.cos(i/2),o=Math.cos(r/2),l=Math.sin(e/2),h=Math.sin(i/2),u=Math.sin(r/2);return n==="XYZ"?(this.x=l*a*o+s*h*u,this.y=s*h*o-l*a*u,this.z=s*a*u+l*h*o,this.w=s*a*o-l*h*u):n==="YXZ"?(this.x=l*a*o+s*h*u,this.y=s*h*o-l*a*u,this.z=s*a*u-l*h*o,this.w=s*a*o+l*h*u):n==="ZXY"?(this.x=l*a*o-s*h*u,this.y=s*h*o+l*a*u,this.z=s*a*u+l*h*o,this.w=s*a*o-l*h*u):n==="ZYX"?(this.x=l*a*o-s*h*u,this.y=s*h*o+l*a*u,this.z=s*a*u-l*h*o,this.w=s*a*o+l*h*u):n==="YZX"?(this.x=l*a*o+s*h*u,this.y=s*h*o+l*a*u,this.z=s*a*u-l*h*o,this.w=s*a*o-l*h*u):n==="XZY"&&(this.x=l*a*o-s*h*u,this.y=s*h*o-l*a*u,this.z=s*a*u+l*h*o,this.w=s*a*o+l*h*u),this}clone(){return new t(this.x,this.y,this.z,this.w)}slerp(e,i,r){r===void 0&&(r=new t);let n=this.x,s=this.y,a=this.z,o=this.w,l=e.x,h=e.y,u=e.z,d=e.w,c,p,g,v,m;return p=n*l+s*h+a*u+o*d,p<0&&(p=-p,l=-l,h=-h,u=-u,d=-d),1-p>1e-6?(c=Math.acos(p),g=Math.sin(c),v=Math.sin((1-i)*c)/g,m=Math.sin(i*c)/g):(v=1-i,m=i),r.x=v*n+m*l,r.y=v*s+m*h,r.z=v*a+m*u,r.w=v*o+m*d,r}integrate(e,i,r,n){n===void 0&&(n=new t);let s=e.x*r.x,a=e.y*r.y,o=e.z*r.z,l=this.x,h=this.y,u=this.z,d=this.w,c=i*.5;return n.x+=c*(s*d+a*u-o*h),n.y+=c*(a*d+o*l-s*u),n.z+=c*(o*d+s*h-a*l),n.w+=c*(-s*l-a*h-o*u),n}},H_=new E,W_=new E,q_={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},Re=class t{constructor(e){e===void 0&&(e={}),this.id=t.idCounter++,this.type=e.type||0,this.boundingSphereRadius=0,this.collisionResponse=e.collisionResponse?e.collisionResponse:!0,this.collisionFilterGroup=e.collisionFilterGroup!==void 0?e.collisionFilterGroup:1,this.collisionFilterMask=e.collisionFilterMask!==void 0?e.collisionFilterMask:-1,this.material=e.material?e.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(e,i){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(e,i,r,n){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};Re.idCounter=0;Re.types=q_;var at=class t{constructor(e){e===void 0&&(e={}),this.position=new E,this.quaternion=new Rt,e.position&&this.position.copy(e.position),e.quaternion&&this.quaternion.copy(e.quaternion)}pointToLocal(e,i){return t.pointToLocalFrame(this.position,this.quaternion,e,i)}pointToWorld(e,i){return t.pointToWorldFrame(this.position,this.quaternion,e,i)}vectorToWorldFrame(e,i){return i===void 0&&(i=new E),this.quaternion.vmult(e,i),i}static pointToLocalFrame(e,i,r,n){return n===void 0&&(n=new E),r.vsub(e,n),i.conjugate(pu),pu.vmult(n,n),n}static pointToWorldFrame(e,i,r,n){return n===void 0&&(n=new E),i.vmult(r,n),n.vadd(e,n),n}static vectorToWorldFrame(e,i,r){return r===void 0&&(r=new E),e.vmult(i,r),r}static vectorToLocalFrame(e,i,r,n){return n===void 0&&(n=new E),i.w*=-1,i.vmult(r,n),i.w*=-1,n}},pu=new Rt,Ys=class t extends Re{constructor(e){e===void 0&&(e={});let{vertices:i=[],faces:r=[],normals:n=[],axes:s,boundingSphereRadius:a}=e;super({type:Re.types.CONVEXPOLYHEDRON}),this.vertices=i,this.faces=r,this.faceNormals=n,this.faceNormals.length===0&&this.computeNormals(),a?this.boundingSphereRadius=a:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let e=this.faces,i=this.vertices,r=this.uniqueEdges;r.length=0;let n=new E;for(let s=0;s!==e.length;s++){let a=e[s],o=a.length;for(let l=0;l!==o;l++){let h=(l+1)%o;i[a[l]].vsub(i[a[h]],n),n.normalize();let u=!1;for(let d=0;d!==r.length;d++)if(r[d].almostEquals(n)||r[d].almostEquals(n)){u=!0;break}u||r.push(n.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let e=0;e<this.faces.length;e++){for(let n=0;n<this.faces[e].length;n++)if(!this.vertices[this.faces[e][n]])throw new Error(`Vertex ${this.faces[e][n]} not found!`);let i=this.faceNormals[e]||new E;this.getFaceNormal(e,i),i.negate(i),this.faceNormals[e]=i;let r=this.vertices[this.faces[e][0]];if(i.dot(r)<0){console.error(`.faceNormals[${e}] = Vec3(${i.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let n=0;n<this.faces[e].length;n++)console.warn(`.vertices[${this.faces[e][n]}] = Vec3(${this.vertices[this.faces[e][n]].toString()})`)}}}getFaceNormal(e,i){let r=this.faces[e],n=this.vertices[r[0]],s=this.vertices[r[1]],a=this.vertices[r[2]];t.computeNormal(n,s,a,i)}static computeNormal(e,i,r,n){let s=new E,a=new E;i.vsub(e,a),r.vsub(i,s),s.cross(a,n),n.isZero()||n.normalize()}clipAgainstHull(e,i,r,n,s,a,o,l,h){let u=new E,d=-1,c=-Number.MAX_VALUE;for(let g=0;g<r.faces.length;g++){u.copy(r.faceNormals[g]),s.vmult(u,u);let v=u.dot(a);v>c&&(c=v,d=g)}let p=[];for(let g=0;g<r.faces[d].length;g++){let v=r.vertices[r.faces[d][g]],m=new E;m.copy(v),s.vmult(m,m),n.vadd(m,m),p.push(m)}d>=0&&this.clipFaceAgainstHull(a,e,i,p,o,l,h)}findSeparatingAxis(e,i,r,n,s,a,o,l){let h=new E,u=new E,d=new E,c=new E,p=new E,g=new E,v=Number.MAX_VALUE,m=this;if(m.uniqueAxes)for(let f=0;f!==m.uniqueAxes.length;f++){r.vmult(m.uniqueAxes[f],h);let y=m.testSepAxis(h,e,i,r,n,s);if(y===!1)return!1;y<v&&(v=y,a.copy(h))}else{let f=o?o.length:m.faces.length;for(let y=0;y<f;y++){let b=o?o[y]:y;h.copy(m.faceNormals[b]),r.vmult(h,h);let _=m.testSepAxis(h,e,i,r,n,s);if(_===!1)return!1;_<v&&(v=_,a.copy(h))}}if(e.uniqueAxes)for(let f=0;f!==e.uniqueAxes.length;f++){s.vmult(e.uniqueAxes[f],u);let y=m.testSepAxis(u,e,i,r,n,s);if(y===!1)return!1;y<v&&(v=y,a.copy(u))}else{let f=l?l.length:e.faces.length;for(let y=0;y<f;y++){let b=l?l[y]:y;u.copy(e.faceNormals[b]),s.vmult(u,u);let _=m.testSepAxis(u,e,i,r,n,s);if(_===!1)return!1;_<v&&(v=_,a.copy(u))}}for(let f=0;f!==m.uniqueEdges.length;f++){r.vmult(m.uniqueEdges[f],c);for(let y=0;y!==e.uniqueEdges.length;y++)if(s.vmult(e.uniqueEdges[y],p),c.cross(p,g),!g.almostZero()){g.normalize();let b=m.testSepAxis(g,e,i,r,n,s);if(b===!1)return!1;b<v&&(v=b,a.copy(g))}}return n.vsub(i,d),d.dot(a)>0&&a.negate(a),!0}testSepAxis(e,i,r,n,s,a){let o=this;t.project(o,e,r,n,Qo),t.project(i,e,s,a,el);let l=Qo[0],h=Qo[1],u=el[0],d=el[1];if(l<d||u<h)return!1;let c=l-d,p=u-h;return c<p?c:p}calculateLocalInertia(e,i){let r=new E,n=new E;this.computeLocalAABB(n,r);let s=r.x-n.x,a=r.y-n.y,o=r.z-n.z;i.x=1/12*e*(2*a*2*a+2*o*2*o),i.y=1/12*e*(2*s*2*s+2*o*2*o),i.z=1/12*e*(2*a*2*a+2*s*2*s)}getPlaneConstantOfFace(e){let i=this.faces[e],r=this.faceNormals[e],n=this.vertices[i[0]];return-r.dot(n)}clipFaceAgainstHull(e,i,r,n,s,a,o){let l=new E,h=new E,u=new E,d=new E,c=new E,p=new E,g=new E,v=new E,m=this,f=[],y=n,b=f,_=-1,M=Number.MAX_VALUE;for(let N=0;N<m.faces.length;N++){l.copy(m.faceNormals[N]),r.vmult(l,l);let P=l.dot(e);P<M&&(M=P,_=N)}if(_<0)return;let T=m.faces[_];T.connectedFaces=[];for(let N=0;N<m.faces.length;N++)for(let P=0;P<m.faces[N].length;P++)T.indexOf(m.faces[N][P])!==-1&&N!==_&&T.connectedFaces.indexOf(N)===-1&&T.connectedFaces.push(N);let C=T.length;for(let N=0;N<C;N++){let P=m.vertices[T[N]],B=m.vertices[T[(N+1)%C]];P.vsub(B,h),u.copy(h),r.vmult(u,u),i.vadd(u,u),d.copy(this.faceNormals[_]),r.vmult(d,d),i.vadd(d,d),u.cross(d,c),c.negate(c),p.copy(P),r.vmult(p,p),i.vadd(p,p);let F=T.connectedFaces[N];g.copy(this.faceNormals[F]);let I=this.getPlaneConstantOfFace(F);v.copy(g),r.vmult(v,v);let D=I-v.dot(i);for(this.clipFaceAgainstPlane(y,b,v,D);y.length;)y.shift();for(;b.length;)y.push(b.shift())}g.copy(this.faceNormals[_]);let x=this.getPlaneConstantOfFace(_);v.copy(g),r.vmult(v,v);let S=x-v.dot(i);for(let N=0;N<y.length;N++){let P=v.dot(y[N])+S;if(P<=s&&(console.log(`clamped: depth=${P} to minDist=${s}`),P=s),P<=a){let B=y[N];if(P<=1e-6){let F={point:B,normal:v,depth:P};o.push(F)}}}}clipFaceAgainstPlane(e,i,r,n){let s,a,o=e.length;if(o<2)return i;let l=e[e.length-1],h=e[0];s=r.dot(l)+n;for(let u=0;u<o;u++){if(h=e[u],a=r.dot(h)+n,s<0)if(a<0){let d=new E;d.copy(h),i.push(d)}else{let d=new E;l.lerp(h,s/(s-a),d),i.push(d)}else if(a<0){let d=new E;l.lerp(h,s/(s-a),d),i.push(d),i.push(h)}l=h,s=a}return i}computeWorldVertices(e,i){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);let r=this.vertices,n=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)i.vmult(r[s],n[s]),e.vadd(n[s],n[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(e,i){let r=this.vertices;e.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),i.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let n=0;n<this.vertices.length;n++){let s=r[n];s.x<e.x?e.x=s.x:s.x>i.x&&(i.x=s.x),s.y<e.y?e.y=s.y:s.y>i.y&&(i.y=s.y),s.z<e.z?e.z=s.z:s.z>i.z&&(i.z=s.z)}}computeWorldFaceNormals(e){let i=this.faceNormals.length;for(;this.worldFaceNormals.length<i;)this.worldFaceNormals.push(new E);let r=this.faceNormals,n=this.worldFaceNormals;for(let s=0;s!==i;s++)e.vmult(r[s],n[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let e=0,i=this.vertices;for(let r=0;r!==i.length;r++){let n=i[r].lengthSquared();n>e&&(e=n)}this.boundingSphereRadius=Math.sqrt(e)}calculateWorldAABB(e,i,r,n){let s=this.vertices,a,o,l,h,u,d,c=new E;for(let p=0;p<s.length;p++){c.copy(s[p]),i.vmult(c,c),e.vadd(c,c);let g=c;(a===void 0||g.x<a)&&(a=g.x),(h===void 0||g.x>h)&&(h=g.x),(o===void 0||g.y<o)&&(o=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(d===void 0||g.z>d)&&(d=g.z)}r.set(a,o,l),n.set(h,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(e){e===void 0&&(e=new E);let i=this.vertices;for(let r=0;r<i.length;r++)e.vadd(i[r],e);return e.scale(1/i.length,e),e}transformAllPoints(e,i){let r=this.vertices.length,n=this.vertices;if(i){for(let s=0;s<r;s++){let a=n[s];i.vmult(a,a)}for(let s=0;s<this.faceNormals.length;s++){let a=this.faceNormals[s];i.vmult(a,a)}}if(e)for(let s=0;s<r;s++){let a=n[s];a.vadd(e,a)}}pointIsInside(e){let i=this.vertices,r=this.faces,n=this.faceNormals,s=null,a=new E;this.getAveragePointLocal(a);for(let o=0;o<this.faces.length;o++){let l=n[o],h=i[r[o][0]],u=new E;e.vsub(h,u);let d=l.dot(u),c=new E;a.vsub(h,c);let p=l.dot(c);if(d<0&&p>0||d>0&&p<0)return!1}return s?1:-1}static project(e,i,r,n,s){let a=e.vertices.length,o=j_,l=0,h=0,u=Y_,d=e.vertices;u.setZero(),at.vectorToLocalFrame(r,n,i,o),at.pointToLocalFrame(r,n,u,u);let c=u.dot(o);h=l=d[0].dot(o);for(let p=1;p<a;p++){let g=d[p].dot(o);g>l&&(l=g),g<h&&(h=g)}if(h-=c,l-=c,h>l){let p=h;h=l,l=p}s[0]=l,s[1]=h}},Qo=[],el=[],X_=new E,j_=new E,Y_=new E,bi=class t extends Re{constructor(e){super({type:Re.types.BOX}),this.halfExtents=e,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let e=this.halfExtents.x,i=this.halfExtents.y,r=this.halfExtents.z,n=E,s=[new n(-e,-i,-r),new n(e,-i,-r),new n(e,i,-r),new n(-e,i,-r),new n(-e,-i,r),new n(e,-i,r),new n(e,i,r),new n(-e,i,r)],a=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new n(0,0,1),new n(0,1,0),new n(1,0,0)],l=new Ys({vertices:s,faces:a,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(e,i){return i===void 0&&(i=new E),t.calculateInertia(this.halfExtents,e,i),i}static calculateInertia(e,i,r){let n=e;r.x=1/12*i*(2*n.y*2*n.y+2*n.z*2*n.z),r.y=1/12*i*(2*n.x*2*n.x+2*n.z*2*n.z),r.z=1/12*i*(2*n.y*2*n.y+2*n.x*2*n.x)}getSideNormals(e,i){let r=e,n=this.halfExtents;if(r[0].set(n.x,0,0),r[1].set(0,n.y,0),r[2].set(0,0,n.z),r[3].set(-n.x,0,0),r[4].set(0,-n.y,0),r[5].set(0,0,-n.z),i!==void 0)for(let s=0;s!==r.length;s++)i.vmult(r[s],r[s]);return r}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(e,i,r){let n=this.halfExtents,s=[[n.x,n.y,n.z],[-n.x,n.y,n.z],[-n.x,-n.y,n.z],[-n.x,-n.y,-n.z],[n.x,-n.y,-n.z],[n.x,n.y,-n.z],[-n.x,n.y,-n.z],[n.x,-n.y,n.z]];for(let a=0;a<s.length;a++)Ki.set(s[a][0],s[a][1],s[a][2]),i.vmult(Ki,Ki),e.vadd(Ki,Ki),r(Ki.x,Ki.y,Ki.z)}calculateWorldAABB(e,i,r,n){let s=this.halfExtents;_i[0].set(s.x,s.y,s.z),_i[1].set(-s.x,s.y,s.z),_i[2].set(-s.x,-s.y,s.z),_i[3].set(-s.x,-s.y,-s.z),_i[4].set(s.x,-s.y,-s.z),_i[5].set(s.x,s.y,-s.z),_i[6].set(-s.x,s.y,-s.z),_i[7].set(s.x,-s.y,s.z);let a=_i[0];i.vmult(a,a),e.vadd(a,a),n.copy(a),r.copy(a);for(let o=1;o<8;o++){let l=_i[o];i.vmult(l,l),e.vadd(l,l);let h=l.x,u=l.y,d=l.z;h>n.x&&(n.x=h),u>n.y&&(n.y=u),d>n.z&&(n.z=d),h<r.x&&(r.x=h),u<r.y&&(r.y=u),d<r.z&&(r.z=d)}}},Ki=new E,_i=[new E,new E,new E,new E,new E,new E,new E,new E],gl={DYNAMIC:1,STATIC:2,KINEMATIC:4},vl={AWAKE:0,SLEEPY:1,SLEEPING:2},je=class t extends js{constructor(e){e===void 0&&(e={}),super(),this.id=t.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof e.collisionFilterGroup=="number"?e.collisionFilterGroup:1,this.collisionFilterMask=typeof e.collisionFilterMask=="number"?e.collisionFilterMask:-1,this.collisionResponse=typeof e.collisionResponse=="boolean"?e.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,e.position&&(this.position.copy(e.position),this.previousPosition.copy(e.position),this.interpolatedPosition.copy(e.position),this.initPosition.copy(e.position)),this.velocity=new E,e.velocity&&this.velocity.copy(e.velocity),this.initVelocity=new E,this.force=new E;let i=typeof e.mass=="number"?e.mass:0;this.mass=i,this.invMass=i>0?1/i:0,this.material=e.material||null,this.linearDamping=typeof e.linearDamping=="number"?e.linearDamping:.01,this.type=i<=0?t.STATIC:t.DYNAMIC,typeof e.type==typeof t.STATIC&&(this.type=e.type),this.allowSleep=typeof e.allowSleep!="undefined"?e.allowSleep:!0,this.sleepState=t.AWAKE,this.sleepSpeedLimit=typeof e.sleepSpeedLimit!="undefined"?e.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof e.sleepTimeLimit!="undefined"?e.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new Rt,this.initQuaternion=new Rt,this.previousQuaternion=new Rt,this.interpolatedQuaternion=new Rt,e.quaternion&&(this.quaternion.copy(e.quaternion),this.initQuaternion.copy(e.quaternion),this.previousQuaternion.copy(e.quaternion),this.interpolatedQuaternion.copy(e.quaternion)),this.angularVelocity=new E,e.angularVelocity&&this.angularVelocity.copy(e.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new Ji,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new Ji,this.fixedRotation=typeof e.fixedRotation!="undefined"?e.fixedRotation:!1,this.angularDamping=typeof e.angularDamping!="undefined"?e.angularDamping:.01,this.linearFactor=new E(1,1,1),e.linearFactor&&this.linearFactor.copy(e.linearFactor),this.angularFactor=new E(1,1,1),e.angularFactor&&this.angularFactor.copy(e.angularFactor),this.aabb=new jt,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!e.isTrigger,e.shape&&this.addShape(e.shape),this.updateMassProperties()}wakeUp(){let e=this.sleepState;this.sleepState=t.AWAKE,this.wakeUpAfterNarrowphase=!1,e===t.SLEEPING&&this.dispatchEvent(t.wakeupEvent)}sleep(){this.sleepState=t.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(e){if(this.allowSleep){let i=this.sleepState,r=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),n=this.sleepSpeedLimit**2;i===t.AWAKE&&r<n?(this.sleepState=t.SLEEPY,this.timeLastSleepy=e,this.dispatchEvent(t.sleepyEvent)):i===t.SLEEPY&&r>n?this.wakeUp():i===t.SLEEPY&&e-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(t.sleepEvent))}}updateSolveMassProperties(){this.sleepState===t.SLEEPING||this.type===t.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(e,i){return i===void 0&&(i=new E),e.vsub(this.position,i),this.quaternion.conjugate().vmult(i,i),i}vectorToLocalFrame(e,i){return i===void 0&&(i=new E),this.quaternion.conjugate().vmult(e,i),i}pointToWorldFrame(e,i){return i===void 0&&(i=new E),this.quaternion.vmult(e,i),i.vadd(this.position,i),i}vectorToWorldFrame(e,i){return i===void 0&&(i=new E),this.quaternion.vmult(e,i),i}addShape(e,i,r){let n=new E,s=new Rt;return i&&n.copy(i),r&&s.copy(r),this.shapes.push(e),this.shapeOffsets.push(n),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=this,this}removeShape(e){let i=this.shapes.indexOf(e);return i===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(i,1),this.shapeOffsets.splice(i,1),this.shapeOrientations.splice(i,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,e.body=null,this)}updateBoundingRadius(){let e=this.shapes,i=this.shapeOffsets,r=e.length,n=0;for(let s=0;s!==r;s++){let a=e[s];a.updateBoundingSphereRadius();let o=i[s].length(),l=a.boundingSphereRadius;o+l>n&&(n=o+l)}this.boundingRadius=n}updateAABB(){let e=this.shapes,i=this.shapeOffsets,r=this.shapeOrientations,n=e.length,s=Z_,a=K_,o=this.quaternion,l=this.aabb,h=J_;for(let u=0;u!==n;u++){let d=e[u];o.vmult(i[u],s),s.vadd(this.position,s),o.mult(r[u],a),d.calculateWorldAABB(s,a,h.lowerBound,h.upperBound),u===0?l.copy(h):l.extend(h)}this.aabbNeedsUpdate=!1}updateInertiaWorld(e){let i=this.invInertia;if(!(i.x===i.y&&i.y===i.z&&!e)){let r=$_,n=Q_;r.setRotationFromQuaternion(this.quaternion),r.transpose(n),r.scale(i,r),r.mmult(n,this.invInertiaWorld)}}applyForce(e,i){if(i===void 0&&(i=new E),this.type!==t.DYNAMIC)return;this.sleepState===t.SLEEPING&&this.wakeUp();let r=ty;i.cross(e,r),this.force.vadd(e,this.force),this.torque.vadd(r,this.torque)}applyLocalForce(e,i){if(i===void 0&&(i=new E),this.type!==t.DYNAMIC)return;let r=iy,n=ry;this.vectorToWorldFrame(e,r),this.vectorToWorldFrame(i,n),this.applyForce(r,n)}applyTorque(e){this.type===t.DYNAMIC&&(this.sleepState===t.SLEEPING&&this.wakeUp(),this.torque.vadd(e,this.torque))}applyImpulse(e,i){if(i===void 0&&(i=new E),this.type!==t.DYNAMIC)return;this.sleepState===t.SLEEPING&&this.wakeUp();let r=i,n=ny;n.copy(e),n.scale(this.invMass,n),this.velocity.vadd(n,this.velocity);let s=sy;r.cross(e,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(e,i){if(i===void 0&&(i=new E),this.type!==t.DYNAMIC)return;let r=ay,n=oy;this.vectorToWorldFrame(e,r),this.vectorToWorldFrame(i,n),this.applyImpulse(r,n)}updateMassProperties(){let e=ly;this.invMass=this.mass>0?1/this.mass:0;let i=this.inertia,r=this.fixedRotation;this.updateAABB(),e.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),bi.calculateInertia(e,this.mass,i),this.invInertia.set(i.x>0&&!r?1/i.x:0,i.y>0&&!r?1/i.y:0,i.z>0&&!r?1/i.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(e,i){let r=new E;return e.vsub(this.position,r),this.angularVelocity.cross(r,i),this.velocity.vadd(i,i),i}integrate(e,i,r){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===t.DYNAMIC||this.type===t.KINEMATIC)||this.sleepState===t.SLEEPING)return;let n=this.velocity,s=this.angularVelocity,a=this.position,o=this.force,l=this.torque,h=this.quaternion,u=this.invMass,d=this.invInertiaWorld,c=this.linearFactor,p=u*e;n.x+=o.x*p*c.x,n.y+=o.y*p*c.y,n.z+=o.z*p*c.z;let g=d.elements,v=this.angularFactor,m=l.x*v.x,f=l.y*v.y,y=l.z*v.z;s.x+=e*(g[0]*m+g[1]*f+g[2]*y),s.y+=e*(g[3]*m+g[4]*f+g[5]*y),s.z+=e*(g[6]*m+g[7]*f+g[8]*y),a.x+=n.x*e,a.y+=n.y*e,a.z+=n.z*e,h.integrate(this.angularVelocity,e,this.angularFactor,h),i&&(r?h.normalizeFast():h.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};je.idCounter=0;je.COLLIDE_EVENT_NAME="collide";je.DYNAMIC=gl.DYNAMIC;je.STATIC=gl.STATIC;je.KINEMATIC=gl.KINEMATIC;je.AWAKE=vl.AWAKE;je.SLEEPY=vl.SLEEPY;je.SLEEPING=vl.SLEEPING;je.wakeupEvent={type:"wakeup"};je.sleepyEvent={type:"sleepy"};je.sleepEvent={type:"sleep"};var Z_=new E,K_=new Rt,J_=new jt,$_=new Ji,Q_=new Ji,ey=new Ji,ty=new E,iy=new E,ry=new E,ny=new E,sy=new E,ay=new E,oy=new E,ly=new E,sl=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(e,i,r){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(e,i){return!((e.collisionFilterGroup&i.collisionFilterMask)===0||(i.collisionFilterGroup&e.collisionFilterMask)===0||((e.type&je.STATIC)!==0||e.sleepState===je.SLEEPING)&&((i.type&je.STATIC)!==0||i.sleepState===je.SLEEPING))}intersectionTest(e,i,r,n){this.useBoundingBoxes?this.doBoundingBoxBroadphase(e,i,r,n):this.doBoundingSphereBroadphase(e,i,r,n)}doBoundingSphereBroadphase(e,i,r,n){let s=hy;i.position.vsub(e.position,s);let a=(e.boundingRadius+i.boundingRadius)**2;s.lengthSquared()<a&&(r.push(e),n.push(i))}doBoundingBoxBroadphase(e,i,r,n){e.aabbNeedsUpdate&&e.updateAABB(),i.aabbNeedsUpdate&&i.updateAABB(),e.aabb.overlaps(i.aabb)&&(r.push(e),n.push(i))}makePairsUnique(e,i){let r=cy,n=uy,s=dy,a=e.length;for(let o=0;o!==a;o++)n[o]=e[o],s[o]=i[o];e.length=0,i.length=0;for(let o=0;o!==a;o++){let l=n[o].id,h=s[o].id,u=l<h?`${l},${h}`:`${h},${l}`;r[u]=o,r.keys.push(u)}for(let o=0;o!==r.keys.length;o++){let l=r.keys.pop(),h=r[l];e.push(n[h]),i.push(s[h]),delete r[l]}}setWorld(e){}static boundingSphereCheck(e,i){let r=new E;e.position.vsub(i.position,r);let n=e.shapes[0],s=i.shapes[0];return Math.pow(n.boundingSphereRadius+s.boundingSphereRadius,2)>r.lengthSquared()}aabbQuery(e,i,r){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},hy=new E;new E;new Rt;new E;var cy={keys:[]},uy=[],dy=[];new E;var aw=new E;new E;var al=class extends sl{constructor(){super()}collisionPairs(e,i,r){let n=e.bodies,s=n.length,a,o;for(let l=0;l!==s;l++)for(let h=0;h!==l;h++)a=n[l],o=n[h],this.needBroadphaseCollision(a,o)&&this.intersectionTest(a,o,i,r)}aabbQuery(e,i,r){r===void 0&&(r=[]);for(let n=0;n<e.bodies.length;n++){let s=e.bodies[n];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(i)&&r.push(s)}return r}},vr=class{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(e,i,r,n,s,a,o){this.rayFromWorld.copy(e),this.rayToWorld.copy(i),this.hitNormalWorld.copy(r),this.hitPointWorld.copy(n),this.shape=s,this.body=a,this.distance=o}},Cu,Ru,Iu,Pu,Lu,Nu,Du,_l={CLOSEST:1,ANY:2,ALL:4};Cu=Re.types.SPHERE;Ru=Re.types.PLANE;Iu=Re.types.BOX;Pu=Re.types.CYLINDER;Lu=Re.types.CONVEXPOLYHEDRON;Nu=Re.types.HEIGHTFIELD;Du=Re.types.TRIMESH;var Kt=class t{get[Cu](){return this._intersectSphere}get[Ru](){return this._intersectPlane}get[Iu](){return this._intersectBox}get[Pu](){return this._intersectConvex}get[Lu](){return this._intersectConvex}get[Nu](){return this._intersectHeightfield}get[Du](){return this._intersectTrimesh}constructor(e,i){e===void 0&&(e=new E),i===void 0&&(i=new E),this.from=e.clone(),this.to=i.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=t.ANY,this.result=new vr,this.hasHit=!1,this.callback=r=>{}}intersectWorld(e,i){return this.mode=i.mode||t.ANY,this.result=i.result||new vr,this.skipBackfaces=!!i.skipBackfaces,this.collisionFilterMask=typeof i.collisionFilterMask!="undefined"?i.collisionFilterMask:-1,this.collisionFilterGroup=typeof i.collisionFilterGroup!="undefined"?i.collisionFilterGroup:-1,this.checkCollisionResponse=typeof i.checkCollisionResponse!="undefined"?i.checkCollisionResponse:!0,i.from&&this.from.copy(i.from),i.to&&this.to.copy(i.to),this.callback=i.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(fu),tl.length=0,e.broadphase.aabbQuery(e,fu,tl),this.intersectBodies(tl),this.hasHit}intersectBody(e,i){i&&(this.result=i,this.updateDirection());let r=this.checkCollisionResponse;if(r&&!e.collisionResponse||(this.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&this.collisionFilterMask)===0)return;let n=py,s=fy;for(let a=0,o=e.shapes.length;a<o;a++){let l=e.shapes[a];if(!(r&&!l.collisionResponse)&&(e.quaternion.mult(e.shapeOrientations[a],s),e.quaternion.vmult(e.shapeOffsets[a],n),n.vadd(e.position,n),this.intersectShape(l,s,n,e),this.result.shouldStop))break}}intersectBodies(e,i){i&&(this.result=i,this.updateDirection());for(let r=0,n=e.length;!this.result.shouldStop&&r<n;r++)this.intersectBody(e[r])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(e,i,r,n){let s=this.from;if(Iy(s,this.direction,r)>e.boundingSphereRadius)return;let o=this[e.type];o&&o.call(this,e,i,r,n,e)}_intersectBox(e,i,r,n,s){return this._intersectConvex(e.convexPolyhedronRepresentation,i,r,n,s)}_intersectPlane(e,i,r,n,s){let a=this.from,o=this.to,l=this.direction,h=new E(0,0,1);i.vmult(h,h);let u=new E;a.vsub(r,u);let d=u.dot(h);o.vsub(r,u);let c=u.dot(h);if(d*c>0||a.distanceTo(o)<d)return;let p=h.dot(l);if(Math.abs(p)<this.precision)return;let g=new E,v=new E,m=new E;a.vsub(r,g);let f=-h.dot(g)/p;l.scale(f,v),a.vadd(v,m),this.reportIntersection(h,m,s,n,-1)}getAABB(e){let{lowerBound:i,upperBound:r}=e,n=this.to,s=this.from;i.x=Math.min(n.x,s.x),i.y=Math.min(n.y,s.y),i.z=Math.min(n.z,s.z),r.x=Math.max(n.x,s.x),r.y=Math.max(n.y,s.y),r.z=Math.max(n.z,s.z)}_intersectHeightfield(e,i,r,n,s){e.data,e.elementSize;let a=my;a.from.copy(this.from),a.to.copy(this.to),at.pointToLocalFrame(r,i,a.from,a.from),at.pointToLocalFrame(r,i,a.to,a.to),a.updateDirection();let o=gy,l,h,u,d;l=h=0,u=d=e.data.length-1;let c=new jt;a.getAABB(c),e.getIndexOfPosition(c.lowerBound.x,c.lowerBound.y,o,!0),l=Math.max(l,o[0]),h=Math.max(h,o[1]),e.getIndexOfPosition(c.upperBound.x,c.upperBound.y,o,!0),u=Math.min(u,o[0]+1),d=Math.min(d,o[1]+1);for(let p=l;p<u;p++)for(let g=h;g<d;g++){if(this.result.shouldStop)return;if(e.getAabbAtIndex(p,g,c),!!c.overlapsRay(a)){if(e.getConvexTrianglePillar(p,g,!1),at.pointToWorldFrame(r,i,e.pillarOffset,Gs),this._intersectConvex(e.pillarConvex,i,Gs,n,s,mu),this.result.shouldStop)return;e.getConvexTrianglePillar(p,g,!0),at.pointToWorldFrame(r,i,e.pillarOffset,Gs),this._intersectConvex(e.pillarConvex,i,Gs,n,s,mu)}}}_intersectSphere(e,i,r,n,s){let a=this.from,o=this.to,l=e.radius,h=(o.x-a.x)**2+(o.y-a.y)**2+(o.z-a.z)**2,u=2*((o.x-a.x)*(a.x-r.x)+(o.y-a.y)*(a.y-r.y)+(o.z-a.z)*(a.z-r.z)),d=(a.x-r.x)**2+(a.y-r.y)**2+(a.z-r.z)**2-l**2,c=u**2-4*h*d,p=vy,g=_y;if(!(c<0))if(c===0)a.lerp(o,c,p),p.vsub(r,g),g.normalize(),this.reportIntersection(g,p,s,n,-1);else{let v=(-u-Math.sqrt(c))/(2*h),m=(-u+Math.sqrt(c))/(2*h);if(v>=0&&v<=1&&(a.lerp(o,v,p),p.vsub(r,g),g.normalize(),this.reportIntersection(g,p,s,n,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(a.lerp(o,m,p),p.vsub(r,g),g.normalize(),this.reportIntersection(g,p,s,n,-1))}}_intersectConvex(e,i,r,n,s,a){let o=yy,l=gu,h=a&&a.faceList||null,u=e.faces,d=e.vertices,c=e.faceNormals,p=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),f=h?h.length:u.length,y=this.result;for(let b=0;!y.shouldStop&&b<f;b++){let _=h?h[b]:b,M=u[_],T=c[_],C=i,x=r;l.copy(d[M[0]]),C.vmult(l,l),l.vadd(x,l),l.vsub(g,l),C.vmult(T,o);let S=p.dot(o);if(Math.abs(S)<this.precision)continue;let N=o.dot(l)/S;if(!(N<0)){p.scale(N,Vt),Vt.vadd(g,Vt),si.copy(d[M[0]]),C.vmult(si,si),x.vadd(si,si);for(let P=1;!y.shouldStop&&P<M.length-1;P++){yi.copy(d[M[P]]),xi.copy(d[M[P+1]]),C.vmult(yi,yi),C.vmult(xi,xi),x.vadd(yi,yi),x.vadd(xi,xi);let B=Vt.distanceTo(g);!(t.pointInTriangle(Vt,si,yi,xi)||t.pointInTriangle(Vt,yi,si,xi))||B>m||this.reportIntersection(o,Vt,s,n,_)}}}}_intersectTrimesh(e,i,r,n,s,a){let o=My,l=Cy,h=Ry,u=gu,d=Sy,c=wy,p=Ey,g=Ay,v=Ty,m=e.indices;e.vertices;let f=this.from,y=this.to,b=this.direction;h.position.copy(r),h.quaternion.copy(i),at.vectorToLocalFrame(r,i,b,d),at.pointToLocalFrame(r,i,f,c),at.pointToLocalFrame(r,i,y,p),p.x*=e.scale.x,p.y*=e.scale.y,p.z*=e.scale.z,c.x*=e.scale.x,c.y*=e.scale.y,c.z*=e.scale.z,p.vsub(c,d),d.normalize();let _=c.distanceSquared(p);e.tree.rayQuery(this,h,l);for(let M=0,T=l.length;!this.result.shouldStop&&M!==T;M++){let C=l[M];e.getNormal(C,o),e.getVertex(m[C*3],si),si.vsub(c,u);let x=d.dot(o),S=o.dot(u)/x;if(S<0)continue;d.scale(S,Vt),Vt.vadd(c,Vt),e.getVertex(m[C*3+1],yi),e.getVertex(m[C*3+2],xi);let N=Vt.distanceSquared(c);!(t.pointInTriangle(Vt,yi,si,xi)||t.pointInTriangle(Vt,si,yi,xi))||N>_||(at.vectorToWorldFrame(i,o,v),at.pointToWorldFrame(r,i,Vt,g),this.reportIntersection(v,g,s,n,C))}l.length=0}reportIntersection(e,i,r,n,s){let a=this.from,o=this.to,l=a.distanceTo(i),h=this.result;if(!(this.skipBackfaces&&e.dot(this.direction)>0))switch(h.hitFaceIndex=typeof s!="undefined"?s:-1,this.mode){case t.ALL:this.hasHit=!0,h.set(a,o,e,i,r,n,l),h.hasHit=!0,this.callback(h);break;case t.CLOSEST:(l<h.distance||!h.hasHit)&&(this.hasHit=!0,h.hasHit=!0,h.set(a,o,e,i,r,n,l));break;case t.ANY:this.hasHit=!0,h.hasHit=!0,h.set(a,o,e,i,r,n,l),h.shouldStop=!0;break}}static pointInTriangle(e,i,r,n){n.vsub(i,gr),r.vsub(i,zn),e.vsub(i,il);let s=gr.dot(gr),a=gr.dot(zn),o=gr.dot(il),l=zn.dot(zn),h=zn.dot(il),u,d;return(u=l*o-a*h)>=0&&(d=s*h-a*o)>=0&&u+d<s*l-a*a}};Kt.CLOSEST=_l.CLOSEST;Kt.ANY=_l.ANY;Kt.ALL=_l.ALL;var fu=new jt,tl=[],zn=new E,il=new E,py=new E,fy=new Rt,Vt=new E,si=new E,yi=new E,xi=new E;new E;new vr;var mu={faceList:[0]},Gs=new E,my=new Kt,gy=[],vy=new E,_y=new E,yy=new E,xy=new E,by=new E,gu=new E,My=new E,Sy=new E,wy=new E,Ey=new E,Ty=new E,Ay=new E;new jt;var Cy=[],Ry=new at,gr=new E,ks=new E;function Iy(t,e,i){i.vsub(t,gr);let r=gr.dot(e);return e.scale(r,ks),ks.vadd(t,ks),i.distanceTo(ks)}var Hn=class{static defaults(e,i){e===void 0&&(e={});for(let r in i)r in e||(e[r]=i[r]);return e}},ol=class t{constructor(e,i,r){r===void 0&&(r={}),r=Hn.defaults(r,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=e,this.bodyB=i,this.id=t.idCounter++,this.collideConnected=r.collideConnected,r.wakeUpBodies&&(e&&e.wakeUp(),i&&i.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let e=this.equations;for(let i=0;i<e.length;i++)e[i].enabled=!0}disable(){let e=this.equations;for(let i=0;i<e.length;i++)e[i].enabled=!1}};ol.idCounter=0;var Zs=class{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(e){return e.spatial.dot(this.spatial)+e.rotational.dot(this.rotational)}multiplyVectors(e,i){return e.dot(this.spatial)+i.dot(this.rotational)}},Wn=class t{constructor(e,i,r,n){r===void 0&&(r=-1e6),n===void 0&&(n=1e6),this.id=t.idCounter++,this.minForce=r,this.maxForce=n,this.bi=e,this.bj=i,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Zs,this.jacobianElementB=new Zs,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(e,i,r){let n=i,s=e,a=r;this.a=4/(a*(1+4*n)),this.b=4*n/(1+4*n),this.eps=4/(a*a*s*(1+4*n))}computeB(e,i,r){let n=this.computeGW(),s=this.computeGq(),a=this.computeGiMf();return-s*e-n*i-a*r}computeGq(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,s=r.position,a=n.position;return e.spatial.dot(s)+i.spatial.dot(a)}computeGW(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,s=r.velocity,a=n.velocity,o=r.angularVelocity,l=n.angularVelocity;return e.multiplyVectors(s,o)+i.multiplyVectors(a,l)}computeGWlambda(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,s=r.vlambda,a=n.vlambda,o=r.wlambda,l=n.wlambda;return e.multiplyVectors(s,o)+i.multiplyVectors(a,l)}computeGiMf(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,s=r.force,a=r.torque,o=n.force,l=n.torque,h=r.invMassSolve,u=n.invMassSolve;return s.scale(h,vu),o.scale(u,_u),r.invInertiaWorldSolve.vmult(a,yu),n.invInertiaWorldSolve.vmult(l,xu),e.multiplyVectors(vu,yu)+i.multiplyVectors(_u,xu)}computeGiMGt(){let e=this.jacobianElementA,i=this.jacobianElementB,r=this.bi,n=this.bj,s=r.invMassSolve,a=n.invMassSolve,o=r.invInertiaWorldSolve,l=n.invInertiaWorldSolve,h=s+a;return o.vmult(e.rotational,Hs),h+=Hs.dot(e.rotational),l.vmult(i.rotational,Hs),h+=Hs.dot(i.rotational),h}addToWlambda(e){let i=this.jacobianElementA,r=this.jacobianElementB,n=this.bi,s=this.bj,a=Py;n.vlambda.addScaledVector(n.invMassSolve*e,i.spatial,n.vlambda),s.vlambda.addScaledVector(s.invMassSolve*e,r.spatial,s.vlambda),n.invInertiaWorldSolve.vmult(i.rotational,a),n.wlambda.addScaledVector(e,a,n.wlambda),s.invInertiaWorldSolve.vmult(r.rotational,a),s.wlambda.addScaledVector(e,a,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Wn.idCounter=0;var vu=new E,_u=new E,yu=new E,xu=new E,Hs=new E,Py=new E,ll=class extends Wn{constructor(e,i,r){r===void 0&&(r=1e6),super(e,i,0,r),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(e){let i=this.a,r=this.b,n=this.bi,s=this.bj,a=this.ri,o=this.rj,l=Ly,h=Ny,u=n.velocity,d=n.angularVelocity;n.force,n.torque;let c=s.velocity,p=s.angularVelocity;s.force,s.torque;let g=Dy,v=this.jacobianElementA,m=this.jacobianElementB,f=this.ni;a.cross(f,l),o.cross(f,h),f.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(f),m.rotational.copy(h),g.copy(s.position),g.vadd(o,g),g.vsub(n.position,g),g.vsub(a,g);let y=f.dot(g),b=this.restitution+1,_=b*c.dot(f)-b*u.dot(f)+p.dot(h)-d.dot(l),M=this.computeGiMf();return-y*i-_*r-e*M}getImpactVelocityAlongNormal(){let e=By,i=Uy,r=Fy,n=Oy,s=zy;return this.bi.position.vadd(this.ri,r),this.bj.position.vadd(this.rj,n),this.bi.getVelocityAtWorldPoint(r,e),this.bj.getVelocityAtWorldPoint(n,i),e.vsub(i,s),this.ni.dot(s)}},Ly=new E,Ny=new E,Dy=new E,By=new E,Uy=new E,Fy=new E,Oy=new E,zy=new E;var ow=new E,lw=new E;var hw=new E,cw=new E;new E;new E;var uw=new E,dw=new E;var pw=new E,fw=new E,Ks=class extends Wn{constructor(e,i,r){super(e,i,-r,r),this.ri=new E,this.rj=new E,this.t=new E}computeB(e){this.a;let i=this.b;this.bi,this.bj;let r=this.ri,n=this.rj,s=Vy,a=Gy,o=this.t;r.cross(o,s),n.cross(o,a);let l=this.jacobianElementA,h=this.jacobianElementB;o.negate(l.spatial),s.negate(l.rotational),h.spatial.copy(o),h.rotational.copy(a);let u=this.computeGW(),d=this.computeGiMf();return-u*i-e*d}},Vy=new E,Gy=new E,ln=class t{constructor(e,i,r){r=Hn.defaults(r,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=t.idCounter++,this.materials=[e,i],this.friction=r.friction,this.restitution=r.restitution,this.contactEquationStiffness=r.contactEquationStiffness,this.contactEquationRelaxation=r.contactEquationRelaxation,this.frictionEquationStiffness=r.frictionEquationStiffness,this.frictionEquationRelaxation=r.frictionEquationRelaxation}};ln.idCounter=0;var _r=class t{constructor(e){e===void 0&&(e={});let i="";typeof e=="string"&&(i=e,e={}),this.name=i,this.id=t.idCounter++,this.friction=typeof e.friction!="undefined"?e.friction:-1,this.restitution=typeof e.restitution!="undefined"?e.restitution:-1}};_r.idCounter=0;var mw=new E,gw=new E,vw=new E,_w=new E,yw=new E,xw=new E,bw=new E,Mw=new E,Sw=new E,ww=new E,Ew=new E,hl=class{constructor(e){e===void 0&&(e={}),e=Hn.defaults(e,{chassisConnectionPointLocal:new E,chassisConnectionPointWorld:new E,directionLocal:new E,directionWorld:new E,axleLocal:new E,axleWorld:new E,suspensionRestLength:1,suspensionMaxLength:2,radius:1,suspensionStiffness:100,dampingCompression:10,dampingRelaxation:10,frictionSlip:10.5,forwardAcceleration:1,sideAcceleration:1,steering:0,rotation:0,deltaRotation:0,rollInfluence:.01,maxSuspensionForce:Number.MAX_VALUE,isFrontWheel:!0,clippedInvContactDotSuspension:1,suspensionRelativeVelocity:0,suspensionForce:0,slipInfo:0,skidInfo:0,suspensionLength:0,maxSuspensionTravel:1,useCustomSlidingRotationalSpeed:!1,customSlidingRotationalSpeed:-.1}),this.maxSuspensionTravel=e.maxSuspensionTravel,this.customSlidingRotationalSpeed=e.customSlidingRotationalSpeed,this.useCustomSlidingRotationalSpeed=e.useCustomSlidingRotationalSpeed,this.sliding=!1,this.chassisConnectionPointLocal=e.chassisConnectionPointLocal.clone(),this.chassisConnectionPointWorld=e.chassisConnectionPointWorld.clone(),this.directionLocal=e.directionLocal.clone(),this.directionWorld=e.directionWorld.clone(),this.axleLocal=e.axleLocal.clone(),this.axleWorld=e.axleWorld.clone(),this.suspensionRestLength=e.suspensionRestLength,this.suspensionMaxLength=e.suspensionMaxLength,this.radius=e.radius,this.suspensionStiffness=e.suspensionStiffness,this.dampingCompression=e.dampingCompression,this.dampingRelaxation=e.dampingRelaxation,this.frictionSlip=e.frictionSlip,this.forwardAcceleration=e.forwardAcceleration,this.sideAcceleration=e.sideAcceleration,this.steering=0,this.rotation=0,this.deltaRotation=0,this.rollInfluence=e.rollInfluence,this.maxSuspensionForce=e.maxSuspensionForce,this.engineForce=0,this.brake=0,this.isFrontWheel=e.isFrontWheel,this.clippedInvContactDotSuspension=1,this.suspensionRelativeVelocity=0,this.suspensionForce=0,this.slipInfo=0,this.skidInfo=0,this.suspensionLength=0,this.sideImpulse=0,this.forwardImpulse=0,this.raycastResult=new vr,this.worldTransform=new at,this.isInContact=!1}updateWheel(e){let i=this.raycastResult;if(this.isInContact){let r=i.hitNormalWorld.dot(i.directionWorld);i.hitPointWorld.vsub(e.position,Mu),e.getVelocityAtWorldPoint(Mu,bu);let n=i.hitNormalWorld.dot(bu);if(r>=-.1)this.suspensionRelativeVelocity=0,this.clippedInvContactDotSuspension=1/.1;else{let s=-1/r;this.suspensionRelativeVelocity=n*s,this.clippedInvContactDotSuspension=s}}else i.suspensionLength=this.suspensionRestLength,this.suspensionRelativeVelocity=0,i.directionWorld.scale(-1,i.hitNormalWorld),this.clippedInvContactDotSuspension=1}},bu=new E,Mu=new E,Js=class{constructor(e){this.chassisBody=e.chassisBody,this.wheelInfos=[],this.sliding=!1,this.world=null,this.indexRightAxis=typeof e.indexRightAxis!="undefined"?e.indexRightAxis:2,this.indexForwardAxis=typeof e.indexForwardAxis!="undefined"?e.indexForwardAxis:0,this.indexUpAxis=typeof e.indexUpAxis!="undefined"?e.indexUpAxis:1,this.constraints=[],this.preStepCallback=()=>{},this.currentVehicleSpeedKmHour=0,this.numWheelsOnGround=0}addWheel(e){e===void 0&&(e={});let i=new hl(e),r=this.wheelInfos.length;return this.wheelInfos.push(i),r}setSteeringValue(e,i){let r=this.wheelInfos[i];r.steering=e}applyEngineForce(e,i){this.wheelInfos[i].engineForce=e}setBrake(e,i){this.wheelInfos[i].brake=e}addToWorld(e){e.addBody(this.chassisBody);let i=this;this.preStepCallback=()=>{i.updateVehicle(e.dt)},e.addEventListener("preStep",this.preStepCallback),this.world=e}getVehicleAxisWorld(e,i){i.set(e===0?1:0,e===1?1:0,e===2?1:0),this.chassisBody.vectorToWorldFrame(i,i)}updateVehicle(e){let i=this.wheelInfos,r=i.length,n=this.chassisBody;for(let d=0;d<r;d++)this.updateWheelTransform(d);this.currentVehicleSpeedKmHour=3.6*n.velocity.length();let s=new E;this.getVehicleAxisWorld(this.indexForwardAxis,s),s.dot(n.velocity)<0&&(this.currentVehicleSpeedKmHour*=-1);for(let d=0;d<r;d++)this.castRay(i[d]);this.updateSuspension(e);let a=new E,o=new E;for(let d=0;d<r;d++){let c=i[d],p=c.suspensionForce;p>c.maxSuspensionForce&&(p=c.maxSuspensionForce),c.raycastResult.hitNormalWorld.scale(p*e,a),c.raycastResult.hitPointWorld.vsub(n.position,o),n.applyImpulse(a,o)}this.updateFriction(e);let l=new E,h=new E,u=new E;for(let d=0;d<r;d++){let c=i[d];n.getVelocityAtWorldPoint(c.chassisConnectionPointWorld,u);let p=1;switch(this.indexUpAxis){case 1:p=-1;break}if(c.isInContact){this.getVehicleAxisWorld(this.indexForwardAxis,h);let g=h.dot(c.raycastResult.hitNormalWorld);c.raycastResult.hitNormalWorld.scale(g,l),h.vsub(l,h);let v=h.dot(u);c.deltaRotation=p*v*e/c.radius}(c.sliding||!c.isInContact)&&c.engineForce!==0&&c.useCustomSlidingRotationalSpeed&&(c.deltaRotation=(c.engineForce>0?1:-1)*c.customSlidingRotationalSpeed*e),Math.abs(c.brake)>Math.abs(c.engineForce)&&(c.deltaRotation=0),c.rotation+=c.deltaRotation,c.deltaRotation*=.99}}updateSuspension(e){let r=this.chassisBody.mass,n=this.wheelInfos,s=n.length;for(let a=0;a<s;a++){let o=n[a];if(o.isInContact){let l,h=o.suspensionRestLength,u=o.suspensionLength,d=h-u;l=o.suspensionStiffness*d*o.clippedInvContactDotSuspension;let c=o.suspensionRelativeVelocity,p;c<0?p=o.dampingCompression:p=o.dampingRelaxation,l-=p*c,o.suspensionForce=l*r,o.suspensionForce<0&&(o.suspensionForce=0)}else o.suspensionForce=0}}removeFromWorld(e){this.constraints,e.removeBody(this.chassisBody),e.removeEventListener("preStep",this.preStepCallback),this.world=null}castRay(e){let i=qy,r=Xy;this.updateWheelTransformWorld(e);let n=this.chassisBody,s=-1,a=e.suspensionRestLength+e.radius;e.directionWorld.scale(a,i);let o=e.chassisConnectionPointWorld;o.vadd(i,r);let l=e.raycastResult;l.reset();let h=n.collisionResponse;n.collisionResponse=!1,this.world.rayTest(o,r,l),n.collisionResponse=h;let u=l.body;if(e.raycastResult.groundObject=0,u){s=l.distance,e.raycastResult.hitNormalWorld=l.hitNormalWorld,e.isInContact=!0;let d=l.distance;e.suspensionLength=d-e.radius;let c=e.suspensionRestLength-e.maxSuspensionTravel,p=e.suspensionRestLength+e.maxSuspensionTravel;e.suspensionLength<c&&(e.suspensionLength=c),e.suspensionLength>p&&(e.suspensionLength=p,e.raycastResult.reset());let g=e.raycastResult.hitNormalWorld.dot(e.directionWorld),v=new E;n.getVelocityAtWorldPoint(e.raycastResult.hitPointWorld,v);let m=e.raycastResult.hitNormalWorld.dot(v);if(g>=-.1)e.suspensionRelativeVelocity=0,e.clippedInvContactDotSuspension=1/.1;else{let f=-1/g;e.suspensionRelativeVelocity=m*f,e.clippedInvContactDotSuspension=f}}else e.suspensionLength=e.suspensionRestLength+0*e.maxSuspensionTravel,e.suspensionRelativeVelocity=0,e.directionWorld.scale(-1,e.raycastResult.hitNormalWorld),e.clippedInvContactDotSuspension=1;return s}updateWheelTransformWorld(e){e.isInContact=!1;let i=this.chassisBody;i.pointToWorldFrame(e.chassisConnectionPointLocal,e.chassisConnectionPointWorld),i.vectorToWorldFrame(e.directionLocal,e.directionWorld),i.vectorToWorldFrame(e.axleLocal,e.axleWorld)}updateWheelTransform(e){let i=ky,r=Hy,n=Wy,s=this.wheelInfos[e];this.updateWheelTransformWorld(s),s.directionLocal.scale(-1,i),r.copy(s.axleLocal),i.cross(r,n),n.normalize(),r.normalize();let a=s.steering,o=new Rt;o.setFromAxisAngle(i,a);let l=new Rt;l.setFromAxisAngle(r,s.rotation);let h=s.worldTransform.quaternion;this.chassisBody.quaternion.mult(o,h),h.mult(l,h),h.normalize();let u=s.worldTransform.position;u.copy(s.directionWorld),u.scale(s.suspensionLength,u),u.vadd(s.chassisConnectionPointWorld,u)}getWheelTransformWorld(e){return this.wheelInfos[e].worldTransform}updateFriction(e){let i=Yy,r=this.wheelInfos,n=r.length,s=this.chassisBody,a=Ky,o=Zy;this.numWheelsOnGround=0;for(let u=0;u<n;u++){let d=r[u];d.raycastResult.body&&this.numWheelsOnGround++,d.sideImpulse=0,d.forwardImpulse=0,a[u]||(a[u]=new E),o[u]||(o[u]=new E)}for(let u=0;u<n;u++){let d=r[u],c=d.raycastResult.body;if(c){let p=o[u];this.getWheelTransformWorld(u).vectorToWorldFrame(jy[this.indexRightAxis],p);let v=d.raycastResult.hitNormalWorld,m=p.dot(v);v.scale(m,i),p.vsub(i,p),p.normalize(),v.cross(p,a[u]),a[u].normalize(),d.sideImpulse=hx(s,d.raycastResult.hitPointWorld,c,d.raycastResult.hitPointWorld,p),d.sideImpulse*=Jy}}let l=1,h=.5;this.sliding=!1;for(let u=0;u<n;u++){let d=r[u],c=d.raycastResult.body,p=0;if(d.slipInfo=1,c){let v=d.brake?d.brake:0;p=tx(s,c,d.raycastResult.hitPointWorld,a[u],v),p+=d.engineForce*e;let m=v/p;d.slipInfo*=m}if(d.forwardImpulse=0,d.skidInfo=1,c){d.skidInfo=1;let g=d.suspensionForce*e*d.frictionSlip,m=g*g;d.forwardImpulse=p;let f=d.forwardImpulse*h/d.forwardAcceleration,y=d.sideImpulse*l/d.sideAcceleration,b=f*f+y*y;if(d.sliding=!1,b>m){this.sliding=!0,d.sliding=!0;let _=g/Math.sqrt(b);d.skidInfo*=_}}}if(this.sliding)for(let u=0;u<n;u++){let d=r[u];d.sideImpulse!==0&&d.skidInfo<1&&(d.forwardImpulse*=d.skidInfo,d.sideImpulse*=d.skidInfo)}for(let u=0;u<n;u++){let d=r[u],c=new E;if(d.raycastResult.hitPointWorld.vsub(s.position,c),d.forwardImpulse!==0){let p=new E;a[u].scale(d.forwardImpulse,p),s.applyImpulse(p,c)}if(d.sideImpulse!==0){let p=d.raycastResult.body,g=new E;d.raycastResult.hitPointWorld.vsub(p.position,g);let v=new E;o[u].scale(d.sideImpulse,v),s.vectorToLocalFrame(c,c),c["xyz"[this.indexUpAxis]]*=d.rollInfluence,s.vectorToWorldFrame(c,c),s.applyImpulse(v,c),v.scale(-1,v),p.applyImpulse(v,g)}}}};new E;new E;new E;var ky=new E,Hy=new E,Wy=new E;new Kt;new E;var qy=new E,Xy=new E,jy=[new E(1,0,0),new E(0,1,0),new E(0,0,1)],Yy=new E,Zy=[],Ky=[],Jy=1,$y=new E,Qy=new E,ex=new E;function tx(t,e,i,r,n){let s=0,a=i,o=$y,l=Qy,h=ex;t.getVelocityAtWorldPoint(a,o),e.getVelocityAtWorldPoint(a,l),o.vsub(l,h);let u=r.dot(h),d=Su(t,i,r),c=Su(e,i,r),g=1/(d+c);return s=-u*g,n<s&&(s=n),s<-n&&(s=-n),s}var ix=new E,rx=new E,nx=new E,sx=new E;function Su(t,e,i){let r=ix,n=rx,s=nx,a=sx;return e.vsub(t.position,r),r.cross(i,n),t.invInertiaWorld.vmult(n,a),a.cross(r,s),t.invMass+i.dot(s)}var ax=new E,ox=new E,lx=new E;function hx(t,e,i,r,n){if(n.lengthSquared()>1.1)return 0;let a=ax,o=ox,l=lx;t.getVelocityAtWorldPoint(e,a),i.getVelocityAtWorldPoint(r,o),a.vsub(o,l);let h=n.dot(l),u=.2,d=1/(t.invMass+i.invMass);return-u*h*d}var Tw=new E,Aw=new E;var Cw=new E,Rw=new E,Iw=new E,Pw=new E,Lw=new E,Nw=new E,Dw=new E,qn=class extends Ys{constructor(e,i,r,n){if(e===void 0&&(e=1),i===void 0&&(i=1),r===void 0&&(r=1),n===void 0&&(n=8),e<0)throw new Error("The cylinder radiusTop cannot be negative.");if(i<0)throw new Error("The cylinder radiusBottom cannot be negative.");let s=n,a=[],o=[],l=[],h=[],u=[],d=Math.cos,c=Math.sin;a.push(new E(-i*c(0),-r*.5,i*d(0))),h.push(0),a.push(new E(-e*c(0),r*.5,e*d(0))),u.push(1);for(let g=0;g<s;g++){let v=2*Math.PI/s*(g+1),m=2*Math.PI/s*(g+.5);g<s-1?(a.push(new E(-i*c(v),-r*.5,i*d(v))),h.push(2*g+2),a.push(new E(-e*c(v),r*.5,e*d(v))),u.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&o.push(new E(-c(m),0,d(m)))}l.push(h),o.push(new E(0,1,0));let p=[];for(let g=0;g<u.length;g++)p.push(u[u.length-g-1]);l.push(p),super({vertices:a,faces:l,axes:o}),this.type=Re.types.CYLINDER,this.radiusTop=e,this.radiusBottom=i,this.height=r,this.numSegments=n}};var Bw=new E;var Uw=new E,Fw=new E,Ow=new E,zw=new E,Vw=new E,Gw=new E,kw=new E,Hw=new E,Ww=new E;var qw=new E,Xw=new jt;var jw=new E,Yw=new jt,Zw=new E,Kw=new E,Jw=new E,$w=new E,Qw=new E,eE=new E,tE=new E,iE=new jt,rE=new E,nE=new at,sE=new jt,cl=class{constructor(){this.equations=[]}solve(e,i){return 0}addEquation(e){e.enabled&&!e.bi.isTrigger&&!e.bj.isTrigger&&this.equations.push(e)}removeEquation(e){let i=this.equations,r=i.indexOf(e);r!==-1&&i.splice(r,1)}removeAllEquations(){this.equations.length=0}},ul=class extends cl{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(e,i){let r=0,n=this.iterations,s=this.tolerance*this.tolerance,a=this.equations,o=a.length,l=i.bodies,h=l.length,u=e,d,c,p,g,v,m;if(o!==0)for(let _=0;_!==h;_++)l[_].updateSolveMassProperties();let f=ux,y=dx,b=cx;f.length=o,y.length=o,b.length=o;for(let _=0;_!==o;_++){let M=a[_];b[_]=0,y[_]=M.computeB(u),f[_]=1/M.computeC()}if(o!==0){for(let T=0;T!==h;T++){let C=l[T],x=C.vlambda,S=C.wlambda;x.set(0,0,0),S.set(0,0,0)}for(r=0;r!==n;r++){g=0;for(let T=0;T!==o;T++){let C=a[T];d=y[T],c=f[T],m=b[T],v=C.computeGWlambda(),p=c*(d-v-C.eps*m),m+p<C.minForce?p=C.minForce-m:m+p>C.maxForce&&(p=C.maxForce-m),b[T]+=p,g+=p>0?p:-p,C.addToWlambda(p)}if(g*g<s)break}for(let T=0;T!==h;T++){let C=l[T],x=C.velocity,S=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),x.vadd(C.vlambda,x),C.wlambda.vmul(C.angularFactor,C.wlambda),S.vadd(C.wlambda,S)}let _=a.length,M=1/u;for(;_--;)a[_].multiplier=b[_]*M}return r}},cx=[],ux=[],dx=[];var aE=je.STATIC;var dl=class{constructor(){this.objects=[],this.type=Object}release(){let e=arguments.length;for(let i=0;i!==e;i++)this.objects.push(i<0||arguments.length<=i?void 0:arguments[i]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(e){let i=this.objects;for(;i.length>e;)i.pop();for(;i.length<e;)i.push(this.constructObject());return this}},pl=class extends dl{constructor(){super(...arguments),this.type=E}constructObject(){return new E}},gt={sphereSphere:Re.types.SPHERE,spherePlane:Re.types.SPHERE|Re.types.PLANE,boxBox:Re.types.BOX|Re.types.BOX,sphereBox:Re.types.SPHERE|Re.types.BOX,planeBox:Re.types.PLANE|Re.types.BOX,convexConvex:Re.types.CONVEXPOLYHEDRON,sphereConvex:Re.types.SPHERE|Re.types.CONVEXPOLYHEDRON,planeConvex:Re.types.PLANE|Re.types.CONVEXPOLYHEDRON,boxConvex:Re.types.BOX|Re.types.CONVEXPOLYHEDRON,sphereHeightfield:Re.types.SPHERE|Re.types.HEIGHTFIELD,boxHeightfield:Re.types.BOX|Re.types.HEIGHTFIELD,convexHeightfield:Re.types.CONVEXPOLYHEDRON|Re.types.HEIGHTFIELD,sphereParticle:Re.types.PARTICLE|Re.types.SPHERE,planeParticle:Re.types.PLANE|Re.types.PARTICLE,boxParticle:Re.types.BOX|Re.types.PARTICLE,convexParticle:Re.types.PARTICLE|Re.types.CONVEXPOLYHEDRON,cylinderCylinder:Re.types.CYLINDER,sphereCylinder:Re.types.SPHERE|Re.types.CYLINDER,planeCylinder:Re.types.PLANE|Re.types.CYLINDER,boxCylinder:Re.types.BOX|Re.types.CYLINDER,convexCylinder:Re.types.CONVEXPOLYHEDRON|Re.types.CYLINDER,heightfieldCylinder:Re.types.HEIGHTFIELD|Re.types.CYLINDER,particleCylinder:Re.types.PARTICLE|Re.types.CYLINDER,sphereTrimesh:Re.types.SPHERE|Re.types.TRIMESH,planeTrimesh:Re.types.PLANE|Re.types.TRIMESH},fl=class{get[gt.sphereSphere](){return this.sphereSphere}get[gt.spherePlane](){return this.spherePlane}get[gt.boxBox](){return this.boxBox}get[gt.sphereBox](){return this.sphereBox}get[gt.planeBox](){return this.planeBox}get[gt.convexConvex](){return this.convexConvex}get[gt.sphereConvex](){return this.sphereConvex}get[gt.planeConvex](){return this.planeConvex}get[gt.boxConvex](){return this.boxConvex}get[gt.sphereHeightfield](){return this.sphereHeightfield}get[gt.boxHeightfield](){return this.boxHeightfield}get[gt.convexHeightfield](){return this.convexHeightfield}get[gt.sphereParticle](){return this.sphereParticle}get[gt.planeParticle](){return this.planeParticle}get[gt.boxParticle](){return this.boxParticle}get[gt.convexParticle](){return this.convexParticle}get[gt.cylinderCylinder](){return this.convexConvex}get[gt.sphereCylinder](){return this.sphereConvex}get[gt.planeCylinder](){return this.planeConvex}get[gt.boxCylinder](){return this.boxConvex}get[gt.convexCylinder](){return this.convexConvex}get[gt.heightfieldCylinder](){return this.heightfieldCylinder}get[gt.particleCylinder](){return this.particleCylinder}get[gt.sphereTrimesh](){return this.sphereTrimesh}get[gt.planeTrimesh](){return this.planeTrimesh}constructor(e){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new pl,this.world=e,this.currentContactMaterial=e.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(e,i,r,n,s,a){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=e,o.bj=i):o=new ll(e,i),o.enabled=e.collisionResponse&&i.collisionResponse&&r.collisionResponse&&n.collisionResponse;let l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);let h=r.material||e.material,u=n.material||i.material;return h&&u&&h.restitution>=0&&u.restitution>=0&&(o.restitution=h.restitution*u.restitution),o.si=s||r,o.sj=a||n,o}createFrictionEquationsFromContact(e,i){let r=e.bi,n=e.bj,s=e.si,a=e.sj,o=this.world,l=this.currentContactMaterial,h=l.friction,u=s.material||r.material,d=a.material||n.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(h=u.friction*d.friction),h>0){let c=h*(o.frictionGravity||o.gravity).length(),p=r.invMass+n.invMass;p>0&&(p=1/p);let g=this.frictionEquationPool,v=g.length?g.pop():new Ks(r,n,c*p),m=g.length?g.pop():new Ks(r,n,c*p);return v.bi=m.bi=r,v.bj=m.bj=n,v.minForce=m.minForce=-c*p,v.maxForce=m.maxForce=c*p,v.ri.copy(e.ri),v.rj.copy(e.rj),m.ri.copy(e.ri),m.rj.copy(e.rj),e.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),v.enabled=m.enabled=e.enabled,i.push(v,m),!0}return!1}createFrictionFromAverage(e){let i=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(i,this.frictionResult)||e===1)return;let r=this.frictionResult[this.frictionResult.length-2],n=this.frictionResult[this.frictionResult.length-1];mr.setZero(),an.setZero(),on.setZero();let s=i.bi;i.bj;for(let o=0;o!==e;o++)i=this.result[this.result.length-1-o],i.bi!==s?(mr.vadd(i.ni,mr),an.vadd(i.ri,an),on.vadd(i.rj,on)):(mr.vsub(i.ni,mr),an.vadd(i.rj,an),on.vadd(i.ri,on));let a=1/e;an.scale(a,r.ri),on.scale(a,r.rj),n.ri.copy(r.ri),n.rj.copy(r.rj),mr.normalize(),mr.tangents(r.t,n.t)}getContacts(e,i,r,n,s,a,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=n,this.frictionResult=a;let l=mx,h=gx,u=px,d=fx;for(let c=0,p=e.length;c!==p;c++){let g=e[c],v=i[c],m=null;g.material&&v.material&&(m=r.getContactMaterial(g.material,v.material)||null);let f=g.type&je.KINEMATIC&&v.type&je.STATIC||g.type&je.STATIC&&v.type&je.KINEMATIC||g.type&je.KINEMATIC&&v.type&je.KINEMATIC;for(let y=0;y<g.shapes.length;y++){g.quaternion.mult(g.shapeOrientations[y],l),g.quaternion.vmult(g.shapeOffsets[y],u),u.vadd(g.position,u);let b=g.shapes[y];for(let _=0;_<v.shapes.length;_++){v.quaternion.mult(v.shapeOrientations[_],h),v.quaternion.vmult(v.shapeOffsets[_],d),d.vadd(v.position,d);let M=v.shapes[_];if(!(b.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&b.collisionFilterGroup)||u.distanceTo(d)>b.boundingSphereRadius+M.boundingSphereRadius)continue;let T=null;b.material&&M.material&&(T=r.getContactMaterial(b.material,M.material)||null),this.currentContactMaterial=T||m||r.defaultContactMaterial;let C=b.type|M.type,x=this[C];if(x){let S=!1;b.type<M.type?S=x.call(this,b,M,u,d,l,h,g,v,b,M,f):S=x.call(this,M,b,d,u,h,l,v,g,b,M,f),S&&f&&(r.shapeOverlapKeeper.set(b.id,M.id),r.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(e,i,r,n,s,a,o,l,h,u,d){if(d)return r.distanceSquared(n)<(e.radius+i.radius)**2;let c=this.createContactEquation(o,l,e,i,h,u);n.vsub(r,c.ni),c.ni.normalize(),c.ri.copy(c.ni),c.rj.copy(c.ni),c.ri.scale(e.radius,c.ri),c.rj.scale(-i.radius,c.rj),c.ri.vadd(r,c.ri),c.ri.vsub(o.position,c.ri),c.rj.vadd(n,c.rj),c.rj.vsub(l.position,c.rj),this.result.push(c),this.createFrictionEquationsFromContact(c,this.frictionResult)}spherePlane(e,i,r,n,s,a,o,l,h,u,d){let c=this.createContactEquation(o,l,e,i,h,u);if(c.ni.set(0,0,1),a.vmult(c.ni,c.ni),c.ni.negate(c.ni),c.ni.normalize(),c.ni.scale(e.radius,c.ri),r.vsub(n,Ws),c.ni.scale(c.ni.dot(Ws),wu),Ws.vsub(wu,c.rj),-Ws.dot(c.ni)<=e.radius){if(d)return!0;let p=c.ri,g=c.rj;p.vadd(r,p),p.vsub(o.position,p),g.vadd(n,g),g.vsub(l.position,g),this.result.push(c),this.createFrictionEquationsFromContact(c,this.frictionResult)}}boxBox(e,i,r,n,s,a,o,l,h,u,d){return e.convexPolyhedronRepresentation.material=e.material,i.convexPolyhedronRepresentation.material=i.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,i.convexPolyhedronRepresentation.collisionResponse=i.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,i.convexPolyhedronRepresentation,r,n,s,a,o,l,e,i,d)}sphereBox(e,i,r,n,s,a,o,l,h,u,d){let c=this.v3pool,p=kx;r.vsub(n,qs),i.getSideNormals(p,a);let g=e.radius,v=!1,m=Wx,f=qx,y=Xx,b=null,_=0,M=0,T=0,C=null;for(let z=0,H=p.length;z!==H&&v===!1;z++){let $=zx;$.copy(p[z]);let W=$.length();$.normalize();let Z=qs.dot($);if(Z<W+g&&Z>0){let K=Vx,oe=Gx;K.copy(p[(z+1)%3]),oe.copy(p[(z+2)%3]);let Se=K.length(),rt=oe.length();K.normalize(),oe.normalize();let ze=qs.dot(K),J=qs.dot(oe);if(ze<Se&&ze>-Se&&J<rt&&J>-rt){let ne=Math.abs(Z-W-g);if((C===null||ne<C)&&(C=ne,M=ze,T=J,b=W,m.copy($),f.copy(K),y.copy(oe),_++,d))return!0}}}if(_){v=!0;let z=this.createContactEquation(o,l,e,i,h,u);m.scale(-g,z.ri),z.ni.copy(m),z.ni.negate(z.ni),m.scale(b,m),f.scale(M,f),m.vadd(f,m),y.scale(T,y),m.vadd(y,z.rj),z.ri.vadd(r,z.ri),z.ri.vsub(o.position,z.ri),z.rj.vadd(n,z.rj),z.rj.vsub(l.position,z.rj),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}let x=c.get(),S=Hx;for(let z=0;z!==2&&!v;z++)for(let H=0;H!==2&&!v;H++)for(let $=0;$!==2&&!v;$++)if(x.set(0,0,0),z?x.vadd(p[0],x):x.vsub(p[0],x),H?x.vadd(p[1],x):x.vsub(p[1],x),$?x.vadd(p[2],x):x.vsub(p[2],x),n.vadd(x,S),S.vsub(r,S),S.lengthSquared()<g*g){if(d)return!0;v=!0;let W=this.createContactEquation(o,l,e,i,h,u);W.ri.copy(S),W.ri.normalize(),W.ni.copy(W.ri),W.ri.scale(g,W.ri),W.rj.copy(x),W.ri.vadd(r,W.ri),W.ri.vsub(o.position,W.ri),W.rj.vadd(n,W.rj),W.rj.vsub(l.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}c.release(x),x=null;let N=c.get(),P=c.get(),B=c.get(),F=c.get(),I=c.get(),D=p.length;for(let z=0;z!==D&&!v;z++)for(let H=0;H!==D&&!v;H++)if(z%3!==H%3){p[H].cross(p[z],N),N.normalize(),p[z].vadd(p[H],P),B.copy(r),B.vsub(P,B),B.vsub(n,B);let $=B.dot(N);N.scale($,F);let W=0;for(;W===z%3||W===H%3;)W++;I.copy(r),I.vsub(F,I),I.vsub(P,I),I.vsub(n,I);let Z=Math.abs($),K=I.length();if(Z<p[W].length()&&K<g){if(d)return!0;v=!0;let oe=this.createContactEquation(o,l,e,i,h,u);P.vadd(F,oe.rj),oe.rj.copy(oe.rj),I.negate(oe.ni),oe.ni.normalize(),oe.ri.copy(oe.rj),oe.ri.vadd(n,oe.ri),oe.ri.vsub(r,oe.ri),oe.ri.normalize(),oe.ri.scale(g,oe.ri),oe.ri.vadd(r,oe.ri),oe.ri.vsub(o.position,oe.ri),oe.rj.vadd(n,oe.rj),oe.rj.vsub(l.position,oe.rj),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult)}}c.release(N,P,B,F,I)}planeBox(e,i,r,n,s,a,o,l,h,u,d){return i.convexPolyhedronRepresentation.material=i.material,i.convexPolyhedronRepresentation.collisionResponse=i.collisionResponse,i.convexPolyhedronRepresentation.id=i.id,this.planeConvex(e,i.convexPolyhedronRepresentation,r,n,s,a,o,l,e,i,d)}convexConvex(e,i,r,n,s,a,o,l,h,u,d,c,p){let g=o1;if(!(r.distanceTo(n)>e.boundingSphereRadius+i.boundingSphereRadius)&&e.findSeparatingAxis(i,r,s,n,a,g,c,p)){let v=[],m=l1;e.clipAgainstHull(r,s,i,n,a,g,-100,100,v);let f=0;for(let y=0;y!==v.length;y++){if(d)return!0;let b=this.createContactEquation(o,l,e,i,h,u),_=b.ri,M=b.rj;g.negate(b.ni),v[y].normal.negate(m),m.scale(v[y].depth,m),v[y].point.vadd(m,_),M.copy(v[y].point),_.vsub(r,_),M.vsub(n,M),_.vadd(r,_),_.vsub(o.position,_),M.vadd(n,M),M.vsub(l.position,M),this.result.push(b),f++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}this.enableFrictionReduction&&f&&this.createFrictionFromAverage(f)}}sphereConvex(e,i,r,n,s,a,o,l,h,u,d){let c=this.v3pool;r.vsub(n,jx);let p=i.faceNormals,g=i.faces,v=i.vertices,m=e.radius,f=!1;for(let y=0;y!==v.length;y++){let b=v[y],_=Jx;a.vmult(b,_),n.vadd(_,_);let M=Kx;if(_.vsub(r,M),M.lengthSquared()<m*m){if(d)return!0;f=!0;let T=this.createContactEquation(o,l,e,i,h,u);T.ri.copy(M),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(m,T.ri),_.vsub(n,T.rj),T.ri.vadd(r,T.ri),T.ri.vsub(o.position,T.ri),T.rj.vadd(n,T.rj),T.rj.vsub(l.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let y=0,b=g.length;y!==b&&f===!1;y++){let _=p[y],M=g[y],T=$x;a.vmult(_,T);let C=Qx;a.vmult(v[M[0]],C),C.vadd(n,C);let x=e1;T.scale(-m,x),r.vadd(x,x);let S=t1;x.vsub(C,S);let N=S.dot(T),P=i1;if(r.vsub(C,P),N<0&&P.dot(T)>0){let B=[];for(let F=0,I=M.length;F!==I;F++){let D=c.get();a.vmult(v[M[F]],D),n.vadd(D,D),B.push(D)}if(Ox(B,T,r)){if(d)return!0;f=!0;let F=this.createContactEquation(o,l,e,i,h,u);T.scale(-m,F.ri),T.negate(F.ni);let I=c.get();T.scale(-N,I);let D=c.get();T.scale(-m,D),r.vsub(n,F.rj),F.rj.vadd(D,F.rj),F.rj.vadd(I,F.rj),F.rj.vadd(n,F.rj),F.rj.vsub(l.position,F.rj),F.ri.vadd(r,F.ri),F.ri.vsub(o.position,F.ri),c.release(I),c.release(D),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult);for(let z=0,H=B.length;z!==H;z++)c.release(B[z]);return}else for(let F=0;F!==M.length;F++){let I=c.get(),D=c.get();a.vmult(v[M[(F+1)%M.length]],I),a.vmult(v[M[(F+2)%M.length]],D),n.vadd(I,I),n.vadd(D,D);let z=Yx;D.vsub(I,z);let H=Zx;z.unit(H);let $=c.get(),W=c.get();r.vsub(I,W);let Z=W.dot(H);H.scale(Z,$),$.vadd(I,$);let K=c.get();if($.vsub(r,K),Z>0&&Z*Z<z.lengthSquared()&&K.lengthSquared()<m*m){if(d)return!0;let oe=this.createContactEquation(o,l,e,i,h,u);$.vsub(n,oe.rj),$.vsub(r,oe.ni),oe.ni.normalize(),oe.ni.scale(m,oe.ri),oe.rj.vadd(n,oe.rj),oe.rj.vsub(l.position,oe.rj),oe.ri.vadd(r,oe.ri),oe.ri.vsub(o.position,oe.ri),this.result.push(oe),this.createFrictionEquationsFromContact(oe,this.frictionResult);for(let Se=0,rt=B.length;Se!==rt;Se++)c.release(B[Se]);c.release(I),c.release(D),c.release($),c.release(K),c.release(W);return}c.release(I),c.release(D),c.release($),c.release(K),c.release(W)}for(let F=0,I=B.length;F!==I;F++)c.release(B[F])}}}planeConvex(e,i,r,n,s,a,o,l,h,u,d){let c=r1,p=n1;p.set(0,0,1),s.vmult(p,p);let g=0,v=s1;for(let m=0;m!==i.vertices.length;m++)if(c.copy(i.vertices[m]),a.vmult(c,c),n.vadd(c,c),c.vsub(r,v),p.dot(v)<=0){if(d)return!0;let y=this.createContactEquation(o,l,e,i,h,u),b=a1;p.scale(p.dot(v),b),c.vsub(b,b),b.vsub(r,y.ri),y.ni.copy(p),c.vsub(n,y.rj),y.ri.vadd(r,y.ri),y.ri.vsub(o.position,y.ri),y.rj.vadd(n,y.rj),y.rj.vsub(l.position,y.rj),this.result.push(y),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(e,i,r,n,s,a,o,l,h,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(e.convexPolyhedronRepresentation,i,r,n,s,a,o,l,e,i,d)}sphereHeightfield(e,i,r,n,s,a,o,l,h,u,d){let c=i.data,p=e.radius,g=i.elementSize,v=x1,m=y1;at.pointToLocalFrame(n,a,r,m);let f=Math.floor((m.x-p)/g)-1,y=Math.ceil((m.x+p)/g)+1,b=Math.floor((m.y-p)/g)-1,_=Math.ceil((m.y+p)/g)+1;if(y<0||_<0||f>c.length||b>c[0].length)return;f<0&&(f=0),y<0&&(y=0),b<0&&(b=0),_<0&&(_=0),f>=c.length&&(f=c.length-1),y>=c.length&&(y=c.length-1),_>=c[0].length&&(_=c[0].length-1),b>=c[0].length&&(b=c[0].length-1);let M=[];i.getRectMinMax(f,b,y,_,M);let T=M[0],C=M[1];if(m.z-p>C||m.z+p<T)return;let x=this.result;for(let S=f;S<y;S++)for(let N=b;N<_;N++){let P=x.length,B=!1;if(i.getConvexTrianglePillar(S,N,!1),at.pointToWorldFrame(n,a,i.pillarOffset,v),r.distanceTo(v)<i.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.sphereConvex(e,i.pillarConvex,r,v,s,a,o,l,e,i,d)),d&&B||(i.getConvexTrianglePillar(S,N,!0),at.pointToWorldFrame(n,a,i.pillarOffset,v),r.distanceTo(v)<i.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(B=this.sphereConvex(e,i.pillarConvex,r,v,s,a,o,l,e,i,d)),d&&B))return!0;if(x.length-P>2)return}}boxHeightfield(e,i,r,n,s,a,o,l,h,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexHeightfield(e.convexPolyhedronRepresentation,i,r,n,s,a,o,l,e,i,d)}convexHeightfield(e,i,r,n,s,a,o,l,h,u,d){let c=i.data,p=i.elementSize,g=e.boundingSphereRadius,v=v1,m=_1,f=g1;at.pointToLocalFrame(n,a,r,f);let y=Math.floor((f.x-g)/p)-1,b=Math.ceil((f.x+g)/p)+1,_=Math.floor((f.y-g)/p)-1,M=Math.ceil((f.y+g)/p)+1;if(b<0||M<0||y>c.length||_>c[0].length)return;y<0&&(y=0),b<0&&(b=0),_<0&&(_=0),M<0&&(M=0),y>=c.length&&(y=c.length-1),b>=c.length&&(b=c.length-1),M>=c[0].length&&(M=c[0].length-1),_>=c[0].length&&(_=c[0].length-1);let T=[];i.getRectMinMax(y,_,b,M,T);let C=T[0],x=T[1];if(!(f.z-g>x||f.z+g<C))for(let S=y;S<b;S++)for(let N=_;N<M;N++){let P=!1;if(i.getConvexTrianglePillar(S,N,!1),at.pointToWorldFrame(n,a,i.pillarOffset,v),r.distanceTo(v)<i.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(P=this.convexConvex(e,i.pillarConvex,r,v,s,a,o,l,null,null,d,m,null)),d&&P||(i.getConvexTrianglePillar(S,N,!0),at.pointToWorldFrame(n,a,i.pillarOffset,v),r.distanceTo(v)<i.pillarConvex.boundingSphereRadius+e.boundingSphereRadius&&(P=this.convexConvex(e,i.pillarConvex,r,v,s,a,o,l,null,null,d,m,null)),d&&P))return!0}}sphereParticle(e,i,r,n,s,a,o,l,h,u,d){let c=d1;if(c.set(0,0,1),n.vsub(r,c),c.lengthSquared()<=e.radius*e.radius){if(d)return!0;let g=this.createContactEquation(l,o,i,e,h,u);c.normalize(),g.rj.copy(c),g.rj.scale(e.radius,g.rj),g.ni.copy(c),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(e,i,r,n,s,a,o,l,h,u,d){let c=h1;c.set(0,0,1),o.quaternion.vmult(c,c);let p=c1;if(n.vsub(o.position,p),c.dot(p)<=0){if(d)return!0;let v=this.createContactEquation(l,o,i,e,h,u);v.ni.copy(c),v.ni.negate(v.ni),v.ri.set(0,0,0);let m=u1;c.scale(c.dot(n),m),n.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(e,i,r,n,s,a,o,l,h,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexParticle(e.convexPolyhedronRepresentation,i,r,n,s,a,o,l,e,i,d)}convexParticle(e,i,r,n,s,a,o,l,h,u,d){let c=-1,p=f1,g=m1,v=null,m=p1;if(m.copy(n),m.vsub(r,m),s.conjugate(Eu),Eu.vmult(m,m),e.pointIsInside(m)){e.worldVerticesNeedsUpdate&&e.computeWorldVertices(r,s),e.worldFaceNormalsNeedsUpdate&&e.computeWorldFaceNormals(s);for(let f=0,y=e.faces.length;f!==y;f++){let b=[e.worldVertices[e.faces[f][0]]],_=e.worldFaceNormals[f];n.vsub(b[0],Tu);let M=-_.dot(Tu);if(v===null||Math.abs(M)<Math.abs(v)){if(d)return!0;v=M,c=f,p.copy(_)}}if(c!==-1){let f=this.createContactEquation(l,o,i,e,h,u);p.scale(v,g),g.vadd(n,g),g.vsub(r,g),f.rj.copy(g),p.negate(f.ni),f.ri.set(0,0,0);let y=f.ri,b=f.rj;y.vadd(n,y),y.vsub(l.position,y),b.vadd(r,b),b.vsub(o.position,b),this.result.push(f),this.createFrictionEquationsFromContact(f,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(e,i,r,n,s,a,o,l,h,u,d){return this.convexHeightfield(i,e,n,r,a,s,l,o,h,u,d)}particleCylinder(e,i,r,n,s,a,o,l,h,u,d){return this.convexParticle(i,e,n,r,a,s,l,o,h,u,d)}sphereTrimesh(e,i,r,n,s,a,o,l,h,u,d){let c=wx,p=Ex,g=Tx,v=Ax,m=Cx,f=Rx,y=Nx,b=Sx,_=bx,M=Dx;at.pointToLocalFrame(n,a,r,m);let T=e.radius;y.lowerBound.set(m.x-T,m.y-T,m.z-T),y.upperBound.set(m.x+T,m.y+T,m.z+T),i.getTrianglesInAABB(y,M);let C=Mx,x=e.radius*e.radius;for(let F=0;F<M.length;F++)for(let I=0;I<3;I++)if(i.getVertex(i.indices[M[F]*3+I],C),C.vsub(m,_),_.lengthSquared()<=x){if(b.copy(C),at.pointToWorldFrame(n,a,b,C),C.vsub(r,_),d)return!0;let D=this.createContactEquation(o,l,e,i,h,u);D.ni.copy(_),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(e.radius,D.ri),D.ri.vadd(r,D.ri),D.ri.vsub(o.position,D.ri),D.rj.copy(C),D.rj.vsub(l.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let F=0;F<M.length;F++)for(let I=0;I<3;I++){i.getVertex(i.indices[M[F]*3+I],c),i.getVertex(i.indices[M[F]*3+(I+1)%3],p),p.vsub(c,g),m.vsub(p,f);let D=f.dot(g);m.vsub(c,f);let z=f.dot(g);if(z>0&&D<0&&(m.vsub(c,f),v.copy(g),v.normalize(),z=f.dot(v),v.scale(z,f),f.vadd(c,f),f.distanceTo(m)<e.radius)){if(d)return!0;let $=this.createContactEquation(o,l,e,i,h,u);f.vsub(m,$.ni),$.ni.normalize(),$.ni.scale(e.radius,$.ri),$.ri.vadd(r,$.ri),$.ri.vsub(o.position,$.ri),at.pointToWorldFrame(n,a,f,f),f.vsub(l.position,$.rj),at.vectorToWorldFrame(a,$.ni,$.ni),at.vectorToWorldFrame(a,$.ri,$.ri),this.result.push($),this.createFrictionEquationsFromContact($,this.frictionResult)}}let S=Ix,N=Px,P=Lx,B=xx;for(let F=0,I=M.length;F!==I;F++){i.getTriangleVertices(M[F],S,N,P),i.getNormal(M[F],B),m.vsub(S,f);let D=f.dot(B);if(B.scale(D,f),m.vsub(f,f),D=f.distanceTo(m),Kt.pointInTriangle(f,S,N,P)&&D<e.radius){if(d)return!0;let z=this.createContactEquation(o,l,e,i,h,u);f.vsub(m,z.ni),z.ni.normalize(),z.ni.scale(e.radius,z.ri),z.ri.vadd(r,z.ri),z.ri.vsub(o.position,z.ri),at.pointToWorldFrame(n,a,f,f),f.vsub(l.position,z.rj),at.vectorToWorldFrame(a,z.ni,z.ni),at.vectorToWorldFrame(a,z.ri,z.ri),this.result.push(z),this.createFrictionEquationsFromContact(z,this.frictionResult)}}M.length=0}planeTrimesh(e,i,r,n,s,a,o,l,h,u,d){let c=new E,p=vx;p.set(0,0,1),s.vmult(p,p);for(let g=0;g<i.vertices.length/3;g++){i.getVertex(g,c);let v=new E;v.copy(c),at.pointToWorldFrame(n,a,v,c);let m=_x;if(c.vsub(r,m),p.dot(m)<=0){if(d)return!0;let y=this.createContactEquation(o,l,e,i,h,u);y.ni.copy(p);let b=yx;p.scale(m.dot(p),b),c.vsub(b,b),y.ri.copy(b),y.ri.vsub(o.position,y.ri),y.rj.copy(c),y.rj.vsub(l.position,y.rj),this.result.push(y),this.createFrictionEquationsFromContact(y,this.frictionResult)}}}},mr=new E,an=new E,on=new E,px=new E,fx=new E,mx=new Rt,gx=new Rt,vx=new E,_x=new E,yx=new E,xx=new E,bx=new E;new E;var Mx=new E,Sx=new E,wx=new E,Ex=new E,Tx=new E,Ax=new E,Cx=new E,Rx=new E,Ix=new E,Px=new E,Lx=new E,Nx=new jt,Dx=[],Ws=new E,wu=new E,Bx=new E,Ux=new E,Fx=new E;function Ox(t,e,i){let r=null,n=t.length;for(let s=0;s!==n;s++){let a=t[s],o=Bx;t[(s+1)%n].vsub(a,o);let l=Ux;o.cross(e,l);let h=Fx;i.vsub(a,h);let u=l.dot(h);if(r===null||u>0&&r===!0||u<=0&&r===!1){r===null&&(r=u>0);continue}else return!1}return!0}var qs=new E,zx=new E,Vx=new E,Gx=new E,kx=[new E,new E,new E,new E,new E,new E],Hx=new E,Wx=new E,qx=new E,Xx=new E,jx=new E,Yx=new E,Zx=new E,Kx=new E,Jx=new E,$x=new E,Qx=new E,e1=new E,t1=new E,i1=new E;new E;new E;var r1=new E,n1=new E,s1=new E,a1=new E,o1=new E,l1=new E,h1=new E,c1=new E,u1=new E,d1=new E,Eu=new Rt,p1=new E;new E;var f1=new E,Tu=new E,m1=new E,g1=new E,v1=new E,_1=[0],y1=new E,x1=new E,$s=class{constructor(){this.current=[],this.previous=[]}getKey(e,i){if(i<e){let r=i;i=e,e=r}return e<<16|i}set(e,i){let r=this.getKey(e,i),n=this.current,s=0;for(;r>n[s];)s++;if(r!==n[s]){for(let a=n.length-1;a>=s;a--)n[a+1]=n[a];n[s]=r}}tick(){let e=this.current;this.current=this.previous,this.previous=e,this.current.length=0}getDiff(e,i){let r=this.current,n=this.previous,s=r.length,a=n.length,o=0;for(let l=0;l<s;l++){let h=!1,u=r[l];for(;u>n[o];)o++;h=u===n[o],h||Au(e,u)}o=0;for(let l=0;l<a;l++){let h=!1,u=n[l];for(;u>r[o];)o++;h=r[o]===u,h||Au(i,u)}}};function Au(t,e){t.push((e&4294901760)>>16,e&65535)}var rl=(t,e)=>t<e?`${t}-${e}`:`${e}-${t}`,ml=class{constructor(){this.data={keys:[]}}get(e,i){let r=rl(e,i);return this.data[r]}set(e,i,r){let n=rl(e,i);this.get(e,i)||this.data.keys.push(n),this.data[n]=r}delete(e,i){let r=rl(e,i),n=this.data.keys.indexOf(r);n!==-1&&this.data.keys.splice(n,1),delete this.data[r]}reset(){let e=this.data,i=e.keys;for(;i.length>0;){let r=i.pop();delete e[r]}}},Qs=class extends js{constructor(e){e===void 0&&(e={}),super(),this.dt=-1,this.allowSleep=!!e.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=e.quatNormalizeSkip!==void 0?e.quatNormalizeSkip:0,this.quatNormalizeFast=e.quatNormalizeFast!==void 0?e.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,e.gravity&&this.gravity.copy(e.gravity),e.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(e.frictionGravity)),this.broadphase=e.broadphase!==void 0?e.broadphase:new al,this.bodies=[],this.hasActiveBodies=!1,this.solver=e.solver!==void 0?e.solver:new ul,this.constraints=[],this.narrowphase=new fl(this),this.collisionMatrix=new Xs,this.collisionMatrixPrevious=new Xs,this.bodyOverlapKeeper=new $s,this.shapeOverlapKeeper=new $s,this.contactmaterials=[],this.contactMaterialTable=new ml,this.defaultMaterial=new _r("default"),this.defaultContactMaterial=new ln(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(e,i){return this.contactMaterialTable.get(e.id,i.id)}collisionMatrixTick(){let e=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=e,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(e){this.constraints.push(e)}removeConstraint(e){let i=this.constraints.indexOf(e);i!==-1&&this.constraints.splice(i,1)}rayTest(e,i,r){r instanceof vr?this.raycastClosest(e,i,{skipBackfaces:!0},r):this.raycastAll(e,i,{skipBackfaces:!0},r)}raycastAll(e,i,r,n){return r===void 0&&(r={}),r.mode=Kt.ALL,r.from=e,r.to=i,r.callback=n,nl.intersectWorld(this,r)}raycastAny(e,i,r,n){return r===void 0&&(r={}),r.mode=Kt.ANY,r.from=e,r.to=i,r.result=n,nl.intersectWorld(this,r)}raycastClosest(e,i,r,n){return r===void 0&&(r={}),r.mode=Kt.CLOSEST,r.from=e,r.to=i,r.result=n,nl.intersectWorld(this,r)}addBody(e){this.bodies.includes(e)||(e.index=this.bodies.length,this.bodies.push(e),e.world=this,e.initPosition.copy(e.position),e.initVelocity.copy(e.velocity),e.timeLastSleepy=this.time,e instanceof je&&(e.initAngularVelocity.copy(e.angularVelocity),e.initQuaternion.copy(e.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=e,this.idToBodyMap[e.id]=e,this.dispatchEvent(this.addBodyEvent))}removeBody(e){e.world=null;let i=this.bodies.length-1,r=this.bodies,n=r.indexOf(e);if(n!==-1){r.splice(n,1);for(let s=0;s!==r.length;s++)r[s].index=s;this.collisionMatrix.setNumObjects(i),this.removeBodyEvent.body=e,delete this.idToBodyMap[e.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(e){return this.idToBodyMap[e]}getShapeById(e){let i=this.bodies;for(let r=0;r<i.length;r++){let n=i[r].shapes;for(let s=0;s<n.length;s++){let a=n[s];if(a.id===e)return a}}return null}addContactMaterial(e){this.contactmaterials.push(e),this.contactMaterialTable.set(e.materials[0].id,e.materials[1].id,e)}removeContactMaterial(e){let i=this.contactmaterials.indexOf(e);i!==-1&&(this.contactmaterials.splice(i,1),this.contactMaterialTable.delete(e.materials[0].id,e.materials[1].id))}fixedStep(e,i){e===void 0&&(e=1/60),i===void 0&&(i=10);let r=Ct.now()/1e3;if(!this.lastCallTime)this.step(e,void 0,i);else{let n=r-this.lastCallTime;this.step(e,n,i)}this.lastCallTime=r}step(e,i,r){if(r===void 0&&(r=10),i===void 0)this.internalStep(e),this.time+=e;else{this.accumulator+=i;let n=Ct.now(),s=0;for(;this.accumulator>=e&&s<r&&(this.internalStep(e),this.accumulator-=e,s++,!(Ct.now()-n>e*1e3)););this.accumulator=this.accumulator%e;let a=this.accumulator/e;for(let o=0;o!==this.bodies.length;o++){let l=this.bodies[o];l.previousPosition.lerp(l.position,a,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,a,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=i}}internalStep(e){this.dt=e;let i=this.contacts,r=E1,n=T1,s=this.bodies.length,a=this.bodies,o=this.solver,l=this.gravity,h=this.doProfiling,u=this.profile,d=je.DYNAMIC,c=-1/0,p=this.constraints,g=w1;l.length();let v=l.x,m=l.y,f=l.z,y=0;for(h&&(c=Ct.now()),y=0;y!==s;y++){let F=a[y];if(F.type===d){let I=F.force,D=F.mass;I.x+=D*v,I.y+=D*m,I.z+=D*f}}for(let F=0,I=this.subsystems.length;F!==I;F++)this.subsystems[F].update();h&&(c=Ct.now()),r.length=0,n.length=0,this.broadphase.collisionPairs(this,r,n),h&&(u.broadphase=Ct.now()-c);let b=p.length;for(y=0;y!==b;y++){let F=p[y];if(!F.collideConnected)for(let I=r.length-1;I>=0;I-=1)(F.bodyA===r[I]&&F.bodyB===n[I]||F.bodyB===r[I]&&F.bodyA===n[I])&&(r.splice(I,1),n.splice(I,1))}this.collisionMatrixTick(),h&&(c=Ct.now());let _=S1,M=i.length;for(y=0;y!==M;y++)_.push(i[y]);i.length=0;let T=this.frictionEquations.length;for(y=0;y!==T;y++)g.push(this.frictionEquations[y]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(r,n,this,i,_,this.frictionEquations,g),h&&(u.narrowphase=Ct.now()-c),h&&(c=Ct.now()),y=0;y<this.frictionEquations.length;y++)o.addEquation(this.frictionEquations[y]);let C=i.length;for(let F=0;F!==C;F++){let I=i[F],D=I.bi,z=I.bj,H=I.si,$=I.sj,W;if(D.material&&z.material?W=this.getContactMaterial(D.material,z.material)||this.defaultContactMaterial:W=this.defaultContactMaterial,W.friction,D.material&&z.material&&(D.material.friction>=0&&z.material.friction>=0&&D.material.friction*z.material.friction,D.material.restitution>=0&&z.material.restitution>=0&&(I.restitution=D.material.restitution*z.material.restitution)),o.addEquation(I),D.allowSleep&&D.type===je.DYNAMIC&&D.sleepState===je.SLEEPING&&z.sleepState===je.AWAKE&&z.type!==je.STATIC){let Z=z.velocity.lengthSquared()+z.angularVelocity.lengthSquared(),K=z.sleepSpeedLimit**2;Z>=K*2&&(D.wakeUpAfterNarrowphase=!0)}if(z.allowSleep&&z.type===je.DYNAMIC&&z.sleepState===je.SLEEPING&&D.sleepState===je.AWAKE&&D.type!==je.STATIC){let Z=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),K=D.sleepSpeedLimit**2;Z>=K*2&&(z.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,z,!0),this.collisionMatrixPrevious.get(D,z)||(Vn.body=z,Vn.contact=I,D.dispatchEvent(Vn),Vn.body=D,z.dispatchEvent(Vn)),this.bodyOverlapKeeper.set(D.id,z.id),this.shapeOverlapKeeper.set(H.id,$.id)}for(this.emitContactEvents(),h&&(u.makeContactConstraints=Ct.now()-c,c=Ct.now()),y=0;y!==s;y++){let F=a[y];F.wakeUpAfterNarrowphase&&(F.wakeUp(),F.wakeUpAfterNarrowphase=!1)}for(b=p.length,y=0;y!==b;y++){let F=p[y];F.update();for(let I=0,D=F.equations.length;I!==D;I++){let z=F.equations[I];o.addEquation(z)}}o.solve(e,this),h&&(u.solve=Ct.now()-c),o.removeAllEquations();let x=Math.pow;for(y=0;y!==s;y++){let F=a[y];if(F.type&d){let I=x(1-F.linearDamping,e),D=F.velocity;D.scale(I,D);let z=F.angularVelocity;if(z){let H=x(1-F.angularDamping,e);z.scale(H,z)}}}this.dispatchEvent(M1),h&&(c=Ct.now());let N=this.stepnumber%(this.quatNormalizeSkip+1)===0,P=this.quatNormalizeFast;for(y=0;y!==s;y++)a[y].integrate(e,N,P);this.clearForces(),this.broadphase.dirty=!0,h&&(u.integrate=Ct.now()-c),this.stepnumber+=1,this.dispatchEvent(b1);let B=!0;if(this.allowSleep)for(B=!1,y=0;y!==s;y++){let F=a[y];F.sleepTick(this.time),F.sleepState!==je.SLEEPING&&(B=!0)}this.hasActiveBodies=B}emitContactEvents(){let e=this.hasAnyEventListener("beginContact"),i=this.hasAnyEventListener("endContact");if((e||i)&&this.bodyOverlapKeeper.getDiff(Bi,Ui),e){for(let s=0,a=Bi.length;s<a;s+=2)Gn.bodyA=this.getBodyById(Bi[s]),Gn.bodyB=this.getBodyById(Bi[s+1]),this.dispatchEvent(Gn);Gn.bodyA=Gn.bodyB=null}if(i){for(let s=0,a=Ui.length;s<a;s+=2)kn.bodyA=this.getBodyById(Ui[s]),kn.bodyB=this.getBodyById(Ui[s+1]),this.dispatchEvent(kn);kn.bodyA=kn.bodyB=null}Bi.length=Ui.length=0;let r=this.hasAnyEventListener("beginShapeContact"),n=this.hasAnyEventListener("endShapeContact");if((r||n)&&this.shapeOverlapKeeper.getDiff(Bi,Ui),r){for(let s=0,a=Bi.length;s<a;s+=2){let o=this.getShapeById(Bi[s]),l=this.getShapeById(Bi[s+1]);Fi.shapeA=o,Fi.shapeB=l,o&&(Fi.bodyA=o.body),l&&(Fi.bodyB=l.body),this.dispatchEvent(Fi)}Fi.bodyA=Fi.bodyB=Fi.shapeA=Fi.shapeB=null}if(n){for(let s=0,a=Ui.length;s<a;s+=2){let o=this.getShapeById(Ui[s]),l=this.getShapeById(Ui[s+1]);Oi.shapeA=o,Oi.shapeB=l,o&&(Oi.bodyA=o.body),l&&(Oi.bodyB=l.body),this.dispatchEvent(Oi)}Oi.bodyA=Oi.bodyB=Oi.shapeA=Oi.shapeB=null}}clearForces(){let e=this.bodies,i=e.length;for(let r=0;r!==i;r++){let n=e[r];n.force,n.torque,n.force.set(0,0,0),n.torque.set(0,0,0)}}};new jt;var nl=new Kt,Ct=globalThis.performance||{};if(!Ct.now){let t=Date.now();Ct.timing&&Ct.timing.navigationStart&&(t=Ct.timing.navigationStart),Ct.now=()=>Date.now()-t}new E;var b1={type:"postStep"},M1={type:"preStep"},Vn={type:je.COLLIDE_EVENT_NAME,body:null,contact:null},S1=[],w1=[],E1=[],T1=[],Bi=[],Ui=[],Gn={type:"beginContact",bodyA:null,bodyB:null},kn={type:"endContact",bodyA:null,bodyB:null},Fi={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},Oi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};var C1=14272165,R1="#0b0c10",Bu=2241535;function I1(t,{w:e=1024,h:i=1024,bg:r=null,color:n=R1,font:s="600 180px Geist, sans-serif",align:a="center",sub:o=null}={}){let l=document.createElement("canvas");l.width=e,l.height=i;let h=l.getContext("2d");r&&(h.fillStyle=r,h.fillRect(0,0,e,i)),h.fillStyle=n,h.textAlign=a,h.textBaseline="middle",h.font=s,t.forEach((d,c)=>h.fillText(d,a==="center"?e/2:40,i/2+(c-(t.length-1)/2)*parseInt(s.match(/(\d+)px/)[1],10)*1.05)),o&&(h.font="500 46px Geist Mono, monospace",h.fillText(o,a==="center"?e/2:40,i*.86));let u=new Ho(l);return u.colorSpace=Pt,u.anisotropy=4,u}function P1(t){let i=document.createElement("canvas");i.width=i.height=1024;let r=i.getContext("2d");r.strokeStyle="rgba(11,12,16,.75)",r.lineWidth=10,r.setLineDash([34,26]),r.beginPath(),r.arc(1024/2,1024/2,1024*.44,0,Math.PI*2),r.stroke(),r.setLineDash([]),r.fillStyle="rgba(11,12,16,.85)",r.textAlign="center",r.textBaseline="middle",r.font="600 300px Geist, sans-serif",r.fillText(String(t.chapter).padStart(2,"0"),1024/2,1024*.42),r.font="500 64px Geist, sans-serif",r.fillText(t.en,1024/2,1024*.64),r.font="500 40px Geist Mono, monospace",r.fillText(`${t.zh}  \xB7  ${t.year}`.toUpperCase(),1024/2,1024*.73);let n=new Ho(i);return n.colorSpace=Pt,n.anisotropy=8,n}function L1(t,{chapters:e=[],onOpen:i,onClose:r}={}){let n=matchMedia("(pointer: coarse)").matches;t.innerHTML=`
    <canvas class="drive__canvas"></canvas>
    <div class="drive__hud mono">
      <span>Drive \xB7 \u5F00\u8F66\u901B\u6E38\u8BB0</span>
      <span class="drive__keys">${n?"Use the pad \xB7 \u6309\u94AE\u9A7E\u9A76":"W A S D / \u2190 \u2191 \u2192 \u2193 \xB7 Space brake \xB7 R reset \xB7 Enter open"}</span>
    </div>
    <button class="drive__close" type="button" aria-label="Leave drive mode">\u2715</button>
    <div class="drive__card" aria-live="polite"></div>
    <div class="drive__pad" ${n?"":"hidden"}>
      <button type="button" data-k="left" aria-label="Steer left">\u25C0</button><button type="button" data-k="right" aria-label="Steer right">\u25B6</button>
      <button type="button" data-k="brake" aria-label="Reverse">\u25BC</button><button type="button" data-k="gas" aria-label="Accelerate">\u25B2</button>
    </div>
    <div class="drive__load mono">Loading the desert \xB7 \u6B63\u5728\u94FA\u6C99</div>`;let s=t.querySelector("canvas"),a=t.querySelector(".drive__card"),o=new hu({canvas:s,antialias:!0,powerPreference:"high-performance"});o.setPixelRatio(Math.min(devicePixelRatio,n?1.5:2)),o.shadowMap.enabled=!0,o.shadowMap.type=Lo,o.outputColorSpace=Pt;let l=new uc;l.background=new Qe(15194301),l.fog=new hc(15194301,38,95);let h=new Ht(38,1,.5,300);l.add(new Qc(16774368,9072460,1.1));let u=new eu(16777215,2.3);u.position.set(-14,26,10),u.castShadow=!0,u.shadow.mapSize.set(n?1024:2048,n?1024:2048),Object.assign(u.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:80}),l.add(u,u.target);let d=new Qs({gravity:new E(0,-9.82,0)});d.allowSleep=!0,d.defaultContactMaterial.friction=.35;let c=new _r("ground"),p=new _r("wheel");d.addContactMaterial(new ln(p,c,{friction:.3,restitution:0,contactEquationStiffness:1e3}));let g=new je({mass:0,material:c,shape:new bi(new E(130,1,130))});g.position.set(0,-1,0),d.addBody(g);let v=new nn(260,260,120,120);{let ee=v.attributes.position;for(let se=0;se<ee.count;se++){let _e=ee.getX(se),Te=ee.getY(se),Fe=Math.hypot(_e,Te),U=Math.sin(_e*.07)*Math.cos(Te*.05)*2.4+Math.sin(_e*.19+Te*.11)*.7;ee.setZ(se,U*Us.smoothstep(Fe,48,80))}v.computeVertexNormals()}let m=new _t(v,new ni({color:C1,roughness:1}));m.rotation.x=-Math.PI/2,m.receiveShadow=!0,l.add(m),[[0,56,0],[0,-56,0],[56,0,Math.PI/2],[-56,0,Math.PI/2]].forEach(([ee,se,_e])=>{let Te=new je({mass:0,shape:new bi(new E(56,3,.5))});Te.position.set(ee,3,se),Te.quaternion.setFromEuler(0,_e,0),d.addBody(Te)});let f=[],y=(ee,se)=>{l.add(ee),d.addBody(se),f.push([ee,se])},b=new je({mass:150});b.addShape(new bi(new E(1.1,.32,.62)),new E(0,.1,0)),b.addShape(new bi(new E(.55,.26,.55)),new E(.15,.58,0)),b.position.set(0,1.2,6),b.angularDamping=.4,b.allowSleep=!1,b.quaternion.setFromEuler(0,-Math.PI/2,0);let _=new Js({chassisBody:b}),M={radius:.38,directionLocal:new E(0,-1,0),suspensionStiffness:32,suspensionRestLength:.32,frictionSlip:1.6,dampingRelaxation:2.3,dampingCompression:4.4,maxSuspensionForce:1e5,rollInfluence:.02,axleLocal:new E(0,0,1),maxSuspensionTravel:.3,customSlidingRotationalSpeed:-30,useCustomSlidingRotationalSpeed:!0};[[-.78,0,.62],[-.78,0,-.62],[.78,0,.62],[.78,0,-.62]].forEach(([ee,se,_e])=>{_.addWheel({...M,chassisConnectionPointLocal:new E(ee,se,_e)})}),_.addToWorld(d);let T=_.wheelInfos.map(ee=>{let se=new je({mass:0,material:p,type:je.KINEMATIC,collisionFilterGroup:0});return se.addShape(new qn(ee.radius,ee.radius,ee.radius/2,16),new E,new Rt().setFromEuler(-Math.PI/2,0,0)),d.addBody(se),se}),C=new Gr,x=new ni({color:Bu,roughness:.35,metalness:.2}),S=new ni({color:1382174,roughness:.6}),N=new ni({color:12570879,roughness:.1,metalness:.4}),P=new _t(new ri(2.2,.64,1.24),x);P.position.y=.1,P.castShadow=!0,C.add(P);let B=new _t(new ri(1.1,.52,1.1),N);B.position.set(.15,.58,0),B.castShadow=!0,C.add(B);let F=new _t(new ri(1.14,.06,1.14),x);F.position.set(.15,.87,0),C.add(F);let I=new _t(new ri(.06,.12,.9),new Dn({color:16774084}));I.position.set(-1.11,.16,0),C.add(I),l.add(C);let D=_.wheelInfos.map(ee=>{let se=new Os(ee.radius,ee.radius,.3,20);se.rotateX(Math.PI/2);let _e=new _t(se,S);return _e.castShadow=!0,l.add(_e),_e}),z=ee=>new ni({map:I1([ee],{w:256,h:256,bg:"#f4efe6",font:"700 200px Geist, sans-serif"}),roughness:.8}),H=new ni({color:16052198,roughness:.8});[..."TRAVEL"].forEach((ee,se)=>{let U=new _t(new ri(1.1,1.4,.44),[H,H,H,H,z(ee),H]);U.castShadow=!0,U.receiveShadow=!0;let Je=new je({mass:3,shape:new bi(new E(.55,.7,.22))});Je.position.set((se-2.5)*1.3,.7,-1.5),Je.allowSleep=!0,Je.sleepSpeedLimit=.2,y(U,Je)});let $=[],W=new Jc,Z=[[-20,-14],[20,-18],[0,-36],[-24,-38],[24,-40]];e.forEach((ee,se)=>{let[_e,Te]=Z[se%Z.length],Fe=new _t(new nn(11,11),new ni({map:P1(ee),transparent:!0,roughness:1}));Fe.rotation.x=-Math.PI/2,Fe.position.set(_e,.02,Te),Fe.receiveShadow=!0,l.add(Fe);let U=new _t(new jo(4.9,.08,8,80),new Dn({color:Bu,transparent:!0,opacity:0}));U.rotation.x=-Math.PI/2,U.position.set(_e,.08,Te),l.add(U),ee.thumbs.slice(0,5).forEach((Je,Ye)=>{let O=new ni({color:2236962,roughness:.6});W.load(Je,fe=>{fe.colorSpace=Pt,O.map=fe,O.color.set(16777215),O.needsUpdate=!0});let X=new ni({color:16184302,roughness:.9}),Q=new _t(new ri(1.9,1.3,.07),[X,X,X,X,O,X]);Q.castShadow=!0;let pe=new je({mass:1.2,shape:new bi(new E(1.9/2,1.3/2,.07/2))}),ve=(Ye-2)*.42,k=7.2;pe.position.set(_e+Math.sin(ve)*k,1.3/2+.05,Te-Math.cos(ve)*k),pe.quaternion.setFromEuler(0,-ve,0),pe.allowSleep=!0,pe.sleepSpeedLimit=.15,y(Q,pe)});for(let Je=0;Je<3;Je++){let Ye=new _t(new Wo(.28,.75,14),new ni({color:16738859,roughness:.6}));Ye.castShadow=!0;let Ze=new je({mass:.4,shape:new qn(.05,.28,.75,8)});Ze.position.set(_e*.5+(Je-1)*1.4,.38,Te*.5+3),y(Ye,Ze)}$.push({ch:ee,x:_e,z:Te,ring:U})});let K={gas:0,brake:0,left:0,right:0,hand:0},oe={KeyW:"gas",ArrowUp:"gas",KeyS:"brake",ArrowDown:"brake",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"hand"},Se=ee=>se=>{oe[se.code]&&(K[oe[se.code]]=ee?1:0,se.preventDefault()),ee&&se.code==="KeyR"&&J(),ee&&se.code==="Enter"&&ne&&(i==null||i(ne.ch.href)),ee&&se.code==="Escape"&&be()},rt=Se(!0),ze=Se(!1);addEventListener("keydown",rt),addEventListener("keyup",ze),t.querySelectorAll(".drive__pad [data-k]").forEach(ee=>{let se=ee.dataset.k,_e=Fe=>{Fe.preventDefault(),K[se]=1},Te=()=>{K[se]=0};ee.addEventListener("pointerdown",_e),ee.addEventListener("pointerup",Te),ee.addEventListener("pointerleave",Te),ee.addEventListener("pointercancel",Te)}),t.querySelector(".drive__close").addEventListener("click",()=>be());function J(){b.position.set(b.position.x,1.4,b.position.z);let ee=new E;b.quaternion.vmult(new E(-1,0,0),ee),b.quaternion.setFromEuler(0,Math.atan2(ee.z,-ee.x),0),b.velocity.setZero(),b.angularVelocity.setZero()}let ne=null,le=0,Pe=!0,Ue=0,ge=new L,qe=new L,re=()=>{let ee=t.clientWidth,se=t.clientHeight;o.setSize(ee,se,!1),h.aspect=ee/se,h.fov=h.aspect<.8?52:38,h.updateProjectionMatrix()};re(),addEventListener("resize",re);let ie=performance.now();t.querySelector(".drive__load").remove();function ue(ee){if(!Pe)return;le=requestAnimationFrame(ue);let se=Math.min(.05,(ee-ie)/1e3);ie=ee;let _e=b.velocity.length(),Te=520,Fe=new E;b.quaternion.vmult(new E(-1,0,0),Fe);let U=b.velocity.dot(Fe),Je=K.gas?-Te:K.brake?U>1?0:Te*.7:0;_.applyEngineForce(Je,2),_.applyEngineForce(Je,3);let Ye=(K.brake&&U>1?8:0)+(K.hand?14:0)+(!K.gas&&!K.brake?.6:0);[0,1,2,3].forEach(O=>_.setBrake(Ye,O));let Ze=(K.left-K.right)*Us.lerp(.55,.28,Math.min(1,_e/18));Ue+=(Ze-Ue)*Math.min(1,se*10),_.setSteeringValue(Ue,0),_.setSteeringValue(Ue,1),d.fixedStep(1/60,se),C.position.copy(b.position),C.quaternion.copy(b.quaternion),_.wheelInfos.forEach((O,X)=>{_.updateWheelTransform(X);let Q=O.worldTransform;T[X].position.copy(Q.position),T[X].quaternion.copy(Q.quaternion),D[X].position.copy(Q.position),D[X].quaternion.copy(Q.quaternion)}),f.forEach(([O,X])=>{O.position.copy(X.position),O.quaternion.copy(X.quaternion)}),b.position.y<-5&&J();let R=new L(b.velocity.x,0,b.velocity.z).multiplyScalar(.35);qe.lerp(new L(C.position.x,0,C.position.z).add(R),Math.min(1,se*3)),ge.copy(qe).add(new L(9,15+Math.min(6,_e*.25),15)),h.position.lerp(ge,Math.min(1,se*4)),h.lookAt(qe),u.position.set(qe.x-14,26,qe.z+10),u.target.position.copy(qe);let w=null;if($.forEach(O=>{let X=Math.hypot(C.position.x-O.x,C.position.z-O.z),Q=Us.smoothstep(X,9,4.5);O.ring.material.opacity=.15+Q*.85,O.ring.scale.setScalar(1+Math.sin(ee/300)*.02*Q),X<4.9&&(w=O)}),w!==ne)if(ne=w,ne){let O=ne.ch;a.innerHTML=`<p class="mono">Chapter ${String(O.chapter).padStart(2,"0")} \xB7 ${O.year} \xB7 ${O.region}</p><h3>${O.en}<span class="zh">${O.zh}</span></h3>
          <div class="drive__btns"><a class="pill pill--light" href="${O.href}"><span class="dot"></span>Open chapter \xB7 Enter</a>${O.journal?`<a class="pill pill--ghost" href="${O.journal}"><span class="dot"></span>Journal \xB7 \u968F\u7B14</a>`:""}</div>`,a.classList.add("is-on")}else a.classList.remove("is-on");o.render(l,h)}le=requestAnimationFrame(ue);function be(){Pe&&(Pe=!1,cancelAnimationFrame(le),removeEventListener("keydown",rt),removeEventListener("keyup",ze),removeEventListener("resize",re),o.dispose(),t.innerHTML="",r==null||r())}return{close:be}}window.X1NG_DRIVE={mount:L1};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
