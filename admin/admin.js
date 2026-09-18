const $=id=>document.getElementById(id);
const defaults={name:"Adil Maulana Chasyi",profession:"Programmer",tagline:"Building digital experiences that speak for themselves.",about:"Setiap kegagalan yang saya alami bukan alasan untuk berhenti, melainkan pelajaran untuk menjadi pribadi yang lebih kuat. Saya memilih untuk bekerja dalam diam, berkembang dalam proses, dan membiarkan hasil berbicara tentang perjalanan saya.",accent:"#d9ff55",bg:"#08090a"};
let data={...defaults,...(JSON.parse(localStorage.getItem("adilPortfolio")||"{}"))};
["name","profession","tagline","about","accent","bg"].forEach(k=>{$(k).value=data[k]||defaults[k]});
$("save").onclick=()=>{
 ["name","profession","tagline","about","accent","bg"].forEach(k=>data[k]=$(k).value);
 localStorage.setItem("adilPortfolio",JSON.stringify(data));
 $("status").textContent="✓ Tersimpan di browser ini. Untuk publik, gunakan backend Supabase.";
 setTimeout(()=>$("status").textContent="",3500);
};
$("photo").onchange=e=>{
 const f=e.target.files?.[0]; if(!f)return;
 const r=new FileReader();r.onload=()=>{localStorage.setItem("adilPortfolioPhoto",r.result);$("preview").innerHTML=`<img src="${r.result}" alt="preview">`};r.readAsDataURL(f);
};
const p=localStorage.getItem("adilPortfolioPhoto");if(p)$("preview").innerHTML=`<img src="${p}" alt="preview">`;
