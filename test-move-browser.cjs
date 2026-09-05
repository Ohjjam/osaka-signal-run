const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),assert=require('node:assert/strict');
const {chromium}=require(path.join(process.env.OSAKA_TEST_NODE_MODULES,'playwright'));
const root=path.join(__dirname,'docs');
(async()=>{
const server=http.createServer((req,res)=>{const url=new URL(req.url,'http://localhost'),p=path.resolve(root,'.'+(url.pathname.replace('/osaka-signal-run','')||'/index.html'));if(!p.startsWith(root+path.sep)||!fs.existsSync(p)||!fs.statSync(p).isFile()){res.writeHead(404);res.end();return;}res.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.webmanifest':'application/manifest+json'})[path.extname(p)]||'application/octet-stream');fs.createReadStream(p).pipe(res);});
let browser;
try{
 await new Promise(r=>server.listen(0,'127.0.0.1',r));
 browser=await chromium.launch({headless:true,args:['--mute-audio']});
 const context=await browser.newContext({viewport:{width:390,height:844},permissions:['geolocation'],geolocation:{latitude:34.4359,longitude:135.2436,accuracy:20},serviceWorkers:'block'});
 const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.clock.install({time:new Date('2026-09-05T07:00:00Z')});
 await page.goto(`http://127.0.0.1:${server.address().port}/osaka-signal-run/index.html`,{waitUntil:'domcontentloaded'});
 await page.waitForFunction(()=>window.OsakaPlannerV3?.sharedSync.booted&&window.OsakaMove&&window.OsakaToday);
 assert.equal(await page.locator('[data-guide-panel="prep-v3"]').count(),0);
 await page.locator('.now-tools [data-move-open="hotel"]').click();
 await page.waitForFunction(()=>window.OsakaMove.status().originActual);
 assert.equal(await page.locator('#move-v44').isVisible(),true);
 assert.match(await page.locator('#move-summary').innerText(),/970/);
 assert.equal(await page.locator('#move-steps li').count(),3);
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
 const stepHref=await page.locator('#move-steps li').nth(1).locator('a').getAttribute('href');assert.ok(new URL(stepHref).searchParams.get('origin'));
 await page.locator('[data-move-choice="rapit"]').click();assert.match(await page.locator('#move-summary').innerText(),/1,410/);
 await page.locator('#move-origin').selectOption('kix2');assert.match(await page.locator('#move-steps').innerText(),/무료 셔틀/);
 await page.locator('[data-move-next]').click();assert.equal(await page.evaluate(()=>window.OsakaMove.status().stage),1);
 await page.screenshot({path:path.resolve(__dirname,'../../outputs/osaka-move-mobile.png'),fullPage:true});
 await context.setGeolocation({latitude:34.6634,longitude:135.5018,accuracy:20});
 await page.locator('[data-move-locate]').click();await page.waitForFunction(()=>window.OsakaMove.status().choice==='walk').catch(async e=>{console.error(await page.locator('#move-status').innerText(),await page.evaluate(()=>window.OsakaMove.status()),errors);throw e;});
 await context.clearPermissions();await page.addInitScript(()=>{});
 await page.evaluate(()=>{navigator.geolocation.getCurrentPosition=(_,failure)=>failure({code:1});});
 await page.locator('#move-origin').selectOption('auto');await page.locator('[data-move-locate]').click();assert.match(await page.locator('#move-status').innerText(),/권한/);assert.equal(await page.evaluate(()=>window.OsakaMove.status().originKnown),false);
 assert.deepEqual(errors,[]);
 console.log(JSON.stringify({gpsAirport:true,manualT2:true,stepNavigation:true,fares:true,cityWalking:true,permissionDenied:true,mobileOverflow:false,runtimeErrors:errors}));
}finally{if(browser)await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
