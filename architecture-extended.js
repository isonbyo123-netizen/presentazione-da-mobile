(function(){
const icons={
 sources:'<circle cx="48" cy="48" r="32"/><path d="M16 48h64M48 16c-22 18-22 46 0 64M48 16c22 18 22 46 0 64M22 30h52M22 66h52"/>',
 shield:'<path d="M48 12 78 24v25c0 19-18 32-30 37-12-5-30-18-30-37V24Z"/><path d="m32 48 11 11 23-26"/>',
 brain:'<path d="M45 25c-8-16-31-7-27 9-17 8-12 29 1 32-3 20 19 26 26 11V25ZM51 25c8-16 31-7 27 9 17 8 12 29-1 32 3 20-19 26-26 11V25Z"/><path d="M20 34c10 0 12 7 12 12M19 66c12-3 16-11 14-18M76 34c-10 0-12 7-12 12M77 66c-12-3-16-11-14-18"/>',
 check:'<circle cx="48" cy="48" r="34"/><path d="m29 48 13 13 26-28"/>',
 crm:'<path d="M24 39a18 18 0 0 1 31-16 19 19 0 0 1 29 21c16 15 5 34-9 34H24C2 78 1 44 24 39Z"/><path d="M34 56h28m-10-10 10 10-10 10"/>',
 scout:'<circle cx="39" cy="39" r="23"/><path d="m56 56 24 24M28 39h22M39 28v22"/>',
 people:'<circle cx="48" cy="27" r="12"/><circle cx="20" cy="40" r="9"/><circle cx="76" cy="40" r="9"/><path d="M27 80V64a21 21 0 0 1 42 0v16M7 78V66a13 13 0 0 1 16-13M89 78V66a13 13 0 0 0-16-13"/>',
 score:'<path d="M16 80V52h14v28M41 80V34h14v46M66 80V16h14v64"/>',
 draft:'<path d="M18 17h48v19M18 17v64h47V63M40 63l4-16 30-30 12 12-30 30Z"/>',
 data:'<ellipse cx="48" cy="22" rx="31" ry="12"/><path d="M17 22v50c0 16 62 16 62 0V22M17 47c0 16 62 16 62 0"/>'
};
const icon=n=>'<svg viewBox="0 0 96 96" aria-hidden="true">'+icons[n]+'</svg>';

 const scenes=[["Overview","From signals to opportunities.","A controlled path from information to action.",[["sources","Signals","Projects and markets"],["brain","AI engine","16 specialized agents"],["crm","Opportunities","Ready for the team"]]],["Sources","Start with the right signals.","Public sources reveal projects, companies and markets.",[["draft","Projects","Tenders and investments"],["sources","Markets","News and industry data"],["people","Companies","People and relationships"]]],["Intake","Protect data before AI.","Only approved sources enter the platform.",[["check","Approve","Allow-listed connectors"],["shield","Inspect","Quarantine and checks"],["shield","Redact","Remove personal data"]]],["Orchestration","Code controls the workflow.","AWS Step Functions manages every step.",[["draft","Sequence","Choose the next task"],["check","Control","Retries, audit and budgets"],["people","Escalate","Human review when uncertain"]]],["Gateways","Give AI controlled access.","Models and tools work through separate gateways.",[["brain","Model gateway","Amazon Bedrock"],["sources","Tool gateway","Search, maps and connectors"]]],["AI agents","16 agents. Four missions.","Each agent has one specific job.",[["scout","Discover","4 scouting agents"],["people","Connect","4 stakeholder agents"],["score","Qualify","4 scoring agents"],["draft","Prepare","4 outreach agents"]]],["Scouting","Turn documents into signals.","Four agents find and structure project opportunities.",[["check","Classify","Identify useful documents"],["draft","Extract","Capture key facts"],["data","Reconcile","Merge duplicate signals"],["scout","Investigate","Check original sources"]]],["Stakeholders","Find the people behind projects.","Map companies, roles and existing relationships.",[["people","Map companies","Build the supply chain"],["scout","Find roles","Locate decision makers"],["check","Normalize","Align names and roles"],["people","Verify links","Check relationships"]]],["Qualification","Rank the opportunity.","Assess context before assigning a score.",[["sources","Sector","Industry and trends"],["scout","Needs","Demand and context"],["score","Potential","Score from 0 to 100"],["check","Quality","Consistency checks"]]],["Outreach","Prepare the next conversation.","AI proposes content and timing.",[["draft","Plan","Suggest the next step"],["draft","Write","Email and LinkedIn drafts"],["check","Verify","Check claims and content"],["crm","Sequence","Timing and channels"]]],["Boundaries","AI proposes. People decide.","Agents never send messages or change the workflow.",[["brain","AI can","Read, analyse and draft"],["people","People approve","Review and authorize action"]]],["Validation","Make every result explainable.","Quality, sources and human judgement.",[["check","Check","Rules, numbers and logic"],["draft","Cite","Evidence from original sources"],["people","Review","Uncertain cases and drafts"]]],["Platform data","Keep a trace of every step.","A shared foundation for data, evidence and audit.",[["data","Structured data","Aurora PostgreSQL"],["draft","Documents","Amazon S3"],["check","Event history","Immutable audit trail"]]],["Search","Connect meaning and location.","Find relevant information across the platform.",[["scout","Semantic search","pgvector"],["sources","Geographic context","PostGIS"]]],["CRM","Send qualified opportunities to Salesforce.","Give the commercial team the context to act.",[["people","Project + people","Company and decision makers"],["score","Score + evidence","Potential and rationale"],["crm","Next action","Content and contact plan"]]],["Commercial team","People make the final move.","Review the proposal before contacting anyone.",[["draft","Review","Project and stakeholders"],["check","Approve","Email and LinkedIn drafts"],["people","Contact","Human sending"]]],["Governance","Secure by design.","Privacy, restricted access and traceability.",[["sources","EU cloud","AWS data region"],["shield","Protect","Private network and encryption"],["check","Control","Least privilege and audit"]]],["Conclusion","AI recommends. Code controls. People decide.","One platform. A controlled path to commercial action.",[["brain","AI","Discover and prepare"],["check","Code","Orchestrate and validate"],["people","People","Approve and act"]]]];
 const steps=scenes.flatMap((s,i)=>s[3].map((_,j)=>({scene:i,reveal:j+1})));
 const TOTAL=steps.length;
 const root=document.createElement('section');root.id='architectureInteractive';root.setAttribute('aria-label','Extended platform architecture');root.setAttribute('aria-hidden','true');root.inert=true;
 root.innerHTML='<div id="architectureExtended"><header class="ax-header"><span id="axChapter"></span><span id="architectureProgress" aria-label="Architecture step"></span><h1 id="axTitle"></h1><p id="axCaption"></p></header><div id="axContent"></div><footer class="ax-footer"><div id="axChapters"></div><span id="axSceneProgress"></span></footer></div>';
 document.body.appendChild(root);
 let step=1,active=false,seen=false,hoverGroup=null,lastScene=-1;
 const renderPresentation=typeof window.render==='function'?window.render:null;
 const hasDeck=typeof startRoadmap==='function'&&typeof forward==='function';
 function size(){root.style.setProperty('--architecture-scale',String(Math.min(innerWidth/1440,innerHeight/900)))}
 function render(){
  const phase=steps[step-1],s=scenes[phase.scene];root.dataset.step=String(step);root.dataset.scene=String(phase.scene+1);
  document.getElementById('axChapter').textContent='ARCHITECTURE / '+s[0].toUpperCase();
  document.getElementById('axTitle').textContent=s[1];document.getElementById('axCaption').textContent=s[2];
  document.getElementById('architectureProgress').textContent=String(step).padStart(2,'0')+' / '+TOTAL;
  document.getElementById('axSceneProgress').textContent='SCENE '+String(phase.scene+1).padStart(2,'0')+' / '+scenes.length;
  const holder=document.getElementById('axContent');
  if(lastScene!==phase.scene){
   holder.innerHTML='<div class="ax-cards ax-count-'+s[3].length+'">'+s[3].map((c,i)=>'<article class="ax-card" data-reveal="'+(i+1)+'"><span class="ax-card-number">'+String(i+1).padStart(2,'0')+'</span><div class="ax-icon">'+icon(c[0])+'</div><h2>'+c[1]+'</h2><p>'+c[2]+'</p></article>').join('')+'</div>';
   lastScene=phase.scene;
  }
  holder.querySelectorAll('[data-reveal]').forEach(e=>{e.classList.toggle('shown',Number(e.dataset.reveal)<=phase.reveal);e.classList.toggle('active',Number(e.dataset.reveal)===phase.reveal)});
  document.getElementById('axChapters').innerHTML=scenes.map((_,i)=>'<span class="'+(i===phase.scene?'current':i<phase.scene?'past':'')+'"></span>').join('');
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
  if(step<TOTAL){step++;render()}else if(hasDeck){seen=true;close();originalRoadmap()}
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
    cancelRoadmap();state=2;renderPresentation();stage.classList.add('kore-unified');open(TOTAL);return;
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
 window.OneTechArchitecture={open,advance,retreat,close,state:()=>({active,step,total:TOTAL,seen})};
})();
