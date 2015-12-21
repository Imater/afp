import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { technologyItems, typesTechnology, mainTechnology } from '../components/settings';
import Footer from '../components/Main/Footer';

if (process.env.BROWSER) {
  require('./Technology.less');
}

class Technology extends Component {
  render() {
    const { language } = this.props;
    const types = typesTechnology;
    const main = mainTechnology;
    return (
      <div className="page Technology" id="lineup">
        <TopPageMenu items={technologyItems} language={language} />
        <div className="page-block">
          <h2>
            {i18n.t('pages.wonderTechnology')}
          </h2>
          <div className="row">
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
                  <p>{type[language === 'eng' ? 'text_eng': 'text']}</p>
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

export default Technology;
