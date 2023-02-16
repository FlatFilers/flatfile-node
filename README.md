# Flatfile Node API Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/flatfile)](https://www.npmjs.com/package/@fern-api/flatfile)

The Flatfile Node.js library provides convenient access to the Flatfile API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://flatfile.stoplight.io/docs/v10).

## Installation
```
npm install --save @fern-api/flatfile
# or
yarn add @fern-api/flatfile
```

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/flatfile-typescript-sdk?file=app.ts&view=editor)

```typescript
import { Flatfile, FlatfileClient } from '@fern-api/flatfile';

const flatfile = new FlatfileClient({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
});

const environment = await flatfile.environments.create({
  name: 'dev',
  isProd: false,
  newSpacesInherit: false,
  guestAuthentication: ['shared_link'],
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
    console.log(err.statusCode) // 400
    console.log(err.name) // BadRequestError
    console.log(err.message); 
  }
}
```

Error codes are as followed:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequestError`          |
| 404         | `NotFoundError`            |


## Events

The flatfile platform emits different events (e.g. user:added, webhook:removed). The SDK has first-class support for union types that make it easy to handle specific events. 

```ts
const event = eventResponse.data;
if (event.type === 'job:started') {
  console.log(event.payload.operation); // FILE
  console.log(event.payload.type); // PIPELINE
} else if (event.type === 'records:created') {
  console.log(event.payload.count) // 100
}
```


## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-flatfile/flatfile-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
