/**
 * Weather and News Module.
 */

import axios from "axios";
import cheerio from "cheerio";

// Scrape Web Data.
const scrapeData = (html) => {
  let data = [];
  const $ = cheerio.load(html);
  $('table.itemlist tr td:nth-child(3)').each((i, elem) => {
    data.push({
      title: $(elem).text(),
      link: $(elem).find('a.storylink').attr('href')
    });
  });
  return data;
}

// Scrape Weather.
const scrapeWeather = (html) => {
  const cX = cheerio.load(html);
  return {
    temperature: cX('div.today_nowcard-temp').text(),
    description: cX('div.today_nowcard-phrase').text(),
    feels_like: cX('div.today_nowcard-feels').text()
  };
}


// Fetch News Data
export const getNews = axios.get('https://news.ycombinator.com').then((response) => {
  return scrapeData(response.data);
})

export const getWeather = axios.get('https://weather.com/weather/today/l/ee618281672d242aa4be45bc8be745b2e044086129dc3ea9a298be1ceec92343').then((response) => {
  return scrapeWeather(response.data);
})

