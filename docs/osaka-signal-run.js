(()=>{var hu=0,mc=1,uu=2;var Lr=1,du=2,Es=3,jn=0,Qe=1,nn=2,fn=0,Qn=1,Zt=2,gc=3,xc=4,fu=5;var pi=100,pu=101,mu=102,gu=103,xu=104,_u=200,vu=201,yu=202,Mu=203,wa=204,Aa=205,bu=206,Su=207,Eu=208,Tu=209,wu=210,Au=211,Ru=212,Cu=213,Pu=214,Ra=0,Ca=1,Pa=2,Li=3,Ia=4,La=5,Da=6,Ua=7,_c=0,Iu=1,Lu=2,Sn=0,vc=1,yc=2,Mc=3,Dr=4,bc=5,Sc=6,Ec=7;var Tc=300,_i=301,ki=302,go=303,xo=304,Ur=306,Na=1e3,Dn=1001,Fa=1002,ze=1003,Du=1004;var Nr=1005;var We=1006,_o=1007;var vi=1008;var sn=1009,wc=1010,Ac=1011,Ts=1012,vo=1013,En=1014,pn=1015,Je=1016,yo=1017,Mo=1018,ws=1020,Rc=35902,Cc=35899,Pc=1021,Ic=1022,mn=1023,Un=1026,yi=1027,bo=1028,So=1029,Mi=1030,Eo=1031;var To=1033,Fr=33776,Or=33777,Br=33778,zr=33779,wo=35840,Ao=35841,Ro=35842,Co=35843,Po=36196,Io=37492,Lo=37496,Do=37488,Uo=37489,kr=37490,No=37491,Fo=37808,Oo=37809,Bo=37810,zo=37811,ko=37812,Vo=37813,Ho=37814,Go=37815,Wo=37816,Xo=37817,qo=37818,Yo=37819,Zo=37820,$o=37821,Jo=36492,Ko=36494,jo=36495,Qo=36283,tl=36284,Vr=36285,el=36286;var Js=2300,Oa=2301,Ea=2302,sc=2303,rc=2400,ac=2401,oc=2402;var Uu=3200;var nl=0,Nu=1,ni="",He="srgb",Ks="srgb-linear",js="linear",ne="srgb";var Pi=7680;var lc=519,Fu=512,Ou=513,Bu=514,il=515,zu=516,ku=517,sl=518,Vu=519,Ba=35044;var Lc="300 es",yn=2e3,ds=2001;function Yd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function fs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Hu(){let i=fs("canvas");return i.style.display="block",i}var Ah={},ps=null;function Qs(...i){let t="THREE."+i.shift();ps?ps("log",t,...i):console.log(t,...i)}function Gu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Rt(...i){i=Gu(i);let t="THREE."+i.shift();if(ps)ps("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Lt(...i){i=Gu(i);let t="THREE."+i.shift();if(ps)ps("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ii(...i){let t=i.join(" ");t in Ah||(Ah[t]=!0,Rt(...i))}function Wu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Xu={[Ra]:Ca,[Pa]:Da,[Ia]:Ua,[Li]:La,[Ca]:Ra,[Da]:Pa,[Ua]:Ia,[La]:Li},Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rh=1234567,qs=Math.PI/180,ms=180/Math.PI;function Jn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Wt(i,t,e){return Math.max(t,Math.min(e,i))}function Dc(i,t){return(i%t+t)%t}function $d(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Jd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ys(i,t,e){return(1-e)*i+e*t}function Kd(i,t,e,n){return Ys(i,t,1-Math.exp(-e*n))}function jd(i,t=1){return t-Math.abs(Dc(i,t*2)-t)}function Qd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function tf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function ef(i,t){return i+Math.floor(Math.random()*(t-i+1))}function nf(i,t){return i+Math.random()*(t-i)}function sf(i){return i*(.5-Math.random())}function rf(i){i!==void 0&&(Rh=i);let t=Rh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function af(i){return i*qs}function of(i){return i*ms}function lf(i){return(i&i-1)===0&&i!==0}function cf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function hf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function uf(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),u=a((t-n)/2),d=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*d,o*h,o*c);break;default:Rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Uc={DEG2RAD:qs,RAD2DEG:ms,generateUUID:Jn,clamp:Wt,euclideanModulo:Dc,mapLinear:$d,inverseLerp:Jd,lerp:Ys,damp:Kd,pingpong:jd,smoothstep:Qd,smootherstep:tf,randInt:ef,randFloat:nf,randFloatSpread:sf,seededRandom:rf,degToRad:af,radToDeg:of,isPowerOfTwo:lf,ceilPowerOfTwo:cf,floorPowerOfTwo:hf,setQuaternionFromProperEuler:uf,normalize:se,denormalize:vn},kc=class kc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kc.prototype.isVector2=!0;var st=kc,Fn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||l!==u||c!==d||h!==g){let m=l*u+c*d+h*g+f*y;m<0&&(u=-u,d=-d,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let E=Math.acos(m),b=Math.sin(E);p=Math.sin(p*E)/b,o=Math.sin(o*E)/b,l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+y*o}else{l=l*p+u*o,c=c*p+d*o,h=h*p+g*o,f=f*p+y*o;let E=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=E,c*=E,h*=E,f*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Rt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Wt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vc=class Vc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ch.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ch.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Il.copy(this).projectOnVector(t),this.sub(Il)}reflect(t){return this.sub(Il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Wt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vc.prototype.isVector3=!0;var C=Vc,Il=new C,Ch=new Fn,Hc=class Hc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],y=s[0],m=s[3],p=s[6],E=s[1],b=s[4],v=s[7],T=s[2],S=s[5],R=s[8];return r[0]=a*y+o*E+l*T,r[3]=a*m+o*b+l*S,r[6]=a*p+o*v+l*R,r[1]=c*y+h*E+f*T,r[4]=c*m+h*b+f*S,r[7]=c*p+h*v+f*R,r[2]=u*y+d*E+g*T,r[5]=u*m+d*b+g*S,r[8]=u*p+d*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ii("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ll.makeScale(t,e)),this}rotate(t){return Ii("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ll.makeRotation(-t)),this}translate(t,e){return Ii("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Hc.prototype.isMatrix3=!0;var Ot=Hc,Ll=new Ot,Ph=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ih=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function df(){let i={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ne&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ne&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ni?js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ii("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ii("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ks]:{primaries:t,whitePoint:n,transfer:js,toXYZ:Ph,fromXYZ:Ih,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:He},outputColorSpaceConfig:{drawingBufferColorSpace:He}},[He]:{primaries:t,whitePoint:n,transfer:ne,toXYZ:Ph,fromXYZ:Ih,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:He}}}),i}var Yt=df();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,za=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Yi===void 0&&(Yi=fs("canvas")),Yi.width=t.width,Yi.height=t.height;let s=Yi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Yi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ff=0,gs=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Dl(s[a].image)):r.push(Dl(s[a]))}else r=Dl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Dl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?za.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Rt("Texture: Unable to serialize Texture."),{})}var pf=0,Ul=new C,Ze=class i extends Nn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Dn,s=Dn,r=We,a=vi,o=mn,l=sn,c=i.DEFAULT_ANISOTROPY,h=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Jn(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Rt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Na:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case Fa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Na:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case Fa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ze.DEFAULT_IMAGE=null;Ze.DEFAULT_MAPPING=Tc;Ze.DEFAULT_ANISOTROPY=1;var Gc=class Gc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(c+1)/2,v=(d+1)/2,T=(p+1)/2,S=(h+u)/4,R=(f+y)/4,_=(g+m)/4;return b>v&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=R/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=S/s,r=_/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=R/r,s=_/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-y)/E,this.z=(u-h)/E,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Wt(this.x,t.x,e.x),this.y=Wt(this.y,t.y,e.y),this.z=Wt(this.z,t.z,e.z),this.w=Wt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Wt(this.x,t,e),this.y=Wt(this.y,t,e),this.z=Wt(this.z,t,e),this.w=Wt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Wt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gc.prototype.isVector4=!0;var pe=Gc,ka=class extends Nn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Ze(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:We,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new gs(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Le=class extends ka{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},tr=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Va=class extends Ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ze,this.minFilter=ze,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mo=class mo{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,y,m)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mo().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),r=1/Zi.setFromMatrixColumn(t,1).length(),a=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,y=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,y=c*f;e[0]=u+y*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,y=c*f;e[0]=u-y*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,y=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+y,e[1]=l*f,e[5]=y*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-y*f}else if(t.order==="XZY"){let u=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+y,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mf,t,gf)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),li.crossVectors(n,an),li.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),li.crossVectors(n,an)),li.normalize(),Jr.crossVectors(an,li),s[0]=li.x,s[4]=Jr.x,s[8]=an.x,s[1]=li.y,s[5]=Jr.y,s[9]=an.y,s[2]=li.z,s[6]=Jr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],y=n[6],m=n[10],p=n[14],E=n[3],b=n[7],v=n[11],T=n[15],S=s[0],R=s[4],_=s[8],w=s[12],P=s[1],I=s[5],U=s[9],W=s[13],q=s[2],O=s[6],G=s[10],H=s[14],K=s[3],Q=s[7],ft=s[11],xt=s[15];return r[0]=a*S+o*P+l*q+c*K,r[4]=a*R+o*I+l*O+c*Q,r[8]=a*_+o*U+l*G+c*ft,r[12]=a*w+o*W+l*H+c*xt,r[1]=h*S+f*P+u*q+d*K,r[5]=h*R+f*I+u*O+d*Q,r[9]=h*_+f*U+u*G+d*ft,r[13]=h*w+f*W+u*H+d*xt,r[2]=g*S+y*P+m*q+p*K,r[6]=g*R+y*I+m*O+p*Q,r[10]=g*_+y*U+m*G+p*ft,r[14]=g*w+y*W+m*H+p*xt,r[3]=E*S+b*P+v*q+T*K,r[7]=E*R+b*I+v*O+T*Q,r[11]=E*_+b*U+v*G+T*ft,r[15]=E*w+b*W+v*H+T*xt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],y=t[7],m=t[11],p=t[15],E=l*d-c*u,b=o*d-c*f,v=o*u-l*f,T=a*d-c*h,S=a*u-l*h,R=a*f-o*h;return e*(y*E-m*b+p*v)-n*(g*E-m*T+p*S)+s*(g*b-y*T+p*R)-r*(g*v-y*S+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],y=t[13],m=t[14],p=t[15],E=e*o-n*a,b=e*l-s*a,v=e*c-r*a,T=n*l-s*o,S=n*c-r*o,R=s*c-r*l,_=h*y-f*g,w=h*m-u*g,P=h*p-d*g,I=f*m-u*y,U=f*p-d*y,W=u*p-d*m,q=E*W-b*U+v*I+T*P-S*w+R*_;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/q;return t[0]=(o*W-l*U+c*I)*O,t[1]=(s*U-n*W-r*I)*O,t[2]=(y*R-m*S+p*T)*O,t[3]=(u*S-f*R-d*T)*O,t[4]=(l*P-a*W-c*w)*O,t[5]=(e*W-s*P+r*w)*O,t[6]=(m*v-g*R-p*b)*O,t[7]=(h*R-u*v+d*b)*O,t[8]=(a*U-o*P+c*_)*O,t[9]=(n*P-e*U-r*_)*O,t[10]=(g*S-y*v+p*E)*O,t[11]=(f*v-h*S-d*E)*O,t[12]=(o*w-a*I-l*_)*O,t[13]=(e*I-n*w+s*_)*O,t[14]=(y*b-g*T-m*E)*O,t[15]=(h*T-f*b+u*E)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,y=a*h,m=a*f,p=o*f,E=l*c,b=l*h,v=l*f,T=n.x,S=n.y,R=n.z;return s[0]=(1-(y+p))*T,s[1]=(d+v)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(d-v)*S,s[5]=(1-(u+p))*S,s[6]=(m+E)*S,s[7]=0,s[8]=(g+b)*R,s[9]=(m-E)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),l=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),gn.copy(this);let c=1/a,h=1/o,f=1/l;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=h,gn.elements[5]*=h,gn.elements[6]*=h,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,e.setFromRotationMatrix(gn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=yn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===yn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ds)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=yn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===yn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===ds)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};mo.prototype.isMatrix4=!0;var ee=mo,Zi=new C,gn=new ee,mf=new C(0,0,0),gf=new C(1,1,1),li=new C,Jr=new C,an=new C,Lh=new ee,Dh=new Fn,ti=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Lh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Dh.setFromEuler(this),this.setFromQuaternion(Dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var xs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},xf=0,Uh=new C,$i=new Fn,Wn=new ee,Kr=new C,Fs=new C,_f=new C,vf=new Fn,Nh=new C(1,0,0),Fh=new C(0,1,0),Oh=new C(0,0,1),Bh={type:"added"},yf={type:"removed"},Ji={type:"childadded",child:null},Nl={type:"childremoved",child:null},ke=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new C,e=new ti,n=new Fn,s=new C(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Ot}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.multiply($i),this}rotateOnWorldAxis(t,e){return $i.setFromAxisAngle(t,e),this.quaternion.premultiply($i),this}rotateX(t){return this.rotateOnAxis(Nh,t)}rotateY(t){return this.rotateOnAxis(Fh,t)}rotateZ(t){return this.rotateOnAxis(Oh,t)}translateOnAxis(t,e){return Uh.copy(t).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nh,t)}translateY(t){return this.translateOnAxis(Fh,t)}translateZ(t){return this.translateOnAxis(Oh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Kr.copy(t):Kr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Fs,Kr,this.up):Wn.lookAt(Kr,Fs,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Wn),this.quaternion.premultiply($i.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Lt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yf),Nl.child=t,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bh),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,t,_f),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fs,vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ke.DEFAULT_UP=new C(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Be=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Mf={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Be;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},jr={h:0,s:0,l:0};function Fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=He){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Yt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Yt.workingColorSpace){if(t=Dc(t,1),e=Wt(e,0,1),n=Wt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Fl(a,r,t+1/3),this.g=Fl(a,r,t),this.b=Fl(a,r,t-1/3)}return Yt.colorSpaceToWorking(this,s),this}setStyle(t,e=He){function n(r){r!==void 0&&parseFloat(r)<1&&Rt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Rt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Rt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=He){let n=qu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Rt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=us(t.r),this.g=us(t.g),this.b=us(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=He){return Yt.workingToColorSpace(Ye.copy(this),t),Math.round(Wt(Ye.r*255,0,255))*65536+Math.round(Wt(Ye.g*255,0,255))*256+Math.round(Wt(Ye.b*255,0,255))}getHexString(t=He){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Yt.workingColorSpace){return Yt.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=He){Yt.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==He?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(jr);let n=Ys(ci.h,jr.h,e),s=Ys(ci.s,jr.s,e),r=Ys(ci.l,jr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new It;It.NAMES=qu;var er=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new It(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var nr=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new C,Xn=new C,Ol=new C,qn=new C,Ki=new C,ji=new C,zh=new C,Bl=new C,zl=new C,kl=new C,Vl=new pe,Hl=new pe,Gl=new pe,$n=class i{constructor(t=new C,e=new C,n=new C){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Xn.subVectors(n,e),Ol.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(Xn),l=xn.dot(Ol),c=Xn.dot(Xn),h=Xn.dot(Ol),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Vl.setScalar(0),Hl.setScalar(0),Gl.setScalar(0),Vl.fromBufferAttribute(t,e),Hl.fromBufferAttribute(t,n),Gl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vl,r.x),a.addScaledVector(Hl,r.y),a.addScaledVector(Gl,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Xn.subVectors(t,e),xn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),xn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),ji.subVectors(r,n),Bl.subVectors(t,n);let l=Ki.dot(Bl),c=ji.dot(Bl);if(l<=0&&c<=0)return e.copy(n);zl.subVectors(t,s);let h=Ki.dot(zl),f=ji.dot(zl);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ki,a);kl.subVectors(t,r);let d=Ki.dot(kl),g=ji.dot(kl);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ji,o);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return zh.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(zh,o);let p=1/(m+y+u);return a=y*p,o=u*p,e.copy(n).addScaledVector(Ki,a).addScaledVector(ji,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},On=class{constructor(t=new C(1/0,1/0,1/0),e=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox)),Qr.applyMatrix4(t.matrixWorld),this.union(Qr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),ta.subVectors(this.max,Os),Qi.subVectors(t.a,Os),ts.subVectors(t.b,Os),es.subVectors(t.c,Os),hi.subVectors(ts,Qi),ui.subVectors(es,ts),wi.subVectors(Qi,es);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-wi.z,wi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,wi.z,0,-wi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-wi.y,wi.x,0];return!Wl(e,Qi,ts,es,ta)||(e=[1,0,0,0,1,0,0,0,1],!Wl(e,Qi,ts,es,ta))?!1:(ea.crossVectors(hi,ui),e=[ea.x,ea.y,ea.z],Wl(e,Qi,ts,es,ta))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yn=[new C,new C,new C,new C,new C,new C,new C,new C],_n=new C,Qr=new On,Qi=new C,ts=new C,es=new C,hi=new C,ui=new C,wi=new C,Os=new C,ta=new C,ea=new C,Ai=new C;function Wl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ai.fromArray(i,r);let o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Re=new C,na=new st,bf=0,Ie=class extends Nn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ba,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)na.fromBufferAttribute(this,e),na.applyMatrix3(t),this.setXY(e,na.x,na.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ba&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}};var ir=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var sr=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},Sf=new On,Bs=new C,Xl=new C,Bn=class{constructor(t=new C,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bs.subVectors(t,this.center);let e=Bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bs.copy(t.center).add(Xl)),this.expandByPoint(Bs.copy(t.center).sub(Xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ef=0,un=new ee,ql=new ke,ns=new C,on=new On,zs=new On,Oe=new C,fe=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Yd(t)?sr:ir)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return ql.lookAt(t),ql.updateMatrix(),this.applyMatrix4(ql.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(on.min,zs.min),on.expandByPoint(Oe),Oe.addVectors(on.max,zs.max),on.expandByPoint(Oe)):(on.expandByPoint(zs.min),on.expandByPoint(zs.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Oe.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(t,c),Oe.add(ns)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ie(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new C,l[_]=new C;let c=new C,h=new C,f=new C,u=new st,d=new st,g=new st,y=new C,m=new C;function p(_,w,P){c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,w),f.fromBufferAttribute(n,P),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,P),h.sub(c),f.sub(c),d.sub(u),g.sub(u);let I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(I),o[_].add(y),o[w].add(y),o[P].add(y),l[_].add(m),l[w].add(m),l[P].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let _=0,w=E.length;_<w;++_){let P=E[_],I=P.start,U=P.count;for(let W=I,q=I+U;W<q;W+=3)p(t.getX(W+0),t.getX(W+1),t.getX(W+2))}let b=new C,v=new C,T=new C,S=new C;function R(_){T.fromBufferAttribute(s,_),S.copy(T);let w=o[_];b.copy(w),b.sub(T.multiplyScalar(T.dot(w))).normalize(),v.crossVectors(S,w);let I=v.dot(l[_])<0?-1:1;a.setXYZW(_,b.x,b.y,b.z,I)}for(let _=0,w=E.length;_<w;++_){let P=E[_],I=P.start,U=P.count;for(let W=I,q=I+U;W<q;W+=3)R(t.getX(W+0)),R(t.getX(W+1)),R(t.getX(W+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,f=new C;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[d++]}return new Ie(u,h,f)}if(this.index===null)return Rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ha=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Ba,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},je=new C,rr=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Qs("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ie(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Qs("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Tf=0,Mn=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=Qn,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Aa,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=Li,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Rt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Rt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qn&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Aa&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Li&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new It().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new st().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},vs=class extends Mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},is,ks=new C,ss=new C,rs=new C,as=new st,Vs=new st,Yu=new ee,ia=new C,Hs=new C,sa=new C,kh=new st,Yl=new st,Vh=new st,ar=class extends ke{constructor(t=new vs){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new fe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ha(e,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new rr(n,3,0,!1)),is.setAttribute("uv",new rr(n,2,3,!1))}this.geometry=is,this.material=t,this.center=new st(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Lt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Yu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ra(ia.set(-.5,-.5,0),rs,a,ss,s,r),ra(Hs.set(.5,-.5,0),rs,a,ss,s,r),ra(sa.set(.5,.5,0),rs,a,ss,s,r),kh.set(0,0),Yl.set(1,0),Vh.set(1,1);let o=t.ray.intersectTriangle(ia,Hs,sa,!1,ks);if(o===null&&(ra(Hs.set(-.5,.5,0),rs,a,ss,s,r),Yl.set(0,1),o=t.ray.intersectTriangle(ia,sa,Hs,!1,ks),o===null))return;let l=t.ray.origin.distanceTo(ks);l<t.near||l>t.far||e.push({distance:l,point:ks.clone(),uv:$n.getInterpolation(ks,ia,Hs,sa,kh,Yl,Vh,new st),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ra(i,t,e,n,s,r){as.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Vs.x=r*as.x-s*as.y,Vs.y=s*as.x+r*as.y):Vs.copy(as),i.copy(t),i.x+=Vs.x,i.y+=Vs.y,i.applyMatrix4(Yu)}var Zn=new C,Zl=new C,aa=new C,di=new C,$l=new C,oa=new C,Jl=new C,Di=class{constructor(t=new C,e=new C(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zl.copy(t).add(e).multiplyScalar(.5),aa.copy(e).sub(t).normalize(),di.copy(this.origin).sub(Zl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(aa),o=di.dot(this.direction),l=-di.dot(aa),c=di.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Zl).addScaledVector(aa,u),d}intersectSphere(t,e){Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){$l.subVectors(e,t),oa.subVectors(n,t),Jl.crossVectors($l,oa);let a=this.direction.dot(Jl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;di.subVectors(this.origin,t);let l=o*this.direction.dot(oa.crossVectors(di,oa));if(l<0)return null;let c=o*this.direction.dot($l.cross(di));if(c<0||l+c>a)return null;let h=-o*di.dot(Jl);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=_c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Hh=new ee,Ri=new Di,la=new Bn,Gh=new C,ca=new C,ha=new C,ua=new C,Kl=new C,da=new C,Wh=new C,fa=new C,Nt=class extends ke{constructor(t=new fe,e=new $t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){da.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(Kl.fromBufferAttribute(f,t),a?da.addScaledVector(Kl,h):da.addScaledVector(Kl.sub(e),h))}e.add(da)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),la.copy(n.boundingSphere),la.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(la.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(la,Gh)===null||Ri.origin.distanceToSquared(Gh)>(t.far-t.near)**2))&&(Hh.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(Hh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),b=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,T=b;v<T;v+=3){let S=o.getX(v),R=o.getX(v+1),_=o.getX(v+2);s=pa(this,p,t,n,c,h,f,S,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let E=o.getX(m),b=o.getX(m+1),v=o.getX(m+2);s=pa(this,a,t,n,c,h,f,E,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),b=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=E,T=b;v<T;v+=3){let S=v,R=v+1,_=v+2;s=pa(this,p,t,n,c,h,f,S,R,_),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=g,p=y;m<p;m+=3){let E=m,b=m+1,v=m+2;s=pa(this,a,t,n,c,h,f,E,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function wf(i,t,e,n,s,r,a,o){let l;if(t.side===Qe?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===jn,o),l===null)return null;fa.copy(o),fa.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(fa);return c<e.near||c>e.far?null:{distance:c,point:fa.clone(),object:i}}function pa(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ca),i.getVertexPosition(l,ha),i.getVertexPosition(c,ua);let h=wf(i,t,e,n,ca,ha,ua,Wh);if(h){let f=new C;$n.getBarycoord(Wh,ca,ha,ua,f),s&&(h.uv=$n.getInterpolatedAttribute(s,o,l,c,f,new st)),r&&(h.uv1=$n.getInterpolatedAttribute(r,o,l,c,f,new st)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,l,c,f,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new C,materialIndex:0};$n.getNormal(ca,ha,ua,u.normal),h.face=u,h.barycoord=f}return h}var or=class extends Ze{constructor(t=null,e=1,n=1,s,r,a,o,l,c=ze,h=ze,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lr=class extends Ie{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},os=new ee,Xh=new ee,ma=[],qh=new On,Af=new ee,Gs=new Nt,Ws=new Bn,cr=class extends Nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Af)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),qh.copy(t.boundingBox).applyMatrix4(os),this.boundingBox.union(qh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,os),Ws.copy(t.boundingSphere).applyMatrix4(os),this.boundingSphere.union(Ws)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Gs.geometry=this.geometry,Gs.material=this.material,Gs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ws.copy(this.boundingSphere),Ws.applyMatrix4(n),t.ray.intersectsSphere(Ws)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),Xh.multiplyMatrices(n,os),Gs.matrixWorld=Xh,Gs.raycast(t,ma);for(let a=0,o=ma.length;a<o;a++){let l=ma[a];l.instanceId=r,l.object=this,e.push(l)}ma.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new or(new Float32Array(s*this.count),s,this.count,bo,pn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},jl=new C,Rf=new C,Cf=new Ot,Ln=class{constructor(t=new C(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=jl.subVectors(n,e).cross(Rf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(jl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cf.getNormalMatrix(t),s=this.coplanarPoint(jl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new Bn,Pf=new st(.5,.5),ga=new C,ys=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,a=new Ln){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],y=r[9],m=r[10],p=r[11],E=r[12],b=r[13],v=r[14],T=r[15];if(s[0].setComponents(c-a,d-h,p-g,T-E).normalize(),s[1].setComponents(c+a,d+h,p+g,T+E).normalize(),s[2].setComponents(c+o,d+f,p+y,T+b).normalize(),s[3].setComponents(c-o,d-f,p-y,T-b).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,d-u,p-m,T-v).normalize();else if(s[4].setComponents(c-l,d-u,p-m,T-v).normalize(),e===yn)s[5].setComponents(c+l,d+u,p+m,T+v).normalize();else if(e===ds)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){Ci.center.set(0,0,0);let e=Pf.distanceTo(t.center);return Ci.radius=.7071067811865476+e,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ga.x=s.normal.x>0?t.max.x:t.min.x,ga.y=s.normal.y>0?t.max.y:t.min.y,ga.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ga)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ui=class extends Mn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ga=new C,Wa=new C,Yh=new ee,Xs=new Di,xa=new Bn,Ql=new C,Zh=new C,hr=class extends ke{constructor(t=new fe,e=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ga.fromBufferAttribute(e,s-1),Wa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ga.distanceTo(Wa);t.setAttribute("lineDistance",new Xt(n,1))}else Rt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xa.copy(n.boundingSphere),xa.applyMatrix4(s),xa.radius+=r,t.ray.intersectsSphere(xa)===!1)return;Yh.copy(s).invert(),Xs.copy(t.ray).applyMatrix4(Yh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let d=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=d,m=g-1;y<m;y+=c){let p=h.getX(y),E=h.getX(y+1),b=_a(this,t,Xs,l,p,E,y);b&&e.push(b)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(d),p=_a(this,t,Xs,l,y,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=d,m=g-1;y<m;y+=c){let p=_a(this,t,Xs,l,y,y+1,y);p&&e.push(p)}if(this.isLineLoop){let y=_a(this,t,Xs,l,g-1,d,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function _a(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Ga.fromBufferAttribute(o,s),Wa.fromBufferAttribute(o,r),e.distanceSqToSegment(Ga,Wa,Ql,Zh)>n)return;Ql.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ql);if(!(c<t.near||c>t.far))return{distance:c,point:Zh.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var $h=new C,Jh=new C,ur=class extends hr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)$h.fromBufferAttribute(e,s),Jh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+$h.distanceTo(Jh);t.setAttribute("lineDistance",new Xt(n,1))}else Rt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},dr=class extends hr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Xa=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Kh=new ee,cc=new Di,va=new Bn,ya=new C,fr=class extends ke{constructor(t=new fe,e=new Xa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,t.ray.intersectsSphere(va)===!1)return;Kh.copy(s).invert(),cc.copy(t.ray).applyMatrix4(Kh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=u,y=d;g<y;g++){let m=c.getX(g);ya.fromBufferAttribute(f,m),jh(ya,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=u,y=d;g<y;g++)ya.fromBufferAttribute(f,g),jh(ya,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function jh(i,t,e,n,s,r,a){let o=cc.distanceSqToPoint(i);if(o<e){let l=new C;cc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var pr=class extends Ze{constructor(t=[],e=_i,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},mr=class extends Ze{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ei=class extends Ze{constructor(t,e,n=En,s,r,a,o=ze,l=ze,c,h=Un,f=1){if(h!==Un&&h!==yi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},qa=class extends ei{constructor(t,e=En,n=_i,s,r,a=ze,o=ze,l,c=Un){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},gr=class extends Ze{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ln=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(f,2));function g(y,m,p,E,b,v,T,S,R,_,w){let P=v/R,I=T/_,U=v/2,W=T/2,q=S/2,O=R+1,G=_+1,H=0,K=0,Q=new C;for(let ft=0;ft<G;ft++){let xt=ft*I-W;for(let yt=0;yt<O;yt++){let jt=yt*P-U;Q[y]=jt*E,Q[m]=xt*b,Q[p]=q,c.push(Q.x,Q.y,Q.z),Q[y]=0,Q[m]=0,Q[p]=S>0?1:-1,h.push(Q.x,Q.y,Q.z),f.push(yt/R),f.push(1-ft/_),H+=1}}for(let ft=0;ft<_;ft++)for(let xt=0;xt<R;xt++){let yt=u+xt+O*ft,jt=u+xt+O*(ft+1),xe=u+(xt+1)+O*(ft+1),Qt=u+(xt+1)+O*ft;l.push(yt,jt,Qt),l.push(jt,xe,Qt),K+=6}o.addGroup(d,K,w),d+=K,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var xr=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,y=[],m=n/2,p=0;E(),a===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(d,2));function E(){let v=new C,T=new C,S=0,R=(e-t)/n;for(let _=0;_<=r;_++){let w=[],P=_/r,I=P*(e-t)+t;for(let U=0;U<=s;U++){let W=U/s,q=W*l+o,O=Math.sin(q),G=Math.cos(q);T.x=I*O,T.y=-P*n+m,T.z=I*G,f.push(T.x,T.y,T.z),v.set(O,R,G).normalize(),u.push(v.x,v.y,v.z),d.push(W,1-P),w.push(g++)}y.push(w)}for(let _=0;_<s;_++)for(let w=0;w<r;w++){let P=y[w][_],I=y[w+1][_],U=y[w+1][_+1],W=y[w][_+1];(t>0||w!==0)&&(h.push(P,I,W),S+=3),(e>0||w!==r-1)&&(h.push(I,U,W),S+=3)}c.addGroup(p,S,0),p+=S}function b(v){let T=g,S=new st,R=new C,_=0,w=v===!0?t:e,P=v===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*P,0),u.push(0,P,0),d.push(.5,.5),g++;let I=g;for(let U=0;U<=s;U++){let q=U/s*l+o,O=Math.cos(q),G=Math.sin(q);R.x=w*G,R.y=m*P,R.z=w*O,f.push(R.x,R.y,R.z),u.push(0,P,0),S.x=O*.5+.5,S.y=G*.5*P+.5,d.push(S.x,S.y),g++}for(let U=0;U<s;U++){let W=T+U,q=I+U;v===!0?h.push(q,q+1,W):h.push(q+1,q,W),_+=3}c.addGroup(p,_,v===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var _r=class i extends fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Xt(r,3)),this.setAttribute("normal",new Xt(r.slice(),3)),this.setAttribute("uv",new Xt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(E){let b=new C,v=new C,T=new C;for(let S=0;S<e.length;S+=3)d(e[S+0],b),d(e[S+1],v),d(e[S+2],T),l(b,v,T,E)}function l(E,b,v,T){let S=T+1,R=[];for(let _=0;_<=S;_++){R[_]=[];let w=E.clone().lerp(v,_/S),P=b.clone().lerp(v,_/S),I=S-_;for(let U=0;U<=I;U++)U===0&&_===S?R[_][U]=w:R[_][U]=w.clone().lerp(P,U/I)}for(let _=0;_<S;_++)for(let w=0;w<2*(S-_)-1;w++){let P=Math.floor(w/2);w%2===0?(u(R[_][P+1]),u(R[_+1][P]),u(R[_][P])):(u(R[_][P+1]),u(R[_+1][P+1]),u(R[_+1][P]))}}function c(E){let b=new C;for(let v=0;v<r.length;v+=3)b.x=r[v+0],b.y=r[v+1],b.z=r[v+2],b.normalize().multiplyScalar(E),r[v+0]=b.x,r[v+1]=b.y,r[v+2]=b.z}function h(){let E=new C;for(let b=0;b<r.length;b+=3){E.x=r[b+0],E.y=r[b+1],E.z=r[b+2];let v=m(E)/2/Math.PI+.5,T=p(E)/Math.PI+.5;a.push(v,1-T)}g(),f()}function f(){for(let E=0;E<a.length;E+=6){let b=a[E+0],v=a[E+2],T=a[E+4],S=Math.max(b,v,T),R=Math.min(b,v,T);S>.9&&R<.1&&(b<.2&&(a[E+0]+=1),v<.2&&(a[E+2]+=1),T<.2&&(a[E+4]+=1))}}function u(E){r.push(E.x,E.y,E.z)}function d(E,b){let v=E*3;b.x=t[v+0],b.y=t[v+1],b.z=t[v+2]}function g(){let E=new C,b=new C,v=new C,T=new C,S=new st,R=new st,_=new st;for(let w=0,P=0;w<r.length;w+=9,P+=6){E.set(r[w+0],r[w+1],r[w+2]),b.set(r[w+3],r[w+4],r[w+5]),v.set(r[w+6],r[w+7],r[w+8]),S.set(a[P+0],a[P+1]),R.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),T.copy(E).add(b).add(v).divideScalar(3);let I=m(T);y(S,P+0,E,I),y(R,P+2,b,I),y(_,P+4,v,I)}}function y(E,b,v,T){T<0&&E.x===1&&(a[b]=E.x-1),v.x===0&&v.z===0&&(a[b]=T/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function p(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};var dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Rt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new st:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new C,s=[],r=[],a=[],o=new C,l=new ee;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Wt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Wt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},vr=class extends dn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new st){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ya=class extends vr{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Nc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Qh=new C,tu=new C,tc=new Nc,ec=new Nc,nc=new Nc,Ni=class extends dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new C){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(tu.subVectors(s[0],s[1]).add(s[0]),c=tu);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Qh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qh),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),tc.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,y,m),ec.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,y,m),nc.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(tc.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),ec.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),nc.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(tc.calc(l),ec.calc(l),nc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new C().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function eu(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function If(i,t){let e=1-i;return e*e*t}function Lf(i,t){return 2*(1-i)*i*t}function Df(i,t){return i*i*t}function Zs(i,t,e,n){return If(i,t)+Lf(i,e)+Df(i,n)}function Uf(i,t){let e=1-i;return e*e*e*t}function Nf(i,t){let e=1-i;return 3*e*e*i*t}function Ff(i,t){return 3*(1-i)*i*i*t}function Of(i,t){return i*i*i*t}function $s(i,t,e,n,s){return Uf(i,t)+Nf(i,e)+Ff(i,n)+Of(i,s)}var Za=class extends dn{constructor(t=new st,e=new st,n=new st,s=new st){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$a=class extends dn{constructor(t=new C,e=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set($s(t,s.x,r.x,a.x,o.x),$s(t,s.y,r.y,a.y,o.y),$s(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ja=class extends dn{constructor(t=new st,e=new st){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new st){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new st){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ka=class extends dn{constructor(t=new C,e=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new C){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new C){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ja=class extends dn{constructor(t=new st,e=new st,n=new st){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new st){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Zs(t,s.x,r.x,a.x),Zs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yr=class extends dn{constructor(t=new C,e=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new C){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Zs(t,s.x,r.x,a.x),Zs(t,s.y,r.y,a.y),Zs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qa=class extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new st){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(eu(o,l.x,c.x,h.x,f.x),eu(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new st().fromArray(s))}return this}},Bf=Object.freeze({__proto__:null,ArcCurve:Ya,CatmullRomCurve3:Ni,CubicBezierCurve:Za,CubicBezierCurve3:$a,EllipseCurve:vr,LineCurve:Ja,LineCurve3:Ka,QuadraticBezierCurve:ja,QuadraticBezierCurve3:yr,SplineCurve:Qa});var Mr=class i extends _r{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var br=class i extends _r{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}},$e=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let E=p*u-a;for(let b=0;b<c;b++){let v=b*f-r;g.push(v,-E,0),y.push(0,0,1),m.push(b/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let b=E+c*p,v=E+c*(p+1),T=E+1+c*(p+1),S=E+1+c*p;d.push(b,v,S),d.push(v,T,S)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Sr=class i extends fe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],f=t,u=(e-t)/s,d=new C,g=new st;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let E=p+m,b=E,v=E+n+1,T=E+n+2,S=E+1;o.push(b,v,S),o.push(v,T,S)}}this.setIndex(o),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Fi=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new C,u=new C,d=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let E=[],b=p/n,v=a+b*o,T=t*Math.cos(v),S=Math.sqrt(t*t-T*T),R=0;p===0&&a===0?R=.5/e:p===n&&l===Math.PI&&(R=-.5/e);for(let _=0;_<=e;_++){let w=_/e,P=s+w*r;f.x=-S*Math.cos(P),f.y=T,f.z=S*Math.sin(P),g.push(f.x,f.y,f.z),u.copy(f).normalize(),y.push(u.x,u.y,u.z),m.push(w+R,1-b),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let b=h[p][E+1],v=h[p][E],T=h[p+1][E],S=h[p+1][E+1];(p!==0||a>0)&&d.push(b,v,S),(p!==n-1||l<Math.PI)&&d.push(v,T,S)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(y,3)),this.setAttribute("uv",new Xt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bn=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new C,d=new C,g=new C;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let E=p/s*r;d.x=(t+e*Math.cos(m))*Math.cos(E),d.y=(t+e*Math.cos(m))*Math.sin(E),d.z=e*Math.sin(m),c.push(d.x,d.y,d.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(p/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,E=(s+1)*(y-1)+m-1,b=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(p,E,v),l.push(E,b,v)}this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ms=class i extends fe{constructor(t=new yr(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new C,l=new C,c=new st,h=new C,f=[],u=[],d=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new Xt(f,3)),this.setAttribute("normal",new Xt(u,3)),this.setAttribute("uv",new Xt(d,2));function y(){for(let b=0;b<e;b++)m(b);m(r===!1?e:0),E(),p()}function m(b){h=t.getPointAt(b/e,h);let v=a.normals[b],T=a.binormals[b];for(let S=0;S<=s;S++){let R=S/s*Math.PI*2,_=Math.sin(R),w=-Math.cos(R);l.x=w*v.x+_*T.x,l.y=w*v.y+_*T.y,l.z=w*v.z+_*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function p(){for(let b=1;b<=e;b++)for(let v=1;v<=s;v++){let T=(s+1)*(b-1)+(v-1),S=(s+1)*b+(v-1),R=(s+1)*b+v,_=(s+1)*(b-1)+v;g.push(T,S,_),g.push(S,R,_)}}function E(){for(let b=0;b<=e;b++)for(let v=0;v<=s;v++)c.x=b/e,c.y=v/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new Bf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Vi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(nu(s))s.isRenderTargetTexture?(Rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(nu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=Vi(i[e]);for(let s in n)t[s]=n[s]}return t}function nu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function zf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}var zn={clone:Vi,merge:Ke},kf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,me=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kf,this.fragmentShader=Vf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vi(t.uniforms),this.uniformsGroups=zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new It().setHex(s.value);break;case"v2":this.uniforms[n].value=new st().fromArray(s.value);break;case"v3":this.uniforms[n].value=new C().fromArray(s.value);break;case"v4":this.uniforms[n].value=new pe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ee().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},to=class extends me{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Oi=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new It(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=nl,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var eo=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},no=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ma(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}var mi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},io=class extends mi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rc,endingEnd:rc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case ac:r=t,o=2*e-n;break;case oc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ac:a=t,l=2*n-e;break;case oc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,E=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,b=(-1-d)*m+(1.5+d)*y+.5*g,v=d*m-d*y;for(let T=0;T!==o;++T)r[T]=p*a[h+T]+E*a[c+T]+b*a[l+T]+v*a[f+T];return r}},so=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},ro=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ao=class extends mi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=d*u+g*2,E=f[p],b=f[p+1],v=t*u+g*2,T=h[v],S=h[v+1],R=(n-e)/(s-e),_,w,P,I,U;for(let W=0;W<8;W++){_=R*R,w=_*R,P=1-R,I=P*P,U=I*P;let O=U*e+3*I*R*E+3*P*_*T+w*s-n;if(Math.abs(O)<1e-10)break;let G=3*I*(E-e)+6*P*R*(T-E)+3*_*(s-T);if(Math.abs(G)<1e-10)break;R=R-O/G,R=Math.max(0,Math.min(1,R))}r[g]=U*y+3*I*R*b+3*P*_*S+w*m}return r}},cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ma(e,this.TimeBufferType),this.values=Ma(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ma(t.times,Array),values:Ma(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ro(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new so(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new io(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ao(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Js:e=this.InterpolantFactoryMethodDiscrete;break;case Oa:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break;case sc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Rt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Js;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return Ea;case this.InterpolantFactoryMethodBezier:return sc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Lt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Lt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Lt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Lt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Zd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Lt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ea,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let y=e[f+g];if(y!==e[u+g]||y!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=Oa;var gi=class extends cn{constructor(t,e,n){super(t,e,n)}};gi.prototype.ValueTypeName="bool";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Js;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};oo.prototype.ValueTypeName="color";var lo=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};lo.prototype.ValueTypeName="number";var co=class extends mi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Fn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Er=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}};Er.prototype.ValueTypeName="quaternion";Er.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends cn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=Js;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var ho=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};ho.prototype.ValueTypeName="vector";var Ta={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(iu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!iu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function iu(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var bs=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Zu=new bs,Ss=class{constructor(t){this.manager=t!==void 0?t:Zu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ss.DEFAULT_MATERIAL_NAME="__DEFAULT";var ls=new WeakMap,uo=class extends Ss{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Ta.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let f=ls.get(a);f===void 0&&(f=[],ls.set(a,f)),f.push({onLoad:e,onError:s})}return a}let o=fs("img");function l(){h(),e&&e(this);let f=ls.get(this)||[];for(let u=0;u<f.length;u++){let d=f[u];d.onLoad&&d.onLoad(this)}ls.delete(this),r.manager.itemEnd(t)}function c(f){h(),s&&s(f),Ta.remove(`image:${t}`);let u=ls.get(this)||[];for(let d=0;d<u.length;d++){let g=u[d];g.onError&&g.onError(f)}ls.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ta.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var Tr=class extends Ss{constructor(t){super(t)}load(t,e,n,s){let r=new Ze,a=new uo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},wr=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var ic=new ee,su=new C,ru=new C,hc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;su.setFromMatrixPosition(t.matrixWorld),e.position.copy(su),ru.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ru),e.updateMatrixWorld(),ic.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ic,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===ds||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ic)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ba=new C,Sa=new Fn,In=new C,Ar=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ba,Sa,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Sa,In.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ba,Sa,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ba,Sa,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new C,au=new st,ou=new st,Ge=class extends Ar{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ms*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,au,ou),e.subVectors(ou,au)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var uc=class extends hc{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0}},Bi=class extends wr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new uc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},zi=class extends Ar{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Rr=class extends wr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var cs=-90,hs=1,fo=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ge(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new Ge(cs,hs,t,e);r.layers=this.layers,this.add(r);let a=new Ge(cs,hs,t,e);a.layers=this.layers,this.add(a);let o=new Ge(cs,hs,t,e);o.layers=this.layers,this.add(o);let l=new Ge(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new Ge(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ds)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},po=class extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Cr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=Hf.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Hf(){this._document.hidden===!1&&this.reset()}var Oc="\\[\\]\\.:\\/",Gf=new RegExp("["+Oc+"]","g"),Bc="[^"+Oc+"]",Wf="[^"+Oc.replace("\\.","")+"]",Xf=/((?:WC+[\/:])*)/.source.replace("WC",Bc),qf=/(WCOD+)?/.source.replace("WCOD",Wf),Yf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bc),Zf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bc),$f=new RegExp("^"+Xf+qf+Yf+Zf+"$"),Jf=["material","materials","bones","map"],dc=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Gf,"")}static parseTrackName(t){let e=$f.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Jf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Rt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Lt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Lt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Lt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Lt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Lt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Lt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Lt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Lt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=dc;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j1=new Float32Array(1);var lu=new ee,Pr=class{constructor(t,e,n=0,s=1/0){this.ray=new Di(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Lt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return lu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(lu),this}intersectObject(t,e=!0,n=[]){return fc(t,this,n,e),n.sort(cu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)fc(t[s],this,n,e);return n.sort(cu),n}};function cu(i,t){return i.distance-t.distance}function fc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)fc(r[a],t,e,!0)}}var Ir=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Rt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};var Wc=class Wc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Wc.prototype.isMatrix2=!0;var pc=Wc;function zc(i,t,e,n){let s=Kf(n);switch(e){case Pc:return i*t;case bo:return i*t/s.components*s.byteLength;case So:return i*t/s.components*s.byteLength;case Mi:return i*t*2/s.components*s.byteLength;case Eo:return i*t*2/s.components*s.byteLength;case Ic:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case To:return i*t*4/s.components*s.byteLength;case Fr:case Or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:case Co:return Math.max(i,16)*Math.max(t,8)/4;case wo:case Ro:return Math.max(i,8)*Math.max(t,8)/2;case Po:case Io:case Do:case Uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Lo:case kr:case No:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Oo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Go:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Zo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Jo:case Ko:case jo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qo:case tl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vr:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kf(i){switch(i){case sn:case wc:return{byteLength:1,components:1};case Ts:case Ac:case Je:return{byteLength:2,components:1};case yo:case Mo:return{byteLength:2,components:4};case En:case vo:case pn:return{byteLength:4,components:1};case Rc:case Cc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"185"}}));typeof window<"u"&&(window.__THREE__?Rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="185");function xd(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Qf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let y=f[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ep=`#ifdef USE_ALPHAHASH
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
#endif`,np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ap=`#ifdef USE_AOMAP
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
#endif`,op=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lp=`#ifdef USE_BATCHING
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
#endif`,cp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,up=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fp=`#ifdef USE_IRIDESCENCE
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
#endif`,pp=`#ifdef USE_BUMPMAP
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
#endif`,mp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,bp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Sp=`#define PI 3.141592653589793
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
} // validated`,Ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Tp=`vec3 transformedNormal = objectNormal;
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
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ap=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ip=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Up=`#ifdef USE_ENVMAP
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
#endif`,Np=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fp=`#ifdef USE_ENVMAP
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
#endif`,Op=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vp=`#ifdef USE_GRADIENTMAP
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
}`,Hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,qp=`#ifdef USE_ENVMAP
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
	#endif
#endif`,Yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kp=`PhysicalMaterial material;
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
#endif`,jp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
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
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
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
}`,Qp=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
#endif`,tm=`#if defined( RE_IndirectDiffuse )
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
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,em=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,am=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,hm=`#if defined( USE_POINTS_UV )
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
#endif`,um=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gm=`#ifdef USE_MORPHTARGETS
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
#endif`,xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_m=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,vm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Sm=`#ifdef USE_NORMALMAP
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
#endif`,Em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Im=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Um=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Om=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Bm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,zm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
}`,km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vm=`#ifdef USE_SKINNING
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
#endif`,Hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gm=`#ifdef USE_SKINNING
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
#endif`,Wm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ym=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zm=`#ifdef USE_TRANSMISSION
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
#endif`,$m=`#ifdef USE_TRANSMISSION
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
#endif`,Jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Km=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,t0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,e0=`uniform sampler2D t2D;
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
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,r0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`#include <common>
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
}`,o0=`#if DEPTH_PACKING == 3200
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
}`,l0=`#define DISTANCE
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
}`,c0=`#define DISTANCE
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
}`,h0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,u0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`uniform float scale;
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
}`,f0=`uniform vec3 diffuse;
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
}`,p0=`#include <common>
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#define LAMBERT
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
}`,x0=`#define LAMBERT
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
}`,_0=`#define MATCAP
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
}`,v0=`#define MATCAP
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
}`,y0=`#define NORMAL
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
}`,M0=`#define NORMAL
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
}`,b0=`#define PHONG
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
}`,S0=`#define PHONG
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
}`,E0=`#define STANDARD
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
}`,T0=`#define STANDARD
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
}`,w0=`#define TOON
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
}`,A0=`#define TOON
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
}`,R0=`uniform float size;
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
}`,C0=`uniform vec3 diffuse;
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
}`,P0=`#include <common>
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
}`,I0=`uniform vec3 color;
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
}`,L0=`uniform float rotation;
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
}`,D0=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:tp,alphahash_pars_fragment:ep,alphamap_fragment:np,alphamap_pars_fragment:ip,alphatest_fragment:sp,alphatest_pars_fragment:rp,aomap_fragment:ap,aomap_pars_fragment:op,batching_pars_vertex:lp,batching_vertex:cp,begin_vertex:hp,beginnormal_vertex:up,bsdfs:dp,iridescence_fragment:fp,bumpmap_pars_fragment:pp,clipping_planes_fragment:mp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:xp,clipping_planes_vertex:_p,color_fragment:vp,color_pars_fragment:yp,color_pars_vertex:Mp,color_vertex:bp,common:Sp,cube_uv_reflection_fragment:Ep,defaultnormal_vertex:Tp,displacementmap_pars_vertex:wp,displacementmap_vertex:Ap,emissivemap_fragment:Rp,emissivemap_pars_fragment:Cp,colorspace_fragment:Pp,colorspace_pars_fragment:Ip,envmap_fragment:Lp,envmap_common_pars_fragment:Dp,envmap_pars_fragment:Up,envmap_pars_vertex:Np,envmap_physical_pars_fragment:qp,envmap_vertex:Fp,fog_vertex:Op,fog_pars_vertex:Bp,fog_fragment:zp,fog_pars_fragment:kp,gradientmap_pars_fragment:Vp,lightmap_pars_fragment:Hp,lights_lambert_fragment:Gp,lights_lambert_pars_fragment:Wp,lights_pars_begin:Xp,lights_toon_fragment:Yp,lights_toon_pars_fragment:Zp,lights_phong_fragment:$p,lights_phong_pars_fragment:Jp,lights_physical_fragment:Kp,lights_physical_pars_fragment:jp,lights_fragment_begin:Qp,lights_fragment_maps:tm,lights_fragment_end:em,lightprobes_pars_fragment:nm,logdepthbuf_fragment:im,logdepthbuf_pars_fragment:sm,logdepthbuf_pars_vertex:rm,logdepthbuf_vertex:am,map_fragment:om,map_pars_fragment:lm,map_particle_fragment:cm,map_particle_pars_fragment:hm,metalnessmap_fragment:um,metalnessmap_pars_fragment:dm,morphinstance_vertex:fm,morphcolor_vertex:pm,morphnormal_vertex:mm,morphtarget_pars_vertex:gm,morphtarget_vertex:xm,normal_fragment_begin:_m,normal_fragment_maps:vm,normal_pars_fragment:ym,normal_pars_vertex:Mm,normal_vertex:bm,normalmap_pars_fragment:Sm,clearcoat_normal_fragment_begin:Em,clearcoat_normal_fragment_maps:Tm,clearcoat_pars_fragment:wm,iridescence_pars_fragment:Am,opaque_fragment:Rm,packing:Cm,premultiplied_alpha_fragment:Pm,project_vertex:Im,dithering_fragment:Lm,dithering_pars_fragment:Dm,roughnessmap_fragment:Um,roughnessmap_pars_fragment:Nm,shadowmap_pars_fragment:Fm,shadowmap_pars_vertex:Om,shadowmap_vertex:Bm,shadowmask_pars_fragment:zm,skinbase_vertex:km,skinning_pars_vertex:Vm,skinning_vertex:Hm,skinnormal_vertex:Gm,specularmap_fragment:Wm,specularmap_pars_fragment:Xm,tonemapping_fragment:qm,tonemapping_pars_fragment:Ym,transmission_fragment:Zm,transmission_pars_fragment:$m,uv_pars_fragment:Jm,uv_pars_vertex:Km,uv_vertex:jm,worldpos_vertex:Qm,background_vert:t0,background_frag:e0,backgroundCube_vert:n0,backgroundCube_frag:i0,cube_vert:s0,cube_frag:r0,depth_vert:a0,depth_frag:o0,distance_vert:l0,distance_frag:c0,equirect_vert:h0,equirect_frag:u0,linedashed_vert:d0,linedashed_frag:f0,meshbasic_vert:p0,meshbasic_frag:m0,meshlambert_vert:g0,meshlambert_frag:x0,meshmatcap_vert:_0,meshmatcap_frag:v0,meshnormal_vert:y0,meshnormal_frag:M0,meshphong_vert:b0,meshphong_frag:S0,meshphysical_vert:E0,meshphysical_frag:T0,meshtoon_vert:w0,meshtoon_frag:A0,points_vert:R0,points_frag:C0,shadow_vert:P0,shadow_frag:I0,sprite_vert:L0,sprite_frag:D0},dt={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new C},probesMax:{value:new C},probesResolution:{value:new C}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},Vn={basic:{uniforms:Ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new It(0)},envMapIntensity:{value:1}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ke([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ke([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ke([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new It(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ke([dt.points,dt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ke([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ke([dt.common,dt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ke([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ke([dt.sprite,dt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distance:{uniforms:Ke([dt.common,dt.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distance_vert,fragmentShader:Ht.distance_frag},shadow:{uniforms:Ke([dt.lights,dt.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Vn.physical={uniforms:Ke([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var rl={r:0,b:0,g:0},U0=new ee,_d=new Ot;_d.set(-1,0,0,0,1,0,0,0,1);function N0(i,t,e,n,s,r){let a=new It(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(E){let b=E.isScene===!0?E.background:null;if(b&&b.isTexture){let v=E.backgroundBlurriness>0;b=t.get(b,v)}return b}function g(E){let b=!1,v=d(E);v===null?m(a,o):v&&v.isColor&&(m(v,1),b=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,b){let v=d(b);v&&(v.isCubeTexture||v.mapping===Ur)?(c===void 0&&(c=new Nt(new ln(1,1,1),new me({name:"BackgroundCubeMaterial",uniforms:Vi(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(U0.makeRotationFromEuler(b.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(_d),c.material.toneMapped=Yt.getTransfer(v.colorSpace)!==ne,(h!==v||f!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Nt(new $e(2,2),new me({name:"BackgroundMaterial",uniforms:Vi(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(v.colorSpace)!==ne,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,f=v.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,b){E.getRGB(rl,Fc(i)),e.buffers.color.setClear(rl.r,rl.g,rl.b,b,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),o=b,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:y,dispose:p}}function F0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(I,U,W,q,O){let G=!1,H=f(I,q,W,U);r!==H&&(r=H,c(r.object)),G=d(I,q,W,O),G&&g(I,q,W,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(I,U,W,q),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function h(I){return i.deleteVertexArray(I)}function f(I,U,W,q){let O=q.wireframe===!0,G=n[U.id];G===void 0&&(G={},n[U.id]=G);let H=I.isInstancedMesh===!0?I.id:0,K=G[H];K===void 0&&(K={},G[H]=K);let Q=K[W.id];Q===void 0&&(Q={},K[W.id]=Q);let ft=Q[O];return ft===void 0&&(ft=u(l()),Q[O]=ft),ft}function u(I){let U=[],W=[],q=[];for(let O=0;O<e;O++)U[O]=0,W[O]=0,q[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:W,attributeDivisors:q,object:I,attributes:{},index:null}}function d(I,U,W,q){let O=r.attributes,G=U.attributes,H=0,K=W.getAttributes();for(let Q in K)if(K[Q].location>=0){let xt=O[Q],yt=G[Q];if(yt===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(yt=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(yt=I.instanceColor)),xt===void 0||xt.attribute!==yt||yt&&xt.data!==yt.data)return!0;H++}return r.attributesNum!==H||r.index!==q}function g(I,U,W,q){let O={},G=U.attributes,H=0,K=W.getAttributes();for(let Q in K)if(K[Q].location>=0){let xt=G[Q];xt===void 0&&(Q==="instanceMatrix"&&I.instanceMatrix&&(xt=I.instanceMatrix),Q==="instanceColor"&&I.instanceColor&&(xt=I.instanceColor));let yt={};yt.attribute=xt,xt&&xt.data&&(yt.data=xt.data),O[Q]=yt,H++}r.attributes=O,r.attributesNum=H,r.index=q}function y(){let I=r.newAttributes;for(let U=0,W=I.length;U<W;U++)I[U]=0}function m(I){p(I,0)}function p(I,U){let W=r.newAttributes,q=r.enabledAttributes,O=r.attributeDivisors;W[I]=1,q[I]===0&&(i.enableVertexAttribArray(I),q[I]=1),O[I]!==U&&(i.vertexAttribDivisor(I,U),O[I]=U)}function E(){let I=r.newAttributes,U=r.enabledAttributes;for(let W=0,q=U.length;W<q;W++)U[W]!==I[W]&&(i.disableVertexAttribArray(W),U[W]=0)}function b(I,U,W,q,O,G,H){H===!0?i.vertexAttribIPointer(I,U,W,O,G):i.vertexAttribPointer(I,U,W,q,O,G)}function v(I,U,W,q){y();let O=q.attributes,G=W.getAttributes(),H=U.defaultAttributeValues;for(let K in G){let Q=G[K];if(Q.location>=0){let ft=O[K];if(ft===void 0&&(K==="instanceMatrix"&&I.instanceMatrix&&(ft=I.instanceMatrix),K==="instanceColor"&&I.instanceColor&&(ft=I.instanceColor)),ft!==void 0){let xt=ft.normalized,yt=ft.itemSize,jt=t.get(ft);if(jt===void 0)continue;let xe=jt.buffer,Qt=jt.type,J=jt.bytesPerElement,at=Qt===i.INT||Qt===i.UNSIGNED_INT||ft.gpuType===vo;if(ft.isInterleavedBufferAttribute){let tt=ft.data,Ft=tt.stride,zt=ft.offset;if(tt.isInstancedInterleavedBuffer){for(let Dt=0;Dt<Q.locationSize;Dt++)p(Q.location+Dt,tt.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let Dt=0;Dt<Q.locationSize;Dt++)m(Q.location+Dt);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let Dt=0;Dt<Q.locationSize;Dt++)b(Q.location+Dt,yt/Q.locationSize,Qt,xt,Ft*J,(zt+yt/Q.locationSize*Dt)*J,at)}else{if(ft.isInstancedBufferAttribute){for(let tt=0;tt<Q.locationSize;tt++)p(Q.location+tt,ft.meshPerAttribute);I.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let tt=0;tt<Q.locationSize;tt++)m(Q.location+tt);i.bindBuffer(i.ARRAY_BUFFER,xe);for(let tt=0;tt<Q.locationSize;tt++)b(Q.location+tt,yt/Q.locationSize,Qt,xt,yt*J,yt/Q.locationSize*tt*J,at)}}else if(H!==void 0){let xt=H[K];if(xt!==void 0)switch(xt.length){case 2:i.vertexAttrib2fv(Q.location,xt);break;case 3:i.vertexAttrib3fv(Q.location,xt);break;case 4:i.vertexAttrib4fv(Q.location,xt);break;default:i.vertexAttrib1fv(Q.location,xt)}}}}E()}function T(){w();for(let I in n){let U=n[I];for(let W in U){let q=U[W];for(let O in q){let G=q[O];for(let H in G)h(G[H].object),delete G[H];delete q[O]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let W in U){let q=U[W];for(let O in q){let G=q[O];for(let H in G)h(G[H].object),delete G[H];delete q[O]}}delete n[I.id]}function R(I){for(let U in n){let W=n[U];for(let q in W){let O=W[q];if(O[I.id]===void 0)continue;let G=O[I.id];for(let H in G)h(G[H].object),delete G[H];delete O[I.id]}}}function _(I){for(let U in n){let W=n[U],q=I.isInstancedMesh===!0?I.id:0,O=W[q];if(O!==void 0){for(let G in O){let H=O[G];for(let K in H)h(H[K].object),delete H[K];delete O[G]}delete W[q],Object.keys(W).length===0&&delete n[U]}}}function w(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function O0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function B0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==mn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let _=R===Je&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pn&&!_)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Rt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Rt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:v,maxSamples:T,samples:S}}function z0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Ln,o=new Ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,b=E*4,v=p.clippingState||null;l.value=v,v=h(g,u,b,d);for(let T=0;T!==b;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let y=f!==null?f.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=d+y*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=d;b!==y;++b,v+=4)a.copy(f[b]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var bi=4,$u=[.125,.215,.35,.446,.526,.582],Hi=20,k0=256,Hr=new zi,Ju=new It,Xc=null,qc=0,Yc=0,Zc=!1,V0=new C,ol=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=V0}=r;Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ju(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Xc,qc,Yc),this._renderer.xr.enabled=Zc,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_i||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xc=this._renderer.getRenderTarget(),qc=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),Zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:Je,format:mn,colorSpace:Ks,depthBuffer:!1},s=Ku(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ku(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=H0(r)),this._blurMaterial=W0(r,t,e),this._ggxMaterial=G0(r,t,e)}return s}_compileMaterial(t){let e=new Nt(new fe,t);this._renderer.compile(e,Hr)}_sceneToCubeUV(t,e,n,s,r){let l=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Ju),f.toneMapping=Sn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new ln,new $t({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy(Ju),p=!0);for(let b=0;b<6;b++){let v=b%3;v===0?(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[b],r.y,r.z)):v===1?(l.up.set(0,0,c[b]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[b],r.z)):(l.up.set(0,c[b],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[b]));let T=this._cubeSize;As(s,v*T,b>2?T:0,T,T),f.setRenderTarget(s),p&&f.render(y,l),f.render(t,l)}f.toneMapping=d,f.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===_i||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ju());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;As(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Hr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-h*h),u=0+c*1.25,d=f*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-bi?n-g+bi:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,As(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,Hr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,As(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,Hr)}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");let h=3,f=this._lodMeshes[s];f.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Hi-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Hi;m>Hi&&Rt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);let p=[],E=0;for(let R=0;R<Hi;++R){let _=R/y,w=Math.exp(-_*_/2);p.push(w),R===0?E+=w:R<m&&(E+=2*w)}for(let R=0;R<p.length;R++)p[R]=p[R]/E;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:b}=this;u.dTheta.value=g,u.mipInt.value=b-n;let v=this._sizeLods[s],T=3*v*(s>b-bi?s-b+bi:0),S=4*(this._cubeSize-v);As(e,T,S,3*v,2*v),l.setRenderTarget(e),l.render(f,Hr)}};function H0(i){let t=[],e=[],n=[],s=i,r=i-bi+1+$u.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-bi?l=$u[a-i+bi-1]:a===0&&(l=0),e.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,y=3,m=2,p=1,E=new Float32Array(y*g*d),b=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let S=0;S<d;S++){let R=S%3*2/3-1,_=S>2?0:-1,w=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];E.set(w,y*g*S),b.set(u,m*g*S);let P=[S,S,S,S,S,S];v.set(P,p*g*S)}let T=new fe;T.setAttribute("position",new Ie(E,y)),T.setAttribute("uv",new Ie(b,m)),T.setAttribute("faceIndex",new Ie(v,p)),n.push(new Nt(T,null)),s>bi&&s--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ku(i,t,e){let n=new Le(i,t,e);return n.texture.mapping=Ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function G0(i,t,e){return new me({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:k0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:hl(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function W0(i,t,e){let n=new Float32Array(Hi),s=new C(0,1,0);return new me({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function ju(){return new me({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hl(),fragmentShader:`

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
		`,blending:fn,depthTest:!1,depthWrite:!1})}function Qu(){return new me({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:fn,depthTest:!1,depthWrite:!1})}function hl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var ll=class extends Le{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new pr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ln(5,5,5),r=new me({name:"CubemapFromEquirect",uniforms:Vi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:fn});r.uniforms.tEquirect.value=e;let a=new Nt(s,r),o=e.minFilter;return e.minFilter===vi&&(e.minFilter=We),new fo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function X0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===go||d===xo)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new ll(g.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===go||d===xo,y=d===_i||d===ki;if(g||y){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new ol(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return g&&E&&E.height>0||y&&E&&l(E)?(n===null&&(n=new ol(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,d){return d===go?u.mapping=_i:d===xo&&(u.mapping=ki),u}function l(u){let d=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function q0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ii("WebGLRenderer: "+n+" extension not supported."),s}}}function Y0(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(f){let u=[],d=f.index,g=f.attributes.position,y=0;if(g===void 0)return;if(d!==null){let E=d.array;y=d.version;for(let b=0,v=E.length;b<v;b+=3){let T=E[b+0],S=E[b+1],R=E[b+2];u.push(T,S,S,R,R,T)}}else{let E=g.array;y=g.version;for(let b=0,v=E.length/3-1;b<v;b+=3){let T=b+0,S=b+1,R=b+2;u.push(T,S,S,R,R,T)}}let m=new(g.count>=65535?sr:ir)(u,1);m.version=y;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Z0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let y=0;for(let m=0;m<d;m++)y+=u[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function $0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Lt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function J0(i,t,e){let n=new WeakMap,s=new pe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],b=0;d===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let v=o.attributes.position.count*b,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*T*4*f),R=new tr(S,v,T,f);R.type=pn,R.needsUpdate=!0;let _=b*4;for(let P=0;P<f;P++){let I=m[P],U=p[P],W=E[P],q=v*T*4*P;for(let O=0;O<I.count;O++){let G=O*_;d===!0&&(s.fromBufferAttribute(I,O),S[q+G+0]=s.x,S[q+G+1]=s.y,S[q+G+2]=s.z,S[q+G+3]=0),g===!0&&(s.fromBufferAttribute(U,O),S[q+G+4]=s.x,S[q+G+5]=s.y,S[q+G+6]=s.z,S[q+G+7]=0),y===!0&&(s.fromBufferAttribute(W,O),S[q+G+8]=s.x,S[q+G+9]=s.y,S[q+G+10]=s.z,S[q+G+11]=W.itemSize===4?s.w:1)}}u={count:f,texture:R,size:new st(v,T)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function K0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var j0={[vc]:"LINEAR_TONE_MAPPING",[yc]:"REINHARD_TONE_MAPPING",[Mc]:"CINEON_TONE_MAPPING",[Dr]:"ACES_FILMIC_TONE_MAPPING",[Sc]:"AGX_TONE_MAPPING",[Ec]:"NEUTRAL_TONE_MAPPING",[bc]:"CUSTOM_TONE_MAPPING"};function Q0(i,t,e,n,s,r){let a=new Le(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,depthTexture:s?new ei(t,e):void 0}),o=new Le(t,e,{type:Je,depthBuffer:!1,stencilBuffer:!1}),l=new fe;l.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Xt([0,2,0,0,2,0],2));let c=new to({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Nt(l,c),f=new zi(-1,1,1,-1,0,1),u=null,d=null,g=!1,y,m=null,p=[],E=!1;this.setSize=function(b,v){a.setSize(b,v),o.setSize(b,v);for(let T=0;T<p.length;T++){let S=p[T];S.setSize&&S.setSize(b,v)}},this.setEffects=function(b){p=b,E=p.length>0&&p[0].isRenderPass===!0;let v=a.width,T=a.height;for(let S=0;S<p.length;S++){let R=p[S];R.setSize&&R.setSize(v,T)}},this.begin=function(b,v){if(g||b.toneMapping===Sn&&p.length===0)return!1;if(m=v,v!==null){let T=v.width,S=v.height;(a.width!==T||a.height!==S)&&this.setSize(T,S)}return E===!1&&b.setRenderTarget(a),y=b.toneMapping,b.toneMapping=Sn,!0},this.hasRenderPass=function(){return E},this.end=function(b,v){b.toneMapping=y,g=!0;let T=a,S=o;for(let R=0;R<p.length;R++){let _=p[R];if(_.enabled!==!1&&(_.render(b,S,T,v),_.needsSwap!==!1)){let w=T;T=S,S=w}}if(u!==b.outputColorSpace||d!==b.toneMapping){u=b.outputColorSpace,d=b.toneMapping,c.defines={},Yt.getTransfer(u)===ne&&(c.defines.SRGB_TRANSFER="");let R=j0[d];R&&(c.defines[R]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=T.texture,b.setRenderTarget(m),b.render(h,f),m=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}var vd=new Ze,Kc=new ei(1,1),yd=new tr,Md=new Va,bd=new pr,td=[],ed=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function Cs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=td[s];if(r===void 0&&(r=new Float32Array(s),td[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function De(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ul(i,t){let e=ed[t];e===void 0&&(e=new Int32Array(t),ed[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function tg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;sd.set(n),i.uniformMatrix2fv(this.addr,!1,sd),Ue(e,n)}}function rg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;id.set(n),i.uniformMatrix3fv(this.addr,!1,id),Ue(e,n)}}function ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;nd.set(n),i.uniformMatrix4fv(this.addr,!1,nd),Ue(e,n)}}function og(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function ug(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Kc.compareFunction=e.isReversedDepthBuffer()?sl:il,r=Kc):r=vd,e.setTexture2D(t||r,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Md,s)}function xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||bd,s)}function _g(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yd,s)}function vg(i){switch(i){case 5126:return tg;case 35664:return eg;case 35665:return ng;case 35666:return ig;case 35674:return sg;case 35675:return rg;case 35676:return ag;case 5124:case 35670:return og;case 35667:case 35671:return lg;case 35668:case 35672:return cg;case 35669:case 35673:return hg;case 5125:return ug;case 36294:return dg;case 36295:return fg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return mg;case 35679:case 36299:case 36307:return gg;case 35680:case 36300:case 36308:case 36293:return xg;case 36289:case 36303:case 36311:case 36292:return _g}}function yg(i,t){i.uniform1fv(this.addr,t)}function Mg(i,t){let e=Cs(t,this.size,2);i.uniform2fv(this.addr,e)}function bg(i,t){let e=Cs(t,this.size,3);i.uniform3fv(this.addr,e)}function Sg(i,t){let e=Cs(t,this.size,4);i.uniform4fv(this.addr,e)}function Eg(i,t){let e=Cs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tg(i,t){let e=Cs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function wg(i,t){let e=Cs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Ag(i,t){i.uniform1iv(this.addr,t)}function Rg(i,t){i.uniform2iv(this.addr,t)}function Cg(i,t){i.uniform3iv(this.addr,t)}function Pg(i,t){i.uniform4iv(this.addr,t)}function Ig(i,t){i.uniform1uiv(this.addr,t)}function Lg(i,t){i.uniform2uiv(this.addr,t)}function Dg(i,t){i.uniform3uiv(this.addr,t)}function Ug(i,t){i.uniform4uiv(this.addr,t)}function Ng(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Kc:a=vd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Fg(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Md,r[a])}function Og(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||bd,r[a])}function Bg(i,t,e){let n=this.cache,s=t.length,r=ul(e,s);De(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yd,r[a])}function zg(i){switch(i){case 5126:return yg;case 35664:return Mg;case 35665:return bg;case 35666:return Sg;case 35674:return Eg;case 35675:return Tg;case 35676:return wg;case 5124:case 35670:return Ag;case 35667:case 35671:return Rg;case 35668:case 35672:return Cg;case 35669:case 35673:return Pg;case 5125:return Ig;case 36294:return Lg;case 36295:return Dg;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Ng;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Og;case 36289:case 36303:case 36311:case 36292:return Bg}}var jc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=vg(e.type)}},Qc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=zg(e.type)}},th=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},$c=/(\w+)(\])?(\[|\.)?/g;function rd(i,t){i.seq.push(t),i.map[t.id]=t}function kg(i,t,e){let n=i.name,s=n.length;for($c.lastIndex=0;;){let r=$c.exec(n),a=$c.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){rd(e,c===void 0?new jc(o,i,t):new Qc(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new th(o),rd(e,f)),e=f}}}var Rs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);kg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function ad(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Vg=37297,Hg=0;function Gg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var od=new Ot;function Wg(i){Yt._getMatrix(od,Yt.workingColorSpace,i);let t=`mat3( ${od.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(i)){case js:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return Rt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ld(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Gg(i.getShaderSource(t),o)}else return r}function Xg(i,t){let e=Wg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var qg={[vc]:"Linear",[yc]:"Reinhard",[Mc]:"Cineon",[Dr]:"ACESFilmic",[Sc]:"AgX",[Ec]:"Neutral",[bc]:"Custom"};function Yg(i,t){let e=qg[t];return e===void 0?(Rt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var al=new C;function Zg(){Yt.getLuminanceCoefficients(al);let i=al.x.toFixed(4),t=al.y.toFixed(4),e=al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $g(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wr).join(`
`)}function Jg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Wr(i){return i!==""}function cd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var jg=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(i){return i.replace(jg,t1)}var Qg=new Map;function t1(i,t){let e=Ht[t];if(e===void 0){let n=Qg.get(t);if(n!==void 0)e=Ht[n],Rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return eh(e)}var e1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(i){return i.replace(e1,n1)}function n1(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function dd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var i1={[Lr]:"SHADOWMAP_TYPE_PCF",[Es]:"SHADOWMAP_TYPE_VSM"};function s1(i){return i1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var r1={[_i]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[Ur]:"ENVMAP_TYPE_CUBE_UV"};function a1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":r1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var o1={[ki]:"ENVMAP_MODE_REFRACTION"};function l1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":o1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var c1={[_c]:"ENVMAP_BLENDING_MULTIPLY",[Iu]:"ENVMAP_BLENDING_MIX",[Lu]:"ENVMAP_BLENDING_ADD"};function h1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":c1[i.combine]||"ENVMAP_BLENDING_NONE"}function u1(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function d1(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=s1(e),c=a1(e),h=l1(e),f=h1(e),u=u1(e),d=$g(e),g=Jg(r),y=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Wr).join(`
`),p.length>0&&(p+=`
`)):(m=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wr).join(`
`),p=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Xg("linearToOutputTexel",e.outputColorSpace),Zg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Wr).join(`
`)),a=eh(a),a=cd(a,e),a=hd(a,e),o=eh(o),o=cd(o,e),o=hd(o,e),a=ud(a),o=ud(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=E+m+a,v=E+p+o,T=ad(s,s.VERTEX_SHADER,b),S=ad(s,s.FRAGMENT_SHADER,v);s.attachShader(y,T),s.attachShader(y,S),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(I){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(y)||"",W=s.getShaderInfoLog(T)||"",q=s.getShaderInfoLog(S)||"",O=U.trim(),G=W.trim(),H=q.trim(),K=!0,Q=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,T,S);else{let ft=ld(s,T,"vertex"),xt=ld(s,S,"fragment");Lt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+ft+`
`+xt)}else O!==""?Rt("WebGLProgram: Program Info Log:",O):(G===""||H==="")&&(Q=!1);Q&&(I.diagnostics={runnable:K,programLog:O,vertexShader:{log:G,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(T),s.deleteShader(S),_=new Rs(s,y),w=Kg(s,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,Vg)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=S,this}var f1=0,nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ih(t),e.set(t,n)),n}},ih=class{constructor(t){this.id=f1++,this.code=t,this.usedTimes=0}};function p1(i){return i===Mi||i===kr||i===Vr}function m1(i,t,e,n,s,r){let a=new xs,o=new nh,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,w,P,I,U,W){let q=I.fog,O=U.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,K=t.get(_.envMap||G,H),Q=K&&K.mapping===Ur?K.image.height:null,ft=d[_.type];_.precision!==null&&(u=n.getMaxPrecision(_.precision),u!==_.precision&&Rt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let xt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,yt=xt!==void 0?xt.length:0,jt=0;O.morphAttributes.position!==void 0&&(jt=1),O.morphAttributes.normal!==void 0&&(jt=2),O.morphAttributes.color!==void 0&&(jt=3);let xe,Qt,J,at;if(ft){let Mt=Vn[ft];xe=Mt.vertexShader,Qt=Mt.fragmentShader}else{xe=_.vertexShader,Qt=_.fragmentShader;let Mt=o.getVertexShaderStage(_),ve=o.getFragmentShaderStage(_);o.update(_,Mt,ve),J=Mt.id,at=ve.id}let tt=i.getRenderTarget(),Ft=i.state.buffers.depth.getReversed(),zt=U.isInstancedMesh===!0,Dt=U.isBatchedMesh===!0,Me=!!_.map,qt=!!_.matcap,oe=!!K,te=!!_.aoMap,Jt=!!_.lightMap,we=!!_.bumpMap&&_.wireframe===!1,Pe=!!_.normalMap,Fe=!!_.displacementMap,Ve=!!_.emissiveMap,_e=!!_.metalnessMap,Ae=!!_.roughnessMap,D=_.anisotropy>0,en=_.clearcoat>0,ie=_.dispersion>0,A=_.iridescence>0,x=_.sheen>0,F=_.transmission>0,k=D&&!!_.anisotropyMap,X=en&&!!_.clearcoatMap,it=en&&!!_.clearcoatNormalMap,ot=en&&!!_.clearcoatRoughnessMap,Y=A&&!!_.iridescenceMap,$=A&&!!_.iridescenceThicknessMap,lt=x&&!!_.sheenColorMap,Et=x&&!!_.sheenRoughnessMap,ut=!!_.specularMap,ct=!!_.specularColorMap,Pt=!!_.specularIntensityMap,Ut=F&&!!_.transmissionMap,kt=F&&!!_.thicknessMap,L=!!_.gradientMap,rt=!!_.alphaMap,Z=_.alphaTest>0,ht=!!_.alphaHash,gt=!!_.extensions,j=Sn;_.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(j=i.toneMapping);let St={shaderID:ft,shaderType:_.type,shaderName:_.name,vertexShader:xe,fragmentShader:Qt,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:at,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:Dt,batchingColor:Dt&&U._colorsTexture!==null,instancing:zt,instancingColor:zt&&U.instanceColor!==null,instancingMorph:zt&&U.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Yt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Me,matcap:qt,envMap:oe,envMapMode:oe&&K.mapping,envMapCubeUVHeight:Q,aoMap:te,lightMap:Jt,bumpMap:we,normalMap:Pe,displacementMap:Fe,emissiveMap:Ve,normalMapObjectSpace:Pe&&_.normalMapType===Nu,normalMapTangentSpace:Pe&&_.normalMapType===nl,packedNormalMap:Pe&&_.normalMapType===nl&&p1(_.normalMap.format),metalnessMap:_e,roughnessMap:Ae,anisotropy:D,anisotropyMap:k,clearcoat:en,clearcoatMap:X,clearcoatNormalMap:it,clearcoatRoughnessMap:ot,dispersion:ie,iridescence:A,iridescenceMap:Y,iridescenceThicknessMap:$,sheen:x,sheenColorMap:lt,sheenRoughnessMap:Et,specularMap:ut,specularColorMap:ct,specularIntensityMap:Pt,transmission:F,transmissionMap:Ut,thicknessMap:kt,gradientMap:L,opaque:_.transparent===!1&&_.blending===Qn&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:Z,alphaHash:ht,combine:_.combine,mapUv:Me&&g(_.map.channel),aoMapUv:te&&g(_.aoMap.channel),lightMapUv:Jt&&g(_.lightMap.channel),bumpMapUv:we&&g(_.bumpMap.channel),normalMapUv:Pe&&g(_.normalMap.channel),displacementMapUv:Fe&&g(_.displacementMap.channel),emissiveMapUv:Ve&&g(_.emissiveMap.channel),metalnessMapUv:_e&&g(_.metalnessMap.channel),roughnessMapUv:Ae&&g(_.roughnessMap.channel),anisotropyMapUv:k&&g(_.anisotropyMap.channel),clearcoatMapUv:X&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:it&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:$&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Et&&g(_.sheenRoughnessMap.channel),specularMapUv:ut&&g(_.specularMap.channel),specularColorMapUv:ct&&g(_.specularColorMap.channel),specularIntensityMapUv:Pt&&g(_.specularIntensityMap.channel),transmissionMapUv:Ut&&g(_.transmissionMap.channel),thicknessMapUv:kt&&g(_.thicknessMap.channel),alphaMapUv:rt&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Pe||D),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!O.attributes.uv&&(Me||rt),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&Pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ft,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:jt,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:j,decodeVideoTexture:Me&&_.map.isVideoTexture===!0&&Yt.getTransfer(_.map.colorSpace)===ne,decodeVideoTextureEmissive:Ve&&_.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(_.emissiveMap.colorSpace)===ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===nn,flipSided:_.side===Qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:gt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(gt&&_.extensions.multiDraw===!0||Dt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return St.vertexUv1s=l.has(1),St.vertexUv2s=l.has(2),St.vertexUv3s=l.has(3),l.clear(),St}function m(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)w.push(P),w.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(w,_),E(w,_),w.push(i.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function p(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function E(_,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function b(_){let w=d[_.type],P;if(w){let I=Vn[w];P=zn.clone(I.uniforms)}else P=_.uniforms;return P}function v(_,w){let P=h.get(w);return P!==void 0?++P.usedTimes:(P=new d1(i,w,_,s),c.push(P),h.set(w,P)),P}function T(_){if(--_.usedTimes===0){let w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function S(_){o.remove(_)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:b,acquireProgram:v,releaseProgram:T,releaseShaderCache:S,programs:c,dispose:R}}function g1(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function x1(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,y,m,p){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[t]=E):(E.id=u.id,E.object=u,E.geometry=d,E.material=g,E.materialVariant=a(u),E.groupOrder=y,E.renderOrder=u.renderOrder,E.z=m,E.group=p),t++,E}function l(u,d,g,y,m,p){let E=o(u,d,g,y,m,p);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,d,g,y,m,p){let E=o(u,d,g,y,m,p);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,d,g){e.length>1&&e.sort(u||x1),n.length>1&&n.sort(d||fd),s.length>1&&s.sort(d||fd),g&&(e.reverse(),n.reverse(),s.reverse())}function f(){for(let u=t,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function _1(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new pd,i.set(n,[a])):s>=r.length?(a=new pd,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function v1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new C,color:new It};break;case"SpotLight":e={position:new C,direction:new C,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new C,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new C,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new C,halfWidth:new C,halfHeight:new C};break}return i[t.id]=e,e}}}function y1(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var M1=0;function b1(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function S1(i){let t=new v1,e=y1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new ee,a=new ee;function o(c){let h=0,f=0,u=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let d=0,g=0,y=0,m=0,p=0,E=0,b=0,v=0,T=0,S=0,R=0;c.sort(b1);for(let w=0,P=c.length;w<P;w++){let I=c[w],U=I.color,W=I.intensity,q=I.distance,O=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Mi?O=I.shadow.map.texture:O=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=U.r*W,f+=U.g*W,u+=U.b*W;else if(I.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(I.sh.coefficients[G],W);R++}else if(I.isDirectionalLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,K=e.get(I);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.directionalShadow[d]=K,n.directionalShadowMap[d]=O,n.directionalShadowMatrix[d]=I.shadow.matrix,E++}n.directional[d]=G,d++}else if(I.isSpotLight){let G=t.get(I);G.position.setFromMatrixPosition(I.matrixWorld),G.color.copy(U).multiplyScalar(W),G.distance=q,G.coneCos=Math.cos(I.angle),G.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),G.decay=I.decay,n.spot[y]=G;let H=I.shadow;if(I.map&&(n.spotLightMap[T]=I.map,T++,H.updateMatrices(I),I.castShadow&&S++),n.spotLightMatrix[y]=H.matrix,I.castShadow){let K=e.get(I);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,n.spotShadow[y]=K,n.spotShadowMap[y]=O,v++}y++}else if(I.isRectAreaLight){let G=t.get(I);G.color.copy(U).multiplyScalar(W),G.halfWidth.set(I.width*.5,0,0),G.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=G,m++}else if(I.isPointLight){let G=t.get(I);if(G.color.copy(I.color).multiplyScalar(I.intensity),G.distance=I.distance,G.decay=I.decay,I.castShadow){let H=I.shadow,K=e.get(I);K.shadowIntensity=H.intensity,K.shadowBias=H.bias,K.shadowNormalBias=H.normalBias,K.shadowRadius=H.radius,K.shadowMapSize=H.mapSize,K.shadowCameraNear=H.camera.near,K.shadowCameraFar=H.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=O,n.pointShadowMatrix[g]=I.shadow.matrix,b++}n.point[g]=G,g++}else if(I.isHemisphereLight){let G=t.get(I);G.skyColor.copy(I.color).multiplyScalar(W),G.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let _=n.hash;(_.directionalLength!==d||_.pointLength!==g||_.spotLength!==y||_.rectAreaLength!==m||_.hemiLength!==p||_.numDirectionalShadows!==E||_.numPointShadows!==b||_.numSpotShadows!==v||_.numSpotMaps!==T||_.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=v+T-S,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,_.directionalLength=d,_.pointLength=g,_.spotLength=y,_.rectAreaLength=m,_.hemiLength=p,_.numDirectionalShadows=E,_.numPointShadows=b,_.numSpotShadows=v,_.numSpotMaps=T,_.numLightProbes=R,n.version=M1++)}function l(c,h){let f=0,u=0,d=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){let b=c[p];if(b.isDirectionalLight){let v=n.directional[f];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(b.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(b.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(b.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(b.isPointLight){let v=n.point[u];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),u++}else if(b.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function md(i){let t=new S1(i),e=[],n=[],s=[];function r(u){f.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function E1(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new md(i),t.set(s,[o])):r>=a.length?(o=new md(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var T1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,w1=`uniform sampler2D shadow_pass;
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
}`,A1=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],R1=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],gd=new ee,Gr=new C,Jc=new C;function C1(i,t,e){let n=new ys,s=new st,r=new st,a=new pe,o=new eo,l=new no,c={},h=e.maxTextureSize,f={[jn]:Qe,[Qe]:jn,[nn]:nn},u=new me({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:T1,fragmentShader:w1}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new fe;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Nt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lr;let p=this.type;this.render=function(S,R,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===du&&(Rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Lr);let w=i.getRenderTarget(),P=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(fn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let W=p!==this.type;W&&R.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(O=>O.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,O=S.length;q<O;q++){let G=S[q],H=G.shadow;if(H===void 0){Rt("WebGLShadowMap:",G,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let K=H.getFrameExtents();s.multiply(K),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,H.mapSize.y=r.y));let Q=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Q,H.map===null||W===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Es){if(G.isPointLight){Rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Le(s.x,s.y,{format:Mi,type:Je,minFilter:We,magFilter:We,generateMipmaps:!1}),H.map.texture.name=G.name+".shadowMap",H.map.depthTexture=new ei(s.x,s.y,pn),H.map.depthTexture.name=G.name+".shadowMapDepth",H.map.depthTexture.format=Un,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ze,H.map.depthTexture.magFilter=ze}else G.isPointLight?(H.map=new ll(s.x),H.map.depthTexture=new qa(s.x,En)):(H.map=new Le(s.x,s.y),H.map.depthTexture=new ei(s.x,s.y,En)),H.map.depthTexture.name=G.name+".shadowMap",H.map.depthTexture.format=Un,this.type===Lr?(H.map.depthTexture.compareFunction=Q?sl:il,H.map.depthTexture.minFilter=We,H.map.depthTexture.magFilter=We):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=ze,H.map.depthTexture.magFilter=ze);H.camera.updateProjectionMatrix()}let ft=H.map.isWebGLCubeRenderTarget?6:1;for(let xt=0;xt<ft;xt++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,xt),i.clear();else{xt===0&&(i.setRenderTarget(H.map),i.clear());let yt=H.getViewport(xt);a.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),U.viewport(a)}if(G.isPointLight){let yt=H.camera,jt=H.matrix,xe=G.distance||yt.far;xe!==yt.far&&(yt.far=xe,yt.updateProjectionMatrix()),Gr.setFromMatrixPosition(G.matrixWorld),yt.position.copy(Gr),Jc.copy(yt.position),Jc.add(A1[xt]),yt.up.copy(R1[xt]),yt.lookAt(Jc),yt.updateMatrixWorld(),jt.makeTranslation(-Gr.x,-Gr.y,-Gr.z),gd.multiplyMatrices(yt.projectionMatrix,yt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(gd,yt.coordinateSystem,yt.reversedDepth)}else H.updateMatrices(G);n=H.getFrustum(),v(R,_,H.camera,G,this.type)}H.isPointLightShadow!==!0&&this.type===Es&&E(H,_),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,P,I)};function E(S,R){let _=t.update(y);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Le(s.x,s.y,{format:Mi,type:Je})),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(R,null,_,u,y,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(R,null,_,d,y,null)}function b(S,R,_,w){let P=null,I=_.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let U=P.uuid,W=R.uuid,q=c[U];q===void 0&&(q={},c[U]=q);let O=q[W];O===void 0&&(O=P.clone(),q[W]=O,R.addEventListener("dispose",T)),P=O}if(P.visible=R.visible,P.wireframe=R.wireframe,w===Es?P.side=R.shadowSide!==null?R.shadowSide:R.side:P.side=R.shadowSide!==null?R.shadowSide:f[R.side],P.alphaMap=R.alphaMap,P.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,P.map=R.map,P.clipShadows=R.clipShadows,P.clippingPlanes=R.clippingPlanes,P.clipIntersection=R.clipIntersection,P.displacementMap=R.displacementMap,P.displacementScale=R.displacementScale,P.displacementBias=R.displacementBias,P.wireframeLinewidth=R.wireframeLinewidth,P.linewidth=R.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let U=i.properties.get(P);U.light=_}return P}function v(S,R,_,w,P){if(S.visible===!1)return;if(S.layers.test(R.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Es)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,S.matrixWorld);let W=t.update(S),q=S.material;if(Array.isArray(q)){let O=W.groups;for(let G=0,H=O.length;G<H;G++){let K=O[G],Q=q[K.materialIndex];if(Q&&Q.visible){let ft=b(S,Q,w,P);S.onBeforeShadow(i,S,R,_,W,ft,K),i.renderBufferDirect(_,null,W,ft,S,K),S.onAfterShadow(i,S,R,_,W,ft,K)}}}else if(q.visible){let O=b(S,q,w,P);S.onBeforeShadow(i,S,R,_,W,O,null),i.renderBufferDirect(_,null,W,O,S,null),S.onAfterShadow(i,S,R,_,W,O,null)}}let U=S.children;for(let W=0,q=U.length;W<q;W++)v(U[W],R,_,w,P)}function T(S){S.target.removeEventListener("dispose",T);for(let _ in c){let w=c[_],P=S.target.uuid;P in w&&(w[P].dispose(),delete w[P])}}}function P1(i,t){function e(){let L=!1,rt=new pe,Z=null,ht=new pe(0,0,0,0);return{setMask:function(gt){Z!==gt&&!L&&(i.colorMask(gt,gt,gt,gt),Z=gt)},setLocked:function(gt){L=gt},setClear:function(gt,j,St,Mt,ve){ve===!0&&(gt*=Mt,j*=Mt,St*=Mt),rt.set(gt,j,St,Mt),ht.equals(rt)===!1&&(i.clearColor(gt,j,St,Mt),ht.copy(rt))},reset:function(){L=!1,Z=null,ht.set(-1,0,0,0)}}}function n(){let L=!1,rt=!1,Z=null,ht=null,gt=null;return{setReversed:function(j){if(rt!==j){let St=t.get("EXT_clip_control");j?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),rt=j;let Mt=gt;gt=null,this.setClear(Mt)}},getReversed:function(){return rt},setTest:function(j){j?tt(i.DEPTH_TEST):Ft(i.DEPTH_TEST)},setMask:function(j){Z!==j&&!L&&(i.depthMask(j),Z=j)},setFunc:function(j){if(rt&&(j=Xu[j]),ht!==j){switch(j){case Ra:i.depthFunc(i.NEVER);break;case Ca:i.depthFunc(i.ALWAYS);break;case Pa:i.depthFunc(i.LESS);break;case Li:i.depthFunc(i.LEQUAL);break;case Ia:i.depthFunc(i.EQUAL);break;case La:i.depthFunc(i.GEQUAL);break;case Da:i.depthFunc(i.GREATER);break;case Ua:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=j}},setLocked:function(j){L=j},setClear:function(j){gt!==j&&(gt=j,rt&&(j=1-j),i.clearDepth(j))},reset:function(){L=!1,Z=null,ht=null,gt=null,rt=!1}}}function s(){let L=!1,rt=null,Z=null,ht=null,gt=null,j=null,St=null,Mt=null,ve=null;return{setTest:function(he){L||(he?tt(i.STENCIL_TEST):Ft(i.STENCIL_TEST))},setMask:function(he){rt!==he&&!L&&(i.stencilMask(he),rt=he)},setFunc:function(he,Rn,Cn){(Z!==he||ht!==Rn||gt!==Cn)&&(i.stencilFunc(he,Rn,Cn),Z=he,ht=Rn,gt=Cn)},setOp:function(he,Rn,Cn){(j!==he||St!==Rn||Mt!==Cn)&&(i.stencilOp(he,Rn,Cn),j=he,St=Rn,Mt=Cn)},setLocked:function(he){L=he},setClear:function(he){ve!==he&&(i.clearStencil(he),ve=he)},reset:function(){L=!1,rt=null,Z=null,ht=null,gt=null,j=null,St=null,Mt=null,ve=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],y=null,m=!1,p=null,E=null,b=null,v=null,T=null,S=null,R=null,_=new It(0,0,0),w=0,P=!1,I=null,U=null,W=null,q=null,O=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,K=0,Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),H=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),H=K>=2);let ft=null,xt={},yt=i.getParameter(i.SCISSOR_BOX),jt=i.getParameter(i.VIEWPORT),xe=new pe().fromArray(yt),Qt=new pe().fromArray(jt);function J(L,rt,Z,ht){let gt=new Uint8Array(4),j=i.createTexture();i.bindTexture(L,j),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let St=0;St<Z;St++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(rt,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,gt):i.texImage2D(rt+St,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,gt);return j}let at={};at[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),tt(i.DEPTH_TEST),a.setFunc(Li),we(!1),Pe(mc),tt(i.CULL_FACE),te(fn);function tt(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function Ft(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function zt(L,rt){return u[L]!==rt?(i.bindFramebuffer(L,rt),u[L]=rt,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=rt),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=rt),!0):!1}function Dt(L,rt){let Z=g,ht=!1;if(L){Z=d.get(rt),Z===void 0&&(Z=[],d.set(rt,Z));let gt=L.textures;if(Z.length!==gt.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let j=0,St=gt.length;j<St;j++)Z[j]=i.COLOR_ATTACHMENT0+j;Z.length=gt.length,ht=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,ht=!0);ht&&i.drawBuffers(Z)}function Me(L){return y!==L?(i.useProgram(L),y=L,!0):!1}let qt={[pi]:i.FUNC_ADD,[pu]:i.FUNC_SUBTRACT,[mu]:i.FUNC_REVERSE_SUBTRACT};qt[gu]=i.MIN,qt[xu]=i.MAX;let oe={[_u]:i.ZERO,[vu]:i.ONE,[yu]:i.SRC_COLOR,[wa]:i.SRC_ALPHA,[wu]:i.SRC_ALPHA_SATURATE,[Eu]:i.DST_COLOR,[bu]:i.DST_ALPHA,[Mu]:i.ONE_MINUS_SRC_COLOR,[Aa]:i.ONE_MINUS_SRC_ALPHA,[Tu]:i.ONE_MINUS_DST_COLOR,[Su]:i.ONE_MINUS_DST_ALPHA,[Au]:i.CONSTANT_COLOR,[Ru]:i.ONE_MINUS_CONSTANT_COLOR,[Cu]:i.CONSTANT_ALPHA,[Pu]:i.ONE_MINUS_CONSTANT_ALPHA};function te(L,rt,Z,ht,gt,j,St,Mt,ve,he){if(L===fn){m===!0&&(Ft(i.BLEND),m=!1);return}if(m===!1&&(tt(i.BLEND),m=!0),L!==fu){if(L!==p||he!==P){if((E!==pi||T!==pi)&&(i.blendEquation(i.FUNC_ADD),E=pi,T=pi),he)switch(L){case Qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zt:i.blendFunc(i.ONE,i.ONE);break;case gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Lt("WebGLState: Invalid blending: ",L);break}else switch(L){case Qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Zt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gc:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xc:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",L);break}b=null,v=null,S=null,R=null,_.set(0,0,0),w=0,p=L,P=he}return}gt=gt||rt,j=j||Z,St=St||ht,(rt!==E||gt!==T)&&(i.blendEquationSeparate(qt[rt],qt[gt]),E=rt,T=gt),(Z!==b||ht!==v||j!==S||St!==R)&&(i.blendFuncSeparate(oe[Z],oe[ht],oe[j],oe[St]),b=Z,v=ht,S=j,R=St),(Mt.equals(_)===!1||ve!==w)&&(i.blendColor(Mt.r,Mt.g,Mt.b,ve),_.copy(Mt),w=ve),p=L,P=!1}function Jt(L,rt){L.side===nn?Ft(i.CULL_FACE):tt(i.CULL_FACE);let Z=L.side===Qe;rt&&(Z=!Z),we(Z),L.blending===Qn&&L.transparent===!1?te(fn):te(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ht=L.stencilWrite;o.setTest(ht),ht&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):Ft(i.SAMPLE_ALPHA_TO_COVERAGE)}function we(L){I!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),I=L)}function Pe(L){L!==hu?(tt(i.CULL_FACE),L!==U&&(L===mc?i.cullFace(i.BACK):L===uu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ft(i.CULL_FACE),U=L}function Fe(L){L!==W&&(H&&i.lineWidth(L),W=L)}function Ve(L,rt,Z){L?(tt(i.POLYGON_OFFSET_FILL),(q!==rt||O!==Z)&&(q=rt,O=Z,a.getReversed()&&(rt=-rt),i.polygonOffset(rt,Z))):Ft(i.POLYGON_OFFSET_FILL)}function _e(L){L?tt(i.SCISSOR_TEST):Ft(i.SCISSOR_TEST)}function Ae(L){L===void 0&&(L=i.TEXTURE0+G-1),ft!==L&&(i.activeTexture(L),ft=L)}function D(L,rt,Z){Z===void 0&&(ft===null?Z=i.TEXTURE0+G-1:Z=ft);let ht=xt[Z];ht===void 0&&(ht={type:void 0,texture:void 0},xt[Z]=ht),(ht.type!==L||ht.texture!==rt)&&(ft!==Z&&(i.activeTexture(Z),ft=Z),i.bindTexture(L,rt||at[L]),ht.type=L,ht.texture=rt)}function en(){let L=xt[ft];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ie(){try{i.compressedTexImage2D(...arguments)}catch(L){Lt("WebGLState:",L)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(L){Lt("WebGLState:",L)}}function x(){try{i.texSubImage2D(...arguments)}catch(L){Lt("WebGLState:",L)}}function F(){try{i.texSubImage3D(...arguments)}catch(L){Lt("WebGLState:",L)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(L){Lt("WebGLState:",L)}}function X(){try{i.compressedTexSubImage3D(...arguments)}catch(L){Lt("WebGLState:",L)}}function it(){try{i.texStorage2D(...arguments)}catch(L){Lt("WebGLState:",L)}}function ot(){try{i.texStorage3D(...arguments)}catch(L){Lt("WebGLState:",L)}}function Y(){try{i.texImage2D(...arguments)}catch(L){Lt("WebGLState:",L)}}function $(){try{i.texImage3D(...arguments)}catch(L){Lt("WebGLState:",L)}}function lt(L){return f[L]!==void 0?f[L]:i.getParameter(L)}function Et(L,rt){f[L]!==rt&&(i.pixelStorei(L,rt),f[L]=rt)}function ut(L){xe.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),xe.copy(L))}function ct(L){Qt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Qt.copy(L))}function Pt(L,rt){let Z=c.get(rt);Z===void 0&&(Z=new WeakMap,c.set(rt,Z));let ht=Z.get(L);ht===void 0&&(ht=i.getUniformBlockIndex(rt,L.name),Z.set(L,ht))}function Ut(L,rt){let ht=c.get(rt).get(L);l.get(rt)!==ht&&(i.uniformBlockBinding(rt,ht,L.__bindingPointIndex),l.set(rt,ht))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},ft=null,xt={},u={},d=new WeakMap,g=[],y=null,m=!1,p=null,E=null,b=null,v=null,T=null,S=null,R=null,_=new It(0,0,0),w=0,P=!1,I=null,U=null,W=null,q=null,O=null,xe.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:tt,disable:Ft,bindFramebuffer:zt,drawBuffers:Dt,useProgram:Me,setBlending:te,setMaterial:Jt,setFlipSided:we,setCullFace:Pe,setLineWidth:Fe,setPolygonOffset:Ve,setScissorTest:_e,activeTexture:Ae,bindTexture:D,unbindTexture:en,compressedTexImage2D:ie,compressedTexImage3D:A,texImage2D:Y,texImage3D:$,pixelStorei:Et,getParameter:lt,updateUBOMapping:Pt,uniformBlockBinding:Ut,texStorage2D:it,texStorage3D:ot,texSubImage2D:x,texSubImage3D:F,compressedTexSubImage2D:k,compressedTexSubImage3D:X,scissor:ut,viewport:ct,reset:kt}}function I1(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(A,x){return g?new OffscreenCanvas(A,x):fs("canvas")}function m(A,x,F){let k=1,X=ie(A);if((X.width>F||X.height>F)&&(k=F/Math.max(X.width,X.height)),k<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let it=Math.floor(k*X.width),ot=Math.floor(k*X.height);u===void 0&&(u=y(it,ot));let Y=x?y(it,ot):u;return Y.width=it,Y.height=ot,Y.getContext("2d").drawImage(A,0,0,it,ot),Rt("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+it+"x"+ot+")."),Y}else return"data"in A&&Rt("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),A;return A}function p(A){return A.generateMipmaps}function E(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,x,F,k,X,it=!1){if(A!==null){if(i[A]!==void 0)return i[A];Rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ot;k&&(ot=t.get("EXT_texture_norm16"),ot||Rt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===i.RED&&(F===i.FLOAT&&(Y=i.R32F),F===i.HALF_FLOAT&&(Y=i.R16F),F===i.UNSIGNED_BYTE&&(Y=i.R8),F===i.UNSIGNED_SHORT&&ot&&(Y=ot.R16_EXT),F===i.SHORT&&ot&&(Y=ot.R16_SNORM_EXT)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.R8UI),F===i.UNSIGNED_SHORT&&(Y=i.R16UI),F===i.UNSIGNED_INT&&(Y=i.R32UI),F===i.BYTE&&(Y=i.R8I),F===i.SHORT&&(Y=i.R16I),F===i.INT&&(Y=i.R32I)),x===i.RG&&(F===i.FLOAT&&(Y=i.RG32F),F===i.HALF_FLOAT&&(Y=i.RG16F),F===i.UNSIGNED_BYTE&&(Y=i.RG8),F===i.UNSIGNED_SHORT&&ot&&(Y=ot.RG16_EXT),F===i.SHORT&&ot&&(Y=ot.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RG8UI),F===i.UNSIGNED_SHORT&&(Y=i.RG16UI),F===i.UNSIGNED_INT&&(Y=i.RG32UI),F===i.BYTE&&(Y=i.RG8I),F===i.SHORT&&(Y=i.RG16I),F===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),F===i.UNSIGNED_INT&&(Y=i.RGB32UI),F===i.BYTE&&(Y=i.RGB8I),F===i.SHORT&&(Y=i.RGB16I),F===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),F===i.UNSIGNED_INT&&(Y=i.RGBA32UI),F===i.BYTE&&(Y=i.RGBA8I),F===i.SHORT&&(Y=i.RGBA16I),F===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_SHORT&&ot&&(Y=ot.RGB16_EXT),F===i.SHORT&&ot&&(Y=ot.RGB16_SNORM_EXT),F===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),x===i.RGBA){let $=it?js:Yt.getTransfer(X);F===i.FLOAT&&(Y=i.RGBA32F),F===i.HALF_FLOAT&&(Y=i.RGBA16F),F===i.UNSIGNED_BYTE&&(Y=$===ne?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT&&ot&&(Y=ot.RGBA16_EXT),F===i.SHORT&&ot&&(Y=ot.RGBA16_SNORM_EXT),F===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function T(A,x){let F;return A?x===null||x===En||x===ws?F=i.DEPTH24_STENCIL8:x===pn?F=i.DEPTH32F_STENCIL8:x===Ts&&(F=i.DEPTH24_STENCIL8,Rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===En||x===ws?F=i.DEPTH_COMPONENT24:x===pn?F=i.DEPTH_COMPONENT32F:x===Ts&&(F=i.DEPTH_COMPONENT16),F}function S(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==ze&&A.minFilter!==We?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function R(A){let x=A.target;x.removeEventListener("dispose",R),w(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function _(A){let x=A.target;x.removeEventListener("dispose",_),I(x)}function w(A){let x=n.get(A);if(x.__webglInit===void 0)return;let F=A.source,k=d.get(F);if(k){let X=k[x.__cacheKey];X.usedTimes--,X.usedTimes===0&&P(A),Object.keys(k).length===0&&d.delete(F)}n.remove(A)}function P(A){let x=n.get(A);i.deleteTexture(x.__webglTexture);let F=A.source,k=d.get(F);delete k[x.__cacheKey],a.memory.textures--}function I(A){let x=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(x.__webglFramebuffer[k]))for(let X=0;X<x.__webglFramebuffer[k].length;X++)i.deleteFramebuffer(x.__webglFramebuffer[k][X]);else i.deleteFramebuffer(x.__webglFramebuffer[k]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[k])}else{if(Array.isArray(x.__webglFramebuffer))for(let k=0;k<x.__webglFramebuffer.length;k++)i.deleteFramebuffer(x.__webglFramebuffer[k]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let k=0;k<x.__webglColorRenderbuffer.length;k++)x.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[k]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=A.textures;for(let k=0,X=F.length;k<X;k++){let it=n.get(F[k]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),a.memory.textures--),n.remove(F[k])}n.remove(A)}let U=0;function W(){U=0}function q(){return U}function O(A){U=A}function G(){let A=U;return A>=s.maxTextures&&Rt("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function H(A){let x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function K(A,x){let F=n.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&F.__version!==A.version){let k=A.image;if(k===null)Rt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Rt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(F,A,x);return}}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function Q(A,x){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Ft(F,A,x);return}else A.isExternalTexture&&(F.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function ft(A,x){let F=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){Ft(F,A,x);return}e.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function xt(A,x){let F=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&F.__version!==A.version){zt(F,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let yt={[Na]:i.REPEAT,[Dn]:i.CLAMP_TO_EDGE,[Fa]:i.MIRRORED_REPEAT},jt={[ze]:i.NEAREST,[Du]:i.NEAREST_MIPMAP_NEAREST,[Nr]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[_o]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},xe={[Fu]:i.NEVER,[Vu]:i.ALWAYS,[Ou]:i.LESS,[il]:i.LEQUAL,[Bu]:i.EQUAL,[sl]:i.GEQUAL,[zu]:i.GREATER,[ku]:i.NOTEQUAL};function Qt(A,x){if(x.type===pn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===We||x.magFilter===_o||x.magFilter===Nr||x.magFilter===vi||x.minFilter===We||x.minFilter===_o||x.minFilter===Nr||x.minFilter===vi)&&Rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,yt[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,yt[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,yt[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,jt[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,jt[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,xe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ze||x.minFilter!==Nr&&x.minFilter!==vi||x.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let F=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function J(A,x){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",R));let k=x.source,X=d.get(k);X===void 0&&(X={},d.set(k,X));let it=H(x);if(it!==A.__cacheKey){X[it]===void 0&&(X[it]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),X[it].usedTimes++;let ot=X[A.__cacheKey];ot!==void 0&&(X[A.__cacheKey].usedTimes--,ot.usedTimes===0&&P(x)),A.__cacheKey=it,A.__webglTexture=X[it].texture}return F}function at(A,x,F){return Math.floor(Math.floor(A/F)/x)}function tt(A,x,F,k){let it=A.updateRanges;if(it.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,k,x.data);else{it.sort((Et,ut)=>Et.start-ut.start);let ot=0;for(let Et=1;Et<it.length;Et++){let ut=it[ot],ct=it[Et],Pt=ut.start+ut.count,Ut=at(ct.start,x.width,4),kt=at(ut.start,x.width,4);ct.start<=Pt+1&&Ut===kt&&at(ct.start+ct.count-1,x.width,4)===Ut?ut.count=Math.max(ut.count,ct.start+ct.count-ut.start):(++ot,it[ot]=ct)}it.length=ot+1;let Y=e.getParameter(i.UNPACK_ROW_LENGTH),$=e.getParameter(i.UNPACK_SKIP_PIXELS),lt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Et=0,ut=it.length;Et<ut;Et++){let ct=it[Et],Pt=Math.floor(ct.start/4),Ut=Math.ceil(ct.count/4),kt=Pt%x.width,L=Math.floor(Pt/x.width),rt=Ut,Z=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,L),e.texSubImage2D(i.TEXTURE_2D,0,kt,L,rt,Z,F,k,x.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Y),e.pixelStorei(i.UNPACK_SKIP_PIXELS,$),e.pixelStorei(i.UNPACK_SKIP_ROWS,lt)}}function Ft(A,x,F){let k=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(k=i.TEXTURE_3D);let X=J(A,x),it=x.source;e.bindTexture(k,A.__webglTexture,i.TEXTURE0+F);let ot=n.get(it);if(it.version!==ot.__version||X===!0){if(e.activeTexture(i.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let Z=Yt.getPrimaries(Yt.workingColorSpace),ht=x.colorSpace===ni?null:Yt.getPrimaries(x.colorSpace),gt=x.colorSpace===ni||Z===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let $=m(x.image,!1,s.maxTextureSize);$=en(x,$);let lt=r.convert(x.format,x.colorSpace),Et=r.convert(x.type),ut=v(x.internalFormat,lt,Et,x.normalized,x.colorSpace,x.isVideoTexture);Qt(k,x);let ct,Pt=x.mipmaps,Ut=x.isVideoTexture!==!0,kt=ot.__version===void 0||X===!0,L=it.dataReady,rt=S(x,$);if(x.isDepthTexture)ut=T(x.format===yi,x.type),kt&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,ut,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,ut,$.width,$.height,0,lt,Et,null));else if(x.isDataTexture)if(Pt.length>0){Ut&&kt&&e.texStorage2D(i.TEXTURE_2D,rt,ut,Pt[0].width,Pt[0].height);for(let Z=0,ht=Pt.length;Z<ht;Z++)ct=Pt[Z],Ut?L&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ct.width,ct.height,lt,Et,ct.data):e.texImage2D(i.TEXTURE_2D,Z,ut,ct.width,ct.height,0,lt,Et,ct.data);x.generateMipmaps=!1}else Ut?(kt&&e.texStorage2D(i.TEXTURE_2D,rt,ut,$.width,$.height),L&&tt(x,$,lt,Et)):e.texImage2D(i.TEXTURE_2D,0,ut,$.width,$.height,0,lt,Et,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ut&&kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,ut,Pt[0].width,Pt[0].height,$.depth);for(let Z=0,ht=Pt.length;Z<ht;Z++)if(ct=Pt[Z],x.format!==mn)if(lt!==null)if(Ut){if(L)if(x.layerUpdates.size>0){let gt=zc(ct.width,ct.height,x.format,x.type);for(let j of x.layerUpdates){let St=ct.data.subarray(j*gt/ct.data.BYTES_PER_ELEMENT,(j+1)*gt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,j,ct.width,ct.height,1,lt,St)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ct.width,ct.height,$.depth,lt,ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ut,ct.width,ct.height,$.depth,0,ct.data,0,0);else Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,ct.width,ct.height,$.depth,lt,Et,ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Z,ut,ct.width,ct.height,$.depth,0,lt,Et,ct.data)}else{Ut&&kt&&e.texStorage2D(i.TEXTURE_2D,rt,ut,Pt[0].width,Pt[0].height);for(let Z=0,ht=Pt.length;Z<ht;Z++)ct=Pt[Z],x.format!==mn?lt!==null?Ut?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(i.TEXTURE_2D,Z,ut,ct.width,ct.height,0,ct.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?L&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,ct.width,ct.height,lt,Et,ct.data):e.texImage2D(i.TEXTURE_2D,Z,ut,ct.width,ct.height,0,lt,Et,ct.data)}else if(x.isDataArrayTexture)if(Ut){if(kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,rt,ut,$.width,$.height,$.depth),L)if(x.layerUpdates.size>0){let Z=zc($.width,$.height,x.format,x.type);for(let ht of x.layerUpdates){let gt=$.data.subarray(ht*Z/$.data.BYTES_PER_ELEMENT,(ht+1)*Z/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,$.width,$.height,1,lt,Et,gt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,lt,Et,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ut,$.width,$.height,$.depth,0,lt,Et,$.data);else if(x.isData3DTexture)Ut?(kt&&e.texStorage3D(i.TEXTURE_3D,rt,ut,$.width,$.height,$.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,lt,Et,$.data)):e.texImage3D(i.TEXTURE_3D,0,ut,$.width,$.height,$.depth,0,lt,Et,$.data);else if(x.isFramebufferTexture){if(kt)if(Ut)e.texStorage2D(i.TEXTURE_2D,rt,ut,$.width,$.height);else{let Z=$.width,ht=$.height;for(let gt=0;gt<rt;gt++)e.texImage2D(i.TEXTURE_2D,gt,ut,Z,ht,0,lt,Et,null),Z>>=1,ht>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let Z=i.canvas;if(Z.hasAttribute("layoutsubtree")||Z.setAttribute("layoutsubtree","true"),$.parentNode!==Z){Z.appendChild($),f.add(x),Z.onpaint=ht=>{let gt=ht.changedElements;for(let j of f)gt.includes(j.image)&&(j.needsUpdate=!0)},Z.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let gt=i.RGBA,j=i.RGBA,St=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,gt,j,St,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pt.length>0){if(Ut&&kt){let Z=ie(Pt[0]);e.texStorage2D(i.TEXTURE_2D,rt,ut,Z.width,Z.height)}for(let Z=0,ht=Pt.length;Z<ht;Z++)ct=Pt[Z],Ut?L&&e.texSubImage2D(i.TEXTURE_2D,Z,0,0,lt,Et,ct):e.texImage2D(i.TEXTURE_2D,Z,ut,lt,Et,ct);x.generateMipmaps=!1}else if(Ut){if(kt){let Z=ie($);e.texStorage2D(i.TEXTURE_2D,rt,ut,Z.width,Z.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,lt,Et,$)}else e.texImage2D(i.TEXTURE_2D,0,ut,lt,Et,$);p(x)&&E(k),ot.__version=it.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function zt(A,x,F){if(x.image.length!==6)return;let k=J(A,x),X=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+F);let it=n.get(X);if(X.version!==it.__version||k===!0){e.activeTexture(i.TEXTURE0+F);let ot=Yt.getPrimaries(Yt.workingColorSpace),Y=x.colorSpace===ni?null:Yt.getPrimaries(x.colorSpace),$=x.colorSpace===ni||ot===Y?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let lt=x.isCompressedTexture||x.image[0].isCompressedTexture,Et=x.image[0]&&x.image[0].isDataTexture,ut=[];for(let j=0;j<6;j++)!lt&&!Et?ut[j]=m(x.image[j],!0,s.maxCubemapSize):ut[j]=Et?x.image[j].image:x.image[j],ut[j]=en(x,ut[j]);let ct=ut[0],Pt=r.convert(x.format,x.colorSpace),Ut=r.convert(x.type),kt=v(x.internalFormat,Pt,Ut,x.normalized,x.colorSpace),L=x.isVideoTexture!==!0,rt=it.__version===void 0||k===!0,Z=X.dataReady,ht=S(x,ct);Qt(i.TEXTURE_CUBE_MAP,x);let gt;if(lt){L&&rt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,kt,ct.width,ct.height);for(let j=0;j<6;j++){gt=ut[j].mipmaps;for(let St=0;St<gt.length;St++){let Mt=gt[St];x.format!==mn?Pt!==null?L?Z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,0,0,Mt.width,Mt.height,Pt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,kt,Mt.width,Mt.height,0,Mt.data):Rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,0,0,Mt.width,Mt.height,Pt,Ut,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St,kt,Mt.width,Mt.height,0,Pt,Ut,Mt.data)}}}else{if(gt=x.mipmaps,L&&rt){gt.length>0&&ht++;let j=ie(ut[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,kt,j.width,j.height)}for(let j=0;j<6;j++)if(Et){L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ut[j].width,ut[j].height,Pt,Ut,ut[j].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,kt,ut[j].width,ut[j].height,0,Pt,Ut,ut[j].data);for(let St=0;St<gt.length;St++){let ve=gt[St].image[j].image;L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,0,0,ve.width,ve.height,Pt,Ut,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,kt,ve.width,ve.height,0,Pt,Ut,ve.data)}}else{L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Pt,Ut,ut[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,kt,Pt,Ut,ut[j]);for(let St=0;St<gt.length;St++){let Mt=gt[St];L?Z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,0,0,Pt,Ut,Mt.image[j]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,St+1,kt,Pt,Ut,Mt.image[j])}}}p(x)&&E(i.TEXTURE_CUBE_MAP),it.__version=X.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Dt(A,x,F,k,X,it){let ot=r.convert(F.format,F.colorSpace),Y=r.convert(F.type),$=v(F.internalFormat,ot,Y,F.normalized,F.colorSpace),lt=n.get(x),Et=n.get(F);if(Et.__renderTarget=x,!lt.__hasExternalTextures){let ut=Math.max(1,x.width>>it),ct=Math.max(1,x.height>>it);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,it,$,ut,ct,x.depth,0,ot,Y,null):e.texImage2D(X,it,$,ut,ct,0,ot,Y,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Ae(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,X,Et.__webglTexture,0,_e(x)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,X,Et.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Me(A,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){let k=x.depthTexture,X=k&&k.isDepthTexture?k.type:null,it=T(x.stencilBuffer,X),ot=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ae(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(x),it,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(x),it,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,it,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ot,i.RENDERBUFFER,A)}else{let k=x.textures;for(let X=0;X<k.length;X++){let it=k[X],ot=r.convert(it.format,it.colorSpace),Y=r.convert(it.type),$=v(it.internalFormat,ot,Y,it.normalized,it.colorSpace);Ae(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(x),$,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(x),$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function qt(A,x,F){let k=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=n.get(x.depthTexture);if(X.__renderTarget=x,(!X.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),k){if(X.__webglInit===void 0&&(X.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),X.__webglTexture===void 0){X.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,x.depthTexture);let lt=r.convert(x.depthTexture.format),Et=r.convert(x.depthTexture.type),ut;x.depthTexture.format===Un?ut=i.DEPTH_COMPONENT24:x.depthTexture.format===yi&&(ut=i.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ut,x.width,x.height,0,lt,Et,null)}}else K(x.depthTexture,0);let it=X.__webglTexture,ot=_e(x),Y=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,$=x.depthTexture.format===yi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Un)Ae(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,it,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,it,0);else if(x.depthTexture.format===yi)Ae(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,it,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,it,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function oe(A){let x=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){let k=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),k){let X=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,k.removeEventListener("dispose",X)};k.addEventListener("dispose",X),x.__depthDisposeCallback=X}x.__boundDepthTexture=k}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let k=0;k<6;k++)qt(x.__webglFramebuffer[k],A,k);else{let k=A.texture.mipmaps;k&&k.length>0?qt(x.__webglFramebuffer[0],A,0):qt(x.__webglFramebuffer,A,0)}else if(F){x.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[k]),x.__webglDepthbuffer[k]===void 0)x.__webglDepthbuffer[k]=i.createRenderbuffer(),Me(x.__webglDepthbuffer[k],A,!1);else{let X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,it)}}else{let k=A.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Me(x.__webglDepthbuffer,A,!1);else{let X=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,it)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(A,x,F){let k=n.get(A);x!==void 0&&Dt(k.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&oe(A)}function Jt(A){let x=A.texture,F=n.get(A),k=n.get(x);A.addEventListener("dispose",_);let X=A.textures,it=A.isWebGLCubeRenderTarget===!0,ot=X.length>1;if(ot||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=x.version,a.memory.textures++),it){F.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[Y]=[];for(let $=0;$<x.mipmaps.length;$++)F.__webglFramebuffer[Y][$]=i.createFramebuffer()}else F.__webglFramebuffer[Y]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)F.__webglFramebuffer[Y]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ot)for(let Y=0,$=X.length;Y<$;Y++){let lt=n.get(X[Y]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ae(A)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Y=0;Y<X.length;Y++){let $=X[Y];F.__webglColorRenderbuffer[Y]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[Y]);let lt=r.convert($.format,$.colorSpace),Et=r.convert($.type),ut=v($.internalFormat,lt,Et,$.normalized,$.colorSpace,A.isXRRenderTarget===!0),ct=_e(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,ut,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Y,i.RENDERBUFFER,F.__webglColorRenderbuffer[Y])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Me(F.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Qt(i.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)Dt(F.__webglFramebuffer[Y][$],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,$);else Dt(F.__webglFramebuffer[Y],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);p(x)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ot){for(let Y=0,$=X.length;Y<$;Y++){let lt=X[Y],Et=n.get(lt),ut=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ut=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,Et.__webglTexture),Qt(ut,lt),Dt(F.__webglFramebuffer,A,lt,i.COLOR_ATTACHMENT0+Y,ut,0),p(lt)&&E(ut)}e.unbindTexture()}else{let Y=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Y=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,k.__webglTexture),Qt(Y,x),x.mipmaps&&x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)Dt(F.__webglFramebuffer[$],A,x,i.COLOR_ATTACHMENT0,Y,$);else Dt(F.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,Y,0);p(x)&&E(Y),e.unbindTexture()}A.depthBuffer&&oe(A)}function we(A){let x=A.textures;for(let F=0,k=x.length;F<k;F++){let X=x[F];if(p(X)){let it=b(A),ot=n.get(X).__webglTexture;e.bindTexture(it,ot),E(it),e.unbindTexture()}}}let Pe=[],Fe=[];function Ve(A){if(A.samples>0){if(Ae(A)===!1){let x=A.textures,F=A.width,k=A.height,X=i.COLOR_BUFFER_BIT,it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=n.get(A),Y=x.length>1;if(Y)for(let lt=0;lt<x.length;lt++)e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer);let $=A.texture.mipmaps;$&&$.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let lt=0;lt<x.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),Y){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);let Et=n.get(x[lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Et,0)}i.blitFramebuffer(0,0,F,k,0,0,F,k,X,i.NEAREST),l===!0&&(Pe.length=0,Fe.length=0,Pe.push(i.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Pe.push(it),Fe.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Pe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Y)for(let lt=0;lt<x.length;lt++){e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,ot.__webglColorRenderbuffer[lt]);let Et=n.get(x[lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.TEXTURE_2D,Et,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function _e(A){return Math.min(s.maxSamples,A.samples)}function Ae(A){let x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(A){let x=a.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function en(A,x){let F=A.colorSpace,k=A.format,X=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==Ks&&F!==ni&&(Yt.getTransfer(F)===ne?(k!==mn||X!==sn)&&Rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",F)),x}function ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=W,this.getTextureUnits=q,this.setTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=Q,this.setTexture3D=ft,this.setTextureCube=xt,this.rebindTextures=te,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=we,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Dt,this.useMultisampledRTT=Ae,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function L1(i,t){function e(n,s=ni){let r,a=Yt.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===yo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Mo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Cc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===wc)return i.BYTE;if(n===Ac)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===vo)return i.INT;if(n===En)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Je)return i.HALF_FLOAT;if(n===Pc)return i.ALPHA;if(n===Ic)return i.RGB;if(n===mn)return i.RGBA;if(n===Un)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===bo)return i.RED;if(n===So)return i.RED_INTEGER;if(n===Mi)return i.RG;if(n===Eo)return i.RG_INTEGER;if(n===To)return i.RGBA_INTEGER;if(n===Fr||n===Or||n===Br||n===zr)if(a===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wo||n===Ao||n===Ro||n===Co)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ro)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Co)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Po||n===Io||n===Lo||n===Do||n===Uo||n===kr||n===No)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Po||n===Io)return a===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Lo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Do)return r.COMPRESSED_R11_EAC;if(n===Uo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===kr)return r.COMPRESSED_RG11_EAC;if(n===No)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Fo||n===Oo||n===Bo||n===zo||n===ko||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===$o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===zo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ho)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Go)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zo)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return a===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Jo||n===Ko||n===jo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Jo)return a===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ko)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qo||n===tl||n===Vr||n===el)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Qo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ws?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var D1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U1=`
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

}`,sh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new gr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new me({vertexShader:D1,fragmentShader:U1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new $e(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rh=class extends Nn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,y=typeof XRWebGLBinding<"u",m=new sh,p={},E=e.getContextAttributes(),b=null,v=null,T=[],S=[],R=new st,_=null,w=new Ge;w.viewport=new pe;let P=new Ge;P.viewport=new pe;let I=[w,P],U=new po,W=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=T[J];return at===void 0&&(at=new _s,T[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=T[J];return at===void 0&&(at=new _s,T[J]=at),at.getGripSpace()},this.getHand=function(J){let at=T[J];return at===void 0&&(at=new _s,T[J]=at),at.getHandSpace()};function O(J){let at=S.indexOf(J.inputSource);if(at===-1)return;let tt=T[at];tt!==void 0&&(tt.update(J.inputSource,J.frame,c||a),tt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",H);for(let J=0;J<T.length;J++){let at=S[J];at!==null&&(S[J]=null,T[J].disconnect(at))}W=null,q=null,m.reset();for(let J in p)delete p[J];t.setRenderTarget(b),d=null,u=null,f=null,s=null,v=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(b=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",H),E.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let tt=null,Ft=null,zt=null;E.depth&&(zt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=E.stencil?yi:Un,Ft=E.stencil?ws:En);let Dt={colorFormat:e.RGBA8,depthFormat:zt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Le(u.textureWidth,u.textureHeight,{format:mn,type:sn,depthTexture:new ei(u.textureWidth,u.textureHeight,Ft,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{let tt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new Le(d.framebufferWidth,d.framebufferHeight,{format:mn,type:sn,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(J){for(let at=0;at<J.removed.length;at++){let tt=J.removed[at],Ft=S.indexOf(tt);Ft>=0&&(S[Ft]=null,T[Ft].disconnect(tt))}for(let at=0;at<J.added.length;at++){let tt=J.added[at],Ft=S.indexOf(tt);if(Ft===-1){for(let Dt=0;Dt<T.length;Dt++)if(Dt>=S.length){S.push(tt),Ft=Dt;break}else if(S[Dt]===null){S[Dt]=tt,Ft=Dt;break}if(Ft===-1)break}let zt=T[Ft];zt&&zt.connect(tt)}}let K=new C,Q=new C;function ft(J,at,tt){K.setFromMatrixPosition(at.matrixWorld),Q.setFromMatrixPosition(tt.matrixWorld);let Ft=K.distanceTo(Q),zt=at.projectionMatrix.elements,Dt=tt.projectionMatrix.elements,Me=zt[14]/(zt[10]-1),qt=zt[14]/(zt[10]+1),oe=(zt[9]+1)/zt[5],te=(zt[9]-1)/zt[5],Jt=(zt[8]-1)/zt[0],we=(Dt[8]+1)/Dt[0],Pe=Me*Jt,Fe=Me*we,Ve=Ft/(-Jt+we),_e=Ve*-Jt;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(_e),J.translateZ(Ve),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),zt[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let Ae=Me+Ve,D=qt+Ve,en=Pe-_e,ie=Fe+(Ft-_e),A=oe*qt/D*Ae,x=te*qt/D*Ae;J.projectionMatrix.makePerspective(en,ie,A,x,Ae,D),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function xt(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let at=J.near,tt=J.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(tt=m.depthFar)),U.near=P.near=w.near=at,U.far=P.far=w.far=tt,(W!==U.near||q!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),W=U.near,q=U.far),U.layers.mask=J.layers.mask|6,w.layers.mask=U.layers.mask&-5,P.layers.mask=U.layers.mask&-3;let Ft=J.parent,zt=U.cameras;xt(U,Ft);for(let Dt=0;Dt<zt.length;Dt++)xt(zt[Dt],Ft);zt.length===2?ft(U,w,P):U.projectionMatrix.copy(w.projectionMatrix),yt(J,U,Ft)};function yt(J,at,tt){tt===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(tt.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ms*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(J){return p[J]};let jt=null;function xe(J,at){if(h=at.getViewerPose(c||a),g=at,h!==null){let tt=h.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let Ft=!1;tt.length!==U.cameras.length&&(U.cameras.length=0,Ft=!0);for(let qt=0;qt<tt.length;qt++){let oe=tt[qt],te=null;if(d!==null)te=d.getViewport(oe);else{let we=f.getViewSubImage(u,oe);te=we.viewport,qt===0&&(t.setRenderTargetTextures(v,we.colorTexture,we.depthStencilTexture),t.setRenderTarget(v))}let Jt=I[qt];Jt===void 0&&(Jt=new Ge,Jt.layers.enable(qt),Jt.viewport=new pe,I[qt]=Jt),Jt.matrix.fromArray(oe.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(oe.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(te.x,te.y,te.width,te.height),qt===0&&(U.matrix.copy(Jt.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ft===!0&&U.cameras.push(Jt)}let zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let qt=f.getDepthInformation(tt[0]);qt&&qt.isValid&&qt.texture&&m.init(qt,s.renderState)}if(zt&&zt.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let qt=0;qt<tt.length;qt++){let oe=tt[qt].camera;if(oe){let te=p[oe];te||(te=new gr,p[oe]=te);let Jt=f.getCameraImage(oe);te.sourceTexture=Jt}}}}for(let tt=0;tt<T.length;tt++){let Ft=S[tt],zt=T[tt];Ft!==null&&zt!==void 0&&zt.update(Ft,at,c||a)}jt&&jt(J,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}let Qt=new xd;Qt.setAnimationLoop(xe),this.setAnimationLoop=function(J){jt=J},this.dispose=function(){}}},N1=new ee,Sd=new Ot;Sd.set(-1,0,0,0,1,0,0,0,1);function F1(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Fc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,b,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),b=E.envMap,v=E.envMapRotation;b&&(m.envMap.value=b,m.envMapRotation.value.setFromMatrix4(N1.makeRotationFromEuler(v)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Sd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function O1(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let S=T.program;n.uniformBlockBinding(v,S)}function c(v,T){let S=s[v.id];S===void 0&&(m(v),S=h(v),s[v.id]=S,v.addEventListener("dispose",E));let R=T.program;n.updateUBOMapping(v,R);let _=t.render.frame;r[v.id]!==_&&(u(v),r[v.id]=_)}function h(v){let T=f();v.__bindingPointIndex=T;let S=i.createBuffer(),R=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let T=s[v.id],S=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let _=0,w=S.length;_<w;_++){let P=S[_];if(Array.isArray(P))for(let I=0,U=P.length;I<U;I++)d(P[I],_,I,R);else d(P,_,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,T,S,R){if(y(v,T,S,R)===!0){let _=v.__offset,w=v.value;if(Array.isArray(w)){let P=0;for(let I=0;I<w.length;I++){let U=w[I],W=p(U);g(U,v.__data,P),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(P+=W.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,T,S){typeof v=="number"||typeof v=="boolean"?T[0]=v:v.isMatrix3?(T[0]=v.elements[0],T[1]=v.elements[1],T[2]=v.elements[2],T[3]=0,T[4]=v.elements[3],T[5]=v.elements[4],T[6]=v.elements[5],T[7]=0,T[8]=v.elements[6],T[9]=v.elements[7],T[10]=v.elements[8],T[11]=0):ArrayBuffer.isView(v)?T.set(new v.constructor(v.buffer,v.byteOffset,T.length)):v.toArray(T,S)}function y(v,T,S,R){let _=v.value,w=T+"_"+S;if(R[w]===void 0)return typeof _=="number"||typeof _=="boolean"?R[w]=_:ArrayBuffer.isView(_)?R[w]=_.slice():R[w]=_.clone(),!0;{let P=R[w];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return R[w]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(v){let T=v.uniforms,S=0,R=16;for(let w=0,P=T.length;w<P;w++){let I=Array.isArray(T[w])?T[w]:[T[w]];for(let U=0,W=I.length;U<W;U++){let q=I[U],O=Array.isArray(q.value)?q.value:[q.value];for(let G=0,H=O.length;G<H;G++){let K=O[G],Q=p(K),ft=S%R,xt=ft%Q.boundary,yt=ft+xt;S+=xt,yt!==0&&R-yt<Q.storage&&(S+=R-yt),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=S,S+=Q.storage}}}let _=S%R;return _>0&&(S+=R-_),v.__size=S,v.__cache={},this}function p(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?Rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(T.boundary=16,T.storage=v.byteLength):Rt("WebGLRenderer: Unsupported uniform value type.",v),T}function E(v){let T=v.target;T.removeEventListener("dispose",E);let S=a.indexOf(T.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function b(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:b}}var B1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),kn=null;function z1(){return kn===null&&(kn=new or(B1,16,16,Mi,Je),kn.name="DFG_LUT",kn.minFilter=We,kn.magFilter=We,kn.wrapS=Dn,kn.wrapT=Dn,kn.generateMipmaps=!1,kn.needsUpdate=!0),kn}var cl=class{constructor(t={}){let{canvas:e=Hu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=sn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=d,m=new Set([To,Eo,So]),p=new Set([sn,En,Ts,ws,yo,Mo]),E=new Uint32Array(4),b=new Int32Array(4),v=new C,T=null,S=null,R=[],_=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Sn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,U=null,W=null,q=null,O=null;this._outputColorSpace=He;let G=0,H=0,K=null,Q=-1,ft=null,xt=new pe,yt=new pe,jt=null,xe=new It(0),Qt=0,J=e.width,at=e.height,tt=1,Ft=null,zt=null,Dt=new pe(0,0,J,at),Me=new pe(0,0,J,at),qt=!1,oe=new ys,te=!1,Jt=!1,we=new ee,Pe=new C,Fe=new pe,Ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function Ae(){return K===null?tt:1}let D=n;function en(M,N){return e.getContext(M,N)}try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"185"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",Rn,!1),D===null){let N="webgl2";if(D=en(N,M),D===null)throw en(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(M){throw Lt("WebGLRenderer: "+M.message),M}let ie,A,x,F,k,X,it,ot,Y,$,lt,Et,ut,ct,Pt,Ut,kt,L,rt,Z,ht,gt,j;function St(){ie=new q0(D),ie.init(),ht=new L1(D,ie),A=new B0(D,ie,t,ht),x=new P1(D,ie),A.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),W=D.createFramebuffer(),q=D.createFramebuffer(),O=D.createFramebuffer(),F=new $0(D),k=new g1,X=new I1(D,ie,x,k,A,ht,F),it=new X0(P),ot=new Qf(D),gt=new F0(D,ot),Y=new Y0(D,ot,F,gt),$=new K0(D,Y,ot,gt,F),L=new J0(D,A,X),Pt=new z0(k),lt=new m1(P,it,ie,A,gt,Pt),Et=new F1(P,k),ut=new _1,ct=new E1(ie),kt=new N0(P,it,x,$,g,l),Ut=new C1(P,$,A),j=new O1(D,F,A,x),rt=new O0(D,ie,F),Z=new Z0(D,ie,F),F.programs=lt.programs,P.capabilities=A,P.extensions=ie,P.properties=k,P.renderLists=ut,P.shadowMap=Ut,P.state=x,P.info=F}St(),y!==sn&&(w=new Q0(y,e.width,e.height,o,s,r));let Mt=new rh(P,D);this.xr=Mt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=ie.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ie.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(M){M!==void 0&&(tt=M,this.setSize(J,at,!1))},this.getSize=function(M){return M.set(J,at)},this.setSize=function(M,N,V=!0){if(Mt.isPresenting){Rt("WebGLRenderer: Can't change size while VR device is presenting.");return}J=M,at=N,e.width=Math.floor(M*tt),e.height=Math.floor(N*tt),V===!0&&(e.style.width=M+"px",e.style.height=N+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,M,N)},this.getDrawingBufferSize=function(M){return M.set(J*tt,at*tt).floor()},this.setDrawingBufferSize=function(M,N,V){J=M,at=N,tt=V,e.width=Math.floor(M*V),e.height=Math.floor(N*V),this.setViewport(0,0,M,N)},this.setEffects=function(M){if(y===sn){Lt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let N=0;N<M.length;N++)if(M[N].isOutputPass===!0){Rt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(xt)},this.getViewport=function(M){return M.copy(Dt)},this.setViewport=function(M,N,V,B){M.isVector4?Dt.set(M.x,M.y,M.z,M.w):Dt.set(M,N,V,B),x.viewport(xt.copy(Dt).multiplyScalar(tt).round())},this.getScissor=function(M){return M.copy(Me)},this.setScissor=function(M,N,V,B){M.isVector4?Me.set(M.x,M.y,M.z,M.w):Me.set(M,N,V,B),x.scissor(yt.copy(Me).multiplyScalar(tt).round())},this.getScissorTest=function(){return qt},this.setScissorTest=function(M){x.setScissorTest(qt=M)},this.setOpaqueSort=function(M){Ft=M},this.setTransparentSort=function(M){zt=M},this.getClearColor=function(M){return M.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(M=!0,N=!0,V=!0){let B=0;if(M){let z=!1;if(K!==null){let mt=K.texture.format;z=m.has(mt)}if(z){let mt=K.texture.type,vt=p.has(mt),pt=kt.getClearColor(),bt=kt.getClearAlpha(),Tt=pt.r,Vt=pt.g,Gt=pt.b;vt?(E[0]=Tt,E[1]=Vt,E[2]=Gt,E[3]=bt,D.clearBufferuiv(D.COLOR,0,E)):(b[0]=Tt,b[1]=Vt,b[2]=Gt,b[3]=bt,D.clearBufferiv(D.COLOR,0,b))}else B|=D.COLOR_BUFFER_BIT}N&&(B|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),V&&(B|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&D.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),U=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",Rn,!1),kt.dispose(),ut.dispose(),ct.dispose(),k.dispose(),it.dispose(),$.dispose(),gt.dispose(),j.dispose(),lt.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",vh),Mt.removeEventListener("sessionend",yh),Ti.stop()};function ve(M){M.preventDefault(),Qs("WebGLRenderer: Context Lost."),I=!0}function he(){Qs("WebGLRenderer: Context Restored."),I=!1;let M=F.autoReset,N=Ut.enabled,V=Ut.autoUpdate,B=Ut.needsUpdate,z=Ut.type;St(),F.autoReset=M,Ut.enabled=N,Ut.autoUpdate=V,Ut.needsUpdate=B,Ut.type=z}function Rn(M){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Cn(M){let N=M.target;N.removeEventListener("dispose",Cn),kd(N)}function kd(M){Vd(M),k.remove(M)}function Vd(M){let N=k.get(M).programs;N!==void 0&&(N.forEach(function(V){lt.releaseProgram(V)}),M.isShaderMaterial&&lt.releaseShaderCache(M))}this.renderBufferDirect=function(M,N,V,B,z,mt){N===null&&(N=Ve);let vt=z.isMesh&&z.matrixWorld.determinantAffine()<0,pt=Wd(M,N,V,B,z);x.setMaterial(B,vt);let bt=V.index,Tt=1;if(B.wireframe===!0){if(bt=Y.getWireframeAttribute(V),bt===void 0)return;Tt=2}let Vt=V.drawRange,Gt=V.attributes.position,wt=Vt.start*Tt,re=(Vt.start+Vt.count)*Tt;mt!==null&&(wt=Math.max(wt,mt.start*Tt),re=Math.min(re,(mt.start+mt.count)*Tt)),bt!==null?(wt=Math.max(wt,0),re=Math.min(re,bt.count)):Gt!=null&&(wt=Math.max(wt,0),re=Math.min(re,Gt.count));let be=re-wt;if(be<0||be===1/0)return;gt.setup(z,B,pt,V,bt);let ye,le=rt;if(bt!==null&&(ye=ot.get(bt),le=Z,le.setIndex(ye)),z.isMesh)B.wireframe===!0?(x.setLineWidth(B.wireframeLinewidth*Ae()),le.setMode(D.LINES)):le.setMode(D.TRIANGLES);else if(z.isLine){let Xe=B.linewidth;Xe===void 0&&(Xe=1),x.setLineWidth(Xe*Ae()),z.isLineSegments?le.setMode(D.LINES):z.isLineLoop?le.setMode(D.LINE_LOOP):le.setMode(D.LINE_STRIP)}else z.isPoints?le.setMode(D.POINTS):z.isSprite&&le.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(ie.get("WEBGL_multi_draw"))le.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Xe=z._multiDrawStarts,_t=z._multiDrawCounts,rn=z._multiDrawCount,Kt=bt?ot.get(bt).bytesPerElement:1,hn=k.get(B).currentProgram.getUniforms();for(let Pn=0;Pn<rn;Pn++)hn.setValue(D,"_gl_DrawID",Pn),le.render(Xe[Pn]/Kt,_t[Pn])}else if(z.isInstancedMesh)le.renderInstances(wt,be,z.count);else if(V.isInstancedBufferGeometry){let Xe=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,_t=Math.min(V.instanceCount,Xe);le.renderInstances(wt,be,_t)}else le.render(wt,be)};function _h(M,N,V){M.transparent===!0&&M.side===nn&&M.forceSinglePass===!1?(M.side=Qe,M.needsUpdate=!0,$r(M,N,V),M.side=jn,M.needsUpdate=!0,$r(M,N,V),M.side=nn):$r(M,N,V)}this.compile=function(M,N,V=null){V===null&&(V=M),S=ct.get(V),S.init(N),_.push(S),V.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),M!==V&&M.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(S.pushLight(z),z.castShadow&&S.pushShadow(z))}),S.setupLights();let B=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let mt=z.material;if(mt)if(Array.isArray(mt))for(let vt=0;vt<mt.length;vt++){let pt=mt[vt];_h(pt,V,z),B.add(pt)}else _h(mt,V,z),B.add(mt)}),S=_.pop(),B},this.compileAsync=function(M,N,V=null){let B=this.compile(M,N,V);return new Promise(z=>{function mt(){if(B.forEach(function(vt){k.get(vt).currentProgram.isReady()&&B.delete(vt)}),B.size===0){z(M);return}setTimeout(mt,10)}ie.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let Cl=null;function Hd(M){Cl&&Cl(M)}function vh(){Ti.stop()}function yh(){Ti.start()}let Ti=new xd;Ti.setAnimationLoop(Hd),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(M){Cl=M,Mt.setAnimationLoop(M),M===null?Ti.stop():Ti.start()},Mt.addEventListener("sessionstart",vh),Mt.addEventListener("sessionend",yh),this.render=function(M,N){if(N!==void 0&&N.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(M,N);let V=Mt.enabled===!0&&Mt.isPresenting===!0,B=w!==null&&(K===null||V)&&w.begin(P,K);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(N),N=Mt.getCamera()),M.isScene===!0&&M.onBeforeRender(P,M,N,K),S=ct.get(M,_.length),S.init(N),S.state.textureUnits=X.getTextureUnits(),_.push(S),we.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),oe.setFromProjectionMatrix(we,yn,N.reversedDepth),Jt=this.localClippingEnabled,te=Pt.init(this.clippingPlanes,Jt),T=ut.get(M,R.length),T.init(),R.push(T),Mt.enabled===!0&&Mt.isPresenting===!0){let vt=P.xr.getDepthSensingMesh();vt!==null&&Pl(vt,N,-1/0,P.sortObjects)}Pl(M,N,0,P.sortObjects),T.finish(),P.sortObjects===!0&&T.sort(Ft,zt,N.reversedDepth),_e=Mt.enabled===!1||Mt.isPresenting===!1||Mt.hasDepthSensing()===!1,_e&&kt.addToRenderList(T,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),te===!0&&Pt.beginShadows();let z=S.state.shadowsArray;if(Ut.render(z,M,N),te===!0&&Pt.endShadows(),(B&&w.hasRenderPass())===!1){let vt=T.opaque,pt=T.transmissive;if(S.setupLights(),N.isArrayCamera){let bt=N.cameras;if(pt.length>0)for(let Tt=0,Vt=bt.length;Tt<Vt;Tt++){let Gt=bt[Tt];bh(vt,pt,M,Gt)}_e&&kt.render(M);for(let Tt=0,Vt=bt.length;Tt<Vt;Tt++){let Gt=bt[Tt];Mh(T,M,Gt,Gt.viewport)}}else pt.length>0&&bh(vt,pt,M,N),_e&&kt.render(M),Mh(T,M,N)}K!==null&&H===0&&(X.updateMultisampleRenderTarget(K),X.updateRenderTargetMipmap(K)),B&&w.end(P),M.isScene===!0&&M.onAfterRender(P,M,N),gt.resetDefaultState(),Q=-1,ft=null,_.pop(),_.length>0?(S=_[_.length-1],X.setTextureUnits(S.state.textureUnits),te===!0&&Pt.setGlobalState(P.clippingPlanes,S.state.camera)):S=null,R.pop(),R.length>0?T=R[R.length-1]:T=null,U!==null&&U.renderEnd()};function Pl(M,N,V,B){if(M.visible===!1)return;if(M.layers.test(N.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(N);else if(M.isLightProbeGrid)S.pushLightProbeGrid(M);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||oe.intersectsSprite(M)){B&&Fe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(we);let vt=$.update(M),pt=M.material;pt.visible&&T.push(M,vt,pt,V,Fe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||oe.intersectsObject(M))){let vt=$.update(M),pt=M.material;if(B&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Fe.copy(M.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Fe.copy(vt.boundingSphere.center)),Fe.applyMatrix4(M.matrixWorld).applyMatrix4(we)),Array.isArray(pt)){let bt=vt.groups;for(let Tt=0,Vt=bt.length;Tt<Vt;Tt++){let Gt=bt[Tt],wt=pt[Gt.materialIndex];wt&&wt.visible&&T.push(M,vt,wt,V,Fe.z,Gt)}}else pt.visible&&T.push(M,vt,pt,V,Fe.z,null)}}let mt=M.children;for(let vt=0,pt=mt.length;vt<pt;vt++)Pl(mt[vt],N,V,B)}function Mh(M,N,V,B){let{opaque:z,transmissive:mt,transparent:vt}=M;S.setupLightsView(V),te===!0&&Pt.setGlobalState(P.clippingPlanes,V),B&&x.viewport(xt.copy(B)),z.length>0&&Zr(z,N,V),mt.length>0&&Zr(mt,N,V),vt.length>0&&Zr(vt,N,V),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function bh(M,N,V,B){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[B.id]===void 0){let wt=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[B.id]=new Le(1,1,{generateMipmaps:!0,type:wt?Je:sn,minFilter:vi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace})}let mt=S.state.transmissionRenderTarget[B.id],vt=B.viewport||xt;mt.setSize(vt.z*P.transmissionResolutionScale,vt.w*P.transmissionResolutionScale);let pt=P.getRenderTarget(),bt=P.getActiveCubeFace(),Tt=P.getActiveMipmapLevel();P.setRenderTarget(mt),P.getClearColor(xe),Qt=P.getClearAlpha(),Qt<1&&P.setClearColor(16777215,.5),P.clear(),_e&&kt.render(V);let Vt=P.toneMapping;P.toneMapping=Sn;let Gt=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),S.setupLightsView(B),te===!0&&Pt.setGlobalState(P.clippingPlanes,B),Zr(M,V,B),X.updateMultisampleRenderTarget(mt),X.updateRenderTargetMipmap(mt),ie.has("WEBGL_multisampled_render_to_texture")===!1){let wt=!1;for(let re=0,be=N.length;re<be;re++){let ye=N[re],{object:le,geometry:Xe,material:_t,group:rn}=ye;if(_t.side===nn&&le.layers.test(B.layers)){let Kt=_t.side;_t.side=Qe,_t.needsUpdate=!0,Sh(le,V,B,Xe,_t,rn),_t.side=Kt,_t.needsUpdate=!0,wt=!0}}wt===!0&&(X.updateMultisampleRenderTarget(mt),X.updateRenderTargetMipmap(mt))}P.setRenderTarget(pt,bt,Tt),P.setClearColor(xe,Qt),Gt!==void 0&&(B.viewport=Gt),P.toneMapping=Vt}function Zr(M,N,V){let B=N.isScene===!0?N.overrideMaterial:null;for(let z=0,mt=M.length;z<mt;z++){let vt=M[z],{object:pt,geometry:bt,group:Tt}=vt,Vt=vt.material;Vt.allowOverride===!0&&B!==null&&(Vt=B),pt.layers.test(V.layers)&&Sh(pt,N,V,bt,Vt,Tt)}}function Sh(M,N,V,B,z,mt){M.onBeforeRender(P,N,V,B,z,mt),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(P,N,V,B,M,mt),z.transparent===!0&&z.side===nn&&z.forceSinglePass===!1?(z.side=Qe,z.needsUpdate=!0,P.renderBufferDirect(V,N,B,z,M,mt),z.side=jn,z.needsUpdate=!0,P.renderBufferDirect(V,N,B,z,M,mt),z.side=nn):P.renderBufferDirect(V,N,B,z,M,mt),M.onAfterRender(P,N,V,B,z,mt)}function $r(M,N,V){N.isScene!==!0&&(N=Ve);let B=k.get(M),z=S.state.lights,mt=S.state.shadowsArray,vt=z.state.version,pt=lt.getParameters(M,z.state,mt,N,V,S.state.lightProbeGridArray),bt=lt.getProgramCacheKey(pt),Tt=B.programs;B.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?N.environment:null,B.fog=N.fog;let Vt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;B.envMap=it.get(M.envMap||B.environment,Vt),B.envMapRotation=B.environment!==null&&M.envMap===null?N.environmentRotation:M.envMapRotation,Tt===void 0&&(M.addEventListener("dispose",Cn),Tt=new Map,B.programs=Tt);let Gt=Tt.get(bt);if(Gt!==void 0){if(B.currentProgram===Gt&&B.lightsStateVersion===vt)return Th(M,pt),Gt}else pt.uniforms=lt.getUniforms(M),U!==null&&M.isNodeMaterial&&U.build(M,V,pt),M.onBeforeCompile(pt,P),Gt=lt.acquireProgram(pt,bt),Tt.set(bt,Gt),B.uniforms=pt.uniforms;let wt=B.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(wt.clippingPlanes=Pt.uniform),Th(M,pt),B.needsLights=qd(M),B.lightsStateVersion=vt,B.needsLights&&(wt.ambientLightColor.value=z.state.ambient,wt.lightProbe.value=z.state.probe,wt.directionalLights.value=z.state.directional,wt.directionalLightShadows.value=z.state.directionalShadow,wt.spotLights.value=z.state.spot,wt.spotLightShadows.value=z.state.spotShadow,wt.rectAreaLights.value=z.state.rectArea,wt.ltc_1.value=z.state.rectAreaLTC1,wt.ltc_2.value=z.state.rectAreaLTC2,wt.pointLights.value=z.state.point,wt.pointLightShadows.value=z.state.pointShadow,wt.hemisphereLights.value=z.state.hemi,wt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,wt.spotLightMatrix.value=z.state.spotLightMatrix,wt.spotLightMap.value=z.state.spotLightMap,wt.pointShadowMatrix.value=z.state.pointShadowMatrix),B.lightProbeGrid=S.state.lightProbeGridArray.length>0,B.currentProgram=Gt,B.uniformsList=null,Gt}function Eh(M){if(M.uniformsList===null){let N=M.currentProgram.getUniforms();M.uniformsList=Rs.seqWithValue(N.seq,M.uniforms)}return M.uniformsList}function Th(M,N){let V=k.get(M);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.batchingColor=N.batchingColor,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.instancingMorph=N.instancingMorph,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function Gd(M,N){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;v.setFromMatrixPosition(N.matrixWorld);for(let V=0,B=M.length;V<B;V++){let z=M[V];if(z.texture!==null&&z.boundingBox.containsPoint(v))return z}return null}function Wd(M,N,V,B,z){N.isScene!==!0&&(N=Ve),X.resetTextureUnits();let mt=N.fog,vt=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?N.environment:null,pt=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Yt.workingColorSpace,bt=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Tt=it.get(B.envMap||vt,bt),Vt=B.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),wt=!!V.morphAttributes.position,re=!!V.morphAttributes.normal,be=!!V.morphAttributes.color,ye=Sn;B.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ye=P.toneMapping);let le=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Xe=le!==void 0?le.length:0,_t=k.get(B),rn=S.state.lights;if(te===!0&&(Jt===!0||M!==ft)){let ue=M===ft&&B.id===Q;Pt.setState(B,M,ue)}let Kt=!1;B.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==rn.state.version||_t.outputColorSpace!==pt||z.isBatchedMesh&&_t.batching===!1||!z.isBatchedMesh&&_t.batching===!0||z.isBatchedMesh&&_t.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&_t.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&_t.instancing===!1||!z.isInstancedMesh&&_t.instancing===!0||z.isSkinnedMesh&&_t.skinning===!1||!z.isSkinnedMesh&&_t.skinning===!0||z.isInstancedMesh&&_t.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&_t.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&_t.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&_t.instancingMorph===!1&&z.morphTexture!==null||_t.envMap!==Tt||B.fog===!0&&_t.fog!==mt||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==Pt.numPlanes||_t.numIntersection!==Pt.numIntersection)||_t.vertexAlphas!==Vt||_t.vertexTangents!==Gt||_t.morphTargets!==wt||_t.morphNormals!==re||_t.morphColors!==be||_t.toneMapping!==ye||_t.morphTargetsCount!==Xe||!!_t.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Kt=!0):(Kt=!0,_t.__version=B.version);let hn=_t.currentProgram;Kt===!0&&(hn=$r(B,N,z),U&&B.isNodeMaterial&&U.onUpdateProgram(B,hn,_t));let Pn=!1,ri=!1,Xi=!1,ce=hn.getUniforms(),Se=_t.uniforms;if(x.useProgram(hn.program)&&(Pn=!0,ri=!0,Xi=!0),B.id!==Q&&(Q=B.id,ri=!0),_t.needsLights){let ue=Gd(S.state.lightProbeGridArray,z);_t.lightProbeGrid!==ue&&(_t.lightProbeGrid=ue,ri=!0)}if(Pn||ft!==M){x.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),ce.setValue(D,"projectionMatrix",M.projectionMatrix),ce.setValue(D,"viewMatrix",M.matrixWorldInverse);let oi=ce.map.cameraPosition;oi!==void 0&&oi.setValue(D,Pe.setFromMatrixPosition(M.matrixWorld)),A.logarithmicDepthBuffer&&ce.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ce.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),ft!==M&&(ft=M,ri=!0,Xi=!0)}if(_t.needsLights&&(rn.state.directionalShadowMap.length>0&&ce.setValue(D,"directionalShadowMap",rn.state.directionalShadowMap,X),rn.state.spotShadowMap.length>0&&ce.setValue(D,"spotShadowMap",rn.state.spotShadowMap,X),rn.state.pointShadowMap.length>0&&ce.setValue(D,"pointShadowMap",rn.state.pointShadowMap,X)),z.isSkinnedMesh){ce.setOptional(D,z,"bindMatrix"),ce.setOptional(D,z,"bindMatrixInverse");let ue=z.skeleton;ue&&(ue.boneTexture===null&&ue.computeBoneTexture(),ce.setValue(D,"boneTexture",ue.boneTexture,X))}z.isBatchedMesh&&(ce.setOptional(D,z,"batchingTexture"),ce.setValue(D,"batchingTexture",z._matricesTexture,X),ce.setOptional(D,z,"batchingIdTexture"),ce.setValue(D,"batchingIdTexture",z._indirectTexture,X),ce.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&ce.setValue(D,"batchingColorTexture",z._colorsTexture,X));let ai=V.morphAttributes;if((ai.position!==void 0||ai.normal!==void 0||ai.color!==void 0)&&L.update(z,V,hn),(ri||_t.receiveShadow!==z.receiveShadow)&&(_t.receiveShadow=z.receiveShadow,ce.setValue(D,"receiveShadow",z.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&N.environment!==null&&(Se.envMapIntensity.value=N.environmentIntensity),Se.dfgLUT!==void 0&&(Se.dfgLUT.value=z1()),ri){if(ce.setValue(D,"toneMappingExposure",P.toneMappingExposure),_t.needsLights&&Xd(Se,Xi),mt&&B.fog===!0&&Et.refreshFogUniforms(Se,mt),Et.refreshMaterialUniforms(Se,B,tt,at,S.state.transmissionRenderTarget[M.id]),_t.needsLights&&_t.lightProbeGrid){let ue=_t.lightProbeGrid;Se.probesSH.value=ue.texture,Se.probesMin.value.copy(ue.boundingBox.min),Se.probesMax.value.copy(ue.boundingBox.max),Se.probesResolution.value.copy(ue.resolution)}Rs.upload(D,Eh(_t),Se,X)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Rs.upload(D,Eh(_t),Se,X),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ce.setValue(D,"center",z.center),ce.setValue(D,"modelViewMatrix",z.modelViewMatrix),ce.setValue(D,"normalMatrix",z.normalMatrix),ce.setValue(D,"modelMatrix",z.matrixWorld),B.uniformsGroups!==void 0){let ue=B.uniformsGroups;for(let oi=0,qi=ue.length;oi<qi;oi++){let wh=ue[oi];j.update(wh,hn),j.bind(wh,hn)}}return hn}function Xd(M,N){M.ambientLightColor.needsUpdate=N,M.lightProbe.needsUpdate=N,M.directionalLights.needsUpdate=N,M.directionalLightShadows.needsUpdate=N,M.pointLights.needsUpdate=N,M.pointLightShadows.needsUpdate=N,M.spotLights.needsUpdate=N,M.spotLightShadows.needsUpdate=N,M.rectAreaLights.needsUpdate=N,M.hemisphereLights.needsUpdate=N}function qd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(M,N,V){let B=k.get(M);B.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),k.get(M.texture).__webglTexture=N,k.get(M.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:V,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,N){let V=k.get(M);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(M,N=0,V=0){K=M,G=N,H=V;let B=null,z=!1,mt=!1;if(M){let pt=k.get(M);if(pt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,pt.__webglFramebuffer),xt.copy(M.viewport),yt.copy(M.scissor),jt=M.scissorTest,x.viewport(xt),x.scissor(yt),x.setScissorTest(jt),Q=-1;return}else if(pt.__webglFramebuffer===void 0)X.setupRenderTarget(M);else if(pt.__hasExternalTextures)X.rebindTextures(M,k.get(M.texture).__webglTexture,k.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Vt=M.depthTexture;if(pt.__boundDepthTexture!==Vt){if(Vt!==null&&k.has(Vt)&&(M.width!==Vt.image.width||M.height!==Vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(M)}}let bt=M.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(mt=!0);let Tt=k.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Tt[N])?B=Tt[N][V]:B=Tt[N],z=!0):M.samples>0&&X.useMultisampledRTT(M)===!1?B=k.get(M).__webglMultisampledFramebuffer:Array.isArray(Tt)?B=Tt[V]:B=Tt,xt.copy(M.viewport),yt.copy(M.scissor),jt=M.scissorTest}else xt.copy(Dt).multiplyScalar(tt).floor(),yt.copy(Me).multiplyScalar(tt).floor(),jt=qt;if(V!==0&&(B=W),x.bindFramebuffer(D.FRAMEBUFFER,B)&&x.drawBuffers(M,B),x.viewport(xt),x.scissor(yt),x.setScissorTest(jt),z){let pt=k.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,pt.__webglTexture,V)}else if(mt){let pt=N;for(let bt=0;bt<M.textures.length;bt++){let Tt=k.get(M.textures[bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+bt,Tt.__webglTexture,V,pt)}}else if(M!==null&&V!==0){let pt=k.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pt.__webglTexture,V)}Q=-1},this.readRenderTargetPixels=function(M,N,V,B,z,mt,vt,pt=0){if(!(M&&M.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){x.bindFramebuffer(D.FRAMEBUFFER,bt);try{let Tt=M.textures[pt],Vt=Tt.format,Gt=Tt.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pt),!A.textureFormatReadable(Vt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!A.textureTypeReadable(Gt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=M.width-B&&V>=0&&V<=M.height-z&&D.readPixels(N,V,B,z,ht.convert(Vt),ht.convert(Gt),mt)}finally{let Tt=K!==null?k.get(K).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(M,N,V,B,z,mt,vt,pt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=k.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt)if(N>=0&&N<=M.width-B&&V>=0&&V<=M.height-z){x.bindFramebuffer(D.FRAMEBUFFER,bt);let Tt=M.textures[pt],Vt=Tt.format,Gt=Tt.type;if(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+pt),!A.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!A.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let wt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),D.readPixels(N,V,B,z,ht.convert(Vt),ht.convert(Gt),0);let re=K!==null?k.get(K).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,re);let be=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Wu(D,be,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,wt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.deleteBuffer(wt),D.deleteSync(be),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,N=null,V=0){let B=Math.pow(2,-V),z=Math.floor(M.image.width*B),mt=Math.floor(M.image.height*B),vt=N!==null?N.x:0,pt=N!==null?N.y:0;X.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,V,0,0,vt,pt,z,mt),x.unbindTexture()},this.copyTextureToTexture=function(M,N,V=null,B=null,z=0,mt=0){let vt,pt,bt,Tt,Vt,Gt,wt,re,be,ye=M.isCompressedTexture?M.mipmaps[mt]:M.image;if(V!==null)vt=V.max.x-V.min.x,pt=V.max.y-V.min.y,bt=V.isBox3?V.max.z-V.min.z:1,Tt=V.min.x,Vt=V.min.y,Gt=V.isBox3?V.min.z:0;else{let Se=Math.pow(2,-z);vt=Math.floor(ye.width*Se),pt=Math.floor(ye.height*Se),M.isDataArrayTexture?bt=ye.depth:M.isData3DTexture?bt=Math.floor(ye.depth*Se):bt=1,Tt=0,Vt=0,Gt=0}B!==null?(wt=B.x,re=B.y,be=B.z):(wt=0,re=0,be=0);let le=ht.convert(N.format),Xe=ht.convert(N.type),_t;N.isData3DTexture?(X.setTexture3D(N,0),_t=D.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(X.setTexture2DArray(N,0),_t=D.TEXTURE_2D_ARRAY):(X.setTexture2D(N,0),_t=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);let rn=x.getParameter(D.UNPACK_ROW_LENGTH),Kt=x.getParameter(D.UNPACK_IMAGE_HEIGHT),hn=x.getParameter(D.UNPACK_SKIP_PIXELS),Pn=x.getParameter(D.UNPACK_SKIP_ROWS),ri=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,ye.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ye.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,Tt),x.pixelStorei(D.UNPACK_SKIP_ROWS,Vt),x.pixelStorei(D.UNPACK_SKIP_IMAGES,Gt);let Xi=M.isDataArrayTexture||M.isData3DTexture,ce=N.isDataArrayTexture||N.isData3DTexture;if(M.isDepthTexture){let Se=k.get(M),ai=k.get(N),ue=k.get(Se.__renderTarget),oi=k.get(ai.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,ue.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let qi=0;qi<bt;qi++)Xi&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(M).__webglTexture,z,Gt+qi),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(N).__webglTexture,mt,be+qi)),D.blitFramebuffer(Tt,Vt,vt,pt,wt,re,vt,pt,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||k.has(M)){let Se=k.get(M),ai=k.get(N);x.bindFramebuffer(D.READ_FRAMEBUFFER,q),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,O);for(let ue=0;ue<bt;ue++)Xi?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Se.__webglTexture,z,Gt+ue):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Se.__webglTexture,z),ce?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ai.__webglTexture,mt,be+ue):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ai.__webglTexture,mt),z!==0?D.blitFramebuffer(Tt,Vt,vt,pt,wt,re,vt,pt,D.COLOR_BUFFER_BIT,D.NEAREST):ce?D.copyTexSubImage3D(_t,mt,wt,re,be+ue,Tt,Vt,vt,pt):D.copyTexSubImage2D(_t,mt,wt,re,Tt,Vt,vt,pt);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else ce?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(_t,mt,wt,re,be,vt,pt,bt,le,Xe,ye.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(_t,mt,wt,re,be,vt,pt,bt,le,ye.data):D.texSubImage3D(_t,mt,wt,re,be,vt,pt,bt,le,Xe,ye):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,mt,wt,re,vt,pt,le,Xe,ye.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,mt,wt,re,ye.width,ye.height,le,ye.data):D.texSubImage2D(D.TEXTURE_2D,mt,wt,re,vt,pt,le,Xe,ye);x.pixelStorei(D.UNPACK_ROW_LENGTH,rn),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Kt),x.pixelStorei(D.UNPACK_SKIP_PIXELS,hn),x.pixelStorei(D.UNPACK_SKIP_ROWS,Pn),x.pixelStorei(D.UNPACK_SKIP_IMAGES,ri),mt===0&&N.generateMipmaps&&D.generateMipmap(_t),x.unbindTexture()},this.initRenderTarget=function(M){k.get(M).__webglFramebuffer===void 0&&X.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?X.setTextureCube(M,0):M.isData3DTexture?X.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?X.setTexture2DArray(M,0):X.setTexture2D(M,0),x.unbindTexture()},this.resetState=function(){G=0,H=0,K=null,x.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}};var Ps={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Tn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},k1=new zi(-1,1,1,-1,0,1),ah=class extends fe{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},V1=new ah,Is=class{constructor(t){this._mesh=new Nt(V1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,k1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Ls=class extends Tn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof me?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=zn.clone(t.uniforms),this.material=new me({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Is(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Xr=class extends Tn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},dl=class extends Tn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var fl=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new st);this._width=n.width,this._height=n.height,e=new Le(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Je}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ls(Ps),this.copyPass.material.blending=fn,this.timer=new Cr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xr!==void 0&&(a instanceof Xr?n=!0:a instanceof dl&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var pl=class extends Tn{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new It}render(t,e,n){let s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}};var Td={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new It(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ds=class i extends Tn{constructor(t,e=1,n,s){super(),this.strength=e,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new st(t.x,t.y):new st(256,256),this.clearColor=new It(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Le(r,a,{type:Je}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Le(r,a,{type:Je});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new Le(r,a,{type:Je});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=Td;this.highPassUniforms=zn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new me({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new st(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=zn.clone(Ps.uniforms),this.blendMaterial=new me({uniforms:this.copyUniforms,vertexShader:Ps.vertexShader,fragmentShader:Ps.fragmentShader,premultipliedAlpha:!0,blending:Zt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new It,this._oldClearAlpha=1,this._basic=new $t,this._fsQuad=new Is(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new st(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){let e=[],n=t/3;for(let s=0;s<t;s++)e.push(.39894*Math.exp(-.5*s*s/(n*n))/n);return new me({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`

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
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new me({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};Ds.BlurDirectionX=new st(1,0);Ds.BlurDirectionY=new st(0,1);var wd={uniforms:{tDiffuse:{value:null},time:{value:0},speed:{value:0},glitch:{value:0},underwater:{value:0},resolution:{value:new st(1,1)}},vertexShader:`
    varying vec2 vUv;
    void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float time;
    uniform float speed;
    uniform float glitch;
    uniform float underwater;
    uniform vec2 resolution;
    varying vec2 vUv;
    float hash(float n){return fract(sin(n)*43758.5453123);}
    void main(){
      vec2 uv=vUv;
      vec2 p=uv-.5;
      float r=length(p);
      float line=floor(uv.y*resolution.y/4.0);
      float gate=step(.86,hash(line+floor(time*10.0)*17.0))*glitch;
      uv.x+=(hash(line*3.17+floor(time*18.0))-.5)*.032*gate;
      vec3 blur=vec3(0.0);
      for(int i=0;i<7;i++){
        float fi=float(i)/6.0;
        vec2 sampleUv=clamp(uv-p*speed*fi*.052,vec2(.001),vec2(.999));
        blur+=texture2D(tDiffuse,sampleUv).rgb;
      }
      blur/=7.0;
      float pulse=.0025+.014*speed;
      vec2 radial=normalize(p+vec2(.0001))*pulse*(.25+r*2.1);
      float rr=texture2D(tDiffuse,uv+radial).r;
      float gg=texture2D(tDiffuse,uv).g;
      float bb=texture2D(tDiffuse,uv-radial).b;
      vec3 col=mix(vec3(rr,gg,bb),blur,.72*speed);
      float scan=.94+.06*sin((uv.y*resolution.y+time*80.0)*3.14159);
      float angle=atan(p.y,p.x);
      float spoke=pow(abs(sin(angle*21.0-time*8.0)),22.0)*(1.0-smoothstep(.12,.78,r))*speed;
      float streak=pow(max(0.0,1.0-r),7.0)*speed*.16+spoke*.22;
      col*=scan;
      col+=mix(vec3(.05,.65,.8),vec3(.95,.08,.55),step(0.0,sin(angle*9.0)))*streak;
      col=mix(col,col*vec3(.34,.9,1.15)+vec3(0.,.05,.12)*sin(uv.y*25.0+time),underwater*.52);
      float vignette=smoothstep(.78,.18,r);
      col*=mix(.68,1.0,vignette);
      gl_FragColor=vec4(col,1.0);
    }
  `},oh={uniforms:{time:{value:0},colorA:{value:new It(133398)},colorB:{value:new It(647156)}},vertexShader:`
    uniform float time; varying float vWave; varying vec2 vUv;
    void main(){
      vUv=uv; vec3 p=position;
      float w=sin(p.x*.45+time*2.2)*.23+sin(p.y*.81-time*1.7)*.11;
      p.z+=w; vWave=w;
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.0);
    }
  `,fragmentShader:`
    uniform float time; uniform vec3 colorA; uniform vec3 colorB; varying float vWave; varying vec2 vUv;
    void main(){
      float lane=pow(.5+.5*sin(vUv.y*88.0+time*2.0+sin(vUv.x*18.0)*2.0),14.0);
      vec3 c=mix(colorA,colorB,clamp(vWave*2.2+.24+lane*.55,0.0,1.0));
      gl_FragColor=vec4(c,.58+lane*.18);
    }
  `},lh={uniforms:{time:{value:0},color:{value:new It(5699327)}},vertexShader:`
    uniform float time; attribute float size; attribute float seed; varying float vAlpha;
    void main(){
      vec3 p=position; p.y+=sin(time*.7+seed*9.0)*.35; p.x+=cos(time*.4+seed*15.0)*.16;
      vec4 mv=modelViewMatrix*vec4(p,1.0); gl_PointSize=size*(250.0/-mv.z); gl_Position=projectionMatrix*mv;
      vAlpha=.45+.45*sin(time*1.7+seed*17.0);
    }
  `,fragmentShader:`
    uniform vec3 color; varying float vAlpha;
    void main(){float d=length(gl_PointCoord-.5); float a=smoothstep(.5,.0,d)*vAlpha; gl_FragColor=vec4(color,a);}
  `};var ge=Object.freeze({CASTLE_IDLE:"CASTLE_IDLE",BREACH:"BREACH",SYMBOL_TUNNEL:"SYMBOL_TUNNEL",DISTRICT_RUN:"DISTRICT_RUN",HUB_REVEAL:"HUB_REVEAL",FREE_EXPLORE:"FREE_EXPLORE",DISTRICT_FLYIN:"DISTRICT_FLYIN"}),Si=[{start:0,end:4,phase:"BREACH",id:"castle",code:"OSK-00",jp:"\u5927\u962A\u57CE",meta:"CASTLE // BREACH",expression:"surprise",subtitle:"\u57CE\u58C1\u3092\u7834\u3063\u3066\u3001\u90FD\u5E02\u4FE1\u53F7\u3078\u3002",ko:"\uC131\uBCBD\uC744 \uAE68\uACE0, \uB3C4\uC2DC \uC2E0\uD638\uB85C \uC9C4\uC785\uD574."},{start:4,end:8,phase:"SYMBOL_TUNNEL",id:"tunnel",code:"OSK-X",jp:"\u5927\u962A\u4FE1\u53F7",meta:"SYMBOL // TUNNEL",expression:"warning",subtitle:"\u5927\u962A\u306E\u8A18\u53F7\u304C\u3001\u524D\u65B9\u3092\u6A2A\u5207\u308B\u3002",ko:"\uC624\uC0AC\uCE74\uC758 \uC0C1\uC9D5\uB4E4\uC774 \uC804\uBC29\uC744 \uAC00\uB85C\uC9C8\uB7EC."},{start:8,end:14,phase:"DISTRICT_RUN",id:"dotonbori",code:"OSK-01",jp:"\u9053\u9813\u5800",meta:"NIGHT \xB7 FOOD \xB7 RIVER",expression:"smile",subtitle:"\u6C34\u9762\u3059\u308C\u3059\u308C\u3001\u9053\u9813\u5800\u3078\u3002",ko:"\uC218\uBA74 \uBC14\uB85C \uC704, \uB3C4\uD1A4\uBCF4\uB9AC\uB85C."},{start:14,end:20,phase:"DISTRICT_RUN",id:"shinsekai",code:"OSK-02",jp:"\u65B0\u4E16\u754C",meta:"TOWER \xB7 LANTERN \xB7 RISE",expression:"neutral",subtitle:"\u5149\u306E\u5854\u3092\u3001\u5782\u76F4\u306B\u99C6\u3051\u4E0A\u304C\u308B\u3002",ko:"\uBE5B\uC758 \uD0D1\uC744 \uC218\uC9C1\uC73C\uB85C \uCE58\uACE0 \uC62C\uB77C\uAC00."},{start:20,end:26,phase:"DISTRICT_RUN",id:"kaiyukan",code:"OSK-03",jp:"\u6D77\u904A\u9928",meta:"DEEP \xB7 BLUE \xB7 GIANT",expression:"surprise",subtitle:"\u6DF1\u6D77\u4FE1\u53F7\u3002\u5DE8\u5927\u5F71\u3001\u63A5\u8FD1\u3002",ko:"\uC2EC\uD574 \uC2E0\uD638. \uAC70\uB300\uD55C \uADF8\uB9BC\uC790\uAC00 \uC811\uADFC\uD574."},{start:26,end:32,phase:"DISTRICT_RUN",id:"umeda",code:"OSK-04",jp:"\u6885\u7530",meta:"SKY \xB7 RAIL \xB7 CIRCUIT",expression:"warning",subtitle:"\u5149\u306E\u7DDA\u8DEF\u3067\u3001\u7A7A\u4E2D\u5EAD\u5712\u3078\u3002",ko:"\uBE5B\uC758 \uC120\uB85C\uB97C \uD0C0\uACE0 \uACF5\uC911\uC815\uC6D0\uC73C\uB85C."},{start:32,end:38,phase:"DISTRICT_RUN",id:"food",code:"OSK-05",jp:"\u5927\u962A\u7F8E\u98DF",meta:"LOCK \xB7 TASTE \xB7 SIGNAL",expression:"smile",subtitle:"\u72D9\u3063\u305F\u5473\u3092\u3001\u4FE1\u53F7\u306B\u4FDD\u5B58\u3057\u3066\u3002",ko:"\uB9C8\uC74C\uC5D0 \uB4E0 \uB9DB\uC744 \uC2E0\uD638\uB85C \uC800\uC7A5\uD574."},{start:38,end:45,phase:"HUB_REVEAL",id:"hub",code:"OSK-\u221E",jp:"\u5927\u962A\u7DB2",meta:"CITY HUB // UNLOCK",expression:"smile",subtitle:"\u5168\u30EB\u30FC\u30C8\u63A5\u7D9A\u3002\u597D\u304D\u306A\u5834\u6240\u3078\u3002",ko:"\uC804 \uB178\uC120 \uC5F0\uACB0. \uC6D0\uD558\uB294 \uACF3\uC73C\uB85C \uAC00."}],ml=Object.freeze([{at:4.1,id:"castle",variant:0},{at:4.62,id:"dotonbori",variant:1},{at:5.14,id:"shinsekai",variant:2},{at:8.1,id:"castle",variant:1},{at:8.62,id:"food",variant:2},{at:9.14,id:"dotonbori",variant:0},{at:14.1,id:"dotonbori",variant:2},{at:14.62,id:"food",variant:0},{at:15.14,id:"shinsekai",variant:1},{at:20.1,id:"shinsekai",variant:0},{at:20.62,id:"castle",variant:1},{at:21.14,id:"kaiyukan",variant:2},{at:26.1,id:"kaiyukan",variant:1},{at:26.62,id:"castle",variant:2},{at:27.14,id:"umeda",variant:0},{at:32.1,id:"umeda",variant:2},{at:32.62,id:"dotonbori",variant:0},{at:33.14,id:"food",variant:1}]),gl=Object.freeze([{start:9.65,end:12.9,id:"dotonbori"},{start:15.65,end:18.9,id:"shinsekai"},{start:21.65,end:24.9,id:"kaiyukan"},{start:27.65,end:30.9,id:"umeda"},{start:33.65,end:36.9,id:"food"}]),Ce=[{id:"castle",jp:"\u5927\u962A\u57CE",en:"OSAKA CASTLE",color:5896447,geo:[34.6873,135.5262],pos:[0,0,0],background:"osaka-castle-neon-v2.webp",micro:["\u5927\u962A\u57CE\u516C\u5712","\u68EE\u30CE\u5BAE"]},{id:"dotonbori",jp:"\u9053\u9813\u5800",en:"DOTONBORI",color:16723112,geo:[34.6687,135.5013],pos:[0,-2,-108],background:"osaka-dotonbori-neon-v3.webp",micro:["\u4E00\u862D \u9053\u9813\u5800","\u5927\u962A\u30C8\u30F3\u30C6\u30AD"]},{id:"shinsekai",jp:"\u65B0\u4E16\u754C",en:"SHINSEKAI",color:16751922,geo:[34.6525,135.5063],pos:[42,14,-166],background:"osaka-shinsekai-neon-v3.webp",micro:["\u98DB\u7530\u65B0\u5730","\u4E32\u30AB\u30C4"]},{id:"kaiyukan",jp:"\u6D77\u904A\u9928",en:"KAIYUKAN",color:2877695,geo:[34.6545,135.4289],pos:[6,-10,-224],background:"osaka-kaiyukan-neon-v3.webp",micro:["\u5927\u962A\u6E2F","\u5929\u4FDD\u5C71"]},{id:"umeda",jp:"\u6885\u7530",en:"UMEDA SKY",color:11961343,geo:[34.7053,135.4897],pos:[-42,28,-282],background:"osaka-umeda-neon-v3.webp",micro:["\u3046\u307E\u308B","\u7A7A\u4E2D\u5EAD\u5712"]},{id:"food",jp:"\u9ED2\u9580\u5E02\u5834",en:"KUROMON MARKET",color:16735033,geo:[34.6653,135.506],pos:[4,2,-342],background:"osaka-food-neon-v3.webp",micro:["\u30E9\u30FC\u30E1\u30F3\u8358","\u305F\u3053\u713C\u304D"]}],xl=[{jp:"\u6CD5\u5584\u5BFA\u6A2A\u4E01",en:"HOZENJI",geo:[34.6676,135.5026]},{jp:"\u30A2\u30E1\u30EA\u30AB\u6751",en:"AMEMURA",geo:[34.6721,135.4974]},{jp:"\u96E3\u6CE2\u516B\u962A",en:"YASAKA",geo:[34.6615,135.4965]},{jp:"\u3042\u3079\u306E\u30CF\u30EB\u30AB\u30B9",en:"HARUKAS",geo:[34.6466,135.5139]},{jp:"USJ",en:"UNIVERSAL",geo:[34.6654,135.4323]}],ch=["TAKOYAKI","OKONOMIYAKI","RAMEN","KUSHIKATSU"];var Ee={source:"OpenStreetMap contributors",license:"ODbL 1.0",attribution:"Map data \xA9 OpenStreetMap contributors",copyrightUrl:"https://www.openstreetmap.org/copyright",bounds:{south:34.64,west:135.4145,north:34.7105,east:135.5355,width:44,height:32},layerCounts:{primary:90,secondary:75,tertiary:150,rail:90,water:57},layers:{primary:[[[12.27,8.385],[11.997,10.071],[11.281,12.634],[10.778,14.085],[10.777,14.46],[10.948,14.823],[11.158,15.013],[11.398,15.12],[13.365,15.461],[14.242,15.973],[20.225,23.776],[20.553,24.101],[21.337,24.46],[21.775,24.523],[25.809,23.902],[26.313,23.931],[26.65,24.154],[26.854,24.517],[26.909,26.394]],[[-30.769,-18.006],[-27.006,-19.006],[-26.279,-19.05],[-24.336,-18.619],[-21.655,-17.884],[-20.567,-17.411],[-19.972,-17.274],[-18.669,-17.124],[-17.41,-16.782],[-16.619,-16.414],[-16.167,-16.124],[-15.206,-15.032],[-14.888,-14.808],[-14.603,-14.701],[-14.202,-14.676],[-13.861,-14.748],[-12.71,-15.358],[-12.074,-15.559],[-11.302,-15.632],[-10.413,-15.496]],[[22.99,-20.729],[19.749,-21.072],[19.146,-21.015],[18.719,-20.813],[18.287,-20.446],[16.882,-18.864],[16.71,-18.554],[16.646,-18.26],[16.751,-17.237],[16.655,-16.653],[16.428,-16.227],[15.771,-15.362],[15.245,-14.374],[14.557,-13.635],[13.761,-12.644],[13.536,-12.527],[12.852,-12.447],[12.678,-12.335],[12.558,-12.143],[12.507,-11.711],[12.546,-8.665],[12.499,-8.062],[12.627,-7.132]],[[11.365,-8.442],[12.052,-8.208],[12.229,-8.246],[12.429,-8.433],[12.506,-8.828],[12.471,-11.585],[12.534,-12.189],[12.646,-12.359],[12.809,-12.469],[13.527,-12.569],[13.746,-12.676],[14.537,-13.663],[15.183,-14.342],[15.679,-15.277],[16.401,-16.246],[16.623,-16.665],[16.718,-17.238],[16.609,-18.207],[16.731,-18.686],[18.039,-20.245],[18.701,-20.841],[18.984,-20.994],[19.346,-21.095],[19.753,-21.106],[22.742,-20.8]],[[19.913,-2.846],[23.677,-2.765],[30.246,-1.721],[32.211,-1.456],[34.951,-1.401],[36.411,-1.686],[36.856,-1.723],[40.093,-1.642]],[[40.04,-1.606],[36.774,-1.684],[34.828,-1.358],[32.197,-1.416],[23.531,-2.747],[19.913,-2.812]],[[-4.018,-6.384],[-4.081,-5.994],[-4.285,-5.677],[-5.313,-5.105],[-5.641,-4.988],[-5.918,-4.964],[-7.139,-5.203],[-7.504,-5.153],[-7.946,-5.007],[-8.254,-4.83],[-8.621,-4.412],[-8.833,-4.263],[-10.512,-3.638],[-12.432,-2.43],[-12.63,-2.217],[-12.717,-1.916],[-12.679,-1.675],[-12.361,-1.031],[-12.36,-.785],[-12.448,-.559],[-12.639,-.353],[-14.406,.766]],[[-14.427,.729],[-12.752,-.329],[-12.492,-.578],[-12.41,-.794],[-12.409,-1.023],[-12.725,-1.661],[-12.764,-1.913],[-12.68,-2.229],[-12.458,-2.465],[-10.528,-3.672],[-8.783,-4.341],[-8.271,-4.868],[-7.959,-5.048],[-7.233,-5.244],[-6.816,-5.209],[-5.998,-5.011],[-5.659,-5.026],[-5.398,-5.114],[-4.312,-5.72],[-4.128,-6.006],[-4.065,-6.389]],[[14.111,29.269],[14.571,24.351],[15.105,19.741],[15.918,15.159]],[[15.946,15.163],[15.131,19.846],[14.618,24.354],[14.224,28.501]],[[-12.851,9.403],[-12.279,9.805],[-12.018,10.092],[-11.884,10.446],[-11.888,10.828],[-14.856,16.767],[-14.907,17.315],[-14.526,19.91],[-14.652,20.345],[-15.039,20.804]],[[3.464,-4.541],[2.073,-5.829],[.187,-8.298],[-.048,-8.508],[-.468,-8.653],[-2.677,-8.841],[-3.144,-8.989],[-3.489,-9.211],[-3.951,-9.757],[-5.618,-12.333]],[[15.757,17.969],[14.338,16.127],[14.074,15.883],[13.18,15.441],[11.303,15.128],[11.031,14.968],[10.829,14.71],[10.722,14.355],[10.783,13.901],[11.311,12.42],[11.961,10.063],[12.052,9.545],[12.032,9.366],[11.907,9.186],[11.29,9.018]],[[5.547,23.544],[5.909,21.739],[6.663,19.271],[7.733,14.635],[8.195,11.282]],[[8.241,11.394],[7.778,14.64],[6.693,19.31],[5.964,21.713],[5.603,23.537]],[[-15.099,20.742],[-14.74,20.247],[-14.639,19.829],[-14.767,18.525],[-14.963,17.257],[-14.926,16.829],[-12.032,11.092],[-11.952,10.535],[-12.108,10.078]],[[-11.791,-10.627],[-4.691,-14.232],[-1.962,-16.338]],[[7.431,3.396],[4.646,3.037],[4.407,3.079],[4.249,3.253],[4.219,3.525],[4.335,5.274],[4.24,7.226],[4.168,7.607],[3.824,8.304],[3.763,8.65],[3.896,10.911]],[[-6.248,-13.174],[-6.642,-13.513],[-7.04,-13.767],[-9.638,-15.124],[-10.43,-15.448],[-11.149,-15.576],[-12.068,-15.509],[-12.694,-15.312],[-13.856,-14.692],[-14.418,-14.62],[-14.803,-14.709],[-15.226,-14.971],[-15.946,-15.846]],[[3.862,10.911],[3.732,8.59],[3.823,8.216],[4.131,7.607],[4.205,7.224],[4.3,5.278],[4.175,3.434],[4.203,3.233],[4.349,3.049],[4.601,2.988],[7.11,3.317]],[[-14.699,18.955],[-14.952,17.254],[-14.915,16.831],[-12.05,11.16],[-11.96,10.878],[-11.951,10.448],[-12.099,10.072],[-12.331,9.803],[-12.87,9.435]],[[-6.084,-21.545],[-5.587,-20.947],[-5.414,-20.648],[-5.051,-19.152],[-4.904,-18.825],[-4.598,-18.553],[-3.292,-18.101],[-2.983,-17.877],[.113,-13.493]],[[.086,-13.471],[-3.012,-17.854],[-3.382,-18.101],[-4.549,-18.489],[-4.895,-18.753],[-5.085,-19.14],[-5.412,-20.552],[-5.62,-20.926],[-6.113,-21.523]],[[-20.035,1.834],[-22.697,-5.656],[-23.265,-6.784],[-24.012,-7.796]],[[3.896,10.911],[3.848,11.798],[4.13,12.92],[3.83,14.912],[3.884,16.762],[4.146,20.207]],[[4.106,19.977],[3.859,16.916],[3.794,15.183],[3.811,14.738],[4.096,13],[4.064,12.669],[3.811,11.803],[3.862,10.911]],[[-4.077,-10.014],[-3.573,-9.335],[-3.012,-8.968],[-2.465,-8.842],[-.391,-8.678],[-.02,-8.536],[.212,-8.324],[2.021,-5.942],[2.64,-5.347]],[[6.26,2.508],[6.707,.032],[6.457,-4.878],[6.323,-5.438],[6.011,-5.994]],[[-22.828,-6.081],[-19.978,1.813]],[[-12.072,10.009],[-11.894,10.437],[-11.916,10.924],[-14.772,16.587],[-14.892,16.967],[-14.888,17.382]],[[1.609,-1.933],[1.307,-1.732],[-.481,.012],[-2.101,1.29],[-3.059,2.31],[-3.363,2.52],[-4.474,3.074]],[[5.579,10.39],[5.513,6.192],[5.689,4.985],[6.229,2.679]],[[11.29,9.018],[9.712,8.801],[9.553,8.722],[9.429,8.56],[9.204,7.397],[9.438,5.577],[8.137,3.111]],[[-4.449,2.93],[-3.539,2.546],[-3.092,2.266],[-2.15,1.254],[-.625,-.016],[1.136,-1.748],[1.493,-1.986]],[[13.407,-.016],[14.157,-.321],[15.441,-.36],[17.344,-.223],[19.457,.246],[20.597,.314]],[[6.396,18.539],[6.266,18.501],[6.053,18.137],[5.552,17.211],[5.479,16.944],[5.562,11.664]],[[5.562,11.664],[5.522,16.945],[5.725,17.455],[6.085,18.117],[6.302,18.48],[6.4,18.504]],[[16.832,-2.775],[16.465,1.651],[16.081,4.14]],[[9.406,-3.05],[12.458,-3.061],[13.049,-2.969],[16.327,-2.755]],[[8.062,2.04],[8.264,-.484],[8.369,-3.021],[8.358,-4.543]],[[-11.461,11.606],[-9.435,12.685],[-9.173,12.933],[-9.119,13.208],[-9.171,14.211],[-8.833,16.612]],[[9.304,-10.394],[7.264,-10.484],[3.331,-8.708]],[[-18.262,-10.85],[-18.439,-11.074],[-18.582,-11.08],[-23.27,-7.636]],[[6.912,-8.662],[6.6,-8.699],[6.404,-8.845],[6.127,-9.825],[5.87,-10.114],[5.458,-10.216],[4.381,-10.27],[1.912,-11.468]],[[-9.328,6.008],[-8.715,4.891],[-8.493,4.681],[-4.449,2.93]],[[-10.413,-15.496],[-9.615,-15.172],[-6.755,-13.656],[-6.107,-13.101],[-5.576,-12.358]],[[-14.569,-13.977],[-13.083,-11.844],[-11.896,-10.727],[-11.026,-9.359]],[[-11.052,-9.341],[-11.935,-10.72],[-13.13,-11.853],[-14.602,-13.952]],[[-15.946,-15.846],[-16.167,-16.059],[-16.651,-16.373],[-17.644,-16.812],[-18.745,-17.083],[-20.205,-17.269],[-20.995,-17.52]],[[1.956,-2.008],[1.744,-1.548],[1.091,.302],[-.828,2.514]],[[-.86,2.485],[1.084,.232],[1.671,-1.478],[1.903,-1.989]],[[.771,5.415],[-.644,5.457],[-1.498,5.179],[-1.587,5.199],[-2.518,7.977]],[[-2.004,7.986],[-2.35,7.708],[-2.692,7.245],[-4.472,3.339]],[[2.904,19.929],[2.874,16.502],[3.244,15.597],[3.271,14.694]],[[3.305,14.701],[3.273,15.592],[2.908,16.514],[2.939,19.933]],[[-12.212,-.694],[-7.771,-3.45]],[[15.303,-1.357],[15.374,-6.584]],[[15.45,-6.575],[15.367,-1.357]],[[-9.225,5.974],[-9.452,6.182],[-9.774,6.246],[-10.029,6.175],[-10.719,5.837],[-11.103,5.874],[-11.318,6.042],[-11.779,6.617],[-12.46,6.857],[-12.718,7.056],[-13.183,8.002]],[[4.207,-2.654],[4.435,-1.666],[4.559,-.631],[4.239,2.294]],[[4.181,2.29],[4.453,-.71],[4.326,-1.647],[4.106,-2.634]],[[12.885,3.48],[12.743,5.327],[12.27,8.385]],[[13.793,12.937],[14.073,10.949],[14.022,10.39],[14.037,8.825],[14.147,8.088]],[[16.323,-2.721],[11.475,-2.976]],[[23.748,-2.701],[19.805,-2.805],[18.912,-2.764]],[[18.396,19.889],[18.466,17.164],[19.201,15.223]],[[19.218,15.279],[18.483,17.296],[18.437,19.894]],[[8.435,-3.064],[11.369,-3.069],[13.101,-2.979]],[[13.078,-2.912],[8.435,-3.002]],[[7.982,-3.149],[7.969,-5.267],[7.728,-7.672]],[[-4.474,3.074],[-8.191,4.607],[-8.547,4.8]],[[4.729,6.779],[4.324,6.069],[4.285,5.896],[4.2,2.482]],[[4.255,2.486],[4.361,5.967],[4.787,6.771]],[[-15.234,7.408],[-16.613,5.906],[-16.92,5.648],[-18.205,5.027],[-18.625,4.746]],[[5.096,-3.272],[6.907,-3.79],[8.285,-3.864],[8.594,-3.797],[9.267,-3.79]],[[-15.8,1.517],[-12.212,-.694]],[[13.036,-1.563],[13.038,.19],[12.924,2.64]],[[-13.959,-12.12],[-15.478,-11.248],[-16.429,-10.256],[-16.712,-10.191],[-17.489,-10.311]],[[-4.417,4.603],[-1.52,3.186],[-.86,2.485]],[[-17.46,-10.339],[-16.79,-10.235],[-16.459,-10.29],[-16.221,-10.48],[-15.497,-11.276],[-13.973,-12.146]],[[-.828,2.514],[-1.383,3.14],[-1.525,3.236],[-4.345,4.61]],[[-18.605,4.68],[-18.214,4.956],[-17.136,5.441],[-16.772,5.682],[-15.379,7.163]],[[9.418,-3.001],[7.585,-2.924],[5.323,-2.721]],[[12.924,2.64],[12.825,3.497],[12.744,3.654],[12.587,3.761],[9.763,3.698]],[[-22.531,-8.317],[-19.243,-10.683]],[[-2.518,7.977],[-3.269,10.12],[-4.256,11.542]],[[-4.291,11.516],[-3.297,10.101],[-2.518,7.977]],[[-7.746,-3.399],[-11.124,-1.301]],[[-1.988,7.958],[-1.624,8.136],[-.616,8.486],[1.766,9.226]],[[-10.06,7.278],[-9.788,6.931],[-8.679,4.769],[-8.462,4.619],[-7.73,4.312]]],secondary:[[[-2.375,18.454],[-1.041,10.129],[-.056,7.14],[.239,6.459]],[[.001,7.157],[-.983,10.159],[-2.375,18.454]],[[27.715,-9.323],[26.975,-9.515],[26.505,-9.815],[26.15,-9.871],[25.593,-9.834],[24.722,-9.632],[22.853,-9.571],[20.717,-8.925],[19.418,-8.303]],[[11.394,.004],[11.528,-7.618]],[[9.166,.112],[4.875,-.109],[2.745,-.311]],[[2.758,-.365],[9.166,.021]],[[9.225,3.637],[14.777,3.855]],[[14.777,3.855],[17.172,4.179],[19.581,4.207]],[[19.581,4.207],[17.19,4.245],[14.856,3.952]],[[19.696,4.205],[21.545,4.048],[23.291,3.385]],[[12.745,3.847],[9.224,3.728]],[[12.626,-6.925],[12.293,-7.18],[11.506,-7.522],[9.44,-7.843]],[[11.14,8.972],[11.249,6.429]],[[1.715,1.576],[1.947,.779],[2.466,-.395]],[[.771,5.415],[1.685,3.59]],[[1.746,3.591],[.833,5.414]],[[18.98,-8.315],[17.182,-7.365]],[[.833,5.414],[.001,7.157]],[[11.271,5.546],[11.307,4.024]],[[14.856,3.952],[13.399,3.875]],[[11.363,1.511],[11.388,.225]],[[-12.508,-12.923],[-12.321,-13.019],[-11.696,-13.77]],[[.239,6.459],[.771,5.415]],[[1.61,2.029],[1.547,2.55],[1.663,3.172]],[[15.45,-6.575],[15.696,-6.599],[16.469,-7.004]],[[-11.159,-14.394],[-10.279,-14.001]],[[11.335,2.763],[11.355,1.84]],[[11.249,6.429],[11.271,5.546]],[[16.245,-6.839],[15.688,-6.546],[15.45,-6.575]],[[11.994,-8.524],[12.103,-8.59],[12.841,-8.569]],[[1.62,3.211],[1.511,2.369]],[[-11.696,-13.77],[-11.159,-14.394]],[[11.316,3.686],[11.334,2.873]],[[13.399,3.875],[12.745,3.847]],[[13.943,-6.769],[13.348,-6.793]],[[1.547,2.138],[1.715,1.576]],[[15.001,-6.626],[14.449,-6.695]],[[14.449,-6.695],[13.943,-6.769]],[[13.348,-6.793],[12.846,-6.807]],[[13.093,-9.601],[13.098,-10.083]],[[-12.7,-12.55],[-13.006,-12.2]],[[1.715,1.576],[1.61,2.029]],[[11.08,9.425],[11.14,8.972]],[[13.124,-10.014],[13.131,-9.601]],[[13.131,-9.601],[13.135,-9.211]],[[13.1,-9.213],[13.093,-9.601]],[[16.742,-7.144],[17.077,-7.326]],[[15.001,-6.626],[15.374,-6.584]],[[17.111,-7.307],[16.781,-7.131]],[[13.106,-8.868],[13.1,-9.213]],[[13.135,-9.211],[13.142,-8.867]],[[16.781,-7.131],[16.482,-6.971]],[[11.355,1.84],[11.363,1.511]],[[11.738,-8.031],[11.882,-8.31]],[[16.469,-7.004],[16.742,-7.144]],[[1.663,3.172],[1.716,3.451]],[[19.205,-8.448],[19.453,-8.312]],[[16.482,-6.971],[16.245,-6.839]],[[11.616,-7.793],[11.738,-8.031]],[[18.98,-8.315],[19.205,-8.448]],[[1.668,3.464],[1.62,3.211]],[[13.142,-8.867],[13.17,-8.613]],[[-13.168,-12.012],[-13.006,-12.2]],[[11.307,4.024],[11.314,3.782]],[[19.418,-8.303],[19.202,-8.407]],[[19.202,-8.407],[18.98,-8.315]],[[1.511,2.369],[1.547,2.138]],[[2.543,-.413],[2.758,-.365]],[[2.745,-.311],[2.534,-.361]],[[11.894,-8.333],[11.994,-8.524]],[[12.81,-6.813],[12.626,-6.925]],[[-12.803,-12.721],[-12.7,-12.55]],[[11.528,-7.618],[11.616,-7.793]],[[13.107,-8.686],[13.106,-8.868]],[[12.966,-8.573],[13.107,-8.686]]],tertiary:[[[-.254,18.887],[.188,17.441],[.542,14.823],[.691,12.009],[-.563,10.034]],[[3.842,14.743],[4.328,23.878]],[[.815,-1.495],[-1.049,-2.045],[-4.174,-.737],[-6.13,.523],[-7.407,1.113]],[[-23.34,-7.737],[-22.777,-7.178],[-22.042,-6.733],[-17.722,-10.01],[-18.387,-10.956]],[[28.627,-10.796],[27.115,-10.473],[26.561,-10.163],[25.687,-9.937],[24.047,-10.287],[20.693,-9.696]],[[4.198,22.654],[3.736,14.742]],[[21.622,-6.466],[21.334,-2.627],[20.917,-.393],[20.597,.314]],[[-15.544,-7.074],[-15.441,-7.757],[-15.798,-9.001],[-15.823,-11.234],[-15.59,-11.973],[-15.701,-12.811],[-16.408,-12.021]],[[13.303,2.481],[19.858,3.119]],[[-16.878,10.766],[-21.029,14.015],[-22.117,14.573]],[[-22.172,14.458],[-21.128,13.939],[-16.913,10.691]],[[13.347,-6.7],[13.42,-.317]],[[-1.441,10.514],[-2.455,16.776]],[[-15.728,-15.737],[-10.698,-17.904],[-10.256,-18.451]],[[2.034,1.97],[3.059,2.107],[4.336,1.914],[7.781,2.223]],[[-18.857,17.58],[-19.343,15.089],[-19.513,14.818],[-19.291,15.129],[-18.817,17.572]],[[-10.968,.263],[-10.469,.948],[-6.165,-1.265]],[[-18.519,-11.29],[-17.517,-10.039],[-17.079,-11.563],[-15.8,-13.338]],[[7.711,4.885],[7.566,5.797],[7.528,8.411],[7.319,8.695],[7.173,10.12]],[[7.963,-2.046],[3.393,-1.5],[2.804,-1.716]],[[2.357,.929],[7.55,1.233]],[[4.787,6.771],[6.21,6.64],[7.314,6.98],[9.889,7.22]],[[-4.686,9.233],[-3.407,7.032],[-1.747,5.03]],[[-5.748,-.853],[-1.181,-2.804]],[[-2.552,14.886],[-1.765,10.074]],[[-7.6,18.113],[-8.192,13.985],[-7.651,13.735]],[[3.835,7.886],[3.854,7.265],[3.358,5.368],[3.026,3.297]],[[3.513,11.85],[4.243,11.654],[8.158,11.73]],[[-17.092,-2.669],[-21.43,-1.056]],[[18.504,17.177],[14.128,15.799]],[[-20.901,-12.341],[-22.071,-11.749],[-22.845,-11.166],[-23.519,-10.413],[-23.995,-9.726],[-24.024,-9.496]],[[-15.147,-7.697],[-15.609,-8.732],[-15.649,-9.587],[-15.652,-11.23],[-15.184,-11.763]],[[-8.651,-5.63],[-12.626,-3.911]],[[-19.031,8.169],[-17.471,4.682],[-17.04,4.486]],[[-8.957,3.588],[-9.588,3.927],[-10.853,6.06],[-11.513,6.873]],[[-9.034,3.592],[-5.236,1.821]],[[14.672,8.15],[15.308,4.031]],[[-5.221,1.853],[-8.957,3.588]],[[15.47,-15.262],[16.25,-16.6],[16.391,-17.341],[16.278,-18.187],[15.806,-19.002]],[[21.985,-19.256],[21.655,-15.222]],[[4.854,7.047],[6.633,7.87],[7.217,8.535],[8.273,9.104]],[[8.273,9.104],[7.187,8.563],[6.619,7.907],[4.854,7.047]],[[20.597,.314],[19.581,4.207]],[[-21.419,-12.099],[-19.17,-8.843]],[[-19.899,15.433],[-18.938,15.242],[-18.589,15.33],[-17.334,16.29],[-17.15,17.27]],[[6.518,7.858],[6.367,8.727],[6.888,10.11],[7.584,10.701],[8.213,10.806]],[[-20.814,4.057],[-24.703,3.869]],[[-24.702,3.833],[-20.813,4.005]],[[-15.58,-14.326],[-15.916,-14.278],[-17.277,-12.732],[-17.624,-11.345]],[[1.019,-7.169],[-.27,-5.787],[-1.713,-4.544]],[[13.809,-2.991],[13.943,-6.769]],[[-.92,-3.055],[-.426,-4.119],[1.944,-5.129]],[[16.465,1.651],[17.707,1.607],[20.185,1.844]],[[-9.582,-13.354],[-10.861,-13.06],[-11.507,-11.88],[-12.031,-11.278],[-12.077,-11.008]],[[6.653,-.652],[2.926,-.726]],[[4.322,1.373],[8.035,1.596]],[[-11.963,-4.226],[-8.557,-5.694]],[[21.301,-2.775],[21.592,-6.47]],[[-14.196,-12.064],[-15.288,-13.501],[-15.519,-13.188],[-15.188,-12.573],[-15.184,-11.763]],[[7.314,8.91],[5.048,8.727],[3.718,8.919]],[[-6.273,8.395],[-8.24,11.422]],[[16.2,3.427],[18.38,3.509],[19.21,3.353],[19.782,3.413]],[[3.055,-1.19],[6.625,-1.617]],[[12.934,-2.848],[9.347,-2.91]],[[-9.19,-13.149],[-10.887,-9.993]],[[7.792,2.639],[4.239,2.224]],[[9.356,-3.142],[12.906,-3.07]],[[4.281,1.734],[7.793,1.937]],[[4.398,.684],[7.891,.904]],[[15.012,8.187],[15.56,4.779]],[[14.422,-6.346],[14.349,-2.914]],[[7.129,3.309],[7.16,2.891],[4.208,2.565]],[[-10.708,-9.493],[-10.451,-9.619],[-8.863,-12.261]],[[13.329,-4.998],[16.654,-4.707]],[[-11.085,-15.655],[-11.48,-15.648],[-12.186,-15.095],[-13.104,-13.799],[-13.215,-13.581],[-13.115,-13.401]],[[2.095,7.671],[1.299,10.369],[1.329,10.794]],[[-8.646,4.621],[-8.462,4.311],[-5.836,3.2]],[[16.589,-12.898],[17.328,-12.023],[17.82,-11.196],[17.987,-10.135]],[[22.683,14.409],[19.845,13.963],[19.804,13.658]],[[-17.53,-13.76],[-20.499,-12.626]],[[7.555,6.538],[6.006,6.199],[4.44,6.276]],[[19.844,.271],[19.683,-1.267],[19.87,-2.861]],[[-21.089,15.77],[-20.669,16.189],[-18.174,15.684]],[[9.23,11.539],[8.536,14.592]],[[10.481,11.625],[9.309,11.248],[9.675,9.398]],[[9.087,11.497],[8.443,14.539]],[[13.389,.44],[13.24,3.535]],[[15.5,-3.673],[16.981,-3.597],[17.594,-3.199],[18.451,-3.103]],[[17.768,-1.43],[17.565,1.603]],[[.501,-12.328],[1.915,-13.392],[3.071,-13.88]],[[5.134,-3.574],[7.986,-4.563]],[[-3.805,2.572],[-5.096,-.14]],[[-4.91,-.266],[-2.764,1.827]],[[18.583,7.92],[15.609,7.712]],[[9.836,14.842],[10.383,11.957]],[[20.466,3.181],[21.273,.382]],[[-15.513,-11.51],[-13.525,-11.061],[-12.736,-11.401]],[[6.557,9.328],[7.261,6.531]],[[13.221,3.774],[13.02,6.64]],[[7.629,-.088],[7.651,-2.956]],[[20.293,.054],[20.583,-1.425],[20.547,-2.785]],[[-2.491,1.497],[-4.51,-.53]],[[13.008,6.912],[12.64,9.744]],[[-6.572,.723],[-5.367,3.31]],[[18.678,-14.05],[21.524,-13.857]],[[18.752,9.416],[18.224,11.41],[17.815,12.083]],[[-4.468,-.554],[-2.459,1.463]],[[1.715,1.576],[.571,1.226],[-.397,.721],[-.809,.359]],[[-17.458,16.231],[-17.263,16.081],[-15.851,15.817],[-15.692,15.961],[-15.419,16.84]],[[5.476,2.6],[4.987,4.663],[4.975,5.342]],[[-16.847,5.645],[-19.395,6.748]],[[-13.294,9.604],[-15.782,10.824]],[[16.531,-12.907],[17.41,-12.763],[18.545,-12.825],[19.147,-12.39]],[[7.075,-.132],[6.971,-2.899]],[[-2.203,1.184],[-4.174,-.737]],[[12.784,-3.745],[15.5,-3.673]],[[17.641,4.31],[17.751,2.574],[18.077,1.655]],[[-12.249,-11.817],[-12.454,-10.982],[-12.935,-11.111],[-13.709,-12.221]],[[20.597,.314],[20.883,-.404],[21.238,-2.283]],[[5.072,-7.765],[5.911,-8.187],[7.615,-8.51]],[[16.079,-14.11],[17.708,-14.381],[18.287,-14.065],[18.644,-14.049]],[[12.922,.075],[12.789,2.739]],[[-1.869,15.593],[.751,16.078]],[[-1.183,11.352],[-1.977,11.354],[-3.743,10.735]],[[15.424,-6.043],[12.779,-6.357]],[[-7.407,1.113],[-6.929,2.18],[-5.836,3.2]],[[.554,3.854],[-.693,4.137],[-1.747,5.03]],[[22.006,.55],[21.557,3.152]],[[5.724,-15.03],[5.884,-13.661],[5.588,-12.446]],[[-23.646,-13.569],[-23.004,-13.168],[-21.948,-11.63]],[[1.925,-10.253],[2.063,-9.351],[.875,-9.168],[.604,-8.754]],[[12.436,15.242],[12.958,12.688]],[[12.999,12.7],[12.484,15.249]],[[17.565,1.603],[17.284,4.183]],[[-21.038,.146],[-19.784,-.29],[-20.178,-1.488]],[[-21.103,-.055],[-20.93,.479],[-22.837,1.138]],[[10.018,-3.775],[12.582,-3.745]],[[10.404,11.889],[11.08,9.425]],[[12.221,9.234],[12.647,6.725]],[[7.664,.05],[7.424,2.584]],[[17.109,3.903],[17.096,2.861],[17.333,1.38]],[[20.691,2.011],[23.226,2.138]],[[21.524,-13.857],[24.056,-13.738]],[[-.986,1.183],[-1.346,1.968],[-1.791,2.441],[-2.672,2.956]],[[-1.51,.92],[.747,2.015]],[[-5.575,17.014],[-5.512,16.66],[-5.904,15.156],[-6.179,14.636]],[[-12.243,1.772],[-14.251,3.253]],[[14.348,-2.961],[16.832,-2.775]],[[-11.538,6.853],[-10.876,6.045],[-10.18,4.785]],[[20.674,-11.399],[20.758,-11.614],[20.475,-12.248],[19.239,-13.153]]],rail:[[[38.097,35.352],[36.852,35.105],[36.5,34.906],[36.213,34.569],[36.086,34.203],[35.779,32.377],[35.672,31.064],[35.542,30.781],[35.42,30.701],[33.291,30.1],[31.523,29.982],[27.483,29.99],[27.096,29.887],[26.974,29.72],[26.935,29.516],[26.824,24.862],[26.687,24.327],[26.523,24.044],[26.336,23.931],[26.047,23.891],[23.523,24.326],[21.962,24.521],[21.334,24.508],[20.735,24.235],[20.21,23.747],[14.611,16.439],[14.394,16.222],[13.766,15.877],[13.562,15.689],[13.452,15.453],[13.406,15.057],[14.103,11.121],[14.025,9.981],[14.047,8.833],[14.632,4.817]],[[14.652,4.821],[14.066,8.834],[14.054,10.342],[14.123,11.12],[13.424,15.057],[13.471,15.447],[13.578,15.677],[13.776,15.859],[14.406,16.205],[14.627,16.426],[20.225,23.734],[20.746,24.217],[21.338,24.488],[21.974,24.5],[23.529,24.305],[26.023,23.871],[26.343,23.912],[26.534,24.019],[26.705,24.318],[26.844,24.86],[26.954,29.561],[27.015,29.756],[27.157,29.91],[28.649,29.985],[31.4,29.953],[33.29,30.08],[35.427,30.682],[35.556,30.766],[35.691,31.059],[35.799,32.375],[36.082,34.059],[36.233,34.56],[36.512,34.891],[36.859,35.086],[38.093,35.337]],[[37.745,-33.859],[30.176,-26.406],[27.654,-24.19],[26.914,-21.894],[26.034,-18.374],[24.656,-17.494],[22.824,-15.153],[22.623,-15.082],[18.666,-15.318],[16.303,-14.92],[13.98,-15.827]],[[13.988,-15.846],[16.303,-14.941],[18.666,-15.334],[22.758,-15.127],[24.642,-17.509],[26.018,-18.386],[26.895,-21.899],[27.638,-24.202],[30.163,-26.422],[37.731,-33.873]],[[8.246,11.136],[8.165,12.179],[7.644,15.11],[6.774,18.943],[5.952,21.703],[5.582,23.52],[5.427,23.798],[5.071,24.087],[3.329,24.107],[.475,24.74],[.342,24.859],[.149,25.19],[-.503,26.875],[-.683,30.19]],[[-.699,30.189],[-.519,26.871],[.135,25.184],[.331,24.847],[.467,24.725],[3.326,24.091],[5.064,24.071],[5.483,23.692],[5.937,21.699],[6.754,18.939],[7.629,15.106],[8.149,12.177],[8.23,11.135]],[[17.584,15.254],[18.321,15.876],[18.748,16.627],[20.794,23.573],[21.337,28.478],[20.824,34.038],[20.83,34.74]],[[20.815,34.742],[20.856,33.466],[21.321,28.478],[20.778,23.576],[18.733,16.633],[18.309,15.887],[17.575,15.267]],[[14.632,4.817],[15.058,2.378],[15.288,.065],[15.4,-4.341],[15.362,-6.979],[15.66,-9.54],[15.503,-9.85]],[[15.535,-9.849],[15.68,-9.543],[15.382,-6.978],[15.42,-4.34],[15.285,.44],[15.078,2.381],[14.652,4.821]],[[13.398,-10.104],[9.491,-10.396],[9.305,-10.569],[8.873,-12.072],[8.907,-12.326],[9.318,-12.768],[12.782,-16.127],[13.056,-16.182]],[[7.538,-11.308],[7.427,-9.702],[7.755,-7.521],[7.944,-5.622],[7.948,.2]],[[7.93,.197],[7.934,-5.317],[7.735,-7.517],[7.409,-9.702],[7.514,-11.308]],[[16.547,13.698],[20.371,15.651],[21.558,16.119],[22.245,16.469],[23.045,17.029],[25.286,19.002]],[[25.276,19.013],[23.031,17.039],[22.237,16.484],[21.474,16.097],[20.202,15.584],[16.54,13.713]],[[-12.742,-12.68],[-16.041,-17.897],[-16.584,-18.262],[-18.42,-18.841]],[[29.874,5.006],[23.441,4.423],[21.248,4.47]],[[21.383,4.451],[23.441,4.407],[29.874,4.989]],[[29.874,5.022],[23.442,4.434],[21.397,4.48]],[[13.053,-16.155],[12.851,-16.136],[12.675,-16.003],[8.924,-12.316],[8.918,-11.896],[9.34,-10.542],[9.589,-10.384],[9.94,-10.351]],[[8.273,8.121],[8.334,5.83],[9.172,4.495],[9.21,.333]],[[9.231,.332],[9.193,4.497],[8.399,5.753],[8.339,8.127]],[[-2.075,-10.681],[-4.406,-14.016],[-6.754,-15.798],[-6.931,-16.056],[-7.034,-16.521]],[[-6.983,-16.377],[-6.725,-15.84],[-4.346,-14.057],[-2.021,-10.729]],[[9.219,-.067],[9.428,-7.438]],[[9.448,-7.438],[9.24,-.067]],[[-11.699,1.267],[-11.111,.531],[-10.373,-.227],[-7.255,-2.071],[-6.869,-2.227],[-6.493,-2.276],[-6.066,-2.219],[-5.673,-2.07]],[[4.296,-10.035],[2.848,-9.083],[-1.118,-5.24]],[[-5.679,-2.057],[-6.069,-2.203],[-6.495,-2.26],[-6.866,-2.212],[-7.249,-2.057],[-10.364,-.214],[-10.732,.132],[-11.68,1.28]],[[14.647,13.232],[15.903,13.627],[16.031,13.73],[16.126,13.944],[16.031,14.836],[15.256,19.122]],[[15.235,19.119],[16.01,14.833],[16.104,13.947],[16.015,13.746],[15.87,13.645],[14.633,13.271]],[[7.545,-12.141],[8.838,-13.024],[9.736,-13.492],[10.416,-13.962],[11.035,-14.201],[11.424,-14.232],[12.511,-14.133],[12.873,-13.983],[13.581,-13.486]],[[13.561,-13.456],[12.964,-13.911],[12.508,-14.118],[11.422,-14.217],[11.037,-14.186],[10.423,-13.949],[9.741,-13.475],[8.934,-13.065],[7.589,-12.078]],[[20.183,-10.134],[20.5,-10.401],[20.975,-10.59],[23.835,-11.289],[26.719,-11.497]],[[26.722,-11.48],[23.837,-11.28],[20.977,-10.582],[20.504,-10.393],[20.196,-10.122]],[[-22.181,14.502],[-21.026,13.925],[-17.272,10.955],[-16.862,10.701]],[[-5.587,-12.503],[-6.062,-13.196],[-6.51,-13.614],[-9.775,-15.393],[-10.124,-15.752],[-10.56,-16.412]],[[-10.543,-16.412],[-10.112,-15.76],[-9.767,-15.405],[-6.502,-13.626],[-6.051,-13.206],[-5.575,-12.511]],[[21.233,4.442],[23.441,4.392],[27.545,4.76]],[[-17.095,10.848],[-21.014,13.941],[-22.167,14.535]],[[-9.651,6.801],[-9.936,7.243],[-10.253,7.484],[-14.75,9.698]],[[-14.763,9.661],[-10.259,7.469],[-9.946,7.232],[-9.664,6.794]],[[-4.797,2.258],[-5.099,1.597],[-5.24,1.099],[-5.278,.578],[-5.198,.011],[-4.572,-1.51],[-3.453,-2.9]],[[8.039,17.05],[8.454,15.108],[8.964,14.363],[10.036,13.499],[10.371,12.066]],[[10.392,12.071],[10.056,13.508],[8.98,14.379],[8.474,15.117],[8.061,17.056]],[[4.321,-9.966],[3.245,-9.346],[2.87,-9.057],[.009,-6.257]],[[-.015,-6.299],[2.861,-9.068],[4.293,-10.013]],[[19.658,4.198],[21.598,4.066],[24.514,2.904],[24.721,2.865],[25.093,2.956]],[[25.088,2.975],[24.721,2.886],[24.52,2.924],[21.598,4.086],[19.657,4.22]],[[-3.452,-2.786],[-4.559,-1.502],[-5.183,.015],[-5.262,.578],[-5.224,1.095],[-5.085,1.591],[-4.781,2.247]],[[-9.193,5.877],[-8.721,4.951],[-8.486,4.707],[-4.696,3.094]],[[-4.691,3.108],[-8.477,4.721],[-8.708,4.959],[-9.18,5.884]],[[.445,-6.496],[.817,-5.909],[1.903,-5.134],[2.26,-4.916],[3.59,-4.422],[4.103,-2.901]],[[4.079,-2.893],[3.576,-4.408],[2.254,-4.895],[1.831,-5.161],[.801,-5.896],[.427,-6.486]],[[20.739,-2.818],[19.501,-2.844],[16.711,-2.735],[15.442,-2.805]],[[15.444,-2.823],[16.711,-2.754],[19.501,-2.862],[20.74,-2.836]],[[-.529,-.02],[-2.131,1.29],[-3.174,2.369],[-4.691,3.108]],[[-4.696,3.094],[-3.182,2.357],[-2.138,1.282],[-.537,-.031]],[[11.164,3.776],[14.662,3.935],[16.242,4.157]],[[16.239,4.172],[14.659,3.95],[11.164,3.795]],[[11.339,3.873],[11.159,8.92]],[[11.139,8.918],[11.317,3.872]],[[9.428,-7.438],[9.516,-9.613],[8.852,-11.7],[8.488,-11.967],[8.38,-12.153]],[[8.403,-12.148],[8.508,-11.98],[8.871,-11.707],[9.538,-9.61],[9.448,-7.438]],[[20.74,-2.836],[23.449,-2.803],[25.726,-2.463]],[[25.723,-2.445],[23.448,-2.785],[20.739,-2.818]],[[19.819,-7.795],[21.045,-4.828],[21.241,-3.152]],[[21.22,-3.15],[21.14,-4.316],[21.037,-4.826],[19.8,-7.786]],[[-12.092,1.902],[-10.594,.003],[-10.082,-.379],[-8.575,-1.264]],[[5.144,7.519],[4.81,7.078],[4.013,5.693],[3.765,5.397],[3.376,5.13],[1.937,4.46]],[[1.944,4.447],[3.377,5.114],[3.785,5.394],[5.152,7.506]],[[21.459,-2.402],[21.525,-1.164],[20.986,1.316],[20.715,2.067]],[[20.7,2.062],[20.949,1.407],[21.511,-1.167],[21.443,-2.4]],[[15.685,-.363],[17.33,-.226],[19.401,.204],[20.172,.279]],[[20.172,.3],[19.353,.216],[17.301,-.209],[15.685,-.34]],[[3.784,-8.883],[2.935,-8.527],[2.401,-8.423],[.171,-8.517],[-.138,-8.662],[-.451,-8.957]],[[-.437,-8.986],[-.132,-8.696],[.401,-8.517],[1.355,-8.571],[2.687,-8.508],[3.767,-8.92]],[[19.657,4.22],[17.3,4.204],[15.267,3.975]],[[15.276,3.914],[17.304,4.179],[19.658,4.198]],[[5.173,16.659],[3.04,12.829]],[[3.055,12.82],[5.183,16.652]],[[6.981,-11.951],[5.516,-10.806],[4.937,-10.509],[4.586,-10.452],[4.172,-10.492],[3.269,-10.902]],[[8.38,-12.153],[7.949,-13.895],[7.68,-15.576],[7.705,-15.795],[7.931,-16.252]],[[7.945,-16.239],[7.722,-15.791],[7.721,-15.372],[8.135,-13.111],[8.403,-12.148]],[[-.231,-.324],[1.407,-1.891],[3.21,-2.484]],[[3.214,-2.468],[1.415,-1.879],[-.22,-.312]],[[-.062,-8.73],[-2.71,-8.982],[-3.347,-9.31],[-3.849,-9.853]],[[-3.837,-9.861],[-3.338,-9.322],[-2.706,-8.996],[-.054,-8.743]],[[8.347,4.403],[7.984,3.466],[7.737,2.42],[7.902,.55]],[[7.921,.551],[7.755,2.421],[8.005,3.461],[8.365,4.396]]],water:[[[10.442,-19.804],[9.871,-19.639],[8.248,-19.447],[6.875,-19.126],[5.501,-18.614],[-5.485,-10.351],[-8.357,-8.621],[-12.414,-6.507],[-14.45,-5.604],[-19.917,-3.458]],[[2.23,-4.248],[1.639,-3.548],[-.685,-2.511],[-.969,-2.423],[-1.334,-2.411],[-2.424,-1.99],[-8.028,.384],[-9.113,.969],[-9.717,1.544],[-12.301,5.326],[-12.868,5.857],[-14.31,7.01],[-15.521,7.336],[-17.679,8.872]],[[15.891,-19.655],[16.045,-19.447],[16.222,-19.336],[16.754,-18.383],[16.932,-17.758],[16.932,-17.019],[16.727,-16.262],[15.848,-15.18],[15.576,-14.605],[15.568,-14.016],[15.781,-13.083],[17.104,-11.086],[17.414,-9.918],[17.431,-9.319],[17.235,-8.598],[16.876,-7.956],[16.432,-7.496],[15.894,-7.259],[15.491,-7.176],[14.494,-7.206]],[[1.406,11.455],[1.362,12.017],[1.499,13.783],[1.455,15.866],[1.364,16.446],[1.045,17.626],[.713,18.659],[.343,19.533],[-.346,20.639],[-.887,21.248],[-1.214,21.494],[-1.577,21.698],[-2.261,21.94],[-4.451,22.485]],[[14.494,-7.206],[12.874,-7.08],[12.345,-7.37],[11.362,-7.779],[9.614,-8.052],[8.934,-8.065],[7.413,-7.893],[6.976,-7.697],[6.045,-6.764],[3.443,-4.988],[2.932,-4.512],[2.445,-4.266],[2.23,-4.248]],[[28.67,-9.268],[27.454,-9.248],[26.941,-9.408],[26.534,-9.678],[26.13,-9.764],[25.687,-9.75],[24.746,-9.533],[22.923,-9.485],[21.703,-9.153],[20.7,-8.765],[20.026,-8.473],[18.707,-7.686],[17.517,-7.192],[17.101,-7.171],[16.666,-7.333],[16.432,-7.496]],[[-9.797,-21.862],[-9.816,-21.02],[-9.954,-20.423],[-10.161,-20.01],[-10.437,-19.647],[-10.727,-19.384],[-11.203,-19.106],[-12.646,-18.438],[-13.75,-18.064],[-14.62,-17.673],[-15.923,-16.892],[-16.449,-16.442],[-16.863,-15.976],[-18.05,-14.007]],[[-9.797,-21.862],[-9.328,-21.168],[-9.017,-20.528],[-8.658,-19.354],[-8.679,-18.831],[-8.803,-18.163],[-9.086,-17.494],[-9.507,-16.79],[-10.005,-16.232],[-10.37,-16.044],[-11.64,-15.962],[-12.677,-15.802],[-14.275,-14.873]],[[12.886,2.845],[12.799,2.898],[11.267,2.819],[8.093,2.841],[4.16,2.387],[2.66,2.696],[2.439,2.815]],[[-13.65,-1.908],[-13.995,-1.999],[-14.812,-1.669],[-21.99,2.058]],[[9.431,-8.845],[8.15,-8.812],[6.066,-8.452],[5.344,-8.169],[4.536,-7.667],[4.149,-7.263],[2.735,-5.248],[2.23,-4.248]],[[-15.816,-13.006],[-16.912,-11.51],[-17.201,-10.261],[-17.443,-9.777],[-21.455,-6.117]],[[12.634,-5.987],[12.679,-3.62],[12.733,-3.415],[12.971,-3.083],[13.024,-2.568],[13.062,.191],[12.886,2.845]],[[19.965,23.726],[19.987,22.151],[20.079,21.82],[20.29,21.462],[20.465,20.772],[20.513,18.493],[20.581,18.184],[21.478,16.012],[21.657,15.808],[21.945,15.804]],[[1.978,3.16],[2.467,4.978],[2.568,6.656],[2.535,7.466],[2.241,9.141],[1.964,9.775],[1.406,11.455]],[[-15.816,-13.006],[-15.649,-12.929],[-15.487,-12.742],[-15.408,-12.502],[-15.397,-11.979],[-15.727,-11.251],[-15.715,-8.859],[-15.267,-7.49],[-15.437,-7.092],[-14.45,-5.604]],[[-18.05,-14.007],[-21.295,-12.873],[-22.489,-12.3],[-23.145,-11.859],[-23.959,-11.083],[-24.284,-10.614],[-24.621,-9.915]],[[2.932,-4.512],[2.993,-3.596],[2.659,-1.652],[2.749,-.891],[2.721,-.628],[1.859,1.845],[1.747,2.416],[1.794,2.899],[1.978,3.16]],[[-4.012,-5.274],[-4.536,-3.786],[-5.921,-1.326],[-6.293,-.964],[-7.662,-.219],[-8.717,.712]],[[-18.882,-15.524],[-19.336,-15.381],[-20.165,-15.434],[-20.462,-15.316],[-21.409,-14.325],[-22.026,-13.95],[-22.487,-12.992],[-22.829,-13.054],[-22.976,-13.01],[-25.141,-14.244]],[[-.031,3.79],[-.461,3.847],[-.959,4.089],[-1.342,4.381],[-2.472,5.524],[-3.043,6.176],[-3.663,7.038],[-5.001,9.173]],[[-3.992,-5.342],[-4.666,-5.378],[-5.544,-4.972],[-6.063,-4.899],[-7.192,-5.183],[-7.591,-5.109],[-8.172,-4.844],[-8.672,-4.318],[-9.662,-3.88]],[[-6.087,8.439],[-7.129,7.744],[-7.643,8.352],[-7.923,8.555],[-8.536,9.667],[-9.149,10.5],[-9.697,11.091]],[[23.422,-6.418],[20.94,-6.693],[19.95,-7.103],[19.216,-7.113],[18.37,-7.528]],[[-20.859,14.542],[-20.702,14.824],[-20.645,15.151],[-20.705,15.281],[-21.151,15.318],[-21.516,15.532],[-21.9,15.341],[-22.121,15.511],[-22.306,15.529],[-22.675,15.767],[-23.203,16.251],[-23.594,16.252],[-23.795,16.174],[-24.379,15.642]],[[-5.001,9.173],[-5.798,11.153],[-6.301,11.871],[-6.81,12.367],[-8.041,12.928]],[[-9.662,-3.88],[-10.409,-3.563],[-12.187,-2.437],[-12.268,-2.559],[-12.661,-2.217],[-12.83,-2.249],[-12.905,-2.112],[-13.163,-1.974],[-13.65,-1.908]],[[-13.63,9.033],[-11.545,10.513],[-11.022,10.775],[-10.067,11.432]],[[-5.838,14.302],[-6.47,14.673],[-6.141,17.083],[-6.091,17.198],[-5.981,17.256],[-5.11,17.406]],[[-4.587,-9.571],[-4.381,-9.252],[-3.954,-7.914],[-4.019,-5.967],[-3.966,-5.769]],[[1.708,7.685],[1.06,9.836],[1.214,10.942],[1.406,11.455]],[[-14.275,-14.873],[-15.269,-14.73],[-18.05,-14.007]],[[14.494,-7.206],[12.831,-7.697],[10.885,-8.591]],[[21.727,19.612],[21.572,18.718],[21.589,17.926],[21.945,15.804]],[[-12.531,9.833],[-13.401,11.471],[-14.795,12.078]],[[-18.635,-11.141],[-18.558,-11.215],[-18.801,-11.471],[-20.187,-12.425],[-21.295,-12.873]],[[-8.041,12.928],[-11.003,14.284]],[[-10.067,11.432],[-11.422,12.938],[-12.311,13.39]],[[-10.067,11.432],[-8.373,12.503],[-8.041,12.928]],[[-14.275,-14.873],[-15.187,-13.901],[-15.816,-13.006]],[[-14.977,7.195],[-13.897,8.792],[-13.63,9.033]],[[1.978,3.16],[1.664,3.366],[-.031,3.79]],[[-16.09,.883],[-16.785,-.626]],[[10.885,-8.591],[10.54,-8.709],[9.431,-8.845]],[[-4.791,-10.878],[-4.587,-9.571]],[[-5.001,9.173],[-6.047,8.467]],[[12.874,-7.08],[12.641,-6.853],[12.629,-6.252]],[[21.945,15.804],[22.615,15.215]],[[-9.697,11.091],[-10.067,11.432]],[[2.269,2.928],[1.978,3.16]],[[-9.697,11.091],[-9.77,11.253],[-9.914,11.342]],[[-3.931,-5.624],[-3.992,-5.342]],[[12.629,-6.252],[12.634,-5.987]],[[-17.291,-16.126],[-17.113,-15.96]],[[5.93,-10.046],[5.793,-10.044],[5.757,-10.142]],[[-17.113,-15.96],[-16.954,-15.827]],[[2.439,2.815],[2.269,2.928]]]}};var Hn=(i,t=0,e=1)=>Math.max(t,Math.min(e,i)),Ei=i=>i*i*(3-2*i),_l=class{constructor(t,e,n){this.canvas=t,this.ctx=t.getContext("2d",{alpha:!1}),this.state=e,this.onNode=n,this.images=new Map,this.pointer={x:0,y:0},this.nodes=[],this.running=!1,this.boundClick=s=>this.click(s),t.addEventListener("click",this.boundClick),this.resize()}async load(){await Promise.all(Ce.map(t=>new Promise(e=>{let n=new Image;n.onload=()=>{this.images.set(t.id,n),e()},n.onerror=e,n.src=t.background})))}resize(){let t=Math.min(1,devicePixelRatio||1);this.canvas.width=Math.max(1,innerWidth*t),this.canvas.height=Math.max(1,innerHeight*t),this.canvas.style.width=`${innerWidth}px`,this.canvas.style.height=`${innerHeight}px`,this.dpr=t}setPointer(t,e){this.pointer.x=t,this.pointer.y=e}drawCover(t,e=0,n=0,s=1,r=1){if(!t)return;let a=this.canvas.width,o=this.canvas.height,l=Math.max(a/t.width,o/t.height)*r,c=t.width*l,h=t.height*l;this.ctx.globalAlpha=s,this.ctx.drawImage(t,(a-c)/2+e,(o-h)/2+n,c,h),this.ctx.globalAlpha=1}render(t){let e=this.ctx,n=this.canvas.width,s=this.canvas.height,r=t*.001;if(e.fillStyle="#01040a",e.fillRect(0,0,n,s),this.state.phase==="FREE_EXPLORE"||this.state.phase==="HUB_REVEAL"||this.state.phase==="DISTRICT_FLYIN")this.drawHub(r);else{let a=this.images.get(this.state.sceneId==="tunnel"?"castle":this.state.sceneId)||this.images.get("castle"),o=this.state.elapsed||0,l=gl.find(f=>o>=f.start&&o<f.end),c=Ei(Hn(this.state.transitionProgress||0)),h=l?1.035+(o-l.start)/(l.end-l.start)*.045:1.03+c*.38;this.drawCover(a,this.pointer.x*(l?4:18)*this.dpr*(1+c),this.pointer.y*(l?3:10)*this.dpr*(1+c),l?1:.86,h),l||(e.save(),e.globalCompositeOperation="screen",this.drawCover(a,-this.pointer.x*28*this.dpr,this.pointer.y*18*this.dpr,.16,h*1.17),e.restore(),this.drawDepth(r),this.drawMontage(o))}this.drawRain(r),e.fillStyle="rgba(0,8,18,.25)";for(let a=0;a<s;a+=5*this.dpr)e.fillRect(0,a,n,1*this.dpr)}drawDepth(t){let e=this.ctx,n=this.canvas.width,s=this.canvas.height;e.save(),e.globalCompositeOperation="screen";for(let r=0;r<24;r++){let a=(r/24+t*.35)%1,o=n*.5+Math.sin(r*2.37)*n*.42/(.2+a),l=s*.54+Math.cos(r*1.33)*s*.34/(.3+a);e.strokeStyle=r%2?"rgba(48,242,255,.35)":"rgba(255,42,174,.24)",e.lineWidth=(1-a)*4+1,e.beginPath(),e.moveTo(n*.5,s*.52),e.lineTo(o,l),e.stroke()}e.restore()}drawMontage(t){if(t<4||t>=38)return;let e=this.ctx,n=this.canvas.width,s=this.canvas.height,r=.36;ml.forEach((a,o)=>{let l=t-a.at;if(l<0||l>=r)return;let c=Hn(l/r),h=Ei(c),f=this.images.get(a.id);if(!f)return;let u=o%2?1:-1,d=a.variant,g=n*.49,y=g*.596,m=.88+Math.sin(c*Math.PI)*.13,p=g*m,E=y*m,b=d===0?n*.5+u*(1-h)*n*.075:d===1?n*.5+u*(1-h)*n*.04:n*.5,v=d===2?s*.48+(1-h)*s*.035:s*.5,T=Ei(Hn(c/.16))*(1-Ei(Hn((c-.6)/.4)));e.save(),e.translate(b,v),e.rotate(u*(.045-.035*h)),e.globalAlpha=T*.76,e.shadowColor=u>0?"#ff2daa":"#42f7ff",e.shadowBlur=10*this.dpr,e.fillStyle="rgba(0,4,12,.75)",e.fillRect(-p/2-2*this.dpr,-E/2-2*this.dpr,p+4*this.dpr,E+4*this.dpr),e.beginPath(),e.rect(-p/2,-E/2,p,E),e.clip();let S=Math.max(p/f.width,E/f.height),R=f.width*S,_=f.height*S;e.drawImage(f,-R/2,-_/2,R,_),e.restore()})}drawRain(t){let e=this.ctx,n=this.canvas.width,s=this.canvas.height;e.save(),e.strokeStyle="rgba(80,235,255,.2)",e.lineWidth=1;for(let r=0;r<90;r++){let a=(r*83.17+t*140)%n,o=(r*53.7+t*460)%s;e.beginPath(),e.moveTo(a,o),e.lineTo(a-7*this.dpr,o+24*this.dpr),e.stroke()}e.restore()}drawHub(t){let e=this.ctx,n=this.canvas.width,s=this.canvas.height,r=n*.44,a=s*.5,o=Math.min(n*.72,s*.88)*.48,l=Math.floor(t*.22)%Ce.length,c=(l+1)%Ce.length,h=t*.22%1,f=this.state.phase==="HUB_REVEAL"?Hn(this.state.transitionProgress||0):1;this.drawCover(this.images.get(Ce[l].id),this.pointer.x*8,this.pointer.y*5,.22,1.08+h*.08),this.drawCover(this.images.get(Ce[c].id),-this.pointer.x*9,-this.pointer.y*5,.1*h,1.16),e.fillStyle="rgba(0,4,12,.66)",e.fillRect(0,0,n,s);let u=["castle","dotonbori","food","shinsekai","kaiyukan","umeda"],d=([b,v])=>({x:b/Ee.bounds.width*o*2,y:v/Ee.bounds.height*o*1.2}),g=([b,v])=>d([((v-Ee.bounds.west)/(Ee.bounds.east-Ee.bounds.west)-.5)*Ee.bounds.width,((Ee.bounds.north-b)/(Ee.bounds.north-Ee.bounds.south)-.5)*Ee.bounds.height]),y=b=>g(Ce.find(v=>v.id===b).geo);e.save(),e.translate(r,a),e.globalCompositeOperation="screen",this.nodes=[],e.strokeStyle=`rgba(77,246,255,${Ei(Hn(f/.14))*.72})`,e.lineWidth=2*this.dpr,e.strokeRect(-o,-o*.6,o*2,o*1.2);let m={tertiary:["rgba(22,127,148,",.18,.05],secondary:["rgba(73,238,250,",.26,.1],primary:["rgba(228,255,255,",.38,.15],rail:["rgba(255,43,169,",.4,.2],water:["rgba(38,207,255,",.58,.12]};for(let b of["tertiary","secondary","primary","rail","water"]){let[v,T,S]=m[b],R=Ei(Hn((f-S)/.26));if(!(R<=0)){e.strokeStyle=`${v}${R*T})`,e.lineWidth=(b==="primary"?1.7:b==="water"?2.1:b==="rail"?1.4:.75)*this.dpr,e.beginPath();for(let _ of Ee.layers[b])_.forEach((w,P)=>{let I=d(w);P?e.lineTo(I.x,I.y):e.moveTo(I.x,I.y)});e.stroke()}}let p=Hn(f/.75),E=-o*.58+p*o*1.16;e.fillStyle=`rgba(210,255,255,${Math.sin(p*Math.PI)*.28})`,e.fillRect(-o,E,o*2,5*this.dpr);for(let b=0;b<u.length-1;b++){let v=y(u[b]),T=y(u[b+1]),S=Ei(Hn((f-(.3+b*.075))/.1));if(S<=0)continue;e.strokeStyle=b%2?`rgba(255,45,172,${S*.9})`:`rgba(71,246,255,${S*.9})`,e.lineWidth=4*this.dpr,e.beginPath(),e.moveTo(v.x,v.y),e.quadraticCurveTo((v.x+T.x)/2+(b%2?18:-18)*this.dpr,(v.y+T.y)/2,T.x,T.y),e.stroke();let R=(t*.48+b*.18)%1,_=v.x+(T.x-v.x)*R,w=v.y+(T.y-v.y)*R;e.fillStyle="#fff",e.beginPath(),e.arc(_,w,(3+Math.sin(R*Math.PI)*5)*this.dpr*S,0,Math.PI*2),e.fill()}Ce.forEach((b,v)=>{let T=y(b.id),S=.48+u.indexOf(b.id)*.065,R=Hn((f-S)/.09),_=Ei(R);if(_<=.01)return;let w=v%2?"#44f7ff":"#ff38ae",P=Math.max(19*this.dpr,Math.min(n,s)*.027)*_*(1+Math.sin(R*Math.PI)*.38);e.save(),e.translate(T.x,T.y),e.rotate(Math.PI/4+t*.08*(v%2?1:-1)),e.fillStyle="rgba(1,8,17,.9)",e.strokeStyle=w,e.lineWidth=2*this.dpr,e.fillRect(-P*.48,-P*.48,P*.96,P*.96),e.strokeRect(-P*.48,-P*.48,P*.96,P*.96),e.restore(),e.strokeStyle=`${w}aa`,e.beginPath(),e.arc(T.x,T.y,P*1.18,0,Math.PI*2),e.stroke(),e.fillStyle="#efffff",e.font=`800 ${Math.max(10,11*this.dpr)}px "Yu Gothic UI"`,e.textAlign="center",e.shadowColor=w,e.shadowBlur=12,e.fillText(b.jp,T.x,T.y+P+15*this.dpr),this.nodes.push({id:b.id,x:r+T.x,y:a+T.y,r:P+18*this.dpr})}),xl.forEach((b,v)=>{let T=g(b.geo);e.strokeStyle="rgba(255,255,255,.28)",e.beginPath(),e.arc(T.x,T.y,6*this.dpr,0,Math.PI*2),e.stroke()}),e.fillStyle="rgba(0,8,18,.82)",e.fillRect(-106*this.dpr,-24*this.dpr,212*this.dpr,48*this.dpr),e.strokeStyle="#42f7ff",e.strokeRect(-106*this.dpr,-24*this.dpr,212*this.dpr,48*this.dpr),e.fillStyle="#fff",e.font=`900 ${21*this.dpr}px Impact`,e.textAlign="center",e.shadowColor="#42f7ff",e.shadowBlur=18,e.fillText("OSAKA // REAL MAP",0,-1*this.dpr),e.font=`700 ${8*this.dpr}px ui-monospace`,e.fillStyle="#42f7ff",e.fillText("OSM VECTOR \xB7 ALL ROUTES ONLINE",0,14*this.dpr),e.restore()}hover(t,e){let n=this.canvas.getBoundingClientRect(),s=(t-n.left)*this.dpr,r=(e-n.top)*this.dpr;return this.nodes.find(o=>Math.hypot(s-o.x,r-o.y)<o.r)?.id||null}click(t){let e=this.canvas.getBoundingClientRect(),n=(t.clientX-e.left)*this.dpr,s=(t.clientY-e.top)*this.dpr,r=this.nodes.find(a=>Math.hypot(n-a.x,s-a.y)<a.r);r&&this.onNode(r.id)}start(){this.running=!0,this.canvas.hidden=!1}stop(){this.running=!1,this.canvas.hidden=!0}};var G1="signal-run-v4",ae=i=>document.querySelector(i),Bt=(i,t=0,e=1)=>Math.max(t,Math.min(e,i)),Gi=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Ne=i=>i*i*(3-2*i),Wi=Math.PI*2;function W1(i){return()=>{let t=i+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}var Ct=W1(151396390),et={app:ae("#osaka-app"),world:ae("#world"),fallback:ae("#fallback"),boot:ae("#boot"),breach:ae("#breach-button"),load:ae("#load-status"),phase:ae("#phase-code"),clock:ae("#clock-code"),title:ae("#district-title"),code:ae("#district-code"),jp:ae("#district-jp"),meta:ae("#district-meta"),mio:ae("#mio"),subtitle:ae("#subtitle"),lock:ae("#signal-lock"),hub:ae("#hub-ui"),mute:ae("#mute"),cursor:ae("#cursor"),live:ae("#status-live"),mapUnlock:ae("#map-unlock"),mapPreview:ae("#map-preview"),previewImage:ae("#map-preview-image"),previewCode:ae("#map-preview-code"),previewName:ae("#map-preview-name"),mapAttribution:ae("#map-attribution"),credits:ae("#credits"),creditsToggle:ae("#credits-toggle"),creditsClose:ae("#credits-close")},yl=new URLSearchParams(location.search),Cd=yl.get("test")==="1",Pd=matchMedia("(prefers-reduced-motion: reduce)").matches,tn=matchMedia("(max-width: 700px), (pointer: coarse)").matches,nt={build:G1,renderMode:"booting",phase:ge.CASTLE_IDLE,sceneId:"castle",cameraProgress:0,transitionProgress:0,qualityTier:tn?"mobile":"desktop",loadedAssets:0,assetTotal:0,audioCreated:!1,selectedSignal:null,elapsed:0,hubOpen:!1,muted:!1,started:!1,queuedScene:null,rushStrength:0,deterministicSeed:"0x09062026",fpsTarget:tn?30:60},dh=class{constructor(t){this.state=t,this.ctx=null,this.master=null,this.bgm=null,this.buffers=new Map,this.activeVoice=null,this.focused=!0,this.failed=!1,this.lastVoice=-1}async unlock({silent:t=!1}={}){if(this.ctx||t||this.state.muted)return!1;try{let e=window.AudioContext||window.webkitAudioContext;if(!e)throw new Error("AudioContext unavailable");this.ctx=new e,this.state.audioCreated=!0,this.master=this.ctx.createGain(),this.master.gain.value=0,this.master.connect(this.ctx.destination),await this.ctx.resume(),await this.loadBgm();let n=this.ctx.currentTime;return this.master.gain.setValueAtTime(0,n),this.master.gain.linearRampToValueAtTime(.68,n+.8),!0}catch(e){return this.failed=!0,console.warn("[OSAKA] audio unavailable; continuing silent",e),!1}}async decode(t){if(this.buffers.has(t))return this.buffers.get(t);let e=await fetch(t,{cache:"force-cache"});if(!e.ok)throw new Error(`${t}: ${e.status}`);let n=await this.ctx.decodeAudioData(await e.arrayBuffer());return this.buffers.set(t,n),n}async loadBgm(){try{let t=await this.decode("assets/bgm-signal-run.ogg"),e=this.ctx.createBufferSource();e.buffer=t,e.loop=!0;let n=this.ctx.createGain();n.gain.value=.72,e.connect(n).connect(this.master),e.start(),this.bgm={src:e,g:n,duration:t.duration}}catch(t){console.warn("[OSAKA] BGM file failed; silent timeline remains active",t)}}async cue(t){if(!(!this.ctx||this.state.muted||this.lastVoice===t)){this.lastVoice=t;try{let e=await this.decode(`assets/voice-${String(t).padStart(2,"0")}.ogg`);if(this.activeVoice)try{this.activeVoice.stop()}catch{}let n=this.ctx.createBufferSource(),s=this.ctx.createGain();s.gain.value=.92,n.buffer=e,n.connect(s).connect(this.master),n.start(),this.activeVoice=n}catch(e){console.warn("[OSAKA] voice cue unavailable",t,e)}}}impact(){if(!this.ctx||this.state.muted)return;let t=this.ctx.currentTime,e=.78,n=this.ctx.sampleRate,s=this.ctx.createBuffer(1,Math.floor(n*e),n),r=s.getChannelData(0);for(let c=0;c<r.length;c++){let h=c/n,f=(Math.random()*2-1)*Math.exp(-h*9),u=Math.sin(Wi*(46*h+18*h*h))*Math.exp(-h*4.2);r[c]=(f*.55+u*.75)*.7}let a=this.ctx.createBufferSource(),o=this.ctx.createBiquadFilter(),l=this.ctx.createGain();a.buffer=s,o.type="lowpass",o.frequency.setValueAtTime(6200,t),o.frequency.exponentialRampToValueAtTime(170,t+e),l.gain.value=.9,a.connect(o).connect(l).connect(this.master),a.start()}setHubMix(){if(!this.ctx||!this.master)return;let t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.linearRampToValueAtTime(this.state.muted?0:.38,t+1.5)}setMuted(t){if(this.state.muted=t,et.mute.textContent=t?"SOUND OFF":"SOUND ON",et.mute.setAttribute("aria-pressed",String(t)),this.ctx&&this.master){let e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.linearRampToValueAtTime(t?0:this.state.hubOpen?.38:.68,e+.18)}}focus(t){if(this.focused=t,this.ctx&&this.master&&!this.state.muted){let e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.linearRampToValueAtTime(t?this.state.hubOpen?.38:.68:.08,e+.35)}}};function Us(i,{font:t="800 82px Yu Gothic UI",color:e="#eaffff",glow:n="#43f6ff",width:s=1024,height:r=256,sub:a=""}={}){let o=document.createElement("canvas");o.width=s,o.height=r;let l=o.getContext("2d");l.clearRect(0,0,s,r),l.textAlign="center",l.textBaseline="middle",l.font=t,l.shadowColor=n,l.shadowBlur=28,l.fillStyle=e,l.fillText(i,s/2,r*.48),a&&(l.shadowBlur=12,l.font="700 28px ui-monospace",l.fillStyle=n,l.fillText(a,s/2,r*.82));let c=new mr(o);return c.colorSpace=He,c.needsUpdate=!0,c}function Gn(i,t,e,{opacity:n=1,blending:s=Qn,depthTest:r=!0}={}){let a=new vs({map:i,transparent:!0,opacity:n,depthWrite:!1,depthTest:r,blending:s,color:16777215}),o=new ar(a);return o.scale.set(t,e,1),o}var Id=([i,t],e=.2)=>{let n=Ee.bounds;return new C(((t-n.west)/(n.east-n.west)-.5)*n.width,e,((n.north-i)/(n.north-n.south)-.5)*n.height)},hh=Object.freeze(Object.fromEntries(Ce.map(i=>[i.id,Id(i.geo)]))),vl=Object.freeze(["castle","dotonbori","food","shinsekai","kaiyukan","umeda"]),fh=class{constructor(t,e,n){this.canvas=t,this.state=e,this.onFallback=n,this.pointer={x:0,y:0},this.clock=new Ir,this.groups=new Map,this.tunnel=[],this.shards=[],this.hubNodes=[],this.foodTargets=[],this.microSignals=[],this.fx=[],this.hubYaw=0,this.dragging=!1,this.dragX=0,this.scene=new nr,this.scene.background=new It(66314),this.scene.fog=new er(132880,tn?.011:.0075),this.camera=new Ge(58,innerWidth/innerHeight,.08,700),this.camera.position.set(0,0,27),this.renderer=new cl({canvas:t,antialias:!tn,alpha:!1,powerPreference:"high-performance",stencil:!1,preserveDrawingBuffer:Cd}),this.renderer.outputColorSpace=He,this.renderer.toneMapping=Dr,this.renderer.toneMappingExposure=1.08,this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,tn?1:1.5)),this.manager=new bs,this.manager.onStart=(s,r,a)=>{this.state.assetTotal=Math.max(this.state.assetTotal,a),this.progress(r,a)},this.manager.onProgress=(s,r,a)=>this.progress(r,a),this.manager.onLoad=()=>this.progress(this.state.assetTotal,this.state.assetTotal),this.loader=new Tr(this.manager),this.textures={},this.setupLights(),this.setupComposer(),this.createRoute(),this.loadWorld(),this.resize(),t.addEventListener("webglcontextlost",s=>{s.preventDefault(),this.onFallback("context-lost")},{passive:!1})}progress(t,e){this.state.loadedAssets=t,this.state.assetTotal=Math.max(e,this.state.assetTotal);let n=e?Math.round(t/e*100):0;et.load.textContent=`CITY SIGNAL ${String(n).padStart(2,"0")}%`}setupLights(){this.scene.add(new Rr(1454154,1.2));let t=new Bi(3665919,46,120,1.5);t.position.set(-18,24,18),this.scene.add(t);let e=new Bi(16720781,40,120,1.6);e.position.set(21,-8,2),this.scene.add(e),this.cursorLight=new Bi(5634047,24,48,1.8),this.scene.add(this.cursorLight)}setupComposer(){this.composer=new fl(this.renderer),this.renderPass=new pl(this.scene,this.camera),this.bloom=new Ds(new st(Math.max(1,innerWidth*.5),Math.max(1,innerHeight*.5)),tn?.75:1.15,.55,.78),this.cyber=new Ls(wd),this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(this.cyber)}createRoute(){this.anchors=[new C(0,0,27),new C(0,0,7),new C(0,0,-75),new C(0,-1,-86),new C(42,16,-142),new C(6,-8,-200),new C(-42,30,-258),new C(4,4,-318),new C(0,91,-386)],this.route=new Ni(this.anchors,!1,"catmullrom",.25),this.routePoints=this.route.getPoints(240);let t=new Ms(this.route,360,.075,6,!1),e=new Nt(t,new $t({color:3274239,transparent:!0,opacity:.28,blending:Zt,depthWrite:!1}));e.visible=!1,e.name="signal-route",this.routeMesh=e,this.scene.add(e)}loadTexture(t){let e=this.loader.load(t);return e.colorSpace=He,e.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),e}loadWorld(){this.textures.castle=this.loadTexture("osaka-castle-neon-v2.webp"),this.textures.mio=this.loadTexture("assets/mio-09-neutral-v1.webp"),Ce.forEach(t=>this.textures[t.id]=this.loadTexture(t.background)),this.textures.tower=this.loadTexture("assets/tsutenkaku-cutout-v1.webp"),this.textures.whale=this.loadTexture("assets/whale-shark-cutout-v1.webp"),this.textures.umedaCut=this.loadTexture("assets/umeda-sky-cutout-v1.webp"),this.textures.foodCut=this.loadTexture("assets/osaka-food-swarm-v1.webp"),this.createCastle(),this.createTunnel(),Ce.slice(1).forEach((t,e)=>this.createDistrict(t,e)),this.createHub(),this.createWorldParticles(),this.createRushField(),this.createPhotoRun()}createCastle(){let t=new Be;t.name="castle-world",this.scene.add(t),this.groups.set("castle",t);let e=new $t({map:this.textures.castle,color:16777215}),n=new Nt(new $e(44,29),e);n.position.z=0,t.add(n),this.castlePlane=n;let s=9,r=6,a=44/s,o=29/r;for(let c=0;c<r;c++)for(let h=0;h<s;h++){let f=new $e(a*1.025,o*1.025),u=this.textures.castle.clone();u.needsUpdate=!0,u.repeat.set(1/s,1/r),u.offset.set(h/s,c/r);let d=new $t({map:u,transparent:!0,side:nn}),g=new Nt(f,d),y=-22+a*(h+.5),m=-14.5+o*(c+.5);g.position.set(y,m,.05),g.visible=!1;let p=c*s+h;g.userData={start:new C(y,m,.05),burst:new C(y+(h-s/2)*1.15+(Ct()-.5)*7,m+(c-r/2)*1.45+(Ct()-.5)*5,6+Ct()*13),rot:new C((Ct()-.5)*2.8,(Ct()-.5)*3.2,(Ct()-.5)*2),rail:this.routePoints[8+Math.floor(p*(95/s/r))].clone().add(new C(p%2?.45:-.45,(p%3-1)*.08,0)),idx:p},t.add(g),this.shards.push(g)}let l=new Nt(new bn(8.2,.08,7,90),new $t({color:5044223,transparent:!0,opacity:.32,blending:Zt}));l.position.z=.3,t.add(l),this.castleRing=l}createTunnel(){let t=new Be;t.name="symbol-tunnel",this.scene.add(t),this.groups.set("tunnel",t),[["\u30B0\u30EA\u30B3",-8,4,-20,16722844],["\u9CE5\u5C45",8,-2,-30,16734008],["\u305F\u3053\u713C",-10,-4,-40,16753958],["\u63D0\u706F",9,4,-50,16724317],["\u901A\u5929\u95A3",-8,1,-61,5372159],["\u6D77\u904A\u9928",8,-4,-71,3653119],["\u5927\u962A",0,7,-79,16777215]].forEach(([n,s,r,a,o],l)=>{let c=Us(n,{font:l===0?"900 92px Impact":"900 86px Yu Gothic UI",glow:`#${o.toString(16).padStart(6,"0")}`}),h=Gn(c,10,2.5,{opacity:.95,blending:Zt});h.position.set(s,r,a),h.rotation.z=(Ct()-.5)*.35,h.userData={base:h.position.clone(),spin:(Ct()-.5)*.8,phase:Ct()*Wi},t.add(h),this.tunnel.push(h)});for(let n=0;n<20;n++){let s=n/20*Wi,r=-18-n*3.1,a=new Nt(new bn(7.8+n*.05,.035,4,48),new $t({color:n%2?3339775:16722596,transparent:!0,opacity:.17,blending:Zt}));a.position.set(0,0,r),a.rotation.z=s*.16,t.add(a),this.tunnel.push(a)}}backgroundPlane(t,e=58,n=33){let s=new $t({map:t,transparent:!0,opacity:.88,depthWrite:!1});return new Nt(new $e(e,n),s)}createDistrict(t,e){let n=new Be;n.position.fromArray(t.pos),n.name=`district-${t.id}`,this.scene.add(n),this.groups.set(t.id,n);let s=this.backgroundPlane(this.textures[t.id]);s.position.z=-28,s.userData.baseX=0,n.add(s);let r=this.backgroundPlane(this.textures[t.id],53,30);r.position.set(e%2?1.2:-1.2,.5,-25.7),r.userData.baseX=r.position.x,r.material=s.material.clone(),r.material.opacity=.18,r.material.blending=Zt,n.add(r),n.userData.layers=[s,r];let a=new Nt(new $e(62,37),new $t({color:t.color,transparent:!0,opacity:.035,wireframe:!0,blending:Zt}));a.position.z=-27,n.add(a),t.id==="dotonbori"&&this.buildDotonbori(n),t.id==="shinsekai"&&this.buildShinsekai(n),t.id==="kaiyukan"&&this.buildKaiyukan(n),t.id==="umeda"&&this.buildUmeda(n),t.id==="food"&&this.buildFood(n),t.micro.forEach((o,l)=>{let c=Us(o,{width:640,height:160,font:"800 54px Yu Gothic UI",glow:l?"#ff2daa":"#42f7ff"}),h=Gn(c,6.8,1.7,{opacity:.7,blending:Zt});h.position.set(l?9:-9,-7+l*2,4-l*3),h.userData.micro=!0,h.visible=!1,n.add(h),this.microSignals.push(h)}),this.addGates(n,t.color,e)}addGates(t,e,n){for(let s=0;s<9;s++){let r=18-s*5.2,a=((s+n)%3-1)*4,o=new Nt(new ln(.1,3.5+s%2*2,.1),new $t({color:s%2?e:16723368,transparent:!0,opacity:.55,blending:Zt}));o.position.set(s%2?13:-13,a,r),o.rotation.z=(s%2?1:-1)*.08,t.add(o)}}buildDotonbori(t){let e=new me({...oh,uniforms:zn.clone(oh.uniforms),transparent:!0,depthWrite:!1,side:nn}),n=new Nt(new $e(70,28,44,16),e);n.rotation.x=-Math.PI/2,n.position.set(0,-7,-4),t.add(n),this.water=n,this.dotonSigns=[],["\u30B0\u30EA\u30B3","\u304B\u306B\u9053\u697D","\u9053\u9813\u5800"].forEach((r,a)=>{let o=Gn(Us(r,{font:a===0?"900 92px Impact":"900 75px Yu Gothic UI",glow:a===1?"#ff3a87":"#42f7ff"}),9,2.2,{opacity:.82,blending:Zt});o.position.set(a%2?11:-11,5-a*3,5-a*8),o.rotation.y=a%2?-.35:.35,o.userData={sign:!0,baseZ:o.position.z,index:a},t.add(o),this.dotonSigns.push(o)});let s=new Nt(new ln(38,.35,2.2),new Oi({color:464159,emissive:707037,emissiveIntensity:.55,metalness:.8,roughness:.22}));s.position.set(0,-1,-9),t.add(s),this.dotonBridge=s}buildShinsekai(t){let e=Gn(this.textures.tower,13,29,{opacity:.9});e.position.set(3,2,-5),e.userData.landmark=!0,t.add(e),this.tower=e,this.lanterns=[];for(let n=0;n<18;n++){let s=new xr(.22,.22,1.15,10),r=new $t({color:n%3===0?16765773:16724815,transparent:!0,opacity:.8}),a=new Nt(s,r);a.position.set((n%2?1:-1)*(7+Ct()*7),-5+Ct()*15,10-Ct()*32),a.userData.baseZ=a.position.z,t.add(a),this.lanterns.push(a)}}buildKaiyukan(t){let e=Gn(this.textures.whale,30,16,{opacity:.96});e.position.set(-26,1,3),e.userData.landmark=!0,t.add(e),this.whale=e;for(let n=0;n<80;n++){let s=new Nt(new Fi(.05+Ct()*.18,6,5),new $t({color:5434111,transparent:!0,opacity:.15+Ct()*.42,wireframe:!0}));s.position.set((Ct()-.5)*36,(Ct()-.5)*23,16-Ct()*44),s.userData={bubble:!0,seed:Ct()},t.add(s),this.fx.push(s)}}buildUmeda(t){let e=Gn(this.textures.umedaCut,18,31,{opacity:.86});e.position.set(-2,1,-5),t.add(e),this.umeda=e,this.cityLights=[];for(let n=0;n<46;n++){let s=new Nt(new ln(.09,.09,.09),new $t({color:n%2?5109247:16727223,transparent:!0,opacity:.05,blending:Zt}));s.scale.set(1+Ct()*5,1+Ct()*2,1),s.position.set((Ct()-.5)*39,-7+Ct()*21,13-Ct()*36),t.add(s),this.cityLights.push(s)}}buildFood(t){let e=Gn(this.textures.foodCut,24,24,{opacity:.95});e.position.set(0,1,-3),t.add(e),this.food=e;let n=[[-8,5,4],[7,5,1],[-7,-6,2],[8,-6,0]];ch.forEach((s,r)=>{let a=new Nt(new bn(1.55,.06,7,52),new $t({color:r%2?16730792:4978431,transparent:!0,opacity:.56,blending:Zt}));a.position.fromArray(n[r]),a.userData={food:s,index:r},t.add(a),this.foodTargets.push(a);let o=Gn(Us(s,{width:720,height:140,font:"800 42px ui-monospace",glow:r%2?"#ff2daa":"#42f7ff"}),5,1,{opacity:.75,blending:Zt});o.position.set(n[r][0],n[r][1]-2.1,n[r][2]),t.add(o)})}createHub(){this.hubCenter=new C(0,65,-430);let t=new Be;t.position.copy(this.hubCenter),t.visible=!1,t.name="osaka-city-hub",this.scene.add(t),this.hubGroup=t;let e=new Be;e.name="holographic-osaka-real-map",t.add(e),this.mapGroup=e,this.mapStreetLines=[],this.mapRouteSegments=[],this.mapRoutePulses=[],this.hubPackets=[],this.mapShockwaves=[];let n=Ee.bounds.width,s=Ee.bounds.height,r=new Nt(new $e(n,s,22,16),new $t({color:2153704,wireframe:!0,transparent:!0,opacity:0,blending:Zt,depthWrite:!1}));r.rotation.x=-Math.PI/2,r.position.y=-.28,e.add(r),this.mapGrid=r;let a=[[-n/2,-s/2],[n/2,-s/2],[n/2,s/2],[-n/2,s/2]].map(([d,g])=>new C(d,0,g)),o=new dr(new fe().setFromPoints(a),new Ui({color:5699839,transparent:!0,opacity:0,blending:Zt}));e.add(o),this.mapOutline=o;let l={primary:{color:15007743,opacity:.38,y:.07},secondary:{color:4845306,opacity:.26,y:.055},tertiary:{color:1474452,opacity:.18,y:.04},rail:{color:16722857,opacity:.4,y:.09},water:{color:2543615,opacity:.58,y:.025}},c=0,h=[];for(let[d,g]of Object.entries(Ee.layers)){let y=l[d];for(let m=0;m<g.length;m+=18){let p=[];for(let v of g.slice(m,m+18))for(let T=1;T<v.length;T++)p.push(v[T-1][0],y.y,v[T-1][1],v[T][0],y.y,v[T][1]);if(!p.length)continue;let E=new fe;E.setAttribute("position",new Xt(p,3));let b=new ur(E,new Ui({color:y.color,transparent:!0,opacity:0,blending:Zt,depthWrite:!1}));b.userData={kind:d,maxOpacity:y.opacity,chunk:c++},e.add(b),h.push(b)}}this.mapStreetLines=h,h.forEach((d,g)=>d.userData.threshold=.035+g/Math.max(1,h.length-1)*.29);let f=new Nt(new $e(n+1,.46),new $t({color:14221311,transparent:!0,opacity:0,blending:Zt,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.set(0,.16,-s/2),e.add(f),this.mapScan=f;for(let d=0;d<3;d++){let g=new Nt(new bn(3,.05,5,72),new $t({color:d%2?16723369:4388863,transparent:!0,opacity:0,blending:Zt,depthWrite:!1}));g.rotation.x=Math.PI/2,g.position.y=.12,e.add(g),this.mapShockwaves.push(g)}let u=new Nt(new Mr(1.3,1),new $t({color:3731455,wireframe:!0,transparent:!0,opacity:.3,blending:Zt}));u.position.set(-2,1.15,0),e.add(u),this.hubCore=u,Ce.forEach((d,g)=>{let y=hh[d.id].clone(),m=new Be,p=.48+vl.indexOf(d.id)*.065;m.position.copy(y),m.userData={district:d.id,index:g,unlock:p,base:y.clone(),hover:!1};let E=new Nt(new br(.72,0),new Oi({color:332061,emissive:d.color,emissiveIntensity:1.25,metalness:.85,roughness:.2}));m.add(E);let b=new Nt(new bn(1.25,.065,5,54),new $t({color:d.color,transparent:!0,opacity:.8,blending:Zt}));b.rotation.x=Math.PI/2,m.add(b);let v=new Nt(new Sr(1.35,1.42,56),new $t({color:d.color,transparent:!0,opacity:0,blending:Zt,side:nn,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.position.y=-.15,m.add(v);let T=Gn(Us(d.jp,{width:700,height:210,font:"900 70px Yu Gothic UI",glow:`#${d.color.toString(16).padStart(6,"0")}`,sub:d.en}),6.4,1.9,{opacity:.96,blending:Zt,depthTest:!1});T.position.y=2.35,m.add(T),m.visible=!1,e.add(m);let S=new Nt(new Fi(.15,8,6),new $t({color:d.color,transparent:!0,opacity:.7,blending:Zt,depthWrite:!1}));S.userData={target:y.clone(),phase:g/Ce.length,unlock:p},S.visible=!1,e.add(S),this.hubPackets.push(S),this.hubNodes.push(m)});for(let d=0;d<vl.length-1;d++){let g=hh[vl[d]],y=hh[vl[d+1]],m=g.clone().lerp(y,.5);m.y=.22,m.x+=(d%2?1:-1)*.85;let p=new Ni([g.clone().setY(.18),m,y.clone().setY(.18)]),E=new $t({color:d%2?16723369:5044223,transparent:!0,opacity:0,blending:Zt,depthWrite:!1}),b=new Nt(new Ms(p,44,.12,5,!1),E);b.userData={threshold:.3+d*.075,curve:p},e.add(b),this.mapRouteSegments.push(b);let v=new Nt(new Fi(.24,8,6),new $t({color:16777215,transparent:!0,opacity:0,blending:Zt,depthWrite:!1}));v.userData={curve:p,threshold:b.userData.threshold,phase:d*.17},e.add(v),this.mapRoutePulses.push(v)}xl.forEach((d,g)=>{let y=new Be;y.position.copy(Id(d.geo,.1)),y.userData={echo:d.en};let m=new Nt(new bn(.65,.05,5,42),new $t({color:g%2?16726956:6616831,transparent:!0,opacity:.35,blending:Zt}));m.rotation.x=Math.PI/2,y.add(m);let p=Gn(Us(d.jp,{width:600,height:150,font:"800 46px Yu Gothic UI",glow:g%2?"#ff2daa":"#42f7ff"}),3.4,.9,{opacity:.44,blending:Zt});p.position.y=1.15,y.add(p),e.add(y)});for(let d=0;d<42;d++){let g=.2+Ct()*1.65,y=new Nt(new ln(.22+Ct()*.48,g,.22+Ct()*.48),new Oi({color:66570,emissive:d%5===0?2222835:2691152,emissiveIntensity:.07+Ct()*.14,metalness:.65,roughness:.45,transparent:!0,opacity:.48}));y.position.set((Ct()-.5)*(n-5),g/2,(Ct()-.5)*(s-5)),e.add(y)}}createWorldParticles(){let t=tn?360:920,e=new Float32Array(t*3),n=new Float32Array(t),s=new Float32Array(t);for(let l=0;l<t;l++){let c=this.route.getPoint(Ct());e[l*3]=c.x+(Ct()-.5)*70,e[l*3+1]=c.y+(Ct()-.5)*48,e[l*3+2]=c.z+(Ct()-.5)*45,n[l]=.5+Ct()*2.6,s[l]=Ct()}let r=new fe;r.setAttribute("position",new Ie(e,3)),r.setAttribute("size",new Ie(n,1)),r.setAttribute("seed",new Ie(s,1));let a=new me({...lh,uniforms:zn.clone(lh.uniforms),transparent:!0,depthWrite:!1,blending:Zt}),o=new fr(r,a);this.scene.add(o),this.particles=o}createRushField(){this.scene.add(this.camera),this.rushGroup=new Be,this.rushGroup.name="camera-rush-field",this.camera.add(this.rushGroup),this.rushData=[],this.rushMeshes=[],this.flybys=[];let t=[5044479,16722601,16774104],e=tn?45:105,n=Math.ceil(e/t.length),s=new ln(.028,.028,1);t.forEach((l,c)=>{let h=new $t({color:l,transparent:!0,opacity:0,blending:Zt,depthWrite:!1,depthTest:!1}),f=new cr(s,h,n);f.frustumCulled=!1,f.renderOrder=99;let u=[];for(let d=0;d<n;d++)u.push({x:(Ct()-.5)*18,y:(Ct()-.5)*11,z:-5-Ct()*64,speed:.72+Ct()*.9,len:.8+Ct()*3.6,phase:Ct()*Wi});f.userData.rush=u,this.rushData.push(...u),this.rushMeshes.push(f),this.rushGroup.add(f)});let r=new ln(1,3,.06),a=new bn(1.15,.055,5,28),o=t.map(l=>new $t({color:l,transparent:!0,opacity:0,blending:Zt,depthWrite:!1,depthTest:!1}));for(let l=0;l<(tn?8:16);l++){let c=new Nt(l%4===0?a:r,o[l%3]),h=l%2?1:-1;c.position.set(h*(3.3+Ct()*4.7),(Ct()-.5)*7,-10-Ct()*62),c.rotation.z=(Ct()-.5)*.6,c.scale.set(.25+Ct()*.85,.55+Ct()*2.2,1),c.userData={side:h,speed:.7+Ct()*.85,baseX:c.position.x,phase:Ct()*Wi},c.renderOrder=98,this.flybys.push(c),this.rushGroup.add(c)}}createPhotoRun(){this.photoGroup=new Be,this.photoGroup.name="camera-photo-run",this.camera.add(this.photoGroup),this.photoPanels=[];let t=new $e(8.8,5.25),e=new $e(9.05,5.5);ml.forEach((n,s)=>{let r=new Be,a=new Nt(e,new $t({color:s%2?16722601:4454143,transparent:!0,opacity:0,blending:Zt,depthWrite:!1,depthTest:!1})),o=new Nt(t,new $t({map:this.textures[n.id],color:14083048,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1}));a.position.z=-.03,r.add(a,o),r.userData={slot:s,id:n.id,at:n.at,frame:a,photo:o,side:s%2?1:-1,variant:n.variant},r.visible=!1,r.renderOrder=94,this.photoPanels.push(r),this.photoGroup.add(r)}),this.showcasePlane=new Nt(new $e(1,1),new $t({color:15068656,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,toneMapped:!1})),this.showcasePlane.position.z=-13,this.showcasePlane.visible=!1,this.showcasePlane.renderOrder=92,this.photoGroup.add(this.showcasePlane)}updatePhotoRun(t){if(!this.photoGroup)return;let e=t>=4&&t<38&&this.state.phase!==ge.FREE_EXPLORE;if(this.photoGroup.visible=e,this.photoBeat=-1,this.photoMode=e?this.state.phase===ge.DISTRICT_RUN?"environment-run":"clear-run":"off",this.showcasePlane.visible=!1,this.showcasePlane.material.opacity=0,this.showcaseId=null,!e){this.photoPanels.forEach(a=>a.visible=!1),this.activePhotoPanels=0;return}let n=.36,s=0;this.photoPanels.forEach((a,o)=>{let l=t-a.userData.at;if(l<0||l>=n){a.visible=!1;return}let c=Bt(l/n),h=Ne(c),f=a.userData.variant,u=a.userData.side;a.visible=!0,s++,this.photoBeat=o,this.photoMode="photo-hit",a.position.z=-11.8+h*2.35,a.position.x=f===0?u*(2.5-h*.65):f===1?u*(1.25-h*.35):0,a.position.y=f===2?-.9+h*.45:u*.32,a.rotation.z=u*(.045-.035*h);let d=Math.sin(Math.PI*c),g=.86+d*.13;a.scale.setScalar(g);let y=Ne(Bt(c/.16))*(1-Ne(Bt((c-.6)/.4)));a.userData.photo.material.opacity=y*.76,a.userData.frame.material.opacity=y*.2}),this.activePhotoPanels=s;let r=gl.find(a=>t>=a.start&&t<a.end);if(r&&s===0){let a=Bt((t-r.start)/(r.end-r.start)),o=Ne(Bt(a/.1))*(1-Ne(Bt((a-.88)/.12))),l=this.textures[r.id],c=Math.abs(this.showcasePlane.position.z),h=2*Math.tan(Uc.degToRad(this.camera.fov*.5))*c*1.035,f=l?.image?.width&&l?.image?.height?l.image.width/l.image.height:16/9,u=h*this.camera.aspect,d=h,g=h*f;g<u&&(g=u,d=u/f);let y=1+a*.045;this.showcasePlane.visible=!0,this.showcasePlane.material.map=l,this.showcasePlane.material.opacity=o*.94,this.showcasePlane.material.needsUpdate=!0,this.showcasePlane.scale.set(g*y,d*y,1),this.showcasePlane.position.x=this.pointer.x*.12+Math.sin(a*Math.PI)*.08,this.showcasePlane.position.y=this.pointer.y*.07,this.photoMode="full-image",this.showcaseId=r.id}}updateRush(t,e,n){if(!this.rushGroup)return;this.rushGroup.visible=this.state.started&&n<44.5&&this.state.phase!==ge.FREE_EXPLORE;let s=this.photoMode==="full-image",r=s?0:e,a=10+e*118,o=1.8;this.rushTravel=(this.rushTravel||0)+t*a;let l=new ke;this.rushMeshes.forEach(c=>{c.material.opacity=s?0:.008+r*.68,c.userData.rush.forEach((h,f)=>{h.z+=t*a*h.speed,h.z>o&&(h.z=-58-Ct()*18,h.x=(Ct()-.5)*18,h.y=(Ct()-.5)*11);let u=Bt((h.z+70)/70),d=.3+u*.9;l.position.set(h.x,h.y,h.z),l.rotation.set(0,0,Math.sin(n*1.5+h.phase)*.16),l.scale.set(d,d,h.len*(.55+e*7.8)),l.updateMatrix(),c.setMatrixAt(f,l.matrix)}),c.instanceMatrix.needsUpdate=!0}),this.flybys.forEach((c,h)=>{c.material.opacity=s?0:.012+r*.62,c.position.z+=t*a*c.userData.speed,c.position.z>2.5&&(c.position.z=-50-Ct()*26,c.position.y=(Ct()-.5)*7,c.userData.baseX=c.userData.side*(3.2+Ct()*5.4));let f=Bt((c.position.z+55)/57.5);c.position.x=c.userData.baseX*(1+f*.75)+Math.sin(n*2.2+c.userData.phase)*.25,c.rotation.z+=t*(h%2?-.75:.75)*(1+e*2.2),c.scale.z=1+e*2.5})}setPointer(t,e){this.pointer.x=t,this.pointer.y=e}updateCamera(t,e){let n=Math.min(7,Math.max(0,Si.findIndex(f=>e>=f.start&&e<f.end))),s=Si[n]||Si[7],r=Bt((e-s.start)/(s.end-s.start)),a=(n+Gi(r))/8;if(a=Bt(a),n>=2&&n<=6){let f=Gi(Bt(r/.24)),u=Ne(Bt((r-.24)/.76)),d=f*.9+u*.1;a=Bt((n+d)/8)}else n===1&&(a=Bt((n+Gi(Bt(r/.82)))/8));this.state.cameraProgress=a;let o=this.route.getPoint(a),l=this.route.getPoint(Bt(a+.014));if(e<38){let f=(1-Math.min(1,Math.abs(r-.55)*2))*1.4,u=Bt((r-.25)/.75);o.x+=this.pointer.x*(1.2+f)+Math.sin(u*Wi+n)*u*.8,o.y+=this.pointer.y*(.75+f*.4)+Math.sin(u*Math.PI*2.4)*u*.45,this.camera.position.lerp(o,.16+this.state.rushStrength*.28),this.camera.lookAt(l.x+this.pointer.x*.8,l.y+this.pointer.y*.45,l.z)}else{let f=Ne(Bt((e-38)/7)),u=44-f*13,d=-.48+f*.28+this.pointer.x*.06,g=this.hubCenter,y=new C(Math.sin(d)*u,20+f*10,Math.cos(d)*u);this.camera.position.lerp(g.clone().add(y),.1+.08*f),this.camera.lookAt(g.clone().add(new C(0,0,1.5)))}let c=n>=2&&n<=6?Ne(r):0;this.continuousZoom=c;let h=58+this.state.rushStrength*(tn?12:20)-c*(tn?5:9);Math.abs(this.camera.fov-h)>.02&&(this.camera.fov+=(h-this.camera.fov)*(.12+this.state.rushStrength*.22),this.camera.updateProjectionMatrix()),this.camera.rotation.z+=Math.sin(e*18.2)*(.0025+this.state.rushStrength*.014)*(1-r*.35)}update(t,e,n,s,r=0){this.state.rushStrength=Bt(r),this.updatePhotoRun(t),this.cyber.uniforms.time.value=t,this.cyber.uniforms.speed.value=this.photoMode==="full-image"?0:this.state.rushStrength,this.cyber.uniforms.glitch.value=(t<4?1-s:Math.sin(Math.floor(t*2.3)*12.9898)*.5+.5)*(.055+r*.16)*(this.photoMode==="full-image"?.12:1),this.cyber.uniforms.underwater.value=this.state.sceneId==="kaiyukan"?1:0,this.water&&(this.water.material.uniforms.time.value=t),this.particles&&(this.particles.material.uniforms.time.value=t),this.routeMesh.visible=t>.5,this.routeMesh.material.opacity=t<4?.08+s*.32:t>38?.55:.2+r*.28,this.updateCamera(this.state.cameraProgress,t),this.updateRush(e,this.state.rushStrength,t),this.updateCastle(t),this.updateTunnel(t),this.updateDistricts(t,n,s),this.updateHub(t,e);let a=this.camera.position.clone().add(new C(this.pointer.x*8,this.pointer.y*5,-10));this.cursorLight.position.lerp(a,.18)}updateCastle(t){let e=Bt(t/4);this.castleRing.rotation.z=t*.17,this.castleRing.scale.setScalar(1+Math.sin(t*2)*.025),this.castlePlane.visible=t<.08,this.shards.forEach((n,s)=>{if(n.visible=t>=0&&t<8,!n.visible)return;let r=Bt(e*1.8),a=Bt((e-.48)/.52);n.position.copy(n.userData.start).lerp(n.userData.burst,Gi(r)),n.rotation.set(n.userData.rot.x*r,n.userData.rot.y*r,n.userData.rot.z*r),a>0?(n.position.lerp(n.userData.rail,Gi(a)),n.rotation.x*=1-a,n.rotation.y*=1-a,n.rotation.z*=1-a,n.scale.set(1-a*.82,.8-a*.72,1)):n.scale.setScalar(1),n.material.opacity=t>7?8-t:1})}updateTunnel(t){let e=Bt((t-4)/4);this.tunnel.forEach((n,s)=>{n.visible=t>3.1&&t<8.4,n.visible&&(n.rotation.z+=n.userData.spin||(s%2?1:-1)*.003,n.userData.base&&(n.position.x=n.userData.base.x+Math.sin(t*4+n.userData.phase)*.5,n.position.z=n.userData.base.z+Math.sin(t*3.1+s)*1.4+e*6,n.scale.setScalar(.8+Math.sin(t*5+s)*.08+e*.3),n.material.opacity=.35+Math.sin(t*7+s)*.28))})}updateDistricts(t,e,n){let s=Ne(n);for(let[r,a]of this.groups){if(!a.userData.layers)continue;let o=r===this.state.sceneId;a.userData.zoom=o?s:0,a.userData.layers.forEach((l,c)=>{l.material.opacity=o?c?.24:.93:c?.04:.16;let h=c?-25.7:-28,f=c?14:9,u=o?1+s*(c?.58:.34):1;l.position.z=h+(o?s*f:0),l.position.x=(l.userData.baseX||0)+(o?this.pointer.x*(c?.7:.25)*s:0),l.scale.setScalar(u)}),a.rotation.y+=(this.pointer.x*(o?.036:.012)-a.rotation.y)*.05,a.position.y+=((Ce.find(l=>l.id===r)?.pos[1]||0)+(o?this.pointer.y*.55:0)-a.position.y)*.03}if(this.water){let r=this.state.sceneId==="dotonbori";this.water.position.x=this.pointer.x*1.4,this.water.position.z=-4+(r?s*8:0),this.water.scale.setScalar(r?1+s*.22:1),this.dotonSigns?.forEach(a=>{let o=r?s:0,l=1+o*(.18+a.userData.index*.035);a.position.z=a.userData.baseZ+o*(7+a.userData.index*2),a.scale.set(9*l,2.2*l,1)}),this.dotonBridge&&(this.dotonBridge.position.z=-9+(r?s*8:0),this.dotonBridge.scale.x=1+(r?s*.18:0))}if(this.tower){let r=this.state.sceneId==="shinsekai";this.tower.position.y=2+(r?n*5:0),this.tower.position.z=-5+(r?s*8:0),this.tower.scale.set(13*(1+(r?s*.24:0)),29*(1+(r?s*.24:0)),1),this.tower.material.opacity=r?.94:.46,this.lanterns?.forEach((a,o)=>{a.position.z=a.userData.baseZ+(r?s*(10+o%3*2):0),a.scale.setScalar(r?1+s*(.25+o%4*.08):1)})}if(this.whale){let r=this.state.sceneId==="kaiyukan"?n:0;this.whale.position.x=-26+r*54,this.whale.position.y=1+Math.sin(r*Math.PI)*4+this.pointer.y,this.whale.position.z=3+Math.sin(r*Math.PI)*6,this.whale.scale.set(30*(.78+Math.sin(r*Math.PI)*.42),16*(.78+Math.sin(r*Math.PI)*.42),1),this.whale.material.opacity=this.state.sceneId==="kaiyukan"?.98:.32}if(this.fx.forEach(r=>{r.userData.bubble&&(r.position.y+=.015+r.userData.seed*.03,r.position.y>12&&(r.position.y=-12))}),this.umeda){let r=this.state.sceneId==="umeda";this.umeda.position.y=1+(r?n*3:0),this.umeda.position.z=-5+(r?s*9:0),this.umeda.scale.set(18*(1+(r?s*.27:0)),31*(1+(r?s*.27:0)),1),this.cityLights?.forEach((a,o)=>{a.material.opacity=r&&o/this.cityLights.length<n?.85:.04,r&&(a.position.z+=.018+s*.045)})}if(this.food){let r=this.state.sceneId==="food",a=r?1+s*.34:1;this.food.rotation.z=Math.sin(t*.8)*.025,this.food.position.z=-3+(r?s*8:0),this.food.scale.set(24*a,24*a,1),this.food.material.opacity=r?.95:.32,this.foodTargets.forEach((o,l)=>{o.rotation.z+=.02*(l%2?1:-1);let c=Math.abs(this.pointer.x-[-.5,.45,-.45,.55][l])<.28&&Math.abs(this.pointer.y-[-.25,-.25,.4,.4][l])<.34;o.material.opacity=r?c?1:.45:.08,o.scale.setScalar((c?1.25:1)*(r?1+s*.18:1))})}}updateHub(t,e){if(!this.hubGroup)return;let n=this.state.phase===ge.FREE_EXPLORE||this.state.phase===ge.DISTRICT_FLYIN,s=t>36.8||n;if(this.hubGroup.visible=s,!s)return;let r=n?1:Bt((t-38)/7);this.mapReveal=r,this.hubGroup.scale.setScalar(.68+Gi(r)*.32),this.hubGroup.rotation.y+=((this.hubYaw||0)-this.hubGroup.rotation.y)*.04,this.hubCore.rotation.x+=e*.35,this.hubCore.rotation.y+=e*.62,this.mapGrid.material.opacity=.012+Ne(Bt((r-.02)/.18))*.055,this.mapOutline.material.opacity=Ne(Bt(r/.12))*.72;let a=0;this.mapStreetLines.forEach(h=>{let f=Ne(Bt((r-h.userData.threshold)/.11));h.material.opacity=f*h.userData.maxOpacity,f>.15&&a++}),this.visibleStreetCount=a;let o=Ee.bounds.height;this.mapScan.visible=r<.78,this.mapScan.position.z=-o/2+Bt(r/.74)*o,this.mapScan.material.opacity=this.mapScan.visible?Math.sin(Bt(r/.78)*Math.PI)*.72:0,this.mapShockwaves.forEach((h,f)=>{let u=Bt((r-(.12+f*.12))/.32);h.scale.setScalar(.25+u*5.5),h.material.opacity=Math.sin(u*Math.PI)*.48});let l=0;this.mapRouteSegments.forEach((h,f)=>{let u=Ne(Bt((r-h.userData.threshold)/.09));h.material.opacity=u*.92,u>.2&&l++}),this.visibleRouteCount=l,this.mapRoutePulses.forEach((h,f)=>{let u=Bt((r-h.userData.threshold)/.09);h.visible=u>0;let d=(t*.42+h.userData.phase)%1;h.position.copy(h.userData.curve.getPoint(d)),h.material.opacity=u*.95,h.scale.setScalar(.65+Math.sin(d*Math.PI)*1.4)});let c=0;this.hubNodes.forEach((h,f)=>{let u=h.userData.unlock,d=Bt((r-u)/.085),g=Ne(d);h.visible=g>.01,h.visible&&c++,h.position.copy(h.userData.base),h.position.y=.2+Math.sin(t*2.8+f)*.1*g,h.children[0].rotation.y+=e*.8,h.children[1].rotation.z+=e*(f%2?-.9:.9);let y=h.userData.hover,m=1+Math.sin(d*Math.PI)*.42,p=g*m*(y?1.16:1);h.scale.lerp(new C().setScalar(p),.24),h.children[1].material.opacity=.56+g*.28+(y?.16:0),h.children[2].scale.setScalar(.7+d*2.1),h.children[2].material.opacity=Math.sin(d*Math.PI)*.72+(y?.25:0)}),this.visibleMapNodes=c,this.hubPackets.forEach(h=>{let f=Ne(Bt((r-h.userData.unlock)/.1)),u=(t*.28+h.userData.phase)%1;h.visible=f>.02,h.position.copy(h.userData.target).multiplyScalar(.5-.5*Math.cos(u*Wi)),h.position.y+=.25,h.material.opacity=f*.72,h.scale.setScalar(.4+Math.sin(u*Math.PI)*1.15)})}updateFree(t,e){if(this.state.phase!==ge.FREE_EXPLORE)return;let n=t*12e-6+this.hubYaw,s=this.hubCenter.clone().add(new C(Math.sin(n)*30,18+this.pointer.y*4,Math.cos(n)*30));this.camera.position.lerp(s,.045),this.camera.lookAt(this.hubCenter.clone().add(new C(0,this.pointer.y*2,1.5))),this.updateHub(45+t*.001,e)}raycastHub(t){let e=new Pr;e.setFromCamera(t,this.camera);let n=e.intersectObjects(this.hubNodes,!0);if(this.hubNodes.forEach(r=>r.userData.hover=!1),!n.length)return null;let s=n[0].object;for(;s&&!s.userData.district;)s=s.parent;return s?(s.userData.hover=!0,s.userData.district):null}debugSnapshot(){this.camera.updateMatrixWorld(!0),this.camera.matrixWorldInverse.copy(this.camera.matrixWorld).invert(),this.hubGroup?.updateMatrixWorld(!0);let t=this.groups.get(this.state.sceneId);return{camera:{position:this.camera.position.toArray().map(e=>Number(e.toFixed(4))),quaternion:this.camera.quaternion.toArray().map(e=>Number(e.toFixed(5))),fov:Number(this.camera.fov.toFixed(3))},map:{realGeo:!0,source:Ee.source,ways:Object.values(Ee.layerCounts).reduce((e,n)=>e+n,0),layers:Ee.layerCounts,reveal:Number((this.mapReveal||0).toFixed(3)),streets:this.visibleStreetCount||0,routes:this.visibleRouteCount||0,nodes:this.visibleMapNodes||0,hovered:this.hubNodes?.find(e=>e.userData.hover)?.userData.district||null,nodeNdc:Object.fromEntries((this.hubNodes||[]).map(e=>{let n=e.getWorldPosition(new C).project(this.camera);return[e.userData.district,[Number(n.x.toFixed(4)),Number(n.y.toFixed(4))]]})),scanZ:this.mapScan?Number(this.mapScan.position.z.toFixed(3)):null},montage:{activePanels:this.activePhotoPanels||0,beat:this.photoBeat??-1,mode:this.photoMode||"off",showcaseId:this.showcaseId||null,showcaseOpacity:Number((this.showcasePlane?.material.opacity||0).toFixed(3)),ids:this.photoPanels?.filter(e=>e.visible).map(e=>e.userData.id)||[]},dolly:{zoom:Number((this.continuousZoom||0).toFixed(3)),backgroundScale:t?.userData.layers?Number(t.userData.layers[0].scale.x.toFixed(3)):null,backgroundZ:t?.userData.layers?Number(t.userData.layers[0].position.z.toFixed(3)):null},rush:{strength:Number(this.state.rushStrength.toFixed(3)),travel:Number((this.rushTravel||0).toFixed(3)),nearestZ:this.rushData?.length?Number(Math.max(...this.rushData.map(e=>e.z)).toFixed(3)):null,flybyNearestZ:this.flybys?.length?Number(Math.max(...this.flybys.map(e=>e.position.z)).toFixed(3)):null},shardZ:this.shards[17]?.position.z??null,tunnelZ:this.tunnel.find(e=>e.userData.base)?.position.z??null,whale:this.whale?.position.toArray().map(e=>Number(e.toFixed(4)))??null,hubRotation:this.hubGroup?.rotation.y??null,routeVisible:!!this.routeMesh?.visible}}render(){this.composer.render()}resize(){let t=innerWidth,e=innerHeight;this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,tn?1:1.5)),this.renderer.setSize(t,e,!1),this.composer.setSize(t,e),this.cyber.uniforms.resolution.value.set(t*(tn?1:Math.min(devicePixelRatio||1,1.5)),e*(tn?1:Math.min(devicePixelRatio||1,1.5)))}},An=new dh(nt),At=null,si=null,Ns="webgl",gh=0,Ad=performance.now(),Rd=0,El=0,ii=null,ph=-1,Ml=0,bl=0,Sl=0,wn=null,qr=null,Te={x:0,y:0,ndc:new st,clientX:innerWidth/2,clientY:innerHeight/2};function mh(i="reduced-motion"){Ns!=="canvas"&&(Ns="canvas",nt.renderMode="canvas",nt.qualityTier=Pd?"reduced-motion":nt.qualityTier,et.world.hidden=!0,et.fallback.hidden=!1,si||(si=new _l(et.fallback,nt,Rl)),si.load().finally(()=>si.start()),et.live.textContent=`Canvas \uD328\uB7F4\uB799\uC2A4 \uBAA8\uB4DC: ${i}`)}try{At=new fh(et.world,nt,mh),nt.renderMode="webgl",Ns="webgl",Pd&&(et.live.textContent="\uBAA8\uC158 \uC6B0\uC120 \uC2DC\uB124\uB9C8\uD2F1 \uBAA8\uB4DC")}catch(i){console.error("[OSAKA] WebGL setup failed",i),mh("webgl-failed")}function Ld(i){return Si.findIndex(t=>i>=t.start&&i<t.end)}function Dd(i,t){if(i===0)return Ne(Bt((t-.22)/.78))*.88;if(i===1)return .74+Math.sin(t*Math.PI)*.26;if(i>=2&&i<=6){let e=1-Ne(Bt(t/.27)),n=Ne(Bt((t-.84)/.16));return Math.max(.18,e,n)}return i===7?(1-Ne(Bt(t/.42)))*.92:0}function X1(i){let t=`assets/mio-09-${i}-v1.webp`;document.querySelectorAll(".mio-layer").forEach(e=>{e.src.endsWith(t)||(e.src=t)})}function xh(i,t){et.code.textContent=i.code,et.jp.textContent=i.jp,et.meta.textContent=i.meta,et.title.classList.remove("is-on","is-cut"),et.title.offsetWidth,et.title.classList.add("is-on","is-cut"),Ml=performance.now()+820,X1(i.expression),et.subtitle.textContent=i.ko,et.subtitle.classList.add("is-on"),bl=performance.now()+1900,et.mio.classList.add("is-on","is-hacking"),Sl=performance.now()+1750,setTimeout(()=>et.mio.classList.remove("is-hacking"),560),An.cue(t),et.live.textContent=`${i.jp}. ${i.ko}`}function q1(i){Ml&&i>Ml&&(et.title.classList.remove("is-on"),Ml=0),bl&&i>bl&&(et.subtitle.classList.remove("is-on"),bl=0),Sl&&i>Sl&&nt.phase!==ge.FREE_EXPLORE&&(et.mio.classList.remove("is-on"),Sl=0)}function Ud(i,t,e){nt.phase=ge[i.phase]||i.phase,nt.sceneId=i.id,nt.transitionProgress=e,et.phase.textContent=nt.phase,t!==ph&&(ph=t,xh(i,t),t===7&&(nt.hubOpen=!0,An.setHubMix()))}function Nd(i,t){let e=i===7,n=e&&t<.9;et.mapUnlock.classList.toggle("is-on",n),et.mapUnlock.setAttribute("aria-hidden",String(!n)),et.mapAttribution.classList.toggle("is-on",e),et.app.style.setProperty("--map-reveal",n?t.toFixed(3):"0")}var uh=null;function Tl(i){let t=Ce.find(a=>a.id===i);if(!t)return uh=null,et.mapPreview.classList.remove("is-on"),et.mapPreview.setAttribute("aria-hidden","true"),null;let e=Math.min(300,innerWidth*.42),n=Math.min(220,innerHeight*.34),s=Te.clientX+e+42<innerWidth?Te.clientX+30:Te.clientX-e-30,r=Bt(Te.clientY-n*.48,54,innerHeight-n-26);return et.mapPreview.style.setProperty("--preview-x",`${Math.round(s)}px`),et.mapPreview.style.setProperty("--preview-y",`${Math.round(r)}px`),uh!==i&&(uh=i,et.previewImage.src=t.background,et.previewImage.alt=`${t.jp} \uB300\uD45C \uC774\uBBF8\uC9C0`,et.previewCode.textContent=`${t.en} // ${t.geo[0].toFixed(4)}N \xB7 ${t.geo[1].toFixed(4)}E`,et.previewName.textContent=t.jp,et.mapPreview.classList.remove("is-on"),et.mapPreview.offsetWidth),et.mapPreview.classList.add("is-on"),et.mapPreview.setAttribute("aria-hidden","false"),i}async function Yr({silent:i=!1}={}){return nt.started?!1:(nt.started=!0,nt.phase=ge.BREACH,nt.sceneId="castle",gh=performance.now(),nt.elapsed=0,et.boot.classList.add("is-gone"),et.app.classList.add("impact-flash"),et.mapAttribution.classList.remove("is-on"),Tl(null),setTimeout(()=>et.app.classList.remove("impact-flash"),600),et.mio.classList.add("is-on"),i||(await An.unlock(),An.impact()),xh(Si[0],0),ph=0,!0)}function Fd(i){nt.selectedSignal=i,et.lock.textContent=`${i} // SIGNAL LOCKED`,et.lock.classList.remove("is-on"),et.lock.offsetWidth,et.lock.classList.add("is-on"),et.live.textContent=`\uAD00\uC2EC \uC74C\uC2DD \uC2E0\uD638 ${i} \uC800\uC7A5`,At&&At.foodTargets.forEach(t=>{t.material.color.set(t.userData.food===i?16777215:t.userData.index%2?16730792:4978431)})}function Al(){nt.phase=ge.FREE_EXPLORE,nt.sceneId="hub",nt.hubOpen=!0,nt.cameraProgress=1,nt.transitionProgress=1,nt.rushStrength=0,et.app.style.setProperty("--rush","0"),et.app.style.setProperty("--map-reveal","0"),et.app.classList.remove("is-rushing"),et.mapUnlock.classList.remove("is-on"),et.mapUnlock.setAttribute("aria-hidden","true"),et.mapAttribution.classList.add("is-on"),et.phase.textContent=nt.phase,et.hub.classList.add("is-on"),et.title.classList.remove("is-on"),et.subtitle.classList.remove("is-on"),et.mio.classList.add("is-on"),At&&(At.routeMesh.visible=!1,At.hubGroup.visible=!0,At.rushGroup.visible=!1,At.photoGroup.visible=!1,At.photoMode="off",At.showcaseId=null,At.showcasePlane.visible=!1,At.showcasePlane.material.opacity=0,At.camera.fov=58,At.camera.updateProjectionMatrix(),At.camera.position.copy(At.hubCenter.clone().add(new C(0,18,30))),At.camera.lookAt(At.hubCenter.clone().add(new C(0,0,1.5)))),An.setHubMix(),et.live.textContent="\uC624\uC0AC\uCE74 \uC2E4\uC81C \uC9C0\uB3C4 \uD5C8\uBE0C\uAC00 \uC5F4\uB838\uC2B5\uB2C8\uB2E4. \uBA85\uC18C\uC5D0 \uB9C8\uC6B0\uC2A4\uB97C \uC62C\uB824 \uB300\uD45C \uC774\uBBF8\uC9C0\uB97C \uD655\uC778\uD558\uC138\uC694."}function Y1(i){let t=Ce.find(e=>e.id===i);return t?new C(t.pos[0],t.pos[1]+1,t.pos[2]+21):null}function Rl(i){if(!Ce.some(n=>n.id===i))return!1;if(wn)return nt.queuedScene=i,!0;if(!At)return nt.sceneId=i,et.live.textContent=`${Ce.find(n=>n.id===i).jp} \uD328\uB7F4\uB799\uC2A4 \uD0D0\uC0C9`,!0;let t=Y1(i),e=At.camera.position.clone();return Tl(null),wn={id:i,start:performance.now(),duration:1450,from:e,to:t,look:new C(t.x,t.y,t.z-24),returning:!1},nt.phase=ge.DISTRICT_FLYIN,nt.sceneId=i,nt.transitionProgress=0,et.phase.textContent=nt.phase,et.hub.classList.remove("is-on"),et.mapAttribution.classList.remove("is-on"),At.microSignals.forEach(n=>n.visible=!0),!0}function Od(){if(nt.phase!==ge.DISTRICT_FLYIN)return!1;if(!At)return Al(),!0;let i=At.camera.position.clone(),t=At.hubCenter.clone().add(new C(0,18,30));return wn={id:"hub",start:performance.now(),duration:1250,from:i,to:t,look:At.hubCenter.clone(),returning:!0},nt.transitionProgress=0,!0}function Z1(i){if(!wn||!At)return;let t=Bt((i-wn.start)/wn.duration),e=Gi(t),n=Math.sin(Math.PI*t),s=wn.from.clone().lerp(wn.to,e);if(s.y+=Math.sin(Math.PI*t)*5,At.camera.position.copy(s),At.camera.lookAt(wn.look),nt.transitionProgress=t,nt.rushStrength=n,At.cyber.uniforms.speed.value=n,At.cyber.uniforms.glitch.value=.1+n*.3,At.updateRush(.016,n,nt.elapsed),t>=1){let r=wn.returning;if(wn=null,nt.transitionProgress=1,r)At.microSignals.forEach(a=>a.visible=!1),Al();else{let a=Ce.find(l=>l.id===nt.sceneId);xh({code:"LOCAL//DIVE",jp:a.jp,meta:`${a.en} // SIGNAL FIELD`,expression:"neutral",ko:`${a.jp}, \uC2E0\uD638 \uAD6C\uC5ED\uC5D0 \uB3C4\uCC29\uD588\uC5B4.`},99);let o=nt.queuedScene;nt.queuedScene=null,o&&o!==nt.sceneId&&setTimeout(()=>Rl(o),0)}}}function $1(i,t){if(!nt.started)return;if(ii!==null?nt.elapsed=ii:nt.elapsed=Bt((i-gh)/1e3+El,0,45),El*=Math.pow(.08,t),nt.elapsed>=45){nt.phase!==ge.FREE_EXPLORE&&nt.phase!==ge.DISTRICT_FLYIN&&Al();return}let e=Math.max(0,Ld(nt.elapsed)),n=Si[e],s=Bt((nt.elapsed-n.start)/(n.end-n.start));Ud(n,e,s),Nd(e,s),At&&At.update(nt.elapsed,t,e,s,Dd(e,s))}function J1(){let i=Te.x,t=Te.y;et.mio.style.setProperty("--mio-back-x",`${i*-6}px`),et.mio.style.setProperty("--mio-back-y",`${t*-2}px`),et.mio.style.setProperty("--mio-body-x",`${i*1.3}px`),et.mio.style.setProperty("--mio-body-y",`${t*.7}px`),et.mio.style.setProperty("--mio-face-x",`${i*4.1}px`),et.mio.style.setProperty("--mio-face-y",`${t*1.8}px`),et.mio.style.setProperty("--mio-fringe-x",`${i*7}px`),et.mio.style.setProperty("--mio-fringe-y",`${t*2.7}px`)}function Bd(i){requestAnimationFrame(Bd);let t=Math.min(.05,(i-Ad)/1e3||.016);Ad=i,q1(i),J1(),nt.started&&nt.phase!==ge.FREE_EXPLORE&&nt.phase!==ge.DISTRICT_FLYIN&&$1(i,t),nt.phase===ge.DISTRICT_FLYIN&&Z1(i),nt.phase===ge.FREE_EXPLORE&&At&&At.updateFree(i,t),et.app.style.setProperty("--rush",nt.rushStrength.toFixed(3)),et.app.classList.toggle("is-rushing",nt.rushStrength>.34),(!tn||i-Rd>=32)&&(Rd=i,At&&Ns==="webgl"&&(At.cyber.uniforms.time.value=nt.started?nt.elapsed:i*.001,At.particles.material.uniforms.time.value=i*.001,At.render()),si&&Ns==="canvas"&&si.render(i));let n=nt.started?nt.elapsed:0,s=Math.floor(n/60),r=Math.floor(n%60),a=Math.floor(n%1*1e3);et.clock.textContent=`${String(s).padStart(2,"0")}:${String(r).padStart(2,"0")}:${String(a).padStart(3,"0")}`}requestAnimationFrame(Bd);function K1(i){if(Te.clientX=i.clientX,Te.clientY=i.clientY,Te.x=(i.clientX/innerWidth-.5)*2,Te.y=-(i.clientY/innerHeight-.5)*2,Te.ndc.set(Te.x,Te.y),et.cursor.style.transform=`translate3d(${i.clientX}px,${i.clientY}px,0)`,At?.setPointer(Te.x,Te.y),si?.setPointer(Te.x,Te.y),nt.phase===ge.FREE_EXPLORE?(qr=Ns==="webgl"&&At?At.raycastHub(Te.ndc):si?.hover(i.clientX,i.clientY)||null,Tl(qr),et.app.classList.toggle("is-target",!!qr)):Tl(null),At?.dragging){let t=i.clientX-At.dragX;At.dragX=i.clientX,At.hubYaw+=t*.003}}window.addEventListener("pointermove",K1,{passive:!0});et.app.addEventListener("pointerdown",i=>{nt.phase===ge.FREE_EXPLORE&&At&&(At.dragging=!0,At.dragX=i.clientX)});window.addEventListener("pointerup",()=>{At&&(At.dragging=!1)});et.app.addEventListener("click",i=>{if(!i.target.closest("button")){if(!nt.started){Yr();return}if(nt.phase===ge.DISTRICT_RUN&&nt.sceneId==="food"){let t=Te.x<0?Te.y>0?2:0:Te.y>0?3:1;Fd(ch[t]);return}nt.phase===ge.FREE_EXPLORE&&qr&&Rl(qr)}});et.breach.addEventListener("click",()=>Yr());window.addEventListener("wheel",i=>{nt.started&&nt.elapsed<45&&(El=Bt(El+Math.abs(i.deltaY)*.0018,0,2.2))},{passive:!0});window.addEventListener("keydown",i=>{i.key==="Escape"&&Od(),i.key==="Enter"&&!nt.started&&Yr()});window.addEventListener("resize",()=>{At?.resize(),si?.resize()});window.addEventListener("blur",()=>An.focus(!1));window.addEventListener("focus",()=>An.focus(!0));et.mute.addEventListener("click",async()=>{let i=!nt.muted;An.setMuted(i),!i&&nt.started&&!An.ctx&&await An.unlock()});function zd(i){et.credits.classList.toggle("is-on",i),et.credits.setAttribute("aria-hidden",String(!i)),et.creditsToggle.setAttribute("aria-expanded",String(i))}et.creditsToggle.addEventListener("click",()=>zd(!et.credits.classList.contains("is-on")));et.creditsClose.addEventListener("click",()=>zd(!1));var wl={get renderMode(){return nt.renderMode},get phase(){return nt.phase},get sceneId(){return nt.sceneId},get cameraProgress(){return nt.cameraProgress},get transitionProgress(){return nt.transitionProgress},get qualityTier(){return nt.qualityTier},get loadedAssets(){return nt.loadedAssets},get audioCreated(){return nt.audioCreated},get selectedSignal(){return nt.selectedSignal},get state(){return{...nt}},start:i=>Yr(i),setMuted:i=>An.setMuted(!!i),selectNode:Rl,escapeToHub:Od,setTestTime(i){if(nt.started||Yr({silent:!0}),ii=Bt(Number(i)||0,0,45),nt.elapsed=ii,ii>=45)Al();else{let t=Math.max(0,Ld(ii)),e=Si[t],n=Bt((ii-e.start)/(e.end-e.start)),s=Dd(t,n);if(Ud(e,t,n),Nd(t,n),At)for(let r=0;r<18;r++)At.update(ii,.016,t,n,s)}return wl.state},releaseTestClock(){ii=null,gh=performance.now()-nt.elapsed*1e3},forceFallback:i=>mh(i||"test"),lockSignal:Fd,debugSnapshot:()=>At?.debugSnapshot()??{renderMode:"canvas"}};Object.defineProperty(window,"__OSAKA__",{value:wl,configurable:!1,writable:!1});if(Cd){if(document.documentElement.dataset.testMode="true",yl.has("time")){let i=Number(yl.get("time"));wl.setTestTime(i)}yl.get("fallback")==="1"&&wl.forceFallback("query-test")}})();
