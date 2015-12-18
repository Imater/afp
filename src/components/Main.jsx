import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import About from './Main/About';
import History from './Main/History';
import LineUp from './Main/LineUp';
import Technology from './Main/Technology';
import News from './Main/News';
import Partner from './Main/Partner';
import Footer from './Main/Footer';

if (process.env.BROWSER) {
  require('../../assets/style.less');
}

class Main extends Component {
  render() {
    return (
      <div>
        <About />
        <History />
        <LineUp />
        <Technology />
        <News />
        <Partner />
        <Footer />
      </div>
    );
  }
}

export default Main;
