(function(){var e=Object.defineProperty,t=(e,t)=>()=>(e&&(t=e(e=0)),t),n=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r},r=n({InferenceSession:()=>Ae,TRACE:()=>Ce,TRACE_FUNC_BEGIN:()=>Te,TRACE_FUNC_END:()=>Ee,Tensor:()=>xe,default:()=>Td,env:()=>C,registerBackend:()=>h}),i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,ee,te,C,ne,re,ie,ae,oe,se,ce,le,ue,de,fe,pe,me,w,T,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,E,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,D,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,O,pn,mn,hn,gn,k,_n,vn,yn,bn,A,xn,Sn,Cn,wn,j,Tn,M,N,En,Dn,On,kn,P,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,F,I,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,L,R,Jr,z,B,V,H,Yr,Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi,si,ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi,yi,bi,xi,Si,Ci,wi,Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Ni,Pi,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui,Wi,Gi,Ki,qi,Ji,Yi,Xi,Zi,Qi,$i,ea,ta,na,ra,ia,aa,oa,sa,ca,la,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba,xa,Sa,Ca,wa,Ta,Ea,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra,za,Ba,Va,Ha,Ua,Wa,Ga,Ka,qa,Ja,Ya,Xa,Za,Qa,$a,eo,to,no,ro,io,ao,oo,so,co,lo,uo,fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo,Qo,$o,es,ts,ns,rs,is,as,os,ss,cs,ls,us,ds,fs,ps,ms,hs,gs,_s,vs,ys,bs,xs,Ss,Cs,ws,Ts,Es,Ds,Os,ks,As,js,Ms,Ns,Ps,Fs,Is,Ls,Rs,zs,Bs,Vs,Hs,Us,Ws,Gs,Ks,qs,Js,Ys,Xs,Zs,Qs,$s,ec,tc,nc,rc,ic,ac,oc,sc,cc,lc,uc,dc,fc,pc,mc,hc,gc,_c,vc,yc,bc,xc,Sc,Cc,wc,Tc,Ec,Dc,Oc,kc,Ac,jc,Mc,Nc,Pc,Fc,Ic,Lc,Rc,zc,Bc,Vc,Hc,Uc,Wc,Gc,Kc,qc,Jc,Yc,Xc,Zc,Qc,$c,el,tl,nl,rl,il,al,ol,sl,cl,ll,ul,dl,fl,pl,ml,hl,gl,_l,vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl,Al,jl,Ml,Nl,Pl,Fl,Il,Ll,Rl,zl,Bl,Vl,Hl,Ul,Wl,Gl,Kl,ql,Jl,Yl,Xl,Zl,Ql,$l,eu,tu,nu,ru,iu,au,ou,su,cu,lu,uu,du,fu,pu,mu,hu,gu,_u,vu,yu,bu,xu,Su,Cu,wu,Tu,Eu,Du,Ou,ku,Au,ju,Mu,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu,Uu,Wu,Gu,Ku,qu,Ju,Yu,Xu,Zu,Qu,$u,ed,td,nd,rd,id,ad,od,sd,cd,ld,ud,dd,fd,pd,md,hd,gd,_d,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed=t((()=>{
/*!
* ONNX Runtime Web v1.21.0
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License.
*/
i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,c=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),l=(e,t)=>()=>(e&&(t=e(e=0)),t),u=(e,t)=>{for(var n in t)i(e,n,{get:t[n],enumerable:!0})},d=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let c of o(t))!s.call(e,c)&&c!==n&&i(e,c,{get:()=>t[c],enumerable:!(r=a(t,c))||r.enumerable});return e},f=e=>d(i({},`__esModule`,{value:!0}),e),v=l(()=>{"use strict";p=new Map,m=[],h=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=p.get(e);if(r===void 0)p.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=m.indexOf(e);t!==-1&&m.splice(t,1);for(let t=0;t<m.length;t++)if(p.get(m[t]).priority<=n){m.splice(t,0,e);return}m.push(e)}return}throw TypeError(`not a valid backend`)},g=async e=>{let t=p.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},_=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?m:n,i,a=[],o=new Set;for(let e of r){let t=await g(e);typeof t==`string`?a.push({name:e,err:t}):(i||=t,i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),y=l(()=>{"use strict";v()}),x=l(()=>{"use strict";b=`1.21.0`}),te=l(()=>{"use strict";x(),S=`warning`,ee={wasm:{},webgl:{},webgpu:{},versions:{common:b},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);S=e}},get logLevel(){return S}},Object.defineProperty(ee,`logLevel`,{enumerable:!0})}),ne=l(()=>{"use strict";te(),C=ee}),ae=l(()=>{"use strict";re=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}else throw Error(`Can not access image data`)},ie=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),fe=l(()=>{"use strict";be(),oe=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new ye(`float32`,u,[1,4,n,r]):new ye(`float32`,u,[1,3,n,r])},se=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,oe(o,s)}else throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t(oe(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return oe(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},ce=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new ye({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},le=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new ye({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},ue=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new ye({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},de=(e,t,n)=>new ye({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),he=l(()=>{"use strict";pe=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),me=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),w=!1,T=()=>{if(!w){w=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(pe.set(`int64`,BigInt64Array),me.set(BigInt64Array,`int64`)),t&&(pe.set(`uint64`,BigUint64Array),me.set(BigUint64Array,`uint64`)),r?(pe.set(`float16`,n),me.set(n,`float16`)):pe.set(`float16`,Uint16Array)}}}),ve=l(()=>{"use strict";be(),ge=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},_e=(e,t)=>{switch(e.location){case`cpu`:return new ye(e.type,e.data,t);case`cpu-pinned`:return new ye({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new ye({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new ye({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new ye({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),be=l(()=>{"use strict";ae(),fe(),he(),ve(),ye=class{constructor(e,t,n){T();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=pe.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`)if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=pe.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray)if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=me.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=ge(i);if(this.cpuData&&a!==this.cpuData.length&&!((r===`uint4`||r===`int4`)&&Math.ceil(a/2)===this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return se(e,t)}static fromTexture(e,t){return ce(e,t)}static fromGpuBuffer(e,t){return le(e,t)}static fromMLTensor(e,t){return ue(e,t)}static fromPinnedBuffer(e,t,n){return de(e,t,n)}toDataURL(e){return re(this,e)}toImageData(e){return ie(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&=(this.disposer(),void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return _e(this,e)}}}),Se=l(()=>{"use strict";be(),xe=ye}),De=l(()=>{"use strict";te(),Ce=(e,t)=>{(typeof ee.trace>`u`?!ee.wasm.trace:!ee.trace)||console.timeStamp(`${e}::ORT::${t}`)},we=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),Ce(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},Te=e=>{(typeof ee.trace>`u`?!ee.wasm.trace:!ee.trace)||we(`BEGIN`,e)},Ee=e=>{(typeof ee.trace>`u`?!ee.wasm.trace:!ee.trace)||we(`END`,e)}}),ke=l(()=>{"use strict";v(),Se(),De(),Oe=class e{constructor(e){this.handler=e}async run(e,t,n){Te();let r={},i={};if(typeof e!=`object`||!e||e instanceof xe||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof xe)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof xe)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];t instanceof xe?s[e]=t:s[e]=new xe(t.type,t.data,t.dims)}return Ee(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){Te();let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await _(o),l=await s.createInferenceSessionHandler(a,c);return Ee(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),je=l(()=>{"use strict";ke(),Ae=Oe}),Me=l(()=>{"use strict";}),Ne=l(()=>{"use strict";}),Pe=l(()=>{"use strict";}),E=l(()=>{"use strict";}),Fe={},u(Fe,{InferenceSession:()=>Ae,TRACE:()=>Ce,TRACE_FUNC_BEGIN:()=>Te,TRACE_FUNC_END:()=>Ee,Tensor:()=>xe,env:()=>C,registerBackend:()=>h}),Ie=l(()=>{"use strict";y(),ne(),je(),Se(),Me(),Ne(),De(),Pe(),E()}),Le=l(()=>{"use strict";}),Re={},u(Re,{default:()=>Ve}),He=l(()=>{"use strict";Yu(),_t(),ct(),ze=`ort-wasm-proxy-worker`,Be=globalThis.self?.name===ze,Be&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:ht(n.wasm).then(()=>{Ru(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;zu(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=Hu(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;Uu(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:Wu(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;Ku(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},Ju([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:qu(n),postMessage({type:t});break;default:}}catch(e){postMessage({type:t,err:e})}}),Ve=Be?null:e=>new Worker(e??Ze,{type:`module`,name:ze})}),Ue={},u(Ue,{default:()=>Ke}),Je=l(()=>{"use strict";Ge=(We=self.location.href,async function(e={}){var t,n,r=e,i=new Promise((e,r)=>{t=e,n=r}),a=typeof window==`object`,o=typeof WorkerGlobalScope<`u`,s=o&&self.name?.startsWith(`em-pthread`);r.mountExternalData=(e,t)=>{e.startsWith(`./`)&&(e=e.substring(2)),(r.Bd||=new Map).set(e,t)},r.unmountExternalData=()=>{delete r.Bd};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let l=()=>{let e=(e,t,n)=>(...r)=>{let i=A,a=t?.();r=e(...r);let o=t?.();return a!==o&&(e=o,n(a),t=n=null),A==i?r:new Promise((e,t)=>{Tn={resolve:e,reject:t}})},t=e=>async(...t)=>{try{if(r.Cd)throw Error(`Session already started`);let n=r.Cd={be:t[0],errors:[]},i=await e(...t);if(r.Cd!==n)throw Error(`Session mismatch`);r.Dd?.flush();let a=n.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{r.Cd=null}};r._OrtCreateSession=e(r._OrtCreateSession,()=>r._OrtCreateSession,e=>r._OrtCreateSession=e),r._OrtRun=t(e(r._OrtRun,()=>r._OrtRun,e=>r._OrtRun=e)),r._OrtRunWithBinding=t(e(r._OrtRunWithBinding,()=>r._OrtRunWithBinding,e=>r._OrtRunWithBinding=e)),r._OrtBindInput=e(r._OrtBindInput,()=>r._OrtBindInput,e=>r._OrtBindInput=e),l=void 0};r.jsepInit=(e,t)=>{if(l?.(),e===`webgpu`){[r.Dd,r.Rd,r.Vd,r.Hd,r.Ud,r.hc,r.Wd,r.Zd,r.Sd,r.Td,r.Xd]=t;let e=r.Dd;r.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),r.jsepGetBuffer=t=>e.getBuffer(t),r.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),r.jsepOnCreateSession=t=>{e.onCreateSession(t)},r.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},r.jsepOnRunStart=t=>e.onRunStart(t),r.$d=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){[r.Dd,r.Yd,r.Id,r.jsepEnsureTensor,r.Jd,r.jsepDownloadTensor]=t,r.jsepReleaseTensorId=r.Id,r.jsepUploadTensor=r.Jd;let e=r.Dd;r.jsepOnRunStart=t=>e.onRunStart(t),r.jsepOnRunEnd=e.onRunEnd.bind(e),r.jsepRegisterMLContext=(t,n)=>{e.registerMLContext(t,n)},r.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},r.jsepCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),r.jsepRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),r.jsepCreateMLContext=t=>e.createMLContext(t),r.jsepRegisterMLConstant=(t,n,i,a,o)=>e.registerMLConstant(t,n,i,a,o,r.Bd),r.jsepRegisterGraphInput=e.registerGraphInput.bind(e),r.jsepIsGraphInput=e.isGraphInput.bind(e),r.jsepCreateTemporaryTensor=e.createTemporaryTensor.bind(e)}};var u,d,f=Object.assign({},r),p=(e,t)=>{throw t},m=``;(a||o)&&(o?m=self.location.href:typeof document<`u`&&document.currentScript&&(m=document.currentScript.src),We&&(m=We),m=m.startsWith(`blob:`)?``:m.slice(0,m.replace(/[?#].*/,``).lastIndexOf(`/`)+1),o&&(d=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),u=async e=>{if(ue(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)});var h=console.log.bind(console),g=console.error.bind(console),_=h,v=g;Object.assign(r,f),f=null;var y,b,x,S,ee,te,C,ne,re,ie,ae,oe,se,ce=r.wasmBinary,le=!1,ue=e=>e.startsWith(`file://`);function de(){return y.buffer!=S.buffer&&ye(),S}function fe(){return y.buffer!=S.buffer&&ye(),ee}function pe(){return y.buffer!=S.buffer&&ye(),te}function me(){return y.buffer!=S.buffer&&ye(),C}function w(){return y.buffer!=S.buffer&&ye(),ne}function T(){return y.buffer!=S.buffer&&ye(),re}function he(){return y.buffer!=S.buffer&&ye(),ie}function ge(){return y.buffer!=S.buffer&&ye(),se}if(s){let e=function(t){try{var n=t.data,i=n.yd;if(i===`load`){let t=[];self.onmessage=e=>t.push(e),self.startWorker=()=>{postMessage({yd:`loaded`});for(let n of t)e(n);self.onmessage=e};for(let e of n.Od)r[e]&&!r[e].proxy||(r[e]=(...t)=>{postMessage({yd:`callHandler`,Nd:e,args:t})},e==`print`&&(_=r[e]),e==`printErr`&&(v=r[e]));y=n.he,ye(),_e(n.ie)}else if(i===`run`){qe(n.xd),Hr(n.xd,0,0,1,0,0),Ue(),ln(n.xd),ve||=(Rr(),!0);try{Je(n.de,n.Fd)}catch(e){if(e!=`unwind`)throw e}}else n.target!==`setimmediate`&&(i===`checkMailbox`?ve&&un():i&&(v(`worker: received unknown command ${i}`),v(n)))}catch(e){throw Ur(),e}};var _e,ve=!1;v=function(...e){e=e.join(` `),console.error(e)},self.alert=function(...e){postMessage({yd:`alert`,text:e.join(` `),fe:zr()})},self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}function ye(){var e=y.buffer;r.HEAP8=S=new Int8Array(e),r.HEAP16=te=new Int16Array(e),r.HEAPU8=ee=new Uint8Array(e),r.HEAPU16=C=new Uint16Array(e),r.HEAP32=ne=new Int32Array(e),r.HEAPU32=re=new Uint32Array(e),r.HEAPF32=ie=new Float32Array(e),r.HEAPF64=se=new Float64Array(e),r.HEAP64=ae=new BigInt64Array(e),r.HEAPU64=oe=new BigUint64Array(e)}function be(){s?startWorker(r):I.Bb()}s||(y=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ye());var xe,Se=0,Ce=null;function we(){if(--Se==0&&Ce){var e=Ce;Ce=null,e()}}function Te(e){throw v(e=`Aborted(`+e+`)`),le=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),n(e),e}function Ee(){return{a:{Ta:ke,Va:Oe,W:Xe,la:Qe,b:nt,u:rt,R:it,Za:at,d:ot,pb:ct,g:et,T:ft,Ga:pt,lb:gt,nb:_t,Ha:vt,Ea:yt,wb:bt,Da:xt,pa:St,mb:Ct,jb:wt,Fa:Tt,kb:Et,Ma:kt,za:It,eb:D,cb:Gt,ya:qt,V:Jt,N:Yt,db:Xt,ma:an,fb:on,zb:sn,hb:dn,qb:O,ab:pn,Aa:mn,yb:ln,Ja:hn,S:_n,Wa:vn,$:En,G:On,E:An,m:Bt,H:Mn,B:In,X:Ln,J:Rn,v:zn,O:Bn,D:Vn,t:Hn,A:Un,z:Wn,w:Gn,r:Kn,tb:qn,ub:Zn,vb:Qn,rb:$n,sb:er,bb:rr,Oa:ir,La:sr,y:ur,ja:dr,Ba:fr,Ka:ar,qa:pr,Ia:mr,ib:hr,U:nr,fa:gr,Sa:_r,gb:vr,Qa:Sr,Pa:Cr,Ab:Dr,Ca:Or,ob:Le,aa:kr,oa:Ar,xb:jr,na:Nr,$a:_a,ia:Aa,sa:Fa,ga:ha,da:Ca,ua:Na,p:pa,e:Zi,c:Yi,ea:xa,f:Qi,n:ea,k:la,Y:na,ka:ua,j:ma,wa:ba,Ra,ca:Oa,Ua:La,P:Sa,K:ia,_:Da,Q:ga,Z:ja,x:ra,l:Xi,va:Ea,i:Ji,h:ta,ra:Ia,ta:Pa,o:$i,q:aa,s:sa,I:ca,C:fa,L:da,xa:ya,_a:va,F:ka,Ya:wa,ba:Ma,M:oa,Xa:Ta,ha:Pr,a:y,Na:Fe}}}var De={1319426:()=>typeof wasmOffsetConverter<`u`,1319483:(e,t,n,i,a)=>{if(r===void 0||!r.Bd)return 1;if((e=dt(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=r.Bd.get(e)))return 2;if(t=Number(t>>>0),n=Number(n>>>0),i=Number(i>>>0),t+n>e.byteLength)return 3;try{let o=e.subarray(t,t+n);switch(a){case 0:fe().set(o,i>>>0);break;case 1:r.$d(i,o);break;default:return 4}return 0}catch{return 4}},1320198:(e,t,n)=>{r.Jd(e,fe().subarray(t>>>0,t+n>>>0))},1320261:()=>r.Yd(),1320302:e=>{r.Id(e)},1320338:()=>{r.Sd()},1320369:()=>{r.Td()},1320398:()=>{r.Xd()},1320423:e=>r.Rd(e),1320456:e=>r.Vd(e),1320488:(e,t,n)=>{r.Hd(Number(e),Number(t),Number(n),!0)},1320551:(e,t,n)=>{r.Hd(Number(e),Number(t),Number(n))},1320608:e=>{r.hc(`Abs`,e,void 0)},1320659:e=>{r.hc(`Neg`,e,void 0)},1320710:e=>{r.hc(`Floor`,e,void 0)},1320763:e=>{r.hc(`Ceil`,e,void 0)},1320815:e=>{r.hc(`Reciprocal`,e,void 0)},1320873:e=>{r.hc(`Sqrt`,e,void 0)},1320925:e=>{r.hc(`Exp`,e,void 0)},1320976:e=>{r.hc(`Erf`,e,void 0)},1321027:e=>{r.hc(`Sigmoid`,e,void 0)},1321082:(e,t,n)=>{r.hc(`HardSigmoid`,e,{alpha:t,beta:n})},1321161:e=>{r.hc(`Log`,e,void 0)},1321212:e=>{r.hc(`Sin`,e,void 0)},1321263:e=>{r.hc(`Cos`,e,void 0)},1321314:e=>{r.hc(`Tan`,e,void 0)},1321365:e=>{r.hc(`Asin`,e,void 0)},1321417:e=>{r.hc(`Acos`,e,void 0)},1321469:e=>{r.hc(`Atan`,e,void 0)},1321521:e=>{r.hc(`Sinh`,e,void 0)},1321573:e=>{r.hc(`Cosh`,e,void 0)},1321625:e=>{r.hc(`Asinh`,e,void 0)},1321678:e=>{r.hc(`Acosh`,e,void 0)},1321731:e=>{r.hc(`Atanh`,e,void 0)},1321784:e=>{r.hc(`Tanh`,e,void 0)},1321836:e=>{r.hc(`Not`,e,void 0)},1321887:(e,t,n)=>{r.hc(`Clip`,e,{min:t,max:n})},1321956:e=>{r.hc(`Clip`,e,void 0)},1322008:(e,t)=>{r.hc(`Elu`,e,{alpha:t})},1322066:e=>{r.hc(`Gelu`,e,void 0)},1322118:e=>{r.hc(`Relu`,e,void 0)},1322170:(e,t)=>{r.hc(`LeakyRelu`,e,{alpha:t})},1322234:(e,t)=>{r.hc(`ThresholdedRelu`,e,{alpha:t})},1322304:(e,t)=>{r.hc(`Cast`,e,{to:t})},1322362:e=>{r.hc(`Add`,e,void 0)},1322413:e=>{r.hc(`Sub`,e,void 0)},1322464:e=>{r.hc(`Mul`,e,void 0)},1322515:e=>{r.hc(`Div`,e,void 0)},1322566:e=>{r.hc(`Pow`,e,void 0)},1322617:e=>{r.hc(`Equal`,e,void 0)},1322670:e=>{r.hc(`Greater`,e,void 0)},1322725:e=>{r.hc(`GreaterOrEqual`,e,void 0)},1322787:e=>{r.hc(`Less`,e,void 0)},1322839:e=>{r.hc(`LessOrEqual`,e,void 0)},1322898:(e,t,n,i,a)=>{r.hc(`ReduceMean`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323073:(e,t,n,i,a)=>{r.hc(`ReduceMax`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323247:(e,t,n,i,a)=>{r.hc(`ReduceMin`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323421:(e,t,n,i,a)=>{r.hc(`ReduceProd`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323596:(e,t,n,i,a)=>{r.hc(`ReduceSum`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323770:(e,t,n,i,a)=>{r.hc(`ReduceL1`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323943:(e,t,n,i,a)=>{r.hc(`ReduceL2`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324116:(e,t,n,i,a)=>{r.hc(`ReduceLogSum`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324293:(e,t,n,i,a)=>{r.hc(`ReduceSumSquare`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324473:(e,t,n,i,a)=>{r.hc(`ReduceLogSumExp`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324653:e=>{r.hc(`Where`,e,void 0)},1324706:(e,t,n)=>{r.hc(`Transpose`,e,{perm:t?Array.from(w().subarray(Number(t)>>>0,Number(n)>>>0)):[]})},1324830:(e,t,n,i)=>{r.hc(`DepthToSpace`,e,{blocksize:t,mode:dt(n),format:i?`NHWC`:`NCHW`})},1324963:(e,t,n,i)=>{r.hc(`DepthToSpace`,e,{blocksize:t,mode:dt(n),format:i?`NHWC`:`NCHW`})},1325096:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h)=>{r.hc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:t,dilations:[n],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!de()[u>>>0],outputPadding:d?Array.from(w().subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from(w().subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:dt(h)})},1325529:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:t,dilations:Array.from(w().subarray(Number(n)>>>0,2+(Number(n)>>>0)>>>0)),group:i,kernelShape:Array.from(w().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from(w().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(w().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!de()[l>>>0],outputPadding:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:dt(m)})},1326190:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h)=>{r.hc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:t,dilations:[n],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!de()[u>>>0],outputPadding:d?Array.from(w().subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from(w().subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:dt(h)})},1326623:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:t,dilations:Array.from(w().subarray(Number(n)>>>0,2+(Number(n)>>>0)>>>0)),group:i,kernelShape:Array.from(w().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from(w().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(w().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!de()[l>>>0],outputPadding:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:dt(m)})},1327284:(e,t)=>{r.hc(`GlobalAveragePool`,e,{format:t?`NHWC`:`NCHW`})},1327375:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1327854:(e,t)=>{r.hc(`GlobalAveragePool`,e,{format:t?`NHWC`:`NCHW`})},1327945:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1328424:(e,t)=>{r.hc(`GlobalMaxPool`,e,{format:t?`NHWC`:`NCHW`})},1328511:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1328986:(e,t)=>{r.hc(`GlobalMaxPool`,e,{format:t?`NHWC`:`NCHW`})},1329073:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1329548:(e,t,n,i,a)=>{r.hc(`Gemm`,e,{alpha:t,beta:n,transA:i,transB:a})},1329652:e=>{r.hc(`MatMul`,e,void 0)},1329706:(e,t,n,i)=>{r.hc(`ArgMax`,e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},1329814:(e,t,n,i)=>{r.hc(`ArgMin`,e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},1329922:(e,t)=>{r.hc(`Softmax`,e,{axis:t})},1329985:(e,t)=>{r.hc(`Concat`,e,{axis:t})},1330045:(e,t,n,i,a)=>{r.hc(`Split`,e,{axis:t,numOutputs:n,splitSizes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1330201:e=>{r.hc(`Expand`,e,void 0)},1330255:(e,t)=>{r.hc(`Gather`,e,{axis:Number(t)})},1330326:(e,t)=>{r.hc(`GatherElements`,e,{axis:Number(t)})},1330405:(e,t)=>{r.hc(`GatherND`,e,{batch_dims:Number(t)})},1330484:(e,t,n,i,a,o,s,c,l,u,d)=>{r.hc(`Resize`,e,{antialias:t,axes:n?Array.from(w().subarray(Number(n)>>>0,Number(i)>>>0)):[],coordinateTransformMode:dt(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:dt(l),mode:dt(u),nearestMode:dt(d)})},1330846:(e,t,n,i,a,o,s)=>{r.hc(`Slice`,e,{starts:t?Array.from(w().subarray(Number(t)>>>0,Number(n)>>>0)):[],ends:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[]})},1331110:e=>{r.hc(`Tile`,e,void 0)},1331162:(e,t,n)=>{r.hc(`InstanceNormalization`,e,{epsilon:t,format:n?`NHWC`:`NCHW`})},1331276:(e,t,n)=>{r.hc(`InstanceNormalization`,e,{epsilon:t,format:n?`NHWC`:`NCHW`})},1331390:e=>{r.hc(`Range`,e,void 0)},1331443:(e,t)=>{r.hc(`Einsum`,e,{equation:dt(t)})},1331524:(e,t,n,i,a)=>{r.hc(`Pad`,e,{mode:t,value:n,pads:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1331667:(e,t,n,i,a,o)=>{r.hc(`BatchNormalization`,e,{epsilon:t,momentum:n,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1331836:(e,t,n,i,a,o)=>{r.hc(`BatchNormalization`,e,{epsilon:t,momentum:n,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1332005:(e,t,n)=>{r.hc(`CumSum`,e,{exclusive:Number(t),reverse:Number(n)})},1332102:(e,t,n)=>{r.hc(`DequantizeLinear`,e,{axis:t,blockSize:n})},1332192:(e,t,n,i,a)=>{r.hc(`GridSample`,e,{align_corners:t,mode:dt(n),padding_mode:dt(i),format:a?`NHWC`:`NCHW`})},1332362:(e,t,n,i,a)=>{r.hc(`GridSample`,e,{align_corners:t,mode:dt(n),padding_mode:dt(i),format:a?`NHWC`:`NCHW`})},1332532:(e,t)=>{r.hc(`ScatterND`,e,{reduction:dt(t)})},1332617:(e,t,n,i,a,o,s,c,l)=>{r.hc(`Attention`,e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from(w().subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},1332889:e=>{r.hc(`BiasAdd`,e,void 0)},1332944:e=>{r.hc(`BiasSplitGelu`,e,void 0)},1333005:e=>{r.hc(`FastGelu`,e,void 0)},1333061:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{r.hc(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:t,dilations:n?Array.from(w().subarray(Number(n)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!de()[Number(p)>>>0],activation:dt(m),activation_params:h?Array.from(he().subarray(Number(h)>>>0,Number(g)>>>0)):[]})},1333645:e=>{r.hc(`Gelu`,e,void 0)},1333697:(e,t,n,i,a,o,s,c,l)=>{r.hc(`GroupQueryAttention`,e,{numHeads:t,kvNumHeads:n,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},1333914:(e,t,n,i)=>{r.hc(`LayerNormalization`,e,{axis:t,epsilon:n,simplified:!!i})},1334025:(e,t,n,i)=>{r.hc(`LayerNormalization`,e,{axis:t,epsilon:n,simplified:!!i})},1334136:(e,t,n,i,a,o)=>{r.hc(`MatMulNBits`,e,{k:t,n,accuracyLevel:i,bits:a,blockSize:o})},1334263:(e,t,n,i,a,o)=>{r.hc(`MultiHeadAttention`,e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:a,doRotary:o})},1334422:(e,t)=>{r.hc(`QuickGelu`,e,{alpha:t})},1334486:(e,t,n,i,a)=>{r.hc(`RotaryEmbedding`,e,{interleaved:!!t,numHeads:n,rotaryEmbeddingDim:i,scale:a})},1334625:(e,t,n)=>{r.hc(`SkipLayerNormalization`,e,{epsilon:t,simplified:!!n})},1334727:(e,t,n)=>{r.hc(`SkipLayerNormalization`,e,{epsilon:t,simplified:!!n})},1334829:(e,t,n,i)=>{r.hc(`GatherBlockQuantized`,e,{gatherAxis:t,quantizeAxis:n,blockSize:i})},1334950:e=>{r.Wd(e)},1334984:(e,t)=>r.Zd(Number(e),Number(t),r.Cd.be,r.Cd.errors)};function Oe(e,t,n){return N(async()=>{await r.Ud(Number(e),Number(t),Number(n))})}function ke(){return typeof wasmOffsetConverter<`u`}class Ae{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var je=e=>{e.terminate(),e.onmessage=()=>{}},Me=[],Ne=e=>{Re.length==0&&(Ke(),Ge(Re[0]));var t=Re.pop();if(!t)return 6;ze.push(t),Ve[e.xd]=t,t.xd=e.xd;var n={yd:`run`,de:e.ce,Fd:e.Fd,xd:e.xd};return t.postMessage(n,e.Ld),0},Pe=0,E=(e,t,...n)=>{for(var r=2*n.length,i=H(),a=V(8*r),o=a>>>3,s=0;s<n.length;s++){var c=n[s];typeof c==`bigint`?(ae[o+2*s]=1n,ae[o+2*s+1]=c):(ae[o+2*s]=0n,ge()[o+2*s+1>>>0]=c)}return e=Wr(e,0,r,a,t),B(i),e};function Fe(e){if(s)return E(0,1,e);if(x=e,!(0<Pe)){for(var t of ze)je(t);for(t of Re)je(t);Re=[],ze=[],Ve={},le=!0}p(0,new Ae(e))}function Ie(e){if(s)return E(1,0,e);Le(e)}var Le=e=>{if(x=e,s)throw Ie(e),`unwind`;Fe(e)},Re=[],ze=[],Be=[],Ve={},He=e=>{var t=e.xd;delete Ve[t],Re.push(e),ze.splice(ze.indexOf(e),1),e.xd=0,Gr(t)};function Ue(){Be.forEach(e=>e())}var Ge=e=>new Promise(t=>{e.onmessage=n=>{var i=(n=n.data).yd;if(n.Ed&&n.Ed!=zr()){var a=Ve[n.Ed];a?a.postMessage(n,n.Ld):v(`Internal error! Worker sent a message "${i}" to target pthread ${n.Ed}, but that thread no longer exists!`)}else i===`checkMailbox`?un():i===`spawnThread`?Ne(n):i===`cleanupThread`?He(Ve[n.ee]):i===`loaded`?(e.loaded=!0,t(e)):i===`alert`?alert(`Thread ${n.fe}: ${n.text}`):n.target===`setimmediate`?e.postMessage(n):i===`callHandler`?r[n.Nd](...n.args):i&&v(`worker sent an unknown command ${i}`)},e.onerror=e=>{throw v(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var n,i=[];for(n of[])r.propertyIsEnumerable(n)&&i.push(n);e.postMessage({yd:`load`,Od:i,he:y,ie:b})});function Ke(){var e=new Worker(self.location.href.startsWith(`file:`)?new URL(`/fangcun-toolbox/assets/ort.webgpu.bundle.min-CEayb2S6.mjs`,``+self.location.href):new URL(self.location.href),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});Re.push(e)}var qe=e=>{ye();var t=T()[e+52>>>2>>>0];e=T()[e+56>>>2>>>0],z(t,t-e),B(t)},Je=(e,t)=>{Pe=0,e=ti(e,t),0<Pe?x=e:Kr(e)},Ye=[];function Xe(e){var t=new $e(e>>>=0);if(de()[t.wd+12>>>0]==0){var n=1;de()[t.wd+12>>>0]=n}return n=0,de()[t.wd+13>>>0]=n,Ye.push(t),Xr(e),Qr(e)}var Ze=0,Qe=()=>{R(0,0);var e=Ye.pop();Yr(e.Gd),Ze=0};class $e{constructor(e){this.Gd=e,this.wd=e-24}}function et(e){throw Ze||=e>>>0,Ze}var tt=e=>{var t=Ze;if(!t)return Jr(0),0;var n=new $e(t);T()[n.wd+16>>>2>>>0]=t;var r=T()[n.wd+4>>>2>>>0];if(!r)return Jr(0),t;for(var i of e){if(i===0||i===r)break;if(Zr(i,r,n.wd+16))return Jr(i),t}return Jr(r),t};function nt(){return tt([])}function rt(e){return tt([e>>>0])}function it(e,t){return tt([e>>>0,t>>>0])}var at=()=>{var e=Ye.pop();e||Te(`no exception to throw`);var t=e.Gd;if(de()[e.wd+13>>>0]==0){Ye.push(e);var n=1;de()[e.wd+13>>>0]=n,n=0,de()[e.wd+12>>>0]=n}throw Ze=t};function ot(e,t,n){var r=new $e(e>>>=0);throw t>>>=0,n>>>=0,T()[r.wd+16>>>2>>>0]=0,T()[r.wd+4>>>2>>>0]=t,T()[r.wd+8>>>2>>>0]=n,Ze=e}function st(e,t,n,r){return s?E(2,1,e,t,n,r):ct(e,t,n,r)}function ct(e,t,n,r){if(e>>>=0,n>>>=0,r>>>=0,c===void 0)return 6;var i=[];return s&&i.length===0?st(e,t>>>=0,n,r):(e={ce:n,xd:e,Fd:r,Ld:i},s?(e.yd=`spawnThread`,postMessage(e,i),0):Ne(e))}var lt=typeof TextDecoder<`u`?new TextDecoder:void 0,ut=(e,t=0,n=NaN)=>{var r=(t>>>=0)+n;for(n=t;e[n]&&!(n>=r);)++n;if(16<n-t&&e.buffer&&lt)return lt.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},dt=(e,t)=>(e>>>=0)?ut(fe(),e,t):``;function ft(e,t,n){return s?E(3,1,e,t,n):0}function pt(e,t){if(s)return E(4,1,e,t)}var mt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t},ht=(e,t,n)=>{var r=fe();if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a)),127>=o){if(t>=n)break;r[t++>>>0]=o}else{if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6}else{if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63}r[t++>>>0]=128|o>>6&63}r[t++>>>0]=128|63&o}}r[t>>>0]=0,e=t-i}else e=0;return e};function gt(e,t){if(s)return E(5,1,e,t)}function _t(e,t,n){if(s)return E(6,1,e,t,n)}function vt(e,t,n){return s?E(7,1,e,t,n):0}function yt(e,t){if(s)return E(8,1,e,t)}function bt(e,t,n){if(s)return E(9,1,e,t,n)}function xt(e,t,n,r){if(s)return E(10,1,e,t,n,r)}function St(e,t,n,r){if(s)return E(11,1,e,t,n,r)}function Ct(e,t,n,r){if(s)return E(12,1,e,t,n,r)}function wt(e){if(s)return E(13,1,e)}function Tt(e,t){if(s)return E(14,1,e,t)}function Et(e,t,n){if(s)return E(15,1,e,t,n)}var Dt,Ot,kt=()=>Te(``),At=e=>{for(var t=``;fe()[e>>>0];)t+=Dt[fe()[e++>>>0]];return t},jt={},Mt={},Nt={};function Pt(e,t,n={}){return function(e,t,n={}){var r=t.name;if(!e)throw new Ot(`type "${r}" must have a positive integer typeid pointer`);if(Mt.hasOwnProperty(e)){if(n.Pd)return;throw new Ot(`Cannot register type '${r}' twice`)}Mt[e]=t,delete Nt[e],jt.hasOwnProperty(e)&&(t=jt[e],delete jt[e],t.forEach(e=>e()))}(e,t,n)}var Ft=(e,t,n)=>{switch(t){case 1:return n?e=>de()[e>>>0]:e=>fe()[e>>>0];case 2:return n?e=>pe()[e>>>1>>>0]:e=>me()[e>>>1>>>0];case 4:return n?e=>w()[e>>>2>>>0]:e=>T()[e>>>2>>>0];case 8:return n?e=>ae[e>>>3]:e=>oe[e>>>3];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function It(e,t,n){n>>>=0,Pt(e>>>=0,{name:t=At(t>>>0),fromWireType:e=>e,toWireType:function(e,t){if(typeof t!=`bigint`&&typeof t!=`number`)throw t=t===null?`null`:(e=typeof t)==`object`||e===`array`||e===`function`?t.toString():``+t,TypeError(`Cannot convert "${t}" to ${this.name}`);return typeof t==`number`&&(t=BigInt(t)),t},zd:Lt,readValueFromPointer:Ft(t,n,t.indexOf(`u`)==-1),Ad:null})}var Lt=8;function D(e,t,n,r){Pt(e>>>=0,{name:t=At(t>>>0),fromWireType:function(e){return!!e},toWireType:function(e,t){return t?n:r},zd:Lt,readValueFromPointer:function(e){return this.fromWireType(fe()[e>>>0])},Ad:null})}var Rt=[],zt=[];function Bt(e){9<(e>>>=0)&&--zt[e+1]==0&&(zt[e]=void 0,Rt.push(e))}var Vt=e=>{if(!e)throw new Ot(`Cannot use deleted val. handle = `+e);return zt[e]},Ht=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=Rt.pop()||zt.length;return zt[t]=e,zt[t+1]=1,t}};function Ut(e){return this.fromWireType(T()[e>>>2>>>0])}var Wt={name:`emscripten::val`,fromWireType:e=>{var t=Vt(e);return Bt(e),t},toWireType:(e,t)=>Ht(t),zd:Lt,readValueFromPointer:Ut,Ad:null};function Gt(e){return Pt(e>>>0,Wt)}var Kt=(e,t)=>{switch(t){case 4:return function(e){return this.fromWireType(he()[e>>>2>>>0])};case 8:return function(e){return this.fromWireType(ge()[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function qt(e,t,n){n>>>=0,Pt(e>>>=0,{name:t=At(t>>>0),fromWireType:e=>e,toWireType:(e,t)=>t,zd:Lt,readValueFromPointer:Kt(t,n),Ad:null})}function Jt(e,t,n,r,i){if(e>>>=0,n>>>=0,t=At(t>>>0),i===-1&&(i=4294967295),i=e=>e,r===0){var a=32-8*n;i=e=>e<<a>>>a}var o=t.includes(`unsigned`)?function(e,t){return t>>>0}:function(e,t){return t};Pt(e,{name:t,fromWireType:i,toWireType:o,zd:Lt,readValueFromPointer:Ft(t,n,r!==0),Ad:null})}function Yt(e,t,n){function r(e){var t=T()[e>>>2>>>0];return e=T()[e+4>>>2>>>0],new i(de().buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];Pt(e>>>=0,{name:n=At(n>>>0),fromWireType:r,zd:Lt,readValueFromPointer:r},{Pd:!0})}function Xt(e,t){Pt(e>>>=0,{name:t=At(t>>>0),fromWireType:function(e){for(var t,n=T()[e>>>2>>>0],r=e+4,i=r,a=0;a<=n;++a){var o=r+a;a!=n&&fe()[o>>>0]!=0||(i=dt(i,o-i),t===void 0?t=i:(t+=`\0`,t+=i),i=o+1)}return Br(e),t},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array))throw new Ot(`Cannot pass non-string to std::string`);var r=n?mt(t):t.length,i=Vr(4+r+1),a=i+4;if(T()[i>>>2>>>0]=r,n)ht(t,a,r+1);else if(n)for(n=0;n<r;++n){var o=t.charCodeAt(n);if(255<o)throw Br(i),new Ot(`String has UTF-16 code units that do not fit in 8 bits`);fe()[a+n>>>0]=o}else for(n=0;n<r;++n)fe()[a+n>>>0]=t[n];return e!==null&&e.push(Br,i),i},zd:Lt,readValueFromPointer:Ut,Ad(e){Br(e)}})}var Zt=typeof TextDecoder<`u`?new TextDecoder(`utf-16le`):void 0,Qt=(e,t)=>{for(var n=e>>1,r=n+t/2;!(n>=r)&&me()[n>>>0];)++n;if(32<(n<<=1)-e&&Zt)return Zt.decode(fe().slice(e,n));for(n=``,r=0;!(r>=t/2);++r){var i=pe()[e+2*r>>>1>>>0];if(i==0)break;n+=String.fromCharCode(i)}return n},$t=(e,t,n)=>{if(n??=2147483647,2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);pe()[t>>>1>>>0]=a,t+=2}return pe()[t>>>1>>>0]=0,t-r},en=e=>2*e.length,tn=(e,t)=>{for(var n=0,r=``;!(n>=t/4);){var i=w()[e+4*n>>>2>>>0];if(i==0)break;++n,65536<=i?(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i)):r+=String.fromCharCode(i)}return r},nn=(e,t,n)=>{if(t>>>=0,n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.charCodeAt(i);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++i)),w()[t>>>2>>>0]=a,(t+=4)+4>n)break}return w()[t>>>2>>>0]=0,t-r},rn=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);55296<=r&&57343>=r&&++n,t+=4}return t};function an(e,t,n){if(e>>>=0,t>>>=0,n=At(n>>>=0),t===2)var r=Qt,i=$t,a=en,o=e=>me()[e>>>1>>>0];else t===4&&(r=tn,i=nn,a=rn,o=e=>T()[e>>>2>>>0]);Pt(e,{name:n,fromWireType:e=>{for(var n,i=T()[e>>>2>>>0],a=e+4,s=0;s<=i;++s){var c=e+4+s*t;s!=i&&o(c)!=0||(a=r(a,c-a),n===void 0?n=a:(n+=`\0`,n+=a),a=c+t)}return Br(e),n},toWireType:(e,r)=>{if(typeof r!=`string`)throw new Ot(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=Vr(4+o+t);return T()[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(Br,s),s},zd:Lt,readValueFromPointer:Ut,Ad(e){Br(e)}})}function on(e,t){Pt(e>>>=0,{Qd:!0,name:t=At(t>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function sn(e){Hr(e>>>0,!o,1,!a,131072,!1),Ue()}var cn=e=>{if(!le)try{if(e(),!(0<Pe))try{s?Kr(x):Le(x)}catch(e){e instanceof Ae||e==`unwind`||p(0,e)}}catch(e){e instanceof Ae||e==`unwind`||p(0,e)}};function ln(e){e>>>=0,typeof Atomics.ge==`function`&&(Atomics.ge(w(),e>>>2,e).value.then(un),e+=128,Atomics.store(w(),e>>>2,1))}var un=()=>{var e=zr();e&&(ln(e),cn(L))};function dn(e,t){(e>>>=0)==t>>>0?setTimeout(un):s?postMessage({Ed:e,yd:`checkMailbox`}):(e=Ve[e])&&e.postMessage({yd:`checkMailbox`})}var fn=[];function O(e,t,n,r,i){for(t>>>=0,r/=2,fn.length=r,n=i>>>0>>>3,i=0;i<r;i++)fn[i]=ae[n+2*i]?ae[n+2*i+1]:ge()[n+2*i+1>>>0];return(t?De[t]:Ir[e])(...fn)}var pn=()=>{Pe=0};function mn(e){e>>>=0,s?postMessage({yd:`cleanupThread`,ee:e}):He(Ve[e])}function hn(e){}var gn=(e,t)=>{var n=Mt[e];if(n===void 0)throw e=Lr(e),n=At(e),Br(e),new Ot(`${t} has unknown type ${n}`);return n},k=(e,t,n)=>{var r=[];return e=e.toWireType(r,n),r.length&&(T()[t>>>2>>>0]=Ht(r)),e};function _n(e,t,n){return t>>>=0,n>>>=0,e=Vt(e>>>0),t=gn(t,`emval::as`),k(t,n,e)}function vn(e,t){return t>>>=0,e=Vt(e>>>0),(t=gn(t,`emval::as`)).toWireType(null,e)}var yn=e=>{try{e()}catch(e){Te(e)}},bn=0,A=null,xn=0,Sn=[],Cn={},wn={},j=0,Tn=null,M=[];function N(e){return function(e){if(!le){if(bn===0){var t=!1,n=!1;e((e=0)=>{if(!le&&(xn=e,t=!0,n)){bn=2,yn(()=>Ki(A)),typeof MainLoop<`u`&&MainLoop.Md&&MainLoop.resume(),e=!1;try{var r=function(){var e=w()[A+8>>>2>>>0];return e=I[wn[e]],--Pe,e()}()}catch(t){r=t,e=!0}var i=!1;if(!A){var a=Tn;a&&(Tn=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(bn=1,A=function(){var e=Vr(65548),t=e+12;T()[e>>>2>>>0]=t,T()[e+4>>>2>>>0]=t+65536,t=Sn[0];var n=Cn[t];return n===void 0&&(n=j++,Cn[t]=n,wn[n]=t),t=n,w()[e+8>>>2>>>0]=t,e}(),typeof MainLoop<`u`&&MainLoop.Md&&MainLoop.pause(),yn(()=>Wi(A)))}else bn===2?(bn=0,yn(qi),Br(A),A=null,M.forEach(cn)):Te(`invalid state: ${bn}`);return xn}}(t=>{e().then(t)})}function En(e){return e>>>=0,N(async()=>Ht(await Vt(e)))}var Dn=[];function On(e,t,n,r){return n>>>=0,r>>>=0,(e=Dn[e>>>0])(null,t=Vt(t>>>0),n,r)}var kn={},P=e=>{var t=kn[e];return t===void 0?At(e):t};function An(e,t,n,r,i){return n>>>=0,r>>>=0,i>>>=0,(e=Dn[e>>>0])(t=Vt(t>>>0),t[n=P(n)],r,i)}var jn=()=>typeof globalThis==`object`?globalThis:Function(`return this`)();function Mn(e){return(e>>>=0)==0?Ht(jn()):(e=P(e),Ht(jn()[e]))}var Nn=e=>{var t=Dn.length;return Dn.push(e),t},Pn=(e,t)=>{for(var n=Array(e),r=0;r<e;++r)n[r]=gn(T()[t+4*r>>>2>>>0],`parameter `+r);return n},Fn=(e,t)=>Object.defineProperty(t,`name`,{value:e});function In(e,t,n){var r=(t=Pn(e,t>>>0)).shift();e--;var i=`return function (obj, func, destructorsRef, args) {
`,a=0,o=[];n===0&&o.push(`obj`);for(var s=[`retType`],c=[r],l=0;l<e;++l)o.push(`arg`+l),s.push(`argType`+l),c.push(t[l]),i+=`  var arg${l} = argType${l}.readValueFromPointer(args${a?`+`+a:``});
`,a+=t[l].zd;return i+=`  var rv = ${n===1?`new func`:`func.call`}(${o.join(`, `)});
`,r.Qd||(s.push(`emval_returnValue`),c.push(k),i+=`  return emval_returnValue(retType, destructorsRef, rv);
`),s.push(i+`};
`),e=function(e){var t=Function;if(!(t instanceof Function))throw TypeError(`new_ called with constructor type ${typeof t} which is not a function`);var n=Fn(t.name||`unknownFunctionName`,function(){});return n.prototype=t.prototype,n=new n,(e=t.apply(n,e))instanceof Object?e:n}(s)(...c),n=`methodCaller<(${t.map(e=>e.name).join(`, `)}) => ${r.name}>`,Nn(Fn(n,e))}function Ln(e){return e=P(e>>>0),Ht(r[e])}function Rn(e,t){return t>>>=0,e=Vt(e>>>0),t=Vt(t),Ht(e[t])}function zn(e){9<(e>>>=0)&&(zt[e+1]+=1)}function Bn(){return Ht([])}function Vn(e){e=Vt(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return Ht(t)}function Hn(e){return Ht(P(e>>>0))}function Un(){return Ht({})}function Wn(e){for(var t=Vt(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}Bt(e)}function Gn(e,t,n){t>>>=0,n>>>=0,e=Vt(e>>>0),t=Vt(t),n=Vt(n),e[t]=n}function Kn(e,t){return t>>>=0,e=(e=gn(e>>>0,`_emval_take_value`)).readValueFromPointer(t),Ht(e)}function qn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),w()[t>>>2>>>0]=e.getUTCSeconds(),w()[t+4>>>2>>>0]=e.getUTCMinutes(),w()[t+8>>>2>>>0]=e.getUTCHours(),w()[t+12>>>2>>>0]=e.getUTCDate(),w()[t+16>>>2>>>0]=e.getUTCMonth(),w()[t+20>>>2>>>0]=e.getUTCFullYear()-1900,w()[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,w()[t+28>>>2>>>0]=e}var Jn=e=>e%4==0&&(e%100!=0||e%400==0),Yn=[0,31,60,91,121,152,182,213,244,274,305,335],Xn=[0,31,59,90,120,151,181,212,243,273,304,334];function Zn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),w()[t>>>2>>>0]=e.getSeconds(),w()[t+4>>>2>>>0]=e.getMinutes(),w()[t+8>>>2>>>0]=e.getHours(),w()[t+12>>>2>>>0]=e.getDate(),w()[t+16>>>2>>>0]=e.getMonth(),w()[t+20>>>2>>>0]=e.getFullYear()-1900,w()[t+24>>>2>>>0]=e.getDay();var n=(Jn(e.getFullYear())?Yn:Xn)[e.getMonth()]+e.getDate()-1|0;w()[t+28>>>2>>>0]=n,w()[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),w()[t+32>>>2>>>0]=e}function Qn(e){e>>>=0;var t=new Date(w()[e+20>>>2>>>0]+1900,w()[e+16>>>2>>>0],w()[e+12>>>2>>>0],w()[e+8>>>2>>>0],w()[e+4>>>2>>>0],w()[e>>>2>>>0],0),n=w()[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?w()[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),w()[e+24>>>2>>>0]=t.getDay(),n=(Jn(t.getFullYear())?Yn:Xn)[t.getMonth()]+t.getDate()-1|0,w()[e+28>>>2>>>0]=n,w()[e>>>2>>>0]=t.getSeconds(),w()[e+4>>>2>>>0]=t.getMinutes(),w()[e+8>>>2>>>0]=t.getHours(),w()[e+12>>>2>>>0]=t.getDate(),w()[e+16>>>2>>>0]=t.getMonth(),w()[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function $n(e,t,n,r,i,a,o){return s?E(16,1,e,t,n,r,i,a,o):-52}function er(e,t,n,r,i,a){if(s)return E(17,1,e,t,n,r,i,a)}var tr={},nr=()=>performance.timeOrigin+performance.now();function rr(e,t){return s?E(18,1,e,t):(tr[e]&&(clearTimeout(tr[e].id),delete tr[e]),t&&(tr[e]={id:setTimeout(()=>{delete tr[e],cn(()=>qr(e,performance.timeOrigin+performance.now()))},t),ke:t}),0)}function ir(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);T()[e>>>2>>>0]=60*o,w()[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(ht(e,n,17),ht(t,r,17)):(ht(e,r,17),ht(t,n,17))}var ar=()=>Date.now(),or=1;function sr(e,t,n){if(!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!or)return 52;e=performance.timeOrigin+performance.now()}return ae[n>>>0>>>3]=BigInt(Math.round(1e6*e)),0}var cr=[],lr=(e,t)=>{cr.length=0;for(var n;n=fe()[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,cr.push(n==112?T()[t>>>2>>>0]:n==106?ae[t>>>3]:n==105?w()[t>>>2>>>0]:ge()[t>>>3>>>0]),t+=r?8:4}return cr};function ur(e,t,n){return e>>>=0,t=lr(t>>>0,n>>>0),De[e](...t)}function dr(e,t,n){return e>>>=0,t=lr(t>>>0,n>>>0),De[e](...t)}var fr=()=>{};function pr(e,t){return v(dt(e>>>0,t>>>0))}var mr=()=>{throw Pe+=1,`unwind`};function hr(){return 4294901760}var gr=()=>navigator.hardwareConcurrency;function _r(){return Te(`Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER`),0}function vr(e){e>>>=0;var t=fe().length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-y.buffer.byteLength+65535)/65536|0;try{y.grow(r),ye();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}var yr=()=>(Te(`Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER`),0),br={},xr=e=>{e.forEach(e=>{var t=yr();t&&(br[t]=e)})};function Sr(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),xr(e),br.Kd=yr(),br.ae=e,br.Kd}function Cr(e,t,n){if(e>>>=0,t>>>=0,br.Kd==e)var r=br.ae;else (r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),xr(r);for(var i=3;r[i]&&yr()!=e;)++i;for(e=0;e<n&&r[e+i];++e)w()[t+4*e>>>2>>>0]=yr();return e}var wr,Tr={},Er=()=>{if(!wr){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(typeof navigator==`object`&&navigator.languages&&navigator.languages[0]||`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in Tr)Tr[e]===void 0?delete t[e]:t[e]=Tr[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);wr=n}return wr};function Dr(e,t){if(s)return E(19,1,e,t);e>>>=0,t>>>=0;var n=0;return Er().forEach((r,i)=>{var a=t+n;for(i=T()[e+4*i>>>2>>>0]=a,a=0;a<r.length;++a)de()[i++>>>0]=r.charCodeAt(a);de()[i>>>0]=0,n+=r.length+1}),0}function Or(e,t){if(s)return E(20,1,e,t);e>>>=0,t>>>=0;var n=Er();T()[e>>>2>>>0]=n.length;var r=0;return n.forEach(e=>r+=e.length+1),T()[t>>>2>>>0]=r,0}function kr(e){return s?E(21,1,e):52}function Ar(e,t,n,r){return s?E(22,1,e,t,n,r):52}function jr(e,t,n,r){return s?E(23,1,e,t,n,r):70}var Mr=[null,[],[]];function Nr(e,t,n,r){if(s)return E(24,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var i=0,a=0;a<n;a++){var o=T()[t>>>2>>>0],c=T()[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=fe()[o+l>>>0],d=Mr[e];u===0||u===10?((e===1?_:v)(ut(d)),d.length=0):d.push(u)}i+=c}return T()[r>>>2>>>0]=i,0}function Pr(e){return e>>>0}s||function(){for(var e=r.numThreads-1;e--;)Ke();Me.unshift(()=>{Se++,function(e){s?e():Promise.all(Re.map(Ge)).then(e)}(()=>we())})}();for(var Fr=Array(256),F=0;256>F;++F)Fr[F]=String.fromCharCode(F);Dt=Fr,Ot=r.BindingError=class extends Error{constructor(e){super(e),this.name=`BindingError`}},r.InternalError=class extends Error{constructor(e){super(e),this.name=`InternalError`}},zt.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>zt.length/2-5-Rt.length;var I,Ir=[Fe,Ie,st,ft,pt,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,$n,er,rr,Dr,Or,kr,Ar,jr,Nr];(async function(){function e(e,t){return I=e.exports,I=function(){var e=I,t={};for(let[n,r]of Object.entries(e))t[n]=typeof r==`function`?(...e)=>{Sn.push(n);try{return r(...e)}finally{le||(Sn.pop(),A&&bn===1&&Sn.length===0&&(bn=0,Pe+=1,yn(Gi),typeof Fibers<`u`&&Fibers.le()))}}:r;return t}(),I=function(){var e=I,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).Cb=t(e.Cb),e.fc=n(e.fc),e.ic=t(e.ic),e.vc=t(e.vc),e.wc=n(e.wc),e.Ac=t(e.Ac),e}(),Be.push(I.jc),b=t,we(),I}Se++;var t=Ee();if(r.instantiateWasm)return new Promise(n=>{r.instantiateWasm(t,(t,r)=>{e(t,r),n(t.exports)})});if(s)return new Promise(t=>{_e=n=>{t(e(new WebAssembly.Instance(n,Ee()),n))}});xe??=r.locateFile?r.locateFile?r.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,m):m+`ort-wasm-simd-threaded.jsep.wasm`:new URL(`/fangcun-toolbox/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm`,``+self.location.href).href;try{var i=await async function(e){var t=xe;if(!ce&&typeof WebAssembly.instantiateStreaming==`function`&&!ue(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){v(`wasm streaming compile failed: ${e}`),v(`falling back to ArrayBuffer instantiation`)}return async function(e,t){try{var n=await async function(e){if(!ce)try{var t=await u(e);return new Uint8Array(t)}catch{}if(e==xe&&ce)e=new Uint8Array(ce);else{if(!d)throw`both async and sync fetching of the wasm failed`;e=d(e)}return e}(e);return await WebAssembly.instantiate(n,t)}catch(e){v(`failed to asynchronously prepare wasm: ${e}`),Te(e)}}(t,e)}(t);return e(i.instance,i.module)}catch(e){return n(e),Promise.reject(e)}})();var Lr=e=>(Lr=I.Cb)(e),Rr=()=>(Rr=I.Db)();r._OrtInit=(e,t)=>(r._OrtInit=I.Eb)(e,t),r._OrtGetLastError=(e,t)=>(r._OrtGetLastError=I.Fb)(e,t),r._OrtCreateSessionOptions=(e,t,n,i,a,o,s,c,l,u)=>(r._OrtCreateSessionOptions=I.Gb)(e,t,n,i,a,o,s,c,l,u),r._OrtAppendExecutionProvider=(e,t)=>(r._OrtAppendExecutionProvider=I.Hb)(e,t),r._OrtAddFreeDimensionOverride=(e,t,n)=>(r._OrtAddFreeDimensionOverride=I.Ib)(e,t,n),r._OrtAddSessionConfigEntry=(e,t,n)=>(r._OrtAddSessionConfigEntry=I.Jb)(e,t,n),r._OrtReleaseSessionOptions=e=>(r._OrtReleaseSessionOptions=I.Kb)(e),r._OrtCreateSession=(e,t,n)=>(r._OrtCreateSession=I.Lb)(e,t,n),r._OrtReleaseSession=e=>(r._OrtReleaseSession=I.Mb)(e),r._OrtGetInputOutputCount=(e,t,n)=>(r._OrtGetInputOutputCount=I.Nb)(e,t,n),r._OrtGetInputName=(e,t)=>(r._OrtGetInputName=I.Ob)(e,t),r._OrtGetOutputName=(e,t)=>(r._OrtGetOutputName=I.Pb)(e,t),r._OrtFree=e=>(r._OrtFree=I.Qb)(e),r._OrtCreateTensor=(e,t,n,i,a,o)=>(r._OrtCreateTensor=I.Rb)(e,t,n,i,a,o),r._OrtGetTensorData=(e,t,n,i,a)=>(r._OrtGetTensorData=I.Sb)(e,t,n,i,a),r._OrtReleaseTensor=e=>(r._OrtReleaseTensor=I.Tb)(e),r._OrtCreateRunOptions=(e,t,n,i)=>(r._OrtCreateRunOptions=I.Ub)(e,t,n,i),r._OrtAddRunConfigEntry=(e,t,n)=>(r._OrtAddRunConfigEntry=I.Vb)(e,t,n),r._OrtReleaseRunOptions=e=>(r._OrtReleaseRunOptions=I.Wb)(e),r._OrtCreateBinding=e=>(r._OrtCreateBinding=I.Xb)(e),r._OrtBindInput=(e,t,n)=>(r._OrtBindInput=I.Yb)(e,t,n),r._OrtBindOutput=(e,t,n,i)=>(r._OrtBindOutput=I.Zb)(e,t,n,i),r._OrtClearBoundOutputs=e=>(r._OrtClearBoundOutputs=I._b)(e),r._OrtReleaseBinding=e=>(r._OrtReleaseBinding=I.$b)(e),r._OrtRunWithBinding=(e,t,n,i,a)=>(r._OrtRunWithBinding=I.ac)(e,t,n,i,a),r._OrtRun=(e,t,n,i,a,o,s,c)=>(r._OrtRun=I.bc)(e,t,n,i,a,o,s,c),r._OrtEndProfiling=e=>(r._OrtEndProfiling=I.cc)(e),r._JsepOutput=(e,t,n)=>(r._JsepOutput=I.dc)(e,t,n),r._JsepGetNodeName=e=>(r._JsepGetNodeName=I.ec)(e);var zr=()=>(zr=I.fc)(),Br=r._free=e=>(Br=r._free=I.gc)(e),Vr=r._malloc=e=>(Vr=r._malloc=I.ic)(e),Hr=(e,t,n,r,i,a)=>(Hr=I.kc)(e,t,n,r,i,a),Ur=()=>(Ur=I.lc)(),Wr=(e,t,n,r,i)=>(Wr=I.mc)(e,t,n,r,i),Gr=e=>(Gr=I.nc)(e),Kr=e=>(Kr=I.oc)(e),qr=(e,t)=>(qr=I.pc)(e,t),L=()=>(L=I.qc)(),R=(e,t)=>(R=I.rc)(e,t),Jr=e=>(Jr=I.sc)(e),z=(e,t)=>(z=I.tc)(e,t),B=e=>(B=I.uc)(e),V=e=>(V=I.vc)(e),H=()=>(H=I.wc)(),Yr=e=>(Yr=I.xc)(e),Xr=e=>(Xr=I.yc)(e),Zr=(e,t,n)=>(Zr=I.zc)(e,t,n),Qr=e=>(Qr=I.Ac)(e),$r=r.dynCall_iii=(e,t,n)=>($r=r.dynCall_iii=I.Bc)(e,t,n),ei=r.dynCall_vi=(e,t)=>(ei=r.dynCall_vi=I.Cc)(e,t),ti=r.dynCall_ii=(e,t)=>(ti=r.dynCall_ii=I.Dc)(e,t),ni=r.dynCall_vii=(e,t,n)=>(ni=r.dynCall_vii=I.Ec)(e,t,n),ri=r.dynCall_iiii=(e,t,n,i)=>(ri=r.dynCall_iiii=I.Fc)(e,t,n,i),ii=r.dynCall_viii=(e,t,n,i)=>(ii=r.dynCall_viii=I.Gc)(e,t,n,i),ai=r.dynCall_iiiii=(e,t,n,i,a)=>(ai=r.dynCall_iiiii=I.Hc)(e,t,n,i,a),oi=r.dynCall_viiii=(e,t,n,i,a)=>(oi=r.dynCall_viiii=I.Ic)(e,t,n,i,a),si=r.dynCall_viiiiii=(e,t,n,i,a,o,s)=>(si=r.dynCall_viiiiii=I.Jc)(e,t,n,i,a,o,s),ci=r.dynCall_viiiiiii=(e,t,n,i,a,o,s,c)=>(ci=r.dynCall_viiiiiii=I.Kc)(e,t,n,i,a,o,s,c),li=r.dynCall_ji=(e,t)=>(li=r.dynCall_ji=I.Lc)(e,t),ui=r.dynCall_v=e=>(ui=r.dynCall_v=I.Mc)(e),di=r.dynCall_viiiii=(e,t,n,i,a,o)=>(di=r.dynCall_viiiii=I.Nc)(e,t,n,i,a,o),fi=r.dynCall_i=e=>(fi=r.dynCall_i=I.Oc)(e),pi=r.dynCall_fii=(e,t,n)=>(pi=r.dynCall_fii=I.Pc)(e,t,n),mi=r.dynCall_viiiiiiii=(e,t,n,i,a,o,s,c,l)=>(mi=r.dynCall_viiiiiiii=I.Qc)(e,t,n,i,a,o,s,c,l),hi=r.dynCall_viiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d)=>(hi=r.dynCall_viiiiiiiiii=I.Rc)(e,t,n,i,a,o,s,c,l,u,d),gi=r.dynCall_jiii=(e,t,n,i)=>(gi=r.dynCall_jiii=I.Sc)(e,t,n,i),_i=r.dynCall_dii=(e,t,n)=>(_i=r.dynCall_dii=I.Tc)(e,t,n),vi=r.dynCall_viiiiiiiii=(e,t,n,i,a,o,s,c,l,u)=>(vi=r.dynCall_viiiiiiiii=I.Uc)(e,t,n,i,a,o,s,c,l,u),yi=r.dynCall_viiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f)=>(yi=r.dynCall_viiiiiiiiiii=I.Vc)(e,t,n,i,a,o,s,c,l,u,d,f),bi=r.dynCall_iiiiii=(e,t,n,i,a,o)=>(bi=r.dynCall_iiiiii=I.Wc)(e,t,n,i,a,o),xi=r.dynCall_iij=(e,t,n)=>(xi=r.dynCall_iij=I.Xc)(e,t,n),Si=r.dynCall_iiiiiiiiii=(e,t,n,i,a,o,s,c,l,u)=>(Si=r.dynCall_iiiiiiiiii=I.Yc)(e,t,n,i,a,o,s,c,l,u),Ci=r.dynCall_iiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d)=>(Ci=r.dynCall_iiiiiiiiiii=I.Zc)(e,t,n,i,a,o,s,c,l,u,d),wi=r.dynCall_vij=(e,t,n)=>(wi=r.dynCall_vij=I._c)(e,t,n),Ti=r.dynCall_iiif=(e,t,n,i)=>(Ti=r.dynCall_iiif=I.$c)(e,t,n,i),Ei=r.dynCall_iiij=(e,t,n,i)=>(Ei=r.dynCall_iiij=I.ad)(e,t,n,i),Di=r.dynCall_fiii=(e,t,n,i)=>(Di=r.dynCall_fiii=I.bd)(e,t,n,i),Oi=r.dynCall_viiiiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>(Oi=r.dynCall_viiiiiiiiiiiii=I.cd)(e,t,n,i,a,o,s,c,l,u,d,f,p,m),ki=r.dynCall_vjiii=(e,t,n,i,a)=>(ki=r.dynCall_vjiii=I.dd)(e,t,n,i,a),Ai=r.dynCall_vif=(e,t,n)=>(Ai=r.dynCall_vif=I.ed)(e,t,n),ji=r.dynCall_iiiiiii=(e,t,n,i,a,o,s)=>(ji=r.dynCall_iiiiiii=I.fd)(e,t,n,i,a,o,s),Mi=r.dynCall_iiiij=(e,t,n,i,a)=>(Mi=r.dynCall_iiiij=I.gd)(e,t,n,i,a),Ni=r.dynCall_iiiiiiii=(e,t,n,i,a,o,s,c)=>(Ni=r.dynCall_iiiiiiii=I.hd)(e,t,n,i,a,o,s,c),Pi=r.dynCall_viiiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f,p)=>(Pi=r.dynCall_viiiiiiiiiiii=I.id)(e,t,n,i,a,o,s,c,l,u,d,f,p),Fi=r.dynCall_diii=(e,t,n,i)=>(Fi=r.dynCall_diii=I.jd)(e,t,n,i),Ii=r.dynCall_jiiii=(e,t,n,i,a)=>(Ii=r.dynCall_jiiii=I.kd)(e,t,n,i,a),Li=r.dynCall_viiij=(e,t,n,i,a)=>(Li=r.dynCall_viiij=I.ld)(e,t,n,i,a),Ri=r.dynCall_fiiii=(e,t,n,i,a)=>(Ri=r.dynCall_fiiii=I.md)(e,t,n,i,a),zi=r.dynCall_viiif=(e,t,n,i,a)=>(zi=r.dynCall_viiif=I.nd)(e,t,n,i,a),Bi=r.dynCall_diiii=(e,t,n,i,a)=>(Bi=r.dynCall_diiii=I.od)(e,t,n,i,a),Vi=r.dynCall_viiid=(e,t,n,i,a)=>(Vi=r.dynCall_viiid=I.pd)(e,t,n,i,a),Hi=r.dynCall_iiiijii=(e,t,n,i,a,o,s)=>(Hi=r.dynCall_iiiijii=I.qd)(e,t,n,i,a,o,s),Ui=r.dynCall_iiiiiij=(e,t,n,i,a,o,s)=>(Ui=r.dynCall_iiiiiij=I.rd)(e,t,n,i,a,o,s),Wi=e=>(Wi=I.sd)(e),Gi=()=>(Gi=I.td)(),Ki=e=>(Ki=I.ud)(e),qi=()=>(qi=I.vd)();function Ji(e,t,n){var r=H();try{ni(e,t,n)}catch(e){if(B(r),e!==e+0)throw e;R(1,0)}}function Yi(e,t,n){var r=H();try{return $r(e,t,n)}catch(e){if(B(r),e!==e+0)throw e;R(1,0)}}function Xi(e,t){var n=H();try{ei(e,t)}catch(e){if(B(n),e!==e+0)throw e;R(1,0)}}function Zi(e,t){var n=H();try{return ti(e,t)}catch(e){if(B(n),e!==e+0)throw e;R(1,0)}}function Qi(e,t,n,r){var i=H();try{return ri(e,t,n,r)}catch(e){if(B(i),e!==e+0)throw e;R(1,0)}}function $i(e,t,n,r,i){var a=H();try{oi(e,t,n,r,i)}catch(e){if(B(a),e!==e+0)throw e;R(1,0)}}function ea(e,t,n,r,i){var a=H();try{return ai(e,t,n,r,i)}catch(e){if(B(a),e!==e+0)throw e;R(1,0)}}function ta(e,t,n,r){var i=H();try{ii(e,t,n,r)}catch(e){if(B(i),e!==e+0)throw e;R(1,0)}}function na(e,t,n,r,i,a,o){var s=H();try{return ji(e,t,n,r,i,a,o)}catch(e){if(B(s),e!==e+0)throw e;R(1,0)}}function ra(e){var t=H();try{ui(e)}catch(e){if(B(t),e!==e+0)throw e;R(1,0)}}function ia(e,t,n){var r=H();try{return xi(e,t,n)}catch(e){if(B(r),e!==e+0)throw e;R(1,0)}}function aa(e,t,n,r,i,a){var o=H();try{di(e,t,n,r,i,a)}catch(e){if(B(o),e!==e+0)throw e;R(1,0)}}function oa(e,t,n){var r=H();try{wi(e,t,n)}catch(e){if(B(r),e!==e+0)throw e;R(1,0)}}function sa(e,t,n,r,i,a,o){var s=H();try{si(e,t,n,r,i,a,o)}catch(e){if(B(s),e!==e+0)throw e;R(1,0)}}function ca(e,t,n,r,i,a,o,s){var c=H();try{ci(e,t,n,r,i,a,o,s)}catch(e){if(B(c),e!==e+0)throw e;R(1,0)}}function la(e,t,n,r,i,a){var o=H();try{return bi(e,t,n,r,i,a)}catch(e){if(B(o),e!==e+0)throw e;R(1,0)}}function ua(e,t,n,r,i,a,o,s){var c=H();try{return Ni(e,t,n,r,i,a,o,s)}catch(e){if(B(c),e!==e+0)throw e;R(1,0)}}function da(e,t,n,r,i,a,o,s,c,l){var u=H();try{vi(e,t,n,r,i,a,o,s,c,l)}catch(e){if(B(u),e!==e+0)throw e;R(1,0)}}function fa(e,t,n,r,i,a,o,s,c){var l=H();try{mi(e,t,n,r,i,a,o,s,c)}catch(e){if(B(l),e!==e+0)throw e;R(1,0)}}function pa(e){var t=H();try{return fi(e)}catch(e){if(B(t),e!==e+0)throw e;R(1,0)}}function ma(e,t,n,r,i,a,o,s,c,l){var u=H();try{return Si(e,t,n,r,i,a,o,s,c,l)}catch(e){if(B(u),e!==e+0)throw e;R(1,0)}}function ha(e,t,n){var r=H();try{return pi(e,t,n)}catch(e){if(B(r),e!==e+0)throw e;R(1,0)}}function ga(e,t,n,r){var i=H();try{return gi(e,t,n,r)}catch(e){if(B(i),e!==e+0)throw e;return R(1,0),0n}}function _a(e,t,n){var r=H();try{return _i(e,t,n)}catch(e){if(B(r),e!==e+0)throw e;R(1,0)}}function va(e,t,n,r,i,a,o,s,c,l,u,d){var f=H();try{yi(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(B(f),e!==e+0)throw e;R(1,0)}}function ya(e,t,n,r,i,a,o,s,c,l,u){var d=H();try{hi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(B(d),e!==e+0)throw e;R(1,0)}}function ba(e,t,n,r,i,a,o,s,c,l,u){var d=H();try{return Ci(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(B(d),e!==e+0)throw e;R(1,0)}}function xa(e,t,n,r){var i=H();try{return Ti(e,t,n,r)}catch(e){if(B(i),e!==e+0)throw e;R(1,0)}}function Sa(e,t,n,r){var i=H();try{return Ei(e,t,n,r)}catch(e){if(B(i),e!==e+0)throw e;R(1,0)}}function Ca(e,t,n,r){var i=H();try{return Di(e,t,n,r)}catch(e){if(B(i),e!==e+0)throw e;R(1,0)}}function wa(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=H();try{Oi(e,t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if(B(m),e!==e+0)throw e;R(1,0)}}function Ta(e,t,n,r,i){var a=H();try{ki(e,t,n,r,i)}catch(e){if(B(a),e!==e+0)throw e;R(1,0)}}function Ea(e,t,n){var r=H();try{Ai(e,t,n)}catch(e){if(B(r),e!==e+0)throw e;R(1,0)}}function Da(e,t){var n=H();try{return li(e,t)}catch(e){if(B(n),e!==e+0)throw e;return R(1,0),0n}}function Oa(e,t,n,r,i){var a=H();try{return Mi(e,t,n,r,i)}catch(e){if(B(a),e!==e+0)throw e;R(1,0)}}function ka(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=H();try{Pi(e,t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if(B(p),e!==e+0)throw e;R(1,0)}}function Aa(e,t,n,r){var i=H();try{return Fi(e,t,n,r)}catch(e){if(B(i),e!==e+0)throw e;R(1,0)}}function ja(e,t,n,r,i){var a=H();try{return Ii(e,t,n,r,i)}catch(e){if(B(a),e!==e+0)throw e;return R(1,0),0n}}function Ma(e,t,n,r,i){var a=H();try{Li(e,t,n,r,i)}catch(e){if(B(a),e!==e+0)throw e;R(1,0)}}function Na(e,t,n,r,i){var a=H();try{return Ri(e,t,n,r,i)}catch(e){if(B(a),e!==e+0)throw e;R(1,0)}}function Pa(e,t,n,r,i){var a=H();try{zi(e,t,n,r,i)}catch(e){if(B(a),e!==e+0)throw e;R(1,0)}}function Fa(e,t,n,r,i){var a=H();try{return Bi(e,t,n,r,i)}catch(e){if(B(a),e!==e+0)throw e;R(1,0)}}function Ia(e,t,n,r,i){var a=H();try{Vi(e,t,n,r,i)}catch(e){if(B(a),e!==e+0)throw e;R(1,0)}}function La(e,t,n,r,i,a,o){var s=H();try{return Hi(e,t,n,r,i,a,o)}catch(e){if(B(s),e!==e+0)throw e;R(1,0)}}function Ra(e,t,n,r,i,a,o){var s=H();try{return Ui(e,t,n,r,i,a,o)}catch(e){if(B(s),e!==e+0)throw e;R(1,0)}}return r.stackSave=()=>H(),r.stackRestore=e=>B(e),r.stackAlloc=e=>V(e),r.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:de()[e>>>0]=t;break;case`i16`:pe()[e>>>1>>>0]=t;break;case`i32`:w()[e>>>2>>>0]=t;break;case`i64`:ae[e>>>3]=BigInt(t);break;case`float`:he()[e>>>2>>>0]=t;break;case`double`:ge()[e>>>3>>>0]=t;break;case`*`:T()[e>>>2>>>0]=t;break;default:Te(`invalid type for setValue: ${n}`)}},r.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return de()[e>>>0];case`i16`:return pe()[e>>>1>>>0];case`i32`:return w()[e>>>2>>>0];case`i64`:return ae[e>>>3];case`float`:return he()[e>>>2>>>0];case`double`:return ge()[e>>>3>>>0];case`*`:return T()[e>>>2>>>0];default:Te(`invalid type for getValue: ${t}`)}},r.UTF8ToString=dt,r.stringToUTF8=ht,r.lengthBytesUTF8=mt,function e(){if(0<Se)Ce=e;else if(s)t(r),be();else{for(;0<Me.length;)Me.shift()(r);0<Se?Ce=e:(r.calledRun=!0,le||(be(),t(r)))}}(),r.PTR_SIZE=4,i}),Ke=Ge,qe=globalThis.self?.name?.startsWith(`em-pthread`),qe&&Ge()}),ct=l(()=>{"use strict";Le(),Ye=typeof location>`u`?void 0:location.origin,Xe=()=>self.location.href?.startsWith(`file:`)?new URL(new URL(`/fangcun-toolbox/assets/ort.webgpu.bundle.min-CEayb2S6.mjs`,``+self.location.href).href,Ye).href:self.location.href,Ze=Xe(),Qe=()=>{if(Ze&&!Ze.startsWith(`blob:`))return Ze.substring(0,Ze.lastIndexOf(`/`)+1)},$e=(e,t)=>{try{let n=t??Ze;return(n?new URL(e,n):new URL(e)).origin===Ye}catch{return!1}},et=(e,t)=>{let n=t??Ze;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},tt=(e,t)=>`${t??`./`}${e}`,nt=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},rt=async e=>(await import(e)).default,it=(He(),f(Re)).default,at=async()=>{if(!Ze)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if($e(Ze))return[void 0,it()];let e=await nt(Ze);return[e,it(e)]},ot=(Je(),f(Ue)).default,st=async(e,t,n)=>{if(!e&&!t&&ot&&Ze&&$e(Ze))return[void 0,ot];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??et(r,t),a=n&&i&&!$e(i,t),o=a?await nt(i):i??tt(r,t);return[a?o:void 0,await rt(o)]}}}),_t=l(()=>{"use strict";ct(),ut=!1,dt=!1,ft=!1,pt=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},mt=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},ht=async e=>{if(ut)return Promise.resolve();if(dt)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(ft)throw Error(`previous call to 'initializeWebAssembly()' failed.`);dt=!0;let t=e.initTimeout,n=e.numThreads;if(!mt())throw Error(`WebAssembly SIMD is not supported in the current environment.`);let r=pt();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await st(s,a,n>1),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=Qe();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{dt=!1,ut=!0,lt=t,e(),d&&URL.revokeObjectURL(d)},e=>{dt=!1,ft=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},gt=()=>{if(ut&&lt)return lt;throw Error(`WebAssembly is not initialized yet.`)}}),xt=l(()=>{"use strict";_t(),vt=(e,t)=>{let n=gt(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},yt=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)yt(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},bt=e=>{let t=gt(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),Ct=l(()=>{"use strict";_t(),xt(),St=e=>{let t=gt(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=vt(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&bt(`Can't create run options.`),e?.extra!==void 0&&yt(e.extra,``,new WeakSet,(e,i)=>{let a=vt(e,r),o=vt(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&bt(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),kt=l(()=>{"use strict";_t(),xt(),wt=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},Tt=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},Et=e=>{e.extra||={},e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||=`1`,e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},Dt=(e,t,n)=>{for(let r of t){let t=typeof r==`string`?r:r.name;switch(t){case`webnn`:if(t=`WEBNN`,typeof r!=`string`){let t=r?.deviceType;if(t){let r=vt(`deviceType`,n),i=vt(t,n);gt()._OrtAddSessionConfigEntry(e,r,i)!==0&&bt(`Can't set a session config entry: 'deviceType' - ${t}.`)}}break;case`webgpu`:if(t=`JS`,typeof r!=`string`){let t=r;if(t?.preferredLayout){if(t.preferredLayout!==`NCHW`&&t.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${t.preferredLayout}`);let r=vt(`preferredLayout`,n),i=vt(t.preferredLayout,n);gt()._OrtAddSessionConfigEntry(e,r,i)!==0&&bt(`Can't set a session config entry: 'preferredLayout' - ${t.preferredLayout}.`)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${t}`)}let i=vt(t,n);gt()._OrtAppendExecutionProvider(e,i)!==0&&bt(`Can't append execution provider: ${t}.`)}},Ot=e=>{let t=gt(),n=0,r=[],i=e||{};Et(i);try{let e=wt(i.graphOptimizationLevel??`all`),a=Tt(i.executionMode??`sequential`),o=typeof i.logId==`string`?vt(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log serverity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?vt(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&bt(`Can't create session options.`),i.executionProviders&&Dt(n,i.executionProviders,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);let e=vt(`enableGraphCapture`,r),a=vt(i.enableGraphCapture.toString(),r);t._OrtAddSessionConfigEntry(n,e,a)!==0&&bt(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=vt(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&bt(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&yt(i.extra,``,new WeakSet,(e,i)=>{let a=vt(e,r),o=vt(i,r);t._OrtAddSessionConfigEntry(n,a,o)!==0&&bt(`Can't set a session config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&bt(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),D=l(()=>{"use strict";At=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},jt=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},Mt=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},Nt=e=>{switch(e){case`float16`:return typeof Float16Array<`u`&&Float16Array.from?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},Pt=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},Ft=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,It=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Lt=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),zt=l(()=>{"use strict";Le(),Rt=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),qt=l(()=>{"use strict";D(),Bt=[`V`,`I`,`W`,`E`,`F`],Vt=(e,t)=>{console.log(`[${Bt[e]},${new Date().toISOString()}]${t}`)},Wt=(e,t)=>{Ht=e,Ut=t},Gt=(e,t)=>{let n=Pt(e);n>=Pt(Ht)&&Vt(n,typeof t==`function`?t():t)},Kt=(...e)=>{Ut&&Gt(...e)}}),Yt=l(()=>{"use strict";D(),Jt=(e,t)=>new(Nt(t))(e)}),Xt=l(()=>{"use strict";}),sn=l(()=>{"use strict";qt(),Xt(),Zt=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Qt=[],$t=e=>Math.ceil(Number(e)/16)*16,en=e=>{for(let t=0;t<Qt.length;t++){let n=Qt[t];if(e<=n)return n}return Math.ceil(e/16)*16},tn=1,nn=()=>tn++,rn=async(e,t,n,r)=>{let i=$t(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},an=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of Zt)Qt.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=$t(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),c=s.getMappedRange();new Uint8Array(c).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Kt(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=$t(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Kt(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=nn();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Kt(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Kt(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=en(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:nn(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Kt(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return Kt(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await rn(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus===`default`){for(let e of this.buffersPending){let t=Zt.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(Kt(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=new Map)}},on=(...e)=>new an(...e)}),un=l(()=>{"use strict";cn=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},ln=e=>new cn(e)}),k=l(()=>{"use strict";dn=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},fn=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=dn.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},O=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length?e.every((e,n)=>e===t[n]):!1}},pn=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let c=[n[0],n[1]];return e.computeShapeHelper(t,n,c,r,i,a,o,s),c}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c))}static adjustPadAndReturnShape(e,t,n,r,i,a,o,s){let c=n*(r-1)+1;if(s&&s!==`NOTSET`)switch(s){case`VALID`:return i[a]=0,i[o]=0,Math.floor((e-c)/t+1);case`SAME_LOWER`:case`SAME_UPPER`:if(n!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let n=((e+t-1)/t-1)*t+r-e;return i[a]=Math.floor(s===`SAME_LOWER`?(n+1)/2:n/2),i[o]=n-i[a],Math.floor((e+n-r)/t+1)}default:throw Error(`Unsupported AutoPad type`)}else return Math.floor((e+i[a]+i[o]-c)/t+1)}},mn=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!fn.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},hn=-34028234663852886e22,gn=34028234663852886e22}),P=l(()=>{"use strict";D(),k(),_n=64,vn=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},yn=(e,t=1)=>{let n=vn(e,t);return typeof n==`string`?n:n[0]},bn=(e,t=1)=>{let n=vn(e,t);return typeof n==`string`?n:n[1]},A=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:O.computeStrides(e)})}),t},xn=e=>e%4==0?4:e%2==0?2:1,Sn=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,Cn=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,wn=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,j=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Tn=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=vn(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${j(g,e,o)};
    let rest${e} = current % ${j(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${j(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),ee=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,te=(e,t)=>o<2?`${e}`:`${j(e,t,o)}`,C=(e,t,n)=>o<2?`${e}=${n};`:`${j(e,t,o)}=${n};`,ne={},re=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in ne)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${te(g,e)} * (${t} % ${te(h,e)})`)}return ne[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},ie=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),ae=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),oe=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${ae(`i2o_${e}(indices)`)};
  }`,se=o<2?``:`
  fn get_${e}(${s.map(e=>`d${e}: u32`).join(`, `)}) -> ${u} {
    return get_${e}ByIndices(${ee(s.map(e=>`d${e}`).join(`, `))});
  }`,ce=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?ae(`0u`):o===1?ae(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},le=t=>o<2?ae(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),ue=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${ie(`i2o_${e}(indices)`,`value`)}
  }`,de=o<2?``:`
  fn set_${e}(${s.map(e=>`d${e}: u32`).join(`, `)}, value: ${u}) {
    set_${e}ByIndices(${ee(s.map(e=>`d${e}`).join(`, `))}, value);
  }`;return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(ne).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(de),t=!0),p.setByIndices&&(e.push(ue),t=!0),p.get&&(e.push(se),t=!0),p.getByIndices&&(e.push(oe),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${O.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:re,indices:ee,indicesGet:te,indicesSet:C,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?ie(`0u`,n):o===1?ie(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:ie,setByIndices:(t,n)=>o<2?ie(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:ce,getByOffset:ae,getByIndices:le,usage:r,name:e,strides:g,shape:h,rank:o}},M=(e,t,n,r=1)=>Tn(e,t,n,`input`,r),N=(e,t,n,r=1)=>Tn(e,t,n,`output`,r),En=(e,t,n)=>Tn(e,t,n,`atomicOutput`,1),Dn=(e,t,n,r=1)=>Tn(e,t,n,`internal`,r),On=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=_n){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},kn=(e,t)=>new On(e,t)}),zn=l(()=>{"use strict";D(),k(),un(),P(),An=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},jn=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,Mn=(e,t)=>O.sortBasedOnPerm(e,jn(e.length,t)),Nn=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},Pn=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Fn=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},In=(e,t)=>{let n=e.dataType,r=e.dims.length,i=jn(r,t),a=Mn(e.dims,i),o=e.dims,s=a,c=r<2||Fn(i,e.dims),l;if(c)return l=e=>{let t=M(`input`,n,o,4),r=N(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=Pn(e.dims,i),f=O.areEqual(d,[2,3,1]),p=O.areEqual(d,[3,1,2]);return u.length===2||f||p?(o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]],l=e=>{let t=M(`a`,n,o.length),r=N(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...A(o,s)]}},getShaderSource:l}):(l=e=>{let t=M(`a`,n,o.length),a=N(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${Nn(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...A(o,s)]}},getShaderSource:l})},Ln=(e,t)=>{An(e.inputs,t.perm),e.compute(In(e.inputs[0],t.perm))},Rn=e=>ln({perm:e.perm})}),sr=l(()=>{"use strict";D(),k(),P(),Pr(),zn(),Bn={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},Vn={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},Hn={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},Un={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},Wn=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Gn=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},Kn=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},qn=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Jn=(e,t)=>{let n=[];if(!qn(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},Yn=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=O.size(a),l=O.size(o),u=M(`_A`,n[0].dataType,s),d=N(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Hn[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${Bn[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Vn[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${Un[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},Xn=(e,t,n,r)=>{let i=e.inputs.length===1?n:dr(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=O.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=Jn(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(In(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Wn(s.length,c.dims.length));let[u,d]=Gn(c.dims,s),f=u;i.keepDims&&(f=Kn(u,o)),e.compute(Yn(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},Zn=(e,t)=>{Xn(e,`ReduceMeanShared`,t,`mean`)},Qn=(e,t)=>{Xn(e,`ReduceL1Shared`,t,`l1`)},$n=(e,t)=>{Xn(e,`ReduceL2Shared`,t,`l2`)},er=(e,t)=>{Xn(e,`ReduceLogSumExpShared`,t,`logSumExp`)},tr=(e,t)=>{Xn(e,`ReduceMaxShared`,t,`max`)},nr=(e,t)=>{Xn(e,`ReduceMinShared`,t,`min`)},rr=(e,t)=>{Xn(e,`ReduceProdShared`,t,`prod`)},ir=(e,t)=>{Xn(e,`ReduceSumShared`,t,`sum`)},ar=(e,t)=>{Xn(e,`ReduceSumSquareShared`,t,`sumSquare`)},or=(e,t)=>{Xn(e,`ReduceLogSumShared`,t,`logSum`)}}),Pr=l(()=>{"use strict";D(),k(),un(),P(),sr(),cr=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},lr=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],ur=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=O.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=O.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=M(`_A`,n[0].dataType,u),s=N(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...A(l,c)]})}},dr=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),ln({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},fr=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:dr(i,n);e.compute(ur(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?lr:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},pr=(e,t)=>{cr(e.inputs),fr(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},mr=(e,t)=>{cr(e.inputs),fr(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},hr=(e,t)=>{cr(e.inputs),fr(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},gr=(e,t)=>{cr(e.inputs),fr(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},_r=(e,t)=>{cr(e.inputs),fr(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},vr=(e,t)=>{cr(e.inputs),fr(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},yr=(e,t)=>{cr(e.inputs),fr(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},br=(e,t)=>{cr(e.inputs),fr(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},xr=(e,t)=>{cr(e.inputs),fr(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},Sr=(e,t)=>{cr(e.inputs),fr(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},Cr=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},wr=(e,t)=>{Cr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vr(e,t):Zn(e,t)},Tr=(e,t)=>{Cr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mr(e,t):Qn(e,t)},Er=(e,t)=>{Cr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hr(e,t):$n(e,t)},Dr=(e,t)=>{Cr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gr(e,t):er(e,t)},Or=(e,t)=>{Cr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_r(e,t):tr(e,t)},kr=(e,t)=>{Cr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yr(e,t):nr(e,t)},Ar=(e,t)=>{Cr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?br(e,t):rr(e,t)},jr=(e,t)=>{Cr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?xr(e,t):ir(e,t)},Mr=(e,t)=>{Cr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Sr(e,t):ar(e,t)},Nr=(e,t)=>{Cr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pr(e,t):or(e,t)}}),Lr=l(()=>{"use strict";D(),un(),Pr(),Fr=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},F=(e,t)=>{Fr(e.inputs),e.compute(ur(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},I=(e,t)=>{Fr(e.inputs),e.compute(ur(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Ir=e=>ln(e)}),Kr=l(()=>{"use strict";D(),k(),Xt(),P(),Rr=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},zr=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,Br=(e,t,n,r,i,a,o,s)=>{let c=xn(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=yn(e.dataType,c),m=bn(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=N(`x`,e.dataType,e.dims,c),r=[n],i=o?M(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?M(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=bn(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${zr(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(a/l),y:i,z:t*n},programUniforms:f})}},Vr=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=xn(a.headSize),_=a.headSize/g,v={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],b=d&&r&&O.size(r.dims)>0,x=[`type`,`type`];b&&x.push(`type`),i&&x.push(`type`),s&&x.push(`type`),c&&x.push(`type`);let S=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&S.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:v,programUniforms:y}),getShaderSource:e=>{let a=M(`q`,t.dataType,t.dims,g),o=[a,M(`key`,n.dataType,n.dims,g)];if(b){let e=M(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(M(`attention_bias`,i.dataType,i.dims));let l=s?M(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?M(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=N(`output`,t.dataType,u),_=[h];d&&_.push(N(`present_key`,t.dataType,p,g));let v=bn(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${zr(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},Hr=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=d&&r&&O.size(r.dims)>0,v=[`type`,`type`];_&&v.push(`type`),o&&v.push(`type`),s&&v.push(`type`);let y=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:y,dispatchGroup:h,programUniforms:g}),getShaderSource:e=>{let i=M(`probs`,t.dataType,t.dims),a=[i,M(`v`,n.dataType,n.dims)];_&&a.push(M(`past_value`,r.dataType,r.dims));let c=o?M(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?M(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[N(`output`,t.dataType,m)];return d&&f.push(N(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${zr(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},Ur=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+ +!!o+ +!!s),p=f>1?l.pastSequenceLength:0,m=p+l.kvSequenceLength,h=c&&O.size(c.dims)>0?c:void 0,g=[t,n];f>1&&o&&O.size(o.dims)>0&&g.push(o),h&&g.push(h),u&&g.push(u),d&&g.push(d);let _=e.compute(Vr(f,t,n,o,h,l,p,u,d),{inputs:g,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Br(_,l.batchSize,l.numHeads,p,l.sequenceLength,m,u,d),{inputs:u&&d?[_,u,d]:[_],outputs:[]});let v=[_,r];f>1&&s&&O.size(s.dims)>0&&v.push(s),u&&v.push(u),d&&v.push(d),e.compute(Hr(f,_,r,s,l,p,u,d),{inputs:v,outputs:f>1?[0,2]:[0]})},Wr=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},s=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:e=>{let t=N(`output_q`,s[0].dataType,n),r=N(`output_k`,s[0].dataType,n),i=N(`output_v`,s[0].dataType,n),a=M(`input`,s[0].dataType,s[0].dims),o=M(`weight`,s[1].dataType,s[1].dims),c=M(`bias`,s[2].dataType,s[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,c,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:s,outputs:[-1,-1,-1]})},Gr=(e,t)=>{let n=Rr(e.inputs,t),[r,i,a]=Wr(e,n);return Ur(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),z=l(()=>{"use strict";Ie(),D(),k(),un(),P(),qr=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},L=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?xn(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=O.size(a)/o,l=r,u=l?a.length:a,d=M(`x`,e[0].dataType,e[0].dims,o),f=M(`scale`,e[1].dataType,e[1].dims,s),p=M(`bias`,e[2].dataType,e[2].dims,s),m=M(`inputMean`,e[3].dataType,e[3].dims,s),h=M(`inputVar`,e[4].dataType,e[4].dims,s),g=N(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...A(a)]:[{type:12,data:c}]})}},R=e=>ln(e),Jr=(e,t)=>{let{inputs:n,outputCount:r}=e,i=R({...t,outputCount:r});if(C.webgpu.validateInputContent&&qr(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(L(n,i))}}),Yr=l(()=>{"use strict";k(),P(),B=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},V=e=>{let t=e[0].dims,n=e[0].dims[2],r=O.size(t)/4,i=e[0].dataType,a=M(`input`,i,t,4),o=M(`bias`,i,[n],4),s=M(`residual`,i,t,4),c=N(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},H=e=>{B(e.inputs),e.compute(V(e.inputs))}}),Vi=l(()=>{"use strict";D(),k(),un(),P(),Xr=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=M(`inputData`,n,[s],4),u=N(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},Zr=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>Xr(t,O.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(O.size(t[0].dims)/64/4)},programUniforms:c})}},Qr=e=>{e.compute(Zr(e.inputs[0],`Abs`,`abs`))},$r=e=>{e.compute(Zr(e.inputs[0],`Acos`,`acos`))},ei=e=>{e.compute(Zr(e.inputs[0],`Acosh`,`acosh`))},ti=e=>{e.compute(Zr(e.inputs[0],`Asin`,`asin`))},ni=e=>{e.compute(Zr(e.inputs[0],`Asinh`,`asinh`))},ri=e=>{e.compute(Zr(e.inputs[0],`Atan`,`atan`))},ii=e=>{e.compute(Zr(e.inputs[0],`Atanh`,`atanh`))},ai=e=>ln(e),oi=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Zr(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},si=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return ln({min:t,max:n})},ci=(e,t)=>{let n=t||si(e.inputs),r=bn(e.inputs[0].dataType);e.compute(Zr(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},li=e=>{e.compute(Zr(e.inputs[0],`Ceil`,`ceil`))},ui=e=>{e.compute(Zr(e.inputs[0],`Cos`,`cos`))},di=e=>{e.compute(Zr(e.inputs[0],`Cosh`,`cosh`))},fi=e=>ln(e),pi=(e,t)=>{let n=bn(e.inputs[0].dataType);e.compute(Zr(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},mi=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,hi=e=>{let t=bn(e.inputs[0].dataType);e.compute(Zr(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,mi(t)))},gi=e=>{e.compute(Zr(e.inputs[0],`Exp`,`exp`))},_i=e=>{e.compute(Zr(e.inputs[0],`Floor`,`floor`))},vi=e=>{let t=bn(e.inputs[0].dataType);e.compute(Zr(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,mi(t)))},yi=(e,t)=>{let n=bn(e.inputs[0].dataType);e.compute(Zr(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},bi=e=>{e.compute(Zr(e.inputs[0],`Not`,e=>`!${e}`))},xi=e=>{e.compute(Zr(e.inputs[0],`Neg`,e=>`-${e}`))},Si=e=>{e.compute(Zr(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},Ci=e=>{let t=bn(e.inputs[0].dataType);e.compute(Zr(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},wi=e=>{e.compute(Zr(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},Ti=e=>ln(e),Ei=(e,t)=>{let n=bn(e.inputs[0].dataType);e.compute(Zr(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Di=e=>{e.compute(Zr(e.inputs[0],`Sin`,`sin`))},Oi=e=>{e.compute(Zr(e.inputs[0],`Sinh`,`sinh`))},ki=e=>{e.compute(Zr(e.inputs[0],`Sqrt`,`sqrt`))},Ai=e=>{e.compute(Zr(e.inputs[0],`Tan`,`tan`))},ji=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Mi=e=>{e.compute(Zr(e.inputs[0],`Tanh`,ji))},Ni=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${ji(`v`)};
}
`,Pi=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Fi=e=>{let t=bn(e.inputs[0].dataType);e.compute(Zr(e.inputs[0],`FastGelu`,Pi,Ni(t),void 0,e.inputs[0].dataType))},Ii=(e,t)=>{let n=bn(e.inputs[0].dataType);return e.compute(Zr(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Li=e=>{e.compute(Zr(e.inputs[0],`Log`,`log`))},Ri=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,zi=e=>`quick_gelu_impl(${e})`,Bi=(e,t)=>{let n=bn(e.inputs[0].dataType);e.compute(Zr(e.inputs[0],`QuickGelu`,zi,Ri(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Gi=l(()=>{"use strict";k(),P(),Vi(),Hi=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},Ui=e=>{let t=e[0].dims.slice();t[2]/=2;let n=M(`input`,e[0].dataType,e[0].dims,4),r=M(`bias`,e[0].dataType,[e[0].dims[2]],4),i=N(`output`,e[0].dataType,t,4),a=O.size(t)/4,o=yn(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${mi(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},Wi=e=>{Hi(e.inputs),e.compute(Ui(e.inputs))}}),aa=l(()=>{"use strict";D(),k(),P(),Ki=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=N(`outputData`,u,r.length,4),h=M(`aData`,c,t.length,4),g=M(`bData`,l,n.length,4),_;if(i)if(a){let e=O.size(t)===1,r=O.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)));else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},qi=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(e=>Number(e)??1),c=r.dims.map(e=>Number(e)??1),l=!O.areEqual(s,c),u=s,d=O.size(s),f=!1,p=!1,m=[l];if(l){let e=fn.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=O.size(u);let t=O.size(s)===1,n=O.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>Ki(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(u)/4)},...A(s,c,u)]})}},Ji=(e,t,n,r,i,a)=>{e.compute(qi(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},Yi=e=>{Ji(e,`Add`,(e,t)=>`${e}+${t}`)},Xi=e=>{Ji(e,`Div`,(e,t)=>`${e}/${t}`)},Zi=e=>{Ji(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},Qi=e=>{Ji(e,`Mul`,(e,t)=>`${e}*${t}`)},$i=e=>{let t=M(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;Ji(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},ea=e=>{Ji(e,`Sub`,(e,t)=>`${e}-${t}`)},ta=e=>{Ji(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},na=e=>{Ji(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},ra=e=>{Ji(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},ia=e=>{Ji(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),fa=l(()=>{"use strict";D(),k(),un(),P(),oa=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=e[0],r=n.dataType,i=n.dims.length;e.forEach((e,a)=>{if(a!==0){if(e.dataType!==r)throw Error(`input tensors should be one type`);if(e.dims.length!==i)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,r)=>{if(r!==t&&e!==n.dims[r])throw Error(`non concat dimensions must match`)})}})},sa=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,ca=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset(`global_idx`,e[i].getByIndices(`indices`));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},la=(e,t,n,r)=>{let i=O.size(n),a=Array(e.length),o=Array(e.length),s=0,c=[],l=[],u=[{type:12,data:i}];for(let n=0;n<e.length;++n)s+=e[n].dims[t],a[n]=s,l.push(e[n].dims.length),o[n]=M(`input${n}`,r,l[n]),c.push(`rank`),u.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)u.push(...A(e[t].dims));u.push(...A(n));let d=N(`output`,r,n.length),f=d.indicesGet(`indices`,t),p=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(`,`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,`u32`);return t.declareVariables(...o,d)})()}

  ${sa(a.length,p)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    var indices = ${d.offsetToIndices(`global_idx`)};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${p});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${ca(o,d)}
  }`}},ua=(e,t)=>{let n=e.inputs,r=n[0].dims,i=O.normalizeAxis(t.axis,r.length);oa(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>O.size(e.dims)>0);e.compute(la(o,i,a,n[0].dataType),{inputs:o})},da=e=>ln({axis:e.axis})}),_a=l(()=>{"use strict";D(),k(),pa=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},ma=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},ha=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},ga=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t===`Clip`){let[n,r]=e?.activation_params||[hn,gn];return{activation:t,clipMax:r,clipMin:n}}else if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),ba=l(()=>{"use strict";va=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},ya=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),Sa=l(()=>{"use strict";xa=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),Ta=l(()=>{"use strict";D(),k(),P(),_a(),Ca=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${j(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,j(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},wa=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=xn(l),f=xn(u),p=xn(c),m=O.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[O.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return ma(t,v),v.push(...A(g,o,s)),h&&v.push(...A(e[2].dims)),v.push(...A(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=Dn(`batch_dims`,e[0].dataType,g.length),c=M(`a`,e[0].dataType,o.length,f),l=M(`b`,e[1].dataType,s.length,d),u=N(`output`,e[0].dataType,_.length,d),m=yn(u.type.tensor),v=pa(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(M(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];ha(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${Ca(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${Ca(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),Pa=l(()=>{"use strict";D(),k(),P(),_a(),Ta(),ba(),Ea=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,Da=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,Oa=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&u%t[0]===0&&a%t[1]===0&&e[0]===4))throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Ea(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${Da(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},ka=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,Aa=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,ja=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(!(f%t[1]===0&&d%t[0]===0&&a%t[1]===0))throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${ka(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${ka(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${Aa(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},Ma=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=yn(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${va(e,l)} {
      var value = ${va(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${Ca(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${va(e,l)} {
      var value = ${va(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${Ca(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${va(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${va(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},Na=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=O.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],ee=S.length,te=[d,f,m/y],C=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];ma(t,C),C.push(...A(u,b,S));let ne=[`rank`,`rank`],re=e.length>2;return re&&(C.push(...A(e[2].dims)),ne.push(`rank`)),C.push(...A(te)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:ne},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:C}),getShaderSource:n=>{let r=u.length,a=Dn(`batchDims`,e[0].dataType,r,1),o=yn(e[0].dataType),s=M(`a`,e[0].dataType,x,y),c=M(`b`,e[1].dataType,ee,y),l=N(`result`,e[0].dataType,te.length,y),d=[s,c];if(re){let t=i?y:1;d.push(M(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];ha(t,f);let p=yn(l.type.tensor),m=pa(t,l.type.value,p),v=Ma(y,re,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?Oa(g,_,o,a):ja(g,_,o,a)}
                   `}}}}),La=l(()=>{"use strict";D(),qt(),P(),_a(),ba(),Sa(),Pa(),Fa=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${va(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${va(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${va(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${va(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${va(s,l)}(0.0);`,x=va(c,l),S=va(e?o:s,l),ee=va(e?s:o,l),te=pa(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${ee} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${ya(i)}
      ${te}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},Ia=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];Kt(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],ee=v[0]*y[0],te=Math.max(v[0]*x,v[1]),C=r%S===0,ne=i%ee===0,re=a%te===0,ie=h?[x,4,4]:[1,1,1],ae=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ma(t,ae),ae.push(...A(e[0].dims,e[1].dims));let oe=[`rank`,`rank`];return o&&(ae.push(...A(e[2].dims)),oe.push(`rank`)),ae.push(...A(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${C};${ne};${re};${S};${ee};${te}`,inputDependencies:oe},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:ae}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];ha(t,i);let a=h?4:1,c=yn(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[M(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),M(`w`,e[1].dataType,e[1].dims.length,a)],f=N(`result`,e[0].dataType,n.length,a);if(o){let t=M(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${xa(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${Fa(l,C,ne,re,o,t,ie[0],ie[1],ie[2],c)}
        ${h?Oa(y,v,c,void 0,!l,te):ja(y,v,c,void 0,!l,te,!1,void 0,s)}`}}}}),Ka=l(()=>{"use strict";D(),qt(),k(),P(),_a(),ba(),Ra=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},za=e=>typeof e==`number`?[e,e,e]:e,Ba=(e,t)=>t<=1?e:e+(e-1)*(t-1),Va=(e,t,n,r=1)=>{let i=Ba(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},Ha=(e,t,n,r,i)=>{i??=Va(e,t[0],r[0]);let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},Ua=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=Ha([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=Ha([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},Wa=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=za(n),[y,b,x]=za(r),S=Ba(p,y),ee=Ba(m,b),te=Ba(h,x),{padInfo:C,outDepth:ne,outHeight:re,outWidth:ie}=Ua(i,c,l,u,g,_,v,S,ee,te),ae=a?f*d:f,oe=[0,0,0,0,0];return o===`channelsFirst`?oe=[s,ae,ne,re,ie]:o===`channelsLast`&&(oe=[s,ne,re,ie,ae]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:ne,outHeight:re,outWidth:ie,outChannels:ae,padInfo:C,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:ee,effectiveFilterWidth:te,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:oe,filterShape:t}},Ga=(e,t,n,r,i,a)=>{let o=a===`channelsLast`;o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],c={x:n.map((e,t)=>t)},l=[Math.ceil(Ra(c.x.map(e=>n[e]))/s[0]),1,1];Kt(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let u=[{type:12,data:O.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];ma(t,u),u.push(...A(e[0].dims,e[1].dims));let d=[`rank`,`rank`],f=e.length===3;return f&&(u.push(...A(e[2].dims)),d.push(`rank`)),u.push(...A(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:u}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];ha(t,s);let c=yn(e[0].dataType),l=M(`x`,e[0].dataType,e[0].dims.length,1),u=M(`W`,e[1].dataType,e[1].dims.length,1),d=[l,u],p=N(`result`,e[0].dataType,n.length,1),m=``;if(f){let t=M(`bias`,e[2].dataType,e[2].dims.length,1);d.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c} {
          return bias[${o?j(`coords`,4,5):j(`coords`,1,5)}];
        }`}let h=va(1,c),g=pa(t,h,c);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${l.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...d,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${j(`coords`,0,l.rank)};
              let d2 = ${o?j(`coords`,l.rank-1,l.rank):j(`coords`,1,l.rank)};
              let xFRCCorner = vec3<u32>(${o?j(`coords`,1,l.rank):j(`coords`,2,l.rank)},
              ${o?j(`coords`,2,l.rank):j(`coords`,3,l.rank)},
              ${o?j(`coords`,3,l.rank):j(`coords`,4,l.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?j(`uniforms.x_shape`,1,l.rank):j(`uniforms.x_shape`,2,l.rank)};
              let xShapeZ = ${o?j(`uniforms.x_shape`,2,l.rank):j(`uniforms.x_shape`,3,l.rank)};
              let xShapeW = ${o?j(`uniforms.x_shape`,3,l.rank):j(`uniforms.x_shape`,4,l.rank)};
              let xShapeU = ${o?j(`uniforms.x_shape`,4,l.rank):j(`uniforms.x_shape`,1,l.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?`value = value + getBiasByOutputCoords(coords)`:``};
              ${g}
              result[global_idx] = f32(value);
          }`}}}}),Ya=l(()=>{"use strict";D(),k(),P(),_a(),qa=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?xn(l):1,f=O.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];ma(t,p),p.push(...A(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...A([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=N(`output`,e[0].dataType,n.length,d),u=yn(l.type.tensor),f=pa(t,l.type.value,u),p=M(`x`,e[0].dataType,o.length),m=M(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(M(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];ha(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},Ja=(e,t,n,r)=>{let i=e.length>2,a=xn(n[3]),o=xn(n[2]),s=O.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ma(t,d),d.push(...A(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=N(`output`,e[0].dataType,u.length,a),s=yn(r.type.tensor),d=pa(t,r.type.value,s),p=M(`x`,e[0].dataType,c.length,a),m=M(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(M(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return ha(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),ao=l(()=>{"use strict";k(),La(),Ka(),Pa(),Ya(),_a(),Ta(),zn(),Xa=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},Za=[2,3,1,0],Qa=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},$a=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();pn.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},eo=e=>{let t=ga(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},to=(e,t,n,r)=>{let i=n.format===`NHWC`,a=Xa(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(In(t[1],Za),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(Ja(o,n,a,r),{inputs:o}):e.compute(qa(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(In(t[1],Za),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(wa(v,n,a,_,i,r),{inputs:v}):e.compute(Na(v,n,a,_,i,r),{inputs:v});return}let g=e.kernelCustomData.wT??e.compute(In(t[1],Za),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let _=[t[0],g];o&&_.push(t[2]);let v=i?f*p:m,y=i?m:f*p,b=u*d*l;e.compute(Ia(_,n,a,v,y,b,o,!0,r),{inputs:_})},no=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=$a({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);to(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},ro=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=$a(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=Wa(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(Ga(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},io=(e,t)=>{if(Qa(e.inputs,t),e.inputs[0].dims.length===3)no(e,t);else if(e.inputs[0].dims.length===5)ro(e,e.inputs,t);else{let n=$a(t,e.inputs);to(e,e.inputs,n)}}}),so=l(()=>{"use strict";D(),qt(),k(),P(),oo=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?xn(c):1,d=a?xn(l):1,f=a?l===1?u:d:1,p=O.size(i)/d,m=[Math.ceil(p/64),1,1];Kt(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${m}`);let h=[`rank`,`rank`],g=[t.strides[0],t.strides[1]],_=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],v=[t.dilations[0],t.dilations[1]],y=[_[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),_[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],b=[y[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),y[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:p},{type:12,data:g},{type:12,data:_},{type:12,data:v},{type:12,data:y},{type:6,data:b},{type:12,data:c},{type:12,data:l},...A(e[0].dims,e[1].dims)];return r&&(x.push(...A(e[2].dims)),h.push(`rank`)),x.push(...A(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${f}${d}${l===1}`,inputDependencies:h},getRunData:()=>({dispatchGroup:{x:m[0],y:m[1],z:m[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:g.length},{name:`filter_dims`,type:`u32`,length:_.length},{name:`dilations`,type:`u32`,length:_.length},{name:`effective_filter_dims`,type:`u32`,length:y.length},{name:`pads`,type:`i32`,length:b.length},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=yn(e[0].dataType),s=a?1:2,c=a?2:3,p=a?3:1,m=M(`W`,e[1].dataType,e[1].dims.length,f),h=M(`Dy`,e[0].dataType,e[0].dims.length,u),v=[h,m];r&&v.push(M(`bias`,e[2].dataType,[i[p]].length,d));let x=N(`result`,e[0].dataType,i.length,d),S=`
            let outputIndices = ${x.offsetToIndices(`global_idx * ${d}`)};
            let batch = ${x.indicesGet(`outputIndices`,0)};
            let d1 = ${x.indicesGet(`outputIndices`,p)};
            let r = ${x.indicesGet(`outputIndices`,s)};
            let c = ${x.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${x.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${u}) {
                  let xValue = ${a?h.getByOffset(`${h.indicesToOffset(`${h.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):h.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
                  ${(()=>{let e=``;if(u===1)e+=`
        let w_offset = ${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${m.getByOffset(`w_offset / ${f}`)};
        dotProd = dotProd + xValue * wValue;`;else if(l===1)e+=`
          let wValue = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${f}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${f}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${u};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${d}]`:``};
            ${x.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(...v,x)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${S}}`}}}}),vo=l(()=>{"use strict";so(),_a(),zn(),co=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,lo=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},uo=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-+!!s;i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=co(s,o[i],a[i],t[f],n[i],p);lo(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},fo=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}uo(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},po=e=>{let t=ga(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},mo=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},ho=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(In(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(oo(a,n,r),{inputs:a})},go=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=fo({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);ho(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},_o=(e,t)=>{if(mo(e.inputs,t),e.inputs[0].dims.length===3)go(e,t);else{let n=fo(t,e.inputs);ho(e,e.inputs,n)}}}),So=l(()=>{"use strict";D(),k(),un(),P(),yo=(e,t,n,r)=>{let i=O.size(t),a=t.length,o=M(`input`,e,a),s=N(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=O.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...A(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=j(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},bo=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(yo(r,n,i,t),{inputs:[0]})},xo=e=>{let t=e.exclusive===1,n=e.reverse===1;return ln({exclusive:t,reverse:n})}}),Oo=l(()=>{"use strict";D(),k(),un(),P(),Co=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},wo=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},To=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=M(`a`,p,f),h=N(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=O.size(t),u=d.dims,f=O.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...A(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${wo(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},Eo=(e,t)=>{Co(e.inputs),e.compute(To(e.inputs[0],t))},Do=e=>ln({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Bo=l(()=>{"use strict";D(),k(),un(),P(),ko=`[a-zA-Z]|\\.\\.\\.`,Ao=`(`+ko+`)+`,jo=`^`+Ao+`$`,Mo=`(`+Ao+`,)*`+Ao,No=`^`+Mo+`$`,Po=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Fo=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(No)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(jo)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(Ao)))throw Error(`Invalid RHS`);r.match(RegExp(ko,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(jo))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(ko,`g`)),l=new Po(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},Io=e=>e+`_max`,Lo=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>M(`input${n}`,t,e)),a=O.size(r),o=N(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...A(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...A(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=[],a=[],c=[],l=[],u=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,s)=>{if(n.rhs.symbolToIndices.has(s)){let r=n.rhs.symbolToIndices.get(s)?.[0];r!==void 0&&n.lhs.forEach((n,a)=>{if(e.inputIndices.includes(a)){let e=n.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[a].indicesSet(`input${a}Indices`,e,o.indicesGet(`outputIndices`,r))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{r.push(`${i[n].indicesSet(`input${n}Indices`,e,`${s}`)}`)}),l.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),a.push(`for(var ${s}: u32 = 0; ${s} < uniforms.${Io(s)}; ${s}++) {`),c.push(`}`)});let d=u?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...a,...r,`var prod = 1.0;`,...l,`sum += prod;`,...c];return`
            ${e.registerUniforms(s.map(e=>({name:`${Io(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${d.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},Ro=(e,t)=>{let n=new Fo(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(Lo(i,e.inputs[0].dataType,n,r))},zo=e=>{let t=e.equation.replace(/\s+/g,``);return ln({equation:t})}}),Ko=l(()=>{"use strict";D(),k(),P(),Vo=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},Ho=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Uo=(e,t)=>e.length>t.length?Ho(e,t):Ho(t,e),Wo=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Uo(t,n),i=e[0].dataType,a=i===9||O.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(O.size(r)/s),l=e=>{let n=M(`input`,i,t.length,o),a=N(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...A(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},Go=e=>{Vo(e.inputs),e.compute(Wo(e.inputs),{inputs:[0]})}}),Yo=l(()=>{"use strict";D(),k(),P(),Vi(),qo=e=>{let t=e[0].dataType,n=O.size(e[0].dims),r=O.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=M(`x`,t,[1],4),r=M(`bias`,t,[1],4),a=N(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${Ni(bn(t))}

    ${e.mainStart(_n)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,Pi(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/_n/4)}})}},Jo=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?Fi(e):e.compute(qo(e.inputs))}}),es=l(()=>{"use strict";D(),k(),un(),P(),Xo=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},Zo=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=O.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(O.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...A(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=M(`data`,e[0].dataType,e[0].dims.length,c),s=M(`inputIndices`,e[1].dataType,e[1].dims.length),l=N(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},Qo=e=>ln({axis:e.axis}),$o=(e,t)=>{let n=e.inputs;Xo(n),e.compute(Zo(e.inputs,t))}}),is=l(()=>{"use strict";D(),k(),P(),ts=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...A(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[M(`indices_data`,t.dataType,t.dims.length),N(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},ns=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=O.sizeToDimension(a,a.length-1),c=O.sizeFromDimension(r,t.batchDims+o),l=O.sizeToDimension(r,t.batchDims),u=O.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=ts(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=O.size(g),v=[{type:12,data:_},{type:12,data:c},...A(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=M(`data`,n[0].dataType,n[0].dims.length),r=M(`slice_offsets`,12,m.dims.length),i=N(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},rs=e=>({batchDims:e.batch_dims,cacheKey:``})}),ls=l(()=>{"use strict";D(),k(),un(),P(),as=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},os=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=O.normalizeAxis(t.gatherAxis,i),o=O.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=O.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...A(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=M(`data`,e[0].dataType,e[0].dims.length),o=M(`inputIndices`,e[1].dataType,e[1].dims.length),c=M(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?M(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=N(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${bn(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},ss=(e,t)=>{let n=e.inputs;as(n,t),e.compute(os(e.inputs,t))},cs=e=>ln({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),ms=l(()=>{"use strict";D(),k(),un(),P(),us=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},ds=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=O.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=O.size(l),d=M(`input`,r,i),f=M(`indicesInput`,o,a.length),p=N(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...A(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},fs=e=>ln({axis:e.axis}),ps=(e,t)=>{let n=e.inputs;us(n),e.compute(ds(e.inputs,t))}}),ys=l(()=>{"use strict";D(),k(),P(),hs=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},gs=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=mn.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=Math.ceil(a/16),l=Math.ceil(i/16);O.size(s);let u=[{type:12,data:c},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],d=[`type`,`type`];return e.length===3&&(u.push(...A(e[2].dims)),d.push(`rank`)),u.push(...A(s)),{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:c*l},programUniforms:u}),getShaderSource:n=>{let r=M(`a`,e[0].dataType,e[0].dims),i=M(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=M(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=N(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},_s=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),vs=(e,t)=>{hs(e.inputs),e.compute(gs(e.inputs,t))}}),Ps=l(()=>{"use strict";D(),k(),un(),P(),[bs,xs,Ss,Cs]=[0,1,2,3],ws=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},Ts=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Es=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Ds=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Os=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,ks=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${bs}] = batch;
     indices[${xs}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Ss}] = u32(r);
            indices[${Cs}] = u32(c);
          }
        `;case`border`:return`
          indices[${Ss}] = u32(clamp(r, 0, H - 1));
          indices[${Cs}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${Ss}] = gs_reflect(r, border[1], border[3]);
          indices[${Cs}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,As=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${bs}], indices[${xs}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${bs}], indices[${xs}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${bs}], indices[${xs}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${bs}], indices[${xs}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${bs}], indices[${xs}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${bs}], indices[${xs}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,js=(e,t)=>{let n=M(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=M(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[bs,xs,Ss,Cs]=[0,3,1,2]);let o=N(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:O.size(a)},...A(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=O.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${Ts}
  ${Es(s)}
  ${Ds(t)}
  ${Os(t)}
  ${ks(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${Ss}]);
      let W_in = i32(uniforms.x_shape[${Cs}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${bs}], indices[${Ss}], indices[${Cs}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${As(o,s,t)}
  }`}},Ms=(e,t)=>{ws(e.inputs),e.compute(js(e.inputs,t))},Ns=e=>ln({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Hs=l(()=>{"use strict";D(),k(),un(),Xt(),Kr(),P(),zn(),Fs=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Is=(e,t)=>{let n=e[0],r=Fs(e,1),i=Fs(e,2),a=Fs(e,3),o=Fs(e,4),s=Fs(e,5),c=Fs(e,6),l=Fs(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&O.size(c.dims)&&O.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&O.size(c.dims)||l&&O.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&O.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&O.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&O.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&O.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}if(o&&O.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&O.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},Ls=e=>ln({...e}),Rs=ln({perm:[0,2,1,3]}),zs=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=O.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=N(`qkv_with_bias`,t.dataType,s),i=M(`qkv`,t.dataType,s),a=M(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},Bs=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&O.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=zs(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(In(c,Rs.perm),{inputs:[c],outputs:[-1]})[0]}else return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(In(c,Rs.perm),{inputs:[c],outputs:[-1]})[0]},Vs=(e,t)=>{let n=Is(e.inputs,t),r=e.inputs[0],i=Fs(e.inputs,1),a=Fs(e.inputs,2),o=Fs(e.inputs,3),s=Fs(e.inputs,4),c=Fs(e.inputs,5),l=Fs(e.inputs,6),u=Fs(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=Bs(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return Ur(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=Bs(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=Bs(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);Ur(e,f,p,m,s,void 0,l,u,c,n)}}),Xs=l(()=>{"use strict";D(),k(),un(),P(),Us=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},Ws=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),ln({numOutputs:r,axis:t.axis,splitSizes:n})},Gs=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${j(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ks=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},qs=(e,t)=>{let n=e[0].dims,r=O.size(n),i=e[0].dataType,a=O.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=M(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=N(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...A(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${Gs(c.length)}
  ${Ks(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${j(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},Js=(e,t)=>{Us(e.inputs);let n=e.inputs.length===1?t:Ws(e.inputs,t);e.compute(qs(e.inputs,n),{inputs:[0]})},Ys=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes lengh must be equal`);return ln({axis:t,numOutputs:r,splitSizes:n})}}),tc=l(()=>{"use strict";un(),Kr(),Hs(),Xs(),zn(),Zs=(e,t)=>{if(t.doRotary)throw Error(`GroupQuerryAttention do_rotary attribute is not supported`);if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=n.dims[0],c=n.dims[1],l=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],u=c,d=0,f=!r||r.dims.length===0,p=Math.floor(f?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);f&&(l=p*t.numHeads);let m=a&&a.dims.length!==0,h=o&&o.dims.length!==0;if(m&&a.dims.length===4&&a.dims[0]===s&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===p)throw Error(`BSNH pastKey/pastValue is not supported`);if(m&&h){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);d=a.dims[2]}else if(m||h)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);u=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==p)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);u=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==p)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);u=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);g=3}let _=!1,v=t.kvNumHeads?p*t.kvNumHeads:l;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(u!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);v=i.dims[2]}else{if(u!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);v=i.dims[1]*i.dims[3],_=!0}}let y=e.length>4?e[5]:void 0;if(y&&y.dims.length!==1&&y.dims[0]!==s)throw Error(`Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size`);return{batchSize:s,sequenceLength:c,pastSequenceLength:d,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:v,headSize:p,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:g}},Qs=ln({perm:[0,2,1,3]}),$s=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(In(r,Qs.perm),{inputs:[r],outputs:[-1]})[0]),r},ec=(e,t)=>{let n=Zs(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=ln({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(qs([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h=Bs(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,f,void 0,0);Ur(e,h,$s(e,p,n),$s(e,m,n),void 0,void 0,o,s,void 0,n,c,l)}}),oc=l(()=>{"use strict";D(),k(),zn(),P(),nc=(e,t,n,r,i,a,o,s)=>{let c=xn(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...A(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=M(`x`,t.dataType,3,c),a=[i,M(`scale`,n.dataType,n.dims),M(`bias`,r.dataType,r.dims),N(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${wn(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${wn(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},rc=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[1],s=O.sizeFromDimension(r,2),c=xn(s),l=O.size(i)/c,u=nc(e,t[0],t[1],t[2],a,s,o,n.epsilon),d=[a,o,s/c],f=[a,o];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${c}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...A(d,f,d)]}),getShaderSource:e=>{let n=M(`x`,t[0].dataType,d.length,c),r=M(`scale_shift`,1,f.length,2),i=N(`output`,t[0].dataType,d.length,c),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],u]})},ic=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=O.sizeFromDimension(r,1)/o,c=xn(o),l=O.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f||=r[e+1]!==1,p.push(e+1);f&&=r[r.length-1]!==1;let m=f?e.compute(In(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=nc(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=yn(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=M(`input`,t[0].dataType,t[0].dims,c),s=N(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},ac=(e,t)=>{t.format===`NHWC`?ic(e,e.inputs,t):rc(e,e.inputs,t)}}),uc=l(()=>{"use strict";D(),k(),P(),sc=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},cc=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=O.normalizeAxis(t.axis,i.length),l=O.sizeToDimension(i,c),u=O.sizeFromDimension(i,c),d=O.size(a.dims),f=o?O.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=xn(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=yn(e[0].dataType),i=[M(`x`,e[0].dataType,e[0].dims,m),M(`scale`,a.dataType,a.dims,m)];return o&&i.push(M(`bias`,o.dataType,o.dims,m)),i.push(N(`output`,e[0].dataType,s,m)),_&&i.push(N(`mean_data_output`,1,p)),v&&i.push(N(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Sn(`f32`,m)};
    var mean_square_vector = ${Sn(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Cn(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${wn(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${wn(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Cn(n,m,`x[j + offset]`)};
      let f32scale = ${Cn(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${Cn(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},lc=(e,t)=>{sc(e.inputs),e.compute(cc(e.inputs,t,e.outputCount))}}),pc=l(()=>{"use strict";k(),Ta(),Pa(),dc=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},fc=e=>{dc(e.inputs);let t=fn.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(wa(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=O.size(e.inputs[0].dims.slice(0,-2)),o=O.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(Na(c,{activation:``},t,s),{inputs:c})}else e.compute(Na(e.inputs,{activation:``},t))}}}),yc=l(()=>{"use strict";D(),k(),un(),P(),mc=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!O.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(O.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(O.size(n)!==r)throw Error(`zeroPoints input size error.`)}},hc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=O.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=xn(t.k),f=xn(l),p=xn(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=O.size(m)/p/h,_=[],v=[c,i,a/d],y=O.convertShape(e[1].dims).slice();y.splice(-1,1,l/f),_.push(...A(v)),_.push(...A(y)),_.push(...A(e[2].dims)),e.length===4&&_.push(...A(O.convertShape(e[3].dims)));let b=[c,i,o/p];return _.push(...A(b)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:_}),getShaderSource:n=>{let r=v.length,i=M(`a`,e[0].dataType,r,d),a=M(`b`,12,y.length,f),o=M(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?M(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=b.length,m=N(`output`,e[0].dataType,u,p),g=yn(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),x=()=>{let e=`
          // reuse a data
            var input_offset = ${i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`)};
            var a_data: ${_};
            for (var j: u32 = 0; j < ${8/d}; j++) {
              a_data[j] = ${i.getByOffset(`input_offset`)};
              input_offset++;
            }
          `;for(let t=0;t<p*h;t++)e+=`
            b_value = ${f===1?`b${t}_data`:`b${t}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,n)=>`(b_quantized_values[${n}] - ${c?`zero_point${t}`:`zero_point`}) * scale${t}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${t}`:`zero_point`}`).join(`,`)})) * scale${t};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(t/p)}]${p>1?`[${t%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data[${t}] * b_dequantized_values[${t}]`:`dot(a_data[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `;return e},S=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${g}(8);`}
            `;for(let t=0;t<p*h;t++)e+=`
            let scale${t} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${t} = ${g}((zero_point_word) & 0xFu);`:``}
            col_index += 1;`;return e},ee=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${S()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${ee()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${x()}
                word_offset += ${8/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},gc=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=O.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=xn(t.k),f=xn(l),p=s.concat([i,o]),m=o%8==0?8:o%4==0?4:1,h=128/m,g=h*f*8,_=g/d,v=g/t.blockSize,y=O.size(p)/m,b=[],x=[c,i,a/d],S=O.convertShape(e[1].dims).slice();S.splice(-1,1,l/f),b.push(...A(x)),b.push(...A(S)),b.push(...A(e[2].dims)),e.length===4&&b.push(...A(O.convertShape(e[3].dims)));let ee=[c,i,o];return b.push(...A(ee)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${h};${m}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x:y},programUniforms:b}),getShaderSource:n=>{let r=x.length,i=M(`a`,e[0].dataType,r,d),a=M(`b`,12,S.length,f),o=M(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?M(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=ee.length,u=N(`output`,e[0].dataType,l),p=yn(e[0].dataType),g=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${h}>, ${m}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([h,m,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${v} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${c?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${p}(8);`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${g()}
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
              let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              word_offset += ${8/d};
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${h}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},_c=(e,t)=>{mc(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute(gc(e.inputs,t)):e.compute(hc(e.inputs,t))},vc=e=>ln(e)}),kc=l(()=>{"use strict";D(),k(),P(),bc=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},xc=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${j(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${j(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${j(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Sc=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${j(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${j(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${j(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${j(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Cc=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${j(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${j(`uniforms.x_shape`,i,t)})) {
                  k = i32(${j(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${j(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},wc=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${j(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${j(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${j(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${j(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${j(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Tc=(e,t,n)=>{switch(n.mode){case 0:return xc(e,t,n.pads.length);case 1:return Sc(e,t,n.pads.length);case 2:return Cc(e,t,n.pads.length);case 3:return wc(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},Ec=(e,t)=>{let n=O.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:O.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...A(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=N(`output`,e[0].dataType,n.length),s=M(`x`,e[0].dataType,r.length),c=s.type.value,l=Tc(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},Dc=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}else return t},Oc=(e,t)=>{bc(e.inputs);let n=Dc(e.inputs,t);e.compute(Ec(e.inputs,n),{inputs:[0]})}}),Yc=l(()=>{"use strict";Ie(),D(),k(),P(),Ac=e=>{if(C.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},jc=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();pn.adjustPoolAttributes(n,i,o,s,c,l);let u=pn.computePoolOutputShape(n,i,s,c,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},Mc=(e,t)=>{let n=t.format===`NHWC`,r=O.size(e),i=O.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}else{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=O.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},Nc=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=N(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}else{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${j(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${j(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${j(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${j(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},Pc=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Fc=e=>`${Pc(e)};${e.countIncludePad}`,Ic=e=>`${Pc(e)};${e.storageOrder};${e.dilations}`,Lc=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Rc=(e,t,n,r)=>{let[i,a]=jc(t,r,n),o=M(`x`,t.dataType,t.dims.length),s=o.type.value,c=``;i.countIncludePad?c+=`value /= ${s}(uniforms.kernelSize);`:c+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[l,u,d,f,p]=Mc(a,i);return l.push(...A(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${d};${f};${p}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(a)/64)},programUniforms:l}),getShaderSource:e=>Nc(e,o,t.dims.length,a.length,i,`value += x_val;`,c,0,u,d,f,p)}},zc=e=>{let t=e.count_include_pad!==0,n=Lc(e);if(n.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for AveragePool`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:Fc(r)}},Bc=(e,t)=>{Ac(e.inputs),e.compute(Rc(`AveragePool`,e.inputs[0],!1,t))},Vc={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Hc=e=>{let t=e.format;return{format:t,...Vc,cacheKey:t}},Uc=(e,t)=>{Ac(e.inputs),e.compute(Rc(`GlobalAveragePool`,e.inputs[0],!0,t))},Wc=(e,t,n,r)=>{let[i,a]=jc(t,r,n),o=M(`x`,t.dataType,t.dims.length),s=[`rank`],[c,l,u,d,f]=Mc(a,i);return c.push(...A(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${u};${d};${f}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(a)/64)},programUniforms:c}),getShaderSource:e=>Nc(e,o,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,l,u,d,f)}},Gc=(e,t)=>{Ac(e.inputs),e.compute(Wc(`MaxPool`,e.inputs[0],!1,t))},Kc=e=>{let t=e.storage_order,n=e.dilations,r=Lc(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for MaxPool`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:Ic(i)}},qc=e=>{let t=e.format;return{format:t,...Vc,cacheKey:t}},Jc=(e,t)=>{Ac(e.inputs),e.compute(Wc(`GlobalMaxPool`,e.inputs[0],!0,t))}}),el=l(()=>{"use strict";D(),k(),un(),P(),Xc=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[0].dataType===6&&e.length>2)throw Error(`In the case of dequantizing int32 there is no zero point.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},Zc=(e,t)=>{let n=O.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=O.size(a),c=r===3||r===2,l=c?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(O.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=xn(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=M(`input`,c?12:r,l.length,v),b=M(`scale`,o,u.length),x=d?M(`zero_point`,c?12:r,f.length):void 0,S=N(`output`,o,a.length,_),ee=[y,b];x&&ee.push(x);let te=[l,u];d&&te.push(f);let C=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...A(...te,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...ee,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:C})}},Qc=(e,t)=>{Xc(e.inputs,t),e.compute(Zc(e.inputs,t))},$c=e=>ln({axis:e.axis,blockSize:e.blockSize})}),il=l(()=>{"use strict";Ie(),D(),P(),tl=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},nl=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...A(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=N(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},rl=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),C.webgpu.validateInputContent&&tl(t,n,r),e.compute(nl(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),ll=l(()=>{"use strict";D(),k(),un(),P(),al=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},ol=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=Math.ceil(O.size(r)/1),o=r[r.length-1],s=O.sizeFromDimension(n,o),c=[{type:12,data:a},{type:12,data:o},{type:12,data:s},...A(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:n=>{let a=M(`indices`,e[1].dataType,e[1].dims.length),o=M(`updates`,e[2].dataType,e[2].dims.length,1),s=t.reduction!==`none`&&t.reduction!==``?En(`output`,e[0].dataType,i.length):N(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(a,o,s)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var hasDuplicates = false;
  if (${t.reduction===`none`}) {
    let n = ${O.size(r)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction===`none`} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${al(t.reduction,`output[data_offset + i]`,`value`,s.type.value)}
  }

      }`}}},sl=e=>ln({reduction:e.reduction}),cl=(e,t)=>{e.compute(ol(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Al=l(()=>{"use strict";D(),k(),un(),P(),ul=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},dl=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},fl=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);ul(r,t),t.axes.length>0&&dl(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},pl=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,ml=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${pl(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${pl(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,hl=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,gl=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},_l=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e));else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},vl=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},yl=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${j(`uniforms.scales`,`i`,r)};
        var roi_low = ${j(`uniforms.roi`,`i`,i)};
        var roi_hi = ${j(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${j(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${j(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,bl=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${j(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${j(`uniforms.roi`,`i`,a)};
          var roi_hi = ${j(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${j(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${j(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,xl=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${j(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,Sl=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,Cl=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Sl(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},wl=(e,t,n,r,i,a,o,s,c,l)=>{let[u,d]=n.length===2?[0,1]:[2,3],f=e.type.value,p=o=>{let d=o===u?`row`:`col`;return`
      fn ${d}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${d}: ${f} = originalIdx + ${f}(i);
          if (${d} < 0 || ${d} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${d} = max(0, min(${d}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${d})`)};
          data[i + 1] = ${o===u?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${p(u)};
    ${p(d)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Tl=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${Sl(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},El=(e,t,n,r,i,a)=>{let o=e.dims,s=gl(a,t.axes,o.length),c=_l(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=vl(o,l,t)));let u=N(`output`,e.dataType,c.length),d=M(`input`,e.dataType,o.length),f=O.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${ml(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${xl(d,o)};
              ${hl(t.nearestMode,n,g)};
              ${bl(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${yl(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Cl(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${Tl(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${wl(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...A(o,c)]})}},Dl=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Ol=(e,t)=>{let n=[],r=[],i=[],a=Dl(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);fl(e.inputs,t,a,n,r,i),e.compute(El(e.inputs[0],t,a,n,r,i),{inputs:[0]})},kl=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return ln({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),Pl=l(()=>{"use strict";D(),k(),un(),P(),jl=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!O.areEqual(r.dims,[])&&!O.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!O.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=O.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`)},Ml=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=O.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=O.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...A(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:ln({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=M(`input`,e[0].dataType,e[0].dims.length),i=M(`position_ids`,e[1].dataType,e[1].dims.length),a=M(`cos_cache`,e[2].dataType,e[2].dims.length),o=M(`sin_cache`,e[3].dataType,e[3].dims.length),s=N(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(_n)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,N(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(f)/_n)},programUniforms:m})}},Nl=(e,t)=>{jl(e.inputs,t),e.compute(Ml(e.inputs,t))}}),Rl=l(()=>{"use strict";D(),k(),P(),Fl=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},Il=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=O.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=xn(l),_=[{type:12,data:c},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],v=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[M(`x`,e[0].dataType,e[0].dims,g),M(`skip`,e[1].dataType,e[1].dims,g),M(`gamma`,e[2].dataType,e[2].dims,g)];d&&r.push(M(`beta`,e[3].dataType,e[3].dims,g)),f&&r.push(M(`bias`,e[4].dataType,e[4].dims,g)),r.push(N(`output`,e[0].dataType,s,g)),p&&r.push(N(`mean_output`,1,u)),m&&r.push(N(`inv_std_output`,1,u)),h&&r.push(N(`input_skip_bias_sum`,e[0].dataType,s,g));let a=yn(e[0].dataType),o=yn(1,g);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${Cn(a,g,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${wn(`sum`,g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${wn(`square_sum`,g)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},y=[{dims:s,dataType:e[0].dataType}];return n>1&&y.push({dims:u,dataType:1}),n>2&&y.push({dims:u,dataType:1}),n>3&&y.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${g};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:v,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:_})}},Ll=(e,t)=>{Fl(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Il(e.inputs,t,e.outputCount,!1),{outputs:n})}}),ql=l(()=>{"use strict";D(),k(),un(),P(),zl=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},Bl=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`);return n},Vl=(e,t)=>{if(e.length>1){let t=Bl(e,1),n=Bl(e,2),r=Bl(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),ln({starts:t,ends:n,axes:r})}else return t},Hl=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Ul=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length}; i >= 0; i--) {
            let input_shape_i = ${j(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${j(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${j(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${j(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,Wl=(e,t)=>{let n=e[0].dims,r=O.size(n),i=t.axes.length>0?O.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Bl(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>Hl(e,t,n,i,a)),s=t.ends.map((e,t)=>Hl(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t];o[t]=i+r*a[t],s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=N(`output`,e[0].dataType,l.length),f=M(`input`,e[0].dataType,e[0].dims.length),p=O.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...A(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${Ul(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},Gl=(e,t)=>{zl(e.inputs,t);let n=Vl(e.inputs,t);e.compute(Wl(e.inputs,n),{inputs:[0]})},Kl=e=>{let t=e.starts,n=e.ends,r=e.axes;return ln({starts:t,ends:n,axes:r})}}),Ql=l(()=>{"use strict";D(),k(),un(),zn(),P(),Jl=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},Yl=(e,t)=>{let n=e.inputs[0],r=n.dims,i=O.size(r),a=r.length,o=O.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(In(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=xn(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=M(`x`,c.dataType,c.dims,p),v=N(`result`,c.dataType,c.dims,p),y=_.type.value,b=yn(c.dataType)===`f32`?`var threadMax = ${y}(-3.402823e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${wn(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(In(x,l),{inputs:[x]})},Xl=(e,t)=>{Jl(e.inputs),Yl(e,t)},Zl=e=>ln({axis:e.axis})}),iu=l(()=>{"use strict";D(),k(),P(),$l=e=>Array.from(e.getBigInt64Array(),Number),eu=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if($l(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},tu=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},nu=(e,t)=>{let n=e[0].dims,r=t??$l(e[1]),i=tu(n,r),a=O.size(i),o=e[0].dataType,s=M(`input`,o,n.length),c=N(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...A(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},ru=e=>{eu(e.inputs),e.compute(nu(e.inputs),{inputs:[0]})}}),cu=l(()=>{"use strict";D(),k(),P(),au=(e,t,n,r,i)=>{let a=N(`output_data`,i,n.length,4),o=M(`a_data`,t[1].dataType,t[1].dims.length,4),s=M(`b_data`,t[2].dataType,t[2].dims.length,4),c=M(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},ou=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(O.areEqual(t,n)&&O.areEqual(n,r)),o=t,s=O.size(t);if(a){let e=fn.calcShape(fn.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=O.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>au(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...A(r,t,n,o)]})}},su=e=>{e.compute(ou(e.inputs))}}),uu=l(()=>{"use strict";Lr(),Kr(),z(),Yr(),Gi(),aa(),fa(),ao(),vo(),So(),Oo(),Bo(),Ko(),Yo(),es(),is(),ls(),ms(),ys(),Ps(),tc(),oc(),uc(),pc(),yc(),Hs(),kc(),Yc(),el(),il(),ll(),Pr(),Al(),Pl(),Rl(),ql(),Ql(),Xs(),iu(),zn(),Vi(),cu(),lu=new Map([[`Abs`,[Qr]],[`Acos`,[$r]],[`Acosh`,[ei]],[`Add`,[Yi]],[`ArgMax`,[I,Ir]],[`ArgMin`,[F,Ir]],[`Asin`,[ti]],[`Asinh`,[ni]],[`Atan`,[ri]],[`Atanh`,[ii]],[`Attention`,[Gr]],[`AveragePool`,[Bc,zc]],[`BatchNormalization`,[Jr]],[`BiasAdd`,[H]],[`BiasSplitGelu`,[Wi]],[`Cast`,[oi,ai]],[`Ceil`,[li]],[`Clip`,[ci]],[`Concat`,[ua,da]],[`Conv`,[io,eo]],[`ConvTranspose`,[_o,po]],[`Cos`,[ui]],[`Cosh`,[di]],[`CumSum`,[bo,xo]],[`DepthToSpace`,[Eo,Do]],[`DequantizeLinear`,[Qc,$c]],[`Div`,[Xi]],[`Einsum`,[Ro,zo]],[`Elu`,[pi,fi]],[`Equal`,[Zi]],[`Erf`,[hi]],[`Exp`,[gi]],[`Expand`,[Go]],[`FastGelu`,[Jo]],[`Floor`,[_i]],[`FusedConv`,[io,eo]],[`Gather`,[$o,Qo]],[`GatherElements`,[ps,fs]],[`GatherBlockQuantized`,[ss,cs]],[`GatherND`,[ns,rs]],[`Gelu`,[vi]],[`Gemm`,[vs,_s]],[`GlobalAveragePool`,[Uc,Hc]],[`GlobalMaxPool`,[Jc,qc]],[`Greater`,[ta]],[`GreaterOrEqual`,[ra]],[`GridSample`,[Ms,Ns]],[`GroupQueryAttention`,[ec]],[`HardSigmoid`,[Ei,Ti]],[`InstanceNormalization`,[ac]],[`LayerNormalization`,[lc]],[`LeakyRelu`,[yi,fi]],[`Less`,[na]],[`LessOrEqual`,[ia]],[`Log`,[Li]],[`MatMul`,[fc]],[`MatMulNBits`,[_c,vc]],[`MaxPool`,[Gc,Kc]],[`Mul`,[Qi]],[`MultiHeadAttention`,[Vs,Ls]],[`Neg`,[xi]],[`Not`,[bi]],[`Pad`,[Oc]],[`Pow`,[$i]],[`QuickGelu`,[Bi,fi]],[`Range`,[rl]],[`Reciprocal`,[Si]],[`ReduceMin`,[kr]],[`ReduceMean`,[wr]],[`ReduceMax`,[Or]],[`ReduceSum`,[jr]],[`ReduceProd`,[Ar]],[`ReduceL1`,[Tr]],[`ReduceL2`,[Er]],[`ReduceLogSum`,[Nr]],[`ReduceLogSumExp`,[Dr]],[`ReduceSumSquare`,[Mr]],[`Relu`,[Ci]],[`Resize`,[Ol,kl]],[`RotaryEmbedding`,[Nl]],[`ScatterND`,[cl,sl]],[`Sigmoid`,[wi]],[`Sin`,[Di]],[`Sinh`,[Oi]],[`Slice`,[Gl,Kl]],[`SkipLayerNormalization`,[Ll]],[`Split`,[Js,Ys]],[`Sqrt`,[ki]],[`Softmax`,[Xl,Zl]],[`Sub`,[ea]],[`Tan`,[Ai]],[`Tanh`,[Mi]],[`ThresholdedRelu`,[Ii,fi]],[`Tile`,[ru]],[`Transpose`,[Ln,Rn]],[`Where`,[su]]])}),fu=l(()=>{"use strict";Ie(),qt(),P(),du=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){Te(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Ee(e.programInfo.name)}dispose(){}build(e,t){Te(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`},{feature:`subgroups-f16`,extension:`subgroups_f16`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=kn(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Kt(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return Ee(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}else return[o,o,1]}}}),vu=l(()=>{"use strict";Ie(),D(),qt(),Yt(),sn(),uu(),fu(),pu=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},mu=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${pu(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},hu=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},gu=class{constructor(e){this.subgroupsSupported=e.features.has(`subgroups`),this.subgroupsF16Supported=e.features.has(`subgroups`);let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},_u=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus=`default`,this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`)&&i(`subgroups-f16`),this.device=await t.requestDevice(r),this.deviceInfo=new gu(this.device),this.adapterInfo=new hu(t.info||await t.requestAdapterInfo()),this.gpuDataManager=on(this),this.programManager=new du(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Wt(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,`device`,{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,`adapter`,{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||=this.device.createCommandEncoder(),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&=(this.computePassEncoder.end(),null)}flush(){if(!this.commandEncoder)return;Te(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:jt(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:jt(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${jt(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${jt(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}execution time: ${m-p} ns`)}Ce(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),Ee()}run(e,t,n,r,i,a){Te(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return Ee(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i}),e=Math.ceil(e/16)*16;let n=new ArrayBuffer(e);l.forEach((e,r)=>{let i=t[r],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(n,i,a.length).set(a);else if(e.type===12)new Uint32Array(n,i,a.length).set(a);else if(e.type===10)new Uint16Array(n,i,a.length).set(a);else if(e.type===1)new Float32Array(n,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${jt(e.type)}`)});let r=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(r.buffer,0,n,0,e),this.gpuDataManager.release(r.id),p={offset:0,size:e,buffer:r.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=mu(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),Kt(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(Kt(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),Ee(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=lu.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&=(s[1]=s[0](s[1]),void 0),Kt(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await rn(this,e,t);return Jt(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode===`default`||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Kt(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){Kt(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){Kt(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Du=l(()=>{"use strict";qt(),yu=1,bu=()=>yu++,xu=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),Su=(e,t)=>{let n=xu.get(e);if(!n)throw Error(`Unsupported data type.`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},Cu=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return Su(this.dataType,this.tensorShape)}destroy(){Kt(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}},wu=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==Su(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,a,!0,!0),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Kt(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},Tu=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}reserveTensorId(){let e=bu();return this.tensorTrackersById.set(e,new wu(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Kt(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){Kt(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=bu(),o=new Cu({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new wu(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a){let o=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(o,t,n)){Kt(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${n}}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}Kt(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${n}}`);let s=await o.createTensor({dataType:t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new Cu({sessionId:e,context:o,tensor:s,dataType:t,shape:n})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Eu=(...e)=>new Tu(...e)}),ju=l(()=>{"use strict";D(),_t(),Yt(),Du(),qt(),Ou=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),ku=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},Au=class{constructor(e){this.tensorManager=Eu(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Wt(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){Kt(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Kt(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)Kt(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}else if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>ku(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Kt(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=Ou.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Kt(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=Ou.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!gt().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);Kt(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Jt(n,t)}}registerMLTensor(e,t,n,r){let i=Ou.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Kt(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a){if(!a)throw Error(`External mounted files are not available.`);let o=e;e.startsWith(`./`)&&(o=e.substring(2));let s=a.get(o);if(!s)throw Error(`File with name ${o} not found in preloaded files.`);if(t+n>s.byteLength)throw Error(`Out of bounds: data offset and length exceed the external file data size.`);let c=s.slice(t,t+n).buffer,l;switch(i.dataType){case`float32`:l=new Float32Array(c);break;case`float16`:l=new Uint16Array(c);break;case`int32`:l=new Int32Array(c);break;case`uint32`:l=new Uint32Array(c);break;case`int64`:l=new BigInt64Array(c);break;case`uint64`:l=new BigUint64Array(c);break;case`int8`:l=new Int8Array(c);break;case`int4`:case`uint4`:case`uint8`:l=new Uint8Array(c);break;default:throw Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Kt(`verbose`,()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),r.constant(i,l)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}flush(){}}}),Mu={},u(Mu,{init:()=>Fu}),Iu=l(()=>{"use strict";D(),vu(),qt(),k(),ju(),Nu=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=O.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=O.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=O.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=O.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(O.size(t)!==O.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},Pu=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new Nu(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new Nu(this.module,t,this.output(e,n),n),(e,t)=>{let n=Mt(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new Nu(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},Fu=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=new _u;await e.initialize(n,r),i(`webgpu`,[e,t=>e.alloc(Number(t)),t=>e.free(t),(n,r,i,a=!1)=>{if(a)Kt(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(n)}, dst=${Number(r)}, size=${Number(i)}`),e.memcpy(Number(n),Number(r));else{Kt(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(n)}, gpuDataId=${Number(r)}, size=${Number(i)}`);let a=t.HEAPU8.subarray(Number(n>>>0),Number(n>>>0)+Number(i));e.upload(Number(r),a)}},async(n,r,i)=>{Kt(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${n}, dataOffset=${r}, size=${i}`),await e.download(Number(n),()=>t.HEAPU8.subarray(Number(r)>>>0,Number(r+i)>>>0))},(n,r,i)=>e.createKernel(n,Number(r),i,t.UTF8ToString(t._JsepGetNodeName(Number(r)))),t=>e.releaseKernel(t),(n,r,i,a)=>{Kt(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${i}, kernel=${n}, contextDataOffset=${r}`);let o=new Pu(t,e,Number(r));return e.computeKernel(Number(n),o,a)},()=>e.captureBegin(),()=>e.captureEnd(),()=>e.replay()])}else{let e=new Au(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n)])}}}),Yu=l(()=>{"use strict";Ct(),kt(),D(),_t(),xt(),zt(),Lu=(e,t)=>{gt()._OrtInit(e,t)!==0&&bt(`Can't initialize onnxruntime.`)},Ru=async e=>{Lu(e.wasm.numThreads,Pt(e.logLevel))},zu=async(e,t)=>{{let n=(Iu(),f(Mu)).init;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);let t=e.webgpu.adapter;if(t){if(typeof t.limits!=`object`||typeof t.features!=`object`||typeof t.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!==`low-power`&&n!==`high-performance`)throw Error(`Invalid powerPreference setting: "${n}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:r}),!t)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}await n(`webgpu`,gt(),e,t)}if(t===`webnn`){if(typeof navigator>`u`||!navigator.ml)throw Error(`WebNN is not supported in current environment`);await n(`webnn`,gt(),e)}}},Bu=new Map,Vu=e=>{let t=gt(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&bt(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},Hu=e=>{let t=gt(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},Uu=async(e,t)=>{let n,r,i=gt();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=Hu(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=Ot(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path;e.push(Rt(typeof n==`string`?n:n.data).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;n?i.currentContext=n:r?i.currentContext=await i.jsepCreateMLContext(r):i.currentContext=await i.jsepCreateMLContext({deviceType:a,powerPreference:o})}else i.currentContext=await i.jsepCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),a===0&&bt(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.jsepRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=Vu(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[];for(let t=0;t<e;t++){let e=i._OrtGetInputName(a,t);e===0&&bt(`Can't get an input name.`),l.push(e),p.push(i.UTF8ToString(e))}for(let e=0;e<d;e++){let n=i._OrtGetOutputName(a,e);n===0&&bt(`Can't get an output name.`),u.push(n);let r=i.UTF8ToString(n);m.push(r);{if(f&&t?.preferredOutputLocation===void 0){h.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[r]??`cpu`;if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);h.push(e)}}let g=null;return h.some(e=>e===`gpu-buffer`||e===`ml-tensor`)&&(s=i._OrtCreateBinding(a),s===0&&bt(`Can't create IO binding.`),g={handle:s,outputPreferredLocations:h,outputPreferredLocationsEncoded:h.map(e=>Lt(e))}),Bu.set(a,[a,l,u,g,f,!1]),[a,p,m]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&bt(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&bt(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&bt(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},Wu=e=>{let t=gt(),n=Bu.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&bt(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&bt(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&bt(`Can't release session.`),Bu.delete(e)},Gu=async(e,t,n,r,i,a=!1)=>{if(!e){t.push(0);return}let o=gt(),s=o.PTR_SIZE,c=e[0],l=e[1],u=e[3],d=u,f,p;if(c===`string`&&(u===`gpu-buffer`||u===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(a&&u!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(u===`gpu-buffer`){let t=e[2].gpuBuffer;p=Mt(At(c),l);let n=o.jsepRegisterBuffer;if(!n)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);f=n(r,i,t,p)}else if(u===`ml-tensor`){let t=e[2].mlTensor;p=Mt(At(c),l);let n=o.jsepRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);f=n(r,t,At(c),l)}else{let t=e[2];if(Array.isArray(t)){p=s*t.length,f=o._malloc(p),n.push(f);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);o.setValue(f+e*s,vt(t[e],n),`*`)}}else{let e=o.jsepIsGraphInput;if(c!==`string`&&e){let a=o._OrtGetInputName(r,i);if(e(r,o.UTF8ToString(a))){let e=At(c);p=Mt(e,l),d=`ml-tensor`;let n=o.jsepCreateTemporaryTensor,i=o.jsepUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,l);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),f=a}else p=t.byteLength,f=o._malloc(p),n.push(f),o.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,p),f)}else p=t.byteLength,f=o._malloc(p),n.push(f),o.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,p),f)}}let m=o.stackSave(),h=o.stackAlloc(4*l.length);try{l.forEach((e,t)=>o.setValue(h+t*s,e,s===4?`i32`:`i64`));let e=o._OrtCreateTensor(At(c),f,p,h,l.length,Lt(d));e===0&&bt(`Can't create tensor for input/output. session=${r}, index=${i}.`),t.push(e)}finally{o.stackRestore(m)}},Ku=async(e,t,n,r,i,a)=>{let o=gt(),s=o.PTR_SIZE,c=Bu.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=o.stackSave(),ee=o.stackAlloc(h*s),te=o.stackAlloc(h*s),C=o.stackAlloc(g*s),ne=o.stackAlloc(g*s);try{[_,v]=St(a);for(let r=0;r<h;r++)await Gu(n[r],y,x,e,t[r],p);for(let t=0;t<g;t++)await Gu(i[t],b,x,e,h+r[t],p);for(let e=0;e<h;e++)o.setValue(ee+e*s,y[e],`*`),o.setValue(te+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(C+e*s,b[e],`*`),o.setValue(ne+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&bt(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?o._OrtBindOutput(n,d[c],b[t],0)!==0&&bt(`Can't bind pre-allocated output[${t}] for session=${e}.`):o._OrtBindOutput(n,d[c],0,s[c])!==0&&bt(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}Bu.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,C,_):await o._OrtRun(l,te,ee,h,ne,g,C,_),c!==0&&bt(`failed to call OrtRun().`);let S=[];for(let t=0;t<g;t++){let n=Number(o.getValue(C+t*s,`*`));if(n===b[t]){S.push(i[t]);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),u=!1,d,p=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&bt(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));p=o.getValue(c+s,`*`);let l=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(l+e*s,i)));o._OrtFree(l)!==0&&bt(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);d=jt(a);let _=f?.outputPreferredLocations[r[t]];if(d===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(p+t*s,`*`),r=o.getValue(p+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}S.push([d,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=o.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(p),r=Mt(a,g);if(r===void 0||!Ft(d))throw Error(`Unsupported data type: ${d}`);u=!0,S.push([d,h,{gpuBuffer:t,download:o.jsepCreateDownloader(t,r,d),dispose:()=>{o._OrtReleaseTensor(n)!==0&&bt(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=o.jsepEnsureTensor;if(!t)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(Mt(a,g)===void 0||!It(d))throw Error(`Unsupported data type: ${d}`);let r=await t(e,p,a,h,!1);u=!0,S.push([d,h,{mlTensor:r,download:o.jsepCreateMLTensorDownloader(p,d),dispose:()=>{o.jsepReleaseTensorId(p),o._OrtReleaseTensor(n)}},`ml-tensor`])}else{let e=new(Nt(d))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(p,p+e.byteLength)),S.push([d,h,e,`cpu`])}}finally{o.stackRestore(a),d===`string`&&p&&o._free(p),u||o._OrtReleaseTensor(n),o.jsepOnRunEnd?.(l)}}return f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&bt(`Can't clear bound outputs.`),Bu.set(e,[l,u,d,f,p,!1])),S}finally{o.stackRestore(S),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},qu=e=>{let t=gt(),n=Bu.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&bt(`Can't get an profile file name.`),t._OrtFree(i)},Ju=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),md=l(()=>{"use strict";Ie(),Yu(),_t(),ct(),Xu=()=>!!C.wasm.proxy&&typeof document<`u`,Qu=!1,$u=!1,ed=!1,rd=new Map,id=(e,t)=>{let n=rd.get(e);n?n.push(t):rd.set(e,[t])},ad=()=>{if(Qu||!$u||ed||!Zu)throw Error(`worker not ready`)},od=e=>{switch(e.data.type){case`init-wasm`:Qu=!1,e.data.err?(ed=!0,nd[1](e.data.err)):($u=!0,nd[0]()),td&&=(URL.revokeObjectURL(td),void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=rd.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},sd=async()=>{if(!$u){if(Qu)throw Error(`multiple calls to 'initWasm()' detected.`);if(ed)throw Error(`previous call to 'initWasm()' failed.`);if(Qu=!0,Xu())return new Promise((e,t)=>{Zu?.terminate(),at().then(([n,r])=>{try{Zu=r,Zu.onerror=e=>t(e),Zu.onmessage=od,nd=[e,t];let i={type:`init-wasm`,in:C};!i.in.wasm.wasmPaths&&(n||self.location.href?.startsWith(`file:`))&&(i.in.wasm.wasmPaths={wasm:new URL(`/fangcun-toolbox/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm`,``+self.location.href).href}),Zu.postMessage(i),td=n}catch(e){t(e)}},t)});try{await ht(C.wasm),await Ru(C),$u=!0}catch(e){throw ed=!0,e}finally{Qu=!1}}},cd=async e=>{if(Xu())return ad(),new Promise((t,n)=>{id(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:C}};Zu.postMessage(r)});await zu(C,e)},ld=async e=>Xu()?(ad(),new Promise((t,n)=>{id(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};Zu.postMessage(r,[e.buffer])})):Hu(e),ud=async(e,t)=>{if(Xu()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return ad(),new Promise((n,r)=>{id(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Zu.postMessage(i,a)})}else return Uu(e,t)},dd=async e=>{if(Xu())return ad(),new Promise((t,n)=>{id(`release`,[t,n]);let r={type:`release`,in:e};Zu.postMessage(r)});Wu(e)},fd=async(e,t,n,r,i,a)=>{if(Xu()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return ad(),new Promise((i,o)=>{id(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};Zu.postMessage(c,Ju(s))})}else return Ku(e,t,n,r,i,a)},pd=async e=>{if(Xu())return ad(),new Promise((t,n)=>{id(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};Zu.postMessage(r)});qu(e)}}),vd=l(()=>{"use strict";Ie(),md(),D(),Le(),zt(),hd=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},gd=e=>{switch(e[3]){case`cpu`:return new xe(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!Ft(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return xe.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!It(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return xe.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},_d=class{async fetchModelAndCopyToWasmMemory(e){return ld(await Rt(e))}async loadModel(e,t){Te();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames]=await ud(n,t),Ee()}async dispose(){return dd(this.sessionId)}async run(e,t,n){Te();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>hd(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?hd(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await fd(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??gd(l[e]);return Ee(),u}startProfiling(){}endProfiling(){pd(this.sessionId)}}}),yd={},u(yd,{OnnxruntimeWebAssemblyBackend:()=>xd,initializeFlags:()=>bd,wasmBackend:()=>Sd}),Cd=l(()=>{"use strict";Ie(),md(),vd(),bd=()=>{if((typeof C.wasm.initTimeout!=`number`||C.wasm.initTimeout<0)&&(C.wasm.initTimeout=0),C.wasm.simd===!1&&console.warn(`Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.`),typeof C.wasm.proxy!=`boolean`&&(C.wasm.proxy=!1),typeof C.wasm.trace!=`boolean`&&(C.wasm.trace=!1),typeof C.wasm.numThreads!=`number`||!Number.isInteger(C.wasm.numThreads)||C.wasm.numThreads<=0)if(typeof self<`u`&&!self.crossOriginIsolated)C.wasm.numThreads=1;else{let e=typeof navigator>`u`?c(`node:os`).cpus().length:navigator.hardwareConcurrency;C.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},xd=class{async init(e){bd(),await sd(),await cd(e)}async createInferenceSessionHandler(e,t){let n=new _d;return await n.loadModel(e,t),Promise.resolve(n)}},Sd=new xd}),Ie(),Ie(),Ie(),wd=`1.21.0`,Td=Fe;{let e=(Cd(),f(yd)).wasmBackend;h(`webgpu`,e,5),h(`webnn`,e,5),h(`cpu`,e,10),h(`wasm`,e,10)}Object.defineProperty(C.versions,`web`,{value:wd,enumerable:!0})})),Dd=n({InferenceSession:()=>Ef,TRACE:()=>yf,TRACE_FUNC_BEGIN:()=>xf,TRACE_FUNC_END:()=>Sf,Tensor:()=>_f,default:()=>AC,env:()=>Jd,registerBackend:()=>Rd}),Od,kd,Ad,jd,Md,U,Nd,Pd,Fd,Id,Ld,Rd,zd,Bd,Vd,Hd,Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd,$d,ef,tf,nf,rf,af,of,sf,cf,lf,uf,df,ff,pf,mf,hf,gf,_f,vf,yf,bf,xf,Sf,Cf,wf,Tf,Ef,Df,Of,kf,Af,jf,Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf,Kf,qf,Jf,Yf,Xf,Zf,Qf,$f,ep,tp,np,rp,ip,ap,op,sp,cp,lp,up,dp,fp,pp,mp,hp,gp,_p,vp,yp,bp,xp,Sp,Cp,wp,Tp,Ep,Dp,Op,kp,Ap,jp,Mp,Np,Pp,W,Fp,Ip,Lp,Rp,zp,Bp,Vp,Hp,Up,Wp,Gp,Kp,qp,Jp,Yp,Xp,Zp,Qp,$p,em,tm,nm,rm,im,am,om,sm,cm,G,lm,um,dm,fm,pm,mm,hm,gm,_m,K,vm,ym,bm,xm,q,Sm,J,Y,Cm,wm,Tm,Em,Dm,Om,km,Am,jm,Mm,Nm,Pm,Fm,Im,Lm,Rm,zm,Bm,Vm,Hm,Um,Wm,Gm,Km,qm,Jm,Ym,Xm,Zm,Qm,$m,eh,th,nh,rh,ih,ah,oh,sh,ch,lh,uh,dh,fh,ph,mh,hh,gh,_h,vh,yh,bh,xh,Sh,Ch,wh,Th,Eh,Dh,Oh,kh,Ah,jh,Mh,Nh,Ph,Fh,Ih,Lh,Rh,zh,Bh,Vh,Hh,Uh,Wh,Gh,Kh,qh,Jh,Yh,Xh,Zh,Qh,$h,eg,tg,ng,rg,ig,ag,og,sg,cg,lg,ug,dg,fg,pg,mg,hg,gg,_g,vg,yg,bg,xg,Sg,Cg,wg,Tg,Eg,Dg,Og,kg,Ag,jg,Mg,Ng,Pg,Fg,Ig,Lg,Rg,zg,Bg,Vg,Hg,Ug,Wg,Gg,Kg,qg,Jg,Yg,Xg,Zg,Qg,$g,e_,t_,n_,r_,i_,a_,o_,s_,c_,l_,u_,d_,f_,p_,m_,h_,g_,__,v_,y_,b_,x_,S_,C_,w_,T_,E_,D_,O_,k_,A_,j_,M_,N_,P_,F_,I_,L_,R_,z_,B_,V_,H_,U_,W_,G_,K_,q_,J_,Y_,X_,Z_,Q_,$_,ev,tv,nv,rv,iv,av,ov,sv,cv,lv,uv,dv,fv,pv,mv,hv,gv,_v,vv,yv,bv,xv,Sv,Cv,wv,Tv,Ev,Dv,Ov,kv,Av,jv,Mv,Nv,Pv,Fv,Iv,Lv,Rv,zv,Bv,Vv,Hv,Uv,Wv,Gv,Kv,qv,Jv,Yv,Xv,Zv,Qv,$v,ey,ty,ny,ry,iy,ay,oy,sy,cy,ly,uy,dy,fy,py,my,hy,gy,_y,vy,yy,by,xy,Sy,Cy,wy,Ty,Ey,Dy,Oy,ky,Ay,jy,My,Ny,Py,Fy,Iy,Ly,Ry,zy,By,Vy,Hy,Uy,Wy,Gy,Ky,qy,Jy,Yy,Xy,Zy,Qy,$y,eb,tb,nb,rb,ib,ab,ob,sb,cb,lb,ub,db,fb,pb,mb,hb,gb,_b,vb,yb,bb,xb,Sb,Cb,wb,Tb,Eb,Db,Ob,kb,Ab,jb,Mb,Nb,Pb,Fb,Ib,Lb,Rb,zb,Bb,Vb,Hb,Ub,Wb,Gb,Kb,qb,Jb,Yb,Xb,Zb,Qb,$b,ex,tx,nx,rx,ix,ax,ox,sx,cx,lx,ux,dx,fx,px,mx,hx,gx,_x,vx,yx,bx,xx,Sx,Cx,wx,Tx,Ex,Dx,Ox,kx,Ax,jx,Mx,Nx,Px,Fx,Ix,Lx,Rx,zx,Bx,Vx,Hx,Ux,Wx,Gx,Kx,qx,Jx,Yx,Xx,Zx,Qx,$x,eS,tS,nS,rS,iS,aS,oS,sS,cS,lS,uS,dS,fS,pS,mS,hS,gS,_S,vS,yS,bS,xS,SS,CS,wS,TS,ES,DS,OS,kS,AS,jS,MS,NS,PS,FS,IS,LS,RS,zS,BS,VS,HS,US,WS,GS,KS,qS,JS,YS,XS,ZS,QS,$S,eC,tC,nC,rC,iC,aC,oC,sC,cC,lC,uC,dC,fC,pC,mC,hC,gC,_C,vC,yC,bC,xC,SC,CC,wC,TC,EC,DC,OC,kC,AC,jC=t((()=>{
/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
/**
* @license
* Copyright 2020 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
/**
* @license
* Copyright 2019 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
/*!
* ONNX Runtime Web v1.21.0
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT License.
*/
Od=Object.defineProperty,kd=Object.getOwnPropertyDescriptor,Ad=Object.getOwnPropertyNames,jd=Object.prototype.hasOwnProperty,Md=(e=>typeof require<`u`?require:typeof Proxy<`u`?new Proxy(e,{get:(e,t)=>(typeof require<`u`?require:e)[t]}):e)(function(e){if(typeof require<`u`)return require.apply(this,arguments);throw Error(`Dynamic require of "`+e+`" is not supported`)}),U=(e,t)=>()=>(e&&(t=e(e=0)),t),Nd=(e,t)=>{for(var n in t)Od(e,n,{get:t[n],enumerable:!0})},Pd=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of Ad(t))!jd.call(e,i)&&i!==n&&Od(e,i,{get:()=>t[i],enumerable:!(r=kd(t,i))||r.enumerable});return e},Fd=e=>Pd(Od({},`__esModule`,{value:!0}),e),Vd=U(()=>{"use strict";Id=new Map,Ld=[],Rd=(e,t,n)=>{if(t&&typeof t.init==`function`&&typeof t.createInferenceSessionHandler==`function`){let r=Id.get(e);if(r===void 0)Id.set(e,{backend:t,priority:n});else{if(r.priority>n)return;if(r.priority===n&&r.backend!==t)throw Error(`cannot register backend "${e}" using priority ${n}`)}if(n>=0){let t=Ld.indexOf(e);t!==-1&&Ld.splice(t,1);for(let t=0;t<Ld.length;t++)if(Id.get(Ld[t]).priority<=n){Ld.splice(t,0,e);return}Ld.push(e)}return}throw TypeError(`not a valid backend`)},zd=async e=>{let t=Id.get(e);if(!t)return`backend not found.`;if(t.initialized)return t.backend;if(t.aborted)return t.error;{let n=!!t.initPromise;try{return n||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(e){return n||(t.error=`${e}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Bd=async e=>{let t=e.executionProviders||[],n=t.map(e=>typeof e==`string`?e:e.name),r=n.length===0?Ld:n,i,a=[],o=new Set;for(let e of r){let t=await zd(e);typeof t==`string`?a.push({name:e,err:t}):(i||=t,i===t&&o.add(e))}if(!i)throw Error(`no available backend found. ERR: ${a.map(e=>`[${e.name}] ${e.err}`).join(`, `)}`);for(let{name:e,err:t}of a)n.includes(e)&&console.warn(`removing requested execution provider "${e}" from session options because it is not available: ${t}`);let s=t.filter(e=>o.has(typeof e==`string`?e:e.name));return[i,new Proxy(e,{get:(e,t)=>t===`executionProviders`?s:Reflect.get(e,t)})]}}),Hd=U(()=>{"use strict";Vd()}),Wd=U(()=>{"use strict";Ud=`1.21.0`}),qd=U(()=>{"use strict";Wd(),Gd=`warning`,Kd={wasm:{},webgl:{},webgpu:{},versions:{common:Ud},set logLevel(e){if(e!==void 0){if(typeof e!=`string`||[`verbose`,`info`,`warning`,`error`,`fatal`].indexOf(e)===-1)throw Error(`Unsupported logging level: ${e}`);Gd=e}},get logLevel(){return Gd}},Object.defineProperty(Kd,`logLevel`,{enumerable:!0})}),Yd=U(()=>{"use strict";qd(),Jd=Kd}),Qd=U(()=>{"use strict";Xd=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`):new OffscreenCanvas(1,1);n.width=e.dims[3],n.height=e.dims[2];let r=n.getContext(`2d`);if(r!=null){let i,a;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[3]):(i=e.dims[3],a=e.dims[2]);let o=t?.format===void 0?`RGB`:t.format,s=t?.norm,c,l;s===void 0||s.mean===void 0?c=[255,255,255,255]:typeof s.mean==`number`?c=[s.mean,s.mean,s.mean,s.mean]:(c=[s.mean[0],s.mean[1],s.mean[2],0],s.mean[3]!==void 0&&(c[3]=s.mean[3])),s===void 0||s.bias===void 0?l=[0,0,0,0]:typeof s.bias==`number`?l=[s.bias,s.bias,s.bias,s.bias]:(l=[s.bias[0],s.bias[1],s.bias[2],0],s.bias[3]!==void 0&&(l[3]=s.bias[3]));let u=a*i,d=0,f=u,p=u*2,m=-1;o===`RGBA`?(d=0,f=u,p=u*2,m=u*3):o===`RGB`?(d=0,f=u,p=u*2):o===`RBG`&&(d=0,p=u,f=u*2);for(let t=0;t<a;t++)for(let n=0;n<i;n++){let i=(e.data[d++]-l[0])*c[0],a=(e.data[f++]-l[1])*c[1],o=(e.data[p++]-l[2])*c[2],s=m===-1?255:(e.data[m++]-l[3])*c[3];r.fillStyle=`rgba(`+i+`,`+a+`,`+o+`,`+s+`)`,r.fillRect(n,t,1,1)}if(`toDataURL`in n)return n.toDataURL();throw Error(`toDataURL is not supported`)}else throw Error(`Can not access image data`)},Zd=(e,t)=>{let n=typeof document<`u`?document.createElement(`canvas`).getContext(`2d`):new OffscreenCanvas(1,1).getContext(`2d`),r;if(n!=null){let i,a,o;t?.tensorLayout!==void 0&&t.tensorLayout===`NHWC`?(i=e.dims[2],a=e.dims[1],o=e.dims[3]):(i=e.dims[3],a=e.dims[2],o=e.dims[1]);let s=t!==void 0&&t.format!==void 0?t.format:`RGB`,c=t?.norm,l,u;c===void 0||c.mean===void 0?l=[255,255,255,255]:typeof c.mean==`number`?l=[c.mean,c.mean,c.mean,c.mean]:(l=[c.mean[0],c.mean[1],c.mean[2],255],c.mean[3]!==void 0&&(l[3]=c.mean[3])),c===void 0||c.bias===void 0?u=[0,0,0,0]:typeof c.bias==`number`?u=[c.bias,c.bias,c.bias,c.bias]:(u=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(u[3]=c.bias[3]));let d=a*i;if(t!==void 0&&(t.format!==void 0&&o===4&&t.format!==`RGBA`||o===3&&t.format!==`RGB`&&t.format!==`BGR`))throw Error(`Tensor format doesn't match input tensor dims`);let f=0,p=1,m=2,h=3,g=0,_=d,v=d*2,y=-1;s===`RGBA`?(g=0,_=d,v=d*2,y=d*3):s===`RGB`?(g=0,_=d,v=d*2):s===`RBG`&&(g=0,v=d,_=d*2),r=n.createImageData(i,a);for(let t=0;t<a*i;f+=4,p+=4,m+=4,h+=4,t++)r.data[f]=(e.data[g++]-u[0])*l[0],r.data[p]=(e.data[_++]-u[1])*l[1],r.data[m]=(e.data[v++]-u[2])*l[2],r.data[h]=y===-1?255:(e.data[y++]-u[3])*l[3]}else throw Error(`Can not access image data`);return r}}),of=U(()=>{"use strict";gf(),$d=(e,t)=>{if(e===void 0)throw Error(`Image buffer must be defined`);if(t.height===void 0||t.width===void 0)throw Error(`Image height and width must be defined`);if(t.tensorLayout===`NHWC`)throw Error(`NHWC Tensor layout is not supported yet`);let{height:n,width:r}=t,i=t.norm??{mean:255,bias:0},a,o;a=typeof i.mean==`number`?[i.mean,i.mean,i.mean,i.mean]:[i.mean[0],i.mean[1],i.mean[2],i.mean[3]??255],o=typeof i.bias==`number`?[i.bias,i.bias,i.bias,i.bias]:[i.bias[0],i.bias[1],i.bias[2],i.bias[3]??0];let s=t.format===void 0?`RGBA`:t.format,c=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:`RGB`,l=n*r,u=c===`RGBA`?new Float32Array(l*4):new Float32Array(l*3),d=4,f=0,p=1,m=2,h=3,g=0,_=l,v=l*2,y=-1;s===`RGB`&&(d=3,f=0,p=1,m=2,h=-1),c===`RGBA`?y=l*3:c===`RBG`?(g=0,v=l,_=l*2):c===`BGR`&&(v=0,_=l,g=l*2);for(let t=0;t<l;t++,f+=d,m+=d,p+=d,h+=d)u[g++]=(e[f]+o[0])/a[0],u[_++]=(e[p]+o[1])/a[1],u[v++]=(e[m]+o[2])/a[2],y!==-1&&h!==-1&&(u[y++]=(e[h]+o[3])/a[3]);return c===`RGBA`?new hf(`float32`,u,[1,4,n,r]):new hf(`float32`,u,[1,3,n,r])},ef=async(e,t)=>{let n=typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement,r=typeof ImageData<`u`&&e instanceof ImageData,i=typeof ImageBitmap<`u`&&e instanceof ImageBitmap,a=typeof e==`string`,o,s=t??{},c=()=>{if(typeof document<`u`)return document.createElement(`canvas`);if(typeof OffscreenCanvas<`u`)return new OffscreenCanvas(1,1);throw Error(`Canvas is not supported`)},l=e=>typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||e instanceof OffscreenCanvas?e.getContext(`2d`):null;if(n){let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let n=e.height,i=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(n=t.resizedHeight,i=t.resizedWidth),t!==void 0){if(s=t,t.tensorFormat!==void 0)throw Error(`Image input config format must be RGBA for HTMLImageElement`);s.tensorFormat=`RGBA`,s.height=n,s.width=i}else s.tensorFormat=`RGBA`,s.height=n,s.width=i;r.drawImage(e,0,0),o=r.getImageData(0,0,i,n).data}else throw Error(`Can not access image data`)}else if(r){let n,r;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(n=t.resizedHeight,r=t.resizedWidth):(n=e.height,r=e.width),t!==void 0&&(s=t),s.format=`RGBA`,s.height=n,s.width=r,t!==void 0){let t=c();t.width=r,t.height=n;let i=l(t);if(i!=null)i.putImageData(e,0,0),o=i.getImageData(0,0,r,n).data;else throw Error(`Can not access image data`)}else o=e.data}else if(i){if(t===void 0)throw Error(`Please provide image config with format for Imagebitmap`);let n=c();n.width=e.width,n.height=e.height;let r=l(n);if(r!=null){let t=e.height,n=e.width;return r.drawImage(e,0,0,n,t),o=r.getImageData(0,0,n,t).data,s.height=t,s.width=n,$d(o,s)}else throw Error(`Can not access image data`)}else{if(a)return new Promise((t,n)=>{let r=c(),i=l(r);if(!e||!i)return n();let a=new Image;a.crossOrigin=`Anonymous`,a.src=e,a.onload=()=>{r.width=a.width,r.height=a.height,i.drawImage(a,0,0,r.width,r.height);let e=i.getImageData(0,0,r.width,r.height);s.height=r.height,s.width=r.width,t($d(e.data,s))}});throw Error(`Input data provided is not supported - aborted tensor creation`)}if(o!==void 0)return $d(o,s);throw Error(`Input data provided is not supported - aborted tensor creation`)},tf=(e,t)=>{let{width:n,height:r,download:i,dispose:a}=t;return new hf({location:`texture`,type:`float32`,texture:e,dims:[1,r,n,4],download:i,dispose:a})},nf=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new hf({location:`gpu-buffer`,type:n??`float32`,gpuBuffer:e,dims:r,download:i,dispose:a})},rf=(e,t)=>{let{dataType:n,dims:r,download:i,dispose:a}=t;return new hf({location:`ml-tensor`,type:n??`float32`,mlTensor:e,dims:r,download:i,dispose:a})},af=(e,t,n)=>new hf({location:`cpu-pinned`,type:e,data:t,dims:n??[t.length]})}),df=U(()=>{"use strict";sf=new Map([[`float32`,Float32Array],[`uint8`,Uint8Array],[`int8`,Int8Array],[`uint16`,Uint16Array],[`int16`,Int16Array],[`int32`,Int32Array],[`bool`,Uint8Array],[`float64`,Float64Array],[`uint32`,Uint32Array],[`int4`,Uint8Array],[`uint4`,Uint8Array]]),cf=new Map([[Float32Array,`float32`],[Uint8Array,`uint8`],[Int8Array,`int8`],[Uint16Array,`uint16`],[Int16Array,`int16`],[Int32Array,`int32`],[Float64Array,`float64`],[Uint32Array,`uint32`]]),lf=!1,uf=()=>{if(!lf){lf=!0;let e=typeof BigInt64Array<`u`&&BigInt64Array.from,t=typeof BigUint64Array<`u`&&BigUint64Array.from,n=globalThis.Float16Array,r=typeof n<`u`&&n.from;e&&(sf.set(`int64`,BigInt64Array),cf.set(BigInt64Array,`int64`)),t&&(sf.set(`uint64`,BigUint64Array),cf.set(BigUint64Array,`uint64`)),r?(sf.set(`float16`,n),cf.set(n,`float16`)):sf.set(`float16`,Uint16Array)}}}),mf=U(()=>{"use strict";gf(),ff=e=>{let t=1;for(let n=0;n<e.length;n++){let r=e[n];if(typeof r!=`number`||!Number.isSafeInteger(r))throw TypeError(`dims[${n}] must be an integer, got: ${r}`);if(r<0)throw RangeError(`dims[${n}] must be a non-negative integer, got: ${r}`);t*=r}return t},pf=(e,t)=>{switch(e.location){case`cpu`:return new hf(e.type,e.data,t);case`cpu-pinned`:return new hf({location:`cpu-pinned`,data:e.data,type:e.type,dims:t});case`texture`:return new hf({location:`texture`,texture:e.texture,type:e.type,dims:t});case`gpu-buffer`:return new hf({location:`gpu-buffer`,gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case`ml-tensor`:return new hf({location:`ml-tensor`,mlTensor:e.mlTensor,type:e.type,dims:t});default:throw Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),gf=U(()=>{"use strict";Qd(),of(),df(),mf(),hf=class{constructor(e,t,n){uf();let r,i;if(typeof e==`object`&&`location`in e)switch(this.dataLocation=e.location,r=e.type,i=e.dims,e.location){case`cpu-pinned`:{let t=sf.get(r);if(!t)throw TypeError(`unsupported type "${r}" to create tensor from pinned buffer`);if(!(e.data instanceof t))throw TypeError(`buffer should be of type ${t.name}`);this.cpuData=e.data;break}case`texture`:if(r!==`float32`)throw TypeError(`unsupported type "${r}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break;case`gpu-buffer`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break;case`ml-tensor`:if(r!==`float32`&&r!==`float16`&&r!==`int32`&&r!==`int64`&&r!==`uint32`&&r!==`uint64`&&r!==`int8`&&r!==`uint8`&&r!==`bool`&&r!==`uint4`&&r!==`int4`)throw TypeError(`unsupported type "${r}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break;default:throw Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let a,o;if(typeof e==`string`)if(r=e,o=n,e===`string`){if(!Array.isArray(t))throw TypeError(`A string tensor's data must be a string array.`);a=t}else{let n=sf.get(e);if(n===void 0)throw TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e===`float16`&&n===Uint16Array||e===`uint4`||e===`int4`)throw TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${n.name} as data.`);a=e===`uint64`||e===`int64`?n.from(t,BigInt):n.from(t)}else if(t instanceof n)a=t;else if(t instanceof Uint8ClampedArray)if(e===`uint8`)a=Uint8Array.from(t);else throw TypeError(`A Uint8ClampedArray tensor's data must be type of uint8`);else if(e===`float16`&&t instanceof Uint16Array&&n!==Uint16Array)a=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw TypeError(`A ${r} tensor's data must be type of ${n}`)}else if(o=t,Array.isArray(e)){if(e.length===0)throw TypeError(`Tensor type cannot be inferred from an empty array.`);let t=typeof e[0];if(t===`string`)r=`string`,a=e;else if(t===`boolean`)r=`bool`,a=Uint8Array.from(e);else throw TypeError(`Invalid element type of data array: ${t}.`)}else if(e instanceof Uint8ClampedArray)r=`uint8`,a=Uint8Array.from(e);else{let t=cf.get(e.constructor);if(t===void 0)throw TypeError(`Unsupported type for tensor data: ${e.constructor}.`);r=t,a=e}if(o===void 0)o=[a.length];else if(!Array.isArray(o))throw TypeError(`A tensor's dims must be a number array`);i=o,this.cpuData=a,this.dataLocation=`cpu`}let a=ff(i);if(this.cpuData&&a!==this.cpuData.length&&!((r===`uint4`||r===`int4`)&&Math.ceil(a/2)===this.cpuData.length))throw Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=r,this.dims=i,this.size=a}static async fromImage(e,t){return ef(e,t)}static fromTexture(e,t){return tf(e,t)}static fromGpuBuffer(e,t){return nf(e,t)}static fromMLTensor(e,t){return rf(e,t)}static fromPinnedBuffer(e,t,n){return af(e,t,n)}toDataURL(e){return Xd(this,e)}toImageData(e){return Zd(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw Error(`The data is not stored as a WebGL texture.`);return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw Error(`The data is not stored as a WebGPU buffer.`);return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw Error(`The data is not stored as a WebNN MLTensor.`);return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case`cpu`:case`cpu-pinned`:return this.data;case`texture`:case`gpu-buffer`:case`ml-tensor`:if(!this.downloader)throw Error(`The current tensor is not created with a specified data downloader.`);if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation=`cpu`,this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}default:throw Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw Error(`The current tensor is being downloaded.`);this.disposer&&=(this.disposer(),void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation=`none`}ensureValid(){if(this.dataLocation===`none`)throw Error(`The tensor is disposed.`)}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw Error(`Cannot reshape a tensor that owns GPU resource.`);return pf(this,e)}}}),vf=U(()=>{"use strict";gf(),_f=hf}),Cf=U(()=>{"use strict";qd(),yf=(e,t)=>{(typeof Kd.trace>`u`?!Kd.wasm.trace:!Kd.trace)||console.timeStamp(`${e}::ORT::${t}`)},bf=(e,t)=>{let n=Error().stack?.split(/\r\n|\r|\n/g)||[],r=!1;for(let i=0;i<n.length;i++){if(r&&!n[i].includes(`TRACE_FUNC`)){let r=`FUNC_${e}::${n[i].trim().split(` `)[1]}`;t&&(r+=`::${t}`),yf(`CPU`,r);return}n[i].includes(`TRACE_FUNC`)&&(r=!0)}},xf=e=>{(typeof Kd.trace>`u`?!Kd.wasm.trace:!Kd.trace)||bf(`BEGIN`,e)},Sf=e=>{(typeof Kd.trace>`u`?!Kd.wasm.trace:!Kd.trace)||bf(`END`,e)}}),Tf=U(()=>{"use strict";Vd(),vf(),Cf(),wf=class e{constructor(e){this.handler=e}async run(e,t,n){xf();let r={},i={};if(typeof e!=`object`||!e||e instanceof _f||Array.isArray(e))throw TypeError(`'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.`);let a=!0;if(typeof t==`object`){if(t===null)throw TypeError(`Unexpected argument[1]: cannot be null.`);if(t instanceof _f)throw TypeError(`'fetches' cannot be a Tensor`);if(Array.isArray(t)){if(t.length===0)throw TypeError(`'fetches' cannot be an empty array.`);a=!1;for(let e of t){if(typeof e!=`string`)throw TypeError(`'fetches' must be a string array or an object.`);if(this.outputNames.indexOf(e)===-1)throw RangeError(`'fetches' contains invalid output name: ${e}.`);r[e]=null}if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else{let e=!1,o=Object.getOwnPropertyNames(t);for(let n of this.outputNames)if(o.indexOf(n)!==-1){let i=t[n];(i===null||i instanceof _f)&&(e=!0,a=!1,r[n]=i)}if(e){if(typeof n==`object`&&n)i=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else i=t}}else if(typeof t<`u`)throw TypeError(`Unexpected argument[1]: must be 'fetches' or 'options'.`);for(let t of this.inputNames)if(typeof e[t]>`u`)throw Error(`input '${t}' is missing in 'feeds'.`);if(a)for(let e of this.outputNames)r[e]=null;let o=await this.handler.run(e,r,i),s={};for(let e in o)if(Object.hasOwnProperty.call(o,e)){let t=o[e];t instanceof _f?s[e]=t:s[e]=new _f(t.type,t.data,t.dims)}return Sf(),s}async release(){return this.handler.dispose()}static async create(t,n,r,i){xf();let a,o={};if(typeof t==`string`){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof Uint8Array){if(a=t,typeof n==`object`&&n)o=n;else if(typeof n<`u`)throw TypeError(`'options' must be an object.`)}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<`u`&&t instanceof SharedArrayBuffer){let e=t,s=0,c=t.byteLength;if(typeof n==`object`&&n)o=n;else if(typeof n==`number`){if(s=n,!Number.isSafeInteger(s))throw RangeError(`'byteOffset' must be an integer.`);if(s<0||s>=e.byteLength)throw RangeError(`'byteOffset' is out of range [0, ${e.byteLength}).`);if(c=t.byteLength-s,typeof r==`number`){if(c=r,!Number.isSafeInteger(c))throw RangeError(`'byteLength' must be an integer.`);if(c<=0||s+c>e.byteLength)throw RangeError(`'byteLength' is out of range (0, ${e.byteLength-s}].`);if(typeof i==`object`&&i)o=i;else if(typeof i<`u`)throw TypeError(`'options' must be an object.`)}else if(typeof r<`u`)throw TypeError(`'byteLength' must be a number.`)}else if(typeof n<`u`)throw TypeError(`'options' must be an object.`);a=new Uint8Array(e,s,c)}else throw TypeError(`Unexpected argument[0]: must be 'path' or 'buffer'.`);let[s,c]=await Bd(o),l=await s.createInferenceSessionHandler(a,c);return Sf(),new e(l)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}}}),Df=U(()=>{"use strict";Tf(),Ef=wf}),Of=U(()=>{"use strict";}),kf=U(()=>{"use strict";}),Af=U(()=>{"use strict";}),jf=U(()=>{"use strict";}),Mf={},Nd(Mf,{InferenceSession:()=>Ef,TRACE:()=>yf,TRACE_FUNC_BEGIN:()=>xf,TRACE_FUNC_END:()=>Sf,Tensor:()=>_f,env:()=>Jd,registerBackend:()=>Rd}),Nf=U(()=>{"use strict";Hd(),Yd(),Df(),vf(),Of(),kf(),Cf(),Af(),jf()}),Pf=U(()=>{"use strict";}),Ff={},Nd(Ff,{default:()=>Rf}),zf=U(()=>{"use strict";eC(),mp(),ap(),If=`ort-wasm-proxy-worker`,Lf=globalThis.self?.name===If,Lf&&(self.onmessage=e=>{let{type:t,in:n}=e.data;try{switch(t){case`init-wasm`:fp(n.wasm).then(()=>{US(n).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})})},e=>{postMessage({type:t,err:e})});break;case`init-ep`:{let{epName:e,env:r}=n;WS(r,e).then(()=>{postMessage({type:t})},e=>{postMessage({type:t,err:e})});break}case`copy-from`:{let{buffer:e}=n,r=qS(e);postMessage({type:t,out:r});break}case`create`:{let{model:e,options:r}=n;JS(e,r).then(e=>{postMessage({type:t,out:e})},e=>{postMessage({type:t,err:e})});break}case`release`:YS(n),postMessage({type:t});break;case`run`:{let{sessionId:e,inputIndices:r,inputs:i,outputIndices:a,options:o}=n;ZS(e,r,i,a,Array(a.length).fill(null),o).then(e=>{e.some(e=>e[3]!==`cpu`)?postMessage({type:t,err:`Proxy does not support non-cpu tensor location.`}):postMessage({type:t,out:e},$S([...i,...e]))},e=>{postMessage({type:t,err:e})});break}case`end-profiling`:QS(n),postMessage({type:t});break;default:}}catch(e){postMessage({type:t,err:e})}}),Rf=Lf?null:e=>new Worker(e??Jf,{type:`module`,name:If})}),Bf={},Nd(Bf,{default:()=>Uf}),Gf=U(()=>{"use strict";Hf=(Vf=self.location.href,async function(e={}){var t,n,r=e,i=new Promise((e,r)=>{t=e,n=r}),a=typeof window==`object`,o=typeof WorkerGlobalScope<`u`,s=o&&self.name?.startsWith(`em-pthread`);r.mountExternalData=(e,t)=>{e.startsWith(`./`)&&(e=e.substring(2)),(r.Bd||=new Map).set(e,t)},r.unmountExternalData=()=>{delete r.Bd};var c=globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let l=()=>{let e=(e,t,n)=>(...r)=>{let i=bn,a=t?.();r=e(...r);let o=t?.();return a!==o&&(e=o,n(a),t=n=null),bn==i?r:new Promise((e,t)=>{j={resolve:e,reject:t}})},t=e=>async(...t)=>{try{if(r.Cd)throw Error(`Session already started`);let n=r.Cd={be:t[0],errors:[]},i=await e(...t);if(r.Cd!==n)throw Error(`Session mismatch`);r.Dd?.flush();let a=n.errors;if(0<a.length){let e=await Promise.all(a);if(e=e.filter(e=>e),0<e.length)throw Error(e.join(`
`))}return i}finally{r.Cd=null}};r._OrtCreateSession=e(r._OrtCreateSession,()=>r._OrtCreateSession,e=>r._OrtCreateSession=e),r._OrtRun=t(e(r._OrtRun,()=>r._OrtRun,e=>r._OrtRun=e)),r._OrtRunWithBinding=t(e(r._OrtRunWithBinding,()=>r._OrtRunWithBinding,e=>r._OrtRunWithBinding=e)),r._OrtBindInput=e(r._OrtBindInput,()=>r._OrtBindInput,e=>r._OrtBindInput=e),l=void 0};r.jsepInit=(e,t)=>{if(l?.(),e===`webgpu`){[r.Dd,r.Rd,r.Vd,r.Hd,r.Ud,r.hc,r.Wd,r.Zd,r.Sd,r.Td,r.Xd]=t;let e=r.Dd;r.jsepRegisterBuffer=(t,n,r,i)=>e.registerBuffer(t,n,r,i),r.jsepGetBuffer=t=>e.getBuffer(t),r.jsepCreateDownloader=(t,n,r)=>e.createDownloader(t,n,r),r.jsepOnCreateSession=t=>{e.onCreateSession(t)},r.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},r.jsepOnRunStart=t=>e.onRunStart(t),r.$d=(t,n)=>{e.upload(t,n)}}else if(e===`webnn`){[r.Dd,r.Yd,r.Id,r.jsepEnsureTensor,r.Jd,r.jsepDownloadTensor]=t,r.jsepReleaseTensorId=r.Id,r.jsepUploadTensor=r.Jd;let e=r.Dd;r.jsepOnRunStart=t=>e.onRunStart(t),r.jsepOnRunEnd=e.onRunEnd.bind(e),r.jsepRegisterMLContext=(t,n)=>{e.registerMLContext(t,n)},r.jsepOnReleaseSession=t=>{e.onReleaseSession(t)},r.jsepCreateMLTensorDownloader=(t,n)=>e.createMLTensorDownloader(t,n),r.jsepRegisterMLTensor=(t,n,r,i)=>e.registerMLTensor(t,n,r,i),r.jsepCreateMLContext=t=>e.createMLContext(t),r.jsepRegisterMLConstant=(t,n,i,a,o)=>e.registerMLConstant(t,n,i,a,o,r.Bd),r.jsepRegisterGraphInput=e.registerGraphInput.bind(e),r.jsepIsGraphInput=e.isGraphInput.bind(e),r.jsepCreateTemporaryTensor=e.createTemporaryTensor.bind(e)}};var u,d,f=Object.assign({},r),p=(e,t)=>{throw t},m=``;(a||o)&&(o?m=self.location.href:typeof document<`u`&&document.currentScript&&(m=document.currentScript.src),Vf&&(m=Vf),m=m.startsWith(`blob:`)?``:m.slice(0,m.replace(/[?#].*/,``).lastIndexOf(`/`)+1),o&&(d=e=>{var t=new XMLHttpRequest;return t.open(`GET`,e,!1),t.responseType=`arraybuffer`,t.send(null),new Uint8Array(t.response)}),u=async e=>{if(ue(e))return new Promise((t,n)=>{var r=new XMLHttpRequest;r.open(`GET`,e,!0),r.responseType=`arraybuffer`,r.onload=()=>{r.status==200||r.status==0&&r.response?t(r.response):n(r.status)},r.onerror=n,r.send(null)});var t=await fetch(e,{credentials:`same-origin`});if(t.ok)return t.arrayBuffer();throw Error(t.status+` : `+t.url)});var h=console.log.bind(console),g=console.error.bind(console),_=h,v=g;Object.assign(r,f),f=null;var y,b,x,S,ee,te,C,ne,re,ie,ae,oe,se,ce=r.wasmBinary,le=!1,ue=e=>e.startsWith(`file://`);function de(){return y.buffer!=S.buffer&&ye(),S}function fe(){return y.buffer!=S.buffer&&ye(),ee}function pe(){return y.buffer!=S.buffer&&ye(),te}function me(){return y.buffer!=S.buffer&&ye(),C}function w(){return y.buffer!=S.buffer&&ye(),ne}function T(){return y.buffer!=S.buffer&&ye(),re}function he(){return y.buffer!=S.buffer&&ye(),ie}function ge(){return y.buffer!=S.buffer&&ye(),se}if(s){let e=function(t){try{var n=t.data,i=n.yd;if(i===`load`){let t=[];self.onmessage=e=>t.push(e),self.startWorker=()=>{postMessage({yd:`loaded`});for(let n of t)e(n);self.onmessage=e};for(let e of n.Od)r[e]&&!r[e].proxy||(r[e]=(...t)=>{postMessage({yd:`callHandler`,Nd:e,args:t})},e==`print`&&(_=r[e]),e==`printErr`&&(v=r[e]));y=n.he,ye(),_e(n.ie)}else if(i===`run`){Ke(n.xd),Vr(n.xd,0,0,1,0,0),Ue(),cn(n.xd),ve||=(Lr(),!0);try{qe(n.de,n.Fd)}catch(e){if(e!=`unwind`)throw e}}else n.target!==`setimmediate`&&(i===`checkMailbox`?ve&&ln():i&&(v(`worker: received unknown command ${i}`),v(n)))}catch(e){throw Hr(),e}};var _e,ve=!1;v=function(...e){e=e.join(` `),console.error(e)},self.alert=function(...e){postMessage({yd:`alert`,text:e.join(` `),fe:Rr()})},self.onunhandledrejection=e=>{throw e.reason||e},self.onmessage=e}function ye(){var e=y.buffer;r.HEAP8=S=new Int8Array(e),r.HEAP16=te=new Int16Array(e),r.HEAPU8=ee=new Uint8Array(e),r.HEAPU16=C=new Uint16Array(e),r.HEAP32=ne=new Int32Array(e),r.HEAPU32=re=new Uint32Array(e),r.HEAPF32=ie=new Float32Array(e),r.HEAPF64=se=new Float64Array(e),r.HEAP64=ae=new BigInt64Array(e),r.HEAPU64=oe=new BigUint64Array(e)}function be(){s?startWorker(r):F.Bb()}s||(y=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),ye());var xe,Se=0,Ce=null;function we(){if(--Se==0&&Ce){var e=Ce;Ce=null,e()}}function Te(e){throw v(e=`Aborted(`+e+`)`),le=!0,e=new WebAssembly.RuntimeError(e+`. Build with -sASSERTIONS for more info.`),n(e),e}function Ee(){return{a:{Ta:ke,Va:Oe,W:Ye,la:Ze,b:tt,u:nt,R:rt,Za:it,d:at,pb:st,g:$e,T:dt,Ga:ft,lb:ht,nb:gt,Ha:_t,Ea:vt,wb:yt,Da:bt,pa:xt,mb:St,jb:Ct,Fa:wt,kb:Tt,Ma:Ot,za:Ft,eb:Lt,cb:Wt,ya:Kt,V:qt,N:Jt,db:Yt,ma:rn,fb:an,zb:on,hb:un,qb:fn,ab:O,Aa:pn,yb:cn,Ja:mn,S:k,Wa:_n,$:N,G:Dn,E:P,m:zt,H:jn,B:Fn,X:In,J:Ln,v:Rn,O:zn,D:Bn,t:Vn,A:Hn,z:Un,w:Wn,r:Gn,tb:Kn,ub:Xn,vb:Zn,rb:Qn,sb:$n,bb:nr,Oa:rr,La:or,y:lr,ja:ur,Ba:dr,Ka:ir,qa:fr,Ia:pr,ib:mr,U:tr,fa:hr,Sa:gr,gb:_r,Qa:xr,Pa:Sr,Ab:Er,Ca:Dr,ob:Le,aa:Or,oa:kr,xb:Ar,na:Mr,$a:ga,ia:ka,sa:Pa,ga:ma,da:Sa,ua:Ma,p:fa,e:Xi,c:Ji,ea:ba,f:Zi,n:$i,k:ca,Y:ta,ka:la,j:pa,wa:ya,Ra:La,ca:Da,Ua:Ia,P:xa,K:ra,_:Ea,Q:ha,Z:Aa,x:na,l:Yi,va:Ta,i:qi,h:ea,ra:Fa,ta:Na,o:Qi,q:ia,s:oa,I:sa,C:da,L:ua,xa:va,_a,F:Oa,Ya:Ca,ba:ja,M:aa,Xa:wa,ha:Nr,a:y,Na:Fe}}}var De={1319426:()=>typeof wasmOffsetConverter<`u`,1319483:(e,t,n,i,a)=>{if(r===void 0||!r.Bd)return 1;if((e=ut(Number(e>>>0))).startsWith(`./`)&&(e=e.substring(2)),!(e=r.Bd.get(e)))return 2;if(t=Number(t>>>0),n=Number(n>>>0),i=Number(i>>>0),t+n>e.byteLength)return 3;try{let o=e.subarray(t,t+n);switch(a){case 0:fe().set(o,i>>>0);break;case 1:r.$d(i,o);break;default:return 4}return 0}catch{return 4}},1320198:(e,t,n)=>{r.Jd(e,fe().subarray(t>>>0,t+n>>>0))},1320261:()=>r.Yd(),1320302:e=>{r.Id(e)},1320338:()=>{r.Sd()},1320369:()=>{r.Td()},1320398:()=>{r.Xd()},1320423:e=>r.Rd(e),1320456:e=>r.Vd(e),1320488:(e,t,n)=>{r.Hd(Number(e),Number(t),Number(n),!0)},1320551:(e,t,n)=>{r.Hd(Number(e),Number(t),Number(n))},1320608:e=>{r.hc(`Abs`,e,void 0)},1320659:e=>{r.hc(`Neg`,e,void 0)},1320710:e=>{r.hc(`Floor`,e,void 0)},1320763:e=>{r.hc(`Ceil`,e,void 0)},1320815:e=>{r.hc(`Reciprocal`,e,void 0)},1320873:e=>{r.hc(`Sqrt`,e,void 0)},1320925:e=>{r.hc(`Exp`,e,void 0)},1320976:e=>{r.hc(`Erf`,e,void 0)},1321027:e=>{r.hc(`Sigmoid`,e,void 0)},1321082:(e,t,n)=>{r.hc(`HardSigmoid`,e,{alpha:t,beta:n})},1321161:e=>{r.hc(`Log`,e,void 0)},1321212:e=>{r.hc(`Sin`,e,void 0)},1321263:e=>{r.hc(`Cos`,e,void 0)},1321314:e=>{r.hc(`Tan`,e,void 0)},1321365:e=>{r.hc(`Asin`,e,void 0)},1321417:e=>{r.hc(`Acos`,e,void 0)},1321469:e=>{r.hc(`Atan`,e,void 0)},1321521:e=>{r.hc(`Sinh`,e,void 0)},1321573:e=>{r.hc(`Cosh`,e,void 0)},1321625:e=>{r.hc(`Asinh`,e,void 0)},1321678:e=>{r.hc(`Acosh`,e,void 0)},1321731:e=>{r.hc(`Atanh`,e,void 0)},1321784:e=>{r.hc(`Tanh`,e,void 0)},1321836:e=>{r.hc(`Not`,e,void 0)},1321887:(e,t,n)=>{r.hc(`Clip`,e,{min:t,max:n})},1321956:e=>{r.hc(`Clip`,e,void 0)},1322008:(e,t)=>{r.hc(`Elu`,e,{alpha:t})},1322066:e=>{r.hc(`Gelu`,e,void 0)},1322118:e=>{r.hc(`Relu`,e,void 0)},1322170:(e,t)=>{r.hc(`LeakyRelu`,e,{alpha:t})},1322234:(e,t)=>{r.hc(`ThresholdedRelu`,e,{alpha:t})},1322304:(e,t)=>{r.hc(`Cast`,e,{to:t})},1322362:e=>{r.hc(`Add`,e,void 0)},1322413:e=>{r.hc(`Sub`,e,void 0)},1322464:e=>{r.hc(`Mul`,e,void 0)},1322515:e=>{r.hc(`Div`,e,void 0)},1322566:e=>{r.hc(`Pow`,e,void 0)},1322617:e=>{r.hc(`Equal`,e,void 0)},1322670:e=>{r.hc(`Greater`,e,void 0)},1322725:e=>{r.hc(`GreaterOrEqual`,e,void 0)},1322787:e=>{r.hc(`Less`,e,void 0)},1322839:e=>{r.hc(`LessOrEqual`,e,void 0)},1322898:(e,t,n,i,a)=>{r.hc(`ReduceMean`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323073:(e,t,n,i,a)=>{r.hc(`ReduceMax`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323247:(e,t,n,i,a)=>{r.hc(`ReduceMin`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323421:(e,t,n,i,a)=>{r.hc(`ReduceProd`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323596:(e,t,n,i,a)=>{r.hc(`ReduceSum`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323770:(e,t,n,i,a)=>{r.hc(`ReduceL1`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1323943:(e,t,n,i,a)=>{r.hc(`ReduceL2`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324116:(e,t,n,i,a)=>{r.hc(`ReduceLogSum`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324293:(e,t,n,i,a)=>{r.hc(`ReduceSumSquare`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324473:(e,t,n,i,a)=>{r.hc(`ReduceLogSumExp`,e,{keepDims:!!t,noopWithEmptyAxes:!!n,axes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1324653:e=>{r.hc(`Where`,e,void 0)},1324706:(e,t,n)=>{r.hc(`Transpose`,e,{perm:t?Array.from(w().subarray(Number(t)>>>0,Number(n)>>>0)):[]})},1324830:(e,t,n,i)=>{r.hc(`DepthToSpace`,e,{blocksize:t,mode:ut(n),format:i?`NHWC`:`NCHW`})},1324963:(e,t,n,i)=>{r.hc(`DepthToSpace`,e,{blocksize:t,mode:ut(n),format:i?`NHWC`:`NCHW`})},1325096:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h)=>{r.hc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:t,dilations:[n],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!de()[u>>>0],outputPadding:d?Array.from(w().subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from(w().subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:ut(h)})},1325529:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:t,dilations:Array.from(w().subarray(Number(n)>>>0,2+(Number(n)>>>0)>>>0)),group:i,kernelShape:Array.from(w().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from(w().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(w().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!de()[l>>>0],outputPadding:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:ut(m)})},1326190:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h)=>{r.hc(`ConvTranspose`,e,{format:l?`NHWC`:`NCHW`,autoPad:t,dilations:[n],group:i,kernelShape:[a],pads:[o,s],strides:[c],wIsConst:()=>!!de()[u>>>0],outputPadding:d?Array.from(w().subarray(Number(d)>>>0,Number(f)>>>0)):[],outputShape:p?Array.from(w().subarray(Number(p)>>>0,Number(m)>>>0)):[],activation:ut(h)})},1326623:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`ConvTranspose`,e,{format:c?`NHWC`:`NCHW`,autoPad:t,dilations:Array.from(w().subarray(Number(n)>>>0,2+(Number(n)>>>0)>>>0)),group:i,kernelShape:Array.from(w().subarray(Number(a)>>>0,2+(Number(a)>>>0)>>>0)),pads:Array.from(w().subarray(Number(o)>>>0,4+(Number(o)>>>0)>>>0)),strides:Array.from(w().subarray(Number(s)>>>0,2+(Number(s)>>>0)>>>0)),wIsConst:()=>!!de()[l>>>0],outputPadding:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],outputShape:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[],activation:ut(m)})},1327284:(e,t)=>{r.hc(`GlobalAveragePool`,e,{format:t?`NHWC`:`NCHW`})},1327375:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1327854:(e,t)=>{r.hc(`GlobalAveragePool`,e,{format:t?`NHWC`:`NCHW`})},1327945:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`AveragePool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1328424:(e,t)=>{r.hc(`GlobalMaxPool`,e,{format:t?`NHWC`:`NCHW`})},1328511:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1328986:(e,t)=>{r.hc(`GlobalMaxPool`,e,{format:t?`NHWC`:`NCHW`})},1329073:(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>{r.hc(`MaxPool`,e,{format:m?`NHWC`:`NCHW`,auto_pad:t,ceil_mode:n,count_include_pad:i,storage_order:a,dilations:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],kernel_shape:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],pads:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],strides:f?Array.from(w().subarray(Number(f)>>>0,Number(p)>>>0)):[]})},1329548:(e,t,n,i,a)=>{r.hc(`Gemm`,e,{alpha:t,beta:n,transA:i,transB:a})},1329652:e=>{r.hc(`MatMul`,e,void 0)},1329706:(e,t,n,i)=>{r.hc(`ArgMax`,e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},1329814:(e,t,n,i)=>{r.hc(`ArgMin`,e,{keepDims:!!t,selectLastIndex:!!n,axis:i})},1329922:(e,t)=>{r.hc(`Softmax`,e,{axis:t})},1329985:(e,t)=>{r.hc(`Concat`,e,{axis:t})},1330045:(e,t,n,i,a)=>{r.hc(`Split`,e,{axis:t,numOutputs:n,splitSizes:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1330201:e=>{r.hc(`Expand`,e,void 0)},1330255:(e,t)=>{r.hc(`Gather`,e,{axis:Number(t)})},1330326:(e,t)=>{r.hc(`GatherElements`,e,{axis:Number(t)})},1330405:(e,t)=>{r.hc(`GatherND`,e,{batch_dims:Number(t)})},1330484:(e,t,n,i,a,o,s,c,l,u,d)=>{r.hc(`Resize`,e,{antialias:t,axes:n?Array.from(w().subarray(Number(n)>>>0,Number(i)>>>0)):[],coordinateTransformMode:ut(a),cubicCoeffA:o,excludeOutside:s,extrapolationValue:c,keepAspectRatioPolicy:ut(l),mode:ut(u),nearestMode:ut(d)})},1330846:(e,t,n,i,a,o,s)=>{r.hc(`Slice`,e,{starts:t?Array.from(w().subarray(Number(t)>>>0,Number(n)>>>0)):[],ends:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[],axes:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[]})},1331110:e=>{r.hc(`Tile`,e,void 0)},1331162:(e,t,n)=>{r.hc(`InstanceNormalization`,e,{epsilon:t,format:n?`NHWC`:`NCHW`})},1331276:(e,t,n)=>{r.hc(`InstanceNormalization`,e,{epsilon:t,format:n?`NHWC`:`NCHW`})},1331390:e=>{r.hc(`Range`,e,void 0)},1331443:(e,t)=>{r.hc(`Einsum`,e,{equation:ut(t)})},1331524:(e,t,n,i,a)=>{r.hc(`Pad`,e,{mode:t,value:n,pads:i?Array.from(w().subarray(Number(i)>>>0,Number(a)>>>0)):[]})},1331667:(e,t,n,i,a,o)=>{r.hc(`BatchNormalization`,e,{epsilon:t,momentum:n,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1331836:(e,t,n,i,a,o)=>{r.hc(`BatchNormalization`,e,{epsilon:t,momentum:n,spatial:!!a,trainingMode:!!i,format:o?`NHWC`:`NCHW`})},1332005:(e,t,n)=>{r.hc(`CumSum`,e,{exclusive:Number(t),reverse:Number(n)})},1332102:(e,t,n)=>{r.hc(`DequantizeLinear`,e,{axis:t,blockSize:n})},1332192:(e,t,n,i,a)=>{r.hc(`GridSample`,e,{align_corners:t,mode:ut(n),padding_mode:ut(i),format:a?`NHWC`:`NCHW`})},1332362:(e,t,n,i,a)=>{r.hc(`GridSample`,e,{align_corners:t,mode:ut(n),padding_mode:ut(i),format:a?`NHWC`:`NCHW`})},1332532:(e,t)=>{r.hc(`ScatterND`,e,{reduction:ut(t)})},1332617:(e,t,n,i,a,o,s,c,l)=>{r.hc(`Attention`,e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:a,doRotary:o,qkvHiddenSizes:s?Array.from(w().subarray(Number(c)>>>0,Number(c)+s>>>0)):[],pastPresentShareBuffer:!!l})},1332889:e=>{r.hc(`BiasAdd`,e,void 0)},1332944:e=>{r.hc(`BiasSplitGelu`,e,void 0)},1333005:e=>{r.hc(`FastGelu`,e,void 0)},1333061:(e,t,n,i,a,o,s,c,l,u,d,f,p,m,h,g)=>{r.hc(`Conv`,e,{format:f?`NHWC`:`NCHW`,auto_pad:t,dilations:n?Array.from(w().subarray(Number(n)>>>0,Number(i)>>>0)):[],group:a,kernel_shape:o?Array.from(w().subarray(Number(o)>>>0,Number(s)>>>0)):[],pads:c?Array.from(w().subarray(Number(c)>>>0,Number(l)>>>0)):[],strides:u?Array.from(w().subarray(Number(u)>>>0,Number(d)>>>0)):[],w_is_const:()=>!!de()[Number(p)>>>0],activation:ut(m),activation_params:h?Array.from(he().subarray(Number(h)>>>0,Number(g)>>>0)):[]})},1333645:e=>{r.hc(`Gelu`,e,void 0)},1333697:(e,t,n,i,a,o,s,c,l)=>{r.hc(`GroupQueryAttention`,e,{numHeads:t,kvNumHeads:n,scale:i,softcap:a,doRotary:o,rotaryInterleaved:s,smoothSoftmax:c,localWindowSize:l})},1333914:(e,t,n,i)=>{r.hc(`LayerNormalization`,e,{axis:t,epsilon:n,simplified:!!i})},1334025:(e,t,n,i)=>{r.hc(`LayerNormalization`,e,{axis:t,epsilon:n,simplified:!!i})},1334136:(e,t,n,i,a,o)=>{r.hc(`MatMulNBits`,e,{k:t,n,accuracyLevel:i,bits:a,blockSize:o})},1334263:(e,t,n,i,a,o)=>{r.hc(`MultiHeadAttention`,e,{numHeads:t,isUnidirectional:n,maskFilterValue:i,scale:a,doRotary:o})},1334422:(e,t)=>{r.hc(`QuickGelu`,e,{alpha:t})},1334486:(e,t,n,i,a)=>{r.hc(`RotaryEmbedding`,e,{interleaved:!!t,numHeads:n,rotaryEmbeddingDim:i,scale:a})},1334625:(e,t,n)=>{r.hc(`SkipLayerNormalization`,e,{epsilon:t,simplified:!!n})},1334727:(e,t,n)=>{r.hc(`SkipLayerNormalization`,e,{epsilon:t,simplified:!!n})},1334829:(e,t,n,i)=>{r.hc(`GatherBlockQuantized`,e,{gatherAxis:t,quantizeAxis:n,blockSize:i})},1334950:e=>{r.Wd(e)},1334984:(e,t)=>r.Zd(Number(e),Number(t),r.Cd.be,r.Cd.errors)};function Oe(e,t,n){return M(async()=>{await r.Ud(Number(e),Number(t),Number(n))})}function ke(){return typeof wasmOffsetConverter<`u`}class Ae{name=`ExitStatus`;constructor(e){this.message=`Program terminated with exit(${e})`,this.status=e}}var je=e=>{e.terminate(),e.onmessage=()=>{}},Me=[],Ne=e=>{Re.length==0&&(Ge(),We(Re[0]));var t=Re.pop();if(!t)return 6;ze.push(t),Ve[e.xd]=t,t.xd=e.xd;var n={yd:`run`,de:e.ce,Fd:e.Fd,xd:e.xd};return t.postMessage(n,e.Ld),0},Pe=0,E=(e,t,...n)=>{for(var r=2*n.length,i=V(),a=B(8*r),o=a>>>3,s=0;s<n.length;s++){var c=n[s];typeof c==`bigint`?(ae[o+2*s]=1n,ae[o+2*s+1]=c):(ae[o+2*s]=0n,ge()[o+2*s+1>>>0]=c)}return e=Ur(e,0,r,a,t),z(i),e};function Fe(e){if(s)return E(0,1,e);if(x=e,!(0<Pe)){for(var t of ze)je(t);for(t of Re)je(t);Re=[],ze=[],Ve={},le=!0}p(0,new Ae(e))}function Ie(e){if(s)return E(1,0,e);Le(e)}var Le=e=>{if(x=e,s)throw Ie(e),`unwind`;Fe(e)},Re=[],ze=[],Be=[],Ve={},He=e=>{var t=e.xd;delete Ve[t],Re.push(e),ze.splice(ze.indexOf(e),1),e.xd=0,Wr(t)};function Ue(){Be.forEach(e=>e())}var We=e=>new Promise(t=>{e.onmessage=n=>{var i=(n=n.data).yd;if(n.Ed&&n.Ed!=Rr()){var a=Ve[n.Ed];a?a.postMessage(n,n.Ld):v(`Internal error! Worker sent a message "${i}" to target pthread ${n.Ed}, but that thread no longer exists!`)}else i===`checkMailbox`?ln():i===`spawnThread`?Ne(n):i===`cleanupThread`?He(Ve[n.ee]):i===`loaded`?(e.loaded=!0,t(e)):i===`alert`?alert(`Thread ${n.fe}: ${n.text}`):n.target===`setimmediate`?e.postMessage(n):i===`callHandler`?r[n.Nd](...n.args):i&&v(`worker sent an unknown command ${i}`)},e.onerror=e=>{throw v(`worker sent an error! ${e.filename}:${e.lineno}: ${e.message}`),e};var n,i=[];for(n of[])r.propertyIsEnumerable(n)&&i.push(n);e.postMessage({yd:`load`,Od:i,he:y,ie:b})});function Ge(){var e=new Worker(self.location.href.startsWith(`file:`)?new URL(`/fangcun-toolbox/assets/ort.bundle.min-OfoG_cy9.mjs`,``+self.location.href):new URL(self.location.href),{type:`module`,workerData:`em-pthread`,name:`em-pthread`});Re.push(e)}var Ke=e=>{ye();var t=T()[e+52>>>2>>>0];e=T()[e+56>>>2>>>0],Jr(t,t-e),z(t)},qe=(e,t)=>{Pe=0,e=ei(e,t),0<Pe?x=e:Gr(e)},Je=[];function Ye(e){var t=new Qe(e>>>=0);if(de()[t.wd+12>>>0]==0){var n=1;de()[t.wd+12>>>0]=n}return n=0,de()[t.wd+13>>>0]=n,Je.push(t),Yr(e),Zr(e)}var Xe=0,Ze=()=>{L(0,0);var e=Je.pop();H(e.Gd),Xe=0};class Qe{constructor(e){this.Gd=e,this.wd=e-24}}function $e(e){throw Xe||=e>>>0,Xe}var et=e=>{var t=Xe;if(!t)return R(0),0;var n=new Qe(t);T()[n.wd+16>>>2>>>0]=t;var r=T()[n.wd+4>>>2>>>0];if(!r)return R(0),t;for(var i of e){if(i===0||i===r)break;if(Xr(i,r,n.wd+16))return R(i),t}return R(r),t};function tt(){return et([])}function nt(e){return et([e>>>0])}function rt(e,t){return et([e>>>0,t>>>0])}var it=()=>{var e=Je.pop();e||Te(`no exception to throw`);var t=e.Gd;if(de()[e.wd+13>>>0]==0){Je.push(e);var n=1;de()[e.wd+13>>>0]=n,n=0,de()[e.wd+12>>>0]=n}throw Xe=t};function at(e,t,n){var r=new Qe(e>>>=0);throw t>>>=0,n>>>=0,T()[r.wd+16>>>2>>>0]=0,T()[r.wd+4>>>2>>>0]=t,T()[r.wd+8>>>2>>>0]=n,Xe=e}function ot(e,t,n,r){return s?E(2,1,e,t,n,r):st(e,t,n,r)}function st(e,t,n,r){if(e>>>=0,n>>>=0,r>>>=0,c===void 0)return 6;var i=[];return s&&i.length===0?ot(e,t>>>=0,n,r):(e={ce:n,xd:e,Fd:r,Ld:i},s?(e.yd=`spawnThread`,postMessage(e,i),0):Ne(e))}var ct=typeof TextDecoder<`u`?new TextDecoder:void 0,lt=(e,t=0,n=NaN)=>{var r=(t>>>=0)+n;for(n=t;e[n]&&!(n>=r);)++n;if(16<n-t&&e.buffer&&ct)return ct.decode(e.buffer instanceof ArrayBuffer?e.subarray(t,n):e.slice(t,n));for(r=``;t<n;){var i=e[t++];if(128&i){var a=63&e[t++];if((224&i)==192)r+=String.fromCharCode((31&i)<<6|a);else{var o=63&e[t++];65536>(i=(240&i)==224?(15&i)<<12|a<<6|o:(7&i)<<18|a<<12|o<<6|63&e[t++])?r+=String.fromCharCode(i):(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i))}}else r+=String.fromCharCode(i)}return r},ut=(e,t)=>(e>>>=0)?lt(fe(),e,t):``;function dt(e,t,n){return s?E(3,1,e,t,n):0}function ft(e,t){if(s)return E(4,1,e,t)}var pt=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);127>=r?t++:2047>=r?t+=2:55296<=r&&57343>=r?(t+=4,++n):t+=3}return t},mt=(e,t,n)=>{var r=fe();if(t>>>=0,0<n){var i=t;n=t+n-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a)),127>=o){if(t>=n)break;r[t++>>>0]=o}else{if(2047>=o){if(t+1>=n)break;r[t++>>>0]=192|o>>6}else{if(65535>=o){if(t+2>=n)break;r[t++>>>0]=224|o>>12}else{if(t+3>=n)break;r[t++>>>0]=240|o>>18,r[t++>>>0]=128|o>>12&63}r[t++>>>0]=128|o>>6&63}r[t++>>>0]=128|63&o}}r[t>>>0]=0,e=t-i}else e=0;return e};function ht(e,t){if(s)return E(5,1,e,t)}function gt(e,t,n){if(s)return E(6,1,e,t,n)}function _t(e,t,n){return s?E(7,1,e,t,n):0}function vt(e,t){if(s)return E(8,1,e,t)}function yt(e,t,n){if(s)return E(9,1,e,t,n)}function bt(e,t,n,r){if(s)return E(10,1,e,t,n,r)}function xt(e,t,n,r){if(s)return E(11,1,e,t,n,r)}function St(e,t,n,r){if(s)return E(12,1,e,t,n,r)}function Ct(e){if(s)return E(13,1,e)}function wt(e,t){if(s)return E(14,1,e,t)}function Tt(e,t,n){if(s)return E(15,1,e,t,n)}var Et,Dt,Ot=()=>Te(``),kt=e=>{for(var t=``;fe()[e>>>0];)t+=Et[fe()[e++>>>0]];return t},At={},jt={},Mt={};function Nt(e,t,n={}){return function(e,t,n={}){var r=t.name;if(!e)throw new Dt(`type "${r}" must have a positive integer typeid pointer`);if(jt.hasOwnProperty(e)){if(n.Pd)return;throw new Dt(`Cannot register type '${r}' twice`)}jt[e]=t,delete Mt[e],At.hasOwnProperty(e)&&(t=At[e],delete At[e],t.forEach(e=>e()))}(e,t,n)}var Pt=(e,t,n)=>{switch(t){case 1:return n?e=>de()[e>>>0]:e=>fe()[e>>>0];case 2:return n?e=>pe()[e>>>1>>>0]:e=>me()[e>>>1>>>0];case 4:return n?e=>w()[e>>>2>>>0]:e=>T()[e>>>2>>>0];case 8:return n?e=>ae[e>>>3]:e=>oe[e>>>3];default:throw TypeError(`invalid integer width (${t}): ${e}`)}};function Ft(e,t,n){n>>>=0,Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:e=>e,toWireType:function(e,t){if(typeof t!=`bigint`&&typeof t!=`number`)throw t=t===null?`null`:(e=typeof t)==`object`||e===`array`||e===`function`?t.toString():``+t,TypeError(`Cannot convert "${t}" to ${this.name}`);return typeof t==`number`&&(t=BigInt(t)),t},zd:It,readValueFromPointer:Pt(t,n,t.indexOf(`u`)==-1),Ad:null})}var It=8;function Lt(e,t,n,r){Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:function(e){return!!e},toWireType:function(e,t){return t?n:r},zd:It,readValueFromPointer:function(e){return this.fromWireType(fe()[e>>>0])},Ad:null})}var D=[],Rt=[];function zt(e){9<(e>>>=0)&&--Rt[e+1]==0&&(Rt[e]=void 0,D.push(e))}var Bt=e=>{if(!e)throw new Dt(`Cannot use deleted val. handle = `+e);return Rt[e]},Vt=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let t=D.pop()||Rt.length;return Rt[t]=e,Rt[t+1]=1,t}};function Ht(e){return this.fromWireType(T()[e>>>2>>>0])}var Ut={name:`emscripten::val`,fromWireType:e=>{var t=Bt(e);return zt(e),t},toWireType:(e,t)=>Vt(t),zd:It,readValueFromPointer:Ht,Ad:null};function Wt(e){return Nt(e>>>0,Ut)}var Gt=(e,t)=>{switch(t){case 4:return function(e){return this.fromWireType(he()[e>>>2>>>0])};case 8:return function(e){return this.fromWireType(ge()[e>>>3>>>0])};default:throw TypeError(`invalid float width (${t}): ${e}`)}};function Kt(e,t,n){n>>>=0,Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:e=>e,toWireType:(e,t)=>t,zd:It,readValueFromPointer:Gt(t,n),Ad:null})}function qt(e,t,n,r,i){if(e>>>=0,n>>>=0,t=kt(t>>>0),i===-1&&(i=4294967295),i=e=>e,r===0){var a=32-8*n;i=e=>e<<a>>>a}var o=t.includes(`unsigned`)?function(e,t){return t>>>0}:function(e,t){return t};Nt(e,{name:t,fromWireType:i,toWireType:o,zd:It,readValueFromPointer:Pt(t,n,r!==0),Ad:null})}function Jt(e,t,n){function r(e){var t=T()[e>>>2>>>0];return e=T()[e+4>>>2>>>0],new i(de().buffer,e,t)}var i=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][t];Nt(e>>>=0,{name:n=kt(n>>>0),fromWireType:r,zd:It,readValueFromPointer:r},{Pd:!0})}function Yt(e,t){Nt(e>>>=0,{name:t=kt(t>>>0),fromWireType:function(e){for(var t,n=T()[e>>>2>>>0],r=e+4,i=r,a=0;a<=n;++a){var o=r+a;a!=n&&fe()[o>>>0]!=0||(i=ut(i,o-i),t===void 0?t=i:(t+=`\0`,t+=i),i=o+1)}return zr(e),t},toWireType:function(e,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var n=typeof t==`string`;if(!(n||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array))throw new Dt(`Cannot pass non-string to std::string`);var r=n?pt(t):t.length,i=Br(4+r+1),a=i+4;if(T()[i>>>2>>>0]=r,n)mt(t,a,r+1);else if(n)for(n=0;n<r;++n){var o=t.charCodeAt(n);if(255<o)throw zr(i),new Dt(`String has UTF-16 code units that do not fit in 8 bits`);fe()[a+n>>>0]=o}else for(n=0;n<r;++n)fe()[a+n>>>0]=t[n];return e!==null&&e.push(zr,i),i},zd:It,readValueFromPointer:Ht,Ad(e){zr(e)}})}var Xt=typeof TextDecoder<`u`?new TextDecoder(`utf-16le`):void 0,Zt=(e,t)=>{for(var n=e>>1,r=n+t/2;!(n>=r)&&me()[n>>>0];)++n;if(32<(n<<=1)-e&&Xt)return Xt.decode(fe().slice(e,n));for(n=``,r=0;!(r>=t/2);++r){var i=pe()[e+2*r>>>1>>>0];if(i==0)break;n+=String.fromCharCode(i)}return n},Qt=(e,t,n)=>{if(n??=2147483647,2>n)return 0;var r=t;n=(n-=2)<2*e.length?n/2:e.length;for(var i=0;i<n;++i){var a=e.charCodeAt(i);pe()[t>>>1>>>0]=a,t+=2}return pe()[t>>>1>>>0]=0,t-r},$t=e=>2*e.length,en=(e,t)=>{for(var n=0,r=``;!(n>=t/4);){var i=w()[e+4*n>>>2>>>0];if(i==0)break;++n,65536<=i?(i-=65536,r+=String.fromCharCode(55296|i>>10,56320|1023&i)):r+=String.fromCharCode(i)}return r},tn=(e,t,n)=>{if(t>>>=0,n??=2147483647,4>n)return 0;var r=t;n=r+n-4;for(var i=0;i<e.length;++i){var a=e.charCodeAt(i);if(55296<=a&&57343>=a&&(a=65536+((1023&a)<<10)|1023&e.charCodeAt(++i)),w()[t>>>2>>>0]=a,(t+=4)+4>n)break}return w()[t>>>2>>>0]=0,t-r},nn=e=>{for(var t=0,n=0;n<e.length;++n){var r=e.charCodeAt(n);55296<=r&&57343>=r&&++n,t+=4}return t};function rn(e,t,n){if(e>>>=0,t>>>=0,n=kt(n>>>=0),t===2)var r=Zt,i=Qt,a=$t,o=e=>me()[e>>>1>>>0];else t===4&&(r=en,i=tn,a=nn,o=e=>T()[e>>>2>>>0]);Nt(e,{name:n,fromWireType:e=>{for(var n,i=T()[e>>>2>>>0],a=e+4,s=0;s<=i;++s){var c=e+4+s*t;s!=i&&o(c)!=0||(a=r(a,c-a),n===void 0?n=a:(n+=`\0`,n+=a),a=c+t)}return zr(e),n},toWireType:(e,r)=>{if(typeof r!=`string`)throw new Dt(`Cannot pass non-string to C++ string type ${n}`);var o=a(r),s=Br(4+o+t);return T()[s>>>2>>>0]=o/t,i(r,s+4,o+t),e!==null&&e.push(zr,s),s},zd:It,readValueFromPointer:Ht,Ad(e){zr(e)}})}function an(e,t){Nt(e>>>=0,{Qd:!0,name:t=kt(t>>>0),zd:0,fromWireType:()=>{},toWireType:()=>{}})}function on(e){Vr(e>>>0,!o,1,!a,131072,!1),Ue()}var sn=e=>{if(!le)try{if(e(),!(0<Pe))try{s?Gr(x):Le(x)}catch(e){e instanceof Ae||e==`unwind`||p(0,e)}}catch(e){e instanceof Ae||e==`unwind`||p(0,e)}};function cn(e){e>>>=0,typeof Atomics.ge==`function`&&(Atomics.ge(w(),e>>>2,e).value.then(ln),e+=128,Atomics.store(w(),e>>>2,1))}var ln=()=>{var e=Rr();e&&(cn(e),sn(qr))};function un(e,t){(e>>>=0)==t>>>0?setTimeout(ln):s?postMessage({Ed:e,yd:`checkMailbox`}):(e=Ve[e])&&e.postMessage({yd:`checkMailbox`})}var dn=[];function fn(e,t,n,r,i){for(t>>>=0,r/=2,dn.length=r,n=i>>>0>>>3,i=0;i<r;i++)dn[i]=ae[n+2*i]?ae[n+2*i+1]:ge()[n+2*i+1>>>0];return(t?De[t]:I[e])(...dn)}var O=()=>{Pe=0};function pn(e){e>>>=0,s?postMessage({yd:`cleanupThread`,ee:e}):He(Ve[e])}function mn(e){}var hn=(e,t)=>{var n=jt[e];if(n===void 0)throw e=Ir(e),n=kt(e),zr(e),new Dt(`${t} has unknown type ${n}`);return n},gn=(e,t,n)=>{var r=[];return e=e.toWireType(r,n),r.length&&(T()[t>>>2>>>0]=Vt(r)),e};function k(e,t,n){return t>>>=0,n>>>=0,e=Bt(e>>>0),t=hn(t,`emval::as`),gn(t,n,e)}function _n(e,t){return t>>>=0,e=Bt(e>>>0),(t=hn(t,`emval::as`)).toWireType(null,e)}var vn=e=>{try{e()}catch(e){Te(e)}},yn=0,bn=null,A=0,xn=[],Sn={},Cn={},wn=0,j=null,Tn=[];function M(e){return function(e){if(!le){if(yn===0){var t=!1,n=!1;e((e=0)=>{if(!le&&(A=e,t=!0,n)){yn=2,vn(()=>Gi(bn)),typeof MainLoop<`u`&&MainLoop.Md&&MainLoop.resume(),e=!1;try{var r=function(){var e=w()[bn+8>>>2>>>0];return e=F[Cn[e]],--Pe,e()}()}catch(t){r=t,e=!0}var i=!1;if(!bn){var a=j;a&&(j=null,(e?a.reject:a.resolve)(r),i=!0)}if(e&&!i)throw r}}),n=!0,t||(yn=1,bn=function(){var e=Br(65548),t=e+12;T()[e>>>2>>>0]=t,T()[e+4>>>2>>>0]=t+65536,t=xn[0];var n=Sn[t];return n===void 0&&(n=wn++,Sn[t]=n,Cn[n]=t),t=n,w()[e+8>>>2>>>0]=t,e}(),typeof MainLoop<`u`&&MainLoop.Md&&MainLoop.pause(),vn(()=>Ui(bn)))}else yn===2?(yn=0,vn(Ki),zr(bn),bn=null,Tn.forEach(sn)):Te(`invalid state: ${yn}`);return A}}(t=>{e().then(t)})}function N(e){return e>>>=0,M(async()=>Vt(await Bt(e)))}var En=[];function Dn(e,t,n,r){return n>>>=0,r>>>=0,(e=En[e>>>0])(null,t=Bt(t>>>0),n,r)}var On={},kn=e=>{var t=On[e];return t===void 0?kt(e):t};function P(e,t,n,r,i){return n>>>=0,r>>>=0,i>>>=0,(e=En[e>>>0])(t=Bt(t>>>0),t[n=kn(n)],r,i)}var An=()=>typeof globalThis==`object`?globalThis:Function(`return this`)();function jn(e){return(e>>>=0)==0?Vt(An()):(e=kn(e),Vt(An()[e]))}var Mn=e=>{var t=En.length;return En.push(e),t},Nn=(e,t)=>{for(var n=Array(e),r=0;r<e;++r)n[r]=hn(T()[t+4*r>>>2>>>0],`parameter `+r);return n},Pn=(e,t)=>Object.defineProperty(t,`name`,{value:e});function Fn(e,t,n){var r=(t=Nn(e,t>>>0)).shift();e--;var i=`return function (obj, func, destructorsRef, args) {
`,a=0,o=[];n===0&&o.push(`obj`);for(var s=[`retType`],c=[r],l=0;l<e;++l)o.push(`arg`+l),s.push(`argType`+l),c.push(t[l]),i+=`  var arg${l} = argType${l}.readValueFromPointer(args${a?`+`+a:``});
`,a+=t[l].zd;return i+=`  var rv = ${n===1?`new func`:`func.call`}(${o.join(`, `)});
`,r.Qd||(s.push(`emval_returnValue`),c.push(gn),i+=`  return emval_returnValue(retType, destructorsRef, rv);
`),s.push(i+`};
`),e=function(e){var t=Function;if(!(t instanceof Function))throw TypeError(`new_ called with constructor type ${typeof t} which is not a function`);var n=Pn(t.name||`unknownFunctionName`,function(){});return n.prototype=t.prototype,n=new n,(e=t.apply(n,e))instanceof Object?e:n}(s)(...c),n=`methodCaller<(${t.map(e=>e.name).join(`, `)}) => ${r.name}>`,Mn(Pn(n,e))}function In(e){return e=kn(e>>>0),Vt(r[e])}function Ln(e,t){return t>>>=0,e=Bt(e>>>0),t=Bt(t),Vt(e[t])}function Rn(e){9<(e>>>=0)&&(Rt[e+1]+=1)}function zn(){return Vt([])}function Bn(e){e=Bt(e>>>0);for(var t=Array(e.length),n=0;n<e.length;n++)t[n]=e[n];return Vt(t)}function Vn(e){return Vt(kn(e>>>0))}function Hn(){return Vt({})}function Un(e){for(var t=Bt(e>>>=0);t.length;){var n=t.pop();t.pop()(n)}zt(e)}function Wn(e,t,n){t>>>=0,n>>>=0,e=Bt(e>>>0),t=Bt(t),n=Bt(n),e[t]=n}function Gn(e,t){return t>>>=0,e=(e=hn(e>>>0,`_emval_take_value`)).readValueFromPointer(t),Vt(e)}function Kn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),w()[t>>>2>>>0]=e.getUTCSeconds(),w()[t+4>>>2>>>0]=e.getUTCMinutes(),w()[t+8>>>2>>>0]=e.getUTCHours(),w()[t+12>>>2>>>0]=e.getUTCDate(),w()[t+16>>>2>>>0]=e.getUTCMonth(),w()[t+20>>>2>>>0]=e.getUTCFullYear()-1900,w()[t+24>>>2>>>0]=e.getUTCDay(),e=(e.getTime()-Date.UTC(e.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,w()[t+28>>>2>>>0]=e}var qn=e=>e%4==0&&(e%100!=0||e%400==0),Jn=[0,31,60,91,121,152,182,213,244,274,305,335],Yn=[0,31,59,90,120,151,181,212,243,273,304,334];function Xn(e,t){e=-9007199254740992>e||9007199254740992<e?NaN:Number(e),t>>>=0,e=new Date(1e3*e),w()[t>>>2>>>0]=e.getSeconds(),w()[t+4>>>2>>>0]=e.getMinutes(),w()[t+8>>>2>>>0]=e.getHours(),w()[t+12>>>2>>>0]=e.getDate(),w()[t+16>>>2>>>0]=e.getMonth(),w()[t+20>>>2>>>0]=e.getFullYear()-1900,w()[t+24>>>2>>>0]=e.getDay();var n=(qn(e.getFullYear())?Jn:Yn)[e.getMonth()]+e.getDate()-1|0;w()[t+28>>>2>>>0]=n,w()[t+36>>>2>>>0]=-60*e.getTimezoneOffset(),n=new Date(e.getFullYear(),6,1).getTimezoneOffset();var r=new Date(e.getFullYear(),0,1).getTimezoneOffset();e=0|(n!=r&&e.getTimezoneOffset()==Math.min(r,n)),w()[t+32>>>2>>>0]=e}function Zn(e){e>>>=0;var t=new Date(w()[e+20>>>2>>>0]+1900,w()[e+16>>>2>>>0],w()[e+12>>>2>>>0],w()[e+8>>>2>>>0],w()[e+4>>>2>>>0],w()[e>>>2>>>0],0),n=w()[e+32>>>2>>>0],r=t.getTimezoneOffset(),i=new Date(t.getFullYear(),6,1).getTimezoneOffset(),a=new Date(t.getFullYear(),0,1).getTimezoneOffset(),o=Math.min(a,i);return 0>n?w()[e+32>>>2>>>0]=+(i!=a&&o==r):0<n!=(o==r)&&(i=Math.max(a,i),t.setTime(t.getTime()+6e4*((0<n?o:i)-r))),w()[e+24>>>2>>>0]=t.getDay(),n=(qn(t.getFullYear())?Jn:Yn)[t.getMonth()]+t.getDate()-1|0,w()[e+28>>>2>>>0]=n,w()[e>>>2>>>0]=t.getSeconds(),w()[e+4>>>2>>>0]=t.getMinutes(),w()[e+8>>>2>>>0]=t.getHours(),w()[e+12>>>2>>>0]=t.getDate(),w()[e+16>>>2>>>0]=t.getMonth(),w()[e+20>>>2>>>0]=t.getYear(),e=t.getTime(),BigInt(isNaN(e)?-1:e/1e3)}function Qn(e,t,n,r,i,a,o){return s?E(16,1,e,t,n,r,i,a,o):-52}function $n(e,t,n,r,i,a){if(s)return E(17,1,e,t,n,r,i,a)}var er={},tr=()=>performance.timeOrigin+performance.now();function nr(e,t){return s?E(18,1,e,t):(er[e]&&(clearTimeout(er[e].id),delete er[e]),t&&(er[e]={id:setTimeout(()=>{delete er[e],sn(()=>Kr(e,performance.timeOrigin+performance.now()))},t),ke:t}),0)}function rr(e,t,n,r){e>>>=0,t>>>=0,n>>>=0,r>>>=0;var i=new Date().getFullYear(),a=new Date(i,0,1).getTimezoneOffset();i=new Date(i,6,1).getTimezoneOffset();var o=Math.max(a,i);T()[e>>>2>>>0]=60*o,w()[t>>>2>>>0]=+(a!=i),e=(t=e=>{var t=Math.abs(e);return`UTC${0<=e?`-`:`+`}${String(Math.floor(t/60)).padStart(2,`0`)}${String(t%60).padStart(2,`0`)}`})(a),t=t(i),i<a?(mt(e,n,17),mt(t,r,17)):(mt(e,r,17),mt(t,n,17))}var ir=()=>Date.now(),ar=1;function or(e,t,n){if(!(0<=e&&3>=e))return 28;if(e===0)e=Date.now();else{if(!ar)return 52;e=performance.timeOrigin+performance.now()}return ae[n>>>0>>>3]=BigInt(Math.round(1e6*e)),0}var sr=[],cr=(e,t)=>{sr.length=0;for(var n;n=fe()[e++>>>0];){var r=n!=105;t+=(r&=n!=112)&&t%8?4:0,sr.push(n==112?T()[t>>>2>>>0]:n==106?ae[t>>>3]:n==105?w()[t>>>2>>>0]:ge()[t>>>3>>>0]),t+=r?8:4}return sr};function lr(e,t,n){return e>>>=0,t=cr(t>>>0,n>>>0),De[e](...t)}function ur(e,t,n){return e>>>=0,t=cr(t>>>0,n>>>0),De[e](...t)}var dr=()=>{};function fr(e,t){return v(ut(e>>>0,t>>>0))}var pr=()=>{throw Pe+=1,`unwind`};function mr(){return 4294901760}var hr=()=>navigator.hardwareConcurrency;function gr(){return Te(`Cannot use emscripten_pc_get_function without -sUSE_OFFSET_CONVERTER`),0}function _r(e){e>>>=0;var t=fe().length;if(e<=t||4294901760<e)return!1;for(var n=1;4>=n;n*=2){var r=t*(1+.2/n);r=Math.min(r,e+100663296);e:{r=(Math.min(4294901760,65536*Math.ceil(Math.max(e,r)/65536))-y.buffer.byteLength+65535)/65536|0;try{y.grow(r),ye();var i=1;break e}catch{}i=void 0}if(i)return!0}return!1}var vr=()=>(Te(`Cannot use convertFrameToPC (needed by __builtin_return_address) without -sUSE_OFFSET_CONVERTER`),0),yr={},br=e=>{e.forEach(e=>{var t=vr();t&&(yr[t]=e)})};function xr(){var e=Error().stack.toString().split(`
`);return e[0]==`Error`&&e.shift(),br(e),yr.Kd=vr(),yr.ae=e,yr.Kd}function Sr(e,t,n){if(e>>>=0,t>>>=0,yr.Kd==e)var r=yr.ae;else (r=Error().stack.toString().split(`
`))[0]==`Error`&&r.shift(),br(r);for(var i=3;r[i]&&vr()!=e;)++i;for(e=0;e<n&&r[e+i];++e)w()[t+4*e>>>2>>>0]=vr();return e}var Cr,wr={},Tr=()=>{if(!Cr){var e,t={USER:`web_user`,LOGNAME:`web_user`,PATH:`/`,PWD:`/`,HOME:`/home/web_user`,LANG:(typeof navigator==`object`&&navigator.languages&&navigator.languages[0]||`C`).replace(`-`,`_`)+`.UTF-8`,_:`./this.program`};for(e in wr)wr[e]===void 0?delete t[e]:t[e]=wr[e];var n=[];for(e in t)n.push(`${e}=${t[e]}`);Cr=n}return Cr};function Er(e,t){if(s)return E(19,1,e,t);e>>>=0,t>>>=0;var n=0;return Tr().forEach((r,i)=>{var a=t+n;for(i=T()[e+4*i>>>2>>>0]=a,a=0;a<r.length;++a)de()[i++>>>0]=r.charCodeAt(a);de()[i>>>0]=0,n+=r.length+1}),0}function Dr(e,t){if(s)return E(20,1,e,t);e>>>=0,t>>>=0;var n=Tr();T()[e>>>2>>>0]=n.length;var r=0;return n.forEach(e=>r+=e.length+1),T()[t>>>2>>>0]=r,0}function Or(e){return s?E(21,1,e):52}function kr(e,t,n,r){return s?E(22,1,e,t,n,r):52}function Ar(e,t,n,r){return s?E(23,1,e,t,n,r):70}var jr=[null,[],[]];function Mr(e,t,n,r){if(s)return E(24,1,e,t,n,r);t>>>=0,n>>>=0,r>>>=0;for(var i=0,a=0;a<n;a++){var o=T()[t>>>2>>>0],c=T()[t+4>>>2>>>0];t+=8;for(var l=0;l<c;l++){var u=fe()[o+l>>>0],d=jr[e];u===0||u===10?((e===1?_:v)(lt(d)),d.length=0):d.push(u)}i+=c}return T()[r>>>2>>>0]=i,0}function Nr(e){return e>>>0}s||function(){for(var e=r.numThreads-1;e--;)Ge();Me.unshift(()=>{Se++,function(e){s?e():Promise.all(Re.map(We)).then(e)}(()=>we())})}();for(var Pr=Array(256),Fr=0;256>Fr;++Fr)Pr[Fr]=String.fromCharCode(Fr);Et=Pr,Dt=r.BindingError=class extends Error{constructor(e){super(e),this.name=`BindingError`}},r.InternalError=class extends Error{constructor(e){super(e),this.name=`InternalError`}},Rt.push(0,1,void 0,1,null,1,!0,1,!1,1),r.count_emval_handles=()=>Rt.length/2-5-D.length;var F,I=[Fe,Ie,ot,dt,ft,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Qn,$n,nr,Er,Dr,Or,kr,Ar,Mr];(async function(){function e(e,t){return F=e.exports,F=function(){var e=F,t={};for(let[n,r]of Object.entries(e))t[n]=typeof r==`function`?(...e)=>{xn.push(n);try{return r(...e)}finally{le||(xn.pop(),bn&&yn===1&&xn.length===0&&(yn=0,Pe+=1,vn(Wi),typeof Fibers<`u`&&Fibers.le()))}}:r;return t}(),F=function(){var e=F,t=e=>t=>e(t)>>>0,n=e=>()=>e()>>>0;return(e=Object.assign({},e)).Cb=t(e.Cb),e.fc=n(e.fc),e.ic=t(e.ic),e.vc=t(e.vc),e.wc=n(e.wc),e.Ac=t(e.Ac),e}(),Be.push(F.jc),b=t,we(),F}Se++;var t=Ee();if(r.instantiateWasm)return new Promise(n=>{r.instantiateWasm(t,(t,r)=>{e(t,r),n(t.exports)})});if(s)return new Promise(t=>{_e=n=>{t(e(new WebAssembly.Instance(n,Ee()),n))}});xe??=r.locateFile?r.locateFile?r.locateFile(`ort-wasm-simd-threaded.jsep.wasm`,m):m+`ort-wasm-simd-threaded.jsep.wasm`:new URL(`/fangcun-toolbox/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm`,``+self.location.href).href;try{var i=await async function(e){var t=xe;if(!ce&&typeof WebAssembly.instantiateStreaming==`function`&&!ue(t))try{var n=fetch(t,{credentials:`same-origin`});return await WebAssembly.instantiateStreaming(n,e)}catch(e){v(`wasm streaming compile failed: ${e}`),v(`falling back to ArrayBuffer instantiation`)}return async function(e,t){try{var n=await async function(e){if(!ce)try{var t=await u(e);return new Uint8Array(t)}catch{}if(e==xe&&ce)e=new Uint8Array(ce);else{if(!d)throw`both async and sync fetching of the wasm failed`;e=d(e)}return e}(e);return await WebAssembly.instantiate(n,t)}catch(e){v(`failed to asynchronously prepare wasm: ${e}`),Te(e)}}(t,e)}(t);return e(i.instance,i.module)}catch(e){return n(e),Promise.reject(e)}})();var Ir=e=>(Ir=F.Cb)(e),Lr=()=>(Lr=F.Db)();r._OrtInit=(e,t)=>(r._OrtInit=F.Eb)(e,t),r._OrtGetLastError=(e,t)=>(r._OrtGetLastError=F.Fb)(e,t),r._OrtCreateSessionOptions=(e,t,n,i,a,o,s,c,l,u)=>(r._OrtCreateSessionOptions=F.Gb)(e,t,n,i,a,o,s,c,l,u),r._OrtAppendExecutionProvider=(e,t)=>(r._OrtAppendExecutionProvider=F.Hb)(e,t),r._OrtAddFreeDimensionOverride=(e,t,n)=>(r._OrtAddFreeDimensionOverride=F.Ib)(e,t,n),r._OrtAddSessionConfigEntry=(e,t,n)=>(r._OrtAddSessionConfigEntry=F.Jb)(e,t,n),r._OrtReleaseSessionOptions=e=>(r._OrtReleaseSessionOptions=F.Kb)(e),r._OrtCreateSession=(e,t,n)=>(r._OrtCreateSession=F.Lb)(e,t,n),r._OrtReleaseSession=e=>(r._OrtReleaseSession=F.Mb)(e),r._OrtGetInputOutputCount=(e,t,n)=>(r._OrtGetInputOutputCount=F.Nb)(e,t,n),r._OrtGetInputName=(e,t)=>(r._OrtGetInputName=F.Ob)(e,t),r._OrtGetOutputName=(e,t)=>(r._OrtGetOutputName=F.Pb)(e,t),r._OrtFree=e=>(r._OrtFree=F.Qb)(e),r._OrtCreateTensor=(e,t,n,i,a,o)=>(r._OrtCreateTensor=F.Rb)(e,t,n,i,a,o),r._OrtGetTensorData=(e,t,n,i,a)=>(r._OrtGetTensorData=F.Sb)(e,t,n,i,a),r._OrtReleaseTensor=e=>(r._OrtReleaseTensor=F.Tb)(e),r._OrtCreateRunOptions=(e,t,n,i)=>(r._OrtCreateRunOptions=F.Ub)(e,t,n,i),r._OrtAddRunConfigEntry=(e,t,n)=>(r._OrtAddRunConfigEntry=F.Vb)(e,t,n),r._OrtReleaseRunOptions=e=>(r._OrtReleaseRunOptions=F.Wb)(e),r._OrtCreateBinding=e=>(r._OrtCreateBinding=F.Xb)(e),r._OrtBindInput=(e,t,n)=>(r._OrtBindInput=F.Yb)(e,t,n),r._OrtBindOutput=(e,t,n,i)=>(r._OrtBindOutput=F.Zb)(e,t,n,i),r._OrtClearBoundOutputs=e=>(r._OrtClearBoundOutputs=F._b)(e),r._OrtReleaseBinding=e=>(r._OrtReleaseBinding=F.$b)(e),r._OrtRunWithBinding=(e,t,n,i,a)=>(r._OrtRunWithBinding=F.ac)(e,t,n,i,a),r._OrtRun=(e,t,n,i,a,o,s,c)=>(r._OrtRun=F.bc)(e,t,n,i,a,o,s,c),r._OrtEndProfiling=e=>(r._OrtEndProfiling=F.cc)(e),r._JsepOutput=(e,t,n)=>(r._JsepOutput=F.dc)(e,t,n),r._JsepGetNodeName=e=>(r._JsepGetNodeName=F.ec)(e);var Rr=()=>(Rr=F.fc)(),zr=r._free=e=>(zr=r._free=F.gc)(e),Br=r._malloc=e=>(Br=r._malloc=F.ic)(e),Vr=(e,t,n,r,i,a)=>(Vr=F.kc)(e,t,n,r,i,a),Hr=()=>(Hr=F.lc)(),Ur=(e,t,n,r,i)=>(Ur=F.mc)(e,t,n,r,i),Wr=e=>(Wr=F.nc)(e),Gr=e=>(Gr=F.oc)(e),Kr=(e,t)=>(Kr=F.pc)(e,t),qr=()=>(qr=F.qc)(),L=(e,t)=>(L=F.rc)(e,t),R=e=>(R=F.sc)(e),Jr=(e,t)=>(Jr=F.tc)(e,t),z=e=>(z=F.uc)(e),B=e=>(B=F.vc)(e),V=()=>(V=F.wc)(),H=e=>(H=F.xc)(e),Yr=e=>(Yr=F.yc)(e),Xr=(e,t,n)=>(Xr=F.zc)(e,t,n),Zr=e=>(Zr=F.Ac)(e),Qr=r.dynCall_iii=(e,t,n)=>(Qr=r.dynCall_iii=F.Bc)(e,t,n),$r=r.dynCall_vi=(e,t)=>($r=r.dynCall_vi=F.Cc)(e,t),ei=r.dynCall_ii=(e,t)=>(ei=r.dynCall_ii=F.Dc)(e,t),ti=r.dynCall_vii=(e,t,n)=>(ti=r.dynCall_vii=F.Ec)(e,t,n),ni=r.dynCall_iiii=(e,t,n,i)=>(ni=r.dynCall_iiii=F.Fc)(e,t,n,i),ri=r.dynCall_viii=(e,t,n,i)=>(ri=r.dynCall_viii=F.Gc)(e,t,n,i),ii=r.dynCall_iiiii=(e,t,n,i,a)=>(ii=r.dynCall_iiiii=F.Hc)(e,t,n,i,a),ai=r.dynCall_viiii=(e,t,n,i,a)=>(ai=r.dynCall_viiii=F.Ic)(e,t,n,i,a),oi=r.dynCall_viiiiii=(e,t,n,i,a,o,s)=>(oi=r.dynCall_viiiiii=F.Jc)(e,t,n,i,a,o,s),si=r.dynCall_viiiiiii=(e,t,n,i,a,o,s,c)=>(si=r.dynCall_viiiiiii=F.Kc)(e,t,n,i,a,o,s,c),ci=r.dynCall_ji=(e,t)=>(ci=r.dynCall_ji=F.Lc)(e,t),li=r.dynCall_v=e=>(li=r.dynCall_v=F.Mc)(e),ui=r.dynCall_viiiii=(e,t,n,i,a,o)=>(ui=r.dynCall_viiiii=F.Nc)(e,t,n,i,a,o),di=r.dynCall_i=e=>(di=r.dynCall_i=F.Oc)(e),fi=r.dynCall_fii=(e,t,n)=>(fi=r.dynCall_fii=F.Pc)(e,t,n),pi=r.dynCall_viiiiiiii=(e,t,n,i,a,o,s,c,l)=>(pi=r.dynCall_viiiiiiii=F.Qc)(e,t,n,i,a,o,s,c,l),mi=r.dynCall_viiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d)=>(mi=r.dynCall_viiiiiiiiii=F.Rc)(e,t,n,i,a,o,s,c,l,u,d),hi=r.dynCall_jiii=(e,t,n,i)=>(hi=r.dynCall_jiii=F.Sc)(e,t,n,i),gi=r.dynCall_dii=(e,t,n)=>(gi=r.dynCall_dii=F.Tc)(e,t,n),_i=r.dynCall_viiiiiiiii=(e,t,n,i,a,o,s,c,l,u)=>(_i=r.dynCall_viiiiiiiii=F.Uc)(e,t,n,i,a,o,s,c,l,u),vi=r.dynCall_viiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f)=>(vi=r.dynCall_viiiiiiiiiii=F.Vc)(e,t,n,i,a,o,s,c,l,u,d,f),yi=r.dynCall_iiiiii=(e,t,n,i,a,o)=>(yi=r.dynCall_iiiiii=F.Wc)(e,t,n,i,a,o),bi=r.dynCall_iij=(e,t,n)=>(bi=r.dynCall_iij=F.Xc)(e,t,n),xi=r.dynCall_iiiiiiiiii=(e,t,n,i,a,o,s,c,l,u)=>(xi=r.dynCall_iiiiiiiiii=F.Yc)(e,t,n,i,a,o,s,c,l,u),Si=r.dynCall_iiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d)=>(Si=r.dynCall_iiiiiiiiiii=F.Zc)(e,t,n,i,a,o,s,c,l,u,d),Ci=r.dynCall_vij=(e,t,n)=>(Ci=r.dynCall_vij=F._c)(e,t,n),wi=r.dynCall_iiif=(e,t,n,i)=>(wi=r.dynCall_iiif=F.$c)(e,t,n,i),Ti=r.dynCall_iiij=(e,t,n,i)=>(Ti=r.dynCall_iiij=F.ad)(e,t,n,i),Ei=r.dynCall_fiii=(e,t,n,i)=>(Ei=r.dynCall_fiii=F.bd)(e,t,n,i),Di=r.dynCall_viiiiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f,p,m)=>(Di=r.dynCall_viiiiiiiiiiiii=F.cd)(e,t,n,i,a,o,s,c,l,u,d,f,p,m),Oi=r.dynCall_vjiii=(e,t,n,i,a)=>(Oi=r.dynCall_vjiii=F.dd)(e,t,n,i,a),ki=r.dynCall_vif=(e,t,n)=>(ki=r.dynCall_vif=F.ed)(e,t,n),Ai=r.dynCall_iiiiiii=(e,t,n,i,a,o,s)=>(Ai=r.dynCall_iiiiiii=F.fd)(e,t,n,i,a,o,s),ji=r.dynCall_iiiij=(e,t,n,i,a)=>(ji=r.dynCall_iiiij=F.gd)(e,t,n,i,a),Mi=r.dynCall_iiiiiiii=(e,t,n,i,a,o,s,c)=>(Mi=r.dynCall_iiiiiiii=F.hd)(e,t,n,i,a,o,s,c),Ni=r.dynCall_viiiiiiiiiiii=(e,t,n,i,a,o,s,c,l,u,d,f,p)=>(Ni=r.dynCall_viiiiiiiiiiii=F.id)(e,t,n,i,a,o,s,c,l,u,d,f,p),Pi=r.dynCall_diii=(e,t,n,i)=>(Pi=r.dynCall_diii=F.jd)(e,t,n,i),Fi=r.dynCall_jiiii=(e,t,n,i,a)=>(Fi=r.dynCall_jiiii=F.kd)(e,t,n,i,a),Ii=r.dynCall_viiij=(e,t,n,i,a)=>(Ii=r.dynCall_viiij=F.ld)(e,t,n,i,a),Li=r.dynCall_fiiii=(e,t,n,i,a)=>(Li=r.dynCall_fiiii=F.md)(e,t,n,i,a),Ri=r.dynCall_viiif=(e,t,n,i,a)=>(Ri=r.dynCall_viiif=F.nd)(e,t,n,i,a),zi=r.dynCall_diiii=(e,t,n,i,a)=>(zi=r.dynCall_diiii=F.od)(e,t,n,i,a),Bi=r.dynCall_viiid=(e,t,n,i,a)=>(Bi=r.dynCall_viiid=F.pd)(e,t,n,i,a),Vi=r.dynCall_iiiijii=(e,t,n,i,a,o,s)=>(Vi=r.dynCall_iiiijii=F.qd)(e,t,n,i,a,o,s),Hi=r.dynCall_iiiiiij=(e,t,n,i,a,o,s)=>(Hi=r.dynCall_iiiiiij=F.rd)(e,t,n,i,a,o,s),Ui=e=>(Ui=F.sd)(e),Wi=()=>(Wi=F.td)(),Gi=e=>(Gi=F.ud)(e),Ki=()=>(Ki=F.vd)();function qi(e,t,n){var r=V();try{ti(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;L(1,0)}}function Ji(e,t,n){var r=V();try{return Qr(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;L(1,0)}}function Yi(e,t){var n=V();try{$r(e,t)}catch(e){if(z(n),e!==e+0)throw e;L(1,0)}}function Xi(e,t){var n=V();try{return ei(e,t)}catch(e){if(z(n),e!==e+0)throw e;L(1,0)}}function Zi(e,t,n,r){var i=V();try{return ni(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;L(1,0)}}function Qi(e,t,n,r,i){var a=V();try{ai(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;L(1,0)}}function $i(e,t,n,r,i){var a=V();try{return ii(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;L(1,0)}}function ea(e,t,n,r){var i=V();try{ri(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;L(1,0)}}function ta(e,t,n,r,i,a,o){var s=V();try{return Ai(e,t,n,r,i,a,o)}catch(e){if(z(s),e!==e+0)throw e;L(1,0)}}function na(e){var t=V();try{li(e)}catch(e){if(z(t),e!==e+0)throw e;L(1,0)}}function ra(e,t,n){var r=V();try{return bi(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;L(1,0)}}function ia(e,t,n,r,i,a){var o=V();try{ui(e,t,n,r,i,a)}catch(e){if(z(o),e!==e+0)throw e;L(1,0)}}function aa(e,t,n){var r=V();try{Ci(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;L(1,0)}}function oa(e,t,n,r,i,a,o){var s=V();try{oi(e,t,n,r,i,a,o)}catch(e){if(z(s),e!==e+0)throw e;L(1,0)}}function sa(e,t,n,r,i,a,o,s){var c=V();try{si(e,t,n,r,i,a,o,s)}catch(e){if(z(c),e!==e+0)throw e;L(1,0)}}function ca(e,t,n,r,i,a){var o=V();try{return yi(e,t,n,r,i,a)}catch(e){if(z(o),e!==e+0)throw e;L(1,0)}}function la(e,t,n,r,i,a,o,s){var c=V();try{return Mi(e,t,n,r,i,a,o,s)}catch(e){if(z(c),e!==e+0)throw e;L(1,0)}}function ua(e,t,n,r,i,a,o,s,c,l){var u=V();try{_i(e,t,n,r,i,a,o,s,c,l)}catch(e){if(z(u),e!==e+0)throw e;L(1,0)}}function da(e,t,n,r,i,a,o,s,c){var l=V();try{pi(e,t,n,r,i,a,o,s,c)}catch(e){if(z(l),e!==e+0)throw e;L(1,0)}}function fa(e){var t=V();try{return di(e)}catch(e){if(z(t),e!==e+0)throw e;L(1,0)}}function pa(e,t,n,r,i,a,o,s,c,l){var u=V();try{return xi(e,t,n,r,i,a,o,s,c,l)}catch(e){if(z(u),e!==e+0)throw e;L(1,0)}}function ma(e,t,n){var r=V();try{return fi(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;L(1,0)}}function ha(e,t,n,r){var i=V();try{return hi(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;return L(1,0),0n}}function ga(e,t,n){var r=V();try{return gi(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;L(1,0)}}function _a(e,t,n,r,i,a,o,s,c,l,u,d){var f=V();try{vi(e,t,n,r,i,a,o,s,c,l,u,d)}catch(e){if(z(f),e!==e+0)throw e;L(1,0)}}function va(e,t,n,r,i,a,o,s,c,l,u){var d=V();try{mi(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(z(d),e!==e+0)throw e;L(1,0)}}function ya(e,t,n,r,i,a,o,s,c,l,u){var d=V();try{return Si(e,t,n,r,i,a,o,s,c,l,u)}catch(e){if(z(d),e!==e+0)throw e;L(1,0)}}function ba(e,t,n,r){var i=V();try{return wi(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;L(1,0)}}function xa(e,t,n,r){var i=V();try{return Ti(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;L(1,0)}}function Sa(e,t,n,r){var i=V();try{return Ei(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;L(1,0)}}function Ca(e,t,n,r,i,a,o,s,c,l,u,d,f,p){var m=V();try{Di(e,t,n,r,i,a,o,s,c,l,u,d,f,p)}catch(e){if(z(m),e!==e+0)throw e;L(1,0)}}function wa(e,t,n,r,i){var a=V();try{Oi(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;L(1,0)}}function Ta(e,t,n){var r=V();try{ki(e,t,n)}catch(e){if(z(r),e!==e+0)throw e;L(1,0)}}function Ea(e,t){var n=V();try{return ci(e,t)}catch(e){if(z(n),e!==e+0)throw e;return L(1,0),0n}}function Da(e,t,n,r,i){var a=V();try{return ji(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;L(1,0)}}function Oa(e,t,n,r,i,a,o,s,c,l,u,d,f){var p=V();try{Ni(e,t,n,r,i,a,o,s,c,l,u,d,f)}catch(e){if(z(p),e!==e+0)throw e;L(1,0)}}function ka(e,t,n,r){var i=V();try{return Pi(e,t,n,r)}catch(e){if(z(i),e!==e+0)throw e;L(1,0)}}function Aa(e,t,n,r,i){var a=V();try{return Fi(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;return L(1,0),0n}}function ja(e,t,n,r,i){var a=V();try{Ii(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;L(1,0)}}function Ma(e,t,n,r,i){var a=V();try{return Li(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;L(1,0)}}function Na(e,t,n,r,i){var a=V();try{Ri(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;L(1,0)}}function Pa(e,t,n,r,i){var a=V();try{return zi(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;L(1,0)}}function Fa(e,t,n,r,i){var a=V();try{Bi(e,t,n,r,i)}catch(e){if(z(a),e!==e+0)throw e;L(1,0)}}function Ia(e,t,n,r,i,a,o){var s=V();try{return Vi(e,t,n,r,i,a,o)}catch(e){if(z(s),e!==e+0)throw e;L(1,0)}}function La(e,t,n,r,i,a,o){var s=V();try{return Hi(e,t,n,r,i,a,o)}catch(e){if(z(s),e!==e+0)throw e;L(1,0)}}return r.stackSave=()=>V(),r.stackRestore=e=>z(e),r.stackAlloc=e=>B(e),r.setValue=function(e,t,n=`i8`){switch(n.endsWith(`*`)&&(n=`*`),n){case`i1`:case`i8`:de()[e>>>0]=t;break;case`i16`:pe()[e>>>1>>>0]=t;break;case`i32`:w()[e>>>2>>>0]=t;break;case`i64`:ae[e>>>3]=BigInt(t);break;case`float`:he()[e>>>2>>>0]=t;break;case`double`:ge()[e>>>3>>>0]=t;break;case`*`:T()[e>>>2>>>0]=t;break;default:Te(`invalid type for setValue: ${n}`)}},r.getValue=function(e,t=`i8`){switch(t.endsWith(`*`)&&(t=`*`),t){case`i1`:case`i8`:return de()[e>>>0];case`i16`:return pe()[e>>>1>>>0];case`i32`:return w()[e>>>2>>>0];case`i64`:return ae[e>>>3];case`float`:return he()[e>>>2>>>0];case`double`:return ge()[e>>>3>>>0];case`*`:return T()[e>>>2>>>0];default:Te(`invalid type for getValue: ${t}`)}},r.UTF8ToString=ut,r.stringToUTF8=mt,r.lengthBytesUTF8=pt,function e(){if(0<Se)Ce=e;else if(s)t(r),be();else{for(;0<Me.length;)Me.shift()(r);0<Se?Ce=e:(r.calledRun=!0,le||(be(),t(r)))}}(),r.PTR_SIZE=4,i}),Uf=Hf,Wf=globalThis.self?.name?.startsWith(`em-pthread`),Wf&&Hf()}),ap=U(()=>{"use strict";Pf(),Kf=typeof location>`u`?void 0:location.origin,qf=()=>self.location.href?.startsWith(`file:`)?new URL(new URL(`/fangcun-toolbox/assets/ort.bundle.min-OfoG_cy9.mjs`,``+self.location.href).href,Kf).href:self.location.href,Jf=qf(),Yf=()=>{if(Jf&&!Jf.startsWith(`blob:`))return Jf.substring(0,Jf.lastIndexOf(`/`)+1)},Xf=(e,t)=>{try{let n=t??Jf;return(n?new URL(e,n):new URL(e)).origin===Kf}catch{return!1}},Zf=(e,t)=>{let n=t??Jf;try{return(n?new URL(e,n):new URL(e)).href}catch{return}},Qf=(e,t)=>`${t??`./`}${e}`,$f=async e=>{let t=await(await fetch(e,{credentials:`same-origin`})).blob();return URL.createObjectURL(t)},ep=async e=>(await import(e)).default,tp=(zf(),Fd(Ff)).default,np=async()=>{if(!Jf)throw Error(`Failed to load proxy worker: cannot determine the script source URL.`);if(Xf(Jf))return[void 0,tp()];let e=await $f(Jf);return[e,tp(e)]},rp=(Gf(),Fd(Bf)).default,ip=async(e,t,n)=>{if(!e&&!t&&rp&&Jf&&Xf(Jf))return[void 0,rp];{let r=`ort-wasm-simd-threaded.jsep.mjs`,i=e??Zf(r,t),a=n&&i&&!Xf(i,t),o=a?await $f(i):i??Qf(r,t);return[a?o:void 0,await ep(o)]}}}),mp=U(()=>{"use strict";ap(),sp=!1,cp=!1,lp=!1,up=()=>{if(typeof SharedArrayBuffer>`u`)return!1;try{return typeof MessageChannel<`u`&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},dp=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},fp=async e=>{if(sp)return Promise.resolve();if(cp)throw Error(`multiple calls to 'initializeWebAssembly()' detected.`);if(lp)throw Error(`previous call to 'initializeWebAssembly()' failed.`);cp=!0;let t=e.initTimeout,n=e.numThreads;if(!dp())throw Error(`WebAssembly SIMD is not supported in the current environment.`);let r=up();n>1&&!r&&(typeof self<`u`&&!self.crossOriginIsolated&&console.warn(`env.wasm.numThreads is set to `+n+`, but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info.`),console.warn(`WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading.`),e.numThreads=n=1);let i=e.wasmPaths,a=typeof i==`string`?i:void 0,o=i?.mjs,s=o?.href??o,c=i?.wasm,l=c?.href??c,u=e.wasmBinary,[d,f]=await ip(s,a,n>1),p=!1,m=[];if(t>0&&m.push(new Promise(e=>{setTimeout(()=>{p=!0,e()},t)})),m.push(new Promise((e,t)=>{let r={numThreads:n};if(u)r.wasmBinary=u;else if(l||a)r.locateFile=e=>l??a+e;else if(s&&s.indexOf(`blob:`)!==0)r.locateFile=e=>new URL(e,s).href;else if(d){let e=Yf();e&&(r.locateFile=t=>e+t)}f(r).then(t=>{cp=!1,sp=!0,op=t,e(),d&&URL.revokeObjectURL(d)},e=>{cp=!1,lp=!0,t(e)})})),await Promise.race(m),p)throw Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},pp=()=>{if(sp&&op)return op;throw Error(`WebAssembly is not initialized yet.`)}}),vp=U(()=>{"use strict";mp(),hp=(e,t)=>{let n=pp(),r=n.lengthBytesUTF8(e)+1,i=n._malloc(r);return n.stringToUTF8(e,i,r),t.push(i),i},gp=(e,t,n,r)=>{if(typeof e==`object`&&e){if(n.has(e))throw Error(`Circular reference in options`);n.add(e)}Object.entries(e).forEach(([e,i])=>{let a=t?t+e:e;if(typeof i==`object`)gp(i,a+`.`,n,r);else if(typeof i==`string`||typeof i==`number`)r(a,i.toString());else if(typeof i==`boolean`)r(a,i?`1`:`0`);else throw Error(`Can't handle extra config type: ${typeof i}`)})},_p=e=>{let t=pp(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetLastError(r,r+n);let i=Number(t.getValue(r,n===4?`i32`:`i64`)),a=t.getValue(r+n,`*`),o=a?t.UTF8ToString(a):``;throw Error(`${e} ERROR_CODE: ${i}, ERROR_MESSAGE: ${o}`)}finally{t.stackRestore(n)}}}),bp=U(()=>{"use strict";mp(),vp(),yp=e=>{let t=pp(),n=0,r=[],i=e||{};try{if(e?.logSeverityLevel===void 0)i.logSeverityLevel=2;else if(typeof e.logSeverityLevel!=`number`||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw Error(`log serverity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)i.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!=`number`||!Number.isInteger(e.logVerbosityLevel))throw Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(i.terminate=!1);let a=0;return e?.tag!==void 0&&(a=hp(e.tag,r)),n=t._OrtCreateRunOptions(i.logSeverityLevel,i.logVerbosityLevel,!!i.terminate,a),n===0&&_p(`Can't create run options.`),e?.extra!==void 0&&gp(e.extra,``,new WeakSet,(e,i)=>{let a=hp(e,r),o=hp(i,r);t._OrtAddRunConfigEntry(n,a,o)!==0&&_p(`Can't set a run config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseRunOptions(n),r.forEach(e=>t._free(e)),e}}}),Ep=U(()=>{"use strict";mp(),vp(),xp=e=>{switch(e){case`disabled`:return 0;case`basic`:return 1;case`extended`:return 2;case`all`:return 99;default:throw Error(`unsupported graph optimization level: ${e}`)}},Sp=e=>{switch(e){case`sequential`:return 0;case`parallel`:return 1;default:throw Error(`unsupported execution mode: ${e}`)}},Cp=e=>{e.extra||={},e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||=`1`,e.executionProviders&&e.executionProviders.some(e=>(typeof e==`string`?e:e.name)===`webgpu`)&&(e.enableMemPattern=!1)},wp=(e,t,n)=>{for(let r of t){let t=typeof r==`string`?r:r.name;switch(t){case`webnn`:if(t=`WEBNN`,typeof r!=`string`){let t=r?.deviceType;if(t){let r=hp(`deviceType`,n),i=hp(t,n);pp()._OrtAddSessionConfigEntry(e,r,i)!==0&&_p(`Can't set a session config entry: 'deviceType' - ${t}.`)}}break;case`webgpu`:if(t=`JS`,typeof r!=`string`){let t=r;if(t?.preferredLayout){if(t.preferredLayout!==`NCHW`&&t.preferredLayout!==`NHWC`)throw Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${t.preferredLayout}`);let r=hp(`preferredLayout`,n),i=hp(t.preferredLayout,n);pp()._OrtAddSessionConfigEntry(e,r,i)!==0&&_p(`Can't set a session config entry: 'preferredLayout' - ${t.preferredLayout}.`)}}break;case`wasm`:case`cpu`:continue;default:throw Error(`not supported execution provider: ${t}`)}let i=hp(t,n);pp()._OrtAppendExecutionProvider(e,i)!==0&&_p(`Can't append execution provider: ${t}.`)}},Tp=e=>{let t=pp(),n=0,r=[],i=e||{};Cp(i);try{let e=xp(i.graphOptimizationLevel??`all`),a=Sp(i.executionMode??`sequential`),o=typeof i.logId==`string`?hp(i.logId,r):0,s=i.logSeverityLevel??2;if(!Number.isInteger(s)||s<0||s>4)throw Error(`log serverity level is not valid: ${s}`);let c=i.logVerbosityLevel??0;if(!Number.isInteger(c)||c<0||c>4)throw Error(`log verbosity level is not valid: ${c}`);let l=typeof i.optimizedModelFilePath==`string`?hp(i.optimizedModelFilePath,r):0;if(n=t._OrtCreateSessionOptions(e,!!i.enableCpuMemArena,!!i.enableMemPattern,a,!!i.enableProfiling,0,o,s,c,l),n===0&&_p(`Can't create session options.`),i.executionProviders&&wp(n,i.executionProviders,r),i.enableGraphCapture!==void 0){if(typeof i.enableGraphCapture!=`boolean`)throw Error(`enableGraphCapture must be a boolean value: ${i.enableGraphCapture}`);let e=hp(`enableGraphCapture`,r),a=hp(i.enableGraphCapture.toString(),r);t._OrtAddSessionConfigEntry(n,e,a)!==0&&_p(`Can't set a session config entry: 'enableGraphCapture' - ${i.enableGraphCapture}.`)}if(i.freeDimensionOverrides)for(let[e,a]of Object.entries(i.freeDimensionOverrides)){if(typeof e!=`string`)throw Error(`free dimension override name must be a string: ${e}`);if(typeof a!=`number`||!Number.isInteger(a)||a<0)throw Error(`free dimension override value must be a non-negative integer: ${a}`);let i=hp(e,r);t._OrtAddFreeDimensionOverride(n,i,a)!==0&&_p(`Can't set a free dimension override: ${e} - ${a}.`)}return i.extra!==void 0&&gp(i.extra,``,new WeakSet,(e,i)=>{let a=hp(e,r),o=hp(i,r);t._OrtAddSessionConfigEntry(n,a,o)!==0&&_p(`Can't set a session config entry: ${e} - ${i}.`)}),[n,r]}catch(e){throw n!==0&&t._OrtReleaseSessionOptions(n)!==0&&_p(`Can't release session options.`),r.forEach(e=>t._free(e)),e}}}),W=U(()=>{"use strict";Dp=e=>{switch(e){case`int8`:return 3;case`uint8`:return 2;case`bool`:return 9;case`int16`:return 5;case`uint16`:return 4;case`int32`:return 6;case`uint32`:return 12;case`float16`:return 10;case`float32`:return 1;case`float64`:return 11;case`string`:return 8;case`int64`:return 7;case`uint64`:return 13;case`int4`:return 22;case`uint4`:return 21;default:throw Error(`unsupported data type: ${e}`)}},Op=e=>{switch(e){case 3:return`int8`;case 2:return`uint8`;case 9:return`bool`;case 5:return`int16`;case 4:return`uint16`;case 6:return`int32`;case 12:return`uint32`;case 10:return`float16`;case 1:return`float32`;case 11:return`float64`;case 8:return`string`;case 7:return`int64`;case 13:return`uint64`;case 22:return`int4`;case 21:return`uint4`;default:throw Error(`unsupported data type: ${e}`)}},kp=(e,t)=>{let n=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],r=typeof t==`number`?t:t.reduce((e,t)=>e*t,1);return n>0?Math.ceil(r*n):void 0},Ap=e=>{switch(e){case`float16`:return typeof Float16Array<`u`&&Float16Array.from?Float16Array:Uint16Array;case`float32`:return Float32Array;case`uint8`:return Uint8Array;case`int8`:return Int8Array;case`uint16`:return Uint16Array;case`int16`:return Int16Array;case`int32`:return Int32Array;case`bool`:return Uint8Array;case`float64`:return Float64Array;case`uint32`:return Uint32Array;case`int64`:return BigInt64Array;case`uint64`:return BigUint64Array;default:throw Error(`unsupported type: ${e}`)}},jp=e=>{switch(e){case`verbose`:return 0;case`info`:return 1;case`warning`:return 2;case`error`:return 3;case`fatal`:return 4;default:throw Error(`unsupported logging level: ${e}`)}},Mp=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Np=e=>e===`float32`||e===`float16`||e===`int32`||e===`int64`||e===`uint32`||e===`uint64`||e===`int8`||e===`uint8`||e===`bool`||e===`uint4`||e===`int4`,Pp=e=>{switch(e){case`none`:return 0;case`cpu`:return 1;case`cpu-pinned`:return 2;case`texture`:return 3;case`gpu-buffer`:return 4;case`ml-tensor`:return 5;default:throw Error(`unsupported data location: ${e}`)}}}),Ip=U(()=>{"use strict";Pf(),Fp=async e=>{if(typeof e==`string`){let t=await fetch(e);if(!t.ok)throw Error(`failed to load external data file: ${e}`);let n=t.headers.get(`Content-Length`),r=n?parseInt(n,10):0;if(r<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),i;try{i=new ArrayBuffer(r)}catch(e){if(e instanceof RangeError){let e=Math.ceil(r/65536);i=new WebAssembly.Memory({initial:e,maximum:e}).buffer}else throw e}let a=0;for(;;){let{done:e,value:t}=await n.read();if(e)break;let r=t.byteLength;new Uint8Array(i,a,r).set(t),a+=r}return new Uint8Array(i,0,r)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),Wp=U(()=>{"use strict";W(),Lp=[`V`,`I`,`W`,`E`,`F`],Rp=(e,t)=>{console.log(`[${Lp[e]},${new Date().toISOString()}]${t}`)},Vp=(e,t)=>{zp=e,Bp=t},Hp=(e,t)=>{let n=jp(e);n>=jp(zp)&&Rp(n,typeof t==`function`?t():t)},Up=(...e)=>{Bp&&Hp(...e)}}),Kp=U(()=>{"use strict";W(),Gp=(e,t)=>new(Ap(t))(e)}),qp=U(()=>{"use strict";}),rm=U(()=>{"use strict";Wp(),qp(),Jp=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Yp=[],Xp=e=>Math.ceil(Number(e)/16)*16,Zp=e=>{for(let t=0;t<Yp.length;t++){let n=Yp[t];if(e<=n)return n}return Math.ceil(e/16)*16},Qp=1,$p=()=>Qp++,em=async(e,t,n,r)=>{let i=Xp(n),a=e.device.createBuffer({size:i,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let o=e.getCommandEncoder();e.endComputePass(),o.copyBufferToBuffer(t,0,a,0,i),e.flush(),await a.mapAsync(GPUMapMode.READ);let s=a.getMappedRange();if(r){let e=r();return e.set(new Uint8Array(s,0,n)),e}else return new Uint8Array(s.slice(0,n))}finally{a.destroy()}},tm=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[e]of Jp)Yp.push(e),this.freeBuffers.set(e,[]),this.freeUniformBuffers.set(e,[]);this.sessionCount=0}upload(e,t){let n=t.buffer,r=t.byteOffset,i=t.byteLength,a=Xp(i),o=this.storageCache.get(e);if(!o)throw Error(`gpu data for uploading does not exist`);if(Number(o.originalSize)!==i)throw Error(`inconsistent data size. gpu data size=${o.originalSize}, data size=${i}`);let s=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),c=s.getMappedRange();new Uint8Array(c).set(new Uint8Array(n,r,i)),s.unmap();let l=this.backend.device.createCommandEncoder();l.copyBufferToBuffer(s,0,o.gpuData.buffer,0,a),this.backend.device.queue.submit([l.finish()]),s.destroy(),Up(`verbose`,()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let n=this.storageCache.get(e);if(!n)throw Error(`source gpu data for memcpy does not exist`);let r=this.storageCache.get(t);if(!r)throw Error(`destination gpu data for memcpy does not exist`);if(n.originalSize!==r.originalSize)throw Error(`inconsistent source and destination gpu data size`);let i=Xp(n.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(n.gpuData.buffer,0,r.gpuData.buffer,0,i)}registerExternalBuffer(e,t,n){let r;if(n){if(r=n[0],e===n[1])return Up(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, buffer is the same, skip.`),r;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else r=$p();return this.storageCache.set(r,{gpuData:{id:r,type:0,buffer:e},originalSize:t}),Up(`verbose`,()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${r}, registered.`),r}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),Up(`verbose`,()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let n=Zp(e),r,i=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(i||a){let e=(i?this.freeBuffers:this.freeUniformBuffers).get(n);r=e&&e.length>0?e.pop():this.backend.device.createBuffer({size:n,usage:t})}else r=this.backend.device.createBuffer({size:n,usage:t});let o={id:$p(),type:0,buffer:r};return this.storageCache.set(o.id,{gpuData:o,originalSize:Number(e)}),Up(`verbose`,()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${o.id}`),o}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e==`bigint`?Number(e):e,n=this.storageCache.get(t);if(!n){if(this.storageCache.size===0)return 0;throw Error(`releasing data does not exist`)}return Up(`verbose`,()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${n.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(n.gpuData.buffer),n.originalSize}async download(e,t){let n=this.storageCache.get(Number(e));if(!n)throw Error(`data does not exist`);await em(this.backend,n.gpuData.buffer,n.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus===`default`){for(let e of this.buffersPending){let t=Jp.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let n=this.freeBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let n=this.freeUniformBuffers.get(e.size)||[];t===void 0||n.length>=t?e.destroy():n.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(e=>{e.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(e=>{e.destroy()}),this.capturedPendingBuffers.delete(e)),--this.sessionCount,this.sessionCount===0&&(Up(`warning`,()=>`[WebGPU] Clearing webgpu buffer cache`),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.storageCache=new Map)}},nm=(...e)=>new tm(...e)}),om=U(()=>{"use strict";im=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(`;`),this.key}},am=e=>new im(e)}),pm=U(()=>{"use strict";sm=class{static calcMatMulShape(e,t){return e[1]===t[0]?[e[0],t[1]]:void 0}},cm=class{static calcShape(e,t,n=!1){let r=e.length,i=t.length;if(r===0)return t;if(i===0)return e;let a=Math.max(e.length,t.length),o=Array(a);if(n){if(r<2||i<2)return;let n=sm.calcMatMulShape([e[r-2],e[r-1]],[t[i-2],t[i-1]]);if(n===void 0)return;[o[a-2],o[a-1]]=n}for(let s=n?3:1;s<=a;s++){let n=r-s<0?1:e[r-s],c=i-s<0?1:t[i-s];if(n!==c&&n>1&&c>1)return;let l=Math.max(n,c);if(n&&c)o[a-s]=Math.max(n,c);else{if(l>1)return;o[a-s]=0}}return o}static isValidBroadcast(e,t){let n=e.length,r=t.length;if(n>r)return!1;for(let i=1;i<=n;i++)if(e[n-i]!==1&&e[n-i]!==t[r-i])return!1;return!0}},G=class e{static size(t){return e.getSizeFromDimensionRange(t,0,t.length)}static convertShape(e,t=4){let n=e.length;if(n===0)return[];let r=Array(n),i=n-1;for(;i>=0;){if(e[i]%t===0){r[i]=e[i]/t;break}if(t%e[i]!==0)throw Error(`cannot convert shape`);r[i]=1,t/=e[i],i--}for(i--;i>=0;i--)r[i]=e[i];return r}static sizeFromDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,n,t.length)}static sizeToDimension(t,n){if(n<0||n>t.length)throw Error(`invalid dimension of ${n} for sizeToDimension as Tensor has ${t.length} dimensions.`);return e.getSizeFromDimensionRange(t,0,n)}static getSizeFromDimensionRange(e,t,n){let r=1;for(let i=t;i<n;i++){if(e[i]<0)throw Error(`cannot get valid size from specified dimension range. Most likely the range contains negative values in them.`);r*=Number(e[i])}return r}static computeStrides(e){let t=e.length;if(t===0)return[];if(t===1)return[1];let n=Array(t);n[t-1]=1,n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}static normalizeAxis(e,t){if(e<-t&&e>=t)throw Error(`unsupported axis for this operation.`);return e<0?e+t:e}static normalizeAxes(e,t){return e.map(n=>this.normalizeAxis(n,t??e.length))}static sortBasedOnPerm(e,t){return t?t.map(t=>e[t]):e.slice().reverse()}static padShape(e,t){let n=e.length;return e.map((e,r)=>e+t[r]+t[r+n])}static areEqual(e,t){return e.length===t.length?e.every((e,n)=>e===t[n]):!1}},lm=class e{static adjustPoolAttributes(e,t,n,r,i,a){if(!e&&n.length!==t.length-2)throw Error(`length of specified kernel shapes should be 2 less than length of input dimensions`);if(e)for(let e=0;e<t.length-2;e++)e>=n.length?n.push(t[e+2]):n[e]=t[e+2];for(let e=0;e<n.length;e++)if(e<r.length){if(r[e]<0)throw Error(`strides should be greater than or equal to 1`)}else r.push(1);for(let e=0;e<n.length;e++)if(e<i.length){if(i[e]<0)throw Error(`dilations should be greater than or equal to 1`)}else i.push(1);for(let e=0;e<n.length*2;e++)if(e<a.length){if(a[e]<0)throw Error(`pad should be greater than or equal to 1`)}else a.push(0);for(let e=0;e<n.length;e++){if(n[e]<=0)throw Error(`kernel shapes need to be greater than 0`);if(a[e]>=n[e]||a[e+n.length]>=n[e])throw Error(`pads should be smaller than kernel`)}}static adjustPadsBasedOnAutoPad(t,n,r,i,a,o,s){if(s){if(a.length!==2*(t.length-2))throw Error(`length of pads should be twice the length of data dimensions`);if(n.length!==t.length-2)throw Error(`length of strides should be the length of data dimensions`);if(i.length!==t.length-2)throw Error(`length of kernel shapes should be the length of data dimensions`);for(let c=0;c<t.length-2;c++)e.adjustPadAndReturnShape(t[c+(o?1:2)],n[c],r[c],i[c],a,c,c+t.length-2,s)}}static computePoolOutputShape(t,n,r,i,a,o,s){if(n.length<=0)throw Error(`input shape must be of size greater than 0`);let c=[n[0],n[1]];return e.computeShapeHelper(t,n,c,r,i,a,o,s),c}static computeConvOutputShape(t,n,r,i,a,o,s){if(t.length<=0||n.length<=0)throw Error(`invalid input tensor dims or invalid filter tensor dims`);let c=[t[0],n[0]];return e.computeShapeHelper(!1,t,c,r,i,a,o,s),c}static computeShapeHelper(t,n,r,i,a,o,s,c){if(t)for(let e=0;e<n.length-2;e++)r.push(1);else for(let t=0;t<n.length-2;t++)r.push(e.adjustPadAndReturnShape(n[t+2],i[t],a[t],o[t],s,t,t+n.length-2,c))}static adjustPadAndReturnShape(e,t,n,r,i,a,o,s){let c=n*(r-1)+1;if(s&&s!==`NOTSET`)switch(s){case`VALID`:return i[a]=0,i[o]=0,Math.floor((e-c)/t+1);case`SAME_LOWER`:case`SAME_UPPER`:if(n!==1)throw Error(`Dilation not supported for SAME_UPPER or SAME_LOWER`);{let n=((e+t-1)/t-1)*t+r-e;return i[a]=Math.floor(s===`SAME_LOWER`?(n+1)/2:n/2),i[o]=n-i[a],Math.floor((e+n-r)/t+1)}default:throw Error(`Unsupported AutoPad type`)}else return Math.floor((e+i[a]+i[o]-c)/t+1)}},um=class{static getShapeOfGemmResult(e,t,n,r,i){if(e.length!==2||n.length!==2)throw Error(`shape need to be of size 2`);let a,o,s;t?(a=e[1],o=e[0]):(a=e[0],o=e[1]);let c=-1;if(r?(s=n[0],c=1):(s=n[1],c=0),n[c]!==o)throw Error(`dimension mismatch`);if(a<=0||s<=0||o<=0)throw Error(`invalid shape specified`);if(i&&!cm.isValidBroadcast(i,[a,s]))throw Error(`gemm: invalid bias shape for broadcast`);return[a,s,o]}},dm=-34028234663852886e22,fm=34028234663852886e22}),Dm=U(()=>{"use strict";W(),pm(),mm=64,hm=(e,t)=>{if(t===3)throw Error(`vec3 has same alignment as vec4, use vec4 instead`);switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:`f16`;case 1:return t>1?`vec${t}<f32>`:`f32`;case 6:return t>1?`vec${t}<i32>`:`i32`;case 12:return t>1?`vec${t}<u32>`:`u32`;case 7:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`i32`];case 13:if(t>1)throw Error(`currently not supported vecX of uint64 yet`);return[`vec2<u32>`,`u32`];case 9:if(t!==4)throw Error(`bool must be vec4`);return[`u32`,`vec4<bool>`];case 22:return`i32`;case 21:return`u32`;default:throw Error(`Unknown data type: ${e}`)}},gm=(e,t=1)=>{let n=hm(e,t);return typeof n==`string`?n:n[0]},_m=(e,t=1)=>{let n=hm(e,t);return typeof n==`string`?n:n[1]},K=(...e)=>{let t=[];return e.forEach(e=>{e.length!==0&&t.push({type:12,data:e},{type:12,data:G.computeStrides(e)})}),t},vm=e=>e%4==0?4:e%2==0?2:1,ym=(e=`f32`,t,n=`0`)=>!t||t===1?`${e}(${n})`:`vec${t}<${e}>(${n})`,bm=(e,t,n)=>e===`f32`?n:t===1?`f32(${n})`:`vec${t}<f32>(${n})`,xm=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,q=(e,t,n,r)=>e.startsWith(`uniforms.`)&&n>4?typeof t==`string`?r===`f16`?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:r===`f16`?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:n>1?`${e}[${t}]`:e,Sm=(e,t,n,r,i)=>{let a=typeof n==`number`,o=a?n:n.length,s=[...Array(o).keys()],c=o<2?`u32`:o<=4?`vec${o}<u32>`:`array<u32, ${o}>`,l=hm(t,i),u=typeof l==`string`?l:l[1],d={indices:c,value:u,storage:typeof l==`string`?l:l[0],tensor:t},f=e=>typeof e==`string`?e:`${e}u`,p={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},m=a?`uniforms.`:``,h=`${m}${e}_shape`,g=`${m}${e}_strides`,_=``;for(let e=0;e<o-1;e++)_+=`
    let dim${e} = current / ${q(g,e,o)};
    let rest${e} = current % ${q(g,e,o)};
    indices[${e}] = dim${e};
    current = rest${e};
    `;_+=`indices[${o-1}] = current;`;let v=o<2?``:`
  fn o2i_${e}(offset: u32) -> ${d.indices} {
    var indices: ${d.indices};
    var current = offset;
    ${_}
    return indices;
  }`,y=t=>(p.offsetToIndices=!0,o<2?t:`o2i_${e}(${t})`),b=[];if(o>=2)for(let e=o-1;e>=0;e--)b.push(`${q(g,e,o)} * (indices[${e}])`);let x=o<2?``:`
  fn i2o_${e}(indices: ${d.indices}) -> u32 {
    return ${b.join(`+`)};
  }`,S=t=>(p.indicesToOffset=!0,o<2?t:`i2o_${e}(${t})`),ee=(...e)=>o===0?`0u`:`${d.indices}(${e.map(f).join(`,`)})`,te=(e,t)=>o<2?`${e}`:`${q(e,t,o)}`,C=(e,t,n)=>o<2?`${e}=${n};`:`${q(e,t,o)}=${n};`,ne={},re=(t,n)=>{p.broadcastedIndicesToOffset=!0;let r=`${n.name}broadcastedIndicesTo${e}Offset`;if(r in ne)return`${r}(${t})`;let i=[];for(let e=o-1;e>=0;e--){let t=n.indicesGet(`outputIndices`,e+n.rank-o);i.push(`${te(g,e)} * (${t} % ${te(h,e)})`)}return ne[r]=`fn ${r}(outputIndices: ${n.type.indices}) -> u32 {
             return ${i.length>0?i.join(`+`):`0u`};
           }`,`${r}(${t})`},ie=(t,n)=>(()=>{if(d.storage===d.value)return`${e}[${t}]=${n};`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`${e}[${t}]=vec2<u32>(u32(${n}), select(0u, 0xFFFFFFFFu, ${n} < 0));`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`${e}[${t}]=vec2<u32>(u32(${n}), 0u);`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`${e}[${t}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${n}));`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),ae=t=>(()=>{if(d.storage===d.value)return`${e}[${t}]`;if(d.storage===`vec2<u32>`&&d.value===`i32`)return`i32(${e}[${t}].x)`;if(d.storage===`vec2<u32>`&&d.value===`u32`)return`u32(${e}[${t}].x)`;if(d.storage===`u32`&&d.value===`vec4<bool>`)return`vec4<bool>(bool(${e}[${t}] & 0xFFu), bool(${e}[${t}] & 0xFF00u), bool(${e}[${t}] & 0xFF0000u), bool(${e}[${t}] & 0xFF000000u))`;throw Error(`not supported combination of storage type ${d.storage} and value type ${d.value} yet`)})(),oe=o<2?``:`
  fn get_${e}ByIndices(indices: ${d.indices}) -> ${u} {
    return ${ae(`i2o_${e}(indices)`)};
  }`,se=o<2?``:`
  fn get_${e}(${s.map(e=>`d${e}: u32`).join(`, `)}) -> ${u} {
    return get_${e}ByIndices(${ee(s.map(e=>`d${e}`).join(`, `))});
  }`,ce=(...t)=>{if(t.length!==o)throw Error(`indices length must be ${o}`);let n=t.map(f).join(`,`);return o===0?ae(`0u`):o===1?ae(n[0]):(p.get=!0,p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}(${n})`)},le=t=>o<2?ae(t):(p.getByIndices=!0,p.indicesToOffset=!0,`get_${e}ByIndices(${t})`),ue=o<2?``:`
  fn set_${e}ByIndices(indices: ${d.indices}, value: ${u}) {
    ${ie(`i2o_${e}(indices)`,`value`)}
  }`,de=o<2?``:`
  fn set_${e}(${s.map(e=>`d${e}: u32`).join(`, `)}, value: ${u}) {
    set_${e}ByIndices(${ee(s.map(e=>`d${e}`).join(`, `))}, value);
  }`;return{impl:()=>{let e=[],t=!1;return p.offsetToIndices&&(e.push(v),t=!0),p.indicesToOffset&&(e.push(x),t=!0),p.broadcastedIndicesToOffset&&(Object.values(ne).forEach(t=>e.push(t)),t=!0),p.set&&(e.push(de),t=!0),p.setByIndices&&(e.push(ue),t=!0),p.get&&(e.push(se),t=!0),p.getByIndices&&(e.push(oe),t=!0),!a&&t&&e.unshift(`const ${h} = ${d.indices}(${n.join(`,`)});`,`const ${g} = ${d.indices}(${G.computeStrides(n).join(`,`)});`),e.join(`
`)},type:d,offsetToIndices:y,indicesToOffset:S,broadcastedIndicesToOffset:re,indices:ee,indicesGet:te,indicesSet:C,set:(...t)=>{if(t.length!==o+1)throw Error(`indices length must be ${o}`);let n=t[o];if(typeof n!=`string`)throw Error(`value must be string`);let r=t.slice(0,o).map(f).join(`,`);return o===0?ie(`0u`,n):o===1?ie(r[0],n):(p.set=!0,p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}(${r}, ${n})`)},setByOffset:ie,setByIndices:(t,n)=>o<2?ie(t,n):(p.setByIndices=!0,p.indicesToOffset=!0,`set_${e}ByIndices(${t}, ${n});`),get:ce,getByOffset:ae,getByIndices:le,usage:r,name:e,strides:g,shape:h,rank:o}},J=(e,t,n,r=1)=>Sm(e,t,n,`input`,r),Y=(e,t,n,r=1)=>Sm(e,t,n,`output`,r),Cm=(e,t,n)=>Sm(e,t,n,`atomicOutput`,1),wm=(e,t,n,r=1)=>Sm(e,t,n,`internal`,r),Tm=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e==`number`?`${e}u`:e}) { return; }`}mainStart(e=mm){let t=typeof e==`number`?e:e[0],n=typeof e==`number`?1:e[1],r=typeof e==`number`?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||n>this.limits.maxComputeWorkgroupSizeY||r>this.limits.maxComputeWorkgroupSizeZ)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*n*r>this.limits.maxComputeInvocationsPerWorkgroup)throw Error(`workgroup size [${t}, ${n}, ${r}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let i=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1;return`@compute @workgroup_size(${t}, ${n}, ${r})
  fn main(${i?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`}) {
    ${i?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*n*r}u + local_idx;`}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith(`uniforms.`)&&this.uniforms.push({name:e.shape.replace(`uniforms.`,``),type:`u32`,length:e.rank}),e.strides.startsWith(`uniforms.`)&&this.uniforms.push({name:e.strides.replace(`uniforms.`,``),type:`u32`,length:e.rank}))}declareVariable(e,t){if(e.usage===`internal`)throw Error(`cannot use internal variable with declareVariable(). use registerInternalVariables() instead.`);this.variables.push(e),this.appendVariableUniforms(e);let n=e.usage===`input`?`read`:`read_write`,r=e.usage===`atomicOutput`?`atomic<i32>`:e.type.storage;return`@group(0) @binding(${t}) var<storage, ${n}> ${e.name}: array<${r}>;`}declareVariables(...e){return e.map(e=>this.declareVariable(e,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!==`internal`)throw Error(`cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.`);this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(e=>this.registerInternalVariable(e)),this}registerUniform(e,t,n=1){return this.uniforms.push({name:e,type:t,length:n}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return``;let e=[];for(let{name:t,type:n,length:r}of this.uniforms)if(r&&r>4)n===`f16`?e.push(`@align(16) ${t}:array<mat2x4<${n}>, ${Math.ceil(r/8)}>`):e.push(`${t}:array<vec4<${n}>, ${Math.ceil(r/4)}>`);else{let i=r==null||r===1?n:`vec${r}<${n}>`;e.push(`${t}:${i}`)}return`
      struct Uniforms { ${e.join(`, `)} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=e=>[12,10,1,6][[`u32`,`f16`,`f32`,`i32`].indexOf(e)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Em=(e,t)=>new Tm(e,t)}),Lm=U(()=>{"use strict";W(),pm(),om(),Dm(),Om=(e,t)=>{if(!e||e.length!==1)throw Error(`Transpose requires 1 input.`);if(t.length!==0&&t.length!==e[0].dims.length)throw Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},km=(e,t)=>t.length===0?[...Array(e).keys()].reverse():t,Am=(e,t)=>G.sortBasedOnPerm(e,km(e.length,t)),jm=(e,t,n,r)=>{let i=`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`;for(let n=0;n<t;++n)i+=`a[${e[n]}]=i[${n}];`;return i+=`return a;}`},Mm=(e,t)=>{let n=[],r=[];for(let i=0;i<e.length;++i)e[i]!==1&&n.push(e[i]),e[t[i]]!==1&&r.push(t[i]);return{newShape:n,newPerm:r}},Nm=(e,t)=>{let n=0;for(let r=0;r<e.length;++r)if(t[e[r]]!==1){if(e[r]<n)return!1;n=e[r]}return!0},Pm=(e,t)=>{let n=e.dataType,r=e.dims.length,i=km(r,t),a=Am(e.dims,i),o=e.dims,s=a,c=r<2||Nm(i,e.dims),l;if(c)return l=e=>{let t=J(`input`,n,o,4),r=Y(`output`,n,s,4);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    output[global_idx] = input[global_idx];
  }`},{name:`TransposeCopy`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=G.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64/4)},programUniforms:[{type:12,data:Math.ceil(t/4)}]}},getShaderSource:l};let{newShape:u,newPerm:d}=Mm(e.dims,i),f=G.areEqual(d,[2,3,1]),p=G.areEqual(d,[3,1,2]);return u.length===2||f||p?(o=f?[u[0],u[1]*u[2]]:p?[u[0]*u[1],u[2]]:u,s=[o[1],o[0]],l=e=>{let t=J(`a`,n,o.length),r=Y(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,r)}
  var<workgroup> tile : array<array<${r.type.value}, 17>, 16>;
  ${e.mainStart([16,16,1])}
    let stride = (uniforms.output_shape[1] - 1) / 16 + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * 16u + local_id.x;
    let input_row = workgroup_id_x * 16u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${t.getByIndices(`${t.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * 16u + local_id.x;
    let output_row = workgroup_id_y * 16u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${r.setByIndices(`${r.type.indices}(output_row, output_col)`,`tile[local_id.x][local_id.y]`)}
    }
  }`},{name:`TransposeShared`,shaderCache:{inputDependencies:[`type`]},getRunData:()=>{let t=G.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(s[1]/16),y:Math.ceil(s[0]/16)},programUniforms:[{type:12,data:t},...K(o,s)]}},getShaderSource:l}):(l=e=>{let t=J(`a`,n,o.length),a=Y(`output`,n,s.length);return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(t,a)}

  ${jm(i,r,t,a)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${a.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${a.setByOffset(`global_idx`,t.getByIndices(`aIndices`))}
  }`},{name:`Transpose`,shaderCache:{hint:`${t}`,inputDependencies:[`rank`]},getRunData:()=>{let t=G.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:[{type:12,data:t},...K(o,s)]}},getShaderSource:l})},Fm=(e,t)=>{Om(e.inputs,t.perm),e.compute(Pm(e.inputs[0],t.perm))},Im=e=>am({perm:e.perm})}),ah=U(()=>{"use strict";W(),pm(),Dm(),Mh(),Lm(),Rm={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate * candidate`,logSumExp:`bestValue + exp(candidate)`,l1:`bestValue + abs(candidate)`,l2:`bestValue + candidate * candidate`,logSum:`bestValue + candidate`},zm={max:`select(bestValue, candidate, candidate > bestValue)`,min:`select(bestValue, candidate, candidate < bestValue)`,mean:`bestValue + candidate`,sum:`bestValue + candidate`,prod:`bestValue * candidate`,sumSquare:`bestValue + candidate`,logSumExp:`bestValue + candidate`,l1:`bestValue + candidate`,l2:`bestValue + candidate`,logSum:`bestValue + candidate`},Bm={max:`_A[offset]`,min:`_A[offset]`,mean:`0`,sum:`0`,prod:`1`,sumSquare:`0`,logSumExp:`0`,l1:`0`,l2:`0`,logSum:`0`},Vm={max:`bestValue`,min:`bestValue`,sum:`bestValue`,prod:`bestValue`,sumSquare:`bestValue`,logSumExp:`log(bestValue)`,l1:`bestValue`,l2:`sqrt(bestValue)`,logSum:`log(bestValue)`},Hm=(e,t)=>{let n=[];for(let r=t-e;r<t;++r)n.push(r);return n},Um=(e,t)=>{let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]},Wm=(e,t)=>{let n=e.length+t.length,r=[],i=0;for(let a=0;a<n;a++)t.indexOf(a)===-1?r.push(e[i++]):r.push(1);return r},Gm=(e,t)=>{for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0},Km=(e,t)=>{let n=[];if(!Gm(e,t)){for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);e.forEach(e=>n.push(e))}return n},qm=(e,t,n,r,i,a,o)=>{let s=n[0].dims,c=G.size(a),l=G.size(o),u=J(`_A`,n[0].dataType,s),d=Y(`output`,i,a),f=64;c===1&&(f=256);let p=`
          var<workgroup> aBestValues : array<f32, ${f}>;
       `;return{name:e,shaderCache:{hint:`${t};${f}`,inputDependencies:[`type`]},getShaderSource:e=>`
        ${e.registerUniform(`reduceSize`,`u32`).declareVariables(u,d)}
        ${p}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${e.mainStart(f)}

          let outputIndex = global_idx / ${f};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Bm[r]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${f}) {
           let candidate = f32(${u.getByOffset(`offset + k`)});
           bestValue = ${Rm[r]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${f}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${zm[r]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${d.setByOffset(`outputIndex`,`${r===`mean`?`${d.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${d.type.storage}(${Vm[r]})`}`)};
         }
        }`,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:c},programUniforms:[{type:12,data:l}]})}},Jm=(e,t,n,r)=>{let i=e.inputs.length===1?n:lh(e.inputs,n),a=i.axes;a.length===0&&!i.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((e,t)=>t));let o=G.normalizeAxes(a,e.inputs[0].dims.length),s=o,c=e.inputs[0],l=Km(s,e.inputs[0].dims.length);l.length>0&&(c=e.compute(Pm(e.inputs[0],l),{inputs:[0],outputs:[-1]})[0],s=Hm(s.length,c.dims.length));let[u,d]=Um(c.dims,s),f=u;i.keepDims&&(f=Wm(u,o)),e.compute(qm(t,i.cacheKey,[c],r,e.inputs[0].dataType,f,d),{inputs:[c]})},Ym=(e,t)=>{Jm(e,`ReduceMeanShared`,t,`mean`)},Xm=(e,t)=>{Jm(e,`ReduceL1Shared`,t,`l1`)},Zm=(e,t)=>{Jm(e,`ReduceL2Shared`,t,`l2`)},Qm=(e,t)=>{Jm(e,`ReduceLogSumExpShared`,t,`logSumExp`)},$m=(e,t)=>{Jm(e,`ReduceMaxShared`,t,`max`)},eh=(e,t)=>{Jm(e,`ReduceMinShared`,t,`min`)},th=(e,t)=>{Jm(e,`ReduceProdShared`,t,`prod`)},nh=(e,t)=>{Jm(e,`ReduceSumShared`,t,`sum`)},rh=(e,t)=>{Jm(e,`ReduceSumSquareShared`,t,`sumSquare`)},ih=(e,t)=>{Jm(e,`ReduceLogSumShared`,t,`logSum`)}}),Mh=U(()=>{"use strict";W(),pm(),om(),Dm(),ah(),oh=e=>{if(!e||e.length===0||e.length>2)throw Error(`Reduce op requires 1 or 2 inputs.`);if(e.length===2&&e[1].dims.length!==1)throw Error(`Invalid axes input dims.`)},sh=e=>[``,``,`var value = ${e.getByIndices(`input_indices`)};`,``],ch=(e,t,n,r,i,a,o=!1,s=!1)=>{let c=[],l=n[0].dims,u=l.length,d=G.normalizeAxes(i,u),f=!s&&d.length===0;l.forEach((e,t)=>{f||d.indexOf(t)>=0?o&&c.push(1):c.push(e)});let p=c.length,m=G.size(c);return{name:e,shaderCache:t,getShaderSource:e=>{let t=[],i=J(`_A`,n[0].dataType,u),s=Y(`output`,a,p),c=r(i,s,d),m=c[2];for(let e=0,n=0;e<u;e++)f||d.indexOf(e)>=0?(o&&n++,m=`for(var j${e}: u32 = 0; j${e} < ${l[e]}; j${e}++) {
                  ${c[2].includes(`last_index`)?`let last_index = j${e};`:``}
                  ${i.indicesSet(`input_indices`,e,`j${e}`)}
                  ${m}
                }`):(t.push(`${i.indicesSet(`input_indices`,e,s.indicesGet(`output_indices`,n))};`),n++);return`

        ${e.registerUniform(`output_size`,`u32`).declareVariables(i,s)}

        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          var input_indices: ${i.type.indices};
          let output_indices = ${s.offsetToIndices(`global_idx`)};

          ${t.join(`
`)}
          ${c[0]}       // init ops for reduce max/min
          ${c[1]}
          ${m}
          ${c[3]}
          ${c.length===4?s.setByOffset(`global_idx`,`value`):c.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:c,dataType:a}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:[{type:12,data:m},...K(l,c)]})}},lh=(e,t)=>{let n=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),am({axes:n,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},uh=(e,t,n,r)=>{let i=e.inputs,a=i.length===1?n:lh(i,n);e.compute(ch(t,{hint:a.cacheKey,inputDependencies:[`rank`]},[i[0]],a.noopWithEmptyAxes&&a.axes.length===0?sh:r,a.axes,i[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},dh=(e,t)=>{oh(e.inputs),uh(e,`ReduceLogSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,`value = log(value);`])},fh=(e,t)=>{oh(e.inputs),uh(e,`ReduceL1`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += abs(${e.getByIndices(`input_indices`)});`,``])},ph=(e,t)=>{oh(e.inputs),uh(e,`ReduceL2`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += (t * t);`,`value = sqrt(value);`])},mh=(e,t)=>{oh(e.inputs),uh(e,`ReduceLogSumExp`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += exp(${e.getByIndices(`input_indices`)});`,`value = log(value);`])},hh=(e,t)=>{oh(e.inputs),uh(e,`ReduceMax`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(e.indicesSet(`input_indices`,t,0));return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = max(value, ${e.getByIndices(`input_indices`)});`,``]})},gh=(e,t)=>{oh(e.inputs),uh(e,`ReduceMean`,t,(t,n,r)=>{let i=1;for(let n=0;n<t.rank;n++)(r.indexOf(n)>=0||r.length===0)&&(i*=e.inputs[0].dims[n]);return[`var sum = f32(0);`,``,`sum += f32(${t.getByIndices(`input_indices`)});`,`let value = ${n.type.value}(sum / ${i});`]})},_h=(e,t)=>{oh(e.inputs),uh(e,`ReduceMin`,t,(e,t,n)=>{let r=[];for(let t=0;t<e.rank;t++)(n.indexOf(t)>=0||n.length===0)&&r.push(`input_indices[${t}] = 0;`);return[`${r.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};`,`value = min(value, ${e.getByIndices(`input_indices`)});`,``]})},vh=(e,t)=>{oh(e.inputs),uh(e,`ReduceProd`,t,(e,t)=>[`var value = ${t.type.storage}(1);`,``,`value *= ${e.getByIndices(`input_indices`)};`,``])},yh=(e,t)=>{oh(e.inputs),uh(e,`ReduceSum`,t,(e,t)=>[`var value = ${t.type.storage}(0);`,``,`value += ${e.getByIndices(`input_indices`)};`,``])},bh=(e,t)=>{oh(e.inputs),uh(e,`ReduceSumSquare`,t,(e,t)=>[`var t = ${t.type.value}(0); var value = ${t.type.value}(0);`,``,`t = ${e.getByIndices(`input_indices`)}; value += t * t;`,``])},xh=(e,t,n)=>{if(t.length===0)return n;let r=1,i=1;for(let n=0;n<t.length;n++)t.indexOf(n)===-1?r*=e[n]:i*=e[n];return i<32&&r>1024},Sh=(e,t)=>{xh(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gh(e,t):Ym(e,t)},Ch=(e,t)=>{xh(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fh(e,t):Xm(e,t)},wh=(e,t)=>{xh(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ph(e,t):Zm(e,t)},Th=(e,t)=>{xh(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mh(e,t):Qm(e,t)},Eh=(e,t)=>{xh(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hh(e,t):$m(e,t)},Dh=(e,t)=>{xh(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?_h(e,t):eh(e,t)},Oh=(e,t)=>{xh(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?vh(e,t):th(e,t)},kh=(e,t)=>{xh(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yh(e,t):nh(e,t)},Ah=(e,t)=>{xh(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?bh(e,t):rh(e,t)},jh=(e,t)=>{xh(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?dh(e,t):ih(e,t)}}),Lh=U(()=>{"use strict";W(),om(),Mh(),Nh=e=>{if(!e||e.length===0||e.length>2)throw Error(`ArgMinMaxOp op requires 1 or 2 inputs.`);if(e[0].dataType!==1)throw Error(`Invalid input type.`)},Ph=(e,t)=>{Nh(e.inputs),e.compute(ch(`ArgMin`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`<=`:`<`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Fh=(e,t)=>{Nh(e.inputs),e.compute(ch(`argMax`,{hint:t.cacheKey,inputDependencies:[`rank`]},[e.inputs[0]],(e,n,r)=>{let i=[];for(let t=0;t<e.rank;t++)(r.indexOf(t)>=0||r.length===0)&&i.push(`input_indices[${t}] = 0;`);return[`${i.join(`
`)}`,`var value = ${e.getByIndices(`input_indices`)};
var best_index : i32 = 0;`,`if (${e.getByIndices(`input_indices`)} ${t.selectLastIndex>0?`>=`:`>`} value) {
         value = ${e.getByIndices(`input_indices`)};
         best_index = i32(last_index);
       }`,``,n.setByOffset(`global_idx`,`best_index`)]},[t.axis],7,t.keepDims),{inputs:[0]})},Ih=e=>am(e)}),Kh=U(()=>{"use strict";W(),pm(),qp(),Dm(),Rh=(e,t)=>{let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4],s=e[5];if(o&&s)throw Error(`Attention cannot have both past and attention_bias`);if(n.dims.length!==3)throw Error(`Input "input" must have 3 dimensions`);let c=n.dims[0],l=n.dims[1],u=n.dims[2];if(i.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimensions`);if(r.dims.length!==2)throw Error(`Input "weights" is expected to have 2 dimensions`);if(r.dims[0]!==u)throw Error(`Input 1 dimension 0 should have same length as dimension 2 of input 0`);if(i.dims[0]!==r.dims[1])throw Error(`Input "bias" dimension 0 should have same length as dimension 1 of input "weights"`);let d=i.dims[0]/3,f=d,p=f;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw Error(`qkv_hidden_sizes attribute should have 3 elements`);for(let e of t.qkvHiddenSizes)if(e%t.numHeads!==0)throw Error(`qkv_hidden_sizes should be divisible by num_heads`);d=t.qkvHiddenSizes[0],f=t.qkvHiddenSizes[1],p=t.qkvHiddenSizes[2]}let m=l;if(d!==f)throw Error(`qkv_hidden_sizes first element should be same as the second`);if(i.dims[0]!==d+f+p)throw Error(`Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes`);let h=0;if(o){if(f!==p)throw Error(`Input "past" expect k_hidden_size == v_hidden_size`);if(o.dims.length!==5)throw Error(`Input "past" must have 5 dimensions`);if(o.dims[0]!==2)throw Error(`Input "past" first dimension must be 2`);if(o.dims[1]!==c)throw Error(`Input "past" second dimension must be batch_size`);if(o.dims[2]!==t.numHeads)throw Error(`Input "past" third dimension must be num_heads`);if(o.dims[4]!==f/t.numHeads)throw Error(`Input "past" fifth dimension must be k_hidden_size / num_heads`);t.pastPresentShareBuffer||(h=o.dims[3])}let g=m+h;if(a)throw Error(`Mask not supported`);if(o)throw Error(`past is not supported`);if(s){if(s.dims.length!==4)throw Error(`Input "attention_bias" must have 4 dimensions`);if(s.dims[0]!==c||s.dims[1]!==t.numHeads||s.dims[2]!==l||s.dims[3]!==g)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:c,sequenceLength:l,pastSequenceLength:h,kvSequenceLength:m,totalSequenceLength:g,maxSequenceLength:-1,inputHiddenSize:u,hiddenSize:d,vHiddenSize:p,headSize:Math.floor(d/t.numHeads),vHeadSize:Math.floor(p/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},zh=(e,t,n)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset(`0`)});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset(`batchIdx`)}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${n?`let past_sequence_length = uniforms.past_sequence_length`:``};
    let present_sequence_length = total_sequence_length;
    `,Bh=(e,t,n,r,i,a,o,s)=>{let c=vm(o?1:a),l=64,u=a/c;u<l&&(l=32);let d=Math.ceil(a/c/l),f=[{type:12,data:t},{type:12,data:n},{type:12,data:r},{type:12,data:i},{type:12,data:u},{type:12,data:d}],p=gm(e.dataType,c),m=_m(1,c),h=[`type`];return o&&h.push(`type`),s&&h.push(`type`),{name:`AttentionProbsSoftmax`,shaderCache:{hint:`${l};${p};${c}`,inputDependencies:h},getShaderSource:t=>{let n=Y(`x`,e.dataType,e.dims,c),r=[n],i=o?J(`seq_lens`,o.dataType,o.dims):void 0;i&&r.push(i);let a=s?J(`total_sequence_length_input`,s.dataType,s.dims):void 0;a&&r.push(a);let u=_m(e.dataType);return`
  var<workgroup> thread_max: array<f32, ${l}>;
  var<workgroup> thread_sum: array<f32, ${l}>;
  ${t.registerUniforms([{name:`batch_size`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`sequence_length`,type:`u32`},{name:`total_sequence_length`,type:`u32`},{name:`elements_per_thread`,type:`u32`}]).declareVariables(...r)}
  ${t.mainStart([l,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${zh(i,a,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${l}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${o?`u32(past_sequence_length + workgroup_id.y + 1)`:`total_sequence_length`};
    var thread_max_vector = ${m}(-3.402823e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${m}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(c){case 1:return`thread_max_vector`;case 2:return`max(thread_max_vector.x, thread_max_vector.y)`;case 4:return`max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.402823e+38f);
    for (var i = 0u; i < ${l}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${m}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${m}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(c){case 1:return`sum_vector`;case 2:return`sum_vector.x + sum_vector.y`;case 4:return`sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w`;default:throw Error(`Unsupported components: ${c}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${l}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${n.type.value}(${u}(1.0) / ${u}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${m}(x[offset + i]);
        x[offset + i] = ${n.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${o?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${n.type.value}(${u}(0));
        }`:``};
  }`},getRunData:()=>({outputs:[],dispatchGroup:{x:Math.ceil(a/l),y:i,z:t*n},programUniforms:f})}},Vh=(e,t,n,r,i,a,o,s,c)=>{let l=o+a.kvSequenceLength,u=[a.batchSize,a.numHeads,a.sequenceLength,l],d=e>1&&r,f=a.kvNumHeads?a.kvNumHeads:a.numHeads,p=d?[a.batchSize,f,l,a.headSize]:void 0,m=a.nReps?a.nReps:1,h=a.scale===0?1/Math.sqrt(a.headSize):a.scale,g=vm(a.headSize),_=a.headSize/g,v={x:Math.ceil(l/12),y:Math.ceil(a.sequenceLength/12),z:a.batchSize*a.numHeads},y=[{type:12,data:a.sequenceLength},{type:12,data:_},{type:12,data:l},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:h},{type:12,data:o},{type:12,data:a.kvSequenceLength},{type:12,data:m}],b=d&&r&&G.size(r.dims)>0,x=[`type`,`type`];b&&x.push(`type`),i&&x.push(`type`),s&&x.push(`type`),c&&x.push(`type`);let S=[{dims:u,dataType:t.dataType,gpuDataType:0}];return d&&S.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionProbs`,shaderCache:{hint:`${g};${i!==void 0};${r!==void 0};${e}`,inputDependencies:x},getRunData:()=>({outputs:S,dispatchGroup:v,programUniforms:y}),getShaderSource:e=>{let a=J(`q`,t.dataType,t.dims,g),o=[a,J(`key`,n.dataType,n.dims,g)];if(b){let e=J(`past_key`,r.dataType,r.dims,g);o.push(e)}i&&o.push(J(`attention_bias`,i.dataType,i.dims));let l=s?J(`seq_lens`,s.dataType,s.dims):void 0;l&&o.push(l);let f=c?J(`total_sequence_length_input`,c.dataType,c.dims):void 0;f&&o.push(f);let h=Y(`output`,t.dataType,u),_=[h];d&&_.push(Y(`present_key`,t.dataType,p,g));let v=_m(1,g);return`
  const TILE_SIZE = 12u;

  var<workgroup> tileQ: array<${a.type.storage}, 144>;
  var<workgroup> tileK: array<${a.type.storage}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`alpha`,type:`f32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...o,..._)}
  ${e.mainStart([12,12,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${m===1?`headIdx`:`headIdx / uniforms.n_reps`};
    let kv_num_heads = ${m===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${zh(l,f,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${b&&d?`let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;`:``};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${d?`let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;`:``}
    var value = ${v}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${b&&d?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${d?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:``}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${v}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(g){case 1:return`value`;case 2:return`value.x + value.y`;case 4:return`value.x + value.y + value.z + value.w`;default:throw Error(`Unsupported components: ${g}`)}})()};
        output[outputIdx] = ${h.type.value} (sum * uniforms.alpha) + ${i?`attention_bias[outputIdx]`:`0.0`};
    }
  }`}}},Hh=(e,t,n,r,i,a,o=void 0,s=void 0)=>{let c=a+i.kvSequenceLength,l=i.nReps?i.nReps:1,u=i.vHiddenSize*l,d=e>1&&r,f=i.kvNumHeads?i.kvNumHeads:i.numHeads,p=d?[i.batchSize,f,c,i.headSize]:void 0,m=[i.batchSize,i.sequenceLength,u],h={x:Math.ceil(i.vHeadSize/12),y:Math.ceil(i.sequenceLength/12),z:i.batchSize*i.numHeads},g=[{type:12,data:i.sequenceLength},{type:12,data:c},{type:12,data:i.vHeadSize},{type:12,data:i.numHeads},{type:12,data:i.headSize},{type:12,data:u},{type:12,data:a},{type:12,data:i.kvSequenceLength},{type:12,data:l}],_=d&&r&&G.size(r.dims)>0,v=[`type`,`type`];_&&v.push(`type`),o&&v.push(`type`),s&&v.push(`type`);let y=[{dims:m,dataType:t.dataType,gpuDataType:0}];return d&&y.push({dims:p,dataType:t.dataType,gpuDataType:0}),{name:`AttentionScore`,shaderCache:{hint:`${r!==void 0};${e}`,inputDependencies:v},getRunData:()=>({outputs:y,dispatchGroup:h,programUniforms:g}),getShaderSource:e=>{let i=J(`probs`,t.dataType,t.dims),a=[i,J(`v`,n.dataType,n.dims)];_&&a.push(J(`past_value`,r.dataType,r.dims));let c=o?J(`seq_lens`,o.dataType,o.dims):void 0;o&&a.push(c);let u=s?J(`total_sequence_length_input`,s.dataType,s.dims):void 0;s&&a.push(u);let f=[Y(`output`,t.dataType,m)];return d&&f.push(Y(`present_value`,t.dataType,p)),`
  const TILE_SIZE = 12u;
  var<workgroup> tileQ: array<${i.type.value}, 144>;
  var<workgroup> tileV: array<${i.type.value}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`v_hidden_size`,type:`u32`},{name:`past_sequence_length`,type:`u32`},{name:`kv_sequence_length`,type:`u32`},{name:`n_reps`,type:`u32`}]).declareVariables(...a,...f)}
  ${e.mainStart([12,12,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${l===1?`headIdx`:`headIdx / uniforms.n_reps`};
   let kv_num_heads = ${l===1?`uniforms.num_heads`:`uniforms.num_heads / uniforms.n_reps`};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${zh(c,u,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${_&&d?`let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;`:``};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${d?`let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;`:``}
   var value = ${i.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${_&&d?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${d?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:``}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`}}},Uh=(e,t,n,r,i,a,o,s,c,l,u=void 0,d=void 0)=>{let f=Math.min(e.outputCount,1+ +!!o+ +!!s),p=f>1?l.pastSequenceLength:0,m=p+l.kvSequenceLength,h=c&&G.size(c.dims)>0?c:void 0,g=[t,n];f>1&&o&&G.size(o.dims)>0&&g.push(o),h&&g.push(h),u&&g.push(u),d&&g.push(d);let _=e.compute(Vh(f,t,n,o,h,l,p,u,d),{inputs:g,outputs:f>1?[-1,1]:[-1]})[0];e.compute(Bh(_,l.batchSize,l.numHeads,p,l.sequenceLength,m,u,d),{inputs:u&&d?[_,u,d]:[_],outputs:[]});let v=[_,r];f>1&&s&&G.size(s.dims)>0&&v.push(s),u&&v.push(u),d&&v.push(d),e.compute(Hh(f,_,r,s,l,p,u,d),{inputs:v,outputs:f>1?[0,2]:[0]})},Wh=(e,t)=>{let n=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],r=t.sequenceLength,i=t.inputHiddenSize,a=t.headSize,o={x:Math.ceil(t.headSize/12),y:Math.ceil(t.sequenceLength/12),z:t.batchSize*t.numHeads},s=[e.inputs[0],e.inputs[1],e.inputs[2]],c=[{type:12,data:r},{type:12,data:i},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}];return e.compute({name:`AttentionPrepare`,shaderCache:{inputDependencies:[`type`,`type`,`type`]},getRunData:()=>({outputs:[{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:n,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:o,programUniforms:c}),getShaderSource:e=>{let t=Y(`output_q`,s[0].dataType,n),r=Y(`output_k`,s[0].dataType,n),i=Y(`output_v`,s[0].dataType,n),a=J(`input`,s[0].dataType,s[0].dims),o=J(`weight`,s[1].dataType,s[1].dims),c=J(`bias`,s[2].dataType,s[2].dims),l=a.type.storage;return`
  const TILE_SIZE = 12u;
  var<workgroup> tileInput: array<${l}, 144>;
  var<workgroup> tileWeightQ: array<${l}, 144>;
  var<workgroup> tileWeightK: array<${l}, 144>;
  var<workgroup> tileWeightV: array<${l}, 144>;
  ${e.registerUniforms([{name:`M`,type:`u32`},{name:`K`,type:`u32`},{name:`N`,type:`u32`},{name:`num_heads`,type:`u32`},{name:`head_size`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`ldb`,type:`u32`}]).declareVariables(a,o,c,t,r,i)}
  ${e.mainStart([12,12,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${l}(0);
    var valueK = ${l}(0);
    var valueV = ${l}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`}},{inputs:s,outputs:[-1,-1,-1]})},Gh=(e,t)=>{let n=Rh(e.inputs,t),[r,i,a]=Wh(e,n);return Uh(e,r,i,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],n)}}),Zh=U(()=>{"use strict";Nf(),W(),pm(),om(),Dm(),qh=(e,t)=>{if(!e||e.length!==5)throw Error(`BatchNormalization requires 5 inputs`);let n=(e,t,n)=>{let r=t.length;if(r!==e.length)throw Error(`${n}: num dimensions != ${r}`);t.forEach((t,r)=>{if(t!==e[r])throw Error(`${n}: dim[${r}] do not match`)})};if(e[0].dims.length>1){let r=t.format===`NHWC`?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);n(e[1].dims,r,`Invalid input scale`),n(e[2].dims,r,`Invalid input B`),n(e[3].dims,r,`Invalid input mean`),n(e[4].dims,r,`Invalid input var`)}else n(e[1].dims,[1],`Invalid input scale`),n(e[2].dims,[1],`Invalid input B`),n(e[3].dims,[1],`Invalid input mean`),n(e[4].dims,[1],`Invalid input var`)},Jh=(e,t)=>{let{epsilon:n,spatial:r,format:i}=t,a=e[0].dims,o=r?vm(a[a.length-1]):1,s=i===`NHWC`&&a.length>1?o:1,c=G.size(a)/o,l=r,u=l?a.length:a,d=J(`x`,e[0].dataType,e[0].dims,o),f=J(`scale`,e[1].dataType,e[1].dims,s),p=J(`bias`,e[2].dataType,e[2].dims,s),m=J(`inputMean`,e[3].dataType,e[3].dims,s),h=J(`inputVar`,e[4].dataType,e[4].dims,s),g=Y(`y`,e[0].dataType,u,o),_=()=>{let e=``;if(r)e=`let cOffset = ${a.length===1?`0u`:i===`NHWC`?`outputIndices[${a.length-1}] / ${o}`:`outputIndices[1]`};`;else if(i===`NCHW`)e=`
            ${g.indicesSet(`outputIndices`,`0`,`0`)}
            let cOffset = ${g.indicesToOffset(`outputIndices`)};`;else{e=`var cIndices = ${f.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let t=1;t<f.rank;t++)e+=`cIndices[${t}] = outputIndices[${t}];`;e+=`let cOffset = ${f.indicesToOffset(`cIndices`)};`}return e};return{name:`BatchNormalization`,shaderCache:{hint:`${t.epsilon}_${t.format}_${r}_${o}`,inputDependencies:l?[`rank`,`type`,`type`,`type`,`type`]:void 0},getShaderSource:e=>`
  const epsilon = ${n};
  ${e.registerUniform(`outputSize`,`u32`).declareVariables(d,f,p,m,h,g)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
    var outputIndices = ${g.offsetToIndices(`global_idx * ${o}`)};
    ${_()}
    let scale = ${f.getByOffset(`cOffset`)};
    let bias = ${p.getByOffset(`cOffset`)};
    let inputMean = ${m.getByOffset(`cOffset`)};
    let inputVar = ${h.getByOffset(`cOffset`)};
    let x = ${d.getByOffset(`global_idx`)};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${g.setByOffset(`global_idx`,`value`)}
  }`,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l?[{type:12,data:c},...K(a)]:[{type:12,data:c}]})}},Yh=e=>am(e),Xh=(e,t)=>{let{inputs:n,outputCount:r}=e,i=Yh({...t,outputCount:r});if(Jd.webgpu.validateInputContent&&qh(n,i),t.trainingMode)throw Error(`BatchNormalization trainingMode is not supported yet.`);e.compute(Jh(n,i))}}),tg=U(()=>{"use strict";pm(),Dm(),Qh=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![320,640,1280].includes(e[0].dims[2]))throw Error(`number of channels should be 320, 640 or 1280`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},$h=e=>{let t=e[0].dims,n=e[0].dims[2],r=G.size(t)/4,i=e[0].dataType,a=J(`input`,i,t,4),o=J(`bias`,i,[n],4),s=J(`residual`,i,t,4),c=Y(`output`,i,t,4);return{name:`BiasAdd`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(r/64)}}),getShaderSource:e=>`
  const channels = ${n}u / 4;
  ${e.declareVariables(a,o,s,c)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(r)}
    let value = ${a.getByOffset(`global_idx`)}
      + ${o.getByOffset(`global_idx % channels`)} + ${s.getByOffset(`global_idx`)};
    ${c.setByOffset(`global_idx`,`value`)}
  }`}},eg=e=>{Qh(e.inputs),e.compute($h(e.inputs))}}),qg=U(()=>{"use strict";W(),pm(),om(),Dm(),ng=(e,t,n,r,i,a,o)=>{let s=Math.ceil(t/4),c=``;c=typeof i==`string`?`${i}(a)`:i(`a`);let l=J(`inputData`,n,[s],4),u=Y(`outputData`,r,[s],4),d=[{name:`vec_size`,type:`u32`}];return o&&d.push(...o),`
      ${e.registerUniforms(d).declareVariables(l,u)}

  ${a??``}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}

    let a = ${l.getByOffset(`global_idx`)};
    ${u.setByOffset(`global_idx`,c)}
  }`},rg=(e,t,n,r,i,a=e.dataType,o,s)=>{let c=[{type:12,data:Math.ceil(G.size(e.dims)/4)}];return o&&c.push(...o),{name:t,shaderCache:{hint:i,inputDependencies:[`type`]},getShaderSource:t=>ng(t,G.size(e.dims),e.dataType,a,n,r,s),getRunData:t=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(G.size(t[0].dims)/64/4)},programUniforms:c})}},ig=e=>{e.compute(rg(e.inputs[0],`Abs`,`abs`))},ag=e=>{e.compute(rg(e.inputs[0],`Acos`,`acos`))},og=e=>{e.compute(rg(e.inputs[0],`Acosh`,`acosh`))},sg=e=>{e.compute(rg(e.inputs[0],`Asin`,`asin`))},cg=e=>{e.compute(rg(e.inputs[0],`Asinh`,`asinh`))},lg=e=>{e.compute(rg(e.inputs[0],`Atan`,`atan`))},ug=e=>{e.compute(rg(e.inputs[0],`Atanh`,`atanh`))},dg=e=>am(e),fg=(e,t)=>{let n;switch(t.to){case 10:n=`vec4<f16>`;break;case 1:n=`vec4<f32>`;break;case 12:n=`vec4<u32>`;break;case 6:n=`vec4<i32>`;break;case 9:n=`vec4<bool>`;break;default:throw RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(rg(e.inputs[0],`Cast`,n,void 0,t.cacheKey,t.to))},pg=e=>{let t,n,r=e.length>=2&&e[1].data!==0,i=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=r?e[1].getFloat32Array()[0]:-34028234663852886e22,n=i?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=r?e[1].getUint16Array()[0]:64511,n=i?e[2].getUint16Array()[0]:31743;break;default:throw Error(`Unsupport data type`)}return am({min:t,max:n})},mg=(e,t)=>{let n=t||pg(e.inputs),r=_m(e.inputs[0].dataType);e.compute(rg(e.inputs[0],`Clip`,e=>`clamp(${e}, vec4<${r}>(uniforms.min), vec4<${r}>(uniforms.max))`,void 0,n.cacheKey,void 0,[{type:e.inputs[0].dataType,data:n.min},{type:e.inputs[0].dataType,data:n.max}],[{name:`min`,type:r},{name:`max`,type:r}]),{inputs:[0]})},hg=e=>{e.compute(rg(e.inputs[0],`Ceil`,`ceil`))},gg=e=>{e.compute(rg(e.inputs[0],`Cos`,`cos`))},_g=e=>{e.compute(rg(e.inputs[0],`Cosh`,`cosh`))},vg=e=>am(e),yg=(e,t)=>{let n=_m(e.inputs[0].dataType);e.compute(rg(e.inputs[0],`Elu`,e=>`elu_vf32(${e})`,`
  const elu_alpha_ = ${n}(${t.alpha});

  fn elu_f32(a: ${n}) -> ${n} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${n}>) -> vec4<${n}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},bg=(e=`f32`)=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,xg=e=>{let t=_m(e.inputs[0].dataType);e.compute(rg(e.inputs[0],`Erf`,e=>`erf_vf32(${e})`,bg(t)))},Sg=e=>{e.compute(rg(e.inputs[0],`Exp`,`exp`))},Cg=e=>{e.compute(rg(e.inputs[0],`Floor`,`floor`))},wg=e=>{let t=_m(e.inputs[0].dataType);e.compute(rg(e.inputs[0],`Gelu`,e=>`0.5 * ${e} * (1.0 + erf_vf32(${e} * 0.7071067811865475))`,bg(t)))},Tg=(e,t)=>{let n=_m(e.inputs[0].dataType);e.compute(rg(e.inputs[0],`LeakyRelu`,e=>`select(leaky_relu_alpha_ * ${e}, ${e}, ${e} >= vec4<${n}>(0.0))`,`const leaky_relu_alpha_ = ${n}(${t.alpha});`,t.cacheKey))},Eg=e=>{e.compute(rg(e.inputs[0],`Not`,e=>`!${e}`))},Dg=e=>{e.compute(rg(e.inputs[0],`Neg`,e=>`-${e}`))},Og=e=>{e.compute(rg(e.inputs[0],`Reciprocal`,e=>`1.0/${e}`))},kg=e=>{let t=_m(e.inputs[0].dataType);e.compute(rg(e.inputs[0],`Relu`,e=>`select(vec4<${t}>(0.0), ${e}, ${e} > vec4<${t}>(0.0))`))},Ag=e=>{e.compute(rg(e.inputs[0],`Sigmoid`,e=>`(1.0 / (1.0 + exp(-${e})))`))},jg=e=>am(e),Mg=(e,t)=>{let n=_m(e.inputs[0].dataType);e.compute(rg(e.inputs[0],`HardSigmoid`,e=>`max(vec4<${n}>(0.0), min(vec4<${n}>(1.0), ${t.alpha} * ${e} + vec4<${n}>(${t.beta})))`,void 0,t.cacheKey))},Ng=e=>{e.compute(rg(e.inputs[0],`Sin`,`sin`))},Pg=e=>{e.compute(rg(e.inputs[0],`Sinh`,`sinh`))},Fg=e=>{e.compute(rg(e.inputs[0],`Sqrt`,`sqrt`))},Ig=e=>{e.compute(rg(e.inputs[0],`Tan`,`tan`))},Lg=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,Rg=e=>{e.compute(rg(e.inputs[0],`Tanh`,Lg))},zg=(e=`f32`)=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Lg(`v`)};
}
`,Bg=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,Vg=e=>{let t=_m(e.inputs[0].dataType);e.compute(rg(e.inputs[0],`FastGelu`,Bg,zg(t),void 0,e.inputs[0].dataType))},Hg=(e,t)=>{let n=_m(e.inputs[0].dataType);return e.compute(rg(e.inputs[0],`ThresholdedRelu`,e=>`select(vec4<${n}>(0.0), ${e}, ${e} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${n}>(${t.alpha});`,t.cacheKey)),0},Ug=e=>{e.compute(rg(e.inputs[0],`Log`,`log`))},Wg=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,Gg=e=>`quick_gelu_impl(${e})`,Kg=(e,t)=>{let n=_m(e.inputs[0].dataType);e.compute(rg(e.inputs[0],`QuickGelu`,Gg,Wg(n,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Zg=U(()=>{"use strict";pm(),Dm(),qg(),Jg=e=>{if(e[0].dims.length!==3)throw Error(`input should have 3 dimensions`);if(![2560,5120,10240].includes(e[0].dims[2]))throw Error(`hidden state should be 2560, 5120 or 10240`);if(e[1].dims.length!==1)throw Error(`bias is expected to have 1 dimensions`);if(e[0].dims[2]!==e[1].dims[0])throw Error(`last dimension of input and bias are not the same`)},Yg=e=>{let t=e[0].dims.slice();t[2]/=2;let n=J(`input`,e[0].dataType,e[0].dims,4),r=J(`bias`,e[0].dataType,[e[0].dims[2]],4),i=Y(`output`,e[0].dataType,t,4),a=G.size(t)/4,o=gm(e[0].dataType);return{name:`BiasSplitGelu`,getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:t=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${t.declareVariables(n,r,i)}

  ${bg(o)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${i.setByOffset(`global_idx`,`valueLeft * geluRight`)}
  }`}},Xg=e=>{Jg(e.inputs),e.compute(Yg(e.inputs))}}),d_=U(()=>{"use strict";W(),pm(),Dm(),Qg=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f,p;typeof s==`string`?f=p=(e,t)=>`${s}((${e}),(${t}))`:typeof s==`function`?f=p=s:(f=s.scalar,p=s.vector);let m=Y(`outputData`,u,r.length,4),h=J(`aData`,c,t.length,4),g=J(`bData`,l,n.length,4),_;if(i)if(a){let e=G.size(t)===1,r=G.size(n)===1,i=t.length>0&&t[t.length-1]%4==0,a=n.length>0&&n[n.length-1]%4==0;_=e||r?m.setByOffset(`global_idx`,p(e?`${h.type.value}(${h.getByOffset(`0`)}.x)`:h.getByOffset(`global_idx`),r?`${g.type.value}(${g.getByOffset(`0`)}.x)`:g.getByOffset(`global_idx`))):`
            let outputIndices = ${m.offsetToIndices(`global_idx * 4u`)};
            let offsetA = ${h.broadcastedIndicesToOffset(`outputIndices`,m)};
            let offsetB = ${g.broadcastedIndicesToOffset(`outputIndices`,m)};
            ${m.setByOffset(`global_idx`,p(o||i?h.getByOffset(`offsetA / 4u`):`${h.type.value}(${h.getByOffset(`offsetA / 4u`)}[offsetA % 4u])`,o||a?g.getByOffset(`offsetB / 4u`):`${g.type.value}(${g.getByOffset(`offsetB / 4u`)}[offsetB % 4u])`))}
          `}else _=m.setByOffset(`global_idx`,p(h.getByOffset(`global_idx`),g.getByOffset(`global_idx`)));else{if(!a)throw Error(`no necessary to use scalar implementation for element-wise binary op implementation.`);let e=(e,t,n=``)=>{let r=`aData[indexA${t}][componentA${t}]`,i=`bData[indexB${t}][componentB${t}]`;return`
            let outputIndices${t} = ${m.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offsetA${t} = ${h.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let offsetB${t} = ${g.broadcastedIndicesToOffset(`outputIndices${t}`,m)};
            let indexA${t} = offsetA${t} / 4u;
            let indexB${t} = offsetB${t} / 4u;
            let componentA${t} = offsetA${t} % 4u;
            let componentB${t} = offsetB${t} % 4u;
            ${e}[${t}] = ${n}(${f(r,i)});
          `};_=u===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`outputData[global_idx]`,0)}
            ${e(`outputData[global_idx]`,1)}
            ${e(`outputData[global_idx]`,2)}
            ${e(`outputData[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(h,g,m)}

        ${d??``}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${_}
      }`},$g=(e,t,n,r,i,a,o=n.dataType)=>{let s=n.dims.map(e=>Number(e)??1),c=r.dims.map(e=>Number(e)??1),l=!G.areEqual(s,c),u=s,d=G.size(s),f=!1,p=!1,m=[l];if(l){let e=cm.calcShape(s,c,!1);if(!e)throw Error(`Can't perform binary op on the given tensors`);u=e.slice(),d=G.size(u);let t=G.size(s)===1,n=G.size(c)===1,r=s.length>0&&s[s.length-1]%4==0,i=c.length>0&&c[c.length-1]%4==0;m.push(t),m.push(n),m.push(r),m.push(i);let a=1;for(let e=1;e<u.length;e++){let t=s[s.length-e];if(t===c[c.length-e])a*=t;else break}a%4==0?(p=!0,f=!0):(t||n||r||i)&&(f=!0)}else f=!0;return m.push(f),{name:e,shaderCache:{hint:t+m.map(e=>e.toString()).join(`_`),inputDependencies:[`rank`,`rank`]},getShaderSource:e=>Qg(e,s,c,u,f,l,p,i,n.dataType,r.dataType,o,a),getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:Math.ceil(d/64/4)},programUniforms:[{type:12,data:Math.ceil(G.size(u)/4)},...K(s,c,u)]})}},e_=(e,t,n,r,i,a)=>{e.compute($g(t,i??``,e.inputs[0],e.inputs[1],n,r,a))},t_=e=>{e_(e,`Add`,(e,t)=>`${e}+${t}`)},n_=e=>{e_(e,`Div`,(e,t)=>`${e}/${t}`)},r_=e=>{e_(e,`Equal`,{scalar:(e,t)=>`u32(${e}==${t})`,vector:(e,t)=>`vec4<u32>(${e}==${t})`},void 0,void 0,9)},i_=e=>{e_(e,`Mul`,(e,t)=>`${e}*${t}`)},a_=e=>{let t=J(`input`,e.inputs[0].dataType,e.inputs[0].dims).type.value;e_(e,`Pow`,{scalar:(e,t)=>`pow_custom(${e},${t})`,vector:(e,t)=>`pow_vector_custom(${e},${t})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t===`i32`?`round`:``}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},o_=e=>{e_(e,`Sub`,(e,t)=>`${e}-${t}`)},s_=e=>{e_(e,`Greater`,{scalar:(e,t)=>`u32(${e}>${t})`,vector:(e,t)=>`vec4<u32>(${e}>${t})`},void 0,void 0,9)},c_=e=>{e_(e,`Less`,{scalar:(e,t)=>`u32(${e}<${t})`,vector:(e,t)=>`vec4<u32>(${e}<${t})`},void 0,void 0,9)},l_=e=>{e_(e,`GreaterOrEqual`,{scalar:(e,t)=>`u32(${e}>=${t})`,vector:(e,t)=>`vec4<u32>(${e}>=${t})`},void 0,void 0,9)},u_=e=>{e_(e,`LessOrEqual`,{scalar:(e,t)=>`u32(${e}<=${t})`,vector:(e,t)=>`vec4<u32>(${e}<=${t})`},void 0,void 0,9)}}),v_=U(()=>{"use strict";W(),pm(),om(),Dm(),f_=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);let n=e[0],r=n.dataType,i=n.dims.length;e.forEach((e,a)=>{if(a!==0){if(e.dataType!==r)throw Error(`input tensors should be one type`);if(e.dims.length!==i)throw Error(`input tensors should have the same shape`);e.dims.forEach((e,r)=>{if(r!==t&&e!==n.dims[r])throw Error(`non concat dimensions must match`)})}})},p_=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,m_=(e,t)=>{let n=e.length,r=[];for(let i=0;i<n;++i){let a=t.setByOffset(`global_idx`,e[i].getByIndices(`indices`));n===1?r.push(a):i===0?r.push(`if (inputIndex == ${i}u) { ${a} }`):i===n-1?r.push(`else { ${a} }`):r.push(`else if (inputIndex == ${i}) { ${a} }`)}return r.join(`
`)},h_=(e,t,n,r)=>{let i=G.size(n),a=Array(e.length),o=Array(e.length),s=0,c=[],l=[],u=[{type:12,data:i}];for(let n=0;n<e.length;++n)s+=e[n].dims[t],a[n]=s,l.push(e[n].dims.length),o[n]=J(`input${n}`,r,l[n]),c.push(`rank`),u.push({type:12,data:a[n]});for(let t=0;t<e.length;++t)u.push(...K(e[t].dims));u.push(...K(n));let d=Y(`output`,r,n.length),f=d.indicesGet(`indices`,t),p=Array.from(Array(a.length).keys()).map(e=>`uniforms.sizeInConcatAxis${e}`).join(`,`);return{name:`Concat`,shaderCache:{hint:`${t}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:n,dataType:r}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:u}),getShaderSource:t=>`

  ${(()=>{t.registerUniform(`outputSize`,`u32`);for(let n=0;n<e.length;n++)t.registerUniform(`sizeInConcatAxis${n}`,`u32`);return t.declareVariables(...o,d)})()}

  ${p_(a.length,p)}

  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

    var indices = ${d.offsetToIndices(`global_idx`)};

    let inputIndex = calculateInputIndex(${f});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${p});
      ${f} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${m_(o,d)}
  }`}},g_=(e,t)=>{let n=e.inputs,r=n[0].dims,i=G.normalizeAxis(t.axis,r.length);f_(n,i);let a=r.slice();a[i]=n.reduce((e,t)=>e+(t.dims.length>i?t.dims[i]:0),0);let o=n.filter(e=>G.size(e.dims)>0);e.compute(h_(o,i,a,n[0].dataType),{inputs:o})},__=e=>am({axis:e.axis})}),C_=U(()=>{"use strict";W(),pm(),y_=(e,t,n=`f32`)=>{switch(e.activation){case`Relu`:return`value = max(value, ${t}(0.0));`;case`Sigmoid`:return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case`Clip`:return`value = clamp(value, ${t}(${n}(uniforms.clip_min)), ${t}(${n}(uniforms.clip_max)));`;case`HardSigmoid`:return`value = max(${t}(0.0), min(${t}(1.0), ${n}(uniforms.alpha) * value + ${n}(uniforms.beta)));`;case`LeakyRelu`:return`value = select(${n}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case`Tanh`:return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case``:return``;default:throw Error(`Unsupported activation ${e.activation}`)}},b_=(e,t)=>{e.activation===`Clip`?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation===`HardSigmoid`?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation===`LeakyRelu`&&t.push({type:1,data:e.alpha})},x_=(e,t)=>{e.activation===`Clip`?t.push({name:`clip_max`,type:`f32`},{name:`clip_min`,type:`f32`}):e.activation===`HardSigmoid`?t.push({name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}):e.activation===`LeakyRelu`&&t.push({name:`alpha`,type:`f32`})},S_=e=>{let t=e?.activation||``;if(t===`HardSigmoid`){let[n,r]=e?.activation_params||[.2,.5];return{activation:t,alpha:n,beta:r}}else if(t===`Clip`){let[n,r]=e?.activation_params||[dm,fm];return{activation:t,clipMax:r,clipMin:n}}else if(t===`LeakyRelu`){let[n]=e?.activation_params||[.01];return{activation:t,alpha:n}}return{activation:t}}}),E_=U(()=>{"use strict";w_=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw Error(`${e}-component is not supported.`)}},T_=e=>`
      ${e?`value = value + getBiasByOutputCoords(coords);`:``}
      `}),O_=U(()=>{"use strict";D_=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),j_=U(()=>{"use strict";W(),pm(),Dm(),C_(),k_=(e,t,n,r,i)=>{let a=r-n;return`
      ${Array.from({length:n}).map((n,o)=>`
      if (${q(t.shape,o,t.rank)} != 1) {
        ${t.indicesSet(e,o,q(i,o+a,r))}
      } else {
        ${t.indicesSet(e,o,0)}
      }`).join(``)}
`},A_=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o[o.length-2],l=s[s.length-1],u=o[o.length-1],d=vm(l),f=vm(u),p=vm(c),m=G.size(n)/d/p,h=e.length>2,g=r?r.slice(0,-2):n.slice(0,-2),_=[G.size(g),c,l],v=[{type:12,data:m},{type:12,data:c},{type:12,data:l},{type:12,data:u}];return b_(t,v),v.push(...K(g,o,s)),h&&v.push(...K(e[2].dims)),v.push(...K(_)),{name:`MatMulNaive`,shaderCache:{hint:`${t.activation};${d};${f};${p};${i}`,inputDependencies:h?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:v}),getShaderSource:r=>{let a=wm(`batch_dims`,e[0].dataType,g.length),c=J(`a`,e[0].dataType,o.length,f),l=J(`b`,e[1].dataType,s.length,d),u=Y(`output`,e[0].dataType,_.length,d),m=gm(u.type.tensor),v=y_(t,u.type.value,m),y=[c,l],b=``;if(h){let t=i?d:1;y.push(J(`bias`,e[2].dataType,e[2].dims.length,t)),b=`${i?`value += bias[col / ${t}];`:`value += ${u.type.value}(bias[row + i]);`}`}let x=[{name:`output_size`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`}];x_(t,x);let S=()=>{let e=`var a_data: ${c.type.value};`;for(let t=0;t<f;t++)e+=`
              let b_data${t} = b[(b_offset + (k + ${t}) * uniforms.N + col) / ${d}];`;for(let t=0;t<p;t++){e+=`a_data = a[(a_offset + (row + ${t}) * uniforms.K + k) / ${f}];`;for(let n=0;n<f;n++)e+=`
            values[${t}] = fma(${l.type.value}(a_data${f===1?``:`[${n}]`}), b_data${n}, values[${t}]);
`}return e};return`
  ${r.registerUniforms(x).registerInternalVariables(a).declareVariables(...y,u)}
  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let col = (global_idx % (uniforms.N / ${d})) * ${d};
    var index1 = global_idx / (uniforms.N / ${d});
    let stride1 = uniforms.M / ${p};
    let row = (index1 % stride1) * ${p};
    let batch = index1 / stride1;

    ${n.length===2?``:`let batch_indices = ${a.offsetToIndices(`batch`)};`}

    var a_indices: ${c.type.indices};
    ${k_(`a_indices`,c,c.rank-2,a.rank,`batch_indices`)}
    ${c.indicesSet(`a_indices`,c.rank-2,0)}
    ${c.indicesSet(`a_indices`,c.rank-1,0)}
    let a_offset = ${c.indicesToOffset(`a_indices`)};

    var b_indices: ${l.type.indices};
    ${k_(`b_indices`,l,l.rank-2,a.rank,`batch_indices`)}
    ${l.indicesSet(`b_indices`,l.rank-2,0)}
    ${l.indicesSet(`b_indices`,l.rank-1,0)}
    let b_offset = ${l.indicesToOffset(`b_indices`)};
    var values: array<${u.type.value}, ${p}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${f}) {
      ${S()}
    }
    for (var i = 0u; i < ${p}u; i++) {
      var value = values[i];
      ${b}
      ${v}
      let cur_indices = ${u.type.indices}(batch, row + i, col);
      let offset = ${u.indicesToOffset(`cur_indices`)};
      ${u.setByOffset(`offset / ${d}`,`value`)};
    }
  }
  `}}}}),B_=U(()=>{"use strict";W(),pm(),Dm(),C_(),j_(),E_(),M_=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?`, batchIndices`:``});
        `,N_=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?``:`let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];`}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached3[i] + acc[i];`}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?``:`acc[i] = BCached3 * ACached.w + acc[i];`}
        }`,P_=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32)=>{let c=t[1]*e[1],l=t[0]*e[0],u=i?c:a,d=i?a:c,f=u/t[0],p=a/t[1];if(!((i&&f===4&&e[1]===4||!i&&(f===3||f===4))&&u%t[0]===0&&a%t[1]===0&&e[0]===4))throw Error(`If transposeA ${i} is true, innerElementSize ${f} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${f} must be 3 or 4.
  tileAWidth ${u} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${f}<${n}>, ${u/f}>, ${d}>;
var<workgroup> mm_Bsub: array<array<vec4<${n}>, ${l/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${f};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${o?`0`:`i32(globalId.z)`};
  ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
  let globalRowStart = i32(workgroupId.y) * ${c};

  let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
  var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

  var acc: array<vec4<${n}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${p};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${M_(i,r)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${r?`, batchIndices`:``});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${f===3?``:`let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];`}

          ${N_(i,f)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},F_=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?`, batchIndices`:``});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?`, batchIndices`:``});
            `,I_=e=>e?`let ACached = mm_Asub[k][tileRow + innerRow];`:`let ACached = mm_Asub[tileRow + innerRow][k];`,L_=(e,t,n=`f32`,r,i=!1,a=32,o=!1,s=32,c=!1)=>{let l=e[1]*t[1],u=e[0]*t[0],d=i?l:a,f=i?a:l;if(!(f%t[1]===0&&d%t[0]===0&&a%t[1]===0))throw Error(`tileAHight ${f} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let p=f/t[1],m=d/t[0],h=a/t[1],g=c?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${l};
    let globalColStart = i32(workgroupId.x) * ${u};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${f}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
          ${F_(i,r)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${u}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${r?`, batchIndices`:``});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${n}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${i?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${l};

let tileRowA = i32(localId.y) * ${p};
let tileColA = i32(localId.x) * ${m};
let tileRowB = i32(localId.y) * ${h};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${p}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${m}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${F_(i,r)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${h}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${r?`, batchIndices`:``});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${n}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${I_(i)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${n}, ${d}>, ${f}>;
  var<workgroup> mm_Bsub : array<array<${n}, ${u}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${o?`0`:`i32(globalId.z)`};
    ${r?`let batchIndices = ${r.offsetToIndices(`u32(batch)`)};`:``}
    let num_tiles = ${o?`${Math.ceil(s/a)}`:`(uniforms.dim_inner - 1) / tileInner + 1`};
    var kStart = ${o?`i32(globalId.z) * ${s}`:`0`};

    var acc : array<array<${n}, colPerThread>, rowPerThread>;
    ${g}
  }
`},R_=(e,t,n,r,i=!1)=>{let[a,o,s,c]=r,l=gm(r[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${w_(e,l)} {
      var value = ${w_(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${o.type.indices};
        ${k_(`aIndices`,o,o.rank-2,a.rank,`batchIndices`)}
        ${o.indicesSet(`aIndices`,o.rank-2,`u32(row)`)}
        ${o.indicesSet(`aIndices`,o.rank-1,`u32(colIn)`)}
        value = ${o.getByIndices(`aIndices`)};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${w_(e,l)} {
      var value = ${w_(e,l)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${s.type.indices};
        ${k_(`bIndices`,s,s.rank-2,a.rank,`batchIndices`)}
        ${s.indicesSet(`bIndices`,s.rank-2,`u32(row)`)}
        ${s.indicesSet(`bIndices`,s.rank-1,`u32(colIn)`)}
        value = ${s.getByIndices(`bIndices`)};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${w_(e,l)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${i?`bias[colIn]`:`${w_(e,l)}(bias[row])`};`:``}
        ${n}
        ${c.setByIndices(`vec3<u32>(coords)`,`value`)}
      }
    }
    `},z_=(e,t,n,r,i=!1,a)=>{let o=e[0].dims,s=e[1].dims,c=o.slice(0,-2),l=s.slice(0,-2),u=r?r.slice(0,-2):n.slice(0,-2),d=G.size(u),f=o[o.length-2],p=o[o.length-1],m=s[s.length-1],h=p%4==0&&m%4==0,g=f<=8?[4,1,1]:[4,4,1],_=[8,8,1],v=[Math.ceil(m/_[0]/g[0]),Math.ceil(f/_[1]/g[1]),Math.ceil(d/_[2]/g[2])],y=h?4:1,b=[...c,f,p/y],x=b.length,S=[...l,p,m/y],ee=S.length,te=[d,f,m/y],C=[{type:6,data:f},{type:6,data:m},{type:6,data:p}];b_(t,C),C.push(...K(u,b,S));let ne=[`rank`,`rank`],re=e.length>2;return re&&(C.push(...K(e[2].dims)),ne.push(`rank`)),C.push(...K(te)),{name:`MatMul`,shaderCache:{hint:`${g};${t.activation};${h};${i}`,inputDependencies:ne},getRunData:()=>({outputs:[{dims:a?a(n):n,dataType:e[0].dataType}],dispatchGroup:{x:v[0],y:v[1],z:v[2]},programUniforms:C}),getShaderSource:n=>{let r=u.length,a=wm(`batchDims`,e[0].dataType,r,1),o=gm(e[0].dataType),s=J(`a`,e[0].dataType,x,y),c=J(`b`,e[1].dataType,ee,y),l=Y(`result`,e[0].dataType,te.length,y),d=[s,c];if(re){let t=i?y:1;d.push(J(`bias`,e[2].dataType,e[2].dims.length,t))}let f=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`}];x_(t,f);let p=gm(l.type.tensor),m=y_(t,l.type.value,p),v=R_(y,re,m,[a,s,c,l],i);return`
  ${n.registerUniforms(f).registerInternalVariables(a).declareVariables(...d,l)}
  ${v}
  ${h?P_(g,_,o,a):L_(g,_,o,a)}
                   `}}}}),U_=U(()=>{"use strict";W(),Wp(),Dm(),C_(),E_(),O_(),B_(),V_=(e,t,n,r,i=!1,a,o=4,s=4,c=4,l=`f32`)=>{let u=e=>{switch(e){case 1:return`resData = x[xIndex];`;case 3:return`resData = vec3<${l}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return`resData = x[xIndex / 4];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},d=e=>{switch(e){case 1:return`return w[row * i32(uniforms.w_shape[3]) + colIn];`;case 4:return`return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];`;default:throw Error(`innerElementSize ${e} is not supported.`)}},f=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,p=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,m=e?`i32(uniforms.x_shape[1])`:`i32(uniforms.x_shape[2])`,h=e?`i32(uniforms.x_shape[2])`:`i32(uniforms.x_shape[3])`,g=e?`row`:`col`,_=e?`col`:`row`,v=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
    let outRow = ${g} / outWidth;
    let outCol = ${g} % outWidth;

    let WRow = ${_} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${_} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${_} % inChannels;
    var resData = ${w_(o,l)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${m} && xCol >= 0 && xCol < ${h}) {
      ${f}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${u(o)}
    }
    return resData;`,y=e?t&&r?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${v}
    }
    return ${w_(o,l)}(0.0);`:r&&n?`
    let col = colIn * ${o};
    ${v}`:`
    let col = colIn * ${o};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${v}
    }
    return ${w_(o,l)}(0.0);`,b=e?r&&n?d(s):`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${d(s)}
    }
    return ${w_(s,l)}(0.0);`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${d(s)}
    }
    return ${w_(s,l)}(0.0);`,x=w_(c,l),S=w_(e?o:s,l),ee=w_(e?s:o,l),te=y_(a,x,l);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${S} {
      ${e?y:b}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${ee} {
      ${e?b:y}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${x}) {
      let col = colIn * ${c};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?`i32(uniforms.result_shape[2])`:`i32(uniforms.result_shape[3])`};
      ${p}
      ${T_(i)}
      ${te}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},H_=(e,t,n,r,i,a,o,s,c)=>{let l=t.format===`NHWC`,u=l?e[0].dims[3]:e[0].dims[1],d=n[0],f=l?n[2]:n[3],p=l?n[1]:n[2],m=l?n[3]:n[1],h=l&&(u%4==0||u%3==0)&&m%4==0,g=l?m:f*p,_=l?f*p:m,v=[8,8,1],y=r<=8?[4,1,1]:[4,4,1],b=[Math.ceil(g/v[0]/y[0]),Math.ceil(_/v[1]/y[1]),Math.ceil(d/v[2]/y[2])];Up(`verbose`,()=>`[conv2d_mm_webgpu] dispatch = ${b}`);let x=h?l&&u%4!=0?3:4:1,S=v[1]*y[1],ee=v[0]*y[0],te=Math.max(v[0]*x,v[1]),C=r%S===0,ne=i%ee===0,re=a%te===0,ie=h?[x,4,4]:[1,1,1],ae=[{type:6,data:r},{type:6,data:i},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];b_(t,ae),ae.push(...K(e[0].dims,e[1].dims));let oe=[`rank`,`rank`];return o&&(ae.push(...K(e[2].dims)),oe.push(`rank`)),ae.push(...K(n)),{name:`Conv2DMatMul`,shaderCache:{hint:`${t.cacheKey};${x};${h};${C};${ne};${re};${S};${ee};${te}`,inputDependencies:oe},getRunData:()=>({outputs:[{dims:c?c(n):n,dataType:e[0].dataType}],dispatchGroup:{x:b[0],y:b[1],z:b[2]},programUniforms:ae}),getShaderSource:r=>{let i=[{name:`dim_a_outer`,type:`i32`},{name:`dim_b_outer`,type:`i32`},{name:`dim_inner`,type:`i32`},{name:`pad`,type:`i32`,length:2},{name:`stride`,type:`i32`,length:2},{name:`dilation`,type:`i32`,length:2}];x_(t,i);let a=h?4:1,c=gm(e[0].dataType),u=`
      fn setOutputAtIndex(flatIndex : i32, value : ${h?`vec4<${c}>`:c}) {
        result[flatIndex] = ${h?`vec4<${c}>`:c}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${h?`vec4<${c}>`:c}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${h?`/ 4`:``}, value);
      }`,d=[J(`x`,e[0].dataType,e[0].dims.length,x===3?1:x),J(`w`,e[1].dataType,e[1].dims.length,a)],f=Y(`result`,e[0].dataType,n.length,a);if(o){let t=J(`bias`,e[2].dataType,e[2].dims.length,a);d.push(t),u+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${h?`vec4<${c}>`:c} {
          return bias[coords.${l?`w`:`y`}${h?`/ 4`:``}];
        }`}return`
        ${D_(`uniforms.result_strides`)}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${r.registerUniforms(i).declareVariables(...d,f)}
        ${u}
        ${V_(l,C,ne,re,o,t,ie[0],ie[1],ie[2],c)}
        ${h?P_(y,v,c,void 0,!l,te):L_(y,v,c,void 0,!l,te,!1,void 0,s)}`}}}}),Q_=U(()=>{"use strict";W(),Wp(),pm(),Dm(),C_(),E_(),W_=e=>{let t=1;for(let n=0;n<e.length;n++)t*=e[n];return t},G_=e=>typeof e==`number`?[e,e,e]:e,K_=(e,t)=>t<=1?e:e+(e-1)*(t-1),q_=(e,t,n,r=1)=>{let i=K_(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)},J_=(e,t,n,r,i)=>{i??=q_(e,t[0],r[0]);let a=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(a[n]=Math.trunc((e[n]-t[n]+2*i)/r[n]+1));return a},Y_=(e,t,n,r,i,a,o,s,c,l)=>{let u,d,f,p;if(e===`VALID`&&(e=0),typeof e==`number`){u={top:e,bottom:e,left:e,right:e,front:e,back:e};let m=J_([t,n,r,1],[s,c,l],1,[i,a,o],e);d=m[0],f=m[1],p=m[2]}else if(Array.isArray(e)){if(!e.every((e,t,n)=>e===n[0]))throw Error(`Unsupported padding parameter: ${e}`);u={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let m=J_([t,n,r,1],[s,c,l],1,[i,a,o],e[0]);d=m[0],f=m[1],p=m[2]}else if(e===`SAME_UPPER`){d=Math.ceil(t/i),f=Math.ceil(n/a),p=Math.ceil(r/o);let e=(d-1)*i+s-t,m=(f-1)*a+c-n,h=(p-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(m/2),y=m-v,b=Math.floor(h/2);u={top:v,bottom:y,left:b,right:h-b,front:g,back:_}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outDepth:d,outHeight:f,outWidth:p}},X_=(e,t,n,r,i,a=!1,o=`channelsLast`)=>{let s,c,l,u,d;if(o===`channelsLast`)[s,c,l,u,d]=e;else if(o===`channelsFirst`)[s,d,c,l,u]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,,p,m,h]=t,[g,_,v]=G_(n),[y,b,x]=G_(r),S=K_(p,y),ee=K_(m,b),te=K_(h,x),{padInfo:C,outDepth:ne,outHeight:re,outWidth:ie}=Y_(i,c,l,u,g,_,v,S,ee,te),ae=a?f*d:f,oe=[0,0,0,0,0];return o===`channelsFirst`?oe=[s,ae,ne,re,ie]:o===`channelsLast`&&(oe=[s,ne,re,ie,ae]),{batchSize:s,dataFormat:o,inDepth:c,inHeight:l,inWidth:u,inChannels:d,outDepth:ne,outHeight:re,outWidth:ie,outChannels:ae,padInfo:C,strideDepth:g,strideHeight:_,strideWidth:v,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:S,effectiveFilterHeight:ee,effectiveFilterWidth:te,dilationDepth:y,dilationHeight:b,dilationWidth:x,inShape:e,outShape:oe,filterShape:t}},Z_=(e,t,n,r,i,a)=>{let o=a===`channelsLast`;o?e[0].dims[3]:e[0].dims[1];let s=[64,1,1],c={x:n.map((e,t)=>t)},l=[Math.ceil(W_(c.x.map(e=>n[e]))/s[0]),1,1];Up(`verbose`,()=>`[conv3d_naive_webgpu] dispatch = ${l}`);let u=[{type:12,data:G.size(n)},{type:12,data:r},{type:12,data:i},{type:12,data:t.strides},{type:12,data:t.dilations}];b_(t,u),u.push(...K(e[0].dims,e[1].dims));let d=[`rank`,`rank`],f=e.length===3;return f&&(u.push(...K(e[2].dims)),d.push(`rank`)),u.push(...K(n)),{name:`Conv3DNaive`,shaderCache:{hint:`${t.cacheKey};${o};1;${f}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:l[0],y:l[1],z:l[2]},programUniforms:u}),getShaderSource:a=>{let s=[{name:`output_size`,type:`u32`},{name:`filter_dims`,type:`u32`,length:r.length},{name:`pads`,type:`u32`,length:i.length},{name:`strides`,type:`u32`,length:t.strides.length},{name:`dilations`,type:`u32`,length:t.dilations.length}];x_(t,s);let c=gm(e[0].dataType),l=J(`x`,e[0].dataType,e[0].dims.length,1),u=J(`W`,e[1].dataType,e[1].dims.length,1),d=[l,u],p=Y(`result`,e[0].dataType,n.length,1),m=``;if(f){let t=J(`bias`,e[2].dataType,e[2].dims.length,1);d.push(t),m+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${c} {
          return bias[${o?q(`coords`,4,5):q(`coords`,1,5)}];
        }`}let h=w_(1,c),g=y_(t,h,c);return`
            ${m}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${l.getByIndices(`aIndices`)};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${u.getByIndices(`aIndices`)};
            }
          ${a.registerUniforms(s).declareVariables(...d,p)}
          ${a.mainStart()}
          ${a.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
              let coords = ${p.offsetToIndices(`global_idx`)};
              let batch = ${q(`coords`,0,l.rank)};
              let d2 = ${o?q(`coords`,l.rank-1,l.rank):q(`coords`,1,l.rank)};
              let xFRCCorner = vec3<u32>(${o?q(`coords`,1,l.rank):q(`coords`,2,l.rank)},
              ${o?q(`coords`,2,l.rank):q(`coords`,3,l.rank)},
              ${o?q(`coords`,3,l.rank):q(`coords`,4,l.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${o?q(`uniforms.x_shape`,1,l.rank):q(`uniforms.x_shape`,2,l.rank)};
              let xShapeZ = ${o?q(`uniforms.x_shape`,2,l.rank):q(`uniforms.x_shape`,3,l.rank)};
              let xShapeW = ${o?q(`uniforms.x_shape`,3,l.rank):q(`uniforms.x_shape`,4,l.rank)};
              let xShapeU = ${o?q(`uniforms.x_shape`,4,l.rank):q(`uniforms.x_shape`,1,l.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${o?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${o?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${o?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${o?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${f?`value = value + getBiasByOutputCoords(coords)`:``};
              ${g}
              result[global_idx] = f32(value);
          }`}}}}),tv=U(()=>{"use strict";W(),pm(),Dm(),C_(),$_=(e,t,n,r)=>{let i=e.length>2,a=i?`value += b[output_channel];`:``,o=e[0].dims,s=e[1].dims,c=t.format===`NHWC`,l=c?n[3]:n[1],u=l/t.group,d=c&&u>=4?vm(l):1,f=G.size(n)/d,p=[{type:12,data:f},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:u}];b_(t,p),p.push(...K(o,[s[0],s[1],s[2],s[3]/d]));let m=i?[`rank`,`rank`,`rank`]:[`rank`,`rank`];return p.push(...K([n[0],n[1],n[2],n[3]/d])),{name:`GroupedConv`,shaderCache:{hint:`${t.cacheKey}_${d}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:p}),getShaderSource:r=>{let l=Y(`output`,e[0].dataType,n.length,d),u=gm(l.type.tensor),f=y_(t,l.type.value,u),p=J(`x`,e[0].dataType,o.length),m=J(`w`,e[1].dataType,s.length,d),h=[p,m];i&&h.push(J(`b`,e[2].dataType,e[2].dims,d));let g=[{name:`output_size`,type:`u32`},{name:`dilations`,type:`u32`,length:t.dilations.length},{name:`strides`,type:`u32`,length:2},{name:`pads`,type:`u32`,length:2},{name:`output_channels_per_group`,type:`u32`}];x_(t,g);let _=c?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${p.get(`batch`,`xHeight`,`xWidth`,`input_channel`)};
            let wVal = ${m.get(`wHeight`,`wWidth`,`wInChannel`,`output_channel`)};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${p.get(`batch`,`input_channel`,`xHeight`,`xWidth`)};
            let wVal = ${m.get(`output_channel`,`wInChannel`,`wHeight`,`wWidth`)};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${r.registerUniforms(g).declareVariables(...h,l)}

  ${r.mainStart()}
    ${r.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let outputIndices = ${l.offsetToIndices(`global_idx`)};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${c?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${c?1:2}], outputIndices[${c?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${d} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${c?2:1}];

    var value: ${l.type.value} = ${l.type.value}(0);
    ${_}
    ${a}
    ${f}
    ${l.setByOffset(`global_idx`,`value`)}
  }`}}},ev=(e,t,n,r)=>{let i=e.length>2,a=vm(n[3]),o=vm(n[2]),s=G.size(n)/a/o,c=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],l=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],u=[n[0],n[1],n[2],n[3]/a],d=[{type:12,data:s},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];b_(t,d),d.push(...K(c,l,u));let f=(o-1)*t.strides[1]+l[1];return{name:`GroupedConv-Vectorize`,shaderCache:{hint:`${t.cacheKey};${a};${o};${f};${l[0]};${l[1]}`,inputDependencies:i?[`rank`,`rank`,`type`]:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:n=>{let r=Y(`output`,e[0].dataType,u.length,a),s=gm(r.type.tensor),d=y_(t,r.type.value,s),p=J(`x`,e[0].dataType,c.length,a),m=J(`w`,e[1].dataType,l.length,a),h=[p,m];i&&h.push(J(`b`,e[2].dataType,e[2].dims,a));let g=i?`value += b[output_channel];`:``,_=[{name:`output_size`,type:`u32`},{name:`strides`,type:`i32`,length:2},{name:`pads`,type:`i32`,length:2}];return x_(t,_),`
  ${n.registerUniforms(_).declareVariables(...h,r)}
  ${n.mainStart()}
    ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${o}u;
    let col = (index1 % width1) * ${o}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${p.type.value}, ${f}>;
    var values: array<${r.type.value}, ${o}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${l[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${f}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${p.get(`batch`,`u32(x_height)`,`u32(x_width)`,`input_channel`)};
          } else {
            x_vals[i] = ${p.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${l[1]}; w_width++) {
          let w_val = ${m.get(`w_height`,`w_width`,`0`,`output_channel`)};
          for (var i = 0u; i < ${o}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${o}u; i++) {
      var value = values[i];
      ${g}
      ${d}
      ${r.set(`batch`,`row`,`col + i`,`output_channel`,`value`)};
    }
  }`}}}}),dv=U(()=>{"use strict";pm(),U_(),Q_(),B_(),tv(),C_(),j_(),Lm(),nv=(e,t,n,r,i,a)=>{let o=e[0],s=e.slice(a?1:2,a?3:4),c=s.length,l=t[0],u=t.slice(2).map((e,t)=>e+(e-1)*(n[t]-1)),d=s.map((e,t)=>e+r[t]+r[t+c]).map((e,t)=>Math.floor((e-u[t]+i[t])/i[t]));return d.splice(0,0,o),d.splice(a?3:1,0,l),d},rv=[2,3,1,0],iv=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length>5)throw Error(`greater than 5D is not supported`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[1]*t.group)throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw Error(`invalid bias`);let n=e[0].dims.length-2;if(t.dilations.length!==n)throw Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`)},av=(e,t)=>{let n=e.kernelShape.slice();n.length<t[1].dims.length-2&&n.push(...Array(t[1].dims.length-2-n.length).fill(0));for(let e=2;e<t[1].dims.length;++e)n[e-2]===0&&(n[e-2]=t[1].dims[e]);let r=e.pads.slice();lm.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,n,r,e.format===`NHWC`,e.autoPad);let i=Object.assign({},e);return Object.assign(i,{kernelShape:n,pads:r}),i},ov=e=>{let t=S_(e),n=e.format;return{autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],format:n,dilations:e.dilations,group:e.group,kernelShape:e.kernel_shape,pads:e.pads,strides:e.strides,wIsConst:e.w_is_const(),...t,cacheKey:`${e.format};${t.activation};`}},sv=(e,t,n,r)=>{let i=n.format===`NHWC`,a=nv(t[0].dims,t[1].dims,n.dilations,n.pads,n.strides,i);if(n.group!==1){let o=[t[0]];if(i){let r=e.kernelCustomData.wT??e.compute(Pm(t[1],rv),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),o.push(r)}else o.push(t[1]);t.length===3&&o.push(t[2]),!e.adapterInfo.isArchitecture(`ampere`)&&i&&t[1].dims[0]===n.group&&t[1].dims[1]===1&&n.dilations[0]===1&&n.dilations[1]===1?e.compute(ev(o,n,a,r),{inputs:o}):e.compute($_(o,n,a,r),{inputs:o});return}let o=t.length===3,s=t[0].dims[i?1:2],c=t[0].dims[i?2:3],l=t[0].dims[i?3:1],u=t[1].dims[2],d=t[1].dims[3],f=a[i?1:2],p=a[i?2:3],m=a[i?3:1],h=i&&u===s&&d===c&&n.pads[0]===0&&n.pads[1]===0;if(h||u===1&&d===1&&n.dilations[0]===1&&n.dilations[1]===1&&n.strides[0]===1&&n.strides[1]===1&&n.pads[0]===0&&n.pads[1]===0){let u=a[0],d,g,_,v=[];if(i){let r=e.kernelCustomData.wT??e.compute(Pm(t[1],rv),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];if(n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=r),h){let e=s*c*l;d=t[0].reshape([1,u,e]),g=r.reshape([1,e,m]),_=[1,u,m]}else d=t[0].reshape([u,s*c,l]),g=r.reshape([1,l,m]),_=[u,f*p,m];v.push(d),v.push(g)}else d=t[0].reshape([u,l,s*c]),g=t[1].reshape([1,m,l]),_=[u,m,f*p],v.push(g),v.push(d);o&&v.push(t[2]);let y=_[2],b=v[0].dims[v[0].dims.length-1];y<8&&b<8?e.compute(A_(v,n,a,_,i,r),{inputs:v}):e.compute(z_(v,n,a,_,i,r),{inputs:v});return}let g=e.kernelCustomData.wT??e.compute(Pm(t[1],rv),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=g);let _=[t[0],g];o&&_.push(t[2]);let v=i?f*p:m,y=i?m:f*p,b=u*d*l;e.compute(H_(_,n,a,v,y,b,o,!0,r),{inputs:_})},cv=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),o=[1].concat(t.dilations),s=[1].concat(t.kernelShape),c=av({...t,pads:i,strides:a,dilations:o,kernelShape:s},r);sv(e,r,c,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},lv=(e,t,n)=>{let r=n.format===`NHWC`?`channelsLast`:`channelsFirst`,i=av(n,t),a=n.autoPad===`NOTSET`?n.pads:n.autoPad,o=X_(t[0].dims,t[1].dims,n.strides,n.dilations,a,!1,r);e.compute(Z_(t,i,o.outShape,[o.filterDepth,o.filterHeight,o.filterWidth],[o.padInfo.front,o.padInfo.top,o.padInfo.left],r))},uv=(e,t)=>{if(iv(e.inputs,t),e.inputs[0].dims.length===3)cv(e,t);else if(e.inputs[0].dims.length===5)lv(e,e.inputs,t);else{let n=av(t,e.inputs);sv(e,e.inputs,n)}}}),pv=U(()=>{"use strict";W(),Wp(),pm(),Dm(),fv=(e,t,n)=>{let r=e.length>2,i=t.outputShape,a=t.format===`NHWC`,o=t.group,s=e[1].dims,c=s[2]/o,l=s[3],u=a?vm(c):1,d=a?vm(l):1,f=a?l===1?u:d:1,p=G.size(i)/d,m=[Math.ceil(p/64),1,1];Up(`verbose`,()=>`[conv2d_backprop_webgpu] dispatch = ${m}`);let h=[`rank`,`rank`],g=[t.strides[0],t.strides[1]],_=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],v=[t.dilations[0],t.dilations[1]],y=[_[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),_[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],b=[y[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),y[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],x=[{type:12,data:p},{type:12,data:g},{type:12,data:_},{type:12,data:v},{type:12,data:y},{type:6,data:b},{type:12,data:c},{type:12,data:l},...K(e[0].dims,e[1].dims)];return r&&(x.push(...K(e[2].dims)),h.push(`rank`)),x.push(...K(i)),{name:`ConvTranspose2D`,shaderCache:{hint:`${t.cacheKey};${u}${f}${d}${l===1}`,inputDependencies:h},getRunData:()=>({dispatchGroup:{x:m[0],y:m[1],z:m[2]},outputs:[{dims:n?n(i):i,dataType:e[0].dataType}],programUniforms:x}),getShaderSource:t=>{let n=[{name:`output_size`,type:`u32`},{name:`strides`,type:`u32`,length:g.length},{name:`filter_dims`,type:`u32`,length:_.length},{name:`dilations`,type:`u32`,length:_.length},{name:`effective_filter_dims`,type:`u32`,length:y.length},{name:`pads`,type:`i32`,length:b.length},{name:`input_channels_per_group`,type:`u32`},{name:`output_channels_per_group`,type:`u32`}],o=gm(e[0].dataType),s=a?1:2,c=a?2:3,p=a?3:1,m=J(`W`,e[1].dataType,e[1].dims.length,f),h=J(`Dy`,e[0].dataType,e[0].dims.length,u),v=[h,m];r&&v.push(J(`bias`,e[2].dataType,[i[p]].length,d));let x=Y(`result`,e[0].dataType,i.length,d),S=`
            let outputIndices = ${x.offsetToIndices(`global_idx * ${d}`)};
            let batch = ${x.indicesGet(`outputIndices`,0)};
            let d1 = ${x.indicesGet(`outputIndices`,p)};
            let r = ${x.indicesGet(`outputIndices`,s)};
            let c = ${x.indicesGet(`outputIndices`,c)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${x.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${o}(dyRCorner) + ${o}(wR)) / ${o}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${o}(uniforms.Dy_shape[${s}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }

              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${o}(dyCCorner) + ${o}(wC)) / ${o}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${o}(uniforms.Dy_shape[${c}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group; d2 = d2 + ${u}) {
                  let xValue = ${a?h.getByOffset(`${h.indicesToOffset(`${h.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${u}`):h.get(`batch`,`inputChannel`,`idyR`,`idyC`)};
                  ${(()=>{let e=``;if(u===1)e+=`
        let w_offset = ${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
        let wValue = ${m.getByOffset(`w_offset / ${f}`)};
        dotProd = dotProd + xValue * wValue;`;else if(l===1)e+=`
          let wValue = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)} / ${f}`)};
          dotProd = dotProd + dot(xValue, wValue);`;else for(let t=0;t<u;t++)e+=`
            let wValue${t} = ${m.getByOffset(`${m.indicesToOffset(`${m.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${t}, wOutChannel)`)} / ${f}`)};
            dotProd = dotProd + xValue[${t}] * wValue${t};`;return e})()}
                  inputChannel = inputChannel + ${u};
                }
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${r?` + bias[d1 / ${d}]`:``};
            ${x.setByOffset(`global_idx`,`value`)};
          `;return`
    ${t.registerUniforms(n).declareVariables(...v,x)}
      ${t.mainStart()}
      ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)};
    ${S}}`}}}}),Cv=U(()=>{"use strict";pv(),C_(),Lm(),mv=(e,t,n,r,i,a)=>(e-1)*t+n+(r-1)*i+1-a,hv=(e,t,n,r,i)=>{let a=Math.floor(e/2);t===`SAME_UPPER`?(n[r]=a,n[i]=e-a):t===`SAME_LOWER`&&(n[r]=e-a,n[i]=a)},gv=(e,t,n,r,i,a,o,s,c,l)=>{let u=e.length-2,d=l.length===0;c.length<u&&c.push(...Array(u-c.length).fill(0));let f=e[0],p=t[s?3:1]*i;for(let i=0,f=e.length-u-+!!s;i<u;++i,++f){let s=e[f],p=d?s*o[i]:l[i],m=mv(s,o[i],a[i],t[f],n[i],p);hv(m,r,a,i,i+u),d&&l.push(o[i]*(s-1)+c[i]+(t[f]-1)*n[i]+1-a[i]-a[i+u])}l.splice(0,0,f),l.splice(s?3:1,0,p)},_v=(e,t)=>{let n=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((e,t)=>e*t,1)===0){n.length=0;for(let e=2;e<t[1].dims.length;++e)n.push(t[1].dims[e])}let r=e.format===`NHWC`;n.splice(0,0,t[1].dims[0]),n.splice(r?3:1,0,t[1].dims[1]);let i=e.pads.slice(),a=e.outputShape.slice(),o=e.outputPadding.slice(),s=t[0].dims,c=e.dilations.slice();if(c.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;c=Array(e).fill(1)}let l=e.strides.slice();if(l.reduce((e,t)=>e+t,0)===0){let e=t[0].dims.length-2;l=Array(e).fill(1)}gv(s,n,c,e.autoPad,e.group,i,l,r,o,a);let u=Object.assign({},e);return Object.assign(u,{kernelShape:n,pads:i,outputPadding:o,outputShape:a,dilations:c,strides:l}),u},vv=e=>{let t=S_(e),n=e.format,r=[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][typeof e.autoPad>`u`?0:e.autoPad],i=e.dilations,a=e.group,o=e.kernelShape,s=e.pads,c=e.strides,l=e.wIsConst();return{autoPad:r,format:n,dilations:i,group:a,kernelShape:o,outputPadding:e.outputPadding,outputShape:e.outputShape,pads:s,strides:c,wIsConst:l,...t,cacheKey:`${e.format};${t.activation};`}},yv=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw Error(`Conv requires 2 or 3 inputs`);if(e[0].dims.length!==4&&e[0].dims.length!==3)throw Error(`currently only support 2-dimensional conv`);if(e[0].dims.length!==e[1].dims.length)throw Error(`filter does not have same dimension as input`);if(e[0].dims[t.format===`NHWC`?e[0].dims.length-1:1]!==e[1].dims[0])throw Error(`FILTER_IN_CHANNEL should be equal to DATA_CHANNEL`);let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw Error(`invalid bias`);let r=e[0].dims.length-2;if(t.dilations.reduce((e,t)=>e+t,0)>0&&t.dilations.length!==r)throw Error(`dilations should be ${r}D`);if(t.strides.reduce((e,t)=>e+t,0)>0&&t.strides.length!==r)throw Error(`strides should be ${r}D`);if(t.pads.reduce((e,t)=>e+t,0)>0&&t.pads.length!==r*2)throw Error(`pads should be ${r*2}D`);if(t.outputPadding.length!==r&&t.outputPadding.length!==0)throw Error(`output_padding should be ${r}D`);if(t.kernelShape.reduce((e,t)=>e+t,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw Error(`invalid kernel shape`);if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw Error(`invalid output shape`)},bv=(e,t,n,r)=>{let i=e.kernelCustomData.wT??e.compute(Pm(t[1],[2,3,0,1]),{inputs:[1],outputs:[n.wIsConst?-2:-1]})[0];n.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=i);let a=[t[0],i];t.length===3&&a.push(t[2]),e.compute(fv(a,n,r),{inputs:a})},xv=(e,t)=>{let n=t.format===`NHWC`,r=[e.inputs[0].reshape(n?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&r.push(e.inputs[2]);let i=t.kernelShape;(i.length===0||i[0]===0)&&(i=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let o=t.strides;(o.length===0||o[0]===0)&&(o=[1]);let s=t.pads;s.length===0&&(s=[0,0]),s=[0,s[0],0,s[1]],o=[1].concat(o),a=[1].concat(a),i=[1].concat(i);let c=t.outputPadding;c=[0].concat(c);let l=_v({...t,pads:s,strides:o,dilations:a,kernelShape:i,outputPadding:c},r);bv(e,r,l,e=>n?[e[0],e[2],e[3]]:[e[0],e[1],e[3]])},Sv=(e,t)=>{if(yv(e.inputs,t),e.inputs[0].dims.length===3)xv(e,t);else{let n=_v(t,e.inputs);bv(e,e.inputs,n)}}}),Dv=U(()=>{"use strict";W(),pm(),om(),Dm(),wv=(e,t,n,r)=>{let i=G.size(t),a=t.length,o=J(`input`,e,a),s=Y(`output`,e,a),c=n.dataType===6?n.getInt32Array()[0]:Number(n.getBigInt64Array()[0]),l=G.normalizeAxis(c,a);return{name:`CumSum`,shaderCache:{hint:r.cacheKey,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:[{type:12,data:i},{type:12,data:l},...K(t,t)]}),getShaderSource:e=>{let t=` i32(${o.indicesGet(`inputIndices`,`uniforms.axis`)}) `,n=q(`uniforms.input_shape`,`uniforms.axis`,a),i=r.reverse?t+(r.exclusive?` + 1`:``):`0`,c=r.reverse?n:t+(r.exclusive?``:` + 1`);return`
                ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axis`,`u32`).declareVariables(o,s)}
                ${e.mainStart()}
                  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
                  var inputIndices = ${s.offsetToIndices(`global_idx`)};
                  var sum = ${s.type.value}(0);
                  let first : i32 = ${i};
                  let last : i32 = ${c};
                  for (var i : i32 = first; i < last; i++) {
                    ${o.indicesSet(`inputIndices`,`uniforms.axis`,`u32(i)`)};
                    sum = sum + ${o.getByIndices(`inputIndices`)};
                  }
                  ${s.setByOffset(`global_idx`,`sum`)};
                }`}}},Tv=(e,t)=>{let n=e.inputs[0].dims,r=e.inputs[0].dataType,i=e.inputs[1];e.compute(wv(r,n,i,t),{inputs:[0]})},Ev=e=>{let t=e.exclusive===1,n=e.reverse===1;return am({exclusive:t,reverse:n})}}),Nv=U(()=>{"use strict";W(),pm(),om(),Dm(),Ov=e=>{if(!e||e.length!==1)throw Error(`DepthToSpace requires 1 input.`);if(e[0].dims.length!==4)throw Error(`DepthToSpace requires 4D input.`)},kv=(e,t,n,r)=>{let i=[];i.push(`fn perm(i: ${r.type.indices}) -> ${n.type.indices} {
    var a: ${n.type.indices};`);for(let r=0;r<t;++r)i.push(n.indicesSet(`a`,e[r],`i[${r}]`));return i.push(`return a;}`),i.join(`
`)},Av=(e,t)=>{let n,r,i,a,o,s,c=t.format===`NHWC`,l=t.blocksize,u=t.mode===`DCR`;c?([n,r,i,a]=e.dims,o=u?[n,r,i,l,l,a/l**2]:[n,r,i,a/l**2,l,l],s=u?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([n,r,i,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],o=u?[n,l,l,a/l**2,r,i]:[n,a/l**2,l,l,r,i],s=u?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let d=e.reshape(o),f=d.dims.length,p=e.dataType,m=J(`a`,p,f),h=Y(`output`,p,f);return{name:`DepthToSpace`,shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:[`rank`]},getRunData:e=>{let t=c?[n,r*l,i*l,a/l**2]:[n,a/l**2,r*l,i*l],o=G.size(t),u=d.dims,f=G.sortBasedOnPerm(u,s);return{outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},...K(u,f)]}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(m,h)}

  ${kv(s,f,m,h)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

    let indices = ${h.offsetToIndices(`global_idx`)};
    let aIndices = perm(indices);

    ${h.setByOffset(`global_idx`,m.getByIndices(`aIndices`))}
  }`}},jv=(e,t)=>{Ov(e.inputs),e.compute(Av(e.inputs[0],t))},Mv=e=>am({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Gv=U(()=>{"use strict";W(),pm(),om(),Dm(),Pv=`[a-zA-Z]|\\.\\.\\.`,Fv=`(`+Pv+`)+`,Iv=`^`+Fv+`$`,Lv=`(`+Fv+`,)*`+Fv,Rv=`^`+Lv+`$`,zv=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let n=this.symbolToIndices.get(e);n===void 0?n=[t]:n.push(t),this.symbolToIndices.set(e,n)}},Bv=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=[],this.outputDims=[];let[n,r]=t.includes(`->`)?t.split(`->`,2):[t,``];if(!n.match(RegExp(Rv)))throw Error(`Invalid LHS term`);if(n.split(`,`).forEach((t,n)=>{let r=e[n].dims.slice();if(!t.match(RegExp(Iv)))throw Error(`Invalid LHS term`);let i=this.processTerm(t,!0,r,n);this.lhs.push(i)}),r===``)r+=[...this.symbolToInfo.entries()].filter(([e,t])=>t.count===1||e===`...`).map(([e])=>e).join(``);else if(!r.match(RegExp(Fv)))throw Error(`Invalid RHS`);r.match(RegExp(Pv,`g`))?.forEach(e=>{if(e===`...`)this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let t=this.symbolToInfo.get(e);if(t===void 0)throw Error(`Invalid RHS symbol`);this.outputDims.push(t.dimValue)}}),this.rhs=this.processTerm(r,!1,this.outputDims)}addSymbol(e,t,n){let r=this.symbolToInfo.get(e);if(r!==void 0){if(r.dimValue!==t&&r.count!==1)throw Error(`Dimension mismatch`);r.count++,r.inputIndices.push(n)}else r={count:1,dimValue:t,inputIndices:[n]};this.symbolToInfo.set(e,r)}processTerm(e,t,n,r=-1){let i=n.length,a=!1,o=[],s=0;if(!e.match(RegExp(Iv))&&!t&&e!==``)throw Error(`Invalid LHS term`);let c=e.match(RegExp(Pv,`g`)),l=new zv(r);return c?.forEach((e,u)=>{if(e===`...`){if(a)throw Error(`Only one ellipsis is allowed per input term`);a=!0;let e=i-c.length+1;if(e<0)throw Error(`Ellipsis out of bounds`);if(o=n.slice(s,s+e),this.hasEllipsis){if(this.ellipsisDims.length!==o.length||this.ellipsisDims.toString()!==o.toString())throw Error(`Ellipsis dimensions mismatch`)}else if(t)this.hasEllipsis=!0,this.ellipsisDims=o;else throw Error(`Ellipsis must be specified in the LHS`);for(let e=0;e<o.length;e++){let t=String.fromCharCode(48+e);l.addSymbol(t,u+e),this.addSymbol(t,n[s++],r)}}else l.addSymbol(e,u+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(e,n[s++],r)}),l}},Vv=e=>e+`_max`,Hv=(e,t,n,r)=>{let i=e.map(e=>e.length).map((e,n)=>J(`input${n}`,t,e)),a=G.size(r),o=Y(`output`,t,r.length),s=[...n.symbolToInfo.keys()].filter(e=>!n.rhs.symbolToIndices.has(e));return{name:`Einsum`,shaderCache:{hint:n.equation,inputDependencies:e.map(()=>`rank`)},getRunData:()=>{let i=s.filter(e=>n.symbolToInfo.has(e)).map(e=>({type:12,data:n.symbolToInfo.get(e)?.dimValue||0}));i.push({type:12,data:a});let o=e.map((e,t)=>[...K(e)]).reduce((e,t)=>e.concat(t),i);return o.push(...K(r)),{outputs:[{dims:r,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:o}},getShaderSource:e=>{let t=[],r=[],a=[],c=[],l=[],u=n.symbolToInfo.size===n.rhs.symbolToIndices.size;n.symbolToInfo.forEach((e,s)=>{if(n.rhs.symbolToIndices.has(s)){let r=n.rhs.symbolToIndices.get(s)?.[0];r!==void 0&&n.lhs.forEach((n,a)=>{if(e.inputIndices.includes(a)){let e=n.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{t.push(`${i[a].indicesSet(`input${a}Indices`,e,o.indicesGet(`outputIndices`,r))}`)})}})}else n.lhs.forEach((t,n)=>{if(e.inputIndices.includes(n)){let e=t.symbolToIndices.get(s);if(e===void 0)throw Error(`Invalid symbol error`);e.forEach(e=>{r.push(`${i[n].indicesSet(`input${n}Indices`,e,`${s}`)}`)}),l.push(`prod *= ${i[n].getByIndices(`input${n}Indices`)};`)}}),a.push(`for(var ${s}: u32 = 0; ${s} < uniforms.${Vv(s)}; ${s}++) {`),c.push(`}`)});let d=u?[...t,`let sum = ${i.map((e,t)=>e.getByIndices(`input${t}Indices`)).join(` * `)};`]:[...t,`var sum = 0.0;`,...a,...r,`var prod = 1.0;`,...l,`sum += prod;`,...c];return`
            ${e.registerUniforms(s.map(e=>({name:`${Vv(e)}`,type:`u32`}))).registerUniform(`outputSize`,`u32`).declareVariables(...i,o)}

            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
            var outputIndices = ${o.offsetToIndices(`global_idx`)};
            ${i.map((e,t)=>`var input${t}Indices: ${i[t].type.indices};`).join(`
`)}
            ${d.join(`
`)};
            ${o.setByOffset(`global_idx`,`sum`)};
          }`}}},Uv=(e,t)=>{let n=new Bv(e.inputs,t.equation),r=n.outputDims,i=e.inputs.map((e,t)=>e.dims);e.compute(Hv(i,e.inputs[0].dataType,n,r))},Wv=e=>{let t=e.equation.replace(/\s+/g,``);return am({equation:t})}}),Zv=U(()=>{"use strict";W(),pm(),Dm(),Kv=e=>{if(!e||e.length!==2)throw Error(`Expand requires 2 input.`);let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=n.length<t.length?0:n.length-t.length,i=t.length<n.length?0:t.length-n.length;for(;r<n.length&&i<t.length;++r,++i)if(n[r]!==t[i]&&n[r]!==1&&t[i]!==1)throw Error(`Expand requires shape to be broadcastable to input`)},qv=(e,t)=>{let n=e.length-t.length,r=[];for(let t=0;t<n;++t)r.push(e[t]);for(let i=0;i<t.length;++i)r.push(t[i]===1?e[i+n]:t[i]);return r},Jv=(e,t)=>e.length>t.length?qv(e,t):qv(t,e),Yv=e=>{let t=e[0].dims,n=Array.from(e[1].getBigInt64Array(),Number),r=Jv(t,n),i=e[0].dataType,a=i===9||G.size(t)===1,o=i===9||t.length>0&&t[t.length-1]%4==0?4:1,s=a||r.length>0&&r[r.length-1]%4==0?4:1,c=Math.ceil(G.size(r)/s),l=e=>{let n=J(`input`,i,t.length,o),a=Y(`output`,i,r.length,s),c;if(i===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${a.offsetToIndices(`outputOffset + ${t}u`)};
          let offset${t} = ${n.broadcastedIndicesToOffset(`outputIndices${t}`,a)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;c=`
        let outputOffset = global_idx * ${s};
        var data = vec4<u32>(0);
        ${e(`data`,0,`u32`)}
        ${e(`data`,1,`u32`)}
        ${e(`data`,2,`u32`)}
        ${e(`data`,3,`u32`)}
        ${a.setByOffset(`global_idx`,`data`)}
      }`}else c=`
        let outputIndices = ${a.offsetToIndices(`global_idx * ${s}`)};
        let inputOffset = ${n.broadcastedIndicesToOffset(`outputIndices`,a)};
        let data = ${a.type.value}(${n.getByOffset(`inputOffset / ${o}`)});
        ${a.setByOffset(`global_idx`,`data`)}
      }`;return`
    ${e.registerUniform(`vec_size`,`u32`).declareVariables(n,a)}
    ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
    ${c}`},u=[{type:12,data:c},...K(t,r)];return{name:`Expand`,shaderCache:{hint:`${r.length};${o}${s}`,inputDependencies:[`rank`]},getShaderSource:l,getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:u})}},Xv=e=>{Kv(e.inputs),e.compute(Yv(e.inputs),{inputs:[0]})}}),ey=U(()=>{"use strict";W(),pm(),Dm(),qg(),Qv=e=>{let t=e[0].dataType,n=G.size(e[0].dims),r=G.size(e[1].dims),i=r%4==0;return{name:`FastGeluWithBias`,shaderCache:{hint:`${i}`,inputDependencies:[`type`,`type`]},getShaderSource:e=>{let n=J(`x`,t,[1],4),r=J(`bias`,t,[1],4),a=Y(`y`,t,[1],4),o=[{name:`output_vec_size`,type:`u32`},{name:`bias_size`,type:`u32`}],s=e=>`
      let bias${e}_offset: u32 = (global_idx * 4 + ${e}) % uniforms.bias_size;
      let bias${e} = ${r.getByOffset(`bias${e}_offset / 4`)}[bias${e}_offset % 4];`,c=i?`
      let bias = ${r.getByOffset(`global_idx % (uniforms.bias_size / 4)`)};`:`${s(0)}${s(1)}${s(2)}${s(3)}
      let bias = ${n.type.value}(bias0, bias1, bias2, bias3);`;return`${e.registerUniforms(o).declareVariables(n,r,a)}

    ${zg(_m(t))}

    ${e.mainStart(mm)}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_vec_size`)}

      let x = ${n.getByOffset(`global_idx`)};
      ${c}
      let x_in = x + bias;
      ${a.setByOffset(`global_idx`,Bg(`x_in`))}
    }`},getRunData:e=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],programUniforms:[{type:12,data:Math.ceil(n/4)},{type:12,data:r}],dispatchGroup:{x:Math.ceil(n/mm/4)}})}},$v=e=>{e.inputs.length<2||G.size(e.inputs[1].dims)===0?Vg(e):e.compute(Qv(e.inputs))}}),ay=U(()=>{"use strict";W(),pm(),om(),Dm(),ty=e=>{if(!e||e.length!==2)throw Error(`Gather requires 2 inputs.`)},ny=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=G.normalizeAxis(t.axis,i),o=n.slice(0);o.splice(a,1,...r);let s=n[a],c=e[0].dataType===9?4:1,l=Math.ceil(G.size(o)/c),u=[{type:12,data:l},{type:6,data:s},{type:12,data:a},...K(e[0].dims,e[1].dims,o)];return{name:`Gather`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:t=>{let n=J(`data`,e[0].dataType,e[0].dims.length,c),s=J(`inputIndices`,e[1].dataType,e[1].dims.length),l=Y(`output`,e[0].dataType,o.length,c),u=e=>{let t=r.length,c=`var indicesIndices${e}  = ${s.type.indices}(0);`;for(let n=0;n<t;n++)c+=`${t>1?`indicesIndices${e}[${n}]`:`indicesIndices${e}`} = ${o.length>1?`outputIndices${e}[uniforms.axis + ${n}]`:`outputIndices${e}`};`;c+=`
          var idx${e} = ${s.getByIndices(`indicesIndices${e}`)};
          if (idx${e} < 0) {
            idx${e} = idx${e} + uniforms.axisDimLimit;
          }
          var dataIndices${e} : ${n.type.indices};
        `;for(let n=0,r=0;n<i;n++)n===a?(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = u32(idx${e});`,r+=t):(c+=`${i>1?`dataIndices${e}[${n}]`:`dataIndices${e}`} = ${o.length>1?`outputIndices${e}[${r}]`:`outputIndices${e}`};`,r++);return c},d;if(e[0].dataType===9){let e=(e,t,r=``)=>`
          let outputIndices${t} = ${l.offsetToIndices(`outputOffset + ${t}u`)};
          ${u(t)};
          let offset${t} = ${n.indicesToOffset(`dataIndices${t}`)};
          let index${t} = offset${t} / 4u;
          let component${t} = offset${t} % 4u;
          ${e}[${t}] = ${r}(${n.getByOffset(`index${t}`)}[component${t}]);
        `;d=`
        let outputOffset = global_idx * ${c};
        var value = vec4<u32>(0);
        ${e(`value`,0,`u32`)}
        ${e(`value`,1,`u32`)}
        ${e(`value`,2,`u32`)}
        ${e(`value`,3,`u32`)}
        ${l.setByOffset(`global_idx`,`value`)}
      `}else d=`
      let outputIndices = ${l.offsetToIndices(`global_idx`)};
      ${u(``)};
      let value = ${n.getByIndices(`dataIndices`)};
      ${l.setByOffset(`global_idx`,`value`)};
      `;return`
      ${t.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(n,s,l)}
      ${t.mainStart()}
        ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        ${d}
      }`}}},ry=e=>am({axis:e.axis}),iy=(e,t)=>{let n=e.inputs;ty(n),e.compute(ny(e.inputs,t))}}),ly=U(()=>{"use strict";W(),pm(),Dm(),oy=(e,t,n,r,i,a,o,s,c)=>{let l=[{type:12,data:a},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:o},{type:12,data:s},{type:12,data:c}],u=[a];return l.push(...K(t.dims,u)),e.compute({name:`computeSliceOffsets`,shaderCache:{hint:`${i.length}_${n.length}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:u,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:l}),getShaderSource:e=>{let r=[J(`indices_data`,t.dataType,t.dims.length),Y(`input_slice_offsets_data`,12,1,1)],a=[{name:`output_size`,type:`u32`},{name:`batch_dims`,type:`u32`},{name:`input_dims`,type:`u32`,length:i.length},{name:`sizes_from_slice_dims_data`,type:`u32`,length:n.length},{name:`num_slices_per_batch`,type:`u32`},{name:`input_batch_stride`,type:`u32`},{name:`num_slice_dims`,type:`u32`}];return`
  ${e.registerUniforms(a).declareVariables(...r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${i.length===1?`index += i32(uniforms.input_dims);`:`index += i32(uniforms.input_dims[input_dim_idx]);`}
      }
      ${n.length===1?`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);`:`relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);`}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`}},{inputs:[t],outputs:[-1]})[0]},sy=(e,t)=>{let n=e.inputs,r=n[0].dims,i=n[0].dataType,a=n[1].dims,o=a[a.length-1],s=G.sizeToDimension(a,a.length-1),c=G.sizeFromDimension(r,t.batchDims+o),l=G.sizeToDimension(r,t.batchDims),u=G.sizeFromDimension(r,t.batchDims),d=s/l,f=Array(o),p=c;for(let e=0;e<o;++e)f[o-1-e]=p,p*=r[t.batchDims+o-1-e];let m=oy(e,n[1],f,t.batchDims,r,s,d,u,o),h=t.batchDims+o;if(h>r.length)throw Error(`last dimension of indices must not be larger than rank of input tensor`);let g=a.slice(0,-1).concat(r.slice(h)),_=G.size(g),v=[{type:12,data:_},{type:12,data:c},...K(n[0].dims,m.dims,g)];e.compute({name:`GatherND`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:g,dataType:i}],dispatchGroup:{x:Math.ceil(_/64)},programUniforms:v}),getShaderSource:e=>{let t=J(`data`,n[0].dataType,n[0].dims.length),r=J(`slice_offsets`,12,m.dims.length),i=Y(`output`,n[0].dataType,g.length);return`
          ${e.registerUniform(`output_size`,`u32`).registerUniform(`slice_size`,`u32`).declareVariables(t,r,i)}
            ${e.mainStart()}
            ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`}},{inputs:[n[0],m]})},cy=e=>({batchDims:e.batch_dims,cacheKey:``})}),my=U(()=>{"use strict";W(),pm(),om(),Dm(),uy=(e,t)=>{if(e.length<3||e.length>4)throw Error(`GatherBlockQuantized requires 3 or 4 inputs.`);let n=G.normalizeAxis(t.quantizeAxis,e[0].dims.length),r=t.blockSize,i=e[0],a=e[2],o=e.length===4?e[3]:void 0;if(a.dims.length!==i.dims.length||!i.dims.map((e,t)=>t===n?Math.ceil(e/r)===a.dims[t]:e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.`);if(o){if(o.dataType!==i.dataType)throw Error(`Zero point must have the same data type as the input tensor.`);if(o.dims.length!==a.dims.length||!o.dims.map((e,t)=>e===a.dims[t]).reduce((e,t)=>e&&t,!0))throw Error(`Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.`)}},dy=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n.length,a=G.normalizeAxis(t.gatherAxis,i),o=G.normalizeAxis(t.quantizeAxis,i),s=n.slice(0);s.splice(a,1,...r);let c=G.size(s),l=e[2].dataType,u=e[0].dataType===22,d=[{type:12,data:c},{type:12,data:o},{type:12,data:a},{type:12,data:t.blockSize},...K(...e.map((e,t)=>e.dims),s)];return{name:`GatherBlockQuantized`,shaderCache:{hint:`${t.cacheKey};${e.filter((e,t)=>t!==1).map(e=>e.dims.join(`_`)).join(`;`)}`,inputDependencies:Array.from({length:e.length},(e,t)=>`rank`)},getRunData:()=>({outputs:[{dims:s,dataType:l}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:d}),getShaderSource:t=>{let i=J(`data`,e[0].dataType,e[0].dims.length),o=J(`inputIndices`,e[1].dataType,e[1].dims.length),c=J(`scales`,e[2].dataType,e[2].dims.length),d=e.length>3?J(`zeroPoint`,e[3].dataType,e[3].dims.length):void 0,f=Y(`output`,l,s.length),p=[i,o,c];return d&&p.push(d),`
        ${t.registerUniforms([{name:`output_size`,type:`u32`},{name:`quantize_axis`,type:`u32`},{name:`gather_axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...p,f)}
        ${t.mainStart()}
        let output_indices = ${f.offsetToIndices(`global_idx`)};
        var indices_indices = ${o.type.indices}(0);
        ${r.length>1?`
          for (var i: u32 = 0; i < ${r.length}; i++) {
            let index = ${f.indicesGet(`output_indices`,`uniforms.gather_axis + i`)};
            ${o.indicesSet(`indices_indices`,`i`,`index`)};
          }`:`indices_indices = ${f.indicesGet(`output_indices`,`uniforms.gather_axis`)};`};
        var data_indices = ${i.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${f.indicesGet(`output_indices`,`i`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        var index_from_indices = ${o.getByIndices(`indices_indices`)};
        if (index_from_indices < 0) {
          index_from_indices += ${n[a]};
        }
        ${i.indicesSet(`data_indices`,`uniforms.gather_axis`,`u32(index_from_indices)`)};
        for (var i = uniforms.gather_axis + 1; i < ${s.length}; i++) {
          let index = ${f.indicesGet(`output_indices`,`i + ${r.length} - 1`)};
          ${i.indicesSet(`data_indices`,`i`,`index`)};
        }
        let data_offset = ${i.indicesToOffset(`data_indices`)};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${i.getByOffset(`data_offset / 8`)};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${c.indicesGet(`data_indices`,`uniforms.quantize_axis`)} / uniforms.block_size;
        ${c.indicesSet(`scale_indices`,`uniforms.quantize_axis`,`quantize_axis_index`)};
        var scale = ${c.getByIndices(`scale_indices`)};
        ${d?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${d.indicesToOffset(`zero_point_indices`)};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${d.getByOffset(`zero_point_offset / 8`)};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${u?`unpack4xI8`:`unpack4xU8`}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:`var zero_point = 0`};
        let dequantized_data = ${_m(l)}(quantized_data - zero_point) * scale;
        ${f.setByOffset(`global_idx`,`dequantized_data`)};
    }`}}},fy=(e,t)=>{let n=e.inputs;uy(n,t),e.compute(dy(e.inputs,t))},py=e=>am({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),yy=U(()=>{"use strict";W(),pm(),om(),Dm(),hy=e=>{if(!e||e.length!==2)throw Error(`GatherElements requires 2 inputs.`);if(e[0].dims.length<1)throw Error(`GatherElements requires that the data input be rank >= 1.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},gy=(e,t)=>{let n=e[0].dims,r=e[0].dataType,i=n.length,a=e[1].dims,o=e[1].dataType,s=G.normalizeAxis(t.axis,i),c=n[s],l=a.slice(0),u=G.size(l),d=J(`input`,r,i),f=J(`indicesInput`,o,a.length),p=Y(`output`,r,l.length),m=[{type:12,data:u},{type:6,data:c},{type:12,data:s}];return m.push(...K(n,a,l)),{name:`GatherElements`,shaderCache:{inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:e=>`
      ${e.registerUniform(`outputSize`,`u32`).registerUniform(`axisDimLimit`,`i32`).registerUniform(`axis`,`u32`).declareVariables(d,f,p)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

      let outputIndices = ${p.offsetToIndices(`global_idx`)};

      var idx = ${f.getByOffset(`global_idx`)};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${d.type.indices}(outputIndices);
      ${d.indicesSet(`inputIndices`,`uniforms.axis`,`u32(idx)`)};
      let value = ${d.getByIndices(`inputIndices`)};

      ${p.setByOffset(`global_idx`,`value`)};
  }`}},_y=e=>am({axis:e.axis}),vy=(e,t)=>{let n=e.inputs;hy(n),e.compute(gy(e.inputs,t))}}),wy=U(()=>{"use strict";W(),pm(),Dm(),by=e=>{if(!e)throw Error(`Input is missing`);if(e.length<2||e.length>3)throw Error(`Invaid input number.`);if(e.length===3&&e[2].dims.length>2)throw Error(`Invalid input shape of C`);if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`Input types are mismatched`)},xy=(e,t)=>{let n=e[0].dims.slice(),r=e[1].dims.slice(),[i,a,o]=um.getShapeOfGemmResult(n,t.transA,r,t.transB,e.length===3?e[2].dims:void 0),s=[i,a];if(!s)throw Error(`Can't use gemm on the given tensors`);let c=Math.ceil(a/16),l=Math.ceil(i/16);G.size(s);let u=[{type:12,data:c},{type:12,data:i},{type:12,data:a},{type:12,data:o},{type:1,data:t.alpha},{type:1,data:t.beta}],d=[`type`,`type`];return e.length===3&&(u.push(...K(e[2].dims)),d.push(`rank`)),u.push(...K(s)),{name:`GemmShared`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:c*l},programUniforms:u}),getShaderSource:n=>{let r=J(`a`,e[0].dataType,e[0].dims),i=J(`b`,e[1].dataType,e[1].dims),a=null,o=[r,i];e.length===3&&(a=J(`c`,e[2].dataType,e[2].dims.length),o.push(a));let c=Y(`output`,e[0].dataType,s.length);o.push(c);let l=[{name:`num_tile_n`,type:`u32`},{name:`M`,type:`u32`},{name:`N`,type:`u32`},{name:`K`,type:`u32`},{name:`alpha`,type:`f32`},{name:`beta`,type:`f32`}],u=``,d=``;t.transA&&t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[local_id.x][k];`):t.transA&&!t.transB?(d=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[k][local_id.y] * tile_b[k][local_id.x];`):!t.transA&&t.transB?(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[local_id.x][k];`):!t.transA&&!t.transB&&(d=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${r.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${i.type.value}(0);
      }
      `,u=`value += tile_a[local_id.y][k] * tile_b[k][local_id.x];`);let f=t.alpha===1?``:`value *= uniforms.alpha;`;return`
  ${n.registerUniforms(l).declareVariables(...o)}
  var<workgroup> tile_a: array<array<${r.type.storage}, 16>, 16>;
  var<workgroup> tile_b: array<array<${i.type.storage}, 16>, 16>;
  ${n.mainStart([16,16,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * 16;
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * 16;
    let num_tiles = (uniforms.K - 1) / 16 + 1;
    var k_start = 0u;
    var value = ${c.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${d}
      k_start = k_start + 16;
      workgroupBarrier();

      for (var k: u32 = 0u; k < 16; k++) {
        ${u}
      }
      workgroupBarrier();
    }

    ${f}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${a==null?``:`let cOffset = ${a.broadcastedIndicesToOffset(`vec2(m, n)`,c)}; value += ${c.type.value}(uniforms.beta) * ${a.getByOffset(`cOffset`)};`}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`}}},Sy=e=>({transA:e.transA,transB:e.transB,alpha:e.alpha,beta:e.beta,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}),Cy=(e,t)=>{by(e.inputs),e.compute(xy(e.inputs,t))}}),zy=U(()=>{"use strict";W(),pm(),om(),Dm(),[Ty,Ey,Dy,Oy]=[0,1,2,3],ky=e=>{if(e[0].dims.length!==4)throw Error(`only 4-D tensor is supported.`);if(e[0].dims.length!==e[1].dims.length)throw Error(`input dimensions must be equal to grid dimensions`);if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw Error(`grid batch size must match input batch size`)},Ay=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,jy=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,My=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Ny=e=>`
  ${e.paddingMode===`reflection`?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:``}
`,Py=(e,t,n)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${Ty}] = batch;
     indices[${Ey}] = channel;`+(()=>{switch(n.paddingMode){case`zeros`:return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Dy}] = u32(r);
            indices[${Oy}] = u32(c);
          }
        `;case`border`:return`
          indices[${Dy}] = u32(clamp(r, 0, H - 1));
          indices[${Oy}] = u32(clamp(c, 0, W - 1));
        `;case`reflection`:return`
          indices[${Dy}] = gs_reflect(r, border[1], border[3]);
          indices[${Oy}] = gs_reflect(c, border[0], border[2]);
        `;default:throw Error(`padding mode ${n.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices(`indices`)};
  }
`,Fy=(e,t,n)=>(()=>{switch(n.mode){case`nearest`:return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${Ty}], indices[${Ey}], border);
        `;case`bilinear`:return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${Ty}], indices[${Ey}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${Ty}], indices[${Ey}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${Ty}], indices[${Ey}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${Ty}], indices[${Ey}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case`bicubic`:return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${Ty}], indices[${Ey}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw Error(`mode ${n.mode} is not supported`)}})()+`${e.setByOffset(`global_idx`,`result`)}`,Iy=(e,t)=>{let n=J(`x`,e[0].dataType,e[0].dims.length),r=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],i=J(`grid`,e[1].dataType,r.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format===`NHWC`&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[Ty,Ey,Dy,Oy]=[0,3,1,2]);let o=Y(`output`,e[0].dataType,a.length),s=n.type.value,c=[{type:12,data:G.size(a)},...K(e[0].dims,r,a)];return{name:`GridSample`,shaderCache:{hint:`${t.cacheKey}`,inputDependencies:[`type`,`type`]},getRunData:e=>{let t=G.size(a);return{outputs:[{dims:a,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(t/64)},programUniforms:c}},getShaderSource:e=>`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(n,i,o)}
  ${Ay}
  ${jy(s)}
  ${My(t)}
  ${Ny(t)}
  ${Py(n,s,t)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let H_in = i32(uniforms.x_shape[${Dy}]);
      let W_in = i32(uniforms.x_shape[${Oy}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${o.offsetToIndices(`global_idx`)};
      var grid_indices = vec3<u32>(indices[${Ty}], indices[${Dy}], indices[${Oy}]);
      let nxy = ${i.getByIndices(`grid_indices`)};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Fy(o,s,t)}
  }`}},Ly=(e,t)=>{ky(e.inputs),e.compute(Iy(e.inputs,t))},Ry=e=>am({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),qy=U(()=>{"use strict";W(),pm(),om(),qp(),Kh(),Dm(),Lm(),By=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Vy=(e,t)=>{let n=e[0],r=By(e,1),i=By(e,2),a=By(e,3),o=By(e,4),s=By(e,5),c=By(e,6),l=By(e,7);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let u=n.dims[0],d=n.dims[1],f=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],p=d,m=0,h=0,g=Math.floor(f/t.numHeads);if(c&&l&&G.size(c.dims)&&G.size(l.dims)){if(c.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(c.dims[0]!==u||c.dims[1]!==t.numHeads||c.dims[3]!==g)throw Error(`Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[3]!==g)throw Error(`Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)`);if(c.dims[2]!==l.dims[2])throw Error(`Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)`);if(l.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);m=c.dims[2],h=c.dims[2]}else if(c&&G.size(c.dims)||l&&G.size(l.dims))throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let _;if(r&&G.size(r.dims)>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(r.dims[2]!==n.dims[2])throw Error(`Input "query" and "key" shall have same dim 2 (hidden_size)`);_=2,p=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==g)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);_=5,p=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==g)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);_=0,p=r.dims[2]}}else{if(n.dims.length!==5)throw Error(`Input "query" is expected to have 5 dimensions when key is empty`);if(n.dims[2]!==t.numHeads||n.dims[3]!==3)throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);_=3}if(a&&G.size(a.dims)>0){if(a.dims.length!==1)throw Error(`Input "bias" is expected to have 1 dimension`);if(r&&r.dims.length===5&&r.dims[3]===2)throw Error(`bias is not allowed for packed kv.`)}let v=m+p,y=0;if(o&&G.size(o.dims)>0){y=8;let e=o.dims;throw e.length===1?e[0]===u?y=1:e[0]===3*u+2&&(y=3):e.length===2&&e[0]===u&&e[1]===v&&(y=5),Error(y===8?`Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)`:`Mask not supported`)}let b=!1,x=f;if(i&&G.size(i.dims)>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(p!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);x=i.dims[2]}else{if(p!==i.dims[2])throw Error(`Input "key" and "value" shall have the same dim 2 (kv_sequence_length)`);x=i.dims[1]*i.dims[3],b=!0}}if(o&&G.size(o.dims)>0)throw Error(`Key padding mask is not supported`);if(s&&G.size(s.dims)>0){if(s.dims.length!==4)throw Error(`Input "attention_bias" is expected to have 4 dimensions`);if(s.dims[0]!==u||s.dims[1]!==t.numHeads||s.dims[2]!==d||s.dims[3]!==v)throw Error(`Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)`)}return{batchSize:u,sequenceLength:d,pastSequenceLength:m,kvSequenceLength:p,totalSequenceLength:v,maxSequenceLength:h,inputHiddenSize:0,hiddenSize:f,vHiddenSize:x,headSize:g,vHeadSize:Math.floor(x/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:y,scale:t.scale,broadcastResPosBias:!1,passPastInKv:b,qkvFormat:_}},Hy=e=>am({...e}),Uy=am({perm:[0,2,1,3]}),Wy=(e,t,n,r,i,a,o)=>{let s=[r,i,a],c=G.size(s),l=[{type:12,data:c},{type:12,data:o},{type:12,data:a}];return e.compute({name:`MultiHeadAttentionAddBias`,shaderCache:{inputDependencies:[`type`,`type`]},getRunData:()=>({outputs:[{dims:s,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:l}),getShaderSource:e=>{let r=Y(`qkv_with_bias`,t.dataType,s),i=J(`qkv`,t.dataType,s),a=J(`bias`,n.dataType,s);return`
  ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`bias_offset`,type:`u32`},{name:`hidden_size`,type:`u32`}]).declareVariables(i,a,r)}
  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`}},{inputs:[t,n],outputs:[-1]})[0]},Gy=(e,t,n,r,i,a,o,s)=>{let c=a;if(o&&G.size(o.dims)>0){if(r===1)throw Error(`AddBiasReshape is not implemented. Please export your model with packed QKV or KV`);return c=Wy(e,a,o,t,r,n*i,s),c=c.reshape([t,r,n,i]),n===1||r===1?c:e.compute(Pm(c,Uy.perm),{inputs:[c],outputs:[-1]})[0]}else return a.dims.length===3&&(c=a.reshape([t,r,n,i])),n===1||r===1?c:e.compute(Pm(c,Uy.perm),{inputs:[c],outputs:[-1]})[0]},Ky=(e,t)=>{let n=Vy(e.inputs,t),r=e.inputs[0],i=By(e.inputs,1),a=By(e.inputs,2),o=By(e.inputs,3),s=By(e.inputs,4),c=By(e.inputs,5),l=By(e.inputs,6),u=By(e.inputs,7);if(r.dims.length===5)throw Error(`Packed QKV is not implemented`);if(i?.dims.length===5)throw Error(`Packed KV is not implemented`);let d=i&&a&&i.dims.length===4&&a.dims.length===4,f=Gy(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,r,o,0);if(d)return Uh(e,f,i,a,s,void 0,l,u,c,n);if(!i||!a)throw Error(`key and value must be provided`);let p=Gy(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.headSize,i,o,n.hiddenSize),m=Gy(e,n.batchSize,n.numHeads,n.kvSequenceLength,n.vHeadSize,a,o,2*n.hiddenSize);Uh(e,f,p,m,s,void 0,l,u,c,n)}}),tb=U(()=>{"use strict";W(),pm(),om(),Dm(),Jy=e=>{if(!e||e.length<1)throw Error(`too few inputs`)},Yy=(e,t)=>{let n=[],r=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(e=>n.push(Number(e))),r=n.length),am({numOutputs:r,axis:t.axis,splitSizes:n})},Xy=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${q(`uniforms.size_in_split_axis`,`i`,e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Zy=e=>{let t=e.length,n=[];for(let r=0;r<t;++r){let i=e[r].setByIndices(`indices`,`input[global_idx]`);t===1?n.push(i):r===0?n.push(`if (output_number == ${r}u) { ${i} }`):r===t-1?n.push(`else { ${i} }`):n.push(`else if (output_number == ${r}) { ${i} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${n.join(`
`)}
      }`},Qy=(e,t)=>{let n=e[0].dims,r=G.size(n),i=e[0].dataType,a=G.normalizeAxis(t.axis,n.length),o=Array(t.numOutputs),s=J(`input`,i,n.length),c=Array(t.numOutputs),l=[],u=[],d=0,f=[{type:12,data:r}];for(let r=0;r<t.numOutputs;r++){d+=t.splitSizes[r],c[r]=d;let s=n.slice();s[a]=t.splitSizes[r],u.push(s),o[r]=Y(`output${r}`,i,s.length),l.push({dims:u[r],dataType:e[0].dataType})}return f.push({type:12,data:c},...K(n,...u)),{name:`Split`,shaderCache:{hint:t.cacheKey,inputDependencies:[`rank`]},getShaderSource:e=>`
  ${e.registerUniform(`input_size`,`u32`).registerUniform(`size_in_split_axis`,`u32`,c.length).declareVariables(s,...o)}
  ${Xy(c.length)}
  ${Zy(o)}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.input_size`)}

    var indices = ${s.offsetToIndices(`global_idx`)};
    var index = ${s.indicesGet(`indices`,a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${q(`uniforms.size_in_split_axis`,`output_number - 1u`,c.length)};
      ${s.indicesSet(`indices`,a,`index`)};
    }
    writeBufferData(output_number, indices, global_idx);
  }`,getRunData:()=>({outputs:l,dispatchGroup:{x:Math.ceil(r/64)},programUniforms:f})}},$y=(e,t)=>{Jy(e.inputs);let n=e.inputs.length===1?t:Yy(e.inputs,t);e.compute(Qy(e.inputs,n),{inputs:[0]})},eb=e=>{let t=e.axis,n=e.splitSizes,r=e.numOutputs<0?n.length:e.numOutputs;if(r!==n.length)throw Error(`numOutputs and splitSizes lengh must be equal`);return am({axis:t,numOutputs:r,splitSizes:n})}}),ob=U(()=>{"use strict";om(),Kh(),qy(),tb(),Lm(),nb=(e,t)=>{if(t.doRotary)throw Error(`GroupQuerryAttention do_rotary attribute is not supported`);if(t.doRotary&&e.length<=7)throw Error(`cos_cache and sin_cache inputs are required if do_rotary is specified`);let n=e[0],r=e[1],i=e[2],a=e[3],o=e[4];if(t.localWindowSize!==-1)throw Error(`Local attention is not supported`);if(t.softcap!==0)throw Error(`Softcap is not supported`);if(t.rotaryInterleaved!==0)throw Error(`Rotary interleaved is not supported`);if(t.smoothSoftmax)throw Error(`Smooth softmax is not supported`);if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input query is expected to have 3 or 5 dimensions`);let s=n.dims[0],c=n.dims[1],l=n.dims.length===3?n.dims[2]:t.numHeads*n.dims[4],u=c,d=0,f=!r||r.dims.length===0,p=Math.floor(f?l/(t.numHeads+2*t.kvNumHeads):l/t.numHeads);f&&(l=p*t.numHeads);let m=a&&a.dims.length!==0,h=o&&o.dims.length!==0;if(m&&a.dims.length===4&&a.dims[0]===s&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===p)throw Error(`BSNH pastKey/pastValue is not supported`);if(m&&h){if(a.dims.length!==4)throw Error(`Input "past_key" is expected to have 4 dimensions`);if(o.dims.length!==4)throw Error(`Input "past_value" is expected to have 4 dimensions`);d=a.dims[2]}else if(m||h)throw Error(`Input "past_key" and "past_value" shall be both present or both absent`);let g=1;if(r&&r.dims.length>0){if(n.dims.length!==3)throw Error(`Input "query" is expected to have 3 dimensions when key is given`);if(r.dims.length<3||r.dims.length>5)throw Error(`Input "key" is expected to have 3, 4, or 5 dimensions`);if(n.dims[0]!==r.dims[0])throw Error(`Input "query" and "key" shall have same dim 0 (batch size)`);if(r.dims.length===3){if(n.dims[2]%r.dims[2]!==0)throw Error(`Dimension 2 of "query" should be a multiple of "key"`);u=r.dims[1]}else if(r.dims.length===5){if(r.dims[2]!==t.numHeads||r.dims[3]!==2||r.dims[4]!==p)throw Error(`Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv`);if(i)throw Error(`Expect "value" be none when "key" has packed kv format.`);u=r.dims[1]}else{if(r.dims[1]!==t.numHeads||r.dims[3]!==p)throw Error(`Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key`);u=r.dims[2]}}else{if(n.dims.length!==3&&n.dims.length!==5)throw Error(`Input "query" is expected to have 3 or 5 dimensions when key is empty`);if(n.dims.length===5&&(n.dims[2]!==t.numHeads||n.dims[3]!==3))throw Error(`Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv`);g=3}let _=!1,v=t.kvNumHeads?p*t.kvNumHeads:l;if(i&&i.dims.length>0){if(i.dims.length!==3&&i.dims.length!==4)throw Error(`Input "value" is expected to have 3 or 4 dimensions`);if(n.dims[0]!==i.dims[0])throw Error(`Input "query" and "value" shall have same dim 0 (batch_size)`);if(i.dims.length===3){if(u!==i.dims[1])throw Error(`Input "key" and "value" shall have the same dim 1 (kv_sequence_length)`);v=i.dims[2]}else{if(u!==i.dims[2])throw Error(`Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)`);v=i.dims[1]*i.dims[3],_=!0}}let y=e.length>4?e[5]:void 0;if(y&&y.dims.length!==1&&y.dims[0]!==s)throw Error(`Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size`);return{batchSize:s,sequenceLength:c,pastSequenceLength:d,kvSequenceLength:u,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:l,vHiddenSize:v,headSize:p,vHeadSize:Math.floor(v/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:0,scale:t.scale,broadcastResPosBias:!1,passPastInKv:_,qkvFormat:g}},rb=am({perm:[0,2,1,3]}),ib=(e,t,n)=>{let r=t,i=n.kvNumHeads;return t.dims.length===3&&n.kvSequenceLength!==0&&(r=t.reshape([n.batchSize,n.kvSequenceLength,i,n.headSize]),r=e.compute(Pm(r,rb.perm),{inputs:[r],outputs:[-1]})[0]),r},ab=(e,t)=>{let n=nb(e.inputs,t);if(e.inputs[0].dims.length===5)throw Error(`Packed QKV is not implemented`);if(e.inputs[1]?.dims.length===5)throw Error(`Packed KV is not implemented`);let r=e.inputs[0],i=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,o=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,s=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,c=e.inputs.length>4?e.inputs[5]:void 0,l=e.inputs.length>5?e.inputs[6]:void 0,u=n.kvNumHeads?n.kvNumHeads:n.numHeads,d=am({axis:2,numOutputs:3,splitSizes:[n.numHeads*n.headSize,u*n.headSize,u*n.headSize]}),[f,p,m]=!i&&!a?e.compute(Qy([r],d),{inputs:[r],outputs:[-1,-1,-1]}):[r,i,a],h=Gy(e,n.batchSize,n.numHeads,n.sequenceLength,n.headSize,f,void 0,0);Uh(e,h,ib(e,p,n),ib(e,m,n),void 0,void 0,o,s,void 0,n,c,l)}}),db=U(()=>{"use strict";W(),pm(),Lm(),Dm(),sb=(e,t,n,r,i,a,o,s)=>{let c=vm(a),l=c===1?`f32`:`vec${c}f`,u=c===1?`vec2f`:`mat2x${c}f`,d=i*o,f=64;d===1&&(f=256);let p=[i,o,a/c],m=[i,o,2],h=[`rank`,`type`,`type`],g=[];return g.push(...K(p,m)),e.compute({name:`InstanceNormComputeChannelScaleShift`,shaderCache:{hint:`${c};${s};${f}`,inputDependencies:h},getRunData:()=>({outputs:[{dims:m,dataType:1}],dispatchGroup:{x:d},programUniforms:g}),getShaderSource:e=>{let i=J(`x`,t.dataType,3,c),a=[i,J(`scale`,n.dataType,n.dims),J(`bias`,r.dataType,r.dims),Y(`output`,1,3,2)];return`
  var<workgroup> workgroup_shared : array<${u}, ${f}>;
  const workgroup_size = ${f}u;
  ${e.declareVariables(...a)}
  ${e.mainStart(f)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${l}(0);
    var squared_sum = ${l}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${l}(${i.get(`batch`,`channel`,`h`)});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${u}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${xm(`workgroup_shared[0][0]`,c)} / f32(hight * ${c});
      let squared_sum_final = ${xm(`workgroup_shared[0][1]`,c)} / f32(hight * ${c});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${s}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`}},{inputs:[t,n,r],outputs:[-1]})[0]},cb=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[1],s=G.sizeFromDimension(r,2),c=vm(s),l=G.size(i)/c,u=sb(e,t[0],t[1],t[2],a,s,o,n.epsilon),d=[a,o,s/c],f=[a,o];e.compute({name:`InstanceNormalization`,shaderCache:{hint:`${c}`,inputDependencies:[`type`,`none`]},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:[{type:12,data:l},...K(d,f,d)]}),getShaderSource:e=>{let n=J(`x`,t[0].dataType,d.length,c),r=J(`scale_shift`,1,f.length,2),i=Y(`output`,t[0].dataType,d.length,c),a=[n,r,i];return`
  ${e.registerUniform(`output_size`,`u32`).declareVariables(...a)}
  ${e.mainStart()}
  ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let outputIndices = ${i.offsetToIndices(`global_idx`)};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${r.getByIndices(`vec2<u32>(batch, channel)`)};
      let value = ${n.getByOffset(`global_idx`)} * ${i.type.value}(scale_shift.x) + ${i.type.value}(scale_shift.y);
      ${i.setByOffset(`global_idx`,`value`)};
  }`}},{inputs:[t[0],u]})},lb=(e,t,n)=>{let r=t[0].dims,i=r,a=r[0],o=r[r.length-1],s=G.sizeFromDimension(r,1)/o,c=vm(o),l=G.size(i)/c,u=[{type:12,data:s},{type:12,data:Math.floor(o/c)}],d=[`type`,`type`],f=!1,p=[0,r.length-1];for(let e=0;e<r.length-2;e++)f||=r[e+1]!==1,p.push(e+1);f&&=r[r.length-1]!==1;let m=f?e.compute(Pm(e.inputs[0],p),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:r.length},(e,t)=>r[p[t]])),h=sb(e,m,t[1],t[2],a,s,o,n.epsilon);e.compute({name:`InstanceNormalizationNHWC`,shaderCache:{hint:`${c}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:i,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:e=>{let n=gm(t[0].dataType),r=c===1?`vec2f`:`mat${c}x2f`,a=e=>{let t=e===0?`x`:`y`,r=c===1?`f32`:`vec${c}f`;switch(c){case 1:return`${n}(${r}(scale.${t}))`;case 2:return`vec2<${n}>(${r}(scale[0].${t}, scale[1].${t}))`;case 4:return`vec4<${n}>(${r}(scale[0].${t}, scale[1].${t}, scale[2].${t}, scale[3].${t}))`;default:throw Error(`Not supported compoents ${c}`)}},o=J(`input`,t[0].dataType,t[0].dims,c),s=Y(`output`,t[0].dataType,i,c);return`
  @group(0) @binding(0) var<storage, read> input : array<${o.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${r}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${s.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${e.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${a(0)}, ${a(1)});
  }`}},{inputs:[t[0],h]})},ub=(e,t)=>{t.format===`NHWC`?lb(e,e.inputs,t):cb(e,e.inputs,t)}}),hb=U(()=>{"use strict";W(),pm(),Dm(),fb=e=>{if(!e||e.length<2)throw Error(`layerNorm requires at least 2 inputs.`)},pb=(e,t,n)=>{let r=t.simplified,i=e[0].dims,a=e[1],o=!r&&e[2],s=i,c=G.normalizeAxis(t.axis,i.length),l=G.sizeToDimension(i,c),u=G.sizeFromDimension(i,c),d=G.size(a.dims),f=o?G.size(o.dims):0;if(d!==u||o&&f!==u)throw Error(`Size of X.shape()[axis:] == ${u}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${d} and bias size of ${f}`);let p=[];for(let e=0;e<i.length;++e)e<c?p.push(i[e]):p.push(1);let m=vm(u),h=[`type`,`type`],g=[{type:12,data:l},{type:1,data:u},{type:12,data:Math.floor(u/m)},{type:1,data:t.epsilon}];o&&h.push(`type`);let _=n>1,v=n>2,y=t=>{let n=gm(e[0].dataType),i=[J(`x`,e[0].dataType,e[0].dims,m),J(`scale`,a.dataType,a.dims,m)];return o&&i.push(J(`bias`,o.dataType,o.dims,m)),i.push(Y(`output`,e[0].dataType,s,m)),_&&i.push(Y(`mean_data_output`,1,p)),v&&i.push(Y(`inv_std_output`,1,p)),`
  ${t.registerUniforms([{name:`norm_count`,type:`u32`},{name:`norm_size`,type:`f32`},{name:`norm_size_vectorized`,type:`u32`},{name:`epsilon`,type:`f32`}]).declareVariables(...i)}
  ${t.mainStart()}
    ${t.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.norm_count`)}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ym(`f32`,m)};
    var mean_square_vector = ${ym(`f32`,m)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${bm(n,m,`x[h + offset]`)};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${xm(`mean_vector`,m)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${xm(`mean_square_vector`,m)} / uniforms.norm_size ${r?``:`- mean * mean`} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${bm(n,m,`x[j + offset]`)};
      let f32scale = ${bm(n,m,`scale[j]`)};
      output[j + offset] = ${i[0].type.value}((f32input ${r?``:`- mean`}) * inv_std_dev * f32scale
        ${o?`+ ${bm(n,m,`bias[j]`)}`:``}
      );
    }

    ${_?`mean_data_output[global_idx] = mean`:``};
    ${v?`inv_std_output[global_idx] = inv_std_dev`:``};
  }`},b=[{dims:s,dataType:e[0].dataType}];return _&&b.push({dims:p,dataType:1}),v&&b.push({dims:p,dataType:1}),{name:`LayerNormalization`,shaderCache:{hint:`${m};${n};${r}`,inputDependencies:h},getRunData:()=>({outputs:b,dispatchGroup:{x:Math.ceil(l/64)},programUniforms:g}),getShaderSource:y}},mb=(e,t)=>{fb(e.inputs),e.compute(pb(e.inputs,t,e.outputCount))}}),vb=U(()=>{"use strict";pm(),j_(),B_(),gb=e=>{if(!e||e.length!==2)throw Error(`MatMul requires 2 inputs.`);if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw Error(`shared dimension does not match.`)},_b=e=>{gb(e.inputs);let t=cm.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw Error(`Can't use matmul on the given tensors`);let n=t[t.length-1],r=e.inputs[0].dims[e.inputs[0].dims.length-1];if(n<8&&r<8)e.compute(A_(e.inputs,{activation:``},t));else{let i=t[t.length-2],a=G.size(e.inputs[0].dims.slice(0,-2)),o=G.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&i===1&&o===1){let i=e.inputs[0].reshape([1,a,r]),o=e.inputs[1].reshape([1,r,n]),s=[1,a,n],c=[i,o];e.compute(z_(c,{activation:``},t,s),{inputs:c})}else e.compute(z_(e.inputs,{activation:``},t))}}}),wb=U(()=>{"use strict";W(),pm(),om(),Dm(),yb=(e,t)=>{if(e.length<3||e.length>4)throw Error(`MatMulNBits requires 3 or 4 inputs`);let n=e[0],r=n.dims.length;if(n.dims[r-1]!==t.k)throw Error(`The last dim of input shape does not match the k value`);let i=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,o=e[1];if(!G.areEqual(o.dims,[t.n,i,a]))throw Error(`The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize`);let s=e[2].dims;if(G.size(s)!==t.n*i)throw Error(`scales input size error.`);if(e.length===4){let n=e[3].dims,r=t.bits>4?t.n*i:t.n*Math.floor((i+1)/2);if(G.size(n)!==r)throw Error(`zeroPoints input size error.`)}},bb=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=G.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=vm(t.k),f=vm(l),p=vm(o),m=s.concat([i,o]),h=i>1&&o/p%2==0?2:1,g=G.size(m)/p/h,_=[],v=[c,i,a/d],y=G.convertShape(e[1].dims).slice();y.splice(-1,1,l/f),_.push(...K(v)),_.push(...K(y)),_.push(...K(e[2].dims)),e.length===4&&_.push(...K(G.convertShape(e[3].dims)));let b=[c,i,o/p];return _.push(...K(b)),{name:`MatMulNBits`,shaderCache:{hint:`${t.blockSize};${t.bits};${d};${f};${p};${h};64`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:m,dataType:u}],dispatchGroup:{x:g},programUniforms:_}),getShaderSource:n=>{let r=v.length,i=J(`a`,e[0].dataType,r,d),a=J(`b`,12,y.length,f),o=J(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?J(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let u=b.length,m=Y(`output`,e[0].dataType,u,p),g=gm(e[0].dataType),_=(()=>{switch(d){case 1:return`array<${g}, 8>`;case 2:return`mat4x2<${g}>`;case 4:return`mat2x4<${g}>`;default:throw Error(`${d}-component is not supported.`)}})(),x=()=>{let e=`
          // reuse a data
            var input_offset = ${i.indicesToOffset(`${i.type.indices}(batch, row, word_offset)`)};
            var a_data: ${_};
            for (var j: u32 = 0; j < ${8/d}; j++) {
              a_data[j] = ${i.getByOffset(`input_offset`)};
              input_offset++;
            }
          `;for(let t=0;t<p*h;t++)e+=`
            b_value = ${f===1?`b${t}_data`:`b${t}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${_}(${Array.from({length:4},(e,t)=>`${g}(b_value_lower[${t}]), ${g}(b_value_upper[${t}])`).join(`, `)});
            b_dequantized_values = ${d===1?`${_}(${Array.from({length:8},(e,n)=>`(b_quantized_values[${n}] - ${c?`zero_point${t}`:`zero_point`}) * scale${t}`).join(`, `)});`:`(b_quantized_values - ${_}(${Array(8).fill(`${c?`zero_point${t}`:`zero_point`}`).join(`,`)})) * scale${t};`};
            workgroup_shared[local_id.x * ${h} + ${Math.floor(t/p)}]${p>1?`[${t%p}]`:``} += ${Array.from({length:8/d},(e,t)=>`${d===1?`a_data[${t}] * b_dequantized_values[${t}]`:`dot(a_data[${t}], b_dequantized_values[${t}])`}`).join(` + `)};
          `;return e},S=()=>{let e=`
            var col_index = col * ${p};
            ${c?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${g}(8);`}
            `;for(let t=0;t<p*h;t++)e+=`
            let scale${t} = ${o.getByOffset(`col_index * nBlocksPerCol + block`)};
            ${c?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point${t} = ${g}((zero_point_word) & 0xFu);`:``}
            col_index += 1;`;return e},ee=()=>{let e=`col_index = col * ${p};`;for(let t=0;t<p*h;t++)e+=`
            let b${t}_data = ${a.getByIndices(`${a.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return e+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${_};
            var b_dequantized_values: ${_};`,e};return`
        var<workgroup> workgroup_shared: array<${m.type.value}, ${h*64}>;
        ${n.declareVariables(...s,m)}
        ${n.mainStart([64,1,1])}
          let output_indices = ${m.offsetToIndices(`(global_idx / 64) * ${h}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += 64) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/d};
            ${S()}
            for (var word: u32 = 0; word < ${l}; word += ${f}) {
              ${ee()}
              for (var i: u32 = 0; i < ${f}; i++) {
                ${x()}
                word_offset += ${8/d};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${h}) {
            var output_value: ${m.type.value} = ${m.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < 64u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${h};
            }
            ${m.setByIndices(`${m.type.indices}(batch, row, col + local_id.x)`,`output_value`)};
          }
        }`}}},xb=(e,t)=>{let n=e[0].dims,r=n.length,i=n[r-2],a=t.k,o=t.n,s=n.slice(0,r-2),c=G.size(s),l=e[1].dims[2]/4,u=e[0].dataType,d=vm(t.k),f=vm(l),p=s.concat([i,o]),m=o%8==0?8:o%4==0?4:1,h=128/m,g=h*f*8,_=g/d,v=g/t.blockSize,y=G.size(p)/m,b=[],x=[c,i,a/d],S=G.convertShape(e[1].dims).slice();S.splice(-1,1,l/f),b.push(...K(x)),b.push(...K(S)),b.push(...K(e[2].dims)),e.length===4&&b.push(...K(G.convertShape(e[3].dims)));let ee=[c,i,o];return b.push(...K(ee)),{name:`BlockwiseMatMulNBits32`,shaderCache:{hint:`${t.blockSize};${d};${f};${h};${m}`,inputDependencies:Array(e.length).fill(`rank`)},getRunData:()=>({outputs:[{dims:p,dataType:u}],dispatchGroup:{x:y},programUniforms:b}),getShaderSource:n=>{let r=x.length,i=J(`a`,e[0].dataType,r,d),a=J(`b`,12,S.length,f),o=J(`scales`,e[2].dataType,e[2].dims.length),s=[i,a,o],c=e.length===4?J(`zero_points`,12,e[3].dims.length):void 0;c&&s.push(c);let l=ee.length,u=Y(`output`,e[0].dataType,l),p=gm(e[0].dataType),g=()=>{switch(d){case 1:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${p}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${p}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw Error(`${d}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${i.type.value}, ${_}>;
        var<workgroup> inter_results: array<array<${u.type.value}, ${h}>, ${m}>;
        ${n.declareVariables(...s,u)}
        ${n.mainStart([h,m,1])}
          let output_indices = ${u.offsetToIndices(`workgroup_index * ${m}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${v} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${_};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${_}; a_offset += 128)
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${i.getByIndices(`${i.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${i.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${v} + local_id.x;
            ${c?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${c.getByOffset(`zero_point_word_index`)} >> zero_point_bits_offset;
            let zero_point = ${p}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${p}(8);`}
            let scale = ${o.getByOffset(`b_row * n_blocks_per_col + block`)};
            let b_data = ${a.getByIndices(`${a.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/d};
            for (var i: u32 = 0; i < ${f}; i++) {
              ${g()}
              let b_value = ${f===1?`b_data`:`b_data[i]`};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${p}>(${Array.from({length:4},(e,t)=>`${p}(b_value_lower[${t}]), ${p}(b_value_upper[${t}])`).join(`, `)});
              let b_dequantized_values = (b_quantized_values - mat2x4<${p}>(${Array(8).fill(`zero_point`).join(`,`)})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(e,t)=>`${`dot(a_data${t}, b_dequantized_values[${t}])`}`).join(` + `)};
              word_offset += ${8/d};
            }
            workgroupBarrier();
          }

          if (local_idx < ${m}) {
            var output_value: ${u.type.value} = ${u.type.value}(0);
            for (var b = 0u; b < ${h}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${u.setByIndices(`${u.type.indices}(batch, row, col + local_idx)`,`output_value`)}
            }
          }
        }`}}},Sb=(e,t)=>{yb(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor(`intel`)&&e.adapterInfo.isArchitecture(`gen-12lp`)?e.compute(xb(e.inputs,t)):e.compute(bb(e.inputs,t))},Cb=e=>am(e)}),Pb=U(()=>{"use strict";W(),pm(),Dm(),Tb=e=>{if(!e||e.length<1)throw Error(`Too few inputs`);if(e[0].dataType!==1&&e[0].dataType!==10)throw Error(`Input type must be float or float16.`);if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw Error(`The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].`)}},Eb=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
            k = i32(${e.indicesGet(`indices`,i)}) - ${q(`uniforms.pads`,i,n)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${q(`uniforms.x_shape`,i,t)})) {
              break;
            }
            offset += k * i32(${q(`uniforms.x_strides`,i,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${r}
            value = x[offset];
          }
      `},Db=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${q(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${q(`uniforms.x_shape`,i,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${q(`uniforms.x_shape`,i,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${q(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Ob=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${q(`uniforms.pads`,i,n)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${q(`uniforms.x_shape`,i,t)})) {
                  k = i32(${q(`uniforms.x_shape`,i,t)}) - 1;
                }
                offset += k * i32(${q(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},kb=(e,t,n)=>{let r=``;for(let i=t-1;i>=0;--i)r+=`
                k = i32(${e.indicesGet(`indices`,i)}) - ${q(`uniforms.pads`,i,n)};
                if (k < 0)  {
                  k += i32(${q(`uniforms.x_shape`,i,t)}]);
                }
                if (k >= i32(${q(`uniforms.x_shape`,i,t)})) {
                  k -= i32(${q(`uniforms.x_shape`,i,t)});
                }
                offset += k * i32(${q(`uniforms.x_strides`,i,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${r}
              value = x[offset];
          `},Ab=(e,t,n)=>{switch(n.mode){case 0:return Eb(e,t,n.pads.length);case 1:return Db(e,t,n.pads.length);case 2:return Ob(e,t,n.pads.length);case 3:return kb(e,t,n.pads.length);default:throw Error(`Invalid mode`)}},jb=(e,t)=>{let n=G.padShape(e[0].dims.slice(),t.pads),r=e[0].dims,i=[{type:12,data:G.size(n)},{type:6,data:t.pads}],a=e.length>=3&&e[2].data;return t.mode===0&&i.push({type:a?e[2].dataType:1,data:t.value}),i.push(...K(e[0].dims,n)),{name:`Pad`,shaderCache:{hint:`${t.mode}${a}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(G.size(n)/64)},programUniforms:i}),getShaderSource:i=>{let o=Y(`output`,e[0].dataType,n.length),s=J(`x`,e[0].dataType,r.length),c=s.type.value,l=Ab(o,r.length,t),u=[{name:`output_size`,type:`u32`},{name:`pads`,type:`i32`,length:t.pads.length}];return t.mode===0&&u.push({name:`constant_value`,type:a?c:`f32`}),`
            ${i.registerUniforms(u).declareVariables(s,o)}
            ${i.mainStart()}
            ${i.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}

            let indices = ${o.offsetToIndices(`global_idx`)};

            var value = ${c}(0);
            ${l}
            output[global_idx] = value;
        }`}}},Mb=(e,t)=>{if(e.length>1){let n=e[1].getBigInt64Array(),r=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,i=e[0].dims.length,a=new Int32Array(2*i).fill(0);if(e.length>=4){let t=e[3].getBigInt64Array();for(let e=0;e<t.length;e++)a[Number(t[e])]=Number(n[e]),a[Number(t[e])+i]=Number(n[e+t.length])}else n.forEach((e,t)=>a[Number(t)]=Number(e));let o=[];return a.forEach(e=>o.push(e)),{mode:t.mode,value:r,pads:o}}else return t},Nb=(e,t)=>{Tb(e.inputs);let n=Mb(e.inputs,t);e.compute(jb(e.inputs,n),{inputs:[0]})}}),ex=U(()=>{"use strict";Nf(),W(),pm(),Dm(),Fb=e=>{if(Jd.webgpu.validateInputContent&&(!e||e.length!==1))throw Error(`Pool ops requires 1 input.`)},Ib=(e,t,n)=>{let r=t.format===`NHWC`,i=e.dims.slice();r&&i.splice(1,0,i.pop());let a=Object.hasOwnProperty.call(t,`dilations`),o=t.kernelShape.slice(),s=t.strides.slice(),c=a?t.dilations.slice():[],l=t.pads.slice();lm.adjustPoolAttributes(n,i,o,s,c,l);let u=lm.computePoolOutputShape(n,i,s,c,o,l,t.autoPad),d=Object.assign({},t);a?Object.assign(d,{kernelShape:o,strides:s,pads:l,dilations:c,cacheKey:t.cacheKey}):Object.assign(d,{kernelShape:o,strides:s,pads:l,cacheKey:t.cacheKey});let f=u.slice();return f.push(f.splice(1,1)[0]),[d,r?f:u]},Lb=(e,t)=>{let n=t.format===`NHWC`,r=G.size(e),i=G.size(t.kernelShape),a=[{type:12,data:r},{type:12,data:i}],o=[{name:`outputSize`,type:`u32`},{name:`kernelSize`,type:`u32`}];if(t.kernelShape.length<=2){let e=t.kernelShape[t.kernelShape.length-1],n=t.strides[t.strides.length-1],r=t.pads[t.pads.length/2-1],i=t.pads[t.pads.length-1],s=!!(r+i);a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kw`,type:`u32`},{name:`sw`,type:`u32`},{name:`pwStart`,type:`u32`},{name:`pwEnd`,type:`u32`});let c=!1;if(t.kernelShape.length===2){let e=t.kernelShape[t.kernelShape.length-2],n=t.strides[t.strides.length-2],r=t.pads[t.pads.length/2-2],i=t.pads[t.pads.length-2];c=!!(r+i),a.push({type:12,data:e},{type:12,data:n},{type:12,data:r},{type:12,data:i}),o.push({name:`kh`,type:`u32`},{name:`sh`,type:`u32`},{name:`phStart`,type:`u32`},{name:`phEnd`,type:`u32`})}return[a,o,!0,s,c]}else{if(n)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let e=G.computeStrides(t.kernelShape);return a.push({type:12,data:e},{type:12,data:t.pads},{type:12,data:t.strides}),o.push({name:`kernelStrides`,type:`u32`,length:e.length},{name:`pads`,type:`u32`,length:t.pads.length},{name:`strides`,type:`u32`,length:t.strides.length}),[a,o,!!t.pads.reduce((e,t)=>e+t),!1,!1]}},Rb=(e,t,n,r,i,a,o,s,c,l,u,d)=>{let f=i.format===`NHWC`,p=t.type.value,m=Y(`output`,t.type.tensor,r);if(i.kernelShape.length<=2){let r=``,l=``,h=``,g=n-(f?2:1);if(r=u?`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${g}] < 0 || xIndices[${g}]
                      >= uniforms.x_shape[${g}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`:`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${g}] = indices[${g}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset(`xIndices`)}];
                  ${a}
                }`,i.kernelShape.length===2){let e=n-(f?3:2);l=d?`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${e}] < 0 || xIndices[${e}] >= uniforms.x_shape[${e}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${e}] = indices[${e}] * uniforms.sh - uniforms.phStart + j;
                `,h=`
              }
            `}return`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}

              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var value = ${p}(${s});
              var pad = 0;
              ${l}
              ${r}
              ${h}
              ${o}

              output[global_idx] = value;
            }`}else{if(f)throw Error(`Pooling with kernelShape.length > 2 is not supported for NHWC format.`);let r=i.kernelShape.length,u=i.pads.length,d=``;return d=l?`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset(`xIndices`)}];
                ${a}
              }`:`
              }
              let x_val = x[${t.indicesToOffset(`xIndices`)}];
              ${a}
            `,`
            ${e.registerUniforms(c).declareVariables(t,m)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
              let indices = ${m.offsetToIndices(`global_idx`)};
              var xIndices = ${m.offsetToIndices(`global_idx`)};

              var offsets: array<u32, ${r}>;

              var value = ${p}(${s});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${r-1}u; j++) {
                  offsets[j] = offset / ${q(`uniforms.kernelStrides`,`j`,r)};
                  offset -= offsets[j] * ${q(`uniforms.kernelStrides`,`j`,r)};
                }
                offsets[${r-1}] = offset;

                isPad = false;
                for (var j = ${n-r}u; j < ${n}u; j++) {
                  xIndices[j] = indices[j] * ${q(`uniforms.strides`,`j - ${n-r}u`,r)}
                    + offsets[j - ${n-r}u] - ${q(`uniforms.pads`,`j - 2u`,u)};
                  ${d}
              }
              ${o}

              output[global_idx] = value;
            }`}},zb=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Bb=e=>`${zb(e)};${e.countIncludePad}`,Vb=e=>`${zb(e)};${e.storageOrder};${e.dilations}`,Hb=e=>({format:e.format,autoPad:[`NOTSET`,`VALID`,`SAME_UPPER`,`SAME_LOWER`][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Ub=(e,t,n,r)=>{let[i,a]=Ib(t,r,n),o=J(`x`,t.dataType,t.dims.length),s=o.type.value,c=``;i.countIncludePad?c+=`value /= ${s}(uniforms.kernelSize);`:c+=`value /= ${s}(i32(uniforms.kernelSize) - pad);`;let[l,u,d,f,p]=Lb(a,i);return l.push(...K(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${d};${f};${p}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(G.size(a)/64)},programUniforms:l}),getShaderSource:e=>Rb(e,o,t.dims.length,a.length,i,`value += x_val;`,c,0,u,d,f,p)}},Wb=e=>{let t=e.count_include_pad!==0,n=Hb(e);if(n.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for AveragePool`);let r={countIncludePad:t,...n,cacheKey:``};return{...r,cacheKey:Bb(r)}},Gb=(e,t)=>{Fb(e.inputs),e.compute(Ub(`AveragePool`,e.inputs[0],!1,t))},Kb={autoPad:``,ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},qb=e=>{let t=e.format;return{format:t,...Kb,cacheKey:t}},Jb=(e,t)=>{Fb(e.inputs),e.compute(Ub(`GlobalAveragePool`,e.inputs[0],!0,t))},Yb=(e,t,n,r)=>{let[i,a]=Ib(t,r,n),o=J(`x`,t.dataType,t.dims.length),s=[`rank`],[c,l,u,d,f]=Lb(a,i);return c.push(...K(t.dims,a)),{name:e,shaderCache:{hint:`${r.cacheKey};${u};${d};${f}`,inputDependencies:s},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(G.size(a)/64)},programUniforms:c}),getShaderSource:e=>Rb(e,o,t.dims.length,a.length,i,`
      value = max(x_val, value);
    `,``,t.dataType===10?-65504:-1e5,l,u,d,f)}},Xb=(e,t)=>{Fb(e.inputs),e.compute(Yb(`MaxPool`,e.inputs[0],!1,t))},Zb=e=>{let t=e.storage_order,n=e.dilations,r=Hb(e);if(t!==0)throw Error(`column major storage order is not yet supported for MaxPool`);if(r.ceilMode!==0)throw Error(`using ceil() in shape computation is not yet supported for MaxPool`);let i={storageOrder:t,dilations:n,...r,cacheKey:``};return{...i,cacheKey:Vb(i)}},Qb=e=>{let t=e.format;return{format:t,...Kb,cacheKey:t}},$b=(e,t)=>{Fb(e.inputs),e.compute(Yb(`GlobalMaxPool`,e.inputs[0],!0,t))}}),ax=U(()=>{"use strict";W(),pm(),om(),Dm(),tx=(e,t)=>{if(e.length<2||e.length>3)throw Error(`DequantizeLinear requires 2 or 3 inputs.`);if(e.length===3&&e[1].dims===e[2].dims)throw Error(`x-scale and x-zero-point must have the same shape.`);if(e.length===3&&e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[0].dataType===6&&e.length>2)throw Error(`In the case of dequantizing int32 there is no zero point.`);if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw Error(`scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.`);if(e.length>2){if(e[0].dataType!==e[2].dataType)throw Error(`x and x-zero-point must have the same data type.`);if(e[1].dims.length!==e[2].dims.length)throw Error(`scale and zero-point inputs must have the same rank.`);if(!e[1].dims.map((t,n)=>t===e[2].dims[n]).reduce((e,t)=>e&&t,!0))throw Error(`scale and zero-point inputs must have the same shape.`)}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw Error(`blockSize must be set only for block quantization.`);if(!e[1].dims.map((n,r)=>r===t.axis||n===e[0].dims[r]).reduce((e,t)=>e&&t,!0))throw Error(`For block qunatization, scale input shape to match the input shape except for the axis`);if(e[1].dims.length!==e[0].dims.length)throw Error(`For block qunatization the scale input rank must be the same as the x rank.`);let n=e[0].dims[t.axis],r=e[1].dims[t.axis];if(t.blockSize<Math.ceil(n/r)||t.blockSize>Math.ceil(n/(r-1)-1))throw Error(`blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].`)}},nx=(e,t)=>{let n=G.normalizeAxis(t.axis,e[0].dims.length),r=e[0].dataType,i=r===3,a=e[0].dims,o=e[1].dataType,s=G.size(a),c=r===3||r===2,l=c?[Math.ceil(G.size(e[0].dims)/4)]:e[0].dims,u=e[1].dims,d=e.length>2?e[2]:void 0,f=d?c?[Math.ceil(G.size(d.dims)/4)]:d.dims:void 0,p=u.length===0||u.length===1&&u[0]===1,m=p===!1&&u.length===1,h=vm(s),g=p&&(!c||h===4),_=g?h:1,v=g&&!c?h:1,y=J(`input`,c?12:r,l.length,v),b=J(`scale`,o,u.length),x=d?J(`zero_point`,c?12:r,f.length):void 0,S=Y(`output`,o,a.length,_),ee=[y,b];x&&ee.push(x);let te=[l,u];d&&te.push(f);let C=[{type:12,data:s/_},{type:12,data:n},{type:12,data:t.blockSize},...K(...te,a)];return{name:`DequantizeLinear`,shaderCache:{hint:t.cacheKey,inputDependencies:x?[`rank`,`rank`,`rank`]:[`rank`,`rank`]},getShaderSource:e=>`
      ${e.registerUniforms([{name:`output_size`,type:`u32`},{name:`axis`,type:`u32`},{name:`block_size`,type:`u32`}]).declareVariables(...ee,S)}
      ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
          let output_indices = ${S.offsetToIndices(`global_idx`)};

          // Set input x
          ${c?`
            let input = ${y.getByOffset(`global_idx / 4`)};
            let x_vec = ${i?`unpack4xI8(input)`:`unpack4xU8(input)`};
            let x_value = ${_===1?`x_vec[global_idx % 4]`:`x_vec`};`:`let x_value = ${y.getByOffset(`global_idx`)};`};

          // Set scale input
          ${p?`let scale_value= ${b.getByOffset(`0`)}`:m?`
            let scale_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
            let scale_value= ${b.getByOffset(`scale_index`)};`:`
            var scale_indices: ${b.type.indices} = output_indices;
            let index = ${b.indicesGet(`scale_indices`,`uniforms.axis`)} / uniforms.block_size;
            ${b.indicesSet(`scale_indices`,`uniforms.axis`,`index`)};
            let scale_value= ${b.getByIndices(`scale_indices`)};`};

          // Set zero-point input
          ${x?p?c?`
                let zero_point_input = ${x.getByOffset(`0`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${x.getByOffset(`0`)}`:m?c?`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_input = ${x.getByOffset(`zero_point_index / 4`)};
                let zero_point_vec =  ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${S.indicesGet(`output_indices`,`uniforms.axis`)};
                let zero_point_value = ${x.getByOffset(`zero_point_index`)};`:c?`
                let zero_point_offset = ${b.indicesToOffset(`scale_indices`)};
                let zero_point_input = ${x.getByOffset(`zero_point_offset / 4`)};
                let zero_point_vec = ${i?`unpack4xI8(zero_point_input)`:`unpack4xU8(zero_point_input)`};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${x.getByIndices(`scale_indices`)};`:`let zero_point_value = ${c?i?`i32`:`u32`:y.type.value}(0);`};
      // Compute and write output
      ${S.setByOffset(`global_idx`,`${S.type.value}(x_value - zero_point_value) * scale_value`)};
      }`,getRunData:()=>({outputs:[{dims:a,dataType:o}],dispatchGroup:{x:Math.ceil(s/_/64),y:1,z:1},programUniforms:C})}},rx=(e,t)=>{tx(e.inputs,t),e.compute(nx(e.inputs,t))},ix=e=>am({axis:e.axis,blockSize:e.blockSize})}),lx=U(()=>{"use strict";Nf(),W(),Dm(),ox=(e,t,n)=>{if(e===t||e<t&&n<0||e>t&&n>0)throw Error(`Range these inputs' contents are invalid.`)},sx=(e,t,n,r)=>{let i=Math.abs(Math.ceil((t-e)/n)),a=[i],o=i,s=[{type:12,data:o},{type:r,data:e},{type:r,data:n},...K(a)];return{name:`Range`,shaderCache:{hint:`${r}`},getShaderSource:e=>{let t=Y(`output`,r,a.length),n=t.type.value,i=[{name:`outputSize`,type:`u32`},{name:`start`,type:n},{name:`delta`,type:n}];return`
        ${e.registerUniforms(i).declareVariables(t)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
        output[global_idx] = uniforms.start + ${n}(global_idx) * uniforms.delta;
      }`},getRunData:()=>({outputs:[{dims:a,dataType:r}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:s})}},cx=e=>{let t=0,n=0,r=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],n=e.inputs[1].getInt32Array()[0],r=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],n=e.inputs[1].getFloat32Array()[0],r=e.inputs[2].getFloat32Array()[0]),Jd.webgpu.validateInputContent&&ox(t,n,r),e.compute(sx(t,n,r,e.inputs[0].dataType),{inputs:[]})}}),mx=U(()=>{"use strict";W(),pm(),om(),Dm(),ux=(e,t,n,r)=>{if(e!==`none`&&r!==`i32`&&r!==`u32`&&r!==`f32`)throw Error(`Input ${r} is not supported with reduction ${e}.`);let i=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case`none`:return`${t}=${n};`;case`add`:return r===`i32`||r===`u32`?`atomicAdd(&${t}, bitcast<${r}>(${n}));`:`
              ${i}bitcast<${r}>(oldValue) + (${n})${a}`;case`max`:return r===`i32`||r===`u32`?`atomicMax(&${t}, bitcast<${r}>(${n}));`:`
                ${i}max(bitcast<f32>(oldValue), (${n}))${a}`;case`min`:return r===`i32`||r===`u32`?`atomicMin(&${t}, bitcast<${r}>(${n}));`:`${i}min(bitcast<${r}>(oldValue), (${n}))${a}`;case`mul`:return`${i}(bitcast<${r}>(oldValue) * (${n}))${a}`;default:throw Error(`Reduction ${e} is not supported.`)}},dx=(e,t)=>{let n=e[0].dims,r=e[1].dims,i=n,a=Math.ceil(G.size(r)/1),o=r[r.length-1],s=G.sizeFromDimension(n,o),c=[{type:12,data:a},{type:12,data:o},{type:12,data:s},...K(e[1].dims,e[2].dims,i)];return{name:`ScatterND`,shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:[`rank`,`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:c}),getShaderSource:n=>{let a=J(`indices`,e[1].dataType,e[1].dims.length),o=J(`updates`,e[2].dataType,e[2].dims.length,1),s=t.reduction!==`none`&&t.reduction!==``?Cm(`output`,e[0].dataType,i.length):Y(`output`,e[0].dataType,i.length,1);return`
      ${n.registerUniform(`output_size`,`u32`).registerUniform(`last_index_dimension`,`u32`).registerUniform(`num_updates_elements`,`u32`).declareVariables(a,o,s)}
      ${n.mainStart()}
        ${n.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
  var hasDuplicates = false;
  if (${t.reduction===`none`}) {
    let n = ${G.size(r)};
    for (var i = 0; i < n; i = i + 1) {
      for (var j = i + 1; j < n; j = j + 1) {
        var index_i = i32(indices[i].x);
        var index_j = i32(indices[j].x);
        if (index_i == index_j) {
          hasDuplicates = true;
          break;
        }
      }
      if (hasDuplicates) {
        break;
      }
    }
  }

  var data_offset = 0u;
  var indices_start = uniforms.last_index_dimension * global_idx;
  if (${t.reduction===`none`} && hasDuplicates) {
    if (global_idx != 0u) {
      return;
    }
    indices_start = 0u;
  }
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start + uniforms.last_index_dimension];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${ux(t.reduction,`output[data_offset + i]`,`value`,s.type.value)}
  }

      }`}}},fx=e=>am({reduction:e.reduction}),px=(e,t)=>{e.compute(dx(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),Fx=U(()=>{"use strict";W(),pm(),om(),Dm(),hx=(e,t)=>{if(e.every(e=>e>0||(()=>{throw Error(`Resize requires scales input values to be positive`)})),e.length>0){if(t.mode===`linear`){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode===`cubic`&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw Error(`Resize requires scales input size to be 2 or 4 for cubic mode`)}},gx=(e,t,n)=>{t.every(e=>e>=0&&e<n||(()=>{throw Error(`Resize requires axes input values to be positive and less than rank`)}));let r=Array(n).fill(1);return t.forEach((t,n)=>r[t]=e[n]),r},_x=(e,t,n,r,i,a)=>{let[o,s,c]=n>10?[1,2,3]:[-1,e.length>1?1:-1,-1],l=e[0].dims.length;if(o>0&&e.length>o&&e[o].dims.length>0)e[o].getFloat32Array().forEach(e=>a.push(e));else if(t.coordinateTransformMode===`tf_crop_and_resize`)throw Error(`Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize`);if(s>0&&e.length>s&&e[s].dims.length===1&&e[s].dims[0]>0){if(e[s].getFloat32Array().forEach(e=>r.push(e)),r.length!==0&&r.length!==l&&n>=18&&r.length!==t.axes.length)throw Error(`Resize requires scales input size to be same as input rank or axes size for opset 18 and up`);hx(r,t),t.axes.length>0&&gx(r,t.axes,l).forEach((e,t)=>r[t]=e)}if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0&&(e[c].getBigInt64Array().forEach(e=>i.push(Number(e))),i.length!==0&&i.length!==l&&n>=18&&i.length!==t.axes.length))throw Error(`Resize requires sizes input size to be same as input rank or axes size for opset 18 and up`);if(t.axes.length>0){if(r.length!==0&&r.length!==t.axes.length)throw Error(`Resize requires "scales" input size to be of axes rank when axes attributes is specified`);if(i.length!==0&&i.length!==t.axes.length)throw Error(`Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified`)}if(typeof r<`u`&&typeof i<`u`&&r.length>0&&i.length>l)throw Error(`Resize requires only of scales or sizes to be specified`)},vx=(e,t,n,r)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${r}(big / (${n}));
  let fract = ${r}(big % (${n})) / ${r}(${n});
  return whole + fract;
`,yx=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case`asymmetric`:return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${vx(`xResized`,`lengthOriginal`,`lengthResized`,t)}
          }
        `;case`pytorch_half_pixel`:return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case`tf_half_pixel_for_nn`:return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case`align_corners`:return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${vx(`xResized`,`lengthOriginal - 1`,`lengthResized - 1`,t)}
                  }`;case`tf_crop_and_resize`:return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case`half_pixel_symmetric`:return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case`half_pixel`:return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw Error(`Coordinate transform mode ${e} is not supported`)}})()+`}`,bx=(e,t,n)=>`fn getNearestPixelFromOriginal(xOriginal: ${n}, isDownSample: bool) -> ${n} {`+(()=>{switch(e){case`round_prefer_ceil`:return`if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }`;case`floor`:return`return floor(xOriginal);`;case`ceil`:return`return ceil(xOriginal);`;case`round_prefer_floor`:return`if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }`;default:if(t<11)return`if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }`;throw Error(`Nearest mode ${e} is not supported`)}})()+`}`,xx=(e,t,n)=>{let r=Array(n).fill(0).concat(Array(n).fill(1)),i=e.length===0?r:e.slice();return t.length>0?(t.forEach((e,a)=>{r[e]=i[a],r[a+n]=i[t.length+a]}),r):i},Sx=(e,t,n,r)=>{let i=[];if(n.length>0)if(r.length>0){if(e.forEach(e=>i.push(e)),Math.max(...r)>e.length)throw Error(`axes is out of bound`);r.forEach((e,t)=>i[e]=n[t])}else n.forEach(e=>i.push(e));else{if(t.length===0)throw Error(`Resize requires either scales or sizes.`);i=e.map((e,n)=>Math.round(e*t[n]))}return i},Cx=(e,t,n)=>{let r=(()=>{switch(n.keepAspectRatioPolicy){case`not_larger`:return n.axes.length>0?Math.min(...n.axes.map(e=>t[e]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case`not_smaller`:return n.axes.length>0?Math.max(...n.axes.map(e=>t[e]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw Error(`Keep aspect ratio policy ${n.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let i=e.slice();return n.axes.length>0?(n.axes.forEach(e=>t[e]=r),n.axes.forEach(n=>i[n]=Math.round(e[n]*t[n]))):(t.fill(r,0,t.length),i.forEach((e,n)=>i[n]=Math.round(e*t[n]))),i},wx=(e,t,n,r,i)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${n.length}> {
      var original_indices: array<${e.type.value}, ${n.length}>;
      for (var i:u32 = 0; i < ${n.length}; i++) {
        var output_index = ${e.indicesGet(`output_indices`,`i`)};
        var scale = ${q(`uniforms.scales`,`i`,r)};
        var roi_low = ${q(`uniforms.roi`,`i`,i)};
        var roi_hi = ${q(`uniforms.roi`,`i + ${t.length}`,i)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${q(`uniforms.input_shape`,`i`,t.length)};
          var output_shape_i = ${q(`uniforms.output_shape`,`i`,n.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,Tx=(e,t,n,r,i,a,o)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${t.indicesGet(`output_indices`,`i`)};
        var input_index: u32;
        var scale = ${q(`uniforms.scales`,`i`,i)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${q(`uniforms.roi`,`i`,a)};
          var roi_hi = ${q(`uniforms.roi`,`i + ${n.length}`,a)};
          var input_shape_i = ${q(`uniforms.input_shape`,`i`,n.length)};
          var output_shape_i = ${q(`uniforms.output_shape`,`i`,r.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${o} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet(`input_indices`,`i`,`input_index`)}
      }
      return input_indices;
    }`,Ex=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet(`input_indices`,`i`)};
        if (input_index < 0 || input_index >= ${q(`uniforms.input_shape`,`i`,t.length)}) {
          return false;
        }
      }
      return true;
    }`,Dx=(e,t,n,r)=>e.rank>r?`
    ${e.indicesSet(`input_indices`,t,`channel`)};
    ${e.indicesSet(`input_indices`,n,`batch`)};
`:``,Ox=(e,t,n,r,i)=>{let[a,o,s,c]=n.length===2?[-1,0,1,-1]:[0,2,3,1],l=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${l} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(row, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(col, ${n[s]} - 1))`)};
      ${Dx(e,c,a,2)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${l} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${l} = originalIndices[${o}];
      var col:${l} = originalIndices[${s}];
      ${r?`if (row < 0 || row > (${n[o]} - 1) || col < 0 || col > (${n[s]} - 1)) {
        return ${i};
      }`:``};
      row = max(0, min(row, ${n[o]} - 1));
      col = max(0, min(col, ${n[s]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${n.length>2?`u32(originalIndices[${c}])`:`0`};
      var batch: u32 =  ${n.length>2?`u32(originalIndices[${a}])`:`0`};
      var x11: ${l} = getInputValue(batch, channel, row1, col1);
      var x12: ${l} = getInputValue(batch, channel, row1, col2);
      var x21: ${l} = getInputValue(batch, channel, row2, col1);
      var x22: ${l} = getInputValue(batch, channel, row2, col2);
      var dx1: ${l} = abs(row - ${l}(row1));
      var dx2: ${l} = abs(${l}(row2) - row);
      var dy1: ${l} = abs(col - ${l}(col1));
      var dy2: ${l} = abs(${l}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},kx=(e,t,n,r,i,a,o,s,c,l)=>{let[u,d]=n.length===2?[0,1]:[2,3],f=e.type.value,p=o=>{let d=o===u?`row`:`col`;return`
      fn ${d}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${f} {
        var output_index = ${t.indicesGet(`output_indices`,o)};
        var originalIdx: ${f} = getOriginalCoordinateFromResizedCoordinate(output_index, ${i[o]},
        ${r[o]}, ${n[o]}, ${a[o]}, ${a[o]} + ${n.length});
        var fractOriginalIdx: ${f} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${s} && (originalIdx < 0 || originalIdx > (${n[o]} - 1))) {
          return ${c};
        }
        var data: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${d}: ${f} = originalIdx + ${f}(i);
          if (${d} < 0 || ${d} >= ${n[o]}) {
            ${l?`coefs[i + 1] = 0.0;
                        continue;`:s?`return ${c};`:`${d} = max(0, min(${d}, ${n[o]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet(`input_indices_copy`,o,`u32(${d})`)};
          data[i + 1] = ${o===u?e.getByIndices(`input_indices_copy`):`rowCubicInterpolation(input_indices_copy, output_indices)`};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${p(u)};
    ${p(d)};
  fn getCubicInterpolationCoefs(s: ${f}) -> array<${f}, 4> {
    var absS = abs(s);
    var coeffs: array<${f}, 4> = array<${f}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${f} = 1.0 - absS;
    var twoMinusAbsS: ${f} = 2.0 - absS;
    var onePlusAbsS: ${f} = 1.0 + absS;
    coeffs[0] = ((${o} * onePlusAbsS - 5 * ${o}) * onePlusAbsS + 8 * ${o}) * onePlusAbsS - 4 * ${o};
    coeffs[1] = ((${o} + 2) * absS - (${o} + 3)) * absS * absS + 1;
    coeffs[2] = ((${o} + 2) * oneMinusAbsS - (${o} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${o} * twoMinusAbsS - 5 * ${o}) * twoMinusAbsS + 8 * ${o}) * twoMinusAbsS - 4 * ${o};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${f}, 4>, coefs: array<${f}, 4>) -> ${f} {
    var coefsSum: ${f} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${f} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Ax=(e,t,n,r,i)=>{let[a,o,s,c,l]=n.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],u=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${u} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet(`input_indices`,o,`max(0, min(depth, ${n[o]} - 1))`)};
      ${e.indicesSet(`input_indices`,s,`max(0, min(height, ${n[s]} - 1))`)};
      ${e.indicesSet(`input_indices`,c,`max(0, min(width, ${n[c]} - 1))`)};
      ${Dx(e,l,a,3)}
      return ${e.getByIndices(`input_indices`)};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${u} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${u} = originalIndices[${o}];
      var height:${u} = originalIndices[${s}];
      var width:${u} = originalIndices[${c}];
      ${r?`if (depth < 0 || depth > (${n[o]} - 1) || height < 0 || height > (${n[s]} - 1) || width < 0 || (width > ${n[c]} - 1)) {
      return ${i};
        }`:``};

    depth = max(0, min(depth, ${n[o]} - 1));
      height = max(0, min(height, ${n[s]} - 1));
      width = max(0, min(width, ${n[c]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${n.length>3?`u32(originalIndices[${l}])`:`0`};
      var batch: u32 =  ${n.length>3?`u32(originalIndices[${a}])`:`0`};

      var x111: ${u} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${u} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${u} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${u} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${u} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${u} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${u} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${u} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${u} = abs(depth - ${u}(depth1));
      var dx2: ${u} = abs(${u}(depth2) - depth);
      var dy1: ${u} = abs(height - ${u}(height1));
      var dy2: ${u} = abs(${u}(height2) - height);
      var dz1: ${u} = abs(width - ${u}(width1));
      var dz2: ${u} = abs(${u}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},jx=(e,t,n,r,i,a)=>{let o=e.dims,s=xx(a,t.axes,o.length),c=Sx(o,r,i,t.axes),l=r.slice();r.length===0&&(l=o.map((e,t)=>e===0?1:c[t]/e),t.keepAspectRatioPolicy!==`stretch`&&(c=Cx(o,l,t)));let u=Y(`output`,e.dataType,c.length),d=J(`input`,e.dataType,o.length),f=G.size(c),p=o.length===c.length&&o.every((e,t)=>e===c[t]),m=t.coordinateTransformMode===`tf_crop_and_resize`,h=t.extrapolationValue,g=d.type.value;return{name:`Resize`,shaderCache:{hint:`${t.cacheKey}|${n}|${l.length>0?t.mode===`cubic`?l:l.length:``}|${i.length>0?i:``}|${s.length>0?s:``}|${p}|${t.mode===`nearest`?o.length:o}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${p?``:`
      ${yx(t.coordinateTransformMode,g)};
      ${(()=>{switch(t.mode){case`nearest`:return`
              ${Ex(d,o)};
              ${bx(t.nearestMode,n,g)};
              ${Tx(d,u,o,c,l.length,s.length,m)};
              `;case`linear`:return`
              ${wx(u,o,c,l.length,s.length)};
              ${(()=>{if(o.length===2||o.length===4)return`${Ox(d,u,o,m,h)}`;if(o.length===3||o.length===5)return`${Ax(d,u,o,m,h)}`;throw Error(`Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.`)})()};
            `;case`cubic`:return`
            ${(()=>{if(o.length===2||o.length===4)return`${kx(d,u,o,c,l,s,t.cubicCoeffA,m,t.extrapolationValue,t.excludeOutside)}`;throw Error(`Cubic mode only supports input dims 2 and 4 are supported in linear mode.`)})()};
            `;default:throw Error(`Invalid resize mode`)}})()};
      `}
      ${e.registerUniform(`output_size`,`u32`).registerUniform(`scales`,`f32`,l.length).registerUniform(`roi`,`f32`,s.length).declareVariables(d,u)}
      ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
        ${p?`output[global_idx] = input[global_idx];`:`
        let output_indices = ${u.offsetToIndices(`global_idx`)};
        var input_indices: ${d.type.indices};
        ${(()=>{switch(t.mode){case`nearest`:return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${d.getByIndices(`input_indices`)};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case`linear`:return`output[global_idx] = ${o.length===2||o.length===4?`bilinearInterpolation`:`trilinearInterpolation`}(output_indices);`;case`cubic`:return`output[global_idx] = bicubicInterpolation(output_indices);`;default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`,getRunData:()=>({outputs:[{dims:c,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:[{type:12,data:f},{type:1,data:l},{type:1,data:s},...K(o,c)]})}},Mx=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Nx=(e,t)=>{let n=[],r=[],i=[],a=Mx(e);if(t.antialias!==0)throw Error(`Only default value (0) for Antialias attribute is supported`);_x(e.inputs,t,a,n,r,i),e.compute(jx(e.inputs[0],t,a,n,r,i),{inputs:[0]})},Px=e=>{let t=e.antialias,n=e.axes,r=e.coordinateTransformMode,i=e.cubicCoeffA,a=e.excludeOutside!==0,o=e.extrapolationValue,s=e.keepAspectRatioPolicy,c=e.mode,l=e.nearestMode===``?`simple`:e.nearestMode;return am({antialias:t,axes:n,coordinateTransformMode:r,cubicCoeffA:i,excludeOutside:a,extrapolationValue:o,keepAspectRatioPolicy:s,mode:c,nearestMode:l})}}),zx=U(()=>{"use strict";W(),pm(),om(),Dm(),Ix=(e,t)=>{let[n,r,i,a]=e,{numHeads:o,rotaryEmbeddingDim:s}=t;if(n.dims.length!==3&&n.dims.length!==4)throw Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${n.dims.length}`);if(!G.areEqual(r.dims,[])&&!G.areEqual(r.dims,[1])&&r.dims.length!==2)throw Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${r.dims.length}`);if(i.dims.length!==2)throw Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${i.dims.length}`);if(a.dims.length!==2)throw Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!G.areEqual(i.dims,a.dims))throw Error(`Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape`);if(s>0&&o===0)throw Error(`num_heads must be provided if rotary_embedding_dim is specified`);let c=n.dims[0],l=n.dims[n.dims.length-2],u=i.dims[0],d=G.sizeFromDimension(n.dims,1)/l,f=s===0?i.dims[1]*2:d/o;if(s>f)throw Error(`rotary_embedding_dim must be less than or equal to head_size`);if(r.dims.length===2){if(c!==r.dims[0])throw Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${r.dims[0]}`);if(l!==r.dims[1])throw Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${r.dims[1]}`)}if(f/2!==i.dims[1]&&s/2!==i.dims[1])throw Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${i.dims[1]}`);if(l>u)throw Error(`Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported`)},Lx=(e,t)=>{let{interleaved:n,numHeads:r,rotaryEmbeddingDim:i,scale:a}=t,o=e[0].dims[0],s=G.sizeFromDimension(e[0].dims,1),c=e[0].dims[e[0].dims.length-2],l=s/c,u=e[2].dims[1],d=i===0?u*2:l/r,f=[o,c,l/d,d-u],p=G.computeStrides(f),m=[{type:1,data:a},{type:12,data:f},{type:12,data:p},...e[0].dims.length===3?Array({type:12,data:[s,l,d,1]}):[],...e[0].dims.length===4?Array({type:12,data:[s,d,c*d,1]}):[],...K(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)];return{name:`RotaryEmbedding`,shaderCache:{hint:am({interleaved:n}).cacheKey,inputDependencies:[`rank`,`rank`,`rank`,`rank`]},getShaderSource:t=>{let r=J(`input`,e[0].dataType,e[0].dims.length),i=J(`position_ids`,e[1].dataType,e[1].dims.length),a=J(`cos_cache`,e[2].dataType,e[2].dims.length),o=J(`sin_cache`,e[3].dataType,e[3].dims.length),s=Y(`output`,e[0].dataType,e[0].dims.length);return t.registerUniforms([{name:`scale`,type:`f32`},{name:`global_shape`,type:`u32`,length:f.length},{name:`global_strides`,type:`u32`,length:p.length},{name:`input_output_strides`,type:`u32`,length:p.length}]),`
        ${t.declareVariables(r,i,a,o,s)}

        ${t.mainStart(mm)}
          let half_rotary_emb_dim = uniforms.${a.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${t.guardAgainstOutOfBoundsWorkgroupSizes(`size`)}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${i.broadcastedIndicesToOffset(`bsnh.xy`,Y(``,i.type.tensor,2))};
            let position_id =
                u32(${i.getByOffset(`position_ids_idx`)}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${n});
            let j = i + select(half_rotary_emb_dim, 1, ${n});
            let re = ${r.getByOffset(`i`)} * ${a.get(`position_id`,`bsnh[3]`)} -
                ${r.getByOffset(`j`)} * ${o.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`i`,`re`)}
            let im = ${r.getByOffset(`i`)} * ${o.get(`position_id`,`bsnh[3]`)} +
                ${r.getByOffset(`j`)} * ${a.get(`position_id`,`bsnh[3]`)};
            ${s.setByOffset(`j`,`im`)}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${s.setByOffset(`k`,r.getByOffset(`k`))}
          }
        }`},getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(G.size(f)/mm)},programUniforms:m})}},Rx=(e,t)=>{Ix(e.inputs,t),e.compute(Lx(e.inputs,t))}}),Ux=U(()=>{"use strict";W(),pm(),Dm(),Bx=e=>{if(!e||e.length<3)throw Error(`layerNorm requires at least 3 inputs.`);let t=e[0],n=e[1],r=e[2];if(t.dataType!==n.dataType||t.dataType!==r.dataType)throw Error(`All inputs must have the same data type`);if(t.dims.length!==3&&t.dims.length!==2)throw Error(`Input must be 2D or 3D`);if(n.dims.length!==3&&n.dims.length!==2)throw Error(`Skip must be 2D or 3D`);let i=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(n.dims[n.dims.length-1]!==i)throw Error(`Skip must have the same hidden size as input`);if(n.dims[n.dims.length-2]!==a)throw Error(`Skip must have the same sequence length as input`);if(r.dims.length!==1)throw Error(`Gamma must be 1D`);if(r.dims[r.dims.length-1]!==i)throw Error(`Gamma must have the same hidden size as input`);if(e.length>3){let t=e[3];if(t.dims.length!==1)throw Error(`Beta must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Beta must have the same hidden size as input`)}if(e.length>4){let t=e[4];if(t.dims.length!==1)throw Error(`Bias must be 1D`);if(t.dims[t.dims.length-1]!==i)throw Error(`Bias must have the same hidden size as input`)}},Vx=(e,t,n,r)=>{let i=t.simplified,a=e[0].dims,o=G.size(a),s=a,c=o,l=a.slice(-1)[0],u=r?a.slice(0,-1).concat(1):[],d=!i&&e.length>3,f=e.length>4,p=r&&n>1,m=r&&n>2,h=n>3,g=vm(l),_=[{type:12,data:c},{type:12,data:g},{type:12,data:l},{type:1,data:t.epsilon}],v=t=>{let n=[{name:`output_size`,type:`u32`},{name:`components`,type:`u32`},{name:`hidden_size`,type:`u32`},{name:`epsilon`,type:`f32`}],r=[J(`x`,e[0].dataType,e[0].dims,g),J(`skip`,e[1].dataType,e[1].dims,g),J(`gamma`,e[2].dataType,e[2].dims,g)];d&&r.push(J(`beta`,e[3].dataType,e[3].dims,g)),f&&r.push(J(`bias`,e[4].dataType,e[4].dims,g)),r.push(Y(`output`,e[0].dataType,s,g)),p&&r.push(Y(`mean_output`,1,u)),m&&r.push(Y(`inv_std_output`,1,u)),h&&r.push(Y(`input_skip_bias_sum`,e[0].dataType,s,g));let a=gm(e[0].dataType),o=gm(1,g);return`

      ${t.registerUniforms(n).declareVariables(...r)}
      var<workgroup> sum_shared : array<${o}, 64>;
      var<workgroup> sum_squared_shared : array<${o}, 64>;

      ${t.mainStart([64,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / 64;

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / 64;
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == 63) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${f?`bias[offset1d + i]`:a+`(0.0)`};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${h?`input_skip_bias_sum[offset + i] = value;`:``}
          output[offset + i] = value;
          let f32_value = ${bm(a,g,`value`)};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = 64;
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${xm(`sum`,g)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${xm(`square_sum`,g)} / f32(uniforms.hidden_size) ${i?``:`- mean * mean`} + uniforms.epsilon);
        ${p?`mean_output[global_idx] = mean;`:``}
        ${m?`inv_std_output[global_idx] = inv_std_dev;`:``}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${i?``:`- ${a}(mean)`}) *
            ${a}(inv_std_dev) * gamma[offset1d + i]
            ${d?`+ beta[offset1d + i]`:``};
        }
      }`},y=[{dims:s,dataType:e[0].dataType}];return n>1&&y.push({dims:u,dataType:1}),n>2&&y.push({dims:u,dataType:1}),n>3&&y.push({dims:a,dataType:e[0].dataType}),{name:`SkipLayerNormalization`,shaderCache:{hint:`${g};${p};${m};${h}`,inputDependencies:e.map((e,t)=>`type`)},getShaderSource:v,getRunData:()=>({outputs:y,dispatchGroup:{x:Math.ceil(c/l)},programUniforms:_})}},Hx=(e,t)=>{Bx(e.inputs);let n=[0];e.outputCount>1&&n.push(-3),e.outputCount>2&&n.push(-3),e.outputCount>3&&n.push(3),e.compute(Vx(e.inputs,t,e.outputCount,!1),{outputs:n})}}),Qx=U(()=>{"use strict";W(),pm(),om(),Dm(),Wx=(e,t)=>{if(!e||e.length<1)throw Error(`too few inputs`);if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw Error(`axes, starts and ends must have the same length`)}else if(t.starts.length!==t.ends.length)throw Error(`starts and ends must have the same length`);e.slice(1).forEach((t,n)=>{if(e[n+1].dataType!==6&&e[n+1].dataType!==7)throw Error(`Input ${n} must be an array of int32 or int64`)})},Gx=(e,t)=>{let n=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(e=>n.push(Number(e)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(e=>n.push(Number(e)));else throw Error(`Input ${t} must be an array of int32 or int64`);return n},Kx=(e,t)=>{if(e.length>1){let t=Gx(e,1),n=Gx(e,2),r=Gx(e,3);return r.length===0&&(r=[...Array(e[0].dims.length).keys()]),am({starts:t,ends:n,axes:r})}else return t},qx=(e,t,n,r,i)=>{let a=e;return e<0&&(a+=n[r[t]]),i[t]<0?Math.max(0,Math.min(a,n[r[t]]-1)):Math.max(0,Math.min(a,n[r[t]]))},Jx=(e,t,n)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${n.length}; i >= 0; i--) {
            let input_shape_i = ${q(`uniforms.input_shape`,`i`,n.length)};
            let steps_i = ${q(`uniforms.steps`,`i`,n.length)};
            let signs_i = ${q(`uniforms.signs`,`i`,n.length)};
            let starts_i = ${q(`uniforms.starts`,`i`,n.length)};
            var output_index = ${t.indicesGet(`output_indices`,`i`)};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet(`input_indices`,`i`,`input_index`)};
          }
          return input_indices;
      }`,Yx=(e,t)=>{let n=e[0].dims,r=G.size(n),i=t.axes.length>0?G.normalizeAxes(t.axes,n.length):[...Array(n.length).keys()],a=Gx(e,4);a.forEach(e=>e!==0||(()=>{throw Error(`step cannot be 0`)})),a.length===0&&(a=Array(i.length).fill(1));let o=t.starts.map((e,t)=>qx(e,t,n,i,a)),s=t.ends.map((e,t)=>qx(e,t,n,i,a));if(i.length!==o.length||i.length!==s.length)throw Error(`start, ends and axes should have the same number of elements`);if(i.length!==n.length)for(let e=0;e<n.length;++e)i.includes(e)||(o.splice(e,0,0),s.splice(e,0,n[e]),a.splice(e,0,1));let c=a.map(e=>Math.sign(e));a.forEach((e,t,n)=>{if(e<0){let r=(s[t]-o[t])/e,i=o[t];o[t]=i+r*a[t],s[t]=i,n[t]=-e}});let l=n.slice(0);i.forEach((e,t)=>{l[e]=Math.ceil((s[e]-o[e])/a[e])});let u={dims:l,dataType:e[0].dataType},d=Y(`output`,e[0].dataType,l.length),f=J(`input`,e[0].dataType,e[0].dims.length),p=G.size(l),m=[{name:`outputSize`,type:`u32`},{name:`starts`,type:`u32`,length:o.length},{name:`signs`,type:`i32`,length:c.length},{name:`steps`,type:`u32`,length:a.length}],h=[{type:12,data:p},{type:12,data:o},{type:6,data:c},{type:12,data:a},...K(e[0].dims,l)];return{name:`Slice`,shaderCache:{hint:`${c.length}_${o.length}_${a.length}`,inputDependencies:[`rank`]},getShaderSource:e=>`
      ${e.registerUniforms(m).declareVariables(f,d)}
        ${Jx(f,d,n)}
        ${e.mainStart()}
          ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.outputSize`)}
          let output_indices = ${d.offsetToIndices(`global_idx`)};
          let input_indices = calculateInputIndices(output_indices);
          ${d.setByOffset(`global_idx`,f.getByIndices(`input_indices`))}
      }`,getRunData:()=>({outputs:[u],dispatchGroup:{x:Math.ceil(r/64)},programUniforms:h})}},Xx=(e,t)=>{Wx(e.inputs,t);let n=Kx(e.inputs,t);e.compute(Yx(e.inputs,n),{inputs:[0]})},Zx=e=>{let t=e.starts,n=e.ends,r=e.axes;return am({starts:t,ends:n,axes:r})}}),rS=U(()=>{"use strict";W(),pm(),om(),Lm(),Dm(),$x=e=>{if(!e||e.length!==1)throw Error(`Softmax op requires 1 input.`)},eS=(e,t)=>{let n=e.inputs[0],r=n.dims,i=G.size(r),a=r.length,o=G.normalizeAxis(t.axis,a),s=o<r.length-1,c,l=[];s?(l=Array.from({length:a},(e,t)=>t),l[o]=a-1,l[a-1]=o,c=e.compute(Pm(n,l),{inputs:[n],outputs:[-1]})[0]):c=n;let u=c.dims,d=u[a-1],f=i/d,p=vm(d),m=d/p,h=64;f===1&&(h=256);let g=(e,t)=>t===4?`max(max(${e}.x, ${e}.y), max(${e}.z, ${e}.w))`:t===2?`max(${e}.x, ${e}.y)`:t===3?`max(max(${e}.x, ${e}.y), ${e}.z)`:e,_=J(`x`,c.dataType,c.dims,p),v=Y(`result`,c.dataType,c.dims,p),y=_.type.value,b=gm(c.dataType)===`f32`?`var threadMax = ${y}(-3.402823e+38f);`:`var threadMax = ${y}(-65504.0h);`,x=e.compute({name:`Softmax`,shaderCache:{hint:`${p};${h}`,inputDependencies:[`type`]},getRunData:()=>({outputs:[{dims:u,dataType:c.dataType}],dispatchGroup:{x:f},programUniforms:[{type:6,data:m}]}),getShaderSource:e=>`
      var<workgroup> rowMaxShared : ${y};
      var<workgroup> rowSumShared : ${y};
      var<workgroup> threadShared : array<${y}, ${h}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${y} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${y}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${e.registerUniform(`packedCols`,`i32`).declareVariables(_,v)}
      ${e.mainStart(h)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${h};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${b}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${y}(${g(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${y}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${y}(${xm(`threadShared[0]`,p)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          let value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          setValue(row, col, row_stride, value);
        }
      }`},{inputs:[c],outputs:[s?-1:0]})[0];s&&e.compute(Pm(x,l),{inputs:[x]})},tS=(e,t)=>{$x(e.inputs),eS(e,t)},nS=e=>am({axis:e.axis})}),lS=U(()=>{"use strict";W(),pm(),Dm(),iS=e=>Array.from(e.getBigInt64Array(),Number),aS=e=>{if(!e||e.length!==2)throw Error(`Tile requires 2 inputs.`);if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw Error(`Tile only support float, float16, int32, and uint32 data types`);if(e[1].dataType!==7)throw Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw Error("Tile `repeats` input should be 1-D");if(iS(e[1]).length!==e[0].dims.length)throw Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},oS=(e,t)=>{let n=[];for(let r=0;r<e.length;++r)n.push(e[r]*t[r]);return n},sS=(e,t)=>{let n=e[0].dims,r=t??iS(e[1]),i=oS(n,r),a=G.size(i),o=e[0].dataType,s=J(`input`,o,n.length),c=Y(`output`,o,i.length);return{name:`Tile`,shaderCache:{hint:`${r}`,inputDependencies:[`rank`]},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...K(e[0].dims,i)]}),getShaderSource:e=>`
      const inputShape = ${s.indices(...n)};
      ${e.registerUniform(`output_size`,`u32`).declareVariables(s,c)}
      ${e.mainStart()}
      ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.output_size`)}
      let output_indices = ${c.offsetToIndices(`global_idx`)};
      var input_indices: ${s.type.indices};
      for (var i = 0; i < ${n.length}; i++) {
        let input_dim_i = ${s.indicesGet(`uniforms.input_shape`,`i`)};
        let input_dim_value = ${c.indicesGet(`output_indices`,`i`)}  % input_dim_i;

        ${s.indicesSet(`input_indices`,`i`,`input_dim_value`)}
      }
      ${c.setByOffset(`global_idx`,s.getByIndices(`input_indices`))}
    }`}},cS=e=>{aS(e.inputs),e.compute(sS(e.inputs),{inputs:[0]})}}),pS=U(()=>{"use strict";W(),pm(),Dm(),uS=(e,t,n,r,i)=>{let a=Y(`output_data`,i,n.length,4),o=J(`a_data`,t[1].dataType,t[1].dims.length,4),s=J(`b_data`,t[2].dataType,t[2].dims.length,4),c=J(`c_data`,t[0].dataType,t[0].dims.length,4),l,u=(e,t,n)=>`select(${t}, ${e}, ${n})`;if(!r)l=a.setByOffset(`global_idx`,u(o.getByOffset(`global_idx`),s.getByOffset(`global_idx`),c.getByOffset(`global_idx`)));else{let e=(e,t,n=``)=>{let r=`a_data[index_a${t}][component_a${t}]`,i=`b_data[index_b${t}][component_b${t}]`,l=`bool(c_data[index_c${t}] & (0xffu << (component_c${t} * 8)))`;return`
            let output_indices${t} = ${a.offsetToIndices(`global_idx * 4u + ${t}u`)};
            let offset_a${t} = ${o.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_b${t} = ${s.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let offset_c${t} = ${c.broadcastedIndicesToOffset(`output_indices${t}`,a)};
            let index_a${t} = offset_a${t} / 4u;
            let index_b${t} = offset_b${t} / 4u;
            let index_c${t} = offset_c${t} / 4u;
            let component_a${t} = offset_a${t} % 4u;
            let component_b${t} = offset_b${t} % 4u;
            let component_c${t} = offset_c${t} % 4u;
            ${e}[${t}] = ${n}(${u(r,i,l)});
          `};l=i===9?`
            var data = vec4<u32>(0);
            ${e(`data`,0,`u32`)}
            ${e(`data`,1,`u32`)}
            ${e(`data`,2,`u32`)}
            ${e(`data`,3,`u32`)}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:`
            ${e(`output_data[global_idx]`,0)}
            ${e(`output_data[global_idx]`,1)}
            ${e(`output_data[global_idx]`,2)}
            ${e(`output_data[global_idx]`,3)}
          `}return`
        ${e.registerUniform(`vec_size`,`u32`).declareVariables(c,o,s,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes(`uniforms.vec_size`)}
        ${l}
      }`},dS=e=>{let t=e[1].dims,n=e[2].dims,r=e[0].dims,i=e[1].dataType,a=!(G.areEqual(t,n)&&G.areEqual(n,r)),o=t,s=G.size(t);if(a){let e=cm.calcShape(cm.calcShape(t,n,!1),r,!1);if(!e)throw Error(`Can't perform where op on the given tensors`);o=e,s=G.size(o)}let c=Math.ceil(s/4);return{name:`Where`,shaderCache:{inputDependencies:[`rank`,`rank`,`rank`]},getShaderSource:t=>uS(t,e,o,a,i),getRunData:()=>({outputs:[{dims:o,dataType:i}],dispatchGroup:{x:Math.ceil(s/64/4)},programUniforms:[{type:12,data:c},...K(r,t,n,o)]})}},fS=e=>{e.compute(dS(e.inputs))}}),hS=U(()=>{"use strict";Lh(),Kh(),Zh(),tg(),Zg(),d_(),v_(),dv(),Cv(),Dv(),Nv(),Gv(),Zv(),ey(),ay(),ly(),my(),yy(),wy(),zy(),ob(),db(),hb(),vb(),wb(),qy(),Pb(),ex(),ax(),lx(),mx(),Mh(),Fx(),zx(),Ux(),Qx(),rS(),tb(),lS(),Lm(),qg(),pS(),mS=new Map([[`Abs`,[ig]],[`Acos`,[ag]],[`Acosh`,[og]],[`Add`,[t_]],[`ArgMax`,[Fh,Ih]],[`ArgMin`,[Ph,Ih]],[`Asin`,[sg]],[`Asinh`,[cg]],[`Atan`,[lg]],[`Atanh`,[ug]],[`Attention`,[Gh]],[`AveragePool`,[Gb,Wb]],[`BatchNormalization`,[Xh]],[`BiasAdd`,[eg]],[`BiasSplitGelu`,[Xg]],[`Cast`,[fg,dg]],[`Ceil`,[hg]],[`Clip`,[mg]],[`Concat`,[g_,__]],[`Conv`,[uv,ov]],[`ConvTranspose`,[Sv,vv]],[`Cos`,[gg]],[`Cosh`,[_g]],[`CumSum`,[Tv,Ev]],[`DepthToSpace`,[jv,Mv]],[`DequantizeLinear`,[rx,ix]],[`Div`,[n_]],[`Einsum`,[Uv,Wv]],[`Elu`,[yg,vg]],[`Equal`,[r_]],[`Erf`,[xg]],[`Exp`,[Sg]],[`Expand`,[Xv]],[`FastGelu`,[$v]],[`Floor`,[Cg]],[`FusedConv`,[uv,ov]],[`Gather`,[iy,ry]],[`GatherElements`,[vy,_y]],[`GatherBlockQuantized`,[fy,py]],[`GatherND`,[sy,cy]],[`Gelu`,[wg]],[`Gemm`,[Cy,Sy]],[`GlobalAveragePool`,[Jb,qb]],[`GlobalMaxPool`,[$b,Qb]],[`Greater`,[s_]],[`GreaterOrEqual`,[l_]],[`GridSample`,[Ly,Ry]],[`GroupQueryAttention`,[ab]],[`HardSigmoid`,[Mg,jg]],[`InstanceNormalization`,[ub]],[`LayerNormalization`,[mb]],[`LeakyRelu`,[Tg,vg]],[`Less`,[c_]],[`LessOrEqual`,[u_]],[`Log`,[Ug]],[`MatMul`,[_b]],[`MatMulNBits`,[Sb,Cb]],[`MaxPool`,[Xb,Zb]],[`Mul`,[i_]],[`MultiHeadAttention`,[Ky,Hy]],[`Neg`,[Dg]],[`Not`,[Eg]],[`Pad`,[Nb]],[`Pow`,[a_]],[`QuickGelu`,[Kg,vg]],[`Range`,[cx]],[`Reciprocal`,[Og]],[`ReduceMin`,[Dh]],[`ReduceMean`,[Sh]],[`ReduceMax`,[Eh]],[`ReduceSum`,[kh]],[`ReduceProd`,[Oh]],[`ReduceL1`,[Ch]],[`ReduceL2`,[wh]],[`ReduceLogSum`,[jh]],[`ReduceLogSumExp`,[Th]],[`ReduceSumSquare`,[Ah]],[`Relu`,[kg]],[`Resize`,[Nx,Px]],[`RotaryEmbedding`,[Rx]],[`ScatterND`,[px,fx]],[`Sigmoid`,[Ag]],[`Sin`,[Ng]],[`Sinh`,[Pg]],[`Slice`,[Xx,Zx]],[`SkipLayerNormalization`,[Hx]],[`Split`,[$y,eb]],[`Sqrt`,[Fg]],[`Softmax`,[tS,nS]],[`Sub`,[o_]],[`Tan`,[Ig]],[`Tanh`,[Rg]],[`ThresholdedRelu`,[Hg,vg]],[`Tile`,[cS]],[`Transpose`,[Fm,Im]],[`Where`,[fS]]])}),_S=U(()=>{"use strict";Nf(),Wp(),Dm(),gS=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,n,r,i){xf(e.programInfo.name);let a=this.backend.device,o=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let s=[];for(let e of t)s.push({binding:s.length,resource:{buffer:e.buffer}});for(let e of n)s.push({binding:s.length,resource:{buffer:e.buffer}});i&&s.push({binding:s.length,resource:i});let c=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:s,label:e.programInfo.name});if(this.backend.sessionStatus===`capturing`){let t={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:c,dispatchGroup:r};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(t)}o.setPipeline(e.computePipeline),o.setBindGroup(0,c),o.dispatchWorkgroups(...r),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType===`at-passes`)&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Sf(e.programInfo.name)}dispose(){}build(e,t){xf(e.name);let n=this.backend.device,r=[];[{feature:`shader-f16`,extension:`f16`},{feature:`subgroups`,extension:`subgroups`},{feature:`subgroups-f16`,extension:`subgroups_f16`}].forEach(e=>{n.features.has(e.feature)&&r.push(`enable ${e.extension};`)});let i=Em(t,this.backend.device.limits),a=e.getShaderSource(i),o=`${r.join(`
`)}
${i.additionalImplementations}
${a}`,s=n.createShaderModule({code:o,label:e.name});Up(`verbose`,()=>`[WebGPU] ${e.name} shader code: ${o}`);let c=n.createComputePipeline({compute:{module:s,entryPoint:`main`},layout:`auto`,label:e.name});return Sf(e.name),{programInfo:e,computePipeline:c,uniformVariablesInfo:i.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e==`number`?e:e.x,n=typeof e==`number`?1:e.y||1,r=typeof e==`number`?1:e.z||1,i=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=i&&n<=i&&r<=i)return[t,n,r];let a=t*n*r,o=Math.ceil(Math.sqrt(a));if(o>i){if(o=Math.ceil(Math.cbrt(a)),o>i)throw Error(`Total dispatch size exceeds WebGPU maximum.`);return[o,o,o]}else return[o,o,1]}}}),CS=U(()=>{"use strict";Nf(),W(),Wp(),Kp(),rm(),hS(),_S(),vS=(e,t)=>{if(t.length!==e.length)throw Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let n=[];for(let r=0;r<e.length;++r){let i=e[r].dataType;switch(t[r]){case`none`:n.push(``);break;case`type`:n.push(`${i}`);break;case`rank`:{let t=e[r].dims.length;n.push(`${i};${t}`);break}case`dims`:{let t=e[r].dims.join(`,`);n.push(`${i};${t}`);break}default:throw Error(`unsupported input dependency: ${t[r]}`)}}return n.join(`|`)},yS=(e,t,n)=>{let r=e.name;return e.shaderCache?.hint&&(r+=`[`+e.shaderCache.hint+`]`),r+=`:`+n+`:${vS(t,e.shaderCache?.inputDependencies??Array(t.length).fill(`dims`))}`,r},bS=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},xS=class{constructor(e){this.subgroupsSupported=e.features.has(`subgroups`),this.subgroupsF16Supported=e.features.has(`subgroups`);let t=e.limits;!this.subgroupsSupported||!t.minSubgroupSize||!t.maxSubgroupSize?this.subgroupSizeRange=void 0:this.subgroupSizeRange=[t.minSubgroupSize,t.maxSubgroupSize]}},SS=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus=`default`,this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw Error(`currentKernelCustomData(): currentKernelId is null. (should not happen)`);let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let n=[],r={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:n},i=e=>t.features.has(e)&&n.push(e)&&!0;i(`chromium-experimental-timestamp-query-inside-passes`)||i(`timestamp-query`),i(`shader-f16`),i(`subgroups`)&&i(`subgroups-f16`),this.device=await t.requestDevice(r),this.deviceInfo=new xS(this.device),this.adapterInfo=new bS(t.info||await t.requestAdapterInfo()),this.gpuDataManager=nm(this),this.programManager=new gS(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Vp(e.logLevel,!!e.debug),this.device.onuncapturederror=e=>{e.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${e.error.message}`)},Object.defineProperty(this.env.webgpu,`device`,{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,`adapter`,{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<`u`&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||=this.device.createCommandEncoder(),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType===`at-passes`&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&=(this.computePassEncoder.end(),null)}flush(){if(!this.commandEncoder)return;xf(),this.endComputePass();let e;this.queryType!==`none`&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!==`none`&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),n=this.pendingQueries.get(e);for(let e=0;e<t.length/2;e++){let r=n[e],i=r.kernelId,a=this.kernels.get(i),o=a.kernelType,s=a.kernelName,c=r.programName,l=r.inputTensorViews,u=r.outputTensorViews,d=t[e*2],f=t[e*2+1];typeof this.queryTimeBase>`u`&&(this.queryTimeBase=d);let p=Number(d-this.queryTimeBase),m=Number(f-this.queryTimeBase);if(!Number.isSafeInteger(p)||!Number.isSafeInteger(m))throw RangeError(`incorrect timestamp range`);if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:l.map(e=>({dims:e.dims,dataType:Op(e.dataType)})),outputsMetadata:u.map(e=>({dims:e.dims,dataType:Op(e.dataType)})),kernelId:i,kernelType:o,kernelName:s,programName:c,startTime:p,endTime:m});else{let e=``;l.forEach((t,n)=>{e+=`input[${n}]: [${t.dims}] | ${Op(t.dataType)}, `});let t=``;u.forEach((e,n)=>{t+=`output[${n}]: [${e.dims}] | ${Op(e.dataType)}, `}),console.log(`[profiling] kernel "${i}|${o}|${s}|${c}" ${e}${t}execution time: ${m-p} ns`)}yf(`GPU`,`${c}::${d}::${f}`)}e.unmap(),this.pendingQueries.delete(e)}),Sf()}run(e,t,n,r,i,a){xf(e.name);let o=[];for(let e=0;e<t.length;++e){let n=t[e].data;if(n===0)continue;let r=this.gpuDataManager.get(n);if(!r)throw Error(`no GPU data for input: ${n}`);o.push(r)}let{outputs:s,dispatchGroup:c,programUniforms:l}=e.getRunData(t),u=n.length===0?s.map((e,t)=>t):n;if(u.length!==s.length)throw Error(`Output size ${u.length} must be equal to ${s.length}.`);let d=[],f=[];for(let e=0;e<s.length;++e){if(!Number.isInteger(u[e])||u[e]<-3||u[e]>=a)throw Error(`Invalid output index: ${u[e]}`);if(u[e]===-3)continue;let t=u[e]===-1,n=u[e]===-2,o=t||n?i(s[e].dataType,s[e].dims):r(u[e],s[e].dataType,s[e].dims);if(d.push(o),o.data===0)continue;let c=this.gpuDataManager.get(o.data);if(!c)throw Error(`no GPU data for output: ${o.data}`);if(t&&this.temporaryData.push(c),n){let e=this.kernelPersistentData.get(this.currentKernelId);e||(e=[],this.kernelPersistentData.set(this.currentKernelId,e)),e.push(c)}f.push(c)}if(o.length!==t.length||f.length!==d.length){if(f.length===0)return Sf(e.name),d;throw Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let p;if(l){let e=0,t=[];l.forEach(n=>{let r=typeof n.data==`number`?[n.data]:n.data;if(r.length===0)return;let i=n.type===10?2:4,a,o;n.type===10?(o=r.length>4?16:r.length>2?8:r.length*i,a=r.length>4?16:i*r.length):(o=r.length<=2?r.length*i:16,a=16),e=Math.ceil(e/o)*o,t.push(e);let s=n.type===10?8:4;e+=r.length>4?Math.ceil(r.length/s)*a:r.length*i}),e=Math.ceil(e/16)*16;let n=new ArrayBuffer(e);l.forEach((e,r)=>{let i=t[r],a=typeof e.data==`number`?[e.data]:e.data;if(e.type===6)new Int32Array(n,i,a.length).set(a);else if(e.type===12)new Uint32Array(n,i,a.length).set(a);else if(e.type===10)new Uint16Array(n,i,a.length).set(a);else if(e.type===1)new Float32Array(n,i,a.length).set(a);else throw Error(`Unsupported uniform type: ${Op(e.type)}`)});let r=this.gpuDataManager.create(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(r.buffer,0,n,0,e),this.gpuDataManager.release(r.id),p={offset:0,size:e,buffer:r.buffer}}let m=this.programManager.normalizeDispatchGroupSize(c),h=m[1]===1&&m[2]===1,g=yS(e,t,h),_=this.programManager.getArtifact(g);if(_||(_=this.programManager.build(e,m),this.programManager.setArtifact(g,_),Up(`info`,()=>`[artifact] key: ${g}, programName: ${e.name}`)),l&&_.uniformVariablesInfo){if(l.length!==_.uniformVariablesInfo.length)throw Error(`Uniform variables count mismatch: expect ${_.uniformVariablesInfo.length}, got ${l.length} in program "${_.programInfo.name}".`);for(let e=0;e<l.length;e++){let t=l[e],n=t.type,r=typeof t.data==`number`?1:t.data.length,[i,a]=_.uniformVariablesInfo[e];if(n!==i||r!==a)throw Error(`Uniform variable ${e} mismatch: expect type ${i} with size ${a}, got type ${n} with size ${r} in program "${_.programInfo.name}".`)}}if(Up(`info`,()=>`[ProgramManager] run "${e.name}" (key=${g}) with ${m[0]}x${m[1]}x${m[2]}`),this.queryType!==`none`||this.sessionStatus===`capturing`){let e={kernelId:this.currentKernelId,programName:_.programInfo.name,inputTensorViews:t,outputTensorViews:d};this.pendingKernels.push(e),this.sessionStatus===`capturing`&&this.capturedPendingKernels.get(this.currentSessionId).push(e)}return this.programManager.run(_,o,f,m,p),Sf(e.name),d}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,n,r){let i=mS.get(e);if(!i)throw Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:r,kernelEntry:i[0],attributes:[i[1],n]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let e of t)this.gpuDataManager.release(e.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,n){let r=this.kernels.get(e);if(!r)throw Error(`kernel not created: ${e}`);let i=r.kernelType,a=r.kernelName,o=r.kernelEntry,s=r.attributes;if(this.currentKernelId!==null)throw Error(`kernel "[${i}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,s[0]&&=(s[1]=s[0](s[1]),void 0),Up(`info`,()=>`[WebGPU] Start to run kernel "[${i}] ${a}"...`);let c=this.env.debug;this.temporaryData=[];try{return c&&this.device.pushErrorScope(`validation`),o(t,s[1]),0}catch(e){return n.push(Promise.resolve(`[WebGPU] Kernel "[${i}] ${a}" failed. ${e}`)),1}finally{c&&n.push(this.device.popErrorScope().then(e=>e?`GPU validation error for kernel "[${i}] ${a}": ${e.message}`:null));for(let e of this.temporaryData)this.gpuDataManager.release(e.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,n,r){let i=this.sessionExternalDataMapping.get(e);i||(i=new Map,this.sessionExternalDataMapping.set(e,i));let a=i.get(t),o=this.gpuDataManager.registerExternalBuffer(n,r,a);return i.set(t,[o,n]),o}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(e=>this.gpuDataManager.unregisterExternalBuffer(e[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,n){return async()=>{let r=await em(this,e,t);return Gp(r.buffer,n)}}writeTimestamp(e){this.queryType===`inside-passes`&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType=`none`,(this.env.webgpu.profiling?.mode===`default`||(typeof this.env.trace>`u`?this.env.wasm.trace:this.env.trace))&&(this.device.features.has(`chromium-experimental-timestamp-query-inside-passes`)?this.queryType=`inside-passes`:this.device.features.has(`timestamp-query`)&&(this.queryType=`at-passes`),this.queryType!==`none`&&typeof this.querySet>`u`&&(this.querySet=this.device.createQuerySet({type:`timestamp`,count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){Up(`info`,`captureBegin`),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus=`capturing`}captureEnd(){Up(`info`,`captureEnd`),this.flush(),this.sessionStatus=`default`}replay(){Up(`info`,`replay`),this.sessionStatus=`replaying`;let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),n=e.length;this.pendingKernels=[];for(let r=0;r<n;r++){let n=this.getComputePassEncoder(),i=e[r];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(i.computePipeline),n.setBindGroup(0,i.bindGroup),n.dispatchWorkgroups(...i.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!==`none`&&this.pendingKernels.push(t[r]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType===`at-passes`)&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus=`default`}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),MS=U(()=>{"use strict";Wp(),wS=1,TS=()=>wS++,ES=new Map([[`float32`,32],[`float16`,16],[`int32`,32],[`uint32`,32],[`int64`,64],[`uint64`,64],[`int8`,8],[`uint8`,8],[`int4`,4],[`uint4`,4]]),DS=(e,t)=>{let n=ES.get(e);if(!n)throw Error(`Unsupported data type.`);return t.length>0?Math.ceil(t.reduce((e,t)=>e*t)*n/8):0},OS=class{constructor(e){this.sessionId=e.sessionId,this.mlContext=e.context,this.mlTensor=e.tensor,this.dataType=e.dataType,this.tensorShape=e.shape}get tensor(){return this.mlTensor}get type(){return this.dataType}get shape(){return this.tensorShape}get byteLength(){return DS(this.dataType,this.tensorShape)}destroy(){Up(`verbose`,()=>`[WebNN] TensorWrapper.destroy`),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,n){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===n.length&&this.tensorShape.every((e,t)=>e===n[t])}},kS=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,n,r){let i=this.tensorManager.getMLContext(e);if(this.wrapper){if(this.wrapper.canReuseTensor(i,t,n))return this.wrapper.tensor;if(r){if(this.wrapper.byteLength!==DS(t,n))throw Error(`Unable to copy data to tensor with different size.`);this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let a=typeof MLTensorUsage>`u`?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,n,a,!0,!0),r&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){if(this.wrapper)if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(e);return}else Up(`verbose`,()=>`Data size does not match tensor size. Releasing tensor.`),this.releaseTensor();this.activeUpload?this.activeUpload.set(e):this.activeUpload=new Uint8Array(e)}async download(e){if(this.activeUpload)if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(this.activeUpload):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(this.activeUpload);return}else return this.activeUpload.buffer;if(!this.wrapper)throw Error(`Tensor has not been created.`);return e?this.wrapper.read(e):this.wrapper.read()}},AS=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw Error(`MLContext not found for session.`);return t}reserveTensorId(){let e=TS();return this.tensorTrackersById.set(e,new kS(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,n,r,i){Up(`verbose`,()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${n}, shape: ${r}, copyOld: ${i}}`);let a=this.tensorTrackersById.get(t);if(!a)throw Error(`Tensor not found.`);return a.ensureTensor(e,n,r,i)}upload(e,t){let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);n.upload(t)}async download(e,t){Up(`verbose`,()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let n=this.tensorTrackersById.get(e);if(!n)throw Error(`Tensor not found.`);return n.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,n,r){let i=this.getMLContext(e),a=TS(),o=new OS({sessionId:e,context:i,tensor:t,dataType:n,shape:r});return this.tensorTrackersById.set(a,new kS(this,o)),this.externalTensors.add(o),a}async getCachedTensor(e,t,n,r,i,a){let o=this.getMLContext(e);for(let[r,i]of this.freeTensors.entries())if(i.canReuseTensor(o,t,n)){Up(`verbose`,()=>`[WebNN] Reusing tensor {dataType: ${t}, shape: ${n}}`);let i=this.freeTensors.splice(r,1)[0];return i.sessionId=e,i}Up(`verbose`,()=>`[WebNN] MLContext.createTensor {dataType: ${t}, shape: ${n}}`);let s=await o.createTensor({dataType:t,shape:n,dimensions:n,usage:r,writable:i,readable:a});return new OS({sessionId:e,context:o,tensor:s,dataType:t,shape:n})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},jS=(...e)=>new AS(...e)}),IS=U(()=>{"use strict";W(),mp(),Kp(),MS(),Wp(),NS=new Map([[1,`float32`],[10,`float16`],[6,`int32`],[12,`uint32`],[7,`int64`],[13,`uint64`],[22,`int4`],[21,`uint4`],[3,`int8`],[2,`uint8`],[9,`uint8`]]),PS=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let n=Object.keys(e).sort(),r=Object.keys(t).sort();return n.length===r.length&&n.every((n,i)=>n===r[i]&&e[n]===t[n])},FS=class{constructor(e){this.tensorManager=jS(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.temporaryGraphInputs=[],this.temporarySessionTensorIds=new Map,Vp(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw Error(`No active session`);return this.activeSessionId}onRunStart(e){Up(`verbose`,()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){Up(`verbose`,()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let e of t)Up(`verbose`,()=>`[WebNN] releasing temporary tensor {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let t=this.mlContextCache.findIndex(t=>t.gpuDevice===e);if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:t}),t}}else if(e===void 0){let e=this.mlContextCache.findIndex(e=>e.options===void 0&&e.gpuDevice===void 0);if(e!==-1)return this.mlContextCache[e].mlContext;{let e=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:e}),e}}let t=this.mlContextCache.findIndex(t=>PS(t.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let t=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:t}),t}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let n=this.sessionIdsByMLContext.get(t);n||(n=new Set,this.sessionIdsByMLContext.set(t,n)),n.add(e),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e);let n=this.sessionIdsByMLContext.get(t);if(n.delete(e),n.size===0){this.sessionIdsByMLContext.delete(t);let e=this.mlContextCache.findIndex(e=>e.mlContext===t);e!==-1&&this.mlContextCache.splice(e,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){Up(`verbose`,()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,n,r,i){let a=NS.get(n);if(!a)throw Error(`Unsupported ONNX data type: ${n}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,r,i)}async createTemporaryTensor(e,t,n){Up(`verbose`,()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${n}}`);let r=NS.get(t);if(!r)throw Error(`Unsupported ONNX data type: ${t}`);let i=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,i,r,n,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(i):this.temporarySessionTensorIds.set(e,[i]),i}uploadTensor(e,t){if(!pp().shouldTransferToMLTensor)throw Error(`Trying to upload to a MLTensor while shouldTransferToMLTensor is false`);Up(`verbose`,()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let n=await this.tensorManager.download(e);return Gp(n,t)}}registerMLTensor(e,t,n,r){let i=NS.get(n);if(!i)throw Error(`Unsupported ONNX data type: ${n}`);let a=this.tensorManager.registerTensor(e,t,i,r);return Up(`verbose`,()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${i}, dimensions: ${r}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,n,r,i,a){if(!a)throw Error(`External mounted files are not available.`);let o=e;e.startsWith(`./`)&&(o=e.substring(2));let s=a.get(o);if(!s)throw Error(`File with name ${o} not found in preloaded files.`);if(t+n>s.byteLength)throw Error(`Out of bounds: data offset and length exceed the external file data size.`);let c=s.slice(t,t+n).buffer,l;switch(i.dataType){case`float32`:l=new Float32Array(c);break;case`float16`:l=new Uint16Array(c);break;case`int32`:l=new Int32Array(c);break;case`uint32`:l=new Uint32Array(c);break;case`int64`:l=new BigInt64Array(c);break;case`uint64`:l=new BigUint64Array(c);break;case`int8`:l=new Int8Array(c);break;case`int4`:case`uint4`:case`uint8`:l=new Uint8Array(c);break;default:throw Error(`Unsupported data type: ${i.dataType} in creating WebNN Constant from external data.`)}return Up(`verbose`,()=>`[WebNN] registerMLConstant {dataType: ${i.dataType}, shape: ${i.shape}}}`),r.constant(i,l)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}isGraphInput(e,t){let n=this.sessionGraphInputs.get(e);return n?n.includes(t):!1}flush(){}}}),LS={},Nd(LS,{init:()=>BS}),VS=U(()=>{"use strict";W(),CS(),Wp(),pm(),IS(),RS=class e{constructor(e,t,n,r){this.module=e,this.dataType=t,this.data=n,this.dims=r}getFloat32Array(){if(this.dataType!==1)throw Error(`Invalid data type`);let e=G.size(this.dims);return e===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,e)}getBigInt64Array(){if(this.dataType!==7)throw Error(`Invalid data type`);let e=G.size(this.dims);return e===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,e)}getInt32Array(){if(this.dataType!==6)throw Error(`Invalid data type`);let e=G.size(this.dims);return e===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,e)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw Error(`Invalid data type`);let e=G.size(this.dims);return e===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,e)}reshape(t){if(G.size(t)!==G.size(this.dims))throw Error(`Invalid new shape`);return new e(this.module,this.dataType,this.data,t)}},zS=class{constructor(e,t,n){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceInfo=t.deviceInfo;let r=e.PTR_SIZE,i=n/e.PTR_SIZE,a=r===4?`i32`:`i64`;this.opKernelContext=Number(e.getValue(r*i++,a));let o=Number(e.getValue(r*i++,a));this.outputCount=Number(e.getValue(r*i++,a)),this.customDataOffset=Number(e.getValue(r*i++,`*`)),this.customDataSize=Number(e.getValue(r*i++,a));let s=[];for(let t=0;t<o;t++){let t=Number(e.getValue(r*i++,a)),n=Number(e.getValue(r*i++,`*`)),o=Number(e.getValue(r*i++,a)),c=[];for(let t=0;t<o;t++)c.push(Number(e.getValue(r*i++,a)));s.push(new RS(e,t,n,c))}this.inputs=s}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let n=t?.inputs?.map(e=>typeof e==`number`?this.inputs[e]:e)??this.inputs,r=t?.outputs??[];return this.backend.run(e,n,r,(e,t,n)=>new RS(this.module,t,this.output(e,n),n),(e,t)=>{let n=kp(e,t);if(!n)throw Error(`Unsupported data type: ${e}`);let r=n>0?this.backend.gpuDataManager.create(n).id:0;return new RS(this.module,e,r,t)},this.outputCount)}output(e,t){let n=this.module.stackSave();try{let n=this.module.PTR_SIZE,r=n===4?`i32`:`i64`,i=this.module.stackAlloc((1+t.length)*n);this.module.setValue(i,t.length,r);for(let e=0;e<t.length;e++)this.module.setValue(i+n*(e+1),t[e],r);return this.module._JsepOutput(this.opKernelContext,e,i)}catch(n){throw Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${n}`)}finally{this.module.stackRestore(n)}}},BS=async(e,t,n,r)=>{let i=t.jsepInit;if(!i)throw Error(`Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.`);if(e===`webgpu`){let e=new SS;await e.initialize(n,r),i(`webgpu`,[e,t=>e.alloc(Number(t)),t=>e.free(t),(n,r,i,a=!1)=>{if(a)Up(`verbose`,()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(n)}, dst=${Number(r)}, size=${Number(i)}`),e.memcpy(Number(n),Number(r));else{Up(`verbose`,()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(n)}, gpuDataId=${Number(r)}, size=${Number(i)}`);let a=t.HEAPU8.subarray(Number(n>>>0),Number(n>>>0)+Number(i));e.upload(Number(r),a)}},async(n,r,i)=>{Up(`verbose`,()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${n}, dataOffset=${r}, size=${i}`),await e.download(Number(n),()=>t.HEAPU8.subarray(Number(r)>>>0,Number(r+i)>>>0))},(n,r,i)=>e.createKernel(n,Number(r),i,t.UTF8ToString(t._JsepGetNodeName(Number(r)))),t=>e.releaseKernel(t),(n,r,i,a)=>{Up(`verbose`,()=>`[WebGPU] jsepRun: sessionHandle=${i}, kernel=${n}, contextDataOffset=${r}`);let o=new zS(t,e,Number(r));return e.computeKernel(Number(n),o,a)},()=>e.captureBegin(),()=>e.captureEnd(),()=>e.replay()])}else{let e=new FS(n);i(`webnn`,[e,()=>e.reserveTensorId(),t=>e.releaseTensorId(t),async(t,n,r,i,a)=>e.ensureTensor(t,n,r,i,a),(t,n)=>{e.uploadTensor(t,n)},async(t,n)=>e.downloadTensor(t,n)])}}}),eC=U(()=>{"use strict";bp(),Ep(),W(),mp(),vp(),Ip(),HS=(e,t)=>{pp()._OrtInit(e,t)!==0&&_p(`Can't initialize onnxruntime.`)},US=async e=>{HS(e.wasm.numThreads,jp(e.logLevel))},WS=async(e,t)=>{{let n=(VS(),Fd(LS)).init;if(t===`webgpu`){if(typeof navigator>`u`||!navigator.gpu)throw Error(`WebGPU is not supported in current environment`);let t=e.webgpu.adapter;if(t){if(typeof t.limits!=`object`||typeof t.features!=`object`||typeof t.requestDevice!=`function`)throw Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let n=e.webgpu.powerPreference;if(n!==void 0&&n!==`low-power`&&n!==`high-performance`)throw Error(`Invalid powerPreference setting: "${n}"`);let r=e.webgpu.forceFallbackAdapter;if(r!==void 0&&typeof r!=`boolean`)throw Error(`Invalid forceFallbackAdapter setting: "${r}"`);if(t=await navigator.gpu.requestAdapter({powerPreference:n,forceFallbackAdapter:r}),!t)throw Error(`Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.`)}await n(`webgpu`,pp(),e,t)}if(t===`webnn`){if(typeof navigator>`u`||!navigator.ml)throw Error(`WebNN is not supported in current environment`);await n(`webnn`,pp(),e)}}},GS=new Map,KS=e=>{let t=pp(),n=t.stackSave();try{let n=t.PTR_SIZE,r=t.stackAlloc(2*n);t._OrtGetInputOutputCount(e,r,r+n)!==0&&_p(`Can't get session input/output count.`);let i=n===4?`i32`:`i64`;return[Number(t.getValue(r,i)),Number(t.getValue(r+n,i))]}finally{t.stackRestore(n)}},qS=e=>{let t=pp(),n=t._malloc(e.byteLength);if(n===0)throw Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,n),[n,e.byteLength]},JS=async(e,t)=>{let n,r,i=pp();Array.isArray(e)?[n,r]=e:e.buffer===i.HEAPU8.buffer?[n,r]=[e.byteOffset,e.byteLength]:[n,r]=qS(e);let a=0,o=0,s=0,c=[],l=[],u=[];try{if([o,c]=Tp(t),t?.externalData&&i.mountExternalData){let e=[];for(let n of t.externalData){let t=typeof n==`string`?n:n.path;e.push(Fp(typeof n==`string`?n:n.data).then(e=>{i.mountExternalData(t,e)}))}await Promise.all(e)}for(let e of t?.executionProviders??[])if((typeof e==`string`?e:e.name)===`webnn`){if(i.shouldTransferToMLTensor=!1,typeof e!=`string`){let t=e,n=t?.context,r=t?.gpuDevice,a=t?.deviceType,o=t?.powerPreference;n?i.currentContext=n:r?i.currentContext=await i.jsepCreateMLContext(r):i.currentContext=await i.jsepCreateMLContext({deviceType:a,powerPreference:o})}else i.currentContext=await i.jsepCreateMLContext();break}a=await i._OrtCreateSession(n,r,o),a===0&&_p(`Can't create a session.`),i.jsepOnCreateSession?.(),i.currentContext&&(i.jsepRegisterMLContext(a,i.currentContext),i.currentContext=void 0,i.shouldTransferToMLTensor=!0);let[e,d]=KS(a),f=!!t?.enableGraphCapture,p=[],m=[],h=[];for(let t=0;t<e;t++){let e=i._OrtGetInputName(a,t);e===0&&_p(`Can't get an input name.`),l.push(e),p.push(i.UTF8ToString(e))}for(let e=0;e<d;e++){let n=i._OrtGetOutputName(a,e);n===0&&_p(`Can't get an output name.`),u.push(n);let r=i.UTF8ToString(n);m.push(r);{if(f&&t?.preferredOutputLocation===void 0){h.push(`gpu-buffer`);continue}let e=typeof t?.preferredOutputLocation==`string`?t.preferredOutputLocation:t?.preferredOutputLocation?.[r]??`cpu`;if(e!==`cpu`&&e!==`cpu-pinned`&&e!==`gpu-buffer`&&e!==`ml-tensor`)throw Error(`Not supported preferred output location: ${e}.`);if(f&&e!==`gpu-buffer`)throw Error(`Not supported preferred output location: ${e}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);h.push(e)}}let g=null;return h.some(e=>e===`gpu-buffer`||e===`ml-tensor`)&&(s=i._OrtCreateBinding(a),s===0&&_p(`Can't create IO binding.`),g={handle:s,outputPreferredLocations:h,outputPreferredLocationsEncoded:h.map(e=>Pp(e))}),GS.set(a,[a,l,u,g,f,!1]),[a,p,m]}catch(e){throw l.forEach(e=>i._OrtFree(e)),u.forEach(e=>i._OrtFree(e)),s!==0&&i._OrtReleaseBinding(s)!==0&&_p(`Can't release IO binding.`),a!==0&&i._OrtReleaseSession(a)!==0&&_p(`Can't release session.`),e}finally{i._free(n),o!==0&&i._OrtReleaseSessionOptions(o)!==0&&_p(`Can't release session options.`),c.forEach(e=>i._free(e)),i.unmountExternalData?.()}},YS=e=>{let t=pp(),n=GS.get(e);if(!n)throw Error(`cannot release session. invalid session id: ${e}`);let[r,i,a,o,s]=n;o&&(s&&t._OrtClearBoundOutputs(o.handle)!==0&&_p(`Can't clear bound outputs.`),t._OrtReleaseBinding(o.handle)!==0&&_p(`Can't release IO binding.`)),t.jsepOnReleaseSession?.(e),i.forEach(e=>t._OrtFree(e)),a.forEach(e=>t._OrtFree(e)),t._OrtReleaseSession(r)!==0&&_p(`Can't release session.`),GS.delete(e)},XS=async(e,t,n,r,i,a=!1)=>{if(!e){t.push(0);return}let o=pp(),s=o.PTR_SIZE,c=e[0],l=e[1],u=e[3],d=u,f,p;if(c===`string`&&(u===`gpu-buffer`||u===`ml-tensor`))throw Error(`String tensor is not supported on GPU.`);if(a&&u!==`gpu-buffer`)throw Error(`External buffer must be provided for input/output index ${i} when enableGraphCapture is true.`);if(u===`gpu-buffer`){let t=e[2].gpuBuffer;p=kp(Dp(c),l);let n=o.jsepRegisterBuffer;if(!n)throw Error(`Tensor location "gpu-buffer" is not supported without using WebGPU.`);f=n(r,i,t,p)}else if(u===`ml-tensor`){let t=e[2].mlTensor;p=kp(Dp(c),l);let n=o.jsepRegisterMLTensor;if(!n)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);f=n(r,t,Dp(c),l)}else{let t=e[2];if(Array.isArray(t)){p=s*t.length,f=o._malloc(p),n.push(f);for(let e=0;e<t.length;e++){if(typeof t[e]!=`string`)throw TypeError(`tensor data at index ${e} is not a string`);o.setValue(f+e*s,hp(t[e],n),`*`)}}else{let e=o.jsepIsGraphInput;if(c!==`string`&&e){let a=o._OrtGetInputName(r,i);if(e(r,o.UTF8ToString(a))){let e=Dp(c);p=kp(e,l),d=`ml-tensor`;let n=o.jsepCreateTemporaryTensor,i=o.jsepUploadTensor;if(!n||!i)throw Error(`Tensor location "ml-tensor" is not supported without using WebNN.`);let a=await n(r,e,l);i(a,new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),f=a}else p=t.byteLength,f=o._malloc(p),n.push(f),o.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,p),f)}else p=t.byteLength,f=o._malloc(p),n.push(f),o.HEAPU8.set(new Uint8Array(t.buffer,t.byteOffset,p),f)}}let m=o.stackSave(),h=o.stackAlloc(4*l.length);try{l.forEach((e,t)=>o.setValue(h+t*s,e,s===4?`i32`:`i64`));let e=o._OrtCreateTensor(Dp(c),f,p,h,l.length,Pp(d));e===0&&_p(`Can't create tensor for input/output. session=${r}, index=${i}.`),t.push(e)}finally{o.stackRestore(m)}},ZS=async(e,t,n,r,i,a)=>{let o=pp(),s=o.PTR_SIZE,c=GS.get(e);if(!c)throw Error(`cannot run inference. invalid session id: ${e}`);let l=c[0],u=c[1],d=c[2],f=c[3],p=c[4],m=c[5],h=t.length,g=r.length,_=0,v=[],y=[],b=[],x=[],S=o.stackSave(),ee=o.stackAlloc(h*s),te=o.stackAlloc(h*s),C=o.stackAlloc(g*s),ne=o.stackAlloc(g*s);try{[_,v]=yp(a);for(let r=0;r<h;r++)await XS(n[r],y,x,e,t[r],p);for(let t=0;t<g;t++)await XS(i[t],b,x,e,h+r[t],p);for(let e=0;e<h;e++)o.setValue(ee+e*s,y[e],`*`),o.setValue(te+e*s,u[t[e]],`*`);for(let e=0;e<g;e++)o.setValue(C+e*s,b[e],`*`),o.setValue(ne+e*s,d[r[e]],`*`);if(f&&!m){let{handle:n,outputPreferredLocations:a,outputPreferredLocationsEncoded:s}=f;if(u.length!==h)throw Error(`input count from feeds (${h}) is expected to be always equal to model's input count (${u.length}).`);for(let r=0;r<h;r++){let i=t[r];await o._OrtBindInput(n,u[i],y[r])!==0&&_p(`Can't bind input[${r}] for session=${e}.`)}for(let t=0;t<g;t++){let c=r[t];i[t]?.[3]?o._OrtBindOutput(n,d[c],b[t],0)!==0&&_p(`Can't bind pre-allocated output[${t}] for session=${e}.`):o._OrtBindOutput(n,d[c],0,s[c])!==0&&_p(`Can't bind output[${t}] to ${a[t]} for session=${e}.`)}GS.set(e,[l,u,d,f,p,!0])}o.jsepOnRunStart?.(l);let c;c=f?await o._OrtRunWithBinding(l,f.handle,g,C,_):await o._OrtRun(l,te,ee,h,ne,g,C,_),c!==0&&_p(`failed to call OrtRun().`);let S=[];for(let t=0;t<g;t++){let n=Number(o.getValue(C+t*s,`*`));if(n===b[t]){S.push(i[t]);continue}let a=o.stackSave(),c=o.stackAlloc(4*s),u=!1,d,p=0;try{o._OrtGetTensorData(n,c,c+s,c+2*s,c+3*s)!==0&&_p(`Can't access output tensor data on index ${t}.`);let i=s===4?`i32`:`i64`,a=Number(o.getValue(c,i));p=o.getValue(c+s,`*`);let l=o.getValue(c+s*2,`*`),m=Number(o.getValue(c+s*3,i)),h=[];for(let e=0;e<m;e++)h.push(Number(o.getValue(l+e*s,i)));o._OrtFree(l)!==0&&_p(`Can't free memory for tensor dims.`);let g=h.reduce((e,t)=>e*t,1);d=Op(a);let _=f?.outputPreferredLocations[r[t]];if(d===`string`){if(_===`gpu-buffer`||_===`ml-tensor`)throw Error(`String tensor is not supported on GPU.`);let e=[];for(let t=0;t<g;t++){let n=o.getValue(p+t*s,`*`),r=o.getValue(p+(t+1)*s,`*`),i=t===g-1?void 0:r-n;e.push(o.UTF8ToString(n,i))}S.push([d,h,e,`cpu`])}else if(_===`gpu-buffer`&&g>0){let e=o.jsepGetBuffer;if(!e)throw Error(`preferredLocation "gpu-buffer" is not supported without using WebGPU.`);let t=e(p),r=kp(a,g);if(r===void 0||!Mp(d))throw Error(`Unsupported data type: ${d}`);u=!0,S.push([d,h,{gpuBuffer:t,download:o.jsepCreateDownloader(t,r,d),dispose:()=>{o._OrtReleaseTensor(n)!==0&&_p(`Can't release tensor.`)}},`gpu-buffer`])}else if(_===`ml-tensor`&&g>0){let t=o.jsepEnsureTensor;if(!t)throw Error(`preferredLocation "ml-tensor" is not supported without using WebNN.`);if(kp(a,g)===void 0||!Np(d))throw Error(`Unsupported data type: ${d}`);let r=await t(e,p,a,h,!1);u=!0,S.push([d,h,{mlTensor:r,download:o.jsepCreateMLTensorDownloader(p,d),dispose:()=>{o.jsepReleaseTensorId(p),o._OrtReleaseTensor(n)}},`ml-tensor`])}else{let e=new(Ap(d))(g);new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(o.HEAPU8.subarray(p,p+e.byteLength)),S.push([d,h,e,`cpu`])}}finally{o.stackRestore(a),d===`string`&&p&&o._free(p),u||o._OrtReleaseTensor(n),o.jsepOnRunEnd?.(l)}}return f&&!p&&(o._OrtClearBoundOutputs(f.handle)!==0&&_p(`Can't clear bound outputs.`),GS.set(e,[l,u,d,f,p,!1])),S}finally{o.stackRestore(S),y.forEach(e=>o._OrtReleaseTensor(e)),b.forEach(e=>o._OrtReleaseTensor(e)),x.forEach(e=>o._free(e)),_!==0&&o._OrtReleaseRunOptions(_),v.forEach(e=>o._free(e))}},QS=e=>{let t=pp(),n=GS.get(e);if(!n)throw Error(`invalid session id`);let r=n[0],i=t._OrtEndProfiling(r);i===0&&_p(`Can't get an profile file name.`),t._OrtFree(i)},$S=e=>{let t=[];for(let n of e){let e=n[2];!Array.isArray(e)&&`buffer`in e&&t.push(e.buffer)}return t}}),yC=U(()=>{"use strict";Nf(),eC(),mp(),ap(),tC=()=>!!Jd.wasm.proxy&&typeof document<`u`,rC=!1,iC=!1,aC=!1,cC=new Map,lC=(e,t)=>{let n=cC.get(e);n?n.push(t):cC.set(e,[t])},uC=()=>{if(rC||!iC||aC||!nC)throw Error(`worker not ready`)},dC=e=>{switch(e.data.type){case`init-wasm`:rC=!1,e.data.err?(aC=!0,sC[1](e.data.err)):(iC=!0,sC[0]()),oC&&=(URL.revokeObjectURL(oC),void 0);break;case`init-ep`:case`copy-from`:case`create`:case`release`:case`run`:case`end-profiling`:{let t=cC.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},fC=async()=>{if(!iC){if(rC)throw Error(`multiple calls to 'initWasm()' detected.`);if(aC)throw Error(`previous call to 'initWasm()' failed.`);if(rC=!0,tC())return new Promise((e,t)=>{nC?.terminate(),np().then(([n,r])=>{try{nC=r,nC.onerror=e=>t(e),nC.onmessage=dC,sC=[e,t];let i={type:`init-wasm`,in:Jd};!i.in.wasm.wasmPaths&&(n||self.location.href?.startsWith(`file:`))&&(i.in.wasm.wasmPaths={wasm:new URL(`/fangcun-toolbox/assets/ort-wasm-simd-threaded.jsep-D5Jk56-t.wasm`,``+self.location.href).href}),nC.postMessage(i),oC=n}catch(e){t(e)}},t)});try{await fp(Jd.wasm),await US(Jd),iC=!0}catch(e){throw aC=!0,e}finally{rC=!1}}},pC=async e=>{if(tC())return uC(),new Promise((t,n)=>{lC(`init-ep`,[t,n]);let r={type:`init-ep`,in:{epName:e,env:Jd}};nC.postMessage(r)});await WS(Jd,e)},mC=async e=>tC()?(uC(),new Promise((t,n)=>{lC(`copy-from`,[t,n]);let r={type:`copy-from`,in:{buffer:e}};nC.postMessage(r,[e.buffer])})):qS(e),hC=async(e,t)=>{if(tC()){if(t?.preferredOutputLocation)throw Error(`session option "preferredOutputLocation" is not supported for proxy.`);return uC(),new Promise((n,r)=>{lC(`create`,[n,r]);let i={type:`create`,in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),nC.postMessage(i,a)})}else return JS(e,t)},gC=async e=>{if(tC())return uC(),new Promise((t,n)=>{lC(`release`,[t,n]);let r={type:`release`,in:e};nC.postMessage(r)});YS(e)},_C=async(e,t,n,r,i,a)=>{if(tC()){if(n.some(e=>e[3]!==`cpu`))throw Error(`input tensor on GPU is not supported for proxy.`);if(i.some(e=>e))throw Error(`pre-allocated output tensor is not supported for proxy.`);return uC(),new Promise((i,o)=>{lC(`run`,[i,o]);let s=n,c={type:`run`,in:{sessionId:e,inputIndices:t,inputs:s,outputIndices:r,options:a}};nC.postMessage(c,$S(s))})}else return ZS(e,t,n,r,i,a)},vC=async e=>{if(tC())return uC(),new Promise((t,n)=>{lC(`end-profiling`,[t,n]);let r={type:`end-profiling`,in:e};nC.postMessage(r)});QS(e)}}),CC=U(()=>{"use strict";Nf(),yC(),W(),Pf(),Ip(),bC=(e,t)=>{switch(e.location){case`cpu`:return[e.type,e.dims,e.data,`cpu`];case`gpu-buffer`:return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},`gpu-buffer`];case`ml-tensor`:return[e.type,e.dims,{mlTensor:e.mlTensor},`ml-tensor`];default:throw Error(`invalid data location: ${e.location} for ${t()}`)}},xC=e=>{switch(e[3]){case`cpu`:return new _f(e[0],e[2],e[1]);case`gpu-buffer`:{let t=e[0];if(!Mp(t))throw Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:n,download:r,dispose:i}=e[2];return _f.fromGpuBuffer(n,{dataType:t,dims:e[1],download:r,dispose:i})}case`ml-tensor`:{let t=e[0];if(!Np(t))throw Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:n,download:r,dispose:i}=e[2];return _f.fromMLTensor(n,{dataType:t,dims:e[1],download:r,dispose:i})}default:throw Error(`invalid data location: ${e[3]}`)}},SC=class{async fetchModelAndCopyToWasmMemory(e){return mC(await Fp(e))}async loadModel(e,t){xf();let n;n=typeof e==`string`?await this.fetchModelAndCopyToWasmMemory(e):e,[this.sessionId,this.inputNames,this.outputNames]=await hC(n,t),Sf()}async dispose(){return gC(this.sessionId)}async run(e,t,n){xf();let r=[],i=[];Object.entries(e).forEach(e=>{let t=e[0],n=e[1],a=this.inputNames.indexOf(t);if(a===-1)throw Error(`invalid input '${t}'`);r.push(n),i.push(a)});let a=[],o=[];Object.entries(t).forEach(e=>{let t=e[0],n=e[1],r=this.outputNames.indexOf(t);if(r===-1)throw Error(`invalid output '${t}'`);a.push(n),o.push(r)});let s=r.map((e,t)=>bC(e,()=>`input "${this.inputNames[i[t]]}"`)),c=a.map((e,t)=>e?bC(e,()=>`output "${this.outputNames[o[t]]}"`):null),l=await _C(this.sessionId,i,s,o,c,n),u={};for(let e=0;e<l.length;e++)u[this.outputNames[o[e]]]=a[e]??xC(l[e]);return Sf(),u}startProfiling(){}endProfiling(){vC(this.sessionId)}}}),wC={},Nd(wC,{OnnxruntimeWebAssemblyBackend:()=>EC,initializeFlags:()=>TC,wasmBackend:()=>DC}),OC=U(()=>{"use strict";Nf(),yC(),CC(),TC=()=>{if((typeof Jd.wasm.initTimeout!=`number`||Jd.wasm.initTimeout<0)&&(Jd.wasm.initTimeout=0),Jd.wasm.simd===!1&&console.warn(`Deprecated property "env.wasm.simd" is set to false. non-SIMD build is no longer provided, and this setting will be ignored.`),typeof Jd.wasm.proxy!=`boolean`&&(Jd.wasm.proxy=!1),typeof Jd.wasm.trace!=`boolean`&&(Jd.wasm.trace=!1),typeof Jd.wasm.numThreads!=`number`||!Number.isInteger(Jd.wasm.numThreads)||Jd.wasm.numThreads<=0)if(typeof self<`u`&&!self.crossOriginIsolated)Jd.wasm.numThreads=1;else{let e=typeof navigator>`u`?Md(`node:os`).cpus().length:navigator.hardwareConcurrency;Jd.wasm.numThreads=Math.min(4,Math.ceil((e||1)/2))}},EC=class{async init(e){TC(),await fC(),await pC(e)}async createInferenceSessionHandler(e,t){let n=new SC;return await n.loadModel(e,t),Promise.resolve(n)}},DC=new EC}),Nf(),Nf(),Nf(),kC=`1.21.0`,AC=Mf;{let e=(OC(),Fd(wC)).wasmBackend;Rd(`webgpu`,e,5),Rd(`webnn`,e,5),Rd(`cpu`,e,10),Rd(`wasm`,e,10)}Object.defineProperty(Jd.versions,`web`,{value:kC,enumerable:!0})})),MC=Object.create,NC=Object.defineProperty,PC=Object.getOwnPropertyDescriptor,FC=Object.getOwnPropertyNames,IC=Object.getPrototypeOf,LC=Object.prototype.hasOwnProperty,RC=(e,t)=>function(){
/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
/**
* @license
* Copyright 2020 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
/**
* @license
* Copyright 2019 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*/
return t||(0,e[FC(e)[0]])((t={exports:{}}).exports,t),t.exports},zC=(e,t,n,r)=>{if(t&&typeof t==`object`||typeof t==`function`)for(let i of FC(t))!LC.call(e,i)&&i!==n&&NC(e,i,{get:()=>t[i],enumerable:!(r=PC(t,i))||r.enumerable});return e},BC=(e,t,n)=>(n=e==null?{}:MC(IC(e)),zC(t||!e||!e.__esModule?NC(n,`default`,{value:e,enumerable:!0}):n,e)),VC=RC({"../../node_modules/.pnpm/iota-array@1.0.0/node_modules/iota-array/iota.js"(e,t){"use strict";function n(e){for(var t=Array(e),n=0;n<e;++n)t[n]=n;return t}t.exports=n}}),HC=RC({"../../node_modules/.pnpm/is-buffer@1.1.6/node_modules/is-buffer/index.js"(e,t){t.exports=function(e){return e!=null&&(n(e)||r(e)||!!e._isBuffer)};function n(e){return!!e.constructor&&typeof e.constructor.isBuffer==`function`&&e.constructor.isBuffer(e)}function r(e){return typeof e.readFloatLE==`function`&&typeof e.slice==`function`&&n(e.slice(0,0))}}}),UC=RC({"../../node_modules/.pnpm/ndarray@1.0.19/node_modules/ndarray/ndarray.js"(e,t){var n=VC(),r=HC(),i=typeof Float64Array<`u`;function a(e,t){return e[0]-t[0]}function o(){var e=this.stride,t=Array(e.length),n;for(n=0;n<t.length;++n)t[n]=[Math.abs(e[n]),n];t.sort(a);var r=Array(t.length);for(n=0;n<r.length;++n)r[n]=t[n][1];return r}function s(e,t){var r=[`View`,t,`d`,e].join(``);t<0&&(r=`View_Nil`+e);var i=e===`generic`;if(t===-1){var a=`function `+r+`(a){this.data=a;};var proto=`+r+`.prototype;proto.dtype='`+e+`';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new `+r+`(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_`+r+`(a){return new `+r+`(a);}`,s=Function(a);return s()}else if(t===0){var a=`function `+r+`(a,d) {this.data = a;this.offset = d};var proto=`+r+`.prototype;proto.dtype='`+e+`';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function `+r+`_copy() {return new `+r+`(this.data,this.offset)};proto.pick=function `+r+`_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function `+r+`_get(){return `+(i?`this.data.get(this.offset)`:`this.data[this.offset]`)+`};proto.set=function `+r+`_set(v){return `+(i?`this.data.set(this.offset,v)`:`this.data[this.offset]=v`)+`};return function construct_`+r+`(a,b,c,d){return new `+r+`(a,d)}`,s=Function(`TrivialArray`,a);return s(l[e][0])}var a=[`'use strict'`],c=n(t),u=c.map(function(e){return`i`+e}),d=`this.offset+`+c.map(function(e){return`this.stride[`+e+`]*i`+e}).join(`+`),f=c.map(function(e){return`b`+e}).join(`,`),p=c.map(function(e){return`c`+e}).join(`,`);a.push(`function `+r+`(a,`+f+`,`+p+`,d){this.data=a`,`this.shape=[`+f+`]`,`this.stride=[`+p+`]`,`this.offset=d|0}`,`var proto=`+r+`.prototype`,`proto.dtype='`+e+`'`,`proto.dimension=`+t),a.push(`Object.defineProperty(proto,'size',{get:function `+r+`_size(){return `+c.map(function(e){return`this.shape[`+e+`]`}).join(`*`),`}})`),t===1?a.push(`proto.order=[0]`):(a.push(`Object.defineProperty(proto,'order',{get:`),t<4?(a.push(`function `+r+`_order(){`),t===2?a.push(`return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})`):t===3&&a.push(`var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})`)):a.push(`ORDER})`)),a.push(`proto.set=function `+r+`_set(`+u.join(`,`)+`,v){`),i?a.push(`return this.data.set(`+d+`,v)}`):a.push(`return this.data[`+d+`]=v}`),a.push(`proto.get=function `+r+`_get(`+u.join(`,`)+`){`),i?a.push(`return this.data.get(`+d+`)}`):a.push(`return this.data[`+d+`]}`),a.push(`proto.index=function `+r+`_index(`,u.join(),`){return `+d+`}`),a.push(`proto.hi=function `+r+`_hi(`+u.join(`,`)+`){return new `+r+`(this.data,`+c.map(function(e){return[`(typeof i`,e,`!=='number'||i`,e,`<0)?this.shape[`,e,`]:i`,e,`|0`].join(``)}).join(`,`)+`,`+c.map(function(e){return`this.stride[`+e+`]`}).join(`,`)+`,this.offset)}`);var m=c.map(function(e){return`a`+e+`=this.shape[`+e+`]`}),h=c.map(function(e){return`c`+e+`=this.stride[`+e+`]`});a.push(`proto.lo=function `+r+`_lo(`+u.join(`,`)+`){var b=this.offset,d=0,`+m.join(`,`)+`,`+h.join(`,`));for(var g=0;g<t;++g)a.push(`if(typeof i`+g+`==='number'&&i`+g+`>=0){d=i`+g+`|0;b+=c`+g+`*d;a`+g+`-=d}`);a.push(`return new `+r+`(this.data,`+c.map(function(e){return`a`+e}).join(`,`)+`,`+c.map(function(e){return`c`+e}).join(`,`)+`,b)}`),a.push(`proto.step=function `+r+`_step(`+u.join(`,`)+`){var `+c.map(function(e){return`a`+e+`=this.shape[`+e+`]`}).join(`,`)+`,`+c.map(function(e){return`b`+e+`=this.stride[`+e+`]`}).join(`,`)+`,c=this.offset,d=0,ceil=Math.ceil`);for(var g=0;g<t;++g)a.push(`if(typeof i`+g+`==='number'){d=i`+g+`|0;if(d<0){c+=b`+g+`*(a`+g+`-1);a`+g+`=ceil(-a`+g+`/d)}else{a`+g+`=ceil(a`+g+`/d)}b`+g+`*=d}`);a.push(`return new `+r+`(this.data,`+c.map(function(e){return`a`+e}).join(`,`)+`,`+c.map(function(e){return`b`+e}).join(`,`)+`,c)}`);for(var _=Array(t),v=Array(t),g=0;g<t;++g)_[g]=`a[i`+g+`]`,v[g]=`b[i`+g+`]`;a.push(`proto.transpose=function `+r+`_transpose(`+u+`){`+u.map(function(e,t){return e+`=(`+e+`===undefined?`+t+`:`+e+`|0)`}).join(`;`),`var a=this.shape,b=this.stride;return new `+r+`(this.data,`+_.join(`,`)+`,`+v.join(`,`)+`,this.offset)}`),a.push(`proto.pick=function `+r+`_pick(`+u+`){var a=[],b=[],c=this.offset`);for(var g=0;g<t;++g)a.push(`if(typeof i`+g+`==='number'&&i`+g+`>=0){c=(c+this.stride[`+g+`]*i`+g+`)|0}else{a.push(this.shape[`+g+`]);b.push(this.stride[`+g+`])}`);a.push(`var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}`),a.push(`return function construct_`+r+`(data,shape,stride,offset){return new `+r+`(data,`+c.map(function(e){return`shape[`+e+`]`}).join(`,`)+`,`+c.map(function(e){return`stride[`+e+`]`}).join(`,`)+`,offset)}`);var s=Function(`CTOR_LIST`,`ORDER`,a.join(`
`));return s(l[e],o)}function c(e){if(r(e))return`buffer`;if(i)switch(Object.prototype.toString.call(e)){case`[object Float64Array]`:return`float64`;case`[object Float32Array]`:return`float32`;case`[object Int8Array]`:return`int8`;case`[object Int16Array]`:return`int16`;case`[object Int32Array]`:return`int32`;case`[object Uint8Array]`:return`uint8`;case`[object Uint16Array]`:return`uint16`;case`[object Uint32Array]`:return`uint32`;case`[object Uint8ClampedArray]`:return`uint8_clamped`;case`[object BigInt64Array]`:return`bigint64`;case`[object BigUint64Array]`:return`biguint64`}return Array.isArray(e)?`array`:`generic`}var l={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function u(e,t,n,r){if(e===void 0){var i=l.array[0];return i([])}else typeof e==`number`&&(e=[e]);t===void 0&&(t=[e.length]);var a=t.length;if(n===void 0){n=Array(a);for(var o=a-1,u=1;o>=0;--o)n[o]=u,u*=t[o]}if(r===void 0){r=0;for(var o=0;o<a;++o)n[o]<0&&(r-=(t[o]-1)*n[o])}for(var d=c(e),f=l[d];f.length<=a+1;)f.push(s(d,f.length-1));var i=f[a+1];return i(e,t,n,r)}t.exports=u}}),WC=typeof global==`object`&&global&&global.Object===Object&&global,GC=typeof self==`object`&&self&&self.Object===Object&&self,KC=WC||GC||Function(`return this`)(),qC=KC.Symbol,JC=Object.prototype,YC=JC.hasOwnProperty,XC=JC.toString,ZC=qC?qC.toStringTag:void 0;function QC(e){var t=YC.call(e,ZC),n=e[ZC];try{e[ZC]=void 0;var r=!0}catch{}var i=XC.call(e);return r&&(t?e[ZC]=n:delete e[ZC]),i}var $C=QC,ew=Object.prototype.toString;function tw(e){return ew.call(e)}var nw=tw,rw=`[object Null]`,iw=`[object Undefined]`,aw=qC?qC.toStringTag:void 0;function ow(e){return e==null?e===void 0?iw:rw:aw&&aw in Object(e)?$C(e):nw(e)}var sw=ow;function cw(e){var t=typeof e;return e!=null&&(t==`object`||t==`function`)}var lw=cw,uw=`[object AsyncFunction]`,dw=`[object Function]`,fw=`[object GeneratorFunction]`,pw=`[object Proxy]`;function mw(e){if(!lw(e))return!1;var t=sw(e);return t==dw||t==fw||t==uw||t==pw}var hw=mw,gw=KC[`__core-js_shared__`],_w=function(){var e=/[^.]+$/.exec(gw&&gw.keys&&gw.keys.IE_PROTO||``);return e?`Symbol(src)_1.`+e:``}();function vw(e){return!!_w&&_w in e}var yw=vw,bw=Function.prototype.toString;function xw(e){if(e!=null){try{return bw.call(e)}catch{}try{return e+``}catch{}}return``}var Sw=xw,Cw=/[\\^$.*+?()[\]{}|]/g,ww=/^\[object .+?Constructor\]$/,Tw=Function.prototype,Ew=Object.prototype,Dw=Tw.toString,Ow=Ew.hasOwnProperty,kw=RegExp(`^`+Dw.call(Ow).replace(Cw,`\\$&`).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,`$1.*?`)+`$`);function Aw(e){return!lw(e)||yw(e)?!1:(hw(e)?kw:ww).test(Sw(e))}var jw=Aw;function Mw(e,t){return e?.[t]}var Nw=Mw;function Pw(e,t){var n=Nw(e,t);return jw(n)?n:void 0}var Fw=Pw,Iw=Fw(Object,`create`);function Lw(){this.__data__=Iw?Iw(null):{},this.size=0}var Rw=Lw;function zw(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=+!!t,t}var Bw=zw,Vw=`__lodash_hash_undefined__`,Hw=Object.prototype.hasOwnProperty;function Uw(e){var t=this.__data__;if(Iw){var n=t[e];return n===Vw?void 0:n}return Hw.call(t,e)?t[e]:void 0}var Ww=Uw,Gw=Object.prototype.hasOwnProperty;function Kw(e){var t=this.__data__;return Iw?t[e]!==void 0:Gw.call(t,e)}var qw=Kw,Jw=`__lodash_hash_undefined__`;function Yw(e,t){var n=this.__data__;return this.size+=+!this.has(e),n[e]=Iw&&t===void 0?Jw:t,this}var Xw=Yw;function Zw(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Zw.prototype.clear=Rw,Zw.prototype.delete=Bw,Zw.prototype.get=Ww,Zw.prototype.has=qw,Zw.prototype.set=Xw;var Qw=Zw;function $w(){this.__data__=[],this.size=0}var eT=$w;function tT(e,t){return e===t||e!==e&&t!==t}var nT=tT;function rT(e,t){for(var n=e.length;n--;)if(nT(e[n][0],t))return n;return-1}var iT=rT,aT=Array.prototype.splice;function oT(e){var t=this.__data__,n=iT(t,e);return n<0?!1:(n==t.length-1?t.pop():aT.call(t,n,1),--this.size,!0)}var sT=oT;function cT(e){var t=this.__data__,n=iT(t,e);return n<0?void 0:t[n][1]}var lT=cT;function uT(e){return iT(this.__data__,e)>-1}var dT=uT;function fT(e,t){var n=this.__data__,r=iT(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}var pT=fT;function mT(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}mT.prototype.clear=eT,mT.prototype.delete=sT,mT.prototype.get=lT,mT.prototype.has=dT,mT.prototype.set=pT;var hT=mT,gT=Fw(KC,`Map`);function _T(){this.size=0,this.__data__={hash:new Qw,map:new(gT||hT),string:new Qw}}var vT=_T;function yT(e){var t=typeof e;return t==`string`||t==`number`||t==`symbol`||t==`boolean`?e!==`__proto__`:e===null}var bT=yT;function xT(e,t){var n=e.__data__;return bT(t)?n[typeof t==`string`?`string`:`hash`]:n.map}var ST=xT;function CT(e){var t=ST(this,e).delete(e);return this.size-=+!!t,t}var wT=CT;function TT(e){return ST(this,e).get(e)}var ET=TT;function DT(e){return ST(this,e).has(e)}var OT=DT;function kT(e,t){var n=ST(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}var AT=kT;function jT(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}jT.prototype.clear=vT,jT.prototype.delete=wT,jT.prototype.get=ET,jT.prototype.has=OT,jT.prototype.set=AT;var MT=jT,NT=`Expected a function`;function PT(e,t){if(typeof e!=`function`||t!=null&&typeof t!=`function`)throw TypeError(NT);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],a=n.cache;if(a.has(i))return a.get(i);var o=e.apply(this,r);return n.cache=a.set(i,o)||a,o};return n.cache=new(PT.Cache||MT),n}PT.Cache=MT;var FT=PT,IT=BC(UC()),LT=class e{constructor(e,t){this.type=`application/octet-stream`,this.params={},this.type=e,this.params=t}toString(){let e=[];for(let t in this.params){let n=this.params[t];e.push(`${t}=${n}`)}return[this.type,...e].join(`;`)}static create(t,n){return new e(t,n)}isIdentical(e){return this.type===e.type&&this.params===e.params}isEqual(e){return this.type===e.type}static fromString(t){let[n,...r]=t.split(`;`),i={};for(let e of r){let[t,n]=e.split(`=`);i[t.trim()]=n.trim()}return new e(n,i)}},RT=BC(UC());async function zT(e){let t=LT.fromString(e.type);switch(t.type){case`image/x-alpha8`:{let n=parseInt(t.params.width),r=parseInt(t.params.height);return(0,RT.default)(new Uint8Array(await e.arrayBuffer()),[r,n,1])}case`image/x-rgba8`:{let n=parseInt(t.params.width),r=parseInt(t.params.height);return(0,RT.default)(new Uint8Array(await e.arrayBuffer()),[r,n,4])}case`application/octet-stream`:case`image/png`:case`image/jpeg`:case`image/jpg`:case`image/webp`:{let t=UT(await createImageBitmap(e));return(0,RT.default)(new Uint8Array(t.data),[t.height,t.width,4])}default:throw Error(`Invalid format: ${t.type} with params: ${t.params}`)}}async function BT(e,t=.8,n=`image/png`){let[r,i,a]=e.shape;switch(n){case`image/x-alpha8`:case`image/x-rgba8`:{let t=LT.create(n,{width:i.toString(),height:r.toString()});return new Blob([e.data],{type:t.toString()})}case`image/png`:case`image/jpeg`:case`image/webp`:{let a=new ImageData(new Uint8ClampedArray(e.data),i,r);var o=YT(a.width,a.height);return o.getContext(`2d`).putImageData(a,0,0),o.convertToBlob({quality:t,type:n})}default:throw Error(`Invalid format: ${n}`)}}function VT(e){return RegExp(`^(?:[a-z+]+:)?//`,`i`).test(e)}function HT(e,t){return VT(e)?e:new URL(e,t).href}function UT(e){var t=YT(e.width,e.height),n=t.getContext(`2d`);return n.drawImage(e,0,0),n.getImageData(0,0,t.width,t.height)}function WT(e){if(typeof Uint8Array<`u`)return new Uint8Array(e);if(typeof Uint8ClampedArray<`u`)return new Uint8ClampedArray(e);if(typeof Uint16Array<`u`)return new Uint16Array(e);if(typeof Uint32Array<`u`)return new Uint32Array(e);if(typeof Float32Array<`u`)return new Float32Array(e);if(typeof Float64Array<`u`)return new Float64Array(e);throw Error(`TypedArray not supported`)}function GT(e,t,n,r=!1){let[i,a,o]=e.shape,s=a/t,c=i/n;r&&(s=c=Math.max(s,c)>1?Math.max(s,c):Math.min(s,c));let l=(0,IT.default)(WT(o*t*n),[n,t,o]);for(let r=0;r<n;r++)for(let n=0;n<t;n++){let t=n*s,u=r*c,d=Math.max(Math.floor(t),0),f=Math.min(Math.ceil(t),a-1),p=Math.max(Math.floor(u),0),m=Math.min(Math.ceil(u),i-1),h=t-d,g=u-p;for(let t=0;t<o;t++){let i=e.get(p,d,t),a=e.get(p,f,t),o=e.get(m,d,t),s=e.get(m,f,t),c=(1-h)*(1-g)*i+h*(1-g)*a+(1-h)*g*o+h*g*s;l.set(r,n,t,c)}}return l}function KT(e,t=[128,128,128],n=[256,256,256]){var r=e.data;let[i,a,o]=e.shape,s=i*a,c=new Float32Array(3*s);for(let e=0,i=0;e<r.length;e+=4,i+=1)c[i]=(r[e]-t[0])/n[0],c[i+s]=(r[e+1]-t[1])/n[1],c[i+s+s]=(r[e+2]-t[2])/n[2];return(0,IT.default)(c,[1,3,i,a])}async function qT(e,t){return typeof e==`string`&&(e=HT(e,t.publicPath),e=new URL(e)),e instanceof URL&&(e=await(await fetch(e,{})).blob()),(e instanceof ArrayBuffer||ArrayBuffer.isView(e))&&(e=new Blob([e])),e instanceof Blob&&(e=await zT(e)),e}function JT(e){let t=new Uint8Array(e.data.length);for(let n=0;n<e.data.length;n++)t[n]=e.data[n]*255;return(0,IT.default)(t,e.shape)}function YT(e,t){let n;if(n=typeof OffscreenCanvas<`u`?new OffscreenCanvas(e,t):document.createElement(`canvas`),!n)throw Error(`Canvas nor OffscreenCanvas are available in the current context.`);return n}var XT=BC(UC()),ZT=async()=>navigator.gpu===void 0?!1:await navigator.gpu.requestAdapter()!==null,QT=()=>navigator.hardwareConcurrency??4;async function $T(e,t){return URL.createObjectURL(await eE(e,t))}async function eE(e,t){let n=new URL(`resources.json`,t.publicPath),r=await fetch(n);if(!r.ok)throw Error(`Resource metadata not found. Ensure that the config.publicPath is configured correctly.`);let i=(await r.json())[e];if(!i)throw Error(`Resource ${e} not found. Ensure that the config.publicPath is configured correctly.`);let a=i.chunks,o=0,s=a.map(async n=>{let r=n.offsets[1]-n.offsets[0],a=t.publicPath?new URL(n.name,t.publicPath).toString():n.name,s=await(await fetch(a,t.fetchArgs)).blob();if(r!==s.size)throw Error(`Failed to fetch ${e} with size ${r} but got ${s.size}`);return t.progress&&(o+=r,t.progress(`fetch:${e}`,o,i.size)),s}),c=await Promise.all(s),l=new Blob(c,{type:i.mime});if(l.size!==i.size)throw Error(`Failed to fetch ${e} with size ${i.size} but got ${l.size}`);return l}var tE=null,nE=async e=>(tE===null&&(tE=e?(await Promise.resolve().then(()=>(Ed(),r))).default:(await Promise.resolve().then(()=>(jC(),Dd))).default),tE);async function rE(e,t){let n=t.device===`gpu`&&await ZT(),r=n&&t.proxyToWorker,i=[n?`webgpu`:`wasm`],a=await nE(n);t.debug&&(console.debug(`	Using WebGPU:`,n),console.debug(`	Proxy to Worker:`,r),a.env.debug=!0,a.env.logLevel=`verbose`),a.env.wasm.numThreads=QT(),a.env.wasm.proxy=r;let o=n?`/onnxruntime-web/ort-wasm-simd-threaded.jsep`:`/onnxruntime-web/ort-wasm-simd-threaded`,s=await $T(`${o}.wasm`,t),c=await $T(`${o}.mjs`,t);a.env.wasm.wasmPaths={mjs:c,wasm:s},t.debug&&console.debug(`ort.env.wasm:`,a.env.wasm);let l={executionProviders:i,graphOptimizationLevel:`all`,executionMode:`parallel`,enableCpuMemArena:!0};return await a.InferenceSession.create(e,l).catch(e=>{throw Error(`Failed to create session: "${e}". Please check if the publicPath is set correctly.`)})}async function iE(e,t,n,r){let i=await nE(r.device===`gpu`&&await ZT()),a={};for(let[e,n]of t)a[e]=new i.Tensor(`float32`,new Float32Array(n.data),n.shape);let o=await e.run(a,{}),s=[];for(let e of n){let t=o[e],n=t.dims,r=t.data,i=(0,XT.default)(r,n);s.push(i)}return s}var aE;(function(e){e.assertEqual=e=>e;function t(e){}e.assertIs=t;function n(e){throw Error()}e.assertNever=n,e.arrayToEnum=e=>{let t={};for(let n of e)t[n]=n;return t},e.getValidEnumValues=t=>{let n=e.objectKeys(t).filter(e=>typeof t[t[e]]!=`number`),r={};for(let e of n)r[e]=t[e];return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys=typeof Object.keys==`function`?e=>Object.keys(e):e=>{let t=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.find=(e,t)=>{for(let n of e)if(t(n))return n},e.isInteger=typeof Number.isInteger==`function`?e=>Number.isInteger(e):e=>typeof e==`number`&&isFinite(e)&&Math.floor(e)===e;function r(e,t=` | `){return e.map(e=>typeof e==`string`?`'${e}'`:e).join(t)}e.joinValues=r,e.jsonStringifyReplacer=(e,t)=>typeof t==`bigint`?t.toString():t})(aE||={});var oE;(function(e){e.mergeShapes=(e,t)=>({...e,...t})})(oE||={});var X=aE.arrayToEnum([`string`,`nan`,`number`,`integer`,`float`,`boolean`,`date`,`bigint`,`symbol`,`function`,`undefined`,`null`,`array`,`object`,`unknown`,`promise`,`void`,`never`,`map`,`set`]),sE=e=>{switch(typeof e){case`undefined`:return X.undefined;case`string`:return X.string;case`number`:return isNaN(e)?X.nan:X.number;case`boolean`:return X.boolean;case`function`:return X.function;case`bigint`:return X.bigint;case`symbol`:return X.symbol;case`object`:return Array.isArray(e)?X.array:e===null?X.null:e.then&&typeof e.then==`function`&&e.catch&&typeof e.catch==`function`?X.promise:typeof Map<`u`&&e instanceof Map?X.map:typeof Set<`u`&&e instanceof Set?X.set:typeof Date<`u`&&e instanceof Date?X.date:X.object;default:return X.unknown}},Z=aE.arrayToEnum([`invalid_type`,`invalid_literal`,`custom`,`invalid_union`,`invalid_union_discriminator`,`invalid_enum_value`,`unrecognized_keys`,`invalid_arguments`,`invalid_return_type`,`invalid_date`,`invalid_string`,`too_small`,`too_big`,`invalid_intersection_types`,`not_multiple_of`,`not_finite`]),cE=e=>JSON.stringify(e,null,2).replace(/"([^"]+)":/g,`$1:`),lE=class e extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name=`ZodError`,this.issues=e}format(e){let t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(let i of e.issues)if(i.code===`invalid_union`)i.unionErrors.map(r);else if(i.code===`invalid_return_type`)r(i.returnTypeError);else if(i.code===`invalid_arguments`)r(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){let n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}static assert(t){if(!(t instanceof e))throw Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,aE.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=e=>e.message){let t={},n=[];for(let r of this.issues)r.path.length>0?(t[r.path[0]]=t[r.path[0]]||[],t[r.path[0]].push(e(r))):n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}};lE.create=e=>new lE(e);var uE=(e,t)=>{let n;switch(e.code){case Z.invalid_type:n=e.received===X.undefined?`Required`:`Expected ${e.expected}, received ${e.received}`;break;case Z.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,aE.jsonStringifyReplacer)}`;break;case Z.unrecognized_keys:n=`Unrecognized key(s) in object: ${aE.joinValues(e.keys,`, `)}`;break;case Z.invalid_union:n=`Invalid input`;break;case Z.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${aE.joinValues(e.options)}`;break;case Z.invalid_enum_value:n=`Invalid enum value. Expected ${aE.joinValues(e.options)}, received '${e.received}'`;break;case Z.invalid_arguments:n=`Invalid function arguments`;break;case Z.invalid_return_type:n=`Invalid function return type`;break;case Z.invalid_date:n=`Invalid date`;break;case Z.invalid_string:typeof e.validation==`object`?`includes`in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position==`number`&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):`startsWith`in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:`endsWith`in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:aE.assertNever(e.validation):n=e.validation===`regex`?`Invalid`:`Invalid ${e.validation}`;break;case Z.too_small:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at least`:`more than`} ${e.minimum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at least`:`over`} ${e.minimum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${e.minimum}`:e.type===`date`?`Date must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${new Date(Number(e.minimum))}`:`Invalid input`;break;case Z.too_big:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at most`:`less than`} ${e.maximum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at most`:`under`} ${e.maximum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`bigint`?`BigInt must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`date`?`Date must be ${e.exact?`exactly`:e.inclusive?`smaller than or equal to`:`smaller than`} ${new Date(Number(e.maximum))}`:`Invalid input`;break;case Z.custom:n=`Invalid input`;break;case Z.invalid_intersection_types:n=`Intersection results could not be merged`;break;case Z.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case Z.not_finite:n=`Number must be finite`;break;default:n=t.defaultError,aE.assertNever(e)}return{message:n}},dE=uE;function fE(e){dE=e}function pE(){return dE}var mE=e=>{let{data:t,path:n,errorMaps:r,issueData:i}=e,a=[...n,...i.path||[]],o={...i,path:a};if(i.message!==void 0)return{...i,path:a,message:i.message};let s=``,c=r.filter(e=>!!e).slice().reverse();for(let e of c)s=e(o,{data:t,defaultError:s}).message;return{...i,path:a,message:s}},hE=[];function Q(e,t){let n=pE(),r=mE({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===uE?void 0:uE].filter(e=>!!e)});e.common.issues.push(r)}var gE=class e{constructor(){this.value=`valid`}dirty(){this.value===`valid`&&(this.value=`dirty`)}abort(){this.value!==`aborted`&&(this.value=`aborted`)}static mergeArray(e,t){let n=[];for(let r of t){if(r.status===`aborted`)return _E;r.status===`dirty`&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(t,n){let r=[];for(let e of n){let t=await e.key,n=await e.value;r.push({key:t,value:n})}return e.mergeObjectSync(t,r)}static mergeObjectSync(e,t){let n={};for(let r of t){let{key:t,value:i}=r;if(t.status===`aborted`||i.status===`aborted`)return _E;t.status===`dirty`&&e.dirty(),i.status===`dirty`&&e.dirty(),t.value!==`__proto__`&&(i.value!==void 0||r.alwaysSet)&&(n[t.value]=i.value)}return{status:e.value,value:n}}},_E=Object.freeze({status:`aborted`}),vE=e=>({status:`dirty`,value:e}),yE=e=>({status:`valid`,value:e}),bE=e=>e.status===`aborted`,xE=e=>e.status===`dirty`,SE=e=>e.status===`valid`,CE=e=>typeof Promise<`u`&&e instanceof Promise;function wE(e,t,n,r){if(n===`a`&&!r)throw TypeError(`Private accessor was defined without a getter`);if(typeof t==`function`?e!==t||!r:!t.has(e))throw TypeError(`Cannot read private member from an object whose class did not declare it`);return n===`m`?r:n===`a`?r.call(e):r?r.value:t.get(e)}function TE(e,t,n,r,i){if(r===`m`)throw TypeError(`Private method is not writable`);if(r===`a`&&!i)throw TypeError(`Private accessor was defined without a setter`);if(typeof t==`function`?e!==t||!i:!t.has(e))throw TypeError(`Cannot write private member to an object whose class did not declare it`);return r===`a`?i.call(e,n):i?i.value=n:t.set(e,n),n}var $;(function(e){e.errToObj=e=>typeof e==`string`?{message:e}:e||{},e.toString=e=>typeof e==`string`?e:e?.message})($||={});var EE,DE,OE=class{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},kE=(e,t)=>{if(SE(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error(`Validation failed but no issues detected.`);return{success:!1,get error(){if(this._error)return this._error;let t=new lE(e.common.issues);return this._error=t,this._error}}};function AE(e){if(!e)return{};let{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(t,i)=>{let{message:a}=e;return t.code===`invalid_enum_value`?{message:a??i.defaultError}:i.data===void 0?{message:a??r??i.defaultError}:t.code===`invalid_type`?{message:a??n??i.defaultError}:{message:i.defaultError}},description:i}}var jE=class{get description(){return this._def.description}_getType(e){return sE(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:sE(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new gE,ctx:{common:e.parent.common,data:e.data,parsedType:sE(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(CE(t))throw Error(`Synchronous parse encountered promise.`);return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){let n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:sE(e)};return kE(n,this._parseSync({data:e,path:n.path,parent:n}))}"~validate"(e){let t={common:{issues:[],async:!!this[`~standard`].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:sE(e)};if(!this[`~standard`].async)try{let n=this._parseSync({data:e,path:[],parent:t});return SE(n)?{value:n.value}:{issues:t.common.issues}}catch(e){((e?.message)?.toLowerCase())?.includes(`encountered`)&&(this[`~standard`].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(e=>SE(e)?{value:e.value}:{issues:t.common.issues})}async parseAsync(e,t){let n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){let n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:sE(e)},r=this._parse({data:e,path:n.path,parent:n});return kE(n,await(CE(r)?r:Promise.resolve(r)))}refine(e,t){let n=e=>typeof t==`string`||t===void 0?{message:t}:typeof t==`function`?t(e):t;return this._refinement((t,r)=>{let i=e(t),a=()=>r.addIssue({code:Z.custom,...n(t)});return typeof Promise<`u`&&i instanceof Promise?i.then(e=>e?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t==`function`?t(n,r):t),!1))}_refinement(e){return new PD({schema:this,typeName:qD.ZodEffects,effect:{type:`refinement`,refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this[`~standard`]={version:1,vendor:`zod`,validate:e=>this[`~validate`](e)}}optional(){return FD.create(this,this._def)}nullable(){return ID.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return hD.create(this)}promise(){return ND.create(this,this._def)}or(e){return vD.create([this,e],this._def)}and(e){return SD.create(this,e,this._def)}transform(e){return new PD({...AE(this._def),schema:this,typeName:qD.ZodEffects,effect:{type:`transform`,transform:e}})}default(e){let t=typeof e==`function`?e:()=>e;return new LD({...AE(this._def),innerType:this,defaultValue:t,typeName:qD.ZodDefault})}brand(){return new VD({typeName:qD.ZodBranded,type:this,...AE(this._def)})}catch(e){let t=typeof e==`function`?e:()=>e;return new RD({...AE(this._def),innerType:this,catchValue:t,typeName:qD.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return HD.create(this,e)}readonly(){return UD.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},ME=/^c[^\s-]{8,}$/i,NE=/^[0-9a-z]+$/,PE=/^[0-9A-HJKMNP-TV-Z]{26}$/i,FE=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,IE=/^[a-z0-9_-]{21}$/i,LE=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,RE=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,zE=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,BE=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,VE,HE=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,UE=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,WE=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,GE=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,KE=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,qE=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,JE=`((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,YE=RegExp(`^${JE}$`);function XE(e){let t=`([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d`;return e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision??(t=`${t}(\\.\\d+)?`),t}function ZE(e){return RegExp(`^${XE(e)}$`)}function QE(e){let t=`${JE}T${XE(e)}`,n=[];return n.push(e.local?`Z?`:`Z`),e.offset&&n.push(`([+-]\\d{2}:?\\d{2})`),t=`${t}(${n.join(`|`)})`,RegExp(`^${t}$`)}function $E(e,t){return!!((t===`v4`||!t)&&HE.test(e)||(t===`v6`||!t)&&WE.test(e))}function eD(e,t){if(!LE.test(e))return!1;try{let[n]=e.split(`.`),r=n.replace(/-/g,`+`).replace(/_/g,`/`).padEnd(n.length+(4-n.length%4)%4,`=`),i=JSON.parse(atob(r));return!(typeof i!=`object`||!i||!i.typ||!i.alg||t&&i.alg!==t)}catch{return!1}}function tD(e,t){return!!((t===`v4`||!t)&&UE.test(e)||(t===`v6`||!t)&&GE.test(e))}var nD=class e extends jE{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==X.string){let t=this._getOrReturnCtx(e);return Q(t,{code:Z.invalid_type,expected:X.string,received:t.parsedType}),_E}let t=new gE,n;for(let r of this._def.checks)if(r.kind===`min`)e.data.length<r.value&&(n=this._getOrReturnCtx(e,n),Q(n,{code:Z.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`max`)e.data.length>r.value&&(n=this._getOrReturnCtx(e,n),Q(n,{code:Z.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`length`){let i=e.data.length>r.value,a=e.data.length<r.value;(i||a)&&(n=this._getOrReturnCtx(e,n),i?Q(n,{code:Z.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}):a&&Q(n,{code:Z.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}),t.dirty())}else if(r.kind===`email`)zE.test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`email`,code:Z.invalid_string,message:r.message}),t.dirty());else if(r.kind===`emoji`)VE||=new RegExp(BE,`u`),VE.test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`emoji`,code:Z.invalid_string,message:r.message}),t.dirty());else if(r.kind===`uuid`)FE.test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`uuid`,code:Z.invalid_string,message:r.message}),t.dirty());else if(r.kind===`nanoid`)IE.test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`nanoid`,code:Z.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid`)ME.test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`cuid`,code:Z.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid2`)NE.test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`cuid2`,code:Z.invalid_string,message:r.message}),t.dirty());else if(r.kind===`ulid`)PE.test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`ulid`,code:Z.invalid_string,message:r.message}),t.dirty());else if(r.kind===`url`)try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),Q(n,{validation:`url`,code:Z.invalid_string,message:r.message}),t.dirty()}else r.kind===`regex`?(r.regex.lastIndex=0,r.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`regex`,code:Z.invalid_string,message:r.message}),t.dirty())):r.kind===`trim`?e.data=e.data.trim():r.kind===`includes`?e.data.includes(r.value,r.position)||(n=this._getOrReturnCtx(e,n),Q(n,{code:Z.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),t.dirty()):r.kind===`toLowerCase`?e.data=e.data.toLowerCase():r.kind===`toUpperCase`?e.data=e.data.toUpperCase():r.kind===`startsWith`?e.data.startsWith(r.value)||(n=this._getOrReturnCtx(e,n),Q(n,{code:Z.invalid_string,validation:{startsWith:r.value},message:r.message}),t.dirty()):r.kind===`endsWith`?e.data.endsWith(r.value)||(n=this._getOrReturnCtx(e,n),Q(n,{code:Z.invalid_string,validation:{endsWith:r.value},message:r.message}),t.dirty()):r.kind===`datetime`?QE(r).test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{code:Z.invalid_string,validation:`datetime`,message:r.message}),t.dirty()):r.kind===`date`?YE.test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{code:Z.invalid_string,validation:`date`,message:r.message}),t.dirty()):r.kind===`time`?ZE(r).test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{code:Z.invalid_string,validation:`time`,message:r.message}),t.dirty()):r.kind===`duration`?RE.test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`duration`,code:Z.invalid_string,message:r.message}),t.dirty()):r.kind===`ip`?$E(e.data,r.version)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`ip`,code:Z.invalid_string,message:r.message}),t.dirty()):r.kind===`jwt`?eD(e.data,r.alg)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`jwt`,code:Z.invalid_string,message:r.message}),t.dirty()):r.kind===`cidr`?tD(e.data,r.version)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`cidr`,code:Z.invalid_string,message:r.message}),t.dirty()):r.kind===`base64`?KE.test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`base64`,code:Z.invalid_string,message:r.message}),t.dirty()):r.kind===`base64url`?qE.test(e.data)||(n=this._getOrReturnCtx(e,n),Q(n,{validation:`base64url`,code:Z.invalid_string,message:r.message}),t.dirty()):aE.assertNever(r);return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement(t=>e.test(t),{validation:t,code:Z.invalid_string,...$.errToObj(n)})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}email(e){return this._addCheck({kind:`email`,...$.errToObj(e)})}url(e){return this._addCheck({kind:`url`,...$.errToObj(e)})}emoji(e){return this._addCheck({kind:`emoji`,...$.errToObj(e)})}uuid(e){return this._addCheck({kind:`uuid`,...$.errToObj(e)})}nanoid(e){return this._addCheck({kind:`nanoid`,...$.errToObj(e)})}cuid(e){return this._addCheck({kind:`cuid`,...$.errToObj(e)})}cuid2(e){return this._addCheck({kind:`cuid2`,...$.errToObj(e)})}ulid(e){return this._addCheck({kind:`ulid`,...$.errToObj(e)})}base64(e){return this._addCheck({kind:`base64`,...$.errToObj(e)})}base64url(e){return this._addCheck({kind:`base64url`,...$.errToObj(e)})}jwt(e){return this._addCheck({kind:`jwt`,...$.errToObj(e)})}ip(e){return this._addCheck({kind:`ip`,...$.errToObj(e)})}cidr(e){return this._addCheck({kind:`cidr`,...$.errToObj(e)})}datetime(e){return typeof e==`string`?this._addCheck({kind:`datetime`,precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:`datetime`,precision:e?.precision===void 0?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...$.errToObj(e?.message)})}date(e){return this._addCheck({kind:`date`,message:e})}time(e){return typeof e==`string`?this._addCheck({kind:`time`,precision:null,message:e}):this._addCheck({kind:`time`,precision:e?.precision===void 0?null:e?.precision,...$.errToObj(e?.message)})}duration(e){return this._addCheck({kind:`duration`,...$.errToObj(e)})}regex(e,t){return this._addCheck({kind:`regex`,regex:e,...$.errToObj(t)})}includes(e,t){return this._addCheck({kind:`includes`,value:e,position:t?.position,...$.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:`startsWith`,value:e,...$.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:`endsWith`,value:e,...$.errToObj(t)})}min(e,t){return this._addCheck({kind:`min`,value:e,...$.errToObj(t)})}max(e,t){return this._addCheck({kind:`max`,value:e,...$.errToObj(t)})}length(e,t){return this._addCheck({kind:`length`,value:e,...$.errToObj(t)})}nonempty(e){return this.min(1,$.errToObj(e))}trim(){return new e({...this._def,checks:[...this._def.checks,{kind:`trim`}]})}toLowerCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toLowerCase`}]})}toUpperCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toUpperCase`}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind===`datetime`)}get isDate(){return!!this._def.checks.find(e=>e.kind===`date`)}get isTime(){return!!this._def.checks.find(e=>e.kind===`time`)}get isDuration(){return!!this._def.checks.find(e=>e.kind===`duration`)}get isEmail(){return!!this._def.checks.find(e=>e.kind===`email`)}get isURL(){return!!this._def.checks.find(e=>e.kind===`url`)}get isEmoji(){return!!this._def.checks.find(e=>e.kind===`emoji`)}get isUUID(){return!!this._def.checks.find(e=>e.kind===`uuid`)}get isNANOID(){return!!this._def.checks.find(e=>e.kind===`nanoid`)}get isCUID(){return!!this._def.checks.find(e=>e.kind===`cuid`)}get isCUID2(){return!!this._def.checks.find(e=>e.kind===`cuid2`)}get isULID(){return!!this._def.checks.find(e=>e.kind===`ulid`)}get isIP(){return!!this._def.checks.find(e=>e.kind===`ip`)}get isCIDR(){return!!this._def.checks.find(e=>e.kind===`cidr`)}get isBase64(){return!!this._def.checks.find(e=>e.kind===`base64`)}get isBase64url(){return!!this._def.checks.find(e=>e.kind===`base64url`)}get minLength(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};nD.create=e=>new nD({checks:[],typeName:qD.ZodString,coerce:e?.coerce??!1,...AE(e)});function rD(e,t){let n=(e.toString().split(`.`)[1]||``).length,r=(t.toString().split(`.`)[1]||``).length,i=n>r?n:r;return parseInt(e.toFixed(i).replace(`.`,``))%parseInt(t.toFixed(i).replace(`.`,``))/10**i}var iD=class e extends jE{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==X.number){let t=this._getOrReturnCtx(e);return Q(t,{code:Z.invalid_type,expected:X.number,received:t.parsedType}),_E}let t,n=new gE;for(let r of this._def.checks)r.kind===`int`?aE.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),Q(t,{code:Z.invalid_type,expected:`integer`,received:`float`,message:r.message}),n.dirty()):r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),Q(t,{code:Z.too_small,minimum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),Q(t,{code:Z.too_big,maximum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`multipleOf`?rD(e.data,r.value)!==0&&(t=this._getOrReturnCtx(e,t),Q(t,{code:Z.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):r.kind===`finite`?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),Q(t,{code:Z.not_finite,message:r.message}),n.dirty()):aE.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit(`min`,e,!0,$.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,$.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,$.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,$.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:$.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}int(e){return this._addCheck({kind:`int`,message:$.toString(e)})}positive(e){return this._addCheck({kind:`min`,value:0,inclusive:!1,message:$.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:0,inclusive:!1,message:$.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:0,inclusive:!0,message:$.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:0,inclusive:!0,message:$.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:$.toString(t)})}finite(e){return this._addCheck({kind:`finite`,message:$.toString(e)})}safe(e){return this._addCheck({kind:`min`,inclusive:!0,value:-(2**53-1),message:$.toString(e)})._addCheck({kind:`max`,inclusive:!0,value:2**53-1,message:$.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind===`int`||e.kind===`multipleOf`&&aE.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let n of this._def.checks)if(n.kind===`finite`||n.kind===`int`||n.kind===`multipleOf`)return!0;else n.kind===`min`?(t===null||n.value>t)&&(t=n.value):n.kind===`max`&&(e===null||n.value<e)&&(e=n.value);return Number.isFinite(t)&&Number.isFinite(e)}};iD.create=e=>new iD({checks:[],typeName:qD.ZodNumber,coerce:e?.coerce||!1,...AE(e)});var aD=class e extends jE{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==X.bigint)return this._getInvalidInput(e);let t,n=new gE;for(let r of this._def.checks)r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),Q(t,{code:Z.too_small,type:`bigint`,minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),Q(t,{code:Z.too_big,type:`bigint`,maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`multipleOf`?e.data%r.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),Q(t,{code:Z.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):aE.assertNever(r);return{status:n.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return Q(t,{code:Z.invalid_type,expected:X.bigint,received:t.parsedType}),_E}gte(e,t){return this.setLimit(`min`,e,!0,$.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,$.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,$.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,$.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:$.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}positive(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!1,message:$.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!1,message:$.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!0,message:$.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!0,message:$.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:$.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};aD.create=e=>new aD({checks:[],typeName:qD.ZodBigInt,coerce:e?.coerce??!1,...AE(e)});var oD=class extends jE{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==X.boolean){let t=this._getOrReturnCtx(e);return Q(t,{code:Z.invalid_type,expected:X.boolean,received:t.parsedType}),_E}return yE(e.data)}};oD.create=e=>new oD({typeName:qD.ZodBoolean,coerce:e?.coerce||!1,...AE(e)});var sD=class e extends jE{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==X.date){let t=this._getOrReturnCtx(e);return Q(t,{code:Z.invalid_type,expected:X.date,received:t.parsedType}),_E}if(isNaN(e.data.getTime()))return Q(this._getOrReturnCtx(e),{code:Z.invalid_date}),_E;let t=new gE,n;for(let r of this._def.checks)r.kind===`min`?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),Q(n,{code:Z.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:`date`}),t.dirty()):r.kind===`max`?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),Q(n,{code:Z.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:`date`}),t.dirty()):aE.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}min(e,t){return this._addCheck({kind:`min`,value:e.getTime(),message:$.toString(t)})}max(e,t){return this._addCheck({kind:`max`,value:e.getTime(),message:$.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e==null?null:new Date(e)}get maxDate(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e==null?null:new Date(e)}};sD.create=e=>new sD({checks:[],coerce:e?.coerce||!1,typeName:qD.ZodDate,...AE(e)});var cD=class extends jE{_parse(e){if(this._getType(e)!==X.symbol){let t=this._getOrReturnCtx(e);return Q(t,{code:Z.invalid_type,expected:X.symbol,received:t.parsedType}),_E}return yE(e.data)}};cD.create=e=>new cD({typeName:qD.ZodSymbol,...AE(e)});var lD=class extends jE{_parse(e){if(this._getType(e)!==X.undefined){let t=this._getOrReturnCtx(e);return Q(t,{code:Z.invalid_type,expected:X.undefined,received:t.parsedType}),_E}return yE(e.data)}};lD.create=e=>new lD({typeName:qD.ZodUndefined,...AE(e)});var uD=class extends jE{_parse(e){if(this._getType(e)!==X.null){let t=this._getOrReturnCtx(e);return Q(t,{code:Z.invalid_type,expected:X.null,received:t.parsedType}),_E}return yE(e.data)}};uD.create=e=>new uD({typeName:qD.ZodNull,...AE(e)});var dD=class extends jE{constructor(){super(...arguments),this._any=!0}_parse(e){return yE(e.data)}};dD.create=e=>new dD({typeName:qD.ZodAny,...AE(e)});var fD=class extends jE{constructor(){super(...arguments),this._unknown=!0}_parse(e){return yE(e.data)}};fD.create=e=>new fD({typeName:qD.ZodUnknown,...AE(e)});var pD=class extends jE{_parse(e){let t=this._getOrReturnCtx(e);return Q(t,{code:Z.invalid_type,expected:X.never,received:t.parsedType}),_E}};pD.create=e=>new pD({typeName:qD.ZodNever,...AE(e)});var mD=class extends jE{_parse(e){if(this._getType(e)!==X.undefined){let t=this._getOrReturnCtx(e);return Q(t,{code:Z.invalid_type,expected:X.void,received:t.parsedType}),_E}return yE(e.data)}};mD.create=e=>new mD({typeName:qD.ZodVoid,...AE(e)});var hD=class e extends jE{_parse(e){let{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==X.array)return Q(t,{code:Z.invalid_type,expected:X.array,received:t.parsedType}),_E;if(r.exactLength!==null){let e=t.data.length>r.exactLength.value,i=t.data.length<r.exactLength.value;(e||i)&&(Q(t,{code:e?Z.too_big:Z.too_small,minimum:i?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:`array`,inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(Q(t,{code:Z.too_small,minimum:r.minLength.value,type:`array`,inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(Q(t,{code:Z.too_big,maximum:r.maxLength.value,type:`array`,inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((e,n)=>r.type._parseAsync(new OE(t,e,t.path,n)))).then(e=>gE.mergeArray(n,e));let i=[...t.data].map((e,n)=>r.type._parseSync(new OE(t,e,t.path,n)));return gE.mergeArray(n,i)}get element(){return this._def.type}min(t,n){return new e({...this._def,minLength:{value:t,message:$.toString(n)}})}max(t,n){return new e({...this._def,maxLength:{value:t,message:$.toString(n)}})}length(t,n){return new e({...this._def,exactLength:{value:t,message:$.toString(n)}})}nonempty(e){return this.min(1,e)}};hD.create=(e,t)=>new hD({type:e,minLength:null,maxLength:null,exactLength:null,typeName:qD.ZodArray,...AE(t)});function gD(e){if(e instanceof _D){let t={};for(let n in e.shape){let r=e.shape[n];t[n]=FD.create(gD(r))}return new _D({...e._def,shape:()=>t})}else if(e instanceof hD)return new hD({...e._def,type:gD(e.element)});else if(e instanceof FD)return FD.create(gD(e.unwrap()));else if(e instanceof ID)return ID.create(gD(e.unwrap()));else if(e instanceof CD)return CD.create(e.items.map(e=>gD(e)));else return e}var _D=class e extends jE{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),t=aE.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){if(this._getType(e)!==X.object){let t=this._getOrReturnCtx(e);return Q(t,{code:Z.invalid_type,expected:X.object,received:t.parsedType}),_E}let{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof pD&&this._def.unknownKeys===`strip`))for(let e in n.data)i.includes(e)||a.push(e);let o=[];for(let e of i){let t=r[e],i=n.data[e];o.push({key:{status:`valid`,value:e},value:t._parse(new OE(n,i,n.path,e)),alwaysSet:e in n.data})}if(this._def.catchall instanceof pD){let e=this._def.unknownKeys;if(e===`passthrough`)for(let e of a)o.push({key:{status:`valid`,value:e},value:{status:`valid`,value:n.data[e]}});else if(e===`strict`)a.length>0&&(Q(n,{code:Z.unrecognized_keys,keys:a}),t.dirty());else if(e!==`strip`)throw Error(`Internal ZodObject error: invalid unknownKeys value.`)}else{let e=this._def.catchall;for(let t of a){let r=n.data[t];o.push({key:{status:`valid`,value:t},value:e._parse(new OE(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let n=await t.key,r=await t.value;e.push({key:n,value:r,alwaysSet:t.alwaysSet})}return e}).then(e=>gE.mergeObjectSync(t,e)):gE.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(t){return $.errToObj,new e({...this._def,unknownKeys:`strict`,...t===void 0?{}:{errorMap:(e,n)=>{var r;let i=(r=this._def).errorMap?.call(r,e,n).message??n.defaultError;return e.code===`unrecognized_keys`?{message:$.errToObj(t).message??i}:{message:i}}}})}strip(){return new e({...this._def,unknownKeys:`strip`})}passthrough(){return new e({...this._def,unknownKeys:`passthrough`})}extend(t){return new e({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new e({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:qD.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(t){return new e({...this._def,catchall:t})}pick(t){let n={};return aE.objectKeys(t).forEach(e=>{t[e]&&this.shape[e]&&(n[e]=this.shape[e])}),new e({...this._def,shape:()=>n})}omit(t){let n={};return aE.objectKeys(this.shape).forEach(e=>{t[e]||(n[e]=this.shape[e])}),new e({...this._def,shape:()=>n})}deepPartial(){return gD(this)}partial(t){let n={};return aE.objectKeys(this.shape).forEach(e=>{let r=this.shape[e];t&&!t[e]?n[e]=r:n[e]=r.optional()}),new e({...this._def,shape:()=>n})}required(t){let n={};return aE.objectKeys(this.shape).forEach(e=>{if(t&&!t[e])n[e]=this.shape[e];else{let t=this.shape[e];for(;t instanceof FD;)t=t._def.innerType;n[e]=t}}),new e({...this._def,shape:()=>n})}keyof(){return AD(aE.objectKeys(this.shape))}};_D.create=(e,t)=>new _D({shape:()=>e,unknownKeys:`strip`,catchall:pD.create(),typeName:qD.ZodObject,...AE(t)}),_D.strictCreate=(e,t)=>new _D({shape:()=>e,unknownKeys:`strict`,catchall:pD.create(),typeName:qD.ZodObject,...AE(t)}),_D.lazycreate=(e,t)=>new _D({shape:e,unknownKeys:`strip`,catchall:pD.create(),typeName:qD.ZodObject,...AE(t)});var vD=class extends jE{_parse(e){let{ctx:t}=this._processInputParams(e),n=this._def.options;function r(e){for(let t of e)if(t.result.status===`valid`)return t.result;for(let n of e)if(n.result.status===`dirty`)return t.common.issues.push(...n.ctx.common.issues),n.result;let n=e.map(e=>new lE(e.ctx.common.issues));return Q(t,{code:Z.invalid_union,unionErrors:n}),_E}if(t.common.async)return Promise.all(n.map(async e=>{let n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(r);{let e,r=[];for(let i of n){let n={...t,common:{...t.common,issues:[]},parent:null},a=i._parseSync({data:t.data,path:t.path,parent:n});if(a.status===`valid`)return a;a.status===`dirty`&&!e&&(e={result:a,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=r.map(e=>new lE(e));return Q(t,{code:Z.invalid_union,unionErrors:i}),_E}}get options(){return this._def.options}};vD.create=(e,t)=>new vD({options:e,typeName:qD.ZodUnion,...AE(t)});var yD=e=>e instanceof OD?yD(e.schema):e instanceof PD?yD(e.innerType()):e instanceof kD?[e.value]:e instanceof jD?e.options:e instanceof MD?aE.objectValues(e.enum):e instanceof LD?yD(e._def.innerType):e instanceof lD?[void 0]:e instanceof uD?[null]:e instanceof FD?[void 0,...yD(e.unwrap())]:e instanceof ID?[null,...yD(e.unwrap())]:e instanceof VD||e instanceof UD?yD(e.unwrap()):e instanceof RD?yD(e._def.innerType):[],bD=class e extends jE{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==X.object)return Q(t,{code:Z.invalid_type,expected:X.object,received:t.parsedType}),_E;let n=this.discriminator,r=t.data[n],i=this.optionsMap.get(r);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(Q(t,{code:Z.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),_E)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){let i=new Map;for(let e of n){let n=yD(e.shape[t]);if(!n.length)throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(let r of n){if(i.has(r))throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);i.set(r,e)}}return new e({typeName:qD.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...AE(r)})}};function xD(e,t){let n=sE(e),r=sE(t);if(e===t)return{valid:!0,data:e};if(n===X.object&&r===X.object){let n=aE.objectKeys(t),r=aE.objectKeys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=xD(e[n],t[n]);if(!r.valid)return{valid:!1};i[n]=r.data}return{valid:!0,data:i}}else if(n===X.array&&r===X.array){if(e.length!==t.length)return{valid:!1};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=xD(i,a);if(!o.valid)return{valid:!1};n.push(o.data)}return{valid:!0,data:n}}else if(n===X.date&&r===X.date&&+e==+t)return{valid:!0,data:e};else return{valid:!1}}var SD=class extends jE{_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(bE(e)||bE(r))return _E;let i=xD(e.value,r.value);return i.valid?((xE(e)||xE(r))&&t.dirty(),{status:t.value,value:i.data}):(Q(n,{code:Z.invalid_intersection_types}),_E)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([e,t])=>r(e,t)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}};SD.create=(e,t,n)=>new SD({left:e,right:t,typeName:qD.ZodIntersection,...AE(n)});var CD=class e extends jE{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==X.array)return Q(n,{code:Z.invalid_type,expected:X.array,received:n.parsedType}),_E;if(n.data.length<this._def.items.length)return Q(n,{code:Z.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),_E;!this._def.rest&&n.data.length>this._def.items.length&&(Q(n,{code:Z.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),t.dirty());let r=[...n.data].map((e,t)=>{let r=this._def.items[t]||this._def.rest;return r?r._parse(new OE(n,e,n.path,t)):null}).filter(e=>!!e);return n.common.async?Promise.all(r).then(e=>gE.mergeArray(t,e)):gE.mergeArray(t,r)}get items(){return this._def.items}rest(t){return new e({...this._def,rest:t})}};CD.create=(e,t)=>{if(!Array.isArray(e))throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);return new CD({items:e,typeName:qD.ZodTuple,rest:null,...AE(t)})};var wD=class e extends jE{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==X.object)return Q(n,{code:Z.invalid_type,expected:X.object,received:n.parsedType}),_E;let r=[],i=this._def.keyType,a=this._def.valueType;for(let e in n.data)r.push({key:i._parse(new OE(n,e,n.path,e)),value:a._parse(new OE(n,n.data[e],n.path,e)),alwaysSet:e in n.data});return n.common.async?gE.mergeObjectAsync(t,r):gE.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof jE?new e({keyType:t,valueType:n,typeName:qD.ZodRecord,...AE(r)}):new e({keyType:nD.create(),valueType:t,typeName:qD.ZodRecord,...AE(n)})}},TD=class extends jE{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==X.map)return Q(n,{code:Z.invalid_type,expected:X.map,received:n.parsedType}),_E;let r=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([e,t],a)=>({key:r._parse(new OE(n,e,n.path,[a,`key`])),value:i._parse(new OE(n,t,n.path,[a,`value`]))}));if(n.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let n of a){let r=await n.key,i=await n.value;if(r.status===`aborted`||i.status===`aborted`)return _E;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}})}else{let e=new Map;for(let n of a){let r=n.key,i=n.value;if(r.status===`aborted`||i.status===`aborted`)return _E;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}};TD.create=(e,t,n)=>new TD({valueType:t,keyType:e,typeName:qD.ZodMap,...AE(n)});var ED=class e extends jE{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==X.set)return Q(n,{code:Z.invalid_type,expected:X.set,received:n.parsedType}),_E;let r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(Q(n,{code:Z.too_small,minimum:r.minSize.value,type:`set`,inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(Q(n,{code:Z.too_big,maximum:r.maxSize.value,type:`set`,inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());let i=this._def.valueType;function a(e){let n=new Set;for(let r of e){if(r.status===`aborted`)return _E;r.status===`dirty`&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}let o=[...n.data.values()].map((e,t)=>i._parse(new OE(n,e,n.path,t)));return n.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(t,n){return new e({...this._def,minSize:{value:t,message:$.toString(n)}})}max(t,n){return new e({...this._def,maxSize:{value:t,message:$.toString(n)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};ED.create=(e,t)=>new ED({valueType:e,minSize:null,maxSize:null,typeName:qD.ZodSet,...AE(t)});var DD=class e extends jE{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==X.function)return Q(t,{code:Z.invalid_type,expected:X.function,received:t.parsedType}),_E;function n(e,n){return mE({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,pE(),uE].filter(e=>!!e),issueData:{code:Z.invalid_arguments,argumentsError:n}})}function r(e,n){return mE({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,pE(),uE].filter(e=>!!e),issueData:{code:Z.invalid_return_type,returnTypeError:n}})}let i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof ND){let e=this;return yE(async function(...t){let o=new lE([]),s=await e._def.args.parseAsync(t,i).catch(e=>{throw o.addIssue(n(t,e)),o}),c=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(c,i).catch(e=>{throw o.addIssue(r(c,e)),o})})}else{let e=this;return yE(function(...t){let o=e._def.args.safeParse(t,i);if(!o.success)throw new lE([n(t,o.error)]);let s=Reflect.apply(a,this,o.data),c=e._def.returns.safeParse(s,i);if(!c.success)throw new lE([r(s,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new e({...this._def,args:CD.create(t).rest(fD.create())})}returns(t){return new e({...this._def,returns:t})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(t,n,r){return new e({args:t||CD.create([]).rest(fD.create()),returns:n||fD.create(),typeName:qD.ZodFunction,...AE(r)})}},OD=class extends jE{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};OD.create=(e,t)=>new OD({getter:e,typeName:qD.ZodLazy,...AE(t)});var kD=class extends jE{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return Q(t,{received:t.data,code:Z.invalid_literal,expected:this._def.value}),_E}return{status:`valid`,value:e.data}}get value(){return this._def.value}};kD.create=(e,t)=>new kD({value:e,typeName:qD.ZodLiteral,...AE(t)});function AD(e,t){return new jD({values:e,typeName:qD.ZodEnum,...AE(t)})}var jD=class e extends jE{constructor(){super(...arguments),EE.set(this,void 0)}_parse(e){if(typeof e.data!=`string`){let t=this._getOrReturnCtx(e),n=this._def.values;return Q(t,{expected:aE.joinValues(n),received:t.parsedType,code:Z.invalid_type}),_E}if(wE(this,EE,`f`)||TE(this,EE,new Set(this._def.values),`f`),!wE(this,EE,`f`).has(e.data)){let t=this._getOrReturnCtx(e),n=this._def.values;return Q(t,{received:t.data,code:Z.invalid_enum_value,options:n}),_E}return yE(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(t,n=this._def){return e.create(t,{...this._def,...n})}exclude(t,n=this._def){return e.create(this.options.filter(e=>!t.includes(e)),{...this._def,...n})}};EE=new WeakMap,jD.create=AD;var MD=class extends jE{constructor(){super(...arguments),DE.set(this,void 0)}_parse(e){let t=aE.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==X.string&&n.parsedType!==X.number){let e=aE.objectValues(t);return Q(n,{expected:aE.joinValues(e),received:n.parsedType,code:Z.invalid_type}),_E}if(wE(this,DE,`f`)||TE(this,DE,new Set(aE.getValidEnumValues(this._def.values)),`f`),!wE(this,DE,`f`).has(e.data)){let e=aE.objectValues(t);return Q(n,{received:n.data,code:Z.invalid_enum_value,options:e}),_E}return yE(e.data)}get enum(){return this._def.values}};DE=new WeakMap,MD.create=(e,t)=>new MD({values:e,typeName:qD.ZodNativeEnum,...AE(t)});var ND=class extends jE{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==X.promise&&t.common.async===!1?(Q(t,{code:Z.invalid_type,expected:X.promise,received:t.parsedType}),_E):yE((t.parsedType===X.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}};ND.create=(e,t)=>new ND({type:e,typeName:qD.ZodPromise,...AE(t)});var PD=class extends jE{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===qD.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:e=>{Q(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type===`preprocess`){let e=r.transform(n.data,i);if(n.common.async)return Promise.resolve(e).then(async e=>{if(t.value===`aborted`)return _E;let r=await this._def.schema._parseAsync({data:e,path:n.path,parent:n});return r.status===`aborted`?_E:r.status===`dirty`||t.value===`dirty`?vE(r.value):r});{if(t.value===`aborted`)return _E;let r=this._def.schema._parseSync({data:e,path:n.path,parent:n});return r.status===`aborted`?_E:r.status===`dirty`||t.value===`dirty`?vE(r.value):r}}if(r.type===`refinement`){let e=e=>{let t=r.refinement(e,i);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);return e};if(n.common.async===!1){let r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return r.status===`aborted`?_E:(r.status===`dirty`&&t.dirty(),e(r.value),{status:t.value,value:r.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(n=>n.status===`aborted`?_E:(n.status===`dirty`&&t.dirty(),e(n.value).then(()=>({status:t.value,value:n.value}))))}if(r.type===`transform`)if(n.common.async===!1){let e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!SE(e))return e;let a=r.transform(e.value,i);if(a instanceof Promise)throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(e=>SE(e)?Promise.resolve(r.transform(e.value,i)).then(e=>({status:t.value,value:e})):e);aE.assertNever(r)}};PD.create=(e,t,n)=>new PD({schema:e,typeName:qD.ZodEffects,effect:t,...AE(n)}),PD.createWithPreprocess=(e,t,n)=>new PD({schema:t,effect:{type:`preprocess`,transform:e},typeName:qD.ZodEffects,...AE(n)});var FD=class extends jE{_parse(e){return this._getType(e)===X.undefined?yE(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};FD.create=(e,t)=>new FD({innerType:e,typeName:qD.ZodOptional,...AE(t)});var ID=class extends jE{_parse(e){return this._getType(e)===X.null?yE(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};ID.create=(e,t)=>new ID({innerType:e,typeName:qD.ZodNullable,...AE(t)});var LD=class extends jE{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return t.parsedType===X.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};LD.create=(e,t)=>new LD({innerType:e,typeName:qD.ZodDefault,defaultValue:typeof t.default==`function`?t.default:()=>t.default,...AE(t)});var RD=class extends jE{_parse(e){let{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return CE(r)?r.then(e=>({status:`valid`,value:e.status===`valid`?e.value:this._def.catchValue({get error(){return new lE(n.common.issues)},input:n.data})})):{status:`valid`,value:r.status===`valid`?r.value:this._def.catchValue({get error(){return new lE(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}};RD.create=(e,t)=>new RD({innerType:e,typeName:qD.ZodCatch,catchValue:typeof t.catch==`function`?t.catch:()=>t.catch,...AE(t)});var zD=class extends jE{_parse(e){if(this._getType(e)!==X.nan){let t=this._getOrReturnCtx(e);return Q(t,{code:Z.invalid_type,expected:X.nan,received:t.parsedType}),_E}return{status:`valid`,value:e.data}}};zD.create=e=>new zD({typeName:qD.ZodNaN,...AE(e)});var BD=Symbol(`zod_brand`),VD=class extends jE{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}},HD=class e extends jE{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?_E:e.status===`dirty`?(t.dirty(),vE(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})();{let e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?_E:e.status===`dirty`?(t.dirty(),{status:`dirty`,value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(t,n){return new e({in:t,out:n,typeName:qD.ZodPipeline})}},UD=class extends jE{_parse(e){let t=this._def.innerType._parse(e),n=e=>(SE(e)&&(e.value=Object.freeze(e.value)),e);return CE(t)?t.then(e=>n(e)):n(t)}unwrap(){return this._def.innerType}};UD.create=(e,t)=>new UD({innerType:e,typeName:qD.ZodReadonly,...AE(t)});function WD(e,t){let n=typeof e==`function`?e(t):typeof e==`string`?{message:e}:e;return typeof n==`string`?{message:n}:n}function GD(e,t={},n){return e?dD.create().superRefine((r,i)=>{let a=e(r);if(a instanceof Promise)return a.then(e=>{if(!e){let e=WD(t,r),a=e.fatal??n??!0;i.addIssue({code:`custom`,...e,fatal:a})}});if(!a){let e=WD(t,r),a=e.fatal??n??!0;i.addIssue({code:`custom`,...e,fatal:a})}}):dD.create()}var KD={object:_D.lazycreate},qD;(function(e){e.ZodString=`ZodString`,e.ZodNumber=`ZodNumber`,e.ZodNaN=`ZodNaN`,e.ZodBigInt=`ZodBigInt`,e.ZodBoolean=`ZodBoolean`,e.ZodDate=`ZodDate`,e.ZodSymbol=`ZodSymbol`,e.ZodUndefined=`ZodUndefined`,e.ZodNull=`ZodNull`,e.ZodAny=`ZodAny`,e.ZodUnknown=`ZodUnknown`,e.ZodNever=`ZodNever`,e.ZodVoid=`ZodVoid`,e.ZodArray=`ZodArray`,e.ZodObject=`ZodObject`,e.ZodUnion=`ZodUnion`,e.ZodDiscriminatedUnion=`ZodDiscriminatedUnion`,e.ZodIntersection=`ZodIntersection`,e.ZodTuple=`ZodTuple`,e.ZodRecord=`ZodRecord`,e.ZodMap=`ZodMap`,e.ZodSet=`ZodSet`,e.ZodFunction=`ZodFunction`,e.ZodLazy=`ZodLazy`,e.ZodLiteral=`ZodLiteral`,e.ZodEnum=`ZodEnum`,e.ZodEffects=`ZodEffects`,e.ZodNativeEnum=`ZodNativeEnum`,e.ZodOptional=`ZodOptional`,e.ZodNullable=`ZodNullable`,e.ZodDefault=`ZodDefault`,e.ZodCatch=`ZodCatch`,e.ZodPromise=`ZodPromise`,e.ZodBranded=`ZodBranded`,e.ZodPipeline=`ZodPipeline`,e.ZodReadonly=`ZodReadonly`})(qD||={});var JD=(e,t={message:`Input not instance of ${e.name}`})=>GD(t=>t instanceof e,t),YD=nD.create,XD=iD.create,ZD=zD.create,QD=aD.create,$D=oD.create,eO=sD.create,tO=cD.create,nO=lD.create,rO=uD.create,iO=dD.create,aO=fD.create,oO=pD.create,sO=mD.create,cO=hD.create,lO=_D.create,uO=_D.strictCreate,dO=vD.create,fO=bD.create,pO=SD.create,mO=CD.create,hO=wD.create,gO=TD.create,_O=ED.create,vO=DD.create,yO=OD.create,bO=kD.create,xO=jD.create,SO=MD.create,CO=ND.create,wO=PD.create,TO=FD.create,EO=ID.create,DO=PD.createWithPreprocess,OO=HD.create,kO=Object.freeze({__proto__:null,defaultErrorMap:uE,setErrorMap:fE,getErrorMap:pE,makeIssue:mE,EMPTY_PATH:hE,addIssueToContext:Q,ParseStatus:gE,INVALID:_E,DIRTY:vE,OK:yE,isAborted:bE,isDirty:xE,isValid:SE,isAsync:CE,get util(){return aE},get objectUtil(){return oE},ZodParsedType:X,getParsedType:sE,ZodType:jE,datetimeRegex:QE,ZodString:nD,ZodNumber:iD,ZodBigInt:aD,ZodBoolean:oD,ZodDate:sD,ZodSymbol:cD,ZodUndefined:lD,ZodNull:uD,ZodAny:dD,ZodUnknown:fD,ZodNever:pD,ZodVoid:mD,ZodArray:hD,ZodObject:_D,ZodUnion:vD,ZodDiscriminatedUnion:bD,ZodIntersection:SD,ZodTuple:CD,ZodRecord:wD,ZodMap:TD,ZodSet:ED,ZodFunction:DD,ZodLazy:OD,ZodLiteral:kD,ZodEnum:jD,ZodNativeEnum:MD,ZodPromise:ND,ZodEffects:PD,ZodTransformer:PD,ZodOptional:FD,ZodNullable:ID,ZodDefault:LD,ZodCatch:RD,ZodNaN:zD,BRAND:BD,ZodBranded:VD,ZodPipeline:HD,ZodReadonly:UD,custom:GD,Schema:jE,ZodSchema:jE,late:KD,get ZodFirstPartyTypeKind(){return qD},coerce:{string:e=>nD.create({...e,coerce:!0}),number:e=>iD.create({...e,coerce:!0}),boolean:e=>oD.create({...e,coerce:!0}),bigint:e=>aD.create({...e,coerce:!0}),date:e=>sD.create({...e,coerce:!0})},any:iO,array:cO,bigint:QD,boolean:$D,date:eO,discriminatedUnion:fO,effect:wO,enum:xO,function:vO,instanceof:JD,intersection:pO,lazy:yO,literal:bO,map:gO,nan:ZD,nativeEnum:SO,never:oO,null:rO,nullable:EO,number:XD,object:lO,oboolean:()=>$D().optional(),onumber:()=>XD().optional(),optional:TO,ostring:()=>YD().optional(),pipeline:OO,preprocess:DO,promise:CO,record:hO,set:_O,strictObject:uO,string:YD,symbol:tO,transformer:wO,tuple:mO,undefined:nO,union:dO,unknown:aO,void:sO,NEVER:_E,ZodIssueCode:Z,quotelessJson:cE,ZodError:lE}),AO={name:`@imgly/background-removal`,version:`1.7.0`,description:`Background Removal in the Browser`,keywords:[`background-removal`,`client-side`,`data-privacy`,`image-segmentation`,`image-matting`,`onnx`],repository:{type:`git`,url:`git+https://github.com/imgly/background-removal-js.git`},license:`SEE LICENSE IN LICENSE.md`,author:{name:`IMG.LY GmbH`,email:`support@img.ly`,url:`https://img.ly`},bugs:{email:`support@img.ly`},source:`./src/index.ts`,main:`./dist/index.cjs`,module:`./dist/index.mjs`,types:`./dist/src/index.d.ts`,exports:{".":{require:`./dist/index.cjs`,import:`./dist/index.mjs`,types:`./dist/src/index.d.ts`}},homepage:`https://img.ly/showcases/cesdk/web/background-removal`,files:[`LICENSE.md`,`README.md`,`CHANGELOG.md`,`ThirdPartyLicenses.json`,`dist/`,`bin/`],scripts:{start:`pnpm run watch`,clean:`npx rimraf dist`,test:`true`,resources:`node ../../scripts/package-resources.mjs`,"changelog:create":`node ../../scripts/changelog/changelog-create.mjs`,"changelog:generate":`node ../../scripts/changelog/changelog-generate.mjs`,build:`pnpm run clean && pnpm run types && pnpm run resources && pnpm run changelog:generate && node scripts/build.mjs`,types:` npx tsc --declaration --emitDeclarationOnly --declarationDir dist --declarationMap`,watch:`pnpm run clean && pnpm run resources && pnpm run changelog:generate && node scripts/watch.mjs`,"publish:latest":`pnpm publish --tag latest --access public`,"publish:next":`pnpm publish --tag next --access public`,"package:pack":`pnpm pack . --pack-destination ../../releases`,"check:all":`pnpm run check:pretty`,"check:pretty":`prettier --list-different './src/**/*.{ts,tsx}'`,pretty:`prettier --write './src/**/*.{ts,tsx}'`},dependencies:{"lodash-es":`^4.17.21`,ndarray:`~1.0.0`,zod:`^3.23.8`},peerDependencies:{"onnxruntime-web":`1.21.0`},devDependencies:{"@types/lodash-es":`^4.17.12`,"@types/ndarray":`~1.0.14`,"@types/node":`~20.3.0`,assert:`~2.0.0`,esbuild:`~0.18.0`,glob:`~10.3.0`,"npm-dts":`~1.3.0`,process:`~0.11.0`,"ts-loader":`~9.4.0`,tslib:`~2.5.0`,typescript:`~5.1.0`,util:`~0.12.0`,webpack:`~5.85.0`,"webpack-cli":`~5.1.0`}},jO=kO.object({publicPath:kO.string().optional().describe(`The public path to the wasm files and the onnx model.`).default("https://staticimgly.com/@imgly/background-removal-data/${PACKAGE_VERSION}/dist/").transform(e=>e.replace("${PACKAGE_NAME}",AO.name).replace("${PACKAGE_VERSION}",AO.version)),debug:kO.boolean().default(!1).describe(`Whether to enable debug logging.`),rescale:kO.boolean().default(!0).describe(`Whether to rescale the image.`),device:kO.enum([`cpu`,`gpu`]).default(`cpu`).describe(`The device to run the model on.`),proxyToWorker:kO.boolean().default(!1).describe(`Whether to proxy inference to a web worker.`),fetchArgs:kO.any().default({}).describe(`Arguments to pass to fetch when loading the model.`),progress:kO.function().args(kO.string(),kO.number(),kO.number()).returns(kO.void()).describe(`Progress callback.`).optional(),model:kO.preprocess(e=>{switch(e){case`large`:return`isnet`;case`small`:return`isnet_quint8`;case`medium`:return`isnet_fp16`;default:return e}},kO.enum([`isnet`,`isnet_fp16`,`isnet_quint8`])).default(`medium`),output:kO.object({format:kO.enum([`image/png`,`image/jpeg`,`image/webp`,`image/x-rgba8`,`image/x-alpha8`]).default(`image/png`),quality:kO.number().default(.8)}).default({})}).default({}).transform(e=>(e.debug&&console.log(`Config:`,e),e.debug&&!e.progress&&(e.progress=e.progress??((e,t,n)=>{console.debug(`Downloading ${e}: ${t} of ${n}`)}),crossOriginIsolated||e.debug&&console.debug(`Cross-Origin-Isolated is not enabled. Performance will be degraded. Please see  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer.`)),e));function MO(e){return jO.parse(e??{})}var NO=BC(UC());async function PO(e){e.debug&&console.debug(`Loading model...`,e.model);let t=e.model;return await rE(await(await eE(`/models/${t}`,e)).arrayBuffer(),e)}async function FO(e){e=MO(e);let t=await PO(e);return{config:e,session:{base:t}}}async function IO(e,t,n){let r=1024,[i,a,o]=e.shape,s=GT(e,r,r,!1),c=KT(s),l=await iE(n.base,[[`input`,c]],[`output`],t),u=JT((0,NO.default)(l[0].data,[r,r,1]));return t.rescale?(u=GT(u,a,i,!1),[u,e]):[u,s]}var LO=FT(FO,e=>JSON.stringify(e));async function RO(e,t){let{config:n,session:r}=await LO(t);n.progress&&n.progress(`compute:decode`,0,4);let i=await qT(e,n);n.progress?.(`compute:inference`,1,4);let[a,o]=await IO(i,n,r);n.progress?.(`compute:mask`,2,4);let s=o,[c,l]=s.shape,u=c*l;for(let e=0;e<u;e+=1)s.data[4*e+3]=a.data[e];n.progress?.(`compute:encode`,3,4);let d=await BT(s,n.output.quality,n.output.format);return n.progress?.(`compute:encode`,4,4),d}
/*! Bundled license information:

is-buffer/index.js:
(*!
* Determine if an object is a Buffer
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*)
*/
self.onmessage=async e=>{let{id:t,file:n,model:r}=e.data;try{let e=await RO(n,{model:r,device:`cpu`,proxyToWorker:!1,output:{format:`image/png`,quality:1},progress:(e,n,r)=>{self.postMessage({id:t,type:`progress`,key:e,current:n,total:r})}});self.postMessage({id:t,type:`result`,result:e})}catch(e){let n=e instanceof Error?`${e.name}: ${e.message}${e.stack?`\n${e.stack}`:``}`:String(e);self.postMessage({id:t,type:`error`,error:n||`主体识别失败`})}}})();