import { Result } from '../src';

describe('index', () => {
    it('works', () => {
        expect(Result.ok(1)).toEqual({ isError: false, value: 1 });
    });
});
