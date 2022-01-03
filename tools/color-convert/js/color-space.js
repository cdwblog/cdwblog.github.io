require=function e$$0(e,h,a){function c(f,g){if(!h[f]){if(!e[f]){var k="function"==typeof require&&require;if(!g&&k)return k(f,!0);if(d)return d(f,!0);k=Error("Cannot find module '"+f+"'");throw k.code="MODULE_NOT_FOUND",k;}k=h[f]={exports:{}};e[f][0].call(k.exports,function(a){var d=e[f][1][a];return c(d?d:a)},k,k.exports,e$$0,e,h,a)}return h[f].exports}for(var d="function"==typeof require&&require,f=0;f<a.length;f++)c(a[f]);return c}({1:[function(b,e,h){e.exports={aliceblue:[240,248,255],antiquewhite:[250,
235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],
darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,
250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,
255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,
211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,
238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,
128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},{}],2:[function(b,e,h){b=b("./rgb");(e.exports={name:"cmy",min:[0,0,0],max:[100,100,100],channel:["cyan","magenta","yellow"],alias:["CMY"]}).rgb=function(a){return[255*(1-a[0]/100),255*(1-a[1]/100),
255*(1-a[2]/100)]};b.cmy=function(a){return[100*(1-a[0]/255)||0,100*(1-a[1]/255)||0,100*(1-a[2]/255)||0]}},{"./rgb":16}],3:[function(b,e,h){b=b("./rgb");e.exports={name:"cmyk",min:[0,0,0,0],max:[100,100,100,100],channel:["cyan","magenta","yellow","black"],alias:["CMYK"],rgb:function(a){var c=a[1]/100,d=a[2]/100,f=a[3]/100;a=1-Math.min(1,a[0]/100*(1-f)+f);c=1-Math.min(1,c*(1-f)+f);d=1-Math.min(1,d*(1-f)+f);return[255*a,255*c,255*d]}};b.cmyk=function(a){var c=a[0]/255,d=a[1]/255;a=a[2]/255;var f;f=
Math.min(1-c,1-d,1-a);return[100*((1-c-f)/(1-f)||0),100*((1-d-f)/(1-f)||0),100*((1-a-f)/(1-f)||0),100*f]}},{"./rgb":16}],4:[function(b,e,h){h=b("./rgb");var a=b("mumath/loop"),c=b("mumath/between");(e.exports={name:"hsi",min:[0,0,0],max:[360,100,255],channel:["hue","saturation","intensity"],alias:["HSI"]}).rgb=function(d){var f=a(d[0],0,360)*Math.PI/180,b=c(d[1],0,100)/100;d=c(d[2],0,255)/255;var g=Math.PI/3,k,e,h;f<2*g?(h=d*(1-b),k=d*(1+b*Math.cos(f)/Math.cos(g-f)),e=d*(1+b*(1-Math.cos(f)/Math.cos(g-
f)))):f<4*g?(f-=2*g,k=d*(1-b),e=d*(1+b*Math.cos(f)/Math.cos(g-f)),h=d*(1+b*(1-Math.cos(f)/Math.cos(g-f)))):(f-=4*g,e=d*(1-b),h=d*(1+b*Math.cos(f)/Math.cos(g-f)),k=d*(1+b*(1-Math.cos(f)/Math.cos(g-f))));return[255*k,255*e,255*h]};h.hsi=function(a){var f=a[0]+a[1]+a[2],c=a[0]/f,b=a[1]/f,k=a[2]/f;a=Math.acos(.5*(c-b+(c-k))/Math.sqrt((c-b)*(c-b)+(c-k)*(b-k)));k>b&&(a=2*Math.PI-a);c=1-3*Math.min(c,b,k);return[180*a/Math.PI,100*c,f/3]}},{"./rgb":16,"mumath/between":25,"mumath/loop":35}],5:[function(b,e,
h){b=b("./rgb");e.exports={name:"hsl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HSL"],rgb:function(a){var c=a[0]/360,d=a[1]/100;a=a[2]/100;var f,b;if(0===d)return f=255*a,[f,f,f];d=.5>a?a*(1+d):a+d-a*d;a=2*a-d;b=[0,0,0];for(var g=0;3>g;g++)f=c+1/3*-(g-1),0>f?f++:1<f&&f--,f=1>6*f?a+6*(d-a)*f:1>2*f?d:2>3*f?a+(d-a)*(2/3-f)*6:a,b[g]=255*f;return b}};b.hsl=function(a){var c=a[0]/255,d=a[1]/255,f=a[2]/255;a=Math.min(c,d,f);var b=Math.max(c,d,f),g=b-a,k;b===a?k=0:c===
b?k=(d-f)/g:d===b?k=2+(f-c)/g:f===b&&(k=4+(c-d)/g);k=Math.min(60*k,360);0>k&&(k+=360);c=(a+b)/2;return[k,100*(b===a?0:.5>=c?g/(b+a):g/(2-b-a)),100*c]}},{"./rgb":16}],6:[function(b,e,h){h=b("./rgb");b=b("./hsl");e.exports={name:"hsv",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","value"],alias:["HSV","HSB"],rgb:function(a){var c=a[0]/60,d=a[1]/100;a=a[2]/100;var f=Math.floor(c)%6,b=c-Math.floor(c),c=255*a*(1-d),g=255*a*(1-d*b),d=255*a*(1-d*(1-b));a*=255;switch(f){case 0:return[a,d,c];case 1:return[g,
a,c];case 2:return[c,a,d];case 3:return[c,g,a];case 4:return[d,c,a];case 5:return[a,c,g]}},hsl:function(a){var c=a[0],d=a[1]/100,f=a[2]/100;a=(2-d)*f;d=(d=d*f/(1>=a?a:2-a))||0;return[c,100*d,a/2*100]}};h.hsv=function(a){var c=a[0],d=a[1];a=a[2];var f=Math.min(c,d,a),b=Math.max(c,d,a),g=b-f,k,e;e=0===b?0:g/b*100;b===f?k=0:c===b?k=(d-a)/g:d===b?k=2+(a-c)/g:a===b&&(k=4+(c-d)/g);k=Math.min(60*k,360);0>k&&(k+=360);return[k,e,b/255*1E3/10]};b.hsv=function(a){var c=a[0],d=a[1]/100;a=a[2]/100;a*=2;d*=1>=
a?a:2-a;return[c,100*(2*d/(a+d)||0),(a+d)/2*100]}},{"./hsl":5,"./rgb":16}],7:[function(b,e,h){var a=b("./xyz"),c=b("./lchuv"),d=b("husl");e.exports={name:"husl",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HuSL"],lchuv:d._conv.husl.lch,xyz:function(a){return c.xyz(d._conv.husl.lch(a))},huslp:function(a){return d._conv.lch.huslp(d._conv.husl.lch(a))}};c.husl=d._conv.lch.husl;a.husl=function(f){return d._conv.lch.husl(a.lchuv(f))}},{"./lchuv":13,"./xyz":18,husl:15}],
8:[function(b,e,h){var a=b("./xyz"),c=b("./lchuv"),d=b("husl");e.exports={name:"huslp",min:[0,0,0],max:[360,100,100],channel:["hue","saturation","lightness"],alias:["HuSLp"],lchuv:d._conv.huslp.lch,xyz:function(a){return c.xyz(d._conv.huslp.lch(a))},husl:function(a){return d._conv.lch.husl(d._conv.huslp.lch(a))}};c.huslp=d._conv.lch.huslp;a.huslp=function(f){return d._conv.lch.huslp(a.lchuv(f))}},{"./lchuv":13,"./xyz":18,husl:15}],9:[function(b,e,h){var a=b("./rgb"),c=b("./hsv"),d=b("./hsl"),f=e.exports=
{name:"hwb",min:[0,0,0],max:[360,100,100],channel:["hue","whiteness","blackness"],alias:["HWB"],rgb:function(a){var d=a[0]/360,f=a[1]/100;a=a[2]/100;var c=f+a,b;1<c&&(f/=c,a/=c);c=Math.floor(6*d);a=1-a;d=6*d-c;0!==(c&1)&&(d=1-d);d=f+d*(a-f);switch(c){default:case 6:case 0:c=a;b=d;break;case 1:c=d;b=a;break;case 2:c=f;b=a;f=d;break;case 3:c=f;b=d;f=a;break;case 4:c=d;b=f;f=a;break;case 5:c=a,b=f,f=d}return[255*c,255*b,255*f]},hsv:function(a){var d=a[0],f=a[1],c=a[2];100<=f+c?(a=0,f=100*f/(f+c)):(a=
100-f/(1-c/100),f=100-c);return[d,a,f]},hsl:function(a){return c.hsl(f.hsv(a))}};a.hwb=function(d){var f=d[0],c=d[1],b=d[2];d=a.hsl(d)[0];var e=1/255*Math.min(f,Math.min(c,b)),b=1-1/255*Math.max(f,Math.max(c,b));return[d,100*e,100*b]};c.hwb=function(a){var d=a[1],f=a[2];return[a[0],0===f?0:f*(1-d/100),100-f]};d.hwb=function(a){return c.hwb(d.hsv(a))}},{"./hsl":5,"./hsv":6,"./rgb":16}],10:[function(b,e,h){b=b("./xyz");e.exports={name:"lab",min:[0,-100,-100],max:[100,100,100],channel:["lightness","a",
"b"],alias:["LAB","cielab"],xyz:function(a){var c=a[0],d=a[1];a=a[2];var f,b,g;8>=c?(c=100*c/903.3,g=c/100*7.787+16/116):(c=100*Math.pow((c+16)/116,3),g=Math.pow(c/100,1/3));f=.008856>=f/95.047?f=95.047*(d/500+g-16/116)/7.787:95.047*Math.pow(d/500+g,3);b=.008859>=b/108.883?b=108.883*(g-a/200-16/116)/7.787:108.883*Math.pow(g-a/200,3);return[f,c,b]}};b.lab=function(a){var c=a[0],d=a[1];a=a[2];c/=95.047;d/=100;a/=108.883;c=.008856<c?Math.pow(c,1/3):7.787*c+16/116;d=.008856<d?Math.pow(d,1/3):7.787*d+
16/116;a=.008856<a?Math.pow(a,1/3):7.787*a+16/116;return[116*d-16,500*(c-d),200*(d-a)]}},{"./xyz":18}],11:[function(b,e,h){b=b("./xyz");e.exports={name:"labh",min:[0,-128,-128],max:[100,128,128],channel:["lightness","a","b"],alias:["LABh","hunter-lab","hlab"],xyz:function(a){var c=a[0],d=c/10,d=d*d;return[(a[1]/17.5*c/10+d)/1.02,d,-(a[2]/7*c/10-d)/.847]}};b.labh=function(a){var c=a[0],d=a[1],f=a[2];a=10*Math.sqrt(d);c=0===d?0:17.5*((1.02*c-d)/Math.sqrt(d));d=0===d?0:7*((d-.847*f)/Math.sqrt(d));return[a,
c,d]}},{"./xyz":18}],12:[function(b,e,h){var a=b("./xyz"),c=b("./lab"),d=e.exports={name:"lchab",min:[0,0,0],max:[100,100,360],channel:["lightness","chroma","hue"],alias:["LCHab","cielch","LCH","HLC"],xyz:function(a){return c.xyz(d.lab(a))},lab:function(a){var d=a[0],c=a[1],b;b=a[2]/360*2*Math.PI;a=c*Math.cos(b);c*=Math.sin(b);return[d,a,c]}};c.lchab=function(a){var d=a[0],c=a[1],b=a[2];a=360*Math.atan2(b,c)/2/Math.PI;0>a&&(a+=360);c=Math.sqrt(c*c+b*b);return[d,c,a]};a.lchab=function(d){return c.lchab(a.lab(d))}},
{"./lab":10,"./xyz":18}],13:[function(b,e,h){var a=b("./luv"),c=b("./xyz"),d=e.exports={name:"lchuv",channel:["lightness","chroma","hue"],alias:["LCHuv","cielchuv"],min:[0,0,0],max:[100,100,360],luv:function(a){var d=a[0],c=a[1],b;b=a[2]/360*2*Math.PI;a=c*Math.cos(b);c*=Math.sin(b);return[d,a,c]},xyz:function(c){return a.xyz(d.luv(c))}};a.lchuv=function(a){var d=a[0],c=a[1],b=a[2];a=Math.sqrt(c*c+b*b);c=360*Math.atan2(b,c)/2/Math.PI;0>c&&(c+=360);return[d,a,c]};c.lchuv=function(d){return a.lchuv(c.luv(d))}},
{"./luv":14,"./xyz":18}],14:[function(b,e,h){var a=b("./xyz");e.exports={name:"luv",min:[0,-134,-140],max:[100,224,122],channel:["lightness","u","v"],alias:["LUV","cieluv"],xyz:function(c,d,f){var b,g,e,h;e=c[0];b=c[1];g=c[2];if(0===e)return[0,0,0];d=d||"D65";f=f||2;h=a.whitepoint[f][d][0];c=a.whitepoint[f][d][1];d=a.whitepoint[f][d][2];b=b/(13*e)+4*h/(h+15*c+3*d)||0;g=g/(13*e)+9*c/(h+15*c+3*d)||0;e=8<e?c*Math.pow((e+16)/116,3):c*e*.0011070564598794539;return[9*e*b/(4*g)||0,e,e*(12-3*b-20*g)/(4*g)||
0]}};a.luv=function(c,d,f){var b,g,e,h;d=d||"D65";f=f||2;h=a.whitepoint[f][d][0];g=a.whitepoint[f][d][1];f=a.whitepoint[f][d][2];d=4*h/(h+15*g+3*f);h=9*g/(h+15*g+3*f);b=c[0];f=c[1];e=c[2];c=4*b/(b+15*f+3*e)||0;b=9*f/(b+15*f+3*e)||0;g=f/g;g=.008856451679035631>=g?903.2962962962961*g:116*Math.pow(g,1/3)-16;return[g,13*g*(c-d),13*g*(b-h)]}},{"./xyz":18}],15:[function(b,e,h){(function(){var a,c,d,f,b,g,h,l,m,p,y,z,r,q,v,w,n,x,t;r={R:[3.240969941904521,-1.537383177570093,-.498610760293],G:[-.96924363628087,
1.87596750150772,.041555057407175],B:[.055630079696993,-.20397695888897,1.056971514242878]};a=[.41239079926595,.35758433938387,.18048078840183];c=[.21263900587151,.71516867876775,.072192315360733];d=[.019330818715591,.11919477979462,.95053215224966];p=function(a){var d,c,f,b,g,e,h,u,k,l,x,t,m,p;f=Math.pow(a+16,3)/1560896;t=.0088564516<f?f:a/903.2962962;x=[];k=["R","G","B"];f=0;for(g=k.length;f<g;f++)for(c=k[f],b=r[c],c=b[0],h=b[1],u=b[2],l=[0,1],b=0,e=l.length;b<e;b++)d=l[b],m=(284517*c-94839*u)*
t,p=(838422*u+769860*h+731718*c)*a*t-769860*d*a,d=(632260*u-126452*h)*t+126452*d,x.push([m/d,p/d]);return x};y=function(a,d){return(a[1]-d[1])/(d[0]-a[0])};h=function(a){return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2))};z=function(a,d){var c;c=d[0];c=d[1]/(Math.sin(a)-c*Math.cos(a));return 0>c?null:c};v=function(a){var d,c,b,f,g,e;b=[];g=p(a);a=0;for(c=g.length;a<c;a++)d=g[a],f=d[0],d=d[1],e=y([f,d],[-1/f,0]),b.push(h([e,d+e*f]));return Math.min.apply(Math,b)};q=function(a,d){var c,f,b,g,e,h;c=
d/360*Math.PI*2;e=[];h=p(a);f=0;for(g=h.length;f<g;f++)b=h[f],b=z(c,b),null!==b&&e.push(b);return Math.min.apply(Math,e)};l=function(a,d){var c,b,f,g;c=b=g=0;for(f=a.length-1;0<=f?b<=f:b>=f;c=0<=f?++b:--b)g+=a[c]*d[c];return g};x=function(a,d){var c;c=Math.pow(10,d);return Math.round(a*c)/c};m=function(a){return.0031308>=a?12.92*a:1.055*Math.pow(a,1/2.4)-.055};t=function(a){return.04045<a?Math.pow((a+.055)/1.055,2.4):a/12.92};w=function(a){var d,c,b,f;f=[];c=0;for(b=a.length;c<b;c++)d=a[c],f.push(x(d,
3));a=f;c=0;for(b=a.length;c<b;c++)if(d=a[c],-1E-4>d||1.0001<d)throw Error("Illegal rgb value: "+d);f=[];c=0;for(b=a.length;c<b;c++)d=a[c],f.push(Math.round(255*d));return f};g={xyz:{},luv:{},lch:{},husl:{},huslp:{},rgb:{},hex:{}};g.xyz.rgb=function(a){var d,c;c=m(l(r.R,a));d=m(l(r.G,a));a=m(l(r.B,a));return[c,d,a]};g.rgb.xyz=function(b){var f,g;g=b[0];f=b[1];b=b[2];b=[t(g),t(f),t(b)];f=l(a,b);g=l(c,b);b=l(d,b);return[f,g,b]};b=function(a){return.0088564516>=a?a/1*903.2962962:116*Math.pow(a/1,1/3)-
16};f=function(a){return 8>=a?1*a/903.2962962:1*Math.pow((a+16)/116,3)};g.xyz.luv=function(a){var d,c,f;c=a[0];d=a[1];f=a[2];a=4*c/(c+15*d+3*f);c=9*d/(c+15*d+3*f);d=b(d);return 0===d?[0,0,0]:[d,13*d*(a-.19783000664283),13*d*(c-.46831999493879)]};g.luv.xyz=function(a){var d,c;d=a[0];c=a[1];a=a[2];if(0===d)return[0,0,0];c=c/(13*d)+.19783000664283;a=a/(13*d)+.46831999493879;d=f(d);c=0-9*d*c/((c-4)*a-c*a);return[c,d,(9*d-15*a*d-a*c)/(3*a)]};g.luv.lch=function(a){var d,c,b;c=a[0];d=a[1];b=a[2];a=Math.pow(Math.pow(d,
2)+Math.pow(b,2),.5);d=360*Math.atan2(b,d)/2/Math.PI;0>d&&(d=360+d);return[c,a,d]};g.lch.luv=function(a){var d,c,b;b=a[0];d=a[1];c=a[2]/360*2*Math.PI;a=Math.cos(c)*d;d*=Math.sin(c);return[b,a,d]};g.husl.lch=function(a){var d,c,b;d=a[0];c=a[1];a=a[2];if(99.9999999<a)return[100,0,d];if(1E-8>a)return[0,0,d];b=q(a,d);return[a,b/100*c,d]};g.lch.husl=function(a){var d,c,b;c=a[0];d=a[1];a=a[2];if(99.9999999<c)return[a,0,100];if(1E-8>c)return[a,0,0];b=q(c,a);return[a,d/b*100,c]};g.huslp.lch=function(a){var d,
c,b;d=a[0];c=a[1];a=a[2];if(99.9999999<a)return[100,0,d];if(1E-8>a)return[0,0,d];b=v(a);return[a,b/100*c,d]};g.lch.huslp=function(a){var d,c,b;c=a[0];d=a[1];a=a[2];if(99.9999999<c)return[a,0,100];if(1E-8>c)return[a,0,0];b=v(c);return[a,d/b*100,c]};g.rgb.hex=function(a){var d,c,b,f;c="#";a=w(a);b=0;for(f=a.length;b<f;b++)d=a[b],d=d.toString(16),1===d.length&&(d="0"+d),c+=d;return c};g.hex.rgb=function(a){var d,c,b,f;"#"===a.charAt(0)&&(a=a.substring(1,7));c=a.substring(0,2);d=a.substring(2,4);a=a.substring(4,
6);b=[c,d,a];f=[];d=0;for(c=b.length;d<c;d++)a=b[d],f.push(parseInt(a,16)/255);return f};g.lch.rgb=function(a){return g.xyz.rgb(g.luv.xyz(g.lch.luv(a)))};g.rgb.lch=function(a){return g.luv.lch(g.xyz.luv(g.rgb.xyz(a)))};g.husl.rgb=function(a){return g.lch.rgb(g.husl.lch(a))};g.rgb.husl=function(a){return g.lch.husl(g.rgb.lch(a))};g.huslp.rgb=function(a){return g.lch.rgb(g.huslp.lch(a))};g.rgb.huslp=function(a){return g.lch.huslp(g.rgb.lch(a))};n={fromRGB:function(a,d,c){return g.rgb.husl([a,d,c])},
fromHex:function(a){return g.rgb.husl(g.hex.rgb(a))},toRGB:function(a,d,c){return g.husl.rgb([a,d,c])},toHex:function(a,d,c){return g.rgb.hex(g.husl.rgb([a,d,c]))},p:{}};n.p.toRGB=function(a,d,c){return g.xyz.rgb(g.luv.xyz(g.lch.luv(g.huslp.lch([a,d,c]))))};n.p.toHex=function(a,d,c){return g.rgb.hex(g.xyz.rgb(g.luv.xyz(g.lch.luv(g.huslp.lch([a,d,c])))))};n.p.fromRGB=function(a,d,c){return g.lch.huslp(g.luv.lch(g.xyz.luv(g.rgb.xyz([a,d,c]))))};n.p.fromHex=function(a){return g.lch.huslp(g.luv.lch(g.xyz.luv(g.rgb.xyz(g.hex.rgb(a)))))};
n._conv=g;n._round=x;n._rgbPrepare=w;n._getBounds=p;n._maxChromaForLH=q;n._maxSafeChromaForL=v;"undefined"!==typeof e&&null!==e||"undefined"!==typeof jQuery&&null!==jQuery||"undefined"!==typeof requirejs&&null!==requirejs||(this.HUSL=n);"undefined"!==typeof e&&null!==e&&(e.exports=n);"undefined"!==typeof jQuery&&null!==jQuery&&(jQuery.husl=n);"undefined"!==typeof requirejs&&null!==requirejs&&"undefined"!==typeof define&&null!==define&&define(n)}).call(this)},{}],16:[function(b,e,h){e.exports={name:"rgb",
min:[0,0,0],max:[255,255,255],channel:["red","green","blue"],alias:["RGB"]}},{}],17:[function(b,e,h){b=b("./xyz");e.exports={name:"xyy",min:[0,0,0],max:[1,1,100],channel:["x","y","Y"],alias:["xyY","Yxy","yxy"],xyz:function(a){var c,d;c=a[0];d=a[1];a=a[2];return 0===d?[0,0,0]:[c*a/d,a,(1-c-d)*a/d]}};b.xyy=function(a){var c,d;c=a[0];d=a[1];a=c+d+a[2];return 0===a?[0,0,d]:[c/a,d/a,d]}},{"./xyz":18}],18:[function(b,e,h){b=b("./rgb");e.exports={name:"xyz",min:[0,0,0],max:[96,100,109],channel:["X","Y",
"Z"],alias:["XYZ","ciexyz"],whitepoint:{2:{A:[109.85,100,35.585],C:[98.074,100,118.232],D50:[96.422,100,82.521],D55:[95.682,100,92.149],D65:[95.045592705167,100,108.9057750759878],D75:[94.972,100,122.638],F2:[99.187,100,67.395],F7:[95.044,100,108.755],F11:[100.966,100,64.37],E:[100,100,100]},10:{A:[111.144,100,35.2],C:[97.285,100,116.145],D50:[96.72,100,81.427],D55:[95.799,100,90.926],D65:[94.811,100,107.304],D75:[94.416,100,120.641],F2:[103.28,100,69.026],F7:[95.792,100,107.687],F11:[103.866,100,
65.627],E:[100,100,100]}},rgb:function(a){var c=a[0]/100,d=a[1]/100,b=a[2]/100,e;a=3.240969941904521*c+-1.537383177570093*d+-.498610760293*b;e=-.96924363628087*c+1.87596750150772*d+.041555057407175*b;c=.055630079696993*c+-.20397695888897*d+1.056971514242878*b;a=.0031308<a?1.055*Math.pow(a,1/2.4)-.055:a*=12.92;e=.0031308<e?1.055*Math.pow(e,1/2.4)-.055:e*=12.92;c=.0031308<c?1.055*Math.pow(c,1/2.4)-.055:c*=12.92;a=Math.min(Math.max(0,a),1);e=Math.min(Math.max(0,e),1);c=Math.min(Math.max(0,c),1);return[255*
a,255*e,255*c]}};b.xyz=function(a){var c=a[0]/255,d=a[1]/255;a=a[2]/255;c=.04045<c?Math.pow((c+.055)/1.055,2.4):c/12.92;d=.04045<d?Math.pow((d+.055)/1.055,2.4):d/12.92;a=.04045<a?Math.pow((a+.055)/1.055,2.4):a/12.92;return[100*(.41239079926595*c+.35758433938387*d+.18048078840183*a),100*(.21263900587151*c+.71516867876775*d+.072192315360733*a),100*(.019330818715591*c+.11919477979462*d+.95053215224966*a)]}},{"./rgb":16}],19:[function(b,e,h){b=b("./rgb");(e.exports={name:"yiq",min:[0,-.5957,-.5226],max:[1,
.5957,.5226],channel:["Y","I","Q"],alias:["YIQ"]}).rgb=function(a){var c=a[0],d=a[1],b=a[2],e;a=1*c+-.272*d+-.647*b;e=1*c+-1.108*d+1.705*b;c=Math.min(Math.max(0,1*c+.956*d+.621*b),1);a=Math.min(Math.max(0,a),1);e=Math.min(Math.max(0,e),1);return[255*c,255*a,255*e]};b.yiq=function(a){var c=a[0]/255,d=a[1]/255;a=a[2]/255;var b=0,e=0;if(c!==d||d!==a)b=.596*c+-.275*d+-.321*a,e=.212*c+-.528*d+.311*a;return[.299*c+.587*d+.114*a,b,e]}},{"./rgb":16}],20:[function(b,e,h){b=b("./rgb");e.exports={name:"yuv",
min:[0,-.5,-.5],max:[1,.5,.5],channel:["Y","U","V"],alias:["YUV"],rgb:function(a){var c=a[0],d=a[1],b=a[2],e;a=1*c+-.39465*d+-.5806*b;e=1*c+2.02311*d+0*b;c=Math.min(Math.max(0,1*c+0*d+1.13983*b),1);a=Math.min(Math.max(0,a),1);e=Math.min(Math.max(0,e),1);return[255*c,255*a,255*e]}};b.yuv=function(a){var c=a[0]/255,d=a[1]/255;a=a[2]/255;return[.299*c+.587*d+.114*a,-.14713*c+-.28886*d+.436*a,.615*c+-.51499*d+-.10001*a]}},{"./rgb":16}],21:[function(b,e,h){arguments[4][1][0].apply(h,arguments)},{dup:1}],
22:[function(b,e,h){function a(a,b,e){a=a._callbacks;if(!b)return a||{};if(!a||!a[b])return[];b=a[b];e&&e.length&&(b=b.filter(function(a){return c(a,e)}));return b}function c(a,c){if(a._ns)for(var b=c.length;b--;)if(0<=a._ns.indexOf(c[b]))return!0}a.remove=function(a,b,e,g){a=a._callbacks;if(!a||!a[b])return!1;b=a[b];if(g&&g.length&&!c(e,g))return!1;for(g=0;g<b.length;g++)if(b[g]===e||b[g].fn===e){b.splice(g,1);break}};a.add=function(a,c,b,e){if(b){var h=a._callbacks;h||(h={},Object.defineProperty(a,
"_callbacks",{value:h}));(h[c]=h[c]||[]).push(b);e&&e.length&&(b._ns=e)}};e.exports=a},{}],23:[function(b,e,h){e.exports={freeze:function(c,d){var b=a.get(c);if(b&&b[d])return!1;b||(b={},a.set(c,b));return b[d]=!0},unfreeze:function(c,d){var b=a.get(c);if(!b||!b[d])return!1;b[d]=null;return!0},isFrozen:function(c,d){var b=a.get(c);return b&&b[d]}};var a=new WeakMap},{}],24:[function(b,e,h){e.exports=b("./wrap")(function(){for(var a=arguments[0],c=1,d=arguments.length;c<d;c++)a+=arguments[c];return a})},
{"./wrap":46}],25:[function(b,e,h){e.exports=b("./wrap")(function(a,c,d){return d>c?Math.max(Math.min(a,d),c):Math.max(Math.min(a,c),d)})},{"./wrap":46}],26:[function(b,e,h){},{}],27:[function(b,e,h){e.exports=b("./wrap")(function(){for(var a=arguments[0],c=1,d=arguments.length;c<d;c++)a/=arguments[c];return a})},{"./wrap":46}],28:[function(b,e,h){e.exports=b("./wrap")(function(a,c){return a===c})},{"./wrap":46}],29:[function(b,e,h){arguments[4][26][0].apply(h,arguments)},{dup:26}],30:[function(b,
e,h){e.exports=b("./wrap")(function(a,c){return a>c})},{"./wrap":46}],31:[function(b,e,h){e.exports=b("./wrap")(function(a,c){return a>=c})},{"./wrap":46}],32:[function(b,e,h){e.exports=b("./wrap")(function(a,c,d){return a<=d&&a>=c?!0:!1})},{"./wrap":46}],33:[function(b,e,h){e.exports=b("./wrap")(function(a){return Math.log(a)/Math.log(10)})},{"./wrap":46}],34:[function(b,e,h){e.exports=b("./wrap")(function(a){return Math.log(a)})},{"./wrap":46}],35:[function(b,e,h){e.exports=b("./wrap")(function(a,
c,d){void 0===d&&(d=c,c=0);if(c>d){var b=d;d=c;c=b}b=d-c;a=(a+c)%b-c;a<c&&(a+=b);a>d&&(a-=b);return a})},{"./wrap":46}],36:[function(b,e,h){e.exports=b("./wrap")(function(a,c){return a<c})},{"./wrap":46}],37:[function(b,e,h){e.exports=b("./wrap")(function(a,c){return a<=c})},{"./wrap":46}],38:[function(b,e,h){e.exports=b("./wrap")(Math.max)},{"./wrap":46}],39:[function(b,e,h){e.exports=b("./wrap")(Math.min)},{"./wrap":46}],40:[function(b,e,h){e.exports=b("./wrap")(function(){for(var a=arguments[0],
c=1,d=arguments.length;c<d;c++)a%=arguments[c];return a})},{"./wrap":46}],41:[function(b,e,h){e.exports=b("./wrap")(function(){for(var a=arguments[0],c=1,d=arguments.length;c<d;c++)a*=arguments[c];return a})},{"./wrap":46}],42:[function(b,e,h){e.exports=b("./wrap")(function(a,c){return a!==c})},{"./wrap":46}],43:[function(b,e,h){e.exports=b("./wrap")(function(a){a+="";var c=a.indexOf(".")+1;return c?a.length-c:0})},{"./wrap":46}],44:[function(b,e,h){var a=b("./precision");e.exports=b("./wrap")(function(c,
d){if(0===d)return c;if(!d)return Math.round(c);d=parseFloat(d);c=Math.round(c/d)*d;return parseFloat(c.toFixed(a(d)))})},{"./precision":43,"./wrap":46}],45:[function(b,e,h){e.exports=b("./wrap")(function(){for(var a=arguments[0],c=1,d=arguments.length;c<d;c++)a-=arguments[c];return a})},{"./wrap":46}],46:[function(b,e,h){e.exports=function(a){return function(c){var d=arguments;if(c instanceof Array){for(var b=Array(c.length),e,g=0;g<c.length;g++){e=[];for(var h=0,l=d.length,m;h<l;h++)m=d[h]instanceof
Array?d[h][g]:d[h],e.push(m);b[g]=a.apply(this,e)}return b}if("object"===typeof c){b={};for(g in c){e=[];h=0;for(l=d.length;h<l;h++)m="object"===typeof d[h]?d[h][g]:d[h],e.push(m);b[g]=a.apply(this,e)}return b}return a.apply(this,d)}}},{}],47:[function(b,e,h){function a(){n=new RegExp("::?("+Object.keys(q).join("|")+")(\\\\[0-9]+)?")}function c(a,c){if(!a)return[];if(!p(a))return y(a)?a:[a];q.scope&&(a=a.replace(/^\s*:scope/,""));c=c?z(c)?r(c):c.querySelector?[c]:[d.document]:[d.document];return f(c,
a)}function d(a,d){return c(a,d)[0]}function f(a,c){c=c.trim();if(!c)return a;if(">"===c[0])if(q.scope){var d=l();a.forEach(function(a){a.setAttribute("__scoped",d)});c='[__scoped="'+d+'"]'+c}else c=":scope"+c;var b,e,g,h=m.parse(c),p=h[0].match(n);return p?(b=p[1],(e=p[2])&&(g=m.stringify(h[e.slice(1)],h)),(e=m.stringify(h[0].slice(0,p.index),h))||w[b]||(e="*"),e&&(a=u(a,e)),e=function(a){return q[b](a,g)},v[b]?a=a.filter(e):w[b]&&(a=k(r(a.map(e)))),c=h[0].slice(p.index+p[0].length),f(a,m.stringify(c,
h))):u(a,c)}function u(a,c){return k(r(a.map(function(a){return g(a.querySelectorAll(c))})))}var g=b("sliced"),k=b("array-unique"),l=b("get-uid"),m=b("parenthesis"),p=b("mutype/is-string"),y=b("mutype/is-array"),z=b("mutype/is-array-like"),r=b("arrayify-compact");b=b("get-doc");var q={},v={},w={},n;d.all=c;d.registerFilter=function(c,d,b){q[c]||(q[c]=d,q[c].includeSelf=b,v[c]=!0,a())};d.registerMapper=function(c,d,b){q[c]||(q[c]=d,q[c].includeSelf=b,w[c]=!0,a())};d.document=b;e.exports=d},{"array-unique":53,
"arrayify-compact":54,"get-doc":56,"get-uid":58,"mutype/is-array":60,"mutype/is-array-like":59,"mutype/is-string":62,parenthesis:63,sliced:66}],48:[function(b,e,h){var a=b("..");e.exports=function(c,d){return!!a(d,c)}},{"..":47}],49:[function(b,e,h){var a=b("..");e.exports=function(c,d){c.parentNode||a.document.createDocumentFragment().appendChild(c);return-1<a.all(d,c.parentNode).indexOf(c)}},{"..":47}],50:[function(b,e,h){var a=b("./matches");e.exports=function(c,d){return!a(c,d)}},{"./matches":49}],
51:[function(b,e,h){var a=b("..");e.exports=function(c){return c===a.document.documentElement}},{"..":47}],52:[function(b,e,h){e.exports=function(a){return a.hasAttribute("scoped")}},{}],53:[function(b,e,h){e.exports=function(a){if(!Array.isArray(a))throw new TypeError("array-unique expects an array.");for(var c=a.length,d=-1;d++<c;)for(var b=d+1;b<a.length;++b)a[d]===a[b]&&a.splice(b--,1);return a}},{}],54:[function(b,e,h){var a=b("array-flatten");e.exports=function(c){return a(Array.isArray(c)?
c:[c]).filter(Boolean)}},{"array-flatten":55}],55:[function(b,e,h){function a(c,b,e){for(var g=0;g<c.length;g++){var h=c[g];0<e&&Array.isArray(h)?a(h,b,e-1):b.push(h)}return b}function c(a,b){for(var e=0;e<a.length;e++){var g=a[e];Array.isArray(g)?c(g,b):b.push(g)}return b}e.exports=function(b,f){return null==f?c(b,[]):a(b,[],f)}},{}],56:[function(b,e,h){b=b("has-dom");e.exports=b()?document:null},{"has-dom":57}],57:[function(b,e,h){e.exports=function(){return"undefined"!==typeof window&&"undefined"!==
typeof document&&"function"===typeof document.createElement}},{}],58:[function(b,e,h){var a=Date.now()%1E9;e.exports=function(){return(1E9*Math.random()>>>0)+a++}},{}],59:[function(b,e,h){var a=b("./is-string"),c=b("./is-array"),d=b("./is-fn");e.exports=function(b){return c(b)||b&&!a(b)&&!b.nodeType&&("undefined"!=typeof window?b!=window:!0)&&!d(b)&&"number"===typeof b.length}},{"./is-array":60,"./is-fn":61,"./is-string":62}],60:[function(b,e,h){e.exports=function(a){return a instanceof Array}},{}],
61:[function(b,e,h){e.exports=function(a){return!(!a||!a.apply)}},{}],62:[function(b,e,h){e.exports=function(a){return"string"===typeof a||a instanceof String}},{}],63:[function(b,e,h){e.exports={parse:b("./parse"),stringify:b("./stringify")}},{"./parse":64,"./stringify":65}],64:[function(b,e,h){e.exports=function(a,c){function b(a,c,d){return"\\"+f.push(a.slice(1,-1))}if("string"!==typeof a)return[a];var f=[],e;c=c||"()";for(var g=new RegExp(["\\",c[0],"[^\\",c[0],"\\",c[1],"]*\\",c[1]].join(""));a!=
e;)e=a,a=a.replace(g,b);f.unshift(a);return f}},{}],65:[function(b,e,h){e.exports=function(a,c,b){function f(a,f,e){return b[0]+c[a.slice(1)]+b[1]}var e;if(!a)return"";"string"!==typeof a&&(b=c,c=a,a=c[0]);for(b=b||"()";a!=e;)e=a,a=a.replace(/\\[0-9]+/,f);return a}},{}],66:[function(b,e,h){e.exports=b("./lib/sliced")},{"./lib/sliced":67}],67:[function(b,e,h){e.exports=function(a,c,b){var f=[],e=a.length;if(0===e)return f;c=0>c?Math.max(0,c+e):c||0;for(void 0!==b&&(e=0>b?b+e:b);e-- >c;)f[e-c]=a[e];
return f}},{}],"color-parse":[function(b,e,h){e.exports=function(b){var f;f=[0,0,0];var e=1,g="rgb";if(a[b])f=a[b];else if("transparent"===b)e=0;else if(f=/^((?:rgb|hs[lvb]|hwb|cmyk?|xy[zy]|gray|lab|lchu?v?|[ly]uv|lms)a?)\s*\(([^\)]*)\)/.exec(b)){b=f[1];var h=b.replace(/a$/,""),g=h,l="cmyk"===h?4:"gray"===h?1:3;f=f[2].trim().split(/\s*,\s*/).map(function(a,b){if(/%$/.test(a)){if(b===l)return parseFloat(a)/100;if("rgb"===h)return 255*parseFloat(a)/100}else if("h"===h[b]&&!/deg$/.test(a)&&void 0!==
c[a])return c[a];return parseFloat(a)});b===h&&f.push(1);e=void 0===f[l]?1:f[l];f=f.slice(0,l)}else if(/^#[A-Fa-f0-9]+$/.test(b)){var h=b.replace(/^#/,""),l=h.length,m=4>=l;f=h.split(m?/(.)/:/(..)/);f=f.filter(Boolean).map(function(a){return m?parseInt(a+a,16):parseInt(a,16)});4===f.length&&(e=f[3]/255,f=f.slice(0,3));f[0]||(f[0]=0);f[1]||(f[1]=0);f[2]||(f[2]=0)}else if(10<b.length&&/[0-9](?:\s|\/)/.test(b))f=b.match(/([0-9]+)/g).map(function(a){return parseFloat(a)}),g=b.match(/([a-z])/ig).join("").toLowerCase();
else throw Error("Unable to parse "+b);return{space:g,values:f,alpha:e}};var a=b("color-name"),c={red:0,orange:60,yellow:120,green:180,blue:240,purple:300}},{"color-name":1}],"color-space":[function(b,e,h){function a(a,b){var d=c[a];if(a===b)return function(a){return a};if(d.xyz&&c.xyz[b])return function(a){return c.xyz[b](d.xyz(a))};if(d.rgb&&c.rgb[b])return function(a){return c.rgb[b](d.rgb(a))}}var c={rgb:b("./rgb"),hsl:b("./hsl"),hsv:b("./hsv"),hsi:b("./hsi"),hwb:b("./hwb"),cmyk:b("./cmyk"),cmy:b("./cmy"),
xyz:b("./xyz"),xyy:b("./xyy"),yiq:b("./yiq"),yuv:b("./yuv"),lab:b("./lab"),labh:b("./labh"),lchab:b("./lchab"),luv:b("./luv"),lchuv:b("./lchuv"),husl:b("./husl"),huslp:b("./huslp")},d;for(d in c){b=c[d];for(var f in c)b[f]||(b[f]=a(d,f))}e.exports=c},{"./cmy":2,"./cmyk":3,"./hsi":4,"./hsl":5,"./hsv":6,"./husl":7,"./huslp":8,"./hwb":9,"./lab":10,"./labh":11,"./lchab":12,"./lchuv":13,"./luv":14,"./rgb":16,"./xyy":17,"./xyz":18,"./yiq":19,"./yuv":20}],"color-stringify":[function(b,e,h){e.exports=function(b,
c){if("hex"===c){var e=b.slice(0,3).map(function(a){return(16>a?"0":"")+a.toString(16)}).join("");e[0]===e[1]&&e[2]===e[3]&&e[4]===e[5]&&(e=e[0]+e[2]+e[4]);return"#"+e}if("keyword"===c)return a[b];if("adobe1"===c)return"R:"+b[0]+", G:"+b[1]+", B:"+b[2];if("adobe2"===c)return"(R"+b[0]+" / G"+b[1]+" / B"+b[2]+")";var g;"percent"===c&&(c="rgb",b=b.map(function(a,b){return 3===b?a:Math.round(100*a/255)}),e=g=!0);c=c||"rgb";g=g?g:"h"===c[0];(e=e||/rgb|hs[lv]/i.test(c))&&"a"===c[c.length-1]&&(c=c.slice(0,
-1));var h=1;b.length>c.length&&(h=b.pop());e=c+(e&&1>h?"a":"")+("("+b.map(function(a,b){return g&&"h"!==c[b]?a+"%":a}).join(", "));return e+=(1>h?", "+h:"")+")"};b=b("color-name");var a={},c;for(c in b)a[b[c]]=c},{"color-name":21}],"emmy/on":[function(b,e,h){function a(a,b,e){if(!a)return a;var h=a.addEventListener||a.addListener||a.attachEvent||a.on;b.split(/\s+/).forEach(function(b){var m=b.split(".");b=m.shift();if(h)if(c.freeze(a,"on"+b))h.call(a,b,e),c.unfreeze(a,"on"+b);else return a;d.add(a,
b,e,m)});return a}var c=b("icicle"),d=b("./listeners");e.exports=a;a.wrap=function(a,b,c,d){b=function(){if(d.apply(a,arguments))return c.apply(a,arguments)};b.fn=c;return b}},{"./listeners":22,icicle:23}],mumath:[function(b,e,h){e.exports={between:b("./between"),isBetween:b("./is-between"),round:b("./round"),precision:b("./precision"),loop:b("./loop"),add:b("./add"),sub:b("./sub"),min:b("./min"),max:b("./max"),div:b("./div"),lg:b("./lg"),log:b("./log"),mult:b("./mult"),mod:b("./mod"),floor:b("./floor"),
ceil:b("./ceil"),gt:b("./gt"),gte:b("./gte"),lt:b("./lt"),lte:b("./lte"),eq:b("./eq"),ne:b("./ne")}},{"./add":24,"./between":25,"./ceil":26,"./div":27,"./eq":28,"./floor":29,"./gt":30,"./gte":31,"./is-between":32,"./lg":33,"./log":34,"./loop":35,"./lt":36,"./lte":37,"./max":38,"./min":39,"./mod":40,"./mult":41,"./ne":42,"./precision":43,"./round":44,"./sub":45}],queried:[function(b,e,h){h=b("get-doc");var a=b("./lib/");try{h.querySelector(":scope")}catch(c){a.registerFilter("scope",b("./lib/pseudos/scope"))}try{h.querySelector(":has")}catch(d){a.registerFilter("has",
b("./lib/pseudos/has")),a.registerFilter("not",b("./lib/pseudos/not"))}try{h.querySelector(":root")}catch(f){a.registerFilter("root",b("./lib/pseudos/root"))}try{h.querySelector(":matches")}catch(u){a.registerFilter("matches",b("./lib/pseudos/matches"))}e.exports=a},{"./lib/":47,"./lib/pseudos/has":48,"./lib/pseudos/matches":49,"./lib/pseudos/not":50,"./lib/pseudos/root":51,"./lib/pseudos/scope":52,"get-doc":56}]},{},[]);