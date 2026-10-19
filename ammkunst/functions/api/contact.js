const j=(x,s)=>new Response(JSON.stringify(x),{status:s,headers:{"content-type":"application/json","cache-control":"no-store"}});
export async function onRequestPost({request,env}){
 if(!env.RESEND_API_KEY||!env.AMM_CONTACT_TO||!env.AMM_CONTACT_FROM)return j({error:"Contact channel not configured"},503);
 if(Number(request.headers.get("content-length")||0)>10000)return j({error:"Too large"},413);
 let b;try{b=await request.json()}catch{return j({error:"Invalid request"},400)}
 if(b.website)return j({ok:true},200);
 const name=String(b.name||"").trim().slice(0,120),email=String(b.email||"").trim().slice(0,200),message=String(b.message||"").trim().slice(0,4000);
 if(name.length<2||!/^.+@.+\..+$/.test(email)||message.length<5)return j({error:"Invalid fields"},400);
 let res;
 try{res=await fetch("https://api.resend.com/emails",{method:"POST",headers:{"Authorization":"Bearer "+env.RESEND_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({from:env.AMM_CONTACT_FROM,to:[env.AMM_CONTACT_TO],reply_to:email,subject:"AMM studio enquiry",text:"Name: "+name+"\nEmail: "+email+"\n\n"+message})})}catch{return j({error:"Delivery unavailable"},502)}
 return res.ok?j({ok:true},200):j({error:"Delivery unavailable"},503);
}
