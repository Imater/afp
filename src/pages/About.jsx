import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import TopPageMenu from '../components/TopPageMenu';
import { technologyItems } from '../components/settings';

if (process.env.BROWSER) {
  require('./About.less');
}

class About extends Component {
  render() {
    const { language } = this.props;
    return (
      <div className="page About" id="lineup">
        <TopPageMenu items={technologyItems} language={language} />
        <div className="page-block">
          <h2>
            О ФЕСТИВАЛЕ
          </h2>
          <div className="row">
          </div>
        </div>
        <div className="page-text">
        </div>
      </div>
    );
  }
}

export default About;
