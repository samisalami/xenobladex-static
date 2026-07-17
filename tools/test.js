const puppeteer = require('puppeteer');
const BASE='http://127.0.0.1:8099';
const routes=['/','/kreaturen','/missionen','/faq','/guides','/kollektikon','/material','/sammelitems','/erweiterungen','/impressum'];
(async()=>{
  const browser=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
  for(const r of routes){
    const page=await browser.newPage();
    const errs=[], failed=[];
    page.on('console',m=>{ if(m.type()==='error') errs.push(m.text()); });
    page.on('pageerror',e=>errs.push('PAGEERR '+e.message));
    page.on('requestfailed',req=>failed.push(req.url()+' '+ (req.failure()&&req.failure().errorText)));
    page.on('response',res=>{ if(res.status()>=400) failed.push(res.status()+' '+res.url()); });
    try{
      await page.goto(BASE+r,{waitUntil:'networkidle0',timeout:20000});
      await new Promise(res=>setTimeout(res,1200));
    }catch(e){ errs.push('GOTO '+e.message); }
    const info=await page.evaluate(()=>{
      const mv=document.querySelector('.main-view');
      const txt=(mv?mv.innerText:'').trim();
      return {len:txt.length, sample:txt.slice(0,140).replace(/\s+/g,' '),
              rows:document.querySelectorAll('.main-view table tr').length,
              imgs:document.querySelectorAll('.main-view img').length,
              hasHeader:!!document.querySelector('[ng-include]')};
    });
    const slug=r==='/'?'home':r.replace(/\//g,'_');
    await page.screenshot({path:`shots/${slug}.png`,fullPage:false});
    // filter noise: font/analytics external
    const f2=failed.filter(u=>!/fonts.googleapis|google-analytics|gstatic/.test(u));
    console.log(`\n=== ${r} ===`);
    console.log(` text=${info.len} rows=${info.rows} imgs=${info.imgs} sample="${info.sample}"`);
    if(errs.length) console.log(' JS ERRORS:', errs.slice(0,4));
    if(f2.length) console.log(' FAILED REQ:', f2.slice(0,6));
    await page.close();
  }
  await browser.close();
})();
