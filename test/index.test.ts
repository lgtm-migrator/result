import { Result } from '../src';

it('tests Ok', () => {
    const okObj = Result.ok(1);
    if (okObj.isError) {
        throw new Error('should not be error');
    } else {
        expect(okObj.value).toBe(1);
    }
});

it('tests Error', () => {
    const errorValue = 'ERROR';
    const errorObj = Result.error(errorValue);
    if (errorObj.isError) {
        expect(errorObj.error).toBe(errorValue);
    } else {
        throw new Error('should be error');
    }
});
