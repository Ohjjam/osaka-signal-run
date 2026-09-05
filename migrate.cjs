// One-time bounded conversion of the copied public directory. Original Sites files stay untouched.
const fs=require('node:fs'),path=require('node:path');
const dir=path.join(__dirname,'docs');
function edit(name, fn){const file=path.join(dir,name);fs.writeFileSync(file,fn(fs.readFileSync(file,'utf8')));}
function exact(s,a,b){if(!s.includes(a))throw new Error('Missing migration anchor: '+a.slice(0,60));return s.replaceAll(a,b);}
edit('guide.html',s=>{
  s=exact(s,'  <script>','  <script src="local-store.js?v=1"></script>\n  <script>');
  return s.replaceAll('공용 일정 연결 중','이 기기에 저장').replaceAll('같은 링크를 쓰는 사람에게 함께 표시됩니다.','추가한 항목은 이 브라우저에만 저장됩니다.').replaceAll('모두에게 함께 저장됩니다.','내 목록에 저장됩니다.').replaceAll('공용 목록에 저장','내 목록에 저장').replaceAll('공용으로 추가한 항목','내가 추가한 항목').replaceAll('공용 추가 0개','내 추가 0개').replaceAll('방문 기록은 연결 복구 후 동기화됩니다.','방문 기록은 이 브라우저에만 저장됩니다. 브라우저 데이터를 지우면 삭제되므로 일정의 JSON 백업을 이용하세요.').replaceAll('공용 일정에 저장하지 않습니다.','서버에 전송하지 않습니다.');
});
edit('planner-v3.js',s=>{
  s=exact(s,'fetch(SHARED_STATE_URL','window.OsakaLocalStore.request(SHARED_STATE_URL');
  s=exact(s,'  function setSharedSyncStatus(mode, title, detail) {',`  function setSharedSyncStatus(mode, title, detail) {
    if (mode === 'synced') { title = '이 기기에 저장됨'; detail = '수정은 이 브라우저에만 적용됩니다 · 친구와 자동 공유되지 않아요'; }
    else if (mode === 'saving') { title = '내 일정 저장 중'; detail = '이 브라우저에 저장하고 있습니다.'; }
    else if (mode === 'offline') { title = '내 저장 상태 확인 필요'; detail = '저장 공간 또는 다른 탭의 변경을 확인하세요. 내 일정에서 JSON 백업을 받아두세요.'; }`);
  const start=s.indexOf('  function connectSharedEvents() {');
  const end=s.indexOf('  async function initializeSharedState()',start);
  if(start<0||end<0)throw new Error('Missing sync anchors');
  s=s.slice(0,start)+`  function connectSharedEvents() {
    sharedSync.events?.close();
    const listener = async event => {
      if (event.key !== window.OsakaLocalStore.key) return;
      const response = await window.OsakaLocalStore.request(SHARED_STATE_URL);
      if (response.ok) applySharedRecord(await response.json());
    };
    window.addEventListener('storage', listener);
    sharedSync.events = {close(){ window.removeEventListener('storage', listener); }};
  }

`+s.slice(end);
  return s.replaceAll('공용 추가 ${state.customItems.length}개','내 추가 ${state.customItems.length}개').replaceAll('공용 목록에서 삭제할까요? 다른 사람 화면에서도 사라집니다.','내 목록에서 삭제할까요? 다른 사람의 목록에는 영향이 없습니다.').replaceAll('공용 목록에 추가','내 목록에 추가');
});
edit('vnext.js',s=>s.replaceAll("fetch('api/history", "window.OsakaLocalStore.request('api/history").replaceAll('공개 공용 일정입니다. 예약번호·여권번호·카드정보는 입력하지 말고 상태와 담당자만 공유하세요.','각자 사용하는 일정입니다. 수정은 이 브라우저에만 저장되며 친구에게 자동 반영되지 않습니다. 여권번호·카드정보는 입력하지 마세요.').replaceAll('공용 저장 연결을 확인하세요.','브라우저 저장 공간을 확인하세요.').replaceAll('공용 일정을 r${targetRevision} 상태로 복구할까요? 현재 상태도 역사에 남습니다.','내 일정을 r${targetRevision} 상태로 복구할까요? 현재 상태도 최근 변경에 남습니다.').replaceAll('다른 사람이 먼저 수정했습니다.','이 브라우저의 다른 탭에서 먼저 수정했습니다.'));
edit('manifest.webmanifest',s=>s.replace('성인 3명이 함께 수정하는','각자의 기기에 저장하는'));
edit('sw.js',s=>s.replace("'osaka-guide-v43'","'osaka-guide-local-v1'").replace("'./', './guide.html'","'./', './guide.html', './local-store.js?v=1'"));
fs.copyFileSync(path.join(dir,'guide.html'),path.join(dir,'index.html'));
console.log('Static device-local migration complete. Original site untouched.');
