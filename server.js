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
  //const browser = await puppeteer.launch({executablePath: '/path/to/Chrome'});
  const browser = await puppeteer.launch({args: ['--no-sandbox'], executablePath: '/opt/render/project/src/chrome/linux-142.0.7444.175/chrome-linux64/chrome'});
  const page = await browser.newPage();
  await page.goto('https://focus-pardot.fr/form/');
  const pageTitle = await page.title();
  console.log('Page title: ' + pageTitle);
  await browser.close();
}