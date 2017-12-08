'use strict';
const fs = require('fs');

exports.get = function(event, context, callback) {
  const contents = fs.readFileSync("public/index.html");
  const response = {
    statusCode: 200,
    body: contents.toString(),
    headers: {'Content-Type': 'text/html'}
  };
  callback(null, response);
};
