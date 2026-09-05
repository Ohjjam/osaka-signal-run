/* Private, device-local stay details. Real values never belong in this file. */
(function(){
 'use strict';
 const KEY='osaka-stay-private46', names={room:'객실',entrance:'건물 현관',keybox:'객실 키박스',wifi:'Wi-Fi 이름',wifiPassword:'Wi-Fi 암호'};
 const esc=x=>String(x||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const clean=x=>Object.fromEntries(Object.keys(names).map(k=>[k,String(x?.[k]||'').replace(/[\u0000-\u001f]/g,'').slice(0,100)]));
 let data={},status='',revealed=false,imported=false;
 try { data=clean(JSON.parse(localStorage.getItem(KEY)||'{}')); } catch {status='이 브라우저의 저장 공간을 확인해 주세요.';}
 // Consume the private fragment before any other application script executes.
 // Fragments are not sent in HTTP requests. Remove it from the address immediately.
 if(location.hash.startsWith('#stay46=')){
   const fragment=location.hash.slice(8);
   history.replaceState(null,'',location.pathname+location.search+'#hotel-search-v3');
   try {
     if(fragment.length>5000)throw Error('oversize');
     const next=clean(JSON.parse(decodeURIComponent(fragment)));
     if(!next.room)throw Error('invalid');
     data=next; imported=true;
     localStorage.setItem(KEY,JSON.stringify(data));
     status='객실·출입·Wi-Fi 정보를 이 브라우저에 저장했어요.';
   }catch {status='자동 저장을 완료하지 못했어요. 아래 정보를 확인하고 다시 저장해 주세요.';}
 }
 function render(){
   const root=document.getElementById('stay-private46');if(!root)return;
   root.innerHTML=`<header><div><small>PRIVATE · 이 브라우저에만</small><h4>내 객실·출입 정보</h4></div><button type="button" data-stay-reveal>${revealed?'암호 가리기':'암호 보기'}</button></header>
     <form>${Object.entries(names).map(([key,label])=>`<label>${label}<input name="${key}" type="${revealed||key==='room'||key==='wifi'?'text':'password'}" value="${esc(data[key])}" autocomplete="off" maxlength="100" placeholder="숙소 안내에서 확인"></label>`).join('')}<button type="submit">이 브라우저에 저장</button></form>
     <ol><li>현관의 <b>呼出(호출)</b>을 누른 뒤 안내된 현관 코드를 입력.</li><li>안내된 객실 키박스에 키박스 코드를 맞춰 객실 열쇠 수령.</li><li>열쇠로 입실. 실제 키박스 위치는 현장 표시와 숙소 안내를 확인.</li></ol>
     <p>일반 사이트 링크·일정 백업에는 포함되지 않습니다. 이 기기를 쓰는 사람은 볼 수 있어요. 브라우저 데이터를 지우면 삭제됩니다.</p>
     <footer><button type="button" data-stay-copy>동행에게 보낼 개인 링크 복사</button><button type="button" data-stay-clear>이 기기에서 지우기</button></footer><p role="status">${esc(status)}</p>`;
 }
 function mount(){
   const anchor=document.querySelector('#booked-hotel-v18 .stay-access-v20');
   if(!anchor||document.getElementById('stay-private46'))return;
   const root=document.createElement('section');root.id='stay-private46';anchor.before(root);render();
   root.addEventListener('submit',event=>{
     event.preventDefault();const next=clean(Object.fromEntries(new FormData(event.target)));
     try {localStorage.setItem(KEY,JSON.stringify(next));data=next;status='저장했어요. 일반 공개 페이지에는 전송되지 않아요.';}catch{status='저장하지 못했어요. 브라우저 저장 공간을 확인해 주세요.';}
     render();
   });
   root.addEventListener('click',async event=>{
     const b=event.target.closest('button');if(!b)return;
     if(b.hasAttribute('data-stay-reveal')){data=clean(Object.fromEntries(new FormData(root.querySelector('form'))));revealed=!revealed;render();}
     if(b.hasAttribute('data-stay-clear')){try{localStorage.removeItem(KEY);data={};revealed=false;status='이 기기의 출입 정보를 지웠어요. 숙소 원본 안내에서는 다시 확인할 수 있어요.';}catch{status='삭제하지 못했어요.';}render();}
     if(b.hasAttribute('data-stay-copy')){
       if(!data.room){status='객실 정보를 먼저 저장해 주세요.';render();return;}
       try {await navigator.clipboard.writeText(location.origin+location.pathname+'?v=46#stay46='+encodeURIComponent(JSON.stringify(clean(data))));status='개인 링크 복사 완료. 출입 암호가 포함되므로 동행에게만 보내세요.';}catch{status='복사 권한이 없어 복사하지 못했어요.';}
       render();
     }
   });
 }
 function boot(){
   const target=document.getElementById('booked-hotel-v18');if(!target)return;
   mount();new MutationObserver(mount).observe(target,{childList:true});
   if(imported){const timer=setInterval(()=>{if(!window.OsakaPlannerV3?.sharedSync.booted)return;clearInterval(timer);window.OsakaPlannerV3.showGuidePanel('hotel-search-v3');mount();document.getElementById('stay-private46')?.scrollIntoView({block:'start'});},100);}
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
