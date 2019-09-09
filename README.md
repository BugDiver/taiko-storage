<h1 align="center">
	<br>
	<img src="./assets/taiko-storage.png" alt="Taiko Storage">
	<br>
	<br>
	<br>
</h1>


[![Actions Status](https://github.com/bugdiver/taiko-storage/workflows/tests/badge.svg)](https://github.com/BugDiver/taiko-storage/actions)

# taiko-storage

A taiko plugin to interact with browser storages (local and session).

## Installation

- `npm install taiko-storage --save`

## Usage

```javascript
const { openBrowser, closeBrowser, click, storage: {local, session} } = require('taiko');

(async () => {
    try {
        await openBrowser();
        await local.setItem("Key", "Value");
        let value = await local.getItem("Key");
        // more actions
        // ...
    } finally {
        await closeBrowser();
    }
})();
```

## APIs

The plugin exposes two variables `local` and `session` which represents to the respective storages.
The APIs for both the storage are same and try to very close the the native storage apis.

### `setItem(key, value)`

set the given key value to storage

```js
await local.setItem(key, value);
// or
await session.setItem(key, value);

```

### `getItem(key)`

featch the value for given key from storage

```js
await local.getItem(key);
// or
await session.getItem(key);

```


### `hasItem(key)`

validate if the given key exists in storage.

```js
await local.hasItem(key);
// or
await session.hasItem(key);

```


### `removeItem(key)`

remove the item with given key from the storage.

```js
await local.removeItem(key);
// or
await session.removeItem(key);

```


### `clear()`

clear the stoarage

```js
await local.clear();
// or
await session.clear();

```

### `length()`

tell the no of items in storage.

```js
await local.length();
// or
await session.length();

```

## Use in Taiko REPL

To launch the REPL type `taiko --plugin taiko-storage` in your favorite terminal application. This will launch the Taiko Prompt.

e.g
`Version: 0.7.0 (Chromium:74.0.3723.0) Type .api for help and .exit to quit`

You should now have full access to local and session storage apis in the taiko REPL window
