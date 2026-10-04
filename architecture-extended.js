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

 const layouts=['journey','signals','filter','control','gateways','orbit','document','network','gauge','letter','handoff','evidence','storage','search','crm','relay','security','finale'];
 const steps=scenes.flatMap((s,i)=>s[3].map((_,j)=>({scene:i,reveal:j+1})));const TOTAL=steps.length;
 const root=document.createElement('section');root.id='architectureInteractive';root.setAttribute('aria-label','Extended platform architecture');root.setAttribute('aria-hidden','true');root.inert=true;
 root.innerHTML='<div id="architectureExtended"><header class="ax-header"><h1 id="axTitle"></h1></header><div id="axContent"></div></div>';
 document.body.appendChild(root);

 let step=1,active=false,seen=false,hoverGroup=null,lastScene=-1;
 const renderPresentation=typeof window.render==='function'?window.render:null;const hasDeck=typeof startRoadmap==='function'&&typeof forward==='function';
 function size(){root.style.setProperty('--architecture-scale',String(Math.min(innerWidth/1440,innerHeight/900)))}

 const tones=['#6f4dff','#00bfc2','#308bea','#23a777'];
 const glyph=(name,x,y,w=96)=>'<svg x="'+(x-w/2)+'" y="'+(y-w/2)+'" width="'+w+'" height="'+w+'" viewBox="0 0 96 96" class="ax-hero-glyph">'+icons[name]+'</svg>';
 const defs='<defs><filter id="axFog" x="-30%" y="-50%" width="160%" height="200%"><feGaussianBlur stdDeviation="7"/></filter><linearGradient id="axGlass" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#fff"/><stop offset=".5" stop-color="#f5f0ff"/><stop offset="1" stop-color="#dcefff"/></linearGradient><linearGradient id="axInk" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#976aff"/><stop offset="1" stop-color="#5b2bd7"/></linearGradient></defs>';
 function stream(x,y,ex,ey,n){
  const color=tones[(n-1)%4],mx=(x+ex)/2,my=(y+ey)/2;
  const d='M'+x+' '+y+' C'+mx+' '+(y-70)+' '+mx+' '+(ey+70)+' '+ex+' '+ey;
  return '<g class="ax-flow" data-reveal="'+n+'" style="color:'+color+'"><path class="ax-flow-aura" d="'+d+'"/>'+[-8,0,8].map((off,i)=>'<path class="ax-flow-strand strand-'+i+'" d="M'+x+' '+y+' C'+mx+' '+(y-70+off*3)+' '+mx+' '+(ey+70+off*3)+' '+ex+' '+ey+'"/>').join('')+'<path class="ax-flow-light" d="'+d+'"/><g class="ax-traveller"><rect x="-7" y="-9" width="14" height="18" rx="3"/><path d="M-3-3H3M-3 2H3"/><animateMotion path="'+d+'" dur="4.8s" repeatCount="indefinite"/></g><circle class="ax-packet" r="3.5"><animateMotion path="'+d+'" dur="4.8s" begin="-2.4s" repeatCount="indefinite"/></circle></g>';
 }
 function orbit(cx,cy,rx,ry,n=1){
  const d='M'+(cx-rx)+' '+cy+' a'+rx+' '+ry+' 0 1 0 '+(rx*2)+' 0 a'+rx+' '+ry+' 0 1 0 -'+(rx*2)+' 0';
  return '<g class="ax-orbit-system" data-reveal="'+n+'"><path class="ax-orbit-track" d="'+d+'"/><path class="ax-orbit-comet" d="'+d+'"/><g class="ax-orbit-token"><rect x="-9" y="-11" width="18" height="22" rx="4"/><path d="M-4-3H4M-4 3H4"/><animateMotion path="'+d+'" dur="16s" repeatCount="indefinite"/></g></g>';
 }
 function hero(type){
  let g='';
  if(['signals','search'].includes(type)){g='<g class="ax-world"><circle cx="624" cy="215" r="112"/><ellipse cx="624" cy="215" rx="49" ry="112"/><path d="M516 187Q624 161 732 187M516 244Q624 270 732 244M512 215H736"/><path class="ax-world-land" d="m550 151 37-16 23 19-17 22 12 29-26 20-20-18-23-13Zm102 72 37-23 31 19-9 33-24 15-14 34-17-22Z"/></g>';}
  else if(['filter','security'].includes(type)){g='<path class="ax-solid-hero" d="M624 79 735 125v104c0 88-80 147-111 159-31-12-111-71-111-159V125Z"/><path class="ax-white-mark" d="m580 217 32 32 63-72"/>'+orbit(624,223,170,168);}
  else if(type==='control'){g='<rect class="ax-solid-hero" x="528" y="119" width="192" height="192" rx="42"/>'+Array.from({length:6},(_,i)=>'<path class="ax-chip-wire" d="M'+(550+i*29)+' 100V120M'+(550+i*29)+' 312V332M509 '+(141+i*29)+'H529M720 '+(141+i*29)+'H740"/>').join('')+'<g class="ax-control-code"><path d="m596 184-30 31 30 31m57-62 30 31-30 31M638 176l-26 78"/></g>';}
  else if(type==='orbit'){g='<circle class="ax-solid-hero" cx="624" cy="215" r="100"/><text class="ax-number" x="624" y="239">16</text>'+Array.from({length:16},(_,i)=>{const angle=i*Math.PI/8,x=624+166*Math.cos(angle),y=215+166*Math.sin(angle);return '<g class="ax-agent" data-reveal="'+(Math.floor(i/4)+1)+'" style="color:'+tones[Math.floor(i/4)]+'"><circle cx="'+x+'" cy="'+y+'" r="9"/></g>'}).join('');}
  else if(['document','evidence'].includes(type)){g='<rect class="ax-sheet-back" x="546" y="100" width="190" height="245" rx="18" transform="rotate(10 641 222)"/><rect class="ax-sheet" x="519" y="85" width="190" height="245" rx="18"/><path class="ax-paper-fold" d="M660 86v48h48"/><path class="ax-paper-lines" d="M552 155H664M552 187H664M552 219H638M552 251H630"/><path class="ax-scan-beam" d="M502 142H730"/>'+(type==='evidence'?'<g class="ax-seal" data-reveal="3"><circle cx="687" cy="302" r="47"/><path d="m667 302 15 15 27-33"/></g>':'');}
  else if(type==='network'){g='<g class="ax-network-person">'+glyph('people',624,200,145)+'</g>'+[[-85,-95],[102,-55],[-105,90],[85,102]].map(([x,y],i)=>'<g class="ax-agent" data-reveal="'+(i+1)+'" style="color:'+tones[i]+'"><path d="M624 215L'+(624+x)+' '+(215+y)+'"/><circle cx="'+(624+x)+'" cy="'+(215+y)+'" r="19"/></g>').join('');}
  else if(type==='gauge'){g='<circle class="ax-gauge-track" cx="624" cy="215" r="115"/><circle class="ax-gauge-progress" cx="624" cy="215" r="115" data-reveal="3"/><text class="ax-score" x="624" y="235">0–100</text><path class="ax-score-ticks" d="M624 80V94M759 215H745M624 350V336M489 215H503"/>';}
  else if(type==='letter'){g='<g class="ax-mail"><path class="ax-envelope" d="M505 157 624 89 743 157v161H505Z"/><g class="ax-letter" data-reveal="2"><rect class="ax-sheet" x="538" y="94" width="172" height="187" rx="12"/><path class="ax-paper-lines" d="M564 133H682M564 162H682M564 191H653"/></g><path class="ax-envelope-front" d="m505 157 119 94 119-94v161H505Z"/><path class="ax-envelope-fold" d="m505 318 119-100 119 100"/></g>';}
  else if(type==='storage'){g=[1,2,3].map(n=>'<g class="ax-storage-tier" data-reveal="'+n+'"><path class="ax-storage-body" d="M533 '+(n*76+36)+'v50c0 48 182 48 182 0v-50Z"/><ellipse class="ax-storage-lid" cx="624" cy="'+(n*76+36)+'" rx="91" ry="24"/><circle class="ax-storage-led" cx="683" cy="'+(n*76+66)+'" r="4"/></g>').join('');}
  else if(type==='crm'){g='<circle class="ax-cloud-disc" cx="624" cy="215" r="117"/><path class="ax-cloud-mark" d="M564 207c-11-43 39-66 68-38 34-26 73-4 69 33 45 11 41 65-3 71H563c-41-6-39-60 1-66Z"/><text class="ax-salesforce" x="624" y="240">Salesforce</text>';}
  else if(type==='relay'){g='<g class="ax-human">'+glyph('people',624,209,175)+'</g><g class="ax-seal" data-reveal="2"><circle cx="704" cy="292" r="40"/><path d="m687 291 13 13 23-28"/></g>';}
  else if(type==='handoff'){g='<path class="ax-bridge" d="M360 215C510 75 737 75 888 215"/><g class="ax-seal" data-reveal="2"><circle cx="624" cy="130" r="42"/><path d="m605 130 14 14 26-31"/></g>';}
  else if(type==='gateways'){g='<circle class="ax-solid-hero" cx="624" cy="215" r="62"/>'+glyph('brain',624,215,72);}
  else if(type==='finale'){g='<image href="one-tech-o.svg" x="568" y="159" width="112" height="112"/>';}
  return g;
 }
 function composition(type){
  const fours=['orbit','document','network','gauge','letter'];
  let p=fours.includes(type)?[[155,70],[1093,70],[155,355],[1093,355]]:[[165,75],[1083,75],[624,414]];
  if(['filter','security'].includes(type))p=[[165,75],[1083,75],[165,355]];
  if(type==='journey')p=[[215,205],[624,205],[1033,205]];
  if(['gateways','handoff','search'].includes(type))p=[[280,215],[968,215]];
  if(['control','evidence','crm'].includes(type))p=[[155,70],[155,350],[1093,210]];
  if(type==='storage')p=[[185,80],[1063,220],[185,360]];
  if(type==='relay')p=[[195,315],[624,65],[1053,315]];
  if(type==='finale')p=[[195,110],[1053,110],[624,410]];
  const core=!['journey','gateways','handoff'].includes(type);
  let g=defs;
  if(core){g+='<ellipse class="ax-system-ring" cx="624" cy="215" rx="223" ry="193"/>'+orbit(624,215,201,178)+hero(type);}
  else g+=hero(type);
  p.forEach(([x,y],i)=>{
   if(type==='journey'){if(i)g+=stream(p[i-1][0]+82,p[i-1][1],x-82,y,i+1);}
   else if(['gateways','handoff'].includes(type))g+=stream(x<624?x+78:624+64,y,x<624?624-64:x-78,215,i+1);
   else if(type==='search')g+=stream(x<624?x+78:624+112,y,x<624?624-112:x-78,215,i+1);
   else g+=stream(x,y,624+(x<500?-110:x>750?110:0),215+(y>330?95:y<110?-65:0),i+1);
  });
  const coreHtml=core?'<div class="ax-core-halo" aria-hidden="true"><i class="ax-core-sheen"></i><i class="ax-core-orbit"></i></div>':'';
  return {positions:p,svg:coreHtml+'<svg class="ax-diagram" viewBox="0 0 1248 600" aria-hidden="true">'+g+'</svg>'};
 }
 function render(){
  const phase=steps[step-1],s=scenes[phase.scene],type=layouts[phase.scene];root.dataset.step=String(step);root.dataset.scene=String(phase.scene+1);
  document.getElementById('axTitle').textContent=s[1];root.dataset.layout=type;
  const holder=document.getElementById('axContent');
  if(lastScene!==phase.scene){
   const art=composition(type);holder.dataset.layout=type;
   holder.innerHTML=art.svg+s[3].map((c,i)=>'<article class="ax-node" data-reveal="'+(i+1)+'" style="--x:'+art.positions[i][0]+'px;--y:'+art.positions[i][1]+'px;--accent:'+tones[i%4]+';--drift:'+(-i*1.7)+'s"><div class="ax-medallion"><i class="ax-ring"></i><i class="ax-satellite"></i><div class="ax-icon">'+icon(c[0])+'</div></div><div class="ax-caption"><h2>'+c[1]+'</h2><p>'+c[2]+'</p></div></article>').join('');lastScene=phase.scene;holder.classList.remove("ax-enter");void holder.offsetWidth;holder.classList.add("ax-enter");
  }
  holder.querySelectorAll('[data-reveal]').forEach(e=>{e.classList.toggle('shown',Number(e.dataset.reveal)<=phase.reveal);e.classList.toggle('active',Number(e.dataset.reveal)===phase.reveal)});
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

