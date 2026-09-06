const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{}};for(const f of ['curated-v45.js','curated-rich47.js','curated-required49.js','route-transport48.js'])vm.runInNewContext(fs.readFileSync(__dirname+'/docs/'+f,'utf8'),ctx);
const d=ctx.window.OsakaLegs48.describe;let count=0;
for(const routes of Object.values(ctx.window.OSAKA_CURATED_V45.days))for(const r of routes)for(let i=0;i<r.stops.length-1;i++){
 const s=r.stops[i],t=r.stops[i+1],leg=d(s.id,t.id,s.leg);assert.ok(leg?.mode);assert.ok(leg.route.length>10);assert.ok(['walking','transit'].includes(leg.travelmode));assert.equal(leg.minutes,s.leg);count++;
}
assert.equal(d('breakfast45','kaiyukan',60).travelmode,'transit');assert.match(d('breakfast45','kaiyukan',60).route,/혼마치/);
assert.match(d('castle','kaiyukan',60).route,/모리노미야/);assert.equal(d('ramenso49','dotonbori-night-v3',15).travelmode,'walking');
assert.match(d('sumiyoshi53','donki-mega54',45).mode,/난카이/);assert.match(d('train45','airport48',60).route,/난카이/);assert.equal(d('unknown','kaiyukan',20),null);
for(const id of Object.keys(ctx.window.OSAKA_CURATED_V45.airportDepartures)){const leg=d(id,'airport48',0);assert.ok(leg.minutes>0);assert.equal(leg.travelmode,'transit');assert.ok(!leg.route.includes('난바역 →'));}
assert.match(d('sumiyoshi-airport53','airport48',105).route,/사카이/);
assert.match(d('umeda-airport53','airport48',90).route,/JR 오사카역/);
assert.match(d('rinku-airport53','airport48',60).route,/한 정거장/);
assert.match(d('shinimamiya-airport54','airport48',60).route,/신이마미야/);
assert.match(d('shinimamiya-pickup54','rinku-pause54',60).route,/린쿠타운/);
console.log('PASS: '+count+' route legs, concrete transport modes, metro transfers, walking links, indoor queue distinction, airport rail.');
