(function () {
  'use strict';
  const P = window.OsakaPlannerV3, D = window.OSAKA_CURATED_V45;
  if (!P || !D) return;
  const KEY = 'osaka-curated45', BACKUP = 'osaka-curated45-backup';
  const days = ['sat', 'sun', 'mon'], labels = {sat:'토 9/5',sun:'일 9/6',mon:'월 9/7'};
  const meals = {breakfast:'아침',lunch:'점심',dinner:'저녁',late:'야식',snack:'간식'};
  const fields = ['plans','starts','transit','itemStarts','itemDurations','mealSlots','mustVisit','wishlist'];
  const clone = x => JSON.parse(JSON.stringify(x));
  const esc = x => String(x ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let day = 'sat', selected = {sat:0,sun:0,mon:0}, ready = false, busy = false, message = '';
  function snapshot() { return Object.fromEntries(fields.map(k=>[k,clone(P.state[k] || (k==='mustVisit'||k==='wishlist'?[]:{}))])); }
  function assign(targetDay, route) {
    const s=P.state;
    for (const key of ['transit','itemStarts','itemDurations']) {
      s[key] ||= {};
      Object.keys(s[key]).filter(k=>k.startsWith(targetDay+':')).forEach(k=>delete s[key][k]);
    }
    s.plans[targetDay]=route.stops.map(stop=>stop.id);
    s.starts[targetDay]=route.stops[0].time;
    for (const [i,stop] of route.stops.entries()) {
      s.itemStarts[`${targetDay}:${stop.id}`]=stop.time;
      s.itemDurations[`${targetDay}:${stop.id}`]=stop.duration;
      if(stop.slot)s.mealSlots[stop.id]=stop.slot;
      const next=route.stops[i+1];
      if(next)s.transit[`${targetDay}:${stop.id}:${next.id}`]=stop.leg;
    }
    if(D.requiredByDay?.[targetDay]) {
      s.mustVisit=[...new Set([...s.mustVisit,...D.requiredByDay[targetDay]])];
      s.wishlist=[...new Set([...s.wishlist,...D.requiredByDay[targetDay]])];
    }
  }
  async function apply(targets, automatic=false) {
    if(busy)return;
    busy=true;
    const before=snapshot();
    try {
      // Backup must succeed before replacing any populated day.
      localStorage.setItem(BACKUP,JSON.stringify(before));
      targets.forEach(d=>assign(d,D.days[d][automatic?0:selected[d]]));
      P.saveState();
      await P.pushSharedState();
      localStorage.setItem(KEY,JSON.stringify({installed:true}));
      P.refreshAll();
      message=automatic?'비어 있던 요일에 기본 추천을 넣었어요.':`${targets.map(d=>labels[d]).join(' · ')} 일정 적용 완료. 아래 지도도 바뀌었어요.`;
      document.dispatchEvent(new CustomEvent('osaka:curated-day',{detail:{day}}));
    } catch(error) {
      Object.assign(P.state,before);
      message='저장 공간을 확인해 주세요. 기존 일정은 유지했어요.';
    } finally { busy=false;render(); }
  }
  async function undo() {
    if(busy)return;
    busy=true;
    try {
      const saved=JSON.parse(localStorage.getItem(BACKUP));
      if(!saved?.plans)return;
      const current=snapshot();
      Object.assign(P.state,saved);
      P.saveState(); await P.pushSharedState(); P.refreshAll();
      localStorage.setItem(BACKUP,JSON.stringify(current));
      message='적용 전 일정으로 되돌렸어요.';
      document.dispatchEvent(new CustomEvent('osaka:curated-day',{detail:{day}}));render();
    } catch {message='복원하지 못했어요. 저장 공간을 확인해 주세요.';}
    finally {busy=false;render();}
  }
  function stopMarkup(s,i,route) {
    const item=P.allItems.get(s.id)||{},detail=D.details?.[s.id]||{};
    const logistics=/hotel45|checkout45|locker45|train45|queue45|queue49|locker49|airport49/.test(s.id);
    const why=detail.why||item.whyGo||item.description||item.note||'이 지역 안에서 묶어 이동 부담을 줄이는 정차입니다.';
    const order=detail.order||item.menu||'';
    const url=detail.source||item.official||item.menuUrl;
    const map=item.map||'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent((item.jp||item.name||'')+' Osaka');
    const next=route.stops[i+1],leg=next?window.OsakaLegs48?.describe(s.id,next.id,s.leg):null;
    const destination=next?P.allItems.get(next.id):null;
    const directions=next?'https://www.google.com/maps/dir/?'+new URLSearchParams({api:'1',origin:item.coords?.join(',')||item.name,destination:destination?.coords?.join(',')||destination?.name||next.id,travelmode:leg?.travelmode||'transit'}):'';
    const transport=leg?`<aside class="curated-leg48"><strong>↓ ${esc(leg.mode)} · 약 ${s.leg}분</strong><p>${esc(leg.route)}</p><a href="${esc(directions)}" target="_blank" rel="noopener">${leg.travelmode==='walking'?'도보':'대중교통'} 길찾기 ↗</a></aside>`:'';
    return `<li><time>${s.time}</time><div><strong>${esc(item.name||s.id)}</strong>${s.slot?`<b>${meals[s.slot]}</b>`:''}<small>${s.duration}분${(D.requiredByDay?.[day]||[]).includes(s.id)?' · 필수':''}${i<route.stops.length-1?` · 다음 이동 약 ${s.leg}분`:''}</small><p class="curated-stop-why"><em>${logistics?'이 순서인 이유':'어떤 곳?'}</em>${esc(why)}</p>${order?`<p class="curated-order"><em>${item.category==='food'?'추천 주문':'꼭 볼 것'}</em>${esc(order)}</p>`:''}${s.note?`<p class="curated-stop-tip">${esc(s.note)}</p>`:''}<details class="curated-stop-more"><summary>현장 팁·지도${url?'·출처':''}</summary><p>${esc(detail.tip||item.caution||'체류시간에는 예상 대기가 포함됩니다. 줄이 길면 뒤의 선택 일정을 줄이고, 운영 여부는 방문 전에 확인하세요.')}</p><a href="${esc(map)}" target="_blank" rel="noopener">장소 지도 ↗</a>${url?` · <a href="${esc(url)}" target="_blank" rel="noopener">메뉴·장소 정보 ↗</a>`:''}</details>${transport}</div></li>`;
  }
  function render() {
    const root=document.getElementById('curated45'); if(!root)return;
    const route=D.days[day][selected[day]];
    const aqua=route.stops.find(s=>s.id==='kaiyukan');
    const cover=route.stops.map(s=>P.allItems.get(s.id)).find(p=>p?.image&&!p.planningOnly&&p.category==='attraction')||P.allItems.get(route.stops[1]?.id);
    const applied=JSON.stringify(P.state.plans[day])===JSON.stringify(route.stops.map(s=>s.id)) && route.stops.every(s=>P.state.itemStarts[`${day}:${s.id}`]===s.time);
    root.innerHTML=`<header><div><span class="curated-eyebrow">SEPT 05—07 / THREE DAYS</span><h3>이번 여행 추천 루트</h3></div><button type="button" data-curated-all ${busy?'disabled':''}>선택한 3일 적용</button></header>
      <nav class="curated-days" aria-label="추천 루트 요일">${days.map(d=>`<button type="button" data-curated-day="${d}" aria-pressed="${d===day}">${labels[d]}<small>${d==='sat'?'17시 숙소 → 라멘소':d==='sun'?'성·텐마 스시·북쪽':'수족관 → 공항 직행'}</small></button>`).join('')}</nav>
      <p class="curated-choice-count">${D.days[day].length}가지 코스 · 취향과 체력에 맞춰 고르기</p>
      <div class="curated-options">${D.days[day].map((r,i)=>`<button type="button" data-curated-option="${i}" aria-pressed="${selected[day]===i}"><small>${esc(r.tag)} · ${r.stops[0].time}–${window.OsakaVNextCore.minutesToTime(window.OsakaVNextCore.timeToMinutes(r.stops.at(-1).time)+r.stops.at(-1).duration)}</small><strong>${esc(r.label)}</strong><span>${r.stops.filter(s=>!(/hotel45|checkout45|locker45|train45|queue45|queue49|locker49|airport49/.test(s.id))).length}곳 · ${r.stops.filter(s=>s.slot).length}번 먹거리</span></button>`).join('')}</div>
      ${cover?.image?`<figure class="curated-cover"><img src="${esc(cover.image)}" alt="${esc(cover.name)} 참고 이미지" loading="lazy"><figcaption>${esc(route.label)} · 장소 분위기 참고</figcaption></figure>`:''}
      <p class="curated-why">${esc(route.why)}</p>
      ${aqua?`<p class="curated-ticket">필수 · 가이유칸 ${aqua.time} 입장 목표 / 아직 예매된 일정이 아닙니다. <a href="https://www.kaiyukan.com/info/ticket/kaiyukan/" target="_blank" rel="noopener">공식 시간 지정권 확인 ↗</a></p>`:''}
      <p class="curated-footnote">구간별 추천 이동수단 · 현재 코스는 도보·지하철 중심으로 버스 탑승 없음. 시간은 보행·환승·대기 여유를 포함한 계획값이며 실제 배차·운휴는 길찾기에서 확인.</p>
      <ol class="curated-timeline">${route.stops.map((s,i)=>stopMarkup(s,i,route)).join('')}</ol>
      <p class="curated-note">${esc(route.note)}</p><p class="curated-footnote">이동·대기 포함 예상 일정 · 음식점은 현장에서 교체 가능 · 운영·좌석 상황은 방문 전 확인</p>
      <footer><button type="button" class="curated-primary" data-curated-apply ${busy?'disabled':''}>${applied?'적용 중 · 다시 적용':labels[day]+' 일정에 적용'}</button><button type="button" data-curated-map>저장한 일정 지도 ↓</button>${localStorage.getItem(BACKUP)?'<button type="button" data-curated-undo>직전 적용 되돌리기</button>':''}</footer>
      <p class="curated-status" role="status">${esc(message||'기존 일정은 그대로. 추천안을 고르고 요일별로 적용하세요.')}</p>`;
  }
  function boot() {
    if(ready || !P.sharedSync.booted)return;
    ready=true;
    for(const d of days){
      const match=D.days[d].findIndex(r=>JSON.stringify(P.state.plans[d])===JSON.stringify(r.stops.map(s=>s.id)));
      if(match>=0)selected[d]=match;
    }
    const anchor=document.getElementById('vnext-variant-bar');if(!anchor)return;
    const root=document.createElement('section');root.id='curated45';root.className='curated45';root.setAttribute('aria-label','요일별 추천 일정');anchor.before(root);
    root.addEventListener('click',event=>{
      const b=event.target.closest('button');if(!b || busy)return;
      if(b.dataset.curatedDay){day=b.dataset.curatedDay;render();}
      if(b.dataset.curatedOption!==undefined){selected[day]=Number(b.dataset.curatedOption);render();}
      if(b.hasAttribute('data-curated-apply'))void apply([day]);
      if(b.hasAttribute('data-curated-all'))void apply(days);
      if(b.hasAttribute('data-curated-undo'))void undo();
      if(b.hasAttribute('data-curated-map')){
        document.dispatchEvent(new CustomEvent('osaka:curated-day',{detail:{day}}));
        document.getElementById('vnext-auto-route')?.scrollIntoView({behavior:'auto',block:'start'});
      }
    });
    render();
    try {
      if(!localStorage.getItem(KEY)){
        const empty=days.filter(d=>!P.state.plans[d]?.length);
        if(empty.length)void apply(empty,true);
        else localStorage.setItem(KEY,JSON.stringify({installed:true}));
      }
    }catch{message='추천안은 볼 수 있지만 저장 공간 확인이 필요해요.';render();}
  }
  window.OsakaCurated45={get ready(){return ready;},get busy(){return busy;},assign,apply,snapshot};
  const timer=setInterval(()=>{boot();if(ready)clearInterval(timer);},100);
  boot();
})();
