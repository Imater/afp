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
import raf from 'raf';

const ScrollElement = ScrollLink.Element;

if (process.env.BROWSER) {
  require('./Main.less');
}

class Main extends Component {
  state = {
    rect: {
      top: 0
    }
  }

  componentDidMount () {
    const { cancel } = raf;
    let rafId;

    const update = () => {
      this.setState({
        rect: document.documentElement.getBoundingClientRect(),
      });
    };

    const handleScroll = event => {
      cancel(rafId);
      rafId = raf(update);
    }

    window.addEventListener('scroll', handleScroll);
    this.removeScrollHandler = () => {
      cancel(rafId);
      window.removeEventListener('scroll', handleScroll);
    }
  }

  componentWillUnmount() {
    this.removeScrollHandler();
  }

  render() {
    const { rect: {top} } = this.state;
    return (
      <div>
        <About ref='about' language={this.props.language} changeLanguage={this.props.changeLanguage} scrollY={-top}/>
        <History language={this.props.language} changeLanguage={this.props.changeLanguage} />
        <LineUp />
        <div className='page black'>
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
