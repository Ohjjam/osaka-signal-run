const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(path.join(__dirname,'docs/local-store.js'),'utf8');
function instance(storage=new Map(),fail=false){
 const state={plans:{sat:['castle'],sun:[],mon:[]},wishlist:[],prepTasks:{}};
 const ctx={window:{OsakaPlannerV3:{state}},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>{if(fail)throw Error('quota');storage.set(k,v);}},location:{href:'https://ohjjam.github.io/osaka-signal-run/'},Response,URL};
 vm.runInNewContext(source,ctx);return ctx.window.OsakaLocalStore;
}
(async()=>{
 const mem=new Map(), a=instance(mem), b=instance();
 const req=async(store,url,method,body)=>{const r=await store.request(url,{method,body:JSON.stringify(body)});return {status:r.status,data:await r.json()};};
 const initial=(await req(a,'api/shared-state')).data;
 assert.equal(initial.revision,0);
 const changed=structuredClone(initial.state);changed.wishlist=['ramen'];
 const saved=await req(a,'api/shared-state','PUT',{state:changed,baseRevision:0,clientId:'test'});
 assert.equal(saved.status,200);assert.equal(saved.data.revision,1);
 assert.deepEqual((await req(instance(mem),'api/shared-state')).data.state.wishlist,['ramen']);
 assert.deepEqual((await req(b,'api/shared-state')).data.state.wishlist,[]);
 assert.equal((await req(a,'api/shared-state','PUT',{state:changed,baseRevision:0})).status,409);
 const history=(await req(a,'api/history?limit=2')).data.history;
 assert.equal(history.length,2);assert.equal(history[0].summary.wishlist,1);
 const restored=await req(a,'api/history/restore','POST',{targetRevision:0,baseRevision:1});
 assert.equal(restored.data.revision,2);assert.deepEqual(restored.data.state.wishlist,[]);
 assert.equal((await req(instance(new Map(),true),'api/shared-state')).status,507);
 const bad=new Map([[a.key,'broken']]);assert.equal((await req(instance(bad),'api/shared-state')).status,507);
 const root=path.join(__dirname,'docs');
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 assert.equal(html,fs.readFileSync(path.join(root,'guide.html'),'utf8'));
 for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
   const ref=match[1].split(/[?#]/)[0];
   if(!ref || /^(?:https?:|data:|mailto:|javascript:)/.test(ref))continue;
   assert.ok(fs.existsSync(path.join(root,ref)),'Missing local reference: '+ref);
 }
 for(const file of ['planner-v3.js','vnext.js']){
   const text=fs.readFileSync(path.join(root,file),'utf8');
   assert.ok(!/\bfetch\((?:SHARED_STATE_URL|'api\/)/.test(text),'Server fetch left in '+file);
 }
 const forbidden=/-----BEGIN .*PRIVATE KEY-----|gh[pousr]_[A-Za-z0-9]{30,}|sk-[A-Za-z0-9]{30,}|ate0339@gmail\.com|SUNGHYEON HONG|JONGYUN LEE/i;
 function scan(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())scan(p);else if(/\.(?:html|js|json|css|webmanifest)$/.test(p))assert.ok(!forbidden.test(fs.readFileSync(p,'utf8')),'Sensitive content in '+p);}}
 scan(root);
 console.log('PASS: local save, reload, device isolation, conflict, history, undo, quota, corruption, relative assets, no server writes, public content audit');
})();
