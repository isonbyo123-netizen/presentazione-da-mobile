(function(){
 if(new URLSearchParams(location.search).get('architecture')==='extended'){
  const css=document.createElement('link');css.rel='stylesheet';css.href='architecture-extended.css?v=5';document.head.appendChild(css);
  const js=document.createElement('script');js.src='architecture-extended.js?v=5';document.body.appendChild(js);return;
 }

 const labels=['','Start with the right signals.','Protect data before AI.','One orchestrator. 16 specialized agents.','Find the next opportunity.','Connect companies and decision makers.','Rank opportunities by potential.','AI drafts. People approve.','Check the evidence. Keep people in control.','Every result stays traceable.','Qualified opportunities, ready for the team.','AI recommends. Code controls. People decide.'];
 const root=document.createElement('section');root.id='architectureInteractive';root.setAttribute('aria-label','Platform architecture');root.setAttribute('aria-hidden','true');root.inert=true;
 root.innerHTML=`<div id="architectureCanvas">
 <header class="arch-header"><span class="arch-eyebrow">PLATFORM ARCHITECTURE</span><h1>From signals to opportunities.</h1><p id="architectureCaption"></p><span id="architectureProgress" aria-label="Architecture step"></span></header>
 <svg class="arch-flow" viewBox="0 0 1440 900" aria-hidden="true"><defs><marker id="archArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#aa95d2"/></marker></defs><path class="arch-reveal" data-reveal="2" d="M304 408H338"/><path class="arch-reveal" data-reveal="3" d="M564 408H598"/><path class="arch-reveal" data-reveal="8" d="M824 408H858"/><path class="arch-reveal" data-reveal="10" d="M1084 408H1118"/></svg>
 <div class="arch-nodes"><article class="arch-node arch-reveal" data-reveal="1" data-focus="1" style="--node-color:#1586b7"><span class="arch-node-number">1</span><div class="arch-icon"><svg viewBox="0 0 96 96" aria-hidden="true"><circle cx="48" cy="48" r="32"/><path d="M16 48h64M48 16c-22 18-22 46 0 64M48 16c22 18 22 46 0 64M22 30h52M22 66h52"/></svg></div><h2>Signals</h2><p>Projects · Markets</p></article><article class="arch-node arch-reveal" data-reveal="2" data-focus="2" style="--node-color:#b5661d"><span class="arch-node-number">2</span><div class="arch-icon"><svg viewBox="0 0 96 96" aria-hidden="true"><path d="M48 12 78 24v25c0 19-18 32-30 37-12-5-30-18-30-37V24Z"/><path d="m32 48 11 11 23-26"/></svg></div><h2>Secure intake</h2><p>Filter · Protect</p></article><article class="arch-node arch-reveal" data-reveal="3" data-focus="3" style="--node-color:#7048e8"><span class="arch-node-number">3</span><div class="arch-icon"><svg viewBox="0 0 96 96" aria-hidden="true"><path d="M45 25c-8-16-31-7-27 9-17 8-12 29 1 32-3 20 19 26 26 11V25ZM51 25c8-16 31-7 27 9 17 8 12 29-1 32 3 20-19 26-26 11V25Z"/><path d="M20 34c10 0 12 7 12 12M19 66c12-3 16-11 14-18M76 34c-10 0-12 7-12 12M77 66c-12-3-16-11-14-18"/></svg></div><h2>AI engine</h2><p>16 agents</p><div class="arch-tech">AWS Step Functions<br>Amazon Bedrock</div></article><article class="arch-node arch-reveal" data-reveal="8" data-focus="8" style="--node-color:#9d7217"><span class="arch-node-number">4</span><div class="arch-icon"><svg viewBox="0 0 96 96" aria-hidden="true"><circle cx="48" cy="48" r="34"/><path d="m29 48 13 13 26-28"/></svg></div><h2>Validation</h2><p>Evidence + review</p><div class="arch-score">0–100</div></article><article class="arch-node arch-reveal" data-reveal="10" data-focus="10" style="--node-color:#258961"><span class="arch-node-number">5</span><div class="arch-icon"><svg viewBox="0 0 96 96" aria-hidden="true"><path d="M24 39a18 18 0 0 1 31-16 19 19 0 0 1 29 21c16 15 5 34-9 34H24C2 78 1 44 24 39Z"/><path d="M34 56h28m-10-10 10 10-10 10"/></svg></div><h2>Salesforce</h2><p>Qualified opportunities</p></article></div>
 <div class="arch-capabilities"><div class="arch-capability arch-reveal" data-reveal="4" data-focus="4"><svg viewBox="0 0 96 96" aria-hidden="true"><circle cx="39" cy="39" r="23"/><path d="m56 56 24 24M28 39h22M39 28v22"/></svg><h3>Find projects</h3></div><div class="arch-capability arch-reveal" data-reveal="5" data-focus="5"><svg viewBox="0 0 96 96" aria-hidden="true"><circle cx="48" cy="27" r="12"/><circle cx="20" cy="40" r="9"/><circle cx="76" cy="40" r="9"/><path d="M27 80V64a21 21 0 0 1 42 0v16M7 78V66a13 13 0 0 1 16-13M89 78V66a13 13 0 0 0-16-13"/></svg><h3>Map people</h3></div><div class="arch-capability arch-reveal" data-reveal="6" data-focus="6"><svg viewBox="0 0 96 96" aria-hidden="true"><path d="M16 80V52h14v28M41 80V34h14v46M66 80V16h14v64"/></svg><h3>Score potential</h3></div><div class="arch-capability arch-reveal" data-reveal="7" data-focus="7"><svg viewBox="0 0 96 96" aria-hidden="true"><path d="M18 17h48v19M18 17v64h47V63M40 63l4-16 30-30 12 12-30 30Z"/></svg><h3>Draft outreach</h3></div></div>
 <div class="arch-foundation arch-reveal" data-reveal="9"><svg viewBox="0 0 96 96" aria-hidden="true"><ellipse cx="48" cy="22" rx="31" ry="12"/><path d="M17 22v50c0 16 62 16 62 0V22M17 47c0 16 62 16 62 0"/></svg><strong>Shared data</strong><span>Data · Documents · Audit</span></div>
 <div class="arch-governance arch-reveal" data-reveal="11"><svg viewBox="0 0 96 96" aria-hidden="true"><path d="M48 12 78 24v25c0 19-18 32-30 37-12-5-30-18-30-37V24Z"/><path d="m32 48 11 11 23-26"/></svg><strong>Secure by design</strong><span>EU cloud · Privacy · Human approval</span></div>
 </div>`;
 document.body.appendChild(root);
 let step=1,active=false,seen=false,hoverGroup=null;
 const renderPresentation=typeof window.render==='function'?window.render:null;
 const hasDeck=typeof startRoadmap==='function'&&typeof forward==='function';
 function size(){root.style.setProperty('--architecture-scale',String(Math.min(innerWidth/1440,innerHeight/900)))}
 function render(){
  root.dataset.step=String(step);
  document.getElementById('architectureCaption').textContent=labels[step];
  document.getElementById('architectureProgress').textContent=String(step).padStart(2,'0')+' / 11';
  root.querySelectorAll('[data-reveal]').forEach(el=>el.classList.toggle('shown',step>=Number(el.dataset.reveal)));
  root.querySelectorAll('[data-focus]').forEach(el=>el.classList.toggle('active',step===Number(el.dataset.focus)));
  size();
 }
 function open(at=1){
  step=at;active=true;root.inert=false;root.setAttribute('aria-hidden','false');document.body.classList.add('architecture-active');
  if(hasDeck){stage.inert=true;syncHomeWork()}render();document.body.focus({preventScroll:true});
 }
 function close(){
  active=false;root.inert=true;root.setAttribute('aria-hidden','true');document.body.classList.remove('architecture-active');hoverGroup=null;
  if(hasDeck){renderDeck();syncHomeWork()}document.body.focus({preventScroll:true});
 }
 const renderDeck=hasDeck?renderPresentation:null;
 function advance(){
  if(step<11){step++;render()}else if(hasDeck){seen=true;close();originalRoadmap()}
 }
 function retreat(){
  if(step>1){step--;render()}else if(hasDeck){seen=false;close()}
 }
 let originalRoadmap=null;
 if(hasDeck){
  originalRoadmap=startRoadmap;
  const originalForward=forward,originalBackward=backward;
  startRoadmap=function(){if(!seen){open(1);return}originalRoadmap()};
  forward=function(){if(active){advance();return}originalForward()};
  backward=function(){
   if(active){retreat();return}
   if(seen&&state===3&&!entryBusy&&!document.body.classList.contains('assignment-active')&&!document.body.classList.contains('thank-you')){
    cancelRoadmap();state=2;renderPresentation();stage.classList.add('kore-unified');open(11);return;
   }
   originalBackward();
  };
 }else{
  open(1);
  document.getElementById('architecturePreviewNext')?.addEventListener('click',advance);
  document.getElementById('architecturePreviewPrev')?.addEventListener('click',retreat);
  document.getElementById('architecturePreviewRestart')?.addEventListener('click',()=>open(1));
  addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();advance()}if(e.key==='ArrowLeft'){e.preventDefault();retreat()}});
 }
 addEventListener('resize',size,{passive:true});
 window.OneTechArchitecture={open,advance,retreat,close,state:()=>({active,step,total:11,seen})};
})();
