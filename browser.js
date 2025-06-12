import puppeteer from 'puppeteer';

class BrowserLogic {
    async start(url) {
        this.browser = await puppeteer.launch({ headless: true });
        this.page = await this.browser.newPage();

        await this.page.goto(url, { waitUntil: 'networkidle2' });
    }
    async html() {
        const pageContent = await this.page.content();
        
        if (!this.page) {
            throw new Error('A página não foi encontrada...');
        }
        else
        return pageContent;
    }
    async close() {
        if (this.browser) {
            await this.browser.close();
        }

    }     
}

export default BrowserLogic;

