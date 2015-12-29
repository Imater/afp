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
            {i18n.t('about.partners')} <br/>
            Alfa future people 2015
          </h2>
          <div className="row">
          </div>
        </div>
        <div className="row">
          <ul className="partners-list">
            {
              partners.map((partner, index) => {
                return (
                  <li className="partnerItem" key={index}>
                    <img src={`/assets/svg/partner-new/${partner.logo}`} width="100" className="partnerLogo"/>
                    <h3 className="title">
                      {partner[language === 'eng' ? 'title_eng': 'title']}
                    </h3>
                    <p className="desc">
                      {partner[language === 'eng' ? 'desc_eng': 'desc']}
                    </p>
                    <a className="more">{i18n.t('partners.more')}</a>
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
