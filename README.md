# simpan.js [![Build Status](https://travis-ci.org/faizalpribadi/simpan.js.svg)](https://travis-ci.org/faizalpribadi/simpan.js)
Window Browser Local Storage API

`simpan.js` is a `window.localStorage` API. The HTML5 spec permits localStorage to only accept a String as value of an Object property, Simpan makes it possible to store entire JavaScript Objects.


### Storing and Objects arguments
Simpan allows you to automatically store JavaScript Objects and not just strings (default localStorage behaviour), allowing you to do the following:

```js
var person = {
	id: 1,
	name: 'Kamu',
	members: ['Aku', 'Kamu', 'Dia', 'Mereka']
}
simpan.set('person', person);
```

### set API
To set data into localStorage, you must use the `set()` API. There are two arguments, `key` for the Object's key, and `value` for the key value:

```js
simpan.set(key, value);
```

### get API
Obtaining set data is easy with the `get()` API, simply reference a previously set key with `key`:

```js
simpan.get(key);
```

### delete || remove API
Deleting set data is easy with the `delete()` API, again reference a previously set key with `key`:

```js
simpan.delete(key);
```

### clear API
It's a good idea to empty the user's localStorage when possible to avoid overloading it, there are limits which differ per browser. 

```js
simpan.clear();
```

## Installing with Bower
To install Simpan.js into your project using Bower, use the GitHub repository hook:

```
bower install https://github.com/faizalpribadi/simpan.js.git
```

### include in you're html file

```html
<body>
	<script src="dist/simpan.js"></script>
  <script>
  vault.set('name', 'Faizal Pribadi');
  </script>
</body>
```


