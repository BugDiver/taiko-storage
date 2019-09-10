<h1 align="center">
	<br>
	<img src="./assets/taiko-storage.png" alt="Taiko Storage">
	<br>
	<br>
	<br>
</h1>

[![npm version](https://badge.fury.io/js/taiko-storage.svg)](https://badge.fury.io/js/taiko-storage)
[![Actions Status](https://github.com/bugdiver/taiko-storage/workflows/tests/badge.svg)](https://github.com/BugDiver/taiko-storage/actions)

# taiko-storage

A taiko plugin to interact with browser storages (localStorage and sessionStorage).

## Installation

- `npm install taiko-storage --save`

## Usage

```javascript
const { openBrowser, closeBrowser, click, storage: { localStorage, sessionStorage} } = require('taiko');

/*
OR

const { openBrowser, closeBrowser, click, storage } = require('taiko');
const {localStorage, sessionStorage} = storage;

*/

(async () => {
    try {
        await openBrowser();
        await localStorage.setItem("Key", "Value");
        let value = await localStorage.getItem("Key");
        // more actions
        // ...
    } finally {
        await closeBrowser();
    }
})();
```

## APIs

The plugin exposes two variables `localStorage` and `sessionStorage` which represents to the respective storages.
The APIs for both the storage are same and try to very close the the native storage apis.

### `setItem(key, value)`

set the given key value to storage

```js
await localStorage.setItem(key, value);
// or
await sessionStorage.setItem(key, value);

```

### `getItem(key)`

featch the value for given key from storage

```js
await localStorage.getItem(key);
// or
await sessionStorage.getItem(key);

```


### `hasItem(key)`

validate if the given key exists in storage.

```js
await localStorage.hasItem(key);
// or
await sessionStorage.hasItem(key);

```


### `removeItem(key)`

remove the item with given key from the storage.

```js
await localStorage.removeItem(key);
// or
await sessionStorage.removeItem(key);

```


### `clear()`

clear the stoarage

```js
await localStorage.clear();
// or
await sessionStorage.clear();

```

### `length()`

tell the no of items in storage.

```js
await localStorage.length();
// or
await sessionStorage.length();

```

## Use in Taiko REPL

To launch the REPL type `taiko --plugin taiko-storage` in your favorite terminal application. This will launch the Taiko Prompt.

e.g
`Version: 0.7.0 (Chromium:74.0.3723.0) Type .api for help and .exit to quit`

You should now have full access to localStorage and sessionStorage apis in the taiko REPL window
