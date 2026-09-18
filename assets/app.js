const defaults={
  name:"Adil Maulana Chasyi",
  profession:"Programmer",
  tagline:"Building digital experiences that speak for themselves.",
  about:"Setiap kegagalan yang saya alami bukan alasan untuk berhenti, melainkan pelajaran untuk menjadi pribadi yang lebih kuat. Saya memilih untuk bekerja dalam diam, berkembang dalam proses, dan membiarkan hasil berbicara tentang perjalanan saya."
};
try{
 const saved=JSON.parse(localStorage.getItem("adilPortfolio"));
 if(saved){
   document.querySelector(".hero-copy")?.replaceChildren(document.createTextNode(saved.about||defaults.about));
   document.title=`${saved.name||defaults.name} — ${saved.profession||defaults.profession}`;
 }
}catch(e){}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.style.opacity=1;e.target.style.transform="translateY(0)"}}),{threshold:.12});
document.querySelectorAll("section:not(.hero) h2, .project-card, blockquote, .stats>div").forEach(el=>{el.style.opacity=0;el.style.transform="translateY(28px)";el.style.transition="opacity .8s ease, transform .8s ease";io.observe(el)});
