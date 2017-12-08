'use strict';

exports.get = function(event, context, callback) {
  fetch('https://reqres.in/api/users?page=2').then((data) => {
    callback(null, response);
  });
};
