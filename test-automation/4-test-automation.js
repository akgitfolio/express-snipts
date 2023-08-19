const puppeteer = require('puppeteer');

describe('End-to-end testing', () => {
  let browser, page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  afterAll(() => {
    browser.close();
  });

  it('should render the homepage', async () => {
    await page.goto('http://localhost:3000');
    const text = await page.evaluate(() => document.querySelector('body').textContent);
    expect(text).toContain('Hello World!');
  });
});
