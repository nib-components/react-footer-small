# @nib-components/react-footer-small

Small nib footer react component.

## Installation

    npm install @nib-components/react-footer-small

## Usage

    import React from 'react';
    import ReactDOM from 'react-dom';
    import FooterSmall from '@nib-components/react-footer-small';

    ReactDOM.render(
      <FooterSmall/>,
      document.querySelector('#app')
    );

### Notes

- Requires `flexbox` class on `<html>` element for grid utilities to work. Most likely you'll be using modernizr to add this.
- Also requires `<meta charset="UTF-8">` for the copyright symbol to render correctly
