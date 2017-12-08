'use strict';
const fs = require('fs');

exports.get = function(event, context, callback) {
  callback(null, fetch('https://reqres.in/api/users?page=2'));
};
