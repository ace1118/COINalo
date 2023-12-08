/*!
 * All equations are adapted from Thomas Fuchs'
 * [Scripty2](https://github.com/madrobby/scripty2/blob/master/src/effects/transitions/penner.js).
 *
 * Based on Easing Equations (c) 2003 [Robert
 * Penner](http://www.robertpenner.com/), all rights reserved. This work is
 * [subject to terms](http://www.robertpenner.com/easing_terms_of_use.html).
 *//*!
 *  TERMS OF USE - EASING EQUATIONS
 *  Open source under the BSD License.
 *  Easing Equations (c) 2003 Robert Penner, all rights reserved.
 *//*! Shifty 3.0.3 - https://github.com/jeremyckahn/shifty */var gdjs;(function(t){let i;(function(u){let m;(function(a){a.ease=(e,n,b,h)=>{const r=t.evtTools.tween.easingFunctions,M=r.hasOwnProperty(e)?r[e]:r.linear;return n+(b-n)*M(h)},a.easingFunctions={linear:e=>e,easeInQuad:e=>Math.pow(e,2),easeOutQuad:e=>-(Math.pow(e-1,2)-1),easeInOutQuad:e=>(e/=.5)<1?.5*Math.pow(e,2):-.5*((e-=2)*e-2),easeInCubic:e=>Math.pow(e,3),easeOutCubic:e=>Math.pow(e-1,3)+1,easeInOutCubic:e=>(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2),easeInQuart:e=>Math.pow(e,4),easeOutQuart:e=>-(Math.pow(e-1,4)-1),easeInOutQuart:e=>(e/=.5)<1?.5*Math.pow(e,4):-.5*((e-=2)*Math.pow(e,3)-2),easeInQuint:e=>Math.pow(e,5),easeOutQuint:e=>Math.pow(e-1,5)+1,easeInOutQuint:e=>(e/=.5)<1?.5*Math.pow(e,5):.5*(Math.pow(e-2,5)+2),easeInSine:e=>-Math.cos(e*(Math.PI/2))+1,easeOutSine:e=>Math.sin(e*(Math.PI/2)),easeInOutSine:e=>-.5*(Math.cos(Math.PI*e)-1),easeInExpo:e=>e===0?0:Math.pow(2,10*(e-1)),easeOutExpo:e=>e===1?1:-Math.pow(2,-10*e)+1,easeInOutExpo:e=>e===0?0:e===1?1:(e/=.5)<1?.5*Math.pow(2,10*(e-1)):.5*(-Math.pow(2,-10*--e)+2),easeInCirc:e=>-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1-Math.pow(e-1,2)),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeOutBounce:e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,easeInBack:e=>{const n=1.70158;return e*e*((n+1)*e-n)},easeOutBack:e=>{const n=1.70158;return(e=e-1)*e*((n+1)*e+n)+1},easeInOutBack:e=>{let n=1.70158;return(e/=.5)<1?.5*(e*e*(((n*=1.525)+1)*e-n)):.5*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)},elastic:e=>-1*Math.pow(4,-8*e)*Math.sin((e*6-1)*(2*Math.PI)/2)+1,swingFromTo:e=>{let n=1.70158;return(e/=.5)<1?.5*(e*e*(((n*=1.525)+1)*e-n)):.5*((e-=2)*e*(((n*=1.525)+1)*e+n)+2)},swingFrom:e=>{const n=1.70158;return e*e*((n+1)*e-n)},swingTo:e=>{const n=1.70158;return(e-=1)*e*((n+1)*e+n)+1},bounce:e=>e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375,bouncePast:e=>e<1/2.75?7.5625*e*e:e<2/2.75?2-(7.5625*(e-=1.5/2.75)*e+.75):e<2.5/2.75?2-(7.5625*(e-=2.25/2.75)*e+.9375):2-(7.5625*(e-=2.625/2.75)*e+.984375),easeFromTo:e=>(e/=.5)<1?.5*Math.pow(e,4):-.5*((e-=2)*Math.pow(e,3)-2),easeFrom:e=>Math.pow(e,4),easeTo:e=>Math.pow(e,.25)}})(m=u.tween||(u.tween={}))})(i=t.evtTools||(t.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=standard-easing-functions.js.map
