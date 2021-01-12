const { sum } = require('./index');
// import sum from './index';

describe('sum function', () => {
    it('should do sum', () => {
        expect(sum([1,2])).toEqual(3);
    })
})