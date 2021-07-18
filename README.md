# @kizahasi/result

Represents a value which can be an error.

## Example

```typescript
import { Result } from '@kizahasi/result';

const okObj = Result.ok(1);
if (okObj.isError) {
    console.error(okObj.error) // This cannot happen because okObj is not an error
} else {
    console.log(okObj.value); // output: 1
}

const errorObj = Result.error('ERROR!');
if (errorObj.isError) {
    console.error(errorObj.error) // output: ERROR!
} else {
    console.log(errorObj.value); // This cannot happen because errorObj is an error
}
```
