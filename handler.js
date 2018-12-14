'use strict';
const axios = require('axios');

module.exports.getCuteGIF = async (event, context, callback) => {
  try {
    const getGif = await axios({
      method: 'get',
      url: 'http://api.giphy.com/v1/gifs/random',
      params: {
        api_key: 'frSQ6MzJrd8pszX75bVR9y1B2DcZ4pX8',
        tag: 'cute cat'
      }  
    });
    console.log("data", getGif.data.data.image_url)
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html'
      },
      body: `<img src=${getGif.data.data.image_url} />`
    };
  callback(null, response);

} catch (e) {
  console.log(e);
  
}
};

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
