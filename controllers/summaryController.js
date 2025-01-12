var puppeteer = require('puppeteer-core');
const {executablePath} = require('puppeteer');
const axios = require('axios');

var summaryController = () => {
    var Summary = require('../models/summaryModel')();
    const openaiAPIKey = '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';

    async function post(req, res) {
        let url = req.query.url;
        console.log('===ni sulod ari===', url);
        if (url) {
            try {
                const browser = await puppeteer.launch({
                    headless: false,
                    defaultViewport: false,
                    userDataDir: "./tmp",
                    executablePath: executablePath(),
                });
                const page = await browser.newPage();
                await page.goto(url, { waitUntil: 'domcontentloaded' });
        
                const content = await page.evaluate(() => {
                    const bodyText = document.body.innerText;
                    return bodyText;
                });
                browser.close();
                async function summarizeText(text) {
                    const response = await axios.post('https://api-inference.huggingface.co/models/facebook/bart-large-cnn', { // t5-base / facebook/bart-large-cnn
                            inputs: content,
                        }, {
                        headers: {
                            'Authorization': `Bearer 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`,
                            'Content-Type': 'application/json'
                        }
                    });
                    return {
                        status: response.status, 
                        summary: response.data[0].summary_text
                    } // summary_text / translation_text
                }
                const summary = await summarizeText(content);
                console.log('=====', summary)
                let data = {
                    summary: summary.data,
                    status: summary.status
                }
                save(data)
                // res.json(summary).send();
            } catch (e) {
                console.log('=::==', e)
                // save(e)
                res.json(e).send();
            }

            function save(data){
                console.log('==', data)
                // let summary = new Summary({
                //     url: '',
                //     status: '',
                //     summary: '',
                //     err: {
                //         code: '',
                //         msg: ''
                //     }
                // });
            }

        } else res.status(400).send('url field is required.')
    }

    async function get(req, res) {
        console.log('===ni sulod ari===');

        
    }
    return {
        post: post,
        get: get
    }
}

module.exports = summaryController;