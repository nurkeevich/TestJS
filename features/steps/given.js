const { Given } = require('cucumber');

Given('I\'m at Google home page', async function () {
    console.log(await this.page);
    // await this.page.goto("https://www.google.com");
});