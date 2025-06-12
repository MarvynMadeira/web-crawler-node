import Scraper from './scraper.js';

const scraperUrl = new Scraper('https://www.amazon.com.br/dp/6589132682');
    const html = await scraperUrl.startScraper();
    console.log(html);
        

/*
const url = "https://www.amazon.com.br/dp/6589132682";

async function main() {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: 'networkidle2' });

    const html = await page.content();
    await browser.close();

    console.log(html);
    
    const $  = cheerio.load(html);
    const book = [];

    $('.dp-container').each((i, element) => {
        const titleBook = $(element).find('#productTitle').text().trim();
        const priceSymbol = $(element).find('.a-price-symbol').first().text().trim();
        const priceBook = $(element).find('.a-price-whole').first().text().trim();
        
        console.log("nome do livro:", titleBook);
        console.log("nome do preço:", priceBook);


        if (!titleBook || !priceBook) {
            console.log('Informações não encontradas...');
            return;
        }
        
        book.push({
           titleBook,
           priceSymbol,
            priceBook,
        })
        console.log(book);

    });
}

main();
*/