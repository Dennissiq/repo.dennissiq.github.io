import React, { Component } from 'react';
import './css/custom.css'

import Home from './components/Pages/Home'
import Projects from './components/Pages/Projects'
import HeaderHome from './components/Headers/HeaderHome'
import ScrollableAnchor from 'react-scrollable-anchor'

class App extends Component {

  render() {
    return (
      <div>
        <HeaderHome/>
        <ScrollableAnchor id={'home'}>
            <Home/>
        </ScrollableAnchor>
        <ScrollableAnchor id={'projects'}>
            <Projects/>
        </ScrollableAnchor>
      </div>
    );
  }
}

export default App;
