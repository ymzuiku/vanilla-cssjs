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

const bem = 'about-project-name';

css`
  .-bem-box {
    background: #f00;
  }
`(bem);

css.class(box, '-bem-box', bem);
```