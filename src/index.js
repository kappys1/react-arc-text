import React, { Component } from 'react'
import PropTypes from 'prop-types'

import ArcText from 'arc-text'

export default class ReactArcText extends Component {
  static propTypes = {
    text: PropTypes.string,
    class: PropTypes.string,
    direction: PropTypes.number,
    arc: PropTypes.number
  }

  checkProps = () => {
    this.text = this.props.text || ''
    this.direction = this.props.direction || 1
    this.arc = this.props.arc || 150
    this.class = this.props.class || ''
  }

  arcLetters = () => {
    this.checkProps()
    if (this.container) {
      if (this.textCyrcle) {
        this.textCyrcle.destroy()
      }

      this.container.innerHTML = this.text
      this.textCyrcle = new ArcText(this.container)
      this.textCyrcle.arc(this.arc)
      this.textCyrcle.direction(this.direction)
    }
  }

  componentDidMount() {
    this.arcLetters()
  }

  render() {
    this.arcLetters()
    return (
      <div className={'react-arc-text ' + this.class} ref={(el) => { this.container = el }} />
    )
  }
}
