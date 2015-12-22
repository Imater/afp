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
import Counter from './Main/Counter';
import Footer from './Main/Footer';
import ScrollLink from 'react-scroll';

const ScrollElement = ScrollLink.Element;

if (process.env.BROWSER) {
  require('./Main.less');
}

class Main extends Component {
  render() {
    return (
      <div>
        <About language={this.props.language} changeLanguage={this.props.changeLanguage} />
        <History language={this.props.language} changeLanguage={this.props.changeLanguage} />
        <LineUp />
        <Technology />
        <News />
        <Partner />
        <Counter />
        <Footer />
      </div>
    );
  }
}

export default Main;
