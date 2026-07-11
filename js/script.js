
const DATA=window.__DOC_DATA__;const NAV=DATA.nav,CONTENT=DATA.content;
const FLAT=[];NAV.forEach(g=>g.children.forEach(c=>FLAT.push({id:c.id,label:c.label,group:g.label})));
const ICONS={
  book:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  lock:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  grid:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',
  settings:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/><circle cx="12" cy="12" r="3"/></svg>',
  folder:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  play:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5,3 19,12 5,21"/></svg>',
  tool:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  chart:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  flow:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/></svg>',
  book2:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
  layers:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12,2 2,7 12,12 22,7"/><polyline points="2,17 12,22 22,17"/></svg>',
  code:'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
};
const CHEV='<svg class="chev" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>';
function esc(s){return String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]))}

function buildSidebar(){
  const tree=document.getElementById('navTree');
  tree.innerHTML=NAV.map(g=>`
    <div class="nav-group" data-group="${g.id}">
      <div class="nav-group-head" data-toggle="group">
        <span class="nav-icon">${ICONS[g.icon]||ICONS.book}</span>
        <span>${esc(g.label)}</span>${CHEV}
      </div>
      <div class="nav-children">
        ${g.children.map(c=>`
          <div class="nav-topic" data-topic="${c.id}">
            <div class="nav-topic-head" data-action="show">
              <span class="nav-topic-label">${esc(c.label)}</span>
              ${c.subs&&c.subs.length?CHEV:''}
            </div>
            ${c.subs&&c.subs.length?`<div class="nav-subs">${c.subs.map(s=>`<a class="nav-sub" data-anchor="${s.anchor}" data-parent="${c.id}">${esc(s.label)}</a>`).join('')}</div>`:''}
          </div>`).join('')}
      </div>
    </div>`).join('');
  tree.addEventListener('click',e=>{
    const sub=e.target.closest('.nav-sub');
    if(sub){ e.preventDefault(); const pid=sub.dataset.parent; if(pid!==currentTopic){ showTopic(pid,sub.dataset.anchor); } else { scrollToAnchor(sub.dataset.anchor); } setActiveSub(sub.dataset.anchor); return; }
    const head=e.target.closest('.nav-topic-head');
    if(head){ const t=head.parentElement; const id=t.dataset.topic;
      // Toggle expansion if has subs and clicking the chev area; otherwise navigate
      const chev=e.target.closest('.chev');
      if(chev && t.querySelector('.nav-subs')){ t.classList.toggle('open'); return; }
      showTopic(id); return; }
    const gh=e.target.closest('.nav-group-head');
    if(gh){
      const grp=gh.parentElement;
      const wasOpen=grp.classList.contains('open');
      document.querySelectorAll('.nav-group.open').forEach(g=>{ if(g!==grp) g.classList.remove('open'); });
      grp.classList.toggle('open',!wasOpen);
    }
  });
}

let currentTopic=null;
function scrollToAnchor(a){ const el=document.getElementById(a); if(el) el.scrollIntoView({behavior:'smooth',block:'start'}); }
function setActiveSub(a){ document.querySelectorAll('.nav-sub').forEach(s=>s.classList.toggle('active',s.dataset.anchor===a)); }

function showTopic(id,anchor){
  const t=CONTENT[id]; if(!t) return;
  currentTopic=id;
  const idx=FLAT.findIndex(x=>x.id===id);
  const prev=idx>0?FLAT[idx-1]:null, next=idx<FLAT.length-1?FLAT[idx+1]:null;
  document.getElementById('contentArea').innerHTML=`
    <div class="topic-badge">${esc(t.badge)}</div>
    <h1 class="topic-title">${esc(t.title)}</h1>
    <div class="topic-meta"><span>${esc(t.section)}</span>
      <button class="bookmark-toggle" id="bmBtn">☆ Bookmark</button></div>
    <div class="topic-body">${t.body}</div>
    <nav class="topic-nav">
      ${prev?`<a class="topic-nav-btn" data-go="${prev.id}"><div class="topic-nav-label">← Previous</div><div class="topic-nav-title">${esc(prev.label)}</div></a>`:'<span class="topic-nav-btn" disabled></span>'}
      ${next?`<a class="topic-nav-btn next" data-go="${next.id}"><div class="topic-nav-label">Next →</div><div class="topic-nav-title">${esc(next.label)}</div></a>`:'<span class="topic-nav-btn next" disabled></span>'}
    </nav>`;
  document.getElementById('crumbSection').textContent=t.section;
  document.getElementById('crumbTopic').textContent=t.topic;
  // active in sidebar + expand group + expand topic subs
  document.querySelectorAll('.nav-topic').forEach(el=>el.classList.toggle('active',el.dataset.topic===id));
  NAV.forEach(g=>{
    const inG=g.children.some(c=>c.id===id);
    const el=document.querySelector(`.nav-group[data-group="${g.id}"]`);
    if(el) el.classList.toggle('open',inG);
  });
  const tEl=document.querySelector(`.nav-topic[data-topic="${id}"]`);
  if(tEl && tEl.querySelector('.nav-subs')) tEl.classList.add('open');
  document.getElementById('bmBtn').addEventListener('click',()=>toggleBookmark(id));
  document.querySelectorAll('[data-go]').forEach(b=>b.addEventListener('click',()=>showTopic(b.dataset.go)));
  refreshBookmarkBtn();
  history.replaceState(null,'','#'+id+(anchor?'/'+anchor:''));
  if(anchor){ setTimeout(()=>{scrollToAnchor(anchor);setActiveSub(anchor)},50); }
  else { window.scrollTo({top:0,behavior:'smooth'}); setActiveSub(null); }
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

function getBM(){try{return JSON.parse(localStorage.getItem('oam_bm')||'[]')}catch(e){return[]}}
function setBM(a){localStorage.setItem('oam_bm',JSON.stringify(a))}
function toggleBookmark(id){const l=getBM();const i=l.indexOf(id);if(i>=0)l.splice(i,1);else l.push(id);setBM(l);refreshBookmarkBtn();renderBookmarks();}
function refreshBookmarkBtn(){const b=document.getElementById('bmBtn');if(!b)return;const on=getBM().includes(currentTopic);b.classList.toggle('active',on);b.textContent=on?'★ Bookmarked':'☆ Bookmark';}
function renderBookmarks(){const l=getBM();const el=document.getElementById('bookmarksList');const e=document.getElementById('bookmarksEmpty');if(!l.length){e.style.display='block';el.innerHTML='';return;}e.style.display='none';el.innerHTML=l.map(id=>{const t=CONTENT[id];if(!t)return'';return `<div class="search-result-item" data-go="${id}"><div class="search-result-title">${esc(t.title)}</div><div class="search-result-section">${esc(t.section)}</div></div>`}).join('');el.querySelectorAll('[data-go]').forEach(x=>x.addEventListener('click',()=>{showTopic(x.dataset.go);document.getElementById('bookmarksDropdown').classList.remove('active')}));}

const IDX=Object.entries(CONTENT).map(([id,t])=>({id,title:t.title,section:t.section,text:(t.body||'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').toLowerCase()}));
function runSearch(q){const dd=document.getElementById('searchDropdown');q=q.trim().toLowerCase();if(q.length<2){dd.classList.remove('active');return;}const res=[];for(const e of IDX){const iT=e.title.toLowerCase().includes(q);const iB=e.text.includes(q);if(!iT&&!iB)continue;let sn='';if(iB){const i=e.text.indexOf(q);const s=Math.max(0,i-50),en=Math.min(e.text.length,i+q.length+80);sn=(s>0?'…':'')+e.text.slice(s,en).replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi'),m=>`<mark>${m}</mark>`);}res.push({...e,snippet:sn,score:(iT?2:0)+(iB?1:0)});if(res.length>=40)break;}res.sort((a,b)=>b.score-a.score);if(!res.length){dd.innerHTML='<div class="search-result-item">No results.</div>';dd.classList.add('active');return;}dd.innerHTML=res.slice(0,15).map(r=>`<div class="search-result-item" data-go="${r.id}"><div class="search-result-title">${esc(r.title)}</div><div class="search-result-section">${esc(r.section)}</div>${r.snippet?'<div class="search-result-snippet">'+r.snippet+'</div>':''}</div>`).join('');dd.querySelectorAll('[data-go]').forEach(x=>x.addEventListener('click',()=>{showTopic(x.dataset.go);document.getElementById('searchInput').value='';dd.classList.remove('active')}));dd.classList.add('active');}

function init(){
  buildSidebar();
  const input=document.getElementById('searchInput');
  input.addEventListener('input',e=>runSearch(e.target.value));
  document.addEventListener('click',e=>{
    if(!e.target.closest('.search-wrap'))document.getElementById('searchDropdown').classList.remove('active');
    if(!e.target.closest('#bookmarkBtn'))document.getElementById('bookmarksDropdown').classList.remove('active');
  });
  const sidebarToggleBtn=document.getElementById('sidebarToggle');
  sidebarToggleBtn.setAttribute('aria-expanded','true');
  sidebarToggleBtn.addEventListener('click',()=>{
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('overlay').classList.toggle('active');
    const collapsed=document.getElementById('sidebar').classList.toggle('collapsed');
    document.getElementById('main').classList.toggle('sidebar-collapsed',collapsed);
    document.querySelector('.breadcrumb').classList.toggle('sidebar-collapsed',collapsed);
    sidebarToggleBtn.setAttribute('aria-expanded',collapsed?'false':'true');
  });
  document.getElementById('overlay').addEventListener('click',()=>{document.getElementById('sidebar').classList.remove('open');document.getElementById('overlay').classList.remove('active');});
  document.getElementById('bookmarkBtn').addEventListener('click',e=>{e.stopPropagation();document.getElementById('bookmarksDropdown').classList.toggle('active');});
  document.getElementById('printBtn').addEventListener('click',()=>window.print());
  document.getElementById('themeToggle').addEventListener('click',()=>{const d=document.documentElement.dataset.theme==='dark';document.documentElement.dataset.theme=d?'light':'dark';localStorage.setItem('oam_theme',d?'light':'dark');});
  if(localStorage.getItem('oam_theme')==='dark')document.documentElement.dataset.theme='dark';
  document.addEventListener('keydown',e=>{
    if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='k'){e.preventDefault();input.focus();}
    if(e.key==='Escape'){document.getElementById('searchDropdown').classList.remove('active');input.blur();}
    if(e.altKey&&e.key.toLowerCase()==='b')document.getElementById('sidebarToggle').click();
  });
  renderBookmarks();
  const h=location.hash.slice(1).split('/');
  const id=(h[0]&&CONTENT[h[0]])?h[0]:DATA.home;
  showTopic(id,h[1]||null);
}
window.addEventListener('DOMContentLoaded',init);
