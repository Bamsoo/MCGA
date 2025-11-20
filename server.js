const puppeteer = require('puppeteer'); 
const http = require('http');
const name = 'node-hello-world';
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
  //const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({args: ['--no-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://focus-pardot.fr/form/');
  const pageTitle = await page.title();
  await browser.close();
}