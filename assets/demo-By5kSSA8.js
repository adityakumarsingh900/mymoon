import{bg as o,bh as t,j as c,bi as n,bj as s}from"./index-ScVOLe_s.js";import{u as r}from"./useServerFn-CN_6TqF8.js";import{u as i}from"./useQuery-DharFzDO.js";const m=1,f="26c85efe-fa57-419f-9ac1-0a068fffc419",_="c9e2ae0c-054c-46d4-b9ab-65232b51365c",d="./__l5e/assets-v1/26c85efe-fa57-419f-9ac1-0a068fffc419/karwa-demo-memory-2.png",b="a/v1/c9e2ae0c-054c-46d4-b9ab-65232b51365c/26c85efe-fa57-419f-9ac1-0a068fffc419/karwa-demo-memory-2.png",p="karwa-demo-memory-2.png",l=552215,y="image/png",g="2026-10-18T11:33:44Z",u={version:m,asset_id:f,project_id:_,url:d,r2_key:b,original_filename:p,size:l,content_type:y,created_at:g},$=1,k="09869d9c-a821-41f5-b029-28532c5fdc9e",v="c9e2ae0c-054c-46d4-b9ab-65232b51365c",w="./__l5e/assets-v1/09869d9c-a821-41f5-b029-28532c5fdc9e/karwa-demo-memory-3.png",h="a/v1/c9e2ae0c-054c-46d4-b9ab-65232b51365c/09869d9c-a821-41f5-b029-28532c5fdc9e/karwa-demo-memory-3.png",j="karwa-demo-memory-3.png",z=333940,T="image/png",x="2026-10-18T11:33:47Z",D={version:$,asset_id:k,project_id:v,url:w,r2_key:h,original_filename:j,size:z,content_type:T,created_at:x},U=1,Z="bd706359-757b-47b5-a311-f1ebbff7e33e",A="c9e2ae0c-054c-46d4-b9ab-65232b51365c",E="./__l5e/assets-v1/bd706359-757b-47b5-a311-f1ebbff7e33e/karwa-demo-memory-4.png",R="a/v1/c9e2ae0c-054c-46d4-b9ab-65232b51365c/bd706359-757b-47b5-a311-f1ebbff7e33e/karwa-demo-memory-4.png",B="karwa-demo-memory-4.png",F=319786,K="image/png",L="2026-10-18T11:33:49Z",P={version:U,asset_id:Z,project_id:A,url:E,r2_key:R,original_filename:B,size:F,content_type:K,created_at:L},q=1,G="4fc15395-1b42-4ce2-96a4-5333089b0786",C="c9e2ae0c-054c-46d4-b9ab-65232b51365c",M="./__l5e/assets-v1/4fc15395-1b42-4ce2-96a4-5333089b0786/karwa-demo-memory-5.png",O="a/v1/c9e2ae0c-054c-46d4-b9ab-65232b51365c/4fc15395-1b42-4ce2-96a4-5333089b0786/karwa-demo-memory-5.png",Q="karwa-demo-memory-5.png",S=390472,W="image/png",Y="2026-10-18T11:33:52Z",H={version:q,asset_id:G,project_id:C,url:M,r2_key:O,original_filename:Q,size:S,content_type:W,created_at:Y},I=1,J="890653fe-7668-4f33-9664-b433f8c5089a",N="c9e2ae0c-054c-46d4-b9ab-65232b51365c",V="./__l5e/assets-v1/890653fe-7668-4f33-9664-b433f8c5089a/karwa-demo-memory-6.avif",X="a/v1/c9e2ae0c-054c-46d4-b9ab-65232b51365c/890653fe-7668-4f33-9664-b433f8c5089a/karwa-demo-memory-6.avif",ee="karwa-demo-memory-6.avif",ae=51108,oe="image/avif",te="2026-10-18T11:33:55Z",ce={version:I,asset_id:J,project_id:N,url:V,r2_key:X,original_filename:ee,size:ae,content_type:oe,created_at:te},ne="./__l5e/assets-v1/0afcb4ee-c2ed-4844-80cf-68e3fbc2b072/demo-opening-portrait-v2.png",se={url:ne},re=[D,P,H,u,ce].map(e=>({image_url:e.url}));function _e(){
  const fallbackGift={
    recipient_name:"Ananya",
    sender_name:"Arjun",
    category:"girlfriend",
    message: "You are my today, my tomorrow, and every prayer my heart will ever make. ❤️🌙\nHappy Karwa Chauth, Jaan. You are my forever. ❤️",
  };
  const fallbackPhotos=[
    {image_url:"./__l5e/assets-v1/0afcb4ee-c2ed-4844-80cf-68e3fbc2b072/demo-opening-portrait-v2.png"},
    {image_url:"./__l5e/assets-v1/87468a51-fc15-4ca9-9513-68cd1284d4e9/demo-1.png"},
    {image_url:"./__l5e/assets-v1/89ae20ca-2bfb-4d0d-9454-934efe4e7220/demo-2.png"},
    {image_url:"./__l5e/assets-v1/ec008056-b677-4de9-b0da-4602a36dc9aa/demo-3.png"},
    {image_url:"./__l5e/assets-v1/0c54b518-fb38-4946-bee6-92251332fbc8/demo-4.png"}
  ];
  let loaderData=null;
  try{loaderData=t.useLoaderData();}catch(err){}
  const defaultInitial=loaderData||{gift:fallbackGift,photos:fallbackPhotos};
  const {data:a}=i({
    queryKey:["karwa-chauth-demo-gift"],
    queryFn:async()=>defaultInitial,
    initialData:defaultInitial
  });

  const norm=u=>(u&&typeof u==="string"&&u.startsWith("/")&&!u.startsWith("./"))?"."+u:u;
  const rawC=window.CUSTOM_GIFT_CONFIG||{};
  if(typeof document!=="undefined"){
    document.title=rawC.page_title||"Happy Karwa Choth Anamika <3";
  }
  const C={
    ...rawC,
    circle_photo_url:norm(rawC.circle_photo_url),
    audioUrl:norm(rawC.audioUrl),
    photos:rawC.photos?rawC.photos.map(p=>typeof p==="string"?norm(p):{...p,image_url:norm(p.image_url)}):null,
    memoryPhotos:rawC.memoryPhotos?rawC.memoryPhotos.map(p=>typeof p==="string"?norm(p):{...p,image_url:norm(p.image_url)}):null
  };
  const G=a?.gift||fallbackGift;
  const mergedGift={
    ...G,
    recipient_name:C.recipient_name??G.recipient_name??"Ananya",
    sender_name:C.sender_name??G.sender_name??"Arjun",
    message:C.message??G.message,
    love_letter_heading:C.love_letter_heading??G.love_letter_heading,
    love_letter_message:C.love_letter_message??G.love_letter_message,
    scratch_card_prize:C.scratch_card_prize??G.scratch_card_prize,
    circle_photo_url:C.circle_photo_url??G.circle_photo_url,
    youtube_url:C.youtube_url||null
  };
  const basePhotos=a?.photos&&a.photos.length>0?a.photos:fallbackPhotos;
  const defaultPhotos=[{image_url:se.url},...basePhotos.slice(1)];
  const mergedPhotos=C.photos?(C.photos.map(p=>typeof p==="string"?{image_url:p}:p)):defaultPhotos;
  const mergedMemoryPhotos=C.memoryPhotos?(C.memoryPhotos.map(p=>typeof p==="string"?{image_url:p}:p)):re;
  const mergedAudioUrl=C.audioUrl??("./karwa-chauth-default-romantic.mp3");
  const mergedAudioTitle=C.audioTitle??("Our song");
  const showBuy=C.showBuyButton??false;

  return c.jsx(n,{
    gift:mergedGift,
    photos:mergedPhotos,
    memoryPhotos:mergedMemoryPhotos,
    audioUrl:mergedAudioUrl,
    audioTitle:mergedAudioTitle,
    showBuyButton:showBuy
  });
}export{_e as component};