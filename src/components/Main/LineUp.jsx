import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../Social';
import Scrollable from '../Scrollable';

class History extends Component {
  render() {
    return (
      <div className="page djs-page" id="lineup">
          <div className="djs-block">
            <div className="row">
              <div className="left-col padding-left-50">
                <div className="col-title">
                  <Link to="/lineup/2016/main" className="active">2016</Link>
                  <Link to="/lineup/2015/main">2015</Link>
                  <Link to="/lineup/2014/main">2014</Link>
                </div>
              </div>
              <div className="right-col padding-right-40 text-right">
                <Link to="lineup" className="line-up-button transparent-button">
                  {
                    i18n.t('about.lineup')
                  }
                </Link>
              </div>
            </div>
            <Scrollable x={true} y={false}>
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
            </Scrollable>
          </div>
      </div>
    );
  }
}

export default History;
