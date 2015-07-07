var app = require('../../Scripts/app.js')
//var assert = require("assert")
var expect = require("chai").expect;

describe('App', function () {
    describe('foo()', function () {
        it('should equal bar', function () {
            //assert.equal(app._test.foo(), 'bar');
            expect(app._test.foo()).to.equal('bar');
        });
    });
    
    describe('INFINITY', function () {
        it('should equal infinity', function () {
            //assert.equal(app._test.INFINITY, 'infinity');
            expect(app._test.INFINITY).to.equal('infinity');
        });
    });
});