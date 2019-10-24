const isOddOrEven = require('../even-or-odd/index.js');

let assert = require('chai').assert;
 
describe('isOddOrEven', function() {
    it('1 => odd', function(){
        let actual = isOddOrEven('1');
        let expected = 'odd';

        assert.equal(actual, expected, 'incorrect result for odd length');
    });
    it('11 => even', function(){
        let actual = isOddOrEven('11');
        let expected = 'even';

        assert.equal(actual,expected, 'incorrect result for even length');
    });

    it('[] => undefined', function(){
        let actual = isOddOrEven([]);

        assert.isUndefined(actual);
    });
});