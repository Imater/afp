import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { aboutMain } from '../components/settings/about';
import Footer from '../components/Main/Footer';
import $ from 'jquery'

if (process.env.BROWSER) {
  require('./Rules.less');
}

class Partners extends Component {

  componentWillMount () {
    if (typeof window !== 'undefined') {
     $('body').addClass('overflow-hidden');
    }
   }
   componentWillUnmount () {
     $('body').removeClass('overflow-hidden');
   }

  render() {
    const { language } = this.props;
    const part = this.props.location.query.part ? this.props.location.query.part : 'festival';
    return (
      <div className="Popup Rules">
        <div className="wrap" onClick={() => {
            this.props.history.goBack()
          }}></div>
        <div className="block">
          <a href="javascript:void();" className="close" onClick={() => {
            this.props.history.goBack()
          }}></a>
          {aboutMain.rules[part][language === 'eng' ? 'text_eng' : 'text']}
        </div>
      </div>
    );
  }
}

export default Partners;
