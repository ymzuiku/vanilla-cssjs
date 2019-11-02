# vanilla-cssjs

> Size 300b

## Install

```sh
$ npm install --save vanilla-cssjs
```

## Use

```js
import style from 'vanilla-cssjs';

const box = document.getElementById('box');

const bem = css.bem('bem-'); // default arg is 'bem-'

css`
  .bem-box {
    background: #f00;
  }
`(bem);

css.class(box, 'bem-box', bem);
```

## VSCode

you can install es6-string-css:

[https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css](https://marketplace.visualstudio.com/items?itemName=bashmish.es6-string-css)
