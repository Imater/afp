import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import { partners } from '../settings';


class News extends Component {
  render() {
    return (
      <div className="page news-page" id="partners">
        <div className="row">
          <div className="left-col padding-left-50">
            <div className="col-title">
              <span>{i18n.t('about.partners')}</span>
              <br />
              {/*<a href="#" className="active">2016</a>*/}
              <a href="#" className="active">2015</a>
              {/*<a href="#">2014</a>*/}
            </div>
          </div>
          <div className="right-col padding-right-40 text-right">
            <Link to="/partners" className="transparent-button">
              <span>{i18n.t('about.allPartners')}</span>
            </Link>
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
