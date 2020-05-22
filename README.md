# vanilla-cssjs

> Size 300b

## Install

```sh
$ npm install --save vanilla-cssjs
```

## Use BEM css

```js
import css from 'vanilla-cssjs';

const box = document.getElementById('box');

// .__bod：Start at underline is Random BEM name
// .text: It is global css

const bem = css`
  .text {
    color: #555;
  }
  .__box {
    background: #f00;
  }
`;

console.log(bem`box`); // out .c9238498493_box

box.classList.add('text', bem`box`);
```

## VSCode Plugin

you can install es6-string-css:

[https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css](https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css)
