(function(){
"use strict";
const W=window.AMM_WORKS||[];
const getBag=()=>{try{let x=JSON.parse(localStorage.getItem("amm-enquiries")||"[]");return Array.isArray(x)?x.filter(id=>W.some(w=>w.id===id)):[]}catch(e){return []}};
const saveBag=x=>{try{localStorage.setItem("amm-enquiries",JSON.stringify(x))}catch(e){}};
const counter=document.querySelector("[data-bag-count]");
const updateCount=()=>{if(counter)counter.textContent=String(getBag().length)};
updateCount();
const dialog=document.getElementById("site-menu");
document.querySelector("[data-open-menu]")?.addEventListener("click",()=>dialog?.showModal());
dialog?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>dialog.close()));
document.querySelectorAll("[data-add-enquiry]").forEach(b=>b.addEventListener("click",()=>{
 const id=b.getAttribute("data-add-enquiry");let bag=getBag();if(!bag.includes(id))bag.push(id);saveBag(bag);updateCount();
 b.textContent="Added to your bag ✓";b.setAttribute("aria-label","Added to your enquiry bag");
 setTimeout(()=>{b.textContent="Add to enquiry bag  ↗"},1400);
}));
const list=document.getElementById("bag-list");
function drawBag(){if(!list)return;const bag=getBag(),matches=bag.map(id=>W.find(w=>w.id===id)).filter(Boolean);const count=document.getElementById("bag-info");if(count)count.textContent=matches.length?matches.length+" selected work"+(matches.length===1?"":"s"):"Your bag is empty.";
const safe=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
list.innerHTML=matches.map(w=>'<div class="bagitem"><a href="/works/'+w.id+'/"><img src="'+w.src+'" alt="" loading="lazy"></a><div><a href="/works/'+w.id+'/">'+safe(w.title)+'</a><div class="muted small">Enquiry · AMM / '+safe(w.id.toUpperCase())+'</div></div><button type="button" data-remove="'+w.id+'">Remove</button></div>').join("");
list.querySelectorAll("[data-remove]").forEach(b=>b.addEventListener("click",()=>{saveBag(getBag().filter(id=>id!==b.getAttribute("data-remove")));updateCount();drawBag()}));
const go=document.getElementById("bag-enquire");if(go){go.hidden=matches.length===0;go.href="/contact/?works="+encodeURIComponent(matches.map(w=>w.title+" ["+w.id.toUpperCase()+"]").join(", "))}}
drawBag();
const form=document.getElementById("contact-form");
if(form){const q=new URLSearchParams(location.search);const w=W.find(x=>x.id===q.get("work"));const message=form.querySelector('textarea[name="message"]');if(w)message.value="I would like to enquire about "+w.title+" (AMM "+w.id.toUpperCase()+").";else if(q.get("works"))message.value="I would like to enquire about: "+q.get("works")+".";
form.addEventListener("submit",async(e)=>{e.preventDefault();const status=document.getElementById("form-status"),btn=form.querySelector('button[type="submit"]');btn.disabled=true;status.textContent="Sending…";
try{let r=await fetch("/api/contact",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(form)))});let responseType=r.headers.get("content-type")||"";let payload=responseType.includes("application/json")?await r.json():null;if(!r.ok||payload?.ok!==true)throw new Error("Enquiry service is not active yet. Please try again later.");status.textContent="Your message was sent.";form.reset()}catch(error){status.textContent=error.message}finally{btn.disabled=false}});
}
})();
