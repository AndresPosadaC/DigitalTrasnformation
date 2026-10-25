document.documentElement.classList.add('js');

/* Datos del roadmap: intensidad por fase F1..F4 (A=alta, M=media, B=baja) */
const R = {
  1:{n:'Gobierno de procesos y lineamientos',w:16,i:'AAMM',roles:['Arquitecto de procesos líder','Arq. empresarial','Gerente de proyecto'],d:'Define cómo se gobiernan los procesos: dueños, comités, indicadores e instancias de decisión. Es el rubro de mayor peso porque todo lo demás se apoya en él.',it:['Mapa de procesos y cadena de valor de Finagro.','Roles, responsabilidades e indicadores de desempeño por proceso.']},
  2:{n:'Levantamiento AS-IS y Find the Money',w:14,i:'ABBB',roles:['Analista de procesos','Analista financiero','Especialista Lean'],d:'Levantamiento de los procesos críticos con datos reales de volumen, tiempos y errores. Termina con los tres problemas que más dinero cuestan y su línea base.',it:['Diagnóstico de redescuento, garantías, incentivos, cartera y PQRS.','Cuantificación económica y priorización de los 3 problemas.']},
  3:{n:'Brechas y medición de madurez',w:7,i:'AMBM',roles:['Arq. de procesos','Analista de datos'],d:'Mide la madurez de procesos, datos y tecnología frente a referentes del sector financiero de desarrollo y vuelve a medir al cierre para validar el avance.',it:['Benchmarking frente a pares.','Hoja de ruta de brechas priorizadas.']},
  4:{n:'Diseño TO-BE y Map the Outcome',w:12,i:'MABB',roles:['Arq. de procesos líder','Arq. empresarial','Especialista en experiencia'],d:'Rediseña los procesos priorizados y asigna cada problema a un resultado (GROW, SCALE, PROTECT, LIVE, TRUST) con su meta medible.',it:['Procesos TO-BE con reglas de negocio y puntos de automatización.','Mapa de outcomes y casos de negocio.']},
  5:{n:'Capa fundacional: datos, nube y seguridad',w:13,i:'BAMB',roles:['Arquitecto de datos','Arquitecto cloud','Especialista en seguridad'],d:'Gobierno del dato, lakehouse e infraestructura segura. Sin TRUST en los datos ningún modelo de IA llega a producción.',it:['Modelo de gobierno del dato y catálogo.','Arquitectura lakehouse y controles de Habeas Data y ciberseguridad.']},
  6:{n:'Gobierno corporativo de IA',w:8,i:'BAMM',roles:['Consultor de IA','Especialista jurídico','Oficial de riesgo'],d:'Política de uso de IA, ciclo de vida de modelos, gestión de riesgo algorítmico y comité de ética. Se audita en cada fase.',it:['Política y modelo de gobierno de IA.','Inventario y clasificación de riesgo de casos de uso.']},
  7:{n:'Aceleración: automatización e IA aplicada',w:12,i:'BMAA',roles:['Ingeniero de IA','Desarrollador RPA','Diseñador UX','Líder técnico'],d:'Construye y valida los agentes, copilots y modelos priorizados. Es el tramo más intensivo de las fases 3 y 4.',it:['Pilotos de agentes y validación documental.','Modelos de scoring, anomalías y propensión.']},
  8:{n:'Gestión de proyectos y del portafolio',w:6,i:'MMMM',roles:['Gerente de proyecto','PMO'],d:'Única dedicación constante durante los 24 meses: integra el plan de procesos con el portafolio de automatización.',it:['Plan de trabajo, riesgos y control de cambios.','Tablero de avance y valor capturado.']},
  9:{n:'Gestión del cambio y adopción',w:5,i:'BMAA',roles:['Especialista en cambio','Consultor de formación'],d:'Acompaña a los equipos y a la red de intermediarios para que los procesos nuevos se usen de verdad.',it:['Plan de comunicación y adopción por área.','Red de agentes de cambio.']},
  10:{n:'Price the Outcome y medición de valor',w:4,i:'BBMA',roles:['Analista financiero','Gerente de proyecto'],d:'Valida el ahorro y el crecimiento frente a la línea base de la Fase 1 y opera el modelo de cobro por resultado.',it:['Metodología de validación del ahorro.','Informe de valor capturado por outcome.']},
  11:{n:'Academia y transferencia',w:3,i:'BBMA',roles:['Consultor de formación','Arq. de procesos líder'],d:'Deja capacidad instalada: rutas formativas en procesos, datos e IA y entrega del gobierno al equipo de Finagro.',it:['Rutas formativas por rol.','Transferencia formal de procesos, modelos y tableros.']}
};
const P = [
  {c:'F1',m:[1,6],t:'Descubrimiento y Find the Money',tf:'Aplica: 01 FIND THE MONEY',ids:[2,1,3,8],intro:'Se levanta la operación real y se le pone precio a cada ineficiencia.'},
  {c:'F2',m:[7,12],t:'Rediseño y capa fundacional',tf:'Aplica: 02 MAP THE OUTCOME',ids:[4,5,6,1]},
  {c:'F3',m:[13,18],t:'Aceleración con IA',tf:'Aplica: 02 + 03 (modelos USAGE / OUTPUT)',ids:[7,9,6,3]},
  {c:'F4',m:[19,24],t:'Escalamiento, valor y transferencia',tf:'Aplica: 03 PRICE THE OUTCOME (modelo OUTCOME)',ids:[7,10,11,9]}
];
const lvl={A:'alto',M:'medio',B:'bajo'}, lab={A:'Alta',M:'Media',B:'Baja'};

/* Fases */
const ph=document.getElementById('phases');
P.forEach((p,pi)=>{
  const el=document.createElement('div');el.className='phase';el.dataset.m=p.m[1];el.dataset.s=p.m[0];
  const mini=Array.from({length:24},(_,k)=>`<i class="${k+1>=p.m[0]&&k+1<=p.m[1]?'on':''}"></i>`).join('');
  el.innerHTML=`<div class="pmeta"><div class="code">${p.c}</div><div class="when">Meses ${p.m[0]}–${p.m[1]}</div><div class="minibar">${mini}</div><h3>${p.t}</h3><div class="tf">${p.tf}</div></div>
  <div class="stages">${p.ids.map(id=>{const r=R[id];return `<article class="stage rv">
    <div class="stage-top"><h4><span>#${id}</span>${r.n}</h4><span class="weight">${r.w}% del valor</span></div>
    <p>${r.d}</p><ul>${r.it.map(x=>`<li>${x}</li>`).join('')}</ul>
    <div class="roles">${r.roles.map(x=>`<span>${x}</span>`).join('')}</div>
    <div><div class="intens-cap">INTENSIDAD DEL EQUIPO POR FASE</div><div class="intens">${[...r.i].map((c,k)=>`<span class="${lvl[c]}" title="F${k+1}: ${lab[c]}"${k===pi?' style="outline:2px solid var(--harvest);outline-offset:1px"':''}>F${k+1}</span>`).join('')}</div></div>
  </article>`}).join('')}</div>`;
  ph.appendChild(el);
});

/* Gantt */
const g=document.getElementById('gantt');
let h='<div class="gh" style="text-align:left;padding-left:12px">Rubro</div>';
for(let m=1;m<=24;m++)h+=`<div class="gh">${m}</div>`;
h+='<div class="gp" style="text-align:left;padding-left:12px">Fase</div>';
P.forEach(p=>h+=`<div class="gp" style="grid-column:span 6">${p.c} · M${p.m[0]}–${p.m[1]}</div>`);
Object.entries(R).forEach(([id,r])=>{
  h+=`<div class="gn" title="${r.n}">#${id} ${r.n}</div>`;
  for(let m=1;m<=24;m++){const c=r.i[Math.floor((m-1)/6)];h+=`<div class="cell"><span class="bar ${lvl[c]}" title="${r.n} · mes ${m}: ${lab[c]}"></span></div>`}
});
g.innerHTML=h;

/* Regla de meses */
const months=document.getElementById('months'),label=document.getElementById('rulerLabel');
for(let i=0;i<24;i++)months.appendChild(document.createElement('span'));
const cells=[...months.children], phases=[...document.querySelectorAll('.phase')];
function updateRuler(){
  const mid=window.innerHeight*.45;let cur=0;
  phases.forEach(p=>{const r=p.getBoundingClientRect();const s=+p.dataset.s,e=+p.dataset.m;
    if(r.top<mid){const f=Math.min(1,Math.max(0,(mid-r.top)/r.height));cur=Math.max(cur,Math.round(s-1+f*(e-s+1)))}});
  cells.forEach((c,i)=>c.classList.toggle('on',i<cur));
  label.textContent=`Mes ${cur} de 24`;
  let active=null;document.querySelectorAll('section[id]').forEach(s=>{if(s.getBoundingClientRect().top<mid)active=s.id});
  document.querySelectorAll('[data-nav]').forEach(a=>a.classList.toggle('on',a.dataset.nav===active));
}
addEventListener('scroll',updateRuler,{passive:true});addEventListener('resize',updateRuler);updateRuler();

/* Aparición */
const rv=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{rootMargin:'0px 0px -8% 0px',threshold:.08});
  rv.forEach(el=>{if(el.getBoundingClientRect().top<innerHeight)el.classList.add('in');else io.observe(el)});
}else rv.forEach(el=>el.classList.add('in'));

/* Simulador */
const $=id=>document.getElementById(id);
const fmt=v=>'COP '+Math.round(v).toLocaleString('es-CO')+' M';
function calc(){
  const b=+$('base').value||0,a=+$('ahorro').value,p=+$('part').value;
  $('ahorroOut').textContent=a+'%';$('partOut').textContent=p+'%';
  const s=b*a/100,v=s*p/100;
  $('rAhorro').textContent=fmt(s);$('rVar').textContent=fmt(v);$('rNet').textContent=fmt(s-v);
}
$('calc').addEventListener('input',calc);$('calc').addEventListener('submit',e=>e.preventDefault());calc();
