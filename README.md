# react-arc-text

>

[![NPM](https://img.shields.io/npm/v/react-arc-text.svg)](https://www.npmjs.com/package/react-arc-text)
![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat)
[![Build Status](https://travis-ci.org/kappys1/arc-text.svg?branch=master)](https://travis-ci.org/kappys1/arc-text)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


## Install

```bash
npm install --save react-arc-text
```

## Usage

```jsx
import React, { Component } from 'react'

import ReactArcText from 'react-arc-text'

class Example extends Component {
  private text = '';
  private classFont = '';
  private direction = 1;
  private arc = 150;


  render () {
    return (
      <ReactArcText
        text={text}
        direction={direction}
        arc={arc}
        class={classFont}
        />
    )
  }
}
```

## License

MIT © [alex marcos &lt;alexsbd1@gmail.com&gt;](https://github.com/alex marcos &lt;alexsbd1@gmail.com&gt;)
