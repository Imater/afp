import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { mediaItems, typesSport, mainSport, partners } from '../components/settings';
import Footer from '../components/Main/Footer';

if (process.env.BROWSER) {
  require('./Media.less');
}

class Media extends Component {
  render() {
    const { language } = this.props;
    const types = typesSport;
    const main = typesSport;
    return (
      <div className="page Media">
        <TopPageMenu items={mediaItems} language={language} />
        <div className="page-block">
          <h2>
            {i18n.t('pages.media')}
          </h2>
          <div className="row">
          </div>
        </div>
        <div className="row">
          <ul className="partners-list">
            {
              //partners.map((partner, index) => {
              //  return (
              //    <li className="partner-item" key={index}>
              //      <a href="#" className="icon-p1">
              //        <img src={`/assets/svg/partner/${partner.file}`} />
              //      </a>
              //    </li>
              //  );
              //})
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
            //      <p>{type[language === 'eng' ? 'text_eng': 'text']}</p>
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

export default Media;
