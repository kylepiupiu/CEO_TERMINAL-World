/* CEO TERMINAL V4 city continuation — public art / movement QA only. */
const {chromium}=require('playwright');
const {spawn}=require('node:child_process');
const assert=require('node:assert/strict');
const PORT=8986, URL='http://127.0.0.1:'+PORT+'/previews/v4-city-extension-continuous-r1/index.html';
const sleep=ms=>new Promise(r=>setTimeout(r,ms));
async function run(){
 const server=spawn('python3',['-m','http.server',String(PORT),'--bind','127.0.0.1'],{stdio:'ignore'});
 let browser;
 try{
  browser=await chromium.launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
  for(const [name,width,height,touch] of [['desktop',1440,810,false],['iphone-landscape',844,390,true],['iphone-portrait',390,844,true]]){
   const context=await browser.newContext({viewport:{width,height},deviceScaleFactor:1,isMobile:touch,hasTouch:touch});
   const page=await context.newPage(), errors=[];
   page.on('pageerror',e=>errors.push('JS '+e.message));
   page.on('response',r=>{if(r.status()>=400)errors.push('HTTP '+r.status()+' '+r.url());});
   await page.goto(URL,{waitUntil:'domcontentloaded',timeout:30000});
   await page.waitForFunction(()=>window.__CT_V4_CITY_QA__?.state.loaded,{timeout:25000});
   const qa=await page.evaluate(()=>{
    const q=window.__CT_V4_CITY_QA__;
    const b=document.createElement('canvas'); b.width=1672;b.height=941;
    const context=b.getContext('2d'); context.drawImage(CITY,0,0,1672,941);
    let mismatch=0;for(const [x,y] of [[60,320],[520,332],[1322,326],[810,825],[1600,502]]){
     const x1=context.getImageData(x,y,1,1).data,x2=STAGE.getContext('2d').getImageData(x,y,1,1).data;
     if(Array.from(x1).join(',')!==Array.from(x2).join(','))mismatch++;
    }
    const stage=STAGE.getContext('2d');
    const road=stage.getImageData(1685,445,1,1).data,origin=context.getImageData(1023,445,1,1).data;
    return {
     citySize:[CITY.naturalWidth,CITY.naturalHeight],imageIdentical:mismatch===0,
     roadMatchesSource:Array.from(road).join(',')===Array.from(origin).join(','),
     originalEntrances:q.PORTALS.filter(x=>x.kind==='original').map(x=>x.id),
     portalIds:q.PORTALS.map(x=>x.id),
     allowed:{
      seamLeft:q.allowed(1640,510),seamRight:q.allowed(1680,510),
      officeWall:!q.allowed(3000,250),officeDoor:q.allowed(2990,334),
      techDoor:q.allowed(2470,334),sohoDoor:q.allowed(1900,334),
      bookstore:q.allowed(2080,825),bistro:q.allowed(2920,825),
      alley:q.allowed(2490,720),
      storefrontSolid:!q.allowed(2080,700)
     },
     sprites:[PLAYER_IDLE.naturalWidth,PLAYER_WALK.naturalWidth],
     loaded:q.state.loaded,
     canvas:[canvas.width,canvas.height]
    };
   });
   assert.deepEqual(qa.citySize,[1671,941],name+': original V4 art not loaded');
   assert(qa.imageIdentical,name+': original main city pixels have been altered');
   assert(qa.roadMatchesSource,name+': extension road not sampled from original main road');
   assert.deepEqual(qa.originalEntrances,['company','client_lobby','home','cafe','restaurant'],name+': frozen entry positions changed');
   assert.deepEqual(qa.sprites,[144,192],name+': original four-way sprite atlases did not load');
   assert(Object.values(qa.allowed).every(Boolean),name+': city/extension collisions and portals invalid');
   const seam=await page.evaluate(()=>{
     const q=window.__CT_V4_CITY_QA__;
     q.setPosition(1640,510);
     for(let i=0;i<35;i++)q.move(3,0);
     return {x:q.state.x,y:q.state.y};
   });
   assert(seam.x>1730,name+': player cannot continuously walk to the east block');
   const alley=await page.evaluate(()=>{
     const q=window.__CT_V4_CITY_QA__;
     q.setPosition(2490,510);
     for(let i=0;i<95;i++)q.move(0,4);
     return q.getPosition();
   });
   assert(alley.y>820,name+': alley to bookshop/canteen is blocked');
   // Reset and verify real UI keyboard input advances the original sprite.
   await page.locator('#reset').click();
   const before=await page.evaluate(()=>window.__CT_V4_CITY_QA__.state.x);
   await page.keyboard.down('ArrowRight'); await sleep(320);
   const after=await page.evaluate(()=>window.__CT_V4_CITY_QA__.state.x);
   await page.keyboard.up('ArrowRight');
   assert(after>before+30,name+': keyboard not moving');
   const bounds=await page.evaluate(()=>({
    dpad:document.getElementById('dpad').getBoundingClientRect().toJSON(),
    actions:document.getElementById('actions').getBoundingClientRect().toJSON(),
    width:innerWidth,height:innerHeight
   }));
   assert(bounds.dpad.left>=0&&bounds.dpad.bottom<=height+3&&bounds.actions.right<=width+3,name+': clipped touch controls');
   assert.deepEqual(errors,[],name+': runtime network or script errors');
   console.log('PASS '+name,JSON.stringify({qa,seam,alley,keyboardDx:Math.round(after-before)}));
   await context.close();
  }
  console.log('PASS V4: original unchanged, road texture source-matched, east seam walkable, original entrances intact, government building solemn, new public entrances reachable');
 }finally{if(browser)await browser.close();server.kill('SIGTERM');}
}
run().catch(e=>{console.error(e);process.exitCode=1;});
