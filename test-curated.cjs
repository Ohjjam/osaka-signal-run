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
    const unknown=route.stops.filter(x=>!P.allItems.has(x.id)).map(x=>x.id);
    const metric=C.scheduleFor(day,P.state,id=>P.allItems.get(id),OSAKA_VNEXT_DATA,P.suggestedTransit);
    out.push({day,id:route.id,unknown,end:metric.end,warnings:metric.warnings.filter(w=>w.level==='danger'),first:route.stops[0],aquarium:route.stops.some(x=>x.id==='kaiyukan')});
   }
   Object.assign(P.state,saved);return out;
  });
  console.log(JSON.stringify(audit,null,2));assert.equal(audit.length,18);
  for(const x of audit){assert.deepEqual(x.unknown,[]);assert.deepEqual(x.warnings,[],JSON.stringify(x));if(x.day==='sun')assert.ok(x.aquarium);if(x.day==='mon')assert.ok(x.end<=780);if(x.day==='sat')assert.equal(x.first.time,'17:00');}
  await page.evaluate(()=>OsakaPlannerV3.showGuidePanel('itinerary-v11'));
  assert.equal(await page.locator('[data-curated-day]').count(),3);assert.equal(await page.locator('[data-curated-option]').count(),6);
  assert.ok((await page.locator('.curated-order').allTextContents()).some(t=>t.includes('아지타마')));
  assert.ok((await page.locator('.curated-stop-why').allTextContents()).some(t=>t.includes('돈코쓰')));
  await page.locator('[data-curated-day="sun"]').click();await page.locator('[data-curated-option="3"]').click();
  assert.match(await page.locator('.curated-ticket').innerText(),/11:30/);
  assert.match(await page.locator('.curated-leg48').first().innerText(),/미도스지선/);
  assert.match(await page.locator('.curated-leg48').first().locator('a').getAttribute('href'),/travelmode=transit/);
  await page.locator('[data-curated-day="sat"]').click();
  assert.match(await page.locator('.curated-leg48').first().locator('a').getAttribute('href'),/travelmode=walking/);
  await page.locator('[data-curated-day="sun"]').click();
  assert.match(await page.locator('.curated-timeline').innerText(),/내부 박물관 입장은 제외/);
  const satBefore=await page.evaluate(()=>JSON.stringify(OsakaPlannerV3.state.plans.sat));
  await page.locator('[data-curated-day="sun"]').click();await page.locator('[data-curated-option="1"]').click();await page.locator('[data-curated-apply]').click();
  await page.waitForFunction(()=>!OsakaCurated45.busy&&OsakaPlannerV3.state.plans.sun.includes('sky'));
  assert.equal(await page.evaluate(()=>JSON.stringify(OsakaPlannerV3.state.plans.sat)),satBefore);
  assert.equal(await page.locator('[data-vnext-auto-map-day="sun"]').getAttribute('aria-selected'),'true');
  await page.locator('[data-curated-day="mon"]').click();await page.locator('[data-curated-map]').click();
  await page.waitForFunction(()=>document.querySelector('#vnext-auto-leg-list')?.textContent.includes('간사이국제공항'));
  const legs=await page.locator('#vnext-auto-leg-list').innerText();assert.ok(legs.includes('간사이국제공항'));assert.equal((legs.match(/숙소.*짐 회수/g)||[]).length,0);
  await page.locator('[data-curated-day="sat"]').click();await page.locator('[data-curated-map]').click();await page.waitForFunction(()=>document.querySelector('#vnext-auto-leg-list')?.textContent.includes('즌도야'));assert.ok(!(await page.locator('#vnext-auto-leg-list').innerText()).includes('간사이국제공항 도착'));
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
  await page.evaluate(()=>document.querySelector('#curated45').scrollIntoView());
  await page.screenshot({path:path.resolve(__dirname,'../../outputs/osaka-curated45-mobile.png')});
  await page.locator('[data-curated-day="sat"]').click();
  await page.locator('[data-curated-option="2"]').click();
  await page.locator('[data-curated-all]').click();
  await page.waitForFunction(()=>!OsakaCurated45.busy&&OsakaPlannerV3.state.plans.sat.includes('ichiran-south45'));
  assert.ok(await page.evaluate(()=>OsakaPlannerV3.state.plans.sun.includes('sky')));
  await page.locator('[data-curated-undo]').click();
  await page.waitForFunction(()=>!OsakaCurated45.busy&&OsakaPlannerV3.state.plans.sat.includes('zundo-doton45'));
  assert.ok(await page.evaluate(()=>OsakaPlannerV3.state.plans.sun.includes('sky')));
  // Save a manually edited route, then prove a reload does not seed over it.
  await page.evaluate(async()=>{OsakaPlannerV3.state.plans.sat=['yasaka'];OsakaPlannerV3.saveState();await OsakaPlannerV3.pushSharedState();});
  await page.reload({waitUntil:'domcontentloaded'});await page.waitForFunction(()=>window.OsakaCurated45?.ready&&!window.OsakaCurated45.busy);
  assert.deepEqual(await page.evaluate(()=>OsakaPlannerV3.state.plans.sat),['yasaka']);
  assert.ok(await page.evaluate(()=>OsakaPlannerV3.state.plans.sun.includes('sky')));
  assert.deepEqual(errors,[]);
  console.log('PASS: 18 schedules, rich menu/reasons, per-route aquarium time, all Sundays mandatory, Monday deadline, apply/undo/map/reload, mobile fits, no JS errors.');
 } finally {if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
