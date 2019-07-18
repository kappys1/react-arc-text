# react-arc-text

> Wrapper Library of [arc-text](https://github.com/kappys1/arc-text) to curve any text font on the web directly with React.


[![NPM](https://img.shields.io/npm/v/react-arc-text.svg)](https://www.npmjs.com/package/react-arc-text)
![licence](https://img.shields.io/badge/licence-MIT-blue.svg?style=flat)
[![Build Status](https://travis-ci.org/kappys1/react-arc-text.svg?branch=master)](https://travis-ci.org/kappys1/react-arc-text)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


## Install

```bash
npm install --save react-arc-text
```

## Examples

[Here](https://kappys1.github.io/react-arc-text/)


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

## Params
| Parameter | Type | Default | Description |
| ------ | ------ | ------ | ------ |
| text | string |  | Text you want to curve |
| arc | number | 150 | Angle you want to curve |
| direction | number | 1 | 1 is clockwise mode and -1 is counter-clockwise mode |
| class | string |  | to add class into Component |

## Author
Alex Marcos Gutierrez

## License
MIT © [alex marcos &lt;alexsbd1@gmail.com&gt;](https://github.com/alex marcos &lt;alexsbd1@gmail.com&gt;)
