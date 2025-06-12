import BrowserLogic from './browser.js';

class Scraper {
    constructor(url) {
        this.url = url;
        this.browser = new BrowserLogic();
    }
    async startScraper() {
        try {
            await this.browser.start(this.url);
            const html = await this.browser.html();

            return html;
        }catch(error) {
        console.error('Algo deu errado...', error);   
        } finally {
            await this.browser.close();
        };
    }
}

export default Scraper;
