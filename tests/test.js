const expect = require('chai').expect;
const strlib = require('../index');


describe('string manipulation library', function () {
    describe('reverse strings', function () { 
        it('return true when string is successfully reversed', function () {
            const startingString = "backwards";
            const result = "sdrawkcab";
            expect(strlib.reverseString(startingString)).to.equal(result);
        });
    })

    describe('replace strings', function () { 
        it('return true when string is successfully replaced', function () {
            const startingString = "1000 strings";
            const replacementString = "variables";

            expect(strlib.replaceString(startingString, /strings/, replacementString)).to.not.equal(startingString);
        });
    })
});
