const IDS=["a21","a18","a14","a20","a01","a12","a19","a03","a15","a17","a13","a16","a07"];
const j=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{"content-type":"application/json","cache-control":"no-store"}});
export async function onRequestGet({env}){
 if(env.AMM_STORE_LIVE!=="true"||!env.STRIPE_SECRET_KEY||!env.STRIPE_PRICE_IDS||!env.STRIPE_WEBHOOK_SECRET||!env.AMM_SHIPPING_RATE||!env.AMM_ORDERS)return j({enabled:false,products:[]});
 let mapping;try{mapping=JSON.parse(env.STRIPE_PRICE_IDS)}catch{return j({enabled:false,products:[]})}
 const products=[];
 for(const id of IDS){
  const priceId=mapping[id];
  if(typeof priceId!=="string"||!/^price_[A-Za-z0-9]+$/.test(priceId))continue;
  let r;
  try{r=await fetch("https://api.stripe.com/v1/prices/"+encodeURIComponent(priceId),{headers:{"Authorization":"Bearer "+env.STRIPE_SECRET_KEY}})}catch{continue}
  if(!r.ok)continue;
  const item=await r.json();
  if(item.active===true&&item.type==="one_time"&&item.currency==="nok"&&Number.isInteger(item.unit_amount)&&item.unit_amount>0)products.push({id,amount:item.unit_amount,currency:"NOK"});
 }
 return j({enabled:products.length>0,products});
}
