import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../Social';

class History extends Component {
  render() {
    return (
      <div className="page djs-page">
        <div className="djs-block">
          <div className="row">
            <div className="left-col padding-left-50">
              <div className="col-title">
                <a href="#" className="active">2016</a>
                <a href="#">2015</a>
                <a href="#">2014</a>
              </div>
            </div>
            <div className="right-col padding-right-40 text-right">
              <a href="#" className="line-up-button transparent-button">Line-up фестиваля</a>
            </div>
          </div>
          <div className="row line-up">
            <ul>
              <li className="dj1"></li>
              <li className="dj2"></li>
              <li className="dj3"></li>
              <li className="dj4"></li>
              <li className="dj5"></li>
              <li className="dj6"></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
