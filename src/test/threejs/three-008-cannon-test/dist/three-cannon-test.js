(()=>{var xo="143";var jl=0,Vo=1,$l=2;var al=1,Jl=2,Ni=3,Ui=0,Ne=1,xi=2,Kl=1;var bn=0,pi=1,Wo=2,Go=3,Ho=4,Ql=5,ui=100,tc=101,ec=102,qo=103,Xo=104,nc=200,ic=201,sc=202,rc=203,ll=204,cl=205,oc=206,ac=207,lc=208,cc=209,hc=210,uc=0,dc=1,fc=2,Or=3,pc=4,mc=5,gc=6,xc=7,hl=0,vc=1,yc=2,sn=0,_c=1,wc=2,bc=3,Mc=4,Sc=5,ul=300,vi=301,yi=302,Ur=303,kr=304,Os=306,Vr=1e3,Fe=1001,Wr=1002,de=1003,Yo=1004;var Zo=1005;var Ee=1006,Ac=1007;var Us=1008;var Bn=1009,Tc=1010,Ec=1011,dl=1012,Cc=1013,Rn=1014,Dn=1015,ki=1016,Pc=1017,Lc=1018,mi=1020,Ic=1021,Rc=1022,He=1023,Dc=1024,Fc=1025,zn=1026,_i=1027,zc=1028,Nc=1029,Bc=1030,Oc=1031,Uc=1033,sr=33776,rr=33777,or=33778,ar=33779,jo=35840,$o=35841,Jo=35842,Ko=35843,kc=36196,Qo=37492,ta=37496,ea=37808,na=37809,ia=37810,sa=37811,ra=37812,oa=37813,aa=37814,la=37815,ca=37816,ha=37817,ua=37818,da=37819,fa=37820,pa=37821,ma=36492;var _s=2300,ws=2301,lr=2302,ga=2400,xa=2401,va=2402;var On=3e3,Gt=3001,Vc=3200,Wc=3201,Gc=0,Hc=1;var en="srgb",Fn="srgb-linear";var cr=7680;var qc=519,ya=35044;var _a="300 es",Gr=1035,Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}},se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var hr=Math.PI/180,wa=180/Math.PI;function Hi(){let c=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(se[c&255]+se[c>>8&255]+se[c>>16&255]+se[c>>24&255]+"-"+se[t&255]+se[t>>8&255]+"-"+se[t>>16&15|64]+se[t>>24&255]+"-"+se[e&63|128]+se[e>>8&255]+"-"+se[e>>16&255]+se[e>>24&255]+se[n&255]+se[n>>8&255]+se[n>>16&255]+se[n>>24&255]).toLowerCase()}function _e(c,t,e){return Math.max(t,Math.min(e,c))}function Xc(c,t){return(c%t+t)%t}function ur(c,t,e){return(1-e)*c+e*t}function ba(c){return(c&c-1)===0&&c!==0}function Hr(c){return Math.pow(2,Math.floor(Math.log(c)/Math.LN2))}var Bt=class{constructor(t=0,e=0){Bt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},fe=class{constructor(){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,a,l){let u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=a,u[6]=n,u[7]=r,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],a=n[6],l=n[1],u=n[4],d=n[7],h=n[2],m=n[5],g=n[8],p=i[0],f=i[3],v=i[6],x=i[1],b=i[4],y=i[7],M=i[2],T=i[5],I=i[8];return s[0]=r*p+o*x+a*M,s[3]=r*f+o*b+a*T,s[6]=r*v+o*y+a*I,s[1]=l*p+u*x+d*M,s[4]=l*f+u*b+d*T,s[7]=l*v+u*y+d*I,s[2]=h*p+m*x+g*M,s[5]=h*f+m*b+g*T,s[8]=h*v+m*y+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],l=t[7],u=t[8];return e*r*u-e*o*l-n*s*u+n*o*a+i*s*l-i*r*a}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],l=t[7],u=t[8],d=u*r-o*l,h=o*a-u*s,m=l*s-r*a,g=e*d+n*h+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return t[0]=d*p,t[1]=(i*l-u*n)*p,t[2]=(o*n-i*r)*p,t[3]=h*p,t[4]=(u*e-i*a)*p,t[5]=(i*s-o*e)*p,t[6]=m*p,t[7]=(n*a-l*e)*p,t[8]=(r*e-n*s)*p,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){let a=Math.cos(s),l=Math.sin(s);return this.set(n*a,n*l,-n*(a*r+l*o)+r+t,-i*l,i*a,-i*(-l*r+a*o)+o+e,0,0,1),this}scale(t,e){let n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){let e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],r=i[3],o=i[6],a=i[1],l=i[4],u=i[7];return i[0]=e*s+n*a,i[3]=e*r+n*l,i[6]=e*o+n*u,i[1]=-n*s+e*a,i[4]=-n*r+e*l,i[7]=-n*o+e*u,this}translate(t,e){let n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};function fl(c){for(let t=c.length-1;t>=0;--t)if(c[t]>65535)return!0;return!1}function bs(c){return document.createElementNS("http://www.w3.org/1999/xhtml",c)}function Nn(c){return c<.04045?c*.0773993808:Math.pow(c*.9478672986+.0521327014,2.4)}function ys(c){return c<.0031308?c*12.92:1.055*Math.pow(c,.41666)-.055}var dr={[en]:{[Fn]:Nn},[Fn]:{[en]:ys}},Le={legacyMode:!0,get workingColorSpace(){return Fn},set workingColorSpace(c){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(c,t,e){if(this.legacyMode||t===e||!t||!e)return c;if(dr[t]&&dr[t][e]!==void 0){let n=dr[t][e];return c.r=n(c.r),c.g=n(c.g),c.b=n(c.b),c}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(c,t){return this.convert(c,this.workingColorSpace,t)},toWorkingColorSpace:function(c,t){return this.convert(c,t,this.workingColorSpace)}},pl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Kt={r:0,g:0,b:0},Ie={h:0,s:0,l:0},Ji={h:0,s:0,l:0};function fr(c,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?c+(t-c)*6*e:e<1/2?t:e<2/3?c+(t-c)*6*(2/3-e):c}function Ki(c,t){return t.r=c.r,t.g=c.g,t.b=c.b,t}var zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=en){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Fn){return this.r=t,this.g=e,this.b=n,Le.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Fn){if(t=Xc(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=fr(r,s,t+1/3),this.g=fr(r,s,t),this.b=fr(r,s,t-1/3)}return Le.toWorkingColorSpace(this,i),this}setStyle(t,e=en){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s,r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Le.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Le.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){let a=parseFloat(s[1])/360,l=parseInt(s[2],10)/100,u=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(a,l,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Le.toWorkingColorSpace(this,e),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Le.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=en){let n=pl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=en){return Le.fromWorkingColorSpace(Ki(this,Kt),t),_e(Kt.r*255,0,255)<<16^_e(Kt.g*255,0,255)<<8^_e(Kt.b*255,0,255)<<0}getHexString(t=en){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Fn){Le.fromWorkingColorSpace(Ki(this,Kt),e);let n=Kt.r,i=Kt.g,s=Kt.b,r=Math.max(n,i,s),o=Math.min(n,i,s),a,l,u=(o+r)/2;if(o===r)a=0,l=0;else{let d=r-o;switch(l=u<=.5?d/(r+o):d/(2-r-o),r){case n:a=(i-s)/d+(i<s?6:0);break;case i:a=(s-n)/d+2;break;case s:a=(n-i)/d+4;break}a/=6}return t.h=a,t.s=l,t.l=u,t}getRGB(t,e=Fn){return Le.fromWorkingColorSpace(Ki(this,Kt),e),t.r=Kt.r,t.g=Kt.g,t.b=Kt.b,t}getStyle(t=en){return Le.fromWorkingColorSpace(Ki(this,Kt),t),t!==en?`color(${t} ${Kt.r} ${Kt.g} ${Kt.b})`:`rgb(${Kt.r*255|0},${Kt.g*255|0},${Kt.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ie),Ie.h+=t,Ie.s+=e,Ie.l+=n,this.setHSL(Ie.h,Ie.s,Ie.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ie),t.getHSL(Ji);let n=ur(Ie.h,Ji.h,e),i=ur(Ie.s,Ji.s,e),s=ur(Ie.l,Ji.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};zt.NAMES=pl;var Jn,Ms=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Jn===void 0&&(Jn=bs("canvas")),Jn.width=t.width,Jn.height=t.height;let n=Jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=bs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=Nn(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ss=class{constructor(t=null){this.isSource=!0,this.uuid=Hi(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(pr(i[r].image)):s.push(pr(i[r]))}else s=pr(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function pr(c){return typeof HTMLImageElement<"u"&&c instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&c instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&c instanceof ImageBitmap?Ms.getDataURL(c):c.data?{data:Array.from(c.data),width:c.width,height:c.height,type:c.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Yc=0,be=class extends Mn{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,n=Fe,i=Fe,s=Ee,r=Us,o=He,a=Bn,l=1,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Hi(),this.name="",this.source=new Ss(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ul)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vr:t.x=t.x-Math.floor(t.x);break;case Fe:t.x=t.x<0?0:1;break;case Wr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vr:t.y=t.y-Math.floor(t.y);break;case Fe:t.y=t.y<0?0:1;break;case Wr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}};be.DEFAULT_IMAGE=null;be.DEFAULT_MAPPING=ul;var $t=class{constructor(t=0,e=0,n=0,i=1){$t.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,a=t.elements,l=a[0],u=a[4],d=a[8],h=a[1],m=a[5],g=a[9],p=a[2],f=a[6],v=a[10];if(Math.abs(u-h)<.01&&Math.abs(d-p)<.01&&Math.abs(g-f)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+p)<.1&&Math.abs(g+f)<.1&&Math.abs(l+m+v-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let b=(l+1)/2,y=(m+1)/2,M=(v+1)/2,T=(u+h)/4,I=(d+p)/4,w=(g+f)/4;return b>y&&b>M?b<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(b),i=T/n,s=I/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=T/i,s=w/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=I/s,i=w/s),this.set(n,i,s,e),this}let x=Math.sqrt((f-g)*(f-g)+(d-p)*(d-p)+(h-u)*(h-u));return Math.abs(x)<.001&&(x=1),this.x=(f-g)/x,this.y=(d-p)/x,this.z=(h-u)/x,this.w=Math.acos((l+m+v-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rn=class extends Mn{constructor(t,e,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new $t(0,0,t,e),this.scissorTest=!1,this.viewport=new $t(0,0,t,e);let i={width:t,height:e,depth:1};this.texture=new be(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ee,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ss(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},As=class extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qr=class extends be{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=de,this.minFilter=de,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let a=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],h=s[r+0],m=s[r+1],g=s[r+2],p=s[r+3];if(o===0){t[e+0]=a,t[e+1]=l,t[e+2]=u,t[e+3]=d;return}if(o===1){t[e+0]=h,t[e+1]=m,t[e+2]=g,t[e+3]=p;return}if(d!==p||a!==h||l!==m||u!==g){let f=1-o,v=a*h+l*m+u*g+d*p,x=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){let M=Math.sqrt(b),T=Math.atan2(M,v*x);f=Math.sin(f*T)/M,o=Math.sin(o*T)/M}let y=o*x;if(a=a*f+h*y,l=l*f+m*y,u=u*f+g*y,d=d*f+p*y,f===1-o){let M=1/Math.sqrt(a*a+l*l+u*u+d*d);a*=M,l*=M,u*=M,d*=M}}t[e]=a,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,r){let o=n[i],a=n[i+1],l=n[i+2],u=n[i+3],d=s[r],h=s[r+1],m=s[r+2],g=s[r+3];return t[e]=o*g+u*d+a*m-l*h,t[e+1]=a*g+u*h+l*d-o*m,t[e+2]=l*g+u*m+o*h-a*d,t[e+3]=u*g-o*d-a*h-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");let n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,a=Math.sin,l=o(n/2),u=o(i/2),d=o(s/2),h=a(n/2),m=a(i/2),g=a(s/2);switch(r){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],l=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-a)*m,this._y=(s-l)*m,this._z=(r-i)*m}else if(n>o&&n>d){let m=2*Math.sqrt(1+n-o-d);this._w=(u-a)/m,this._x=.25*m,this._y=(i+r)/m,this._z=(s+l)/m}else if(o>d){let m=2*Math.sqrt(1+o-n-d);this._w=(s-l)/m,this._x=(i+r)/m,this._y=.25*m,this._z=(a+u)/m}else{let m=2*Math.sqrt(1+d-n-o);this._w=(r-i)/m,this._x=(s+l)/m,this._y=(a+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,a=e._y,l=e._z,u=e._w;return this._x=n*u+r*o+i*l-s*a,this._y=i*u+r*a+s*o-n*l,this._z=s*u+r*l+n*a-i*o,this._w=r*u-n*o-i*a-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,r=this._w,o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;let a=1-o*o;if(a<=Number.EPSILON){let m=1-e;return this._w=m*r+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}let l=Math.sqrt(a),u=Math.atan2(l,o),d=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=r*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ma.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ma.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,a=t.w,l=a*e+r*i-o*n,u=a*n+o*e-s*i,d=a*i+s*n-r*e,h=-s*e-r*n-o*i;return this.x=l*a+h*-s+u*-o-d*-r,this.y=u*a+h*-r+d*-s-l*-o,this.z=d*a+h*-o+l*-r-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,a=e.z;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return mr.copy(this).projectOnVector(t),this.sub(mr)}reflect(t){return this.sub(mr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},mr=new O,Ma=new Sn,Un=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,l=t.length;a<l;a+=3){let u=t[a],d=t[a+1],h=t[a+2];u<e&&(e=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>r&&(r=d),h>o&&(o=h)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,r=-1/0,o=-1/0;for(let a=0,l=t.count;a<l;a++){let u=t.getX(a),d=t.getY(a),h=t.getZ(a);u<e&&(e=u),d<n&&(n=d),h<i&&(i=h),u>s&&(s=u),d>r&&(r=d),h>o&&(o=h)}return this.min.set(e,n,i),this.max.set(s,r,o),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=En.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){let s=n.attributes.position;for(let r=0,o=s.count;r<o;r++)En.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(En)}else n.boundingBox===null&&n.computeBoundingBox(),gr.copy(n.boundingBox),gr.applyMatrix4(t.matrixWorld),this.union(gr);let i=t.children;for(let s=0,r=i.length;s<r;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,En),En.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Di),Qi.subVectors(this.max,Di),Kn.subVectors(t.a,Di),Qn.subVectors(t.b,Di),ti.subVectors(t.c,Di),pn.subVectors(Qn,Kn),mn.subVectors(ti,Qn),Cn.subVectors(Kn,ti);let e=[0,-pn.z,pn.y,0,-mn.z,mn.y,0,-Cn.z,Cn.y,pn.z,0,-pn.x,mn.z,0,-mn.x,Cn.z,0,-Cn.x,-pn.y,pn.x,0,-mn.y,mn.x,0,-Cn.y,Cn.x,0];return!xr(e,Kn,Qn,ti,Qi)||(e=[1,0,0,0,1,0,0,0,1],!xr(e,Kn,Qn,ti,Qi))?!1:(ts.crossVectors(pn,mn),e=[ts.x,ts.y,ts.z],xr(e,Kn,Qn,ti,Qi))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return En.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(En).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($e[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$e[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$e[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$e[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$e[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$e[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$e[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$e[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($e),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},$e=[new O,new O,new O,new O,new O,new O,new O,new O],En=new O,gr=new Un,Kn=new O,Qn=new O,ti=new O,pn=new O,mn=new O,Cn=new O,Di=new O,Qi=new O,ts=new O,Pn=new O;function xr(c,t,e,n,i){for(let s=0,r=c.length-3;s<=r;s+=3){Pn.fromArray(c,s);let o=i.x*Math.abs(Pn.x)+i.y*Math.abs(Pn.y)+i.z*Math.abs(Pn.z),a=t.dot(Pn),l=e.dot(Pn),u=n.dot(Pn);if(Math.max(-Math.max(a,l,u),Math.min(a,l,u))>o)return!1}return!0}var Zc=new Un,Sa=new O,es=new O,vr=new O,wi=class{constructor(t=new O,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Zc.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){vr.subVectors(t,this.center);let e=vr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(vr.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?es.set(0,0,1).multiplyScalar(t.radius):es.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(Sa.copy(t.center).add(es)),this.expandByPoint(Sa.copy(t.center).sub(es)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Je=new O,yr=new O,ns=new O,gn=new O,_r=new O,is=new O,wr=new O,Ts=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Je)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Je.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Je.copy(this.direction).multiplyScalar(e).add(this.origin),Je.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){yr.copy(t).add(e).multiplyScalar(.5),ns.copy(e).sub(t).normalize(),gn.copy(this.origin).sub(yr);let s=t.distanceTo(e)*.5,r=-this.direction.dot(ns),o=gn.dot(this.direction),a=-gn.dot(ns),l=gn.lengthSq(),u=Math.abs(1-r*r),d,h,m,g;if(u>0)if(d=r*a-o,h=r*o-a,g=s*u,d>=0)if(h>=-g)if(h<=g){let p=1/u;d*=p,h*=p,m=d*(d+r*h+2*o)+h*(r*d+h+2*a)+l}else h=s,d=Math.max(0,-(r*h+o)),m=-d*d+h*(h+2*a)+l;else h=-s,d=Math.max(0,-(r*h+o)),m=-d*d+h*(h+2*a)+l;else h<=-g?(d=Math.max(0,-(-r*s+o)),h=d>0?-s:Math.min(Math.max(-s,-a),s),m=-d*d+h*(h+2*a)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-a),s),m=h*(h+2*a)+l):(d=Math.max(0,-(r*s+o)),h=d>0?s:Math.min(Math.max(-s,-a),s),m=-d*d+h*(h+2*a)+l);else h=r>0?-s:s,d=Math.max(0,-(r*h+o)),m=-d*d+h*(h+2*a)+l;return n&&n.copy(this.direction).multiplyScalar(d).add(this.origin),i&&i.copy(ns).multiplyScalar(h).add(yr),m}intersectSphere(t,e){Je.subVectors(t.center,this.origin);let n=Je.dot(this.direction),i=Je.dot(Je)-n*n,s=t.radius*t.radius;if(i>s)return null;let r=Math.sqrt(s-i),o=n-r,a=n+r;return o<0&&a<0?null:o<0?this.at(a,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,a,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),n>r||s>i||((s>n||n!==n)&&(n=s),(r<i||i!==i)&&(i=r),d>=0?(o=(t.min.z-h.z)*d,a=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,a=(t.min.z-h.z)*d),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Je)!==null}intersectTriangle(t,e,n,i,s){_r.subVectors(e,t),is.subVectors(n,t),wr.crossVectors(_r,is);let r=this.direction.dot(wr),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;gn.subVectors(this.origin,t);let a=o*this.direction.dot(is.crossVectors(gn,is));if(a<0)return null;let l=o*this.direction.dot(_r.cross(gn));if(l<0||a+l>r)return null;let u=-o*gn.dot(wr);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jt=class{constructor(){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,a,l,u,d,h,m,g,p,f){let v=this.elements;return v[0]=t,v[4]=e,v[8]=n,v[12]=i,v[1]=s,v[5]=r,v[9]=o,v[13]=a,v[2]=l,v[6]=u,v[10]=d,v[14]=h,v[3]=m,v[7]=g,v[11]=p,v[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ei.setFromMatrixColumn(t,0).length(),s=1/ei.setFromMatrixColumn(t,1).length(),r=1/ei.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),l=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let h=r*u,m=r*d,g=o*u,p=o*d;e[0]=a*u,e[4]=-a*d,e[8]=l,e[1]=m+g*l,e[5]=h-p*l,e[9]=-o*a,e[2]=p-h*l,e[6]=g+m*l,e[10]=r*a}else if(t.order==="YXZ"){let h=a*u,m=a*d,g=l*u,p=l*d;e[0]=h+p*o,e[4]=g*o-m,e[8]=r*l,e[1]=r*d,e[5]=r*u,e[9]=-o,e[2]=m*o-g,e[6]=p+h*o,e[10]=r*a}else if(t.order==="ZXY"){let h=a*u,m=a*d,g=l*u,p=l*d;e[0]=h-p*o,e[4]=-r*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=r*u,e[9]=p-h*o,e[2]=-r*l,e[6]=o,e[10]=r*a}else if(t.order==="ZYX"){let h=r*u,m=r*d,g=o*u,p=o*d;e[0]=a*u,e[4]=g*l-m,e[8]=h*l+p,e[1]=a*d,e[5]=p*l+h,e[9]=m*l-g,e[2]=-l,e[6]=o*a,e[10]=r*a}else if(t.order==="YZX"){let h=r*a,m=r*l,g=o*a,p=o*l;e[0]=a*u,e[4]=p-h*d,e[8]=g*d+m,e[1]=d,e[5]=r*u,e[9]=-o*u,e[2]=-l*u,e[6]=m*d+g,e[10]=h-p*d}else if(t.order==="XZY"){let h=r*a,m=r*l,g=o*a,p=o*l;e[0]=a*u,e[4]=-d,e[8]=l*u,e[1]=h*d+p,e[5]=r*u,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*u,e[10]=p*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jc,t,$c)}lookAt(t,e,n){let i=this.elements;return ve.subVectors(t,e),ve.lengthSq()===0&&(ve.z=1),ve.normalize(),xn.crossVectors(n,ve),xn.lengthSq()===0&&(Math.abs(n.z)===1?ve.x+=1e-4:ve.z+=1e-4,ve.normalize(),xn.crossVectors(n,ve)),xn.normalize(),ss.crossVectors(ve,xn),i[0]=xn.x,i[4]=ss.x,i[8]=ve.x,i[1]=xn.y,i[5]=ss.y,i[9]=ve.y,i[2]=xn.z,i[6]=ss.z,i[10]=ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],a=n[8],l=n[12],u=n[1],d=n[5],h=n[9],m=n[13],g=n[2],p=n[6],f=n[10],v=n[14],x=n[3],b=n[7],y=n[11],M=n[15],T=i[0],I=i[4],w=i[8],C=i[12],R=i[1],z=i[5],j=i[9],B=i[13],P=i[2],D=i[6],L=i[10],X=i[14],k=i[3],N=i[7],G=i[11],K=i[15];return s[0]=r*T+o*R+a*P+l*k,s[4]=r*I+o*z+a*D+l*N,s[8]=r*w+o*j+a*L+l*G,s[12]=r*C+o*B+a*X+l*K,s[1]=u*T+d*R+h*P+m*k,s[5]=u*I+d*z+h*D+m*N,s[9]=u*w+d*j+h*L+m*G,s[13]=u*C+d*B+h*X+m*K,s[2]=g*T+p*R+f*P+v*k,s[6]=g*I+p*z+f*D+v*N,s[10]=g*w+p*j+f*L+v*G,s[14]=g*C+p*B+f*X+v*K,s[3]=x*T+b*R+y*P+M*k,s[7]=x*I+b*z+y*D+M*N,s[11]=x*w+b*j+y*L+M*G,s[15]=x*C+b*B+y*X+M*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],a=t[9],l=t[13],u=t[2],d=t[6],h=t[10],m=t[14],g=t[3],p=t[7],f=t[11],v=t[15];return g*(+s*a*d-i*l*d-s*o*h+n*l*h+i*o*m-n*a*m)+p*(+e*a*m-e*l*h+s*r*h-i*r*m+i*l*u-s*a*u)+f*(+e*l*d-e*o*m-s*r*d+n*r*m+s*o*u-n*l*u)+v*(-i*o*u-e*a*d+e*o*h+i*r*d-n*r*h+n*a*u)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],l=t[7],u=t[8],d=t[9],h=t[10],m=t[11],g=t[12],p=t[13],f=t[14],v=t[15],x=d*f*l-p*h*l+p*a*m-o*f*m-d*a*v+o*h*v,b=g*h*l-u*f*l-g*a*m+r*f*m+u*a*v-r*h*v,y=u*p*l-g*d*l+g*o*m-r*p*m-u*o*v+r*d*v,M=g*d*a-u*p*a-g*o*h+r*p*h+u*o*f-r*d*f,T=e*x+n*b+i*y+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return t[0]=x*I,t[1]=(p*h*s-d*f*s-p*i*m+n*f*m+d*i*v-n*h*v)*I,t[2]=(o*f*s-p*a*s+p*i*l-n*f*l-o*i*v+n*a*v)*I,t[3]=(d*a*s-o*h*s-d*i*l+n*h*l+o*i*m-n*a*m)*I,t[4]=b*I,t[5]=(u*f*s-g*h*s+g*i*m-e*f*m-u*i*v+e*h*v)*I,t[6]=(g*a*s-r*f*s-g*i*l+e*f*l+r*i*v-e*a*v)*I,t[7]=(r*h*s-u*a*s+u*i*l-e*h*l-r*i*m+e*a*m)*I,t[8]=y*I,t[9]=(g*d*s-u*p*s-g*n*m+e*p*m+u*n*v-e*d*v)*I,t[10]=(r*p*s-g*o*s+g*n*l-e*p*l-r*n*v+e*o*v)*I,t[11]=(u*o*s-r*d*s-u*n*l+e*d*l+r*n*m-e*o*m)*I,t[12]=M*I,t[13]=(u*p*i-g*d*i+g*n*h-e*p*h-u*n*f+e*d*f)*I,t[14]=(g*o*i-r*p*i-g*n*a+e*p*a+r*n*f-e*o*f)*I,t[15]=(r*d*i-u*o*i+u*n*a-e*d*a-r*n*h+e*o*h)*I,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,a=t.z,l=s*r,u=s*o;return this.set(l*r+n,l*o-i*a,l*a+i*o,0,l*o+i*a,u*o+n,u*a-i*r,0,l*a-i*o,u*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,r=e._y,o=e._z,a=e._w,l=s+s,u=r+r,d=o+o,h=s*l,m=s*u,g=s*d,p=r*u,f=r*d,v=o*d,x=a*l,b=a*u,y=a*d,M=n.x,T=n.y,I=n.z;return i[0]=(1-(p+v))*M,i[1]=(m+y)*M,i[2]=(g-b)*M,i[3]=0,i[4]=(m-y)*T,i[5]=(1-(h+v))*T,i[6]=(f+x)*T,i[7]=0,i[8]=(g+b)*I,i[9]=(f-x)*I,i[10]=(1-(h+p))*I,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=ei.set(i[0],i[1],i[2]).length(),r=ei.set(i[4],i[5],i[6]).length(),o=ei.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Re.copy(this);let l=1/s,u=1/r,d=1/o;return Re.elements[0]*=l,Re.elements[1]*=l,Re.elements[2]*=l,Re.elements[4]*=u,Re.elements[5]*=u,Re.elements[6]*=u,Re.elements[8]*=d,Re.elements[9]*=d,Re.elements[10]*=d,e.setFromRotationMatrix(Re),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){let o=this.elements,a=2*s/(e-t),l=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),h=-(r+s)/(r-s),m=-2*r*s/(r-s);return o[0]=a,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=l,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){let o=this.elements,a=1/(e-t),l=1/(n-i),u=1/(r-s),d=(e+t)*a,h=(n+i)*l,m=(r+s)*u;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-d,o[1]=0,o[5]=2*l,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ei=new O,Re=new Jt,jc=new O(0,0,0),$c=new O(1,1,1),xn=new O,ss=new O,ve=new O,Aa=new Jt,Ta=new Sn,kn=class{constructor(t=0,e=0,n=0,i=kn.DefaultOrder){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],r=i[4],o=i[8],a=i[1],l=i[5],u=i[9],d=i[2],h=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(a,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-_e(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Aa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Aa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ta.setFromEuler(this),this.setFromQuaternion(Ta,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}};kn.DefaultOrder="XYZ";kn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];var Es=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Jc=0,Ea=new O,ni=new Sn,Ke=new Jt,rs=new O,Fi=new O,Kc=new O,Qc=new Sn,Ca=new O(1,0,0),Pa=new O(0,1,0),La=new O(0,0,1),th={type:"added"},Ia={type:"removed"},pe=class extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pe.DefaultUp.clone();let t=new O,e=new kn,n=new Sn,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new fe}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=pe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Es,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.multiply(ni),this}rotateOnWorldAxis(t,e){return ni.setFromAxisAngle(t,e),this.quaternion.premultiply(ni),this}rotateX(t){return this.rotateOnAxis(Ca,t)}rotateY(t){return this.rotateOnAxis(Pa,t)}rotateZ(t){return this.rotateOnAxis(La,t)}translateOnAxis(t,e){return Ea.copy(t).applyQuaternion(this.quaternion),this.position.add(Ea.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ca,t)}translateY(t){return this.translateOnAxis(Pa,t)}translateZ(t){return this.translateOnAxis(La,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(Ke.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?rs.copy(t):rs.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Fi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ke.lookAt(Fi,rs,this.up):Ke.lookAt(rs,Fi,this.up),this.quaternion.setFromRotationMatrix(Ke),i&&(Ke.extractRotation(i.matrixWorld),ni.setFromRotationMatrix(Ke),this.quaternion.premultiply(ni.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(th)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ia)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){let e=this.children[t];e.parent=null,e.dispatchEvent(Ia)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Ke.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ke.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ke),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,t,Kc),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fi,Qc,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let i=this.children;for(let s=0,r=i.length;s<r;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let a=o.shapes;if(Array.isArray(a))for(let l=0,u=a.length;l<u;l++){let d=a[l];s(t.shapes,d)}else s(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let a=0,l=this.material.length;a<l;a++)o.push(s(t.materials,this.material[a]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){let a=this.animations[o];i.animations.push(s(t.animations,a))}}if(e){let o=r(t.geometries),a=r(t.materials),l=r(t.textures),u=r(t.images),d=r(t.shapes),h=r(t.skeletons),m=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){let a=[];for(let l in o){let u=o[l];delete u.metadata,a.push(u)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};pe.DefaultUp=new O(0,1,0);pe.DefaultMatrixAutoUpdate=!0;var De=new O,Qe=new O,br=new O,tn=new O,ii=new O,si=new O,Ra=new O,Mr=new O,Sr=new O,Ar=new O,ze=class{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),De.subVectors(t,e),i.cross(De);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){De.subVectors(i,e),Qe.subVectors(n,e),br.subVectors(t,e);let r=De.dot(De),o=De.dot(Qe),a=De.dot(br),l=Qe.dot(Qe),u=Qe.dot(br),d=r*l-o*o;if(d===0)return s.set(-2,-1,-1);let h=1/d,m=(l*a-o*u)*h,g=(r*u-o*a)*h;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,tn),tn.x>=0&&tn.y>=0&&tn.x+tn.y<=1}static getUV(t,e,n,i,s,r,o,a){return this.getBarycoord(t,e,n,i,tn),a.set(0,0),a.addScaledVector(s,tn.x),a.addScaledVector(r,tn.y),a.addScaledVector(o,tn.z),a}static isFrontFacing(t,e,n,i){return De.subVectors(n,e),Qe.subVectors(t,e),De.cross(Qe).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return De.subVectors(this.c,this.b),Qe.subVectors(this.a,this.b),De.cross(Qe).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ze.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ze.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ze.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ze.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ze.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,r,o;ii.subVectors(i,n),si.subVectors(s,n),Mr.subVectors(t,n);let a=ii.dot(Mr),l=si.dot(Mr);if(a<=0&&l<=0)return e.copy(n);Sr.subVectors(t,i);let u=ii.dot(Sr),d=si.dot(Sr);if(u>=0&&d<=u)return e.copy(i);let h=a*d-u*l;if(h<=0&&a>=0&&u<=0)return r=a/(a-u),e.copy(n).addScaledVector(ii,r);Ar.subVectors(t,s);let m=ii.dot(Ar),g=si.dot(Ar);if(g>=0&&m<=g)return e.copy(s);let p=m*l-a*g;if(p<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(si,o);let f=u*g-m*d;if(f<=0&&d-u>=0&&m-g>=0)return Ra.subVectors(s,i),o=(d-u)/(d-u+(m-g)),e.copy(i).addScaledVector(Ra,o);let v=1/(f+p+h);return r=p*v,o=h*v,e.copy(n).addScaledVector(ii,r).addScaledVector(si,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},eh=0,Vn=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:eh++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=pi,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ll,this.blendDst=cl,this.blendEquation=ui,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Kl;continue}let i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==pi&&(n.blending=this.blending),this.side!==Ui&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){let r=[];for(let o in s){let a=s[o];delete a.metadata,r.push(a)}return r}if(e){let s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},bi=class extends Vn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jt=new O,os=new Bt,Pe=class{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=ya,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){let e=this.array,n=0;for(let i=0,s=t.length;i<s;i++){let r=t[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),r=new zt),e[n++]=r.r,e[n++]=r.g,e[n++]=r.b}return this}copyVector2sArray(t){let e=this.array,n=0;for(let i=0,s=t.length;i<s;i++){let r=t[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),r=new Bt),e[n++]=r.x,e[n++]=r.y}return this}copyVector3sArray(t){let e=this.array,n=0;for(let i=0,s=t.length;i<s;i++){let r=t[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),r=new O),e[n++]=r.x,e[n++]=r.y,e[n++]=r.z}return this}copyVector4sArray(t){let e=this.array,n=0;for(let i=0,s=t.length;i<s;i++){let r=t[i];r===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),r=new $t),e[n++]=r.x,e[n++]=r.y,e[n++]=r.z,e[n++]=r.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)os.fromBufferAttribute(this,e),os.applyMatrix3(t),this.setXY(e,os.x,os.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyMatrix3(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyMatrix4(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.applyNormalMatrix(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)jt.fromBufferAttribute(this,e),jt.transformDirection(t),this.setXYZ(e,jt.x,jt.y,jt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ya&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}};var Cs=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ps=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var we=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}};var nh=0,Te=new Jt,Tr=new pe,ri=new O,ye=new Un,zi=new Un,ee=new O,Be=class extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(fl(t)?Ps:Cs)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new fe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Te.makeRotationFromQuaternion(t),this.applyMatrix4(Te),this}rotateX(t){return Te.makeRotationX(t),this.applyMatrix4(Te),this}rotateY(t){return Te.makeRotationY(t),this.applyMatrix4(Te),this}rotateZ(t){return Te.makeRotationZ(t),this.applyMatrix4(Te),this}translate(t,e,n){return Te.makeTranslation(t,e,n),this.applyMatrix4(Te),this}scale(t,e,n){return Te.makeScale(t,e,n),this.applyMatrix4(Te),this}lookAt(t){return Tr.lookAt(t),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ri).negate(),this.translate(ri.x,ri.y,ri.z),this}setFromPoints(t){let e=[];for(let n=0,i=t.length;n<i;n++){let s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new we(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ye.setFromBufferAttribute(s),this.morphTargetsRelative?(ee.addVectors(this.boundingBox.min,ye.min),this.boundingBox.expandByPoint(ee),ee.addVectors(this.boundingBox.max,ye.max),this.boundingBox.expandByPoint(ee)):(this.boundingBox.expandByPoint(ye.min),this.boundingBox.expandByPoint(ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(ye.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){let o=e[s];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(ee.addVectors(ye.min,zi.min),ye.expandByPoint(ee),ee.addVectors(ye.max,zi.max),ye.expandByPoint(ee)):(ye.expandByPoint(zi.min),ye.expandByPoint(zi.max))}ye.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)ee.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(ee));if(e)for(let s=0,r=e.length;s<r;s++){let o=e[s],a=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)ee.fromBufferAttribute(o,l),a&&(ri.fromBufferAttribute(t,l),ee.add(ri)),i=Math.max(i,n.distanceToSquared(ee))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*o),4));let a=this.getAttribute("tangent").array,l=[],u=[];for(let R=0;R<o;R++)l[R]=new O,u[R]=new O;let d=new O,h=new O,m=new O,g=new Bt,p=new Bt,f=new Bt,v=new O,x=new O;function b(R,z,j){d.fromArray(i,R*3),h.fromArray(i,z*3),m.fromArray(i,j*3),g.fromArray(r,R*2),p.fromArray(r,z*2),f.fromArray(r,j*2),h.sub(d),m.sub(d),p.sub(g),f.sub(g);let B=1/(p.x*f.y-f.x*p.y);!isFinite(B)||(v.copy(h).multiplyScalar(f.y).addScaledVector(m,-p.y).multiplyScalar(B),x.copy(m).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(B),l[R].add(v),l[z].add(v),l[j].add(v),u[R].add(x),u[z].add(x),u[j].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let R=0,z=y.length;R<z;++R){let j=y[R],B=j.start,P=j.count;for(let D=B,L=B+P;D<L;D+=3)b(n[D+0],n[D+1],n[D+2])}let M=new O,T=new O,I=new O,w=new O;function C(R){I.fromArray(s,R*3),w.copy(I);let z=l[R];M.copy(z),M.sub(I.multiplyScalar(I.dot(z))).normalize(),T.crossVectors(w,z);let B=T.dot(u[R])<0?-1:1;a[R*4]=M.x,a[R*4+1]=M.y,a[R*4+2]=M.z,a[R*4+3]=B}for(let R=0,z=y.length;R<z;++R){let j=y[R],B=j.start,P=j.count;for(let D=B,L=B+P;D<L;D+=3)C(n[D+0]),C(n[D+1]),C(n[D+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);let i=new O,s=new O,r=new O,o=new O,a=new O,l=new O,u=new O,d=new O;if(t)for(let h=0,m=t.count;h<m;h+=3){let g=t.getX(h+0),p=t.getX(h+1),f=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,f),u.subVectors(r,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,f),o.add(u),a.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z)}else for(let h=0,m=e.count;h<m;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));let n=this.attributes;for(let i in n){if(t.attributes[i]===void 0)continue;let r=n[i].array,o=t.attributes[i],a=o.array,l=o.itemSize*e,u=Math.min(a.length,r.length-l);for(let d=0,h=l;d<u;d++,h++)r[h]=a[d]}return this}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ee.fromBufferAttribute(t,e),ee.normalize(),t.setXYZ(e,ee.x,ee.y,ee.z)}toNonIndexed(){function t(o,a){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(a.length*u),m=0,g=0;for(let p=0,f=a.length;p<f;p++){o.isInterleavedBufferAttribute?m=a[p]*o.data.stride+o.offset:m=a[p]*u;for(let v=0;v<u;v++)h[g++]=l[m++]}return new Pe(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new Be,n=this.index.array,i=this.attributes;for(let o in i){let a=i[o],l=t(a,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let a=[],l=s[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],m=t(h,n);a.push(m)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;let r=this.groups;for(let o=0,a=r.length;o<a;o++){let l=r[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let a=this.parameters;for(let l in a)a[l]!==void 0&&(t[l]=a[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let a in n){let l=n[a];t.data.attributes[a]=l.toJSON(t.data)}let i={},s=!1;for(let a in this.morphAttributes){let l=this.morphAttributes[a],u=[];for(let d=0,h=l.length;d<h;d++){let m=l[d];u.push(m.toJSON(t.data))}u.length>0&&(i[a]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(e))}let s=t.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let r=t.groups;for(let l=0,u=r.length;l<u;l++){let d=r[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}},Da=new Jt,oi=new Ts,Er=new wi,vn=new O,yn=new O,_n=new O,Cr=new O,Pr=new O,Lr=new O,as=new O,ls=new O,cs=new O,hs=new Bt,us=new Bt,ds=new Bt,Ir=new O,fs=new O,Ce=class extends pe{constructor(t=new Be,e=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(s),t.ray.intersectsSphere(Er)===!1)||(Da.copy(s).invert(),oi.copy(t.ray).applyMatrix4(Da),n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1))return;let r,o=n.index,a=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,d=n.attributes.uv,h=n.attributes.uv2,m=n.groups,g=n.drawRange;if(o!==null)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){let v=m[p],x=i[v.materialIndex],b=Math.max(v.start,g.start),y=Math.min(o.count,Math.min(v.start+v.count,g.start+g.count));for(let M=b,T=y;M<T;M+=3){let I=o.getX(M),w=o.getX(M+1),C=o.getX(M+2);r=ps(this,x,t,oi,a,l,u,d,h,I,w,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{let p=Math.max(0,g.start),f=Math.min(o.count,g.start+g.count);for(let v=p,x=f;v<x;v+=3){let b=o.getX(v),y=o.getX(v+1),M=o.getX(v+2);r=ps(this,i,t,oi,a,l,u,d,h,b,y,M),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(a!==void 0)if(Array.isArray(i))for(let p=0,f=m.length;p<f;p++){let v=m[p],x=i[v.materialIndex],b=Math.max(v.start,g.start),y=Math.min(a.count,Math.min(v.start+v.count,g.start+g.count));for(let M=b,T=y;M<T;M+=3){let I=M,w=M+1,C=M+2;r=ps(this,x,t,oi,a,l,u,d,h,I,w,C),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{let p=Math.max(0,g.start),f=Math.min(a.count,g.start+g.count);for(let v=p,x=f;v<x;v+=3){let b=v,y=v+1,M=v+2;r=ps(this,i,t,oi,a,l,u,d,h,b,y,M),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}};function ih(c,t,e,n,i,s,r,o){let a;if(t.side===Ne?a=n.intersectTriangle(r,s,i,!0,o):a=n.intersectTriangle(i,s,r,t.side!==xi,o),a===null)return null;fs.copy(o),fs.applyMatrix4(c.matrixWorld);let l=e.ray.origin.distanceTo(fs);return l<e.near||l>e.far?null:{distance:l,point:fs.clone(),object:c}}function ps(c,t,e,n,i,s,r,o,a,l,u,d){vn.fromBufferAttribute(i,l),yn.fromBufferAttribute(i,u),_n.fromBufferAttribute(i,d);let h=c.morphTargetInfluences;if(s&&h){as.set(0,0,0),ls.set(0,0,0),cs.set(0,0,0);for(let g=0,p=s.length;g<p;g++){let f=h[g],v=s[g];f!==0&&(Cr.fromBufferAttribute(v,l),Pr.fromBufferAttribute(v,u),Lr.fromBufferAttribute(v,d),r?(as.addScaledVector(Cr,f),ls.addScaledVector(Pr,f),cs.addScaledVector(Lr,f)):(as.addScaledVector(Cr.sub(vn),f),ls.addScaledVector(Pr.sub(yn),f),cs.addScaledVector(Lr.sub(_n),f)))}vn.add(as),yn.add(ls),_n.add(cs)}c.isSkinnedMesh&&(c.boneTransform(l,vn),c.boneTransform(u,yn),c.boneTransform(d,_n));let m=ih(c,t,e,n,vn,yn,_n,Ir);if(m){o&&(hs.fromBufferAttribute(o,l),us.fromBufferAttribute(o,u),ds.fromBufferAttribute(o,d),m.uv=ze.getUV(Ir,vn,yn,_n,hs,us,ds,new Bt)),a&&(hs.fromBufferAttribute(a,l),us.fromBufferAttribute(a,u),ds.fromBufferAttribute(a,d),m.uv2=ze.getUV(Ir,vn,yn,_n,hs,us,ds,new Bt));let g={a:l,b:u,c:d,normal:new O,materialIndex:0};ze.getNormal(vn,yn,_n,g.normal),m.face=g}return m}var on=class extends Be{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};let o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);let a=[],l=[],u=[],d=[],h=0,m=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(d,2));function g(p,f,v,x,b,y,M,T,I,w,C){let R=y/I,z=M/w,j=y/2,B=M/2,P=T/2,D=I+1,L=w+1,X=0,k=0,N=new O;for(let G=0;G<L;G++){let K=G*z-B;for(let W=0;W<D;W++){let tt=W*R-j;N[p]=tt*x,N[f]=K*b,N[v]=P,l.push(N.x,N.y,N.z),N[p]=0,N[f]=0,N[v]=T>0?1:-1,u.push(N.x,N.y,N.z),d.push(W/I),d.push(1-G/w),X+=1}}for(let G=0;G<w;G++)for(let K=0;K<I;K++){let W=h+K+D*G,tt=h+K+D*(G+1),ct=h+(K+1)+D*(G+1),gt=h+(K+1)+D*G;a.push(W,tt,gt),a.push(tt,ct,gt),k+=6}o.addGroup(m,k,C),m+=k,h+=X}}static fromJSON(t){return new on(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Mi(c){let t={};for(let e in c){t[e]={};for(let n in c[e]){let i=c[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function re(c){let t={};for(let e=0;e<c.length;e++){let n=Mi(c[e]);for(let i in n)t[i]=n[i]}return t}function sh(c){let t=[];for(let e=0;e<c.length;e++)t.push(c[e].clone());return t}var rh={clone:Mi,merge:re},oh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ah=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends Vn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=oh,this.fragmentShader=ah,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mi(t.uniforms),this.uniformsGroups=sh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ls=class extends pe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},le=class extends Ls{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,r=this.view;if(this.view!==null&&this.view.enabled){let a=r.fullWidth,l=r.fullHeight;s+=r.offsetX*i/a,e-=r.offsetY*n/l,i*=r.width/a,n*=r.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ai=90,li=1,Xr=class extends pe{constructor(t,e,n){if(super(),this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;let i=new le(ai,li,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new O(1,0,0)),this.add(i);let s=new le(ai,li,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new O(-1,0,0)),this.add(s);let r=new le(ai,li,t,e);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(new O(0,1,0)),this.add(r);let o=new le(ai,li,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(new O(0,-1,0)),this.add(o);let a=new le(ai,li,t,e);a.layers=this.layers,a.up.set(0,-1,0),a.lookAt(new O(0,0,1)),this.add(a);let l=new le(ai,li,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new O(0,0,-1)),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();let n=this.renderTarget,[i,s,r,o,a,l]=this.children,u=t.getRenderTarget(),d=t.toneMapping,h=t.xr.enabled;t.toneMapping=sn,t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,a),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=d,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}},Is=class extends be{constructor(t,e,n,i,s,r,o,a,l,u){t=t!==void 0?t:[],e=e!==void 0?e:vi,super(t,e,n,i,s,r,o,a,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Yr=class extends rn{constructor(t,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Is(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ee}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new on(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ne,blending:bn});s.uniforms.tEquirect.value=e;let r=new Ce(i,s),o=e.minFilter;return e.minFilter===Us&&(e.minFilter=Ee),new Xr(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}},Rr=new O,lh=new O,ch=new fe,nn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Rr.subVectors(n,e).cross(lh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){let n=t.delta(Rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ch.getNormalMatrix(t),i=this.coplanarPoint(Rr).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ci=new wi,ms=new O,Rs=class{constructor(t=new nn,e=new nn,n=new nn,i=new nn,s=new nn,r=new nn){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){let e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],u=n[6],d=n[7],h=n[8],m=n[9],g=n[10],p=n[11],f=n[12],v=n[13],x=n[14],b=n[15];return e[0].setComponents(o-i,d-a,p-h,b-f).normalize(),e[1].setComponents(o+i,d+a,p+h,b+f).normalize(),e[2].setComponents(o+s,d+l,p+m,b+v).normalize(),e[3].setComponents(o-s,d-l,p-m,b-v).normalize(),e[4].setComponents(o-r,d-u,p-g,b-x).normalize(),e[5].setComponents(o+r,d+u,p+g,b+x).normalize(),this}intersectsObject(t){let e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(ms.x=i.normal.x>0?t.max.x:t.min.x,ms.y=i.normal.y>0?t.max.y:t.min.y,ms.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ms)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ml(){let c=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=c.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=c.requestAnimationFrame(i),t=!0)},stop:function(){c.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){c=s}}}function hh(c,t){let e=t.isWebGL2,n=new WeakMap;function i(l,u){let d=l.array,h=l.usage,m=c.createBuffer();c.bindBuffer(u,m),c.bufferData(u,d,h),l.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,d){let h=u.array,m=u.updateRange;c.bindBuffer(d,l),m.count===-1?c.bufferSubData(d,0,h):(e?c.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):c.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1)}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(c.deleteBuffer(u.buffer),n.delete(l))}function a(l,u){if(l.isGLBufferAttribute){let h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=n.get(l);d===void 0?n.set(l,i(l,u)):d.version<l.version&&(s(d.buffer,l,u),d.version=l.version)}return{get:r,remove:o,update:a}}var Vi=class extends Be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,r=e/2,o=Math.floor(n),a=Math.floor(i),l=o+1,u=a+1,d=t/o,h=e/a,m=[],g=[],p=[],f=[];for(let v=0;v<u;v++){let x=v*h-r;for(let b=0;b<l;b++){let y=b*d-s;g.push(y,-x,0),p.push(0,0,1),f.push(b/o),f.push(1-v/a)}}for(let v=0;v<a;v++)for(let x=0;x<o;x++){let b=x+l*v,y=x+l*(v+1),M=x+1+l*(v+1),T=x+1+l*v;m.push(b,y,T),m.push(y,M,T)}this.setIndex(m),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(p,3)),this.setAttribute("uv",new we(f,2))}static fromJSON(t){return new Vi(t.width,t.height,t.widthSegments,t.heightSegments)}},uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,dh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ph=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,gh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xh="vec3 transformed = vec3( position );",vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yh=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,_h=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,wh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ah=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ph=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lh=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ih=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
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
#endif`,Rh=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,zh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oh=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Uh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
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
#endif`,kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
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
#endif`,Hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,jh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,$h=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jh=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Kh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,Qh=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,tu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,nu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,su=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,ru=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ou=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,au=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,cu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hu=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uu=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,du=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_u=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wu=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,bu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Mu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Su=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Au=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Pu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Lu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Iu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Ru=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Du=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,zu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ou=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Uu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ku=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Wu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gu=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Hu=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xu=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Yu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zu=`#ifdef USE_SKINNING
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
#endif`,ju=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$u=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ju=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ku=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qu=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,td=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,ed=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,nd=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,id=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,sd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,rd=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,od=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ld=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cd=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ud=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,dd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,fd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,md=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_d=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,wd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bd=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Md=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,Ad=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ed=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Cd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Pd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Id=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Dd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,zd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Od=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,Ud=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Tt={alphamap_fragment:uh,alphamap_pars_fragment:dh,alphatest_fragment:fh,alphatest_pars_fragment:ph,aomap_fragment:mh,aomap_pars_fragment:gh,begin_vertex:xh,beginnormal_vertex:vh,bsdfs:yh,iridescence_fragment:_h,bumpmap_pars_fragment:wh,clipping_planes_fragment:bh,clipping_planes_pars_fragment:Mh,clipping_planes_pars_vertex:Sh,clipping_planes_vertex:Ah,color_fragment:Th,color_pars_fragment:Eh,color_pars_vertex:Ch,color_vertex:Ph,common:Lh,cube_uv_reflection_fragment:Ih,defaultnormal_vertex:Rh,displacementmap_pars_vertex:Dh,displacementmap_vertex:Fh,emissivemap_fragment:zh,emissivemap_pars_fragment:Nh,encodings_fragment:Bh,encodings_pars_fragment:Oh,envmap_fragment:Uh,envmap_common_pars_fragment:kh,envmap_pars_fragment:Vh,envmap_pars_vertex:Wh,envmap_physical_pars_fragment:Qh,envmap_vertex:Gh,fog_vertex:Hh,fog_pars_vertex:qh,fog_fragment:Xh,fog_pars_fragment:Yh,gradientmap_pars_fragment:Zh,lightmap_fragment:jh,lightmap_pars_fragment:$h,lights_lambert_vertex:Jh,lights_pars_begin:Kh,lights_toon_fragment:tu,lights_toon_pars_fragment:eu,lights_phong_fragment:nu,lights_phong_pars_fragment:iu,lights_physical_fragment:su,lights_physical_pars_fragment:ru,lights_fragment_begin:ou,lights_fragment_maps:au,lights_fragment_end:lu,logdepthbuf_fragment:cu,logdepthbuf_pars_fragment:hu,logdepthbuf_pars_vertex:uu,logdepthbuf_vertex:du,map_fragment:fu,map_pars_fragment:pu,map_particle_fragment:mu,map_particle_pars_fragment:gu,metalnessmap_fragment:xu,metalnessmap_pars_fragment:vu,morphcolor_vertex:yu,morphnormal_vertex:_u,morphtarget_pars_vertex:wu,morphtarget_vertex:bu,normal_fragment_begin:Mu,normal_fragment_maps:Su,normal_pars_fragment:Au,normal_pars_vertex:Tu,normal_vertex:Eu,normalmap_pars_fragment:Cu,clearcoat_normal_fragment_begin:Pu,clearcoat_normal_fragment_maps:Lu,clearcoat_pars_fragment:Iu,iridescence_pars_fragment:Ru,output_fragment:Du,packing:Fu,premultiplied_alpha_fragment:zu,project_vertex:Nu,dithering_fragment:Bu,dithering_pars_fragment:Ou,roughnessmap_fragment:Uu,roughnessmap_pars_fragment:ku,shadowmap_pars_fragment:Vu,shadowmap_pars_vertex:Wu,shadowmap_vertex:Gu,shadowmask_pars_fragment:Hu,skinbase_vertex:qu,skinning_pars_vertex:Xu,skinning_vertex:Yu,skinnormal_vertex:Zu,specularmap_fragment:ju,specularmap_pars_fragment:$u,tonemapping_fragment:Ju,tonemapping_pars_fragment:Ku,transmission_fragment:Qu,transmission_pars_fragment:td,uv_pars_fragment:ed,uv_pars_vertex:nd,uv_vertex:id,uv2_pars_fragment:sd,uv2_pars_vertex:rd,uv2_vertex:od,worldpos_vertex:ad,background_vert:ld,background_frag:cd,cube_vert:hd,cube_frag:ud,depth_vert:dd,depth_frag:fd,distanceRGBA_vert:pd,distanceRGBA_frag:md,equirect_vert:gd,equirect_frag:xd,linedashed_vert:vd,linedashed_frag:yd,meshbasic_vert:_d,meshbasic_frag:wd,meshlambert_vert:bd,meshlambert_frag:Md,meshmatcap_vert:Sd,meshmatcap_frag:Ad,meshnormal_vert:Td,meshnormal_frag:Ed,meshphong_vert:Cd,meshphong_frag:Pd,meshphysical_vert:Ld,meshphysical_frag:Id,meshtoon_vert:Rd,meshtoon_frag:Dd,points_vert:Fd,points_frag:zd,shadow_vert:Nd,shadow_frag:Bd,sprite_vert:Od,sprite_frag:Ud},nt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new fe},uv2Transform:{value:new fe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fe}}},Ge={basic:{uniforms:re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.fog,nt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:re([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:re([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:re([nt.points,nt.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:re([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:re([nt.common,nt.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:re([nt.sprite,nt.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},cube:{uniforms:re([nt.envmap,{opacity:{value:1}}]),vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distanceRGBA:{uniforms:re([nt.common,nt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distanceRGBA_vert,fragmentShader:Tt.distanceRGBA_frag},shadow:{uniforms:re([nt.lights,nt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};Ge.physical={uniforms:re([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};function kd(c,t,e,n,i,s){let r=new zt(0),o=i===!0?0:1,a,l,u=null,d=0,h=null;function m(p,f){let v=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=t.get(x));let b=c.xr,y=b.getSession&&b.getSession();y&&y.environmentBlendMode==="additive"&&(x=null),x===null?g(r,o):x&&x.isColor&&(g(x,1),v=!0),(c.autoClear||v)&&c.clear(c.autoClearColor,c.autoClearDepth,c.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Os)?(l===void 0&&(l=new Ce(new on(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:Mi(Ge.cube.uniforms),vertexShader:Ge.cube.vertexShader,fragmentShader:Ge.cube.fragmentShader,side:Ne,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,T,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(u!==x||d!==x.version||h!==c.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=c.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(a===void 0&&(a=new Ce(new Vi(2,2),new an({name:"BackgroundMaterial",uniforms:Mi(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1})),a.geometry.deleteAttribute("normal"),Object.defineProperty(a.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(a)),a.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),a.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==c.toneMapping)&&(a.material.needsUpdate=!0,u=x,d=x.version,h=c.toneMapping),a.layers.enableAll(),p.unshift(a,a.geometry,a.material,0,0,null))}function g(p,f){e.buffers.color.setClear(p.r,p.g,p.b,f,s)}return{getClearColor:function(){return r},setClearColor:function(p,f=1){r.set(p),o=f,g(r,o)},getClearAlpha:function(){return o},setClearAlpha:function(p){o=p,g(r,o)},render:m}}function Vd(c,t,e,n){let i=c.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},a=f(null),l=a,u=!1;function d(P,D,L,X,k){let N=!1;if(r){let G=p(X,L,D);l!==G&&(l=G,m(l.object)),N=v(P,X,L,k),N&&x(P,X,L,k)}else{let G=D.wireframe===!0;(l.geometry!==X.id||l.program!==L.id||l.wireframe!==G)&&(l.geometry=X.id,l.program=L.id,l.wireframe=G,N=!0)}k!==null&&e.update(k,34963),(N||u)&&(u=!1,w(P,D,L,X),k!==null&&c.bindBuffer(34963,e.get(k).buffer))}function h(){return n.isWebGL2?c.createVertexArray():s.createVertexArrayOES()}function m(P){return n.isWebGL2?c.bindVertexArray(P):s.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?c.deleteVertexArray(P):s.deleteVertexArrayOES(P)}function p(P,D,L){let X=L.wireframe===!0,k=o[P.id];k===void 0&&(k={},o[P.id]=k);let N=k[D.id];N===void 0&&(N={},k[D.id]=N);let G=N[X];return G===void 0&&(G=f(h()),N[X]=G),G}function f(P){let D=[],L=[],X=[];for(let k=0;k<i;k++)D[k]=0,L[k]=0,X[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:L,attributeDivisors:X,object:P,attributes:{},index:null}}function v(P,D,L,X){let k=l.attributes,N=D.attributes,G=0,K=L.getAttributes();for(let W in K)if(K[W].location>=0){let ct=k[W],gt=N[W];if(gt===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(gt=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(gt=P.instanceColor)),ct===void 0||ct.attribute!==gt||gt&&ct.data!==gt.data)return!0;G++}return l.attributesNum!==G||l.index!==X}function x(P,D,L,X){let k={},N=D.attributes,G=0,K=L.getAttributes();for(let W in K)if(K[W].location>=0){let ct=N[W];ct===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(ct=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(ct=P.instanceColor));let gt={};gt.attribute=ct,ct&&ct.data&&(gt.data=ct.data),k[W]=gt,G++}l.attributes=k,l.attributesNum=G,l.index=X}function b(){let P=l.newAttributes;for(let D=0,L=P.length;D<L;D++)P[D]=0}function y(P){M(P,0)}function M(P,D){let L=l.newAttributes,X=l.enabledAttributes,k=l.attributeDivisors;L[P]=1,X[P]===0&&(c.enableVertexAttribArray(P),X[P]=1),k[P]!==D&&((n.isWebGL2?c:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,D),k[P]=D)}function T(){let P=l.newAttributes,D=l.enabledAttributes;for(let L=0,X=D.length;L<X;L++)D[L]!==P[L]&&(c.disableVertexAttribArray(L),D[L]=0)}function I(P,D,L,X,k,N){n.isWebGL2===!0&&(L===5124||L===5125)?c.vertexAttribIPointer(P,D,L,k,N):c.vertexAttribPointer(P,D,L,X,k,N)}function w(P,D,L,X){if(n.isWebGL2===!1&&(P.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;b();let k=X.attributes,N=L.getAttributes(),G=D.defaultAttributeValues;for(let K in N){let W=N[K];if(W.location>=0){let tt=k[K];if(tt===void 0&&(K==="instanceMatrix"&&P.instanceMatrix&&(tt=P.instanceMatrix),K==="instanceColor"&&P.instanceColor&&(tt=P.instanceColor)),tt!==void 0){let ct=tt.normalized,gt=tt.itemSize,$=e.get(tt);if($===void 0)continue;let It=$.buffer,vt=$.type,yt=$.bytesPerElement;if(tt.isInterleavedBufferAttribute){let ut=tt.data,Ut=ut.stride,At=tt.offset;if(ut.isInstancedInterleavedBuffer){for(let mt=0;mt<W.locationSize;mt++)M(W.location+mt,ut.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let mt=0;mt<W.locationSize;mt++)y(W.location+mt);c.bindBuffer(34962,It);for(let mt=0;mt<W.locationSize;mt++)I(W.location+mt,gt/W.locationSize,vt,ct,Ut*yt,(At+gt/W.locationSize*mt)*yt)}else{if(tt.isInstancedBufferAttribute){for(let ut=0;ut<W.locationSize;ut++)M(W.location+ut,tt.meshPerAttribute);P.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ut=0;ut<W.locationSize;ut++)y(W.location+ut);c.bindBuffer(34962,It);for(let ut=0;ut<W.locationSize;ut++)I(W.location+ut,gt/W.locationSize,vt,ct,gt*yt,gt/W.locationSize*ut*yt)}}else if(G!==void 0){let ct=G[K];if(ct!==void 0)switch(ct.length){case 2:c.vertexAttrib2fv(W.location,ct);break;case 3:c.vertexAttrib3fv(W.location,ct);break;case 4:c.vertexAttrib4fv(W.location,ct);break;default:c.vertexAttrib1fv(W.location,ct)}}}}T()}function C(){j();for(let P in o){let D=o[P];for(let L in D){let X=D[L];for(let k in X)g(X[k].object),delete X[k];delete D[L]}delete o[P]}}function R(P){if(o[P.id]===void 0)return;let D=o[P.id];for(let L in D){let X=D[L];for(let k in X)g(X[k].object),delete X[k];delete D[L]}delete o[P.id]}function z(P){for(let D in o){let L=o[D];if(L[P.id]===void 0)continue;let X=L[P.id];for(let k in X)g(X[k].object),delete X[k];delete L[P.id]}}function j(){B(),u=!0,l!==a&&(l=a,m(l.object))}function B(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:j,resetDefaultState:B,dispose:C,releaseStatesOfGeometry:R,releaseStatesOfProgram:z,initAttributes:b,enableAttribute:y,disableUnusedAttributes:T}}function Wd(c,t,e,n){let i=n.isWebGL2,s;function r(l){s=l}function o(l,u){c.drawArrays(s,l,u),e.update(u,s,1)}function a(l,u,d){if(d===0)return;let h,m;if(i)h=c,m="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,l,u,d),e.update(u,s,d)}this.setMode=r,this.render=o,this.renderInstances=a}function Gd(c,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");n=c.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(I){if(I==="highp"){if(c.getShaderPrecisionFormat(35633,36338).precision>0&&c.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&c.getShaderPrecisionFormat(35633,36337).precision>0&&c.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}let r=typeof WebGL2RenderingContext<"u"&&c instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&c instanceof WebGL2ComputeRenderingContext,o=e.precision!==void 0?e.precision:"highp",a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);let l=r||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,d=c.getParameter(34930),h=c.getParameter(35660),m=c.getParameter(3379),g=c.getParameter(34076),p=c.getParameter(34921),f=c.getParameter(36347),v=c.getParameter(36348),x=c.getParameter(36349),b=h>0,y=r||t.has("OES_texture_float"),M=b&&y,T=r?c.getParameter(36183):0;return{isWebGL2:r,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:f,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:b,floatFragmentTextures:y,floatVertexTextures:M,maxSamples:T}}function Hd(c){let t=this,e=null,n=0,i=!1,s=!1,r=new nn,o=new fe,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h,m){let g=d.length!==0||h||n!==0||i;return i=h,e=u(d,m,0),n=d.length,g},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(d,h,m){let g=d.clippingPlanes,p=d.clipIntersection,f=d.clipShadows,v=c.get(d);if(!i||g===null||g.length===0||s&&!f)s?u(null):l();else{let x=s?0:n,b=x*4,y=v.clippingState||null;a.value=y,y=u(g,h,b,m);for(let M=0;M!==b;++M)y[M]=e[M];v.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function l(){a.value!==e&&(a.value=e,a.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,m,g){let p=d!==null?d.length:0,f=null;if(p!==0){if(f=a.value,g!==!0||f===null){let v=m+p*4,x=h.matrixWorldInverse;o.getNormalMatrix(x),(f===null||f.length<v)&&(f=new Float32Array(v));for(let b=0,y=m;b!==p;++b,y+=4)r.copy(d[b]).applyMatrix4(x,o),r.normal.toArray(f,y),f[y+3]=r.constant}a.value=f,a.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,f}}function qd(c){let t=new WeakMap;function e(r,o){return o===Ur?r.mapping=vi:o===kr&&(r.mapping=yi),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){let o=r.mapping;if(o===Ur||o===kr)if(t.has(r)){let a=t.get(r).texture;return e(a,r.mapping)}else{let a=r.image;if(a&&a.height>0){let l=new Yr(a.height/2);return l.fromEquirectangularTexture(c,r),t.set(r,l),r.addEventListener("dispose",i),e(l.texture,r.mapping)}else return null}}return r}function i(r){let o=r.target;o.removeEventListener("dispose",i);let a=t.get(o);a!==void 0&&(t.delete(o),a.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Zr=class extends Ls{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,r=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,r=s+l*this.view.width,o-=u*this.view.offsetY,a=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},di=4,Fa=[.125,.215,.35,.446,.526,.582],In=20,Dr=new Zr,za=new zt,Fr=null,Ln=(1+Math.sqrt(5))/2,hi=1/Ln,Na=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Ln,hi),new O(0,Ln,-hi),new O(hi,0,Ln),new O(-hi,0,Ln),new O(Ln,hi,0),new O(-Ln,hi,0)],Ds=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Fr=this._renderer.getRenderTarget(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oa(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fr),t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vi||t.mapping===yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fr=this._renderer.getRenderTarget();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ee,minFilter:Ee,generateMipmaps:!1,type:ki,format:He,encoding:On,depthBuffer:!1},i=Ba(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ba(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Xd(s)),this._blurMaterial=Yd(s,t,e)}return i}_compileMaterial(t){let e=new Ce(this._lodPlanes[0],t);this._renderer.compile(e,Dr)}_sceneToCubeUV(t,e,n,i){let o=new le(90,1,e,n),a=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(za),u.toneMapping=sn,u.autoClear=!1;let m=new bi({name:"PMREM.Background",side:Ne,depthWrite:!1,depthTest:!1}),g=new Ce(new on,m),p=!1,f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,p=!0):(m.color.copy(za),p=!0);for(let v=0;v<6;v++){let x=v%3;x===0?(o.up.set(0,a[v],0),o.lookAt(l[v],0,0)):x===1?(o.up.set(0,0,a[v]),o.lookAt(0,l[v],0)):(o.up.set(0,a[v],0),o.lookAt(0,0,l[v]));let b=this._cubeSize;gs(i,x*b,v>2?b:0,b,b),u.setRenderTarget(i),p&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=f}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===vi||t.mapping===yi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oa());let s=i?this._cubemapMaterial:this._equirectMaterial,r=new Ce(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;let a=this._cubeSize;gs(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(r,Dr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Na[(i-1)%Na.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){let r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){let a=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new Ce(this._lodPlanes[i],l),h=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*In-1),p=s/g,f=isFinite(s)?1+Math.floor(u*p):In;f>In&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${In}`);let v=[],x=0;for(let I=0;I<In;++I){let w=I/p,C=Math.exp(-w*w/2);v.push(C),I===0?x+=C:I<f&&(x+=2*C)}for(let I=0;I<v.length;I++)v[I]=v[I]/x;h.envMap.value=t.texture,h.samples.value=f,h.weights.value=v,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);let{_lodMax:b}=this;h.dTheta.value=g,h.mipInt.value=b-n;let y=this._sizeLods[i],M=3*y*(i>b-di?i-b+di:0),T=4*(this._cubeSize-y);gs(e,M,T,3*y,2*y),a.setRenderTarget(e),a.render(d,Dr)}};function Xd(c){let t=[],e=[],n=[],i=c,s=c-di+1+Fa.length;for(let r=0;r<s;r++){let o=Math.pow(2,i);e.push(o);let a=1/o;r>c-di?a=Fa[r-c+di-1]:r===0&&(a=0),n.push(a);let l=1/(o-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,p=3,f=2,v=1,x=new Float32Array(p*g*m),b=new Float32Array(f*g*m),y=new Float32Array(v*g*m);for(let T=0;T<m;T++){let I=T%3*2/3-1,w=T>2?0:-1,C=[I,w,0,I+2/3,w,0,I+2/3,w+1,0,I,w,0,I+2/3,w+1,0,I,w+1,0];x.set(C,p*g*T),b.set(h,f*g*T);let R=[T,T,T,T,T,T];y.set(R,v*g*T)}let M=new Be;M.setAttribute("position",new Pe(x,p)),M.setAttribute("uv",new Pe(b,f)),M.setAttribute("faceIndex",new Pe(y,v)),t.push(M),i>di&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ba(c,t,e){let n=new rn(c,t,e);return n.texture.mapping=Os,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(c,t,e,n,i){c.viewport.set(t,e,n,i),c.scissor.set(t,e,n,i)}function Yd(c,t,e){let n=new Float32Array(In),i=new O(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:In,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${c}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vo(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Oa(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Ua(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function vo(){return`

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
	`}function Zd(c){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let a=o.mapping,l=a===Ur||a===kr,u=a===vi||a===yi;if(l||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=t.get(o);return e===null&&(e=new Ds(c)),d=l?e.fromEquirectangular(o,d):e.fromCubemap(o,d),t.set(o,d),d.texture}else{if(t.has(o))return t.get(o).texture;{let d=o.image;if(l&&d&&d.height>0||u&&d&&i(d)){e===null&&(e=new Ds(c));let h=l?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let a=0,l=6;for(let u=0;u<l;u++)o[u]!==void 0&&a++;return a===l}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function jd(c){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=c.getExtension("WEBGL_depth_texture")||c.getExtension("MOZ_WEBGL_depth_texture")||c.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=c.getExtension("EXT_texture_filter_anisotropic")||c.getExtension("MOZ_EXT_texture_filter_anisotropic")||c.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=c.getExtension("WEBGL_compressed_texture_s3tc")||c.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=c.getExtension("WEBGL_compressed_texture_pvrtc")||c.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=c.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function $d(c,t,e,n){let i={},s=new WeakMap;function r(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete i[h.id];let m=s.get(h);m&&(t.remove(m),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,e.memory.geometries++),h}function a(d){let h=d.attributes;for(let g in h)t.update(h[g],34962);let m=d.morphAttributes;for(let g in m){let p=m[g];for(let f=0,v=p.length;f<v;f++)t.update(p[f],34962)}}function l(d){let h=[],m=d.index,g=d.attributes.position,p=0;if(m!==null){let x=m.array;p=m.version;for(let b=0,y=x.length;b<y;b+=3){let M=x[b+0],T=x[b+1],I=x[b+2];h.push(M,T,T,I,I,M)}}else{let x=g.array;p=g.version;for(let b=0,y=x.length/3-1;b<y;b+=3){let M=b+0,T=b+1,I=b+2;h.push(M,T,T,I,I,M)}}let f=new(fl(h)?Ps:Cs)(h,1);f.version=p;let v=s.get(d);v&&t.remove(v),s.set(d,f)}function u(d){let h=s.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:a,getWireframeAttribute:u}}function Jd(c,t,e,n){let i=n.isWebGL2,s;function r(h){s=h}let o,a;function l(h){o=h.type,a=h.bytesPerElement}function u(h,m){c.drawElements(s,m,o,h*a),e.update(m,s,1)}function d(h,m,g){if(g===0)return;let p,f;if(i)p=c,f="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,m,o,h*a,g),e.update(m,s,g)}this.setMode=r,this.setIndex=l,this.render=u,this.renderInstances=d}function Kd(c){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Qd(c,t){return c[0]-t[0]}function tf(c,t){return Math.abs(t[1])-Math.abs(c[1])}function zr(c,t){let e=1,n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Uint8Array?e=255:n instanceof Uint16Array?e=65535:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),c.divideScalar(e)}function ef(c,t,e){let n={},i=new Float32Array(8),s=new WeakMap,r=new $t,o=[];for(let l=0;l<8;l++)o[l]=[l,0];function a(l,u,d,h){let m=l.morphTargetInfluences;if(t.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0,f=s.get(u);if(f===void 0||f.count!==p){let D=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",D)};f!==void 0&&f.texture.dispose();let b=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],w=u.morphAttributes.color||[],C=0;b===!0&&(C=1),y===!0&&(C=2),M===!0&&(C=3);let R=u.attributes.position.count*C,z=1;R>t.maxTextureSize&&(z=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);let j=new Float32Array(R*z*4*p),B=new As(j,R,z,p);B.type=Dn,B.needsUpdate=!0;let P=C*4;for(let L=0;L<p;L++){let X=T[L],k=I[L],N=w[L],G=R*z*4*L;for(let K=0;K<X.count;K++){let W=K*P;b===!0&&(r.fromBufferAttribute(X,K),X.normalized===!0&&zr(r,X),j[G+W+0]=r.x,j[G+W+1]=r.y,j[G+W+2]=r.z,j[G+W+3]=0),y===!0&&(r.fromBufferAttribute(k,K),k.normalized===!0&&zr(r,k),j[G+W+4]=r.x,j[G+W+5]=r.y,j[G+W+6]=r.z,j[G+W+7]=0),M===!0&&(r.fromBufferAttribute(N,K),N.normalized===!0&&zr(r,N),j[G+W+8]=r.x,j[G+W+9]=r.y,j[G+W+10]=r.z,j[G+W+11]=N.itemSize===4?r.w:1)}}f={count:p,texture:B,size:new Bt(R,z)},s.set(u,f),u.addEventListener("dispose",D)}let v=0;for(let b=0;b<m.length;b++)v+=m[b];let x=u.morphTargetsRelative?1:1-v;h.getUniforms().setValue(c,"morphTargetBaseInfluence",x),h.getUniforms().setValue(c,"morphTargetInfluences",m),h.getUniforms().setValue(c,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(c,"morphTargetsTextureSize",f.size)}else{let g=m===void 0?0:m.length,p=n[u.id];if(p===void 0||p.length!==g){p=[];for(let y=0;y<g;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<g;y++){let M=p[y];M[0]=y,M[1]=m[y]}p.sort(tf);for(let y=0;y<8;y++)y<g&&p[y][1]?(o[y][0]=p[y][0],o[y][1]=p[y][1]):(o[y][0]=Number.MAX_SAFE_INTEGER,o[y][1]=0);o.sort(Qd);let f=u.morphAttributes.position,v=u.morphAttributes.normal,x=0;for(let y=0;y<8;y++){let M=o[y],T=M[0],I=M[1];T!==Number.MAX_SAFE_INTEGER&&I?(f&&u.getAttribute("morphTarget"+y)!==f[T]&&u.setAttribute("morphTarget"+y,f[T]),v&&u.getAttribute("morphNormal"+y)!==v[T]&&u.setAttribute("morphNormal"+y,v[T]),i[y]=I,x+=I):(f&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),v&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}let b=u.morphTargetsRelative?1:1-x;h.getUniforms().setValue(c,"morphTargetBaseInfluence",b),h.getUniforms().setValue(c,"morphTargetInfluences",i)}}return{update:a}}function nf(c,t,e,n){let i=new WeakMap;function s(a){let l=n.render.frame,u=a.geometry,d=t.get(a,u);return i.get(d)!==l&&(t.update(d),i.set(d,l)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),e.update(a.instanceMatrix,34962),a.instanceColor!==null&&e.update(a.instanceColor,34962)),d}function r(){i=new WeakMap}function o(a){let l=a.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:r}}var gl=new be,xl=new As,vl=new qr,yl=new Is,ka=[],Va=[],Wa=new Float32Array(16),Ga=new Float32Array(9),Ha=new Float32Array(4);function Ai(c,t,e){let n=c[0];if(n<=0||n>0)return c;let i=t*e,s=ka[i];if(s===void 0&&(s=new Float32Array(i),ka[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,c[r].toArray(s,o)}return s}function ce(c,t){if(c.length!==t.length)return!1;for(let e=0,n=c.length;e<n;e++)if(c[e]!==t[e])return!1;return!0}function he(c,t){for(let e=0,n=t.length;e<n;e++)c[e]=t[e]}function ks(c,t){let e=Va[t];e===void 0&&(e=new Int32Array(t),Va[t]=e);for(let n=0;n!==t;++n)e[n]=c.allocateTextureUnit();return e}function sf(c,t){let e=this.cache;e[0]!==t&&(c.uniform1f(this.addr,t),e[0]=t)}function rf(c,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(c.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ce(e,t))return;c.uniform2fv(this.addr,t),he(e,t)}}function of(c,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(c.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(c.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ce(e,t))return;c.uniform3fv(this.addr,t),he(e,t)}}function af(c,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(c.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ce(e,t))return;c.uniform4fv(this.addr,t),he(e,t)}}function lf(c,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;c.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Ha.set(n),c.uniformMatrix2fv(this.addr,!1,Ha),he(e,n)}}function cf(c,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;c.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Ga.set(n),c.uniformMatrix3fv(this.addr,!1,Ga),he(e,n)}}function hf(c,t){let e=this.cache,n=t.elements;if(n===void 0){if(ce(e,t))return;c.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(ce(e,n))return;Wa.set(n),c.uniformMatrix4fv(this.addr,!1,Wa),he(e,n)}}function uf(c,t){let e=this.cache;e[0]!==t&&(c.uniform1i(this.addr,t),e[0]=t)}function df(c,t){let e=this.cache;ce(e,t)||(c.uniform2iv(this.addr,t),he(e,t))}function ff(c,t){let e=this.cache;ce(e,t)||(c.uniform3iv(this.addr,t),he(e,t))}function pf(c,t){let e=this.cache;ce(e,t)||(c.uniform4iv(this.addr,t),he(e,t))}function mf(c,t){let e=this.cache;e[0]!==t&&(c.uniform1ui(this.addr,t),e[0]=t)}function gf(c,t){let e=this.cache;ce(e,t)||(c.uniform2uiv(this.addr,t),he(e,t))}function xf(c,t){let e=this.cache;ce(e,t)||(c.uniform3uiv(this.addr,t),he(e,t))}function vf(c,t){let e=this.cache;ce(e,t)||(c.uniform4uiv(this.addr,t),he(e,t))}function yf(c,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||gl,i)}function _f(c,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vl,i)}function wf(c,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||yl,i)}function bf(c,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(c.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||xl,i)}function Mf(c){switch(c){case 5126:return sf;case 35664:return rf;case 35665:return of;case 35666:return af;case 35674:return lf;case 35675:return cf;case 35676:return hf;case 5124:case 35670:return uf;case 35667:case 35671:return df;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return gf;case 36295:return xf;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return yf;case 35679:case 36299:case 36307:return _f;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return bf}}function Sf(c,t){c.uniform1fv(this.addr,t)}function Af(c,t){let e=Ai(t,this.size,2);c.uniform2fv(this.addr,e)}function Tf(c,t){let e=Ai(t,this.size,3);c.uniform3fv(this.addr,e)}function Ef(c,t){let e=Ai(t,this.size,4);c.uniform4fv(this.addr,e)}function Cf(c,t){let e=Ai(t,this.size,4);c.uniformMatrix2fv(this.addr,!1,e)}function Pf(c,t){let e=Ai(t,this.size,9);c.uniformMatrix3fv(this.addr,!1,e)}function Lf(c,t){let e=Ai(t,this.size,16);c.uniformMatrix4fv(this.addr,!1,e)}function If(c,t){c.uniform1iv(this.addr,t)}function Rf(c,t){c.uniform2iv(this.addr,t)}function Df(c,t){c.uniform3iv(this.addr,t)}function Ff(c,t){c.uniform4iv(this.addr,t)}function zf(c,t){c.uniform1uiv(this.addr,t)}function Nf(c,t){c.uniform2uiv(this.addr,t)}function Bf(c,t){c.uniform3uiv(this.addr,t)}function Of(c,t){c.uniform4uiv(this.addr,t)}function Uf(c,t,e){let n=t.length,i=ks(e,n);c.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2D(t[s]||gl,i[s])}function kf(c,t,e){let n=t.length,i=ks(e,n);c.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||vl,i[s])}function Vf(c,t,e){let n=t.length,i=ks(e,n);c.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTextureCube(t[s]||yl,i[s])}function Wf(c,t,e){let n=t.length,i=ks(e,n);c.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||xl,i[s])}function Gf(c){switch(c){case 5126:return Sf;case 35664:return Af;case 35665:return Tf;case 35666:return Ef;case 35674:return Cf;case 35675:return Pf;case 35676:return Lf;case 5124:case 35670:return If;case 35667:case 35671:return Rf;case 35668:case 35672:return Df;case 35669:case 35673:return Ff;case 5125:return zf;case 36294:return Nf;case 36295:return Bf;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Uf;case 35679:case 36299:case 36307:return kf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return Wf}}var jr=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Mf(e.type)}},$r=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Gf(e.type)}},Jr=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,r=i.length;s!==r;++s){let o=i[s];o.setValue(t,e[o.id],n)}}},Nr=/(\w+)(\])?(\[|\.)?/g;function qa(c,t){c.seq.push(t),c.map[t.id]=t}function Hf(c,t,e){let n=c.name,i=n.length;for(Nr.lastIndex=0;;){let s=Nr.exec(n),r=Nr.lastIndex,o=s[1],a=s[2]==="]",l=s[3];if(a&&(o=o|0),l===void 0||l==="["&&r+2===i){qa(e,l===void 0?new jr(o,c,t):new $r(o,c,t));break}else{let d=e.map[o];d===void 0&&(d=new Jr(o),qa(e,d)),e=d}}}var gi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);Hf(s,r,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){let o=e[s],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let r=t[i];r.id in e&&n.push(r)}return n}};function Xa(c,t,e){let n=c.createShader(t);return c.shaderSource(n,e),c.compileShader(n),n}var qf=0;function Xf(c,t){let e=c.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){let o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function Yf(c){switch(c){case On:return["Linear","( value )"];case Gt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",c),["Linear","( value )"]}}function Ya(c,t,e){let n=c.getShaderParameter(t,35713),i=c.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Xf(c.getShaderSource(t),r)}else return i}function Zf(c,t){let e=Yf(t);return"vec4 "+c+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function jf(c,t){let e;switch(t){case _c:e="Linear";break;case wc:e="Reinhard";break;case bc:e="OptimizedCineon";break;case Mc:e="ACESFilmic";break;case Sc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+c+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function $f(c){return[c.extensionDerivatives||!!c.envMapCubeUVHeight||c.bumpMap||c.tangentSpaceNormalMap||c.clearcoatNormalMap||c.flatShading||c.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(c.extensionFragDepth||c.logarithmicDepthBuffer)&&c.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",c.extensionDrawBuffers&&c.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(c.extensionShaderTextureLOD||c.envMap||c.transmission)&&c.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bi).join(`
`)}function Jf(c){let t=[];for(let e in c){let n=c[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kf(c,t){let e={},n=c.getProgramParameter(t,35721);for(let i=0;i<n;i++){let s=c.getActiveAttrib(t,i),r=s.name,o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[r]={type:s.type,location:c.getAttribLocation(t,r),locationSize:o}}return e}function Bi(c){return c!==""}function Za(c,t){return c.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ja(c,t){return c.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Qf=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(c){return c.replace(Qf,tp)}function tp(c,t){let e=Tt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Kr(e)}var ep=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,np=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $a(c){return c.replace(np,_l).replace(ep,ip)}function ip(c,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),_l(c,t,e,n)}function _l(c,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ja(c){let t="precision "+c.precision+` float;
precision `+c.precision+" int;";return c.precision==="highp"?t+=`
#define HIGH_PRECISION`:c.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:c.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sp(c){let t="SHADOWMAP_TYPE_BASIC";return c.shadowMapType===al?t="SHADOWMAP_TYPE_PCF":c.shadowMapType===Jl?t="SHADOWMAP_TYPE_PCF_SOFT":c.shadowMapType===Ni&&(t="SHADOWMAP_TYPE_VSM"),t}function rp(c){let t="ENVMAP_TYPE_CUBE";if(c.envMap)switch(c.envMapMode){case vi:case yi:t="ENVMAP_TYPE_CUBE";break;case Os:t="ENVMAP_TYPE_CUBE_UV";break}return t}function op(c){let t="ENVMAP_MODE_REFLECTION";if(c.envMap)switch(c.envMapMode){case yi:t="ENVMAP_MODE_REFRACTION";break}return t}function ap(c){let t="ENVMAP_BLENDING_NONE";if(c.envMap)switch(c.combine){case hl:t="ENVMAP_BLENDING_MULTIPLY";break;case vc:t="ENVMAP_BLENDING_MIX";break;case yc:t="ENVMAP_BLENDING_ADD";break}return t}function lp(c){let t=c.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function cp(c,t,e,n){let i=c.getContext(),s=e.defines,r=e.vertexShader,o=e.fragmentShader,a=sp(e),l=rp(e),u=op(e),d=ap(e),h=lp(e),m=e.isWebGL2?"":$f(e),g=Jf(s),p=i.createProgram(),f,v,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=[g].filter(Bi).join(`
`),f.length>0&&(f+=`
`),v=[m,g].filter(Bi).join(`
`),v.length>0&&(v+=`
`)):(f=[Ja(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),v=[m,Ja(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==sn?"#define TONE_MAPPING":"",e.toneMapping!==sn?Tt.tonemapping_pars_fragment:"",e.toneMapping!==sn?jf("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Tt.encodings_pars_fragment,Zf("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bi).join(`
`)),r=Kr(r),r=Za(r,e),r=ja(r,e),o=Kr(o),o=Za(o,e),o=ja(o,e),r=$a(r),o=$a(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,v=["#define varying in",e.glslVersion===_a?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_a?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let b=x+f+r,y=x+v+o,M=Xa(i,35633,b),T=Xa(i,35632,y);if(i.attachShader(p,M),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p),c.debug.checkShaderErrors){let C=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(M).trim(),z=i.getShaderInfoLog(T).trim(),j=!0,B=!0;if(i.getProgramParameter(p,35714)===!1){j=!1;let P=Ya(i,M,"vertex"),D=Ya(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,35715)+`

Program Info Log: `+C+`
`+P+`
`+D)}else C!==""?console.warn("THREE.WebGLProgram: Program Info Log:",C):(R===""||z==="")&&(B=!1);B&&(this.diagnostics={runnable:j,programLog:C,vertexShader:{log:R,prefix:f},fragmentShader:{log:z,prefix:v}})}i.deleteShader(M),i.deleteShader(T);let I;this.getUniforms=function(){return I===void 0&&(I=new gi(i,p)),I};let w;return this.getAttributes=function(){return w===void 0&&(w=Kf(i,p)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.name=e.shaderName,this.id=qf++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=T,this}var hp=0,Qr=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){let e=this.shaderCache;if(e.has(t)===!1){let n=new to(t);e.set(t,n)}return e.get(t)}},to=class{constructor(t){this.id=hp++,this.code=t,this.usedTimes=0}};function up(c,t,e,n,i,s,r){let o=new Es,a=new Qr,l=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,h=i.vertexTextures,m=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(w,C,R,z,j){let B=z.fog,P=j.geometry,D=w.isMeshStandardMaterial?z.environment:null,L=(w.isMeshStandardMaterial?e:t).get(w.envMap||D),X=!!L&&L.mapping===Os?L.image.height:null,k=g[w.type];w.precision!==null&&(m=i.getMaxPrecision(w.precision),m!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",m,"instead."));let N=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,G=N!==void 0?N.length:0,K=0;P.morphAttributes.position!==void 0&&(K=1),P.morphAttributes.normal!==void 0&&(K=2),P.morphAttributes.color!==void 0&&(K=3);let W,tt,ct,gt;if(k){let Ut=Ge[k];W=Ut.vertexShader,tt=Ut.fragmentShader}else W=w.vertexShader,tt=w.fragmentShader,a.update(w),ct=a.getVertexShaderID(w),gt=a.getFragmentShaderID(w);let $=c.getRenderTarget(),It=w.alphaTest>0,vt=w.clearcoat>0,yt=w.iridescence>0;return{isWebGL2:u,shaderID:k,shaderName:w.type,vertexShader:W,fragmentShader:tt,defines:w.defines,customVertexShaderID:ct,customFragmentShaderID:gt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:m,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:h,outputEncoding:$===null?c.outputEncoding:$.isXRRenderTarget===!0?$.texture.encoding:On,map:!!w.map,matcap:!!w.matcap,envMap:!!L,envMapMode:L&&L.mapping,envMapCubeUVHeight:X,lightMap:!!w.lightMap,aoMap:!!w.aoMap,emissiveMap:!!w.emissiveMap,bumpMap:!!w.bumpMap,normalMap:!!w.normalMap,objectSpaceNormalMap:w.normalMapType===Hc,tangentSpaceNormalMap:w.normalMapType===Gc,decodeVideoTexture:!!w.map&&w.map.isVideoTexture===!0&&w.map.encoding===Gt,clearcoat:vt,clearcoatMap:vt&&!!w.clearcoatMap,clearcoatRoughnessMap:vt&&!!w.clearcoatRoughnessMap,clearcoatNormalMap:vt&&!!w.clearcoatNormalMap,iridescence:yt,iridescenceMap:yt&&!!w.iridescenceMap,iridescenceThicknessMap:yt&&!!w.iridescenceThicknessMap,displacementMap:!!w.displacementMap,roughnessMap:!!w.roughnessMap,metalnessMap:!!w.metalnessMap,specularMap:!!w.specularMap,specularIntensityMap:!!w.specularIntensityMap,specularColorMap:!!w.specularColorMap,opaque:w.transparent===!1&&w.blending===pi,alphaMap:!!w.alphaMap,alphaTest:It,gradientMap:!!w.gradientMap,sheen:w.sheen>0,sheenColorMap:!!w.sheenColorMap,sheenRoughnessMap:!!w.sheenRoughnessMap,transmission:w.transmission>0,transmissionMap:!!w.transmissionMap,thicknessMap:!!w.thicknessMap,combine:w.combine,vertexTangents:!!w.normalMap&&!!P.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatMap||!!w.clearcoatRoughnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||!!w.displacementMap||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||!!w.sheenColorMap||!!w.sheenRoughnessMap,uvsVertexOnly:!(!!w.map||!!w.bumpMap||!!w.normalMap||!!w.specularMap||!!w.alphaMap||!!w.emissiveMap||!!w.roughnessMap||!!w.metalnessMap||!!w.clearcoatNormalMap||!!w.iridescenceMap||!!w.iridescenceThicknessMap||w.transmission>0||!!w.transmissionMap||!!w.thicknessMap||!!w.specularIntensityMap||!!w.specularColorMap||w.sheen>0||!!w.sheenColorMap||!!w.sheenRoughnessMap)&&!!w.displacementMap,fog:!!B,useFog:w.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:!!w.flatShading,sizeAttenuation:w.sizeAttenuation,logarithmicDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:K,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:c.shadowMap.enabled&&R.length>0,shadowMapType:c.shadowMap.type,toneMapping:w.toneMapped?c.toneMapping:sn,physicallyCorrectLights:c.physicallyCorrectLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===xi,flipSided:w.side===Ne,useDepthPacking:!!w.depthPacking,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:w.extensions&&w.extensions.derivatives,extensionFragDepth:w.extensions&&w.extensions.fragDepth,extensionDrawBuffers:w.extensions&&w.extensions.drawBuffers,extensionShaderTextureLOD:w.extensions&&w.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function f(w){let C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(let R in w.defines)C.push(R),C.push(w.defines[R]);return w.isRawShaderMaterial===!1&&(v(C,w),x(C,w),C.push(c.outputEncoding)),C.push(w.customProgramCacheKey),C.join()}function v(w,C){w.push(C.precision),w.push(C.outputEncoding),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.combine),w.push(C.vertexUvs),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function x(w,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.map&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.lightMap&&o.enable(7),C.aoMap&&o.enable(8),C.emissiveMap&&o.enable(9),C.bumpMap&&o.enable(10),C.normalMap&&o.enable(11),C.objectSpaceNormalMap&&o.enable(12),C.tangentSpaceNormalMap&&o.enable(13),C.clearcoat&&o.enable(14),C.clearcoatMap&&o.enable(15),C.clearcoatRoughnessMap&&o.enable(16),C.clearcoatNormalMap&&o.enable(17),C.iridescence&&o.enable(18),C.iridescenceMap&&o.enable(19),C.iridescenceThicknessMap&&o.enable(20),C.displacementMap&&o.enable(21),C.specularMap&&o.enable(22),C.roughnessMap&&o.enable(23),C.metalnessMap&&o.enable(24),C.gradientMap&&o.enable(25),C.alphaMap&&o.enable(26),C.alphaTest&&o.enable(27),C.vertexColors&&o.enable(28),C.vertexAlphas&&o.enable(29),C.vertexUvs&&o.enable(30),C.vertexTangents&&o.enable(31),C.uvsVertexOnly&&o.enable(32),C.fog&&o.enable(33),w.push(o.mask),o.disableAll(),C.useFog&&o.enable(0),C.flatShading&&o.enable(1),C.logarithmicDepthBuffer&&o.enable(2),C.skinning&&o.enable(3),C.morphTargets&&o.enable(4),C.morphNormals&&o.enable(5),C.morphColors&&o.enable(6),C.premultipliedAlpha&&o.enable(7),C.shadowMapEnabled&&o.enable(8),C.physicallyCorrectLights&&o.enable(9),C.doubleSided&&o.enable(10),C.flipSided&&o.enable(11),C.useDepthPacking&&o.enable(12),C.dithering&&o.enable(13),C.specularIntensityMap&&o.enable(14),C.specularColorMap&&o.enable(15),C.transmission&&o.enable(16),C.transmissionMap&&o.enable(17),C.thicknessMap&&o.enable(18),C.sheen&&o.enable(19),C.sheenColorMap&&o.enable(20),C.sheenRoughnessMap&&o.enable(21),C.decodeVideoTexture&&o.enable(22),C.opaque&&o.enable(23),w.push(o.mask)}function b(w){let C=g[w.type],R;if(C){let z=Ge[C];R=rh.clone(z.uniforms)}else R=w.uniforms;return R}function y(w,C){let R;for(let z=0,j=l.length;z<j;z++){let B=l[z];if(B.cacheKey===C){R=B,++R.usedTimes;break}}return R===void 0&&(R=new cp(c,C,w,s),l.push(R)),R}function M(w){if(--w.usedTimes===0){let C=l.indexOf(w);l[C]=l[l.length-1],l.pop(),w.destroy()}}function T(w){a.remove(w)}function I(){a.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:b,acquireProgram:y,releaseProgram:M,releaseShaderCache:T,programs:l,dispose:I}}function dp(){let c=new WeakMap;function t(s){let r=c.get(s);return r===void 0&&(r={},c.set(s,r)),r}function e(s){c.delete(s)}function n(s,r,o){c.get(s)[r]=o}function i(){c=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function fp(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.material.id!==t.material.id?c.material.id-t.material.id:c.z!==t.z?c.z-t.z:c.id-t.id}function Ka(c,t){return c.groupOrder!==t.groupOrder?c.groupOrder-t.groupOrder:c.renderOrder!==t.renderOrder?c.renderOrder-t.renderOrder:c.z!==t.z?t.z-c.z:c.id-t.id}function Qa(){let c=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(d,h,m,g,p,f){let v=c[t];return v===void 0?(v={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:p,group:f},c[t]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=m,v.groupOrder=g,v.renderOrder=d.renderOrder,v.z=p,v.group=f),t++,v}function o(d,h,m,g,p,f){let v=r(d,h,m,g,p,f);m.transmission>0?n.push(v):m.transparent===!0?i.push(v):e.push(v)}function a(d,h,m,g,p,f){let v=r(d,h,m,g,p,f);m.transmission>0?n.unshift(v):m.transparent===!0?i.unshift(v):e.unshift(v)}function l(d,h){e.length>1&&e.sort(d||fp),n.length>1&&n.sort(h||Ka),i.length>1&&i.sort(h||Ka)}function u(){for(let d=t,h=c.length;d<h;d++){let m=c[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:a,finish:u,sort:l}}function pp(){let c=new WeakMap;function t(n,i){let s;return c.has(n)===!1?(s=new Qa,c.set(n,[s])):i>=c.get(n).length?(s=new Qa,c.get(n).push(s)):s=c.get(n)[i],s}function e(){c=new WeakMap}return{get:t,dispose:e}}function mp(){let c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new zt};break;case"SpotLight":e={position:new O,direction:new O,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new O,halfWidth:new O,halfHeight:new O};break}return c[t.id]=e,e}}}function gp(){let c={};return{get:function(t){if(c[t.id]!==void 0)return c[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return c[t.id]=e,e}}}var xp=0;function vp(c,t){return(t.castShadow?1:0)-(c.castShadow?1:0)}function yp(c,t){let e=new mp,n=gp(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let u=0;u<9;u++)i.probe.push(new O);let s=new O,r=new Jt,o=new Jt;function a(u,d){let h=0,m=0,g=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let p=0,f=0,v=0,x=0,b=0,y=0,M=0,T=0;u.sort(vp);let I=d!==!0?Math.PI:1;for(let C=0,R=u.length;C<R;C++){let z=u[C],j=z.color,B=z.intensity,P=z.distance,D=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)h+=j.r*B*I,m+=j.g*B*I,g+=j.b*B*I;else if(z.isLightProbe)for(let L=0;L<9;L++)i.probe[L].addScaledVector(z.sh.coefficients[L],B);else if(z.isDirectionalLight){let L=e.get(z);if(L.color.copy(z.color).multiplyScalar(z.intensity*I),z.castShadow){let X=z.shadow,k=n.get(z);k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.directionalShadow[p]=k,i.directionalShadowMap[p]=D,i.directionalShadowMatrix[p]=z.shadow.matrix,y++}i.directional[p]=L,p++}else if(z.isSpotLight){let L=e.get(z);if(L.position.setFromMatrixPosition(z.matrixWorld),L.color.copy(j).multiplyScalar(B*I),L.distance=P,L.coneCos=Math.cos(z.angle),L.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),L.decay=z.decay,z.castShadow){let X=z.shadow,k=n.get(z);k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,i.spotShadow[v]=k,i.spotShadowMap[v]=D,i.spotShadowMatrix[v]=z.shadow.matrix,T++}i.spot[v]=L,v++}else if(z.isRectAreaLight){let L=e.get(z);L.color.copy(j).multiplyScalar(B),L.halfWidth.set(z.width*.5,0,0),L.halfHeight.set(0,z.height*.5,0),i.rectArea[x]=L,x++}else if(z.isPointLight){let L=e.get(z);if(L.color.copy(z.color).multiplyScalar(z.intensity*I),L.distance=z.distance,L.decay=z.decay,z.castShadow){let X=z.shadow,k=n.get(z);k.shadowBias=X.bias,k.shadowNormalBias=X.normalBias,k.shadowRadius=X.radius,k.shadowMapSize=X.mapSize,k.shadowCameraNear=X.camera.near,k.shadowCameraFar=X.camera.far,i.pointShadow[f]=k,i.pointShadowMap[f]=D,i.pointShadowMatrix[f]=z.shadow.matrix,M++}i.point[f]=L,f++}else if(z.isHemisphereLight){let L=e.get(z);L.skyColor.copy(z.color).multiplyScalar(B*I),L.groundColor.copy(z.groundColor).multiplyScalar(B*I),i.hemi[b]=L,b++}}x>0&&(t.isWebGL2||c.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_FLOAT_1,i.rectAreaLTC2=nt.LTC_FLOAT_2):c.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=nt.LTC_HALF_1,i.rectAreaLTC2=nt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=m,i.ambient[2]=g;let w=i.hash;(w.directionalLength!==p||w.pointLength!==f||w.spotLength!==v||w.rectAreaLength!==x||w.hemiLength!==b||w.numDirectionalShadows!==y||w.numPointShadows!==M||w.numSpotShadows!==T)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=x,i.point.length=f,i.hemi.length=b,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=T,i.spotShadowMap.length=T,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotShadowMatrix.length=T,w.directionalLength=p,w.pointLength=f,w.spotLength=v,w.rectAreaLength=x,w.hemiLength=b,w.numDirectionalShadows=y,w.numPointShadows=M,w.numSpotShadows=T,i.version=xp++)}function l(u,d){let h=0,m=0,g=0,p=0,f=0,v=d.matrixWorldInverse;for(let x=0,b=u.length;x<b;x++){let y=u[x];if(y.isDirectionalLight){let M=i.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),h++}else if(y.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),g++}else if(y.isRectAreaLight){let M=i.rectArea[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),o.identity(),r.copy(y.matrixWorld),r.premultiply(v),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){let M=i.point[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(v),m++}else if(y.isHemisphereLight){let M=i.hemi[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(v),f++}}}return{setup:a,setupView:l,state:i}}function tl(c,t){let e=new yp(c,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(d){n.push(d)}function o(d){i.push(d)}function a(d){e.setup(n,d)}function l(d){e.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function _p(c,t){let e=new WeakMap;function n(s,r=0){let o;return e.has(s)===!1?(o=new tl(c,t),e.set(s,[o])):r>=e.get(s).length?(o=new tl(c,t),e.get(s).push(o)):o=e.get(s)[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var eo=class extends Vn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},no=class extends Vn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},wp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Mp(c,t,e){let n=new Rs,i=new Bt,s=new Bt,r=new $t,o=new eo({depthPacking:Wc}),a=new no,l={},u=e.maxTextureSize,d={0:Ne,1:Ui,2:xi},h=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:wp,fragmentShader:bp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new Be;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Ce(g,h),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=al,this.render=function(y,M,T){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||y.length===0)return;let I=c.getRenderTarget(),w=c.getActiveCubeFace(),C=c.getActiveMipmapLevel(),R=c.state;R.setBlending(bn),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let z=0,j=y.length;z<j;z++){let B=y[z],P=B.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",B,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);let D=P.getFrameExtents();if(i.multiply(D),s.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/D.x),i.x=s.x*D.x,P.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/D.y),i.y=s.y*D.y,P.mapSize.y=s.y)),P.map===null){let X=this.type!==Ni?{minFilter:de,magFilter:de}:{};P.map=new rn(i.x,i.y,X),P.map.texture.name=B.name+".shadowMap",P.camera.updateProjectionMatrix()}c.setRenderTarget(P.map),c.clear();let L=P.getViewportCount();for(let X=0;X<L;X++){let k=P.getViewport(X);r.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),R.viewport(r),P.updateMatrices(B,X),n=P.getFrustum(),b(M,T,P.camera,B,this.type)}P.isPointLightShadow!==!0&&this.type===Ni&&v(P,T),P.needsUpdate=!1}f.needsUpdate=!1,c.setRenderTarget(I,w,C)};function v(y,M){let T=t.update(p);h.defines.VSM_SAMPLES!==y.blurSamples&&(h.defines.VSM_SAMPLES=y.blurSamples,m.defines.VSM_SAMPLES=y.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new rn(i.x,i.y)),h.uniforms.shadow_pass.value=y.map.texture,h.uniforms.resolution.value=y.mapSize,h.uniforms.radius.value=y.radius,c.setRenderTarget(y.mapPass),c.clear(),c.renderBufferDirect(M,null,T,h,p,null),m.uniforms.shadow_pass.value=y.mapPass.texture,m.uniforms.resolution.value=y.mapSize,m.uniforms.radius.value=y.radius,c.setRenderTarget(y.map),c.clear(),c.renderBufferDirect(M,null,T,m,p,null)}function x(y,M,T,I,w,C){let R=null,z=T.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(z!==void 0?R=z:R=T.isPointLight===!0?a:o,c.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0){let j=R.uuid,B=M.uuid,P=l[j];P===void 0&&(P={},l[j]=P);let D=P[B];D===void 0&&(D=R.clone(),P[B]=D),R=D}return R.visible=M.visible,R.wireframe=M.wireframe,C===Ni?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:d[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaTest,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,T.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(T.matrixWorld),R.nearDistance=I,R.farDistance=w),R}function b(y,M,T,I,w){if(y.visible===!1)return;if(y.layers.test(M.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&w===Ni)&&(!y.frustumCulled||n.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,y.matrixWorld);let z=t.update(y),j=y.material;if(Array.isArray(j)){let B=z.groups;for(let P=0,D=B.length;P<D;P++){let L=B[P],X=j[L.materialIndex];if(X&&X.visible){let k=x(y,X,I,T.near,T.far,w);c.renderBufferDirect(T,null,z,k,y,L)}}}else if(j.visible){let B=x(y,j,I,T.near,T.far,w);c.renderBufferDirect(T,null,z,B,y,null)}}let R=y.children;for(let z=0,j=R.length;z<j;z++)b(R[z],M,T,I,w)}}function Sp(c,t,e){let n=e.isWebGL2;function i(){let F=!1,at=new $t,Y=null,rt=new $t(0,0,0,0);return{setMask:function(it){Y!==it&&!F&&(c.colorMask(it,it,it,it),Y=it)},setLocked:function(it){F=it},setClear:function(it,Pt,te,Yt,dn){dn===!0&&(it*=Yt,Pt*=Yt,te*=Yt),at.set(it,Pt,te,Yt),rt.equals(at)===!1&&(c.clearColor(it,Pt,te,Yt),rt.copy(at))},reset:function(){F=!1,Y=null,rt.set(-1,0,0,0)}}}function s(){let F=!1,at=null,Y=null,rt=null;return{setTest:function(it){it?It(2929):vt(2929)},setMask:function(it){at!==it&&!F&&(c.depthMask(it),at=it)},setFunc:function(it){if(Y!==it){if(it)switch(it){case uc:c.depthFunc(512);break;case dc:c.depthFunc(519);break;case fc:c.depthFunc(513);break;case Or:c.depthFunc(515);break;case pc:c.depthFunc(514);break;case mc:c.depthFunc(518);break;case gc:c.depthFunc(516);break;case xc:c.depthFunc(517);break;default:c.depthFunc(515)}else c.depthFunc(515);Y=it}},setLocked:function(it){F=it},setClear:function(it){rt!==it&&(c.clearDepth(it),rt=it)},reset:function(){F=!1,at=null,Y=null,rt=null}}}function r(){let F=!1,at=null,Y=null,rt=null,it=null,Pt=null,te=null,Yt=null,dn=null;return{setTest:function(Vt){F||(Vt?It(2960):vt(2960))},setMask:function(Vt){at!==Vt&&!F&&(c.stencilMask(Vt),at=Vt)},setFunc:function(Vt,je,Se){(Y!==Vt||rt!==je||it!==Se)&&(c.stencilFunc(Vt,je,Se),Y=Vt,rt=je,it=Se)},setOp:function(Vt,je,Se){(Pt!==Vt||te!==je||Yt!==Se)&&(c.stencilOp(Vt,je,Se),Pt=Vt,te=je,Yt=Se)},setLocked:function(Vt){F=Vt},setClear:function(Vt){dn!==Vt&&(c.clearStencil(Vt),dn=Vt)},reset:function(){F=!1,at=null,Y=null,rt=null,it=null,Pt=null,te=null,Yt=null,dn=null}}}let o=new i,a=new s,l=new r,u=new WeakMap,d=new WeakMap,h={},m={},g=new WeakMap,p=[],f=null,v=!1,x=null,b=null,y=null,M=null,T=null,I=null,w=null,C=!1,R=null,z=null,j=null,B=null,P=null,D=c.getParameter(35661),L=!1,X=0,k=c.getParameter(7938);k.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(k)[1]),L=X>=1):k.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),L=X>=2);let N=null,G={},K=c.getParameter(3088),W=c.getParameter(2978),tt=new $t().fromArray(K),ct=new $t().fromArray(W);function gt(F,at,Y){let rt=new Uint8Array(4),it=c.createTexture();c.bindTexture(F,it),c.texParameteri(F,10241,9728),c.texParameteri(F,10240,9728);for(let Pt=0;Pt<Y;Pt++)c.texImage2D(at+Pt,0,6408,1,1,0,6408,5121,rt);return it}let $={};$[3553]=gt(3553,3553,1),$[34067]=gt(34067,34069,6),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),It(2929),a.setFunc(Or),oe(!1),ke(Vo),It(2884),ne(bn);function It(F){h[F]!==!0&&(c.enable(F),h[F]=!0)}function vt(F){h[F]!==!1&&(c.disable(F),h[F]=!1)}function yt(F,at){return m[F]!==at?(c.bindFramebuffer(F,at),m[F]=at,n&&(F===36009&&(m[36160]=at),F===36160&&(m[36009]=at)),!0):!1}function ut(F,at){let Y=p,rt=!1;if(F)if(Y=g.get(at),Y===void 0&&(Y=[],g.set(at,Y)),F.isWebGLMultipleRenderTargets){let it=F.texture;if(Y.length!==it.length||Y[0]!==36064){for(let Pt=0,te=it.length;Pt<te;Pt++)Y[Pt]=36064+Pt;Y.length=it.length,rt=!0}}else Y[0]!==36064&&(Y[0]=36064,rt=!0);else Y[0]!==1029&&(Y[0]=1029,rt=!0);rt&&(e.isWebGL2?c.drawBuffers(Y):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function Ut(F){return f!==F?(c.useProgram(F),f=F,!0):!1}let At={[ui]:32774,[tc]:32778,[ec]:32779};if(n)At[qo]=32775,At[Xo]=32776;else{let F=t.get("EXT_blend_minmax");F!==null&&(At[qo]=F.MIN_EXT,At[Xo]=F.MAX_EXT)}let mt={[nc]:0,[ic]:1,[sc]:768,[ll]:770,[hc]:776,[lc]:774,[oc]:772,[rc]:769,[cl]:771,[cc]:775,[ac]:773};function ne(F,at,Y,rt,it,Pt,te,Yt){if(F===bn){v===!0&&(vt(3042),v=!1);return}if(v===!1&&(It(3042),v=!0),F!==Ql){if(F!==x||Yt!==C){if((b!==ui||T!==ui)&&(c.blendEquation(32774),b=ui,T=ui),Yt)switch(F){case pi:c.blendFuncSeparate(1,771,1,771);break;case Wo:c.blendFunc(1,1);break;case Go:c.blendFuncSeparate(0,769,0,1);break;case Ho:c.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case pi:c.blendFuncSeparate(770,771,1,771);break;case Wo:c.blendFunc(770,1);break;case Go:c.blendFuncSeparate(0,769,0,1);break;case Ho:c.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}y=null,M=null,I=null,w=null,x=F,C=Yt}return}it=it||at,Pt=Pt||Y,te=te||rt,(at!==b||it!==T)&&(c.blendEquationSeparate(At[at],At[it]),b=at,T=it),(Y!==y||rt!==M||Pt!==I||te!==w)&&(c.blendFuncSeparate(mt[Y],mt[rt],mt[Pt],mt[te]),y=Y,M=rt,I=Pt,w=te),x=F,C=null}function ge(F,at){F.side===xi?vt(2884):It(2884);let Y=F.side===Ne;at&&(Y=!Y),oe(Y),F.blending===pi&&F.transparent===!1?ne(bn):ne(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),o.setMask(F.colorWrite);let rt=F.stencilWrite;l.setTest(rt),rt&&(l.setMask(F.stencilWriteMask),l.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),l.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?It(32926):vt(32926)}function oe(F){R!==F&&(F?c.frontFace(2304):c.frontFace(2305),R=F)}function ke(F){F!==jl?(It(2884),F!==z&&(F===Vo?c.cullFace(1029):F===$l?c.cullFace(1028):c.cullFace(1032))):vt(2884),z=F}function ie(F){F!==j&&(L&&c.lineWidth(F),j=F)}function Ot(F,at,Y){F?(It(32823),(B!==at||P!==Y)&&(c.polygonOffset(at,Y),B=at,P=Y)):vt(32823)}function Ze(F){F?It(3089):vt(3089)}function Ve(F){F===void 0&&(F=33984+D-1),N!==F&&(c.activeTexture(F),N=F)}function E(F,at){N===null&&Ve();let Y=G[N];Y===void 0&&(Y={type:void 0,texture:void 0},G[N]=Y),(Y.type!==F||Y.texture!==at)&&(c.bindTexture(F,at||$[F]),Y.type=F,Y.texture=at)}function S(){let F=G[N];F!==void 0&&F.type!==void 0&&(c.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{c.compressedTexImage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{c.texSubImage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function et(){try{c.texSubImage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function st(){try{c.compressedTexSubImage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _t(){try{c.texStorage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function q(){try{c.texStorage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{c.texImage2D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ht(){try{c.texImage3D.apply(c,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(F){tt.equals(F)===!1&&(c.scissor(F.x,F.y,F.z,F.w),tt.copy(F))}function dt(F){ct.equals(F)===!1&&(c.viewport(F.x,F.y,F.z,F.w),ct.copy(F))}function bt(F,at){let Y=d.get(at);Y===void 0&&(Y=new WeakMap,d.set(at,Y));let rt=Y.get(F);rt===void 0&&(rt=c.getUniformBlockIndex(at,F.name),Y.set(F,rt))}function Rt(F,at){let rt=d.get(at).get(F);u.get(F)!==rt&&(c.uniformBlockBinding(at,rt,F.__bindingPointIndex),u.set(F,rt))}function Xt(){c.disable(3042),c.disable(2884),c.disable(2929),c.disable(32823),c.disable(3089),c.disable(2960),c.disable(32926),c.blendEquation(32774),c.blendFunc(1,0),c.blendFuncSeparate(1,0,1,0),c.colorMask(!0,!0,!0,!0),c.clearColor(0,0,0,0),c.depthMask(!0),c.depthFunc(513),c.clearDepth(1),c.stencilMask(4294967295),c.stencilFunc(519,0,4294967295),c.stencilOp(7680,7680,7680),c.clearStencil(0),c.cullFace(1029),c.frontFace(2305),c.polygonOffset(0,0),c.activeTexture(33984),c.bindFramebuffer(36160,null),n===!0&&(c.bindFramebuffer(36009,null),c.bindFramebuffer(36008,null)),c.useProgram(null),c.lineWidth(1),c.scissor(0,0,c.canvas.width,c.canvas.height),c.viewport(0,0,c.canvas.width,c.canvas.height),h={},N=null,G={},m={},g=new WeakMap,p=[],f=null,v=!1,x=null,b=null,y=null,M=null,T=null,I=null,w=null,C=!1,R=null,z=null,j=null,B=null,P=null,tt.set(0,0,c.canvas.width,c.canvas.height),ct.set(0,0,c.canvas.width,c.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:It,disable:vt,bindFramebuffer:yt,drawBuffers:ut,useProgram:Ut,setBlending:ne,setMaterial:ge,setFlipSided:oe,setCullFace:ke,setLineWidth:ie,setPolygonOffset:Ot,setScissorTest:Ze,activeTexture:Ve,bindTexture:E,unbindTexture:S,compressedTexImage2D:Z,texImage2D:pt,texImage3D:ht,updateUBOMapping:bt,uniformBlockBinding:Rt,texStorage2D:_t,texStorage3D:q,texSubImage2D:Q,texSubImage3D:et,compressedTexSubImage2D:st,scissor:ft,viewport:dt,reset:Xt}}function Ap(c,t,e,n,i,s,r){let o=i.isWebGL2,a=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,d=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap,p,f=new WeakMap,v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(E){}function x(E,S){return v?new OffscreenCanvas(E,S):bs("canvas")}function b(E,S,Z,Q){let et=1;if((E.width>Q||E.height>Q)&&(et=Q/Math.max(E.width,E.height)),et<1||S===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let st=S?Hr:Math.floor,_t=st(et*E.width),q=st(et*E.height);p===void 0&&(p=x(_t,q));let pt=Z?x(_t,q):p;return pt.width=_t,pt.height=q,pt.getContext("2d").drawImage(E,0,0,_t,q),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+_t+"x"+q+")."),pt}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function y(E){return ba(E.width)&&ba(E.height)}function M(E){return o?!1:E.wrapS!==Fe||E.wrapT!==Fe||E.minFilter!==de&&E.minFilter!==Ee}function T(E,S){return E.generateMipmaps&&S&&E.minFilter!==de&&E.minFilter!==Ee}function I(E){c.generateMipmap(E)}function w(E,S,Z,Q,et=!1){if(o===!1)return S;if(E!==null){if(c[E]!==void 0)return c[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let st=S;return S===6403&&(Z===5126&&(st=33326),Z===5131&&(st=33325),Z===5121&&(st=33321)),S===33319&&(Z===5126&&(st=33328),Z===5131&&(st=33327),Z===5121&&(st=33323)),S===6408&&(Z===5126&&(st=34836),Z===5131&&(st=34842),Z===5121&&(st=Q===Gt&&et===!1?35907:32856),Z===32819&&(st=32854),Z===32820&&(st=32855)),(st===33325||st===33326||st===33327||st===33328||st===34842||st===34836)&&t.get("EXT_color_buffer_float"),st}function C(E,S,Z){return T(E,Z)===!0||E.isFramebufferTexture&&E.minFilter!==de&&E.minFilter!==Ee?Math.log2(Math.max(S.width,S.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?S.mipmaps.length:1}function R(E){return E===de||E===Yo||E===Zo?9728:9729}function z(E){let S=E.target;S.removeEventListener("dispose",z),B(S),S.isVideoTexture&&g.delete(S)}function j(E){let S=E.target;S.removeEventListener("dispose",j),D(S)}function B(E){let S=n.get(E);if(S.__webglInit===void 0)return;let Z=E.source,Q=f.get(Z);if(Q){let et=Q[S.__cacheKey];et.usedTimes--,et.usedTimes===0&&P(E),Object.keys(Q).length===0&&f.delete(Z)}n.remove(E)}function P(E){let S=n.get(E);c.deleteTexture(S.__webglTexture);let Z=E.source,Q=f.get(Z);delete Q[S.__cacheKey],r.memory.textures--}function D(E){let S=E.texture,Z=n.get(E),Q=n.get(S);if(Q.__webglTexture!==void 0&&(c.deleteTexture(Q.__webglTexture),r.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let et=0;et<6;et++)c.deleteFramebuffer(Z.__webglFramebuffer[et]),Z.__webglDepthbuffer&&c.deleteRenderbuffer(Z.__webglDepthbuffer[et]);else{if(c.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&c.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&c.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let et=0;et<Z.__webglColorRenderbuffer.length;et++)Z.__webglColorRenderbuffer[et]&&c.deleteRenderbuffer(Z.__webglColorRenderbuffer[et]);Z.__webglDepthRenderbuffer&&c.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let et=0,st=S.length;et<st;et++){let _t=n.get(S[et]);_t.__webglTexture&&(c.deleteTexture(_t.__webglTexture),r.memory.textures--),n.remove(S[et])}n.remove(S),n.remove(E)}let L=0;function X(){L=0}function k(){let E=L;return E>=a&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+a),L+=1,E}function N(E){let S=[];return S.push(E.wrapS),S.push(E.wrapT),S.push(E.magFilter),S.push(E.minFilter),S.push(E.anisotropy),S.push(E.internalFormat),S.push(E.format),S.push(E.type),S.push(E.generateMipmaps),S.push(E.premultiplyAlpha),S.push(E.flipY),S.push(E.unpackAlignment),S.push(E.encoding),S.join()}function G(E,S){let Z=n.get(E);if(E.isVideoTexture&&Ze(E),E.isRenderTargetTexture===!1&&E.version>0&&Z.__version!==E.version){let Q=E.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{vt(Z,E,S);return}}e.activeTexture(33984+S),e.bindTexture(3553,Z.__webglTexture)}function K(E,S){let Z=n.get(E);if(E.version>0&&Z.__version!==E.version){vt(Z,E,S);return}e.activeTexture(33984+S),e.bindTexture(35866,Z.__webglTexture)}function W(E,S){let Z=n.get(E);if(E.version>0&&Z.__version!==E.version){vt(Z,E,S);return}e.activeTexture(33984+S),e.bindTexture(32879,Z.__webglTexture)}function tt(E,S){let Z=n.get(E);if(E.version>0&&Z.__version!==E.version){yt(Z,E,S);return}e.activeTexture(33984+S),e.bindTexture(34067,Z.__webglTexture)}let ct={[Vr]:10497,[Fe]:33071,[Wr]:33648},gt={[de]:9728,[Yo]:9984,[Zo]:9986,[Ee]:9729,[Ac]:9985,[Us]:9987};function $(E,S,Z){if(Z?(c.texParameteri(E,10242,ct[S.wrapS]),c.texParameteri(E,10243,ct[S.wrapT]),(E===32879||E===35866)&&c.texParameteri(E,32882,ct[S.wrapR]),c.texParameteri(E,10240,gt[S.magFilter]),c.texParameteri(E,10241,gt[S.minFilter])):(c.texParameteri(E,10242,33071),c.texParameteri(E,10243,33071),(E===32879||E===35866)&&c.texParameteri(E,32882,33071),(S.wrapS!==Fe||S.wrapT!==Fe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),c.texParameteri(E,10240,R(S.magFilter)),c.texParameteri(E,10241,R(S.minFilter)),S.minFilter!==de&&S.minFilter!==Ee&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){let Q=t.get("EXT_texture_filter_anisotropic");if(S.type===Dn&&t.has("OES_texture_float_linear")===!1||o===!1&&S.type===ki&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(c.texParameterf(E,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function It(E,S){let Z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,S.addEventListener("dispose",z));let Q=S.source,et=f.get(Q);et===void 0&&(et={},f.set(Q,et));let st=N(S);if(st!==E.__cacheKey){et[st]===void 0&&(et[st]={texture:c.createTexture(),usedTimes:0},r.memory.textures++,Z=!0),et[st].usedTimes++;let _t=et[E.__cacheKey];_t!==void 0&&(et[E.__cacheKey].usedTimes--,_t.usedTimes===0&&P(S)),E.__cacheKey=st,E.__webglTexture=et[st].texture}return Z}function vt(E,S,Z){let Q=3553;S.isDataArrayTexture&&(Q=35866),S.isData3DTexture&&(Q=32879);let et=It(E,S),st=S.source;if(e.activeTexture(33984+Z),e.bindTexture(Q,E.__webglTexture),st.version!==st.__currentVersion||et===!0){c.pixelStorei(37440,S.flipY),c.pixelStorei(37441,S.premultiplyAlpha),c.pixelStorei(3317,S.unpackAlignment),c.pixelStorei(37443,0);let _t=M(S)&&y(S.image)===!1,q=b(S.image,_t,!1,u);q=Ve(S,q);let pt=y(q)||o,ht=s.convert(S.format,S.encoding),ft=s.convert(S.type),dt=w(S.internalFormat,ht,ft,S.encoding,S.isVideoTexture);$(Q,S,pt);let bt,Rt=S.mipmaps,Xt=o&&S.isVideoTexture!==!0,F=st.__currentVersion===void 0||et===!0,at=C(S,q,pt);if(S.isDepthTexture)dt=6402,o?S.type===Dn?dt=36012:S.type===Rn?dt=33190:S.type===mi?dt=35056:dt=33189:S.type===Dn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===zn&&dt===6402&&S.type!==dl&&S.type!==Rn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=Rn,ft=s.convert(S.type)),S.format===_i&&dt===6402&&(dt=34041,S.type!==mi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=mi,ft=s.convert(S.type))),F&&(Xt?e.texStorage2D(3553,1,dt,q.width,q.height):e.texImage2D(3553,0,dt,q.width,q.height,0,ht,ft,null));else if(S.isDataTexture)if(Rt.length>0&&pt){Xt&&F&&e.texStorage2D(3553,at,dt,Rt[0].width,Rt[0].height);for(let Y=0,rt=Rt.length;Y<rt;Y++)bt=Rt[Y],Xt?e.texSubImage2D(3553,Y,0,0,bt.width,bt.height,ht,ft,bt.data):e.texImage2D(3553,Y,dt,bt.width,bt.height,0,ht,ft,bt.data);S.generateMipmaps=!1}else Xt?(F&&e.texStorage2D(3553,at,dt,q.width,q.height),e.texSubImage2D(3553,0,0,0,q.width,q.height,ht,ft,q.data)):e.texImage2D(3553,0,dt,q.width,q.height,0,ht,ft,q.data);else if(S.isCompressedTexture){Xt&&F&&e.texStorage2D(3553,at,dt,Rt[0].width,Rt[0].height);for(let Y=0,rt=Rt.length;Y<rt;Y++)bt=Rt[Y],S.format!==He?ht!==null?Xt?e.compressedTexSubImage2D(3553,Y,0,0,bt.width,bt.height,ht,bt.data):e.compressedTexImage2D(3553,Y,dt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?e.texSubImage2D(3553,Y,0,0,bt.width,bt.height,ht,ft,bt.data):e.texImage2D(3553,Y,dt,bt.width,bt.height,0,ht,ft,bt.data)}else if(S.isDataArrayTexture)Xt?(F&&e.texStorage3D(35866,at,dt,q.width,q.height,q.depth),e.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,ht,ft,q.data)):e.texImage3D(35866,0,dt,q.width,q.height,q.depth,0,ht,ft,q.data);else if(S.isData3DTexture)Xt?(F&&e.texStorage3D(32879,at,dt,q.width,q.height,q.depth),e.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,ht,ft,q.data)):e.texImage3D(32879,0,dt,q.width,q.height,q.depth,0,ht,ft,q.data);else if(S.isFramebufferTexture){if(F)if(Xt)e.texStorage2D(3553,at,dt,q.width,q.height);else{let Y=q.width,rt=q.height;for(let it=0;it<at;it++)e.texImage2D(3553,it,dt,Y,rt,0,ht,ft,null),Y>>=1,rt>>=1}}else if(Rt.length>0&&pt){Xt&&F&&e.texStorage2D(3553,at,dt,Rt[0].width,Rt[0].height);for(let Y=0,rt=Rt.length;Y<rt;Y++)bt=Rt[Y],Xt?e.texSubImage2D(3553,Y,0,0,ht,ft,bt):e.texImage2D(3553,Y,dt,ht,ft,bt);S.generateMipmaps=!1}else Xt?(F&&e.texStorage2D(3553,at,dt,q.width,q.height),e.texSubImage2D(3553,0,0,0,ht,ft,q)):e.texImage2D(3553,0,dt,ht,ft,q);T(S,pt)&&I(Q),st.__currentVersion=st.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function yt(E,S,Z){if(S.image.length!==6)return;let Q=It(E,S),et=S.source;if(e.activeTexture(33984+Z),e.bindTexture(34067,E.__webglTexture),et.version!==et.__currentVersion||Q===!0){c.pixelStorei(37440,S.flipY),c.pixelStorei(37441,S.premultiplyAlpha),c.pixelStorei(3317,S.unpackAlignment),c.pixelStorei(37443,0);let st=S.isCompressedTexture||S.image[0].isCompressedTexture,_t=S.image[0]&&S.image[0].isDataTexture,q=[];for(let Y=0;Y<6;Y++)!st&&!_t?q[Y]=b(S.image[Y],!1,!0,l):q[Y]=_t?S.image[Y].image:S.image[Y],q[Y]=Ve(S,q[Y]);let pt=q[0],ht=y(pt)||o,ft=s.convert(S.format,S.encoding),dt=s.convert(S.type),bt=w(S.internalFormat,ft,dt,S.encoding),Rt=o&&S.isVideoTexture!==!0,Xt=et.__currentVersion===void 0||Q===!0,F=C(S,pt,ht);$(34067,S,ht);let at;if(st){Rt&&Xt&&e.texStorage2D(34067,F,bt,pt.width,pt.height);for(let Y=0;Y<6;Y++){at=q[Y].mipmaps;for(let rt=0;rt<at.length;rt++){let it=at[rt];S.format!==He?ft!==null?Rt?e.compressedTexSubImage2D(34069+Y,rt,0,0,it.width,it.height,ft,it.data):e.compressedTexImage2D(34069+Y,rt,bt,it.width,it.height,0,it.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?e.texSubImage2D(34069+Y,rt,0,0,it.width,it.height,ft,dt,it.data):e.texImage2D(34069+Y,rt,bt,it.width,it.height,0,ft,dt,it.data)}}}else{at=S.mipmaps,Rt&&Xt&&(at.length>0&&F++,e.texStorage2D(34067,F,bt,q[0].width,q[0].height));for(let Y=0;Y<6;Y++)if(_t){Rt?e.texSubImage2D(34069+Y,0,0,0,q[Y].width,q[Y].height,ft,dt,q[Y].data):e.texImage2D(34069+Y,0,bt,q[Y].width,q[Y].height,0,ft,dt,q[Y].data);for(let rt=0;rt<at.length;rt++){let Pt=at[rt].image[Y].image;Rt?e.texSubImage2D(34069+Y,rt+1,0,0,Pt.width,Pt.height,ft,dt,Pt.data):e.texImage2D(34069+Y,rt+1,bt,Pt.width,Pt.height,0,ft,dt,Pt.data)}}else{Rt?e.texSubImage2D(34069+Y,0,0,0,ft,dt,q[Y]):e.texImage2D(34069+Y,0,bt,ft,dt,q[Y]);for(let rt=0;rt<at.length;rt++){let it=at[rt];Rt?e.texSubImage2D(34069+Y,rt+1,0,0,ft,dt,it.image[Y]):e.texImage2D(34069+Y,rt+1,bt,ft,dt,it.image[Y])}}}T(S,ht)&&I(34067),et.__currentVersion=et.version,S.onUpdate&&S.onUpdate(S)}E.__version=S.version}function ut(E,S,Z,Q,et){let st=s.convert(Z.format,Z.encoding),_t=s.convert(Z.type),q=w(Z.internalFormat,st,_t,Z.encoding);n.get(S).__hasExternalTextures||(et===32879||et===35866?e.texImage3D(et,0,q,S.width,S.height,S.depth,0,st,_t,null):e.texImage2D(et,0,q,S.width,S.height,0,st,_t,null)),e.bindFramebuffer(36160,E),Ot(S)?h.framebufferTexture2DMultisampleEXT(36160,Q,et,n.get(Z).__webglTexture,0,ie(S)):c.framebufferTexture2D(36160,Q,et,n.get(Z).__webglTexture,0),e.bindFramebuffer(36160,null)}function Ut(E,S,Z){if(c.bindRenderbuffer(36161,E),S.depthBuffer&&!S.stencilBuffer){let Q=33189;if(Z||Ot(S)){let et=S.depthTexture;et&&et.isDepthTexture&&(et.type===Dn?Q=36012:et.type===Rn&&(Q=33190));let st=ie(S);Ot(S)?h.renderbufferStorageMultisampleEXT(36161,st,Q,S.width,S.height):c.renderbufferStorageMultisample(36161,st,Q,S.width,S.height)}else c.renderbufferStorage(36161,Q,S.width,S.height);c.framebufferRenderbuffer(36160,36096,36161,E)}else if(S.depthBuffer&&S.stencilBuffer){let Q=ie(S);Z&&Ot(S)===!1?c.renderbufferStorageMultisample(36161,Q,35056,S.width,S.height):Ot(S)?h.renderbufferStorageMultisampleEXT(36161,Q,35056,S.width,S.height):c.renderbufferStorage(36161,34041,S.width,S.height),c.framebufferRenderbuffer(36160,33306,36161,E)}else{let Q=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let et=0;et<Q.length;et++){let st=Q[et],_t=s.convert(st.format,st.encoding),q=s.convert(st.type),pt=w(st.internalFormat,_t,q,st.encoding),ht=ie(S);Z&&Ot(S)===!1?c.renderbufferStorageMultisample(36161,ht,pt,S.width,S.height):Ot(S)?h.renderbufferStorageMultisampleEXT(36161,ht,pt,S.width,S.height):c.renderbufferStorage(36161,pt,S.width,S.height)}}c.bindRenderbuffer(36161,null)}function At(E,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,E),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);let Q=n.get(S.depthTexture).__webglTexture,et=ie(S);if(S.depthTexture.format===zn)Ot(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Q,0,et):c.framebufferTexture2D(36160,36096,3553,Q,0);else if(S.depthTexture.format===_i)Ot(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Q,0,et):c.framebufferTexture2D(36160,33306,3553,Q,0);else throw new Error("Unknown depthTexture format")}function mt(E){let S=n.get(E),Z=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!S.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");At(S.__webglFramebuffer,E)}else if(Z){S.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)e.bindFramebuffer(36160,S.__webglFramebuffer[Q]),S.__webglDepthbuffer[Q]=c.createRenderbuffer(),Ut(S.__webglDepthbuffer[Q],E,!1)}else e.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=c.createRenderbuffer(),Ut(S.__webglDepthbuffer,E,!1);e.bindFramebuffer(36160,null)}function ne(E,S,Z){let Q=n.get(E);S!==void 0&&ut(Q.__webglFramebuffer,E,E.texture,36064,3553),Z!==void 0&&mt(E)}function ge(E){let S=E.texture,Z=n.get(E),Q=n.get(S);E.addEventListener("dispose",j),E.isWebGLMultipleRenderTargets!==!0&&(Q.__webglTexture===void 0&&(Q.__webglTexture=c.createTexture()),Q.__version=S.version,r.memory.textures++);let et=E.isWebGLCubeRenderTarget===!0,st=E.isWebGLMultipleRenderTargets===!0,_t=y(E)||o;if(et){Z.__webglFramebuffer=[];for(let q=0;q<6;q++)Z.__webglFramebuffer[q]=c.createFramebuffer()}else{if(Z.__webglFramebuffer=c.createFramebuffer(),st)if(i.drawBuffers){let q=E.texture;for(let pt=0,ht=q.length;pt<ht;pt++){let ft=n.get(q[pt]);ft.__webglTexture===void 0&&(ft.__webglTexture=c.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&E.samples>0&&Ot(E)===!1){let q=st?S:[S];Z.__webglMultisampledFramebuffer=c.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let pt=0;pt<q.length;pt++){let ht=q[pt];Z.__webglColorRenderbuffer[pt]=c.createRenderbuffer(),c.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[pt]);let ft=s.convert(ht.format,ht.encoding),dt=s.convert(ht.type),bt=w(ht.internalFormat,ft,dt,ht.encoding),Rt=ie(E);c.renderbufferStorageMultisample(36161,Rt,bt,E.width,E.height),c.framebufferRenderbuffer(36160,36064+pt,36161,Z.__webglColorRenderbuffer[pt])}c.bindRenderbuffer(36161,null),E.depthBuffer&&(Z.__webglDepthRenderbuffer=c.createRenderbuffer(),Ut(Z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(36160,null)}}if(et){e.bindTexture(34067,Q.__webglTexture),$(34067,S,_t);for(let q=0;q<6;q++)ut(Z.__webglFramebuffer[q],E,S,36064,34069+q);T(S,_t)&&I(34067),e.unbindTexture()}else if(st){let q=E.texture;for(let pt=0,ht=q.length;pt<ht;pt++){let ft=q[pt],dt=n.get(ft);e.bindTexture(3553,dt.__webglTexture),$(3553,ft,_t),ut(Z.__webglFramebuffer,E,ft,36064+pt,3553),T(ft,_t)&&I(3553)}e.unbindTexture()}else{let q=3553;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(o?q=E.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(q,Q.__webglTexture),$(q,S,_t),ut(Z.__webglFramebuffer,E,S,36064,q),T(S,_t)&&I(q),e.unbindTexture()}E.depthBuffer&&mt(E)}function oe(E){let S=y(E)||o,Z=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0,et=Z.length;Q<et;Q++){let st=Z[Q];if(T(st,S)){let _t=E.isWebGLCubeRenderTarget?34067:3553,q=n.get(st).__webglTexture;e.bindTexture(_t,q),I(_t),e.unbindTexture()}}}function ke(E){if(o&&E.samples>0&&Ot(E)===!1){let S=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],Z=E.width,Q=E.height,et=16384,st=[],_t=E.stencilBuffer?33306:36096,q=n.get(E),pt=E.isWebGLMultipleRenderTargets===!0;if(pt)for(let ht=0;ht<S.length;ht++)e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+ht,36161,null),e.bindFramebuffer(36160,q.__webglFramebuffer),c.framebufferTexture2D(36009,36064+ht,3553,null,0);e.bindFramebuffer(36008,q.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,q.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){st.push(36064+ht),E.depthBuffer&&st.push(_t);let ft=q.__ignoreDepthValues!==void 0?q.__ignoreDepthValues:!1;if(ft===!1&&(E.depthBuffer&&(et|=256),E.stencilBuffer&&(et|=1024)),pt&&c.framebufferRenderbuffer(36008,36064,36161,q.__webglColorRenderbuffer[ht]),ft===!0&&(c.invalidateFramebuffer(36008,[_t]),c.invalidateFramebuffer(36009,[_t])),pt){let dt=n.get(S[ht]).__webglTexture;c.framebufferTexture2D(36009,36064,3553,dt,0)}c.blitFramebuffer(0,0,Z,Q,0,0,Z,Q,et,9728),m&&c.invalidateFramebuffer(36008,st)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),pt)for(let ht=0;ht<S.length;ht++){e.bindFramebuffer(36160,q.__webglMultisampledFramebuffer),c.framebufferRenderbuffer(36160,36064+ht,36161,q.__webglColorRenderbuffer[ht]);let ft=n.get(S[ht]).__webglTexture;e.bindFramebuffer(36160,q.__webglFramebuffer),c.framebufferTexture2D(36009,36064+ht,3553,ft,0)}e.bindFramebuffer(36009,q.__webglMultisampledFramebuffer)}}function ie(E){return Math.min(d,E.samples)}function Ot(E){let S=n.get(E);return o&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ze(E){let S=r.render.frame;g.get(E)!==S&&(g.set(E,S),E.update())}function Ve(E,S){let Z=E.encoding,Q=E.format,et=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Gr||Z!==On&&(Z===Gt?o===!1?t.has("EXT_sRGB")===!0&&Q===He?(E.format=Gr,E.minFilter=Ee,E.generateMipmaps=!1):S=Ms.sRGBToLinear(S):(Q!==He||et!==Bn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),S}this.allocateTextureUnit=k,this.resetTextureUnits=X,this.setTexture2D=G,this.setTexture2DArray=K,this.setTexture3D=W,this.setTextureCube=tt,this.rebindTextures=ne,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Ot}function Tp(c,t,e){let n=e.isWebGL2;function i(s,r=null){let o;if(s===Bn)return 5121;if(s===Pc)return 32819;if(s===Lc)return 32820;if(s===Tc)return 5120;if(s===Ec)return 5122;if(s===dl)return 5123;if(s===Cc)return 5124;if(s===Rn)return 5125;if(s===Dn)return 5126;if(s===ki)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Ic)return 6406;if(s===He)return 6408;if(s===Dc)return 6409;if(s===Fc)return 6410;if(s===zn)return 6402;if(s===_i)return 34041;if(s===zc)return 6403;if(s===Rc)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===Gr)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Nc)return 36244;if(s===Bc)return 33319;if(s===Oc)return 33320;if(s===Uc)return 36249;if(s===sr||s===rr||s===or||s===ar)if(r===Gt)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===sr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===rr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===or)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===sr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===rr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===or)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ar)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jo||s===$o||s===Jo||s===Ko)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===jo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$o)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ko)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kc)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Qo||s===ta)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Qo)return r===Gt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===ta)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ea||s===na||s===ia||s===sa||s===ra||s===oa||s===aa||s===la||s===ca||s===ha||s===ua||s===da||s===fa||s===pa)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ea)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===na)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ia)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sa)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ra)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===oa)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===aa)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===la)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ca)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ha)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ua)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===da)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fa)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pa)return r===Gt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ma)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===ma)return r===Gt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===mi?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):c[s]!==void 0?c[s]:null}return{convert:i}}var io=class extends le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},fi=class extends pe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ep={type:"move"},Oi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null,o=this._targetRay,a=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(let p of t.hand.values()){let f=e.getJointPose(p,n);if(l.joints[p.jointName]===void 0){let x=new fi;x.matrixAutoUpdate=!1,x.visible=!1,l.joints[p.jointName]=x,l.add(x)}let v=l.joints[p.jointName];f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=f.radius),v.visible=f!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ep)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),this}},so=class extends be{constructor(t,e,n,i,s,r,o,a,l,u){if(u=u!==void 0?u:zn,u!==zn&&u!==_i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===zn&&(n=Rn),n===void 0&&u===_i&&(n=mi),super(null,i,s,r,o,a,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:de,this.minFilter=a!==void 0?a:de,this.flipY=!1,this.generateMipmaps=!1}},ro=class extends Mn{constructor(t,e){super();let n=this,i=null,s=1,r=null,o="local-floor",a=null,l=null,u=null,d=null,h=null,m=null,g=e.getContextAttributes(),p=null,f=null,v=[],x=[],b=new le;b.layers.enable(1),b.viewport=new $t;let y=new le;y.layers.enable(2),y.viewport=new $t;let M=[b,y],T=new io;T.layers.enable(1),T.layers.enable(2);let I=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(N){let G=v[N];return G===void 0&&(G=new Oi,v[N]=G),G.getTargetRaySpace()},this.getControllerGrip=function(N){let G=v[N];return G===void 0&&(G=new Oi,v[N]=G),G.getGripSpace()},this.getHand=function(N){let G=v[N];return G===void 0&&(G=new Oi,v[N]=G),G.getHandSpace()};function C(N){let G=x.indexOf(N.inputSource);if(G===-1)return;let K=v[G];K!==void 0&&K.dispatchEvent({type:N.type,data:N.inputSource})}function R(){i.removeEventListener("select",C),i.removeEventListener("selectstart",C),i.removeEventListener("selectend",C),i.removeEventListener("squeeze",C),i.removeEventListener("squeezestart",C),i.removeEventListener("squeezeend",C),i.removeEventListener("end",R),i.removeEventListener("inputsourceschange",z);for(let N=0;N<v.length;N++){let G=x[N];G!==null&&(x[N]=null,v[N].disconnect(G))}I=null,w=null,t.setRenderTarget(p),h=null,d=null,u=null,i=null,f=null,k.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(N){s=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(N){o=N,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return a||r},this.setReferenceSpace=function(N){a=N},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(N){if(i=N,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",C),i.addEventListener("selectstart",C),i.addEventListener("selectend",C),i.addEventListener("squeeze",C),i.addEventListener("squeezestart",C),i.addEventListener("squeezeend",C),i.addEventListener("end",R),i.addEventListener("inputsourceschange",z),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let G={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,G),i.updateRenderState({baseLayer:h}),f=new rn(h.framebufferWidth,h.framebufferHeight,{format:He,type:Bn,encoding:t.outputEncoding})}else{let G=null,K=null,W=null;g.depth&&(W=g.stencil?35056:33190,G=g.stencil?_i:zn,K=g.stencil?mi:Rn);let tt={colorFormat:32856,depthFormat:W,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(tt),i.updateRenderState({layers:[d]}),f=new rn(d.textureWidth,d.textureHeight,{format:He,type:Bn,depthTexture:new so(d.textureWidth,d.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,G),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});let ct=t.properties.get(f);ct.__ignoreDepthValues=d.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(1),a=null,r=await i.requestReferenceSpace(o),k.setContext(i),k.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(N){for(let G=0;G<N.removed.length;G++){let K=N.removed[G],W=x.indexOf(K);W>=0&&(x[W]=null,v[W].dispatchEvent({type:"disconnected",data:K}))}for(let G=0;G<N.added.length;G++){let K=N.added[G],W=x.indexOf(K);if(W===-1){for(let ct=0;ct<v.length;ct++)if(ct>=x.length){x.push(K),W=ct;break}else if(x[ct]===null){x[ct]=K,W=ct;break}if(W===-1)break}let tt=v[W];tt&&tt.dispatchEvent({type:"connected",data:K})}}let j=new O,B=new O;function P(N,G,K){j.setFromMatrixPosition(G.matrixWorld),B.setFromMatrixPosition(K.matrixWorld);let W=j.distanceTo(B),tt=G.projectionMatrix.elements,ct=K.projectionMatrix.elements,gt=tt[14]/(tt[10]-1),$=tt[14]/(tt[10]+1),It=(tt[9]+1)/tt[5],vt=(tt[9]-1)/tt[5],yt=(tt[8]-1)/tt[0],ut=(ct[8]+1)/ct[0],Ut=gt*yt,At=gt*ut,mt=W/(-yt+ut),ne=mt*-yt;G.matrixWorld.decompose(N.position,N.quaternion,N.scale),N.translateX(ne),N.translateZ(mt),N.matrixWorld.compose(N.position,N.quaternion,N.scale),N.matrixWorldInverse.copy(N.matrixWorld).invert();let ge=gt+mt,oe=$+mt,ke=Ut-ne,ie=At+(W-ne),Ot=It*$/oe*ge,Ze=vt*$/oe*ge;N.projectionMatrix.makePerspective(ke,ie,Ot,Ze,ge,oe)}function D(N,G){G===null?N.matrixWorld.copy(N.matrix):N.matrixWorld.multiplyMatrices(G.matrixWorld,N.matrix),N.matrixWorldInverse.copy(N.matrixWorld).invert()}this.updateCamera=function(N){if(i===null)return;T.near=y.near=b.near=N.near,T.far=y.far=b.far=N.far,(I!==T.near||w!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),I=T.near,w=T.far);let G=N.parent,K=T.cameras;D(T,G);for(let tt=0;tt<K.length;tt++)D(K[tt],G);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),N.position.copy(T.position),N.quaternion.copy(T.quaternion),N.scale.copy(T.scale),N.matrix.copy(T.matrix),N.matrixWorld.copy(T.matrixWorld);let W=N.children;for(let tt=0,ct=W.length;tt<ct;tt++)W[tt].updateMatrixWorld(!0);K.length===2?P(T,b,y):T.projectionMatrix.copy(b.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(d!==null)return d.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(N){d!==null&&(d.fixedFoveation=N),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=N)};let L=null;function X(N,G){if(l=G.getViewerPose(a||r),m=G,l!==null){let K=l.views;h!==null&&(t.setRenderTargetFramebuffer(f,h.framebuffer),t.setRenderTarget(f));let W=!1;K.length!==T.cameras.length&&(T.cameras.length=0,W=!0);for(let tt=0;tt<K.length;tt++){let ct=K[tt],gt=null;if(h!==null)gt=h.getViewport(ct);else{let It=u.getViewSubImage(d,ct);gt=It.viewport,tt===0&&(t.setRenderTargetTextures(f,It.colorTexture,d.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(f))}let $=M[tt];$===void 0&&($=new le,$.layers.enable(tt),$.viewport=new $t,M[tt]=$),$.matrix.fromArray(ct.transform.matrix),$.projectionMatrix.fromArray(ct.projectionMatrix),$.viewport.set(gt.x,gt.y,gt.width,gt.height),tt===0&&T.matrix.copy($.matrix),W===!0&&T.cameras.push($)}}for(let K=0;K<v.length;K++){let W=x[K],tt=v[K];W!==null&&tt!==void 0&&tt.update(W,G,a||r)}L&&L(N,G),m=null}let k=new ml;k.setAnimationLoop(X),this.setAnimationLoop=function(N){L=N},this.dispose=function(){}}};function Cp(c,t){function e(p,f){p.fogColor.value.copy(f.color),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function n(p,f,v,x,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?i(p,f):f.isMeshToonMaterial?(i(p,f),u(p,f)):f.isMeshPhongMaterial?(i(p,f),l(p,f)):f.isMeshStandardMaterial?(i(p,f),d(p,f),f.isMeshPhysicalMaterial&&h(p,f,b)):f.isMeshMatcapMaterial?(i(p,f),m(p,f)):f.isMeshDepthMaterial?i(p,f):f.isMeshDistanceMaterial?(i(p,f),g(p,f)):f.isMeshNormalMaterial?i(p,f):f.isLineBasicMaterial?(s(p,f),f.isLineDashedMaterial&&r(p,f)):f.isPointsMaterial?o(p,f,v,x):f.isSpriteMaterial?a(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function i(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.bumpMap&&(p.bumpMap.value=f.bumpMap,p.bumpScale.value=f.bumpScale,f.side===Ne&&(p.bumpScale.value*=-1)),f.displacementMap&&(p.displacementMap.value=f.displacementMap,p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap),f.normalMap&&(p.normalMap.value=f.normalMap,p.normalScale.value.copy(f.normalScale),f.side===Ne&&p.normalScale.value.negate()),f.specularMap&&(p.specularMap.value=f.specularMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v=t.get(f).envMap;if(v&&(p.envMap.value=v,p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let y=c.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*y}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity);let x;f.map?x=f.map:f.specularMap?x=f.specularMap:f.displacementMap?x=f.displacementMap:f.normalMap?x=f.normalMap:f.bumpMap?x=f.bumpMap:f.roughnessMap?x=f.roughnessMap:f.metalnessMap?x=f.metalnessMap:f.alphaMap?x=f.alphaMap:f.emissiveMap?x=f.emissiveMap:f.clearcoatMap?x=f.clearcoatMap:f.clearcoatNormalMap?x=f.clearcoatNormalMap:f.clearcoatRoughnessMap?x=f.clearcoatRoughnessMap:f.iridescenceMap?x=f.iridescenceMap:f.iridescenceThicknessMap?x=f.iridescenceThicknessMap:f.specularIntensityMap?x=f.specularIntensityMap:f.specularColorMap?x=f.specularColorMap:f.transmissionMap?x=f.transmissionMap:f.thicknessMap?x=f.thicknessMap:f.sheenColorMap?x=f.sheenColorMap:f.sheenRoughnessMap&&(x=f.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),p.uvTransform.value.copy(x.matrix));let b;f.aoMap?b=f.aoMap:f.lightMap&&(b=f.lightMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uv2Transform.value.copy(b.matrix))}function s(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity}function r(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function o(p,f,v,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*v,p.scale.value=x*.5,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let b;f.map?b=f.map:f.alphaMap&&(b=f.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),p.uvTransform.value.copy(b.matrix))}function a(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map),f.alphaMap&&(p.alphaMap.value=f.alphaMap),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let v;f.map?v=f.map:f.alphaMap&&(v=f.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function u(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.roughness.value=f.roughness,p.metalness.value=f.metalness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap),f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap),t.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function h(p,f,v){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap)),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap),f.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),p.clearcoatNormalMap.value=f.clearcoatNormalMap,f.side===Ne&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap)),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap)}function m(p,f){f.matcap&&(p.matcap.value=f.matcap)}function g(p,f){p.referencePosition.value.copy(f.referencePosition),p.nearDistance.value=f.nearDistance,p.farDistance.value=f.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Pp(c,t,e,n){let i={},s={},r=[],o=e.isWebGL2?c.getParameter(35375):0;function a(x,b){let y=b.program;n.uniformBlockBinding(x,y)}function l(x,b){let y=i[x.id];y===void 0&&(g(x),y=u(x),i[x.id]=y,x.addEventListener("dispose",f));let M=b.program;n.updateUBOMapping(x,M);let T=t.render.frame;s[x.id]!==T&&(h(x),s[x.id]=T)}function u(x){let b=d();x.__bindingPointIndex=b;let y=c.createBuffer(),M=x.__size,T=x.usage;return c.bindBuffer(35345,y),c.bufferData(35345,M,T),c.bindBuffer(35345,null),c.bindBufferBase(35345,b,y),y}function d(){for(let x=0;x<o;x++)if(r.indexOf(x)===-1)return r.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let b=i[x.id],y=x.uniforms,M=x.__cache;c.bindBuffer(35345,b);for(let T=0,I=y.length;T<I;T++){let w=y[T];if(m(w,T,M)===!0){let C=w.value,R=w.__offset;typeof C=="number"?(w.__data[0]=C,c.bufferSubData(35345,R,w.__data)):(w.value.isMatrix3?(w.__data[0]=w.value.elements[0],w.__data[1]=w.value.elements[1],w.__data[2]=w.value.elements[2],w.__data[3]=w.value.elements[0],w.__data[4]=w.value.elements[3],w.__data[5]=w.value.elements[4],w.__data[6]=w.value.elements[5],w.__data[7]=w.value.elements[0],w.__data[8]=w.value.elements[6],w.__data[9]=w.value.elements[7],w.__data[10]=w.value.elements[8],w.__data[11]=w.value.elements[0]):C.toArray(w.__data),c.bufferSubData(35345,R,w.__data))}}c.bindBuffer(35345,null)}function m(x,b,y){let M=x.value;if(y[b]===void 0)return typeof M=="number"?y[b]=M:y[b]=M.clone(),!0;if(typeof M=="number"){if(y[b]!==M)return y[b]=M,!0}else{let T=y[b];if(T.equals(M)===!1)return T.copy(M),!0}return!1}function g(x){let b=x.uniforms,y=0,M=16,T=0;for(let I=0,w=b.length;I<w;I++){let C=b[I],R=p(C);if(C.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=y,I>0){T=y%M;let z=M-T;T!==0&&z-R.boundary<0&&(y+=M-T,C.__offset=y)}y+=R.storage}return T=y%M,T>0&&(y+=M-T),x.__size=y,x.__cache={},this}function p(x){let b=x.value,y={boundary:0,storage:0};return typeof b=="number"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function f(x){let b=x.target;b.removeEventListener("dispose",f);let y=r.indexOf(b.__bindingPointIndex);r.splice(y,1),c.deleteBuffer(i[b.id]),delete i[b.id],delete s[b.id]}function v(){for(let x in i)c.deleteBuffer(i[x]);r=[],i={},s={}}return{bind:a,update:l,dispose:v}}function Lp(){let c=bs("canvas");return c.style.display="block",c}function Ip(c={}){this.isWebGLRenderer=!0;let t=c.canvas!==void 0?c.canvas:Lp(),e=c.context!==void 0?c.context:null,n=c.depth!==void 0?c.depth:!0,i=c.stencil!==void 0?c.stencil:!0,s=c.antialias!==void 0?c.antialias:!1,r=c.premultipliedAlpha!==void 0?c.premultipliedAlpha:!0,o=c.preserveDrawingBuffer!==void 0?c.preserveDrawingBuffer:!1,a=c.powerPreference!==void 0?c.powerPreference:"default",l=c.failIfMajorPerformanceCaveat!==void 0?c.failIfMajorPerformanceCaveat:!1,u;e!==null?u=e.getContextAttributes().alpha:u=c.alpha!==void 0?c.alpha:!1;let d=null,h=null,m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=On,this.physicallyCorrectLights=!1,this.toneMapping=sn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});let p=this,f=!1,v=0,x=0,b=null,y=-1,M=null,T=new $t,I=new $t,w=null,C=t.width,R=t.height,z=1,j=null,B=null,P=new $t(0,0,C,R),D=new $t(0,0,C,R),L=!1,X=new Rs,k=!1,N=!1,G=null,K=new Jt,W=new Bt,tt=new O,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function gt(){return b===null?z:1}let $=e;function It(A,U){for(let H=0;H<A.length;H++){let V=A[H],J=t.getContext(V,U);if(J!==null)return J}return null}try{let A={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:o,powerPreference:a,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xo}`),t.addEventListener("webglcontextlost",bt,!1),t.addEventListener("webglcontextrestored",Rt,!1),t.addEventListener("webglcontextcreationerror",Xt,!1),$===null){let U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),$=It(U,A),$===null)throw It(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}$.getShaderPrecisionFormat===void 0&&($.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let vt,yt,ut,Ut,At,mt,ne,ge,oe,ke,ie,Ot,Ze,Ve,E,S,Z,Q,et,st,_t,q,pt,ht;function ft(){vt=new jd($),yt=new Gd($,vt,c),vt.init(yt),q=new Tp($,vt,yt),ut=new Sp($,vt,yt),Ut=new Kd,At=new dp,mt=new Ap($,vt,ut,At,yt,q,Ut),ne=new qd(p),ge=new Zd(p),oe=new hh($,yt),pt=new Vd($,vt,oe,yt),ke=new $d($,oe,Ut,pt),ie=new nf($,ke,oe,Ut),et=new ef($,yt,mt),S=new Hd(At),Ot=new up(p,ne,ge,vt,yt,pt,S),Ze=new Cp(p,At),Ve=new pp,E=new _p(vt,yt),Q=new kd(p,ne,ut,ie,u,r),Z=new Mp(p,ie,yt),ht=new Pp($,Ut,yt,ut),st=new Wd($,vt,Ut,yt),_t=new Jd($,vt,Ut,yt),Ut.programs=Ot.programs,p.capabilities=yt,p.extensions=vt,p.properties=At,p.renderLists=Ve,p.shadowMap=Z,p.state=ut,p.info=Ut}ft();let dt=new ro(p,$);this.xr=dt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let A=vt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=vt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(C,R,!1))},this.getSize=function(A){return A.set(C,R)},this.setSize=function(A,U,H){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}C=A,R=U,t.width=Math.floor(A*z),t.height=Math.floor(U*z),H!==!1&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(C*z,R*z).floor()},this.setDrawingBufferSize=function(A,U,H){C=A,R=U,z=H,t.width=Math.floor(A*H),t.height=Math.floor(U*H),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(T)},this.getViewport=function(A){return A.copy(P)},this.setViewport=function(A,U,H,V){A.isVector4?P.set(A.x,A.y,A.z,A.w):P.set(A,U,H,V),ut.viewport(T.copy(P).multiplyScalar(z).floor())},this.getScissor=function(A){return A.copy(D)},this.setScissor=function(A,U,H,V){A.isVector4?D.set(A.x,A.y,A.z,A.w):D.set(A,U,H,V),ut.scissor(I.copy(D).multiplyScalar(z).floor())},this.getScissorTest=function(){return L},this.setScissorTest=function(A){ut.setScissorTest(L=A)},this.setOpaqueSort=function(A){j=A},this.setTransparentSort=function(A){B=A},this.getClearColor=function(A){return A.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(A=!0,U=!0,H=!0){let V=0;A&&(V|=16384),U&&(V|=256),H&&(V|=1024),$.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",bt,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",Xt,!1),Ve.dispose(),E.dispose(),At.dispose(),ne.dispose(),ge.dispose(),ie.dispose(),pt.dispose(),ht.dispose(),Ot.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",Pt),dt.removeEventListener("sessionend",te),G&&(G.dispose(),G=null),Yt.stop()};function bt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),f=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),f=!1;let A=Ut.autoReset,U=Z.enabled,H=Z.autoUpdate,V=Z.needsUpdate,J=Z.type;ft(),Ut.autoReset=A,Z.enabled=U,Z.autoUpdate=H,Z.needsUpdate=V,Z.type=J}function Xt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function F(A){let U=A.target;U.removeEventListener("dispose",F),at(U)}function at(A){Y(A),At.remove(A)}function Y(A){let U=At.get(A).programs;U!==void 0&&(U.forEach(function(H){Ot.releaseProgram(H)}),A.isShaderMaterial&&Ot.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,H,V,J,xt){U===null&&(U=ct);let wt=J.isMesh&&J.matrixWorld.determinant()<0,St=ql(A,U,H,V,J);ut.setMaterial(V,wt);let Mt=H.index,Nt=H.attributes.position;if(Mt===null){if(Nt===void 0||Nt.count===0)return}else if(Mt.count===0)return;let Et=1;V.wireframe===!0&&(Mt=ke.getWireframeAttribute(H),Et=2),pt.setup(J,V,St,H,Mt);let Lt,Wt=st;Mt!==null&&(Lt=oe.get(Mt),Wt=_t,Wt.setIndex(Lt));let Tn=Mt!==null?Mt.count:Nt.count,Zn=H.drawRange.start*Et,jn=H.drawRange.count*Et,We=xt!==null?xt.start*Et:0,Dt=xt!==null?xt.count*Et:1/0,$n=Math.max(Zn,We),Zt=Math.min(Tn,Zn+jn,We+Dt)-1,Ae=Math.max(0,Zt-$n+1);if(Ae!==0){if(J.isMesh)V.wireframe===!0?(ut.setLineWidth(V.wireframeLinewidth*gt()),Wt.setMode(1)):Wt.setMode(4);else if(J.isLine){let fn=V.linewidth;fn===void 0&&(fn=1),ut.setLineWidth(fn*gt()),J.isLineSegments?Wt.setMode(1):J.isLineLoop?Wt.setMode(2):Wt.setMode(3)}else J.isPoints?Wt.setMode(0):J.isSprite&&Wt.setMode(4);if(J.isInstancedMesh)Wt.renderInstances($n,Ae,J.count);else if(H.isInstancedBufferGeometry){let fn=Math.min(H.instanceCount,H._maxInstanceCount);Wt.renderInstances($n,Ae,fn)}else Wt.render($n,Ae)}},this.compile=function(A,U){h=E.get(A),h.init(),g.push(h),A.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(h.pushLight(H),H.castShadow&&h.pushShadow(H))}),h.setupLights(p.physicallyCorrectLights),A.traverse(function(H){let V=H.material;if(V)if(Array.isArray(V))for(let J=0;J<V.length;J++){let xt=V[J];tr(xt,A,H)}else tr(V,A,H)}),g.pop(),h=null};let rt=null;function it(A){rt&&rt(A)}function Pt(){Yt.stop()}function te(){Yt.start()}let Yt=new ml;Yt.setAnimationLoop(it),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(A){rt=A,dt.setAnimationLoop(A),A===null?Yt.stop():Yt.start()},dt.addEventListener("sessionstart",Pt),dt.addEventListener("sessionend",te),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(f===!0)return;A.autoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(U),U=dt.getCamera()),A.isScene===!0&&A.onBeforeRender(p,A,U,b),h=E.get(A,g.length),h.init(),g.push(h),K.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),X.setFromProjectionMatrix(K),N=this.localClippingEnabled,k=S.init(this.clippingPlanes,N,U),d=Ve.get(A,m.length),d.init(),m.push(d),dn(A,U,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(j,B),k===!0&&S.beginShadows();let H=h.state.shadowsArray;if(Z.render(H,A,U),k===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),Q.render(d,A),h.setupLights(p.physicallyCorrectLights),U.isArrayCamera){let V=U.cameras;for(let J=0,xt=V.length;J<xt;J++){let wt=V[J];Vt(d,A,wt,wt.viewport)}}else Vt(d,A,U);b!==null&&(mt.updateMultisampleRenderTarget(b),mt.updateRenderTargetMipmap(b)),A.isScene===!0&&A.onAfterRender(p,A,U),pt.resetDefaultState(),y=-1,M=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,m.pop(),m.length>0?d=m[m.length-1]:d=null};function dn(A,U,H,V){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)H=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)h.pushLight(A),A.castShadow&&h.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||X.intersectsSprite(A)){V&&tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(K);let wt=ie.update(A),St=A.material;St.visible&&d.push(A,wt,St,H,tt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(A.isSkinnedMesh&&A.skeleton.frame!==Ut.render.frame&&(A.skeleton.update(),A.skeleton.frame=Ut.render.frame),!A.frustumCulled||X.intersectsObject(A))){V&&tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(K);let wt=ie.update(A),St=A.material;if(Array.isArray(St)){let Mt=wt.groups;for(let Nt=0,Et=Mt.length;Nt<Et;Nt++){let Lt=Mt[Nt],Wt=St[Lt.materialIndex];Wt&&Wt.visible&&d.push(A,wt,Wt,H,tt.z,Lt)}}else St.visible&&d.push(A,wt,St,H,tt.z,null)}}let xt=A.children;for(let wt=0,St=xt.length;wt<St;wt++)dn(xt[wt],U,H,V)}function Vt(A,U,H,V){let J=A.opaque,xt=A.transmissive,wt=A.transparent;h.setupLightsView(H),xt.length>0&&je(J,U,H),V&&ut.viewport(T.copy(V)),J.length>0&&Se(J,U,H),xt.length>0&&Se(xt,U,H),wt.length>0&&Se(wt,U,H),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function je(A,U,H){let V=yt.isWebGL2;G===null&&(G=new rn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?ki:Bn,minFilter:Us,samples:V&&s===!0?4:0})),p.getDrawingBufferSize(W),V?G.setSize(W.x,W.y):G.setSize(Hr(W.x),Hr(W.y));let J=p.getRenderTarget();p.setRenderTarget(G),p.clear();let xt=p.toneMapping;p.toneMapping=sn,Se(A,U,H),p.toneMapping=xt,mt.updateMultisampleRenderTarget(G),mt.updateRenderTargetMipmap(G),p.setRenderTarget(J)}function Se(A,U,H){let V=U.isScene===!0?U.overrideMaterial:null;for(let J=0,xt=A.length;J<xt;J++){let wt=A[J],St=wt.object,Mt=wt.geometry,Nt=V===null?wt.material:V,Et=wt.group;St.layers.test(H.layers)&&Hl(St,U,H,Mt,Nt,Et)}}function Hl(A,U,H,V,J,xt){A.onBeforeRender(p,U,H,V,J,xt),A.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(p,U,H,V,A,xt),J.transparent===!0&&J.side===xi?(J.side=Ne,J.needsUpdate=!0,p.renderBufferDirect(H,U,V,J,A,xt),J.side=Ui,J.needsUpdate=!0,p.renderBufferDirect(H,U,V,J,A,xt),J.side=xi):p.renderBufferDirect(H,U,V,J,A,xt),A.onAfterRender(p,U,H,V,J,xt)}function tr(A,U,H){U.isScene!==!0&&(U=ct);let V=At.get(A),J=h.state.lights,xt=h.state.shadowsArray,wt=J.state.version,St=Ot.getParameters(A,J.state,xt,U,H),Mt=Ot.getProgramCacheKey(St),Nt=V.programs;V.environment=A.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(A.isMeshStandardMaterial?ge:ne).get(A.envMap||V.environment),Nt===void 0&&(A.addEventListener("dispose",F),Nt=new Map,V.programs=Nt);let Et=Nt.get(Mt);if(Et!==void 0){if(V.currentProgram===Et&&V.lightsStateVersion===wt)return Uo(A,St),Et}else St.uniforms=Ot.getUniforms(A),A.onBuild(H,St,p),A.onBeforeCompile(St,p),Et=Ot.acquireProgram(St,Mt),Nt.set(Mt,Et),V.uniforms=St.uniforms;let Lt=V.uniforms;(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=S.uniform),Uo(A,St),V.needsLights=Yl(A),V.lightsStateVersion=wt,V.needsLights&&(Lt.ambientLightColor.value=J.state.ambient,Lt.lightProbe.value=J.state.probe,Lt.directionalLights.value=J.state.directional,Lt.directionalLightShadows.value=J.state.directionalShadow,Lt.spotLights.value=J.state.spot,Lt.spotLightShadows.value=J.state.spotShadow,Lt.rectAreaLights.value=J.state.rectArea,Lt.ltc_1.value=J.state.rectAreaLTC1,Lt.ltc_2.value=J.state.rectAreaLTC2,Lt.pointLights.value=J.state.point,Lt.pointLightShadows.value=J.state.pointShadow,Lt.hemisphereLights.value=J.state.hemi,Lt.directionalShadowMap.value=J.state.directionalShadowMap,Lt.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Lt.spotShadowMap.value=J.state.spotShadowMap,Lt.spotShadowMatrix.value=J.state.spotShadowMatrix,Lt.pointShadowMap.value=J.state.pointShadowMap,Lt.pointShadowMatrix.value=J.state.pointShadowMatrix);let Wt=Et.getUniforms(),Tn=gi.seqWithValue(Wt.seq,Lt);return V.currentProgram=Et,V.uniformsList=Tn,Et}function Uo(A,U){let H=At.get(A);H.outputEncoding=U.outputEncoding,H.instancing=U.instancing,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function ql(A,U,H,V,J){U.isScene!==!0&&(U=ct),mt.resetTextureUnits();let xt=U.fog,wt=V.isMeshStandardMaterial?U.environment:null,St=b===null?p.outputEncoding:b.isXRRenderTarget===!0?b.texture.encoding:On,Mt=(V.isMeshStandardMaterial?ge:ne).get(V.envMap||wt),Nt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Et=!!V.normalMap&&!!H.attributes.tangent,Lt=!!H.morphAttributes.position,Wt=!!H.morphAttributes.normal,Tn=!!H.morphAttributes.color,Zn=V.toneMapped?p.toneMapping:sn,jn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,We=jn!==void 0?jn.length:0,Dt=At.get(V),$n=h.state.lights;if(k===!0&&(N===!0||A!==M)){let xe=A===M&&V.id===y;S.setState(V,A,xe)}let Zt=!1;V.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==$n.state.version||Dt.outputEncoding!==St||J.isInstancedMesh&&Dt.instancing===!1||!J.isInstancedMesh&&Dt.instancing===!0||J.isSkinnedMesh&&Dt.skinning===!1||!J.isSkinnedMesh&&Dt.skinning===!0||Dt.envMap!==Mt||V.fog===!0&&Dt.fog!==xt||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==S.numPlanes||Dt.numIntersection!==S.numIntersection)||Dt.vertexAlphas!==Nt||Dt.vertexTangents!==Et||Dt.morphTargets!==Lt||Dt.morphNormals!==Wt||Dt.morphColors!==Tn||Dt.toneMapping!==Zn||yt.isWebGL2===!0&&Dt.morphTargetsCount!==We)&&(Zt=!0):(Zt=!0,Dt.__version=V.version);let Ae=Dt.currentProgram;Zt===!0&&(Ae=tr(V,U,J));let fn=!1,Ii=!1,er=!1,ae=Ae.getUniforms(),Ri=Dt.uniforms;if(ut.useProgram(Ae.program)&&(fn=!0,Ii=!0,er=!0),V.id!==y&&(y=V.id,Ii=!0),fn||M!==A){if(ae.setValue($,"projectionMatrix",A.projectionMatrix),yt.logarithmicDepthBuffer&&ae.setValue($,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),M!==A&&(M=A,Ii=!0,er=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){let xe=ae.map.cameraPosition;xe!==void 0&&xe.setValue($,tt.setFromMatrixPosition(A.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ae.setValue($,"isOrthographic",A.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||J.isSkinnedMesh)&&ae.setValue($,"viewMatrix",A.matrixWorldInverse)}if(J.isSkinnedMesh){ae.setOptional($,J,"bindMatrix"),ae.setOptional($,J,"bindMatrixInverse");let xe=J.skeleton;xe&&(yt.floatVertexTextures?(xe.boneTexture===null&&xe.computeBoneTexture(),ae.setValue($,"boneTexture",xe.boneTexture,mt),ae.setValue($,"boneTextureSize",xe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}let nr=H.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0&&yt.isWebGL2===!0)&&et.update(J,H,V,Ae),(Ii||Dt.receiveShadow!==J.receiveShadow)&&(Dt.receiveShadow=J.receiveShadow,ae.setValue($,"receiveShadow",J.receiveShadow)),Ii&&(ae.setValue($,"toneMappingExposure",p.toneMappingExposure),Dt.needsLights&&Xl(Ri,er),xt&&V.fog===!0&&Ze.refreshFogUniforms(Ri,xt),Ze.refreshMaterialUniforms(Ri,V,z,R,G),gi.upload($,Dt.uniformsList,Ri,mt)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(gi.upload($,Dt.uniformsList,Ri,mt),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ae.setValue($,"center",J.center),ae.setValue($,"modelViewMatrix",J.modelViewMatrix),ae.setValue($,"normalMatrix",J.normalMatrix),ae.setValue($,"modelMatrix",J.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let xe=V.uniformsGroups;for(let ir=0,Zl=xe.length;ir<Zl;ir++)if(yt.isWebGL2){let ko=xe[ir];ht.update(ko,Ae),ht.bind(ko,Ae)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ae}function Xl(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function Yl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(A,U,H){At.get(A.texture).__webglTexture=U,At.get(A.depthTexture).__webglTexture=H;let V=At.get(A);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){let H=At.get(A);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,H=0){b=A,v=U,x=H;let V=!0;if(A){let Mt=At.get(A);Mt.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(36160,null),V=!1):Mt.__webglFramebuffer===void 0?mt.setupRenderTarget(A):Mt.__hasExternalTextures&&mt.rebindTextures(A,At.get(A.texture).__webglTexture,At.get(A.depthTexture).__webglTexture)}let J=null,xt=!1,wt=!1;if(A){let Mt=A.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture)&&(wt=!0);let Nt=At.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(J=Nt[U],xt=!0):yt.isWebGL2&&A.samples>0&&mt.useMultisampledRTT(A)===!1?J=At.get(A).__webglMultisampledFramebuffer:J=Nt,T.copy(A.viewport),I.copy(A.scissor),w=A.scissorTest}else T.copy(P).multiplyScalar(z).floor(),I.copy(D).multiplyScalar(z).floor(),w=L;if(ut.bindFramebuffer(36160,J)&&yt.drawBuffers&&V&&ut.drawBuffers(A,J),ut.viewport(T),ut.scissor(I),ut.setScissorTest(w),xt){let Mt=At.get(A.texture);$.framebufferTexture2D(36160,36064,34069+U,Mt.__webglTexture,H)}else if(wt){let Mt=At.get(A.texture),Nt=U||0;$.framebufferTextureLayer(36160,36064,Mt.__webglTexture,H||0,Nt)}y=-1},this.readRenderTargetPixels=function(A,U,H,V,J,xt,wt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=At.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&wt!==void 0&&(St=St[wt]),St){ut.bindFramebuffer(36160,St);try{let Mt=A.texture,Nt=Mt.format,Et=Mt.type;if(Nt!==He&&q.convert(Nt)!==$.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Lt=Et===ki&&(vt.has("EXT_color_buffer_half_float")||yt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Et!==Bn&&q.convert(Et)!==$.getParameter(35738)&&!(Et===Dn&&(yt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Lt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-V&&H>=0&&H<=A.height-J&&$.readPixels(U,H,V,J,q.convert(Nt),q.convert(Et),xt)}finally{let Mt=b!==null?At.get(b).__webglFramebuffer:null;ut.bindFramebuffer(36160,Mt)}}},this.copyFramebufferToTexture=function(A,U,H=0){let V=Math.pow(2,-H),J=Math.floor(U.image.width*V),xt=Math.floor(U.image.height*V);mt.setTexture2D(U,0),$.copyTexSubImage2D(3553,H,0,0,A.x,A.y,J,xt),ut.unbindTexture()},this.copyTextureToTexture=function(A,U,H,V=0){let J=U.image.width,xt=U.image.height,wt=q.convert(H.format),St=q.convert(H.type);mt.setTexture2D(H,0),$.pixelStorei(37440,H.flipY),$.pixelStorei(37441,H.premultiplyAlpha),$.pixelStorei(3317,H.unpackAlignment),U.isDataTexture?$.texSubImage2D(3553,V,A.x,A.y,J,xt,wt,St,U.image.data):U.isCompressedTexture?$.compressedTexSubImage2D(3553,V,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,wt,U.mipmaps[0].data):$.texSubImage2D(3553,V,A.x,A.y,wt,St,U.image),V===0&&H.generateMipmaps&&$.generateMipmap(3553),ut.unbindTexture()},this.copyTextureToTexture3D=function(A,U,H,V,J=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let xt=A.max.x-A.min.x+1,wt=A.max.y-A.min.y+1,St=A.max.z-A.min.z+1,Mt=q.convert(V.format),Nt=q.convert(V.type),Et;if(V.isData3DTexture)mt.setTexture3D(V,0),Et=32879;else if(V.isDataArrayTexture)mt.setTexture2DArray(V,0),Et=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei(37440,V.flipY),$.pixelStorei(37441,V.premultiplyAlpha),$.pixelStorei(3317,V.unpackAlignment);let Lt=$.getParameter(3314),Wt=$.getParameter(32878),Tn=$.getParameter(3316),Zn=$.getParameter(3315),jn=$.getParameter(32877),We=H.isCompressedTexture?H.mipmaps[0]:H.image;$.pixelStorei(3314,We.width),$.pixelStorei(32878,We.height),$.pixelStorei(3316,A.min.x),$.pixelStorei(3315,A.min.y),$.pixelStorei(32877,A.min.z),H.isDataTexture||H.isData3DTexture?$.texSubImage3D(Et,J,U.x,U.y,U.z,xt,wt,St,Mt,Nt,We.data):H.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),$.compressedTexSubImage3D(Et,J,U.x,U.y,U.z,xt,wt,St,Mt,We.data)):$.texSubImage3D(Et,J,U.x,U.y,U.z,xt,wt,St,Mt,Nt,We),$.pixelStorei(3314,Lt),$.pixelStorei(32878,Wt),$.pixelStorei(3316,Tn),$.pixelStorei(3315,Zn),$.pixelStorei(32877,jn),J===0&&V.generateMipmaps&&$.generateMipmap(Et),ut.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?mt.setTextureCube(A,0):A.isData3DTexture?mt.setTexture3D(A,0):A.isDataArrayTexture?mt.setTexture2DArray(A,0):mt.setTexture2D(A,0),ut.unbindTexture()},this.resetState=function(){v=0,x=0,b=null,ut.reset(),pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}var Wi=class extends Ip{};Wi.prototype.isWebGL1Renderer=!0;var Fs=class extends pe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}};var zs=class extends Vn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},el=new O,nl=new O,il=new Jt,Br=new Ts,xs=new wi,oo=class extends pe{constructor(t=new Be,e=new zs){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)el.fromBufferAttribute(e,i-1),nl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=el.distanceTo(nl);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xs.copy(n.boundingSphere),xs.applyMatrix4(i),xs.radius+=s,t.ray.intersectsSphere(xs)===!1)return;il.copy(i).invert(),Br.copy(t.ray).applyMatrix4(il);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),a=o*o,l=new O,u=new O,d=new O,h=new O,m=this.isLineSegments?2:1,g=n.index,f=n.attributes.position;if(g!==null){let v=Math.max(0,r.start),x=Math.min(g.count,r.start+r.count);for(let b=v,y=x-1;b<y;b+=m){let M=g.getX(b),T=g.getX(b+1);if(l.fromBufferAttribute(f,M),u.fromBufferAttribute(f,T),Br.distanceSqToSegment(l,u,h,d)>a)continue;h.applyMatrix4(this.matrixWorld);let w=t.ray.origin.distanceTo(h);w<t.near||w>t.far||e.push({distance:w,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{let v=Math.max(0,r.start),x=Math.min(f.count,r.start+r.count);for(let b=v,y=x-1;b<y;b+=m){if(l.fromBufferAttribute(f,b),u.fromBufferAttribute(f,b+1),Br.distanceSqToSegment(l,u,h,d)>a)continue;h.applyMatrix4(this.matrixWorld);let T=t.ray.origin.distanceTo(h);T<t.near||T>t.far||e.push({distance:T,point:d.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}},sl=new O,rl=new O,ao=class extends oo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)sl.fromBufferAttribute(e,i),rl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sl.distanceTo(rl);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};function wn(c,t,e){return wl(c)?new c.constructor(c.subarray(t,e!==void 0?e:c.length)):c.slice(t,e)}function vs(c,t,e){return!c||!e&&c.constructor===t?c:typeof t.BYTES_PER_ELEMENT=="number"?new t(c):Array.prototype.slice.call(c)}function wl(c){return ArrayBuffer.isView(c)&&!(c instanceof DataView)}var Si=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let r;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}r=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let a=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(i=s,s=e[--n-1],t>=s)break t}r=n,n=0;break e}break n}for(;n<r;){let o=n+r>>>1;t<e[o]?r=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let r=0;r!==i;++r)e[r]=n[s+r];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},lo=class extends Si{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ga,endingEnd:ga}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,r=t+1,o=i[s],a=i[r];if(o===void 0)switch(this.getSettings_().endingStart){case xa:s=t,o=2*e-n;break;case va:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(a===void 0)switch(this.getSettings_().endingEnd){case xa:r=t,a=2*n-e;break;case va:r=1,a=n+i[1]-i[0];break;default:r=t-1,a=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(a-n),this._offsetPrev=s*u,this._offsetNext=r*u}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=t*o,l=a-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(n-e)/(i-e),p=g*g,f=p*g,v=-h*f+2*h*p-h*g,x=(1+h)*f+(-1.5-2*h)*p+(-.5+h)*g+1,b=(-1-m)*f+(1.5+m)*p+.5*g,y=m*f-m*p;for(let M=0;M!==o;++M)s[M]=v*r[u+M]+x*r[l+M]+b*r[a+M]+y*r[d+M];return s}},co=class extends Si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=t*o,l=a-o,u=(n-e)/(i-e),d=1-u;for(let h=0;h!==o;++h)s[h]=r[l+h]*d+r[a+h]*u;return s}},ho=class extends Si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Oe=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=vs(e,this.TimeBufferType),this.values=vs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:vs(t.times,Array),values:vs(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lo(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case _s:e=this.InterpolantFactoryMethodDiscrete;break;case ws:e=this.InterpolantFactoryMethodLinear;break;case lr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return ws;case this.InterpolantFactoryMethodSmooth:return lr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,r=i-1;for(;s!==i&&n[s]<t;)++s;for(;r!==-1&&n[r]>e;)--r;if(++r,s!==0||r!==i){s>=r&&(r=Math.max(r,1),s=r-1);let o=this.getValueSize();this.times=wn(n,s,r),this.values=wn(this.values,s*o,r*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let r=null;for(let o=0;o!==s;o++){let a=n[o];if(typeof a=="number"&&isNaN(a)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,a),t=!1;break}if(r!==null&&r>a){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,a,r),t=!1;break}r=a}if(i!==void 0&&wl(i))for(let o=0,a=i.length;o!==a;++o){let l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=wn(this.times),e=wn(this.values),n=this.getValueSize(),i=this.getInterpolation()===lr,s=t.length-1,r=1;for(let o=1;o<s;++o){let a=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(i)a=!0;else{let d=o*n,h=d-n,m=d+n;for(let g=0;g!==n;++g){let p=e[d+g];if(p!==e[h+g]||p!==e[m+g]){a=!0;break}}}if(a){if(o!==r){t[r]=t[o];let d=o*n,h=r*n;for(let m=0;m!==n;++m)e[h+m]=e[d+m]}++r}}if(s>0){t[r]=t[s];for(let o=s*n,a=r*n,l=0;l!==n;++l)e[a+l]=e[o+l];++r}return r!==t.length?(this.times=wn(t,0,r),this.values=wn(e,0,r*n)):(this.times=t,this.values=e),this}clone(){let t=wn(this.times,0),e=wn(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Oe.prototype.TimeBufferType=Float32Array;Oe.prototype.ValueBufferType=Float32Array;Oe.prototype.DefaultInterpolation=ws;var Wn=class extends Oe{};Wn.prototype.ValueTypeName="bool";Wn.prototype.ValueBufferType=Array;Wn.prototype.DefaultInterpolation=_s;Wn.prototype.InterpolantFactoryMethodLinear=void 0;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;var uo=class extends Oe{};uo.prototype.ValueTypeName="color";var fo=class extends Oe{};fo.prototype.ValueTypeName="number";var po=class extends Si{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,r=this.sampleValues,o=this.valueSize,a=(n-e)/(i-e),l=t*o;for(let u=l+o;l!==u;l+=4)Sn.slerpFlat(s,0,r,l-o,r,l,a);return s}},Gi=class extends Oe{InterpolantFactoryMethodLinear(t){return new po(this.times,this.values,this.getValueSize(),t)}};Gi.prototype.ValueTypeName="quaternion";Gi.prototype.DefaultInterpolation=ws;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Oe{};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=_s;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var mo=class extends Oe{};mo.prototype.ValueTypeName="vector";var Ns=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ol();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ol(){return(typeof performance>"u"?Date:performance).now()}var yo="\\[\\]\\.:\\/",Rp=new RegExp("["+yo+"]","g"),_o="[^"+yo+"]",Dp="[^"+yo.replace("\\.","")+"]",Fp=/((?:WC+[\/:])*)/.source.replace("WC",_o),zp=/(WCOD+)?/.source.replace("WCOD",Dp),Np=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_o),Bp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_o),Op=new RegExp("^"+Fp+zp+Np+Bp+"$"),Up=["material","materials","bones"],go=class{constructor(t,e,n){let i=n||Ft.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ft=class{constructor(t,e,n){this.path=e,this.parsedPath=n||Ft.parseTrackName(e),this.node=Ft.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Ft.Composite(t,e,n):new Ft(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Rp,"")}static parseTrackName(t){let e=Op.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Up.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let r=0;r<s.length;r++){let o=s[r];if(o.name===e||o.uuid===e)return o;let a=n(o.children);if(a)return a}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=Ft.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let r=t[i];if(r===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let a=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}a=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(a=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(a=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=i;this.getValue=this.GetterByBindingType[a],this.setValue=this.SetterByBindingTypeAndVersioning[a][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ft.Composite=go;Ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ft.prototype.GetterByBindingType=[Ft.prototype._getValue_direct,Ft.prototype._getValue_array,Ft.prototype._getValue_arrayElement,Ft.prototype._getValue_toArray];Ft.prototype.SetterByBindingTypeAndVersioning=[[Ft.prototype._setValue_direct,Ft.prototype._setValue_direct_setNeedsUpdate,Ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_array,Ft.prototype._setValue_array_setNeedsUpdate,Ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_arrayElement,Ft.prototype._setValue_arrayElement_setNeedsUpdate,Ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ft.prototype._setValue_fromArray,Ft.prototype._setValue_fromArray_setNeedsUpdate,Ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var a0=new Float32Array(1);var Bs=class extends ao{constructor(t=1){let e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Be;i.setAttribute("position",new we(e,3)),i.setAttribute("color",new we(n,3));let s=new zs({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(t,e,n){let i=new zt,s=this.geometry.attributes.color.array;return i.set(t),i.toArray(s,0),i.toArray(s,3),i.set(e),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xo);var Me=class{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){let t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){let t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){let e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new _);let e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new _);let n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Me);let n=this.elements,i=t.elements,s=e.elements,r=n[0],o=n[1],a=n[2],l=n[3],u=n[4],d=n[5],h=n[6],m=n[7],g=n[8],p=i[0],f=i[1],v=i[2],x=i[3],b=i[4],y=i[5],M=i[6],T=i[7],I=i[8];return s[0]=r*p+o*x+a*M,s[1]=r*f+o*b+a*T,s[2]=r*v+o*y+a*I,s[3]=l*p+u*x+d*M,s[4]=l*f+u*b+d*T,s[5]=l*v+u*y+d*I,s[6]=h*p+m*x+g*M,s[7]=h*f+m*b+g*T,s[8]=h*v+m*y+g*I,e}scale(t,e){e===void 0&&(e=new Me);let n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new _);let n=3,i=4,s=[],r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let a=3,l=a,u,d=4,h;do{if(r=l-a,s[r+i*r]===0){for(o=r+1;o<l;o++)if(s[r+i*o]!==0){u=d;do h=d-u,s[h+i*r]+=s[h+i*o];while(--u);break}}if(s[r+i*r]!==0)for(o=r+1;o<l;o++){let m=s[r+i*o]/s[r+i*r];u=d;do h=d-u,s[h+i*o]=h<=r?0:s[h+i*o]-s[h+i*r]*m;while(--u)}}while(--a);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="",e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Me);let e=3,n=6,i=Vp,s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3,a=o,l,u=n,d;do{if(s=a-o,i[s+n*s]===0){for(r=s+1;r<a;r++)if(i[s+n*r]!==0){l=u;do d=u-l,i[d+n*s]+=i[d+n*r];while(--l);break}}if(i[s+n*s]!==0)for(r=s+1;r<a;r++){let h=i[s+n*r]/i[s+n*s];l=u;do d=u-l,i[d+n*r]=d<=s?0:i[d+n*r]-i[d+n*s]*h;while(--l)}}while(--o);s=2;do{r=s-1;do{let h=i[s+n*r]/i[s+n*s];l=n;do d=n-l,i[d+n*r]=i[d+n*r]-i[d+n*s]*h;while(--l)}while(r--)}while(--s);s=2;do{let h=1/i[s+n*s];l=n;do d=n-l,i[d+n*s]=i[d+n*s]*h;while(--l)}while(s--);s=2;do{r=2;do{if(d=i[e+r+n*s],isNaN(d)||d===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,d)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){let e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,o=n+n,a=i+i,l=e*r,u=e*o,d=e*a,h=n*o,m=n*a,g=i*a,p=s*r,f=s*o,v=s*a,x=this.elements;return x[3*0+0]=1-(h+g),x[3*0+1]=u-v,x[3*0+2]=d+f,x[3*1+0]=u+v,x[3*1+1]=1-(l+g),x[3*1+2]=m-p,x[3*2+0]=d-f,x[3*2+1]=m+p,x[3*2+2]=1-(l+h),this}transpose(t){t===void 0&&(t=new Me);let e=this.elements,n=t.elements,i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}},Vp=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],_=class{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new _);let n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,a=this.z;return e.x=o*s-a*i,e.y=a*n-r*s,e.z=r*i-o*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new _(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new _(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Me([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){let t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){let s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new _);let e=this.x,n=this.y,i=this.z,s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){let t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(t){let e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i)}scale(t,e){e===void 0&&(e=new _);let n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new _),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new _),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new _),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){let n=this.length();if(n>0){let i=Wp,s=1/n;i.set(this.x*s,this.y*s,this.z*s);let r=Gp;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){let i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(bl),bl.almostEquals(t,e)}clone(){return new _(this.x,this.y,this.z)}};_.ZERO=new _(0,0,0);_.UNIT_X=new _(1,0,0);_.UNIT_Y=new _(0,1,0);_.UNIT_Z=new _(0,0,1);var Wp=new _,Gp=new _,bl=new _,ue=class{constructor(t){t===void 0&&(t={}),this.lowerBound=new _,this.upperBound=new _,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){let s=this.lowerBound,r=this.upperBound,o=n;s.copy(t[0]),o&&o.vmult(s,s),r.copy(s);for(let a=1;a<t.length;a++){let l=t[a];o&&(o.vmult(l,Ml),l=Ml),l.x>r.x&&(r.x=l.x),l.x<s.x&&(s.x=l.x),l.y>r.y&&(r.y=l.y),l.y<s.y&&(s.y=l.y),l.z>r.z&&(r.z=l.z),l.z<s.z&&(s.z=l.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new ue().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&o&&a}volume(){let t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){let e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,o,a){let l=this.lowerBound,u=this.upperBound;t.copy(l),e.set(u.x,l.y,l.z),n.set(u.x,u.y,l.z),i.set(l.x,u.y,u.z),s.set(u.x,l.y,u.z),r.set(l.x,u.y,l.z),o.set(l.x,l.y,u.z),a.copy(u)}toLocalFrame(t,e){let n=Sl,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,s,r,o,a,l,u,d);for(let h=0;h!==8;h++){let m=n[h];t.pointToLocal(m,m)}return e.setFromPoints(n)}toWorldFrame(t,e){let n=Sl,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],l=n[5],u=n[6],d=n[7];this.getCorners(i,s,r,o,a,l,u,d);for(let h=0;h!==8;h++){let m=n[h];t.pointToWorld(m,m)}return e.setFromPoints(n)}overlapsRay(t){let{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,o=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,d=(this.lowerBound.z-n.z)*r,h=(this.upperBound.z-n.z)*r,m=Math.max(Math.max(Math.min(o,a),Math.min(l,u)),Math.min(d,h)),g=Math.min(Math.min(Math.max(o,a),Math.max(l,u)),Math.max(d,h));return!(g<0||m>g)}},Ml=new _,Sl=[new _,new _,new _,new _,new _,new _,new _,new _],Xs=class{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){let s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){let r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}},Ys=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;let n=this._listeners;if(n[t]===void 0)return this;let i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;let n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}},qt=class{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){let n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new _),this.normalize();let e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){let n=Hp,i=qp;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{let n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new qt);let n=this.x,i=this.y,s=this.z,r=this.w,o=t.x,a=t.y,l=t.z,u=t.w;return e.x=n*u+r*o+i*l-s*a,e.y=i*u+r*a+s*o-n*l,e.z=s*u+r*l+n*a-i*o,e.w=r*u-n*o-i*a-s*l,e}inverse(t){t===void 0&&(t=new qt);let e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);let r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new qt),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){let t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new _);let n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,a=this.z,l=this.w,u=l*n+o*s-a*i,d=l*i+a*n-r*s,h=l*s+r*i-o*n,m=-r*n-o*i-a*s;return e.x=u*l+m*-r+d*-a-h*-o,e.y=d*l+m*-o+h*-r-u*-a,e.z=h*l+m*-a+u*-o-d*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s,r=this.x,o=this.y,a=this.z,l=this.w;switch(e){case"YZX":let u=r*o+a*l;if(u>.499&&(n=2*Math.atan2(r,l),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(r,l),i=-Math.PI/2,s=0),n===void 0){let d=r*r,h=o*o,m=a*a;n=Math.atan2(2*o*l-2*r*a,1-2*h-2*m),i=Math.asin(2*u),s=Math.atan2(2*r*l-2*o*a,1-2*d-2*m)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");let s=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(n/2),a=Math.sin(t/2),l=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=a*r*o+s*l*u,this.y=s*l*o-a*r*u,this.z=s*r*u+a*l*o,this.w=s*r*o-a*l*u):i==="YXZ"?(this.x=a*r*o+s*l*u,this.y=s*l*o-a*r*u,this.z=s*r*u-a*l*o,this.w=s*r*o+a*l*u):i==="ZXY"?(this.x=a*r*o-s*l*u,this.y=s*l*o+a*r*u,this.z=s*r*u+a*l*o,this.w=s*r*o-a*l*u):i==="ZYX"?(this.x=a*r*o-s*l*u,this.y=s*l*o+a*r*u,this.z=s*r*u-a*l*o,this.w=s*r*o+a*l*u):i==="YZX"?(this.x=a*r*o+s*l*u,this.y=s*l*o+a*r*u,this.z=s*r*u-a*l*o,this.w=s*r*o-a*l*u):i==="XZY"&&(this.x=a*r*o-s*l*u,this.y=s*l*o-a*r*u,this.z=s*r*u+a*l*o,this.w=s*r*o+a*l*u),this}clone(){return new qt(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new qt);let i=this.x,s=this.y,r=this.z,o=this.w,a=t.x,l=t.y,u=t.z,d=t.w,h,m,g,p,f;return m=i*a+s*l+r*u+o*d,m<0&&(m=-m,a=-a,l=-l,u=-u,d=-d),1-m>1e-6?(h=Math.acos(m),g=Math.sin(h),p=Math.sin((1-e)*h)/g,f=Math.sin(e*h)/g):(p=1-e,f=e),n.x=p*i+f*a,n.y=p*s+f*l,n.z=p*r+f*u,n.w=p*o+f*d,n}integrate(t,e,n,i){i===void 0&&(i=new qt);let s=t.x*n.x,r=t.y*n.y,o=t.z*n.z,a=this.x,l=this.y,u=this.z,d=this.w,h=e*.5;return i.x+=h*(s*d+r*u-o*l),i.y+=h*(r*d+o*a-s*u),i.z+=h*(o*d+s*l-r*a),i.w+=h*(-s*a-r*l-o*u),i}},Hp=new _,qp=new _,Xp={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256},lt=class{constructor(t){t===void 0&&(t={}),this.id=lt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}};lt.idCounter=0;lt.types=Xp;var Ct=class{constructor(t){t===void 0&&(t={}),this.position=new _,this.quaternion=new qt,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ct.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ct.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new _),n.vsub(t,i),e.conjugate(Al),Al.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new _),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new _),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new _),e.w*=-1,e.vmult(n,i),e.w*=-1,i}},Al=new qt,Xn=class extends lt{constructor(t){t===void 0&&(t={});let{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:lt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){let t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;let i=new _;for(let s=0;s!==t.length;s++){let r=t[s],o=r.length;for(let a=0;a!==o;a++){let l=(a+1)%o;e[r[a]].vsub(e[r[l]],i),i.normalize();let u=!1;for(let d=0;d!==n.length;d++)if(n[d].almostEquals(i)||n[d].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);let e=this.faceNormals[t]||new _;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;let n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){let n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];Xn.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){let s=new _,r=new _;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,o,a,l){let u=new _,d=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),s.vmult(u,u);let p=u.dot(r);p>h&&(h=p,d=g)}let m=[];for(let g=0;g<n.faces[d].length;g++){let p=n.vertices[n.faces[d][g]],f=new _;f.copy(p),s.vmult(f,f),i.vadd(f,f),m.push(f)}d>=0&&this.clipFaceAgainstHull(r,t,e,m,o,a,l)}findSeparatingAxis(t,e,n,i,s,r,o,a){let l=new _,u=new _,d=new _,h=new _,m=new _,g=new _,p=Number.MAX_VALUE,f=this;if(f.uniqueAxes)for(let v=0;v!==f.uniqueAxes.length;v++){n.vmult(f.uniqueAxes[v],l);let x=f.testSepAxis(l,t,e,n,i,s);if(x===!1)return!1;x<p&&(p=x,r.copy(l))}else{let v=o?o.length:f.faces.length;for(let x=0;x<v;x++){let b=o?o[x]:x;l.copy(f.faceNormals[b]),n.vmult(l,l);let y=f.testSepAxis(l,t,e,n,i,s);if(y===!1)return!1;y<p&&(p=y,r.copy(l))}}if(t.uniqueAxes)for(let v=0;v!==t.uniqueAxes.length;v++){s.vmult(t.uniqueAxes[v],u);let x=f.testSepAxis(u,t,e,n,i,s);if(x===!1)return!1;x<p&&(p=x,r.copy(u))}else{let v=a?a.length:t.faces.length;for(let x=0;x<v;x++){let b=a?a[x]:x;u.copy(t.faceNormals[b]),s.vmult(u,u);let y=f.testSepAxis(u,t,e,n,i,s);if(y===!1)return!1;y<p&&(p=y,r.copy(u))}}for(let v=0;v!==f.uniqueEdges.length;v++){n.vmult(f.uniqueEdges[v],h);for(let x=0;x!==t.uniqueEdges.length;x++)if(s.vmult(t.uniqueEdges[x],m),h.cross(m,g),!g.almostZero()){g.normalize();let b=f.testSepAxis(g,t,e,n,i,s);if(b===!1)return!1;b<p&&(p=b,r.copy(g))}}return i.vsub(e,d),d.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){let o=this;Xn.project(o,t,n,i,wo),Xn.project(e,t,s,r,bo);let a=wo[0],l=wo[1],u=bo[0],d=bo[1];if(a<d||u<l)return!1;let h=a-d,m=u-l;return h<m?h:m}calculateLocalInertia(t,e){let n=new _,i=new _;this.computeLocalAABB(i,n);let s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*s*2*s+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){let e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,o){let a=new _,l=new _,u=new _,d=new _,h=new _,m=new _,g=new _,p=new _,f=this,v=[],x=i,b=v,y=-1,M=Number.MAX_VALUE;for(let R=0;R<f.faces.length;R++){a.copy(f.faceNormals[R]),n.vmult(a,a);let z=a.dot(t);z<M&&(M=z,y=R)}if(y<0)return;let T=f.faces[y];T.connectedFaces=[];for(let R=0;R<f.faces.length;R++)for(let z=0;z<f.faces[R].length;z++)T.indexOf(f.faces[R][z])!==-1&&R!==y&&T.connectedFaces.indexOf(R)===-1&&T.connectedFaces.push(R);let I=T.length;for(let R=0;R<I;R++){let z=f.vertices[T[R]],j=f.vertices[T[(R+1)%I]];z.vsub(j,l),u.copy(l),n.vmult(u,u),e.vadd(u,u),d.copy(this.faceNormals[y]),n.vmult(d,d),e.vadd(d,d),u.cross(d,h),h.negate(h),m.copy(z),n.vmult(m,m),e.vadd(m,m);let B=T.connectedFaces[R];g.copy(this.faceNormals[B]);let P=this.getPlaneConstantOfFace(B);p.copy(g),n.vmult(p,p);let D=P-p.dot(e);for(this.clipFaceAgainstPlane(x,b,p,D);x.length;)x.shift();for(;b.length;)x.push(b.shift())}g.copy(this.faceNormals[y]);let w=this.getPlaneConstantOfFace(y);p.copy(g),n.vmult(p,p);let C=w-p.dot(e);for(let R=0;R<x.length;R++){let z=p.dot(x[R])+C;if(z<=s&&(console.log(`clamped: depth=${z} to minDist=${s}`),z=s),z<=r){let j=x[R];if(z<=1e-6){let B={point:j,normal:p,depth:z};o.push(B)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r,o=t.length;if(o<2)return e;let a=t[t.length-1],l=t[0];s=n.dot(a)+i;for(let u=0;u<o;u++){if(l=t[u],r=n.dot(l)+i,s<0)if(r<0){let d=new _;d.copy(l),e.push(d)}else{let d=new _;a.lerp(l,s/(s-r),d),e.push(d)}else if(r<0){let d=new _;a.lerp(l,s/(s-r),d),e.push(d),e.push(l)}a=l,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new _);let n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){let n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){let s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){let e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new _);let n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0,e=this.vertices;for(let n=0;n!==e.length;n++){let i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){let s=this.vertices,r,o,a,l,u,d,h=new _;for(let m=0;m<s.length;m++){h.copy(s[m]),e.vmult(h,h),t.vadd(h,h);let g=h;(r===void 0||g.x<r)&&(r=g.x),(l===void 0||g.x>l)&&(l=g.x),(o===void 0||g.y<o)&&(o=g.y),(u===void 0||g.y>u)&&(u=g.y),(a===void 0||g.z<a)&&(a=g.z),(d===void 0||g.z>d)&&(d=g.z)}n.set(r,o,a),i.set(l,u,d)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new _);let e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){let n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){let r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){let r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){let r=i[s];r.vadd(t,r)}}pointIsInside(t){let e=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new _;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o],l=e[n[o][0]],u=new _;t.vsub(l,u);let d=a.dot(u),h=new _;r.vsub(l,h);let m=a.dot(h);if(d<0&&m>0||d>0&&m<0)return!1}return s?1:-1}static project(t,e,n,i,s){let r=t.vertices.length,o=Zp,a=0,l=0,u=jp,d=t.vertices;u.setZero(),Ct.vectorToLocalFrame(n,i,e,o),Ct.pointToLocalFrame(n,i,u,u);let h=u.dot(o);l=a=d[0].dot(o);for(let m=1;m<r;m++){let g=d[m].dot(o);g>a&&(a=g),g<l&&(l=g)}if(l-=h,a-=h,l>a){let m=l;l=a,a=m}s[0]=a,s[1]=l}},wo=[],bo=[],Yp=new _,Zp=new _,jp=new _,ji=class extends lt{constructor(t){super({type:lt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){let t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=_,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new Xn({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new _),ji.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){let i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){let n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){let i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)An.set(s[r][0],s[r][1],s[r][2]),e.vmult(An,An),t.vadd(An,An),n(An.x,An.y,An.z)}calculateWorldAABB(t,e,n,i){let s=this.halfExtents;qe[0].set(s.x,s.y,s.z),qe[1].set(-s.x,s.y,s.z),qe[2].set(-s.x,-s.y,s.z),qe[3].set(-s.x,-s.y,-s.z),qe[4].set(s.x,-s.y,-s.z),qe[5].set(s.x,s.y,-s.z),qe[6].set(-s.x,s.y,-s.z),qe[7].set(s.x,-s.y,s.z);let r=qe[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){let a=qe[o];e.vmult(a,a),t.vadd(a,a);let l=a.x,u=a.y,d=a.z;l>i.x&&(i.x=l),u>i.y&&(i.y=u),d>i.z&&(i.z=d),l<n.x&&(n.x=l),u<n.y&&(n.y=u),d<n.z&&(n.z=d)}}},An=new _,qe=[new _,new _,new _,new _,new _,new _,new _,new _],No={DYNAMIC:1,STATIC:2,KINEMATIC:4},Bo={AWAKE:0,SLEEPY:1,SLEEPING:2},ot=class extends Ys{constructor(t){t===void 0&&(t={}),super(),this.id=ot.idCounter++,this.index=-1,this.world=null,this.vlambda=new _,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new _,this.previousPosition=new _,this.interpolatedPosition=new _,this.initPosition=new _,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new _,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new _,this.force=new _;let e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ot.STATIC:ot.DYNAMIC,typeof t.type==typeof ot.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ot.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new _,this.quaternion=new qt,this.initQuaternion=new qt,this.previousQuaternion=new qt,this.interpolatedQuaternion=new qt,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new _,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new _,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new _,this.invInertia=new _,this.invInertiaWorld=new Me,this.invMassSolve=0,this.invInertiaSolve=new _,this.invInertiaWorldSolve=new Me,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new _(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new _(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new ue,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new _,this.isTrigger=Boolean(t.isTrigger),t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){let t=this.sleepState;this.sleepState=ot.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ot.SLEEPING&&this.dispatchEvent(ot.wakeupEvent)}sleep(){this.sleepState=ot.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){let e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ot.AWAKE&&n<i?(this.sleepState=ot.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ot.sleepyEvent)):e===ot.SLEEPY&&n>i?this.wakeUp():e===ot.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ot.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ot.SLEEPING||this.type===ot.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new _),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new _),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new _),this.quaternion.vmult(t,e),e}addShape(t,e,n){let i=new _,s=new qt;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){let e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){let t=this.shapes,e=this.shapeOffsets,n=t.length,i=0;for(let s=0;s!==n;s++){let r=t[s];r.updateBoundingSphereRadius();let o=e[s].length(),a=r.boundingSphereRadius;o+a>i&&(i=o+a)}this.boundingRadius=i}updateAABB(){let t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=$p,r=Jp,o=this.quaternion,a=this.aabb,l=Kp;for(let u=0;u!==i;u++){let d=t[u];o.vmult(e[u],s),s.vadd(this.position,s),o.mult(n[u],r),d.calculateWorldAABB(s,r,l.lowerBound,l.upperBound),u===0?a.copy(l):a.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){let e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){let n=Qp,i=tm;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new _),this.type!==ot.DYNAMIC)return;this.sleepState===ot.SLEEPING&&this.wakeUp();let n=nm;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new _),this.type!==ot.DYNAMIC)return;let n=im,i=sm;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ot.DYNAMIC&&(this.sleepState===ot.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new _),this.type!==ot.DYNAMIC)return;this.sleepState===ot.SLEEPING&&this.wakeUp();let n=e,i=rm;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);let s=om;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new _),this.type!==ot.DYNAMIC)return;let n=am,i=lm;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){let t=cm;this.invMass=this.mass>0?1/this.mass:0;let e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),ji.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){let n=new _;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ot.DYNAMIC||this.type===ot.KINEMATIC)||this.sleepState===ot.SLEEPING)return;let i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,a=this.torque,l=this.quaternion,u=this.invMass,d=this.invInertiaWorld,h=this.linearFactor,m=u*t;i.x+=o.x*m*h.x,i.y+=o.y*m*h.y,i.z+=o.z*m*h.z;let g=d.elements,p=this.angularFactor,f=a.x*p.x,v=a.y*p.y,x=a.z*p.z;s.x+=t*(g[0]*f+g[1]*v+g[2]*x),s.y+=t*(g[3]*f+g[4]*v+g[5]*x),s.z+=t*(g[6]*f+g[7]*v+g[8]*x),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}};ot.idCounter=0;ot.COLLIDE_EVENT_NAME="collide";ot.DYNAMIC=No.DYNAMIC;ot.STATIC=No.STATIC;ot.KINEMATIC=No.KINEMATIC;ot.AWAKE=Bo.AWAKE;ot.SLEEPY=Bo.SLEEPY;ot.SLEEPING=Bo.SLEEPING;ot.wakeupEvent={type:"wakeup"};ot.sleepyEvent={type:"sleepy"};ot.sleepEvent={type:"sleep"};var $p=new _,Jp=new qt,Kp=new ue,Qp=new Me,tm=new Me,em=new Me,nm=new _,im=new _,sm=new _,rm=new _,om=new _,am=new _,lm=new _,cm=new _,Eo=class{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&ot.STATIC)!==0||t.sleepState===ot.SLEEPING)&&((e.type&ot.STATIC)!==0||e.sleepState===ot.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){let s=hm;e.position.vsub(t.position,s);let r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){let n=um,i=dm,s=fm,r=t.length;for(let o=0;o!==r;o++)i[o]=t[o],s[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==r;o++){let a=i[o].id,l=s[o].id,u=a<l?`${a},${l}`:`${l},${a}`;n[u]=o,n.keys.push(u)}for(let o=0;o!==n.keys.length;o++){let a=n.keys.pop(),l=n[a];t.push(i[l]),e.push(s[l]),delete n[a]}}setWorld(t){}static boundingSphereCheck(t,e){let n=new _;t.position.vsub(e.position,n);let i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}},hm=new _;new _;new qt;new _;var um={keys:[]},dm=[],fm=[];new _;var l0=new _;new _;var Co=class extends Eo{constructor(){super()}collisionPairs(t,e,n){let i=t.bodies,s=i.length,r,o;for(let a=0;a!==s;a++)for(let l=0;l!==a;l++)r=i[a],o=i[l],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){let s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}},Ci=class{constructor(){this.rayFromWorld=new _,this.rayToWorld=new _,this.hitNormalWorld=new _,this.hitPointWorld=new _,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}},Bl,Ol,Ul,kl,Vl,Wl,Gl,Oo={CLOSEST:1,ANY:2,ALL:4};Bl=lt.types.SPHERE;Ol=lt.types.PLANE;Ul=lt.types.BOX;kl=lt.types.CYLINDER;Vl=lt.types.CONVEXPOLYHEDRON;Wl=lt.types.HEIGHTFIELD;Gl=lt.types.TRIMESH;var Ht=class{get[Bl](){return this._intersectSphere}get[Ol](){return this._intersectPlane}get[Ul](){return this._intersectBox}get[kl](){return this._intersectConvex}get[Vl](){return this._intersectConvex}get[Wl](){return this._intersectHeightfield}get[Gl](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new _),e===void 0&&(e=new _),this.from=t.clone(),this.to=e.clone(),this.direction=new _,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=Ht.ANY,this.result=new Ci,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||Ht.ANY,this.result=e.result||new Ci,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Tl),Mo.length=0,t.broadphase.aabbQuery(t,Tl,Mo),this.intersectBodies(Mo),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());let n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;let i=pm,s=mm;for(let r=0,o=t.shapes.length;r<o;r++){let a=t.shapes[r];if(!(n&&!a.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(a,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){let s=this.from;if(Im(s,this.direction,n)>t.boundingSphereRadius)return;let o=this[t.type];o&&o.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){let r=this.from,o=this.to,a=this.direction,l=new _(0,0,1);e.vmult(l,l);let u=new _;r.vsub(n,u);let d=u.dot(l);o.vsub(n,u);let h=u.dot(l);if(d*h>0||r.distanceTo(o)<d)return;let m=l.dot(a);if(Math.abs(m)<this.precision)return;let g=new _,p=new _,f=new _;r.vsub(n,g);let v=-l.dot(g)/m;a.scale(v,p),r.vadd(p,f),this.reportIntersection(l,f,s,i,-1)}getAABB(t){let{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;let r=gm;r.from.copy(this.from),r.to.copy(this.to),Ct.pointToLocalFrame(n,e,r.from,r.from),Ct.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();let o=xm,a,l,u,d;a=l=0,u=d=t.data.length-1;let h=new ue;r.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,o,!0),a=Math.max(a,o[0]),l=Math.max(l,o[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,o,!0),u=Math.min(u,o[0]+1),d=Math.min(d,o[1]+1);for(let m=a;m<u;m++)for(let g=l;g<d;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(m,g,h),!!h.overlapsRay(r)){if(t.getConvexTrianglePillar(m,g,!1),Ct.pointToWorldFrame(n,e,t.pillarOffset,Vs),this._intersectConvex(t.pillarConvex,e,Vs,i,s,El),this.result.shouldStop)return;t.getConvexTrianglePillar(m,g,!0),Ct.pointToWorldFrame(n,e,t.pillarOffset,Vs),this._intersectConvex(t.pillarConvex,e,Vs,i,s,El)}}}_intersectSphere(t,e,n,i,s){let r=this.from,o=this.to,a=t.radius,l=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,u=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),d=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-a**2,h=u**2-4*l*d,m=vm,g=ym;if(!(h<0))if(h===0)r.lerp(o,h,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1);else{let p=(-u-Math.sqrt(h))/(2*l),f=(-u+Math.sqrt(h))/(2*l);if(p>=0&&p<=1&&(r.lerp(o,p,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1)),this.result.shouldStop)return;f>=0&&f<=1&&(r.lerp(o,f,m),m.vsub(n,g),g.normalize(),this.reportIntersection(g,m,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){let o=_m,a=Cl,l=r&&r.faceList||null,u=t.faces,d=t.vertices,h=t.faceNormals,m=this.direction,g=this.from,p=this.to,f=g.distanceTo(p),v=l?l.length:u.length,x=this.result;for(let b=0;!x.shouldStop&&b<v;b++){let y=l?l[b]:b,M=u[y],T=h[y],I=e,w=n;a.copy(d[M[0]]),I.vmult(a,a),a.vadd(w,a),a.vsub(g,a),I.vmult(T,o);let C=m.dot(o);if(Math.abs(C)<this.precision)continue;let R=o.dot(a)/C;if(!(R<0)){m.scale(R,me),me.vadd(g,me),Ue.copy(d[M[0]]),I.vmult(Ue,Ue),w.vadd(Ue,Ue);for(let z=1;!x.shouldStop&&z<M.length-1;z++){Xe.copy(d[M[z]]),Ye.copy(d[M[z+1]]),I.vmult(Xe,Xe),I.vmult(Ye,Ye),w.vadd(Xe,Xe),w.vadd(Ye,Ye);let j=me.distanceTo(g);!(Ht.pointInTriangle(me,Ue,Xe,Ye)||Ht.pointInTriangle(me,Xe,Ue,Ye))||j>f||this.reportIntersection(o,me,s,i,y)}}}}_intersectTrimesh(t,e,n,i,s,r){let o=Mm,a=Pm,l=Lm,u=Cl,d=Sm,h=Am,m=Tm,g=Cm,p=Em,f=t.indices;t.vertices;let v=this.from,x=this.to,b=this.direction;l.position.copy(n),l.quaternion.copy(e),Ct.vectorToLocalFrame(n,e,b,d),Ct.pointToLocalFrame(n,e,v,h),Ct.pointToLocalFrame(n,e,x,m),m.x*=t.scale.x,m.y*=t.scale.y,m.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,m.vsub(h,d),d.normalize();let y=h.distanceSquared(m);t.tree.rayQuery(this,l,a);for(let M=0,T=a.length;!this.result.shouldStop&&M!==T;M++){let I=a[M];t.getNormal(I,o),t.getVertex(f[I*3],Ue),Ue.vsub(h,u);let w=d.dot(o),C=o.dot(u)/w;if(C<0)continue;d.scale(C,me),me.vadd(h,me),t.getVertex(f[I*3+1],Xe),t.getVertex(f[I*3+2],Ye);let R=me.distanceSquared(h);!(Ht.pointInTriangle(me,Xe,Ue,Ye)||Ht.pointInTriangle(me,Ue,Xe,Ye))||R>y||(Ct.vectorToWorldFrame(e,o,p),Ct.pointToWorldFrame(n,e,me,g),this.reportIntersection(p,g,s,i,I))}a.length=0}reportIntersection(t,e,n,i,s){let r=this.from,o=this.to,a=r.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case Ht.ALL:this.hasHit=!0,l.set(r,o,t,e,n,i,a),l.hasHit=!0,this.callback(l);break;case Ht.CLOSEST:(a<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(r,o,t,e,n,i,a));break;case Ht.ANY:this.hasHit=!0,l.hasHit=!0,l.set(r,o,t,e,n,i,a),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,qn),n.vsub(e,qi),t.vsub(e,So);let s=qn.dot(qn),r=qn.dot(qi),o=qn.dot(So),a=qi.dot(qi),l=qi.dot(So),u,d;return(u=a*o-r*l)>=0&&(d=s*l-r*o)>=0&&u+d<s*a-r*r}};Ht.CLOSEST=Oo.CLOSEST;Ht.ANY=Oo.ANY;Ht.ALL=Oo.ALL;var Tl=new ue,Mo=[],qi=new _,So=new _,pm=new _,mm=new qt,me=new _,Ue=new _,Xe=new _,Ye=new _;new _;new Ci;var El={faceList:[0]},Vs=new _,gm=new Ht,xm=[],vm=new _,ym=new _,_m=new _,wm=new _,bm=new _,Cl=new _,Mm=new _,Sm=new _,Am=new _,Tm=new _,Em=new _,Cm=new _;new ue;var Pm=[],Lm=new Ct,qn=new _,Ws=new _;function Im(c,t,e){e.vsub(c,qn);let n=qn.dot(t);return t.scale(n,Ws),Ws.vadd(c,Ws),e.distanceTo(Ws)}var Zs=class{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}},$i=class{constructor(t,e,n){n===void 0&&(n={}),n=Zs.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=$i.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){let t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}};$i.idCounter=0;var js=class{constructor(){this.spatial=new _,this.rotational=new _}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}},Yn=class{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Yn.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new js,this.jacobianElementB=new js,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){let i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){let i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,a=i.angularVelocity;return t.multiplyVectors(s,o)+e.multiplyVectors(r,a)}computeGWlambda(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,a=i.wlambda;return t.multiplyVectors(s,o)+e.multiplyVectors(r,a)}computeGiMf(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,a=i.torque,l=n.invMassSolve,u=i.invMassSolve;return s.scale(l,Pl),o.scale(u,Ll),n.invInertiaWorldSolve.vmult(r,Il),i.invInertiaWorldSolve.vmult(a,Rl),t.multiplyVectors(Pl,Il)+e.multiplyVectors(Ll,Rl)}computeGiMGt(){let t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve,l=s+r;return o.vmult(t.rotational,Gs),l+=Gs.dot(t.rotational),a.vmult(e.rotational,Gs),l+=Gs.dot(e.rotational),l}addToWlambda(t){let e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=Rm;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}};Yn.idCounter=0;var Pl=new _,Ll=new _,Il=new _,Rl=new _,Gs=new _,Rm=new _,Po=class extends Yn{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new _,this.rj=new _,this.ni=new _}computeB(t){let e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,a=Dm,l=Fm,u=i.velocity,d=i.angularVelocity;i.force,i.torque;let h=s.velocity,m=s.angularVelocity;s.force,s.torque;let g=zm,p=this.jacobianElementA,f=this.jacobianElementB,v=this.ni;r.cross(v,a),o.cross(v,l),v.negate(p.spatial),a.negate(p.rotational),f.spatial.copy(v),f.rotational.copy(l),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);let x=v.dot(g),b=this.restitution+1,y=b*h.dot(v)-b*u.dot(v)+m.dot(l)-d.dot(a),M=this.computeGiMf();return-x*e-y*n-t*M}getImpactVelocityAlongNormal(){let t=Nm,e=Bm,n=Om,i=Um,s=km;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}},Dm=new _,Fm=new _,zm=new _,Nm=new _,Bm=new _,Om=new _,Um=new _,km=new _;var c0=new _,h0=new _;var u0=new _,d0=new _;new _;new _;var f0=new _,p0=new _;var m0=new _,g0=new _,$s=class extends Yn{constructor(t,e,n){super(t,e,-n,n),this.ri=new _,this.rj=new _,this.t=new _}computeB(t){this.a;let e=this.b;this.bi,this.bj;let n=this.ri,i=this.rj,s=Vm,r=Wm,o=this.t;n.cross(o,s),i.cross(o,r);let a=this.jacobianElementA,l=this.jacobianElementB;o.negate(a.spatial),s.negate(a.rotational),l.spatial.copy(o),l.rotational.copy(r);let u=this.computeGW(),d=this.computeGiMf();return-u*e-t*d}},Vm=new _,Wm=new _,Pi=class{constructor(t,e,n){n=Zs.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Pi.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}};Pi.idCounter=0;var Li=class{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Li.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}};Li.idCounter=0;var x0=new _,v0=new _,y0=new _,_0=new _,w0=new _,b0=new _,M0=new _,S0=new _,A0=new _,T0=new _,E0=new _;var C0=new _,P0=new _;new _;new _;new _;var L0=new _,I0=new _,R0=new _;new Ht;new _;var D0=new _,F0=new _,z0=[new _(1,0,0),new _(0,1,0),new _(0,0,1)],N0=new _;var B0=new _,O0=new _,U0=new _;var k0=new _,V0=new _,W0=new _,G0=new _;var H0=new _,q0=new _,X0=new _;var Js=class extends lt{constructor(t){if(super({type:lt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new _);let n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){let s=this.radius,r=["x","y","z"];for(let o=0;o<r.length;o++){let a=r[o];n[a]=t[a]-s,i[a]=t[a]+s}}};var Y0=new _,Z0=new _;var j0=new _,$0=new _,J0=new _,K0=new _,Q0=new _,tx=new _,ex=new _;var nx=new _;var ix=new _,sx=new _,rx=new _,ox=new _,ax=new _,lx=new _,cx=new _,hx=new _,ux=new _;var dx=new _,fx=new ue;var px=new _,mx=new ue,gx=new _,xx=new _,vx=new _,yx=new _,_x=new _,wx=new _,bx=new _,Mx=new ue,Sx=new _,Ax=new Ct,Tx=new ue,Lo=class{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){let e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}},Io=class extends Lo{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0,i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,a=e.bodies,l=a.length,u=t,d,h,m,g,p,f;if(o!==0)for(let y=0;y!==l;y++)a[y].updateSolveMassProperties();let v=Hm,x=qm,b=Gm;v.length=o,x.length=o,b.length=o;for(let y=0;y!==o;y++){let M=r[y];b[y]=0,x[y]=M.computeB(u),v[y]=1/M.computeC()}if(o!==0){for(let T=0;T!==l;T++){let I=a[T],w=I.vlambda,C=I.wlambda;w.set(0,0,0),C.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let T=0;T!==o;T++){let I=r[T];d=x[T],h=v[T],f=b[T],p=I.computeGWlambda(),m=h*(d-p-I.eps*f),f+m<I.minForce?m=I.minForce-f:f+m>I.maxForce&&(m=I.maxForce-f),b[T]+=m,g+=m>0?m:-m,I.addToWlambda(m)}if(g*g<s)break}for(let T=0;T!==l;T++){let I=a[T],w=I.velocity,C=I.angularVelocity;I.vlambda.vmul(I.linearFactor,I.vlambda),w.vadd(I.vlambda,w),I.wlambda.vmul(I.angularFactor,I.wlambda),C.vadd(I.wlambda,C)}let y=r.length,M=1/u;for(;y--;)r[y].multiplier=b[y]*M}return n}},Gm=[],Hm=[],qm=[];var Ex=ot.STATIC;var Ro=class{constructor(){this.objects=[],this.type=Object}release(){let t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){let e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}},Do=class extends Ro{constructor(){super(...arguments),this.type=_}constructObject(){return new _}},kt={sphereSphere:lt.types.SPHERE,spherePlane:lt.types.SPHERE|lt.types.PLANE,boxBox:lt.types.BOX|lt.types.BOX,sphereBox:lt.types.SPHERE|lt.types.BOX,planeBox:lt.types.PLANE|lt.types.BOX,convexConvex:lt.types.CONVEXPOLYHEDRON,sphereConvex:lt.types.SPHERE|lt.types.CONVEXPOLYHEDRON,planeConvex:lt.types.PLANE|lt.types.CONVEXPOLYHEDRON,boxConvex:lt.types.BOX|lt.types.CONVEXPOLYHEDRON,sphereHeightfield:lt.types.SPHERE|lt.types.HEIGHTFIELD,boxHeightfield:lt.types.BOX|lt.types.HEIGHTFIELD,convexHeightfield:lt.types.CONVEXPOLYHEDRON|lt.types.HEIGHTFIELD,sphereParticle:lt.types.PARTICLE|lt.types.SPHERE,planeParticle:lt.types.PLANE|lt.types.PARTICLE,boxParticle:lt.types.BOX|lt.types.PARTICLE,convexParticle:lt.types.PARTICLE|lt.types.CONVEXPOLYHEDRON,cylinderCylinder:lt.types.CYLINDER,sphereCylinder:lt.types.SPHERE|lt.types.CYLINDER,planeCylinder:lt.types.PLANE|lt.types.CYLINDER,boxCylinder:lt.types.BOX|lt.types.CYLINDER,convexCylinder:lt.types.CONVEXPOLYHEDRON|lt.types.CYLINDER,heightfieldCylinder:lt.types.HEIGHTFIELD|lt.types.CYLINDER,particleCylinder:lt.types.PARTICLE|lt.types.CYLINDER,sphereTrimesh:lt.types.SPHERE|lt.types.TRIMESH,planeTrimesh:lt.types.PLANE|lt.types.TRIMESH},Fo=class{get[kt.sphereSphere](){return this.sphereSphere}get[kt.spherePlane](){return this.spherePlane}get[kt.boxBox](){return this.boxBox}get[kt.sphereBox](){return this.sphereBox}get[kt.planeBox](){return this.planeBox}get[kt.convexConvex](){return this.convexConvex}get[kt.sphereConvex](){return this.sphereConvex}get[kt.planeConvex](){return this.planeConvex}get[kt.boxConvex](){return this.boxConvex}get[kt.sphereHeightfield](){return this.sphereHeightfield}get[kt.boxHeightfield](){return this.boxHeightfield}get[kt.convexHeightfield](){return this.convexHeightfield}get[kt.sphereParticle](){return this.sphereParticle}get[kt.planeParticle](){return this.planeParticle}get[kt.boxParticle](){return this.boxParticle}get[kt.convexParticle](){return this.convexParticle}get[kt.cylinderCylinder](){return this.convexConvex}get[kt.sphereCylinder](){return this.sphereConvex}get[kt.planeCylinder](){return this.planeConvex}get[kt.boxCylinder](){return this.boxConvex}get[kt.convexCylinder](){return this.convexConvex}get[kt.heightfieldCylinder](){return this.heightfieldCylinder}get[kt.particleCylinder](){return this.particleCylinder}get[kt.sphereTrimesh](){return this.sphereTrimesh}get[kt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Do,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new Po(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;let a=this.currentContactMaterial;o.restitution=a.restitution,o.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);let l=n.material||t.material,u=i.material||e.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(o.restitution=l.restitution*u.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(t,e){let n=t.bi,i=t.bj,s=t.si,r=t.sj,o=this.world,a=this.currentContactMaterial,l=a.friction,u=s.material||n.material,d=r.material||i.material;if(u&&d&&u.friction>=0&&d.friction>=0&&(l=u.friction*d.friction),l>0){let h=l*o.gravity.length(),m=n.invMass+i.invMass;m>0&&(m=1/m);let g=this.frictionEquationPool,p=g.length?g.pop():new $s(n,i,h*m),f=g.length?g.pop():new $s(n,i,h*m);return p.bi=f.bi=n,p.bj=f.bj=i,p.minForce=f.minForce=-h*m,p.maxForce=f.maxForce=h*m,p.ri.copy(t.ri),p.rj.copy(t.rj),f.ri.copy(t.ri),f.rj.copy(t.rj),t.ni.tangents(p.t,f.t),p.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),f.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),p.enabled=f.enabled=t.enabled,e.push(p,f),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;let n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Hn.setZero(),Ti.setZero(),Ei.setZero();let s=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==s?(Hn.vadd(e.ni,Hn),Ti.vadd(e.ri,Ti),Ei.vadd(e.rj,Ei)):(Hn.vsub(e.ni,Hn),Ti.vadd(e.rj,Ti),Ei.vadd(e.ri,Ei));let r=1/t;Ti.scale(r,n.ri),Ei.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Hn.normalize(),Hn.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;let a=Zm,l=jm,u=Xm,d=Ym;for(let h=0,m=t.length;h!==m;h++){let g=t[h],p=e[h],f=null;g.material&&p.material&&(f=n.getContactMaterial(g.material,p.material)||null);let v=g.type&ot.KINEMATIC&&p.type&ot.STATIC||g.type&ot.STATIC&&p.type&ot.KINEMATIC||g.type&ot.KINEMATIC&&p.type&ot.KINEMATIC;for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],a),g.quaternion.vmult(g.shapeOffsets[x],u),u.vadd(g.position,u);let b=g.shapes[x];for(let y=0;y<p.shapes.length;y++){p.quaternion.mult(p.shapeOrientations[y],l),p.quaternion.vmult(p.shapeOffsets[y],d),d.vadd(p.position,d);let M=p.shapes[y];if(!(b.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&b.collisionFilterGroup)||u.distanceTo(d)>b.boundingSphereRadius+M.boundingSphereRadius)continue;let T=null;b.material&&M.material&&(T=n.getContactMaterial(b.material,M.material)||null),this.currentContactMaterial=T||f||n.defaultContactMaterial;let I=b.type|M.type,w=this[I];if(w){let C=!1;b.type<M.type?C=w.call(this,b,M,u,d,a,l,g,p,b,M,v):C=w.call(this,M,b,d,u,l,a,p,g,b,M,v),C&&v&&(n.shapeOverlapKeeper.set(b.id,M.id),n.bodyOverlapKeeper.set(g.id,p.id))}}}}}sphereSphere(t,e,n,i,s,r,o,a,l,u,d){if(d)return n.distanceSquared(i)<(t.radius+e.radius)**2;let h=this.createContactEquation(o,a,t,e,l,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(o.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(a.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,r,o,a,l,u,d){let h=this.createContactEquation(o,a,t,e,l,u);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,Hs),h.ni.scale(h.ni.dot(Hs),Dl),Hs.vsub(Dl,h.rj),-Hs.dot(h.ni)<=t.radius){if(d)return!0;let m=h.ri,g=h.rj;m.vadd(n,m),m.vsub(o.position,m),g.vadd(i,g),g.vsub(a.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,r,o,a,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,o,a,t,e,d)}sphereBox(t,e,n,i,s,r,o,a,l,u,d){let h=this.v3pool,m=wg;n.vsub(i,qs),e.getSideNormals(m,r);let g=t.radius,p=!1,f=Mg,v=Sg,x=Ag,b=null,y=0,M=0,T=0,I=null;for(let L=0,X=m.length;L!==X&&p===!1;L++){let k=vg;k.copy(m[L]);let N=k.length();k.normalize();let G=qs.dot(k);if(G<N+g&&G>0){let K=yg,W=_g;K.copy(m[(L+1)%3]),W.copy(m[(L+2)%3]);let tt=K.length(),ct=W.length();K.normalize(),W.normalize();let gt=qs.dot(K),$=qs.dot(W);if(gt<tt&&gt>-tt&&$<ct&&$>-ct){let It=Math.abs(G-N-g);if((I===null||It<I)&&(I=It,M=gt,T=$,b=N,f.copy(k),v.copy(K),x.copy(W),y++,d))return!0}}}if(y){p=!0;let L=this.createContactEquation(o,a,t,e,l,u);f.scale(-g,L.ri),L.ni.copy(f),L.ni.negate(L.ni),f.scale(b,f),v.scale(M,v),f.vadd(v,f),x.scale(T,x),f.vadd(x,L.rj),L.ri.vadd(n,L.ri),L.ri.vsub(o.position,L.ri),L.rj.vadd(i,L.rj),L.rj.vsub(a.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}let w=h.get(),C=bg;for(let L=0;L!==2&&!p;L++)for(let X=0;X!==2&&!p;X++)for(let k=0;k!==2&&!p;k++)if(w.set(0,0,0),L?w.vadd(m[0],w):w.vsub(m[0],w),X?w.vadd(m[1],w):w.vsub(m[1],w),k?w.vadd(m[2],w):w.vsub(m[2],w),i.vadd(w,C),C.vsub(n,C),C.lengthSquared()<g*g){if(d)return!0;p=!0;let N=this.createContactEquation(o,a,t,e,l,u);N.ri.copy(C),N.ri.normalize(),N.ni.copy(N.ri),N.ri.scale(g,N.ri),N.rj.copy(w),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(a.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}h.release(w),w=null;let R=h.get(),z=h.get(),j=h.get(),B=h.get(),P=h.get(),D=m.length;for(let L=0;L!==D&&!p;L++)for(let X=0;X!==D&&!p;X++)if(L%3!==X%3){m[X].cross(m[L],R),R.normalize(),m[L].vadd(m[X],z),j.copy(n),j.vsub(z,j),j.vsub(i,j);let k=j.dot(R);R.scale(k,B);let N=0;for(;N===L%3||N===X%3;)N++;P.copy(n),P.vsub(B,P),P.vsub(z,P),P.vsub(i,P);let G=Math.abs(k),K=P.length();if(G<m[N].length()&&K<g){if(d)return!0;p=!0;let W=this.createContactEquation(o,a,t,e,l,u);z.vadd(B,W.rj),W.rj.copy(W.rj),P.negate(W.ni),W.ni.normalize(),W.ri.copy(W.rj),W.ri.vadd(i,W.ri),W.ri.vsub(n,W.ri),W.ri.normalize(),W.ri.scale(g,W.ri),W.ri.vadd(n,W.ri),W.ri.vsub(o.position,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(a.position,W.rj),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult)}}h.release(R,z,j,B,P)}planeBox(t,e,n,i,s,r,o,a,l,u,d){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,o,a,t,e,d)}convexConvex(t,e,n,i,s,r,o,a,l,u,d,h,m){let g=kg;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,g,h,m)){let p=[],f=Vg;t.clipAgainstHull(n,s,e,i,r,g,-100,100,p);let v=0;for(let x=0;x!==p.length;x++){if(d)return!0;let b=this.createContactEquation(o,a,t,e,l,u),y=b.ri,M=b.rj;g.negate(b.ni),p[x].normal.negate(f),f.scale(p[x].depth,f),p[x].point.vadd(f,y),M.copy(p[x].point),y.vsub(n,y),M.vsub(i,M),y.vadd(n,y),y.vsub(o.position,y),M.vadd(i,M),M.vsub(a.position,M),this.result.push(b),v++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(b,this.frictionResult)}this.enableFrictionReduction&&v&&this.createFrictionFromAverage(v)}}sphereConvex(t,e,n,i,s,r,o,a,l,u,d){let h=this.v3pool;n.vsub(i,Tg);let m=e.faceNormals,g=e.faces,p=e.vertices,f=t.radius,v=!1;for(let x=0;x!==p.length;x++){let b=p[x],y=Lg;r.vmult(b,y),i.vadd(y,y);let M=Pg;if(y.vsub(n,M),M.lengthSquared()<f*f){if(d)return!0;v=!0;let T=this.createContactEquation(o,a,t,e,l,u);T.ri.copy(M),T.ri.normalize(),T.ni.copy(T.ri),T.ri.scale(f,T.ri),y.vsub(i,T.rj),T.ri.vadd(n,T.ri),T.ri.vsub(o.position,T.ri),T.rj.vadd(i,T.rj),T.rj.vsub(a.position,T.rj),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult);return}}for(let x=0,b=g.length;x!==b&&v===!1;x++){let y=m[x],M=g[x],T=Ig;r.vmult(y,T);let I=Rg;r.vmult(p[M[0]],I),I.vadd(i,I);let w=Dg;T.scale(-f,w),n.vadd(w,w);let C=Fg;w.vsub(I,C);let R=C.dot(T),z=zg;if(n.vsub(I,z),R<0&&z.dot(T)>0){let j=[];for(let B=0,P=M.length;B!==P;B++){let D=h.get();r.vmult(p[M[B]],D),i.vadd(D,D),j.push(D)}if(xg(j,T,n)){if(d)return!0;v=!0;let B=this.createContactEquation(o,a,t,e,l,u);T.scale(-f,B.ri),T.negate(B.ni);let P=h.get();T.scale(-R,P);let D=h.get();T.scale(-f,D),n.vsub(i,B.rj),B.rj.vadd(D,B.rj),B.rj.vadd(P,B.rj),B.rj.vadd(i,B.rj),B.rj.vsub(a.position,B.rj),B.ri.vadd(n,B.ri),B.ri.vsub(o.position,B.ri),h.release(P),h.release(D),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult);for(let L=0,X=j.length;L!==X;L++)h.release(j[L]);return}else for(let B=0;B!==M.length;B++){let P=h.get(),D=h.get();r.vmult(p[M[(B+1)%M.length]],P),r.vmult(p[M[(B+2)%M.length]],D),i.vadd(P,P),i.vadd(D,D);let L=Eg;D.vsub(P,L);let X=Cg;L.unit(X);let k=h.get(),N=h.get();n.vsub(P,N);let G=N.dot(X);X.scale(G,k),k.vadd(P,k);let K=h.get();if(k.vsub(n,K),G>0&&G*G<L.lengthSquared()&&K.lengthSquared()<f*f){if(d)return!0;let W=this.createContactEquation(o,a,t,e,l,u);k.vsub(i,W.rj),k.vsub(n,W.ni),W.ni.normalize(),W.ni.scale(f,W.ri),W.rj.vadd(i,W.rj),W.rj.vsub(a.position,W.rj),W.ri.vadd(n,W.ri),W.ri.vsub(o.position,W.ri),this.result.push(W),this.createFrictionEquationsFromContact(W,this.frictionResult);for(let tt=0,ct=j.length;tt!==ct;tt++)h.release(j[tt]);h.release(P),h.release(D),h.release(k),h.release(K),h.release(N);return}h.release(P),h.release(D),h.release(k),h.release(K),h.release(N)}for(let B=0,P=j.length;B!==P;B++)h.release(j[B])}}}planeConvex(t,e,n,i,s,r,o,a,l,u,d){let h=Ng,m=Bg;m.set(0,0,1),s.vmult(m,m);let g=0,p=Og;for(let f=0;f!==e.vertices.length;f++)if(h.copy(e.vertices[f]),r.vmult(h,h),i.vadd(h,h),h.vsub(n,p),m.dot(p)<=0){if(d)return!0;let x=this.createContactEquation(o,a,t,e,l,u),b=Ug;m.scale(m.dot(p),b),h.vsub(b,b),b.vsub(n,x.ri),x.ni.copy(m),h.vsub(i,x.rj),x.ri.vadd(n,x.ri),x.ri.vsub(o.position,x.ri),x.rj.vadd(i,x.rj),x.rj.vsub(a.position,x.rj),this.result.push(x),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(x,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,r,o,a,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,o,a,t,e,d)}sphereHeightfield(t,e,n,i,s,r,o,a,l,u,d){let h=e.data,m=t.radius,g=e.elementSize,p=Qg,f=Kg;Ct.pointToLocalFrame(i,r,n,f);let v=Math.floor((f.x-m)/g)-1,x=Math.ceil((f.x+m)/g)+1,b=Math.floor((f.y-m)/g)-1,y=Math.ceil((f.y+m)/g)+1;if(x<0||y<0||v>h.length||b>h[0].length)return;v<0&&(v=0),x<0&&(x=0),b<0&&(b=0),y<0&&(y=0),v>=h.length&&(v=h.length-1),x>=h.length&&(x=h.length-1),y>=h[0].length&&(y=h[0].length-1),b>=h[0].length&&(b=h[0].length-1);let M=[];e.getRectMinMax(v,b,x,y,M);let T=M[0],I=M[1];if(f.z-m>I||f.z+m<T)return;let w=this.result;for(let C=v;C<x;C++)for(let R=b;R<y;R++){let z=w.length,j=!1;if(e.getConvexTrianglePillar(C,R,!1),Ct.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(j=this.sphereConvex(t,e.pillarConvex,n,p,s,r,o,a,t,e,d)),d&&j||(e.getConvexTrianglePillar(C,R,!0),Ct.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(j=this.sphereConvex(t,e.pillarConvex,n,p,s,r,o,a,t,e,d)),d&&j))return!0;if(w.length-z>2)return}}boxHeightfield(t,e,n,i,s,r,o,a,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,o,a,t,e,d)}convexHeightfield(t,e,n,i,s,r,o,a,l,u,d){let h=e.data,m=e.elementSize,g=t.boundingSphereRadius,p=$g,f=Jg,v=jg;Ct.pointToLocalFrame(i,r,n,v);let x=Math.floor((v.x-g)/m)-1,b=Math.ceil((v.x+g)/m)+1,y=Math.floor((v.y-g)/m)-1,M=Math.ceil((v.y+g)/m)+1;if(b<0||M<0||x>h.length||y>h[0].length)return;x<0&&(x=0),b<0&&(b=0),y<0&&(y=0),M<0&&(M=0),x>=h.length&&(x=h.length-1),b>=h.length&&(b=h.length-1),M>=h[0].length&&(M=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);let T=[];e.getRectMinMax(x,y,b,M,T);let I=T[0],w=T[1];if(!(v.z-g>w||v.z+g<I))for(let C=x;C<b;C++)for(let R=y;R<M;R++){let z=!1;if(e.getConvexTrianglePillar(C,R,!1),Ct.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.convexConvex(t,e.pillarConvex,n,p,s,r,o,a,null,null,d,f,null)),d&&z||(e.getConvexTrianglePillar(C,R,!0),Ct.pointToWorldFrame(i,r,e.pillarOffset,p),n.distanceTo(p)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.convexConvex(t,e.pillarConvex,n,p,s,r,o,a,null,null,d,f,null)),d&&z))return!0}}sphereParticle(t,e,n,i,s,r,o,a,l,u,d){let h=qg;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(d)return!0;let g=this.createContactEquation(a,o,e,t,l,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,r,o,a,l,u,d){let h=Wg;h.set(0,0,1),o.quaternion.vmult(h,h);let m=Gg;if(i.vsub(o.position,m),h.dot(m)<=0){if(d)return!0;let p=this.createContactEquation(a,o,e,t,l,u);p.ni.copy(h),p.ni.negate(p.ni),p.ri.set(0,0,0);let f=Hg;h.scale(h.dot(i),f),i.vsub(f,f),p.rj.copy(f),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}}boxParticle(t,e,n,i,s,r,o,a,l,u,d){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,o,a,t,e,d)}convexParticle(t,e,n,i,s,r,o,a,l,u,d){let h=-1,m=Yg,g=Zg,p=null,f=Xg;if(f.copy(i),f.vsub(n,f),s.conjugate(Fl),Fl.vmult(f,f),t.pointIsInside(f)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let v=0,x=t.faces.length;v!==x;v++){let b=[t.worldVertices[t.faces[v][0]]],y=t.worldFaceNormals[v];i.vsub(b[0],zl);let M=-y.dot(zl);if(p===null||Math.abs(M)<Math.abs(p)){if(d)return!0;p=M,h=v,m.copy(y)}}if(h!==-1){let v=this.createContactEquation(a,o,e,t,l,u);m.scale(p,g),g.vadd(i,g),g.vsub(n,g),v.rj.copy(g),m.negate(v.ni),v.ri.set(0,0,0);let x=v.ri,b=v.rj;x.vadd(i,x),x.vsub(a.position,x),b.vadd(n,b),b.vsub(o.position,b),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,o,a,l,u,d){return this.convexHeightfield(e,t,i,n,r,s,a,o,l,u,d)}particleCylinder(t,e,n,i,s,r,o,a,l,u,d){return this.convexParticle(e,t,i,n,r,s,a,o,l,u,d)}sphereTrimesh(t,e,n,i,s,r,o,a,l,u,d){let h=ig,m=sg,g=rg,p=og,f=ag,v=lg,x=dg,b=ng,y=tg,M=fg;Ct.pointToLocalFrame(i,r,n,f);let T=t.radius;x.lowerBound.set(f.x-T,f.y-T,f.z-T),x.upperBound.set(f.x+T,f.y+T,f.z+T),e.getTrianglesInAABB(x,M);let I=eg,w=t.radius*t.radius;for(let B=0;B<M.length;B++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[M[B]*3+P],I),I.vsub(f,y),y.lengthSquared()<=w){if(b.copy(I),Ct.pointToWorldFrame(i,r,b,I),I.vsub(n,y),d)return!0;let D=this.createContactEquation(o,a,t,e,l,u);D.ni.copy(y),D.ni.normalize(),D.ri.copy(D.ni),D.ri.scale(t.radius,D.ri),D.ri.vadd(n,D.ri),D.ri.vsub(o.position,D.ri),D.rj.copy(I),D.rj.vsub(a.position,D.rj),this.result.push(D),this.createFrictionEquationsFromContact(D,this.frictionResult)}for(let B=0;B<M.length;B++)for(let P=0;P<3;P++){e.getVertex(e.indices[M[B]*3+P],h),e.getVertex(e.indices[M[B]*3+(P+1)%3],m),m.vsub(h,g),f.vsub(m,v);let D=v.dot(g);f.vsub(h,v);let L=v.dot(g);if(L>0&&D<0&&(f.vsub(h,v),p.copy(g),p.normalize(),L=v.dot(p),p.scale(L,v),v.vadd(h,v),v.distanceTo(f)<t.radius)){if(d)return!0;let k=this.createContactEquation(o,a,t,e,l,u);v.vsub(f,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(o.position,k.ri),Ct.pointToWorldFrame(i,r,v,v),v.vsub(a.position,k.rj),Ct.vectorToWorldFrame(r,k.ni,k.ni),Ct.vectorToWorldFrame(r,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}let C=cg,R=hg,z=ug,j=Qm;for(let B=0,P=M.length;B!==P;B++){e.getTriangleVertices(M[B],C,R,z),e.getNormal(M[B],j),f.vsub(C,v);let D=v.dot(j);if(j.scale(D,v),f.vsub(v,v),D=v.distanceTo(f),Ht.pointInTriangle(v,C,R,z)&&D<t.radius){if(d)return!0;let L=this.createContactEquation(o,a,t,e,l,u);v.vsub(f,L.ni),L.ni.normalize(),L.ni.scale(t.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(o.position,L.ri),Ct.pointToWorldFrame(i,r,v,v),v.vsub(a.position,L.rj),Ct.vectorToWorldFrame(r,L.ni,L.ni),Ct.vectorToWorldFrame(r,L.ri,L.ri),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}}M.length=0}planeTrimesh(t,e,n,i,s,r,o,a,l,u,d){let h=new _,m=$m;m.set(0,0,1),s.vmult(m,m);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);let p=new _;p.copy(h),Ct.pointToWorldFrame(i,r,p,h);let f=Jm;if(h.vsub(n,f),m.dot(f)<=0){if(d)return!0;let x=this.createContactEquation(o,a,t,e,l,u);x.ni.copy(m);let b=Km;m.scale(f.dot(m),b),h.vsub(b,b),x.ri.copy(b),x.ri.vsub(o.position,x.ri),x.rj.copy(h),x.rj.vsub(a.position,x.rj),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}}}},Hn=new _,Ti=new _,Ei=new _,Xm=new _,Ym=new _,Zm=new qt,jm=new qt,$m=new _,Jm=new _,Km=new _,Qm=new _,tg=new _;new _;var eg=new _,ng=new _,ig=new _,sg=new _,rg=new _,og=new _,ag=new _,lg=new _,cg=new _,hg=new _,ug=new _,dg=new ue,fg=[],Hs=new _,Dl=new _,pg=new _,mg=new _,gg=new _;function xg(c,t,e){let n=null,i=c.length;for(let s=0;s!==i;s++){let r=c[s],o=pg;c[(s+1)%i].vsub(r,o);let a=mg;o.cross(t,a);let l=gg;e.vsub(r,l);let u=a.dot(l);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}var qs=new _,vg=new _,yg=new _,_g=new _,wg=[new _,new _,new _,new _,new _,new _],bg=new _,Mg=new _,Sg=new _,Ag=new _,Tg=new _,Eg=new _,Cg=new _,Pg=new _,Lg=new _,Ig=new _,Rg=new _,Dg=new _,Fg=new _,zg=new _;new _;new _;var Ng=new _,Bg=new _,Og=new _,Ug=new _,kg=new _,Vg=new _,Wg=new _,Gg=new _,Hg=new _,qg=new _,Fl=new qt,Xg=new _;new _;var Yg=new _,zl=new _,Zg=new _,jg=new _,$g=new _,Jg=[0],Kg=new _,Qg=new _,Ks=class{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){let n=e;e=t,t=n}return t<<16|e}set(t,e){let n=this.getKey(t,e),i=this.current,s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){let t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){let n=this.current,i=this.previous,s=n.length,r=i.length,o=0;for(let a=0;a<s;a++){let l=!1,u=n[a];for(;u>i[o];)o++;l=u===i[o],l||Nl(t,u)}o=0;for(let a=0;a<r;a++){let l=!1,u=i[a];for(;u>n[o];)o++;l=n[o]===u,l||Nl(e,u)}}};function Nl(c,t){c.push((t&4294901760)>>16,t&65535)}var Ao=(c,t)=>c<t?`${c}-${t}`:`${t}-${c}`,zo=class{constructor(){this.data={keys:[]}}get(t,e){let n=Ao(t,e);return this.data[n]}set(t,e,n){let i=Ao(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){let n=Ao(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){let t=this.data,e=t.keys;for(;e.length>0;){let n=e.pop();delete t[n]}}},Qs=class extends Ys{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new _,t.gravity&&this.gravity.copy(t.gravity),this.broadphase=t.broadphase!==void 0?t.broadphase:new Co,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Io,this.constraints=[],this.narrowphase=new Fo(this),this.collisionMatrix=new Xs,this.collisionMatrixPrevious=new Xs,this.bodyOverlapKeeper=new Ks,this.shapeOverlapKeeper=new Ks,this.contactmaterials=[],this.contactMaterialTable=new zo,this.defaultMaterial=new Li("default"),this.defaultContactMaterial=new Pi(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){let t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){let e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Ci?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=Ht.ALL,n.from=t,n.to=e,n.callback=i,To.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=Ht.ANY,n.from=t,n.to=e,n.result=i,To.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=Ht.CLOSEST,n.from=t,n.to=e,n.result=i,To.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ot&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;let e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){let e=this.bodies;for(let n=0;n<e.length;n++){let i=e[n].shapes;for(let s=0;s<i.length;s++){let r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){let e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);let n=Qt.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{let i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;let i=Qt.now(),s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(Qt.now()-i>t*1e3)););this.accumulator=this.accumulator%t;let r=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){let a=this.bodies[o];a.previousPosition.lerp(a.position,r,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,r,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;let e=this.contacts,n=s0,i=r0,s=this.bodies.length,r=this.bodies,o=this.solver,a=this.gravity,l=this.doProfiling,u=this.profile,d=ot.DYNAMIC,h=-1/0,m=this.constraints,g=i0;a.length();let p=a.x,f=a.y,v=a.z,x=0;for(l&&(h=Qt.now()),x=0;x!==s;x++){let B=r[x];if(B.type===d){let P=B.force,D=B.mass;P.x+=D*p,P.y+=D*f,P.z+=D*v}}for(let B=0,P=this.subsystems.length;B!==P;B++)this.subsystems[B].update();l&&(h=Qt.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(u.broadphase=Qt.now()-h);let b=m.length;for(x=0;x!==b;x++){let B=m[x];if(!B.collideConnected)for(let P=n.length-1;P>=0;P-=1)(B.bodyA===n[P]&&B.bodyB===i[P]||B.bodyB===n[P]&&B.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),l&&(h=Qt.now());let y=n0,M=e.length;for(x=0;x!==M;x++)y.push(e[x]);e.length=0;let T=this.frictionEquations.length;for(x=0;x!==T;x++)g.push(this.frictionEquations[x]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,y,this.frictionEquations,g),l&&(u.narrowphase=Qt.now()-h),l&&(h=Qt.now()),x=0;x<this.frictionEquations.length;x++)o.addEquation(this.frictionEquations[x]);let I=e.length;for(let B=0;B!==I;B++){let P=e[B],D=P.bi,L=P.bj,X=P.si,k=P.sj,N;if(D.material&&L.material?N=this.getContactMaterial(D.material,L.material)||this.defaultContactMaterial:N=this.defaultContactMaterial,N.friction,D.material&&L.material&&(D.material.friction>=0&&L.material.friction>=0&&D.material.friction*L.material.friction,D.material.restitution>=0&&L.material.restitution>=0&&(P.restitution=D.material.restitution*L.material.restitution)),o.addEquation(P),D.allowSleep&&D.type===ot.DYNAMIC&&D.sleepState===ot.SLEEPING&&L.sleepState===ot.AWAKE&&L.type!==ot.STATIC){let G=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),K=L.sleepSpeedLimit**2;G>=K*2&&(D.wakeUpAfterNarrowphase=!0)}if(L.allowSleep&&L.type===ot.DYNAMIC&&L.sleepState===ot.SLEEPING&&D.sleepState===ot.AWAKE&&D.type!==ot.STATIC){let G=D.velocity.lengthSquared()+D.angularVelocity.lengthSquared(),K=D.sleepSpeedLimit**2;G>=K*2&&(L.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(D,L,!0),this.collisionMatrixPrevious.get(D,L)||(Xi.body=L,Xi.contact=P,D.dispatchEvent(Xi),Xi.body=D,L.dispatchEvent(Xi)),this.bodyOverlapKeeper.set(D.id,L.id),this.shapeOverlapKeeper.set(X.id,k.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=Qt.now()-h,h=Qt.now()),x=0;x!==s;x++){let B=r[x];B.wakeUpAfterNarrowphase&&(B.wakeUp(),B.wakeUpAfterNarrowphase=!1)}for(b=m.length,x=0;x!==b;x++){let B=m[x];B.update();for(let P=0,D=B.equations.length;P!==D;P++){let L=B.equations[P];o.addEquation(L)}}o.solve(t,this),l&&(u.solve=Qt.now()-h),o.removeAllEquations();let w=Math.pow;for(x=0;x!==s;x++){let B=r[x];if(B.type&d){let P=w(1-B.linearDamping,t),D=B.velocity;D.scale(P,D);let L=B.angularVelocity;if(L){let X=w(1-B.angularDamping,t);L.scale(X,L)}}}this.dispatchEvent(e0),l&&(h=Qt.now());let R=this.stepnumber%(this.quatNormalizeSkip+1)===0,z=this.quatNormalizeFast;for(x=0;x!==s;x++)r[x].integrate(t,R,z);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=Qt.now()-h),this.stepnumber+=1,this.dispatchEvent(t0);let j=!0;if(this.allowSleep)for(j=!1,x=0;x!==s;x++){let B=r[x];B.sleepTick(this.time),B.sleepState!==ot.SLEEPING&&(j=!0)}this.hasActiveBodies=j}emitContactEvents(){let t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ln,cn),t){for(let s=0,r=ln.length;s<r;s+=2)Yi.bodyA=this.getBodyById(ln[s]),Yi.bodyB=this.getBodyById(ln[s+1]),this.dispatchEvent(Yi);Yi.bodyA=Yi.bodyB=null}if(e){for(let s=0,r=cn.length;s<r;s+=2)Zi.bodyA=this.getBodyById(cn[s]),Zi.bodyB=this.getBodyById(cn[s+1]),this.dispatchEvent(Zi);Zi.bodyA=Zi.bodyB=null}ln.length=cn.length=0;let n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(ln,cn),n){for(let s=0,r=ln.length;s<r;s+=2){let o=this.getShapeById(ln[s]),a=this.getShapeById(ln[s+1]);hn.shapeA=o,hn.shapeB=a,o&&(hn.bodyA=o.body),a&&(hn.bodyB=a.body),this.dispatchEvent(hn)}hn.bodyA=hn.bodyB=hn.shapeA=hn.shapeB=null}if(i){for(let s=0,r=cn.length;s<r;s+=2){let o=this.getShapeById(cn[s]),a=this.getShapeById(cn[s+1]);un.shapeA=o,un.shapeB=a,o&&(un.bodyA=o.body),a&&(un.bodyB=a.body),this.dispatchEvent(un)}un.bodyA=un.bodyB=un.shapeA=un.shapeB=null}}clearForces(){let t=this.bodies,e=t.length;for(let n=0;n!==e;n++){let i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}};new ue;var To=new Ht,Qt=globalThis.performance||{};if(!Qt.now){let c=Date.now();Qt.timing&&Qt.timing.navigationStart&&(c=Qt.timing.navigationStart),Qt.now=()=>Date.now()-c}new _;var t0={type:"postStep"},e0={type:"preStep"},Xi={type:ot.COLLIDE_EVENT_NAME,body:null,contact:null},n0=[],i0=[],s0=[],r0=[],ln=[],cn=[],Yi={type:"beginContact",bodyA:null,bodyB:null},Zi={type:"endContact",bodyA:null,bodyB:null},hn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},un={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};window.addEventListener("load",async()=>{var g;let c=new Wi;c.setSize(window.innerWidth,window.innerHeight),(g=document.querySelector("body"))==null||g.appendChild(c.domElement);let t=new le(45,window.innerWidth/window.innerHeight,.1,500);t.position.set(40,40,40),t.setFocalLength(20),t.lookAt(new O(0,0,0));let e=new Fs;e.background=new zt(10066329);let n=new on(1,1,1),i=new bi({color:65280}),s=new Ce(n,i);s.position.set(10,10,10),e.add(s),e.add(new Bs(100));let r=new Qs;r.gravity.set(0,-9.82,0);let o=new Js(.5),a=new ot({mass:1,position:new _(10,10,10),shape:o});r.addBody(a);let l=new _(-500,350,0);a.applyForce(l);let u=new Ns,d=0,h=()=>{let p=u.getElapsedTime(),f=p-d;d=p,r.step(1/60,f,3),console.log(a.position.y),s.position.copy(new O(a.position.x,a.position.y,a.position.z))};c.render(e,t);function m(){requestAnimationFrame(m),h(),c.render(e,t)}m()});})();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */