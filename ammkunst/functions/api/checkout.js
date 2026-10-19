const WORKS=new Set(["a21","a18","a14","a20","a01","a12","a19","a03","a15","a17","a13","a16","a07"]);
function json(x,status){return new Response(JSON.stringify(x),{status:status||200,headers:{"content-type":"application/json","cache-control":"no-store"}})}
export async function onRequestPost({request,env}){
 if(env.AMM_STORE_LIVE!=="true"||!env.STRIPE_SECRET_KEY||!env.STRIPE_PRICE_IDS||!env.AMM_SHIPPING_RATE||!env.STRIPE_WEBHOOK_SECRET||!env.AMM_ORDERS)return json({error:"Purchasing not yet available"},503);
 const site=new URL(request.url).origin;
 if(request.headers.get("origin")&&request.headers.get("origin")!==site)return json({error:"Forbidden"},403);
 let input,prices;
 try{input=await request.json();prices=JSON.parse(env.STRIPE_PRICE_IDS)}catch{return json({error:"Invalid request"},400)}
 if(!Array.isArray(input.items)||input.items.length<1||input.items.length>10)return json({error:"Invalid items"},400);
 const params=new URLSearchParams();
 for(let i=0;i<input.items.length;i++){
  const item=input.items[i];const price=prices[item?.id];
  if(!WORKS.has(item?.id)||!Number.isInteger(item?.quantity)||item.quantity<1||item.quantity>5||typeof price!=="string"||!/^price_[A-Za-z0-9]+$/.test(price))return json({error:"Unapproved product"},400);
  params.set("line_items["+i+"][price]",price);params.set("line_items["+i+"][quantity]",String(item.quantity));
 }
 params.set("mode","payment");
 params.set("shipping_address_collection[allowed_countries][0]","NO");
 params.set("shipping_options[0][shipping_rate]",env.AMM_SHIPPING_RATE);
 params.set("success_url",site+"/checkout/success/?session_id={CHECKOUT_SESSION_ID}");
 params.set("cancel_url",site+"/bag/");
 params.set("metadata[website]","ammkunst.no");
 let stripe;
 try{stripe=await fetch("https://api.stripe.com/v1/checkout/sessions",{method:"POST",headers:{"Authorization":"Bearer "+env.STRIPE_SECRET_KEY,"Content-Type":"application/x-www-form-urlencoded"},body:params})}catch{return json({error:"Checkout temporarily unavailable"},502)}
 const result=await stripe.json();
 return stripe.ok&&result.url?json({url:result.url}):json({error:"Checkout temporarily unavailable"},502);
}
export function onRequestGet(){return json({error:"Method not allowed"},405)}
