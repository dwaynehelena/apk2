(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=e(a);fetch(a.href,l)}})();var Bu=Symbol.for("preact-signals");function Qo(){if(ss>1)ss--;else{for(var r,t=!1;Bs!==void 0;){var e=Bs;for(Bs=void 0,eo++;e!==void 0;){var i=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&sh(e))try{e.c()}catch(a){t||(r=a,t=!0)}e=i}}if(eo=0,ss--,t)throw r}}var ye=void 0;function nh(r){var t=ye;ye=void 0;try{return r()}finally{ye=t}}var Bs=void 0,ss=0,eo=0,Hr=0;function ih(r){if(ye!==void 0){var t=r.n;if(t===void 0||t.t!==ye)return t={i:0,S:r,p:ye.s,n:void 0,t:ye,e:void 0,x:void 0,r:t},ye.s!==void 0&&(ye.s.n=t),ye.s=t,r.n=t,32&ye.f&&r.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=ye.s,t.n=void 0,ye.s.n=t,ye.s=t),t}}function nn(r,t){this.v=r,this.i=0,this.n=void 0,this.t=void 0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}nn.prototype.brand=Bu;nn.prototype.h=function(){return!0};nn.prototype.S=function(r){var t=this,e=this.t;e!==r&&r.e===void 0&&(r.x=e,this.t=r,e!==void 0?e.e=r:nh(function(){var i;(i=t.W)==null||i.call(t)}))};nn.prototype.U=function(r){var t=this;if(this.t!==void 0){var e=r.e,i=r.x;e!==void 0&&(e.x=i,r.e=void 0),i!==void 0&&(i.e=e,r.x=void 0),r===this.t&&(this.t=i,i===void 0&&nh(function(){var a;(a=t.Z)==null||a.call(t)}))}};nn.prototype.subscribe=function(r){var t=this;return en(function(){var e=t.value,i=ye;ye=void 0;try{r(e)}finally{ye=i}},{name:"sub"})};nn.prototype.valueOf=function(){return this.value};nn.prototype.toString=function(){return this.value+""};nn.prototype.toJSON=function(){return this.value};nn.prototype.peek=function(){var r=ye;ye=void 0;try{return this.value}finally{ye=r}};Object.defineProperty(nn.prototype,"value",{get:function(){var r=ih(this);return r!==void 0&&(r.i=this.i),this.v},set:function(r){if(r!==this.v){if(eo>100)throw new Error("Cycle detected");this.v=r,this.i++,Hr++,ss++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Qo()}}}});function qt(r,t){return new nn(r,t)}function sh(r){for(var t=r.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function rh(r){for(var t=r.s;t!==void 0;t=t.n){var e=t.S.n;if(e!==void 0&&(t.r=e),t.S.n=t,t.i=-1,t.n===void 0){r.s=t;break}}}function ah(r){for(var t=r.s,e=void 0;t!==void 0;){var i=t.p;t.i===-1?(t.S.U(t),i!==void 0&&(i.n=t.n),t.n!==void 0&&(t.n.p=i)):e=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=i}r.s=e}function ds(r,t){nn.call(this,void 0),this.x=r,this.s=void 0,this.g=Hr-1,this.f=4,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}ds.prototype=new nn;ds.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Hr))return!0;if(this.g=Hr,this.f|=1,this.i>0&&!sh(this))return this.f&=-2,!0;var r=ye;try{rh(this),ye=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return ye=r,ah(this),this.f&=-2,!0};ds.prototype.S=function(r){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}nn.prototype.S.call(this,r)};ds.prototype.U=function(r){if(this.t!==void 0&&(nn.prototype.U.call(this,r),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};ds.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var r=this.t;r!==void 0;r=r.x)r.t.N()}};Object.defineProperty(ds.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var r=ih(this);if(this.h(),r!==void 0&&(r.i=this.i),16&this.f)throw this.v;return this.v}});function oh(r){var t=r.u;if(r.u=void 0,typeof t=="function"){ss++;var e=ye;ye=void 0;try{t()}catch(i){throw r.f&=-2,r.f|=8,tl(r),i}finally{ye=e,Qo()}}}function tl(r){for(var t=r.s;t!==void 0;t=t.n)t.S.U(t);r.x=void 0,r.s=void 0,oh(r)}function zu(r){if(ye!==this)throw new Error("Out-of-order effect");ah(this),ye=r,this.f&=-2,8&this.f&&tl(this),Qo()}function fs(r,t){this.x=r,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32,this.name=t?.name}fs.prototype.c=function(){var r=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{r()}};fs.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,oh(this),rh(this),ss++;var r=ye;return ye=this,zu.bind(this,r)};fs.prototype.N=function(){2&this.f||(this.f|=2,this.o=Bs,Bs=this)};fs.prototype.d=function(){this.f|=8,1&this.f||tl(this)};fs.prototype.dispose=function(){this.d()};function en(r,t){var e=new fs(r,t);try{e.c()}catch(a){throw e.d(),a}var i=e.d.bind(e);return i[Symbol.dispose]=i,i}class ku{powertrain={rpm:qt(0),speed:qt(0),gear:qt("N"),boost:qt(0),oil:qt(90),coolant:qt(85)};body={doors:{fl:qt(!1),fr:qt(!1),rl:qt(!1),rr:qt(!1),hood:qt(!1),trunk:qt(!1)},climate:{on:qt(!1),tempL:qt(20),tempR:qt(20),fan:qt(0)},lights:{on:qt(!1),highBeam:qt(!1),hazards:qt(!1)}};motion={location:{lat:qt(0),lng:qt(0),heading:qt(0),elevation:qt(0)},accel:{x:qt(0),y:qt(0),z:qt(9.81)}};media={volume:qt(15),nowPlaying:qt("FM 88.5"),isPlaying:qt(!1)};diagnostics={dtcs:qt([]),voltage:qt(14.2),intakeTemp:qt(35),isScanning:qt(!1)};system={demoMode:qt(!1)};constructor(){setInterval(()=>{if(this.powertrain.speed.value>0){const t=this.powertrain.speed.value/36e3,e=this.motion.location.heading.value*(Math.PI/180);this.motion.location.lat.value+=Math.cos(e)*t,this.motion.location.lng.value+=Math.sin(e)*t,this.motion.accel.x.value=(Math.random()-.5)*2,this.motion.accel.y.value=(Math.random()-.5)*2}else this.motion.accel.x.value*=.8,this.motion.accel.y.value*=.8},100)}readState(){return{powertrain:this.powertrain,body:this.body,motion:this.motion,media:this.media}}updateRPM(t){this.powertrain.rpm.value=t}toggleDoor(t){this.body.doors[t].value=!this.body.doors[t].value}updateLocation(t,e,i){this.motion.location.lat.value=t,this.motion.location.lng.value=e,this.motion.location.heading.value=i}handleSWC(t){switch(t){case 24:this.media.volume.value=Math.min(30,this.media.volume.value+1);break;case 25:this.media.volume.value=Math.max(0,this.media.volume.value-1);break;case 85:this.media.isPlaying.value=!this.media.isPlaying.value;break}}setClimateTemp(t,e){t==="left"?this.body.climate.tempL.value=e:this.body.climate.tempR.value=e}async scanDTCs(){this.diagnostics.isScanning.value=!0,await new Promise(e=>setTimeout(e,1500));const t=["P0300 (Random Misfire)","P0171 (System Too Lean)","B1202 (Fuel Sender Open)"];this.diagnostics.dtcs.value=Math.random()>.4?[t[Math.floor(Math.random()*3)]]:[],this.diagnostics.isScanning.value=!1}clearDTCs(){this.diagnostics.dtcs.value=[]}}class Vu{currentTheme=qt("cyberpunk");constructor(){const t=localStorage.getItem("theme");t&&(this.currentTheme.value=t),en(()=>{const e=this.currentTheme.value;localStorage.setItem("theme",e),this.applyTheme(e)})}setTheme(t){this.currentTheme.value=t}applyTheme(t){const e=document.documentElement;t==="cyberpunk"?(e.style.setProperty("--neon-cyan","#00f3ff"),e.style.setProperty("--neon-magenta","#ff0055"),e.style.setProperty("--bg-dark","#050505")):t==="sport"&&(e.style.setProperty("--neon-cyan","#ff3300"),e.style.setProperty("--neon-magenta","#ffffff"),e.style.setProperty("--bg-dark","#100000"))}}const el="182",Hu=0,tc=1,Gu=2,Fr=1,Wu=2,Ns=3,mi=0,on=1,$n=2,ti=0,rs=1,ec=2,nc=3,ic=4,Xu=5,Pi=100,Zu=101,qu=102,Yu=103,ju=104,Ku=200,Ju=201,$u=202,Qu=203,no=204,io=205,td=206,ed=207,nd=208,id=209,sd=210,rd=211,ad=212,od=213,ld=214,so=0,ro=1,ao=2,os=3,oo=4,lo=5,co=6,ho=7,lh=0,cd=1,hd=2,Bn=0,ch=1,hh=2,uh=3,dh=4,fh=5,ph=6,mh=7,_h=300,Di=301,ls=302,uo=303,fo=304,qr=306,po=1e3,Qn=1001,mo=1002,Xe=1003,ud=1004,fr=1005,Ye=1006,Sa=1007,Li=1008,un=1009,gh=1010,vh=1011,ks=1012,nl=1013,kn=1014,Fn=1015,ni=1016,il=1017,sl=1018,Vs=1020,xh=35902,yh=35899,Mh=1021,Sh=1022,Cn=1023,ii=1026,Ii=1027,bh=1028,rl=1029,cs=1030,al=1031,ol=1033,Or=33776,Br=33777,zr=33778,kr=33779,_o=35840,go=35841,vo=35842,xo=35843,yo=36196,Mo=37492,So=37496,bo=37488,Eo=37489,To=37490,wo=37491,Ao=37808,Co=37809,Po=37810,Ro=37811,Lo=37812,Io=37813,Do=37814,No=37815,Uo=37816,Fo=37817,Oo=37818,Bo=37819,zo=37820,ko=37821,Vo=36492,Ho=36494,Go=36495,Wo=36283,Xo=36284,Zo=36285,qo=36286,dd=3200,fd=0,pd=1,fi="",gn="srgb",hs="srgb-linear",Gr="linear",be="srgb",Gi=7680,sc=519,md=512,_d=513,gd=514,ll=515,vd=516,xd=517,cl=518,yd=519,rc=35044,ac="300 es",On=2e3,Wr=2001;function Eh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Xr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Md(){const r=Xr("canvas");return r.style.display="block",r}const oc={};function lc(...r){const t="THREE."+r.shift();console.log(t,...r)}function $t(...r){const t="THREE."+r.shift();console.warn(t,...r)}function me(...r){const t="THREE."+r.shift();console.error(t,...r)}function Hs(...r){const t=r.join(" ");t in oc||(oc[t]=!0,$t(...r))}function Sd(r,t,e){return new Promise(function(i,a){function l(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,e);break;default:i()}}setTimeout(l,e)})}class ps{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const a=i[t];if(a!==void 0){const l=a.indexOf(e);l!==-1&&a.splice(l,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const a=i.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,t);t.target=null}}}const Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ba=Math.PI/180,Yo=180/Math.PI;function Ws(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ze[r&255]+Ze[r>>8&255]+Ze[r>>16&255]+Ze[r>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[i&255]+Ze[i>>8&255]+Ze[i>>16&255]+Ze[i>>24&255]).toLowerCase()}function ce(r,t,e){return Math.max(t,Math.min(e,r))}function bd(r,t){return(r%t+t)%t}function Ea(r,t,e){return(1-e)*r+e*t}function ws(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function an(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Se{constructor(t=0,e=0){Se.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,a=t.elements;return this.x=a[0]*e+a[3]*i+a[6],this.y=a[1]*e+a[4]*i+a[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),a=Math.sin(e),l=this.x-t.x,c=this.y-t.y;return this.x=l*i-c*a+t.x,this.y=l*a+c*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xs{constructor(t=0,e=0,i=0,a=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=a}static slerpFlat(t,e,i,a,l,c,u){let d=i[a+0],f=i[a+1],g=i[a+2],_=i[a+3],v=l[c+0],M=l[c+1],T=l[c+2],w=l[c+3];if(u<=0){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u>=1){t[e+0]=v,t[e+1]=M,t[e+2]=T,t[e+3]=w;return}if(_!==w||d!==v||f!==M||g!==T){let x=d*v+f*M+g*T+_*w;x<0&&(v=-v,M=-M,T=-T,w=-w,x=-x);let m=1-u;if(x<.9995){const P=Math.acos(x),R=Math.sin(P);m=Math.sin(m*P)/R,u=Math.sin(u*P)/R,d=d*m+v*u,f=f*m+M*u,g=g*m+T*u,_=_*m+w*u}else{d=d*m+v*u,f=f*m+M*u,g=g*m+T*u,_=_*m+w*u;const P=1/Math.sqrt(d*d+f*f+g*g+_*_);d*=P,f*=P,g*=P,_*=P}}t[e]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_}static multiplyQuaternionsFlat(t,e,i,a,l,c){const u=i[a],d=i[a+1],f=i[a+2],g=i[a+3],_=l[c],v=l[c+1],M=l[c+2],T=l[c+3];return t[e]=u*T+g*_+d*M-f*v,t[e+1]=d*T+g*v+f*_-u*M,t[e+2]=f*T+g*M+u*v-d*_,t[e+3]=g*T-u*_-d*v-f*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,a){return this._x=t,this._y=e,this._z=i,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,a=t._y,l=t._z,c=t._order,u=Math.cos,d=Math.sin,f=u(i/2),g=u(a/2),_=u(l/2),v=d(i/2),M=d(a/2),T=d(l/2);switch(c){case"XYZ":this._x=v*g*_+f*M*T,this._y=f*M*_-v*g*T,this._z=f*g*T+v*M*_,this._w=f*g*_-v*M*T;break;case"YXZ":this._x=v*g*_+f*M*T,this._y=f*M*_-v*g*T,this._z=f*g*T-v*M*_,this._w=f*g*_+v*M*T;break;case"ZXY":this._x=v*g*_-f*M*T,this._y=f*M*_+v*g*T,this._z=f*g*T+v*M*_,this._w=f*g*_-v*M*T;break;case"ZYX":this._x=v*g*_-f*M*T,this._y=f*M*_+v*g*T,this._z=f*g*T-v*M*_,this._w=f*g*_+v*M*T;break;case"YZX":this._x=v*g*_+f*M*T,this._y=f*M*_+v*g*T,this._z=f*g*T-v*M*_,this._w=f*g*_-v*M*T;break;case"XZY":this._x=v*g*_-f*M*T,this._y=f*M*_-v*g*T,this._z=f*g*T+v*M*_,this._w=f*g*_+v*M*T;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,a=Math.sin(i);return this._x=t.x*a,this._y=t.y*a,this._z=t.z*a,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],a=e[4],l=e[8],c=e[1],u=e[5],d=e[9],f=e[2],g=e[6],_=e[10],v=i+u+_;if(v>0){const M=.5/Math.sqrt(v+1);this._w=.25/M,this._x=(g-d)*M,this._y=(l-f)*M,this._z=(c-a)*M}else if(i>u&&i>_){const M=2*Math.sqrt(1+i-u-_);this._w=(g-d)/M,this._x=.25*M,this._y=(a+c)/M,this._z=(l+f)/M}else if(u>_){const M=2*Math.sqrt(1+u-i-_);this._w=(l-f)/M,this._x=(a+c)/M,this._y=.25*M,this._z=(d+g)/M}else{const M=2*Math.sqrt(1+_-i-u);this._w=(c-a)/M,this._x=(l+f)/M,this._y=(d+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const a=Math.min(1,e/i);return this.slerp(t,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,a=t._y,l=t._z,c=t._w,u=e._x,d=e._y,f=e._z,g=e._w;return this._x=i*g+c*u+a*f-l*d,this._y=a*g+c*d+l*u-i*f,this._z=l*g+c*f+i*d-a*u,this._w=c*g-i*u-a*d-l*f,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let i=t._x,a=t._y,l=t._z,c=t._w,u=this.dot(t);u<0&&(i=-i,a=-a,l=-l,c=-c,u=-u);let d=1-e;if(u<.9995){const f=Math.acos(u),g=Math.sin(f);d=Math.sin(d*f)/g,e=Math.sin(e*f)/g,this._x=this._x*d+i*e,this._y=this._y*d+a*e,this._z=this._z*d+l*e,this._w=this._w*d+c*e,this._onChangeCallback()}else this._x=this._x*d+i*e,this._y=this._y*d+a*e,this._z=this._z*d+l*e,this._w=this._w*d+c*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),a=Math.sqrt(1-i),l=Math.sqrt(i);return this.set(a*Math.sin(t),a*Math.cos(t),l*Math.sin(e),l*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(t=0,e=0,i=0){W.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[3]*i+l[6]*a,this.y=l[1]*e+l[4]*i+l[7]*a,this.z=l[2]*e+l[5]*i+l[8]*a,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=t.elements,c=1/(l[3]*e+l[7]*i+l[11]*a+l[15]);return this.x=(l[0]*e+l[4]*i+l[8]*a+l[12])*c,this.y=(l[1]*e+l[5]*i+l[9]*a+l[13])*c,this.z=(l[2]*e+l[6]*i+l[10]*a+l[14])*c,this}applyQuaternion(t){const e=this.x,i=this.y,a=this.z,l=t.x,c=t.y,u=t.z,d=t.w,f=2*(c*a-u*i),g=2*(u*e-l*a),_=2*(l*i-c*e);return this.x=e+d*f+c*_-u*g,this.y=i+d*g+u*f-l*_,this.z=a+d*_+l*g-c*f,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,a=this.z,l=t.elements;return this.x=l[0]*e+l[4]*i+l[8]*a,this.y=l[1]*e+l[5]*i+l[9]*a,this.z=l[2]*e+l[6]*i+l[10]*a,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,a=t.y,l=t.z,c=e.x,u=e.y,d=e.z;return this.x=a*d-l*u,this.y=l*c-i*d,this.z=i*u-a*c,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,a=this.z-t.z;return e*e+i*i+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const a=Math.sin(e)*t;return this.x=a*Math.sin(i),this.y=Math.cos(e)*t,this.z=a*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),a=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=a,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new W,cc=new Xs;class ne{constructor(t,e,i,a,l,c,u,d,f){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,a,l,c,u,d,f)}set(t,e,i,a,l,c,u,d,f){const g=this.elements;return g[0]=t,g[1]=a,g[2]=u,g[3]=e,g[4]=l,g[5]=d,g[6]=i,g[7]=c,g[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,c=i[0],u=i[3],d=i[6],f=i[1],g=i[4],_=i[7],v=i[2],M=i[5],T=i[8],w=a[0],x=a[3],m=a[6],P=a[1],R=a[4],I=a[7],D=a[2],U=a[5],O=a[8];return l[0]=c*w+u*P+d*D,l[3]=c*x+u*R+d*U,l[6]=c*m+u*I+d*O,l[1]=f*w+g*P+_*D,l[4]=f*x+g*R+_*U,l[7]=f*m+g*I+_*O,l[2]=v*w+M*P+T*D,l[5]=v*x+M*R+T*U,l[8]=v*m+M*I+T*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],u=t[5],d=t[6],f=t[7],g=t[8];return e*c*g-e*u*f-i*l*g+i*u*d+a*l*f-a*c*d}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],u=t[5],d=t[6],f=t[7],g=t[8],_=g*c-u*f,v=u*d-g*l,M=f*l-c*d,T=e*_+i*v+a*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=_*w,t[1]=(a*f-g*i)*w,t[2]=(u*i-a*c)*w,t[3]=v*w,t[4]=(g*e-a*d)*w,t[5]=(a*l-u*e)*w,t[6]=M*w,t[7]=(i*d-f*e)*w,t[8]=(c*e-i*l)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,a,l,c,u){const d=Math.cos(l),f=Math.sin(l);return this.set(i*d,i*f,-i*(d*c+f*u)+c+t,-a*f,a*d,-a*(-f*c+d*u)+u+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<9;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new ne,hc=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uc=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ed(){const r={enabled:!0,workingColorSpace:hs,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===be&&(a.r=ei(a.r),a.g=ei(a.g),a.b=ei(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===be&&(a.r=as(a.r),a.g=as(a.g),a.b=as(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===fi?Gr:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Hs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Hs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return r.define({[hs]:{primaries:t,whitePoint:i,transfer:Gr,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gn},outputColorSpaceConfig:{drawingBufferColorSpace:gn}},[gn]:{primaries:t,whitePoint:i,transfer:be,toXYZ:hc,fromXYZ:uc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gn}}}),r}const pe=Ed();function ei(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function as(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Wi;class Td{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Wi===void 0&&(Wi=Xr("canvas")),Wi.width=t.width,Wi.height=t.height;const a=Wi.getContext("2d");t instanceof ImageData?a.putImageData(t,0,0):a.drawImage(t,0,0,t.width,t.height),i=Wi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const a=i.getImageData(0,0,t.width,t.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=ei(l[c]/255)*255;return i.putImageData(a,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ei(e[i]/255)*255):e[i]=ei(e[i]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wd=0;class hl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Ws(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?l.push(Aa(a[c].image)):l.push(Aa(a[c]))}else l=Aa(a);i.url=l}return e||(t.images[this.uuid]=i),i}}function Aa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Td.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}let Ad=0;const Ca=new W;class $e extends ps{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,i=Qn,a=Qn,l=Ye,c=Li,u=Cn,d=un,f=$e.DEFAULT_ANISOTROPY,g=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Ws(),this.name="",this.source=new hl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ca).x}get height(){return this.source.getSize(Ca).y}get depth(){return this.source.getSize(Ca).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}a&&i&&a.isVector2&&i.isVector2||a&&i&&a.isVector3&&i.isVector3||a&&i&&a.isMatrix3&&i.isMatrix3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case po:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case mo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case po:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case mo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=_h;$e.DEFAULT_ANISOTROPY=1;class Ie{constructor(t=0,e=0,i=0,a=1){Ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=a}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,a){return this.x=t,this.y=e,this.z=i,this.w=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,a=this.z,l=this.w,c=t.elements;return this.x=c[0]*e+c[4]*i+c[8]*a+c[12]*l,this.y=c[1]*e+c[5]*i+c[9]*a+c[13]*l,this.z=c[2]*e+c[6]*i+c[10]*a+c[14]*l,this.w=c[3]*e+c[7]*i+c[11]*a+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,a,l;const d=t.elements,f=d[0],g=d[4],_=d[8],v=d[1],M=d[5],T=d[9],w=d[2],x=d[6],m=d[10];if(Math.abs(g-v)<.01&&Math.abs(_-w)<.01&&Math.abs(T-x)<.01){if(Math.abs(g+v)<.1&&Math.abs(_+w)<.1&&Math.abs(T+x)<.1&&Math.abs(f+M+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const R=(f+1)/2,I=(M+1)/2,D=(m+1)/2,U=(g+v)/4,O=(_+w)/4,X=(T+x)/4;return R>I&&R>D?R<.01?(i=0,a=.707106781,l=.707106781):(i=Math.sqrt(R),a=U/i,l=O/i):I>D?I<.01?(i=.707106781,a=0,l=.707106781):(a=Math.sqrt(I),i=U/a,l=X/a):D<.01?(i=.707106781,a=.707106781,l=0):(l=Math.sqrt(D),i=O/l,a=X/l),this.set(i,a,l,e),this}let P=Math.sqrt((x-T)*(x-T)+(_-w)*(_-w)+(v-g)*(v-g));return Math.abs(P)<.001&&(P=1),this.x=(x-T)/P,this.y=(_-w)/P,this.z=(v-g)/P,this.w=Math.acos((f+M+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ce(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cd extends ps{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e);const a={width:t,height:e,depth:i.depth},l=new $e(a);this.textures=[];const c=i.count;for(let u=0;u<c;u++)this.textures[u]=l.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const e={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=t,this.textures[a].image.height=e,this.textures[a].image.depth=i,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const a=Object.assign({},t.textures[e].image);this.textures[e].source=new hl(a)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zn extends Cd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Th extends $e{constructor(t=null,e=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pd extends $e{constructor(t=null,e=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:a},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(En.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(En.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const l=i.getAttribute("position");if(e===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,u=l.count;c<u;c++)t.isMesh===!0?t.getVertexPosition(c,En):En.fromBufferAttribute(l,c),En.applyMatrix4(t.matrixWorld),this.expandByPoint(En);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),pr.copy(i.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}const a=t.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),mr.subVectors(this.max,As),Xi.subVectors(t.a,As),Zi.subVectors(t.b,As),qi.subVectors(t.c,As),oi.subVectors(Zi,Xi),li.subVectors(qi,Zi),Si.subVectors(Xi,qi);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Si.z,Si.y,oi.z,0,-oi.x,li.z,0,-li.x,Si.z,0,-Si.x,-oi.y,oi.x,0,-li.y,li.x,0,-Si.y,Si.x,0];return!Pa(e,Xi,Zi,qi,mr)||(e=[1,0,0,0,1,0,0,0,1],!Pa(e,Xi,Zi,qi,mr))?!1:(_r.crossVectors(oi,li),e=[_r.x,_r.y,_r.z],Pa(e,Xi,Zi,qi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,En).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(En).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const qn=[new W,new W,new W,new W,new W,new W,new W,new W],En=new W,pr=new Zs,Xi=new W,Zi=new W,qi=new W,oi=new W,li=new W,Si=new W,As=new W,mr=new W,_r=new W,bi=new W;function Pa(r,t,e,i,a){for(let l=0,c=r.length-3;l<=c;l+=3){bi.fromArray(r,l);const u=a.x*Math.abs(bi.x)+a.y*Math.abs(bi.y)+a.z*Math.abs(bi.z),d=t.dot(bi),f=e.dot(bi),g=i.dot(bi);if(Math.max(-Math.max(d,f,g),Math.min(d,f,g))>u)return!1}return!0}const Rd=new Zs,Cs=new W,Ra=new W;class Yr{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Rd.setFromPoints(t).getCenter(i);let a=0;for(let l=0,c=t.length;l<c;l++)a=Math.max(a,i.distanceToSquared(t[l]));return this.radius=Math.sqrt(a),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Cs.subVectors(t,this.center);const e=Cs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),a=(i-this.radius)*.5;this.center.addScaledVector(Cs,a/i),this.radius+=a}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Cs.copy(t.center).add(Ra)),this.expandByPoint(Cs.copy(t.center).sub(Ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Yn=new W,La=new W,gr=new W,ci=new W,Ia=new W,vr=new W,Da=new W;class wh{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,a){La.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),ci.copy(this.origin).sub(La);const l=t.distanceTo(e)*.5,c=-this.direction.dot(gr),u=ci.dot(this.direction),d=-ci.dot(gr),f=ci.lengthSq(),g=Math.abs(1-c*c);let _,v,M,T;if(g>0)if(_=c*d-u,v=c*u-d,T=l*g,_>=0)if(v>=-T)if(v<=T){const w=1/g;_*=w,v*=w,M=_*(_+c*v+2*u)+v*(c*_+v+2*d)+f}else v=l,_=Math.max(0,-(c*v+u)),M=-_*_+v*(v+2*d)+f;else v=-l,_=Math.max(0,-(c*v+u)),M=-_*_+v*(v+2*d)+f;else v<=-T?(_=Math.max(0,-(-c*l+u)),v=_>0?-l:Math.min(Math.max(-l,-d),l),M=-_*_+v*(v+2*d)+f):v<=T?(_=0,v=Math.min(Math.max(-l,-d),l),M=v*(v+2*d)+f):(_=Math.max(0,-(c*l+u)),v=_>0?l:Math.min(Math.max(-l,-d),l),M=-_*_+v*(v+2*d)+f);else v=c>0?-l:l,_=Math.max(0,-(c*v+u)),M=-_*_+v*(v+2*d)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,_),a&&a.copy(La).addScaledVector(gr,v),M}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const i=Yn.dot(this.direction),a=Yn.dot(Yn)-i*i,l=t.radius*t.radius;if(a>l)return null;const c=Math.sqrt(l-a),u=i-c,d=i+c;return d<0?null:u<0?this.at(d,e):this.at(u,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,a,l,c,u,d;const f=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,v=this.origin;return f>=0?(i=(t.min.x-v.x)*f,a=(t.max.x-v.x)*f):(i=(t.max.x-v.x)*f,a=(t.min.x-v.x)*f),g>=0?(l=(t.min.y-v.y)*g,c=(t.max.y-v.y)*g):(l=(t.max.y-v.y)*g,c=(t.min.y-v.y)*g),i>c||l>a||((l>i||isNaN(i))&&(i=l),(c<a||isNaN(a))&&(a=c),_>=0?(u=(t.min.z-v.z)*_,d=(t.max.z-v.z)*_):(u=(t.max.z-v.z)*_,d=(t.min.z-v.z)*_),i>d||u>a)||((u>i||i!==i)&&(i=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(i>=0?i:a,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,i,a,l){Ia.subVectors(e,t),vr.subVectors(i,t),Da.crossVectors(Ia,vr);let c=this.direction.dot(Da),u;if(c>0){if(a)return null;u=1}else if(c<0)u=-1,c=-c;else return null;ci.subVectors(this.origin,t);const d=u*this.direction.dot(vr.crossVectors(ci,vr));if(d<0)return null;const f=u*this.direction.dot(Ia.cross(ci));if(f<0||d+f>c)return null;const g=-u*ci.dot(Da);return g<0?null:this.at(g/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Re{constructor(t,e,i,a,l,c,u,d,f,g,_,v,M,T,w,x){Re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,a,l,c,u,d,f,g,_,v,M,T,w,x)}set(t,e,i,a,l,c,u,d,f,g,_,v,M,T,w,x){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=a,m[1]=l,m[5]=c,m[9]=u,m[13]=d,m[2]=f,m[6]=g,m[10]=_,m[14]=v,m[3]=M,m[7]=T,m[11]=w,m[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Re().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const e=this.elements,i=t.elements,a=1/Yi.setFromMatrixColumn(t,0).length(),l=1/Yi.setFromMatrixColumn(t,1).length(),c=1/Yi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*a,e[1]=i[1]*a,e[2]=i[2]*a,e[3]=0,e[4]=i[4]*l,e[5]=i[5]*l,e[6]=i[6]*l,e[7]=0,e[8]=i[8]*c,e[9]=i[9]*c,e[10]=i[10]*c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,a=t.y,l=t.z,c=Math.cos(i),u=Math.sin(i),d=Math.cos(a),f=Math.sin(a),g=Math.cos(l),_=Math.sin(l);if(t.order==="XYZ"){const v=c*g,M=c*_,T=u*g,w=u*_;e[0]=d*g,e[4]=-d*_,e[8]=f,e[1]=M+T*f,e[5]=v-w*f,e[9]=-u*d,e[2]=w-v*f,e[6]=T+M*f,e[10]=c*d}else if(t.order==="YXZ"){const v=d*g,M=d*_,T=f*g,w=f*_;e[0]=v+w*u,e[4]=T*u-M,e[8]=c*f,e[1]=c*_,e[5]=c*g,e[9]=-u,e[2]=M*u-T,e[6]=w+v*u,e[10]=c*d}else if(t.order==="ZXY"){const v=d*g,M=d*_,T=f*g,w=f*_;e[0]=v-w*u,e[4]=-c*_,e[8]=T+M*u,e[1]=M+T*u,e[5]=c*g,e[9]=w-v*u,e[2]=-c*f,e[6]=u,e[10]=c*d}else if(t.order==="ZYX"){const v=c*g,M=c*_,T=u*g,w=u*_;e[0]=d*g,e[4]=T*f-M,e[8]=v*f+w,e[1]=d*_,e[5]=w*f+v,e[9]=M*f-T,e[2]=-f,e[6]=u*d,e[10]=c*d}else if(t.order==="YZX"){const v=c*d,M=c*f,T=u*d,w=u*f;e[0]=d*g,e[4]=w-v*_,e[8]=T*_+M,e[1]=_,e[5]=c*g,e[9]=-u*g,e[2]=-f*g,e[6]=M*_+T,e[10]=v-w*_}else if(t.order==="XZY"){const v=c*d,M=c*f,T=u*d,w=u*f;e[0]=d*g,e[4]=-_,e[8]=f*g,e[1]=v*_+w,e[5]=c*g,e[9]=M*_-T,e[2]=T*_-M,e[6]=u*g,e[10]=w*_+v}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ld,t,Id)}lookAt(t,e,i){const a=this.elements;return ln.subVectors(t,e),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),hi.crossVectors(i,ln),hi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),hi.crossVectors(i,ln)),hi.normalize(),xr.crossVectors(ln,hi),a[0]=hi.x,a[4]=xr.x,a[8]=ln.x,a[1]=hi.y,a[5]=xr.y,a[9]=ln.y,a[2]=hi.z,a[6]=xr.z,a[10]=ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,a=e.elements,l=this.elements,c=i[0],u=i[4],d=i[8],f=i[12],g=i[1],_=i[5],v=i[9],M=i[13],T=i[2],w=i[6],x=i[10],m=i[14],P=i[3],R=i[7],I=i[11],D=i[15],U=a[0],O=a[4],X=a[8],b=a[12],A=a[1],B=a[5],Z=a[9],j=a[13],it=a[2],rt=a[6],tt=a[10],K=a[14],J=a[3],bt=a[7],st=a[11],dt=a[15];return l[0]=c*U+u*A+d*it+f*J,l[4]=c*O+u*B+d*rt+f*bt,l[8]=c*X+u*Z+d*tt+f*st,l[12]=c*b+u*j+d*K+f*dt,l[1]=g*U+_*A+v*it+M*J,l[5]=g*O+_*B+v*rt+M*bt,l[9]=g*X+_*Z+v*tt+M*st,l[13]=g*b+_*j+v*K+M*dt,l[2]=T*U+w*A+x*it+m*J,l[6]=T*O+w*B+x*rt+m*bt,l[10]=T*X+w*Z+x*tt+m*st,l[14]=T*b+w*j+x*K+m*dt,l[3]=P*U+R*A+I*it+D*J,l[7]=P*O+R*B+I*rt+D*bt,l[11]=P*X+R*Z+I*tt+D*st,l[15]=P*b+R*j+I*K+D*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],a=t[8],l=t[12],c=t[1],u=t[5],d=t[9],f=t[13],g=t[2],_=t[6],v=t[10],M=t[14],T=t[3],w=t[7],x=t[11],m=t[15],P=d*M-f*v,R=u*M-f*_,I=u*v-d*_,D=c*M-f*g,U=c*v-d*g,O=c*_-u*g;return e*(w*P-x*R+m*I)-i*(T*P-x*D+m*U)+a*(T*R-w*D+m*O)-l*(T*I-w*U+x*O)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const a=this.elements;return t.isVector3?(a[12]=t.x,a[13]=t.y,a[14]=t.z):(a[12]=t,a[13]=e,a[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],a=t[2],l=t[3],c=t[4],u=t[5],d=t[6],f=t[7],g=t[8],_=t[9],v=t[10],M=t[11],T=t[12],w=t[13],x=t[14],m=t[15],P=_*x*f-w*v*f+w*d*M-u*x*M-_*d*m+u*v*m,R=T*v*f-g*x*f-T*d*M+c*x*M+g*d*m-c*v*m,I=g*w*f-T*_*f+T*u*M-c*w*M-g*u*m+c*_*m,D=T*_*d-g*w*d-T*u*v+c*w*v+g*u*x-c*_*x,U=e*P+i*R+a*I+l*D;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/U;return t[0]=P*O,t[1]=(w*v*l-_*x*l-w*a*M+i*x*M+_*a*m-i*v*m)*O,t[2]=(u*x*l-w*d*l+w*a*f-i*x*f-u*a*m+i*d*m)*O,t[3]=(_*d*l-u*v*l-_*a*f+i*v*f+u*a*M-i*d*M)*O,t[4]=R*O,t[5]=(g*x*l-T*v*l+T*a*M-e*x*M-g*a*m+e*v*m)*O,t[6]=(T*d*l-c*x*l-T*a*f+e*x*f+c*a*m-e*d*m)*O,t[7]=(c*v*l-g*d*l+g*a*f-e*v*f-c*a*M+e*d*M)*O,t[8]=I*O,t[9]=(T*_*l-g*w*l-T*i*M+e*w*M+g*i*m-e*_*m)*O,t[10]=(c*w*l-T*u*l+T*i*f-e*w*f-c*i*m+e*u*m)*O,t[11]=(g*u*l-c*_*l-g*i*f+e*_*f+c*i*M-e*u*M)*O,t[12]=D*O,t[13]=(g*w*a-T*_*a+T*i*v-e*w*v-g*i*x+e*_*x)*O,t[14]=(T*u*a-c*w*a-T*i*d+e*w*d+c*i*x-e*u*x)*O,t[15]=(c*_*a-g*u*a+g*i*d-e*_*d-c*i*v+e*u*v)*O,this}scale(t){const e=this.elements,i=t.x,a=t.y,l=t.z;return e[0]*=i,e[4]*=a,e[8]*=l,e[1]*=i,e[5]*=a,e[9]*=l,e[2]*=i,e[6]*=a,e[10]*=l,e[3]*=i,e[7]*=a,e[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],a=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,a))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),a=Math.sin(e),l=1-i,c=t.x,u=t.y,d=t.z,f=l*c,g=l*u;return this.set(f*c+i,f*u-a*d,f*d+a*u,0,f*u+a*d,g*u+i,g*d-a*c,0,f*d-a*u,g*d+a*c,l*d*d+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,a,l,c){return this.set(1,i,l,0,t,1,c,0,e,a,1,0,0,0,0,1),this}compose(t,e,i){const a=this.elements,l=e._x,c=e._y,u=e._z,d=e._w,f=l+l,g=c+c,_=u+u,v=l*f,M=l*g,T=l*_,w=c*g,x=c*_,m=u*_,P=d*f,R=d*g,I=d*_,D=i.x,U=i.y,O=i.z;return a[0]=(1-(w+m))*D,a[1]=(M+I)*D,a[2]=(T-R)*D,a[3]=0,a[4]=(M-I)*U,a[5]=(1-(v+m))*U,a[6]=(x+P)*U,a[7]=0,a[8]=(T+R)*O,a[9]=(x-P)*O,a[10]=(1-(v+w))*O,a[11]=0,a[12]=t.x,a[13]=t.y,a[14]=t.z,a[15]=1,this}decompose(t,e,i){const a=this.elements;if(t.x=a[12],t.y=a[13],t.z=a[14],this.determinant()===0)return i.set(1,1,1),e.identity(),this;let l=Yi.set(a[0],a[1],a[2]).length();const c=Yi.set(a[4],a[5],a[6]).length(),u=Yi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),Tn.copy(this);const f=1/l,g=1/c,_=1/u;return Tn.elements[0]*=f,Tn.elements[1]*=f,Tn.elements[2]*=f,Tn.elements[4]*=g,Tn.elements[5]*=g,Tn.elements[6]*=g,Tn.elements[8]*=_,Tn.elements[9]*=_,Tn.elements[10]*=_,e.setFromRotationMatrix(Tn),i.x=l,i.y=c,i.z=u,this}makePerspective(t,e,i,a,l,c,u=On,d=!1){const f=this.elements,g=2*l/(e-t),_=2*l/(i-a),v=(e+t)/(e-t),M=(i+a)/(i-a);let T,w;if(d)T=l/(c-l),w=c*l/(c-l);else if(u===On)T=-(c+l)/(c-l),w=-2*c*l/(c-l);else if(u===Wr)T=-c/(c-l),w=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return f[0]=g,f[4]=0,f[8]=v,f[12]=0,f[1]=0,f[5]=_,f[9]=M,f[13]=0,f[2]=0,f[6]=0,f[10]=T,f[14]=w,f[3]=0,f[7]=0,f[11]=-1,f[15]=0,this}makeOrthographic(t,e,i,a,l,c,u=On,d=!1){const f=this.elements,g=2/(e-t),_=2/(i-a),v=-(e+t)/(e-t),M=-(i+a)/(i-a);let T,w;if(d)T=1/(c-l),w=c/(c-l);else if(u===On)T=-2/(c-l),w=-(c+l)/(c-l);else if(u===Wr)T=-1/(c-l),w=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return f[0]=g,f[4]=0,f[8]=0,f[12]=v,f[1]=0,f[5]=_,f[9]=0,f[13]=M,f[2]=0,f[6]=0,f[10]=T,f[14]=w,f[3]=0,f[7]=0,f[11]=0,f[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let a=0;a<16;a++)if(e[a]!==i[a])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Yi=new W,Tn=new Re,Ld=new W(0,0,0),Id=new W(1,1,1),hi=new W,xr=new W,ln=new W,dc=new Re,fc=new Xs;class si{constructor(t=0,e=0,i=0,a=si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=a}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,a=this._order){return this._x=t,this._y=e,this._z=i,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const a=t.elements,l=a[0],c=a[4],u=a[8],d=a[1],f=a[5],g=a[9],_=a[2],v=a[6],M=a[10];switch(e){case"XYZ":this._y=Math.asin(ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(u,M),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(ce(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-c,f)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-ce(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,M),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-c,f));break;case"YZX":this._z=Math.asin(ce(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,f),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(u,M));break;case"XZY":this._z=Math.asin(-ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(u,l)):(this._x=Math.atan2(-g,M),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return dc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fc.setFromEuler(this),this.setFromQuaternion(fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dd=0;const pc=new W,ji=new Xs,jn=new Re,yr=new W,Ps=new W,Nd=new W,Ud=new Xs,mc=new W(1,0,0),_c=new W(0,1,0),gc=new W(0,0,1),vc={type:"added"},Fd={type:"removed"},Ki={type:"childadded",child:null},Na={type:"childremoved",child:null};class Qe extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qe.DEFAULT_UP.clone();const t=new W,e=new si,i=new Xs,a=new W(1,1,1);function l(){i.setFromEuler(e,!1)}function c(){e.setFromQuaternion(i,void 0,!1)}e._onChange(l),i._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Re},normalMatrix:{value:new ne}}),this.matrix=new Re,this.matrixWorld=new Re,this.matrixAutoUpdate=Qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(mc,t)}rotateY(t){return this.rotateOnAxis(_c,t)}rotateZ(t){return this.rotateOnAxis(gc,t)}translateOnAxis(t,e){return pc.copy(t).applyQuaternion(this.quaternion),this.position.add(pc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mc,t)}translateY(t){return this.translateOnAxis(_c,t)}translateZ(t){return this.translateOnAxis(gc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yr.copy(t):yr.set(t,e,i);const a=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Ps,yr,this.up):jn.lookAt(yr,Ps,this.up),this.quaternion.setFromRotationMatrix(jn),a&&(jn.extractRotation(a.matrixWorld),ji.setFromRotationMatrix(jn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),Na.child=t,this.dispatchEvent(Na),Na.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vc),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,a=this.children.length;i<a;i++){const c=this.children[i].getObjectByProperty(t,e);if(c!==void 0)return c}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,Nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,a=e.length;i<a;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(u=>({...u})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(t),a.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(t)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(t.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,g=d.length;f<g;f++){const _=d[f];l(t.shapes,_)}else l(t.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(l(t.materials,this.material[d]));a.material=u}else a.material=l(t.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(t).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(l(t.animations,d))}}if(e){const u=c(t.geometries),d=c(t.materials),f=c(t.textures),g=c(t.images),_=c(t.shapes),v=c(t.skeletons),M=c(t.animations),T=c(t.nodes);u.length>0&&(i.geometries=u),d.length>0&&(i.materials=d),f.length>0&&(i.textures=f),g.length>0&&(i.images=g),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),M.length>0&&(i.animations=M),T.length>0&&(i.nodes=T)}return i.object=a,i;function c(u){const d=[];for(const f in u){const g=u[f];delete g.metadata,d.push(g)}return d}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const a=t.children[i];this.add(a.clone())}return this}}Qe.DEFAULT_UP=new W(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new W,Kn=new W,Ua=new W,Jn=new W,Ji=new W,$i=new W,xc=new W,Fa=new W,Oa=new W,Ba=new W,za=new Ie,ka=new Ie,Va=new Ie;class An{constructor(t=new W,e=new W,i=new W){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,a){a.subVectors(i,e),wn.subVectors(t,e),a.cross(wn);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(t,e,i,a,l){wn.subVectors(a,e),Kn.subVectors(i,e),Ua.subVectors(t,e);const c=wn.dot(wn),u=wn.dot(Kn),d=wn.dot(Ua),f=Kn.dot(Kn),g=Kn.dot(Ua),_=c*f-u*u;if(_===0)return l.set(0,0,0),null;const v=1/_,M=(f*d-u*g)*v,T=(c*g-u*d)*v;return l.set(1-M-T,T,M)}static containsPoint(t,e,i,a){return this.getBarycoord(t,e,i,a,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(t,e,i,a,l,c,u,d){return this.getBarycoord(t,e,i,a,Jn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Jn.x),d.addScaledVector(c,Jn.y),d.addScaledVector(u,Jn.z),d)}static getInterpolatedAttribute(t,e,i,a,l,c){return za.setScalar(0),ka.setScalar(0),Va.setScalar(0),za.fromBufferAttribute(t,e),ka.fromBufferAttribute(t,i),Va.fromBufferAttribute(t,a),c.setScalar(0),c.addScaledVector(za,l.x),c.addScaledVector(ka,l.y),c.addScaledVector(Va,l.z),c}static isFrontFacing(t,e,i,a){return wn.subVectors(i,e),Kn.subVectors(t,e),wn.cross(Kn).dot(a)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,a){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[a]),this}setFromAttributeAndIndices(t,e,i,a){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,a),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),wn.cross(Kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return An.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return An.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,a,l){return An.getInterpolation(t,this.a,this.b,this.c,e,i,a,l)}containsPoint(t){return An.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return An.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,a=this.b,l=this.c;let c,u;Ji.subVectors(a,i),$i.subVectors(l,i),Fa.subVectors(t,i);const d=Ji.dot(Fa),f=$i.dot(Fa);if(d<=0&&f<=0)return e.copy(i);Oa.subVectors(t,a);const g=Ji.dot(Oa),_=$i.dot(Oa);if(g>=0&&_<=g)return e.copy(a);const v=d*_-g*f;if(v<=0&&d>=0&&g<=0)return c=d/(d-g),e.copy(i).addScaledVector(Ji,c);Ba.subVectors(t,l);const M=Ji.dot(Ba),T=$i.dot(Ba);if(T>=0&&M<=T)return e.copy(l);const w=M*f-d*T;if(w<=0&&f>=0&&T<=0)return u=f/(f-T),e.copy(i).addScaledVector($i,u);const x=g*T-M*_;if(x<=0&&_-g>=0&&M-T>=0)return xc.subVectors(l,a),u=(_-g)/(_-g+(M-T)),e.copy(a).addScaledVector(xc,u);const m=1/(x+w+v);return c=w*m,u=v*m,e.copy(i).addScaledVector(Ji,c).addScaledVector($i,u)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function Ha(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Me{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const a=t;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,a=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.colorSpaceToWorking(this,a),this}setHSL(t,e,i,a=pe.workingColorSpace){if(t=bd(t,1),e=ce(e,0,1),i=ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const l=i<=.5?i*(1+e):i+e-i*e,c=2*i-l;this.r=Ha(c,l,t+1/3),this.g=Ha(c,l,t),this.b=Ha(c,l,t-1/3)}return pe.colorSpaceToWorking(this,a),this}setStyle(t,e=gn){function i(l){l!==void 0&&parseFloat(l)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,e);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,e);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return i(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,e);if(c===6)return this.setHex(parseInt(l,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gn){const i=Ch[t.toLowerCase()];return i!==void 0?this.setHex(i,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ei(t.r),this.g=ei(t.g),this.b=ei(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gn){return pe.workingToColorSpace(qe.copy(this),t),Math.round(ce(qe.r*255,0,255))*65536+Math.round(ce(qe.g*255,0,255))*256+Math.round(ce(qe.b*255,0,255))}getHexString(t=gn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(qe.copy(this),e);const i=qe.r,a=qe.g,l=qe.b,c=Math.max(i,a,l),u=Math.min(i,a,l);let d,f;const g=(u+c)/2;if(u===c)d=0,f=0;else{const _=c-u;switch(f=g<=.5?_/(c+u):_/(2-c-u),c){case i:d=(a-l)/_+(a<l?6:0);break;case a:d=(l-i)/_+2;break;case l:d=(i-a)/_+4;break}d/=6}return t.h=d,t.s=f,t.l=g,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=gn){pe.workingToColorSpace(qe.copy(this),t);const e=qe.r,i=qe.g,a=qe.b;return t!==gn?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(a*255)})`}offsetHSL(t,e,i){return this.getHSL(ui),this.setHSL(ui.h+t,ui.s+e,ui.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ui),t.getHSL(Mr);const i=Ea(ui.h,Mr.h,e),a=Ea(ui.s,Mr.s,e),l=Ea(ui.l,Mr.l,e);return this.setHSL(i,a,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,a=this.b,l=t.elements;return this.r=l[0]*e+l[3]*i+l[6]*a,this.g=l[1]*e+l[4]*i+l[7]*a,this.b=l[2]*e+l[5]*i+l[8]*a,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Me;Me.NAMES=Ch;let Od=0;class qs extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Ws(),this.name="",this.type="Material",this.blending=rs,this.side=mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=no,this.blendDst=io,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gi,this.stencilZFail=Gi,this.stencilZPass=Gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}const a=this[e];if(a===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(i):a&&a.isVector3&&i&&i.isVector3?a.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==mi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==no&&(i.blendSrc=this.blendSrc),this.blendDst!==io&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function a(l){const c=[];for(const u in l){const d=l[u];delete d.metadata,c.push(d)}return c}if(e){const l=a(t.textures),c=a(t.images);l.length>0&&(i.textures=l),c.length>0&&(i.images=c)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const a=e.length;i=new Array(a);for(let l=0;l!==a;++l)i[l]=e[l].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class zs extends qs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new W,Sr=new Se;let Bd=0;class Pn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=rc,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[t+a]=e.array[i+a];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ws(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=an(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=an(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,a){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array),a=an(a,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this}setXYZW(t,e,i,a,l){return t*=this.itemSize,this.normalized&&(e=an(e,this.array),i=an(i,this.array),a=an(a,this.array),l=an(l,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=a,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rc&&(t.usage=this.usage),t}}class Ph extends Pn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Rh extends Pn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class tn extends Pn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let zd=0;const _n=new Re,Ga=new Qe,Qi=new W,cn=new Zs,Rs=new Zs,Ge=new W;class dn extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Eh(t)?Rh:Ph)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const l=new ne().getNormalMatrix(t);i.applyNormalMatrix(l),i.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(t),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,i){return _n.makeTranslation(t,e,i),this.applyMatrix4(_n),this}scale(t,e,i){return _n.makeScale(t,e,i),this.applyMatrix4(_n),this}lookAt(t){return Ga.lookAt(t),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];i.push(c.x,c.y,c.z||0)}this.setAttribute("position",new tn(i,3))}else{const i=Math.min(t.length,e.count);for(let a=0;a<i;a++){const l=t[a];e.setXYZ(a,l.x,l.y,l.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,a=e.length;i<a;i++){const l=e[i];cn.setFromBufferAttribute(l),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(t),e)for(let l=0,c=e.length;l<c;l++){const u=e[l];Rs.setFromBufferAttribute(u),this.morphTargetsRelative?(Ge.addVectors(cn.min,Rs.min),cn.expandByPoint(Ge),Ge.addVectors(cn.max,Rs.max),cn.expandByPoint(Ge)):(cn.expandByPoint(Rs.min),cn.expandByPoint(Rs.max))}cn.getCenter(i);let a=0;for(let l=0,c=t.count;l<c;l++)Ge.fromBufferAttribute(t,l),a=Math.max(a,i.distanceToSquared(Ge));if(e)for(let l=0,c=e.length;l<c;l++){const u=e[l],d=this.morphTargetsRelative;for(let f=0,g=u.count;f<g;f++)Ge.fromBufferAttribute(u,f),d&&(Qi.fromBufferAttribute(t,f),Ge.add(Qi)),a=Math.max(a,i.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,a=e.normal,l=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pn(new Float32Array(4*i.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let X=0;X<i.count;X++)u[X]=new W,d[X]=new W;const f=new W,g=new W,_=new W,v=new Se,M=new Se,T=new Se,w=new W,x=new W;function m(X,b,A){f.fromBufferAttribute(i,X),g.fromBufferAttribute(i,b),_.fromBufferAttribute(i,A),v.fromBufferAttribute(l,X),M.fromBufferAttribute(l,b),T.fromBufferAttribute(l,A),g.sub(f),_.sub(f),M.sub(v),T.sub(v);const B=1/(M.x*T.y-T.x*M.y);isFinite(B)&&(w.copy(g).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(B),x.copy(_).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(B),u[X].add(w),u[b].add(w),u[A].add(w),d[X].add(x),d[b].add(x),d[A].add(x))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let X=0,b=P.length;X<b;++X){const A=P[X],B=A.start,Z=A.count;for(let j=B,it=B+Z;j<it;j+=3)m(t.getX(j+0),t.getX(j+1),t.getX(j+2))}const R=new W,I=new W,D=new W,U=new W;function O(X){D.fromBufferAttribute(a,X),U.copy(D);const b=u[X];R.copy(b),R.sub(D.multiplyScalar(D.dot(b))).normalize(),I.crossVectors(U,b);const B=I.dot(d[X])<0?-1:1;c.setXYZW(X,R.x,R.y,R.z,B)}for(let X=0,b=P.length;X<b;++X){const A=P[X],B=A.start,Z=A.count;for(let j=B,it=B+Z;j<it;j+=3)O(t.getX(j+0)),O(t.getX(j+1)),O(t.getX(j+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Pn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let v=0,M=i.count;v<M;v++)i.setXYZ(v,0,0,0);const a=new W,l=new W,c=new W,u=new W,d=new W,f=new W,g=new W,_=new W;if(t)for(let v=0,M=t.count;v<M;v+=3){const T=t.getX(v+0),w=t.getX(v+1),x=t.getX(v+2);a.fromBufferAttribute(e,T),l.fromBufferAttribute(e,w),c.fromBufferAttribute(e,x),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),u.fromBufferAttribute(i,T),d.fromBufferAttribute(i,w),f.fromBufferAttribute(i,x),u.add(g),d.add(g),f.add(g),i.setXYZ(T,u.x,u.y,u.z),i.setXYZ(w,d.x,d.y,d.z),i.setXYZ(x,f.x,f.y,f.z)}else for(let v=0,M=e.count;v<M;v+=3)a.fromBufferAttribute(e,v+0),l.fromBufferAttribute(e,v+1),c.fromBufferAttribute(e,v+2),g.subVectors(c,l),_.subVectors(a,l),g.cross(_),i.setXYZ(v+0,g.x,g.y,g.z),i.setXYZ(v+1,g.x,g.y,g.z),i.setXYZ(v+2,g.x,g.y,g.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(u,d){const f=u.array,g=u.itemSize,_=u.normalized,v=new f.constructor(d.length*g);let M=0,T=0;for(let w=0,x=d.length;w<x;w++){u.isInterleavedBufferAttribute?M=d[w]*u.data.stride+u.offset:M=d[w]*g;for(let m=0;m<g;m++)v[T++]=f[M++]}return new Pn(v,g,_)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new dn,i=this.index.array,a=this.attributes;for(const u in a){const d=a[u],f=t(d,i);e.setAttribute(u,f)}const l=this.morphAttributes;for(const u in l){const d=[],f=l[u];for(let g=0,_=f.length;g<_;g++){const v=f[g],M=t(v,i);d.push(M)}e.morphAttributes[u]=d}e.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const f=c[u];e.addGroup(f.start,f.count,f.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(t[f]=d[f]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const d in i){const f=i[d];t.data.attributes[d]=f.toJSON(t.data)}const a={};let l=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],g=[];for(let _=0,v=f.length;_<v;_++){const M=f[_];g.push(M.toJSON(t.data))}g.length>0&&(a[d]=g,l=!0)}l&&(t.data.morphAttributes=a,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(t.data.boundingSphere=u.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const a=t.attributes;for(const f in a){const g=a[f];this.setAttribute(f,g.clone(e))}const l=t.morphAttributes;for(const f in l){const g=[],_=l[f];for(let v=0,M=_.length;v<M;v++)g.push(_[v].clone(e));this.morphAttributes[f]=g}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let f=0,g=c.length;f<g;f++){const _=c[f];this.addGroup(_.start,_.count,_.materialIndex)}const u=t.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=t.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yc=new Re,Ei=new wh,br=new Yr,Mc=new W,Er=new W,Tr=new W,wr=new W,Wa=new W,Ar=new W,Sc=new W,Cr=new W;class vn extends Qe{constructor(t=new dn,e=new zs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}getVertexPosition(t,e){const i=this.geometry,a=i.attributes.position,l=i.morphAttributes.position,c=i.morphTargetsRelative;e.fromBufferAttribute(a,t);const u=this.morphTargetInfluences;if(l&&u){Ar.set(0,0,0);for(let d=0,f=l.length;d<f;d++){const g=u[d],_=l[d];g!==0&&(Wa.fromBufferAttribute(_,t),c?Ar.addScaledVector(Wa,g):Ar.addScaledVector(Wa.sub(e),g))}e.add(Ar)}return e}raycast(t,e){const i=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),br.copy(i.boundingSphere),br.applyMatrix4(l),Ei.copy(t.ray).recast(t.near),!(br.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(br,Mc)===null||Ei.origin.distanceToSquared(Mc)>(t.far-t.near)**2))&&(yc.copy(l).invert(),Ei.copy(t.ray).applyMatrix4(yc),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,i){let a;const l=this.geometry,c=this.material,u=l.index,d=l.attributes.position,f=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,v=l.groups,M=l.drawRange;if(u!==null)if(Array.isArray(c))for(let T=0,w=v.length;T<w;T++){const x=v[T],m=c[x.materialIndex],P=Math.max(x.start,M.start),R=Math.min(u.count,Math.min(x.start+x.count,M.start+M.count));for(let I=P,D=R;I<D;I+=3){const U=u.getX(I),O=u.getX(I+1),X=u.getX(I+2);a=Pr(this,m,t,i,f,g,_,U,O,X),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=x.materialIndex,e.push(a))}}else{const T=Math.max(0,M.start),w=Math.min(u.count,M.start+M.count);for(let x=T,m=w;x<m;x+=3){const P=u.getX(x),R=u.getX(x+1),I=u.getX(x+2);a=Pr(this,c,t,i,f,g,_,P,R,I),a&&(a.faceIndex=Math.floor(x/3),e.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let T=0,w=v.length;T<w;T++){const x=v[T],m=c[x.materialIndex],P=Math.max(x.start,M.start),R=Math.min(d.count,Math.min(x.start+x.count,M.start+M.count));for(let I=P,D=R;I<D;I+=3){const U=I,O=I+1,X=I+2;a=Pr(this,m,t,i,f,g,_,U,O,X),a&&(a.faceIndex=Math.floor(I/3),a.face.materialIndex=x.materialIndex,e.push(a))}}else{const T=Math.max(0,M.start),w=Math.min(d.count,M.start+M.count);for(let x=T,m=w;x<m;x+=3){const P=x,R=x+1,I=x+2;a=Pr(this,c,t,i,f,g,_,P,R,I),a&&(a.faceIndex=Math.floor(x/3),e.push(a))}}}}function kd(r,t,e,i,a,l,c,u){let d;if(t.side===on?d=i.intersectTriangle(c,l,a,!0,u):d=i.intersectTriangle(a,l,c,t.side===mi,u),d===null)return null;Cr.copy(u),Cr.applyMatrix4(r.matrixWorld);const f=e.ray.origin.distanceTo(Cr);return f<e.near||f>e.far?null:{distance:f,point:Cr.clone(),object:r}}function Pr(r,t,e,i,a,l,c,u,d,f){r.getVertexPosition(u,Er),r.getVertexPosition(d,Tr),r.getVertexPosition(f,wr);const g=kd(r,t,e,i,Er,Tr,wr,Sc);if(g){const _=new W;An.getBarycoord(Sc,Er,Tr,wr,_),a&&(g.uv=An.getInterpolatedAttribute(a,u,d,f,_,new Se)),l&&(g.uv1=An.getInterpolatedAttribute(l,u,d,f,_,new Se)),c&&(g.normal=An.getInterpolatedAttribute(c,u,d,f,_,new W),g.normal.dot(i.direction)>0&&g.normal.multiplyScalar(-1));const v={a:u,b:d,c:f,normal:new W,materialIndex:0};An.getNormal(Er,Tr,wr,v.normal),g.face=v,g.barycoord=_}return g}class Ys extends dn{constructor(t=1,e=1,i=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:a,heightSegments:l,depthSegments:c};const u=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const d=[],f=[],g=[],_=[];let v=0,M=0;T("z","y","x",-1,-1,i,e,t,c,l,0),T("z","y","x",1,-1,i,e,-t,c,l,1),T("x","z","y",1,1,t,i,e,a,c,2),T("x","z","y",1,-1,t,i,-e,a,c,3),T("x","y","z",1,-1,t,e,i,a,l,4),T("x","y","z",-1,-1,t,e,-i,a,l,5),this.setIndex(d),this.setAttribute("position",new tn(f,3)),this.setAttribute("normal",new tn(g,3)),this.setAttribute("uv",new tn(_,2));function T(w,x,m,P,R,I,D,U,O,X,b){const A=I/O,B=D/X,Z=I/2,j=D/2,it=U/2,rt=O+1,tt=X+1;let K=0,J=0;const bt=new W;for(let st=0;st<tt;st++){const dt=st*B-j;for(let Ht=0;Ht<rt;Ht++){const kt=Ht*A-Z;bt[w]=kt*P,bt[x]=dt*R,bt[m]=it,f.push(bt.x,bt.y,bt.z),bt[w]=0,bt[x]=0,bt[m]=U>0?1:-1,g.push(bt.x,bt.y,bt.z),_.push(Ht/O),_.push(1-st/X),K+=1}}for(let st=0;st<X;st++)for(let dt=0;dt<O;dt++){const Ht=v+dt+rt*st,kt=v+dt+rt*(st+1),Kt=v+(dt+1)+rt*(st+1),Vt=v+(dt+1)+rt*st;d.push(Ht,kt,Vt),d.push(kt,Kt,Vt),J+=6}u.addGroup(M,J,b),M+=J,v+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function us(r){const t={};for(const e in r){t[e]={};for(const i in r[e]){const a=r[e][i];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=a.clone():Array.isArray(a)?t[e][i]=a.slice():t[e][i]=a}}return t}function Je(r){const t={};for(let e=0;e<r.length;e++){const i=us(r[e]);for(const a in i)t[a]=i[a]}return t}function Vd(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Lh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Hd={clone:us,merge:Je};var Gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends qs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gd,this.fragmentShader=Wd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=us(t.uniforms),this.uniformsGroups=Vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?e.uniforms[a]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?e.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?e.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?e.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?e.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?e.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?e.uniforms[a]={type:"m4",value:c.toArray()}:e.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const a in this.extensions)this.extensions[a]===!0&&(i[a]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Ih extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Re,this.projectionMatrix=new Re,this.projectionMatrixInverse=new Re,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const di=new W,bc=new Se,Ec=new Se;class hn extends Ih{constructor(t=50,e=1,i=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=a,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yo*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(di.x,di.y).multiplyScalar(-t/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(di.x,di.y).multiplyScalar(-t/di.z)}getViewSize(t,e){return this.getViewBounds(t,bc,Ec),e.subVectors(Ec,bc)}setViewOffset(t,e,i,a,l,c){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ba*.5*this.fov)/this.zoom,i=2*e,a=this.aspect*i,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,f=c.fullHeight;l+=c.offsetX*a/d,e-=c.offsetY*i/f,a*=c.width/d,i*=c.height/f}const u=this.filmOffset;u!==0&&(l+=t*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ts=-90,es=1;class Xd extends Qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new hn(ts,es,t,e);a.layers=this.layers,this.add(a);const l=new hn(ts,es,t,e);l.layers=this.layers,this.add(l);const c=new hn(ts,es,t,e);c.layers=this.layers,this.add(c);const u=new hn(ts,es,t,e);u.layers=this.layers,this.add(u);const d=new hn(ts,es,t,e);d.layers=this.layers,this.add(d);const f=new hn(ts,es,t,e);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,a,l,c,u,d]=e;for(const f of e)this.remove(f);if(t===On)i.up.set(0,1,0),i.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(t===Wr)i.up.set(0,-1,0),i.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const f of e)this.add(f),f.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:a}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,u,d,f,g]=this.children,_=t.getRenderTarget(),v=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,a),t.render(e,l),t.setRenderTarget(i,1,a),t.render(e,c),t.setRenderTarget(i,2,a),t.render(e,u),t.setRenderTarget(i,3,a),t.render(e,d),t.setRenderTarget(i,4,a),t.render(e,f),i.texture.generateMipmaps=w,t.setRenderTarget(i,5,a),t.render(e,g),t.setRenderTarget(_,v,M),t.xr.enabled=T,i.texture.needsPMREMUpdate=!0}}class Dh extends $e{constructor(t=[],e=Di,i,a,l,c,u,d,f,g){super(t,e,i,a,l,c,u,d,f,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nh extends zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},a=[i,i,i,i,i,i];this.texture=new Dh(a),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ys(5,5,5),l=new Vn({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:ti});l.uniforms.tEquirect.value=e;const c=new vn(a,l),u=e.minFilter;return e.minFilter===Li&&(e.minFilter=Ye),new Xd(1,10,this).update(t,c),e.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(t,e=!0,i=!0,a=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(e,i,a);t.setRenderTarget(l)}}class Us extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Zd={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let a=null,l=null,c=null;const u=this._targetRay,d=this._grip,f=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(f&&t.hand){c=!0;for(const w of t.hand.values()){const x=e.getJointPose(w,i),m=this._getHandJoint(f,w);x!==null&&(m.matrix.fromArray(x.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=x.radius),m.visible=x!==null}const g=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],v=g.position.distanceTo(_.position),M=.02,T=.005;f.inputState.pinching&&v>M+T?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!f.inputState.pinching&&v<=M-T&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else d!==null&&t.gripSpace&&(l=e.getPose(t.gripSpace,i),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(a=e.getPose(t.targetRaySpace,i),a===null&&l!==null&&(a=l),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Zd)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=l!==null),f!==null&&(f.visible=c!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Us;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class qd extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yd extends $e{constructor(t=null,e=1,i=1,a,l,c,u,d,f=Xe,g=Xe,_,v){super(null,c,u,d,f,g,a,l,_,v),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Za=new W,jd=new W,Kd=new ne;class Ci{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,a){return this.normal.set(t,e,i),this.constant=a,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const a=Za.subVectors(i,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(a,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Za),a=this.normal.dot(i);if(a===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:e.copy(t.start).addScaledVector(i,l)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Kd.getNormalMatrix(t),a=this.coplanarPoint(Za).applyMatrix4(t),l=this.normal.applyMatrix3(i).normalize();return this.constant=-a.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ti=new Yr,Jd=new Se(.5,.5),Rr=new W;class ul{constructor(t=new Ci,e=new Ci,i=new Ci,a=new Ci,l=new Ci,c=new Ci){this.planes=[t,e,i,a,l,c]}set(t,e,i,a,l,c){const u=this.planes;return u[0].copy(t),u[1].copy(e),u[2].copy(i),u[3].copy(a),u[4].copy(l),u[5].copy(c),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=On,i=!1){const a=this.planes,l=t.elements,c=l[0],u=l[1],d=l[2],f=l[3],g=l[4],_=l[5],v=l[6],M=l[7],T=l[8],w=l[9],x=l[10],m=l[11],P=l[12],R=l[13],I=l[14],D=l[15];if(a[0].setComponents(f-c,M-g,m-T,D-P).normalize(),a[1].setComponents(f+c,M+g,m+T,D+P).normalize(),a[2].setComponents(f+u,M+_,m+w,D+R).normalize(),a[3].setComponents(f-u,M-_,m-w,D-R).normalize(),i)a[4].setComponents(d,v,x,I).normalize(),a[5].setComponents(f-d,M-v,m-x,D-I).normalize();else if(a[4].setComponents(f-d,M-v,m-x,D-I).normalize(),e===On)a[5].setComponents(f+d,M+v,m+x,D+I).normalize();else if(e===Wr)a[5].setComponents(d,v,x,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);const e=Jd.distanceTo(t.center);return Ti.radius=.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){const e=this.planes,i=t.center,a=-t.radius;for(let l=0;l<6;l++)if(e[l].distanceToPoint(i)<a)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const a=e[i];if(Rr.x=a.normal.x>0?t.max.x:t.min.x,Rr.y=a.normal.y>0?t.max.y:t.min.y,Rr.z=a.normal.z>0?t.max.z:t.min.z,a.distanceToPoint(Rr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uh extends qs{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Tc=new Re,jo=new wh,Lr=new Yr,Ir=new W;class $d extends Qe{constructor(t=new dn,e=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,a=this.matrixWorld,l=t.params.Points.threshold,c=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(a),Lr.radius+=l,t.ray.intersectsSphere(Lr)===!1)return;Tc.copy(a).invert(),jo.copy(t.ray).applyMatrix4(Tc);const u=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=i.index,_=i.attributes.position;if(f!==null){const v=Math.max(0,c.start),M=Math.min(f.count,c.start+c.count);for(let T=v,w=M;T<w;T++){const x=f.getX(T);Ir.fromBufferAttribute(_,x),wc(Ir,x,d,a,t,e,this)}}else{const v=Math.max(0,c.start),M=Math.min(_.count,c.start+c.count);for(let T=v,w=M;T<w;T++)Ir.fromBufferAttribute(_,T),wc(Ir,T,d,a,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const a=e[i[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const u=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=l}}}}}function wc(r,t,e,i,a,l,c){const u=jo.distanceSqToPoint(r);if(u<e){const d=new W;jo.closestPointToPoint(r,d),d.applyMatrix4(i);const f=a.ray.origin.distanceTo(d);if(f<a.near||f>a.far)return;l.push({distance:f,distanceToRay:Math.sqrt(u),point:d,index:t,face:null,faceIndex:null,barycoord:null,object:c})}}class Gs extends $e{constructor(t,e,i=kn,a,l,c,u=Xe,d=Xe,f,g=ii,_=1){if(g!==ii&&g!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:e,depth:_};super(v,a,l,c,u,d,g,i,f),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Qd extends Gs{constructor(t,e=kn,i=Di,a,l,c=Xe,u=Xe,d,f=ii){const g={width:t,height:t,depth:1},_=[g,g,g,g,g,g];super(t,t,e,i,a,l,c,u,d,f),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Fh extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Zr extends dn{constructor(t=1,e=1,i=4,a=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:a,heightSegments:l},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),a=Math.max(3,Math.floor(a)),l=Math.max(1,Math.floor(l));const c=[],u=[],d=[],f=[],g=e/2,_=Math.PI/2*t,v=e,M=2*_+v,T=i*2+l,w=a+1,x=new W,m=new W;for(let P=0;P<=T;P++){let R=0,I=0,D=0,U=0;if(P<=i){const b=P/i,A=b*Math.PI/2;I=-g-t*Math.cos(A),D=t*Math.sin(A),U=-t*Math.cos(A),R=b*_}else if(P<=i+l){const b=(P-i)/l;I=-g+b*e,D=t,U=0,R=_+b*v}else{const b=(P-i-l)/i,A=b*Math.PI/2;I=g+t*Math.sin(A),D=t*Math.cos(A),U=t*Math.sin(A),R=_+v+b*_}const O=Math.max(0,Math.min(1,R/M));let X=0;P===0?X=.5/a:P===T&&(X=-.5/a);for(let b=0;b<=a;b++){const A=b/a,B=A*Math.PI*2,Z=Math.sin(B),j=Math.cos(B);m.x=-D*j,m.y=I,m.z=D*Z,u.push(m.x,m.y,m.z),x.set(-D*j,U,D*Z),x.normalize(),d.push(x.x,x.y,x.z),f.push(A+X,O)}if(P>0){const b=(P-1)*w;for(let A=0;A<a;A++){const B=b+A,Z=b+A+1,j=P*w+A,it=P*w+A+1;c.push(B,Z,j),c.push(Z,it,j)}}}this.setIndex(c),this.setAttribute("position",new tn(u,3)),this.setAttribute("normal",new tn(d,3)),this.setAttribute("uv",new tn(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zr(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class jr extends dn{constructor(t=1,e=1,i=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:a};const l=t/2,c=e/2,u=Math.floor(i),d=Math.floor(a),f=u+1,g=d+1,_=t/u,v=e/d,M=[],T=[],w=[],x=[];for(let m=0;m<g;m++){const P=m*v-c;for(let R=0;R<f;R++){const I=R*_-l;T.push(I,-P,0),w.push(0,0,1),x.push(R/u),x.push(1-m/d)}}for(let m=0;m<d;m++)for(let P=0;P<u;P++){const R=P+f*m,I=P+f*(m+1),D=P+1+f*(m+1),U=P+1+f*m;M.push(R,I,U),M.push(I,D,U)}this.setIndex(M),this.setAttribute("position",new tn(T,3)),this.setAttribute("normal",new tn(w,3)),this.setAttribute("uv",new tn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.width,t.height,t.widthSegments,t.heightSegments)}}class dl extends dn{constructor(t=1,e=32,i=16,a=0,l=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:a,phiLength:l,thetaStart:c,thetaLength:u},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const d=Math.min(c+u,Math.PI);let f=0;const g=[],_=new W,v=new W,M=[],T=[],w=[],x=[];for(let m=0;m<=i;m++){const P=[],R=m/i;let I=0;m===0&&c===0?I=.5/e:m===i&&d===Math.PI&&(I=-.5/e);for(let D=0;D<=e;D++){const U=D/e;_.x=-t*Math.cos(a+U*l)*Math.sin(c+R*u),_.y=t*Math.cos(c+R*u),_.z=t*Math.sin(a+U*l)*Math.sin(c+R*u),T.push(_.x,_.y,_.z),v.copy(_).normalize(),w.push(v.x,v.y,v.z),x.push(U+I,1-R),P.push(f++)}g.push(P)}for(let m=0;m<i;m++)for(let P=0;P<e;P++){const R=g[m][P+1],I=g[m][P],D=g[m+1][P],U=g[m+1][P+1];(m!==0||c>0)&&M.push(R,I,U),(m!==i-1||d<Math.PI)&&M.push(I,D,U)}this.setIndex(M),this.setAttribute("position",new tn(T,3)),this.setAttribute("normal",new tn(w,3)),this.setAttribute("uv",new tn(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class tf extends Vn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ef extends qs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nf extends qs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class sf extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}const qa=new Re,Ac=new W,Cc=new W;class rf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.mapType=un,this.map=null,this.mapPass=null,this.matrix=new Re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new Ie(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ac),Cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cc),e.updateMatrixWorld(),qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qa,e.coordinateSystem,e.reversedDepth),e.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class af extends rf{constructor(){super(new hn(90,1,.5,500)),this.isPointLightShadow=!0}}class Pc extends sf{constructor(t,e,i=0,a=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=a,this.shadow=new af}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class Oh extends Ih{constructor(t=-1,e=1,i=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=i-t,c=i+t,u=a+e,d=a-e;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=f*this.view.offsetX,c=l+f*this.view.width,u-=g*this.view.offsetY,d=u-g*this.view.height}this.projectionMatrix.makeOrthographic(l,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class of extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Rc(r,t,e,i){const a=lf(i);switch(e){case Mh:return r*t;case bh:return r*t/a.components*a.byteLength;case rl:return r*t/a.components*a.byteLength;case cs:return r*t*2/a.components*a.byteLength;case al:return r*t*2/a.components*a.byteLength;case Sh:return r*t*3/a.components*a.byteLength;case Cn:return r*t*4/a.components*a.byteLength;case ol:return r*t*4/a.components*a.byteLength;case Or:case Br:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case zr:case kr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case go:case xo:return Math.max(r,16)*Math.max(t,8)/4;case _o:case vo:return Math.max(r,8)*Math.max(t,8)/2;case yo:case Mo:case bo:case Eo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case So:case To:case wo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Co:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Po:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Io:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Do:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case No:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Uo:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case zo:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case ko:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Vo:case Ho:case Go:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Wo:case Xo:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Zo:case qo:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function lf(r){switch(r){case un:case gh:return{byteLength:1,components:1};case ks:case vh:case ni:return{byteLength:2,components:1};case il:case sl:return{byteLength:2,components:4};case kn:case nl:case Fn:return{byteLength:4,components:1};case xh:case yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:el}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=el);function Bh(){let r=null,t=!1,e=null,i=null;function a(l,c){e(l,c),i=r.requestAnimationFrame(a)}return{start:function(){t!==!0&&e!==null&&(i=r.requestAnimationFrame(a),t=!0)},stop:function(){r.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(l){e=l},setContext:function(l){r=l}}}function cf(r){const t=new WeakMap;function e(u,d){const f=u.array,g=u.usage,_=f.byteLength,v=r.createBuffer();r.bindBuffer(d,v),r.bufferData(d,f,g),u.onUploadCallback();let M;if(f instanceof Float32Array)M=r.FLOAT;else if(typeof Float16Array<"u"&&f instanceof Float16Array)M=r.HALF_FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(f instanceof Int16Array)M=r.SHORT;else if(f instanceof Uint32Array)M=r.UNSIGNED_INT;else if(f instanceof Int32Array)M=r.INT;else if(f instanceof Int8Array)M=r.BYTE;else if(f instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:M,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:_}}function i(u,d,f){const g=d.array,_=d.updateRanges;if(r.bindBuffer(f,u),_.length===0)r.bufferSubData(f,0,g);else{_.sort((M,T)=>M.start-T.start);let v=0;for(let M=1;M<_.length;M++){const T=_[v],w=_[M];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++v,_[v]=w)}_.length=v+1;for(let M=0,T=_.length;M<T;M++){const w=_[M];r.bufferSubData(f,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),t.get(u)}function l(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=t.get(u);d&&(r.deleteBuffer(d.buffer),t.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const g=t.get(u);(!g||g.version<u.version)&&t.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=t.get(u);if(f===void 0)t.set(u,e(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,u,d),f.version=u.version}}return{get:a,remove:l,update:c}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
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
#endif`,df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ff=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,gf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vf=`#ifdef USE_BATCHING
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
#endif`,xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ef=`#ifdef USE_BUMPMAP
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
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Df=`#define PI 3.141592653589793
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
} // validated`,Nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uf=`vec3 transformedNormal = objectNormal;
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
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hf=`#ifdef USE_ENVMAP
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
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
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
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jf=`#ifdef USE_GRADIENTMAP
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
}`,$f=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
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
#endif`,np=`#ifdef USE_ENVMAP
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
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
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
#endif`,lp=`uniform sampler2D dfgLUT;
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
}`,cp=`
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
#endif`,hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,xp=`#if defined( USE_POINTS_UV )
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
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`#ifdef USE_MORPHTARGETS
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
#endif`,wp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ap=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ip=`#ifdef USE_NORMALMAP
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
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yp=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
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
#endif`,Jp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
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
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,em=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,nm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,im=`#ifdef USE_TRANSMISSION
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
#endif`,sm=`#ifdef USE_TRANSMISSION
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
#endif`,rm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const cm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hm=`uniform sampler2D t2D;
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,gm=`#define DISTANCE
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
}`,vm=`#define DISTANCE
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`uniform float scale;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,bm=`#include <common>
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
}`,Em=`uniform vec3 diffuse;
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
}`,Tm=`#define LAMBERT
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
}`,wm=`#define LAMBERT
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
}`,Am=`#define MATCAP
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
}`,Cm=`#define MATCAP
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
}`,Pm=`#define NORMAL
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
}`,Rm=`#define NORMAL
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
}`,Lm=`#define PHONG
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
}`,Im=`#define PHONG
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
}`,Dm=`#define STANDARD
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
}`,Nm=`#define STANDARD
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
}`,Um=`#define TOON
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
}`,Fm=`#define TOON
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
}`,Om=`uniform float size;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,zm=`#include <common>
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
}`,km=`uniform vec3 color;
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
}`,Vm=`uniform float rotation;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:hf,alphahash_pars_fragment:uf,alphamap_fragment:df,alphamap_pars_fragment:ff,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:_f,aomap_pars_fragment:gf,batching_pars_vertex:vf,batching_vertex:xf,begin_vertex:yf,beginnormal_vertex:Mf,bsdfs:Sf,iridescence_fragment:bf,bumpmap_pars_fragment:Ef,clipping_planes_fragment:Tf,clipping_planes_pars_fragment:wf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Cf,color_fragment:Pf,color_pars_fragment:Rf,color_pars_vertex:Lf,color_vertex:If,common:Df,cube_uv_reflection_fragment:Nf,defaultnormal_vertex:Uf,displacementmap_pars_vertex:Ff,displacementmap_vertex:Of,emissivemap_fragment:Bf,emissivemap_pars_fragment:zf,colorspace_fragment:kf,colorspace_pars_fragment:Vf,envmap_fragment:Hf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Wf,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:np,envmap_vertex:Zf,fog_vertex:qf,fog_pars_vertex:Yf,fog_fragment:jf,fog_pars_fragment:Kf,gradientmap_pars_fragment:Jf,lightmap_pars_fragment:$f,lights_lambert_fragment:Qf,lights_lambert_pars_fragment:tp,lights_pars_begin:ep,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:ap,lights_physical_fragment:op,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,logdepthbuf_fragment:dp,logdepthbuf_pars_fragment:fp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:_p,map_pars_fragment:gp,map_particle_fragment:vp,map_particle_pars_fragment:xp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:Mp,morphinstance_vertex:Sp,morphcolor_vertex:bp,morphnormal_vertex:Ep,morphtarget_pars_vertex:Tp,morphtarget_vertex:wp,normal_fragment_begin:Ap,normal_fragment_maps:Cp,normal_pars_fragment:Pp,normal_pars_vertex:Rp,normal_vertex:Lp,normalmap_pars_fragment:Ip,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Np,clearcoat_pars_fragment:Up,iridescence_pars_fragment:Fp,opaque_fragment:Op,packing:Bp,premultiplied_alpha_fragment:zp,project_vertex:kp,dithering_fragment:Vp,dithering_pars_fragment:Hp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:Xp,shadowmap_pars_vertex:Zp,shadowmap_vertex:qp,shadowmask_pars_fragment:Yp,skinbase_vertex:jp,skinning_pars_vertex:Kp,skinning_vertex:Jp,skinnormal_vertex:$p,specularmap_fragment:Qp,specularmap_pars_fragment:tm,tonemapping_fragment:em,tonemapping_pars_fragment:nm,transmission_fragment:im,transmission_pars_fragment:sm,uv_pars_fragment:rm,uv_pars_vertex:am,uv_vertex:om,worldpos_vertex:lm,background_vert:cm,background_frag:hm,backgroundCube_vert:um,backgroundCube_frag:dm,cube_vert:fm,cube_frag:pm,depth_vert:mm,depth_frag:_m,distance_vert:gm,distance_frag:vm,equirect_vert:xm,equirect_frag:ym,linedashed_vert:Mm,linedashed_frag:Sm,meshbasic_vert:bm,meshbasic_frag:Em,meshlambert_vert:Tm,meshlambert_frag:wm,meshmatcap_vert:Am,meshmatcap_frag:Cm,meshnormal_vert:Pm,meshnormal_frag:Rm,meshphong_vert:Lm,meshphong_frag:Im,meshphysical_vert:Dm,meshphysical_frag:Nm,meshtoon_vert:Um,meshtoon_frag:Fm,points_vert:Om,points_frag:Bm,shadow_vert:zm,shadow_frag:km,sprite_vert:Vm,sprite_frag:Hm},St={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Un={basic:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Me(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:Je([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:Je([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:Je([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Me(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:Je([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:Je([St.points,St.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:Je([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:Je([St.common,St.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:Je([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:Je([St.sprite,St.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:Je([St.common,St.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:Je([St.lights,St.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};Un.physical={uniforms:Je([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const Dr={r:0,b:0,g:0},wi=new si,Gm=new Re;function Wm(r,t,e,i,a,l,c){const u=new Me(0);let d=l===!0?0:1,f,g,_=null,v=0,M=null;function T(R){let I=R.isScene===!0?R.background:null;return I&&I.isTexture&&(I=(R.backgroundBlurriness>0?e:t).get(I)),I}function w(R){let I=!1;const D=T(R);D===null?m(u,d):D&&D.isColor&&(m(D,1),I=!0);const U=r.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,c):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,c),(r.autoClear||I)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(R,I){const D=T(I);D&&(D.isCubeTexture||D.mapping===qr)?(g===void 0&&(g=new vn(new Ys(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:us(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(U,O,X){this.matrixWorld.copyPosition(X.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),wi.copy(I.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),g.material.uniforms.envMap.value=D,g.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(wi)),g.material.toneMapped=pe.getTransfer(D.colorSpace)!==be,(_!==D||v!==D.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=D,v=D.version,M=r.toneMapping),g.layers.enableAll(),R.unshift(g,g.geometry,g.material,0,0,null)):D&&D.isTexture&&(f===void 0&&(f=new vn(new jr(2,2),new Vn({name:"BackgroundMaterial",uniforms:us(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(f)),f.material.uniforms.t2D.value=D,f.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,f.material.toneMapped=pe.getTransfer(D.colorSpace)!==be,D.matrixAutoUpdate===!0&&D.updateMatrix(),f.material.uniforms.uvTransform.value.copy(D.matrix),(_!==D||v!==D.version||M!==r.toneMapping)&&(f.material.needsUpdate=!0,_=D,v=D.version,M=r.toneMapping),f.layers.enableAll(),R.unshift(f,f.geometry,f.material,0,0,null))}function m(R,I){R.getRGB(Dr,Lh(r)),i.buffers.color.setClear(Dr.r,Dr.g,Dr.b,I,c)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0)}return{getClearColor:function(){return u},setClearColor:function(R,I=1){u.set(R),d=I,m(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(R){d=R,m(u,d)},render:w,addToRenderList:x,dispose:P}}function Xm(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},a=v(null);let l=a,c=!1;function u(A,B,Z,j,it){let rt=!1;const tt=_(j,Z,B);l!==tt&&(l=tt,f(l.object)),rt=M(A,j,Z,it),rt&&T(A,j,Z,it),it!==null&&t.update(it,r.ELEMENT_ARRAY_BUFFER),(rt||c)&&(c=!1,I(A,B,Z,j),it!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function d(){return r.createVertexArray()}function f(A){return r.bindVertexArray(A)}function g(A){return r.deleteVertexArray(A)}function _(A,B,Z){const j=Z.wireframe===!0;let it=i[A.id];it===void 0&&(it={},i[A.id]=it);let rt=it[B.id];rt===void 0&&(rt={},it[B.id]=rt);let tt=rt[j];return tt===void 0&&(tt=v(d()),rt[j]=tt),tt}function v(A){const B=[],Z=[],j=[];for(let it=0;it<e;it++)B[it]=0,Z[it]=0,j[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:j,object:A,attributes:{},index:null}}function M(A,B,Z,j){const it=l.attributes,rt=B.attributes;let tt=0;const K=Z.getAttributes();for(const J in K)if(K[J].location>=0){const st=it[J];let dt=rt[J];if(dt===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(dt=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(dt=A.instanceColor)),st===void 0||st.attribute!==dt||dt&&st.data!==dt.data)return!0;tt++}return l.attributesNum!==tt||l.index!==j}function T(A,B,Z,j){const it={},rt=B.attributes;let tt=0;const K=Z.getAttributes();for(const J in K)if(K[J].location>=0){let st=rt[J];st===void 0&&(J==="instanceMatrix"&&A.instanceMatrix&&(st=A.instanceMatrix),J==="instanceColor"&&A.instanceColor&&(st=A.instanceColor));const dt={};dt.attribute=st,st&&st.data&&(dt.data=st.data),it[J]=dt,tt++}l.attributes=it,l.attributesNum=tt,l.index=j}function w(){const A=l.newAttributes;for(let B=0,Z=A.length;B<Z;B++)A[B]=0}function x(A){m(A,0)}function m(A,B){const Z=l.newAttributes,j=l.enabledAttributes,it=l.attributeDivisors;Z[A]=1,j[A]===0&&(r.enableVertexAttribArray(A),j[A]=1),it[A]!==B&&(r.vertexAttribDivisor(A,B),it[A]=B)}function P(){const A=l.newAttributes,B=l.enabledAttributes;for(let Z=0,j=B.length;Z<j;Z++)B[Z]!==A[Z]&&(r.disableVertexAttribArray(Z),B[Z]=0)}function R(A,B,Z,j,it,rt,tt){tt===!0?r.vertexAttribIPointer(A,B,Z,it,rt):r.vertexAttribPointer(A,B,Z,j,it,rt)}function I(A,B,Z,j){w();const it=j.attributes,rt=Z.getAttributes(),tt=B.defaultAttributeValues;for(const K in rt){const J=rt[K];if(J.location>=0){let bt=it[K];if(bt===void 0&&(K==="instanceMatrix"&&A.instanceMatrix&&(bt=A.instanceMatrix),K==="instanceColor"&&A.instanceColor&&(bt=A.instanceColor)),bt!==void 0){const st=bt.normalized,dt=bt.itemSize,Ht=t.get(bt);if(Ht===void 0)continue;const kt=Ht.buffer,Kt=Ht.type,Vt=Ht.bytesPerElement,q=Kt===r.INT||Kt===r.UNSIGNED_INT||bt.gpuType===nl;if(bt.isInterleavedBufferAttribute){const ot=bt.data,Et=ot.stride,Jt=bt.offset;if(ot.isInstancedInterleavedBuffer){for(let Lt=0;Lt<J.locationSize;Lt++)m(J.location+Lt,ot.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Lt=0;Lt<J.locationSize;Lt++)x(J.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,kt);for(let Lt=0;Lt<J.locationSize;Lt++)R(J.location+Lt,dt/J.locationSize,Kt,st,Et*Vt,(Jt+dt/J.locationSize*Lt)*Vt,q)}else{if(bt.isInstancedBufferAttribute){for(let ot=0;ot<J.locationSize;ot++)m(J.location+ot,bt.meshPerAttribute);A.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=bt.meshPerAttribute*bt.count)}else for(let ot=0;ot<J.locationSize;ot++)x(J.location+ot);r.bindBuffer(r.ARRAY_BUFFER,kt);for(let ot=0;ot<J.locationSize;ot++)R(J.location+ot,dt/J.locationSize,Kt,st,dt*Vt,dt/J.locationSize*ot*Vt,q)}}else if(tt!==void 0){const st=tt[K];if(st!==void 0)switch(st.length){case 2:r.vertexAttrib2fv(J.location,st);break;case 3:r.vertexAttrib3fv(J.location,st);break;case 4:r.vertexAttrib4fv(J.location,st);break;default:r.vertexAttrib1fv(J.location,st)}}}}P()}function D(){X();for(const A in i){const B=i[A];for(const Z in B){const j=B[Z];for(const it in j)g(j[it].object),delete j[it];delete B[Z]}delete i[A]}}function U(A){if(i[A.id]===void 0)return;const B=i[A.id];for(const Z in B){const j=B[Z];for(const it in j)g(j[it].object),delete j[it];delete B[Z]}delete i[A.id]}function O(A){for(const B in i){const Z=i[B];if(Z[A.id]===void 0)continue;const j=Z[A.id];for(const it in j)g(j[it].object),delete j[it];delete Z[A.id]}}function X(){b(),c=!0,l!==a&&(l=a,f(l.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:X,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:U,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:x,disableUnusedAttributes:P}}function Zm(r,t,e){let i;function a(f){i=f}function l(f,g){r.drawArrays(i,f,g),e.update(g,i,1)}function c(f,g,_){_!==0&&(r.drawArraysInstanced(i,f,g,_),e.update(g,i,_))}function u(f,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,f,0,g,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T];e.update(M,i,1)}function d(f,g,_,v){if(_===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<f.length;T++)c(f[T],g[T],v[T]);else{M.multiDrawArraysInstancedWEBGL(i,f,0,g,0,v,0,_);let T=0;for(let w=0;w<_;w++)T+=g[w]*v[w];e.update(T,i,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function qm(r,t,e,i){let a;function l(){if(a!==void 0)return a;if(t.has("EXT_texture_filter_anisotropic")===!0){const O=t.get("EXT_texture_filter_anisotropic");a=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(O){return!(O!==Cn&&i.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const X=O===ni&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(O!==un&&i.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Fn&&!X)}function d(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=e.precision!==void 0?e.precision:"highp";const g=d(f);g!==f&&($t("WebGLRenderer:",f,"not supported, using",g,"instead."),f=g);const _=e.logarithmicDepthBuffer===!0,v=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),R=r.getParameter(r.MAX_VARYING_VECTORS),I=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),D=r.getParameter(r.MAX_SAMPLES),U=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:_,reversedDepthBuffer:v,maxTextures:M,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:P,maxVaryings:R,maxFragmentUniforms:I,maxSamples:D,samples:U}}function Ym(r){const t=this;let e=null,i=0,a=!1,l=!1;const c=new Ci,u=new ne,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const M=_.length!==0||v||i!==0||a;return a=v,i=_.length,M},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,v){e=g(_,v,0)},this.setState=function(_,v,M){const T=_.clippingPlanes,w=_.clipIntersection,x=_.clipShadows,m=r.get(_);if(!a||T===null||T.length===0||l&&!x)l?g(null):f();else{const P=l?0:i,R=P*4;let I=m.clippingState||null;d.value=I,I=g(T,v,R,M);for(let D=0;D!==R;++D)I[D]=e[D];m.clippingState=I,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function f(){d.value!==e&&(d.value=e,d.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function g(_,v,M,T){const w=_!==null?_.length:0;let x=null;if(w!==0){if(x=d.value,T!==!0||x===null){const m=M+w*4,P=v.matrixWorldInverse;u.getNormalMatrix(P),(x===null||x.length<m)&&(x=new Float32Array(m));for(let R=0,I=M;R!==w;++R,I+=4)c.copy(_[R]).applyMatrix4(P,u),c.normal.toArray(x,I),x[I+3]=c.constant}d.value=x,d.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,x}}function jm(r){let t=new WeakMap;function e(c,u){return u===uo?c.mapping=Di:u===fo&&(c.mapping=ls),c}function i(c){if(c&&c.isTexture){const u=c.mapping;if(u===uo||u===fo)if(t.has(c)){const d=t.get(c).texture;return e(d,c.mapping)}else{const d=c.image;if(d&&d.height>0){const f=new Nh(d.height);return f.fromEquirectangularTexture(r,c),t.set(c,f),c.addEventListener("dispose",a),e(f.texture,c.mapping)}else return null}}return c}function a(c){const u=c.target;u.removeEventListener("dispose",a);const d=t.get(u);d!==void 0&&(t.delete(u),d.dispose())}function l(){t=new WeakMap}return{get:i,dispose:l}}const pi=4,Lc=[.125,.215,.35,.446,.526,.582],Ri=20,Km=256,Ls=new Oh,Ic=new Me;let Ya=null,ja=0,Ka=0,Ja=!1;const Jm=new W;class Dc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,a=100,l={}){const{size:c=256,position:u=Jm}=l;Ya=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(t,i,a,d,u),e>0&&this._blur(d,0,0,e),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ya,ja,Ka),this._renderer.xr.enabled=Ja,t.scissorTest=!1,ns(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ya=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),Ka=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:ni,format:Cn,colorSpace:hs,depthBuffer:!1},a=Nc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(t,e,i);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$m(l)),this._blurMaterial=t_(l,t,e),this._ggxMaterial=Qm(l,t,e)}return a}_compileMaterial(t){const e=new vn(new dn,t);this._renderer.compile(e,Ls)}_sceneToCubeUV(t,e,i,a,l){const d=new hn(90,1,e,i),f=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,v=_.autoClear,M=_.toneMapping;_.getClearColor(Ic),_.toneMapping=Bn,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(a),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new vn(new Ys,new zs({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1})));const w=this._backgroundBox,x=w.material;let m=!1;const P=t.background;P?P.isColor&&(x.color.copy(P),t.background=null,m=!0):(x.color.copy(Ic),m=!0);for(let R=0;R<6;R++){const I=R%3;I===0?(d.up.set(0,f[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x+g[R],l.y,l.z)):I===1?(d.up.set(0,0,f[R]),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y+g[R],l.z)):(d.up.set(0,f[R],0),d.position.set(l.x,l.y,l.z),d.lookAt(l.x,l.y,l.z+g[R]));const D=this._cubeSize;ns(a,I*D,R>2?D:0,D,D),_.setRenderTarget(a),m&&_.render(w,d),_.render(t,d)}_.toneMapping=M,_.autoClear=v,t.background=P}_textureToCubeUV(t,e){const i=this._renderer,a=t.mapping===Di||t.mapping===ls;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const u=l.uniforms;u.envMap.value=t;const d=this._cubeSize;ns(e,0,0,3*d,2*d),i.setRenderTarget(e),i.render(c,Ls)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(t,l-1,l);e.autoClear=i}_applyGGXFilter(t,e,i){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[i];u.material=c;const d=c.uniforms,f=i/(this._lodMeshes.length-1),g=e/(this._lodMeshes.length-1),_=Math.sqrt(f*f-g*g),v=0+f*1.25,M=_*v,{_lodMax:T}=this,w=this._sizeLods[i],x=3*w*(i>T-pi?i-T+pi:0),m=4*(this._cubeSize-w);d.envMap.value=t.texture,d.roughness.value=M,d.mipInt.value=T-e,ns(l,x,m,3*w,2*w),a.setRenderTarget(l),a.render(u,Ls),d.envMap.value=l.texture,d.roughness.value=0,d.mipInt.value=T-i,ns(t,x,m,3*w,2*w),a.setRenderTarget(t),a.render(u,Ls)}_blur(t,e,i,a,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,e,i,a,"latitudinal",l),this._halfBlur(c,t,i,i,a,"longitudinal",l)}_halfBlur(t,e,i,a,l,c,u){const d=this._renderer,f=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&me("blur direction must be either latitudinal or longitudinal!");const g=3,_=this._lodMeshes[a];_.material=f;const v=f.uniforms,M=this._sizeLods[i]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*Ri-1),w=l/T,x=isFinite(l)?1+Math.floor(g*w):Ri;x>Ri&&$t(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ri}`);const m=[];let P=0;for(let O=0;O<Ri;++O){const X=O/w,b=Math.exp(-X*X/2);m.push(b),O===0?P+=b:O<x&&(P+=2*b)}for(let O=0;O<m.length;O++)m[O]=m[O]/P;v.envMap.value=t.texture,v.samples.value=x,v.weights.value=m,v.latitudinal.value=c==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:R}=this;v.dTheta.value=T,v.mipInt.value=R-i;const I=this._sizeLods[a],D=3*I*(a>R-pi?a-R+pi:0),U=4*(this._cubeSize-I);ns(e,D,U,3*I,2*I),d.setRenderTarget(e),d.render(_,Ls)}}function $m(r){const t=[],e=[],i=[];let a=r;const l=r-pi+1+Lc.length;for(let c=0;c<l;c++){const u=Math.pow(2,a);t.push(u);let d=1/u;c>r-pi?d=Lc[c-r+pi-1]:c===0&&(d=0),e.push(d);const f=1/(u-2),g=-f,_=1+f,v=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,T=6,w=3,x=2,m=1,P=new Float32Array(w*T*M),R=new Float32Array(x*T*M),I=new Float32Array(m*T*M);for(let U=0;U<M;U++){const O=U%3*2/3-1,X=U>2?0:-1,b=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];P.set(b,w*T*U),R.set(v,x*T*U);const A=[U,U,U,U,U,U];I.set(A,m*T*U)}const D=new dn;D.setAttribute("position",new Pn(P,w)),D.setAttribute("uv",new Pn(R,x)),D.setAttribute("faceIndex",new Pn(I,m)),i.push(new vn(D,null)),a>pi&&a--}return{lodMeshes:i,sizeLods:t,sigmas:e}}function Nc(r,t,e){const i=new zn(r,t,e);return i.texture.mapping=qr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ns(r,t,e,i,a){r.viewport.set(t,e,i,a),r.scissor.set(t,e,i,a)}function Qm(r,t,e){return new Vn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Km,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function t_(r,t,e){const i=new Float32Array(Ri),a=new W(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Uc(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kr(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Fc(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Kr(){return`

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
	`}function e_(r){let t=new WeakMap,e=null;function i(u){if(u&&u.isTexture){const d=u.mapping,f=d===uo||d===fo,g=d===Di||d===ls;if(f||g){let _=t.get(u);const v=_!==void 0?_.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return e===null&&(e=new Dc(r)),_=f?e.fromEquirectangular(u,_):e.fromCubemap(u,_),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),_.texture;if(_!==void 0)return _.texture;{const M=u.image;return f&&M&&M.height>0||g&&M&&a(M)?(e===null&&(e=new Dc(r)),_=f?e.fromEquirectangular(u):e.fromCubemap(u),_.texture.pmremVersion=u.pmremVersion,t.set(u,_),u.addEventListener("dispose",l),_.texture):null}}}return u}function a(u){let d=0;const f=6;for(let g=0;g<f;g++)u[g]!==void 0&&d++;return d===f}function l(u){const d=u.target;d.removeEventListener("dispose",l);const f=t.get(d);f!==void 0&&(t.delete(d),f.dispose())}function c(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:c}}function n_(r){const t={};function e(i){if(t[i]!==void 0)return t[i];const a=r.getExtension(i);return t[i]=a,a}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const a=e(i);return a===null&&Hs("WebGLRenderer: "+i+" extension not supported."),a}}}function i_(r,t,e,i){const a={},l=new WeakMap;function c(_){const v=_.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",c),delete a[v.id];const M=l.get(v);M&&(t.remove(M),l.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,e.memory.geometries--}function u(_,v){return a[v.id]===!0||(v.addEventListener("dispose",c),a[v.id]=!0,e.memory.geometries++),v}function d(_){const v=_.attributes;for(const M in v)t.update(v[M],r.ARRAY_BUFFER)}function f(_){const v=[],M=_.index,T=_.attributes.position;let w=0;if(M!==null){const P=M.array;w=M.version;for(let R=0,I=P.length;R<I;R+=3){const D=P[R+0],U=P[R+1],O=P[R+2];v.push(D,U,U,O,O,D)}}else if(T!==void 0){const P=T.array;w=T.version;for(let R=0,I=P.length/3-1;R<I;R+=3){const D=R+0,U=R+1,O=R+2;v.push(D,U,U,O,O,D)}}else return;const x=new(Eh(v)?Rh:Ph)(v,1);x.version=w;const m=l.get(_);m&&t.remove(m),l.set(_,x)}function g(_){const v=l.get(_);if(v){const M=_.index;M!==null&&v.version<M.version&&f(_)}else f(_);return l.get(_)}return{get:u,update:d,getWireframeAttribute:g}}function s_(r,t,e){let i;function a(v){i=v}let l,c;function u(v){l=v.type,c=v.bytesPerElement}function d(v,M){r.drawElements(i,M,l,v*c),e.update(M,i,1)}function f(v,M,T){T!==0&&(r.drawElementsInstanced(i,M,l,v*c,T),e.update(M,i,T))}function g(v,M,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,M,0,l,v,0,T);let x=0;for(let m=0;m<T;m++)x+=M[m];e.update(x,i,1)}function _(v,M,T,w){if(T===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let m=0;m<v.length;m++)f(v[m]/c,M[m],w[m]);else{x.multiDrawElementsInstancedWEBGL(i,M,0,l,v,0,w,0,T);let m=0;for(let P=0;P<T;P++)m+=M[P]*w[P];e.update(m,i,1)}}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function r_(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(l,c,u){switch(e.calls++,c){case r.TRIANGLES:e.triangles+=u*(l/3);break;case r.LINES:e.lines+=u*(l/2);break;case r.LINE_STRIP:e.lines+=u*(l-1);break;case r.LINE_LOOP:e.lines+=u*l;break;case r.POINTS:e.points+=u*l;break;default:me("WebGLInfo: Unknown draw mode:",c);break}}function a(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:a,update:i}}function a_(r,t,e){const i=new WeakMap,a=new Ie;function l(c,u,d){const f=c.morphTargetInfluences,g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let v=i.get(u);if(v===void 0||v.count!==_){let A=function(){X.dispose(),i.delete(u),u.removeEventListener("dispose",A)};var M=A;v!==void 0&&v.texture.dispose();const T=u.morphAttributes.position!==void 0,w=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,m=u.morphAttributes.position||[],P=u.morphAttributes.normal||[],R=u.morphAttributes.color||[];let I=0;T===!0&&(I=1),w===!0&&(I=2),x===!0&&(I=3);let D=u.attributes.position.count*I,U=1;D>t.maxTextureSize&&(U=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const O=new Float32Array(D*U*4*_),X=new Th(O,D,U,_);X.type=Fn,X.needsUpdate=!0;const b=I*4;for(let B=0;B<_;B++){const Z=m[B],j=P[B],it=R[B],rt=D*U*4*B;for(let tt=0;tt<Z.count;tt++){const K=tt*b;T===!0&&(a.fromBufferAttribute(Z,tt),O[rt+K+0]=a.x,O[rt+K+1]=a.y,O[rt+K+2]=a.z,O[rt+K+3]=0),w===!0&&(a.fromBufferAttribute(j,tt),O[rt+K+4]=a.x,O[rt+K+5]=a.y,O[rt+K+6]=a.z,O[rt+K+7]=0),x===!0&&(a.fromBufferAttribute(it,tt),O[rt+K+8]=a.x,O[rt+K+9]=a.y,O[rt+K+10]=a.z,O[rt+K+11]=it.itemSize===4?a.w:1)}}v={count:_,texture:X,size:new Se(D,U)},i.set(u,v),u.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(r,"morphTexture",c.morphTexture,e);else{let T=0;for(let x=0;x<f.length;x++)T+=f[x];const w=u.morphTargetsRelative?1:1-T;d.getUniforms().setValue(r,"morphTargetBaseInfluence",w),d.getUniforms().setValue(r,"morphTargetInfluences",f)}d.getUniforms().setValue(r,"morphTargetsTexture",v.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function o_(r,t,e,i){let a=new WeakMap;function l(d){const f=i.render.frame,g=d.geometry,_=t.get(d,g);if(a.get(_)!==f&&(t.update(_),a.set(_,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),a.get(d)!==f&&(e.update(d.instanceMatrix,r.ARRAY_BUFFER),d.instanceColor!==null&&e.update(d.instanceColor,r.ARRAY_BUFFER),a.set(d,f))),d.isSkinnedMesh){const v=d.skeleton;a.get(v)!==f&&(v.update(),a.set(v,f))}return _}function c(){a=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:l,dispose:c}}const l_={[ch]:"LINEAR_TONE_MAPPING",[hh]:"REINHARD_TONE_MAPPING",[uh]:"CINEON_TONE_MAPPING",[dh]:"ACES_FILMIC_TONE_MAPPING",[ph]:"AGX_TONE_MAPPING",[mh]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function c_(r,t,e,i,a){const l=new zn(t,e,{type:r,depthBuffer:i,stencilBuffer:a}),c=new zn(t,e,{type:ni,depthBuffer:!1,stencilBuffer:!1}),u=new dn;u.setAttribute("position",new tn([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new tn([0,2,0,0,2,0],2));const d=new tf({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new vn(u,d),g=new Oh(-1,1,1,-1,0,1);let _=null,v=null,M=!1,T,w=null,x=[],m=!1;this.setSize=function(P,R){l.setSize(P,R),c.setSize(P,R);for(let I=0;I<x.length;I++){const D=x[I];D.setSize&&D.setSize(P,R)}},this.setEffects=function(P){x=P,m=x.length>0&&x[0].isRenderPass===!0;const R=l.width,I=l.height;for(let D=0;D<x.length;D++){const U=x[D];U.setSize&&U.setSize(R,I)}},this.begin=function(P,R){if(M||P.toneMapping===Bn&&x.length===0)return!1;if(w=R,R!==null){const I=R.width,D=R.height;(l.width!==I||l.height!==D)&&this.setSize(I,D)}return m===!1&&P.setRenderTarget(l),T=P.toneMapping,P.toneMapping=Bn,!0},this.hasRenderPass=function(){return m},this.end=function(P,R){P.toneMapping=T,M=!0;let I=l,D=c;for(let U=0;U<x.length;U++){const O=x[U];if(O.enabled!==!1&&(O.render(P,D,I,R),O.needsSwap!==!1)){const X=I;I=D,D=X}}if(_!==P.outputColorSpace||v!==P.toneMapping){_=P.outputColorSpace,v=P.toneMapping,d.defines={},pe.getTransfer(_)===be&&(d.defines.SRGB_TRANSFER="");const U=l_[v];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=I.texture,P.setRenderTarget(w),P.render(f,g),w=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){l.dispose(),c.dispose(),u.dispose(),d.dispose()}}const zh=new $e,Ko=new Gs(1,1),kh=new Th,Vh=new Pd,Hh=new Dh,Oc=[],Bc=[],zc=new Float32Array(16),kc=new Float32Array(9),Vc=new Float32Array(4);function ms(r,t,e){const i=r[0];if(i<=0||i>0)return r;const a=t*e;let l=Oc[a];if(l===void 0&&(l=new Float32Array(a),Oc[a]=l),t!==0){i.toArray(l,0);for(let c=1,u=0;c!==t;++c)u+=e,r[c].toArray(l,u)}return l}function ze(r,t){if(r.length!==t.length)return!1;for(let e=0,i=r.length;e<i;e++)if(r[e]!==t[e])return!1;return!0}function ke(r,t){for(let e=0,i=t.length;e<i;e++)r[e]=t[e]}function Jr(r,t){let e=Bc[t];e===void 0&&(e=new Int32Array(t),Bc[t]=e);for(let i=0;i!==t;++i)e[i]=r.allocateTextureUnit();return e}function h_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function u_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2fv(this.addr,t),ke(e,t)}}function d_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;r.uniform3fv(this.addr,t),ke(e,t)}}function f_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4fv(this.addr,t),ke(e,t)}}function p_(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;Vc.set(i),r.uniformMatrix2fv(this.addr,!1,Vc),ke(e,i)}}function m_(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;kc.set(i),r.uniformMatrix3fv(this.addr,!1,kc),ke(e,i)}}function __(r,t){const e=this.cache,i=t.elements;if(i===void 0){if(ze(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(ze(e,i))return;zc.set(i),r.uniformMatrix4fv(this.addr,!1,zc),ke(e,i)}}function g_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function v_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2iv(this.addr,t),ke(e,t)}}function x_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3iv(this.addr,t),ke(e,t)}}function y_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4iv(this.addr,t),ke(e,t)}}function M_(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function S_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;r.uniform2uiv(this.addr,t),ke(e,t)}}function b_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;r.uniform3uiv(this.addr,t),ke(e,t)}}function E_(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;r.uniform4uiv(this.addr,t),ke(e,t)}}function T_(r,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(Ko.compareFunction=e.isReversedDepthBuffer()?cl:ll,l=Ko):l=zh,e.setTexture2D(t||l,a)}function w_(r,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),e.setTexture3D(t||Vh,a)}function A_(r,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),e.setTextureCube(t||Hh,a)}function C_(r,t,e){const i=this.cache,a=e.allocateTextureUnit();i[0]!==a&&(r.uniform1i(this.addr,a),i[0]=a),e.setTexture2DArray(t||kh,a)}function P_(r){switch(r){case 5126:return h_;case 35664:return u_;case 35665:return d_;case 35666:return f_;case 35674:return p_;case 35675:return m_;case 35676:return __;case 5124:case 35670:return g_;case 35667:case 35671:return v_;case 35668:case 35672:return x_;case 35669:case 35673:return y_;case 5125:return M_;case 36294:return S_;case 36295:return b_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return T_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return A_;case 36289:case 36303:case 36311:case 36292:return C_}}function R_(r,t){r.uniform1fv(this.addr,t)}function L_(r,t){const e=ms(t,this.size,2);r.uniform2fv(this.addr,e)}function I_(r,t){const e=ms(t,this.size,3);r.uniform3fv(this.addr,e)}function D_(r,t){const e=ms(t,this.size,4);r.uniform4fv(this.addr,e)}function N_(r,t){const e=ms(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function U_(r,t){const e=ms(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function F_(r,t){const e=ms(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function O_(r,t){r.uniform1iv(this.addr,t)}function B_(r,t){r.uniform2iv(this.addr,t)}function z_(r,t){r.uniform3iv(this.addr,t)}function k_(r,t){r.uniform4iv(this.addr,t)}function V_(r,t){r.uniform1uiv(this.addr,t)}function H_(r,t){r.uniform2uiv(this.addr,t)}function G_(r,t){r.uniform3uiv(this.addr,t)}function W_(r,t){r.uniform4uiv(this.addr,t)}function X_(r,t,e){const i=this.cache,a=t.length,l=Jr(e,a);ze(i,l)||(r.uniform1iv(this.addr,l),ke(i,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=Ko:c=zh;for(let u=0;u!==a;++u)e.setTexture2D(t[u]||c,l[u])}function Z_(r,t,e){const i=this.cache,a=t.length,l=Jr(e,a);ze(i,l)||(r.uniform1iv(this.addr,l),ke(i,l));for(let c=0;c!==a;++c)e.setTexture3D(t[c]||Vh,l[c])}function q_(r,t,e){const i=this.cache,a=t.length,l=Jr(e,a);ze(i,l)||(r.uniform1iv(this.addr,l),ke(i,l));for(let c=0;c!==a;++c)e.setTextureCube(t[c]||Hh,l[c])}function Y_(r,t,e){const i=this.cache,a=t.length,l=Jr(e,a);ze(i,l)||(r.uniform1iv(this.addr,l),ke(i,l));for(let c=0;c!==a;++c)e.setTexture2DArray(t[c]||kh,l[c])}function j_(r){switch(r){case 5126:return R_;case 35664:return L_;case 35665:return I_;case 35666:return D_;case 35674:return N_;case 35675:return U_;case 35676:return F_;case 5124:case 35670:return O_;case 35667:case 35671:return B_;case 35668:case 35672:return z_;case 35669:case 35673:return k_;case 5125:return V_;case 36294:return H_;case 36295:return G_;case 36296:return W_;case 35678:case 36198:case 36298:case 36306:case 35682:return X_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}class K_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=P_(e.type)}}class J_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=j_(e.type)}}class $_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const u=a[l];u.setValue(t,e[u.id],i)}}}const $a=/(\w+)(\])?(\[|\.)?/g;function Hc(r,t){r.seq.push(t),r.map[t.id]=t}function Q_(r,t,e){const i=r.name,a=i.length;for($a.lastIndex=0;;){const l=$a.exec(i),c=$a.lastIndex;let u=l[1];const d=l[2]==="]",f=l[3];if(d&&(u=u|0),f===void 0||f==="["&&c+2===a){Hc(e,f===void 0?new K_(u,r,t):new J_(u,r,t));break}else{let _=e.map[u];_===void 0&&(_=new $_(u),Hc(e,_)),e=_}}}class Vr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let c=0;c<i;++c){const u=t.getActiveUniform(e,c),d=t.getUniformLocation(e,u.name);Q_(u,d,this)}const a=[],l=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(t,e,i,a){const l=this.map[e];l!==void 0&&l.setValue(t,i,a)}setOptional(t,e,i){const a=e[i];a!==void 0&&this.setValue(t,i,a)}static upload(t,e,i,a){for(let l=0,c=e.length;l!==c;++l){const u=e[l],d=i[u.id];d.needsUpdate!==!1&&u.setValue(t,d.value,a)}}static seqWithValue(t,e){const i=[];for(let a=0,l=t.length;a!==l;++a){const c=t[a];c.id in e&&i.push(c)}return i}}function Gc(r,t,e){const i=r.createShader(t);return r.shaderSource(i,e),r.compileShader(i),i}const tg=37297;let eg=0;function ng(r,t){const e=r.split(`
`),i=[],a=Math.max(t-6,0),l=Math.min(t+6,e.length);for(let c=a;c<l;c++){const u=c+1;i.push(`${u===t?">":" "} ${u}: ${e[c]}`)}return i.join(`
`)}const Wc=new ne;function ig(r){pe._getMatrix(Wc,pe.workingColorSpace,r);const t=`mat3( ${Wc.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(r)){case Gr:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Xc(r,t,e){const i=r.getShaderParameter(t,r.COMPILE_STATUS),l=(r.getShaderInfoLog(t)||"").trim();if(i&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const u=parseInt(c[1]);return e.toUpperCase()+`

`+l+`

`+ng(r.getShaderSource(t),u)}else return l}function sg(r,t){const e=ig(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const rg={[ch]:"Linear",[hh]:"Reinhard",[uh]:"Cineon",[dh]:"ACESFilmic",[ph]:"AgX",[mh]:"Neutral",[fh]:"Custom"};function ag(r,t){const e=rg[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nr=new W;function og(){pe.getLuminanceCoefficients(Nr);const r=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function cg(r){const t=[];for(const e in r){const i=r[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function hg(r,t){const e={},i=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let a=0;a<i;a++){const l=r.getActiveAttrib(t,a),c=l.name;let u=1;l.type===r.FLOAT_MAT2&&(u=2),l.type===r.FLOAT_MAT3&&(u=3),l.type===r.FLOAT_MAT4&&(u=4),e[c]={type:l.type,location:r.getAttribLocation(t,c),locationSize:u}}return e}function Fs(r){return r!==""}function Zc(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ug=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(r){return r.replace(ug,fg)}const dg=new Map;function fg(r,t){let e=ie[t];if(e===void 0){const i=dg.get(t);if(i!==void 0)e=ie[i],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Jo(e)}const pg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(r){return r.replace(pg,mg)}function mg(r,t,e,i){let a="";for(let l=parseInt(t);l<parseInt(e);l++)a+=i.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function jc(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const _g={[Fr]:"SHADOWMAP_TYPE_PCF",[Ns]:"SHADOWMAP_TYPE_VSM"};function gg(r){return _g[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const vg={[Di]:"ENVMAP_TYPE_CUBE",[ls]:"ENVMAP_TYPE_CUBE",[qr]:"ENVMAP_TYPE_CUBE_UV"};function xg(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":vg[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const yg={[ls]:"ENVMAP_MODE_REFRACTION"};function Mg(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":yg[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Sg={[lh]:"ENVMAP_BLENDING_MULTIPLY",[cd]:"ENVMAP_BLENDING_MIX",[hd]:"ENVMAP_BLENDING_ADD"};function bg(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":Sg[r.combine]||"ENVMAP_BLENDING_NONE"}function Eg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Tg(r,t,e,i){const a=r.getContext(),l=e.defines;let c=e.vertexShader,u=e.fragmentShader;const d=gg(e),f=xg(e),g=Mg(e),_=bg(e),v=Eg(e),M=lg(e),T=cg(l),w=a.createProgram();let x,m,P=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T].filter(Fs).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T].filter(Fs).join(`
`),m.length>0&&(m+=`
`)):(x=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+g:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),m=[jc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,T,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.envMap?"#define "+g:"",e.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+d:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Bn?"#define TONE_MAPPING":"",e.toneMapping!==Bn?ie.tonemapping_pars_fragment:"",e.toneMapping!==Bn?ag("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,sg("linearToOutputTexel",e.outputColorSpace),og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),c=Jo(c),c=Zc(c,e),c=qc(c,e),u=Jo(u),u=Zc(u,e),u=qc(u,e),c=Yc(c),u=Yc(u),e.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,x=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",e.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const R=P+x+c,I=P+m+u,D=Gc(a,a.VERTEX_SHADER,R),U=Gc(a,a.FRAGMENT_SHADER,I);a.attachShader(w,D),a.attachShader(w,U),e.index0AttributeName!==void 0?a.bindAttribLocation(w,0,e.index0AttributeName):e.morphTargets===!0&&a.bindAttribLocation(w,0,"position"),a.linkProgram(w);function O(B){if(r.debug.checkShaderErrors){const Z=a.getProgramInfoLog(w)||"",j=a.getShaderInfoLog(D)||"",it=a.getShaderInfoLog(U)||"",rt=Z.trim(),tt=j.trim(),K=it.trim();let J=!0,bt=!0;if(a.getProgramParameter(w,a.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,w,D,U);else{const st=Xc(a,D,"vertex"),dt=Xc(a,U,"fragment");me("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(w,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+rt+`
`+st+`
`+dt)}else rt!==""?$t("WebGLProgram: Program Info Log:",rt):(tt===""||K==="")&&(bt=!1);bt&&(B.diagnostics={runnable:J,programLog:rt,vertexShader:{log:tt,prefix:x},fragmentShader:{log:K,prefix:m}})}a.deleteShader(D),a.deleteShader(U),X=new Vr(a,w),b=hg(a,w)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let b;this.getAttributes=function(){return b===void 0&&O(this),b};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=a.getProgramParameter(w,tg)),A},this.destroy=function(){i.releaseStatesOfProgram(this),a.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=eg++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=D,this.fragmentShader=U,this}let wg=0;class Ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,a=this._getShaderStage(e),l=this._getShaderStage(i),c=this._getShaderCacheForMaterial(t);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Cg(t),e.set(t,i)),i}}class Cg{constructor(t){this.id=wg++,this.code=t,this.usedTimes=0}}function Pg(r,t,e,i,a,l,c){const u=new Ah,d=new Ag,f=new Set,g=[],_=new Map,v=a.logarithmicDepthBuffer;let M=a.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(b){return f.add(b),b===0?"uv":`uv${b}`}function x(b,A,B,Z,j){const it=Z.fog,rt=j.geometry,tt=b.isMeshStandardMaterial?Z.environment:null,K=(b.isMeshStandardMaterial?e:t).get(b.envMap||tt),J=K&&K.mapping===qr?K.image.height:null,bt=T[b.type];b.precision!==null&&(M=a.getMaxPrecision(b.precision),M!==b.precision&&$t("WebGLProgram.getParameters:",b.precision,"not supported, using",M,"instead."));const st=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,dt=st!==void 0?st.length:0;let Ht=0;rt.morphAttributes.position!==void 0&&(Ht=1),rt.morphAttributes.normal!==void 0&&(Ht=2),rt.morphAttributes.color!==void 0&&(Ht=3);let kt,Kt,Vt,q;if(bt){const ge=Un[bt];kt=ge.vertexShader,Kt=ge.fragmentShader}else kt=b.vertexShader,Kt=b.fragmentShader,d.update(b),Vt=d.getVertexShaderID(b),q=d.getFragmentShaderID(b);const ot=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),Jt=j.isInstancedMesh===!0,Lt=j.isBatchedMesh===!0,oe=!!b.map,Ce=!!b.matcap,ae=!!K,_e=!!b.aoMap,ve=!!b.lightMap,Qt=!!b.bumpMap,Pe=!!b.normalMap,F=!!b.displacementMap,Le=!!b.emissiveMap,fe=!!b.metalnessMap,xe=!!b.roughnessMap,Nt=b.anisotropy>0,C=b.clearcoat>0,y=b.dispersion>0,k=b.iridescence>0,nt=b.sheen>0,lt=b.transmission>0,et=Nt&&!!b.anisotropyMap,Ft=C&&!!b.clearcoatMap,gt=C&&!!b.clearcoatNormalMap,It=C&&!!b.clearcoatRoughnessMap,Gt=k&&!!b.iridescenceMap,ht=k&&!!b.iridescenceThicknessMap,vt=nt&&!!b.sheenColorMap,Rt=nt&&!!b.sheenRoughnessMap,Ut=!!b.specularMap,mt=!!b.specularColorMap,ee=!!b.specularIntensityMap,z=lt&&!!b.transmissionMap,Mt=lt&&!!b.thicknessMap,pt=!!b.gradientMap,wt=!!b.alphaMap,ut=b.alphaTest>0,at=!!b.alphaHash,xt=!!b.extensions;let Zt=Bn;b.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Zt=r.toneMapping);const Ee={shaderID:bt,shaderType:b.type,shaderName:b.name,vertexShader:kt,fragmentShader:Kt,defines:b.defines,customVertexShaderID:Vt,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:M,batching:Lt,batchingColor:Lt&&j._colorsTexture!==null,instancing:Jt,instancingColor:Jt&&j.instanceColor!==null,instancingMorph:Jt&&j.morphTexture!==null,outputColorSpace:ot===null?r.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:hs,alphaToCoverage:!!b.alphaToCoverage,map:oe,matcap:Ce,envMap:ae,envMapMode:ae&&K.mapping,envMapCubeUVHeight:J,aoMap:_e,lightMap:ve,bumpMap:Qt,normalMap:Pe,displacementMap:F,emissiveMap:Le,normalMapObjectSpace:Pe&&b.normalMapType===pd,normalMapTangentSpace:Pe&&b.normalMapType===fd,metalnessMap:fe,roughnessMap:xe,anisotropy:Nt,anisotropyMap:et,clearcoat:C,clearcoatMap:Ft,clearcoatNormalMap:gt,clearcoatRoughnessMap:It,dispersion:y,iridescence:k,iridescenceMap:Gt,iridescenceThicknessMap:ht,sheen:nt,sheenColorMap:vt,sheenRoughnessMap:Rt,specularMap:Ut,specularColorMap:mt,specularIntensityMap:ee,transmission:lt,transmissionMap:z,thicknessMap:Mt,gradientMap:pt,opaque:b.transparent===!1&&b.blending===rs&&b.alphaToCoverage===!1,alphaMap:wt,alphaTest:ut,alphaHash:at,combine:b.combine,mapUv:oe&&w(b.map.channel),aoMapUv:_e&&w(b.aoMap.channel),lightMapUv:ve&&w(b.lightMap.channel),bumpMapUv:Qt&&w(b.bumpMap.channel),normalMapUv:Pe&&w(b.normalMap.channel),displacementMapUv:F&&w(b.displacementMap.channel),emissiveMapUv:Le&&w(b.emissiveMap.channel),metalnessMapUv:fe&&w(b.metalnessMap.channel),roughnessMapUv:xe&&w(b.roughnessMap.channel),anisotropyMapUv:et&&w(b.anisotropyMap.channel),clearcoatMapUv:Ft&&w(b.clearcoatMap.channel),clearcoatNormalMapUv:gt&&w(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:It&&w(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&w(b.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&w(b.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&w(b.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&w(b.sheenRoughnessMap.channel),specularMapUv:Ut&&w(b.specularMap.channel),specularColorMapUv:mt&&w(b.specularColorMap.channel),specularIntensityMapUv:ee&&w(b.specularIntensityMap.channel),transmissionMapUv:z&&w(b.transmissionMap.channel),thicknessMapUv:Mt&&w(b.thicknessMap.channel),alphaMapUv:wt&&w(b.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(Pe||Nt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!rt.attributes.uv&&(oe||wt),fog:!!it,useFog:b.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Et,skinning:j.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Ht,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:Zt,decodeVideoTexture:oe&&b.map.isVideoTexture===!0&&pe.getTransfer(b.map.colorSpace)===be,decodeVideoTextureEmissive:Le&&b.emissiveMap.isVideoTexture===!0&&pe.getTransfer(b.emissiveMap.colorSpace)===be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$n,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:xt&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&b.extensions.multiDraw===!0||Lt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ee.vertexUv1s=f.has(1),Ee.vertexUv2s=f.has(2),Ee.vertexUv3s=f.has(3),f.clear(),Ee}function m(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const B in b.defines)A.push(B),A.push(b.defines[B]);return b.isRawShaderMaterial===!1&&(P(A,b),R(A,b),A.push(r.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function P(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function R(b,A){u.disableAll(),A.instancing&&u.enable(0),A.instancingColor&&u.enable(1),A.instancingMorph&&u.enable(2),A.matcap&&u.enable(3),A.envMap&&u.enable(4),A.normalMapObjectSpace&&u.enable(5),A.normalMapTangentSpace&&u.enable(6),A.clearcoat&&u.enable(7),A.iridescence&&u.enable(8),A.alphaTest&&u.enable(9),A.vertexColors&&u.enable(10),A.vertexAlphas&&u.enable(11),A.vertexUv1s&&u.enable(12),A.vertexUv2s&&u.enable(13),A.vertexUv3s&&u.enable(14),A.vertexTangents&&u.enable(15),A.anisotropy&&u.enable(16),A.alphaHash&&u.enable(17),A.batching&&u.enable(18),A.dispersion&&u.enable(19),A.batchingColor&&u.enable(20),A.gradientMap&&u.enable(21),b.push(u.mask),u.disableAll(),A.fog&&u.enable(0),A.useFog&&u.enable(1),A.flatShading&&u.enable(2),A.logarithmicDepthBuffer&&u.enable(3),A.reversedDepthBuffer&&u.enable(4),A.skinning&&u.enable(5),A.morphTargets&&u.enable(6),A.morphNormals&&u.enable(7),A.morphColors&&u.enable(8),A.premultipliedAlpha&&u.enable(9),A.shadowMapEnabled&&u.enable(10),A.doubleSided&&u.enable(11),A.flipSided&&u.enable(12),A.useDepthPacking&&u.enable(13),A.dithering&&u.enable(14),A.transmission&&u.enable(15),A.sheen&&u.enable(16),A.opaque&&u.enable(17),A.pointsUvs&&u.enable(18),A.decodeVideoTexture&&u.enable(19),A.decodeVideoTextureEmissive&&u.enable(20),A.alphaToCoverage&&u.enable(21),b.push(u.mask)}function I(b){const A=T[b.type];let B;if(A){const Z=Un[A];B=Hd.clone(Z.uniforms)}else B=b.uniforms;return B}function D(b,A){let B=_.get(A);return B!==void 0?++B.usedTimes:(B=new Tg(r,A,b,l),g.push(B),_.set(A,B)),B}function U(b){if(--b.usedTimes===0){const A=g.indexOf(b);g[A]=g[g.length-1],g.pop(),_.delete(b.cacheKey),b.destroy()}}function O(b){d.remove(b)}function X(){d.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:I,acquireProgram:D,releaseProgram:U,releaseShaderCache:O,programs:g,dispose:X}}function Rg(){let r=new WeakMap;function t(c){return r.has(c)}function e(c){let u=r.get(c);return u===void 0&&(u={},r.set(c,u)),u}function i(c){r.delete(c)}function a(c,u,d){r.get(c)[u]=d}function l(){r=new WeakMap}return{has:t,get:e,remove:i,update:a,dispose:l}}function Lg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Kc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Jc(){const r=[];let t=0;const e=[],i=[],a=[];function l(){t=0,e.length=0,i.length=0,a.length=0}function c(_,v,M,T,w,x){let m=r[t];return m===void 0?(m={id:_.id,object:_,geometry:v,material:M,groupOrder:T,renderOrder:_.renderOrder,z:w,group:x},r[t]=m):(m.id=_.id,m.object=_,m.geometry=v,m.material=M,m.groupOrder=T,m.renderOrder=_.renderOrder,m.z=w,m.group=x),t++,m}function u(_,v,M,T,w,x){const m=c(_,v,M,T,w,x);M.transmission>0?i.push(m):M.transparent===!0?a.push(m):e.push(m)}function d(_,v,M,T,w,x){const m=c(_,v,M,T,w,x);M.transmission>0?i.unshift(m):M.transparent===!0?a.unshift(m):e.unshift(m)}function f(_,v){e.length>1&&e.sort(_||Lg),i.length>1&&i.sort(v||Kc),a.length>1&&a.sort(v||Kc)}function g(){for(let _=t,v=r.length;_<v;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:e,transmissive:i,transparent:a,init:l,push:u,unshift:d,finish:g,sort:f}}function Ig(){let r=new WeakMap;function t(i,a){const l=r.get(i);let c;return l===void 0?(c=new Jc,r.set(i,[c])):a>=l.length?(c=new Jc,l.push(c)):c=l[a],c}function e(){r=new WeakMap}return{get:t,dispose:e}}function Dg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new W,color:new Me};break;case"SpotLight":e={position:new W,direction:new W,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Me,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":e={color:new Me,position:new W,halfWidth:new W,halfHeight:new W};break}return r[t.id]=e,e}}}function Ng(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Ug=0;function Fg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Og(r){const t=new Dg,e=Ng(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new W);const a=new W,l=new Re,c=new Re;function u(f){let g=0,_=0,v=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let M=0,T=0,w=0,x=0,m=0,P=0,R=0,I=0,D=0,U=0,O=0;f.sort(Fg);for(let b=0,A=f.length;b<A;b++){const B=f[b],Z=B.color,j=B.intensity,it=B.distance;let rt=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===cs?rt=B.shadow.map.texture:rt=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)g+=Z.r*j,_+=Z.g*j,v+=Z.b*j;else if(B.isLightProbe){for(let tt=0;tt<9;tt++)i.probe[tt].addScaledVector(B.sh.coefficients[tt],j);O++}else if(B.isDirectionalLight){const tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,J=e.get(B);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.directionalShadow[M]=J,i.directionalShadowMap[M]=rt,i.directionalShadowMatrix[M]=B.shadow.matrix,P++}i.directional[M]=tt,M++}else if(B.isSpotLight){const tt=t.get(B);tt.position.setFromMatrixPosition(B.matrixWorld),tt.color.copy(Z).multiplyScalar(j),tt.distance=it,tt.coneCos=Math.cos(B.angle),tt.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),tt.decay=B.decay,i.spot[w]=tt;const K=B.shadow;if(B.map&&(i.spotLightMap[D]=B.map,D++,K.updateMatrices(B),B.castShadow&&U++),i.spotLightMatrix[w]=K.matrix,B.castShadow){const J=e.get(B);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,i.spotShadow[w]=J,i.spotShadowMap[w]=rt,I++}w++}else if(B.isRectAreaLight){const tt=t.get(B);tt.color.copy(Z).multiplyScalar(j),tt.halfWidth.set(B.width*.5,0,0),tt.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=tt,x++}else if(B.isPointLight){const tt=t.get(B);if(tt.color.copy(B.color).multiplyScalar(B.intensity),tt.distance=B.distance,tt.decay=B.decay,B.castShadow){const K=B.shadow,J=e.get(B);J.shadowIntensity=K.intensity,J.shadowBias=K.bias,J.shadowNormalBias=K.normalBias,J.shadowRadius=K.radius,J.shadowMapSize=K.mapSize,J.shadowCameraNear=K.camera.near,J.shadowCameraFar=K.camera.far,i.pointShadow[T]=J,i.pointShadowMap[T]=rt,i.pointShadowMatrix[T]=B.shadow.matrix,R++}i.point[T]=tt,T++}else if(B.isHemisphereLight){const tt=t.get(B);tt.skyColor.copy(B.color).multiplyScalar(j),tt.groundColor.copy(B.groundColor).multiplyScalar(j),i.hemi[m]=tt,m++}}x>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=St.LTC_FLOAT_1,i.rectAreaLTC2=St.LTC_FLOAT_2):(i.rectAreaLTC1=St.LTC_HALF_1,i.rectAreaLTC2=St.LTC_HALF_2)),i.ambient[0]=g,i.ambient[1]=_,i.ambient[2]=v;const X=i.hash;(X.directionalLength!==M||X.pointLength!==T||X.spotLength!==w||X.rectAreaLength!==x||X.hemiLength!==m||X.numDirectionalShadows!==P||X.numPointShadows!==R||X.numSpotShadows!==I||X.numSpotMaps!==D||X.numLightProbes!==O)&&(i.directional.length=M,i.spot.length=w,i.rectArea.length=x,i.point.length=T,i.hemi.length=m,i.directionalShadow.length=P,i.directionalShadowMap.length=P,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=I,i.spotShadowMap.length=I,i.directionalShadowMatrix.length=P,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=I+D-U,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=O,X.directionalLength=M,X.pointLength=T,X.spotLength=w,X.rectAreaLength=x,X.hemiLength=m,X.numDirectionalShadows=P,X.numPointShadows=R,X.numSpotShadows=I,X.numSpotMaps=D,X.numLightProbes=O,i.version=Ug++)}function d(f,g){let _=0,v=0,M=0,T=0,w=0;const x=g.matrixWorldInverse;for(let m=0,P=f.length;m<P;m++){const R=f[m];if(R.isDirectionalLight){const I=i.directional[_];I.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(x),_++}else if(R.isSpotLight){const I=i.spot[M];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(x),I.direction.setFromMatrixPosition(R.matrixWorld),a.setFromMatrixPosition(R.target.matrixWorld),I.direction.sub(a),I.direction.transformDirection(x),M++}else if(R.isRectAreaLight){const I=i.rectArea[T];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(x),c.identity(),l.copy(R.matrixWorld),l.premultiply(x),c.extractRotation(l),I.halfWidth.set(R.width*.5,0,0),I.halfHeight.set(0,R.height*.5,0),I.halfWidth.applyMatrix4(c),I.halfHeight.applyMatrix4(c),T++}else if(R.isPointLight){const I=i.point[v];I.position.setFromMatrixPosition(R.matrixWorld),I.position.applyMatrix4(x),v++}else if(R.isHemisphereLight){const I=i.hemi[w];I.direction.setFromMatrixPosition(R.matrixWorld),I.direction.transformDirection(x),w++}}}return{setup:u,setupView:d,state:i}}function $c(r){const t=new Og(r),e=[],i=[];function a(g){f.camera=g,e.length=0,i.length=0}function l(g){e.push(g)}function c(g){i.push(g)}function u(){t.setup(e)}function d(g){t.setupView(e,g)}const f={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:a,state:f,setupLights:u,setupLightsView:d,pushLight:l,pushShadow:c}}function Bg(r){let t=new WeakMap;function e(a,l=0){const c=t.get(a);let u;return c===void 0?(u=new $c(r),t.set(a,[u])):l>=c.length?(u=new $c(r),c.push(u)):u=c[l],u}function i(){t=new WeakMap}return{get:e,dispose:i}}const zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
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
}`,Vg=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Hg=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Qc=new Re,Is=new W,Qa=new W;function Gg(r,t,e){let i=new ul;const a=new Se,l=new Se,c=new Ie,u=new ef,d=new nf,f={},g=e.maxTextureSize,_={[mi]:on,[on]:mi,[$n]:$n},v=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:zg,fragmentShader:kg}),M=v.clone();M.defines.HORIZONTAL_PASS=1;const T=new dn;T.setAttribute("position",new Pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new vn(T,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fr;let m=this.type;this.render=function(U,O,X){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;U.type===Wu&&($t("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),U.type=Fr);const b=r.getRenderTarget(),A=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),Z=r.state;Z.setBlending(ti),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const j=m!==this.type;j&&O.traverse(function(it){it.material&&(Array.isArray(it.material)?it.material.forEach(rt=>rt.needsUpdate=!0):it.material.needsUpdate=!0)});for(let it=0,rt=U.length;it<rt;it++){const tt=U[it],K=tt.shadow;if(K===void 0){$t("WebGLShadowMap:",tt,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;a.copy(K.mapSize);const J=K.getFrameExtents();if(a.multiply(J),l.copy(K.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/J.x),a.x=l.x*J.x,K.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/J.y),a.y=l.y*J.y,K.mapSize.y=l.y)),K.map===null||j===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===Ns){if(tt.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new zn(a.x,a.y,{format:cs,type:ni,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),K.map.texture.name=tt.name+".shadowMap",K.map.depthTexture=new Gs(a.x,a.y,Fn),K.map.depthTexture.name=tt.name+".shadowMapDepth",K.map.depthTexture.format=ii,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Xe,K.map.depthTexture.magFilter=Xe}else{tt.isPointLight?(K.map=new Nh(a.x),K.map.depthTexture=new Qd(a.x,kn)):(K.map=new zn(a.x,a.y),K.map.depthTexture=new Gs(a.x,a.y,kn)),K.map.depthTexture.name=tt.name+".shadowMap",K.map.depthTexture.format=ii;const st=r.state.buffers.depth.getReversed();this.type===Fr?(K.map.depthTexture.compareFunction=st?cl:ll,K.map.depthTexture.minFilter=Ye,K.map.depthTexture.magFilter=Ye):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Xe,K.map.depthTexture.magFilter=Xe)}K.camera.updateProjectionMatrix()}const bt=K.map.isWebGLCubeRenderTarget?6:1;for(let st=0;st<bt;st++){if(K.map.isWebGLCubeRenderTarget)r.setRenderTarget(K.map,st),r.clear();else{st===0&&(r.setRenderTarget(K.map),r.clear());const dt=K.getViewport(st);c.set(l.x*dt.x,l.y*dt.y,l.x*dt.z,l.y*dt.w),Z.viewport(c)}if(tt.isPointLight){const dt=K.camera,Ht=K.matrix,kt=tt.distance||dt.far;kt!==dt.far&&(dt.far=kt,dt.updateProjectionMatrix()),Is.setFromMatrixPosition(tt.matrixWorld),dt.position.copy(Is),Qa.copy(dt.position),Qa.add(Vg[st]),dt.up.copy(Hg[st]),dt.lookAt(Qa),dt.updateMatrixWorld(),Ht.makeTranslation(-Is.x,-Is.y,-Is.z),Qc.multiplyMatrices(dt.projectionMatrix,dt.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Qc,dt.coordinateSystem,dt.reversedDepth)}else K.updateMatrices(tt);i=K.getFrustum(),I(O,X,K.camera,tt,this.type)}K.isPointLightShadow!==!0&&this.type===Ns&&P(K,X),K.needsUpdate=!1}m=this.type,x.needsUpdate=!1,r.setRenderTarget(b,A,B)};function P(U,O){const X=t.update(w);v.defines.VSM_SAMPLES!==U.blurSamples&&(v.defines.VSM_SAMPLES=U.blurSamples,M.defines.VSM_SAMPLES=U.blurSamples,v.needsUpdate=!0,M.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new zn(a.x,a.y,{format:cs,type:ni})),v.uniforms.shadow_pass.value=U.map.depthTexture,v.uniforms.resolution.value=U.mapSize,v.uniforms.radius.value=U.radius,r.setRenderTarget(U.mapPass),r.clear(),r.renderBufferDirect(O,null,X,v,w,null),M.uniforms.shadow_pass.value=U.mapPass.texture,M.uniforms.resolution.value=U.mapSize,M.uniforms.radius.value=U.radius,r.setRenderTarget(U.map),r.clear(),r.renderBufferDirect(O,null,X,M,w,null)}function R(U,O,X,b){let A=null;const B=X.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)A=B;else if(A=X.isPointLight===!0?d:u,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=A.uuid,j=O.uuid;let it=f[Z];it===void 0&&(it={},f[Z]=it);let rt=it[j];rt===void 0&&(rt=A.clone(),it[j]=rt,O.addEventListener("dispose",D)),A=rt}if(A.visible=O.visible,A.wireframe=O.wireframe,b===Ns?A.side=O.shadowSide!==null?O.shadowSide:O.side:A.side=O.shadowSide!==null?O.shadowSide:_[O.side],A.alphaMap=O.alphaMap,A.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,A.map=O.map,A.clipShadows=O.clipShadows,A.clippingPlanes=O.clippingPlanes,A.clipIntersection=O.clipIntersection,A.displacementMap=O.displacementMap,A.displacementScale=O.displacementScale,A.displacementBias=O.displacementBias,A.wireframeLinewidth=O.wireframeLinewidth,A.linewidth=O.linewidth,X.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Z=r.properties.get(A);Z.light=X}return A}function I(U,O,X,b,A){if(U.visible===!1)return;if(U.layers.test(O.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&A===Ns)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,U.matrixWorld);const j=t.update(U),it=U.material;if(Array.isArray(it)){const rt=j.groups;for(let tt=0,K=rt.length;tt<K;tt++){const J=rt[tt],bt=it[J.materialIndex];if(bt&&bt.visible){const st=R(U,bt,b,A);U.onBeforeShadow(r,U,O,X,j,st,J),r.renderBufferDirect(X,null,j,st,U,J),U.onAfterShadow(r,U,O,X,j,st,J)}}}else if(it.visible){const rt=R(U,it,b,A);U.onBeforeShadow(r,U,O,X,j,rt,null),r.renderBufferDirect(X,null,j,rt,U,null),U.onAfterShadow(r,U,O,X,j,rt,null)}}const Z=U.children;for(let j=0,it=Z.length;j<it;j++)I(Z[j],O,X,b,A)}function D(U){U.target.removeEventListener("dispose",D);for(const X in f){const b=f[X],A=U.target.uuid;A in b&&(b[A].dispose(),delete b[A])}}}const Wg={[so]:ro,[ao]:co,[oo]:ho,[os]:lo,[ro]:so,[co]:ao,[ho]:oo,[lo]:os};function Xg(r,t){function e(){let z=!1;const Mt=new Ie;let pt=null;const wt=new Ie(0,0,0,0);return{setMask:function(ut){pt!==ut&&!z&&(r.colorMask(ut,ut,ut,ut),pt=ut)},setLocked:function(ut){z=ut},setClear:function(ut,at,xt,Zt,Ee){Ee===!0&&(ut*=Zt,at*=Zt,xt*=Zt),Mt.set(ut,at,xt,Zt),wt.equals(Mt)===!1&&(r.clearColor(ut,at,xt,Zt),wt.copy(Mt))},reset:function(){z=!1,pt=null,wt.set(-1,0,0,0)}}}function i(){let z=!1,Mt=!1,pt=null,wt=null,ut=null;return{setReversed:function(at){if(Mt!==at){const xt=t.get("EXT_clip_control");at?xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.ZERO_TO_ONE_EXT):xt.clipControlEXT(xt.LOWER_LEFT_EXT,xt.NEGATIVE_ONE_TO_ONE_EXT),Mt=at;const Zt=ut;ut=null,this.setClear(Zt)}},getReversed:function(){return Mt},setTest:function(at){at?ot(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(at){pt!==at&&!z&&(r.depthMask(at),pt=at)},setFunc:function(at){if(Mt&&(at=Wg[at]),wt!==at){switch(at){case so:r.depthFunc(r.NEVER);break;case ro:r.depthFunc(r.ALWAYS);break;case ao:r.depthFunc(r.LESS);break;case os:r.depthFunc(r.LEQUAL);break;case oo:r.depthFunc(r.EQUAL);break;case lo:r.depthFunc(r.GEQUAL);break;case co:r.depthFunc(r.GREATER);break;case ho:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}wt=at}},setLocked:function(at){z=at},setClear:function(at){ut!==at&&(Mt&&(at=1-at),r.clearDepth(at),ut=at)},reset:function(){z=!1,pt=null,wt=null,ut=null,Mt=!1}}}function a(){let z=!1,Mt=null,pt=null,wt=null,ut=null,at=null,xt=null,Zt=null,Ee=null;return{setTest:function(ge){z||(ge?ot(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(ge){Mt!==ge&&!z&&(r.stencilMask(ge),Mt=ge)},setFunc:function(ge,sn,xn){(pt!==ge||wt!==sn||ut!==xn)&&(r.stencilFunc(ge,sn,xn),pt=ge,wt=sn,ut=xn)},setOp:function(ge,sn,xn){(at!==ge||xt!==sn||Zt!==xn)&&(r.stencilOp(ge,sn,xn),at=ge,xt=sn,Zt=xn)},setLocked:function(ge){z=ge},setClear:function(ge){Ee!==ge&&(r.clearStencil(ge),Ee=ge)},reset:function(){z=!1,Mt=null,pt=null,wt=null,ut=null,at=null,xt=null,Zt=null,Ee=null}}}const l=new e,c=new i,u=new a,d=new WeakMap,f=new WeakMap;let g={},_={},v=new WeakMap,M=[],T=null,w=!1,x=null,m=null,P=null,R=null,I=null,D=null,U=null,O=new Me(0,0,0),X=0,b=!1,A=null,B=null,Z=null,j=null,it=null;const rt=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let tt=!1,K=0;const J=r.getParameter(r.VERSION);J.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(J)[1]),tt=K>=1):J.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),tt=K>=2);let bt=null,st={};const dt=r.getParameter(r.SCISSOR_BOX),Ht=r.getParameter(r.VIEWPORT),kt=new Ie().fromArray(dt),Kt=new Ie().fromArray(Ht);function Vt(z,Mt,pt,wt){const ut=new Uint8Array(4),at=r.createTexture();r.bindTexture(z,at),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let xt=0;xt<pt;xt++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(Mt,0,r.RGBA,1,1,wt,0,r.RGBA,r.UNSIGNED_BYTE,ut):r.texImage2D(Mt+xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ut);return at}const q={};q[r.TEXTURE_2D]=Vt(r.TEXTURE_2D,r.TEXTURE_2D,1),q[r.TEXTURE_CUBE_MAP]=Vt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[r.TEXTURE_2D_ARRAY]=Vt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),q[r.TEXTURE_3D]=Vt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),u.setClear(0),ot(r.DEPTH_TEST),c.setFunc(os),Qt(!1),Pe(tc),ot(r.CULL_FACE),_e(ti);function ot(z){g[z]!==!0&&(r.enable(z),g[z]=!0)}function Et(z){g[z]!==!1&&(r.disable(z),g[z]=!1)}function Jt(z,Mt){return _[z]!==Mt?(r.bindFramebuffer(z,Mt),_[z]=Mt,z===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Mt),z===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Lt(z,Mt){let pt=M,wt=!1;if(z){pt=v.get(Mt),pt===void 0&&(pt=[],v.set(Mt,pt));const ut=z.textures;if(pt.length!==ut.length||pt[0]!==r.COLOR_ATTACHMENT0){for(let at=0,xt=ut.length;at<xt;at++)pt[at]=r.COLOR_ATTACHMENT0+at;pt.length=ut.length,wt=!0}}else pt[0]!==r.BACK&&(pt[0]=r.BACK,wt=!0);wt&&r.drawBuffers(pt)}function oe(z){return T!==z?(r.useProgram(z),T=z,!0):!1}const Ce={[Pi]:r.FUNC_ADD,[Zu]:r.FUNC_SUBTRACT,[qu]:r.FUNC_REVERSE_SUBTRACT};Ce[Yu]=r.MIN,Ce[ju]=r.MAX;const ae={[Ku]:r.ZERO,[Ju]:r.ONE,[$u]:r.SRC_COLOR,[no]:r.SRC_ALPHA,[sd]:r.SRC_ALPHA_SATURATE,[nd]:r.DST_COLOR,[td]:r.DST_ALPHA,[Qu]:r.ONE_MINUS_SRC_COLOR,[io]:r.ONE_MINUS_SRC_ALPHA,[id]:r.ONE_MINUS_DST_COLOR,[ed]:r.ONE_MINUS_DST_ALPHA,[rd]:r.CONSTANT_COLOR,[ad]:r.ONE_MINUS_CONSTANT_COLOR,[od]:r.CONSTANT_ALPHA,[ld]:r.ONE_MINUS_CONSTANT_ALPHA};function _e(z,Mt,pt,wt,ut,at,xt,Zt,Ee,ge){if(z===ti){w===!0&&(Et(r.BLEND),w=!1);return}if(w===!1&&(ot(r.BLEND),w=!0),z!==Xu){if(z!==x||ge!==b){if((m!==Pi||I!==Pi)&&(r.blendEquation(r.FUNC_ADD),m=Pi,I=Pi),ge)switch(z){case rs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ec:r.blendFunc(r.ONE,r.ONE);break;case nc:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ic:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:me("WebGLState: Invalid blending: ",z);break}else switch(z){case rs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ec:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case nc:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ic:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",z);break}P=null,R=null,D=null,U=null,O.set(0,0,0),X=0,x=z,b=ge}return}ut=ut||Mt,at=at||pt,xt=xt||wt,(Mt!==m||ut!==I)&&(r.blendEquationSeparate(Ce[Mt],Ce[ut]),m=Mt,I=ut),(pt!==P||wt!==R||at!==D||xt!==U)&&(r.blendFuncSeparate(ae[pt],ae[wt],ae[at],ae[xt]),P=pt,R=wt,D=at,U=xt),(Zt.equals(O)===!1||Ee!==X)&&(r.blendColor(Zt.r,Zt.g,Zt.b,Ee),O.copy(Zt),X=Ee),x=z,b=!1}function ve(z,Mt){z.side===$n?Et(r.CULL_FACE):ot(r.CULL_FACE);let pt=z.side===on;Mt&&(pt=!pt),Qt(pt),z.blending===rs&&z.transparent===!1?_e(ti):_e(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),c.setFunc(z.depthFunc),c.setTest(z.depthTest),c.setMask(z.depthWrite),l.setMask(z.colorWrite);const wt=z.stencilWrite;u.setTest(wt),wt&&(u.setMask(z.stencilWriteMask),u.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),u.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Le(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ot(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(z){A!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),A=z)}function Pe(z){z!==Hu?(ot(r.CULL_FACE),z!==B&&(z===tc?r.cullFace(r.BACK):z===Gu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),B=z}function F(z){z!==Z&&(tt&&r.lineWidth(z),Z=z)}function Le(z,Mt,pt){z?(ot(r.POLYGON_OFFSET_FILL),(j!==Mt||it!==pt)&&(r.polygonOffset(Mt,pt),j=Mt,it=pt)):Et(r.POLYGON_OFFSET_FILL)}function fe(z){z?ot(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function xe(z){z===void 0&&(z=r.TEXTURE0+rt-1),bt!==z&&(r.activeTexture(z),bt=z)}function Nt(z,Mt,pt){pt===void 0&&(bt===null?pt=r.TEXTURE0+rt-1:pt=bt);let wt=st[pt];wt===void 0&&(wt={type:void 0,texture:void 0},st[pt]=wt),(wt.type!==z||wt.texture!==Mt)&&(bt!==pt&&(r.activeTexture(pt),bt=pt),r.bindTexture(z,Mt||q[z]),wt.type=z,wt.texture=Mt)}function C(){const z=st[bt];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function y(){try{r.compressedTexImage2D(...arguments)}catch(z){me("WebGLState:",z)}}function k(){try{r.compressedTexImage3D(...arguments)}catch(z){me("WebGLState:",z)}}function nt(){try{r.texSubImage2D(...arguments)}catch(z){me("WebGLState:",z)}}function lt(){try{r.texSubImage3D(...arguments)}catch(z){me("WebGLState:",z)}}function et(){try{r.compressedTexSubImage2D(...arguments)}catch(z){me("WebGLState:",z)}}function Ft(){try{r.compressedTexSubImage3D(...arguments)}catch(z){me("WebGLState:",z)}}function gt(){try{r.texStorage2D(...arguments)}catch(z){me("WebGLState:",z)}}function It(){try{r.texStorage3D(...arguments)}catch(z){me("WebGLState:",z)}}function Gt(){try{r.texImage2D(...arguments)}catch(z){me("WebGLState:",z)}}function ht(){try{r.texImage3D(...arguments)}catch(z){me("WebGLState:",z)}}function vt(z){kt.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),kt.copy(z))}function Rt(z){Kt.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Kt.copy(z))}function Ut(z,Mt){let pt=f.get(Mt);pt===void 0&&(pt=new WeakMap,f.set(Mt,pt));let wt=pt.get(z);wt===void 0&&(wt=r.getUniformBlockIndex(Mt,z.name),pt.set(z,wt))}function mt(z,Mt){const wt=f.get(Mt).get(z);d.get(Mt)!==wt&&(r.uniformBlockBinding(Mt,wt,z.__bindingPointIndex),d.set(Mt,wt))}function ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},bt=null,st={},_={},v=new WeakMap,M=[],T=null,w=!1,x=null,m=null,P=null,R=null,I=null,D=null,U=null,O=new Me(0,0,0),X=0,b=!1,A=null,B=null,Z=null,j=null,it=null,kt.set(0,0,r.canvas.width,r.canvas.height),Kt.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),u.reset()}return{buffers:{color:l,depth:c,stencil:u},enable:ot,disable:Et,bindFramebuffer:Jt,drawBuffers:Lt,useProgram:oe,setBlending:_e,setMaterial:ve,setFlipSided:Qt,setCullFace:Pe,setLineWidth:F,setPolygonOffset:Le,setScissorTest:fe,activeTexture:xe,bindTexture:Nt,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:k,texImage2D:Gt,texImage3D:ht,updateUBOMapping:Ut,uniformBlockBinding:mt,texStorage2D:gt,texStorage3D:It,texSubImage2D:nt,texSubImage3D:lt,compressedTexSubImage2D:et,compressedTexSubImage3D:Ft,scissor:vt,viewport:Rt,reset:ee}}function Zg(r,t,e,i,a,l,c){const u=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Se,g=new WeakMap;let _;const v=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(C,y){return M?new OffscreenCanvas(C,y):Xr("canvas")}function w(C,y,k){let nt=1;const lt=Nt(C);if((lt.width>k||lt.height>k)&&(nt=k/Math.max(lt.width,lt.height)),nt<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const et=Math.floor(nt*lt.width),Ft=Math.floor(nt*lt.height);_===void 0&&(_=T(et,Ft));const gt=y?T(et,Ft):_;return gt.width=et,gt.height=Ft,gt.getContext("2d").drawImage(C,0,0,et,Ft),$t("WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+et+"x"+Ft+")."),gt}else return"data"in C&&$t("WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),C;return C}function x(C){return C.generateMipmaps}function m(C){r.generateMipmap(C)}function P(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function R(C,y,k,nt,lt=!1){if(C!==null){if(r[C]!==void 0)return r[C];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let et=y;if(y===r.RED&&(k===r.FLOAT&&(et=r.R32F),k===r.HALF_FLOAT&&(et=r.R16F),k===r.UNSIGNED_BYTE&&(et=r.R8)),y===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(et=r.R8UI),k===r.UNSIGNED_SHORT&&(et=r.R16UI),k===r.UNSIGNED_INT&&(et=r.R32UI),k===r.BYTE&&(et=r.R8I),k===r.SHORT&&(et=r.R16I),k===r.INT&&(et=r.R32I)),y===r.RG&&(k===r.FLOAT&&(et=r.RG32F),k===r.HALF_FLOAT&&(et=r.RG16F),k===r.UNSIGNED_BYTE&&(et=r.RG8)),y===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(et=r.RG8UI),k===r.UNSIGNED_SHORT&&(et=r.RG16UI),k===r.UNSIGNED_INT&&(et=r.RG32UI),k===r.BYTE&&(et=r.RG8I),k===r.SHORT&&(et=r.RG16I),k===r.INT&&(et=r.RG32I)),y===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(et=r.RGB8UI),k===r.UNSIGNED_SHORT&&(et=r.RGB16UI),k===r.UNSIGNED_INT&&(et=r.RGB32UI),k===r.BYTE&&(et=r.RGB8I),k===r.SHORT&&(et=r.RGB16I),k===r.INT&&(et=r.RGB32I)),y===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(et=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(et=r.RGBA16UI),k===r.UNSIGNED_INT&&(et=r.RGBA32UI),k===r.BYTE&&(et=r.RGBA8I),k===r.SHORT&&(et=r.RGBA16I),k===r.INT&&(et=r.RGBA32I)),y===r.RGB&&(k===r.UNSIGNED_INT_5_9_9_9_REV&&(et=r.RGB9_E5),k===r.UNSIGNED_INT_10F_11F_11F_REV&&(et=r.R11F_G11F_B10F)),y===r.RGBA){const Ft=lt?Gr:pe.getTransfer(nt);k===r.FLOAT&&(et=r.RGBA32F),k===r.HALF_FLOAT&&(et=r.RGBA16F),k===r.UNSIGNED_BYTE&&(et=Ft===be?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function I(C,y){let k;return C?y===null||y===kn||y===Vs?k=r.DEPTH24_STENCIL8:y===Fn?k=r.DEPTH32F_STENCIL8:y===ks&&(k=r.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===kn||y===Vs?k=r.DEPTH_COMPONENT24:y===Fn?k=r.DEPTH_COMPONENT32F:y===ks&&(k=r.DEPTH_COMPONENT16),k}function D(C,y){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xe&&C.minFilter!==Ye?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function U(C){const y=C.target;y.removeEventListener("dispose",U),X(y),y.isVideoTexture&&g.delete(y)}function O(C){const y=C.target;y.removeEventListener("dispose",O),A(y)}function X(C){const y=i.get(C);if(y.__webglInit===void 0)return;const k=C.source,nt=v.get(k);if(nt){const lt=nt[y.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&b(C),Object.keys(nt).length===0&&v.delete(k)}i.remove(C)}function b(C){const y=i.get(C);r.deleteTexture(y.__webglTexture);const k=C.source,nt=v.get(k);delete nt[y.__cacheKey],c.memory.textures--}function A(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(y.__webglFramebuffer[nt]))for(let lt=0;lt<y.__webglFramebuffer[nt].length;lt++)r.deleteFramebuffer(y.__webglFramebuffer[nt][lt]);else r.deleteFramebuffer(y.__webglFramebuffer[nt]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[nt])}else{if(Array.isArray(y.__webglFramebuffer))for(let nt=0;nt<y.__webglFramebuffer.length;nt++)r.deleteFramebuffer(y.__webglFramebuffer[nt]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let nt=0;nt<y.__webglColorRenderbuffer.length;nt++)y.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[nt]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const k=C.textures;for(let nt=0,lt=k.length;nt<lt;nt++){const et=i.get(k[nt]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),c.memory.textures--),i.remove(k[nt])}i.remove(C)}let B=0;function Z(){B=0}function j(){const C=B;return C>=a.maxTextures&&$t("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+a.maxTextures),B+=1,C}function it(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function rt(C,y){const k=i.get(C);if(C.isVideoTexture&&fe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&k.__version!==C.version){const nt=C.image;if(nt===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{q(k,C,y);return}}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+y)}function tt(C,y){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){q(k,C,y);return}else C.isExternalTexture&&(k.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+y)}function K(C,y){const k=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&k.__version!==C.version){q(k,C,y);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+y)}function J(C,y){const k=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&k.__version!==C.version){ot(k,C,y);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+y)}const bt={[po]:r.REPEAT,[Qn]:r.CLAMP_TO_EDGE,[mo]:r.MIRRORED_REPEAT},st={[Xe]:r.NEAREST,[ud]:r.NEAREST_MIPMAP_NEAREST,[fr]:r.NEAREST_MIPMAP_LINEAR,[Ye]:r.LINEAR,[Sa]:r.LINEAR_MIPMAP_NEAREST,[Li]:r.LINEAR_MIPMAP_LINEAR},dt={[md]:r.NEVER,[yd]:r.ALWAYS,[_d]:r.LESS,[ll]:r.LEQUAL,[gd]:r.EQUAL,[cl]:r.GEQUAL,[vd]:r.GREATER,[xd]:r.NOTEQUAL};function Ht(C,y){if(y.type===Fn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ye||y.magFilter===Sa||y.magFilter===fr||y.magFilter===Li||y.minFilter===Ye||y.minFilter===Sa||y.minFilter===fr||y.minFilter===Li)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,bt[y.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,bt[y.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,bt[y.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,st[y.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,dt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Xe||y.minFilter!==fr&&y.minFilter!==Li||y.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function kt(C,y){let k=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",U));const nt=y.source;let lt=v.get(nt);lt===void 0&&(lt={},v.set(nt,lt));const et=it(y);if(et!==C.__cacheKey){lt[et]===void 0&&(lt[et]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,k=!0),lt[et].usedTimes++;const Ft=lt[C.__cacheKey];Ft!==void 0&&(lt[C.__cacheKey].usedTimes--,Ft.usedTimes===0&&b(y)),C.__cacheKey=et,C.__webglTexture=lt[et].texture}return k}function Kt(C,y,k){return Math.floor(Math.floor(C/k)/y)}function Vt(C,y,k,nt){const et=C.updateRanges;if(et.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,k,nt,y.data);else{et.sort((ht,vt)=>ht.start-vt.start);let Ft=0;for(let ht=1;ht<et.length;ht++){const vt=et[Ft],Rt=et[ht],Ut=vt.start+vt.count,mt=Kt(Rt.start,y.width,4),ee=Kt(vt.start,y.width,4);Rt.start<=Ut+1&&mt===ee&&Kt(Rt.start+Rt.count-1,y.width,4)===mt?vt.count=Math.max(vt.count,Rt.start+Rt.count-vt.start):(++Ft,et[Ft]=Rt)}et.length=Ft+1;const gt=r.getParameter(r.UNPACK_ROW_LENGTH),It=r.getParameter(r.UNPACK_SKIP_PIXELS),Gt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let ht=0,vt=et.length;ht<vt;ht++){const Rt=et[ht],Ut=Math.floor(Rt.start/4),mt=Math.ceil(Rt.count/4),ee=Ut%y.width,z=Math.floor(Ut/y.width),Mt=mt,pt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,z),e.texSubImage2D(r.TEXTURE_2D,0,ee,z,Mt,pt,k,nt,y.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,gt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,It),r.pixelStorei(r.UNPACK_SKIP_ROWS,Gt)}}function q(C,y,k){let nt=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=r.TEXTURE_3D);const lt=kt(C,y),et=y.source;e.bindTexture(nt,C.__webglTexture,r.TEXTURE0+k);const Ft=i.get(et);if(et.version!==Ft.__version||lt===!0){e.activeTexture(r.TEXTURE0+k);const gt=pe.getPrimaries(pe.workingColorSpace),It=y.colorSpace===fi?null:pe.getPrimaries(y.colorSpace),Gt=y.colorSpace===fi||gt===It?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let ht=w(y.image,!1,a.maxTextureSize);ht=xe(y,ht);const vt=l.convert(y.format,y.colorSpace),Rt=l.convert(y.type);let Ut=R(y.internalFormat,vt,Rt,y.colorSpace,y.isVideoTexture);Ht(nt,y);let mt;const ee=y.mipmaps,z=y.isVideoTexture!==!0,Mt=Ft.__version===void 0||lt===!0,pt=et.dataReady,wt=D(y,ht);if(y.isDepthTexture)Ut=I(y.format===Ii,y.type),Mt&&(z?e.texStorage2D(r.TEXTURE_2D,1,Ut,ht.width,ht.height):e.texImage2D(r.TEXTURE_2D,0,Ut,ht.width,ht.height,0,vt,Rt,null));else if(y.isDataTexture)if(ee.length>0){z&&Mt&&e.texStorage2D(r.TEXTURE_2D,wt,Ut,ee[0].width,ee[0].height);for(let ut=0,at=ee.length;ut<at;ut++)mt=ee[ut],z?pt&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,mt.width,mt.height,vt,Rt,mt.data):e.texImage2D(r.TEXTURE_2D,ut,Ut,mt.width,mt.height,0,vt,Rt,mt.data);y.generateMipmaps=!1}else z?(Mt&&e.texStorage2D(r.TEXTURE_2D,wt,Ut,ht.width,ht.height),pt&&Vt(y,ht,vt,Rt)):e.texImage2D(r.TEXTURE_2D,0,Ut,ht.width,ht.height,0,vt,Rt,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){z&&Mt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Ut,ee[0].width,ee[0].height,ht.depth);for(let ut=0,at=ee.length;ut<at;ut++)if(mt=ee[ut],y.format!==Cn)if(vt!==null)if(z){if(pt)if(y.layerUpdates.size>0){const xt=Rc(mt.width,mt.height,y.format,y.type);for(const Zt of y.layerUpdates){const Ee=mt.data.subarray(Zt*xt/mt.data.BYTES_PER_ELEMENT,(Zt+1)*xt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,Zt,mt.width,mt.height,1,vt,Ee)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,mt.width,mt.height,ht.depth,vt,mt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ut,Ut,mt.width,mt.height,ht.depth,0,mt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?pt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,ut,0,0,0,mt.width,mt.height,ht.depth,vt,Rt,mt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,ut,Ut,mt.width,mt.height,ht.depth,0,vt,Rt,mt.data)}else{z&&Mt&&e.texStorage2D(r.TEXTURE_2D,wt,Ut,ee[0].width,ee[0].height);for(let ut=0,at=ee.length;ut<at;ut++)mt=ee[ut],y.format!==Cn?vt!==null?z?pt&&e.compressedTexSubImage2D(r.TEXTURE_2D,ut,0,0,mt.width,mt.height,vt,mt.data):e.compressedTexImage2D(r.TEXTURE_2D,ut,Ut,mt.width,mt.height,0,mt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?pt&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,mt.width,mt.height,vt,Rt,mt.data):e.texImage2D(r.TEXTURE_2D,ut,Ut,mt.width,mt.height,0,vt,Rt,mt.data)}else if(y.isDataArrayTexture)if(z){if(Mt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,wt,Ut,ht.width,ht.height,ht.depth),pt)if(y.layerUpdates.size>0){const ut=Rc(ht.width,ht.height,y.format,y.type);for(const at of y.layerUpdates){const xt=ht.data.subarray(at*ut/ht.data.BYTES_PER_ELEMENT,(at+1)*ut/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,at,ht.width,ht.height,1,vt,Rt,xt)}y.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,vt,Rt,ht.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Ut,ht.width,ht.height,ht.depth,0,vt,Rt,ht.data);else if(y.isData3DTexture)z?(Mt&&e.texStorage3D(r.TEXTURE_3D,wt,Ut,ht.width,ht.height,ht.depth),pt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,vt,Rt,ht.data)):e.texImage3D(r.TEXTURE_3D,0,Ut,ht.width,ht.height,ht.depth,0,vt,Rt,ht.data);else if(y.isFramebufferTexture){if(Mt)if(z)e.texStorage2D(r.TEXTURE_2D,wt,Ut,ht.width,ht.height);else{let ut=ht.width,at=ht.height;for(let xt=0;xt<wt;xt++)e.texImage2D(r.TEXTURE_2D,xt,Ut,ut,at,0,vt,Rt,null),ut>>=1,at>>=1}}else if(ee.length>0){if(z&&Mt){const ut=Nt(ee[0]);e.texStorage2D(r.TEXTURE_2D,wt,Ut,ut.width,ut.height)}for(let ut=0,at=ee.length;ut<at;ut++)mt=ee[ut],z?pt&&e.texSubImage2D(r.TEXTURE_2D,ut,0,0,vt,Rt,mt):e.texImage2D(r.TEXTURE_2D,ut,Ut,vt,Rt,mt);y.generateMipmaps=!1}else if(z){if(Mt){const ut=Nt(ht);e.texStorage2D(r.TEXTURE_2D,wt,Ut,ut.width,ut.height)}pt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,Rt,ht)}else e.texImage2D(r.TEXTURE_2D,0,Ut,vt,Rt,ht);x(y)&&m(nt),Ft.__version=et.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ot(C,y,k){if(y.image.length!==6)return;const nt=kt(C,y),lt=y.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+k);const et=i.get(lt);if(lt.version!==et.__version||nt===!0){e.activeTexture(r.TEXTURE0+k);const Ft=pe.getPrimaries(pe.workingColorSpace),gt=y.colorSpace===fi?null:pe.getPrimaries(y.colorSpace),It=y.colorSpace===fi||Ft===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,It);const Gt=y.isCompressedTexture||y.image[0].isCompressedTexture,ht=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let at=0;at<6;at++)!Gt&&!ht?vt[at]=w(y.image[at],!0,a.maxCubemapSize):vt[at]=ht?y.image[at].image:y.image[at],vt[at]=xe(y,vt[at]);const Rt=vt[0],Ut=l.convert(y.format,y.colorSpace),mt=l.convert(y.type),ee=R(y.internalFormat,Ut,mt,y.colorSpace),z=y.isVideoTexture!==!0,Mt=et.__version===void 0||nt===!0,pt=lt.dataReady;let wt=D(y,Rt);Ht(r.TEXTURE_CUBE_MAP,y);let ut;if(Gt){z&&Mt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,ee,Rt.width,Rt.height);for(let at=0;at<6;at++){ut=vt[at].mipmaps;for(let xt=0;xt<ut.length;xt++){const Zt=ut[xt];y.format!==Cn?Ut!==null?z?pt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,0,0,Zt.width,Zt.height,Ut,Zt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,ee,Zt.width,Zt.height,0,Zt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?pt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,0,0,Zt.width,Zt.height,Ut,mt,Zt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt,ee,Zt.width,Zt.height,0,Ut,mt,Zt.data)}}}else{if(ut=y.mipmaps,z&&Mt){ut.length>0&&wt++;const at=Nt(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,wt,ee,at.width,at.height)}for(let at=0;at<6;at++)if(ht){z?pt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,vt[at].width,vt[at].height,Ut,mt,vt[at].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ee,vt[at].width,vt[at].height,0,Ut,mt,vt[at].data);for(let xt=0;xt<ut.length;xt++){const Ee=ut[xt].image[at].image;z?pt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,0,0,Ee.width,Ee.height,Ut,mt,Ee.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,ee,Ee.width,Ee.height,0,Ut,mt,Ee.data)}}else{z?pt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ut,mt,vt[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,ee,Ut,mt,vt[at]);for(let xt=0;xt<ut.length;xt++){const Zt=ut[xt];z?pt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,0,0,Ut,mt,Zt.image[at]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,xt+1,ee,Ut,mt,Zt.image[at])}}}x(y)&&m(r.TEXTURE_CUBE_MAP),et.__version=lt.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Et(C,y,k,nt,lt,et){const Ft=l.convert(k.format,k.colorSpace),gt=l.convert(k.type),It=R(k.internalFormat,Ft,gt,k.colorSpace),Gt=i.get(y),ht=i.get(k);if(ht.__renderTarget=y,!Gt.__hasExternalTextures){const vt=Math.max(1,y.width>>et),Rt=Math.max(1,y.height>>et);lt===r.TEXTURE_3D||lt===r.TEXTURE_2D_ARRAY?e.texImage3D(lt,et,It,vt,Rt,y.depth,0,Ft,gt,null):e.texImage2D(lt,et,It,vt,Rt,0,Ft,gt,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Le(y)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,lt,ht.__webglTexture,0,F(y)):(lt===r.TEXTURE_2D||lt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,lt,ht.__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(C,y,k){if(r.bindRenderbuffer(r.RENDERBUFFER,C),y.depthBuffer){const nt=y.depthTexture,lt=nt&&nt.isDepthTexture?nt.type:null,et=I(y.stencilBuffer,lt),Ft=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Le(y)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(y),et,y.width,y.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(y),et,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,et,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ft,r.RENDERBUFFER,C)}else{const nt=y.textures;for(let lt=0;lt<nt.length;lt++){const et=nt[lt],Ft=l.convert(et.format,et.colorSpace),gt=l.convert(et.type),It=R(et.internalFormat,Ft,gt,et.colorSpace);Le(y)?u.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(y),It,y.width,y.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(y),It,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,It,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Lt(C,y,k){const nt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const lt=i.get(y.depthTexture);if(lt.__renderTarget=y,(!lt.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),nt){if(lt.__webglInit===void 0&&(lt.__webglInit=!0,y.depthTexture.addEventListener("dispose",U)),lt.__webglTexture===void 0){lt.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,lt.__webglTexture),Ht(r.TEXTURE_CUBE_MAP,y.depthTexture);const Gt=l.convert(y.depthTexture.format),ht=l.convert(y.depthTexture.type);let vt;y.depthTexture.format===ii?vt=r.DEPTH_COMPONENT24:y.depthTexture.format===Ii&&(vt=r.DEPTH24_STENCIL8);for(let Rt=0;Rt<6;Rt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Rt,0,vt,y.width,y.height,0,Gt,ht,null)}}else rt(y.depthTexture,0);const et=lt.__webglTexture,Ft=F(y),gt=nt?r.TEXTURE_CUBE_MAP_POSITIVE_X+k:r.TEXTURE_2D,It=y.depthTexture.format===Ii?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===ii)Le(y)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,It,gt,et,0,Ft):r.framebufferTexture2D(r.FRAMEBUFFER,It,gt,et,0);else if(y.depthTexture.format===Ii)Le(y)?u.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,It,gt,et,0,Ft):r.framebufferTexture2D(r.FRAMEBUFFER,It,gt,et,0);else throw new Error("Unknown depthTexture format")}function oe(C){const y=i.get(C),k=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const nt=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),nt){const lt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,nt.removeEventListener("dispose",lt)};nt.addEventListener("dispose",lt),y.__depthDisposeCallback=lt}y.__boundDepthTexture=nt}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let nt=0;nt<6;nt++)Lt(y.__webglFramebuffer[nt],C,nt);else{const nt=C.texture.mipmaps;nt&&nt.length>0?Lt(y.__webglFramebuffer[0],C,0):Lt(y.__webglFramebuffer,C,0)}else if(k){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]===void 0)y.__webglDepthbuffer[nt]=r.createRenderbuffer(),Jt(y.__webglDepthbuffer[nt],C,!1);else{const lt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,lt,r.RENDERBUFFER,et)}}else{const nt=C.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Jt(y.__webglDepthbuffer,C,!1);else{const lt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,lt,r.RENDERBUFFER,et)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ce(C,y,k){const nt=i.get(C);y!==void 0&&Et(nt.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&oe(C)}function ae(C){const y=C.texture,k=i.get(C),nt=i.get(y);C.addEventListener("dispose",O);const lt=C.textures,et=C.isWebGLCubeRenderTarget===!0,Ft=lt.length>1;if(Ft||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=y.version,c.memory.textures++),et){k.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[gt]=[];for(let It=0;It<y.mipmaps.length;It++)k.__webglFramebuffer[gt][It]=r.createFramebuffer()}else k.__webglFramebuffer[gt]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)k.__webglFramebuffer[gt]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Ft)for(let gt=0,It=lt.length;gt<It;gt++){const Gt=i.get(lt[gt]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),c.memory.textures++)}if(C.samples>0&&Le(C)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let gt=0;gt<lt.length;gt++){const It=lt[gt];k.__webglColorRenderbuffer[gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[gt]);const Gt=l.convert(It.format,It.colorSpace),ht=l.convert(It.type),vt=R(It.internalFormat,Gt,ht,It.colorSpace,C.isXRRenderTarget===!0),Rt=F(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Rt,vt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,k.__webglColorRenderbuffer[gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),Jt(k.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),Ht(r.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let It=0;It<y.mipmaps.length;It++)Et(k.__webglFramebuffer[gt][It],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,It);else Et(k.__webglFramebuffer[gt],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(y)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let gt=0,It=lt.length;gt<It;gt++){const Gt=lt[gt],ht=i.get(Gt);let vt=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(vt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(vt,ht.__webglTexture),Ht(vt,Gt),Et(k.__webglFramebuffer,C,Gt,r.COLOR_ATTACHMENT0+gt,vt,0),x(Gt)&&m(vt)}e.unbindTexture()}else{let gt=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(gt=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(gt,nt.__webglTexture),Ht(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let It=0;It<y.mipmaps.length;It++)Et(k.__webglFramebuffer[It],C,y,r.COLOR_ATTACHMENT0,gt,It);else Et(k.__webglFramebuffer,C,y,r.COLOR_ATTACHMENT0,gt,0);x(y)&&m(gt),e.unbindTexture()}C.depthBuffer&&oe(C)}function _e(C){const y=C.textures;for(let k=0,nt=y.length;k<nt;k++){const lt=y[k];if(x(lt)){const et=P(C),Ft=i.get(lt).__webglTexture;e.bindTexture(et,Ft),m(et),e.unbindTexture()}}}const ve=[],Qt=[];function Pe(C){if(C.samples>0){if(Le(C)===!1){const y=C.textures,k=C.width,nt=C.height;let lt=r.COLOR_BUFFER_BIT;const et=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ft=i.get(C),gt=y.length>1;if(gt)for(let Gt=0;Gt<y.length;Gt++)e.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer);const It=C.texture.mipmaps;It&&It.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Gt=0;Gt<y.length;Gt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(lt|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(lt|=r.STENCIL_BUFFER_BIT)),gt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[Gt]);const ht=i.get(y[Gt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ht,0)}r.blitFramebuffer(0,0,k,nt,0,0,k,nt,lt,r.NEAREST),d===!0&&(ve.length=0,Qt.length=0,ve.push(r.COLOR_ATTACHMENT0+Gt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ve.push(et),Qt.push(et),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Qt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),gt)for(let Gt=0;Gt<y.length;Gt++){e.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[Gt]);const ht=i.get(y[Gt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.TEXTURE_2D,ht,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&d){const y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function F(C){return Math.min(a.maxSamples,C.samples)}function Le(C){const y=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function fe(C){const y=c.render.frame;g.get(C)!==y&&(g.set(C,y),C.update())}function xe(C,y){const k=C.colorSpace,nt=C.format,lt=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||k!==hs&&k!==fi&&(pe.getTransfer(k)===be?(nt!==Cn||lt!==un)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",k)),y}function Nt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(f.width=C.naturalWidth||C.width,f.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(f.width=C.displayWidth,f.height=C.displayHeight):(f.width=C.width,f.height=C.height),f}this.allocateTextureUnit=j,this.resetTextureUnits=Z,this.setTexture2D=rt,this.setTexture2DArray=tt,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=Ce,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function qg(r,t){function e(i,a=fi){let l;const c=pe.getTransfer(a);if(i===un)return r.UNSIGNED_BYTE;if(i===il)return r.UNSIGNED_SHORT_4_4_4_4;if(i===sl)return r.UNSIGNED_SHORT_5_5_5_1;if(i===xh)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===yh)return r.UNSIGNED_INT_10F_11F_11F_REV;if(i===gh)return r.BYTE;if(i===vh)return r.SHORT;if(i===ks)return r.UNSIGNED_SHORT;if(i===nl)return r.INT;if(i===kn)return r.UNSIGNED_INT;if(i===Fn)return r.FLOAT;if(i===ni)return r.HALF_FLOAT;if(i===Mh)return r.ALPHA;if(i===Sh)return r.RGB;if(i===Cn)return r.RGBA;if(i===ii)return r.DEPTH_COMPONENT;if(i===Ii)return r.DEPTH_STENCIL;if(i===bh)return r.RED;if(i===rl)return r.RED_INTEGER;if(i===cs)return r.RG;if(i===al)return r.RG_INTEGER;if(i===ol)return r.RGBA_INTEGER;if(i===Or||i===Br||i===zr||i===kr)if(c===be)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(i===Or)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Br)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===zr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===kr)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(i===Or)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Br)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===zr)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===kr)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_o||i===go||i===vo||i===xo)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(i===_o)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===go)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vo)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===xo)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===yo||i===Mo||i===So||i===bo||i===Eo||i===To||i===wo)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(i===yo||i===Mo)return c===be?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(i===So)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(i===bo)return l.COMPRESSED_R11_EAC;if(i===Eo)return l.COMPRESSED_SIGNED_R11_EAC;if(i===To)return l.COMPRESSED_RG11_EAC;if(i===wo)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ao||i===Co||i===Po||i===Ro||i===Lo||i===Io||i===Do||i===No||i===Uo||i===Fo||i===Oo||i===Bo||i===zo||i===ko)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(i===Ao)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Co)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Po)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ro)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lo)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Io)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Do)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===No)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Uo)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Fo)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oo)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bo)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zo)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ko)return c===be?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vo||i===Ho||i===Go)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(i===Vo)return c===be?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ho)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Go)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wo||i===Xo||i===Zo||i===qo)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(i===Wo)return l.COMPRESSED_RED_RGTC1_EXT;if(i===Xo)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Zo)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===qo)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:e}}const Yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jg=`
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

}`;class Kg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new Fh(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Vn({vertexShader:Yg,fragmentShader:jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new vn(new jr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jg extends ps{constructor(t,e){super();const i=this;let a=null,l=1,c=null,u="local-floor",d=1,f=null,g=null,_=null,v=null,M=null,T=null;const w=typeof XRWebGLBinding<"u",x=new Kg,m={},P=e.getContextAttributes();let R=null,I=null;const D=[],U=[],O=new Se;let X=null;const b=new hn;b.viewport=new Ie;const A=new hn;A.viewport=new Ie;const B=[b,A],Z=new of;let j=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ot=D[q];return ot===void 0&&(ot=new Xa,D[q]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(q){let ot=D[q];return ot===void 0&&(ot=new Xa,D[q]=ot),ot.getGripSpace()},this.getHand=function(q){let ot=D[q];return ot===void 0&&(ot=new Xa,D[q]=ot),ot.getHandSpace()};function rt(q){const ot=U.indexOf(q.inputSource);if(ot===-1)return;const Et=D[ot];Et!==void 0&&(Et.update(q.inputSource,q.frame,f||c),Et.dispatchEvent({type:q.type,data:q.inputSource}))}function tt(){a.removeEventListener("select",rt),a.removeEventListener("selectstart",rt),a.removeEventListener("selectend",rt),a.removeEventListener("squeeze",rt),a.removeEventListener("squeezestart",rt),a.removeEventListener("squeezeend",rt),a.removeEventListener("end",tt),a.removeEventListener("inputsourceschange",K);for(let q=0;q<D.length;q++){const ot=U[q];ot!==null&&(U[q]=null,D[q].disconnect(ot))}j=null,it=null,x.reset();for(const q in m)delete m[q];t.setRenderTarget(R),M=null,v=null,_=null,a=null,I=null,Vt.stop(),i.isPresenting=!1,t.setPixelRatio(X),t.setSize(O.width,O.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){l=q,i.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){u=q,i.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||c},this.setReferenceSpace=function(q){f=q},this.getBaseLayer=function(){return v!==null?v:M},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(a,e)),_},this.getFrame=function(){return T},this.getSession=function(){return a},this.setSession=async function(q){if(a=q,a!==null){if(R=t.getRenderTarget(),a.addEventListener("select",rt),a.addEventListener("selectstart",rt),a.addEventListener("selectend",rt),a.addEventListener("squeeze",rt),a.addEventListener("squeezestart",rt),a.addEventListener("squeezeend",rt),a.addEventListener("end",tt),a.addEventListener("inputsourceschange",K),P.xrCompatible!==!0&&await e.makeXRCompatible(),X=t.getPixelRatio(),t.getSize(O),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Jt=null,Lt=null;P.depth&&(Lt=P.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=P.stencil?Ii:ii,Jt=P.stencil?Vs:kn);const oe={colorFormat:e.RGBA8,depthFormat:Lt,scaleFactor:l};_=this.getBinding(),v=_.createProjectionLayer(oe),a.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),I=new zn(v.textureWidth,v.textureHeight,{format:Cn,type:un,depthTexture:new Gs(v.textureWidth,v.textureHeight,Jt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Et={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(a,e,Et),a.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new zn(M.framebufferWidth,M.framebufferHeight,{format:Cn,type:un,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(d),f=null,c=await a.requestReferenceSpace(u),Vt.setContext(a),Vt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(q){for(let ot=0;ot<q.removed.length;ot++){const Et=q.removed[ot],Jt=U.indexOf(Et);Jt>=0&&(U[Jt]=null,D[Jt].disconnect(Et))}for(let ot=0;ot<q.added.length;ot++){const Et=q.added[ot];let Jt=U.indexOf(Et);if(Jt===-1){for(let oe=0;oe<D.length;oe++)if(oe>=U.length){U.push(Et),Jt=oe;break}else if(U[oe]===null){U[oe]=Et,Jt=oe;break}if(Jt===-1)break}const Lt=D[Jt];Lt&&Lt.connect(Et)}}const J=new W,bt=new W;function st(q,ot,Et){J.setFromMatrixPosition(ot.matrixWorld),bt.setFromMatrixPosition(Et.matrixWorld);const Jt=J.distanceTo(bt),Lt=ot.projectionMatrix.elements,oe=Et.projectionMatrix.elements,Ce=Lt[14]/(Lt[10]-1),ae=Lt[14]/(Lt[10]+1),_e=(Lt[9]+1)/Lt[5],ve=(Lt[9]-1)/Lt[5],Qt=(Lt[8]-1)/Lt[0],Pe=(oe[8]+1)/oe[0],F=Ce*Qt,Le=Ce*Pe,fe=Jt/(-Qt+Pe),xe=fe*-Qt;if(ot.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(xe),q.translateZ(fe),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Lt[10]===-1)q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Nt=Ce+fe,C=ae+fe,y=F-xe,k=Le+(Jt-xe),nt=_e*ae/C*Nt,lt=ve*ae/C*Nt;q.projectionMatrix.makePerspective(y,k,nt,lt,Nt,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function dt(q,ot){ot===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ot.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(a===null)return;let ot=q.near,Et=q.far;x.texture!==null&&(x.depthNear>0&&(ot=x.depthNear),x.depthFar>0&&(Et=x.depthFar)),Z.near=A.near=b.near=ot,Z.far=A.far=b.far=Et,(j!==Z.near||it!==Z.far)&&(a.updateRenderState({depthNear:Z.near,depthFar:Z.far}),j=Z.near,it=Z.far),Z.layers.mask=q.layers.mask|6,b.layers.mask=Z.layers.mask&3,A.layers.mask=Z.layers.mask&5;const Jt=q.parent,Lt=Z.cameras;dt(Z,Jt);for(let oe=0;oe<Lt.length;oe++)dt(Lt[oe],Jt);Lt.length===2?st(Z,b,A):Z.projectionMatrix.copy(b.projectionMatrix),Ht(q,Z,Jt)};function Ht(q,ot,Et){Et===null?q.matrix.copy(ot.matrixWorld):(q.matrix.copy(Et.matrixWorld),q.matrix.invert(),q.matrix.multiply(ot.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ot.projectionMatrix),q.projectionMatrixInverse.copy(ot.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Yo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(v===null&&M===null))return d},this.setFoveation=function(q){d=q,v!==null&&(v.fixedFoveation=q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Z)},this.getCameraTexture=function(q){return m[q]};let kt=null;function Kt(q,ot){if(g=ot.getViewerPose(f||c),T=ot,g!==null){const Et=g.views;M!==null&&(t.setRenderTargetFramebuffer(I,M.framebuffer),t.setRenderTarget(I));let Jt=!1;Et.length!==Z.cameras.length&&(Z.cameras.length=0,Jt=!0);for(let ae=0;ae<Et.length;ae++){const _e=Et[ae];let ve=null;if(M!==null)ve=M.getViewport(_e);else{const Pe=_.getViewSubImage(v,_e);ve=Pe.viewport,ae===0&&(t.setRenderTargetTextures(I,Pe.colorTexture,Pe.depthStencilTexture),t.setRenderTarget(I))}let Qt=B[ae];Qt===void 0&&(Qt=new hn,Qt.layers.enable(ae),Qt.viewport=new Ie,B[ae]=Qt),Qt.matrix.fromArray(_e.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(_e.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(ve.x,ve.y,ve.width,ve.height),ae===0&&(Z.matrix.copy(Qt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Jt===!0&&Z.cameras.push(Qt)}const Lt=a.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&w){_=i.getBinding();const ae=_.getDepthInformation(Et[0]);ae&&ae.isValid&&ae.texture&&x.init(ae,a.renderState)}if(Lt&&Lt.includes("camera-access")&&w){t.state.unbindTexture(),_=i.getBinding();for(let ae=0;ae<Et.length;ae++){const _e=Et[ae].camera;if(_e){let ve=m[_e];ve||(ve=new Fh,m[_e]=ve);const Qt=_.getCameraImage(_e);ve.sourceTexture=Qt}}}}for(let Et=0;Et<D.length;Et++){const Jt=U[Et],Lt=D[Et];Jt!==null&&Lt!==void 0&&Lt.update(Jt,ot,f||c)}kt&&kt(q,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),T=null}const Vt=new Bh;Vt.setAnimationLoop(Kt),this.setAnimationLoop=function(q){kt=q},this.dispose=function(){}}}const Ai=new si,$g=new Re;function Qg(r,t){function e(x,m){x.matrixAutoUpdate===!0&&x.updateMatrix(),m.value.copy(x.matrix)}function i(x,m){m.color.getRGB(x.fogColor.value,Lh(r)),m.isFog?(x.fogNear.value=m.near,x.fogFar.value=m.far):m.isFogExp2&&(x.fogDensity.value=m.density)}function a(x,m,P,R,I){m.isMeshBasicMaterial||m.isMeshLambertMaterial?l(x,m):m.isMeshToonMaterial?(l(x,m),_(x,m)):m.isMeshPhongMaterial?(l(x,m),g(x,m)):m.isMeshStandardMaterial?(l(x,m),v(x,m),m.isMeshPhysicalMaterial&&M(x,m,I)):m.isMeshMatcapMaterial?(l(x,m),T(x,m)):m.isMeshDepthMaterial?l(x,m):m.isMeshDistanceMaterial?(l(x,m),w(x,m)):m.isMeshNormalMaterial?l(x,m):m.isLineBasicMaterial?(c(x,m),m.isLineDashedMaterial&&u(x,m)):m.isPointsMaterial?d(x,m,P,R):m.isSpriteMaterial?f(x,m):m.isShadowMaterial?(x.color.value.copy(m.color),x.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function l(x,m){x.opacity.value=m.opacity,m.color&&x.diffuse.value.copy(m.color),m.emissive&&x.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.bumpMap&&(x.bumpMap.value=m.bumpMap,e(m.bumpMap,x.bumpMapTransform),x.bumpScale.value=m.bumpScale,m.side===on&&(x.bumpScale.value*=-1)),m.normalMap&&(x.normalMap.value=m.normalMap,e(m.normalMap,x.normalMapTransform),x.normalScale.value.copy(m.normalScale),m.side===on&&x.normalScale.value.negate()),m.displacementMap&&(x.displacementMap.value=m.displacementMap,e(m.displacementMap,x.displacementMapTransform),x.displacementScale.value=m.displacementScale,x.displacementBias.value=m.displacementBias),m.emissiveMap&&(x.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,x.emissiveMapTransform)),m.specularMap&&(x.specularMap.value=m.specularMap,e(m.specularMap,x.specularMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest);const P=t.get(m),R=P.envMap,I=P.envMapRotation;R&&(x.envMap.value=R,Ai.copy(I),Ai.x*=-1,Ai.y*=-1,Ai.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ai.y*=-1,Ai.z*=-1),x.envMapRotation.value.setFromMatrix4($g.makeRotationFromEuler(Ai)),x.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=m.reflectivity,x.ior.value=m.ior,x.refractionRatio.value=m.refractionRatio),m.lightMap&&(x.lightMap.value=m.lightMap,x.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,x.lightMapTransform)),m.aoMap&&(x.aoMap.value=m.aoMap,x.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,x.aoMapTransform))}function c(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform))}function u(x,m){x.dashSize.value=m.dashSize,x.totalSize.value=m.dashSize+m.gapSize,x.scale.value=m.scale}function d(x,m,P,R){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.size.value=m.size*P,x.scale.value=R*.5,m.map&&(x.map.value=m.map,e(m.map,x.uvTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function f(x,m){x.diffuse.value.copy(m.color),x.opacity.value=m.opacity,x.rotation.value=m.rotation,m.map&&(x.map.value=m.map,e(m.map,x.mapTransform)),m.alphaMap&&(x.alphaMap.value=m.alphaMap,e(m.alphaMap,x.alphaMapTransform)),m.alphaTest>0&&(x.alphaTest.value=m.alphaTest)}function g(x,m){x.specular.value.copy(m.specular),x.shininess.value=Math.max(m.shininess,1e-4)}function _(x,m){m.gradientMap&&(x.gradientMap.value=m.gradientMap)}function v(x,m){x.metalness.value=m.metalness,m.metalnessMap&&(x.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,x.metalnessMapTransform)),x.roughness.value=m.roughness,m.roughnessMap&&(x.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,x.roughnessMapTransform)),m.envMap&&(x.envMapIntensity.value=m.envMapIntensity)}function M(x,m,P){x.ior.value=m.ior,m.sheen>0&&(x.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),x.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(x.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,x.sheenColorMapTransform)),m.sheenRoughnessMap&&(x.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,x.sheenRoughnessMapTransform))),m.clearcoat>0&&(x.clearcoat.value=m.clearcoat,x.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(x.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,x.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(x.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&x.clearcoatNormalScale.value.negate())),m.dispersion>0&&(x.dispersion.value=m.dispersion),m.iridescence>0&&(x.iridescence.value=m.iridescence,x.iridescenceIOR.value=m.iridescenceIOR,x.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(x.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,x.iridescenceMapTransform)),m.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),m.transmission>0&&(x.transmission.value=m.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),m.transmissionMap&&(x.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,x.transmissionMapTransform)),x.thickness.value=m.thickness,m.thicknessMap&&(x.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=m.attenuationDistance,x.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(x.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(x.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=m.specularIntensity,x.specularColor.value.copy(m.specularColor),m.specularColorMap&&(x.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,x.specularColorMapTransform)),m.specularIntensityMap&&(x.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,x.specularIntensityMapTransform))}function T(x,m){m.matcap&&(x.matcap.value=m.matcap)}function w(x,m){const P=t.get(m).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:a}}function tv(r,t,e,i){let a={},l={},c=[];const u=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function d(P,R){const I=R.program;i.uniformBlockBinding(P,I)}function f(P,R){let I=a[P.id];I===void 0&&(T(P),I=g(P),a[P.id]=I,P.addEventListener("dispose",x));const D=R.program;i.updateUBOMapping(P,D);const U=t.render.frame;l[P.id]!==U&&(v(P),l[P.id]=U)}function g(P){const R=_();P.__bindingPointIndex=R;const I=r.createBuffer(),D=P.__size,U=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,D,U),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,R,I),I}function _(){for(let P=0;P<u;P++)if(c.indexOf(P)===-1)return c.push(P),P;return me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(P){const R=a[P.id],I=P.uniforms,D=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,R);for(let U=0,O=I.length;U<O;U++){const X=Array.isArray(I[U])?I[U]:[I[U]];for(let b=0,A=X.length;b<A;b++){const B=X[b];if(M(B,U,b,D)===!0){const Z=B.__offset,j=Array.isArray(B.value)?B.value:[B.value];let it=0;for(let rt=0;rt<j.length;rt++){const tt=j[rt],K=w(tt);typeof tt=="number"||typeof tt=="boolean"?(B.__data[0]=tt,r.bufferSubData(r.UNIFORM_BUFFER,Z+it,B.__data)):tt.isMatrix3?(B.__data[0]=tt.elements[0],B.__data[1]=tt.elements[1],B.__data[2]=tt.elements[2],B.__data[3]=0,B.__data[4]=tt.elements[3],B.__data[5]=tt.elements[4],B.__data[6]=tt.elements[5],B.__data[7]=0,B.__data[8]=tt.elements[6],B.__data[9]=tt.elements[7],B.__data[10]=tt.elements[8],B.__data[11]=0):(tt.toArray(B.__data,it),it+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Z,B.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(P,R,I,D){const U=P.value,O=R+"_"+I;if(D[O]===void 0)return typeof U=="number"||typeof U=="boolean"?D[O]=U:D[O]=U.clone(),!0;{const X=D[O];if(typeof U=="number"||typeof U=="boolean"){if(X!==U)return D[O]=U,!0}else if(X.equals(U)===!1)return X.copy(U),!0}return!1}function T(P){const R=P.uniforms;let I=0;const D=16;for(let O=0,X=R.length;O<X;O++){const b=Array.isArray(R[O])?R[O]:[R[O]];for(let A=0,B=b.length;A<B;A++){const Z=b[A],j=Array.isArray(Z.value)?Z.value:[Z.value];for(let it=0,rt=j.length;it<rt;it++){const tt=j[it],K=w(tt),J=I%D,bt=J%K.boundary,st=J+bt;I+=bt,st!==0&&D-st<K.storage&&(I+=D-st),Z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=I,I+=K.storage}}}const U=I%D;return U>0&&(I+=D-U),P.__size=I,P.__cache={},this}function w(P){const R={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(R.boundary=4,R.storage=4):P.isVector2?(R.boundary=8,R.storage=8):P.isVector3||P.isColor?(R.boundary=16,R.storage=12):P.isVector4?(R.boundary=16,R.storage=16):P.isMatrix3?(R.boundary=48,R.storage=48):P.isMatrix4?(R.boundary=64,R.storage=64):P.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):$t("WebGLRenderer: Unsupported uniform value type.",P),R}function x(P){const R=P.target;R.removeEventListener("dispose",x);const I=c.indexOf(R.__bindingPointIndex);c.splice(I,1),r.deleteBuffer(a[R.id]),delete a[R.id],delete l[R.id]}function m(){for(const P in a)r.deleteBuffer(a[P]);c=[],a={},l={}}return{bind:d,update:f,dispose:m}}const ev=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Nn=null;function nv(){return Nn===null&&(Nn=new Yd(ev,16,16,cs,ni),Nn.name="DFG_LUT",Nn.minFilter=Ye,Nn.magFilter=Ye,Nn.wrapS=Qn,Nn.wrapT=Qn,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}class iv{constructor(t={}){const{canvas:e=Md(),context:i=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:v=!1,outputBufferType:M=un}=t;this.isWebGLRenderer=!0;let T;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=i.getContextAttributes().alpha}else T=c;const w=M,x=new Set([ol,al,rl]),m=new Set([un,kn,ks,Vs,il,sl]),P=new Uint32Array(4),R=new Int32Array(4);let I=null,D=null;const U=[],O=[];let X=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let A=!1;this._outputColorSpace=gn;let B=0,Z=0,j=null,it=-1,rt=null;const tt=new Ie,K=new Ie;let J=null;const bt=new Me(0);let st=0,dt=e.width,Ht=e.height,kt=1,Kt=null,Vt=null;const q=new Ie(0,0,dt,Ht),ot=new Ie(0,0,dt,Ht);let Et=!1;const Jt=new ul;let Lt=!1,oe=!1;const Ce=new Re,ae=new W,_e=new Ie,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Pe(){return j===null?kt:1}let F=i;function Le(E,V){return e.getContext(E,V)}try{const E={alpha:!0,depth:a,stencil:l,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${el}`),e.addEventListener("webglcontextlost",Zt,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",ge,!1),F===null){const V="webgl2";if(F=Le(V,E),F===null)throw Le(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw me("WebGLRenderer: "+E.message),E}let fe,xe,Nt,C,y,k,nt,lt,et,Ft,gt,It,Gt,ht,vt,Rt,Ut,mt,ee,z,Mt,pt,wt,ut;function at(){fe=new n_(F),fe.init(),pt=new qg(F,fe),xe=new qm(F,fe,t,pt),Nt=new Xg(F,fe),xe.reversedDepthBuffer&&v&&Nt.buffers.depth.setReversed(!0),C=new r_(F),y=new Rg,k=new Zg(F,fe,Nt,y,xe,pt,C),nt=new jm(b),lt=new e_(b),et=new cf(F),wt=new Xm(F,et),Ft=new i_(F,et,C,wt),gt=new o_(F,Ft,et,C),ee=new a_(F,xe,k),Rt=new Ym(y),It=new Pg(b,nt,lt,fe,xe,wt,Rt),Gt=new Qg(b,y),ht=new Ig,vt=new Bg(fe),mt=new Wm(b,nt,lt,Nt,gt,T,d),Ut=new Gg(b,gt,xe),ut=new tv(F,C,xe,Nt),z=new Zm(F,fe,C),Mt=new s_(F,fe,C),C.programs=It.programs,b.capabilities=xe,b.extensions=fe,b.properties=y,b.renderLists=ht,b.shadowMap=Ut,b.state=Nt,b.info=C}at(),w!==un&&(X=new c_(w,e.width,e.height,a,l));const xt=new Jg(b,F);this.xr=xt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=fe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=fe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return kt},this.setPixelRatio=function(E){E!==void 0&&(kt=E,this.setSize(dt,Ht,!1))},this.getSize=function(E){return E.set(dt,Ht)},this.setSize=function(E,V,Q=!0){if(xt.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}dt=E,Ht=V,e.width=Math.floor(E*kt),e.height=Math.floor(V*kt),Q===!0&&(e.style.width=E+"px",e.style.height=V+"px"),X!==null&&X.setSize(e.width,e.height),this.setViewport(0,0,E,V)},this.getDrawingBufferSize=function(E){return E.set(dt*kt,Ht*kt).floor()},this.setDrawingBufferSize=function(E,V,Q){dt=E,Ht=V,kt=Q,e.width=Math.floor(E*Q),e.height=Math.floor(V*Q),this.setViewport(0,0,E,V)},this.setEffects=function(E){if(w===un){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let V=0;V<E.length;V++)if(E[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}X.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(tt)},this.getViewport=function(E){return E.copy(q)},this.setViewport=function(E,V,Q,Y){E.isVector4?q.set(E.x,E.y,E.z,E.w):q.set(E,V,Q,Y),Nt.viewport(tt.copy(q).multiplyScalar(kt).round())},this.getScissor=function(E){return E.copy(ot)},this.setScissor=function(E,V,Q,Y){E.isVector4?ot.set(E.x,E.y,E.z,E.w):ot.set(E,V,Q,Y),Nt.scissor(K.copy(ot).multiplyScalar(kt).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(E){Nt.setScissorTest(Et=E)},this.setOpaqueSort=function(E){Kt=E},this.setTransparentSort=function(E){Vt=E},this.getClearColor=function(E){return E.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(E=!0,V=!0,Q=!0){let Y=0;if(E){let H=!1;if(j!==null){const _t=j.texture.format;H=x.has(_t)}if(H){const _t=j.texture.type,Ct=m.has(_t),yt=mt.getClearColor(),Pt=mt.getClearAlpha(),ft=yt.r,Tt=yt.g,Bt=yt.b;Ct?(P[0]=ft,P[1]=Tt,P[2]=Bt,P[3]=Pt,F.clearBufferuiv(F.COLOR,0,P)):(R[0]=ft,R[1]=Tt,R[2]=Bt,R[3]=Pt,F.clearBufferiv(F.COLOR,0,R))}else Y|=F.COLOR_BUFFER_BIT}V&&(Y|=F.DEPTH_BUFFER_BIT),Q&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Zt,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",ge,!1),mt.dispose(),ht.dispose(),vt.dispose(),y.dispose(),nt.dispose(),lt.dispose(),gt.dispose(),wt.dispose(),ut.dispose(),It.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Ot),xt.removeEventListener("sessionend",gs),Rn.stop()};function Zt(E){E.preventDefault(),lc("WebGLRenderer: Context Lost."),A=!0}function Ee(){lc("WebGLRenderer: Context Restored."),A=!1;const E=C.autoReset,V=Ut.enabled,Q=Ut.autoUpdate,Y=Ut.needsUpdate,H=Ut.type;at(),C.autoReset=E,Ut.enabled=V,Ut.autoUpdate=Q,Ut.needsUpdate=Y,Ut.type=H}function ge(E){me("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function sn(E){const V=E.target;V.removeEventListener("dispose",sn),xn(V)}function xn(E){$r(E),y.remove(E)}function $r(E){const V=y.get(E).programs;V!==void 0&&(V.forEach(function(Q){It.releaseProgram(Q)}),E.isShaderMaterial&&It.releaseShaderCache(E))}this.renderBufferDirect=function(E,V,Q,Y,H,_t){V===null&&(V=ve);const Ct=H.isMesh&&H.matrixWorld.determinant()<0,yt=Qr(E,V,Q,Y,H);Nt.setMaterial(Y,Ct);let Pt=Q.index,ft=1;if(Y.wireframe===!0){if(Pt=Ft.getWireframeAttribute(Q),Pt===void 0)return;ft=2}const Tt=Q.drawRange,Bt=Q.attributes.position;let Yt=Tt.start*ft,le=(Tt.start+Tt.count)*ft;_t!==null&&(Yt=Math.max(Yt,_t.start*ft),le=Math.min(le,(_t.start+_t.count)*ft)),Pt!==null?(Yt=Math.max(Yt,0),le=Math.min(le,Pt.count)):Bt!=null&&(Yt=Math.max(Yt,0),le=Math.min(le,Bt.count));const Te=le-Yt;if(Te<0||Te===1/0)return;wt.setup(H,Y,yt,Q,Pt);let Dt,Wt=z;if(Pt!==null&&(Dt=et.get(Pt),Wt=Mt,Wt.setIndex(Dt)),H.isMesh)Y.wireframe===!0?(Nt.setLineWidth(Y.wireframeLinewidth*Pe()),Wt.setMode(F.LINES)):Wt.setMode(F.TRIANGLES);else if(H.isLine){let zt=Y.linewidth;zt===void 0&&(zt=1),Nt.setLineWidth(zt*Pe()),H.isLineSegments?Wt.setMode(F.LINES):H.isLineLoop?Wt.setMode(F.LINE_LOOP):Wt.setMode(F.LINE_STRIP)}else H.isPoints?Wt.setMode(F.POINTS):H.isSprite&&Wt.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Hs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Wt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))Wt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const zt=H._multiDrawStarts,he=H._multiDrawCounts,jt=H._multiDrawCount,je=Pt?et.get(Pt).bytesPerElement:1,yn=y.get(Y).currentProgram.getUniforms();for(let De=0;De<jt;De++)yn.setValue(F,"_gl_DrawID",De),Wt.render(zt[De]/je,he[De])}else if(H.isInstancedMesh)Wt.renderInstances(Yt,Te,H.count);else if(Q.isInstancedBufferGeometry){const zt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,he=Math.min(Q.instanceCount,zt);Wt.renderInstances(Yt,Te,he)}else Wt.render(Yt,Te)};function js(E,V,Q){E.transparent===!0&&E.side===$n&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,gi(E,V,Q),E.side=mi,E.needsUpdate=!0,gi(E,V,Q),E.side=$n):gi(E,V,Q)}this.compile=function(E,V,Q=null){Q===null&&(Q=E),D=vt.get(Q),D.init(V),O.push(D),Q.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(D.pushLight(H),H.castShadow&&D.pushShadow(H))}),E!==Q&&E.traverseVisible(function(H){H.isLight&&H.layers.test(V.layers)&&(D.pushLight(H),H.castShadow&&D.pushShadow(H))}),D.setupLights();const Y=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _t=H.material;if(_t)if(Array.isArray(_t))for(let Ct=0;Ct<_t.length;Ct++){const yt=_t[Ct];js(yt,Q,H),Y.add(yt)}else js(_t,Q,H),Y.add(_t)}),D=O.pop(),Y},this.compileAsync=function(E,V,Q=null){const Y=this.compile(E,V,Q);return new Promise(H=>{function _t(){if(Y.forEach(function(Ct){y.get(Ct).currentProgram.isReady()&&Y.delete(Ct)}),Y.size===0){H(E);return}setTimeout(_t,10)}fe.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let _s=null;function fn(E){_s&&_s(E)}function Ot(){Rn.stop()}function gs(){Rn.start()}const Rn=new Bh;Rn.setAnimationLoop(fn),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(E){_s=E,xt.setAnimationLoop(E),E===null?Rn.stop():Rn.start()},xt.addEventListener("sessionstart",Ot),xt.addEventListener("sessionend",gs),this.render=function(E,V){if(V!==void 0&&V.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;const Q=xt.enabled===!0&&xt.isPresenting===!0,Y=X!==null&&(j===null||Q)&&X.begin(b,j);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(X===null||X.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(V),V=xt.getCamera()),E.isScene===!0&&E.onBeforeRender(b,E,V,j),D=vt.get(E,O.length),D.init(V),O.push(D),Ce.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Jt.setFromProjectionMatrix(Ce,On,V.reversedDepth),oe=this.localClippingEnabled,Lt=Rt.init(this.clippingPlanes,oe),I=ht.get(E,U.length),I.init(),U.push(I),xt.enabled===!0&&xt.isPresenting===!0){const Ct=b.xr.getDepthSensingMesh();Ct!==null&&Ni(Ct,V,-1/0,b.sortObjects)}Ni(E,V,0,b.sortObjects),I.finish(),b.sortObjects===!0&&I.sort(Kt,Vt),Qt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,Qt&&mt.addToRenderList(I,E),this.info.render.frame++,Lt===!0&&Rt.beginShadows();const H=D.state.shadowsArray;if(Ut.render(H,E,V),Lt===!0&&Rt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&X.hasRenderPass())===!1){const Ct=I.opaque,yt=I.transmissive;if(D.setupLights(),V.isArrayCamera){const Pt=V.cameras;if(yt.length>0)for(let ft=0,Tt=Pt.length;ft<Tt;ft++){const Bt=Pt[ft];Ui(Ct,yt,E,Bt)}Qt&&mt.render(E);for(let ft=0,Tt=Pt.length;ft<Tt;ft++){const Bt=Pt[ft];vs(I,E,Bt,Bt.viewport)}}else yt.length>0&&Ui(Ct,yt,E,V),Qt&&mt.render(E),vs(I,E,V)}j!==null&&Z===0&&(k.updateMultisampleRenderTarget(j),k.updateRenderTargetMipmap(j)),Y&&X.end(b),E.isScene===!0&&E.onAfterRender(b,E,V),wt.resetDefaultState(),it=-1,rt=null,O.pop(),O.length>0?(D=O[O.length-1],Lt===!0&&Rt.setGlobalState(b.clippingPlanes,D.state.camera)):D=null,U.pop(),U.length>0?I=U[U.length-1]:I=null};function Ni(E,V,Q,Y){if(E.visible===!1)return;if(E.layers.test(V.layers)){if(E.isGroup)Q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(V);else if(E.isLight)D.pushLight(E),E.castShadow&&D.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Jt.intersectsSprite(E)){Y&&_e.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ce);const Ct=gt.update(E),yt=E.material;yt.visible&&I.push(E,Ct,yt,Q,_e.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Jt.intersectsObject(E))){const Ct=gt.update(E),yt=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),_e.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),_e.copy(Ct.boundingSphere.center)),_e.applyMatrix4(E.matrixWorld).applyMatrix4(Ce)),Array.isArray(yt)){const Pt=Ct.groups;for(let ft=0,Tt=Pt.length;ft<Tt;ft++){const Bt=Pt[ft],Yt=yt[Bt.materialIndex];Yt&&Yt.visible&&I.push(E,Ct,Yt,Q,_e.z,Bt)}}else yt.visible&&I.push(E,Ct,yt,Q,_e.z,null)}}const _t=E.children;for(let Ct=0,yt=_t.length;Ct<yt;Ct++)Ni(_t[Ct],V,Q,Y)}function vs(E,V,Q,Y){const{opaque:H,transmissive:_t,transparent:Ct}=E;D.setupLightsView(Q),Lt===!0&&Rt.setGlobalState(b.clippingPlanes,Q),Y&&Nt.viewport(tt.copy(Y)),H.length>0&&_i(H,V,Q),_t.length>0&&_i(_t,V,Q),Ct.length>0&&_i(Ct,V,Q),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function Ui(E,V,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(D.state.transmissionRenderTarget[Y.id]===void 0){const Yt=fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float");D.state.transmissionRenderTarget[Y.id]=new zn(1,1,{generateMipmaps:!0,type:Yt?ni:un,minFilter:Li,samples:xe.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace})}const _t=D.state.transmissionRenderTarget[Y.id],Ct=Y.viewport||tt;_t.setSize(Ct.z*b.transmissionResolutionScale,Ct.w*b.transmissionResolutionScale);const yt=b.getRenderTarget(),Pt=b.getActiveCubeFace(),ft=b.getActiveMipmapLevel();b.setRenderTarget(_t),b.getClearColor(bt),st=b.getClearAlpha(),st<1&&b.setClearColor(16777215,.5),b.clear(),Qt&&mt.render(Q);const Tt=b.toneMapping;b.toneMapping=Bn;const Bt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),D.setupLightsView(Y),Lt===!0&&Rt.setGlobalState(b.clippingPlanes,Y),_i(E,Q,Y),k.updateMultisampleRenderTarget(_t),k.updateRenderTargetMipmap(_t),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let le=0,Te=V.length;le<Te;le++){const Dt=V[le],{object:Wt,geometry:zt,material:he,group:jt}=Dt;if(he.side===$n&&Wt.layers.test(Y.layers)){const je=he.side;he.side=on,he.needsUpdate=!0,Hn(Wt,Q,Y,zt,he,jt),he.side=je,he.needsUpdate=!0,Yt=!0}}Yt===!0&&(k.updateMultisampleRenderTarget(_t),k.updateRenderTargetMipmap(_t))}b.setRenderTarget(yt,Pt,ft),b.setClearColor(bt,st),Bt!==void 0&&(Y.viewport=Bt),b.toneMapping=Tt}function _i(E,V,Q){const Y=V.isScene===!0?V.overrideMaterial:null;for(let H=0,_t=E.length;H<_t;H++){const Ct=E[H],{object:yt,geometry:Pt,group:ft}=Ct;let Tt=Ct.material;Tt.allowOverride===!0&&Y!==null&&(Tt=Y),yt.layers.test(Q.layers)&&Hn(yt,V,Q,Pt,Tt,ft)}}function Hn(E,V,Q,Y,H,_t){E.onBeforeRender(b,V,Q,Y,H,_t),E.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(b,V,Q,Y,E,_t),H.transparent===!0&&H.side===$n&&H.forceSinglePass===!1?(H.side=on,H.needsUpdate=!0,b.renderBufferDirect(Q,V,Y,H,E,_t),H.side=mi,H.needsUpdate=!0,b.renderBufferDirect(Q,V,Y,H,E,_t),H.side=$n):b.renderBufferDirect(Q,V,Y,H,E,_t),E.onAfterRender(b,V,Q,Y,H,_t)}function gi(E,V,Q){V.isScene!==!0&&(V=ve);const Y=y.get(E),H=D.state.lights,_t=D.state.shadowsArray,Ct=H.state.version,yt=It.getParameters(E,H.state,_t,V,Q),Pt=It.getProgramCacheKey(yt);let ft=Y.programs;Y.environment=E.isMeshStandardMaterial?V.environment:null,Y.fog=V.fog,Y.envMap=(E.isMeshStandardMaterial?lt:nt).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?V.environmentRotation:E.envMapRotation,ft===void 0&&(E.addEventListener("dispose",sn),ft=new Map,Y.programs=ft);let Tt=ft.get(Pt);if(Tt!==void 0){if(Y.currentProgram===Tt&&Y.lightsStateVersion===Ct)return Js(E,yt),Tt}else yt.uniforms=It.getUniforms(E),E.onBeforeCompile(yt,b),Tt=It.acquireProgram(yt,Pt),ft.set(Pt,Tt),Y.uniforms=yt.uniforms;const Bt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Bt.clippingPlanes=Rt.uniform),Js(E,yt),Y.needsLights=$s(E),Y.lightsStateVersion=Ct,Y.needsLights&&(Bt.ambientLightColor.value=H.state.ambient,Bt.lightProbe.value=H.state.probe,Bt.directionalLights.value=H.state.directional,Bt.directionalLightShadows.value=H.state.directionalShadow,Bt.spotLights.value=H.state.spot,Bt.spotLightShadows.value=H.state.spotShadow,Bt.rectAreaLights.value=H.state.rectArea,Bt.ltc_1.value=H.state.rectAreaLTC1,Bt.ltc_2.value=H.state.rectAreaLTC2,Bt.pointLights.value=H.state.point,Bt.pointLightShadows.value=H.state.pointShadow,Bt.hemisphereLights.value=H.state.hemi,Bt.directionalShadowMap.value=H.state.directionalShadowMap,Bt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Bt.spotShadowMap.value=H.state.spotShadowMap,Bt.spotLightMatrix.value=H.state.spotLightMatrix,Bt.spotLightMap.value=H.state.spotLightMap,Bt.pointShadowMap.value=H.state.pointShadowMap,Bt.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=Tt,Y.uniformsList=null,Tt}function Ks(E){if(E.uniformsList===null){const V=E.currentProgram.getUniforms();E.uniformsList=Vr.seqWithValue(V.seq,E.uniforms)}return E.uniformsList}function Js(E,V){const Q=y.get(E);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function Qr(E,V,Q,Y,H){V.isScene!==!0&&(V=ve),k.resetTextureUnits();const _t=V.fog,Ct=Y.isMeshStandardMaterial?V.environment:null,yt=j===null?b.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:hs,Pt=(Y.isMeshStandardMaterial?lt:nt).get(Y.envMap||Ct),ft=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Tt=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Bt=!!Q.morphAttributes.position,Yt=!!Q.morphAttributes.normal,le=!!Q.morphAttributes.color;let Te=Bn;Y.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Te=b.toneMapping);const Dt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Wt=Dt!==void 0?Dt.length:0,zt=y.get(Y),he=D.state.lights;if(Lt===!0&&(oe===!0||E!==rt)){const Be=E===rt&&Y.id===it;Rt.setState(Y,E,Be)}let jt=!1;Y.version===zt.__version?(zt.needsLights&&zt.lightsStateVersion!==he.state.version||zt.outputColorSpace!==yt||H.isBatchedMesh&&zt.batching===!1||!H.isBatchedMesh&&zt.batching===!0||H.isBatchedMesh&&zt.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&zt.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&zt.instancing===!1||!H.isInstancedMesh&&zt.instancing===!0||H.isSkinnedMesh&&zt.skinning===!1||!H.isSkinnedMesh&&zt.skinning===!0||H.isInstancedMesh&&zt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&zt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&zt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&zt.instancingMorph===!1&&H.morphTexture!==null||zt.envMap!==Pt||Y.fog===!0&&zt.fog!==_t||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==Rt.numPlanes||zt.numIntersection!==Rt.numIntersection)||zt.vertexAlphas!==ft||zt.vertexTangents!==Tt||zt.morphTargets!==Bt||zt.morphNormals!==Yt||zt.morphColors!==le||zt.toneMapping!==Te||zt.morphTargetsCount!==Wt)&&(jt=!0):(jt=!0,zt.__version=Y.version);let je=zt.currentProgram;jt===!0&&(je=gi(Y,V,H));let yn=!1,De=!1,we=!1;const ue=je.getUniforms(),Ne=zt.uniforms;if(Nt.useProgram(je.program)&&(yn=!0,De=!0,we=!0),Y.id!==it&&(it=Y.id,De=!0),yn||rt!==E){Nt.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ue.setValue(F,"projectionMatrix",E.projectionMatrix),ue.setValue(F,"viewMatrix",E.matrixWorldInverse);const Ue=ue.map.cameraPosition;Ue!==void 0&&Ue.setValue(F,ae.setFromMatrixPosition(E.matrixWorld)),xe.logarithmicDepthBuffer&&ue.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ue.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),rt!==E&&(rt=E,De=!0,we=!0)}if(zt.needsLights&&(he.state.directionalShadowMap.length>0&&ue.setValue(F,"directionalShadowMap",he.state.directionalShadowMap,k),he.state.spotShadowMap.length>0&&ue.setValue(F,"spotShadowMap",he.state.spotShadowMap,k),he.state.pointShadowMap.length>0&&ue.setValue(F,"pointShadowMap",he.state.pointShadowMap,k)),H.isSkinnedMesh){ue.setOptional(F,H,"bindMatrix"),ue.setOptional(F,H,"bindMatrixInverse");const Be=H.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),ue.setValue(F,"boneTexture",Be.boneTexture,k))}H.isBatchedMesh&&(ue.setOptional(F,H,"batchingTexture"),ue.setValue(F,"batchingTexture",H._matricesTexture,k),ue.setOptional(F,H,"batchingIdTexture"),ue.setValue(F,"batchingIdTexture",H._indirectTexture,k),ue.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&ue.setValue(F,"batchingColorTexture",H._colorsTexture,k));const Ve=Q.morphAttributes;if((Ve.position!==void 0||Ve.normal!==void 0||Ve.color!==void 0)&&ee.update(H,Q,je),(De||zt.receiveShadow!==H.receiveShadow)&&(zt.receiveShadow=H.receiveShadow,ue.setValue(F,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ne.envMap.value=Pt,Ne.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&V.environment!==null&&(Ne.envMapIntensity.value=V.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=nv()),De&&(ue.setValue(F,"toneMappingExposure",b.toneMappingExposure),zt.needsLights&&ta(Ne,we),_t&&Y.fog===!0&&Gt.refreshFogUniforms(Ne,_t),Gt.refreshMaterialUniforms(Ne,Y,kt,Ht,D.state.transmissionRenderTarget[E.id]),Vr.upload(F,Ks(zt),Ne,k)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Vr.upload(F,Ks(zt),Ne,k),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ue.setValue(F,"center",H.center),ue.setValue(F,"modelViewMatrix",H.modelViewMatrix),ue.setValue(F,"normalMatrix",H.normalMatrix),ue.setValue(F,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Be=Y.uniformsGroups;for(let Ue=0,vi=Be.length;Ue<vi;Ue++){const Mn=Be[Ue];ut.update(Mn,je),ut.bind(Mn,je)}}return je}function ta(E,V){E.ambientLightColor.needsUpdate=V,E.lightProbe.needsUpdate=V,E.directionalLights.needsUpdate=V,E.directionalLightShadows.needsUpdate=V,E.pointLights.needsUpdate=V,E.pointLightShadows.needsUpdate=V,E.spotLights.needsUpdate=V,E.spotLightShadows.needsUpdate=V,E.rectAreaLights.needsUpdate=V,E.hemisphereLights.needsUpdate=V}function $s(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(E,V,Q){const Y=y.get(E);Y.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),y.get(E.texture).__webglTexture=V,y.get(E.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,V){const Q=y.get(E);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0};const ea=F.createFramebuffer();this.setRenderTarget=function(E,V=0,Q=0){j=E,B=V,Z=Q;let Y=null,H=!1,_t=!1;if(E){const yt=y.get(E);if(yt.__useDefaultFramebuffer!==void 0){Nt.bindFramebuffer(F.FRAMEBUFFER,yt.__webglFramebuffer),tt.copy(E.viewport),K.copy(E.scissor),J=E.scissorTest,Nt.viewport(tt),Nt.scissor(K),Nt.setScissorTest(J),it=-1;return}else if(yt.__webglFramebuffer===void 0)k.setupRenderTarget(E);else if(yt.__hasExternalTextures)k.rebindTextures(E,y.get(E.texture).__webglTexture,y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Tt=E.depthTexture;if(yt.__boundDepthTexture!==Tt){if(Tt!==null&&y.has(Tt)&&(E.width!==Tt.image.width||E.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");k.setupDepthRenderbuffer(E)}}const Pt=E.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(_t=!0);const ft=y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ft[V])?Y=ft[V][Q]:Y=ft[V],H=!0):E.samples>0&&k.useMultisampledRTT(E)===!1?Y=y.get(E).__webglMultisampledFramebuffer:Array.isArray(ft)?Y=ft[Q]:Y=ft,tt.copy(E.viewport),K.copy(E.scissor),J=E.scissorTest}else tt.copy(q).multiplyScalar(kt).floor(),K.copy(ot).multiplyScalar(kt).floor(),J=Et;if(Q!==0&&(Y=ea),Nt.bindFramebuffer(F.FRAMEBUFFER,Y)&&Nt.drawBuffers(E,Y),Nt.viewport(tt),Nt.scissor(K),Nt.setScissorTest(J),H){const yt=y.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+V,yt.__webglTexture,Q)}else if(_t){const yt=V;for(let Pt=0;Pt<E.textures.length;Pt++){const ft=y.get(E.textures[Pt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Pt,ft.__webglTexture,Q,yt)}}else if(E!==null&&Q!==0){const yt=y.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yt.__webglTexture,Q)}it=-1},this.readRenderTargetPixels=function(E,V,Q,Y,H,_t,Ct,yt=0){if(!(E&&E.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){Nt.bindFramebuffer(F.FRAMEBUFFER,Pt);try{const ft=E.textures[yt],Tt=ft.format,Bt=ft.type;if(!xe.textureFormatReadable(Tt)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!xe.textureTypeReadable(Bt)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=E.width-Y&&Q>=0&&Q<=E.height-H&&(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt),F.readPixels(V,Q,Y,H,pt.convert(Tt),pt.convert(Bt),_t))}finally{const ft=j!==null?y.get(j).__webglFramebuffer:null;Nt.bindFramebuffer(F.FRAMEBUFFER,ft)}}},this.readRenderTargetPixelsAsync=async function(E,V,Q,Y,H,_t,Ct,yt=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt)if(V>=0&&V<=E.width-Y&&Q>=0&&Q<=E.height-H){Nt.bindFramebuffer(F.FRAMEBUFFER,Pt);const ft=E.textures[yt],Tt=ft.format,Bt=ft.type;if(!xe.textureFormatReadable(Tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!xe.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Yt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.bufferData(F.PIXEL_PACK_BUFFER,_t.byteLength,F.STREAM_READ),E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+yt),F.readPixels(V,Q,Y,H,pt.convert(Tt),pt.convert(Bt),0);const le=j!==null?y.get(j).__webglFramebuffer:null;Nt.bindFramebuffer(F.FRAMEBUFFER,le);const Te=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Sd(F,Te,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Yt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,_t),F.deleteBuffer(Yt),F.deleteSync(Te),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,V=null,Q=0){const Y=Math.pow(2,-Q),H=Math.floor(E.image.width*Y),_t=Math.floor(E.image.height*Y),Ct=V!==null?V.x:0,yt=V!==null?V.y:0;k.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,Q,0,0,Ct,yt,H,_t),Nt.unbindTexture()};const Fi=F.createFramebuffer(),na=F.createFramebuffer();this.copyTextureToTexture=function(E,V,Q=null,Y=null,H=0,_t=null){_t===null&&(H!==0?(Hs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_t=H,H=0):_t=0);let Ct,yt,Pt,ft,Tt,Bt,Yt,le,Te;const Dt=E.isCompressedTexture?E.mipmaps[_t]:E.image;if(Q!==null)Ct=Q.max.x-Q.min.x,yt=Q.max.y-Q.min.y,Pt=Q.isBox3?Q.max.z-Q.min.z:1,ft=Q.min.x,Tt=Q.min.y,Bt=Q.isBox3?Q.min.z:0;else{const Ve=Math.pow(2,-H);Ct=Math.floor(Dt.width*Ve),yt=Math.floor(Dt.height*Ve),E.isDataArrayTexture?Pt=Dt.depth:E.isData3DTexture?Pt=Math.floor(Dt.depth*Ve):Pt=1,ft=0,Tt=0,Bt=0}Y!==null?(Yt=Y.x,le=Y.y,Te=Y.z):(Yt=0,le=0,Te=0);const Wt=pt.convert(V.format),zt=pt.convert(V.type);let he;V.isData3DTexture?(k.setTexture3D(V,0),he=F.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(k.setTexture2DArray(V,0),he=F.TEXTURE_2D_ARRAY):(k.setTexture2D(V,0),he=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,V.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,V.unpackAlignment);const jt=F.getParameter(F.UNPACK_ROW_LENGTH),je=F.getParameter(F.UNPACK_IMAGE_HEIGHT),yn=F.getParameter(F.UNPACK_SKIP_PIXELS),De=F.getParameter(F.UNPACK_SKIP_ROWS),we=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Dt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Dt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ft),F.pixelStorei(F.UNPACK_SKIP_ROWS,Tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Bt);const ue=E.isDataArrayTexture||E.isData3DTexture,Ne=V.isDataArrayTexture||V.isData3DTexture;if(E.isDepthTexture){const Ve=y.get(E),Be=y.get(V),Ue=y.get(Ve.__renderTarget),vi=y.get(Be.__renderTarget);Nt.bindFramebuffer(F.READ_FRAMEBUFFER,Ue.__webglFramebuffer),Nt.bindFramebuffer(F.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Mn=0;Mn<Pt;Mn++)ue&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,y.get(E).__webglTexture,H,Bt+Mn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,y.get(V).__webglTexture,_t,Te+Mn)),F.blitFramebuffer(ft,Tt,Ct,yt,Yt,le,Ct,yt,F.DEPTH_BUFFER_BIT,F.NEAREST);Nt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||y.has(E)){const Ve=y.get(E),Be=y.get(V);Nt.bindFramebuffer(F.READ_FRAMEBUFFER,Fi),Nt.bindFramebuffer(F.DRAW_FRAMEBUFFER,na);for(let Ue=0;Ue<Pt;Ue++)ue?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ve.__webglTexture,H,Bt+Ue):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ve.__webglTexture,H),Ne?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Be.__webglTexture,_t,Te+Ue):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Be.__webglTexture,_t),H!==0?F.blitFramebuffer(ft,Tt,Ct,yt,Yt,le,Ct,yt,F.COLOR_BUFFER_BIT,F.NEAREST):Ne?F.copyTexSubImage3D(he,_t,Yt,le,Te+Ue,ft,Tt,Ct,yt):F.copyTexSubImage2D(he,_t,Yt,le,ft,Tt,Ct,yt);Nt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Nt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Ne?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(he,_t,Yt,le,Te,Ct,yt,Pt,Wt,zt,Dt.data):V.isCompressedArrayTexture?F.compressedTexSubImage3D(he,_t,Yt,le,Te,Ct,yt,Pt,Wt,Dt.data):F.texSubImage3D(he,_t,Yt,le,Te,Ct,yt,Pt,Wt,zt,Dt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,_t,Yt,le,Ct,yt,Wt,zt,Dt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,_t,Yt,le,Dt.width,Dt.height,Wt,Dt.data):F.texSubImage2D(F.TEXTURE_2D,_t,Yt,le,Ct,yt,Wt,zt,Dt);F.pixelStorei(F.UNPACK_ROW_LENGTH,jt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,je),F.pixelStorei(F.UNPACK_SKIP_PIXELS,yn),F.pixelStorei(F.UNPACK_SKIP_ROWS,De),F.pixelStorei(F.UNPACK_SKIP_IMAGES,we),_t===0&&V.generateMipmaps&&F.generateMipmap(he),Nt.unbindTexture()},this.initRenderTarget=function(E){y.get(E).__webglFramebuffer===void 0&&k.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?k.setTextureCube(E,0):E.isData3DTexture?k.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?k.setTexture2DArray(E,0):k.setTexture2D(E,0),Nt.unbindTexture()},this.resetState=function(){B=0,Z=0,j=null,Nt.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}class sv{constructor(t,e){this.container=t,this.hal=e,this.scene=new qd,this.camera=new hn(50,t.clientWidth/t.clientHeight,.1,1e3),this.renderer=new iv({alpha:!0,antialias:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight),this.renderer.setPixelRatio(window.devicePixelRatio),t.appendChild(this.renderer.domElement),this.carGroup=new Us,this.scene.add(this.carGroup),this.initCar(),this.initGForceParticles(),this.initLights(),this.camera.position.set(4,3,8),this.camera.lookAt(0,0,0),this.setupBindings(),this.animate(),window.addEventListener("resize",()=>this.onResize())}scene;camera;renderer;carGroup;bodyMesh;headlights=[];particles;particleCount=100;particlePositions;initCar(){const t=new Zr(1.2,3,4,16),e=new zs({color:62463,wireframe:!0,transparent:!0,opacity:.2});this.bodyMesh=new vn(t,e),this.bodyMesh.rotation.z=Math.PI/2,this.carGroup.add(this.bodyMesh);const i=new Zr(.8,2.5,4,8),a=new zs({color:16711765,wireframe:!0,transparent:!0,opacity:.1}),l=new vn(i,a);l.rotation.z=Math.PI/2,this.carGroup.add(l)}initLights(){const t=new Pc(62463,0,10);t.position.set(2,.5,1.2);const e=new Pc(62463,0,10);e.position.set(2,.5,-1.2),this.headlights=[t,e],this.carGroup.add(t),this.carGroup.add(e);const i=new dl(.1,8,8),a=new zs({color:62463,transparent:!0,opacity:0});this.headlights.forEach(l=>{const c=new vn(i,a.clone());l.add(c)})}initGForceParticles(){const t=new dn;this.particlePositions=new Float32Array(this.particleCount*3);for(let i=0;i<this.particleCount;i++)this.particlePositions[i*3]=(Math.random()-.5)*10,this.particlePositions[i*3+1]=(Math.random()-.5)*10,this.particlePositions[i*3+2]=(Math.random()-.5)*10;t.setAttribute("position",new Pn(this.particlePositions,3));const e=new Uh({color:16711765,size:.05,transparent:!0,opacity:.5});this.particles=new $d(t,e),this.scene.add(this.particles)}setupBindings(){en(()=>{const t=this.hal.body.lights.on.value;this.headlights.forEach(e=>{e.intensity=t?15:0,e.children[0].visible=t,e.children[0].material.opacity=t?1:0}),this.bodyMesh.material.color.setHex(t?16777215:62463),this.bodyMesh.material.opacity=t?.6:.2}),en(()=>{const e=this.hal.powertrain.rpm.value/8e3*.05;this.carGroup.position.y=(Math.random()-.5)*e})}animate(){requestAnimationFrame(()=>this.animate());const t=this.hal.powertrain.speed.value;this.carGroup.rotation.y+=.005+t/300*.05;const e=this.hal.motion.accel,i=this.particles.geometry.attributes.position.array;for(let a=0;a<this.particleCount;a++){const l=a*3;i[l]+=(Math.random()-.5)*.1-e.x.value*.01,i[l+1]+=(Math.random()-.5)*.1-e.y.value*.01,i[l+2]+=(Math.random()-.5)*.1,Math.abs(i[l])>5&&(i[l]=(Math.random()-.5)*10),Math.abs(i[l+1])>5&&(i[l+1]=(Math.random()-.5)*10)}this.particles.geometry.attributes.position.needsUpdate=!0,this.renderer.render(this.scene,this.camera)}onResize(){this.container&&(this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight))}}class rv{isListening=qt(!1);lastCommand=qt("");recognition=null;constructor(){if("webkitSpeechRecognition"in window||"SpeechRecognition"in window){const t=window.SpeechRecognition||window.webkitSpeechRecognition;this.recognition=new t,this.recognition.continuous=!0,this.recognition.interimResults=!1,this.recognition.onstart=()=>this.isListening.value=!0,this.recognition.onend=()=>this.isListening.value=!1,this.recognition.onresult=e=>{const i=e.results.length-1,a=e.results[i][0].transcript.trim().toLowerCase();this.lastCommand.value=a,console.log("Voice Command:",a),this.processCommand(a)};try{this.recognition.start()}catch{console.log("Auto-start voice blocked")}}}processCommand(t){t.includes("lights on")}}class av{apps=qt([]);isLoading=qt(!1);constructor(){this.loadApps()}async loadApps(){if(this.isLoading.value=!0,window.Capacitor?.isNative){const{Plugins:t}=window.Capacitor;try{const e=await t.TwahhPlugin.getApps();this.apps.value=e.apps||[]}catch(e){console.error("Failed to load apps from native bridge",e),this.apps.value=[]}}else console.warn("Native Bridge not detected. App list empty."),this.apps.value=[];this.isLoading.value=!1}async launchApp(t){if(window.Capacitor?.isNative){const{Plugins:e}=window.Capacitor;await e.TwahhPlugin.launchApp({package:t})}else console.log(`[Mock] Launching app: ${t}`),alert(`Launching ${t}`)}}class ov{constructor(t){this.appService=t,this.element=document.createElement("div"),this.element.className="grid grid-cols-4 gap-4 p-4 h-full overflow-y-auto content-start",en(()=>{const e=this.appService.apps.value;this.element.innerHTML=`
                <div class="absolute -left-20 top-0 w-96 h-96 bg-neon-magenta/5 blur-[120px] rounded-full"></div>
                <div class="max-w-6xl mx-auto w-full relative z-10">
                    <div class="flex justify-between items-end mb-12">
                         <div>
                            <h2 class="text-5xl font-bold text-white tracking-tighter italic">Application <span class="text-neon-magenta">Nexus</span></h2>
                            <p class="text-white/30 text-[10px] uppercase tracking-[0.5em] mt-2 font-bold">Native & Cloud Services</p>
                         </div>
                         <div class="glass-panel px-6 py-2 rounded-full border-white/10 text-[10px] font-black text-white/50 uppercase tracking-widest">
                            ${e.length} Units Available
                         </div>
                    </div>

                    <div class="grid grid-cols-4 md:grid-cols-6 gap-8">
                        ${e.map((i,a)=>`
                            <button class="flex flex-col items-center gap-4 group transition-all duration-500 animate-float" style="animation-delay: -${a*.7}s" data-package="${i.package}">
                                <div class="w-24 h-24 rounded-4xl bg-gradient-to-tr from-white/10 to-white/5 p-0.5 group-hover:from-neon-magenta group-hover:to-neon-cyan group-hover:shadow-[0_0_30px_rgba(255,0,85,0.3)] transition-all duration-500">
                                    <div class="w-full h-full bg-bg-dark rounded-[1.8rem] flex items-center justify-center text-4xl group-hover:scale-95 transition-transform duration-500">
                                        ${i.icon||"📱"}
                                    </div>
                                </div>
                                <span class="text-xs font-black uppercase tracking-widest text-white/50 group-hover:text-white transition-colors duration-500">${i.name}</span>
                            </button>
                        `).join("")}
                    </div>
                </div>
            `,this.element.querySelectorAll("button[data-package]").forEach(i=>{const a=i.getAttribute("data-package");a&&(i.onclick=()=>this.appService.launchApp(a))})})}element}class lv{activeTab=qt("dashboard");setTab(t){this.activeTab.value=t}}class cv{constructor(t){this.hal=t,this.fetchWeather(),setInterval(()=>this.fetchWeather(),900*1e3)}current=qt({temp:24,condition:"Sunny",location:"San Francisco, CA",forecast:[{day:"Mon",temp:24,icon:"☀️"},{day:"Tue",temp:22,icon:"⛅"},{day:"Wed",temp:19,icon:"🌧️"},{day:"Thu",temp:21,icon:"⛅"},{day:"Fri",temp:25,icon:"☀️"}]});async fetchWeather(){const t=this.hal.motion.location.lat.value||37.7749,e=this.hal.motion.location.lng.value||-122.4194;try{const i=`https://api.open-meteo.com/v1/forecast?latitude=${t}&longitude=${e}&current=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min&timezone=auto`,l=await(await fetch(i)).json();this.current.value={temp:Math.round(l.current.temperature_2m),condition:this.getConditionText(l.current.weather_code),location:`${t.toFixed(2)}, ${e.toFixed(2)}`,forecast:l.daily.time.slice(0,5).map((c,u)=>({day:new Date(c).toLocaleDateString("en-US",{weekday:"short"}),temp:Math.round(l.daily.temperature_2m_max[u]),icon:this.getIcon(l.daily.weather_code[u])}))}}catch(i){console.error("Weather fetch failed",i)}}getConditionText(t){return t===0?"Sunny":t<3?"Partly Cloudy":t<50?"Foggy":t<80?"Rainy":"Stormy"}getIcon(t){return t===0?"☀️":t<3?"⛅":t<50?"🌫️":t<80?"🌧️":"⛈️"}}class hv{constructor(t){this.weather=t,this.element=document.createElement("div"),this.element.className="flex flex-col h-full p-8 gap-8 items-center justify-center",en(()=>{const e=this.weather.current.value;this.element.innerHTML=`
                <div class="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/5 blur-3xl rounded-full"></div>
                <div class="relative z-10 text-center mb-12 animate-float">
                    <div class="text-[10rem] leading-none mb-4 drop-shadow-[0_0_50px_rgba(255,255,255,0.2)]">☀️</div>
                    <div class="text-[12rem] font-bold text-white tracking-tighter leading-none text-glow">${e.temp}<span class="text-4xl align-top ml-2 opacity-50">°</span></div>
                    <div class="text-3xl text-neon-cyan font-black uppercase tracking-[0.5em] mt-4">${e.condition}</div>
                    <div class="text-white/30 font-bold mt-4 uppercase tracking-widest text-xs">📍 ${e.location}</div>
                </div>

                <div class="grid grid-cols-5 gap-6 w-full max-w-4xl px-4 relative z-10">
                    ${e.forecast.map((i,a)=>`
                        <div class="m3-card p-6 flex flex-col items-center gap-4 hover:scale-105 transition-transform duration-500 bg-white/5" style="transition-delay: ${a*50}ms">
                            <span class="text-white/40 text-[10px] font-black uppercase tracking-widest">${i.day}</span>
                            <span class="text-4xl drop-shadow-md">${i.icon}</span>
                            <span class="text-2xl font-bold text-white">${i.temp}°</span>
                            <div class="w-8 h-1 bg-neon-cyan/20 rounded-full mt-2"></div>
                        </div>
                    `).join("")}
                </div>
            `})}element}class uv{constructor(t){this.hal=t,this.audio.addEventListener("timeupdate",()=>{this.currentTime.value=this.audio.currentTime}),this.audio.addEventListener("ended",()=>{this.nextTrack()}),this.audio.addEventListener("loadedmetadata",()=>{this.duration.value=this.audio.duration}),en(()=>{this.hal.system.demoMode.value?this.loadMockLibrary():this.playlist.value=[]}),en(()=>{if(!this.hal.system.demoMode.value){this.isPlaying.value=this.hal.media.isPlaying.value;const e=this.hal.media.nowPlaying.value;if(e){const i=e.split(" - ");this.currentTrack.value={id:"system",title:i[1]||e,artist:i[1]?i[0]:"System Audio",url:"",duration:0}}}})}playlist=qt([]);currentTrack=qt(null);isPlaying=qt(!1);currentTime=qt(0);duration=qt(0);audio=new Audio;loadMockLibrary(){this.playlist.value=[{id:"1",title:"Nightcall",artist:"Kavinsky",url:"",duration:258},{id:"2",title:"Midnight City",artist:"M83",url:"",duration:243},{id:"3",title:"Resonance",artist:"Home",url:"",duration:212}]}async scanLibrary(){this.hal.system.demoMode.value&&this.loadMockLibrary()}playTrack(t){this.currentTrack.value=t,this.isPlaying.value=!0}togglePlay(){if(!this.currentTrack.value&&this.playlist.value.length>0){this.playTrack(this.playlist.value[0]);return}this.isPlaying.value=!this.isPlaying.value,this.isPlaying.value}nextTrack(){const t=this.currentTrack.value;if(!t)return;const e=this.playlist.value.indexOf(t);e>=0&&e<this.playlist.value.length-1?this.playTrack(this.playlist.value[e+1]):this.playTrack(this.playlist.value[0])}prevTrack(){const t=this.currentTrack.value;if(!t)return;const e=this.playlist.value.indexOf(t);e>0&&this.playTrack(this.playlist.value[e-1])}}class dv{constructor(t){this.music=t,this.element=document.createElement("div"),this.element.className="glass-panel p-6 rounded-5xl flex-1 flex flex-col justify-between overflow-hidden relative group animate-float shadow-[0_20px_50px_rgba(0,0,0,0.5)]",en(()=>{const e=this.music.currentTrack.value,i=this.music.isPlaying.value,a=this.music.duration.value>0?this.music.currentTime.value/this.music.duration.value*100:0;this.element.innerHTML=`
                <div class="absolute -right-12 -top-12 w-32 h-32 bg-neon-cyan/10 blur-3xl rounded-full group-hover:bg-neon-cyan/20 transition duration-700"></div>
                
                <h2 class="text-neon-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-4">Media Core</h2>
                
                <div class="flex items-center gap-6 flex-1">
                    <div class="w-20 h-20 rounded-4xl bg-gradient-to-br from-white/10 to-white/5 p-0.5 shadow-2xl relative overflow-hidden">
                        <div class="absolute inset-0 bg-neon-cyan/5 animate-pulse"></div>
                        <div class="w-full h-full bg-bg-dark rounded-[1.8rem] flex items-center justify-center text-4xl">
                            ${e?"🎵":"💿"}
                        </div>
                    </div>
                    <div class="flex-1 overflow-hidden">
                        <div class="text-xl font-bold truncate text-white tracking-tight">${e?e.title:"No Media Active"}</div>
                        <div class="text-sm text-neon-cyan/60 truncate font-medium uppercase tracking-wider mt-1">${e?e.artist:"Waiting for Input"}</div>
                    </div>
                </div>

                <!-- Controls -->
                <div class="flex justify-between items-center mt-6 bg-white/5 p-2 rounded-full border border-white/5">
                    <button id="music-prev" class="p-3 hover:text-neon-cyan transition-all hover:scale-110 active:scale-90">
                        <span class="text-xl">⏮️</span>
                    </button>
                    <button id="music-play" class="w-14 h-14 bg-gradient-to-r from-neon-cyan to-neon-cyan/80 rounded-full text-bg-dark hover:shadow-[0_0_20px_rgba(0,243,255,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
                        <span class="text-2xl translate-x-0.5">${i?"⏸︎":"▶"}</span>
                    </button>
                    <button id="music-next" class="p-3 hover:text-neon-cyan transition-all hover:scale-110 active:scale-90">
                        <span class="text-xl">⏭️</span>
                    </button>
                </div>

                <!-- Progress Bar -->
                <div class="mt-6 px-1">
                    <div class="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div class="h-full bg-gradient-to-r from-neon-cyan via-white to-neon-magenta shadow-[0_0_10px_rgba(0,243,255,0.8)] transition-all duration-300" style="width: ${a}%"></div>
                    </div>
                </div>
            `,this.element.querySelector("#music-prev")?.addEventListener("click",l=>{l.stopPropagation(),this.music.prevTrack()}),this.element.querySelector("#music-play")?.addEventListener("click",l=>{l.stopPropagation(),this.music.togglePlay()}),this.element.querySelector("#music-next")?.addEventListener("click",l=>{l.stopPropagation(),this.music.nextTrack()})})}element}class fv{constructor(t){this.hal=t,this.element=document.createElement("div"),this.element.className="p-6 flex flex-col gap-6 h-full font-sans overflow-y-auto",en(()=>{const e=this.hal.diagnostics,i=e.dtcs.value,a=e.isScanning.value;this.element.innerHTML=`
                <div class="flex justify-between items-center mb-8">
                    <div>
                        <h2 class="text-3xl font-bold text-white tracking-tighter italic">Vitals <span class="text-neon-cyan">& Diagnostics</span></h2>
                        <p class="text-white/30 text-[10px] uppercase tracking-[0.4em] mt-1 font-bold">OBD-II Real-time Telemetry</p>
                    </div>
                    <div class="flex gap-3">
                        <button id="btn-scan" class="glass-btn px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest ${a?"opacity-50 cursor-not-allowed":"text-neon-cyan"} border-neon-cyan/20">
                            ${a?'<span class="animate-pulse">Analyzing...</span>':"Initiate Full Scan"}
                        </button>
                        <button id="btn-clear" class="glass-btn px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-white/40 border-white/5 hover:text-white">
                            Purge Logs
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <!-- Live Stats -->
                    <div class="m3-card p-8 flex flex-col gap-6 relative group overflow-hidden">
                        <div class="absolute -right-16 -bottom-16 w-48 h-48 bg-neon-green/5 blur-3xl rounded-full group-hover:bg-neon-green/10 transition duration-700"></div>
                        <h3 class="text-neon-green text-[10px] font-black uppercase tracking-[0.3em]">Telemetry Flux</h3>
                        
                        <div class="space-y-4">
                            <div class="flex justify-between items-center bg-white/5 p-6 rounded-4xl border border-white/5 hover:border-neon-green/30 transition shadow-inner">
                                <span class="text-white/50 text-sm font-medium italic">Battery Potential</span>
                                <span class="text-4xl font-bold text-neon-green text-glow">${e.voltage.value}<span class="text-sm ml-1 opacity-50">V</span></span>
                            </div>
                            <div class="flex justify-between items-center bg-white/5 p-6 rounded-4xl border border-white/5 hover:border-neon-yellow/30 transition shadow-inner">
                                <span class="text-white/50 text-sm font-medium italic">Thermal Intake</span>
                                <span class="text-4xl font-bold text-neon-yellow text-glow">${e.intakeTemp.value}<span class="text-sm ml-1 opacity-50">°C</span></span>
                            </div>
                        </div>
                    </div>

                    <!-- DTC List -->
                    <div class="m3-card p-8 flex flex-col gap-6 relative group overflow-hidden h-[340px]">
                        <div class="absolute -right-16 -top-16 w-48 h-48 bg-neon-magenta/5 blur-3xl rounded-full group-hover:bg-neon-magenta/10 transition duration-700"></div>
                        <h3 class="text-neon-magenta text-[10px] font-black uppercase tracking-[0.3em]">Signal Anomalies</h3>
                        
                        <div class="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                            ${i.length===0?`
                                <div class="h-full flex flex-col items-center justify-center text-center opacity-40">
                                    <div class="text-6xl mb-4">🛡️</div>
                                    <div class="text-neon-green text-xs font-black uppercase tracking-widest">Shields Nominal</div>
                                </div>`:i.map(l=>`
                                    <div class="flex items-center gap-4 text-neon-magenta mb-4 bg-neon-magenta/5 p-5 rounded-4xl border border-neon-magenta/20 animate-float">
                                        <div class="w-10 h-10 rounded-2xl bg-neon-magenta/10 flex items-center justify-center text-xl">⚠️</div>
                                        <div>
                                            <div class="font-black text-sm tracking-widest">${l.split(" ")[0]}</div>
                                            <div class="text-[10px] opacity-60 uppercase font-bold mt-1">${l.split(" ").slice(1).join(" ")}</div>
                                        </div>
                                    </div>
                                `).join("")}
                        </div>
                    </div>
                </div>

                <!-- Monitor Readiness -->
                <div class="m3-card p-8 mt-2">
                     <h3 class="text-white/30 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Subsystem Readiness</h3>
                     <div class="grid grid-cols-4 gap-6">
                        ${["MIL","EVAP","O2S","CAT"].map(l=>`
                            <div class="flex flex-col items-center gap-3">
                                <div class="w-16 h-1.5 rounded-full bg-white/5 relative overflow-hidden">
                                     <div class="absolute inset-y-0 left-0 w-full bg-neon-green shadow-[0_0_10px_rgba(0,255,157,0.5)]"></div>
                                </div>
                                <span class="text-[10px] text-white/40 font-black tracking-widest">${l}</span>
                            </div>
                        `).join("")}
                     </div>
                </div>
            `,this.element.querySelector("#btn-scan")?.addEventListener("click",()=>this.hal.scanDTCs()),this.element.querySelector("#btn-clear")?.addEventListener("click",()=>this.hal.clearDTCs())})}element}class pv{hal;smoothingFactor=.2;constructor(t){this.hal=t}handleUpdate(t,e,i){if(Math.abs(t)>90||Math.abs(e)>180){console.error("Invalid coordinates received:",t,e);return}const a=this.hal.motion.location.lat.value,l=this.hal.motion.location.lng.value;a===0&&l===0?(this.hal.motion.location.lat.value=t,this.hal.motion.location.lng.value=e):(this.hal.motion.location.lat.value=a+(t-a)*this.smoothingFactor,this.hal.motion.location.lng.value=l+(e-l)*this.smoothingFactor),this.hal.motion.location.heading.value=i}}class mv{hal;constructor(t){this.hal=t}handleCanMessage(t,e){switch(t){case 513:this.handleSwcMessage(e);break;case 773:this.handleGearMessage(e);break}}handleNativeIntent(t){t&&(t.volume_key==="up"?this.adjustVolume(1):t.volume_key==="down"&&this.adjustVolume(-1))}handleSwcMessage(t){const e=t[0],i=t[1];e===1&&this.adjustVolume(1),e===2&&this.adjustVolume(-1),i===1&&(this.hal.media.isPlaying.value=!this.hal.media.isPlaying.value)}handleGearMessage(t){t[0]===1?this.hal.powertrain.gear.value="R":this.hal.powertrain.gear.value="P"}adjustVolume(t){const e=this.hal.media.volume.value;this.hal.media.volume.value=Math.max(0,Math.min(30,e+t))}}class _v{hal;demoFaults=["P0300: Random or Multiple Cylinder Misfire Detected","P0171: System Too Lean (Bank 1)","P0420: Catalyst System Efficiency Below Threshold","B1202: Fuel Sender Circuit Open"];constructor(t){this.hal=t}async scanForFaults(){if(this.hal.diagnostics.isScanning.value)return;this.hal.diagnostics.isScanning.value=!0,await new Promise(e=>setTimeout(e,2e3));const t=[];if(Math.random()<.2){const e=Math.floor(Math.random()*2)+1;for(let i=0;i<e;i++)t.push(this.demoFaults[Math.floor(Math.random()*this.demoFaults.length)])}this.hal.diagnostics.dtcs.value=t,this.hal.diagnostics.isScanning.value=!1}clearFaults(){this.hal.diagnostics.dtcs.value=[]}updateLiveTelemetry(t){t.voltage!==void 0&&(this.hal.diagnostics.voltage.value=t.voltage),t.intakeTemp!==void 0&&(this.hal.diagnostics.intakeTemp.value=t.intakeTemp)}}var Os={exports:{}};var gv=Os.exports,th;function vv(){return th||(th=1,(function(r,t){(function(e,i){i(t)})(gv,(function(e){var i="1.9.4";function a(n){var s,o,h,p;for(o=1,h=arguments.length;o<h;o++){p=arguments[o];for(s in p)n[s]=p[s]}return n}var l=Object.create||(function(){function n(){}return function(s){return n.prototype=s,new n}})();function c(n,s){var o=Array.prototype.slice;if(n.bind)return n.bind.apply(n,o.call(arguments,1));var h=o.call(arguments,2);return function(){return n.apply(s,h.length?h.concat(o.call(arguments)):arguments)}}var u=0;function d(n){return"_leaflet_id"in n||(n._leaflet_id=++u),n._leaflet_id}function f(n,s,o){var h,p,S,N;return N=function(){h=!1,p&&(S.apply(o,p),p=!1)},S=function(){h?p=arguments:(n.apply(o,arguments),setTimeout(N,s),h=!0)},S}function g(n,s,o){var h=s[1],p=s[0],S=h-p;return n===h&&o?n:((n-p)%S+S)%S+p}function _(){return!1}function v(n,s){if(s===!1)return n;var o=Math.pow(10,s===void 0?6:s);return Math.round(n*o)/o}function M(n){return n.trim?n.trim():n.replace(/^\s+|\s+$/g,"")}function T(n){return M(n).split(/\s+/)}function w(n,s){Object.prototype.hasOwnProperty.call(n,"options")||(n.options=n.options?l(n.options):{});for(var o in s)n.options[o]=s[o];return n.options}function x(n,s,o){var h=[];for(var p in n)h.push(encodeURIComponent(o?p.toUpperCase():p)+"="+encodeURIComponent(n[p]));return(!s||s.indexOf("?")===-1?"?":"&")+h.join("&")}var m=/\{ *([\w_ -]+) *\}/g;function P(n,s){return n.replace(m,function(o,h){var p=s[h];if(p===void 0)throw new Error("No value provided for variable "+o);return typeof p=="function"&&(p=p(s)),p})}var R=Array.isArray||function(n){return Object.prototype.toString.call(n)==="[object Array]"};function I(n,s){for(var o=0;o<n.length;o++)if(n[o]===s)return o;return-1}var D="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function U(n){return window["webkit"+n]||window["moz"+n]||window["ms"+n]}var O=0;function X(n){var s=+new Date,o=Math.max(0,16-(s-O));return O=s+o,window.setTimeout(n,o)}var b=window.requestAnimationFrame||U("RequestAnimationFrame")||X,A=window.cancelAnimationFrame||U("CancelAnimationFrame")||U("CancelRequestAnimationFrame")||function(n){window.clearTimeout(n)};function B(n,s,o){if(o&&b===X)n.call(s);else return b.call(window,c(n,s))}function Z(n){n&&A.call(window,n)}var j={__proto__:null,extend:a,create:l,bind:c,get lastId(){return u},stamp:d,throttle:f,wrapNum:g,falseFn:_,formatNum:v,trim:M,splitWords:T,setOptions:w,getParamString:x,template:P,isArray:R,indexOf:I,emptyImageUrl:D,requestFn:b,cancelFn:A,requestAnimFrame:B,cancelAnimFrame:Z};function it(){}it.extend=function(n){var s=function(){w(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},o=s.__super__=this.prototype,h=l(o);h.constructor=s,s.prototype=h;for(var p in this)Object.prototype.hasOwnProperty.call(this,p)&&p!=="prototype"&&p!=="__super__"&&(s[p]=this[p]);return n.statics&&a(s,n.statics),n.includes&&(rt(n.includes),a.apply(null,[h].concat(n.includes))),a(h,n),delete h.statics,delete h.includes,h.options&&(h.options=o.options?l(o.options):{},a(h.options,n.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){o.callInitHooks&&o.callInitHooks.call(this),this._initHooksCalled=!0;for(var S=0,N=h._initHooks.length;S<N;S++)h._initHooks[S].call(this)}},s},it.include=function(n){var s=this.prototype.options;return a(this.prototype,n),n.options&&(this.prototype.options=s,this.mergeOptions(n.options)),this},it.mergeOptions=function(n){return a(this.prototype.options,n),this},it.addInitHook=function(n){var s=Array.prototype.slice.call(arguments,1),o=typeof n=="function"?n:function(){this[n].apply(this,s)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(o),this};function rt(n){if(!(typeof L>"u"||!L||!L.Mixin)){n=R(n)?n:[n];for(var s=0;s<n.length;s++)n[s]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var tt={on:function(n,s,o){if(typeof n=="object")for(var h in n)this._on(h,n[h],s);else{n=T(n);for(var p=0,S=n.length;p<S;p++)this._on(n[p],s,o)}return this},off:function(n,s,o){if(!arguments.length)delete this._events;else if(typeof n=="object")for(var h in n)this._off(h,n[h],s);else{n=T(n);for(var p=arguments.length===1,S=0,N=n.length;S<N;S++)p?this._off(n[S]):this._off(n[S],s,o)}return this},_on:function(n,s,o,h){if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}if(this._listens(n,s,o)===!1){o===this&&(o=void 0);var p={fn:s,ctx:o};h&&(p.once=!0),this._events=this._events||{},this._events[n]=this._events[n]||[],this._events[n].push(p)}},_off:function(n,s,o){var h,p,S;if(this._events&&(h=this._events[n],!!h)){if(arguments.length===1){if(this._firingCount)for(p=0,S=h.length;p<S;p++)h[p].fn=_;delete this._events[n];return}if(typeof s!="function"){console.warn("wrong listener type: "+typeof s);return}var N=this._listens(n,s,o);if(N!==!1){var G=h[N];this._firingCount&&(G.fn=_,this._events[n]=h=h.slice()),h.splice(N,1)}}},fire:function(n,s,o){if(!this.listens(n,o))return this;var h=a({},s,{type:n,target:this,sourceTarget:s&&s.sourceTarget||this});if(this._events){var p=this._events[n];if(p){this._firingCount=this._firingCount+1||1;for(var S=0,N=p.length;S<N;S++){var G=p[S],$=G.fn;G.once&&this.off(n,$,G.ctx),$.call(G.ctx||this,h)}this._firingCount--}}return o&&this._propagateEvent(h),this},listens:function(n,s,o,h){typeof n!="string"&&console.warn('"string" type argument expected');var p=s;typeof s!="function"&&(h=!!s,p=void 0,o=void 0);var S=this._events&&this._events[n];if(S&&S.length&&this._listens(n,p,o)!==!1)return!0;if(h){for(var N in this._eventParents)if(this._eventParents[N].listens(n,s,o,h))return!0}return!1},_listens:function(n,s,o){if(!this._events)return!1;var h=this._events[n]||[];if(!s)return!!h.length;o===this&&(o=void 0);for(var p=0,S=h.length;p<S;p++)if(h[p].fn===s&&h[p].ctx===o)return p;return!1},once:function(n,s,o){if(typeof n=="object")for(var h in n)this._on(h,n[h],s,!0);else{n=T(n);for(var p=0,S=n.length;p<S;p++)this._on(n[p],s,o,!0)}return this},addEventParent:function(n){return this._eventParents=this._eventParents||{},this._eventParents[d(n)]=n,this},removeEventParent:function(n){return this._eventParents&&delete this._eventParents[d(n)],this},_propagateEvent:function(n){for(var s in this._eventParents)this._eventParents[s].fire(n.type,a({layer:n.target,propagatedFrom:n.target},n),!0)}};tt.addEventListener=tt.on,tt.removeEventListener=tt.clearAllEventListeners=tt.off,tt.addOneTimeEventListener=tt.once,tt.fireEvent=tt.fire,tt.hasEventListeners=tt.listens;var K=it.extend(tt);function J(n,s,o){this.x=o?Math.round(n):n,this.y=o?Math.round(s):s}var bt=Math.trunc||function(n){return n>0?Math.floor(n):Math.ceil(n)};J.prototype={clone:function(){return new J(this.x,this.y)},add:function(n){return this.clone()._add(st(n))},_add:function(n){return this.x+=n.x,this.y+=n.y,this},subtract:function(n){return this.clone()._subtract(st(n))},_subtract:function(n){return this.x-=n.x,this.y-=n.y,this},divideBy:function(n){return this.clone()._divideBy(n)},_divideBy:function(n){return this.x/=n,this.y/=n,this},multiplyBy:function(n){return this.clone()._multiplyBy(n)},_multiplyBy:function(n){return this.x*=n,this.y*=n,this},scaleBy:function(n){return new J(this.x*n.x,this.y*n.y)},unscaleBy:function(n){return new J(this.x/n.x,this.y/n.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=bt(this.x),this.y=bt(this.y),this},distanceTo:function(n){n=st(n);var s=n.x-this.x,o=n.y-this.y;return Math.sqrt(s*s+o*o)},equals:function(n){return n=st(n),n.x===this.x&&n.y===this.y},contains:function(n){return n=st(n),Math.abs(n.x)<=Math.abs(this.x)&&Math.abs(n.y)<=Math.abs(this.y)},toString:function(){return"Point("+v(this.x)+", "+v(this.y)+")"}};function st(n,s,o){return n instanceof J?n:R(n)?new J(n[0],n[1]):n==null?n:typeof n=="object"&&"x"in n&&"y"in n?new J(n.x,n.y):new J(n,s,o)}function dt(n,s){if(n)for(var o=s?[n,s]:n,h=0,p=o.length;h<p;h++)this.extend(o[h])}dt.prototype={extend:function(n){var s,o;if(!n)return this;if(n instanceof J||typeof n[0]=="number"||"x"in n)s=o=st(n);else if(n=Ht(n),s=n.min,o=n.max,!s||!o)return this;return!this.min&&!this.max?(this.min=s.clone(),this.max=o.clone()):(this.min.x=Math.min(s.x,this.min.x),this.max.x=Math.max(o.x,this.max.x),this.min.y=Math.min(s.y,this.min.y),this.max.y=Math.max(o.y,this.max.y)),this},getCenter:function(n){return st((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,n)},getBottomLeft:function(){return st(this.min.x,this.max.y)},getTopRight:function(){return st(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(n){var s,o;return typeof n[0]=="number"||n instanceof J?n=st(n):n=Ht(n),n instanceof dt?(s=n.min,o=n.max):s=o=n,s.x>=this.min.x&&o.x<=this.max.x&&s.y>=this.min.y&&o.y<=this.max.y},intersects:function(n){n=Ht(n);var s=this.min,o=this.max,h=n.min,p=n.max,S=p.x>=s.x&&h.x<=o.x,N=p.y>=s.y&&h.y<=o.y;return S&&N},overlaps:function(n){n=Ht(n);var s=this.min,o=this.max,h=n.min,p=n.max,S=p.x>s.x&&h.x<o.x,N=p.y>s.y&&h.y<o.y;return S&&N},isValid:function(){return!!(this.min&&this.max)},pad:function(n){var s=this.min,o=this.max,h=Math.abs(s.x-o.x)*n,p=Math.abs(s.y-o.y)*n;return Ht(st(s.x-h,s.y-p),st(o.x+h,o.y+p))},equals:function(n){return n?(n=Ht(n),this.min.equals(n.getTopLeft())&&this.max.equals(n.getBottomRight())):!1}};function Ht(n,s){return!n||n instanceof dt?n:new dt(n,s)}function kt(n,s){if(n)for(var o=s?[n,s]:n,h=0,p=o.length;h<p;h++)this.extend(o[h])}kt.prototype={extend:function(n){var s=this._southWest,o=this._northEast,h,p;if(n instanceof Vt)h=n,p=n;else if(n instanceof kt){if(h=n._southWest,p=n._northEast,!h||!p)return this}else return n?this.extend(q(n)||Kt(n)):this;return!s&&!o?(this._southWest=new Vt(h.lat,h.lng),this._northEast=new Vt(p.lat,p.lng)):(s.lat=Math.min(h.lat,s.lat),s.lng=Math.min(h.lng,s.lng),o.lat=Math.max(p.lat,o.lat),o.lng=Math.max(p.lng,o.lng)),this},pad:function(n){var s=this._southWest,o=this._northEast,h=Math.abs(s.lat-o.lat)*n,p=Math.abs(s.lng-o.lng)*n;return new kt(new Vt(s.lat-h,s.lng-p),new Vt(o.lat+h,o.lng+p))},getCenter:function(){return new Vt((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new Vt(this.getNorth(),this.getWest())},getSouthEast:function(){return new Vt(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(n){typeof n[0]=="number"||n instanceof Vt||"lat"in n?n=q(n):n=Kt(n);var s=this._southWest,o=this._northEast,h,p;return n instanceof kt?(h=n.getSouthWest(),p=n.getNorthEast()):h=p=n,h.lat>=s.lat&&p.lat<=o.lat&&h.lng>=s.lng&&p.lng<=o.lng},intersects:function(n){n=Kt(n);var s=this._southWest,o=this._northEast,h=n.getSouthWest(),p=n.getNorthEast(),S=p.lat>=s.lat&&h.lat<=o.lat,N=p.lng>=s.lng&&h.lng<=o.lng;return S&&N},overlaps:function(n){n=Kt(n);var s=this._southWest,o=this._northEast,h=n.getSouthWest(),p=n.getNorthEast(),S=p.lat>s.lat&&h.lat<o.lat,N=p.lng>s.lng&&h.lng<o.lng;return S&&N},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(n,s){return n?(n=Kt(n),this._southWest.equals(n.getSouthWest(),s)&&this._northEast.equals(n.getNorthEast(),s)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Kt(n,s){return n instanceof kt?n:new kt(n,s)}function Vt(n,s,o){if(isNaN(n)||isNaN(s))throw new Error("Invalid LatLng object: ("+n+", "+s+")");this.lat=+n,this.lng=+s,o!==void 0&&(this.alt=+o)}Vt.prototype={equals:function(n,s){if(!n)return!1;n=q(n);var o=Math.max(Math.abs(this.lat-n.lat),Math.abs(this.lng-n.lng));return o<=(s===void 0?1e-9:s)},toString:function(n){return"LatLng("+v(this.lat,n)+", "+v(this.lng,n)+")"},distanceTo:function(n){return Et.distance(this,q(n))},wrap:function(){return Et.wrapLatLng(this)},toBounds:function(n){var s=180*n/40075017,o=s/Math.cos(Math.PI/180*this.lat);return Kt([this.lat-s,this.lng-o],[this.lat+s,this.lng+o])},clone:function(){return new Vt(this.lat,this.lng,this.alt)}};function q(n,s,o){return n instanceof Vt?n:R(n)&&typeof n[0]!="object"?n.length===3?new Vt(n[0],n[1],n[2]):n.length===2?new Vt(n[0],n[1]):null:n==null?n:typeof n=="object"&&"lat"in n?new Vt(n.lat,"lng"in n?n.lng:n.lon,n.alt):s===void 0?null:new Vt(n,s,o)}var ot={latLngToPoint:function(n,s){var o=this.projection.project(n),h=this.scale(s);return this.transformation._transform(o,h)},pointToLatLng:function(n,s){var o=this.scale(s),h=this.transformation.untransform(n,o);return this.projection.unproject(h)},project:function(n){return this.projection.project(n)},unproject:function(n){return this.projection.unproject(n)},scale:function(n){return 256*Math.pow(2,n)},zoom:function(n){return Math.log(n/256)/Math.LN2},getProjectedBounds:function(n){if(this.infinite)return null;var s=this.projection.bounds,o=this.scale(n),h=this.transformation.transform(s.min,o),p=this.transformation.transform(s.max,o);return new dt(h,p)},infinite:!1,wrapLatLng:function(n){var s=this.wrapLng?g(n.lng,this.wrapLng,!0):n.lng,o=this.wrapLat?g(n.lat,this.wrapLat,!0):n.lat,h=n.alt;return new Vt(o,s,h)},wrapLatLngBounds:function(n){var s=n.getCenter(),o=this.wrapLatLng(s),h=s.lat-o.lat,p=s.lng-o.lng;if(h===0&&p===0)return n;var S=n.getSouthWest(),N=n.getNorthEast(),G=new Vt(S.lat-h,S.lng-p),$=new Vt(N.lat-h,N.lng-p);return new kt(G,$)}},Et=a({},ot,{wrapLng:[-180,180],R:6371e3,distance:function(n,s){var o=Math.PI/180,h=n.lat*o,p=s.lat*o,S=Math.sin((s.lat-n.lat)*o/2),N=Math.sin((s.lng-n.lng)*o/2),G=S*S+Math.cos(h)*Math.cos(p)*N*N,$=2*Math.atan2(Math.sqrt(G),Math.sqrt(1-G));return this.R*$}}),Jt=6378137,Lt={R:Jt,MAX_LATITUDE:85.0511287798,project:function(n){var s=Math.PI/180,o=this.MAX_LATITUDE,h=Math.max(Math.min(o,n.lat),-o),p=Math.sin(h*s);return new J(this.R*n.lng*s,this.R*Math.log((1+p)/(1-p))/2)},unproject:function(n){var s=180/Math.PI;return new Vt((2*Math.atan(Math.exp(n.y/this.R))-Math.PI/2)*s,n.x*s/this.R)},bounds:(function(){var n=Jt*Math.PI;return new dt([-n,-n],[n,n])})()};function oe(n,s,o,h){if(R(n)){this._a=n[0],this._b=n[1],this._c=n[2],this._d=n[3];return}this._a=n,this._b=s,this._c=o,this._d=h}oe.prototype={transform:function(n,s){return this._transform(n.clone(),s)},_transform:function(n,s){return s=s||1,n.x=s*(this._a*n.x+this._b),n.y=s*(this._c*n.y+this._d),n},untransform:function(n,s){return s=s||1,new J((n.x/s-this._b)/this._a,(n.y/s-this._d)/this._c)}};function Ce(n,s,o,h){return new oe(n,s,o,h)}var ae=a({},Et,{code:"EPSG:3857",projection:Lt,transformation:(function(){var n=.5/(Math.PI*Lt.R);return Ce(n,.5,-n,.5)})()}),_e=a({},ae,{code:"EPSG:900913"});function ve(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function Qt(n,s){var o="",h,p,S,N,G,$;for(h=0,S=n.length;h<S;h++){for(G=n[h],p=0,N=G.length;p<N;p++)$=G[p],o+=(p?"L":"M")+$.x+" "+$.y;o+=s?Ot.svg?"z":"x":""}return o||"M0 0"}var Pe=document.documentElement.style,F="ActiveXObject"in window,Le=F&&!document.addEventListener,fe="msLaunchUri"in navigator&&!("documentMode"in document),xe=fn("webkit"),Nt=fn("android"),C=fn("android 2")||fn("android 3"),y=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),k=Nt&&fn("Google")&&y<537&&!("AudioNode"in window),nt=!!window.opera,lt=!fe&&fn("chrome"),et=fn("gecko")&&!xe&&!nt&&!F,Ft=!lt&&fn("safari"),gt=fn("phantom"),It="OTransition"in Pe,Gt=navigator.platform.indexOf("Win")===0,ht=F&&"transition"in Pe,vt="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!C,Rt="MozPerspective"in Pe,Ut=!window.L_DISABLE_3D&&(ht||vt||Rt)&&!It&&!gt,mt=typeof orientation<"u"||fn("mobile"),ee=mt&&xe,z=mt&&vt,Mt=!window.PointerEvent&&window.MSPointerEvent,pt=!!(window.PointerEvent||Mt),wt="ontouchstart"in window||!!window.TouchEvent,ut=!window.L_NO_TOUCH&&(wt||pt),at=mt&&nt,xt=mt&&et,Zt=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ee=(function(){var n=!1;try{var s=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("testPassiveEventSupport",_,s),window.removeEventListener("testPassiveEventSupport",_,s)}catch{}return n})(),ge=(function(){return!!document.createElement("canvas").getContext})(),sn=!!(document.createElementNS&&ve("svg").createSVGRect),xn=!!sn&&(function(){var n=document.createElement("div");return n.innerHTML="<svg/>",(n.firstChild&&n.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),$r=!sn&&(function(){try{var n=document.createElement("div");n.innerHTML='<v:shape adj="1"/>';var s=n.firstChild;return s.style.behavior="url(#default#VML)",s&&typeof s.adj=="object"}catch{return!1}})(),js=navigator.platform.indexOf("Mac")===0,_s=navigator.platform.indexOf("Linux")===0;function fn(n){return navigator.userAgent.toLowerCase().indexOf(n)>=0}var Ot={ie:F,ielt9:Le,edge:fe,webkit:xe,android:Nt,android23:C,androidStock:k,opera:nt,chrome:lt,gecko:et,safari:Ft,phantom:gt,opera12:It,win:Gt,ie3d:ht,webkit3d:vt,gecko3d:Rt,any3d:Ut,mobile:mt,mobileWebkit:ee,mobileWebkit3d:z,msPointer:Mt,pointer:pt,touch:ut,touchNative:wt,mobileOpera:at,mobileGecko:xt,retina:Zt,passiveEvents:Ee,canvas:ge,svg:sn,vml:$r,inlineSvg:xn,mac:js,linux:_s},gs=Ot.msPointer?"MSPointerDown":"pointerdown",Rn=Ot.msPointer?"MSPointerMove":"pointermove",Ni=Ot.msPointer?"MSPointerUp":"pointerup",vs=Ot.msPointer?"MSPointerCancel":"pointercancel",Ui={touchstart:gs,touchmove:Rn,touchend:Ni,touchcancel:vs},_i={touchstart:na,touchmove:Fi,touchend:Fi,touchcancel:Fi},Hn={},gi=!1;function Ks(n,s,o){return s==="touchstart"&&ea(),_i[s]?(o=_i[s].bind(this,o),n.addEventListener(Ui[s],o,!1),o):(console.warn("wrong event specified:",s),_)}function Js(n,s,o){if(!Ui[s]){console.warn("wrong event specified:",s);return}n.removeEventListener(Ui[s],o,!1)}function Qr(n){Hn[n.pointerId]=n}function ta(n){Hn[n.pointerId]&&(Hn[n.pointerId]=n)}function $s(n){delete Hn[n.pointerId]}function ea(){gi||(document.addEventListener(gs,Qr,!0),document.addEventListener(Rn,ta,!0),document.addEventListener(Ni,$s,!0),document.addEventListener(vs,$s,!0),gi=!0)}function Fi(n,s){if(s.pointerType!==(s.MSPOINTER_TYPE_MOUSE||"mouse")){s.touches=[];for(var o in Hn)s.touches.push(Hn[o]);s.changedTouches=[s],n(s)}}function na(n,s){s.MSPOINTER_TYPE_TOUCH&&s.pointerType===s.MSPOINTER_TYPE_TOUCH&&We(s),Fi(n,s)}function E(n){var s={},o,h;for(h in n)o=n[h],s[h]=o&&o.bind?o.bind(n):o;return n=s,s.type="dblclick",s.detail=2,s.isTrusted=!1,s._simulated=!0,s}var V=200;function Q(n,s){n.addEventListener("dblclick",s);var o=0,h;function p(S){if(S.detail!==1){h=S.detail;return}if(!(S.pointerType==="mouse"||S.sourceCapabilities&&!S.sourceCapabilities.firesTouchEvents)){var N=_l(S);if(!(N.some(function($){return $ instanceof HTMLLabelElement&&$.attributes.for})&&!N.some(function($){return $ instanceof HTMLInputElement||$ instanceof HTMLSelectElement}))){var G=Date.now();G-o<=V?(h++,h===2&&s(E(S))):h=1,o=G}}}return n.addEventListener("click",p),{dblclick:s,simDblclick:p}}function Y(n,s){n.removeEventListener("dblclick",s.dblclick),n.removeEventListener("click",s.simDblclick)}var H=yn(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),_t=yn(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),Ct=_t==="webkitTransition"||_t==="OTransition"?_t+"End":"transitionend";function yt(n){return typeof n=="string"?document.getElementById(n):n}function Pt(n,s){var o=n.style[s]||n.currentStyle&&n.currentStyle[s];if((!o||o==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(n,null);o=h?h[s]:null}return o==="auto"?null:o}function ft(n,s,o){var h=document.createElement(n);return h.className=s||"",o&&o.appendChild(h),h}function Tt(n){var s=n.parentNode;s&&s.removeChild(n)}function Bt(n){for(;n.firstChild;)n.removeChild(n.firstChild)}function Yt(n){var s=n.parentNode;s&&s.lastChild!==n&&s.appendChild(n)}function le(n){var s=n.parentNode;s&&s.firstChild!==n&&s.insertBefore(n,s.firstChild)}function Te(n,s){if(n.classList!==void 0)return n.classList.contains(s);var o=he(n);return o.length>0&&new RegExp("(^|\\s)"+s+"(\\s|$)").test(o)}function Dt(n,s){if(n.classList!==void 0)for(var o=T(s),h=0,p=o.length;h<p;h++)n.classList.add(o[h]);else if(!Te(n,s)){var S=he(n);zt(n,(S?S+" ":"")+s)}}function Wt(n,s){n.classList!==void 0?n.classList.remove(s):zt(n,M((" "+he(n)+" ").replace(" "+s+" "," ")))}function zt(n,s){n.className.baseVal===void 0?n.className=s:n.className.baseVal=s}function he(n){return n.correspondingElement&&(n=n.correspondingElement),n.className.baseVal===void 0?n.className:n.className.baseVal}function jt(n,s){"opacity"in n.style?n.style.opacity=s:"filter"in n.style&&je(n,s)}function je(n,s){var o=!1,h="DXImageTransform.Microsoft.Alpha";try{o=n.filters.item(h)}catch{if(s===1)return}s=Math.round(s*100),o?(o.Enabled=s!==100,o.Opacity=s):n.style.filter+=" progid:"+h+"(opacity="+s+")"}function yn(n){for(var s=document.documentElement.style,o=0;o<n.length;o++)if(n[o]in s)return n[o];return!1}function De(n,s,o){var h=s||new J(0,0);n.style[H]=(Ot.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(o?" scale("+o+")":"")}function we(n,s){n._leaflet_pos=s,Ot.any3d?De(n,s):(n.style.left=s.x+"px",n.style.top=s.y+"px")}function ue(n){return n._leaflet_pos||new J(0,0)}var Ne,Ve,Be;if("onselectstart"in document)Ne=function(){te(window,"selectstart",We)},Ve=function(){Ae(window,"selectstart",We)};else{var Ue=yn(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Ne=function(){if(Ue){var n=document.documentElement.style;Be=n[Ue],n[Ue]="none"}},Ve=function(){Ue&&(document.documentElement.style[Ue]=Be,Be=void 0)}}function vi(){te(window,"dragstart",We)}function Mn(){Ae(window,"dragstart",We)}var Qs,ia;function sa(n){for(;n.tabIndex===-1;)n=n.parentNode;n.style&&(tr(),Qs=n,ia=n.style.outlineStyle,n.style.outlineStyle="none",te(window,"keydown",tr))}function tr(){Qs&&(Qs.style.outlineStyle=ia,Qs=void 0,ia=void 0,Ae(window,"keydown",tr))}function pl(n){do n=n.parentNode;while((!n.offsetWidth||!n.offsetHeight)&&n!==document.body);return n}function ra(n){var s=n.getBoundingClientRect();return{x:s.width/n.offsetWidth||1,y:s.height/n.offsetHeight||1,boundingClientRect:s}}var Wh={__proto__:null,TRANSFORM:H,TRANSITION:_t,TRANSITION_END:Ct,get:yt,getStyle:Pt,create:ft,remove:Tt,empty:Bt,toFront:Yt,toBack:le,hasClass:Te,addClass:Dt,removeClass:Wt,setClass:zt,getClass:he,setOpacity:jt,testProp:yn,setTransform:De,setPosition:we,getPosition:ue,get disableTextSelection(){return Ne},get enableTextSelection(){return Ve},disableImageDrag:vi,enableImageDrag:Mn,preventOutline:sa,restoreOutline:tr,getSizedParentNode:pl,getScale:ra};function te(n,s,o,h){if(s&&typeof s=="object")for(var p in s)oa(n,p,s[p],o);else{s=T(s);for(var S=0,N=s.length;S<N;S++)oa(n,s[S],o,h)}return this}var Ln="_leaflet_events";function Ae(n,s,o,h){if(arguments.length===1)ml(n),delete n[Ln];else if(s&&typeof s=="object")for(var p in s)la(n,p,s[p],o);else if(s=T(s),arguments.length===2)ml(n,function(G){return I(s,G)!==-1});else for(var S=0,N=s.length;S<N;S++)la(n,s[S],o,h);return this}function ml(n,s){for(var o in n[Ln]){var h=o.split(/\d/)[0];(!s||s(h))&&la(n,h,null,null,o)}}var aa={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function oa(n,s,o,h){var p=s+d(o)+(h?"_"+d(h):"");if(n[Ln]&&n[Ln][p])return this;var S=function(G){return o.call(h||n,G||window.event)},N=S;!Ot.touchNative&&Ot.pointer&&s.indexOf("touch")===0?S=Ks(n,s,S):Ot.touch&&s==="dblclick"?S=Q(n,S):"addEventListener"in n?s==="touchstart"||s==="touchmove"||s==="wheel"||s==="mousewheel"?n.addEventListener(aa[s]||s,S,Ot.passiveEvents?{passive:!1}:!1):s==="mouseenter"||s==="mouseleave"?(S=function(G){G=G||window.event,ha(n,G)&&N(G)},n.addEventListener(aa[s],S,!1)):n.addEventListener(s,N,!1):n.attachEvent("on"+s,S),n[Ln]=n[Ln]||{},n[Ln][p]=S}function la(n,s,o,h,p){p=p||s+d(o)+(h?"_"+d(h):"");var S=n[Ln]&&n[Ln][p];if(!S)return this;!Ot.touchNative&&Ot.pointer&&s.indexOf("touch")===0?Js(n,s,S):Ot.touch&&s==="dblclick"?Y(n,S):"removeEventListener"in n?n.removeEventListener(aa[s]||s,S,!1):n.detachEvent("on"+s,S),n[Ln][p]=null}function xi(n){return n.stopPropagation?n.stopPropagation():n.originalEvent?n.originalEvent._stopped=!0:n.cancelBubble=!0,this}function ca(n){return oa(n,"wheel",xi),this}function xs(n){return te(n,"mousedown touchstart dblclick contextmenu",xi),n._leaflet_disable_click=!0,this}function We(n){return n.preventDefault?n.preventDefault():n.returnValue=!1,this}function yi(n){return We(n),xi(n),this}function _l(n){if(n.composedPath)return n.composedPath();for(var s=[],o=n.target;o;)s.push(o),o=o.parentNode;return s}function gl(n,s){if(!s)return new J(n.clientX,n.clientY);var o=ra(s),h=o.boundingClientRect;return new J((n.clientX-h.left)/o.x-s.clientLeft,(n.clientY-h.top)/o.y-s.clientTop)}var Xh=Ot.linux&&Ot.chrome?window.devicePixelRatio:Ot.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function vl(n){return Ot.edge?n.wheelDeltaY/2:n.deltaY&&n.deltaMode===0?-n.deltaY/Xh:n.deltaY&&n.deltaMode===1?-n.deltaY*20:n.deltaY&&n.deltaMode===2?-n.deltaY*60:n.deltaX||n.deltaZ?0:n.wheelDelta?(n.wheelDeltaY||n.wheelDelta)/2:n.detail&&Math.abs(n.detail)<32765?-n.detail*20:n.detail?n.detail/-32765*60:0}function ha(n,s){var o=s.relatedTarget;if(!o)return!0;try{for(;o&&o!==n;)o=o.parentNode}catch{return!1}return o!==n}var Zh={__proto__:null,on:te,off:Ae,stopPropagation:xi,disableScrollPropagation:ca,disableClickPropagation:xs,preventDefault:We,stop:yi,getPropagationPath:_l,getMousePosition:gl,getWheelDelta:vl,isExternalTarget:ha,addListener:te,removeListener:Ae},xl=K.extend({run:function(n,s,o,h){this.stop(),this._el=n,this._inProgress=!0,this._duration=o||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=ue(n),this._offset=s.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=B(this._animate,this),this._step()},_step:function(n){var s=+new Date-this._startTime,o=this._duration*1e3;s<o?this._runFrame(this._easeOut(s/o),n):(this._runFrame(1),this._complete())},_runFrame:function(n,s){var o=this._startPos.add(this._offset.multiplyBy(n));s&&o._round(),we(this._el,o),this.fire("step")},_complete:function(){Z(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(n){return 1-Math.pow(1-n,this._easeOutPower)}}),de=K.extend({options:{crs:ae,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(n,s){s=w(this,s),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(n),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),s.maxBounds&&this.setMaxBounds(s.maxBounds),s.zoom!==void 0&&(this._zoom=this._limitZoom(s.zoom)),s.center&&s.zoom!==void 0&&this.setView(q(s.center),s.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=_t&&Ot.any3d&&!Ot.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),te(this._proxy,Ct,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(n,s,o){if(s=s===void 0?this._zoom:this._limitZoom(s),n=this._limitCenter(q(n),s,this.options.maxBounds),o=o||{},this._stop(),this._loaded&&!o.reset&&o!==!0){o.animate!==void 0&&(o.zoom=a({animate:o.animate},o.zoom),o.pan=a({animate:o.animate,duration:o.duration},o.pan));var h=this._zoom!==s?this._tryAnimatedZoom&&this._tryAnimatedZoom(n,s,o.zoom):this._tryAnimatedPan(n,o.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(n,s,o.pan&&o.pan.noMoveStart),this},setZoom:function(n,s){return this._loaded?this.setView(this.getCenter(),n,{zoom:s}):(this._zoom=n,this)},zoomIn:function(n,s){return n=n||(Ot.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+n,s)},zoomOut:function(n,s){return n=n||(Ot.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-n,s)},setZoomAround:function(n,s,o){var h=this.getZoomScale(s),p=this.getSize().divideBy(2),S=n instanceof J?n:this.latLngToContainerPoint(n),N=S.subtract(p).multiplyBy(1-1/h),G=this.containerPointToLatLng(p.add(N));return this.setView(G,s,{zoom:o})},_getBoundsCenterZoom:function(n,s){s=s||{},n=n.getBounds?n.getBounds():Kt(n);var o=st(s.paddingTopLeft||s.padding||[0,0]),h=st(s.paddingBottomRight||s.padding||[0,0]),p=this.getBoundsZoom(n,!1,o.add(h));if(p=typeof s.maxZoom=="number"?Math.min(s.maxZoom,p):p,p===1/0)return{center:n.getCenter(),zoom:p};var S=h.subtract(o).divideBy(2),N=this.project(n.getSouthWest(),p),G=this.project(n.getNorthEast(),p),$=this.unproject(N.add(G).divideBy(2).add(S),p);return{center:$,zoom:p}},fitBounds:function(n,s){if(n=Kt(n),!n.isValid())throw new Error("Bounds are not valid.");var o=this._getBoundsCenterZoom(n,s);return this.setView(o.center,o.zoom,s)},fitWorld:function(n){return this.fitBounds([[-90,-180],[90,180]],n)},panTo:function(n,s){return this.setView(n,this._zoom,{pan:s})},panBy:function(n,s){if(n=st(n).round(),s=s||{},!n.x&&!n.y)return this.fire("moveend");if(s.animate!==!0&&!this.getSize().contains(n))return this._resetView(this.unproject(this.project(this.getCenter()).add(n)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new xl,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),s.noMoveStart||this.fire("movestart"),s.animate!==!1){Dt(this._mapPane,"leaflet-pan-anim");var o=this._getMapPanePos().subtract(n).round();this._panAnim.run(this._mapPane,o,s.duration||.25,s.easeLinearity)}else this._rawPanBy(n),this.fire("move").fire("moveend");return this},flyTo:function(n,s,o){if(o=o||{},o.animate===!1||!Ot.any3d)return this.setView(n,s,o);this._stop();var h=this.project(this.getCenter()),p=this.project(n),S=this.getSize(),N=this._zoom;n=q(n),s=s===void 0?N:s;var G=Math.max(S.x,S.y),$=G*this.getZoomScale(N,s),ct=p.distanceTo(h)||1,At=1.42,Xt=At*At;function se(Fe){var dr=Fe?-1:1,Nu=Fe?$:G,Uu=$*$-G*G+dr*Xt*Xt*ct*ct,Fu=2*Nu*Xt*ct,Ma=Uu/Fu,Ql=Math.sqrt(Ma*Ma+1)-Ma,Ou=Ql<1e-9?-18:Math.log(Ql);return Ou}function Ke(Fe){return(Math.exp(Fe)-Math.exp(-Fe))/2}function He(Fe){return(Math.exp(Fe)+Math.exp(-Fe))/2}function mn(Fe){return Ke(Fe)/He(Fe)}var rn=se(0);function Hi(Fe){return G*(He(rn)/He(rn+At*Fe))}function Ru(Fe){return G*(He(rn)*mn(rn+At*Fe)-Ke(rn))/Xt}function Lu(Fe){return 1-Math.pow(1-Fe,1.5)}var Iu=Date.now(),Jl=(se(1)-rn)/At,Du=o.duration?1e3*o.duration:1e3*Jl*.8;function $l(){var Fe=(Date.now()-Iu)/Du,dr=Lu(Fe)*Jl;Fe<=1?(this._flyToFrame=B($l,this),this._move(this.unproject(h.add(p.subtract(h).multiplyBy(Ru(dr)/ct)),N),this.getScaleZoom(G/Hi(dr),N),{flyTo:!0})):this._move(n,s)._moveEnd(!0)}return this._moveStart(!0,o.noMoveStart),$l.call(this),this},flyToBounds:function(n,s){var o=this._getBoundsCenterZoom(n,s);return this.flyTo(o.center,o.zoom,s)},setMaxBounds:function(n){return n=Kt(n),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),n.isValid()?(this.options.maxBounds=n,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(n){var s=this.options.minZoom;return this.options.minZoom=n,this._loaded&&s!==n&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(n):this},setMaxZoom:function(n){var s=this.options.maxZoom;return this.options.maxZoom=n,this._loaded&&s!==n&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(n):this},panInsideBounds:function(n,s){this._enforcingBounds=!0;var o=this.getCenter(),h=this._limitCenter(o,this._zoom,Kt(n));return o.equals(h)||this.panTo(h,s),this._enforcingBounds=!1,this},panInside:function(n,s){s=s||{};var o=st(s.paddingTopLeft||s.padding||[0,0]),h=st(s.paddingBottomRight||s.padding||[0,0]),p=this.project(this.getCenter()),S=this.project(n),N=this.getPixelBounds(),G=Ht([N.min.add(o),N.max.subtract(h)]),$=G.getSize();if(!G.contains(S)){this._enforcingBounds=!0;var ct=S.subtract(G.getCenter()),At=G.extend(S).getSize().subtract($);p.x+=ct.x<0?-At.x:At.x,p.y+=ct.y<0?-At.y:At.y,this.panTo(this.unproject(p),s),this._enforcingBounds=!1}return this},invalidateSize:function(n){if(!this._loaded)return this;n=a({animate:!1,pan:!0},n===!0?{animate:!0}:n);var s=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var o=this.getSize(),h=s.divideBy(2).round(),p=o.divideBy(2).round(),S=h.subtract(p);return!S.x&&!S.y?this:(n.animate&&n.pan?this.panBy(S):(n.pan&&this._rawPanBy(S),this.fire("move"),n.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:s,newSize:o}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(n){if(n=this._locateOptions=a({timeout:1e4,watch:!1},n),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var s=c(this._handleGeolocationResponse,this),o=c(this._handleGeolocationError,this);return n.watch?this._locationWatchId=navigator.geolocation.watchPosition(s,o,n):navigator.geolocation.getCurrentPosition(s,o,n),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(n){if(this._container._leaflet_id){var s=n.code,o=n.message||(s===1?"permission denied":s===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:s,message:"Geolocation error: "+o+"."})}},_handleGeolocationResponse:function(n){if(this._container._leaflet_id){var s=n.coords.latitude,o=n.coords.longitude,h=new Vt(s,o),p=h.toBounds(n.coords.accuracy*2),S=this._locateOptions;if(S.setView){var N=this.getBoundsZoom(p);this.setView(h,S.maxZoom?Math.min(N,S.maxZoom):N)}var G={latlng:h,bounds:p,timestamp:n.timestamp};for(var $ in n.coords)typeof n.coords[$]=="number"&&(G[$]=n.coords[$]);this.fire("locationfound",G)}},addHandler:function(n,s){if(!s)return this;var o=this[n]=new s(this);return this._handlers.push(o),this.options[n]&&o.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),Tt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(Z(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var n;for(n in this._layers)this._layers[n].remove();for(n in this._panes)Tt(this._panes[n]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(n,s){var o="leaflet-pane"+(n?" leaflet-"+n.replace("Pane","")+"-pane":""),h=ft("div",o,s||this._mapPane);return n&&(this._panes[n]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var n=this.getPixelBounds(),s=this.unproject(n.getBottomLeft()),o=this.unproject(n.getTopRight());return new kt(s,o)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(n,s,o){n=Kt(n),o=st(o||[0,0]);var h=this.getZoom()||0,p=this.getMinZoom(),S=this.getMaxZoom(),N=n.getNorthWest(),G=n.getSouthEast(),$=this.getSize().subtract(o),ct=Ht(this.project(G,h),this.project(N,h)).getSize(),At=Ot.any3d?this.options.zoomSnap:1,Xt=$.x/ct.x,se=$.y/ct.y,Ke=s?Math.max(Xt,se):Math.min(Xt,se);return h=this.getScaleZoom(Ke,h),At&&(h=Math.round(h/(At/100))*(At/100),h=s?Math.ceil(h/At)*At:Math.floor(h/At)*At),Math.max(p,Math.min(S,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new J(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(n,s){var o=this._getTopLeftPoint(n,s);return new dt(o,o.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(n){return this.options.crs.getProjectedBounds(n===void 0?this.getZoom():n)},getPane:function(n){return typeof n=="string"?this._panes[n]:n},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(n,s){var o=this.options.crs;return s=s===void 0?this._zoom:s,o.scale(n)/o.scale(s)},getScaleZoom:function(n,s){var o=this.options.crs;s=s===void 0?this._zoom:s;var h=o.zoom(n*o.scale(s));return isNaN(h)?1/0:h},project:function(n,s){return s=s===void 0?this._zoom:s,this.options.crs.latLngToPoint(q(n),s)},unproject:function(n,s){return s=s===void 0?this._zoom:s,this.options.crs.pointToLatLng(st(n),s)},layerPointToLatLng:function(n){var s=st(n).add(this.getPixelOrigin());return this.unproject(s)},latLngToLayerPoint:function(n){var s=this.project(q(n))._round();return s._subtract(this.getPixelOrigin())},wrapLatLng:function(n){return this.options.crs.wrapLatLng(q(n))},wrapLatLngBounds:function(n){return this.options.crs.wrapLatLngBounds(Kt(n))},distance:function(n,s){return this.options.crs.distance(q(n),q(s))},containerPointToLayerPoint:function(n){return st(n).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(n){return st(n).add(this._getMapPanePos())},containerPointToLatLng:function(n){var s=this.containerPointToLayerPoint(st(n));return this.layerPointToLatLng(s)},latLngToContainerPoint:function(n){return this.layerPointToContainerPoint(this.latLngToLayerPoint(q(n)))},mouseEventToContainerPoint:function(n){return gl(n,this._container)},mouseEventToLayerPoint:function(n){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(n))},mouseEventToLatLng:function(n){return this.layerPointToLatLng(this.mouseEventToLayerPoint(n))},_initContainer:function(n){var s=this._container=yt(n);if(s){if(s._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");te(s,"scroll",this._onScroll,this),this._containerId=d(s)},_initLayout:function(){var n=this._container;this._fadeAnimated=this.options.fadeAnimation&&Ot.any3d,Dt(n,"leaflet-container"+(Ot.touch?" leaflet-touch":"")+(Ot.retina?" leaflet-retina":"")+(Ot.ielt9?" leaflet-oldie":"")+(Ot.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var s=Pt(n,"position");s!=="absolute"&&s!=="relative"&&s!=="fixed"&&s!=="sticky"&&(n.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var n=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),we(this._mapPane,new J(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Dt(n.markerPane,"leaflet-zoom-hide"),Dt(n.shadowPane,"leaflet-zoom-hide"))},_resetView:function(n,s,o){we(this._mapPane,new J(0,0));var h=!this._loaded;this._loaded=!0,s=this._limitZoom(s),this.fire("viewprereset");var p=this._zoom!==s;this._moveStart(p,o)._move(n,s)._moveEnd(p),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(n,s){return n&&this.fire("zoomstart"),s||this.fire("movestart"),this},_move:function(n,s,o,h){s===void 0&&(s=this._zoom);var p=this._zoom!==s;return this._zoom=s,this._lastCenter=n,this._pixelOrigin=this._getNewPixelOrigin(n),h?o&&o.pinch&&this.fire("zoom",o):((p||o&&o.pinch)&&this.fire("zoom",o),this.fire("move",o)),this},_moveEnd:function(n){return n&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return Z(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(n){we(this._mapPane,this._getMapPanePos().subtract(n))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(n){this._targets={},this._targets[d(this._container)]=this;var s=n?Ae:te;s(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&s(window,"resize",this._onResize,this),Ot.any3d&&this.options.transform3DLimit&&(n?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){Z(this._resizeRequest),this._resizeRequest=B(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var n=this._getMapPanePos();Math.max(Math.abs(n.x),Math.abs(n.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(n,s){for(var o=[],h,p=s==="mouseout"||s==="mouseover",S=n.target||n.srcElement,N=!1;S;){if(h=this._targets[d(S)],h&&(s==="click"||s==="preclick")&&this._draggableMoved(h)){N=!0;break}if(h&&h.listens(s,!0)&&(p&&!ha(S,n)||(o.push(h),p))||S===this._container)break;S=S.parentNode}return!o.length&&!N&&!p&&this.listens(s,!0)&&(o=[this]),o},_isClickDisabled:function(n){for(;n&&n!==this._container;){if(n._leaflet_disable_click)return!0;n=n.parentNode}},_handleDOMEvent:function(n){var s=n.target||n.srcElement;if(!(!this._loaded||s._leaflet_disable_events||n.type==="click"&&this._isClickDisabled(s))){var o=n.type;o==="mousedown"&&sa(s),this._fireDOMEvent(n,o)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(n,s,o){if(n.type==="click"){var h=a({},n);h.type="preclick",this._fireDOMEvent(h,h.type,o)}var p=this._findEventTargets(n,s);if(o){for(var S=[],N=0;N<o.length;N++)o[N].listens(s,!0)&&S.push(o[N]);p=S.concat(p)}if(p.length){s==="contextmenu"&&We(n);var G=p[0],$={originalEvent:n};if(n.type!=="keypress"&&n.type!=="keydown"&&n.type!=="keyup"){var ct=G.getLatLng&&(!G._radius||G._radius<=10);$.containerPoint=ct?this.latLngToContainerPoint(G.getLatLng()):this.mouseEventToContainerPoint(n),$.layerPoint=this.containerPointToLayerPoint($.containerPoint),$.latlng=ct?G.getLatLng():this.layerPointToLatLng($.layerPoint)}for(N=0;N<p.length;N++)if(p[N].fire(s,$,!0),$.originalEvent._stopped||p[N].options.bubblingMouseEvents===!1&&I(this._mouseEvents,s)!==-1)return}},_draggableMoved:function(n){return n=n.dragging&&n.dragging.enabled()?n:this,n.dragging&&n.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var n=0,s=this._handlers.length;n<s;n++)this._handlers[n].disable()},whenReady:function(n,s){return this._loaded?n.call(s||this,{target:this}):this.on("load",n,s),this},_getMapPanePos:function(){return ue(this._mapPane)||new J(0,0)},_moved:function(){var n=this._getMapPanePos();return n&&!n.equals([0,0])},_getTopLeftPoint:function(n,s){var o=n&&s!==void 0?this._getNewPixelOrigin(n,s):this.getPixelOrigin();return o.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(n,s){var o=this.getSize()._divideBy(2);return this.project(n,s)._subtract(o)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(n,s,o){var h=this._getNewPixelOrigin(o,s);return this.project(n,s)._subtract(h)},_latLngBoundsToNewLayerBounds:function(n,s,o){var h=this._getNewPixelOrigin(o,s);return Ht([this.project(n.getSouthWest(),s)._subtract(h),this.project(n.getNorthWest(),s)._subtract(h),this.project(n.getSouthEast(),s)._subtract(h),this.project(n.getNorthEast(),s)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(n){return this.latLngToLayerPoint(n).subtract(this._getCenterLayerPoint())},_limitCenter:function(n,s,o){if(!o)return n;var h=this.project(n,s),p=this.getSize().divideBy(2),S=new dt(h.subtract(p),h.add(p)),N=this._getBoundsOffset(S,o,s);return Math.abs(N.x)<=1&&Math.abs(N.y)<=1?n:this.unproject(h.add(N),s)},_limitOffset:function(n,s){if(!s)return n;var o=this.getPixelBounds(),h=new dt(o.min.add(n),o.max.add(n));return n.add(this._getBoundsOffset(h,s))},_getBoundsOffset:function(n,s,o){var h=Ht(this.project(s.getNorthEast(),o),this.project(s.getSouthWest(),o)),p=h.min.subtract(n.min),S=h.max.subtract(n.max),N=this._rebound(p.x,-S.x),G=this._rebound(p.y,-S.y);return new J(N,G)},_rebound:function(n,s){return n+s>0?Math.round(n-s)/2:Math.max(0,Math.ceil(n))-Math.max(0,Math.floor(s))},_limitZoom:function(n){var s=this.getMinZoom(),o=this.getMaxZoom(),h=Ot.any3d?this.options.zoomSnap:1;return h&&(n=Math.round(n/h)*h),Math.max(s,Math.min(o,n))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Wt(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(n,s){var o=this._getCenterOffset(n)._trunc();return(s&&s.animate)!==!0&&!this.getSize().contains(o)?!1:(this.panBy(o,s),!0)},_createAnimProxy:function(){var n=this._proxy=ft("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(n),this.on("zoomanim",function(s){var o=H,h=this._proxy.style[o];De(this._proxy,this.project(s.center,s.zoom),this.getZoomScale(s.zoom,1)),h===this._proxy.style[o]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){Tt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var n=this.getCenter(),s=this.getZoom();De(this._proxy,this.project(n,s),this.getZoomScale(s,1))},_catchTransitionEnd:function(n){this._animatingZoom&&n.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(n,s,o){if(this._animatingZoom)return!0;if(o=o||{},!this._zoomAnimated||o.animate===!1||this._nothingToAnimate()||Math.abs(s-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(s),p=this._getCenterOffset(n)._divideBy(1-1/h);return o.animate!==!0&&!this.getSize().contains(p)?!1:(B(function(){this._moveStart(!0,o.noMoveStart||!1)._animateZoom(n,s,!0)},this),!0)},_animateZoom:function(n,s,o,h){this._mapPane&&(o&&(this._animatingZoom=!0,this._animateToCenter=n,this._animateToZoom=s,Dt(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:n,zoom:s,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Wt(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function qh(n,s){return new de(n,s)}var Sn=it.extend({options:{position:"topright"},initialize:function(n){w(this,n)},getPosition:function(){return this.options.position},setPosition:function(n){var s=this._map;return s&&s.removeControl(this),this.options.position=n,s&&s.addControl(this),this},getContainer:function(){return this._container},addTo:function(n){this.remove(),this._map=n;var s=this._container=this.onAdd(n),o=this.getPosition(),h=n._controlCorners[o];return Dt(s,"leaflet-control"),o.indexOf("bottom")!==-1?h.insertBefore(s,h.firstChild):h.appendChild(s),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(Tt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(n){this._map&&n&&n.screenX>0&&n.screenY>0&&this._map.getContainer().focus()}}),ys=function(n){return new Sn(n)};de.include({addControl:function(n){return n.addTo(this),this},removeControl:function(n){return n.remove(),this},_initControlPos:function(){var n=this._controlCorners={},s="leaflet-",o=this._controlContainer=ft("div",s+"control-container",this._container);function h(p,S){var N=s+p+" "+s+S;n[p+S]=ft("div",N,o)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var n in this._controlCorners)Tt(this._controlCorners[n]);Tt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var yl=Sn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(n,s,o,h){return o<h?-1:h<o?1:0}},initialize:function(n,s,o){w(this,o),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var h in n)this._addLayer(n[h],h);for(h in s)this._addLayer(s[h],h,!0)},onAdd:function(n){this._initLayout(),this._update(),this._map=n,n.on("zoomend",this._checkDisabledLayers,this);for(var s=0;s<this._layers.length;s++)this._layers[s].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(n){return Sn.prototype.addTo.call(this,n),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var n=0;n<this._layers.length;n++)this._layers[n].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(n,s){return this._addLayer(n,s),this._map?this._update():this},addOverlay:function(n,s){return this._addLayer(n,s,!0),this._map?this._update():this},removeLayer:function(n){n.off("add remove",this._onLayerChange,this);var s=this._getLayer(d(n));return s&&this._layers.splice(this._layers.indexOf(s),1),this._map?this._update():this},expand:function(){Dt(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var n=this._map.getSize().y-(this._container.offsetTop+50);return n<this._section.clientHeight?(Dt(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=n+"px"):Wt(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Wt(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var n="leaflet-control-layers",s=this._container=ft("div",n),o=this.options.collapsed;s.setAttribute("aria-haspopup",!0),xs(s),ca(s);var h=this._section=ft("section",n+"-list");o&&(this._map.on("click",this.collapse,this),te(s,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var p=this._layersLink=ft("a",n+"-toggle",s);p.href="#",p.title="Layers",p.setAttribute("role","button"),te(p,{keydown:function(S){S.keyCode===13&&this._expandSafely()},click:function(S){We(S),this._expandSafely()}},this),o||this.expand(),this._baseLayersList=ft("div",n+"-base",h),this._separator=ft("div",n+"-separator",h),this._overlaysList=ft("div",n+"-overlays",h),s.appendChild(h)},_getLayer:function(n){for(var s=0;s<this._layers.length;s++)if(this._layers[s]&&d(this._layers[s].layer)===n)return this._layers[s]},_addLayer:function(n,s,o){this._map&&n.on("add remove",this._onLayerChange,this),this._layers.push({layer:n,name:s,overlay:o}),this.options.sortLayers&&this._layers.sort(c(function(h,p){return this.options.sortFunction(h.layer,p.layer,h.name,p.name)},this)),this.options.autoZIndex&&n.setZIndex&&(this._lastZIndex++,n.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Bt(this._baseLayersList),Bt(this._overlaysList),this._layerControlInputs=[];var n,s,o,h,p=0;for(o=0;o<this._layers.length;o++)h=this._layers[o],this._addItem(h),s=s||h.overlay,n=n||!h.overlay,p+=h.overlay?0:1;return this.options.hideSingleBase&&(n=n&&p>1,this._baseLayersList.style.display=n?"":"none"),this._separator.style.display=s&&n?"":"none",this},_onLayerChange:function(n){this._handlingClick||this._update();var s=this._getLayer(d(n.target)),o=s.overlay?n.type==="add"?"overlayadd":"overlayremove":n.type==="add"?"baselayerchange":null;o&&this._map.fire(o,s)},_createRadioElement:function(n,s){var o='<input type="radio" class="leaflet-control-layers-selector" name="'+n+'"'+(s?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=o,h.firstChild},_addItem:function(n){var s=document.createElement("label"),o=this._map.hasLayer(n.layer),h;n.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=o):h=this._createRadioElement("leaflet-base-layers_"+d(this),o),this._layerControlInputs.push(h),h.layerId=d(n.layer),te(h,"click",this._onInputClick,this);var p=document.createElement("span");p.innerHTML=" "+n.name;var S=document.createElement("span");s.appendChild(S),S.appendChild(h),S.appendChild(p);var N=n.overlay?this._overlaysList:this._baseLayersList;return N.appendChild(s),this._checkDisabledLayers(),s},_onInputClick:function(){if(!this._preventClick){var n=this._layerControlInputs,s,o,h=[],p=[];this._handlingClick=!0;for(var S=n.length-1;S>=0;S--)s=n[S],o=this._getLayer(s.layerId).layer,s.checked?h.push(o):s.checked||p.push(o);for(S=0;S<p.length;S++)this._map.hasLayer(p[S])&&this._map.removeLayer(p[S]);for(S=0;S<h.length;S++)this._map.hasLayer(h[S])||this._map.addLayer(h[S]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var n=this._layerControlInputs,s,o,h=this._map.getZoom(),p=n.length-1;p>=0;p--)s=n[p],o=this._getLayer(s.layerId).layer,s.disabled=o.options.minZoom!==void 0&&h<o.options.minZoom||o.options.maxZoom!==void 0&&h>o.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var n=this._section;this._preventClick=!0,te(n,"click",We),this.expand();var s=this;setTimeout(function(){Ae(n,"click",We),s._preventClick=!1})}}),Yh=function(n,s,o){return new yl(n,s,o)},ua=Sn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(n){var s="leaflet-control-zoom",o=ft("div",s+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,s+"-in",o,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,s+"-out",o,this._zoomOut),this._updateDisabled(),n.on("zoomend zoomlevelschange",this._updateDisabled,this),o},onRemove:function(n){n.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(n){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(n.shiftKey?3:1))},_zoomOut:function(n){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(n.shiftKey?3:1))},_createButton:function(n,s,o,h,p){var S=ft("a",o,h);return S.innerHTML=n,S.href="#",S.title=s,S.setAttribute("role","button"),S.setAttribute("aria-label",s),xs(S),te(S,"click",yi),te(S,"click",p,this),te(S,"click",this._refocusOnMap,this),S},_updateDisabled:function(){var n=this._map,s="leaflet-disabled";Wt(this._zoomInButton,s),Wt(this._zoomOutButton,s),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||n._zoom===n.getMinZoom())&&(Dt(this._zoomOutButton,s),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||n._zoom===n.getMaxZoom())&&(Dt(this._zoomInButton,s),this._zoomInButton.setAttribute("aria-disabled","true"))}});de.mergeOptions({zoomControl:!0}),de.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ua,this.addControl(this.zoomControl))});var jh=function(n){return new ua(n)},Ml=Sn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(n){var s="leaflet-control-scale",o=ft("div",s),h=this.options;return this._addScales(h,s+"-line",o),n.on(h.updateWhenIdle?"moveend":"move",this._update,this),n.whenReady(this._update,this),o},onRemove:function(n){n.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(n,s,o){n.metric&&(this._mScale=ft("div",s,o)),n.imperial&&(this._iScale=ft("div",s,o))},_update:function(){var n=this._map,s=n.getSize().y/2,o=n.distance(n.containerPointToLatLng([0,s]),n.containerPointToLatLng([this.options.maxWidth,s]));this._updateScales(o)},_updateScales:function(n){this.options.metric&&n&&this._updateMetric(n),this.options.imperial&&n&&this._updateImperial(n)},_updateMetric:function(n){var s=this._getRoundNum(n),o=s<1e3?s+" m":s/1e3+" km";this._updateScale(this._mScale,o,s/n)},_updateImperial:function(n){var s=n*3.2808399,o,h,p;s>5280?(o=s/5280,h=this._getRoundNum(o),this._updateScale(this._iScale,h+" mi",h/o)):(p=this._getRoundNum(s),this._updateScale(this._iScale,p+" ft",p/s))},_updateScale:function(n,s,o){n.style.width=Math.round(this.options.maxWidth*o)+"px",n.innerHTML=s},_getRoundNum:function(n){var s=Math.pow(10,(Math.floor(n)+"").length-1),o=n/s;return o=o>=10?10:o>=5?5:o>=3?3:o>=2?2:1,s*o}}),Kh=function(n){return new Ml(n)},Jh='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',da=Sn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Ot.inlineSvg?Jh+" ":"")+"Leaflet</a>"},initialize:function(n){w(this,n),this._attributions={}},onAdd:function(n){n.attributionControl=this,this._container=ft("div","leaflet-control-attribution"),xs(this._container);for(var s in n._layers)n._layers[s].getAttribution&&this.addAttribution(n._layers[s].getAttribution());return this._update(),n.on("layeradd",this._addAttribution,this),this._container},onRemove:function(n){n.off("layeradd",this._addAttribution,this)},_addAttribution:function(n){n.layer.getAttribution&&(this.addAttribution(n.layer.getAttribution()),n.layer.once("remove",function(){this.removeAttribution(n.layer.getAttribution())},this))},setPrefix:function(n){return this.options.prefix=n,this._update(),this},addAttribution:function(n){return n?(this._attributions[n]||(this._attributions[n]=0),this._attributions[n]++,this._update(),this):this},removeAttribution:function(n){return n?(this._attributions[n]&&(this._attributions[n]--,this._update()),this):this},_update:function(){if(this._map){var n=[];for(var s in this._attributions)this._attributions[s]&&n.push(s);var o=[];this.options.prefix&&o.push(this.options.prefix),n.length&&o.push(n.join(", ")),this._container.innerHTML=o.join(' <span aria-hidden="true">|</span> ')}}});de.mergeOptions({attributionControl:!0}),de.addInitHook(function(){this.options.attributionControl&&new da().addTo(this)});var $h=function(n){return new da(n)};Sn.Layers=yl,Sn.Zoom=ua,Sn.Scale=Ml,Sn.Attribution=da,ys.layers=Yh,ys.zoom=jh,ys.scale=Kh,ys.attribution=$h;var In=it.extend({initialize:function(n){this._map=n},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});In.addTo=function(n,s){return n.addHandler(s,this),this};var Qh={Events:tt},Sl=Ot.touch?"touchstart mousedown":"mousedown",ri=K.extend({options:{clickTolerance:3},initialize:function(n,s,o,h){w(this,h),this._element=n,this._dragStartTarget=s||n,this._preventOutline=o},enable:function(){this._enabled||(te(this._dragStartTarget,Sl,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ri._dragging===this&&this.finishDrag(!0),Ae(this._dragStartTarget,Sl,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(n){if(this._enabled&&(this._moved=!1,!Te(this._element,"leaflet-zoom-anim"))){if(n.touches&&n.touches.length!==1){ri._dragging===this&&this.finishDrag();return}if(!(ri._dragging||n.shiftKey||n.which!==1&&n.button!==1&&!n.touches)&&(ri._dragging=this,this._preventOutline&&sa(this._element),vi(),Ne(),!this._moving)){this.fire("down");var s=n.touches?n.touches[0]:n,o=pl(this._element);this._startPoint=new J(s.clientX,s.clientY),this._startPos=ue(this._element),this._parentScale=ra(o);var h=n.type==="mousedown";te(document,h?"mousemove":"touchmove",this._onMove,this),te(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(n){if(this._enabled){if(n.touches&&n.touches.length>1){this._moved=!0;return}var s=n.touches&&n.touches.length===1?n.touches[0]:n,o=new J(s.clientX,s.clientY)._subtract(this._startPoint);!o.x&&!o.y||Math.abs(o.x)+Math.abs(o.y)<this.options.clickTolerance||(o.x/=this._parentScale.x,o.y/=this._parentScale.y,We(n),this._moved||(this.fire("dragstart"),this._moved=!0,Dt(document.body,"leaflet-dragging"),this._lastTarget=n.target||n.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Dt(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(o),this._moving=!0,this._lastEvent=n,this._updatePosition())}},_updatePosition:function(){var n={originalEvent:this._lastEvent};this.fire("predrag",n),we(this._element,this._newPos),this.fire("drag",n)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(n){Wt(document.body,"leaflet-dragging"),this._lastTarget&&(Wt(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),Ae(document,"mousemove touchmove",this._onMove,this),Ae(document,"mouseup touchend touchcancel",this._onUp,this),Mn(),Ve();var s=this._moved&&this._moving;this._moving=!1,ri._dragging=!1,s&&this.fire("dragend",{noInertia:n,distance:this._newPos.distanceTo(this._startPos)})}});function bl(n,s,o){var h,p=[1,4,2,8],S,N,G,$,ct,At,Xt,se;for(S=0,At=n.length;S<At;S++)n[S]._code=Mi(n[S],s);for(G=0;G<4;G++){for(Xt=p[G],h=[],S=0,At=n.length,N=At-1;S<At;N=S++)$=n[S],ct=n[N],$._code&Xt?ct._code&Xt||(se=er(ct,$,Xt,s,o),se._code=Mi(se,s),h.push(se)):(ct._code&Xt&&(se=er(ct,$,Xt,s,o),se._code=Mi(se,s),h.push(se)),h.push($));n=h}return n}function El(n,s){var o,h,p,S,N,G,$,ct,At;if(!n||n.length===0)throw new Error("latlngs not passed");pn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var Xt=q([0,0]),se=Kt(n),Ke=se.getNorthWest().distanceTo(se.getSouthWest())*se.getNorthEast().distanceTo(se.getNorthWest());Ke<1700&&(Xt=fa(n));var He=n.length,mn=[];for(o=0;o<He;o++){var rn=q(n[o]);mn.push(s.project(q([rn.lat-Xt.lat,rn.lng-Xt.lng])))}for(G=$=ct=0,o=0,h=He-1;o<He;h=o++)p=mn[o],S=mn[h],N=p.y*S.x-S.y*p.x,$+=(p.x+S.x)*N,ct+=(p.y+S.y)*N,G+=N*3;G===0?At=mn[0]:At=[$/G,ct/G];var Hi=s.unproject(st(At));return q([Hi.lat+Xt.lat,Hi.lng+Xt.lng])}function fa(n){for(var s=0,o=0,h=0,p=0;p<n.length;p++){var S=q(n[p]);s+=S.lat,o+=S.lng,h++}return q([s/h,o/h])}var tu={__proto__:null,clipPolygon:bl,polygonCenter:El,centroid:fa};function Tl(n,s){if(!s||!n.length)return n.slice();var o=s*s;return n=iu(n,o),n=nu(n,o),n}function wl(n,s,o){return Math.sqrt(Ms(n,s,o,!0))}function eu(n,s,o){return Ms(n,s,o)}function nu(n,s){var o=n.length,h=typeof Uint8Array<"u"?Uint8Array:Array,p=new h(o);p[0]=p[o-1]=1,pa(n,p,s,0,o-1);var S,N=[];for(S=0;S<o;S++)p[S]&&N.push(n[S]);return N}function pa(n,s,o,h,p){var S=0,N,G,$;for(G=h+1;G<=p-1;G++)$=Ms(n[G],n[h],n[p],!0),$>S&&(N=G,S=$);S>o&&(s[N]=1,pa(n,s,o,h,N),pa(n,s,o,N,p))}function iu(n,s){for(var o=[n[0]],h=1,p=0,S=n.length;h<S;h++)su(n[h],n[p])>s&&(o.push(n[h]),p=h);return p<S-1&&o.push(n[S-1]),o}var Al;function Cl(n,s,o,h,p){var S=h?Al:Mi(n,o),N=Mi(s,o),G,$,ct;for(Al=N;;){if(!(S|N))return[n,s];if(S&N)return!1;G=S||N,$=er(n,s,G,o,p),ct=Mi($,o),G===S?(n=$,S=ct):(s=$,N=ct)}}function er(n,s,o,h,p){var S=s.x-n.x,N=s.y-n.y,G=h.min,$=h.max,ct,At;return o&8?(ct=n.x+S*($.y-n.y)/N,At=$.y):o&4?(ct=n.x+S*(G.y-n.y)/N,At=G.y):o&2?(ct=$.x,At=n.y+N*($.x-n.x)/S):o&1&&(ct=G.x,At=n.y+N*(G.x-n.x)/S),new J(ct,At,p)}function Mi(n,s){var o=0;return n.x<s.min.x?o|=1:n.x>s.max.x&&(o|=2),n.y<s.min.y?o|=4:n.y>s.max.y&&(o|=8),o}function su(n,s){var o=s.x-n.x,h=s.y-n.y;return o*o+h*h}function Ms(n,s,o,h){var p=s.x,S=s.y,N=o.x-p,G=o.y-S,$=N*N+G*G,ct;return $>0&&(ct=((n.x-p)*N+(n.y-S)*G)/$,ct>1?(p=o.x,S=o.y):ct>0&&(p+=N*ct,S+=G*ct)),N=n.x-p,G=n.y-S,h?N*N+G*G:new J(p,S)}function pn(n){return!R(n[0])||typeof n[0][0]!="object"&&typeof n[0][0]<"u"}function Pl(n){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),pn(n)}function Rl(n,s){var o,h,p,S,N,G,$,ct;if(!n||n.length===0)throw new Error("latlngs not passed");pn(n)||(console.warn("latlngs are not flat! Only the first ring will be used"),n=n[0]);var At=q([0,0]),Xt=Kt(n),se=Xt.getNorthWest().distanceTo(Xt.getSouthWest())*Xt.getNorthEast().distanceTo(Xt.getNorthWest());se<1700&&(At=fa(n));var Ke=n.length,He=[];for(o=0;o<Ke;o++){var mn=q(n[o]);He.push(s.project(q([mn.lat-At.lat,mn.lng-At.lng])))}for(o=0,h=0;o<Ke-1;o++)h+=He[o].distanceTo(He[o+1])/2;if(h===0)ct=He[0];else for(o=0,S=0;o<Ke-1;o++)if(N=He[o],G=He[o+1],p=N.distanceTo(G),S+=p,S>h){$=(S-h)/p,ct=[G.x-$*(G.x-N.x),G.y-$*(G.y-N.y)];break}var rn=s.unproject(st(ct));return q([rn.lat+At.lat,rn.lng+At.lng])}var ru={__proto__:null,simplify:Tl,pointToSegmentDistance:wl,closestPointOnSegment:eu,clipSegment:Cl,_getEdgeIntersection:er,_getBitCode:Mi,_sqClosestPointOnSegment:Ms,isFlat:pn,_flat:Pl,polylineCenter:Rl},ma={project:function(n){return new J(n.lng,n.lat)},unproject:function(n){return new Vt(n.y,n.x)},bounds:new dt([-180,-90],[180,90])},_a={R:6378137,R_MINOR:6356752314245179e-9,bounds:new dt([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(n){var s=Math.PI/180,o=this.R,h=n.lat*s,p=this.R_MINOR/o,S=Math.sqrt(1-p*p),N=S*Math.sin(h),G=Math.tan(Math.PI/4-h/2)/Math.pow((1-N)/(1+N),S/2);return h=-o*Math.log(Math.max(G,1e-10)),new J(n.lng*s*o,h)},unproject:function(n){for(var s=180/Math.PI,o=this.R,h=this.R_MINOR/o,p=Math.sqrt(1-h*h),S=Math.exp(-n.y/o),N=Math.PI/2-2*Math.atan(S),G=0,$=.1,ct;G<15&&Math.abs($)>1e-7;G++)ct=p*Math.sin(N),ct=Math.pow((1-ct)/(1+ct),p/2),$=Math.PI/2-2*Math.atan(S*ct)-N,N+=$;return new Vt(N*s,n.x*s/o)}},au={__proto__:null,LonLat:ma,Mercator:_a,SphericalMercator:Lt},ou=a({},Et,{code:"EPSG:3395",projection:_a,transformation:(function(){var n=.5/(Math.PI*_a.R);return Ce(n,.5,-n,.5)})()}),Ll=a({},Et,{code:"EPSG:4326",projection:ma,transformation:Ce(1/180,1,-1/180,.5)}),lu=a({},ot,{projection:ma,transformation:Ce(1,0,-1,0),scale:function(n){return Math.pow(2,n)},zoom:function(n){return Math.log(n)/Math.LN2},distance:function(n,s){var o=s.lng-n.lng,h=s.lat-n.lat;return Math.sqrt(o*o+h*h)},infinite:!0});ot.Earth=Et,ot.EPSG3395=ou,ot.EPSG3857=ae,ot.EPSG900913=_e,ot.EPSG4326=Ll,ot.Simple=lu;var bn=K.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(n){return n.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(n){return n&&n.removeLayer(this),this},getPane:function(n){return this._map.getPane(n?this.options[n]||n:this.options.pane)},addInteractiveTarget:function(n){return this._map._targets[d(n)]=this,this},removeInteractiveTarget:function(n){return delete this._map._targets[d(n)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(n){var s=n.target;if(s.hasLayer(this)){if(this._map=s,this._zoomAnimated=s._zoomAnimated,this.getEvents){var o=this.getEvents();s.on(o,this),this.once("remove",function(){s.off(o,this)},this)}this.onAdd(s),this.fire("add"),s.fire("layeradd",{layer:this})}}});de.include({addLayer:function(n){if(!n._layerAdd)throw new Error("The provided object is not a Layer.");var s=d(n);return this._layers[s]?this:(this._layers[s]=n,n._mapToAdd=this,n.beforeAdd&&n.beforeAdd(this),this.whenReady(n._layerAdd,n),this)},removeLayer:function(n){var s=d(n);return this._layers[s]?(this._loaded&&n.onRemove(this),delete this._layers[s],this._loaded&&(this.fire("layerremove",{layer:n}),n.fire("remove")),n._map=n._mapToAdd=null,this):this},hasLayer:function(n){return d(n)in this._layers},eachLayer:function(n,s){for(var o in this._layers)n.call(s,this._layers[o]);return this},_addLayers:function(n){n=n?R(n)?n:[n]:[];for(var s=0,o=n.length;s<o;s++)this.addLayer(n[s])},_addZoomLimit:function(n){(!isNaN(n.options.maxZoom)||!isNaN(n.options.minZoom))&&(this._zoomBoundLayers[d(n)]=n,this._updateZoomLevels())},_removeZoomLimit:function(n){var s=d(n);this._zoomBoundLayers[s]&&(delete this._zoomBoundLayers[s],this._updateZoomLevels())},_updateZoomLevels:function(){var n=1/0,s=-1/0,o=this._getZoomSpan();for(var h in this._zoomBoundLayers){var p=this._zoomBoundLayers[h].options;n=p.minZoom===void 0?n:Math.min(n,p.minZoom),s=p.maxZoom===void 0?s:Math.max(s,p.maxZoom)}this._layersMaxZoom=s===-1/0?void 0:s,this._layersMinZoom=n===1/0?void 0:n,o!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Oi=bn.extend({initialize:function(n,s){w(this,s),this._layers={};var o,h;if(n)for(o=0,h=n.length;o<h;o++)this.addLayer(n[o])},addLayer:function(n){var s=this.getLayerId(n);return this._layers[s]=n,this._map&&this._map.addLayer(n),this},removeLayer:function(n){var s=n in this._layers?n:this.getLayerId(n);return this._map&&this._layers[s]&&this._map.removeLayer(this._layers[s]),delete this._layers[s],this},hasLayer:function(n){var s=typeof n=="number"?n:this.getLayerId(n);return s in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(n){var s=Array.prototype.slice.call(arguments,1),o,h;for(o in this._layers)h=this._layers[o],h[n]&&h[n].apply(h,s);return this},onAdd:function(n){this.eachLayer(n.addLayer,n)},onRemove:function(n){this.eachLayer(n.removeLayer,n)},eachLayer:function(n,s){for(var o in this._layers)n.call(s,this._layers[o]);return this},getLayer:function(n){return this._layers[n]},getLayers:function(){var n=[];return this.eachLayer(n.push,n),n},setZIndex:function(n){return this.invoke("setZIndex",n)},getLayerId:function(n){return d(n)}}),cu=function(n,s){return new Oi(n,s)},Gn=Oi.extend({addLayer:function(n){return this.hasLayer(n)?this:(n.addEventParent(this),Oi.prototype.addLayer.call(this,n),this.fire("layeradd",{layer:n}))},removeLayer:function(n){return this.hasLayer(n)?(n in this._layers&&(n=this._layers[n]),n.removeEventParent(this),Oi.prototype.removeLayer.call(this,n),this.fire("layerremove",{layer:n})):this},setStyle:function(n){return this.invoke("setStyle",n)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var n=new kt;for(var s in this._layers){var o=this._layers[s];n.extend(o.getBounds?o.getBounds():o.getLatLng())}return n}}),hu=function(n,s){return new Gn(n,s)},Bi=it.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(n){w(this,n)},createIcon:function(n){return this._createIcon("icon",n)},createShadow:function(n){return this._createIcon("shadow",n)},_createIcon:function(n,s){var o=this._getIconUrl(n);if(!o){if(n==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(o,s&&s.tagName==="IMG"?s:null);return this._setIconStyles(h,n),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(n,s){var o=this.options,h=o[s+"Size"];typeof h=="number"&&(h=[h,h]);var p=st(h),S=st(s==="shadow"&&o.shadowAnchor||o.iconAnchor||p&&p.divideBy(2,!0));n.className="leaflet-marker-"+s+" "+(o.className||""),S&&(n.style.marginLeft=-S.x+"px",n.style.marginTop=-S.y+"px"),p&&(n.style.width=p.x+"px",n.style.height=p.y+"px")},_createImg:function(n,s){return s=s||document.createElement("img"),s.src=n,s},_getIconUrl:function(n){return Ot.retina&&this.options[n+"RetinaUrl"]||this.options[n+"Url"]}});function uu(n){return new Bi(n)}var Ss=Bi.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(n){return typeof Ss.imagePath!="string"&&(Ss.imagePath=this._detectIconPath()),(this.options.imagePath||Ss.imagePath)+Bi.prototype._getIconUrl.call(this,n)},_stripUrl:function(n){var s=function(o,h,p){var S=h.exec(o);return S&&S[p]};return n=s(n,/^url\((['"])?(.+)\1\)$/,2),n&&s(n,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var n=ft("div","leaflet-default-icon-path",document.body),s=Pt(n,"background-image")||Pt(n,"backgroundImage");if(document.body.removeChild(n),s=this._stripUrl(s),s)return s;var o=document.querySelector('link[href$="leaflet.css"]');return o?o.href.substring(0,o.href.length-11-1):""}}),Il=In.extend({initialize:function(n){this._marker=n},addHooks:function(){var n=this._marker._icon;this._draggable||(this._draggable=new ri(n,n,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Dt(n,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Wt(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(n){var s=this._marker,o=s._map,h=this._marker.options.autoPanSpeed,p=this._marker.options.autoPanPadding,S=ue(s._icon),N=o.getPixelBounds(),G=o.getPixelOrigin(),$=Ht(N.min._subtract(G).add(p),N.max._subtract(G).subtract(p));if(!$.contains(S)){var ct=st((Math.max($.max.x,S.x)-$.max.x)/(N.max.x-$.max.x)-(Math.min($.min.x,S.x)-$.min.x)/(N.min.x-$.min.x),(Math.max($.max.y,S.y)-$.max.y)/(N.max.y-$.max.y)-(Math.min($.min.y,S.y)-$.min.y)/(N.min.y-$.min.y)).multiplyBy(h);o.panBy(ct,{animate:!1}),this._draggable._newPos._add(ct),this._draggable._startPos._add(ct),we(s._icon,this._draggable._newPos),this._onDrag(n),this._panRequest=B(this._adjustPan.bind(this,n))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(n){this._marker.options.autoPan&&(Z(this._panRequest),this._panRequest=B(this._adjustPan.bind(this,n)))},_onDrag:function(n){var s=this._marker,o=s._shadow,h=ue(s._icon),p=s._map.layerPointToLatLng(h);o&&we(o,h),s._latlng=p,n.latlng=p,n.oldLatLng=this._oldLatLng,s.fire("move",n).fire("drag",n)},_onDragEnd:function(n){Z(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",n)}}),nr=bn.extend({options:{icon:new Ss,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(n,s){w(this,s),this._latlng=q(n)},onAdd:function(n){this._zoomAnimated=this._zoomAnimated&&n.options.markerZoomAnimation,this._zoomAnimated&&n.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(n){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&n.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(n){var s=this._latlng;return this._latlng=q(n),this.update(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},setZIndexOffset:function(n){return this.options.zIndexOffset=n,this.update()},getIcon:function(){return this.options.icon},setIcon:function(n){return this.options.icon=n,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var n=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(n)}return this},_initIcon:function(){var n=this.options,s="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),o=n.icon.createIcon(this._icon),h=!1;o!==this._icon&&(this._icon&&this._removeIcon(),h=!0,n.title&&(o.title=n.title),o.tagName==="IMG"&&(o.alt=n.alt||"")),Dt(o,s),n.keyboard&&(o.tabIndex="0",o.setAttribute("role","button")),this._icon=o,n.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&te(o,"focus",this._panOnFocus,this);var p=n.icon.createShadow(this._shadow),S=!1;p!==this._shadow&&(this._removeShadow(),S=!0),p&&(Dt(p,s),p.alt=""),this._shadow=p,n.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),p&&S&&this.getPane(n.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Ae(this._icon,"focus",this._panOnFocus,this),Tt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&Tt(this._shadow),this._shadow=null},_setPos:function(n){this._icon&&we(this._icon,n),this._shadow&&we(this._shadow,n),this._zIndex=n.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(n){this._icon&&(this._icon.style.zIndex=this._zIndex+n)},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center).round();this._setPos(s)},_initInteraction:function(){if(this.options.interactive&&(Dt(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Il)){var n=this.options.draggable;this.dragging&&(n=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Il(this),n&&this.dragging.enable()}},setOpacity:function(n){return this.options.opacity=n,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var n=this.options.opacity;this._icon&&jt(this._icon,n),this._shadow&&jt(this._shadow,n)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var n=this._map;if(n){var s=this.options.icon.options,o=s.iconSize?st(s.iconSize):st(0,0),h=s.iconAnchor?st(s.iconAnchor):st(0,0);n.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:o.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function du(n,s){return new nr(n,s)}var ai=bn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(n){this._renderer=n.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(n){return w(this,n),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&n&&Object.prototype.hasOwnProperty.call(n,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),ir=ai.extend({options:{fill:!0,radius:10},initialize:function(n,s){w(this,s),this._latlng=q(n),this._radius=this.options.radius},setLatLng:function(n){var s=this._latlng;return this._latlng=q(n),this.redraw(),this.fire("move",{oldLatLng:s,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(n){return this.options.radius=this._radius=n,this.redraw()},getRadius:function(){return this._radius},setStyle:function(n){var s=n&&n.radius||this._radius;return ai.prototype.setStyle.call(this,n),this.setRadius(s),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var n=this._radius,s=this._radiusY||n,o=this._clickTolerance(),h=[n+o,s+o];this._pxBounds=new dt(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(n){return n.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function fu(n,s){return new ir(n,s)}var ga=ir.extend({initialize:function(n,s,o){if(typeof s=="number"&&(s=a({},o,{radius:s})),w(this,s),this._latlng=q(n),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(n){return this._mRadius=n,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var n=[this._radius,this._radiusY||this._radius];return new kt(this._map.layerPointToLatLng(this._point.subtract(n)),this._map.layerPointToLatLng(this._point.add(n)))},setStyle:ai.prototype.setStyle,_project:function(){var n=this._latlng.lng,s=this._latlng.lat,o=this._map,h=o.options.crs;if(h.distance===Et.distance){var p=Math.PI/180,S=this._mRadius/Et.R/p,N=o.project([s+S,n]),G=o.project([s-S,n]),$=N.add(G).divideBy(2),ct=o.unproject($).lat,At=Math.acos((Math.cos(S*p)-Math.sin(s*p)*Math.sin(ct*p))/(Math.cos(s*p)*Math.cos(ct*p)))/p;(isNaN(At)||At===0)&&(At=S/Math.cos(Math.PI/180*s)),this._point=$.subtract(o.getPixelOrigin()),this._radius=isNaN(At)?0:$.x-o.project([ct,n-At]).x,this._radiusY=$.y-N.y}else{var Xt=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=o.latLngToLayerPoint(this._latlng),this._radius=this._point.x-o.latLngToLayerPoint(Xt).x}this._updateBounds()}});function pu(n,s,o){return new ga(n,s,o)}var Wn=ai.extend({options:{smoothFactor:1,noClip:!1},initialize:function(n,s){w(this,s),this._setLatLngs(n)},getLatLngs:function(){return this._latlngs},setLatLngs:function(n){return this._setLatLngs(n),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(n){for(var s=1/0,o=null,h=Ms,p,S,N=0,G=this._parts.length;N<G;N++)for(var $=this._parts[N],ct=1,At=$.length;ct<At;ct++){p=$[ct-1],S=$[ct];var Xt=h(n,p,S,!0);Xt<s&&(s=Xt,o=h(n,p,S))}return o&&(o.distance=Math.sqrt(s)),o},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Rl(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(n,s){return s=s||this._defaultShape(),n=q(n),s.push(n),this._bounds.extend(n),this.redraw()},_setLatLngs:function(n){this._bounds=new kt,this._latlngs=this._convertLatLngs(n)},_defaultShape:function(){return pn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(n){for(var s=[],o=pn(n),h=0,p=n.length;h<p;h++)o?(s[h]=q(n[h]),this._bounds.extend(s[h])):s[h]=this._convertLatLngs(n[h]);return s},_project:function(){var n=new dt;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,n),this._bounds.isValid()&&n.isValid()&&(this._rawPxBounds=n,this._updateBounds())},_updateBounds:function(){var n=this._clickTolerance(),s=new J(n,n);this._rawPxBounds&&(this._pxBounds=new dt([this._rawPxBounds.min.subtract(s),this._rawPxBounds.max.add(s)]))},_projectLatlngs:function(n,s,o){var h=n[0]instanceof Vt,p=n.length,S,N;if(h){for(N=[],S=0;S<p;S++)N[S]=this._map.latLngToLayerPoint(n[S]),o.extend(N[S]);s.push(N)}else for(S=0;S<p;S++)this._projectLatlngs(n[S],s,o)},_clipPoints:function(){var n=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}var s=this._parts,o,h,p,S,N,G,$;for(o=0,p=0,S=this._rings.length;o<S;o++)for($=this._rings[o],h=0,N=$.length;h<N-1;h++)G=Cl($[h],$[h+1],n,h,!0),G&&(s[p]=s[p]||[],s[p].push(G[0]),(G[1]!==$[h+1]||h===N-2)&&(s[p].push(G[1]),p++))}},_simplifyPoints:function(){for(var n=this._parts,s=this.options.smoothFactor,o=0,h=n.length;o<h;o++)n[o]=Tl(n[o],s)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(n,s){var o,h,p,S,N,G,$=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(o=0,S=this._parts.length;o<S;o++)for(G=this._parts[o],h=0,N=G.length,p=N-1;h<N;p=h++)if(!(!s&&h===0)&&wl(n,G[p],G[h])<=$)return!0;return!1}});function mu(n,s){return new Wn(n,s)}Wn._flat=Pl;var zi=Wn.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return El(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(n){var s=Wn.prototype._convertLatLngs.call(this,n),o=s.length;return o>=2&&s[0]instanceof Vt&&s[0].equals(s[o-1])&&s.pop(),s},_setLatLngs:function(n){Wn.prototype._setLatLngs.call(this,n),pn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return pn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var n=this._renderer._bounds,s=this.options.weight,o=new J(s,s);if(n=new dt(n.min.subtract(o),n.max.add(o)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(n))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,p=this._rings.length,S;h<p;h++)S=bl(this._rings[h],n,!0),S.length&&this._parts.push(S)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(n){var s=!1,o,h,p,S,N,G,$,ct;if(!this._pxBounds||!this._pxBounds.contains(n))return!1;for(S=0,$=this._parts.length;S<$;S++)for(o=this._parts[S],N=0,ct=o.length,G=ct-1;N<ct;G=N++)h=o[N],p=o[G],h.y>n.y!=p.y>n.y&&n.x<(p.x-h.x)*(n.y-h.y)/(p.y-h.y)+h.x&&(s=!s);return s||Wn.prototype._containsPoint.call(this,n,!0)}});function _u(n,s){return new zi(n,s)}var Xn=Gn.extend({initialize:function(n,s){w(this,s),this._layers={},n&&this.addData(n)},addData:function(n){var s=R(n)?n:n.features,o,h,p;if(s){for(o=0,h=s.length;o<h;o++)p=s[o],(p.geometries||p.geometry||p.features||p.coordinates)&&this.addData(p);return this}var S=this.options;if(S.filter&&!S.filter(n))return this;var N=sr(n,S);return N?(N.feature=or(n),N.defaultOptions=N.options,this.resetStyle(N),S.onEachFeature&&S.onEachFeature(n,N),this.addLayer(N)):this},resetStyle:function(n){return n===void 0?this.eachLayer(this.resetStyle,this):(n.options=a({},n.defaultOptions),this._setLayerStyle(n,this.options.style),this)},setStyle:function(n){return this.eachLayer(function(s){this._setLayerStyle(s,n)},this)},_setLayerStyle:function(n,s){n.setStyle&&(typeof s=="function"&&(s=s(n.feature)),n.setStyle(s))}});function sr(n,s){var o=n.type==="Feature"?n.geometry:n,h=o?o.coordinates:null,p=[],S=s&&s.pointToLayer,N=s&&s.coordsToLatLng||va,G,$,ct,At;if(!h&&!o)return null;switch(o.type){case"Point":return G=N(h),Dl(S,n,G,s);case"MultiPoint":for(ct=0,At=h.length;ct<At;ct++)G=N(h[ct]),p.push(Dl(S,n,G,s));return new Gn(p);case"LineString":case"MultiLineString":return $=rr(h,o.type==="LineString"?0:1,N),new Wn($,s);case"Polygon":case"MultiPolygon":return $=rr(h,o.type==="Polygon"?1:2,N),new zi($,s);case"GeometryCollection":for(ct=0,At=o.geometries.length;ct<At;ct++){var Xt=sr({geometry:o.geometries[ct],type:"Feature",properties:n.properties},s);Xt&&p.push(Xt)}return new Gn(p);case"FeatureCollection":for(ct=0,At=o.features.length;ct<At;ct++){var se=sr(o.features[ct],s);se&&p.push(se)}return new Gn(p);default:throw new Error("Invalid GeoJSON object.")}}function Dl(n,s,o,h){return n?n(s,o):new nr(o,h&&h.markersInheritOptions&&h)}function va(n){return new Vt(n[1],n[0],n[2])}function rr(n,s,o){for(var h=[],p=0,S=n.length,N;p<S;p++)N=s?rr(n[p],s-1,o):(o||va)(n[p]),h.push(N);return h}function xa(n,s){return n=q(n),n.alt!==void 0?[v(n.lng,s),v(n.lat,s),v(n.alt,s)]:[v(n.lng,s),v(n.lat,s)]}function ar(n,s,o,h){for(var p=[],S=0,N=n.length;S<N;S++)p.push(s?ar(n[S],pn(n[S])?0:s-1,o,h):xa(n[S],h));return!s&&o&&p.length>0&&p.push(p[0].slice()),p}function ki(n,s){return n.feature?a({},n.feature,{geometry:s}):or(s)}function or(n){return n.type==="Feature"||n.type==="FeatureCollection"?n:{type:"Feature",properties:{},geometry:n}}var ya={toGeoJSON:function(n){return ki(this,{type:"Point",coordinates:xa(this.getLatLng(),n)})}};nr.include(ya),ga.include(ya),ir.include(ya),Wn.include({toGeoJSON:function(n){var s=!pn(this._latlngs),o=ar(this._latlngs,s?1:0,!1,n);return ki(this,{type:(s?"Multi":"")+"LineString",coordinates:o})}}),zi.include({toGeoJSON:function(n){var s=!pn(this._latlngs),o=s&&!pn(this._latlngs[0]),h=ar(this._latlngs,o?2:s?1:0,!0,n);return s||(h=[h]),ki(this,{type:(o?"Multi":"")+"Polygon",coordinates:h})}}),Oi.include({toMultiPoint:function(n){var s=[];return this.eachLayer(function(o){s.push(o.toGeoJSON(n).geometry.coordinates)}),ki(this,{type:"MultiPoint",coordinates:s})},toGeoJSON:function(n){var s=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(s==="MultiPoint")return this.toMultiPoint(n);var o=s==="GeometryCollection",h=[];return this.eachLayer(function(p){if(p.toGeoJSON){var S=p.toGeoJSON(n);if(o)h.push(S.geometry);else{var N=or(S);N.type==="FeatureCollection"?h.push.apply(h,N.features):h.push(N)}}}),o?ki(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function Nl(n,s){return new Xn(n,s)}var gu=Nl,lr=bn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(n,s,o){this._url=n,this._bounds=Kt(s),w(this,o)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Dt(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){Tt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(n){return this.options.opacity=n,this._image&&this._updateOpacity(),this},setStyle:function(n){return n.opacity&&this.setOpacity(n.opacity),this},bringToFront:function(){return this._map&&Yt(this._image),this},bringToBack:function(){return this._map&&le(this._image),this},setUrl:function(n){return this._url=n,this._image&&(this._image.src=n),this},setBounds:function(n){return this._bounds=Kt(n),this._map&&this._reset(),this},getEvents:function(){var n={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var n=this._url.tagName==="IMG",s=this._image=n?this._url:ft("img");if(Dt(s,"leaflet-image-layer"),this._zoomAnimated&&Dt(s,"leaflet-zoom-animated"),this.options.className&&Dt(s,this.options.className),s.onselectstart=_,s.onmousemove=_,s.onload=c(this.fire,this,"load"),s.onerror=c(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(s.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),n){this._url=s.src;return}s.src=this._url,s.alt=this.options.alt},_animateZoom:function(n){var s=this._map.getZoomScale(n.zoom),o=this._map._latLngBoundsToNewLayerBounds(this._bounds,n.zoom,n.center).min;De(this._image,o,s)},_reset:function(){var n=this._image,s=new dt(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),o=s.getSize();we(n,s.min),n.style.width=o.x+"px",n.style.height=o.y+"px"},_updateOpacity:function(){jt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var n=this.options.errorOverlayUrl;n&&this._url!==n&&(this._url=n,this._image.src=n)},getCenter:function(){return this._bounds.getCenter()}}),vu=function(n,s,o){return new lr(n,s,o)},Ul=lr.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var n=this._url.tagName==="VIDEO",s=this._image=n?this._url:ft("video");if(Dt(s,"leaflet-image-layer"),this._zoomAnimated&&Dt(s,"leaflet-zoom-animated"),this.options.className&&Dt(s,this.options.className),s.onselectstart=_,s.onmousemove=_,s.onloadeddata=c(this.fire,this,"load"),n){for(var o=s.getElementsByTagName("source"),h=[],p=0;p<o.length;p++)h.push(o[p].src);this._url=o.length>0?h:[s.src];return}R(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(s.style,"objectFit")&&(s.style.objectFit="fill"),s.autoplay=!!this.options.autoplay,s.loop=!!this.options.loop,s.muted=!!this.options.muted,s.playsInline=!!this.options.playsInline;for(var S=0;S<this._url.length;S++){var N=ft("source");N.src=this._url[S],s.appendChild(N)}}});function xu(n,s,o){return new Ul(n,s,o)}var Fl=lr.extend({_initImage:function(){var n=this._image=this._url;Dt(n,"leaflet-image-layer"),this._zoomAnimated&&Dt(n,"leaflet-zoom-animated"),this.options.className&&Dt(n,this.options.className),n.onselectstart=_,n.onmousemove=_}});function yu(n,s,o){return new Fl(n,s,o)}var Dn=bn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(n,s){n&&(n instanceof Vt||R(n))?(this._latlng=q(n),w(this,s)):(w(this,n),this._source=s),this.options.content&&(this._content=this.options.content)},openOn:function(n){return n=arguments.length?n:this._source._map,n.hasLayer(this)||n.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(n){return this._map?this.close():(arguments.length?this._source=n:n=this._source,this._prepareOpen(),this.openOn(n._map)),this},onAdd:function(n){this._zoomAnimated=n._zoomAnimated,this._container||this._initLayout(),n._fadeAnimated&&jt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),n._fadeAnimated&&jt(this._container,1),this.bringToFront(),this.options.interactive&&(Dt(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(n){n._fadeAnimated?(jt(this._container,0),this._removeTimeout=setTimeout(c(Tt,void 0,this._container),200)):Tt(this._container),this.options.interactive&&(Wt(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(n){return this._latlng=q(n),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(n){return this._content=n,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var n={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Yt(this._container),this},bringToBack:function(){return this._map&&le(this._container),this},_prepareOpen:function(n){var s=this._source;if(!s._map)return!1;if(s instanceof Gn){s=null;var o=this._source._layers;for(var h in o)if(o[h]._map){s=o[h];break}if(!s)return!1;this._source=s}if(!n)if(s.getCenter)n=s.getCenter();else if(s.getLatLng)n=s.getLatLng();else if(s.getBounds)n=s.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(n),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var n=this._contentNode,s=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof s=="string")n.innerHTML=s;else{for(;n.hasChildNodes();)n.removeChild(n.firstChild);n.appendChild(s)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var n=this._map.latLngToLayerPoint(this._latlng),s=st(this.options.offset),o=this._getAnchor();this._zoomAnimated?we(this._container,n.add(o)):s=s.add(n).add(o);var h=this._containerBottom=-s.y,p=this._containerLeft=-Math.round(this._containerWidth/2)+s.x;this._container.style.bottom=h+"px",this._container.style.left=p+"px"}},_getAnchor:function(){return[0,0]}});de.include({_initOverlay:function(n,s,o,h){var p=s;return p instanceof n||(p=new n(h).setContent(s)),o&&p.setLatLng(o),p}}),bn.include({_initOverlay:function(n,s,o,h){var p=o;return p instanceof n?(w(p,h),p._source=this):(p=s&&!h?s:new n(h,this),p.setContent(o)),p}});var cr=Dn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(n){return n=arguments.length?n:this._source._map,!n.hasLayer(this)&&n._popup&&n._popup.options.autoClose&&n.removeLayer(n._popup),n._popup=this,Dn.prototype.openOn.call(this,n)},onAdd:function(n){Dn.prototype.onAdd.call(this,n),n.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof ai||this._source.on("preclick",xi))},onRemove:function(n){Dn.prototype.onRemove.call(this,n),n.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof ai||this._source.off("preclick",xi))},getEvents:function(){var n=Dn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(n.preclick=this.close),this.options.keepInView&&(n.moveend=this._adjustPan),n},_initLayout:function(){var n="leaflet-popup",s=this._container=ft("div",n+" "+(this.options.className||"")+" leaflet-zoom-animated"),o=this._wrapper=ft("div",n+"-content-wrapper",s);if(this._contentNode=ft("div",n+"-content",o),xs(s),ca(this._contentNode),te(s,"contextmenu",xi),this._tipContainer=ft("div",n+"-tip-container",s),this._tip=ft("div",n+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=ft("a",n+"-close-button",s);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',te(h,"click",function(p){We(p),this.close()},this)}},_updateLayout:function(){var n=this._contentNode,s=n.style;s.width="",s.whiteSpace="nowrap";var o=n.offsetWidth;o=Math.min(o,this.options.maxWidth),o=Math.max(o,this.options.minWidth),s.width=o+1+"px",s.whiteSpace="",s.height="";var h=n.offsetHeight,p=this.options.maxHeight,S="leaflet-popup-scrolled";p&&h>p?(s.height=p+"px",Dt(n,S)):Wt(n,S),this._containerWidth=this._container.offsetWidth},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center),o=this._getAnchor();we(this._container,s.add(o))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var n=this._map,s=parseInt(Pt(this._container,"marginBottom"),10)||0,o=this._container.offsetHeight+s,h=this._containerWidth,p=new J(this._containerLeft,-o-this._containerBottom);p._add(ue(this._container));var S=n.layerPointToContainerPoint(p),N=st(this.options.autoPanPadding),G=st(this.options.autoPanPaddingTopLeft||N),$=st(this.options.autoPanPaddingBottomRight||N),ct=n.getSize(),At=0,Xt=0;S.x+h+$.x>ct.x&&(At=S.x+h-ct.x+$.x),S.x-At-G.x<0&&(At=S.x-G.x),S.y+o+$.y>ct.y&&(Xt=S.y+o-ct.y+$.y),S.y-Xt-G.y<0&&(Xt=S.y-G.y),(At||Xt)&&(this.options.keepInView&&(this._autopanning=!0),n.fire("autopanstart").panBy([At,Xt]))}},_getAnchor:function(){return st(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Mu=function(n,s){return new cr(n,s)};de.mergeOptions({closePopupOnClick:!0}),de.include({openPopup:function(n,s,o){return this._initOverlay(cr,n,s,o).openOn(this),this},closePopup:function(n){return n=arguments.length?n:this._popup,n&&n.close(),this}}),bn.include({bindPopup:function(n,s){return this._popup=this._initOverlay(cr,this._popup,n,s),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(n){return this._popup&&(this instanceof Gn||(this._popup._source=this),this._popup._prepareOpen(n||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(n){return this._popup&&this._popup.setContent(n),this},getPopup:function(){return this._popup},_openPopup:function(n){if(!(!this._popup||!this._map)){yi(n);var s=n.layer||n.target;if(this._popup._source===s&&!(s instanceof ai)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(n.latlng);return}this._popup._source=s,this.openPopup(n.latlng)}},_movePopup:function(n){this._popup.setLatLng(n.latlng)},_onKeyPress:function(n){n.originalEvent.keyCode===13&&this._openPopup(n)}});var hr=Dn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(n){Dn.prototype.onAdd.call(this,n),this.setOpacity(this.options.opacity),n.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(n){Dn.prototype.onRemove.call(this,n),n.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var n=Dn.prototype.getEvents.call(this);return this.options.permanent||(n.preclick=this.close),n},_initLayout:function(){var n="leaflet-tooltip",s=n+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=ft("div",s),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+d(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(n){var s,o,h=this._map,p=this._container,S=h.latLngToContainerPoint(h.getCenter()),N=h.layerPointToContainerPoint(n),G=this.options.direction,$=p.offsetWidth,ct=p.offsetHeight,At=st(this.options.offset),Xt=this._getAnchor();G==="top"?(s=$/2,o=ct):G==="bottom"?(s=$/2,o=0):G==="center"?(s=$/2,o=ct/2):G==="right"?(s=0,o=ct/2):G==="left"?(s=$,o=ct/2):N.x<S.x?(G="right",s=0,o=ct/2):(G="left",s=$+(At.x+Xt.x)*2,o=ct/2),n=n.subtract(st(s,o,!0)).add(At).add(Xt),Wt(p,"leaflet-tooltip-right"),Wt(p,"leaflet-tooltip-left"),Wt(p,"leaflet-tooltip-top"),Wt(p,"leaflet-tooltip-bottom"),Dt(p,"leaflet-tooltip-"+G),we(p,n)},_updatePosition:function(){var n=this._map.latLngToLayerPoint(this._latlng);this._setPosition(n)},setOpacity:function(n){this.options.opacity=n,this._container&&jt(this._container,n)},_animateZoom:function(n){var s=this._map._latLngToNewLayerPoint(this._latlng,n.zoom,n.center);this._setPosition(s)},_getAnchor:function(){return st(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Su=function(n,s){return new hr(n,s)};de.include({openTooltip:function(n,s,o){return this._initOverlay(hr,n,s,o).openOn(this),this},closeTooltip:function(n){return n.close(),this}}),bn.include({bindTooltip:function(n,s){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(hr,this._tooltip,n,s),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(n){if(!(!n&&this._tooltipHandlersAdded)){var s=n?"off":"on",o={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?o.add=this._openTooltip:(o.mouseover=this._openTooltip,o.mouseout=this.closeTooltip,o.click=this._openTooltip,this._map?this._addFocusListeners():o.add=this._addFocusListeners),this._tooltip.options.sticky&&(o.mousemove=this._moveTooltip),this[s](o),this._tooltipHandlersAdded=!n}},openTooltip:function(n){return this._tooltip&&(this instanceof Gn||(this._tooltip._source=this),this._tooltip._prepareOpen(n)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(n){return this._tooltip&&this._tooltip.setContent(n),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(n){var s=typeof n.getElement=="function"&&n.getElement();s&&(te(s,"focus",function(){this._tooltip._source=n,this.openTooltip()},this),te(s,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(n){var s=typeof n.getElement=="function"&&n.getElement();s&&s.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(n){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var s=this;this._map.once("moveend",function(){s._openOnceFlag=!1,s._openTooltip(n)});return}this._tooltip._source=n.layer||n.target,this.openTooltip(this._tooltip.options.sticky?n.latlng:void 0)}},_moveTooltip:function(n){var s=n.latlng,o,h;this._tooltip.options.sticky&&n.originalEvent&&(o=this._map.mouseEventToContainerPoint(n.originalEvent),h=this._map.containerPointToLayerPoint(o),s=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(s)}});var Ol=Bi.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(n){var s=n&&n.tagName==="DIV"?n:document.createElement("div"),o=this.options;if(o.html instanceof Element?(Bt(s),s.appendChild(o.html)):s.innerHTML=o.html!==!1?o.html:"",o.bgPos){var h=st(o.bgPos);s.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(s,"icon"),s},createShadow:function(){return null}});function bu(n){return new Ol(n)}Bi.Default=Ss;var bs=bn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Ot.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(n){w(this,n)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(n){n._addZoomLimit(this)},onRemove:function(n){this._removeAllTiles(),Tt(this._container),n._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Yt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(le(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(n){return this.options.opacity=n,this._updateOpacity(),this},setZIndex:function(n){return this.options.zIndex=n,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var n=this._clampZoom(this._map.getZoom());n!==this._tileZoom&&(this._tileZoom=n,this._updateLevels()),this._update()}return this},getEvents:function(){var n={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=f(this._onMoveEnd,this.options.updateInterval,this)),n.move=this._onMove),this._zoomAnimated&&(n.zoomanim=this._animateZoom),n},createTile:function(){return document.createElement("div")},getTileSize:function(){var n=this.options.tileSize;return n instanceof J?n:new J(n,n)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(n){for(var s=this.getPane().children,o=-n(-1/0,1/0),h=0,p=s.length,S;h<p;h++)S=s[h].style.zIndex,s[h]!==this._container&&S&&(o=n(o,+S));isFinite(o)&&(this.options.zIndex=o+n(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Ot.ielt9){jt(this._container,this.options.opacity);var n=+new Date,s=!1,o=!1;for(var h in this._tiles){var p=this._tiles[h];if(!(!p.current||!p.loaded)){var S=Math.min(1,(n-p.loaded)/200);jt(p.el,S),S<1?s=!0:(p.active?o=!0:this._onOpaqueTile(p),p.active=!0)}}o&&!this._noPrune&&this._pruneTiles(),s&&(Z(this._fadeFrame),this._fadeFrame=B(this._updateOpacity,this))}},_onOpaqueTile:_,_initContainer:function(){this._container||(this._container=ft("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var n=this._tileZoom,s=this.options.maxZoom;if(n!==void 0){for(var o in this._levels)o=Number(o),this._levels[o].el.children.length||o===n?(this._levels[o].el.style.zIndex=s-Math.abs(n-o),this._onUpdateLevel(o)):(Tt(this._levels[o].el),this._removeTilesAtZoom(o),this._onRemoveLevel(o),delete this._levels[o]);var h=this._levels[n],p=this._map;return h||(h=this._levels[n]={},h.el=ft("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=s,h.origin=p.project(p.unproject(p.getPixelOrigin()),n).round(),h.zoom=n,this._setZoomTransform(h,p.getCenter(),p.getZoom()),_(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:_,_onRemoveLevel:_,_onCreateLevel:_,_pruneTiles:function(){if(this._map){var n,s,o=this._map.getZoom();if(o>this.options.maxZoom||o<this.options.minZoom){this._removeAllTiles();return}for(n in this._tiles)s=this._tiles[n],s.retain=s.current;for(n in this._tiles)if(s=this._tiles[n],s.current&&!s.active){var h=s.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(n in this._tiles)this._tiles[n].retain||this._removeTile(n)}},_removeTilesAtZoom:function(n){for(var s in this._tiles)this._tiles[s].coords.z===n&&this._removeTile(s)},_removeAllTiles:function(){for(var n in this._tiles)this._removeTile(n)},_invalidateAll:function(){for(var n in this._levels)Tt(this._levels[n].el),this._onRemoveLevel(Number(n)),delete this._levels[n];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(n,s,o,h){var p=Math.floor(n/2),S=Math.floor(s/2),N=o-1,G=new J(+p,+S);G.z=+N;var $=this._tileCoordsToKey(G),ct=this._tiles[$];return ct&&ct.active?(ct.retain=!0,!0):(ct&&ct.loaded&&(ct.retain=!0),N>h?this._retainParent(p,S,N,h):!1)},_retainChildren:function(n,s,o,h){for(var p=2*n;p<2*n+2;p++)for(var S=2*s;S<2*s+2;S++){var N=new J(p,S);N.z=o+1;var G=this._tileCoordsToKey(N),$=this._tiles[G];if($&&$.active){$.retain=!0;continue}else $&&$.loaded&&($.retain=!0);o+1<h&&this._retainChildren(p,S,o+1,h)}},_resetView:function(n){var s=n&&(n.pinch||n.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),s,s)},_animateZoom:function(n){this._setView(n.center,n.zoom,!0,n.noUpdate)},_clampZoom:function(n){var s=this.options;return s.minNativeZoom!==void 0&&n<s.minNativeZoom?s.minNativeZoom:s.maxNativeZoom!==void 0&&s.maxNativeZoom<n?s.maxNativeZoom:n},_setView:function(n,s,o,h){var p=Math.round(s);this.options.maxZoom!==void 0&&p>this.options.maxZoom||this.options.minZoom!==void 0&&p<this.options.minZoom?p=void 0:p=this._clampZoom(p);var S=this.options.updateWhenZooming&&p!==this._tileZoom;(!h||S)&&(this._tileZoom=p,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),p!==void 0&&this._update(n),o||this._pruneTiles(),this._noPrune=!!o),this._setZoomTransforms(n,s)},_setZoomTransforms:function(n,s){for(var o in this._levels)this._setZoomTransform(this._levels[o],n,s)},_setZoomTransform:function(n,s,o){var h=this._map.getZoomScale(o,n.zoom),p=n.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(s,o)).round();Ot.any3d?De(n.el,p,h):we(n.el,p)},_resetGrid:function(){var n=this._map,s=n.options.crs,o=this._tileSize=this.getTileSize(),h=this._tileZoom,p=this._map.getPixelWorldBounds(this._tileZoom);p&&(this._globalTileRange=this._pxBoundsToTileRange(p)),this._wrapX=s.wrapLng&&!this.options.noWrap&&[Math.floor(n.project([0,s.wrapLng[0]],h).x/o.x),Math.ceil(n.project([0,s.wrapLng[1]],h).x/o.y)],this._wrapY=s.wrapLat&&!this.options.noWrap&&[Math.floor(n.project([s.wrapLat[0],0],h).y/o.x),Math.ceil(n.project([s.wrapLat[1],0],h).y/o.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(n){var s=this._map,o=s._animatingZoom?Math.max(s._animateToZoom,s.getZoom()):s.getZoom(),h=s.getZoomScale(o,this._tileZoom),p=s.project(n,this._tileZoom).floor(),S=s.getSize().divideBy(h*2);return new dt(p.subtract(S),p.add(S))},_update:function(n){var s=this._map;if(s){var o=this._clampZoom(s.getZoom());if(n===void 0&&(n=s.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(n),p=this._pxBoundsToTileRange(h),S=p.getCenter(),N=[],G=this.options.keepBuffer,$=new dt(p.getBottomLeft().subtract([G,-G]),p.getTopRight().add([G,-G]));if(!(isFinite(p.min.x)&&isFinite(p.min.y)&&isFinite(p.max.x)&&isFinite(p.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var ct in this._tiles){var At=this._tiles[ct].coords;(At.z!==this._tileZoom||!$.contains(new J(At.x,At.y)))&&(this._tiles[ct].current=!1)}if(Math.abs(o-this._tileZoom)>1){this._setView(n,o);return}for(var Xt=p.min.y;Xt<=p.max.y;Xt++)for(var se=p.min.x;se<=p.max.x;se++){var Ke=new J(se,Xt);if(Ke.z=this._tileZoom,!!this._isValidTile(Ke)){var He=this._tiles[this._tileCoordsToKey(Ke)];He?He.current=!0:N.push(Ke)}}if(N.sort(function(rn,Hi){return rn.distanceTo(S)-Hi.distanceTo(S)}),N.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var mn=document.createDocumentFragment();for(se=0;se<N.length;se++)this._addTile(N[se],mn);this._level.el.appendChild(mn)}}}},_isValidTile:function(n){var s=this._map.options.crs;if(!s.infinite){var o=this._globalTileRange;if(!s.wrapLng&&(n.x<o.min.x||n.x>o.max.x)||!s.wrapLat&&(n.y<o.min.y||n.y>o.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(n);return Kt(this.options.bounds).overlaps(h)},_keyToBounds:function(n){return this._tileCoordsToBounds(this._keyToTileCoords(n))},_tileCoordsToNwSe:function(n){var s=this._map,o=this.getTileSize(),h=n.scaleBy(o),p=h.add(o),S=s.unproject(h,n.z),N=s.unproject(p,n.z);return[S,N]},_tileCoordsToBounds:function(n){var s=this._tileCoordsToNwSe(n),o=new kt(s[0],s[1]);return this.options.noWrap||(o=this._map.wrapLatLngBounds(o)),o},_tileCoordsToKey:function(n){return n.x+":"+n.y+":"+n.z},_keyToTileCoords:function(n){var s=n.split(":"),o=new J(+s[0],+s[1]);return o.z=+s[2],o},_removeTile:function(n){var s=this._tiles[n];s&&(Tt(s.el),delete this._tiles[n],this.fire("tileunload",{tile:s.el,coords:this._keyToTileCoords(n)}))},_initTile:function(n){Dt(n,"leaflet-tile");var s=this.getTileSize();n.style.width=s.x+"px",n.style.height=s.y+"px",n.onselectstart=_,n.onmousemove=_,Ot.ielt9&&this.options.opacity<1&&jt(n,this.options.opacity)},_addTile:function(n,s){var o=this._getTilePos(n),h=this._tileCoordsToKey(n),p=this.createTile(this._wrapCoords(n),c(this._tileReady,this,n));this._initTile(p),this.createTile.length<2&&B(c(this._tileReady,this,n,null,p)),we(p,o),this._tiles[h]={el:p,coords:n,current:!0},s.appendChild(p),this.fire("tileloadstart",{tile:p,coords:n})},_tileReady:function(n,s,o){s&&this.fire("tileerror",{error:s,tile:o,coords:n});var h=this._tileCoordsToKey(n);o=this._tiles[h],o&&(o.loaded=+new Date,this._map._fadeAnimated?(jt(o.el,0),Z(this._fadeFrame),this._fadeFrame=B(this._updateOpacity,this)):(o.active=!0,this._pruneTiles()),s||(Dt(o.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:o.el,coords:n})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Ot.ielt9||!this._map._fadeAnimated?B(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(n){return n.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(n){var s=new J(this._wrapX?g(n.x,this._wrapX):n.x,this._wrapY?g(n.y,this._wrapY):n.y);return s.z=n.z,s},_pxBoundsToTileRange:function(n){var s=this.getTileSize();return new dt(n.min.unscaleBy(s).floor(),n.max.unscaleBy(s).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var n in this._tiles)if(!this._tiles[n].loaded)return!1;return!0}});function Eu(n){return new bs(n)}var Vi=bs.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(n,s){this._url=n,s=w(this,s),s.detectRetina&&Ot.retina&&s.maxZoom>0?(s.tileSize=Math.floor(s.tileSize/2),s.zoomReverse?(s.zoomOffset--,s.minZoom=Math.min(s.maxZoom,s.minZoom+1)):(s.zoomOffset++,s.maxZoom=Math.max(s.minZoom,s.maxZoom-1)),s.minZoom=Math.max(0,s.minZoom)):s.zoomReverse?s.minZoom=Math.min(s.maxZoom,s.minZoom):s.maxZoom=Math.max(s.minZoom,s.maxZoom),typeof s.subdomains=="string"&&(s.subdomains=s.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(n,s){return this._url===n&&s===void 0&&(s=!0),this._url=n,s||this.redraw(),this},createTile:function(n,s){var o=document.createElement("img");return te(o,"load",c(this._tileOnLoad,this,s,o)),te(o,"error",c(this._tileOnError,this,s,o)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(o.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(o.referrerPolicy=this.options.referrerPolicy),o.alt="",o.src=this.getTileUrl(n),o},getTileUrl:function(n){var s={r:Ot.retina?"@2x":"",s:this._getSubdomain(n),x:n.x,y:n.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var o=this._globalTileRange.max.y-n.y;this.options.tms&&(s.y=o),s["-y"]=o}return P(this._url,a(s,this.options))},_tileOnLoad:function(n,s){Ot.ielt9?setTimeout(c(n,this,null,s),0):n(null,s)},_tileOnError:function(n,s,o){var h=this.options.errorTileUrl;h&&s.getAttribute("src")!==h&&(s.src=h),n(o,s)},_onTileRemove:function(n){n.tile.onload=null},_getZoomForUrl:function(){var n=this._tileZoom,s=this.options.maxZoom,o=this.options.zoomReverse,h=this.options.zoomOffset;return o&&(n=s-n),n+h},_getSubdomain:function(n){var s=Math.abs(n.x+n.y)%this.options.subdomains.length;return this.options.subdomains[s]},_abortLoading:function(){var n,s;for(n in this._tiles)if(this._tiles[n].coords.z!==this._tileZoom&&(s=this._tiles[n].el,s.onload=_,s.onerror=_,!s.complete)){s.src=D;var o=this._tiles[n].coords;Tt(s),delete this._tiles[n],this.fire("tileabort",{tile:s,coords:o})}},_removeTile:function(n){var s=this._tiles[n];if(s)return s.el.setAttribute("src",D),bs.prototype._removeTile.call(this,n)},_tileReady:function(n,s,o){if(!(!this._map||o&&o.getAttribute("src")===D))return bs.prototype._tileReady.call(this,n,s,o)}});function Bl(n,s){return new Vi(n,s)}var zl=Vi.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(n,s){this._url=n;var o=a({},this.defaultWmsParams);for(var h in s)h in this.options||(o[h]=s[h]);s=w(this,s);var p=s.detectRetina&&Ot.retina?2:1,S=this.getTileSize();o.width=S.x*p,o.height=S.y*p,this.wmsParams=o},onAdd:function(n){this._crs=this.options.crs||n.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var s=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[s]=this._crs.code,Vi.prototype.onAdd.call(this,n)},getTileUrl:function(n){var s=this._tileCoordsToNwSe(n),o=this._crs,h=Ht(o.project(s[0]),o.project(s[1])),p=h.min,S=h.max,N=(this._wmsVersion>=1.3&&this._crs===Ll?[p.y,p.x,S.y,S.x]:[p.x,p.y,S.x,S.y]).join(","),G=Vi.prototype.getTileUrl.call(this,n);return G+x(this.wmsParams,G,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+N},setParams:function(n,s){return a(this.wmsParams,n),s||this.redraw(),this}});function Tu(n,s){return new zl(n,s)}Vi.WMS=zl,Bl.wms=Tu;var Zn=bn.extend({options:{padding:.1},initialize:function(n){w(this,n),d(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Dt(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var n={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(n.zoomanim=this._onAnimZoom),n},_onAnimZoom:function(n){this._updateTransform(n.center,n.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(n,s){var o=this._map.getZoomScale(s,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),p=this._map.project(this._center,s),S=h.multiplyBy(-o).add(p).subtract(this._map._getNewPixelOrigin(n,s));Ot.any3d?De(this._container,S,o):we(this._container,S)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var n in this._layers)this._layers[n]._reset()},_onZoomEnd:function(){for(var n in this._layers)this._layers[n]._project()},_updatePaths:function(){for(var n in this._layers)this._layers[n]._update()},_update:function(){var n=this.options.padding,s=this._map.getSize(),o=this._map.containerPointToLayerPoint(s.multiplyBy(-n)).round();this._bounds=new dt(o,o.add(s.multiplyBy(1+n*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),kl=Zn.extend({options:{tolerance:0},getEvents:function(){var n=Zn.prototype.getEvents.call(this);return n.viewprereset=this._onViewPreReset,n},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Zn.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var n=this._container=document.createElement("canvas");te(n,"mousemove",this._onMouseMove,this),te(n,"click dblclick mousedown mouseup contextmenu",this._onClick,this),te(n,"mouseout",this._handleMouseOut,this),n._leaflet_disable_events=!0,this._ctx=n.getContext("2d")},_destroyContainer:function(){Z(this._redrawRequest),delete this._ctx,Tt(this._container),Ae(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var n;this._redrawBounds=null;for(var s in this._layers)n=this._layers[s],n._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Zn.prototype._update.call(this);var n=this._bounds,s=this._container,o=n.getSize(),h=Ot.retina?2:1;we(s,n.min),s.width=h*o.x,s.height=h*o.y,s.style.width=o.x+"px",s.style.height=o.y+"px",Ot.retina&&this._ctx.scale(2,2),this._ctx.translate(-n.min.x,-n.min.y),this.fire("update")}},_reset:function(){Zn.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(n){this._updateDashArray(n),this._layers[d(n)]=n;var s=n._order={layer:n,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=s),this._drawLast=s,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(n){this._requestRedraw(n)},_removePath:function(n){var s=n._order,o=s.next,h=s.prev;o?o.prev=h:this._drawLast=h,h?h.next=o:this._drawFirst=o,delete n._order,delete this._layers[d(n)],this._requestRedraw(n)},_updatePath:function(n){this._extendRedrawBounds(n),n._project(),n._update(),this._requestRedraw(n)},_updateStyle:function(n){this._updateDashArray(n),this._requestRedraw(n)},_updateDashArray:function(n){if(typeof n.options.dashArray=="string"){var s=n.options.dashArray.split(/[, ]+/),o=[],h,p;for(p=0;p<s.length;p++){if(h=Number(s[p]),isNaN(h))return;o.push(h)}n.options._dashArray=o}else n.options._dashArray=n.options.dashArray},_requestRedraw:function(n){this._map&&(this._extendRedrawBounds(n),this._redrawRequest=this._redrawRequest||B(this._redraw,this))},_extendRedrawBounds:function(n){if(n._pxBounds){var s=(n.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new dt,this._redrawBounds.extend(n._pxBounds.min.subtract([s,s])),this._redrawBounds.extend(n._pxBounds.max.add([s,s]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var n=this._redrawBounds;if(n){var s=n.getSize();this._ctx.clearRect(n.min.x,n.min.y,s.x,s.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var n,s=this._redrawBounds;if(this._ctx.save(),s){var o=s.getSize();this._ctx.beginPath(),this._ctx.rect(s.min.x,s.min.y,o.x,o.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)n=h.layer,(!s||n._pxBounds&&n._pxBounds.intersects(s))&&n._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(n,s){if(this._drawing){var o,h,p,S,N=n._parts,G=N.length,$=this._ctx;if(G){for($.beginPath(),o=0;o<G;o++){for(h=0,p=N[o].length;h<p;h++)S=N[o][h],$[h?"lineTo":"moveTo"](S.x,S.y);s&&$.closePath()}this._fillStroke($,n)}}},_updateCircle:function(n){if(!(!this._drawing||n._empty())){var s=n._point,o=this._ctx,h=Math.max(Math.round(n._radius),1),p=(Math.max(Math.round(n._radiusY),1)||h)/h;p!==1&&(o.save(),o.scale(1,p)),o.beginPath(),o.arc(s.x,s.y/p,h,0,Math.PI*2,!1),p!==1&&o.restore(),this._fillStroke(o,n)}},_fillStroke:function(n,s){var o=s.options;o.fill&&(n.globalAlpha=o.fillOpacity,n.fillStyle=o.fillColor||o.color,n.fill(o.fillRule||"evenodd")),o.stroke&&o.weight!==0&&(n.setLineDash&&n.setLineDash(s.options&&s.options._dashArray||[]),n.globalAlpha=o.opacity,n.lineWidth=o.weight,n.strokeStyle=o.color,n.lineCap=o.lineCap,n.lineJoin=o.lineJoin,n.stroke())},_onClick:function(n){for(var s=this._map.mouseEventToLayerPoint(n),o,h,p=this._drawFirst;p;p=p.next)o=p.layer,o.options.interactive&&o._containsPoint(s)&&(!(n.type==="click"||n.type==="preclick")||!this._map._draggableMoved(o))&&(h=o);this._fireEvent(h?[h]:!1,n)},_onMouseMove:function(n){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var s=this._map.mouseEventToLayerPoint(n);this._handleMouseHover(n,s)}},_handleMouseOut:function(n){var s=this._hoveredLayer;s&&(Wt(this._container,"leaflet-interactive"),this._fireEvent([s],n,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(n,s){if(!this._mouseHoverThrottled){for(var o,h,p=this._drawFirst;p;p=p.next)o=p.layer,o.options.interactive&&o._containsPoint(s)&&(h=o);h!==this._hoveredLayer&&(this._handleMouseOut(n),h&&(Dt(this._container,"leaflet-interactive"),this._fireEvent([h],n,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,n),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(n,s,o){this._map._fireDOMEvent(s,o||s.type,n)},_bringToFront:function(n){var s=n._order;if(s){var o=s.next,h=s.prev;if(o)o.prev=h;else return;h?h.next=o:o&&(this._drawFirst=o),s.prev=this._drawLast,this._drawLast.next=s,s.next=null,this._drawLast=s,this._requestRedraw(n)}},_bringToBack:function(n){var s=n._order;if(s){var o=s.next,h=s.prev;if(h)h.next=o;else return;o?o.prev=h:h&&(this._drawLast=h),s.prev=null,s.next=this._drawFirst,this._drawFirst.prev=s,this._drawFirst=s,this._requestRedraw(n)}}});function Vl(n){return Ot.canvas?new kl(n):null}var Es=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(n){return document.createElement("<lvml:"+n+' class="lvml">')}}catch{}return function(n){return document.createElement("<"+n+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),wu={_initContainer:function(){this._container=ft("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Zn.prototype._update.call(this),this.fire("update"))},_initPath:function(n){var s=n._container=Es("shape");Dt(s,"leaflet-vml-shape "+(this.options.className||"")),s.coordsize="1 1",n._path=Es("path"),s.appendChild(n._path),this._updateStyle(n),this._layers[d(n)]=n},_addPath:function(n){var s=n._container;this._container.appendChild(s),n.options.interactive&&n.addInteractiveTarget(s)},_removePath:function(n){var s=n._container;Tt(s),n.removeInteractiveTarget(s),delete this._layers[d(n)]},_updateStyle:function(n){var s=n._stroke,o=n._fill,h=n.options,p=n._container;p.stroked=!!h.stroke,p.filled=!!h.fill,h.stroke?(s||(s=n._stroke=Es("stroke")),p.appendChild(s),s.weight=h.weight+"px",s.color=h.color,s.opacity=h.opacity,h.dashArray?s.dashStyle=R(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):s.dashStyle="",s.endcap=h.lineCap.replace("butt","flat"),s.joinstyle=h.lineJoin):s&&(p.removeChild(s),n._stroke=null),h.fill?(o||(o=n._fill=Es("fill")),p.appendChild(o),o.color=h.fillColor||h.color,o.opacity=h.fillOpacity):o&&(p.removeChild(o),n._fill=null)},_updateCircle:function(n){var s=n._point.round(),o=Math.round(n._radius),h=Math.round(n._radiusY||o);this._setPath(n,n._empty()?"M0 0":"AL "+s.x+","+s.y+" "+o+","+h+" 0,"+65535*360)},_setPath:function(n,s){n._path.v=s},_bringToFront:function(n){Yt(n._container)},_bringToBack:function(n){le(n._container)}},ur=Ot.vml?Es:ve,Ts=Zn.extend({_initContainer:function(){this._container=ur("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=ur("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){Tt(this._container),Ae(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Zn.prototype._update.call(this);var n=this._bounds,s=n.getSize(),o=this._container;(!this._svgSize||!this._svgSize.equals(s))&&(this._svgSize=s,o.setAttribute("width",s.x),o.setAttribute("height",s.y)),we(o,n.min),o.setAttribute("viewBox",[n.min.x,n.min.y,s.x,s.y].join(" ")),this.fire("update")}},_initPath:function(n){var s=n._path=ur("path");n.options.className&&Dt(s,n.options.className),n.options.interactive&&Dt(s,"leaflet-interactive"),this._updateStyle(n),this._layers[d(n)]=n},_addPath:function(n){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(n._path),n.addInteractiveTarget(n._path)},_removePath:function(n){Tt(n._path),n.removeInteractiveTarget(n._path),delete this._layers[d(n)]},_updatePath:function(n){n._project(),n._update()},_updateStyle:function(n){var s=n._path,o=n.options;s&&(o.stroke?(s.setAttribute("stroke",o.color),s.setAttribute("stroke-opacity",o.opacity),s.setAttribute("stroke-width",o.weight),s.setAttribute("stroke-linecap",o.lineCap),s.setAttribute("stroke-linejoin",o.lineJoin),o.dashArray?s.setAttribute("stroke-dasharray",o.dashArray):s.removeAttribute("stroke-dasharray"),o.dashOffset?s.setAttribute("stroke-dashoffset",o.dashOffset):s.removeAttribute("stroke-dashoffset")):s.setAttribute("stroke","none"),o.fill?(s.setAttribute("fill",o.fillColor||o.color),s.setAttribute("fill-opacity",o.fillOpacity),s.setAttribute("fill-rule",o.fillRule||"evenodd")):s.setAttribute("fill","none"))},_updatePoly:function(n,s){this._setPath(n,Qt(n._parts,s))},_updateCircle:function(n){var s=n._point,o=Math.max(Math.round(n._radius),1),h=Math.max(Math.round(n._radiusY),1)||o,p="a"+o+","+h+" 0 1,0 ",S=n._empty()?"M0 0":"M"+(s.x-o)+","+s.y+p+o*2+",0 "+p+-o*2+",0 ";this._setPath(n,S)},_setPath:function(n,s){n._path.setAttribute("d",s)},_bringToFront:function(n){Yt(n._path)},_bringToBack:function(n){le(n._path)}});Ot.vml&&Ts.include(wu);function Hl(n){return Ot.svg||Ot.vml?new Ts(n):null}de.include({getRenderer:function(n){var s=n.options.renderer||this._getPaneRenderer(n.options.pane)||this.options.renderer||this._renderer;return s||(s=this._renderer=this._createRenderer()),this.hasLayer(s)||this.addLayer(s),s},_getPaneRenderer:function(n){if(n==="overlayPane"||n===void 0)return!1;var s=this._paneRenderers[n];return s===void 0&&(s=this._createRenderer({pane:n}),this._paneRenderers[n]=s),s},_createRenderer:function(n){return this.options.preferCanvas&&Vl(n)||Hl(n)}});var Gl=zi.extend({initialize:function(n,s){zi.prototype.initialize.call(this,this._boundsToLatLngs(n),s)},setBounds:function(n){return this.setLatLngs(this._boundsToLatLngs(n))},_boundsToLatLngs:function(n){return n=Kt(n),[n.getSouthWest(),n.getNorthWest(),n.getNorthEast(),n.getSouthEast()]}});function Au(n,s){return new Gl(n,s)}Ts.create=ur,Ts.pointsToPath=Qt,Xn.geometryToLayer=sr,Xn.coordsToLatLng=va,Xn.coordsToLatLngs=rr,Xn.latLngToCoords=xa,Xn.latLngsToCoords=ar,Xn.getFeature=ki,Xn.asFeature=or,de.mergeOptions({boxZoom:!0});var Wl=In.extend({initialize:function(n){this._map=n,this._container=n._container,this._pane=n._panes.overlayPane,this._resetStateTimeout=0,n.on("unload",this._destroy,this)},addHooks:function(){te(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){Ae(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){Tt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(n){if(!n.shiftKey||n.which!==1&&n.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Ne(),vi(),this._startPoint=this._map.mouseEventToContainerPoint(n),te(document,{contextmenu:yi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(n){this._moved||(this._moved=!0,this._box=ft("div","leaflet-zoom-box",this._container),Dt(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(n);var s=new dt(this._point,this._startPoint),o=s.getSize();we(this._box,s.min),this._box.style.width=o.x+"px",this._box.style.height=o.y+"px"},_finish:function(){this._moved&&(Tt(this._box),Wt(this._container,"leaflet-crosshair")),Ve(),Mn(),Ae(document,{contextmenu:yi,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(n){if(!(n.which!==1&&n.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var s=new kt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(s).fire("boxzoomend",{boxZoomBounds:s})}},_onKeyDown:function(n){n.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});de.addInitHook("addHandler","boxZoom",Wl),de.mergeOptions({doubleClickZoom:!0});var Xl=In.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(n){var s=this._map,o=s.getZoom(),h=s.options.zoomDelta,p=n.originalEvent.shiftKey?o-h:o+h;s.options.doubleClickZoom==="center"?s.setZoom(p):s.setZoomAround(n.containerPoint,p)}});de.addInitHook("addHandler","doubleClickZoom",Xl),de.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Zl=In.extend({addHooks:function(){if(!this._draggable){var n=this._map;this._draggable=new ri(n._mapPane,n._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),n.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),n.on("zoomend",this._onZoomEnd,this),n.whenReady(this._onZoomEnd,this))}Dt(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Wt(this._map._container,"leaflet-grab"),Wt(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var n=this._map;if(n._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var s=Kt(this._map.options.maxBounds);this._offsetLimit=Ht(this._map.latLngToContainerPoint(s.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(s.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;n.fire("movestart").fire("dragstart"),n.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(n){if(this._map.options.inertia){var s=this._lastTime=+new Date,o=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(o),this._times.push(s),this._prunePositions(s)}this._map.fire("move",n).fire("drag",n)},_prunePositions:function(n){for(;this._positions.length>1&&n-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var n=this._map.getSize().divideBy(2),s=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=s.subtract(n).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(n,s){return n-(n-s)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var n=this._draggable._newPos.subtract(this._draggable._startPos),s=this._offsetLimit;n.x<s.min.x&&(n.x=this._viscousLimit(n.x,s.min.x)),n.y<s.min.y&&(n.y=this._viscousLimit(n.y,s.min.y)),n.x>s.max.x&&(n.x=this._viscousLimit(n.x,s.max.x)),n.y>s.max.y&&(n.y=this._viscousLimit(n.y,s.max.y)),this._draggable._newPos=this._draggable._startPos.add(n)}},_onPreDragWrap:function(){var n=this._worldWidth,s=Math.round(n/2),o=this._initialWorldOffset,h=this._draggable._newPos.x,p=(h-s+o)%n+s-o,S=(h+s+o)%n-s-o,N=Math.abs(p+o)<Math.abs(S+o)?p:S;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=N},_onDragEnd:function(n){var s=this._map,o=s.options,h=!o.inertia||n.noInertia||this._times.length<2;if(s.fire("dragend",n),h)s.fire("moveend");else{this._prunePositions(+new Date);var p=this._lastPos.subtract(this._positions[0]),S=(this._lastTime-this._times[0])/1e3,N=o.easeLinearity,G=p.multiplyBy(N/S),$=G.distanceTo([0,0]),ct=Math.min(o.inertiaMaxSpeed,$),At=G.multiplyBy(ct/$),Xt=ct/(o.inertiaDeceleration*N),se=At.multiplyBy(-Xt/2).round();!se.x&&!se.y?s.fire("moveend"):(se=s._limitOffset(se,s.options.maxBounds),B(function(){s.panBy(se,{duration:Xt,easeLinearity:N,noMoveStart:!0,animate:!0})}))}}});de.addInitHook("addHandler","dragging",Zl),de.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ql=In.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(n){this._map=n,this._setPanDelta(n.options.keyboardPanDelta),this._setZoomDelta(n.options.zoomDelta)},addHooks:function(){var n=this._map._container;n.tabIndex<=0&&(n.tabIndex="0"),te(n,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),Ae(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var n=document.body,s=document.documentElement,o=n.scrollTop||s.scrollTop,h=n.scrollLeft||s.scrollLeft;this._map._container.focus(),window.scrollTo(h,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(n){var s=this._panKeys={},o=this.keyCodes,h,p;for(h=0,p=o.left.length;h<p;h++)s[o.left[h]]=[-1*n,0];for(h=0,p=o.right.length;h<p;h++)s[o.right[h]]=[n,0];for(h=0,p=o.down.length;h<p;h++)s[o.down[h]]=[0,n];for(h=0,p=o.up.length;h<p;h++)s[o.up[h]]=[0,-1*n]},_setZoomDelta:function(n){var s=this._zoomKeys={},o=this.keyCodes,h,p;for(h=0,p=o.zoomIn.length;h<p;h++)s[o.zoomIn[h]]=n;for(h=0,p=o.zoomOut.length;h<p;h++)s[o.zoomOut[h]]=-n},_addHooks:function(){te(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){Ae(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(n){if(!(n.altKey||n.ctrlKey||n.metaKey)){var s=n.keyCode,o=this._map,h;if(s in this._panKeys){if(!o._panAnim||!o._panAnim._inProgress)if(h=this._panKeys[s],n.shiftKey&&(h=st(h).multiplyBy(3)),o.options.maxBounds&&(h=o._limitOffset(st(h),o.options.maxBounds)),o.options.worldCopyJump){var p=o.wrapLatLng(o.unproject(o.project(o.getCenter()).add(h)));o.panTo(p)}else o.panBy(h)}else if(s in this._zoomKeys)o.setZoom(o.getZoom()+(n.shiftKey?3:1)*this._zoomKeys[s]);else if(s===27&&o._popup&&o._popup.options.closeOnEscapeKey)o.closePopup();else return;yi(n)}}});de.addInitHook("addHandler","keyboard",ql),de.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Yl=In.extend({addHooks:function(){te(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){Ae(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(n){var s=vl(n),o=this._map.options.wheelDebounceTime;this._delta+=s,this._lastMousePos=this._map.mouseEventToContainerPoint(n),this._startTime||(this._startTime=+new Date);var h=Math.max(o-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),h),yi(n)},_performZoom:function(){var n=this._map,s=n.getZoom(),o=this._map.options.zoomSnap||0;n._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),p=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,S=o?Math.ceil(p/o)*o:p,N=n._limitZoom(s+(this._delta>0?S:-S))-s;this._delta=0,this._startTime=null,N&&(n.options.scrollWheelZoom==="center"?n.setZoom(s+N):n.setZoomAround(this._lastMousePos,s+N))}});de.addInitHook("addHandler","scrollWheelZoom",Yl);var Cu=600;de.mergeOptions({tapHold:Ot.touchNative&&Ot.safari&&Ot.mobile,tapTolerance:15});var jl=In.extend({addHooks:function(){te(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){Ae(this._map._container,"touchstart",this._onDown,this)},_onDown:function(n){if(clearTimeout(this._holdTimeout),n.touches.length===1){var s=n.touches[0];this._startPos=this._newPos=new J(s.clientX,s.clientY),this._holdTimeout=setTimeout(c(function(){this._cancel(),this._isTapValid()&&(te(document,"touchend",We),te(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",s))},this),Cu),te(document,"touchend touchcancel contextmenu",this._cancel,this),te(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function n(){Ae(document,"touchend",We),Ae(document,"touchend touchcancel",n)},_cancel:function(){clearTimeout(this._holdTimeout),Ae(document,"touchend touchcancel contextmenu",this._cancel,this),Ae(document,"touchmove",this._onMove,this)},_onMove:function(n){var s=n.touches[0];this._newPos=new J(s.clientX,s.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(n,s){var o=new MouseEvent(n,{bubbles:!0,cancelable:!0,view:window,screenX:s.screenX,screenY:s.screenY,clientX:s.clientX,clientY:s.clientY});o._simulated=!0,s.target.dispatchEvent(o)}});de.addInitHook("addHandler","tapHold",jl),de.mergeOptions({touchZoom:Ot.touch,bounceAtZoomLimits:!0});var Kl=In.extend({addHooks:function(){Dt(this._map._container,"leaflet-touch-zoom"),te(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Wt(this._map._container,"leaflet-touch-zoom"),Ae(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(n){var s=this._map;if(!(!n.touches||n.touches.length!==2||s._animatingZoom||this._zooming)){var o=s.mouseEventToContainerPoint(n.touches[0]),h=s.mouseEventToContainerPoint(n.touches[1]);this._centerPoint=s.getSize()._divideBy(2),this._startLatLng=s.containerPointToLatLng(this._centerPoint),s.options.touchZoom!=="center"&&(this._pinchStartLatLng=s.containerPointToLatLng(o.add(h)._divideBy(2))),this._startDist=o.distanceTo(h),this._startZoom=s.getZoom(),this._moved=!1,this._zooming=!0,s._stop(),te(document,"touchmove",this._onTouchMove,this),te(document,"touchend touchcancel",this._onTouchEnd,this),We(n)}},_onTouchMove:function(n){if(!(!n.touches||n.touches.length!==2||!this._zooming)){var s=this._map,o=s.mouseEventToContainerPoint(n.touches[0]),h=s.mouseEventToContainerPoint(n.touches[1]),p=o.distanceTo(h)/this._startDist;if(this._zoom=s.getScaleZoom(p,this._startZoom),!s.options.bounceAtZoomLimits&&(this._zoom<s.getMinZoom()&&p<1||this._zoom>s.getMaxZoom()&&p>1)&&(this._zoom=s._limitZoom(this._zoom)),s.options.touchZoom==="center"){if(this._center=this._startLatLng,p===1)return}else{var S=o._add(h)._divideBy(2)._subtract(this._centerPoint);if(p===1&&S.x===0&&S.y===0)return;this._center=s.unproject(s.project(this._pinchStartLatLng,this._zoom).subtract(S),this._zoom)}this._moved||(s._moveStart(!0,!1),this._moved=!0),Z(this._animRequest);var N=c(s._move,s,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=B(N,this,!0),We(n)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,Z(this._animRequest),Ae(document,"touchmove",this._onTouchMove,this),Ae(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});de.addInitHook("addHandler","touchZoom",Kl),de.BoxZoom=Wl,de.DoubleClickZoom=Xl,de.Drag=Zl,de.Keyboard=ql,de.ScrollWheelZoom=Yl,de.TapHold=jl,de.TouchZoom=Kl,e.Bounds=dt,e.Browser=Ot,e.CRS=ot,e.Canvas=kl,e.Circle=ga,e.CircleMarker=ir,e.Class=it,e.Control=Sn,e.DivIcon=Ol,e.DivOverlay=Dn,e.DomEvent=Zh,e.DomUtil=Wh,e.Draggable=ri,e.Evented=K,e.FeatureGroup=Gn,e.GeoJSON=Xn,e.GridLayer=bs,e.Handler=In,e.Icon=Bi,e.ImageOverlay=lr,e.LatLng=Vt,e.LatLngBounds=kt,e.Layer=bn,e.LayerGroup=Oi,e.LineUtil=ru,e.Map=de,e.Marker=nr,e.Mixin=Qh,e.Path=ai,e.Point=J,e.PolyUtil=tu,e.Polygon=zi,e.Polyline=Wn,e.Popup=cr,e.PosAnimation=xl,e.Projection=au,e.Rectangle=Gl,e.Renderer=Zn,e.SVG=Ts,e.SVGOverlay=Fl,e.TileLayer=Vi,e.Tooltip=hr,e.Transformation=oe,e.Util=j,e.VideoOverlay=Ul,e.bind=c,e.bounds=Ht,e.canvas=Vl,e.circle=pu,e.circleMarker=fu,e.control=ys,e.divIcon=bu,e.extend=a,e.featureGroup=hu,e.geoJSON=Nl,e.geoJson=gu,e.gridLayer=Eu,e.icon=uu,e.imageOverlay=vu,e.latLng=q,e.latLngBounds=Kt,e.layerGroup=cu,e.map=qh,e.marker=du,e.point=st,e.polygon=_u,e.polyline=mu,e.popup=Mu,e.rectangle=Au,e.setOptions=w,e.stamp=d,e.svg=Hl,e.svgOverlay=yu,e.tileLayer=Bl,e.tooltip=Su,e.transformation=Ce,e.version=i,e.videoOverlay=xu;var Pu=window.L;e.noConflict=function(){return window.L=Pu,this},window.L=e}))})(Os,Os.exports)),Os.exports}var Ds=vv();class xv{constructor(t,e){this.hal=e,this.map=Ds.map(t,{zoomControl:!1,attributionControl:!1}).setView([0,0],13),Ds.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{maxZoom:20}).addTo(this.map);const i=Ds.divIcon({className:"vehicle-marker",html:'<div style="width: 20px; height: 20px; background: #00f3ff; border-radius: 50%; box-shadow: 0 0 10px #00f3ff;"></div>',iconSize:[20,20],iconAnchor:[10,10]});this.marker=Ds.marker([0,0],{icon:i}).addTo(this.map),en(()=>{const a=this.hal.motion.location.lat.value,l=this.hal.motion.location.lng.value;if(a!==0&&l!==0){const c=new Ds.LatLng(a,l);this.marker.setLatLng(c),this.map.panTo(c)}}),setTimeout(()=>this.map.invalidateSize(),500)}map;marker}class yv{constructor(t){this.hal=t,this.overlay=document.createElement("div"),this.overlay.className="fixed inset-0 z-50 bg-black hidden flex items-center justify-center",this.overlay.innerHTML=`
            <video id="camera-feed" class="w-full h-full object-cover" autoplay playsinline></video>
            <div class="absolute inset-0 border-4 border-red-500/50 pointer-events-none"></div>
            <div class="absolute bottom-10 left-0 right-0 text-center text-red-500 text-2xl font-bold animate-pulse">check surroundings for safety</div>
        `,document.body.appendChild(this.overlay),this.videoElement=this.overlay.querySelector("video"),en(()=>{this.hal.powertrain.gear.value==="R"?this.startCamera():this.stopCamera()})}videoElement;overlay;async startCamera(){this.overlay.classList.remove("hidden");try{const t=await navigator.mediaDevices.getUserMedia({video:!0});this.videoElement.srcObject=t}catch(t){console.error("Camera access failed",t),this.videoElement.style.background="url(https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif) center/cover"}}stopCamera(){this.overlay.classList.add("hidden"),this.videoElement.srcObject&&(this.videoElement.srcObject.getTracks().forEach(e=>e.stop()),this.videoElement.srcObject=null)}}const re=new ku;window.hal=re;const Ur=new Vu,to=new rv,Mv=new av,Sv=new ov(Mv),is=new lv,bv=new cv(re),Ev=new hv(bv),fl=new uv(re),eh=new dv(fl);fl.scanLibrary();const Tv=new fv(re),wv=new pv(re),$o=new mv(re),Av=new _v(re);window.TwahhNative={onMessage:(r,t)=>{r==="gps"?wv.handleUpdate(t.lat,t.lng,t.heading):r==="canbus"?$o.handleCanMessage(t.id,t.payload):r==="intent"&&$o.handleNativeIntent(t)}};window.addEventListener("keydown",r=>{let t=0;r.key==="ArrowUp"&&(t=24),r.key==="ArrowDown"&&(t=25),r.key==="Enter"&&(t=85),r.key.toLowerCase()==="r"&&(re.powertrain.gear.value=re.powertrain.gear.value==="R"?"P":"R"),t>0&&$o.handleCanMessage(513,[t===24?1:t===25?2:0,t===85?1:0])});const Cv=document.querySelector("#app"),Pv=()=>[{id:"dashboard",label:"Dash",icon:"🏎️"},{id:"apps",label:"Apps",icon:"📱"},{id:"music",label:"Music",icon:"🎵"},{id:"diag",label:"Diag",icon:"⚙️"},{id:"weather",label:"Weather",icon:"🌦️"},{id:"settings",label:"Settings",icon:"🛠️"}].map(t=>`
        <button data-tab="${t.id}" class="flex-1 py-4 flex flex-col items-center gap-1 ${is.activeTab.value===t.id?"text-neon-cyan bg-white/5":"text-gray-400 hover:text-white"} transition">
            <span class="text-2xl">${t.icon}</span>
            <span class="text-xs uppercase tracking-wider">${t.label}</span>
        </button>
    `).join("");en(()=>{const r=is.activeTab.value;Cv.innerHTML=`
      <div class="relative w-screen h-screen overflow-hidden bg-bg-dark text-white select-none flex flex-col">
        
        <!-- Background 3D View (Always visible but z-indexed) -->
        <div id="scene-3d" class="absolute inset-0 z-0 opacity-80 pointer-events-none"></div>

        <!-- Main Content Area -->
        <div class="relative z-10 flex-1 overflow-hidden" id="main-content">
            <!-- Content injected via JS below -->
        </div>

        <!-- Bottom Tab Bar -->
        <div class="relative z-20 glass-panel border-t border-white/10 flex justify-between shrink-0" id="tab-bar">
            ${Pv()}
        </div>
      </div>
    `,document.querySelectorAll("[data-tab]").forEach(e=>{e.addEventListener("click",()=>is.setTab(e.getAttribute("data-tab")))});const t=document.getElementById("main-content");if(t.innerHTML="",r==="dashboard")t.innerHTML=`
        <div class="h-full p-6 flex gap-6 font-sans">
            <!-- Left Column: Status & Climate -->
            <div class="flex flex-col gap-6 w-[28%] shrink-0">
                <!-- Status Card -->
                <div id="status-card" class="m3-card p-6 flex flex-col justify-between h-[160px] animate-float relative overflow-hidden group cursor-pointer active:scale-95 transition-transform">
                    <div class="absolute -right-10 -top-10 w-32 h-32 bg-neon-cyan/10 blur-3xl rounded-full group-hover:bg-neon-cyan/20 transition duration-700"></div>
                    <div>
                        <h2 class="text-neon-cyan text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-glow">Unit Status</h2>
                        <div class="text-2xl font-bold flex items-center gap-3 italic">
                            <span class="w-2.5 h-2.5 bg-neon-green rounded-full animate-pulse-fast shadow-[0_0_10px_#00ff9d]"></span>
                            INTELLIGENCE ONLINE
                        </div>
                    </div>
                    <div class="flex items-baseline gap-3">
                         <span class="text-neon-magenta text-6xl font-black italic tracking-tighter" id="gear-val">N</span>
                         <span class="text-white/30 text-xs font-bold uppercase tracking-widest pl-2 border-l border-white/10 ml-2">Drive Config</span>
                    </div>
                </div>

                <!-- Climate Pill -->
                <div class="m3-card p-8 flex-1 flex flex-col justify-center items-center gap-6 relative overflow-hidden group">
                     <div class="absolute inset-0 bg-gradient-to-b from-transparent to-neon-cyan/5 opacity-50"></div>
                    <h2 class="text-neon-cyan text-[10px] font-black uppercase tracking-[0.3em] text-glow">Atmosphere</h2>
                    <div class="text-[8rem] font-bold text-white tracking-tighter leading-none text-glow italic" id="temp-val">20.0</div>
                    
                    <div class="flex gap-4 w-full">
                        <button id="btn-temp-down" class="glass-btn flex-1 py-5 rounded-4xl text-2xl hover:bg-neon-cyan/20">−</button>
                        <button id="btn-temp-up" class="glass-btn flex-1 py-5 rounded-4xl text-2xl hover:bg-neon-magenta/20">+</button>
                    </div>
                    <button id="btn-ac" class="glass-btn w-full py-4 rounded-3xl text-[10px] font-black tracking-[0.2em] uppercase text-neon-cyan border-neon-cyan/20">A/C Turbo Max</button>
                </div>
            </div>

            <!-- Center: 3D Visualizer (Transparent Context) -->
            <div class="flex-1 flex flex-col justify-between py-2 relative">
                <!-- Floating Header -->
                <div class="glass-panel mx-auto px-10 py-3 rounded-full flex gap-12 backdrop-blur-3xl border-white/10 shadow-2xl animate-float">
                    <span class="text-lg font-black italic">12:45 <span class="text-xs text-white/30 not-italic ml-1">PM</span></span>
                    <span class="text-white/10 font-thin text-2xl">|</span>
                    <span class="text-lg text-neon-yellow font-bold uppercase italic tracking-wider">24°C <span class="text-[10px] opacity-50 not-italic ml-1">EXT</span></span>
                </div>

                <!-- Speedometer (Floating) -->
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none select-none">
                    <div class="text-[12rem] font-black italic leading-none text-white tracking-tighter opacity-10 blur-[2px] absolute inset-0 translate-y-4">0</div>
                    <div class="text-[12rem] font-black italic leading-none text-glow text-white tracking-tighter" id="speed-val">0</div>
                    <div class="text-xl tracking-[1em] text-neon-cyan uppercase font-black pl-5 mt-[-1rem]">km/h</div>
                </div>

                <!-- Bottom Controls -->
                <div class="flex justify-center gap-6 mb-4 animate-float" style="animation-delay: -2s">
                     <button id="btn-lock" class="glass-btn w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all group">
                        <span class="text-3xl group-hover:text-neon-magenta transition-colors">🔒</span>
                     </button>
                     <button id="btn-trunk" class="glass-btn w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all group">
                        <span class="text-3xl group-hover:text-neon-cyan transition-colors">🚘</span>
                     </button>
                     <button id="btn-lights" class="glass-btn w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all group">
                        <span class="text-3xl group-hover:text-neon-yellow transition-colors">💡</span>
                     </button>
                </div>
            </div>

            <!-- Right Column: Nav & RPM -->
            <div class="flex flex-col gap-6 w-[28%] shrink-0">
                 <!-- Map Card -->
                <div class="m3-card p-2 rounded-5xl flex-1 relative overflow-hidden group shadow-2xl">
                    <div class="absolute inset-0 z-0 opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-auto" id="map-view"></div>
                    <div class="absolute bottom-6 left-6 z-10 glass-panel px-6 py-2 rounded-full text-[10px] font-black text-neon-cyan flex items-center gap-3 border-neon-cyan/20">
                        <span class="w-2 h-2 bg-neon-cyan rounded-full animate-pulse shadow-[0_0_10px_#00f3ff]"></span> GPS GUIDANCE ACTIVE
                    </div>
                </div>
                
                <!-- RPM/Music Widget Area -->
                <div id="music-widget-container" class="h-[220px] flex flex-col"></div>
                
                <!-- RPM Gauge -->
                <div class="m3-card p-6 h-[160px] flex flex-col justify-center relative overflow-hidden group">
                    <div class="absolute -left-12 -bottom-12 w-40 h-40 bg-neon-magenta/5 blur-3xl rounded-full"></div>
                    <h2 class="text-neon-magenta text-[10px] font-black uppercase tracking-[0.3em] mb-2 text-right text-glow">Engine Pulse</h2>
                    <div class="text-5xl font-black text-right text-white italic tracking-tighter leading-none" id="rpm-val">800</div>
                    <div class="text-right text-[10px] text-white/20 font-bold uppercase tracking-widest mt-2 pr-1">RPM <span class="opacity-50">× 1000</span></div>
                    
                    <!-- RPM Bar -->
                    <div class="w-full h-1.5 bg-white/5 rounded-full mt-4 overflow-hidden p-[1px]">
                        <div class="h-full bg-gradient-to-r from-neon-cyan to-neon-magenta w-1/3 animate-pulse shadow-[0_0_15px_rgba(255,0,85,0.5)]"></div>
                    </div>
                </div>
            </div>
        </div>`,new xv(document.getElementById("map-view"),re),document.getElementById("music-widget-container")?.appendChild(eh.element),Lv();else if(r==="apps")t.appendChild(Sv.element);else if(r==="music")t.appendChild(eh.element);else if(r==="diag")t.appendChild(Tv.element);else if(r==="weather")t.appendChild(Ev.element);else if(r==="settings"){const e="v3.2.0-expressive";t.innerHTML=`
            <div class="p-12 flex flex-col gap-8 max-w-4xl mx-auto h-full overflow-y-auto">
                <div>
                    <h2 class="text-5xl font-bold text-white tracking-tighter italic">System <span class="text-neon-cyan">Config</span></h2>
                    <p class="text-white/30 text-[10px] uppercase tracking-[0.5em] mt-2 font-bold">Preferences & Core Calibration</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="m3-card p-8 flex flex-col gap-6 group hover:border-neon-cyan/40 transition-colors">
                        <div class="flex justify-between items-center">
                            <h3 class="text-white font-bold italic text-lg">Visual Resonance</h3>
                            <span class="text-neon-cyan text-[10px] font-black uppercase tracking-widest">Theme</span>
                        </div>
                        <div class="flex flex-wrap gap-3">
                            <button id="set-theme-cyberpunk" class="glass-btn px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest ${Ur.currentTheme.value==="cyberpunk"?"bg-neon-cyan/20 text-neon-cyan border-neon-cyan/30 shadow-[0_0_15px_rgba(0,243,255,0.2)]":"text-white/40 border-white/5"}">Cyberpunk</button>
                            <button id="set-theme-sport" class="glass-btn px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest ${Ur.currentTheme.value==="sport"?"bg-neon-magenta/20 text-neon-magenta border-neon-magenta/30 shadow-[0_0_15px_rgba(255,0,85,0.2)]":"text-white/40 border-white/5"}">Sport Mode</button>
                        </div>
                    </div>

                    <div class="m3-card p-8 flex flex-col gap-6 group hover:border-neon-magenta/40 transition-colors">
                        <div class="flex justify-between items-center">
                            <h3 class="text-white font-bold italic text-lg">Holo Architecture</h3>
                            <span class="text-neon-magenta text-[10px] font-black uppercase tracking-widest">Version</span>
                        </div>
                        <div class="bg-white/5 p-6 rounded-4xl border border-white/5 shadow-inner mb-2">
                            <span class="font-black text-white italic tracking-tighter text-3xl">${e}</span>
                        </div>
                        
                        <div class="flex justify-between items-center border-t border-white/5 pt-4">
                            <span class="text-white/50 text-xs font-bold uppercase tracking-widest">Demo Mode</span>
                            <button id="toggle-demo" class="glass-btn px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest ${re.system.demoMode.value?"bg-neon-yellow/20 text-neon-yellow border-neon-yellow/50":"text-white/20 border-white/5"}">
                                ${re.system.demoMode.value?"ACTIVE":"OFF"}
                            </button>
                        </div>
                    </div>
                </div>

                <div class="m3-card p-8 flex items-center justify-between border-neon-cyan/10">
                    <div class="flex items-center gap-6">
                        <div class="w-16 h-16 rounded-3xl bg-neon-cyan/10 flex items-center justify-center text-3xl">🧩</div>
                        <div>
                            <div class="text-white font-bold italic">Module Registry</div>
                            <div class="text-[10px] text-white/30 font-black uppercase tracking-widest mt-1">Check for component updates</div>
                        </div>
                    </div>
                    <button class="glass-btn px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest text-neon-cyan border-neon-cyan/20">Sync Nexus</button>
                </div>
            </div>
        `,setTimeout(()=>{t.querySelector("#set-theme-cyberpunk")?.addEventListener("click",()=>{Ur.setTheme("cyberpunk"),is.setTab("settings")}),t.querySelector("#set-theme-sport")?.addEventListener("click",()=>{Ur.setTheme("sport"),is.setTab("settings")}),t.querySelector("#toggle-demo")?.addEventListener("click",()=>{re.system.demoMode.value=!re.system.demoMode.value,is.setTab("settings"),re.system.demoMode.value&&fl.scanLibrary()})},0)}else t.innerHTML=`<div class="flex items-center justify-center h-full text-white/20 text-4xl">Coming Soon: ${r}</div>`});const Rv=document.getElementById("scene-3d");new sv(Rv,re);new yv(re);const Gh=new BootScreen(re,()=>{Gh.element.remove()});document.body.appendChild(Gh.element);const Lv=()=>{const r=(e,i)=>{const a=document.getElementById(e);a&&en(()=>a.textContent=i.value.toString())};r("rpm-val",re.powertrain.rpm),r("speed-val",re.powertrain.speed),r("gear-val",re.powertrain.gear),r("temp-val",re.body.climate.tempL);const t=document.getElementById("voice-status");t&&en(()=>{t.textContent=to.isListening.value?"Voice: Listening...":"Voice: Standby",to.lastCommand.value&&(t.textContent=`Voice: "${to.lastCommand.value}"`)}),document.getElementById("btn-lock")?.addEventListener("click",()=>re.toggleDoor("fl")),document.getElementById("btn-temp-up")?.addEventListener("click",()=>{re.setClimateTemp("left",re.body.climate.tempL.value+.5)}),document.getElementById("btn-temp-down")?.addEventListener("click",()=>{re.setClimateTemp("left",re.body.climate.tempL.value-.5)}),document.getElementById("btn-lights")?.addEventListener("click",()=>{re.body.lights.on.value=!re.body.lights.on.value}),document.getElementById("btn-trunk")?.addEventListener("click",()=>{re.body.doors.trunk.value=!re.body.doors.trunk.value}),document.getElementById("status-card")?.addEventListener("click",()=>{re.powertrain.speed.value>0?(re.powertrain.speed.value=0,re.powertrain.rpm.value=800,re.powertrain.gear.value="P"):(re.powertrain.speed.value=120,re.powertrain.rpm.value=3200,re.powertrain.gear.value="D")}),document.getElementById("btn-ac")?.addEventListener("click",()=>{Av.scanForFaults()})};
//# sourceMappingURL=index-BW1ekjnH.js.map
