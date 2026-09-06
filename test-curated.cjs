const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require(path.join(process.env.OSAKA_TEST_NODE_MODULES,'playwright'));
const root=path.join(__dirname,'docs');
(async()=>{
 const server=http.createServer((req,res)=>{const url=new URL(req.url,'http://localhost'),p=path.resolve(root,'.'+(url.pathname.replace('/osaka-signal-run','')||'/index.html'));if(!p.startsWith(root+path.sep)||!fs.existsSync(p)||!fs.statSync(p).isFile()){res.writeHead(404);res.end();return;}res.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png'})[path.extname(p)]||'application/octet-stream');fs.createReadStream(p).pipe(res);});
 let browser;
 try {
  await new Promise(r=>server.listen(0,'127.0.0.1',r));
  browser=await chromium.launch({headless:true,args:['--mute-audio']});
  const context=await browser.newContext({viewport:{width:390,height:844},serviceWorkers:'block'}),page=await context.newPage(),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto(`http://127.0.0.1:${server.address().port}/osaka-signal-run/index.html#itinerary-v11`,{waitUntil:'domcontentloaded'});
  await page.waitForFunction(()=>window.OsakaCurated45?.ready&&!window.OsakaCurated45.busy);
  const audit=await page.evaluate(()=>{
   const P=OsakaPlannerV3,C=OsakaVNextCore,D=OSAKA_CURATED_V45,saved=OsakaCurated45.snapshot(),out=[];
   for(const day of C.DAYS)for(const route of D.days[day]){
    OsakaCurated45.assign(day,route);
    if(day==='sun' && !(route.stops.findIndex(x=>x.id==='harukoma')<route.stops.findIndex(x=>x.id==='castle')))throw Error('Lunch must precede castle');
    const unknown=route.stops.filter(x=>!P.allItems.has(x.id)).map(x=>x.id);
    const metric=C.scheduleFor(day,P.state,id=>P.allItems.get(id),OSAKA_VNEXT_DATA,P.suggestedTransit);
    out.push({day,id:route.id,unknown,end:metric.end,warnings:metric.warnings.filter(w=>w.level==='danger'),first:route.stops[0],excluded:['sun','mon'].includes(day)?route.stops.filter(x=>['dotonbori-night-v3','hozenji-v3','shinsaibashi47','amerikamura-attraction-v5','fukutaro','marufuku','uranamba-v3','denden','shinsekai','daruma-v3','rest-hotel45','daiki-sushi-v4'].includes(x.id)).map(x=>x.id):[],aquarium:route.stops.some(x=>x.id==='kaiyukan'), missing:(D.requiredByDay[day]||[]).filter(id=>!route.stops.some(x=>x.id===id))});
   }
   const tails=D.days.sun.map(r=>r.stops.map(s=>s.id).filter(id=>!['breakfast45','castle','harukoma','back-hotel45'].includes(id)));
   for(let i=0;i<tails.length;i++)for(let j=i+1;j<tails.length;j++)if(tails[i].some(id=>tails[j].includes(id)))throw Error('Sunday optional places overlap');
   Object.assign(P.state,saved);return out;
  });
  console.log(JSON.stringify(audit,null,2));assert.equal(audit.length,10);
  for(const x of audit){assert.deepEqual(x.unknown,[]);assert.deepEqual(x.warnings,[],JSON.stringify(x));assert.deepEqual(x.missing,[]);assert.deepEqual(x.excluded,[]);if(x.day==='mon')assert.ok(x.aquarium);if(x.day==='mon')assert.ok(x.end<=780);if(x.day==='sat')assert.equal(x.first.time,'17:00');}
  await page.evaluate(()=>OsakaPlannerV3.showGuidePanel('itinerary-v11'));
  assert.equal(await page.locator('[data-curated-day]').count(),3);assert.equal(await page.locator('[data-curated-option]').count(),6);
  assert.ok((await page.locator('.curated-order').allTextContents()).some(t=>t.includes('기본 라멘')));
  assert.ok((await page.locator('.curated-stop-why').allTextContents()).some(t=>t.includes('지로계')));
  await page.locator('[data-curated-day="sun"]').click();await page.locator('[data-curated-option="2"]').click();
  assert.equal(await page.locator('.curated-ticket').count(),0);
  assert.match(await page.locator('.curated-leg48').first().innerText(),/미도스지선/);
  assert.match(await page.locator('.curated-leg48').first().locator('a').getAttribute('href'),/travelmode=transit/);
  await page.locator('[data-curated-day="sat"]').click();
  assert.match(await page.locator('.curated-leg48').first().locator('a').getAttribute('href'),/travelmode=walking/);
  await page.locator('[data-curated-day="sun"]').click();
  assert.match(await page.locator('.curated-timeline').innerText(),/천수각/);
  const satBefore=await page.evaluate(()=>JSON.stringify(OsakaPlannerV3.state.plans.sat));
  await page.locator('[data-curated-day="sun"]').click();await page.locator('[data-curated-option="1"]').click();await page.locator('[data-curated-apply]').click();
  await page.waitForFunction(()=>!OsakaCurated45.busy&&OsakaPlannerV3.state.plans.sun.includes('art51'));
  assert.equal(await page.evaluate(()=>JSON.stringify(OsakaPlannerV3.state.plans.sat)),satBefore);
  assert.equal(await page.locator('[data-vnext-auto-map-day="sun"]').getAttribute('aria-selected'),'true');
  await page.locator('[data-curated-day="mon"]').click();await page.locator('[data-curated-map]').click();
  await page.waitForFunction(()=>document.querySelector('#vnext-auto-leg-list')?.textContent.includes('간사이국제공항'));
  const legs=await page.locator('#vnext-auto-leg-list').innerText();assert.ok(legs.includes('간사이국제공항'));assert.equal((legs.match(/숙소.*짐 회수/g)||[]).length,0);
  await page.locator('[data-curated-day="sat"]').click();await page.locator('[data-curated-map]').click();await page.waitForFunction(()=>document.querySelector('#vnext-auto-leg-list')?.textContent.includes('라멘소'));assert.ok(!(await page.locator('#vnext-auto-leg-list').innerText()).includes('간사이국제공항 도착'));
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  await page.evaluate(()=>document.querySelector('#curated45').scrollIntoView());
  await page.screenshot({path:path.resolve(__dirname,'../../outputs/osaka-curated45-mobile.png')});
  await page.locator('[data-curated-day="sat"]').click();
  await page.locator('[data-curated-option="2"]').click();
  await page.locator('[data-curated-all]').click();
  await page.waitForFunction(()=>!OsakaCurated45.busy&&OsakaPlannerV3.state.plans.sat.includes('harukas-v5'));
  assert.ok(await page.evaluate(()=>OsakaPlannerV3.state.plans.sun.includes('art51')));
  await page.locator('[data-curated-undo]').click();
  await page.waitForFunction(()=>!OsakaCurated45.busy&&OsakaPlannerV3.state.plans.sat.includes('dotonbori-night-v3'));
  assert.ok(await page.evaluate(()=>OsakaPlannerV3.state.plans.sun.includes('art51')));
  // Save a manually edited route, then prove a reload does not seed over it.
  await page.evaluate(async()=>{OsakaPlannerV3.state.plans.sat=['yasaka'];OsakaPlannerV3.saveState();await OsakaPlannerV3.pushSharedState();});
  await page.reload({waitUntil:'domcontentloaded'});await page.waitForFunction(()=>window.OsakaCurated45?.ready&&!window.OsakaCurated45.busy);
  assert.deepEqual(await page.evaluate(()=>OsakaPlannerV3.state.plans.sat),['yasaka']);
  assert.ok(await page.evaluate(()=>OsakaPlannerV3.state.plans.sun.includes('art51')));
  assert.deepEqual(errors,[]);
  console.log('PASS: 10 schedules, rich menu/reasons, per-route aquarium time, Sunday castle+sushi, Monday aquarium, Monday deadline, apply/undo/map/reload, mobile fits, no JS errors.');
 } finally {if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
