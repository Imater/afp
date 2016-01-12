import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { faqItems } from '../components/settings';
import Footer from '../components/Main/Footer';

if (process.env.BROWSER) {
  require('./Store.less');
}

class Store extends Component {

  render() {
    const { language } = this.props;
    return (

      <div className="Store">

        <div className="content">

        </div>

        <Footer />
      </div>
    );
  }
}

export default Store;
