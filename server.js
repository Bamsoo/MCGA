const puppeteer = require('puppeteer'); 
const express = require('express')
const app = express()
const port = process.env.PORT || 4000 

app.get('/', (req, res) => {
  get();
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`${name} listening on port ${port}`)
})

const get = async function(a, b) {
  const browser = await puppeteer.launch({args: ['--no-sandbox'], executablePath: '/opt/render/project/src/chrome/linux-142.0.7444.175/chrome-linux64/chrome'});
  const page = await browser.newPage();
  await page.goto('https://m7g-cdn.bamsoo.com/lp/landing-page/fake-rt-landing-page-MCY5VPXXPYA5GOZFPJUKUCEZRTVQ?firstName=aaa&lastName=bbb&company=ccc&email=fp@bamsoo.com');
  const pageTitle = await page.title();
  console.log('Page title: ' + pageTitle);
  await page.click('.button-text');
  await browser.close();
}


