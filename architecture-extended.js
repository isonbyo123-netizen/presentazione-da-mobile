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
 root.innerHTML='<div id="architectureExtended"><header class="ax-header"><span id="axChapter"></span><span id="architectureProgress" aria-label="Architecture step"></span><h1 id="axTitle"></h1><p id="axCaption"></p></header><div id="axContent"></div><footer class="ax-footer"><div id="axChapters"></div><span id="axSceneProgress"></span></footer></div>';
 document.body.appendChild(root);
 let step=1,active=false,seen=false,hoverGroup=null,lastScene=-1;
 const renderPresentation=typeof window.render==='function'?window.render:null;const hasDeck=typeof startRoadmap==='function'&&typeof forward==='function';
 function size(){root.style.setProperty('--architecture-scale',String(Math.min(innerWidth/1440,innerHeight/900)))}
 const line=(d,n=1)=>'<path class="ax-link" data-reveal="'+n+'" d="'+d+'"/>';
 const circle=(x,y,r,cls='')=>'<circle class="'+cls+'" cx="'+x+'" cy="'+y+'" r="'+r+'"/>';
 const label=(x,y,t,size=32)=>'<text x="'+x+'" y="'+y+'" font-size="'+size+'" text-anchor="middle">'+t+'</text>';
 function composition(type){
  let p=[],g='';
  if(type==='journey') {p=[[30,130],[480,40],[930,160]];g=line('M190 110C330-40 435-30 620 55',2)+line('M690 85C850 100 930 125 1050 220',3);}
  if(type==='signals'){p=[[50,30],[50,190],[50,350]];g=circle(890,215,130)+circle(890,215,165,'ax-orbit')+line('M375 72Q640 65 760 178',1)+line('M375 233H754',2)+line('M375 393Q640 390 760 255',3)+label(890,220,'SIGNALS',38)+label(890,267,'Public sources',25);}
  if(type==='filter'){p=[[45,50],[45,210],[870,145]];g='<path class="ax-shield" d="M620 28 765 88v135c0 110-105 175-145 188-40-13-145-78-145-188V88Z"/>'+line('M365 95H475',1)+line('M365 252H475',2)+line('M767 224H845',3)+label(620,217,'SECURE',36)+label(620,259,'INTAKE',36);}
  if(type==='control'){p=[[40,120],[820,10],[820,300]];g=circle(615,205,128)+circle(615,205,152,'ax-orbit')+label(615,188,'WORKFLOW',32)+label(615,231,'Step Functions',26)+line('M355 170H480',1)+line('M745 177Q805 172 821 70',2)+line('M745 245Q800 250 821 350',3);}
  if(type==='gateways'){p=[[60,280],[860,280]];g=circle(620,145,108)+label(620,142,'AI',68)+line('M520 185Q350 250 190 284',1)+line('M720 185Q890 250 1020 284',2);}
  if(type==='orbit'){p=[[10,45],[880,45],[10,295],[880,295]];g=circle(620,220,130)+circle(620,220,155,'ax-orbit')+label(620,220,'16',104)+label(620,265,'AI AGENTS',27)+Array.from({length:16},(_,i)=>{const a=i*Math.PI/8;return circle(620+185*Math.cos(a),220+185*Math.sin(a),7,'ax-agent-dot')}).join('')+line('M335 98 472 161',1)+line('M763 161 868 98',2)+line('M335 343 472 280',3)+line('M763 280 868 343',4);}
  if(type==='document'||type==='letter'){p=[[40,0],[40,115],[40,230],[40,345]];g='<rect class="ax-paper" x="660" y="16" width="420" height="416" rx="22"/>'+label(870,74,type==='document'?'PROJECT SIGNAL':'DRAFT',30)+[1,2,3,4].map((n)=>line('M715 '+(112+n*53)+'H'+(n===4?930:1025),n)).join('')+line('M360 218H632',3);}
  if(type==='network'){p=[[10,30],[875,30],[10,325],[875,325]];g=circle(620,220,94)+label(620,215,'PROJECT',29)+circle(620,220,190,'ax-faint')+line('M355 92 535 170',1)+line('M705 170 862 92',2)+line('M355 380 535 275',3)+line('M705 275 862 380',4)+circle(420,220,14)+circle(820,220,14)+line('M437 220H518',3)+line('M722 220H803',4);}
  if(type==='gauge'){p=[[40,0],[40,115],[40,230],[40,345]];g='<path class="ax-gauge-track" d="M630 282A220 220 0 0 1 1070 282"/><path class="ax-gauge-progress" data-reveal="3" d="M630 282A220 220 0 0 1 1070 282"/>'+label(850,264,'0–100',82)+label(850,322,'OPPORTUNITY POTENTIAL',24)+line('M815 380H885',4);}
  if(type==='handoff'){p=[[90,285],[840,285]];g=circle(252,137,111)+circle(990,137,111)+line('M380 137H862',2)+label(252,157,'AI',70)+label(990,148,'HUMAN',37)+label(620,107,'APPROVAL',27);}
  if(type==='evidence'){p=[[70,25],[70,245],[880,150]];g='<path class="ax-paper" d="M455 44H700L770 114V385H455Z"/>'+line('M500 135H705',1)+line('M500 190H705',1)+line('M500 245H655',2)+line('M385 82 455 135',1)+line('M385 300 455 245',2)+line('M770 220H860',3)+label(610,336,'EVIDENCE',31);}
  if(type==='storage'){p=[[520,20],[520,173],[520,326]];g=[1,2,3].map(n=>'<g data-reveal="'+n+'" class="ax-layer"><ellipse cx="240" cy="'+(n*112-57)+'" rx="139" ry="40"/><path d="M101 '+(n*112-57)+'v48c0 55 278 55 278 0v-48"/>'+line('M389 '+(n*112-34)+'H498',n)+'</g>').join('');}
  if(type==='search'){p=[[35,260],[845,260]];g='<path class="ax-map" d="M110 68 235 27 360 75 485 35V208L360 250 235 201 110 238ZM235 27V201M360 75V250"/>'+circle(286,133,46)+line('M320 168 363 211',1)+'<path class="ax-map" d="M785 67 910 28 1035 75 1160 36V208L1035 250 910 202 785 238ZM910 28V202M1035 75V250"/>'+circle(971,135,42)+circle(971,135,12)+line('M971 177V213',2);}
  if(type==='crm'){p=[[25,0],[25,150],[25,300]];g=line('M360 50Q600 55 753 135',1)+line('M360 205H752',2)+line('M360 350Q600 350 753 275',3)+'<path class="ax-cloud" d="M813 135c-30-88 74-121 117-68 61-62 164-27 160 52 105 30 93 181-6 181H814c-110 0-102-148-1-165Z"/>'+label(938,220,'Salesforce',46);}
  if(type==='relay'){p=[[60,45],[490,200],[915,45]];g=line('M290 175Q390 320 550 287',2)+line('M720 285Q860 315 990 175',3);}
  if(type==='security'){p=[[25,45],[880,45],[875,300]];g='<path class="ax-shield" d="M600 20 750 80v140c0 110-105 175-150 190-45-15-150-80-150-190V80Z"/>'+label(600,217,'EU',84)+label(600,266,'SECURE CLOUD',25)+line('M350 100 449 142',1)+line('M751 142 861 100',2)+line('M726 306 861 355',3);}
  if(type==='finale'){p=[[20,175],[495,65],[955,175]];g=circle(615,205,192,'ax-faint')+line('M325 221 485 131',2)+line('M753 131 940 221',3);}
  return {positions:p,svg:'<svg class="ax-diagram" viewBox="0 0 1248 460" aria-hidden="true">'+g+'</svg>'};
 }
 function render(){
  const phase=steps[step-1],s=scenes[phase.scene],type=layouts[phase.scene];root.dataset.step=String(step);root.dataset.scene=String(phase.scene+1);
  document.getElementById('axChapter').textContent='ARCHITECTURE / '+s[0].toUpperCase();document.getElementById('axTitle').textContent=s[1];document.getElementById('axCaption').textContent=s[2];
  document.getElementById('architectureProgress').textContent=String(step).padStart(2,'0')+' / '+TOTAL;document.getElementById('axSceneProgress').textContent='SCENE '+String(phase.scene+1).padStart(2,'0')+' / '+scenes.length;
  const holder=document.getElementById('axContent');
  if(lastScene!==phase.scene){
   const art=composition(type);holder.dataset.layout=type;
   holder.innerHTML=art.svg+s[3].map((c,i)=>'<article class="ax-node" data-reveal="'+(i+1)+'" style="--x:'+art.positions[i][0]+'px;--y:'+art.positions[i][1]+'px"><div class="ax-icon">'+icon(c[0])+'</div><div><h2>'+c[1]+'</h2><p>'+c[2]+'</p></div></article>').join('');lastScene=phase.scene;holder.classList.remove("ax-enter");void holder.offsetWidth;holder.classList.add("ax-enter");
  }
  holder.querySelectorAll('[data-reveal]').forEach(e=>{e.classList.toggle('shown',Number(e.dataset.reveal)<=phase.reveal);e.classList.toggle('active',Number(e.dataset.reveal)===phase.reveal)});
  document.getElementById('axChapters').innerHTML=scenes.map((_,i)=>'<span class="'+(i===phase.scene?'current':i<phase.scene?'past':'')+'"></span>').join('');size();
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
