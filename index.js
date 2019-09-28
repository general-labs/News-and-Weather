/**
 * Fetch Weather, News Headlines and Links Using Serverless ES6
 */

import { getNews, getWeather } from "./modules/weather";
import { createResponse } from "./util/util";

// Default Serverless Lambda Handler.
export const handler = async (event, context) => {
  return Promise.all([getWeather, getNews]).then(function (values) {
    return createResponse(200, {
      message: 'successful',
      data: [].concat.apply([], values)
    });
  }).catch(function (err) {
    return createResponse(500, {
      message: err.message,
      data: null
    });
  })

};
