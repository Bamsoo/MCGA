const puppeteer = require('puppeteer'); 
const http = require('http');
const name = 'Mcg/a';
const port = '8888';
const app = new http.Server();

app.on('request', (req, res) => {
  get();
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Hello World');
  res.end('\n');
});

app.listen(port, () => {
  console.log(`${name} is listening on port ${port}`);
});


const get = async function(a, b) {
  const browser = await puppeteer.launch({args: ['--no-sandbox'], executablePath: '/opt/render/project/src/chrome/linux-142.0.7444.175/chrome-linux64/chrome'});
  const page = await browser.newPage();
  await page.goto('https://m7g-cdn.bamsoo.com/lp/landing-page/fake-rt-landing-page-MCY5VPXXPYA5GOZFPJUKUCEZRTVQ?firstName=aaa&lastName=bbb&company=ccc&email=fp@bamsoo.com');
  const pageTitle = await page.title();
  console.log('Page title: ' + pageTitle);
  await page.click('.button-text');
  await browser.close();
}