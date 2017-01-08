'use strict'
var request = require('request');
class Tax {
	 calculate(subtotal, state, done) {
    request.post({
      url: 'https://some-tax-service.com/request',
      method: 'POST',
      json: {
        subtotal: subtotal // added the subtotal in the request payload
      }
    }, function(error, response, body) {
      done(body);
    });
  }
}

module.exports = Tax;