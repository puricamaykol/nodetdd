var chai = require('chai');
var nock = require('nock');
var Tax = require('./../../src/part2/tax');
var expect = chai.expect;
// ...

describe('tax', function() {

	
it('calculate() should resolve with an object containing the tax details', function(done) {
  nock('https://some-tax-service.com')
    .post('/request')
    .reply(200, function(uri, requestBody) {
      var resultado = requestBody.subtotal * 0.10;
      return {
        amount: resultado
      };
    });
  var tax = new Tax();
  tax.calculate(100, 'CA', function(taxDetails) {
    expect(taxDetails).to.eql({ amount: 10 });
    done();
  });
});

});