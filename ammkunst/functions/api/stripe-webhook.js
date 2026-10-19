const resp=(msg,status)=>new Response(msg,{status,headers:{"cache-control":"no-store"}});
function hex(buf){return Array.from(buf).map(x=>x.toString(16).padStart(2,"0")).join("")}
function same(a,b){if(a.length!==b.length)return false;let difference=0;for(let i=0;i<a.length;i++)difference|=a.charCodeAt(i)^b.charCodeAt(i);return difference===0}
export async function onRequestPost({request,env}){
 if(!env.STRIPE_WEBHOOK_SECRET||!env.AMM_ORDERS)return resp("Not configured",503);
 const header=request.headers.get("stripe-signature")||"";
 const parts=Object.fromEntries(header.split(",").map(s=>s.trim().split("=")));
 const timestamp=Number(parts.t);
 if(!Number.isFinite(timestamp)||!parts.v1||Math.abs(Date.now()/1000-timestamp)>300)return resp("Invalid signature",400);
 const payload=await request.text();
 const key=await crypto.subtle.importKey("raw",new TextEncoder().encode(env.STRIPE_WEBHOOK_SECRET),{name:"HMAC",hash:"SHA-256"},false,["sign"]);
 const digest=hex(new Uint8Array(await crypto.subtle.sign("HMAC",key,new TextEncoder().encode(parts.t+"."+payload))));
 if(!same(digest,parts.v1))return resp("Invalid signature",400);
 let event;try{event=JSON.parse(payload)}catch{return resp("Bad payload",400)}
 if(event.type==="checkout.session.completed"&&event.data?.object?.payment_status==="paid"){
  const order=event.data.object;
  if(order.id&&order.id.startsWith("cs_")){
   await env.AMM_ORDERS.put("paid:"+order.id,JSON.stringify({stripe_session:order.id,stripe_event:event.id,status:"paid",currency:order.currency,amount_total:order.amount_total,time:new Date().toISOString()}));
  }
 }
 return resp("ok",200);
}
