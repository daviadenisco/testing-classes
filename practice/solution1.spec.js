'use strict';

var Solution1 = require('./solution1');

describe('Solution1', function () {
    it('2 should equal 2', function () {
        expect(2).to.equal(2);
    });

    // this test passes because "gerry" is hardcoded in this.name
    // not because "gerry" is being passed in  to the new instance.
    // passing "gerry" into the new instance does nothing bc 
    // sentence isn't being used in greet()
    it('should say hello', function () {
        // create new instance of Solution and pass in
        // a sentence and a name
        // const wp = new Solution1("gerry");
        const wp = new Solution1(" says hello.", "Davia");
        console.log(wp);
        // update expect 
        // expect(wp.greet()).to.equal("gerry says hello.");
        expect(wp.greet()).to.equal("Davia says hello.");
    });

    it('should say amount of pets', function () {
        let result = new Solution1(' says hi', 'Davia', ['cat', 'cat', 'bird', 'fish']);
        expect(result.howManyPets()).to.equal(4);
    });

});