# @nib-components/react-footer-small

Small nib footer react component.

## Installation

```bash
npm install --save @nib-components/react-footer-small
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import FooterSmall from '@nib-components/react-footer-small';

ReactDOM.render(
  <FooterSmall/>,
  document.querySelector('#app')
);
```

### Notes

- Requires `flexbox` class on `<html>` element for grid utilities to work. Most likely you'll be using modernizr to add this.
- Also requires `<meta charset="UTF-8">` for the copyright symbol to render correctly

## Change log

0.2.4

- fix: update privacy policy link

0.2.2

 - fix: remove `react` `dependencies` to `peerDependencies`
