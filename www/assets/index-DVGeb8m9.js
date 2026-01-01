(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const h of l.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function e(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=e(o);fetch(o.href,l)}})();var bu=Symbol.for("preact-signals");function Za(){if(rr>1)rr--;else{for(var s,t=!1;Br!==void 0;){var e=Br;for(Br=void 0,Jo++;e!==void 0;){var r=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&Yc(e))try{e.c()}catch(o){t||(s=o,t=!0)}e=r}}if(Jo=0,rr--,t)throw s}}var ve=void 0;function Zc(s){var t=ve;ve=void 0;try{return s()}finally{ve=t}}var Br=void 0,rr=0,Jo=0,Fs=0;function qc(s){if(ve!==void 0){var t=s.n;if(t===void 0||t.t!==ve)return t={i:0,S:s,p:ve.s,n:void 0,t:ve,e:void 0,x:void 0,r:t},ve.s!==void 0&&(ve.s.n=t),ve.s=t,s.n=t,32&ve.f&&s.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=ve.s,t.n=void 0,ve.s.n=t,ve.s=t),t}}function Qe(s,t){this.v=s,this.i=0,this.n=void 0,this.t=void 0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}Qe.prototype.brand=bu;Qe.prototype.h=function(){return!0};Qe.prototype.S=function(s){var t=this,e=this.t;e!==s&&s.e===void 0&&(s.x=e,this.t=s,e!==void 0?e.e=s:Zc(function(){var r;(r=t.W)==null||r.call(t)}))};Qe.prototype.U=function(s){var t=this;if(this.t!==void 0){var e=s.e,r=s.x;e!==void 0&&(e.x=r,s.e=void 0),r!==void 0&&(r.e=e,s.x=void 0),s===this.t&&(this.t=r,r===void 0&&Zc(function(){var o;(o=t.Z)==null||o.call(t)}))}};Qe.prototype.subscribe=function(s){var t=this;return Jn(function(){var e=t.value,r=ve;ve=void 0;try{s(e)}finally{ve=r}},{name:"sub"})};Qe.prototype.valueOf=function(){return this.value};Qe.prototype.toString=function(){return this.value+""};Qe.prototype.toJSON=function(){return this.value};Qe.prototype.peek=function(){var s=ve;ve=void 0;try{return this.value}finally{ve=s}};Object.defineProperty(Qe.prototype,"value",{get:function(){var s=qc(this);return s!==void 0&&(s.i=this.i),this.v},set:function(s){if(s!==this.v){if(Jo>100)throw new Error("Cycle detected");this.v=s,this.i++,Fs++,rr++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Za()}}}});function we(s,t){return new Qe(s,t)}function Yc(s){for(var t=s.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Kc(s){for(var t=s.s;t!==void 0;t=t.n){var e=t.S.n;if(e!==void 0&&(t.r=e),t.S.n=t,t.i=-1,t.n===void 0){s.s=t;break}}}function jc(s){for(var t=s.s,e=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):e=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}s.s=e}function fr(s,t){Qe.call(this,void 0),this.x=s,this.s=void 0,this.g=Fs-1,this.f=4,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}fr.prototype=new Qe;fr.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Fs))return!0;if(this.g=Fs,this.f|=1,this.i>0&&!Yc(this))return this.f&=-2,!0;var s=ve;try{Kc(this),ve=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return ve=s,jc(this),this.f&=-2,!0};fr.prototype.S=function(s){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}Qe.prototype.S.call(this,s)};fr.prototype.U=function(s){if(this.t!==void 0&&(Qe.prototype.U.call(this,s),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};fr.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var s=this.t;s!==void 0;s=s.x)s.t.N()}};Object.defineProperty(fr.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var s=qc(this);if(this.h(),s!==void 0&&(s.i=this.i),16&this.f)throw this.v;return this.v}});function Jc(s){var t=s.u;if(s.u=void 0,typeof t=="function"){rr++;var e=ve;ve=void 0;try{t()}catch(r){throw s.f&=-2,s.f|=8,qa(s),r}finally{ve=e,Za()}}}function qa(s){for(var t=s.s;t!==void 0;t=t.n)t.S.U(t);s.x=void 0,s.s=void 0,Jc(s)}function wu(s){if(ve!==this)throw new Error("Out-of-order effect");jc(this),ve=s,this.f&=-2,8&this.f&&qa(this),Za()}function dr(s,t){this.x=s,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t?.name}dr.prototype.c=function(){var s=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{s()}};dr.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,Jc(this),Kc(this),rr++;var s=ve;return ve=this,wu.bind(this,s)};dr.prototype.N=function(){2&this.f||(this.f|=2,this.o=Br,Br=this)};dr.prototype.d=function(){this.f|=8,1&this.f||qa(this)};dr.prototype.dispose=function(){this.d()};function Jn(s,t){var e=new dr(s,t);try{e.c()}catch(o){throw e.d(),o}var r=e.d.bind(e);return r[Symbol.dispose]=r,r}class Au{powertrain={rpm:we(0),speed:we(0),gear:we("N"),boost:we(0),oil:we(90),coolant:we(85)};body={doors:{fl:we(!1),fr:we(!1),rl:we(!1),rr:we(!1),hood:we(!1),trunk:we(!1)},climate:{on:we(!1),tempL:we(20),tempR:we(20),fan:we(0)}};motion={location:{lat:we(0),lng:we(0),heading:we(0),elevation:we(0)}};media={volume:we(15),nowPlaying:we("FM 88.5"),isPlaying:we(!1)};readState(){return{powertrain:this.powertrain,body:this.body,motion:this.motion,media:this.media}}updateRPM(t){this.powertrain.rpm.value=t}toggleDoor(t){this.body.doors[t].value=!this.body.doors[t].value}updateLocation(t,e,r){this.motion.location.lat.value=t,this.motion.location.lng.value=e,this.motion.location.heading.value=r}handleSWC(t){switch(t){case 24:this.media.volume.value=Math.min(30,this.media.volume.value+1);break;case 25:this.media.volume.value=Math.max(0,this.media.volume.value-1);break;case 85:this.media.isPlaying.value=!this.media.isPlaying.value;break}}setClimateTemp(t,e){t==="left"?this.body.climate.tempL.value=e:this.body.climate.tempR.value=e}}class Cu{currentTheme=we("cyberpunk");constructor(){Jn(()=>{this.applyTheme(this.currentTheme.value)})}setTheme(t){this.currentTheme.value=t}applyTheme(t){const e=document.documentElement;t==="cyberpunk"?(e.style.setProperty("--neon-cyan","#00f3ff"),e.style.setProperty("--neon-magenta","#ff0055"),e.style.setProperty("--bg-dark","#050505")):t==="sport"&&(e.style.setProperty("--neon-cyan","#ff3300"),e.style.setProperty("--neon-magenta","#ffffff"),e.style.setProperty("--bg-dark","#100000"))}}const Ya="182",Pu=0,ql=1,Ru=2,Rs=1,Lu=2,Ur=3,mi=0,rn=1,Kn=2,$n=0,sr=1,Yl=2,Kl=3,jl=4,Du=5,Pi=100,Iu=101,Uu=102,Nu=103,Fu=104,Ou=200,Bu=201,zu=202,ku=203,$o=204,Qo=205,Vu=206,Hu=207,Gu=208,Wu=209,Xu=210,Zu=211,qu=212,Yu=213,Ku=214,ta=0,ea=1,na=2,ar=3,ia=4,ra=5,sa=6,oa=7,$c=0,ju=1,Ju=2,Un=0,Qc=1,th=2,eh=3,nh=4,ih=5,rh=6,sh=7,oh=300,Ii=301,lr=302,aa=303,la=304,Vs=306,ca=1e3,jn=1001,ha=1002,We=1003,$u=1004,hs=1005,qe=1006,vo=1007,Li=1008,ln=1009,ah=1010,lh=1011,zr=1012,Ka=1013,On=1014,Dn=1015,ei=1016,ja=1017,Ja=1018,kr=1020,ch=35902,hh=35899,uh=1021,fh=1022,Tn=1023,ni=1026,Di=1027,dh=1028,$a=1029,cr=1030,Qa=1031,tl=1033,Ls=33776,Ds=33777,Is=33778,Us=33779,ua=35840,fa=35841,da=35842,pa=35843,ma=36196,_a=37492,ga=37496,va=37488,xa=37489,ya=37490,Sa=37491,Ma=37808,Ea=37809,Ta=37810,ba=37811,wa=37812,Aa=37813,Ca=37814,Pa=37815,Ra=37816,La=37817,Da=37818,Ia=37819,Ua=37820,Na=37821,Fa=36492,Oa=36494,Ba=36495,za=36283,ka=36284,Va=36285,Ha=36286,Qu=3200,tf=0,ef=1,di="",dn="srgb",hr="srgb-linear",Os="linear",ye="srgb",Wi=7680,Jl=519,nf=512,rf=513,sf=514,el=515,of=516,af=517,nl=518,lf=519,$l=35044,Ql="300 es",In=2e3,Bs=2001;function ph(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function zs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function cf(){const s=zs("canvas");return s.style.display="block",s}const tc={};function ec(...s){const t="THREE."+s.shift();console.log(t,...s)}function Jt(...s){const t="THREE."+s.shift();console.warn(t,...s)}function de(...s){const t="THREE."+s.shift();console.error(t,...s)}function Vr(...s){const t=s.join(" ");t in tc||(tc[t]=!0,Jt(...s))}function hf(s,t,e){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:r()}}setTimeout(l,e)})}class pr{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(e)===-1&&r[t].push(e)}hasEventListener(t,e){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(e)!==-1}removeEventListener(t,e){const r=this._listeners;if(r===void 0)return;const o=r[t];if(o!==void 0){const l=o.indexOf(e);l!==-1&&o.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const r=e[t.type];if(r!==void 0){t.target=this;const o=r.slice(0);for(let l=0,h=o.length;l<h;l++)o[l].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],xo=Math.PI/180,Ga=180/Math.PI;function Gr(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xe[s&255]+Xe[s>>8&255]+Xe[s>>16&255]+Xe[s>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[r&255]+Xe[r>>8&255]+Xe[r>>16&255]+Xe[r>>24&255]).toLowerCase()}function ae(s,t,e){return Math.max(t,Math.min(e,s))}function uf(s,t){return(s%t+t)%t}function yo(s,t,e){return(1-e)*s+e*t}function wr(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function nn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class xe{constructor(t=0,e=0){xe.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,r=this.y,o=t.elements;return this.x=o[0]*e+o[3]*r+o[6],this.y=o[1]*e+o[4]*r+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ae(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y;return e*e+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const r=Math.cos(e),o=Math.sin(e),l=this.x-t.x,h=this.y-t.y;return this.x=l*r-h*o+t.x,this.y=l*o+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wr{constructor(t=0,e=0,r=0,o=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=r,this._w=o}static slerpFlat(t,e,r,o,l,h,u){let f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3],v=l[h+0],S=l[h+1],b=l[h+2],w=l[h+3];if(u<=0){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(u>=1){t[e+0]=v,t[e+1]=S,t[e+2]=b,t[e+3]=w;return}if(_!==w||f!==v||d!==S||g!==b){let x=f*v+d*S+g*b+_*w;x<0&&(v=-v,S=-S,b=-b,w=-w,x=-x);let m=1-u;if(x<.9995){const D=Math.acos(x),P=Math.sin(D);m=Math.sin(m*D)/P,u=Math.sin(u*D)/P,f=f*m+v*u,d=d*m+S*u,g=g*m+b*u,_=_*m+w*u}else{f=f*m+v*u,d=d*m+S*u,g=g*m+b*u,_=_*m+w*u;const D=1/Math.sqrt(f*f+d*d+g*g+_*_);f*=D,d*=D,g*=D,_*=D}}t[e]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_}static multiplyQuaternionsFlat(t,e,r,o,l,h){const u=r[o],f=r[o+1],d=r[o+2],g=r[o+3],_=l[h],v=l[h+1],S=l[h+2],b=l[h+3];return t[e]=u*b+g*_+f*S-d*v,t[e+1]=f*b+g*v+d*_-u*S,t[e+2]=d*b+g*S+u*v-f*_,t[e+3]=g*b-u*_-f*v-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,r,o){return this._x=t,this._y=e,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const r=t._x,o=t._y,l=t._z,h=t._order,u=Math.cos,f=Math.sin,d=u(r/2),g=u(o/2),_=u(l/2),v=f(r/2),S=f(o/2),b=f(l/2);switch(h){case"XYZ":this._x=v*g*_+d*S*b,this._y=d*S*_-v*g*b,this._z=d*g*b+v*S*_,this._w=d*g*_-v*S*b;break;case"YXZ":this._x=v*g*_+d*S*b,this._y=d*S*_-v*g*b,this._z=d*g*b-v*S*_,this._w=d*g*_+v*S*b;break;case"ZXY":this._x=v*g*_-d*S*b,this._y=d*S*_+v*g*b,this._z=d*g*b+v*S*_,this._w=d*g*_-v*S*b;break;case"ZYX":this._x=v*g*_-d*S*b,this._y=d*S*_+v*g*b,this._z=d*g*b-v*S*_,this._w=d*g*_+v*S*b;break;case"YZX":this._x=v*g*_+d*S*b,this._y=d*S*_+v*g*b,this._z=d*g*b-v*S*_,this._w=d*g*_-v*S*b;break;case"XZY":this._x=v*g*_-d*S*b,this._y=d*S*_-v*g*b,this._z=d*g*b+v*S*_,this._w=d*g*_+v*S*b;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const r=e/2,o=Math.sin(r);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,r=e[0],o=e[4],l=e[8],h=e[1],u=e[5],f=e[9],d=e[2],g=e[6],_=e[10],v=r+u+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(g-f)*S,this._y=(l-d)*S,this._z=(h-o)*S}else if(r>u&&r>_){const S=2*Math.sqrt(1+r-u-_);this._w=(g-f)/S,this._x=.25*S,this._y=(o+h)/S,this._z=(l+d)/S}else if(u>_){const S=2*Math.sqrt(1+u-r-_);this._w=(l-d)/S,this._x=(o+h)/S,this._y=.25*S,this._z=(f+g)/S}else{const S=2*Math.sqrt(1+_-r-u);this._w=(h-o)/S,this._x=(l+d)/S,this._y=(f+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let r=t.dot(e)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){const r=this.angleTo(t);if(r===0)return this;const o=Math.min(1,e/r);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const r=t._x,o=t._y,l=t._z,h=t._w,u=e._x,f=e._y,d=e._z,g=e._w;return this._x=r*g+h*u+o*d-l*f,this._y=o*g+h*f+l*u-r*d,this._z=l*g+h*d+r*f-o*u,this._w=h*g-r*u-o*f-l*d,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let r=t._x,o=t._y,l=t._z,h=t._w,u=this.dot(t);u<0&&(r=-r,o=-o,l=-l,h=-h,u=-u);let f=1-e;if(u<.9995){const d=Math.acos(u),g=Math.sin(d);f=Math.sin(f*d)/g,e=Math.sin(e*d)/g,this._x=this._x*f+r*e,this._y=this._y*f+o*e,this._z=this._z*f+l*e,this._w=this._w*f+h*e,this._onChangeCallback()}else this._x=this._x*f+r*e,this._y=this._y*f+o*e,this._z=this._z*f+l*e,this._w=this._w*f+h*e,this.normalize();return this}slerpQuaternions(t,e,r){return this.copy(t).slerp(e,r)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(t),o*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,e=0,r=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=r}set(t,e,r){return r===void 0&&(r=this.z),this.x=t,this.y=e,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,r=this.y,o=this.z,l=t.elements;return this.x=l[0]*e+l[3]*r+l[6]*o,this.y=l[1]*e+l[4]*r+l[7]*o,this.z=l[2]*e+l[5]*r+l[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,r=this.y,o=this.z,l=t.elements,h=1/(l[3]*e+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*e+l[4]*r+l[8]*o+l[12])*h,this.y=(l[1]*e+l[5]*r+l[9]*o+l[13])*h,this.z=(l[2]*e+l[6]*r+l[10]*o+l[14])*h,this}applyQuaternion(t){const e=this.x,r=this.y,o=this.z,l=t.x,h=t.y,u=t.z,f=t.w,d=2*(h*o-u*r),g=2*(u*e-l*o),_=2*(l*r-h*e);return this.x=e+f*d+h*_-u*g,this.y=r+f*g+u*d-l*_,this.z=o+f*_+l*g-h*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,r=this.y,o=this.z,l=t.elements;return this.x=l[0]*e+l[4]*r+l[8]*o,this.y=l[1]*e+l[5]*r+l[9]*o,this.z=l[2]*e+l[6]*r+l[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ae(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const r=t.x,o=t.y,l=t.z,h=e.x,u=e.y,f=e.z;return this.x=o*f-l*u,this.y=l*h-r*f,this.z=r*u-o*h,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const r=t.dot(this)/e;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return So.copy(this).projectOnVector(t),this.sub(So)}reflect(t){return this.sub(So.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const r=this.dot(t)/e;return Math.acos(ae(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,r=this.y-t.y,o=this.z-t.z;return e*e+r*r+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,r){const o=Math.sin(e)*t;return this.x=o*Math.sin(r),this.y=Math.cos(e)*t,this.z=o*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,r){return this.x=t*Math.sin(e),this.y=r,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=r,this.z=o,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,r=Math.sqrt(1-e*e);return this.x=r*Math.cos(t),this.y=e,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const So=new Y,nc=new Wr;class ee{constructor(t,e,r,o,l,h,u,f,d){ee.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,r,o,l,h,u,f,d)}set(t,e,r,o,l,h,u,f,d){const g=this.elements;return g[0]=t,g[1]=o,g[2]=u,g[3]=e,g[4]=l,g[5]=f,g[6]=r,g[7]=h,g[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],this}extractBasis(t,e,r){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,o=e.elements,l=this.elements,h=r[0],u=r[3],f=r[6],d=r[1],g=r[4],_=r[7],v=r[2],S=r[5],b=r[8],w=o[0],x=o[3],m=o[6],D=o[1],P=o[4],R=o[7],U=o[2],F=o[5],O=o[8];return l[0]=h*w+u*D+f*U,l[3]=h*x+u*P+f*F,l[6]=h*m+u*R+f*O,l[1]=d*w+g*D+_*U,l[4]=d*x+g*P+_*F,l[7]=d*m+g*R+_*O,l[2]=v*w+S*D+b*U,l[5]=v*x+S*P+b*F,l[8]=v*m+S*R+b*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[1],o=t[2],l=t[3],h=t[4],u=t[5],f=t[6],d=t[7],g=t[8];return e*h*g-e*u*d-r*l*g+r*u*f+o*l*d-o*h*f}invert(){const t=this.elements,e=t[0],r=t[1],o=t[2],l=t[3],h=t[4],u=t[5],f=t[6],d=t[7],g=t[8],_=g*h-u*d,v=u*f-g*l,S=d*l-h*f,b=e*_+r*v+o*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=_*w,t[1]=(o*d-g*r)*w,t[2]=(u*r-o*h)*w,t[3]=v*w,t[4]=(g*e-o*f)*w,t[5]=(o*l-u*e)*w,t[6]=S*w,t[7]=(r*f-d*e)*w,t[8]=(h*e-r*l)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,r,o,l,h,u){const f=Math.cos(l),d=Math.sin(l);return this.set(r*f,r*d,-r*(f*h+d*u)+h+t,-o*d,o*f,-o*(-d*h+f*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(Mo.makeScale(t,e)),this}rotate(t){return this.premultiply(Mo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Mo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,r,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,r=t.elements;for(let o=0;o<9;o++)if(e[o]!==r[o])return!1;return!0}fromArray(t,e=0){for(let r=0;r<9;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Mo=new ee,ic=new ee().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rc=new ee().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ff(){const s={enabled:!0,workingColorSpace:hr,spaces:{},convert:function(o,l,h){return this.enabled===!1||l===h||!l||!h||(this.spaces[l].transfer===ye&&(o.r=Qn(o.r),o.g=Qn(o.g),o.b=Qn(o.b)),this.spaces[l].primaries!==this.spaces[h].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ye&&(o.r=or(o.r),o.g=or(o.g),o.b=or(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===di?Os:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,h){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return Vr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return Vr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[hr]:{primaries:t,whitePoint:r,transfer:Os,toXYZ:ic,fromXYZ:rc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:t,whitePoint:r,transfer:ye,toXYZ:ic,fromXYZ:rc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),s}const fe=ff();function Qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function or(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xi;class df{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Xi===void 0&&(Xi=zs("canvas")),Xi.width=t.width,Xi.height=t.height;const o=Xi.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),r=Xi}return r.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=zs("canvas");e.width=t.width,e.height=t.height;const r=e.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const o=r.getImageData(0,0,t.width,t.height),l=o.data;for(let h=0;h<l.length;h++)l[h]=Qn(l[h]/255)*255;return r.putImageData(o,0,0),e}else if(t.data){const e=t.data.slice(0);for(let r=0;r<e.length;r++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[r]=Math.floor(Qn(e[r]/255)*255):e[r]=Qn(e[r]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let pf=0;class il{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Gr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let h=0,u=o.length;h<u;h++)o[h].isDataTexture?l.push(Eo(o[h].image)):l.push(Eo(o[h]))}else l=Eo(o);r.url=l}return e||(t.images[this.uuid]=r),r}}function Eo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?df.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let mf=0;const To=new Y;class $e extends pr{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,r=jn,o=jn,l=qe,h=Li,u=Tn,f=ln,d=$e.DEFAULT_ANISOTROPY,g=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Gr(),this.name="",this.source=new il(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=h,this.anisotropy=d,this.format=u,this.internalFormat=null,this.type=f,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ee,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(To).x}get height(){return this.source.getSize(To).y}get depth(){return this.source.getSize(To).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const r=t[e];if(r===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),e||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==oh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ca:t.x=t.x-Math.floor(t.x);break;case jn:t.x=t.x<0?0:1;break;case ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ca:t.y=t.y-Math.floor(t.y);break;case jn:t.y=t.y<0?0:1;break;case ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=oh;$e.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,r=0,o=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=r,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,r,o){return this.x=t,this.y=e,this.z=r,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,r=this.y,o=this.z,l=this.w,h=t.elements;return this.x=h[0]*e+h[4]*r+h[8]*o+h[12]*l,this.y=h[1]*e+h[5]*r+h[9]*o+h[13]*l,this.z=h[2]*e+h[6]*r+h[10]*o+h[14]*l,this.w=h[3]*e+h[7]*r+h[11]*o+h[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,r,o,l;const f=t.elements,d=f[0],g=f[4],_=f[8],v=f[1],S=f[5],b=f[9],w=f[2],x=f[6],m=f[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(b-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(b+x)<.1&&Math.abs(d+S+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const P=(d+1)/2,R=(S+1)/2,U=(m+1)/2,F=(g+v)/4,O=(_+w)/4,Z=(b+x)/4;return P>R&&P>U?P<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(P),o=F/r,l=O/r):R>U?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=F/o,l=Z/o):U<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(U),r=O/l,o=Z/l),this.set(r,o,l,e),this}let D=Math.sqrt((x-b)*(x-b)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(D)<.001&&(D=1),this.x=(x-b)/D,this.y=(_-w)/D,this.z=(v-g)/D,this.w=Math.acos((d+S+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){const r=this.length();return this.divideScalar(r||1).multiplyScalar(ae(r,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,r){return this.x=t.x+(e.x-t.x)*r,this.y=t.y+(e.y-t.y)*r,this.z=t.z+(e.z-t.z)*r,this.w=t.w+(e.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _f extends pr{constructor(t=1,e=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=r.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const o={width:t,height:e,depth:r.depth},l=new $e(o);this.textures=[];const h=r.count;for(let u=0;u<h;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const e={minFilter:qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,r=1){if(this.width!==t||this.height!==e||this.depth!==r){this.width=t,this.height=e,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=t,this.textures[o].image.height=e,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,r=t.textures.length;e<r;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const o=Object.assign({},t.textures[e].image);this.textures[e].source=new il(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends _f{constructor(t=1,e=1,r={}){super(t,e,r),this.isWebGLRenderTarget=!0}}class mh extends $e{constructor(t=null,e=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:r,depth:o},this.magFilter=We,this.minFilter=We,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gf extends $e{constructor(t=null,e=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:r,depth:o},this.magFilter=We,this.minFilter=We,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xr{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,r=t.count;e<r;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,r=t.length;e<r;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const r=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const l=r.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let h=0,u=l.count;h<u;h++)t.isMesh===!0?t.getVertexPosition(h,yn):yn.fromBufferAttribute(l,h),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),us.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),us.copy(r.boundingBox)),us.applyMatrix4(t.matrixWorld),this.union(us)}const o=t.children;for(let l=0,h=o.length;l<h;l++)this.expandByObject(o[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,r;return t.normal.x>0?(e=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),e<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ar),fs.subVectors(this.max,Ar),Zi.subVectors(t.a,Ar),qi.subVectors(t.b,Ar),Yi.subVectors(t.c,Ar),ai.subVectors(qi,Zi),li.subVectors(Yi,qi),Mi.subVectors(Zi,Yi);let e=[0,-ai.z,ai.y,0,-li.z,li.y,0,-Mi.z,Mi.y,ai.z,0,-ai.x,li.z,0,-li.x,Mi.z,0,-Mi.x,-ai.y,ai.x,0,-li.y,li.x,0,-Mi.y,Mi.x,0];return!bo(e,Zi,qi,Yi,fs)||(e=[1,0,0,0,1,0,0,0,1],!bo(e,Zi,qi,Yi,fs))?!1:(ds.crossVectors(ai,li),e=[ds.x,ds.y,ds.z],bo(e,Zi,qi,Yi,fs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],yn=new Y,us=new Xr,Zi=new Y,qi=new Y,Yi=new Y,ai=new Y,li=new Y,Mi=new Y,Ar=new Y,fs=new Y,ds=new Y,Ei=new Y;function bo(s,t,e,r,o){for(let l=0,h=s.length-3;l<=h;l+=3){Ei.fromArray(s,l);const u=o.x*Math.abs(Ei.x)+o.y*Math.abs(Ei.y)+o.z*Math.abs(Ei.z),f=t.dot(Ei),d=e.dot(Ei),g=r.dot(Ei);if(Math.max(-Math.max(f,d,g),Math.min(f,d,g))>u)return!1}return!0}const vf=new Xr,Cr=new Y,wo=new Y;class rl{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const r=this.center;e!==void 0?r.copy(e):vf.setFromPoints(t).getCenter(r);let o=0;for(let l=0,h=t.length;l<h;l++)o=Math.max(o,r.distanceToSquared(t[l]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const r=this.center.distanceToSquared(t);return e.copy(t),r>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cr.subVectors(t,this.center);const e=Cr.lengthSq();if(e>this.radius*this.radius){const r=Math.sqrt(e),o=(r-this.radius)*.5;this.center.addScaledVector(Cr,o/r),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cr.copy(t.center).add(wo)),this.expandByPoint(Cr.copy(t.center).sub(wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Xn=new Y,Ao=new Y,ps=new Y,ci=new Y,Co=new Y,ms=new Y,Po=new Y;class xf{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const r=e.dot(this.direction);return r<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,r,o){Ao.copy(t).add(e).multiplyScalar(.5),ps.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(Ao);const l=t.distanceTo(e)*.5,h=-this.direction.dot(ps),u=ci.dot(this.direction),f=-ci.dot(ps),d=ci.lengthSq(),g=Math.abs(1-h*h);let _,v,S,b;if(g>0)if(_=h*f-u,v=h*u-f,b=l*g,_>=0)if(v>=-b)if(v<=b){const w=1/g;_*=w,v*=w,S=_*(_+h*v+2*u)+v*(h*_+v+2*f)+d}else v=l,_=Math.max(0,-(h*v+u)),S=-_*_+v*(v+2*f)+d;else v=-l,_=Math.max(0,-(h*v+u)),S=-_*_+v*(v+2*f)+d;else v<=-b?(_=Math.max(0,-(-h*l+u)),v=_>0?-l:Math.min(Math.max(-l,-f),l),S=-_*_+v*(v+2*f)+d):v<=b?(_=0,v=Math.min(Math.max(-l,-f),l),S=v*(v+2*f)+d):(_=Math.max(0,-(h*l+u)),v=_>0?l:Math.min(Math.max(-l,-f),l),S=-_*_+v*(v+2*f)+d);else v=h>0?-l:l,_=Math.max(0,-(h*v+u)),S=-_*_+v*(v+2*f)+d;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Ao).addScaledVector(ps,v),S}intersectSphere(t,e){Xn.subVectors(t.center,this.origin);const r=Xn.dot(this.direction),o=Xn.dot(Xn)-r*r,l=t.radius*t.radius;if(o>l)return null;const h=Math.sqrt(l-o),u=r-h,f=r+h;return f<0?null:u<0?this.at(f,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/e;return r>=0?r:null}intersectPlane(t,e){const r=this.distanceToPlane(t);return r===null?null:this.at(r,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let r,o,l,h,u,f;const d=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return d>=0?(r=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(r=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),g>=0?(l=(t.min.y-v.y)*g,h=(t.max.y-v.y)*g):(l=(t.max.y-v.y)*g,h=(t.min.y-v.y)*g),r>h||l>o||((l>r||isNaN(r))&&(r=l),(h<o||isNaN(o))&&(o=h),_>=0?(u=(t.min.z-v.z)*_,f=(t.max.z-v.z)*_):(u=(t.max.z-v.z)*_,f=(t.min.z-v.z)*_),r>f||u>o)||((u>r||r!==r)&&(r=u),(f<o||o!==o)&&(o=f),o<0)?null:this.at(r>=0?r:o,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,r,o,l){Co.subVectors(e,t),ms.subVectors(r,t),Po.crossVectors(Co,ms);let h=this.direction.dot(Po),u;if(h>0){if(o)return null;u=1}else if(h<0)u=-1,h=-h;else return null;ci.subVectors(this.origin,t);const f=u*this.direction.dot(ms.crossVectors(ci,ms));if(f<0)return null;const d=u*this.direction.dot(Co.cross(ci));if(d<0||f+d>h)return null;const g=-u*ci.dot(Po);return g<0?null:this.at(g/h,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(t,e,r,o,l,h,u,f,d,g,_,v,S,b,w,x){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,r,o,l,h,u,f,d,g,_,v,S,b,w,x)}set(t,e,r,o,l,h,u,f,d,g,_,v,S,b,w,x){const m=this.elements;return m[0]=t,m[4]=e,m[8]=r,m[12]=o,m[1]=l,m[5]=h,m[9]=u,m[13]=f,m[2]=d,m[6]=g,m[10]=_,m[14]=v,m[3]=S,m[7]=b,m[11]=w,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(t){const e=this.elements,r=t.elements;return e[0]=r[0],e[1]=r[1],e[2]=r[2],e[3]=r[3],e[4]=r[4],e[5]=r[5],e[6]=r[6],e[7]=r[7],e[8]=r[8],e[9]=r[9],e[10]=r[10],e[11]=r[11],e[12]=r[12],e[13]=r[13],e[14]=r[14],e[15]=r[15],this}copyPosition(t){const e=this.elements,r=t.elements;return e[12]=r[12],e[13]=r[13],e[14]=r[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,r){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,e,r){return this.set(t.x,e.x,r.x,0,t.y,e.y,r.y,0,t.z,e.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,r=t.elements,o=1/Ki.setFromMatrixColumn(t,0).length(),l=1/Ki.setFromMatrixColumn(t,1).length(),h=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=r[0]*o,e[1]=r[1]*o,e[2]=r[2]*o,e[3]=0,e[4]=r[4]*l,e[5]=r[5]*l,e[6]=r[6]*l,e[7]=0,e[8]=r[8]*h,e[9]=r[9]*h,e[10]=r[10]*h,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,r=t.x,o=t.y,l=t.z,h=Math.cos(r),u=Math.sin(r),f=Math.cos(o),d=Math.sin(o),g=Math.cos(l),_=Math.sin(l);if(t.order==="XYZ"){const v=h*g,S=h*_,b=u*g,w=u*_;e[0]=f*g,e[4]=-f*_,e[8]=d,e[1]=S+b*d,e[5]=v-w*d,e[9]=-u*f,e[2]=w-v*d,e[6]=b+S*d,e[10]=h*f}else if(t.order==="YXZ"){const v=f*g,S=f*_,b=d*g,w=d*_;e[0]=v+w*u,e[4]=b*u-S,e[8]=h*d,e[1]=h*_,e[5]=h*g,e[9]=-u,e[2]=S*u-b,e[6]=w+v*u,e[10]=h*f}else if(t.order==="ZXY"){const v=f*g,S=f*_,b=d*g,w=d*_;e[0]=v-w*u,e[4]=-h*_,e[8]=b+S*u,e[1]=S+b*u,e[5]=h*g,e[9]=w-v*u,e[2]=-h*d,e[6]=u,e[10]=h*f}else if(t.order==="ZYX"){const v=h*g,S=h*_,b=u*g,w=u*_;e[0]=f*g,e[4]=b*d-S,e[8]=v*d+w,e[1]=f*_,e[5]=w*d+v,e[9]=S*d-b,e[2]=-d,e[6]=u*f,e[10]=h*f}else if(t.order==="YZX"){const v=h*f,S=h*d,b=u*f,w=u*d;e[0]=f*g,e[4]=w-v*_,e[8]=b*_+S,e[1]=_,e[5]=h*g,e[9]=-u*g,e[2]=-d*g,e[6]=S*_+b,e[10]=v-w*_}else if(t.order==="XZY"){const v=h*f,S=h*d,b=u*f,w=u*d;e[0]=f*g,e[4]=-_,e[8]=d*g,e[1]=v*_+w,e[5]=h*g,e[9]=S*_-b,e[2]=b*_-S,e[6]=u*g,e[10]=w*_+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yf,t,Sf)}lookAt(t,e,r){const o=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),hi.crossVectors(r,on),hi.lengthSq()===0&&(Math.abs(r.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),hi.crossVectors(r,on)),hi.normalize(),_s.crossVectors(on,hi),o[0]=hi.x,o[4]=_s.x,o[8]=on.x,o[1]=hi.y,o[5]=_s.y,o[9]=on.y,o[2]=hi.z,o[6]=_s.z,o[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const r=t.elements,o=e.elements,l=this.elements,h=r[0],u=r[4],f=r[8],d=r[12],g=r[1],_=r[5],v=r[9],S=r[13],b=r[2],w=r[6],x=r[10],m=r[14],D=r[3],P=r[7],R=r[11],U=r[15],F=o[0],O=o[4],Z=o[8],T=o[12],A=o[1],B=o[5],J=o[9],Q=o[13],rt=o[2],st=o[6],tt=o[10],q=o[14],K=o[3],Et=o[7],it=o[11],ft=o[15];return l[0]=h*F+u*A+f*rt+d*K,l[4]=h*O+u*B+f*st+d*Et,l[8]=h*Z+u*J+f*tt+d*it,l[12]=h*T+u*Q+f*q+d*ft,l[1]=g*F+_*A+v*rt+S*K,l[5]=g*O+_*B+v*st+S*Et,l[9]=g*Z+_*J+v*tt+S*it,l[13]=g*T+_*Q+v*q+S*ft,l[2]=b*F+w*A+x*rt+m*K,l[6]=b*O+w*B+x*st+m*Et,l[10]=b*Z+w*J+x*tt+m*it,l[14]=b*T+w*Q+x*q+m*ft,l[3]=D*F+P*A+R*rt+U*K,l[7]=D*O+P*B+R*st+U*Et,l[11]=D*Z+P*J+R*tt+U*it,l[15]=D*T+P*Q+R*q+U*ft,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],r=t[4],o=t[8],l=t[12],h=t[1],u=t[5],f=t[9],d=t[13],g=t[2],_=t[6],v=t[10],S=t[14],b=t[3],w=t[7],x=t[11],m=t[15],D=f*S-d*v,P=u*S-d*_,R=u*v-f*_,U=h*S-d*g,F=h*v-f*g,O=h*_-u*g;return e*(w*D-x*P+m*R)-r*(b*D-x*U+m*F)+o*(b*P-w*U+m*O)-l*(b*R-w*F+x*O)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,r){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=e,o[14]=r),this}invert(){const t=this.elements,e=t[0],r=t[1],o=t[2],l=t[3],h=t[4],u=t[5],f=t[6],d=t[7],g=t[8],_=t[9],v=t[10],S=t[11],b=t[12],w=t[13],x=t[14],m=t[15],D=_*x*d-w*v*d+w*f*S-u*x*S-_*f*m+u*v*m,P=b*v*d-g*x*d-b*f*S+h*x*S+g*f*m-h*v*m,R=g*w*d-b*_*d+b*u*S-h*w*S-g*u*m+h*_*m,U=b*_*f-g*w*f-b*u*v+h*w*v+g*u*x-h*_*x,F=e*D+r*P+o*R+l*U;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/F;return t[0]=D*O,t[1]=(w*v*l-_*x*l-w*o*S+r*x*S+_*o*m-r*v*m)*O,t[2]=(u*x*l-w*f*l+w*o*d-r*x*d-u*o*m+r*f*m)*O,t[3]=(_*f*l-u*v*l-_*o*d+r*v*d+u*o*S-r*f*S)*O,t[4]=P*O,t[5]=(g*x*l-b*v*l+b*o*S-e*x*S-g*o*m+e*v*m)*O,t[6]=(b*f*l-h*x*l-b*o*d+e*x*d+h*o*m-e*f*m)*O,t[7]=(h*v*l-g*f*l+g*o*d-e*v*d-h*o*S+e*f*S)*O,t[8]=R*O,t[9]=(b*_*l-g*w*l-b*r*S+e*w*S+g*r*m-e*_*m)*O,t[10]=(h*w*l-b*u*l+b*r*d-e*w*d-h*r*m+e*u*m)*O,t[11]=(g*u*l-h*_*l-g*r*d+e*_*d+h*r*S-e*u*S)*O,t[12]=U*O,t[13]=(g*w*o-b*_*o+b*r*v-e*w*v-g*r*x+e*_*x)*O,t[14]=(b*u*o-h*w*o-b*r*f+e*w*f+h*r*x-e*u*x)*O,t[15]=(h*_*o-g*u*o+g*r*f-e*_*f-h*r*v+e*u*v)*O,this}scale(t){const e=this.elements,r=t.x,o=t.y,l=t.z;return e[0]*=r,e[4]*=o,e[8]*=l,e[1]*=r,e[5]*=o,e[9]*=l,e[2]*=r,e[6]*=o,e[10]*=l,e[3]*=r,e[7]*=o,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,r,o))}makeTranslation(t,e,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,r,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),r=Math.sin(t);return this.set(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const r=Math.cos(e),o=Math.sin(e),l=1-r,h=t.x,u=t.y,f=t.z,d=l*h,g=l*u;return this.set(d*h+r,d*u-o*f,d*f+o*u,0,d*u+o*f,g*u+r,g*f-o*h,0,d*f-o*u,g*f+o*h,l*f*f+r,0,0,0,0,1),this}makeScale(t,e,r){return this.set(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,e,r,o,l,h){return this.set(1,r,l,0,t,1,h,0,e,o,1,0,0,0,0,1),this}compose(t,e,r){const o=this.elements,l=e._x,h=e._y,u=e._z,f=e._w,d=l+l,g=h+h,_=u+u,v=l*d,S=l*g,b=l*_,w=h*g,x=h*_,m=u*_,D=f*d,P=f*g,R=f*_,U=r.x,F=r.y,O=r.z;return o[0]=(1-(w+m))*U,o[1]=(S+R)*U,o[2]=(b-P)*U,o[3]=0,o[4]=(S-R)*F,o[5]=(1-(v+m))*F,o[6]=(x+D)*F,o[7]=0,o[8]=(b+P)*O,o[9]=(x-D)*O,o[10]=(1-(v+w))*O,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,e,r){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return r.set(1,1,1),e.identity(),this;let l=Ki.set(o[0],o[1],o[2]).length();const h=Ki.set(o[4],o[5],o[6]).length(),u=Ki.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),Sn.copy(this);const d=1/l,g=1/h,_=1/u;return Sn.elements[0]*=d,Sn.elements[1]*=d,Sn.elements[2]*=d,Sn.elements[4]*=g,Sn.elements[5]*=g,Sn.elements[6]*=g,Sn.elements[8]*=_,Sn.elements[9]*=_,Sn.elements[10]*=_,e.setFromRotationMatrix(Sn),r.x=l,r.y=h,r.z=u,this}makePerspective(t,e,r,o,l,h,u=In,f=!1){const d=this.elements,g=2*l/(e-t),_=2*l/(r-o),v=(e+t)/(e-t),S=(r+o)/(r-o);let b,w;if(f)b=l/(h-l),w=h*l/(h-l);else if(u===In)b=-(h+l)/(h-l),w=-2*h*l/(h-l);else if(u===Bs)b=-h/(h-l),w=-h*l/(h-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=g,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=_,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,e,r,o,l,h,u=In,f=!1){const d=this.elements,g=2/(e-t),_=2/(r-o),v=-(e+t)/(e-t),S=-(r+o)/(r-o);let b,w;if(f)b=1/(h-l),w=h/(h-l);else if(u===In)b=-2/(h-l),w=-(h+l)/(h-l);else if(u===Bs)b=-1/(h-l),w=-l/(h-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=g,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=_,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=b,d[14]=w,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const e=this.elements,r=t.elements;for(let o=0;o<16;o++)if(e[o]!==r[o])return!1;return!0}fromArray(t,e=0){for(let r=0;r<16;r++)this.elements[r]=t[r+e];return this}toArray(t=[],e=0){const r=this.elements;return t[e]=r[0],t[e+1]=r[1],t[e+2]=r[2],t[e+3]=r[3],t[e+4]=r[4],t[e+5]=r[5],t[e+6]=r[6],t[e+7]=r[7],t[e+8]=r[8],t[e+9]=r[9],t[e+10]=r[10],t[e+11]=r[11],t[e+12]=r[12],t[e+13]=r[13],t[e+14]=r[14],t[e+15]=r[15],t}}const Ki=new Y,Sn=new Le,yf=new Y(0,0,0),Sf=new Y(1,1,1),hi=new Y,_s=new Y,on=new Y,sc=new Le,oc=new Wr;class ii{constructor(t=0,e=0,r=0,o=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=r,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,r,o=this._order){return this._x=t,this._y=e,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,r=!0){const o=t.elements,l=o[0],h=o[4],u=o[8],f=o[1],d=o[5],g=o[9],_=o[2],v=o[6],S=o[10];switch(e){case"XYZ":this._y=Math.asin(ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,S),this._z=Math.atan2(f,d)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-h,d)):(this._y=0,this._z=Math.atan2(f,l));break;case"ZYX":this._y=Math.asin(-ae(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(f,l)):(this._x=0,this._z=Math.atan2(-h,d));break;case"YZX":this._z=Math.asin(ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,d),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(u,S));break;case"XZY":this._z=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,r){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,r)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return oc.setFromEuler(this),this.setFromQuaternion(oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class _h{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mf=0;const ac=new Y,ji=new Wr,Zn=new Le,gs=new Y,Pr=new Y,Ef=new Y,Tf=new Wr,lc=new Y(1,0,0),cc=new Y(0,1,0),hc=new Y(0,0,1),uc={type:"added"},bf={type:"removed"},Ji={type:"childadded",child:null},Ro={type:"childremoved",child:null};class Ye extends pr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Gr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new Y,e=new ii,r=new Wr,o=new Y(1,1,1);function l(){r.setFromEuler(e,!1)}function h(){e.setFromQuaternion(r,void 0,!1)}e._onChange(l),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Le},normalMatrix:{value:new ee}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _h,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(lc,t)}rotateY(t){return this.rotateOnAxis(cc,t)}rotateZ(t){return this.rotateOnAxis(hc,t)}translateOnAxis(t,e){return ac.copy(t).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(lc,t)}translateY(t){return this.translateOnAxis(cc,t)}translateZ(t){return this.translateOnAxis(hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,r){t.isVector3?gs.copy(t):gs.set(t,e,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Pr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Pr,gs,this.up):Zn.lookAt(gs,Pr,this.up),this.quaternion.setFromRotationMatrix(Zn),o&&(Zn.extractRotation(o.matrixWorld),ji.setFromRotationMatrix(Zn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(de("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(uc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null):de("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bf),Ro.child=t,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(uc),Ji.child=t,this.dispatchEvent(Ji),Ji.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let r=0,o=this.children.length;r<o;r++){const h=this.children[r].getObjectByProperty(t,e);if(h!==void 0)return h}}getObjectsByProperty(t,e,r=[]){this[t]===e&&r.push(this);const o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].getObjectsByProperty(t,e,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,t,Ef),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Pr,Tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let r=0,o=e.length;r<o;r++)e[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let r=0,o=e.length;r<o;r++)e[r].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let r=0,o=e.length;r<o;r++)e[r].updateMatrixWorld(t)}updateWorldMatrix(t,e){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const o=this.children;for(let l=0,h=o.length;l<h;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",r={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(u,f){return u[f.uuid]===void 0&&(u[f.uuid]=f.toJSON(t)),f.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const f=u.shapes;if(Array.isArray(f))for(let d=0,g=f.length;d<g;d++){const _=f[d];l(t.shapes,_)}else l(t.shapes,f)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let f=0,d=this.material.length;f<d;f++)u.push(l(t.materials,this.material[f]));o.material=u}else o.material=l(t.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const f=this.animations[u];o.animations.push(l(t.animations,f))}}if(e){const u=h(t.geometries),f=h(t.materials),d=h(t.textures),g=h(t.images),_=h(t.shapes),v=h(t.skeletons),S=h(t.animations),b=h(t.nodes);u.length>0&&(r.geometries=u),f.length>0&&(r.materials=f),d.length>0&&(r.textures=d),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),v.length>0&&(r.skeletons=v),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=o,r;function h(u){const f=[];for(const d in u){const g=u[d];delete g.metadata,f.push(g)}return f}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let r=0;r<t.children.length;r++){const o=t.children[r];this.add(o.clone())}return this}}Ye.DEFAULT_UP=new Y(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new Y,qn=new Y,Lo=new Y,Yn=new Y,$i=new Y,Qi=new Y,fc=new Y,Do=new Y,Io=new Y,Uo=new Y,No=new Re,Fo=new Re,Oo=new Re;class En{constructor(t=new Y,e=new Y,r=new Y){this.a=t,this.b=e,this.c=r}static getNormal(t,e,r,o){o.subVectors(r,e),Mn.subVectors(t,e),o.cross(Mn);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(t,e,r,o,l){Mn.subVectors(o,e),qn.subVectors(r,e),Lo.subVectors(t,e);const h=Mn.dot(Mn),u=Mn.dot(qn),f=Mn.dot(Lo),d=qn.dot(qn),g=qn.dot(Lo),_=h*d-u*u;if(_===0)return l.set(0,0,0),null;const v=1/_,S=(d*f-u*g)*v,b=(h*g-u*f)*v;return l.set(1-S-b,b,S)}static containsPoint(t,e,r,o){return this.getBarycoord(t,e,r,o,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,r,o,l,h,u,f){return this.getBarycoord(t,e,r,o,Yn)===null?(f.x=0,f.y=0,"z"in f&&(f.z=0),"w"in f&&(f.w=0),null):(f.setScalar(0),f.addScaledVector(l,Yn.x),f.addScaledVector(h,Yn.y),f.addScaledVector(u,Yn.z),f)}static getInterpolatedAttribute(t,e,r,o,l,h){return No.setScalar(0),Fo.setScalar(0),Oo.setScalar(0),No.fromBufferAttribute(t,e),Fo.fromBufferAttribute(t,r),Oo.fromBufferAttribute(t,o),h.setScalar(0),h.addScaledVector(No,l.x),h.addScaledVector(Fo,l.y),h.addScaledVector(Oo,l.z),h}static isFrontFacing(t,e,r,o){return Mn.subVectors(r,e),qn.subVectors(t,e),Mn.cross(qn).dot(o)<0}set(t,e,r){return this.a.copy(t),this.b.copy(e),this.c.copy(r),this}setFromPointsAndIndices(t,e,r,o){return this.a.copy(t[e]),this.b.copy(t[r]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,e,r,o){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Mn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,r,o,l){return En.getInterpolation(t,this.a,this.b,this.c,e,r,o,l)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const r=this.a,o=this.b,l=this.c;let h,u;$i.subVectors(o,r),Qi.subVectors(l,r),Do.subVectors(t,r);const f=$i.dot(Do),d=Qi.dot(Do);if(f<=0&&d<=0)return e.copy(r);Io.subVectors(t,o);const g=$i.dot(Io),_=Qi.dot(Io);if(g>=0&&_<=g)return e.copy(o);const v=f*_-g*d;if(v<=0&&f>=0&&g<=0)return h=f/(f-g),e.copy(r).addScaledVector($i,h);Uo.subVectors(t,l);const S=$i.dot(Uo),b=Qi.dot(Uo);if(b>=0&&S<=b)return e.copy(l);const w=S*d-f*b;if(w<=0&&d>=0&&b<=0)return u=d/(d-b),e.copy(r).addScaledVector(Qi,u);const x=g*b-S*_;if(x<=0&&_-g>=0&&S-b>=0)return fc.subVectors(l,o),u=(_-g)/(_-g+(S-b)),e.copy(o).addScaledVector(fc,u);const m=1/(x+w+v);return h=w*m,u=v*m,e.copy(r).addScaledVector($i,h).addScaledVector(Qi,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const gh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},vs={h:0,s:0,l:0};function Bo(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Se{constructor(t,e,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,r)}set(t,e,r){if(e===void 0&&r===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,e,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=dn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,r,o=fe.workingColorSpace){return this.r=t,this.g=e,this.b=r,fe.colorSpaceToWorking(this,o),this}setHSL(t,e,r,o=fe.workingColorSpace){if(t=uf(t,1),e=ae(e,0,1),r=ae(r,0,1),e===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+e):r+e-r*e,h=2*r-l;this.r=Bo(h,l,t+1/3),this.g=Bo(h,l,t),this.b=Bo(h,l,t-1/3)}return fe.colorSpaceToWorking(this,o),this}setStyle(t,e=dn){function r(l){l!==void 0&&parseFloat(l)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const h=o[1],u=o[2];switch(h){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=o[1],h=l.length;if(h===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(h===6)return this.setHex(parseInt(l,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=dn){const r=gh[t.toLowerCase()];return r!==void 0?this.setHex(r,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=or(t.r),this.g=or(t.g),this.b=or(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=dn){return fe.workingToColorSpace(Ze.copy(this),t),Math.round(ae(Ze.r*255,0,255))*65536+Math.round(ae(Ze.g*255,0,255))*256+Math.round(ae(Ze.b*255,0,255))}getHexString(t=dn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(Ze.copy(this),e);const r=Ze.r,o=Ze.g,l=Ze.b,h=Math.max(r,o,l),u=Math.min(r,o,l);let f,d;const g=(u+h)/2;if(u===h)f=0,d=0;else{const _=h-u;switch(d=g<=.5?_/(h+u):_/(2-h-u),h){case r:f=(o-l)/_+(o<l?6:0);break;case o:f=(l-r)/_+2;break;case l:f=(r-o)/_+4;break}f/=6}return t.h=f,t.s=d,t.l=g,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=dn){fe.workingToColorSpace(Ze.copy(this),t);const e=Ze.r,r=Ze.g,o=Ze.b;return t!==dn?`color(${t} ${e.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(t,e,r){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,r){return this.r=t.r+(e.r-t.r)*r,this.g=t.g+(e.g-t.g)*r,this.b=t.b+(e.b-t.b)*r,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(vs);const r=yo(ui.h,vs.h,e),o=yo(ui.s,vs.s,e),l=yo(ui.l,vs.l,e);return this.setHSL(r,o,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,r=this.g,o=this.b,l=t.elements;return this.r=l[0]*e+l[3]*r+l[6]*o,this.g=l[1]*e+l[4]*r+l[7]*o,this.b=l[2]*e+l[5]*r+l[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ze=new Se;Se.NAMES=gh;let wf=0;class Hs extends pr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Gr(),this.name="",this.type="Material",this.blending=sr,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$o,this.blendDst=Qo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const r=t[e];if(r===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}const o=this[e];if(o===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[e]=r}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==sr&&(r.blending=this.blending),this.side!==mi&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==$o&&(r.blendSrc=this.blendSrc),this.blendDst!==Qo&&(r.blendDst=this.blendDst),this.blendEquation!==Pi&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jl&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const h=[];for(const u in l){const f=l[u];delete f.metadata,h.push(f)}return h}if(e){const l=o(t.textures),h=o(t.images);l.length>0&&(r.textures=l),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let r=null;if(e!==null){const o=e.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=e[l].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ks extends Hs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=$c,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Fe=new Y,xs=new xe;let Af=0;class Fn{constructor(t,e,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Af++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=r,this.usage=$l,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,r){t*=this.itemSize,r*=e.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[t+o]=e.array[r+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,r=this.count;e<r;e++)xs.fromBufferAttribute(this,e),xs.applyMatrix3(t),this.setXY(e,xs.x,xs.y);else if(this.itemSize===3)for(let e=0,r=this.count;e<r;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,r=this.count;e<r;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,r=this.count;e<r;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,r=this.count;e<r;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let r=this.array[t*this.itemSize+e];return this.normalized&&(r=wr(r,this.array)),r}setComponent(t,e,r){return this.normalized&&(r=nn(r,this.array)),this.array[t*this.itemSize+e]=r,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wr(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wr(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wr(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=r,this}setXYZ(t,e,r,o){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),r=nn(r,this.array),o=nn(o,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=o,this}setXYZW(t,e,r,o,l){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),r=nn(r,this.array),o=nn(o,this.array),l=nn(l,this.array)),this.array[t+0]=e,this.array[t+1]=r,this.array[t+2]=o,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$l&&(t.usage=this.usage),t}}class vh extends Fn{constructor(t,e,r){super(new Uint16Array(t),e,r)}}class xh extends Fn{constructor(t,e,r){super(new Uint32Array(t),e,r)}}class ti extends Fn{constructor(t,e,r){super(new Float32Array(t),e,r)}}let Cf=0;const fn=new Le,zo=new Ye,tr=new Y,an=new Xr,Rr=new Xr,He=new Y;class ri extends pr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Gr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ph(t)?xh:vh)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,r=0){this.groups.push({start:t,count:e,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ee().getNormalMatrix(t);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,r){return fn.makeTranslation(t,e,r),this.applyMatrix4(fn),this}scale(t,e,r){return fn.makeScale(t,e,r),this.applyMatrix4(fn),this}lookAt(t){return zo.lookAt(t),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const r=[];for(let o=0,l=t.length;o<l;o++){const h=t[o];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new ti(r,3))}else{const r=Math.min(t.length,e.count);for(let o=0;o<r;o++){const l=t[o];e.setXYZ(o,l.x,l.y,l.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const l=e[r];an.setFromBufferAttribute(l),this.morphTargetsRelative?(He.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(He),He.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(He)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&de('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rl);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){de("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const r=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let l=0,h=e.length;l<h;l++){const u=e[l];Rr.setFromBufferAttribute(u),this.morphTargetsRelative?(He.addVectors(an.min,Rr.min),an.expandByPoint(He),He.addVectors(an.max,Rr.max),an.expandByPoint(He)):(an.expandByPoint(Rr.min),an.expandByPoint(Rr.max))}an.getCenter(r);let o=0;for(let l=0,h=t.count;l<h;l++)He.fromBufferAttribute(t,l),o=Math.max(o,r.distanceToSquared(He));if(e)for(let l=0,h=e.length;l<h;l++){const u=e[l],f=this.morphTargetsRelative;for(let d=0,g=u.count;d<g;d++)He.fromBufferAttribute(u,d),f&&(tr.fromBufferAttribute(t,d),He.add(tr)),o=Math.max(o,r.distanceToSquared(He))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&de('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){de("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.position,o=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),u=[],f=[];for(let Z=0;Z<r.count;Z++)u[Z]=new Y,f[Z]=new Y;const d=new Y,g=new Y,_=new Y,v=new xe,S=new xe,b=new xe,w=new Y,x=new Y;function m(Z,T,A){d.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,T),_.fromBufferAttribute(r,A),v.fromBufferAttribute(l,Z),S.fromBufferAttribute(l,T),b.fromBufferAttribute(l,A),g.sub(d),_.sub(d),S.sub(v),b.sub(v);const B=1/(S.x*b.y-b.x*S.y);isFinite(B)&&(w.copy(g).multiplyScalar(b.y).addScaledVector(_,-S.y).multiplyScalar(B),x.copy(_).multiplyScalar(S.x).addScaledVector(g,-b.x).multiplyScalar(B),u[Z].add(w),u[T].add(w),u[A].add(w),f[Z].add(x),f[T].add(x),f[A].add(x))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let Z=0,T=D.length;Z<T;++Z){const A=D[Z],B=A.start,J=A.count;for(let Q=B,rt=B+J;Q<rt;Q+=3)m(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const P=new Y,R=new Y,U=new Y,F=new Y;function O(Z){U.fromBufferAttribute(o,Z),F.copy(U);const T=u[Z];P.copy(T),P.sub(U.multiplyScalar(U.dot(T))).normalize(),R.crossVectors(F,T);const B=R.dot(f[Z])<0?-1:1;h.setXYZW(Z,P.x,P.y,P.z,B)}for(let Z=0,T=D.length;Z<T;++Z){const A=D[Z],B=A.start,J=A.count;for(let Q=B,rt=B+J;Q<rt;Q+=3)O(t.getX(Q+0)),O(t.getX(Q+1)),O(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Fn(new Float32Array(e.count*3),3),this.setAttribute("normal",r);else for(let v=0,S=r.count;v<S;v++)r.setXYZ(v,0,0,0);const o=new Y,l=new Y,h=new Y,u=new Y,f=new Y,d=new Y,g=new Y,_=new Y;if(t)for(let v=0,S=t.count;v<S;v+=3){const b=t.getX(v+0),w=t.getX(v+1),x=t.getX(v+2);o.fromBufferAttribute(e,b),l.fromBufferAttribute(e,w),h.fromBufferAttribute(e,x),g.subVectors(h,l),_.subVectors(o,l),g.cross(_),u.fromBufferAttribute(r,b),f.fromBufferAttribute(r,w),d.fromBufferAttribute(r,x),u.add(g),f.add(g),d.add(g),r.setXYZ(b,u.x,u.y,u.z),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(x,d.x,d.y,d.z)}else for(let v=0,S=e.count;v<S;v+=3)o.fromBufferAttribute(e,v+0),l.fromBufferAttribute(e,v+1),h.fromBufferAttribute(e,v+2),g.subVectors(h,l),_.subVectors(o,l),g.cross(_),r.setXYZ(v+0,g.x,g.y,g.z),r.setXYZ(v+1,g.x,g.y,g.z),r.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,r=t.count;e<r;e++)He.fromBufferAttribute(t,e),He.normalize(),t.setXYZ(e,He.x,He.y,He.z)}toNonIndexed(){function t(u,f){const d=u.array,g=u.itemSize,_=u.normalized,v=new d.constructor(f.length*g);let S=0,b=0;for(let w=0,x=f.length;w<x;w++){u.isInterleavedBufferAttribute?S=f[w]*u.data.stride+u.offset:S=f[w]*g;for(let m=0;m<g;m++)v[b++]=d[S++]}return new Fn(v,g,_)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ri,r=this.index.array,o=this.attributes;for(const u in o){const f=o[u],d=t(f,r);e.setAttribute(u,d)}const l=this.morphAttributes;for(const u in l){const f=[],d=l[u];for(let g=0,_=d.length;g<_;g++){const v=d[g],S=t(v,r);f.push(S)}e.morphAttributes[u]=f}e.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let u=0,f=h.length;u<f;u++){const d=h[u];e.addGroup(d.start,d.count,d.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const f=this.parameters;for(const d in f)f[d]!==void 0&&(t[d]=f[d]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const r=this.attributes;for(const f in r){const d=r[f];t.data.attributes[f]=d.toJSON(t.data)}const o={};let l=!1;for(const f in this.morphAttributes){const d=this.morphAttributes[f],g=[];for(let _=0,v=d.length;_<v;_++){const S=d[_];g.push(S.toJSON(t.data))}g.length>0&&(o[f]=g,l=!0)}l&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const o=t.attributes;for(const d in o){const g=o[d];this.setAttribute(d,g.clone(e))}const l=t.morphAttributes;for(const d in l){const g=[],_=l[d];for(let v=0,S=_.length;v<S;v++)g.push(_[v].clone(e));this.morphAttributes[d]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let d=0,g=h.length;d<g;d++){const _=h[d];this.addGroup(_.start,_.count,_.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const f=t.boundingSphere;return f!==null&&(this.boundingSphere=f.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dc=new Le,Ti=new xf,ys=new rl,pc=new Y,Ss=new Y,Ms=new Y,Es=new Y,ko=new Y,Ts=new Y,mc=new Y,bs=new Y;class bn extends Ye{constructor(t=new ri,e=new ks){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,r=Object.keys(e);if(r.length>0){const o=e[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,h=o.length;l<h;l++){const u=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(t,e){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,h=r.morphTargetsRelative;e.fromBufferAttribute(o,t);const u=this.morphTargetInfluences;if(l&&u){Ts.set(0,0,0);for(let f=0,d=l.length;f<d;f++){const g=u[f],_=l[f];g!==0&&(ko.fromBufferAttribute(_,t),h?Ts.addScaledVector(ko,g):Ts.addScaledVector(ko.sub(e),g))}e.add(Ts)}return e}raycast(t,e){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ys.copy(r.boundingSphere),ys.applyMatrix4(l),Ti.copy(t.ray).recast(t.near),!(ys.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(ys,pc)===null||Ti.origin.distanceToSquared(pc)>(t.far-t.near)**2))&&(dc.copy(l).invert(),Ti.copy(t.ray).applyMatrix4(dc),!(r.boundingBox!==null&&Ti.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,e,Ti)))}_computeIntersections(t,e,r){let o;const l=this.geometry,h=this.material,u=l.index,f=l.attributes.position,d=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,S=l.drawRange;if(u!==null)if(Array.isArray(h))for(let b=0,w=v.length;b<w;b++){const x=v[b],m=h[x.materialIndex],D=Math.max(x.start,S.start),P=Math.min(u.count,Math.min(x.start+x.count,S.start+S.count));for(let R=D,U=P;R<U;R+=3){const F=u.getX(R),O=u.getX(R+1),Z=u.getX(R+2);o=ws(this,m,t,r,d,g,_,F,O,Z),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const b=Math.max(0,S.start),w=Math.min(u.count,S.start+S.count);for(let x=b,m=w;x<m;x+=3){const D=u.getX(x),P=u.getX(x+1),R=u.getX(x+2);o=ws(this,h,t,r,d,g,_,D,P,R),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}else if(f!==void 0)if(Array.isArray(h))for(let b=0,w=v.length;b<w;b++){const x=v[b],m=h[x.materialIndex],D=Math.max(x.start,S.start),P=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let R=D,U=P;R<U;R+=3){const F=R,O=R+1,Z=R+2;o=ws(this,m,t,r,d,g,_,F,O,Z),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const b=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let x=b,m=w;x<m;x+=3){const D=x,P=x+1,R=x+2;o=ws(this,h,t,r,d,g,_,D,P,R),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}}}function Pf(s,t,e,r,o,l,h,u){let f;if(t.side===rn?f=r.intersectTriangle(h,l,o,!0,u):f=r.intersectTriangle(o,l,h,t.side===mi,u),f===null)return null;bs.copy(u),bs.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(bs);return d<e.near||d>e.far?null:{distance:d,point:bs.clone(),object:s}}function ws(s,t,e,r,o,l,h,u,f,d){s.getVertexPosition(u,Ss),s.getVertexPosition(f,Ms),s.getVertexPosition(d,Es);const g=Pf(s,t,e,r,Ss,Ms,Es,mc);if(g){const _=new Y;En.getBarycoord(mc,Ss,Ms,Es,_),o&&(g.uv=En.getInterpolatedAttribute(o,u,f,d,_,new xe)),l&&(g.uv1=En.getInterpolatedAttribute(l,u,f,d,_,new xe)),h&&(g.normal=En.getInterpolatedAttribute(h,u,f,d,_,new Y),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const v={a:u,b:f,c:d,normal:new Y,materialIndex:0};En.getNormal(Ss,Ms,Es,v.normal),g.face=v,g.barycoord=_}return g}class Ui extends ri{constructor(t=1,e=1,r=1,o=1,l=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:r,widthSegments:o,heightSegments:l,depthSegments:h};const u=this;o=Math.floor(o),l=Math.floor(l),h=Math.floor(h);const f=[],d=[],g=[],_=[];let v=0,S=0;b("z","y","x",-1,-1,r,e,t,h,l,0),b("z","y","x",1,-1,r,e,-t,h,l,1),b("x","z","y",1,1,t,r,e,o,h,2),b("x","z","y",1,-1,t,r,-e,o,h,3),b("x","y","z",1,-1,t,e,r,o,l,4),b("x","y","z",-1,-1,t,e,-r,o,l,5),this.setIndex(f),this.setAttribute("position",new ti(d,3)),this.setAttribute("normal",new ti(g,3)),this.setAttribute("uv",new ti(_,2));function b(w,x,m,D,P,R,U,F,O,Z,T){const A=R/O,B=U/Z,J=R/2,Q=U/2,rt=F/2,st=O+1,tt=Z+1;let q=0,K=0;const Et=new Y;for(let it=0;it<tt;it++){const ft=it*B-Q;for(let Ht=0;Ht<st;Ht++){const kt=Ht*A-J;Et[w]=kt*D,Et[x]=ft*P,Et[m]=rt,d.push(Et.x,Et.y,Et.z),Et[w]=0,Et[x]=0,Et[m]=F>0?1:-1,g.push(Et.x,Et.y,Et.z),_.push(Ht/O),_.push(1-it/Z),q+=1}}for(let it=0;it<Z;it++)for(let ft=0;ft<O;ft++){const Ht=v+ft+st*it,kt=v+ft+st*(it+1),Kt=v+(ft+1)+st*(it+1),Vt=v+(ft+1)+st*it;f.push(Ht,kt,Vt),f.push(kt,Kt,Vt),K+=6}u.addGroup(S,K,T),S+=K,v+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(s){const t={};for(const e in s){t[e]={};for(const r in s[e]){const o=s[e][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][r]=null):t[e][r]=o.clone():Array.isArray(o)?t[e][r]=o.slice():t[e][r]=o}}return t}function Je(s){const t={};for(let e=0;e<s.length;e++){const r=ur(s[e]);for(const o in r)t[o]=r[o]}return t}function Rf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function yh(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}const Lf={clone:ur,merge:Je};var Df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,If=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bn extends Hs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Df,this.fragmentShader=If,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=Rf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const o in this.uniforms){const h=this.uniforms[o].value;h&&h.isTexture?e.uniforms[o]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?e.uniforms[o]={type:"c",value:h.getHex()}:h&&h.isVector2?e.uniforms[o]={type:"v2",value:h.toArray()}:h&&h.isVector3?e.uniforms[o]={type:"v3",value:h.toArray()}:h&&h.isVector4?e.uniforms[o]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?e.uniforms[o]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?e.uniforms[o]={type:"m4",value:h.toArray()}:e.uniforms[o]={value:h}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(e.extensions=r),e}}class Sh extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fi=new Y,_c=new xe,gc=new xe;class pn extends Sh{constructor(t=50,e=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ga*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(xo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ga*2*Math.atan(Math.tan(xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,r){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(fi.x,fi.y).multiplyScalar(-t/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(fi.x,fi.y).multiplyScalar(-t/fi.z)}getViewSize(t,e){return this.getViewBounds(t,_c,gc),e.subVectors(gc,_c)}setViewOffset(t,e,r,o,l,h){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(xo*.5*this.fov)/this.zoom,r=2*e,o=this.aspect*r,l=-.5*o;const h=this.view;if(this.view!==null&&this.view.enabled){const f=h.fullWidth,d=h.fullHeight;l+=h.offsetX*o/f,e-=h.offsetY*r/d,o*=h.width/f,r*=h.height/d}const u=this.filmOffset;u!==0&&(l+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,e,e-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const er=-90,nr=1;class Uf extends Ye{constructor(t,e,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new pn(er,nr,t,e);o.layers=this.layers,this.add(o);const l=new pn(er,nr,t,e);l.layers=this.layers,this.add(l);const h=new pn(er,nr,t,e);h.layers=this.layers,this.add(h);const u=new pn(er,nr,t,e);u.layers=this.layers,this.add(u);const f=new pn(er,nr,t,e);f.layers=this.layers,this.add(f);const d=new pn(er,nr,t,e);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[r,o,l,h,u,f]=e;for(const d of e)this.remove(d);if(t===In)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),f.up.set(0,1,0),f.lookAt(0,0,-1);else if(t===Bs)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),f.up.set(0,-1,0),f.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of e)this.add(d),d.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,h,u,f,d,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,o),t.render(e,l),t.setRenderTarget(r,1,o),t.render(e,h),t.setRenderTarget(r,2,o),t.render(e,u),t.setRenderTarget(r,3,o),t.render(e,f),t.setRenderTarget(r,4,o),t.render(e,d),r.texture.generateMipmaps=w,t.setRenderTarget(r,5,o),t.render(e,g),t.setRenderTarget(_,v,S),t.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class Mh extends $e{constructor(t=[],e=Ii,r,o,l,h,u,f,d,g){super(t,e,r,o,l,h,u,f,d,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Eh extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},o=[r,r,r,r,r,r];this.texture=new Mh(o),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Ui(5,5,5),l=new Bn({name:"CubemapFromEquirect",uniforms:ur(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:rn,blending:$n});l.uniforms.tEquirect.value=e;const h=new bn(o,l),u=e.minFilter;return e.minFilter===Li&&(e.minFilter=qe),new Uf(1,10,this).update(t,h),e.minFilter=u,h.geometry.dispose(),h.material.dispose(),this}clear(t,e=!0,r=!0,o=!0){const l=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(e,r,o);t.setRenderTarget(l)}}class Nr extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nf={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const r of t.hand.values())this._getHandJoint(e,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,r){let o=null,l=null,h=null;const u=this._targetRay,f=this._grip,d=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(d&&t.hand){h=!0;for(const w of t.hand.values()){const x=e.getJointPose(w,r),m=this._getHandJoint(d,w);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const g=d.joints["index-finger-tip"],_=d.joints["thumb-tip"],v=g.position.distanceTo(_.position),S=.02,b=.005;d.inputState.pinching&&v>S+b?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=S-b&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else f!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,r),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1));u!==null&&(o=e.getPose(t.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Nf)))}return u!==null&&(u.visible=o!==null),f!==null&&(f.visible=l!==null),d!==null&&(d.visible=h!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const r=new Nr;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[e.jointName]=r,t.add(r)}return t.joints[e.jointName]}}class Ff extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Of extends $e{constructor(t=null,e=1,r=1,o,l,h,u,f,d=We,g=We,_,v){super(null,h,u,f,d,g,o,l,_,v),this.isDataTexture=!0,this.image={data:t,width:e,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ho=new Y,Bf=new Y,zf=new ee;class Ci{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,r,o){return this.normal.set(t,e,r),this.constant=o,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,r){const o=Ho.subVectors(r,e).cross(Bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const r=t.delta(Ho),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:e.copy(t.start).addScaledVector(r,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return e<0&&r>0||r<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const r=e||zf.getNormalMatrix(t),o=this.coplanarPoint(Ho).applyMatrix4(t),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new rl,kf=new xe(.5,.5),As=new Y;class sl{constructor(t=new Ci,e=new Ci,r=new Ci,o=new Ci,l=new Ci,h=new Ci){this.planes=[t,e,r,o,l,h]}set(t,e,r,o,l,h){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(r),u[3].copy(o),u[4].copy(l),u[5].copy(h),this}copy(t){const e=this.planes;for(let r=0;r<6;r++)e[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,e=In,r=!1){const o=this.planes,l=t.elements,h=l[0],u=l[1],f=l[2],d=l[3],g=l[4],_=l[5],v=l[6],S=l[7],b=l[8],w=l[9],x=l[10],m=l[11],D=l[12],P=l[13],R=l[14],U=l[15];if(o[0].setComponents(d-h,S-g,m-b,U-D).normalize(),o[1].setComponents(d+h,S+g,m+b,U+D).normalize(),o[2].setComponents(d+u,S+_,m+w,U+P).normalize(),o[3].setComponents(d-u,S-_,m-w,U-P).normalize(),r)o[4].setComponents(f,v,x,R).normalize(),o[5].setComponents(d-f,S-v,m-x,U-R).normalize();else if(o[4].setComponents(d-f,S-v,m-x,U-R).normalize(),e===In)o[5].setComponents(d+f,S+v,m+x,U+R).normalize();else if(e===Bs)o[5].setComponents(f,v,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){bi.center.set(0,0,0);const e=kf.distanceTo(t.center);return bi.radius=.7071067811865476+e,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){const e=this.planes,r=t.center,o=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(t){const e=this.planes;for(let r=0;r<6;r++){const o=e[r];if(As.x=o.normal.x>0?t.max.x:t.min.x,As.y=o.normal.y>0?t.max.y:t.min.y,As.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(As)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let r=0;r<6;r++)if(e[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hr extends $e{constructor(t,e,r=On,o,l,h,u=We,f=We,d,g=ni,_=1){if(g!==ni&&g!==Di)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:e,depth:_};super(v,o,l,h,u,f,g,r,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new il(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Vf extends Hr{constructor(t,e=On,r=Ii,o,l,h=We,u=We,f,d=ni){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,e,r,o,l,h,u,f,d),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Th extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gs extends ri{constructor(t=1,e=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:r,heightSegments:o};const l=t/2,h=e/2,u=Math.floor(r),f=Math.floor(o),d=u+1,g=f+1,_=t/u,v=e/f,S=[],b=[],w=[],x=[];for(let m=0;m<g;m++){const D=m*v-h;for(let P=0;P<d;P++){const R=P*_-l;b.push(R,-D,0),w.push(0,0,1),x.push(P/u),x.push(1-m/f)}}for(let m=0;m<f;m++)for(let D=0;D<u;D++){const P=D+d*m,R=D+d*(m+1),U=D+1+d*(m+1),F=D+1+d*m;S.push(P,R,F),S.push(R,U,F)}this.setIndex(S),this.setAttribute("position",new ti(b,3)),this.setAttribute("normal",new ti(w,3)),this.setAttribute("uv",new ti(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.width,t.height,t.widthSegments,t.heightSegments)}}class Hf extends Bn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gf extends Hs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Wf extends Hs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class bh extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const Go=new Le,vc=new Y,xc=new Y;class Xf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sl,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,r=this.matrix;vc.setFromMatrixPosition(t.matrixWorld),e.position.copy(vc),xc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xc),e.updateMatrixWorld(),Go.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Go,e.coordinateSystem,e.reversedDepth),e.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Go)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ol extends Sh{constructor(t=-1,e=1,r=1,o=-1,l=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=r,this.bottom=o,this.near=l,this.far=h,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,r,o,l,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-t,h=r+t,u=o+e,f=o-e;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,h=l+d*this.view.width,u-=g*this.view.offsetY,f=u-g*this.view.height}this.projectionMatrix.makeOrthographic(l,h,u,f,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Zf extends Xf{constructor(){super(new ol(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qf extends bh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Zf}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}class Yf extends bh{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Kf extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function yc(s,t,e,r){const o=jf(r);switch(e){case uh:return s*t;case dh:return s*t/o.components*o.byteLength;case $a:return s*t/o.components*o.byteLength;case cr:return s*t*2/o.components*o.byteLength;case Qa:return s*t*2/o.components*o.byteLength;case fh:return s*t*3/o.components*o.byteLength;case Tn:return s*t*4/o.components*o.byteLength;case tl:return s*t*4/o.components*o.byteLength;case Ls:case Ds:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Is:case Us:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case fa:case pa:return Math.max(s,16)*Math.max(t,8)/4;case ua:case da:return Math.max(s,8)*Math.max(t,8)/2;case ma:case _a:case va:case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ga:case ya:case Sa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ea:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ta:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ba:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case wa:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Aa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ra:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case La:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Da:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ua:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Na:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Fa:case Oa:case Ba:return Math.ceil(s/4)*Math.ceil(t/4)*16;case za:case ka:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Va:case Ha:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jf(s){switch(s){case ln:case ah:return{byteLength:1,components:1};case zr:case lh:case ei:return{byteLength:2,components:1};case ja:case Ja:return{byteLength:2,components:4};case On:case Ka:case Dn:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);function wh(){let s=null,t=!1,e=null,r=null;function o(l,h){e(l,h),r=s.requestAnimationFrame(o)}return{start:function(){t!==!0&&e!==null&&(r=s.requestAnimationFrame(o),t=!0)},stop:function(){s.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){s=l}}}function Jf(s){const t=new WeakMap;function e(u,f){const d=u.array,g=u.usage,_=d.byteLength,v=s.createBuffer();s.bindBuffer(f,v),s.bufferData(f,d,g),u.onUploadCallback();let S;if(d instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=s.HALF_FLOAT;else if(d instanceof Uint16Array)u.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=s.SHORT;else if(d instanceof Uint32Array)S=s.UNSIGNED_INT;else if(d instanceof Int32Array)S=s.INT;else if(d instanceof Int8Array)S=s.BYTE;else if(d instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:_}}function r(u,f,d){const g=f.array,_=f.updateRanges;if(s.bindBuffer(d,u),_.length===0)s.bufferSubData(d,0,g);else{_.sort((S,b)=>S.start-b.start);let v=0;for(let S=1;S<_.length;S++){const b=_[v],w=_[S];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++v,_[v]=w)}_.length=v+1;for(let S=0,b=_.length;S<b;S++){const w=_[S];s.bufferSubData(d,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}f.clearUpdateRanges()}f.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=t.get(u);f&&(s.deleteBuffer(f.buffer),t.delete(u))}function h(u,f){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const g=t.get(u);(!g||g.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const d=t.get(u);if(d===void 0)t.set(u,e(u,f));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,u,f),d.version=u.version}}return{get:o,remove:l,update:h}}var $f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qf=`#ifdef USE_ALPHAHASH
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
#endif`,td=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ed=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rd=`#ifdef USE_AOMAP
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
#endif`,sd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,od=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ad=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ld=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ud=`#ifdef USE_IRIDESCENCE
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
#endif`,fd=`#ifdef USE_BUMPMAP
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
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,md=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sd=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
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
} // validated`,Md=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ed=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Td=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ad=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Rd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Od=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zd=`#ifdef USE_GRADIENTMAP
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
}`,kd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Wd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,Xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kd=`PhysicalMaterial material;
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
#endif`,jd=`uniform sampler2D dfgLUT;
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
		float v = 0.5 / ( gv + gl );
		return v;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
}`,Jd=`
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$d=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,Qd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ep=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ip=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ap=`#if defined( USE_POINTS_UV )
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
#endif`,lp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,up=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`#ifdef USE_MORPHTARGETS
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
#endif`,pp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yp=`#ifdef USE_NORMALMAP
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
#endif`,Sp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ap=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
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
			shadowCoord.z += shadowBias;
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
			shadowCoord.z += shadowBias;
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
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,Fp=`float getShadowMask() {
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
}`,Op=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kp=`#ifdef USE_SKINNING
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
#endif`,Vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xp=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Zp=`#ifdef USE_TRANSMISSION
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,im=`#include <common>
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
}`,rm=`#if DEPTH_PACKING == 3200
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
}`,sm=`#define DISTANCE
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
}`,om=`#define DISTANCE
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
void main () {
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
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`uniform float scale;
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#include <common>
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
}`,fm=`uniform vec3 diffuse;
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
}`,dm=`#define LAMBERT
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
}`,pm=`#define LAMBERT
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,mm=`#define MATCAP
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
}`,_m=`#define MATCAP
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
}`,gm=`#define NORMAL
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
}`,vm=`#define NORMAL
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
}`,xm=`#define PHONG
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
}`,ym=`#define PHONG
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Sm=`#define STANDARD
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
}`,Mm=`#define STANDARD
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
}`,Em=`#define TOON
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
}`,Tm=`#define TOON
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
}`,bm=`uniform float size;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Am=`#include <common>
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
}`,Cm=`uniform vec3 color;
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
}`,Pm=`uniform float rotation;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:$f,alphahash_pars_fragment:Qf,alphamap_fragment:td,alphamap_pars_fragment:ed,alphatest_fragment:nd,alphatest_pars_fragment:id,aomap_fragment:rd,aomap_pars_fragment:sd,batching_pars_vertex:od,batching_vertex:ad,begin_vertex:ld,beginnormal_vertex:cd,bsdfs:hd,iridescence_fragment:ud,bumpmap_pars_fragment:fd,clipping_planes_fragment:dd,clipping_planes_pars_fragment:pd,clipping_planes_pars_vertex:md,clipping_planes_vertex:_d,color_fragment:gd,color_pars_fragment:vd,color_pars_vertex:xd,color_vertex:yd,common:Sd,cube_uv_reflection_fragment:Md,defaultnormal_vertex:Ed,displacementmap_pars_vertex:Td,displacementmap_vertex:bd,emissivemap_fragment:wd,emissivemap_pars_fragment:Ad,colorspace_fragment:Cd,colorspace_pars_fragment:Pd,envmap_fragment:Rd,envmap_common_pars_fragment:Ld,envmap_pars_fragment:Dd,envmap_pars_vertex:Id,envmap_physical_pars_fragment:Wd,envmap_vertex:Ud,fog_vertex:Nd,fog_pars_vertex:Fd,fog_fragment:Od,fog_pars_fragment:Bd,gradientmap_pars_fragment:zd,lightmap_pars_fragment:kd,lights_lambert_fragment:Vd,lights_lambert_pars_fragment:Hd,lights_pars_begin:Gd,lights_toon_fragment:Xd,lights_toon_pars_fragment:Zd,lights_phong_fragment:qd,lights_phong_pars_fragment:Yd,lights_physical_fragment:Kd,lights_physical_pars_fragment:jd,lights_fragment_begin:Jd,lights_fragment_maps:$d,lights_fragment_end:Qd,logdepthbuf_fragment:tp,logdepthbuf_pars_fragment:ep,logdepthbuf_pars_vertex:np,logdepthbuf_vertex:ip,map_fragment:rp,map_pars_fragment:sp,map_particle_fragment:op,map_particle_pars_fragment:ap,metalnessmap_fragment:lp,metalnessmap_pars_fragment:cp,morphinstance_vertex:hp,morphcolor_vertex:up,morphnormal_vertex:fp,morphtarget_pars_vertex:dp,morphtarget_vertex:pp,normal_fragment_begin:mp,normal_fragment_maps:_p,normal_pars_fragment:gp,normal_pars_vertex:vp,normal_vertex:xp,normalmap_pars_fragment:yp,clearcoat_normal_fragment_begin:Sp,clearcoat_normal_fragment_maps:Mp,clearcoat_pars_fragment:Ep,iridescence_pars_fragment:Tp,opaque_fragment:bp,packing:wp,premultiplied_alpha_fragment:Ap,project_vertex:Cp,dithering_fragment:Pp,dithering_pars_fragment:Rp,roughnessmap_fragment:Lp,roughnessmap_pars_fragment:Dp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:Up,shadowmap_vertex:Np,shadowmask_pars_fragment:Fp,skinbase_vertex:Op,skinning_pars_vertex:Bp,skinning_vertex:zp,skinnormal_vertex:kp,specularmap_fragment:Vp,specularmap_pars_fragment:Hp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Wp,transmission_fragment:Xp,transmission_pars_fragment:Zp,uv_pars_fragment:qp,uv_pars_vertex:Yp,uv_vertex:Kp,worldpos_vertex:jp,background_vert:Jp,background_frag:$p,backgroundCube_vert:Qp,backgroundCube_frag:tm,cube_vert:em,cube_frag:nm,depth_vert:im,depth_frag:rm,distance_vert:sm,distance_frag:om,equirect_vert:am,equirect_frag:lm,linedashed_vert:cm,linedashed_frag:hm,meshbasic_vert:um,meshbasic_frag:fm,meshlambert_vert:dm,meshlambert_frag:pm,meshmatcap_vert:mm,meshmatcap_frag:_m,meshnormal_vert:gm,meshnormal_frag:vm,meshphong_vert:xm,meshphong_frag:ym,meshphysical_vert:Sm,meshphysical_frag:Mm,meshtoon_vert:Em,meshtoon_frag:Tm,points_vert:bm,points_frag:wm,shadow_vert:Am,shadow_frag:Cm,sprite_vert:Pm,sprite_frag:Rm},Mt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ee}},envmap:{envMap:{value:null},envMapRotation:{value:new ee},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ee}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ee}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ee},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ee},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ee},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ee}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ee}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ee}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0},uvTransform:{value:new ee}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ee},alphaMap:{value:null},alphaMapTransform:{value:new ee},alphaTest:{value:0}}},Ln={basic:{uniforms:Je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:Je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Se(0)}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:Je([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:Je([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:Je([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Se(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:Je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:Je([Mt.points,Mt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:Je([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:Je([Mt.common,Mt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:Je([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:Je([Mt.sprite,Mt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new ee},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ee}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:Je([Mt.common,Mt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:Je([Mt.lights,Mt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Ln.physical={uniforms:Je([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ee},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ee},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ee},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ee},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ee},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ee},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ee},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ee},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ee},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ee},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ee},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ee}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};const Cs={r:0,b:0,g:0},wi=new ii,Lm=new Le;function Dm(s,t,e,r,o,l,h){const u=new Se(0);let f=l===!0?0:1,d,g,_=null,v=0,S=null;function b(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?e:t).get(R)),R}function w(P){let R=!1;const U=b(P);U===null?m(u,f):U&&U.isColor&&(m(U,1),R=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(P,R){const U=b(R);U&&(U.isCubeTexture||U.mapping===Vs)?(g===void 0&&(g=new bn(new Ui(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:ur(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(F,O,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),wi.copy(R.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),g.material.uniforms.envMap.value=U,g.material.uniforms.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Lm.makeRotationFromEuler(wi)),g.material.toneMapped=fe.getTransfer(U.colorSpace)!==ye,(_!==U||v!==U.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=U,v=U.version,S=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):U&&U.isTexture&&(d===void 0&&(d=new bn(new Gs(2,2),new Bn({name:"BackgroundMaterial",uniforms:ur(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=U,d.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,d.material.toneMapped=fe.getTransfer(U.colorSpace)!==ye,U.matrixAutoUpdate===!0&&U.updateMatrix(),d.material.uniforms.uvTransform.value.copy(U.matrix),(_!==U||v!==U.version||S!==s.toneMapping)&&(d.material.needsUpdate=!0,_=U,v=U.version,S=s.toneMapping),d.layers.enableAll(),P.unshift(d,d.geometry,d.material,0,0,null))}function m(P,R){P.getRGB(Cs,yh(s)),r.buffers.color.setClear(Cs.r,Cs.g,Cs.b,R,h)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(P,R=1){u.set(P),f=R,m(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,m(u,f)},render:w,addToRenderList:x,dispose:D}}function Im(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=v(null);let l=o,h=!1;function u(A,B,J,Q,rt){let st=!1;const tt=_(Q,J,B);l!==tt&&(l=tt,d(l.object)),st=S(A,Q,J,rt),st&&b(A,Q,J,rt),rt!==null&&t.update(rt,s.ELEMENT_ARRAY_BUFFER),(st||h)&&(h=!1,R(A,B,J,Q),rt!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(rt).buffer))}function f(){return s.createVertexArray()}function d(A){return s.bindVertexArray(A)}function g(A){return s.deleteVertexArray(A)}function _(A,B,J){const Q=J.wireframe===!0;let rt=r[A.id];rt===void 0&&(rt={},r[A.id]=rt);let st=rt[B.id];st===void 0&&(st={},rt[B.id]=st);let tt=st[Q];return tt===void 0&&(tt=v(f()),st[Q]=tt),tt}function v(A){const B=[],J=[],Q=[];for(let rt=0;rt<e;rt++)B[rt]=0,J[rt]=0,Q[rt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:J,attributeDivisors:Q,object:A,attributes:{},index:null}}function S(A,B,J,Q){const rt=l.attributes,st=B.attributes;let tt=0;const q=J.getAttributes();for(const K in q)if(q[K].location>=0){const it=rt[K];let ft=st[K];if(ft===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(ft=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(ft=A.instanceColor)),it===void 0||it.attribute!==ft||ft&&it.data!==ft.data)return!0;tt++}return l.attributesNum!==tt||l.index!==Q}function b(A,B,J,Q){const rt={},st=B.attributes;let tt=0;const q=J.getAttributes();for(const K in q)if(q[K].location>=0){let it=st[K];it===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(it=A.instanceColor));const ft={};ft.attribute=it,it&&it.data&&(ft.data=it.data),rt[K]=ft,tt++}l.attributes=rt,l.attributesNum=tt,l.index=Q}function w(){const A=l.newAttributes;for(let B=0,J=A.length;B<J;B++)A[B]=0}function x(A){m(A,0)}function m(A,B){const J=l.newAttributes,Q=l.enabledAttributes,rt=l.attributeDivisors;J[A]=1,Q[A]===0&&(s.enableVertexAttribArray(A),Q[A]=1),rt[A]!==B&&(s.vertexAttribDivisor(A,B),rt[A]=B)}function D(){const A=l.newAttributes,B=l.enabledAttributes;for(let J=0,Q=B.length;J<Q;J++)B[J]!==A[J]&&(s.disableVertexAttribArray(J),B[J]=0)}function P(A,B,J,Q,rt,st,tt){tt===!0?s.vertexAttribIPointer(A,B,J,rt,st):s.vertexAttribPointer(A,B,J,Q,rt,st)}function R(A,B,J,Q){w();const rt=Q.attributes,st=J.getAttributes(),tt=B.defaultAttributeValues;for(const q in st){const K=st[q];if(K.location>=0){let Et=rt[q];if(Et===void 0&&(q==="instanceMatrix"&&A.instanceMatrix&&(Et=A.instanceMatrix),q==="instanceColor"&&A.instanceColor&&(Et=A.instanceColor)),Et!==void 0){const it=Et.normalized,ft=Et.itemSize,Ht=t.get(Et);if(Ht===void 0)continue;const kt=Ht.buffer,Kt=Ht.type,Vt=Ht.bytesPerElement,W=Kt===s.INT||Kt===s.UNSIGNED_INT||Et.gpuType===Ka;if(Et.isInterleavedBufferAttribute){const at=Et.data,Tt=at.stride,jt=Et.offset;if(at.isInstancedInterleavedBuffer){for(let Lt=0;Lt<K.locationSize;Lt++)m(K.location+Lt,at.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Lt=0;Lt<K.locationSize;Lt++)x(K.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let Lt=0;Lt<K.locationSize;Lt++)P(K.location+Lt,ft/K.locationSize,Kt,it,Tt*Vt,(jt+ft/K.locationSize*Lt)*Vt,W)}else{if(Et.isInstancedBufferAttribute){for(let at=0;at<K.locationSize;at++)m(K.location+at,Et.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let at=0;at<K.locationSize;at++)x(K.location+at);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let at=0;at<K.locationSize;at++)P(K.location+at,ft/K.locationSize,Kt,it,ft*Vt,ft/K.locationSize*at*Vt,W)}}else if(tt!==void 0){const it=tt[q];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(K.location,it);break;case 3:s.vertexAttrib3fv(K.location,it);break;case 4:s.vertexAttrib4fv(K.location,it);break;default:s.vertexAttrib1fv(K.location,it)}}}}D()}function U(){Z();for(const A in r){const B=r[A];for(const J in B){const Q=B[J];for(const rt in Q)g(Q[rt].object),delete Q[rt];delete B[J]}delete r[A]}}function F(A){if(r[A.id]===void 0)return;const B=r[A.id];for(const J in B){const Q=B[J];for(const rt in Q)g(Q[rt].object),delete Q[rt];delete B[J]}delete r[A.id]}function O(A){for(const B in r){const J=r[B];if(J[A.id]===void 0)continue;const Q=J[A.id];for(const rt in Q)g(Q[rt].object),delete Q[rt];delete J[A.id]}}function Z(){T(),h=!0,l!==o&&(l=o,d(l.object))}function T(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:Z,resetDefaultState:T,dispose:U,releaseStatesOfGeometry:F,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:x,disableUnusedAttributes:D}}function Um(s,t,e){let r;function o(d){r=d}function l(d,g){s.drawArrays(r,d,g),e.update(g,r,1)}function h(d,g,_){_!==0&&(s.drawArraysInstanced(r,d,g,_),e.update(g,r,_))}function u(d,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,g,0,_);let S=0;for(let b=0;b<_;b++)S+=g[b];e.update(S,r,1)}function f(d,g,_,v){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let b=0;b<d.length;b++)h(d[b],g[b],v[b]);else{S.multiDrawArraysInstancedWEBGL(r,d,0,g,0,v,0,_);let b=0;for(let w=0;w<_;w++)b+=g[w]*v[w];e.update(b,r,1)}}this.setMode=o,this.render=l,this.renderInstances=h,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Nm(s,t,e,r){let o;function l(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function h(O){return!(O!==Tn&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const Z=O===ei&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==ln&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Dn&&!Z)}function f(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=e.precision!==void 0?e.precision:"highp";const g=f(d);g!==d&&(Jt("WebGLRenderer:",d,"not supported, using",g,"instead."),d=g);const _=e.logarithmicDepthBuffer===!0,v=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:f,textureFormatReadable:h,textureTypeReadable:u,precision:d,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:D,maxVaryings:P,maxFragmentUniforms:R,maxSamples:U,samples:F}}function Fm(s){const t=this;let e=null,r=0,o=!1,l=!1;const h=new Ci,u=new ee,f={value:null,needsUpdate:!1};this.uniform=f,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||r!==0||o;return o=v,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){e=g(_,v,0)},this.setState=function(_,v,S){const b=_.clippingPlanes,w=_.clipIntersection,x=_.clipShadows,m=s.get(_);if(!o||b===null||b.length===0||l&&!x)l?g(null):d();else{const D=l?0:r,P=D*4;let R=m.clippingState||null;f.value=R,R=g(b,v,P,S);for(let U=0;U!==P;++U)R[U]=e[U];m.clippingState=R,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function d(){f.value!==e&&(f.value=e,f.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function g(_,v,S,b){const w=_!==null?_.length:0;let x=null;if(w!==0){if(x=f.value,b!==!0||x===null){const m=S+w*4,D=v.matrixWorldInverse;u.getNormalMatrix(D),(x===null||x.length<m)&&(x=new Float32Array(m));for(let P=0,R=S;P!==w;++P,R+=4)h.copy(_[P]).applyMatrix4(D,u),h.normal.toArray(x,R),x[R+3]=h.constant}f.value=x,f.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,x}}function Om(s){let t=new WeakMap;function e(h,u){return u===aa?h.mapping=Ii:u===la&&(h.mapping=lr),h}function r(h){if(h&&h.isTexture){const u=h.mapping;if(u===aa||u===la)if(t.has(h)){const f=t.get(h).texture;return e(f,h.mapping)}else{const f=h.image;if(f&&f.height>0){const d=new Eh(f.height);return d.fromEquirectangularTexture(s,h),t.set(h,d),h.addEventListener("dispose",o),e(d.texture,h.mapping)}else return null}}return h}function o(h){const u=h.target;u.removeEventListener("dispose",o);const f=t.get(u);f!==void 0&&(t.delete(u),f.dispose())}function l(){t=new WeakMap}return{get:r,dispose:l}}const pi=4,Sc=[.125,.215,.35,.446,.526,.582],Ri=20,Bm=256,Lr=new ol,Mc=new Se;let Wo=null,Xo=0,Zo=0,qo=!1;const zm=new Y;class Ec{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,r=.1,o=100,l={}){const{size:h=256,position:u=zm}=l;Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const f=this._allocateTargets();return f.depthBuffer=!0,this._sceneToCubeUV(t,r,o,f,u),e>0&&this._blur(f,0,0,e),this._applyPMREM(f),this._cleanup(f),f}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Wo,Xo,Zo),this._renderer.xr.enabled=qo,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wo=this._renderer.getRenderTarget(),Xo=this._renderer.getActiveCubeFace(),Zo=this._renderer.getActiveMipmapLevel(),qo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=e||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,r={magFilter:qe,minFilter:qe,generateMipmaps:!1,type:ei,format:Tn,colorSpace:hr,depthBuffer:!1},o=Tc(t,e,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(t,e,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=km(l)),this._blurMaterial=Hm(l,t,e),this._ggxMaterial=Vm(l,t,e)}return o}_compileMaterial(t){const e=new bn(new ri,t);this._renderer.compile(e,Lr)}_sceneToCubeUV(t,e,r,o,l){const f=new pn(90,1,e,r),d=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,S=_.toneMapping;_.getClearColor(Mc),_.toneMapping=Un,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new Ui,new ks({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let m=!1;const D=t.background;D?D.isColor&&(x.color.copy(D),t.background=null,m=!0):(x.color.copy(Mc),m=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(f.up.set(0,d[P],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x+g[P],l.y,l.z)):R===1?(f.up.set(0,0,d[P]),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y+g[P],l.z)):(f.up.set(0,d[P],0),f.position.set(l.x,l.y,l.z),f.lookAt(l.x,l.y,l.z+g[P]));const U=this._cubeSize;ir(o,R*U,P>2?U:0,U,U),_.setRenderTarget(o),m&&_.render(w,f),_.render(t,f)}_.toneMapping=S,_.autoClear=v,t.background=D}_textureToCubeUV(t,e){const r=this._renderer,o=t.mapping===Ii||t.mapping===lr;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bc());const l=o?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=l;const u=l.uniforms;u.envMap.value=t;const f=this._cubeSize;ir(e,0,0,3*f,2*f),r.setRenderTarget(e),r.render(h,Lr)}_applyPMREM(t){const e=this._renderer,r=e.autoClear;e.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(t,l-1,l);e.autoClear=r}_applyGGXFilter(t,e,r){const o=this._renderer,l=this._pingPongRenderTarget,h=this._ggxMaterial,u=this._lodMeshes[r];u.material=h;const f=h.uniforms,d=r/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),_=Math.sqrt(d*d-g*g),v=0+d*1.25,S=_*v,{_lodMax:b}=this,w=this._sizeLods[r],x=3*w*(r>b-pi?r-b+pi:0),m=4*(this._cubeSize-w);f.envMap.value=t.texture,f.roughness.value=S,f.mipInt.value=b-e,ir(l,x,m,3*w,2*w),o.setRenderTarget(l),o.render(u,Lr),f.envMap.value=l.texture,f.roughness.value=0,f.mipInt.value=b-r,ir(t,x,m,3*w,2*w),o.setRenderTarget(t),o.render(u,Lr)}_blur(t,e,r,o,l){const h=this._pingPongRenderTarget;this._halfBlur(t,h,e,r,o,"latitudinal",l),this._halfBlur(h,t,r,r,o,"longitudinal",l)}_halfBlur(t,e,r,o,l,h,u){const f=this._renderer,d=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&de("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[o];_.material=d;const v=d.uniforms,S=this._sizeLods[r]-1,b=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*Ri-1),w=l/b,x=isFinite(l)?1+Math.floor(g*w):Ri;x>Ri&&Jt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ri}`);const m=[];let D=0;for(let O=0;O<Ri;++O){const Z=O/w,T=Math.exp(-Z*Z/2);m.push(T),O===0?D+=T:O<x&&(D+=2*T)}for(let O=0;O<m.length;O++)m[O]=m[O]/D;v.envMap.value=t.texture,v.samples.value=x,v.weights.value=m,v.latitudinal.value=h==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:P}=this;v.dTheta.value=b,v.mipInt.value=P-r;const R=this._sizeLods[o],U=3*R*(o>P-pi?o-P+pi:0),F=4*(this._cubeSize-R);ir(e,U,F,3*R,2*R),f.setRenderTarget(e),f.render(_,Lr)}}function km(s){const t=[],e=[],r=[];let o=s;const l=s-pi+1+Sc.length;for(let h=0;h<l;h++){const u=Math.pow(2,o);t.push(u);let f=1/u;h>s-pi?f=Sc[h-s+pi-1]:h===0&&(f=0),e.push(f);const d=1/(u-2),g=-d,_=1+d,v=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,b=6,w=3,x=2,m=1,D=new Float32Array(w*b*S),P=new Float32Array(x*b*S),R=new Float32Array(m*b*S);for(let F=0;F<S;F++){const O=F%3*2/3-1,Z=F>2?0:-1,T=[O,Z,0,O+2/3,Z,0,O+2/3,Z+1,0,O,Z,0,O+2/3,Z+1,0,O,Z+1,0];D.set(T,w*b*F),P.set(v,x*b*F);const A=[F,F,F,F,F,F];R.set(A,m*b*F)}const U=new ri;U.setAttribute("position",new Fn(D,w)),U.setAttribute("uv",new Fn(P,x)),U.setAttribute("faceIndex",new Fn(R,m)),r.push(new bn(U,null)),o>pi&&o--}return{lodMeshes:r,sizeLods:t,sigmas:e}}function Tc(s,t,e){const r=new Nn(s,t,e);return r.texture.mapping=Vs,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ir(s,t,e,r,o){s.viewport.set(t,e,r,o),s.scissor.set(t,e,r,o)}function Vm(s,t,e){return new Bn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ws(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Hm(s,t,e){const r=new Float32Array(Ri),o=new Y(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Ws(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function bc(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ws(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function wc(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ws(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Ws(){return`

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
	`}function Gm(s){let t=new WeakMap,e=null;function r(u){if(u&&u.isTexture){const f=u.mapping,d=f===aa||f===la,g=f===Ii||f===lr;if(d||g){let _=t.get(u);const v=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return e===null&&(e=new Ec(s)),_=d?e.fromEquirectangular(u,_):e.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const S=u.image;return d&&S&&S.height>0||g&&S&&o(S)?(e===null&&(e=new Ec(s)),_=d?e.fromEquirectangular(u):e.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",l),_.texture):null}}}return u}function o(u){let f=0;const d=6;for(let g=0;g<d;g++)u[g]!==void 0&&f++;return f===d}function l(u){const f=u.target;f.removeEventListener("dispose",l);const d=t.get(f);d!==void 0&&(t.delete(f),d.dispose())}function h(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:r,dispose:h}}function Wm(s){const t={};function e(r){if(t[r]!==void 0)return t[r];const o=s.getExtension(r);return t[r]=o,o}return{has:function(r){return e(r)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(r){const o=e(r);return o===null&&Vr("WebGLRenderer: "+r+" extension not supported."),o}}}function Xm(s,t,e,r){const o={},l=new WeakMap;function h(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const b in v.attributes)t.remove(v.attributes[b]);v.removeEventListener("dispose",h),delete o[v.id];const S=l.get(v);S&&(t.remove(S),l.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function u(_,v){return o[v.id]===!0||(v.addEventListener("dispose",h),o[v.id]=!0,e.memory.geometries++),v}function f(_){const v=_.attributes;for(const S in v)t.update(v[S],s.ARRAY_BUFFER)}function d(_){const v=[],S=_.index,b=_.attributes.position;let w=0;if(S!==null){const D=S.array;w=S.version;for(let P=0,R=D.length;P<R;P+=3){const U=D[P+0],F=D[P+1],O=D[P+2];v.push(U,F,F,O,O,U)}}else if(b!==void 0){const D=b.array;w=b.version;for(let P=0,R=D.length/3-1;P<R;P+=3){const U=P+0,F=P+1,O=P+2;v.push(U,F,F,O,O,U)}}else return;const x=new(ph(v)?xh:vh)(v,1);x.version=w;const m=l.get(_);m&&t.remove(m),l.set(_,x)}function g(_){const v=l.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&d(_)}else d(_);return l.get(_)}return{get:u,update:f,getWireframeAttribute:g}}function Zm(s,t,e){let r;function o(v){r=v}let l,h;function u(v){l=v.type,h=v.bytesPerElement}function f(v,S){s.drawElements(r,S,l,v*h),e.update(S,r,1)}function d(v,S,b){b!==0&&(s.drawElementsInstanced(r,S,l,v*h,b),e.update(S,r,b))}function g(v,S,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,v,0,b);let x=0;for(let m=0;m<b;m++)x+=S[m];e.update(x,r,1)}function _(v,S,b,w){if(b===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<v.length;m++)d(v[m]/h,S[m],w[m]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,l,v,0,w,0,b);let m=0;for(let D=0;D<b;D++)m+=S[D]*w[D];e.update(m,r,1)}}this.setMode=o,this.setIndex=u,this.render=f,this.renderInstances=d,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function qm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,h,u){switch(e.calls++,h){case s.TRIANGLES:e.triangles+=u*(l/3);break;case s.LINES:e.lines+=u*(l/2);break;case s.LINE_STRIP:e.lines+=u*(l-1);break;case s.LINE_LOOP:e.lines+=u*l;break;case s.POINTS:e.points+=u*l;break;default:de("WebGLInfo: Unknown draw mode:",h);break}}function o(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:o,update:r}}function Ym(s,t,e){const r=new WeakMap,o=new Re;function l(h,u,f){const d=h.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let v=r.get(u);if(v===void 0||v.count!==_){let A=function(){Z.dispose(),r.delete(u),u.removeEventListener("dispose",A)};var S=A;v!==void 0&&v.texture.dispose();const b=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let R=0;b===!0&&(R=1),w===!0&&(R=2),x===!0&&(R=3);let U=u.attributes.position.count*R,F=1;U>t.maxTextureSize&&(F=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const O=new Float32Array(U*F*4*_),Z=new mh(O,U,F,_);Z.type=Dn,Z.needsUpdate=!0;const T=R*4;for(let B=0;B<_;B++){const J=m[B],Q=D[B],rt=P[B],st=U*F*4*B;for(let tt=0;tt<J.count;tt++){const q=tt*T;b===!0&&(o.fromBufferAttribute(J,tt),O[st+q+0]=o.x,O[st+q+1]=o.y,O[st+q+2]=o.z,O[st+q+3]=0),w===!0&&(o.fromBufferAttribute(Q,tt),O[st+q+4]=o.x,O[st+q+5]=o.y,O[st+q+6]=o.z,O[st+q+7]=0),x===!0&&(o.fromBufferAttribute(rt,tt),O[st+q+8]=o.x,O[st+q+9]=o.y,O[st+q+10]=o.z,O[st+q+11]=rt.itemSize===4?o.w:1)}}v={count:_,texture:Z,size:new xe(U,F)},r.set(u,v),u.addEventListener("dispose",A)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)f.getUniforms().setValue(s,"morphTexture",h.morphTexture,e);else{let b=0;for(let x=0;x<d.length;x++)b+=d[x];const w=u.morphTargetsRelative?1:1-b;f.getUniforms().setValue(s,"morphTargetBaseInfluence",w),f.getUniforms().setValue(s,"morphTargetInfluences",d)}f.getUniforms().setValue(s,"morphTargetsTexture",v.texture,e),f.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:l}}function Km(s,t,e,r){let o=new WeakMap;function l(f){const d=r.render.frame,g=f.geometry,_=t.get(f,g);if(o.get(_)!==d&&(t.update(_),o.set(_,d)),f.isInstancedMesh&&(f.hasEventListener("dispose",u)===!1&&f.addEventListener("dispose",u),o.get(f)!==d&&(e.update(f.instanceMatrix,s.ARRAY_BUFFER),f.instanceColor!==null&&e.update(f.instanceColor,s.ARRAY_BUFFER),o.set(f,d))),f.isSkinnedMesh){const v=f.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return _}function h(){o=new WeakMap}function u(f){const d=f.target;d.removeEventListener("dispose",u),e.remove(d.instanceMatrix),d.instanceColor!==null&&e.remove(d.instanceColor)}return{update:l,dispose:h}}const jm={[Qc]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[eh]:"CINEON_TONE_MAPPING",[nh]:"ACES_FILMIC_TONE_MAPPING",[rh]:"AGX_TONE_MAPPING",[sh]:"NEUTRAL_TONE_MAPPING",[ih]:"CUSTOM_TONE_MAPPING"};function Jm(s,t,e,r,o){const l=new Nn(t,e,{type:s,depthBuffer:r,stencilBuffer:o}),h=new Nn(t,e,{type:ei,depthBuffer:!1,stencilBuffer:!1}),u=new ri;u.setAttribute("position",new ti([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new ti([0,2,0,0,2,0],2));const f=new Hf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new bn(u,f),g=new ol(-1,1,1,-1,0,1);let _=null,v=null,S=!1,b,w=null,x=[],m=!1;this.setSize=function(D,P){l.setSize(D,P),h.setSize(D,P);for(let R=0;R<x.length;R++){const U=x[R];U.setSize&&U.setSize(D,P)}},this.setEffects=function(D){x=D,m=x.length>0&&x[0].isRenderPass===!0;const P=l.width,R=l.height;for(let U=0;U<x.length;U++){const F=x[U];F.setSize&&F.setSize(P,R)}},this.begin=function(D,P){if(S||D.toneMapping===Un&&x.length===0)return!1;if(w=P,P!==null){const R=P.width,U=P.height;(l.width!==R||l.height!==U)&&this.setSize(R,U)}return m===!1&&D.setRenderTarget(l),b=D.toneMapping,D.toneMapping=Un,!0},this.hasRenderPass=function(){return m},this.end=function(D,P){D.toneMapping=b,S=!0;let R=l,U=h;for(let F=0;F<x.length;F++){const O=x[F];if(O.enabled!==!1&&(O.render(D,U,R,P),O.needsSwap!==!1)){const Z=R;R=U,U=Z}}if(_!==D.outputColorSpace||v!==D.toneMapping){_=D.outputColorSpace,v=D.toneMapping,f.defines={},fe.getTransfer(_)===ye&&(f.defines.SRGB_TRANSFER="");const F=jm[v];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=R.texture,D.setRenderTarget(w),D.render(d,g),w=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),h.dispose(),u.dispose(),f.dispose()}}const Ah=new $e,Wa=new Hr(1,1),Ch=new mh,Ph=new gf,Rh=new Mh,Ac=[],Cc=[],Pc=new Float32Array(16),Rc=new Float32Array(9),Lc=new Float32Array(4);function mr(s,t,e){const r=s[0];if(r<=0||r>0)return s;const o=t*e;let l=Ac[o];if(l===void 0&&(l=new Float32Array(o),Ac[o]=l),t!==0){r.toArray(l,0);for(let h=1,u=0;h!==t;++h)u+=e,s[h].toArray(l,u)}return l}function Be(s,t){if(s.length!==t.length)return!1;for(let e=0,r=s.length;e<r;e++)if(s[e]!==t[e])return!1;return!0}function ze(s,t){for(let e=0,r=t.length;e<r;e++)s[e]=t[e]}function Xs(s,t){let e=Cc[t];e===void 0&&(e=new Int32Array(t),Cc[t]=e);for(let r=0;r!==t;++r)e[r]=s.allocateTextureUnit();return e}function $m(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Qm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2fv(this.addr,t),ze(e,t)}}function t_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;s.uniform3fv(this.addr,t),ze(e,t)}}function e_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4fv(this.addr,t),ze(e,t)}}function n_(s,t){const e=this.cache,r=t.elements;if(r===void 0){if(Be(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,r))return;Lc.set(r),s.uniformMatrix2fv(this.addr,!1,Lc),ze(e,r)}}function i_(s,t){const e=this.cache,r=t.elements;if(r===void 0){if(Be(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,r))return;Rc.set(r),s.uniformMatrix3fv(this.addr,!1,Rc),ze(e,r)}}function r_(s,t){const e=this.cache,r=t.elements;if(r===void 0){if(Be(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Be(e,r))return;Pc.set(r),s.uniformMatrix4fv(this.addr,!1,Pc),ze(e,r)}}function s_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function o_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2iv(this.addr,t),ze(e,t)}}function a_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3iv(this.addr,t),ze(e,t)}}function l_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4iv(this.addr,t),ze(e,t)}}function c_(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function h_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;s.uniform2uiv(this.addr,t),ze(e,t)}}function u_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;s.uniform3uiv(this.addr,t),ze(e,t)}}function f_(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;s.uniform4uiv(this.addr,t),ze(e,t)}}function d_(s,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(Wa.compareFunction=e.isReversedDepthBuffer()?nl:el,l=Wa):l=Ah,e.setTexture2D(t||l,o)}function p_(s,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),e.setTexture3D(t||Ph,o)}function m_(s,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),e.setTextureCube(t||Rh,o)}function __(s,t,e){const r=this.cache,o=e.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),e.setTexture2DArray(t||Ch,o)}function g_(s){switch(s){case 5126:return $m;case 35664:return Qm;case 35665:return t_;case 35666:return e_;case 35674:return n_;case 35675:return i_;case 35676:return r_;case 5124:case 35670:return s_;case 35667:case 35671:return o_;case 35668:case 35672:return a_;case 35669:case 35673:return l_;case 5125:return c_;case 36294:return h_;case 36295:return u_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return d_;case 35679:case 36299:case 36307:return p_;case 35680:case 36300:case 36308:case 36293:return m_;case 36289:case 36303:case 36311:case 36292:return __}}function v_(s,t){s.uniform1fv(this.addr,t)}function x_(s,t){const e=mr(t,this.size,2);s.uniform2fv(this.addr,e)}function y_(s,t){const e=mr(t,this.size,3);s.uniform3fv(this.addr,e)}function S_(s,t){const e=mr(t,this.size,4);s.uniform4fv(this.addr,e)}function M_(s,t){const e=mr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function E_(s,t){const e=mr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function T_(s,t){const e=mr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function b_(s,t){s.uniform1iv(this.addr,t)}function w_(s,t){s.uniform2iv(this.addr,t)}function A_(s,t){s.uniform3iv(this.addr,t)}function C_(s,t){s.uniform4iv(this.addr,t)}function P_(s,t){s.uniform1uiv(this.addr,t)}function R_(s,t){s.uniform2uiv(this.addr,t)}function L_(s,t){s.uniform3uiv(this.addr,t)}function D_(s,t){s.uniform4uiv(this.addr,t)}function I_(s,t,e){const r=this.cache,o=t.length,l=Xs(e,o);Be(r,l)||(s.uniform1iv(this.addr,l),ze(r,l));let h;this.type===s.SAMPLER_2D_SHADOW?h=Wa:h=Ah;for(let u=0;u!==o;++u)e.setTexture2D(t[u]||h,l[u])}function U_(s,t,e){const r=this.cache,o=t.length,l=Xs(e,o);Be(r,l)||(s.uniform1iv(this.addr,l),ze(r,l));for(let h=0;h!==o;++h)e.setTexture3D(t[h]||Ph,l[h])}function N_(s,t,e){const r=this.cache,o=t.length,l=Xs(e,o);Be(r,l)||(s.uniform1iv(this.addr,l),ze(r,l));for(let h=0;h!==o;++h)e.setTextureCube(t[h]||Rh,l[h])}function F_(s,t,e){const r=this.cache,o=t.length,l=Xs(e,o);Be(r,l)||(s.uniform1iv(this.addr,l),ze(r,l));for(let h=0;h!==o;++h)e.setTexture2DArray(t[h]||Ch,l[h])}function O_(s){switch(s){case 5126:return v_;case 35664:return x_;case 35665:return y_;case 35666:return S_;case 35674:return M_;case 35675:return E_;case 35676:return T_;case 5124:case 35670:return b_;case 35667:case 35671:return w_;case 35668:case 35672:return A_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return R_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return I_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return N_;case 36289:case 36303:case 36311:case 36292:return F_}}class B_{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.setValue=g_(e.type)}}class z_{constructor(t,e,r){this.id=t,this.addr=r,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=O_(e.type)}}class k_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,r){const o=this.seq;for(let l=0,h=o.length;l!==h;++l){const u=o[l];u.setValue(t,e[u.id],r)}}}const Yo=/(\w+)(\])?(\[|\.)?/g;function Dc(s,t){s.seq.push(t),s.map[t.id]=t}function V_(s,t,e){const r=s.name,o=r.length;for(Yo.lastIndex=0;;){const l=Yo.exec(r),h=Yo.lastIndex;let u=l[1];const f=l[2]==="]",d=l[3];if(f&&(u=u|0),d===void 0||d==="["&&h+2===o){Dc(e,d===void 0?new B_(u,s,t):new z_(u,s,t));break}else{let _=e.map[u];_===void 0&&(_=new k_(u),Dc(e,_)),e=_}}}class Ns{constructor(t,e){this.seq=[],this.map={};const r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const u=t.getActiveUniform(e,h),f=t.getUniformLocation(e,u.name);V_(u,f,this)}const o=[],l=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(h):l.push(h);o.length>0&&(this.seq=o.concat(l))}setValue(t,e,r,o){const l=this.map[e];l!==void 0&&l.setValue(t,r,o)}setOptional(t,e,r){const o=e[r];o!==void 0&&this.setValue(t,r,o)}static upload(t,e,r,o){for(let l=0,h=e.length;l!==h;++l){const u=e[l],f=r[u.id];f.needsUpdate!==!1&&u.setValue(t,f.value,o)}}static seqWithValue(t,e){const r=[];for(let o=0,l=t.length;o!==l;++o){const h=t[o];h.id in e&&r.push(h)}return r}}function Ic(s,t,e){const r=s.createShader(t);return s.shaderSource(r,e),s.compileShader(r),r}const H_=37297;let G_=0;function W_(s,t){const e=s.split(`
`),r=[],o=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let h=o;h<l;h++){const u=h+1;r.push(`${u===t?">":" "} ${u}: ${e[h]}`)}return r.join(`
`)}const Uc=new ee;function X_(s){fe._getMatrix(Uc,fe.workingColorSpace,s);const t=`mat3( ${Uc.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(s)){case Os:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Nc(s,t,e){const r=s.getShaderParameter(t,s.COMPILE_STATUS),l=(s.getShaderInfoLog(t)||"").trim();if(r&&l==="")return"";const h=/ERROR: 0:(\d+)/.exec(l);if(h){const u=parseInt(h[1]);return e.toUpperCase()+`

`+l+`

`+W_(s.getShaderSource(t),u)}else return l}function Z_(s,t){const e=X_(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const q_={[Qc]:"Linear",[th]:"Reinhard",[eh]:"Cineon",[nh]:"ACESFilmic",[rh]:"AgX",[sh]:"Neutral",[ih]:"Custom"};function Y_(s,t){const e=q_[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ps=new Y;function K_(){fe.getLuminanceCoefficients(Ps);const s=Ps.x.toFixed(4),t=Ps.y.toFixed(4),e=Ps.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function J_(s){const t=[];for(const e in s){const r=s[e];r!==!1&&t.push("#define "+e+" "+r)}return t.join(`
`)}function $_(s,t){const e={},r=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(t,o),h=l.name;let u=1;l.type===s.FLOAT_MAT2&&(u=2),l.type===s.FLOAT_MAT3&&(u=3),l.type===s.FLOAT_MAT4&&(u=4),e[h]={type:l.type,location:s.getAttribLocation(t,h),locationSize:u}}return e}function Fr(s){return s!==""}function Fc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Oc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Q_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(s){return s.replace(Q_,eg)}const tg=new Map;function eg(s,t){let e=ne[t];if(e===void 0){const r=tg.get(t);if(r!==void 0)e=ne[r],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return Xa(e)}const ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bc(s){return s.replace(ng,ig)}function ig(s,t,e,r){let o="";for(let l=parseInt(t);l<parseInt(e);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function zc(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const rg={[Rs]:"SHADOWMAP_TYPE_PCF",[Ur]:"SHADOWMAP_TYPE_VSM"};function sg(s){return rg[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const og={[Ii]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE_UV"};function ag(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":og[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const lg={[lr]:"ENVMAP_MODE_REFRACTION"};function cg(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":lg[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hg={[$c]:"ENVMAP_BLENDING_MULTIPLY",[ju]:"ENVMAP_BLENDING_MIX",[Ju]:"ENVMAP_BLENDING_ADD"};function ug(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":hg[s.combine]||"ENVMAP_BLENDING_NONE"}function fg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:r,maxMip:e}}function dg(s,t,e,r){const o=s.getContext(),l=e.defines;let h=e.vertexShader,u=e.fragmentShader;const f=sg(e),d=ag(e),g=cg(e),_=ug(e),v=fg(e),S=j_(e),b=J_(l),w=o.createProgram();let x,m,D=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Fr).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b].filter(Fr).join(`
`),m.length>0&&(m+=`
`)):(x=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),m=[zc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,b,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.envMap?"#define "+g:"",e.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+f:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?ne.tonemapping_pars_fragment:"",e.toneMapping!==Un?Y_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Z_("linearToOutputTexel",e.outputColorSpace),K_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),h=Xa(h),h=Fc(h,e),h=Oc(h,e),u=Xa(u),u=Fc(u,e),u=Oc(u,e),h=Bc(h),u=Bc(u),e.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===Ql?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ql?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const P=D+x+h,R=D+m+u,U=Ic(o,o.VERTEX_SHADER,P),F=Ic(o,o.FRAGMENT_SHADER,R);o.attachShader(w,U),o.attachShader(w,F),e.index0AttributeName!==void 0?o.bindAttribLocation(w,0,e.index0AttributeName):e.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function O(B){if(s.debug.checkShaderErrors){const J=o.getProgramInfoLog(w)||"",Q=o.getShaderInfoLog(U)||"",rt=o.getShaderInfoLog(F)||"",st=J.trim(),tt=Q.trim(),q=rt.trim();let K=!0,Et=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,U,F);else{const it=Nc(o,U,"vertex"),ft=Nc(o,F,"fragment");de("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+st+`
`+it+`
`+ft)}else st!==""?Jt("WebGLProgram: Program Info Log:",st):(tt===""||q==="")&&(Et=!1);Et&&(B.diagnostics={runnable:K,programLog:st,vertexShader:{log:tt,prefix:x},fragmentShader:{log:q,prefix:m}})}o.deleteShader(U),o.deleteShader(F),Z=new Ns(o,w),T=$_(o,w)}let Z;this.getUniforms=function(){return Z===void 0&&O(this),Z};let T;this.getAttributes=function(){return T===void 0&&O(this),T};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(w,H_)),A},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=G_++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=U,this.fragmentShader=F,this}let pg=0;class mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,r=t.fragmentShader,o=this._getShaderStage(e),l=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(o)===!1&&(h.add(o),o.usedTimes++),h.has(l)===!1&&(h.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const r of e)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let r=e.get(t);return r===void 0&&(r=new Set,e.set(t,r)),r}_getShaderStage(t){const e=this.shaderCache;let r=e.get(t);return r===void 0&&(r=new _g(t),e.set(t,r)),r}}class _g{constructor(t){this.id=pg++,this.code=t,this.usedTimes=0}}function gg(s,t,e,r,o,l,h){const u=new _h,f=new mg,d=new Set,g=[],_=new Map,v=o.logarithmicDepthBuffer;let S=o.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return d.add(T),T===0?"uv":`uv${T}`}function x(T,A,B,J,Q){const rt=J.fog,st=Q.geometry,tt=T.isMeshStandardMaterial?J.environment:null,q=(T.isMeshStandardMaterial?e:t).get(T.envMap||tt),K=q&&q.mapping===Vs?q.image.height:null,Et=b[T.type];T.precision!==null&&(S=o.getMaxPrecision(T.precision),S!==T.precision&&Jt("WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const it=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ft=it!==void 0?it.length:0;let Ht=0;st.morphAttributes.position!==void 0&&(Ht=1),st.morphAttributes.normal!==void 0&&(Ht=2),st.morphAttributes.color!==void 0&&(Ht=3);let kt,Kt,Vt,W;if(Et){const me=Ln[Et];kt=me.vertexShader,Kt=me.fragmentShader}else kt=T.vertexShader,Kt=T.fragmentShader,f.update(T),Vt=f.getVertexShaderID(T),W=f.getFragmentShaderID(T);const at=s.getRenderTarget(),Tt=s.state.buffers.depth.getReversed(),jt=Q.isInstancedMesh===!0,Lt=Q.isBatchedMesh===!0,se=!!T.map,Ae=!!T.matcap,re=!!q,pe=!!T.aoMap,_e=!!T.lightMap,$t=!!T.bumpMap,Ce=!!T.normalMap,N=!!T.displacementMap,Pe=!!T.emissiveMap,ue=!!T.metalnessMap,ge=!!T.roughnessMap,Ut=T.anisotropy>0,C=T.clearcoat>0,y=T.dispersion>0,k=T.iridescence>0,nt=T.sheen>0,lt=T.transmission>0,et=Ut&&!!T.anisotropyMap,Ft=C&&!!T.clearcoatMap,gt=C&&!!T.clearcoatNormalMap,Dt=C&&!!T.clearcoatRoughnessMap,Gt=k&&!!T.iridescenceMap,ht=k&&!!T.iridescenceThicknessMap,vt=nt&&!!T.sheenColorMap,Rt=nt&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,mt=!!T.specularColorMap,te=!!T.specularIntensityMap,z=lt&&!!T.transmissionMap,St=lt&&!!T.thicknessMap,pt=!!T.gradientMap,wt=!!T.alphaMap,ut=T.alphaTest>0,ot=!!T.alphaHash,xt=!!T.extensions;let Zt=Un;T.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(Zt=s.toneMapping);const Me={shaderID:Et,shaderType:T.type,shaderName:T.name,vertexShader:kt,fragmentShader:Kt,defines:T.defines,customVertexShaderID:Vt,customFragmentShaderID:W,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:Lt,batchingColor:Lt&&Q._colorsTexture!==null,instancing:jt,instancingColor:jt&&Q.instanceColor!==null,instancingMorph:jt&&Q.morphTexture!==null,outputColorSpace:at===null?s.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:hr,alphaToCoverage:!!T.alphaToCoverage,map:se,matcap:Ae,envMap:re,envMapMode:re&&q.mapping,envMapCubeUVHeight:K,aoMap:pe,lightMap:_e,bumpMap:$t,normalMap:Ce,displacementMap:N,emissiveMap:Pe,normalMapObjectSpace:Ce&&T.normalMapType===ef,normalMapTangentSpace:Ce&&T.normalMapType===tf,metalnessMap:ue,roughnessMap:ge,anisotropy:Ut,anisotropyMap:et,clearcoat:C,clearcoatMap:Ft,clearcoatNormalMap:gt,clearcoatRoughnessMap:Dt,dispersion:y,iridescence:k,iridescenceMap:Gt,iridescenceThicknessMap:ht,sheen:nt,sheenColorMap:vt,sheenRoughnessMap:Rt,specularMap:Nt,specularColorMap:mt,specularIntensityMap:te,transmission:lt,transmissionMap:z,thicknessMap:St,gradientMap:pt,opaque:T.transparent===!1&&T.blending===sr&&T.alphaToCoverage===!1,alphaMap:wt,alphaTest:ut,alphaHash:ot,combine:T.combine,mapUv:se&&w(T.map.channel),aoMapUv:pe&&w(T.aoMap.channel),lightMapUv:_e&&w(T.lightMap.channel),bumpMapUv:$t&&w(T.bumpMap.channel),normalMapUv:Ce&&w(T.normalMap.channel),displacementMapUv:N&&w(T.displacementMap.channel),emissiveMapUv:Pe&&w(T.emissiveMap.channel),metalnessMapUv:ue&&w(T.metalnessMap.channel),roughnessMapUv:ge&&w(T.roughnessMap.channel),anisotropyMapUv:et&&w(T.anisotropyMap.channel),clearcoatMapUv:Ft&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:gt&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&w(T.sheenRoughnessMap.channel),specularMapUv:Nt&&w(T.specularMap.channel),specularColorMapUv:mt&&w(T.specularColorMap.channel),specularIntensityMapUv:te&&w(T.specularIntensityMap.channel),transmissionMapUv:z&&w(T.transmissionMap.channel),thicknessMapUv:St&&w(T.thicknessMap.channel),alphaMapUv:wt&&w(T.alphaMap.channel),vertexTangents:!!st.attributes.tangent&&(Ce||Ut),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!st.attributes.uv&&(se||wt),fog:!!rt,useFog:T.fog===!0,fogExp2:!!rt&&rt.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Tt,skinning:Q.isSkinnedMesh===!0,morphTargets:st.morphAttributes.position!==void 0,morphNormals:st.morphAttributes.normal!==void 0,morphColors:st.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Ht,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Zt,decodeVideoTexture:se&&T.map.isVideoTexture===!0&&fe.getTransfer(T.map.colorSpace)===ye,decodeVideoTextureEmissive:Pe&&T.emissiveMap.isVideoTexture===!0&&fe.getTransfer(T.emissiveMap.colorSpace)===ye,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Kn,flipSided:T.side===rn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:xt&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&T.extensions.multiDraw===!0||Lt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Me.vertexUv1s=d.has(1),Me.vertexUv2s=d.has(2),Me.vertexUv3s=d.has(3),d.clear(),Me}function m(T){const A=[];if(T.shaderID?A.push(T.shaderID):(A.push(T.customVertexShaderID),A.push(T.customFragmentShaderID)),T.defines!==void 0)for(const B in T.defines)A.push(B),A.push(T.defines[B]);return T.isRawShaderMaterial===!1&&(D(A,T),P(A,T),A.push(s.outputColorSpace)),A.push(T.customProgramCacheKey),A.join()}function D(T,A){T.push(A.precision),T.push(A.outputColorSpace),T.push(A.envMapMode),T.push(A.envMapCubeUVHeight),T.push(A.mapUv),T.push(A.alphaMapUv),T.push(A.lightMapUv),T.push(A.aoMapUv),T.push(A.bumpMapUv),T.push(A.normalMapUv),T.push(A.displacementMapUv),T.push(A.emissiveMapUv),T.push(A.metalnessMapUv),T.push(A.roughnessMapUv),T.push(A.anisotropyMapUv),T.push(A.clearcoatMapUv),T.push(A.clearcoatNormalMapUv),T.push(A.clearcoatRoughnessMapUv),T.push(A.iridescenceMapUv),T.push(A.iridescenceThicknessMapUv),T.push(A.sheenColorMapUv),T.push(A.sheenRoughnessMapUv),T.push(A.specularMapUv),T.push(A.specularColorMapUv),T.push(A.specularIntensityMapUv),T.push(A.transmissionMapUv),T.push(A.thicknessMapUv),T.push(A.combine),T.push(A.fogExp2),T.push(A.sizeAttenuation),T.push(A.morphTargetsCount),T.push(A.morphAttributeCount),T.push(A.numDirLights),T.push(A.numPointLights),T.push(A.numSpotLights),T.push(A.numSpotLightMaps),T.push(A.numHemiLights),T.push(A.numRectAreaLights),T.push(A.numDirLightShadows),T.push(A.numPointLightShadows),T.push(A.numSpotLightShadows),T.push(A.numSpotLightShadowsWithMaps),T.push(A.numLightProbes),T.push(A.shadowMapType),T.push(A.toneMapping),T.push(A.numClippingPlanes),T.push(A.numClipIntersection),T.push(A.depthPacking)}function P(T,A){u.disableAll(),A.instancing&&u.enable(0),A.instancingColor&&u.enable(1),A.instancingMorph&&u.enable(2),A.matcap&&u.enable(3),A.envMap&&u.enable(4),A.normalMapObjectSpace&&u.enable(5),A.normalMapTangentSpace&&u.enable(6),A.clearcoat&&u.enable(7),A.iridescence&&u.enable(8),A.alphaTest&&u.enable(9),A.vertexColors&&u.enable(10),A.vertexAlphas&&u.enable(11),A.vertexUv1s&&u.enable(12),A.vertexUv2s&&u.enable(13),A.vertexUv3s&&u.enable(14),A.vertexTangents&&u.enable(15),A.anisotropy&&u.enable(16),A.alphaHash&&u.enable(17),A.batching&&u.enable(18),A.dispersion&&u.enable(19),A.batchingColor&&u.enable(20),A.gradientMap&&u.enable(21),T.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.reversedDepthBuffer&&u.enable(4),A.skinning&&u.enable(5),A.morphTargets&&u.enable(6),A.morphNormals&&u.enable(7),A.morphColors&&u.enable(8),A.premultipliedAlpha&&u.enable(9),A.shadowMapEnabled&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),A.decodeVideoTexture&&u.enable(19),A.decodeVideoTextureEmissive&&u.enable(20),A.alphaToCoverage&&u.enable(21),T.push(u.mask)}function R(T){const A=b[T.type];let B;if(A){const J=Ln[A];B=Lf.clone(J.uniforms)}else B=T.uniforms;return B}function U(T,A){let B=_.get(A);return B!==void 0?++B.usedTimes:(B=new dg(s,A,T,l),g.push(B),_.set(A,B)),B}function F(T){if(--T.usedTimes===0){const A=g.indexOf(T);g[A]=g[g.length-1],g.pop(),_.delete(T.cacheKey),T.destroy()}}function O(T){f.remove(T)}function Z(){f.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:R,acquireProgram:U,releaseProgram:F,releaseShaderCache:O,programs:g,dispose:Z}}function vg(){let s=new WeakMap;function t(h){return s.has(h)}function e(h){let u=s.get(h);return u===void 0&&(u={},s.set(h,u)),u}function r(h){s.delete(h)}function o(h,u,f){s.get(h)[u]=f}function l(){s=new WeakMap}return{has:t,get:e,remove:r,update:o,dispose:l}}function xg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function kc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Vc(){const s=[];let t=0;const e=[],r=[],o=[];function l(){t=0,e.length=0,r.length=0,o.length=0}function h(_,v,S,b,w,x){let m=s[t];return m===void 0?(m={id:_.id,object:_,geometry:v,material:S,groupOrder:b,renderOrder:_.renderOrder,z:w,group:x},s[t]=m):(m.id=_.id,m.object=_,m.geometry=v,m.material=S,m.groupOrder=b,m.renderOrder=_.renderOrder,m.z=w,m.group=x),t++,m}function u(_,v,S,b,w,x){const m=h(_,v,S,b,w,x);S.transmission>0?r.push(m):S.transparent===!0?o.push(m):e.push(m)}function f(_,v,S,b,w,x){const m=h(_,v,S,b,w,x);S.transmission>0?r.unshift(m):S.transparent===!0?o.unshift(m):e.unshift(m)}function d(_,v){e.length>1&&e.sort(_||xg),r.length>1&&r.sort(v||kc),o.length>1&&o.sort(v||kc)}function g(){for(let _=t,v=s.length;_<v;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:e,transmissive:r,transparent:o,init:l,push:u,unshift:f,finish:g,sort:d}}function yg(){let s=new WeakMap;function t(r,o){const l=s.get(r);let h;return l===void 0?(h=new Vc,s.set(r,[h])):o>=l.length?(h=new Vc,l.push(h)):h=l[o],h}function e(){s=new WeakMap}return{get:t,dispose:e}}function Sg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new Se};break;case"SpotLight":e={position:new Y,direction:new Y,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new Se,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":e={color:new Se,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[t.id]=e,e}}}function Mg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Eg=0;function Tg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function bg(s){const t=new Sg,e=Mg(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new Y);const o=new Y,l=new Le,h=new Le;function u(d){let g=0,_=0,v=0;for(let T=0;T<9;T++)r.probe[T].set(0,0,0);let S=0,b=0,w=0,x=0,m=0,D=0,P=0,R=0,U=0,F=0,O=0;d.sort(Tg);for(let T=0,A=d.length;T<A;T++){const B=d[T],J=B.color,Q=B.intensity,rt=B.distance;let st=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===cr?st=B.shadow.map.texture:st=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)g+=J.r*Q,_+=J.g*Q,v+=J.b*Q;else if(B.isLightProbe){for(let tt=0;tt<9;tt++)r.probe[tt].addScaledVector(B.sh.coefficients[tt],Q);O++}else if(B.isDirectionalLight){const tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const q=B.shadow,K=e.get(B);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,r.directionalShadow[S]=K,r.directionalShadowMap[S]=st,r.directionalShadowMatrix[S]=B.shadow.matrix,D++}r.directional[S]=tt,S++}else if(B.isSpotLight){const tt=t.get(B);tt.position.setFromMatrixPosition(B.matrixWorld),tt.color.copy(J).multiplyScalar(Q),tt.distance=rt,tt.coneCos=Math.cos(B.angle),tt.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),tt.decay=B.decay,r.spot[w]=tt;const q=B.shadow;if(B.map&&(r.spotLightMap[U]=B.map,U++,q.updateMatrices(B),B.castShadow&&F++),r.spotLightMatrix[w]=q.matrix,B.castShadow){const K=e.get(B);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,r.spotShadow[w]=K,r.spotShadowMap[w]=st,R++}w++}else if(B.isRectAreaLight){const tt=t.get(B);tt.color.copy(J).multiplyScalar(Q),tt.halfWidth.set(B.width*.5,0,0),tt.halfHeight.set(0,B.height*.5,0),r.rectArea[x]=tt,x++}else if(B.isPointLight){const tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),tt.distance=B.distance,tt.decay=B.decay,B.castShadow){const q=B.shadow,K=e.get(B);K.shadowIntensity=q.intensity,K.shadowBias=q.bias,K.shadowNormalBias=q.normalBias,K.shadowRadius=q.radius,K.shadowMapSize=q.mapSize,K.shadowCameraNear=q.camera.near,K.shadowCameraFar=q.camera.far,r.pointShadow[b]=K,r.pointShadowMap[b]=st,r.pointShadowMatrix[b]=B.shadow.matrix,P++}r.point[b]=tt,b++}else if(B.isHemisphereLight){const tt=t.get(B);tt.skyColor.copy(B.color).multiplyScalar(Q),tt.groundColor.copy(B.groundColor).multiplyScalar(Q),r.hemi[m]=tt,m++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Mt.LTC_FLOAT_1,r.rectAreaLTC2=Mt.LTC_FLOAT_2):(r.rectAreaLTC1=Mt.LTC_HALF_1,r.rectAreaLTC2=Mt.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=v;const Z=r.hash;(Z.directionalLength!==S||Z.pointLength!==b||Z.spotLength!==w||Z.rectAreaLength!==x||Z.hemiLength!==m||Z.numDirectionalShadows!==D||Z.numPointShadows!==P||Z.numSpotShadows!==R||Z.numSpotMaps!==U||Z.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=x,r.point.length=b,r.hemi.length=m,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+U-F,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=O,Z.directionalLength=S,Z.pointLength=b,Z.spotLength=w,Z.rectAreaLength=x,Z.hemiLength=m,Z.numDirectionalShadows=D,Z.numPointShadows=P,Z.numSpotShadows=R,Z.numSpotMaps=U,Z.numLightProbes=O,r.version=Eg++)}function f(d,g){let _=0,v=0,S=0,b=0,w=0;const x=g.matrixWorldInverse;for(let m=0,D=d.length;m<D;m++){const P=d[m];if(P.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),_++}else if(P.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(x),S++}else if(P.isRectAreaLight){const R=r.rectArea[b];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(x),h.identity(),l.copy(P.matrixWorld),l.premultiply(x),h.extractRotation(l),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(h),R.halfHeight.applyMatrix4(h),b++}else if(P.isPointLight){const R=r.point[v];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(x),v++}else if(P.isHemisphereLight){const R=r.hemi[w];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(x),w++}}}return{setup:u,setupView:f,state:r}}function Hc(s){const t=new bg(s),e=[],r=[];function o(g){d.camera=g,e.length=0,r.length=0}function l(g){e.push(g)}function h(g){r.push(g)}function u(){t.setup(e)}function f(g){t.setupView(e,g)}const d={lightsArray:e,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:u,setupLightsView:f,pushLight:l,pushShadow:h}}function wg(s){let t=new WeakMap;function e(o,l=0){const h=t.get(o);let u;return h===void 0?(u=new Hc(s),t.set(o,[u])):l>=h.length?(u=new Hc(s),h.push(u)):u=h[l],u}function r(){t=new WeakMap}return{get:e,dispose:r}}const Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cg=`uniform sampler2D shadow_pass;
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
}`,Pg=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Rg=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],Gc=new Le,Dr=new Y,Ko=new Y;function Lg(s,t,e){let r=new sl;const o=new xe,l=new xe,h=new Re,u=new Gf,f=new Wf,d={},g=e.maxTextureSize,_={[mi]:rn,[rn]:mi,[Kn]:Kn},v=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:Ag,fragmentShader:Cg}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const b=new ri;b.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new bn(b,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rs;let m=this.type;this.render=function(F,O,Z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;F.type===Lu&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),F.type=Rs);const T=s.getRenderTarget(),A=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),J=s.state;J.setBlending($n),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Q=m!==this.type;Q&&O.traverse(function(rt){rt.material&&(Array.isArray(rt.material)?rt.material.forEach(st=>st.needsUpdate=!0):rt.material.needsUpdate=!0)});for(let rt=0,st=F.length;rt<st;rt++){const tt=F[rt],q=tt.shadow;if(q===void 0){Jt("WebGLShadowMap:",tt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;o.copy(q.mapSize);const K=q.getFrameExtents();if(o.multiply(K),l.copy(q.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/K.x),o.x=l.x*K.x,q.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/K.y),o.y=l.y*K.y,q.mapSize.y=l.y)),q.map===null||Q===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Ur){if(tt.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Nn(o.x,o.y,{format:cr,type:ei,minFilter:qe,magFilter:qe,generateMipmaps:!1}),q.map.texture.name=tt.name+".shadowMap",q.map.depthTexture=new Hr(o.x,o.y,Dn),q.map.depthTexture.name=tt.name+".shadowMapDepth",q.map.depthTexture.format=ni,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=We,q.map.depthTexture.magFilter=We}else{tt.isPointLight?(q.map=new Eh(o.x),q.map.depthTexture=new Vf(o.x,On)):(q.map=new Nn(o.x,o.y),q.map.depthTexture=new Hr(o.x,o.y,On)),q.map.depthTexture.name=tt.name+".shadowMap",q.map.depthTexture.format=ni;const it=s.state.buffers.depth.getReversed();this.type===Rs?(q.map.depthTexture.compareFunction=it?nl:el,q.map.depthTexture.minFilter=qe,q.map.depthTexture.magFilter=qe):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=We,q.map.depthTexture.magFilter=We)}q.camera.updateProjectionMatrix()}const Et=q.map.isWebGLCubeRenderTarget?6:1;for(let it=0;it<Et;it++){if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,it),s.clear();else{it===0&&(s.setRenderTarget(q.map),s.clear());const ft=q.getViewport(it);h.set(l.x*ft.x,l.y*ft.y,l.x*ft.z,l.y*ft.w),J.viewport(h)}if(tt.isPointLight){const ft=q.camera,Ht=q.matrix,kt=tt.distance||ft.far;kt!==ft.far&&(ft.far=kt,ft.updateProjectionMatrix()),Dr.setFromMatrixPosition(tt.matrixWorld),ft.position.copy(Dr),Ko.copy(ft.position),Ko.add(Pg[it]),ft.up.copy(Rg[it]),ft.lookAt(Ko),ft.updateMatrixWorld(),Ht.makeTranslation(-Dr.x,-Dr.y,-Dr.z),Gc.multiplyMatrices(ft.projectionMatrix,ft.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Gc,ft.coordinateSystem,ft.reversedDepth)}else q.updateMatrices(tt);r=q.getFrustum(),R(O,Z,q.camera,tt,this.type)}q.isPointLightShadow!==!0&&this.type===Ur&&D(q,Z),q.needsUpdate=!1}m=this.type,x.needsUpdate=!1,s.setRenderTarget(T,A,B)};function D(F,O){const Z=t.update(w);v.defines.VSM_SAMPLES!==F.blurSamples&&(v.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Nn(o.x,o.y,{format:cr,type:ei})),v.uniforms.shadow_pass.value=F.map.depthTexture,v.uniforms.resolution.value=F.mapSize,v.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(O,null,Z,v,w,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(O,null,Z,S,w,null)}function P(F,O,Z,T){let A=null;const B=Z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(B!==void 0)A=B;else if(A=Z.isPointLight===!0?f:u,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const J=A.uuid,Q=O.uuid;let rt=d[J];rt===void 0&&(rt={},d[J]=rt);let st=rt[Q];st===void 0&&(st=A.clone(),rt[Q]=st,O.addEventListener("dispose",U)),A=st}if(A.visible=O.visible,A.wireframe=O.wireframe,T===Ur?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:_[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,Z.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const J=s.properties.get(A);J.light=Z}return A}function R(F,O,Z,T,A){if(F.visible===!1)return;if(F.layers.test(O.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&A===Ur)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,F.matrixWorld);const Q=t.update(F),rt=F.material;if(Array.isArray(rt)){const st=Q.groups;for(let tt=0,q=st.length;tt<q;tt++){const K=st[tt],Et=rt[K.materialIndex];if(Et&&Et.visible){const it=P(F,Et,T,A);F.onBeforeShadow(s,F,O,Z,Q,it,K),s.renderBufferDirect(Z,null,Q,it,F,K),F.onAfterShadow(s,F,O,Z,Q,it,K)}}}else if(rt.visible){const st=P(F,rt,T,A);F.onBeforeShadow(s,F,O,Z,Q,st,null),s.renderBufferDirect(Z,null,Q,st,F,null),F.onAfterShadow(s,F,O,Z,Q,st,null)}}const J=F.children;for(let Q=0,rt=J.length;Q<rt;Q++)R(J[Q],O,Z,T,A)}function U(F){F.target.removeEventListener("dispose",U);for(const Z in d){const T=d[Z],A=F.target.uuid;A in T&&(T[A].dispose(),delete T[A])}}}const Dg={[ta]:ea,[na]:sa,[ia]:oa,[ar]:ra,[ea]:ta,[sa]:na,[oa]:ia,[ra]:ar};function Ig(s,t){function e(){let z=!1;const St=new Re;let pt=null;const wt=new Re(0,0,0,0);return{setMask:function(ut){pt!==ut&&!z&&(s.colorMask(ut,ut,ut,ut),pt=ut)},setLocked:function(ut){z=ut},setClear:function(ut,ot,xt,Zt,Me){Me===!0&&(ut*=Zt,ot*=Zt,xt*=Zt),St.set(ut,ot,xt,Zt),wt.equals(St)===!1&&(s.clearColor(ut,ot,xt,Zt),wt.copy(St))},reset:function(){z=!1,pt=null,wt.set(-1,0,0,0)}}}function r(){let z=!1,St=!1,pt=null,wt=null,ut=null;return{setReversed:function(ot){if(St!==ot){const xt=t.get("EXT_clip_control");ot?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),St=ot;const Zt=ut;ut=null,this.setClear(Zt)}},getReversed:function(){return St},setTest:function(ot){ot?at(s.DEPTH_TEST):Tt(s.DEPTH_TEST)},setMask:function(ot){pt!==ot&&!z&&(s.depthMask(ot),pt=ot)},setFunc:function(ot){if(St&&(ot=Dg[ot]),wt!==ot){switch(ot){case ta:s.depthFunc(s.NEVER);break;case ea:s.depthFunc(s.ALWAYS);break;case na:s.depthFunc(s.LESS);break;case ar:s.depthFunc(s.LEQUAL);break;case ia:s.depthFunc(s.EQUAL);break;case ra:s.depthFunc(s.GEQUAL);break;case sa:s.depthFunc(s.GREATER);break;case oa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}wt=ot}},setLocked:function(ot){z=ot},setClear:function(ot){ut!==ot&&(St&&(ot=1-ot),s.clearDepth(ot),ut=ot)},reset:function(){z=!1,pt=null,wt=null,ut=null,St=!1}}}function o(){let z=!1,St=null,pt=null,wt=null,ut=null,ot=null,xt=null,Zt=null,Me=null;return{setTest:function(me){z||(me?at(s.STENCIL_TEST):Tt(s.STENCIL_TEST))},setMask:function(me){St!==me&&!z&&(s.stencilMask(me),St=me)},setFunc:function(me,tn,mn){(pt!==me||wt!==tn||ut!==mn)&&(s.stencilFunc(me,tn,mn),pt=me,wt=tn,ut=mn)},setOp:function(me,tn,mn){(ot!==me||xt!==tn||Zt!==mn)&&(s.stencilOp(me,tn,mn),ot=me,xt=tn,Zt=mn)},setLocked:function(me){z=me},setClear:function(me){Me!==me&&(s.clearStencil(me),Me=me)},reset:function(){z=!1,St=null,pt=null,wt=null,ut=null,ot=null,xt=null,Zt=null,Me=null}}}const l=new e,h=new r,u=new o,f=new WeakMap,d=new WeakMap;let g={},_={},v=new WeakMap,S=[],b=null,w=!1,x=null,m=null,D=null,P=null,R=null,U=null,F=null,O=new Se(0,0,0),Z=0,T=!1,A=null,B=null,J=null,Q=null,rt=null;const st=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,q=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),tt=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),tt=q>=2);let Et=null,it={};const ft=s.getParameter(s.SCISSOR_BOX),Ht=s.getParameter(s.VIEWPORT),kt=new Re().fromArray(ft),Kt=new Re().fromArray(Ht);function Vt(z,St,pt,wt){const ut=new Uint8Array(4),ot=s.createTexture();s.bindTexture(z,ot),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let xt=0;xt<pt;xt++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(St,0,s.RGBA,1,1,wt,0,s.RGBA,s.UNSIGNED_BYTE,ut):s.texImage2D(St+xt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ut);return ot}const W={};W[s.TEXTURE_2D]=Vt(s.TEXTURE_2D,s.TEXTURE_2D,1),W[s.TEXTURE_CUBE_MAP]=Vt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[s.TEXTURE_2D_ARRAY]=Vt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),W[s.TEXTURE_3D]=Vt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),h.setClear(1),u.setClear(0),at(s.DEPTH_TEST),h.setFunc(ar),$t(!1),Ce(ql),at(s.CULL_FACE),pe($n);function at(z){g[z]!==!0&&(s.enable(z),g[z]=!0)}function Tt(z){g[z]!==!1&&(s.disable(z),g[z]=!1)}function jt(z,St){return _[z]!==St?(s.bindFramebuffer(z,St),_[z]=St,z===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=St),z===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=St),!0):!1}function Lt(z,St){let pt=S,wt=!1;if(z){pt=v.get(St),pt===void 0&&(pt=[],v.set(St,pt));const ut=z.textures;if(pt.length!==ut.length||pt[0]!==s.COLOR_ATTACHMENT0){for(let ot=0,xt=ut.length;ot<xt;ot++)pt[ot]=s.COLOR_ATTACHMENT0+ot;pt.length=ut.length,wt=!0}}else pt[0]!==s.BACK&&(pt[0]=s.BACK,wt=!0);wt&&s.drawBuffers(pt)}function se(z){return b!==z?(s.useProgram(z),b=z,!0):!1}const Ae={[Pi]:s.FUNC_ADD,[Iu]:s.FUNC_SUBTRACT,[Uu]:s.FUNC_REVERSE_SUBTRACT};Ae[Nu]=s.MIN,Ae[Fu]=s.MAX;const re={[Ou]:s.ZERO,[Bu]:s.ONE,[zu]:s.SRC_COLOR,[$o]:s.SRC_ALPHA,[Xu]:s.SRC_ALPHA_SATURATE,[Gu]:s.DST_COLOR,[Vu]:s.DST_ALPHA,[ku]:s.ONE_MINUS_SRC_COLOR,[Qo]:s.ONE_MINUS_SRC_ALPHA,[Wu]:s.ONE_MINUS_DST_COLOR,[Hu]:s.ONE_MINUS_DST_ALPHA,[Zu]:s.CONSTANT_COLOR,[qu]:s.ONE_MINUS_CONSTANT_COLOR,[Yu]:s.CONSTANT_ALPHA,[Ku]:s.ONE_MINUS_CONSTANT_ALPHA};function pe(z,St,pt,wt,ut,ot,xt,Zt,Me,me){if(z===$n){w===!0&&(Tt(s.BLEND),w=!1);return}if(w===!1&&(at(s.BLEND),w=!0),z!==Du){if(z!==x||me!==T){if((m!==Pi||R!==Pi)&&(s.blendEquation(s.FUNC_ADD),m=Pi,R=Pi),me)switch(z){case sr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yl:s.blendFunc(s.ONE,s.ONE);break;case Kl:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case jl:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:de("WebGLState: Invalid blending: ",z);break}else switch(z){case sr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Yl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Kl:de("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:de("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:de("WebGLState: Invalid blending: ",z);break}D=null,P=null,U=null,F=null,O.set(0,0,0),Z=0,x=z,T=me}return}ut=ut||St,ot=ot||pt,xt=xt||wt,(St!==m||ut!==R)&&(s.blendEquationSeparate(Ae[St],Ae[ut]),m=St,R=ut),(pt!==D||wt!==P||ot!==U||xt!==F)&&(s.blendFuncSeparate(re[pt],re[wt],re[ot],re[xt]),D=pt,P=wt,U=ot,F=xt),(Zt.equals(O)===!1||Me!==Z)&&(s.blendColor(Zt.r,Zt.g,Zt.b,Me),O.copy(Zt),Z=Me),x=z,T=!1}function _e(z,St){z.side===Kn?Tt(s.CULL_FACE):at(s.CULL_FACE);let pt=z.side===rn;St&&(pt=!pt),$t(pt),z.blending===sr&&z.transparent===!1?pe($n):pe(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),h.setFunc(z.depthFunc),h.setTest(z.depthTest),h.setMask(z.depthWrite),l.setMask(z.colorWrite);const wt=z.stencilWrite;u.setTest(wt),wt&&(u.setMask(z.stencilWriteMask),u.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),u.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Pe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?at(s.SAMPLE_ALPHA_TO_COVERAGE):Tt(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(z){A!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),A=z)}function Ce(z){z!==Pu?(at(s.CULL_FACE),z!==B&&(z===ql?s.cullFace(s.BACK):z===Ru?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Tt(s.CULL_FACE),B=z}function N(z){z!==J&&(tt&&s.lineWidth(z),J=z)}function Pe(z,St,pt){z?(at(s.POLYGON_OFFSET_FILL),(Q!==St||rt!==pt)&&(s.polygonOffset(St,pt),Q=St,rt=pt)):Tt(s.POLYGON_OFFSET_FILL)}function ue(z){z?at(s.SCISSOR_TEST):Tt(s.SCISSOR_TEST)}function ge(z){z===void 0&&(z=s.TEXTURE0+st-1),Et!==z&&(s.activeTexture(z),Et=z)}function Ut(z,St,pt){pt===void 0&&(Et===null?pt=s.TEXTURE0+st-1:pt=Et);let wt=it[pt];wt===void 0&&(wt={type:void 0,texture:void 0},it[pt]=wt),(wt.type!==z||wt.texture!==St)&&(Et!==pt&&(s.activeTexture(pt),Et=pt),s.bindTexture(z,St||W[z]),wt.type=z,wt.texture=St)}function C(){const z=it[Et];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function y(){try{s.compressedTexImage2D(...arguments)}catch(z){de("WebGLState:",z)}}function k(){try{s.compressedTexImage3D(...arguments)}catch(z){de("WebGLState:",z)}}function nt(){try{s.texSubImage2D(...arguments)}catch(z){de("WebGLState:",z)}}function lt(){try{s.texSubImage3D(...arguments)}catch(z){de("WebGLState:",z)}}function et(){try{s.compressedTexSubImage2D(...arguments)}catch(z){de("WebGLState:",z)}}function Ft(){try{s.compressedTexSubImage3D(...arguments)}catch(z){de("WebGLState:",z)}}function gt(){try{s.texStorage2D(...arguments)}catch(z){de("WebGLState:",z)}}function Dt(){try{s.texStorage3D(...arguments)}catch(z){de("WebGLState:",z)}}function Gt(){try{s.texImage2D(...arguments)}catch(z){de("WebGLState:",z)}}function ht(){try{s.texImage3D(...arguments)}catch(z){de("WebGLState:",z)}}function vt(z){kt.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),kt.copy(z))}function Rt(z){Kt.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),Kt.copy(z))}function Nt(z,St){let pt=d.get(St);pt===void 0&&(pt=new WeakMap,d.set(St,pt));let wt=pt.get(z);wt===void 0&&(wt=s.getUniformBlockIndex(St,z.name),pt.set(z,wt))}function mt(z,St){const wt=d.get(St).get(z);f.get(St)!==wt&&(s.uniformBlockBinding(St,wt,z.__bindingPointIndex),f.set(St,wt))}function te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Et=null,it={},_={},v=new WeakMap,S=[],b=null,w=!1,x=null,m=null,D=null,P=null,R=null,U=null,F=null,O=new Se(0,0,0),Z=0,T=!1,A=null,B=null,J=null,Q=null,rt=null,kt.set(0,0,s.canvas.width,s.canvas.height),Kt.set(0,0,s.canvas.width,s.canvas.height),l.reset(),h.reset(),u.reset()}return{buffers:{color:l,depth:h,stencil:u},enable:at,disable:Tt,bindFramebuffer:jt,drawBuffers:Lt,useProgram:se,setBlending:pe,setMaterial:_e,setFlipSided:$t,setCullFace:Ce,setLineWidth:N,setPolygonOffset:Pe,setScissorTest:ue,activeTexture:ge,bindTexture:Ut,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:Gt,texImage3D:ht,updateUBOMapping:Nt,uniformBlockBinding:mt,texStorage2D:gt,texStorage3D:Dt,texSubImage2D:nt,texSubImage3D:lt,compressedTexSubImage2D:et,compressedTexSubImage3D:Ft,scissor:vt,viewport:Rt,reset:te}}function Ug(s,t,e,r,o,l,h){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new xe,g=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,y){return S?new OffscreenCanvas(C,y):zs("canvas")}function w(C,y,k){let nt=1;const lt=Ut(C);if((lt.width>k||lt.height>k)&&(nt=k/Math.max(lt.width,lt.height)),nt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const et=Math.floor(nt*lt.width),Ft=Math.floor(nt*lt.height);_===void 0&&(_=b(et,Ft));const gt=y?b(et,Ft):_;return gt.width=et,gt.height=Ft,gt.getContext("2d").drawImage(C,0,0,et,Ft),Jt("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+et+"x"+Ft+")."),gt}else return"data"in C&&Jt("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),C;return C}function x(C){return C.generateMipmaps}function m(C){s.generateMipmap(C)}function D(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(C,y,k,nt,lt=!1){if(C!==null){if(s[C]!==void 0)return s[C];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let et=y;if(y===s.RED&&(k===s.FLOAT&&(et=s.R32F),k===s.HALF_FLOAT&&(et=s.R16F),k===s.UNSIGNED_BYTE&&(et=s.R8)),y===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&(et=s.R8UI),k===s.UNSIGNED_SHORT&&(et=s.R16UI),k===s.UNSIGNED_INT&&(et=s.R32UI),k===s.BYTE&&(et=s.R8I),k===s.SHORT&&(et=s.R16I),k===s.INT&&(et=s.R32I)),y===s.RG&&(k===s.FLOAT&&(et=s.RG32F),k===s.HALF_FLOAT&&(et=s.RG16F),k===s.UNSIGNED_BYTE&&(et=s.RG8)),y===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&(et=s.RG8UI),k===s.UNSIGNED_SHORT&&(et=s.RG16UI),k===s.UNSIGNED_INT&&(et=s.RG32UI),k===s.BYTE&&(et=s.RG8I),k===s.SHORT&&(et=s.RG16I),k===s.INT&&(et=s.RG32I)),y===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&(et=s.RGB8UI),k===s.UNSIGNED_SHORT&&(et=s.RGB16UI),k===s.UNSIGNED_INT&&(et=s.RGB32UI),k===s.BYTE&&(et=s.RGB8I),k===s.SHORT&&(et=s.RGB16I),k===s.INT&&(et=s.RGB32I)),y===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&(et=s.RGBA8UI),k===s.UNSIGNED_SHORT&&(et=s.RGBA16UI),k===s.UNSIGNED_INT&&(et=s.RGBA32UI),k===s.BYTE&&(et=s.RGBA8I),k===s.SHORT&&(et=s.RGBA16I),k===s.INT&&(et=s.RGBA32I)),y===s.RGB&&(k===s.UNSIGNED_INT_5_9_9_9_REV&&(et=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&(et=s.R11F_G11F_B10F)),y===s.RGBA){const Ft=lt?Os:fe.getTransfer(nt);k===s.FLOAT&&(et=s.RGBA32F),k===s.HALF_FLOAT&&(et=s.RGBA16F),k===s.UNSIGNED_BYTE&&(et=Ft===ye?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT_4_4_4_4&&(et=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&(et=s.RGB5_A1)}return(et===s.R16F||et===s.R32F||et===s.RG16F||et===s.RG32F||et===s.RGBA16F||et===s.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function R(C,y){let k;return C?y===null||y===On||y===kr?k=s.DEPTH24_STENCIL8:y===Dn?k=s.DEPTH32F_STENCIL8:y===zr&&(k=s.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===On||y===kr?k=s.DEPTH_COMPONENT24:y===Dn?k=s.DEPTH_COMPONENT32F:y===zr&&(k=s.DEPTH_COMPONENT16),k}function U(C,y){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==We&&C.minFilter!==qe?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function F(C){const y=C.target;y.removeEventListener("dispose",F),Z(y),y.isVideoTexture&&g.delete(y)}function O(C){const y=C.target;y.removeEventListener("dispose",O),A(y)}function Z(C){const y=r.get(C);if(y.__webglInit===void 0)return;const k=C.source,nt=v.get(k);if(nt){const lt=nt[y.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&T(C),Object.keys(nt).length===0&&v.delete(k)}r.remove(C)}function T(C){const y=r.get(C);s.deleteTexture(y.__webglTexture);const k=C.source,nt=v.get(k);delete nt[y.__cacheKey],h.memory.textures--}function A(C){const y=r.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),r.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(y.__webglFramebuffer[nt]))for(let lt=0;lt<y.__webglFramebuffer[nt].length;lt++)s.deleteFramebuffer(y.__webglFramebuffer[nt][lt]);else s.deleteFramebuffer(y.__webglFramebuffer[nt]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[nt])}else{if(Array.isArray(y.__webglFramebuffer))for(let nt=0;nt<y.__webglFramebuffer.length;nt++)s.deleteFramebuffer(y.__webglFramebuffer[nt]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let nt=0;nt<y.__webglColorRenderbuffer.length;nt++)y.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[nt]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=C.textures;for(let nt=0,lt=k.length;nt<lt;nt++){const et=r.get(k[nt]);et.__webglTexture&&(s.deleteTexture(et.__webglTexture),h.memory.textures--),r.remove(k[nt])}r.remove(C)}let B=0;function J(){B=0}function Q(){const C=B;return C>=o.maxTextures&&Jt("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+o.maxTextures),B+=1,C}function rt(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function st(C,y){const k=r.get(C);if(C.isVideoTexture&&ue(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const nt=C.image;if(nt===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{W(k,C,y);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+y)}function tt(C,y){const k=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){W(k,C,y);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+y)}function q(C,y){const k=r.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){W(k,C,y);return}e.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+y)}function K(C,y){const k=r.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){at(k,C,y);return}e.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+y)}const Et={[ca]:s.REPEAT,[jn]:s.CLAMP_TO_EDGE,[ha]:s.MIRRORED_REPEAT},it={[We]:s.NEAREST,[$u]:s.NEAREST_MIPMAP_NEAREST,[hs]:s.NEAREST_MIPMAP_LINEAR,[qe]:s.LINEAR,[vo]:s.LINEAR_MIPMAP_NEAREST,[Li]:s.LINEAR_MIPMAP_LINEAR},ft={[nf]:s.NEVER,[lf]:s.ALWAYS,[rf]:s.LESS,[el]:s.LEQUAL,[sf]:s.EQUAL,[nl]:s.GEQUAL,[of]:s.GREATER,[af]:s.NOTEQUAL};function Ht(C,y){if(y.type===Dn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===qe||y.magFilter===vo||y.magFilter===hs||y.magFilter===Li||y.minFilter===qe||y.minFilter===vo||y.minFilter===hs||y.minFilter===Li)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Et[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Et[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Et[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,it[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,it[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ft[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===We||y.minFilter!==hs&&y.minFilter!==Li||y.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");s.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function kt(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",F));const nt=y.source;let lt=v.get(nt);lt===void 0&&(lt={},v.set(nt,lt));const et=rt(y);if(et!==C.__cacheKey){lt[et]===void 0&&(lt[et]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,k=!0),lt[et].usedTimes++;const Ft=lt[C.__cacheKey];Ft!==void 0&&(lt[C.__cacheKey].usedTimes--,Ft.usedTimes===0&&T(y)),C.__cacheKey=et,C.__webglTexture=lt[et].texture}return k}function Kt(C,y,k){return Math.floor(Math.floor(C/k)/y)}function Vt(C,y,k,nt){const et=C.updateRanges;if(et.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,k,nt,y.data);else{et.sort((ht,vt)=>ht.start-vt.start);let Ft=0;for(let ht=1;ht<et.length;ht++){const vt=et[Ft],Rt=et[ht],Nt=vt.start+vt.count,mt=Kt(Rt.start,y.width,4),te=Kt(vt.start,y.width,4);Rt.start<=Nt+1&&mt===te&&Kt(Rt.start+Rt.count-1,y.width,4)===mt?vt.count=Math.max(vt.count,Rt.start+Rt.count-vt.start):(++Ft,et[Ft]=Rt)}et.length=Ft+1;const gt=s.getParameter(s.UNPACK_ROW_LENGTH),Dt=s.getParameter(s.UNPACK_SKIP_PIXELS),Gt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let ht=0,vt=et.length;ht<vt;ht++){const Rt=et[ht],Nt=Math.floor(Rt.start/4),mt=Math.ceil(Rt.count/4),te=Nt%y.width,z=Math.floor(Nt/y.width),St=mt,pt=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,te),s.pixelStorei(s.UNPACK_SKIP_ROWS,z),e.texSubImage2D(s.TEXTURE_2D,0,te,z,St,pt,k,nt,y.data)}C.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,gt),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Dt),s.pixelStorei(s.UNPACK_SKIP_ROWS,Gt)}}function W(C,y,k){let nt=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=s.TEXTURE_3D);const lt=kt(C,y),et=y.source;e.bindTexture(nt,C.__webglTexture,s.TEXTURE0+k);const Ft=r.get(et);if(et.version!==Ft.__version||lt===!0){e.activeTexture(s.TEXTURE0+k);const gt=fe.getPrimaries(fe.workingColorSpace),Dt=y.colorSpace===di?null:fe.getPrimaries(y.colorSpace),Gt=y.colorSpace===di||gt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let ht=w(y.image,!1,o.maxTextureSize);ht=ge(y,ht);const vt=l.convert(y.format,y.colorSpace),Rt=l.convert(y.type);let Nt=P(y.internalFormat,vt,Rt,y.colorSpace,y.isVideoTexture);Ht(nt,y);let mt;const te=y.mipmaps,z=y.isVideoTexture!==!0,St=Ft.__version===void 0||lt===!0,pt=et.dataReady,wt=U(y,ht);if(y.isDepthTexture)Nt=R(y.format===Di,y.type),St&&(z?e.texStorage2D(s.TEXTURE_2D,1,Nt,ht.width,ht.height):e.texImage2D(s.TEXTURE_2D,0,Nt,ht.width,ht.height,0,vt,Rt,null));else if(y.isDataTexture)if(te.length>0){z&&St&&e.texStorage2D(s.TEXTURE_2D,wt,Nt,te[0].width,te[0].height);for(let ut=0,ot=te.length;ut<ot;ut++)mt=te[ut],z?pt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,mt.width,mt.height,vt,Rt,mt.data):e.texImage2D(s.TEXTURE_2D,ut,Nt,mt.width,mt.height,0,vt,Rt,mt.data);y.generateMipmaps=!1}else z?(St&&e.texStorage2D(s.TEXTURE_2D,wt,Nt,ht.width,ht.height),pt&&Vt(y,ht,vt,Rt)):e.texImage2D(s.TEXTURE_2D,0,Nt,ht.width,ht.height,0,vt,Rt,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){z&&St&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Nt,te[0].width,te[0].height,ht.depth);for(let ut=0,ot=te.length;ut<ot;ut++)if(mt=te[ut],y.format!==Tn)if(vt!==null)if(z){if(pt)if(y.layerUpdates.size>0){const xt=yc(mt.width,mt.height,y.format,y.type);for(const Zt of y.layerUpdates){const Me=mt.data.subarray(Zt*xt/mt.data.BYTES_PER_ELEMENT,(Zt+1)*xt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,Zt,mt.width,mt.height,1,vt,Me)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,mt.width,mt.height,ht.depth,vt,mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ut,Nt,mt.width,mt.height,ht.depth,0,mt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?pt&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,ut,0,0,0,mt.width,mt.height,ht.depth,vt,Rt,mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,ut,Nt,mt.width,mt.height,ht.depth,0,vt,Rt,mt.data)}else{z&&St&&e.texStorage2D(s.TEXTURE_2D,wt,Nt,te[0].width,te[0].height);for(let ut=0,ot=te.length;ut<ot;ut++)mt=te[ut],y.format!==Tn?vt!==null?z?pt&&e.compressedTexSubImage2D(s.TEXTURE_2D,ut,0,0,mt.width,mt.height,vt,mt.data):e.compressedTexImage2D(s.TEXTURE_2D,ut,Nt,mt.width,mt.height,0,mt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?pt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,mt.width,mt.height,vt,Rt,mt.data):e.texImage2D(s.TEXTURE_2D,ut,Nt,mt.width,mt.height,0,vt,Rt,mt.data)}else if(y.isDataArrayTexture)if(z){if(St&&e.texStorage3D(s.TEXTURE_2D_ARRAY,wt,Nt,ht.width,ht.height,ht.depth),pt)if(y.layerUpdates.size>0){const ut=yc(ht.width,ht.height,y.format,y.type);for(const ot of y.layerUpdates){const xt=ht.data.subarray(ot*ut/ht.data.BYTES_PER_ELEMENT,(ot+1)*ut/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ot,ht.width,ht.height,1,vt,Rt,xt)}y.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,vt,Rt,ht.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,ht.width,ht.height,ht.depth,0,vt,Rt,ht.data);else if(y.isData3DTexture)z?(St&&e.texStorage3D(s.TEXTURE_3D,wt,Nt,ht.width,ht.height,ht.depth),pt&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,vt,Rt,ht.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,ht.width,ht.height,ht.depth,0,vt,Rt,ht.data);else if(y.isFramebufferTexture){if(St)if(z)e.texStorage2D(s.TEXTURE_2D,wt,Nt,ht.width,ht.height);else{let ut=ht.width,ot=ht.height;for(let xt=0;xt<wt;xt++)e.texImage2D(s.TEXTURE_2D,xt,Nt,ut,ot,0,vt,Rt,null),ut>>=1,ot>>=1}}else if(te.length>0){if(z&&St){const ut=Ut(te[0]);e.texStorage2D(s.TEXTURE_2D,wt,Nt,ut.width,ut.height)}for(let ut=0,ot=te.length;ut<ot;ut++)mt=te[ut],z?pt&&e.texSubImage2D(s.TEXTURE_2D,ut,0,0,vt,Rt,mt):e.texImage2D(s.TEXTURE_2D,ut,Nt,vt,Rt,mt);y.generateMipmaps=!1}else if(z){if(St){const ut=Ut(ht);e.texStorage2D(s.TEXTURE_2D,wt,Nt,ut.width,ut.height)}pt&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Rt,ht)}else e.texImage2D(s.TEXTURE_2D,0,Nt,vt,Rt,ht);x(y)&&m(nt),Ft.__version=et.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function at(C,y,k){if(y.image.length!==6)return;const nt=kt(C,y),lt=y.source;e.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+k);const et=r.get(lt);if(lt.version!==et.__version||nt===!0){e.activeTexture(s.TEXTURE0+k);const Ft=fe.getPrimaries(fe.workingColorSpace),gt=y.colorSpace===di?null:fe.getPrimaries(y.colorSpace),Dt=y.colorSpace===di||Ft===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Dt);const Gt=y.isCompressedTexture||y.image[0].isCompressedTexture,ht=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let ot=0;ot<6;ot++)!Gt&&!ht?vt[ot]=w(y.image[ot],!0,o.maxCubemapSize):vt[ot]=ht?y.image[ot].image:y.image[ot],vt[ot]=ge(y,vt[ot]);const Rt=vt[0],Nt=l.convert(y.format,y.colorSpace),mt=l.convert(y.type),te=P(y.internalFormat,Nt,mt,y.colorSpace),z=y.isVideoTexture!==!0,St=et.__version===void 0||nt===!0,pt=lt.dataReady;let wt=U(y,Rt);Ht(s.TEXTURE_CUBE_MAP,y);let ut;if(Gt){z&&St&&e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,te,Rt.width,Rt.height);for(let ot=0;ot<6;ot++){ut=vt[ot].mipmaps;for(let xt=0;xt<ut.length;xt++){const Zt=ut[xt];y.format!==Tn?Nt!==null?z?pt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt,0,0,Zt.width,Zt.height,Nt,Zt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt,te,Zt.width,Zt.height,0,Zt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt,0,0,Zt.width,Zt.height,Nt,mt,Zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt,te,Zt.width,Zt.height,0,Nt,mt,Zt.data)}}}else{if(ut=y.mipmaps,z&&St){ut.length>0&&wt++;const ot=Ut(vt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,wt,te,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(ht){z?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,vt[ot].width,vt[ot].height,Nt,mt,vt[ot].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,te,vt[ot].width,vt[ot].height,0,Nt,mt,vt[ot].data);for(let xt=0;xt<ut.length;xt++){const Me=ut[xt].image[ot].image;z?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt+1,0,0,Me.width,Me.height,Nt,mt,Me.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt+1,te,Me.width,Me.height,0,Nt,mt,Me.data)}}else{z?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Nt,mt,vt[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,te,Nt,mt,vt[ot]);for(let xt=0;xt<ut.length;xt++){const Zt=ut[xt];z?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt+1,0,0,Nt,mt,Zt.image[ot]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ot,xt+1,te,Nt,mt,Zt.image[ot])}}}x(y)&&m(s.TEXTURE_CUBE_MAP),et.__version=lt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Tt(C,y,k,nt,lt,et){const Ft=l.convert(k.format,k.colorSpace),gt=l.convert(k.type),Dt=P(k.internalFormat,Ft,gt,k.colorSpace),Gt=r.get(y),ht=r.get(k);if(ht.__renderTarget=y,!Gt.__hasExternalTextures){const vt=Math.max(1,y.width>>et),Rt=Math.max(1,y.height>>et);lt===s.TEXTURE_3D||lt===s.TEXTURE_2D_ARRAY?e.texImage3D(lt,et,Dt,vt,Rt,y.depth,0,Ft,gt,null):e.texImage2D(lt,et,Dt,vt,Rt,0,Ft,gt,null)}e.bindFramebuffer(s.FRAMEBUFFER,C),Pe(y)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,lt,ht.__webglTexture,0,N(y)):(lt===s.TEXTURE_2D||lt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,lt,ht.__webglTexture,et),e.bindFramebuffer(s.FRAMEBUFFER,null)}function jt(C,y,k){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){const nt=y.depthTexture,lt=nt&&nt.isDepthTexture?nt.type:null,et=R(y.stencilBuffer,lt),Ft=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Pe(y)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N(y),et,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,N(y),et,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,et,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ft,s.RENDERBUFFER,C)}else{const nt=y.textures;for(let lt=0;lt<nt.length;lt++){const et=nt[lt],Ft=l.convert(et.format,et.colorSpace),gt=l.convert(et.type),Dt=P(et.internalFormat,Ft,gt,et.colorSpace);Pe(y)?u.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,N(y),Dt,y.width,y.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,N(y),Dt,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Dt,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Lt(C,y,k){const nt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=r.get(y.depthTexture);if(lt.__renderTarget=y,(!lt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),nt){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,y.depthTexture.addEventListener("dispose",F)),lt.__webglTexture===void 0){lt.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,y.depthTexture);const Gt=l.convert(y.depthTexture.format),ht=l.convert(y.depthTexture.type);let vt;y.depthTexture.format===ni?vt=s.DEPTH_COMPONENT24:y.depthTexture.format===Di&&(vt=s.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,vt,y.width,y.height,0,Gt,ht,null)}}else st(y.depthTexture,0);const et=lt.__webglTexture,Ft=N(y),gt=nt?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,Dt=y.depthTexture.format===Di?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===ni)Pe(y)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Dt,gt,et,0,Ft):s.framebufferTexture2D(s.FRAMEBUFFER,Dt,gt,et,0);else if(y.depthTexture.format===Di)Pe(y)?u.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Dt,gt,et,0,Ft):s.framebufferTexture2D(s.FRAMEBUFFER,Dt,gt,et,0);else throw new Error("Unknown depthTexture format")}function se(C){const y=r.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const nt=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),nt){const lt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,nt.removeEventListener("dispose",lt)};nt.addEventListener("dispose",lt),y.__depthDisposeCallback=lt}y.__boundDepthTexture=nt}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let nt=0;nt<6;nt++)Lt(y.__webglFramebuffer[nt],C,nt);else{const nt=C.texture.mipmaps;nt&&nt.length>0?Lt(y.__webglFramebuffer[0],C,0):Lt(y.__webglFramebuffer,C,0)}else if(k){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]===void 0)y.__webglDepthbuffer[nt]=s.createRenderbuffer(),jt(y.__webglDepthbuffer[nt],C,!1);else{const lt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,et)}}else{const nt=C.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),jt(y.__webglDepthbuffer,C,!1);else{const lt=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,et),s.framebufferRenderbuffer(s.FRAMEBUFFER,lt,s.RENDERBUFFER,et)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(C,y,k){const nt=r.get(C);y!==void 0&&Tt(nt.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&se(C)}function re(C){const y=C.texture,k=r.get(C),nt=r.get(y);C.addEventListener("dispose",O);const lt=C.textures,et=C.isWebGLCubeRenderTarget===!0,Ft=lt.length>1;if(Ft||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=y.version,h.memory.textures++),et){k.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[gt]=[];for(let Dt=0;Dt<y.mipmaps.length;Dt++)k.__webglFramebuffer[gt][Dt]=s.createFramebuffer()}else k.__webglFramebuffer[gt]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)k.__webglFramebuffer[gt]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Ft)for(let gt=0,Dt=lt.length;gt<Dt;gt++){const Gt=r.get(lt[gt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),h.memory.textures++)}if(C.samples>0&&Pe(C)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let gt=0;gt<lt.length;gt++){const Dt=lt[gt];k.__webglColorRenderbuffer[gt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[gt]);const Gt=l.convert(Dt.format,Dt.colorSpace),ht=l.convert(Dt.type),vt=P(Dt.internalFormat,Gt,ht,Dt.colorSpace,C.isXRRenderTarget===!0),Rt=N(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,Rt,vt,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,k.__webglColorRenderbuffer[gt])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),jt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(et){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),Ht(s.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Dt=0;Dt<y.mipmaps.length;Dt++)Tt(k.__webglFramebuffer[gt][Dt],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Dt);else Tt(k.__webglFramebuffer[gt],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(y)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let gt=0,Dt=lt.length;gt<Dt;gt++){const Gt=lt[gt],ht=r.get(Gt);let vt=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(vt,ht.__webglTexture),Ht(vt,Gt),Tt(k.__webglFramebuffer,C,Gt,s.COLOR_ATTACHMENT0+gt,vt,0),x(Gt)&&m(vt)}e.unbindTexture()}else{let gt=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(gt,nt.__webglTexture),Ht(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let Dt=0;Dt<y.mipmaps.length;Dt++)Tt(k.__webglFramebuffer[Dt],C,y,s.COLOR_ATTACHMENT0,gt,Dt);else Tt(k.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,gt,0);x(y)&&m(gt),e.unbindTexture()}C.depthBuffer&&se(C)}function pe(C){const y=C.textures;for(let k=0,nt=y.length;k<nt;k++){const lt=y[k];if(x(lt)){const et=D(C),Ft=r.get(lt).__webglTexture;e.bindTexture(et,Ft),m(et),e.unbindTexture()}}}const _e=[],$t=[];function Ce(C){if(C.samples>0){if(Pe(C)===!1){const y=C.textures,k=C.width,nt=C.height;let lt=s.COLOR_BUFFER_BIT;const et=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ft=r.get(C),gt=y.length>1;if(gt)for(let Gt=0;Gt<y.length;Gt++)e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const Dt=C.texture.mipmaps;Dt&&Dt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Gt=0;Gt<y.length;Gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(lt|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(lt|=s.STENCIL_BUFFER_BIT)),gt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Gt]);const ht=r.get(y[Gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ht,0)}s.blitFramebuffer(0,0,k,nt,0,0,k,nt,lt,s.NEAREST),f===!0&&(_e.length=0,$t.length=0,_e.push(s.COLOR_ATTACHMENT0+Gt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(_e.push(et),$t.push(et),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$t)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),gt)for(let Gt=0;Gt<y.length;Gt++){e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.RENDERBUFFER,Ft.__webglColorRenderbuffer[Gt]);const ht=r.get(y[Gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ft.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Gt,s.TEXTURE_2D,ht,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&f){const y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function N(C){return Math.min(o.maxSamples,C.samples)}function Pe(C){const y=r.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ue(C){const y=h.render.frame;g.get(C)!==y&&(g.set(C,y),C.update())}function ge(C,y){const k=C.colorSpace,nt=C.format,lt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==hr&&k!==di&&(fe.getTransfer(k)===ye?(nt!==Tn||lt!==ln)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):de("WebGLTextures: Unsupported texture color space:",k)),y}function Ut(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(d.width=C.naturalWidth||C.width,d.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(d.width=C.displayWidth,d.height=C.displayHeight):(d.width=C.width,d.height=C.height),d}this.allocateTextureUnit=Q,this.resetTextureUnits=J,this.setTexture2D=st,this.setTexture2DArray=tt,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=Ae,this.setupRenderTarget=re,this.updateRenderTargetMipmap=pe,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=se,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Ng(s,t){function e(r,o=di){let l;const h=fe.getTransfer(o);if(r===ln)return s.UNSIGNED_BYTE;if(r===ja)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ja)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===hh)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===ah)return s.BYTE;if(r===lh)return s.SHORT;if(r===zr)return s.UNSIGNED_SHORT;if(r===Ka)return s.INT;if(r===On)return s.UNSIGNED_INT;if(r===Dn)return s.FLOAT;if(r===ei)return s.HALF_FLOAT;if(r===uh)return s.ALPHA;if(r===fh)return s.RGB;if(r===Tn)return s.RGBA;if(r===ni)return s.DEPTH_COMPONENT;if(r===Di)return s.DEPTH_STENCIL;if(r===dh)return s.RED;if(r===$a)return s.RED_INTEGER;if(r===cr)return s.RG;if(r===Qa)return s.RG_INTEGER;if(r===tl)return s.RGBA_INTEGER;if(r===Ls||r===Ds||r===Is||r===Us)if(h===ye)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Ls)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ds)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Is)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Us)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Ls)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ds)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Is)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Us)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ua||r===fa||r===da||r===pa)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===ua)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===fa)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===da)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===pa)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ma||r===_a||r===ga||r===va||r===xa||r===ya||r===Sa)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(r===ma||r===_a)return h===ye?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===ga)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===va)return l.COMPRESSED_R11_EAC;if(r===xa)return l.COMPRESSED_SIGNED_R11_EAC;if(r===ya)return l.COMPRESSED_RG11_EAC;if(r===Sa)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Ma||r===Ea||r===Ta||r===ba||r===wa||r===Aa||r===Ca||r===Pa||r===Ra||r===La||r===Da||r===Ia||r===Ua||r===Na)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Ma)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ea)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ta)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===ba)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wa)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Aa)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ca)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Pa)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ra)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===La)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Da)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ia)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ua)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Na)return h===ye?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fa||r===Oa||r===Ba)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(r===Fa)return h===ye?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Oa)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ba)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===za||r===ka||r===Va||r===Ha)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(r===za)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ka)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Va)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ha)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===kr?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:e}}const Fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Og=`
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

}`;class Bg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const r=new Th(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,r=new Bn({vertexShader:Fg,fragmentShader:Og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new bn(new Gs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zg extends pr{constructor(t,e){super();const r=this;let o=null,l=1,h=null,u="local-floor",f=1,d=null,g=null,_=null,v=null,S=null,b=null;const w=typeof XRWebGLBinding<"u",x=new Bg,m={},D=e.getContextAttributes();let P=null,R=null;const U=[],F=[],O=new xe;let Z=null;const T=new pn;T.viewport=new Re;const A=new pn;A.viewport=new Re;const B=[T,A],J=new Kf;let Q=null,rt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let at=U[W];return at===void 0&&(at=new Vo,U[W]=at),at.getTargetRaySpace()},this.getControllerGrip=function(W){let at=U[W];return at===void 0&&(at=new Vo,U[W]=at),at.getGripSpace()},this.getHand=function(W){let at=U[W];return at===void 0&&(at=new Vo,U[W]=at),at.getHandSpace()};function st(W){const at=F.indexOf(W.inputSource);if(at===-1)return;const Tt=U[at];Tt!==void 0&&(Tt.update(W.inputSource,W.frame,d||h),Tt.dispatchEvent({type:W.type,data:W.inputSource}))}function tt(){o.removeEventListener("select",st),o.removeEventListener("selectstart",st),o.removeEventListener("selectend",st),o.removeEventListener("squeeze",st),o.removeEventListener("squeezestart",st),o.removeEventListener("squeezeend",st),o.removeEventListener("end",tt),o.removeEventListener("inputsourceschange",q);for(let W=0;W<U.length;W++){const at=F[W];at!==null&&(F[W]=null,U[W].disconnect(at))}Q=null,rt=null,x.reset();for(const W in m)delete m[W];t.setRenderTarget(P),S=null,v=null,_=null,o=null,R=null,Vt.stop(),r.isPresenting=!1,t.setPixelRatio(Z),t.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){l=W,r.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){u=W,r.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||h},this.setReferenceSpace=function(W){d=W},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(o,e)),_},this.getFrame=function(){return b},this.getSession=function(){return o},this.setSession=async function(W){if(o=W,o!==null){if(P=t.getRenderTarget(),o.addEventListener("select",st),o.addEventListener("selectstart",st),o.addEventListener("selectend",st),o.addEventListener("squeeze",st),o.addEventListener("squeezestart",st),o.addEventListener("squeezeend",st),o.addEventListener("end",tt),o.addEventListener("inputsourceschange",q),D.xrCompatible!==!0&&await e.makeXRCompatible(),Z=t.getPixelRatio(),t.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,jt=null,Lt=null;D.depth&&(Lt=D.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=D.stencil?Di:ni,jt=D.stencil?kr:On);const se={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(se),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),R=new Nn(v.textureWidth,v.textureHeight,{format:Tn,type:ln,depthTexture:new Hr(v.textureWidth,v.textureHeight,jt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Tt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,e,Tt),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new Nn(S.framebufferWidth,S.framebufferHeight,{format:Tn,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(f),d=null,h=await o.requestReferenceSpace(u),Vt.setContext(o),Vt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function q(W){for(let at=0;at<W.removed.length;at++){const Tt=W.removed[at],jt=F.indexOf(Tt);jt>=0&&(F[jt]=null,U[jt].disconnect(Tt))}for(let at=0;at<W.added.length;at++){const Tt=W.added[at];let jt=F.indexOf(Tt);if(jt===-1){for(let se=0;se<U.length;se++)if(se>=F.length){F.push(Tt),jt=se;break}else if(F[se]===null){F[se]=Tt,jt=se;break}if(jt===-1)break}const Lt=U[jt];Lt&&Lt.connect(Tt)}}const K=new Y,Et=new Y;function it(W,at,Tt){K.setFromMatrixPosition(at.matrixWorld),Et.setFromMatrixPosition(Tt.matrixWorld);const jt=K.distanceTo(Et),Lt=at.projectionMatrix.elements,se=Tt.projectionMatrix.elements,Ae=Lt[14]/(Lt[10]-1),re=Lt[14]/(Lt[10]+1),pe=(Lt[9]+1)/Lt[5],_e=(Lt[9]-1)/Lt[5],$t=(Lt[8]-1)/Lt[0],Ce=(se[8]+1)/se[0],N=Ae*$t,Pe=Ae*Ce,ue=jt/(-$t+Ce),ge=ue*-$t;if(at.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ge),W.translateZ(ue),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Lt[10]===-1)W.projectionMatrix.copy(at.projectionMatrix),W.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Ut=Ae+ue,C=re+ue,y=N-ge,k=Pe+(jt-ge),nt=pe*re/C*Ut,lt=_e*re/C*Ut;W.projectionMatrix.makePerspective(y,k,nt,lt,Ut,C),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ft(W,at){at===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(at.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(o===null)return;let at=W.near,Tt=W.far;x.texture!==null&&(x.depthNear>0&&(at=x.depthNear),x.depthFar>0&&(Tt=x.depthFar)),J.near=A.near=T.near=at,J.far=A.far=T.far=Tt,(Q!==J.near||rt!==J.far)&&(o.updateRenderState({depthNear:J.near,depthFar:J.far}),Q=J.near,rt=J.far),J.layers.mask=W.layers.mask|6,T.layers.mask=J.layers.mask&3,A.layers.mask=J.layers.mask&5;const jt=W.parent,Lt=J.cameras;ft(J,jt);for(let se=0;se<Lt.length;se++)ft(Lt[se],jt);Lt.length===2?it(J,T,A):J.projectionMatrix.copy(T.projectionMatrix),Ht(W,J,jt)};function Ht(W,at,Tt){Tt===null?W.matrix.copy(at.matrixWorld):(W.matrix.copy(Tt.matrixWorld),W.matrix.invert(),W.matrix.multiply(at.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(at.projectionMatrix),W.projectionMatrixInverse.copy(at.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ga*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(v===null&&S===null))return f},this.setFoveation=function(W){f=W,v!==null&&(v.fixedFoveation=W),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(J)},this.getCameraTexture=function(W){return m[W]};let kt=null;function Kt(W,at){if(g=at.getViewerPose(d||h),b=at,g!==null){const Tt=g.views;S!==null&&(t.setRenderTargetFramebuffer(R,S.framebuffer),t.setRenderTarget(R));let jt=!1;Tt.length!==J.cameras.length&&(J.cameras.length=0,jt=!0);for(let re=0;re<Tt.length;re++){const pe=Tt[re];let _e=null;if(S!==null)_e=S.getViewport(pe);else{const Ce=_.getViewSubImage(v,pe);_e=Ce.viewport,re===0&&(t.setRenderTargetTextures(R,Ce.colorTexture,Ce.depthStencilTexture),t.setRenderTarget(R))}let $t=B[re];$t===void 0&&($t=new pn,$t.layers.enable(re),$t.viewport=new Re,B[re]=$t),$t.matrix.fromArray(pe.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(pe.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(_e.x,_e.y,_e.width,_e.height),re===0&&(J.matrix.copy($t.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),jt===!0&&J.cameras.push($t)}const Lt=o.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const re=_.getDepthInformation(Tt[0]);re&&re.isValid&&re.texture&&x.init(re,o.renderState)}if(Lt&&Lt.includes("camera-access")&&w){t.state.unbindTexture(),_=r.getBinding();for(let re=0;re<Tt.length;re++){const pe=Tt[re].camera;if(pe){let _e=m[pe];_e||(_e=new Th,m[pe]=_e);const $t=_.getCameraImage(pe);_e.sourceTexture=$t}}}}for(let Tt=0;Tt<U.length;Tt++){const jt=F[Tt],Lt=U[Tt];jt!==null&&Lt!==void 0&&Lt.update(jt,at,d||h)}kt&&kt(W,at),at.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:at}),b=null}const Vt=new wh;Vt.setAnimationLoop(Kt),this.setAnimationLoop=function(W){kt=W},this.dispose=function(){}}}const Ai=new ii,kg=new Le;function Vg(s,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function r(x,m){m.color.getRGB(x.fogColor.value,yh(s)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function o(x,m,D,P,R){m.isMeshBasicMaterial||m.isMeshLambertMaterial?l(x,m):m.isMeshToonMaterial?(l(x,m),_(x,m)):m.isMeshPhongMaterial?(l(x,m),g(x,m)):m.isMeshStandardMaterial?(l(x,m),v(x,m),m.isMeshPhysicalMaterial&&S(x,m,R)):m.isMeshMatcapMaterial?(l(x,m),b(x,m)):m.isMeshDepthMaterial?l(x,m):m.isMeshDistanceMaterial?(l(x,m),w(x,m)):m.isMeshNormalMaterial?l(x,m):m.isLineBasicMaterial?(h(x,m),m.isLineDashedMaterial&&u(x,m)):m.isPointsMaterial?f(x,m,D,P):m.isSpriteMaterial?d(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function l(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===rn&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===rn&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const D=t.get(m),P=D.envMap,R=D.envMapRotation;P&&(x.envMap.value=P,Ai.copy(R),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),x.envMapRotation.value.setFromMatrix4(kg.makeRotationFromEuler(Ai)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function h(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function u(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function f(x,m,D,P){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*D,x.scale.value=P*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function d(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function g(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function _(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function v(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function S(x,m,D){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=D.texture,x.transmissionSamplerSize.value.set(D.width,D.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,m){m.matcap&&(x.matcap.value=m.matcap)}function w(x,m){const D=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(D.matrixWorld),x.nearDistance.value=D.shadow.camera.near,x.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Hg(s,t,e,r){let o={},l={},h=[];const u=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function f(D,P){const R=P.program;r.uniformBlockBinding(D,R)}function d(D,P){let R=o[D.id];R===void 0&&(b(D),R=g(D),o[D.id]=R,D.addEventListener("dispose",x));const U=P.program;r.updateUBOMapping(D,U);const F=t.render.frame;l[D.id]!==F&&(v(D),l[D.id]=F)}function g(D){const P=_();D.__bindingPointIndex=P;const R=s.createBuffer(),U=D.__size,F=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,U,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function _(){for(let D=0;D<u;D++)if(h.indexOf(D)===-1)return h.push(D),D;return de("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const P=o[D.id],R=D.uniforms,U=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let F=0,O=R.length;F<O;F++){const Z=Array.isArray(R[F])?R[F]:[R[F]];for(let T=0,A=Z.length;T<A;T++){const B=Z[T];if(S(B,F,T,U)===!0){const J=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let rt=0;for(let st=0;st<Q.length;st++){const tt=Q[st],q=w(tt);typeof tt=="number"||typeof tt=="boolean"?(B.__data[0]=tt,s.bufferSubData(s.UNIFORM_BUFFER,J+rt,B.__data)):tt.isMatrix3?(B.__data[0]=tt.elements[0],B.__data[1]=tt.elements[1],B.__data[2]=tt.elements[2],B.__data[3]=0,B.__data[4]=tt.elements[3],B.__data[5]=tt.elements[4],B.__data[6]=tt.elements[5],B.__data[7]=0,B.__data[8]=tt.elements[6],B.__data[9]=tt.elements[7],B.__data[10]=tt.elements[8],B.__data[11]=0):(tt.toArray(B.__data,rt),rt+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,P,R,U){const F=D.value,O=P+"_"+R;if(U[O]===void 0)return typeof F=="number"||typeof F=="boolean"?U[O]=F:U[O]=F.clone(),!0;{const Z=U[O];if(typeof F=="number"||typeof F=="boolean"){if(Z!==F)return U[O]=F,!0}else if(Z.equals(F)===!1)return Z.copy(F),!0}return!1}function b(D){const P=D.uniforms;let R=0;const U=16;for(let O=0,Z=P.length;O<Z;O++){const T=Array.isArray(P[O])?P[O]:[P[O]];for(let A=0,B=T.length;A<B;A++){const J=T[A],Q=Array.isArray(J.value)?J.value:[J.value];for(let rt=0,st=Q.length;rt<st;rt++){const tt=Q[rt],q=w(tt),K=R%U,Et=K%q.boundary,it=K+Et;R+=Et,it!==0&&U-it<q.storage&&(R+=U-it),J.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=R,R+=q.storage}}}const F=R%U;return F>0&&(R+=U-F),D.__size=R,D.__cache={},this}function w(D){const P={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(P.boundary=4,P.storage=4):D.isVector2?(P.boundary=8,P.storage=8):D.isVector3||D.isColor?(P.boundary=16,P.storage=12):D.isVector4?(P.boundary=16,P.storage=16):D.isMatrix3?(P.boundary=48,P.storage=48):D.isMatrix4?(P.boundary=64,P.storage=64):D.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Jt("WebGLRenderer: Unsupported uniform value type.",D),P}function x(D){const P=D.target;P.removeEventListener("dispose",x);const R=h.indexOf(P.__bindingPointIndex);h.splice(R,1),s.deleteBuffer(o[P.id]),delete o[P.id],delete l[P.id]}function m(){for(const D in o)s.deleteBuffer(o[D]);h=[],o={},l={}}return{bind:f,update:d,dispose:m}}const Gg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Rn=null;function Wg(){return Rn===null&&(Rn=new Of(Gg,16,16,cr,ei),Rn.name="DFG_LUT",Rn.minFilter=qe,Rn.magFilter=qe,Rn.wrapS=jn,Rn.wrapT=jn,Rn.generateMipmaps=!1,Rn.needsUpdate=!0),Rn}class Xg{constructor(t={}){const{canvas:e=cf(),context:r=null,depth:o=!0,stencil:l=!1,alpha:h=!1,antialias:u=!1,premultipliedAlpha:f=!0,preserveDrawingBuffer:d=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:S=ln}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=h;const w=S,x=new Set([tl,Qa,$a]),m=new Set([ln,On,zr,kr,ja,Ja]),D=new Uint32Array(4),P=new Int32Array(4);let R=null,U=null;const F=[],O=[];let Z=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let A=!1;this._outputColorSpace=dn;let B=0,J=0,Q=null,rt=-1,st=null;const tt=new Re,q=new Re;let K=null;const Et=new Se(0);let it=0,ft=e.width,Ht=e.height,kt=1,Kt=null,Vt=null;const W=new Re(0,0,ft,Ht),at=new Re(0,0,ft,Ht);let Tt=!1;const jt=new sl;let Lt=!1,se=!1;const Ae=new Le,re=new Y,pe=new Re,_e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $t=!1;function Ce(){return Q===null?kt:1}let N=r;function Pe(E,V){return e.getContext(E,V)}try{const E={alpha:!0,depth:o,stencil:l,antialias:u,premultipliedAlpha:f,preserveDrawingBuffer:d,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ya}`),e.addEventListener("webglcontextlost",Zt,!1),e.addEventListener("webglcontextrestored",Me,!1),e.addEventListener("webglcontextcreationerror",me,!1),N===null){const V="webgl2";if(N=Pe(V,E),N===null)throw Pe(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw de("WebGLRenderer: "+E.message),E}let ue,ge,Ut,C,y,k,nt,lt,et,Ft,gt,Dt,Gt,ht,vt,Rt,Nt,mt,te,z,St,pt,wt,ut;function ot(){ue=new Wm(N),ue.init(),pt=new Ng(N,ue),ge=new Nm(N,ue,t,pt),Ut=new Ig(N,ue),ge.reversedDepthBuffer&&v&&Ut.buffers.depth.setReversed(!0),C=new qm(N),y=new vg,k=new Ug(N,ue,Ut,y,ge,pt,C),nt=new Om(T),lt=new Gm(T),et=new Jf(N),wt=new Im(N,et),Ft=new Xm(N,et,C,wt),gt=new Km(N,Ft,et,C),te=new Ym(N,ge,k),Rt=new Fm(y),Dt=new gg(T,nt,lt,ue,ge,wt,Rt),Gt=new Vg(T,y),ht=new yg,vt=new wg(ue),mt=new Dm(T,nt,lt,Ut,gt,b,f),Nt=new Lg(T,gt,ge),ut=new Hg(N,C,ge,Ut),z=new Um(N,ue,C),St=new Zm(N,ue,C),C.programs=Dt.programs,T.capabilities=ge,T.extensions=ue,T.properties=y,T.renderLists=ht,T.shadowMap=Nt,T.state=Ut,T.info=C}ot(),w!==ln&&(Z=new Jm(w,e.width,e.height,o,l));const xt=new zg(T,N);this.xr=xt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=ue.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ue.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return kt},this.setPixelRatio=function(E){E!==void 0&&(kt=E,this.setSize(ft,Ht,!1))},this.getSize=function(E){return E.set(ft,Ht)},this.setSize=function(E,V,$=!0){if(xt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=E,Ht=V,e.width=Math.floor(E*kt),e.height=Math.floor(V*kt),$===!0&&(e.style.width=E+"px",e.style.height=V+"px"),Z!==null&&Z.setSize(e.width,e.height),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(ft*kt,Ht*kt).floor()},this.setDrawingBufferSize=function(E,V,$){ft=E,Ht=V,kt=$,e.width=Math.floor(E*$),e.height=Math.floor(V*$),this.setViewport(0,0,E,V)},this.setEffects=function(E){if(w===ln){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let V=0;V<E.length;V++)if(E[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Z.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(tt)},this.getViewport=function(E){return E.copy(W)},this.setViewport=function(E,V,$,X){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,V,$,X),Ut.viewport(tt.copy(W).multiplyScalar(kt).round())},this.getScissor=function(E){return E.copy(at)},this.setScissor=function(E,V,$,X){E.isVector4?at.set(E.x,E.y,E.z,E.w):at.set(E,V,$,X),Ut.scissor(q.copy(at).multiplyScalar(kt).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(E){Ut.setScissorTest(Tt=E)},this.setOpaqueSort=function(E){Kt=E},this.setTransparentSort=function(E){Vt=E},this.getClearColor=function(E){return E.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,$=!0){let X=0;if(E){let H=!1;if(Q!==null){const _t=Q.texture.format;H=x.has(_t)}if(H){const _t=Q.texture.type,Ct=m.has(_t),yt=mt.getClearColor(),Pt=mt.getClearAlpha(),dt=yt.r,bt=yt.g,Bt=yt.b;Ct?(D[0]=dt,D[1]=bt,D[2]=Bt,D[3]=Pt,N.clearBufferuiv(N.COLOR,0,D)):(P[0]=dt,P[1]=bt,P[2]=Bt,P[3]=Pt,N.clearBufferiv(N.COLOR,0,P))}else X|=N.COLOR_BUFFER_BIT}V&&(X|=N.DEPTH_BUFFER_BIT),$&&(X|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",Me,!1),e.removeEventListener("webglcontextcreationerror",me,!1),mt.dispose(),ht.dispose(),vt.dispose(),y.dispose(),nt.dispose(),lt.dispose(),gt.dispose(),wt.dispose(),ut.dispose(),Dt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Ot),xt.removeEventListener("sessionend",gr),wn.stop()};function Zt(E){E.preventDefault(),ec("WebGLRenderer: Context Lost."),A=!0}function Me(){ec("WebGLRenderer: Context Restored."),A=!1;const E=C.autoReset,V=Nt.enabled,$=Nt.autoUpdate,X=Nt.needsUpdate,H=Nt.type;ot(),C.autoReset=E,Nt.enabled=V,Nt.autoUpdate=$,Nt.needsUpdate=X,Nt.type=H}function me(E){de("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function tn(E){const V=E.target;V.removeEventListener("dispose",tn),mn(V)}function mn(E){qs(E),y.remove(E)}function qs(E){const V=y.get(E).programs;V!==void 0&&(V.forEach(function($){Dt.releaseProgram($)}),E.isShaderMaterial&&Dt.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,$,X,H,_t){V===null&&(V=_e);const Ct=H.isMesh&&H.matrixWorld.determinant()<0,yt=Ys(E,V,$,X,H);Ut.setMaterial(X,Ct);let Pt=$.index,dt=1;if(X.wireframe===!0){if(Pt=Ft.getWireframeAttribute($),Pt===void 0)return;dt=2}const bt=$.drawRange,Bt=$.attributes.position;let qt=bt.start*dt,oe=(bt.start+bt.count)*dt;_t!==null&&(qt=Math.max(qt,_t.start*dt),oe=Math.min(oe,(_t.start+_t.count)*dt)),Pt!==null?(qt=Math.max(qt,0),oe=Math.min(oe,Pt.count)):Bt!=null&&(qt=Math.max(qt,0),oe=Math.min(oe,Bt.count));const Ee=oe-qt;if(Ee<0||Ee===1/0)return;wt.setup(H,X,yt,$,Pt);let It,Wt=z;if(Pt!==null&&(It=et.get(Pt),Wt=St,Wt.setIndex(It)),H.isMesh)X.wireframe===!0?(Ut.setLineWidth(X.wireframeLinewidth*Ce()),Wt.setMode(N.LINES)):Wt.setMode(N.TRIANGLES);else if(H.isLine){let zt=X.linewidth;zt===void 0&&(zt=1),Ut.setLineWidth(zt*Ce()),H.isLineSegments?Wt.setMode(N.LINES):H.isLineLoop?Wt.setMode(N.LINE_LOOP):Wt.setMode(N.LINE_STRIP)}else H.isPoints?Wt.setMode(N.POINTS):H.isSprite&&Wt.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Vr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Wt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ue.get("WEBGL_multi_draw"))Wt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const zt=H._multiDrawStarts,le=H._multiDrawCounts,Yt=H._multiDrawCount,Ke=Pt?et.get(Pt).bytesPerElement:1,_n=y.get(X).currentProgram.getUniforms();for(let De=0;De<Yt;De++)_n.setValue(N,"_gl_DrawID",De),Wt.render(zt[De]/Ke,le[De])}else if(H.isInstancedMesh)Wt.renderInstances(qt,Ee,H.count);else if($.isInstancedBufferGeometry){const zt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,le=Math.min($.instanceCount,zt);Wt.renderInstances(qt,Ee,le)}else Wt.render(qt,Ee)};function Zr(E,V,$){E.transparent===!0&&E.side===Kn&&E.forceSinglePass===!1?(E.side=rn,E.needsUpdate=!0,gi(E,V,$),E.side=mi,E.needsUpdate=!0,gi(E,V,$),E.side=Kn):gi(E,V,$)}this.compile=function(E,V,$=null){$===null&&($=E),U=vt.get($),U.init(V),O.push(U),$.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(U.pushLight(H),H.castShadow&&U.pushShadow(H))}),E!==$&&E.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(U.pushLight(H),H.castShadow&&U.pushShadow(H))}),U.setupLights();const X=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _t=H.material;if(_t)if(Array.isArray(_t))for(let Ct=0;Ct<_t.length;Ct++){const yt=_t[Ct];Zr(yt,$,H),X.add(yt)}else Zr(_t,$,H),X.add(_t)}),U=O.pop(),X},this.compileAsync=function(E,V,$=null){const X=this.compile(E,V,$);return new Promise(H=>{function _t(){if(X.forEach(function(Ct){y.get(Ct).currentProgram.isReady()&&X.delete(Ct)}),X.size===0){H(E);return}setTimeout(_t,10)}ue.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let _r=null;function cn(E){_r&&_r(E)}function Ot(){wn.stop()}function gr(){wn.start()}const wn=new wh;wn.setAnimationLoop(cn),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(E){_r=E,xt.setAnimationLoop(E),E===null?wn.stop():wn.start()},xt.addEventListener("sessionstart",Ot),xt.addEventListener("sessionend",gr),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){de("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;const $=xt.enabled===!0&&xt.isPresenting===!0,X=Z!==null&&(Q===null||$)&&Z.begin(T,Q);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(Z===null||Z.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(V),V=xt.getCamera()),E.isScene===!0&&E.onBeforeRender(T,E,V,Q),U=vt.get(E,O.length),U.init(V),O.push(U),Ae.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),jt.setFromProjectionMatrix(Ae,In,V.reversedDepth),se=this.localClippingEnabled,Lt=Rt.init(this.clippingPlanes,se),R=ht.get(E,F.length),R.init(),F.push(R),xt.enabled===!0&&xt.isPresenting===!0){const Ct=T.xr.getDepthSensingMesh();Ct!==null&&Ni(Ct,V,-1/0,T.sortObjects)}Ni(E,V,0,T.sortObjects),R.finish(),T.sortObjects===!0&&R.sort(Kt,Vt),$t=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,$t&&mt.addToRenderList(R,E),this.info.render.frame++,Lt===!0&&Rt.beginShadows();const H=U.state.shadowsArray;if(Nt.render(H,E,V),Lt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&Z.hasRenderPass())===!1){const Ct=R.opaque,yt=R.transmissive;if(U.setupLights(),V.isArrayCamera){const Pt=V.cameras;if(yt.length>0)for(let dt=0,bt=Pt.length;dt<bt;dt++){const Bt=Pt[dt];Fi(Ct,yt,E,Bt)}$t&&mt.render(E);for(let dt=0,bt=Pt.length;dt<bt;dt++){const Bt=Pt[dt];vr(R,E,Bt,Bt.viewport)}}else yt.length>0&&Fi(Ct,yt,E,V),$t&&mt.render(E),vr(R,E,V)}Q!==null&&J===0&&(k.updateMultisampleRenderTarget(Q),k.updateRenderTargetMipmap(Q)),X&&Z.end(T),E.isScene===!0&&E.onAfterRender(T,E,V),wt.resetDefaultState(),rt=-1,st=null,O.pop(),O.length>0?(U=O[O.length-1],Lt===!0&&Rt.setGlobalState(T.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?R=F[F.length-1]:R=null};function Ni(E,V,$,X){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)U.pushLight(E),E.castShadow&&U.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||jt.intersectsSprite(E)){X&&pe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ae);const Ct=gt.update(E),yt=E.material;yt.visible&&R.push(E,Ct,yt,$,pe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||jt.intersectsObject(E))){const Ct=gt.update(E),yt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),pe.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),pe.copy(Ct.boundingSphere.center)),pe.applyMatrix4(E.matrixWorld).applyMatrix4(Ae)),Array.isArray(yt)){const Pt=Ct.groups;for(let dt=0,bt=Pt.length;dt<bt;dt++){const Bt=Pt[dt],qt=yt[Bt.materialIndex];qt&&qt.visible&&R.push(E,Ct,qt,$,pe.z,Bt)}}else yt.visible&&R.push(E,Ct,yt,$,pe.z,null)}}const _t=E.children;for(let Ct=0,yt=_t.length;Ct<yt;Ct++)Ni(_t[Ct],V,$,X)}function vr(E,V,$,X){const{opaque:H,transmissive:_t,transparent:Ct}=E;U.setupLightsView($),Lt===!0&&Rt.setGlobalState(T.clippingPlanes,$),X&&Ut.viewport(tt.copy(X)),H.length>0&&_i(H,V,$),_t.length>0&&_i(_t,V,$),Ct.length>0&&_i(Ct,V,$),Ut.buffers.depth.setTest(!0),Ut.buffers.depth.setMask(!0),Ut.buffers.color.setMask(!0),Ut.setPolygonOffset(!1)}function Fi(E,V,$,X){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[X.id]===void 0){const qt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[X.id]=new Nn(1,1,{generateMipmaps:!0,type:qt?ei:ln,minFilter:Li,samples:ge.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:fe.workingColorSpace})}const _t=U.state.transmissionRenderTarget[X.id],Ct=X.viewport||tt;_t.setSize(Ct.z*T.transmissionResolutionScale,Ct.w*T.transmissionResolutionScale);const yt=T.getRenderTarget(),Pt=T.getActiveCubeFace(),dt=T.getActiveMipmapLevel();T.setRenderTarget(_t),T.getClearColor(Et),it=T.getClearAlpha(),it<1&&T.setClearColor(16777215,.5),T.clear(),$t&&mt.render($);const bt=T.toneMapping;T.toneMapping=Un;const Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),U.setupLightsView(X),Lt===!0&&Rt.setGlobalState(T.clippingPlanes,X),_i(E,$,X),k.updateMultisampleRenderTarget(_t),k.updateRenderTargetMipmap(_t),ue.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let oe=0,Ee=V.length;oe<Ee;oe++){const It=V[oe],{object:Wt,geometry:zt,material:le,group:Yt}=It;if(le.side===Kn&&Wt.layers.test(X.layers)){const Ke=le.side;le.side=rn,le.needsUpdate=!0,zn(Wt,$,X,zt,le,Yt),le.side=Ke,le.needsUpdate=!0,qt=!0}}qt===!0&&(k.updateMultisampleRenderTarget(_t),k.updateRenderTargetMipmap(_t))}T.setRenderTarget(yt,Pt,dt),T.setClearColor(Et,it),Bt!==void 0&&(X.viewport=Bt),T.toneMapping=bt}function _i(E,V,$){const X=V.isScene===!0?V.overrideMaterial:null;for(let H=0,_t=E.length;H<_t;H++){const Ct=E[H],{object:yt,geometry:Pt,group:dt}=Ct;let bt=Ct.material;bt.allowOverride===!0&&X!==null&&(bt=X),yt.layers.test($.layers)&&zn(yt,V,$,Pt,bt,dt)}}function zn(E,V,$,X,H,_t){E.onBeforeRender(T,V,$,X,H,_t),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(T,V,$,X,E,_t),H.transparent===!0&&H.side===Kn&&H.forceSinglePass===!1?(H.side=rn,H.needsUpdate=!0,T.renderBufferDirect($,V,X,H,E,_t),H.side=mi,H.needsUpdate=!0,T.renderBufferDirect($,V,X,H,E,_t),H.side=Kn):T.renderBufferDirect($,V,X,H,E,_t),E.onAfterRender(T,V,$,X,H,_t)}function gi(E,V,$){V.isScene!==!0&&(V=_e);const X=y.get(E),H=U.state.lights,_t=U.state.shadowsArray,Ct=H.state.version,yt=Dt.getParameters(E,H.state,_t,V,$),Pt=Dt.getProgramCacheKey(yt);let dt=X.programs;X.environment=E.isMeshStandardMaterial?V.environment:null,X.fog=V.fog,X.envMap=(E.isMeshStandardMaterial?lt:nt).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,dt===void 0&&(E.addEventListener("dispose",tn),dt=new Map,X.programs=dt);let bt=dt.get(Pt);if(bt!==void 0){if(X.currentProgram===bt&&X.lightsStateVersion===Ct)return Yr(E,yt),bt}else yt.uniforms=Dt.getUniforms(E),E.onBeforeCompile(yt,T),bt=Dt.acquireProgram(yt,Pt),dt.set(Pt,bt),X.uniforms=yt.uniforms;const Bt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=Rt.uniform),Yr(E,yt),X.needsLights=Kr(E),X.lightsStateVersion=Ct,X.needsLights&&(Bt.ambientLightColor.value=H.state.ambient,Bt.lightProbe.value=H.state.probe,Bt.directionalLights.value=H.state.directional,Bt.directionalLightShadows.value=H.state.directionalShadow,Bt.spotLights.value=H.state.spot,Bt.spotLightShadows.value=H.state.spotShadow,Bt.rectAreaLights.value=H.state.rectArea,Bt.ltc_1.value=H.state.rectAreaLTC1,Bt.ltc_2.value=H.state.rectAreaLTC2,Bt.pointLights.value=H.state.point,Bt.pointLightShadows.value=H.state.pointShadow,Bt.hemisphereLights.value=H.state.hemi,Bt.directionalShadowMap.value=H.state.directionalShadowMap,Bt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Bt.spotShadowMap.value=H.state.spotShadowMap,Bt.spotLightMatrix.value=H.state.spotLightMatrix,Bt.spotLightMap.value=H.state.spotLightMap,Bt.pointShadowMap.value=H.state.pointShadowMap,Bt.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=bt,X.uniformsList=null,bt}function qr(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=Ns.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function Yr(E,V){const $=y.get(E);$.outputColorSpace=V.outputColorSpace,$.batching=V.batching,$.batchingColor=V.batchingColor,$.instancing=V.instancing,$.instancingColor=V.instancingColor,$.instancingMorph=V.instancingMorph,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function Ys(E,V,$,X,H){V.isScene!==!0&&(V=_e),k.resetTextureUnits();const _t=V.fog,Ct=X.isMeshStandardMaterial?V.environment:null,yt=Q===null?T.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:hr,Pt=(X.isMeshStandardMaterial?lt:nt).get(X.envMap||Ct),dt=X.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,bt=!!$.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Bt=!!$.morphAttributes.position,qt=!!$.morphAttributes.normal,oe=!!$.morphAttributes.color;let Ee=Un;X.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Ee=T.toneMapping);const It=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Wt=It!==void 0?It.length:0,zt=y.get(X),le=U.state.lights;if(Lt===!0&&(se===!0||E!==st)){const Oe=E===st&&X.id===rt;Rt.setState(X,E,Oe)}let Yt=!1;X.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==le.state.version||zt.outputColorSpace!==yt||H.isBatchedMesh&&zt.batching===!1||!H.isBatchedMesh&&zt.batching===!0||H.isBatchedMesh&&zt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&zt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&zt.instancing===!1||!H.isInstancedMesh&&zt.instancing===!0||H.isSkinnedMesh&&zt.skinning===!1||!H.isSkinnedMesh&&zt.skinning===!0||H.isInstancedMesh&&zt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&zt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&zt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&zt.instancingMorph===!1&&H.morphTexture!==null||zt.envMap!==Pt||X.fog===!0&&zt.fog!==_t||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Rt.numPlanes||zt.numIntersection!==Rt.numIntersection)||zt.vertexAlphas!==dt||zt.vertexTangents!==bt||zt.morphTargets!==Bt||zt.morphNormals!==qt||zt.morphColors!==oe||zt.toneMapping!==Ee||zt.morphTargetsCount!==Wt)&&(Yt=!0):(Yt=!0,zt.__version=X.version);let Ke=zt.currentProgram;Yt===!0&&(Ke=gi(X,V,H));let _n=!1,De=!1,Te=!1;const ce=Ke.getUniforms(),Ie=zt.uniforms;if(Ut.useProgram(Ke.program)&&(_n=!0,De=!0,Te=!0),X.id!==rt&&(rt=X.id,De=!0),_n||st!==E){Ut.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ce.setValue(N,"projectionMatrix",E.projectionMatrix),ce.setValue(N,"viewMatrix",E.matrixWorldInverse);const Ue=ce.map.cameraPosition;Ue!==void 0&&Ue.setValue(N,re.setFromMatrixPosition(E.matrixWorld)),ge.logarithmicDepthBuffer&&ce.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ce.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),st!==E&&(st=E,De=!0,Te=!0)}if(zt.needsLights&&(le.state.directionalShadowMap.length>0&&ce.setValue(N,"directionalShadowMap",le.state.directionalShadowMap,k),le.state.spotShadowMap.length>0&&ce.setValue(N,"spotShadowMap",le.state.spotShadowMap,k),le.state.pointShadowMap.length>0&&ce.setValue(N,"pointShadowMap",le.state.pointShadowMap,k)),H.isSkinnedMesh){ce.setOptional(N,H,"bindMatrix"),ce.setOptional(N,H,"bindMatrixInverse");const Oe=H.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),ce.setValue(N,"boneTexture",Oe.boneTexture,k))}H.isBatchedMesh&&(ce.setOptional(N,H,"batchingTexture"),ce.setValue(N,"batchingTexture",H._matricesTexture,k),ce.setOptional(N,H,"batchingIdTexture"),ce.setValue(N,"batchingIdTexture",H._indirectTexture,k),ce.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&ce.setValue(N,"batchingColorTexture",H._colorsTexture,k));const ke=$.morphAttributes;if((ke.position!==void 0||ke.normal!==void 0||ke.color!==void 0)&&te.update(H,$,Ke),(De||zt.receiveShadow!==H.receiveShadow)&&(zt.receiveShadow=H.receiveShadow,ce.setValue(N,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Ie.envMap.value=Pt,Ie.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&V.environment!==null&&(Ie.envMapIntensity.value=V.environmentIntensity),Ie.dfgLUT!==void 0&&(Ie.dfgLUT.value=Wg()),De&&(ce.setValue(N,"toneMappingExposure",T.toneMappingExposure),zt.needsLights&&Ks(Ie,Te),_t&&X.fog===!0&&Gt.refreshFogUniforms(Ie,_t),Gt.refreshMaterialUniforms(Ie,X,kt,Ht,U.state.transmissionRenderTarget[E.id]),Ns.upload(N,qr(zt),Ie,k)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ns.upload(N,qr(zt),Ie,k),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ce.setValue(N,"center",H.center),ce.setValue(N,"modelViewMatrix",H.modelViewMatrix),ce.setValue(N,"normalMatrix",H.normalMatrix),ce.setValue(N,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Oe=X.uniformsGroups;for(let Ue=0,vi=Oe.length;Ue<vi;Ue++){const gn=Oe[Ue];ut.update(gn,Ke),ut.bind(gn,Ke)}}return Ke}function Ks(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function Kr(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(E,V,$){const X=y.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),y.get(E.texture).__webglTexture=V,y.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:$,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){const $=y.get(E);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0};const js=N.createFramebuffer();this.setRenderTarget=function(E,V=0,$=0){Q=E,B=V,J=$;let X=null,H=!1,_t=!1;if(E){const yt=y.get(E);if(yt.__useDefaultFramebuffer!==void 0){Ut.bindFramebuffer(N.FRAMEBUFFER,yt.__webglFramebuffer),tt.copy(E.viewport),q.copy(E.scissor),K=E.scissorTest,Ut.viewport(tt),Ut.scissor(q),Ut.setScissorTest(K),rt=-1;return}else if(yt.__webglFramebuffer===void 0)k.setupRenderTarget(E);else if(yt.__hasExternalTextures)k.rebindTextures(E,y.get(E.texture).__webglTexture,y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const bt=E.depthTexture;if(yt.__boundDepthTexture!==bt){if(bt!==null&&y.has(bt)&&(E.width!==bt.image.width||E.height!==bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(E)}}const Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(_t=!0);const dt=y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(dt[V])?X=dt[V][$]:X=dt[V],H=!0):E.samples>0&&k.useMultisampledRTT(E)===!1?X=y.get(E).__webglMultisampledFramebuffer:Array.isArray(dt)?X=dt[$]:X=dt,tt.copy(E.viewport),q.copy(E.scissor),K=E.scissorTest}else tt.copy(W).multiplyScalar(kt).floor(),q.copy(at).multiplyScalar(kt).floor(),K=Tt;if($!==0&&(X=js),Ut.bindFramebuffer(N.FRAMEBUFFER,X)&&Ut.drawBuffers(E,X),Ut.viewport(tt),Ut.scissor(q),Ut.setScissorTest(K),H){const yt=y.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,yt.__webglTexture,$)}else if(_t){const yt=V;for(let Pt=0;Pt<E.textures.length;Pt++){const dt=y.get(E.textures[Pt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Pt,dt.__webglTexture,$,yt)}}else if(E!==null&&$!==0){const yt=y.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yt.__webglTexture,$)}rt=-1},this.readRenderTargetPixels=function(E,V,$,X,H,_t,Ct,yt=0){if(!(E&&E.isWebGLRenderTarget)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){Ut.bindFramebuffer(N.FRAMEBUFFER,Pt);try{const dt=E.textures[yt],bt=dt.format,Bt=dt.type;if(!ge.textureFormatReadable(bt)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(Bt)){de("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-X&&$>=0&&$<=E.height-H&&(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt),N.readPixels(V,$,X,H,pt.convert(bt),pt.convert(Bt),_t))}finally{const dt=Q!==null?y.get(Q).__webglFramebuffer:null;Ut.bindFramebuffer(N.FRAMEBUFFER,dt)}}},this.readRenderTargetPixelsAsync=async function(E,V,$,X,H,_t,Ct,yt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt)if(V>=0&&V<=E.width-X&&$>=0&&$<=E.height-H){Ut.bindFramebuffer(N.FRAMEBUFFER,Pt);const dt=E.textures[yt],bt=dt.format,Bt=dt.type;if(!ge.textureFormatReadable(bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,qt),N.bufferData(N.PIXEL_PACK_BUFFER,_t.byteLength,N.STREAM_READ),E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt),N.readPixels(V,$,X,H,pt.convert(bt),pt.convert(Bt),0);const oe=Q!==null?y.get(Q).__webglFramebuffer:null;Ut.bindFramebuffer(N.FRAMEBUFFER,oe);const Ee=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await hf(N,Ee,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,qt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_t),N.deleteBuffer(qt),N.deleteSync(Ee),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,$=0){const X=Math.pow(2,-$),H=Math.floor(E.image.width*X),_t=Math.floor(E.image.height*X),Ct=V!==null?V.x:0,yt=V!==null?V.y:0;k.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,$,0,0,Ct,yt,H,_t),Ut.unbindTexture()};const Oi=N.createFramebuffer(),Js=N.createFramebuffer();this.copyTextureToTexture=function(E,V,$=null,X=null,H=0,_t=null){_t===null&&(H!==0?(Vr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=H,H=0):_t=0);let Ct,yt,Pt,dt,bt,Bt,qt,oe,Ee;const It=E.isCompressedTexture?E.mipmaps[_t]:E.image;if($!==null)Ct=$.max.x-$.min.x,yt=$.max.y-$.min.y,Pt=$.isBox3?$.max.z-$.min.z:1,dt=$.min.x,bt=$.min.y,Bt=$.isBox3?$.min.z:0;else{const ke=Math.pow(2,-H);Ct=Math.floor(It.width*ke),yt=Math.floor(It.height*ke),E.isDataArrayTexture?Pt=It.depth:E.isData3DTexture?Pt=Math.floor(It.depth*ke):Pt=1,dt=0,bt=0,Bt=0}X!==null?(qt=X.x,oe=X.y,Ee=X.z):(qt=0,oe=0,Ee=0);const Wt=pt.convert(V.format),zt=pt.convert(V.type);let le;V.isData3DTexture?(k.setTexture3D(V,0),le=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(k.setTexture2DArray(V,0),le=N.TEXTURE_2D_ARRAY):(k.setTexture2D(V,0),le=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const Yt=N.getParameter(N.UNPACK_ROW_LENGTH),Ke=N.getParameter(N.UNPACK_IMAGE_HEIGHT),_n=N.getParameter(N.UNPACK_SKIP_PIXELS),De=N.getParameter(N.UNPACK_SKIP_ROWS),Te=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,It.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,It.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,dt),N.pixelStorei(N.UNPACK_SKIP_ROWS,bt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Bt);const ce=E.isDataArrayTexture||E.isData3DTexture,Ie=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const ke=y.get(E),Oe=y.get(V),Ue=y.get(ke.__renderTarget),vi=y.get(Oe.__renderTarget);Ut.bindFramebuffer(N.READ_FRAMEBUFFER,Ue.__webglFramebuffer),Ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let gn=0;gn<Pt;gn++)ce&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,y.get(E).__webglTexture,H,Bt+gn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,y.get(V).__webglTexture,_t,Ee+gn)),N.blitFramebuffer(dt,bt,Ct,yt,qt,oe,Ct,yt,N.DEPTH_BUFFER_BIT,N.NEAREST);Ut.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||y.has(E)){const ke=y.get(E),Oe=y.get(V);Ut.bindFramebuffer(N.READ_FRAMEBUFFER,Oi),Ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,Js);for(let Ue=0;Ue<Pt;Ue++)ce?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,ke.__webglTexture,H,Bt+Ue):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ke.__webglTexture,H),Ie?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oe.__webglTexture,_t,Ee+Ue):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Oe.__webglTexture,_t),H!==0?N.blitFramebuffer(dt,bt,Ct,yt,qt,oe,Ct,yt,N.COLOR_BUFFER_BIT,N.NEAREST):Ie?N.copyTexSubImage3D(le,_t,qt,oe,Ee+Ue,dt,bt,Ct,yt):N.copyTexSubImage2D(le,_t,qt,oe,dt,bt,Ct,yt);Ut.bindFramebuffer(N.READ_FRAMEBUFFER,null),Ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ie?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(le,_t,qt,oe,Ee,Ct,yt,Pt,Wt,zt,It.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(le,_t,qt,oe,Ee,Ct,yt,Pt,Wt,It.data):N.texSubImage3D(le,_t,qt,oe,Ee,Ct,yt,Pt,Wt,zt,It):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,_t,qt,oe,Ct,yt,Wt,zt,It.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,_t,qt,oe,It.width,It.height,Wt,It.data):N.texSubImage2D(N.TEXTURE_2D,_t,qt,oe,Ct,yt,Wt,zt,It);N.pixelStorei(N.UNPACK_ROW_LENGTH,Yt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ke),N.pixelStorei(N.UNPACK_SKIP_PIXELS,_n),N.pixelStorei(N.UNPACK_SKIP_ROWS,De),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Te),_t===0&&V.generateMipmaps&&N.generateMipmap(le),Ut.unbindTexture()},this.initRenderTarget=function(E){y.get(E).__webglFramebuffer===void 0&&k.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?k.setTextureCube(E,0):E.isData3DTexture?k.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?k.setTexture2DArray(E,0):k.setTexture2D(E,0),Ut.unbindTexture()},this.resetState=function(){B=0,J=0,Q=null,Ut.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}}class Zg{constructor(t,e){this.container=t,this.hal=e,this.scene=new Ff,this.camera=new pn(75,t.clientWidth/t.clientHeight,.1,1e3),this.renderer=new Xg({alpha:!0,antialias:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),t.appendChild(this.renderer.domElement),this.car=this.createCarModel(),this.scene.add(this.car);const r=new Yf(4210752);this.scene.add(r);const o=new qf(16777215,1);o.position.set(5,5,5),this.scene.add(o),this.camera.position.z=5,this.setupBindings(),this.animate(),window.addEventListener("resize",()=>this.onResize())}scene;camera;renderer;car;doors={};createCarModel(){const t=new Nr,e=new Ui(2,.8,4),r=new ks({color:62463,wireframe:!0,transparent:!0,opacity:.5}),o=new bn(e,r);return t.add(o),this.doors.fl=this.createDoorMesh(-1.1,0,1),this.doors.fr=this.createDoorMesh(1.1,0,1),t.add(this.doors.fl),t.add(this.doors.fr),t}createDoorMesh(t,e,r){const o=new Ui(.2,.6,1.2),l=new ks({color:16777215,wireframe:!0}),h=new bn(o,l);return h.position.set(t,e,r),h}setupBindings(){Jn(()=>{const t=this.hal.body.doors.fl.value;this.doors.fl.rotation.y=t?-.5:0,this.doors.fl.material.color.setHex(t?16711765:16777215)}),Jn(()=>{const t=this.hal.body.doors.fr.value;this.doors.fr.rotation.y=t?.5:0,this.doors.fr.material.color.setHex(t?16711765:16777215)}),Jn(()=>{})}animate(){requestAnimationFrame(()=>this.animate()),this.car.rotation.y+=.005,this.renderer.render(this.scene,this.camera)}onResize(){this.container&&(this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight))}}class qg{isListening=we(!1);lastCommand=we("");recognition=null;constructor(){if("webkitSpeechRecognition"in window||"SpeechRecognition"in window){const t=window.SpeechRecognition||window.webkitSpeechRecognition;this.recognition=new t,this.recognition.continuous=!0,this.recognition.interimResults=!1,this.recognition.onstart=()=>this.isListening.value=!0,this.recognition.onend=()=>this.isListening.value=!1,this.recognition.onresult=e=>{const r=e.results.length-1,o=e.results[r][0].transcript.trim().toLowerCase();this.lastCommand.value=o,console.log("Voice Command:",o),this.processCommand(o)};try{this.recognition.start()}catch{console.log("Auto-start voice blocked")}}}processCommand(t){t.includes("lights on")}}var Or={exports:{}};var Yg=Or.exports,Wc;function Kg(){return Wc||(Wc=1,(function(s,t){(function(e,r){r(t)})(Yg,(function(e){var r="1.9.4";function o(n){var i,a,c,p;for(a=1,c=arguments.length;a<c;a++){p=arguments[a];for(i in p)n[i]=p[i]}return n}var l=Object.create||(function(){function n(){}return function(i){return n.prototype=i,new n}})();function h(n,i){var a=Array.prototype.slice;if(n.bind)return n.bind.apply(n,a.call(arguments,1));var c=a.call(arguments,2);return function(){return n.apply(i,c.length?c.concat(a.call(arguments)):arguments)}}var u=0;function f(n){return"_leaflet_id"in n||(n._leaflet_id=++u),n._leaflet_id}function d(n,i,a){var c,p,M,I;return I=function(){c=!1,p&&(M.apply(a,p),p=!1)},M=function(){c?p=arguments:(n.apply(a,arguments),setTimeout(I,i),c=!0)},M}function g(n,i,a){var c=i[1],p=i[0],M=c-p;return n===c&&a?n:((n-p)%M+M)%M+p}function _(){return!1}function v(n,i){if(i===!1)return n;var a=Math.pow(10,i===void 0?6:i);return Math.round(n*a)/a}function S(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function b(n){return S(n).split(/\s+/)}function w(n,i){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?l(n.options):{});for(var a in i)n.options[a]=i[a];return n.options}function x(n,i,a){var c=[];for(var p in n)c.push(encodeURIComponent(a?p.toUpperCase():p)+"="+encodeURIComponent(n[p]));return(!i||i.indexOf("?")===-1?"?":"&")+c.join("&")}var m=/\{ *([\w_ -]+) *\}/g;function D(n,i){return n.replace(m,function(a,c){var p=i[c];if(p===void 0)throw new Error("No value provided for variable "+a);return typeof p=="function"&&(p=p(i)),p})}var P=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function R(n,i){for(var a=0;a<n.length;a++)if(n[a]===i)return a;return-1}var U="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function F(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var O=0;function Z(n){var i=+new Date,a=Math.max(0,16-(i-O));return O=i+a,window.setTimeout(n,a)}var T=window.requestAnimationFrame||F("RequestAnimationFrame")||Z,A=window.cancelAnimationFrame||F("CancelAnimationFrame")||F("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function B(n,i,a){if(a&&T===Z)n.call(i);else return T.call(window,h(n,i))}function J(n){n&&A.call(window,n)}var Q={__proto__:null,extend:o,create:l,bind:h,get lastId(){return u},stamp:f,throttle:d,wrapNum:g,falseFn:_,formatNum:v,trim:S,splitWords:b,setOptions:w,getParamString:x,template:D,isArray:P,indexOf:R,emptyImageUrl:U,requestFn:T,cancelFn:A,requestAnimFrame:B,cancelAnimFrame:J};function rt(){}rt.extend=function(n){var i=function(){w(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},a=i.__super__=this.prototype,c=l(a);c.constructor=i,i.prototype=c;for(var p in this)Object.prototype.hasOwnProperty.call(this,p)&&p!=="prototype"&&p!=="__super__"&&(i[p]=this[p]);return n.statics&&o(i,n.statics),n.includes&&(st(n.includes),o.apply(null,[c].concat(n.includes))),o(c,n),delete c.statics,delete c.includes,c.options&&(c.options=a.options?l(a.options):{},o(c.options,n.options)),c._initHooks=[],c.callInitHooks=function(){if(!this._initHooksCalled){a.callInitHooks&&a.callInitHooks.call(this),this._initHooksCalled=!0;for(var M=0,I=c._initHooks.length;M<I;M++)c._initHooks[M].call(this)}},i},rt.include=function(n){var i=this.prototype.options;return o(this.prototype,n),n.options&&(this.prototype.options=i,this.mergeOptions(n.options)),this},rt.mergeOptions=function(n){return o(this.prototype.options,n),this},rt.addInitHook=function(n){var i=Array.prototype.slice.call(arguments,1),a=typeof n=="function"?n:function(){this[n].apply(this,i)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(a),this};function st(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=P(n)?n:[n];for(var i=0;i<n.length;i++)n[i]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var tt={on:function(n,i,a){if(typeof n=="object")for(var c in n)this._on(c,n[c],i);else{n=b(n);for(var p=0,M=n.length;p<M;p++)this._on(n[p],i,a)}return this},off:function(n,i,a){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var c in n)this._off(c,n[c],i);else{n=b(n);for(var p=arguments.length===1,M=0,I=n.length;M<I;M++)p?this._off(n[M]):this._off(n[M],i,a)}return this},_on:function(n,i,a,c){if(typeof i!="function"){console.warn("wrong listener type: "+typeof i);return}if(this._listens(n,i,a)===!1){a===this&&(a=void 0);var p={fn:i,ctx:a};c&&(p.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(p)}},_off:function(n,i,a){var c,p,M;if(this._events&&(c=this._events[n],!!c)){if(arguments.length===1){if(this._firingCount)for(p=0,M=c.length;p<M;p++)c[p].fn=_;delete this._events[n];return}if(typeof i!="function"){console.warn("wrong listener type: "+typeof i);return}var I=this._listens(n,i,a);if(I!==!1){var G=c[I];this._firingCount&&(G.fn=_,this._events[n]=c=c.slice()),c.splice(I,1)}}},fire:function(n,i,a){if(!this.listens(n,a))return this;var c=o({},i,{type:n,target:this,sourceTarget:i&&i.sourceTarget||this});if(this._events){var p=this._events[n];if(p){this._firingCount=this._firingCount+1||1;for(var M=0,I=p.length;M<I;M++){var G=p[M],j=G.fn;G.once&&this.off(n,j,G.ctx),j.call(G.ctx||this,c)}this._firingCount--}}return a&&this._propagateEvent(c),this},listens:function(n,i,a,c){typeof n!="string"&&console.warn('"string" type argument expected');var p=i;typeof i!="function"&&(c=!!i,p=void 0,a=void 0);var M=this._events&&this._events[n];if(M&&M.length&&this._listens(n,p,a)!==!1)return!0;if(c){for(var I in this._eventParents)if(this._eventParents[I].listens(n,i,a,c))return!0}return!1},_listens:function(n,i,a){if(!this._events)return!1;var c=this._events[n]||[];if(!i)return!!c.length;a===this&&(a=void 0);for(var p=0,M=c.length;p<M;p++)if(c[p].fn===i&&c[p].ctx===a)return p;return!1},once:function(n,i,a){if(typeof n=="object")for(var c in n)this._on(c,n[c],i,!0);else{n=b(n);for(var p=0,M=n.length;p<M;p++)this._on(n[p],i,a,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[f(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[f(n)],this},_propagateEvent:function(n){for(var i in this._eventParents)this._eventParents[i].fire(n.type,o({layer:n.target,propagatedFrom:n.target},n),!0)}};tt.addEventListener=tt.on,tt.removeEventListener=tt.clearAllEventListeners=tt.off,tt.addOneTimeEventListener=tt.once,tt.fireEvent=tt.fire,tt.hasEventListeners=tt.listens;var q=rt.extend(tt);function K(n,i,a){this.x=a?Math.round(n):n,this.y=a?Math.round(i):i}var Et=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};K.prototype={clone:function(){return new K(this.x,this.y)},add:function(n){return this.clone()._add(it(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(it(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new K(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new K(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=Et(this.x),this.y=Et(this.y),this},distanceTo:function(n){n=it(n);var i=n.x-this.x,a=n.y-this.y;return Math.sqrt(i*i+a*a)},equals:function(n){return n=it(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=it(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+v(this.x)+", "+v(this.y)+")"}};function it(n,i,a){return n instanceof K?n:P(n)?new K(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new K(n.x,n.y):new K(n,i,a)}function ft(n,i){if(n)for(var a=i?[n,i]:n,c=0,p=a.length;c<p;c++)this.extend(a[c])}ft.prototype={extend:function(n){var i,a;if(!n)return this;if(n instanceof K||typeof n[0]=="number"||"x"in n)i=a=it(n);else if(n=Ht(n),i=n.min,a=n.max,!i||!a)return this;return!this.min&&!this.max?(this.min=i.clone(),this.max=a.clone()):(this.min.x=Math.min(i.x,this.min.x),this.max.x=Math.max(a.x,this.max.x),this.min.y=Math.min(i.y,this.min.y),this.max.y=Math.max(a.y,this.max.y)),this},getCenter:function(n){return it((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return it(this.min.x,this.max.y)},getTopRight:function(){return it(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var i,a;return typeof n[0]=="number"||n instanceof K?n=it(n):n=Ht(n),n instanceof ft?(i=n.min,a=n.max):i=a=n,i.x>=this.min.x&&a.x<=this.max.x&&i.y>=this.min.y&&a.y<=this.max.y},intersects:function(n){n=Ht(n);var i=this.min,a=this.max,c=n.min,p=n.max,M=p.x>=i.x&&c.x<=a.x,I=p.y>=i.y&&c.y<=a.y;return M&&I},overlaps:function(n){n=Ht(n);var i=this.min,a=this.max,c=n.min,p=n.max,M=p.x>i.x&&c.x<a.x,I=p.y>i.y&&c.y<a.y;return M&&I},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var i=this.min,a=this.max,c=Math.abs(i.x-a.x)*n,p=Math.abs(i.y-a.y)*n;return Ht(it(i.x-c,i.y-p),it(a.x+c,a.y+p))},equals:function(n){return n?(n=Ht(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Ht(n,i){return!n||n instanceof ft?n:new ft(n,i)}function kt(n,i){if(n)for(var a=i?[n,i]:n,c=0,p=a.length;c<p;c++)this.extend(a[c])}kt.prototype={extend:function(n){var i=this._southWest,a=this._northEast,c,p;if(n instanceof Vt)c=n,p=n;else if(n instanceof kt){if(c=n._southWest,p=n._northEast,!c||!p)return this}else return n?this.extend(W(n)||Kt(n)):this;return!i&&!a?(this._southWest=new Vt(c.lat,c.lng),this._northEast=new Vt(p.lat,p.lng)):(i.lat=Math.min(c.lat,i.lat),i.lng=Math.min(c.lng,i.lng),a.lat=Math.max(p.lat,a.lat),a.lng=Math.max(p.lng,a.lng)),this},pad:function(n){var i=this._southWest,a=this._northEast,c=Math.abs(i.lat-a.lat)*n,p=Math.abs(i.lng-a.lng)*n;return new kt(new Vt(i.lat-c,i.lng-p),new Vt(a.lat+c,a.lng+p))},getCenter:function(){return new Vt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Vt(this.getNorth(),this.getWest())},getSouthEast:function(){return new Vt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof Vt||"lat"in n?n=W(n):n=Kt(n);var i=this._southWest,a=this._northEast,c,p;return n instanceof kt?(c=n.getSouthWest(),p=n.getNorthEast()):c=p=n,c.lat>=i.lat&&p.lat<=a.lat&&c.lng>=i.lng&&p.lng<=a.lng},intersects:function(n){n=Kt(n);var i=this._southWest,a=this._northEast,c=n.getSouthWest(),p=n.getNorthEast(),M=p.lat>=i.lat&&c.lat<=a.lat,I=p.lng>=i.lng&&c.lng<=a.lng;return M&&I},overlaps:function(n){n=Kt(n);var i=this._southWest,a=this._northEast,c=n.getSouthWest(),p=n.getNorthEast(),M=p.lat>i.lat&&c.lat<a.lat,I=p.lng>i.lng&&c.lng<a.lng;return M&&I},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,i){return n?(n=Kt(n),this._southWest.equals(n.getSouthWest(),i)&&this._northEast.equals(n.getNorthEast(),i)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Kt(n,i){return n instanceof kt?n:new kt(n,i)}function Vt(n,i,a){if(isNaN(n)||isNaN(i))throw new Error("Invalid LatLng object: ("+n+", "+i+")");this.lat=+n,this.lng=+i,a!==void 0&&(this.alt=+a)}Vt.prototype={equals:function(n,i){if(!n)return!1;n=W(n);var a=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return a<=(i===void 0?1e-9:i)},toString:function(n){return"LatLng("+v(this.lat,n)+", "+v(this.lng,n)+")"},distanceTo:function(n){return Tt.distance(this,W(n))},wrap:function(){return Tt.wrapLatLng(this)},toBounds:function(n){var i=180*n/40075017,a=i/Math.cos(Math.PI/180*this.lat);return Kt([this.lat-i,this.lng-a],[this.lat+i,this.lng+a])},clone:function(){return new Vt(this.lat,this.lng,this.alt)}};function W(n,i,a){return n instanceof Vt?n:P(n)&&typeof n[0]!="object"?n.length===3?new Vt(n[0],n[1],n[2]):n.length===2?new Vt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new Vt(n.lat,"lng"in n?n.lng:n.lon,n.alt):i===void 0?null:new Vt(n,i,a)}var at={latLngToPoint:function(n,i){var a=this.projection.project(n),c=this.scale(i);return this.transformation._transform(a,c)},pointToLatLng:function(n,i){var a=this.scale(i),c=this.transformation.untransform(n,a);return this.projection.unproject(c)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var i=this.projection.bounds,a=this.scale(n),c=this.transformation.transform(i.min,a),p=this.transformation.transform(i.max,a);return new ft(c,p)},infinite:!1,wrapLatLng:function(n){var i=this.wrapLng?g(n.lng,this.wrapLng,!0):n.lng,a=this.wrapLat?g(n.lat,this.wrapLat,!0):n.lat,c=n.alt;return new Vt(a,i,c)},wrapLatLngBounds:function(n){var i=n.getCenter(),a=this.wrapLatLng(i),c=i.lat-a.lat,p=i.lng-a.lng;if(c===0&&p===0)return n;var M=n.getSouthWest(),I=n.getNorthEast(),G=new Vt(M.lat-c,M.lng-p),j=new Vt(I.lat-c,I.lng-p);return new kt(G,j)}},Tt=o({},at,{wrapLng:[-180,180],R:6371e3,distance:function(n,i){var a=Math.PI/180,c=n.lat*a,p=i.lat*a,M=Math.sin((i.lat-n.lat)*a/2),I=Math.sin((i.lng-n.lng)*a/2),G=M*M+Math.cos(c)*Math.cos(p)*I*I,j=2*Math.atan2(Math.sqrt(G),Math.sqrt(1-G));return this.R*j}}),jt=6378137,Lt={R:jt,MAX_LATITUDE:85.0511287798,project:function(n){var i=Math.PI/180,a=this.MAX_LATITUDE,c=Math.max(Math.min(a,n.lat),-a),p=Math.sin(c*i);return new K(this.R*n.lng*i,this.R*Math.log((1+p)/(1-p))/2)},unproject:function(n){var i=180/Math.PI;return new Vt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*i,n.x*i/this.R)},bounds:(function(){var n=jt*Math.PI;return new ft([-n,-n],[n,n])})()};function se(n,i,a,c){if(P(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=i,this._c=a,this._d=c}se.prototype={transform:function(n,i){return this._transform(n.clone(),i)},_transform:function(n,i){return i=i||1,n.x=i*(this._a*n.x+this._b),n.y=i*(this._c*n.y+this._d),n},untransform:function(n,i){return i=i||1,new K((n.x/i-this._b)/this._a,(n.y/i-this._d)/this._c)}};function Ae(n,i,a,c){return new se(n,i,a,c)}var re=o({},Tt,{code:"EPSG:3857",projection:Lt,transformation:(function(){var n=.5/(Math.PI*Lt.R);return Ae(n,.5,-n,.5)})()}),pe=o({},re,{code:"EPSG:900913"});function _e(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function $t(n,i){var a="",c,p,M,I,G,j;for(c=0,M=n.length;c<M;c++){for(G=n[c],p=0,I=G.length;p<I;p++)j=G[p],a+=(p?"L":"M")+j.x+" "+j.y;a+=i?Ot.svg?"z":"x":""}return a||"M0 0"}var Ce=document.documentElement.style,N="ActiveXObject"in window,Pe=N&&!document.addEventListener,ue="msLaunchUri"in navigator&&!("documentMode"in document),ge=cn("webkit"),Ut=cn("android"),C=cn("android 2")||cn("android 3"),y=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),k=Ut&&cn("Google")&&y<537&&!("AudioNode"in window),nt=!!window.opera,lt=!ue&&cn("chrome"),et=cn("gecko")&&!ge&&!nt&&!N,Ft=!lt&&cn("safari"),gt=cn("phantom"),Dt="OTransition"in Ce,Gt=navigator.platform.indexOf("Win")===0,ht=N&&"transition"in Ce,vt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!C,Rt="MozPerspective"in Ce,Nt=!window.L_DISABLE_3D&&(ht||vt||Rt)&&!Dt&&!gt,mt=typeof orientation<"u"||cn("mobile"),te=mt&&ge,z=mt&&vt,St=!window.PointerEvent&&window.MSPointerEvent,pt=!!(window.PointerEvent||St),wt="ontouchstart"in window||!!window.TouchEvent,ut=!window.L_NO_TOUCH&&(wt||pt),ot=mt&&nt,xt=mt&&et,Zt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Me=(function(){var n=!1;try{var i=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",_,i),window.removeEventListener("testPassiveEventSupport",_,i)}catch{}return n})(),me=(function(){return!!document.createElement("canvas").getContext})(),tn=!!(document.createElementNS&&_e("svg").createSVGRect),mn=!!tn&&(function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),qs=!tn&&(function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var i=n.firstChild;return i.style.behavior="url(#default#VML)",i&&typeof i.adj=="object"}catch{return!1}})(),Zr=navigator.platform.indexOf("Mac")===0,_r=navigator.platform.indexOf("Linux")===0;function cn(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var Ot={ie:N,ielt9:Pe,edge:ue,webkit:ge,android:Ut,android23:C,androidStock:k,opera:nt,chrome:lt,gecko:et,safari:Ft,phantom:gt,opera12:Dt,win:Gt,ie3d:ht,webkit3d:vt,gecko3d:Rt,any3d:Nt,mobile:mt,mobileWebkit:te,mobileWebkit3d:z,msPointer:St,pointer:pt,touch:ut,touchNative:wt,mobileOpera:ot,mobileGecko:xt,retina:Zt,passiveEvents:Me,canvas:me,svg:tn,vml:qs,inlineSvg:mn,mac:Zr,linux:_r},gr=Ot.msPointer?"MSPointerDown":"pointerdown",wn=Ot.msPointer?"MSPointerMove":"pointermove",Ni=Ot.msPointer?"MSPointerUp":"pointerup",vr=Ot.msPointer?"MSPointerCancel":"pointercancel",Fi={touchstart:gr,touchmove:wn,touchend:Ni,touchcancel:vr},_i={touchstart:Js,touchmove:Oi,touchend:Oi,touchcancel:Oi},zn={},gi=!1;function qr(n,i,a){return i==="touchstart"&&js(),_i[i]?(a=_i[i].bind(this,a),n.addEventListener(Fi[i],a,!1),a):(console.warn("wrong event specified:",i),_)}function Yr(n,i,a){if(!Fi[i]){console.warn("wrong event specified:",i);return}n.removeEventListener(Fi[i],a,!1)}function Ys(n){zn[n.pointerId]=n}function Ks(n){zn[n.pointerId]&&(zn[n.pointerId]=n)}function Kr(n){delete zn[n.pointerId]}function js(){gi||(document.addEventListener(gr,Ys,!0),document.addEventListener(wn,Ks,!0),document.addEventListener(Ni,Kr,!0),document.addEventListener(vr,Kr,!0),gi=!0)}function Oi(n,i){if(i.pointerType!==(i.MSPOINTER_TYPE_MOUSE||"mouse")){i.touches=[];for(var a in zn)i.touches.push(zn[a]);i.changedTouches=[i],n(i)}}function Js(n,i){i.MSPOINTER_TYPE_TOUCH&&i.pointerType===i.MSPOINTER_TYPE_TOUCH&&Ge(i),Oi(n,i)}function E(n){var i={},a,c;for(c in n)a=n[c],i[c]=a&&a.bind?a.bind(n):a;return n=i,i.type="dblclick",i.detail=2,i.isTrusted=!1,i._simulated=!0,i}var V=200;function $(n,i){n.addEventListener("dblclick",i);var a=0,c;function p(M){if(M.detail!==1){c=M.detail;return}if(!(M.pointerType==="mouse"||M.sourceCapabilities&&!M.sourceCapabilities.firesTouchEvents)){var I=cl(M);if(!(I.some(function(j){return j instanceof HTMLLabelElement&&j.attributes.for})&&!I.some(function(j){return j instanceof HTMLInputElement||j instanceof HTMLSelectElement}))){var G=Date.now();G-a<=V?(c++,c===2&&i(E(M))):c=1,a=G}}}return n.addEventListener("click",p),{dblclick:i,simDblclick:p}}function X(n,i){n.removeEventListener("dblclick",i.dblclick),n.removeEventListener("click",i.simDblclick)}var H=_n(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),_t=_n(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Ct=_t==="webkitTransition"||_t==="OTransition"?_t+"End":"transitionend";function yt(n){return typeof n=="string"?document.getElementById(n):n}function Pt(n,i){var a=n.style[i]||n.currentStyle&&n.currentStyle[i];if((!a||a==="auto")&&document.defaultView){var c=document.defaultView.getComputedStyle(n,null);a=c?c[i]:null}return a==="auto"?null:a}function dt(n,i,a){var c=document.createElement(n);return c.className=i||"",a&&a.appendChild(c),c}function bt(n){var i=n.parentNode;i&&i.removeChild(n)}function Bt(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function qt(n){var i=n.parentNode;i&&i.lastChild!==n&&i.appendChild(n)}function oe(n){var i=n.parentNode;i&&i.firstChild!==n&&i.insertBefore(n,i.firstChild)}function Ee(n,i){if(n.classList!==void 0)return n.classList.contains(i);var a=le(n);return a.length>0&&new RegExp("(^|\\s)"+i+"(\\s|$)").test(a)}function It(n,i){if(n.classList!==void 0)for(var a=b(i),c=0,p=a.length;c<p;c++)n.classList.add(a[c]);else if(!Ee(n,i)){var M=le(n);zt(n,(M?M+" ":"")+i)}}function Wt(n,i){n.classList!==void 0?n.classList.remove(i):zt(n,S((" "+le(n)+" ").replace(" "+i+" "," ")))}function zt(n,i){n.className.baseVal===void 0?n.className=i:n.className.baseVal=i}function le(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function Yt(n,i){"opacity"in n.style?n.style.opacity=i:"filter"in n.style&&Ke(n,i)}function Ke(n,i){var a=!1,c="DXImageTransform.Microsoft.Alpha";try{a=n.filters.item(c)}catch{if(i===1)return}i=Math.round(i*100),a?(a.Enabled=i!==100,a.Opacity=i):n.style.filter+=" progid:"+c+"(opacity="+i+")"}function _n(n){for(var i=document.documentElement.style,a=0;a<n.length;a++)if(n[a]in i)return n[a];return!1}function De(n,i,a){var c=i||new K(0,0);n.style[H]=(Ot.ie3d?"translate("+c.x+"px,"+c.y+"px)":"translate3d("+c.x+"px,"+c.y+"px,0)")+(a?" scale("+a+")":"")}function Te(n,i){n._leaflet_pos=i,Ot.any3d?De(n,i):(n.style.left=i.x+"px",n.style.top=i.y+"px")}function ce(n){return n._leaflet_pos||new K(0,0)}var Ie,ke,Oe;if("onselectstart"in document)Ie=function(){Qt(window,"selectstart",Ge)},ke=function(){be(window,"selectstart",Ge)};else{var Ue=_n(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Ie=function(){if(Ue){var n=document.documentElement.style;Oe=n[Ue],n[Ue]="none"}},ke=function(){Ue&&(document.documentElement.style[Ue]=Oe,Oe=void 0)}}function vi(){Qt(window,"dragstart",Ge)}function gn(){be(window,"dragstart",Ge)}var jr,$s;function Qs(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(Jr(),jr=n,$s=n.style.outlineStyle,n.style.outlineStyle="none",Qt(window,"keydown",Jr))}function Jr(){jr&&(jr.style.outlineStyle=$s,jr=void 0,$s=void 0,be(window,"keydown",Jr))}function al(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function to(n){var i=n.getBoundingClientRect();return{x:i.width/n.offsetWidth||1,y:i.height/n.offsetHeight||1,boundingClientRect:i}}var Lh={__proto__:null,TRANSFORM:H,TRANSITION:_t,TRANSITION_END:Ct,get:yt,getStyle:Pt,create:dt,remove:bt,empty:Bt,toFront:qt,toBack:oe,hasClass:Ee,addClass:It,removeClass:Wt,setClass:zt,getClass:le,setOpacity:Yt,testProp:_n,setTransform:De,setPosition:Te,getPosition:ce,get disableTextSelection(){return Ie},get enableTextSelection(){return ke},disableImageDrag:vi,enableImageDrag:gn,preventOutline:Qs,restoreOutline:Jr,getSizedParentNode:al,getScale:to};function Qt(n,i,a,c){if(i&&typeof i=="object")for(var p in i)no(n,p,i[p],a);else{i=b(i);for(var M=0,I=i.length;M<I;M++)no(n,i[M],a,c)}return this}var An="_leaflet_events";function be(n,i,a,c){if(arguments.length===1)ll(n),delete n[An];else if(i&&typeof i=="object")for(var p in i)io(n,p,i[p],a);else if(i=b(i),arguments.length===2)ll(n,function(G){return R(i,G)!==-1});else for(var M=0,I=i.length;M<I;M++)io(n,i[M],a,c);return this}function ll(n,i){for(var a in n[An]){var c=a.split(/\d/)[0];(!i||i(c))&&io(n,c,null,null,a)}}var eo={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function no(n,i,a,c){var p=i+f(a)+(c?"_"+f(c):"");if(n[An]&&n[An][p])return this;var M=function(G){return a.call(c||n,G||window.event)},I=M;!Ot.touchNative&&Ot.pointer&&i.indexOf("touch")===0?M=qr(n,i,M):Ot.touch&&i==="dblclick"?M=$(n,M):"addEventListener"in n?i==="touchstart"||i==="touchmove"||i==="wheel"||i==="mousewheel"?n.addEventListener(eo[i]||i,M,Ot.passiveEvents?{passive:!1}:!1):i==="mouseenter"||i==="mouseleave"?(M=function(G){G=G||window.event,so(n,G)&&I(G)},n.addEventListener(eo[i],M,!1)):n.addEventListener(i,I,!1):n.attachEvent("on"+i,M),n[An]=n[An]||{},n[An][p]=M}function io(n,i,a,c,p){p=p||i+f(a)+(c?"_"+f(c):"");var M=n[An]&&n[An][p];if(!M)return this;!Ot.touchNative&&Ot.pointer&&i.indexOf("touch")===0?Yr(n,i,M):Ot.touch&&i==="dblclick"?X(n,M):"removeEventListener"in n?n.removeEventListener(eo[i]||i,M,!1):n.detachEvent("on"+i,M),n[An][p]=null}function xi(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function ro(n){return no(n,"wheel",xi),this}function xr(n){return Qt(n,"mousedown touchstart dblclick contextmenu",xi),n._leaflet_disable_click=!0,this}function Ge(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function yi(n){return Ge(n),xi(n),this}function cl(n){if(n.composedPath)return n.composedPath();for(var i=[],a=n.target;a;)i.push(a),a=a.parentNode;return i}function hl(n,i){if(!i)return new K(n.clientX,n.clientY);var a=to(i),c=a.boundingClientRect;return new K((n.clientX-c.left)/a.x-i.clientLeft,(n.clientY-c.top)/a.y-i.clientTop)}var Dh=Ot.linux&&Ot.chrome?window.devicePixelRatio:Ot.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function ul(n){return Ot.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Dh:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function so(n,i){var a=i.relatedTarget;if(!a)return!0;try{for(;a&&a!==n;)a=a.parentNode}catch{return!1}return a!==n}var Ih={__proto__:null,on:Qt,off:be,stopPropagation:xi,disableScrollPropagation:ro,disableClickPropagation:xr,preventDefault:Ge,stop:yi,getPropagationPath:cl,getMousePosition:hl,getWheelDelta:ul,isExternalTarget:so,addListener:Qt,removeListener:be},fl=q.extend({run:function(n,i,a,c){this.stop(),this._el=n,this._inProgress=!0,this._duration=a||.25,this._easeOutPower=1/Math.max(c||.5,.2),this._startPos=ce(n),this._offset=i.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=B(this._animate,this),this._step()},_step:function(n){var i=+new Date-this._startTime,a=this._duration*1e3;i<a?this._runFrame(this._easeOut(i/a),n):(this._runFrame(1),this._complete())},_runFrame:function(n,i){var a=this._startPos.add(this._offset.multiplyBy(n));i&&a._round(),Te(this._el,a),this.fire("step")},_complete:function(){J(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),he=q.extend({options:{crs:re,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,i){i=w(this,i),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=h(this._onResize,this),this._initEvents(),i.maxBounds&&this.setMaxBounds(i.maxBounds),i.zoom!==void 0&&(this._zoom=this._limitZoom(i.zoom)),i.center&&i.zoom!==void 0&&this.setView(W(i.center),i.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=_t&&Ot.any3d&&!Ot.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Qt(this._proxy,Ct,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,i,a){if(i=i===void 0?this._zoom:this._limitZoom(i),n=this._limitCenter(W(n),i,this.options.maxBounds),a=a||{},this._stop(),this._loaded&&!a.reset&&a!==!0){a.animate!==void 0&&(a.zoom=o({animate:a.animate},a.zoom),a.pan=o({animate:a.animate,duration:a.duration},a.pan));var c=this._zoom!==i?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,i,a.zoom):this._tryAnimatedPan(n,a.pan);if(c)return clearTimeout(this._sizeTimer),this}return this._resetView(n,i,a.pan&&a.pan.noMoveStart),this},setZoom:function(n,i){return this._loaded?this.setView(this.getCenter(),n,{zoom:i}):(this._zoom=n,this)},zoomIn:function(n,i){return n=n||(Ot.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,i)},zoomOut:function(n,i){return n=n||(Ot.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,i)},setZoomAround:function(n,i,a){var c=this.getZoomScale(i),p=this.getSize().divideBy(2),M=n instanceof K?n:this.latLngToContainerPoint(n),I=M.subtract(p).multiplyBy(1-1/c),G=this.containerPointToLatLng(p.add(I));return this.setView(G,i,{zoom:a})},_getBoundsCenterZoom:function(n,i){i=i||{},n=n.getBounds?n.getBounds():Kt(n);var a=it(i.paddingTopLeft||i.padding||[0,0]),c=it(i.paddingBottomRight||i.padding||[0,0]),p=this.getBoundsZoom(n,!1,a.add(c));if(p=typeof i.maxZoom=="number"?Math.min(i.maxZoom,p):p,p===1/0)return{center:n.getCenter(),zoom:p};var M=c.subtract(a).divideBy(2),I=this.project(n.getSouthWest(),p),G=this.project(n.getNorthEast(),p),j=this.unproject(I.add(G).divideBy(2).add(M),p);return{center:j,zoom:p}},fitBounds:function(n,i){if(n=Kt(n),!n.isValid())throw new Error("Bounds are not valid.");var a=this._getBoundsCenterZoom(n,i);return this.setView(a.center,a.zoom,i)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,i){return this.setView(n,this._zoom,{pan:i})},panBy:function(n,i){if(n=it(n).round(),i=i||{},!n.x&&!n.y)return this.fire("moveend");if(i.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new fl,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),i.noMoveStart||this.fire("movestart"),i.animate!==!1){It(this._mapPane,"leaflet-pan-anim");var a=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,a,i.duration||.25,i.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,i,a){if(a=a||{},a.animate===!1||!Ot.any3d)return this.setView(n,i,a);this._stop();var c=this.project(this.getCenter()),p=this.project(n),M=this.getSize(),I=this._zoom;n=W(n),i=i===void 0?I:i;var G=Math.max(M.x,M.y),j=G*this.getZoomScale(I,i),ct=p.distanceTo(c)||1,At=1.42,Xt=At*At;function ie(Ne){var cs=Ne?-1:1,Su=Ne?j:G,Mu=j*j-G*G+cs*Xt*Xt*ct*ct,Eu=2*Su*Xt*ct,go=Mu/Eu,Zl=Math.sqrt(go*go+1)-go,Tu=Zl<1e-9?-18:Math.log(Zl);return Tu}function je(Ne){return(Math.exp(Ne)-Math.exp(-Ne))/2}function Ve(Ne){return(Math.exp(Ne)+Math.exp(-Ne))/2}function un(Ne){return je(Ne)/Ve(Ne)}var en=ie(0);function Gi(Ne){return G*(Ve(en)/Ve(en+At*Ne))}function gu(Ne){return G*(Ve(en)*un(en+At*Ne)-je(en))/Xt}function vu(Ne){return 1-Math.pow(1-Ne,1.5)}var xu=Date.now(),Wl=(ie(1)-en)/At,yu=a.duration?1e3*a.duration:1e3*Wl*.8;function Xl(){var Ne=(Date.now()-xu)/yu,cs=vu(Ne)*Wl;Ne<=1?(this._flyToFrame=B(Xl,this),this._move(this.unproject(c.add(p.subtract(c).multiplyBy(gu(cs)/ct)),I),this.getScaleZoom(G/Gi(cs),I),{flyTo:!0})):this._move(n,i)._moveEnd(!0)}return this._moveStart(!0,a.noMoveStart),Xl.call(this),this},flyToBounds:function(n,i){var a=this._getBoundsCenterZoom(n,i);return this.flyTo(a.center,a.zoom,i)},setMaxBounds:function(n){return n=Kt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var i=this.options.minZoom;return this.options.minZoom=n,this._loaded&&i!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var i=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&i!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,i){this._enforcingBounds=!0;var a=this.getCenter(),c=this._limitCenter(a,this._zoom,Kt(n));return a.equals(c)||this.panTo(c,i),this._enforcingBounds=!1,this},panInside:function(n,i){i=i||{};var a=it(i.paddingTopLeft||i.padding||[0,0]),c=it(i.paddingBottomRight||i.padding||[0,0]),p=this.project(this.getCenter()),M=this.project(n),I=this.getPixelBounds(),G=Ht([I.min.add(a),I.max.subtract(c)]),j=G.getSize();if(!G.contains(M)){this._enforcingBounds=!0;var ct=M.subtract(G.getCenter()),At=G.extend(M).getSize().subtract(j);p.x+=ct.x<0?-At.x:At.x,p.y+=ct.y<0?-At.y:At.y,this.panTo(this.unproject(p),i),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=o({animate:!1,pan:!0},n===!0?{animate:!0}:n);var i=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var a=this.getSize(),c=i.divideBy(2).round(),p=a.divideBy(2).round(),M=c.subtract(p);return!M.x&&!M.y?this:(n.animate&&n.pan?this.panBy(M):(n.pan&&this._rawPanBy(M),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(h(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:i,newSize:a}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=o({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var i=h(this._handleGeolocationResponse,this),a=h(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(i,a,n):navigator.geolocation.getCurrentPosition(i,a,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var i=n.code,a=n.message||(i===1?"permission denied":i===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:i,message:"Geolocation error: "+a+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var i=n.coords.latitude,a=n.coords.longitude,c=new Vt(i,a),p=c.toBounds(n.coords.accuracy*2),M=this._locateOptions;if(M.setView){var I=this.getBoundsZoom(p);this.setView(c,M.maxZoom?Math.min(I,M.maxZoom):I)}var G={latlng:c,bounds:p,timestamp:n.timestamp};for(var j in n.coords)typeof n.coords[j]=="number"&&(G[j]=n.coords[j]);this.fire("locationfound",G)}},addHandler:function(n,i){if(!i)return this;var a=this[n]=new i(this);return this._handlers.push(a),this.options[n]&&a.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),bt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(J(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)bt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,i){var a="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),c=dt("div",a,i||this._mapPane);return n&&(this._panes[n]=c),c},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),i=this.unproject(n.getBottomLeft()),a=this.unproject(n.getTopRight());return new kt(i,a)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,i,a){n=Kt(n),a=it(a||[0,0]);var c=this.getZoom()||0,p=this.getMinZoom(),M=this.getMaxZoom(),I=n.getNorthWest(),G=n.getSouthEast(),j=this.getSize().subtract(a),ct=Ht(this.project(G,c),this.project(I,c)).getSize(),At=Ot.any3d?this.options.zoomSnap:1,Xt=j.x/ct.x,ie=j.y/ct.y,je=i?Math.max(Xt,ie):Math.min(Xt,ie);return c=this.getScaleZoom(je,c),At&&(c=Math.round(c/(At/100))*(At/100),c=i?Math.ceil(c/At)*At:Math.floor(c/At)*At),Math.max(p,Math.min(M,c))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new K(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,i){var a=this._getTopLeftPoint(n,i);return new ft(a,a.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,i){var a=this.options.crs;return i=i===void 0?this._zoom:i,a.scale(n)/a.scale(i)},getScaleZoom:function(n,i){var a=this.options.crs;i=i===void 0?this._zoom:i;var c=a.zoom(n*a.scale(i));return isNaN(c)?1/0:c},project:function(n,i){return i=i===void 0?this._zoom:i,this.options.crs.latLngToPoint(W(n),i)},unproject:function(n,i){return i=i===void 0?this._zoom:i,this.options.crs.pointToLatLng(it(n),i)},layerPointToLatLng:function(n){var i=it(n).add(this.getPixelOrigin());return this.unproject(i)},latLngToLayerPoint:function(n){var i=this.project(W(n))._round();return i._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(W(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(Kt(n))},distance:function(n,i){return this.options.crs.distance(W(n),W(i))},containerPointToLayerPoint:function(n){return it(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return it(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var i=this.containerPointToLayerPoint(it(n));return this.layerPointToLatLng(i)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(W(n)))},mouseEventToContainerPoint:function(n){return hl(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var i=this._container=yt(n);if(i){if(i._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Qt(i,"scroll",this._onScroll,this),this._containerId=f(i)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&Ot.any3d,It(n,"leaflet-container"+(Ot.touch?" leaflet-touch":"")+(Ot.retina?" leaflet-retina":"")+(Ot.ielt9?" leaflet-oldie":"")+(Ot.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var i=Pt(n,"position");i!=="absolute"&&i!=="relative"&&i!=="fixed"&&i!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Te(this._mapPane,new K(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(It(n.markerPane,"leaflet-zoom-hide"),It(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,i,a){Te(this._mapPane,new K(0,0));var c=!this._loaded;this._loaded=!0,i=this._limitZoom(i),this.fire("viewprereset");var p=this._zoom!==i;this._moveStart(p,a)._move(n,i)._moveEnd(p),this.fire("viewreset"),c&&this.fire("load")},_moveStart:function(n,i){return n&&this.fire("zoomstart"),i||this.fire("movestart"),this},_move:function(n,i,a,c){i===void 0&&(i=this._zoom);var p=this._zoom!==i;return this._zoom=i,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),c?a&&a.pinch&&this.fire("zoom",a):((p||a&&a.pinch)&&this.fire("zoom",a),this.fire("move",a)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return J(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){Te(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[f(this._container)]=this;var i=n?be:Qt;i(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&i(window,"resize",this._onResize,this),Ot.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){J(this._resizeRequest),this._resizeRequest=B(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,i){for(var a=[],c,p=i==="mouseout"||i==="mouseover",M=n.target||n.srcElement,I=!1;M;){if(c=this._targets[f(M)],c&&(i==="click"||i==="preclick")&&this._draggableMoved(c)){I=!0;break}if(c&&c.listens(i,!0)&&(p&&!so(M,n)||(a.push(c),p))||M===this._container)break;M=M.parentNode}return!a.length&&!I&&!p&&this.listens(i,!0)&&(a=[this]),a},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var i=n.target||n.srcElement;if(!(!this._loaded||i._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(i))){var a=n.type;a==="mousedown"&&Qs(i),this._fireDOMEvent(n,a)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,i,a){if(n.type==="click"){var c=o({},n);c.type="preclick",this._fireDOMEvent(c,c.type,a)}var p=this._findEventTargets(n,i);if(a){for(var M=[],I=0;I<a.length;I++)a[I].listens(i,!0)&&M.push(a[I]);p=M.concat(p)}if(p.length){i==="contextmenu"&&Ge(n);var G=p[0],j={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var ct=G.getLatLng&&(!G._radius||G._radius<=10);j.containerPoint=ct?this.latLngToContainerPoint(G.getLatLng()):this.mouseEventToContainerPoint(n),j.layerPoint=this.containerPointToLayerPoint(j.containerPoint),j.latlng=ct?G.getLatLng():this.layerPointToLatLng(j.layerPoint)}for(I=0;I<p.length;I++)if(p[I].fire(i,j,!0),j.originalEvent._stopped||p[I].options.bubblingMouseEvents===!1&&R(this._mouseEvents,i)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,i=this._handlers.length;n<i;n++)this._handlers[n].disable()},whenReady:function(n,i){return this._loaded?n.call(i||this,{target:this}):this.on("load",n,i),this},_getMapPanePos:function(){return ce(this._mapPane)||new K(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,i){var a=n&&i!==void 0?this._getNewPixelOrigin(n,i):this.getPixelOrigin();return a.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,i){var a=this.getSize()._divideBy(2);return this.project(n,i)._subtract(a)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,i,a){var c=this._getNewPixelOrigin(a,i);return this.project(n,i)._subtract(c)},_latLngBoundsToNewLayerBounds:function(n,i,a){var c=this._getNewPixelOrigin(a,i);return Ht([this.project(n.getSouthWest(),i)._subtract(c),this.project(n.getNorthWest(),i)._subtract(c),this.project(n.getSouthEast(),i)._subtract(c),this.project(n.getNorthEast(),i)._subtract(c)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,i,a){if(!a)return n;var c=this.project(n,i),p=this.getSize().divideBy(2),M=new ft(c.subtract(p),c.add(p)),I=this._getBoundsOffset(M,a,i);return Math.abs(I.x)<=1&&Math.abs(I.y)<=1?n:this.unproject(c.add(I),i)},_limitOffset:function(n,i){if(!i)return n;var a=this.getPixelBounds(),c=new ft(a.min.add(n),a.max.add(n));return n.add(this._getBoundsOffset(c,i))},_getBoundsOffset:function(n,i,a){var c=Ht(this.project(i.getNorthEast(),a),this.project(i.getSouthWest(),a)),p=c.min.subtract(n.min),M=c.max.subtract(n.max),I=this._rebound(p.x,-M.x),G=this._rebound(p.y,-M.y);return new K(I,G)},_rebound:function(n,i){return n+i>0?Math.round(n-i)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(i))},_limitZoom:function(n){var i=this.getMinZoom(),a=this.getMaxZoom(),c=Ot.any3d?this.options.zoomSnap:1;return c&&(n=Math.round(n/c)*c),Math.max(i,Math.min(a,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Wt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,i){var a=this._getCenterOffset(n)._trunc();return(i&&i.animate)!==!0&&!this.getSize().contains(a)?!1:(this.panBy(a,i),!0)},_createAnimProxy:function(){var n=this._proxy=dt("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(i){var a=H,c=this._proxy.style[a];De(this._proxy,this.project(i.center,i.zoom),this.getZoomScale(i.zoom,1)),c===this._proxy.style[a]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){bt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),i=this.getZoom();De(this._proxy,this.project(n,i),this.getZoomScale(i,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,i,a){if(this._animatingZoom)return!0;if(a=a||{},!this._zoomAnimated||a.animate===!1||this._nothingToAnimate()||Math.abs(i-this._zoom)>this.options.zoomAnimationThreshold)return!1;var c=this.getZoomScale(i),p=this._getCenterOffset(n)._divideBy(1-1/c);return a.animate!==!0&&!this.getSize().contains(p)?!1:(B(function(){this._moveStart(!0,a.noMoveStart||!1)._animateZoom(n,i,!0)},this),!0)},_animateZoom:function(n,i,a,c){this._mapPane&&(a&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=i,It(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:i,noUpdate:c}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(h(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Wt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Uh(n,i){return new he(n,i)}var vn=rt.extend({options:{position:"topright"},initialize:function(n){w(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var i=this._map;return i&&i.removeControl(this),this.options.position=n,i&&i.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var i=this._container=this.onAdd(n),a=this.getPosition(),c=n._controlCorners[a];return It(i,"leaflet-control"),a.indexOf("bottom")!==-1?c.insertBefore(i,c.firstChild):c.appendChild(i),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(bt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),yr=function(n){return new vn(n)};he.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},i="leaflet-",a=this._controlContainer=dt("div",i+"control-container",this._container);function c(p,M){var I=i+p+" "+i+M;n[p+M]=dt("div",I,a)}c("top","left"),c("top","right"),c("bottom","left"),c("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)bt(this._controlCorners[n]);bt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var dl=vn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,i,a,c){return a<c?-1:c<a?1:0}},initialize:function(n,i,a){w(this,a),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var c in n)this._addLayer(n[c],c);for(c in i)this._addLayer(i[c],c,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return vn.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,i){return this._addLayer(n,i),this._map?this._update():this},addOverlay:function(n,i){return this._addLayer(n,i,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var i=this._getLayer(f(n));return i&&this._layers.splice(this._layers.indexOf(i),1),this._map?this._update():this},expand:function(){It(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(It(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Wt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Wt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",i=this._container=dt("div",n),a=this.options.collapsed;i.setAttribute("aria-haspopup",!0),xr(i),ro(i);var c=this._section=dt("section",n+"-list");a&&(this._map.on("click",this.collapse,this),Qt(i,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var p=this._layersLink=dt("a",n+"-toggle",i);p.href="#",p.title="Layers",p.setAttribute("role","button"),Qt(p,{keydown:function(M){M.keyCode===13&&this._expandSafely()},click:function(M){Ge(M),this._expandSafely()}},this),a||this.expand(),this._baseLayersList=dt("div",n+"-base",c),this._separator=dt("div",n+"-separator",c),this._overlaysList=dt("div",n+"-overlays",c),i.appendChild(c)},_getLayer:function(n){for(var i=0;i<this._layers.length;i++)if(this._layers[i]&&f(this._layers[i].layer)===n)return this._layers[i]},_addLayer:function(n,i,a){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:i,overlay:a}),this.options.sortLayers&&this._layers.sort(h(function(c,p){return this.options.sortFunction(c.layer,p.layer,c.name,p.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Bt(this._baseLayersList),Bt(this._overlaysList),this._layerControlInputs=[];var n,i,a,c,p=0;for(a=0;a<this._layers.length;a++)c=this._layers[a],this._addItem(c),i=i||c.overlay,n=n||!c.overlay,p+=c.overlay?0:1;return this.options.hideSingleBase&&(n=n&&p>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=i&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var i=this._getLayer(f(n.target)),a=i.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;a&&this._map.fire(a,i)},_createRadioElement:function(n,i){var a='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(i?' checked="checked"':"")+"/>",c=document.createElement("div");return c.innerHTML=a,c.firstChild},_addItem:function(n){var i=document.createElement("label"),a=this._map.hasLayer(n.layer),c;n.overlay?(c=document.createElement("input"),c.type="checkbox",c.className="leaflet-control-layers-selector",c.defaultChecked=a):c=this._createRadioElement("leaflet-base-layers_"+f(this),a),this._layerControlInputs.push(c),c.layerId=f(n.layer),Qt(c,"click",this._onInputClick,this);var p=document.createElement("span");p.innerHTML=" "+n.name;var M=document.createElement("span");i.appendChild(M),M.appendChild(c),M.appendChild(p);var I=n.overlay?this._overlaysList:this._baseLayersList;return I.appendChild(i),this._checkDisabledLayers(),i},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,i,a,c=[],p=[];this._handlingClick=!0;for(var M=n.length-1;M>=0;M--)i=n[M],a=this._getLayer(i.layerId).layer,i.checked?c.push(a):i.checked||p.push(a);for(M=0;M<p.length;M++)this._map.hasLayer(p[M])&&this._map.removeLayer(p[M]);for(M=0;M<c.length;M++)this._map.hasLayer(c[M])||this._map.addLayer(c[M]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,i,a,c=this._map.getZoom(),p=n.length-1;p>=0;p--)i=n[p],a=this._getLayer(i.layerId).layer,i.disabled=a.options.minZoom!==void 0&&c<a.options.minZoom||a.options.maxZoom!==void 0&&c>a.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,Qt(n,"click",Ge),this.expand();var i=this;setTimeout(function(){be(n,"click",Ge),i._preventClick=!1})}}),Nh=function(n,i,a){return new dl(n,i,a)},oo=vn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var i="leaflet-control-zoom",a=dt("div",i+" leaflet-bar"),c=this.options;return this._zoomInButton=this._createButton(c.zoomInText,c.zoomInTitle,i+"-in",a,this._zoomIn),this._zoomOutButton=this._createButton(c.zoomOutText,c.zoomOutTitle,i+"-out",a,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),a},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,i,a,c,p){var M=dt("a",a,c);return M.innerHTML=n,M.href="#",M.title=i,M.setAttribute("role","button"),M.setAttribute("aria-label",i),xr(M),Qt(M,"click",yi),Qt(M,"click",p,this),Qt(M,"click",this._refocusOnMap,this),M},_updateDisabled:function(){var n=this._map,i="leaflet-disabled";Wt(this._zoomInButton,i),Wt(this._zoomOutButton,i),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(It(this._zoomOutButton,i),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(It(this._zoomInButton,i),this._zoomInButton.setAttribute("aria-disabled","true"))}});he.mergeOptions({zoomControl:!0}),he.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new oo,this.addControl(this.zoomControl))});var Fh=function(n){return new oo(n)},pl=vn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var i="leaflet-control-scale",a=dt("div",i),c=this.options;return this._addScales(c,i+"-line",a),n.on(c.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),a},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,i,a){n.metric&&(this._mScale=dt("div",i,a)),n.imperial&&(this._iScale=dt("div",i,a))},_update:function(){var n=this._map,i=n.getSize().y/2,a=n.distance(n.containerPointToLatLng([0,i]),n.containerPointToLatLng([this.options.maxWidth,i]));this._updateScales(a)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var i=this._getRoundNum(n),a=i<1e3?i+" m":i/1e3+" km";this._updateScale(this._mScale,a,i/n)},_updateImperial:function(n){var i=n*3.2808399,a,c,p;i>5280?(a=i/5280,c=this._getRoundNum(a),this._updateScale(this._iScale,c+" mi",c/a)):(p=this._getRoundNum(i),this._updateScale(this._iScale,p+" ft",p/i))},_updateScale:function(n,i,a){n.style.width=Math.round(this.options.maxWidth*a)+"px",n.innerHTML=i},_getRoundNum:function(n){var i=Math.pow(10,(Math.floor(n)+"").length-1),a=n/i;return a=a>=10?10:a>=5?5:a>=3?3:a>=2?2:1,i*a}}),Oh=function(n){return new pl(n)},Bh='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',ao=vn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Ot.inlineSvg?Bh+" ":"")+"Leaflet</a>"},initialize:function(n){w(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=dt("div","leaflet-control-attribution"),xr(this._container);for(var i in n._layers)n._layers[i].getAttribution&&this.addAttribution(n._layers[i].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var i in this._attributions)this._attributions[i]&&n.push(i);var a=[];this.options.prefix&&a.push(this.options.prefix),n.length&&a.push(n.join(", ")),this._container.innerHTML=a.join(' <span aria-hidden="true">|</span> ')}}});he.mergeOptions({attributionControl:!0}),he.addInitHook(function(){this.options.attributionControl&&new ao().addTo(this)});var zh=function(n){return new ao(n)};vn.Layers=dl,vn.Zoom=oo,vn.Scale=pl,vn.Attribution=ao,yr.layers=Nh,yr.zoom=Fh,yr.scale=Oh,yr.attribution=zh;var Cn=rt.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Cn.addTo=function(n,i){return n.addHandler(i,this),this};var kh={Events:tt},ml=Ot.touch?"touchstart mousedown":"mousedown",si=q.extend({options:{clickTolerance:3},initialize:function(n,i,a,c){w(this,c),this._element=n,this._dragStartTarget=i||n,this._preventOutline=a},enable:function(){this._enabled||(Qt(this._dragStartTarget,ml,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(si._dragging===this&&this.finishDrag(!0),be(this._dragStartTarget,ml,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!Ee(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){si._dragging===this&&this.finishDrag();return}if(!(si._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(si._dragging=this,this._preventOutline&&Qs(this._element),vi(),Ie(),!this._moving)){this.fire("down");var i=n.touches?n.touches[0]:n,a=al(this._element);this._startPoint=new K(i.clientX,i.clientY),this._startPos=ce(this._element),this._parentScale=to(a);var c=n.type==="mousedown";Qt(document,c?"mousemove":"touchmove",this._onMove,this),Qt(document,c?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var i=n.touches&&n.touches.length===1?n.touches[0]:n,a=new K(i.clientX,i.clientY)._subtract(this._startPoint);!a.x&&!a.y||Math.abs(a.x)+Math.abs(a.y)<this.options.clickTolerance||(a.x/=this._parentScale.x,a.y/=this._parentScale.y,Ge(n),this._moved||(this.fire("dragstart"),this._moved=!0,It(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),It(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(a),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),Te(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Wt(document.body,"leaflet-dragging"),this._lastTarget&&(Wt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),be(document,"mousemove touchmove",this._onMove,this),be(document,"mouseup touchend touchcancel",this._onUp,this),gn(),ke();var i=this._moved&&this._moving;this._moving=!1,si._dragging=!1,i&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function _l(n,i,a){var c,p=[1,4,2,8],M,I,G,j,ct,At,Xt,ie;for(M=0,At=n.length;M<At;M++)n[M]._code=Si(n[M],i);for(G=0;G<4;G++){for(Xt=p[G],c=[],M=0,At=n.length,I=At-1;M<At;I=M++)j=n[M],ct=n[I],j._code&Xt?ct._code&Xt||(ie=$r(ct,j,Xt,i,a),ie._code=Si(ie,i),c.push(ie)):(ct._code&Xt&&(ie=$r(ct,j,Xt,i,a),ie._code=Si(ie,i),c.push(ie)),c.push(j));n=c}return n}function gl(n,i){var a,c,p,M,I,G,j,ct,At;if(!n||n.length===0)throw new Error("latlngs not passed");hn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Xt=W([0,0]),ie=Kt(n),je=ie.getNorthWest().distanceTo(ie.getSouthWest())*ie.getNorthEast().distanceTo(ie.getNorthWest());je<1700&&(Xt=lo(n));var Ve=n.length,un=[];for(a=0;a<Ve;a++){var en=W(n[a]);un.push(i.project(W([en.lat-Xt.lat,en.lng-Xt.lng])))}for(G=j=ct=0,a=0,c=Ve-1;a<Ve;c=a++)p=un[a],M=un[c],I=p.y*M.x-M.y*p.x,j+=(p.x+M.x)*I,ct+=(p.y+M.y)*I,G+=I*3;G===0?At=un[0]:At=[j/G,ct/G];var Gi=i.unproject(it(At));return W([Gi.lat+Xt.lat,Gi.lng+Xt.lng])}function lo(n){for(var i=0,a=0,c=0,p=0;p<n.length;p++){var M=W(n[p]);i+=M.lat,a+=M.lng,c++}return W([i/c,a/c])}var Vh={__proto__:null,clipPolygon:_l,polygonCenter:gl,centroid:lo};function vl(n,i){if(!i||!n.length)return n.slice();var a=i*i;return n=Wh(n,a),n=Gh(n,a),n}function xl(n,i,a){return Math.sqrt(Sr(n,i,a,!0))}function Hh(n,i,a){return Sr(n,i,a)}function Gh(n,i){var a=n.length,c=typeof Uint8Array<"u"?Uint8Array:Array,p=new c(a);p[0]=p[a-1]=1,co(n,p,i,0,a-1);var M,I=[];for(M=0;M<a;M++)p[M]&&I.push(n[M]);return I}function co(n,i,a,c,p){var M=0,I,G,j;for(G=c+1;G<=p-1;G++)j=Sr(n[G],n[c],n[p],!0),j>M&&(I=G,M=j);M>a&&(i[I]=1,co(n,i,a,c,I),co(n,i,a,I,p))}function Wh(n,i){for(var a=[n[0]],c=1,p=0,M=n.length;c<M;c++)Xh(n[c],n[p])>i&&(a.push(n[c]),p=c);return p<M-1&&a.push(n[M-1]),a}var yl;function Sl(n,i,a,c,p){var M=c?yl:Si(n,a),I=Si(i,a),G,j,ct;for(yl=I;;){if(!(M|I))return[n,i];if(M&I)return!1;G=M||I,j=$r(n,i,G,a,p),ct=Si(j,a),G===M?(n=j,M=ct):(i=j,I=ct)}}function $r(n,i,a,c,p){var M=i.x-n.x,I=i.y-n.y,G=c.min,j=c.max,ct,At;return a&8?(ct=n.x+M*(j.y-n.y)/I,At=j.y):a&4?(ct=n.x+M*(G.y-n.y)/I,At=G.y):a&2?(ct=j.x,At=n.y+I*(j.x-n.x)/M):a&1&&(ct=G.x,At=n.y+I*(G.x-n.x)/M),new K(ct,At,p)}function Si(n,i){var a=0;return n.x<i.min.x?a|=1:n.x>i.max.x&&(a|=2),n.y<i.min.y?a|=4:n.y>i.max.y&&(a|=8),a}function Xh(n,i){var a=i.x-n.x,c=i.y-n.y;return a*a+c*c}function Sr(n,i,a,c){var p=i.x,M=i.y,I=a.x-p,G=a.y-M,j=I*I+G*G,ct;return j>0&&(ct=((n.x-p)*I+(n.y-M)*G)/j,ct>1?(p=a.x,M=a.y):ct>0&&(p+=I*ct,M+=G*ct)),I=n.x-p,G=n.y-M,c?I*I+G*G:new K(p,M)}function hn(n){return!P(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Ml(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),hn(n)}function El(n,i){var a,c,p,M,I,G,j,ct;if(!n||n.length===0)throw new Error("latlngs not passed");hn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var At=W([0,0]),Xt=Kt(n),ie=Xt.getNorthWest().distanceTo(Xt.getSouthWest())*Xt.getNorthEast().distanceTo(Xt.getNorthWest());ie<1700&&(At=lo(n));var je=n.length,Ve=[];for(a=0;a<je;a++){var un=W(n[a]);Ve.push(i.project(W([un.lat-At.lat,un.lng-At.lng])))}for(a=0,c=0;a<je-1;a++)c+=Ve[a].distanceTo(Ve[a+1])/2;if(c===0)ct=Ve[0];else for(a=0,M=0;a<je-1;a++)if(I=Ve[a],G=Ve[a+1],p=I.distanceTo(G),M+=p,M>c){j=(M-c)/p,ct=[G.x-j*(G.x-I.x),G.y-j*(G.y-I.y)];break}var en=i.unproject(it(ct));return W([en.lat+At.lat,en.lng+At.lng])}var Zh={__proto__:null,simplify:vl,pointToSegmentDistance:xl,closestPointOnSegment:Hh,clipSegment:Sl,_getEdgeIntersection:$r,_getBitCode:Si,_sqClosestPointOnSegment:Sr,isFlat:hn,_flat:Ml,polylineCenter:El},ho={project:function(n){return new K(n.lng,n.lat)},unproject:function(n){return new Vt(n.y,n.x)},bounds:new ft([-180,-90],[180,90])},uo={R:6378137,R_MINOR:6356752314245179e-9,bounds:new ft([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var i=Math.PI/180,a=this.R,c=n.lat*i,p=this.R_MINOR/a,M=Math.sqrt(1-p*p),I=M*Math.sin(c),G=Math.tan(Math.PI/4-c/2)/Math.pow((1-I)/(1+I),M/2);return c=-a*Math.log(Math.max(G,1e-10)),new K(n.lng*i*a,c)},unproject:function(n){for(var i=180/Math.PI,a=this.R,c=this.R_MINOR/a,p=Math.sqrt(1-c*c),M=Math.exp(-n.y/a),I=Math.PI/2-2*Math.atan(M),G=0,j=.1,ct;G<15&&Math.abs(j)>1e-7;G++)ct=p*Math.sin(I),ct=Math.pow((1-ct)/(1+ct),p/2),j=Math.PI/2-2*Math.atan(M*ct)-I,I+=j;return new Vt(I*i,n.x*i/a)}},qh={__proto__:null,LonLat:ho,Mercator:uo,SphericalMercator:Lt},Yh=o({},Tt,{code:"EPSG:3395",projection:uo,transformation:(function(){var n=.5/(Math.PI*uo.R);return Ae(n,.5,-n,.5)})()}),Tl=o({},Tt,{code:"EPSG:4326",projection:ho,transformation:Ae(1/180,1,-1/180,.5)}),Kh=o({},at,{projection:ho,transformation:Ae(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,i){var a=i.lng-n.lng,c=i.lat-n.lat;return Math.sqrt(a*a+c*c)},infinite:!0});at.Earth=Tt,at.EPSG3395=Yh,at.EPSG3857=re,at.EPSG900913=pe,at.EPSG4326=Tl,at.Simple=Kh;var xn=q.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[f(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[f(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var i=n.target;if(i.hasLayer(this)){if(this._map=i,this._zoomAnimated=i._zoomAnimated,this.getEvents){var a=this.getEvents();i.on(a,this),this.once("remove",function(){i.off(a,this)},this)}this.onAdd(i),this.fire("add"),i.fire("layeradd",{layer:this})}}});he.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var i=f(n);return this._layers[i]?this:(this._layers[i]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var i=f(n);return this._layers[i]?(this._loaded&&n.onRemove(this),delete this._layers[i],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return f(n)in this._layers},eachLayer:function(n,i){for(var a in this._layers)n.call(i,this._layers[a]);return this},_addLayers:function(n){n=n?P(n)?n:[n]:[];for(var i=0,a=n.length;i<a;i++)this.addLayer(n[i])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[f(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var i=f(n);this._zoomBoundLayers[i]&&(delete this._zoomBoundLayers[i],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,i=-1/0,a=this._getZoomSpan();for(var c in this._zoomBoundLayers){var p=this._zoomBoundLayers[c].options;n=p.minZoom===void 0?n:Math.min(n,p.minZoom),i=p.maxZoom===void 0?i:Math.max(i,p.maxZoom)}this._layersMaxZoom=i===-1/0?void 0:i,this._layersMinZoom=n===1/0?void 0:n,a!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Bi=xn.extend({initialize:function(n,i){w(this,i),this._layers={};var a,c;if(n)for(a=0,c=n.length;a<c;a++)this.addLayer(n[a])},addLayer:function(n){var i=this.getLayerId(n);return this._layers[i]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var i=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[i]&&this._map.removeLayer(this._layers[i]),delete this._layers[i],this},hasLayer:function(n){var i=typeof n=="number"?n:this.getLayerId(n);return i in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var i=Array.prototype.slice.call(arguments,1),a,c;for(a in this._layers)c=this._layers[a],c[n]&&c[n].apply(c,i);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,i){for(var a in this._layers)n.call(i,this._layers[a]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return f(n)}}),jh=function(n,i){return new Bi(n,i)},kn=Bi.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Bi.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Bi.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new kt;for(var i in this._layers){var a=this._layers[i];n.extend(a.getBounds?a.getBounds():a.getLatLng())}return n}}),Jh=function(n,i){return new kn(n,i)},zi=rt.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){w(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,i){var a=this._getIconUrl(n);if(!a){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var c=this._createImg(a,i&&i.tagName==="IMG"?i:null);return this._setIconStyles(c,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(c.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),c},_setIconStyles:function(n,i){var a=this.options,c=a[i+"Size"];typeof c=="number"&&(c=[c,c]);var p=it(c),M=it(i==="shadow"&&a.shadowAnchor||a.iconAnchor||p&&p.divideBy(2,!0));n.className="leaflet-marker-"+i+" "+(a.className||""),M&&(n.style.marginLeft=-M.x+"px",n.style.marginTop=-M.y+"px"),p&&(n.style.width=p.x+"px",n.style.height=p.y+"px")},_createImg:function(n,i){return i=i||document.createElement("img"),i.src=n,i},_getIconUrl:function(n){return Ot.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function $h(n){return new zi(n)}var Mr=zi.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof Mr.imagePath!="string"&&(Mr.imagePath=this._detectIconPath()),(this.options.imagePath||Mr.imagePath)+zi.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var i=function(a,c,p){var M=c.exec(a);return M&&M[p]};return n=i(n,/^url\((['"])?(.+)\1\)$/,2),n&&i(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=dt("div","leaflet-default-icon-path",document.body),i=Pt(n,"background-image")||Pt(n,"backgroundImage");if(document.body.removeChild(n),i=this._stripUrl(i),i)return i;var a=document.querySelector('link[href$="leaflet.css"]');return a?a.href.substring(0,a.href.length-11-1):""}}),bl=Cn.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new si(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),It(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Wt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var i=this._marker,a=i._map,c=this._marker.options.autoPanSpeed,p=this._marker.options.autoPanPadding,M=ce(i._icon),I=a.getPixelBounds(),G=a.getPixelOrigin(),j=Ht(I.min._subtract(G).add(p),I.max._subtract(G).subtract(p));if(!j.contains(M)){var ct=it((Math.max(j.max.x,M.x)-j.max.x)/(I.max.x-j.max.x)-(Math.min(j.min.x,M.x)-j.min.x)/(I.min.x-j.min.x),(Math.max(j.max.y,M.y)-j.max.y)/(I.max.y-j.max.y)-(Math.min(j.min.y,M.y)-j.min.y)/(I.min.y-j.min.y)).multiplyBy(c);a.panBy(ct,{animate:!1}),this._draggable._newPos._add(ct),this._draggable._startPos._add(ct),Te(i._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=B(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(J(this._panRequest),this._panRequest=B(this._adjustPan.bind(this,n)))},_onDrag:function(n){var i=this._marker,a=i._shadow,c=ce(i._icon),p=i._map.layerPointToLatLng(c);a&&Te(a,c),i._latlng=p,n.latlng=p,n.oldLatLng=this._oldLatLng,i.fire("move",n).fire("drag",n)},_onDragEnd:function(n){J(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),Qr=xn.extend({options:{icon:new Mr,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,i){w(this,i),this._latlng=W(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var i=this._latlng;return this._latlng=W(n),this.update(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,i="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),a=n.icon.createIcon(this._icon),c=!1;a!==this._icon&&(this._icon&&this._removeIcon(),c=!0,n.title&&(a.title=n.title),a.tagName==="IMG"&&(a.alt=n.alt||"")),It(a,i),n.keyboard&&(a.tabIndex="0",a.setAttribute("role","button")),this._icon=a,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Qt(a,"focus",this._panOnFocus,this);var p=n.icon.createShadow(this._shadow),M=!1;p!==this._shadow&&(this._removeShadow(),M=!0),p&&(It(p,i),p.alt=""),this._shadow=p,n.opacity<1&&this._updateOpacity(),c&&this.getPane().appendChild(this._icon),this._initInteraction(),p&&M&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&be(this._icon,"focus",this._panOnFocus,this),bt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&bt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&Te(this._icon,n),this._shadow&&Te(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var i=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(i)},_initInteraction:function(){if(this.options.interactive&&(It(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),bl)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new bl(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&Yt(this._icon,n),this._shadow&&Yt(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var i=this.options.icon.options,a=i.iconSize?it(i.iconSize):it(0,0),c=i.iconAnchor?it(i.iconAnchor):it(0,0);n.panInside(this._latlng,{paddingTopLeft:c,paddingBottomRight:a.subtract(c)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function Qh(n,i){return new Qr(n,i)}var oi=xn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return w(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ts=oi.extend({options:{fill:!0,radius:10},initialize:function(n,i){w(this,i),this._latlng=W(n),this._radius=this.options.radius},setLatLng:function(n){var i=this._latlng;return this._latlng=W(n),this.redraw(),this.fire("move",{oldLatLng:i,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var i=n&&n.radius||this._radius;return oi.prototype.setStyle.call(this,n),this.setRadius(i),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,i=this._radiusY||n,a=this._clickTolerance(),c=[n+a,i+a];this._pxBounds=new ft(this._point.subtract(c),this._point.add(c))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function tu(n,i){return new ts(n,i)}var fo=ts.extend({initialize:function(n,i,a){if(typeof i=="number"&&(i=o({},a,{radius:i})),w(this,i),this._latlng=W(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new kt(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:oi.prototype.setStyle,_project:function(){var n=this._latlng.lng,i=this._latlng.lat,a=this._map,c=a.options.crs;if(c.distance===Tt.distance){var p=Math.PI/180,M=this._mRadius/Tt.R/p,I=a.project([i+M,n]),G=a.project([i-M,n]),j=I.add(G).divideBy(2),ct=a.unproject(j).lat,At=Math.acos((Math.cos(M*p)-Math.sin(i*p)*Math.sin(ct*p))/(Math.cos(i*p)*Math.cos(ct*p)))/p;(isNaN(At)||At===0)&&(At=M/Math.cos(Math.PI/180*i)),this._point=j.subtract(a.getPixelOrigin()),this._radius=isNaN(At)?0:j.x-a.project([ct,n-At]).x,this._radiusY=j.y-I.y}else{var Xt=c.unproject(c.project(this._latlng).subtract([this._mRadius,0]));this._point=a.latLngToLayerPoint(this._latlng),this._radius=this._point.x-a.latLngToLayerPoint(Xt).x}this._updateBounds()}});function eu(n,i,a){return new fo(n,i,a)}var Vn=oi.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,i){w(this,i),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var i=1/0,a=null,c=Sr,p,M,I=0,G=this._parts.length;I<G;I++)for(var j=this._parts[I],ct=1,At=j.length;ct<At;ct++){p=j[ct-1],M=j[ct];var Xt=c(n,p,M,!0);Xt<i&&(i=Xt,a=c(n,p,M))}return a&&(a.distance=Math.sqrt(i)),a},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return El(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,i){return i=i||this._defaultShape(),n=W(n),i.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new kt,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return hn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var i=[],a=hn(n),c=0,p=n.length;c<p;c++)a?(i[c]=W(n[c]),this._bounds.extend(i[c])):i[c]=this._convertLatLngs(n[c]);return i},_project:function(){var n=new ft;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),i=new K(n,n);this._rawPxBounds&&(this._pxBounds=new ft([this._rawPxBounds.min.subtract(i),this._rawPxBounds.max.add(i)]))},_projectLatlngs:function(n,i,a){var c=n[0]instanceof Vt,p=n.length,M,I;if(c){for(I=[],M=0;M<p;M++)I[M]=this._map.latLngToLayerPoint(n[M]),a.extend(I[M]);i.push(I)}else for(M=0;M<p;M++)this._projectLatlngs(n[M],i,a)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var i=this._parts,a,c,p,M,I,G,j;for(a=0,p=0,M=this._rings.length;a<M;a++)for(j=this._rings[a],c=0,I=j.length;c<I-1;c++)G=Sl(j[c],j[c+1],n,c,!0),G&&(i[p]=i[p]||[],i[p].push(G[0]),(G[1]!==j[c+1]||c===I-2)&&(i[p].push(G[1]),p++))}},_simplifyPoints:function(){for(var n=this._parts,i=this.options.smoothFactor,a=0,c=n.length;a<c;a++)n[a]=vl(n[a],i)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,i){var a,c,p,M,I,G,j=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(a=0,M=this._parts.length;a<M;a++)for(G=this._parts[a],c=0,I=G.length,p=I-1;c<I;p=c++)if(!(!i&&c===0)&&xl(n,G[p],G[c])<=j)return!0;return!1}});function nu(n,i){return new Vn(n,i)}Vn._flat=Ml;var ki=Vn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return gl(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var i=Vn.prototype._convertLatLngs.call(this,n),a=i.length;return a>=2&&i[0]instanceof Vt&&i[0].equals(i[a-1])&&i.pop(),i},_setLatLngs:function(n){Vn.prototype._setLatLngs.call(this,n),hn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return hn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,i=this.options.weight,a=new K(i,i);if(n=new ft(n.min.subtract(a),n.max.add(a)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var c=0,p=this._rings.length,M;c<p;c++)M=_l(this._rings[c],n,!0),M.length&&this._parts.push(M)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var i=!1,a,c,p,M,I,G,j,ct;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(M=0,j=this._parts.length;M<j;M++)for(a=this._parts[M],I=0,ct=a.length,G=ct-1;I<ct;G=I++)c=a[I],p=a[G],c.y>n.y!=p.y>n.y&&n.x<(p.x-c.x)*(n.y-c.y)/(p.y-c.y)+c.x&&(i=!i);return i||Vn.prototype._containsPoint.call(this,n,!0)}});function iu(n,i){return new ki(n,i)}var Hn=kn.extend({initialize:function(n,i){w(this,i),this._layers={},n&&this.addData(n)},addData:function(n){var i=P(n)?n:n.features,a,c,p;if(i){for(a=0,c=i.length;a<c;a++)p=i[a],(p.geometries||p.geometry||p.features||p.coordinates)&&this.addData(p);return this}var M=this.options;if(M.filter&&!M.filter(n))return this;var I=es(n,M);return I?(I.feature=rs(n),I.defaultOptions=I.options,this.resetStyle(I),M.onEachFeature&&M.onEachFeature(n,I),this.addLayer(I)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=o({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(i){this._setLayerStyle(i,n)},this)},_setLayerStyle:function(n,i){n.setStyle&&(typeof i=="function"&&(i=i(n.feature)),n.setStyle(i))}});function es(n,i){var a=n.type==="Feature"?n.geometry:n,c=a?a.coordinates:null,p=[],M=i&&i.pointToLayer,I=i&&i.coordsToLatLng||po,G,j,ct,At;if(!c&&!a)return null;switch(a.type){case"Point":return G=I(c),wl(M,n,G,i);case"MultiPoint":for(ct=0,At=c.length;ct<At;ct++)G=I(c[ct]),p.push(wl(M,n,G,i));return new kn(p);case"LineString":case"MultiLineString":return j=ns(c,a.type==="LineString"?0:1,I),new Vn(j,i);case"Polygon":case"MultiPolygon":return j=ns(c,a.type==="Polygon"?1:2,I),new ki(j,i);case"GeometryCollection":for(ct=0,At=a.geometries.length;ct<At;ct++){var Xt=es({geometry:a.geometries[ct],type:"Feature",properties:n.properties},i);Xt&&p.push(Xt)}return new kn(p);case"FeatureCollection":for(ct=0,At=a.features.length;ct<At;ct++){var ie=es(a.features[ct],i);ie&&p.push(ie)}return new kn(p);default:throw new Error("Invalid GeoJSON object.")}}function wl(n,i,a,c){return n?n(i,a):new Qr(a,c&&c.markersInheritOptions&&c)}function po(n){return new Vt(n[1],n[0],n[2])}function ns(n,i,a){for(var c=[],p=0,M=n.length,I;p<M;p++)I=i?ns(n[p],i-1,a):(a||po)(n[p]),c.push(I);return c}function mo(n,i){return n=W(n),n.alt!==void 0?[v(n.lng,i),v(n.lat,i),v(n.alt,i)]:[v(n.lng,i),v(n.lat,i)]}function is(n,i,a,c){for(var p=[],M=0,I=n.length;M<I;M++)p.push(i?is(n[M],hn(n[M])?0:i-1,a,c):mo(n[M],c));return!i&&a&&p.length>0&&p.push(p[0].slice()),p}function Vi(n,i){return n.feature?o({},n.feature,{geometry:i}):rs(i)}function rs(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var _o={toGeoJSON:function(n){return Vi(this,{type:"Point",coordinates:mo(this.getLatLng(),n)})}};Qr.include(_o),fo.include(_o),ts.include(_o),Vn.include({toGeoJSON:function(n){var i=!hn(this._latlngs),a=is(this._latlngs,i?1:0,!1,n);return Vi(this,{type:(i?"Multi":"")+"LineString",coordinates:a})}}),ki.include({toGeoJSON:function(n){var i=!hn(this._latlngs),a=i&&!hn(this._latlngs[0]),c=is(this._latlngs,a?2:i?1:0,!0,n);return i||(c=[c]),Vi(this,{type:(a?"Multi":"")+"Polygon",coordinates:c})}}),Bi.include({toMultiPoint:function(n){var i=[];return this.eachLayer(function(a){i.push(a.toGeoJSON(n).geometry.coordinates)}),Vi(this,{type:"MultiPoint",coordinates:i})},toGeoJSON:function(n){var i=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(i==="MultiPoint")return this.toMultiPoint(n);var a=i==="GeometryCollection",c=[];return this.eachLayer(function(p){if(p.toGeoJSON){var M=p.toGeoJSON(n);if(a)c.push(M.geometry);else{var I=rs(M);I.type==="FeatureCollection"?c.push.apply(c,I.features):c.push(I)}}}),a?Vi(this,{geometries:c,type:"GeometryCollection"}):{type:"FeatureCollection",features:c}}});function Al(n,i){return new Hn(n,i)}var ru=Al,ss=xn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,i,a){this._url=n,this._bounds=Kt(i),w(this,a)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(It(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){bt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&qt(this._image),this},bringToBack:function(){return this._map&&oe(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=Kt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",i=this._image=n?this._url:dt("img");if(It(i,"leaflet-image-layer"),this._zoomAnimated&&It(i,"leaflet-zoom-animated"),this.options.className&&It(i,this.options.className),i.onselectstart=_,i.onmousemove=_,i.onload=h(this.fire,this,"load"),i.onerror=h(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=i.src;return}i.src=this._url,i.alt=this.options.alt},_animateZoom:function(n){var i=this._map.getZoomScale(n.zoom),a=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;De(this._image,a,i)},_reset:function(){var n=this._image,i=new ft(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),a=i.getSize();Te(n,i.min),n.style.width=a.x+"px",n.style.height=a.y+"px"},_updateOpacity:function(){Yt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),su=function(n,i,a){return new ss(n,i,a)},Cl=ss.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",i=this._image=n?this._url:dt("video");if(It(i,"leaflet-image-layer"),this._zoomAnimated&&It(i,"leaflet-zoom-animated"),this.options.className&&It(i,this.options.className),i.onselectstart=_,i.onmousemove=_,i.onloadeddata=h(this.fire,this,"load"),n){for(var a=i.getElementsByTagName("source"),c=[],p=0;p<a.length;p++)c.push(a[p].src);this._url=a.length>0?c:[i.src];return}P(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(i.style,"objectFit")&&(i.style.objectFit="fill"),i.autoplay=!!this.options.autoplay,i.loop=!!this.options.loop,i.muted=!!this.options.muted,i.playsInline=!!this.options.playsInline;for(var M=0;M<this._url.length;M++){var I=dt("source");I.src=this._url[M],i.appendChild(I)}}});function ou(n,i,a){return new Cl(n,i,a)}var Pl=ss.extend({_initImage:function(){var n=this._image=this._url;It(n,"leaflet-image-layer"),this._zoomAnimated&&It(n,"leaflet-zoom-animated"),this.options.className&&It(n,this.options.className),n.onselectstart=_,n.onmousemove=_}});function au(n,i,a){return new Pl(n,i,a)}var Pn=xn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,i){n&&(n instanceof Vt||P(n))?(this._latlng=W(n),w(this,i)):(w(this,n),this._source=i),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&Yt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&Yt(this._container,1),this.bringToFront(),this.options.interactive&&(It(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(Yt(this._container,0),this._removeTimeout=setTimeout(h(bt,void 0,this._container),200)):bt(this._container),this.options.interactive&&(Wt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=W(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&qt(this._container),this},bringToBack:function(){return this._map&&oe(this._container),this},_prepareOpen:function(n){var i=this._source;if(!i._map)return!1;if(i instanceof kn){i=null;var a=this._source._layers;for(var c in a)if(a[c]._map){i=a[c];break}if(!i)return!1;this._source=i}if(!n)if(i.getCenter)n=i.getCenter();else if(i.getLatLng)n=i.getLatLng();else if(i.getBounds)n=i.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,i=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof i=="string")n.innerHTML=i;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(i)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),i=it(this.options.offset),a=this._getAnchor();this._zoomAnimated?Te(this._container,n.add(a)):i=i.add(n).add(a);var c=this._containerBottom=-i.y,p=this._containerLeft=-Math.round(this._containerWidth/2)+i.x;this._container.style.bottom=c+"px",this._container.style.left=p+"px"}},_getAnchor:function(){return[0,0]}});he.include({_initOverlay:function(n,i,a,c){var p=i;return p instanceof n||(p=new n(c).setContent(i)),a&&p.setLatLng(a),p}}),xn.include({_initOverlay:function(n,i,a,c){var p=a;return p instanceof n?(w(p,c),p._source=this):(p=i&&!c?i:new n(c,this),p.setContent(a)),p}});var os=Pn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,Pn.prototype.openOn.call(this,n)},onAdd:function(n){Pn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof oi||this._source.on("preclick",xi))},onRemove:function(n){Pn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof oi||this._source.off("preclick",xi))},getEvents:function(){var n=Pn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",i=this._container=dt("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),a=this._wrapper=dt("div",n+"-content-wrapper",i);if(this._contentNode=dt("div",n+"-content",a),xr(i),ro(this._contentNode),Qt(i,"contextmenu",xi),this._tipContainer=dt("div",n+"-tip-container",i),this._tip=dt("div",n+"-tip",this._tipContainer),this.options.closeButton){var c=this._closeButton=dt("a",n+"-close-button",i);c.setAttribute("role","button"),c.setAttribute("aria-label","Close popup"),c.href="#close",c.innerHTML='<span aria-hidden="true">&#215;</span>',Qt(c,"click",function(p){Ge(p),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,i=n.style;i.width="",i.whiteSpace="nowrap";var a=n.offsetWidth;a=Math.min(a,this.options.maxWidth),a=Math.max(a,this.options.minWidth),i.width=a+1+"px",i.whiteSpace="",i.height="";var c=n.offsetHeight,p=this.options.maxHeight,M="leaflet-popup-scrolled";p&&c>p?(i.height=p+"px",It(n,M)):Wt(n,M),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var i=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),a=this._getAnchor();Te(this._container,i.add(a))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,i=parseInt(Pt(this._container,"marginBottom"),10)||0,a=this._container.offsetHeight+i,c=this._containerWidth,p=new K(this._containerLeft,-a-this._containerBottom);p._add(ce(this._container));var M=n.layerPointToContainerPoint(p),I=it(this.options.autoPanPadding),G=it(this.options.autoPanPaddingTopLeft||I),j=it(this.options.autoPanPaddingBottomRight||I),ct=n.getSize(),At=0,Xt=0;M.x+c+j.x>ct.x&&(At=M.x+c-ct.x+j.x),M.x-At-G.x<0&&(At=M.x-G.x),M.y+a+j.y>ct.y&&(Xt=M.y+a-ct.y+j.y),M.y-Xt-G.y<0&&(Xt=M.y-G.y),(At||Xt)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([At,Xt]))}},_getAnchor:function(){return it(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),lu=function(n,i){return new os(n,i)};he.mergeOptions({closePopupOnClick:!0}),he.include({openPopup:function(n,i,a){return this._initOverlay(os,n,i,a).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),xn.include({bindPopup:function(n,i){return this._popup=this._initOverlay(os,this._popup,n,i),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof kn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){yi(n);var i=n.layer||n.target;if(this._popup._source===i&&!(i instanceof oi)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=i,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var as=Pn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){Pn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){Pn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=Pn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",i=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=dt("div",i),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var i,a,c=this._map,p=this._container,M=c.latLngToContainerPoint(c.getCenter()),I=c.layerPointToContainerPoint(n),G=this.options.direction,j=p.offsetWidth,ct=p.offsetHeight,At=it(this.options.offset),Xt=this._getAnchor();G==="top"?(i=j/2,a=ct):G==="bottom"?(i=j/2,a=0):G==="center"?(i=j/2,a=ct/2):G==="right"?(i=0,a=ct/2):G==="left"?(i=j,a=ct/2):I.x<M.x?(G="right",i=0,a=ct/2):(G="left",i=j+(At.x+Xt.x)*2,a=ct/2),n=n.subtract(it(i,a,!0)).add(At).add(Xt),Wt(p,"leaflet-tooltip-right"),Wt(p,"leaflet-tooltip-left"),Wt(p,"leaflet-tooltip-top"),Wt(p,"leaflet-tooltip-bottom"),It(p,"leaflet-tooltip-"+G),Te(p,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&Yt(this._container,n)},_animateZoom:function(n){var i=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(i)},_getAnchor:function(){return it(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),cu=function(n,i){return new as(n,i)};he.include({openTooltip:function(n,i,a){return this._initOverlay(as,n,i,a).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),xn.include({bindTooltip:function(n,i){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(as,this._tooltip,n,i),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var i=n?"off":"on",a={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?a.add=this._openTooltip:(a.mouseover=this._openTooltip,a.mouseout=this.closeTooltip,a.click=this._openTooltip,this._map?this._addFocusListeners():a.add=this._addFocusListeners),this._tooltip.options.sticky&&(a.mousemove=this._moveTooltip),this[i](a),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof kn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var i=typeof n.getElement=="function"&&n.getElement();i&&(Qt(i,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),Qt(i,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var i=typeof n.getElement=="function"&&n.getElement();i&&i.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var i=this;this._map.once("moveend",function(){i._openOnceFlag=!1,i._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var i=n.latlng,a,c;this._tooltip.options.sticky&&n.originalEvent&&(a=this._map.mouseEventToContainerPoint(n.originalEvent),c=this._map.containerPointToLayerPoint(a),i=this._map.layerPointToLatLng(c)),this._tooltip.setLatLng(i)}});var Rl=zi.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var i=n&&n.tagName==="DIV"?n:document.createElement("div"),a=this.options;if(a.html instanceof Element?(Bt(i),i.appendChild(a.html)):i.innerHTML=a.html!==!1?a.html:"",a.bgPos){var c=it(a.bgPos);i.style.backgroundPosition=-c.x+"px "+-c.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}});function hu(n){return new Rl(n)}zi.Default=Mr;var Er=xn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Ot.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){w(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),bt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(qt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(oe(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=d(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof K?n:new K(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var i=this.getPane().children,a=-n(-1/0,1/0),c=0,p=i.length,M;c<p;c++)M=i[c].style.zIndex,i[c]!==this._container&&M&&(a=n(a,+M));isFinite(a)&&(this.options.zIndex=a+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Ot.ielt9){Yt(this._container,this.options.opacity);var n=+new Date,i=!1,a=!1;for(var c in this._tiles){var p=this._tiles[c];if(!(!p.current||!p.loaded)){var M=Math.min(1,(n-p.loaded)/200);Yt(p.el,M),M<1?i=!0:(p.active?a=!0:this._onOpaqueTile(p),p.active=!0)}}a&&!this._noPrune&&this._pruneTiles(),i&&(J(this._fadeFrame),this._fadeFrame=B(this._updateOpacity,this))}},_onOpaqueTile:_,_initContainer:function(){this._container||(this._container=dt("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,i=this.options.maxZoom;if(n!==void 0){for(var a in this._levels)a=Number(a),this._levels[a].el.children.length||a===n?(this._levels[a].el.style.zIndex=i-Math.abs(n-a),this._onUpdateLevel(a)):(bt(this._levels[a].el),this._removeTilesAtZoom(a),this._onRemoveLevel(a),delete this._levels[a]);var c=this._levels[n],p=this._map;return c||(c=this._levels[n]={},c.el=dt("div","leaflet-tile-container leaflet-zoom-animated",this._container),c.el.style.zIndex=i,c.origin=p.project(p.unproject(p.getPixelOrigin()),n).round(),c.zoom=n,this._setZoomTransform(c,p.getCenter(),p.getZoom()),_(c.el.offsetWidth),this._onCreateLevel(c)),this._level=c,c}},_onUpdateLevel:_,_onRemoveLevel:_,_onCreateLevel:_,_pruneTiles:function(){if(this._map){var n,i,a=this._map.getZoom();if(a>this.options.maxZoom||a<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)i=this._tiles[n],i.retain=i.current;for(n in this._tiles)if(i=this._tiles[n],i.current&&!i.active){var c=i.coords;this._retainParent(c.x,c.y,c.z,c.z-5)||this._retainChildren(c.x,c.y,c.z,c.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var i in this._tiles)this._tiles[i].coords.z===n&&this._removeTile(i)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)bt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,i,a,c){var p=Math.floor(n/2),M=Math.floor(i/2),I=a-1,G=new K(+p,+M);G.z=+I;var j=this._tileCoordsToKey(G),ct=this._tiles[j];return ct&&ct.active?(ct.retain=!0,!0):(ct&&ct.loaded&&(ct.retain=!0),I>c?this._retainParent(p,M,I,c):!1)},_retainChildren:function(n,i,a,c){for(var p=2*n;p<2*n+2;p++)for(var M=2*i;M<2*i+2;M++){var I=new K(p,M);I.z=a+1;var G=this._tileCoordsToKey(I),j=this._tiles[G];if(j&&j.active){j.retain=!0;continue}else j&&j.loaded&&(j.retain=!0);a+1<c&&this._retainChildren(p,M,a+1,c)}},_resetView:function(n){var i=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),i,i)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var i=this.options;return i.minNativeZoom!==void 0&&n<i.minNativeZoom?i.minNativeZoom:i.maxNativeZoom!==void 0&&i.maxNativeZoom<n?i.maxNativeZoom:n},_setView:function(n,i,a,c){var p=Math.round(i);this.options.maxZoom!==void 0&&p>this.options.maxZoom||this.options.minZoom!==void 0&&p<this.options.minZoom?p=void 0:p=this._clampZoom(p);var M=this.options.updateWhenZooming&&p!==this._tileZoom;(!c||M)&&(this._tileZoom=p,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),p!==void 0&&this._update(n),a||this._pruneTiles(),this._noPrune=!!a),this._setZoomTransforms(n,i)},_setZoomTransforms:function(n,i){for(var a in this._levels)this._setZoomTransform(this._levels[a],n,i)},_setZoomTransform:function(n,i,a){var c=this._map.getZoomScale(a,n.zoom),p=n.origin.multiplyBy(c).subtract(this._map._getNewPixelOrigin(i,a)).round();Ot.any3d?De(n.el,p,c):Te(n.el,p)},_resetGrid:function(){var n=this._map,i=n.options.crs,a=this._tileSize=this.getTileSize(),c=this._tileZoom,p=this._map.getPixelWorldBounds(this._tileZoom);p&&(this._globalTileRange=this._pxBoundsToTileRange(p)),this._wrapX=i.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,i.wrapLng[0]],c).x/a.x),Math.ceil(n.project([0,i.wrapLng[1]],c).x/a.y)],this._wrapY=i.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([i.wrapLat[0],0],c).y/a.x),Math.ceil(n.project([i.wrapLat[1],0],c).y/a.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var i=this._map,a=i._animatingZoom?Math.max(i._animateToZoom,i.getZoom()):i.getZoom(),c=i.getZoomScale(a,this._tileZoom),p=i.project(n,this._tileZoom).floor(),M=i.getSize().divideBy(c*2);return new ft(p.subtract(M),p.add(M))},_update:function(n){var i=this._map;if(i){var a=this._clampZoom(i.getZoom());if(n===void 0&&(n=i.getCenter()),this._tileZoom!==void 0){var c=this._getTiledPixelBounds(n),p=this._pxBoundsToTileRange(c),M=p.getCenter(),I=[],G=this.options.keepBuffer,j=new ft(p.getBottomLeft().subtract([G,-G]),p.getTopRight().add([G,-G]));if(!(isFinite(p.min.x)&&isFinite(p.min.y)&&isFinite(p.max.x)&&isFinite(p.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ct in this._tiles){var At=this._tiles[ct].coords;(At.z!==this._tileZoom||!j.contains(new K(At.x,At.y)))&&(this._tiles[ct].current=!1)}if(Math.abs(a-this._tileZoom)>1){this._setView(n,a);return}for(var Xt=p.min.y;Xt<=p.max.y;Xt++)for(var ie=p.min.x;ie<=p.max.x;ie++){var je=new K(ie,Xt);if(je.z=this._tileZoom,!!this._isValidTile(je)){var Ve=this._tiles[this._tileCoordsToKey(je)];Ve?Ve.current=!0:I.push(je)}}if(I.sort(function(en,Gi){return en.distanceTo(M)-Gi.distanceTo(M)}),I.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var un=document.createDocumentFragment();for(ie=0;ie<I.length;ie++)this._addTile(I[ie],un);this._level.el.appendChild(un)}}}},_isValidTile:function(n){var i=this._map.options.crs;if(!i.infinite){var a=this._globalTileRange;if(!i.wrapLng&&(n.x<a.min.x||n.x>a.max.x)||!i.wrapLat&&(n.y<a.min.y||n.y>a.max.y))return!1}if(!this.options.bounds)return!0;var c=this._tileCoordsToBounds(n);return Kt(this.options.bounds).overlaps(c)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var i=this._map,a=this.getTileSize(),c=n.scaleBy(a),p=c.add(a),M=i.unproject(c,n.z),I=i.unproject(p,n.z);return[M,I]},_tileCoordsToBounds:function(n){var i=this._tileCoordsToNwSe(n),a=new kt(i[0],i[1]);return this.options.noWrap||(a=this._map.wrapLatLngBounds(a)),a},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var i=n.split(":"),a=new K(+i[0],+i[1]);return a.z=+i[2],a},_removeTile:function(n){var i=this._tiles[n];i&&(bt(i.el),delete this._tiles[n],this.fire("tileunload",{tile:i.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){It(n,"leaflet-tile");var i=this.getTileSize();n.style.width=i.x+"px",n.style.height=i.y+"px",n.onselectstart=_,n.onmousemove=_,Ot.ielt9&&this.options.opacity<1&&Yt(n,this.options.opacity)},_addTile:function(n,i){var a=this._getTilePos(n),c=this._tileCoordsToKey(n),p=this.createTile(this._wrapCoords(n),h(this._tileReady,this,n));this._initTile(p),this.createTile.length<2&&B(h(this._tileReady,this,n,null,p)),Te(p,a),this._tiles[c]={el:p,coords:n,current:!0},i.appendChild(p),this.fire("tileloadstart",{tile:p,coords:n})},_tileReady:function(n,i,a){i&&this.fire("tileerror",{error:i,tile:a,coords:n});var c=this._tileCoordsToKey(n);a=this._tiles[c],a&&(a.loaded=+new Date,this._map._fadeAnimated?(Yt(a.el,0),J(this._fadeFrame),this._fadeFrame=B(this._updateOpacity,this)):(a.active=!0,this._pruneTiles()),i||(It(a.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:a.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Ot.ielt9||!this._map._fadeAnimated?B(this._pruneTiles,this):setTimeout(h(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var i=new K(this._wrapX?g(n.x,this._wrapX):n.x,this._wrapY?g(n.y,this._wrapY):n.y);return i.z=n.z,i},_pxBoundsToTileRange:function(n){var i=this.getTileSize();return new ft(n.min.unscaleBy(i).floor(),n.max.unscaleBy(i).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function uu(n){return new Er(n)}var Hi=Er.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,i){this._url=n,i=w(this,i),i.detectRetina&&Ot.retina&&i.maxZoom>0?(i.tileSize=Math.floor(i.tileSize/2),i.zoomReverse?(i.zoomOffset--,i.minZoom=Math.min(i.maxZoom,i.minZoom+1)):(i.zoomOffset++,i.maxZoom=Math.max(i.minZoom,i.maxZoom-1)),i.minZoom=Math.max(0,i.minZoom)):i.zoomReverse?i.minZoom=Math.min(i.maxZoom,i.minZoom):i.maxZoom=Math.max(i.minZoom,i.maxZoom),typeof i.subdomains=="string"&&(i.subdomains=i.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,i){return this._url===n&&i===void 0&&(i=!0),this._url=n,i||this.redraw(),this},createTile:function(n,i){var a=document.createElement("img");return Qt(a,"load",h(this._tileOnLoad,this,i,a)),Qt(a,"error",h(this._tileOnError,this,i,a)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(a.referrerPolicy=this.options.referrerPolicy),a.alt="",a.src=this.getTileUrl(n),a},getTileUrl:function(n){var i={r:Ot.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var a=this._globalTileRange.max.y-n.y;this.options.tms&&(i.y=a),i["-y"]=a}return D(this._url,o(i,this.options))},_tileOnLoad:function(n,i){Ot.ielt9?setTimeout(h(n,this,null,i),0):n(null,i)},_tileOnError:function(n,i,a){var c=this.options.errorTileUrl;c&&i.getAttribute("src")!==c&&(i.src=c),n(a,i)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,i=this.options.maxZoom,a=this.options.zoomReverse,c=this.options.zoomOffset;return a&&(n=i-n),n+c},_getSubdomain:function(n){var i=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[i]},_abortLoading:function(){var n,i;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(i=this._tiles[n].el,i.onload=_,i.onerror=_,!i.complete)){i.src=U;var a=this._tiles[n].coords;bt(i),delete this._tiles[n],this.fire("tileabort",{tile:i,coords:a})}},_removeTile:function(n){var i=this._tiles[n];if(i)return i.el.setAttribute("src",U),Er.prototype._removeTile.call(this,n)},_tileReady:function(n,i,a){if(!(!this._map||a&&a.getAttribute("src")===U))return Er.prototype._tileReady.call(this,n,i,a)}});function Ll(n,i){return new Hi(n,i)}var Dl=Hi.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,i){this._url=n;var a=o({},this.defaultWmsParams);for(var c in i)c in this.options||(a[c]=i[c]);i=w(this,i);var p=i.detectRetina&&Ot.retina?2:1,M=this.getTileSize();a.width=M.x*p,a.height=M.y*p,this.wmsParams=a},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var i=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[i]=this._crs.code,Hi.prototype.onAdd.call(this,n)},getTileUrl:function(n){var i=this._tileCoordsToNwSe(n),a=this._crs,c=Ht(a.project(i[0]),a.project(i[1])),p=c.min,M=c.max,I=(this._wmsVersion>=1.3&&this._crs===Tl?[p.y,p.x,M.y,M.x]:[p.x,p.y,M.x,M.y]).join(","),G=Hi.prototype.getTileUrl.call(this,n);return G+x(this.wmsParams,G,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+I},setParams:function(n,i){return o(this.wmsParams,n),i||this.redraw(),this}});function fu(n,i){return new Dl(n,i)}Hi.WMS=Dl,Ll.wms=fu;var Gn=xn.extend({options:{padding:.1},initialize:function(n){w(this,n),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),It(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,i){var a=this._map.getZoomScale(i,this._zoom),c=this._map.getSize().multiplyBy(.5+this.options.padding),p=this._map.project(this._center,i),M=c.multiplyBy(-a).add(p).subtract(this._map._getNewPixelOrigin(n,i));Ot.any3d?De(this._container,M,a):Te(this._container,M)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,i=this._map.getSize(),a=this._map.containerPointToLayerPoint(i.multiplyBy(-n)).round();this._bounds=new ft(a,a.add(i.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Il=Gn.extend({options:{tolerance:0},getEvents:function(){var n=Gn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Gn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");Qt(n,"mousemove",this._onMouseMove,this),Qt(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Qt(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){J(this._redrawRequest),delete this._ctx,bt(this._container),be(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var i in this._layers)n=this._layers[i],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Gn.prototype._update.call(this);var n=this._bounds,i=this._container,a=n.getSize(),c=Ot.retina?2:1;Te(i,n.min),i.width=c*a.x,i.height=c*a.y,i.style.width=a.x+"px",i.style.height=a.y+"px",Ot.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Gn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[f(n)]=n;var i=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=i),this._drawLast=i,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var i=n._order,a=i.next,c=i.prev;a?a.prev=c:this._drawLast=c,c?c.next=a:this._drawFirst=a,delete n._order,delete this._layers[f(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var i=n.options.dashArray.split(/[, ]+/),a=[],c,p;for(p=0;p<i.length;p++){if(c=Number(i[p]),isNaN(c))return;a.push(c)}n.options._dashArray=a}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||B(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var i=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new ft,this._redrawBounds.extend(n._pxBounds.min.subtract([i,i])),this._redrawBounds.extend(n._pxBounds.max.add([i,i]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var i=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,i.x,i.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,i=this._redrawBounds;if(this._ctx.save(),i){var a=i.getSize();this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,a.x,a.y),this._ctx.clip()}this._drawing=!0;for(var c=this._drawFirst;c;c=c.next)n=c.layer,(!i||n._pxBounds&&n._pxBounds.intersects(i))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,i){if(this._drawing){var a,c,p,M,I=n._parts,G=I.length,j=this._ctx;if(G){for(j.beginPath(),a=0;a<G;a++){for(c=0,p=I[a].length;c<p;c++)M=I[a][c],j[c?"lineTo":"moveTo"](M.x,M.y);i&&j.closePath()}this._fillStroke(j,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var i=n._point,a=this._ctx,c=Math.max(Math.round(n._radius),1),p=(Math.max(Math.round(n._radiusY),1)||c)/c;p!==1&&(a.save(),a.scale(1,p)),a.beginPath(),a.arc(i.x,i.y/p,c,0,Math.PI*2,!1),p!==1&&a.restore(),this._fillStroke(a,n)}},_fillStroke:function(n,i){var a=i.options;a.fill&&(n.globalAlpha=a.fillOpacity,n.fillStyle=a.fillColor||a.color,n.fill(a.fillRule||"evenodd")),a.stroke&&a.weight!==0&&(n.setLineDash&&n.setLineDash(i.options&&i.options._dashArray||[]),n.globalAlpha=a.opacity,n.lineWidth=a.weight,n.strokeStyle=a.color,n.lineCap=a.lineCap,n.lineJoin=a.lineJoin,n.stroke())},_onClick:function(n){for(var i=this._map.mouseEventToLayerPoint(n),a,c,p=this._drawFirst;p;p=p.next)a=p.layer,a.options.interactive&&a._containsPoint(i)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(a))&&(c=a);this._fireEvent(c?[c]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var i=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,i)}},_handleMouseOut:function(n){var i=this._hoveredLayer;i&&(Wt(this._container,"leaflet-interactive"),this._fireEvent([i],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,i){if(!this._mouseHoverThrottled){for(var a,c,p=this._drawFirst;p;p=p.next)a=p.layer,a.options.interactive&&a._containsPoint(i)&&(c=a);c!==this._hoveredLayer&&(this._handleMouseOut(n),c&&(It(this._container,"leaflet-interactive"),this._fireEvent([c],n,"mouseover"),this._hoveredLayer=c)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(h(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,i,a){this._map._fireDOMEvent(i,a||i.type,n)},_bringToFront:function(n){var i=n._order;if(i){var a=i.next,c=i.prev;if(a)a.prev=c;else return;c?c.next=a:a&&(this._drawFirst=a),i.prev=this._drawLast,this._drawLast.next=i,i.next=null,this._drawLast=i,this._requestRedraw(n)}},_bringToBack:function(n){var i=n._order;if(i){var a=i.next,c=i.prev;if(c)c.next=a;else return;a?a.prev=c:c&&(this._drawLast=c),i.prev=null,i.next=this._drawFirst,this._drawFirst.prev=i,this._drawFirst=i,this._requestRedraw(n)}}});function Ul(n){return Ot.canvas?new Il(n):null}var Tr=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),du={_initContainer:function(){this._container=dt("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Gn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var i=n._container=Tr("shape");It(i,"leaflet-vml-shape "+(this.options.className||"")),i.coordsize="1 1",n._path=Tr("path"),i.appendChild(n._path),this._updateStyle(n),this._layers[f(n)]=n},_addPath:function(n){var i=n._container;this._container.appendChild(i),n.options.interactive&&n.addInteractiveTarget(i)},_removePath:function(n){var i=n._container;bt(i),n.removeInteractiveTarget(i),delete this._layers[f(n)]},_updateStyle:function(n){var i=n._stroke,a=n._fill,c=n.options,p=n._container;p.stroked=!!c.stroke,p.filled=!!c.fill,c.stroke?(i||(i=n._stroke=Tr("stroke")),p.appendChild(i),i.weight=c.weight+"px",i.color=c.color,i.opacity=c.opacity,c.dashArray?i.dashStyle=P(c.dashArray)?c.dashArray.join(" "):c.dashArray.replace(/( *, *)/g," "):i.dashStyle="",i.endcap=c.lineCap.replace("butt","flat"),i.joinstyle=c.lineJoin):i&&(p.removeChild(i),n._stroke=null),c.fill?(a||(a=n._fill=Tr("fill")),p.appendChild(a),a.color=c.fillColor||c.color,a.opacity=c.fillOpacity):a&&(p.removeChild(a),n._fill=null)},_updateCircle:function(n){var i=n._point.round(),a=Math.round(n._radius),c=Math.round(n._radiusY||a);this._setPath(n,n._empty()?"M0 0":"AL "+i.x+","+i.y+" "+a+","+c+" 0,"+65535*360)},_setPath:function(n,i){n._path.v=i},_bringToFront:function(n){qt(n._container)},_bringToBack:function(n){oe(n._container)}},ls=Ot.vml?Tr:_e,br=Gn.extend({_initContainer:function(){this._container=ls("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ls("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){bt(this._container),be(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Gn.prototype._update.call(this);var n=this._bounds,i=n.getSize(),a=this._container;(!this._svgSize||!this._svgSize.equals(i))&&(this._svgSize=i,a.setAttribute("width",i.x),a.setAttribute("height",i.y)),Te(a,n.min),a.setAttribute("viewBox",[n.min.x,n.min.y,i.x,i.y].join(" ")),this.fire("update")}},_initPath:function(n){var i=n._path=ls("path");n.options.className&&It(i,n.options.className),n.options.interactive&&It(i,"leaflet-interactive"),this._updateStyle(n),this._layers[f(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){bt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[f(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var i=n._path,a=n.options;i&&(a.stroke?(i.setAttribute("stroke",a.color),i.setAttribute("stroke-opacity",a.opacity),i.setAttribute("stroke-width",a.weight),i.setAttribute("stroke-linecap",a.lineCap),i.setAttribute("stroke-linejoin",a.lineJoin),a.dashArray?i.setAttribute("stroke-dasharray",a.dashArray):i.removeAttribute("stroke-dasharray"),a.dashOffset?i.setAttribute("stroke-dashoffset",a.dashOffset):i.removeAttribute("stroke-dashoffset")):i.setAttribute("stroke","none"),a.fill?(i.setAttribute("fill",a.fillColor||a.color),i.setAttribute("fill-opacity",a.fillOpacity),i.setAttribute("fill-rule",a.fillRule||"evenodd")):i.setAttribute("fill","none"))},_updatePoly:function(n,i){this._setPath(n,$t(n._parts,i))},_updateCircle:function(n){var i=n._point,a=Math.max(Math.round(n._radius),1),c=Math.max(Math.round(n._radiusY),1)||a,p="a"+a+","+c+" 0 1,0 ",M=n._empty()?"M0 0":"M"+(i.x-a)+","+i.y+p+a*2+",0 "+p+-a*2+",0 ";this._setPath(n,M)},_setPath:function(n,i){n._path.setAttribute("d",i)},_bringToFront:function(n){qt(n._path)},_bringToBack:function(n){oe(n._path)}});Ot.vml&&br.include(du);function Nl(n){return Ot.svg||Ot.vml?new br(n):null}he.include({getRenderer:function(n){var i=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return i||(i=this._renderer=this._createRenderer()),this.hasLayer(i)||this.addLayer(i),i},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var i=this._paneRenderers[n];return i===void 0&&(i=this._createRenderer({pane:n}),this._paneRenderers[n]=i),i},_createRenderer:function(n){return this.options.preferCanvas&&Ul(n)||Nl(n)}});var Fl=ki.extend({initialize:function(n,i){ki.prototype.initialize.call(this,this._boundsToLatLngs(n),i)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=Kt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function pu(n,i){return new Fl(n,i)}br.create=ls,br.pointsToPath=$t,Hn.geometryToLayer=es,Hn.coordsToLatLng=po,Hn.coordsToLatLngs=ns,Hn.latLngToCoords=mo,Hn.latLngsToCoords=is,Hn.getFeature=Vi,Hn.asFeature=rs,he.mergeOptions({boxZoom:!0});var Ol=Cn.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){Qt(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){be(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){bt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ie(),vi(),this._startPoint=this._map.mouseEventToContainerPoint(n),Qt(document,{contextmenu:yi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=dt("div","leaflet-zoom-box",this._container),It(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var i=new ft(this._point,this._startPoint),a=i.getSize();Te(this._box,i.min),this._box.style.width=a.x+"px",this._box.style.height=a.y+"px"},_finish:function(){this._moved&&(bt(this._box),Wt(this._container,"leaflet-crosshair")),ke(),gn(),be(document,{contextmenu:yi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(h(this._resetState,this),0);var i=new kt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(i).fire("boxzoomend",{boxZoomBounds:i})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});he.addInitHook("addHandler","boxZoom",Ol),he.mergeOptions({doubleClickZoom:!0});var Bl=Cn.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var i=this._map,a=i.getZoom(),c=i.options.zoomDelta,p=n.originalEvent.shiftKey?a-c:a+c;i.options.doubleClickZoom==="center"?i.setZoom(p):i.setZoomAround(n.containerPoint,p)}});he.addInitHook("addHandler","doubleClickZoom",Bl),he.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var zl=Cn.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new si(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}It(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Wt(this._map._container,"leaflet-grab"),Wt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var i=Kt(this._map.options.maxBounds);this._offsetLimit=Ht(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var i=this._lastTime=+new Date,a=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(a),this._times.push(i),this._prunePositions(i)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),i=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=i.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,i){return n-(n-i)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),i=this._offsetLimit;n.x<i.min.x&&(n.x=this._viscousLimit(n.x,i.min.x)),n.y<i.min.y&&(n.y=this._viscousLimit(n.y,i.min.y)),n.x>i.max.x&&(n.x=this._viscousLimit(n.x,i.max.x)),n.y>i.max.y&&(n.y=this._viscousLimit(n.y,i.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,i=Math.round(n/2),a=this._initialWorldOffset,c=this._draggable._newPos.x,p=(c-i+a)%n+i-a,M=(c+i+a)%n-i-a,I=Math.abs(p+a)<Math.abs(M+a)?p:M;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=I},_onDragEnd:function(n){var i=this._map,a=i.options,c=!a.inertia||n.noInertia||this._times.length<2;if(i.fire("dragend",n),c)i.fire("moveend");else{this._prunePositions(+new Date);var p=this._lastPos.subtract(this._positions[0]),M=(this._lastTime-this._times[0])/1e3,I=a.easeLinearity,G=p.multiplyBy(I/M),j=G.distanceTo([0,0]),ct=Math.min(a.inertiaMaxSpeed,j),At=G.multiplyBy(ct/j),Xt=ct/(a.inertiaDeceleration*I),ie=At.multiplyBy(-Xt/2).round();!ie.x&&!ie.y?i.fire("moveend"):(ie=i._limitOffset(ie,i.options.maxBounds),B(function(){i.panBy(ie,{duration:Xt,easeLinearity:I,noMoveStart:!0,animate:!0})}))}}});he.addInitHook("addHandler","dragging",zl),he.mergeOptions({keyboard:!0,keyboardPanDelta:80});var kl=Cn.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),Qt(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),be(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,i=document.documentElement,a=n.scrollTop||i.scrollTop,c=n.scrollLeft||i.scrollLeft;this._map._container.focus(),window.scrollTo(c,a)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var i=this._panKeys={},a=this.keyCodes,c,p;for(c=0,p=a.left.length;c<p;c++)i[a.left[c]]=[-1*n,0];for(c=0,p=a.right.length;c<p;c++)i[a.right[c]]=[n,0];for(c=0,p=a.down.length;c<p;c++)i[a.down[c]]=[0,n];for(c=0,p=a.up.length;c<p;c++)i[a.up[c]]=[0,-1*n]},_setZoomDelta:function(n){var i=this._zoomKeys={},a=this.keyCodes,c,p;for(c=0,p=a.zoomIn.length;c<p;c++)i[a.zoomIn[c]]=n;for(c=0,p=a.zoomOut.length;c<p;c++)i[a.zoomOut[c]]=-n},_addHooks:function(){Qt(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){be(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var i=n.keyCode,a=this._map,c;if(i in this._panKeys){if(!a._panAnim||!a._panAnim._inProgress)if(c=this._panKeys[i],n.shiftKey&&(c=it(c).multiplyBy(3)),a.options.maxBounds&&(c=a._limitOffset(it(c),a.options.maxBounds)),a.options.worldCopyJump){var p=a.wrapLatLng(a.unproject(a.project(a.getCenter()).add(c)));a.panTo(p)}else a.panBy(c)}else if(i in this._zoomKeys)a.setZoom(a.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[i]);else if(i===27&&a._popup&&a._popup.options.closeOnEscapeKey)a.closePopup();else return;yi(n)}}});he.addInitHook("addHandler","keyboard",kl),he.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Vl=Cn.extend({addHooks:function(){Qt(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){be(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var i=ul(n),a=this._map.options.wheelDebounceTime;this._delta+=i,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var c=Math.max(a-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(h(this._performZoom,this),c),yi(n)},_performZoom:function(){var n=this._map,i=n.getZoom(),a=this._map.options.zoomSnap||0;n._stop();var c=this._delta/(this._map.options.wheelPxPerZoomLevel*4),p=4*Math.log(2/(1+Math.exp(-Math.abs(c))))/Math.LN2,M=a?Math.ceil(p/a)*a:p,I=n._limitZoom(i+(this._delta>0?M:-M))-i;this._delta=0,this._startTime=null,I&&(n.options.scrollWheelZoom==="center"?n.setZoom(i+I):n.setZoomAround(this._lastMousePos,i+I))}});he.addInitHook("addHandler","scrollWheelZoom",Vl);var mu=600;he.mergeOptions({tapHold:Ot.touchNative&&Ot.safari&&Ot.mobile,tapTolerance:15});var Hl=Cn.extend({addHooks:function(){Qt(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){be(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var i=n.touches[0];this._startPos=this._newPos=new K(i.clientX,i.clientY),this._holdTimeout=setTimeout(h(function(){this._cancel(),this._isTapValid()&&(Qt(document,"touchend",Ge),Qt(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",i))},this),mu),Qt(document,"touchend touchcancel contextmenu",this._cancel,this),Qt(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){be(document,"touchend",Ge),be(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),be(document,"touchend touchcancel contextmenu",this._cancel,this),be(document,"touchmove",this._onMove,this)},_onMove:function(n){var i=n.touches[0];this._newPos=new K(i.clientX,i.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,i){var a=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:i.screenX,screenY:i.screenY,clientX:i.clientX,clientY:i.clientY});a._simulated=!0,i.target.dispatchEvent(a)}});he.addInitHook("addHandler","tapHold",Hl),he.mergeOptions({touchZoom:Ot.touch,bounceAtZoomLimits:!0});var Gl=Cn.extend({addHooks:function(){It(this._map._container,"leaflet-touch-zoom"),Qt(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Wt(this._map._container,"leaflet-touch-zoom"),be(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var i=this._map;if(!(!n.touches||n.touches.length!==2||i._animatingZoom||this._zooming)){var a=i.mouseEventToContainerPoint(n.touches[0]),c=i.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),i.options.touchZoom!=="center"&&(this._pinchStartLatLng=i.containerPointToLatLng(a.add(c)._divideBy(2))),this._startDist=a.distanceTo(c),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),Qt(document,"touchmove",this._onTouchMove,this),Qt(document,"touchend touchcancel",this._onTouchEnd,this),Ge(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var i=this._map,a=i.mouseEventToContainerPoint(n.touches[0]),c=i.mouseEventToContainerPoint(n.touches[1]),p=a.distanceTo(c)/this._startDist;if(this._zoom=i.getScaleZoom(p,this._startZoom),!i.options.bounceAtZoomLimits&&(this._zoom<i.getMinZoom()&&p<1||this._zoom>i.getMaxZoom()&&p>1)&&(this._zoom=i._limitZoom(this._zoom)),i.options.touchZoom==="center"){if(this._center=this._startLatLng,p===1)return}else{var M=a._add(c)._divideBy(2)._subtract(this._centerPoint);if(p===1&&M.x===0&&M.y===0)return;this._center=i.unproject(i.project(this._pinchStartLatLng,this._zoom).subtract(M),this._zoom)}this._moved||(i._moveStart(!0,!1),this._moved=!0),J(this._animRequest);var I=h(i._move,i,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=B(I,this,!0),Ge(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,J(this._animRequest),be(document,"touchmove",this._onTouchMove,this),be(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});he.addInitHook("addHandler","touchZoom",Gl),he.BoxZoom=Ol,he.DoubleClickZoom=Bl,he.Drag=zl,he.Keyboard=kl,he.ScrollWheelZoom=Vl,he.TapHold=Hl,he.TouchZoom=Gl,e.Bounds=ft,e.Browser=Ot,e.CRS=at,e.Canvas=Il,e.Circle=fo,e.CircleMarker=ts,e.Class=rt,e.Control=vn,e.DivIcon=Rl,e.DivOverlay=Pn,e.DomEvent=Ih,e.DomUtil=Lh,e.Draggable=si,e.Evented=q,e.FeatureGroup=kn,e.GeoJSON=Hn,e.GridLayer=Er,e.Handler=Cn,e.Icon=zi,e.ImageOverlay=ss,e.LatLng=Vt,e.LatLngBounds=kt,e.Layer=xn,e.LayerGroup=Bi,e.LineUtil=Zh,e.Map=he,e.Marker=Qr,e.Mixin=kh,e.Path=oi,e.Point=K,e.PolyUtil=Vh,e.Polygon=ki,e.Polyline=Vn,e.Popup=os,e.PosAnimation=fl,e.Projection=qh,e.Rectangle=Fl,e.Renderer=Gn,e.SVG=br,e.SVGOverlay=Pl,e.TileLayer=Hi,e.Tooltip=as,e.Transformation=se,e.Util=Q,e.VideoOverlay=Cl,e.bind=h,e.bounds=Ht,e.canvas=Ul,e.circle=eu,e.circleMarker=tu,e.control=yr,e.divIcon=hu,e.extend=o,e.featureGroup=Jh,e.geoJSON=Al,e.geoJson=ru,e.gridLayer=uu,e.icon=$h,e.imageOverlay=su,e.latLng=W,e.latLngBounds=Kt,e.layerGroup=jh,e.map=Uh,e.marker=Qh,e.point=it,e.polygon=iu,e.polyline=nu,e.popup=lu,e.rectangle=pu,e.setOptions=w,e.stamp=f,e.svg=Nl,e.svgOverlay=au,e.tileLayer=Ll,e.tooltip=cu,e.transformation=Ae,e.version=r,e.videoOverlay=ou;var _u=window.L;e.noConflict=function(){return window.L=_u,this},window.L=e}))})(Or,Or.exports)),Or.exports}var Ir=Kg();class jg{constructor(t,e){this.hal=e,this.map=Ir.map(t,{zoomControl:!1,attributionControl:!1}).setView([0,0],13),Ir.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{maxZoom:20}).addTo(this.map);const r=Ir.divIcon({className:"vehicle-marker",html:'<div style="width: 20px; height: 20px; background: #00f3ff; border-radius: 50%; box-shadow: 0 0 10px #00f3ff;"></div>',iconSize:[20,20],iconAnchor:[10,10]});this.marker=Ir.marker([0,0],{icon:r}).addTo(this.map),Jn(()=>{const o=this.hal.motion.location.lat.value,l=this.hal.motion.location.lng.value;if(o!==0&&l!==0){const h=new Ir.LatLng(o,l);this.marker.setLatLng(h),this.map.panTo(h)}}),setTimeout(()=>this.map.invalidateSize(),500)}map;marker}class Jg{constructor(t){this.hal=t,this.overlay=document.createElement("div"),this.overlay.className="fixed inset-0 z-50 bg-black hidden flex items-center justify-center",this.overlay.innerHTML=`
            <video id="camera-feed" class="w-full h-full object-cover" autoplay playsinline></video>
            <div class="absolute inset-0 border-4 border-red-500/50 pointer-events-none"></div>
            <div class="absolute bottom-10 left-0 right-0 text-center text-red-500 text-2xl font-bold animate-pulse">check surroundings for safety</div>
        `,document.body.appendChild(this.overlay),this.videoElement=this.overlay.querySelector("video"),Jn(()=>{this.hal.powertrain.gear.value==="R"?this.startCamera():this.stopCamera()})}videoElement;overlay;async startCamera(){this.overlay.classList.remove("hidden");try{const t=await navigator.mediaDevices.getUserMedia({video:!0});this.videoElement.srcObject=t}catch(t){console.error("Camera access failed",t),this.videoElement.style.background="url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif) center/cover"}}stopCamera(){this.overlay.classList.add("hidden"),this.videoElement.srcObject&&(this.videoElement.srcObject.getTracks().forEach(e=>e.stop()),this.videoElement.srcObject=null)}}const sn=new Au;window.hal=sn;new Cu;const jo=new qg;window.addEventListener("keydown",s=>{let t=0;s.key==="ArrowUp"&&(t=24),s.key==="ArrowDown"&&(t=25),s.key==="Enter"&&(t=85),t>0&&sn.handleSWC(t)});const $g=document.querySelector("#app");$g.innerHTML=`
  <div class="relative w-screen h-screen overflow-hidden bg-bg-dark text-white select-none">
    
    <!-- Background 3D View -->
    <div id="scene-3d" class="absolute inset-0 z-0 opacity-80 pointer-events-none"></div>

    <!-- UI Overlay -->
    <div class="relative z-10 grid grid-cols-12 h-full p-4 gap-4">
        
        <!-- Left Panel: Stats -->
        <div class="col-span-3 flex flex-col gap-4">
            <div class="glass-panel p-4 rounded-xl">
                <h2 class="text-neon-cyan text-sm uppercase tracking-wider mb-2">Powertrain</h2>
                <div class="flex justify-between items-end">
                    <span class="text-4xl font-mono text-white" id="rpm-val">0</span>
                    <span class="text-gray-400 text-xs mb-1">RPM</span>
                </div>
                 <div class="flex justify-between items-end">
                    <span class="text-6xl font-bold italic text-neon-magenta" id="speed-val">0</span>
                    <span class="text-gray-400 text-xs mb-1">KM/H</span>
                </div>
            </div>

             <div class="glass-panel p-4 rounded-xl">
                <h2 class="text-neon-green text-sm uppercase tracking-wider mb-2">Climate</h2>
                <div class="flex justify-between items-center">
                    <button id="btn-ac" class="p-2 border border-white/20 rounded hover:bg-white/10 transition">AC</button>
                    <span class="text-2xl" id="temp-val">20.0°C</span>
                    <div class="flex flex-col gap-1">
                        <button id="btn-temp-up" class="w-8 h-8 bg-white/10 rounded">▲</button>
                        <button id="btn-temp-down" class="w-8 h-8 bg-white/10 rounded">▼</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Center Panel: Visualization Area -->
        <div class="col-span-6 flex flex-col justify-between">
            <!-- Top Bar -->
            <div class="flex justify-center">
                 <div class="glass-panel px-6 py-2 rounded-b-xl flex gap-8">
                    <span class="text-neon-cyan" id="gear-val">N</span>
                    <span>12:00</span>
                    <span>24°C</span>
                 </div>
            </div>
            
            <!-- Bottom Bar: Controls -->
             <div class="flex justify-center mb-8 gap-4">
                <button id="btn-lock" class="glass-btn px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:text-neon-magenta transition">Lock</button>
                <button id="btn-trunk" class="glass-btn px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:text-neon-cyan transition">Trunk</button>
                <button id="btn-lights" class="glass-btn px-6 py-3 rounded-full uppercase tracking-widest text-sm hover:text-neon-yellow transition">Lights</button>
             </div>
        </div>

        <!-- Right Panel: Telemetry/Nav -->
        <div class="col-span-3 flex flex-col gap-4">
             <div class="glass-panel p-4 rounded-xl h-48 relative overflow-hidden" id="map-container">
                <!-- Map Injected Here -->
                <div class="absolute inset-0 z-0" id="map-view"></div>
                <div class="absolute top-2 left-2 z-10 text-xs text-neon-cyan bg-black/50 px-2 rounded">GPS: ONLINE</div>
            </div>
             <div class="glass-panel p-4 rounded-xl flex-1">
                <h2 class="text-white/50 text-sm uppercase tracking-wider mb-2">Log</h2>
                <div id="log-container" class="font-mono text-xs text-green-400 overflow-y-auto h-full">
                    <div>[SYS] System Online...</div>
                    <div id="voice-status" class="text-neon-magenta mt-2">Voice: Initializing...</div>
                </div>
            </div>
        </div>
    </div>
  </div>
`;const Qg=document.getElementById("scene-3d");new Zg(Qg,sn);const tv=document.getElementById("map-view");new jg(tv,sn);new Jg(sn);const Zs=(s,t)=>{const e=document.getElementById(s);e&&Jn(()=>e.textContent=t.value.toString())};Zs("rpm-val",sn.powertrain.rpm);Zs("speed-val",sn.powertrain.speed);Zs("gear-val",sn.powertrain.gear);Zs("temp-val",sn.body.climate.tempL);const Xc=document.getElementById("voice-status");Jn(()=>{Xc.textContent=jo.isListening.value?"Voice: Listening...":"Voice: Standby",jo.lastCommand.value&&(Xc.textContent=`Voice: "${jo.lastCommand.value}"`)});document.getElementById("btn-lock")?.addEventListener("click",()=>sn.toggleDoor("fl"));document.getElementById("btn-temp-up")?.addEventListener("click",()=>{sn.setClimateTemp("left",sn.body.climate.tempL.value+.5)});document.getElementById("btn-temp-down")?.addEventListener("click",()=>{sn.setClimateTemp("left",sn.body.climate.tempL.value-.5)});
//# sourceMappingURL=index-DVGeb8m9.js.map
