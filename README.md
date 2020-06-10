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
  ._box {
    background: #f00;
  }
`('project-bem');

console.log(bem`box`); // out .project-bem-box

box.classList.add('text', bem`box`);

// append <style>...css</style> in document.head
bem.init();
```

## VSCode Plugin

you can install es6-string-css:

[https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css](https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css)
