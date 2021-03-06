'use strict';

describe('Utils Service:', function () {

    var utilsService;

    beforeEach(function () {
        module('utils.service');
    });

    beforeEach(inject(function (_utilsService_) {
        utilsService = _utilsService_;
    }));

    it('Expects Utils Service to be defined', function () {
        expect(utilsService).to.not.be.undefined;
    });

    it('Expects functions to be set', function () {
        expect(utilsService.convertTime).to.not.be.undefined;
        expect(typeof utilsService.convertTime).to.be.equal('function');
        expect(utilsService.memorySet).to.not.be.undefined;
        expect(typeof utilsService.memorySet).to.be.equal('function');
        expect(utilsService.convertBw).to.not.be.undefined;
        expect(typeof utilsService.convertBw).to.be.equal('function');
    });

    it('Expects convert time in ms:1491561241781 to "10h 34m 1s"', function () {
        expect(utilsService.convertTime(1491561241781)).to.be.equal('10h 34m 1s');
    });

    it('Expects convert time in ms:1233455 to "20m 33s"', function () {
        expect(utilsService.convertTime(1233455)).to.be.equal('20m 33s');
    });

    it('Expects convert time in ms:23455 to "23s"', function () {
        expect(utilsService.convertTime(23455)).to.be.equal('23s');
    });

    it('Expects convert time in ms:0 to "0s"', function () {
        expect(utilsService.convertTime(0)).to.be.equal('0s');
    });

    it('Expects convert time in ms:-1 to "0s"', function () {
        expect(utilsService.convertTime(-3)).to.be.equal('0s');
    });

    it('Expect memorySet(0, 0) to return object with correct values', function () {
        expect(typeof utilsService.memorySet(0, 0)).to.be.equal('object');
        expect(utilsService.memorySet(0, 0)).to.include.keys('value', 'state');
        expect(utilsService.memorySet(0, 0)).to.be.deep.equal({ value: '-', state: '' });
    });

    it('Expect memorySet(231007368, 264765440) to return object with correct values', function () {
        expect(typeof utilsService.memorySet(231007368, 264765440)).to.be.equal('object');
        expect(utilsService.memorySet(231007368, 264765440)).to.include.keys('value', 'state');
        expect(utilsService.memorySet(231007368, 264765440)).to.be.deep.equal({ value: 12.750180688234839, state: 'list-group-item list-group-item-success' });
    });

    it('Expect memorySet(0, 0) to return object with correct values', function () {
        expect(typeof utilsService.memorySet(0, 0)).to.be.equal('object');
        expect(utilsService.memorySet(0, 0)).to.include.keys('value', 'state');
        expect(utilsService.memorySet(0, 0)).to.be.deep.equal({ value: '-', state: '' });
    });

    it('Expect memorySet((1000000, 264765440) to return object with correct values', function () {
        expect(typeof utilsService.memorySet(1000000, 264765440)).to.be.equal('object');
        expect(utilsService.memorySet(1000000, 264765440)).to.include.keys('value', 'state');
        expect(utilsService.memorySet(1000000, 264765440)).to.be.deep.equal({ value: 99.622307201423267, state: 'list-group-item list-group-item-danger' });
    });

    it('Expect memorySet((100000000, 264765440) to return object with correct values', function () {
        expect(typeof utilsService.memorySet(100000000, 264765440)).to.be.equal('object');
        expect(utilsService.memorySet(100000000, 264765440)).to.include.keys('value', 'state');
        expect(utilsService.memorySet(100000000, 264765440)).to.be.deep.equal({ value: 62.230720142326733, state: 'list-group-item list-group-item-warning' });
    });

    it('Expect convertBw(0) to return -', function () {
        expect(typeof utilsService.convertBw(0)).to.be.equal('string');
        expect(utilsService.convertBw(0)).to.be.equal('-');
    });

    it('Expect convertBw(54) to return 54 bit/s', function () {
        expect(typeof utilsService.convertBw(54)).to.be.equal('string');
        expect(utilsService.convertBw(54)).to.be.equal('54 bit/s');
    });

    it('Expect convertBw(5045) to return 5.04 Kbit/s', function () {
        expect(typeof utilsService.convertBw(5045)).to.be.equal('string');
        expect(utilsService.convertBw(5045)).to.be.equal('5.04 kbit/s');
    });

    it('Expect convertBw(5022344) to return 5.02 Mbit/s', function () {
        expect(typeof utilsService.convertBw(5022344)).to.be.equal('string');
        expect(utilsService.convertBw(5022344)).to.be.equal('5.02 Mbit/s');
    });

});