import { getPageCount, genRange } from './utils';

test('getPageCount', () => {
    expect(getPageCount(1, 10)).toEqual(1);
    expect(getPageCount(9, 10)).toEqual(1);
    expect(getPageCount(11, 10)).toEqual(2);
});

test('genRange', () => {
    expect(genRange(2, 1, 5)).toEqual(expect.arrayContaining([1, 2]));
    expect(genRange(9, 1, 5)).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
    expect(genRange(9, 6, 5)).toEqual(expect.arrayContaining([2, 3, 4, 5, 6]));
});
