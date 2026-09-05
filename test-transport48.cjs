const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const ctx={window:{}};for(const f of ['curated-v45.js','curated-rich47.js','curated-required49.js','route-transport48.js'])vm.runInNewContext(fs.readFileSync(__dirname+'/docs/'+f,'utf8'),ctx);
const d=ctx.window.OsakaLegs48.describe;let count=0;
for(const routes of Object.values(ctx.window.OSAKA_CURATED_V45.days))for(const r of routes)for(let i=0;i<r.stops.length-1;i++){
 const s=r.stops[i],t=r.stops[i+1],leg=d(s.id,t.id,s.leg);assert.ok(leg?.mode);assert.ok(leg.route.length>10);assert.ok(['walking','transit'].includes(leg.travelmode));assert.equal(leg.minutes,s.leg);count++;
}
assert.equal(d('breakfast45','kaiyukan',60).travelmode,'transit');assert.match(d('breakfast45','kaiyukan',60).route,/혼마치/);
assert.match(d('castle','kaiyukan',60).route,/모리노미야/);assert.equal(d('ramenso49','dotonbori-night-v3',15).travelmode,'walking');
assert.match(d('sky','kiji',20).mode,/건물/);assert.match(d('train45','airport48',60).route,/난카이/);assert.equal(d('unknown','kaiyukan',20),null);
console.log('PASS: '+count+' route legs, concrete transport modes, metro transfers, walking links, indoor queue distinction, airport rail.');
