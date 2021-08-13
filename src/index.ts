export type Ok<TValue> = {
    isError: false;
    value: TValue;
    error?: undefined;
};

export type Error<TError = string> = {
    isError: true;
    value?: undefined;
    error: TError;
};

export type Result<TValue, TError = string> = Ok<TValue> | Error<TError>;

export const Result = {
    ok: <TValue>(value: TValue): Ok<TValue> => ({ isError: false, value }),
    error: <TError>(error: TError): Error<TError> => ({ isError: true, error }),
    get: <TValue>(source: Result<TValue>): TValue => {
        if (source.isError) {
            throw new Error('isError must not be true');
        }
        return source.value;
    },
};
