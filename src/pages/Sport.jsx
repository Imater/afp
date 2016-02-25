import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { sportItems, typesSport, mainSport } from '../components/settings/sport';
import Footer from '../components/Main/Footer';
import Share from '../components/Share';

if (process.env.BROWSER) {
  require('./Sport.less');
}

class Sport extends Component {
  componentWillMount() {
    this.sportItems = typesSport.map((item) => {
      return {
        title: item.title,
        title_eng: item.title_eng,
        url: item.url,
        anchor: item.anchor
      };
    });
  }
  render() {
    const { language } = this.props;
    const types = typesSport;
    const main = typesSport;
    return (
      <div className="page Sport" id="lineup">
        <TopPageMenu items={this.sportItems} language={language} fixed={true} />
        <Share params={{
          url: 'http://alfafuture.com', //(typeof window === 'undefined') ? '' : window.location.href,
          title: i18n.t('pages.sportAndExtrime'),
          descr: i18n.t('pages.sportAndExtrime'),
          img_url: 'http://afp.ru/assets/img/share.jpg'
        }} />
        <div className="page-block">
          <div className="screen aboutTop">
            <h2>
              {i18n.t('pages.sportAndExtrime')}
            </h2>
          </div>
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
              const title = type[language === 'eng' ? 'title_eng': 'title'];
              return (
                <div className="item" key={key} id={type.anchor}>
                  <h3>{title}</h3>
                  <div>{type[language === 'eng' ? 'text_eng': 'text']}</div>
                  <div>
                    <Gallery images={type.images} title={title} />
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
