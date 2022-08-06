const puppeteer = require("puppeteer")
const fs = require("fs/promises")

async function CourseInformation() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto("https://vergil.registrar.columbia.edu/")

  // const courses = await page.evaluate(() => {
  //   return Array.from(document.querySelectorAll(".info strong")).map(x => x.textContent)
  // })
 
  // await page.click("#clickme")
  // const clickedData = await page.$eval("#data", el => el.textContent)
  // console.log(clickedData)

  inputString = "Christos H Papadimitriou"

  await page.type("#search", inputString)
  const info = await page.$eval("body > div.all-reviews > div:nth-child(1) > div.review-para > p", el => el.textContent)

  console.log(info)

  

  await browser.close()
}


CourseInformation()
