const puppeteer = require('puppeteer');

const url = "https://amazon.com.br";

async function main() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url);
    let pageTitle = await page.title();

    console.log("Título da página:", pageTitle);

    await browser.close();    
}

main();