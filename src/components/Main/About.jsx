import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../Social';

class About extends Component {
  render() {
    return (
      <div className="page main-page">
        <div className="row">
          <div className="left-col padding-left-50">
            <a href="#" className="logo"></a>
          </div>
          <div className="right-col text-right padding-right-40">
            <a href="#" className="language">en</a>
          </div>
        </div>
        <div className="row padding-left-50">
          <h1>главный фестиваль<br />музыки и технологий</h1>
          <div className="festival-date">22-24 июля 2016 года</div>
        </div>
        <div className="row bottom-row how-was-row">
          <div className="left-col padding-left-50">
            <div className="how-it-was">Alfa Future Prople 2015<br />Как это было</div>
          </div>
          <div className="right-col padding-right-40 text-right">
            <a href="#" className="eubea"></a>
            <a href="#" className="kudago"></a>
          </div>
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

export default About;
