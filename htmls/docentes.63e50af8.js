var e=class{constructor(){this.titulo="",this.descripcion="",this.materia="",this.fecha="",this.estudiantes}getTitulo(){return this.titulo}getDescripcion(){return this.descripcion}getMateria(){return this.materia}getFecha(){return this.fecha}crear(e,t,r,i){return""!=e&&""!=t&&""!=r&&""!=i&&(this.titulo=e,this.descripcion=t,this.materia=r,this.fecha=i,this.estudiantes=0,!0)}getStudents(){return this.estudiantes}setStudent(){this.estudiantes++}getDetalles(){return"<p>tarea:"+this.titulo+" ,  descripcion:"+this.descripcion+" ,  materia:"+this.materia+" ,  fecha:"+this.fecha+"</p>"}getDetallesBrief(){return"<p>tarea:"+this.titulo+" , materia:"+this.materia+"("+this.estudiantes+")</p>"}eliminar(){this.titulo="",this.descripcion="",this.materia="",this.fecha="",this.estudiantes=0}};var t=class{constructor(){this.nombreMateria="",this.docente=""}crearMateria(e,t){return""!=e&&""!=t&&(this.nombreMateria=e,this.docente=t,!0)}getNombre(){return this.nombreMateria}getDocente(){return this.docente}getDetalles(){return"<p> Materia:"+this.getNombre()+"<p><p> Docente:"+this.getDocente()+"<p></p>"}eliminar(){this.nombreMateria="",this.docente=""}},r=[{nombre:"Mate Basica",docente:"M. Soruco"},{nombre:"Intro a la progra",docente:"C. Sanabria"},{nombre:"Algebra Lineal",docente:"A. Soruco"}],a=[{nombre:"Alfred Garcia",materias:["Mate Basica:M. Soruco","Algebra Lineal:A. Soruco"]},{nombre:"Angy Encinas",materias:["Intro a la progra:C. Sanabria","Mate Basica:M. Soruco"]},{nombre:"Rodrigo Guardia",materias:["Algebra Lineal:A. Soruco","Intro a la progra:C. Sanabria","Mate Basica:M. Soruco"]}];const n=document.querySelector("#formBox"),o=document.querySelector("#buscador-form"),s=document.querySelector("#title"),c=document.querySelector("#description"),l=document.querySelector("#subject"),u=document.querySelector("#date"),d=document.querySelector("#buscar-tarea");let m=document.querySelector("#lista-tareas");const h=document.querySelector("#vista-div"),p=document.querySelector("#encontrado-div");document.querySelector("#eliminar-button");let g=[];const b=document.querySelector("#crear-form"),f=document.querySelector("#nombre-materia-items"),S=document.querySelector("#docente-item"),v=document.querySelector("#vistaMat-div");let M=[];const y=document.querySelector("#reporte-tareas"),q=document.querySelector("#report-btn"),D=document.querySelector("#sort-by-sub-btn"),L=document.querySelector("#sort-by-date-btn");let T="",H=new Set,A=a;for(i=0;i<r.length;i++)l.options[i]=new Option(r[i].nombre+":"+r[i].docente,r[i].nombre);b.addEventListener("submit",(e=>{e.preventDefault();const r=f.value,i=S.value;let a=new t;1==a.crearMateria(r,i)?(M.push(a),v.innerHTML="<p> creada con exito !!! </p>",l.options[l.options.length]=new Option(r+":"+i,r)):v.innerHTML="<p> No se pudo crear la materia</p>"})),n.addEventListener("submit",(t=>{t.preventDefault();let r=new e;const a=s.value,n=c.value,o=l.options[l.selectedIndex].text,d=u.value;if(1==r.crear(a,n,o,d)){for(g.push(r),H.add(d),h.innerHTML="<p> se creo la tarea </p>",T="",i=0;i<g.length;i++)T+=g[i].getDetalles();m.innerHTML=T}else h.innerHTML="<p> No se creo la tarea </p>"}));let B="";o.addEventListener("submit",(e=>{e.preventDefault();const t=d.value;for(let e=0;e<g.length;e++)g[e].titulo==t&&(B+=g[e].getDetallesBrief());p.innerHTML=B})),L.addEventListener("click",(e=>{for(e.preventDefault(),g.sort(((e,t)=>e.fecha>t.fecha?1:-1)),T="",i=0;i<g.length;i++)T+=g[i].getDetalles();m.innerHTML=T})),D.addEventListener("click",(e=>{for(e.preventDefault(),g.sort(((e,t)=>e.materia>t.materia?1:-1)),T="",i=0;i<g.length;i++)T+=g[i].getDetalles();m.innerHTML=T})),q.addEventListener("click",(e=>{e.preventDefault();let t="";for(i=0;i<g.length;i++)for(j=0;j<A.length;j++)A[j].materias.includes(g[i].materia)&&g[i].setStudent();for(const e of H.values())for(t+=e,j=0;j<g.length;j++)g[j].fecha==e&&(t+=g[j].getDetallesBrief(),console.log(e,g[j]));y.innerHTML=t}));
//# sourceMappingURL=docentes.63e50af8.js.map