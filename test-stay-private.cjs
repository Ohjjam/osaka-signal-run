const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync(__dirname+'/docs/stay-private.js','utf8');
function run(hash,fail=false,previous={}){
 const records=new Map(Object.entries(previous)),replaced=[];
 const context={location:{hash,pathname:'/osaka-signal-run/',search:'?v=46'},history:{replaceState:(_,__,url)=>replaced.push(url)},localStorage:{getItem:k=>records.get(k)||null,setItem:(k,v)=>{if(fail)throw Error('quota');records.set(k,v);}},document:{readyState:'loading',addEventListener:()=>{}},URL,console};
 vm.runInNewContext(source,context);return{records,replaced};
}
const fake={room:'TEST-ROOM',entrance:'TEST-ENTRY',keybox:'TEST-KEY',wifi:'TEST-NET',wifiPassword:'TEST-PASS',passport:'MUST-NOT-SAVE'};
const result=run('#stay46='+encodeURIComponent(JSON.stringify(fake)));
const saved=JSON.parse(result.records.get('osaka-stay-private46'));
assert.equal(saved.room,fake.room);assert.equal(saved.wifiPassword,fake.wifiPassword);assert.equal(saved.passport,undefined);
assert.deepEqual([...result.records.keys()],['osaka-stay-private46']);assert.deepEqual(result.replaced,['/osaka-signal-run/?v=46#hotel-search-v3']);
const old={'osaka-stay-private46':JSON.stringify({room:'OLD'})};assert.equal(run('#stay46=broken',false,old).records.get('osaka-stay-private46'),old['osaka-stay-private46']);
assert.equal(run('#stay46='+encodeURIComponent(JSON.stringify(fake)),true,old).records.get('osaka-stay-private46'),old['osaka-stay-private46']);
assert.equal(run('#stay46='+encodeURIComponent(JSON.stringify({room:'A'.repeat(300)}))).records.get('osaka-stay-private46').includes('A'.repeat(101)),false);
assert.ok(!/fetch\(|OsakaLocalStore|sendBeacon|state\.reservations/.test(source));
assert.ok(source.includes('history.replaceState'));assert.ok(source.includes('autocomplete="off"'));
console.log('PASS: private fragment removed, field allowlist, local-only store, malformed/quota preserve old record, length bounds, no shared-state/network writes.');
