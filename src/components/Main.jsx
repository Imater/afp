import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import About from './Main/About';
import History from './Main/History';
import LineUp from './Main/LineUp';
import Technology from './Main/Technology';
import NewsLine from '../containers/NewsLine';
import Partner from './Main/Partner';
import Counter from './Main/Counter';
import Footer from './Main/Footer';
import ScrollLink from 'react-scroll';
import raf from 'raf'; //request next animation frame

const ScrollElement = ScrollLink.Element;

if (process.env.BROWSER) {
  require('./Main.less');
}

class Main extends Component {
  state = {
    rect: {
      top: 0,
    },
    screenHeight: 0,
    screenWidth: 0
  };

  componentDidMount () {
    const { cancel } = raf;
    let rafId;

    const update = () => {
      this.setState({
        rect: document.documentElement.getBoundingClientRect(),
        screenHeight: process.env.BROWSER ? window.innerHeight : 0,
        screenWidth: process.env.BROWSER ? window.innerWidth : 0
      });
    };

    const handleScroll = event => {
      cancel(rafId);
      rafId = raf(update);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    this.removeScrollHandler = () => {
      cancel(rafId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
    update();
  }

  componentWillUnmount() {
    this.removeScrollHandler();
  }

  render() {
    const { rect: {top}, screenHeight, screenWidth } = this.state;
    return (
      <div className="MainPage">
        <About
          ref='about'
          language={this.props.language}
          changeLanguage={this.props.changeLanguage}
          scrollY={-top}
          screenHeight={screenHeight}
          screenWidth={screenWidth}
        />
        {
          /*
          <History language={this.props.language} changeLanguage={this.props.changeLanguage} />
          */
        }
        <div className="double-top-margin" style={{
          height: screenHeight*2
        }}> </div>
        <LineUp />
        <div className='page black news-page'>
          <Technology />
          <NewsLine />
        </div>
        <Partner />
        <Counter />
        <Footer />
      </div>
    );
  }
}

export default Main;
