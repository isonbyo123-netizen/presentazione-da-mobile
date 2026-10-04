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
  else if(type==='gauge'){g='<circle class="ax-gauge-track" cx="624" cy="215" r="115"/><circle class="ax-gauge-progress" cx="624" cy="215" r="115" data-reveal="3"/><text class="ax-score" x="624" y="235">0 – 100</text><path class="ax-score-ticks" d="M624 80V94M759 215H745M624 350V336M489 215H503"/>';}
  else if(type==='letter'){g='<g class="ax-mail"><path class="ax-envelope" d="M505 157 624 89 743 157v161H505Z"/><g class="ax-letter" data-reveal="2"><rect class="ax-sheet" x="538" y="94" width="172" height="187" rx="12"/><path class="ax-paper-lines" d="M564 133H682M564 162H682M564 191H653"/></g><path class="ax-envelope-front" d="m505 157 119 94 119-94v161H505Z"/><path class="ax-envelope-fold" d="m505 318 119-100 119 100"/></g>';}
  else if(type==='storage'){g=[1,2,3].map(n=>'<g class="ax-storage-tier" data-reveal="'+n+'"><path class="ax-storage-body" d="M533 '+(n*76+36)+'v50c0 48 182 48 182 0v-50Z"/><ellipse class="ax-storage-lid" cx="624" cy="'+(n*76+36)+'" rx="91" ry="24"/><circle class="ax-storage-led" cx="683" cy="'+(n*76+66)+'" r="4"/></g>').join('');}
  else if(type==='crm'){g='<circle class="ax-cloud-disc" cx="624" cy="215" r="117"/><path class="ax-cloud-mark" transform="translate(-9.02 .134)" d="M564 207c-11-43 39-66 68-38 34-26 73-4 69 33 45 11 41 65-3 71H563c-41-6-39-60 1-66Z"/>';}
  else if(type==='relay'){g='<g class="ax-human">'+glyph('people',624,209,175)+'</g><g class="ax-seal" data-reveal="2"><circle cx="704" cy="292" r="40"/><path d="m687 291 13 13 23-28"/></g>';}
  else if(type==='handoff'){g='<path class="ax-bridge" d="M360 215C510 75 737 75 888 215"/><g class="ax-seal" data-reveal="2"><circle cx="624" cy="130" r="42"/><path d="m605 130 14 14 26-31"/></g>';}
  else if(type==='gateways'){g='<circle class="ax-solid-hero" cx="624" cy="215" r="62"/>'+glyph('brain',624,215,72);}
  else if(type==='finale'){g='<image href="one-tech-o.svg" x="568" y="159" width="112" height="112"/>';}
  return g;
 }

 const shown=(n,g,cls='')=>'<g class="ax-build '+cls+'" data-reveal="'+n+'">'+g+'</g>';
 const atHero=(type,x,y,scale=1)=>'<g transform="translate('+x+' '+y+') scale('+scale+') translate(-624 -215)">'+hero(type)+'</g>';
 function disc(x,y,r,ic,n,col=tones[n-1]){
  return shown(n,'<g class="ax-float-disc" style="color:'+col+'"><circle class="ax-disc-aura" cx="'+x+'" cy="'+y+'" r="'+(r+14)+'"/><circle class="ax-disc" cx="'+x+'" cy="'+y+'" r="'+r+'"/><circle class="ax-disc-ring" cx="'+x+'" cy="'+y+'" r="'+(r+7)+'"/><g class="ax-ink-glyph">'+glyph(ic,x,y,r*1.13)+'</g></g>');
 }
 function paper(x,y,w,n,col=tones[(n-1)%4]){
  return shown(n,'<g class="ax-data-paper" style="color:'+col+'"><rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+w*1.3+'" rx="14"/><path d="M'+(x+w*.2)+' '+(y+w*.3)+'H'+(x+w*.8)+'M'+(x+w*.2)+' '+(y+w*.52)+'H'+(x+w*.8)+'M'+(x+w*.2)+' '+(y+w*.74)+'H'+(x+w*.6)+'"/></g>');
 }
 function wave(d,n,col=tones[(n-1)%4]){
  return shown(n,'<g class="ax-free-flow" style="color:'+col+'"><path class="ax-flow-aura" d="'+d+'"/><path class="ax-flow-strand" d="'+d+'"/><path class="ax-flow-light" d="'+d+'"/><g class="ax-traveller"><rect x="-7" y="-9" width="14" height="18" rx="3"/><path d="M-3-3H3M-3 2H3"/><animateMotion path="'+d+'" dur="5s" repeatCount="indefinite"/></g></g>');
 }
 const house=(x,y,n)=>shown(n,'<g class="ax-company" style="color:'+tones[(n-1)%4]+'"><path d="M'+(x-55)+' '+(y+65)+'V'+(y-28)+'L'+x+' '+(y-65)+'L'+(x+55)+' '+(y-28)+'V'+(y+65)+'Z"/><path d="M'+(x-25)+' '+y+'H'+(x+25)+'M'+(x-25)+' '+(y+27)+'H'+(x+25)+'"/></g>');
 function composition(type){
  let g=defs;
  if(type==='journey'){
   g+=disc(225,185,85,'sources',1)+wave('M322 185C438 95 444 275 534 185',2)+disc(624,185,96,'brain',2)+wave('M732 185C842 95 855 275 928 185',3)+disc(1020,185,85,'crm',3);
  }else if(type==='signals'){
   g+=shown(1,atHero('signals',978,188,.92));
   [[210,95,'draft'],[435,275,'sources'],[640,95,'people']].forEach(([x,y,i],k)=>{g+=disc(x,y,55,i,k+1)+wave('M'+(x+62)+' '+y+'C'+(x+160)+' '+y+' 780 188 872 188',k+1)});
   g+=orbit(978,188,142,139);
  }else if(type==='filter'){
   g+=paper(75,135,68,1)+wave('M145 182H275',1)+disc(345,180,68,'check',1);
   g+=wave('M430 180H558',2)+shown(2,atHero('filter',645,174,.72));
   g+=wave('M744 180H864',3)+paper(905,90,130,3)+shown(3,'<path class="ax-redact-line" d="M932 165H1014M932 193H997"/>');
  }else if(type==='control'){
   g+=shown(1,atHero('control',310,205,.82))+wave('M400 205H605',1)+disc(688,205,73,'check',2);
   g+=wave('M688 121C688 42 447 42 396 124',2)+shown(2,'<path class="ax-return-arrow" d="m398 100-4 27 27-5"/>');
   g+=wave('M780 205C894 205 859 80 966 80',3)+disc(1040,85,56,'people',3)+shown(3,'<path class="ax-branch" d="M781 205H1110"/>');
  }else if(type==='gateways'){
   g+=shown(1,'<g class="ax-portal"><rect x="245" y="40" width="220" height="285" rx="110"/><rect x="264" y="59" width="182" height="247" rx="91"/></g><g class="ax-ink-glyph">'+glyph('brain',355,180,113)+'</g>');
   g+=shown(2,'<g class="ax-portal ax-tool-portal"><rect x="785" y="40" width="220" height="285" rx="110"/><rect x="804" y="59" width="182" height="247" rx="91"/></g><g class="ax-ink-glyph">'+glyph('sources',895,180,113)+'</g>')+wave('M477 180C553 115 707 245 773 180',2);
  }else if(type==='orbit'){
   g+=shown(1,atHero('orbit',624,185,.85))+orbit(624,185,173,173);
   [[320,90,'scout'],[930,90,'people'],[320,280,'score'],[930,280,'draft']].forEach(([x,y,ic],i)=>g+=disc(x,y,49,ic,i+1));
  }else if(type==='document'){
   g+=paper(116,62,145,1)+shown(1,'<path class="ax-scan-beam" d="M106 104H273"/>');
   g+=wave('M279 170H421',2)+paper(445,112,78,2)+paper(534,82,78,2);
   g+=wave('M624 160H730',3)+paper(756,91,116,3);
   g+=wave('M885 166H981',4)+disc(1050,170,63,'scout',4);
  }else if(type==='network'){
   g+=house(225,235,1)+house(610,235,1)+house(995,235,1)+wave('M291 248C370 287 455 287 544 248',1)+wave('M676 248C755 287 840 287 929 248',1);
   g+=disc(416,87,40,'people',2)+disc(802,87,40,'people',2)+wave('M260 170Q292 87 370 87',2)+wave('M644 170Q676 87 754 87',2);
   g+=shown(3,'<path class="ax-dotted-link" d="M459 87H756"/>')+shown(4,'<path class="ax-check-link" d="M318 335H902M610 368l14 14 27-32"/>');
  }else if(type==='gauge'){
   g+=shown(1,'<g class="ax-sector-bars"><path d="M221 274V194M251 274V162M281 274V129"/></g>');
   g+=shown(2,'<g class="ax-need-radar"><circle cx="998" cy="205" r="63"/><circle cx="998" cy="205" r="36"/><path d="M921 205H1075M998 128V282"/></g>');
   g+=shown(1,atHero('gauge',624,190,1.02));
   g+=shown(4,'<g class="ax-seal"><circle cx="751" cy="278" r="32"/><path d="m736 278 11 11 20-25"/></g>');
  }else if(type==='letter'){
   g+=shown(1,atHero('letter',430,184,1.1))+paper(175,60,65,1);
   g+=shown(3,'<g class="ax-seal"><circle cx="592" cy="244" r="44"/><path d="m572 244 15 15 28-32"/></g>');
   g+=wave('M620 185C748 100 810 273 944 185',4)+shown(4,'<g class="ax-send-plane"><path d="m930 123 164-35-50 145-34-73-80-37Zm80 37 84-72"/></g>');
  }else if(type==='handoff'){
   g+=disc(299,190,86,'brain',1)+wave('M409 190C565 120 643 120 783 190',2)+shown(2,atHero('relay',945,180,1.15));
   g+=shown(2,'<path class="ax-boundary" d="M622 48V330"/>');
  }else if(type==='evidence'){
   g+=paper(216,75,156,1)+shown(1,'<g class="ax-ink-glyph">'+glyph('check',299,228,65)+'</g>');
   g+=wave('M390 170H526',2)+paper(544,75,156,2)+shown(2,'<path class="ax-citation" d="M583 238v-25h20v25Zm38 0v-25h20v25Z"/>');
   g+=wave('M718 170H854',3)+paper(872,75,156,3)+shown(3,'<g class="ax-seal"><circle cx="1008" cy="270" r="39"/><path d="m990 270 13 13 24-29"/></g>');
  }else if(type==='storage'){
   g+=shown(1,atHero('storage',290,155,.84))+paper(562,96,108,2)+paper(589,115,108,2);
   g+=shown(3,'<path class="ax-audit-line" d="M935 75V305"/>'+[110,185,260].map(y=>'<circle class="ax-audit-dot" cx="935" cy="'+y+'" r="10"/><path class="ax-audit-record" d="M960 '+y+'H1060"/>').join(''));
   g+=wave('M394 316C475 355 757 355 891 316',2)+wave('M720 316H925',3);
  }else if(type==='search'){
   g+=paper(170,68,85,1)+paper(373,78,85,1)+paper(270,235,70,1)+wave('M260 130L371 134',1)+wave('M225 192L270 246',1)+wave('M396 194L340 246',1);
   g+=shown(2,'<g class="ax-map-panel"><path d="m775 85 105-28 105 36 105-32v225l-105 33-105-38-105 29Zm105-28v224m105-188v226"/></g><g class="ax-map-pin"><path d="M983 134c-64 0-71 67 0 143 71-76 64-143 0-143Z"/><circle cx="983" cy="174" r="17"/></g>');
  }else if(type==='crm'){
   g+=shown(1,'<rect class="ax-opportunity-card" x="160" y="68" width="263" height="247" rx="26"/><g class="ax-ink-glyph">'+glyph('people',289,126,68)+'</g>');
   g+=shown(2,'<g class="ax-ink-glyph">'+glyph('score',289,229,83)+'</g>');
   g+=shown(3,atHero('crm',969,185,1.1))+wave('M445 185C598 75 670 295 827 185',3);
  }else if(type==='relay'){
   g+=paper(202,84,150,1)+shown(1,'<g class="ax-ink-glyph">'+glyph('scout',335,278,67)+'</g>');
   g+=wave('M387 191H506',2)+disc(610,190,87,'check',2);
   g+=wave('M719 191H817',3)+shown(3,atHero('relay',957,175,1.07));
  }else if(type==='security'){
   g+=shown(1,atHero('signals',242,178,.82));
   g+=shown(2,'<g class="ax-vault-panel"><rect x="498" y="61" width="224" height="253" rx="28"/><rect x="516" y="79" width="188" height="217" rx="19"/><circle cx="610" cy="187" r="62"/><path d="M610 133V241M556 187H664m-92-38 76 76m-76 0 76-76"/></g>');
   g+=wave('M341 179H475',2)+wave('M740 179H891',3)+disc(977,179,73,'shield',3);
  }else if(type==='finale'){
   g+=shown(1,'<image href="one-tech-o.svg" x="124" y="143" width="105" height="105"/>');
   [[360,185,'brain'],[705,185,'check'],[1050,185,'people']].forEach(([x,y,ic],i)=>{g+=disc(x,y,72,ic,i+1);if(i)g+=wave('M'+(x-263)+' 185H'+(x-87),i+1)});
  }
  return {svg:'<svg class="ax-diagram" viewBox="0 0 1248 400" aria-hidden="true">'+g+'</svg>'};
 }
 function render(){
  const phase=steps[step-1],s=scenes[phase.scene],type=layouts[phase.scene];root.dataset.step=String(step);root.dataset.scene=String(phase.scene+1);
  document.getElementById('axTitle').textContent=s[1];root.dataset.layout=type;
  const holder=document.getElementById('axContent');
  if(lastScene!==phase.scene){
   const art=composition(type);holder.dataset.layout=type;
   holder.innerHTML=art.svg+s[3].map((c,i)=>'<article class="ax-node" data-reveal="'+(i+1)+'"><div class="ax-caption"><h2>'+c[1]+'</h2><p>'+c[2]+'</p></div></article>').join('');lastScene=phase.scene;holder.classList.remove("ax-enter");void holder.offsetWidth;holder.classList.add("ax-enter");
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

