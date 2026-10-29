/* CT V4 street preview: public web QA only. No frozen game data or credentials. */
const { chromium } = require("playwright");
const {spawn}=require("node:child_process");
const assert=require("node:assert/strict");
const PORT=8897,URL="http://127.0.0.1:"+PORT+"/previews/v4-commercial-lane-polish-r3/index.html";
const delay=ms=>new Promise(r=>setTimeout(r,ms));
async function run(){
 const srv=spawn("python3",["-m","http.server",String(PORT),"--bind","127.0.0.1"],{stdio:"ignore"});
 let browser;
 try {
  browser=await chromium.launch({headless:true,args:["--no-sandbox","--disable-dev-shm-usage"]});
  for(const [name,w,h,mobile] of [["desktop",1366,768,false],["phone",812,375,true],["tablet",1180,820,false]]){
   const ctx=await browser.newContext({viewport:{width:w,height:h},deviceScaleFactor:1,isMobile:mobile,hasTouch:mobile});
   const page=await ctx.newPage(),errors=[];
   page.on("pageerror",e=>errors.push(String(e)));
   await page.goto(URL,{waitUntil:"domcontentloaded",timeout:25000});
   await page.waitForFunction(()=>window.__CT_PREVIEW_QA__ && window.__CT_PREVIEW_QA__.spriteStatus().idle===144 && window.__CT_PREVIEW_QA__.spriteStatus().walk===192,{timeout:20000});
   const layers=await page.evaluate(()=>window.__CT_PREVIEW_QA__.foregroundStatus());
   assert(layers.length===3 && layers.every(x=>x.w>=250 && x.h>=250),name+": source-pixel alpha art not loaded");
   const g=await page.evaluate(()=>window.__CT_PREVIEW_QA__.getGeometry());
   assert(g.solids.length===11 && Math.abs(g.player_radius_source_px-12.45)<0.01,name+": refinements not matching Godot layout");
   const gardens=await page.evaluate(()=>[
       allowed(700,720),allowed(1275,725),!allowed(830,700),!allowed(500,705),
       !allowed(980,650),!allowed(550,805),allowed(973,558)
   ]);
   assert(gardens.every(Boolean),name+": plaza walk and real planter/bench/fountain collision incorrect");
   const begin=await page.evaluate(()=>window.__CT_PREVIEW_QA__.getPlayer());
   await page.keyboard.down("ArrowRight");await delay(360);
   const moving=await page.evaluate(()=>window.__CT_PREVIEW_QA__.getPlayer());
   await page.keyboard.up("ArrowRight");await delay(85);
   const end=await page.evaluate(()=>window.__CT_PREVIEW_QA__.getPlayer());
   assert(moving.x>begin.x+35,name+": keyboard did not move");
   assert(moving.moving && moving.frame>=0&&moving.frame<=3,name+": original walking animation did not run");
   assert.equal(end.actualSpeed,0,name+": phantom walking after release");
   assert.equal(end.face,"right",name+": wrong four-direction facing");
   const doors=await page.evaluate(()=>{
     const xs=[435,973,1450],ys=[544,558,554];
     return xs.map((x,i)=>({inside:allowed(x,470),lower:allowed(x,505),outside:allowed(x,ys[i])}));
   });
   assert(doors.every(x=>!x.inside&&!x.lower&&x.outside),name+": faulty glass collision thresholds");
   // Place at a legitimate sidewalk coordinate, not inside the planter.
   await page.evaluate(()=>{player.x=973;player.y=550;player.actualSpeed=0;});
   await page.keyboard.down("ArrowUp");await delay(530);await page.keyboard.up("ArrowUp");
   const glass=await page.evaluate(()=>window.__CT_PREVIEW_QA__.getPlayer());
   assert(glass.y>=537,name+": avatar feet penetrated BOOKS facade");
   await page.locator("#action").click();
   assert((await page.locator("#note").textContent()).includes("BOOKS书店"),name+": door interaction inaccessible");
   await page.keyboard.down("ArrowDown");await delay(200);await page.keyboard.up("ArrowDown");
   const retreat=await page.evaluate(()=>window.__CT_PREVIEW_QA__.getPlayer());
   assert(retreat.y>glass.y+10,name+": avatar unable to move away from glass");
   await page.evaluate(()=>{player.x=160;player.y=560;player.actualSpeed=0;});
   if(mobile) await page.locator("#padRight").tap();
   else {const b=page.locator("#padRight");await b.hover();await page.mouse.down();await delay(360);await page.mouse.up();}
   await delay(90);
   const pad=await page.evaluate(()=>window.__CT_PREVIEW_QA__.getPlayer());
   assert(pad.x>169,name+": D-pad did not move");
   const noDrift=pad.x;await delay(110);
   assert(Math.abs((await page.evaluate(()=>player.x))-noDrift)<1,name+": drifts after D-pad release");
   assert.equal(errors.length,0,name+": uncaught JS: "+errors.join(" | "));
   const ui=await page.evaluate(()=>({w:innerWidth,h:innerHeight,left:document.querySelector("#dpad").getBoundingClientRect().left,bottom:document.querySelector("#dpad").getBoundingClientRect().bottom,actionX:document.querySelector("#action").getBoundingClientRect().right}));
   assert(ui.left>=0&&ui.bottom<=h+3&&ui.actionX<=w+3,name+": controls clip outside screen");
   console.log("PASS",name,JSON.stringify({sprite:await page.evaluate(()=>window.__CT_PREVIEW_QA__.spriteStatus()),keyboardDelta:Math.round(moving.x-begin.x),glassStoppedY:+glass.y.toFixed(1),padDelta:Math.round(pad.x-160),viewport:ui}));
   await ctx.close();
  }
  console.log("PASS R3 V4: source-derived alpha tree layers, original CEO, new garden traversal, glass doors and three viewports");
 }finally{if(browser)await browser.close();srv.kill("SIGTERM");}
}
run().catch(e=>{console.error(e);process.exitCode=1;});
