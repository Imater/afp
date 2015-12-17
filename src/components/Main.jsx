import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';

if (process.env.BROWSER) {
  require('../../assets/style.less');
}

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="sidebar">
          <a href="/" className="sidebar-logo"></a>
          <ul className="menu">
            <li><a href="#">о фестивале</a></li>
            <li><a href="#">line-up</a></li>
            <li><a href="#">технологии</a></li>
            <li><a href="#">спорт</a></li>
            <li><a href="#">новости</a></li>
            <li><a href="#">партнеры</a></li>
            <li><a href="#">медиа</a></li>
            <li><a href="#">контакты</a></li>
          </ul>
          <a href="#" className="buy-ticket">Купить билет</a>
        </div>
        <div className="wrapper">
          <div className="container">
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
