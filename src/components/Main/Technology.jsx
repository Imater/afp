import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';

class Technology extends Component {
  render() {
    return (
      <div id="technology">
        <div className="row">
          <div className="left-col">
            <Link to="/technology">
              <div className="technology-item">
                <div className="bg"></div>
                <span>{i18n.t('about.technology')}</span>
              </div>
            </Link>
          </div>
          <div className="right-col" id="sport">
            <Link to="/sport">
              <div className="sport-item">
                <div className="bg"></div>
                <span>{i18n.t('about.sport')}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="festival-block">
          <div className="row">
          </div>
        </div>
      </div>
    );
  }
}

export default Technology;
