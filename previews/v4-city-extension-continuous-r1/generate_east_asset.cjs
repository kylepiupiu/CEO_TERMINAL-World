/* Reproduce the user-approved R1 east-map pixels from its HTML canvas.
   Art input: previews/v4-city-extension-continuous-r1/index.html
   Output: 1672x941 cropped east half. The original city texture remains unchanged. */
const {chromium}=require('playwright');
const {spawn}=require('node:child_process');
const fs=require('node:fs');
const PORT=8987;
async function main(){
 const server=spawn('python3',['-m','http.server',String(PORT),'--bind','127.0.0.1'],{stdio:'ignore'});
 let browser;
 try{
   browser=await chromium.launch({headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
   const page=await browser.newPage({viewport:{width:1280,height:720}});
   await page.goto('http://127.0.0.1:'+PORT+'/previews/v4-city-extension-continuous-r1/index.html');
   await page.waitForFunction(()=>window.__CT_V4_CITY_QA__?.state.loaded);
   const data=await page.evaluate(()=>{
     if(STAGE.width!==3344||STAGE.height!==941)throw new Error('Unexpected R1 map dimensions');
     const east=document.createElement('canvas');
     east.width=1672;east.height=941;
     east.getContext('2d').drawImage(STAGE,1672,0,1672,941,0,0,1672,941);
     return east.toDataURL('image/png').split(',')[1];
   });
   const out='previews/v4-city-extension-continuous-r1/assets/city_east.png';
   fs.mkdirSync(require('node:path').dirname(out),{recursive:true});
   fs.writeFileSync(out,Buffer.from(data,'base64'));
   console.log('ART GENERATED',out,fs.statSync(out).size);
 }finally{if(browser)await browser.close();server.kill('SIGTERM');}
}
main().catch(e=>{console.error(e);process.exitCode=1;});
