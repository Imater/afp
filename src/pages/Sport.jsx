import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { sportItems, typesSport, mainSport } from '../components/settings';
import Footer from '../components/Main/Footer';

if (process.env.BROWSER) {
  require('./Sport.less');
}

class Sport extends Component {
  render() {
    const { language } = this.props;
    const types = typesSport;
    const main = typesSport;
    return (
      <div className="page Sport" id="lineup">
        <TopPageMenu items={sportItems} language={language} />
        <div className="page-block">
          <h2>
            {i18n.t('pages.sportAndExtrime')}
          </h2>
          <div className="row">
          </div>
        </div>
        <div className="row">
          <div className="icons">
            <img src="/assets/svg/sport-icons.svg" />
          </div>
        </div>
        <div className="page-text">
          {main[language]}
        </div>
        <div className="items">
          {
            types.map((type, key) => {
              return (
                <div className="item" key={key}>
                  <h3>{type[language === 'eng' ? 'title_eng': 'title']}</h3>
                  <div>{type[language === 'eng' ? 'text_eng': 'text']}</div>
                  <div>
                    <Gallery images={type.images} />
                  </div>
                </div>
              );
            })
          }
        </div>
        <Footer />
      </div>
    );
  }
}

export default Sport;
