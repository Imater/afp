import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { typesTechnology, mainTechnology } from '../components/settings';
import Footer from '../components/Main/Footer';
import Share from '../components/Share';

if (process.env.BROWSER) {
  require('./Technology.less');
}

class Technology extends Component {
  componentWillMount() {
    this.technologyItems = typesTechnology.map((item) => {
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
    const types = typesTechnology;
    const main = mainTechnology;
    return (
      <div className="page Technology" id="lineup">
        <TopPageMenu items={this.technologyItems} language={language} fixed={true} />
        <Share params={{
          url: 'http://alfafuture.com', //(typeof window === 'undefined') ? '' : window.location.href,
          title: i18n.t('pages.wonderTechnology'),
          descr: i18n.t('pages.wonderTechnology'),
          img_url: 'http://afp.ru/assets/img/share.jpg'
        }} />
        <div className="page-block">
          <div className="screen">
            <h2>
              {i18n.t('pages.wonderTechnology')}
            </h2>
          </div>
          <div className="row">
          </div>
        </div>
        <div className="items">
          <div className="item">
            {main[language]}
          </div>
        </div>
        <div className="items">
          {
            types.map((type, key) => {
              return (
                <div className="item" key={key} id={type.anchor}>
                  <h3>{type[language === 'eng' ? 'title_eng': 'title']}</h3>
                  <div dangerouslySetInnerHTML={{__html: type[language === 'eng' ? 'text_eng': 'text']}}></div>
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
