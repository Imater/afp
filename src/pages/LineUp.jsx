import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import TopPageMenu from '../components/TopPageMenu';
import { lineUpItems } from '../components/settings';

class LineUp extends Component {
  render() {
    const { language } = this.props;
    return (
      <div className="page djs-page" id="lineup">
        <TopPageMenu items={lineUpItems} language={language} />
        <div className="djs-block">
          <div className="row">
            <div className="left-col padding-left-50">
              <div className="col-title">
                <a href="javascript:void(0);" className="active">2016</a>
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

export default LineUp;
