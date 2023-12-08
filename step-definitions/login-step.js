const { Given, When, Then, defineStep } = require("@cucumber/cucumber")

Given('I visit the login page', async function () {
    await page.goto("https://www.saucedemo.com/")
})
