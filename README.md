# @kizahasi/result

![GitHub](https://img.shields.io/github/license/kizahasi/result) [![npm version](https://img.shields.io/npm/v/@kizahasi/result.svg?style=flat)](https://www.npmjs.com/package/@kizahasi/result) ![minified size](https://img.shields.io/bundlephobia/min/@kizahasi/result) [![CI](https://github.com/kizahasi/result/actions/workflows/main.yml/badge.svg?branch=main)](https://github.com/kizahasi/result/actions/workflows/main.yml) [![publish](https://github.com/kizahasi/result/actions/workflows/publish.yml/badge.svg?branch=release)](https://github.com/kizahasi/result/actions/workflows/publish.yml)

Represents a value which is either OK or error.

## Installation

Run `npm install @kizahasi/result` or `yarn add @kizahasi/result`

## Usage

```typescript
import { Result } from '@kizahasi/result';

const okObj = Result.ok(1); // Creates an "ok" object
// const okObj: Result<number> = { isError: false, value: 1 }; // …or you can create the object like this instead
if (okObj.isError) {
    console.log(okObj.error); // This cannot happen
} else {
    console.log(okObj.value); // output: 1
}

const errorObj = Result.error('ERROR!'); // Creates an "error" object
// const errorObj: Result<ANY-VALUE-TYPE> = { isError: true, error: 'ERROR!' }; // …or you can create the object like this instead
if (errorObj.isError) {
    console.log(errorObj.error); // output: ERROR!
} else {
    console.log(errorObj.value); // This cannot happen
}
```
