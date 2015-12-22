import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { partnerItems, typesSport, mainSport, partners } from '../components/settings';
import Footer from '../components/Main/Footer';

if (process.env.BROWSER) {
  require('./Partners.less');
}

class Partners extends Component {
  render() {
    const { language } = this.props;
    const types = typesSport;
    const main = typesSport;
    return (
      <div className="page Partners">
        <TopPageMenu items={partnerItems} language={language} />
        <div className="page-block">
          <h2>
            {i18n.t('about.partners')}
          </h2>
          <div className="row">
          </div>
        </div>
        <div className="row">
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
        <div className="page-text">
          {main[language]}
        </div>
        <div className="items">
          {
            //types.map((type, key) => {
            //  return (
            //    <div className="item" key={key}>
            //      <h3>{type[language === 'eng' ? 'title_eng': 'title']}</h3>
            //      <div>{type[language === 'eng' ? 'text_eng': 'text']}</div>
            //      <div>
            //        <Gallery images={type.images} />
            //      </div>
            //    </div>
            //  );
            //})
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default Partners;
