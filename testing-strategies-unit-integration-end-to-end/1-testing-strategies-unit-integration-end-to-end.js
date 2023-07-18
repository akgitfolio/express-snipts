const puppeteer = require('puppeteer');

describe('E2E: sign up', function() {
  let browser, page;

  before(async function() {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  after(async function() {
    await browser.close();
  });

  it('should sign up a new user', async function() {
    await page.goto('http://localhost:3000');
    await page.type('input[name=name]', 'John Doe');
    await page.type('input[name=email]', 'johndoe@example.com');
    await page.type('input[name=password]', 'secret');
    await page.click('button[type=submit]');
    await page.waitForSelector('h1', { text: 'Welcome, John Doe!' });
  });
});
