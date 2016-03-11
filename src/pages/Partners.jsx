import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { partnerItems, partners } from '../components/settings/partners';
import Footer from '../components/Main/Footer';

if (process.env.BROWSER) {
  require('./Partners.less');
}

class Partners extends Component {
  render() {
    const { language, params: { part } } = this.props;
    const lang = language === 'eng' ? '_eng' : '';
    const year = part || '2016';
    return (
      <div className="page Partners">
        <TopPageMenu items={partnerItems} language={language} />
        <div className="page-block">
          <div className="screen">
            <h2>
              {i18n.t('about.partners')} <br/>
              Alfa future people 2015
            </h2>
          </div>
          <div className="row">
          </div>
        </div>
        <div className="row">
          <ul className="partners-list items">
            {
              partners.map((partner, index) => {
                if(partner[`title${lang}`] === '' || partner.years.indexOf(year) === -1) {
                  return <span key={index} ></span>;
                }
                return (
                  <li className="partnerItem item" key={index} id={partner.name}>
                    <img src={`/assets/svg/partner-new/${partner.logo}`} width="100" className={`partnerLogo ${partner.name}`}/>
                    <h3 className="title">
                      {partner[language === 'eng' ? 'title_eng': 'title']}
                    </h3>
                    <p className="desc">
                      {partner[language === 'eng' ? 'desc_eng': 'desc']}
                    </p>
                    <a className="more" target='blank' href={partner.url}>{i18n.t('partners.more')}</a>
                  </li>
                );
              })
            }
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Partners;
