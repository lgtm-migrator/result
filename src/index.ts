export type Ok<TValue> = {
    isError: false;
    value: TValue;
};

export type Error<TError> = {
    isError: true;
    error: TError;
};

export type Result<TValue> = Ok<TValue> | Error<string>;
export type CustomResult<TValue, TError> = Ok<TValue> | Error<TError>;

export const Result = {
    ok: <TValue>(value: TValue): Ok<TValue> => ({ isError: false, value }),
    error: <TError>(error: TError): Error<TError> => ({ isError: true, error }),
    get: <TValue>(source: Result<TValue>): TValue => {
        if (source.isError) {
            throw new Error('isError is true');
        }
        return source.value;
    },
};
