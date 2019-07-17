import React, { Component, useState } from 'react'

import ExampleComponent from 'react-arc-text'

const App = () =>  {


  const [text, setText] = useState('');

  return (
    <div>
      <ExampleComponent text={text} />
    </div>
  )

}

export default App;
