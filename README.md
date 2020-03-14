# vanilla-cssjs

> Size 300b

## Install

```sh
$ npm install --save vanilla-cssjs
```

## Simple Example


```js
import css from 'vanilla-cssjs';

css`
  body {
    color: #555;
  }
  .title {
    font-size: 30px;
  }
`;
```

## Use BEM css

```js
import css from 'vanilla-cssjs';

const box = document.getElementById('box');

// ._bod：Start at underline is Random BEM name
// .text: It is global css

const bem = css`
  .text {
    color: #555;
  }
  ._box {
    background: #f00;
  }
`;

box.classList.add(bem`text _box`));
```

## VSCode Plugin

you can install es6-string-css:

[https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css](https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css)
