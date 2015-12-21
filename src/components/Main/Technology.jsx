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
            <div className="technology-item"><span>Технологии</span></div>
          </div>
          <div className="right-col" id="sport">
            <div className="sport-item"><span>Спорт</span></div>
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
