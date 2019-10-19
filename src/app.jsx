import React, { Component } from 'react';
import { render } from 'react-dom';

import './styles.css';

class MyApp extends Component {
  render() {
    return (
      <div >
        React Image Magnifier Component
      </div >
    );
  }
}

render(<MyApp />, document.getElementById('root'));
