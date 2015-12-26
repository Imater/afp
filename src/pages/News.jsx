import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import i18n from 'i18next-client';
import Social from '../components/Social';
import Gallery from '../components/Gallery';
import TopPageMenu from '../components/TopPageMenu';
import { newsItems, typesNews } from '../components/settings';
import Footer from '../components/Main/Footer';

if (process.env.BROWSER) {
  require('./News.less');
}

class News extends Component {
  render() {
    const { language } = this.props;
    const types = typesNews;
    return (
      <div className="page News" id="lineup">
        <TopPageMenu items={newsItems} language={language} />
        <div className="newsMainItems">
          {
            types.map((type, key) => {
              if(key===0) {
                return (
                  <div className="newsItem" key={key}>
                    <div className="wrapper">
                      <div className="row newsBlock">
                        <div className="image" style={{
                          backgroundImage: `url(${type.image})`
                        }}>
                          <a className="imageLink" href="#"></a>
                        </div>
                        <div className="info">
                          <div className="group">
                            <a className="groupLink" href="#">{type.group}</a>
                          </div>
                          <div className="title">
                            <a className="titleLink" href="#">{type[language === 'eng' ? 'title_eng': 'title']}</a>
                          s</div>
                          <div className="preview">{type[language === 'eng' ? 'preview_eng': 'preview']}</div>
                          <div className="date">{type.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          }
        </div>
        <div className="newsItems">
          <div className="row newsItemsHolder">
            {
              types.map((type, key) => {
                  if(key>0) {
                  return (
                    <div className="newsItem" key={key}>
                      <div className="wrapper">
                        <div className="newsBlock">
                          <div className="image" title={type[language === 'eng' ? 'preview_eng': 'preview']} style={{
                            backgroundImage: `url(${type.image})`
                          }}>
                            <a className="imageLink" href="#"></a>
                          </div>
                          <div className="group">
                            <a className="groupLink" href="#">{type.group}</a>
                          </div>
                          <div className="title">
                            <a className="titleLink" href="#">{type[language === 'eng' ? 'title_eng': 'title']}</a>
                          </div>
                          <div className="date">{type.date}</div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            }
          </div>
          <div className="newsMore">
            <a href="#" className="newsMoreLink">
              <span className="newsMoreIcon"></span> Показать ещё
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default News;
