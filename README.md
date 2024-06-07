# Flatfile Node API Library

[![npm shield](https://img.shields.io/npm/v/@flatfile/api)](https://www.npmjs.com/package/@flatfile/api)
[![fern shield](https://img.shields.io/badge/%F0%9F%8C%BF-SDK%20generated%20by%20Fern-brightgreen)](https://buildwithfern.com/?utm_source=flatfilers/flatfile-node/readme)

The Flatfile Node.js library provides convenient access to the Flatfile API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://reference.flatfile.com).

## Installation

```
npm install --save @flatfile/api
# or
yarn add @flatfile/api
```

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/flatfile-typescript-sdk-7xtsm5?file=app.ts&view=editor)

```typescript
import { FlatfileClient } from '@flatfile/api';

async function main() {
  const flatfile = new FlatfileClient({
    // This is usually the environment specific "Secret Key" that can be found
    // on the Getting Started page in the Flatfile dashboard.
    token: 'YOUR_API_KEY',
  });

  const workbook = await flatfile.workbooks.create({
    name: 'SDK Example',
    sheets: [
      {
        name: 'Contacts',
        slug: 'contacts',
        fields: [
          {
            key: 'firstName',
            type: 'string',
            label: 'First Name',
          },
          {
            key: 'lastName',
            type: 'string',
            label: 'Last Name',
          },
          {
            key: 'email',
            type: 'string',
            label: 'Email',
          },
        ],
        actions: [
          {
            slug: 'submitAction',
            label: 'Submit',
            type: 'string',
            description: 'Submit data to webhook.site',
            primary: true,
          },
        ],
      },
    ],
  });

  console.log('Created workbook with id:', workbook.data.id);
}
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
if (event.type === 'job:ready') {
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

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest [opening an issue](https://github.com/FlatFilers/flatfile-node/issues) first to discuss with us!

On the other hand, contributions to the README are always very welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.txt) file for details.
