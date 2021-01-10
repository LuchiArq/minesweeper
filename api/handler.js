'use strict';
//serverless offline --skipCacheInvalidation start  *comando para probar funcion offline
module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

/* scores:
    handler: auth/authHandler.scores
    events:
      - http:
          path: scores
          method: post
          cors: true*/