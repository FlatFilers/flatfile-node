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

const client = new FlatfileClient({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
});

const response = await client.events.create(
  'environment-id',
  Flatfile.Event.jobStarted({
    domain: Flatfile.Domain.File,
    topic: Flatfile.EventTopic.JobStarted,
    context: {
      accountId: 'account-id',
      environmentId: 'environment-id',
    },
    payload: {
      type: Flatfile.JobPayloadType.File,
      operation: Flatfile.JobOperationType.Extract,
    },
  })
);
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


## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/fern-flatfile/flatfile-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!
