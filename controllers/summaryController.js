var puppeteer = require('puppeteer-core');
const {executablePath} = require('puppeteer')

var summaryController = () => {
    var Summary = require('../models/summaryModel')();


    
    async function post(req, res) {
        const browser = await puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath(),
            headless: chromium.headless
        });
   
        
    }

    async function get(req, res) {
        console.log('===ni sulod ari===')
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: false,
            userDataDir: "./tmp",
            executablePath: executablePath(),
        });
        const page = await browser.newPage();
        await page.goto('https://github.com/colbyfayock/my-scraper/blob/main/src/app/api/scraper/route.ts');

        const asd = await page.evaluate(() => {
            const pgTag = document.querySelector('html');
            return pgTag.innerHTML;
        });

        console.log('==', asd);    
        res.status(200).send();
        // await browser.close();
        // res.json({asdas: 'adasd'})
    }

    return {
        post: post,
        get: get
    }
}

module.exports = summaryController;