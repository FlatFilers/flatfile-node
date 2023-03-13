# Flatfile Node API Library

[![npm shield](https://img.shields.io/npm/v/@flatfile/api-beta)](https://www.npmjs.com/package/@flatfile/api-beta)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://github.com/fern-api/fern)

The Flatfile Node.js library provides convenient access to the Flatfile API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://flatfile.stoplight.io/docs/v10).

## Installation

```
npm install --save @flatfile/api-beta
# or
yarn add @flatfile/api-beta
```

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/flatfile-typescript-sdk-7xtsm5?file=app.ts&view=editor)

```typescript
import { Flatfile, FlatfileClient } from '@flatfile/api-beta';

const flatfile = new FlatfileClient({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
});

const environment = await flatfile.environments.create({
  name: 'dev',
  isProd: false,
  newSpacesInherit: false,
  guestAuthentication: [Flatfile.GuestAuthentication.SharedLink],
});

console.log('Created environment with id', environment.id);
```

## Handling errors

When the API returns a non-success status code (4xx or 5xx response), a subclass of [FlatfileError](https://github.com/fern-flatfile/flatfile-node/blob/main/src/errors/FlatfileError.ts) will be thrown:

```ts
try {
  await client.agents.get("environment-id", "agent-id");
} catch (err) {
  if (err instanceof FlatfileError) {
    console.log(err.statusCode); // 400
    console.log(err.message); // "BadRequestError"
    console.log(err.body); // list of errors
  }
}
```

Error codes are as followed:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 404         | `NotFoundError`            |


## Handling events

The flatfile platform emits different events (e.g. `user:added`, `webhook:removed`). The SDK uses [discriminated unions](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions) that make it easy to handle specific events. 

```ts
const event = eventResponse.data;
if (event.type === 'job:started') {
  console.log(event.payload.operation); // FILE
  console.log(event.payload.type); // PIPELINE
} else if (event.type === 'records:created') {
  console.log(event.payload.count) // 100
}
```

## Fields

The SDK uses [discriminated unions](https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#discriminating-unions) that make it easy to introspect different fields.

```ts
for (const field of sheet.config.fields) {
    if (field.type === 'boolean') {
      console.log(field.config?.allowIndeterminate); // false
    } else if (field.type === "number") {
      console.log(field.config?.decimalPlaces); // 2
    } else if (field.type === "enum") {
      console.log(field.config.allowCustom); // true
    }
}
```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/FlatFilers/flatfile-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
