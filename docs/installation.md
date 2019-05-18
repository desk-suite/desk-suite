# Installation

## Direct Download / CDN

https://unpkg.com/desk-suite/dist/desk-suite 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/desk-suite@{{ $version }}/dist/desk-suite.js
 
Include desk-suite after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/desk-suite/dist/desk-suite.js"></script>
```

## NPM

```sh
$ npm install desk-suite
```

## Yarn

```sh
$ yarn add desk-suite
```

When used with a module system, you must explicitly install the `desk-suite` via `Vue.use()`:

```javascript
import Vue from 'vue'
import desk-suite from 'desk-suite'

Vue.use(desk-suite)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `desk-suite` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//desk-suite.git node_modules/desk-suite
$ cd node_modules/desk-suite
$ npm install
$ npm run build
```

