/* Device-local persistence. No network or credentials are used by this adapter. */
(function () {
  'use strict';
  const KEY = 'osaka-device-store-v1';
  const clone = value => JSON.parse(JSON.stringify(value));
  const reply = (body, status = 200) => new Response(JSON.stringify(body), {status, headers:{'Content-Type':'application/json'}});
  function read() {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const db = JSON.parse(raw);
      if (!db.record?.state || !Array.isArray(db.history)) throw new Error('invalid_local_store');
      return db;
    }
    const state = window.OsakaPlannerV3?.state;
    if (!state) throw new Error('planner_not_ready');
    const record = {state:clone(state), revision:0, updatedBy:'이 기기', updatedAt:new Date().toISOString(), action:'initial'};
    const db = {record, history:[clone(record)]};
    localStorage.setItem(KEY, JSON.stringify(db));
    return db;
  }
  function summary(state) {
    return {wishlist:state.wishlist?.length || 0, counts:Object.fromEntries(['sat','sun','mon'].map(day=>[day,state.plans?.[day]?.length || 0])), prepDone:Object.values(state.prepTasks || {}).filter(x=>x === true || x?.done).length, prepTotal:Object.keys(state.prepTasks || {}).length};
  }
  async function request(input, options = {}) {
    try {
      const url = new URL(String(input), location.href);
      const db = read();
      if (url.pathname.endsWith('/api/history') && (!options.method || options.method === 'GET')) {
        const limit = Math.max(1, Math.min(20, Number(url.searchParams.get('limit')) || 20));
        return reply({history:db.history.slice(0,limit).map(({state,...entry})=>({...entry,updatedBy:'이 기기',summary:summary(state)}))});
      }
      if (url.pathname.endsWith('/api/shared-state') && (!options.method || options.method === 'GET')) return reply(db.record);
      const restore = url.pathname.endsWith('/api/history/restore') && options.method === 'POST';
      const save = url.pathname.endsWith('/api/shared-state') && options.method === 'PUT';
      if (!restore && !save) return reply({error:'unknown_local_operation'},404);
      const payload = JSON.parse(options.body);
      if (payload.baseRevision !== db.record.revision) return reply({record:db.record},409);
      const previous = restore ? db.history.find(r=>r.revision === payload.targetRevision) : null;
      if (restore && !previous) return reply({error:'history_missing'},404);
      const state = restore ? previous.state : payload.state;
      if (!state || typeof state !== 'object' || Array.isArray(state)) return reply({error:'invalid_state'},400);
      const record = {state:clone(state),revision:db.record.revision+1,updatedBy:payload.clientId || '이 기기',updatedAt:new Date().toISOString(),action:restore?'restore':'save',...(restore?{restoredFrom:payload.targetRevision}:{})};
      localStorage.setItem(KEY, JSON.stringify({record,history:[clone(record),...db.history].slice(0,20)}));
      return reply(record);
    } catch {
      // Never report success when storage is full, unavailable or corrupt.
      return reply({error:'local_storage_unavailable'},507);
    }
  }
  window.OsakaLocalStore = Object.freeze({request, key:KEY, mode:'device-local'});
})();
