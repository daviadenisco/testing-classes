'use strict';

var Solution = require('./solution');

describe('Solution', function () {
    it('2 should equal 2', function () {
        expect(2).to.equal(2);
    });

    it('shoud say hello', function () {
        const wp = new Solution("gerry")
        console.log(wp);

        expect(wp.greet()).to.equal("gerry says hello.");
    });

    it('new set should be empty', function () {
        const result = new Solution();
        expect(result.isEmpty()).to.equal(true);
    });

    it('added something that was not there should return true', function () {
        const result = new Solution();
        expect(result.addNew(2)).to.equal(true);
    });

    it('when adding an element, if element already exists, then return false', function () {
        // given
        const result = new Solution();
        result.addNew(2);
        // when and then
        expect(result.addNew(2)).to.equal(false);
    });

    it('when adding an element to a set with multiple elements, if element already exists, then return false', function () {
        // given
        const result = new Solution();
        result.addNew(1);
        result.addNew(2);
        result.addNew(3);
        // when and then
        expect(result.addNew(2)).to.equal(false);
    });

    it('when the set includes an element then it should return true', function () {
        const result = new Solution();
        result.addNew(1);
        result.addNew(2);
        result.addNew(3);
        expect(result.includesEl(3)).to.equal(true);
    })
});