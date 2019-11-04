'use strict';

var Solution = require('./solution IBM');

describe('Solution', function () {
    let result;

    this.beforeEach(function () {
        result = new Solution();
    })

    it('1 equals empty array', function () {
        expect(result.primeFactors(1)).to.deep.equal([]);
    })
    it('2 returns [2]', function () {
        expect(result.primeFactors(2)).to.deep.equal([2]);
    })
    it('3 returns [3]', function () {
        expect(result.primeFactors(3)).to.deep.equal([3]);
    })
    it('4 returns [2, 2]', function () {
        expect(result.primeFactors(4)).to.deep.equal([2, 2]);
    })
    it('5 returns [5]', function () {
        expect(result.primeFactors(5)).to.deep.equal([5]);
    })
    it('6 returns [2, 3]', function () {
        expect(result.primeFactors(6)).to.deep.equal([2, 3]);
    })
    it('8 returns [2, 2, 2]', function () {
        expect(result.primeFactors(8)).to.deep.equal([2, 2, 2]);
    })
    it('10 returns [2, 5]', function () {
        expect(result.primeFactors(8)).to.deep.equal([2, 5]);
    })
});