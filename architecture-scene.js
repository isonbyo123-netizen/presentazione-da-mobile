(function(){
 const groups=[
  {title:'Project scouting',ink:'#6650b4',line:'#c4b0ec',bg:'#f3edff',step:4,agents:[
   ['Classifier','Determines whether a document is useful'],
   ['Extractor','Extracts key information from documents'],
   ['Reconciler','Combines and deduplicates signals'],
   ['Investigator','Researches the underlying sources']]},
  {title:'Supply chain & stakeholders',ink:'#248f65',line:'#a9dec9',bg:'#ecfaf3',step:5,agents:[
   ['Company mapper','Maps companies and supply chains'],
   ['Role finder','Finds decision makers'],
   ['Normalizer','Standardizes names and roles'],
   ['Relationship verifier','Checks existing relationships']]},
  {title:'Qualification & scoring',ink:'#aa7b13',line:'#ecd184',bg:'#fff8df',step:6,agents:[
   ['Sector analyst','Assesses sectors and trends'],
   ['Needs evaluator','Estimates needs and context'],
   ['Opportunity scorer','Calculates opportunity potential, 0–100'],
   ['Quality verifier','Checks consistency and quality']]},
  {title:'Marketing & activation',ink:'#aa3ea4',line:'#e7aee2',bg:'#fff0fb',step:7,agents:[
   ['Plan builder','Suggests the next commercial step'],
   ['Copywriter','Drafts email and LinkedIn content'],
   ['Content verifier','Checks claims and content'],
   ['Activation planner','Proposes sequences, timing and channels']]}
 ];
 const labels=[
  'Architecture overview',
  'Public sources supply the project, company and market signals',
  'Approved connectors feed a secure ingestion pipeline',
  'Deterministic orchestration controls model and tool access',
  'Four scouting agents find and structure project opportunities',
  'Four stakeholder agents map companies, roles and relationships',
  'Four qualification agents assess needs, quality and potential',
  'Four marketing agents prepare the next commercial action',
  'Validation, human review and citations make each result explainable',
  'The platform stores data, documents, events and search indexes',
  'Qualified opportunities reach the CRM and the commercial team',
  'AI recommends. Code controls. People decide.'
 ];
 const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
 const groupHTML=groups.map((g,i)=>'<article class="arch-agent-group arch-reveal" data-reveal="'+g.step+'" data-group="'+i+'" tabindex="0" aria-label="'+esc(g.title)+' agents" style="--group-ink:'+g.ink+';--group-line:'+g.line+';--group-bg:'+g.bg+'"><h3>'+esc(g.title)+'</h3><ul>'+g.agents.map((a,j)=>'<li style="--agent-index:'+j+'">'+esc(a[0])+'</li>').join('')+'</ul></article>').join('');
 const root=document.createElement('section');root.id='architectureInteractive';root.setAttribute('aria-label','Platform architecture');root.setAttribute('aria-hidden','true');root.inert=true;
 root.innerHTML=`<div id="architectureCanvas">
 <header class="arch-header"><div><h1>Platform architecture</h1><p id="architectureCaption"></p></div><div class="arch-progress" id="architectureProgress" aria-label="Architecture step"></div></header>
 <svg class="arch-lines" viewBox="0 0 1440 900" aria-hidden="true"><defs><marker id="archArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#9f84ed" style="stroke:none;opacity:1;stroke-dasharray:none"/></marker></defs>
 <path data-line="2" d="M244 410H264" marker-end="url(#archArrow)"/>
 <path data-line="3" d="M454 410H474" marker-end="url(#archArrow)"/>
 <path data-line="3" d="M792 260V268H627V272M792 268H957V272" marker-end="url(#archArrow)"/>
 <path data-line="4" d="M627 358V369H792V374M957 358V369H792" marker-end="url(#archArrow)"/>
 <path data-line="8" d="M1110 410H1130" marker-end="url(#archArrow)"/>
 <path data-line="9" d="M154 654V676H210V686M792 654V667H570V686" marker-end="url(#archArrow)"/>
 <path data-line="10" d="M1253 654V667H957V686M806 747H826M1091 747H1111" marker-end="url(#archArrow)"/>
 </svg>
 <div class="arch-grid">
 <article class="arch-panel arch-source arch-reveal" data-reveal="1" style="--arch-accent:#239cdd"><h2><span class="arch-number">1</span>Data sources</h2><p class="arch-description">Public sources, media and platforms</p><ul><li>Tenders</li><li>Industrial investments</li><li>News and press</li><li>Databases and platforms</li><li>Companies and people</li><li>Competitors and markets</li><li>Other signals</li></ul></article>
 <article class="arch-panel arch-intake arch-reveal" data-reveal="2" style="--arch-accent:#ed882d"><h2><span class="arch-number">2</span>Secure intake</h2><p class="arch-description">Controlled ingestion and quarantine</p><ol>
 <li><strong>Approved connectors</strong><span>Allow-list of sources</span></li><li><strong>Quarantine</strong><span>Antivirus, format checks and sandbox</span></li>
 <li><strong>Classification</strong><span>Projects, competitors, markets and people</span></li><li><strong>PII redaction</strong><span>Redaction of personal data</span></li><li><strong>Encrypted storage</strong><span>Data at rest in AWS</span></li>
 </ol></article>
 <div class="arch-core">
 <section class="arch-orchestrator arch-reveal" data-reveal="3"><h2><span class="arch-number">3</span>AWS Step Functions</h2><p>Deterministic orchestrator: next steps, retries, audit, budgets and escalation to human review</p></section>
 <div class="arch-gateways"><section class="arch-gateway arch-reveal" data-reveal="3"><h3>Model gateway</h3><p>Amazon Bedrock<br>Controlled access, guardrails and costs</p></section><section class="arch-gateway arch-reveal" data-reveal="3"><h3>Tool gateway</h3><p>Connectors for search, maps, company data, tenders and media</p></section></div>
 <section class="arch-agents arch-reveal" data-reveal="4"><h2><span class="arch-number">4</span>16 specialized AI agents</h2><p>Each agent has one task. The orchestrator chooses their order and controls execution.</p><div class="arch-groups">${groupHTML}</div></section>
 <div class="arch-rights arch-reveal" data-reveal="7"><div><strong>Agents can</strong>Read, analyse, enrich information and propose content or actions</div><div><strong>Agents cannot</strong>Write to databases, send messages, decide steps or change workflows</div></div>
 </div>
 <div style="position:relative"><article class="arch-detail" id="architectureAgentDetail" hidden></article>
 <article class="arch-panel arch-validation arch-reveal" data-reveal="8" style="--arch-accent:#e5ac1b"><h2><span class="arch-number">5</span>Validation & scoring</h2>
 <section><h3>Automatic checks</h3><p>Deterministic rules, structure, numeric checks, logic and consistency</p></section>
 <section><h3>Human review</h3><p>Uncertain cases, new contacts, drafts and content</p></section>
 <section><h3>Evidence & citations</h3><p>Traceability back to the original sources</p></section>
 <section><h3>Score 0–100</h3><p>Calculation of opportunity potential</p></section>
 </article></div>
 </div>
 <div class="arch-bottom">
 <article class="arch-panel arch-reveal" data-reveal="9" style="--arch-accent:#2bbf84"><h2><span class="arch-number">6</span>Platform data</h2><div class="arch-stores">
 <div><strong>Aurora PostgreSQL</strong><span>Companies, projects, opportunities, signals, scores and audit history</span></div>
 <div><strong>Amazon S3</strong><span>Documents, evidence, articles, citations, process logs and unstructured data</span></div>
 <div><strong>Immutable event log</strong><span>Traceability, audit and reproducibility</span></div>
 <div><strong>pgvector / PostGIS</strong><span>Semantic search, geographical data, correlations and analysis</span></div>
 </div></article>
 <article class="arch-panel arch-crm arch-reveal" data-reveal="10" style="--arch-accent:#249ddc"><h2><span class="arch-number">7</span>CRM integration</h2><p>Salesforce<br>Qualified scouting opportunities, companies, decision makers, scores and next actions</p></article>
 <article class="arch-panel arch-team arch-reveal" data-reveal="10" style="--arch-accent:#2bbf84"><h2><span class="arch-number">8</span>Commercial team</h2><p>Project profiles and stakeholders<br>Email / LinkedIn drafts<br>Human approval and sending</p></article>
 </div>
 <div class="arch-governance arch-reveal" data-reveal="11"><strong>Security & governance</strong><span>AWS EU region</span><span>IAM least privilege</span><span>Private VPC</span><span>KMS encryption</span><span>CloudTrail audit</span><span>GDPR / privacy policies</span><span>Fail-safe: stop on uncertainty</span></div>
 <p class="arch-principle arch-reveal" data-reveal="11">AI recommends. Code controls. People decide.</p>
 </div>`;
 document.body.appendChild(root);
 let step=1,active=false,seen=false,lockedUntil=0,hoverGroup=null;
 const renderPresentation=typeof window.render==='function'?window.render:null;
 const hasDeck=typeof startRoadmap==='function'&&typeof forward==='function';
 function size(){root.style.setProperty('--architecture-scale',String(Math.min(innerWidth/1440,innerHeight/900)))}
 function detail(index){
  const pane=document.getElementById('architectureAgentDetail'),g=groups[index];
  if(!g){pane.hidden=true;return}
  pane.hidden=false;pane.innerHTML='<h2>'+esc(g.title)+'</h2><ol>'+g.agents.map(a=>'<li><strong>'+esc(a[0])+'</strong><span>'+esc(a[1])+'</span></li>').join('')+'</ol>';
 }
 function render(){
  root.dataset.step=String(step);document.getElementById('architectureCaption').textContent=labels[step];
  document.getElementById('architectureProgress').textContent=String(step).padStart(2,'0')+' / 11';
  root.querySelectorAll('[data-reveal]').forEach(el=>el.classList.toggle('shown',step>=Number(el.dataset.reveal)));
  root.querySelectorAll('[data-line]').forEach(el=>el.classList.toggle('shown',step>=Number(el.dataset.line)));
  root.querySelectorAll('[data-group]').forEach(el=>el.classList.toggle('active',step===Number(el.dataset.reveal)));
  detail(step>=4&&step<=7?step-4:null);size();
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
  if(performance.now()<lockedUntil)return;
  lockedUntil=performance.now()+350;
  if(step<11){step++;render()}else if(hasDeck){seen=true;close();originalRoadmap()}
 }
 function retreat(){
  if(performance.now()<lockedUntil)return;
  lockedUntil=performance.now()+350;
  if(step>1){step--;render()}else if(hasDeck){seen=false;close()}
 }
 root.querySelectorAll('[data-group]').forEach(el=>{
  const show=()=>{if(step>=8&&step>=Number(el.dataset.reveal)){hoverGroup=Number(el.dataset.group);detail(hoverGroup)}};
  el.addEventListener('mouseenter',show);el.addEventListener('focus',show);
  const hide=()=>{if(step>=8){hoverGroup=null;detail(null)}};
  el.addEventListener('mouseleave',hide);el.addEventListener('blur',hide);
 });
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