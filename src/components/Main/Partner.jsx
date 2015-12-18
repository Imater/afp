import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';

const partners = [
  {
    file: 'logo-alfa.svg'
  },
  {
    file: 'logo-ucs.svg'
  },
  {
    file: 'logo-alfa-insurance.svg'
  },
  {
    file: 'logo-mf.svg'
  },
  {
    file: 'logo-beeline.svg'
  },
  {
    file: 'logo-mentos.svg'
  },
  {
    file: 'logo-master.svg'
  },
  {
    file: 'logo-k.svg'
  },
  {
    file: 'logo-mini.svg'
  },
  {
    file: 'logo-axe.svg'
  },
  {
    file: 'logo-europa.svg'
  },
  {
    file: 'logo-mtv.svg'
  },
  {
    file: 'logo-gopro.svg'
  },
  {
    file: 'logo-twize.svg'
  },
  {
    file: 'logo-pepsi.svg'
  }
];

class News extends Component {
  render() {
    return (
      <div className="page news-page">
        <div className="row">
          <div className="left-col padding-left-50">
            <div className="col-title">
              <span>Партнеры</span><br />
              <a href="#" className="active">2016</a>
              <a href="#">2015</a>
              <a href="#">2014</a>
            </div>
          </div>
          <div className="right-col padding-right-40 text-right">
            <a href="#" className="transparent-button">Все партнеры</a>
          </div>
        </div>
        <div className="row padding-left-50 padding-right-40">
          <ul className="partners-list">
            {
              partners.map((partner, index) => {
                return (
                  <li className="partner-item" key={index}>
                    <a href="#" className="icon-p1">
                      <img src={`/assets/svg/partner/${partner.file}`} />
                    </a>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default News;
