import React, { useState } from 'react'

import ReactArcText from 'react-arc-text'
import './App.scss'

const App = () =>  {
  const title = 'react-arc-text'

  const [text, setText] = useState('aa');
  const [arc, setArc] = useState(150);
  const [classFont, setClassFont] = useState('');
  const classes = [
    { name: 'Roboto', value: 'Roboto' },
    { name: 'Roboto Mono', value: 'Roboto-mono' },
    { name: 'Montserrat', value: 'Montserrat' },
    { name: 'Mountains of Christmas', value: 'Mountains' }
  ]
  const [direction, setDirection] = useState(1);
  const directions = [
    { name: 'clockwise', value: 1 },
    { name: 'counter-clockwise', value: -1 }
  ]


  return (
    <div  className="Page">
      <nav>
        <h1>{title}</h1>
      </nav>

      <section>
        <div className={'show ' + classFont}>
          <ReactArcText text={text} direction={direction} arc={arc} class={classFont} />
        </div>

        <div className="content">
          <div className="content-row">
            <div className="form-group">
              <label>Text</label>
              <input value={text}  onChange={e => setText(e.target.value)} type="text" />
            </div>
            <div className="form-group">
              <label>Arc</label>
              <input value={arc} onChange={e => setArc(+e.target.value)} type="number"/>
            </div>
          </div>
          <div className="content-row">
            <div className="form-group">
              <label>Text</label>
              <select className="custom-select" onChange={e => setClassFont(e.target.value)}>
                <option value="" disabled>Choose your font-family</option>
                {classes.map(c => <option key={c.value} value={c.value} >{c.name}</option>)}
              </select>
            </div>
            <div className="form-group">
              <label>Text</label>
                <select className="custom-select" onChange={e => setDirection(+e.target.value)}>
                <option value="" disabled>Choose the direction</option>
                {directions.map((direction) => <option key={direction.value} value={direction.value} >{direction.name}</option>)}
              </select>
            </div>
    </div>
        </div>
      </section>
    </div>

  )

}

export default App;
