import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../Social';

class History extends Component {
  render() {
    return (
      <div className="page second-page">
        <div className="row">
          <div className="left-col padding-left-50">
            <div className="col-title">
              <span>Как это было</span><br />
              <a href="#" className="active">2015</a>
              <a href="#">2014</a>
            </div>
          </div>
          <div className="right-col text-right padding-right-40">
            <a href='javascript:void(0)' className="language" onClick={this.props.changeLanguage.bind(this, this.props.language==='eng' ? 'ru' : 'eng')}>
              {this.props.language==='eng' ? 'en' : 'ru'}
            </a>
          </div>
        </div>
        <div className="row vertical-center-row padding-left-50">
          <div className="was-block scene-block" data-name="сцен">6</div>
          <div className="was-block dj-block" data-name="диджеев">100</div>
          <div className="was-block sound-block" data-name="звука">1МВТ</div>
          <div className="was-block viewer-block" data-name="зрителей">50 000</div>
          <div className="was-block hectare-block" data-name="гектаров">75</div>
        </div>
        <div className="row bottom-row social-row">
          <div className="left-col padding-left-50 text-left">
            <div className="festival-location">Нижний Новгород, аэродром на берегу Волги</div>
            <div className="plus18">18+</div>
          </div>
          <div className="right-col padding-right-40 text-right">
            <Social />
          </div>
        </div>
      </div>
    );
  }
}

export default History;
