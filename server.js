const puppeteer = require('puppeteer'); 
const express = require('express')
const app = express()
const port = process.env.PORT || 4000 
const lp = 'https://m7g-cdn.bamsoo.com/lp/landing-page/fake-rt-landing-page-MCY5VPXXPYA5GOZFPJUKUCEZRTVQ';

app.get('/', (req, res) => {
  var e = req.query.email ? req.query.email : "";
  var f = req.query.firstName ? req.query.firstName : "";
  var l = req.query.lastName ? req.query.lastName : "";
  var c = req.query.company ? req.query.company : "";
  get(e,f,l,c);
  res.json({ email: e, firstName: f, lastName: l, company: c})
})

const get = async function(e,f,l,c) {
  if(e==='' || f==='' || l==='' || c==='') return;
  const browser = await puppeteer.launch({args: ['--no-sandbox'], executablePath: '/opt/render/project/src/chrome/linux-142.0.7444.175/chrome-linux64/chrome'});
  const page = await browser.newPage();
  await page.goto(lp + '?email=' + e + '&firstName=' + f + '&lastName=' + l + '&company=' + c);
  const pageTitle = await page.title();
  console.log('Page title: ' + pageTitle);
  await page.click('.button-text');
  await browser.close();
}

app.listen(port, () => { console.log(`Listening on port ${port}`) })
